# ImperiatecDoc

## Description rapide
**ImperiatecDoc** est une application web qui permet à un utilisateur de gérer ses documents PDF. Les principales fonctionnalités incluent :  
- **Authentification utilisateur** – Inscription et connexion sécurisées (login/signup) pour accéder à l'application.  
- **Téléversement de documents** – Upload de fichiers PDF depuis l'interface utilisateur.  
- **Gestion des fichiers** – Affichage de la liste des PDF téléchargés avec leur nom, date d’ajout, et options pour voir ou supprimer chaque fichier.  
- **Visionnage intégré** – Consultation d’un fichier PDF via une iframe.

## Stack utilisée
- **Front-end :** React JS  
- **Back-end :** Django (Django REST Framework)  
- **Base de données :** PostgreSQL  
- **Authentification :** JSON Web Tokens (JWT)

## Installation et lancement du projet
> **Prérequis :** Assurez-vous d’avoir installé Python 3.x, Node.js, npm.

1. **Cloner le dépôt**
   ```bash
   git clone git@github.com:RayanMZR/Test_imperiatech.git
   ```
2. **Backend (Django)**
   - Placez-vous dans le dossier du backend :  
     ```bash
     cd backend
     ```  
   - **Lancer le serveur :** Démarrez le serveur de développement Django :  
     ```bash
     python manage.py runserver
     ```  
   Par défaut, l'API est accessible à l'adresse `http://localhost:8000/`.
3. **Frontend (React)**
   - Placez-vous dans le dossier du frontend :  
     ```bash
     cd front-end-desktop
     ```  
   - **Dépendances :** Installez les modules npm nécessaires :  
     ```bash
     npm install
     ```  
   - **Lancer l'application :** Démarrez le serveur de développement React :  
     ```bash
     npm start
     ```  
   Ceci ouvrira l'application dans votre navigateur à l'adresse `http://localhost:3000/`.

Une fois le front-end **et** le back-end lancés, vous pouvez accéder à ImperiatecDoc via votre navigateur web et utiliser l'application.
