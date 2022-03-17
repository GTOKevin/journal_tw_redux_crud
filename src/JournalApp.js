import React from 'react';
import {Provider} from 'react-redux'; //provee informacion a toda la web, es como el useContext
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
export const JournalApp = () => {
  return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
