import React from "react"
import './TypingChallengeContainer.css'
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard"
function TypingChallengeContainer({ words, charecters, wpm }) {
    return (
        <div className="typing-challenge-container">
            {/* details section */}
            <div className="details-container">

                {/* words typed */}
                <ChallengeDetailsCard cardname="Words" cardvalue={words} />

                {/* charecter typed */}
                <ChallengeDetailsCard cardname="Charecters" cardvalue={charecters} />

                {/* speed */}
                <ChallengeDetailsCard cardname="Speed" cardvalue={wpm} />

            </div>

            {/* real challenge section */}
            <div className="type-writter-container">
                <p>this is real challenge</p>
            </div>
        </div>

    )
}
export default TypingChallengeContainer