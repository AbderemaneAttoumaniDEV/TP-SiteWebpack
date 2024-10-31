# Installation de SCSS

## Prérequis

Il faut avoir npm d'installé sur son PC et un accès au terminal

## Installer

Installation sass dans un projet avec npm

  1. Créer un dossier projet avec l'arborescence suivante :

```
|_ src/
  |_ index.html
  |_ assets/
    |_css/
    | |_main.css
    |_scss/
      |_main.scss
```
  2. À la racine lancez npm init -y && npm install sass --save-dev
  3. Modifier le fichier package.json
```json
{
    "name": "front-test",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "compile": "sass src/assets/scss/main.scss src/assets/css/main.css --watch"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "sass": "^1.70.0"
    }
}
```
4. Copier coller le contenu suivant dans index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
  <title>Hello world SCSS</title>
  <link rel="stylesheet" href="assets/css/main.css">
</head>

<body>
  <h1></h1>
</body>

</html>
```

5. Copier coller le contenu suivant dans main.scss

```scss
h1::before {
    content: 'Hello World';
}
```
6. Lancer npm run compile
7. Ouvrez le fichier index.html avec votre navigateur.