// 테스트 100%
function solution(files) {
    files.sort((a, b) => {
        let aHead = a.match(/^\D+/)[0].toLowerCase()
        let bHead = b.match(/^\D+/)[0].toLowerCase()
        
        if (aHead < bHead) return -1;
        if (aHead > bHead) return 1
        
        let aNum = a.match(/\d+/)[0].replace(/^0+/, '')
        let bNum = b.match(/\d+/)[0].replace(/^0+/, '')
        
        return aNum - bNum
    })
    return files
}