import { useState } from "react"
import { getColour } from "../jsmodules/process-data-utils.js"
import getMaxTempPerDay from "../jsmodules/max-temp-utils.js"

function TemperatureList({ data }) {
  const [sortOrder, setSortOrder] = useState("desc")
  const [showHours, setShowHours] = useState(false)

  if (!data.length) {
    return null
  }
  const dataWithMaxTemp = getMaxTempPerDay(data, showHours)

  return (
    <>
      <p id="sort-div">
        Sorterar på&nbsp;
        <button
          id="sort-btn"
          onClick={() => {
            if (sortOrder === "desc") {
              setSortOrder("asc")
            } else {
              setSortOrder("desc")
            }
          }}
        >
          {sortOrder === "desc" ? "nyast först" : "äldst först"}
        </button>
        <i className="fa-solid fa-arrows-up-down"></i> Visar&nbsp;
        <button id="datetime-btn" onClick={() => setShowHours(!showHours)}>
          {showHours ? "datum och tid" : "endast datum"}
        </button>
        <i className="fa-regular fa-calendar-days"></i>
        {showHours && <i className="fa-regular fa-clock" id="clock-icon"></i>}
      </p>
      <div className={sortOrder === "asc" ? "data-div-asc" : "data-div-desc"}>
        {dataWithMaxTemp.map((value) => (
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
