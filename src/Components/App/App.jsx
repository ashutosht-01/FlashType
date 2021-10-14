import React from 'react'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
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
            </div>
        )
    }
}
export default App