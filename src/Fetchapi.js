import { useEffect, useState } from "react"
//import Recipe from "./Recipe";

const Fetchapi = () => {
useEffect(() => { Apifetch();},[]);

const[data,setdata]=useState([]);
const[text,settext]= useState("");
const[no,setno]=useState([]);
const[k,setk]=useState("main");
const[p,setp]=useState("block")


const Apifetch =async () =>{
  const dat=await fetch("https://cooking-recipe2.p.rapidapi.com/getbycat/Indian%20Desserts", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "cooking-recipe2.p.rapidapi.com",
		"x-rapidapi-key": "f71227aa3cmsh62e04c8cd530a3ep1fd711jsn0bf5f6d39b33"
	}
})
    const res =await dat.json();
    console.log(res);
    setdata(res)
   
}

const Dothisfunc = (e) => {
settext(e.target.value);
}

const Dothis = (e) => {
Hefunc();
}

const Hefunc = () => {
    console.log(data);
    data.filter(Filterthis);
}

const Filterthis = (p,ino) => {
if(p.title==text){
    console.log(p.title);
    console.log(ino);
  setno(data[ino]);
    console.log(data[ino]);
  settext("");
    setk("mainn");
    setp("j");
}
}

    return(
        <div>
        <div>
        <div className="App">
         <h1 className="side">Meal finder app</h1>
        </div>
        <div className="input">
        <input type={"text"} placeholder={"search any recipe here"}  onChange={Dothisfunc} value={text}></input>
        <button onClick={Dothis}>search</button>
      
        </div>
        </div>
        <div >

<div className={k}>
{data.map((e) => 
    (
        <div className="box">
<h1>{e.title}</h1>
<h2>{e.category}</h2>
<img src={e.img} alt="dat loading"/>
<a href={e.url}>{e.url}</a>

</div>
    )
)}
</div>


<div className={p}>
{ <div className="box">
<h1>{no.title}</h1>
<h2>{no.category}</h2>
<img src={no.img} alt="dat loading"/>
<a href={no.url}>{no.url}</a>

</div>}
</div>

</div>
</div>
    )}


export default Fetchapi;
