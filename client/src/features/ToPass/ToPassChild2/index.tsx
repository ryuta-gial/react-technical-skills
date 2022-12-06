import React, { FC } from 'react';

const Child2: FC<{ handleInputTextChange: (test: string) => void }> = ({
  handleInputTextChange,
}) => {
  return (
    <>
      <h2>子コンポーネント2です</h2>
      <button
        onClick={() => handleInputTextChange('子コンポーネント2が変えました')}
      >
        子コンポーネント2からStateを更新する
      </button>
    </>
  );
};
export default Child2;
