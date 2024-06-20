import Media from "./Media.js"
let mediaList = [];

async function init() {
    const response = await fetch("https://media-l.pockethost.io/api/collections/Medialab_List/records/?perPage=123");
    const data = await response.json();
    data.items.forEach(function (mediaData) {
        const mediaInstance = new Media(mediaData.Amount, mediaData.Image, mediaData.Name, mediaData.Category, mediaData.collectionId, mediaData.id);
        mediaList.push(mediaInstance);
    });
    renderItems();

    document.querySelectorAll('input[name="item"]').forEach(function (radio) {
        radio.addEventListener("change", filterItems);
    });
    const searchInput = document.querySelector('#product');
    searchInput.addEventListener('input', searchItems);
}

function renderItems(filteredItems = mediaList) {
    const items = document.querySelector("#content");
    items.innerHTML = "";
    filteredItems.forEach(function (media) {
        items.insertAdjacentHTML("beforeend", media.htmlString);
    });

    document.querySelectorAll('button[data-name]').forEach(function (button) {
        button.addEventListener('click', function () {
            const materiaalInput = document.querySelector('input[name="Materiaal"]');
            materiaalInput.value = button.getAttribute('data-name');
        });
    });
}

function filterItems() {
    const selectedValue = document.querySelector('input[name="item"]:checked').value;
    if (selectedValue === "ALL") {
        renderItems();
    } else {
        const filteredItems = mediaList.filter(function (media) {
            return media._category.includes(selectedValue);
        });
        renderItems(filteredItems);
    }
}
function searchItems() {
    const query = document.querySelector('#product').value.toLowerCase();
    const filteredItems = mediaList.filter(function (media) {
        return media._name.toLowerCase().includes(query);
    });
    renderItems(filteredItems);
}

init();
