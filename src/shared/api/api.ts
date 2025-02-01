import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const API = import.meta.env.VITE_API

export const baseApiUrl = '.api.green-api.com'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API
  }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (_) => ({}),
  tagTypes: ['History', 'Notification']
})
