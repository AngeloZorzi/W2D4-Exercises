/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (n1, n2) {
  const calc = n1 * n2;
  console.log(calc);
};
area(11, 12);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = function (n3, n4) {
  const sum = n3 + n4;
  if (n3 !== n4) {
    return sum;
  } else {
    return sum * 3;
  }
};
console.log(crazySum(5, 10));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff = function (x) {
  const diff = x - 19;
  if (x < 19) {
    return diff * -1;
  } else {
    return diff * 3;
  }
};
console.log(crazyDiff(5));
console.log(crazyDiff(25));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function (n) {
  const bound = "true";
  if ((n > 20 && n <= 100) || n === 400) {
    return bound;
  }
};
console.log(boundary(400));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify = function (name) {
  const str = " ti da il benvenuto!";
  if (str.startsWith(name)) {
    return str;
  } else {
    return name + str;
  }
};
console.log(epify("EPICODE"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = function (n) {
  const check = "true";
  if (n % 3 === 0 || n % 7 === 0) {
    return check;
  } else {
    return "not " + check;
  }
};
console.log(check3and7(12));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (name) {
  const stringa = name;
  return stringa;
};
console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst = function () {
  const str = "finalmete sono a casa";

  return str;
};
console.log(upperFirst());
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (name) {
  const cutcut = name.slice(1, -1);
  return cutcut;
};
console.log(cutString("DINO"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom = function (n) {
  const rdm = [];

  rdm.push(Math.ceil(Math.random()) * n);
  return rdm;
};
console.log(giveMeRandom(10));
