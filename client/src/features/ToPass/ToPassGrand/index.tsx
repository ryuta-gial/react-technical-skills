import React, { FC } from 'react';

type Props = {
  stateProp: string;
  setStateProp: React.Dispatch<React.SetStateAction<string>>;
};

const Grand: FC<Props> = ({ stateProp, setStateProp }) => {
  return (
    <>
      <h2>子コンポーネント1の孫コンポーネントです</h2>
      <div>{stateProp}</div>
      <button onClick={() => setStateProp('孫コンポーネントが変えました')}>
        孫コンポーネントからStateを更新する
      </button>
    </>
  );
};
export default Grand;
