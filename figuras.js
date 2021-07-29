// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1 , lado2, base) {
  return lado1 + lado2 + base;
}

// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  const ResultA = document.getElementById("resultA");
  ResultA.innerText = "El perímetro es: " + perimetro + "cm";
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  const ResultA = document.getElementById("resultA");
  ResultA.innerText = "El área es: " + area + "cm^2";
}


//Triangulo
function calcularPerimetroTriangulo() {
  const lado1 = parseInt(document.getElementById("Inputlado1").value);

  const lado2 = parseInt(document.getElementById("Inputlado2").value);

  const base = parseInt(document.getElementById("Inputbase").value);

  const perimetrot = perimetroTriangulo(lado1, lado2, base);

  const ResultAT = document.getElementById("resultAT");
  ResultAT.innerText = "El perímetro es: " + perimetrot + "cm";
}


function alturaTriangulo(lado1, lado2, base){
  if(lado1 != lado2){
    alert("Los lados a y b no son iguales");
  }else{
    const altura = parseInt( Math.sqrt((lado1*lado1) - (base/2 * base/2)));
    return altura;
  }
}

function calcularAlturaTriangulo(){
  const lado1 = parseInt(document.getElementById("Inputlado1").value);
  const lado2 = parseInt(document.getElementById("Inputlado2").value);
  const base = parseInt(document.getElementById("Inputbase").value);
  const alturadelT = alturaTriangulo(lado1, lado2, base);
  const ResultAT = document.getElementById("resultAT");
  ResultAT.innerText = "La altura es: " + alturadelT + "cm";
}

function calcularAreaTriangulo() {
  const lado1 = parseInt(document.getElementById("Inputlado1").value);
  const lado2 = parseInt(document.getElementById("Inputlado2").value);
  const base = parseInt(document.getElementById("Inputbase").value);

  const alturaTriang = alturaTriangulo(lado1, lado2, base);

  const areaT = areaTriangulo(base, alturaTriang);
  const ResultAT = document.getElementById("resultAT");
  ResultAT.innerText = "El área es: " + areaT + "cm^2";
}

function calcularPerimetroCirculo(){
  const radio = parseInt(document.getElementById("InputCirculo").value);

  const perimetroC = parseInt(perimetroCirculo(radio));
  const ResultC = document.getElementById("resultC");
  ResultC.innerText = "El perímetro es: " + perimetroC + "cm";
}

function calcularAreaCirculo(){
  const radio = parseInt(document.getElementById("InputCirculo").value);

  const areaC = parseInt(areaCirculo(radio));
  const ResultC = document.getElementById("resultC");
  ResultC.innerText = "El perímetro es: " + areaC + "cm^2";
}