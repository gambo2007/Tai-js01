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
                break; 
            }
            let a =path.push(0);
            console.log(a);
        }

        if (isPathSafe) {
            c = path[path.length - 1] = 1;
            console.log(c);
            let b = safePaths.push(path);
            console.log(b);
        }
    }
    return safePaths;
}

const garden = [
    [0, 1, 1],
    [0, 1, 1],
    [0, 1, 1],
    [0, 1, 1],
    [0, 0, 1]
];

const safePaths = findSafePaths(garden);

console.log(safePaths);
