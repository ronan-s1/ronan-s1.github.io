(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const z=["██████╗░░█████╗░███╗░░██╗░█████╗░███╗░░██╗","██╔══██╗██╔══██╗████╗░██║██╔══██╗████╗░██║","██████╔╝██║░░██║██╔██╗██║███████║██╔██╗██║","██╔══██╗██║░░██║██║╚████║██╔══██║██║╚████║","██║░░██║╚█████╔╝██║░╚███║██║░░██║██║░╚███║","╚═╝░░╚═╝░╚════╝░╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░╚══╝"],J="Ronan",V="visitor",Y="ronansingpurwala.com",q="123",X="https://github.com/ronan-s1/ronan-s1.github.io",Q={email:"singpurwala13@email.com",github:"ronan-s1",linkedin:"ronan-singpurwala-b47ba2240"},Z="Hey there, I'm Ronan Singpurwala!<br>I'm a developer based in Dublin, Ireland. I like building tools that make people's lives easier.<br><br><span style='font-weight: 800'>Experience:</span> SRE @ Workday, Web Developer @ Skillko<br><span style='font-weight: 800'>Education:</span> BSc in Computer Science Grade (First Class Honours) <br><span style='font-weight: 800'>Skills:</span> Python, Go, C, JavaScript, Java, Git, GNU/Linux, SQL, Docker, Grafana and more...",ee=[["SaleSights"," A financial management and POS system for small businesses with multiple daily users.","https://salesights.xyz/#/"],["Dublin Landmarks"," A full stack GeoDjango PWA to help people find things to do in Dublin.","https://github.com/ronan-s1/dublin-landmarks-PWA"],["DUBLIN FOOD LIST",' My silly food "blog" which people genuinely look at for recommendations.',"https://foodindublin.com/"]],te={background:"#0C0623",foreground:"#F8DDE5",banner:"#9d45f5",border:{visible:!0,color:"#8AFFA0"},prompt:{default:"#A5A7A7",user:"#66FF66",host:"#70FDFF",input:"#33FF33"},link:{text:"#B6AAEE",highlightColor:"#8AFFA0",highlightText:"#0C0623"},commands:{textColor:"#66FF99"}},r={ascii:z,title:J,username:V,hostname:Y,password:q,repoLink:X,social:Q,aboutGreeting:Z,projects:ee,colors:te};(()=>{const e=document.createElement("style"),t=document.head,n=`body {background: ${r.colors.background}}`,a=`body {color: ${r.colors.foreground}}`,o=`input {background: ${r.colors.background}}`,c=`input {color: ${r.colors.prompt.input}}`,h=`.output {color: ${r.colors.prompt.input}}`,I=`#pre-host {color: ${r.colors.prompt.host}}`,l=`#host {color: ${r.colors.prompt.host}}`,F=`#pre-user {color: ${r.colors.prompt.user}}`,M=`#user {color: ${r.colors.prompt.user}}`,x=`#prompt {color: ${r.colors.prompt.default}}`,U=`pre {color: ${r.colors.banner}}`,W=`a {color: ${r.colors.link.text}}`,_=`a:hover {background: ${r.colors.link.highlightColor}}`,G=`a:hover {color: ${r.colors.link.highlightText}}`,j=`.command {color: ${r.colors.commands.textColor}}`,K=`.keys {color: ${r.colors.banner}}`;t.appendChild(e),e.sheet&&(e.sheet.insertRule(`#bars {background: ${r.colors.background}}`),e.sheet.insertRule(`main {border-color: ${r.colors.border.color}}`),e.sheet.insertRule(`#bar-1 {background: ${r.colors.border.color}; color: ${r.colors.background}}`),e.sheet.insertRule(`#bar-2 {background: ${r.colors.border.color}}`),e.sheet.insertRule(`#bar-3 {background: ${r.colors.border.color}}`),e.sheet.insertRule(`#bar-4 {background: ${r.colors.border.color}}`),e.sheet.insertRule(`#bar-5 {background: ${r.colors.border.color}}`),e.sheet.insertRule(n),e.sheet.insertRule(a),e.sheet.insertRule(o),e.sheet.insertRule(c),e.sheet.insertRule(h),e.sheet.insertRule(I),e.sheet.insertRule(l),e.sheet.insertRule(F),e.sheet.insertRule(M),e.sheet.insertRule(x),e.sheet.insertRule(U),e.sheet.insertRule(W),e.sheet.insertRule(_),e.sheet.insertRule(G),e.sheet.insertRule(j),e.sheet.insertRule(K))})();const re={commands:[["'about'","Who's this ronan guy everyone's talking about?"],["'projects'","Maybe there's something interesting."],["'whoami'","A perplexing question."],["'repo'","View the Github repository."],["'banner'","Display the banner."],["'clear'","Clear the terminal."],["'sudo'","???"]]},oe=()=>{const e=[];return e.push("<br>"),re.commands.forEach(t=>{const n="&nbsp;";let a="";a+=n.repeat(2),a+="<span class='command'>",a+=t[0],a+="</span>",a+=n.repeat(17-t[0].length),a+=t[1],e.push(a)}),e.push("<br>"),e.push("Press <span class='keys'>[Tab]</span> for auto completion."),e.push("Press <span class='keys'>[Esc]</span> to clear the input line."),e.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands."),e.push("<br>"),e},se=oe(),ne=()=>{const e=[];return e.push("<br>"),r.ascii.forEach(t=>{let n="";for(let o=0;o<t.length;o++)t[o]===" "?n+="&nbsp;":n+=t[o];let a=`<pre>${n}</pre>`;e.push(a)}),e.push("<br>"),e.push("Type <span class='command'>'help'</span> for a list of all available commands."),e.push(`Type <span class='command'>'repo'</span> to view the GitHub repository or click <a href='${r.repoLink}' target='_blank'>here</a>.`),e.push("<br>"),e},B=ne(),ae=()=>{const e=[],t="&nbsp;",n="Email",a="Github",o="Linkedin",c=`<i class='fa-solid fa-envelope'></i> ${n}`,h=`<i class='fa-brands fa-github'></i> ${a}`,I=`<i class='fa-brands fa-linkedin'></i> ${o}`;let l="";return e.push("<br>"),e.push(r.aboutGreeting),e.push("<br>"),l+=t.repeat(2),l+=c,l+=t.repeat(17-n.length),l+=`<a target='_blank' href='mailto:${r.social.email}'>${r.social.email}</a>`,e.push(l),l="",l+=t.repeat(2),l+=h,l+=t.repeat(17-a.length),l+=`<a target='_blank' href='https://github.com/${r.social.github}'>github/${r.social.github}</a>`,e.push(l),l="",l+=t.repeat(2),l+=I,l+=t.repeat(17-o.length),l+=`<a target='_blank' href='https://www.linkedin.com/in/${r.social.linkedin}'>linkedin/${r.social.linkedin}</a>`,e.push(l),e.push("<br>"),e},ie=ae(),le=()=>{const e=["<br>","COMMAND NOT FOUND","Type <span class='command'>'help'</span> to get started.","<br>"],t=[];return e.forEach(n=>{t.push(n)}),t},ce=le(),ue=()=>{let e="";const t=[],n=`${r.projects.length} File(s)`,a="&nbsp;";return t.push("<br>"),r.projects.forEach(o=>{let c=`<a href="${o[2]}" target="_blank">${o[0]}</a>`;e+=a.repeat(2),e+=c,e+=a.repeat(17-o[0].length),e+=o[1],t.push(e),e=""}),t.push("<br>"),t.push(n),t.push("<br>"),t},pe=ue();let p=document.getElementById("write-lines"),b=0,$="",d,k=!1,v=!1,R=0,u=!1;const f=p,g=document.getElementById("terminal"),i=document.getElementById("user-input"),y=document.getElementById("input-hidden"),w=document.getElementById("password-input"),E=document.getElementById("password-field"),A=document.getElementById("pre-host"),P=document.getElementById("pre-user"),L=document.getElementById("host"),O=document.getElementById("user"),T=document.getElementById("prompt"),de=["help","about","projects","whoami","repo","banner","clear"],m=[],be=r.password,he=r.repoLink,H=()=>{const e=document.getElementById("main");e&&(e.scrollTop=e.scrollHeight)};function S(e){const t=e.key;switch(t){case"Enter":e.preventDefault(),v?ke():me(),H();break;case"Escape":i.value="";break;case"ArrowUp":D(t),e.preventDefault();break;case"ArrowDown":D(t);break;case"Tab":fe(),e.preventDefault();break}}function me(){if(!p||!T)return;const e="";let t;if(d=i.value,u?t=d:t=`<span class='output'>${d}</span>`,m.push(d),b=m.length,d==="clear"){N(d.toLowerCase().trim()),i.value=e,d=e;return}const n=document.createElement("div");n.innerHTML=`<span id="prompt">${T.innerHTML}</span> ${t}`,p.parentNode&&p.parentNode.insertBefore(n,p),d.trim().length!==0&&N(d.toLowerCase().trim()),i.value=e,d=e}function fe(){let e=i.value;for(const t of de)if(t.startsWith(e)){i.value=t;return}}function D(e){switch(e){case"ArrowDown":b!==m.length&&(b+=1,i.value=m[b],b===m.length&&(i.value=$));break;case"ArrowUp":b===m.length&&($=i.value),b!==0&&(b-=1,i.value=m[b]);break}}function N(e){if(e.startsWith("rm -rf")&&e.trim()!=="rm -rf"){k?e==="rm -rf src"&&!u?(u=!0,setTimeout(()=>{!g||!f||(g.innerHTML="",g.appendChild(f),p=f)}),ye(),setTimeout(()=>{s(["I SAID <u>NOT</u> TO DO THAT!","<br>"])},200),setTimeout(()=>{s(["You had one job.","<br>"])},1200)):s(e==="rm -rf src"&&u?["there's no more src folder.","<br>"]:u?["What else are you trying to delete?","<br>"]:["<br>","Directory not found.","type <span class='command'>'ls'</span> for a list of directories.","<br>"]):s(["Permission not granted.","<br>"]);return}switch(e){case"clear":setTimeout(()=>{!g||!f||(g.innerHTML="",g.appendChild(f),p=f)});break;case"banner":if(u){s(["WebShell v1.0.0","<br>"]);break}s(B);break;case"help":if(u){s(["maybe restarting your browser will fix this.","<br>"]);break}s(se);break;case"whoami":s(k?["super user","<br>"]:[`${r.username}`,"<br>"]);break;case"about":if(u){s(["Nothing to see here.","<br>"]);break}s(ie);break;case"projects":if(u){s(["I don't want you to break the other projects.","<br>"]);break}s(pe);break;case"repo":s(["Redirecting to github.com...","<br>"]),setTimeout(()=>{window.open(he,"_blank")},500);break;case"linkedin":s(["Redirecting to linkedin.com...","<br>"]),setTimeout(()=>{window.open("https://www.linkedin.com/in/ronan-singpurwala-b47ba2240/","_blank")},500);break;case"github":s(["Redirecting to github.com...","<br>"]),setTimeout(()=>{window.open("https://github.com/ronan-s1","_blank")},500);break;case"email":s(["Opening email...","<br>"]),setTimeout(()=>{window.open("mailto:singpurwala13@gmail.com","_blank")},500);break;case"rm -rf":if(u){s(["The audacity...","<br>"]);break}s(k?["Usage: <span class='command'>'rm -rf &lt;dir&gt;'</span>","<br>"]:["Permission not granted.","<br>"]);break;case"sudo":if(u){s(["no.","<br>"]);break}if(!w)return;v=!0,i.disabled=!0,y&&(y.style.display="none"),w.style.display="block",setTimeout(()=>{E.focus()},100);break;case"ls":if(u){s(["","<br>"]);break}s(k?["src","<br>"]:["Permission not granted.","<br>"]);break;case"type shi":window.open("https://www.youtube.com/watch?v=XcK8JdVlcXY","_blank");break;default:if(u){s(["type 'help'","<br>"]);break}s(ce);break;case"dir":s(["Windows user alert 🚨","<br>"]);break}}function s(e){e.forEach((t,n)=>{ge(t,n)})}function ge(e,t){setTimeout(()=>{if(!p)return;const n=document.createElement("p");n.innerHTML=e,p.parentNode.insertBefore(n,p),H()},40*t)}function C(){!y||!w||(E.value="",i.disabled=!1,y.style.display="block",w.style.display="none",v=!1,setTimeout(()=>{i.focus()},200))}function ke(){if(R===2){if(!y||!p||!w)return;s(["<br>","INCORRECT PASSWORD.","PERMISSION NOT GRANTED.","<br>","Try looking harder, use your tools.","<br>"]),C(),R=0;return}if(E.value===be){if(!p||!p.parentNode)return;s(["<br>","PERMISSION GRANTED.","please do NOT <span class='command'>'rm -rf'</span> me.","<br>"]),C(),k=!0;return}else E.value="",R++}function ye(){const e=document.getElementById("bars"),t=document.body,n=document.getElementById("main"),a=document.getElementsByTagName("span");if(e){e.innerHTML="",e.remove(),n&&(n.style.border="none"),t.style.backgroundColor="black",t.style.fontFamily="VT323, monospace",t.style.fontSize="20px",t.style.color="white";for(let o=0;o<a.length;o++)a[o].style.color="white";i.style.backgroundColor="black",i.style.color="white",i.style.fontFamily="VT323, monospace",i.style.fontSize="20px",T&&(T.style.color="white")}}const we=()=>{L&&(L.innerText=r.hostname),O&&(O.innerText=r.username),A&&(A.innerText=r.hostname),P&&(P.innerText=r.username),window.addEventListener("load",()=>{s(B)}),i.addEventListener("keypress",S),i.addEventListener("keydown",S),E.addEventListener("keypress",S),window.addEventListener("click",()=>{i.focus()}),console.log(`%cPassword: ${r.password}`,"color: red; font-size: 20px;")};we();