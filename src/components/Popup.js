import React from 'react';
import './Popup.css';

class Popup extends React.Component {

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <strong>{this.props.text}</strong>
                    <button className="button_close" onClick={this.props.closePopup}>X</button>
                    {
                        this.props.infoArray.map((e) => 
                        {
                            if(e!=undefined){
                                return(
                                    <li>
                                        <strong>{e[0]}</strong>: {e[1]}</li>
                                    )
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Popup;