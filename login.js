let inputLogin = $("#usuario");
let inputSenha = $("#senha");

listaUser = [];
listaUser = JSON.parse(localStorage.getItem('listaUser'))

$("#login").click(()=>{
    
    let valid;
    let arrValue;

    for(let i = 0; i < listaUser.length; i++){
        arrValue = i;
        valid = inputLogin.val() == listaUser[i].usuario;

        if(valid==true){
            break
        }
    }

    if(valid){
        validaSenha(inputSenha.val(),arrValue)

    }else{
        alert`Login incorreto ou não cadastrado`
    }
})

function validaSenha(senha,arrV) {

    let valid;

    valid = senha == listaUser[arrV].senha;

    if(valid){
        alert`Você será redirecionado`

    }else{
        alert`Login ou senha incorreto`
    }
 
}



let checkemail = () =>{

    validUsuario = $("#usuario")
    
    if(validUsuario.val().indexOf('@') == -1 || validUsuario.val().indexOf('.com') == -1){
        validUsuario.attr('style', 'color:red');
        validUsuario.attr('style', 'border-color:red');
        $("#lbusuario").attr('style', 'color:red');
    }else{
        validUsuario.attr('style', 'color:green');
        validUsuario.attr('style', 'border-color:green');
        $("#lbusuario").attr('style', 'color:green');
    }
}