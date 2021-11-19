'use strict';
import React from 'react';
import { PropTypes as T } from 'prop-types';

import { environment } from '../../config';
import { Trans } from 'react-i18next';

import ShadowScrollbars from '../ShadowScrollbar';
import Dropdown from '../Dropdown';
import i18n from "i18next";

// React component for the layer control.
// It is disconnected from the global state because it needs to be included
// via the mapbox code.
export default class LayerControlDropdown extends React.Component {
  render () {
    const { layersConfig, layersState, handleLayerChange, layersTransparency, handleLayerTransparencyChange } = this.props;

    return (
      <Dropdown
        className='layers-menu'
        triggerClassName='layers-menu-trigger'
        triggerActiveClassName='button--active'
        triggerText='Map layers'
        triggerTitle='Toggle map layers'
        direction='up'
        alignment='left'
      >
        <ShadowScrollbars theme='light'>
          <div className='drop_content'>
            <h6 className='drop__title'><Trans>Layers Control</Trans></h6>
            <ul className='layers-list'>
              {layersConfig.map((l, idx) => (
                <li className='layers-list__item' key={l.id}>
                  <div className='form__group'>
                    <Toggle
                      text={i18n.t(l.label)}
                      name={`switch-${l.id}`}
                      title='Toggle on/off'
                      checked={layersState[idx]}
                      onChange={() => handleLayerChange(idx)}
                    />
                  </div>
                  <div className='form__group'>
                    <Transparency
                      text={i18n.t(l.label)}
                      name={`transparency-${l.id}`}
                      title='Change transparency'
                      value={layersTransparency[idx]}
                      onChange={(event) => handleLayerTransparencyChange(idx, event.target.value)}
                    />
                  </div>
                  {l.source && l.source.label && l.source.url && (
                    <div className='form__help'>
                      <p>
                        Source:{' '}
                        <a target='_blank' href={l.source.url} title='View'>
                          {l.source.label}
                        </a>
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </ShadowScrollbars>
      </Dropdown>
    );
  }
}

if (environment !== 'production') {
  LayerControlDropdown.propTypes = {
    layersConfig: T.array,
    layersState: T.array,
    handleLayerChange: T.func,
    layersTransparency: T.array,
    handleLayerTransparencyChange: T.func,
  };
}

const Toggle = props => {
  const { text, name, title, checked, onChange } = props;

  return (
    <label
      htmlFor={name}
      className='form__option form__option--switch'
      title={title}
    >
      <input
        type='checkbox'
        name={name}
        id={name}
        value='on'
        checked={checked}
        onChange={onChange}
      />
      <span className='form__option__text'>{text}</span>
      <span className='form__option__ui' />
    </label>
  );
};
const Transparency = props => {
  const { text, name, title, value, onChange } = props;

  return (
    <div
      className='form__option__transparency'
      title={title}
    >
      <span><Trans>Transparency</Trans></span>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        step="1"
        onChange={onChange}
      />
    </div>
  );
};

if (environment !== 'production') {
  Toggle.propTypes = {
    text: T.string,
    name: T.string,
    title: T.string,
    checked: T.bool,
    onChange: T.func
  };
  Transparency.propTypes = {
    text: T.string,
    name: T.string,
    title: T.string,
    checked: T.bool,
    onChange: T.func
  };
}

LayerControlDropdown.propTypes = {
  layers: T.array,
  onLayerChange: T.func
};
