document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.github.com/users/WilianSantos')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        const name = document.getElementById('name')
        const username = document.getElementById('username')
        const repositories = document.getElementById('repositories')
        const followers = document.getElementById('followers')
        const following = document.getElementById('following')
        const link = document.getElementById('link')
        const avatar = document.getElementById('profile-avatar')

        name.innerText = data.name
        username.innerText = `@${data.login}`
        link.href = data.html_url
        avatar.src = data.avatar_url

        // Para impedir de o javascript adicione o dado da api sobre o h4 
        let repositoriesTextNode = document.createTextNode(`${data.public_repos}`)
        let followersTextNode = document.createTextNode(`${data.followers}`)
        let followingTextNode = document.createTextNode(`${data.following}`)
        
        repositories.appendChild(repositoriesTextNode)
        followers.appendChild(followersTextNode)
        following.appendChild(followingTextNode)
    })
    .catch(function (erro) {
        alert('Ocorreu algum erro ao buscar informações.')
    })
})