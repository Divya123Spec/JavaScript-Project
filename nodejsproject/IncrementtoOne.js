// Method 1: Iterative Approach (O(n))

function incrementDigit(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      }
      digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
  }
  
  console.log(incrementDigit([9, 9])); // 👉 [1, 0, 0]

  
//   Method 2: Using BigInt (One-Liner)
  function incrementDigitBigInt(digits) {
    return (BigInt(digits.join("")) + 1n)
      .toString()
      .split("")
      .map(Number);
  }
  
  console.log(incrementDigitBigInt([9, 9])); // 👉 [1, 0, 0]
  