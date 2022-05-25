def fibonacci(n):
  fibArr = [0, 1]
  answer = 0

  for i in range(2, (n + 1)):
    fibArr.append(fibArr[i - 1] + fibArr[i -2]) 
  
  answer = fibArr[n]
  print(answer)
  return answer

fibonacci(4)

