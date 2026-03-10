# 📘 Erklärung der Submodell-Struktur

## GeneralProductInformation (BatteryPass 1.2.0)

Dieses Dokument beschreibt die Struktur des Submodells  **GeneralProductInformation** für ein Batterie-Modul gemäß dem  **BatteryPass Data Model 1.2.0**.
Das Submodell ist Teil der digitalen Produktinformationen eines Batteriepasses und orientiert sich an den Anforderungen der EU-Batterieverordnung (EU) 2023/1542.

---

# 🔎 Ziel des Submodells

Das Submodell enthält grundlegende produktbezogene Informationen des Batterie-Moduls und bildet eine zentrale Grundlage des **Digital Battery Passport (DBP)**.

Diese Informationen dienen dazu:

- Batterien eindeutig zu identifizieren
- regulatorische Anforderungen der EU zu erfüllen
- Transparenz über Hersteller und Produktdaten zu schaffen
- Rückverfolgbarkeit über den gesamten Lebenszyklus zu gewährleisten

Typische Inhalte:

- Identifikationsdaten
- Herstellerinformationen
- Batterieklassifikation
- Lebenszyklusdaten
- Massenangaben
- Garantieinformationen
- Betreiberinformationen
- Herstellungsort

---

# 🔄 Statische vs. Dynamische Daten

Im Kontext des Digital Battery Passport wird zwischen **statischen** und **dynamischen** Daten unterschieden.

## Statische Daten

Statische Daten ändern sich **nach der Herstellung der Batterie in der Regel nicht mehr**.  
Sie beschreiben grundlegende Eigenschaften des Produkts.

Typische Beispiele:

- Batteriepass-ID
- Herstellerinformationen
- Modell- und Produktnummer
- Herstellungsort
- Massenangaben
- Batterie-Kategorie

Diese Informationen werden normalerweise:

- während der Produktion erstellt
- einmalig im Batteriepass registriert
- über den gesamten Lebenszyklus unverändert gespeichert

---

## Dynamische Daten

Dynamische Daten können sich **während der Nutzung der Batterie ändern**.  
Sie spiegeln den aktuellen Zustand oder den Lebenszyklusstatus der Batterie wider.

Typische Beispiele:

- Batterie-Status (z. B. `in use`, `repurposed`)
- Betreiberinformationen
- Service- oder Lebenszyklusdaten
- End-of-Life-Informationen

Diese Daten können durch verschiedene Akteure aktualisiert werden:

- Hersteller
- Betreiber
- Wartungsunternehmen
- Recyclingunternehmen

---

# 🧱 Strukturüberblick
GeneralProductInformation
│
├── Identification
│ ├── batteryPassportIdentifier
│ ├── secondaryIdentifier
│ ├── productIdentifier
│ ├── batchIdentifier
│ └── modelIdentifier
│
├── Manufacturer
│ ├── manufacturerName
│ ├── manufacturerIdentifier
│ ├── manufacturerAddress
│ ├── manufacturerCountry
│ ├── manufacturerContactEmail
│ └── manufacturerContactPhone
│
├── batteryCategory
├── batteryStatus
│
├── ImportantDates
│ ├── manufacturingDate
│ ├── puttingIntoServiceDate
│ └── endOfLifeDate
│
├── MassInformation
│ ├── overallMass
│ ├── netMass
│ └── massIncludingPackaging
│
├── Warranty
│ ├── warrantyPeriodMonths
│ └── warrantyConditions
│
├── OperatorInformation
│ ├── operatorName
│ ├── operatorIdentifier
│ └── operatorAddress
│
├── placeOfManufacture
├── countryOfOrigin
└── standardizationCertifications



---

# 🔹 Identification

Beinhaltet alle Identifikationsmerkmale des Batterie-Moduls.

Diese Daten sind **statisch** und werden während der Produktion erzeugt.

| Feld | Beschreibung | Datentyp |
|-----|-----|-----|
| batteryPassportIdentifier | Eindeutige ID des Batteriepasses gemäß EU-Regulation | statisch |
| secondaryIdentifier | Alternative oder interne Identifikation | statisch |
| productIdentifier | Produktnummer des Batterie-Moduls | statisch |
| batchIdentifier | Produktions- oder Chargennummer | statisch |
| modelIdentifier | Modellbezeichnung | statisch |

