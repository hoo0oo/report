(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Y/YL":function(a,t,n){"use strict";n.r(t);var e=n("CcnG"),l=function(){},o=n("82da"),r=n("pMnS"),u=n("8for"),i=n("aQKG"),c=n("rZLr"),s=n("XKqz"),h=n("We0v"),p=n("4CI1"),m=n("H6uK"),g=n("Cz+m"),d=n("x6z2"),f=n("FbL/"),b=n("1jmK"),y=n("wd/R"),C=n("LvDl"),v=Object.assign||function(a){for(var t,n=1,e=arguments.length;n<e;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l]);return a},Z=function(a,t,n,e){return new(n||(n=Promise))(function(l,o){function r(a){try{i(e.next(a))}catch(a){o(a)}}function u(a){try{i(e.throw(a))}catch(a){o(a)}}function i(a){a.done?l(a.value):new n(function(t){t(a.value)}).then(r,u)}i((e=e.apply(a,t||[])).next())})},D=function(a,t){var n,e,l,o,r={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(l=e[2&o[0]?"return":o[0]?"throw":"next"])&&!(l=l.call(e,o[1])).done)return l;switch(e=0,l&&(o=[0,l.value]),o[0]){case 0:case 1:l=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,e=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(l=(l=r.trys).length>0&&l[l.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){r.label=o[1];break}if(6===o[0]&&r.label<l[1]){r.label=l[1],l=o;break}if(l&&r.label<l[2]){r.label=l[2],r.ops.push(o);break}l[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(a,r)}catch(a){o=[6,a],e=0}finally{n=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},S=function(){function a(a,t){this.categoryService=a,this.commonDataService=t,this.dateRange=[],this.salesPlatform="",this.countPlatform="",this.loading=!1,this.loading2=!1}return a.prototype.ngOnInit=function(){var a=this;this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(t,n){var e=a.getDateRangeParam();return a.categoryService.pagingCatView(v({},e,{pageNo:t,pageSize:n}))}},a.prototype.ngAfterViewInit=function(){return Z(this,void 0,void 0,function(){var a;return D(this,function(t){switch(t.label){case 0:return a=this,[4,this.commonDataService.getCategoryList()];case 1:return a.categoryList=t.sent().data,this.legendData=Object(C.map)(this.categoryList,"value"),[2]}})})},a.prototype.setChartOption=function(){return Z(this,void 0,void 0,function(){var a,t,n,e,l,o,r;return D(this,function(u){switch(u.label){case 0:return this.loading=!0,[4,this.getChartData(this.salesPlatform)];case 1:for(a=u.sent().data,t=[],n=0,e=0;e<this.legendData.length;e++)l=this.legendData[e],o=Object(C.find)(a,{sCat1Name:l})||{},t.push({value:o.totalVolume||0,name:l}),n+=o.totalVolume||0;return this.salesDataChart1.setOption({title:{text:"\u9500\u552e\u989d \n "+n,y:"center",x:"center",textStyle:{align:"center"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",right:30,top:20,data:this.legendData},series:[{name:"\u9500\u552e\u989d",type:"pie",radius:["40%","55%"],label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:t}]}),r={xAxis:{type:"category",data:this.legendData},tooltip:{formatter:"{a} <br> {b}:{c}%"},yAxis:[{type:"value",axisLabel:{show:!0,interval:0,showMinLabel:!0,formatter:"{value} %"},min:0,max:100}],series:[{name:"\u9500\u552e\u989d",data:Object(C.map)(t,"value").map(function(a){return a/n*100}),type:"bar"}]},this.salesDataChart2.setOption(r),this.loading=!1,[2]}})})},a.prototype.setChartOption2=function(){return Z(this,void 0,void 0,function(){var a,t,n,e,l,o,r;return D(this,function(u){switch(u.label){case 0:return this.loading2=!0,[4,this.getChartData(this.countPlatform)];case 1:for(a=u.sent().data,t=[],n=0,e=0;e<this.legendData.length;e++)l=this.legendData[e],o=Object(C.find)(a,{sCat1Name:l})||{},t.push({value:o.totalCount||0,name:l}),n+=o.totalCount||0;return this.countDataChart1.setOption({title:{text:"\u9500\u552e\u91cf \n "+n,y:"center",x:"center",textStyle:{align:"center"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",right:30,top:20,data:this.legendData},series:[{name:"\u9500\u91cf",type:"pie",radius:["40%","55%"],label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:t}]}),r={xAxis:{type:"category",data:this.legendData},tooltip:{formatter:"{a} <br> {b}:{c}%"},yAxis:{type:"value",axisLabel:{show:!0,interval:0,showMinLabel:!0,formatter:"{value} %"},min:0,max:100},series:[{name:"\u9500\u552e\u91cf",data:Object(C.map)(t,"value").map(function(a){return a/n*100}),type:"bar"}]},this.countDataChart2.setOption(r),this.loading2=!1,[2]}})})},a.prototype.getChartData=function(a){var t=this.getDateRangeParam();return this.categoryService.catWholeList(v({platform:a||void 0},t))},a.prototype.createColumnVolumeConfigs=function(){return[{column:"date",title:"\u65f6\u95f4",formatter:function(a){return(a.year||"")+"-"+(a.month||"")}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u54c1\u7c7b"},{column:"salesPercent",title:"\u9500\u552e\u989d\u5360\u6bd4",formatter:function(a,t){return(t||0)+"%"}},{column:"countPercent",title:"\u9500\u552e\u91cf\u5360\u6bd4",formatter:function(a,t){return(t||0)+"%"}}]},a.prototype.getDateRangeParam=function(){var a={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var t=this.dateRange,n=t[1];a.dateBegin=y(t[0]).format("YYYY-MM")+"-01",a.dateEnd=y(n).format("YYYY-MM")+"-02"}return a},a}(),w=e.Pa({encapsulation:0,styles:[[""]],data:{}});function R(a){return e.lb(0,[e.hb(402653184,1,{salesDataChart1:0}),e.hb(402653184,2,{salesDataChart2:0}),e.hb(402653184,3,{countDataChart1:0}),e.hb(402653184,4,{countDataChart2:0}),(a()(),e.Ra(4,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(a()(),e.Ra(5,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(a,t,n){var l=!0,o=a.component;return"datesChange"===t&&(l=!1!==(o.dateRange=n)&&l),"datesChange"===t&&(o.setChartOption(),o.setChartOption2(),l=!1!==e.bb(a,28).searchData(!0)&&l),l},u.b,u.a)),e.Qa(6,638976,null,0,i.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(a()(),e.Ra(7,0,null,null,1,"app-common-operation",[["title","\u4e00\u7ea7\u54c1\u7c7b\u9500\u552e\u989d\u5360\u6bd4"]],null,[[null,"platformChange"]],function(a,t,n){var e=!0,l=a.component;return"platformChange"===t&&(e=!1!==(l.salesPlatform=n)&&e),"platformChange"===t&&(e=!1!==l.setChartOption()&&e),e},s.b,s.a)),e.Qa(8,114688,null,0,h.a,[p.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(a()(),e.Ra(9,0,null,null,6,"div",[["layout","row"]],null,null,null,null,null)),(a()(),e.Ra(10,0,null,null,2,"div",[["flex",""]],null,null,null,null,null)),(a()(),e.Ra(11,0,null,null,1,"app-data-chart",[],null,null,null,m.b,m.a)),e.Qa(12,4440064,[[1,4],["salesDataChart1",4]],0,g.a,[c.a],{height:[0,"height"]},null),(a()(),e.Ra(13,0,null,null,2,"div",[["flex",""]],null,null,null,null,null)),(a()(),e.Ra(14,0,null,null,1,"app-data-chart",[],null,null,null,m.b,m.a)),e.Qa(15,4440064,[[2,4],["salesDataChart2",4]],0,g.a,[c.a],{height:[0,"height"]},null),(a()(),e.Ra(16,0,null,null,1,"app-common-operation",[["title","\u4e00\u7ea7\u54c1\u7c7b\u9500\u91cf\u5360\u6bd4"]],null,[[null,"platformChange"]],function(a,t,n){var e=!0,l=a.component;return"platformChange"===t&&(e=!1!==(l.countPlatform=n)&&e),"platformChange"===t&&(e=!1!==l.setChartOption2()&&e),e},s.b,s.a)),e.Qa(17,114688,null,0,h.a,[p.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(a()(),e.Ra(18,0,null,null,6,"div",[["layout","row"]],null,null,null,null,null)),(a()(),e.Ra(19,0,null,null,2,"div",[["flex",""]],null,null,null,null,null)),(a()(),e.Ra(20,0,null,null,1,"app-data-chart",[],null,null,null,m.b,m.a)),e.Qa(21,4440064,[[3,4],["countDataChart1",4]],0,g.a,[c.a],{height:[0,"height"]},null),(a()(),e.Ra(22,0,null,null,2,"div",[["flex",""]],null,null,null,null,null)),(a()(),e.Ra(23,0,null,null,1,"app-data-chart",[],null,null,null,m.b,m.a)),e.Qa(24,4440064,[[4,4],["countDataChart2",4]],0,g.a,[c.a],{height:[0,"height"]},null),(a()(),e.Ra(25,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(26,114688,null,0,h.a,[p.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(a()(),e.Ra(27,0,null,null,1,"app-data-table",[],null,null,null,d.b,d.a)),e.Qa(28,114688,[["table",4]],0,f.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(a,t){var n=t.component;a(t,6,0,n.dateRange),a(t,8,0,"\u4e00\u7ea7\u54c1\u7c7b\u9500\u552e\u989d\u5360\u6bd4",!0,n.salesPlatform,!0,n.loading),a(t,12,0,450),a(t,15,0,450),a(t,17,0,"\u4e00\u7ea7\u54c1\u7c7b\u9500\u91cf\u5360\u6bd4",!0,n.countPlatform,!0,n.loading2),a(t,21,0,450),a(t,24,0,450),a(t,26,0,!0,!0),a(t,28,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var P=e.Na("app-whole",S,function(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,1,"app-whole",[],null,null,null,R,w)),e.Qa(1,4308992,null,0,S,[b.a,p.a],null,null)],function(a,t){a(t,1,0)},null)},{},{},[]),x=Object.assign||function(a){for(var t,n=1,e=arguments.length;n<e;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l]);return a},O=function(){function a(a){this.categoryService=a,this.dateRange=[],this.platform="",this.loading=!1}return a.prototype.ngOnInit=function(){var a=this;this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(t,n){var e=a.getDateRangeParam();return a.categoryService.pagingCatView(x({},e,{pageNo:t,pageSize:n}))}},a.prototype.setChartOption=function(){return a=this,void 0,n=function(){function a(a,t,n){var e={name:a[n],id:b++,value:a.mSlaesCount,children:[]};return t.children?t.children.push(e):Array.isArray(t)&&t.push(e),e}var t,n,e,l,o,r,u,i,c,s,h,p,m,g,d,f,b;return function(a,t){var n,e,l,o,r={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(l=e[2&o[0]?"return":o[0]?"throw":"next"])&&!(l=l.call(e,o[1])).done)return l;switch(e=0,l&&(o=[0,l.value]),o[0]){case 0:case 1:l=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,e=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(l=(l=r.trys).length>0&&l[l.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){r.label=o[1];break}if(6===o[0]&&r.label<l[1]){r.label=l[1],l=o;break}if(l&&r.label<l[2]){r.label=l[2],r.ops.push(o);break}l[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(a,r)}catch(a){o=[6,a],e=0}finally{n=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}(this,function(y){switch(y.label){case 0:return this.dataChart?(this.loading=!0,[4,this.getChartData(this.platform)]):[2];case 1:for(t=y.sent().data,n=[],e=Object(C.chain)(t).uniqBy("sCat1Name").value(),l=0;l<e.length;l++)for(r=a(o=e[l],n,"sCat1Name"),u=Object(C.chain)(t).filter({sCat1Name:o.sCat1Name}).uniqBy("cat1Name").value(),i=0;i<u.length;i++)for(s=a(c=u[i],r,"cat2Name"),h=Object(C.chain)(t).filter({cat1Name:c.cat1Name}).uniqBy("cat2Name").value(),p=0;p<h.length;p++)for(g=a(m=h[p],s,"cat2Name"),d=Object(C.chain)(t).filter({cat2Name:m.cat2Name}).value(),f=0;f<d.length;f++)a(d[f],g,"cat3Name");return function a(t){for(var n=0,e=0;e<t.length;e++){var l=t[e];l.children&&l.children.length?l.value=a(l.children):l.children=null,n+=l.value}return n}(n),b=1,this.dataChart.setOption({series:[{type:"treemap",data:n,leafDepth:1,levels:[{itemStyle:{normal:{borderWidth:4,gapWidth:4}}},{colorSaturation:[.3,.6],itemStyle:{normal:{borderColorSaturation:.7,gapWidth:2,borderWidth:2}}},{colorSaturation:[.3,.5],itemStyle:{normal:{borderColorSaturation:.6,gapWidth:1}}},{colorSaturation:[.3,.5]}]}]}),this.loading=!1,[2]}})},new((t=void 0)||(t=Promise))(function(e,l){function o(a){try{u(n.next(a))}catch(a){l(a)}}function r(a){try{u(n.throw(a))}catch(a){l(a)}}function u(a){a.done?e(a.value):new t(function(t){t(a.value)}).then(o,r)}u((n=n.apply(a,[])).next())});var a,t,n},a.prototype.getChartData=function(a){var t=this.getDateRangeParam();return this.categoryService.catSubdivisionTree(x({platform:a||void 0},t))},a.prototype.createColumnVolumeConfigs=function(){return[{column:"date",title:"\u65f6\u95f4",formatter:function(a){return(a.year||"")+"-"+(a.month||"")}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u4e00\u7ea7\u54c1\u7c7b"},{column:"cat1Name",title:"\u4e8c\u7ea7\u54c1\u7c7b"},{column:"cat2Name",title:"\u4e09\u7ea7\u54c1\u7c7b"},{column:"salesPercent",title:"\u9500\u552e\u989d\u5360\u6bd4",formatter:function(a,t){return(t||0)+"%"}}]},a.prototype.getDateRangeParam=function(){var a={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var t=this.dateRange,n=t[1];a.dateBegin=y(t[0]).format("YYYY-MM")+"-01",a.dateEnd=y(n).format("YYYY-MM")+"-02"}return a},a}(),N=e.Pa({encapsulation:0,styles:[[""]],data:{}});function Y(a){return e.lb(0,[e.hb(402653184,1,{dataChart:0}),(a()(),e.Ra(1,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(a()(),e.Ra(2,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(a,t,n){var l=!0,o=a.component;return"datesChange"===t&&(l=!1!==(o.dateRange=n)&&l),"datesChange"===t&&(o.setChartOption(),l=!1!==e.bb(a,11).searchData(!0)&&l),l},u.b,u.a)),e.Qa(3,638976,null,0,i.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(a()(),e.Ra(4,0,null,null,1,"app-common-operation",[["title","\u7ec6\u5206\u54c1\u7c7b\u63a2\u67e5"]],null,[[null,"platformChange"]],function(a,t,n){var e=!0,l=a.component;return"platformChange"===t&&(e=!1!==(l.platform=n)&&e),"platformChange"===t&&(e=!1!==l.setChartOption()&&e),e},s.b,s.a)),e.Qa(5,114688,null,0,h.a,[p.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(a()(),e.Ra(6,0,null,null,1,"app-data-chart",[],null,null,null,m.b,m.a)),e.Qa(7,4440064,[[1,4],["dataChart",4]],0,g.a,[c.a],{height:[0,"height"]},null),(a()(),e.Ra(8,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(9,114688,null,0,h.a,[p.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(a()(),e.Ra(10,0,null,null,1,"app-data-table",[],null,null,null,d.b,d.a)),e.Qa(11,114688,[["table",4]],0,f.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(a,t){var n=t.component;a(t,3,0,n.dateRange),a(t,5,0,"\u7ec6\u5206\u54c1\u7c7b\u63a2\u67e5",!0,n.platform,!0,n.loading),a(t,7,0,450),a(t,9,0,!0,!0),a(t,11,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var Q=e.Na("app-subdivision",O,function(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,1,"app-subdivision",[],null,null,null,Y,N)),e.Qa(1,114688,null,0,O,[b.a],null,null)],function(a,t){a(t,1,0)},null)},{},{},[]),V=Object.assign||function(a){for(var t,n=1,e=arguments.length;n<e;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l]);return a},j=function(a,t,n,e){return new(n||(n=Promise))(function(l,o){function r(a){try{i(e.next(a))}catch(a){o(a)}}function u(a){try{i(e.throw(a))}catch(a){o(a)}}function i(a){a.done?l(a.value):new n(function(t){t(a.value)}).then(r,u)}i((e=e.apply(a,t||[])).next())})},E=function(a,t){var n,e,l,o,r={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(l=e[2&o[0]?"return":o[0]?"throw":"next"])&&!(l=l.call(e,o[1])).done)return l;switch(e=0,l&&(o=[0,l.value]),o[0]){case 0:case 1:l=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,e=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(l=(l=r.trys).length>0&&l[l.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){r.label=o[1];break}if(6===o[0]&&r.label<l[1]){r.label=l[1],l=o;break}if(l&&r.label<l[2]){r.label=l[2],r.ops.push(o);break}l[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(a,r)}catch(a){o=[6,a],e=0}finally{n=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},T=function(){function a(a,t){this.categoryService=a,this.commonDataService=t,this.dateRange=[],this.platform="",this.loading=!1}return a.prototype.ngOnInit=function(){return j(this,void 0,void 0,function(){var a=this;return E(this,function(t){return this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(t,n){var e=a.getDateRangeParam();return a.categoryService.pagingCatView(V({},e,{pageNo:t,pageSize:n}))},[2]})})},a.prototype.ngAfterViewInit=function(){return j(this,void 0,void 0,function(){var a;return E(this,function(t){switch(t.label){case 0:return a=this,[4,this.commonDataService.getCategoryList()];case 1:return a.categoryList=t.sent().data,[2]}})})},a.prototype.setChartOption=function(){return j(this,void 0,void 0,function(){var a,t,n,e,l,o,r,u,i,c;return E(this,function(s){switch(s.label){case 0:return this.loading=!0,[4,this.getChartData()];case 1:for(a=s.sent().data,t=Object(C.groupBy)(a,"sCat1Name"),n=[],e=[{name:"\u96f6\u9500\u91cf",key:"countPercent",yAxisIndex:0,type:"bar"},{name:"\u96f6\u552e\u989d",key:"salesPercent",yAxisIndex:1,type:"bar"}],l=0;l<this.categoryList.length;l++){for(o=t[this.categoryList[l].value]||[],r=[],u=0;u<e.length;u++)r.push({name:(i=e[u]).name,yAxisIndex:i.yAxisIndex,type:i.type,data:Object(C.map)(o,i.key)});n.push({xAxis:[{type:"category",data:Object(C.map)(o,"city"),splitLine:{show:!1}}],series:r})}return c={baseOption:{timeline:{controlStyle:{showPlayBtn:!1,show:!0},data:Object(C.map)(this.categoryList,"value"),axisType:"category"},legend:{data:Object(C.map)(e,"name")},tooltip:{trigger:"axis",formatter:"{a}:{c}% <br/> {a1}:{c1}%"},calculable:!0,grid:{top:80,bottom:100},yAxis:[{type:"value",name:"\u96f6\u552e\u91cf%"},{type:"value",name:"\u96f6\u552e\u989d%"}]},options:n},this.dataChart.setOption(c),this.loading=!1,[2]}})})},a.prototype.getChartData=function(){var a=this.getDateRangeParam();return this.categoryService.catView(V({platform:this.platform||void 0},a))},a.prototype.createColumnVolumeConfigs=function(){return[{column:"date",title:"\u65f6\u95f4",formatter:function(a){return(a.year||"")+"-"+(a.month||"")}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u4e00\u7ea7\u54c1\u7c7b"},{column:"city",title:"\u57ce\u5e02"},{column:"salesPercent",title:"\u9500\u552e\u989d\u5360\u6bd4",formatter:function(a,t){return(t||0)+"%"}}]},a.prototype.getDateRangeParam=function(){var a={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var t=this.dateRange,n=t[1];a.dateBegin=y(t[0]).format("YYYY-MM")+"-01",a.dateEnd=y(n).format("YYYY-MM")+"-02"}return a},a}(),k=e.Pa({encapsulation:0,styles:[[""]],data:{}});function M(a){return e.lb(0,[e.hb(402653184,1,{dataChart:0}),(a()(),e.Ra(1,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(a()(),e.Ra(2,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(a,t,n){var l=!0,o=a.component;return"datesChange"===t&&(l=!1!==(o.dateRange=n)&&l),"datesChange"===t&&(o.setChartOption(),l=!1!==e.bb(a,11).searchData(!0)&&l),l},u.b,u.a)),e.Qa(3,638976,null,0,i.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(a()(),e.Ra(4,0,null,null,1,"app-common-operation",[["title","\u7ec6\u5206\u54c1\u7c7b\u63a2\u67e5"]],null,[[null,"platformChange"]],function(a,t,n){var e=!0,l=a.component;return"platformChange"===t&&(e=!1!==(l.platform=n)&&e),"platformChange"===t&&(e=!1!==l.setChartOption()&&e),e},s.b,s.a)),e.Qa(5,114688,null,0,h.a,[p.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(a()(),e.Ra(6,0,null,null,1,"app-data-chart",[],null,null,null,m.b,m.a)),e.Qa(7,4440064,[[1,4],["dataChart",4]],0,g.a,[c.a],{height:[0,"height"]},null),(a()(),e.Ra(8,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(9,114688,null,0,h.a,[p.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(a()(),e.Ra(10,0,null,null,1,"app-data-table",[],null,null,null,d.b,d.a)),e.Qa(11,114688,[["table",4]],0,f.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(a,t){var n=t.component;a(t,3,0,n.dateRange),a(t,5,0,"\u7ec6\u5206\u54c1\u7c7b\u63a2\u67e5",!0,n.platform,!0,n.loading),a(t,7,0,450),a(t,9,0,!0,!0),a(t,11,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var z=e.Na("app-category-area",T,function(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,1,"app-category-area",[],null,null,null,M,k)),e.Qa(1,4308992,null,0,T,[b.a,p.a],null,null)],function(a,t){a(t,1,0)},null)},{},{},[]),A=n("t/Na"),L=function(){function a(a){this.http=a}return a.prototype.pagingCatShopView=function(a){return this.http.post("catShop/listview",a).toPromise()},a.ngInjectableDef=e.T({factory:function(){return new a(e.X(A.c))},token:a,providedIn:"root"}),a}(),q=function(){function a(a){this.catShopService=a,this.volumeParam={pageNo:1,pageSize:10,orderBy:"M_SALES_VOLUME",platform:null,sCat1Name:null},this.countParam={pageNo:1,pageSize:10,orderBy:"M_SLAES_COUNT",platform:null,sCat1Name:null},this.loading=!1,this.loading2=!1,this.dateRange=[]}return a.prototype.ngOnInit=function(){var a=this;this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.slaesCountConfigs=this.createColumnCountConfigs(),this.getSalesVolumeTableDataFn=function(){return a.loading=!0,a.catShopService.pagingCatShopView(t(a.volumeParam)).then(function(t){return a.loading=!1,t.data.total=Math.min(t.data.total,a.volumeParam.pageSize),t})},this.getSlaesCountTableDataFn=function(){return a.loading2=!0,a.catShopService.pagingCatShopView(t(a.countParam)).then(function(t){return a.loading2=!1,t.data.total=Math.min(t.data.total,a.countParam.pageSize),t})};var t=function(t){var n=Object(C.cloneDeep)(t);if(n.platform||delete n.platform,n.sCat1Name||delete n.sCat1Name,a.dateRange&&a.dateRange.length){var e=a.dateRange,l=e[1];n.dateBegin=y(e[0]).format("YYYY-MM")+"-01",n.dateEnd=y(l).format("YYYY-MM")+"-02"}else delete n.dateBegin,delete n.dateEnd;return n}},a.prototype.doQuery=function(a){a.searchData(!0)},a.prototype.createColumnVolumeConfigs=function(){return[{column:"date",title:"\u65f6\u95f4",formatter:function(a){return(a.year||"")+"-"+(a.month||"")}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u4e00\u7ea7\u54c1\u7c7b"},{column:"shopName",title:"\u5e97\u94fa\u540d\u79f0"},{column:"salesPercent",title:"\u9500\u552e\u989d\u5360\u6bd4",formatter:function(a,t){return(t||0)+"%"}}]},a.prototype.createColumnCountConfigs=function(){return[{column:"date",title:"\u65f6\u95f4",formatter:function(a){return(a.year||"")+"-"+(a.month||"")}},{column:"province",title:"\u7701"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u4e00\u7ea7\u54c1\u7c7b"},{column:"shopName",title:"\u5e97\u94fa\u540d\u79f0"},{column:"countPercent",title:"\u9500\u552e\u91cf\u5360\u6bd4",formatter:function(a,t){return(t||0)+"%"}}]},a}(),B=e.Pa({encapsulation:0,styles:[[""]],data:{}});function F(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(a()(),e.Ra(1,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(a,t,n){var l=!0,o=a.component;return"datesChange"===t&&(l=!1!==(o.dateRange=n)&&l),"datesChange"===t&&(o.doQuery(e.bb(a,6)),l=!1!==o.doQuery(e.bb(a,10))&&l),l},u.b,u.a)),e.Qa(2,638976,null,0,i.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(a()(),e.Ra(3,0,null,null,1,"app-common-operation",[["title","\u5404\u54c1\u7c7b\u4e0b\u9500\u552e\u989dTOP10\u5e97\u94fa"]],null,[[null,"platformChange"],[null,"categoryChange"],[null,"chagned"]],function(a,t,n){var l=!0,o=a.component;return"platformChange"===t&&(l=!1!==(o.volumeParam.platform=n)&&l),"categoryChange"===t&&(l=!1!==(o.volumeParam.sCat1Name=n)&&l),"chagned"===t&&(l=!1!==o.doQuery(e.bb(a,6))&&l),l},s.b,s.a)),e.Qa(4,114688,null,0,h.a,[p.a],{title:[0,"title"],category:[1,"category"],platform:[2,"platform"],loading:[3,"loading"]},{categoryChange:"categoryChange",platformChange:"platformChange",chagned:"chagned"}),(a()(),e.Ra(5,0,null,null,1,"app-data-table",[],null,null,null,d.b,d.a)),e.Qa(6,114688,[["volumeTable",4]],0,f.a,[],{hideOnSinglePage:[0,"hideOnSinglePage"],columns:[1,"columns"],queryDataService:[2,"queryDataService"]},null),(a()(),e.Ra(7,0,null,null,1,"app-common-operation",[["title","\u5404\u54c1\u7c7b\u4e0b\u9500\u91cfTOP10\u5e97\u94fa"]],null,[[null,"platformChange"],[null,"categoryChange"],[null,"chagned"]],function(a,t,n){var l=!0,o=a.component;return"platformChange"===t&&(l=!1!==(o.countParam.platform=n)&&l),"categoryChange"===t&&(l=!1!==(o.countParam.sCat1Name=n)&&l),"chagned"===t&&(l=!1!==o.doQuery(e.bb(a,10))&&l),l},s.b,s.a)),e.Qa(8,114688,null,0,h.a,[p.a],{title:[0,"title"],category:[1,"category"],platform:[2,"platform"],loading:[3,"loading"]},{categoryChange:"categoryChange",platformChange:"platformChange",chagned:"chagned"}),(a()(),e.Ra(9,0,null,null,1,"app-data-table",[],null,null,null,d.b,d.a)),e.Qa(10,114688,[["countTable",4]],0,f.a,[],{hideOnSinglePage:[0,"hideOnSinglePage"],columns:[1,"columns"],queryDataService:[2,"queryDataService"]},null)],function(a,t){var n=t.component;a(t,2,0,n.dateRange),a(t,4,0,"\u5404\u54c1\u7c7b\u4e0b\u9500\u552e\u989dTOP10\u5e97\u94fa",n.volumeParam.sCat1Name,n.volumeParam.platform,n.loading),a(t,6,0,!0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn),a(t,8,0,"\u5404\u54c1\u7c7b\u4e0b\u9500\u91cfTOP10\u5e97\u94fa",n.countParam.sCat1Name,n.countParam.platform,n.loading2),a(t,10,0,!0,n.slaesCountConfigs,n.getSlaesCountTableDataFn)},null)}var I=e.Na("app-category-top-shop",q,function(a){return e.lb(0,[(a()(),e.Ra(0,0,null,null,1,"app-category-top-shop",[],null,null,null,F,B)),e.Qa(1,114688,null,0,q,[L],null,null)],function(a,t){a(t,1,0)},null)},{},{},[]),K=n("Ip0R"),G=n("gIcY"),X=n("d5Ni"),W=n("M2Lx"),H=n("tn8F"),J=n("eDkP"),_=n("Fzqc"),U=n("4c35"),$=n("dWZg"),aa=n("qAlS"),ta=n("PCNd"),na=n("ZYCi"),ea=function(){};n.d(t,"CategoryAnalysisModuleNgFactory",function(){return la});var la=e.Oa(l,[],function(a){return e.Ya([e.Za(512,e.j,e.Ca,[[8,[o.y,o.z,o.A,o.B,o.C,o.D,o.E,r.a,P,Q,z,I]],[3,e.j],e.w]),e.Za(4608,K.o,K.n,[e.t,[2,K.A]]),e.Za(4608,G.c,G.c,[]),e.Za(4608,G.m,G.m,[]),e.Za(4608,A.l,A.r,[K.d,e.A,A.p]),e.Za(4608,A.s,A.s,[A.l,A.q]),e.Za(5120,A.a,function(a){return[a,new X.a]},[A.s]),e.Za(4608,A.o,A.o,[]),e.Za(6144,A.m,null,[A.o]),e.Za(4608,A.k,A.k,[A.m]),e.Za(6144,A.b,null,[A.k]),e.Za(4608,A.g,A.n,[A.b,e.q]),e.Za(4608,A.c,A.c,[A.g]),e.Za(4608,W.c,W.c,[]),e.Za(5120,H.zd,H.Bd,[[3,H.zd],H.Ad]),e.Za(4608,K.e,K.e,[e.t]),e.Za(5120,H.Zb,H.yc,[[3,H.Zb],H.od,H.zd,K.e]),e.Za(4608,J.d,J.d,[J.k,J.f,e.j,J.i,J.g,e.q,e.y,K.d,_.b]),e.Za(5120,J.l,J.m,[J.d]),e.Za(5120,H.K,H.L,[K.d,[3,H.K]]),e.Za(4608,H.X,H.X,[]),e.Za(4608,H.Sa,H.Sa,[]),e.Za(4608,H.Yc,H.Yc,[J.d,e.q,e.j,e.g]),e.Za(4608,H.ed,H.ed,[J.d,e.q,e.j,e.g]),e.Za(4608,H.ld,H.ld,[[3,H.ld]]),e.Za(4608,H.nd,H.nd,[J.d,H.zd,H.ld]),e.Za(1073742336,K.c,K.c,[]),e.Za(1073742336,G.l,G.l,[]),e.Za(1073742336,G.k,G.k,[]),e.Za(1073742336,G.e,G.e,[]),e.Za(1073742336,A.e,A.e,[]),e.Za(1073742336,A.d,A.d,[]),e.Za(1073742336,W.d,W.d,[]),e.Za(1073742336,H.d,H.d,[]),e.Za(1073742336,H.Ed,H.Ed,[]),e.Za(1073742336,H.Dd,H.Dd,[]),e.Za(1073742336,H.Gd,H.Gd,[]),e.Za(1073742336,_.a,_.a,[]),e.Za(1073742336,U.c,U.c,[]),e.Za(1073742336,$.b,$.b,[]),e.Za(1073742336,aa.a,aa.a,[]),e.Za(1073742336,J.h,J.h,[]),e.Za(1073742336,H.g,H.g,[]),e.Za(1073742336,H.Za,H.Za,[]),e.Za(1073742336,H.q,H.q,[]),e.Za(1073742336,H.v,H.v,[]),e.Za(1073742336,H.x,H.x,[]),e.Za(1073742336,H.G,H.G,[]),e.Za(1073742336,H.N,H.N,[]),e.Za(1073742336,H.I,H.I,[]),e.Za(1073742336,H.P,H.P,[]),e.Za(1073742336,H.R,H.R,[]),e.Za(1073742336,H.Y,H.Y,[]),e.Za(1073742336,H.Ca,H.Ca,[]),e.Za(1073742336,H.Ea,H.Ea,[]),e.Za(1073742336,H.Ha,H.Ha,[]),e.Za(1073742336,H.Ka,H.Ka,[]),e.Za(1073742336,H.Oa,H.Oa,[]),e.Za(1073742336,H.Xa,H.Xa,[]),e.Za(1073742336,H.Qa,H.Qa,[]),e.Za(1073742336,H.bb,H.bb,[]),e.Za(1073742336,H.db,H.db,[]),e.Za(1073742336,H.fb,H.fb,[]),e.Za(1073742336,H.hb,H.hb,[]),e.Za(1073742336,H.jb,H.jb,[]),e.Za(1073742336,H.lb,H.lb,[]),e.Za(1073742336,H.sb,H.sb,[]),e.Za(1073742336,H.xb,H.xb,[]),e.Za(1073742336,H.Ab,H.Ab,[]),e.Za(1073742336,H.Db,H.Db,[]),e.Za(1073742336,H.Hb,H.Hb,[]),e.Za(1073742336,H.Lb,H.Lb,[]),e.Za(1073742336,H.Nb,H.Nb,[]),e.Za(1073742336,H.Qb,H.Qb,[]),e.Za(1073742336,H.ac,H.ac,[]),e.Za(1073742336,H.Yb,H.Yb,[]),e.Za(1073742336,H.uc,H.uc,[]),e.Za(1073742336,H.wc,H.wc,[]),e.Za(1073742336,H.Fc,H.Fc,[]),e.Za(1073742336,H.Jc,H.Jc,[]),e.Za(1073742336,H.Nc,H.Nc,[]),e.Za(1073742336,H.Rc,H.Rc,[]),e.Za(1073742336,H.Tc,H.Tc,[]),e.Za(1073742336,H.Zc,H.Zc,[]),e.Za(1073742336,H.fd,H.fd,[]),e.Za(1073742336,H.hd,H.hd,[]),e.Za(1073742336,H.jd,H.jd,[]),e.Za(1073742336,H.pd,H.pd,[]),e.Za(1073742336,H.rd,H.rd,[]),e.Za(1073742336,H.td,H.td,[]),e.Za(1073742336,H.xd,H.xd,[]),e.Za(1073742336,H.b,H.b,[]),e.Za(1073742336,ta.a,ta.a,[]),e.Za(1073742336,na.m,na.m,[[2,na.s],[2,na.k]]),e.Za(1073742336,ea,ea,[]),e.Za(1073742336,l,l,[]),e.Za(256,A.p,"XSRF-TOKEN",[]),e.Za(256,A.q,"X-XSRF-TOKEN",[]),e.Za(256,H.Ad,!1,[]),e.Za(256,H.od,void 0,[]),e.Za(256,H.Vc,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),e.Za(256,H.cd,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),e.Za(256,H.a,ta.b,[]),e.Za(1024,na.i,function(){return[[{path:"",redirectTo:"whole"},{path:"whole",component:S},{path:"subdivision",component:O},{path:"category-area",component:T},{path:"category-top-shop",component:q}]]},[])])})}}]);