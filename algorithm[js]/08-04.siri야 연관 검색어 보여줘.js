function solution(search, recommends){
  //사용자가 입력하는 문자가 추천 검색어 목록 전부에 겹치는 가장 긴 문자열을 리턴
  //겹치는 문자가 없으면 빈 문자열을 리턴
  
	// search.slice(시작할인덱스, 종료할인덱스)
  for(let i = search.length; i > 0; i--) {
    const 검색어 = search.slice(0, i);
    for(let j = 0; j < recommends.length; j++) {
      const 단어 = recommends[j];
      if(단어.startsWith(검색어) === false) {
        break;
      }
      if(j === recommends.length-1) {
        return 검색어;
      }
    }
  }
  return '';
}

solution("flutter", ["flower", "flow", "flight"]); // "fl"
solution("apple", ["dad", "racecar", "car"]); // ""