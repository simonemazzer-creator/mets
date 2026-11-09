
const T = window.OM_T = {
  en: {name:'English',
    kicker:'METSTRADE 2026 · Amsterdam', title:'Stainless steel excellence for yachts and superyachts', sub:'Designed, machined and finished in Italy since 1985. Thank you for visiting our stand.',
    b_h:'Company brochure', b_p:'Our story, our workshop and our work on board.', b_go:'Open brochure',
    c_h:'Product catalogue', c_p:'Hinges, cleats, hatches, doors, ladders and custom stainless parts.', c_go:'Browse the catalogue',
    ct_h:'Contacts', call:'Call', save:'Save contact', office:'Office:', so_h:'Follow us', web:'Website'},
  it: {name:'Italiano',
    kicker:'METSTRADE 2026 · Amsterdam', title:'Eccellenza in acciaio inox per yacht e superyacht', sub:'Progettiamo, lavoriamo e rifiniamo in Italia dal 1985. Grazie per aver visitato il nostro stand.',
    b_h:'Brochure aziendale', b_p:'La nostra storia, la nostra officina e i nostri lavori a bordo.', b_go:'Apri la brochure',
    c_h:'Catalogo prodotti', c_p:'Cerniere, bitte, portelli, porte, scale e componenti inox su misura.', c_go:'Sfoglia il catalogo',
    ct_h:'Contatti', call:'Chiama', save:'Salva contatto', office:'Ufficio:', so_h:'Seguici', web:'Sito web'},
  nl: {name:'Nederlands',
    kicker:'METSTRADE 2026 · Amsterdam', title:'Roestvrij staal van topkwaliteit voor jachten en superjachten', sub:'Sinds 1985 ontworpen, bewerkt en afgewerkt in Italië. Bedankt voor uw bezoek aan onze stand.',
    b_h:'Bedrijfsbrochure', b_p:'Ons verhaal, onze werkplaats en ons werk aan boord.', b_go:'Brochure openen',
    c_h:'Productcatalogus', c_p:'Scharnieren, bolders, luiken, deuren, trappen en roestvrijstalen maatwerk.', c_go:'Bekijk de catalogus',
    ct_h:'Contact', call:'Bellen', save:'Contact opslaan', office:'Kantoor:', so_h:'Volg ons', web:'Website'},
  de: {name:'Deutsch',
    kicker:'METSTRADE 2026 · Amsterdam', title:'Edelstahl in Bestform für Yachten und Superyachten', sub:'Seit 1985 in Italien konstruiert, gefertigt und veredelt. Danke für Ihren Besuch an unserem Stand.',
    b_h:'Unternehmensbroschüre', b_p:'Unsere Geschichte, unsere Werkstatt und unsere Arbeit an Bord.', b_go:'Broschüre öffnen',
    c_h:'Produktkatalog', c_p:'Scharniere, Poller, Luken, Türen, Leitern und Edelstahl-Sonderanfertigungen.', c_go:'Katalog ansehen',
    ct_h:'Kontakt', call:'Anrufen', save:'Kontakt speichern', office:'Büro:', so_h:'Folgen Sie uns', web:'Website'},
  fr: {name:'Français',
    kicker:'METSTRADE 2026 · Amsterdam', title:'L’excellence de l’inox pour yachts et superyachts', sub:'Conçus, usinés et finis en Italie depuis 1985. Merci de votre visite sur notre stand.',
    b_h:'Brochure de l’entreprise', b_p:'Notre histoire, notre atelier et nos réalisations à bord.', b_go:'Ouvrir la brochure',
    c_h:'Catalogue produits', c_p:'Charnières, taquets, panneaux, portes, échelles et pièces inox sur mesure.', c_go:'Voir le catalogue',
    ct_h:'Contacts', call:'Appeler', save:'Enregistrer le contact', office:'Bureau :', so_h:'Suivez-nous', web:'Site web'},
  es: {name:'Español',
    kicker:'METSTRADE 2026 · Ámsterdam', title:'Excelencia en acero inoxidable para yates y superyates', sub:'Diseñado, mecanizado y acabado en Italia desde 1985. Gracias por visitar nuestro stand.',
    b_h:'Folleto de empresa', b_p:'Nuestra historia, nuestro taller y nuestros trabajos a bordo.', b_go:'Abrir el folleto',
    c_h:'Catálogo de productos', c_p:'Bisagras, cornamusas, escotillas, puertas, escaleras y piezas inox a medida.', c_go:'Ver el catálogo',
    ct_h:'Contacto', call:'Llamar', save:'Guardar contacto', office:'Oficina:', so_h:'Síguenos', web:'Web'}
};
const ORDER = ['en','nl','de','fr','es','it'];
function pick() {
  try { const s = localStorage.getItem('om_lang'); if (s && T[s]) return s; } catch (e) {}
  const q = new URLSearchParams(location.search).get('lang'); if (q && T[q]) return q;
  return 'en';
}
function apply(l) {
  const d = T[l]; document.documentElement.lang = l;
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = d[el.dataset.t]; });
  document.getElementById('langBtn').textContent = l.toUpperCase();
    renderList(l);
}
const btn = document.getElementById('langBtn'), list = document.getElementById('langList');
function renderList(cur) {
  list.innerHTML = ORDER.map(k => `<li><button type="button" data-l="${k}" aria-current="${k===cur}">${T[k].name}</button></li>`).join('');
}
btn.onclick = (e) => { e.stopPropagation(); const o = list.hidden; list.hidden = !o; btn.setAttribute('aria-expanded', String(o)); };
list.onclick = (e) => { const b = e.target.closest('button[data-l]'); if (!b) return; try { localStorage.setItem('om_lang', b.dataset.l); } catch (err) {} apply(b.dataset.l); list.hidden = true; btn.setAttribute('aria-expanded','false'); };
document.addEventListener('click', () => { list.hidden = true; btn.setAttribute('aria-expanded','false'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { list.hidden = true; btn.setAttribute('aria-expanded','false'); } });
apply(pick());
