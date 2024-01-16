import { Link } from 'react-router-dom';
function NavBar({pretrazi}) {
  return (
    <div>
        <nav className="nav">
            <div className="nav__title"><h1>PocketCinema</h1></div>
                <ul className="nav__list">
                    <li className="nav__item__search"> 

                      <input type="text" id="kriterijum" placeholder="Pretraga..." 
                      name="search" onChange={()=>pretrazi(document.getElementById('kriterijum').value)}/>

                    </li>
                    <li className="nav__item">   <Link to='/'>Početna strana</Link></li>
                    <li className="nav__item"> <Link to='/filmovi'>Filmovi</Link></li>
                    <li className="nav__item"> <Link to='/listaGledanja'>Lista gledanja</Link></li>
                    <li className="nav__item"> <Link to='/onama'>O nama</Link></li>

                </ul>
        </nav>
    </div>
  );
}

export default NavBar;