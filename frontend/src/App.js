import './style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Cities from './components/Cities'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App(){
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/cities' component={Cities} />
          </Switch>
      </BrowserRouter>
      <Footer />
    </>  
  )
}

export default App