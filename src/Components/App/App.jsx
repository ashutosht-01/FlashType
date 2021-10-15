import React from 'react'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Challenge from '../ChallengeSection/ChallengeSection'
import Footer from '../footer/footer'
import './App.css'

const totaltime = 60


class App extends React.Component {
    state = {
        selectedParagraph: "hello World",
        timeStarted: false,
        timeRemaning: totaltime,
        Words: 0,
        Charecters: 0,
        Wpm: 0
    }
    render() {
        return (
            <div className="app">
                {/*Nav Section*/}
                <Nav />
                {/*Landing Section */}
                <Landing />
                {/* Challenge   Section   */}
                <Challenge
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.Words}
                    charecters={this.state.Charecters}
                    speed={this.state.Wpm}
                    timeStarted={this.state.timeStarted}
                    timeRemaning={this.state.timeRemaning}
                />
                {/*footer Section */}
                <Footer />
            </div>
        )
    }
}
export default App