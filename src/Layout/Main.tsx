import React from 'react';
import { FaBicycle, FaGlobeAmericas, FaHeartbeat, FaHome, FaList, FaMoneyBillWave, FaQuestion, FaSearch, FaUserGraduate,  FaShieldAlt } from 'react-icons/fa';


const Main = () => {

  return (    
    <main>


  <div className="container-fluid text-center align-items-center" style={{paddingTop:'40px'}}>
  <header>

    <div className="d-flex justify-content-around">
    
    <div className="col-4">
    <form className="d-flex justify-content-around">
    <div className="input-group">
          <select className="form-select" name="estado" id="estado">
            <option value=""> Estado</option>
            <option value="1"> Estado 1</option>
            <option value="2"> Estado 2</option>
          </select>
  

          <select className="form-select" name="cidade" id="cidade">
            <option value=""> Selecione o estado</option>  
          </select>

        <input id="eixo" type="text" readOnly hidden value="0"></input>
        </div>
    </form>
    </div>


    <div className="col-3">

 
        </div>
    </div>
    <br />
  </header>

  <hr />

  <div id="eixos" className="row g-2 text-center align-items-center">
    <div className="col">
      <button type="button" className="btn btn-primary active col-12 d-flex flex-sm-column" style={{backgroundColor:'LightCoral'}} data-id="1" data-toggle="button" aria-pressed="true" >
      <FaHeartbeat /> Saúde
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12 d-flex flex-sm-column" style={{backgroundColor:'LightSkyBlue'}} data-id="2" data-toggle="button" aria-pressed="false" >
      <FaUserGraduate /> Educação
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12 d-flex flex-sm-column" style={{backgroundColor:'MediumSlateBlue'}} data-i="3" data-toggle="button" aria-pressed="false" >
      <FaHome /> Assistência social
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12 d-flex flex-sm-column" style={{backgroundColor:'orange'}} data-id="4" data-toggle="button" aria-pressed="false" ><FaShieldAlt /> Segurança
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12" style={{backgroundColor:'YellowGreen'}} data-id="5" data-toggle="button" aria-pressed="false" ><FaGlobeAmericas /> Meio ambiente
      <br /><FaBicycle /> Urbanização & Mobilidade
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12 d-flex flex-sm-column" style={{backgroundColor:'DarkKhaki'}} data-id="6" data-toggle="button" aria-pressed="false" ><FaMoneyBillWave /> Economia & Finanças
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12 d-flex flex-sm-column" style={{backgroundColor:'DimGrey'}} data-id="7" data-toggle="button" aria-pressed="false" ><FaQuestion /> Personalizado
      </button>
    </div>
  </div>



      <footer><hr />footer</footer>

    </div>
</main>

  );
};

export default Main;