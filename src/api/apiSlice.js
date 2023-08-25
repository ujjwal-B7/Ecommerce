// import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3500",
// });

// export default axiosInstance;

// import axios from "axios";
// export default axios.create({
//   baseURL: "http://localhost:3500",
// });

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  // reducerPath is default so if we didnt put then also it will be ok
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "  http://localhost:3500" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    // getting all our todos
    // .query is the endpoint definition for retrieving data
    getTodos: builder.query({
      // passes the /todos that will be attached to the baseUrl
      query: () => "/products",

      providesTags: ["Products"],
    }),
  }),
});

// rtk query creates a custom hook of the method that we create (getTodos)
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
