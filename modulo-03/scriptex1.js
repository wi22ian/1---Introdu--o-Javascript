function coletaDados() { 
    var valor = document.querySelector('input').value;
    checaIdade(valor)
    .then(function() { 
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });
};
function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(idade >= 18) {
                resolve();
            }
            else {
                reject();
        }}, 2000);
    });
};
document.getElementsByClassName('btnEnviar')[0].addEventListener('click',coletaDados);