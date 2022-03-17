<!-- REACT REDUX  -->

<!-- 
El redux es el controlador de la web por donde se realizan las acciones usando el dispatch,
ademas se puede guardar información en el mismo, haciendolo invisible ante los mortales. -->
<!-- Mas información en el siguiente enlace -->
https://react-redux.js.org/
<!-- URI PARA INSTALAR DEPENDENCIA -->
npm install react-redux
<!-- Se agrega este codigo en createStore(), para poder ver el estado del redux -->
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

<!-- FIREBASE  -->

<!-- Instalación npm de Firebase es la versión que se usa en este curso, ya que usa nameframes-->

npm install firebase

<!-- THUNK MIDLEWARE -->
<!-- Se usa para usar acciones asincronas -->
npm install redux-thunk

<!-- REACT ROUTER -->
<!-- El uso de react router facilita la navegación de componentes -->
<!-- Mas información en el siguiente enlace -->
https://reactrouter.com/
<!-- URI PARA INSTALAR DEPENDENCIA -->
npm install react-router-dom@6

<!-- validacion de campos  -->
npm i validator


<!-- FONTAWEASOME -->
<!-- INFORMACIÒN EN LA URL  -->
https://fontawesome.com/docs/web/use-with/react/
<!-- NPM INSTALL  -->
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/react-fontawesome@latest



<!-- VERSIONES -->
    "firebase": "^9.6.8",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.6",
    "react-router-dom": "^6.2.2",
    "react-scripts": "5.0.0",
    "redux-thunk": "^2.4.1",
    "sweetalert2": "^11.4.4",
    "validator": "^13.7.0"





