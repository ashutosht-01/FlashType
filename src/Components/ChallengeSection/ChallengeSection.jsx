import React from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './ChallengeSection.css'
function ChallengeSection() {
    return (
        <div className="challenge-container">
            <h1 className="challenge-text">Take a Speed Test Now</h1>
            <div className="testcontainer">
                <TestContainer words={4} charecters={15} wpm={20} />
            </div>
        </div>
    )
}
export default ChallengeSection