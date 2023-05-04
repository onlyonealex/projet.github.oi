const texteAleatoire = () => {
  let number = Math.floor(Math.random()*6); 
    if (number === 1){
        return 'Hello';
        } else if (number === 2){
        return 'Ciao';
        } else if (number === 3){
        return 'salut';
        } else if (number === 4){
        return 'Ke Ora';
        } else if (number === 5){
        return 'Oi';
        } else if (number === 0){
        return 'Holla';
        } else {
        return 'Hey';
    }; 
};
const misePage = document.getElementById("titre"); 
misePage.textContent = texteAleatoire();
