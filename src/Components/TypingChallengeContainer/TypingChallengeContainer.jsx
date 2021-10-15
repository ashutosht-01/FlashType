import React from "react"
import './TypingChallengeContainer.css'
function TypingChallengeContainer({ words, charecters, wpm }) {
    return (
        <div className="typing-challenge-container">
            {/* details section */}
            <div className="details-container">
                {/* words typed */}
                <p>1</p>
                {/* charecter typed */}
                <p>2</p>
                {/* speed */}
                <p>3</p>
            </div>

            {/* real challenge section */}
        </div>

    )
}
export default TypingChallengeContainer