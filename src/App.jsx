import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MainPage from './components/MainPage'
import './assets/css/custom-style.css'
import './assets/css/slider.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <MainPage></MainPage>
    </>
  )
}

export default App
