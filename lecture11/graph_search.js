let graphAdj;
let visited;
let stack=[];
let queue = [];

const initGraph = (maxVertex) => {
    graphAdj = new Array(maxVertex);
    visited = new Array(maxVertex);
    for (let i = 0; i < graphAdj.length; i++) {
        graphAdj[i] = new Array(maxVertex);
    }
    for (let i = 0; i < graphAdj.length; i++) {
        for (let j = 0; j < graphAdj[i].length; j++) {
            graphAdj[i][j] = 0;
        }
    }
}
const initVisited = () =>{
    for (let i = 0; i < visited.length; i++) {
        visited[i] = 0;
    }
}
const printGraph = () => {
    let graphline = " ";
    let i, j;
    for (i = 0; i < graphAdj.length; i++) {
        for (j = 0; j < graphAdj[i].length; j++) {
            graphline += graphAdj[i][j];
            graphline += " "
            if (j == graphAdj.length - 1) {
                console.log(graphline);
                graphline = ' ';
            }
        }
    }
}
const insertGraph = (a,b) => {
    for (let i = 0; i < graphAdj.length; i++) {
        for (let j = 0; j < graphAdj[i].length; j++) {
            if (i === a && j === b) {
                graphAdj[i][j] = 1;
                graphAdj[j][i] = 1;
            }
        }
    }
}
const graph_search = (node) => {
    stack.push(node);
    while (stack.length) {
        node = stack.pop();
        if (visited[node] === 0) {
            visited[node] = 1;
            console.log(`we visited ${node}`)
            for (let j = 0; j < graphAdj[node].length; j++) {
                if (graphAdj[node][j] === 1){
                    stack.push(j);
                }
            }
        }
    }
}
const bfs = (node) => {
    visited[node] = 1;
    queue.push(node);
    while (queue.length) {
        let visiting = queue.shift();
        console.log(`we visited ${visiting}`)
        for (let j = 0; j < graphAdj[visiting].length; j++) {
            if ((graphAdj[visiting][j] === 1) && (visited[j] === 0)) {
                visited[j] = 1;
                queue.push(j);
            }
        }
    }
}

initGraph(5);
insertGraph(0,2);
insertGraph(2,3);
insertGraph(0,1);
insertGraph(2,4);
insertGraph(3,4);
insertGraph(0,4);
insertGraph(1,2);

printGraph();

console.log('DFS : ');
initVisited();
graph_search(0);

console.log('BFS : ');
initVisited();
bfs(0);
