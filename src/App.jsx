import React from 'react';
import Button from './components/button/Button';
import Cards from './components/cards/Cards';

const App = () => {
  return (
    <main className='my-5 w-11/12 mx-auto'>
<h2 className='text-3xl font-bold text-center'>AI Universe Hub</h2>
<Button>Sort By Date</Button>
<Cards></Cards>



    </main>
  );
};

export default App;
