import React from 'react'

const Paginate = ({itemPerPage, currentPage,changePage,totalNoOfItems, previousPage,nextPage}) => {
  

let noOfPages = Math.ceil(totalNoOfItems/itemPerPage);
console.log(noOfPages)
let pageNumber =[];

for(let i=1; i<= noOfPages ; i++){
  pageNumber?.push(i)
}


  return (
    <div>
      
      <button type='button' href='#' disabled={currentPage <= 1} onClick={()=>previousPage()}>prev</button>
      {
        pageNumber?.map((el,i)=>{
         return (
         <>
         
          <span key={i}> 
          
           <a href='#' onClick={()=>changePage(el)}> {el} </a> </span>
          
         
         </>
         )
        })
      }
       <button type='button' disabled={currentPage >= noOfPages} href='#'onClick={()=>nextPage()} >next</button>
    </div>
  )
}

export default Paginate
