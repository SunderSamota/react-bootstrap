import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import NabBar from './NabBar'
import Service from './Service'
import Footer from './Footer'
import ApiWithAxios from './ApiWithAxios'
import TodoList from './TodoList'

const App = () => {
  return (
    <>
    <NabBar/>
      <Routes>
        <Route exact path='/' index element= {<Home />} />
        <Route exact path='/service' element= {<Service />} />
        <Route exact path='/about' element= {<About />} />
        <Route exact path='/contact' element= {<Contact />} />
        <Route exact path='/api' element= {<ApiWithAxios />} />
        <Route exact path='/todolist' element= {<TodoList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App
