import React from 'react';

class LanguageSelector extends React.Component{

    render() {
        return(
            <div className="header"> Choose language -
                <i className="flag us" onClick={ () => { this.props.onLanguageChange('english') } }></i>
                <i className="flag nl" onClick={ () => { this.props.onLanguageChange('german') } }></i>
            </div>
        )
    }
}


export default LanguageSelector;
