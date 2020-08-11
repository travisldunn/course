// Reimplement the behavior the logical operators, like`!`, `&&`, `||`, `==`,
// without using any of the built in ones.Your solution should include:

// NOT(`!`)
// OR(`||`)
// AND(`&&`)
// NAND
// NOR
// XOR
// IMPLIES
// EQUALS(`==`)

// examples

// Not(true) => false
// And(true, false) => false
// Or(false, true) => true
// Equals(false, false) => true

function NOT(p) {
  if (p) {
    return false;
  }
  return true;
}

function OR(p, q) {
  if (p) {
    return true;
  }
  if (q) {
    return true;
  }
  return false;
}

function AND(p, q) {
  if (NOT(p)) {
    return false;
  }
  if (NOT(q)) {
    return false;
  }
  return true;
}

function NAND(p, q) {
  return NOT(AND(p, q));
}

function NOR(p, q) {
  return NOT(OR(p, q));
}

function XOR(p, q) {
  return NOT(EQUALS(p, q));
}

function IMPLIES(p, q) {
  return NOT(AND(p, NOT(q)));
}

function EQUALS(p, q) {
  return AND(IMPLIES(p, q), IMPLIES(q, p));
}

//Extra Credit

function ID(p) {
  return p;
}

function TAUTOLOGY(p) {
  return true;
}

function CONTRADICTION(p) {
  return false;
}

function XNOR(p, q) {
  return NOT(XOR(p, q));
}

function HALFADDER(p, q) {
  return [XOR(p, q), AND(p, q)];
}

function FULLADDER(p, q, c) {
  return [XOR(XOR(p, q), c), OR(AND(XOR(p, q), c), AND(p, q))];
}
