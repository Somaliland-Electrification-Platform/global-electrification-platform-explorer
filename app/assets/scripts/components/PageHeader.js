import React from 'react';
import { PropTypes as T } from 'prop-types';
import { Link } from 'react-router-dom';

import NavGlobalMenu from './NavGlobalMenu';

import { environment, appTitle, appShortTitle } from '../config';

import i18n from "i18next";
import {getBaseUrl} from "../app";

export default class PageHeader extends React.PureComponent {
  render () {
    return (
      <header className='page__header' role='banner'>
        <div className='page__headline'>
          <h1 className='page__title'>
            <Link to={getBaseUrl()} title={i18n.t('Visit the home page')} data-ast={appShortTitle}>
              <span>{appTitle}</span>
            </Link>
          </h1>
        </div>
        <nav className='page__prime-nav nav' role='navigation'>
          <NavGlobalMenu forHeader />
        </nav>
      </header>
    );
  }
}

if (environment !== 'production') {
  PageHeader.propTypes = {
    location: T.object
  };
}
