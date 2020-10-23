import images from "../../assets/images/images";
const changeColor = () => {
    const htmlElement = document.documentElement;
    let elementAtrib = htmlElement.getAttribute("data-theme");
    if(elementAtrib === 'dark'){
      htmlElement.setAttribute('data-theme', 'light');
      document.querySelector('.navbar__logo-img').src= images.nav_logo_color
      document.querySelector('.navbar-item__image.navbar-item__image--about').src= images.about_two_dark
      document.querySelector('.navbar-item__image.navbar-item__image--projects').src= images.projects_two_dark;
      document.querySelector('.navbar-item__image--blog').src = images.blog_two_dark;
      document.querySelector('.navbar-item__image--contact').src = images.contact_two_dark;
      document.querySelector('.button-theme__icon').src = images.dark;
      document.querySelector(".about__title-image").src = images.about_dark;
      document.querySelector(".projects__title img").src = images.projects_dark;
      document.querySelector(".contact__logo").src = images.logo_footer;
      document.querySelector(".contact__twitter").src = images.twitter;
      document.querySelector(".contact__instagram").src = images.instagram;
      document.querySelector(".contact__github").src = images.github;
      document.querySelector(".contact__linkedin").src = images.linkedin;
      document.querySelector(".navbar__collapsed-button img").src = images.menu;
    }else{
      htmlElement.setAttribute('data-theme', 'dark')
      document.querySelector('.navbar__logo-img').src= images.nav_logo_negative
      document.querySelector('.navbar-item__image.navbar-item__image--about').src= images.about_two
      document.querySelector('.navbar-item__image.navbar-item__image--projects').src= images.projects_two;
      document.querySelector('.navbar-item__image--blog').src = images.blog_two;
      document.querySelector('.navbar-item__image--contact').src = images.contact_two;
      document.querySelector('.button-theme__icon').src = images.light;
      document.querySelector(".about__title-image").src = images.about;
      document.querySelector(".projects__title img").src = images.projects;
      document.querySelector(".contact__logo").src = images.logo_footer_mono;
      document.querySelector(".contact__twitter").src = images.twitter_white;
      document.querySelector(".contact__instagram").src = images.instagram_white;
      document.querySelector(".contact__github").src = images.github_white;
      document.querySelector(".contact__linkedin").src = images.linkedin_white;
      document.querySelector(".navbar__collapsed-button img").src = images.menu_white;
    }

  }

  export default changeColor;