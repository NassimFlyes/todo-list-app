# Task Manager App | Aufgabenverwaltung

A modern and responsive Task Manager built with React, TypeScript, and Vite. This application helps users organize their daily tasks, manage descriptions, track progress, and switch between English and German.

Eine moderne und responsive Aufgabenverwaltung, entwickelt mit React, TypeScript und Vite. Die Anwendung hilft dabei, tägliche Aufgaben zu organisieren, Beschreibungen zu verwalten, den Fortschritt zu verfolgen und zwischen Englisch und Deutsch zu wechseln.

---

## 🇬🇧 English

### About the Project

This Task Manager allows users to create and manage tasks through a clean, interactive interface. Tasks are displayed in a list, making it easy to track and organize daily activities.

### Features

- **Add Tasks:** Create tasks with a title and an optional description.
- **View Task Details:** Open a task to see its title, description, and current status.
- **Edit Tasks:** Modify existing task titles and descriptions.
- **Delete Tasks:** Remove tasks with a confirmation dialog to prevent accidental deletion.
- **Mark as Completed:** Mark tasks as completed when finished and toggle their status between active and completed.
- **Filter Tasks:** Display all tasks, only active tasks, or only completed tasks.
- **Task Counter:** View the total number of tasks.
- **Empty State:** Display a helpful message when no tasks have been added.
- **Bilingual Interface:** Switch between English and German using the language button.
- **Toast Notifications:** Receive feedback when tasks are added, updated, or deleted.
- **Responsive UI:** A clean interface with dedicated task cards, action buttons, and modal dialogs.

### Technologies & Packages

| Technology / Package | Purpose |
|---|---|
| React | Building the user interface with reusable components |
| TypeScript | Type safety and more maintainable code |
| Vite | Development server and build tool |
| i18next | Translation management and language resources |
| react-i18next | Integrating i18next with React components |
| lucide-react | Icons for task actions and interface elements |
| react-hot-toast | Toast notifications for user feedback |
| CSS | Styling, layout, and interactive visual effects |

### Internationalization

The application supports English and German through **i18next** and **react-i18next**. Interface text is stored in language resources and displayed according to the selected language.

The language switcher updates the interface without requiring a page reload. User-created task titles and descriptions remain unchanged when switching languages.

### Getting Started

**Requirements:** Node.js and npm.

1. Clone or download this repository.
2. Open the project folder in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal, usually `http://localhost:5173`.

### Future Improvements

- Save tasks in local storage or a database.
- Add task due dates and priorities.
- Add drag-and-drop task ordering.
- Add dark mode.
- Improve accessibility and keyboard navigation.

---

## 🇩🇪 Deutsch

### Über das Projekt

Diese Aufgabenverwaltung ermöglicht es, Aufgaben über eine übersichtliche und interaktive Benutzeroberfläche zu erstellen und zu verwalten. Alle Aufgaben werden in einer Liste angezeigt, sodass tägliche Aktivitäten einfach organisiert und verfolgt werden können.

### Funktionen

- **Aufgaben hinzufügen:** Aufgaben mit einem Titel und einer optionalen Beschreibung erstellen.
- **Aufgabendetails anzeigen:** Titel, Beschreibung und aktuellen Status einer Aufgabe ansehen.
- **Aufgaben bearbeiten:** Bestehende Aufgabentitel und Beschreibungen ändern.
- **Aufgaben löschen:** Aufgaben über einen Bestätigungsdialog löschen, um versehentliche Löschungen zu vermeiden.
- **Als erledigt markieren:** Abgeschlossene Aufgaben markieren und den Status zwischen offen und erledigt wechseln.
- **Aufgaben filtern:** Alle, nur offene oder nur erledigte Aufgaben anzeigen.
- **Aufgabenzähler:** Die Gesamtzahl der Aufgaben anzeigen.
- **Leerer Zustand:** Eine hilfreiche Nachricht anzeigen, wenn noch keine Aufgaben vorhanden sind.
- **Zweisprachige Benutzeroberfläche:** Über die Sprachschaltfläche zwischen Englisch und Deutsch wechseln.
- **Toast-Benachrichtigungen:** Rückmeldungen beim Hinzufügen, Bearbeiten und Löschen von Aufgaben erhalten.
- **Modernes Interface:** Übersichtliche Aufgabenlisten, Aktionsschaltflächen und modale Dialoge.

### Technologien und Pakete

| Technologie / Paket | Verwendung |
|---|---|
| React | Entwicklung der Benutzeroberfläche mit wiederverwendbaren Komponenten |
| TypeScript | Typsicherheit und besser wartbarer Code |
| Vite | Entwicklungsserver und Build-Tool |
| i18next | Verwaltung der Übersetzungen und Sprachressourcen |
| react-i18next | Integration von i18next in React-Komponenten |
| lucide-react | Icons für Aktionen und Benutzeroberfläche |
| react-hot-toast | Toast-Benachrichtigungen für Benutzeraktionen |
| CSS | Gestaltung, Layout und visuelle Interaktionen |

### Internationalisierung

Die Anwendung unterstützt Englisch und Deutsch mit **i18next** und **react-i18next**. Die Texte der Benutzeroberfläche werden in Sprachressourcen gespeichert und entsprechend der ausgewählten Sprache angezeigt.

Der Sprachwechsel erfolgt ohne Neuladen der Seite. Selbst erstellte Aufgabentitel und Beschreibungen bleiben beim Wechsel der Sprache unverändert.

### Installation und Start

**Voraussetzungen:** Node.js und npm.

1. Repository klonen oder herunterladen.
2. Den Projektordner im Terminal öffnen.
3. Abhängigkeiten installieren:

   ```bash
   npm install
   ```

4. Entwicklungsserver starten:

   ```bash
   npm run dev
   ```

5. Die im Terminal angezeigte lokale URL öffnen, normalerweise `http://localhost:5173`.

### Geplante Verbesserungen

- Aufgaben im Local Storage oder in einer Datenbank speichern.
- Fälligkeitsdaten und Prioritäten hinzufügen.
- Aufgaben per Drag-and-drop sortieren.
- Dark Mode integrieren.
- Barrierefreiheit und Tastaturnavigation verbessern.

---

## Author / Autor

**Nassim Flyes**

GitHub: [NassimFlyes](https://github.com/NassimFlyes)

Portfolio: [NassimFlyes.github.io/nassim-portfolio](https://NassimFlyes.github.io/nassim-portfolio/)

---

*Built with React, TypeScript, and Vite. / Entwickelt mit React, TypeScript und Vite.*