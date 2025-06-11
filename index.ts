import { sort, Classification } from "./sort";
import type { Package } from "./sort";

let pkg: Package = {
    width: 100,
    height: 50,
    length: 30,
    mass: 10
};

let result: Classification = sort(pkg);
console.log(`Package classification: ${result}  - ${pkg.width} x ${pkg.height} x ${pkg.length} x ${pkg.mass}`);

pkg.width = 200;
result = sort(pkg);
console.log(`Package classification: ${result}  - ${pkg.width} x ${pkg.height} x ${pkg.length} x ${pkg.mass}`);

pkg.mass = 25;
result = sort(pkg);
console.log(`Package classification: ${result}  - ${pkg.width} x ${pkg.height} x ${pkg.length} x ${pkg.mass}`);