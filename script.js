function fetchGitHubProfileJSON() {
    const username = 'Arnaud75020';
    const url = `https://github.com/${username}/simpsons-quotes-react`;
    fetch(url)
        .then(function(response) {
        return response.json[];
        })
        .then(function(profile) {
        const profileHtml = `
            <p><strong>${profile.name}</strong></p>
            <img src="${profile.avatar_url}" />
        `;
        document.querySelector('#github-profile').innerHTML = profileHtml;
        });
    }
    
    fetchGitHubProfileJSON();