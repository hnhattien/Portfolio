import React, { Component } from 'react'

interface Props{
    icon?: string
}
interface State{
    isCollapse : boolean
}
export class Button extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
    }
    render() {
        return (
            <div className="button__menu">
                <span role="button" className={`${this.props.icon} button_light`}>
              
                </span> 
            </div>
        )
    }
}

export default Button
