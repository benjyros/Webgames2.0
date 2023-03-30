# Table of Contents
- [1 Informieren](#1-informieren)
  - [1-1 Unser Projekt](#1-1-unser-projekt)
  - [1-2 Anforderungen](#1-2-anforderungen)
  - [1-3 Diagramme](#1-3-diagramme)
    1. [Mock Ups](#mock-ups)
    2. [Storyboard](#storyboard)
    3. [Use Case Diagramm](#use-case-diagramm) 
- [2 Planen](#2-planen)
  - [2-1 Grobplanung](#2-1-grobplanung)
  - [2-2 Feinplanung](#2-2-feinplanung)
- [3 Entscheiden](#3-entscheiden)
- [4 Realisieren](#4-realisieren)
- [5 Kontrollieren](#5-kontrollieren)
  - [5-1 Testfälle](#5-1-testfälle)
  - [5-2 Testprotokoll](#5-2-testprotokoll)
  - [5-3 Testumgebung](#5-3-testumgebung)
  - [5-4 Testfazit](#5-4-testfazit)
- [6 Auswerten](#6-auswerten)
- [7 Quellen](#7-quellen)



## 1 Informieren

### 1-1 Unser Projekt

Technologien:
- Frontend - ReactJS, TailwindCSS
- Backend - Firebase

Wir haben letztes Jahr eine Webgames Website programmiert. Da wir bei diesem Projekt nicht viel Zeit zur Verfügung haben, haben wir uns überlegt unsere Website verbessern und je nach Zeit noch auszubauen. Wir wollen das Design neugestalten und das Projekt umschreiben in ReactJS und TailwindCSS.

Das Programm soll zu jederzeit Kostenlos sein. Wenn die Zeit noch reicht, würden wir die Website auch noch gerne Veröffentlichen.

Wenn man die Website öffnet, dann kann man zwischen den drei Spielen auswählen.
Hangman, Tic Tac Toe und Speedclicker. Sollte man nicht Wissen wie ein Spiel funktioniert gibt es auf der Homepage Tutorial-Videos zu allen Spielen.


Die Dokumentation wird nach IPERKA geführt. Die Dokumente werden auf OneDrive gespeichert und sind somit für alle Mitglieder zu jeder Zeit verfügbar.

Ziele:
-	Ich kann ein ausführbares Projekt mit ReactJS, TailwindCSS und Firebase implementieren.
-	Ich kann Multimedia Inhalte einbinden
-	Ich kann eine Dokumentation nach IPERKA führen
-	(Ich kann eine Website hosten)  Optionals

### 1-2 Anforderungen

| Nummer | Muss/Kann | Funktional/Qualität/Rand | Beschreibung                                                 |
| ------ | --------- | ------------------------ | ------------------------------------------------------------ |
| 1      | Muss      | Funktional               | Der Benutzer kann durch die Webseiten navigieren             |
| 2      | Muss      | Funktional               | Der Benutzer kann auf der Homepage Videos schauen            |
| 3      | Muss      | Funktional               | Der Benutzer kann TicTacToe spielen                          |
| 4      | Muss      | Funktional               | Der Benutzer kann Hangman spielen                            |
| 5      | Muss      | Funktional               | Der Benutzer kann Speedclicker spielen                       |
| 6      | Muss      | Funktional               | Der Benutzer kann Reaction Clicker spielen                   |
| 7      | Kann      | Funktional               | Der Benutzer kann "Connect four" spielen                     |
| 8      | Kann      | Funktional               | Ein Administrator kann sich einloggen                        |
| 9      | Kann      | Funktional               | Ein Administrator kann die Wörter für Hangman administrieren |
| 10     | Muss      | Qualität                 | Die Webseite wird je nach Gerät (z.B. Handy) angepasst       |
| 11     | Kann      | Qualität                 | Die Webseite wurde mit Animationen gestaltet                 |
| 12     | Kann      | Qualität                 | Das Spiel "Vier Gewinnt" beinhaltet Animationen              |
| 13     | Muss      | Rand                     | Die Website wurde mit React implementiert                    |
| 14     | Muss      | Rand                     | Das Projekt wird auf GitHub bearbeitet                       |

### 1-3 Diagramme

#### Mock Ups

#### Storyboard

#### Use Case Diagramm

## 2 Planen

### 2-1 Grobplanung

### 2-2 Feinplanung

## 3 Entscheiden

## 4 Realisieren

## 5 Kontrollieren

### 5-1 Testfälle

| TC-№ | Anforderung | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ----------- | ------------ | ------- | ----------------- |
| 1.1  | 1           | <ul><li>Die <a href="https://benjyros.github.io/Webgames2.0" target="_blank">Homepage</a> ist auf einem Webbrowser geöffnet</li></ul> | <ol><li>In Navbar auf "Hangman" klicken</li><li>In Navbar auf "TicTacToe" klicken</li><li>In Navbar auf "Speed Clicker" klicken</li><li>In Navbar auf "Reaction Clicker" klicken</li></ol> | <ol><li>Die Webseite für Hangman öffnet sich</li><li>Die Webseite für TicTacToe öffnet sich</li><li>Die Webseite für Speed Clicker öffnet sich</li><li>Die Webseite für Reaction Clicker öffnet sich</li></ol> |
| 2.1  | 2           | <ul><li>Die <a href="https://benjyros.github.io/Webgames2.0" target="_blank">Homepage</a> ist auf einem Webbrowser geöffnet</li></ul> | <ol><li>Das Video für "Hangman" abspielen</li><li>Das Video für "TicTacToe" abspielen</li><li>Das Video für "Speed Clicker" abspielen</li><li>Das Video für "Reaction Clicker" abspielen</li></ol> | Alle Videos sind abspielbar |
| 3.1  | 3           | <ul><li>Die Website für <a href="https://benjyros.github.io/Webgames2.0/TicTacToe" target="_blank">"TicTacToe"</a> ist auf einem Webbrowser geöffnet</li></ul> | <ol><li>"TicTacToe" starten</li><li>Durchspielen</li></ol> | Es steht, ob man gewonnen oder verloren hat. Danach kann man das Spiel neustarten |
| 4.1  | 4           | <ul><li>Die Website für <a href="https://benjyros.github.io/Webgames2.0/Hangman" target="_blank">"Hangman"</a> ist auf einem Webbrowser geöffnet</li></ul> | <ol><li>"Hangman" starten</li><li>Durchspielen</li></ol> | Es steht, ob man gewonnen oder verloren hat. Danach kann man das Spiel neustarten |
| 5.1  | 5           | <ul><li>Die Website für <a href="https://benjyros.github.io/Webgames2.0/Speedclicker" target="_blank">"Speedclicker"</a> ist auf einem Webbrowser geöffnet</li></ul> | <ol><li>"Speedclicker" starten</li><li>Durchspielen</li></ol> | Anzahl Klicks pro Sekunde werden angezeigt. Danach kann man das Spiel neustarten. |
| 6.1  | 6           | <ul><li>Die Website für <a href="https://benjyros.github.io/Webgames2.0/Reaction-Clicker" target="_blank">"Reaction Clicker"</a> ist auf einem Webbrowser geöffnet</li></ul> | <ol><li>"Reaction Clicker" starten</li><li>Durchspielen</li></ol> | Die durchschnittliche Reaktionszeit in «ms» wird angezeigt |
| 7.1  | 7           | <ul><li>Die Website für <a href="https://benjyros.github.io/Webgames2.0/Connect-Four" target="_blank">"Connect Four"</a> ist auf einem Webbrowser geöffnet</li></ul> | <ol><li>"Connect Four" starten</li><li>Durchspielen</li></ol> | Es steht, ob man gewonnen oder verloren hat. Danach kann man das Spiel neustarten |
| 8.1  | 8           | <ul><li>Die <a href="https://benjyros.github.io/Webgames2.0" target="_blank">Homepage</a> ist auf einem Webbrowser geöffnet</li><li>- Benutzername: testAdmin<br>- Passwort: testAdmin123*</li></ul> | <ol><li>Oben rechts auf "Admin" klicken</li><li>Benutzername eingeben (testAdmin)</li><li>Passwort eingeben (testAdmin123)</li><li>Auf "Login" klicken</li></ol> | Dem Administrator wird die Website in Administrator-Modus angezeigt |
| 9.1  | 9           | <ul><li>Die <a href="https://benjyros.github.io/Webgames2.0" target="_blank">Homepage</a> ist auf einem Webbrowser geöffnet</li><li>Administrator-Modus ist an (Benutzername = "testAdmin", Passwort = "testAdmin123*")</li></ul> | ------- | Ein Administrator kann die Wörter administrieren       |
| 10.1 | 10          | <ul><li>Die <a href="https://benjyros.github.io/Webgames2.0" target="_blank">Homepage</a> ist auf dem Handy geöffnet</li></ul> | <ol><li>Auf das Hamburger-Menu klicken</li><li>Auf "TicTacToe" gehen</li><li>Durchspielen</li></ol> | Das Spiel funktioniert reibungslos ohne Probleme |
| 11.1 | 11          | <ul><li>Die <a href="https://benjyros.github.io/Webgames2.0" target="_blank">Homepage</a> ist auf einem Webbrowser geöffnet</li></ul> | ------- | Die Webseite wurde mit Animationen gestaltet           |
| 12.1 | 12          | <ul><li>Die Website für <a href="https://benjyros.github.io/Webgames2.0/Connect-Four" target="_blank">"Connect Four"</a> ist auf einem Webbrowser geöffnet</li></ul> | ------- | Das Spiel "Vier Gewinnt" beinhaltet Animationen        |
| 13.1 | 13          | <ul><li><a href="https://github.com/benjyros/Webgames2.0" target="_blank">Github</a> ist geöffnet</li></ul> | <ol><li>Unter dem Code auf "src" klicken</li><li>Den Ordner "components" auswählen</li><li>Die Datei "Home.js" öffnen</li><li>Die Datei "Home.js" betrachten</li></ol> | Die Datei ist so aufgebaut: <ol><li>Imports</li><li>Home()</li><li>Funktionen</li><li>View</li></ol> |
| 14.1 | 14          | <ul><li><a href="https://github.com/benjyros/Webgames2.0" target="_blank">Github</a> ist geöffnet</li></ul> | <ol><li>Unter dem Code auf "Commits" navigieren</li><li>Alle Commits betrachten</li></ol> | Man sieht, dass das Projekt mit GitHub bearbeitet wurde: Alle Implementationen der Anforderungen stehen da. |

### 5-2 Testprotokoll

### 5-3 Testumgebung

### 5-4 Testfazit

## 6 Auswerten

## 7 Quellen
