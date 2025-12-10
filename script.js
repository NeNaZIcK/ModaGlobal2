console.log("Projecte ModaGlobal carregat correctament");

document.getElementById("btnProva").addEventListener("click", () => {
    alert("Funcionalitat bàsica activada");
});

console.log('Nova funcionalitat afegida');

function afegirContacte(nom, telefon) {
    if (!nom.trim() || !telefon.trim()) {
        console.log("No pots afegir contactes en blanc.");
        return;
    }

    console.log("Contacte afegit:", nom, telefon);
}
