import React, { useEffect, useState } from 'react'
import Data from './Data';
import Paginate from './Paginate';
const itemPerPage = 10;
const Main = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState('');
  const[currentPage, setCurrentPage] = useState(1);
  
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

  let lastIndex = currentPage*itemPerPage
  let firstIndex = currentPage*itemPerPage - itemPerPage
  let dataForCurrentPage = data.slice(firstIndex,lastIndex);
  let changePage=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  function previousPage(){
if(currentPage >=1 ){
  setCurrentPage(currentPage-1)
}
  }
  function nextpage(){
setCurrentPage(currentPage+1)
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
            dataForCurrentPage?.map(el=>{
             return <Data key={el.id} {...el} />
            })
          }
          <Paginate 
          itemPerPage={itemPerPage} 
          currentPage={currentPage}
          totalNoOfItems = {data?.length}
          changePage={changePage}
          previousPage={previousPage}
          nextPage={nextpage}
          />
          </>
        ) 
      }
    </div>
  )
}

export default Main
