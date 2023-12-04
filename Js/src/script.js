const equacaoQuadratica = (a, b, c) => {
    let delta = b ** 2 - 4 * a * c;
    let raizDoDelta = Math.sqrt(delta, 2);

  if (raizDoDelta > 0) {
    let x1 = (-b + raizDoDelta) / (2 * a);
    let x2 = (-b - delta) / (2 * a);
    console.log(`X1 = ${x1} e X2 = ${x2}`);
  }
  else if(raizDoDelta == 0){
    let x1 = (-b + raizDoDelta) / (2 * a);
    // let x2 = (-b - raizDoDelta) / (2 * a);
    console.log(`X = ${x1}, a equação só tem uma raiz`);
  }else{
    console.log(`A equação não tem raízes reias o delta é menor que 0 ${delta}`)
  }
};

equacaoQuadratica(-2,4,-8);

