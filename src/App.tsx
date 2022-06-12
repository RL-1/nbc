import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './component/Footer/Footer';
import { Header } from './component/Header/Header';
import { Wrapper } from './component/Wrapper/wrapper';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';
import { Login } from './pages/isAuth/component/login/login';
import { Lk } from './pages/Lk';

export const App = () => {
  return (
      <>
        <Header />
        <Wrapper>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='catalog/:id' element = {<Catalog />}/>
            <Route path='/lk' element={<Lk />} />
          </Routes>
        </Wrapper>
        <Footer />
      </>
    )
}
