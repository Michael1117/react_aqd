import React, {Component} from 'react';

class MyCompo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <p>{this.props.a}</p>
                <p>{this.props.b}</p>
                <p>{this.props.c}</p>
            </div>
        );
    }
}

export default MyCompo;