import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Feed } from '@mui/icons-material'


const App = () => (
  <BrowserRouter>
  <Box sx={{backgroundColor: '#000'}}>
    Navbar
    <Routes>
      <Route path="/" exact element {<Feed />}/>
      <Route path="/Video/:id" element={<VideoDetail />} />

      
      
    </Routes>
  </Box>
  </BrowserRouter>

);

export default App