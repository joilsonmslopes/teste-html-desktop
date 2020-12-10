const cep = document.querySelector("#cep");

function limpar_formulario_cep () {
    document.getElementById("cep").value = "";
    document.getElementById("logradouro").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("localidade").value = "";
}

function showData(results) {
    for(let result in results) {
        if(document.querySelector("#"+result)) {
            document.querySelector("#"+result).value = results[result];
        }
    }
};

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-","");

    
    if(search.length != 8) {
        alert("Preencher o campo CEP");
        limpar_formulario_cep();
        document.querySelectorAll('.address_verify').forEach( q => {
            q.style.display = 'none'
        })
    } else {
        document.querySelectorAll('.address_verify').forEach( q => {
            q.style.display = 'block'
        })
        
        
        console.log(search)
        fetch(`https://viacep.com.br/ws/${search}/json/`)
        .then( response => response.json() )
        .then( data => { showData(data) })
        .catch( e => console.log('Erro na consulta: ' + e.message ));
        
    }
        
});