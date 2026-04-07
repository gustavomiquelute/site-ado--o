
var campoMoradia = document.getElementById('moradia');
var campoQuintal = document.getElementById('quintal');

campoMoradia.onchange = function() {
    
    if (campoMoradia.value == 'apartamento') {
        document.getElementById('apartamentodiv').style.display = 'block';
        document.getElementById('casadiv').style.display = 'none';
        document.getElementById('quintaldiv').style.display = 'none';
    } 
    
    else if (campoMoradia.value == 'casa') {
        document.getElementById('casadiv').style.display = 'block';
        document.getElementById('apartamentodiv').style.display = 'none';
    } 
    
    else {
        document.getElementById('apartamentodiv').style.display = 'none';
        document.getElementById('casadiv').style.display = 'none';
        document.getElementById('quintaldiv').style.display = 'none';
    }
};

campoQuintal.onchange = function() {
    
    if (campoQuintal.value == 'sim') {
        document.getElementById('quintaldiv').style.display = 'block';
    } else {
        document.getElementById('quintaldiv').style.display = 'none';
    }
};
