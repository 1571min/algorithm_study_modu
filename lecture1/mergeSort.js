function merge (A, p, q, r) {
    let n1 = q - p
    let n2 = r - q - 1
    let L = []
    let R = []
    for (let i = 0; i <= n1; i++) {
        L[i] = A[p + i]
    }
    for (let j = 0; j <= n2; j++) {
        R[j] = A[q + j + 1]
    }
    L[n1 + 1] = Number.MAX_SAFE_INTEGER
    R[n2 + 1] = Number.MAX_SAFE_INTEGER
    let i = 0
    let j = 0
    for (let k = p; k <= r; k++) {
        if (L[i] <= R[j]) {
            A[k] = L[i]
            i++
        } else {
            A[k] = R[j]
            j++
        }
    }
}
function mergeSort (A, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2)
        mergeSort(A, p, q)
        mergeSort(A, q + 1, r)
        merge(A, p, q, r)
    }
}
function mergeSortCaller (A) {
    mergeSort(A, 0, A.length - 1)
}
