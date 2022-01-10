import domainChoiceButton from "./domainChoiceButton.js"
import linkBox from "./linkBox.js"

export default class linkShortener {
    $lsMainContainer
    
    $lSHeader
    
    $lsContainer

    $lscHeader
    
    $lscInputContainer
    $lscicText
    $lscicInput
    $lscicButton

    $lscDomainContainer
    $lscdText

    $lscdChoiceContainer

    $lscdShrtco
    $lscd9qr
    $lscdshiny

    $lscText
    _choice
    _link

    constructor(params) {
        this.$lsMainContainer = document.createElement("div");
        this.$lsMainContainer.setAttribute("class"," fixed");
        this.$lsMainContainer.style.width = "25%";
        this.$lsMainContainer.style.top = "40%";
        this.$lsMainContainer.style.left = "50%";
        this.$lsMainContainer.style.transform = "translate(-50%,-50%)"

        this.$lSHeader = document.createElement("div");
        this.$lSHeader.textContent = "Shorten your link here!";
        this.$lSHeader.setAttribute("class","text-3xl font-bold p-4 text-center uppercase");

        this.$lsContainer = document.createElement("div");
        this.$lsContainer.setAttribute("class","bg-white p-8 flex flex-col w-full h-full");
        this.$lsContainer.style.borderRadius = "16px";

        this.$lscHeader = document.createElement("div");
        this.$lscHeader.textContent = "Link shortener"
        this.$lscHeader.setAttribute("class","text-3xl font-bold mb-4");

        this.$lscInputContainer = document.createElement("div");
        this.$lscInputContainer.setAttribute("class","flex mb-4");
        
        this.$lscicText = document.createElement("div");
        this.$lscicText.textContent = "Enter a link:";
        this.$lscicText.setAttribute("class","my-auto mr-2")

        this.$lscicInput = document.createElement("input");
        this.$lscicInput.setAttribute("class","px-2 bg-gray-200 outline-none");
        this.$lscicInput.placeholder = "example.com";

        this.$lscicButton = document.createElement("button");
        this.$lscicButton.textContent = "→";
        this.$lscicButton.setAttribute("class","bg-indigo-400 py-2 px-4 text-xl");

        

        this.$lscicButton.addEventListener("click", async () => {
            await this.fetchApi();
            const runBox = setTimeout(this.runBox,2000);
        });
        
        this.$lscDomainContainer = document.createElement("div");
        this.$lscDomainContainer.setAttribute("class","flex mb-4");
        
        this.$lscdText = document.createElement("div")
        this.$lscdText.setAttribute("class","mr-2 my-auto")
        this.$lscdText.textContent = "Short domain:";

        this.$lscdChoiceContainer = document.createElement("div");
        this.$lscdChoiceContainer.setAttribute("class","flex");

        this.$lscdShrtco = new domainChoiceButton("shrtco.de");

        this.$lscd9qr = new domainChoiceButton("9qr.de");
        
        this.$lscdshiny = new domainChoiceButton("shiny.link");


        this.$lscText = document.createElement("div");
        this.$lscText.textContent = "With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link.";
        this.$lscText.setAttribute("class","whitespace-normal max-w-full text-sm");

    }

    runBox = () => {
        const newlb = new linkBox(this._link);
        newlb.render(this.$lsMainContainer);
    }

    

    render(container) {
        this.$lsMainContainer.appendChild(this.$lSHeader);

        this.$lsContainer.appendChild(this.$lscHeader);
        
        this.$lscInputContainer.appendChild(this.$lscicText);
        this.$lscInputContainer.appendChild(this.$lscicInput);
        this.$lscInputContainer.appendChild(this.$lscicButton);

        this.$lscdShrtco.render(this.$lscdChoiceContainer);
        this.$lscd9qr.render(this.$lscdChoiceContainer);
        this.$lscdshiny.render(this.$lscdChoiceContainer);

        this.$lscDomainContainer.appendChild(this.$lscdText);
        this.$lscDomainContainer.appendChild(this.$lscdChoiceContainer);
        
        this.$lsContainer.appendChild(this.$lscInputContainer);
        this.$lsContainer.appendChild(this.$lscDomainContainer);
        this.$lsContainer.appendChild(this.$lscText);
        this.$lsMainContainer.appendChild(this.$lsContainer);

        container.appendChild(this.$lsMainContainer);
    }

    fetchApi = () => {
        console.log(this.$lscicInput.value);
        console.log(sessionStorage.getItem("choice"));
        fetch('https://api.shrtco.de/v2/shorten?url='+this.$lscicInput.value)
        .then(response => response.json())
        .then(data => {
            if(sessionStorage.getItem("choice") === "shrtco.de") {
                (this._link = data.result.short_link)
            }
            else if(sessionStorage.getItem("choice") === "9qr.de") {
                (this._link =data.result.short_link2)
            }
            else{
                (this._link =data.result.short_link3)
            }
            console.log(this._link);
            return this._link;
        });
    }
}

const linkShortenerWeb = new linkShortener();
linkShortenerWeb.render(document.getElementById("app"));