
        function criarFormulario() {
            const container = document.getElementById('formulario');

            // Criar elemento <form>
            const form = document.createElement('form');
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Evita recarregar a página
                const nome = document.getElementById('nome').value;
                const email = document.getElementById('email').value;
                const mensagem = document.getElementById('mensagem').value;
                console.log("Dados do formulário:", { nome, email, mensagem });
                alert("Formulário enviado com sucesso!");
            });

            // Nome
            const labelNome = document.createElement('label');
            labelNome.textContent = 'Nome:';
            const inputNome = document.createElement('input');
            inputNome.type = 'text';
            inputNome.id = 'nome';
            inputNome.required = true;

            // Email
            const labelEmail = document.createElement('label');
            labelEmail.textContent = 'E-mail:';
            const inputEmail = document.createElement('input');
            inputEmail.type = 'email';
            inputEmail.id = 'email';
            inputEmail.required = true;

            // Mensagem
            const labelMensagem = document.createElement('label');
            labelMensagem.textContent = 'Mensagem:';
            const textareaMensagem = document.createElement('textarea');
            textareaMensagem.id = 'mensagem';
            textareaMensagem.rows = 5;
            textareaMensagem.required = true;

            // Botão de envio
            const botao = document.createElement('button');
            botao.type = 'submit';
            botao.textContent = 'Enviar';

            // Adiciona elementos ao formulário
            form.appendChild(labelNome);
            form.appendChild(inputNome);
            form.appendChild(labelEmail);
            form.appendChild(inputEmail);
            form.appendChild(labelMensagem);
            form.appendChild(textareaMensagem);
            form.appendChild(botao);

            // Adiciona o formulário ao container
            container.appendChild(form);
        }

        // Chama a função ao carregar a página
        window.onload = criarFormulario;
 