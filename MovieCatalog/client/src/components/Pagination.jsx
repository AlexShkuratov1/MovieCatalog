import React from 'react'


const Pagination = ({moviesPerPage, totalMovies, paginate, currentPage}) => {
    const pageNumbers = []
    for (let i = 1; i <= (totalMovies/ moviesPerPage);i++)
    {
       pageNumbers.push(i);
    }
  return (
    <div>
        <ul className="pagination mt-3 justify-content-center">
            {Previouspage(currentPage,paginate)}
            {CurrentPages(currentPage,pageNumbers,paginate)}
            {NextPage(currentPage, pageNumbers,paginate)}
        </ul>
    </div>
  )
};
function CurrentPages(currentPage,pageNumbers, paginate)
{
    if(currentPage==1)
    {
        return(
        <><li className="page-item disabled">
                <a href="#" className="page-link" onClick={() => paginate(currentPage)}>1</a>
            </li><li className="page-item">
                    <a href="#" className="page-link" onClick={() => paginate(currentPage + 1)}>2</a>
                </li><li className="page-item">
                    <a href="#" className="page-link" onClick={() => paginate(currentPage + 2)}>3</a>
                    </li>
                <li className="page-item disabled">
                <a href="#" className="page-link">...</a>
                </li><li className="page-item">
                    <a href="#" className="page-link" onClick={() => paginate(pageNumbers.length)}>{pageNumbers.length}</a>
                </li></>
        )
    }
    if(currentPage >= pageNumbers.length-2)
    {
        return(
        <><li className="page-item">
                <a href="#" className="page-link" onClick={() => paginate(1)}>1</a>
            </li>
            <li className="page-item disabled">
                <a href="#" className="page-link">...</a>
                </li><li className="page-item">
                    <a href="#" className="page-link" onClick={() => paginate(pageNumbers.length-3)}>{pageNumbers.length-3}</a>
                </li><li className="page-item">
                    <a href="#" className="page-link" onClick={() => paginate(pageNumbers.length-2)}>{pageNumbers.length-2}</a>
                </li><li className="page-item">
                    <a href="#" className="page-link" onClick={() => paginate(pageNumbers.length-1)}>{pageNumbers.length-1}</a>
                </li><li className="page-item">
                    <a href="#" className="page-link" onClick={() => paginate(pageNumbers.length)}>{pageNumbers.length}</a>
                </li></>
        )
    }
    if(currentPage>1 && currentPage <pageNumbers.length-2)
    {
        return(
        <><li className="page-item ">
            <a href="#" className="page-link" onClick={() => paginate(1)}>1</a>
            </li> <li className="page-item disabled">
                <a href="#" className="page-link">...</a>
                </li><li className="page-item disabled">
                    <a href="#" className="page-link" onClick={() => paginate(currentPage)}>{currentPage}</a>
                </li><li className="page-item">
                    <a href="#" className="page-link" onClick={() => paginate(currentPage + 1)}>{currentPage + 1}</a>
                </li><li className="page-item disabled">
                <a href="#" className="page-link">...</a>
                </li><li className="page-item">
                    <a href="#" className="page-link" onClick={() => paginate(pageNumbers.length)}>{pageNumbers.length}</a>
                </li></>
        )
    }

}
function Previouspage(currentPage, paginate)
{
    if(currentPage==1)
           {
            return(
            <li className="page-item disabled">
            <a href= "#" className ="page-link" onClick={()=> paginate(currentPage-1)}>Предыдущая</a>
            </li>
            )
           }  
           else
           {
            return(
                <li className="page-item ">
                <a href= "#" className ="page-link" onClick={()=> paginate(currentPage-1)}>Предыдущая</a>
                </li>
            )
           }
};
function NextPage(currentPage, pageNumbers, paginate)
{
    if(currentPage==pageNumbers.length) 
    {
        return(
        <li className="page-item disabled">
            <a href= "#" className ="page-link" onClick={()=> paginate(currentPage+1)}>Следующая</a>
        </li>
        )   
    }  
    else
    {
        return(
        <li className="page-item">
            <a href= "#" className ="page-link" onClick={()=> paginate(currentPage+1)}>Следующая</a>
        </li>  
        )
    }                
}
export default Pagination
