import React from 'react';

class App extends React.Component {

    constructor(){
        super();
        this.a = 100
    }

    add = () => {
        this.a ++;
        console.log('我是add')
        console.log(this.a);
    }
    /*add() {
        this.a++;
        console.log(this.a);
    }*/
    render() {

        return (
            <div>
                <p>我是add</p>
                <p>{this.a}</p>
                <p>
                    <input type="button" value="按我" onClick={this.add}/>
                </p>
            </div>
        )
    }
}

export default App;