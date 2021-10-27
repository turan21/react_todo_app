import React, { Component } from 'react'
import './App.css';
import {Container} from './components/styles/Container.styled'
import {Appbar} from './components/Appbar.styled'
import {Planning} from './components/Planning.styled'
import {Tabbar} from './components/Tabbar.styled'
import {Tags} from './components/Tags.styled'
import {Design} from './components/Design.styled'
import {Footer} from './components/Footer.styled'
import 'font-awesome/css/font-awesome.min.css';
import Tabs from "./components/Tabs";
import  CheckBox  from './components/Checkbox'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkboxes: [
        {id: 1, value: "banana", isChecked: false},
        {id: 2, value: "apple", isChecked: false},
        {id: 3, value: "mango", isChecked: false},
        {id: 4, value: "grap", isChecked: false}
      ]
    }
  }
  
  handleAllChecked = (event) => {
    let fruites = this.state.checkboxes
    fruites.forEach(fruite => fruite.isChecked = event.target.checked) 
    this.setState({fruites: fruites})
  }

  handleCheckChieldElement = (event) => {
    let fruites = this.state.checkboxes
    fruites.forEach(fruite => {
       if (fruite.value === event.target.value)
          fruite.isChecked =  event.target.checked
    })
    this.setState({fruites: fruites})
  }
  render(){
    return (
    <div className="App">
      <Container>
        <Appbar>
          <p><a style={{color: "#0191F8", fontWeight:"bold"}}>EverDo-</a>MVP</p>
          <h1 style={{fontSize: "35px"}}>Design</h1>
        <div>
          
          <Tabs>
              <div label="Todos">
              </div>
              <div label="Notes">
              </div>
              <div label="Links">
              </div>
              <div label="Files">
              </div>
          </Tabs>
        </div>
        <div>
        <ul>
        {/* {
          this.state.checkboxes.map((checkbox, index) => {
            return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...checkbox} />)
          })
        } */}
        </ul>
        </div>
        </Appbar>
        <Tabbar>
          <div>
              <h2><i className="fa fa-slack"></i></h2> 
              <h2><i className="fa fa-inbox"></i></h2>
              <h2><i className="fa fa-star"></i></h2>
              <h2><i className="fa fa-calendar"></i></h2>
              <h2><i className="fa fa-check"></i></h2>
              <h2><i className="fa fa-trash"></i></h2>
          </div>
          <div>
            <img className="avatar-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"></img>
            <h2><i className="fa fa-ellipsis-h"></i></h2>
          </div>
        </Tabbar>
        <Tags>
          <div>
          <ul class="fa-ul">
            <li style={{color: "#0191F8"}}><i class="fa-li fa fa-circle"></i>PROJECTS</li>
            <p>EverDo</p>
            <p>Gemsmark</p>
            <p>Rubicon</p>
          </ul>
          <ul class="fa-ul">
            <li style={{color: "#76a562"}}><i class="fa-li fa fa-circle"></i>PERSONAL</li>
            <p>Shopping</p>
            <p>Health</p>
            <p>Entertainment</p>
          </ul>
          <ul class="fa-ul">
            <li style={{color: "#dd5d5d"}}><i class="fa-li fa fa-circle"></i>LEARNING</li>
            <p>Electron</p>
            <p>Flexbox</p>
          </ul>
          

          </div>
          <a href="#">
            <div className="add-tag">
              <h1><i class="fa fa-plus"></i></h1>
            </div>
          </a>
          
        </Tags>
        <Planning>Planning</Planning>
        <Design>Design</Design>
        <Footer>Footer</Footer>
      </Container>
    </div>
  );
}
}
export default App;
