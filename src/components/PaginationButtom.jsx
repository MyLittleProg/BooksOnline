import { useState } from 'react';
import '../style/RenderBtns.css'
function PaginationButtom({page,setPage,activeBtn,setActiveBtn}) {
    const [active,setActive] = useState(false)
    function setPageAndActive(){
        setPage(page)
        setActiveBtn(page)
    }
    return ( 
<div>
    <button className={`paginationNumber` + ` ${page == activeBtn?'pagination_active':''}`}
     onClick={()=>setPageAndActive()}>{page}
     </button>
</div>
);
}

export default PaginationButtom;