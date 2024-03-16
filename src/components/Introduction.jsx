import { formatTimestamp } from "../jsmodules/process-data-utils.js"

function Introduction({ latestUpdate }) {
  if (!latestUpdate) {
    return null
  }
  return (
    <>
      <p id="latest-update">
        {"Senast uppdaterad: " +
          formatTimestamp(latestUpdate.timestamp, "Europe/Stockholm")}
      </p>
      <p id="about-anchor">
        Baserad på data från&nbsp;
        <a href="https://www.smhi.se/" target="_blank">
          SMHI
        </a>
        . <br />
        <a href="#about">Mer information om använd data</a>
        <br />
      </p>
    </>
  )
}

export default Introduction
