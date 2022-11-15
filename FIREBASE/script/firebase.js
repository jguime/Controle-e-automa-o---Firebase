
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "##########",
  authDomain: "##########",
  projectId: "###########",
  storageBucket: "##########",
  messagingSenderId: "##########",
  appId: "##########",
  measurementId: "##########"
};


// Inicializar conexão com firebase
firebase.initializeApp(firebaseConfig);

// Inicializando seleção do firestore
const db = firebase.firestore();

if(!firebase.initializeApp){
  console.log("Erro de conexao");
}else{console.log("Conectado com sucesso!")}




// Lista de eventos
db.collection("home").doc("controle").onSnapshot(function(doc) {
  let estadoBnt1 = document.getElementById("gpio1");
  let estadoBnt2 = document.getElementById("gpio2");
  let estadoBnt3 = document.getElementById("gpio3");
  let estadoBnt4 = document.getElementById("gpio4");
  let estadoBnt5 = document.getElementById("gpio5");
  let estadoBnt6 = document.getElementById("gpio6");
  let estadoBnt7 = document.getElementById("gpio7");
  let estadoBnt8 = document.getElementById("gpio8");
 
  if(doc.exists){
    console.log(typeof doc.data())

    
    const dados = doc.data();
    const colecao = doc.id;
    
    const gpio1 = dados.gpio1;
    const gpio2 = dados.gpio2;
    const gpio3 = dados.gpio3;
    const gpio4 = dados.gpio4;
    const gpio5 = dados.gpio5;
    const gpio6 = dados.gpio6;
    const gpio7 = dados.gpio7;
    const gpio8 = dados.gpio8;

    
    estadoBnt1.checked = gpio1;
    estadoBnt2.checked = gpio2;
    estadoBnt3.checked = gpio3;
    estadoBnt4.checked = gpio4;
    estadoBnt5.checked = gpio5;
    estadoBnt6.checked = gpio6;
    estadoBnt7.checked = gpio7;
    estadoBnt8.checked = gpio8;
    
    console.log("Coleção: "+ dados);  
  }else {console.log(doc.data())}
})  
// Função GET_Switch
function toggleCheckbox(element){
  var setVar =  db.collection("home").doc("controle");
  var VarBtn = element.id
  if(element.checked){

    switch (VarBtn) {
      case 'gpio1':
        setVar.update({gpio1:true}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio2':
        setVar.update({gpio2:true}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio3':
        setVar.update({gpio3:true}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio4':
        setVar.update({gpio4:true}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio5':
        setVar.update({gpio5:true}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio6':
        setVar.update({gpio6:true}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio7':
        setVar.update({gpio7:true}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio8':
        setVar.update({gpio8:true}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      
      default:
        console.error("Error updating document: ", error);
    }
  }else {
    switch (VarBtn) {
      case 'gpio1':
        setVar.update({gpio1:false}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio2':
        setVar.update({gpio2:false}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio3':
        setVar.update({gpio3:false}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio4':
        setVar.update({gpio4:false}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio5':
        setVar.update({gpio5:false}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio6':
        setVar.update({gpio6:false}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio7':
        setVar.update({gpio7:false}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      case 'gpio8':
        setVar.update({gpio8:false}).then(() => {console.log("Document successfully updated!");})
        .catch((error) => {console.error("Error updating document: ", error);});
        break;
      default:
        console.error("Error updating document: ", error);
    }
}

}
