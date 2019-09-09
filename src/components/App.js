import React from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state = { language : 'english' }

    onLanguageChange = (language) => {
        this.setState({"language": language });
    }

    render(){
        return (
            <div className="ui container">
                <div className="content">
                    <div className="header"> Choose language </div>
                    <div>
                        <button className="ui button primary" onClick={ () => { this.onLanguageChange('english') } } >English</button>
                        <button className="ui button default" onClick={ () => { this.onLanguageChange('german') } }>German</button>
                    </div>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={'red'}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;
