function solution(name, sex, spouse){
  if(sex === 'male') {
    return '결혼 후 당신의 full name은 바뀌지 않습니다';
  } else {
    let 이름 = name.split(' ')[0];
    let 성 = spouse.split(' ')[1];

    let fullName = `${이름} ${성}`

    return `결혼 후 당신의 full name은 ${fullName}입니다`
  }

}

solution("Harrison Ford", "male", "Calista Flockhart");
// "결혼 후 당신의 full name은 바뀌지 않습니다"
solution("Calista Flockhart", "female", "Harrison Ford");
// "결혼 후 당신의 full name은 Calista Ford입니다"