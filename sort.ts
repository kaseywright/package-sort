/**
 * Sorts a package based on its dimensions and mass.
 *
 * @param width - The width of the package in centimeters (cm).
 * @param height - The height of the package in centimeters (cm).
 * @param length - The length of the package in centimeters (cm).
 * @param mass - The mass of the package in kilograms (kg).
 * @returns {string} - Returns "REJECTED", "SPECIAL", or "STANDARD" based on the package properties.
 */
export function sort(width: number, height: number, length: number, mass: number): string {
    const DIMENSION_THRESHOLD = 150;
    const WEIGHT_THRESHOLD = 20;
    const VOLUME_THRESHOLD = 1000000;

    if (! validateParameters(width, height, length, mass)) {
        throw new Error("Invalid parameter: all inputs must be a valid positive number.");
    }

    let is_bulky = (width * height * length) >= VOLUME_THRESHOLD 
        || width >= DIMENSION_THRESHOLD 
        || height >= DIMENSION_THRESHOLD 
        || length >= DIMENSION_THRESHOLD;

    let is_heavy = mass >= WEIGHT_THRESHOLD;

    if (is_bulky && is_heavy) {
        return "REJECTED";
    } else if (is_bulky || is_heavy) {
        return "SPECIAL";
    } else {
        return "STANDARD";
    }
}

/**
 * Validates that all parameters are positive numbers.
 *
 * @param width - The width in centimeters (cm).
 * @param height - The height in centimeters (cm).
 * @param length - The length in centimeters (cm).
 * @param mass - The mass in kilograms (kg).
 * @returns {boolean} - True if all parameters are valid positive numbers, false otherwise.
 */
function validateParameters(width: number, height: number, length: number, mass: number): boolean {
    if (isNaN(width) || width <= 0) {
        return false;
    }
    if (isNaN(height) || height <= 0) {
        return false;
    }
    if (isNaN(length) || length <= 0) {
        return false;
    }
    if (isNaN(mass) || mass <= 0) {
        return false;
    }

    return true;
}
