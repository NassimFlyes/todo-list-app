
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "My Tasks",
        subtitle: "Stay organized and get things done.",
        task: "Task",
        tasks: "Tasks",
        taskPlaceholder: "What do you need to do?",
        descriptionPlaceholder: "Add a description...",
        addTask: "Add Task",
        updateTask: "Update Task",
        all: "All",
        active: "Active",
        completed: "Completed",
        noTasks: "No tasks yet",
        emptyDescription: "Add your first task to get started.",
        noDescription: "No description",
        done: "Done",
        taskDetails: "Task Details",
        name: "Name",
        description: "Description",
        status: "Status",
        close: "Close",
        deleteTask: "Delete task?",
        deleteConfirmation: "Are you sure you want to delete this task? This action cannot be undone.",
        cancel: "Cancel",
        delete: "Delete",
        taskDeleted: "Task deleted successfully",
        taskUpdated: "Task updated successfully",
        taskAdded: "Task added successfully",
        emptyTask: "Task name must not be empty",
        allRightsReserved: "All rights reserved."
      }
    },
    de: {
      translation: {
        title: "Meine Aufgaben",
        subtitle: "Bleib organisiert und erledige deine Aufgaben.",
        task: "Aufgabe",
        tasks: "Aufgaben",
        taskPlaceholder: "Was möchtest du erledigen?",
        descriptionPlaceholder: "Beschreibung hinzufügen...",
        addTask: "Aufgabe hinzufügen",
        updateTask: "Aufgabe aktualisieren",
        all: "Alle",
        active: "Offen",
        completed: "Erledigt",
        noTasks: "Noch keine Aufgaben",
        emptyDescription: "Füge deine erste Aufgabe hinzu.",
        noDescription: "Keine Beschreibung",
        done: "Erledigt",
        taskDetails: "Aufgabendetails",
        name: "Name",
        description: "Beschreibung",
        status: "Status",
        close: "Schließen",
        deleteTask: "Aufgabe löschen?",
        deleteConfirmation: "Möchtest du diese Aufgabe wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.",
        cancel: "Abbrechen",
        delete: "Löschen",
        taskDeleted: "Aufgabe erfolgreich gelöscht",
        taskUpdated: "Aufgabe erfolgreich aktualisiert",
        taskAdded: "Aufgabe erfolgreich hinzugefügt",
        emptyTask: "Der Aufgabenname darf nicht leer sein",
        allRightsReserved: "Alle Rechte vorbehalten."
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
