
export function getMaxTempPerDay(data) {
  const dailyData = [];

  data.forEach(entry => {
    const date = entry.datetime.split(' ')[0];

    // Check if an entry already exists for the current date
    const existingEntry = dailyData.find(item => item.date === date);

    if (!existingEntry) {
      // If no entry exists, create a new one for the current date
      dailyData.push({ date, maxTemperature: entry.temp });
    } else {
      // If an entry exists, update the maxTemperature if needed
      existingEntry.maxTemperature = Math.max(existingEntry.maxTemperature, entry.temp);
    }
  });

  return dailyData;
}


export function getMaxTempPerDayWithHour(data) {
  const dailyData = [];

  data.forEach(entry => {
    const date = entry.datetime.split(' ')[0];
    const time = entry.datetime.split(' ')[1]; // Extract the time part

    // Check if an entry already exists for the current date
    const existingEntryIndex = dailyData.findIndex(item => item.date === date);

    if (existingEntryIndex === -1) {
      // If no entry exists, create a new one for the current date
      dailyData.push({ date, maxTemperature: entry.temp, observationTime: time });
    } else {
      // If an entry exists, update the maxTemperature and observationTime if needed
      if (entry.temp > dailyData[existingEntryIndex].maxTemperature) {
        dailyData[existingEntryIndex].maxTemperature = entry.temp;
        dailyData[existingEntryIndex].observationTime = time; // Update the observation time
      }
    }
  });

  return dailyData;
}

