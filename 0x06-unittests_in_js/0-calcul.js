function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;

function calculateNumber(a, b) {
    const c = Math.round(a);
    const d = Math.round(b);
    const e = c + d;
    return e;
}

module.exports = calculateNumber;