import React, { Component, useState } from "react";
import NavbarBlog from "../../components/navbarBlog/NavbarBlog";
import Contact from "../../components/contact/contact";
import SignInForm from "../../components/signInForm/signin";
import SignUpForm from "../../components/signUpForm/signUp";
import Posts from "../../components/posts/posts";
import PostDetail from "../../components/postDetail/postDetail";
import PostForm from "../../components/postForm/postForm";
import { auth, fs } from "../../js/config/configFirebase";

import "./blog.css";
import changeColor from "./changeColorBlog";

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
    // const [postDetailDataState, setPostDetailDataState] = useState([]);
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
      // console.log("DOTOS DE LA FUCNION", datos[0].postContent)
      this.setState({ postDetailDataState: datos });
    };

    const showPost = async (postId, postDetailData) => {
      let docRef = fs.collection("post").doc(postId);

      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            // console.log("Data toda:", postDetailData.postContent);
            // setState(postDetailData);
            // setState({ postDetailDataState: postDetailData })
            // console.log("TYHIS", this);
            // postDetailDataSend(postDetailData)
            const docsPost = [];
            docsPost.push(postDetailData);
            // this.setState({ postDetailDataState: [docsPost] })
            console.log("Dosc", docsPost);
            daotsPost(docsPost);
          } else {
            // doc.data() will be undefined in this case
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
        />
        {this.state.userState && <PostForm addPost={addPost} />}

        {!this.state.postDetailDataState && <Posts showPost={showPost} />}

        {this.state.postDetailDataState && (
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
        {/* <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquam soluta beatae adipisci eos expedita maxime dolorem nisi? Ad ab harum earum esse fugiat? Eaque, inventore! Distinctio nisi quidem accusamus.</h1> */}
      </main>
    );
  }
}

// export default Blog;
