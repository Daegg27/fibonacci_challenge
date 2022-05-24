const fibonacci = (num) => {
  let fibArr = [0, 1];
  let answer;
  for (let i = 2; i < num; i++){

    fibArr[i] = fibArr[i - 1] + fibArr[i-2];
  }  

  answer = fibArr[num];
  console.log(answer);
  return answer;
  
  
}

module.exports = {fibonacci}
