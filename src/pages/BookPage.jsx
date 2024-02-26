import cl from '../style/BookPage.module.css'
import clCnt from '../style/Container.module.css'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { books } from '../components/books';
function BookPage() {
    return (
        <>
        <Header/> 
<section>
    <div className={clCnt.Container}>
    <div className={cl.ProductPanel}>
        <img src={require('../style/img/BookLogo.png')} alt="Image book"
        className={cl.ImgBook}/>
        <div className={cl.BookInform}>
        <h1 className={cl.TitleBook}>Star Wars Episode I</h1>
        <p className={cl.AboutBook}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident, rerum minima quasi rem accusantium. Doloremque odit quidem nisi porro voluptate nostrum unde magnam? Eius hic fuga earum possimus impedit?
        Vitae suscipit molestiae a quae, magni, repudiandae quis culpa quaerat itaque, esse officiis iusto. Tempore molestiae ad dolores voluptates cumque eos, quae labore? Ex distinctio temporibus dicta consequatur adipisci exercitationem.
        Animi ea inventore ullam culpa laudantium magnam eveniet facilis obcaecati dolores. Natus sed repellendus assumenda suscipit libero ducimus vitae, minima excepturi soluta rem dolorem corporis veniam quam? Vel, repellat est?
        </p>
        <div className={cl.AddToCart}>
            <div className={cl.AddToCartUp}>
            <h2 className={cl.PriceTitle}>Our price : </h2><span className={cl.PriceNum}>$150</span>
            <button className={cl.Button}>Add to cart</button>
            </div>
            <div className={cl.AddToCartDown}>
            <img src={require('../style/img/lockIco.png')} alt="LockIco" 
            className={cl.LockIco}/>
            <span>Safe, Secure Shopping</span><br/>
            <div className={cl.cards}>
                <img src={require('../style/img/mastercard-curved-64px.png')} alt="CARD" 
                className={cl.CardImg}/>
                <img src={require('../style/img/american-express-curved-64px.png')} alt="CARD" 
                className={cl.CardImg}/>
                <img src={require('../style/img/visa-curved-64px.png')} alt="CARD" 
                className={cl.CardImg}/>
                <img src={require('../style/img/paypal-curved-64px.png')} alt="CARD" 
                className={cl.CardImg}/>
            </div>
            </div>
        </div>
    </div>
    </div>
        <div className={cl.Wrapper}>
        <div className={cl.ProductReview}>
            <h3 className={cl.ProductReview__title}>Product review</h3>
            <div className={cl.Comments}>
                <div className={cl.CommentCard}>
                <img src={require('../style/img/UserPhoto.png')} alt="" className={cl.UserPhoto}/>
                <p className={cl.CommentMessage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem sequi laboriosam excepturi consequuntur tempore rerum amet natus illo odio corrupti, quos optio repellat voluptates reprehenderit neque omnis laborum dolor!</p>
                </div>
                <span>User name</span>
            </div>
            <div className={cl.CommentForm}>
                <h3 className={cl.CommentForm__title}>Write a comment</h3>
            
                <span className={cl.MessageTitle}>Your name</span><input type="text" className={cl.FormName}/><br/>
                <span className={cl.MessageTitle}>email</span><input type="text" className={cl.FormEmail}/><br/>
                <span className={cl.MessageTitle}>Message</span><textarea className={cl.FormMessage}/><br/>
                <button className={cl.Button__send}>Send</button>
            
            </div>
        </div>
        <div className={cl.AlsoLike}>
            <h3 className={cl.AlsoLike__title}>You may also like</h3>
            <div className={cl.AlsoLikeLike__card}>
              <img src={books[0].img} alt=""  className={cl.LikeImg}/>
                <div className={cl.AlsoLikeLike__card_about}>
                    <h5 className={cl.AlsoLikeLike__card_title}>The Hare With Amber</h5>
                    <p className={cl.AlsoLikeLike__card_price}>$50</p>
                    <button className={cl.AlsoLikeLike__card_more}>Read more</button>
                </div>
            </div>

            <div className={cl.AlsoLikeLike__card}>
              <img src={books[0].img} alt=""  className={cl.LikeImg}/>
                <div className={cl.AlsoLikeLike__card_about}>
                    <h5 className={cl.AlsoLikeLike__card_title}>The Hare With Amber</h5>
                    <p className={cl.AlsoLikeLike__card_price}>$50</p>
                    <button className={cl.AlsoLikeLike__card_more}>Read more</button>
                </div>
            </div>
            <div className={cl.AlsoLikeLike__card}>
              <img src={books[0].img} alt=""  className={cl.LikeImg}/>
                <div className={cl.AlsoLikeLike__card_about}>
                    <h5 className={cl.AlsoLikeLike__card_title}>The Hare With Amber</h5>
                    <p className={cl.AlsoLikeLike__card_price}>$50</p>
                    <button className={cl.AlsoLikeLike__card_more}>Read more</button>
                </div>
            </div>
            <div className={cl.AlsoLikeLike__card}>
              <img src={books[0].img} alt=""  className={cl.LikeImg}/>
                <div className={cl.AlsoLikeLike__card_about}>
                    <h5 className={cl.AlsoLikeLike__card_title}>The Hare With Amber</h5>
                    <p className={cl.AlsoLikeLike__card_price}>$50</p>
                    <button className={cl.AlsoLikeLike__card_more}>Read more</button>
                </div>
            </div>
            
        </div>
        </div>
    </div>
</section>
<Footer/>
</>
);
}

export default BookPage;