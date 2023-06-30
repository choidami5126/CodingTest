function solution(a, b) {
  var ab = Number(a.toString() + b.toString()); // a ⊕ b
  var ba = Number(b.toString() + a.toString()); // b ⊕ a

  if (ab >= ba) {
    return ab;
  } else {
    return ba;
  }
}
