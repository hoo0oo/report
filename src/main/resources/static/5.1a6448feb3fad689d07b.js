(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{PPtP:function(a,n,e){"use strict";e.r(n);var t=e("CcnG"),l=function(){},o=e("82da"),u=e("pMnS"),r=e("8for"),i=e("aQKG"),c=e("rZLr"),d=e("XKqz"),Z=e("We0v"),m=e("4CI1"),g=e("x6z2"),p=e("FbL/"),s=e("V8c2"),f=e("wd/R"),b=e("LvDl"),h=function(){function a(a){this.shopService=a,this.volumeParam={pageNo:1,pageSize:30,orderBy:"SALES_VOLUME",platform:null,sCat1Name:null},this.countParam={pageNo:1,pageSize:30,orderBy:"SALES_COUNT",platform:null,sCat1Name:null},this.loading=!1,this.loading2=!1,this.dateRange=[]}return a.prototype.ngOnInit=function(){var a=this;this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.slaesCountConfigs=this.createColumnCountConfigs(),this.getSalesVolumeTableDataFn=function(){return a.loading=!0,a.shopService.pagingShopView(n(a.volumeParam)).then(function(n){return a.loading=!1,n.data.total=Math.min(n.data.total,a.volumeParam.pageSize),n})},this.getSlaesCountTableDataFn=function(){return a.loading2=!0,a.shopService.pagingShopView(n(a.countParam)).then(function(n){return a.loading2=!1,n.data.total=Math.min(n.data.total,a.countParam.pageSize),n})};var n=function(n){var e=Object(b.cloneDeep)(n);if(e.platform||delete e.platform,a.dateRange&&a.dateRange.length){var t=a.dateRange,l=t[1];e.dateBegin=f(t[0]).format("YYYY-MM")+"-01",e.dateEnd=f(l).format("YYYY-MM")+"-02"}else delete e.dateBegin,delete e.dateEnd;return e}},a.prototype.doQuery=function(a){a.searchData(!0)},a.prototype.createColumnVolumeConfigs=function(){return[{column:"date",title:"\u65f6\u95f4",formatter:function(a){return(a.year||"")+"-"+(a.month||"")}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"shopName",title:"\u5e97\u94fa\u540d\u79f0"},{column:"salesPercent",title:"\u9500\u552e\u989d\u5360\u6bd4",formatter:function(a,n){return(n||0)+"%"}}]},a.prototype.createColumnCountConfigs=function(){return[{column:"date",title:"\u65f6\u95f4",formatter:function(a){return(a.year||"")+"-"+(a.month||"")}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"shopName",title:"\u5e97\u94fa\u540d\u79f0"},{column:"countPercent",title:"\u9500\u552e\u91cf\u5360\u6bd4",formatter:function(a,n){return(n||0)+"%"}}]},a}(),C=t.Pa({encapsulation:0,styles:[[""]],data:{}});function S(a){return t.lb(0,[(a()(),t.Ra(0,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(a()(),t.Ra(1,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(a,n,e){var l=!0,o=a.component;return"datesChange"===n&&(l=!1!==(o.dateRange=e)&&l),"datesChange"===n&&(o.doQuery(t.bb(a,6)),l=!1!==o.doQuery(t.bb(a,10))&&l),l},r.b,r.a)),t.Qa(2,638976,null,0,i.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(a()(),t.Ra(3,0,null,null,1,"app-common-operation",[["title","\u9500\u552e\u989dTOP30\u5e97\u94fa"]],null,[[null,"platformChange"],[null,"chagned"]],function(a,n,e){var l=!0,o=a.component;return"platformChange"===n&&(l=!1!==(o.volumeParam.platform=e)&&l),"chagned"===n&&(l=!1!==o.doQuery(t.bb(a,6))&&l),l},d.b,d.a)),t.Qa(4,114688,null,0,Z.a,[m.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],loading:[3,"loading"]},{platformChange:"platformChange",chagned:"chagned"}),(a()(),t.Ra(5,0,null,null,1,"app-data-table",[],null,null,null,g.b,g.a)),t.Qa(6,114688,[["volumeTable",4]],0,p.a,[],{hideOnSinglePage:[0,"hideOnSinglePage"],columns:[1,"columns"],queryDataService:[2,"queryDataService"],pageSize:[3,"pageSize"]},null),(a()(),t.Ra(7,0,null,null,1,"app-common-operation",[["title","\u9500\u91cfTOP30\u5e97\u94fa"]],null,[[null,"platformChange"],[null,"chagned"]],function(a,n,e){var l=!0,o=a.component;return"platformChange"===n&&(l=!1!==(o.countParam.platform=e)&&l),"chagned"===n&&(l=!1!==o.doQuery(t.bb(a,10))&&l),l},d.b,d.a)),t.Qa(8,114688,null,0,Z.a,[m.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],loading:[3,"loading"]},{platformChange:"platformChange",chagned:"chagned"}),(a()(),t.Ra(9,0,null,null,1,"app-data-table",[],null,null,null,g.b,g.a)),t.Qa(10,114688,[["countTable",4]],0,p.a,[],{hideOnSinglePage:[0,"hideOnSinglePage"],columns:[1,"columns"],queryDataService:[2,"queryDataService"],pageSize:[3,"pageSize"]},null)],function(a,n){var e=n.component;a(n,2,0,e.dateRange),a(n,4,0,"\u9500\u552e\u989dTOP30\u5e97\u94fa",!0,e.volumeParam.platform,e.loading),a(n,6,0,!0,e.salesVolumeConfigs,e.getSalesVolumeTableDataFn,e.volumeParam.pageSize),a(n,8,0,"\u9500\u91cfTOP30\u5e97\u94fa",!0,e.countParam.platform,e.loading2),a(n,10,0,!0,e.slaesCountConfigs,e.getSlaesCountTableDataFn,e.countParam.pageSize)},null)}var y=t.Na("app-shop-analysis",h,function(a){return t.lb(0,[(a()(),t.Ra(0,0,null,null,1,"app-shop-analysis",[],null,null,null,S,C)),t.Qa(1,114688,null,0,h,[s.a],null,null)],function(a,n){a(n,1,0)},null)},{},{},[]),v=e("Ip0R"),P=e("gIcY"),z=e("t/Na"),O=e("d5Ni"),R=e("M2Lx"),q=e("tn8F"),D=e("eDkP"),T=e("Fzqc"),F=e("4c35"),M=e("dWZg"),Y=e("qAlS"),k=e("PCNd"),w=e("ZYCi"),N=function(){};e.d(n,"ShopAnalysisModuleNgFactory",function(){return Q});var Q=t.Oa(l,[],function(a){return t.Ya([t.Za(512,t.j,t.Ca,[[8,[o.A,o.B,o.C,o.D,o.E,o.F,o.G,u.a,y]],[3,t.j],t.w]),t.Za(4608,v.o,v.n,[t.t,[2,v.A]]),t.Za(4608,P.d,P.d,[]),t.Za(4608,P.q,P.q,[]),t.Za(4608,z.l,z.r,[v.d,t.A,z.p]),t.Za(4608,z.s,z.s,[z.l,z.q]),t.Za(5120,z.a,function(a){return[a,new O.a]},[z.s]),t.Za(4608,z.o,z.o,[]),t.Za(6144,z.m,null,[z.o]),t.Za(4608,z.k,z.k,[z.m]),t.Za(6144,z.b,null,[z.k]),t.Za(4608,z.g,z.n,[z.b,t.q]),t.Za(4608,z.c,z.c,[z.g]),t.Za(4608,R.c,R.c,[]),t.Za(5120,q.Ad,q.Cd,[[3,q.Ad],q.Bd]),t.Za(4608,v.e,v.e,[t.t]),t.Za(5120,q.ac,q.zc,[[3,q.ac],q.pd,q.Ad,v.e]),t.Za(4608,D.d,D.d,[D.k,D.f,t.j,D.i,D.g,t.q,t.y,v.d,T.b]),t.Za(5120,D.l,D.m,[D.d]),t.Za(5120,q.L,q.M,[v.d,[3,q.L]]),t.Za(4608,q.Y,q.Y,[]),t.Za(4608,q.Ta,q.Ta,[]),t.Za(4608,q.Zc,q.Zc,[D.d,t.q,t.j,t.g]),t.Za(4608,q.fd,q.fd,[D.d,t.q,t.j,t.g]),t.Za(4608,q.md,q.md,[[3,q.md]]),t.Za(4608,q.od,q.od,[D.d,q.Ad,q.md]),t.Za(1073742336,v.c,v.c,[]),t.Za(1073742336,P.o,P.o,[]),t.Za(1073742336,P.n,P.n,[]),t.Za(1073742336,P.f,P.f,[]),t.Za(1073742336,z.e,z.e,[]),t.Za(1073742336,z.d,z.d,[]),t.Za(1073742336,R.d,R.d,[]),t.Za(1073742336,q.e,q.e,[]),t.Za(1073742336,q.Fd,q.Fd,[]),t.Za(1073742336,q.Ed,q.Ed,[]),t.Za(1073742336,q.Hd,q.Hd,[]),t.Za(1073742336,T.a,T.a,[]),t.Za(1073742336,F.c,F.c,[]),t.Za(1073742336,M.b,M.b,[]),t.Za(1073742336,Y.a,Y.a,[]),t.Za(1073742336,D.h,D.h,[]),t.Za(1073742336,q.h,q.h,[]),t.Za(1073742336,q.ab,q.ab,[]),t.Za(1073742336,q.r,q.r,[]),t.Za(1073742336,q.w,q.w,[]),t.Za(1073742336,q.y,q.y,[]),t.Za(1073742336,q.H,q.H,[]),t.Za(1073742336,q.O,q.O,[]),t.Za(1073742336,q.J,q.J,[]),t.Za(1073742336,q.Q,q.Q,[]),t.Za(1073742336,q.S,q.S,[]),t.Za(1073742336,q.Z,q.Z,[]),t.Za(1073742336,q.Da,q.Da,[]),t.Za(1073742336,q.Fa,q.Fa,[]),t.Za(1073742336,q.Ia,q.Ia,[]),t.Za(1073742336,q.La,q.La,[]),t.Za(1073742336,q.Pa,q.Pa,[]),t.Za(1073742336,q.Ya,q.Ya,[]),t.Za(1073742336,q.Ra,q.Ra,[]),t.Za(1073742336,q.cb,q.cb,[]),t.Za(1073742336,q.eb,q.eb,[]),t.Za(1073742336,q.gb,q.gb,[]),t.Za(1073742336,q.ib,q.ib,[]),t.Za(1073742336,q.kb,q.kb,[]),t.Za(1073742336,q.mb,q.mb,[]),t.Za(1073742336,q.tb,q.tb,[]),t.Za(1073742336,q.yb,q.yb,[]),t.Za(1073742336,q.Bb,q.Bb,[]),t.Za(1073742336,q.Eb,q.Eb,[]),t.Za(1073742336,q.Ib,q.Ib,[]),t.Za(1073742336,q.Mb,q.Mb,[]),t.Za(1073742336,q.Ob,q.Ob,[]),t.Za(1073742336,q.Rb,q.Rb,[]),t.Za(1073742336,q.bc,q.bc,[]),t.Za(1073742336,q.Zb,q.Zb,[]),t.Za(1073742336,q.vc,q.vc,[]),t.Za(1073742336,q.xc,q.xc,[]),t.Za(1073742336,q.Gc,q.Gc,[]),t.Za(1073742336,q.Kc,q.Kc,[]),t.Za(1073742336,q.Oc,q.Oc,[]),t.Za(1073742336,q.Sc,q.Sc,[]),t.Za(1073742336,q.Uc,q.Uc,[]),t.Za(1073742336,q.ad,q.ad,[]),t.Za(1073742336,q.gd,q.gd,[]),t.Za(1073742336,q.id,q.id,[]),t.Za(1073742336,q.kd,q.kd,[]),t.Za(1073742336,q.qd,q.qd,[]),t.Za(1073742336,q.sd,q.sd,[]),t.Za(1073742336,q.ud,q.ud,[]),t.Za(1073742336,q.yd,q.yd,[]),t.Za(1073742336,q.b,q.b,[]),t.Za(1073742336,k.a,k.a,[]),t.Za(1073742336,w.m,w.m,[[2,w.s],[2,w.k]]),t.Za(1073742336,N,N,[]),t.Za(1073742336,l,l,[]),t.Za(256,z.p,"XSRF-TOKEN",[]),t.Za(256,z.q,"X-XSRF-TOKEN",[]),t.Za(256,q.Bd,!1,[]),t.Za(256,q.pd,void 0,[]),t.Za(256,q.Wc,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),t.Za(256,q.dd,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),t.Za(256,q.a,k.b,[]),t.Za(1024,w.i,function(){return[[{path:"",component:h}]]},[])])})}}]);