import{t as v,r as m,a as k,e as c,f as a,m as w,k as l,i as e,j as n,g as o,l as i,F as d,v as u,q as b}from"./app-CJCNr1XW.js";import{_ as P}from"./GuestLayout-Nl3aUoX0.js";const q={class:"py-20 bg-black bg-[url('https://vdigtech.com/wp-content/uploads/2024/03/Group.png')]"},R=e("div",null,[e("p",{class:"text-justify text-lg mb-5"},"Royal Services is a premium design package offering businesses exceptional value and unlimited access to high-quality design services. We provide three flexible plans: Monthly, Yearly, and a 3-Year Royal Partner package, each designed to save you money while meeting your specific needs. Our services include logo design, business cards, flyers, brochures, and more, all with unlimited revisions and fast, high-quality delivery."),e("p",{class:"text-justify text-lg mb-5"},"The Monthly Package offers unlimited designs at reduced rates, while the Yearly Package gives even greater savings, with up to 50% off on all services. For long-term value, the 3-Year Royal Partner Package offers handsome discounts and 201 free designs over three years. Each package ensures you get professional, high-quality designs, delivered quickly, with all source files included. We work closely with your ideas to bring your vision to life, offering a comprehensive design solution that’s both affordable and tailored to your business. Feel free to discuss your needs with us!")],-1),B=e("h3",{class:"text-center text-6xl font-bold py-10"},"Our Packages",-1),C={class:"flex flex-wrap items-center pb-10"},F={class:"w-1/3 px-3"},N={class:"w-full p-4 bg-gray-900 flex flex-col gap-5 hover:shadow-2xl hover:shadow-primary rounded-xl"},Y={class:"text-center text-3xl font-bold"},j={class:"flex flex-col items-center gap-2"},L={class:"text-center text-lg"},M={class:"flex flex-col gap-4"},T={class:"flex items-center gap-2"},$={__name:"Package",setup(V){const{loading:E,error:I,sendRequest:p}=v(),g=m(null),_=async()=>{const r=await p({method:"get",url:"/v1/package"});r&&(g.value=r.data)};return k(()=>{window.scrollTo(0,0),_()}),(r,O)=>{const h=c("Container"),y=c("Icon"),x=c("RouterLink");return a(),w(P,null,{default:l(()=>[e("section",q,[n(h,null,{default:l(()=>[R]),_:1})]),e("section",null,[n(h,null,{default:l(()=>{var f;return[B,e("div",C,[(a(!0),o(d,null,i((f=g.value)==null?void 0:f.data,s=>(a(),o("div",F,[e("div",N,[e("h3",Y,u(s==null?void 0:s.name),1),e("div",j,[(a(!0),o(d,null,i(s==null?void 0:s.sub_titles,t=>(a(),o("p",L,u(t==null?void 0:t.value),1))),256))]),e("ul",M,[(a(!0),o(d,null,i(s==null?void 0:s.items,t=>(a(),o("li",T,[n(y,{name:"material-symbols-light:check-circle-rounded",class:"text-primary"}),e("p",null,u(t.value),1)]))),256))]),e("div",null,[n(x,{to:`/royal-service/${s==null?void 0:s.slug}`,class:"w-full block border border-primary rounded-full py-2 text-center text-sm text-primary"},{default:l(()=>[b("Book Now")]),_:2},1032,["to"])])])]))),256))])]}),_:1})])]),_:1})}}};export{$ as default};
