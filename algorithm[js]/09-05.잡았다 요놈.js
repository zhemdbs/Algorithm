function solution(arr){
  let suspect;
  let suspectTime;

  arr.forEach(el => {
    suspectTime = el.time;
    suspect = el.name;
  });
 // console.log(suspectTime);
  return `범인은 바로 ${suspect} 입니다!`
}

solution([
  {
    name: "카페",
    time: 15,
  },
  {
    name: "모카",
    time: 12,
  },
  {
    name: "라떼",
    time: 10,
  },
  {
    name: "아라비카",
    time: 16,
  },
]);
// "범인은 바로 아라비카 입니다!"