(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{44:function(e,a,t){e.exports=t(94)},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(22),c=t.n(i),l=(t(49),t(37)),o=t(8),s=(t(50),t(51),t(38)),m=t.n(s),u=t(39),d=t.n(u),g=t(15),p=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,i=e.children;return r.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},i)},h=function(){return Object(n.useContext)(p)},E=t(28),f=t.n(E),b=(f.a.initializeApp({apiKey:"AIzaSyCuPByNbV8z1YyNFIYmA6XNZZCVyUJENa4",authDomain:"clone-66f58.firebaseapp.com",databaseURL:"https://clone-66f58.firebaseio.com",projectId:"clone-66f58",storageBucket:"clone-66f58.appspot.com",messagingSenderId:"1046549795113",appId:"1:1046549795113:web:f42c00f1072c2f5c3e6738"}).firestore(),f.a.auth());var v=function(){var e=h(),a=Object(o.a)(e,2),t=a[0],n=t.basket,i=t.user;return a[1],r.a.createElement("div",{className:"header"},r.a.createElement(g.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png"})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{className:"header__searchInput",type:"text"}),r.a.createElement(m.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(g.b,{to:!i&&"/login"},r.a.createElement("div",{className:"header__option header__signInButton",onClick:function(){i&&b.signOut()}},r.a.createElement("span",{className:"header__optionLineOne"},"Hello, ",i?i.email.substring(0,i.email.lastIndexOf("@")):"Guest"),r.a.createElement("span",{className:"header__optionLineTwo"},i?"Sign out":"Sign In"))),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header__optionLineTwo"},"Order")),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),r.a.createElement(g.b,{to:"/checkout"},r.a.createElement("div",{className:"header_optionBasket"},r.a.createElement(d.a,null),r.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))},S=(t(67),t(68),Object(n.forwardRef)((function(e,a){var t=e.id,n=e.title,i=e.image,c=e.price,l=e.rating,s=h(),m=Object(o.a)(s,2),u=(m[0].basket,m[1]);return r.a.createElement("div",{className:"product",ref:a},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,n),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c))),r.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,a){return r.a.createElement("p",null,"\u2b50")}))),r.a.createElement("img",{className:"product__image",src:i}),r.a.createElement("button",{onClick:function(){u({type:"ADD_TO_BASKET",item:{id:t,title:n,price:c,rating:l,image:i}})}},"Add to basket"))})));t(69),t(70),t(71),t(72);var N=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("img",{className:"home__image",src:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"}),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"4903332",title:"Navaris Omega Headphone Stand - Synthetic Leather Headset Hanger with Wooden Base - Holder for Wired, Wireless, Gaming, DJ, Studio Headphones - Blue",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg",rating:3}),r.a.createElement(S,{id:"49038340",title:"Sceptre 24 Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)",price:118.99,image:"https://images-na.ssl-images-amazon.com/images/I/71qCGPWI8aL._AC_SX425_.jpg",rating:3}),r.a.createElement(S,{id:"32544345",title:"Jula Vance Large Makeup Train Case with Speaker & Code Lock & Full Screen Lighted Mirror & 3 Light Colors Lighted Rolling Cosmetic Organizer, Professional Artist Trolley Studio Free Standing",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/61B2WonLXGL._AC_SX425_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"23445938",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY327_FMwebp_QL65_.jpg"}),r.a.createElement(S,{id:"32544345",title:"New apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://m.media-amazon.com/images/I/51W2e10l3UL._AC_UY327_FMwebp_QL65_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"4901234",title:"Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)",price:1094.99,rating:4,image:"https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY327_FMwebp_QL65_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"4903332",title:"New 2020 Bicycle & Motorcycle Phone Mount - The Most Secure & Reliable Bike Phone Holder for iPhone, Samsung or Any Smartphone. Stress-Resistant and Highly Adjustable. +100 to Safeness & Comfort",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/71vTs90yMDL._AC_SX522_.jpg",rating:3}),r.a.createElement(S,{id:"49038340",title:"iSaddle CH-150-159 4.3 & 5 Garmin Nuvi 52 GPS Suction Cup Mount GPS Rigid Low Profile GelBase GripLock Dashboard Windshield Suction Car Holder Mount - Best Replacement for 010-11983-00",price:118.99,image:"https://images-na.ssl-images-amazon.com/images/I/41XGQUl8BlL._AC_.jpg",rating:3})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"4903850",title:"Aduro Vanity Mirror Makeup Mirror With Lights And Bluetooth Speaker, U-Reflect Audio Home Beauty LED Wireless Swivel Smart Mirror With Tray Rechargeable, (White)",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/61ibAKXOpeL._SX425_.jpg"}),r.a.createElement(S,{id:"23445938",title:"Dr pen Professional Ultima Derma Pen,Nano Microneedling Pen,Rechargeable Skin Care Tools Beauty System Makeup Pen with 12pcs Set of Replacement Needle Cartidge",price:88.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71Ak3yV2f%2BL._SY355_.jpg"}),r.a.createElement(S,{id:"4903850",title:"Coty Airspun Loose Face Powder 2.3 oz. Translucent Tone Loose Face Powder, for Setting Makeup or as Foundation, Lightweight, Long Lasting,Pack of 1",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71le2ZYj97L._SX522_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"4901234",title:"Klipsch Black Reference Theater Pack 5.1 Surround Sound System",price:400.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/81UTwdVe-0L._AC_SX425_.jpg"}))))},k=t(3),y=(t(88),t(40)),A=(t(89),t(41)),j=t.n(A),w=t(31),C=t(18),O=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)};var L=function(){var e,a=h(),t=Object(o.a)(a,2),n=t[0].basket,i=(t[1],Object(y.a)(n));try{for(i.s();!(e=i.n()).done;){e.value.price}}catch(c){i.e(c)}finally{i.f()}return r.a.createElement("div",{className:"subtotal"},r.a.createElement(j.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",null===n||void 0===n?void 0:n.length," items): ",r.a.createElement("strong",null,e)),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"})," This order contains a small gift"))},decimalScale:2,value:O(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",null,"Proceed to checkout"))},I=(t(91),Object(n.forwardRef)((function(e,a){var t=e.id,n=(e.basketId,e.title),i=e.image,c=e.price,l=e.rating,s=h(),m=Object(o.a)(s,2),u=(m[0],m[1]);return r.a.createElement("div",{className:"checkoutProduct",ref:a},r.a.createElement("img",{className:"checkoutProduct__image",src:i,alt:""}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},n),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,a){return r.a.createElement("p",null,"\u2b50")}))),r.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from basket")))}))),P=t(42);var B=function(){var e=h(),a=Object(o.a)(e,2),t=a[0],n=t.basket,i=t.user;return a[1],r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{className:"checkout__ad",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT19_tRK6I0qOKLSrNToc7xOEjIIWMGF_7v_Q&usqp=CAU",alt:""}),r.a.createElement("div",null,r.a.createElement("h3",null,"Hello, ",i?i.email.substring(0,i.email.lastIndexOf("@")):"Guest"),r.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),r.a.createElement(P.a,{staggerDurationBy:"30",duration:500},n.map((function(e,a){return r.a.createElement(I,{key:"".concat(e.id,"-").concat(a),id:e.id,image:e.image,title:e.title,price:e.price,rating:e.rating})}))))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(L,null)))};t(92);var z=function(){var e=Object(k.f)(),a=Object(n.useState)(""),t=Object(o.a)(a,2),i=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],u=s[1];return r.a.createElement("div",{className:"login"},r.a.createElement(g.b,{to:"/"},r.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign in"),r.a.createElement("form",null,r.a.createElement("h5",null,"Email"),r.a.createElement("input",{type:"text",value:i,onChange:function(e){return c(e.target.value)}}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{className:"login__signInButton",onClick:function(a){a.preventDefault(),b.signInWithEmailAndPassword(i,m).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit"},"Sign In")),r.a.createElement("p",null,"By continuing, you agree to Amazon's Fake",r.a.createElement("strong",null," Conditions of Use")," and ",r.a.createElement("strong",null,"Privacy Notice.")),r.a.createElement("p",{className:"login__newToAmazon"},"New to Amazon ?"),r.a.createElement("button",{className:"login__registerButton",onClick:function(a){b.createUserWithEmailAndPassword(i,m).then((function(a){console.log(a),a&&e.push("/")})).catch((function(e){return alert(e.message)})),a.preventDefault()}},"Create you amazon account")))};var M=function(){var e=h(),a=Object(o.a)(e,2);Object(l.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){console.log("The user is",e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/login"},r.a.createElement(z,null)),r.a.createElement(k.a,{path:"/checkout"},r.a.createElement(v,null),r.a.createElement(B,null)),r.a.createElement(k.a,{path:""},r.a.createElement(v,null),r.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,{initialState:{basket:[]},reducer:function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(w.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(w.a)(e.basket);return t>=0?n.splice(t,1):console.warn("cant remove (id: ".concat(a.id,") as its not in basket")),Object(C.a)(Object(C.a)({},e),{},{basket:n});case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:a.user});default:return e}}},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.85fdaa4e.chunk.js.map