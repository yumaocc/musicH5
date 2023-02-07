import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  name: string;
  testAsync: string;
}

const initialState: CounterState = {
  name: "",
  testAsync: "",
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.name = "小黑";
    },
    amend: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getTest.fulfilled, (state, action) => {
      state.testAsync = action.payload;
    });
  },
});
// const getMovieListApi = () =>
//   fetch(
//     "https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48"
//   ).then((res) => res.json());
const getTestAsync = () => {
    return new Promise<string>(r => {
        setTimeout(()=> {
            r('小白')
        },1000)
    })
}
// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const getTest = createAsyncThunk("user/test", async () => {
  const res = await getTestAsync();
  return res;
});

// Action creators are generated for each case reducer function
export const { increment ,amend} = counterSlice.actions;

export default counterSlice.reducer;
