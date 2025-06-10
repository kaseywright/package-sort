import { sort, Classification } from "./sort";
import type { Package } from "./sort";

const pkg: Package = {
    width: 100,
    height: 50,
    length: 30,
    mass: 10
};

const result: Classification = sort(pkg);
console.log(`Package classification: ${result}`);