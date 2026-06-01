document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('page-loader');
    const body = document.body;

    if (loader) {
        // Vérification : Est-ce que le loader a déjà été vu durant cette session ?
        if (sessionStorage.getItem('loaderHasRun')) {
            // Si oui, on supprime immédiatement le loader du flux sans animation
            loader.style.display = 'none';
            body.classList.remove('loading');
        } else {
            // Si non (première arrivée sur le site), on exécute le loader normalement
            body.classList.add('loading');

            // CONFIGURATION : Durée du GIF avant de commencer à s'effacer
            const gifDuration = 6000; 

            // Temps 1 : Fin du GIF -> On lance le fade-out du GIF seul
            setTimeout(() => {
                loader.classList.add('gif-fade-out');

                // Temps 2 : Après le fondu du GIF (500ms), on efface le fond noir
                setTimeout(() => {
                    loader.classList.add('bg-fade-out');
                    body.classList.remove('loading');
                    
                    // On enregistre dans la session que le loader a été exécuté
                    sessionStorage.setItem('loaderHasRun', 'true');
                }, 500);

            }, gifDuration);
        }
    }
});
