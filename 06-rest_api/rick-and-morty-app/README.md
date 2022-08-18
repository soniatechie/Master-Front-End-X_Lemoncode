# 06-rest_api: rick-and-morty-app

## Requisitos

Partiendo [de este boilerplate](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/06-rest-api/01-concepts/00-boilerplate), se implementan los cambios indicados:

A) Obligatorio:

Ejercicio 2:

Se pueden ver la solución presentada en la rama [json-server-local](https://github.com/Esemega/Master-Front-End-X_Lemoncode/tree/json-server-local/06-rest_api/rick-and-morty-app).

- [x] Montamos un json-server local (borramos la colección de hotels previa).
- [x] Añadimos una colección de characters (puedes coger la información del ejercicio anterior).
- [x] Además de los campos que ya teníamos, añadimos uno nuevo donde guardar las mejores frases de cada personaje. El campo se puede llamar bestSentences.
- [x] Reemplazar los endpoints para que apunten al json-server.
- [x] El usuario puede editar y guardar el campos bestSentences.

## Ejecutar

- Para ejecutar, en modo desarrollo, escribir el siguiente comando en la raíz del proyecto.

```
npm start
```

Navega a `http://localhost:8080/` para ver el resultado.

Además si navegas a `http://localhost:3000/characters`, podrás ver el servidor local con los datos sobre los personajes de la serie Rick y Morty.

## Construido con

- [React](https://es.reactjs.org/) - Framework JS
- [Typescript](https://www.typescriptlang.org/) - Superset de JS
- [Proyecto de inicio](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/05-testing/01-react/05-real-project/00-boilerplate) - Boilerplate del que se parte
- [json-server](https://github.com/typicode/json-server) - Servidor JSON/ API rest, en local

## Qué he aprendido

- En esta entrega he configurado un servidor JSON - API rest, en local

## Hecho por

- [Sonia Garcia Alcaraz](https://github.com/Esemega)
