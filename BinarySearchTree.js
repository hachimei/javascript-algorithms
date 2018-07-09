class BinarySearchTree{
    Node(key) {
        return ({key: key, left: null, right: null})
    }

    constructor() {
        this.root = null
    }

    insert(key) {
        let newNode = this.Node(key)

        if(this.root === null)
            this.root = newNode
        else
            this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode) {
        if(newNode.key < node.key){
            if(node.left === null)
                node.left = newNode
            else
                this.insertNode(node.left, newNode)
        } else{
            if(node.right === null)
                node.right = newNode
            else
                this.insertNode(node.right, newNode)
        }
    }
}

let b = new BinarySearchTree()
let test = [7, 15, 5 ,3, 9, 8, 10, 13, 12, 14, 20, 18, 25]
test.map(value => b.insert(value))
console.log(b.root);

