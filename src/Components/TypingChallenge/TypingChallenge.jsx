import React from 'react'
import './TypingChallenge.css'
function TypingChallenge({ selectedParagraph, timeStarted, timeRemaning }) {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{timeRemaning}</p>
                <p className="timer-info">
                    {/* when timer started we do NOT need to render this statement */}
                    {!timeStarted ? "Start typing to start the test" : undefined} </p>
            </div>
            <div className="text-area">
                <div className="text-area-left">
                    <div className="test-paragraph">
                        <p>{selectedParagraph}</p>
                    </div>
                </div>
                <div className="text-area-right">
                    <textarea name="" placeholder="start typing " rows="10"></textarea>
                </div>
            </div>
        </div>
    )
}
export default TypingChallenge