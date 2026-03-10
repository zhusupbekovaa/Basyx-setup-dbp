# 📘 Erklärung der Submodell-Struktur

## LabelsForBatteries (BatteryPass 1.2.0)

Dieses Dokument beschreibt die Struktur des Submodells
**LabelsForBatteries** für ein Batterie-Modul gemäß BatteryPass Data
Model 1.2.0.

------------------------------------------------------------------------

## 🔎 Ziel des Submodells

Das Submodell definiert regulatorische und produktbezogene
Kennzeichnungen der Batterie.

Typische Inhalte:

-   Label-Identifikation
-   Label-Typ (z. B. QR-Code)
-   Version
-   Gültigkeitszeitraum
-   Sprachangabe
-   Verweis auf Bild/QR-Code
-   Optionale Feld-Wert-Struktur

------------------------------------------------------------------------

## 🧱 Strukturüberblick

    LabelsForBatteries
    │
    ├── labelIdentifier
    ├── labelType
    ├── labelVersion
    ├── labelDescription
    ├── labelLanguage
    ├── labelValidFrom
    ├── labelValidUntil
    ├── labelImageLink
    └── LabelFields
          ├── fieldName
          └── fieldValue

------------------------------------------------------------------------

## 🔹 labelIdentifier

Eindeutige Kennung des Labels.

------------------------------------------------------------------------

## 🔹 labelType

Art des Labels (z. B. QR Code, PDF, Digital Label).

------------------------------------------------------------------------

## 🔹 labelVersion

Version der Labeldefinition.

------------------------------------------------------------------------

## 🔹 labelDescription

Beschreibung des Labels.

------------------------------------------------------------------------

## 🔹 labelLanguage

ISO-Sprachcode (z. B. de, en).

------------------------------------------------------------------------

## 🔹 labelValidFrom / labelValidUntil

Gültigkeitszeitraum des Labels.

------------------------------------------------------------------------

## 🔹 labelImageLink

URL oder Referenz zum Label-Bild oder QR-Code.

------------------------------------------------------------------------

## 🔹 LabelFields

Optionale strukturierte Feld-Wert-Paare, z. B. für QR-Code-Inhalte oder
Zusatzinformationen.

------------------------------------------------------------------------

## 🎯 Rolle im Gesamt-Battery-Passport

Dieses Submodell ergänzt:

-   GeneralProductInformation
-   CarbonFootprintForBatteries

und bildet die sichtbare Kennzeichnungsebene des digitalen
Batteriepasses.
