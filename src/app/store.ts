import { configureStore, applyMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import { testCompSlice } from '../components/testComp/testCompSlice';

const sagaMiddleware = createSagaMiddleware();

function* exampleSaga() {
  console.log("Example saga reached");
}

export const store = configureStore({
  reducer: {
    testComp: testCompSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(exampleSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch