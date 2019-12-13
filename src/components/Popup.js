import React from 'react';
import './Popup.css';

class Popup extends React.Component {

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='popup_contains'>
                        <strong className="popup_title">{this.props.text}</strong>
                        <button className="button_close" onClick={this.props.closePopup}>X</button>
                        {
                            this.props.infoArray.map((e) => 
                            {
                                if(e!=undefined){
                                    return(
                                        <tr className="infoItem">
                                            <td className="infoDef">
                                                <strong>{e[0].charAt(0).toUpperCase() + e[0].slice(1)}: </strong>
                                            </td>
                                            <td className="infoDesc">
                                                {e[1]}
                                            </td>
                                        </tr>
                                        )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;