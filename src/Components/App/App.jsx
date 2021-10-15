import React from 'react'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Footer from '../footer/footer'
import './App.css'
import landing from '../Landing/Landing'
class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/*Nav section*/}
                <Nav />
                {/*Landing Section */}
                <Landing />
                {/*footer section */}
                <Footer />
            </div>
        )
    }
}
export default App