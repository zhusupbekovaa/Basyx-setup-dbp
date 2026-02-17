# 📘 Erklärung der Submodell-Struktur

## CarbonFootprintForBatteries (BatteryPass 1.2.0)

Dieses Dokument beschreibt die Struktur des Submodells
**CarbonFootprintForBatteries** für ein Batterie-Modul gemäß BatteryPass
Data Model 1.2.0.

------------------------------------------------------------------------

## 🔎 Ziel des Submodells

Das Submodell bildet den CO₂-Fußabdruck der Batterie über den gesamten
Lebenszyklus ab.

Typische Inhalte:

-   Gesamt-CO₂-Fußabdruck
-   Emissionen je Lebenszyklusphase
-   Berechnungsmethodik
-   Referenzrahmen (z. B. PEF, ISO 14067)
-   Bewertungs-/Performanceklasse

------------------------------------------------------------------------

## 🧱 Strukturüberblick

    CarbonFootprintForBatteries
    │
    ├── totalCarbonFootprint
    ├── LifecyclePhaseEmissions
    │     ├── cradleToGateEmission
    │     ├── manufacturingEmission
    │     ├── distributionEmission
    │     ├── usePhaseEmission
    │     └── endOfLifeEmission
    ├── carbonFootprintMethodology
    ├── referenceFramework
    ├── carbonFootprintUnit
    ├── carbonFootprintDate
    ├── studyOrReportLink
    └── performanceClass

------------------------------------------------------------------------

## 🔹 totalCarbonFootprint

Gesamter CO₂-Fußabdruck der Batterie (z. B. kg CO2e).

------------------------------------------------------------------------

## 🔹 LifecyclePhaseEmissions

Collection mit Emissionen je Lebenszyklusphase:

-   cradleToGateEmission → Rohstoff bis Werkstor\
-   manufacturingEmission → Produktionsphase\
-   distributionEmission → Logistik\
-   usePhaseEmission → Nutzungsphase\
-   endOfLifeEmission → Recycling / Entsorgung

------------------------------------------------------------------------

## 🔹 carbonFootprintMethodology

Beschreibt die Berechnungsmethode (z. B. ISO 14067, PEF Rulebook).

------------------------------------------------------------------------

## 🔹 referenceFramework

Referenzrahmen oder regulatorischer Bezug.

------------------------------------------------------------------------

## 🔹 carbonFootprintUnit

Einheit der Emissionen (typischerweise kg CO2e).

------------------------------------------------------------------------

## 🔹 carbonFootprintDate

Datum der Berechnung.

------------------------------------------------------------------------

## 🔹 studyOrReportLink

Optionaler Verweis auf externe Studie oder Dokument.

------------------------------------------------------------------------

## 🔹 performanceClass

Bewertungsklasse gemäß regulatorischer oder interner Einstufung.

------------------------------------------------------------------------

## 🎯 Ziel in der Architektur

Dieses Submodell ergänzt:

-   GeneralProductInformation
-   Labels

und bildet gemeinsam den regulatorischen Battery Passport Datensatz.
