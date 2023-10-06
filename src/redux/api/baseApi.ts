import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import envConfig from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: envConfig.base_url }),
  endpoints: () => ({}),
  tagTypes: ['user'],
});
