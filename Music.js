
        const m1 = document.getElementById('Son1');
        const bouton = document.getElementById('bouton');


        bouton.addEventListener('click', () => {

            if (m1.paused) {

                m1.play();
                bouton.src = "Pause.png";

            } else {

                m1.pause();
                bouton.src = "Play.png";
            }

        })


    </script>

<!-- Tu cibles l'ID de la musique et du bouton -->
<!-- T'ajoute un évènement click au bouton -->
<!-- Tu crée la condition du bouton : -->
