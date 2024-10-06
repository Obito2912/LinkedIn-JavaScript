/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Hoodies {
    constructor(
        brand,
        color,
        size,
        gender,
        pockets,
        keepIt
    ) {
        this.brand = brand,
        this.color = color,
        this.size = size,
        this.gender = gender,
        this.pockets = pockets,
        this.keepIt = keepIt
    }
    shouldKeep(keepIt) {
        this.keepIt = keepIt;
    }
}

export default Hoodies;