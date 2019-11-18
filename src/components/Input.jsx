import React from 'react';
class Input extends React.Component {

    state = {
        errors: []
    }

    handleChange(event){
        console.log(event.target.name,event.target.value);
        const{
            onChange
        } = this.props

        // Validation code here

        onChange(event);
    }

    render () {
        const {
            name,
            value,
            type='text'
        } = this.props;

        return (
            <div>
            <input
                name={name}
                onChange={(event) => this.handleChange(event)}
                value={value ? value : ''}
                type={type}
            />
            </div>

        )
    }
}
export default Input