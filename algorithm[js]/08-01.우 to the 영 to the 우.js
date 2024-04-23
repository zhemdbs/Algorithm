function solution(word) {

  const result = word.split('').reverse().join('');

  return result === word;
  
}

solution("역삼역"); // true
solution("고양이"); // false