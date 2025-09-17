/* ---------- helpers ---------- */
function getVals(){
    return [+document.getElementById("num1").value,
        +document.getElementById("num2").value];
}
function show(res){
    const out = document.getElementById("result");
    out.textContent = String(res);
    out.classList.toggle("neg", res < 0);
}

/* ---------- operations ---------- */
function add(){ const [a,b] = getVals(); show(a + b); }
function subtract(){ const [a,b] = getVals(); show(a - b); }
function multiply(){ const [a,b] = getVals(); show(a * b); }
function divide(){
    const [a,b] = getVals();
    show(b === 0 ? "Err" : a / b);
}
function power(){
    const [a,b] = getVals();
    let res = 1;
    for(let i = 0; i < b; i++){ res *= a; }
    show(res);
}
function clearCalc(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("result").classList.remove("neg");
}
