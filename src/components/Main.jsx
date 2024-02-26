import cl from '../style/Main.module.css'
import clcnt from '../style/Container.module.css'
import SliderComp from './Slider';
import Book from './Book';
import { books } from './books';
import { useContext, useEffect, useMemo, useState } from 'react';
import RenderBtns from './createBtns';
import { BooksContxext } from '../context/context';
function Main() {
    const [totalPages,setTotalPages] = useState(0)
    const [limit,setLimit] = useState(15)
    const [page,setPage] = useState(1)
    const [activeBtn,setActiveBtn] = useState(1)
    const [activeAll,setActiveAll] = useState(true)
    const [activeLeftBtn,setActiveLeftBtn] = useState(null)
    const [activeMenuBtn,setActiveMenuBtn] = useState(null)

    const [overflow,setOferflow] = useState(true)

    const {valueBooks,setValueBooks,valueMenu,setValueMenu} = useContext(BooksContxext)
    const arr_for_btn = []

    for(let i = 1; i <= totalPages; i++){
        arr_for_btn.push(i)
    }
    function countPages(totalPages,limit){
        const result = Math.ceil(totalPages / limit)
        return result
    }
    useMemo(()=>{
        if(valueMenu){
            clickLeftBtn(valueMenu)
        }
    },[valueMenu])
    function getBooks(page,limit){
        const result = []
        let num = 0
        let some_limit = limit
        if(page == 1){
            num = 0
            setValueBooks([])
        }
        if(page == 2){
            num = 15
            some_limit = 30
            setValueBooks([])
        }
        if(page == 3){
            num = 30
            some_limit = 45
            setValueBooks([])
        }
        if(page == 4){
            num = 45
            some_limit = 60
            setValueBooks([])
        }
        if(page == 5){
            num = 60
            some_limit = 75
            setValueBooks([])
        }
        if(page == 6){
            num = 75
            some_limit = 90
            setValueBooks([])
        }
        
        for(let i = num; i < some_limit; i++){
            if(books[i] == null){
                break
            }
            result.push(books[i])
        }
       return result
    }
    useEffect(()=>{
        totalCount()
    },[page])
    useMemo(()=>{
        if(valueBooks.length > 15){
            setActiveAll(false)
            setTotalPages(null)
        }
    },[valueBooks])
    function totalCount(){
        const response = getBooks(page,limit)
        const totalBooks = books.length
        const result = countPages(totalBooks,limit)
        setTotalPages(result)
        setValueBooks(response)
    }
    function clickAll(){
        totalCount()
        setActiveAll(true)
        setActiveLeftBtn(null)
        setActiveMenuBtn(null)
    }

    function clickLeftBtn(str){
        setActiveLeftBtn(str)
        const arr = []
            for(let i = 0; i < books.length; i++){
            if(books[i].tags == str){
                arr.push(books[i])
            }
        }
        setValueBooks(arr)
        setTotalPages(null)
        setActiveAll(false)
    }
    function clickMenu(str){
        setActiveMenuBtn(str)
        const arr = []
            if(str == 'Special Offers'){
            for(let i = 0; i < books.length; i++){
            if(books[i].SpcOffers === true){
                arr.push(books[i])
                }
             }
          }else{
            for(let i = 0; i < books.length; i++){
                if(books[i].tags == 'BestSellers'){
                    arr.push(books[i])
                    }
                 }
          }
        setValueBooks(arr)
        setActiveAll(false)
    }
    
    return (
<main className={cl.Main}>
    <div className={clcnt.Container}>
            {activeAll?<div className={cl.SliderAndDealMonth}>
                <div className={cl.Slider}>
                    <SliderComp/>
                </div>
                <div>
                <button className={cl.ButtonDeal}>Buy now</button>
                <img src={require('../style/img/dealofthemonth.png')} alt="DealOfTheMonth" 
                className={cl.DealOfTheMonth}/>
                    
                </div>
            </div>:null}
        <div className={cl.Wrapper}>
        <nav className={cl.leftCategories}>
            <h1 className={cl.leftCategories__Title}>Categories</h1>
            <a className={
               activeAll?cl.leftCategories__TitleAll_active:cl.leftCategories__TitleAll}
               onClick={()=>clickAll()} style={{cursor:'pointer'}}>All</a>
            <ul>
                <h2 className={cl.leftCategories__Titleh2}>Fiction & Literature</h2>
                <li className={activeLeftBtn == 'Children'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Children')}>Children</li>
                <li className={activeLeftBtn == 'Science'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Science')}>Science</li>
                <li className={activeLeftBtn == 'Fantasy'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Fantasy')}>Fantasy</li>
                <li className={activeLeftBtn == 'Mystery'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Mystery')}>Mystery</li>
                <li className={activeLeftBtn == 'Romance'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Romance')}>Romance</li>
                <li className={activeLeftBtn == 'Horror'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Horror')}>Horror</li>
                <li className={activeLeftBtn == 'Poetry'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Poetry')}>Poetry</li>
                <li className={activeLeftBtn == 'Literature'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Literature')}>Literature</li>
                <li className={activeLeftBtn == 'Crime'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Crime')}>Crime</li>
            </ul>
            <ul>
                <h2 className={cl.leftCategories__Titleh2}>Non - Fiction</h2>
                <li className={activeLeftBtn == 'Comic'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Comic')}>Comic</li>
                <li className={activeLeftBtn == 'Cook'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Cook')}>Cook</li>
                <li className={activeLeftBtn == 'Psychology'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Psychology')}>Psychology</li>
                <li className={activeLeftBtn == 'Medical'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Medical')}>Medical</li>
                <li className={activeLeftBtn == 'Art'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Art')}>Art</li>
                <li className={activeLeftBtn == 'Photography'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Photography')}>Photography</li>
                <li className={activeLeftBtn == 'Law'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Law')}>Law</li>
                <li className={activeLeftBtn == 'History'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('History')}>History</li>
                <li className={activeLeftBtn == 'Budiness'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Budiness')}>Budiness</li>
                <li className={activeLeftBtn == 'Computer'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Computer')}>Computer</li>
            </ul>
            <ul>
                <h2 className={cl.leftCategories__Titleh2}>Other</h2>
                <li className={activeLeftBtn == 'Baby'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Baby')}>Baby</li>
                <li className={activeLeftBtn == 'Sex'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Sex')}>Sex</li>
                <li className={activeLeftBtn == 'Travel'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Travel')}>Travel</li>
                <li className={activeLeftBtn == 'Science'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Science')}>Science</li>
                <li className={activeLeftBtn == 'Sports'?cl.leftCategories__li_active:cl.leftCategories__li} onClick={()=>clickLeftBtn('Sports')}>Sports</li>
            </ul>
        </nav>
            <section>
            <nav className={cl.Menu}>
                    <button className={activeMenuBtn == 'Best sellers'?
                    cl.Menu__btns_active:cl.Menu__btns} onClick={()=>clickMenu('Best sellers')}>Best sellers</button>
                    <button className={activeMenuBtn == 'New Arrivals'?
                    cl.Menu__btns_active:cl.Menu__btns} onClick={()=>clickMenu('New Arrivals')}>New Arrivals</button>
                    <button className={activeMenuBtn == 'Used Books'?
                    cl.Menu__btns_active:cl.Menu__btns} onClick={()=>clickMenu('Used Books')}>Used Books</button>
                    <button className={activeMenuBtn == 'Special Offers'?
                    cl.Menu__btns_active:cl.Menu__btns + ` ${cl.Menu__btns_last}`}
                    onClick={()=>clickMenu('Special Offers')}>Special Offers</button>
            </nav>
                <div className={cl.Books} style={totalPages === null?{height:'inherit',paddingBottom:'20px'}:null}>
                    <div className={cl.ContentBooks}>
                        {valueBooks.map((elem,index) => <Book title={elem.title} 
                        price={elem.price} img={elem.img} SpcOffers={elem.SpcOffers} key={index}/>)}
                    </div>
                        
                        {activeMenuBtn == null?<RenderBtns totalPages={arr_for_btn} setPage={setPage} activeBtn={activeBtn}
                        setActiveBtn={setActiveBtn}/>:null}
                        
                </div>
            </section>
        </div>
    </div>
</main>
);
}

export default Main;