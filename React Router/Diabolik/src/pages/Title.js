import { Link } from 'react-router-dom';
import Intro from './intro';

export default function Title() {
    return(
        <>
        <header>
            <Link to='/'>
                <h1>Diabolik World</h1>
            </Link>
        </header>
        <main>
            <div className='main-img'>
                <Link to='/diabolik'>
                <img src='https://alchetron.com/cdn/diabolik-a59121df-4d86-43df-828e-9f3bd5d09ad-resize-750.jpeg' alt='Diabolik'/>
                </Link>
                <Link to='/evakent'>
                <img src='https://www.liberedivivere.com/wp-content/uploads/2020/07/eva_kant3.jpg' alt='Eva Kent'/>
                </Link>
                <Link to='/inspectorginko'>
                <img src='https://sbamcomics.it/wp-content/uploads/2017/08/diabolik-8-2017-retro.jpg' alt='Inspector Ginko'/>
                </Link>
            </div>
            
            
        </main>
        </>
    )
}