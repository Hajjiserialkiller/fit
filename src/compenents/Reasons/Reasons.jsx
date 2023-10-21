import React from 'react'
import './Reasons.css'
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>

            <div>
                <span className='stroke-text'>why</span>
                <span> choose us?</span>
            </div>

            <div className='details-r'>
                <div>
                    <img src="" alt=""></img>
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src="" alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src="" alt="" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src="" alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <span 
                style={{
                    color: "var(--gray)",
                    fontWeight: "normal",
                }}
                >
                OUR PARTNERS
            </span>

            <div className="partners">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons
