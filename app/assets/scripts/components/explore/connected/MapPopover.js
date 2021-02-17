import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes as T } from 'prop-types';

import { environment } from '../../../config';
import { getFromState, wrapApiResult } from '../../../redux/utils';
import { fetchFeature } from '../../../redux/actions';
import { store } from '../../../store';
import { formatThousands, formatKeyIndicator } from '../../../utils';
import i18n from "i18next";
import * as popupConfig   from '../../../config/popupDetailsConfig';

class MapPopover extends React.Component {
  componentDidMount () {
    const { scenarioId, featureId, fetchFeature, year } = this.props;
    fetchFeature(scenarioId, featureId, year);
  }
  renderDetail (data, confIdx) {
    const config = popupConfig[confIdx];
    const rendered = !!data[config.field];
    let value = formatThousands(data[config.field], 0)
    if (config.keyIndicator) {
      value = formatKeyIndicator(data[config.field], config.keyIndicator);
    }
    if (config.prefix) {
      value = config.prefix + value;
    }
    return (
      <Fragment key={confIdx}>
        {rendered ? (
            <Fragment>
              <dt>{i18n.t(config.label)}</dt>
              <dd>{value}</dd>
            </Fragment>
        ) : (<Fragment></Fragment>)
        }
      </Fragment>
    );
  }
  render () {
    const { onCloseClick, year, feature: { isReady, getData } } = this.props;

    const data = getData();
    return (
      <article className='popover popover--map'>
        <div className='popover__contents'>
          <header className='popover__header'>
            <div className='popover__headline'>
              <h1 className='popover__title'>{i18n.t('Details')} for { year }</h1>
            </div>
            <div className='popover__header-toolbar'><a href='#' title='Close' className='tba-xmark tba--text-hidden' onClick={onCloseClick}><span>Close</span></a></div>
          </header>
          <div className='popover__body'>
            {isReady() ? (
              <dl className='map-number-list'>
                {Object.keys(popupConfig).map(confIdx => this.renderDetail(data, confIdx))}
              </dl>
            ) : (
              <p>{i18n.t('Loading')}</p>
            )}
          </div>
        </div>
      </article>
    );
  }
}

if (environment !== 'production') {
  MapPopover.propTypes = {
    onCloseClick: T.func,
    fetchFeature: T.func,
    scenarioId: T.string,
    featureId: T.number,
    year: T.number,
    feature: T.object
  };
}

function mapStateToProps (state, props) {
  const { scenarioId, featureId, year} = props;
  const key = `${scenarioId}--${featureId}--${year}`;
  return {
    feature: wrapApiResult(getFromState(state.individualFeatures, key))
  };
}

function dispatcher (dispatch) {
  return {
    fetchFeature: (...args) => dispatch(fetchFeature(...args))
  };
}

// Connect popover to the global state.
// This is very specific to this component because since it is rendered by
// mapbox it lives outside of the global state.
function connectWithStore (...args) {
  return (WrappedComponent) => {
    var ConnectedWrappedComponent = connect(...args)(WrappedComponent);
    return function ConnectedMapPopover (props) {
      return <ConnectedWrappedComponent {...props} store={store} />;
    };
  };
}

export default connectWithStore(
  mapStateToProps,
  dispatcher
)(MapPopover);
