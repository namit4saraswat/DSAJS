class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(node, priority){
        var flag = false;
        for(let i=0; i<this.values.length; i++){
            if(this.values[i].priority>priority){
                this.values.splice(i, 0, {node, priority})
                flag = true;
                break;
            }
        }
        if(!flag){
            this.values.push({node, priority})
        }
    }

    dequeue(){
        return this.values.shift()
    }
}

var a = new PriorityQueue()
a.enqueue(10,1)
a.enqueue(1, 0)
a.enqueue(8,2)
console.log(a.dequeue())
console.log(a.dequeue())
console.log(a.dequeue())