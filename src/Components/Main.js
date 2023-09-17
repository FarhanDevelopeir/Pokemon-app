import React, { useEffect, useState } from 'react'
import { Container, Card, Button } from '@mui/material'
import { Grid, } from '@mui/material'
// import PCard from './PCard'
import pic from '../Images/download-removebg-preview (1).png'
import PCard from './PCard'
import axios from 'axios'
import Pokeinfo from './Pokeinfo'

// import { Grid, } from '@mui/material/Unstable_Grid2'; // Grid version 2

const Main = () => {
    const [url, seturl]=useState('https://pokeapi.co/api/v2/pokemon?limit=8');
    const [pokeData, setpokeData]=useState([]);
    const [loading, setloading]=useState(true);
    const [nexturl, setnexturl]=useState();
    const [prevurl, setprevurl]=useState();
    const [pokedex, setpokedex]=useState();

    const Pokefun=async()=>{
        setloading(true);
        const res=await axios.get(url);
        setnexturl(res.data.next);
        setprevurl(res.data.previous)
        getPokeurl(res.data.results);
        setloading(false);
        console.log(pokeData)
    }

    const getPokeurl=async(res)=>{
        res.map(async(item)=>{
            // console.log(item.url);
           const result=await axios.get(item.url)
        //    console.log(result)
        setpokeData(state=>{
            state=[...state,result.data];
            state.sort((a,b)=>a.id>b.id?1:-1);
            return state;
        })
            
        })
    }
   
    useEffect(()=>{
        Pokefun();
    },[url])

    return (
        <Container className='Container' style={{
            // border: '2px solid red',
            display: 'flex',
            // justifyContent:'space-between',
            paddingTop:'70px'
        }}>
            <div>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }} style={{ width: '60%' }}>
                <PCard pokeData={pokeData} loading={loading} infopoke={(poke)=>setpokedex(poke)} />
            </Grid>
            <div style={{
                width:'20%',
                // border:'2px solid red',
                display:'flex',
                justifyContent:'space-around',
                margin:'30px 0px'
            }}>
                {
                    prevurl && <Button variant="contained" color="primary" onClick={()=>{
                        setpokeData([]);
                        seturl(prevurl)
                    }}>
                        Previous</Button>
                }
                {
                    nexturl && <Button variant="contained" color="primary" onClick={()=>{
                        setpokeData([]);
                        seturl(nexturl)
                        // console.log(nexturl)
                    }}>Next</Button>
                }

            </div>

            </div>
            
            <div style={{
                marginTop:'20px',
                position:'fixed',
                right:'15%'

            }}>
                <Pokeinfo data={pokedex}/>
            </div>


        </Container>
    )
}

export default Main