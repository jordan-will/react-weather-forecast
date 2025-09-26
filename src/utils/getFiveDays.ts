const formatDayEnglish = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dayName = daysOfWeek[date.getDay()]; 
  const dayNumber = date.getDate(); 

  return `${dayName}, ${dayNumber}`;
}

export const getFiveDays = (data: any[]): any[] => {
  let dailyForecast: any = {};

  for (let forecast of data) {
    const date = new Date(forecast.dt_txt).toLocaleDateString("en-US", {
      weekday: "short",
    });

    if (forecast.dt_txt.includes("12:00:00")) {
      if (!dailyForecast[date]) {
        dailyForecast[date] = forecast;
        dailyForecast[date]["day"] = formatDayEnglish(forecast.dt);
      }
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(0, 5);
  return nextFiveDays;
};


// export const getFiveDays = (data: any[]):any[] => {
//   let dailyForecast: any = {}

//   for (let forecast of data) {
//     const date = new Date(forecast.dt_txt)
//       .toLocaleDateString('en-US', { weekday: 'short' });
//     if (!dailyForecast[date]) {
//       dailyForecast[date] = forecast;
//       dailyForecast[date]['day'] = formatDayEnglish(forecast.dt);
//     }
//   }

//   const nextFiveDays = Object.values(dailyForecast).slice(1, 6);
//   return nextFiveDays;
// } 