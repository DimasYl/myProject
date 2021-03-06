import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialog from './components/Dialog/Dialog'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settin from './components/Settin/Settin'
import { BrowserRouter, Route } from 'react-router-dom'
import Dialogs from './components/Dialog/Dialog'

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div>
        <Route path='/profile' component={Profile} ho />
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settin} />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
