import { createSlice } from '@reduxjs/toolkit';
import { getItems } from 'services/qiitaApi';
import { RootState, AppDispatch } from 'store';

type QiitaState = {
  loading: boolean;
  error: string | null;
  items: [];
};

let initialState: QiitaState = {
  loading: false,
  error: null,
  items: [],
};

// Slice
export const qiitaSlice = createSlice({
  name: 'Qiita',
  // stateの初期値を設定
  initialState: initialState,
  reducers: {
    // 通信を開始した時に呼ぶ関数
    fetchStart(state, action) {
      state.loading = true;
      state.error = null;
    },
    // 通信が失敗した時に呼ぶ関数
    fetchFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // 通信が成功した時に呼ぶ関数
    fetchSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
      //console.log(action);
    },
  },
});

// Actions
export const { fetchStart, fetchFailure, fetchSuccess } = qiitaSlice.actions;

// 外部からはこの関数を呼んでもらう
export const fetchItems = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart(await getItems()));

    dispatch(fetchSuccess(await getItems()));
  } catch (error) {
    dispatch(fetchFailure(error.stack));
  }
};

// Selectors
export const selectQiita = ({ Qiita }: RootState) => Qiita;

// Reducer(must be default export)
export default qiitaSlice.reducer;
