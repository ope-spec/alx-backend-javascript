function calculateNumber(type, a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    let c = 0;

    switch (type) {
    case 'SUM':
	c = roundA + roundB;
	break;

    case 'SUBTRACT':
	c = roundA - roundB;
	break;

    case 'DIVIDE':
      if (roundB === 0) {
            c = "Error";
      }
	  else {
            c = roundA / roundB;
      }
      break;
    }

    return c;
}

module.exports = calculateNumber;
