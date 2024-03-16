import { useState, useEffect } from "react"
import { getColour } from "../jsmodules/process-data-utils.js"
import getMaxTempPerDay from "../jsmodules/max-temp-utils.js"

function TemperatureList() {
  const [data, setData] = useState([])
  const [showHours, setShowHours] = useState(false)

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

  const test = getMaxTempPerDay(data, showHours)

  return (
    <>
      <p id="latest-update">Latest update placeholder</p>
      <p id="about-anchor">
        Baserad på data från&nbsp;
        <a href="https://www.smhi.se/" target="_blank">
          SMHI
        </a>
        . <br />
        <a href="#about">Mer information om använd data</a>
        <br />
      </p>
      <p id="sort-div">
        Sorterar på <button id="sort-btn">sort button placeholder</button>
        <i className="fa-solid fa-arrows-up-down"></i> Visar&nbsp;
        <button id="datetime-btn" onClick={() => setShowHours(!showHours)}>
          {showHours ? "datum och tid" : "endast datum"}
        </button>
        <i className="fa-regular fa-calendar-days"></i>
        {showHours && <i className="fa-regular fa-clock" id="clock-icon"></i>}
      </p>
      <div id="data-div">
        {test.map((value) => (
          <div
            key={value.timestamp}
            className="value-div"
            style={{ backgroundColor: getColour(value.maxTemperature) }}
          >
            <p>{value.observationDate}</p>
            {showHours && <p>{value.observationTime}</p>}
            <p className="temp-paragraph">{value.maxTemperature}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default TemperatureList
