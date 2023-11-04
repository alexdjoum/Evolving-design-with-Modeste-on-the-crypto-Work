// project imports
import config from '../config';

// action - state management
import * as actionTypes from './actions';

interface State {
  isOpen: Array<number>,
  defaultId: string,
  fontFamily: string,
  borderRadius: number,
  opened: boolean
};
export const initialState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
};

type customizationAction =
    | { type: "reset" }
    | { type: "SET_MENU"; /*value: State["count"]*/ }

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state: State, action: customizationAction): State => {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...state,
        isOpen: state.isOpen
      };
    case "SET_MENU":
      return {
        ...state,
        opened: state.opened
      };
    /*case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };*/
    default:
      return state;
  }
};

export default customizationReducer;
