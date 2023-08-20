import Header from './components/header/header'
import Provider from './context/provider'
import { Outlet } from 'react-router-dom'
import './App.css'
import Cart from './components/cart/cart'

function App() {

  return (
    <div className='app'>
      <Provider>
        <Header />
        <Outlet />
        <Cart />
      </Provider>
    </div>
  )
}

export default App
