(this["webpackJsonpreact-restaurant"]=this["webpackJsonpreact-restaurant"]||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),s=a.n(r),o=(a(77),a(78),a(14)),i=a(15),l=a(17),j=a(16),h=a(45),u=a(8),d=a(10),b=a.n(d),m=a(69),g=a(121),O="http://localhost:3004/",x=a(24),f=a(25),p=a(1),v=function(e){var t=e.nama;return"Makanan"===t?Object(p.jsx)(x.a,{icon:f.f,className:"ms-1 me-2"}):"Minuman"===t?Object(p.jsx)(x.a,{icon:f.b,className:"me-1"}):"Cemilan"===t?Object(p.jsx)(x.a,{icon:f.a,className:"me-2"}):Object(p.jsx)(x.a,{icon:f.f,className:"ms-1 me-2"})},C=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={categories:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("".concat(O,"categories")).then((function(t){var a=t.data;e.setState({categories:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.categories,t=this.props,a=t.changeCategory,n=t.categoryChoose;return Object(p.jsxs)(m.a,{md:2,mt:"2",children:[Object(p.jsx)("h4",{children:Object(p.jsx)("strong",{children:"List Category"})}),Object(p.jsx)("hr",{}),Object(p.jsx)(g.a,{className:"mb-4",children:e&&e.map((function(e){return Object(p.jsx)(g.a.Item,{onClick:function(){return a(e.nama)},className:n===e.nama&&"category-active",style:{cursor:"pointer"},children:Object(p.jsxs)("h5",{children:[Object(p.jsx)(v,{nama:e.nama})," ",e.nama]})},e.id)}))})]})}}]),a}(n.Component),k=a(122),y=a(115);var S=function(){return Object(p.jsx)(k.a,{variant:"dark",expand:"lg",children:Object(p.jsx)(y.a,{fluid:!0,children:Object(p.jsxs)(k.a.Brand,{href:"#home",className:"mb-1",children:[Object(p.jsx)("strong",{children:"Cashier"})," App"]})})})},N=a(2),w=a(36),T=a.n(w),H=a(123),L=a(116),D=a(117);function B(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}var F=a(119),M=a(120),P=a(124);var I=function(e){var t=e.showModal,a=e.handleClose,n=e.keranjangDetail,c=e.jumlah,r=e.keterangan,s=e.totalHarga,o=e.plus,i=e.minus,l=e.changeHandler,j=e.handleSubmit,h=e.deleteOrder;return n?Object(p.jsxs)(F.a,{show:t,onHide:a,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:n.product.nama})}),Object(p.jsx)(F.a.Body,{children:Object(p.jsxs)(M.a,{onSubmit:j,children:[Object(p.jsxs)(M.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(p.jsx)(M.a.Label,{children:"Price Total :"}),Object(p.jsx)("p",{children:Object(p.jsxs)("strong",{children:["Rp. ",B(s)]})})]}),Object(p.jsxs)(M.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(p.jsx)(M.a.Label,{children:"Total :"}),Object(p.jsx)("br",{}),Object(p.jsx)(P.a,{variant:"primary",size:"sm",className:"me-2",onClick:function(){return i()},children:Object(p.jsx)(x.a,{icon:f.c})}),Object(p.jsx)("strong",{children:c}),Object(p.jsx)(P.a,{variant:"primary",size:"sm",className:"ms-2",onClick:function(){return o()},children:Object(p.jsx)(x.a,{icon:f.d})})]}),Object(p.jsxs)(M.a.Group,{controlId:"exampleForm.ControlTextarea1",className:"my-3",children:[Object(p.jsx)(M.a.Label,{children:"Description :"}),Object(p.jsx)(M.a.Control,{as:"textarea",rows:"3",name:"keterangan",value:r,onChange:function(e){return l(e)}})]}),Object(p.jsx)(P.a,{variant:"primary",type:"submit",className:"me-2",children:"Save"}),Object(p.jsx)(P.a,{variant:"danger",onClick:function(){return h(n.id)},children:"Delete"})]})})]}):Object(p.jsxs)(F.a,{show:t,onHide:a,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Empty"})}),Object(p.jsx)(F.a.Body,{children:"Empty"}),Object(p.jsxs)(F.a.Footer,{children:[Object(p.jsx)(P.a,{variant:"secondary",onClick:a,children:"Close"}),Object(p.jsx)(P.a,{variant:"primary",onClick:a,children:"Save Changes"})]})]})},_=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).submitTotalPrice=function(t){var a={total_bayar:t,menus:e.props.keranjangs};0!==e.props.keranjangs.length?b.a.post("".concat(O,"pesanans"),a).then((function(t){e.props.history.push("/success"),console.log(t)})).catch((function(e){console.log(e)})):T.a.fire({icon:"error",title:"Error",text:"Please Choose a Product First!"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.keranjangs.reduce((function(e,t){return e+t.total_harga}),0);return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("div",{className:"fixed-bottom d-none d-md-block",children:Object(p.jsx)(L.a,{children:Object(p.jsxs)(m.a,{md:{span:3,offset:9},className:"pe-4",children:[Object(p.jsxs)("h5",{className:"d-flex justify-content-between me-1",children:["Price Total: ",Object(p.jsxs)("strong",{children:["Rp. ",B(t)]})]}),Object(p.jsx)("div",{className:"d-grid mb-2 mt-3",children:Object(p.jsxs)(P.a,{variant:"primary",size:"lg",onClick:function(){return e.submitTotalPrice(t)},children:[Object(p.jsx)(x.a,{icon:f.e})," ",Object(p.jsx)("strong",{children:"CHECKOUT"})]})})]})})}),Object(p.jsx)("div",{className:"d-block d-md-none",children:Object(p.jsx)(L.a,{children:Object(p.jsxs)(m.a,{md:{span:3,offset:9},children:[Object(p.jsxs)("h5",{className:"d-flex justify-content-between me-1",children:["Price Total: ",Object(p.jsxs)("strong",{children:["Rp. ",B(t)]})]}),Object(p.jsx)("div",{className:"d-grid mb-2 mt-3",children:Object(p.jsxs)(P.a,{variant:"primary",size:"lg",onClick:function(){return e.submitTotalPrice(t)},children:[Object(p.jsx)(x.a,{icon:f.e})," ",Object(p.jsx)("strong",{children:"CHECKOUT"})]})})]})})})]})}}]),a}(n.Component),E=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleShow=function(e){n.setState({showModal:!0,keranjangDetail:e,jumlah:e.jumlah,keterangan:e.keterangan,totalHarga:e.total_harga})},n.handleClose=function(){n.setState({showModal:!1})},n.plus=function(){n.setState({jumlah:n.state.jumlah+1,totalHarga:n.state.keranjangDetail.product.harga*(n.state.jumlah+1)})},n.minus=function(){n.state.jumlah>1&&n.setState({jumlah:n.state.jumlah-1,totalHarga:n.state.keranjangDetail.product.harga*(n.state.jumlah-1)})},n.changeHandler=function(e){n.setState({keterangan:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.handleClose();var t={jumlah:n.state.jumlah,total_harga:n.state.totalHarga,product:n.state.keranjangDetail.product,keterangan:n.state.keterangan};b.a.put("".concat(O,"keranjangs/").concat(n.state.keranjangDetail.id),t).then((function(e){n.props.getListCart(),T.a.fire({icon:"success",title:"Success",text:"Successfully Update Order"})})).catch((function(e){console.log(e)}))},n.deleteOrder=function(e){n.handleClose(),T.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#22668a",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&b.a.delete("".concat(O,"keranjangs/").concat(e)).then((function(e){n.props.getListCart(),T.a.fire("Success","Successfully Delete Order.","success")})).catch((function(e){console.log(e)}))}))},n.state={showModal:!1,keranjangDetail:!1,jumlah:0,keterangan:"",totalHarga:0},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.keranjangs;return Object(p.jsxs)(m.a,{md:3,mt:"2",children:[Object(p.jsx)("h4",{children:Object(p.jsx)("strong",{children:"Cart"})}),Object(p.jsx)("hr",{}),0!==t.length&&Object(p.jsx)(H.a,{className:"overflow-auto cart",children:Object(p.jsxs)(g.a,{variant:"flush",children:[t.map((function(t){return Object(p.jsx)(g.a.Item,{onClick:function(){return e.handleShow(t)},style:{cursor:"pointer"},children:Object(p.jsxs)(L.a,{children:[Object(p.jsx)(m.a,{xs:2,children:Object(p.jsx)("h4",{children:Object(p.jsx)(D.a,{pill:!0,bg:"success",children:t.jumlah})})}),Object(p.jsxs)(m.a,{children:[Object(p.jsx)("h5",{children:t.product.nama}),Object(p.jsxs)("p",{children:["Rp. ",B(t.product.harga)]})]}),Object(p.jsx)(m.a,{className:"d-flex justify-content-end",children:Object(p.jsxs)("strong",{children:["Rp. ",B(t.total_harga)]})})]})},t.id)})),Object(p.jsx)(I,Object(N.a)(Object(N.a)({handleClose:this.handleClose},this.state),{},{plus:this.plus,minus:this.minus,changeHandler:this.changeHandler,handleSubmit:this.handleSubmit,deleteOrder:this.deleteOrder}))]})}),Object(p.jsx)(_,Object(N.a)({keranjangs:t},this.props))]})}}]),a}(n.Component),R={height:"9em",objectFit:"cover"};var z=function(e){var t=e.menu,a=e.addToCart;return Object(p.jsx)(m.a,{md:4,xs:6,className:"mb-4",children:Object(p.jsxs)(H.a,{className:"shadow",onClick:function(){return a(t)},style:{cursor:"pointer"},children:[Object(p.jsx)(H.a.Img,{variant:"top",src:"assets/images/".concat(t.category.nama.toLowerCase(),"/").concat(t.gambar),style:R}),Object(p.jsxs)(H.a.Body,{children:[Object(p.jsx)(H.a.Title,{children:t.nama}),Object(p.jsxs)(H.a.Text,{children:["Rp. ",B(t.harga)]})]})]})})},A=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getListCart=function(){b.a.get("".concat(O,"keranjangs")).then((function(e){var t=e.data;n.setState({keranjangs:t})})).catch((function(e){console.log(e)}))},n.changeCategory=function(e){n.setState({categoryChoose:e,menus:[]}),b.a.get("".concat(O,"products?category.nama=").concat(e)).then((function(e){var t=e.data;n.setState({menus:t})})).catch((function(e){console.log(e)}))},n.addToCart=function(e){b.a.get("".concat(O,"keranjangs?product.id=").concat(e.id)).then((function(t){if(0===t.data.length){var a={jumlah:1,total_harga:e.harga,product:e};b.a.post("".concat(O,"keranjangs"),a).then((function(e){n.getListCart(),console.log(e)})).catch((function(e){console.log(e)}))}else{var c={jumlah:t.data[0].jumlah+1,total_harga:t.data[0].total_harga+e.harga,product:e};b.a.put("".concat(O,"keranjangs/").concat(t.data[0].id),c).then((function(e){n.getListCart(),console.log(e)})).catch((function(e){console.log(e)}))}})).catch((function(e){console.log(e)}))},n.state={menus:[],categoryChoose:"Makanan",keranjangs:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("".concat(O,"products?category.nama=").concat(this.state.categoryChoose)).then((function(t){var a=t.data;e.setState({menus:a})})).catch((function(e){console.log(e)})),this.getListCart()}},{key:"render",value:function(){var e=this,t=this.state,a=t.menus,n=t.categoryChoose,c=t.keranjangs;return Object(p.jsx)("div",{className:"mt-3",children:Object(p.jsx)(y.a,{fluid:!0,children:Object(p.jsxs)(L.a,{children:[Object(p.jsx)(C,{changeCategory:this.changeCategory,categoryChoose:n}),Object(p.jsxs)(m.a,{children:[Object(p.jsx)("h4",{children:Object(p.jsx)("strong",{children:"List Products"})}),Object(p.jsx)("hr",{}),Object(p.jsx)(L.a,{className:"overflow-auto menu mb-2",children:a&&a.map((function(t){return Object(p.jsx)(z,{menu:t,addToCart:e.addToCart},t.id)}))})]}),Object(p.jsx)(E,Object(N.a)({keranjangs:c,getListCart:this.getListCart},this.props))]})})})}}]),a}(n.Component),G=a(118),U=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){b.a.get("".concat(O,"keranjangs")).then((function(e){e.data.map((function(e){return b.a.delete("".concat(O,"keranjangs/").concat(e.id)).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"mt-4 text-center",children:[Object(p.jsx)(G.a,{src:"assets/images/success.png",width:"350"}),Object(p.jsx)("h2",{children:"Successful Order"}),Object(p.jsx)("p",{children:"Thank you for ordering"}),Object(p.jsx)(P.a,{variant:"primary",as:h.b,to:"/",children:"Back to Home"})]})}}]),a}(n.Component),J=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(h.a,{children:[Object(p.jsx)(S,{}),Object(p.jsx)("main",{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/",exact:!0,component:A}),Object(p.jsx)(u.a,{path:"/success",component:U})]})})]})}}]),a}(n.Component),K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),K()},78:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.7d2eb24c.chunk.js.map