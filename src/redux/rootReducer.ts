import { baseApi } from "./api/baseApi";

export const reducer = {
  // [baseApi.reducerPath] --> min --> 'api' / reducerPath: 'api', in baseApi
  [baseApi.reducerPath]: baseApi.reducer,
};
