import React from 'react'
import css from './Card2.module.css'
import img2 from '../../Images/img2.png'

export const Card2 = () => {
    return (
        <div className={css.card}>
            <div className={css.text}>
             <h2>Why Thrive?</h2>
             <p>Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist? Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk. Start therapy now with a licensed therapist!</p>
            </div>
            <div className={css.picture}>
                <img src={img2} alt=''/>
            </div>
        </div>
    )
}