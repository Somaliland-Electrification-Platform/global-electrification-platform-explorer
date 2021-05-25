import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import App from './App';
import i18n from "i18next";

class About extends Component {
  render () {
    return (
      <App pageTitle='About'>
        <article className='inpage inpage--single inpage--about'>
          <header className='inpage__header'>
            <div className='inpage__subheader'>
              <div className='inpage__headline'>
                <h1 className='inpage__title'><Trans>About</Trans></h1>
              </div>
            </div>
          </header>
          <div className='inpage__body'>
            <div className='prose'>
              <p>
                Description
              </p>
              <p>
                <Trans>For more information, please contact the development team</Trans>:
              </p>
              <ul>
                <li>
                  <b>Kartoza:</b> Tim Sutton –{' '}
                  <a href='mailto:tim@kartoza.com'>
                    tim@kartoza.com
                  </a>
                </li>
              </ul>

              <h2 className='visually-hidden'>Credits</h2>
              <dl className='logo-list'>
                <dd>
                  <a
                    href='https://kartoza.com/'
                    title={i18n.t('Visit')+' Katoza'}
                    target='_blank'
                  >
                    <img
                      alt='Kartoza Logo'
                      src='/assets/graphics/content/logos/logo-kartoza.svg'
                    />
                    <span>KTH</span>
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </article>
      </App>
    );
  }
}

export default About;
