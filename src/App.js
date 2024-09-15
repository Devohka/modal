import React, { Component } from 'react';
import './App.css';
import Modal from './Components/Modal/Modal';
import styled from 'styled-components';

const OpenButton = styled.button`
margin-top: 25px;
    margin-left: 46%;
    /* margin-right: 50%; */
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 25px;
    color: white;
    font-size: 15px;

    background: #6F58C9;
`;



class App extends Component {
  // constructor(){
  state = {
    show: localStorage.getItem("show"),

  }
  // };

  componentDidMount() {
    
    this.save = setInterval(() => {
      if (this.state.show === true) {
        window.addEventListener("keydown", this.noShow);
        localStorage.setItem("show", JSON.stringify(this.setState(
          {
            show: true,
          }
        )));
        console.log("save");
      };

    }, 1000);

  };

  componentWillUnmount() {
    this.svae = setInterval(() => {
     
      if (this.state.show === false) {
        window.removeEventListener("keydown", this.noShow);
        localStorage.removeItem("show");
        console.log("delete");
      };

    }, 1000);

  }

  componentDidUpdate() {
    console.log("delete save");
    clearInterval(this.save);
  };


  Show = () => {
    this.setState(
      {
        show: !this.state.show,
      }, () => {
        console.log("true");
      }
    );
  };

  noShow = (e) => {
    // e.preventDefault();
    if(e.code === "Escape") {
     this.Show();
    };
  };

  render() {
    return (
      <>
        
        {
          this.state.show ?
            console.log(2) :
            <OpenButton type='button' onClick={this.Show}>Open</OpenButton>

        }
       
        {
          this.state.show ?
            <Modal close={this.Show} /> :
            console.log(1)

        }

      </>
    );
  };
};
export default App;
