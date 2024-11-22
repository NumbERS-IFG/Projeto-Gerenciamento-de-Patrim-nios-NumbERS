function init() {
    const formLogin = document.getElementById('formLogin');
    formLogin.onsubmit = async function (event) {
        //(i): Inibe o JS/navegador de submetê-lo automaticamente;
        event.preventDefault();
        //(ii): desabilita o botão para evitar novos clicks
        document.getElementById('login-btn').disabled = true;
        //(iii): recupera os dados do formulário
        let matricula = document.getElementById('acessoMatricula').value.trim();
        let senha = document.getElementById('acessoSenha').value.trim();

        let loginOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": ""
            },
            body: JSON.stringify({
                matricula,
                senha
            })
        }

        fetch('http://localhost:3000/login/', loginOption)
            .then(async function (response) {
                let loginResponse = await response.json();
                if (response.ok) {
                    window.location.href = "../html/mainPage.html";
                    response.headers('authorization', loginResponse.chaveAcesso);
                } else {
                    alert(loginResponse.mensagem);
                }
                console.log(loginResponse);
            })
            .catch(function (error) {
                console.log(error);
                if (document.querySelector('#mensagem')) {
                    document.querySelector('#mensagem').remove();
                }

                let div = document.createElement('div');
                div.id = 'mensagem';
                div.innerHTML = 'Ocorreu algum erro!';
                document.querySelector('#form-ex').prepend(div);
            })
        document.getElementById('login-btn').disabled = false;
    }
}

window.onload = init;