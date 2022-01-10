import socialMedialBox from "./socialMediaBox.js";

export default class linkBox {
    $lBMainContainer;

    $lbContainer;

    $lbcText;

    $lbcLink;

    $lbcSocialMediaContainer;
    
    $lbcfb;
    $lbctw;
    $lbcemail;
    $lbcwa;
    $lbctg;

    constructor(linkValue) {
        this.$lbContainer = document.createElement("div");
        this.$lbContainer.setAttribute("class","flex flex-col p-8 bg-white mt-8")
        this.$lbContainer.style.borderRadius = "16px";


        this.$lbcText = document.createElement("div");
        this.$lbcText.textContent = "Link generated!";
        this.$lbcText.setAttribute("class","text-2xl text-center")

        this.$lbcLink = document.createElement("a");
        this.$lbcLink.setAttribute("class","text-2xl text-green-400 underline text-center mb-2")
        this.$lbcLink.textContent = linkValue;
        this.$lbcLink.href = "https://"+linkValue

        this.$lbcSocialMediaContainer = document.createElement("div");
        this.$lbcSocialMediaContainer.setAttribute("class","flex justify-around");

        this.$lbcfb = new socialMedialBox("./img/fb.png");
        this.$lbctw = new socialMedialBox("./img/twitter.png");
        this.$lbcemail = new socialMedialBox("./img/email.png");
        this.$lbcwa = new socialMedialBox("./img/whatsapp.png");
        this.$lbctg = new socialMedialBox("./img/telegram.png");
    }

    render(container) {
        this.$lbContainer.appendChild(this.$lbcText);
        this.$lbContainer.appendChild(this.$lbcLink);

        this.$lbcfb.render(this.$lbcSocialMediaContainer);
        this.$lbctw.render(this.$lbcSocialMediaContainer);
        this.$lbcemail.render(this.$lbcSocialMediaContainer);
        this.$lbcwa.render(this.$lbcSocialMediaContainer);
        this.$lbctg.render(this.$lbcSocialMediaContainer);

        this.$lbContainer.appendChild(this.$lbcSocialMediaContainer);
        container.appendChild(this.$lbContainer);
    }
}