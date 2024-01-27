import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
  <>
  <div className='home' id='home'>Home
  <main>
    <h1>TechyStar</h1>
    <p>Solution to all your problems</p>
  </main>
  </div>

  <div className='home2'>
    <img src={vg} alt="Graphics" />

    <div>
        <p>we are your one and  only solution to the tech problems you face everyday.
        We are leading tech company whose aim is to increase the problem solving ability in children. 
        </p>
    </div>
  </div>
  <div className='home3' id='about'>
    <div>
      <h1>
        Who we are? 
      </h1>
      <p>For my personal practice project in React.js, 
        I am building a dynamic and responsive task management application. 
        The goal is to create a user-friendly interface where individuals can add, edit, and delete tasks, 
        as well as organize them into different categories. 
        Leveraging React's component-based architecture, 
        I'm implementing features like drag-and-drop functionality for task prioritization and utilizing 
        state management to ensure a seamless user experience. In addition, 
        I am integrating React Router to enable smooth navigation between different views, 
        such as a task list and detailed task view. 
        </p>
    </div>
  </div>

  <div className="home4" id='brands'>
    <div>
      <h1>Brands</h1>
      <article>
        <div 
          style={{
            animationDelay:"0.3s",
            }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>
        <div 
          style={{
            animationDelay:"0.5s",
            }}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>
        <div 
          style={{
            animationDelay:"0.7s",
            }}>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>
        <div 
          style={{
            animationDelay:"1s",
            }}>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
      </article>
    </div>
  </div>
  </>
  )
}

export default Home