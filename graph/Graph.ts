export class Graph {
    constructor(){
        this.vertices = []
        this. adjList = new Map()
    }

    addVertex(v){
        this.vertices.push(v)
        this.adjList.set(v,[])
    }

    addEdge(v, w){
        this.adjList.get(v).push(w)
        this.adjList.get(w).pus(v)
    }

    toString(){
        let s = ''
        this.vertices.map((val, index) => {
            s += val + '->'
            let neighbors = this.adjList.get(val)
            neighbors.map(val => {
                s += val + ' '
            })
            s += '\n'
        })

        return s
    }
}
