(this.webpackJsonpproyecto_proteccion=this.webpackJsonpproyecto_proteccion||[]).push([[0],{13:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),a=i(3),s=i.n(a),r=(i(13),i(0)),l=function(){return Object(r.jsx)("nav",{className:"flex justify-end",children:Object(r.jsx)("p",{className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})})},j=i(4),h=i.n(j),o=i.p+"static/media/proteccionLogo.183be15d.png",d=function(){return Object(r.jsx)("div",{className:"ma4 mt0",children:Object(r.jsx)(h.a,{className:"br2 shadow-2",reverse:!0,scale:1.2,perspective:2e3,reset:!1,style:{transformStyle:"preserve-3d",height:90,width:150},children:Object(r.jsx)("div",{style:{transform:"translateZ(10px)"},children:Object(r.jsx)("img",{className:"content-center",src:o})})})})},m=i(5),g=i(6),b=i(8),f=i(7),u=function(e){var t,i,c=e.imageSrc,n=e.imageHeight,a=e.imageWidth,s=n/a,l=n>=a?"vertical":"horizontal";"vertical"===l?(t=796,i=1123):(t=1123,i=796);var j=a,h=n,o=function(){h=i,j=i/s},d=function(){j=t,h=t*s};"horizontal"===l&&a>t&&(d(),h>i&&o()),"vertical"===l&&n>i&&(o(),j>t&&d());var m=Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"f3",children:"Image preview"}),Object(r.jsx)("img",{src:c,width:"300px"}),Object(r.jsx)("p",{children:Object(r.jsx)("strong",{children:"Results"})}),Object(r.jsxs)("p",{children:["Orientation: ",l]}),Object(r.jsxs)("p",{children:["Height: ",h]}),Object(r.jsxs)("p",{children:["Width: ",j]})]});return Object(r.jsx)(r.Fragment,{children:m})},p=(i(15),i.p+"static/media/outbox.45eee138.svg"),x=function(e){Object(b.a)(i,e);var t=Object(f.a)(i);function i(e){var c;return Object(m.a)(this,i),(c=t.call(this,e)).handleChange=function(e){if("undefined"!==typeof e.target.files[0]){var t=new Image;t.src=URL.createObjectURL(e.target.files[0]);var i=[];t.onload=function(){i[0]=t.height,i[1]=t.width,c.setState({imageSrc:t.src,imageHeight:i[0],imageWidth:i[1]})}}},c.state={imageSrc:null,imageHeight:null,imageWidth:null},c}return Object(g.a)(i,[{key:"render",value:function(){var e=null===this.state.imageSrc?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)(u,{imageSrc:this.state.imageSrc,imageHeight:this.state.imageHeight,imageWidth:this.state.imageWidth});return Object(r.jsxs)("div",{className:"ma4 mt0",children:[Object(r.jsx)("p",{className:"f3",children:"This will detect the desired dimensions and orientation of the image to fit in an A4 page"}),Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsxs)("div",{className:"felx pa4 br3 shadow-2 align-center",children:[Object(r.jsx)("input",{className:"f4 pa2 inputfile",type:"file",name:"file",id:"file",accept:".jpg",onChange:this.handleChange}),Object(r.jsxs)("label",{className:"flex br2 grow mh3 ph3 pv2 ba bw1 b--black",htmlFor:"file",children:[Object(r.jsx)("img",{className:"align-center ph2",src:p,style:{height:"18px"}}),"Choose a file"]})]})}),e]})}}]),i}(c.Component),O=function(){return Object(r.jsx)("div",{className:"ma4 mt0",children:Object(r.jsx)("div",{className:"f1",children:"Hello, David"})})};i(16);var v=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(d,{}),Object(r.jsx)(O,{}),Object(r.jsx)(x,{})]})},N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),c(e),n(e),a(e),s(e)}))};i(17);s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),N()}},[[18,1,2]]]);
//# sourceMappingURL=main.a3b98387.chunk.js.map