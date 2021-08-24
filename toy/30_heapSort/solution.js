// 테스트 100%
function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
  
function getParentIdx(idx) {
    return Math.floor((idx - 1) / 2)
}
  
function insert(heap, item) {
    heap.push(item)
    if (heap.length > 1) {
        let cIdx = heap.length - 1
        let pIdx = getParentIdx(cIdx)
        while (pIdx >= 0 && heap[pIdx] > heap[cIdx]) {
            swap(cIdx, pIdx, heap)
            cIdx = pIdx
            pIdx = getParentIdx(cIdx)
        }
    }
    return heap
}
  
function removeRoot(heap) {
    swap(0, heap.length - 1, heap); // 0번째 인덱스는 이미 정렬된 값이기 떄문에 없애줌
    heap.pop();
    if (heap.length === 0) return []; 
    let curIdx;
    let minIdx = 0;
    while (curIdx !== minIdx) {
        curIdx = minIdx;
        let left = curIdx * 2 + 1;
        let right = curIdx * 2 + 2;
        if (left < heap.length && heap[left] < heap[minIdx]) {
            minIdx = left;
        }
        if (right < heap.length && heap[right] < heap[minIdx]) {
            minIdx = right;
        }
        swap(curIdx, minIdx, heap);
    }
    return heap
}

const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
        return insert(heap, item);
    }, []);
};
  
const heapSort = function (arr) {
    let minHeap = binaryHeap(arr);
    let sort = [];
    while (minHeap.length) {
        sort.push(minHeap[0])
        minHeap = removeRoot(minHeap)
    }
    return sort
};