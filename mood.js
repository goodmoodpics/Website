/* Applies the visitor's saved "Pick a Mood" theme (same list and math as index.html).
   Default is Paper & royal. Runs before first paint so there is no flash. */
(function(){
  var THEMES=[
    {bg:'#1a17a0',accent:'#8ff29f'},{bg:'#0b1f3a',accent:'#57e0ff'},{bg:'#3b1e6e',accent:'#ff8a3d'},
    {bg:'#5a1428',accent:'#ff9ec7'},{bg:'#123d2e',accent:'#ffb38a'},{bg:'#00585a',accent:'#ffeec2'},
    {bg:'#3d2314',accent:'#ffc94d'},{bg:'#141414',accent:'#ffe14d'},{bg:'#b3122e',accent:'#fff1dc'},
    {bg:'#3f4512',accent:'#dcff5c'},{bg:'#e8337f',accent:'#fff04d'},{bg:'#c0c0c0',accent:'#000080',light:true},
    {bg:'#f3ead7',accent:'#1a17a0',light:true},{bg:'#e8b23a',accent:'#3b1e6e',light:true},
    {bg:'#9fd8ff',accent:'#e8410c',light:true},{bg:'#cdbfff',accent:'#1f1a7a',light:true}
  ];
  var DEFAULT=12;
  var h2r=function(h){return [1,3,5].map(function(i){return parseInt(h.slice(i,i+2),16)})};
  var r2h=function(a){return '#'+a.map(function(v){return Math.round(v).toString(16).padStart(2,'0')}).join('')};
  var mix=function(a,b,t){var x=h2r(a),y=h2r(b);return r2h(x.map(function(v,i){return v+(y[i]-v)*t}))};
  var i=NaN;try{i=parseInt(localStorage.getItem('gm-mood'),10)}catch(e){}
  var th=THEMES[i>=0&&i<THEMES.length?i:DEFAULT],root=document.documentElement;
  var ink=th.light?'#121212':'#ffffff',text=mix(ink,th.bg,th.light?.06:.04);
  var s=function(k,v){root.style.setProperty(k,v)};
  s('--bg',th.bg);s('--bg-rgb',h2r(th.bg).join(', '));
  s('--bg-panel',mix(th.bg,ink,.07));s('--bg-panel-2',mix(th.bg,ink,.12));
  s('--text',text);s('--text-dim',mix(ink,th.bg,th.light?.28:.26));
  s('--accent',th.accent);
  var tr=h2r(text).join(',');s('--line',"rgba("+tr+",0.18)");s('--line-strong',"rgba("+tr+",0.34)");
  root.classList.toggle('theme-light',!!th.light);
})();
