import { useState } from 'react';
import cl from '../style/Accordion.module.css'
function Accordion(props) {
    const [activeSpoiler,setActiveSpoiler] = useState(null)
    const [oneMoreClick,setOneMoreClick] = useState(null)
    function clickSpoiler(str){
        if(oneMoreClick == str){
            setActiveSpoiler(null)
            setOneMoreClick(null)
            return
        }
        setActiveSpoiler(str)
        setOneMoreClick(str)
    }
    return ( 
        <div {...props}>
            <div className={cl.Footer__links}>
                <div className={cl.Footer__Card}>
                    <button className={activeSpoiler == 'Biography & True Stories'?cl.Footer__CardTitle_active + ' ' + 
                    cl.Footer__CardTitle:cl.Footer__CardTitle} 
                    onClick={()=>clickSpoiler('Biography & True Stories')}>Biography & True Stories</button>
                        <ul className={cl.Footer__CardLinks} style={activeSpoiler == 'Biography & True Stories'?
                    {display:'block'}:{display:'none'}}>
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
                    <button className={activeSpoiler == 'Professional & Reference'?cl.Footer__CardTitle_active + ' ' + 
                    cl.Footer__CardTitle:cl.Footer__CardTitle}
                    onClick={()=>clickSpoiler('Professional & Reference')}>Professional & Reference</button>
                        <ul className={cl.Footer__CardLinks}
                        style={activeSpoiler == 'Professional & Reference'?
                        {display:'block'}:{display:'none'}}>
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
                    <button className={activeSpoiler == 'Earth Sciences'?cl.Footer__CardTitle_active + ' ' + 
                    cl.Footer__CardTitle:cl.Footer__CardTitle}
                    onClick={()=>clickSpoiler('Earth Sciences')}>Earth Sciences</button>
                        <ul className={cl.Footer__CardLinks}
                        style={activeSpoiler == 'Earth Sciences'?
                        {display:'block'}:{display:'none'}}>
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
                    <button className={activeSpoiler == 'Mathematics'?cl.Footer__CardTitle_active + ' ' + 
                    cl.Footer__CardTitle:cl.Footer__CardTitle}
                    onClick={()=>clickSpoiler('Mathematics')}>Mathematics</button>
                        <ul className={cl.Footer__CardLinks}
                        style={activeSpoiler == 'Mathematics'?
                        {display:'block'}:{display:'none'}}>
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
        </div>
     );
}

export default Accordion;