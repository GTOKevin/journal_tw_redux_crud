import {createStore, combineReducers,applyMiddleware,compose} from 'redux'
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk'
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// combineReducers alberga todo los reducers a usar en el sistema
const reducers=combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes:notesReducer
});

// Solo acepta un reducer por ello se genera el combineReducers
// Se agrega redux_devtools para poder hacer uso de la herramienta de redux en la parte de consola
export const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );