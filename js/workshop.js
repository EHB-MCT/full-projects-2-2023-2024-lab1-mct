
import Workshops from "./Workshops.js";
let workshopList = [];
function filterWorkshops(lab) {
    const cards = document.querySelectorAll(".workshop-card");
    cards.forEach((card) => {
        if (lab == "all") {
            card.style.display = "block";
        } else {
            card.style.display =
                card.getAttribute("data-lab") == lab ? "block" : "none";
        }
    });
}

filterWorkshops("all");


function init() {
    fetch('https://media-l.pockethost.io/api/collections/Workshop/records')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.items);
        data.items.forEach(function(workshopData) {
            const workshopInstance = new Workshops(
                workshopData.image,
                workshopData.title,
                workshopData.content,
                workshopData.collectionId,
                workshopData.id,
                workshopData.lab
            );
            workshopList.push(workshopInstance);
        });
        console.log(workshopList);
        render();
    });
}

function render() {
    const workshopFiltered = document.querySelector(".workshops");
    workshopFiltered.innerHTML = "";
    workshopList.forEach(function(workshop) {
        workshopFiltered.insertAdjacentHTML("beforeend", workshop.htmlString);
    });
}

init();
