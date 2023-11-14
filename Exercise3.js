function findSafePaths(garden) {
    const numRows = garden.length;
    const numCols = garden[0].length;
    const safePaths = [];

    for (let row = 0; row < numRows; row++) {
        const path = [];
        let isPathSafe = true;

        for (let col = 0; col < numCols; col++) {
            if (garden[row][col] === 1) {
                isPathSafe = false;
                break; // Stop if a bomb is encountered
            }
            let a =path.push(0); // Mark each cell as 0 in the path
            console.log(a);
        }

        if (isPathSafe) {
            // Mark the last cell in the path as 1 (reached the right side safely)
            c = path[path.length - 1] = 1;
            console.log(c);
            let b = safePaths.push(path);
            console.log(b);
        }
    }
    return safePaths;
}

// Example usage:
const garden = [
    [0, 1, 1],
    [0, 1, 1],
    [0, 1, 1],
    [0, 1, 1],
    [0, 0, 1]
];

const safePaths = findSafePaths(garden);

console.log(safePaths);
// Output: [ [0, 0, 0, 0, 0], [0, 0, 0, 0, 1] ]
