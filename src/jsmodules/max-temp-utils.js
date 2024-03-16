import { formatTimestamp } from "./process-data-utils.js";

export default function getMaxTempPerDay(data, showHours) {
  const dailyData = [];

  data.forEach(entry => {
    const datetime = formatTimestamp(entry.timestamp, "Europe/Stockholm"); // extract date, time, timezone from timestamp
    const date = datetime.split(' ')[0]; // extract date
    const time = datetime.split(' ')[1]; // extract hour

    // Check if an entry already exists for the current date
    const existingEntryIndex = dailyData.findIndex(item => item.observationDate === date);

    if (existingEntryIndex === -1) {
      const observation = { timestamp: entry.timestamp, observationDate: date, maxTemperature: entry.temp }
      if (showHours) {
        observation["observationTime"] = time;
      }
      // If no entry exists, create a new one for the current date
      dailyData.push(observation);
    } else {
      // If an entry exists, update the maxTemperature and observationTime if needed
      if (entry.temp > dailyData[existingEntryIndex].maxTemperature) {
        dailyData[existingEntryIndex].maxTemperature = entry.temp;
        if (showHours) {
          dailyData[existingEntryIndex].observationTime = time; // Update the observation time
        }
      }
    }
  });

  return dailyData;
}
