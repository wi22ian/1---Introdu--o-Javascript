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
        response.forEach(element => {
            const selecionaLista = document.querySelector('.listaDosRepo');
            var elemento = document.createElement('li');
            elemento.innerText = element.name;
            selecionaLista.appendChild(elemento);
        });
    })
    .catch(function(error) {
        console.log(error);
    });
};
function recebeUsuario() {
    return document.querySelector('input').value;
}
document.querySelector('button').addEventListener('click', executar);