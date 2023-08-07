
import React, { useEffect, useState } from 'react';
import SingelCard from './SingelCard';
import Button from '../button/Button';

const Cards = () => {
   const seeALlFun = ()=>{
setSeeAll(false)
   }
const [Cards,setCards] = useState([])
const [SeeAll,setSeeAll]=useState(true)
useEffect(()=>{
   fetch('https://openapi.programming-hero.com/api/ai/tools')
   .then(res=>res.json())
   .then(data=>setCards(data.data.tools))
},[])

   return (
      <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4' >
         {
            Cards.slice(0,SeeAll?6:12).map(card => <SingelCard card={card}></SingelCard>)
         }
      </div>
{
   SeeAll&& <span onClick={seeALlFun} id='btn'><Button>See All</Button></span>
}

      
      </>
   );
};

export default Cards;