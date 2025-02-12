import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes as T } from 'prop-types';

import { wrapApiResult } from '../redux/utils';
import { fetchStats } from '../redux/actions';
import { environment, appTitle, country } from '../config';
import { padNumber } from '../utils';

import App from './App';

import i18n from "i18next";
import { Trans } from 'react-i18next';
import {getBaseUrl} from "../app";

class Home extends Component {
  componentDidMount () {
    this.props.fetchStats();
  }

  renderStatsList () {
    const { isReady, hasError, getData } = this.props.stats;

    let totals = {
      countries: '00',
      models: '00'
    };

    if (hasError()) {
      totals = {
        countries: '--',
        models: '--'
      };
    } else if (isReady()) {
      const tot = getData().totals;
      totals = {
        countries: padNumber(tot.countries, 2),
        models: padNumber(tot.models, 2)
      };
    }

    return (
      <dl className='stats-list'>
        <br/>
        <br/>
      </dl>
    );
  }

  render () {
    return (
      <App>
        <article className='inpage inpage--home'>
          <header className='inpage__header'>
            <div className='inpage__subheader'>
              <div className='inpage__headline'>
                <h1 className='inpage__title'>Homepage</h1>
              </div>
            </div>
          </header>
          <div className='inpage__body'>
            <section className='home-intro prose'>
              <h2 className='home-intro__title'>
                <Trans>Welcome to the</Trans> {appTitle}
              </h2>
              <div className='home-intro__lead'>
                <p>
                  <Trans
                    i18nKey="HomepageDescription"
                    values={{ country: country}}>
                  </Trans>
                </p>
              </div>

              {this.renderStatsList()}

              <p className='cta-wrapper'>
                <Link
                  to={`${getBaseUrl()}/countries`}
                  title={i18n.t('Explore the data')}
                  className='ctab ctab--explore'
                >
                  <span><Trans>Start exploring</Trans></span>
                </Link>
                <small>or</small>
                <Link
                  to={`${getBaseUrl()}/about`}
                  title={i18n.t('Learn about this platform')}
                  className='ctab ctab--about'
                >
                  <span><Trans>Learn more</Trans></span>
                </Link>
              </p>

              <ul className='home-intro__attribution'>
              </ul>
            </section>

            <figure className='home-media'>
              <div className='home-media__item'>
                {/* eslint-disable */}
                <svg id="home-illu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1024" preserveAspectRatio="xMaxYMin meet">
                  <rect id="sky" width="1440" height="1024" fill="#474ccc"/>
                  <path id="land" d="M1248,384a32,32,0,0,0-64,0H592V352a32,32,0,0,0-64,0v4.29A32,32,0,0,0,480,384H0v640H1440V384Z" fill="#393da3"/>
                  <circle id="moon" cx="832" cy="160" r="64" fill="#ffc700"/>
                  <g id="clouds">
                    <path id="cld3" d="M1264,112a48,48,0,0,0-94.08-13.44A64,64,0,0,0,1088,160h224A48,48,0,0,0,1264,112Z" fill="#fff"/>
                    <path id="cld2" d="M1056,312a23.91,23.91,0,0,0-12.57,3.55A48,48,0,0,0,1000,288a48,48,0,0,0-96,0,48,48,0,0,0-48,48h224A24,24,0,0,0,1056,312Z" fill="#fff"/>
                    <path id="cld1" d="M800,152a23.77,23.77,0,0,0-6,.76A48,48,0,0,0,704,176H824A24,24,0,0,0,800,152Z" fill="#fff"/>
                  </g>
                  <g id="posts">
                    <path id="line" d="M1176,434c-56.17,0-94.84-13.16-117.38-24.2-24.56-12-35.63-23.95-36.09-24.45l2.94-2.7c.11.12,11.17,12,35.14,23.67C1082.75,417.12,1120.73,430,1176,430s93.25-12.88,115.39-23.68c24-11.7,35-23.55,35.14-23.67l2.94,2.7c-.46.5-11.53,12.42-36.09,24.45C1270.84,420.84,1232.17,434,1176,434Z" fill="#fff"/>
                    <path id="line-2" data-name="line" d="M1176,410c-56.17,0-94.84-13.16-117.38-24.2-24.56-12-35.63-23.95-36.09-24.45l2.94-2.7c.11.12,11.17,12,35.14,23.67C1082.75,393.12,1120.73,406,1176,406s93.25-12.88,115.39-23.68c24-11.7,35-23.55,35.14-23.67l2.94,2.7c-.46.5-11.53,12.42-36.09,24.45C1270.84,396.84,1232.17,410,1176,410Z" fill="#fff"/>
                    <g id="post">
                      <path d="M1400,364a8,8,0,0,0-16,0h-48a8,8,0,0,0-16,0h-8v8h96v-8Z" fill="#5860ff"/>
                      <path d="M1400,388a8,8,0,0,0-16,0h-48a8,8,0,0,0-16,0h-8v8h96v-8Z" fill="#5860ff"/>
                      <rect x="1352" y="348" width="16" height="224" fill="#6f76ff"/>
                      <rect x="1352" y="348" width="8" height="224" fill="#8a90ff"/>
                    </g>
                    <g id="post-2" data-name="post">
                      <path d="M1032,364a8,8,0,0,0-16,0H968a8,8,0,0,0-16,0h-8v8h96v-8Z" fill="#5860ff"/>
                      <path d="M1032,388a8,8,0,0,0-16,0H968a8,8,0,0,0-16,0h-8v8h96v-8Z" fill="#5860ff"/>
                      <rect x="984" y="348" width="16" height="224" fill="#6f76ff"/>
                      <rect x="984" y="348" width="8" height="224" fill="#8a90ff"/>
                    </g>
                  </g>
                  <g id="bldg4">
                    <polygon points="1184 256 1088 256 1056 284 1056 572 1216 572 1216 284 1184 256" fill="#6f76ff"/>
                    <rect x="1120" y="284" width="96" height="288" fill="#6f76ff"/>
                    <polygon points="1088 256 1056 284 1056 572 1120 572 1120 284 1088 256" fill="#8a90ff"/>
                    <polygon points="1216 284 1120 284 1088 256 1184 256 1216 284" fill="#5860ff"/>
                    <g id="windows">
                      <rect id="bldg3-w12" x="1176" y="412" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg3-w11" x="1144" y="412" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg3-w10" x="1080" y="412" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg3-w9" x="1176" y="380" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg3-w8" x="1144" y="380" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg3-w7" x="1080" y="380" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg3-w6" x="1176" y="348" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg3-w5" x="1144" y="348" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg3-w4" x="1080" y="348" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg3-w3" x="1176" y="316" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg3-w2" x="1144" y="316" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg3-w1" x="1080" y="316" width="16" height="16" fill="#393da3"/>
                    </g>
                  </g>
                  <g id="bldg3">
                    <polygon points="1280 432 1184 432 1152 460 1152 572 1312 572 1312 460 1280 432" fill="#6f76ff"/>
                    <rect x="1216" y="460" width="96" height="112" fill="#6f76ff"/>
                    <polygon points="1184 432 1152 460 1152 572 1216 572 1216 460 1184 432" fill="#8a90ff"/>
                    <polygon points="1312 460 1216 460 1184 432 1280 432 1312 460" fill="#5860ff"/>
                    <g id="windows-2" data-name="windows">
                      <rect id="bldg4-w6" x="1272" y="524" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg4-w5" x="1240" y="524" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg4-w4" x="1176" y="524" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg4-w3" x="1272" y="492" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg4-w2" x="1240" y="492" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg4-w1" x="1176" y="492" width="16" height="16" fill="#ffc700"/>
                    </g>
                  </g>
                  <g id="bldg2">
                    <polygon points="1120 460 992 460 944 500 944 692 1168 692 1168 500 1120 460" fill="#8a90ff"/>
                    <rect x="1040" y="500" width="128" height="192" fill="#6f76ff"/>
                    <polygon points="992 460 944 500 944 692 1040 692 1040 500 992 460" fill="#8a90ff"/>
                    <polygon points="1168 500 1040 500 992 460 1120 460 1168 500" fill="#5860ff"/>
                    <g id="windows-3" data-name="windows">
                      <rect id="bldg2-w20" x="1128" y="628" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg2-w19" x="1096" y="628" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w18" x="1064" y="628" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w17" x="1000" y="628" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg2-w16" x="968" y="628" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w15" x="1128" y="596" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w14" x="1096" y="596" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w13" x="1064" y="596" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w12" x="1000" y="596" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w11" x="968" y="596" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg2-w10" x="1128" y="564" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w9" x="1096" y="564" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w8" x="1064" y="564" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg2-w7" x="1000" y="564" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w6" x="968" y="564" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg2-w5" x="1128" y="532" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w4" x="1096" y="532" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg2-w3" x="1064" y="532" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w2" x="1000" y="532" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg2-w1" x="968" y="532" width="16" height="16" fill="#393da3"/>
                    </g>
                  </g>
                  <g id="bldg1">
                    <path d="M944,628H848a32,32,0,0,0-32,32V772H976V660A32,32,0,0,0,944,628Z" fill="#6f76ff"/>
                    <rect x="880" y="660" width="96" height="112" fill="#6f76ff"/>
                    <path d="M944,628H848l32,32h96A32,32,0,0,0,944,628Z" fill="#5860ff"/>
                    <path d="M848,628a32,32,0,0,0-32,32V772h64V660A32,32,0,0,0,848,628Z" fill="#8a90ff"/>
                    <g id="windows-4" data-name="windows">
                      <rect id="bldg1-w6" x="904" y="724" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg1-w5" x="936" y="724" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg1-w4" x="840" y="724" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg1-w3" x="936" y="692" width="16" height="16" fill="#ffc700"/>
                      <rect id="bldg1-w2" x="904" y="692" width="16" height="16" fill="#393da3"/>
                      <rect id="bldg1-w1" x="840" y="692" width="16" height="16" fill="#ffc700"/>
                    </g>
                  </g>
                  <g id="turbines">
                    <g id="trbn2">
                      <rect x="822" y="316" width="16" height="256" fill="#6f76ff"/>
                      <rect x="822" y="316" width="8" height="256" fill="#8a90ff"/>
                      <g id="trbn2-bld1">
                        <polygon points="854 300 838 316 830 316 830 188 838 196 854 300" fill="#5860ff"/>
                        <polygon points="830.85 344.83 825.76 322.78 830 316 938.55 383.83 927.53 386.38 830.85 344.83" fill="#5860ff"/>
                        <polygon points="807.95 302.91 830 308 834.24 314.78 725.69 382.61 728.24 371.59 807.95 302.91" fill="#5860ff"/>
                        <circle cx="830" cy="316" r="8" fill="#8a90ff"/>
                      </g>
                    </g>
                    <g id="trbn1">
                      <rect x="726" y="412" width="16" height="160" fill="#6f76ff"/>
                      <rect x="726" y="412" width="8" height="160" fill="#8a90ff"/>
                      <g id="trbn1-bld1">
                        <polygon points="750.06 435.98 734.06 419.98 734.06 411.98 862.06 411.98 854.06 419.98 750.06 435.98" fill="#5860ff"/>
                        <polygon points="705.23 412.83 727.28 407.74 734.06 411.98 666.23 520.53 663.69 509.51 705.23 412.83" fill="#5860ff"/>
                        <polygon points="747.15 389.94 742.06 411.98 735.28 416.22 667.45 307.67 678.47 310.22 747.15 389.94" fill="#5860ff"/>
                        <circle cx="734" cy="412" r="8" fill="#8a90ff"/>
                      </g>
                    </g>
                  </g>
                  <g id="factory">
                    <polygon points="1040 772 976 836 976 900 1040 900 1040 772" fill="#8a90ff"/>
                    <rect x="1040" y="740" width="96" height="64" fill="#5860ff"/>
                    <polygon points="1328 804 1328 676 1300 676 1300 804 1284 804 1284 676 1256 676 1256 804 1232 804 1136 740 1136 804 1040 740 1040 900 1360 900 1360 804 1328 804" fill="#6f76ff"/>
                    <g id="windows-5" data-name="windows">
                      <rect id="fty1-w2" x="1160" y="836" width="48" height="16" fill="#393da3"/>
                      <rect id="fty1-w1" data-name="fty1-w1" x="1064" y="836" width="48" height="16" fill="#ffc700"/>
                    </g>
                    <g id="smoke">
                      <path id="smoke3" d="M1304,652a24,24,0,0,0-24,24h48A24,24,0,0,0,1304,652Z" fill="#fff"/>
                      <path id="smoke2" d="M1248,628a48,48,0,0,0-48,48h96A48,48,0,0,0,1248,628Z" fill="#fff"/>
                      <circle id="smoke1" cx="1200" cy="628" r="48" fill="#fff"/>
                    </g>
                  </g>
                  <g id="panels">
                    <g id="panel">
                      <rect x="960" y="904" width="16" height="16" fill="#5860ff"/>
                      <polygon points="1000 912 936 912 968 880 1032 880 1000 912" fill="#6f76ff"/>
                      <polygon points="968 912 936 912 968 880 1000 880 968 912" fill="#8a90ff"/>
                    </g>
                    <g id="panel-2" data-name="panel">
                      <rect x="920" y="944" width="16" height="16" fill="#5860ff"/>
                      <polygon points="960 952 896 952 928 920 992 920 960 952" fill="#6f76ff"/>
                      <polygon points="928 952 896 952 928 920 960 920 928 952" fill="#8a90ff"/>
                    </g>
                    <g id="panel-3" data-name="panel">
                      <rect x="880" y="904" width="16" height="16" fill="#5860ff"/>
                      <polygon points="920 912 856 912 888 880 952 880 920 912" fill="#6f76ff"/>
                      <polygon points="888 912 856 912 888 880 920 880 888 912" fill="#8a90ff"/>
                    </g>
                    <g id="panel-4" data-name="panel">
                      <rect x="840" y="944" width="16" height="16" fill="#5860ff"/>
                      <polygon points="880 952 816 952 848 920 912 920 880 952" fill="#6f76ff"/>
                      <polygon points="848 952 816 952 848 920 880 920 848 952" fill="#8a90ff"/>
                    </g>
                    <g id="panel-5" data-name="panel">
                      <rect x="1000" y="944" width="16" height="16" fill="#5860ff"/>
                      <polygon points="1040 952 976 952 1008 920 1072 920 1040 952" fill="#6f76ff"/>
                      <polygon points="1008 952 976 952 1008 920 1040 920 1008 952" fill="#8a90ff"/>
                    </g>
                  </g>
                  <g id="trees">
                    <g id="tree">
                      <rect x="712" y="814" width="16" height="40" fill="#5860ff"/>
                      <polygon points="768 822 752 790 760 790 744 758 752 758 720 694 688 758 696 758 680 790 688 790 672 822 768 822" fill="#6f76ff"/>
                      <polygon points="688 758 696 758 680 790 688 790 672 822 720 822 720 694 688 758" fill="#8a90ff"/>
                    </g>
                    <g id="tree-2" data-name="tree">
                      <rect x="760" y="822" width="16" height="32" fill="#5860ff"/>
                      <polygon points="808 830 788 790 796 790 768 734 740 790 748 790 728 830 808 830" fill="#6f76ff"/>
                      <polygon points="740 790 748 790 728 830 768 830 768 734 740 790" fill="#8a90ff"/>
                    </g>
                  </g>
                  <g id="tree-3" data-name="tree">
                    <rect x="790" y="604" width="16" height="32" fill="#5860ff"/>
                    <polygon points="838 612 818 572 826 572 798 516 770 572 778 572 758 612 838 612" fill="#6f76ff"/>
                    <polygon points="770 572 778 572 758 612 798 612 798 516 770 572" fill="#8a90ff"/>
                  </g>
                  <g id="tree-4" data-name="tree">
                    <rect x="1432" y="596" width="8" height="40" fill="#5860ff"/>
                    <polygon points="1408 540 1416 540 1400 572 1408 572 1392 604 1440 604 1440 476 1408 540" fill="#8a90ff"/>
                  </g>
                  <g id="trees-2" data-name="trees">
                    <g id="tree-5" data-name="tree">
                      <rect x="1292" y="928" width="16" height="32" fill="#5860ff"/>
                      <polygon points="1340 936 1320 896 1328 896 1300 840 1272 896 1280 896 1260 936 1340 936" fill="#6f76ff"/>
                      <polygon points="1272 896 1280 896 1260 936 1300 936 1300 840 1272 896" fill="#8a90ff"/>
                    </g>
                    <g id="tree-6" data-name="tree">
                      <rect x="1360" y="920" width="16" height="40" fill="#5860ff"/>
                      <polygon points="1416 928 1400 896 1408 896 1392 864 1400 864 1368 800 1336 864 1344 864 1328 896 1336 896 1320 928 1416 928" fill="#6f76ff"/>
                      <polygon points="1336 864 1344 864 1328 896 1336 896 1320 928 1368 928 1368 800 1336 864" fill="#8a90ff"/>
                    </g>
                  </g>
                </svg>
                {/* eslint-enable */}
              </div>
              <figcaption>Illustration</figcaption>
            </figure>
          </div>
        </article>
      </App>
    );
  }
}

if (environment !== 'production') {
  Home.propTypes = {
    fetchStats: T.func,
    stats: T.object
  };
}

function mapStateToProps (state, props) {
  return {
    stats: wrapApiResult(state.stats)
  };
}

function dispatcher (dispatch) {
  return {
    fetchStats: (...args) => dispatch(fetchStats(...args))
  };
}

export default connect(
  mapStateToProps,
  dispatcher
)(Home);
