(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{lwC9:function(t,a,n){"use strict";n.r(a);var e=n("CcnG"),o=function(){},l=n("82da"),r=n("pMnS"),i=n("8for"),u=n("aQKG"),c=n("rZLr"),s=n("XKqz"),p=n("We0v"),h=n("4CI1"),d=n("H6uK"),g=n("Cz+m"),f=n("x6z2"),m=n("FbL/"),y=n("wd/R"),b=n("LvDl"),v=n("cxyG"),C=n("jKh5"),Z=Object.assign||function(t){for(var a,n=1,e=arguments.length;n<e;n++)for(var o in a=arguments[n])Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);return t},w=function(){function t(t,a,n){this.homeService=t,this.commonDataService=a,this.trendService=n,this.dateRange=[],this.loading=!1,this.category="\u7535\u5546\u6574\u4f53"}return t.prototype.ngOnInit=function(){var t=this;this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(a,n){var e=t.getDateRangeParam();return t.homeService.pagingAreaListview(Z({},e,{pageNo:a,pageSize:n}))},this.commonDataService.getIndexTypeList().then(function(a){t.categoryList=a.data})},t.prototype.setChartOption=function(){return t=this,void 0,n=function(){var t,a,n,e,o,l,r;return function(t,a){var n,e,o,l,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(o=e[2&l[0]?"return":l[0]?"throw":"next"])&&!(o=o.call(e,l[1])).done)return o;switch(e=0,o&&(l=[0,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,e=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(6===l[0]&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=a.call(t,r)}catch(t){l=[6,t],e=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}(this,function(i){switch(i.label){case 0:return this.loading=!0,[4,this.getChartData()];case 1:for(t=i.sent().data,a=Object(b.groupBy)(t,"city"),n=Object.keys(a),e=[],o=0;o<n.length;o++)l=a[n[o]]||[],r=Object(b.map)(l,"dateStr"),e.push({xAxis:[{type:"category",data:r,splitLine:{show:!1}}],yAxis:{type:"value"},series:[{name:"\u4ea4\u6613\u989d",type:"line",data:Object(b.map)(l,"totalVolume")}]});return this.dataChart.setOption({baseOption:{timeline:{controlStyle:{showPlayBtn:!1,show:!0},data:n,axisType:"category"},tooltip:{trigger:"axis"},calculable:!0,grid:{top:80,bottom:100}},options:e}),this.loading=!1,[2]}})},new((a=void 0)||(a=Promise))(function(e,o){function l(t){try{i(n.next(t))}catch(t){o(t)}}function r(t){try{i(n.throw(t))}catch(t){o(t)}}function i(t){t.done?e(t.value):new a(function(a){a(t.value)}).then(l,r)}i((n=n.apply(t,[])).next())});var t,a,n},t.prototype.getChartData=function(){var t=this.getDateRangeParam();return this.trendService.getTrendCoreCityLineData(Z({indexType:this.category||void 0},t))},t.prototype.createColumnVolumeConfigs=function(){return[{column:"dateStr",title:"\u65f6\u95f4"},{column:"province",title:"\u7701"},{column:"city",title:"\u5e02"},{column:"indexType",title:"\u6307\u6807\u7c7b\u578b"},{column:"indexValue",title:"\u6307\u6807\u503c"},{column:"mom",title:"\u73af\u6bd4"}]},t.prototype.getDateRangeParam=function(){var t={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var a=[y(this.dateRange[0]).format("YYYY-MM"),y(this.dateRange[1]).format("YYYY-MM")],n=a[0],e=a[1];t.dateBegin=n+"-01",t.dateEnd=e+"-02",this.dateAreaStr=n+"-"+e}return t},t}(),R=e.Pa({encapsulation:0,styles:[[""]],data:{}});function x(t){return e.lb(0,[e.hb(402653184,1,{dataChart:0}),(t()(),e.Ra(1,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(t()(),e.Ra(2,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(t,a,n){var e=!0,o=t.component;return"datesChange"===a&&(e=!1!==(o.dateRange=n)&&e),"datesChange"===a&&(e=!1!==o.setChartOption()&&e),e},i.b,i.a)),e.Qa(3,638976,null,0,u.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(t()(),e.Ra(4,0,null,null,1,"app-common-operation",[["title","\u5404\u5730\u6838\u5fc3\u7535\u5546\u6307\u6807\u901f\u89c8"]],null,[[null,"categoryChange"]],function(t,a,n){var e=!0,o=t.component;return"categoryChange"===a&&(e=!1!==(o.category=n)&&e),"categoryChange"===a&&(e=!1!==o.setChartOption()&&e),e},s.b,s.a)),e.Qa(5,114688,null,0,p.a,[h.a],{title:[0,"title"],category:[1,"category"],categoryList:[2,"categoryList"],hideCategoryAll:[3,"hideCategoryAll"],noPlatform:[4,"noPlatform"],noExportData:[5,"noExportData"],loading:[6,"loading"]},{categoryChange:"categoryChange"}),(t()(),e.Ra(6,0,null,null,1,"app-data-chart",[],null,null,null,d.b,d.a)),e.Qa(7,4440064,[[1,4],["dataChart",4]],0,g.a,[c.a],{height:[0,"height"]},null),(t()(),e.Ra(8,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(9,114688,null,0,p.a,[h.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(t()(),e.Ra(10,0,null,null,1,"app-data-table",[],null,null,null,f.b,f.a)),e.Qa(11,114688,null,0,m.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(t,a){var n=a.component;t(a,3,0,n.dateRange),t(a,5,0,"\u5404\u5730\u6838\u5fc3\u7535\u5546\u6307\u6807\u901f\u89c8",n.category,n.categoryList,!0,!0,!0,n.loading),t(a,7,0,450),t(a,9,0,!0,!0),t(a,11,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var S=e.Na("app-quick-view",w,function(t){return e.lb(0,[(t()(),e.Ra(0,0,null,null,1,"app-quick-view",[],null,null,null,x,R)),e.Qa(1,114688,null,0,w,[v.a,h.a,C.a],null,null)],function(t,a){t(a,1,0)},null)},{},{},[]),D=Object.assign||function(t){for(var a,n=1,e=arguments.length;n<e;n++)for(var o in a=arguments[n])Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);return t},O=function(t,a,n,e){return new(n||(n=Promise))(function(o,l){function r(t){try{u(e.next(t))}catch(t){l(t)}}function i(t){try{u(e.throw(t))}catch(t){l(t)}}function u(t){t.done?o(t.value):new n(function(a){a(t.value)}).then(r,i)}u((e=e.apply(t,a||[])).next())})},P=function(t,a){var n,e,o,l,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(o=e[2&l[0]?"return":l[0]?"throw":"next"])&&!(o=o.call(e,l[1])).done)return o;switch(e=0,o&&(l=[0,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,e=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(6===l[0]&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=a.call(t,r)}catch(t){l=[6,t],e=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},k=function(){function t(t,a,n){this.homeService=t,this.trendService=a,this.commonDataService=n,this.dateRange=[],this.category="\u7535\u5546\u6574\u4f53",this.loading=!1}return t.prototype.ngOnInit=function(){return O(this,void 0,void 0,function(){var t=this;return P(this,function(a){return this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(a,n){var e=t.getDateRangeParam();return t.homeService.pagingAreaListview(D({},e,{orderBy:"INDEX_VALUE",pageNo:a,pageSize:n}))},this.commonDataService.getIndexTypeList().then(function(a){t.categoryList=a.data}),[2]})})},t.prototype.setChartOption=function(){return O(this,void 0,void 0,function(){var t,a,n;return P(this,function(e){switch(e.label){case 0:return[4,this.getChartData()];case 1:return t=e.sent().data,a=Object(b.map)(t,"city"),n=Object(b.map)(t,"totalVolume"),this.dataChart.setOption({xAxis:{type:"category",data:a},tooltip:{trigger:"axis"},yAxis:[{type:"value"}],dataZoom:[{startValue:a[0]},{type:"inside"}],series:[{name:"\u9500\u552e\u989d",data:n,type:"bar"}]}),this.loading=!1,[2]}})})},t.prototype.getChartData=function(){var t=this.getDateRangeParam();return this.trendService.getTrendCityLineData(D({},t,{indexType:this.category||void 0}))},t.prototype.createColumnVolumeConfigs=function(){var t=this;return[{column:"date",title:"\u65f6\u95f4",formatter:function(){return t.dateAreaStr}},{column:"province",title:"\u7701"},{column:"city",title:"\u5e02"},{column:"indexType",title:"\u6307\u6807\u7c7b\u578b"},{column:"indexValue",title:"\u6307\u6807\u503c"},{column:"sortBy",title:"\u6392\u540d",formatter:function(a,n,e){return(t.dataTable.pageIndex-1)*t.dataTable.pageSize+e+1}}]},t.prototype.getDateRangeParam=function(){var t={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var a=[y(this.dateRange[0]).format("YYYY-MM"),y(this.dateRange[1]).format("YYYY-MM")],n=a[0],e=a[1];t.dateBegin=n+"-01",t.dateEnd=e+"-02",this.dateAreaStr=n+"-"+e}return t},t}(),A=e.Pa({encapsulation:0,styles:[[""]],data:{}});function Y(t){return e.lb(0,[e.hb(402653184,1,{dataChart:0}),e.hb(402653184,2,{dataTable:0}),(t()(),e.Ra(2,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(t()(),e.Ra(3,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(t,a,n){var e=!0,o=t.component;return"datesChange"===a&&(e=!1!==(o.dateRange=n)&&e),"datesChange"===a&&(e=!1!==o.setChartOption()&&e),e},i.b,i.a)),e.Qa(4,638976,null,0,u.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(t()(),e.Ra(5,0,null,null,1,"app-common-operation",[["title","\u5404\u5730\u6838\u5fc3\u7535\u5546\u6307\u6807\u901f\u89c8"]],null,[[null,"categoryChange"]],function(t,a,n){var e=!0,o=t.component;return"categoryChange"===a&&(e=!1!==(o.category=n)&&e),"categoryChange"===a&&(e=!1!==o.setChartOption()&&e),e},s.b,s.a)),e.Qa(6,114688,null,0,p.a,[h.a],{title:[0,"title"],category:[1,"category"],categoryList:[2,"categoryList"],hideCategoryAll:[3,"hideCategoryAll"],noPlatform:[4,"noPlatform"],noExportData:[5,"noExportData"],loading:[6,"loading"]},{categoryChange:"categoryChange"}),(t()(),e.Ra(7,0,null,null,1,"app-data-chart",[],null,null,null,d.b,d.a)),e.Qa(8,4440064,[[1,4],["dataChart",4]],0,g.a,[c.a],{height:[0,"height"]},null),(t()(),e.Ra(9,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(10,114688,null,0,p.a,[h.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(t()(),e.Ra(11,0,null,null,1,"app-data-table",[],null,null,null,f.b,f.a)),e.Qa(12,114688,[[2,4],["dataTable",4]],0,m.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(t,a){var n=a.component;t(a,4,0,n.dateRange),t(a,6,0,"\u5404\u5730\u6838\u5fc3\u7535\u5546\u6307\u6807\u901f\u89c8",n.category,n.categoryList,!0,!0,!0,n.loading),t(a,8,0,450),t(a,10,0,!0,!0),t(a,12,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var T=e.Na("app-contrast",k,function(t){return e.lb(0,[(t()(),e.Ra(0,0,null,null,1,"app-contrast",[],null,null,null,Y,A)),e.Qa(1,114688,null,0,k,[v.a,C.a,h.a],null,null)],function(t,a){t(a,1,0)},null)},{},{},[]),V=n("1jmK"),j=Object.assign||function(t){for(var a,n=1,e=arguments.length;n<e;n++)for(var o in a=arguments[n])Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);return t},E=function(){function t(t){this.categoryService=t,this.dateRange=[],this.platform="",this.loading=!1}return t.prototype.ngOnInit=function(){var t=this;this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(a,n){var e=t.getDateRangeParam();return t.categoryService.areaCatListview(j({},e,{pageNo:a,pageSize:n}))}},t.prototype.setChartOption=function(){return t=this,void 0,n=function(){var t,a,n,e,o,l,r,i,u,c,s;return function(t,a){var n,e,o,l,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(o=e[2&l[0]?"return":l[0]?"throw":"next"])&&!(o=o.call(e,l[1])).done)return o;switch(e=0,o&&(l=[0,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,e=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(6===l[0]&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=a.call(t,r)}catch(t){l=[6,t],e=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}(this,function(p){switch(p.label){case 0:return this.loading=!0,[4,this.getChartData()];case 1:for(t=p.sent().data,a=Object(b.groupBy)(t,"city"),n=Object.keys(a),e=[],o=[{name:"\u96f6\u9500\u91cf",key:"countPercent",yAxisIndex:0,type:"bar"},{name:"\u96f6\u552e\u989d",key:"salesPercent",yAxisIndex:1,type:"bar"}],l=0;l<n.length;l++){for(r=a[n[l]]||[],i=[],u=0;u<o.length;u++)i.push({name:(c=o[u]).name,yAxisIndex:c.yAxisIndex,type:c.type,data:Object(b.map)(r,c.key)});e.push({tooltip:{trigger:"axis"},xAxis:[{type:"category",data:Object(b.map)(r,"sCat1Name"),splitLine:{show:!1}}],series:i})}return e.length||e.push({tooltip:{trigger:"axis"},xAxis:[{type:"category",data:[],splitLine:{show:!1}}],series:[]}),s={baseOption:{timeline:{controlStyle:{showPlayBtn:!1,show:!0},data:n,axisType:"category"},legend:{data:Object(b.map)(o,"name")},calculable:!0,grid:{top:80,bottom:100},yAxis:[{type:"value",name:"\u96f6\u552e\u91cf%"},{type:"value",name:"\u96f6\u552e\u989d%"}]},options:e},this.dataChart.setOption(s),this.loading=!1,[2]}})},new((a=void 0)||(a=Promise))(function(e,o){function l(t){try{i(n.next(t))}catch(t){o(t)}}function r(t){try{i(n.throw(t))}catch(t){o(t)}}function i(t){t.done?e(t.value):new a(function(a){a(t.value)}).then(l,r)}i((n=n.apply(t,[])).next())});var t,a,n},t.prototype.getChartData=function(){var t=this.getDateRangeParam();return this.categoryService.areaCatBar(j({platform:this.platform||void 0},t))},t.prototype.createColumnVolumeConfigs=function(){var t=this;return[{column:"date",title:"\u65f6\u95f4",formatter:function(){return t.dateAreaStr}},{column:"province",title:"\u7701"},{column:"city",title:"\u5e02"},{column:"platform",title:"\u5e73\u53f0"},{column:"sCat1Name",title:"\u4e00\u7ea7\u54c1\u7c7b"},{column:"countPercent",title:"\u9500\u552e\u91cf\u5360\u6bd4",formatter:function(t,a){return(a||0)+"%"}},{column:"salesPercent",title:"\u9500\u552e\u989d\u5360\u6bd4",formatter:function(t,a){return(a||0)+"%"}}]},t.prototype.getDateRangeParam=function(){var t={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var a=[y(this.dateRange[0]).format("YYYY-MM"),y(this.dateRange[1]).format("YYYY-MM")],n=a[0],e=a[1];t.dateBegin=n+"-01",t.dateEnd=e+"-02",this.dateAreaStr=n+"-"+e}return t},t}(),L=e.Pa({encapsulation:0,styles:[[""]],data:{}});function Q(t){return e.lb(0,[e.hb(402653184,1,{dataChart:0}),(t()(),e.Ra(1,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(t()(),e.Ra(2,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(t,a,n){var o=!0,l=t.component;return"datesChange"===a&&(o=!1!==(l.dateRange=n)&&o),"datesChange"===a&&(l.setChartOption(),o=!1!==e.bb(t,11).searchData(!0)&&o),o},i.b,i.a)),e.Qa(3,638976,null,0,u.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(t()(),e.Ra(4,0,null,null,1,"app-common-operation",[["title","\u5404\u5730\u54c1\u7c7b\u6570\u636e\u5206\u6790"]],null,[[null,"platformChange"]],function(t,a,n){var e=!0,o=t.component;return"platformChange"===a&&(e=!1!==(o.platform=n)&&e),"platformChange"===a&&(e=!1!==o.setChartOption()&&e),e},s.b,s.a)),e.Qa(5,114688,null,0,p.a,[h.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(t()(),e.Ra(6,0,null,null,1,"app-data-chart",[],null,null,null,d.b,d.a)),e.Qa(7,4440064,[[1,4],["dataChart",4]],0,g.a,[c.a],{height:[0,"height"]},null),(t()(),e.Ra(8,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(9,114688,null,0,p.a,[h.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(t()(),e.Ra(10,0,null,null,1,"app-data-table",[],null,null,null,f.b,f.a)),e.Qa(11,114688,[["table",4]],0,m.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(t,a){var n=a.component;t(a,3,0,n.dateRange),t(a,5,0,"\u5404\u5730\u54c1\u7c7b\u6570\u636e\u5206\u6790",!0,n.platform,!0,n.loading),t(a,7,0,450),t(a,9,0,!0,!0),t(a,11,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var q=e.Na("app-category",E,function(t){return e.lb(0,[(t()(),e.Ra(0,0,null,null,1,"app-category",[],null,null,null,Q,L)),e.Qa(1,114688,null,0,E,[V.a],null,null)],function(t,a){t(a,1,0)},null)},{},{},[]),M=n("V8c2"),B=Object.assign||function(t){for(var a,n=1,e=arguments.length;n<e;n++)for(var o in a=arguments[n])Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);return t},z=function(t,a,n,e){return new(n||(n=Promise))(function(o,l){function r(t){try{u(e.next(t))}catch(t){l(t)}}function i(t){try{u(e.throw(t))}catch(t){l(t)}}function u(t){t.done?o(t.value):new n(function(a){a(t.value)}).then(r,i)}u((e=e.apply(t,a||[])).next())})},F=function(t,a){var n,e,o,l,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(o=e[2&l[0]?"return":l[0]?"throw":"next"])&&!(o=o.call(e,l[1])).done)return o;switch(e=0,o&&(l=[0,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,e=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(6===l[0]&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=a.call(t,r)}catch(t){l=[6,t],e=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},I=function(){function t(t){this.shopService=t,this.dateRange=[],this.platform="",this.loading=!1}return t.prototype.ngOnInit=function(){return z(this,void 0,void 0,function(){var t=this;return F(this,function(a){return this.salesVolumeConfigs=this.createColumnVolumeConfigs(),this.getSalesVolumeTableDataFn=function(a,n){var e=t.getDateRangeParam();return t.shopService.pagingAreaShopListview(B({},e,{pageNo:a,pageSize:n}))},[2]})})},t.prototype.setChartOption=function(){return z(this,void 0,void 0,function(){var t,a,n,e,o,l,r,i,u,c,s;return F(this,function(p){switch(p.label){case 0:return this.loading=!0,[4,this.getChartData()];case 1:if(t=p.sent().data,a=Object(b.groupBy)(t,"range"),n=Object.keys(a),e=null,o=[],l=[],n.length)for(r=a[n[0]].length,i=function(t){var e=0;n.forEach(function(n){e+=a[n][t].shopCount||0}),l.push(e)},u=0;u<r;u++)i(u);for(u=0;u<n.length;u++)s=a[c=n[u]],e||(e=Object(b.map)(s,"city")),o.push({name:c,type:"bar",stack:"\u9500\u552e\u989d",label:{normal:{show:!0,position:"insideRight"}},data:Object(b.map)(s,"shopCount").map(function(t,a){return(t||0)/l[a]*100})});return this.dataChart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:n},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:e},yAxis:{type:"value"},series:o}),this.loading=!1,[2]}})})},t.prototype.getChartData=function(){var t=this.getDateRangeParam();return this.shopService.areaShopLine(B({platform:this.platform||void 0},t))},t.prototype.createColumnVolumeConfigs=function(){var t=this;return[{column:"date",title:"\u65f6\u95f4",formatter:function(){return t.dateAreaStr}},{column:"province",title:"\u7701"},{column:"city",title:"\u5e02"},{column:"platform",title:"\u5e73\u53f0"},{column:"type",title:"\u9500\u552e\u989d\u533a\u95f4"},{column:"percent",title:"\u5360\u6bd4",formatter:function(t,a){return(a||0)+"%"}}]},t.prototype.getDateRangeParam=function(){var t={dateBegin:void 0,dateEnd:void 0};if(this.dateRange&&2===this.dateRange.length){var a=[y(this.dateRange[0]).format("YYYY-MM"),y(this.dateRange[1]).format("YYYY-MM")],n=a[0],e=a[1];t.dateBegin=n+"-01",t.dateEnd=e+"-02",this.dateAreaStr=n+"-"+e}return t},t}(),N=e.Pa({encapsulation:0,styles:[[""]],data:{}});function G(t){return e.lb(0,[e.hb(402653184,1,{dataChart:0}),(t()(),e.Ra(1,0,null,null,2,"div",[["layout","row"],["layout-align","end center"],["style","margin-bottom: 2em;"]],null,null,null,null,null)),(t()(),e.Ra(2,0,null,null,1,"app-range-month",[],null,[[null,"datesChange"]],function(t,a,n){var o=!0,l=t.component;return"datesChange"===a&&(o=!1!==(l.dateRange=n)&&o),"datesChange"===a&&(l.setChartOption(),o=!1!==e.bb(t,11).searchData(!0)&&o),o},i.b,i.a)),e.Qa(3,638976,null,0,u.a,[c.a],{dates:[0,"dates"]},{datesChange:"datesChange"}),(t()(),e.Ra(4,0,null,null,1,"app-common-operation",[["title","\u533a\u57df\u5e97\u94fa\u4ea4\u6613\u989d\u5206\u5e03"]],null,[[null,"platformChange"]],function(t,a,n){var e=!0,o=t.component;return"platformChange"===a&&(e=!1!==(o.platform=n)&&e),"platformChange"===a&&(e=!1!==o.setChartOption()&&e),e},s.b,s.a)),e.Qa(5,114688,null,0,p.a,[h.a],{title:[0,"title"],noCategory:[1,"noCategory"],platform:[2,"platform"],noExportData:[3,"noExportData"],loading:[4,"loading"]},{platformChange:"platformChange"}),(t()(),e.Ra(6,0,null,null,1,"app-data-chart",[],null,null,null,d.b,d.a)),e.Qa(7,4440064,[[1,4],["dataChart",4]],0,g.a,[c.a],{height:[0,"height"]},null),(t()(),e.Ra(8,0,null,null,1,"app-common-operation",[],null,null,null,s.b,s.a)),e.Qa(9,114688,null,0,p.a,[h.a],{noCategory:[0,"noCategory"],noPlatform:[1,"noPlatform"]},null),(t()(),e.Ra(10,0,null,null,1,"app-data-table",[],null,null,null,f.b,f.a)),e.Qa(11,114688,[["table",4]],0,m.a,[],{columns:[0,"columns"],queryDataService:[1,"queryDataService"]},null)],function(t,a){var n=a.component;t(a,3,0,n.dateRange),t(a,5,0,"\u533a\u57df\u5e97\u94fa\u4ea4\u6613\u989d\u5206\u5e03",!0,n.platform,!0,n.loading),t(a,7,0,450),t(a,9,0,!0,!0),t(a,11,0,n.salesVolumeConfigs,n.getSalesVolumeTableDataFn)},null)}var K=e.Na("app-store-sales-distribution",I,function(t){return e.lb(0,[(t()(),e.Ra(0,0,null,null,1,"app-store-sales-distribution",[],null,null,null,G,N)),e.Qa(1,114688,null,0,I,[M.a],null,null)],function(t,a){t(a,1,0)},null)},{},{},[]),H=n("Ip0R"),X=n("gIcY"),J=n("t/Na"),U=n("d5Ni"),W=n("M2Lx"),_=n("tn8F"),$=n("eDkP"),tt=n("Fzqc"),at=n("4c35"),nt=n("dWZg"),et=n("qAlS"),ot=n("PCNd"),lt=n("ZYCi"),rt=function(){};n.d(a,"DistrictAnalysisModuleNgFactory",function(){return it});var it=e.Oa(o,[],function(t){return e.Ya([e.Za(512,e.j,e.Ca,[[8,[l.A,l.B,l.C,l.D,l.E,l.F,l.G,r.a,S,T,q,K]],[3,e.j],e.w]),e.Za(4608,H.o,H.n,[e.t,[2,H.A]]),e.Za(4608,X.d,X.d,[]),e.Za(4608,X.q,X.q,[]),e.Za(4608,J.l,J.r,[H.d,e.A,J.p]),e.Za(4608,J.s,J.s,[J.l,J.q]),e.Za(5120,J.a,function(t){return[t,new U.a]},[J.s]),e.Za(4608,J.o,J.o,[]),e.Za(6144,J.m,null,[J.o]),e.Za(4608,J.k,J.k,[J.m]),e.Za(6144,J.b,null,[J.k]),e.Za(4608,J.g,J.n,[J.b,e.q]),e.Za(4608,J.c,J.c,[J.g]),e.Za(4608,W.c,W.c,[]),e.Za(5120,_.Ad,_.Cd,[[3,_.Ad],_.Bd]),e.Za(4608,H.e,H.e,[e.t]),e.Za(5120,_.ac,_.zc,[[3,_.ac],_.pd,_.Ad,H.e]),e.Za(4608,$.d,$.d,[$.k,$.f,e.j,$.i,$.g,e.q,e.y,H.d,tt.b]),e.Za(5120,$.l,$.m,[$.d]),e.Za(5120,_.L,_.M,[H.d,[3,_.L]]),e.Za(4608,_.Y,_.Y,[]),e.Za(4608,_.Ta,_.Ta,[]),e.Za(4608,_.Zc,_.Zc,[$.d,e.q,e.j,e.g]),e.Za(4608,_.fd,_.fd,[$.d,e.q,e.j,e.g]),e.Za(4608,_.md,_.md,[[3,_.md]]),e.Za(4608,_.od,_.od,[$.d,_.Ad,_.md]),e.Za(1073742336,H.c,H.c,[]),e.Za(1073742336,X.o,X.o,[]),e.Za(1073742336,X.n,X.n,[]),e.Za(1073742336,X.f,X.f,[]),e.Za(1073742336,J.e,J.e,[]),e.Za(1073742336,J.d,J.d,[]),e.Za(1073742336,W.d,W.d,[]),e.Za(1073742336,_.e,_.e,[]),e.Za(1073742336,_.Fd,_.Fd,[]),e.Za(1073742336,_.Ed,_.Ed,[]),e.Za(1073742336,_.Hd,_.Hd,[]),e.Za(1073742336,tt.a,tt.a,[]),e.Za(1073742336,at.c,at.c,[]),e.Za(1073742336,nt.b,nt.b,[]),e.Za(1073742336,et.a,et.a,[]),e.Za(1073742336,$.h,$.h,[]),e.Za(1073742336,_.h,_.h,[]),e.Za(1073742336,_.ab,_.ab,[]),e.Za(1073742336,_.r,_.r,[]),e.Za(1073742336,_.w,_.w,[]),e.Za(1073742336,_.y,_.y,[]),e.Za(1073742336,_.H,_.H,[]),e.Za(1073742336,_.O,_.O,[]),e.Za(1073742336,_.J,_.J,[]),e.Za(1073742336,_.Q,_.Q,[]),e.Za(1073742336,_.S,_.S,[]),e.Za(1073742336,_.Z,_.Z,[]),e.Za(1073742336,_.Da,_.Da,[]),e.Za(1073742336,_.Fa,_.Fa,[]),e.Za(1073742336,_.Ia,_.Ia,[]),e.Za(1073742336,_.La,_.La,[]),e.Za(1073742336,_.Pa,_.Pa,[]),e.Za(1073742336,_.Ya,_.Ya,[]),e.Za(1073742336,_.Ra,_.Ra,[]),e.Za(1073742336,_.cb,_.cb,[]),e.Za(1073742336,_.eb,_.eb,[]),e.Za(1073742336,_.gb,_.gb,[]),e.Za(1073742336,_.ib,_.ib,[]),e.Za(1073742336,_.kb,_.kb,[]),e.Za(1073742336,_.mb,_.mb,[]),e.Za(1073742336,_.tb,_.tb,[]),e.Za(1073742336,_.yb,_.yb,[]),e.Za(1073742336,_.Bb,_.Bb,[]),e.Za(1073742336,_.Eb,_.Eb,[]),e.Za(1073742336,_.Ib,_.Ib,[]),e.Za(1073742336,_.Mb,_.Mb,[]),e.Za(1073742336,_.Ob,_.Ob,[]),e.Za(1073742336,_.Rb,_.Rb,[]),e.Za(1073742336,_.bc,_.bc,[]),e.Za(1073742336,_.Zb,_.Zb,[]),e.Za(1073742336,_.vc,_.vc,[]),e.Za(1073742336,_.xc,_.xc,[]),e.Za(1073742336,_.Gc,_.Gc,[]),e.Za(1073742336,_.Kc,_.Kc,[]),e.Za(1073742336,_.Oc,_.Oc,[]),e.Za(1073742336,_.Sc,_.Sc,[]),e.Za(1073742336,_.Uc,_.Uc,[]),e.Za(1073742336,_.ad,_.ad,[]),e.Za(1073742336,_.gd,_.gd,[]),e.Za(1073742336,_.id,_.id,[]),e.Za(1073742336,_.kd,_.kd,[]),e.Za(1073742336,_.qd,_.qd,[]),e.Za(1073742336,_.sd,_.sd,[]),e.Za(1073742336,_.ud,_.ud,[]),e.Za(1073742336,_.yd,_.yd,[]),e.Za(1073742336,_.b,_.b,[]),e.Za(1073742336,ot.a,ot.a,[]),e.Za(1073742336,lt.m,lt.m,[[2,lt.s],[2,lt.k]]),e.Za(1073742336,rt,rt,[]),e.Za(1073742336,o,o,[]),e.Za(256,J.p,"XSRF-TOKEN",[]),e.Za(256,J.q,"X-XSRF-TOKEN",[]),e.Za(256,_.Bd,!1,[]),e.Za(256,_.pd,void 0,[]),e.Za(256,_.Wc,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),e.Za(256,_.dd,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),e.Za(256,_.a,ot.b,[]),e.Za(1024,lt.i,function(){return[[{path:"",redirectTo:"quick-view"},{path:"quick-view",component:w},{path:"contrast",component:k},{path:"category",component:E},{path:"store-sales-distribution",component:I}]]},[])])})}}]);