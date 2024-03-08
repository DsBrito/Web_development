/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
 */

function triangle(a, b, c) {
  if (a === b && a === c) {
    console.log("\n- The triangle is equilateral! ");
  }
  if (a === b || a === c || b === c) {
    console.log("\n- The triangle is isosceles! ");
  } else {
    console.log("\n- The triangle is scalene! ");
  }
}

let triangle_type;

triangle_type = triangle(2, 2, 2);
triangle_type = triangle(2, 1, 2);
triangle_type = triangle(2, 2, 1);
triangle_type = triangle(5, 2, 4);
