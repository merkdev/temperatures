"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TempConverter = /** @class */ (function () {
    function TempConverter(init) {
        if (init === void 0) { init = null; }
        this.degree = null;
        this.degree = init;
    }
    var _a;
    _a = TempConverter;
    /**
     * Set precision for floating point numbers
     * // TODO - this is not yet implemented
     *
     * @param precision number
     * @returns number
     */
    TempConverter.setPrecision = function (precision) { return _a.degree.toFixed(precision); };
    /**
     * Convert Celsius to Fahrenheit
     *
     * @param celsius number
     * @returns {number}
     */
    TempConverter.CToF = function (celsius) { return celsius * 9 / 5 + 32; };
    /**
     * Convert Celsius to Kelvin
     *
     * @param celsius number
     * @returns {number}
     */
    TempConverter.CToK = function (celsius) { return celsius + 273.15; };
    /**
     * Convert Fahrenheit to Celsius
     *
     * @param fahrenheit number
     * @returns {number}
     */
    TempConverter.FToC = function (fahrenheit) { return (fahrenheit - 32) * 5 / 9; };
    /**
     * Convert Fahrenheit to Kelvin
     *
     * @param fahrenheit number
     * @returns {number}
     */
    TempConverter.FToK = function (fahrenheit) { return (fahrenheit - 32) * 5 / 9 + 273.15; };
    /**
     * Convert Kelvin to Celsius
     *
     * @param kelvin number
     * @returns {number}
     */
    TempConverter.KToC = function (kelvin) { return kelvin - 273.15; };
    /**
     * Convert Kelvin to Fahrenheit
     *
     * @param kelvin number
     * @returns {number}
     */
    TempConverter.KToF = function (kelvin) { return (kelvin - 273.15) * 9 / 5 + 32; };
    /**
     * Convert via convert function with parameters
     *
     * @param options IConvertOptions: object
     * @returns number
     */
    TempConverter.convert = function (_b) {
        var from = _b.from, to = _b.to, value = _b.value;
        return _a["".concat(from, "To").concat(to)](value);
    };
    return TempConverter;
}());
exports.default = TempConverter;
