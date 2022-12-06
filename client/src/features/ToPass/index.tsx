import React, { FC, useState, useReducer, createContext } from 'react';
import Child from 'features/ToPass/ToPassChild';
import Child2 from 'features/ToPass/ToPassChild2';

type State = {
  count: number;
};

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const AppContext = createContext(
  {} as {
    state: State;
    dispatch: React.Dispatch<Action>;
  }
);

const initialState = {
  count: 0,
};

const Parent: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateProp, setStateProp] = useState<string>('値その1');
  const [stateProp2, setStateProp2] = useState<string>('値その2');
  const updateState = (text: string): void => setStateProp2(text);
  //const updateState = (): void => setStateProp2('State2を更新した');
  function handleInputTextChange(text: string) {
    setStateProp2(text);
  }
  return (
    <>
      <h1>親コンポーネントです</h1>
      <div>{stateProp}</div>
      <div>{stateProp2}</div>
      {/* useReducerとuseContextを使う */}
      <AppContext.Provider value={{ state, dispatch }}>
        <h1>カウント: {state.count}</h1>
        <Child
          updateState={updateState}
          stateProp={stateProp}
          setStateProp={setStateProp}
        />
      </AppContext.Provider>
      {/* 関数を渡す */}
      <Child2 handleInputTextChange={handleInputTextChange} />
    </>
  );
};

export default Parent;
