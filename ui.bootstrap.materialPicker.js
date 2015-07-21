angular.module('ui.bootstrap.materialPicker', [])

.directive('materialPicker', [
    '$parse',
    function ($parse) {
        var swatches = [{
            name: 'Red',
            camel: 'red',
            colors: [
            { name: '50', hex: 'FFEBEE' },
            { name: '100', hex: 'FFCDD2' },
            { name: '200', hex: 'EF9A9A' },
            { name: '300', hex: 'E57373' },
            { name: '400', hex: 'EF5350' },
            { name: '500', hex: 'F44336' },
            { name: '600', hex: 'E53935' },
            { name: '700', hex: 'D32F2F' },
            { name: '800', hex: 'C62828' },
            { name: '900', hex: 'B71C1C' },
            { name: 'A100', hex: 'FF8A80' },
            { name: 'A200', hex: 'FF5252' },
            { name: 'A400', hex: 'FF1744' },
            { name: 'A700', hex: 'D50000' }
            ]
        }, {
            name: 'Pink',
            camel: 'pink',
            colors: [
            { name: '50', hex: 'FCE4EC' },
            { name: '100', hex: 'F8BBD0' },
            { name: '200', hex: 'F48FB1' },
            { name: '300', hex: 'F06292' },
            { name: '400', hex: 'EC407A' },
            { name: '500', hex: 'E91E63' },
            { name: '600', hex: 'D81B60' },
            { name: '700', hex: 'C2185B' },
            { name: '800', hex: 'AD1457' },
            { name: '900', hex: '880E4F' },
            { name: 'A100', hex: 'FF80AB' },
            { name: 'A200', hex: 'FF4081' },
            { name: 'A400', hex: 'F50057' },
            { name: 'A700', hex: 'C51162' }
            ]
        }, {
            name: 'Purple',
            camel: 'purple',
            colors: [
            { name: '50', hex: 'F3E5F5' },
            { name: '100', hex: 'E1BEE7' },
            { name: '200', hex: 'CE93D8' },
            { name: '300', hex: 'BA68C8' },
            { name: '400', hex: 'AB47BC' },
            { name: '500', hex: '9C27B0' },
            { name: '600', hex: '8E24AA' },
            { name: '700', hex: '7B1FA2' },
            { name: '800', hex: '6A1B9A' },
            { name: '900', hex: '4A148C' },
            { name: 'A100', hex: 'EA80FC' },
            { name: 'A200', hex: 'E040FB' },
            { name: 'A400', hex: 'D500F9' },
            { name: 'A700', hex: 'AA00FF' }
            ]
        }, {
            name: 'Deep Purple',
            camel: 'deepPurple',
            colors: [
            { name: '50', hex: 'EDE7F6' },
            { name: '100', hex: 'D1C4E9' },
            { name: '200', hex: 'B39DDB' },
            { name: '300', hex: '9575CD' },
            { name: '400', hex: '7E57C2' },
            { name: '500', hex: '673AB7' },
            { name: '600', hex: '5E35B1' },
            { name: '700', hex: '512DA8' },
            { name: '800', hex: '4527A0' },
            { name: '900', hex: '311B92' },
            { name: 'A100', hex: 'B388FF' },
            { name: 'A200', hex: '7C4DFF' },
            { name: 'A400', hex: '651FFF' },
            { name: 'A700', hex: '6200EA' }
            ]
        }, {
            name: 'Indigo',
            camel: 'indigo',
            colors: [
            { name: '50', hex: 'E8EAF6' },
            { name: '100', hex: 'C5CAE9' },
            { name: '200', hex: '9FA8DA' },
            { name: '300', hex: '7986CB' },
            { name: '400', hex: '5C6BC0' },
            { name: '500', hex: '3F51B5' },
            { name: '600', hex: '3949AB' },
            { name: '700', hex: '303F9F' },
            { name: '800', hex: '283593' },
            { name: '900', hex: '1A237E' },
            { name: 'A100', hex: '8C9EFF' },
            { name: 'A200', hex: '536DFE' },
            { name: 'A400', hex: '3D5AFE' },
            { name: 'A700', hex: '304FFE' }
            ]
        }, {
            name: 'Blue',
            camel: 'blue',
            colors: [
            { name: '50', hex: 'E3F2FD' },
            { name: '100', hex: 'BBDEFB' },
            { name: '200', hex: '90CAF9' },
            { name: '300', hex: '64B5F6' },
            { name: '400', hex: '42A5F5' },
            { name: '500', hex: '2196F3' },
            { name: '600', hex: '1E88E5' },
            { name: '700', hex: '1976D2' },
            { name: '800', hex: '1565C0' },
            { name: '900', hex: '0D47A1' },
            { name: 'A100', hex: '82B1FF' },
            { name: 'A200', hex: '448AFF' },
            { name: 'A400', hex: '2979FF' },
            { name: 'A700', hex: '2962FF' }
            ]
        }, {
            name: 'Light Blue',
            camel: 'lightBlue',
            colors: [
            { name: '50', hex: 'E1F5FE' },
            { name: '100', hex: 'B3E5FC' },
            { name: '200', hex: '81D4FA' },
            { name: '300', hex: '4FC3F7' },
            { name: '400', hex: '29B6F6' },
            { name: '500', hex: '03A9F4' },
            { name: '600', hex: '039BE5' },
            { name: '700', hex: '0288D1' },
            { name: '800', hex: '0277BD' },
            { name: '900', hex: '01579B' },
            { name: 'A100', hex: '80D8FF' },
            { name: 'A200', hex: '40C4FF' },
            { name: 'A400', hex: '00B0FF' },
            { name: 'A700', hex: '0091EA' }
            ]
        }, {
            name: 'Cyan',
            camel: 'cyan',
            colors: [
            { name: '50', hex: 'E0F7FA' },
            { name: '100', hex: 'B2EBF2' },
            { name: '200', hex: '80DEEA' },
            { name: '300', hex: '4DD0E1' },
            { name: '400', hex: '26C6DA' },
            { name: '500', hex: '00BCD4' },
            { name: '600', hex: '00ACC1' },
            { name: '700', hex: '0097A7' },
            { name: '800', hex: '00838F' },
            { name: '900', hex: '006064' },
            { name: 'A100', hex: '84FFFF' },
            { name: 'A200', hex: '18FFFF' },
            { name: 'A400', hex: '00E5FF' },
            { name: 'A700', hex: '00B8D4' }
            ]
        }, {
            name: 'Teal',
            camel: 'teal',
            colors: [
            { name: '50', hex: 'E0F2F1' },
            { name: '100', hex: 'B2DFDB' },
            { name: '200', hex: '80CBC4' },
            { name: '300', hex: '4DB6AC' },
            { name: '400', hex: '26A69A' },
            { name: '500', hex: '009688' },
            { name: '600', hex: '00897B' },
            { name: '700', hex: '00796B' },
            { name: '800', hex: '00695C' },
            { name: '900', hex: '004D40' },
            { name: 'A100', hex: 'A7FFEB' },
            { name: 'A200', hex: '64FFDA' },
            { name: 'A400', hex: '1DE9B6' },
            { name: 'A700', hex: '00BFA5' }
            ]
        }, {
            name: 'Green',
            camel: 'green',
            colors: [
            { name: '50', hex: 'E8F5E9' },
            { name: '100', hex: 'C8E6C9' },
            { name: '200', hex: 'A5D6A7' },
            { name: '300', hex: '81C784' },
            { name: '400', hex: '66BB6A' },
            { name: '500', hex: '4CAF50' },
            { name: '600', hex: '43A047' },
            { name: '700', hex: '388E3C' },
            { name: '800', hex: '2E7D32' },
            { name: '900', hex: '1B5E20' },
            { name: 'A100', hex: 'B9F6CA' },
            { name: 'A200', hex: '69F0AE' },
            { name: 'A400', hex: '00E676' },
            { name: 'A700', hex: '00C853' }
            ]
        }, {
            name: 'Light Green',
            camel: 'lightGreen',
            colors: [
            { name: '50', hex: 'F1F8E9' },
            { name: '100', hex: 'DCEDC8' },
            { name: '200', hex: 'C5E1A5' },
            { name: '300', hex: 'AED581' },
            { name: '400', hex: '9CCC65' },
            { name: '500', hex: '8BC34A' },
            { name: '600', hex: '7CB342' },
            { name: '700', hex: '689F38' },
            { name: '800', hex: '558B2F' },
            { name: '900', hex: '33691E' },
            { name: 'A100', hex: 'CCFF90' },
            { name: 'A200', hex: 'B2FF59' },
            { name: 'A400', hex: '76FF03' },
            { name: 'A700', hex: '64DD17' }
            ]
        }, {
            name: 'Lime',
            camel: 'lime',
            colors: [
            { name: '50', hex: 'F9FBE7' },
            { name: '100', hex: 'F0F4C3' },
            { name: '200', hex: 'E6EE9C' },
            { name: '300', hex: 'DCE775' },
            { name: '400', hex: 'D4E157' },
            { name: '500', hex: 'CDDC39' },
            { name: '600', hex: 'C0CA33' },
            { name: '700', hex: 'AFB42B' },
            { name: '800', hex: '9E9D24' },
            { name: '900', hex: '827717' },
            { name: 'A100', hex: 'F4FF81' },
            { name: 'A200', hex: 'EEFF41' },
            { name: 'A400', hex: 'C6FF00' },
            { name: 'A700', hex: 'AEEA00' }
            ]
        }, {
            name: 'Yellow',
            camel: 'yellow',
            colors: [
            { name: '50', hex: 'FFFDE7' },
            { name: '100', hex: 'FFF9C4' },
            { name: '200', hex: 'FFF59D' },
            { name: '300', hex: 'FFF176' },
            { name: '400', hex: 'FFEE58' },
            { name: '500', hex: 'FFEB3B' },
            { name: '600', hex: 'FDD835' },
            { name: '700', hex: 'FBC02D' },
            { name: '800', hex: 'F9A825' },
            { name: '900', hex: 'F57F17' },
            { name: 'A100', hex: 'FFFF8D' },
            { name: 'A200', hex: 'FFFF00' },
            { name: 'A400', hex: 'FFEA00' },
            { name: 'A700', hex: 'FFD600' }
            ]
        }, {
            name: 'Amber',
            camel: 'amber',
            colors: [
            { name: '50', hex: 'FFF8E1' },
            { name: '100', hex: 'FFECB3' },
            { name: '200', hex: 'FFE082' },
            { name: '300', hex: 'FFD54F' },
            { name: '400', hex: 'FFCA28' },
            { name: '500', hex: 'FFC107' },
            { name: '600', hex: 'FFB300' },
            { name: '700', hex: 'FFA000' },
            { name: '800', hex: 'FF8F00' },
            { name: '900', hex: 'FF6F00' },
            { name: 'A100', hex: 'FFE57F' },
            { name: 'A200', hex: 'FFD740' },
            { name: 'A400', hex: 'FFC400' },
            { name: 'A700', hex: 'FFAB00' }
            ]
        }, {
            name: 'Orange',
            camel: 'orange',
            colors: [
            { name: '50', hex: 'FFF3E0' },
            { name: '100', hex: 'FFE0B2' },
            { name: '200', hex: 'FFCC80' },
            { name: '300', hex: 'FFB74D' },
            { name: '400', hex: 'FFA726' },
            { name: '500', hex: 'FF9800' },
            { name: '600', hex: 'FB8C00' },
            { name: '700', hex: 'F57C00' },
            { name: '800', hex: 'EF6C00' },
            { name: '900', hex: 'E65100' },
            { name: 'A100', hex: 'FFD180' },
            { name: 'A200', hex: 'FFAB40' },
            { name: 'A400', hex: 'FF9100' },
            { name: 'A700', hex: 'FF6D00' }
            ]
        }, {
            name: 'Deep Orange',
            camel: 'deepOrange',
            colors: [
            { name: '50', hex: 'FBE9E7' },
            { name: '100', hex: 'FFCCBC' },
            { name: '200', hex: 'FFAB91' },
            { name: '300', hex: 'FF8A65' },
            { name: '400', hex: 'FF7043' },
            { name: '500', hex: 'FF5722' },
            { name: '600', hex: 'F4511E' },
            { name: '700', hex: 'E64A19' },
            { name: '800', hex: 'D84315' },
            { name: '900', hex: 'BF360C' },
            { name: 'A100', hex: 'FF9E80' },
            { name: 'A200', hex: 'FF6E40' },
            { name: 'A400', hex: 'FF3D00' },
            { name: 'A700', hex: 'DD2C00' }
            ]
        }, {
            name: 'Brown',
            camel: 'brown',
            colors: [
            { name: '50', hex: 'EFEBE9' },
            { name: '100', hex: 'D7CCC8' },
            { name: '200', hex: 'BCAAA4' },
            { name: '300', hex: 'A1887F' },
            { name: '400', hex: '8D6E63' },
            { name: '500', hex: '795548' },
            { name: '600', hex: '6D4C41' },
            { name: '700', hex: '5D4037' },
            { name: '800', hex: '4E342E' },
            { name: '900', hex: '3E2723' }
            ]
        }, {
            name: 'Grey',
            camel: 'grey',
            colors: [
            { name: '50', hex: 'FAFAFA' },
            { name: '100', hex: 'F5F5F5' },
            { name: '200', hex: 'EEEEEE' },
            { name: '300', hex: 'E0E0E0' },
            { name: '400', hex: 'BDBDBD' },
            { name: '500', hex: '9E9E9E' },
            { name: '600', hex: '757575' },
            { name: '700', hex: '616161' },
            { name: '800', hex: '424242' },
            { name: '900', hex: '212121' }
            ]
        }, {
            name: 'Blue Grey',
            camel: 'blueGrey',
            colors: [
            { name: '50', hex: 'ECEFF1' },
            { name: '100', hex: 'CFD8DC' },
            { name: '200', hex: 'B0BEC5' },
            { name: '300', hex: '90A4AE' },
            { name: '400', hex: '78909C' },
            { name: '500', hex: '607D8B' },
            { name: '600', hex: '546E7A' },
            { name: '700', hex: '455A64' },
            { name: '800', hex: '37474F' },
            { name: '900', hex: '263238' }
            ]
        }, {
            name: 'Misc',
            camel: '',
            colors: [
            { name: 'white', hex: 'FFFFFF', x: 19, y: 0 },
            { name: 'black', hex: '000000', x: 19, y: 1 }
            ]
        }];
        var hexToRgb = function (hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        };
        var cToHex = function (c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        };
        var rgbToHex = function (r, g, b) {
            return "#" + cToHex(r) + cToHex(g) + cToHex(b);
        };
        var h = function (c) {
            if (c == '') { return 0; }
            var t = parseInt(c);
            return t >= 0 && t <= 255 ? t : 0;
        };
        var getName = function (hex) {
            if (!(hex)) { return ''; }
            for (var i = 0; i < 19; i++) {
                for (var j = 0; j < swatches[i].colors.length; j++) {
                    if (swatches[i].colors[j].hex == hex.replace('#', '')) {
                        return swatches[i].camel + swatches[i].colors[j].name;
                    }
                }
            }
            return '';
        };
        return {
            restrict: "E",
            require: 'ngModel',
            link: function ($scope, element, attrs, ngModel) {
                angular.element(element).addClass('materialpicker');
                var selection = [];
                for (var x = 0; x <= 20; x++) {
                    selection.push([]);
                }
                var size = 15;
                var state = {
                    mousedown: false,
                    ignore: false,
                    selected: { color: null, x: 0, y: 0 }
                };
                var container = angular.element('<div>');
                container.addClass('materialpicker-colors');
                container.on('mouseout', function () {
                    if (attrs.hoverModel) {
                        var model = $parse(attrs.hoverModel);
                        model.assign($scope, null);
                        $scope.$apply();
                    }
                });
                container.on('mousedown', function () {
                    state.mousedown = true;
                });
                container.on('mouseup', function () {
                    state.mousedown = false;
                });
                function mouseup() {
                    state.mousedown = false;
                    angular.element(window.document).off('mouseup', mouseup);
                }
                container.on('mouseleave', function () {
                    angular.element(window.document).on('mouseup', mouseup);
                });
                container.on('mouseenter', function () {
                    angular.element(window.document).off('mouseup', mouseup);
                });
                var action = function (color, apply) {
                    selection[state.selected.x][state.selected.y].ele.removeClass('selected');
                    state.selected.color = color.hex;
                    state.selected.x = color.x;
                    state.selected.y = color.y;
                    var camel = swatches[color.x].camel;
                    var format = $parse(attrs.format);
                    if (format() === 'hex') {
                        ngModel.$setViewValue('#' + color.hex);
                    } else {
                        var rgb = hexToRgb(color.hex);
                        ngModel.$setViewValue({
                            hex: '#' + color.hex,
                            name: camel + color.name,
                            r: rgb.r, g: rgb.g, b: rgb.b
                        });
                    }
                    state.ignore = true;
                    selection[color.x][color.y].ele.addClass('selected');
                };
                var isHex = function (hex) {
                    if (typeof hex == 'undefined') { return null; }
                    return hex.match(/^#([0-9A-F]{6})$/i);
                }
                var selectColor = function (hex) {
                    var m = null;
                    if (m = isHex(hex)) {
                        selection[state.selected.x][state.selected.y].ele.removeClass('selected');
                        outer:
                            for (var i = 0; i < swatches.length; i++) {
                                inner:
                                    for (var j = 0; j < swatches[i].colors.length; j++) {
                                        if (swatches[i].colors[j].hex == m[1]) {
                                            selection[i][j].ele.addClass('selected');
                                            state.selected.x = i;
                                            state.selected.y = j;
                                            break outer;
                                        }
                                    }
                            }
                    }
                };
                for (var i = 0; i < 19; i++) {
                    var column = angular.element('<div>');
                    column.css({
                        display: 'inline-block',
                        verticalAlign: 'top'
                    });
                    for (var j = 0; j < swatches[i].colors.length; j++) {
                        var row = angular.element('<div>');
                        selection[i][j] = { ele: row };
                        swatches[i].colors[j].x = i;
                        swatches[i].colors[j].y = j;
                        row.css({
                            background: '#' + swatches[i].colors[j].hex,
                            height: size + 'px'
                        });
                        row.on('mouseover', (function (swatch, color) {
                            return function () {
                                if (attrs.hoverModel) {
                                    var model = $parse(attrs.hoverModel);
                                    var rgb = hexToRgb(color.hex);
                                    model.assign($scope, {
                                        hex: '#' + color.hex,
                                        name: swatch.camel + color.name,
                                        r: rgb.r, g: rgb.g, b: rgb.b
                                    });
                                    $scope.$apply();
                                }
                            };
                        })(swatches[i], swatches[i].colors[j]));
                        row.on('click', (function (color) {
                            return function () {
                                action(color);
                            };
                        })(swatches[i].colors[j]));
                        row.on('mouseover', (function (color) {
                            return function () {
                                if (!state.mousedown
                                    || (color.x === state.selected.x
                                    && color.y === state.selected.y)) { return; }
                                action(color);
                            };
                        })(swatches[i].colors[j]));
                        column.append(row);
                    }
                    container.append(column);
                }
                var white = angular.element('<div>');
                white.css({
                    background: '#FFF',
                    display: 'inline-block',
                    width: (size * 3) + 'px',
                    height: (size * 2) + 'px',
                    position: 'absolute',
                    left: (size * 16) + 'px',
                    top: (size * 10) + 'px'
                });
                selection[19][0] = { ele: white };
                white.on('click', (function (color) {
                    return function () {
                        action(color);
                    };
                })(swatches[19].colors[0]));
                white.on('mouseover', (function (swatch, color) {
                    return function () {
                        if (attrs.hoverModel) {
                            var model = $parse(attrs.hoverModel)
                            model.assign($scope, {
                                hex: '#' + color.hex,
                                name: swatch.camel + color.name,
                                r: 255, g: 255, b: 255
                            });
                            $scope.$apply();
                        }
                        if (!state.mousedown
                            || (color.x === state.selected.x
                                && color.y === state.selected.y)) { return; }
                        action(color);
                    };
                })(swatches[19], swatches[19].colors[0]));
                white.addClass('materialpicker-white');
                container.append(white);
                var black = angular.element('<div>');
                black.css({
                    background: '#000',
                    display: 'inline-block',
                    width: (size * 3) + 'px',
                    height: (size * 2) + 'px',
                    position: 'absolute',
                    left: (size * 16) + 'px',
                    top: (size * 12) + 'px'
                });
                selection[19][1] = { ele: black };
                black.on('click', (function (color) {
                    return function () {
                        action(color);
                    };
                })(swatches[19].colors[1]));
                black.on('mouseover', (function (swatch, color) {
                    return function () {
                        if (attrs.hoverModel) {
                            var model = $parse(attrs.hoverModel)
                            model.assign($scope, {
                                hex: '#' + color.hex,
                                name: swatch.camel + color.name,
                                r: 0, g: 0, b: 0
                            });
                            $scope.$apply();
                        }
                        if (!state.mousedown
                            || (color.x === state.selected.x
                                && color.y === state.selected.y)) { return; }
                        action(color);
                    };
                })(swatches[19], swatches[19].colors[1]));
                container.append(black);
                element.append(container);
                var format = $parse(attrs.format);
                var watch = format() === 'hex' ? '$watch' : '$watchCollection';
                $scope[watch](attrs.ngModel, function (value, oldValue) {
                    if (typeof value == 'undefined') { return; }
                    if (format() !== 'hex') {
                        if (value.hex.match(/^[^#]/)) {
                            value.hex = '#' + value.hex;
                        }
                        var color = hexToRgb(value.hex);
                        if (color) {
                            if ((value.r == color.r || typeof value.r == 'undefined')
                                && (value.g == color.g || typeof value.g == 'undefined')
                                && (value.b == color.b || typeof value.b == 'undefined')) {
                                if (value.r != '') { value.r = color.r; }
                                if (value.g != '') { value.g = color.g; }
                                if (value.b != '') { value.b = color.b; }
                            } else {
                                if (value.hex != oldValue.hex) {
                                    value.r = color.r;
                                    value.g = color.g;
                                    value.b = color.b;
                                } else {
                                    value.hex = rgbToHex(
                                    h(value.r) || 0,
                                    h(value.g) || 0,
                                    h(value.b) || 0
                                    );
                                }
                            }
                        } else {
                            var revertColor = hexToRgb(oldValue.hex);
                            if (revertColor) {
                                value.r = h(revertColor.r) || 0;
                                value.g = h(revertColor.g) || 0;
                                value.b = h(revertColor.b) || 0;
                            }
                        }
                    }
                    value.name = getName(value.hex || oldValue.hex);
                    if (isHex(value.hex || value)) {
                        ngModel.$setValidity('required', true);
                    } else {
                        ngModel.$setValidity('required', false);
                    }
                    var v = format() === 'hex' ? value : value.hex;
                    selectColor(v);
                });
                if (attrs.size) {
                    $scope.$watch(attrs.size, function (nSize) {
                        for (var i = 0; i < selection.length; i++) {
                            for (var j = 0; j < selection[i].length; j++) {
                                selection[i][j].ele.css({
                                    width: nSize + 'px',
                                    height: nSize + 'px'
                                });
                            }
                        }
                        white.css({
                            width: (nSize * 3) + 'px',
                            height: (nSize * 2) + 'px',
                            left: (nSize * 16) + 'px',
                            top: (nSize * 10) + 'px'
                        });
                        black.css({
                            width: (nSize * 3) + 'px',
                            height: (nSize * 2) + 'px',
                            left: (nSize * 16) + 'px',
                            top: (nSize * 12) + 'px'
                        });
                    });
                }
            }
        };
    }
]);
