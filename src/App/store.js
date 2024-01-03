import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import courseReducer from '../features/Courses/courseSlice';
export const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});