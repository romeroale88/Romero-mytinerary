import './style.css'
import Header from './components/Header'
import Main from './pages/Main'
import Footer from './components/Footer'
import Cities from './pages/Cities'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import City from './components/City'

function App(){
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/cities' component={Cities} />
          <Route path ="/city/:id" component={City}/>
          </Switch>
      </BrowserRouter>
      <Footer />
    </>  
  )
}

export default App