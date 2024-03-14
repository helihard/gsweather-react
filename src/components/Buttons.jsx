function Buttons() {
  return (
    <>
      <p id="sort-div">
        Sortera på <button id="sort-btn">sort button placeholder</button>
        <i className="fa-solid fa-arrows-up-down"></i> Visa&nbsp;
        <button id="date-btn">endast datum</button>
        <button id="datetime-btn">datum och tid</button>
        <i className="fa-regular fa-calendar-days"></i>
        <i className="fa-regular fa-clock" id="clock-icon"></i>
      </p>
    </>
  )
}

export default Buttons
