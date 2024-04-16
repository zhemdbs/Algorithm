function solution(month) {
	// 분기는 4분기 (1,2,3 / 4,5,6 / 7,8,9 / 10,11,12)
  // 각 분기마다 3개의 달이 존재
  // 3으로 나누고 올림 처리
	
	return Math.ceil(month / 3);
}

solution(4); // 2
solution(12); // 4