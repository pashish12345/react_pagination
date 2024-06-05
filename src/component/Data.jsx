import React from 'react'

const Data = ({body, title, id}) => {
   
  return (
    <div>
      <h2>{id}</h2>
      <p>{title} </p>
      <p>{body}</p>
    </div>
  )
}

export default Data
