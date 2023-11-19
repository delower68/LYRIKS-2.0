// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));

// export const shazamCoreApi = createApi({ reducerPath: 'shazamCoreApi',
// });
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA');
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorldCharts: builder.query({
      query: () => 'v1/charts/world',
    }),
  }),
});

export const { useGetWorldChartsQuery } = shazamCoreApi;
