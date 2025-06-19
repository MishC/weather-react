import { Dates } from "../../functions/Dates";
import { Average } from "../../functions/Average";

import WeatherImg from "../weatherImg/WeatherImg.component";
import "./ExtendedWeather.styles.css";

const ExtendedWeather = ({ days, timeshifts }) => {
  if (!days || !Array.isArray(days) || days.length < 5 || timeshifts === undefined) {
    return (
      <div style={{ fontSize: "16px", color: "gray" }}>No data available</div>
    );
  }

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
            const arrDay = Object.entries(days[i] || {});
            let x = timeshifts > 7 ? 12 : 6;
            let y = `next_${x}_hours`;

            let arrDayT = arrDay
              .map((item) => item[1]?.[0]?.data?.instant?.details?.air_temperature)
              .filter((v) => v !== undefined);

            let arrDayP = arrDay
              .map((item) => item[1]?.[0]?.data?.[y]?.details?.precipitation_amount)
              .filter((v) => v !== undefined);

            let arrDayW = arrDay
              .map((item) => item[1]?.[0]?.data?.instant?.details?.wind_speed)
              .filter((v) => v !== undefined);

            const noData = arrDayT.length === 0 || arrDayP.length === 0 || arrDayW.length === 0;

            return (
              <tr key={i}>
                <th scope="row">{i === 0 ? `Today ${Dates(i)}` : Dates(i)}</th>
                {["night", "morning", "afternoon", "evening"].map((period) => (
                  days[i]?.[period]?.[0]?.data?.[y]?.summary?.symbol_code ? (
                    <td key={period}>
                      <WeatherImg
                        summary={days[i][period][0].data[y].summary.symbol_code}
                      />
                    </td>
                  ) : (
                    <td key={period}>
                      <div style={{ fontSize: "16px", color: "gray" }}>&nbsp;</div>
                    </td>
                  )
                ))}
                <td className="daily-weather-list-item__temperature ">
                  {!noData ? `${Math.round(Math.max(...arrDayT))}° / ${Math.round(Math.min(...arrDayT))}°` : (
                    <div style={{ fontSize: "16px", color: "gray" }}>&nbsp;</div>
                  )}
                </td>
                <td className="daily-weather-list-item__precipitation ">
                  {!noData ? `${Math.round(Average(arrDayP))} mm` : (
                    <div style={{ fontSize: "16px", color: "gray" }}>"No data available"</div>
                  )}
                </td>
                <td className="daily-weather-list-item__wind ">
                  {!noData ? `${Math.round(Average(arrDayW))} m/s` : (
                    <div style={{ fontSize: "16px", color: "gray" }}>"No data available"</div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExtendedWeather;
