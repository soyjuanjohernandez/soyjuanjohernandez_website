import images from "../../assets/images/images";
const changeColorLight = () => {
    document.querySelector(".navbar-blog__logo-img").src = images.nav_logo_color;
    document.querySelector(".navbar-blog-item__image--blog").src = images.blog_two_dark;
    document.querySelector(".button-theme__icon").src = images.dark;
    document.querySelector(".contact__logo").src = images.logo_footer;
    document.querySelector(".contact__twitter").src = images.twitter;
    document.querySelector(".contact__instagram").src = images.instagram;
    document.querySelector(".contact__github").src = images.github;
    document.querySelector(".contact__linkedin").src = images.linkedin;
    document.querySelector(".navbar-blog__collapsed-button img").src = images.menu;
};

export default changeColorLight;
