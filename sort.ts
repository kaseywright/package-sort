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

sort(1, 2, 3, 5); //?
sort(1, 2, 3, 40); //? 
sort(1, 2, 200, 10); //?
sort(1, 200, 3, 5); //?
sort(200, 2, 3, 5); //?
sort(1, 2, 3, 20); //?
sort(1, 2, 150, 20); //?
sort(1, 150, 3, 20); //?
sort(150, 2, 3, 20); //?
sort("1", 2, 3, 20); //?
sort(1, "2", 3, 20); //?
sort(1, 2, "3", 20); //?
sort(1, 2, 3, "20"); //?
sort(-13, 20, 20, 15); //?
sort(13, -20, 20, 15);
sort(13, 20, -20, 15);
sort(13, 20, 20, -15);
