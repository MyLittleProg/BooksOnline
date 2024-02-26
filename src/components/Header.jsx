import cl from '../style/Header.module.css'
import clCnt from '../style/Container.module.css'
import { useContext, useState } from 'react';
import { BooksContxext } from '../context/context';
import { books } from './books';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
function Header() {
    const [showElement, setShowElement] = useState(true);
    const [value,setValue] = useState('')
    const [activeBtn,setActiveBtn] = useState(null)
    const [activeClass,setActiveClass] = useState(false)
    const [activePlashka,setActivePlashka] = useState(false)
    const {valueBooks,setValueBooks,valueMenu,setValueMenu} = useContext(BooksContxext)
    function searchQuery(){
        if(value === undefined || value == ''){
            return
        }
       const arr = books.filter((elem)=>elem.title.toLowerCase()
       .includes(value.toLowerCase()));
       setValueBooks(arr)
    }
    const isDesktopOrMobile = useMediaQuery({
        query: '(max-width: 771px)'
     })
    function clickBtn(str){
        setValueMenu(str)
        setActiveBtn(str)
    }
    function clickBurger(){
        if(activeClass){
            setActiveClass(false)
            document.body.style.overflowY = 'scroll'
        }else{
            setActiveClass(true)
            document.body.style.overflow = 'hidden'
        }
        if(activePlashka){
            setActivePlashka(false)
        }else{
            setActivePlashka(true)
        }
        
    }
    if(!activePlashka){
        document.body.style.overflowY = 'scroll';
    }
    return ( 
<header className={cl.Header}>
    <div className={activePlashka?cl.activePlashka:null}>
    <div className={showElement?cl.showText:cl.hideText} style={{backgroundColor:'#424242', color:'white',textAlign:'center'}}>
        На данном сайте реализована <u>только</u> front-end часть.
        <button onClick={()=>setShowElement(false)} style={{borderRadius:'5px',border:'1px',padding:'2px',
        cursor:'pointer'}}>X</button></div>
    <nav className={cl.Menu}><div className={clCnt.Container}>
        <ul className={cl.Menu__ul}>
        <Link to="/login"><li className={cl.Menu__li}>Sign in</li></Link>
        <Link to="/login"><li className={cl.Menu__li}>My Account</li></Link>
        <li className={cl.Menu__li}>Order Status</li>
        <li className={cl.Menu__li}>Help</li>
        </ul>
        </div>
    </nav>
    <div className={cl.PreTop}><div className={clCnt.Container}>
        <div className={cl.Elemnts}>
            <Link to='/'><img src={require('../style/img/logo.png')} alt="Error img" 
            className={cl.Logo}/></Link>
                    <div className={cl.Search}>
                        <input value={value} onChange={(Event)=>setValue(Event.target.value)}
                        className={cl.Search__input} type="text" name="Search"/>
                        <img src={require('../style/img/Search.png')} alt="Error img" 
                        className={cl.Lupa}/>
                        <button onClick={()=>searchQuery()} className={cl.Search__text}>Search</button>
                    </div>
                    <div className={cl.Cart}>
                        <img src={require('../style/img/Shape.png')} alt="Error img" className={cl.Cart__img}/>
                        <ul className={cl.Cart__text}><li className={cl.Cart__title}>Your Cart</li>
                        <li className={cl.Cart__item}>(2 items)</li></ul>
                        <div className={cl.Cart__moneyButtom}>
                        <div className={cl.Cart__money}>$203.0</div>
                        <Link to="/cart_items"><button className={cl.Cart__Buttom}>Checkout</button></Link>
                        </div>
                    </div>
                    <Link to="/wish_list"><div className={cl.WishList}>
                        <img src={require('../style/img/Star.png')} className={cl.WishList__star}/>
                        <div className={cl.WishList__numbers}>2</div>
                        <div className={cl.WishList__text}>Wish list</div>
                    </div></Link>
                    <div className={activeClass?cl.active:null} onClick={()=> clickBurger()}><div className={cl.Menu__Burger}><span><div className={cl.Border__Burger}></div></span></div></div>
            </div>
        </div></div>
    <div className={cl.PrePreTop}>
        <div className={clCnt.Container}>
        <ul className={cl.PrePreTop__ul}>
            <li className={activeBtn =='Computer'?cl.PrePreTop__li_active:cl.PrePreTop__li} onClick={()=>clickBtn('Computer')}>Computer</li>
            <li className={activeBtn =='Cook'?cl.PrePreTop__li_active:cl.PrePreTop__li} onClick={()=>clickBtn('Cook')}>Cooking</li>
            <li className={activeBtn =='Literature'?cl.PrePreTop__li_active:cl.PrePreTop__li} onClick={()=>clickBtn('Literature')}>Education</li>
            <li className={activeBtn =='Psychology'?cl.PrePreTop__li_active:cl.PrePreTop__li} onClick={()=>clickBtn('Psychology')}>Fiction</li>
            <li className={activeBtn =='Art'?cl.PrePreTop__li_active:cl.PrePreTop__li} onClick={()=>clickBtn('Art')}>Culture</li>
            <li className={activeBtn =='Sports'?cl.PrePreTop__li_active:cl.PrePreTop__li} onClick={()=>clickBtn('Sports')}>Sports</li>
            <li className={activeBtn =='Medical'?cl.PrePreTop__li_active:cl.PrePreTop__li} onClick={()=>clickBtn('Medical')}>Medical</li>
            <li className={activeBtn =='Reference'?cl.PrePreTop__li_active:cl.PrePreTop__li} onClick={()=>clickBtn('Reference')}>Reference</li>
            <li className={activeBtn =='Science'?cl.PrePreTop__li_active:cl.PrePreTop__li} onClick={()=>clickBtn('Science')}>Science</li>
        </ul>
        </div>
    </div>
      <div style={activePlashka?{display:'block'}:{display:'none'}}>
                    <div className={cl.Search} style={isDesktopOrMobile?{display:'block'}:{display:'none'}}>
                        <input value={value} onChange={(Event)=>setValue(Event.target.value)}
                        className={cl.Search__input} type="text" name="Search"
                        />
                        <button onClick={()=>searchQuery()} style={{backgroundColor:'transparent',border:'0px',cursor:'pointer'}}>
                        <img src={require('../style/img/Search.png')} alt="Error img" 
                        className={cl.Lupa}/>
                        </button>
                    </div>
                    <div className={cl.BtnCart}><Link to="/cart_items"><img src={require('../style/img/Shape.png')} alt="Error img"  
                    className={cl.ImgShape}/><span className={cl.TextCart}>Your cart</span></Link></div>
                    <div className={cl.BtnWish}><Link to="/wish_list"><img src={require('../style/img/Star.png')} 
                    className={cl.ImgStart}/><span className={cl.TextCart}>Wish list</span></Link></div>
      </div>
    </div>
</header>
    );
}

export default Header;