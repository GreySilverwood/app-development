import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import kitten from './images/kitten1.jpeg';
import User from './comments'
//import images
import girlavatar from './images/female.png'
import guyavatar from './images/male.png'
import neutralavatar from './images/neutral.png'

//create content in the app using function component
const App = function(){
  //define a variable name
  let fullname = "Zaiqiang Li";

  //declare a function
  function greeting(){
    return "Good evening."
  }

  return(
    <div>
      <h1 style={{textAlign: "center", color: "orange"}}>Welcome to ReactJS, {fullname}.</h1>
      <p>{greeting()} Let's get familiar with the JSX elements.</p>
      <figure className='introimg'>
        <img src={kitten}/>
      </figure>

      {/* Card */}
      <section className='cardcontainer'>
        <User image={girlavatar} name='Jane' date='07/10/2024' comments='Nice work!' />
        <User image={guyavatar} name='John' date='06/30/2024' comments='I wanna go home...' />
        <User image={neutralavatar} name='Jim' date='07/15/2024' comments="Keep it up." />
      </section>
    </div>

  )  
}

// rooting the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
