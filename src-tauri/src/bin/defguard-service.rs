//! defguard interface management daemon
//!
//! This binary is meant to run as a daemon with root privileges
//! and communicate with the desktop client over HTTP.

use defguard_client::service::run_server;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // initialize tracing
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env().unwrap_or_else(|_| {
                "debug,tower_http=debug,axum::rejection=trace,hyper=info".into()
            }),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    // run gRPC server
    run_server().await?;

    Ok(())
}
