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

const dfs_result = dfs(dfsGraph);

console.log('\ndfs result : ');
console.dir(dfs_result.d.map((value,index)=>[value,dfs_result.f[index]]));



