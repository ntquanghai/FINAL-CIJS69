export default class domainChoiceButton {
    $dCButton
    _choice
    
    constructor(name) {
        this.$dCButton = document.createElement("button");
        this.$dCButton.setAttribute("class","p-2 bg-gray-100 focus:bg-indigo-400 focus:text-white mr-2")
        this.$dCButton.textContent = name;
        this.$dCButton.style.transition = "all 0.5s ease";

        this._choice = name;

        this.$dCButton.addEventListener("click",function() {
            sessionStorage.removeItem("choice");
            sessionStorage.setItem("choice",name);
        });
    }


    render(container) {
        container.appendChild(this.$dCButton);
    }
}