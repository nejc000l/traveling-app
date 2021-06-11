(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(17),n=c.n(a),i=(c(9),c(15)),l=(c(23),c(3)),r=c(0),j=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],b=function(e){var t=e.children,c=e.type,s=e.onClick,a=e.buttonStyle,n=e.buttonSize,i=j.includes(a)?a:j[0],b=o.includes(n)?n:o[0];return Object(r.jsx)(l.b,{to:"/sign-up",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(i," ").concat(b),onClick:s,type:c,children:t})})};c(30);var d=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!1),j=Object(i.a)(n,2),o=j[0],d=j[1],u=function(){return a(!1)},h=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(s.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsx)(l.b,{to:"/",className:"navbar-logo",onClick:u}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return a(!c)},children:Object(r.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/",className:"nav-links",onClick:u,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/services",className:"nav-links",onClick:u,children:"Services"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/products",className:"nav-links",onClick:u,children:"Products"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/sign-up",className:"nav-links-mobile",onClick:u,children:"Sign Up"})})]}),o&&Object(r.jsx)(b,{buttonStyle:"btn--outline",children:"SIGN UP"})]})})})},u=c(2);c(31);var h=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("li",{className:"cards__item",children:Object(r.jsxs)(l.b,{className:"cards__item__link",to:e.path,children:[Object(r.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(r.jsx)("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})}),Object(r.jsx)("div",{className:"cards__item__info",children:Object(r.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var m=function(){return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(r.jsx)("div",{className:"cards__container",children:Object(r.jsxs)("div",{className:"cards__wrapper",children:[Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(h,{src:"images/img-9.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),Object(r.jsx)(h,{src:"images/img-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})]}),Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(h,{src:"images/img-3.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),Object(r.jsx)(h,{src:"images/img-4.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),Object(r.jsx)(h,{src:"images/img-8.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})]})]})})]})};c(32);var x=function(){return Object(r.jsxs)("div",{className:"footer-container",children:[Object(r.jsx)("section",{className:"footer-subscription",children:Object(r.jsx)("p",{className:"footer-subscription-heading",children:"Join the Adventure newsletter to receive our best vacation deals"})}),Object(r.jsx)("section",{class:"social-media",children:Object(r.jsxs)("div",{class:"social-media-wrap",children:[Object(r.jsx)("div",{class:"footer-logo",children:Object(r.jsx)(l.b,{to:"/",className:"social-logo"})}),Object(r.jsxs)("div",{class:"social-icons",children:[Object(r.jsx)(l.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(r.jsx)("i",{class:"fab fa-facebook-f"})}),Object(r.jsx)(l.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(r.jsx)("i",{class:"fab fa-instagram"})}),Object(r.jsx)(l.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(r.jsx)("i",{class:"fab fa-youtube"})}),Object(r.jsx)(l.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(r.jsx)("i",{class:"fab fa-twitter"})}),Object(r.jsx)(l.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(r.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})};c(33);var O=function(){return Object(r.jsxs)("div",{className:"hero-container",children:[Object(r.jsx)("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(r.jsx)("h1",{children:"ADVENTURE AWAITS"}),Object(r.jsx)("p",{children:"What are you waiting for?"}),Object(r.jsxs)("div",{className:"hero-btns",children:[Object(r.jsx)(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(r.jsxs)(b,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey"),children:["WATCH TRAILER ",Object(r.jsx)("i",{className:"far fa-play-circle"})]})]})]})};var g=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{}),Object(r.jsx)(m,{}),Object(r.jsx)(x,{})]})};function p(){return Object(r.jsx)("h1",{className:"services"})}function v(){return Object(r.jsx)("h1",{className:"products"})}function f(){return Object(r.jsx)("h1",{className:"sign-up"})}var N=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/",exact:!0,component:g}),Object(r.jsx)(u.a,{path:"/services",component:p}),Object(r.jsx)(u.a,{path:"/products",component:v}),Object(r.jsx)(u.a,{path:"/sign-up",component:f})]})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};n.a.render(Object(r.jsx)(l.a,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),_()},9:function(e,t,c){}},[[34,1,2]]]);
//# sourceMappingURL=main.76c764b8.chunk.js.map