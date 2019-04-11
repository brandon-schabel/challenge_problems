function sockMerchant(n, ar) {
  let sockCount = {};
  let pairs = 0;
  for (const sock of ar) {
      if (sockCount.hasOwnProperty(sock)) {
          sockCount[sock] += 1;
          if (sockCount[sock] >= 2) {
              pairs++;
              sockCount[sock] -= 2;
          }
      } else {
          sockCount[sock] = 1;
      }
  }

  return pairs;

}