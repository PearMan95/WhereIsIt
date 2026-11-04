# WhereIsIt

Heb jij op verschillende locaties spullen liggen en vergeet jij ook altijd welke spullen waar liggen? WhereIsIt helpt jou om bij te houden welke items zich op welke locatie bevinden, inclusief een handige inpaklijst voor als je van items van de ene naar de andere locatie moet verslepen.

---

## Inhoudsopgave

- [Over het project](#over-het-project)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installatie](#installatie)
- [Gebruik](#gebruik)
- [Bestandsstructuur](#bestandsstructuur)
- [Toekomstige plannen](#toekomstige-plannen)

---

## Over het project

WhereIsIt is een eenvoudige webapplicatie waarmee je kunt bijhouden waar je persoonlijke spullen liggen als je regelmatig tussen twee locaties wisselt (zoals twee woningen). Je voegt items toe, geeft aan waar ze liggen en markeert wat je wil meenemen bij je volgende verhuizing.

Alle data wordt lokaal in de browser opgeslagen via `localStorage`. Er is geen account of internetverbinding nodig na het eerste laden.

---

## Features

- **Items beheren** - voeg items toe, bewerk ze en verwijder ze
- **Twee locaties** - wijs elk item toe aan locatie A of B (standaard: Papa / Mama)
- **Categorieën** - Kleding, Elektronica, Sport, School, Persoonlijk, Overig
- **Foto's** - voeg een foto toe aan een item (opgeslagen als base64)
- **Notities** - voeg een optionele beschrijving toe aan een item
- **Zoekfunctie** - zoek items op naam of notitie
- **Filters** - filter op locatie en categorie
- **Inpaklijst** - markeer items die je wil meenemen; bekijk en beheer de lijst in een apart venster
- **Aanpasbare locatienamen** - pas "Papa" en "Mama" aan naar eigen voorkeur via de instellingen
- **Lokale opslag** -geen account nodig, alles blijft bewaard in de browser
- **Responsief** - werkt op desktop en mobiel

---

## Screenshots

Voeg hier screenshots toe na deployment. Aanbevolen: een overzicht van de itemgrid, het toevoegvenster en de inpaklijst.

---

## Installatie

WhereIsIt heeft geen build-stap of installatie van packages nodig. Het enige wat je nodig hebt is een webbrowser.

### Lokaal draaien

1. Clone de repository:
   ```bash
   git clone https://github.com/PearMan95/whereisit.git
   ```

2. Navigeer naar de projectmap:
   ```bash
   cd whereisit
   ```

3. Open `index.html` in je browser. Je kunt dit doen door het bestand te dubbelklikken, of via een lokale server:
   ```bash
   # Met Python (aanbevolen)
   python -m http.server 8000
   # Open daarna http://localhost:8000 in je browser
   ```

### Via GitHub Pages (aanbevolen voor online gebruik)

1. Ga naar je repository op GitHub
2. Klik op **Settings** > **Pages**
3. Selecteer bij "Source" de branch `main` en map `/ (root)`
4. Klik op **Save** — je site is binnen een minuut beschikbaar op `https://pearman95.github.io/whereisit/`

---

## Gebruik

### Item toevoegen
Klik op de **+ Item** knop rechtsboven. Vul de naam in, kies een locatie en categorie, voeg optioneel een foto en notitie toe en klik op **Opslaan**.

### Item bewerken of verwijderen
Elk item heeft drie knoppen rechtsonder op de kaart: inpaklijst, bewerken en verwijderen. Bij verwijderen verschijnt een bevestigingsvenster.

### Inpaklijst
Klik op het pakketje-icoon op een kaart om een item aan de inpaklijst toe te voegen. De lijst is te bekijken via de **Inpaklijst** knop rechtsboven. Je kunt de lijst ook leegmaken als je klaar bent met inpakken.

### Zoeken en filteren
Gebruik de zoekbalk om te zoeken op naam of notitie. De dropdowns ernaast filteren op locatie of categorie.

### Locatienamen aanpassen
Klik op het tandwiel-icoon rechtsboven om de namen van de twee locaties aan te passen. Standaard zijn dit "Papa" en "Mama".

---

## Bestandsstructuur

```
whereisit/
├── index.html      # HTML-structuur en modals
├── style.css       # Alle opmaak, inclusief thema-variabelen en icoonklassen
├── script.js       # Logica, icoonbibliotheek en localStorage-beheer
└── README.md       # Dit bestand
```

### Thema aanpassen
Alle kleuren staan als CSS-variabelen bovenin `style.css`:

```css
:root {
  --loc-a:       #1a2e4a;   /* Kleur locatie A */
  --loc-a-light: #e8edf5;
  --loc-b:       #c0394b;   /* Kleur locatie B */
  --loc-b-light: #faeaec;
  --accent:      #1a2e4a;
}
```

### Iconen aanpassen
Alle iconen zijn gedefinieerd in het `ICONS`-object bovenin `script.js`. Vervang daar de SVG-string van een icoon om het site-breed aan te passen.

---

## Toekomstige plannen

- [ ] Meerdere thema's (licht / donker / kleurkeuze)
- [x] Meer dan twee locaties ondersteunen
- [ ] Cloudopslag zodat data op meerdere apparaten beschikbaar is
- [x] Exporteren van de itemlijst (bijv. als PDF of CSV)
- [ ] Native mobiele app (iOS / Android) op basis van deze webversie
- [x] Sorteermogelijkheden (op naam, datum toegevoegd, categorie)
- [x] Aangepaste categorieën toevoegen

---

## Licentie

Dit project heeft momenteel geen licentie. Neem contact op met de eigenaar voor gebruik buiten persoonlijk gebruik.
