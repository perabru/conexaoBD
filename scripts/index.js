 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC0VveoDuSqxus5HGlpxfzY6_upWk5qc6E",
    authDomain: "myawesome-ed6dc.firebaseapp.com",
    databaseURL: "https://myawesome-ed6dc.firebaseio.com",
    projectId: "myawesome-ed6dc",
    storageBucket: "myawesome-ed6dc.appspot.com",
    messagingSenderId: "5242279623",
    appId: "1:5242279623:web:48f56ef2d55c391ecbd0e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  //Referencia do banco
  var userRef = firebase.database().ref("cadastro");



//Função para inserir dados
function inserirDados(){


     var txtNome = document.getElementById("txtNome").value;
     var txtEmail = document.getElementById("txtEmail").value;
     var txtTelefone = document.getElementById("txtTelefone").value;
     var txtIdade = document.getElementById("txtIdade").value;

     //Strint to base 64
     var txtEmailCrp = btoa(txtEmail);

     var insert = userRef.child(txtEmailCrp).push({
        nome: txtNome,
        email: txtEmail,
        telefone: txtTelefone,
        idade: txtIdade
     });

     alert("Aluno cadastrado com sucesso");


}




function lerDados(){

    var email = document.getElementById("txtEmail").value;

    //document.getElementById("lblEmail").innerHTML = email;
    ///console.log(email);
    userRef.child(btoa(email)).on("child_added", snap=>{

        document.getElementById("lblNome").innerHTML = snap.child("nome").val();
        document.getElementById("lblTelefone").innerHTML = snap.child("telefone").val();
        document.getElementById("lblIdade").innerHTML = snap.child("idade").val();
        document.getElementById("lblEmail").innerHTML = snap.child("email").val();

        //Passando as informações para os campos de texto

        document.getElementById("txtNome").value =  snap.child("nome").val();
        document.getElementById("txtTelefone").value = snap.child("telefone").val();
        document.getElementById("txtIdade").value = snap.child("idade").val();
        document.getElementById("txtEmail").value = snap.child("email").val();
    });



}

function excluirDados(){
  


  var encEmail = btoa(document.getElementById("txtEmail").value);

  userRef.child(encEmail).remove();

  /*let userRef = this.database.ref('users/' + userId);
    userRef.remove()*/ 


}


function alterarDados(){




  var atualizacao = {

    nome:  document.getElementById("txtNome").value,
    email: document.getElementById("txtEmail").value,
    telefone: document.getElementById("txtTelefone").value,
    idade: document.getElementById("txtIdade").value
  }

  var email = document.getElementById("txtEmail").value;
  var encodedEmail = btoa(email.toString());

var newKey =  firebase.database().ref("cadastro").child(encodedEmail).push().key;

 

  var updateRef =   firebase.database().ref("cadastro").child(encodedEmail);


  var updates = {};

  updates[newKey] = atualizacao;

  updateRef.update(updates);

}




