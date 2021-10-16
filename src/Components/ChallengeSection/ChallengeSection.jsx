import React from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './ChallengeSection.css'
function ChallengeSection({ selectedParagraph, words, charecters, speed, timeStarted, timeRemaning, testInfo, onInputChange }) {

    return (
        <div className="challenge-container">
            <h1 data-aos="fade-down" className="challenge-text">Take a Speed Test Now</h1>
            <div data-aos="fade-down" className="testcontainer">
                <TestContainer
                    selectedParagraph={selectedParagraph}
                    words={words}
                    charecters={charecters}
                    speed={speed}
                    timeStarted={timeStarted}
                    timeRemaning={timeRemaning}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
    )
}
export default ChallengeSection