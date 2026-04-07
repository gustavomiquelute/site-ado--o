const selectMoradia = document.getElementById('moradia');
const divApartamento = document.getElementById('apartamentodiv');
const divCasa = document.getElementById('casadiv');

const selectQuintal = document.getElementById('quintal');
const divQuintalSeguro = document.getElementById('quintaldiv');


selectMoradia.addEventListener('change', function() {

    if (this.value === 'apartamento') {
        divApartamento.style.display = 'block';
        divCasa.style.display = 'none';
        divQuintalSeguro.style.display = 'none';
    } else if (this.value === 'casa') {
        divCasa.style.display = 'block';
        divApartamento.style.display = 'none';
    } else {
        divApartamento.style.display = 'none';
        divCasa.style.display = 'none';
        divQuintalSeguro.style.display = 'none';
    }
});


selectQuintal.addEventListener('change', function() {
    if (this.value === 'sim') {
        divQuintalSeguro.style.display = 'block';
    } else {
        divQuintalSeguro.style.display = 'none';
    }
});
