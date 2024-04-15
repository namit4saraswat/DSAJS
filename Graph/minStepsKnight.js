function distanceFromTarget(x, y, targetPos) {
    return (Maths.abs(x - targetPos[0]) + Maths.abs(y - targetPos[1]))
}

function isValid(x, y, visited, N) {
    console.log(x + ' '+ y)
    if (x < N && x >= 0 && y < N && y >= 0 && visited[x][y] === false) {
        return true
    } else {
        return false
    }
}


function minStepByKnight(knigthPos, targetPos, N) {
    let queue = []
    let count = 0
    queue.push([knigthPos[0], knigthPos[1], 0])
    let visited = new Array(N).fill().map(() => Array(N).fill(false))
    while (queue.length != 0) {
        count++
        let size = queue.length
        while (size > 0) {
            let source = queue.shift()
            let x1 = source[0]
            let y1 = source[1]
            visited[x1][y1] = true

            let r = [2, 1, -2, -1, 1, 2, -1, -2]
            let c = [1, 2, -1, -2, -2, -1, 2, 1]
            for (let i = 0; i < r.length; i++) {
                let x = r[i] + x1
                let y = c[i] + y1

                if (x === targetPos[0] && y === targetPos[1]) {
                    return count
                }
                if (isValid(x, y, visited, N)) {
                    visited[x][y] = true
                    queue.push([x, y, count])
                }

            }
            size--
        }
    }

}

console.log(minStepByKnight([1, 3], [5, 0], 6))