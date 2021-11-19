'use strict';
const COUNTRY = 'Somaliland'
export default {
    appTitle: `${COUNTRY} Electrification Platform`,
    appShortTitle: `${COUNTRY[0]}EP`,
    appDescription:
        `Explore least cost electrification strategies in ${COUNTRY}.`,
    baseUrl: 'http://localhost:9000',
    dataServiceUrl: 'http://localhost:3000',
    mapboxAccessToken: 'pk.eyJ1IjoiZGVyaWxpbngiLCJhIjoiY2szeTlzbWo2MDV6eDNlcDMxM3dzZXBieiJ9.zPf1iiFilYYwyx6ETNj_8w',
    basemapStyleLink: 'mapbox://styles/derilinx/ck3yqjovg4dpn1crwajrc9ajr',
    geonodeUrl: 'http://localhost',
    country: COUNTRY,
    subUrl: '', // please don't use end trailing slash, example: /gep

    // this for cluster layer
    clusterSourceName: 'Somaliland_WBPopulation_clusters_clipped',
    clusterLayerUrl: 'https://somaliland.gep.kartoza.com/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=geonode:Somaliland_WBPopulation_clusters_clipped&STYLE=&TILEMATRIX=EPSG:3857:{z}&TILEMATRIXSET=EPSG:3857&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'
};
