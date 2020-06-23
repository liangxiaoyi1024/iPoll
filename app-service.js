	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'successMsg']])
Z([[7],[3,'isSuccess']])
Z([3,'success'])
Z([3,'view-page'])
Z([3,'item-header'])
Z([[2,'=='],[[6],[[7],[3,'article']],[3,'type']],[1,'topic']])
Z(z[5])
Z([3,'reply'])
Z([[7],[3,'replies']])
Z([3,'_id'])
Z([3,'view'])
Z([3,'item-text reply'])
Z([[6],[[7],[3,'reply']],[3,'_id']])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'link']])
Z([3,'navigateTo'])
Z([a,[3,'weui-cell weui-cell_access '],[[7],[3,'extClass']],[3,' '],[[7],[3,'outerClass']],[[2,'?:'],[[7],[3,'inForm']],[1,' weui-cell-inform'],[1,'']],[[2,'?:'],[[7],[3,'inline']],[1,''],[1,' .weui-cell_label-block']]])
Z([[2,'?:'],[[7],[3,'hover']],[1,'weui-cell_active'],[1,'']])
Z([[7],[3,'hasHeader']])
Z([a,[3,'weui-cell__hd '],[[7],[3,'iconClass']]])
Z([[7],[3,'icon']])
Z([3,'icon'])
Z([[7],[3,'inForm']])
Z([[7],[3,'title']])
Z([3,'title'])
Z(z[9])
Z(z[10])
Z([[7],[3,'hasBody']])
Z([3,'weui-cell__bd'])
Z([[7],[3,'value']])
Z([[7],[3,'hasFooter']])
Z([a,[3,'weui-cell__ft weui-cell__ft_in-access '],[[7],[3,'footerClass']]])
Z([[7],[3,'footer']])
Z([3,'footer'])
Z(z[1])
Z([a,[3,'weui-cell '],[[2,'?:'],[[2,'&&'],[[7],[3,'showError']],[[7],[3,'error']]],[1,'weui-cell_warn'],[1,'']],z[2][3],[[2,'?:'],[[7],[3,'inForm']],[1,'weui-cell-inform'],[1,'']],z[2][3],z[2][2],z[2][3],z[2][4]])
Z(z[3])
Z(z[4])
Z([a,z[5][1],z[5][2]])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[9])
Z(z[10])
Z(z[13])
Z([a,[3,'weui-cell__bd '],[[7],[3,'bodyClass']]])
Z(z[15])
Z(z[16])
Z([a,[3,'weui-cell__ft '],z[17][2]])
Z(z[18])
Z(z[19])
Z([[2,'&&'],[[7],[3,'showError']],[[7],[3,'error']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[7],[3,'extClass']],[3,' weui-cells__group '],[[7],[3,'outerClass']],[3,' '],[[7],[3,'childClass']]])
Z([[7],[3,'title']])
Z([[7],[3,'footer']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'multi']])
Z([3,'checkedChange'])
Z([[7],[3,'extClass']])
Z(z[1])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'checkedChange'])
Z([a,[3,'weui-check__label '],[[7],[3,'outerClass']],[3,' '],[[7],[3,'extClass']],[3,' '],[[2,'?:'],[[2,'!'],[[7],[3,'multi']]],[1,'weui-cell_radio'],[1,'weui-cell_checkbox']]])
Z([[2,'?:'],[[2,'!'],[[7],[3,'multi']]],[1,'weui-check__ft_in-radio'],[1,'']])
Z([[2,'!'],[[7],[3,'multi']]])
Z([[7],[3,'multi']])
Z([[2,'?:'],[[7],[3,'multi']],[1,'weui-check__hd_in-checkbox'],[1,'']])
Z(z[4])
Z(z[3])
Z([3,'footer'])
Z([[7],[3,'checked']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'mask']])
Z([[7],[3,'show']])
Z([3,'close'])
Z([a,[3,'weui-dialog__wrp '],[[7],[3,'extClass']]])
Z([3,'stopEvent'])
Z([3,'weui-dialog'])
Z([3,'title'])
Z([3,'weui-dialog__ft'])
Z([[2,'&&'],[[7],[3,'buttons']],[[6],[[7],[3,'buttons']],[3,'length']]])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'weui-msg '],[[7],[3,'extClass']]])
Z([3,'weui-msg__text-area'])
Z([[2,'!'],[[7],[3,'desc']]])
Z([3,'desc'])
Z([3,'extend'])
Z([3,'handle'])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'weui-search-bar '],[[7],[3,'extClass']]])
Z([[2,'>'],[[6],[[7],[3,'value']],[3,'length']],[1,0]])
Z([[2,'&&'],[[7],[3,'cancel']],[[7],[3,'searchState']]])
Z([[2,'&&'],[[7],[3,'searchState']],[[2,'>'],[[6],[[7],[3,'result']],[3,'length']],[1,0]]])
Z([a,[3,'searchbar-result  '],z[0][2]])
Z([[7],[3,'result']])
Z([3,'selectResult'])
Z([[7],[3,'index']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'topic'])
Z([[7],[3,'topics']])
Z([3,'_id'])
Z([3,'view'])
Z([3,'item item-text'])
Z([[6],[[7],[3,'topic']],[3,'_id']])
Z([[6],[[7],[3,'topic']],[3,'mode']])
Z([[2,'!'],[[7],[3,'showCount']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'weui-toptips '],[[7],[3,'className']],[3,' '],[[7],[3,'extClass']],[3,' '],[[2,'?:'],[[7],[3,'show']],[1,'weui-toptips_show'],[1,'']]])
Z([[7],[3,'msg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'error']])
Z(z[0])
Z([3,'error'])
Z([[7],[3,'topics']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'error']])
Z(z[0])
Z([3,'error'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'reply']])
Z([3,'onPostedReply'])
Z([[7],[3,'replies']])
Z([[7],[3,'roles']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'hasHistory']]])
Z([3,'false'])
Z([[7],[3,'topics']])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'topics']],[3,'length']],[1,0]])
Z([[7],[3,'topics']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'操作成功'])
Z([3,'success'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'successMsg']])
Z([[7],[3,'isSuccess']])
Z([3,'success'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'topic']])
Z([3,'onPostedReply'])
Z([[7],[3,'replies']])
Z([[7],[3,'roles']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/article/article.wxml','./components/cell/cell.wxml','./components/cells/cells.wxml','./components/checkbox-group/checkbox-group.wxml','./components/checkbox/checkbox.wxml','./components/dialog/dialog.wxml','./components/form/form.wxml','./components/loading/loading.wxml','./components/msg/msg.wxml','./components/searchbar/searchbar.wxml','./components/topic-list/topics.wxml','./components/toptips/toptips.wxml','./pages/about/about.wxml','./pages/common/error/error.wxml','./pages/common/inDev/index.wxml','./pages/home/home.wxml','./pages/login/login.wxml','./pages/replies/view/view.wxml','./pages/s360/p/a/index.wxml','./pages/s360/p/p/index.wxml','./pages/s360/t/a/index.wxml','./pages/s360/t/p/index.wxml','./pages/topics/edit/questions/edit.wxml','./pages/topics/history/history.wxml','./pages/topics/list/list.wxml','./pages/topics/new/pk/input.wxml','./pages/topics/new/questions/input.wxml','./pages/topics/new/success/success.wxml','./pages/topics/new/topicType/select.wxml','./pages/topics/share/share.wxml','./pages/topics/view/questions/view.wxml','./pages/topics/view/vote/vote.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'mp-toptips',['msg',0,'show',1,'type',1],[],e,s,gg)
_(r,oB)
var xC=_n('view')
_rz(z,xC,'class',3,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',4,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,5,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,6,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(xC,oD)
var hG=_v()
_(xC,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'view',['bindtap',10,'class',1,'data-id',2],[],oJ,cI,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,13,oJ,cI,gg)){eN.wxVkey=1
}
eN.wxXCkey=1
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,8,oH,e,s,gg,hG,'reply','index','_id')
_(r,xC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oP=_v()
_(r,oP)
if(_oz(z,0,e,s,gg)){oP.wxVkey=1
var xQ=_mz(z,'view',['bindtap',1,'class',1,'hoverClass',2],[],e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,4,e,s,gg)){oR.wxVkey=1
var hU=_n('view')
_rz(z,hU,'class',5,e,s,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,6,e,s,gg)){oV.wxVkey=1
}
else{oV.wxVkey=2
var oX=_n('slot')
_rz(z,oX,'name',7,e,s,gg)
_(oV,oX)
}
var cW=_v()
_(hU,cW)
if(_oz(z,8,e,s,gg)){cW.wxVkey=1
var lY=_v()
_(cW,lY)
if(_oz(z,9,e,s,gg)){lY.wxVkey=1
}
else{lY.wxVkey=2
var aZ=_n('slot')
_rz(z,aZ,'name',10,e,s,gg)
_(lY,aZ)
}
lY.wxXCkey=1
}
else{cW.wxVkey=2
var t1=_v()
_(cW,t1)
if(_oz(z,11,e,s,gg)){t1.wxVkey=1
}
else{t1.wxVkey=2
var e2=_n('slot')
_rz(z,e2,'name',12,e,s,gg)
_(t1,e2)
}
t1.wxXCkey=1
}
oV.wxXCkey=1
cW.wxXCkey=1
_(oR,hU)
}
var fS=_v()
_(xQ,fS)
if(_oz(z,13,e,s,gg)){fS.wxVkey=1
var b3=_n('view')
_rz(z,b3,'class',14,e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,15,e,s,gg)){o4.wxVkey=1
}
else{o4.wxVkey=2
var x5=_n('slot')
_(o4,x5)
}
o4.wxXCkey=1
_(fS,b3)
}
var cT=_v()
_(xQ,cT)
if(_oz(z,16,e,s,gg)){cT.wxVkey=1
var o6=_n('view')
_rz(z,o6,'class',17,e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,18,e,s,gg)){f7.wxVkey=1
}
else{f7.wxVkey=2
var c8=_n('slot')
_rz(z,c8,'name',19,e,s,gg)
_(f7,c8)
}
f7.wxXCkey=1
_(cT,o6)
}
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
_(oP,xQ)
}
else{oP.wxVkey=2
var h9=_mz(z,'view',['bindtap',20,'class',1,'hoverClass',2],[],e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,23,e,s,gg)){o0.wxVkey=1
var lCB=_n('view')
_rz(z,lCB,'class',24,e,s,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,25,e,s,gg)){aDB.wxVkey=1
}
else{aDB.wxVkey=2
var eFB=_n('slot')
_rz(z,eFB,'name',26,e,s,gg)
_(aDB,eFB)
}
var tEB=_v()
_(lCB,tEB)
if(_oz(z,27,e,s,gg)){tEB.wxVkey=1
var bGB=_v()
_(tEB,bGB)
if(_oz(z,28,e,s,gg)){bGB.wxVkey=1
}
else{bGB.wxVkey=2
var oHB=_n('slot')
_rz(z,oHB,'name',29,e,s,gg)
_(bGB,oHB)
}
bGB.wxXCkey=1
}
else{tEB.wxVkey=2
var xIB=_v()
_(tEB,xIB)
if(_oz(z,30,e,s,gg)){xIB.wxVkey=1
}
else{xIB.wxVkey=2
var oJB=_n('slot')
_rz(z,oJB,'name',31,e,s,gg)
_(xIB,oJB)
}
xIB.wxXCkey=1
}
aDB.wxXCkey=1
tEB.wxXCkey=1
_(o0,lCB)
}
var cAB=_v()
_(h9,cAB)
if(_oz(z,32,e,s,gg)){cAB.wxVkey=1
var fKB=_n('view')
_rz(z,fKB,'class',33,e,s,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,34,e,s,gg)){cLB.wxVkey=1
}
else{cLB.wxVkey=2
var hMB=_n('slot')
_(cLB,hMB)
}
cLB.wxXCkey=1
_(cAB,fKB)
}
var oBB=_v()
_(h9,oBB)
if(_oz(z,35,e,s,gg)){oBB.wxVkey=1
var oNB=_n('view')
_rz(z,oNB,'class',36,e,s,gg)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,37,e,s,gg)){cOB.wxVkey=1
}
else{cOB.wxVkey=2
var lQB=_n('slot')
_rz(z,lQB,'name',38,e,s,gg)
_(cOB,lQB)
}
var oPB=_v()
_(oNB,oPB)
if(_oz(z,39,e,s,gg)){oPB.wxVkey=1
}
cOB.wxXCkey=1
oPB.wxXCkey=1
_(oBB,oNB)
}
o0.wxXCkey=1
cAB.wxXCkey=1
oBB.wxXCkey=1
_(oP,h9)
}
oP.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var tSB=_n('view')
_rz(z,tSB,'class',0,e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,1,e,s,gg)){eTB.wxVkey=1
}
var oVB=_n('slot')
_(tSB,oVB)
var bUB=_v()
_(tSB,bUB)
if(_oz(z,2,e,s,gg)){bUB.wxVkey=1
}
else{bUB.wxVkey=2
var xWB=_n('slot')
_rz(z,xWB,'name',3,e,s,gg)
_(bUB,xWB)
}
eTB.wxXCkey=1
bUB.wxXCkey=1
_(r,tSB)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var fYB=_v()
_(r,fYB)
if(_oz(z,0,e,s,gg)){fYB.wxVkey=1
var cZB=_mz(z,'checkbox-group',['bindchange',1,'class',1],[],e,s,gg)
var h1B=_n('slot')
_(cZB,h1B)
_(fYB,cZB)
}
var o2B=_mz(z,'radio-group',['bindchange',3,'class',1],[],e,s,gg)
var c3B=_n('slot')
_(o2B,c3B)
_(r,o2B)
fYB.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var l5B=_mz(z,'mp-cell',['bindtap',0,'extClass',1,'footerClass',1,'hasFooter',2,'hasHeader',3,'iconClass',4],[],e,s,gg)
var a6B=_v()
_(l5B,a6B)
if(_oz(z,6,e,s,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(l5B,t7B)
if(_oz(z,7,e,s,gg)){t7B.wxVkey=1
var e8B=_n('view')
_rz(z,e8B,'slot',8,e,s,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,9,e,s,gg)){b9B.wxVkey=1
}
b9B.wxXCkey=1
_(t7B,e8B)
}
a6B.wxXCkey=1
t7B.wxXCkey=1
_(r,l5B)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var xAC=_v()
_(r,xAC)
if(_oz(z,0,e,s,gg)){xAC.wxVkey=1
}
var oBC=_v()
_(r,oBC)
if(_oz(z,1,e,s,gg)){oBC.wxVkey=1
var fCC=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
var cDC=_mz(z,'view',['catchtap',4,'class',1],[],e,s,gg)
var hEC=_n('slot')
_rz(z,hEC,'name',6,e,s,gg)
_(cDC,hEC)
var oFC=_n('slot')
_(cDC,oFC)
var cGC=_n('view')
_rz(z,cGC,'class',7,e,s,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,8,e,s,gg)){oHC.wxVkey=1
}
else{oHC.wxVkey=2
var lIC=_n('slot')
_rz(z,lIC,'name',9,e,s,gg)
_(oHC,lIC)
}
oHC.wxXCkey=1
_(cDC,cGC)
_(fCC,cDC)
_(oBC,fCC)
}
xAC.wxXCkey=1
oBC.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var tKC=_n('slot')
_(r,tKC)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oNC=_n('view')
_rz(z,oNC,'class',0,e,s,gg)
var xOC=_n('view')
_rz(z,xOC,'class',1,e,s,gg)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,2,e,s,gg)){oPC.wxVkey=1
var fQC=_n('slot')
_rz(z,fQC,'name',3,e,s,gg)
_(oPC,fQC)
}
var cRC=_n('slot')
_rz(z,cRC,'name',4,e,s,gg)
_(xOC,cRC)
oPC.wxXCkey=1
_(oNC,xOC)
var hSC=_n('slot')
_rz(z,hSC,'name',5,e,s,gg)
_(oNC,hSC)
var oTC=_n('slot')
_rz(z,oTC,'name',6,e,s,gg)
_(oNC,oTC)
_(r,oNC)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var lWC=_n('view')
_rz(z,lWC,'class',0,e,s,gg)
var aXC=_v()
_(lWC,aXC)
if(_oz(z,1,e,s,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(lWC,tYC)
if(_oz(z,2,e,s,gg)){tYC.wxVkey=1
}
aXC.wxXCkey=1
tYC.wxXCkey=1
_(r,lWC)
var oVC=_v()
_(r,oVC)
if(_oz(z,3,e,s,gg)){oVC.wxVkey=1
var eZC=_n('mp-cells')
_rz(z,eZC,'class',4,e,s,gg)
var b1C=_v()
_(eZC,b1C)
var o2C=function(o4C,x3C,f5C,gg){
var h7C=_mz(z,'mp-cell',['hover',-1,'bindtap',6,'data-index',1],[],o4C,x3C,gg)
_(f5C,h7C)
return f5C
}
b1C.wxXCkey=4
_2z(z,5,o2C,e,s,gg,b1C,'item','index','')
_(oVC,eZC)
}
oVC.wxXCkey=1
oVC.wxXCkey=3
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var c9C=_v()
_(r,c9C)
var o0C=function(aBD,lAD,tCD,gg){
var bED=_mz(z,'view',['bindtap',3,'class',1,'data-id',2,'data-mode',3],[],aBD,lAD,gg)
var oFD=_v()
_(bED,oFD)
if(_oz(z,7,aBD,lAD,gg)){oFD.wxVkey=1
}
oFD.wxXCkey=1
_(tCD,bED)
return tCD
}
c9C.wxXCkey=2
_2z(z,1,o0C,e,s,gg,c9C,'topic','index','_id')
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oHD=_n('view')
_rz(z,oHD,'class',0,e,s,gg)
var fID=_v()
_(oHD,fID)
if(_oz(z,1,e,s,gg)){fID.wxVkey=1
}
else{fID.wxVkey=2
var cJD=_n('slot')
_(fID,cJD)
}
fID.wxXCkey=1
_(r,oHD)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var lOD=_mz(z,'mp-toptips',['msg',0,'show',1,'type',1],[],e,s,gg)
_(r,lOD)
var aPD=_n('topic-list')
_rz(z,aPD,'topics',3,e,s,gg)
_(r,aPD)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var eRD=_mz(z,'mp-toptips',['msg',0,'show',1,'type',1],[],e,s,gg)
_(r,eRD)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oTD=_mz(z,'article',['article',0,'bind:postedReply',1,'replies',1,'roles',2],[],e,s,gg)
_(r,oTD)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var c1D=_v()
_(r,c1D)
if(_oz(z,0,e,s,gg)){c1D.wxVkey=1
}
var o2D=_mz(z,'topic-list',['showCount',1,'topics',1],[],e,s,gg)
_(r,o2D)
c1D.wxXCkey=1
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var a4D=_v()
_(r,a4D)
if(_oz(z,0,e,s,gg)){a4D.wxVkey=1
}
var t5D=_n('topic-list')
_rz(z,t5D,'topics',1,e,s,gg)
_(r,t5D)
a4D.wxXCkey=1
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var x9D=_mz(z,'mp-msg',['title',0,'type',1],[],e,s,gg)
_(r,x9D)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var cBE=_mz(z,'mp-toptips',['msg',0,'show',1,'type',1],[],e,s,gg)
_(r,cBE)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var oDE=_mz(z,'article',['article',0,'bind:postedReply',1,'replies',1,'roles',2],[],e,s,gg)
_(r,oDE)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['components/article/article.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/article/article.wxml'] = [$gwx, './components/article/article.wxml'];else __wxAppCode__['components/article/article.wxml'] = $gwx( './components/article/article.wxml' );
		__wxAppCode__['components/cell/cell.json'] = {"component":true,"usingComponents":{"mp-cells":"../cells/cells"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cell/cell.wxml'] = [$gwx, './components/cell/cell.wxml'];else __wxAppCode__['components/cell/cell.wxml'] = $gwx( './components/cell/cell.wxml' );
		__wxAppCode__['components/cells/cells.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cells/cells.wxml'] = [$gwx, './components/cells/cells.wxml'];else __wxAppCode__['components/cells/cells.wxml'] = $gwx( './components/cells/cells.wxml' );
		__wxAppCode__['components/checkbox-group/checkbox-group.json'] = {"component":true,"usingComponents":{"mp-cells":"../cells/cells"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/checkbox-group/checkbox-group.wxml'] = [$gwx, './components/checkbox-group/checkbox-group.wxml'];else __wxAppCode__['components/checkbox-group/checkbox-group.wxml'] = $gwx( './components/checkbox-group/checkbox-group.wxml' );
		__wxAppCode__['components/checkbox/checkbox.json'] = {"component":true,"usingComponents":{"mp-cell":"../cell/cell","mp-checkbox-group":"../checkbox-group/checkbox-group"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/checkbox/checkbox.wxml'] = [$gwx, './components/checkbox/checkbox.wxml'];else __wxAppCode__['components/checkbox/checkbox.wxml'] = $gwx( './components/checkbox/checkbox.wxml' );
		__wxAppCode__['components/dialog/dialog.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/dialog/dialog.wxml'] = [$gwx, './components/dialog/dialog.wxml'];else __wxAppCode__['components/dialog/dialog.wxml'] = $gwx( './components/dialog/dialog.wxml' );
		__wxAppCode__['components/form/form.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/form/form.wxml'] = [$gwx, './components/form/form.wxml'];else __wxAppCode__['components/form/form.wxml'] = $gwx( './components/form/form.wxml' );
		__wxAppCode__['components/loading/loading.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/loading/loading.wxml'] = [$gwx, './components/loading/loading.wxml'];else __wxAppCode__['components/loading/loading.wxml'] = $gwx( './components/loading/loading.wxml' );
		__wxAppCode__['components/msg/msg.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/msg/msg.wxml'] = [$gwx, './components/msg/msg.wxml'];else __wxAppCode__['components/msg/msg.wxml'] = $gwx( './components/msg/msg.wxml' );
		__wxAppCode__['components/searchbar/searchbar.json'] = {"component":true,"usingComponents":{"mp-cells":"../cells/cells","mp-cell":"../cell/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/searchbar/searchbar.wxml'] = [$gwx, './components/searchbar/searchbar.wxml'];else __wxAppCode__['components/searchbar/searchbar.wxml'] = $gwx( './components/searchbar/searchbar.wxml' );
		__wxAppCode__['components/topic-list/topics.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/topic-list/topics.wxml'] = [$gwx, './components/topic-list/topics.wxml'];else __wxAppCode__['components/topic-list/topics.wxml'] = $gwx( './components/topic-list/topics.wxml' );
		__wxAppCode__['components/toptips/toptips.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/toptips/toptips.wxml'] = [$gwx, './components/toptips/toptips.wxml'];else __wxAppCode__['components/toptips/toptips.wxml'] = $gwx( './components/toptips/toptips.wxml' );
		__wxAppCode__['pages/about/about.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/about/about.wxml'] = [$gwx, './pages/about/about.wxml'];else __wxAppCode__['pages/about/about.wxml'] = $gwx( './pages/about/about.wxml' );
		__wxAppCode__['pages/common/error/error.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/error/error.wxml'] = [$gwx, './pages/common/error/error.wxml'];else __wxAppCode__['pages/common/error/error.wxml'] = $gwx( './pages/common/error/error.wxml' );
		__wxAppCode__['pages/common/inDev/index.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/inDev/index.wxml'] = [$gwx, './pages/common/inDev/index.wxml'];else __wxAppCode__['pages/common/inDev/index.wxml'] = $gwx( './pages/common/inDev/index.wxml' );
		__wxAppCode__['pages/home/home.json'] = {"enablePullDownRefresh":true,"usingComponents":{"mp-searchbar":"../../components/searchbar/searchbar","topic-list":"../../components/topic-list/topics"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/home.wxml'] = [$gwx, './pages/home/home.wxml'];else __wxAppCode__['pages/home/home.wxml'] = $gwx( './pages/home/home.wxml' );
		__wxAppCode__['pages/login/login.json'] = {"navigationBarBackgroundColor":"#F6F6F6","usingComponents":{"mp-toptips":"../../components/toptips/toptips"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/login.wxml'] = [$gwx, './pages/login/login.wxml'];else __wxAppCode__['pages/login/login.wxml'] = $gwx( './pages/login/login.wxml' );
		__wxAppCode__['pages/replies/view/view.json'] = {"usingComponents":{"article":"../../../components/article/article"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/replies/view/view.wxml'] = [$gwx, './pages/replies/view/view.wxml'];else __wxAppCode__['pages/replies/view/view.wxml'] = $gwx( './pages/replies/view/view.wxml' );
		__wxAppCode__['pages/s360/p/a/index.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/s360/p/a/index.wxml'] = [$gwx, './pages/s360/p/a/index.wxml'];else __wxAppCode__['pages/s360/p/a/index.wxml'] = $gwx( './pages/s360/p/a/index.wxml' );
		__wxAppCode__['pages/s360/p/p/index.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/s360/p/p/index.wxml'] = [$gwx, './pages/s360/p/p/index.wxml'];else __wxAppCode__['pages/s360/p/p/index.wxml'] = $gwx( './pages/s360/p/p/index.wxml' );
		__wxAppCode__['pages/s360/t/a/index.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/s360/t/a/index.wxml'] = [$gwx, './pages/s360/t/a/index.wxml'];else __wxAppCode__['pages/s360/t/a/index.wxml'] = $gwx( './pages/s360/t/a/index.wxml' );
		__wxAppCode__['pages/s360/t/p/index.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/s360/t/p/index.wxml'] = [$gwx, './pages/s360/t/p/index.wxml'];else __wxAppCode__['pages/s360/t/p/index.wxml'] = $gwx( './pages/s360/t/p/index.wxml' );
		__wxAppCode__['pages/topics/edit/questions/edit.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/topics/edit/questions/edit.wxml'] = [$gwx, './pages/topics/edit/questions/edit.wxml'];else __wxAppCode__['pages/topics/edit/questions/edit.wxml'] = $gwx( './pages/topics/edit/questions/edit.wxml' );
		__wxAppCode__['pages/topics/history/history.json'] = {"usingComponents":{"topic-list":"../../../components/topic-list/topics"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/topics/history/history.wxml'] = [$gwx, './pages/topics/history/history.wxml'];else __wxAppCode__['pages/topics/history/history.wxml'] = $gwx( './pages/topics/history/history.wxml' );
		__wxAppCode__['pages/topics/list/list.json'] = {"usingComponents":{"topic-list":"../../../components/topic-list/topics"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/topics/list/list.wxml'] = [$gwx, './pages/topics/list/list.wxml'];else __wxAppCode__['pages/topics/list/list.wxml'] = $gwx( './pages/topics/list/list.wxml' );
		__wxAppCode__['pages/topics/new/pk/input.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/topics/new/pk/input.wxml'] = [$gwx, './pages/topics/new/pk/input.wxml'];else __wxAppCode__['pages/topics/new/pk/input.wxml'] = $gwx( './pages/topics/new/pk/input.wxml' );
		__wxAppCode__['pages/topics/new/questions/input.json'] = {"usingComponents":{"mp-dialog":"../../../../components/dialog/dialog"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/topics/new/questions/input.wxml'] = [$gwx, './pages/topics/new/questions/input.wxml'];else __wxAppCode__['pages/topics/new/questions/input.wxml'] = $gwx( './pages/topics/new/questions/input.wxml' );
		__wxAppCode__['pages/topics/new/success/success.json'] = {"usingComponents":{"mp-msg":"../../../../components/msg/msg"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/topics/new/success/success.wxml'] = [$gwx, './pages/topics/new/success/success.wxml'];else __wxAppCode__['pages/topics/new/success/success.wxml'] = $gwx( './pages/topics/new/success/success.wxml' );
		__wxAppCode__['pages/topics/new/topicType/select.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/topics/new/topicType/select.wxml'] = [$gwx, './pages/topics/new/topicType/select.wxml'];else __wxAppCode__['pages/topics/new/topicType/select.wxml'] = $gwx( './pages/topics/new/topicType/select.wxml' );
		__wxAppCode__['pages/topics/share/share.json'] = {"usingComponents":{"mp-toptips":"../../../components/toptips/toptips"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/topics/share/share.wxml'] = [$gwx, './pages/topics/share/share.wxml'];else __wxAppCode__['pages/topics/share/share.wxml'] = $gwx( './pages/topics/share/share.wxml' );
		__wxAppCode__['pages/topics/view/questions/view.json'] = {"enablePullDownRefresh":true,"usingComponents":{"mp-toptips":"../../../../components/toptips/toptips","article":"../../../../components/article/article"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/topics/view/questions/view.wxml'] = [$gwx, './pages/topics/view/questions/view.wxml'];else __wxAppCode__['pages/topics/view/questions/view.wxml'] = $gwx( './pages/topics/view/questions/view.wxml' );
		__wxAppCode__['pages/topics/view/vote/vote.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/topics/view/vote/vote.wxml'] = [$gwx, './pages/topics/view/vote/vote.wxml'];else __wxAppCode__['pages/topics/view/vote/vote.wxml'] = $gwx( './pages/topics/view/vote/vote.wxml' );
		__wxAppCode__['pages/user/user.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/user.wxml'] = [$gwx, './pages/user/user.wxml'];else __wxAppCode__['pages/user/user.wxml'] = $gwx( './pages/user/user.wxml' );
	
	define("modules/models.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var i={anyone:0,identifiableOnly:1},t={anyone:0,participantOnly:1},l={questionnaire:1,pk:2},e={text:1,singleChoice:2,mutipleChoices:3};module.exports={Topic:function(){this.title=null,this.summary=null,this.reply_visibility=0,this.participant_role=0,this.effective=null,this.expiry=null,this.follow_count=0,this.view_count=0,this.reply_count=0,this.mode=0,this.author=null,this.questions=null},Reply:function(){this.article_id=null,this.type=null,this.author=null,this.answers=null,this.reply_count=0},ParticipantRoles:i,ReplyVisibilities:t,TopicModes:l,QuestionTypes:e}; 
 			}); 
		define("modules/pageCommons.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";module.exports.login=function(t){if(getApp().globalData.stub)return!1;if(getApp().globalData.user)return!0;var o="/pages/login/login?redirect=/"+t.route,r=t.options.id;return r||(r=t.options.scene),r&&(o=o+"&topicId="+r),wx.redirectTo({url:o}),!1},module.exports.setHistory=function(t){history=getApp().globalData.history;var o=!1;history.forEach(function(r){if(t._id==r._id)return o=!0,!1}),o||(history.unshift(t),wx.setStorageSync("history",history))}; 
 			}); 
		define("modules/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e?getApp().globalData.user.anonymous.jwt:getApp().globalData.user.identifiable.jwt}module.exports.getRes=function(t,o){var n=e(!(arguments.length>2&&void 0!==arguments[2])||arguments[2]);return wx.showLoading({title:"loading"}),wx.cloud.callFunction({name:"mpapi",data:{resource:t,method:"GET",parameters:o,jwt:n}}).then(function(e){if(wx.hideLoading(),"401"!=e.result.StatusCode)return e;wx.reLaunch({url:"/pages/common/error/error?errMsg=Authentication Failed!"})}).catch(function(e){wx.hideLoading(),console.error(e)})},module.exports.postRes=function(t,o,n,r){var a=e();return wx.showLoading({title:"loading"}),wx.cloud.callFunction({name:"mpapi",data:{resource:t,method:"POST",parameters:o,jwt:a,body:n}}).then(function(e){return wx.hideLoading(),e}).catch(function(e){wx.hideLoading(),console.error(e)})}; 
 			}); 
		define("modules/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e,t){var r={"M+":e.getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in r)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[n]:("00"+r[n]).substr((""+r[n]).length)));return t}function t(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n>=1&&n<=126||65376<=n&&n<=65439?t++:t+=2}return t}function r(e,t){for(var r=[],n=0,u=0;n<t&&u<e.length;){var o=e.substring(u,u+1),a=e.charCodeAt(u);r.push(o),u++,a>=1&&a<=126||65376<=a&&a<=65439?n++:n+=2}return r.join("")}module.exports.formatDate=function(t){return e(new Date(t),"yyyy/MM/dd HH:mm:ss")},module.exports.reduceString=function(e,n){return t(e)>n?r(e,n-2)+"...":e},module.exports.sortByCreatedDate=function(e){return e.sort(function(e,t){var r=new Date(e.created_date).getTime(),n=new Date(t.created_date).getTime();return r>n?-1:n>r?1:0})},module.exports.getAnonymousName=function(){return getApp().globalData.user.anonymous.jwt.aud},module.exports.getRealName=function(){return getApp().globalData.user.identifiable.jwt.aud},module.exports.isChinese=function(e){return!!/.*[\u4e00-\u9fa5]+.*$/.test(e)},module.exports.isEmpty=function(e){return!/\s\S+|S+\s|\S/.test(e)}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";App({globalData:{stub:!1,user:"",history:[]},onLaunch:function(){wx.cloud?wx.cloud.init({env:"release-n94aw",traceUser:!0}):console.error("请使用 2.2.3 或以上的基础库以使用云能力");var t=wx.getStorageSync("history");t&&(this.globalData.history=t);var a=wx.getStorageSync("user");a&&(this.globalData.user=a)}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/article/article';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/article/article.js';	define("components/article/article.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../modules/request.js"),t=require("../../modules/utils.js"),a=require("../../modules/models.js").Reply;Component({properties:{article:{type:Object,observer:function(e,a){if(e){var i=e;i.created_date&&(i.created_date=t.formatDate(i.created_date)),this.setData({article:i})}}},roles:Array,replies:{type:Array,observer:function(e,a){if(e){var i=e;i.forEach(function(e){e.created_date=t.formatDate(e.created_date)}),this.setData({replies:i})}}}},data:{isSuccess:!1,disableSubmit:!1,successMsg:"Replied successfully!",role_index:0},methods:{rolePickerChange:function(e){this.setData({role_index:parseInt(e.detail.value)})},clickSubmit:function(e){var a=this;this.setData({disableSubmit:!0}),t.isEmpty(e.detail.value.myReply)?wx.showModal({title:"Validation",content:"Plesae input reply",confirmText:"Confirm",cancelText:"Cancel",showCancel:!1,success:function(e){a.setData({disableSubmit:!1})}}):wx.showModal({title:"Confirmation",content:"Submit this reply?",confirmText:"Confirm",cancelText:"Cancel",success:function(t){t.confirm?a.submitRely(e):t.cancel&&a.setData({disableSubmit:!1})}})},submitRely:function(t){var i=this,s=new a;s.article_id=this.data.article._id,s.type=this.data.article.type,s.author=this.data.roles[this.data.role_index].id,s.answers=[{seq:1,content:t.detail.value.myReply}],console.log(s),e.postRes("replies",{},s,!1).then(function(e){console.log(e),i.setData({isSuccess:!0}),i.setData({replyContent:""}),i.setData({disableSubmit:!1}),i.triggerEvent("postedReply",{},{})})},view:function(e){"topic"==this.data.article.type&&wx.navigateTo({url:"/pages/replies/view/view?participant_role="+this.data.article.participant_role+"&id="+e.currentTarget.dataset.id})},share:function(e){var t=e.currentTarget.dataset.id;wx.navigateTo({url:"/pages/topics/share/share?id="+t})}}}); 
 			}); 	require("components/article/article.js");
 		__wxRoute = 'components/cell/cell';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/cell/cell.js';	define("components/cell/cell.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(t){function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var n={};return o.m=t,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===(void 0===t?"undefined":e(t))&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var l in t)o.d(r,l,function(e){return t[e]}.bind(null,l));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=9)}({9:function(e,t,o){Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{hover:{type:Boolean,value:!1},link:{type:Boolean,value:!1},extClass:{type:String,value:""},iconClass:{type:String,value:""},bodyClass:{type:String,value:""},icon:{type:String,value:""},title:{type:String,value:""},value:{type:String,value:""},showError:{type:Boolean,value:!1},prop:{type:String,value:""},url:{type:String,value:""},footerClass:{type:String,value:""},footer:{type:String,value:""},inline:{type:Boolean,value:!0},hasHeader:{type:Boolean,value:!0},hasFooter:{type:Boolean,value:!0},hasBody:{type:Boolean,value:!0}},relations:{"../form/form":{type:"ancestor"},"../cells/cells":{type:"ancestor"}},data:{inForm:!1},methods:{setError:function(e){this.setData({error:e||!1})},setInForm:function(){this.setData({inForm:!0})},setOuterClass:function(e){this.setData({outerClass:e})},navigateTo:function(){var e=this,t=this.data;t.url&&t.link&&wx.navigateTo({url:t.url,success:function(t){e.triggerEvent("navigatesuccess",t,{})},fail:function(t){e.triggerEvent("navigateerror",t,{})}})}}})}}); 
 			}); 	require("components/cell/cell.js");
 		__wxRoute = 'components/cells/cells';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/cells/cells.js';	define("components/cells/cells.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var n={};return o.m=e,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)o.d(r,u,function(t){return e[t]}.bind(null,u));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}({8:function(t,e,o){Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{title:{type:String,value:""},extClass:{type:String,value:""},footer:{type:String,value:""}},data:{firstItem:null,checkboxCount:0,checkboxIsMulti:!1,outerClass:"",childClass:""},relations:{"../cell/cell":{type:"descendant",linked:function(t){this.data.firstItem||(this.data.firstItem=t),t!==this.data.firstItem&&t.setOuterClass("weui-cell_wxss")}},"../form-page/form-page":{type:"ancestor"},"../checkbox-group/checkbox-group":{type:"descendant",linked:function(t){this.setData({checkboxCount:this.data.checkboxCount+1,checkboxIsMulti:t.data.multi})},unlinked:function(t){this.setData({checkboxCount:this.data.checkboxCount-1,checkboxIsMulti:t.data.multi})}}},methods:{setCellMulti:function(t){this.setData({checkboxIsMulti:t})},setCellsClass:function(t){this.setData({childClass:t})},setOuterClass:function(t){this.setData({outerClass:t})}}})}}); 
 			}); 	require("components/cells/cells.js");
 		__wxRoute = 'components/checkbox-group/checkbox-group';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/checkbox-group/checkbox-group.js';	define("components/checkbox-group/checkbox-group.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var a={};return n.m=e,n.c=a,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=23)}({23:function(t,e,n){Component({properties:{multi:{type:Boolean,value:!0,observer:"_multiChange"},extClass:{type:String,value:""},prop:{type:String,value:""}},data:{targetList:[],parentCell:null},relations:{"../checkbox/checkbox":{type:"descendant",linked:function(t){this.data.targetList.push(t),t.setMulti(this.data.multi),this.data.firstItem||(this.data.firstItem=t),t!==this.data.firstItem&&t.setOuterClass("weui-cell_wxss")},unlinked:function(t){var e=-1;this.data.targetList.forEach(function(n,a){n===t&&(e=a)}),this.data.targetList.splice(e,1),this.data.targetList||(this.data.firstItem=null)}},"../form/form":{type:"ancestor"},"../cells/cells":{type:"ancestor",linked:function(t){this.data.parentCell||(this.data.parentCell=t),this.setParentCellsClass()},unlinked:function(t){this.data.parentCell=null}}},methods:{checkedChange:function(t,e){if(console.log("checked change",t),this.data.multi){var n=[];this.data.targetList.forEach(function(t){t.data.checked&&n.push(t.data.value)}),this.triggerEvent("change",{value:n})}else{var a="";this.data.targetList.forEach(function(t){t===e?a=t.data.value:t.setData({checked:!1})}),this.triggerEvent("change",{value:a},{})}},setParentCellsClass:function(){var t=this.data.multi?"weui-cells_checkbox":"";this.data.parentCell&&this.data.parentCell.setCellsClass(t)},_multiChange:function(t){return this.data.targetList.forEach(function(e){e.setMulti(t)}),this.data.parentCell&&this.data.parentCell.setCellMulti(t),t}}})}}); 
 			}); 	require("components/checkbox-group/checkbox-group.js");
 		__wxRoute = 'components/checkbox/checkbox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/checkbox/checkbox.js';	define("components/checkbox/checkbox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var o={};return n.m=e,n.c=o,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=24)}({24:function(t,e,n){Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{multi:{type:Boolean,value:!0},checked:{type:Boolean,value:!1},value:{type:String,value:""},label:{type:String,value:"label"},extClass:{type:String,value:""}},data:{},relations:{"../checkbox-group/checkbox-group":{type:"ancestor",linked:function(t){this.data.group=t},unlinked:function(){this.data.group=null}}},methods:{setMulti:function(t){this.setData({multi:t})},setOuterClass:function(t){this.setData({outerClass:t})},checkedChange:function(t){if(this.data.multi){var e=!this.data.checked;this.setData({checked:e}),this.data.group&&this.data.group.checkedChange(e,this)}else{var n=this.data.checked;if(n)return;this.setData({checked:!0}),this.data.group&&this.data.group.checkedChange(n,this)}this.triggerEvent("change",{value:this.data.value,checked:this.data.checked})}}})}}); 
 			}); 	require("components/checkbox/checkbox.js");
 		__wxRoute = 'components/dialog/dialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/dialog/dialog.js';	define("components/dialog/dialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var n={};return o.m=e,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=20)}({20:function(t,e,o){Component({options:{multipleSlots:!0,addGlobalClass:!0},properties:{title:{type:String,value:""},extClass:{type:String,value:""},maskClosable:{type:Boolean,value:!0},mask:{type:Boolean,value:!0},show:{type:Boolean,value:!1,observer:"_showChange"},buttons:{type:Array,value:[]}},data:{innerShow:!1},ready:function(){var t=this.data.buttons,e=t.length;t.forEach(function(t,o){t.className=1===e?"weui-dialog__btn_primary":0===o?"weui-dialog__btn_default":"weui-dialog__btn_primary"}),this.setData({buttons:t})},methods:{buttonTap:function(t){var e=t.currentTarget.dataset.index;this.triggerEvent("buttontap",{index:e,item:this.data.buttons[e]},{})},close:function(){this.data.maskClosable&&(this.setData({show:!1}),this.triggerEvent("close",{},{}))},stopEvent:function(){}}})}}); 
 			}); 	require("components/dialog/dialog.js");
 		__wxRoute = 'components/form/form';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/form/form.js';	define("components/form/form.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(r){function t(e){if(n[e])return n[e].exports;var u=n[e]={i:e,l:!1,exports:{}};return r[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=r,t.c=n,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(r,n){if(1&n&&(r=t(r)),8&n)return r;if(4&n&&"object"===(void 0===r?"undefined":e(r))&&r&&r.__esModule)return r;var u=Object.create(null);if(t.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var i in r)t.d(u,i,function(e){return r[e]}.bind(null,i));return u},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=4)}([function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.diff=function(e,r){if(!e&&r||e&&!r)return!0;for(var t in r)if(e[t]!==r[t])return!0;for(var n in e)if(e[n]!==r[n])return!0;return!1},r.diffObject=function(e,r){if(!e&&r)return r;if(!r&&e)return e;var t={},n=!1;for(var u in r)e[u]!==r[u]&&(n=!0,t[u]=r[u]);for(var i in e)e[i]!==r[i]&&(n=!0,t[i]=r[i]);return n?t:null}},,,,function(e,r,t){function n(e){e.data.prop&&(this.data.formItems[e.data.prop]=e),e.setInForm&&e.setInForm(),this.data.firstItem||(this.data.firstItem=e),this.data.firstItem}function u(e){e.data.prop&&delete this.data.formItems[e.data.prop]}Object.defineProperty(r,"__esModule",{value:!0});var i=t(5),a=t(0);Component({properties:{models:{type:Object,value:{},observer:"_modelChange"},rules:{type:Array,value:[],observer:"_rulesChange"},extClass:{type:String,value:""}},data:{errors:{},formItems:{},firstItem:null},relations:{"../cell/cell":{type:"descendant",linked:n,unlinked:u},"../checkbox-group/checkbox-group":{type:"descendant",linked:n,unlinked:u}},attached:function(){this.initRules(),this.formValidator=new i.default(this.data.models,this.data.newRules)},methods:{initRules:function(e){var r={};return(e||this.data.rules).forEach(function(e){e.name&&e.rules&&(r[e.name]=e.rules||[])}),this.setData({newRules:r}),r},_modelChange:function(e,r,t){var n=this;if(!this.isInit)return this.isInit=!0,e;this.formValidator.setModel(e),this.isInit=!0;var u=a.diffObject(r,e);return u&&function(){var e=!0,r=[],t={};for(var i in u)!function(i){n.formValidator.validateField(i,u[i],function(n,u){u&&u[i]&&(r.push(u[i]),t[i]=u[i]),e=n})}(i);n._showErrors(u,t),n.triggerEvent(e?"success":"fail",e?{trigger:"change"}:{errors:r,trigger:"change"})}(),e},_rulesChange:function(e){var r=this.initRules(e);return this.formValidator&&this.formValidator.setRules(r),e},_showAllErrors:function(e){for(var r in this.data.newRules)this._showError(r,e&&e[r])},_showErrors:function(e,r){for(var t in e)this._showError(t,r&&r[t])},_showError:function(e,r){var t=this.data.formItems[e];t&&t.data.showError&&t.setError(r)},validate:function(e){var r=this;return this.formValidator.validate(function(t,n){r._showAllErrors(n);var u=r.handleErrors(n);r.triggerEvent(t?"success":"fail",t?{trigger:"validate"}:{errors:u,trigger:"validate"}),e&&e(t,u)})},validateField:function(e,r){var t=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]};return this.formValidator.validateField(e,r,function(r,u){t._showError(e,u);var i=t.handleErrors(u);t.triggerEvent(r?"success":"fail",r?{trigger:"validate"}:{errors:i,trigger:"validate"}),n&&n(r,i)})},handleErrors:function(e){if(e){var r=[];return this.data.rules.forEach(function(t){e[t.name]&&(e[t.name].name=t.name,r.push(e[t.name]))}),r}return e},addMethod:function(e,r){return this.formValidator.addMethod(e,r)}}}),r.default=i.default},function(e,r,t){function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var u=t(6),i=t(0),a=Object.prototype.toString,o=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i="";for(var a in e)if("name"!==a&&"message"!==a){var o=void 0!==e.validator?e.validator:u.default[a];if("function"==typeof o&&(i=o(e,r,t,n)))return i}return i},F=function(){function e(r,t){n(this,e),this.models=r,this.rules=t,this.errors={}}return e.prototype.validate=function(e){var r=this;return new Promise(function(t){var n=0,u=0,a=r.errors,o=r.models,F=!1;for(var s in r.rules)!function(e){!function(t){var s=a[t];r._innerValidateField(e,o[t],function(e,r){n++,e||u++,i.diff(s,r)&&(a[t]=r,F=!0)})}(e)}(s);Object.keys(a).forEach(function(e){a[e]||delete a[e]}),t({isValid:!u,errors:u?a:void 0}),e&&e(!u,u?a:void 0)})},e.prototype.validateField=function(e,r){var t=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]};return new Promise(function(u){t._innerValidateField(e,r,function(r,a){var o={};o[e]=a,u({valid:r,error:r?void 0:a}),n(r,r?void 0:o);var F=t.errors[e];i.diff(F,a)&&(a||delete t.errors[e],t.errors[e]=a)})})},e.prototype._innerValidateField=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]},n=this.rules[e];if(!n)return console.warn("[form-validtor] rule name "+e+" not exists."),void t(!0);"function"==typeof r&&(t=r,r=void 0);var u=!1,i=this.models;if("[object Array]"===a.call(n))n.forEach(function(n){n.name=e;var a=o(n,r||i[e],n.param,i);a&&!u&&(u=!0,t(!1,a?{message:a,rule:n}:void 0))}),u||t(!u);else{var F=n;F.name=e;var s=o(F,r||i[e],F.param,i),f=s?{message:s,rule:F}:void 0;s&&(u=!0),t(!u,f)}},e.prototype.addMethod=function(e,r){u.default[e]=r},e.prototype.setModel=function(e){this.models=e},e.prototype.setRules=function(e){this.rules=e},e}();r.default=F},function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=t(7),u={required:"%s必填",minlength:"长度最少为%s",maxlength:"长度最大为%s",rangelength:"长度在%s和%s之间",bytelength:"最多只能输入%s个字",min:"值最小为%s",max:"值最大为%s",range:"值的范围为%s和%s之间",mobile:"请输入正确的手机号",email:"请输入正确的电子邮件",url:"请输入正确的URL地址",equalTo:"值和字段%s不相等"};r.default={required:function(e,r,t,i){if(!1!==e.required)return r?void 0:n.sprintf(e.message||u.required,e.name)},minlength:function(e,r){var t=e.minlength;if((r=r||"").length<t)return n.sprintf(e.message||u.minlength,t)},maxlength:function(e,r){var t=e.maxlength;if((r=r||"").length>t)return n.sprintf(e.message||u.maxlength,t)},rangelength:function(e,r){var t=e.range;if((r=r||"").length>t[1]||r.length<t[0])return n.sprintf(e.message||u.rangelength,t[0],t[1])},min:function(e,r){var t=e.min;if(r<t)return n.sprintf(e.message||u.min,t)},max:function(e,r){var t=e.max;if(r>t)return n.sprintf(e.message||u.max,t)},range:function(e,r){var t=e.range;if(r<t[0]||r>t[1])return n.sprintf(e.message||u.range,t[0],t[1])},mobile:function(e,r){if(!1!==e.mobile)return 11!==(r=r||"").length?n.sprintf(e.message||u.mobile):void 0},email:function(e,r){if(!1!==e.email)return/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(r)?void 0:n.sprintf(e.message||u.email)},url:function(e,r){if(!1!==e.url)return/^(https?|s?ftp|weixin):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(r)?void 0:e.message||u.url},equalTo:function(e,r,t,i){var a=e.equalTo;if(r!==i[a])return n.sprintf(e.message||u.equalTo,e.name)},bytelength:function(e,r,t,i){if(t=e.param,r.replace(/[^\x00-\xff]/g,"**").length>t)return n.sprintf(e.message||u.bytelength,t)}}},function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.sprintf=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=void 0,u=r[0]||"",i=void 0,a=void 0,o=r.length-1;if(o<1)return u;for(n=1;n<o+1;)u=u.replace(/%s/,"{#"+n+"#}"),n++;for(u.replace("%s",""),n=1;;){if(void 0===(i=r[n]))break;a=new RegExp("{#"+n+"#}","g"),u=u.replace(a,i),n++}return u}}]); 
 			}); 	require("components/form/form.js");
 		__wxRoute = 'components/loading/loading';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/loading/loading.js';	define("components/loading/loading.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var o={};return n.m=e,n.c=o,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}({14:function(t,e,n){Component({options:{addGlobalClass:!0},properties:{extClass:{type:String,value:""},show:{type:Boolean,value:!0,observer:function(t){this._computedStyle(t,this.data.animated)}},animated:{type:Boolean,value:!1,observer:function(t){this._computedStyle(this.data.show,t)}},duration:{type:Number,value:350},type:{type:String,value:"dot-gray"},tips:{type:String,value:"加载中"}},data:{animationData:{},animationInstance:{},displayStyle:"none"},methods:{_computedStyle:function(t,e){t?this.setData({displayStyle:""}):e?this._startAnimation():this.setData({displayStyle:"none"})},_startAnimation:function(){var t=this;setTimeout(function(){var e=t.data.animationInstance;e.height(0).step(),t.setData({animationData:e.export()})},0)}},lifetimes:{attached:function(){var t=this.data,e=wx.createAnimation({duration:t.duration,timingFunction:"ease"});this.setData({animationInstance:e}),this._computedStyle(this.data.show,this.data.animated)}}})}}); 
 			}); 	require("components/loading/loading.js");
 		__wxRoute = 'components/msg/msg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/msg/msg.js';	define("components/msg/msg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=t,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"===(void 0===t?"undefined":e(t))&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var u in t)n.d(o,u,function(e){return t[e]}.bind(null,u));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}({19:function(e,t,n){Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{title:{type:String,value:""},type:{type:String,value:""},icon:{type:String,value:""},desc:{type:String,value:""},extClass:{type:String,value:""},size:{type:Number,value:64}},data:{}})}}); 
 			}); 	require("components/msg/msg.js");
 		__wxRoute = 'components/searchbar/searchbar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/searchbar/searchbar.js';	define("components/searchbar/searchbar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={};return n.m=e,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=25)}({25:function(t,e,n){Component({options:{addGlobalClass:!0},properties:{extClass:{type:String,value:""},focus:{type:Boolean,value:!1},placeholder:{type:String,value:"搜索"},value:{type:String,value:""},search:{type:Function,value:null},throttle:{type:Number,value:500},cancelText:{type:String,value:"取消"},cancel:{type:Boolean,value:!0}},data:{result:[]},lastSearch:Date.now(),lifetimes:{attached:function(){this.data.focus&&this.setData({searchState:!0})}},methods:{clearInput:function(){this.setData({value:""}),this.triggerEvent("clear")},inputFocus:function(t){this.triggerEvent("focus",t.detail)},inputBlur:function(t){this.setData({focus:!1}),this.triggerEvent("blur",t.detail)},showInput:function(){this.setData({focus:!0,searchState:!0})},hideInput:function(){this.setData({searchState:!1})},inputChange:function(t){var e=this;this.setData({value:t.detail.value}),this.triggerEvent("input",t.detail),Date.now()-this.lastSearch<this.data.throttle||"function"==typeof this.data.search&&(this.lastSearch=Date.now(),this.timerId=setTimeout(function(){e.data.search(t.detail.value).then(function(t){e.setData({result:t})}).catch(function(t){console.log("search error",t)})},this.data.throttle))},selectResult:function(t){var e=t.currentTarget.dataset.index,n=this.data.result[e];this.triggerEvent("selectresult",{index:e,item:n})}}})}}); 
 			}); 	require("components/searchbar/searchbar.js");
 		__wxRoute = 'components/topic-list/topics';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/topic-list/topics.js';	define("components/topic-list/topics.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../modules/models.js").TopicModes,t=require("../../modules/utils.js");Component({properties:{showCount:{type:Boolean},topics:{type:Array,observer:function(e,o){if(e){var r=e;r.forEach(function(e){e.localed_created_date=t.formatDate(e.created_date),e.shortTitle=t.reduceString(e.title,42),e.questions[0].shortContent=t.reduceString(e.questions[0].content,112)}),this.setData({topics:r})}}}},data:{showCount:!0},methods:{view:function(t){t.currentTarget.dataset.mode==e.questionnaire&&wx.navigateTo({url:"/pages/topics/view/questions/view?id="+t.currentTarget.dataset.id})}}}); 
 			}); 	require("components/topic-list/topics.js");
 		__wxRoute = 'components/toptips/toptips';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/toptips/toptips.js';	define("components/toptips/toptips.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var n={};return o.m=e,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=13)}({13:function(t,e,o){Component({options:{addGlobalClass:!0},properties:{type:{type:String,value:"error",observer:"_typeChange"},show:{type:Boolean,value:!1,observer:"_showChange"},msg:{type:String,value:""},delay:{type:Number,value:2e3},extClass:{type:String,value:""}},data:{typeClassMap:{warn:"weui-toptips_warn",info:"weui-toptips_info",success:"weui-toptips_success",error:"weui-toptips_error"}},attached:function(){var t=this.data;this.setData({className:t.typeClassMap[t.type]||""})},methods:{_typeChange:function(t){return this.setData({className:this.data.typeClassMap[t]||""}),t},_showChange:function(t){this._showToptips(t)},_showToptips:function(t){var e=this;t&&this.data.delay&&setTimeout(function(){e.setData({show:!1},function(){e.triggerEvent("hide",{},{})})},this.data.delay),this.setData({show:t})}}})}}); 
 			}); 	require("components/toptips/toptips.js");
 		__wxRoute = 'pages/home/home';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/home/home.js';	define("pages/home/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../modules/pageCommons.js"),o=require("../../modules/request.js");Page({data:{topics:[],error:""},onLoad:function(o){e.login(this)&&this.loadPage()},loadPage:function(){var e=this,t={sort:"-replyCount"};o.getRes("topics",t,!0).then(function(o){var t=o.result.data;e.setData({topics:t}),wx.stopPullDownRefresh()})},clickScanButton:function(e){var o=this;wx.scanCode({onlyFromCamera:!1,success:function(e){"WX_CODE"==e.scanType&&e.path?(console.log(e.path),wx.redirectTo({url:"/"+e.path})):o.setData({error:"Please scan a correct QR Code"})},fail:function(e){o.setData({error:"Please scan a correct QR Code"})}})},onPullDownRefresh:function(){this.loadPage()}}); 
 			}); 	require("pages/home/home.js");
 		__wxRoute = 'pages/login/login';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/login/login.js';	define("pages/login/login.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({data:{error:""},clickScanButton:function(e){var t=this;wx.scanCode({onlyFromCamera:!1,success:function(e){getApp().globalData.stub?wx.navigateTo({url:"/pages/home/home"}):t.scanSuccess(e)},fail:function(e){t.setData({error:"Incorrect QR Code"})}})},scanSuccess:function(e){var t=this;try{var r=JSON.parse(e.result);if(!("qe"in r))return void this.setData({error:"Incorrect QR Code"});if(r.qe<Date.parse(new Date)/1e3)this.setData({error:"QR Code expired"});else{var a={anonymous:{jwt:{aud:r.a,exp:r.e,sig:r.as}},identifiable:{jwt:{aud:r.i,exp:r.e,sig:r.is}}};wx.cloud.callFunction({name:"mpapi",data:{resource:"health",method:"GET",jwt:a.anonymous.jwt}}).then(function(e){if("401"==e.result.StatusCode)t.setData({error:"Incorrect QR Code"});else{getApp().globalData.user=a,wx.setStorageSync("user",a);var r=decodeURI(t.options.redirect),o=t.options.topicId;r=o?r+"?id="+o:"/pages/home/home",wx.redirectTo({url:r})}}).catch(function(e){t.setData({error:"Incorrect QR Code"})})}}catch(e){console.error(e),this.setData({error:"Incorrect QR Code"})}}}); 
 			}); 	require("pages/login/login.js");
 		__wxRoute = 'pages/topics/new/topicType/select';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/topics/new/topicType/select.js';	define("pages/topics/new/topicType/select.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/topics/new/topicType/select.js");
 		__wxRoute = 'pages/topics/new/pk/input';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/topics/new/pk/input.js';	define("pages/topics/new/pk/input.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../modules/pageCommons.js");Page({data:{},onLoad:function(t){e.login(this)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},submitTopic:function(e){if(getApp().globalData.stub){if(getApp().globalData.stub)return void wx.navigateTo({url:"success"})}else{console.log(e.detail.value);var t=e.detail.value.topicTitle,o=e.detail.value.prosTitle,n=e.detail.value.conssTitle;wx.cloud.callFunction({name:"mpapi",data:{resource:"topics",method:"POST",jwt:getApp().globalData.user.identifiable.jwt,body:{title:t,mode:1,author:getApp().globalData.user.identifiable.jwt.aud,created_date:(new Date).getTime(),modified_date:(new Date).getTime(),questions:[{seq:1,type:1,content:t,options:[{seq:1,content:o},{seq:2,content:n}]}]}}}).then(function(e){console.log("create topic sucessfully!"),console.log(e),wx.navigateTo({url:"success?id="+e.result._id})}).catch(function(e){console.error(e)})}}}); 
 			}); 	require("pages/topics/new/pk/input.js");
 		__wxRoute = 'pages/topics/new/questions/input';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/topics/new/questions/input.js';	define("pages/topics/new/questions/input.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../modules/pageCommons.js"),i=require("../../../../modules/request.js"),t=require("../../../../modules/utils.js"),a=require("../../../../modules/models.js"),n=a.Topic,s=a.ParticipantRoles,o=a.ReplyVisibilities,l=a.TopicModes,u=a.QuestionTypes;Page({data:{disableSubmit:!1,participant_roles:[{id:s.anyone,name:"Allow anonymous"},{id:s.identifiableOnly,name:"No anonymous"}],pr_index:s.anyone,reply_visibilities:[{id:o.anyone,name:"Any replies"},{id:o.participantOnly,name:"Own replies"}],rv_index:o.anyone},onLoad:function(i){e.login(this)},clickSubmit:function(e){var i=this;this.setData({disableSubmit:!0}),t.isEmpty(e.detail.value.title)||t.isEmpty(e.detail.value.question)?wx.showModal({title:"Validation",content:"Plesae input title and content",confirmText:"Confirm",cancelText:"Cancel",showCancel:!1,success:function(e){i.setData({disableSubmit:!1})}}):wx.showModal({title:"Confirmation",content:"Submit this topic?",confirmText:"Confirm",cancelText:"Cancel",success:function(t){t.confirm?i.submitTopic(e):t.cancel&&i.setData({disableSubmit:!1})}})},submitTopic:function(e){if(getApp().globalData.stub)wx.navigateTo({url:"/pages/topics/list/listTopic"});else{var a=new n;a.title=e.detail.value.title,a.participant_role=this.data.pr_index,a.reply_visibility=this.data.rv_index,a.mode=l.questionnaire,a.author=t.getRealName(),a.questions=[{seq:1,type:u.text,content:e.detail.value.question}],this.setData({disableSubmit:!1}),i.postRes("topics",{},a,!1).then(function(e){wx.reLaunch({url:"/pages/topics/share/share?id="+e.result._id})})}},prPickerChange:function(e){console.log(e.detail),this.setData({pr_index:parseInt(e.detail.value)})},rvPickerChange:function(e){this.setData({rv_index:parseInt(e.detail.value)})}}); 
 			}); 	require("pages/topics/new/questions/input.js");
 		__wxRoute = 'pages/topics/new/success/success';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/topics/new/success/success.js';	define("pages/topics/new/success/success.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({data:{},onLoad:function(o){var n=this,e=o.id,a=wx.env.USER_DATA_PATH+"/"+e+".jpg";console.log(a),wx.cloud.callFunction({name:"mpapi",data:{resource:"wxacode",method:"GET",parameters:{id:e},jwt:getApp().globalData.user.anonymous.jwt}}).then(function(o){console.log("got acode"),wx.getFileSystemManager().writeFile({filePath:a,data:o.result.buffer,encoding:"binary",success:function(o){console.log("saved acode"),console.log(o),n.setData({acodeUrl:a})},fail:function(o){console.log("error saving acode"),console.error(o)}})}).catch(function(o){console.error(o)})},saveWxacode:function(){wx.saveImageToPhotosAlbum({filePath:this.data.acodeUrl,success:function(o){}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/topics/new/success/success.js");
 		__wxRoute = 'pages/topics/list/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/topics/list/list.js';	define("pages/topics/list/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var a=require("../../../modules/pageCommons.js"),e=require("../../../modules/request.js"),t=require("../../../modules/utils.js");Page({data:{topics:[],page_index:0,max_page_index:0},onLoad:function(e){getApp().globalData.stub||(a.login(this),this.loadTopics(this.data.page_index))},loadTopics:function(a){var i=this,s={author:t.getRealName(),page_index:a};e.getRes("topics",s,!1).then(function(a){console.log(a.result);var e=a.result.data;i.setData({topics:i.data.topics.concat(e)}),i.setData({page_index:a.result.page_index}),i.setData({max_page_index:a.result.max_page_index})})},onReachBottom:function(){this.data.page_index<this.data.max_page_index&&this.loadTopics(this.data.page_index+1)}}); 
 			}); 	require("pages/topics/list/list.js");
 		__wxRoute = 'pages/topics/edit/questions/edit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/topics/edit/questions/edit.js';	define("pages/topics/edit/questions/edit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var n=require("../../../../modules/pageCommons.js");Page({data:{},onLoad:function(o){n.login(this)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/topics/edit/questions/edit.js");
 		__wxRoute = 'pages/topics/view/questions/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/topics/view/questions/view.js';	define("pages/topics/view/questions/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../modules/pageCommons.js"),t=require("../../../../modules/request.js"),a=require("../../../../modules/utils.js"),i=require("../../../../modules/models.js"),s=i.ParticipantRoles,o=i.ReplyVisibilities;Page({data:{topicId:"",topic:{},replies:[],roles:[],page_index:0,max_page_index:0,page_index2:0,max_page_index2:0},onLoad:function(t){if(!getApp().globalData.stub&&e.login(this)){var a=t.id;a||(a=t.scene),this.setData({topicId:a}),this.loadPage()}},loadPage:function(){var i=this;this.setData({replies:[]});var n={_id:this.data.topicId};t.getRes("topics",n).then(function(t){var n=t.result.data[0];n.type="topic",n.content=n.questions[0].content;var p=[];n.participant_role==s.anyone?p.push({id:a.getAnonymousName(),name:"Anonymous"}):n.eplyRoleNote="This topic NOT allow to reply anonymously!",p.push({id:a.getRealName(),name:a.getRealName()}),i.loadReplies(0,!1),n.author!=a.getRealName()&&n.reply_visibility==o.participantOnly&&(i.loadReplies(0,!0),n.replyDisplayNote="You can only view your reply!"),i.setData({roles:p}),i.setData({topic:n}),e.setHistory(n),wx.stopPullDownRefresh()})},loadReplies:function(e,i){var s=this,o={article_id:this.data.topicId,type:"topic",page_index:e};t.getRes("replies",o,i).then(function(e){var t=e.result.data;0==s.data.replies.length?s.setData({replies:t}):(t=s.data.replies.concat(t),t=a.sortByCreatedDate(t),s.setData({replies:t})),i?(s.setData({page_index2:e.result.page_index}),s.setData({max_page_index2:e.result.max_page_index})):(s.setData({page_index:e.result.page_index}),s.setData({max_page_index:e.result.max_page_index}))})},onReachBottom:function(){this.data.page_index<this.data.max_page_index&&this.loadReplies(this.data.page_index+1,!1),this.data.page_index2<this.data.max_page_index2&&this.loadReplies(this.data.page_index2+1,!0)},onPostedReply:function(){this.loadPage()},onPullDownRefresh:function(){this.loadPage()},onShareAppMessage:function(){return{title:this.data.topic.title,imageUrl:"/images/Surveylist-512.png",path:"/pages/topics/view/questions/view?id="+this.data.topic._id}}}); 
 			}); 	require("pages/topics/view/questions/view.js");
 		__wxRoute = 'pages/topics/view/vote/vote';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/topics/view/vote/vote.js';	define("pages/topics/view/vote/vote.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/topics/view/vote/vote.js");
 		__wxRoute = 'pages/topics/share/share';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/topics/share/share.js';	define("pages/topics/share/share.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../modules/pageCommons.js"),s=require("../../../modules/request.js");Page({data:{isSuccess:!1,isLoaded:!1,successMsg:"Saved successfully!",topic:"",acodeUrl:""},onLoad:function(t){var a=this,i=t.id,o=wx.env.USER_DATA_PATH+"/"+i+".jpg",c={_id:i};s.getRes("topics",c).then(function(t){var c=t.result.data[0];e.setHistory(c),a.setData({topic:c});var n={page:"pages/topics/view/questions/view",_id:i};s.getRes("wxacode",n).then(function(e){wx.getFileSystemManager().writeFile({filePath:o,data:e.result.buffer,encoding:"binary",success:function(e){console.log("saved acode"),console.log(e),a.setData({acodeUrl:o}),a.setData({isLoaded:!0})},fail:function(e){console.log("error saving acode"),console.error(e)}})})})},saveWxacode:function(){var e=this;wx.saveImageToPhotosAlbum({filePath:this.data.acodeUrl,success:function(s){e.setData({isSuccess:!0})}})},onShareAppMessage:function(){return{title:this.data.topic.title,imageUrl:"/images/Surveylist-512.png",path:"/pages/topics/view/questions/view?id="+this.data.topic._id}}}); 
 			}); 	require("pages/topics/share/share.js");
 		__wxRoute = 'pages/topics/history/history';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/topics/history/history.js';	define("pages/topics/history/history.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=require("../../../modules/pageCommons.js");Page({data:{topics:[],hasHistory:!1},onLoad:function(s){t.login(this),history=getApp().globalData.history,history.length>0&&(this.setData({hasHistory:!0}),this.setData({topics:history}))}}); 
 			}); 	require("pages/topics/history/history.js");
 		__wxRoute = 'pages/replies/view/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/replies/view/view.js';	define("pages/replies/view/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../modules/pageCommons.js"),a=require("../../../modules/request.js"),t=require("../../../modules/utils.js");Page({data:{replyId:"",reply:{},replies:[],roles:[],page_index:0,max_page_index:0,page_index2:0,max_page_index2:0},onLoad:function(a){if(!getApp().globalData.stub){e.login(this);var s=a.id;this.setData({replyId:s});var i=[];0==a.participant_role&&i.push({id:t.getAnonymousName(),name:"Anonymous"}),i.push({id:t.getRealName(),name:t.getRealName()}),this.setData({roles:i}),this.loadPage()}},loadPage:function(){var e=this,t={_id:this.data.replyId};a.getRes("replies",t).then(function(a){console.log(a);var t=a.result.data[0];t.type="reply",t.content=t.answers[0].content,e.setData({reply:t}),e.loadReplies(0,!1)})},loadReplies:function(e,s){var i=this,n={article_id:this.data.replyId,type:"reply",page_index:e};a.getRes("replies",n,s).then(function(e){console.log(e);var a=e.result.data;0==i.data.replies.length?i.setData({replies:a}):(a=i.data.replies.concat(a),a=t.sortByCreatedDate(a),i.setData({replies:a})),s?(i.setData({page_index2:e.result.page_index}),i.setData({max_page_index2:e.result.max_page_index})):(i.setData({page_index:e.result.page_index}),i.setData({max_page_index:e.result.max_page_index}))})},onReachBottom:function(){this.data.page_index<this.data.max_page_index&&this.loadReplies(this.data.page_index+1,!1),this.data.page_index2<this.data.max_page_index2&&this.loadReplies(this.data.page_index2+1,!0)},onPostedReply:function(){this.setData({replies:[]}),this.loadPage()}}); 
 			}); 	require("pages/replies/view/view.js");
 		__wxRoute = 'pages/user/user';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/user.js';	define("pages/user/user.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var n=require("../../modules/pageCommons.js");Page({data:{},onLoad:function(o){n.login(this)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/user/user.js");
 		__wxRoute = 'pages/about/about';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/about/about.js';	define("pages/about/about.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/about/about.js");
 		__wxRoute = 'pages/common/error/error';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/common/error/error.js';	define("pages/common/error/error.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({data:{content:"error"},onLoad:function(n){var t=n.errMsg;t&&this.setData({content:t})},login:function(){wx.reLaunch({url:"/pages/login/login"})}}); 
 			}); 	require("pages/common/error/error.js");
 		__wxRoute = 'pages/common/inDev/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/common/inDev/index.js';	define("pages/common/inDev/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({}); 
 			}); 	require("pages/common/inDev/index.js");
 		__wxRoute = 'pages/s360/t/a/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/s360/t/a/index.js';	define("pages/s360/t/a/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){wx.hideHomeButton({complete:function(n){}})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/s360/t/a/index.js");
 		__wxRoute = 'pages/s360/t/p/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/s360/t/p/index.js';	define("pages/s360/t/p/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){wx.hideHomeButton({complete:function(n){}})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/s360/t/p/index.js");
 		__wxRoute = 'pages/s360/p/a/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/s360/p/a/index.js';	define("pages/s360/p/a/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){wx.hideHomeButton({complete:function(n){}})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/s360/p/a/index.js");
 		__wxRoute = 'pages/s360/p/p/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/s360/p/p/index.js';	define("pages/s360/p/p/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){wx.hideHomeButton({complete:function(n){}})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/s360/p/p/index.js");
 	