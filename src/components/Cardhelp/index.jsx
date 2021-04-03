import React from 'react'
import css from './Cardhelp.module.css'

export const Cardhelp = ({data}) => {
    return <div style={{background: data.bg}} className={css.cardhelp}>
        <hr />
        <h3>{data.title}</h3>
    </div>
}