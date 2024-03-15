import { useState, useEffect } from "react"
import { formatTimestamp, getColour } from "../jsmodules/process-data-utils.js"
/*import {
  getMaxTempPerDay,
  getMaxTempPerDayWithHour,
} from "../jsmodules/max-temp-utils.js"*/

function TemperatureList() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchOpenData() {
      try {
        const openDataLink =
          "https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/89230/period/latest-months/data.json"
        const response = await fetch(openDataLink)
        const result = await response.json()
        const allValues = result.value

        const thisYearsValues = allValues.filter((hourValue) => {
          if (hourValue.date >= 1704063600000) {
            return true
          } else {
            return false
          }
        })

        const formattedValues = thisYearsValues.map((hourValue) => {
          return {
            timestamp: hourValue.date,
            datetime: formatTimestamp(hourValue.date, "Europe/Stockholm"),
            temp: parseFloat(hourValue.value).toFixed(1),
          }
        })

        setData(formattedValues)
      } catch (error) {
        console.error("API-data kunde inte hämtas")
      }
    }

    fetchOpenData()
  }, [])

  if (!data) {
    return null
  }

  return (
    <div id="data-div">
      {data.map((value) => (
        <div
          key={value.timestamp}
          className="value-div"
          style={{ backgroundColor: getColour(value.temp) }}
        >
          <p>{value.datetime}</p>
          <p className="temp-paragraph">{value.temp}</p>
        </div>
      ))}
    </div>
  )
}

export default TemperatureList
