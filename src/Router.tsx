import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { TopPage, CalculatorPage, TimerPage } from './pages'

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/timer" element={<TimerPage />} />
    </Routes>
  </BrowserRouter>
)

export default Router
