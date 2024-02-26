import cl from '../style/Main.module.css'
import PaginationButtom from './PaginationButtom';

function RenderBtns({totalPages,setPage,activeBtn,setActiveBtn}){
    return ( 
<div className={cl.pagination}>
    {totalPages.map((elem,index) => <PaginationButtom page={elem} setPage={setPage} 
    activeBtn={activeBtn} setActiveBtn={setActiveBtn} key={index}/>)}
</div>
     );
}

export default RenderBtns;