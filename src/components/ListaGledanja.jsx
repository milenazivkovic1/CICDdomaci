import Film from "./Film";

function ListaGledanja({filmovi,kriterijum}) {
    return (
        <div className="listaGledanja">
    <div className="row">
        {kriterijum==""
        ?
        filmovi.map((film)=> <div className="col-sm-3"><Film  key={film.id} film={film}></Film><br /></div>)
        :
        <>
        {filmovi
        .filter((film)=>film.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((film)=> <div className="col-sm-3"><Film  key={film.id} film={film}></Film><br /></div>)}
        </>
        }

      </div>
      </div>
    );
  }

  export default ListaGledanja;