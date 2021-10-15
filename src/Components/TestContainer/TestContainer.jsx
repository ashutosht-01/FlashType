import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import './TestContainer.css'
function TestContainer({ words, charecters, wpm }) {
    return (
        <div className="test-container">
            <div data-aos="fade-up" className="typing-challenge-container">
                <TypingChallengeContainer words={words} charecters={charecters} wpm={wpm} />
            </div>
            {/* <div className="tryagain-container">
                <TryAgain words={words} charecters={charecters} wpm={wpm} />
            </div> */}
        </div>
    )
}
export default TestContainer