import React from 'react'

function Datec(props) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div>
        <h1>{props.heading}</h1>
        <h2>Current date is {date}</h2></div>
  )
}

export default Datec