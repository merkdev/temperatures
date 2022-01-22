interface IConvertOptions {
	from: "C" | "F" | "K";
	to: "C" | "F" | "K";
  value: number;
}

export default class TempConverter {
	private degree: number | null = null;

	constructor(init = null) {
    this.degree = init;
  }

	/**
	 * Set precision for floating point numbers
	 * // TODO - this is not yet implemented
	 *
	 * @param precision number
	 * @returns number
	 */
	static setPrecision = (precision: number) => this.degree.toFixed(precision);

	/**
	 * Convert Celsius to Fahrenheit
	 *
	 * @param celsius number
	 * @returns {number}
	 */
	static CToF = (celsius: number): number => celsius * 9 / 5 + 32;

	/**
	 * Convert Celsius to Kelvin
	 *
	 * @param celsius number
	 * @returns {number}
	 */
	static CToK = (celsius: number): number => celsius + 273.15;

	/**
	 * Convert Fahrenheit to Celsius
	 *
	 * @param fahrenheit number
	 * @returns {number}
	 */
	static FToC = (fahrenheit: number): number => (fahrenheit - 32) * 5 / 9;

	/**
	 * Convert Fahrenheit to Kelvin
	 *
	 * @param fahrenheit number
	 * @returns {number}
	 */
	static FToK = (fahrenheit: number): number => (fahrenheit - 32) * 5 / 9 + 273.15;

	/**
	 * Convert Kelvin to Celsius
	 *
	 * @param kelvin number
	 * @returns {number}
	 */
	static KToC = (kelvin: number): number => kelvin - 273.15;

	/**
	 * Convert Kelvin to Fahrenheit
	 *
	 * @param kelvin number
	 * @returns {number}
	 */
	static KToF = (kelvin: number): number => (kelvin - 273.15) * 9 / 5 + 32;

	/**
	 * Convert via convert function with parameters
	 *
	 * @param options IConvertOptions: object
	 * @returns number
	 */
  static convert = ({ from, to, value }: IConvertOptions): number => this[`${from}To${to}`](value);
	static value: any;
	static degree: any;
}