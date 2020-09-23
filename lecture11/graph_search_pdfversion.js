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
    return {color,d,pi}
}
const dfs = (g) => {
    let color =[]
    for (let i = 0; i < g.length; i++) {
        color[i] = 'white';
    }
    let time = 0;
    let d =[];
    let f = [];
    for (let i = 0; i < g.length; i++) {
        if(color[i]==='white'){
            dfs_visit(i,g,color,time,d,f);
        }
    }
    return {d,f}
}

const dfs_visit = (u,g,color,time,d,f) => {
    color[u] = 'gray';
    time += 1;
    d[u] = time;
    for (let i = 0; i < g.length; i++) {
        if(g.matrix[u][i]){
            if(color[i]==='white'){
                dfs_visit(u,g,color,time,d,f)
            }
        }
    }
    color[u] = 'black';
    time +=1;
    f[u] = time;
}
let tempG = new Graph(9);
tempG.insert(0,1);
tempG.insert(0,2);
tempG.insert(1,4);
tempG.insert(2,4);
tempG.insert(2,6);
tempG.insert(3,1);
tempG.insert(4,7);
tempG.insert(5,2);
tempG.insert(6,5);
tempG.insert(6,7);
tempG.insert(6,8);
tempG.insert(7,6);
tempG.insert(8,7);

tempG.print();

const bfs_result = bfs(tempG,0);
const dfs_result = dfs(tempG,0);

console.dir(bfs_result);
console.dir(dfs_result);



