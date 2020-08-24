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











function deletarDados(){}

function atualizarDados(){}

function lerDados(){}