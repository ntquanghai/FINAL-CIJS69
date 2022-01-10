export default class socialMedialBox {
    $smContainer

    constructor(link) {
        this.$smContainer = document.createElement("img");
        this.$smContainer.setAttribute("class","w-8 h-8 hover:opacity-50 cursor-pointer mr-2");
        this.$smContainer.src = link;
    }

    render(container) {
        container.appendChild(this.$smContainer);
    }
}