import { POPULATELAYERS } from "../actions/actions";

const initialState = {
  layers : []
}

export default function reducer (state = initialState, action: any) {
  switch (action.type) {
    case POPULATELAYERS: return {
      layers : [...state.layers, action.payload.layers]
    }
  }
}