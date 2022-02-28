function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0);
  let reportList = {}
  for (let i = 0; i < report.length; i++) {
    const [userId, reportId] = report[i].split(' ');
    if (!reportList[reportId]) {
      reportList[reportId] = [userId]
    } else {
      reportList[reportId].push(userId)
    }
  }

  for (let key in reportList) {
    reportList[key] = [...new Set(reportList[key])]
    if (reportList[key].length >= k) {
      for (let i = 0; i < reportList[key].length; i++) {
        const idx = id_list.indexOf(reportList[key][i])
        answer[idx]++
      }
    }
  }
  return answer;
}