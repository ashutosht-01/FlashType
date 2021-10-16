import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import './TestContainer.css'
function TestContainer({ selectedParagraph, words, charecters, speed, timeStarted, timeRemaning, testInfo, onInputChange }) {
    return (
        <div className="test-container">
            <div data-aos="fade-up" className="typing-challenge-container">
                <TypingChallengeContainer
                    selectedParagraph={selectedParagraph}
                    words={words}
                    charecters={charecters}
                    wpm={speed}
                    timeStarted={timeStarted}
                    timeRemaning={timeRemaning}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                />
            </div>
            {/* <div className="tryagain-container">
                <TryAgain words={words} charecters={charecters} wpm={wpm} />
            </div> */}
        </div>
    )
}

export default TestContainer