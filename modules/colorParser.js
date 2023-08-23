const color = require("../colorDefine.json")
/**
 * 
 * @param {keyof color} colorName 
 */
exports.nameToSection = (colorName) => {
    if (colorName in color) return color[colorName]
    return color.red
}