import Header from "../components/Header";
import clCnt from '../style/Container.module.css'
import cl from '../style/Cart.module.css'
import { books } from '../components/books';
function Cart() {
    return ( 
<>
    <Header/>
        <div className={clCnt.Container}>
        <div className={cl.CartFlex}>
            <div>
                <div className={cl.AlsoLikeLike__card}>
                    <img src={books[0].img} alt=""  className={cl.LikeImg}/>
                        <div className={cl.AlsoLikeLike__card_about}>
                            <h5 className={cl.AlsoLikeLike__card_title}>The Hare With Amber</h5>
                            <p className={cl.AlsoLikeLike__card_price}>$125</p>
                            <img className={cl.DeleteIcon} src={require('../style/img/iconDelete.png')} alt="Delete ICON" />
                            <img className={cl.WhishAdd} src={require('../style/img/Star.png')} alt="Wish ICON" />
                        </div>
                </div>
                <div className={cl.AlsoLikeLike__card}>
                    <img src={books[0].img} alt=""  className={cl.LikeImg}/>
                        <div className={cl.AlsoLikeLike__card_about}>
                            <h5 className={cl.AlsoLikeLike__card_title}>The Hare With Amber</h5>
                            <p className={cl.AlsoLikeLike__card_price}>$78</p>
                            <img className={cl.DeleteIcon} src={require('../style/img/iconDelete.png')} alt="Delete ICON" />
                            <img className={cl.WhishAdd} src={require('../style/img/Star.png')} alt="Wish ICON" />
                        </div>
                    </div>
            </div>
            <div className={cl.Cart}>
                <div className={cl.Items}><h2>Items(2)</h2> $203.0</div>
                <div className={cl.Total}><h2>Total:</h2> <span className={cl.ResultPrice}>$203.0</span></div>
                <button className={cl.MakeOrder}>Make an order</button>
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

export default Cart;