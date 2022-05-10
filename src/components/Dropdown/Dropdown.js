import React, {useState} from "react";
import "react-widgets/styles.css";
import { DropdownList } from "react-widgets";


const DropdownCombo = () => { 


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

  const [estado, setEstado] = useState({id:35,uf:'SP'});


return(
<div className="d-flex justify-content-around">
  <div className="col-4">
    <DropdownList
    value={estado}
    data={estados}
    dataKey='id'
    textField='uf'
    onChange={value => setEstado(value)}
    />
  </div>
  <div className="col-8">
    <DropdownList
    value={estado}
    data={estados}
    dataKey='id'
    textField='uf'
    onChange={value => setEstado(value)}
    />
  </div>
</div>

);
};

export default DropdownCombo;

