import React, { Component } from "react";
import NavbarBlog from "../../components/navbarBlog/NavbarBlog";
import Contact from "../../components/contact/contact";
import SignInForm from "../../components/signInForm/signin";
import SignUpForm from "../../components/signUpForm/signUp";
import Posts from "../../components/posts/posts";
import PostForm from "../../components/postForm/postForm";
import { auth } from "../../js/config/configFirebase";

import "./blog.css";
import changeColor from "./changeColorBlog";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsSignUpOpen: false,
      modalIsSignInOpen: false,
      userState: false,
    };
  }

  componentDidMount() {
    const validateUserSession = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log("usuario logueado");
          this.setState({ userState: true });
        } else {
          console.log("usuario deslogueado");
          this.setState({ userState: false });
        }
      });
    };
    validateUserSession();
  }

  render() {
    // if theme ligth persist
    let elementAtrib = document.documentElement.getAttribute("data-theme");
    if (elementAtrib === "light") {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute("data-theme", "light");
    }

    // functions to open and close modals
    const handleCloseModal = () => this.setState({ modalIsSignUpOpen: false });
    const handleOpenModal = () => this.setState({ modalIsSignUpOpen: true });

    const toggleSignIn = () =>
      this.setState({ modalIsSignInOpen: !this.state.modalIsSignInOpen });

    // create user or signup
    const addUser = (userDataSignUp) => {
      console.log("DATA AUTH EN BLOG", userDataSignUp);
      auth
        .createUserWithEmailAndPassword(
          userDataSignUp.email,
          userDataSignUp.password
        )
        .then(() => {
          alert("sign up! con");
          handleCloseModal();
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    };

    // login
    const loginUser = (userDataLogin) => {
      console.log("DATA LOGIN EN BLOG", userDataLogin);
      auth
        .signInWithEmailAndPassword(userDataLogin.email, userDataLogin.password)
        .then((userCredential) => {
          alert("login !");
          toggleSignIn();
          // console.log("THISSSS", this);
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    };

    // logout
    const logoutUser = () => {
      auth.signOut().then(() => {
        alert("saliste de la app");
      });
    };



    return (
      <main className="blog" id="blog">
        <NavbarBlog
          changeColor={changeColor}
          openModalSignUp={handleOpenModal}
          openModalSignIn={toggleSignIn}
          logoutUser={logoutUser}
        />
        {this.state.userState && 
          <PostForm 
          // addPost={addPost}
          />
        }
        {/* <Posts /> */}

        <Contact />

        <SignUpForm
          onCloseModal={handleCloseModal}
          isOpen={this.state.modalIsSignUpOpen}
          addUser={addUser}
        />

        <SignInForm
          onCloseModal={toggleSignIn}
          isOpen={this.state.modalIsSignInOpen}
          loginUser={loginUser}
        />
      </main>
    );
  }
}

// export default Blog;
