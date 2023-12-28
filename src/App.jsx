import { useState } from "react";
import "milligram/dist/milligram.css";
import "./App.css";

function App() {
	let [fromObj, setformObject] = useState({
		fName: "",
		lName: "",
		city: "",
		gender: "",
	});

	const inputOnchange = (property, value) => {
		setformObject((prevObj) => ({
			...prevObj,
			[property]: value,
		}));
	};
	const formSubmit = (e) => {
		e.preventDefault();
		console.log(fromObj);
		alert(JSON.stringify(fromObj));
	};
	return (
		<div>
			<div className="container custom-margin">
				<form onSubmit={formSubmit}>
					<input
						onChange={(e) => {
							inputOnchange("fName", e.target.value);
						}}
						value={fromObj.fName}
						type="text"
						placeholder="First Name"
					/>
					<br />
					<input
						onChange={(e) => {
							inputOnchange("lName", e.target.value);
						}}
						value={fromObj.lName}
						type="text"
						placeholder="Last Name"
					/>
					<br />
					<select
						onChange={(e) => {
							inputOnchange("city", e.target.value);
						}}
						value={fromObj.city}
					>
						<option value="">Choose City</option>
						<option value="Dhaka">Dhaka</option>
						<option value="Rangpur">Rangpur</option>
					</select>
					<br />
					<input
						onChange={() => {
							inputOnchange("gender", "Male");
						}}
						checked={fromObj.gender === "Male"}
						type="radio"
						name="gender"
					/>
					Male
					<input
						onChange={() => {
							inputOnchange("gender", "Female");
						}}
						checked={fromObj.gender === "Female"}
						type="radio"
						name="gender"
					/>
					Female
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default App;
