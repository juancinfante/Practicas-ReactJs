import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LoginScreen } from '../pages/LoginScreen'
import { HomeScreen } from '../pages/HomeScreen'
import { ErrorScreen } from '../pages/ErrorScreen'
export const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />}></Route>
                <Route path="/" element={<HomeScreen />}></Route>
                <Route path="*" element={<ErrorScreen />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
