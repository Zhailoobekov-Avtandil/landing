import React from 'react'
import './Helpcard.css'

export const Helpcard = ({data}) => {
    if (data.color) {
      return <div style={{background: data.color}} className='card'>
         <hr />
        <h3>{data.title}</h3>
      </div>
    } else {
      return <div style={{backgroundImage: `url(${data.img})`}} className='card'>
        <hr />
        <h3>{data.title}</h3>
      </div>
    }
  }