'use strict';
import React from 'react';
import Dropdown from './Dropdown';
import Breakpoint from './Breakpoint';
import {wrapApiResult} from "../redux/utils";
import {fetchCountries} from "../redux/actions";
import {connect} from "react-redux";

import i18n from "i18next";
import {languageChanged} from "../app";

class LanguageOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    clicked(e) {
        languageChanged(e.target.textContent)
    }

    renderLanguageList() {
        return Object.keys(i18n.store.data).map(key => {
            return (
                <li key={key}>
                    <a
                        onClick={this.clicked}
                        className={
                            (i18n.language === key) ? 'visited drop__menu-item' : 'drop__menu-item'}
                    >
                        <span>{key}</span>
                    </a>
                </li>
            )
        })
    }

    render() {
        return (
            <Breakpoint>
                {({largeUp}) => (
                    <Dropdown
                        className='share-menu'
                        triggerClassName='global-menu__link nav-button'
                        triggerActiveClassName='button--active'
                        triggerText={i18n.language}
                        triggerTitle={i18n.t('Select language')}
                        direction={largeUp ? 'up' : 'down'}
                        alignment={largeUp ? 'left' : 'right'}
                    >
                        <ul className='drop__menu drop__menu--iconified lang-options'>
                            {this.renderLanguageList()}
                        </ul>
                    </Dropdown>
                )}
            </Breakpoint>
        );
    }
}


function mapStateToProps(state, props) {
    return {
        countries: wrapApiResult(state.countries)
    };
}

function dispatcher(dispatch) {
    return {
        fetchCountries: (...args) => dispatch(fetchCountries(...args))
    };
}

export default connect(
    mapStateToProps,
    dispatcher
)(LanguageOptions);
