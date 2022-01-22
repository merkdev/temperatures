declare module 'temperatures' {
  export const degree: number | null;

  /**
	 * Set precision for floating point numbers
	 *
	 * @param precision number
	 * @returns number
	 */
  export function setPrecision(precision: number): number;

  /**
   * Convert Celsius to Fahrenheit
   *
   * @param celsius number
   * @returns {number}
   */
  export function CToF(celsius: number): number;

  /**
   * Convert Celsius to Kelvin
   *
   * @param celsius number
   * @returns {number}
   */
  export function CToK(celsius: number): number;

  /**
   * Convert Fahrenheit to Celsius
   *
   * @param fahrenheit number
   * @returns {number}
   */
  export function FToC(fahrenheit: number): number;

  /**
   * Convert Fahrenheit to Kelvin
   *
   * @param fahrenheit number
   * @returns {number}
   */
  export function FToK(fahrenheit: number): number;

  /**
   * Convert Kelvin to Celsius
   *
   * @param kelvin number
   * @returns {number}
   */
  export function KToC(kelvin: number): number;

  /**
   * Convert Kelvin to Fahrenheit
   *
   * @param kelvin number
   * @returns {number}
   */
  export function KToF(kelvin: number): number;

  /**
   * Convert any format to any format
   * @param options object
   * @returns {number}
   */
  export function convert(options: object): number;
}