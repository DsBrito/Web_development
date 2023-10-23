
 module.exports = function (...names) {
    console.log("function export");
    return names.map(name => name.toUpperCase());
}
 