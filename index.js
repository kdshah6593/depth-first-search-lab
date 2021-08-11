function depthFirstSearch(rootNode, vertices, edges){
    let stack = [rootNode];
    let visited = [rootNode];

    while(stack.length != 0){
        let firstNode = stack.pop();

        if (!firstNode.discovered) {
            firstNode.discovered = true;
            let adjacents = findAdjacent(firstNode.name, vertices, edges);
            for (const adjacent of adjacents) {
                stack.push(adjacent);
                visited.push(adjacent);
            }
        }
    }

    return visited;
}

function findAdjacent(vertexName, vertices, edges){
    const filteredEdges = edges.filter(edge => edge[0] === vertexName || edge[1] === vertexName ).flat()
    const filteredVertices = filteredEdges.filter(edge => edge !== vertexName)
    const adjacents = []

    for (let i = 0; i < filteredVertices.length; i++) {
        if (vertices.find(vertex => vertex.name === filteredVertices[i] && vertex.discovered === null)) {
            adjacents.push(vertices.find(vertex => vertex.name === filteredVertices[i] && vertex.discovered === null))
        }
    }
    return adjacents
}