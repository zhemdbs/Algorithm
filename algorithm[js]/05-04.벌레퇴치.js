function solution(feature) {
  // feature에 'bug'가 있다면 제거
  
  const bug = feature.indexOf('bug');

  if(bug !== -1) {
    feature.splice(bug, 1);
  }

  return feature;
}

solution(["code", "bug", "code"]); // ["code", "code"]
solution(["code", "code"]); // ["code", "code"]