---

# 🔹 Manufacturer

Informationen über den Hersteller der Batterie.

Diese Daten sind **statisch**, da sie sich nach der Herstellung nicht ändern.

| Feld | Beschreibung |
|-----|-----|
| manufacturerName | Name des Herstellers |
| manufacturerIdentifier | Eindeutige Herstellerkennung |
| manufacturerAddress | Adresse des Herstellers |
| manufacturerCountry | Land des Herstellers |
| manufacturerContactEmail | Kontakt-E-Mail |
| manufacturerContactPhone | Kontakt-Telefonnummer |

---

# 🔹 batteryCategory

Definiert die Kategorie der Batterie.

Beispiele:

- electric vehicle battery (EV)
- light means of transport battery (LMT)
- industrial battery

Diese Information ist **statisch**.

---

# 🔹 batteryStatus

Beschreibt den aktuellen Status der Batterie im Lebenszyklus.

Mögliche Werte:

- `original`
- `in use`
- `repurposed`
- `recycled`

Diese Information ist **dynamisch**, da sie sich im Laufe des Lebenszyklus ändern kann.

---

# 🔹 ImportantDates

Wichtige Zeitpunkte im Lebenszyklus der Batterie.

| Feld | Typ | Dynamik |
|-----|-----|-----|
| manufacturingDate | Herstellungsdatum | statisch |
| puttingIntoServiceDate | Zeitpunkt der Inbetriebnahme | dynamisch |
| endOfLifeDate | Zeitpunkt der Außerbetriebnahme | dynamisch |

---

# 🔹 MassInformation

Physische Eigenschaften der Batterie.

Diese Werte sind **statisch**.

| Feld | Beschreibung |
|-----|-----|
| overallMass | Gesamtgewicht |
| netMass | Nettogewicht |
| massIncludingPackaging | Gewicht inkl. Verpackung |

---

# 🔹 Warranty

Garantieinformationen des Herstellers.

| Feld | Dynamik |
|-----|-----|
| warrantyPeriodMonths | statisch |
| warrantyConditions | statisch |

---

# 🔹 OperatorInformation

Informationen über den aktuellen wirtschaftlichen Betreiber der Batterie.

Diese Daten können sich im Laufe des Lebenszyklus ändern und sind daher **dynamisch**.

| Feld | Beschreibung |
|-----|-----|
| operatorName | Name des Betreibers |
| operatorIdentifier | Betreiber-ID |
| operatorAddress | Adresse des Betreibers |

---

# 🔹 placeOfManufacture

Ort der Herstellung der Batterie.

Diese Information ist **statisch**.

---

# 🔹 countryOfOrigin

Land, in dem die Batterie produziert wurde.

Diese Information ist **statisch**.

---

# 🔹 standardizationCertifications

Zertifizierungen und Normen, die für die Batterie gelten.

Beispiele:

- CE
- UN 38.3
- ISO-Normen

Diese Informationen sind **statisch**, können aber im Einzelfall erweitert werden.

---

# ⚖️ Bezug zur EU-Batterieverordnung

Die Struktur des BatteryPass-Datenmodells orientiert sich an den Anforderungen der **EU-Batterieverordnung (EU) 2023/1542**.

Die Verordnung fordert unter anderem:

- einen **Digital Battery Passport** für EV- und Industrie-Batterien
- eindeutige Identifikation von Batterien
- Transparenz über Hersteller und Lieferketten
- Informationen zum Lebenszyklus der Batterie
- Daten für Recycling und Wiederverwendung

Das Submodell **GeneralProductInformation** erfüllt insbesondere Anforderungen aus:

- Artikel 77–79 (Digital Battery Passport)
- Annex XIII (Information requirements)

---

# 🎯 Rolle im Gesamt-Battery-Passport

Das Submodell **GeneralProductInformation** ist ein **zentrales Basismodell** des digitalen Batteriepasses.

Es liefert:

- grundlegende Produktidentifikation
- regulatorische Mindestinformationen
- Kontext für weitere Submodelle