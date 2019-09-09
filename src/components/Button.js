import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    render(){
        return (
            <ColorContext.Consumer>
                { (color) =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            { (language) => { return language === 'english' ? 'Submit' : 'Voorlenggen' } }
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        );
    }
}

export default Button;
