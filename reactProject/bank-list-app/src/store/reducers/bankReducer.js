import { ADD_BANK, DELETE_BANK, UPDATE_BANK, GET_BANKS, GET_BANK, BANKS_LOADING, FETCH_BANKS_SUCCESS, FETCH_BANKS_FAILURE } from "../actions/types";

const initialState = {
  banks: [],
  loading: false,
  error: null,
};

const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BANK:
      return {
        ...state,
        banks: [action.payload, ...state.banks],
      };

    case UPDATE_BANK:
      return {
        ...state,
        banks: state.banks.map((bank) =>
          bank._id === action.payload._id ? action.payload : bank
        ),
      };

    case DELETE_BANK:
      return {
        ...state,
        banks: state.banks.filter((bank) => bank._id !== action.payload),
      };

    case GET_BANKS:
      return {
        ...state,
        banks: action.payload,
        loading: false,
      };

    case GET_BANK:
      return {
        ...state,
        banks: state.banks.filter((bank) => bank._id === action.payload),
      };

    case BANKS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BANKS_SUCCESS:
      return {
        ...state,
        banks: action.payload,
        loading: false,
      };

    case FETCH_BANKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default bankReducer;
