(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s=async()=>await(await fetch("https://api.quotable.io/random")).json(),a=async i=>{const n=document.createElement("p"),c=document.createElement("p"),o=document.createElement("button");o.id="next-quote",o.textContent="Siguiente nota",n.id="content",c.id="author";const e=r=>{c.textContent=`— ${r.author}`,n.textContent=`"${r.content}"`,i.replaceChildren(n,c,o)};o.addEventListener("click",async()=>{i.innerHTML='<p id="content">Cargando...</p>',t()});const t=async()=>{i.innerHTML='<p id="content">Cargando...</p>',s().then(e)};t()};document.querySelector("#app").innerHTML=`
  <div>
    <h1>Una pequeña aplicación de notas</h1>
    <div id="quote"></div>
    <div class="card">
      <p id="nota"></p>
    </div>
  </div>
`;const d=document.querySelector("#quote");a(d);
