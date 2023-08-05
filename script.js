function mudar(){
    let novo = document.getElementById("idnome")
    document.getElementById('titulo').required=true;
    document.getElementById('titulo').innerHTML= novo.value;
}

function inserir(){
    let numero = document.getElementById('posicao').value -1;
    let novo = document.getElementById('novo').value;

    document.getElementsByClassName('colocado')[numero].innerHTML = novo
}

function mostrar(){
    let numero = document.getElementById('number').value -1;
    let mes = document.getElementsByTagName('li')[numero].innerHTML;
    document.getElementById('resultado').innerHTML = mes;

}

document.querySelector("#btnmsg").onclick = () => alert('ola mundo')

document.querySelector("#btnmsg").addEventListener('click', () => alert('u'))