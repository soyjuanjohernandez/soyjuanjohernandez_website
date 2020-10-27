import React, { Component } from "react";
import NavbarBlog from "../../components/navbarBlog/NavbarBlog";
import Contact from "../../components/contact/contact";
import SignInForm from "../../components/signInForm/signin";
import SignUpForm from "../../components/signUpForm/signUp";

import "./blog.css";
import changeColor from "./changeColorBlog";

export default class Blog extends Component {
  state = {
    modalIsSignUpOpen: false,
    modalIsSignInOpen: false,
  };

 
  handleOpenModal = () => this.setState({ modalIsSignUpOpen: true });

  toggleSignIn = () =>
    this.setState({ modalIsSignInOpen: !this.state.modalIsSignInOpen });

  render() {
    let elementAtrib = document.documentElement.getAttribute("data-theme");
    if (elementAtrib === "light") {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute("data-theme", "light");
    }

    const addUser = ( userDataSignUp) => {
      console.log("DATA EN BLOG" , userDataSignUp)
    }
    const handleCloseModal = () => this.setState({ modalIsSignUpOpen: false });

    return (
      <main className="blog" id="blog">
        <NavbarBlog
          changeColor={changeColor}
          openModalSignUp={this.handleOpenModal}
          openModalSignIn={this.toggleSignIn}
        />

        <Contact />
        <SignUpForm
          onCloseModal={handleCloseModal}
          isOpen={this.state.modalIsSignUpOpen}
          addUser={addUser}
        />

        <SignInForm
          onClose={this.toggleSignIn}
          isOpen={this.state.modalIsSignInOpen}
        />
      </main>
    );
  }
}

// export default Blog;
