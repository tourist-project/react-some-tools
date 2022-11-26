import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ImageSelectorPage, StopWatchPage, TopPage, TimerPage } from './pages'

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/image-selector" element={<ImageSelectorPage />} />
      <Route path="/stop-watch" element={<StopWatchPage />} />
      <Route path="/timer" element={<TimerPage />} />
    </Routes>
  </BrowserRouter>
)

export default Router
