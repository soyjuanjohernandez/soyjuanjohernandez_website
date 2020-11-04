import React, { Component } from "react";
import NavbarBlog from "../../components/navbarBlog/NavbarBlog";
import Contact from "../../components/contact/contact";
import SignInForm from "../../components/signInForm/signin";
import SignUpForm from "../../components/signUpForm/signUp";
import Posts from "../../components/posts/posts";
import PostDetail from "../../components/postDetail/postDetail";
// import PostForm from "../../components/postForm/postForm";
import { auth, fs } from "../../js/config/configFirebase";
import changeColor from "./changeColorBlog";
import "./blog.css";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsSignUpOpen: false,
      modalIsSignInOpen: false,
      userState: false,
      postDetailDataState: "",
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

    // create post
    const addPost = (postData) => {
      console.log("DATA DEL POST EN BLOG", postData);
      fs.collection("post")
        .doc()
        .set(postData)
        .then(() => {
          alert("datos subidos exitosamente!");
        })
        .catch((error) => {
          alert("error escribiendo el documento", error);
        });
    };

    const daotsPost = (datos) => {
      this.setState({ postDetailDataState: datos });
    };

    const showPost = async (postId, postDetailData) => {
      let docRef = fs.collection("post").doc(postId);

      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            const docsPost = [];
            docsPost.push(postDetailData);
            console.log("Dosc", docsPost);
            daotsPost(docsPost);
          } else {
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
      return postDetailData;
    };

    const closeDetail = () => this.setState({ postDetailDataState: "" });

    return (
      <main className="blog" id="blog">
        <NavbarBlog
          changeColor={changeColor}
          openModalSignUp={handleOpenModal}
          openModalSignIn={toggleSignIn}
          logoutUser={logoutUser}
          user={this.state.userState}
        />

        {/* {this.state.userState && <PostForm addPost={addPost} />} */}

        {!this.state.postDetailDataState && this.state.userState && (
          <Posts showPost={showPost} />
        )}

        {this.state.postDetailDataState && this.state.userState && (
          <PostDetail
            handleClose={closeDetail}
            postDetailDataSend={
              this.state.postDetailDataState &&
              this.state.postDetailDataState[0].postContent
            }
          />
        )}

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
