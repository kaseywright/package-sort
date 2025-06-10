/**
 * Represents a package with dimensions and mass.
 * All dimensions are in centimeters, mass is in kilograms.
 */
export interface Package {
    width: number;
    height: number;
    length: number;
    mass: number;
}

/**
 * Classification constants for package classification.
 */
export enum Classification {
    STANDARD = "STANDARD",
    SPECIAL = "SPECIAL",
    REJECTED = "REJECTED"
}

/**
 * Threshold constants for package classification.
 * Could be set via environment variables or configuration file.
 */
const DIMENSION_THRESHOLD = 150; // cm
const WEIGHT_THRESHOLD = 20; // kg
const VOLUME_THRESHOLD = 1000000; // cubic cm

/**
 * Sorts a package based on its dimensions and mass.
 *
 * @param pkg - The package to sort.
 * @returns {Classification} - Returns Classification.REJECTED, Classification.SPECIAL, or Classification.STANDARD based on the package properties.
 * @throws {Error} - Throws an error if any of the package parameters are non-numeric, negative, or zero.
 */
export function sort(pkg: Package): Classification {
    if (! validateParameters(pkg)) {
        throw new Error("Invalid package: all package parameters must be valid positive numbers.");
    }

    let is_bulky = (pkg.width * pkg.height * pkg.length) >= VOLUME_THRESHOLD 
        || pkg.width >= DIMENSION_THRESHOLD 
        || pkg.height >= DIMENSION_THRESHOLD 
        || pkg.length >= DIMENSION_THRESHOLD;

    let is_heavy = pkg.mass >= WEIGHT_THRESHOLD;

    if (is_bulky && is_heavy) {
        return Classification.REJECTED;
    } else if (is_bulky || is_heavy) {
        return Classification.SPECIAL;
    } else {
        return Classification.STANDARD;
    }
}

/**
 * Validates that a package has all required numeric, positive properties.
 *
 * @param pkg - The package to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateParameters(pkg: Package): boolean {
    if (! isPositiveNumber(pkg.width) 
        || !isPositiveNumber(pkg.height) 
        || !isPositiveNumber(pkg.length) 
        || !isPositiveNumber(pkg.mass)
    ) {
        return false;
    }

    return true;
}

function isPositiveNumber(value: number): boolean {
    return typeof value === 'number' && !isNaN(value) && value > 0;
}