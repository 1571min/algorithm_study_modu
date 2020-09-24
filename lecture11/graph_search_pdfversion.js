class Graph {
    constructor(maxVertex) {
        this.matrix = new Array(maxVertex);
        this.length = maxVertex;

        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i] = new Array(maxVertex);
        }
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    insert(a,b){
        this.matrix[a][b] = 1;
    }

    print(){
        console.log("\nmatrix:\n")
        let graphline = " ";
        let i, j;
        for (i = 0; i < this.matrix.length; i++) {
            for (j = 0; j < this.matrix[i].length; j++) {
                graphline += this.matrix[i][j];
                graphline += " "
                if (j == this.matrix.length - 1) {
                    console.log(graphline);
                    graphline = ' ';
                }
            }
        }
    }
}

const bfs = (g, s) => {
    let color = [];
    let d = [];
    let pi = [];
    for (let i = 0; i < g.length; i++) {
        color[i] = 'white';
        d[i] = 0;
        pi[i] = null;
    }

    let queue = [];
    queue.push(s);
    while(queue.length) {
        let u = queue.shift();
        for (let i = 0; i < g.length; i++) {
            if(g.matrix[u][i] === 1){
                if(color[i]==='white'){
                    color[i] = 'gray';
                    d[i] = d[u] + 1;
                    pi[i] = ''+u+'->'+i;
                    queue.push(i);
                }
            }
        }
        color[u] = 'black';
    }
    return {d,pi}
}
let time = 0;
const dfs = (g) => {
    let color =[]
    for (let i = 0; i < g.length; i++) {
        color[i] = 'white';
    }
    let d =[];
    let f = [];
    for (let i = 0; i < g.length; i++) {
        if(color[i]==='white'){
            dfs_visit(i,g,color,d,f);
        }
    }
    return {d,f}
}

const dfs_visit = (u,g,color,d,f) => {
    color[u] = 'gray';
    time += 1;
    d[u] = time;
    for (let i = 0; i < g.length; i++) {
        if(g.matrix[u][i]===1){
            if(color[i]==='white'){
                dfs_visit(i,g,color,d,f)
            }
        }
    }
    color[u] = 'black';
    time +=1;
    f[u] = time;
}
let bfsGraph = new Graph(9);
bfsGraph.insert(0,1);
bfsGraph.insert(0,2);
bfsGraph.insert(1,4);
bfsGraph.insert(2,4);
bfsGraph.insert(2,6);
bfsGraph.insert(3,1);
bfsGraph.insert(4,3);
bfsGraph.insert(4,7);
bfsGraph.insert(5,2);
bfsGraph.insert(6,5);
bfsGraph.insert(6,7);
bfsGraph.insert(6,8);
bfsGraph.insert(7,6);
bfsGraph.insert(8,7);
bfsGraph.print();

let dfsGraph = new Graph(8);
dfsGraph.insert(0,1);
dfsGraph.insert(0,3);
dfsGraph.insert(0,4);
dfsGraph.insert(1,2);
dfsGraph.insert(1,3);
dfsGraph.insert(2,0);
dfsGraph.insert(4,3);
dfsGraph.insert(4,5);
dfsGraph.insert(5,3);
dfsGraph.insert(6,4);
dfsGraph.insert(6,5);
dfsGraph.insert(6,7);
dfsGraph.insert(7,3);
dfsGraph.print();

const bfs_result = bfs(bfsGraph,0);
const dfs_result = dfs(dfsGraph);

console.log('\nbfs result : ');
console.dir(bfs_result);
console.log('\ndfs result : ');
console.dir(dfs_result.d.map((value,index)=>[value,dfs_result.f[index]]));



