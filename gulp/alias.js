'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_gulp2.default.task('template', ['template2module']);

_gulp2.default.task('default', ['babel', 'template2module', 'watch']);