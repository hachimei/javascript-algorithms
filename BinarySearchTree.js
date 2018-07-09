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
b.insert(8)
b.root
b.insert(33)
b.root
b.insert(3)
b.insert(43)
b.insert(2)
b.insert(11)
b.insert(7)
