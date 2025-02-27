const exposes = require('../lib/exposes');
const fz = {...require('../converters/fromZigbee'), legacy: require('../lib/legacy').fromZigbee};
const tz = {...require('../converters/toZigbee'), legacy: require('../lib/legacy').toZigbee};
const e = exposes.presets;
const ea = exposes.access;

module.exports = [
    {
        fingerprint: [{modelID: 'TS0601', manufacturerName: '_TZE200_swhwv3k3'}],
        model: 'C10-3E-1.2',
        vendor: 'Novo',
        description: 'Curtain switch',
        fromZigbee: [fz.legacy.tuya_cover, fz.ignore_basic_report],
        toZigbee: [tz.legacy.tuya_cover_control, tz.legacy.tuya_cover_options],
        exposes: [e.cover_position().setAccess('position', ea.STATE_SET)],
    },
];
