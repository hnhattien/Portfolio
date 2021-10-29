import React from 'react';
import logo from './logo.svg';
import './sass/main.css';
import IntroductionText from "./components/IntroductionText";
import Header from './components/Header';
import Portfolio from './components/Portfolio'
import SkillTags from './components/SkillTags';
interface Props{

}

class App extends React.Component<Props> {
  constructor(props : Props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        <Header></Header>
        <IntroductionText></IntroductionText>
        <SkillTags></SkillTags>
        <Portfolio></Portfolio>
      </div>
    );
  }
}

export default App;
