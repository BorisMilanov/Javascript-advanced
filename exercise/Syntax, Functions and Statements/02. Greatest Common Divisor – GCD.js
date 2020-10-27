function gcd (n, m) {
    var r = 0;
    while (n !== 0) {
      r = m % n;
      m = n;
      n = r;
    }
    console.log(m)
  }
  gcd(2154,458)