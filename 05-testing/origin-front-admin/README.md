# origin-front-admin

## Requisitos

Partiendo [de este boilerplate](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/05-testing/01-react/05-real-project/00-boilerplate), implementa los tests y pipelines:

A) Obligatorio:

Se pueden ver los archivos modificados en [esta pull request](https://github.com/Esemega/Master-Front-End-X_Lemoncode/pull/1) o en la rama [laboratorio-testing-obligatorio](https://github.com/Esemega/Master-Front-End-X_Lemoncode/tree/feature/laboratorio-testing-obligatorio/05-testing/origin-front-admin).

- [x] Añadir tests al mapper ./src/pods/project/project.mapper.ts.
- [x] Añadir tests al componente ./src/common/components/confirmation-dialog/confirmation-dialog.component.tsx.
- [x] Añadir tests al hook ./src/common/components/confirmation-dialog/confirmation-dialog.hook.ts.

B) Opcional:

Se pueden ver los archivos modificados en [esta pull request](https://github.com/Esemega/Master-Front-End-X_Lemoncode/pull/2) o en la rama [laboratorio-testing-opcional](https://github.com/Esemega/Master-Front-End-X_Lemoncode/tree/feature/laboratorio-testing-opcional/05-testing/origin-front-admin).

- [x] Crear nueva rama llamada feature/laboratorio-testing-opcional partiendo de la rama anterior feature/laboratorio-testing-obligatorio.
- [x] Añadir test al componente ./src/common/components/spinner/spinner.component.tsx.
- [x] Añadir pipeline de CI (integración continua) con Github Actions, para los unit tests.
- [x] Añadir tests e2e usando Cypress de una scene. Podéis elegir cualquiera de las disponibles (login, submodule-list, employee-list, employee, project-list, project).
- [x] Añadir pipeline de CI (integración continua) con Github Actions para los e2e. Incluso podéis usar la misma pipeline que los unit tests.

## Ejecutar

- Para ejecutar, en modo desarrollo, escribir el siguiente comando en la raíz del proyecto.

```
npm start
```

Navega a `http://localhost:8080/` para ver el resultado.

- Para ejecutar los test the jest:

```
npm run test:watch
```

- Para ejecutar los test the cypress:

```
npm run test:e2e
```

## Construido con

- [React](https://es.reactjs.org/) - Framework JS
- [Typescript](https://www.typescriptlang.org/) - Superset de JS
- [Proyecto de inicio](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/05-testing/01-react/05-real-project/00-boilerplate) - Boilerplate del que se parte
- [Jest](https://jestjs.io/es-ES/) - Framework de testing para JS
- [Cypress](https://www.cypress.io/) - Test end-to-end
- [Testing library](https://testing-library.com/) - Libraría con utilidades para testing
- [Github Actions](https://github.com/features/actions) - Herramienta de automatización de Github

## Qué he aprendido

- En esta entrega me he tenido que afrontar a los tests unitarios y end-to-end. Es la primera vez que testeo una aplicación y dado que la aplicación ya estaba creada, el primer paso ha sido entender las piezas de código a testear, ya que, si no entendía el funcionamiento era incapaz de crear los tests.
- Además he creado mis primeras pipelines con Github Actions. Algunas consideraciones a tener en cuenta:
  - Los workflows de github deben ir [en la raiz del repositorio](https://github.com/Esemega/Master-Front-End-X_Lemoncode/tree/feature/laboratorio-testing-opcional/.github/workflows). Esto implica que quizá quieras ejecutar los comandos en un path especifico, para esto, puedes indicar un `working directory`:

`.github\workflow\ci-testing.yml`

```yml
...
jobs:
  ci:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./05-testing/origin-front-admin
    steps:
      - name: Checkout repository
      ...
```

- Otro punto a tener en cuenta es que al ejecutar el comando `npm run test:watch`, para ejecutar los test unitarios, se ejecutaban también los test end-to-end, ya que este comando busca los archivos con las palabras test o spec en el nombre, esto hacía fallar los tests end-to-end. Para que esto no ocurra es necesario indicarle a jest, en su config, que ignore estos archivos:

`config\test\jest.js`

```js
  module.exports = {
  ...
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
};
```

## Hecho por

- [Sonia Garcia Alcaraz](https://github.com/Esemega)
