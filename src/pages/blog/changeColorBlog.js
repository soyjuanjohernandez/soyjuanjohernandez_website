import images from "../../assets/images/images";
const changeColor = () => {
  const htmlElement = document.documentElement;
  let elementAtrib = htmlElement.getAttribute("data-theme");
  if (elementAtrib === "light") {
    htmlElement.setAttribute("data-theme", "dark");
    document.querySelector(".navbar-blog__logo-img").src = images.nav_logo_negative;
    document.querySelector(".navbar-blog-item__image--blog").src = images.blog_two;
    document.querySelector(".button-theme__icon").src = images.light;
    document.querySelector(".contact__logo").src = images.logo_footer_mono;
    document.querySelector(".contact__twitter").src = images.twitter_white;
    document.querySelector(".contact__instagram").src = images.instagram_white;
    document.querySelector(".contact__github").src = images.github_white;
    document.querySelector(".contact__linkedin").src = images.linkedin_white;
    document.querySelector(".navbar-blog__collapsed-button img").src = images.menu_white;
  } else {
    htmlElement.setAttribute("data-theme", "light");
    document.querySelector(".navbar-blog__logo-img").src = images.nav_logo_color;
    document.querySelector(".navbar-blog-item__image--blog").src = images.blog_two_dark;
    document.querySelector(".button-theme__icon").src = images.dark;
    document.querySelector(".contact__logo").src = images.logo_footer;
    document.querySelector(".contact__twitter").src = images.twitter;
    document.querySelector(".contact__instagram").src = images.instagram;
    document.querySelector(".contact__github").src = images.github;
    document.querySelector(".contact__linkedin").src = images.linkedin;
    document.querySelector(".navbar-blog__collapsed-button img").src = images.menu;
  }
};

export default changeColor;
