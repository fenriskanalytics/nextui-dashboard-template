export const newton = (
  func: (x: number) => number,
  initialGuess: number,
  tolerance: number = 1e-6,
  maxIterations: number = 100,
): number => {
  let x = initialGuess;
  let fx = func(x);
  let dfx = (func(x + tolerance) - fx) / tolerance;
  let iterations = 0;

  while (Math.abs(fx) > tolerance && iterations < maxIterations) {
    x = x - fx / dfx;
    fx = func(x);
    dfx = (func(x + tolerance) - fx) / tolerance;
    iterations++;
  }

  if (iterations === maxIterations) {
    throw new Error(
      "Newton-Raphson method did not converge within the maximum number of iterations.",
    );
  }

  return x;
};
