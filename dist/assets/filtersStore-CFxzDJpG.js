import{d,p as f,q as p,o as c,c as y,v,x as m,b as h,y as M,z as g,_ as x,A as F,f as u}from"./index-DbnWyiob.js";const B=d({__name:"UIInput",props:f({variant:{},type:{},placeholder:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=p(l,"modelValue"),o=l;return(s,t)=>(c(),y("div",{class:g(["ui-input",`ui-input--${s.variant}`])},[v(h("input",M({"onUpdate:modelValue":t[0]||(t[0]=i=>a.value=i)},{...o},{type:"text",class:"text-20"}),null,16),[[m,a.value]])],2))}}),H=x(B,[["__scopeId","data-v-afcc31bd"]]),Y=F("filters",()=>{const l=u({apartType:"Квартира",city:"Санкт-Петербург",rooms:[],metro:[],metroDistance:null,renovation:[],priceMin:null,priceMax:null,furniture:null,floorMin:null,floorMax:null,petsAndKids:[],goods:[],houseBuildYearMin:null,houseBuildYearMax:null,houseHeightMin:null,houseHeightMax:null,houseEnvironment:[]}),a=u({apartType:{field:"apartType",type:"equals"},city:{field:"city",type:"equals"},rooms:{field:"rooms",type:"in"},metro:{field:"metro",type:"in"},metroDistance:{field:"metroDistance",filterField:"metroDistance",type:"less"},priceMin:{field:"price",filterField:"priceMin",type:"greater"},priceMax:{field:"price",filterField:"priceMax",type:"less"},furniture:{field:"furniture",type:"equals"},floorMin:{field:"floor",filterField:"floorMin",type:"greater"},floorMax:{field:"floor",filterField:"floorMax",type:"less"},renovation:{field:"renovation",type:"in"},petsAndKids:{field:"petsAndKids",type:"allIn"},goods:{field:"goods",type:"allIn"},houseBuildYearMin:{field:"houseBuildYear",filterField:"houseBuildYearMin",type:"greater"},houseBuildYearMax:{field:"houseBuildYear",filterField:"houseBuildYearMax",type:"less"},houseHeightMin:{field:"houseHeight",filterField:"houseHeightMin",type:"greater"},houseHeighMax:{field:"houseHeight",filterField:"houseHeightMax",type:"less"},houseEnvironment:{field:"houseEnvironment",type:"allIn"}});return{currentFilters:a,filterValues:l,addCheckValue:(t,i)=>{l.value[t]?l.value[t].includes(i)?l.value[t]=[...l.value[t].filter(e=>e!==i)]:l.value[t]=[...l.value[t],i]:console.warn("Filter field not found: ",t)},applyFilters:t=>{let i=[...t];for(const e of Object.values(a.value))e.type==="equals"&&l.value[e.field]!==null&&(i=i.filter(r=>r[e.field]===l.value[e.field])),e.type==="greater"&&l.value[e.filterField]!==null&&(i=i.filter(r=>Number(r[e.field])>=Number(l.value[e.filterField]))),e.type==="less"&&l.value[e.filterField]!==null&&(i=i.filter(r=>Number(r[e.field])<=Number(l.value[e.filterField]))),e.type==="in"&&l.value[e.field].length>0&&(i=i.filter(r=>l.value[e.field].includes(r[e.field].toString()))),e.type==="allIn"&&l.value[e.field].length>0&&(i=i.filter(r=>l.value[e.field].every(n=>r[e.field].includes(n))));return i}}});export{H as U,Y as u};
