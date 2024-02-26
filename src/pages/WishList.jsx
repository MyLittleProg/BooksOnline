import Header from "../components/Header";
import clCnt from '../style/Container.module.css'
import cl from '../style/WishList.module.css'
function WishList() {
    return ( 
<>
<Header/>
    <div className={clCnt.Container}>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        <div className={cl.card_book}>
            <img src={require('../style/img/bookWishList.PNG')} alt="Book" 
            className={cl.ImageBook}/>
                <h5 className={cl.card__title}>The Hare With Amber</h5>
                <p className={cl.card__price}>$125</p>
        </div>
        <div className={cl.card_book}>
            <img src={require('../style/img/bookWishList2.PNG')} alt="Book" 
            className={cl.ImageBook}/>
                <h5 className={cl.card__title}>The Hare With Amber</h5>
                <p className={cl.card__price}>$125</p>
        </div>
        
        </div>
    </div>

<div className={cl.Footer}>
    <div className={cl.Footer__footer}>
        <div className={clCnt.Container}>
            <h3 className={cl.Footer__footerTitle}>We accept all major Credit Card/Debit Card/Internet Banking</h3>
                <div className={cl.Footer__footerImg}>
                    <img src={require('../style/img/card1.png')} alt="Error IMG" />
                    <img src={require('../style/img/card2.png')} alt="Error IMG" />
                    <img src={require('../style/img/card3.png')} alt="Error IMG" />
                </div>
        </div>
        <div className={cl.Footer__footerPrivacy}>
            <div className={clCnt.Container}>Powered by Korpatenkov Anton © 2023-2024, Booksonline</div>
        </div>
    </div>
</div>
</>
     );
}

export default WishList;