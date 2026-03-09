# 📘 Erklärung der AAS-JSON-Struktur

## Beispiel: `BatteryModule001`

Diese Datei beschreibt eine **Asset Administration Shell (AAS)** für ein
reales Batterie-Modul gemäß **AAS 3.0 Spezifikation**.

------------------------------------------------------------------------

## 🔎 Vollständige JSON-Struktur

``` json
{
  "id": "urn:uuid:aas-battery-module-001",
  "idShort": "BatteryModule001",
  "assetInformation": {
    "assetKind": "Instance",
    "globalAssetId": "urn:uuid:physical-battery-module-001"
  },
  "submodels": [

    {
      "type": "ModelReference",
      "keys": [
        {
          "type": "Submodel",
          "value": "urn:uuid:submodel-general-product-information-battery-001"
        }
      ]
    },

    {
      "type": "ModelReference",
      "keys": [
        {
          "type": "Submodel",
          "value": "urn:uuid:submodel-carbon-footprint-battery-001"
        }
      ]
    },

    {
      "type": "ModelReference",
      "keys": [
        {
          "type": "Submodel",
          "value": "urn:uuid:submodel-circularity-battery-001"
        }
      ]
    },

    {
      "type": "ModelReference",
      "keys": [
        {
          "type": "Submodel",
          "value": "urn:uuid:submodel-due-diligence-battery-001"
        }
      ]
    },

    {
      "type": "ModelReference",
      "keys": [
        {
          "type": "Submodel",
          "value": "urn:uuid:submodel-labels-battery-001"
        }
      ]
    },

    {
      "type": "ModelReference",
      "keys": [
        {
          "type": "Submodel",
          "value": "urn:uuid:submodel-material-composition-battery-001"
        }
      ]
    },

    {
      "type": "ModelReference",
      "keys": [
        {
          "type": "Submodel",
          "value": "urn:uuid:submodel-performance-durability-battery-001"
        }
      ]
    }

  ]
}
```

------------------------------------------------------------------------

# 🧠 Feld-für-Feld Erklärung

## 🔹 `id`

Globale eindeutige Identifikation der AAS (digitaler Zwilling).

-   Muss weltweit eindeutig sein
-   Darf sich niemals ändern
-   Sollte als `urn:uuid:` erzeugt werden
-   Identifiziert den digitalen Zwilling, nicht das physische Objekt

------------------------------------------------------------------------

## 🔹 `idShort`

Menschlich lesbarer Kurzname.

-   Nur lokal relevant
-   Nicht global eindeutig
-   Wird in UI-Darstellungen verwendet
-   Darf geändert werden

------------------------------------------------------------------------

## 🔹 `assetInformation`

Beschreibt das reale physische Batterie-Modul.

### ▪ `assetKind`

  Wert       Bedeutung
  ---------- --------------------------
  Instance   Reales physisches Objekt
  Type       Generischer Produkttyp

Für echte Batterie-Module immer:

``` json
"assetKind": "Instance"
```

------------------------------------------------------------------------

### ▪ `globalAssetId`

Identität des realen physischen Batterie-Moduls.

-   Nicht identisch mit der AAS-ID
-   Muss stabil bleiben
-   Sollte Seriennummer, GS1 GTIN oder Produktions-ID enthalten

Beispiel:

    urn:gs1:gtin:04012345678903

------------------------------------------------------------------------

## 🔹 `submodels`

Liste aller referenzierten Submodelle.

-   Es werden nur Referenzen gespeichert
-   Die Submodel-Daten liegen im Submodel Repository
-   Die ID muss exakt mit der Submodel-ID übereinstimmen

------------------------------------------------------------------------

### ▪ `type`

Referenztyp gemäß AAS 3.0 Spezifikation.

------------------------------------------------------------------------

### ▪ `keys`

  Feld    Bedeutung
  ------- ---------------------------
  type    Elementtyp (`Submodel`)
  value   Globale ID des Submodells

Tippfehler führen zu 404-Fehlern in BaSyx.

------------------------------------------------------------------------

# 🏗 Architekturverständnis

    Physisches Batterie-Modul
            ↓
    globalAssetId
            ↓
    AAS (Digitaler Zwilling)
            ↓
    Submodel Referenzen
            ↓
    GeneralProductInformation
    CarbonFootprint
    Circularity
    DueDiligence
    Labels
    MaterialComposition
    PerformanceDurability

------------------------------------------------------------------------
