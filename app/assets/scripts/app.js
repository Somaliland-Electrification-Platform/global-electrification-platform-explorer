import React from 'react';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {Redirect, Route, Switch} from "react-router-dom";

// Views
import Home from './views/Home';
import Explore from './views/Explore';
import About from './views/About';
import Relevant from './views/Relevant';
import SelectCountry from './views/SelectCountry';
import SelectModel from './views/SelectModel';
import UhOh from './views/UhOh';

// translation files
import en from "./../translations/en.json";
import id from "./../translations/id.json";
import fr from "./../translations/fr.json";

import {subUrl} from './config';

const resources = {
    en: {translation: en},
    id: {translation: id},
    fr: {translation: fr}
};

/** Return base url
 * the url may use sub url and also language
 */
export function getBaseUrl() {
    const lang = i18n.language ? i18n.language : 'en'
    if (subUrl) {
        return `${subUrl}/${lang}`
    } else {
        return `/${lang}`
    }
}

/** return translation of message
 * mostly for checking if the sentences has incorrect character
 *
 * @param sentence : string
 */
export function translate(sentence) {
    if (sentence === undefined) {
        return sentence
    }

    // split with ':'
    const newSentences = sentence.split(':').map(val => {
        const cleanSentence = val.replace(/ +(?= )/g,'')
        return i18n.t(cleanSentence.trim())
    })
    return newSentences.join(': ')
}


class App extends React.Component {
    constructor(props) {
        super(props);
        if (props.match.path === "*" | !props.match.params.lang ||
            !Object.keys(resources).includes(props.match.params.lang)) {
            window.location = getBaseUrl()
        }
        i18n
            .use(initReactI18next) // passes i18n down to react-i18next
            .init({
                resources,
                lng: props.match.params.lang,
                keySeparator: false, // we do not use keys in form messages.welcome
                interpolation: {
                    escapeValue: false // react already safes from xss
                }
            });
    }

    render() {
        return (
            <Switch>
                <Route exact path={getBaseUrl() + '/'} component={Home}/>
                <Redirect exact from={getBaseUrl() + '/explore'} to='/countries'/>
                <Route exact path={getBaseUrl() + '/countries'} component={SelectCountry}/>
                <Route exact path={getBaseUrl() + '/countries/:countryId/models'} component={SelectModel}/>
                <Route exact path={getBaseUrl() + '/explore/:modelId'} component={Explore}/>
                <Route exact path={getBaseUrl() + '/about'} component={About}/>
                <Route exact path={getBaseUrl() + '/relevant'} component={Relevant}/>
                <Route path={getBaseUrl() + '*'} component={UhOh}/>
            </Switch>
        )
    }
}

export default App;
