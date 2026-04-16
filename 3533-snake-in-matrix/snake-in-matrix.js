/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let row = 0, col = 0;

    for (let cmd of commands) {
        if (cmd === "UP") row--;
        else if (cmd === "DOWN") row++;
        else if (cmd === "LEFT") col--;
        else if (cmd === "RIGHT") col++;
    }

    return row * n + col;
};


