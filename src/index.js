import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button, message } from 'antd';
import axios from 'axios';
import './index.less';

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fruit: ['apple', 'banana', 'pear', '其他1']
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            const response = await axios.get('/mock/text.json');
            console.log(response.data)
        } catch (error) {
            //message.error(error.msg)
        }

    }
    render() {
        const { fruit } = this.state;
        return <div>
            Hello React and Webpack4!
            <ul>
                {
                    fruit.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
            <p className="text">如果构建时出现大量 browsers 错误，如下错误，browsers 改成 overrideBrowserslist</p>
            <Button type="primary">Primary</Button>

            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}
