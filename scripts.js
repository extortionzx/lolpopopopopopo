//main content for script page script is here
const scriptsData = [
    { id: 1, image: 'dahood.jpg', game: 'Da hood', description: '[UPDTED, NO KEY SYSTEM] Zinc Hub' },
    { id: 2, image: 'aresenal.jpg', game: 'Arsenal', description: 'Arsenal Script | Kill All | Aimbot | ESP | THUNDER CLIENT | [Solara Support]' },
    { id: 3, image: 'bloxfruit.jpg', game: 'Blox Fruit', description: '[UPTED, NO KEY SYSTEM] Zinc Hub' },
    { id: 4, image: 'MM2Jpeg.jpg', game: 'Murder Mystery 2', description: 'Lunar Hub' },
    { id: 5, image: 'blaWebp.jpg', game: 'Blade Ball', description: '[BEST] AutoParry' },
    { id: 6, image: 'prisonWebp.jpg', game: 'Prison Life', description: '[FE] Genesis FE' },
    { id: 7, image: 'unameWebp.jpg', game: 'Unnamed Shooters', description: 'Only headshots Script' },
    { id: 8, image: 'doorsWebp.jpg', game: 'Doors', description: '[Solara supported] Doors scripts' },
    { id: 9, image: 'doorsWebp.jpg', game: 'Natural Disaster', description: '[Solara supported] Natural Disaster' },
    // Add more items here
];

const productsContainer = document.getElementById('productsContainer');

scriptsData.forEach(script => {
    const box = document.createElement('div');
    box.classList.add('box');
    
    box.innerHTML = `
        <a href="script.html?id=${script.id}">
            <img src="${script.image}" draggable="false" class="box-image">
            <div class="box-description">
                <p style="opacity: .2; margin: 0;">${script.game}</p>
                <p style="font-size: 15px; font-weight: 600; margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif">${script.description}</p>
            </div>
        </a>
    `;

    productsContainer.appendChild(box);
});

function liveSearch() {
    var input, filter, products, boxes, boxDescription, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    products = document.getElementById('productsContainer');
    boxes = products.getElementsByClassName('box');
    var noItemsMessage = document.getElementById('noItemsMessage');
    var found = false;

    for (i = 0; i < boxes.length; i++) {
        boxDescription = boxes[i].getElementsByClassName('box-description')[0];
        txtValue = boxDescription.textContent || boxDescription.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            boxes[i].style.display = 'block';
            found = true;
        } else {
            boxes[i].style.display = 'none';
        }
    }

    if (found) {
        noItemsMessage.style.display = 'none';
        products.classList.remove('transparent');
    } else {
        noItemsMessage.style.display = 'block';
        products.classList.add('transparent');
    }
}

//the script above is the main script content for the main script page




// d , D */
/* 
fetch('https://api64.ipify.org?format=json')
.then(response => response.json())
.then(data=> {
  console.log('Your IP Address is:', data.ip);
})
.catch(error => console.error('Error please connect to the Internet:', error)); */