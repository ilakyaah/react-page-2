import React from 'react'
import Navbar from './Components/Navbar'
import MainPage from './Components/MainPage'
import SecondNav from './Components/SecondNav'
import CardPage from './Components/CardPage'
import ThirdNav from './Components/ThirdNav'

function App() {
  return (
    <div className="App">
       <Navbar />
       {/* <MainPage /> */}
       <SecondNav />
       <ThirdNav />
       <CardPage />
    </div>
  );
}

export default App;