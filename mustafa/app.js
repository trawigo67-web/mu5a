(function(){
  var meta={
    tr:{title:"Mustafa Özel – Wushu Milli Takım Antrenörü | Hamburg & Karasu",note:"Teşekkürler. Bu bir taslak: form henüz bağlı değil, mesajın gönderilmedi.",err:"Lütfen adını ve iletişim bilgini yaz."},
    de:{title:"Mustafa Özel – Wushu-Nationaltrainer | Hamburg & Karasu",note:"Danke. Dies ist ein Entwurf: Das Formular ist noch nicht verbunden, die Nachricht wurde nicht gesendet.",err:"Bitte Name und Kontakt angeben."}
  };
  var current='tr';
  function setLang(l){
    current=l;
    document.documentElement.lang=l;
    document.title=meta[l].title;
    document.querySelectorAll('[data-'+l+']').forEach(function(el){el.textContent=el.getAttribute('data-'+l);});
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===l?'true':'false');});
  }
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.lang);});});
  if((navigator.language||'').toLowerCase().indexOf('de')===0)setLang('de');

  var f=document.getElementById('contactForm');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var n=f.querySelector('.form__note');
    if(!f.elements["name"].value.trim()||!f.elements["contact"].value.trim()){n.textContent=meta[current].err;return;}
    n.textContent=meta[current].note;f.reset();
  });
})();
