# Setup Inicial de um repositório do GitHub no VS Code local

1. Limpar as credenciais do sistema;
2. Limpar os dados dos navegadores;
3. Abrir repositório no GitHub;
4. Copiar a URL do repositório (HTTPS);
5. Abrir o VS Code;
6. Fechar a pasta (caso tenha uma pasta aberta); (CTRL + K  F)
7. Deslogar a conta no VS Code (caso tenha alguém logado);
8. Verificar as variáveis globais `use.name` e `user.email` globais:
~~~bash
git config --global user.name
git config --global user.email
~~~
9. Se as variáveis retornarem algum valor, redefina ambas as variaveis:
~~~bash
git config --global --unset user.name
git config --global --unset user.email
~~~
10. Faça a clonagem do repositório no computador local:
~~~bash
git clone https://github.com/usuario/repositorio.git
~~~
11. Abra o projeto clonado no VS Code :
~~~bash
code -r <nome_do_repositorio_local>
~~~
12. Faça login no VS Code local para sincronizar as extensões e temas;
13. Ativar salvamento automático _(AutoSave)_;
14. Logar nas variáveis locais `user.name` e `user.email`:
~~~bash
git config user.name "nome-do-usuario"
git config user.email "email-do-usuario"
~~~
15. Adicione os arquivos para poder commitar:
~~~bash
git add nome-do-arquivo
~~~
16. Fazer commit dos arquivos adicionados:
~~~bash
git commit -m "comentario-do-commit"
~~~
17. Fazer o push:
~~~bash
git push origin main
~~~
