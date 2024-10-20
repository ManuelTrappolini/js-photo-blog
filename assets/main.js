//Milestone 1
//Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
//Milestone 2
//Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
//https://jsonplaceholder.typicode.com/photos?_limit=6
//Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
//Milestone 3
//Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
//Bonus
//rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata

console.log('it works');
const rowEL = document.querySelector('.wrapper')
const overlayEl = document.querySelector('.overlay')


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        generatePictures(response);
    }).catch(error => console.error(error));







function generatePictures(response) {
    const data = response.data
    let array = []
    data.forEach(element => {
        const { url, title } = element
        console.log(url, title);
        const markup = `
            <div class="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-relative px-3 py-3 mx-2 mt-4" style="width:18rem;">  
                    <img class="pin" src="./assets/img/pin.svg" alt=""> 
                    <img class="picture" src="${url}" class="" alt="...">
                    <div class="card-body">
                    <p class="card-text">${title}</p>
                    </div>
            </div>
        
        `
        rowEL.innerHTML += markup
        array.push(url)
        console.log(array);
        const cardEl = document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function (e) {
                const imgCard = card.querySelector('.picture').src
                const markup1 = `
                <button class="closeOverlay"><i class="fa-solid fa-xmark"></i></button>
                <img class="overlayImage" src="${imgCard}" alt="">
                `
                overlayEl.innerHTML = markup1
                overlayEl.style.display = "block";
                closeOverlayByButton()
                closeOverlay()
            })
        })
    }
    );
}


function closeOverlayByButton() {
    const closeOverlayEl = document.querySelector('.closeOverlay')
    closeOverlayEl.addEventListener('click', function (e) {
        document.querySelector('.overlay').style.display = "none";
    });
}

function closeOverlay() {
    const overlayEl = document.querySelector('.overlay')
    overlayEl.addEventListener('click', function (e) {
        document.querySelector('.overlay').style.display = "none";
    });
}