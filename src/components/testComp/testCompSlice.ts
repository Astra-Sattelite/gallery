import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { selector, AppSelector } from "../../../utils"

export const testCompSlice = createSlice({
  name: 'testComp',
  initialState: {
    num: 1 
  },
  reducers: {
  
  }
})

export const selectTestComp: AppSelector<{num: number}> = selector(state => state.testComp)

export const {} = testCompSlice.actions