export function bfsShortestPath(graph, start, end) {
    const queue = [start];
    const visited = new Set([start]);
    const parent = {}; // para reconstruir el path

    while (queue.length > 0) {
        const node = queue.shift();
        if (node === end) {
            // reconstruir camino
            const path = [];
            let cur = end;
            while (cur) {
                path.push(cur);
                cur = parent[cur];
            }
            return path.reverse();
        }

        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                parent[neighbor] = node;
                queue.push(neighbor);
            }
        }
    }

    return null; // sin camino
}