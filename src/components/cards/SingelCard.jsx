import React from 'react';

const SingelCard = (props) => {
   console.log(props.card)
   const {features,id,description,published_in,name,image} = props.card
   return (
      <div>
         

         <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
      <img class="p-4   " src={image} alt="product image" />
 
    <div class="px-5 pb-5">
     
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Features</h5>
       <p className='font-medium'>{
         features.map((feature,index)=><p><span>{index+1} .</span>{feature}</p>)
       }</p>

    </div>
    <hr className=' border-emerald-300 w-11/12 mx-auto'  />
    <div className='px-5'>
      <p>{name}</p>
      <p>{published_in}</p>
    </div>
   
</div>


      </div>
   );
};

export default SingelCard;