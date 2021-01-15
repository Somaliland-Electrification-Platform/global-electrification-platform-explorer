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
                <Trans>The Somalia Electrification Platform is an open access, interactive, online platform that allows for overview of electrification investment scenarios for Somalia developed under the Somali Electricity Access Project (SEAP) for the Ministry of Energy and Water Resources (MoEWR) in the Federal Republic of Somalia. The scenarios present pathways for achieving universal electricity access, split into an intermediate strategy for 2025 and full electrification by 2030.</Trans>
              </p>
              <p>
                <Trans>Users can explore 192 different scenarios to meet the access goals. These different combinations and parameters are presented in the form of "levers". Users can overlay additional layers as well (e.g., electricity networks, location of health facilities) to help illustrate useful contextual information.</Trans>
              </p>
              <p>
                <Trans>A number of public and private partners have provided important data for the project. In total, four federal state ministries (the Ministry of Energy and Water Resources, Ministry of Education, Culture and Higher Education, Ministry of Health and Ministry of Agriculture and Irrigation), the five Federal Member States and 25 ESPs have provided their support in collecting and/or providing data for the project so far. The ESPs that have supplied data so far are; Adaado Electric Company, Altowba Electric Company, AMAL, Badhan Electricity Company, Baidoa Electric Company, Beco Powering Somalia, Blue Sky, Dayah Electric Company, Dayax Power Supply, El Wak Electric Company, ENEE, Galmudug Electric Company, Halgan Power Supply, Hilac Electric Company, Ilays, Jalalaqsi Power Supply, JESCO, Kaah Electric Company, NECSOM, NEPCO, Shabelle Energy Service, Somwater, Somali Power and Lighting Company, Wehliye Power Supply and WESCO. Their contributions are gratefully acknowledged, as this data significantly improves the quality and usefulness of this analysis, and provides a strong base for future updates.</Trans>
              </p>
              <p>
                <Trans>For more information, please contact the development team</Trans>:
              </p>
              <ul>
                <li>
                  <b>The Ministry of Energy and Water Resources :</b> Abdisalam Abdullahi –{' '}
                  <a href='mailto:seap.procurement@gmail.com'>
                    seap.procurement@gmail.com
                  </a>
                </li>
                <li>
                  <b>The World Bank :</b> Nicolina Lindblad –{' '}
                  <a href='mailto:nlindblad@worldbank.org '>
                    nlindblad@worldbank.org
                  </a>
                </li>
                <li>
                  <b>KTH Energy Systems:</b> Andreas Sahlberg –{' '}
                  <a href='mailto:asahl@kth.se'>
                    asahl@kth.se
                  </a>
                </li>
                <li>
                  <b>Kartoza:</b> Tim Sutton –{' '}
                  <a href='mailto:tim@kartoza.com'>
                    tim@kartoza.com
                  </a>
                </li>
                <li>
                  <b>Recon Energy:</b> Aden Abdi –{' '}
                  <a href='mailto:info@recon.com '>
                    info@recon.com
                  </a>
                </li>
              </ul>

              <h2 className='visually-hidden'>Credits</h2>
              <dl className='logo-list'>
                <dd>
                  <a
                    href='https://www.worldbank.org/'
                    title={i18n.t('Visit')+' World Bank'}
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
                    href='https://www.esmap.org/'
                    title={i18n.t('Visit')+' Energy Sector Management Assistance Program'}
                    className='logo-esmap'
                    target='_blank'
                  >
                    <img
                      alt='ESMAP Logo'
                      src='/assets/graphics/content/logos/logo-esmap.png'
                    />
                    <span>ESMAP</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://moewr.gov.so/'
                    title={i18n.t('Visit')+' Ministry of Energy and Water Resources'}
                    target='_blank'
                  >
                    <img
                      alt='Ministry of Energy and Water Resources Logo'
                      src='/assets/graphics/content/logos/logo-moewr.jpg'
                    />
                    <span>Ministry of Energy and Water Resources</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.kth.se/en'
                    title={i18n.t('Visit')+' KTH'}
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
                <dd>
                  <a
                    href='http://www.recon.so/'
                    title={i18n.t('Visit')+' Recon'}
                    target='_blank'
                  >
                    <img
                      alt='SVN Logo'
                      src='/assets/graphics/content/logos/logo-recon.png'
                      height={'100%'}
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
