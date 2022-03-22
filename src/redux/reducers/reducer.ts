import { ADDLAYER, POPULATELAYERS } from "../actions/actions";

const initialState = {
  layers : [] as Array<LayerDescription>
}
const reducer = (state: ListState = initialState, action: ListAction): ListState => {
  switch (action.type) {
    case POPULATELAYERS: return {
      layers : [...state.layers, action.payload.layers]
    }
    // case ADDLAYER: return {
    //   layers : [...state.layers, action.payload]
    // }
  }
  return state
}
export default reducer