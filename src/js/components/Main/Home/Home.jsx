import React from 'react'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (<div>
            <h3>Home</h3>
            <input type="text" value={this.props.searchText} onChange={this.props.onInputChange}></input>
            {/*подсказка при наборе*/}
            <div className="tip">
                <ul>
                    {this.props.concerts.map(i => <li>{i.band}</li>)}
                </ul>
            </div>
            {/*<input type="text" value={props.searchText}></input> - //QQ в классовой компоненте пропсы не проходят дальше конструктора? */}
        </div>)
    }
}

export default Home;