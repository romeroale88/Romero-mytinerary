import './style.css'
import Header from './components/Header'
import Main from './pages/Main'
import Footer from './components/Footer'
import Cities from './pages/Cities'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import City from './components/City'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App(){
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/cities' component={Cities} />
          <Route path ="/city/:id" component={City}/>
          <Route path='/signin' component={SignIn} />
          <Route path= '/signup' component={SignUp} />
          </Switch>
      </BrowserRouter>
      <Footer />
    </>  
  )
}

export default App