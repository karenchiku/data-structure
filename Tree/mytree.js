class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            
        }else{
            let currentNode = this.root;
            while(true){
                if( value < currentNode.value){  
                    // Left
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }else{
                    // Right
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
        return this
    }
    lookup(value) {
        if(!this.root){
            return false
        }
        
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.left){
                currentNode = currentNode.left
            }else if (value > currentNode.right){
                currentNode = currentNode.right
            }else if (value == currentNode.value){
                return currentNode
            }
        }
      return false
    }
    remove(value) {

      if(!this.root){
        return false
      }
      let currenNode = this.root
      let parentNode = null
      while(currenNode){
        if(value < currenNode.left){
            parentNode = currenNode
            currenNode = currenNode.left
        }else if (value > currenNode.right){
            parentNode = currenNode
            currenNode = currenNode.right
        }else if (value === currenNode.value){
        // we have a match, get to workQ
        // Option 1 : No right child
        // Option 2 : Has right child which does not have a left child
        // Option 3 : Has right child that has a left child

        }

        return this
      }



    }
  }
  
//     9
//   4    20
// 1   6  15   170

  const tree = new BinarySearchTree();
  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
//   tree.remove(170);
  console.log(JSON.stringify(traverse(tree.root)))
  console.log(tree.lookup(20));
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }