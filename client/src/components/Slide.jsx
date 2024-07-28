import React from 'react'
import "../styles/slide.scss"

const Slide = () => {
  return (
    <div className="slide">
      <div className="header-content">
        <h1>Rest Easy, Stay Happy</h1>
        <p>The Perfect Guest Room Awaits You!</p>
        {/* <a href="#" class="ctn">
          View More
        </a> */}
        <input type="submit" value="View More" className="view-btn" />
      </div>
    </div>
  );
}

export default Slide