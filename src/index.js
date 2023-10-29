/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const url = "https://platzi-avo.vercel.app/api/avo";

async function fetchData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data
}

async function appendData(){
    const avocados = await fetchData(url);
    let fragment = document.createDocumentFragment();
    avocados.data.forEach(element => {
        let image = document.createElement("img")
        let title = document.createElement("h2")
        let price = document.createElement("span")
        const container = document.createElement("div")
        container.append(image, title, price);
        fragment.appendChild(container);
    });
    document.body.append(fragment);
}

appendData()