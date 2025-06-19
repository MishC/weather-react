# Weather React
All information about weather forecast are caught from api.met.no which uses also yr.no.
Weather forecasts are averaged over time period like morning 6-12 h, afternoon 12-18 h, evening 18-00 h, night 00-06 h. 
Cities geolocation (longitude, latitude) is taken from  OpenStreetMap's Nominatim API. 

This app was coded without LLMs :)

See live at https://weather-react-mishc.netlify.app/

# How to start the project in your browser?

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Future plans

Get better of data collections of API as it will search for available data in nearby hours, not just get "next_6_hour" forecast, because in some cities data are not available in this array ("next_6_hour")

