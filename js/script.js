window.addEventListener('load', function(){
    const player = document.querySelector('player');
    player.play().catch(() => {
        console.log("Dê o play ")
    });
});

