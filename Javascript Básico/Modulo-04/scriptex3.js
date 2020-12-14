var localizaRepos = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + recebeUsuario() + '/repos');
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        };
    });
}
function executar() { 
    localizaRepos()
    .then(function(response) {
        const selecionaLista = document.querySelector('.listaDosRepo');
        selecionaLista.innerHTML = '';
        selecionaLista.innerHTML = "Carregando....";
        setTimeout(function() {
        selecionaLista.innerHTML = '';
        response.forEach(element => {    
            var elemento = document.createElement('li');
            elemento.innerText = element.name;
            selecionaLista.appendChild(elemento);
        });
    }, 3000);
        
    })
    .catch(function(error) {
        console.log(error);
        alert("usuário não encontrado")
    });
};
function recebeUsuario() {
    return document.querySelector('input').value;
}
document.querySelector('button').addEventListener('click', executar);