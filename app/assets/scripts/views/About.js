import React, { Component } from 'react';

import App from './App';

class About extends Component {
  render () {
    return (
      <App pageTitle='About'>
        <article className='inpage inpage--single inpage--about'>
          <header className='inpage__header'>
            <div className='inpage__subheader'>
              <div className='inpage__headline'>
                <h1 className='inpage__title'>About</h1>
              </div>
            </div>
          </header>
          <div className='inpage__body'>
            <div className='prose'>
              <p>
                For any inquiries and potential collaboration please contact the
                development team:
              </p>
              <ul>
                <li>
                  <b>Kartoza :</b> Tim Sutton –{' '}
                  <a href='tim@kartoza.com'>
                    tim@kartoza.com
                  </a>
                </li>
                <li>
                  <b>KTH Energy Systems:</b> Babak Khavari –{' '}
                  <a href='khavari@kth.se'>
                    khavari@kth.se
                  </a>
                </li>
              </ul>

              <h2 className='visually-hidden'>Credits</h2>
              <dl className='logo-list'>
                <dd>
                  <a
                    href='https://www.worldbank.org/'
                    title='Visit World Bank'
                    target='_blank'
                  >
                    <img
                      alt='WBG Logo'
                      src='/assets/graphics/content/logos/logo-wbg.png'
                    />
                    <span>KTH</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.kth.se/en'
                    title='Visit KTH'
                    target='_blank'
                  >
                    <img
                      alt='KTH Logo'
                      src='/assets/graphics/content/logos/logo-kth.png'
                    />
                    <span>KTH</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://kartoza.com/'
                    title='Visit Katoza'
                    target='_blank'
                  >
                    <img
                      alt='Kartoza Logo'
                      src='/assets/graphics/content/logos/logo-kartoza.svg'
                    />
                    <span>KTH</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://snv.org/'
                    title='Visit SVN'
                    target='_blank'
                  >
                    <img
                      alt='SVN Logo'
                      src='/assets/graphics/content/logos/logo-svn.png'
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
