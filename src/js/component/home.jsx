import { useState } from "react";
import React (useState,useEffect) from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[counter,setCounter] = useState(0)
	let contador = 0;
	let suma =(a) => {
		contador= a+1;
		console.log("varaible a=" ,a)
		return contador;	
	}
	const sumaEstadoCounter =(a) => {
		setCounter (a+1)
		return counter
	}
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<button onClick={(evento)=>{suma(contador)}}>Suma</button>
			<h1>El valor del contador es {contador}</h1>
		</div>
	);
};

export default Home;
