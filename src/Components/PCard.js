import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, styled } from '@mui/material'
import pic from '../Images/download-removebg-preview (1).png'
import CircularProgress from '@mui/material/CircularProgress'; 
// import './Style.css'





const PCard = ({pokeData, loading, infopoke}) => {
  console.log(pokeData, loading)
  
 
  return (
    <>
    {
      loading ? <CircularProgress disableShrink />:
      pokeData.map((item)=>{
        return (
          < >
          <Grid 
          item  xs={8} sm={8} md={5} lg={5} xl={5}  onClick={()=>{infopoke(item)}}>
      <Card 
       sx={{
        borderRadius: '20px',
    backgroundColor:'#9EDEF9',
    
    /* background-color: #9EDEF9; */
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
       }}
       className='grid'>
        <CardContent style={{
          display:'flex',
          alignItems:'center',
          // textAlign:'center'
        }} >
        <h3>{item.id}</h3>
        <img src={item.sprites.front_default}  />
        <h3>{item.name}</h3>
        </CardContent>
      </Card>
    </Grid>
          </>
        )
      })
    }
    </>
    
  )
}

export default PCard