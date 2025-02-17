/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numIslands = 0
    let rows = grid.length
    let cols = grid[0].length
    let directions = [ [-1,0], [0,1], [1,0], [0,-1] ]

    function bfs(row,col){
        let queue = [[row,col]]
        grid[row][col] = "0" //mark as visited

        
        while (queue.length > 0) {
            let [r,c] = queue.shift()

            for(let [dr, dc] of directions) {
                let newRow = dr + r
                let newCol = dc + c

                if(newRow >= 0 && newRow < rows && newCol >=0 && newCol < cols && grid[newRow][newCol] === "1"){
                    queue.push([newRow,newCol])
                    grid[newRow][newCol] = "0"
                }
            }
        }
    }

  
    for (let i = 0 ; i < rows ; i++){
        for (let j = 0 ; j < cols ; j++){
            if(grid[i][j] === '1') {
                numIslands++
                bfs(i,j)
            }
        }
    }
    return numIslands
};