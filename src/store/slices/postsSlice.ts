import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MSREANA, ApiError } from '../../types/api';

interface PostsState {
  requirementAnalysis: MSREANA[];
  acceptanceTesting: MSREANA[];
  projectProposal: MSREANA[];
  projectDesign: MSREANA[];
  projectDevelopment: MSREANA[];
  installation: MSREANA[];
  libraryautomationsystem : MSREANA[];
  campsys : MSREANA[];
  androidapps : MSREANA[];
  ecommerce : MSREANA[];
  esecure : MSREANA[];
  filetracking : MSREANA[];
  ourclient : MSREANA[];
  companyprofile : MSREANA[];
  loading: boolean;
  error: ApiError | null;
}

const initialState: PostsState = {
  requirementAnalysis: [],
  acceptanceTesting: [],
  projectProposal: [],
  projectDesign: [],
  projectDevelopment: [],
  installation: [],
  libraryautomationsystem: [],
  campsys : [],
  androidapps : [],
  ecommerce : [],
  esecure : [],
  filetracking : [],
  ourclient : [],
  companyprofile : [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<{ type: keyof PostsState; data: MSREANA[] }>) => {
      state.loading = false;
      const { type, data } = action.payload;
      (state as any)[type] = data;
    },
    fetchDataFailure: (state, action: PayloadAction<ApiError>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = postsSlice.actions;
export default postsSlice.reducer;