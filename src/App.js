import React from 'react';

class App extends React.Component {

    haha(lanmu) {
        if (lanmu === '篮球') {
            return (
                <ul>
                    <li>姚明</li>
                    <li>乔丹</li>
                    <li>科比</li>
                    <li>奥尼尔</li>
                </ul>
            )
        } else if (lanmu === '足球') {
            return (
                <ul>
                    <li>李铁</li>
                    <li>郝东海</li>
                    <li>C罗</li>
                </ul>
            )
        }
    }

    render() {
        let arr = ["白板", "幺鸡", "二条", "三饼"];

        let arr2 = arr.map((item, index) => {
            return <li key={index}>{item}</li>
        });
        return (

            <div>
                {/*{arr}*/}
                {arr2}
            </div>
        )
    }
}

export default App;