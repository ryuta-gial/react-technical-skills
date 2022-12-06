import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
  Reducer,
  AnyAction,
} from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import FunFact_Reducer from 'slices/funFactSlice';
import Qiita_Reducer from 'slices/qiitaSlice';
import Counter_Reducer from 'slices/counterSlice';
import Covid_Reducer from 'slices/covidSlice';

//すべてのステートをまとめる
const appReducer = combineReducers({
  FunFact: FunFact_Reducer,
  Qiita: Qiita_Reducer,
  Counter: Counter_Reducer,
  Covid: Covid_Reducer,
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'counter/logout') {
    state = {} as RootState;
  }
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const mySelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export default store;
