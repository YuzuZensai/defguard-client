use crate::{
    database::{Instance, Location, WireguardKeys},
    utils::setup_interface,
    AppState,
};
use serde::{Deserialize, Serialize};
use tauri::State;
use wireguard_rs::netlink::delete_interface;

// Create new wireguard interface
#[tauri::command]
pub async fn connect(location_id: i64, app_state: State<'_, AppState>) -> Result<(), String> {
    if let Some(location) = Location::find_by_id(&app_state.get_pool(), location_id)
        .await
        .map_err(|err| err.to_string())?
    {
        setup_interface(location, &app_state.get_pool())
            .await
            .map_err(|err| err.to_string())?;
    }
    Ok(())
}

#[tauri::command]
pub async fn disconnect(location_id: i64, app_state: State<'_, AppState>) -> Result<(), String> {
    if let Some(location) = Location::find_by_id(&app_state.get_pool(), location_id)
        .await
        .map_err(|err| err.to_string())?
    {
        delete_interface(&location.name).map_err(|err| err.to_string())?;
    }
    Ok(())
}
#[derive(Debug, Serialize, Deserialize)]
pub struct Device {
    pub id: i64,
    pub name: String,
    pub pubkey: String,
    pub user_id: i64,
    pub created_at: i64,
}

#[derive(Serialize, Deserialize)]
pub struct DeviceConfig {
    pub network_id: i64,
    pub network_name: String,
    pub config: String,
    pub endpoint: String,
    pub assigned_ip: String,
    pub pubkey: String,
    pub allowed_ips: String,
}

pub fn device_config_to_location(device_config: DeviceConfig) -> Location {
    Location {
        id: None,
        instance_id: device_config.network_id,
        network_id: device_config.network_id,
        name: device_config.network_name,
        address: device_config.assigned_ip, // Transforming assigned_ip to address
        pubkey: device_config.pubkey,
        endpoint: device_config.endpoint,
        allowed_ips: device_config.allowed_ips,
    }
}

#[derive(Serialize, Deserialize)]
pub struct CreateDeviceResponse {
    instance_info: Instance,
    configs: Vec<DeviceConfig>,
    device: Device,
}

#[tauri::command(async)]
pub async fn save_device_config(
    private_key: String,
    response: CreateDeviceResponse,
    app_state: State<'_, AppState>,
) -> Result<(), String> {
    let mut transaction = app_state
        .get_pool()
        .begin()
        .await
        .map_err(|err| err.to_string())?;
    let mut instance = Instance::new(
        response.instance_info.name,
        response.instance_info.uuid,
        response.instance_info.url,
    );
    instance
        .save(&mut *transaction)
        .await
        .map_err(|e| e.to_string())?;
    let mut keys = WireguardKeys::new(instance.id.unwrap(), private_key, response.device.pubkey);
    keys.save(&mut *transaction)
        .await
        .map_err(|err| err.to_string())?;
    for location in response.configs {
        let mut new_location = device_config_to_location(location);
        new_location
            .save(&mut *transaction)
            .await
            .map_err(|err| err.to_string())?;
    }
    transaction.commit().await.map_err(|err| err.to_string())?;
    Ok(())
}

#[tauri::command(async)]
pub async fn all_instances(app_state: State<'_, AppState>) -> Result<Vec<Instance>, String> {
    Instance::all(&app_state.get_pool())
        .await
        .map_err(|err| err.to_string())
}

#[tauri::command(async)]
pub async fn all_locations(
    instance_id: i64,
    app_state: State<'_, AppState>,
) -> Result<Vec<Location>, String> {
    Location::find_by_instance_id(&app_state.get_pool(), instance_id)
        .await
        .map_err(|err| err.to_string())
}
