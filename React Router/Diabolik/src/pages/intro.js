import { Link } from 'react-router-dom';


export default function Intro() {
    return (
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
        <p>
        The idea for the character of Diabolik was born from seeing commuters every day. Co-creator Angela Giussani, who lived near Milano Cadorna railway station, thought of making comics in a format designed for travelling and carrying in one's pocket. To better understand the tastes of her potential readers, Angela made a survey of the market, from which she concluded that many commuters read mystery novels. Another version of the story claims that the very idea came from her finding a Fantomas novel abandoned in a train. Thus was born the "Diabolik format" (a small 12 x 17 cm (7 in) book), which proved popular with other publications in the same genre. The pocketbook format contributed, in fact, to the success of the character. 
      </p>
      </>

      
    )
}