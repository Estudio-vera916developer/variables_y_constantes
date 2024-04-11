let fec= prompt(" introduce por favor sel dia de su nacimiento de la siguiente manera MM-DD-AA ");
let fe = new Date(fec);
let hoy= new Date().getFullYear();
let dias=fe.getDate();
let mes=fe.getMonth()+1;
let año=fe.getFullYear();
let eda= hoy-año;
console.log("su fecha de nacimiento es: " + fec + " " + eda );
