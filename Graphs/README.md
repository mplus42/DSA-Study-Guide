# Graphs Study Guide

Welcome to the Graphs section of the DSA Study Guide! This guide will help you understand and implement various graph algorithms and concepts.

## Table of Contents

1. [Introduction](#introduction)
2. [Graph Representations](#graph-representations)
3. [Graph Traversal Algorithms](#graph-traversal-algorithms)
    - [Breadth-First Search (BFS)](#breadth-first-search-bfs)
    - [Depth-First Search (DFS)](#depth-first-search-dfs)
4. [Shortest Path Algorithms](#shortest-path-algorithms)
    - [Dijkstra's Algorithm](#dijkstras-algorithm)
    - [Bellman-Ford Algorithm](#bellman-ford-algorithm)
5. [Minimum Spanning Tree Algorithms](#minimum-spanning-tree-algorithms)
    - [Kruskal's Algorithm](#kruskals-algorithm)
    - [Prim's Algorithm](#prims-algorithm)
6. [Advanced Topics](#advanced-topics)
    - [Topological Sorting](#topological-sorting)
    - [Strongly Connected Components](#strongly-connected-components)
7. [References](#references)

## Introduction

Graphs are a fundamental data structure used to model pairwise relations between objects. This section covers the basics of graph theory and its applications in computer science.

## Graph Representations

Graphs can be represented in various ways:
- Adjacency Matrix
- Adjacency List
- Edge List

## Graph Traversal Algorithms

### Breadth-First Search (BFS)

Breadth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or an arbitrary node of a graph) and explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.

### Depth-First Search (DFS)

Depth-First Search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node and explores as far as possible along each branch before backtracking.

## Shortest Path Algorithms

### Dijkstra's Algorithm

Dijkstra's Algorithm finds the shortest path between nodes in a graph, which may represent, for example, road networks.

### Bellman-Ford Algorithm

The Bellman-Ford Algorithm computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph.

## Minimum Spanning Tree Algorithms

### Kruskal's Algorithm

Kruskal's Algorithm is a minimum spanning tree algorithm that finds an edge of the least possible weight that connects any two trees in the forest.

### Prim's Algorithm

Prim's Algorithm is a minimum spanning tree algorithm that starts with a single vertex and adds the lowest weight edges that connect the tree to new vertices.

## Advanced Topics

### Topological Sorting

Topological Sorting of a directed graph is a linear ordering of its vertices such that for every directed edge `uv` from vertex `u` to vertex `v`, `u` comes before `v` in the ordering.

### Strongly Connected Components

A Strongly Connected Component (SCC) of a directed graph is a maximal strongly connected subgraph.

## References

- [Introduction to Algorithms by Cormen, Leiserson, Rivest, and Stein](https://mitpress.mit.edu/books/introduction-algorithms)
- [GeeksforGeeks Graph Data Structure](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)
- [Khan Academy Graph Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms#graph-algorithms)

Happy studying!