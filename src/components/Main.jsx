import React from 'react';
import './Main.css';
// import { Dashboard } from './Dashboard';
// import PageTitle from './PageTitle';
// import Files from './Files';

const Main=(props)=> {
  return (
    <main id='main' className='main'>
      {props.children}
     
    </main>
    
  )
}

export default Main