import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from 'slices/counterSlice';
import { RootState } from 'store';

function Counter() {
  const dispatch = useDispatch();
  //下2行は同じ意味
  //const count = useSelector(selectCount);
  const { counterNumber } = useSelector((state: RootState) => state.Counter);
  return (
    <div className='App'>
      <h1>{counterNumber}</h1>
      <button
        onClick={(e) => {
          dispatch(increment(1));
        }}
      >
        Sum + 1
      </button>
      &nbsp;
      <button
        onClick={(e) => {
          dispatch(decrement(1));
        }}
      >
        Sum - 1
      </button>
    </div>
  );
}

export default Counter;
