const nullNode = {
    key: null,
    color: 'black'
};
class Node {
    constructor(value) {
        this.left= null;
        this.p = nullNode
        this.right=null;
        this.key=value;
        this.color = 'black';
    }
}
class Tree {
    constructor() {
        this.root = nullNode;
    }
}



// 1 3 4 5 6 으로 구성된 트리\
// 1 3 4 5 6
// for (let i = 1000; i >= 1; i--) {
//     insertion(tempTree,new Node(Math.floor(Math.random()*100000+1)));
// }
const tempTree = new Tree();

insertion(tempTree,new Node(33));
insertion(tempTree,new Node(1));
insertion(tempTree,new Node(6));
insertion(tempTree,new Node(10));
insertion(tempTree,new Node(14));
insertion(tempTree,new Node(28));
insertion(tempTree,new Node(8));
insertion(tempTree,new Node(3));
insertion(tempTree,new Node(7));
insertion(tempTree,new Node(11));
insertion(tempTree,new Node(19));
insertion(tempTree,new Node(21));
 //     7
 // 4         9
 //   5     8  10

function rb_insert_fixup(tree, z) {
    while( z.p.color === "red") {
        if( z.p === z.p.p.left ){
            let y = z.p.p.right;
            if( y.color === 'red'){
                z.p.color = 'black';
                y.color = 'black';
                z.p.p.color = 'red';
                z = z.p.p;
            }else {
                if( z === z.p.right){
                    z = z.p;
                    rotations_left(tree,z)
                }
                z.p.color = 'black';
                z.p.p.color = 'red'
                rotations_right(tree,z.p.p);
            }
        }else {
            let y = z.p.p.left;
            if( y.color === 'red'){
                z.p.color = 'black';
                y.color = 'black';
                z.p.p.color = 'red';
                z = z.p.p;
            }else {
                if( z === z.p.left){
                    z = z.p;
                    rotations_right(tree,z)
                }
                z.p.color = 'black';
                z.p.p.color = 'red'
                rotations_left(tree,z.p.p);
            }
        }
    }

    tree.root.color = 'black';
}
function rotations_left(tree,x) {
    let y = x.right;
    x.right = y.left;
    if( y.left !== nullNode) {
        y.left.p = x;
    }
    y.p = x.p;
    if( x.p === nullNode ){
        tree.root = y;
    }else{
        if ( x === x.p.left ){
            x.p.left = y
        }else {
            x.p.right = y
        }
    }
    y.left = x;
    x.p = y;
}
function rotations_right(tree,x) {
    let y = x.left;
    x.left = y.right;
    if( y.right !== nullNode) {
        y.right.p = x;
    }
    y.p = x.p;
    if( x.p === nullNode ){
        tree.root = y;
    }else{
        if ( x === x.p.left ){
            x.p.left = y
        }else {
            x.p.right = y
        }
    }
    y.right = x;
    x.p = y;
}
function insertion(tree, z) {
    let y = nullNode;
    let x = tree.root;
    while( x !== nullNode){
        y = x;
        if(z.key< x.key){
            x = x.left;
        }else{
            x = x.right;
        }
    }
    z.p = y;
    if ( y === nullNode ){
        tree.root = z;
    }else {
        if ( z.key < y.key ){
            y.left = z;
        }else {
            y.right = z;
        }
    }
    z.left = nullNode;
    z.right = nullNode;
    z.color = 'red';
    rb_insert_fixup(tree,z);
}

function inorder(node) {
    if(node.key){
        inorder(node.left);
        console.log(node.key);
        inorder(node.right);
    }
}

inorder(tempTree.root);
// console.log(tempTree.root.key);
// console.log(tempTree.root.right.key);
// console.log(tempTree.root.left.key);
// console.log(tempTree.root.right.key);
// console.log(tempTree.root.right.left.key);
// console.log(tempTree.root.right.right.key);
// console.dir(tempTree.root.left.left);
