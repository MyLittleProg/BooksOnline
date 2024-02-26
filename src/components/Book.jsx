import { Link } from 'react-router-dom';
import cl from '../style/Main.module.css'
function Book({title,price,img,SpcOffers}){
    return ( 
        <div>
            <Link to="/id_page">
            <div className={cl.CardBook}>
            {SpcOffers?<div className={cl.Offer}>30%<br/>Off</div>:null}   
                <img src={img} alt="book"/>
            </div>
                <h5 className={cl.CardBook__title}>{title}</h5>
                <p className={cl.CardBook__price}>{price}</p>
            </Link>
        </div>
     );
}

export default Book;