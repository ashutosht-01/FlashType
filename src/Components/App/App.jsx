import React from 'react'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Challenge from '../ChallengeSection/ChallengeSection'
import Footer from '../footer/footer'
import './App.css'

const totaltime = 60

const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9"

class App extends React.Component {
    state = {
        selectedParagraph: "hello World",
        timeStarted: false,
        timeRemaning: totaltime,
        Words: 0,
        Charecters: 0,
        Wpm: 0,
        testInfo: []
    }
    componentDidMount() {
        const selectedParagraphArray = this.state.selectedParagraph.split('')
        console.log(selectedParagraphArray)
        const testinfo = selectedParagraphArray.map(function (letter) {
            return {
                testletter: letter,
                status: 'notattempted'
            };
        })
        console.log('test ___ info ', testinfo)
        this.setState({ testInfo: testinfo })
    }
    //timer function

    startTimer = () => {
        this.setState({ timeStarted: true })
        const Timer = setInterval(() => {
            if (this.state.timeRemaning > 0) {
                //change the speed
                const timeSpent = totaltime - this.state.timeRemaning;
                const wpm = (timeSpent > 0) ? ((this.state.Words / timeSpent) * totaltime) : 0;
                this.setState({
                    timeRemaning: this.state.timeRemaning - 1,
                    Wpm: parseInt(wpm)
                })
            } else {
                // after executing clear interval it stops calling callback function
                clearInterval(Timer)
            }
        }, 1000)
    }
    handeluserInput = (value) => {
        if (!this.state.timeStarted) this.startTimer()
    }
    render() {

        console.log('test info ', this.state.testInfo)


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
                    testInfo={this.state.testInfo}
                    onInputChange={this.handeluserInput}
                />
                {/*footer Section */}
                <Footer />
            </div>
        )
    }
}
export default App