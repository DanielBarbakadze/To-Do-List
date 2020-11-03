import React from 'react';
import * as Require from '../lib/validations';
class Input extends React.Component {

    state = {
        errors: ""
    }

    that = this;
    handleChange(event){
        // console.log(event.target.name,event.target.value);
        const{
            onChange,
            validations
        } = this.props
        let errors = "";

        validations.map((validationName) => {
            if(!Require[validationName](event.target.value)){
                errors = "Please Input";
                this.setState({errors});
            }
            else{
                this.setState({errors})
            }
        });
 
        onChange(event, errors);
    }

    render () {
        const {
            name,
            value,
            style,
            type,
            errors,
            placeholder
        } = this.props;

        // console.log(errors);

        return (
            <div>
            <input 
                name={name}
                onChange={(event) => this.handleChange(event)}
                value={value ? value : ''}
                type={type}
                style={style}
                placeholder={placeholder}
            />
            <div className="error-text">
               {errors}
            </div>
            </div>

        )
    }
}
export default Input