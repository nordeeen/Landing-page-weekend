import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import service from 'service';

export const getTestimonial = createAsyncThunk(
  '/testimonial',
  async (param, { rejectWithValue }) => {
    try {
      const response = await service.getTestimonial();
      // console.log(response)
      return response;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const initialState = {
  testi: [],
};

const slicerTestimonial = createSlice({
  name: 'slicerTestimonial',
  initialState: { ...initialState },
  reducers: {
    setTestimonial: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: builder => {
    builder.addCase(getTestimonial.fulfilled, (state, action) => {
      console.log('****balikan dari be', action.payload);
      state.testi = action.payload;
    });
  },
});

export default slicerTestimonial.reducer;
