/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

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
        image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full sm:mx-2 md:mx-0 md:mr-6"

        title.textContent = element.name
        title.className = "text-lg text-left"

        price.textContent = formatPrice(element.price)
        price.className = "text-gray-600 text-left"

        const priceNTitle = document.createElement("div")
        priceNTitle.className = "flex flex-col justify-center items-start"
        priceNTitle.append(title,price)

        const container = document.createElement("div")
        container.className = "flex flex-row items-center justify-start gap-2 bg-white rounded-lg p-6 hover:bg-gray-300"
        container.append(image, priceNTitle);
        
        fragment.appendChild(container);
    });
    avoDiv.append(fragment);
}

appendData()