
import Header from './Header/header_render'
import Head from './Main/head/head'
import Projects from './Main/projects/projects';
import Team from './Main/team/team';
import Talk from './Main/talk to us/talk';
import Footer from './Footer/footer';

import './App.module.scss';

function App() {
  return (
    <>
    <Header/>
    <Head/>
    <Projects/>
    <Team/>
    <Talk/>
    <Footer/>
    </>
  );
}

export default App;
