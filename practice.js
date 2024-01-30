
//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDP5lni633nbG6t9IpsLfUsAOD2lvqHzII",
  authDomain: "kwitter-14703.firebaseapp.com",
  databaseURL: "https://kwitter-14703-default-rtdb.firebaseio.com",
  projectId: "kwitter-14703",
  storageBucket: "kwitter-14703.appspot.com",
  messagingSenderId: "1001718339707",
  appId: "1:1001718339707:web:732c01894d59664ad66ade",
  measurementId: "G-25MHXKS307"
};


// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);



// Adicionar a função para adicionar usuário 
function addUser()
{
   user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
      purpose : "adicionando usuario "
   })
}