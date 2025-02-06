class Graph {
    constructor() {
        this.adjacencyList = {};
        this.undirected = true; // Option to make the graph directed or undirected
    }

    addVertex(vertex) {
        // If vertex does not already exist, create it
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        // Ensure both vertices exist in the graph
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1); // If vertex1 doesn't exist, add it
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2); // If vertex2 doesn't exist, add it
        }

        // Add the edge from vertex1 to vertex2
        this.adjacencyList[vertex1].push(vertex2);

        // If undirected, also add the edge from vertex2 to vertex1
        if (this.undirected) {
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    printGraph() {
        // Loop through the adjacency list and print each vertex with its neighbors
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} --> ${this.adjacencyList[vertex].join(", ")}`);
        }
    }
}

let graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(1, 2);
graph.addEdge(3, 2);
graph.addEdge(1, 3);
graph.printGraph();
