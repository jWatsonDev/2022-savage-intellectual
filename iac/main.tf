terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
    }
  }
  backend "azurerm" {
  }

}

provider "azurerm" {
  features {}
}

// create resource group
resource "azurerm_resource_group" "resource_group" {
  name     = var.resource_group
  location = var.location
}

module "ui" {
	source = "./modules/ui"
  project = var.project
  location = var.location
  resource_group = var.resource_group
}

module "be" {
	source = "./modules/be"
  project = var.project
  location = var.location
  resource_group = var.resource_group
}

