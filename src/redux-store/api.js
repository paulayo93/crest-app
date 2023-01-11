import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

// Create our baseQuery instance
const baseUrl = "https://mycrestapi.com/";
const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })


export const api = createApi({

  reducerPath: 'crestApi',

  baseQuery: baseQueryWithRetry,
 
  tagTypes: ['Crest'],

  endpoints: () => ({}),
})

