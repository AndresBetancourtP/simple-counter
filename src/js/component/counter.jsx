import { string } from "prop-types";
import React from "react";
import { useState, useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



const SecondsCounter = () => {

	const [units, setUnits] = useState(0);
	const [tens, setTens] = useState(0);
	const [hundreds, setHundreds] = useState(0)
	const [thousands, setThousands] = useState(0)
	const [tThousands, setTthousands] = useState(0)
	const [hThousands, setHthousands] = useState(0)

	let timer;
	useEffect(() => {
		timer = setInterval(
			function () {
				setUnits(units + 1);
				if (units === 9) {
					setUnits(0);
					setTens(tens + 1);
				}
				if (tens === 9) {
					setTens(0);
					setHundreds(hundreds + 1);
				}
				if (hundreds === 9) {
					setHundreds(0);
					setThousands(thousands + 1);
				}
				if (thousands === 9) {
					setThousands(0);
					setTthousands(tThousands + 1);
				}
				if (tThousands === 9) {
					setTthousands(0);
					setHthousands(hThousands + 1);
				}
				if (hThousands === 9) {
					setHthousands(0);
				}
			}, 1000
		)
		return () => clearInterval(timer)
	});


	return (
		<div className=" row bg-dark d-flex p-2 justify-content-between align-items-center">
			<div className=" col p-0 m-3 bg-secondary fs-1" ><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></div>
			<div className=" col p-0 m-3 bg-secondary fs-1">{hThousands}</div>
			<div className=" col p-0 m-3 bg-secondary fs-1">{tThousands}</div>
			<div className=" col p-0 m-3 bg-secondary fs-1">{thousands}</div>
			<div className=" col p-0 m-3 bg-secondary fs-1">{hundreds}</div>
			<div className=" col p-0 m-3 bg-secondary fs-1">{tens}</div>
			<div className=" col p-0 m-3 bg-secondary fs-1">{units}</div>

		</div>
	);
};

export default SecondsCounter;
