function solution(str) {

  if(str.includes('q') === false && str.includes('Q') === false) {
    return -1
  } else {
    return str.replaceAll('q', 'a').replaceAll('Q', 'A');
  }
  
}

solution("It works, I don't know why.");
// -1
solution(
  "Qre you sleeping? Yes, now shut up. I know how to fix thqt bug on line 255."
);
// Are you sleeping? Yes, now shut up. I know how to fix that bug on line 255.