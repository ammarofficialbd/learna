import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllCourses,fetchCoursesByFilters } from './courseAPI';

const initialState = {
  courses: [],
  status: 'idle',
};

export const fetchAllCoursesAsync = createAsyncThunk(
  'course/fetchAllCourses',
  async () => {
    const response = await fetchAllCourses();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchCoursesByFiltersAsync = createAsyncThunk(
  'course/fetchCoursesByFilters',
  async (filter) => {
    const response = await fetchCoursesByFilters(filter);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCoursesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCoursesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.courses = action.payload;
      })
      .addCase(fetchCoursesByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCoursesByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.courses = action.payload;
      });
  },
});

export const { increment } = courseSlice.actions;

export const selectAllCourses= (state) => state.course.courses;

export default courseSlice.reducer;
