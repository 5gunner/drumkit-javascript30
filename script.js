(function () {
    window.addEventListener('keydown', function (e) {
        let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        let key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
        if (audio === null) return;
        audio.currentTime = 0;
        audio.play();

        key.classList.add('pressed');
    });

    function removeButtonClass(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('pressed');
    }


    let keys = document.querySelectorAll('div.key');
    keys.forEach(key => {
        key.addEventListener('transitionend', removeButtonClass)
    })
}());