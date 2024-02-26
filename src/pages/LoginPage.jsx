import cl from '../style/Header.module.css'
import clCnt from '../style/Container.module.css'
import '../style/Login.css'
import { Link } from 'react-router-dom';
function LoginPage() {
    return ( 
<div className="Back">
        
    <nav className={cl.Menu}><div className={clCnt.Container}>
        <ul className={cl.Menu__ul}>
        <li style={{cursor:'pointer'}} className={cl.Menu__li}>Sign in</li>
        <li className={cl.Menu__li} style={{border:'1px solid',
        borderRadius:'3px',padding:'0 2px 0 2px',cursor:'pointer'}}>Sign up</li>
        </ul>
        </div>
    </nav>
    <div class="container">
	<section id="content">
		<form action="">
			<h1>Login Form</h1>
			<div>
				<input type="text" placeholder="Username" required="" id="username" />
			</div>
			<div>
				<input type="password" placeholder="Password" required="" id="password" />
			</div>
			<div className='LoginBtns'>
				<Link to="/"><input type="submit" value="Log in" /></Link>
                <Link to="/"><input type="submit" value="Register" /></Link>
			</div>
		</form>
		
	</section>
</div>
</div>
);
}

export default LoginPage;