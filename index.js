import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { translate, Trans } from 'react-i18next';
import './styles.css';

const Header = () => {
    return (
        <div>
            <div className="title" >
                Radim Jurecka
            </div>
            <div>
                Constructions
            </div>
            <div>
                <button onClick={() => i18next.changeLanguage('de')}>de</button>
                <button onClick={() => i18next.changeLanguage('en')}>en</button>
            </div>
        </div>
    )
}

class Card extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.cardTitle}</h1><br />
                <div>{this.props.cardDescription}</div>
            </div>
        )
    }
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
                <Card cardTitle='Jeřáby' cardDescription='' />
                <Card cardTitle='Elektroinstalace' cardDescription='' />
                <Card cardTitle='Ocelové konstrukce' cardDescription='' />
                <Card cardTitle='Zámečnické práce' cardDescription='' />
            </div>
        )
    }
}

const About = () => {
    return (
        <div>
            Firma byla založena v r. 2004. <br />
            Od svého vzniku se zabývá montážemi, opravami, rekonstrukcemi mostových jeřábů, otočných sloupových jeřábů a jeřábových drážek, výrobou a montážemi ocelových konstrukcí, elektroinstalacemi a zámečnickými pracemi. <br />
            Provádí revizní činnost, preventivní prohlídky zdvihacích zařízení, prohlídky ocelových konstrukcí a zvláštní posouzení jeřábů.
        </div>
    )
}

const OurProducts = () => {
    return <div>Our Products</div>
}

const Contact = () => {
    return (
        <div>
            Ing. Radim Jurečka <br />
            Štefánikova 58/31 <br />
            742 21 Kopřivnice <br />
            Tel: + 420 724 027 991 <br />
            Fax: + 420 556 810 190 <br />
        </div>
    )
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

//export default translate('common')(App);

i18next.init({
    interpolation: { escapeValue: false },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>,
    document.querySelector('#root')
);