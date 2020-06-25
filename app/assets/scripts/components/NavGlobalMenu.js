import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { NavLink } from 'react-router-dom';

import ShareOptions from './connected/Share';
import LanguageOptions from './LanguageOptions';

import { environment, geonodeUrl } from '../config';

import i18n from "i18next";
import {getBaseUrl} from "../app";

const isExplorerActive = (match, location) => {
  return location.pathname.match(/^\/(explore|countries)/g);
};

export default class NavGlobalMenu extends Component {
  renderHeaderMenu () {
    return (
      <ul className='global-menu'>
        <li>
          <NavLink
            exact
            to={getBaseUrl()}
            title={i18n.t('Visit the home page')}
            activeClassName='global-menu__link--active'
            className='global-menu__link global-menu__link--home'
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${getBaseUrl()}/countries`}
            isActive={isExplorerActive}
            title={i18n.t('Explore scenarios')}
            activeClassName='global-menu__link--active'
            className='global-menu__link global-menu__link--explore'
          >
            <span>Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${getBaseUrl()}/about`}
            title={i18n.t('Learn about this platform')}
            activeClassName='global-menu__link--active'
            className='global-menu__link global-menu__link--about'
          >
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <a
            href={geonodeUrl}
            title='SDI'
            className='global-menu__link'
          >
            SDI
          </a>
        </li>
        <li>
          <LanguageOptions />
        </li>
        <li>
          <ShareOptions />
        </li>
      </ul>
    );
  }

  renderFooterMenu () {
    return <ul />;
  }

  render () {
    const { forHeader, forFooter } = this.props;
    if (forHeader) return this.renderHeaderMenu();
    if (forFooter) return this.renderFooterMenu();
    return null;
  }
}

if (environment !== 'production') {
  NavGlobalMenu.propTypes = {
    forHeader: T.bool,
    forFooter: T.bool
  };
}
