import React from 'react'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Challenge from '../ChallengeSection/ChallengeSection'
import Footer from '../footer/footer'
import './App.css'
class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/*Nav Section*/}
                <Nav />
                {/*Landing Section */}
                <Landing />
                {/* Challenge   Section   */}
                <Challenge />
                {/*footer Section */}
                <Footer />
            </div>
        )
    }
}
export default App