'use strict';
import React from 'react';
import {PropTypes as T} from 'prop-types';

import {environment} from '../../config';

export default class MapLayerLegend extends React.Component {
    render() {
        const {layersConfig, layersState} = this.props;
        const legends = layersConfig.filter((layer, index, arr) => layersState[index] && layer.legend).map(l => l.legend)
        return (
            <div>
                {
                    legends.length === 0
                        ? null
                        : (
                            <div className='legend' key='map-legend'>
                                {
                                    legends.map(
                                        (legend, idx) => (
                                            <div key={idx}><img src={legend}/></div>
                                        )
                                    )
                                }
                            </div>
                        )
                }
            </div>
        );
    }
}

MapLayerLegend.propTypes = {
    layersConfig: T.array,
    layersState: T.array
};
