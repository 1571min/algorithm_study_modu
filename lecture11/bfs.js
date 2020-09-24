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

const bfs_result = bfs(bfsGraph,0)

console.log('\nbfs result : ');
console.dir(bfs_result);



