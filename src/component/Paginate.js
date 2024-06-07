import React from 'react'
import "../style.css"
const Paginate = ({itemPerPage, currentPage,changePage,totalNoOfItems, previousPage,nextPage}) => {
  

let noOfPages = Math.ceil(totalNoOfItems/itemPerPage);

let pageNumber =[];

for(let i=1; i<= noOfPages ; i++){
  pageNumber?.push(i)
}


  return (

    <nav>
      <ul className='link-container'>
      
      <li className='item'>
      <a href='#' onClick={()=>previousPage()} 
      className={`pagelink ${currentPage === 1 ? 'disabled' : " " }`}>prev</a>
      </li>
      {
        pageNumber?.map((el,i)=>{
         return (
         <>
         
          <li key={i} className={`item `}> 
          
           <a href='#' onClick={()=>changePage(el) }
           className={`pagelink ${currentPage === el ? "active" : " "} `}
           
           > {el} </a> </li>
          
         
         </>
         )
        })
      }
       <li>
       <a href='#' className={`pagelink ${currentPage === noOfPages ? "disabled": ""} `} onClick={()=>nextPage()} >next</a>
       </li>
    </ul>
    </nav>
  )
}

export default Paginate
