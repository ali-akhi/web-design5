import React from 'react'

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleClick}>
              {this.props.currentState ? "پایان" : "شروع"}
            </button>
        );
    }
  }

export default Button
