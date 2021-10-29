import React, { Component } from 'react'
import {Link} from 'react-router-dom';
const skills = [
  {text: 'React', href:'#react', image: `${process.env.PUBLIC_URL}/skilltags/react.png`},
  {text: 'NodeJs', href:'#nodejs', image: `${process.env.PUBLIC_URL}/skilltags/nodejs.png`},
  {text: 'Typescript', href:'#typescript', image: `${process.env.PUBLIC_URL}/skilltags/typescript.png`},
  {text: 'SASS', href:'#sass', image: `${process.env.PUBLIC_URL}/skilltags/sass.png`},
  {text: 'PHP', href:'#php', image: `${process.env.PUBLIC_URL}/skilltags/php.png`},
  {text: 'Other libraries', href:'#other', image: `${process.env.PUBLIC_URL}/skilltags/other.png`}
]

interface State{
    isSupportTagCanvas: boolean
}
interface Props{

}
export class SkillTags extends Component<Props, State> {
  constructor(props : Props){
    super(props);
  }
  state : State = {
    isSupportTagCanvas: true
  }
  componentDidMount = () => {
     let scriptTag = document.createElement('script');
     scriptTag.innerHTML = ``;



  }
    render() {
        return (
            <>
               {this.state.isSupportTagCanvas && <div className="tag-skills-wrap">
                     <canvas id="skillTagsCanvas" width="820"
                    height="600"
                    style={{
                        maxWidth: '1000px',
                        width: '100%',
                        zIndex: 99,
                        position: 'relative',
                        margin: '0 auto'
                    }}>

                     </canvas>
                     <ul id="skills">
                       {skills.map((skill, index)=>{
                         return <li key={index}><a href={`${skill.href}`}>{skill.text}<img style={{width: "64px", height: "64px"}} src={skill.image}></img></a></li>
                       })}
                     </ul>
                </div>}

            </>
        )
    }
}

export default SkillTags
