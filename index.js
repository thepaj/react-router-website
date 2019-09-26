import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <div className="title" >
            Radim Jurecka
        </div>
    )
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'Home' };
        this.onCzechClick = this.onCzechClick.bind(this);
        this.onEnglishClick = this.onEnglishClick.bind(this);
    }

    onCzechClick() {
        this.setState({
            title: 'Domu'
        });
    }

    onEnglishClick() {
        this.setState({
            title: 'Home'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div className="language-box">
                    <h5>Select language</h5>
                    <div>
                        <button onClick={this.onCzechClick}>Czech</button>
                        <br />
                        <button onClick={this.onEnglishClick}>English</button>
                    </div>
                </div>
            </div>
        )
    }
}

const About = () => {
    return <div>About</div>
}

const OurProducts = () => {
    return <div>Our Products</div>
}

const Contact = () => {
    return <div>Contact</div>
}

const App = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/products" component={OurProducts} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);