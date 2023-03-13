import FIlm from "./Film";

  function Filmovi({filmovi}) {
    return (
    <div className="row">
          {filmovi.map((film)=> <div className="col-sm-3"><FIlm  key={film.id} film={film}></FIlm><br /></div>)}
    </div>

        );

  }

  export default Filmovi