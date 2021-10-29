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
import Tab from './components/Tab';
import ToDos from './components/ToDos';

function App() {
    return (
    <div className="App">
      <Container>
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
            <li style={{color: "#0191F8"}}><i class="fa-li fa fa-circle-o"></i>PROJECTS</li>
            <p>EverDo</p>
            <p>Gemsmark</p>
            <p>Rubicon</p>
          </ul>
          <ul class="fa-ul">
            <li style={{color: "#76a562"}}><i class="fa-li fa fa-circle-o"></i>PERSONAL</li>
            <p>Shopping</p>
            <p>Health</p>
            <p>Entertainment</p>
          </ul>
          
          <ul class="fa-ul">
            <li style={{color: "#dd5d5d"}}><i class="fa-li fa fa-circle-o"></i>LEARNING</li>
            <p>Electron</p>
            <p>Flexbox</p>
          </ul>
          

          </div>
          <a href="#add">
            <div className="add-tag">
              <h1><i class="fa fa-plus"></i></h1>
            </div>
          </a>
          
        </Tags>
        <div className="main-content">
        <Appbar>
          <p><a href="#everdo" style={{color: "#0191F8", fontWeight:"bold", textDecoration:"none"}}>EverDo-</a>MVP</p>
          <h1 style={{fontSize: "35px"}}>Design</h1>
        <div>
          
          <Tabs>
            <Tab label="Todos" count={12} >
              <ToDos/>
            </Tab>
            <Tab label="Notes" count={11} >
              Tab 2 xontent
            </Tab>

          {/* <div label="Todos" count="10">
              </div>
              <div label="Notes" count="12">
              </div>
              <div label="Links" count="7">
              </div>
              <div label="Files" count=" ">
              </div> */}
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
        <Planning>Planning</Planning>
        <Design>Design</Design>
        <Footer>Footer</Footer>
        </div>
      </Container>
    </div>
  );
}

export default App;
