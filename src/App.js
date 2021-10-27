import './App.css';
import {Container} from './components/styles/Container.styled'
import {Appbar} from './components/Appbar.styled'
import {Planning} from './components/Planning.styled'
import {Tabbar} from './components/Tabbar.styled'
import {Tags} from './components/Tags.styled'
import {Design} from './components/Design.styled'
import {Footer} from './components/Footer.styled'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Appbar>Title</Appbar>
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
          <div className="add-tag">
            <h1><i class="fa fa-plus"></i></h1>
          </div>
          
        </Tags>
        <Planning>Planning</Planning>
        <Design>Design</Design>
        <Footer>Footer</Footer>
      </Container>
    </div>
  );
}

export default App;
