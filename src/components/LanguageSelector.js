import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component{
    static contextType = LanguageContext;

    render() {
        return(
            <div className="header"> Choose language -
                <i className="flag us" onClick={ () => { this.context.onLanguageChange('english') } }></i>
                <i className="flag nl" onClick={ () => { this.context.onLanguageChange('german') } }></i>
            </div>
        )
    }
}


export default LanguageSelector;
