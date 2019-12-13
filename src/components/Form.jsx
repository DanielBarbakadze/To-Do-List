import Input from "./Input"
import React from 'react';


export default class Form extends React.Component {
    state = {
        submitted: false
    }

    componentDidMount () {
        this.props.inputs.forEach((input) => {
            let errors = "";

            if (input.validations.indexOf('require') >= 0) {
                errors = "Please Input"
            }

            this.setState({
                [input.name]: {
                    value: '',
                    errors
                }
            })
        })
    }

    handleChange(e, errors) {
        // console.log(errors);
        this.setState({
            [e.target.name]: {
                value: e.target.value,
                errors
            }
        })
    }

    handleClick () {
        this.setState({
            submitted: true
        })
        
        this.props.onSubmit(this.state);
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                {
                    this.props.inputs.map((input) => {
                        return (
                            <Input 
                                type = {input.type}
                                name={input.name}
                                value={this.state[input.name] && this.state[input.name].value}
                                style={input.style}
                                errors={this.state.submitted ? this.state[input.name].errors : ''}
                                onChange={(e,errors) => this.handleChange(e, errors)}
                                validations={input.validations}
                                placeholder={input.placeholder}
                            />
                        )
                    })}
                <button onClick={() => this.handleClick()}>login</button>
            </div>
        )
    }

}