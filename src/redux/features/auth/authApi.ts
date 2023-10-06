import { baseApi } from "@/redux/api/baseApi";

 const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags:["user"]
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
