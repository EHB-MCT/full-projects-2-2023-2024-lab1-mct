console.log("ehehehehe");
function addEventListener() {
	document.getElementById("particulier").addEventListener("click", renderParticulier);
	document.getElementById("school").addEventListener("click", renderStudent);
	document.getElementById("company").addEventListener("click", renderCompany);
	document.getElementById("ehb-student").addEventListener("click", renderEhb);
}

function renderParticulier() {
	document.querySelector(".formulier").innerHTML = `<form action="https://api.web3forms.com/submit" method="POST" class="formulier">
					<input type="hidden" name="access_key" value="bbbc1290-8ede-4174-b0ef-7b6d8aab7217" />
					<select name="lab">
						<option value="FabLab">FabLab</option>
						<option value="MediaLab">MediaLab</option>
						<option value="RecordLab">RecordLab</option>
					</select>
					<input type="text" name="firstName" placeholder="Naam" />
					<input type="text" name="lastName" placeholder="Achternaam" />
					<input type="email" name="email" placeholder="Email" />
					<input type="date" name="day" placeholder="Datum" />
					<input type="number" name="numberOfPeople" placeholder="Aantal personen" />
					<button type="submit">RESERVEER</button>
				</form>`;
}

function renderStudent() {
	document.querySelector(".formulier").innerHTML = `<form action="https://api.web3forms.com/submit" method="POST" class="formulier">
					<input type="hidden" name="access_key" value="bbbc1290-8ede-4174-b0ef-7b6d8aab7217" />
					<select name="lab">
						<option value="FabLab">FabLab</option>
						<option value="MediaLab">MediaLab</option>
						<option value="RecordLab">RecordLab</option>
					</select>
					<input type="text" name="firstName" placeholder="Naam" />
					<input type="text" name="lastName" placeholder="Achternaam" />
					<input type="email" name="email" placeholder="Email" />
                    <input type="text" name="school" placeholder="Naam School" />
                    <input type="text" name="opleiding" placeholder="Leerjaar + opleiding" />
					<input type="date" name="day" placeholder="Datum" />
					<input type="number" name="numberOfPeople" placeholder="Aantal personen" />
					<button type="submit">RESERVEER</button>
				</form>`;
}

function renderCompany() {
	document.querySelector(".formulier").innerHTML = `<form action="https://api.web3forms.com/submit" method="POST" class="formulier">
    <input type="hidden" name="access_key" value="bbbc1290-8ede-4174-b0ef-7b6d8aab7217" />
    <select name="lab">
        <option value="FabLab">FabLab</option>
        <option value="MediaLab">MediaLab</option>
        <option value="RecordLab">RecordLab</option>
    </select>
    <input type="text" name="firstName" placeholder="Naam" />
    <input type="text" name="lastName" placeholder="Achternaam" />
    <input type="email" name="email" placeholder="Email" />
    <input type="text" name="company" placeholder="Naam Bedrijf" />
    <input type="date" name="day" placeholder="Datum" />
    <input type="number" name="numberOfPeople" placeholder="Aantal personen" />
    <button type="submit">RESERVEER</button>
</form>`;
}
function renderEhb() {
    document.querySelector(".formulier").innerHTML = `<form action="https://api.web3forms.com/submit" method="POST" class="formulier">
    <input type="hidden" name="access_key" value="bbbc1290-8ede-4174-b0ef-7b6d8aab7217" />
    <select name="lab">
        <option value="FabLab">FabLab</option>
        <option value="MediaLab">MediaLab</option>
        <option value="RecordLab">RecordLab</option>
    </select>
    <input type="text" name="firstName" placeholder="Naam" />
    <input type="text" name="lastName" placeholder="Achternaam" />
    <input type="email" name="email" placeholder="Email" />
    <input type="date" name="day" placeholder="Datum" />
    <input type="number&" name="numberOfPeople" placeholder="Aantal personen" />
    <button type="submit">RESERVEER</button>
</form>`;
}
addEventListener();
