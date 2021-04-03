import React from 'react'
import css from './Card.module.css'
import img from '../../Images/img.png'

export const Card = () => {
    return (
      <div className={css.card}>
       <div className={css.block}>
         <nav>
           <h3>ThriveTalk</h3>
           <ul>
             <li>Home</li>
             <li>About</li>
             <li>Services</li>
             <li>Blog</li>
           </ul>
           <button className={css.btn}>Contact us</button>
         </nav>
       </div>
       <div className={css.content}>
         <div className={css.item}>
         <h3>ThriveTalk</h3>
         <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE </h1>
         <p>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
         <div className={css.btns}>
           <button className={css.btn1}>Who am I</button>
           <button className={css.btn2}>What do I do</button>
         </div>
         </div>

         <div className={css.img}>
           <img src={img} alt=''/>
         </div>

       </div>
      </div>
    )
  }