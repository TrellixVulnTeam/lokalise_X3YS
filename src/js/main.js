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

import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';



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

    let offset = 0
    const sliderLine = document.querySelector(".info__slider-line")

    const demoId = document.querySelector('.info__language')

    demoId.textContent = "php"

    document.querySelector(".info__next").addEventListener("click", () => {
        offset += 496
        if (offset > 1984) {
            offset = 0
        }
        sliderLine.style.left = -offset + "px"

        switch (offset) {
            case 0:
                demoId.textContent = "php"
                break
            case 496:
                demoId.textContent = "node.js"
                break
            case 992:
                demoId.textContent = "go"
                break
            case 1488:
                demoId.textContent = "ruby"
                break
            case 1984:
                demoId.textContent = "curl"
                break
        }
    })
    document.querySelector(".info__prev").addEventListener("click", () => {
        offset -= 496
        if (offset < 0) {
            offset = 1984
        }
        sliderLine.style.left = -offset + "px"

        switch (offset) {
            case 0:
                demoId.textContent = "php"
                break
            case 496:
                demoId.textContent = "node.js"
                break
            case 992:
                demoId.textContent = "go"
                break
            case 1488:
                demoId.textContent = "ruby"
                break
            case 1984:
                demoId.textContent = "curl"
                break
        }
    })


$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__content').toggleClass('active');

    });
});
