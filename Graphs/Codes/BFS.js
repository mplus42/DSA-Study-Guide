/*
Use a queue
Mark nodes as visited
Process neighbors iteratively
*/
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v); // For undirected graph
    }

    bfs(startingNode) {
        let visited = new Array(this.vertices).fill(false);
        let queue = [];

        visited[startingNode] = true;
        queue.push(startingNode);

        while (queue.length > 0) {
            let currentNode = queue.shift();
            console.log(currentNode);

            let neighbors = this.adjList.get(currentNode);
            for (let i in neighbors) {
                let neighbor = neighbors[i];
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example usage:
let g = new Graph(6);
let vertices = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(3, 5);
g.addEdge(4, 5);

console.log("BFS starting from vertex 0:");
g.bfs(0);