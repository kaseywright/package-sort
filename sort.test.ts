import { sort, Classification, type Package } from "./sort";

describe("sort", () => {
    // Boundary: exactly at thresholds
    it("classifies as SPECIAL when width is exactly at threshold", () => {
        const pkg: Package = { width: 150, height: 10, length: 10, mass: 1 };
        expect(sort(pkg)).toBe(Classification.SPECIAL);
    });
    
    it("classifies as SPECIAL when mass is exactly at threshold", () => {
        const pkg: Package = { width: 10, height: 10, length: 10, mass: 20 };
        expect(sort(pkg)).toBe(Classification.SPECIAL);
    });

    // Boundary: just below thresholds
    it("classifies as STANDARD when just below all thresholds", () => {
        const pkg: Package = { width: 99, height: 99, length: 99, mass: 19.9 };
        expect(sort(pkg)).toBe(Classification.STANDARD);
    });

    // Boundary: just above thresholds
    it("classifies as SPECIAL when just above width threshold", () => {
        const pkg: Package = { width: 150.1, height: 10, length: 10, mass: 1 };
        expect(sort(pkg)).toBe(Classification.SPECIAL);
    });

    it("classifies as SPECIAL when just above mass threshold", () => {
        const pkg: Package = { width: 10, height: 10, length: 10, mass: 20.1 };
        expect(sort(pkg)).toBe(Classification.SPECIAL);
    });

    // Volume threshold
    it("classifies as SPECIAL when volume is exactly at threshold", () => {
        const pkg: Package = { width: 100, height: 100, length: 100, mass: 1 };
        expect(sort(pkg)).toBe(Classification.SPECIAL);
    });

    it("classifies as SPECIAL when volume is just above threshold", () => {
        const pkg: Package = { width: 100, height: 100, length: 100.01, mass: 1 };
        expect(sort(pkg)).toBe(Classification.SPECIAL);
    });

    // Missing/undefined fields
    it("throws error when width is missing", () => {
        const pkg = { height: 10, length: 10, mass: 1 } as unknown as Package;
        expect(() => sort(pkg)).toThrow();
    });

    it("throws error when mass is undefined", () => {
        const pkg = { width: 10, height: 10, length: 10, mass: undefined } as unknown as Package;
        expect(() => sort(pkg)).toThrow();
    });

    // Floating point values
    it("classifies as SPECIAL for floating point just above threshold", () => {
        const pkg: Package = { width: 150.0001, height: 10, length: 10, mass: 1 };
        expect(sort(pkg)).toBe(Classification.SPECIAL);
    });

    // Extreme values
    it("classifies as SPECIAL for extremely large width", () => {
        const pkg: Package = { width: 1e6, height: 10, length: 10, mass: 1 };
        expect(sort(pkg)).toBe(Classification.SPECIAL);
    });

    it("classifies as STANDARD for very small positive mass", () => {
        const pkg: Package = { width: 10, height: 10, length: 10, mass: 0.0001 };
        expect(sort(pkg)).toBe(Classification.STANDARD);
    });

    it("classifies as STANDARD when under all thresholds", () => {
        const pkg: Package = { width: 10, height: 10, length: 10, mass: 1 };
        expect(sort(pkg)).toBe(Classification.STANDARD);
    });

    it("classifies as SPECIAL when bulky only", () => {
        const pkg: Package = { width: 200, height: 10, length: 10, mass: 1 };
        expect(sort(pkg)).toBe(Classification.SPECIAL);
    });

    it("classifies as SPECIAL when heavy only", () => {
        const pkg: Package = { width: 10, height: 10, length: 10, mass: 25 };
        expect(sort(pkg)).toBe(Classification.SPECIAL);
    });

    it("classifies as REJECTED when both bulky and heavy", () => {
        const pkg: Package = { width: 200, height: 200, length: 200, mass: 25 };
        expect(sort(pkg)).toBe(Classification.REJECTED);
    });

    // Error conditions
    it("throws error on negative dimensions", () => {
        const pkg: Package = { width: -10, height: 10, length: 10, mass: 1 };
        expect(() => sort(pkg)).toThrow();
    });

    it("throws error on zero mass", () => {
        const pkg: Package = { width: 10, height: 10, length: 10, mass: 0 };
        expect(() => sort(pkg)).toThrow();
    });

    it("throws error on non-numeric input", () => {
        const pkg = { width: "a", height: 10, length: 10, mass: 1 } as unknown as Package;
        expect(() => sort(pkg)).toThrow();
    });

    // Edge: zero for each dimension
    it("throws error on zero width", () => {
        const pkg: Package = { width: 0, height: 10, length: 10, mass: 1 };
        expect(() => sort(pkg)).toThrow();
    });

    it("throws error on zero height", () => {
        const pkg: Package = { width: 10, height: 0, length: 10, mass: 1 };
        expect(() => sort(pkg)).toThrow();
    });
    it("throws error on zero length", () => {
        const pkg: Package = { width: 10, height: 10, length: 0, mass: 1 };
        expect(() => sort(pkg)).toThrow();
    });

    // Edge: negative for each property
    it("throws error on negative height", () => {
        const pkg: Package = { width: 10, height: -10, length: 10, mass: 1 };
        expect(() => sort(pkg)).toThrow();
    });

    it("throws error on negative length", () => {
        const pkg: Package = { width: 10, height: 10, length: -10, mass: 1 };
        expect(() => sort(pkg)).toThrow();
    });

    it("throws error on negative mass", () => {
        const pkg: Package = { width: 10, height: 10, length: 10, mass: -1 };
        expect(() => sort(pkg)).toThrow();
    });
});
