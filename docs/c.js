
(function(){function j(c){document.removeEventListener("mousemove",j,!1);document.removeEventListener("touchstart",j,!1);y(c);for(var 
g=l-0.5*p,e=m-0.5*q,b=Math.sqrt(g*g+e*e),c=l+150*(g/b),b=m+150*(e/b),g=Math.atan2(e,g),g=g+Math.PI*(0.5+0.5*Math.random())*(0.5<Math.random()?1:-1),e=0;e<z;e++){for(var 
f=A[e].segments,d=0;d<u;d++){var 
a=f[d],h=0.15*Math.PI/u*d+g,k=2*Math.cos(h)*(u-d),h=2*Math.sin(h)*(u-d);a.x=c;a.y=b;a.vX=k;a.vY=h}j=!1}document.addEventListener("mousemove",y,!1);document.addEventListener("touchmove",
y,!1);document.addEventListener("touchstart",K,!1);setInterval(L,1E3/30)}function 
L(){n.globalCompositeOperation="source-over";n.fillStyle="rgba(8,8,12,0.9)";n.fillRect(0,0,p,q);n.globalCompositeOperation="lighter";B.autoplay?(0==C++%10&&(D=G+0.6*Math.sin(0.03*C)*G,E=0.7*C+(0==M++%2?Math.PI:0)+Math.random(),H=0.5*p+1.25*Math.cos(E)*D,I=0.5*q+Math.sin(E)*D),r+=0.2*(H-r),s+=0.2*(I-s)):(r=l,s=m);for(var 
c=[],g=z,e=g;e--;){var b=A[e],f=b.spring,d=b.segments[0];d.vX+=(r-d.x)*f;d.vY+=(s-d.y)*f;for(d=-1;++d<
u;){var a=b.segments[d];if(0<d){var 
h=b.segments[d-1];a.vX+=(h.x-a.x)*f;a.vY+=(h.y-a.y)*f;a.vX+=0.35*h.vX;a.vY+=0.35*h.vY}f*=0.97;a.vX*=b.friction;a.vY*=b.friction;a.x+=a.vX;a.y+=a.vY;c[d]={x:a.x,y:a.y}}t<F&&(t+=0.25,t>=F&&(t=F));n.strokeStyle=b.getColor();for(var 
b=n,f=c,d=e/g*t+1,k=void 0,i=void 0,h=a=void 
0,k=f[0].x,i=f[0].y,o=0,j=f.length;++o<j;)b.lineCap=2>o?"round":"butt",b.lineWidth=d-o/j*d+0.1,b.beginPath(),b.moveTo(k,i),a=f[o-1].x,h=f[o-1].y,k=f[o].x,i=f[o].y,k=0.5*(a+k),i=0.5*(h+i),b.quadraticCurveTo(a,
h,k,i),b.stroke()}}function 
J(){this.spring=0.01;this.friction=0.55;this.gravity=0;this.segments=[];this.targY=this.targX=this.frameCount=0;this.path=[];this.r=Math.round(200*Math.random())+55;this.g=Math.round(200*Math.random())+55;this.b=Math.round(200*Math.random())+55;this.deltaR=0.002;this.deltaG=0.0015;this.deltaB=0.001;this.changeRate=2}function 
N(){this.vY=this.vX=this.y=this.x=0}function v(){window.scrollTo(0,1);p=window.innerWidth;q=window.innerHeight;w.width=p;w.height=q}function y(c){c.touches?
1==event.touches.length&&(event.preventDefault(),l=event.touches[0].pageX,m=event.touches[0].pageY):(l=c.clientX,m=c.clientY)}function O(){return!1}function 
P(){return!1}function K(c){1==c.touches.length&&(l=c.touches[0].pageX,m=c.touches[0].pageY)}var 
x=[[{r:68,g:95,b:82},{r:28,g:44,b:80},{r:43,g:19,b:102},{r:97,g:52,b:210},{r:142,g:52,b:144},{r:14,g:203,b:192},{r:21,g:24,b:233}],[{r:198,g:192,b:231},{r:200,g:243,b:165},{r:224,g:78,b:46},{r:190,g:204,b:56},{r:52,g:166,b:57},{r:209,g:26,b:78},{r:130,
g:232,b:21}],[{r:147,g:39,b:43},{r:120,g:228,b:29},{r:204,g:211,b:201},{r:83,g:169,b:94},{r:117,g:42,b:235},{r:24,g:225,b:138},{r:183,g:124,b:250}],[{r:72,g:254,b:240},{r:72,g:254,b:240},{r:72,g:254,b:240},{r:72,g:254,b:240},{r:72,g:254,b:240},{r:72,g:254,b:240},{r:72,g:254,b:240}],[{r:255,g:0,b:0},{r:255,g:0,b:0},{r:255,g:0,b:0},{r:255,g:0,b:0},{r:255,g:0,b:0},{r:255,g:0,b:0},{r:255,g:0,b:0}]],B={},p=1E3,q=560,l=0,m=0,r=0,s=0,C=0,A=[],w,n,t=0,F=28,z=7,u=44,i,H,I,E,D,M=0,G=100;window.onload=function(){document.getElementsByClassName("info");
for(var c={},g=window.location.search.substring(1).split("&"),e=0;e<g.length;e++){var 
b=g[e].split("=");c[b[0]]=b[1]}B=c;c=B.colours;"random"!=c&&(i="mono"==c?x[3]:isNaN(parseInt(c))?x[0]:x[parseInt(c)%x.length]);w=document.getElementById("mainCanvas");n=w.getContext("2d");document.onmousedown=O;document.onmouseup=P;window.onresize=v;v(null);c=0.5*p;g=0.5*q;for(e=30;e--;){b=new 
J;b.spring=0.4+0.02*(e/z);A[e]=b;if(i){var f=e%i.length;b.r=i[f].r;b.g=i[f].g;b.b=i[f].b}for(f=70;f--;){var d=new N;d.x=
c;d.y=g;b.segments[f]=d}}r=l=c;s=m=g;document.addEventListener("mousemove",j,!1);document.addEventListener("touchstart",j,!1);document.body.addEventListener("orientationchange",v,!1);setTimeout(v,1,null)};J.prototype.getColor=function(){this.r+=this.deltaR*this.changeRate;this.g+=this.deltaG*this.changeRate;this.b+=this.deltaB*this.changeRate;var 
c=128*Math.sin(this.r)+127>>0,g=128*Math.sin(this.g)+127>>0,e=128*Math.sin(this.b)+127>>0;return"rgba("+c+","+g+","+e+",1)"}})();
	
