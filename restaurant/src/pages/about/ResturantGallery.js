import React from 'react'
import img1 from '../../image/finedine1.jpg'
import img2 from '../../image/finedine2.jpg'
import img3 from '../../image/finedine3.png'
import img4 from '../../image/finedine4.jpg'
import '../../styles/about.css'

const Aboutimages = () => {
  return (
    <div className="float-child">
      <div className="img1">
        <img className="ig1" src={img2} alt="image2"/>
      </div>
      <div className="img2">
        <img className="ig2" src={img3} alt="image3"/>
      </div>
      <br/>
      <div className="img3">
        <img className="ig3" src={img4} alt="image4"/>
      </div>
      <div className="img4">
        <img className="ig4" src={img1} alt="image1"/>
      </div>
    </div>
  )
}

export default Aboutimages