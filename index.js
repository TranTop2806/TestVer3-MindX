function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function tongsonguyento() {
    const inputNumber1 =
      document.getElementById("input-number1").valueAsNumber;
    const inputNumber2 =
      document.getElementById("input-number2").valueAsNumber;
    let sum = 0;
    for (let i = inputNumber1; i <= inputNumber2; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    document.getElementById(
      "result"
    ).textContent = `Tổng số nguyên tố từ ${inputNumber1} đến ${inputNumber2} là ${sum}.`;
  }