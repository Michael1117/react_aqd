import React from 'react';
import MyCompo from './MyCompo.js'

class App extends React.Component {
    constructor(){
        super();
    }

    render() {

        return (
            <div>
                <MyCompo a="66" b="77" c="88"/>
            </div>
        )
    }
}

export default App;