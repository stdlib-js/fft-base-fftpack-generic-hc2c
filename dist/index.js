"use strict";var o=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var k=o(function(j,x){
var s=require('@stdlib/math-base-assert-is-even/dist'),w=require('@stdlib/math-base-special-floor/dist'),E=require('@stdlib/strided-base-reinterpret-complex/dist');function M(a,r,n,v,u,l,m){var i,q,e,t,p;if(a<=0)return u;for(i=E(u,0),q=l*2,e=m*2,t=w((a-1)/2),i[e]=r[v],i[e+1]=0,v+=n,e+=q,p=0;p<t;p++)i[e]=r[v],i[e+1]=r[v+n],v+=2*n,e+=q;return s(a)&&(i[e]=r[v],i[e+1]=0),u}x.exports=M
});var b=k();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
