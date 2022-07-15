import {
  WEATHER_LOADING,
  GET_WEATHER_FAIL,
  GET_WEATHER_SUCCESS,
} from "./constants";
import axios from "axios";
export const getWeather = (query) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=c5a282fc11d249499f3135220221107&q=${query}&days=3&aqi=no&alerts=no`
    );
    console.log(res);
    dispatch({ type: GET_WEATHER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_WEATHER_FAIL, payload: error });
  }
};
const setLoading = () => {
  return {
    type: WEATHER_LOADING,
  };
};
