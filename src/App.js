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
import CheckBoxTaskCard from './components/widgets/CheckboxTaskCard'
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
          <div className="appbar-title">
            <p><a href="#everdo" style={{color: "#0191F8", fontWeight:"bold", textDecoration:"none"}}>EverDo-</a>MVP</p>
            <h1 style={{fontSize: "35px"}}>Design</h1>
          </div>
          
        <div>
          
          <Tabs>
            <Tab label="Todos" count={14} >
              <CheckBoxTaskCard label="Project page" tags={[]}></CheckBoxTaskCard>
              <CheckBoxTaskCard label="Today page" tags={[]}></CheckBoxTaskCard>
            </Tab>
            <Tab label="Notes" count={7} >
              Tab 2 content
            </Tab>
            <Tab label="Links" count={12} >
              Tab 3 content
            </Tab>
            <Tab label="Files" count={1} >
              Tab 4 content
            </Tab>
          </Tabs>
        </div>
        <div>
        </div>
        

        </Appbar>


        <Planning>
          <div className="content-title">
            <h3>Product Planning</h3>
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          </div>
        <CheckBoxTaskCard label="Decide how to organize Today page" tags={['2h','work']}></CheckBoxTaskCard>
        <CheckBoxTaskCard label="Create wireframes for the Today page" tags={[]}></CheckBoxTaskCard>
        <CheckBoxTaskCard label="ecide whether to group items by type" tags={['2h']}></CheckBoxTaskCard>
        </Planning>
        <Design><div className="content-title">
            <h3>Design</h3>
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          </div>
          <div className="designs">
              <ToDos/>
          </div>
          </Design>


        <Footer>
          <div>
            <i style={{color:"green",backgroundColor:"lightgreen"}} class="fa fa-check" aria-hidden="true"></i>
            <i style={{color:"red",backgroundColor:"lightpink"}} class="fa fa-times" aria-hidden="true"></i>
            <i style={{color:"#9900CC",backgroundColor:"#CC99FF"}} class="fa fa-calendar-o" aria-hidden="true"></i>
            <i style={{color:"darkcyan",backgroundColor:"cyan"}} class="fa fa-tag" aria-hidden="true"></i>
            <i style={{color:"blue",backgroundColor:"lightblue"}} class="fa fa-search" aria-hidden="true"></i>
            <i style={{color:"orangered",backgroundColor:"darksalmon"}} class="fa fa-plus-square-o" aria-hidden="true"></i>
          </div>
          <i style={{color:"blue",backgroundColor:"lightblue"}} class="fa fa-plus" aria-hidden="true"></i>

        </Footer>
        </div>
      </Container>
    </div>
  );
}

export default App;
