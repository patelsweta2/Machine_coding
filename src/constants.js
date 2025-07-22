export const size = 3;

const winningCombos = [];

// horizontal
for (let i = 0; i < size; i++) {
  const row = [];
  for (let j = 0; j < size; j++) {
    row.push(i * size + j);
  }
  winningCombos.push(row);
}

//vertical
for (let i = 0; i < size; i++) {
  const row = [];
  for (let j = 0; j < size; j++) {
    row.push(j * size + i);
  }
  winningCombos.push(row);
}

// diagonal 1
const diag1 = [];
for (let i = 0; i < size; i++) {
  diag1.push(i * size + i);
}
winningCombos.push(diag1);

// diagonal 2
const diag2 = [];
for (let i = 0; i < size; i++) {
  diag2.push(i * size + size - i - 1);
}

winningCombos.push(diag2);

// alternate way

export const winningComboss = [
  // rows
  ...Array.from(new Array(size), (_, i) =>
    Array.from(new Array(size), (_, j) => i * size + j)
  ),
  // columns
  ...Array.from(new Array(size), (_, i) =>
    Array.from(new Array(size), (_, j) => j * size + i)
  ),

  // diagonal 1
  Array.from(new Array(size), (_, i) => i * size + i),
  // diagonal 2
  Array.from(new Array(size), (_, i) => i * size + size - i - 1),
];

export const initialArray = Array(size * size).fill(null);
