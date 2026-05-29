document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('page-loader');
    const body = document.body;

    // Bloque le défilement au démarrage
    body.classList.add('loading');

    // CONFIGURATION : Durée de ton GIF avant de commencer à s'effacer
    const gifDuration = 6000; 

    if (loader) {
        // Temps 1 : Fin du GIF -> On lance le fade-out du GIF seul
        setTimeout(() => {
            loader.classList.add('gif-fade-out');

            // Temps 2 : Après le fondu du GIF (500ms de transition CSS), on efface le fond noir
            setTimeout(() => {
                loader.classList.add('bg-fade-out');
                
                // Libère le défilement du site
                body.classList.remove('loading');
            }, 500); // 500ms correspond à la durée de la transition CSS du GIF

        }, gifDuration);
    }
});