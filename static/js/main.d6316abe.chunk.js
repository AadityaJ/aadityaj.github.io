(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{167:function(e,t,a){e.exports=a(192)},176:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t),a.d(t,"history",(function(){return he}));var n=a(5),r=a.n(n),o=a(59),i=a.n(o),c=a(80),u=a(154),l=a(81),s=a(205),m=a(56),d=a(113),p=(a(176),a(177),a(82)),f=a(201),h=a(203),g=a(204),v=a(202),y=a(199),b=a(200),C=a(76),E=a(77),k=a(102),O=a(101),j=a(164),S=a(111),w=a.n(S),x=a(148),I=a(134),D="1pmXJKMq2ApiaSnUmEIkdpXQWwLOZ3eaMuoK9wea3RN0",M=function(){function e(){Object(C.a)(this,e)}return Object(E.a)(e,null,[{key:"getAllCompanies",value:function(){return e.makeQueries(D,"B2:B1848").then((function(e){return e.values.reduce((function(e,t,a){return e[a]=t[0],e}),[])}))}},{key:"getCompanyData",value:function(){var t=Object(x.a)(w.a.mark((function t(a,n,r){var o,i,c,u,l;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="C".concat(n+2,":IU").concat(n+2),i="C".concat(r+2,":IU").concat(r+2),t.next=4,e.makeQueries(D,o).then((function(e){return e.values[0]}));case 4:return c=t.sent,t.next=7,e.makeQueries(D,i).then((function(e){return e.values[0]}));case 7:return u=t.sent,t.next=10,e.makeQueries(D,"C1:IU1").then((function(e){return e.values[0]}));case 10:return l=t.sent,t.abrupt("return",{id:a,value:c.map((function(e,t){return{date:l[t],value:parseInt(e)/parseInt(u[t])}}))});case 12:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}()},{key:"getManagementInterviews",value:function(){var t=Object(x.a)(w.a.mark((function t(a){var n,r,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.makeQueries("13n92BF7dzExJ9Y4jf4S3Wg_9umwz26I_ZUY6JuIAOEk","H2:I100000").then((function(e){return e.values.map((function(e){return Object(I.isEmpty)(e[0])?e[1]:e[0]}))}));case 2:return n=t.sent,t.next=5,e.makeQueries("13n92BF7dzExJ9Y4jf4S3Wg_9umwz26I_ZUY6JuIAOEk","B2:G100000").then((function(e){return e.values}));case 5:return r=t.sent,o=r.reduce((function(e,t,r){return t[1]===a&&e.push({date:t[0],media:t[2],mangName:t[3],desig:t[4],title:t[5],link:n[r]}),e}),[]),t.abrupt("return",{value:o,id:a});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"makeQueries",value:function(e,t){return fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat(e,"/values/").concat(t,"?key=").concat("AIzaSyD7sMa9tWyeQ-9imPVlZr18vCGC5yr82Ks")).then((function(e){return e.json()}))}}]),e}(),L=a(72),A=function(e){return e.Ratio},R=function(e){return e.App},N=Object(L.a)(A,(function(e){return e.allCompanies})),z=Object(L.a)(A,(function(e){return e.company2})),F=Object(L.a)(R,(function(e){return e.loading})),B=Object(L.a)(R,(function(e){return e.companySelected})),_=Object(L.a)((function(e){return e.Management}),(function(e){return e.data})),P=Object(L.a)(N,B,(function(e,t){return e&&t&&e.findIndex((function(e){return e===t}))})),G=Object(L.a)(N,z,(function(e,t){return e&&t&&e.findIndex((function(e){return e===t}))})),W=Object(L.a)(A,(function(e){return e.data})),Q=function(e){Object(k.a)(a,e);var t=Object(O.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.props.getAllCompanies()}},{key:"render",value:function(){return r.a.createElement(j.a,{options:(e=this.props.allCompanies,e&&e.map((function(e){return{value:e,label:e}}))),onChange:this.props.companySelectedCallBack});var e}}]),a}(r.a.Component),U=Object(c.b)((function(e){return{allCompanies:N(e)}}),{getAllCompanies:function(){return function(e,t){var a=t();e({type:"Start Loading"}),a.Ratio&&!a.Ratio.allCompanies&&M.getAllCompanies().then((function(t){e({type:"Get Companies",companiesList:t}),e({type:"Stop Loading"})}))}}})(Q),J=a(155),T=a.n(J),X=function(e){var t=e.loading,a=e.children;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"loading",style:{marginLeft:"750px",marginTop:"250px"}},r.a.createElement(T.a,{type:"bars",color:"#326ecf"}),"Loading"):r.a.createElement(r.a.Fragment,null," ",a," "))},Y=function(e){var t=e.children;return r.a.createElement("div",{style:{borderRight:"1px solid #DCDCDC",height:"890px",padding:"2%"}},t)},Z=function(e){return{type:"Select Company",company:e}},K=a(84),V=a(104),q=a(165);K.f(q.a);var H=function(e){return e.reduce((function(t,a,n){if(n>=20){var r=function(e){var t=e.reduce((function(e,t){return e+t}),0)/e.length;return{mean:t,stddev:Math.sqrt(e.reduce((function(e,a){return e.concat(Math.pow(a-t,2))}),[]).reduce((function(e,t){return e+t}),0)/(e.length-1))}}(Object(I.slice)(e,n-20,n).map((function(e){return e.value}))),o=r.mean,i=r.stddev;t.push({value:a.value,mean:o,topCap:o-2*i,bottomCap:o+2*i,date:a.date})}return t}),[])},$=function(e,t){var a=e.series.push(new V.b);return a.dataFields.valueY=t,a.dataFields.dateX="date",a},ee=function(e){Object(k.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).chart=void 0,e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=K.e(this.props.data.id,V.d);!function(e,t){var a=H(t);e.data=a;var n=e.xAxes.push(new V.a);n.renderer.minGridDistance=60,n.tooltipDateFormat="dd-MMM-yyyy",e.yAxes.push(new V.c);var r=$(e,"value"),o=$(e,"mean"),i=$(e,"topCap"),c=$(e,"bottomCap");e.cursor=new V.e,e.scrollbarX=new K.c;var u=e.plotContainer.createChild(K.a);function l(e,t){var a=u.createChild(K.b);a.text=t+":",a.marginRight=5,a.minWidth=60;var n=u.createChild(K.b);return n.id=e,n.text="-",n.minWidth=50,n.marginRight=30,n.fontWeight="bolder",n}u.width=250,u.height=100,u.x=0,u.y=0,u.padding(10,10,10,10),u.background.fill=K.d("#000"),u.background.fillOpacity=.1,u.layout="grid";var s=l("value","Value"),m=l("mean","Mean"),d=l("topCap","Mean + 2Sigma"),p=l("bottomCap","Mean - 2Sigma");function f(e,t){t.text="".concat(e&&e.valueY.toFixed(3))}e.events.on("ready",(function(){f(r.dataItems.last,s),f(o.dataItems.last,m),f(c.dataItems.last,p),f(i.dataItems.last,d)})),e.cursor.events.on("hidden",(function(){f(r.dataItems.last,s),f(o.dataItems.last,m),f(c.dataItems.last,p),f(i.dataItems.last,d)})),e.cursor.events.on("cursorpositionchanged",(function(){f(n.getSeriesDataItem(r,n.toAxisPosition(e.cursor.xPosition),!0),s),f(n.getSeriesDataItem(o,n.toAxisPosition(e.cursor.xPosition),!0),m),f(n.getSeriesDataItem(c,n.toAxisPosition(e.cursor.xPosition),!0),d),f(n.getSeriesDataItem(i,n.toAxisPosition(e.cursor.xPosition),!0),p)}))}(e,this.props.data.value),this.chart=e}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.dispose()}},{key:"render",value:function(){return r.a.createElement("div",{id:this.props.data.id,style:{width:"500%",height:"60%"}})}}]),a}(r.a.Component),te=Object(c.b)((function(e){return{allCompanies:N(e),data:W(e),company1:B(e),company2:z(e),isLoading:F(e)}}),{getData:function(){return function(e,t){var a=t(),n=P(a),r=G(a),o="".concat(B(a),"~").concat(z(a));"number"===typeof n&&"number"===typeof r&&(e({type:"Start Loading"}),M.getCompanyData(o,n,r).then((function(t){e({data:t,type:"Get Ratio Data"}),e({type:"Stop Loading"})})))}},selectCompany1:Z,selectCompany2:function(e){return{type:"Company 2 Selected",company2:e}}})((function(e){var t=e.selectCompany1,a=e.selectCompany2,n=e.getData,o=e.data,i=e.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{sm:2},r.a.createElement(Y,null,r.a.createElement("h3",{style:{fontFamily:"sans-serif"}}," Ratio Chart "),r.a.createElement("div",{style:{marginTop:"10%",fontSize:"12px"}},r.a.createElement("h6",null," Selected Company Numerator: "),r.a.createElement(U,{companySelectedCallBack:function(e){return t(e.value)}}),r.a.createElement("h6",null," Selected Company Denomenator: "),r.a.createElement(U,{companySelectedCallBack:function(e){return a(e.value)}})),r.a.createElement(b.a,{onClick:function(){return n()}},"Submit"))),r.a.createElement(y.a,{sm:14},r.a.createElement(X,{loading:i},o?r.a.createElement(ee,{key:"".concat(o.id),data:o}):r.a.createElement("h2",null," Select Companies"))))})),ae=function(e){Object(k.a)(a,e);var t=Object(O.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null," Page under Construction ")}}]),a}(r.a.Component),ne=a(158),re=(a(187),a(188),[{headerName:"Date",field:"date",filter:!0,sortable:!0,resizable:!0},{headerName:"Media",field:"media",filter:!0,sortable:!0,resizable:!0},{headerName:"Management Name",field:"mangName",filter:!0,sortable:!0,resizable:!0},{headerName:"Designation",field:"desig",filter:!0,sortable:!0,resizable:!0},{headerName:"Title",field:"title",filter:!0,sortable:!0,resizable:!0,width:500},{headerName:"Link",field:"link",filter:!0,sortable:!0,resizable:!0,cellRenderer:function(e){return"<a href=".concat(e.value,' target="_blank"> Link </a>')}}]),oe=function(e){var t=e.data;return r.a.createElement("div",{className:"ag-theme-alpine",style:{height:"100%",width:"1525px"}},r.a.createElement(ne.AgGridReact,{columnDefs:re,rowData:t.value}))},ie=[{link:"/ratio-chart",name:"Ratio Chart",component:te},{link:"/management-interviews",name:"Management Interviews",component:Object(c.b)((function(e){return{allCompanies:N(e),isLoading:F(e),data:_(e)}}),{getData:function(){return function(e,t){var a=t(),n=B(a);"string"===typeof n&&(e({type:"Start Loading"}),M.getManagementInterviews(n).then((function(t){e({type:"Get Management Data",data:t}),e({type:"Stop Loading"})})))}},selectCompany:Z})((function(e){var t=e.selectCompany,a=e.isLoading,n=e.getData,o=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{sm:2},r.a.createElement(Y,null,r.a.createElement("h3",{style:{fontFamily:"sans-serif"}}," Ratio Chart "),r.a.createElement("div",{style:{marginTop:"10%",fontSize:"12px"}},r.a.createElement("h6",null," Selected Company: "),r.a.createElement(U,{companySelectedCallBack:function(e){return t(e.value)}})),r.a.createElement(b.a,{onClick:function(){return n()}},"Submit"))),r.a.createElement(y.a,{sm:14},r.a.createElement(X,{loading:a},o&&r.a.createElement(oe,{data:o}))))}))},{link:"/",name:"Home",component:ae}],ce=function(){return r.a.createElement(f.a,{fluid:!0},r.a.createElement(h.a,{fixed:"top",bg:"dark",variant:"dark"},r.a.createElement(h.a.Brand,null,"Menu"),r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(d.a,null,ie.map((function(e,t){return r.a.createElement(g.a.Link,{key:t,href:e.link},e.name)})),r.a.createElement("br",null)))),r.a.createElement(v.a,{style:{marginTop:"3%"}},r.a.createElement(d.a,null,r.a.createElement(p.c,null,ie.map((function(e){return r.a.createElement(p.a,{key:e.name,path:e.link,component:e.component})}))))))},ue=a(67),le={App:{companySelected:"",loading:!1},Ratio:{allCompanies:null,company2:null,data:null},Management:{data:null}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le.App,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Select Company":return Object(ue.a)({},e,{companySelected:t.company});case"Start Loading":return Object(ue.a)({},e,{loading:!0});case"Stop Loading":return Object(ue.a)({},e,{loading:!1});default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le.Ratio,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Get Companies":return Object(ue.a)({},e,{allCompanies:t.companiesList});case"Company 2 Selected":return Object(ue.a)({},e,{company2:t.company2});case"Get Ratio Data":return Object(ue.a)({},e,{data:t.data});default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le.Management,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Get Management Data":return Object(ue.a)({},e,{data:t.data});default:return e}},pe=Object(l.c)({App:se,Ratio:me,Management:de});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,he=Object(m.a)(),ge=Object(l.e)(pe,fe(Object(l.a)(Object(s.a)(he),u.a)));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:ge},r.a.createElement(d.a,null,r.a.createElement(ce,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[167,1,3]]]);
//# sourceMappingURL=main.d6316abe.chunk.js.map