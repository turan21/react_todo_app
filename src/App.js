import './App.css';
import {Container} from './components/styles/Container.styled'
import {Appbar} from './components/Appbar.styled'
import {Planning} from './components/Planning.styled'
import {Tabbar} from './components/Tabbar.styled'
import {Tags} from './components/Tags.styled'
import {Design} from './components/Design.styled'
import {Footer} from './components/Footer.styled'


function App() {
  return (
    <div className="App">
      <Container>
        <Appbar>Title</Appbar>
        <Planning>Plan</Planning>
        <Tabbar>
          <h5>Tabs1</h5>
          <h5>Tabs2</h5>
          <h5>Tabs3</h5>
        </Tabbar>
        <Tags>Tags</Tags>
        <Design>Design</Design>
        <Footer>Footer</Footer>
      </Container>
    </div>
  );
}

export default App;
