import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ seconds, minutes, hours, days }) => {
	return (
		<div className="counter">
			<div className="clockIcon">
				<i className="fa-solid fa-clock"></i>
			</div>
			<div className="days">{days}</div>
			
			<div className="hour">{hours}</div>
			
			<div className="min">{minutes}</div>
			
			<div className="sec">{seconds}</div>
		</div>
	);
};

export default Home;