class MinHeap{
    constructor(){
        this.heap = []
    }
    getLeftChildIndex(parentIndex){
        return 2*parentIndex + 1
    }

    getRightChildIndex(parentIndex){
        return 2*parentIndex + 2
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2)
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length
    }

    hasParent(index){
        return this.getParentIndex(index) >=0
    }
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(index1, index2){
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    peek(){
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0]
    }

    add(item){
        this.heap.push(item)
        // this.heapifyUp()
    }

    remove(){
        if(this.heap.length ===0){
            return null
        }
        const item = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown()
        return item
    }

    heapifyUp(){
        let index = this.heap.length - 1;
        while(this.hasParent(index)){
            if(this.parent(index)>this.heap[index] && this.hasParent(index)){
                this.swap(index, this.getParentIndex(index))
            }
            index = this.getParentIndex(index)
        }
    }

    heapifyUpIndex(index){
        while(this.hasParent(index)){
            if(this.parent(index)>this.heap[index] && this.hasParent(index)){
                this.swap(index, this.getParentIndex(index))
            }
            index = this.getParentIndex(index)
        }
    }

    maxheapifyUpIndex(index){
        while(this.hasParent(index)){
            if(this.parent(index)<this.heap[index] && this.hasParent(index)){
                this.swap(index, this.getParentIndex(index))
            }
            index = this.getParentIndex(index)
        }
    }

    getMinimumIndex(idx1, idx2){
        return this.heap[idx1] < this.heap[idx2] ? idx1 : idx2
    }
    heapifyDown(){
        let index = 0
        let index2 = this.getMinimumIndex(this.getLeftChildIndex(index), this.getRightChildIndex(index))
        while(this.heap[index]>this.heap[index2]){
            this.swap(index, index2)
            index = index2
            index2 = this.getMinimumIndex(this.getLeftChildIndex(index), this.getRightChildIndex(index))
            this.printHeap()
        }   
    }

    printHeap(){
        var heap =` ${this.heap[0]} `
        for(var i = 1; i<this.heap.length;i++) {
            heap += ` ${this.heap[i]} `;
        }
        console.log(heap);
        // for(let i in this.heap){
        //     console.log(this.heap[i])
        // }
    }
//[10,5,20,2,4,8]
    buildMinHeap(){
        // var swapArry = function(idx1, idx2){
        //     const temp = nums[idx1]
        //     nums[idx1] = nums[idx2]
        //     nums[idx2] = temp
        // }
        let n = this.heap.length-1
        for(let i=n;i>=0;i--){
            this.heapifyUpIndex(i)
        }
    }

    buildMaxHeap(){
        let n = this.heap.length-1
        for(let i=n;i>=0;i--){
            this.heapifyUpIndex(i)
        }
    }

    buildMaxHeap2(){
        let n = this.heap.length-1
        for(let i=n;i>=0;i--){
            this.maxheapifyUpIndex(i)
        }
    }

    heapSort(){
        this.buildMaxHeap2
        for()
    }
}

var heap = new MinHeap();
heap.add(10);
heap.add(5);
heap.add(20);
heap.add(2);
heap.add(4);
heap.add(8);

heap.printHeap();
// heap.remove()
// heap.printHeap()
heap.buildMaxHeap()
heap.printHeap()