import "../scss/main.scss"
import "../scss/header-styles.scss"
import "../scss/intro-styles.scss"
import "../scss/tool-styles.scss"
import "../scss/info-blocks-styles.scss"
import "../scss/lokalise-styles.scss"
import "../scss/fonts.scss"
import "../scss/promises-styles.scss"
import "../scss/management-styles.scss"
import "../scss/integrate-styles.scss"
import "../scss/invite-styles.scss"
import "../scss/studies-stuels.scss"
import "../scss/footer-styles.scss"
import "../scss/mixins.scss"

import "../img/HeaderPictures/logo.svg"

import "../img/IntroPictures/intro-picture.svg"

import "../img/ToolPicture/Daimler.svg"
import "../img/ToolPicture/Revolut.svg"
import "../img/ToolPicture/Specialized.svg"
import "../img/ToolPicture/Tidal.svg"
import "../img/ToolPicture/Virgin.svg"
import "../img/ToolPicture/Yelp.svg"

import "../img/InfoGifs/info_gif_1.gif"
import "../img/InfoGifs/info-gif_2.gif"
import "../img/InfoGifs/info_gif_3.gif"
import "../img/InfoGifs/info_pic.svg"

import "../img/LokaliseStaff/documents.svg"
import "../img/LokaliseStaff/games.svg"
import "../img/LokaliseStaff/ioT.svg"
import "../img/LokaliseStaff/marketing-e-mail.svg"
import "../img/LokaliseStaff/mobile-apps.svg"
import "../img/LokaliseStaff/web-apps.svg"
import "../img/LokaliseStaff/managers.svg"
import "../img/LokaliseStaff/translators.svg"
import "../img/LokaliseStaff/developers.svg"

import "../img/PromisesPicture/promises-pic.png"
import "../img/PromisesPicture/promises-logo.svg"

import "../img/ManagementPictures/manegement-logo-1.svg"
import "../img/ManagementPictures/manegement-logo-2.svg"
import "../img/ManagementPictures/manegement-pic.svg"
import "../img/ManagementPictures/manegement-stars.svg"

import "../img/qqqq.svg"
import "../img/footer-logo.svg"

import "../img/StudiesPictures/studies-logo.svg"
import "../img/StudiesPictures/studies-pic.png"

    let offset = 0;
    const step = 496;
    const sliderLine = document.querySelector(".info__slider-line");

    const demoId = document.querySelector('.info__language');

    const switchLabel = (offset) => {
        switch (offset) {
            case step * 0:
                demoId.textContent = "php";
                break;
            case step * 1:
                demoId.textContent = "node.js";
                break;
            case step * 2:
                demoId.textContent = "go";
                break;
            case step * 3:
                demoId.textContent = "ruby";
                break;
            case step * 4:
                demoId.textContent = "curl";
                break;
        }
    };

    demoId.textContent = "php";

    document.querySelector(".info__next").addEventListener("click", () => {
        offset += step;
        if (offset > step * 4) {
            offset = 0
        }
        sliderLine.style.left = -offset + "px";

        switchLabel(offset)
    });
    document.querySelector(".info__prev").addEventListener("click", () => {
        offset -= step;
        if (offset < 0) {
            offset = step * 4
        }
        sliderLine.style.left = -offset + "px";

        switchLabel(offset)
    });


let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__content');
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuBtn.classList.toggle("active")
})