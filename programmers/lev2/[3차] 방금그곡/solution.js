// 테스트 100%
function solution(m, musicinfos) {
    let answer = [0, '']
    let music = '';
    for (let i = 0; i < m.length; i++) {
        if (m[i + 1] === '#') {
            music += m[i].toLowerCase()
            i++
        } else {
            music += m[i]
        }
    }
    for (let i = 0; i < musicinfos.length; i++) {
        let info = musicinfos[i].split(',')
        let startTime = info[0].split(':')
        let endTime = info[1].split(':')
        if (startTime[0] > endTime[0]) {
            endTime[0] = Number(endTime[0]) + 24
        }
        let startMin = Number(startTime[0]) * 60 + Number(startTime[1])
        let endMin = Number(endTime[0]) * 60 + Number(endTime[1])
        let playTime = endMin - startMin
        let curMusic = '';
        for (let j = 0; j < info[3].length; j++) {
            if (info[3][j + 1] === '#') {
                curMusic += info[3][j].toLowerCase();
                j++
            } else {
                curMusic += info[3][j]
            }
        }
        if (playTime <= curMusic.length) curMusic = curMusic.slice(0, playTime)
        else {
            curMusic = curMusic.repeat(playTime / curMusic.length) + curMusic.slice(0, playTime % curMusic.length)
        }
        if (curMusic.split(music).join('').length !== curMusic.length) {
            if (answer[0] < curMusic.length) {
                answer[0] = curMusic.length
                answer[1] = info[2]
            }
        }
    }
    return answer[0] ? answer[1] : '(None)'
}
/*
1. playTime을 구해서 playTime이 음악보다 짧거나 같으면 들은음악과 비교한다.
2. playTime이 더 길면 탐색 시작.
 2-1. curMusic에 음악을 넣고 playTime - 현재음악길이만큼 빼준다.
 2-2. playTime만큼 반복문을 설정하고, curMusic의 0번째 인덱스부터 curMusic에 붙여준다.
 2-3. 탐색중 들은 음악이 curMusic에 포함이 될 경우 curMusic[i + 1]이 '#'이 아닐 경우
      바로 제목을 리턴한다.
// 실패.
1. 음악에서 A#, B#등등 #이 붙었을 경우 구분을 위해 #을 빼고 음을 소문자로 바꾸어준다.
2. 탐색 시작
 2-1. 현재 탐색중인 음악도 마찬가지로 #이 있는 경우 음을 소문자로 바꾸어준다.
 2-2. playTime에 상응하는 재생된 음악을 만들어준다.
 2-3 재생된 음악에 들은음악이 포함되어 있을 경우
  2-3-1. answer[0]은 재생된 음악의 길이가 저장되어 있으므로 현재 음악이 더 길경우
  2-3-2. answer[0]에는 음악 길이, answer[1]에는 제목을 할당한다
3. answer[0]이 0이아니면 answer[1]에있는 제목을 리턴. answer[0]이 0이면 해당되는 음악이 없으므로 '(None)'을 리턴한다.
*/