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
        return (
            <div>
                <h1>我是React，很高兴见到你！</h1>
                <h3>JSX语法很好用哦！ </h3>

                <h3>JSX可以调用函数哦</h3>
                {3 > 8 ? "A" : "B"}
                {this.haha('篮球')}
                <h3>JSX还可以设置样式！</h3>
                <div style={{width: "100px",height: 20+30+"px", backgroundColor: "red"}}>
                </div>
            </div>
        )
    }
}

export default App;