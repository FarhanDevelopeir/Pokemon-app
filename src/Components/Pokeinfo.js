import { Button, Card } from '@mui/material'
import React from 'react'
import pic from '../Images/download-removebg-preview (1).png'


const Pokeinfo = ({data}) => {
  console.log(data)
  return (
    <>
    {
      (!data)?'':(
      <Card  sx={{
        textAlign:'center',
        padding:'50px',
        backgroundColor:'#FCEEC8',
        borderRadius:'10px',
        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
        border:'2px solid rebeccapurple'
      }}>
        <h2>{data.name}</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png`} style={{
          height:'150px',
         
        }} />
        <div style={{
          display:'flex',
          // justifyContent:'space-between',
          width:'100%',
          margin:'0px auto',
          textAlign:'center',
          alignItems:'center'
          // border:'2px solid red'
        }}>
          {
            data.abilities.map((poke)=>{
              return(
                <div variant="contained" color="success" style={{
                  backgroundColor:'#007500',
                  borderRadius:'5px',
                  padding:'9px 10px',
                  color:'white',
                  marginLeft:'2px'
                  
                
                }}>
                  {poke.ability.name}
                
              </div>
              )
            })
          }
        </div>
        <div>
         
           {
            data.stats.map((poke)=>{
              return(
                <div  style={{
                  
                }}>
                  <h3>
                  {poke.stat.name} : {poke.base_stat}
                </h3>
                
              </div>
              )
            })
          }
        </div>
      </Card>
      )
    }
    </>
  )
}

export default Pokeinfo