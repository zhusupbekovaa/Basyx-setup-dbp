# 📘 Erklärung der Submodell-Struktur

## GeneralProductInformation (BatteryPass 1.2.0)

Dieses Dokument beschreibt die Struktur des Submodells
**GeneralProductInformation** für ein Batterie-Modul gemäß BatteryPass
Data Model 1.2.0.

------------------------------------------------------------------------

## 🔎 Ziel des Submodells

Das Submodell enthält alle grundlegenden produktbezogenen Informationen
des Batterie-Moduls und bildet die Basis des digitalen Batteriepasses.

Typische Inhalte:

-   Identifikationsdaten
-   Herstellerinformationen
-   Kategorie und Status
-   Wichtige Lebenszyklusdaten
-   Massenangaben
-   Garantieinformationen
-   Betreiberinformationen
-   Herstellungsort

------------------------------------------------------------------------

## 🧱 Strukturüberblick

    GeneralProductInformation
    │
    ├── Identification
    │     ├── batteryPassportIdentifier
    │     ├── secondaryIdentifier
    │     ├── productIdentifier
    │     ├── batchIdentifier
    │     └── modelIdentifier
    │
    ├── Manufacturer
    │     ├── manufacturerName
    │     ├── manufacturerIdentifier
    │     ├── manufacturerAddress
    │     ├── manufacturerCountry
    │     ├── manufacturerContactEmail
    │     └── manufacturerContactPhone
    │
    ├── batteryCategory
    ├── batteryStatus
    │
    ├── ImportantDates
    │     ├── manufacturingDate
    │     ├── puttingIntoServiceDate
    │     └── endOfLifeDate
    │
    ├── MassInformation
    │     ├── overallMass
    │     ├── netMass
    │     └── massIncludingPackaging
    │
    ├── Warranty
    │     ├── warrantyPeriodMonths
    │     └── warrantyConditions
    │
    ├── OperatorInformation
    │     ├── operatorName
    │     ├── operatorIdentifier
    │     └── operatorAddress
    │
    ├── placeOfManufacture
    ├── countryOfOrigin
    └── standardizationCertifications

------------------------------------------------------------------------

# 🔹 Identification

Beinhaltet alle Identifikationsmerkmale des Batterie-Moduls:

-   **batteryPassportIdentifier** → regulatorische Batteriepass-ID
-   **secondaryIdentifier** → interne oder alternative ID
-   **productIdentifier** → Produktkennzeichnung
-   **batchIdentifier** → Serien-/Chargennummer
-   **modelIdentifier** → Modellbezeichnung

------------------------------------------------------------------------

# 🔹 Manufacturer

Informationen zum Hersteller:

-   Name
-   Hersteller-ID
-   Adresse
-   Land
-   Kontaktinformationen

------------------------------------------------------------------------

# 🔹 batteryCategory

Kategorie der Batterie (z. B. EV, LMT, Industrial).

------------------------------------------------------------------------

# 🔹 batteryStatus

Status des Batterie-Moduls:

-   original
-   in use
-   repurposed
-   recycled

------------------------------------------------------------------------

# 🔹 ImportantDates

Relevante Lebenszyklusdaten:

-   manufacturingDate
-   puttingIntoServiceDate
-   endOfLifeDate

------------------------------------------------------------------------

# 🔹 MassInformation

Massenangaben:

-   overallMass
-   netMass
-   massIncludingPackaging

------------------------------------------------------------------------

# 🔹 Warranty

Garantieinformationen:

-   warrantyPeriodMonths
-   warrantyConditions

------------------------------------------------------------------------

# 🔹 OperatorInformation

Informationen zum wirtschaftlich verantwortlichen Betreiber.

------------------------------------------------------------------------

# 🔹 placeOfManufacture

Ort der Produktion.

------------------------------------------------------------------------

# 🔹 countryOfOrigin

Ursprungsland.

------------------------------------------------------------------------

# 🔹 standardizationCertifications

Zertifizierungen

------------------------------------------------------------------------

# 🎯 Rolle im Gesamt-Battery-Passport

Es ist das zentrale und verpflichtende Submodell für
regulatorische Konformität.
