(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1jmK":function(t,o,n){"use strict";n.d(o,"a",function(){return r});var e=n("CcnG"),i=n("t/Na"),r=function(){function t(t){this.http=t}return t.prototype.pagingCatView=function(t){return this.http.post("cat/listview",t).toPromise()},t.prototype.catView=function(t){return this.http.post("cat/list",t).toPromise()},t.prototype.catSubdivisionTree=function(t){return this.http.post("cat/tree",t).toPromise()},t.prototype.catWholeList=function(t){return this.http.post("cat/whole_list",t).toPromise()},t.ngInjectableDef=e.T({factory:function(){return new t(e.X(i.c))},token:t,providedIn:"root"}),t}()}}]);