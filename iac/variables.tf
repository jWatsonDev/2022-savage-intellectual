variable "project" {
  type = string
  description = "Project name"
}

variable "location" {
  type = string
  description = "Azure region to deploy module to"
}

variable "resource_group" {
  type        = string
  description = "Resource Group Name"
}
