var orangesRotting = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let queue = [];
    let freshCount = 0;
    let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let minutes = 0;

    // Step 1: Identify all initially rotten oranges and count fresh ones
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }

    // Step 2: Apply BFS to rot fresh oranges 
    while (queue.length > 0 && freshCount > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [r, c] = queue.shift();
            for (let [dr, dc] of directions) {
                let newRow = r + dr;
                let newCol = c + dc;

                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol]);
                    freshCount--;
                }
            }
        }
        minutes++;
    }

    return freshCount === 0 ? minutes : -1;
};
