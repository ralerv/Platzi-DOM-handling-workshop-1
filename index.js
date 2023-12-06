const avoDiv = document.querySelector("#app")

const baseUrl = "https://platzi-avo.vercel.app";
const dataUrl = `${baseUrl}/api/avo`;

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("es-PE",{
        style: "currency",
        currency: "PEN"
    }).format(price);
    
    return newPrice
}
 
async function fetchData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data
}

async function appendData(){
    const avocados = await fetchData(dataUrl);
    let fragment = document.createDocumentFragment();
    avocados.data.forEach(element => {
        let image = document.createElement("img")
        let title = document.createElement("h2")
        let price = document.createElement("span")

        image.src = `${baseUrl}/${element.image}`
        title.textContent = element.name
        price.textContent = formatPrice(element.price)

        const priceNTitle = document.createElement("div")
        priceNTitle.className = "app__card__info"
        priceNTitle.append(title,price)

        const container = document.createElement("div")
        container.className = "app__card"
        container.append(image, priceNTitle);
        
        fragment.appendChild(container);
    });
    avoDiv.append(fragment);
}

appendData()