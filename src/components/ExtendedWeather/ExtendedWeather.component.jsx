import { Dates } from "../../functions/Dates";
import WeatherImg from "../weatherImg/WeatherImg.component";
import "./ExtendedWeather.styles.css";

//import  {PartOfDay} from "../../functions/PartOfDay";
const ExtendedWeather = ({ days }) => {
  return (
    <div className="ExtendedWeather mt-5 mx-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> </th>

            <th scope="col"> Night</th>
            <th scope="col">Morning</th>
            <th scope="col">Afternoon</th>
            <th scope="col">Evening</th>
            <th scope="col">Max/Min temperature</th>
            <th scope="col">Precipitation</th>
            <th scope="col">Wind</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5).keys()].map((i) => {
            const arrDay = Object.entries(days[i]);
            console.log(arrDay[0][1][0]);

            let arrDayT = arrDay.map((item) => {
              if (item[1][0] === undefined) {
                return "none";
              }
              return item[1][0].data.instant.details.air_temperature;
            });
            arrDayT = arrDayT.filter((i) => {
              return i !== "none";
            });
            console.log(Math.max(...arrDayT));

            return (
              <tr key={i}>
                <th scope="row">Today {Dates(i)}</th>
                {days[i].night[0] === undefined ? (
                  <td>{""}</td>
                ) : (
                  <td>
                    <WeatherImg
                      summary={
                        days[i].night[0].data.next_6_hours.summary.symbol_code
                      }
                      key={Date.now()}
                    />
                  </td>
                )}
                {days[i].morning[0] !== undefined ? (
                  <td>
                    <WeatherImg
                      summary={
                        days[i].morning[0].data.next_6_hours.summary.symbol_code
                      }
                      key={Date.now()}
                    />
                  </td>
                ) : (
                  <td>{""}</td>
                )}
                {days[i].afternoon[0] !== undefined ? (
                  <td>
                    <WeatherImg
                      summary={
                        days[i].afternoon[0].data.next_6_hours.summary
                          .symbol_code
                      }
                      key={Date.now()}
                    />
                  </td>
                ) : (
                  <td>{""}</td>
                )}
                {days[i].evening[0] !== undefined ? (
                  <td>
                    <WeatherImg
                      summary={
                        days[i].evening[0].data.next_6_hours.summary.symbol_code
                      }
                      key={Date.now()}
                    />
                  </td>
                ) : (
                  <td>{""}</td>
                )}
                <td className="daily-weather-list-item__temperature ">
                  {Math.round(Math.max(...arrDayT))}°/
                  {Math.round(Math.min(...arrDayT))}°
                </td>
              </tr>
            );
          })}{" "}
        </tbody>
      </table>
    </div>
  );
};
export default ExtendedWeather;
