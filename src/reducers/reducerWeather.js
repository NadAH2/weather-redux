import {
  GET_WEATHER_FAIL,
  GET_WEATHER_SUCCESS,
  WEATHER_LOADING,
} from "../actions/constants";
const initialState = {
  loading: false,
  weather: null,
  error: null,
};
const reducerWeather = (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: payload,
        loading: false,
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducerWeather;
