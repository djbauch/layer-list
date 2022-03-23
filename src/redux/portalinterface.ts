import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userBaseUrl = 'https://djbauch.maps.arcgis.com/sharing/rest/'
const qs = 'search?f=json&q=NGA%20((type%3A%22Map%20Service'+
'%22%20OR%20type%3A%22Image%20Service%22%20OR%20type%3A%22Feature%20Service%22%20OR'+
'%20type%3A%22Vector%20Tile%20Service%22%20OR%20type%3A%22OGCFeatureServer%22%20OR' +
'%20type%3A%22WMS%22%20OR%20type%3A%22WFS%22%20OR%20type%3A%22WMTS%22%20OR%20type%3A%22KML%22)' +
'%20AND%20(-type%3A%22KML%20Collection%22))%20%20(-type%3A%22Feature%20Collection%20Template%22%20AND' +
'%20-type%3A%22Stream%20Service%22%20AND%20-type%3A%22Feature%20Collection%22%20AND' +
'%20-typekeywords%3A%22Elevation%203D%20Layer%22%20AND%20-typekeywords%3A%22Table%22%20AND' +
'%20-typekeywords%3A%22Route%20Layer%22%20AND%20-type%3A%22Feed%22)&num=16&sortOrder=desc&start=1'

const baseUrl = 'https://arcgis.com/sharing/rest/'
const simpleSearch = 'search?q=boulder&f=json'
export const layerApi = createApi({
  reducerPath: 'layerApi',
  baseQuery: fetchBaseQuery( {baseUrl: baseUrl}),
  endpoints: (builder) => ({
    getAllLayers: builder.query<LayerQueryResponse, string>({
      query: () => simpleSearch
    })
  })
})

export const { useGetAllLayersQuery } = layerApi