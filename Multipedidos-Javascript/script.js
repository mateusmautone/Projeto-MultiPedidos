const users = [
    { nome: 'Pedro', idade: 17, email: 'joao@gmail.com' },
    { nome: 'Gabriela', idade: 30, email: 'Gabriela@hotmail.com' },
    { nome: 'Kevin', idade: 40, email: 'Kevin@hotmail.com' }
];

document.querySelector('button').addEventListener('click', function() {
    const searchedName = document.getElementById('search-name').value;
    const searchedEmail = document.getElementById('search-email').value;

    searchUserPromisse(users, searchedName, searchedEmail)
        .then(user => {
            alert('Usuário encontrado:\n' + JSON.stringify(user, null, 2));
        })
        .catch(error => {
            alert(error.message);
        });
});

function searchUserPromisse(array, name, email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userFound = null;

            if (name) {
                userFound = array.find(user => 
                    user.nome.toLowerCase() === name.toLowerCase()
                );
            } else if (email) {
                userFound = array.find(user => 
                    user.email.toLowerCase() === email.toLowerCase()
                );
            }

            if (userFound) {
                resolve(userFound);
            } else {
                reject(new Error('Nenhum usuário encontrado.'));
            }
        }, 1000);
    });
}
