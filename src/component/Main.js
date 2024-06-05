import React, { useEffect, useState } from 'react'
import Data from './Data';

const Main = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState('');

 async function getData(){

try {
  setLoading(true);
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  response = await response.json();
  
  setData(response)
  
} catch (error) {
  setError(error)
}finally{
  setLoading(false)
}

  }


  useEffect(()=>{
   getData();
  },[])
  
  return (
    <div>
      {
        loading ? <h2> Loading ... </h2> : error ? <h2> {error?.name} </h2> : (
          <>
          {
            data?.map(el=>{
             return <Data key={el.id} {...el} />
            })
          }
          </>
        ) 
      }
    </div>
  )
}

export default Main
