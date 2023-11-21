function findAllSafeWays(garden) {
    const numRows = garden.length;
    const numCols = garden[0].length;
    const safeWays = [];

    for (let row = 0; row < numRows; row++) {
        const path = [];
        let isSafe = true;

        for (let col = 0; col < numCols; col++) {
            if (garden[row][col] === 1) {
                isSafe = false;
                break;
            }
            path.push(0);
        }

        if (isSafe) {
            path[numCols - 1] = 0;
            safeWays.push([...path]);

            path[numCols - 1] = 1;
            safeWays.push([...path]);
        }
    }

    return safeWays;
}

function changeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const transposedMatrix = new Array(numCols).fill(0).map(() => new Array(numRows).fill(0));

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            transposedMatrix[col][row] = matrix[row][col];
        }
    }

    return transposedMatrix;
}

const garden = [
    [0, 1, 1],
    [0, 1, 1],
    [0, 1, 1],
    [0, 1, 1],
    [0, 0, 1]
];

const transposedMatrix = changeMatrix(garden);

const safeWays = findAllSafeWays(transposedMatrix);
console.log(safeWays);