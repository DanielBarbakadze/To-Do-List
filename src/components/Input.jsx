import React from 'react';
import * as Require from '../lib/validations';
class Input extends React.Component {

    state = {
        errors: ""
    }

    handleChange(event){
        // console.log(event.target.name,event.target.value);
        const{
            onChange
        } = this.props

       if(!Require["require"](event.target.value)){
           this.setState({errors:"Please Input"});
       }
       else{
           this.setState({errors:""});
       }
        onChange(event);
    }

    render () {
        const {
            name,
            value,
            style,
            type='text'
        } = this.props;

        return (
            <div>
            <input
                name={name}
                onChange={(event) => this.handleChange(event)}
                value={value ? value : ''}
                type={type}
                style={style}
            />
            <div>
               {this.state.errors}
            </div>
            </div>

        )
    }
}
export default Input