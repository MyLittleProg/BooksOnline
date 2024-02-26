import cl from '../style/Footer.module.css'
import clcnt from '../style/Container.module.css'
import { useMediaQuery } from 'react-responsive'
import Accordion from './Accordion'
import { useState } from 'react'
function Footer() {
    const isDesktopOrMobile = useMediaQuery({
        query: '(max-width: 740px)'
     })    
    
    return ( 
<footer className={cl.Footer}>
        <div className={cl.Footer__up}>
            <div className={clcnt.Container}>
            <div className={cl.Footer__links}>
                <div className={cl.Footer__Card}>
                    <h1 className={cl.Footer__CardTitle} 
                    >Biography & True Stories</h1>
                        <ul className={cl.Footer__CardLinks}>
                            <li className={cl.Card__li}>General</li>
                            <li className={cl.Card__li}>Daries, Letters & Joumals</li>
                            <li className={cl.Card__li}>Memoirs</li>
                            <li className={cl.Card__li}>True Stories</li>
                            <li className={cl.Card__li}>Generic Exams</li>
                            <li className={cl.Card__li}>GK Titles</li>
                            <li className={cl.Card__li}>Medical Entrance</li>
                            <li className={cl.Card__li}>Other Entrance Exams</li>
                            <li className={cl.Card__li}>PG Entrance Examinations</li>
                            <li className={cl.Card__li}>Self-help Titles</li>
                            <li className={cl.Card__li}>Sociology</li>
                        </ul>
                </div>
                <div className={cl.Footer__Card}>
                    <h1 className={cl.Footer__CardTitle}>Professional & Reference</h1>
                        <ul className={cl.Footer__CardLinks}>
                            <li className={cl.Card__li}>Academic</li>
                            <li className={cl.Card__li}>Business Trade</li>
                            <li className={cl.Card__li}>Engineering and Computer Science</li>
                            <li className={cl.Card__li}>Humanities, Social Sciences and Languages</li>
                            <li className={cl.Card__li}>Introduction to Computers</li>
                            <li className={cl.Card__li}>Trade Business</li>
                            <li className={cl.Card__li}>English Language & Literature</li>
                            <li className={cl.Card__li}>Environment Awareness</li>
                        </ul>
                </div>
                <div className={cl.Footer__Card}>
                    <h1 className={cl.Footer__CardTitle}>Earth Sciences</h1>
                        <ul className={cl.Footer__CardLinks}>
                            <li className={cl.Card__li}>Earth Sciences</li>
                            <li className={cl.Card__li}>Geography</li>
                            <li className={cl.Card__li}>The Environment</li>
                            <li className={cl.Card__li}>Regional & Area Planning</li>
                            <li className={cl.Card__li}>Fantasy</li>
                            <li className={cl.Card__li}>Comics</li>
                            <li className={cl.Card__li}>Humorous</li>
                            <li className={cl.Card__li}>Interactive</li>
                            <li className={cl.Card__li}>Legal</li>
                            <li className={cl.Card__li}>Proto</li>
                            <li className={cl.Card__li}>Men'S Adventure</li>
                        </ul>
                </div>
                <div className={cl.Footer__Card}>
                    <h1 className={cl.Footer__CardTitle}>Mathematics</h1>
                        <ul className={cl.Footer__CardLinks}>
                            <li className={cl.Card__li}>Algebra</li>
                            <li className={cl.Card__li}>Differential Equations</li>
                            <li className={cl.Card__li}>Discrete Mathematics</li>
                            <li className={cl.Card__li}>Analysis</li>
                            <li className={cl.Card__li}>Generic Exams</li>
                            <li className={cl.Card__li}>Numerrical Analysis</li>
                            <li className={cl.Card__li}>Probability</li>
                            <li className={cl.Card__li}>Stochastic And Random Processes</li>
                            <li className={cl.Card__li}>Statistics</li>
                            <li className={cl.Card__li}>Mathematics</li>
                        </ul>
                </div>
            </div>
            <Accordion style={{display:isDesktopOrMobile?'block':'none'}}/>
            </div>
        </div>
    <div className={cl.Footer__footer}>
        <div className={clcnt.Container}>
            <h3 className={cl.Footer__footerTitle}>We accept all major Credit Card/Debit Card/Internet Banking</h3>
                <div className={cl.Footer__footerImg}>
                    <img src={require('../style/img/card1.png')} alt="Error IMG" />
                    <img src={require('../style/img/card2.png')} alt="Error IMG" />
                    <img src={require('../style/img/card3.png')} alt="Error IMG" />
                </div>
        </div>
        <div className={cl.Footer__footerPrivacy}>
        <div className={clcnt.Container}>Powered by Korpatenkov Anton © 2023-2024, Booksonline</div>
        </div>
    </div>
</footer>

);
}

export default Footer;