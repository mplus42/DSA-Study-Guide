// A simple representation of graph using JavaScript

// A utility function to add an edge in an undirected graph.
function addEdge(adj, u, v) {
    adj[u].push(v);
    adj[v].push(u);
}

// A utility function to print the adjacency list representation of graph
function printGraph(adj, V) {
    for (let v = 0; v < V; ++v) {
        let output = `\n Adjacency list of vertex ${v}\n head `;
        for (let x of adj[v]) {
            output += `-> ${x}`;
        }
        console.log(output);
    }
}

// Driver code
const V = 5;
const adj = Array.from({ length: V }, () => []);
addEdge(adj, 0, 1);
addEdge(adj, 0, 4);
addEdge(adj, 1, 2);
addEdge(adj, 1, 3);
addEdge(adj, 1, 4);
addEdge(adj, 2, 3);
addEdge(adj, 3, 4);
printGraph(adj, V);

    