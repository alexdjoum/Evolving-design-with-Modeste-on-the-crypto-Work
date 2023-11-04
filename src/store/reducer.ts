//import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// reducer import
import customizationReducer from './customizationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

/*const reducer = combineReducers({
  customization: customizationReducer
});*!/*/

const store = configureStore({
  reducer: {
    customization: customizationReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
