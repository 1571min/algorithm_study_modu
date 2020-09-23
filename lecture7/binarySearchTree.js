class Node {
    constructor(value) {
        this.left=null;
        this.p = null
        this.right=null;
        this.key=value;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

const tempTree = new Tree();
treeInsertion(tempTree,new Node(3));
treeInsertion(tempTree,new Node(2));
treeInsertion(tempTree,new Node(1));
treeInsertion(tempTree,new Node(8));
treeInsertion(tempTree,new Node(6));
treeInsertion(tempTree,new Node(5));
treeInsertion(tempTree,new Node(7));

// treeInsertion(tempTree,new Node(25));
// treeInsertion(tempTree,new Node(32));
// treeInsertion(tempTree,new Node(1));
// treeInsertion(tempTree,new Node(7));
// treeInsertion(tempTree,new Node(10));
// treeInsertion(tempTree,new Node(8));
// treeInsertion(tempTree,new Node(20));
// treeInsertion(tempTree,new Node(14));
// treeInsertion(tempTree,new Node(19));




function inorder(node) {
    if(node){
        inorder(node.left);
        console.log(node.key);
        inorder(node.right);
    }
}

function search(node,k) {
    if(node === null || node.key === k){
        if(!node){
            throw(new Error('값이 존재하지 않음'));
        }
        return node;
    }
    if( k < node.key){
        return search(node.left,k)
    }else{
        return search(node.right,k)
    }
}

function treeMinimum(node) {
    while(node.left!==null){
        node = node.left;
    }
    return node;
}

function treeMaximum(node) {
    while(node.right!==null){
        node = node.right;
    }
    return node;
}

function treeSuccessor(node) {
    if(node.right!==null)
        return treeMinimum(node.right)
    let y = node.p;
    while(y!==null && node===y.right){
        node = y;
        y = y.p;
    }
    return y;
}

function treeInsertion(tree, node) {
    let y = null;
    let x = tree.root;
    while(x!==null){
        y = x;
        if(node.key < x.key){
            x = x.left;
        }else{
            x = x.right;
        }
    }
    node.p = y;
    if(y===null){
        tree.root = node;
    }else {
        if(node.key < y.key){
            y.left = node;
        }else{
            y.right = node;
        }
    }
}

function treeDeleteNode(tree,node) {
    let y = null;
    let x = null;

    //
    if(node.left===null || node.right===null){
        y = node;
    }else{
        y = treeSuccessor(node);
    }

    //
    if(y.left !== null){
        x = y.left;
    }else{
        x = y.right;
    }

    //
    if (x !==null) x.p = y.p;

    //
    if(y.p === null){
        tree.root = x;
    }else{
        if (y === y.p.left){
            y.p.left = x;
        }else{
            y.p.right = x;
        }
    }
    if(y !== node){
        node.key = y.key;
    }
    return y;
}

//
//      3
//  1       8
//   2     6
//       5  7

console.log('삭제 전 ');
inorder(tempTree.root);
treeDeleteNode(tempTree.root,search(tempTree.root,3));

//
//      5
//  1       8
//   2     6
//          7
console.log('삭제 후 ');
inorder(tempTree.root);
// console.log(search(tempTree.root,8).left.key);
// console.log(search(tempTree.root,20).right.key);
