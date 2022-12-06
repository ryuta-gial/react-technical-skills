import React, { FC, useContext } from 'react';
import { AppContext } from 'features/ToPass';
import Grand from 'features/ToPass/ToPassGrand';
type Props = {
  updateState: (text: string) => void;
  stateProp: string;
  setStateProp: React.Dispatch<React.SetStateAction<string>>;
};

const Child: FC<Props> = ({ updateState, stateProp, setStateProp }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <>
      <h2>子コンポーネント1です</h2>
      <div>{stateProp}</div>

      <div>
        <button onClick={() => updateState('子コンポーネント1が変えました')}>
          子コンポーネント1からStateを更新する
        </button>
      </div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <Grand stateProp={stateProp} setStateProp={setStateProp} />
    </>
  );
};
export default Child;
