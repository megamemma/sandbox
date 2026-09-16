## Screenshots
![Screenshot](./assets/images/desktop.png)

## Features
- Search weather by city name
- Toast notif on invalid city (404)
- Enter key + button click both trigger search 
- Weather icon changes based on conditions

## Possible improvements
- Animate toast + hide underlying elements with `display: none` (currently using `opacity` only) — needs `setTimeout` synced with CSS transition duration
- Handle empty input (currently submits blank string to API)
- Dropdown/list of 10+ popular cities for quick selection
- Display current local time for the searched city (OpenWeather already has it)

- **Security:** free API key is exposed in client-side JS, for real deployment would be critical. 

