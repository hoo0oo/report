(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{snhW:function(a,t,n){"use strict";n.r(t);var e=n("CcnG"),l=function(){},o=n("82da"),r=n("pMnS"),i=n("8for"),u=n("aQKG"),c=n("rZLr"),s=n("XKqz"),d=n("We0v"),p=n("4CI1"),h=n("H6uK"),f=n("Cz+m"),g=n("x6z2"),m=n("FbL/"),b=n("wd/R"),Z=n("LvDl"),y=n("cxyG"),v=Object.assign||function(a){for(var t,n=1,e=arguments.length;n<e;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l]);return a},C=function(){function a(a){this.homeService=a,this.dateRange=[],this.platform="",this.loading=!1}return a.prototype.ngOnInit=function(){var a=this;this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(t,n){var e=a.getDateRangeParam();return a.homeService.pagingAreaListview(v({},e,{pageNo:t,pageSize:n}))},this.categoryList=[{label:"B2B",value:"B2B"},{label:"\u7f51\u7edc\u96f6\u552e",value:"\u7f51\u7edc\u96f6\u552e"}]},a.prototype.setChartOption=function(){return a=this,void 0,n=function(){var a,t,n,e,l,o,r;return function(a,t){var n,e,l,o,r={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(l=e[2&o[0]?"return":o[0]?"throw":"next"])&&!(l=l.call(e,o[1])).done)return l;switch(e=0,l&&(o=[0,l.value]),o[0]){case 0:case 1:l=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,e=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(l=(l=r.trys).length>0&&l[l.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){r.label=o[1];break}if(6===o[0]&&r.label<l[1]){r.label=l[1],l=o;break}if(l&&r.label<l[2]){r.label=l[2],r.ops.push(o);break}l[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(a,r)}catch(a){o=[6,a],e=0}finally{n=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}(this,function(i){switch(i.label){case 0:return this.loading=!0,[4,this.getChartData()];case 1:for(a=i.sent().data,t=Object(Z.groupBy)(a,"city"),n=Object.keys(t),e=[],l=0;l<n.length;l++)o=t[n[l]]||[],r=Object(Z.map)(o,"dateStr"),e.push({xAxis:[{type:"category",data:r,splitLine:{show:!1}}],series:[{name:"\u4ea4\u6613\u989d",type:"line",data:Object(Z.map)(o,"totalVolume")}]});return this.dataChart.setOption({baseOption:{timeline:{controlStyle:{showPlayBtn:!1,show:!0},data:n,axisType:"category"},tooltip:{trigger:"axis"},calculable:!0,grid:{top:80,bottom:100},yAxis:{type:"value"}},options:e}),this.loading=!1,[2]}})},new((t=void 0)||(t=Promise))(function(e,l){function o(a){try{i(n.next(a))}catch(a){l(a)}}function r(a){try{i(n.throw(a))}catch(a){l(a)}}function i(a){a.done?e(a.value):new t(function(t){t(a.value)}).then(o,r)}i((n=n.apply(a,[])).next())});var a,t,n},a.prototype.getChartData=function(){var a=this.getDateRangeParam();return this.homeService.areaLine(v({},a))},a.prototype.createColumnVolumeConfigs=function(){return[{column:"date",title:"\u65f6\u95f4",formatter:function(a){return(a.year||"")+"-"+(a.month||"")}},{column:"province",title:"\u7701"},{column:"city",title:"\u5e02"},{column:"mom",title:"\u6307\u6807\u503c"}]},a.prototype.getDateRangeParam=function(){var a={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var t=this.dateRange,n=t[1];a.dateBegin=b(t[0]).format("YYYY-MM")+"-01",a.dateEnd=b(n).format("YYYY-MM")+"-02"}return a},a}(),w=e.Pa({encapsulation:0,styles:[[""]],data:{}});function R(a){return e.lb(0,[e.hb(402653184,1,{dataChart:0}),(a()(),e.Ra(1,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(a()(),e.Ra(2,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(a,t,n){var e=!0,l=a.component;return"datesChange"===t&&(e=!1!==(l.dateRange=n)&&e),"datesChange"===t&&(e=!1!==l.setChartOption()&&e),e},i.b,i.a)),e.Qa(3,638976,null,0,u.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(a()(),e.Ra(4,0,null,null,1,"app-common-operation",[["title","\u5404\u5730\u6838\u5fc3\u7535\u5546\u6307\u6807\u901f\u89c8"]],null,[[null,"platformChange"]],function(a,t,n){var e=!0,l=a.component;return"platformChange"===t&&(e=!1!==(l.platform=n)&&e),"platformChange"===t&&(e=!1!==l.setChartOption()&&e),e},s.b,s.a)),e.Qa(5,114688,null,0,d.a,[p.a],{title:[0,"title"],categoryList:[1,"categoryList"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(a()(),e.Ra(6,0,null,null,1,"app-data-chart",[],null,null,null,h.b,h.a)),e.Qa(7,4440064,[[1,4],["dataChart",4]],0,f.a,[c.a],{height:[0,"height"]},null),(a()(),e.Ra(8,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(9,114688,null,0,d.a,[p.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(a()(),e.Ra(10,0,null,null,1,"app-data-table",[],null,null,null,g.b,g.a)),e.Qa(11,114688,null,0,m.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(a,t){var n=t.component;a(t,3,0,n.dateRange),a(t,5,0,"\u5404\u5730\u6838\u5fc3\u7535\u5546\u6307\u6807\u901f\u89c8",n.categoryList,n.platform,!0,n.loading),a(t,7,0,450),a(t,9,0,!0,!0),a(t,11,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var x=e.Na("app-region-quick-view",C,function(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,1,"app-region-quick-view",[],null,null,null,R,w)),e.Qa(1,114688,null,0,C,[y.a],null,null)],function(a,t){a(t,1,0)},null)},{},{},[]),D=Object.assign||function(a){for(var t,n=1,e=arguments.length;n<e;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l]);return a},S=function(a,t,n,e){return new(n||(n=Promise))(function(l,o){function r(a){try{u(e.next(a))}catch(a){o(a)}}function i(a){try{u(e.throw(a))}catch(a){o(a)}}function u(a){a.done?l(a.value):new n(function(t){t(a.value)}).then(r,i)}u((e=e.apply(a,t||[])).next())})},O=function(a,t){var n,e,l,o,r={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(l=e[2&o[0]?"return":o[0]?"throw":"next"])&&!(l=l.call(e,o[1])).done)return l;switch(e=0,l&&(o=[0,l.value]),o[0]){case 0:case 1:l=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,e=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(l=(l=r.trys).length>0&&l[l.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){r.label=o[1];break}if(6===o[0]&&r.label<l[1]){r.label=l[1],l=o;break}if(l&&r.label<l[2]){r.label=l[2],r.ops.push(o);break}l[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(a,r)}catch(a){o=[6,a],e=0}finally{n=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},k=function(){function a(a){this.homeService=a,this.dateRange=[],this.platform="",this.loading=!1}return a.prototype.ngOnInit=function(){return S(this,void 0,void 0,function(){var a=this;return O(this,function(t){return this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(t,n){var e=a.getDateRangeParam();return a.homeService.pagingAreaListview(D({},e,{orderBy:"INDEX_VALUE",pageNo:t,pageSize:n}))},this.categoryList=[{label:"B2B",value:"B2B"},{label:"\u7f51\u7edc\u96f6\u552e",value:"\u7f51\u7edc\u96f6\u552e"}],[2]})})},a.prototype.setChartOption=function(){return S(this,void 0,void 0,function(){var a,t,n;return O(this,function(e){switch(e.label){case 0:return[4,this.getChartData()];case 1:return a=e.sent().data,t=Object(Z.map)(a,"city"),n=Object(Z.map)(a,"totalVolume"),this.dataChart.setOption({xAxis:{type:"category",data:t},tooltip:{trigger:"axis"},yAxis:[{type:"value"}],dataZoom:[{startValue:t[0]},{type:"inside"}],series:[{name:"\u9500\u552e\u989d",data:n,type:"bar"}]}),this.loading=!1,[2]}})})},a.prototype.getChartData=function(){var a=this.getDateRangeParam();return this.homeService.areaLine(D({},a,{platform:this.platform||void 0}))},a.prototype.createColumnVolumeConfigs=function(){var a=this;return[{column:"date",title:"\u65f6\u95f4",formatter:function(a){return(a.year||"")+"-"+(a.month||"")}},{column:"province",title:"\u7701"},{column:"city",title:"\u5e02"},{column:"ramark1",title:"\u6307\u6807\u7c7b\u578b"},{column:"mom",title:"\u6307\u6807\u503c"},{column:"sortBy",title:"\u6392\u540d",formatter:function(t,n,e){return(a.dataTable.pageIndex-1)*a.dataTable.pageSize+e+1}}]},a.prototype.getDateRangeParam=function(){var a={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var t=this.dateRange,n=t[1];a.dateBegin=b(t[0]).format("YYYY-MM")+"-01",a.dateEnd=b(n).format("YYYY-MM")+"-02"}return a},a}(),P=e.Pa({encapsulation:0,styles:[[""]],data:{}});function Y(a){return e.lb(0,[e.hb(402653184,1,{dataChart:0}),e.hb(402653184,2,{dataTable:0}),(a()(),e.Ra(2,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(a()(),e.Ra(3,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(a,t,n){var e=!0,l=a.component;return"datesChange"===t&&(e=!1!==(l.dateRange=n)&&e),"datesChange"===t&&(e=!1!==l.setChartOption()&&e),e},i.b,i.a)),e.Qa(4,638976,null,0,u.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(a()(),e.Ra(5,0,null,null,1,"app-common-operation",[["title","\u5404\u5730\u6838\u5fc3\u7535\u5546\u6307\u6807\u901f\u89c8"]],null,null,null,s.b,s.a)),e.Qa(6,114688,null,0,d.a,[p.a],{title:[0,"title"],categoryList:[1,"categoryList"],noPlatform:[2,"noPlatform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},null),(a()(),e.Ra(7,0,null,null,1,"app-data-chart",[],null,null,null,h.b,h.a)),e.Qa(8,4440064,[[1,4],["dataChart",4]],0,f.a,[c.a],{height:[0,"height"]},null),(a()(),e.Ra(9,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(10,114688,null,0,d.a,[p.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(a()(),e.Ra(11,0,null,null,1,"app-data-table",[],null,null,null,g.b,g.a)),e.Qa(12,114688,[[2,4],["dataTable",4]],0,m.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(a,t){var n=t.component;a(t,4,0,n.dateRange),a(t,6,0,"\u5404\u5730\u6838\u5fc3\u7535\u5546\u6307\u6807\u901f\u89c8",n.categoryList,!0,!0,n.loading),a(t,8,0,450),a(t,10,0,!0,!0),a(t,12,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var z=e.Na("app-contrast",k,function(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,1,"app-contrast",[],null,null,null,Y,P)),e.Qa(1,114688,null,0,k,[y.a],null,null)],function(a,t){a(t,1,0)},null)},{},{},[]),L=n("Ip0R"),j=n("gIcY"),q=n("t/Na"),B=n("d5Ni"),E=n("M2Lx"),A=n("tn8F"),N=n("eDkP"),Q=n("Fzqc"),T=n("4c35"),V=n("dWZg"),M=n("qAlS"),F=n("PCNd"),G=n("ZYCi"),I=function(){};n.d(t,"RegionAnalysisModuleNgFactory",function(){return K});var K=e.Oa(l,[],function(a){return e.Ya([e.Za(512,e.j,e.Ca,[[8,[o.y,o.z,o.A,o.B,o.C,o.D,o.E,r.a,x,z]],[3,e.j],e.w]),e.Za(4608,L.o,L.n,[e.t,[2,L.A]]),e.Za(4608,j.c,j.c,[]),e.Za(4608,j.m,j.m,[]),e.Za(4608,q.l,q.r,[L.d,e.A,q.p]),e.Za(4608,q.s,q.s,[q.l,q.q]),e.Za(5120,q.a,function(a){return[a,new B.a]},[q.s]),e.Za(4608,q.o,q.o,[]),e.Za(6144,q.m,null,[q.o]),e.Za(4608,q.k,q.k,[q.m]),e.Za(6144,q.b,null,[q.k]),e.Za(4608,q.g,q.n,[q.b,e.q]),e.Za(4608,q.c,q.c,[q.g]),e.Za(4608,E.c,E.c,[]),e.Za(5120,A.zd,A.Bd,[[3,A.zd],A.Ad]),e.Za(4608,L.e,L.e,[e.t]),e.Za(5120,A.Zb,A.yc,[[3,A.Zb],A.od,A.zd,L.e]),e.Za(4608,N.d,N.d,[N.k,N.f,e.j,N.i,N.g,e.q,e.y,L.d,Q.b]),e.Za(5120,N.l,N.m,[N.d]),e.Za(5120,A.K,A.L,[L.d,[3,A.K]]),e.Za(4608,A.X,A.X,[]),e.Za(4608,A.Sa,A.Sa,[]),e.Za(4608,A.Yc,A.Yc,[N.d,e.q,e.j,e.g]),e.Za(4608,A.ed,A.ed,[N.d,e.q,e.j,e.g]),e.Za(4608,A.ld,A.ld,[[3,A.ld]]),e.Za(4608,A.nd,A.nd,[N.d,A.zd,A.ld]),e.Za(1073742336,L.c,L.c,[]),e.Za(1073742336,j.l,j.l,[]),e.Za(1073742336,j.k,j.k,[]),e.Za(1073742336,j.e,j.e,[]),e.Za(1073742336,q.e,q.e,[]),e.Za(1073742336,q.d,q.d,[]),e.Za(1073742336,E.d,E.d,[]),e.Za(1073742336,A.d,A.d,[]),e.Za(1073742336,A.Ed,A.Ed,[]),e.Za(1073742336,A.Dd,A.Dd,[]),e.Za(1073742336,A.Gd,A.Gd,[]),e.Za(1073742336,Q.a,Q.a,[]),e.Za(1073742336,T.c,T.c,[]),e.Za(1073742336,V.b,V.b,[]),e.Za(1073742336,M.a,M.a,[]),e.Za(1073742336,N.h,N.h,[]),e.Za(1073742336,A.g,A.g,[]),e.Za(1073742336,A.Za,A.Za,[]),e.Za(1073742336,A.q,A.q,[]),e.Za(1073742336,A.v,A.v,[]),e.Za(1073742336,A.x,A.x,[]),e.Za(1073742336,A.G,A.G,[]),e.Za(1073742336,A.N,A.N,[]),e.Za(1073742336,A.I,A.I,[]),e.Za(1073742336,A.P,A.P,[]),e.Za(1073742336,A.R,A.R,[]),e.Za(1073742336,A.Y,A.Y,[]),e.Za(1073742336,A.Ca,A.Ca,[]),e.Za(1073742336,A.Ea,A.Ea,[]),e.Za(1073742336,A.Ha,A.Ha,[]),e.Za(1073742336,A.Ka,A.Ka,[]),e.Za(1073742336,A.Oa,A.Oa,[]),e.Za(1073742336,A.Xa,A.Xa,[]),e.Za(1073742336,A.Qa,A.Qa,[]),e.Za(1073742336,A.bb,A.bb,[]),e.Za(1073742336,A.db,A.db,[]),e.Za(1073742336,A.fb,A.fb,[]),e.Za(1073742336,A.hb,A.hb,[]),e.Za(1073742336,A.jb,A.jb,[]),e.Za(1073742336,A.lb,A.lb,[]),e.Za(1073742336,A.sb,A.sb,[]),e.Za(1073742336,A.xb,A.xb,[]),e.Za(1073742336,A.Ab,A.Ab,[]),e.Za(1073742336,A.Db,A.Db,[]),e.Za(1073742336,A.Hb,A.Hb,[]),e.Za(1073742336,A.Lb,A.Lb,[]),e.Za(1073742336,A.Nb,A.Nb,[]),e.Za(1073742336,A.Qb,A.Qb,[]),e.Za(1073742336,A.ac,A.ac,[]),e.Za(1073742336,A.Yb,A.Yb,[]),e.Za(1073742336,A.uc,A.uc,[]),e.Za(1073742336,A.wc,A.wc,[]),e.Za(1073742336,A.Fc,A.Fc,[]),e.Za(1073742336,A.Jc,A.Jc,[]),e.Za(1073742336,A.Nc,A.Nc,[]),e.Za(1073742336,A.Rc,A.Rc,[]),e.Za(1073742336,A.Tc,A.Tc,[]),e.Za(1073742336,A.Zc,A.Zc,[]),e.Za(1073742336,A.fd,A.fd,[]),e.Za(1073742336,A.hd,A.hd,[]),e.Za(1073742336,A.jd,A.jd,[]),e.Za(1073742336,A.pd,A.pd,[]),e.Za(1073742336,A.rd,A.rd,[]),e.Za(1073742336,A.td,A.td,[]),e.Za(1073742336,A.xd,A.xd,[]),e.Za(1073742336,A.b,A.b,[]),e.Za(1073742336,F.a,F.a,[]),e.Za(1073742336,G.m,G.m,[[2,G.s],[2,G.k]]),e.Za(1073742336,I,I,[]),e.Za(1073742336,l,l,[]),e.Za(256,q.p,"XSRF-TOKEN",[]),e.Za(256,q.q,"X-XSRF-TOKEN",[]),e.Za(256,A.Ad,!1,[]),e.Za(256,A.od,void 0,[]),e.Za(256,A.Vc,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),e.Za(256,A.cd,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),e.Za(256,A.a,F.b,[]),e.Za(1024,G.i,function(){return[[{path:"",redirectTo:"quick-view"},{path:"quick-view",component:C},{path:"contrast",component:k}]]},[])])})}}]);