(function UMD(name,context,definition) {
	if (typeof module != "undefined" && module.exports) module.exports = definition();
	else if (typeof define == "function" && define.amd) define(definition);
	else context[name] = definition(name,context);
})("Tmpls",this,function definition(name,context) {
	"use strict";

	function init() {
		(function _____(G){var partial = G.definePartial, clone = G.cloneObj, error = G.error, extend = G.extend, cID = "/";extend(cID,"/master");partial(function __content__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;try {$$.info =!$.logged_in ? "#login" : "";} catch (err1) {return error(cID,{"type":11,"pos":{"line":5,"col":1},"val":"info = !$.logged_in ? \"#login\" : \"\""},"Assignment failed",err1);}ret += "\n<div id=\"content\">\n\n	<h1>YDKJS: Kickstarter</h1>\n	<p>\n		Backer information management.\n	</p>\n\n	";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render($$.info,ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":9,"pos":{"line":14,"col":11},"val":"info"};return err;} else {return error(cID,{"type":9,"pos":{"line":14,"col":11},"val":"info"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n\n</div>\n";return ret;},"/#content",{"type":2,"pos":{"line":4,"col":0},"val":"{$: \"#content\" }"});partial(function __login__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n<p>\n	Backer Email: <input id=\"login_email\" type=\"text\" autocomplete=\"off\">\n</p>\n<p>\n	<input id=\"verify_user\" type=\"button\" value=\"verify\">\n</p>\n";return ret;},"/#login",{"type":2,"pos":{"line":20,"col":0},"val":"{$: \"#login\" }"});})(this.grips||grips);(function ___master__(G){var partial = G.definePartial, clone = G.cloneObj, error = G.error, cID = "/master";partial(function __page__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;try {$$.title =$.page_title ? $.page_title : "YDKJS: Kickstarter";} catch (err1) {return error(cID,{"type":11,"pos":{"line":2,"col":1},"val":"title = $.page_title ? $.page_title : \"YDKJS: Kickstarter\""},"Assignment failed",err1);}ret += "\n\n<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<title>";try {ret += $$.title;} catch (err) {return error(cID,{"type":9,"pos":{"line":9,"col":16},"val":"title"},"Insert reference failed",err);}ret += "</title>\n<link rel=\"stylesheet\" href=\"/css/site.css\">\n</head>\n<body>\n\n<div id=\"notifications\"><div class=\"list\"></div><div class=\"close\">X</div></div>\n\n";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render("#mainnav",ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":8,"pos":{"line":16,"col":11},"val":"#mainnav"};return err;} else {return error(cID,{"type":8,"pos":{"line":16,"col":11},"val":"#mainnav"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n\n";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render("#content",ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":8,"pos":{"line":18,"col":11},"val":"#content"};return err;} else {return error(cID,{"type":8,"pos":{"line":18,"col":11},"val":"#content"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n\n<script src=\"";try {ret += $.bootstrapper;} catch (err) {return error(cID,{"type":9,"pos":{"line":20,"col":22},"val":"$.bootstrapper"},"Insert reference failed",err);}ret += "\"></script>\n\n</body>\n</html>\n\n";return ret;},"/master#page",{"type":2,"pos":{"line":1,"col":0},"val":"{$: \"#page\" }"});partial(function __mainnav__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;try {$$.which_nav =$.logged_in ? "#logged_in_nav" : "#logged_out_nav";} catch (err1) {return error(cID,{"type":11,"pos":{"line":29,"col":1},"val":"which_nav = $.logged_in ? \"#logged_in_nav\" : \"#logged_out_nav\""},"Assignment failed",err1);}ret += "\n	<nav id=\"mainnav\">";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render($$.which_nav,ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":9,"pos":{"line":31,"col":29},"val":"which_nav"};return err;} else {return error(cID,{"type":9,"pos":{"line":31,"col":29},"val":"which_nav"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "</nav>\n";return ret;},"/master#mainnav",{"type":2,"pos":{"line":28,"col":0},"val":"{$: \"#mainnav\" }"});partial(function __logged_out_nav__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n	<a href=\"/\">home</a>\n";return ret;},"/master#logged_out_nav",{"type":2,"pos":{"line":35,"col":0},"val":"{$: \"#logged_out_nav\" }"});partial(function __logged_in_nav__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n	<a href=\"/\">home</a> | <a href=\"/profile\">profile</a> | <a id=\"logout\" href=\"#\">logout</a>\n";return ret;},"/master#logged_in_nav",{"type":2,"pos":{"line":40,"col":0},"val":"{$: \"#logged_in_nav\" }"});partial(function __content__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;return ret;},"/master#content",{"type":2,"pos":{"line":45,"col":0},"val":"{$: \"#content\" }"});partial(function __loading_content__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n<div id=\"content\" class=\"loading\">Loading...</div>\n";return ret;},"/master#loading_content",{"type":2,"pos":{"line":48,"col":0},"val":"{$: \"#loading_content\" }"});})(this.grips||grips);(function ___profile__(G){function __sort_fn__(a,b){ return a-b; }var partial = G.definePartial, clone = G.cloneObj, error = G.error, extend = G.extend, esc = G.strEscapes, unerr = new Error("Unknown error"), RLH = G.RangeLiteralHash, cID = "/profile";extend(cID,"/master");partial(function __content__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;try {$$.content =$.profile_email ? "#profile" : "#loading_content";} catch (err1) {return error(cID,{"type":11,"pos":{"line":5,"col":1},"val":"content = $.profile_email ? \"#profile\" : \"#loading_content\""},"Assignment failed",err1);}ret += "\n	";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render($$.content,ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":9,"pos":{"line":7,"col":11},"val":"content"};return err;} else {return error(cID,{"type":9,"pos":{"line":7,"col":11},"val":"content"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n";return ret;},"/profile#content",{"type":2,"pos":{"line":4,"col":0},"val":"{$: \"#content\" }"});partial(function __profile__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;try {$$.shirt =$.pick_shirt ? "#shirt" : "";} catch (err1) {return error(cID,{"type":11,"pos":{"line":12,"col":1},"val":"shirt = $.pick_shirt ? \"#shirt\" : \"\""},"Assignment failed",err1);}try {$$.game =$.pick_game ? "#game" : "";} catch (err2) {return error(cID,{"type":11,"pos":{"line":13,"col":1},"val":"game = $.pick_game ? \"#game\" : \"\""},"Assignment failed",err2);}try {$$.shipping =$.pick_shipping ? "#shipping" : "";} catch (err3) {return error(cID,{"type":11,"pos":{"line":14,"col":1},"val":"shipping = $.pick_shipping ? \"#shipping\" : \"\""},"Assignment failed",err3);}ret += "\n<div id=\"content\">\n\n<h1>Backer Profile</h1>\n\n<h2>Personal</h2>\n<p>\n	Pledge Amount: <strong>$";try {ret += esc($.profile_pledge_amount,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":22,"col":36},"val":"$.profile_pledge_amount"},"Insert reference failed",err);}ret += " USD</strong>\n</p>\n<p>\n	Reward Level: <strong>";try {ret += esc($.profile_reward_level,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":25,"col":34},"val":"$.profile_reward_level"},"Insert reference failed",err);}ret += "</strong>\n</p>\n<p>\n	Email: <input id=\"profile_email\" type=\"text\" value=\"";try {ret += esc($.profile_email,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":28,"col":64},"val":"$.profile_email"},"Insert reference failed",err);}ret += "\" readonly> <input id=\"modify_email\" type=\"button\" value=\"modify\">\n</p>\n<p>\n	Name: <input id=\"profile_name\" type=\"text\" value=\"";try {ret += esc($.profile_name,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":31,"col":62},"val":"$.profile_name"},"Insert reference failed",err);}ret += "\">\n</p>\n<p>\n	Twitter: @<input id=\"profile_twitter\" type=\"text\" value=\"";try {ret += esc($.profile_twitter,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":34,"col":69},"val":"$.profile_twitter"},"Insert reference failed",err);}ret += "\"> <small>(optional)</small>\n</p>\n<p>\n	Phone: <input id=\"profile_phone\" type=\"text\" value=\"";try {ret += esc($.profile_phone,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":37,"col":64},"val":"$.profile_phone"},"Insert reference failed",err);}ret += "\"> <small>(optional)</small>\n</p>\n<p>\n	\"Thank You's\" Listing: <input id=\"profile_credit\" type=\"text\" value=\"";try {ret += esc($.profile_credit,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":40,"col":81},"val":"$.profile_credit"},"Insert reference failed",err);}ret += "\">\n</p>\n\n";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render($$.shirt,ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":9,"pos":{"line":43,"col":10},"val":"shirt"};return err;} else {return error(cID,{"type":9,"pos":{"line":43,"col":10},"val":"shirt"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n\n";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render($$.shipping,ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":9,"pos":{"line":45,"col":10},"val":"shipping"};return err;} else {return error(cID,{"type":9,"pos":{"line":45,"col":10},"val":"shipping"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n\n";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render($$.game,ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":9,"pos":{"line":47,"col":10},"val":"game"};return err;} else {return error(cID,{"type":9,"pos":{"line":47,"col":10},"val":"game"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n\n<p>\n	<input id=\"update_profile\" type=\"button\" value=\"update\">\n</p>\n\n";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render("#email_modal",ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":8,"pos":{"line":53,"col":11},"val":"#email_modal"};return err;} else {return error(cID,{"type":8,"pos":{"line":53,"col":11},"val":"#email_modal"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n\n</div>\n";return ret;},"/profile#profile",{"type":2,"pos":{"line":11,"col":0},"val":"{$: \"#profile\" }"});partial(function __shirt__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;try {$$.shirt_sizes = {};var _set = ["S","M","L","XL","2XL","3XL","4XL","5XL"];for (i=0; i<8; i++) {$$.shirt_sizes[_set[i]] = ($.profile_shirt_size === _set[i]) ? "selected" : "";}} catch (err1) {return error(cID,{"type":11,"pos":{"line":60,"col":1},"val":"shirt_sizes[\"S\",\"M\",\"L\",\"XL\",\"2XL\",\"3XL\",\"4XL\",\"5XL\"] = $.profile_shirt_size ? \"selected\" : \"\""},"Assignment failed",err1);}try {$$.empty_shirt_size =!$.profile_shirt_size ? "selected" : "";} catch (err2) {return error(cID,{"type":11,"pos":{"line":61,"col":1},"val":"empty_shirt_size = !$.profile_shirt_size ? \"selected\" : \"\""},"Assignment failed",err2);}ret += "\n<p>\n	Shirt Size:\n	<select id=\"profile_shirt_size\">\n		<option value=\"\" ";try {ret += $$.empty_shirt_size;} catch (err) {return error(cID,{"type":9,"pos":{"line":66,"col":28},"val":"empty_shirt_size"},"Insert reference failed",err);}ret += ">--</option>\n	";ret2 = (function __loop__ (){function __iter__($,$$,value,key,index){var i, ret = "", ret2, _;if (value == null) return ret;$$ = clone($$);_ = {value: value,key: key,index: index,even: (index % 2) === 0,odd: (index % 2) === 1,first: (index === 0),last: (index === len - 1)};ret += "\n		<option value=\"";try {ret += _.key;} catch (err) {return error(cID,{"type":9,"pos":{"line":68,"col":26},"val":"_.key"},"Insert reference failed",err);}ret += "\" ";try {ret += _.value;} catch (err) {return error(cID,{"type":9,"pos":{"line":68,"col":45},"val":"_.value"},"Insert reference failed",err);}ret += ">";try {ret += _.key;} catch (err) {return error(cID,{"type":9,"pos":{"line":68,"col":65},"val":"_.key"},"Insert reference failed",err);}ret += "</option>\n	";return ret;}var i, j = 0, len, ret = "", it, tmp;try {it = $$.shirt_sizes;if (it == null) {return "";}if (Array.isArray(it)) {len = it.length;for (i=0; i<len; i++) {ret2 = __iter__($,$$,it[i],""+i,i);if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}}} else if (typeof it === "object") {tmp = Object.keys(it);len = tmp.length;if (it instanceof RLH) {tmp.sort(__sort_fn__);}for (i=0; i<len; i++) {ret2 = __iter__($,$$,it[tmp[i]],tmp[i],i);if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}}} else {return error(cID,{"type":9,"pos":{"line":67,"col":8},"val":"shirt_sizes"},"Invalid loop-iterator reference") || unerr;}} catch (err) {return error(cID,{"type":9,"pos":{"line":67,"col":8},"val":"shirt_sizes"},"Failed loop iteration",err);}return ret;})();if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n	</select> <small>(adult unisex sizes)</small>\n";return ret;},"/profile#shirt",{"type":2,"pos":{"line":59,"col":0},"val":"{$: \"#shirt\" }"});partial(function __game__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n<h2>Game</h2>\n<small>options coming soon</small>\n";return ret;},"/profile#game",{"type":2,"pos":{"line":74,"col":0},"val":"{$: \"#game\" }"});partial(function __shipping__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;try {$$.shipping_type =$.profile_shipping.domestic ? "#domestic_shipping" : "#international_shipping";} catch (err1) {return error(cID,{"type":11,"pos":{"line":81,"col":1},"val":"shipping_type = $.profile_shipping.domestic ? \"#domestic_shipping\" : \"#international_shipping\""},"Assignment failed",err1);}ret += "\n<h2>Shipping</h2>\n<small>please list a permanent address, good for at least the next 3-6 months</small>\n\n";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render($$.shipping_type,ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":9,"pos":{"line":86,"col":10},"val":"shipping_type"};return err;} else {return error(cID,{"type":9,"pos":{"line":86,"col":10},"val":"shipping_type"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n\n";return ret;},"/profile#shipping",{"type":2,"pos":{"line":80,"col":0},"val":"{$: \"#shipping\" }"});partial(function __domestic_shipping__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n<div id=\"shipping_info\">\n<p>\n	<input id=\"profile_shipping_domestic\" type=\"checkbox\" checked> Domestic (USA) Address\n</p>\n<p>\n	Address:<br />\n	<textarea id=\"profile_shipping_address\" cols=\"50\" rows=\"3\">";try {ret += esc($.profile_shipping.address,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":98,"col":71},"val":"$.profile_shipping.address"},"Insert reference failed",err);}ret += "</textarea>\n</p>\n<p>\n	<input id=\"profile_shipping_city\" type=\"text\" value=\"";try {ret += esc($.profile_shipping.city,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":101,"col":65},"val":"$.profile_shipping.city"},"Insert reference failed",err);}ret += "\" placeholder=\"-- City --\" title=\"-- City --\">\n	";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render("#state",ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":8,"pos":{"line":102,"col":12},"val":"#state"};return err;} else {return error(cID,{"type":8,"pos":{"line":102,"col":12},"val":"#state"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n	<input id=\"profile_shipping_zip\" type=\"text\" value=\"";try {ret += esc($.profile_shipping.zip,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":103,"col":64},"val":"$.profile_shipping.zip"},"Insert reference failed",err);}ret += "\" placeholder=\"-- ZIP --\" title=\"-- ZIP --\">\n</p>\n</div>\n";return ret;},"/profile#domestic_shipping",{"type":2,"pos":{"line":91,"col":0},"val":"{$: \"#domestic_shipping\" }"});partial(function __state__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;try {$$.empty_choice =!$.profile_shipping.state ? "selected" : "";} catch (err1) {return error(cID,{"type":11,"pos":{"line":110,"col":1},"val":"empty_choice = !$.profile_shipping.state ? \"selected\" : \"\""},"Assignment failed",err1);}try {$$.state_choice = {};var _set = ["AL","AK","AZ","AR","CA","CO","CT","DC","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];for (i=0; i<51; i++) {$$.state_choice[_set[i]] = ($.profile_shipping.state === _set[i]) ? "selected" : "";}} catch (err2) {return error(cID,{"type":11,"pos":{"line":111,"col":1},"val":"state_choice[\"AL\",\"AK\",\"AZ\",\"AR\",\"CA\",\"CO\",\"CT\",\"DC\",\"DE\",\"FL\",\"GA\",\"HI\",\"ID\",\"IL\",\"IN\",\"IA\",\"KS\",\"KY\",\"LA\",\"ME\",\"MD\",\"MA\",\"MI\",\"MN\",\"MS\",\"MO\",\"MT\",\"NE\",\"NV\",\"NH\",\"NJ\",\"NM\",\"NY\",\"NC\",\"ND\",\"OH\",\"OK\",\"OR\",\"PA\",\"RI\",\"SC\",\"SD\",\"TN\",\"TX\",\"UT\",\"VT\",\"VA\",\"WA\",\"WV\",\"WI\",\"WY\"] = $.profile_shipping.state ? \"selected\" : \"\""},"Assignment failed",err2);}ret += "\n<select id=\"profile_shipping_state\">\n	<option value=\"\" ";try {ret += $$.empty_choice;} catch (err) {return error(cID,{"type":9,"pos":{"line":114,"col":27},"val":"empty_choice"},"Insert reference failed",err);}ret += ">--state--</option>\n	";ret2 = (function __loop__ (){function __iter__($,$$,value,key,index){var i, ret = "", ret2, _;if (value == null) return ret;$$ = clone($$);_ = {value: value,key: key,index: index,even: (index % 2) === 0,odd: (index % 2) === 1,first: (index === 0),last: (index === len - 1)};ret += "\n	<option value=\"";try {ret += _.key;} catch (err) {return error(cID,{"type":9,"pos":{"line":116,"col":25},"val":"_.key"},"Insert reference failed",err);}ret += "\" ";try {ret += _.value;} catch (err) {return error(cID,{"type":9,"pos":{"line":116,"col":44},"val":"_.value"},"Insert reference failed",err);}ret += ">";try {ret += _.key;} catch (err) {return error(cID,{"type":9,"pos":{"line":116,"col":64},"val":"_.key"},"Insert reference failed",err);}ret += "</option>\n	";return ret;}var i, j = 0, len, ret = "", it, tmp;try {it = $$.state_choice;if (it == null) {return "";}if (Array.isArray(it)) {len = it.length;for (i=0; i<len; i++) {ret2 = __iter__($,$$,it[i],""+i,i);if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}}} else if (typeof it === "object") {tmp = Object.keys(it);len = tmp.length;if (it instanceof RLH) {tmp.sort(__sort_fn__);}for (i=0; i<len; i++) {ret2 = __iter__($,$$,it[tmp[i]],tmp[i],i);if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}}} else {return error(cID,{"type":9,"pos":{"line":115,"col":8},"val":"state_choice"},"Invalid loop-iterator reference") || unerr;}} catch (err) {return error(cID,{"type":9,"pos":{"line":115,"col":8},"val":"state_choice"},"Failed loop iteration",err);}return ret;})();if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n</select>\n";return ret;},"/profile#state",{"type":2,"pos":{"line":109,"col":0},"val":"{$: \"#state\" }"});partial(function __international_shipping__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n<div id=\"shipping_info\">\n<p>\n	<input id=\"profile_shipping_domestic\" type=\"checkbox\"> Domestic (USA) Address\n</p>\n<p>\n	Full Address (including country):<br />\n	<textarea id=\"profile_shipping_address\" cols=\"50\" rows=\"5\">";try {ret += esc($.profile_shipping.address,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":129,"col":71},"val":"$.profile_shipping.address"},"Insert reference failed",err);}ret += "</textarea>\n</p>\n</div>\n";return ret;},"/profile#international_shipping",{"type":2,"pos":{"line":122,"col":0},"val":"{$: \"#international_shipping\" }"});partial(function __email_modal__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n<div id=\"email_modal\">\n<h2>Modify Email</h2>\n<p>\n	Old Email: <input id=\"old_email\" type=\"text\" value=\"";try {ret += esc($.profile_email,{"html":true});} catch (err) {return error(cID,{"type":9,"pos":{"line":139,"col":64},"val":"$.profile_email"},"Insert reference failed",err);}ret += "\" readonly>\n</p>\n<p>\n	New Email: <input id=\"new_email\" type=\"text\">\n</p>\n<p>\n	<input id=\"update_email\" type=\"button\" value=\"modify\">\n	&nbsp;&nbsp;&nbsp;\n	<input id=\"cancel_update\" type=\"button\" value=\"cancel\">\n</p>\n</div>\n";return ret;},"/profile#email_modal",{"type":2,"pos":{"line":135,"col":0},"val":"{$: \"#email_modal\" }"});})(this.grips||grips);
	}

	var public_api;

	public_api = {
		init: init
	};

	return public_api;
});
