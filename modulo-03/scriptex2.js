var localizaRepos = function () {
var dado = 'wi22ian';
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'htttps://api.github.com/users/' + dado + "/repos");
        xhr.send(null);


        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(resolve(JSON.parse(xhr.responseText)));
                } else {
                    reject('Erro na requisição');
                }
            }
        };
    });
}

localizaRepos()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });

function recebeUsuario() {
    var nomeUsuario = document.querySelector('input').value;
    console.log(nomeUsuario);
    return nomeUsuario;
}

