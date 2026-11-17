/* Shared helpers for share.html and share-builder.html */
function parseVimeo(url){ if(!url) return null; const m=url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([a-zA-Z0-9]+))?/); return m?{id:m[1],hash:m[2]||null}:null; }
function parseYouTube(url){ if(!url) return null; const m=url.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/))([A-Za-z0-9_-]{11})/); return m?{id:m[1]}:null; }
function embedSrc(url){
  const v=parseVimeo(url);
  if(v){ const p=new URLSearchParams({title:'0',byline:'0',portrait:'0',dnt:'1',playsinline:'1'}); if(v.hash)p.set('h',v.hash); return `https://player.vimeo.com/video/${v.id}?${p}`; }
  const y=parseYouTube(url);
  if(y) return `https://www.youtube-nocookie.com/embed/${y.id}?rel=0&modestbranding=1&playsinline=1`;
  return null;
}
/* Every cut gets a stable key (its video id) so links keep working when projects are reordered. */
function cutKey(cut,pi,ci){ const v=parseVimeo(cut.video); if(v) return v.id; const y=parseYouTube(cut.video); if(y) return 'y'+y.id; return `p${pi}c${ci}`; }
function flattenCuts(data){
  const out=[];
  (data.projects||[]).forEach((p,pi)=>{
    const cuts=(p.cuts&&p.cuts.length)?p.cuts:[];
    cuts.forEach((c,ci)=>{ if(!c.video) return; out.push({key:cutKey(c,pi,ci),project:p,cut:c,poster:c.posterImage||p.posterImage||null}); });
  });
  return out;
}
function esc(s){ return String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
