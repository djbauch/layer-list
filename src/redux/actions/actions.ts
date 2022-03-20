export const ADDLAYER = 'Add Layer'
export const POPULATELAYERS = 'Populate Layers'

export const addLayer = () =>({
  type:ADDLAYER
})

export const PopulateLayers = (layers: []) => ({
  type: POPULATELAYERS,
  payload: { layers}
})