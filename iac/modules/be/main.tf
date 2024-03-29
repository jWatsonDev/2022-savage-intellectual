// create storage account for functions
resource "azurerm_storage_account" "storage_account" {
  name = "${var.project}store"
  resource_group_name = var.resource_group
  location = var.location
  account_tier = "Standard"
  account_replication_type = "LRS"
}

// app insights
resource "azurerm_application_insights" "application_insights" {
  name                = "${var.project}-application-insights"
  location            = var.location
  resource_group_name = var.resource_group
  application_type    = "Node.JS"
}

// app service plan 
resource "azurerm_app_service_plan" "app_service_plan" {
  name                = "${var.project}-app-service-plan"
  resource_group_name = var.resource_group
  location            = var.location
  kind                = "FunctionApp"
  reserved = true # this has to be set to true for Linux. Not related to the Premium Plan
  sku {
    tier = "Dynamic"
    size = "Y1"
  }
}

// create function app
resource "azurerm_function_app" "function_app" {
  name                       = "${var.project}-function-app"
  resource_group_name        = var.resource_group
  location                   = var.location
  app_service_plan_id        = azurerm_app_service_plan.app_service_plan.id
  app_settings = {
    "WEBSITE_RUN_FROM_PACKAGE" = "",
    "FUNCTIONS_WORKER_RUNTIME" = "node",
    "APPINSIGHTS_INSTRUMENTATIONKEY" = azurerm_application_insights.application_insights.instrumentation_key,
  }
  os_type = "linux"
  site_config {
    linux_fx_version          = "node|14"
    use_32_bit_worker_process = false
  }
  storage_account_name       = azurerm_storage_account.storage_account.name
  storage_account_access_key = azurerm_storage_account.storage_account.primary_access_key
  version                    = "~3"

  lifecycle {
    ignore_changes = [
      app_settings["WEBSITE_RUN_FROM_PACKAGE"],
    ]
  }
}