import React, { Component } from 'react'

interface Introduction{
    text: string,
    fontFamily: string
}

const introText : Introduction = {
    text: "Hi, /I'm Sunwarder. /It's my alias name. /I'm a Web Developer. /Welcome to my Portfolio.",
    fontFamily: "Arial"
}
interface State{
    textList : Array<string>
}
interface Props{

}
export class IntroductionText extends Component<Props, State> {
    constructor(props: Props){
      super(props);

    }
    state : State = {
        textList : this.splitIntroduceText(introText.text)
    }
    public handleHover = (ev: React.MouseEvent<HTMLSpanElement>)=>{
       ev.currentTarget.classList.add("animate");
    }
    public handleUnHover = (ev: React.MouseEvent<HTMLSpanElement>) => {

        let target = ev.currentTarget;

        setTimeout(()=>{
            target.classList.remove("animate");
        },500);


    }
    public splitIntroduceText(text: string) : Array<string> {
        return text.split("");
    }
    render() {
        return (
            <div className="introduction">
                {this.state.textList.map((value: string, index: number,arr:Array<string>) : any => {
                    if(value === "/"){
                        return <br/>
                    }
                    else{
                        console.log(index.toString().match(/^[9]$|^1[0-7]$/));
                        if(index.toString().match(/^[9]$|^1[0-7]$/) !== null){
                            return <span onMouseOver={this.handleHover} onMouseLeave={this.handleUnHover} className="introduction__text introduction__text_name" key={index}>{value}</span>
                        }
                        else if(index.toString().match(/^7[8-9]$|^8[0-6]$/) !== null){
                            return <span onMouseOver={this.handleHover} onMouseLeave={this.handleUnHover} className="introduction__text introduction__text_portfolio" key={index}>{value}</span>
                        }
                        else{
                            return <span onMouseOver={this.handleHover} onMouseOut={this.handleUnHover} className="introduction__text" key={index}>{value}</span>
                        }

                    }
                })}
            </div>
        )
    }
}

export default IntroductionText
