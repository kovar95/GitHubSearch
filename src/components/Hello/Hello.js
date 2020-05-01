import React, {Component} from 'react';
import './Hello.scss';
import hello from '../../images/hello.gif';
import {Motion, spring} from 'react-motion';

class Hello extends Component{

    state = {
        showHello : true,
        display : true,
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({
                showHello : false,
            }, () => setTimeout( () => {
                this.setState({
                    display: false,
                })
            }, 500))
        }, 2000)
    }

    render() {
        const {showHello, display} = this.state;
        return (      
            display &&  
            <Motion
                defaultStyle={{opacity: 1}}
                style={{
                    opacity: spring(showHello ? 1 : 0, {stiffness: 120, damping: 17}), 
                }}
            >
                { style => (
                    <div 
                        className="hello" 
                        style={{
                            opacity : style.opacity
                        }}
                    >
                        <h2>Welcome to GitHub Search page!</h2>
                        <img src={hello} alt="hello"/>
                    </div>
                )}       
            </Motion>
        )
    }

}


export {Hello}