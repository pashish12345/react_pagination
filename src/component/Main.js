import React, { useEffect, useState } from 'react'

const Main = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState('');

 async function getData(){

try {
  setLoading(true);
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  response = await response.json();
  console.log(response);
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
      
    </div>
  )
}

export default Main
