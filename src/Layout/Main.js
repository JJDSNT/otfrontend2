import React from 'react';
import { FaBars, FaBicycle, FaGlobeAmericas, FaHeartbeat, FaHome, FaMoneyBillWave, FaQuestion, FaUserGraduate,  FaShieldAlt } from 'react-icons/fa';


const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {

  return (
    <main>
  <div className="container" style={{paddingTop:'100px'}}>
      <form className="row">
        <div className="col">
          <select className="form-select" name="estado" id="estado">
            <option value=""> Estado</option>
            <option value="1"> Estado 1</option>
            <option value="2"> Estado 2</option>
          </select>
        </div>    
        <div className="col">
          <select className="form-select" name="cidade" id="cidade">
            <option value=""> Selecione o estado</option>  
          </select>
        </div>
        <input id="eixo" type="text" readonly hidden value="0"></input>
      </form>
<hr />


  <div id="eixos" className="row g-2 text-center align-items-center">
    <div className="col">
      <button type="button" className="btn btn-primary active col-12 d-flex flex-sm-column" style={{backgroundColor:'LightCoral'}} data-id="1" data-toggle="button" aria-pressed="true" autocomplete="off">
      <FaHeartbeat /> Saúde
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12 d-flex flex-sm-column" style={{backgroundColor:'LightSkyBlue'}} data-id="2" data-toggle="button" aria-pressed="false" autocomplete="off">
      <FaUserGraduate /> Educação
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12 d-flex flex-sm-column" style={{backgroundColor:'MediumSlateBlue'}} data-i="3" data-toggle="button" aria-pressed="false" autocomplete="off">
      <FaHome /> Assistência social
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12 d-flex flex-sm-column" style={{backgroundColor:'orange'}} data-id="4" data-toggle="button" aria-pressed="false" autocomplete="off"><FaShieldAlt /> Segurança
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12" style={{backgroundColor:'YellowGreen'}} data-id="5" data-toggle="button" aria-pressed="false" autocomplete="off"><FaGlobeAmericas /> Meio ambiente
      <br /><FaBicycle /> Urbanização & Mobilidade
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12 d-flex flex-sm-column" style={{backgroundColor:'DarkKhaki'}} data-id="6" data-toggle="button" aria-pressed="false" autocomplete="off"><FaMoneyBillWave /> Economia & Finanças
      </button>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary col-12 d-flex flex-sm-column" style={{backgroundColor:'DimGrey'}} data-id="7" data-toggle="button" aria-pressed="false" autocomplete="off"><FaQuestion /> Personalizado
      </button>
    </div>
  </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />C
      <div classNameName="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>

      alo
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />d
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />e
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />f
    </div>
    </main>
  );
};

export default Main;