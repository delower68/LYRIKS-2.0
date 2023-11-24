import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',  // Set the base URL without specific endpoints
    prepareHeaders: (headers, { getState }) => {
      // const { yourApiToken } = getState().yourAuthReducer; // Replace with your actual authentication logic
      // if (yourApiToken) {
      //   headers.set('Authorization', `Bearer ${yourApiToken}`);
      // }
      headers.set('x-rapidapi-key', 'bd150ae31emsh3641d3cdca71af5p16b31ejsnc2c2bd1a6109');
      headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorldCharts: builder.query({
      query: () => 'charts/track?locale=en-US&pageSize=20&startFrom=0', // Adjust the query string
    }),
  }),
});

export const { useGetWorldChartsQuery } = shazamCoreApi;
