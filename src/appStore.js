import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "~/reducers";
import rootSaga from "~/saga";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware();
let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga);

export default { store, persistor }