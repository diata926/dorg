const home = document.getElementById('home');
const hom = document.getElementById('hom');
const evo = document.getElementById('evo');
const evolution = document.getElementById('evolution');
const boutique = document.getElementById('boutique');
const achat = document.getElementById('achat');
const plus = document.getElementById('plus');
const compteu = document.getElementById('compteur');
const pluss = document.getElementById('plus-b');
const plust = document.getElementById('plus-bt');
const plusn = document.getElementById('plus-btn');
const infos = document.getElementById('infos');
const inscri = document.getElementById('inscri');
const inscript = document.getElementById('inscript');
const info = document.getElementById('info');
const equipe = document.getElementById('equipe');
const equip = document.getElementById('equip');


let compteur = 0;

    plus.addEventListener('click', () => {
      compteur++;
      compteu.textContent = compteur;
    });

    pluss.addEventListener('click', () => {
        compteur++;
        compteu.textContent = compteur;
      });

      plusn.addEventListener('click', () => {
        compteur++;
        compteu.textContent = compteur;
      });

      plust.addEventListener('click', () => {
        compteur++;
        compteu.textContent = compteur;
      });

evolution.addEventListener('click', ()=>{
    evo.style.display ='flex';
    achat.style.display ='none';
    info.style.display ='none';
    equip.style.display ='none';
    hom.style.display ='none';
});

boutique.addEventListener('click', ()=>{
    achat.style.display ='flex';
    evo.style.display ='none';
    info.style.display ='none';
    hom.style.display ='none';
});

home.addEventListener('click', ()=>{
    hom.style.display ='flex';
    evo.style.display ='none';
    equip.style.display ='none';
    info.style.display ='none';
    achat.style.display ='none';
});

infos.addEventListener('click', ()=>{
    hom.style.display ='none';
    evo.style.display ='none';
    equip.style.display ='none';
    info.style.display ='flex';
    achat.style.display ='none';
});

inscri.addEventListener('click', ()=>{
  inscript.style.display ='flex';
  hom.style.display ='none';
  equip.style.display ='none';
  evo.style.display ='none';
  info.style.display ='none';
  achat.style.display ='none';
});

equipe.addEventListener('click', ()=>{
  equip.style.display ='flex';
  hom.style.display ='none';
  inscript.style.display ='none';
  evo.style.display ='none';
  info.style.display ='none';
  achat.style.display ='none';
});

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi par défaut

  const nom = document.getElementById('nom').value.trim();
  const prenom = document.getElementById('prenom').value.trim();
  const postnom = document.getElementById('postnom').value.trim();
  const classe = document.getElementById('classe').value.trim();
  const age = document.getElementById('age').value.trim();

  if (!nom || !prenom || !postnom || !classe || !age) {
    alert("Veuillez remplir tous les champs.");
  } else {
    alert("Formulaire envoyé !");
    form.reset(); // Réinitialise tous les champs du formulaire
  }
});
