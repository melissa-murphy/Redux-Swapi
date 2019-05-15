import { FETCHING, SUCCESS, FAILURE } /* we need our action types here*/ from '../actions';
const initialState = {
  characters: [],
  isLoading: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        character: action.payload
      };
      case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};
