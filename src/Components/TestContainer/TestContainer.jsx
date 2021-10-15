import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import './TestContainer.css'
function TestContainer({ words, charecters, wpm }) {
    return (
        <div className="test-container">
            <div data-aos="fade-up" className="typing-challenge-container">

            </div>
            <div className="tryagain-container">
                <TryAgain words={words} charecters={charecters} wpm={wpm} />
            </div>
        </div>
    )
}
export default TestContainer