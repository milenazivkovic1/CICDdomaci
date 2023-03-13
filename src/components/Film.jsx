function Film({film}) {


    return (
     <div className = 'filmovi' >

        <div className="card"   >
        <img src={film.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-title">{film.naziv} </p>
          <p className="card-text">Godina: {film.godina} <br /> 
          Producent: {film.producent} <br/> Glavne uloge: {film.glavneUloge} <br /> Zanr: {film.zanr} <br /> </p>
          <a href="#" className="btn btn-primary">Dodaj u listu gledanja</a>
        </div>
      </div>

    </div>
    );
  }

  export default Film