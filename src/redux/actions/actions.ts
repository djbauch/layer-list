export const ADDLAYER = 'Add Layer'
export const POPULATELAYERS = 'Populate Layers'

export const FETCH_LAYERS_BEGIN = 'Begin'
export const FETCH_LAYERS_SUCCESS = 'Fetched'
export const FETCH_ITEMS_FAILURE = 'Botched'

export const addLayer = (layer: LayerDescription) =>({
  type:ADDLAYER,
  payload: { layer }
})

export const PopulateLayers = (layers: LayerDescription[]) => ({
  type: POPULATELAYERS,
  payload: { layers}
})

export const fetchLayersBegin = () => ({
  type: FETCH_LAYERS_BEGIN
})

export const fetchLayersSuccess = (layers: LayerDescription[]) => ({
  type: FETCH_LAYERS_SUCCESS,
  payload: {layers}
})