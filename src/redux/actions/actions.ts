export const ADDLAYER = 'Add Layer'
export const POPULATELAYERS = 'Populate Layers'

export const addLayer = (layer: LayerDescriptionType) =>({
  type:ADDLAYER,
  payload: { layer }
})

export const PopulateLayers = (layers: LayerDescriptionType[]) => ({
  type: POPULATELAYERS,
  payload: { layers}
})