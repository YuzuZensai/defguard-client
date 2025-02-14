fn main() -> Result<(), Box<dyn std::error::Error>> {
    // compiling protos using path on build time
    let mut config = prost_build::Config::new();
    // enable optional fields
    config.protoc_arg("--experimental_allow_proto3_optional");
    // make sure empty DNS is deserialized correctly as None
    config.type_attribute(".DeviceConfig", "#[serde_as]");
    config.field_attribute(
        ".DeviceConfig.dns",
        "#[serde_as(deserialize_as = \"NoneAsEmptyString\")]",
    );
    // Make all messages serde-serializable
    config.type_attribute(".", "#[derive(serde::Serialize,serde::Deserialize)]");
    tonic_build::configure().compile_with_config(
        config,
        &[
            "proto/client/client.proto",
            "proto/enrollment/enrollment.proto",
        ],
        &["proto/client", "proto/enrollment"],
    )?;

    tauri_build::build();

    Ok(())
}
