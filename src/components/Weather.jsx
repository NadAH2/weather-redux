import React from "react";
import "./Weather.css";
import { useSelector } from "react-redux";
const Weather = () => {
  const { weather, loading } = useSelector((state) => state.reducerWeather);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    weather && (
      <div className="main container">
        <div className="row">
          <div className="col-xs-12">
            <div className="col-md-6 offset-md-3 weather-panel">
              <div className="col-xs-6">
                <h2>
                  {weather.location.name}
                  <p>
                    {" "}
                    <small>{weather.location.localtime}</small>
                  </p>
                </h2>
                <p className="h3 col-4">
                  <img src={weather.current.condition.icon} alt="" />{" "}
                  {weather.current.condition.text}
                </p>
              </div>
              <div className="col-4 text-center">
                <div className="h1 temperature ">
                  <span>{weather.current.temp_c}°</span>
                </div>
              </div>
              <div className="col-xs-12 ">
                <ul className="list-inline row forecast ">
                  <li className=" text-center d-flex justify-content-around">
                    <table>
                      <tr>
                        {weather.forecast.forecastday.map((el, i) => {
                          const d = new Date(el.date);
                          return <td key={i}>{d.toString().slice(0, 3)}</td>;
                        })}
                      </tr>

                      {weather.forecast.forecastday.map((el, i) => (
                        <td key={i}>
                          {el.day.maxtemp_c}°/
                          {el.day.mintemp_c}°
                        </td>
                      ))}
                    </table>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Weather;

{
  /* 
 <div>
      //   <h2>{weather.location.name}</h2>
      //   <h1>{weather.current.temp_c}</h1>
      // </div>

      // // <div>
      // //   <h2>{weather.location.name}</h2>
      // //   <h3>
      // //     {weather.current.condition.text}
      // //     <span>
      // //       Wind {weather.current.wind_kph}km/h
      // //       <span className="dot"> precip {weather.current.precip_mm}%</span>
      // //     </span>
      // //   </h3>
      // //   <h1>{weather.current.temp_c}</h1>
      // //   <div>
      // //     <img src={weather.current.condition.icon} alt="" />
      // //   </div>
      // //   <table>
      // //     <tr>
      // //       {weather.forcast.forcastday.map((el, i) => {
      // //         const d = new Date(el.date);
      // //         return <td key={i}>{d.toString().slice(0, 3)}</td>;
      // //       })}
      // //     </tr>
      // //     <tr>
      // //       {" "}
      // //       {weather.forcast.forcastday.map((el, i) => (
      // //         <td key={i}>{el.day.maxtemp_c}</td>
      // //       ))}
      // //     </tr>
      // //     <tr>
      // //       {weather.forcast.forcastday.map((el, i) => (
      // //         <td key={i}>{el.day.avgtemp_c}</td>
      // //       ))}
      // //     </tr>
      // //     <tr>
      // //       {weather.forcast.forcastday.map((el, i) => (
      // //         <td key={i}>{el.day.mintemp_c}</td>
      // //       ))}
      // //     </tr>
      // //   </table>
      // // </div>
      // //other */
}

// <table>
//                       <tr>
//                         {weather.forecast.forecastday.map((el, i) => {
//                           const d = new Date(el.date);
//                           return <td key={i}>{d.toString().slice(0, 3)}</td>;
//                         })}
//                       </tr>
//                       <tr>
//                         {" "}
//                         {weather.forecast.forecastday.map((el, i) => (
//                           <td key={i}>{el.day.maxtemp_c}</td>
//                         ))}
//                       </tr>
//                       <tr>
//                         {weather.forecast.forecastday.map((el, i) => (
//                           <td key={i}>{el.day.avgtemp_c}</td>
//                         ))}
//                       </tr>
//                       <tr>
//                         {weather.forecast.forecastday.map((el, i) => (
//                           <td key={i}>{el.day.mintemp_c}</td>
//                         ))}
//                       </tr>
//                     </table>
//                   </li>
//                 </ul>
//               </div>
//             </div>
