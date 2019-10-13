import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router} from 'react-router-dom'
import 'bulma'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'



class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <main>
          < Home />
        </main>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
