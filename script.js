const campomoradia = document.getElementById('moradia');
const selectquintal = document.getElementById('quintal');
const divapartamento = document.getElementById('apartamentodiv');
const divcasa = document.getElementById('casadiv');
const divquintalseguro = document.getElementById('quintaldiv');

campomoradia.addEventListener('change', function(){

    if (campomoradia.value === 'apartamento') {
        divapartamento.style.display = 'block';
        divcasa.style.display = 'none';
    }

    else if (campomoradia.value === 'casa') {
        divcasa.style.display = 'block';
        divapartamento.style.display = 'none';
    }

    else {
        divapartamento.style.display = 'none';
        divcasa.style.display = 'none';
    }

})

selectquintal.addEventListener('change', function() {

    if (selectquintal.value === 'sim') {
        divquintalseguro.style.display = 'block';
    }

    else {
        divquintalseguro.style.display = 'none';
    }
})
