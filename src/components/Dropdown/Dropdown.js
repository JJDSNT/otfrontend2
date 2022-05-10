import React, {useState} from "react";
import "react-widgets/scss/styles.scss";
import DropdownList from "react-widgets/DropdownList";



const DropdownCombo = () => { 

  const [estado, setEstado] = useState({id:11,uf:'RD'});

  let estados = [
    {id:11,uf:'RD'},
    {id:12,uf:'AC'},
    {id:13,uf:'AM'},
    {id:14,uf:'RR'},
    {id:15,uf:'PA'},
    {id:16,uf:'AP'},
    {id:17,uf:'TO'},
    {id:21,uf:'MA'},
    {id:22,uf:'PI'},
    {id:23,uf:'CE'},
    {id:24,uf:'RN'},
    {id:25,uf:'PB'},
    {id:26,uf:'PE'},
    {id:27,uf:'AL'},
    {id:28,uf:'SE'},
    {id:29,uf:'BA'},
    {id:31,uf:'MG'},
    {id:32,uf:'ES'},
    {id:33,uf:'RJ'},
    {id:35,uf:'SP'},
    {id:41,uf:'PR'},
    {id:42,uf:'SC'},
    {id:43,uf:'RS'},
    {id:50,uf:'MS'},
    {id:51,uf:'MT'},
    {id:52,uf:'GO'},
    {id:53,uf:'DF'},
    {id:99,uf:'UF'}
  ];

return(

<form className="d-flex justify-content-around">
<div className="input-group">
    <DropdownList
    value={estado}
    data={estados}
    dataKey='id'
    textField='uf'
    onChange={(selectedState) => setEstado(selectedState)}
/>
</div>
</form>
);
};

export default DropdownCombo;

