type LayerDescriptionType = {
  id: string,
  owner: string,
  created: number,
  modified: number,
  guid: string,
  name: string,
  title: string,
  type: string,
  typeKeywords: string[],
  description: string,
  tags: string[],
  snippet: string,
  thumbnail: string,
  documentation: string | null,
  extent: [[number, number], [number, number]],
  categories: string[]
  spatialReference: string,
  accessInformation: string,
  licenseInfo: string,
  culture: string,
  properties: string[] | null,
  advancedSettings: string[] | null,
  url: string,
  proxyFilter: string | null,
  access: string,
  size: number,
  subInfo: number,
  appCategories: string[],
  industries: [],
  languages: [],
  largeThumbnail: string | null,
  banner: string | null,
  screenshots: string[],
  listed: boolean,
  numComments: number,
  numRatings: number,
  avgRating: number,
  numViews: number,
  scoreCompleteness: number,
  groupDesignations: string | null,
  contentOrigin: string
}

type LayerQueryResponseType = {
  query: string,
  total: number,
  start: number,
  num: number,
  nextStart: number
  results: LayerDescriptionType[]
}

type PopulateListAction = {
  type: string
  payload: {
    layers: LayerDescriptionType
  }
}
type AddItemAction = {
  type: string
  payload: {
  layer: LayerDescriptionType
  }
}

type ListAction = PopulateListAction

type ListState = {
  layers: LayerDescriptionType[]
}

type DispatchType = (args: ListAction) => ListAction