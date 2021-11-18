let p = document.getElementsByTagName('p');

for ( let i = 0 ; i < p.length ; i++) {
    p[i].innerHTML = 'Bonjour, je suis ' + p[i].innerHTML;
}
