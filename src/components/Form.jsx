import Input from "./Input"
import React from 'react';


export default class Form extends React.Component {
    state = {}

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.inputs.map((input) => {
                        return (
                            <Input
                                name={input.name}
                                value={this.state[input.name]}
                                onChange={(e) => this.handleChange(e)}
                            />
                        )
                    })}
                <button onClick={() => this.props.onSubmit(this.state)}>Sumbit</button>
            </div>
        )
    }

}
