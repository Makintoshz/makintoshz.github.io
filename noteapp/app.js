(function(){
  var btn=document.getElementById('lang');
  function set(l){
    document.documentElement.lang=l;
    document.documentElement.dir=l==='ar'?'rtl':'ltr';
    document.querySelectorAll('[data-en]').forEach(function(el){el.innerHTML=el.getAttribute('data-'+l)});
    if(btn)btn.textContent=l==='ar'?'English':'\u0639\u0631\u0628\u064a';
    try{localStorage.setItem('lang',l)}catch(e){}
  }
  var saved=null;try{saved=localStorage.getItem('lang')}catch(e){}
  set(saved||((navigator.language||'').indexOf('ar')===0?'ar':'en'));
  if(btn)btn.addEventListener('click',function(){set(document.documentElement.lang==='ar'?'en':'ar')});
  var y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
})();
