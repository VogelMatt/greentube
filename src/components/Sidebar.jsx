import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const Sidebar = () => {
  <Stack
  direction="row"
  sx={{
    overflowY: "auto"
    Height: { sx: 'auto', md: '95%'},
    flexDirection: { md: 'column'},

  }}
  {categories.map((category) => ( 
    
  ))}

}

export default Sidebar