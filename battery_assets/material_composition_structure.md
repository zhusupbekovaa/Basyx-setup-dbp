# 📘 Material Composition Structure

## MaterialComposition (BatteryPass 1.2.0)

This submodel defines the material breakdown of the battery module.

## Purpose

-   Chemical composition transparency
-   Critical raw material declaration
-   Hazardous substance reporting

## Structure Overview

    MaterialComposition
    │
    ├── totalMass
    ├── materialBreakdown
    │     ├── materialName
    │     ├── materialPercentage
    │     └── materialClassification
    ├── criticalRawMaterials
    └── hazardousSubstances

## Key Properties

-   **totalMass** → Total mass of battery\
-   **materialBreakdown** → Detailed composition list\
-   **criticalRawMaterials** → CRM declaration\
-   **hazardousSubstances** → Hazardous materials declaration

## Role in Battery Passport

Enables transparency for sustainability and recycling.
