// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(145)
	)
	__vue_styles__.push(__webpack_require__(146)
	)

	/* script */
	__vue_exports__ = __webpack_require__(147)

	/* template */
	var __vue_template__ = __webpack_require__(374)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\src\\pages\\main.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-22de9527"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * 导入weex-vue-router，仅native环境可用
	                                                                                                                                                                                                                                                                               */


	var _weexVueRouter = __webpack_require__(3);

	var _weexVueRouter2 = _interopRequireDefault(_weexVueRouter);

	var _routerNative = __webpack_require__(4);

	var _routerNative2 = _interopRequireDefault(_routerNative);

	var _vuex = __webpack_require__(5);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _buiWeex = __webpack_require__(14);

	var _buiWeex2 = _interopRequireDefault(_buiWeex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//web端的路由在web-router里定义，在app.js里引用
	if (WXEnvironment.platform !== 'Web') {
	    Vue.use(_weexVueRouter2.default, { routes: _routerNative2.default, weex: weex }); //加入了实例属性router
	}
	/**
	 * 导入Vuex
	 */

	/**
	 * 通用UI
	 */

	Vue.use(_buiWeex2.default);
	/**
	 * 通用module
	 */
	var modal = weex.requireModule('modal');
	var storage = weex.requireModule('storage');
	var globalEvent = weex.requireModule('globalEvent');

	exports.default = {
	    data: function data() {
	        return {
	            rpx: 1,
	            apiDomain: 'dddd',
	            android: weex.config.env.platform.toLowerCase() == 'android',
	            ios: weex.config.env.platform.toLowerCase() == 'ios',
	            web: weex.config.env.platform.toLowerCase() == 'web'
	        };
	    },
	    created: function created() {
	        var self = this;
	        var env = weex.config.env;
	        var rWidth = env.deviceWidth;
	        env.deviceWidth > 828 && (rWidth = env.deviceWidth / 3 * 2);
	        self.rpx = 750 / rWidth;
	        //self.apiDomain='http://xiazhou.me/example/xiazhou-weex';
	        if (!self.web) {
	            self.apiDomain = 'http://192.168.31.241:8080'; //替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
	        }
	        /** 实例属性 **/
	        //this.$router
	        //this.$store = vuexStore;//需要手动放进来 或者 使用store:vuexStore
	        /** 普通属性 **/
	        this.store = this.$store;
	        this.router = this.$router;
	        this.modal = modal;
	        this.storage = storage;
	        this.globalEvent = globalEvent;
	    },

	    methods: {
	        request: function request(opt) {
	            var stream = weex.requireModule('stream');
	            var self = this;
	            var defaultOption = {
	                type: "get",
	                url: "",
	                data: {},
	                async: true,
	                timeout: 20000,
	                dataType: "json"
	            };
	            var option = self.extendObject(defaultOption, opt);
	            return new Promise(function (resolve, reject) {
	                stream.fetch({
	                    method: option.type,
	                    url: self.apiDomain + option.url,
	                    type: option.dataType,
	                    //headers:{'content-type': 'application/json'},
	                    body: option.data
	                }, function (response) {
	                    if (response.ok) {
	                        resolve(response.data);
	                    } else {
	                        reject(response);
	                    }
	                }, function () {});
	            });
	        },
	        nativeAction: function nativeAction(pathQuery) {
	            this.router.push('/native/' + encodeURIComponent(pathQuery));
	        },
	        log: function log(_log) {
	            this.nativeAction('/provider/log?text=' + _log);
	            console.log(_log);
	        },
	        toast: function toast(text) {
	            this.modal.toast({
	                message: text,
	                duration: 0.3
	            });
	        },
	        jump: function jump(url) {
	            /*链接有三种情况：
	             * /product/20408.html  开发者定义跳转
	             * http://xiazhou.me/#/product/20408.html?from=banner  运维添加的链接
	             * http://xiazhou.me/blog/670.html?from=banner#tabs1   原生页面，一般native端都会做链接截取跳转对应页面
	             * */
	            if (!url || url.indexOf('http') != 0 && url.indexOf('/') != 0) {
	                console.warn(url + "为非法的链接");
	                return;
	            }
	            var self = this;
	            //const nativeEvent = weex.requireModule('nativeEvent');//native端必须扩展这个模块才能正常运行
	            var go = function go(to) {
	                self.$router.push(to);
	            };
	            url.indexOf('/') == 0 && go(url); //开发者定义跳转
	            url.indexOf('http') == 0 && url.indexOf('/#/') > 0 && go(url.substr(url.indexOf('#') + 1)); //运维添加的链接
	            //url.indexOf('http') == 0 && url.indexOf('/#/') == -1 && nativeEvent.skip(url); //原生页面//native端必须扩展这个模块才能正常运行
	        },
	        extendObject: function extendObject(p, c) {
	            //依赖了babel-plugin-transform-object-rest-spread，其实可以用Object.assign()替代，但是这里要以p为准，p不存在则传入的c无效
	            function isEmptyObject(e) {
	                var t;
	                for (t in e) {
	                    return !1;
	                }return !0;
	            }

	            var p = p || {};
	            var t = isEmptyObject(p) && c ? c : p;
	            for (var i in p) {
	                if (_typeof(p[i]) === 'object' && p[i] != null) {
	                    t[i] = this.extendObject(p[i], c[i]);
	                } else {
	                    for (var j in c) {
	                        i == j && (t[i] = c[j]);
	                    }
	                }
	            }
	            return t;
	        }
	    },
	    store: _vuex2.default

	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * weex-vue-router v0.0.3
	 * (c) 2017 dongnaebi
	 * @license Apache-2.0
	 */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = index$1;

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	// Match escaped characters that would otherwise appear in future matches.
	// This allows the user to escape special characters that won't transform.
	'(\\\\.)',
	// Match Express-style parameters and un-named parameters with a prefix
	// and optional suffixes. Matches appear as:
	//
	// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse(str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue;
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens;
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile(str, options) {
	  return tokensToFunction(parse(str, options));
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty(str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk(str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction(tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (_typeof(tokens[i]) === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue;
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue;
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined');
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue;
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty');
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue;
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	      }

	      path += token.prefix + segment;
	    }

	    return path;
	  };
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString(str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup(group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1');
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys(re, keys) {
	  re.keys = keys;
	  return re;
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags(options) {
	  return options.sensitive ? '' : 'i';
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp(path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys);
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp(path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys);
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp(path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options);
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp(tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys);
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp(path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */keys);
	  }

	  if (isarray(path)) {
	    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
	  }

	  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/**
	 * Created by ebi on 2017/2/14.
	 */
	var weexVueRouter = {
	  install: function install(Vue, ref) {
	    var routes = ref.routes;
	    var weex = ref.weex;

	    var platform = weex.config.env ? weex.config.env.platform : weex.config.platform;
	    if (platform.toLowerCase() == 'web') {
	      return;
	    }
	    var navigator = weex.requireModule('navigator');
	    var bundleUrl = weex.config.bundleUrl;
	    var route = bundleToPath(bundleUrl, routes);
	    Object.defineProperty(Vue.prototype, "$router", {
	      value: {
	        push: function push(url) {
	          var bundle = pathToBundle(url, routes);
	          if (navigator) {
	            console.log(bundle);
	            navigator.push({
	              'url': bundle,
	              'animated': 'true'
	            }, function () {
	              console.log('skip complete');
	            });
	          }
	        },
	        back: function back() {
	          if (navigator) {
	            navigator.pop();
	          }
	        }
	      },
	      configurable: false
	    });
	    Object.defineProperty(Vue.prototype, '$route', {
	      configurable: false,
	      value: {
	        path: route.path,
	        params: route.params,
	        query: route.query,
	        hash: route.hash,
	        fullPath: route.fullPath,
	        matched: route.matched,
	        name: route.name
	      }
	    });
	  }
	};
	function pathToBundle(url, routes) {
	  /* url='/list/2-1?from=1#2'
	   * r={path:'/list/:cid-:id',bundle:'/product/list.js'}
	   * */
	  if (url.indexOf('/') != 0) {
	    console.error("the url must begin with '/'");
	    return '';
	  }

	  //copy from vue-router
	  var encodeReserveRE = /[!'()*]/g;
	  var encodeReserveReplacer = function encodeReserveReplacer(c) {
	    return '%' + c.charCodeAt(0).toString(16);
	  };
	  var encode = function encode(str) {
	    return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(/%2C/g, ',');
	  };

	  /*find out the rule*/
	  var matchRule = {};
	  routes.forEach(function (r) {
	    var re = index(r.path);
	    var match = re.exec(url);
	    if (match != null) {
	      matchRule = r;
	    }
	  });

	  /*get the key and value*/
	  var keys = [];
	  var pathReg = index(matchRule.path, keys);
	  var values = pathReg.exec(url);
	  var lastValue = values[values.length - 1]; //save the last value to find query and hash
	  values[values.length - 1] = lastValue.split(/\?|\#/)[0]; //the true value

	  /*parse params to key/value object*/
	  var params = {};
	  if (keys.length > 0) {
	    keys.forEach(function (key, i) {
	      params[key.name] = values[i + 1];
	    });
	  }

	  /*get query and hash*/
	  var queryIndex = lastValue.indexOf('?');
	  var hashIndex = lastValue.indexOf('#');
	  if (queryIndex > 0 && hashIndex > 0 && queryIndex > hashIndex) {
	    console.error("Could not set '#' behind '?'");
	    return '';
	  }
	  var queryStr = queryIndex > 0 ? lastValue.substring(queryIndex + 1, hashIndex > 0 ? hashIndex : lastValue.length) : "";
	  var hashStr = hashIndex > 0 ? lastValue.substring(hashIndex, lastValue.length) : "";
	  var query = getParams(queryStr); //{from:1}

	  /*add the bundleUrl's params and hash*/
	  var componentPath = matchRule.component;
	  for (var k in params) {
	    componentPath += (componentPath.indexOf('?') > 0 ? '&' : '?') + k + '=' + encode(params[k]);
	  }
	  for (var q in query) {
	    componentPath += (componentPath.indexOf('?') > 0 ? '&' : '?') + q + '=' + encode(query[q]);
	  }
	  componentPath += hashStr;
	  return componentPath;
	}
	function bundleToPath(url, routes) {
	  //url='domain/product/list.js?cid=2&id=1&from=1'
	  //matchRule={path:'/list/:cid-:id',component:'domain/product/list.js'}
	  var route = {
	    params: null,
	    query: null,
	    hash: null,
	    path: null,
	    fullPath: null,
	    matched: null,
	    name: null
	  };
	  var jsBundle = url.split(/\?|\#/)[0];
	  /*find out the rule*/
	  var matchRule = null;
	  routes.forEach(function (r) {
	    r.component == jsBundle && (matchRule = r);
	    //http://192.168.253.124:8080/dist/product/list.js
	  });
	  if (!matchRule) {
	    console.error("your component must be like '" + jsBundle + "',can not find it in routes,please check up");
	    return route;
	  }

	  /*use pathToRegexp*/
	  var keys = [];
	  index(matchRule.path, keys);

	  /*get query and hash*/
	  var queryIndex = url.indexOf('?');
	  var hashIndex = url.indexOf('#');
	  var queryStr = queryIndex > 0 ? url.substring(queryIndex + 1, hashIndex > 0 ? hashIndex : url.length) : "";
	  route.hash = hashIndex > 0 ? url.substring(hashIndex, url.length) : "";

	  var allQuery = getParams(queryStr); //{cid:2,id:1,from:1}

	  var params = {},
	      //{cid:2,id:1}
	  query = {},
	      //{from:1}
	  paramsKey = []; //['cid','id']
	  if (keys.length > 0) {
	    paramsKey = keys.map(function (key) {
	      return key.name;
	    });
	  }
	  for (var q in allQuery) {
	    allQuery[q] = decodeURIComponent(allQuery[q]);
	    paramsKey.indexOf(q) < 0 ? query[q] = allQuery[q] : params[q] = allQuery[q];
	  }
	  route.params = params;
	  route.query = query;

	  //path and fullPath
	  var path = matchRule.path;
	  for (var p in params) {
	    path = path.replace(':' + p, params[p]);
	  }
	  route.path = path;
	  var queryArr = [];
	  for (var i in query) {
	    queryArr.push(i + '=' + query[i]);
	  }
	  route.fullPath = path + '?' + queryArr.join('&') + route.hash;
	  route.matched = matchRule;
	  route.name = matchRule.name;

	  return route;
	}
	function getParams(str) {
	  var temp = {};
	  if (!str) {
	    return temp;
	  }
	  if (str.indexOf('=') < 0) {
	    temp[str] = "";
	    return temp;
	  }
	  var arr = str.split('&');
	  arr.forEach(function (item) {
	    var w = item.match(/([^=]*)=(.*)/);
	    temp[w[1]] = w[2];
	  });
	  return temp;
	}

	module.exports = weexVueRouter;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by zhouz on 2017/2/12.
	 */
	var basePath = 'http://172.20.12.26:10004/dist'; //替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
	//const basePath='http://xiazhou.me/example/xiazhou-weex/dist';
	exports.default = [{ path: '/native/:pathQuery', component: 'http://native' }, { path: '/', component: basePath + '/pages/index.js' }, { path: '/main', component: basePath + '/pages/main.js' }, { path: '/search', component: basePath + '/pages/search.js' }];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(6);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _actions = __webpack_require__(8);

	var actions = _interopRequireWildcard(_actions);

	var _mutations = __webpack_require__(11);

	var _mutations2 = _interopRequireDefault(_mutations);

	var _getters = __webpack_require__(12);

	var getters = _interopRequireWildcard(_getters);

	var _states = __webpack_require__(13);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.use(_vuex2.default); //在浏览器环境中，Vuex 是会自动注册的，只需要引入库文件就行了,不过重复注册也不会有问题
	var store = new _vuex2.default.Store({
	    actions: actions,
	    mutations: _mutations2.default,
	    getters: getters,
	    state: _states.states //或者 把 states改为state
	});
	exports.default = store;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * vuex v2.5.0
	 * (c) 2017 Evan You
	 * @license MIT
	 */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var applyMixin = function applyMixin(Vue) {
	  var version = Number(Vue.version.split('.')[0]);

	  if (version >= 2) {
	    Vue.mixin({ beforeCreate: vuexInit });
	  } else {
	    // override init and inject vuex init procedure
	    // for 1.x backwards compatibility.
	    var _init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      if (options === void 0) options = {};

	      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	      _init.call(this, options);
	    };
	  }

	  /**
	   * Vuex init hook, injected into each instances init hooks list.
	   */

	  function vuexInit() {
	    var options = this.$options;
	    // store injection
	    if (options.store) {
	      this.$store = typeof options.store === 'function' ? options.store() : options.store;
	    } else if (options.parent && options.parent.$store) {
	      this.$store = options.parent.$store;
	    }
	  }
	};

	var devtoolHook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	function devtoolPlugin(store) {
	  if (!devtoolHook) {
	    return;
	  }

	  store._devtoolHook = devtoolHook;

	  devtoolHook.emit('vuex:init', store);

	  devtoolHook.on('vuex:travel-to-state', function (targetState) {
	    store.replaceState(targetState);
	  });

	  store.subscribe(function (mutation, state) {
	    devtoolHook.emit('vuex:mutation', mutation, state);
	  });
	}

	/**
	 * Get the first item that pass the test
	 * by second argument function
	 *
	 * @param {Array} list
	 * @param {Function} f
	 * @return {*}
	 */
	/**
	 * Deep copy the given object considering circular structure.
	 * This function caches all nested objects and its copies.
	 * If it detects circular structure, use cached copy to avoid infinite loop.
	 *
	 * @param {*} obj
	 * @param {Array<Object>} cache
	 * @return {*}
	 */

	/**
	 * forEach for object
	 */
	function forEachValue(obj, fn) {
	  Object.keys(obj).forEach(function (key) {
	    return fn(obj[key], key);
	  });
	}

	function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}

	function isPromise(val) {
	  return val && typeof val.then === 'function';
	}

	function assert(condition, msg) {
	  if (!condition) {
	    throw new Error("[vuex] " + msg);
	  }
	}

	var Module = function Module(rawModule, runtime) {
	  this.runtime = runtime;
	  this._children = Object.create(null);
	  this._rawModule = rawModule;
	  var rawState = rawModule.state;
	  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
	};

	var prototypeAccessors$1 = { namespaced: { configurable: true } };

	prototypeAccessors$1.namespaced.get = function () {
	  return !!this._rawModule.namespaced;
	};

	Module.prototype.addChild = function addChild(key, module) {
	  this._children[key] = module;
	};

	Module.prototype.removeChild = function removeChild(key) {
	  delete this._children[key];
	};

	Module.prototype.getChild = function getChild(key) {
	  return this._children[key];
	};

	Module.prototype.update = function update(rawModule) {
	  this._rawModule.namespaced = rawModule.namespaced;
	  if (rawModule.actions) {
	    this._rawModule.actions = rawModule.actions;
	  }
	  if (rawModule.mutations) {
	    this._rawModule.mutations = rawModule.mutations;
	  }
	  if (rawModule.getters) {
	    this._rawModule.getters = rawModule.getters;
	  }
	};

	Module.prototype.forEachChild = function forEachChild(fn) {
	  forEachValue(this._children, fn);
	};

	Module.prototype.forEachGetter = function forEachGetter(fn) {
	  if (this._rawModule.getters) {
	    forEachValue(this._rawModule.getters, fn);
	  }
	};

	Module.prototype.forEachAction = function forEachAction(fn) {
	  if (this._rawModule.actions) {
	    forEachValue(this._rawModule.actions, fn);
	  }
	};

	Module.prototype.forEachMutation = function forEachMutation(fn) {
	  if (this._rawModule.mutations) {
	    forEachValue(this._rawModule.mutations, fn);
	  }
	};

	Object.defineProperties(Module.prototype, prototypeAccessors$1);

	var ModuleCollection = function ModuleCollection(rawRootModule) {
	  // register root module (Vuex.Store options)
	  this.register([], rawRootModule, false);
	};

	ModuleCollection.prototype.get = function get(path) {
	  return path.reduce(function (module, key) {
	    return module.getChild(key);
	  }, this.root);
	};

	ModuleCollection.prototype.getNamespace = function getNamespace(path) {
	  var module = this.root;
	  return path.reduce(function (namespace, key) {
	    module = module.getChild(key);
	    return namespace + (module.namespaced ? key + '/' : '');
	  }, '');
	};

	ModuleCollection.prototype.update = function update$1(rawRootModule) {
	  update([], this.root, rawRootModule);
	};

	ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
	  var this$1 = this;
	  if (runtime === void 0) runtime = true;

	  if (process.env.NODE_ENV !== 'production') {
	    assertRawModule(path, rawModule);
	  }

	  var newModule = new Module(rawModule, runtime);
	  if (path.length === 0) {
	    this.root = newModule;
	  } else {
	    var parent = this.get(path.slice(0, -1));
	    parent.addChild(path[path.length - 1], newModule);
	  }

	  // register nested modules
	  if (rawModule.modules) {
	    forEachValue(rawModule.modules, function (rawChildModule, key) {
	      this$1.register(path.concat(key), rawChildModule, runtime);
	    });
	  }
	};

	ModuleCollection.prototype.unregister = function unregister(path) {
	  var parent = this.get(path.slice(0, -1));
	  var key = path[path.length - 1];
	  if (!parent.getChild(key).runtime) {
	    return;
	  }

	  parent.removeChild(key);
	};

	function update(path, targetModule, newModule) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertRawModule(path, newModule);
	  }

	  // update target module
	  targetModule.update(newModule);

	  // update nested modules
	  if (newModule.modules) {
	    for (var key in newModule.modules) {
	      if (!targetModule.getChild(key)) {
	        if (process.env.NODE_ENV !== 'production') {
	          console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + 'manual reload is needed');
	        }
	        return;
	      }
	      update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
	    }
	  }
	}

	var functionAssert = {
	  assert: function assert(value) {
	    return typeof value === 'function';
	  },
	  expected: 'function'
	};

	var objectAssert = {
	  assert: function assert(value) {
	    return typeof value === 'function' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.handler === 'function';
	  },
	  expected: 'function or object with "handler" function'
	};

	var assertTypes = {
	  getters: functionAssert,
	  mutations: functionAssert,
	  actions: objectAssert
	};

	function assertRawModule(path, rawModule) {
	  Object.keys(assertTypes).forEach(function (key) {
	    if (!rawModule[key]) {
	      return;
	    }

	    var assertOptions = assertTypes[key];

	    forEachValue(rawModule[key], function (value, type) {
	      assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
	    });
	  });
	}

	function makeAssertionMessage(path, key, type, value, expected) {
	  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
	  if (path.length > 0) {
	    buf += " in module \"" + path.join('.') + "\"";
	  }
	  buf += " is " + JSON.stringify(value) + ".";
	  return buf;
	}

	var Vue; // bind on install

	var Store = function Store(options) {
	  var this$1 = this;
	  if (options === void 0) options = {};

	  // Auto install if it is not done yet and `window` has `Vue`.
	  // To allow users to avoid auto-installation in some cases,
	  // this code should be placed here. See #731
	  if (!Vue && typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
	    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
	    assert(this instanceof Store, "Store must be called with the new operator.");
	  }

	  var plugins = options.plugins;if (plugins === void 0) plugins = [];
	  var strict = options.strict;if (strict === void 0) strict = false;

	  var state = options.state;if (state === void 0) state = {};
	  if (typeof state === 'function') {
	    state = state() || {};
	  }

	  // store internal state
	  this._committing = false;
	  this._actions = Object.create(null);
	  this._actionSubscribers = [];
	  this._mutations = Object.create(null);
	  this._wrappedGetters = Object.create(null);
	  this._modules = new ModuleCollection(options);
	  this._modulesNamespaceMap = Object.create(null);
	  this._subscribers = [];
	  this._watcherVM = new Vue();

	  // bind commit and dispatch to self
	  var store = this;
	  var ref = this;
	  var dispatch = ref.dispatch;
	  var commit = ref.commit;
	  this.dispatch = function boundDispatch(type, payload) {
	    return dispatch.call(store, type, payload);
	  };
	  this.commit = function boundCommit(type, payload, options) {
	    return commit.call(store, type, payload, options);
	  };

	  // strict mode
	  this.strict = strict;

	  // init root module.
	  // this also recursively registers all sub-modules
	  // and collects all module getters inside this._wrappedGetters
	  installModule(this, state, [], this._modules.root);

	  // initialize the store vm, which is responsible for the reactivity
	  // (also registers _wrappedGetters as computed properties)
	  resetStoreVM(this, state);

	  // apply plugins
	  plugins.forEach(function (plugin) {
	    return plugin(this$1);
	  });

	  if (Vue.config.devtools) {
	    devtoolPlugin(this);
	  }
	};

	var prototypeAccessors = { state: { configurable: true } };

	prototypeAccessors.state.get = function () {
	  return this._vm._data.$$state;
	};

	prototypeAccessors.state.set = function (v) {
	  if (process.env.NODE_ENV !== 'production') {
	    assert(false, "Use store.replaceState() to explicit replace store state.");
	  }
	};

	Store.prototype.commit = function commit(_type, _payload, _options) {
	  var this$1 = this;

	  // check object-style commit
	  var ref = unifyObjectStyle(_type, _payload, _options);
	  var type = ref.type;
	  var payload = ref.payload;
	  var options = ref.options;

	  var mutation = { type: type, payload: payload };
	  var entry = this._mutations[type];
	  if (!entry) {
	    if (process.env.NODE_ENV !== 'production') {
	      console.error("[vuex] unknown mutation type: " + type);
	    }
	    return;
	  }
	  this._withCommit(function () {
	    entry.forEach(function commitIterator(handler) {
	      handler(payload);
	    });
	  });
	  this._subscribers.forEach(function (sub) {
	    return sub(mutation, this$1.state);
	  });

	  if (process.env.NODE_ENV !== 'production' && options && options.silent) {
	    console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + 'Use the filter functionality in the vue-devtools');
	  }
	};

	Store.prototype.dispatch = function dispatch(_type, _payload) {
	  var this$1 = this;

	  // check object-style dispatch
	  var ref = unifyObjectStyle(_type, _payload);
	  var type = ref.type;
	  var payload = ref.payload;

	  var action = { type: type, payload: payload };
	  var entry = this._actions[type];
	  if (!entry) {
	    if (process.env.NODE_ENV !== 'production') {
	      console.error("[vuex] unknown action type: " + type);
	    }
	    return;
	  }

	  this._actionSubscribers.forEach(function (sub) {
	    return sub(action, this$1.state);
	  });

	  return entry.length > 1 ? Promise.all(entry.map(function (handler) {
	    return handler(payload);
	  })) : entry[0](payload);
	};

	Store.prototype.subscribe = function subscribe(fn) {
	  return genericSubscribe(fn, this._subscribers);
	};

	Store.prototype.subscribeAction = function subscribeAction(fn) {
	  return genericSubscribe(fn, this._actionSubscribers);
	};

	Store.prototype.watch = function watch(getter, cb, options) {
	  var this$1 = this;

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof getter === 'function', "store.watch only accepts a function.");
	  }
	  return this._watcherVM.$watch(function () {
	    return getter(this$1.state, this$1.getters);
	  }, cb, options);
	};

	Store.prototype.replaceState = function replaceState(state) {
	  var this$1 = this;

	  this._withCommit(function () {
	    this$1._vm._data.$$state = state;
	  });
	};

	Store.prototype.registerModule = function registerModule(path, rawModule, options) {
	  if (options === void 0) options = {};

	  if (typeof path === 'string') {
	    path = [path];
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(Array.isArray(path), "module path must be a string or an Array.");
	    assert(path.length > 0, 'cannot register the root module by using registerModule.');
	  }

	  this._modules.register(path, rawModule);
	  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
	  // reset store to update getters...
	  resetStoreVM(this, this.state);
	};

	Store.prototype.unregisterModule = function unregisterModule(path) {
	  var this$1 = this;

	  if (typeof path === 'string') {
	    path = [path];
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(Array.isArray(path), "module path must be a string or an Array.");
	  }

	  this._modules.unregister(path);
	  this._withCommit(function () {
	    var parentState = getNestedState(this$1.state, path.slice(0, -1));
	    Vue.delete(parentState, path[path.length - 1]);
	  });
	  resetStore(this);
	};

	Store.prototype.hotUpdate = function hotUpdate(newOptions) {
	  this._modules.update(newOptions);
	  resetStore(this, true);
	};

	Store.prototype._withCommit = function _withCommit(fn) {
	  var committing = this._committing;
	  this._committing = true;
	  fn();
	  this._committing = committing;
	};

	Object.defineProperties(Store.prototype, prototypeAccessors);

	function genericSubscribe(fn, subs) {
	  if (subs.indexOf(fn) < 0) {
	    subs.push(fn);
	  }
	  return function () {
	    var i = subs.indexOf(fn);
	    if (i > -1) {
	      subs.splice(i, 1);
	    }
	  };
	}

	function resetStore(store, hot) {
	  store._actions = Object.create(null);
	  store._mutations = Object.create(null);
	  store._wrappedGetters = Object.create(null);
	  store._modulesNamespaceMap = Object.create(null);
	  var state = store.state;
	  // init all modules
	  installModule(store, state, [], store._modules.root, true);
	  // reset vm
	  resetStoreVM(store, state, hot);
	}

	function resetStoreVM(store, state, hot) {
	  var oldVm = store._vm;

	  // bind store public getters
	  store.getters = {};
	  var wrappedGetters = store._wrappedGetters;
	  var computed = {};
	  forEachValue(wrappedGetters, function (fn, key) {
	    // use computed to leverage its lazy-caching mechanism
	    computed[key] = function () {
	      return fn(store);
	    };
	    Object.defineProperty(store.getters, key, {
	      get: function get() {
	        return store._vm[key];
	      },
	      enumerable: true // for local getters
	    });
	  });

	  // use a Vue instance to store the state tree
	  // suppress warnings just in case the user has added
	  // some funky global mixins
	  var silent = Vue.config.silent;
	  Vue.config.silent = true;
	  store._vm = new Vue({
	    data: {
	      $$state: state
	    },
	    computed: computed
	  });
	  Vue.config.silent = silent;

	  // enable strict mode for new vm
	  if (store.strict) {
	    enableStrictMode(store);
	  }

	  if (oldVm) {
	    if (hot) {
	      // dispatch changes in all subscribed watchers
	      // to force getter re-evaluation for hot reloading.
	      store._withCommit(function () {
	        oldVm._data.$$state = null;
	      });
	    }
	    Vue.nextTick(function () {
	      return oldVm.$destroy();
	    });
	  }
	}

	function installModule(store, rootState, path, module, hot) {
	  var isRoot = !path.length;
	  var namespace = store._modules.getNamespace(path);

	  // register in namespace map
	  if (module.namespaced) {
	    store._modulesNamespaceMap[namespace] = module;
	  }

	  // set state
	  if (!isRoot && !hot) {
	    var parentState = getNestedState(rootState, path.slice(0, -1));
	    var moduleName = path[path.length - 1];
	    store._withCommit(function () {
	      Vue.set(parentState, moduleName, module.state);
	    });
	  }

	  var local = module.context = makeLocalContext(store, namespace, path);

	  module.forEachMutation(function (mutation, key) {
	    var namespacedType = namespace + key;
	    registerMutation(store, namespacedType, mutation, local);
	  });

	  module.forEachAction(function (action, key) {
	    var type = action.root ? key : namespace + key;
	    var handler = action.handler || action;
	    registerAction(store, type, handler, local);
	  });

	  module.forEachGetter(function (getter, key) {
	    var namespacedType = namespace + key;
	    registerGetter(store, namespacedType, getter, local);
	  });

	  module.forEachChild(function (child, key) {
	    installModule(store, rootState, path.concat(key), child, hot);
	  });
	}

	/**
	 * make localized dispatch, commit, getters and state
	 * if there is no namespace, just use root ones
	 */
	function makeLocalContext(store, namespace, path) {
	  var noNamespace = namespace === '';

	  var local = {
	    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options);
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type;
	        if (process.env.NODE_ENV !== 'production' && !store._actions[type]) {
	          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
	          return;
	        }
	      }

	      return store.dispatch(type, payload);
	    },

	    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options);
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type;
	        if (process.env.NODE_ENV !== 'production' && !store._mutations[type]) {
	          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
	          return;
	        }
	      }

	      store.commit(type, payload, options);
	    }
	  };

	  // getters and state object must be gotten lazily
	  // because they will be changed by vm update
	  Object.defineProperties(local, {
	    getters: {
	      get: noNamespace ? function () {
	        return store.getters;
	      } : function () {
	        return makeLocalGetters(store, namespace);
	      }
	    },
	    state: {
	      get: function get() {
	        return getNestedState(store.state, path);
	      }
	    }
	  });

	  return local;
	}

	function makeLocalGetters(store, namespace) {
	  var gettersProxy = {};

	  var splitPos = namespace.length;
	  Object.keys(store.getters).forEach(function (type) {
	    // skip if the target getter is not match this namespace
	    if (type.slice(0, splitPos) !== namespace) {
	      return;
	    }

	    // extract local getter type
	    var localType = type.slice(splitPos);

	    // Add a port to the getters proxy.
	    // Define as getter property because
	    // we do not want to evaluate the getters in this time.
	    Object.defineProperty(gettersProxy, localType, {
	      get: function get() {
	        return store.getters[type];
	      },
	      enumerable: true
	    });
	  });

	  return gettersProxy;
	}

	function registerMutation(store, type, handler, local) {
	  var entry = store._mutations[type] || (store._mutations[type] = []);
	  entry.push(function wrappedMutationHandler(payload) {
	    handler.call(store, local.state, payload);
	  });
	}

	function registerAction(store, type, handler, local) {
	  var entry = store._actions[type] || (store._actions[type] = []);
	  entry.push(function wrappedActionHandler(payload, cb) {
	    var res = handler.call(store, {
	      dispatch: local.dispatch,
	      commit: local.commit,
	      getters: local.getters,
	      state: local.state,
	      rootGetters: store.getters,
	      rootState: store.state
	    }, payload, cb);
	    if (!isPromise(res)) {
	      res = Promise.resolve(res);
	    }
	    if (store._devtoolHook) {
	      return res.catch(function (err) {
	        store._devtoolHook.emit('vuex:error', err);
	        throw err;
	      });
	    } else {
	      return res;
	    }
	  });
	}

	function registerGetter(store, type, rawGetter, local) {
	  if (store._wrappedGetters[type]) {
	    if (process.env.NODE_ENV !== 'production') {
	      console.error("[vuex] duplicate getter key: " + type);
	    }
	    return;
	  }
	  store._wrappedGetters[type] = function wrappedGetter(store) {
	    return rawGetter(local.state, // local state
	    local.getters, // local getters
	    store.state, // root state
	    store.getters // root getters
	    );
	  };
	}

	function enableStrictMode(store) {
	  store._vm.$watch(function () {
	    return this._data.$$state;
	  }, function () {
	    if (process.env.NODE_ENV !== 'production') {
	      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
	    }
	  }, { deep: true, sync: true });
	}

	function getNestedState(state, path) {
	  return path.length ? path.reduce(function (state, key) {
	    return state[key];
	  }, state) : state;
	}

	function unifyObjectStyle(type, payload, options) {
	  if (isObject(type) && type.type) {
	    options = payload;
	    payload = type;
	    type = type.type;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof type === 'string', "Expects string as the type, but found " + (typeof type === 'undefined' ? 'undefined' : _typeof(type)) + ".");
	  }

	  return { type: type, payload: payload, options: options };
	}

	function install(_Vue) {
	  if (Vue && _Vue === Vue) {
	    if (process.env.NODE_ENV !== 'production') {
	      console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');
	    }
	    return;
	  }
	  Vue = _Vue;
	  applyMixin(Vue);
	}

	var mapState = normalizeNamespace(function (namespace, states) {
	  var res = {};
	  normalizeMap(states).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedState() {
	      var state = this.$store.state;
	      var getters = this.$store.getters;
	      if (namespace) {
	        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
	        if (!module) {
	          return;
	        }
	        state = module.context.state;
	        getters = module.context.getters;
	      }
	      return typeof val === 'function' ? val.call(this, state, getters) : state[val];
	    };
	    // mark vuex getter for devtools
	    res[key].vuex = true;
	  });
	  return res;
	});

	var mapMutations = normalizeNamespace(function (namespace, mutations) {
	  var res = {};
	  normalizeMap(mutations).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedMutation() {
	      var args = [],
	          len = arguments.length;
	      while (len--) {
	        args[len] = arguments[len];
	      }var commit = this.$store.commit;
	      if (namespace) {
	        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
	        if (!module) {
	          return;
	        }
	        commit = module.context.commit;
	      }
	      return typeof val === 'function' ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
	    };
	  });
	  return res;
	});

	var mapGetters = normalizeNamespace(function (namespace, getters) {
	  var res = {};
	  normalizeMap(getters).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedGetter() {
	      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
	        return;
	      }
	      if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
	        console.error("[vuex] unknown getter: " + val);
	        return;
	      }
	      return this.$store.getters[val];
	    };
	    // mark vuex getter for devtools
	    res[key].vuex = true;
	  });
	  return res;
	});

	var mapActions = normalizeNamespace(function (namespace, actions) {
	  var res = {};
	  normalizeMap(actions).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedAction() {
	      var args = [],
	          len = arguments.length;
	      while (len--) {
	        args[len] = arguments[len];
	      }var dispatch = this.$store.dispatch;
	      if (namespace) {
	        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
	        if (!module) {
	          return;
	        }
	        dispatch = module.context.dispatch;
	      }
	      return typeof val === 'function' ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
	    };
	  });
	  return res;
	});

	var createNamespacedHelpers = function createNamespacedHelpers(namespace) {
	  return {
	    mapState: mapState.bind(null, namespace),
	    mapGetters: mapGetters.bind(null, namespace),
	    mapMutations: mapMutations.bind(null, namespace),
	    mapActions: mapActions.bind(null, namespace)
	  };
	};

	function normalizeMap(map) {
	  return Array.isArray(map) ? map.map(function (key) {
	    return { key: key, val: key };
	  }) : Object.keys(map).map(function (key) {
	    return { key: key, val: map[key] };
	  });
	}

	function normalizeNamespace(fn) {
	  return function (namespace, map) {
	    if (typeof namespace !== 'string') {
	      map = namespace;
	      namespace = '';
	    } else if (namespace.charAt(namespace.length - 1) !== '/') {
	      namespace += '/';
	    }
	    return fn(namespace, map);
	  };
	}

	function getModuleByNamespace(store, helper, namespace) {
	  var module = store._modulesNamespaceMap[namespace];
	  if (process.env.NODE_ENV !== 'production' && !module) {
	    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
	  }
	  return module;
	}

	var index = {
	  Store: Store,
	  install: install,
	  version: '2.5.0',
	  mapState: mapState,
	  mapMutations: mapMutations,
	  mapGetters: mapGetters,
	  mapActions: mapActions,
	  createNamespacedHelpers: createNamespacedHelpers
	};

	module.exports = index;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchList = fetchList;
	exports.searchList = searchList;

	var _fetch = __webpack_require__(9);

	var _mutationsName = __webpack_require__(10);

	var mutationsName = _interopRequireWildcard(_mutationsName);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function fetchList(_ref, _ref2) {
	    var commit = _ref.commit,
	        dispatch = _ref.dispatch,
	        state = _ref.state;
	    var type = _ref2.type,
	        page = _ref2.page;

	    return (0, _fetch.fetch2)(type, page).then(function (items) {
	        return commit(mutationsName.SET_LIST, { type: type, page: page, items: items });
	    });
	}

	function searchList(_ref3, _ref4) {
	    var commit = _ref3.commit,
	        dispatch = _ref3.dispatch,
	        state = _ref3.state;
	    var keyWord = _ref4.keyWord,
	        page = _ref4.page;

	    return (0, _fetch.search)(keyWord, page).then(function (items) {
	        return commit(mutationsName.SET_SEARCH_RESULT, { keyWord: keyWord, page: page, items: items });
	    });
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetch3 = fetch3;
	exports.fetch = fetch;
	exports.search = search;
	exports.fetch2 = fetch2;
	var stream = weex.requireModule('stream');

	//const baseURL = 'https://gitee.com/masonliu/MockData/raw/master/MoviesExample.json'
	var baseURL = 'https://www.baidu.com';
	function fetch3() {
	    return new Promise(function (resolve, reject) {
	        stream.fetch({
	            method: 'GET',
	            //url: `${baseURL}/${path}`,
	            url: baseURL,
	            type: 'json'
	        }, function (response) {
	            //console.log('----------> response.status: ' + response.status)
	            if (response.status == 200) {

	                // var el = weex.document.createElement( 'html' );
	                // el.innerHTML = "<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><a href='test1'>test02</a><a href='test2'>test03</a></body></html>";
	                // console.log('----------> response.status: ' + el.getElementsByTagName( 'a' ).length)
	                //
	                //

	                try {
	                    var aa = response.data.match(/vod_list[\s\S]*?ul/);
	                    console.log("ssss" + aa);

	                    var tmp = find(response.data, /vod_list[\s\S]*?ul/, 0, 0);
	                    var tmp2 = find(tmp, /<li>[\s\S]*?<\/li>/g, 0, 0);
	                    console.log(tmp);
	                } catch (e) {
	                    console.log(e + "123");
	                    return "";
	                }

	                resolve(response.data);
	            } else {
	                reject(response);
	            }
	        }, function () {});
	    });
	}

	function find(source, regExp, start, end) {
	    try {
	        var find = source.match(regExp)[0];
	        return find.substring(start, find.length - end);
	    } catch (e) {
	        return "";
	    }
	}

	function fetch(type, page) {
	    return new Promise(function (resolve, reject) {
	        var host = "http://d.aaccy.com";
	        stream.fetch({
	            timeout: 30000,
	            method: 'GET',
	            url: host + '/vod-list-id-' + type + '-pg-' + page + '-order--by-hits-class-0-year-0-letter--area--lang-.html',
	            type: 'html',
	            headers: {
	                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
	                //"Accept-Encoding":"gzip, deflate",
	                "Accept-Language": "en-US,en;q=0.9,de;q=0.8,zh-CN;q=0.7,zh-TW;q=0.6,zh;q=0.5",
	                "Cache-Control": "max-age=0",
	                "Connection": "keep-alive",
	                "Cookie": "Hm_lvt_2b18c505a9d15bd467f33b53d2edd9b9=1516955381; Hm_lpvt_2b18c505a9d15bd467f33b53d2edd9b9=1516955381",
	                "Host": "d.aaccy.com",
	                "Upgrade-Insecure-Requests": "1",
	                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
	            }
	        }, function (response) {
	            //console.log('----------> response.status: ' + response.data)
	            if (response.status == 200) {
	                try {
	                    var array = [];
	                    var tmp = find(response.data, /vod_list[\s\S]*?ul/, 0, 0);
	                    tmp.match(/<li>[\s\S]*?<\/li>/g).forEach(function (element) {
	                        var object = new Object();
	                        var score = find(element, /class="score">[\s\S]*?</, 14, 1);
	                        var status = find(element, /class="title">[\s\S]*?</, 14, 1);
	                        var titleTmp = find(element, /<h2>[\s\S]*?<\/h2>/, 4, 5);
	                        var title = find(titleTmp, />[\s\S]*?</, 1, 1);
	                        var url = host + find(titleTmp, /href="[\s\S]*?"/, 6, 1);
	                        var zhuyan = find(element, /<p>[\s\S]*?<\/p>/, 3, 4);
	                        var img = "http:" + find(element, /data-original="[\s\S]*?"/, 15, 1);
	                        object.score = score;
	                        object.status = status;
	                        object.title = title;
	                        object.url = url;
	                        object.zhuyan = zhuyan;
	                        object.img = img;
	                        array.push(object);
	                    });
	                    console.log('----------> response.status: ' + array.length);
	                    resolve(array);
	                } catch (e) {
	                    reject(response);
	                }
	            } else {
	                reject(response);
	            }
	        }, function () {});
	    });
	}

	function search(keyWord, page) {
	    return new Promise(function (resolve, reject) {
	        var host = "http://digua.masonliu.com/api/notToken";
	        stream.fetch({
	            timeout: 30000,
	            method: 'GET',
	            url: host + '?type=-1&keyWord=' + encodeURIComponent(keyWord) + '&page=' + page,
	            type: 'json'
	        }, function (response) {
	            if (response.status == 200) {
	                try {
	                    resolve(response.data.data);
	                } catch (e) {
	                    reject(response);
	                }
	            } else {
	                reject(response);
	            }
	        }, function () {});
	    });
	}

	function fetch2(type, page) {
	    return new Promise(function (resolve, reject) {
	        var host = "http://digua.masonliu.com/api/notToken";
	        stream.fetch({
	            timeout: 30000,
	            method: 'GET',
	            url: host + '?type=' + type + '&page=' + page,
	            type: 'json'
	        }, function (response) {
	            if (response.status == 200) {
	                try {
	                    resolve(response.data.data);
	                } catch (e) {
	                    reject(response);
	                }
	            } else {
	                reject(response);
	            }
	        }, function () {});
	    });
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SET_LIST = exports.SET_LIST = 'SET_LIST';
	var SET_SEARCH_RESULT = exports.SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mutationsFun;

	var _mutationsName = __webpack_require__(10);

	var mutationsName = _interopRequireWildcard(_mutationsName);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var mutationsFun = (_mutationsFun = {}, _defineProperty(_mutationsFun, mutationsName.SET_LIST, function (state, _ref) {
	    var type = _ref.type,
	        page = _ref.page,
	        items = _ref.items;

	    var key = "type" + type;
	    if (page == 1) {
	        state[key] = items;
	    } else {
	        state[key].push.apply(state[key], items);
	    }
	    console.log("ssssss1 total:" + key + "------" + state[key].length);
	}), _defineProperty(_mutationsFun, mutationsName.SET_SEARCH_RESULT, function (state, _ref2) {
	    var keyWord = _ref2.keyWord,
	        page = _ref2.page,
	        items = _ref2.items;

	    if (page == 1) {
	        state.searchResult = items;
	    } else {
	        state.searchResult.push.apply(state.searchResult, items);
	    }
	    console.log("ssssss1 total:" + key + "------" + state.searchResult.length);
	}), _mutationsFun);
	exports.default = mutationsFun;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getListData = getListData;
	function getListData(state) {
	    //state.users.total = 1;
	    return state.users;
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var states = exports.states = {
	    type1: [],
	    type2: [],
	    type4: [],
	    type7: [],
	    searchResult: []
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * 框架中常用的工具方法
	 */
	var modal = weex.requireModule('modal');
	var animation = weex.requireModule('animation');
	var navigator = weex.requireModule('navigator');
	var navigatorEx = weex.requireModule("NavigatorExModule");
	var stream = weex.requireModule('stream');

	var buiweex = {
	    //components下的组件
	    buiActionSheet: __webpack_require__(15),
	    buiButton: __webpack_require__(19),
	    buiCheckbox: __webpack_require__(23),
	    buiDialog: __webpack_require__(27),
	    buiDropdown: __webpack_require__(31),
	    buiHeader: __webpack_require__(35),
	    buiIcon: __webpack_require__(39),
	    buiImage: __webpack_require__(47),
	    buiLazyRender: __webpack_require__(50),
	    buiLoad: __webpack_require__(54),
	    buiMask: __webpack_require__(58),
	    buiPanel: __webpack_require__(62),
	    buiRadio: __webpack_require__(66),
	    buiSearchbarCenter: __webpack_require__(70),
	    buiSearchbarLeft: __webpack_require__(75),
	    buiSliderBar: __webpack_require__(80),
	    buiSwitch: __webpack_require__(84),
	    buiTabbar: __webpack_require__(88),
	    buiTabbarItem: __webpack_require__(91),
	    buiTabbarItemA: __webpack_require__(95),
	    buiTabbarScroll: __webpack_require__(98),
	    buiTabbarScrollItem: __webpack_require__(101),
	    buiTip: __webpack_require__(106),
	    buiVideo: __webpack_require__(110),
	    buiContent: __webpack_require__(113),
	    buiContentScroll: __webpack_require__(116),
	    buiImageSlider: __webpack_require__(119),
	    buiCell: __webpack_require__(123),
	    buiPopup: __webpack_require__(127),
	    buiNumberInput: __webpack_require__(131),
	    buiRichcell: __webpack_require__(135),
	    /**
	     * 吐司信息
	     * @param msg {string} 提示文本
	     */
	    toast: function toast(msg) {
	        var type = typeof msg === 'undefined' ? 'undefined' : _typeof(msg);
	        if (type == 'object') {
	            msg = type;
	        }
	        if (type == 'boolean') {
	            msg = msg == true ? 'true' : 'false';
	        }
	        modal.toast({
	            message: msg.toString() || "",
	            duration: 0.4
	        });
	    },


	    /**
	     * 弹出警告
	     * @param msg {string} 提示文本
	     * @param callback {function} 点击确定后回调函数
	     * @param option {object} 参数
	     * @param option.okTitle {string} 确定按钮文本
	     */
	    alert: function alert(msg, callback, option) {
	        var okTitle = "确定";
	        if (option) {
	            if (option.okTitle) okTitle = option.okTitle;
	        }
	        var type = typeof msg === 'undefined' ? 'undefined' : _typeof(msg);
	        if (type == 'object') {
	            msg = type;
	        }
	        if (type == 'boolean') {
	            msg = msg == true ? 'true' : 'false';
	        }
	        modal.alert({
	            message: msg.toString() || "",
	            duration: 0.4,
	            okTitle: okTitle
	        }, function (value) {
	            callback && callback(value);
	        });
	    },


	    /**
	     * 弹出确认框
	     * @param msg {string} 提示文本
	     * @param callback {function} 点击确定/取消后回调函数
	     * @param option {object} 参数
	     * @param option.okTitle {string} 确定按钮文本
	     * @param option.cancelTitle {string} 取消按钮文本
	     */
	    confirm: function confirm(msg, callback, option) {
	        var okTitle = "确定",
	            cancelTitle = "取消";
	        if (option) {
	            if (option.okTitle) okTitle = option.okTitle;
	            if (option.cancelTitle) cancelTitle = option.cancelTitle;
	        }
	        modal.confirm({
	            message: msg || "",
	            duration: 0.4,
	            okTitle: okTitle,
	            cancelTitle: cancelTitle
	        }, function (value) {
	            callback && callback(value);
	        });
	    },


	    /**
	     * 显示一个组件（可设置动画）
	     * @param params
	     * @param callback
	     */
	    show: function show(params, callback) {
	        var el = params.id;
	        if (!el) {
	            return;
	        }
	        var duration = params.duration;
	        var transform = params.transform || 'translate(0, 0)';
	        var transformOrigin = params.transformOrigin || 'center center';
	        var timingFunction = params.timingFunction || 'ease';

	        animation.transition(el, {
	            styles: {
	                opacity: '1',
	                transform: transform,
	                transformOrigin: transformOrigin
	            },
	            duration: duration || 0,
	            timingFunction: timingFunction,
	            delay: 0
	        }, function () {
	            callback && callback();
	        });
	    },


	    /**
	     * 隐藏一个组件(可设置动画)
	     * @param params
	     * @param callback
	     */
	    hide: function hide(params, callback) {
	        var el = params.id;
	        if (!el) {
	            return;
	        }
	        var duration = params.duration;
	        var transform = params.transform || 'translate(0, 0)';
	        var transformOrigin = params.transformOrigin || 'center center';
	        var timingFunction = params.timingFunction || 'ease';
	        animation.transition(el, {
	            styles: {
	                opacity: '0',
	                transform: transform,
	                transformOrigin: transformOrigin
	            },
	            duration: duration || 0,
	            timingFunction: timingFunction,
	            delay: 0
	        }, function () {
	            callback && callback();
	        });
	    },


	    /**
	     * 获取当前上下文路径
	     * @return {string} 当前上下文路径
	     */
	    getContextPath: function getContextPath() {
	        var url = void 0;
	        var bundleUrl = weex.config.bundleUrl;
	        url = bundleUrl.split('/').slice(0, -1).join('/');
	        return url;
	    },


	    /**
	     * 加载一个新的页面(bundleJS)
	     * @method push
	     * @param url {string} bundle js 地址
	     * @param params {object} 传递的参数
	     */
	    push: function push(url, params) {
	        var paramsStr = "";
	        if (params) {
	            for (var key in params) {
	                paramsStr += key + "=" + encodeURIComponent(params[key]) + "&";
	            }
	        }
	        if (url.indexOf('?') < 0) {
	            url += "?";
	        }
	        url += paramsStr;
	        //link平台中使用navigatorEx,debugtool中使用navigator
	        try {
	            navigatorEx.push(url);
	        } catch (ex) {
	            navigator.push({
	                url: url,
	                animated: 'true'
	            }, function (e) {});
	        }
	    },


	    /**
	     * 返回上个页面
	     * @method pop
	     */
	    pop: function pop() {
	        navigator.pop({
	            animated: 'true'
	        }, function (e) {});
	    },


	    /**
	     * 获取页面参数(bundleJS),从url查询参数中获取
	     * @method getPageParams
	     * @return {object} 返回json数据
	     */
	    getPageParams: function getPageParams() {
	        var params = {};
	        var url = weex.config.bundleUrl;
	        var index = url.indexOf("?");
	        if (index > 0) {
	            var query = url.substring(index + 1);
	            var temp = query.split('&');
	            var key = void 0,
	                value = void 0;
	            for (var p in temp) {
	                if (temp[p]) {
	                    key = temp[p].split('=')[0];
	                    value = temp[p].split('=')[1];
	                    params[key] = decodeURIComponent(value);
	                }
	            }
	        }
	        return params;
	    },


	    /**
	     * 发送POST请求
	     * @method post
	     * @param params {object} 请求参数
	     * @param params.url {string} 请求的URL
	     * @param params.headers {object} 请求头, Content-Type默认值是 application/x-www-form-urlencoded
	     * @param params.type {string} 响应类型, json(默认),text
	     * @param params.data {object} 请求数据，带到 HTTP body中
	     * @return {Promise.<TResult>} 成功: resolve(data, status, statusText), 失败: reject(status, statusText)
	     */
	    post: function post(params) {
	        var url = params.url || "";
	        var headers = params.headers || {};
	        var data = params.data;
	        var type = params.type || "json";
	        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == "object") {
	            data = JSON.stringify(data);
	        }
	        // headers["Content-Type"]="application/x-www-form-urlencoded";
	        // headers["Content-Type"]="application/json";
	        return new Promise(function (resolve, reject) {
	            stream.fetch({
	                method: "POST",
	                type: type,
	                url: url,
	                headers: headers,
	                body: data
	            }, function (res) {
	                if (res.ok) {
	                    resolve(res.data, res.status, res.statusText);
	                } else {
	                    reject(res.status, res.statusText);
	                }
	            });
	        });
	    },


	    /**
	     * 发送GET请求
	     * @method get
	     * @param params {object} 请求参数
	     * @param params.url {string} 请求的URL
	     * @param params.headers {object} 请求头
	     * @param params.type {string} 响应类型, json(默认),text
	     * @param params.data {object} 请求数据，自动拼接到url后面
	     * @return {Promise.<TResult>} 成功: resolve(data, status, statusText), 失败: reject(status, statusText)
	     */
	    get: function get(params) {
	        return new Promise(function (resolve, reject) {
	            var url = params.url || "";
	            var headers = params.headers || {};
	            var data = params.data || {};
	            var type = params.type || "json";
	            if (!url.includes("?")) {
	                url += "?";
	            }
	            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == "object") {
	                for (var key in data) {
	                    url += '&' + key + '=' + encodeURIComponent(data[key]);
	                }
	            }
	            stream.fetch({
	                method: "GET",
	                type: type,
	                url: url,
	                headers: headers
	            }, function (res) {
	                if (res.ok) {
	                    resolve(res.data, res.status, res.statusText);
	                } else {
	                    reject(res.status, res.statusText);
	                }
	            });
	        });
	    },


	    /**
	     * 判断是否是 iphone x
	     * @return {*|boolean}
	     */
	    isIPhoneX: function isIPhoneX() {
	        return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
	    },
	    install: function install(Vue, options) {
	        var that = buiweex;
	        Vue.mixin({
	            components: {
	                'bui-header': that.buiHeader,
	                'bui-icon': that.buiIcon,
	                'bui-button': that.buiButton,
	                'bui-image': that.buiImage,
	                'bui-actionsheet': that.buiActionSheet,
	                'bui-checkbox': that.buiCheckbox,
	                'bui-dialog': that.buiDialog,
	                'bui-dropdown': that.buiDropdown,
	                'bui-lazy-render': that.buiLazyRender,
	                'bui-load': that.buiLoad,
	                'bui-mask': that.buiMask,
	                'bui-panel': that.buiPanel,
	                'bui-radio': that.buiRadio,
	                'bui-searchbar-center': that.buiSearchbarCenter,
	                'bui-searchbar-left': that.buiSearchbarLeft,
	                'bui-slider-bar': that.buiSliderBar,
	                'bui-switch': that.buiSwitch,
	                'bui-tabbar': that.buiTabbar,
	                'bui-tabbar-item': that.buiTabbarItem,
	                'bui-tabbar-item-a': that.buiTabbarItemA,
	                'bui-tabbar-scroll': that.buiTabbarScroll,
	                'bui-tabbar-scroll-item': that.buiTabbarScrollItem,
	                'bui-tip': that.buiTip,
	                'bui-video': that.buiVideo,
	                'bui-content': that.buiContent,
	                'bui-content-scroll': that.buiContentScroll,
	                'bui-image-slider': that.buiImageSlider,
	                'bui-cell': that.buiCell,
	                'bui-popup': that.buiPopup,
	                'bui-number-input': that.buiNumberInput,
	                'bui-richcell': that.buiRichcell
	            }
	        });

	        Vue.prototype.$alert = that.alert;

	        Vue.prototype.$toast = that.toast;

	        Vue.prototype.$confirm = that.confirm;

	        Vue.prototype.$show = that.show;

	        Vue.prototype.$hide = that.hide;

	        Vue.prototype.$getContextPath = that.getContextPath;

	        Vue.prototype.$push = that.push;

	        Vue.prototype.$pop = that.pop;

	        Vue.prototype.$getPageParams = that.getPageParams;

	        Vue.prototype.$post = that.post;

	        Vue.prototype.$get = that.get;

	        Vue.prototype.$isIPhoneX = that.isIPhoneX;
	    }
	};

	module.exports = buiweex;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(16)
	)

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(18)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-actionsheet.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-361f5318"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-actionsheet-box": {
	    "position": "fixed",
	    "left": 0,
	    "right": 0,
	    "margin": 50,
	    "marginTop": 0,
	    "flexDirection": "column",
	    "overflow": "hidden"
	  },
	  "bui-actionsheet-top": {
	    "borderRadius": 10,
	    "overflow": "hidden",
	    "backgroundColor": "#ffffff"
	  },
	  "bui-actionsheet-bottom": {
	    "marginTop": 15
	  },
	  "bui-actionsheet-title": {
	    "padding": 30,
	    "textAlign": "center",
	    "fontSize": 28,
	    "color": "#9ea7b4"
	  },
	  "bui-actionsheet-content": {
	    "flexDirection": "column",
	    "flex": 1
	  },
	  "bui-actionsheet-list": {
	    "borderTopWidth": 1,
	    "borderTopColor": "#d7dde4",
	    "padding": 30,
	    "textAlign": "center",
	    "fontSize": 34,
	    "color": "#3399ff",
	    "backgroundColor:active": "#f5f5f5"
	  },
	  "bui-actionsheet-btn": {
	    "fontSize": 34,
	    "color": "#3399ff",
	    "fontWeight": "bold",
	    "backgroundColor": "#ffffff",
	    "padding": 30,
	    "textAlign": "center",
	    "borderRadius": 10,
	    "backgroundColor:active": "#f5f5f5"
	  }
	}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	module.exports = {
	    props: {
	        title: {
	            default: "请选择操作"
	        },
	        items: {
	            type: Array
	        },
	        button: {
	            default: "取消"
	        },
	        value: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            visible: false
	        };
	    },

	    watch: {
	        value: function value(val) {
	            this.visible = val;
	        },
	        visible: function visible(val) {
	            this.$emit('input', val);
	        }
	    },
	    mounted: function mounted() {
	        if (this.value) {
	            this.visible = true;
	        }
	    },

	    computed: {
	        bottom: function bottom() {
	            return (this.items.length + 1) * 100 + 80;
	        }
	    },
	    methods: {
	        show: function show() {
	            var _this = this;

	            setTimeout(function () {
	                _this._open();
	            }, 50);
	        },

	        _animationFn: function _animationFn(translate, fn) {
	            var el = this.$refs.actionsheetBox;
	            animation.transition(el, {
	                styles: {
	                    transform: translate,
	                    transformOrigin: 'center center'
	                },
	                duration: 200,
	                timingFunction: "ease-in",
	                delay: 0
	            }, function () {
	                fn && fn();
	            });
	        },
	        _open: function _open() {
	            var translate = 'translate(0px, -' + (this.bottom + 20) + 'px, 0px)';
	            this._animationFn(translate);
	        },
	        _maskClick: function _maskClick() {
	            var _this2 = this;

	            var translate = 'translate(0px, ' + (this.bottom + 20) + 'px, 0px)';
	            this._animationFn(translate, function () {
	                _this2.visible = false;
	                _this2.$emit("maskClick");
	            });
	        },
	        _itemClick: function _itemClick(item) {
	            var _this3 = this;

	            var translate = 'translate(0px, ' + (this.bottom + 20) + 'px, 0px)';
	            this._animationFn(translate, function () {
	                _this3.visible = false;
	                _this3.$emit('itemClick', item);
	            });
	        },
	        _btnClick: function _btnClick() {
	            var _this4 = this;

	            var translate = 'translate(0px, ' + (this.bottom + 20) + 'px, 0px)';
	            this._animationFn(translate, function () {
	                _this4.visible = false;
	                _this4.$emit('cancel');
	            });
	        }
	    }
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.visible) ? _c('div', {
	    attrs: {
	      "value": _vm.value
	    }
	  }, [_c('bui-mask', {
	    on: {
	      "click": _vm._maskClick
	    }
	  }), _c('div', {
	    ref: "actionsheetBox",
	    staticClass: ["bui-actionsheet-box"],
	    style: {
	      'bottom': '-' + _vm.bottom + 'px'
	    }
	  }, [_c('div', {
	    staticClass: ["bui-actionsheet-top"]
	  }, [(_vm.title) ? _c('text', {
	    staticClass: ["bui-actionsheet-title"]
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _c('div', {
	    staticClass: ["bui-actionsheet-content"]
	  }, _vm._l((_vm.items), function(item) {
	    return _c('text', {
	      staticClass: ["bui-actionsheet-list"],
	      on: {
	        "click": function($event) {
	          _vm._itemClick(item)
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _c('div', {
	    staticClass: ["bui-actionsheet-bottom"]
	  }, [_c('text', {
	    staticClass: ["bui-actionsheet-btn"],
	    on: {
	      "click": _vm._btnClick
	    }
	  }, [_vm._v(_vm._s(_vm.button))])])])], 1) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(20)
	)

	/* script */
	__vue_exports__ = __webpack_require__(21)

	/* template */
	var __vue_template__ = __webpack_require__(22)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-fdee3512"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = {
	  "btn-block": {
	    "width": 700,
	    "height": 88,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 10,
	    "flexDirection": "row"
	  },
	  "btn-text": {
	    "textOverflow": "ellipsis",
	    "lines": 1,
	    "fontSize": 36,
	    "color": "#FFFFFF"
	  }
	}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var STYLE_MAP = {
	    default: {
	        backgroundColor: '#FFFFFF',
	        borderColor: '#A5A5A5',
	        borderWidth: '1px'
	    },
	    text: {
	        borderWidth: '0px'
	    },
	    highlight: {
	        backgroundColor: '#FFFFFF',
	        borderColor: '#EE9900',
	        borderWidth: '1px'
	    },
	    primary: {
	        backgroundColor: '#3399ff'
	    },
	    success: {
	        backgroundColor: '#00cc66'
	    },
	    warning: {
	        backgroundColor: '#ff9900'
	    },
	    danger: {
	        backgroundColor: '#ff4e24'
	    }
	};

	var TEXT_STYLE_MAP = {
	    default: {
	        color: '#3D3D3D'
	    },
	    text: {
	        color: '#3D3D3D'
	    },
	    highlight: {
	        color: '#EE9900'
	    },
	    primary: {
	        color: '#ffffff'
	    },
	    success: {
	        color: '#ffffff'
	    },
	    warning: {
	        color: '#ffffff'
	    },
	    danger: {
	        color: '#ffffff'
	    }
	};

	module.exports = {
	    props: {
	        value: {
	            type: String,
	            default: ''
	        },
	        type: {
	            type: String,
	            default: 'default'
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        btnStyle: Object,
	        textStyle: Object
	    },
	    computed: {
	        exBtnStyle: function exBtnStyle() {
	            var type = this.type,
	                disabled = this.disabled,
	                btnStyle = this.btnStyle;

	            var exBtnStyle = Object.assign(STYLE_MAP[type], btnStyle);
	            return disabled ? Object.assign(exBtnStyle, {
	                backgroundColor: 'rgba(0, 0, 0, 0.1)',
	                borderWidth: 0
	            }) : exBtnStyle;
	        },
	        exTextStyle: function exTextStyle() {
	            var type = this.type,
	                disabled = this.disabled,
	                textStyle = this.textStyle;

	            var exTextStyle = Object.assign(TEXT_STYLE_MAP[type], textStyle);
	            return disabled ? Object.assign(exTextStyle, { color: '#ffffff' }) : exTextStyle;
	        }
	    },
	    methods: {
	        _click: function _click(e) {
	            if (!this.disabled) this.$emit('click', e);
	        },
	        _longPress: function _longPress(e) {
	            if (!this.disabled) this.$emit('longpress', e);
	        }
	    }
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["btn-block"],
	    style: _vm.exBtnStyle,
	    on: {
	      "longpress": _vm._longPress,
	      "click": _vm._click
	    }
	  }, [_vm._t("default"), (_vm.value != '') ? _c('text', {
	    staticClass: ["btn-text"],
	    style: _vm.exTextStyle,
	    attrs: {
	      "value": _vm.value
	    }
	  }) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(24)
	)

	/* script */
	__vue_exports__ = __webpack_require__(25)

	/* template */
	var __vue_template__ = __webpack_require__(26)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-checkbox.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0638b248"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = {
	  "radio-box": {
	    "alignItems": "center",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 5,
	    "marginRight": 40,
	    "paddingRight": 20
	  },
	  "radio-label": {
	    "fontSize": 30,
	    "marginLeft": 5
	  },
	  "disabled": {
	    "opacity": 0.5
	  },
	  "switch-box": {
	    "height": 80
	  },
	  "switch": {
	    "position": "absolute",
	    "right": 0,
	    "top": 0
	  },
	  "switch-label": {
	    "fontSize": 30,
	    "position": "absolute",
	    "top": 10,
	    "left": 0
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "flex-fluid": {
	    "flexWrap": "wrap"
	  }
	}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "direction": {
	            type: String,
	            default: 'horizontal' // horizontal | vertical
	        },
	        "items": {
	            type: Array,
	            default: []
	        },
	        "fontSize": {
	            type: String,
	            default: "32px"
	        },
	        "iconSize": {
	            type: String,
	            default: "48px"
	        },
	        "selectedColor": {
	            type: String,
	            default: "#00cc66"
	        },
	        "unSelectedColor": {
	            type: String,
	            default: "#9ea7b4"
	        }
	    },
	    computed: {
	        changeDirection: function changeDirection() {
	            return this.direction == "horizontal" ? "flex-row" : "flex-column";
	        }
	    },
	    data: function data() {
	        return {
	            selectItems: [],
	            checkboxItems: []
	        };
	    },

	    methods: {
	        select: function select(v) {
	            var self = this;
	            v.select = !v.select;

	            //选择组数据
	            var newAry = [];
	            self.checkboxItems.forEach(function (val, i) {
	                if (val.select) newAry.push(val);
	            });
	            this.$emit("change", v, newAry);
	        }
	    },
	    created: function created() {
	        this.checkboxItems = JSON.parse(JSON.stringify(this.items));
	    }
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.changeDirection, 'flex-fluid']
	  }, _vm._l((_vm.checkboxItems), function(v) {
	    return _c('div', {
	      staticClass: ["radio-box", "flex-row"],
	      class: [v.disabled ? 'disabled' : ''],
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    }, [(v.select) ? _c('div', [_c('bui-icon', {
	      attrs: {
	        "size": _vm.iconSize,
	        "name": "ion-ios-checkmark",
	        "color": _vm.selectedColor
	      },
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    })], 1) : _vm._e(), (!v.select) ? _c('div', [_c('bui-icon', {
	      attrs: {
	        "size": _vm.iconSize,
	        "name": "ion-ios-checkmark-outline",
	        "color": _vm.unSelectedColor
	      },
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    })], 1) : _vm._e(), _c('text', {
	      staticClass: ["radio-label"],
	      style: {
	        'font-size': _vm.fontSize
	      }
	    }, [_vm._v(_vm._s(v.title))])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(28)
	)

	/* script */
	__vue_exports__ = __webpack_require__(29)

	/* template */
	var __vue_template__ = __webpack_require__(30)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-dialog.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-191bc08d"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-dialog1": {
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10,
	    "height": 200,
	    "top": 300,
	    "left": 50,
	    "right": 50,
	    "flex": 1
	  },
	  "bui-dialog": {
	    "position": "fixed",
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10,
	    "top": 300,
	    "left": 50,
	    "right": 50
	  },
	  "bui-dialog-title": {
	    "justifyContent": "center",
	    "height": 80,
	    "paddingLeft": 30,
	    "paddingRight": 30
	  },
	  "dialog-title-text": {
	    "color": "#000000",
	    "fontSize": 35
	  },
	  "bui-dialog-content": {
	    "height": 220,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "paddingBottom": 32
	  },
	  "bui-dialog-footer": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 90,
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "#d7dde4"
	  },
	  "dialog-action-text": {
	    "flex": 1,
	    "textAlign": "center",
	    "fontSize": 32,
	    "color": "#3399ff",
	    "borderRightWidth": 1,
	    "borderRightStyle": "solid",
	    "borderRightColor": "#d7dde4",
	    "color:active": "#000000"
	  }
	}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        height: {
	            type: String,
	            default: "200px"
	        },
	        top: {
	            type: String,
	            default: "300px"
	        },
	        title: {
	            type: String,
	            default: "标题"
	        },
	        buttons: {
	            type: String,
	            default: "取消,确定"
	        },
	        value: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            visible: false
	        };
	    },

	    watch: {
	        value: function value(val) {
	            this.visible = val;
	        },
	        visible: function visible(val) {
	            this.$emit('input', val);
	        }
	    },
	    mounted: function mounted() {
	        if (this.value) {
	            this.visible = true;
	        }
	    },

	    computed: {
	        getButtons: function getButtons() {
	            return this.buttons.split(',');
	        }
	    },
	    methods: {
	        _click: function _click(text) {
	            this.$emit("btnClick", text);
	        },
	        _maskClick: function _maskClick() {
	            this.visible = false;
	            this.$emit("maskClick");
	        }
	    }
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.visible) ? _c('div', {
	    attrs: {
	      "value": _vm.value
	    }
	  }, [_c('bui-mask', {
	    on: {
	      "click": _vm._maskClick
	    }
	  }), _c('div', {
	    staticClass: ["bui-dialog"],
	    style: {
	      top: _vm.top
	    }
	  }, [_c('div', {
	    staticClass: ["bui-dialog-title"]
	  }, [_c('text', {
	    staticClass: ["dialog-title-text"]
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["bui-dialog-content"],
	    style: {
	      height: _vm.height
	    }
	  }, [_c('scroller', [_vm._t("default")], 2)]), _c('div', {
	    staticClass: ["bui-dialog-footer"]
	  }, _vm._l((_vm.getButtons), function(btn) {
	    return _c('text', {
	      staticClass: ["dialog-action-text"],
	      on: {
	        "click": function($event) {
	          _vm._click(btn)
	        }
	      }
	    }, [_vm._v(_vm._s(btn))])
	  }))])], 1) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(32)
	)

	/* script */
	__vue_exports__ = __webpack_require__(33)

	/* template */
	var __vue_template__ = __webpack_require__(34)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-dropdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5257f8d4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-dropdown-box": {
	    "position": "fixed",
	    "opacity": 0,
	    "transform": "scale(0.9, 0.9)"
	  },
	  "bui-dropdown-content": {
	    "position": "relative",
	    "marginTop": 40,
	    "borderRadius": 10,
	    "flexDirection": "column",
	    "overflow": "hidden",
	    "padding": 15,
	    "flex": 1
	  },
	  "bui-dropdown-arrow": {
	    "position": "absolute",
	    "top": 1
	  }
	}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	var platform = weex.config.env.platform;
	var colorWhite = "#ffffff";
	module.exports = {
	    data: function data() {
	        return {
	            width: "260px",
	            left: "0px",
	            top: "0px",
	            arrowLeft: "40px",
	            position: {
	                width: '0px',
	                height: '0px',
	                left: '0px',
	                right: '0px'
	            },
	            visible: false
	        };
	    },

	    props: {
	        value: {
	            type: Boolean,
	            default: false
	        },
	        bgColor: {
	            type: String,
	            default: colorWhite
	        },
	        center: {
	            type: Boolean,
	            default: false
	        },
	        autoWidth: {
	            type: Boolean,
	            default: true
	        }
	    },
	    watch: {
	        value: function value(val) {
	            this.visible = val;
	        },
	        visible: function visible(val) {
	            this.$emit('input', val);
	        }
	    },
	    mounted: function mounted() {
	        if (this.value) {
	            this.visible = true;
	        }
	    },

	    methods: {
	        show: function show(event) {
	            var _this = this;

	            this._reset();
	            setTimeout(function () {
	                _this._open(event);
	            }, 50);
	        },
	        _reset: function _reset() {
	            this.width = "260px";
	            this.arrowLeft = "40px";
	        },
	        _open: function _open(event) {
	            var el = this.$refs.dropdownBox;
	            this.position = event.position;
	            //autoWidth默认true，宽度按触发元素宽度自适应，如果控制宽度可设置为false，宽度为260px
	            if (this.autoWidth) {
	                if (this.position.width >= 260) {
	                    this.width = this.position.width;
	                    if (this.center) {
	                        this.arrowLeft = this.position.width / 2 - 20;
	                        this.left = this.position.x;
	                    } else {
	                        if (750 - this.position.x < 260) {
	                            this.left = this.position.x - (260 - (750 - this.position.x)) - 20;
	                            this.arrowLeft = 260 - 80;
	                        } else {
	                            this.left = this.position.x + "px";
	                        }
	                    }
	                } else {
	                    if (this.center) {
	                        this.arrowLeft = 260 / 2 - 20;
	                        this.left = this.position.x - (260 - this.position.width) / 2;
	                    } else {
	                        if (750 - this.position.x < 260) {
	                            this.left = this.position.x - (260 - (750 - this.position.x)) - 20;
	                            this.arrowLeft = 260 - 80;
	                        } else {
	                            this.left = this.position.x + "px";
	                        }
	                    }
	                }
	            } else {
	                if (this.center) {
	                    this.arrowLeft = 260 / 2 - 20;
	                    this.left = this.position.x + this.position.width / 2 - 130;
	                } else {
	                    if (this.position.x == 0) {
	                        this.left = this.position.x + 20;
	                    }
	                    if (750 - this.position.x <= 260) {
	                        this.left = this.position.x - (260 - (750 - this.position.x)) - 20;
	                        this.arrowLeft = 260 - 80;
	                    }
	                }
	            }

	            if (platform == "android") {
	                this.top = this.position.y - 60;
	            } else if (platform == "iOS") {
	                this.top = this.position.y - 20;
	            }

	            var translate = 'translate(0px, ' + parseInt(this.position.height) + 'px)';
	            this._animationFn(el, "1", translate, 'ease-in');
	        },
	        _animationFn: function _animationFn(el, opacity, translate, timing, fn) {
	            animation.transition(el, {
	                styles: {
	                    opacity: opacity,
	                    transform: translate,
	                    transformOrigin: 'center center'
	                },
	                duration: 200,
	                timingFunction: timing,
	                delay: 0
	            }, function () {
	                fn && fn();
	            });
	        },
	        _maskClick: function _maskClick() {
	            var _this2 = this;

	            var el = this.$refs.dropdownBox;
	            var translate = 'scale(0.9, 0.9)';
	            this._animationFn(el, "0", translate, 'ease-out', function () {
	                _this2.visible = false;
	                _this2.$emit("onMaskClick");
	            });
	        }
	    }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.visible) ? _c('div', {
	    staticClass: ["bui-dropdown"],
	    attrs: {
	      "value": _vm.value
	    }
	  }, [_c('bui-mask', {
	    on: {
	      "click": _vm._maskClick
	    }
	  }), _c('div', {
	    ref: "dropdownBox",
	    staticClass: ["bui-dropdown-box"],
	    style: {
	      'left': _vm.left,
	      'top': _vm.top,
	      'width': _vm.width
	    }
	  }, [_c('div', {
	    staticClass: ["bui-dropdown-content"],
	    style: {
	      'background-color': _vm.bgColor
	    }
	  }, [_vm._t("default")], 2), _c('bui-icon', {
	    staticClass: ["bui-dropdown-arrow"],
	    style: {
	      'left': _vm.arrowLeft
	    },
	    attrs: {
	      "name": "ion-arrow-up-b",
	      "size": "60px",
	      "color": _vm.bgColor
	    }
	  })], 1)], 1) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(36)
	)

	/* script */
	__vue_exports__ = __webpack_require__(37)

	/* template */
	var __vue_template__ = __webpack_require__(38)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3cef095c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-header": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "bui-header-left": {
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "flex-start",
	    "paddingLeft": 20
	  },
	  "bui-header-main": {
	    "flex": 2,
	    "flexDirection": "row",
	    "alignContent": "center",
	    "justifyContent": "center"
	  },
	  "bui-header-right": {
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "flex-end",
	    "paddingRight": 20
	  },
	  "bui-header-title": {
	    "fontSize": 34,
	    "textAlign": "center",
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "bui-header-text": {
	    "fontSize": 34,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var defaultItem = {
	    icon: '',
	    icons: '',
	    text: ''
	};
	var platform = weex.config.env.platform.toLowerCase();
	module.exports = {
	    data: function data() {
	        return {
	            activeColor: "#b9c2cf"
	        };
	    },

	    props: {
	        title: {
	            type: String,
	            default: ""
	        },
	        leftItem: {
	            type: Object,
	            default: defaultItem
	        },
	        rightItem: {
	            type: Object,
	            default: defaultItem
	        },
	        textColor: {
	            type: String,
	            default: "#ffffff"
	        },
	        iconColor: {
	            type: String,
	            default: "#ffffff"
	        },
	        iconSize: {
	            type: String,
	            default: "48px"
	        },
	        backgroundColor: {
	            type: String,
	            default: "#4ca4fe"
	        },
	        height: {
	            type: String,
	            default: "90px"
	        },
	        maxTitleWidth: {
	            type: String,
	            default: "400px"
	        }
	    },
	    computed: {
	        iosFixed: function iosFixed() {
	            return platform === "ios";
	        }
	    },
	    methods: {
	        _leftClick: function _leftClick(e) {
	            this.$emit('leftClick', e);
	        },
	        _rightClick: function _rightClick(e) {
	            this.$emit('rightClick', e);
	        },
	        _centerClick: function _centerClick(e) {
	            this.$emit('centerClick', e);
	        }
	    }
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: {
	      'background-color': _vm.backgroundColor
	    }
	  }, [(_vm.iosFixed) ? _c('div', {
	    staticStyle: {
	      height: "40px"
	    }
	  }) : _vm._e(), _c('div', {
	    staticClass: ["bui-header"],
	    style: {
	      'height': _vm.height
	    }
	  }, [_c('div', {
	    staticClass: ["bui-header-left"]
	  }, [(_vm.leftItem.icon || _vm.leftItem.icons) ? _c('bui-icon', {
	    attrs: {
	      "activeColor": _vm.activeColor,
	      "name": _vm.leftItem.icon || _vm.leftItem.icons,
	      "size": _vm.iconSize,
	      "color": _vm.iconColor
	    },
	    on: {
	      "click": function($event) {
	        _vm._leftClick($event)
	      }
	    }
	  }) : _vm._e(), (_vm.leftItem.text) ? _c('text', {
	    staticClass: ["bui-header-text"],
	    style: {
	      'color': _vm.textColor,
	      'color:active': _vm.activeColor,
	      'margin-left': '10px'
	    },
	    attrs: {
	      "value": _vm.leftItem.text
	    },
	    on: {
	      "click": function($event) {
	        _vm._leftClick($event)
	      }
	    }
	  }) : _vm._e(), _vm._t("left")], 2), (!_vm.leftItem) ? _c('div', {
	    staticClass: ["bui-header-left"]
	  }) : _vm._e(), _c('div', {
	    staticClass: ["bui-header-main"]
	  }, [(_vm.title !== '') ? _c('div', {
	    style: {
	      width: _vm.maxTitleWidth
	    }
	  }, [_c('text', {
	    staticClass: ["bui-header-title"],
	    style: {
	      'color': _vm.textColor
	    },
	    attrs: {
	      "value": _vm.title
	    },
	    on: {
	      "click": function($event) {
	        _vm._centerClick($event)
	      }
	    }
	  })]) : _vm._e(), _vm._t("center")], 2), _c('div', {
	    staticClass: ["bui-header-right"]
	  }, [(_vm.rightItem.icon || _vm.rightItem.icons) ? _c('bui-icon', {
	    attrs: {
	      "activeColor": _vm.activeColor,
	      "name": _vm.rightItem.icon || _vm.rightItem.icons,
	      "size": _vm.iconSize,
	      "color": _vm.iconColor
	    },
	    on: {
	      "click": function($event) {
	        _vm._rightClick($event)
	      }
	    }
	  }) : _vm._e(), (_vm.rightItem.text) ? _c('text', {
	    staticClass: ["bui-header-text"],
	    style: {
	      'color': _vm.textColor,
	      'color:active': _vm.activeColor,
	      'margin-left': '10px'
	    },
	    attrs: {
	      "value": _vm.rightItem.text
	    },
	    on: {
	      "click": function($event) {
	        _vm._rightClick($event)
	      }
	    }
	  }) : _vm._e(), _vm._t("right")], 2), (!_vm.rightItem) ? _c('div', {
	    staticClass: ["bui-header-right"]
	  }) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(40)
	)

	/* script */
	__vue_exports__ = __webpack_require__(41)

	/* template */
	var __vue_template__ = __webpack_require__(46)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-icon.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2d4d467e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = {
	  "icon-block": {
	    "justifyContent": "flex-start"
	  },
	  "icon": {
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var he = __webpack_require__(42);
	var iconItems = __webpack_require__(45);
	var fontFamily = "ionfont";
	module.exports = {
	    beforeCreate: function beforeCreate() {
	        var bundleUrl = weex.config.bundleUrl;
	        var url = bundleUrl.split('/').slice(0, -1).join('/');
	        url += '/font/ionicons.ttf';

	        var domModule = weex.requireModule("dom");
	        domModule.addRule('fontFace', {
	            'fontFamily': fontFamily,
	            'src': "url('" + url + "')"
	        });
	    },

	    props: {
	        name: {
	            type: String,
	            defalut: ''
	        },
	        color: {
	            type: String,
	            default: '#9ea7b4'
	        },
	        size: {
	            type: [Number, String],
	            default: 48
	        },
	        activeColor: {
	            type: String
	        }
	    },
	    computed: {
	        getFontName: function getFontName() {
	            var icon = iconItems[this.name];
	            return he.decode(icon || '');
	        },
	        getStyle: function getStyle() {
	            var style = {
	                'color': this.color,
	                'font-size': this.size,
	                'font-family': fontFamily
	            };
	            if (this.activeColor) {
	                style["color:active"] = this.activeColor;
	            }
	            return style;
	        }
	    },
	    methods: {
	        _click: function _click(e) {
	            this.$emit("click", e);
	        }
	    }
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! https://mths.be/he v1.1.1 by @mathias | MIT license */
	;(function (root) {

		// Detect free variables `exports`.
		var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports;

		// Detect free variable `module`.
		var freeModule = ( false ? 'undefined' : _typeof(module)) == 'object' && module && module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`.
		var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		// All astral symbols.
		var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
		// All ASCII symbols (not just printable ASCII) except those listed in the
		// first column of the overrides table.
		// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
		var regexAsciiWhitelist = /[\x01-\x7F]/g;
		// All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
		// code points listed in the first column of the overrides table on
		// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
		var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;

		var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
		var encodeMap = { '\xAD': 'shy', '\u200C': 'zwnj', '\u200D': 'zwj', '\u200E': 'lrm', '\u2063': 'ic', '\u2062': 'it', '\u2061': 'af', '\u200F': 'rlm', '\u200B': 'ZeroWidthSpace', '\u2060': 'NoBreak', '\u0311': 'DownBreve', '\u20DB': 'tdot', '\u20DC': 'DotDot', '\t': 'Tab', '\n': 'NewLine', '\u2008': 'puncsp', '\u205F': 'MediumSpace', '\u2009': 'thinsp', '\u200A': 'hairsp', '\u2004': 'emsp13', '\u2002': 'ensp', '\u2005': 'emsp14', '\u2003': 'emsp', '\u2007': 'numsp', '\xA0': 'nbsp', '\u205F\u200A': 'ThickSpace', '\u203E': 'oline', '_': 'lowbar', '\u2010': 'dash', '\u2013': 'ndash', '\u2014': 'mdash', '\u2015': 'horbar', ',': 'comma', ';': 'semi', '\u204F': 'bsemi', ':': 'colon', '\u2A74': 'Colone', '!': 'excl', '\xA1': 'iexcl', '?': 'quest', '\xBF': 'iquest', '.': 'period', '\u2025': 'nldr', '\u2026': 'mldr', '\xB7': 'middot', '\'': 'apos', '\u2018': 'lsquo', '\u2019': 'rsquo', '\u201A': 'sbquo', '\u2039': 'lsaquo', '\u203A': 'rsaquo', '"': 'quot', '\u201C': 'ldquo', '\u201D': 'rdquo', '\u201E': 'bdquo', '\xAB': 'laquo', '\xBB': 'raquo', '(': 'lpar', ')': 'rpar', '[': 'lsqb', ']': 'rsqb', '{': 'lcub', '}': 'rcub', '\u2308': 'lceil', '\u2309': 'rceil', '\u230A': 'lfloor', '\u230B': 'rfloor', '\u2985': 'lopar', '\u2986': 'ropar', '\u298B': 'lbrke', '\u298C': 'rbrke', '\u298D': 'lbrkslu', '\u298E': 'rbrksld', '\u298F': 'lbrksld', '\u2990': 'rbrkslu', '\u2991': 'langd', '\u2992': 'rangd', '\u2993': 'lparlt', '\u2994': 'rpargt', '\u2995': 'gtlPar', '\u2996': 'ltrPar', '\u27E6': 'lobrk', '\u27E7': 'robrk', '\u27E8': 'lang', '\u27E9': 'rang', '\u27EA': 'Lang', '\u27EB': 'Rang', '\u27EC': 'loang', '\u27ED': 'roang', '\u2772': 'lbbrk', '\u2773': 'rbbrk', '\u2016': 'Vert', '\xA7': 'sect', '\xB6': 'para', '@': 'commat', '*': 'ast', '/': 'sol', 'undefined': null, '&': 'amp', '#': 'num', '%': 'percnt', '\u2030': 'permil', '\u2031': 'pertenk', '\u2020': 'dagger', '\u2021': 'Dagger', '\u2022': 'bull', '\u2043': 'hybull', '\u2032': 'prime', '\u2033': 'Prime', '\u2034': 'tprime', '\u2057': 'qprime', '\u2035': 'bprime', '\u2041': 'caret', '`': 'grave', '\xB4': 'acute', '\u02DC': 'tilde', '^': 'Hat', '\xAF': 'macr', '\u02D8': 'breve', '\u02D9': 'dot', '\xA8': 'die', '\u02DA': 'ring', '\u02DD': 'dblac', '\xB8': 'cedil', '\u02DB': 'ogon', '\u02C6': 'circ', '\u02C7': 'caron', '\xB0': 'deg', '\xA9': 'copy', '\xAE': 'reg', '\u2117': 'copysr', '\u2118': 'wp', '\u211E': 'rx', '\u2127': 'mho', '\u2129': 'iiota', '\u2190': 'larr', '\u219A': 'nlarr', '\u2192': 'rarr', '\u219B': 'nrarr', '\u2191': 'uarr', '\u2193': 'darr', '\u2194': 'harr', '\u21AE': 'nharr', '\u2195': 'varr', '\u2196': 'nwarr', '\u2197': 'nearr', '\u2198': 'searr', '\u2199': 'swarr', '\u219D': 'rarrw', '\u219D\u0338': 'nrarrw', '\u219E': 'Larr', '\u219F': 'Uarr', '\u21A0': 'Rarr', '\u21A1': 'Darr', '\u21A2': 'larrtl', '\u21A3': 'rarrtl', '\u21A4': 'mapstoleft', '\u21A5': 'mapstoup', '\u21A6': 'map', '\u21A7': 'mapstodown', '\u21A9': 'larrhk', '\u21AA': 'rarrhk', '\u21AB': 'larrlp', '\u21AC': 'rarrlp', '\u21AD': 'harrw', '\u21B0': 'lsh', '\u21B1': 'rsh', '\u21B2': 'ldsh', '\u21B3': 'rdsh', '\u21B5': 'crarr', '\u21B6': 'cularr', '\u21B7': 'curarr', '\u21BA': 'olarr', '\u21BB': 'orarr', '\u21BC': 'lharu', '\u21BD': 'lhard', '\u21BE': 'uharr', '\u21BF': 'uharl', '\u21C0': 'rharu', '\u21C1': 'rhard', '\u21C2': 'dharr', '\u21C3': 'dharl', '\u21C4': 'rlarr', '\u21C5': 'udarr', '\u21C6': 'lrarr', '\u21C7': 'llarr', '\u21C8': 'uuarr', '\u21C9': 'rrarr', '\u21CA': 'ddarr', '\u21CB': 'lrhar', '\u21CC': 'rlhar', '\u21D0': 'lArr', '\u21CD': 'nlArr', '\u21D1': 'uArr', '\u21D2': 'rArr', '\u21CF': 'nrArr', '\u21D3': 'dArr', '\u21D4': 'iff', '\u21CE': 'nhArr', '\u21D5': 'vArr', '\u21D6': 'nwArr', '\u21D7': 'neArr', '\u21D8': 'seArr', '\u21D9': 'swArr', '\u21DA': 'lAarr', '\u21DB': 'rAarr', '\u21DD': 'zigrarr', '\u21E4': 'larrb', '\u21E5': 'rarrb', '\u21F5': 'duarr', '\u21FD': 'loarr', '\u21FE': 'roarr', '\u21FF': 'hoarr', '\u2200': 'forall', '\u2201': 'comp', '\u2202': 'part', '\u2202\u0338': 'npart', '\u2203': 'exist', '\u2204': 'nexist', '\u2205': 'empty', '\u2207': 'Del', '\u2208': 'in', '\u2209': 'notin', '\u220B': 'ni', '\u220C': 'notni', '\u03F6': 'bepsi', '\u220F': 'prod', '\u2210': 'coprod', '\u2211': 'sum', '+': 'plus', '\xB1': 'pm', '\xF7': 'div', '\xD7': 'times', '<': 'lt', '\u226E': 'nlt', '<\u20D2': 'nvlt', '=': 'equals', '\u2260': 'ne', '=\u20E5': 'bne', '\u2A75': 'Equal', '>': 'gt', '\u226F': 'ngt', '>\u20D2': 'nvgt', '\xAC': 'not', '|': 'vert', '\xA6': 'brvbar', '\u2212': 'minus', '\u2213': 'mp', '\u2214': 'plusdo', '\u2044': 'frasl', '\u2216': 'setmn', '\u2217': 'lowast', '\u2218': 'compfn', '\u221A': 'Sqrt', '\u221D': 'prop', '\u221E': 'infin', '\u221F': 'angrt', '\u2220': 'ang', '\u2220\u20D2': 'nang', '\u2221': 'angmsd', '\u2222': 'angsph', '\u2223': 'mid', '\u2224': 'nmid', '\u2225': 'par', '\u2226': 'npar', '\u2227': 'and', '\u2228': 'or', '\u2229': 'cap', '\u2229\uFE00': 'caps', '\u222A': 'cup', '\u222A\uFE00': 'cups', '\u222B': 'int', '\u222C': 'Int', '\u222D': 'tint', '\u2A0C': 'qint', '\u222E': 'oint', '\u222F': 'Conint', '\u2230': 'Cconint', '\u2231': 'cwint', '\u2232': 'cwconint', '\u2233': 'awconint', '\u2234': 'there4', '\u2235': 'becaus', '\u2236': 'ratio', '\u2237': 'Colon', '\u2238': 'minusd', '\u223A': 'mDDot', '\u223B': 'homtht', '\u223C': 'sim', '\u2241': 'nsim', '\u223C\u20D2': 'nvsim', '\u223D': 'bsim', '\u223D\u0331': 'race', '\u223E': 'ac', '\u223E\u0333': 'acE', '\u223F': 'acd', '\u2240': 'wr', '\u2242': 'esim', '\u2242\u0338': 'nesim', '\u2243': 'sime', '\u2244': 'nsime', '\u2245': 'cong', '\u2247': 'ncong', '\u2246': 'simne', '\u2248': 'ap', '\u2249': 'nap', '\u224A': 'ape', '\u224B': 'apid', '\u224B\u0338': 'napid', '\u224C': 'bcong', '\u224D': 'CupCap', '\u226D': 'NotCupCap', '\u224D\u20D2': 'nvap', '\u224E': 'bump', '\u224E\u0338': 'nbump', '\u224F': 'bumpe', '\u224F\u0338': 'nbumpe', '\u2250': 'doteq', '\u2250\u0338': 'nedot', '\u2251': 'eDot', '\u2252': 'efDot', '\u2253': 'erDot', '\u2254': 'colone', '\u2255': 'ecolon', '\u2256': 'ecir', '\u2257': 'cire', '\u2259': 'wedgeq', '\u225A': 'veeeq', '\u225C': 'trie', '\u225F': 'equest', '\u2261': 'equiv', '\u2262': 'nequiv', '\u2261\u20E5': 'bnequiv', '\u2264': 'le', '\u2270': 'nle', '\u2264\u20D2': 'nvle', '\u2265': 'ge', '\u2271': 'nge', '\u2265\u20D2': 'nvge', '\u2266': 'lE', '\u2266\u0338': 'nlE', '\u2267': 'gE', '\u2267\u0338': 'ngE', '\u2268\uFE00': 'lvnE', '\u2268': 'lnE', '\u2269': 'gnE', '\u2269\uFE00': 'gvnE', '\u226A': 'll', '\u226A\u0338': 'nLtv', '\u226A\u20D2': 'nLt', '\u226B': 'gg', '\u226B\u0338': 'nGtv', '\u226B\u20D2': 'nGt', '\u226C': 'twixt', '\u2272': 'lsim', '\u2274': 'nlsim', '\u2273': 'gsim', '\u2275': 'ngsim', '\u2276': 'lg', '\u2278': 'ntlg', '\u2277': 'gl', '\u2279': 'ntgl', '\u227A': 'pr', '\u2280': 'npr', '\u227B': 'sc', '\u2281': 'nsc', '\u227C': 'prcue', '\u22E0': 'nprcue', '\u227D': 'sccue', '\u22E1': 'nsccue', '\u227E': 'prsim', '\u227F': 'scsim', '\u227F\u0338': 'NotSucceedsTilde', '\u2282': 'sub', '\u2284': 'nsub', '\u2282\u20D2': 'vnsub', '\u2283': 'sup', '\u2285': 'nsup', '\u2283\u20D2': 'vnsup', '\u2286': 'sube', '\u2288': 'nsube', '\u2287': 'supe', '\u2289': 'nsupe', '\u228A\uFE00': 'vsubne', '\u228A': 'subne', '\u228B\uFE00': 'vsupne', '\u228B': 'supne', '\u228D': 'cupdot', '\u228E': 'uplus', '\u228F': 'sqsub', '\u228F\u0338': 'NotSquareSubset', '\u2290': 'sqsup', '\u2290\u0338': 'NotSquareSuperset', '\u2291': 'sqsube', '\u22E2': 'nsqsube', '\u2292': 'sqsupe', '\u22E3': 'nsqsupe', '\u2293': 'sqcap', '\u2293\uFE00': 'sqcaps', '\u2294': 'sqcup', '\u2294\uFE00': 'sqcups', '\u2295': 'oplus', '\u2296': 'ominus', '\u2297': 'otimes', '\u2298': 'osol', '\u2299': 'odot', '\u229A': 'ocir', '\u229B': 'oast', '\u229D': 'odash', '\u229E': 'plusb', '\u229F': 'minusb', '\u22A0': 'timesb', '\u22A1': 'sdotb', '\u22A2': 'vdash', '\u22AC': 'nvdash', '\u22A3': 'dashv', '\u22A4': 'top', '\u22A5': 'bot', '\u22A7': 'models', '\u22A8': 'vDash', '\u22AD': 'nvDash', '\u22A9': 'Vdash', '\u22AE': 'nVdash', '\u22AA': 'Vvdash', '\u22AB': 'VDash', '\u22AF': 'nVDash', '\u22B0': 'prurel', '\u22B2': 'vltri', '\u22EA': 'nltri', '\u22B3': 'vrtri', '\u22EB': 'nrtri', '\u22B4': 'ltrie', '\u22EC': 'nltrie', '\u22B4\u20D2': 'nvltrie', '\u22B5': 'rtrie', '\u22ED': 'nrtrie', '\u22B5\u20D2': 'nvrtrie', '\u22B6': 'origof', '\u22B7': 'imof', '\u22B8': 'mumap', '\u22B9': 'hercon', '\u22BA': 'intcal', '\u22BB': 'veebar', '\u22BD': 'barvee', '\u22BE': 'angrtvb', '\u22BF': 'lrtri', '\u22C0': 'Wedge', '\u22C1': 'Vee', '\u22C2': 'xcap', '\u22C3': 'xcup', '\u22C4': 'diam', '\u22C5': 'sdot', '\u22C6': 'Star', '\u22C7': 'divonx', '\u22C8': 'bowtie', '\u22C9': 'ltimes', '\u22CA': 'rtimes', '\u22CB': 'lthree', '\u22CC': 'rthree', '\u22CD': 'bsime', '\u22CE': 'cuvee', '\u22CF': 'cuwed', '\u22D0': 'Sub', '\u22D1': 'Sup', '\u22D2': 'Cap', '\u22D3': 'Cup', '\u22D4': 'fork', '\u22D5': 'epar', '\u22D6': 'ltdot', '\u22D7': 'gtdot', '\u22D8': 'Ll', '\u22D8\u0338': 'nLl', '\u22D9': 'Gg', '\u22D9\u0338': 'nGg', '\u22DA\uFE00': 'lesg', '\u22DA': 'leg', '\u22DB': 'gel', '\u22DB\uFE00': 'gesl', '\u22DE': 'cuepr', '\u22DF': 'cuesc', '\u22E6': 'lnsim', '\u22E7': 'gnsim', '\u22E8': 'prnsim', '\u22E9': 'scnsim', '\u22EE': 'vellip', '\u22EF': 'ctdot', '\u22F0': 'utdot', '\u22F1': 'dtdot', '\u22F2': 'disin', '\u22F3': 'isinsv', '\u22F4': 'isins', '\u22F5': 'isindot', '\u22F5\u0338': 'notindot', '\u22F6': 'notinvc', '\u22F7': 'notinvb', '\u22F9': 'isinE', '\u22F9\u0338': 'notinE', '\u22FA': 'nisd', '\u22FB': 'xnis', '\u22FC': 'nis', '\u22FD': 'notnivc', '\u22FE': 'notnivb', '\u2305': 'barwed', '\u2306': 'Barwed', '\u230C': 'drcrop', '\u230D': 'dlcrop', '\u230E': 'urcrop', '\u230F': 'ulcrop', '\u2310': 'bnot', '\u2312': 'profline', '\u2313': 'profsurf', '\u2315': 'telrec', '\u2316': 'target', '\u231C': 'ulcorn', '\u231D': 'urcorn', '\u231E': 'dlcorn', '\u231F': 'drcorn', '\u2322': 'frown', '\u2323': 'smile', '\u232D': 'cylcty', '\u232E': 'profalar', '\u2336': 'topbot', '\u233D': 'ovbar', '\u233F': 'solbar', '\u237C': 'angzarr', '\u23B0': 'lmoust', '\u23B1': 'rmoust', '\u23B4': 'tbrk', '\u23B5': 'bbrk', '\u23B6': 'bbrktbrk', '\u23DC': 'OverParenthesis', '\u23DD': 'UnderParenthesis', '\u23DE': 'OverBrace', '\u23DF': 'UnderBrace', '\u23E2': 'trpezium', '\u23E7': 'elinters', '\u2423': 'blank', '\u2500': 'boxh', '\u2502': 'boxv', '\u250C': 'boxdr', '\u2510': 'boxdl', '\u2514': 'boxur', '\u2518': 'boxul', '\u251C': 'boxvr', '\u2524': 'boxvl', '\u252C': 'boxhd', '\u2534': 'boxhu', '\u253C': 'boxvh', '\u2550': 'boxH', '\u2551': 'boxV', '\u2552': 'boxdR', '\u2553': 'boxDr', '\u2554': 'boxDR', '\u2555': 'boxdL', '\u2556': 'boxDl', '\u2557': 'boxDL', '\u2558': 'boxuR', '\u2559': 'boxUr', '\u255A': 'boxUR', '\u255B': 'boxuL', '\u255C': 'boxUl', '\u255D': 'boxUL', '\u255E': 'boxvR', '\u255F': 'boxVr', '\u2560': 'boxVR', '\u2561': 'boxvL', '\u2562': 'boxVl', '\u2563': 'boxVL', '\u2564': 'boxHd', '\u2565': 'boxhD', '\u2566': 'boxHD', '\u2567': 'boxHu', '\u2568': 'boxhU', '\u2569': 'boxHU', '\u256A': 'boxvH', '\u256B': 'boxVh', '\u256C': 'boxVH', '\u2580': 'uhblk', '\u2584': 'lhblk', '\u2588': 'block', '\u2591': 'blk14', '\u2592': 'blk12', '\u2593': 'blk34', '\u25A1': 'squ', '\u25AA': 'squf', '\u25AB': 'EmptyVerySmallSquare', '\u25AD': 'rect', '\u25AE': 'marker', '\u25B1': 'fltns', '\u25B3': 'xutri', '\u25B4': 'utrif', '\u25B5': 'utri', '\u25B8': 'rtrif', '\u25B9': 'rtri', '\u25BD': 'xdtri', '\u25BE': 'dtrif', '\u25BF': 'dtri', '\u25C2': 'ltrif', '\u25C3': 'ltri', '\u25CA': 'loz', '\u25CB': 'cir', '\u25EC': 'tridot', '\u25EF': 'xcirc', '\u25F8': 'ultri', '\u25F9': 'urtri', '\u25FA': 'lltri', '\u25FB': 'EmptySmallSquare', '\u25FC': 'FilledSmallSquare', '\u2605': 'starf', '\u2606': 'star', '\u260E': 'phone', '\u2640': 'female', '\u2642': 'male', '\u2660': 'spades', '\u2663': 'clubs', '\u2665': 'hearts', '\u2666': 'diams', '\u266A': 'sung', '\u2713': 'check', '\u2717': 'cross', '\u2720': 'malt', '\u2736': 'sext', '\u2758': 'VerticalSeparator', '\u27C8': 'bsolhsub', '\u27C9': 'suphsol', '\u27F5': 'xlarr', '\u27F6': 'xrarr', '\u27F7': 'xharr', '\u27F8': 'xlArr', '\u27F9': 'xrArr', '\u27FA': 'xhArr', '\u27FC': 'xmap', '\u27FF': 'dzigrarr', '\u2902': 'nvlArr', '\u2903': 'nvrArr', '\u2904': 'nvHarr', '\u2905': 'Map', '\u290C': 'lbarr', '\u290D': 'rbarr', '\u290E': 'lBarr', '\u290F': 'rBarr', '\u2910': 'RBarr', '\u2911': 'DDotrahd', '\u2912': 'UpArrowBar', '\u2913': 'DownArrowBar', '\u2916': 'Rarrtl', '\u2919': 'latail', '\u291A': 'ratail', '\u291B': 'lAtail', '\u291C': 'rAtail', '\u291D': 'larrfs', '\u291E': 'rarrfs', '\u291F': 'larrbfs', '\u2920': 'rarrbfs', '\u2923': 'nwarhk', '\u2924': 'nearhk', '\u2925': 'searhk', '\u2926': 'swarhk', '\u2927': 'nwnear', '\u2928': 'toea', '\u2929': 'tosa', '\u292A': 'swnwar', '\u2933': 'rarrc', '\u2933\u0338': 'nrarrc', '\u2935': 'cudarrr', '\u2936': 'ldca', '\u2937': 'rdca', '\u2938': 'cudarrl', '\u2939': 'larrpl', '\u293C': 'curarrm', '\u293D': 'cularrp', '\u2945': 'rarrpl', '\u2948': 'harrcir', '\u2949': 'Uarrocir', '\u294A': 'lurdshar', '\u294B': 'ldrushar', '\u294E': 'LeftRightVector', '\u294F': 'RightUpDownVector', '\u2950': 'DownLeftRightVector', '\u2951': 'LeftUpDownVector', '\u2952': 'LeftVectorBar', '\u2953': 'RightVectorBar', '\u2954': 'RightUpVectorBar', '\u2955': 'RightDownVectorBar', '\u2956': 'DownLeftVectorBar', '\u2957': 'DownRightVectorBar', '\u2958': 'LeftUpVectorBar', '\u2959': 'LeftDownVectorBar', '\u295A': 'LeftTeeVector', '\u295B': 'RightTeeVector', '\u295C': 'RightUpTeeVector', '\u295D': 'RightDownTeeVector', '\u295E': 'DownLeftTeeVector', '\u295F': 'DownRightTeeVector', '\u2960': 'LeftUpTeeVector', '\u2961': 'LeftDownTeeVector', '\u2962': 'lHar', '\u2963': 'uHar', '\u2964': 'rHar', '\u2965': 'dHar', '\u2966': 'luruhar', '\u2967': 'ldrdhar', '\u2968': 'ruluhar', '\u2969': 'rdldhar', '\u296A': 'lharul', '\u296B': 'llhard', '\u296C': 'rharul', '\u296D': 'lrhard', '\u296E': 'udhar', '\u296F': 'duhar', '\u2970': 'RoundImplies', '\u2971': 'erarr', '\u2972': 'simrarr', '\u2973': 'larrsim', '\u2974': 'rarrsim', '\u2975': 'rarrap', '\u2976': 'ltlarr', '\u2978': 'gtrarr', '\u2979': 'subrarr', '\u297B': 'suplarr', '\u297C': 'lfisht', '\u297D': 'rfisht', '\u297E': 'ufisht', '\u297F': 'dfisht', '\u299A': 'vzigzag', '\u299C': 'vangrt', '\u299D': 'angrtvbd', '\u29A4': 'ange', '\u29A5': 'range', '\u29A6': 'dwangle', '\u29A7': 'uwangle', '\u29A8': 'angmsdaa', '\u29A9': 'angmsdab', '\u29AA': 'angmsdac', '\u29AB': 'angmsdad', '\u29AC': 'angmsdae', '\u29AD': 'angmsdaf', '\u29AE': 'angmsdag', '\u29AF': 'angmsdah', '\u29B0': 'bemptyv', '\u29B1': 'demptyv', '\u29B2': 'cemptyv', '\u29B3': 'raemptyv', '\u29B4': 'laemptyv', '\u29B5': 'ohbar', '\u29B6': 'omid', '\u29B7': 'opar', '\u29B9': 'operp', '\u29BB': 'olcross', '\u29BC': 'odsold', '\u29BE': 'olcir', '\u29BF': 'ofcir', '\u29C0': 'olt', '\u29C1': 'ogt', '\u29C2': 'cirscir', '\u29C3': 'cirE', '\u29C4': 'solb', '\u29C5': 'bsolb', '\u29C9': 'boxbox', '\u29CD': 'trisb', '\u29CE': 'rtriltri', '\u29CF': 'LeftTriangleBar', '\u29CF\u0338': 'NotLeftTriangleBar', '\u29D0': 'RightTriangleBar', '\u29D0\u0338': 'NotRightTriangleBar', '\u29DC': 'iinfin', '\u29DD': 'infintie', '\u29DE': 'nvinfin', '\u29E3': 'eparsl', '\u29E4': 'smeparsl', '\u29E5': 'eqvparsl', '\u29EB': 'lozf', '\u29F4': 'RuleDelayed', '\u29F6': 'dsol', '\u2A00': 'xodot', '\u2A01': 'xoplus', '\u2A02': 'xotime', '\u2A04': 'xuplus', '\u2A06': 'xsqcup', '\u2A0D': 'fpartint', '\u2A10': 'cirfnint', '\u2A11': 'awint', '\u2A12': 'rppolint', '\u2A13': 'scpolint', '\u2A14': 'npolint', '\u2A15': 'pointint', '\u2A16': 'quatint', '\u2A17': 'intlarhk', '\u2A22': 'pluscir', '\u2A23': 'plusacir', '\u2A24': 'simplus', '\u2A25': 'plusdu', '\u2A26': 'plussim', '\u2A27': 'plustwo', '\u2A29': 'mcomma', '\u2A2A': 'minusdu', '\u2A2D': 'loplus', '\u2A2E': 'roplus', '\u2A2F': 'Cross', '\u2A30': 'timesd', '\u2A31': 'timesbar', '\u2A33': 'smashp', '\u2A34': 'lotimes', '\u2A35': 'rotimes', '\u2A36': 'otimesas', '\u2A37': 'Otimes', '\u2A38': 'odiv', '\u2A39': 'triplus', '\u2A3A': 'triminus', '\u2A3B': 'tritime', '\u2A3C': 'iprod', '\u2A3F': 'amalg', '\u2A40': 'capdot', '\u2A42': 'ncup', '\u2A43': 'ncap', '\u2A44': 'capand', '\u2A45': 'cupor', '\u2A46': 'cupcap', '\u2A47': 'capcup', '\u2A48': 'cupbrcap', '\u2A49': 'capbrcup', '\u2A4A': 'cupcup', '\u2A4B': 'capcap', '\u2A4C': 'ccups', '\u2A4D': 'ccaps', '\u2A50': 'ccupssm', '\u2A53': 'And', '\u2A54': 'Or', '\u2A55': 'andand', '\u2A56': 'oror', '\u2A57': 'orslope', '\u2A58': 'andslope', '\u2A5A': 'andv', '\u2A5B': 'orv', '\u2A5C': 'andd', '\u2A5D': 'ord', '\u2A5F': 'wedbar', '\u2A66': 'sdote', '\u2A6A': 'simdot', '\u2A6D': 'congdot', '\u2A6D\u0338': 'ncongdot', '\u2A6E': 'easter', '\u2A6F': 'apacir', '\u2A70': 'apE', '\u2A70\u0338': 'napE', '\u2A71': 'eplus', '\u2A72': 'pluse', '\u2A73': 'Esim', '\u2A77': 'eDDot', '\u2A78': 'equivDD', '\u2A79': 'ltcir', '\u2A7A': 'gtcir', '\u2A7B': 'ltquest', '\u2A7C': 'gtquest', '\u2A7D': 'les', '\u2A7D\u0338': 'nles', '\u2A7E': 'ges', '\u2A7E\u0338': 'nges', '\u2A7F': 'lesdot', '\u2A80': 'gesdot', '\u2A81': 'lesdoto', '\u2A82': 'gesdoto', '\u2A83': 'lesdotor', '\u2A84': 'gesdotol', '\u2A85': 'lap', '\u2A86': 'gap', '\u2A87': 'lne', '\u2A88': 'gne', '\u2A89': 'lnap', '\u2A8A': 'gnap', '\u2A8B': 'lEg', '\u2A8C': 'gEl', '\u2A8D': 'lsime', '\u2A8E': 'gsime', '\u2A8F': 'lsimg', '\u2A90': 'gsiml', '\u2A91': 'lgE', '\u2A92': 'glE', '\u2A93': 'lesges', '\u2A94': 'gesles', '\u2A95': 'els', '\u2A96': 'egs', '\u2A97': 'elsdot', '\u2A98': 'egsdot', '\u2A99': 'el', '\u2A9A': 'eg', '\u2A9D': 'siml', '\u2A9E': 'simg', '\u2A9F': 'simlE', '\u2AA0': 'simgE', '\u2AA1': 'LessLess', '\u2AA1\u0338': 'NotNestedLessLess', '\u2AA2': 'GreaterGreater', '\u2AA2\u0338': 'NotNestedGreaterGreater', '\u2AA4': 'glj', '\u2AA5': 'gla', '\u2AA6': 'ltcc', '\u2AA7': 'gtcc', '\u2AA8': 'lescc', '\u2AA9': 'gescc', '\u2AAA': 'smt', '\u2AAB': 'lat', '\u2AAC': 'smte', '\u2AAC\uFE00': 'smtes', '\u2AAD': 'late', '\u2AAD\uFE00': 'lates', '\u2AAE': 'bumpE', '\u2AAF': 'pre', '\u2AAF\u0338': 'npre', '\u2AB0': 'sce', '\u2AB0\u0338': 'nsce', '\u2AB3': 'prE', '\u2AB4': 'scE', '\u2AB5': 'prnE', '\u2AB6': 'scnE', '\u2AB7': 'prap', '\u2AB8': 'scap', '\u2AB9': 'prnap', '\u2ABA': 'scnap', '\u2ABB': 'Pr', '\u2ABC': 'Sc', '\u2ABD': 'subdot', '\u2ABE': 'supdot', '\u2ABF': 'subplus', '\u2AC0': 'supplus', '\u2AC1': 'submult', '\u2AC2': 'supmult', '\u2AC3': 'subedot', '\u2AC4': 'supedot', '\u2AC5': 'subE', '\u2AC5\u0338': 'nsubE', '\u2AC6': 'supE', '\u2AC6\u0338': 'nsupE', '\u2AC7': 'subsim', '\u2AC8': 'supsim', '\u2ACB\uFE00': 'vsubnE', '\u2ACB': 'subnE', '\u2ACC\uFE00': 'vsupnE', '\u2ACC': 'supnE', '\u2ACF': 'csub', '\u2AD0': 'csup', '\u2AD1': 'csube', '\u2AD2': 'csupe', '\u2AD3': 'subsup', '\u2AD4': 'supsub', '\u2AD5': 'subsub', '\u2AD6': 'supsup', '\u2AD7': 'suphsub', '\u2AD8': 'supdsub', '\u2AD9': 'forkv', '\u2ADA': 'topfork', '\u2ADB': 'mlcp', '\u2AE4': 'Dashv', '\u2AE6': 'Vdashl', '\u2AE7': 'Barv', '\u2AE8': 'vBar', '\u2AE9': 'vBarv', '\u2AEB': 'Vbar', '\u2AEC': 'Not', '\u2AED': 'bNot', '\u2AEE': 'rnmid', '\u2AEF': 'cirmid', '\u2AF0': 'midcir', '\u2AF1': 'topcir', '\u2AF2': 'nhpar', '\u2AF3': 'parsim', '\u2AFD': 'parsl', '\u2AFD\u20E5': 'nparsl', '\u266D': 'flat', '\u266E': 'natur', '\u266F': 'sharp', '\xA4': 'curren', '\xA2': 'cent', '$': 'dollar', '\xA3': 'pound', '\xA5': 'yen', '\u20AC': 'euro', '\xB9': 'sup1', '\xBD': 'half', '\u2153': 'frac13', '\xBC': 'frac14', '\u2155': 'frac15', '\u2159': 'frac16', '\u215B': 'frac18', '\xB2': 'sup2', '\u2154': 'frac23', '\u2156': 'frac25', '\xB3': 'sup3', '\xBE': 'frac34', '\u2157': 'frac35', '\u215C': 'frac38', '\u2158': 'frac45', '\u215A': 'frac56', '\u215D': 'frac58', '\u215E': 'frac78', '\uD835\uDCB6': 'ascr', '\uD835\uDD52': 'aopf', '\uD835\uDD1E': 'afr', '\uD835\uDD38': 'Aopf', '\uD835\uDD04': 'Afr', '\uD835\uDC9C': 'Ascr', '\xAA': 'ordf', '\xE1': 'aacute', '\xC1': 'Aacute', '\xE0': 'agrave', '\xC0': 'Agrave', '\u0103': 'abreve', '\u0102': 'Abreve', '\xE2': 'acirc', '\xC2': 'Acirc', '\xE5': 'aring', '\xC5': 'angst', '\xE4': 'auml', '\xC4': 'Auml', '\xE3': 'atilde', '\xC3': 'Atilde', '\u0105': 'aogon', '\u0104': 'Aogon', '\u0101': 'amacr', '\u0100': 'Amacr', '\xE6': 'aelig', '\xC6': 'AElig', '\uD835\uDCB7': 'bscr', '\uD835\uDD53': 'bopf', '\uD835\uDD1F': 'bfr', '\uD835\uDD39': 'Bopf', '\u212C': 'Bscr', '\uD835\uDD05': 'Bfr', '\uD835\uDD20': 'cfr', '\uD835\uDCB8': 'cscr', '\uD835\uDD54': 'copf', '\u212D': 'Cfr', '\uD835\uDC9E': 'Cscr', '\u2102': 'Copf', '\u0107': 'cacute', '\u0106': 'Cacute', '\u0109': 'ccirc', '\u0108': 'Ccirc', '\u010D': 'ccaron', '\u010C': 'Ccaron', '\u010B': 'cdot', '\u010A': 'Cdot', '\xE7': 'ccedil', '\xC7': 'Ccedil', '\u2105': 'incare', '\uD835\uDD21': 'dfr', '\u2146': 'dd', '\uD835\uDD55': 'dopf', '\uD835\uDCB9': 'dscr', '\uD835\uDC9F': 'Dscr', '\uD835\uDD07': 'Dfr', '\u2145': 'DD', '\uD835\uDD3B': 'Dopf', '\u010F': 'dcaron', '\u010E': 'Dcaron', '\u0111': 'dstrok', '\u0110': 'Dstrok', '\xF0': 'eth', '\xD0': 'ETH', '\u2147': 'ee', '\u212F': 'escr', '\uD835\uDD22': 'efr', '\uD835\uDD56': 'eopf', '\u2130': 'Escr', '\uD835\uDD08': 'Efr', '\uD835\uDD3C': 'Eopf', '\xE9': 'eacute', '\xC9': 'Eacute', '\xE8': 'egrave', '\xC8': 'Egrave', '\xEA': 'ecirc', '\xCA': 'Ecirc', '\u011B': 'ecaron', '\u011A': 'Ecaron', '\xEB': 'euml', '\xCB': 'Euml', '\u0117': 'edot', '\u0116': 'Edot', '\u0119': 'eogon', '\u0118': 'Eogon', '\u0113': 'emacr', '\u0112': 'Emacr', '\uD835\uDD23': 'ffr', '\uD835\uDD57': 'fopf', '\uD835\uDCBB': 'fscr', '\uD835\uDD09': 'Ffr', '\uD835\uDD3D': 'Fopf', '\u2131': 'Fscr', '\uFB00': 'fflig', '\uFB03': 'ffilig', '\uFB04': 'ffllig', '\uFB01': 'filig', 'fj': 'fjlig', '\uFB02': 'fllig', '\u0192': 'fnof', '\u210A': 'gscr', '\uD835\uDD58': 'gopf', '\uD835\uDD24': 'gfr', '\uD835\uDCA2': 'Gscr', '\uD835\uDD3E': 'Gopf', '\uD835\uDD0A': 'Gfr', '\u01F5': 'gacute', '\u011F': 'gbreve', '\u011E': 'Gbreve', '\u011D': 'gcirc', '\u011C': 'Gcirc', '\u0121': 'gdot', '\u0120': 'Gdot', '\u0122': 'Gcedil', '\uD835\uDD25': 'hfr', '\u210E': 'planckh', '\uD835\uDCBD': 'hscr', '\uD835\uDD59': 'hopf', '\u210B': 'Hscr', '\u210C': 'Hfr', '\u210D': 'Hopf', '\u0125': 'hcirc', '\u0124': 'Hcirc', '\u210F': 'hbar', '\u0127': 'hstrok', '\u0126': 'Hstrok', '\uD835\uDD5A': 'iopf', '\uD835\uDD26': 'ifr', '\uD835\uDCBE': 'iscr', '\u2148': 'ii', '\uD835\uDD40': 'Iopf', '\u2110': 'Iscr', '\u2111': 'Im', '\xED': 'iacute', '\xCD': 'Iacute', '\xEC': 'igrave', '\xCC': 'Igrave', '\xEE': 'icirc', '\xCE': 'Icirc', '\xEF': 'iuml', '\xCF': 'Iuml', '\u0129': 'itilde', '\u0128': 'Itilde', '\u0130': 'Idot', '\u012F': 'iogon', '\u012E': 'Iogon', '\u012B': 'imacr', '\u012A': 'Imacr', '\u0133': 'ijlig', '\u0132': 'IJlig', '\u0131': 'imath', '\uD835\uDCBF': 'jscr', '\uD835\uDD5B': 'jopf', '\uD835\uDD27': 'jfr', '\uD835\uDCA5': 'Jscr', '\uD835\uDD0D': 'Jfr', '\uD835\uDD41': 'Jopf', '\u0135': 'jcirc', '\u0134': 'Jcirc', '\u0237': 'jmath', '\uD835\uDD5C': 'kopf', '\uD835\uDCC0': 'kscr', '\uD835\uDD28': 'kfr', '\uD835\uDCA6': 'Kscr', '\uD835\uDD42': 'Kopf', '\uD835\uDD0E': 'Kfr', '\u0137': 'kcedil', '\u0136': 'Kcedil', '\uD835\uDD29': 'lfr', '\uD835\uDCC1': 'lscr', '\u2113': 'ell', '\uD835\uDD5D': 'lopf', '\u2112': 'Lscr', '\uD835\uDD0F': 'Lfr', '\uD835\uDD43': 'Lopf', '\u013A': 'lacute', '\u0139': 'Lacute', '\u013E': 'lcaron', '\u013D': 'Lcaron', '\u013C': 'lcedil', '\u013B': 'Lcedil', '\u0142': 'lstrok', '\u0141': 'Lstrok', '\u0140': 'lmidot', '\u013F': 'Lmidot', '\uD835\uDD2A': 'mfr', '\uD835\uDD5E': 'mopf', '\uD835\uDCC2': 'mscr', '\uD835\uDD10': 'Mfr', '\uD835\uDD44': 'Mopf', '\u2133': 'Mscr', '\uD835\uDD2B': 'nfr', '\uD835\uDD5F': 'nopf', '\uD835\uDCC3': 'nscr', '\u2115': 'Nopf', '\uD835\uDCA9': 'Nscr', '\uD835\uDD11': 'Nfr', '\u0144': 'nacute', '\u0143': 'Nacute', '\u0148': 'ncaron', '\u0147': 'Ncaron', '\xF1': 'ntilde', '\xD1': 'Ntilde', '\u0146': 'ncedil', '\u0145': 'Ncedil', '\u2116': 'numero', '\u014B': 'eng', '\u014A': 'ENG', '\uD835\uDD60': 'oopf', '\uD835\uDD2C': 'ofr', '\u2134': 'oscr', '\uD835\uDCAA': 'Oscr', '\uD835\uDD12': 'Ofr', '\uD835\uDD46': 'Oopf', '\xBA': 'ordm', '\xF3': 'oacute', '\xD3': 'Oacute', '\xF2': 'ograve', '\xD2': 'Ograve', '\xF4': 'ocirc', '\xD4': 'Ocirc', '\xF6': 'ouml', '\xD6': 'Ouml', '\u0151': 'odblac', '\u0150': 'Odblac', '\xF5': 'otilde', '\xD5': 'Otilde', '\xF8': 'oslash', '\xD8': 'Oslash', '\u014D': 'omacr', '\u014C': 'Omacr', '\u0153': 'oelig', '\u0152': 'OElig', '\uD835\uDD2D': 'pfr', '\uD835\uDCC5': 'pscr', '\uD835\uDD61': 'popf', '\u2119': 'Popf', '\uD835\uDD13': 'Pfr', '\uD835\uDCAB': 'Pscr', '\uD835\uDD62': 'qopf', '\uD835\uDD2E': 'qfr', '\uD835\uDCC6': 'qscr', '\uD835\uDCAC': 'Qscr', '\uD835\uDD14': 'Qfr', '\u211A': 'Qopf', '\u0138': 'kgreen', '\uD835\uDD2F': 'rfr', '\uD835\uDD63': 'ropf', '\uD835\uDCC7': 'rscr', '\u211B': 'Rscr', '\u211C': 'Re', '\u211D': 'Ropf', '\u0155': 'racute', '\u0154': 'Racute', '\u0159': 'rcaron', '\u0158': 'Rcaron', '\u0157': 'rcedil', '\u0156': 'Rcedil', '\uD835\uDD64': 'sopf', '\uD835\uDCC8': 'sscr', '\uD835\uDD30': 'sfr', '\uD835\uDD4A': 'Sopf', '\uD835\uDD16': 'Sfr', '\uD835\uDCAE': 'Sscr', '\u24C8': 'oS', '\u015B': 'sacute', '\u015A': 'Sacute', '\u015D': 'scirc', '\u015C': 'Scirc', '\u0161': 'scaron', '\u0160': 'Scaron', '\u015F': 'scedil', '\u015E': 'Scedil', '\xDF': 'szlig', '\uD835\uDD31': 'tfr', '\uD835\uDCC9': 'tscr', '\uD835\uDD65': 'topf', '\uD835\uDCAF': 'Tscr', '\uD835\uDD17': 'Tfr', '\uD835\uDD4B': 'Topf', '\u0165': 'tcaron', '\u0164': 'Tcaron', '\u0163': 'tcedil', '\u0162': 'Tcedil', '\u2122': 'trade', '\u0167': 'tstrok', '\u0166': 'Tstrok', '\uD835\uDCCA': 'uscr', '\uD835\uDD66': 'uopf', '\uD835\uDD32': 'ufr', '\uD835\uDD4C': 'Uopf', '\uD835\uDD18': 'Ufr', '\uD835\uDCB0': 'Uscr', '\xFA': 'uacute', '\xDA': 'Uacute', '\xF9': 'ugrave', '\xD9': 'Ugrave', '\u016D': 'ubreve', '\u016C': 'Ubreve', '\xFB': 'ucirc', '\xDB': 'Ucirc', '\u016F': 'uring', '\u016E': 'Uring', '\xFC': 'uuml', '\xDC': 'Uuml', '\u0171': 'udblac', '\u0170': 'Udblac', '\u0169': 'utilde', '\u0168': 'Utilde', '\u0173': 'uogon', '\u0172': 'Uogon', '\u016B': 'umacr', '\u016A': 'Umacr', '\uD835\uDD33': 'vfr', '\uD835\uDD67': 'vopf', '\uD835\uDCCB': 'vscr', '\uD835\uDD19': 'Vfr', '\uD835\uDD4D': 'Vopf', '\uD835\uDCB1': 'Vscr', '\uD835\uDD68': 'wopf', '\uD835\uDCCC': 'wscr', '\uD835\uDD34': 'wfr', '\uD835\uDCB2': 'Wscr', '\uD835\uDD4E': 'Wopf', '\uD835\uDD1A': 'Wfr', '\u0175': 'wcirc', '\u0174': 'Wcirc', '\uD835\uDD35': 'xfr', '\uD835\uDCCD': 'xscr', '\uD835\uDD69': 'xopf', '\uD835\uDD4F': 'Xopf', '\uD835\uDD1B': 'Xfr', '\uD835\uDCB3': 'Xscr', '\uD835\uDD36': 'yfr', '\uD835\uDCCE': 'yscr', '\uD835\uDD6A': 'yopf', '\uD835\uDCB4': 'Yscr', '\uD835\uDD1C': 'Yfr', '\uD835\uDD50': 'Yopf', '\xFD': 'yacute', '\xDD': 'Yacute', '\u0177': 'ycirc', '\u0176': 'Ycirc', '\xFF': 'yuml', '\u0178': 'Yuml', '\uD835\uDCCF': 'zscr', '\uD835\uDD37': 'zfr', '\uD835\uDD6B': 'zopf', '\u2128': 'Zfr', '\u2124': 'Zopf', '\uD835\uDCB5': 'Zscr', '\u017A': 'zacute', '\u0179': 'Zacute', '\u017E': 'zcaron', '\u017D': 'Zcaron', '\u017C': 'zdot', '\u017B': 'Zdot', '\u01B5': 'imped', '\xFE': 'thorn', '\xDE': 'THORN', '\u0149': 'napos', '\u03B1': 'alpha', '\u0391': 'Alpha', '\u03B2': 'beta', '\u0392': 'Beta', '\u03B3': 'gamma', '\u0393': 'Gamma', '\u03B4': 'delta', '\u0394': 'Delta', '\u03B5': 'epsi', '\u03F5': 'epsiv', '\u0395': 'Epsilon', '\u03DD': 'gammad', '\u03DC': 'Gammad', '\u03B6': 'zeta', '\u0396': 'Zeta', '\u03B7': 'eta', '\u0397': 'Eta', '\u03B8': 'theta', '\u03D1': 'thetav', '\u0398': 'Theta', '\u03B9': 'iota', '\u0399': 'Iota', '\u03BA': 'kappa', '\u03F0': 'kappav', '\u039A': 'Kappa', '\u03BB': 'lambda', '\u039B': 'Lambda', '\u03BC': 'mu', '\xB5': 'micro', '\u039C': 'Mu', '\u03BD': 'nu', '\u039D': 'Nu', '\u03BE': 'xi', '\u039E': 'Xi', '\u03BF': 'omicron', '\u039F': 'Omicron', '\u03C0': 'pi', '\u03D6': 'piv', '\u03A0': 'Pi', '\u03C1': 'rho', '\u03F1': 'rhov', '\u03A1': 'Rho', '\u03C3': 'sigma', '\u03A3': 'Sigma', '\u03C2': 'sigmaf', '\u03C4': 'tau', '\u03A4': 'Tau', '\u03C5': 'upsi', '\u03A5': 'Upsilon', '\u03D2': 'Upsi', '\u03C6': 'phi', '\u03D5': 'phiv', '\u03A6': 'Phi', '\u03C7': 'chi', '\u03A7': 'Chi', '\u03C8': 'psi', '\u03A8': 'Psi', '\u03C9': 'omega', '\u03A9': 'ohm', '\u0430': 'acy', '\u0410': 'Acy', '\u0431': 'bcy', '\u0411': 'Bcy', '\u0432': 'vcy', '\u0412': 'Vcy', '\u0433': 'gcy', '\u0413': 'Gcy', '\u0453': 'gjcy', '\u0403': 'GJcy', '\u0434': 'dcy', '\u0414': 'Dcy', '\u0452': 'djcy', '\u0402': 'DJcy', '\u0435': 'iecy', '\u0415': 'IEcy', '\u0451': 'iocy', '\u0401': 'IOcy', '\u0454': 'jukcy', '\u0404': 'Jukcy', '\u0436': 'zhcy', '\u0416': 'ZHcy', '\u0437': 'zcy', '\u0417': 'Zcy', '\u0455': 'dscy', '\u0405': 'DScy', '\u0438': 'icy', '\u0418': 'Icy', '\u0456': 'iukcy', '\u0406': 'Iukcy', '\u0457': 'yicy', '\u0407': 'YIcy', '\u0439': 'jcy', '\u0419': 'Jcy', '\u0458': 'jsercy', '\u0408': 'Jsercy', '\u043A': 'kcy', '\u041A': 'Kcy', '\u045C': 'kjcy', '\u040C': 'KJcy', '\u043B': 'lcy', '\u041B': 'Lcy', '\u0459': 'ljcy', '\u0409': 'LJcy', '\u043C': 'mcy', '\u041C': 'Mcy', '\u043D': 'ncy', '\u041D': 'Ncy', '\u045A': 'njcy', '\u040A': 'NJcy', '\u043E': 'ocy', '\u041E': 'Ocy', '\u043F': 'pcy', '\u041F': 'Pcy', '\u0440': 'rcy', '\u0420': 'Rcy', '\u0441': 'scy', '\u0421': 'Scy', '\u0442': 'tcy', '\u0422': 'Tcy', '\u045B': 'tshcy', '\u040B': 'TSHcy', '\u0443': 'ucy', '\u0423': 'Ucy', '\u045E': 'ubrcy', '\u040E': 'Ubrcy', '\u0444': 'fcy', '\u0424': 'Fcy', '\u0445': 'khcy', '\u0425': 'KHcy', '\u0446': 'tscy', '\u0426': 'TScy', '\u0447': 'chcy', '\u0427': 'CHcy', '\u045F': 'dzcy', '\u040F': 'DZcy', '\u0448': 'shcy', '\u0428': 'SHcy', '\u0449': 'shchcy', '\u0429': 'SHCHcy', '\u044A': 'hardcy', '\u042A': 'HARDcy', '\u044B': 'ycy', '\u042B': 'Ycy', '\u044C': 'softcy', '\u042C': 'SOFTcy', '\u044D': 'ecy', '\u042D': 'Ecy', '\u044E': 'yucy', '\u042E': 'YUcy', '\u044F': 'yacy', '\u042F': 'YAcy', '\u2135': 'aleph', '\u2136': 'beth', '\u2137': 'gimel', '\u2138': 'daleth' };

		var regexEscape = /["&'<>`]/g;
		var escapeMap = {
			'"': '&quot;',
			'&': '&amp;',
			'\'': '&#x27;',
			'<': '&lt;',
			// See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
			// following is not strictly necessary unless it’s part of a tag or an
			// unquoted attribute value. We’re only escaping it to support those
			// situations, and for XML support.
			'>': '&gt;',
			// In Internet Explorer ≤ 8, the backtick character can be used
			// to break out of (un)quoted attribute values or HTML comments.
			// See http://html5sec.org/#102, http://html5sec.org/#108, and
			// http://html5sec.org/#133.
			'`': '&#x60;'
		};

		var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
		var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
		var regexDecode = /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)([=a-zA-Z0-9])?/g;
		var decodeMap = { 'aacute': '\xE1', 'Aacute': '\xC1', 'abreve': '\u0103', 'Abreve': '\u0102', 'ac': '\u223E', 'acd': '\u223F', 'acE': '\u223E\u0333', 'acirc': '\xE2', 'Acirc': '\xC2', 'acute': '\xB4', 'acy': '\u0430', 'Acy': '\u0410', 'aelig': '\xE6', 'AElig': '\xC6', 'af': '\u2061', 'afr': '\uD835\uDD1E', 'Afr': '\uD835\uDD04', 'agrave': '\xE0', 'Agrave': '\xC0', 'alefsym': '\u2135', 'aleph': '\u2135', 'alpha': '\u03B1', 'Alpha': '\u0391', 'amacr': '\u0101', 'Amacr': '\u0100', 'amalg': '\u2A3F', 'amp': '&', 'AMP': '&', 'and': '\u2227', 'And': '\u2A53', 'andand': '\u2A55', 'andd': '\u2A5C', 'andslope': '\u2A58', 'andv': '\u2A5A', 'ang': '\u2220', 'ange': '\u29A4', 'angle': '\u2220', 'angmsd': '\u2221', 'angmsdaa': '\u29A8', 'angmsdab': '\u29A9', 'angmsdac': '\u29AA', 'angmsdad': '\u29AB', 'angmsdae': '\u29AC', 'angmsdaf': '\u29AD', 'angmsdag': '\u29AE', 'angmsdah': '\u29AF', 'angrt': '\u221F', 'angrtvb': '\u22BE', 'angrtvbd': '\u299D', 'angsph': '\u2222', 'angst': '\xC5', 'angzarr': '\u237C', 'aogon': '\u0105', 'Aogon': '\u0104', 'aopf': '\uD835\uDD52', 'Aopf': '\uD835\uDD38', 'ap': '\u2248', 'apacir': '\u2A6F', 'ape': '\u224A', 'apE': '\u2A70', 'apid': '\u224B', 'apos': '\'', 'ApplyFunction': '\u2061', 'approx': '\u2248', 'approxeq': '\u224A', 'aring': '\xE5', 'Aring': '\xC5', 'ascr': '\uD835\uDCB6', 'Ascr': '\uD835\uDC9C', 'Assign': '\u2254', 'ast': '*', 'asymp': '\u2248', 'asympeq': '\u224D', 'atilde': '\xE3', 'Atilde': '\xC3', 'auml': '\xE4', 'Auml': '\xC4', 'awconint': '\u2233', 'awint': '\u2A11', 'backcong': '\u224C', 'backepsilon': '\u03F6', 'backprime': '\u2035', 'backsim': '\u223D', 'backsimeq': '\u22CD', 'Backslash': '\u2216', 'Barv': '\u2AE7', 'barvee': '\u22BD', 'barwed': '\u2305', 'Barwed': '\u2306', 'barwedge': '\u2305', 'bbrk': '\u23B5', 'bbrktbrk': '\u23B6', 'bcong': '\u224C', 'bcy': '\u0431', 'Bcy': '\u0411', 'bdquo': '\u201E', 'becaus': '\u2235', 'because': '\u2235', 'Because': '\u2235', 'bemptyv': '\u29B0', 'bepsi': '\u03F6', 'bernou': '\u212C', 'Bernoullis': '\u212C', 'beta': '\u03B2', 'Beta': '\u0392', 'beth': '\u2136', 'between': '\u226C', 'bfr': '\uD835\uDD1F', 'Bfr': '\uD835\uDD05', 'bigcap': '\u22C2', 'bigcirc': '\u25EF', 'bigcup': '\u22C3', 'bigodot': '\u2A00', 'bigoplus': '\u2A01', 'bigotimes': '\u2A02', 'bigsqcup': '\u2A06', 'bigstar': '\u2605', 'bigtriangledown': '\u25BD', 'bigtriangleup': '\u25B3', 'biguplus': '\u2A04', 'bigvee': '\u22C1', 'bigwedge': '\u22C0', 'bkarow': '\u290D', 'blacklozenge': '\u29EB', 'blacksquare': '\u25AA', 'blacktriangle': '\u25B4', 'blacktriangledown': '\u25BE', 'blacktriangleleft': '\u25C2', 'blacktriangleright': '\u25B8', 'blank': '\u2423', 'blk12': '\u2592', 'blk14': '\u2591', 'blk34': '\u2593', 'block': '\u2588', 'bne': '=\u20E5', 'bnequiv': '\u2261\u20E5', 'bnot': '\u2310', 'bNot': '\u2AED', 'bopf': '\uD835\uDD53', 'Bopf': '\uD835\uDD39', 'bot': '\u22A5', 'bottom': '\u22A5', 'bowtie': '\u22C8', 'boxbox': '\u29C9', 'boxdl': '\u2510', 'boxdL': '\u2555', 'boxDl': '\u2556', 'boxDL': '\u2557', 'boxdr': '\u250C', 'boxdR': '\u2552', 'boxDr': '\u2553', 'boxDR': '\u2554', 'boxh': '\u2500', 'boxH': '\u2550', 'boxhd': '\u252C', 'boxhD': '\u2565', 'boxHd': '\u2564', 'boxHD': '\u2566', 'boxhu': '\u2534', 'boxhU': '\u2568', 'boxHu': '\u2567', 'boxHU': '\u2569', 'boxminus': '\u229F', 'boxplus': '\u229E', 'boxtimes': '\u22A0', 'boxul': '\u2518', 'boxuL': '\u255B', 'boxUl': '\u255C', 'boxUL': '\u255D', 'boxur': '\u2514', 'boxuR': '\u2558', 'boxUr': '\u2559', 'boxUR': '\u255A', 'boxv': '\u2502', 'boxV': '\u2551', 'boxvh': '\u253C', 'boxvH': '\u256A', 'boxVh': '\u256B', 'boxVH': '\u256C', 'boxvl': '\u2524', 'boxvL': '\u2561', 'boxVl': '\u2562', 'boxVL': '\u2563', 'boxvr': '\u251C', 'boxvR': '\u255E', 'boxVr': '\u255F', 'boxVR': '\u2560', 'bprime': '\u2035', 'breve': '\u02D8', 'Breve': '\u02D8', 'brvbar': '\xA6', 'bscr': '\uD835\uDCB7', 'Bscr': '\u212C', 'bsemi': '\u204F', 'bsim': '\u223D', 'bsime': '\u22CD', 'bsol': '\\', 'bsolb': '\u29C5', 'bsolhsub': '\u27C8', 'bull': '\u2022', 'bullet': '\u2022', 'bump': '\u224E', 'bumpe': '\u224F', 'bumpE': '\u2AAE', 'bumpeq': '\u224F', 'Bumpeq': '\u224E', 'cacute': '\u0107', 'Cacute': '\u0106', 'cap': '\u2229', 'Cap': '\u22D2', 'capand': '\u2A44', 'capbrcup': '\u2A49', 'capcap': '\u2A4B', 'capcup': '\u2A47', 'capdot': '\u2A40', 'CapitalDifferentialD': '\u2145', 'caps': '\u2229\uFE00', 'caret': '\u2041', 'caron': '\u02C7', 'Cayleys': '\u212D', 'ccaps': '\u2A4D', 'ccaron': '\u010D', 'Ccaron': '\u010C', 'ccedil': '\xE7', 'Ccedil': '\xC7', 'ccirc': '\u0109', 'Ccirc': '\u0108', 'Cconint': '\u2230', 'ccups': '\u2A4C', 'ccupssm': '\u2A50', 'cdot': '\u010B', 'Cdot': '\u010A', 'cedil': '\xB8', 'Cedilla': '\xB8', 'cemptyv': '\u29B2', 'cent': '\xA2', 'centerdot': '\xB7', 'CenterDot': '\xB7', 'cfr': '\uD835\uDD20', 'Cfr': '\u212D', 'chcy': '\u0447', 'CHcy': '\u0427', 'check': '\u2713', 'checkmark': '\u2713', 'chi': '\u03C7', 'Chi': '\u03A7', 'cir': '\u25CB', 'circ': '\u02C6', 'circeq': '\u2257', 'circlearrowleft': '\u21BA', 'circlearrowright': '\u21BB', 'circledast': '\u229B', 'circledcirc': '\u229A', 'circleddash': '\u229D', 'CircleDot': '\u2299', 'circledR': '\xAE', 'circledS': '\u24C8', 'CircleMinus': '\u2296', 'CirclePlus': '\u2295', 'CircleTimes': '\u2297', 'cire': '\u2257', 'cirE': '\u29C3', 'cirfnint': '\u2A10', 'cirmid': '\u2AEF', 'cirscir': '\u29C2', 'ClockwiseContourIntegral': '\u2232', 'CloseCurlyDoubleQuote': '\u201D', 'CloseCurlyQuote': '\u2019', 'clubs': '\u2663', 'clubsuit': '\u2663', 'colon': ':', 'Colon': '\u2237', 'colone': '\u2254', 'Colone': '\u2A74', 'coloneq': '\u2254', 'comma': ',', 'commat': '@', 'comp': '\u2201', 'compfn': '\u2218', 'complement': '\u2201', 'complexes': '\u2102', 'cong': '\u2245', 'congdot': '\u2A6D', 'Congruent': '\u2261', 'conint': '\u222E', 'Conint': '\u222F', 'ContourIntegral': '\u222E', 'copf': '\uD835\uDD54', 'Copf': '\u2102', 'coprod': '\u2210', 'Coproduct': '\u2210', 'copy': '\xA9', 'COPY': '\xA9', 'copysr': '\u2117', 'CounterClockwiseContourIntegral': '\u2233', 'crarr': '\u21B5', 'cross': '\u2717', 'Cross': '\u2A2F', 'cscr': '\uD835\uDCB8', 'Cscr': '\uD835\uDC9E', 'csub': '\u2ACF', 'csube': '\u2AD1', 'csup': '\u2AD0', 'csupe': '\u2AD2', 'ctdot': '\u22EF', 'cudarrl': '\u2938', 'cudarrr': '\u2935', 'cuepr': '\u22DE', 'cuesc': '\u22DF', 'cularr': '\u21B6', 'cularrp': '\u293D', 'cup': '\u222A', 'Cup': '\u22D3', 'cupbrcap': '\u2A48', 'cupcap': '\u2A46', 'CupCap': '\u224D', 'cupcup': '\u2A4A', 'cupdot': '\u228D', 'cupor': '\u2A45', 'cups': '\u222A\uFE00', 'curarr': '\u21B7', 'curarrm': '\u293C', 'curlyeqprec': '\u22DE', 'curlyeqsucc': '\u22DF', 'curlyvee': '\u22CE', 'curlywedge': '\u22CF', 'curren': '\xA4', 'curvearrowleft': '\u21B6', 'curvearrowright': '\u21B7', 'cuvee': '\u22CE', 'cuwed': '\u22CF', 'cwconint': '\u2232', 'cwint': '\u2231', 'cylcty': '\u232D', 'dagger': '\u2020', 'Dagger': '\u2021', 'daleth': '\u2138', 'darr': '\u2193', 'dArr': '\u21D3', 'Darr': '\u21A1', 'dash': '\u2010', 'dashv': '\u22A3', 'Dashv': '\u2AE4', 'dbkarow': '\u290F', 'dblac': '\u02DD', 'dcaron': '\u010F', 'Dcaron': '\u010E', 'dcy': '\u0434', 'Dcy': '\u0414', 'dd': '\u2146', 'DD': '\u2145', 'ddagger': '\u2021', 'ddarr': '\u21CA', 'DDotrahd': '\u2911', 'ddotseq': '\u2A77', 'deg': '\xB0', 'Del': '\u2207', 'delta': '\u03B4', 'Delta': '\u0394', 'demptyv': '\u29B1', 'dfisht': '\u297F', 'dfr': '\uD835\uDD21', 'Dfr': '\uD835\uDD07', 'dHar': '\u2965', 'dharl': '\u21C3', 'dharr': '\u21C2', 'DiacriticalAcute': '\xB4', 'DiacriticalDot': '\u02D9', 'DiacriticalDoubleAcute': '\u02DD', 'DiacriticalGrave': '`', 'DiacriticalTilde': '\u02DC', 'diam': '\u22C4', 'diamond': '\u22C4', 'Diamond': '\u22C4', 'diamondsuit': '\u2666', 'diams': '\u2666', 'die': '\xA8', 'DifferentialD': '\u2146', 'digamma': '\u03DD', 'disin': '\u22F2', 'div': '\xF7', 'divide': '\xF7', 'divideontimes': '\u22C7', 'divonx': '\u22C7', 'djcy': '\u0452', 'DJcy': '\u0402', 'dlcorn': '\u231E', 'dlcrop': '\u230D', 'dollar': '$', 'dopf': '\uD835\uDD55', 'Dopf': '\uD835\uDD3B', 'dot': '\u02D9', 'Dot': '\xA8', 'DotDot': '\u20DC', 'doteq': '\u2250', 'doteqdot': '\u2251', 'DotEqual': '\u2250', 'dotminus': '\u2238', 'dotplus': '\u2214', 'dotsquare': '\u22A1', 'doublebarwedge': '\u2306', 'DoubleContourIntegral': '\u222F', 'DoubleDot': '\xA8', 'DoubleDownArrow': '\u21D3', 'DoubleLeftArrow': '\u21D0', 'DoubleLeftRightArrow': '\u21D4', 'DoubleLeftTee': '\u2AE4', 'DoubleLongLeftArrow': '\u27F8', 'DoubleLongLeftRightArrow': '\u27FA', 'DoubleLongRightArrow': '\u27F9', 'DoubleRightArrow': '\u21D2', 'DoubleRightTee': '\u22A8', 'DoubleUpArrow': '\u21D1', 'DoubleUpDownArrow': '\u21D5', 'DoubleVerticalBar': '\u2225', 'downarrow': '\u2193', 'Downarrow': '\u21D3', 'DownArrow': '\u2193', 'DownArrowBar': '\u2913', 'DownArrowUpArrow': '\u21F5', 'DownBreve': '\u0311', 'downdownarrows': '\u21CA', 'downharpoonleft': '\u21C3', 'downharpoonright': '\u21C2', 'DownLeftRightVector': '\u2950', 'DownLeftTeeVector': '\u295E', 'DownLeftVector': '\u21BD', 'DownLeftVectorBar': '\u2956', 'DownRightTeeVector': '\u295F', 'DownRightVector': '\u21C1', 'DownRightVectorBar': '\u2957', 'DownTee': '\u22A4', 'DownTeeArrow': '\u21A7', 'drbkarow': '\u2910', 'drcorn': '\u231F', 'drcrop': '\u230C', 'dscr': '\uD835\uDCB9', 'Dscr': '\uD835\uDC9F', 'dscy': '\u0455', 'DScy': '\u0405', 'dsol': '\u29F6', 'dstrok': '\u0111', 'Dstrok': '\u0110', 'dtdot': '\u22F1', 'dtri': '\u25BF', 'dtrif': '\u25BE', 'duarr': '\u21F5', 'duhar': '\u296F', 'dwangle': '\u29A6', 'dzcy': '\u045F', 'DZcy': '\u040F', 'dzigrarr': '\u27FF', 'eacute': '\xE9', 'Eacute': '\xC9', 'easter': '\u2A6E', 'ecaron': '\u011B', 'Ecaron': '\u011A', 'ecir': '\u2256', 'ecirc': '\xEA', 'Ecirc': '\xCA', 'ecolon': '\u2255', 'ecy': '\u044D', 'Ecy': '\u042D', 'eDDot': '\u2A77', 'edot': '\u0117', 'eDot': '\u2251', 'Edot': '\u0116', 'ee': '\u2147', 'efDot': '\u2252', 'efr': '\uD835\uDD22', 'Efr': '\uD835\uDD08', 'eg': '\u2A9A', 'egrave': '\xE8', 'Egrave': '\xC8', 'egs': '\u2A96', 'egsdot': '\u2A98', 'el': '\u2A99', 'Element': '\u2208', 'elinters': '\u23E7', 'ell': '\u2113', 'els': '\u2A95', 'elsdot': '\u2A97', 'emacr': '\u0113', 'Emacr': '\u0112', 'empty': '\u2205', 'emptyset': '\u2205', 'EmptySmallSquare': '\u25FB', 'emptyv': '\u2205', 'EmptyVerySmallSquare': '\u25AB', 'emsp': '\u2003', 'emsp13': '\u2004', 'emsp14': '\u2005', 'eng': '\u014B', 'ENG': '\u014A', 'ensp': '\u2002', 'eogon': '\u0119', 'Eogon': '\u0118', 'eopf': '\uD835\uDD56', 'Eopf': '\uD835\uDD3C', 'epar': '\u22D5', 'eparsl': '\u29E3', 'eplus': '\u2A71', 'epsi': '\u03B5', 'epsilon': '\u03B5', 'Epsilon': '\u0395', 'epsiv': '\u03F5', 'eqcirc': '\u2256', 'eqcolon': '\u2255', 'eqsim': '\u2242', 'eqslantgtr': '\u2A96', 'eqslantless': '\u2A95', 'Equal': '\u2A75', 'equals': '=', 'EqualTilde': '\u2242', 'equest': '\u225F', 'Equilibrium': '\u21CC', 'equiv': '\u2261', 'equivDD': '\u2A78', 'eqvparsl': '\u29E5', 'erarr': '\u2971', 'erDot': '\u2253', 'escr': '\u212F', 'Escr': '\u2130', 'esdot': '\u2250', 'esim': '\u2242', 'Esim': '\u2A73', 'eta': '\u03B7', 'Eta': '\u0397', 'eth': '\xF0', 'ETH': '\xD0', 'euml': '\xEB', 'Euml': '\xCB', 'euro': '\u20AC', 'excl': '!', 'exist': '\u2203', 'Exists': '\u2203', 'expectation': '\u2130', 'exponentiale': '\u2147', 'ExponentialE': '\u2147', 'fallingdotseq': '\u2252', 'fcy': '\u0444', 'Fcy': '\u0424', 'female': '\u2640', 'ffilig': '\uFB03', 'fflig': '\uFB00', 'ffllig': '\uFB04', 'ffr': '\uD835\uDD23', 'Ffr': '\uD835\uDD09', 'filig': '\uFB01', 'FilledSmallSquare': '\u25FC', 'FilledVerySmallSquare': '\u25AA', 'fjlig': 'fj', 'flat': '\u266D', 'fllig': '\uFB02', 'fltns': '\u25B1', 'fnof': '\u0192', 'fopf': '\uD835\uDD57', 'Fopf': '\uD835\uDD3D', 'forall': '\u2200', 'ForAll': '\u2200', 'fork': '\u22D4', 'forkv': '\u2AD9', 'Fouriertrf': '\u2131', 'fpartint': '\u2A0D', 'frac12': '\xBD', 'frac13': '\u2153', 'frac14': '\xBC', 'frac15': '\u2155', 'frac16': '\u2159', 'frac18': '\u215B', 'frac23': '\u2154', 'frac25': '\u2156', 'frac34': '\xBE', 'frac35': '\u2157', 'frac38': '\u215C', 'frac45': '\u2158', 'frac56': '\u215A', 'frac58': '\u215D', 'frac78': '\u215E', 'frasl': '\u2044', 'frown': '\u2322', 'fscr': '\uD835\uDCBB', 'Fscr': '\u2131', 'gacute': '\u01F5', 'gamma': '\u03B3', 'Gamma': '\u0393', 'gammad': '\u03DD', 'Gammad': '\u03DC', 'gap': '\u2A86', 'gbreve': '\u011F', 'Gbreve': '\u011E', 'Gcedil': '\u0122', 'gcirc': '\u011D', 'Gcirc': '\u011C', 'gcy': '\u0433', 'Gcy': '\u0413', 'gdot': '\u0121', 'Gdot': '\u0120', 'ge': '\u2265', 'gE': '\u2267', 'gel': '\u22DB', 'gEl': '\u2A8C', 'geq': '\u2265', 'geqq': '\u2267', 'geqslant': '\u2A7E', 'ges': '\u2A7E', 'gescc': '\u2AA9', 'gesdot': '\u2A80', 'gesdoto': '\u2A82', 'gesdotol': '\u2A84', 'gesl': '\u22DB\uFE00', 'gesles': '\u2A94', 'gfr': '\uD835\uDD24', 'Gfr': '\uD835\uDD0A', 'gg': '\u226B', 'Gg': '\u22D9', 'ggg': '\u22D9', 'gimel': '\u2137', 'gjcy': '\u0453', 'GJcy': '\u0403', 'gl': '\u2277', 'gla': '\u2AA5', 'glE': '\u2A92', 'glj': '\u2AA4', 'gnap': '\u2A8A', 'gnapprox': '\u2A8A', 'gne': '\u2A88', 'gnE': '\u2269', 'gneq': '\u2A88', 'gneqq': '\u2269', 'gnsim': '\u22E7', 'gopf': '\uD835\uDD58', 'Gopf': '\uD835\uDD3E', 'grave': '`', 'GreaterEqual': '\u2265', 'GreaterEqualLess': '\u22DB', 'GreaterFullEqual': '\u2267', 'GreaterGreater': '\u2AA2', 'GreaterLess': '\u2277', 'GreaterSlantEqual': '\u2A7E', 'GreaterTilde': '\u2273', 'gscr': '\u210A', 'Gscr': '\uD835\uDCA2', 'gsim': '\u2273', 'gsime': '\u2A8E', 'gsiml': '\u2A90', 'gt': '>', 'Gt': '\u226B', 'GT': '>', 'gtcc': '\u2AA7', 'gtcir': '\u2A7A', 'gtdot': '\u22D7', 'gtlPar': '\u2995', 'gtquest': '\u2A7C', 'gtrapprox': '\u2A86', 'gtrarr': '\u2978', 'gtrdot': '\u22D7', 'gtreqless': '\u22DB', 'gtreqqless': '\u2A8C', 'gtrless': '\u2277', 'gtrsim': '\u2273', 'gvertneqq': '\u2269\uFE00', 'gvnE': '\u2269\uFE00', 'Hacek': '\u02C7', 'hairsp': '\u200A', 'half': '\xBD', 'hamilt': '\u210B', 'hardcy': '\u044A', 'HARDcy': '\u042A', 'harr': '\u2194', 'hArr': '\u21D4', 'harrcir': '\u2948', 'harrw': '\u21AD', 'Hat': '^', 'hbar': '\u210F', 'hcirc': '\u0125', 'Hcirc': '\u0124', 'hearts': '\u2665', 'heartsuit': '\u2665', 'hellip': '\u2026', 'hercon': '\u22B9', 'hfr': '\uD835\uDD25', 'Hfr': '\u210C', 'HilbertSpace': '\u210B', 'hksearow': '\u2925', 'hkswarow': '\u2926', 'hoarr': '\u21FF', 'homtht': '\u223B', 'hookleftarrow': '\u21A9', 'hookrightarrow': '\u21AA', 'hopf': '\uD835\uDD59', 'Hopf': '\u210D', 'horbar': '\u2015', 'HorizontalLine': '\u2500', 'hscr': '\uD835\uDCBD', 'Hscr': '\u210B', 'hslash': '\u210F', 'hstrok': '\u0127', 'Hstrok': '\u0126', 'HumpDownHump': '\u224E', 'HumpEqual': '\u224F', 'hybull': '\u2043', 'hyphen': '\u2010', 'iacute': '\xED', 'Iacute': '\xCD', 'ic': '\u2063', 'icirc': '\xEE', 'Icirc': '\xCE', 'icy': '\u0438', 'Icy': '\u0418', 'Idot': '\u0130', 'iecy': '\u0435', 'IEcy': '\u0415', 'iexcl': '\xA1', 'iff': '\u21D4', 'ifr': '\uD835\uDD26', 'Ifr': '\u2111', 'igrave': '\xEC', 'Igrave': '\xCC', 'ii': '\u2148', 'iiiint': '\u2A0C', 'iiint': '\u222D', 'iinfin': '\u29DC', 'iiota': '\u2129', 'ijlig': '\u0133', 'IJlig': '\u0132', 'Im': '\u2111', 'imacr': '\u012B', 'Imacr': '\u012A', 'image': '\u2111', 'ImaginaryI': '\u2148', 'imagline': '\u2110', 'imagpart': '\u2111', 'imath': '\u0131', 'imof': '\u22B7', 'imped': '\u01B5', 'Implies': '\u21D2', 'in': '\u2208', 'incare': '\u2105', 'infin': '\u221E', 'infintie': '\u29DD', 'inodot': '\u0131', 'int': '\u222B', 'Int': '\u222C', 'intcal': '\u22BA', 'integers': '\u2124', 'Integral': '\u222B', 'intercal': '\u22BA', 'Intersection': '\u22C2', 'intlarhk': '\u2A17', 'intprod': '\u2A3C', 'InvisibleComma': '\u2063', 'InvisibleTimes': '\u2062', 'iocy': '\u0451', 'IOcy': '\u0401', 'iogon': '\u012F', 'Iogon': '\u012E', 'iopf': '\uD835\uDD5A', 'Iopf': '\uD835\uDD40', 'iota': '\u03B9', 'Iota': '\u0399', 'iprod': '\u2A3C', 'iquest': '\xBF', 'iscr': '\uD835\uDCBE', 'Iscr': '\u2110', 'isin': '\u2208', 'isindot': '\u22F5', 'isinE': '\u22F9', 'isins': '\u22F4', 'isinsv': '\u22F3', 'isinv': '\u2208', 'it': '\u2062', 'itilde': '\u0129', 'Itilde': '\u0128', 'iukcy': '\u0456', 'Iukcy': '\u0406', 'iuml': '\xEF', 'Iuml': '\xCF', 'jcirc': '\u0135', 'Jcirc': '\u0134', 'jcy': '\u0439', 'Jcy': '\u0419', 'jfr': '\uD835\uDD27', 'Jfr': '\uD835\uDD0D', 'jmath': '\u0237', 'jopf': '\uD835\uDD5B', 'Jopf': '\uD835\uDD41', 'jscr': '\uD835\uDCBF', 'Jscr': '\uD835\uDCA5', 'jsercy': '\u0458', 'Jsercy': '\u0408', 'jukcy': '\u0454', 'Jukcy': '\u0404', 'kappa': '\u03BA', 'Kappa': '\u039A', 'kappav': '\u03F0', 'kcedil': '\u0137', 'Kcedil': '\u0136', 'kcy': '\u043A', 'Kcy': '\u041A', 'kfr': '\uD835\uDD28', 'Kfr': '\uD835\uDD0E', 'kgreen': '\u0138', 'khcy': '\u0445', 'KHcy': '\u0425', 'kjcy': '\u045C', 'KJcy': '\u040C', 'kopf': '\uD835\uDD5C', 'Kopf': '\uD835\uDD42', 'kscr': '\uD835\uDCC0', 'Kscr': '\uD835\uDCA6', 'lAarr': '\u21DA', 'lacute': '\u013A', 'Lacute': '\u0139', 'laemptyv': '\u29B4', 'lagran': '\u2112', 'lambda': '\u03BB', 'Lambda': '\u039B', 'lang': '\u27E8', 'Lang': '\u27EA', 'langd': '\u2991', 'langle': '\u27E8', 'lap': '\u2A85', 'Laplacetrf': '\u2112', 'laquo': '\xAB', 'larr': '\u2190', 'lArr': '\u21D0', 'Larr': '\u219E', 'larrb': '\u21E4', 'larrbfs': '\u291F', 'larrfs': '\u291D', 'larrhk': '\u21A9', 'larrlp': '\u21AB', 'larrpl': '\u2939', 'larrsim': '\u2973', 'larrtl': '\u21A2', 'lat': '\u2AAB', 'latail': '\u2919', 'lAtail': '\u291B', 'late': '\u2AAD', 'lates': '\u2AAD\uFE00', 'lbarr': '\u290C', 'lBarr': '\u290E', 'lbbrk': '\u2772', 'lbrace': '{', 'lbrack': '[', 'lbrke': '\u298B', 'lbrksld': '\u298F', 'lbrkslu': '\u298D', 'lcaron': '\u013E', 'Lcaron': '\u013D', 'lcedil': '\u013C', 'Lcedil': '\u013B', 'lceil': '\u2308', 'lcub': '{', 'lcy': '\u043B', 'Lcy': '\u041B', 'ldca': '\u2936', 'ldquo': '\u201C', 'ldquor': '\u201E', 'ldrdhar': '\u2967', 'ldrushar': '\u294B', 'ldsh': '\u21B2', 'le': '\u2264', 'lE': '\u2266', 'LeftAngleBracket': '\u27E8', 'leftarrow': '\u2190', 'Leftarrow': '\u21D0', 'LeftArrow': '\u2190', 'LeftArrowBar': '\u21E4', 'LeftArrowRightArrow': '\u21C6', 'leftarrowtail': '\u21A2', 'LeftCeiling': '\u2308', 'LeftDoubleBracket': '\u27E6', 'LeftDownTeeVector': '\u2961', 'LeftDownVector': '\u21C3', 'LeftDownVectorBar': '\u2959', 'LeftFloor': '\u230A', 'leftharpoondown': '\u21BD', 'leftharpoonup': '\u21BC', 'leftleftarrows': '\u21C7', 'leftrightarrow': '\u2194', 'Leftrightarrow': '\u21D4', 'LeftRightArrow': '\u2194', 'leftrightarrows': '\u21C6', 'leftrightharpoons': '\u21CB', 'leftrightsquigarrow': '\u21AD', 'LeftRightVector': '\u294E', 'LeftTee': '\u22A3', 'LeftTeeArrow': '\u21A4', 'LeftTeeVector': '\u295A', 'leftthreetimes': '\u22CB', 'LeftTriangle': '\u22B2', 'LeftTriangleBar': '\u29CF', 'LeftTriangleEqual': '\u22B4', 'LeftUpDownVector': '\u2951', 'LeftUpTeeVector': '\u2960', 'LeftUpVector': '\u21BF', 'LeftUpVectorBar': '\u2958', 'LeftVector': '\u21BC', 'LeftVectorBar': '\u2952', 'leg': '\u22DA', 'lEg': '\u2A8B', 'leq': '\u2264', 'leqq': '\u2266', 'leqslant': '\u2A7D', 'les': '\u2A7D', 'lescc': '\u2AA8', 'lesdot': '\u2A7F', 'lesdoto': '\u2A81', 'lesdotor': '\u2A83', 'lesg': '\u22DA\uFE00', 'lesges': '\u2A93', 'lessapprox': '\u2A85', 'lessdot': '\u22D6', 'lesseqgtr': '\u22DA', 'lesseqqgtr': '\u2A8B', 'LessEqualGreater': '\u22DA', 'LessFullEqual': '\u2266', 'LessGreater': '\u2276', 'lessgtr': '\u2276', 'LessLess': '\u2AA1', 'lesssim': '\u2272', 'LessSlantEqual': '\u2A7D', 'LessTilde': '\u2272', 'lfisht': '\u297C', 'lfloor': '\u230A', 'lfr': '\uD835\uDD29', 'Lfr': '\uD835\uDD0F', 'lg': '\u2276', 'lgE': '\u2A91', 'lHar': '\u2962', 'lhard': '\u21BD', 'lharu': '\u21BC', 'lharul': '\u296A', 'lhblk': '\u2584', 'ljcy': '\u0459', 'LJcy': '\u0409', 'll': '\u226A', 'Ll': '\u22D8', 'llarr': '\u21C7', 'llcorner': '\u231E', 'Lleftarrow': '\u21DA', 'llhard': '\u296B', 'lltri': '\u25FA', 'lmidot': '\u0140', 'Lmidot': '\u013F', 'lmoust': '\u23B0', 'lmoustache': '\u23B0', 'lnap': '\u2A89', 'lnapprox': '\u2A89', 'lne': '\u2A87', 'lnE': '\u2268', 'lneq': '\u2A87', 'lneqq': '\u2268', 'lnsim': '\u22E6', 'loang': '\u27EC', 'loarr': '\u21FD', 'lobrk': '\u27E6', 'longleftarrow': '\u27F5', 'Longleftarrow': '\u27F8', 'LongLeftArrow': '\u27F5', 'longleftrightarrow': '\u27F7', 'Longleftrightarrow': '\u27FA', 'LongLeftRightArrow': '\u27F7', 'longmapsto': '\u27FC', 'longrightarrow': '\u27F6', 'Longrightarrow': '\u27F9', 'LongRightArrow': '\u27F6', 'looparrowleft': '\u21AB', 'looparrowright': '\u21AC', 'lopar': '\u2985', 'lopf': '\uD835\uDD5D', 'Lopf': '\uD835\uDD43', 'loplus': '\u2A2D', 'lotimes': '\u2A34', 'lowast': '\u2217', 'lowbar': '_', 'LowerLeftArrow': '\u2199', 'LowerRightArrow': '\u2198', 'loz': '\u25CA', 'lozenge': '\u25CA', 'lozf': '\u29EB', 'lpar': '(', 'lparlt': '\u2993', 'lrarr': '\u21C6', 'lrcorner': '\u231F', 'lrhar': '\u21CB', 'lrhard': '\u296D', 'lrm': '\u200E', 'lrtri': '\u22BF', 'lsaquo': '\u2039', 'lscr': '\uD835\uDCC1', 'Lscr': '\u2112', 'lsh': '\u21B0', 'Lsh': '\u21B0', 'lsim': '\u2272', 'lsime': '\u2A8D', 'lsimg': '\u2A8F', 'lsqb': '[', 'lsquo': '\u2018', 'lsquor': '\u201A', 'lstrok': '\u0142', 'Lstrok': '\u0141', 'lt': '<', 'Lt': '\u226A', 'LT': '<', 'ltcc': '\u2AA6', 'ltcir': '\u2A79', 'ltdot': '\u22D6', 'lthree': '\u22CB', 'ltimes': '\u22C9', 'ltlarr': '\u2976', 'ltquest': '\u2A7B', 'ltri': '\u25C3', 'ltrie': '\u22B4', 'ltrif': '\u25C2', 'ltrPar': '\u2996', 'lurdshar': '\u294A', 'luruhar': '\u2966', 'lvertneqq': '\u2268\uFE00', 'lvnE': '\u2268\uFE00', 'macr': '\xAF', 'male': '\u2642', 'malt': '\u2720', 'maltese': '\u2720', 'map': '\u21A6', 'Map': '\u2905', 'mapsto': '\u21A6', 'mapstodown': '\u21A7', 'mapstoleft': '\u21A4', 'mapstoup': '\u21A5', 'marker': '\u25AE', 'mcomma': '\u2A29', 'mcy': '\u043C', 'Mcy': '\u041C', 'mdash': '\u2014', 'mDDot': '\u223A', 'measuredangle': '\u2221', 'MediumSpace': '\u205F', 'Mellintrf': '\u2133', 'mfr': '\uD835\uDD2A', 'Mfr': '\uD835\uDD10', 'mho': '\u2127', 'micro': '\xB5', 'mid': '\u2223', 'midast': '*', 'midcir': '\u2AF0', 'middot': '\xB7', 'minus': '\u2212', 'minusb': '\u229F', 'minusd': '\u2238', 'minusdu': '\u2A2A', 'MinusPlus': '\u2213', 'mlcp': '\u2ADB', 'mldr': '\u2026', 'mnplus': '\u2213', 'models': '\u22A7', 'mopf': '\uD835\uDD5E', 'Mopf': '\uD835\uDD44', 'mp': '\u2213', 'mscr': '\uD835\uDCC2', 'Mscr': '\u2133', 'mstpos': '\u223E', 'mu': '\u03BC', 'Mu': '\u039C', 'multimap': '\u22B8', 'mumap': '\u22B8', 'nabla': '\u2207', 'nacute': '\u0144', 'Nacute': '\u0143', 'nang': '\u2220\u20D2', 'nap': '\u2249', 'napE': '\u2A70\u0338', 'napid': '\u224B\u0338', 'napos': '\u0149', 'napprox': '\u2249', 'natur': '\u266E', 'natural': '\u266E', 'naturals': '\u2115', 'nbsp': '\xA0', 'nbump': '\u224E\u0338', 'nbumpe': '\u224F\u0338', 'ncap': '\u2A43', 'ncaron': '\u0148', 'Ncaron': '\u0147', 'ncedil': '\u0146', 'Ncedil': '\u0145', 'ncong': '\u2247', 'ncongdot': '\u2A6D\u0338', 'ncup': '\u2A42', 'ncy': '\u043D', 'Ncy': '\u041D', 'ndash': '\u2013', 'ne': '\u2260', 'nearhk': '\u2924', 'nearr': '\u2197', 'neArr': '\u21D7', 'nearrow': '\u2197', 'nedot': '\u2250\u0338', 'NegativeMediumSpace': '\u200B', 'NegativeThickSpace': '\u200B', 'NegativeThinSpace': '\u200B', 'NegativeVeryThinSpace': '\u200B', 'nequiv': '\u2262', 'nesear': '\u2928', 'nesim': '\u2242\u0338', 'NestedGreaterGreater': '\u226B', 'NestedLessLess': '\u226A', 'NewLine': '\n', 'nexist': '\u2204', 'nexists': '\u2204', 'nfr': '\uD835\uDD2B', 'Nfr': '\uD835\uDD11', 'nge': '\u2271', 'ngE': '\u2267\u0338', 'ngeq': '\u2271', 'ngeqq': '\u2267\u0338', 'ngeqslant': '\u2A7E\u0338', 'nges': '\u2A7E\u0338', 'nGg': '\u22D9\u0338', 'ngsim': '\u2275', 'ngt': '\u226F', 'nGt': '\u226B\u20D2', 'ngtr': '\u226F', 'nGtv': '\u226B\u0338', 'nharr': '\u21AE', 'nhArr': '\u21CE', 'nhpar': '\u2AF2', 'ni': '\u220B', 'nis': '\u22FC', 'nisd': '\u22FA', 'niv': '\u220B', 'njcy': '\u045A', 'NJcy': '\u040A', 'nlarr': '\u219A', 'nlArr': '\u21CD', 'nldr': '\u2025', 'nle': '\u2270', 'nlE': '\u2266\u0338', 'nleftarrow': '\u219A', 'nLeftarrow': '\u21CD', 'nleftrightarrow': '\u21AE', 'nLeftrightarrow': '\u21CE', 'nleq': '\u2270', 'nleqq': '\u2266\u0338', 'nleqslant': '\u2A7D\u0338', 'nles': '\u2A7D\u0338', 'nless': '\u226E', 'nLl': '\u22D8\u0338', 'nlsim': '\u2274', 'nlt': '\u226E', 'nLt': '\u226A\u20D2', 'nltri': '\u22EA', 'nltrie': '\u22EC', 'nLtv': '\u226A\u0338', 'nmid': '\u2224', 'NoBreak': '\u2060', 'NonBreakingSpace': '\xA0', 'nopf': '\uD835\uDD5F', 'Nopf': '\u2115', 'not': '\xAC', 'Not': '\u2AEC', 'NotCongruent': '\u2262', 'NotCupCap': '\u226D', 'NotDoubleVerticalBar': '\u2226', 'NotElement': '\u2209', 'NotEqual': '\u2260', 'NotEqualTilde': '\u2242\u0338', 'NotExists': '\u2204', 'NotGreater': '\u226F', 'NotGreaterEqual': '\u2271', 'NotGreaterFullEqual': '\u2267\u0338', 'NotGreaterGreater': '\u226B\u0338', 'NotGreaterLess': '\u2279', 'NotGreaterSlantEqual': '\u2A7E\u0338', 'NotGreaterTilde': '\u2275', 'NotHumpDownHump': '\u224E\u0338', 'NotHumpEqual': '\u224F\u0338', 'notin': '\u2209', 'notindot': '\u22F5\u0338', 'notinE': '\u22F9\u0338', 'notinva': '\u2209', 'notinvb': '\u22F7', 'notinvc': '\u22F6', 'NotLeftTriangle': '\u22EA', 'NotLeftTriangleBar': '\u29CF\u0338', 'NotLeftTriangleEqual': '\u22EC', 'NotLess': '\u226E', 'NotLessEqual': '\u2270', 'NotLessGreater': '\u2278', 'NotLessLess': '\u226A\u0338', 'NotLessSlantEqual': '\u2A7D\u0338', 'NotLessTilde': '\u2274', 'NotNestedGreaterGreater': '\u2AA2\u0338', 'NotNestedLessLess': '\u2AA1\u0338', 'notni': '\u220C', 'notniva': '\u220C', 'notnivb': '\u22FE', 'notnivc': '\u22FD', 'NotPrecedes': '\u2280', 'NotPrecedesEqual': '\u2AAF\u0338', 'NotPrecedesSlantEqual': '\u22E0', 'NotReverseElement': '\u220C', 'NotRightTriangle': '\u22EB', 'NotRightTriangleBar': '\u29D0\u0338', 'NotRightTriangleEqual': '\u22ED', 'NotSquareSubset': '\u228F\u0338', 'NotSquareSubsetEqual': '\u22E2', 'NotSquareSuperset': '\u2290\u0338', 'NotSquareSupersetEqual': '\u22E3', 'NotSubset': '\u2282\u20D2', 'NotSubsetEqual': '\u2288', 'NotSucceeds': '\u2281', 'NotSucceedsEqual': '\u2AB0\u0338', 'NotSucceedsSlantEqual': '\u22E1', 'NotSucceedsTilde': '\u227F\u0338', 'NotSuperset': '\u2283\u20D2', 'NotSupersetEqual': '\u2289', 'NotTilde': '\u2241', 'NotTildeEqual': '\u2244', 'NotTildeFullEqual': '\u2247', 'NotTildeTilde': '\u2249', 'NotVerticalBar': '\u2224', 'npar': '\u2226', 'nparallel': '\u2226', 'nparsl': '\u2AFD\u20E5', 'npart': '\u2202\u0338', 'npolint': '\u2A14', 'npr': '\u2280', 'nprcue': '\u22E0', 'npre': '\u2AAF\u0338', 'nprec': '\u2280', 'npreceq': '\u2AAF\u0338', 'nrarr': '\u219B', 'nrArr': '\u21CF', 'nrarrc': '\u2933\u0338', 'nrarrw': '\u219D\u0338', 'nrightarrow': '\u219B', 'nRightarrow': '\u21CF', 'nrtri': '\u22EB', 'nrtrie': '\u22ED', 'nsc': '\u2281', 'nsccue': '\u22E1', 'nsce': '\u2AB0\u0338', 'nscr': '\uD835\uDCC3', 'Nscr': '\uD835\uDCA9', 'nshortmid': '\u2224', 'nshortparallel': '\u2226', 'nsim': '\u2241', 'nsime': '\u2244', 'nsimeq': '\u2244', 'nsmid': '\u2224', 'nspar': '\u2226', 'nsqsube': '\u22E2', 'nsqsupe': '\u22E3', 'nsub': '\u2284', 'nsube': '\u2288', 'nsubE': '\u2AC5\u0338', 'nsubset': '\u2282\u20D2', 'nsubseteq': '\u2288', 'nsubseteqq': '\u2AC5\u0338', 'nsucc': '\u2281', 'nsucceq': '\u2AB0\u0338', 'nsup': '\u2285', 'nsupe': '\u2289', 'nsupE': '\u2AC6\u0338', 'nsupset': '\u2283\u20D2', 'nsupseteq': '\u2289', 'nsupseteqq': '\u2AC6\u0338', 'ntgl': '\u2279', 'ntilde': '\xF1', 'Ntilde': '\xD1', 'ntlg': '\u2278', 'ntriangleleft': '\u22EA', 'ntrianglelefteq': '\u22EC', 'ntriangleright': '\u22EB', 'ntrianglerighteq': '\u22ED', 'nu': '\u03BD', 'Nu': '\u039D', 'num': '#', 'numero': '\u2116', 'numsp': '\u2007', 'nvap': '\u224D\u20D2', 'nvdash': '\u22AC', 'nvDash': '\u22AD', 'nVdash': '\u22AE', 'nVDash': '\u22AF', 'nvge': '\u2265\u20D2', 'nvgt': '>\u20D2', 'nvHarr': '\u2904', 'nvinfin': '\u29DE', 'nvlArr': '\u2902', 'nvle': '\u2264\u20D2', 'nvlt': '<\u20D2', 'nvltrie': '\u22B4\u20D2', 'nvrArr': '\u2903', 'nvrtrie': '\u22B5\u20D2', 'nvsim': '\u223C\u20D2', 'nwarhk': '\u2923', 'nwarr': '\u2196', 'nwArr': '\u21D6', 'nwarrow': '\u2196', 'nwnear': '\u2927', 'oacute': '\xF3', 'Oacute': '\xD3', 'oast': '\u229B', 'ocir': '\u229A', 'ocirc': '\xF4', 'Ocirc': '\xD4', 'ocy': '\u043E', 'Ocy': '\u041E', 'odash': '\u229D', 'odblac': '\u0151', 'Odblac': '\u0150', 'odiv': '\u2A38', 'odot': '\u2299', 'odsold': '\u29BC', 'oelig': '\u0153', 'OElig': '\u0152', 'ofcir': '\u29BF', 'ofr': '\uD835\uDD2C', 'Ofr': '\uD835\uDD12', 'ogon': '\u02DB', 'ograve': '\xF2', 'Ograve': '\xD2', 'ogt': '\u29C1', 'ohbar': '\u29B5', 'ohm': '\u03A9', 'oint': '\u222E', 'olarr': '\u21BA', 'olcir': '\u29BE', 'olcross': '\u29BB', 'oline': '\u203E', 'olt': '\u29C0', 'omacr': '\u014D', 'Omacr': '\u014C', 'omega': '\u03C9', 'Omega': '\u03A9', 'omicron': '\u03BF', 'Omicron': '\u039F', 'omid': '\u29B6', 'ominus': '\u2296', 'oopf': '\uD835\uDD60', 'Oopf': '\uD835\uDD46', 'opar': '\u29B7', 'OpenCurlyDoubleQuote': '\u201C', 'OpenCurlyQuote': '\u2018', 'operp': '\u29B9', 'oplus': '\u2295', 'or': '\u2228', 'Or': '\u2A54', 'orarr': '\u21BB', 'ord': '\u2A5D', 'order': '\u2134', 'orderof': '\u2134', 'ordf': '\xAA', 'ordm': '\xBA', 'origof': '\u22B6', 'oror': '\u2A56', 'orslope': '\u2A57', 'orv': '\u2A5B', 'oS': '\u24C8', 'oscr': '\u2134', 'Oscr': '\uD835\uDCAA', 'oslash': '\xF8', 'Oslash': '\xD8', 'osol': '\u2298', 'otilde': '\xF5', 'Otilde': '\xD5', 'otimes': '\u2297', 'Otimes': '\u2A37', 'otimesas': '\u2A36', 'ouml': '\xF6', 'Ouml': '\xD6', 'ovbar': '\u233D', 'OverBar': '\u203E', 'OverBrace': '\u23DE', 'OverBracket': '\u23B4', 'OverParenthesis': '\u23DC', 'par': '\u2225', 'para': '\xB6', 'parallel': '\u2225', 'parsim': '\u2AF3', 'parsl': '\u2AFD', 'part': '\u2202', 'PartialD': '\u2202', 'pcy': '\u043F', 'Pcy': '\u041F', 'percnt': '%', 'period': '.', 'permil': '\u2030', 'perp': '\u22A5', 'pertenk': '\u2031', 'pfr': '\uD835\uDD2D', 'Pfr': '\uD835\uDD13', 'phi': '\u03C6', 'Phi': '\u03A6', 'phiv': '\u03D5', 'phmmat': '\u2133', 'phone': '\u260E', 'pi': '\u03C0', 'Pi': '\u03A0', 'pitchfork': '\u22D4', 'piv': '\u03D6', 'planck': '\u210F', 'planckh': '\u210E', 'plankv': '\u210F', 'plus': '+', 'plusacir': '\u2A23', 'plusb': '\u229E', 'pluscir': '\u2A22', 'plusdo': '\u2214', 'plusdu': '\u2A25', 'pluse': '\u2A72', 'PlusMinus': '\xB1', 'plusmn': '\xB1', 'plussim': '\u2A26', 'plustwo': '\u2A27', 'pm': '\xB1', 'Poincareplane': '\u210C', 'pointint': '\u2A15', 'popf': '\uD835\uDD61', 'Popf': '\u2119', 'pound': '\xA3', 'pr': '\u227A', 'Pr': '\u2ABB', 'prap': '\u2AB7', 'prcue': '\u227C', 'pre': '\u2AAF', 'prE': '\u2AB3', 'prec': '\u227A', 'precapprox': '\u2AB7', 'preccurlyeq': '\u227C', 'Precedes': '\u227A', 'PrecedesEqual': '\u2AAF', 'PrecedesSlantEqual': '\u227C', 'PrecedesTilde': '\u227E', 'preceq': '\u2AAF', 'precnapprox': '\u2AB9', 'precneqq': '\u2AB5', 'precnsim': '\u22E8', 'precsim': '\u227E', 'prime': '\u2032', 'Prime': '\u2033', 'primes': '\u2119', 'prnap': '\u2AB9', 'prnE': '\u2AB5', 'prnsim': '\u22E8', 'prod': '\u220F', 'Product': '\u220F', 'profalar': '\u232E', 'profline': '\u2312', 'profsurf': '\u2313', 'prop': '\u221D', 'Proportion': '\u2237', 'Proportional': '\u221D', 'propto': '\u221D', 'prsim': '\u227E', 'prurel': '\u22B0', 'pscr': '\uD835\uDCC5', 'Pscr': '\uD835\uDCAB', 'psi': '\u03C8', 'Psi': '\u03A8', 'puncsp': '\u2008', 'qfr': '\uD835\uDD2E', 'Qfr': '\uD835\uDD14', 'qint': '\u2A0C', 'qopf': '\uD835\uDD62', 'Qopf': '\u211A', 'qprime': '\u2057', 'qscr': '\uD835\uDCC6', 'Qscr': '\uD835\uDCAC', 'quaternions': '\u210D', 'quatint': '\u2A16', 'quest': '?', 'questeq': '\u225F', 'quot': '"', 'QUOT': '"', 'rAarr': '\u21DB', 'race': '\u223D\u0331', 'racute': '\u0155', 'Racute': '\u0154', 'radic': '\u221A', 'raemptyv': '\u29B3', 'rang': '\u27E9', 'Rang': '\u27EB', 'rangd': '\u2992', 'range': '\u29A5', 'rangle': '\u27E9', 'raquo': '\xBB', 'rarr': '\u2192', 'rArr': '\u21D2', 'Rarr': '\u21A0', 'rarrap': '\u2975', 'rarrb': '\u21E5', 'rarrbfs': '\u2920', 'rarrc': '\u2933', 'rarrfs': '\u291E', 'rarrhk': '\u21AA', 'rarrlp': '\u21AC', 'rarrpl': '\u2945', 'rarrsim': '\u2974', 'rarrtl': '\u21A3', 'Rarrtl': '\u2916', 'rarrw': '\u219D', 'ratail': '\u291A', 'rAtail': '\u291C', 'ratio': '\u2236', 'rationals': '\u211A', 'rbarr': '\u290D', 'rBarr': '\u290F', 'RBarr': '\u2910', 'rbbrk': '\u2773', 'rbrace': '}', 'rbrack': ']', 'rbrke': '\u298C', 'rbrksld': '\u298E', 'rbrkslu': '\u2990', 'rcaron': '\u0159', 'Rcaron': '\u0158', 'rcedil': '\u0157', 'Rcedil': '\u0156', 'rceil': '\u2309', 'rcub': '}', 'rcy': '\u0440', 'Rcy': '\u0420', 'rdca': '\u2937', 'rdldhar': '\u2969', 'rdquo': '\u201D', 'rdquor': '\u201D', 'rdsh': '\u21B3', 'Re': '\u211C', 'real': '\u211C', 'realine': '\u211B', 'realpart': '\u211C', 'reals': '\u211D', 'rect': '\u25AD', 'reg': '\xAE', 'REG': '\xAE', 'ReverseElement': '\u220B', 'ReverseEquilibrium': '\u21CB', 'ReverseUpEquilibrium': '\u296F', 'rfisht': '\u297D', 'rfloor': '\u230B', 'rfr': '\uD835\uDD2F', 'Rfr': '\u211C', 'rHar': '\u2964', 'rhard': '\u21C1', 'rharu': '\u21C0', 'rharul': '\u296C', 'rho': '\u03C1', 'Rho': '\u03A1', 'rhov': '\u03F1', 'RightAngleBracket': '\u27E9', 'rightarrow': '\u2192', 'Rightarrow': '\u21D2', 'RightArrow': '\u2192', 'RightArrowBar': '\u21E5', 'RightArrowLeftArrow': '\u21C4', 'rightarrowtail': '\u21A3', 'RightCeiling': '\u2309', 'RightDoubleBracket': '\u27E7', 'RightDownTeeVector': '\u295D', 'RightDownVector': '\u21C2', 'RightDownVectorBar': '\u2955', 'RightFloor': '\u230B', 'rightharpoondown': '\u21C1', 'rightharpoonup': '\u21C0', 'rightleftarrows': '\u21C4', 'rightleftharpoons': '\u21CC', 'rightrightarrows': '\u21C9', 'rightsquigarrow': '\u219D', 'RightTee': '\u22A2', 'RightTeeArrow': '\u21A6', 'RightTeeVector': '\u295B', 'rightthreetimes': '\u22CC', 'RightTriangle': '\u22B3', 'RightTriangleBar': '\u29D0', 'RightTriangleEqual': '\u22B5', 'RightUpDownVector': '\u294F', 'RightUpTeeVector': '\u295C', 'RightUpVector': '\u21BE', 'RightUpVectorBar': '\u2954', 'RightVector': '\u21C0', 'RightVectorBar': '\u2953', 'ring': '\u02DA', 'risingdotseq': '\u2253', 'rlarr': '\u21C4', 'rlhar': '\u21CC', 'rlm': '\u200F', 'rmoust': '\u23B1', 'rmoustache': '\u23B1', 'rnmid': '\u2AEE', 'roang': '\u27ED', 'roarr': '\u21FE', 'robrk': '\u27E7', 'ropar': '\u2986', 'ropf': '\uD835\uDD63', 'Ropf': '\u211D', 'roplus': '\u2A2E', 'rotimes': '\u2A35', 'RoundImplies': '\u2970', 'rpar': ')', 'rpargt': '\u2994', 'rppolint': '\u2A12', 'rrarr': '\u21C9', 'Rrightarrow': '\u21DB', 'rsaquo': '\u203A', 'rscr': '\uD835\uDCC7', 'Rscr': '\u211B', 'rsh': '\u21B1', 'Rsh': '\u21B1', 'rsqb': ']', 'rsquo': '\u2019', 'rsquor': '\u2019', 'rthree': '\u22CC', 'rtimes': '\u22CA', 'rtri': '\u25B9', 'rtrie': '\u22B5', 'rtrif': '\u25B8', 'rtriltri': '\u29CE', 'RuleDelayed': '\u29F4', 'ruluhar': '\u2968', 'rx': '\u211E', 'sacute': '\u015B', 'Sacute': '\u015A', 'sbquo': '\u201A', 'sc': '\u227B', 'Sc': '\u2ABC', 'scap': '\u2AB8', 'scaron': '\u0161', 'Scaron': '\u0160', 'sccue': '\u227D', 'sce': '\u2AB0', 'scE': '\u2AB4', 'scedil': '\u015F', 'Scedil': '\u015E', 'scirc': '\u015D', 'Scirc': '\u015C', 'scnap': '\u2ABA', 'scnE': '\u2AB6', 'scnsim': '\u22E9', 'scpolint': '\u2A13', 'scsim': '\u227F', 'scy': '\u0441', 'Scy': '\u0421', 'sdot': '\u22C5', 'sdotb': '\u22A1', 'sdote': '\u2A66', 'searhk': '\u2925', 'searr': '\u2198', 'seArr': '\u21D8', 'searrow': '\u2198', 'sect': '\xA7', 'semi': ';', 'seswar': '\u2929', 'setminus': '\u2216', 'setmn': '\u2216', 'sext': '\u2736', 'sfr': '\uD835\uDD30', 'Sfr': '\uD835\uDD16', 'sfrown': '\u2322', 'sharp': '\u266F', 'shchcy': '\u0449', 'SHCHcy': '\u0429', 'shcy': '\u0448', 'SHcy': '\u0428', 'ShortDownArrow': '\u2193', 'ShortLeftArrow': '\u2190', 'shortmid': '\u2223', 'shortparallel': '\u2225', 'ShortRightArrow': '\u2192', 'ShortUpArrow': '\u2191', 'shy': '\xAD', 'sigma': '\u03C3', 'Sigma': '\u03A3', 'sigmaf': '\u03C2', 'sigmav': '\u03C2', 'sim': '\u223C', 'simdot': '\u2A6A', 'sime': '\u2243', 'simeq': '\u2243', 'simg': '\u2A9E', 'simgE': '\u2AA0', 'siml': '\u2A9D', 'simlE': '\u2A9F', 'simne': '\u2246', 'simplus': '\u2A24', 'simrarr': '\u2972', 'slarr': '\u2190', 'SmallCircle': '\u2218', 'smallsetminus': '\u2216', 'smashp': '\u2A33', 'smeparsl': '\u29E4', 'smid': '\u2223', 'smile': '\u2323', 'smt': '\u2AAA', 'smte': '\u2AAC', 'smtes': '\u2AAC\uFE00', 'softcy': '\u044C', 'SOFTcy': '\u042C', 'sol': '/', 'solb': '\u29C4', 'solbar': '\u233F', 'sopf': '\uD835\uDD64', 'Sopf': '\uD835\uDD4A', 'spades': '\u2660', 'spadesuit': '\u2660', 'spar': '\u2225', 'sqcap': '\u2293', 'sqcaps': '\u2293\uFE00', 'sqcup': '\u2294', 'sqcups': '\u2294\uFE00', 'Sqrt': '\u221A', 'sqsub': '\u228F', 'sqsube': '\u2291', 'sqsubset': '\u228F', 'sqsubseteq': '\u2291', 'sqsup': '\u2290', 'sqsupe': '\u2292', 'sqsupset': '\u2290', 'sqsupseteq': '\u2292', 'squ': '\u25A1', 'square': '\u25A1', 'Square': '\u25A1', 'SquareIntersection': '\u2293', 'SquareSubset': '\u228F', 'SquareSubsetEqual': '\u2291', 'SquareSuperset': '\u2290', 'SquareSupersetEqual': '\u2292', 'SquareUnion': '\u2294', 'squarf': '\u25AA', 'squf': '\u25AA', 'srarr': '\u2192', 'sscr': '\uD835\uDCC8', 'Sscr': '\uD835\uDCAE', 'ssetmn': '\u2216', 'ssmile': '\u2323', 'sstarf': '\u22C6', 'star': '\u2606', 'Star': '\u22C6', 'starf': '\u2605', 'straightepsilon': '\u03F5', 'straightphi': '\u03D5', 'strns': '\xAF', 'sub': '\u2282', 'Sub': '\u22D0', 'subdot': '\u2ABD', 'sube': '\u2286', 'subE': '\u2AC5', 'subedot': '\u2AC3', 'submult': '\u2AC1', 'subne': '\u228A', 'subnE': '\u2ACB', 'subplus': '\u2ABF', 'subrarr': '\u2979', 'subset': '\u2282', 'Subset': '\u22D0', 'subseteq': '\u2286', 'subseteqq': '\u2AC5', 'SubsetEqual': '\u2286', 'subsetneq': '\u228A', 'subsetneqq': '\u2ACB', 'subsim': '\u2AC7', 'subsub': '\u2AD5', 'subsup': '\u2AD3', 'succ': '\u227B', 'succapprox': '\u2AB8', 'succcurlyeq': '\u227D', 'Succeeds': '\u227B', 'SucceedsEqual': '\u2AB0', 'SucceedsSlantEqual': '\u227D', 'SucceedsTilde': '\u227F', 'succeq': '\u2AB0', 'succnapprox': '\u2ABA', 'succneqq': '\u2AB6', 'succnsim': '\u22E9', 'succsim': '\u227F', 'SuchThat': '\u220B', 'sum': '\u2211', 'Sum': '\u2211', 'sung': '\u266A', 'sup': '\u2283', 'Sup': '\u22D1', 'sup1': '\xB9', 'sup2': '\xB2', 'sup3': '\xB3', 'supdot': '\u2ABE', 'supdsub': '\u2AD8', 'supe': '\u2287', 'supE': '\u2AC6', 'supedot': '\u2AC4', 'Superset': '\u2283', 'SupersetEqual': '\u2287', 'suphsol': '\u27C9', 'suphsub': '\u2AD7', 'suplarr': '\u297B', 'supmult': '\u2AC2', 'supne': '\u228B', 'supnE': '\u2ACC', 'supplus': '\u2AC0', 'supset': '\u2283', 'Supset': '\u22D1', 'supseteq': '\u2287', 'supseteqq': '\u2AC6', 'supsetneq': '\u228B', 'supsetneqq': '\u2ACC', 'supsim': '\u2AC8', 'supsub': '\u2AD4', 'supsup': '\u2AD6', 'swarhk': '\u2926', 'swarr': '\u2199', 'swArr': '\u21D9', 'swarrow': '\u2199', 'swnwar': '\u292A', 'szlig': '\xDF', 'Tab': '\t', 'target': '\u2316', 'tau': '\u03C4', 'Tau': '\u03A4', 'tbrk': '\u23B4', 'tcaron': '\u0165', 'Tcaron': '\u0164', 'tcedil': '\u0163', 'Tcedil': '\u0162', 'tcy': '\u0442', 'Tcy': '\u0422', 'tdot': '\u20DB', 'telrec': '\u2315', 'tfr': '\uD835\uDD31', 'Tfr': '\uD835\uDD17', 'there4': '\u2234', 'therefore': '\u2234', 'Therefore': '\u2234', 'theta': '\u03B8', 'Theta': '\u0398', 'thetasym': '\u03D1', 'thetav': '\u03D1', 'thickapprox': '\u2248', 'thicksim': '\u223C', 'ThickSpace': '\u205F\u200A', 'thinsp': '\u2009', 'ThinSpace': '\u2009', 'thkap': '\u2248', 'thksim': '\u223C', 'thorn': '\xFE', 'THORN': '\xDE', 'tilde': '\u02DC', 'Tilde': '\u223C', 'TildeEqual': '\u2243', 'TildeFullEqual': '\u2245', 'TildeTilde': '\u2248', 'times': '\xD7', 'timesb': '\u22A0', 'timesbar': '\u2A31', 'timesd': '\u2A30', 'tint': '\u222D', 'toea': '\u2928', 'top': '\u22A4', 'topbot': '\u2336', 'topcir': '\u2AF1', 'topf': '\uD835\uDD65', 'Topf': '\uD835\uDD4B', 'topfork': '\u2ADA', 'tosa': '\u2929', 'tprime': '\u2034', 'trade': '\u2122', 'TRADE': '\u2122', 'triangle': '\u25B5', 'triangledown': '\u25BF', 'triangleleft': '\u25C3', 'trianglelefteq': '\u22B4', 'triangleq': '\u225C', 'triangleright': '\u25B9', 'trianglerighteq': '\u22B5', 'tridot': '\u25EC', 'trie': '\u225C', 'triminus': '\u2A3A', 'TripleDot': '\u20DB', 'triplus': '\u2A39', 'trisb': '\u29CD', 'tritime': '\u2A3B', 'trpezium': '\u23E2', 'tscr': '\uD835\uDCC9', 'Tscr': '\uD835\uDCAF', 'tscy': '\u0446', 'TScy': '\u0426', 'tshcy': '\u045B', 'TSHcy': '\u040B', 'tstrok': '\u0167', 'Tstrok': '\u0166', 'twixt': '\u226C', 'twoheadleftarrow': '\u219E', 'twoheadrightarrow': '\u21A0', 'uacute': '\xFA', 'Uacute': '\xDA', 'uarr': '\u2191', 'uArr': '\u21D1', 'Uarr': '\u219F', 'Uarrocir': '\u2949', 'ubrcy': '\u045E', 'Ubrcy': '\u040E', 'ubreve': '\u016D', 'Ubreve': '\u016C', 'ucirc': '\xFB', 'Ucirc': '\xDB', 'ucy': '\u0443', 'Ucy': '\u0423', 'udarr': '\u21C5', 'udblac': '\u0171', 'Udblac': '\u0170', 'udhar': '\u296E', 'ufisht': '\u297E', 'ufr': '\uD835\uDD32', 'Ufr': '\uD835\uDD18', 'ugrave': '\xF9', 'Ugrave': '\xD9', 'uHar': '\u2963', 'uharl': '\u21BF', 'uharr': '\u21BE', 'uhblk': '\u2580', 'ulcorn': '\u231C', 'ulcorner': '\u231C', 'ulcrop': '\u230F', 'ultri': '\u25F8', 'umacr': '\u016B', 'Umacr': '\u016A', 'uml': '\xA8', 'UnderBar': '_', 'UnderBrace': '\u23DF', 'UnderBracket': '\u23B5', 'UnderParenthesis': '\u23DD', 'Union': '\u22C3', 'UnionPlus': '\u228E', 'uogon': '\u0173', 'Uogon': '\u0172', 'uopf': '\uD835\uDD66', 'Uopf': '\uD835\uDD4C', 'uparrow': '\u2191', 'Uparrow': '\u21D1', 'UpArrow': '\u2191', 'UpArrowBar': '\u2912', 'UpArrowDownArrow': '\u21C5', 'updownarrow': '\u2195', 'Updownarrow': '\u21D5', 'UpDownArrow': '\u2195', 'UpEquilibrium': '\u296E', 'upharpoonleft': '\u21BF', 'upharpoonright': '\u21BE', 'uplus': '\u228E', 'UpperLeftArrow': '\u2196', 'UpperRightArrow': '\u2197', 'upsi': '\u03C5', 'Upsi': '\u03D2', 'upsih': '\u03D2', 'upsilon': '\u03C5', 'Upsilon': '\u03A5', 'UpTee': '\u22A5', 'UpTeeArrow': '\u21A5', 'upuparrows': '\u21C8', 'urcorn': '\u231D', 'urcorner': '\u231D', 'urcrop': '\u230E', 'uring': '\u016F', 'Uring': '\u016E', 'urtri': '\u25F9', 'uscr': '\uD835\uDCCA', 'Uscr': '\uD835\uDCB0', 'utdot': '\u22F0', 'utilde': '\u0169', 'Utilde': '\u0168', 'utri': '\u25B5', 'utrif': '\u25B4', 'uuarr': '\u21C8', 'uuml': '\xFC', 'Uuml': '\xDC', 'uwangle': '\u29A7', 'vangrt': '\u299C', 'varepsilon': '\u03F5', 'varkappa': '\u03F0', 'varnothing': '\u2205', 'varphi': '\u03D5', 'varpi': '\u03D6', 'varpropto': '\u221D', 'varr': '\u2195', 'vArr': '\u21D5', 'varrho': '\u03F1', 'varsigma': '\u03C2', 'varsubsetneq': '\u228A\uFE00', 'varsubsetneqq': '\u2ACB\uFE00', 'varsupsetneq': '\u228B\uFE00', 'varsupsetneqq': '\u2ACC\uFE00', 'vartheta': '\u03D1', 'vartriangleleft': '\u22B2', 'vartriangleright': '\u22B3', 'vBar': '\u2AE8', 'Vbar': '\u2AEB', 'vBarv': '\u2AE9', 'vcy': '\u0432', 'Vcy': '\u0412', 'vdash': '\u22A2', 'vDash': '\u22A8', 'Vdash': '\u22A9', 'VDash': '\u22AB', 'Vdashl': '\u2AE6', 'vee': '\u2228', 'Vee': '\u22C1', 'veebar': '\u22BB', 'veeeq': '\u225A', 'vellip': '\u22EE', 'verbar': '|', 'Verbar': '\u2016', 'vert': '|', 'Vert': '\u2016', 'VerticalBar': '\u2223', 'VerticalLine': '|', 'VerticalSeparator': '\u2758', 'VerticalTilde': '\u2240', 'VeryThinSpace': '\u200A', 'vfr': '\uD835\uDD33', 'Vfr': '\uD835\uDD19', 'vltri': '\u22B2', 'vnsub': '\u2282\u20D2', 'vnsup': '\u2283\u20D2', 'vopf': '\uD835\uDD67', 'Vopf': '\uD835\uDD4D', 'vprop': '\u221D', 'vrtri': '\u22B3', 'vscr': '\uD835\uDCCB', 'Vscr': '\uD835\uDCB1', 'vsubne': '\u228A\uFE00', 'vsubnE': '\u2ACB\uFE00', 'vsupne': '\u228B\uFE00', 'vsupnE': '\u2ACC\uFE00', 'Vvdash': '\u22AA', 'vzigzag': '\u299A', 'wcirc': '\u0175', 'Wcirc': '\u0174', 'wedbar': '\u2A5F', 'wedge': '\u2227', 'Wedge': '\u22C0', 'wedgeq': '\u2259', 'weierp': '\u2118', 'wfr': '\uD835\uDD34', 'Wfr': '\uD835\uDD1A', 'wopf': '\uD835\uDD68', 'Wopf': '\uD835\uDD4E', 'wp': '\u2118', 'wr': '\u2240', 'wreath': '\u2240', 'wscr': '\uD835\uDCCC', 'Wscr': '\uD835\uDCB2', 'xcap': '\u22C2', 'xcirc': '\u25EF', 'xcup': '\u22C3', 'xdtri': '\u25BD', 'xfr': '\uD835\uDD35', 'Xfr': '\uD835\uDD1B', 'xharr': '\u27F7', 'xhArr': '\u27FA', 'xi': '\u03BE', 'Xi': '\u039E', 'xlarr': '\u27F5', 'xlArr': '\u27F8', 'xmap': '\u27FC', 'xnis': '\u22FB', 'xodot': '\u2A00', 'xopf': '\uD835\uDD69', 'Xopf': '\uD835\uDD4F', 'xoplus': '\u2A01', 'xotime': '\u2A02', 'xrarr': '\u27F6', 'xrArr': '\u27F9', 'xscr': '\uD835\uDCCD', 'Xscr': '\uD835\uDCB3', 'xsqcup': '\u2A06', 'xuplus': '\u2A04', 'xutri': '\u25B3', 'xvee': '\u22C1', 'xwedge': '\u22C0', 'yacute': '\xFD', 'Yacute': '\xDD', 'yacy': '\u044F', 'YAcy': '\u042F', 'ycirc': '\u0177', 'Ycirc': '\u0176', 'ycy': '\u044B', 'Ycy': '\u042B', 'yen': '\xA5', 'yfr': '\uD835\uDD36', 'Yfr': '\uD835\uDD1C', 'yicy': '\u0457', 'YIcy': '\u0407', 'yopf': '\uD835\uDD6A', 'Yopf': '\uD835\uDD50', 'yscr': '\uD835\uDCCE', 'Yscr': '\uD835\uDCB4', 'yucy': '\u044E', 'YUcy': '\u042E', 'yuml': '\xFF', 'Yuml': '\u0178', 'zacute': '\u017A', 'Zacute': '\u0179', 'zcaron': '\u017E', 'Zcaron': '\u017D', 'zcy': '\u0437', 'Zcy': '\u0417', 'zdot': '\u017C', 'Zdot': '\u017B', 'zeetrf': '\u2128', 'ZeroWidthSpace': '\u200B', 'zeta': '\u03B6', 'Zeta': '\u0396', 'zfr': '\uD835\uDD37', 'Zfr': '\u2128', 'zhcy': '\u0436', 'ZHcy': '\u0416', 'zigrarr': '\u21DD', 'zopf': '\uD835\uDD6B', 'Zopf': '\u2124', 'zscr': '\uD835\uDCCF', 'Zscr': '\uD835\uDCB5', 'zwj': '\u200D', 'zwnj': '\u200C' };
		var decodeMapLegacy = { 'aacute': '\xE1', 'Aacute': '\xC1', 'acirc': '\xE2', 'Acirc': '\xC2', 'acute': '\xB4', 'aelig': '\xE6', 'AElig': '\xC6', 'agrave': '\xE0', 'Agrave': '\xC0', 'amp': '&', 'AMP': '&', 'aring': '\xE5', 'Aring': '\xC5', 'atilde': '\xE3', 'Atilde': '\xC3', 'auml': '\xE4', 'Auml': '\xC4', 'brvbar': '\xA6', 'ccedil': '\xE7', 'Ccedil': '\xC7', 'cedil': '\xB8', 'cent': '\xA2', 'copy': '\xA9', 'COPY': '\xA9', 'curren': '\xA4', 'deg': '\xB0', 'divide': '\xF7', 'eacute': '\xE9', 'Eacute': '\xC9', 'ecirc': '\xEA', 'Ecirc': '\xCA', 'egrave': '\xE8', 'Egrave': '\xC8', 'eth': '\xF0', 'ETH': '\xD0', 'euml': '\xEB', 'Euml': '\xCB', 'frac12': '\xBD', 'frac14': '\xBC', 'frac34': '\xBE', 'gt': '>', 'GT': '>', 'iacute': '\xED', 'Iacute': '\xCD', 'icirc': '\xEE', 'Icirc': '\xCE', 'iexcl': '\xA1', 'igrave': '\xEC', 'Igrave': '\xCC', 'iquest': '\xBF', 'iuml': '\xEF', 'Iuml': '\xCF', 'laquo': '\xAB', 'lt': '<', 'LT': '<', 'macr': '\xAF', 'micro': '\xB5', 'middot': '\xB7', 'nbsp': '\xA0', 'not': '\xAC', 'ntilde': '\xF1', 'Ntilde': '\xD1', 'oacute': '\xF3', 'Oacute': '\xD3', 'ocirc': '\xF4', 'Ocirc': '\xD4', 'ograve': '\xF2', 'Ograve': '\xD2', 'ordf': '\xAA', 'ordm': '\xBA', 'oslash': '\xF8', 'Oslash': '\xD8', 'otilde': '\xF5', 'Otilde': '\xD5', 'ouml': '\xF6', 'Ouml': '\xD6', 'para': '\xB6', 'plusmn': '\xB1', 'pound': '\xA3', 'quot': '"', 'QUOT': '"', 'raquo': '\xBB', 'reg': '\xAE', 'REG': '\xAE', 'sect': '\xA7', 'shy': '\xAD', 'sup1': '\xB9', 'sup2': '\xB2', 'sup3': '\xB3', 'szlig': '\xDF', 'thorn': '\xFE', 'THORN': '\xDE', 'times': '\xD7', 'uacute': '\xFA', 'Uacute': '\xDA', 'ucirc': '\xFB', 'Ucirc': '\xDB', 'ugrave': '\xF9', 'Ugrave': '\xD9', 'uml': '\xA8', 'uuml': '\xFC', 'Uuml': '\xDC', 'yacute': '\xFD', 'Yacute': '\xDD', 'yen': '\xA5', 'yuml': '\xFF' };
		var decodeMapNumeric = { '0': '\uFFFD', '128': '\u20AC', '130': '\u201A', '131': '\u0192', '132': '\u201E', '133': '\u2026', '134': '\u2020', '135': '\u2021', '136': '\u02C6', '137': '\u2030', '138': '\u0160', '139': '\u2039', '140': '\u0152', '142': '\u017D', '145': '\u2018', '146': '\u2019', '147': '\u201C', '148': '\u201D', '149': '\u2022', '150': '\u2013', '151': '\u2014', '152': '\u02DC', '153': '\u2122', '154': '\u0161', '155': '\u203A', '156': '\u0153', '158': '\u017E', '159': '\u0178' };
		var invalidReferenceCodePoints = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65000, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		var object = {};
		var hasOwnProperty = object.hasOwnProperty;
		var has = function has(object, propertyName) {
			return hasOwnProperty.call(object, propertyName);
		};

		var contains = function contains(array, value) {
			var index = -1;
			var length = array.length;
			while (++index < length) {
				if (array[index] == value) {
					return true;
				}
			}
			return false;
		};

		var merge = function merge(options, defaults) {
			if (!options) {
				return defaults;
			}
			var result = {};
			var key;
			for (key in defaults) {
				// A `hasOwnProperty` check is not needed here, since only recognized
				// option names are used anyway. Any others are ignored.
				result[key] = has(options, key) ? options[key] : defaults[key];
			}
			return result;
		};

		// Modified version of `ucs2encode`; see https://mths.be/punycode.
		var codePointToSymbol = function codePointToSymbol(codePoint, strict) {
			var output = '';
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF || codePoint > 0x10FFFF) {
				// See issue #4:
				// “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
				// greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
				// REPLACEMENT CHARACTER.”
				if (strict) {
					parseError('character reference outside the permissible Unicode range');
				}
				return '\uFFFD';
			}
			if (has(decodeMapNumeric, codePoint)) {
				if (strict) {
					parseError('disallowed character reference');
				}
				return decodeMapNumeric[codePoint];
			}
			if (strict && contains(invalidReferenceCodePoints, codePoint)) {
				parseError('disallowed character reference');
			}
			if (codePoint > 0xFFFF) {
				codePoint -= 0x10000;
				output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
				codePoint = 0xDC00 | codePoint & 0x3FF;
			}
			output += stringFromCharCode(codePoint);
			return output;
		};

		var hexEscape = function hexEscape(codePoint) {
			return '&#x' + codePoint.toString(16).toUpperCase() + ';';
		};

		var decEscape = function decEscape(codePoint) {
			return '&#' + codePoint + ';';
		};

		var parseError = function parseError(message) {
			throw Error('Parse error: ' + message);
		};

		/*--------------------------------------------------------------------------*/

		var encode = function encode(string, options) {
			options = merge(options, encode.options);
			var strict = options.strict;
			if (strict && regexInvalidRawCodePoint.test(string)) {
				parseError('forbidden code point');
			}
			var encodeEverything = options.encodeEverything;
			var useNamedReferences = options.useNamedReferences;
			var allowUnsafeSymbols = options.allowUnsafeSymbols;
			var escapeCodePoint = options.decimal ? decEscape : hexEscape;

			var escapeBmpSymbol = function escapeBmpSymbol(symbol) {
				return escapeCodePoint(symbol.charCodeAt(0));
			};

			if (encodeEverything) {
				// Encode ASCII symbols.
				string = string.replace(regexAsciiWhitelist, function (symbol) {
					// Use named references if requested & possible.
					if (useNamedReferences && has(encodeMap, symbol)) {
						return '&' + encodeMap[symbol] + ';';
					}
					return escapeBmpSymbol(symbol);
				});
				// Shorten a few escapes that represent two symbols, of which at least one
				// is within the ASCII range.
				if (useNamedReferences) {
					string = string.replace(/&gt;\u20D2/g, '&nvgt;').replace(/&lt;\u20D2/g, '&nvlt;').replace(/&#x66;&#x6A;/g, '&fjlig;');
				}
				// Encode non-ASCII symbols.
				if (useNamedReferences) {
					// Encode non-ASCII symbols that can be replaced with a named reference.
					string = string.replace(regexEncodeNonAscii, function (string) {
						// Note: there is no need to check `has(encodeMap, string)` here.
						return '&' + encodeMap[string] + ';';
					});
				}
				// Note: any remaining non-ASCII symbols are handled outside of the `if`.
			} else if (useNamedReferences) {
				// Apply named character references.
				// Encode `<>"'&` using named character references.
				if (!allowUnsafeSymbols) {
					string = string.replace(regexEscape, function (string) {
						return '&' + encodeMap[string] + ';'; // no need to check `has()` here
					});
				}
				// Shorten escapes that represent two symbols, of which at least one is
				// `<>"'&`.
				string = string.replace(/&gt;\u20D2/g, '&nvgt;').replace(/&lt;\u20D2/g, '&nvlt;');
				// Encode non-ASCII symbols that can be replaced with a named reference.
				string = string.replace(regexEncodeNonAscii, function (string) {
					// Note: there is no need to check `has(encodeMap, string)` here.
					return '&' + encodeMap[string] + ';';
				});
			} else if (!allowUnsafeSymbols) {
				// Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
				// using named character references.
				string = string.replace(regexEscape, escapeBmpSymbol);
			}
			return string
			// Encode astral symbols.
			.replace(regexAstralSymbols, function ($0) {
				// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
				var high = $0.charCodeAt(0);
				var low = $0.charCodeAt(1);
				var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
				return escapeCodePoint(codePoint);
			})
			// Encode any remaining BMP symbols that are not printable ASCII symbols
			// using a hexadecimal escape.
			.replace(regexBmpWhitelist, escapeBmpSymbol);
		};
		// Expose default options (so they can be overridden globally).
		encode.options = {
			'allowUnsafeSymbols': false,
			'encodeEverything': false,
			'strict': false,
			'useNamedReferences': false,
			'decimal': false
		};

		var decode = function decode(html, options) {
			options = merge(options, decode.options);
			var strict = options.strict;
			if (strict && regexInvalidEntity.test(html)) {
				parseError('malformed character reference');
			}
			return html.replace(regexDecode, function ($0, $1, $2, $3, $4, $5, $6, $7) {
				var codePoint;
				var semicolon;
				var decDigits;
				var hexDigits;
				var reference;
				var next;
				if ($1) {
					// Decode decimal escapes, e.g. `&#119558;`.
					decDigits = $1;
					semicolon = $2;
					if (strict && !semicolon) {
						parseError('character reference was not terminated by a semicolon');
					}
					codePoint = parseInt(decDigits, 10);
					return codePointToSymbol(codePoint, strict);
				}
				if ($3) {
					// Decode hexadecimal escapes, e.g. `&#x1D306;`.
					hexDigits = $3;
					semicolon = $4;
					if (strict && !semicolon) {
						parseError('character reference was not terminated by a semicolon');
					}
					codePoint = parseInt(hexDigits, 16);
					return codePointToSymbol(codePoint, strict);
				}
				if ($5) {
					// Decode named character references with trailing `;`, e.g. `&copy;`.
					reference = $5;
					if (has(decodeMap, reference)) {
						return decodeMap[reference];
					} else {
						// Ambiguous ampersand. https://mths.be/notes/ambiguous-ampersands
						if (strict) {
							parseError('named character reference was not terminated by a semicolon');
						}
						return $0;
					}
				}
				// If we’re still here, it’s a legacy reference for sure. No need for an
				// extra `if` check.
				// Decode named character references without trailing `;`, e.g. `&amp`
				// This is only a parse error if it gets converted to `&`, or if it is
				// followed by `=` in an attribute context.
				reference = $6;
				next = $7;
				if (next && options.isAttributeValue) {
					if (strict && next == '=') {
						parseError('`&` did not start a character reference');
					}
					return $0;
				} else {
					if (strict) {
						parseError('named character reference was not terminated by a semicolon');
					}
					// Note: there is no need to check `has(decodeMapLegacy, reference)`.
					return decodeMapLegacy[reference] + (next || '');
				}
			});
		};
		// Expose default options (so they can be overridden globally).
		decode.options = {
			'isAttributeValue': false,
			'strict': false
		};

		var escape = function escape(string) {
			return string.replace(regexEscape, function ($0) {
				// Note: there is no need to check `has(escapeMap, $0)` here.
				return escapeMap[$0];
			});
		};

		/*--------------------------------------------------------------------------*/

		var he = {
			'version': '1.1.1',
			'encode': encode,
			'decode': decode,
			'escape': escape,
			'unescape': decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if ("function" == 'function' && _typeof(__webpack_require__(44)) == 'object' && __webpack_require__(44)) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return he;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && !freeExports.nodeType) {
			if (freeModule) {
				// in Node.js, io.js, or RingoJS v0.8.0+
				freeModule.exports = he;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				for (var key in he) {
					has(he, key) && (freeExports[key] = he[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.he = he;
		}
	})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module), (function() { return this; }())))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = {"ion-alert":"&#xf101;","ion-alert-circled":"&#xf100;","ion-android-add":"&#xf2c7;","ion-android-add-circle":"&#xf359;","ion-android-alarm-clock":"&#xf35a;","ion-android-alert":"&#xf35b;","ion-android-apps":"&#xf35c;","ion-android-archive":"&#xf2c9;","ion-android-arrow-back":"&#xf2ca;","ion-android-arrow-down":"&#xf35d;","ion-android-arrow-dropdown":"&#xf35f;","ion-android-arrow-dropdown-circle":"&#xf35e;","ion-android-arrow-dropleft":"&#xf361;","ion-android-arrow-dropleft-circle":"&#xf360;","ion-android-arrow-dropright":"&#xf363;","ion-android-arrow-dropright-circle":"&#xf362;","ion-android-arrow-dropup":"&#xf365;","ion-android-arrow-dropup-circle":"&#xf364;","ion-android-arrow-forward":"&#xf30f;","ion-android-arrow-up":"&#xf366;","ion-android-attach":"&#xf367;","ion-android-bar":"&#xf368;","ion-android-bicycle":"&#xf369;","ion-android-boat":"&#xf36a;","ion-android-bookmark":"&#xf36b;","ion-android-bulb":"&#xf36c;","ion-android-bus":"&#xf36d;","ion-android-calendar":"&#xf2d1;","ion-android-call":"&#xf2d2;","ion-android-camera":"&#xf2d3;","ion-android-cancel":"&#xf36e;","ion-android-car":"&#xf36f;","ion-android-cart":"&#xf370;","ion-android-chat":"&#xf2d4;","ion-android-checkbox":"&#xf374;","ion-android-checkbox-blank":"&#xf371;","ion-android-checkbox-outline":"&#xf373;","ion-android-checkbox-outline-blank":"&#xf372;","ion-android-checkmark-circle":"&#xf375;","ion-android-clipboard":"&#xf376;","ion-android-close":"&#xf2d7;","ion-android-cloud":"&#xf37a;","ion-android-cloud-circle":"&#xf377;","ion-android-cloud-done":"&#xf378;","ion-android-cloud-outline":"&#xf379;","ion-android-color-palette":"&#xf37b;","ion-android-compass":"&#xf37c;","ion-android-contact":"&#xf2d8;","ion-android-contacts":"&#xf2d9;","ion-android-contract":"&#xf37d;","ion-android-create":"&#xf37e;","ion-android-delete":"&#xf37f;","ion-android-desktop":"&#xf380;","ion-android-document":"&#xf381;","ion-android-done":"&#xf383;","ion-android-done-all":"&#xf382;","ion-android-download":"&#xf2dd;","ion-android-drafts":"&#xf384;","ion-android-exit":"&#xf385;","ion-android-expand":"&#xf386;","ion-android-favorite":"&#xf388;","ion-android-favorite-outline":"&#xf387;","ion-android-film":"&#xf389;","ion-android-folder":"&#xf2e0;","ion-android-folder-open":"&#xf38a;","ion-android-funnel":"&#xf38b;","ion-android-globe":"&#xf38c;","ion-android-hand":"&#xf2e3;","ion-android-hangout":"&#xf38d;","ion-android-happy":"&#xf38e;","ion-android-home":"&#xf38f;","ion-android-image":"&#xf2e4;","ion-android-laptop":"&#xf390;","ion-android-list":"&#xf391;","ion-android-locate":"&#xf2e9;","ion-android-lock":"&#xf392;","ion-android-mail":"&#xf2eb;","ion-android-map":"&#xf393;","ion-android-menu":"&#xf394;","ion-android-microphone":"&#xf2ec;","ion-android-microphone-off":"&#xf395;","ion-android-more-horizontal":"&#xf396;","ion-android-more-vertical":"&#xf397;","ion-android-navigate":"&#xf398;","ion-android-notifications":"&#xf39b;","ion-android-notifications-none":"&#xf399;","ion-android-notifications-off":"&#xf39a;","ion-android-open":"&#xf39c;","ion-android-options":"&#xf39d;","ion-android-people":"&#xf39e;","ion-android-person":"&#xf3a0;","ion-android-person-add":"&#xf39f;","ion-android-phone-landscape":"&#xf3a1;","ion-android-phone-portrait":"&#xf3a2;","ion-android-pin":"&#xf3a3;","ion-android-plane":"&#xf3a4;","ion-android-playstore":"&#xf2f0;","ion-android-print":"&#xf3a5;","ion-android-radio-button-off":"&#xf3a6;","ion-android-radio-button-on":"&#xf3a7;","ion-android-refresh":"&#xf3a8;","ion-android-remove":"&#xf2f4;","ion-android-remove-circle":"&#xf3a9;","ion-android-restaurant":"&#xf3aa;","ion-android-sad":"&#xf3ab;","ion-android-search":"&#xf2f5;","ion-android-send":"&#xf2f6;","ion-android-settings":"&#xf2f7;","ion-android-share":"&#xf2f8;","ion-android-share-alt":"&#xf3ac;","ion-android-star":"&#xf2fc;","ion-android-star-half":"&#xf3ad;","ion-android-star-outline":"&#xf3ae;","ion-android-stopwatch":"&#xf2fd;","ion-android-subway":"&#xf3af;","ion-android-sunny":"&#xf3b0;","ion-android-sync":"&#xf3b1;","ion-android-textsms":"&#xf3b2;","ion-android-time":"&#xf3b3;","ion-android-train":"&#xf3b4;","ion-android-unlock":"&#xf3b5;","ion-android-upload":"&#xf3b6;","ion-android-volume-down":"&#xf3b7;","ion-android-volume-mute":"&#xf3b8;","ion-android-volume-off":"&#xf3b9;","ion-android-volume-up":"&#xf3ba;","ion-android-walk":"&#xf3bb;","ion-android-warning":"&#xf3bc;","ion-android-watch":"&#xf3bd;","ion-android-wifi":"&#xf305;","ion-aperture":"&#xf313;","ion-archive":"&#xf102;","ion-arrow-down-a":"&#xf103;","ion-arrow-down-b":"&#xf104;","ion-arrow-down-c":"&#xf105;","ion-arrow-expand":"&#xf25e;","ion-arrow-graph-down-left":"&#xf25f;","ion-arrow-graph-down-right":"&#xf260;","ion-arrow-graph-up-left":"&#xf261;","ion-arrow-graph-up-right":"&#xf262;","ion-arrow-left-a":"&#xf106;","ion-arrow-left-b":"&#xf107;","ion-arrow-left-c":"&#xf108;","ion-arrow-move":"&#xf263;","ion-arrow-resize":"&#xf264;","ion-arrow-return-left":"&#xf265;","ion-arrow-return-right":"&#xf266;","ion-arrow-right-a":"&#xf109;","ion-arrow-right-b":"&#xf10a;","ion-arrow-right-c":"&#xf10b;","ion-arrow-shrink":"&#xf267;","ion-arrow-swap":"&#xf268;","ion-arrow-up-a":"&#xf10c;","ion-arrow-up-b":"&#xf10d;","ion-arrow-up-c":"&#xf10e;","ion-asterisk":"&#xf314;","ion-at":"&#xf10f;","ion-backspace":"&#xf3bf;","ion-backspace-outline":"&#xf3be;","ion-bag":"&#xf110;","ion-battery-charging":"&#xf111;","ion-battery-empty":"&#xf112;","ion-battery-full":"&#xf113;","ion-battery-half":"&#xf114;","ion-battery-low":"&#xf115;","ion-beaker":"&#xf269;","ion-beer":"&#xf26a;","ion-bluetooth":"&#xf116;","ion-bonfire":"&#xf315;","ion-bookmark":"&#xf26b;","ion-bowtie":"&#xf3c0;","ion-briefcase":"&#xf26c;","ion-bug":"&#xf2be;","ion-calculator":"&#xf26d;","ion-calendar":"&#xf117;","ion-camera":"&#xf118;","ion-card":"&#xf119;","ion-cash":"&#xf316;","ion-chatbox":"&#xf11b;","ion-chatbox-working":"&#xf11a;","ion-chatboxes":"&#xf11c;","ion-chatbubble":"&#xf11e;","ion-chatbubble-working":"&#xf11d;","ion-chatbubbles":"&#xf11f;","ion-checkmark":"&#xf122;","ion-checkmark-circled":"&#xf120;","ion-checkmark-round":"&#xf121;","ion-chevron-down":"&#xf123;","ion-chevron-left":"&#xf124;","ion-chevron-right":"&#xf125;","ion-chevron-up":"&#xf126;","ion-clipboard":"&#xf127;","ion-clock":"&#xf26e;","ion-close":"&#xf12a;","ion-close-circled":"&#xf128;","ion-close-round":"&#xf129;","ion-closed-captioning":"&#xf317;","ion-cloud":"&#xf12b;","ion-code":"&#xf271;","ion-code-download":"&#xf26f;","ion-code-working":"&#xf270;","ion-coffee":"&#xf272;","ion-compass":"&#xf273;","ion-compose":"&#xf12c;","ion-connection-bars":"&#xf274;","ion-contrast":"&#xf275;","ion-crop":"&#xf3c1;","ion-cube":"&#xf318;","ion-disc":"&#xf12d;","ion-document":"&#xf12f;","ion-document-text":"&#xf12e;","ion-drag":"&#xf130;","ion-earth":"&#xf276;","ion-easel":"&#xf3c2;","ion-edit":"&#xf2bf;","ion-egg":"&#xf277;","ion-eject":"&#xf131;","ion-email":"&#xf132;","ion-email-unread":"&#xf3c3;","ion-erlenmeyer-flask":"&#xf3c5;","ion-erlenmeyer-flask-bubbles":"&#xf3c4;","ion-eye":"&#xf133;","ion-eye-disabled":"&#xf306;","ion-female":"&#xf278;","ion-filing":"&#xf134;","ion-film-marker":"&#xf135;","ion-fireball":"&#xf319;","ion-flag":"&#xf279;","ion-flame":"&#xf31a;","ion-flash":"&#xf137;","ion-flash-off":"&#xf136;","ion-folder":"&#xf139;","ion-fork":"&#xf27a;","ion-fork-repo":"&#xf2c0;","ion-forward":"&#xf13a;","ion-funnel":"&#xf31b;","ion-gear-a":"&#xf13d;","ion-gear-b":"&#xf13e;","ion-grid":"&#xf13f;","ion-hammer":"&#xf27b;","ion-happy":"&#xf31c;","ion-happy-outline":"&#xf3c6;","ion-headphone":"&#xf140;","ion-heart":"&#xf141;","ion-heart-broken":"&#xf31d;","ion-help":"&#xf143;","ion-help-buoy":"&#xf27c;","ion-help-circled":"&#xf142;","ion-home":"&#xf144;","ion-icecream":"&#xf27d;","ion-image":"&#xf147;","ion-images":"&#xf148;","ion-information":"&#xf14a;","ion-information-circled":"&#xf149;","ion-ionic":"&#xf14b;","ion-ios-alarm":"&#xf3c8;","ion-ios-alarm-outline":"&#xf3c7;","ion-ios-albums":"&#xf3ca;","ion-ios-albums-outline":"&#xf3c9;","ion-ios-americanfootball":"&#xf3cc;","ion-ios-americanfootball-outline":"&#xf3cb;","ion-ios-analytics":"&#xf3ce;","ion-ios-analytics-outline":"&#xf3cd;","ion-ios-arrow-back":"&#xf3cf;","ion-ios-arrow-down":"&#xf3d0;","ion-ios-arrow-forward":"&#xf3d1;","ion-ios-arrow-left":"&#xf3d2;","ion-ios-arrow-right":"&#xf3d3;","ion-ios-arrow-thin-down":"&#xf3d4;","ion-ios-arrow-thin-left":"&#xf3d5;","ion-ios-arrow-thin-right":"&#xf3d6;","ion-ios-arrow-thin-up":"&#xf3d7;","ion-ios-arrow-up":"&#xf3d8;","ion-ios-at":"&#xf3da;","ion-ios-at-outline":"&#xf3d9;","ion-ios-barcode":"&#xf3dc;","ion-ios-barcode-outline":"&#xf3db;","ion-ios-baseball":"&#xf3de;","ion-ios-baseball-outline":"&#xf3dd;","ion-ios-basketball":"&#xf3e0;","ion-ios-basketball-outline":"&#xf3df;","ion-ios-bell":"&#xf3e2;","ion-ios-bell-outline":"&#xf3e1;","ion-ios-body":"&#xf3e4;","ion-ios-body-outline":"&#xf3e3;","ion-ios-bolt":"&#xf3e6;","ion-ios-bolt-outline":"&#xf3e5;","ion-ios-book":"&#xf3e8;","ion-ios-book-outline":"&#xf3e7;","ion-ios-bookmarks":"&#xf3ea;","ion-ios-bookmarks-outline":"&#xf3e9;","ion-ios-box":"&#xf3ec;","ion-ios-box-outline":"&#xf3eb;","ion-ios-briefcase":"&#xf3ee;","ion-ios-briefcase-outline":"&#xf3ed;","ion-ios-browsers":"&#xf3f0;","ion-ios-browsers-outline":"&#xf3ef;","ion-ios-calculator":"&#xf3f2;","ion-ios-calculator-outline":"&#xf3f1;","ion-ios-calendar":"&#xf3f4;","ion-ios-calendar-outline":"&#xf3f3;","ion-ios-camera":"&#xf3f6;","ion-ios-camera-outline":"&#xf3f5;","ion-ios-cart":"&#xf3f8;","ion-ios-cart-outline":"&#xf3f7;","ion-ios-chatboxes":"&#xf3fa;","ion-ios-chatboxes-outline":"&#xf3f9;","ion-ios-chatbubble":"&#xf3fc;","ion-ios-chatbubble-outline":"&#xf3fb;","ion-ios-checkmark":"&#xf3ff;","ion-ios-checkmark-empty":"&#xf3fd;","ion-ios-checkmark-outline":"&#xf3fe;","ion-ios-circle-filled":"&#xf400;","ion-ios-circle-outline":"&#xf401;","ion-ios-clock":"&#xf403;","ion-ios-clock-outline":"&#xf402;","ion-ios-close":"&#xf406;","ion-ios-close-empty":"&#xf404;","ion-ios-close-outline":"&#xf405;","ion-ios-cloud":"&#xf40c;","ion-ios-cloud-download":"&#xf408;","ion-ios-cloud-download-outline":"&#xf407;","ion-ios-cloud-outline":"&#xf409;","ion-ios-cloud-upload":"&#xf40b;","ion-ios-cloud-upload-outline":"&#xf40a;","ion-ios-cloudy":"&#xf410;","ion-ios-cloudy-night":"&#xf40e;","ion-ios-cloudy-night-outline":"&#xf40d;","ion-ios-cloudy-outline":"&#xf40f;","ion-ios-cog":"&#xf412;","ion-ios-cog-outline":"&#xf411;","ion-ios-color-filter":"&#xf414;","ion-ios-color-filter-outline":"&#xf413;","ion-ios-color-wand":"&#xf416;","ion-ios-color-wand-outline":"&#xf415;","ion-ios-compose":"&#xf418;","ion-ios-compose-outline":"&#xf417;","ion-ios-contact":"&#xf41a;","ion-ios-contact-outline":"&#xf419;","ion-ios-copy":"&#xf41c;","ion-ios-copy-outline":"&#xf41b;","ion-ios-crop":"&#xf41e;","ion-ios-crop-strong":"&#xf41d;","ion-ios-download":"&#xf420;","ion-ios-download-outline":"&#xf41f;","ion-ios-drag":"&#xf421;","ion-ios-email":"&#xf423;","ion-ios-email-outline":"&#xf422;","ion-ios-eye":"&#xf425;","ion-ios-eye-outline":"&#xf424;","ion-ios-fastforward":"&#xf427;","ion-ios-fastforward-outline":"&#xf426;","ion-ios-filing":"&#xf429;","ion-ios-filing-outline":"&#xf428;","ion-ios-film":"&#xf42b;","ion-ios-film-outline":"&#xf42a;","ion-ios-flag":"&#xf42d;","ion-ios-flag-outline":"&#xf42c;","ion-ios-flame":"&#xf42f;","ion-ios-flame-outline":"&#xf42e;","ion-ios-flask":"&#xf431;","ion-ios-flask-outline":"&#xf430;","ion-ios-flower":"&#xf433;","ion-ios-flower-outline":"&#xf432;","ion-ios-folder":"&#xf435;","ion-ios-folder-outline":"&#xf434;","ion-ios-football":"&#xf437;","ion-ios-football-outline":"&#xf436;","ion-ios-game-controller-a":"&#xf439;","ion-ios-game-controller-a-outline":"&#xf438;","ion-ios-game-controller-b":"&#xf43b;","ion-ios-game-controller-b-outline":"&#xf43a;","ion-ios-gear":"&#xf43d;","ion-ios-gear-outline":"&#xf43c;","ion-ios-glasses":"&#xf43f;","ion-ios-glasses-outline":"&#xf43e;","ion-ios-grid-view":"&#xf441;","ion-ios-grid-view-outline":"&#xf440;","ion-ios-heart":"&#xf443;","ion-ios-heart-outline":"&#xf442;","ion-ios-help":"&#xf446;","ion-ios-help-empty":"&#xf444;","ion-ios-help-outline":"&#xf445;","ion-ios-home":"&#xf448;","ion-ios-home-outline":"&#xf447;","ion-ios-infinite":"&#xf44a;","ion-ios-infinite-outline":"&#xf449;","ion-ios-information":"&#xf44d;","ion-ios-information-empty":"&#xf44b;","ion-ios-information-outline":"&#xf44c;","ion-ios-ionic-outline":"&#xf44e;","ion-ios-keypad":"&#xf450;","ion-ios-keypad-outline":"&#xf44f;","ion-ios-lightbulb":"&#xf452;","ion-ios-lightbulb-outline":"&#xf451;","ion-ios-list":"&#xf454;","ion-ios-list-outline":"&#xf453;","ion-ios-location":"&#xf456;","ion-ios-location-outline":"&#xf455;","ion-ios-locked":"&#xf458;","ion-ios-locked-outline":"&#xf457;","ion-ios-loop":"&#xf45a;","ion-ios-loop-strong":"&#xf459;","ion-ios-medical":"&#xf45c;","ion-ios-medical-outline":"&#xf45b;","ion-ios-medkit":"&#xf45e;","ion-ios-medkit-outline":"&#xf45d;","ion-ios-mic":"&#xf461;","ion-ios-mic-off":"&#xf45f;","ion-ios-mic-outline":"&#xf460;","ion-ios-minus":"&#xf464;","ion-ios-minus-empty":"&#xf462;","ion-ios-minus-outline":"&#xf463;","ion-ios-monitor":"&#xf466;","ion-ios-monitor-outline":"&#xf465;","ion-ios-moon":"&#xf468;","ion-ios-moon-outline":"&#xf467;","ion-ios-more":"&#xf46a;","ion-ios-more-outline":"&#xf469;","ion-ios-musical-note":"&#xf46b;","ion-ios-musical-notes":"&#xf46c;","ion-ios-navigate":"&#xf46e;","ion-ios-navigate-outline":"&#xf46d;","ion-ios-nutrition":"&#xf470;","ion-ios-nutrition-outline":"&#xf46f;","ion-ios-paper":"&#xf472;","ion-ios-paper-outline":"&#xf471;","ion-ios-paperplane":"&#xf474;","ion-ios-paperplane-outline":"&#xf473;","ion-ios-partlysunny":"&#xf476;","ion-ios-partlysunny-outline":"&#xf475;","ion-ios-pause":"&#xf478;","ion-ios-pause-outline":"&#xf477;","ion-ios-paw":"&#xf47a;","ion-ios-paw-outline":"&#xf479;","ion-ios-people":"&#xf47c;","ion-ios-people-outline":"&#xf47b;","ion-ios-person":"&#xf47e;","ion-ios-person-outline":"&#xf47d;","ion-ios-personadd":"&#xf480;","ion-ios-personadd-outline":"&#xf47f;","ion-ios-photos":"&#xf482;","ion-ios-photos-outline":"&#xf481;","ion-ios-pie":"&#xf484;","ion-ios-pie-outline":"&#xf483;","ion-ios-pint":"&#xf486;","ion-ios-pint-outline":"&#xf485;","ion-ios-play":"&#xf488;","ion-ios-play-outline":"&#xf487;","ion-ios-plus":"&#xf48b;","ion-ios-plus-empty":"&#xf489;","ion-ios-plus-outline":"&#xf48a;","ion-ios-pricetag":"&#xf48d;","ion-ios-pricetag-outline":"&#xf48c;","ion-ios-pricetags":"&#xf48f;","ion-ios-pricetags-outline":"&#xf48e;","ion-ios-printer":"&#xf491;","ion-ios-printer-outline":"&#xf490;","ion-ios-pulse":"&#xf493;","ion-ios-pulse-strong":"&#xf492;","ion-ios-rainy":"&#xf495;","ion-ios-rainy-outline":"&#xf494;","ion-ios-recording":"&#xf497;","ion-ios-recording-outline":"&#xf496;","ion-ios-redo":"&#xf499;","ion-ios-redo-outline":"&#xf498;","ion-ios-refresh":"&#xf49c;","ion-ios-refresh-empty":"&#xf49a;","ion-ios-refresh-outline":"&#xf49b;","ion-ios-reload":"&#xf49d;","ion-ios-reverse-camera":"&#xf49f;","ion-ios-reverse-camera-outline":"&#xf49e;","ion-ios-rewind":"&#xf4a1;","ion-ios-rewind-outline":"&#xf4a0;","ion-ios-rose":"&#xf4a3;","ion-ios-rose-outline":"&#xf4a2;","ion-ios-search":"&#xf4a5;","ion-ios-search-strong":"&#xf4a4;","ion-ios-settings":"&#xf4a7;","ion-ios-settings-strong":"&#xf4a6;","ion-ios-shuffle":"&#xf4a9;","ion-ios-shuffle-strong":"&#xf4a8;","ion-ios-skipbackward":"&#xf4ab;","ion-ios-skipbackward-outline":"&#xf4aa;","ion-ios-skipforward":"&#xf4ad;","ion-ios-skipforward-outline":"&#xf4ac;","ion-ios-snowy":"&#xf4ae;","ion-ios-speedometer":"&#xf4b0;","ion-ios-speedometer-outline":"&#xf4af;","ion-ios-star":"&#xf4b3;","ion-ios-star-half":"&#xf4b1;","ion-ios-star-outline":"&#xf4b2;","ion-ios-stopwatch":"&#xf4b5;","ion-ios-stopwatch-outline":"&#xf4b4;","ion-ios-sunny":"&#xf4b7;","ion-ios-sunny-outline":"&#xf4b6;","ion-ios-telephone":"&#xf4b9;","ion-ios-telephone-outline":"&#xf4b8;","ion-ios-tennisball":"&#xf4bb;","ion-ios-tennisball-outline":"&#xf4ba;","ion-ios-thunderstorm":"&#xf4bd;","ion-ios-thunderstorm-outline":"&#xf4bc;","ion-ios-time":"&#xf4bf;","ion-ios-time-outline":"&#xf4be;","ion-ios-timer":"&#xf4c1;","ion-ios-timer-outline":"&#xf4c0;","ion-ios-toggle":"&#xf4c3;","ion-ios-toggle-outline":"&#xf4c2;","ion-ios-trash":"&#xf4c5;","ion-ios-trash-outline":"&#xf4c4;","ion-ios-undo":"&#xf4c7;","ion-ios-undo-outline":"&#xf4c6;","ion-ios-unlocked":"&#xf4c9;","ion-ios-unlocked-outline":"&#xf4c8;","ion-ios-upload":"&#xf4cb;","ion-ios-upload-outline":"&#xf4ca;","ion-ios-videocam":"&#xf4cd;","ion-ios-videocam-outline":"&#xf4cc;","ion-ios-volume-high":"&#xf4ce;","ion-ios-volume-low":"&#xf4cf;","ion-ios-wineglass":"&#xf4d1;","ion-ios-wineglass-outline":"&#xf4d0;","ion-ios-world":"&#xf4d3;","ion-ios-world-outline":"&#xf4d2;","ion-ipad":"&#xf1f9;","ion-iphone":"&#xf1fa;","ion-ipod":"&#xf1fb;","ion-jet":"&#xf295;","ion-key":"&#xf296;","ion-knife":"&#xf297;","ion-laptop":"&#xf1fc;","ion-leaf":"&#xf1fd;","ion-levels":"&#xf298;","ion-lightbulb":"&#xf299;","ion-link":"&#xf1fe;","ion-load-a":"&#xf29a;","ion-load-b":"&#xf29b;","ion-load-c":"&#xf29c;","ion-load-d":"&#xf29d;","ion-location":"&#xf1ff;","ion-lock-combination":"&#xf4d4;","ion-locked":"&#xf200;","ion-log-in":"&#xf29e;","ion-log-out":"&#xf29f;","ion-loop":"&#xf201;","ion-magnet":"&#xf2a0;","ion-male":"&#xf2a1;","ion-man":"&#xf202;","ion-map":"&#xf203;","ion-medkit":"&#xf2a2;","ion-merge":"&#xf33f;","ion-mic-a":"&#xf204;","ion-mic-b":"&#xf205;","ion-mic-c":"&#xf206;","ion-minus":"&#xf209;","ion-minus-circled":"&#xf207;","ion-minus-round":"&#xf208;","ion-model-s":"&#xf2c1;","ion-monitor":"&#xf20a;","ion-more":"&#xf20b;","ion-mouse":"&#xf340;","ion-music-note":"&#xf20c;","ion-navicon":"&#xf20e;","ion-navicon-round":"&#xf20d;","ion-navigate":"&#xf2a3;","ion-network":"&#xf341;","ion-no-smoking":"&#xf2c2;","ion-nuclear":"&#xf2a4;","ion-outlet":"&#xf342;","ion-paintbrush":"&#xf4d5;","ion-paintbucket":"&#xf4d6;","ion-paper-airplane":"&#xf2c3;","ion-paperclip":"&#xf20f;","ion-pause":"&#xf210;","ion-person":"&#xf213;","ion-person-add":"&#xf211;","ion-person-stalker":"&#xf212;","ion-pie-graph":"&#xf2a5;","ion-pin":"&#xf2a6;","ion-pinpoint":"&#xf2a7;","ion-pizza":"&#xf2a8;","ion-plane":"&#xf214;","ion-planet":"&#xf343;","ion-play":"&#xf215;","ion-playstation":"&#xf30a;","ion-plus":"&#xf218;","ion-plus-circled":"&#xf216;","ion-plus-round":"&#xf217;","ion-podium":"&#xf344;","ion-pound":"&#xf219;","ion-power":"&#xf2a9;","ion-pricetag":"&#xf2aa;","ion-pricetags":"&#xf2ab;","ion-printer":"&#xf21a;","ion-pull-request":"&#xf345;","ion-qr-scanner":"&#xf346;","ion-quote":"&#xf347;","ion-radio-waves":"&#xf2ac;","ion-record":"&#xf21b;","ion-refresh":"&#xf21c;","ion-reply":"&#xf21e;","ion-reply-all":"&#xf21d;","ion-ribbon-a":"&#xf348;","ion-ribbon-b":"&#xf349;","ion-sad":"&#xf34a;","ion-sad-outline":"&#xf4d7;","ion-scissors":"&#xf34b;","ion-search":"&#xf21f;","ion-settings":"&#xf2ad;","ion-share":"&#xf220;","ion-shuffle":"&#xf221;","ion-skip-backward":"&#xf222;","ion-skip-forward":"&#xf223;","ion-social-android":"&#xf225;","ion-social-android-outline":"&#xf224;","ion-social-angular":"&#xf4d9;","ion-social-angular-outline":"&#xf4d8;","ion-social-apple":"&#xf227;","ion-social-apple-outline":"&#xf226;","ion-social-bitcoin":"&#xf2af;","ion-social-bitcoin-outline":"&#xf2ae;","ion-social-buffer":"&#xf229;","ion-social-buffer-outline":"&#xf228;","ion-social-chrome":"&#xf4db;","ion-social-chrome-outline":"&#xf4da;","ion-social-codepen":"&#xf4dd;","ion-social-codepen-outline":"&#xf4dc;","ion-social-css3":"&#xf4df;","ion-social-css3-outline":"&#xf4de;","ion-social-designernews":"&#xf22b;","ion-social-designernews-outline":"&#xf22a;","ion-social-dribbble":"&#xf22d;","ion-social-dribbble-outline":"&#xf22c;","ion-social-dropbox":"&#xf22f;","ion-social-dropbox-outline":"&#xf22e;","ion-social-euro":"&#xf4e1;","ion-social-euro-outline":"&#xf4e0;","ion-social-facebook":"&#xf231;","ion-social-facebook-outline":"&#xf230;","ion-social-foursquare":"&#xf34d;","ion-social-foursquare-outline":"&#xf34c;","ion-social-freebsd-devil":"&#xf2c4;","ion-social-github":"&#xf233;","ion-social-github-outline":"&#xf232;","ion-social-google":"&#xf34f;","ion-social-google-outline":"&#xf34e;","ion-social-googleplus":"&#xf235;","ion-social-googleplus-outline":"&#xf234;","ion-social-hackernews":"&#xf237;","ion-social-hackernews-outline":"&#xf236;","ion-social-html5":"&#xf4e3;","ion-social-html5-outline":"&#xf4e2;","ion-social-instagram":"&#xf351;","ion-social-instagram-outline":"&#xf350;","ion-social-javascript":"&#xf4e5;","ion-social-javascript-outline":"&#xf4e4;","ion-social-linkedin":"&#xf239;","ion-social-linkedin-outline":"&#xf238;","ion-social-markdown":"&#xf4e6;","ion-social-nodejs":"&#xf4e7;","ion-social-octocat":"&#xf4e8;","ion-social-pinterest":"&#xf2b1;","ion-social-pinterest-outline":"&#xf2b0;","ion-social-python":"&#xf4e9;","ion-social-reddit":"&#xf23b;","ion-social-reddit-outline":"&#xf23a;","ion-social-rss":"&#xf23d;","ion-social-rss-outline":"&#xf23c;","ion-social-sass":"&#xf4ea;","ion-social-skype":"&#xf23f;","ion-social-skype-outline":"&#xf23e;","ion-social-snapchat":"&#xf4ec;","ion-social-snapchat-outline":"&#xf4eb;","ion-social-tumblr":"&#xf241;","ion-social-tumblr-outline":"&#xf240;","ion-social-tux":"&#xf2c5;","ion-social-twitch":"&#xf4ee;","ion-social-twitch-outline":"&#xf4ed;","ion-social-twitter":"&#xf243;","ion-social-twitter-outline":"&#xf242;","ion-social-usd":"&#xf353;","ion-social-usd-outline":"&#xf352;","ion-social-vimeo":"&#xf245;","ion-social-vimeo-outline":"&#xf244;","ion-social-whatsapp":"&#xf4f0;","ion-social-whatsapp-outline":"&#xf4ef;","ion-social-windows":"&#xf247;","ion-social-windows-outline":"&#xf246;","ion-social-wordpress":"&#xf249;","ion-social-wordpress-outline":"&#xf248;","ion-social-yahoo":"&#xf24b;","ion-social-yahoo-outline":"&#xf24a;","ion-social-yen":"&#xf4f2;","ion-social-yen-outline":"&#xf4f1;","ion-social-youtube":"&#xf24d;","ion-social-youtube-outline":"&#xf24c;","ion-soup-can":"&#xf4f4;","ion-soup-can-outline":"&#xf4f3;","ion-speakerphone":"&#xf2b2;","ion-speedometer":"&#xf2b3;","ion-spoon":"&#xf2b4;","ion-star":"&#xf24e;","ion-stats-bars":"&#xf2b5;","ion-steam":"&#xf30b;","ion-stop":"&#xf24f;","ion-thermometer":"&#xf2b6;","ion-thumbsdown":"&#xf250;","ion-thumbsup":"&#xf251;","ion-toggle":"&#xf355;","ion-toggle-filled":"&#xf354;","ion-transgender":"&#xf4f5;","ion-trash-a":"&#xf252;","ion-trash-b":"&#xf253;","ion-trophy":"&#xf356;","ion-tshirt":"&#xf4f7;","ion-tshirt-outline":"&#xf4f6;","ion-umbrella":"&#xf2b7;","ion-university":"&#xf357;","ion-unlocked":"&#xf254;","ion-upload":"&#xf255;","ion-usb":"&#xf2b8;","ion-videocamera":"&#xf256;","ion-volume-high":"&#xf257;","ion-volume-low":"&#xf258;","ion-volume-medium":"&#xf259;","ion-volume-mute":"&#xf25a;","ion-wand":"&#xf358;","ion-waterdrop":"&#xf25b;","ion-wifi":"&#xf25c;","ion-wineglass":"&#xf2b9;","ion-woman":"&#xf25d;","ion-wrench":"&#xf2ba;","ion-xbox":"&#xf30c;"}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["icon-block"],
	    style: {
	      width: _vm.size,
	      height: _vm.size
	    },
	    on: {
	      "click": function($event) {
	        _vm._click($event)
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["icon"],
	    style: _vm.getStyle,
	    attrs: {
	      "value": _vm.getFontName
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(48)

	/* template */
	var __vue_template__ = __webpack_require__(49)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-image.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    computed: {
	        imagePath: function imagePath() {
	            if (this.src.startsWith("http")) {
	                return this.src;
	            }
	            return this._getContext() + this.src;
	        },
	        placeholderPath: function placeholderPath() {
	            if (this.placeholder != "") {
	                if (this.placeholder.startsWith("http")) {
	                    return this.placeholder;
	                }
	                return this._getContext() + this.placeholder;
	            }
	        }
	    },
	    props: {
	        width: {
	            type: String
	        },
	        height: {
	            type: String
	        },
	        src: {
	            type: String
	        },
	        resize: {
	            type: String,
	            default: "stretch"
	        },
	        placeholder: {
	            type: String,
	            default: ""
	        },
	        radius: {
	            type: String,
	            default: "0px"
	        }
	    },
	    methods: {
	        _click: function _click(e) {
	            this.$emit('click', e);
	        },
	        _load: function _load() {
	            this.$emit('load');
	        },
	        _getContext: function _getContext() {
	            var bundleUrl = weex.config.bundleUrl;
	            var url = bundleUrl.split('/').slice(0, -1).join('/');
	            if (bundleUrl.indexOf("weex.html") > 0) {
	                url += "/dist/";
	            }
	            return url;
	        }
	    }
	};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('image', {
	    style: {
	      'border-radius': _vm.radius,
	      'width': _vm.width,
	      'height': _vm.height
	    },
	    attrs: {
	      "src": _vm.imagePath,
	      "placeholder": _vm.placeholderPath,
	      "resize": _vm.resize
	    },
	    on: {
	      "click": function($event) {
	        _vm._click($event)
	      },
	      "load": function($event) {
	        _vm._load()
	      }
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(51)
	)

	/* script */
	__vue_exports__ = __webpack_require__(52)

	/* template */
	var __vue_template__ = __webpack_require__(53)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-lazy-render.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c6f5decc"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = {
	  "lazy-tip": {
	    "textAlign": "center",
	    "fontSize": 30
	  },
	  "lazy-load-mask": {
	    "height": 60,
	    "paddingTop": 10,
	    "opacity": 1
	  }
	}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            show: true // 是否渲染组件
	        };
	    },

	    props: {
	        data: Array, // 需要在组件内渲染的数据
	        maskClass: String, // 遮罩层样式
	        tip: {
	            type: String,
	            default: function _default() {
	                return '正在渲染,请稍候';
	            }
	        },
	        time: { // 延迟渲染的时间
	            type: Number,
	            default: function _default() {
	                return 10;
	            }
	        },
	        limit: { // 超过多少条数据开启延迟渲染
	            type: Number,
	            default: function _default() {
	                return 30;
	            }
	        },
	        trackByData: Boolean, // 是否跟踪data的变化来渲染列表
	        immediately: Boolean // 是否立即重新渲染
	    },
	    created: function created() {
	        this.showLazy();
	    },

	    watch: {
	        data: function data() {
	            // 数据变化时重新渲染
	            if (this.trackByData) {
	                this.showLazy();
	            }
	        },

	        // 路由变化,重新渲染
	        $route: function $route() {
	            if (!this.trackByData) {
	                this.showLazy();
	            }
	        },

	        // 立即重新变为true时,重新渲染
	        immediately: function immediately() {
	            if (this.immediately) {
	                this.showLazy();
	            }
	        }
	    },
	    methods: {
	        //延迟渲染数据,在数据渲染完成后触发loaded事件
	        showLazy: function showLazy() {
	            if (this.data && this.data.length > this.limit || !this.data) {
	                // 如果数据存在并且数据的数量比限定的数量大,则开启延迟渲染 如果不是列表调用组件,也开启延迟渲染
	                this.syncLoader();
	            } else {
	                // 其他情况,不开启延迟渲染
	                this.show = true;
	                this.$emit('loaded');
	            }
	        },

	        //延迟渲染
	        syncLoader: function syncLoader() {
	            var _this = this;

	            this.show = false;
	            setTimeout(function () {
	                _this.show = true;
	                _this.$emit('loaded');
	            }, parseInt(this.time));
	        }
	    }
	};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["lazy-load"]
	  }, [(_vm.show) ? _vm._t("default") : _vm._e(), (!_vm.show) ? _c('div', {
	    ref: "mask",
	    class: [_vm.maskClass ? _vm.maskClass : 'lazy-load-mask']
	  }, [_c('text', {
	    staticClass: ["lazy-tip"]
	  }, [_vm._v(_vm._s(_vm.tip))])]) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(55)
	)

	/* script */
	__vue_exports__ = __webpack_require__(56)

	/* template */
	var __vue_template__ = __webpack_require__(57)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-load.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-716a5f2a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = {
	  "load-block": {
	    "position": "fixed",
	    "left": 280,
	    "right": 280,
	    "height": 150,
	    "backgroundColor": "#000000",
	    "opacity": 0.7,
	    "top": 350,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "borderRadius": 15,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "load-text": {
	    "color": "#ffffff",
	    "fontSize": 30
	  },
	  "load-icon": {
	    "width": 64,
	    "height": 64,
	    "fontSize": 50,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	module.exports = {
	    props: {
	        message: {
	            type: String,
	            default: '加载中...'
	        },
	        value: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            visible: false
	        };
	    },
	    watch: {
	        value: function value(val) {
	            this.visible = val;
	        },
	        visible: function visible(val) {
	            this.$emit('input', val);
	        }
	    },
	    mounted: function mounted() {
	        if (this.value) {
	            this.visible = true;
	        }
	    },

	    methods: {
	        _maskClick: function _maskClick() {
	            this.visible = false;
	            this.$emit("maskClick");
	        }
	    }
	};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.visible) ? _c('div', {
	    attrs: {
	      "value": _vm.value
	    }
	  }, [_c('bui-mask', {
	    on: {
	      "click": _vm._maskClick
	    }
	  }), _c('div', {
	    staticClass: ["load-block"]
	  }, [_c('bui-icon', {
	    staticClass: ["load-icon"],
	    attrs: {
	      "name": "ion-load-b"
	    }
	  }), _c('text', {
	    staticClass: ["load-text"]
	  }, [_vm._v(_vm._s(_vm.message))])], 1)], 1) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(59)
	)

	/* script */
	__vue_exports__ = __webpack_require__(60)

	/* template */
	var __vue_template__ = __webpack_require__(61)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-mask.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-69ae9f71"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 59 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-mask": {
	    "position": "fixed",
	    "left": 0,
	    "right": 0,
	    "top": 0,
	    "bottom": 0,
	    "backgroundColor": "#000000",
	    "opacity": 0.3
	  }
	}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//


	module.exports = {
	    props: {
	        "opacity": {
	            default: '0.2'
	        }
	    },
	    methods: {
	        _click: function _click() {
	            this.$emit("click");
	        }
	    }
	};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-mask"],
	    style: {
	      'opacity': _vm.opacity
	    },
	    on: {
	      "click": _vm._click
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(63)
	)

	/* script */
	__vue_exports__ = __webpack_require__(64)

	/* template */
	var __vue_template__ = __webpack_require__(65)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-panel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-797f5c4f"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "#3399ff"
	  },
	  "panel-success": {
	    "borderColor": "#00cc66"
	  },
	  "panel-info": {
	    "borderColor": "#5BC0DE"
	  },
	  "panel-warning": {
	    "borderColor": "#ff9900"
	  },
	  "panel-danger": {
	    "borderColor": "#ff4e24"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 34,
	    "color": "#464c5b"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "#3399ff",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "#00cc66",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "#5BC0DE",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "#ff9900",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "#ff4e24",
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    type: { default: 'default' },
	    title: { default: '' },
	    paddingBody: { default: 20 },
	    paddingHead: { default: 20 },
	    border: { default: 0 }
	  }
	};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['panel', 'panel-' + _vm.type],
	    style: {
	      borderWidth: _vm.border
	    }
	  }, [_c('text', {
	    class: ['panel-header', 'panel-header-' + _vm.type],
	    style: {
	      paddingTop: _vm.paddingHead,
	      paddingBottom: _vm.paddingHead,
	      paddingLeft: _vm.paddingHead * 1.5,
	      paddingRight: _vm.paddingHead * 1.5
	    }
	  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
	    class: ['panel-body', 'panel-body-' + _vm.type],
	    style: {
	      paddingTop: _vm.paddingBody,
	      paddingBottom: _vm.paddingBody,
	      paddingLeft: _vm.paddingBody * 1.5,
	      paddingRight: _vm.paddingBody * 1.5
	    }
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(67)
	)

	/* script */
	__vue_exports__ = __webpack_require__(68)

	/* template */
	var __vue_template__ = __webpack_require__(69)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-cff0da74"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = {
	  "radio-box": {
	    "alignItems": "center",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 5,
	    "marginRight": 40,
	    "paddingRight": 20
	  },
	  "radio-label": {
	    "fontSize": 30,
	    "marginLeft": 5
	  },
	  "disabled": {
	    "opacity": 0.5
	  },
	  "switch-box": {
	    "height": 80
	  },
	  "switch": {
	    "position": "absolute",
	    "right": 0,
	    "top": 0
	  },
	  "switch-label": {
	    "fontSize": 30,
	    "position": "absolute",
	    "top": 10,
	    "left": 0
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "flex-fluid": {
	    "flexWrap": "wrap"
	  }
	}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "direction": {
	            type: String,
	            default: 'horizontal' // horizontal | vertical
	        },
	        "items": {
	            type: Array,
	            default: []
	        },
	        "fontSize": {
	            type: String,
	            default: "32px"
	        },
	        "iconSize": {
	            type: String,
	            default: "48px"
	        },
	        "selectedColor": {
	            type: String,
	            default: "#00cc66"
	        },
	        "unSelectedColor": {
	            type: String,
	            default: "#9ea7b4"
	        }
	    },
	    computed: {
	        changeDirection: function changeDirection() {
	            return this.direction == "horizontal" ? "flex-row" : "flex-column";
	        }
	    },
	    data: function data() {
	        return {
	            radioItems: []
	        };
	    },

	    methods: {
	        select: function select(v) {
	            if (v.disabled) return;
	            var self = this;
	            self.radioItems.forEach(function (val, index) {
	                val.select = false;
	            });
	            v.select = true;
	            this.$emit("change", v);
	        }
	    },
	    created: function created() {
	        this.radioItems = JSON.parse(JSON.stringify(this.items));
	    }
	};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.changeDirection, 'flex-fluid']
	  }, _vm._l((_vm.radioItems), function(v) {
	    return _c('div', {
	      staticClass: ["radio-box", "flex-row"],
	      class: [v.disabled ? 'disabled' : ''],
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    }, [(v.select) ? _c('div', {
	      staticClass: ["bui-icon-box"]
	    }, [_c('bui-icon', {
	      attrs: {
	        "size": _vm.iconSize,
	        "name": "ion-android-radio-button-on",
	        "color": _vm.selectedColor
	      },
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    })], 1) : _vm._e(), (!v.select) ? _c('div', {
	      staticClass: ["bui-icon-box"]
	    }, [_c('bui-icon', {
	      attrs: {
	        "size": _vm.iconSize,
	        "name": "ion-android-radio-button-off",
	        "color": _vm.unSelectedColor
	      },
	      on: {
	        "click": function($event) {
	          _vm.select(v)
	        }
	      }
	    })], 1) : _vm._e(), _c('text', {
	      staticClass: ["radio-label"],
	      style: {
	        'font-size': _vm.fontSize
	      }
	    }, [_vm._v(_vm._s(v.title))])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(71)
	)
	__vue_styles__.push(__webpack_require__(72)
	)

	/* script */
	__vue_exports__ = __webpack_require__(73)

	/* template */
	var __vue_template__ = __webpack_require__(74)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-searchbar-center.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2e97227c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = {
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-fluid": {
	    "flexWrap": "wrap"
	  },
	  "center": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "column-center-top": {
	    "alignItems": "center"
	  },
	  "column-center-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "column-center-left": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "column-center-right": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "column-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "column-right-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "column-left-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "column-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "row-space-between": {
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "row-center-top": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "row-center-bottom": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "row-center-left": {
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "row-center-right": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "row-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "row-right-top": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "row-left-bottom": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "row-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "span1": {
	    "flex": 1
	  },
	  "span2": {
	    "flex": 2
	  },
	  "span3": {
	    "flex": 3
	  },
	  "span4": {
	    "flex": 4
	  },
	  "span5": {
	    "flex": 5
	  },
	  "span6": {
	    "flex": 6
	  },
	  "span7": {
	    "flex": 7
	  },
	  "span8": {
	    "flex": 8
	  },
	  "span9": {
	    "flex": 9
	  },
	  "span10": {
	    "flex": 10
	  },
	  "span11": {
	    "flex": 11
	  },
	  "span12": {
	    "flex": 12
	  },
	  "flex1": {
	    "flex": 1
	  },
	  "flex2": {
	    "flex": 2
	  },
	  "flex3": {
	    "flex": 3
	  },
	  "flex4": {
	    "flex": 4
	  },
	  "flex5": {
	    "flex": 5
	  },
	  "flex6": {
	    "flex": 6
	  },
	  "flex7": {
	    "flex": 7
	  },
	  "flex8": {
	    "flex": 8
	  },
	  "flex9": {
	    "flex": 9
	  },
	  "flex10": {
	    "flex": 10
	  },
	  "flex11": {
	    "flex": 11
	  },
	  "flex12": {
	    "flex": 12
	  },
	  "p-r": {
	    "position": "relative"
	  },
	  "p-a": {
	    "position": "absolute"
	  }
	}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-searchbar": {
	    "paddingLeft": 20,
	    "paddingTop": 15,
	    "paddingRight": 20,
	    "paddingBottom": 15
	  },
	  "bui-input": {
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10,
	    "paddingLeft": 20,
	    "paddingTop": 15,
	    "paddingRight": 20,
	    "paddingBottom": 15,
	    "position": "relative"
	  },
	  "bui-search-icon-box-text": {
	    "color": "#9ea7b4",
	    "fontSize": 30,
	    "paddingLeft": 15
	  },
	  "bui-search-input-text": {
	    "fontSize": 30,
	    "height": 40,
	    "paddingLeft": 10,
	    "paddingRight": 10
	  },
	  "bui-search-search": {
	    "fontSize": 30,
	    "paddingLeft": 15,
	    "paddingTop": 15,
	    "paddingRight": 10,
	    "paddingBottom": 15
	  },
	  "bui-search-bg-default": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "bui-search-text-color-default": {
	    "color": "#657180"
	  },
	  "bui-search-bg-primary": {
	    "backgroundColor": "#4ca4fe"
	  },
	  "bui-search-text-color-primary": {
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "type": {
	            type: String,
	            default: 'default'
	        },
	        "placeholder": {
	            type: String,
	            default: "请输入搜索内容"
	        },
	        "value": {
	            type: String,
	            default: ""
	        },
	        "autofocus": {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            deletestatus: false,
	            searchstatus: false,
	            autofocusNew: false,
	            valueNew: ''
	        };
	    },
	    methods: {
	        //搜索框触发输入焦点
	        "onfocusFn": function onfocusFn() {
	            this.searchstatus = true;
	            this.autofocusNew = true;
	        },
	        //搜索获得输入焦点
	        "onfocus": function onfocus(event) {
	            this.$emit("focus", event);
	        },
	        //搜索失去输入焦点
	        "onblur": function onblur(event) {
	            this.autofocusNew = false;
	            this.$emit('blur', event);
	        },
	        //搜索输入值更改
	        "oninput": function oninput(event) {
	            this.valueNew = event.value;
	            if (this.valueNew.length == 0) this.deletestatus = false;else this.deletestatus = true;
	            this.$emit('input', event);
	        },
	        //清除搜索输入值
	        "onclear": function onclear(event) {
	            this.autofocusNew = false;
	            this.deletestatus = false;
	            this.valueNew = "";
	            this.$emit('clear');
	        },
	        //搜索
	        "search": function search() {
	            this.$emit("search", this.valueNew);
	        }

	    }
	};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['flex-row', 'row-center-left', 'bui-searchbar', 'bui-search-bg-' + _vm.type],
	    on: {
	      "click": _vm.onfocusFn
	    }
	  }, [_c('div', {
	    class: ['flex-row', 'row-center-left', 'span1', 'bui-input']
	  }, [_c('div', {
	    staticClass: ["flex-row", "center"],
	    class: [!_vm.searchstatus ? 'span1' : '']
	  }, [(!_vm.deletestatus) ? _c('bui-icon', {
	    attrs: {
	      "name": "ion-ios-search-strong"
	    },
	    on: {
	      "click": _vm.onfocusFn
	    }
	  }) : _vm._e(), (!_vm.searchstatus) ? _c('text', {
	    staticClass: ["bui-search-icon-box-text"]
	  }, [_vm._v("搜索")]) : _vm._e()], 1), (_vm.searchstatus) ? _c('input', {
	    staticClass: ["span1", "bui-search-input-text"],
	    attrs: {
	      "returnKeyType": "search",
	      "value": _vm.valueNew,
	      "autofocus": _vm.autofocusNew,
	      "type": "text",
	      "placeholder": _vm.placeholder
	    },
	    on: {
	      "focus": function($event) {
	        _vm.onfocus($event)
	      },
	      "return": _vm.search,
	      "blur": function($event) {
	        _vm.onblur($event)
	      },
	      "input": function($event) {
	        _vm.oninput($event)
	      }
	    }
	  }) : _vm._e(), (_vm.deletestatus) ? _c('bui-icon', {
	    staticClass: ["bui-search-icon-delete"],
	    attrs: {
	      "name": "ion-ios-close-outline"
	    },
	    on: {
	      "click": function($event) {
	        _vm.onclear($event)
	      }
	    }
	  }) : _vm._e()], 1), (_vm.searchstatus) ? _c('text', {
	    class: ['bui-search-search', 'bui-search-text-color-' + _vm.type],
	    on: {
	      "click": function($event) {
	        _vm.search()
	      }
	    }
	  }, [_vm._v("搜索")]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(76)
	)
	__vue_styles__.push(__webpack_require__(77)
	)

	/* script */
	__vue_exports__ = __webpack_require__(78)

	/* template */
	var __vue_template__ = __webpack_require__(79)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-searchbar-left.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-17e3f624"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = {
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-fluid": {
	    "flexWrap": "wrap"
	  },
	  "center": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "column-center-top": {
	    "alignItems": "center"
	  },
	  "column-center-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "column-center-left": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "column-center-right": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "column-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "column-right-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "column-left-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "column-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "row-space-between": {
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "row-center-top": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "row-center-bottom": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "row-center-left": {
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "row-center-right": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "row-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "row-right-top": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "row-left-bottom": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "row-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "span1": {
	    "flex": 1
	  },
	  "span2": {
	    "flex": 2
	  },
	  "span3": {
	    "flex": 3
	  },
	  "span4": {
	    "flex": 4
	  },
	  "span5": {
	    "flex": 5
	  },
	  "span6": {
	    "flex": 6
	  },
	  "span7": {
	    "flex": 7
	  },
	  "span8": {
	    "flex": 8
	  },
	  "span9": {
	    "flex": 9
	  },
	  "span10": {
	    "flex": 10
	  },
	  "span11": {
	    "flex": 11
	  },
	  "span12": {
	    "flex": 12
	  },
	  "flex1": {
	    "flex": 1
	  },
	  "flex2": {
	    "flex": 2
	  },
	  "flex3": {
	    "flex": 3
	  },
	  "flex4": {
	    "flex": 4
	  },
	  "flex5": {
	    "flex": 5
	  },
	  "flex6": {
	    "flex": 6
	  },
	  "flex7": {
	    "flex": 7
	  },
	  "flex8": {
	    "flex": 8
	  },
	  "flex9": {
	    "flex": 9
	  },
	  "flex10": {
	    "flex": 10
	  },
	  "flex11": {
	    "flex": 11
	  },
	  "flex12": {
	    "flex": 12
	  },
	  "p-r": {
	    "position": "relative"
	  },
	  "p-a": {
	    "position": "absolute"
	  }
	}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-searchbar": {
	    "paddingLeft": 20,
	    "paddingTop": 15,
	    "paddingRight": 20,
	    "paddingBottom": 15
	  },
	  "bui-input": {
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10,
	    "paddingLeft": 20,
	    "paddingTop": 15,
	    "paddingRight": 20,
	    "paddingBottom": 15,
	    "position": "relative"
	  },
	  "bui-search-icon-box-text": {
	    "color": "#9ea7b4",
	    "fontSize": 30,
	    "paddingLeft": 15
	  },
	  "bui-search-input-text": {
	    "fontSize": 30,
	    "height": 40,
	    "paddingLeft": 10,
	    "paddingRight": 10
	  },
	  "bui-search-search": {
	    "fontSize": 30,
	    "paddingLeft": 15,
	    "paddingTop": 15,
	    "paddingRight": 10,
	    "paddingBottom": 15
	  },
	  "bui-search-bg-default": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "bui-search-text-color-default": {
	    "color": "#657180"
	  },
	  "bui-search-bg-primary": {
	    "backgroundColor": "#4ca4fe"
	  },
	  "bui-search-text-color-primary": {
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "type": {
	            type: String,
	            default: 'default'
	        },
	        "placeholder": {
	            type: String,
	            default: "请输入搜索内容"
	        },
	        "value": {
	            type: String,
	            default: ""
	        },
	        "autofocus": {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            deletestatus: false,
	            searchstatus: false,
	            autofocusNew: false,
	            valueNew: ''
	        };
	    },
	    created: function created() {
	        this.autofocusNew = this.autofocus;
	        this.valueNew = this.value;
	    },

	    methods: {
	        //搜索框触发输入焦点
	        "onfocusFn": function onfocusFn(event) {
	            this.autofocusNew = true;
	        },
	        //搜索获得输入焦点
	        "onfocus": function onfocus(event) {
	            console.log(event);
	            console.log('onfocus11');
	            this.searchstatus = true;
	            this.$emit("focus", event);
	        },
	        //搜索失去输入焦点
	        "onblur": function onblur(event) {
	            this.autofocusNew = false;
	            this.$emit('blur', event);
	        },
	        //搜索输入值更改
	        "oninput": function oninput(event) {
	            this.valueNew = event.value;
	            if (this.valueNew.length == 0) this.deletestatus = false;else this.deletestatus = true;
	            this.$emit('input', event);
	        },
	        //清除搜索输入值
	        "onclear": function onclear(event) {
	            this.autofocusNew = false;
	            this.deletestatus = false;
	            this.valueNew = "";
	            this.$emit('clear');
	        },
	        //搜索
	        "search": function search() {
	            this.$emit("search", this.valueNew);
	        }

	    }
	};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['flex-row', 'row-center-left', 'bui-searchbar', 'bui-search-bg-' + _vm.type],
	    on: {
	      "click": function($event) {
	        _vm.onfocusFn()
	      }
	    }
	  }, [_c('div', {
	    class: ['flex-row', 'row-center-left', 'span1', 'bui-input']
	  }, [_c('bui-icon', {
	    attrs: {
	      "name": "ion-ios-search-strong"
	    }
	  }), _c('input', {
	    staticClass: ["span1", "bui-search-input-text"],
	    attrs: {
	      "value": _vm.valueNew,
	      "autofocus": _vm.autofocusNew,
	      "returnKeyType": "search",
	      "type": "text",
	      "placeholder": _vm.placeholder
	    },
	    on: {
	      "focus": function($event) {
	        _vm.onfocus($event)
	      },
	      "blur": function($event) {
	        _vm.onblur($event)
	      },
	      "input": function($event) {
	        _vm.oninput($event)
	      },
	      "return": _vm.search
	    }
	  }), (_vm.deletestatus) ? _c('bui-icon', {
	    staticClass: ["bui-search-icon-delete"],
	    attrs: {
	      "name": "ion-ios-close-outline"
	    },
	    on: {
	      "click": function($event) {
	        _vm.onclear($event)
	      }
	    }
	  }) : _vm._e()], 1), (_vm.searchstatus) ? _c('text', {
	    class: ['bui-search-search', 'bui-search-text-color-' + _vm.type],
	    on: {
	      "click": function($event) {
	        _vm.search()
	      }
	    }
	  }, [_vm._v("搜索")]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(81)
	)

	/* script */
	__vue_exports__ = __webpack_require__(82)

	/* template */
	var __vue_template__ = __webpack_require__(83)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-slider-bar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-73cfae6c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-slider-bar-box": {
	    "position": "fixed",
	    "width": 600,
	    "top": 0,
	    "bottom": 0,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "column"
	  },
	  "bui-left-slider-bar-box": {
	    "left": -600
	  },
	  "bui-right-slider-bar-box": {
	    "right": -600
	  },
	  "bui-slider-content": {
	    "flexDirection": "column",
	    "flex": 1
	  }
	}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	module.exports = {
	    props: {
	        type: {
	            type: String,
	            default: 'left'
	        },
	        value: {
	            type: Boolean,
	            default: false
	        },
	        width: {
	            type: String,
	            default: '400px'
	        }
	    },
	    data: function data() {
	        return {
	            visible: false
	        };
	    },

	    watch: {
	        value: function value(val) {
	            this.visible = val;
	        },
	        visible: function visible(val) {
	            this.$emit('input', val);
	        }
	    },
	    mounted: function mounted() {
	        if (this.value) {
	            this.visible = true;
	        }
	    },

	    methods: {
	        _animationFn: function _animationFn(translate, fn) {
	            var el = this.$refs.navbar;
	            animation.transition(el, {
	                styles: {
	                    transform: translate,
	                    transformOrigin: 'center center'
	                },
	                duration: 300,
	                timingFunction: "ease-in",
	                delay: 0
	            }, function () {
	                fn && fn();
	            });
	        },
	        show: function show() {
	            var _this = this;

	            setTimeout(function () {
	                _this._openBar();
	            }, 50);
	        },
	        _openBar: function _openBar() {
	            var translate = '';
	            if (this.type == "right") {
	                translate = 'translate(-600px, 0)';
	            } else if (this.type == "left") {
	                translate = 'translate(600px, 0)';
	            }
	            this._animationFn(translate);
	        },
	        _maskClick: function _maskClick() {
	            var _this2 = this;

	            var translate = '';
	            if (this.type == "right") {
	                translate = 'translate(600px, 0px)';
	            } else if (this.type == "left") {
	                translate = 'translate(-600px, 0px)';
	            }
	            this._animationFn(translate, function () {
	                _this2.visible = false;
	                _this2.$emit("close");
	            });
	        },
	        _onSwipe: function _onSwipe(event) {
	            switch (this.type) {
	                case "left":
	                    if (event.direction == 'left') {
	                        this._maskClick();
	                    }
	                    break;
	                case "right":
	                    if (event.direction == 'right') {
	                        this._maskClick();
	                    }
	                    break;
	            }
	        }
	    }
	};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.visible) ? _c('div', {
	    attrs: {
	      "value": _vm.value
	    }
	  }, [_c('bui-mask', {
	    on: {
	      "click": _vm._maskClick
	    }
	  }), _c('div', {
	    ref: "navbar",
	    staticClass: ["bui-slider-bar-box"],
	    class: ['bui-' + _vm.type + '-slider-bar-box'],
	    style: {
	      'width': _vm.width
	    },
	    on: {
	      "swipe": function($event) {
	        _vm._onSwipe($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: ["bui-slider-content"]
	  }, [_c('scroller', [_vm._t("default")], 2)])])], 1) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(85)
	)

	/* script */
	__vue_exports__ = __webpack_require__(86)

	/* template */
	var __vue_template__ = __webpack_require__(87)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-switch.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-56f6a479"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = {
	  "radio-box": {
	    "alignItems": "center",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 5,
	    "marginRight": 40,
	    "paddingRight": 20
	  },
	  "radio-label": {
	    "fontSize": 30,
	    "marginLeft": 5
	  },
	  "disabled": {
	    "opacity": 0.5
	  },
	  "switch-box": {
	    "height": 80
	  },
	  "switch": {
	    "position": "absolute",
	    "right": 0,
	    "top": 0
	  },
	  "switch-label": {
	    "fontSize": 30,
	    "position": "absolute",
	    "top": 10,
	    "left": 0
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "flex-fluid": {
	    "flexWrap": "wrap"
	  }
	}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        "title": {
	            type: String
	        },
	        "checked": {
	            type: Boolean,
	            default: false
	        },
	        "disabled": {
	            type: Boolean,
	            default: false
	        }
	    },
	    methods: {
	        onchange: function onchange(event) {
	            this.checked = event.value;
	            this.$emit("change", this.checked);
	        }
	    }
	};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["switch-box"]
	  }, [_c('switch', {
	    staticClass: ["switch"],
	    attrs: {
	      "checked": _vm.checked,
	      "disabled": _vm.disabled
	    },
	    on: {
	      "change": _vm.onchange
	    }
	  }), (_vm.title) ? _c('text', {
	    staticClass: ["switch-label"]
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(89)

	/* template */
	var __vue_template__ = __webpack_require__(90)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-tabbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        tabItems: { default: [] },
	        value: { type: Number, default: 0 },
	        height: { default: "100px" },
	        iconSize: { default: "45px" },
	        titleSize: { default: '22px' },
	        background: { default: '#f7f7f7' },
	        selectedBackground: { default: '#f7f7f7' },
	        normalColor: { default: '#818181' },
	        selectedColor: { default: '#4ca4fe' },
	        borderBottomColor: { default: '#4ca4fe' },
	        containerStyle: { default: function _default() {
	                return {};
	            } },
	        itemStyle: { default: function _default() {
	                return {};
	            } },
	        showSelectedLine: { default: false }
	    },
	    methods: {
	        "getContainerStyle": function getContainerStyle() {
	            //合并样式
	            var style = { 'flex-direction': 'row', 'height': this.height };
	            style = Object.assign(style, this.containerStyle);
	            return style;
	        },
	        "getItemStyle": function getItemStyle(item, index) {
	            var selected = index === this.value;

	            var backgroundColor = selected ? this.selectedBackground : this.background;

	            var borderBottomColor = selected && this.showSelectedLine ? this.borderBottomColor : backgroundColor;

	            var style = {
	                'flex': 1,
	                'align-items': 'center',
	                'justify-content': 'center',
	                'border-bottom-width': '5px',
	                'border-bottom-style': 'solid',
	                'border-bottom-color': borderBottomColor,
	                'backgroundColor': backgroundColor
	            };
	            return Object.assign(style, this.itemStyle);
	            return style;
	        },
	        "getTitleStyle": function getTitleStyle(item, index) {
	            var selected = index === this.value;
	            var style = {
	                'color': selected ? this.selectedColor : this.normalColor,
	                'font-size': this.titleSize
	            };
	            return style;
	        },
	        "itemClick": function itemClick(e, item, index) {
	            this.value = index;
	            this.$emit('input', index);
	            this.$emit('change', index);
	        }
	    }
	};

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: _vm.getContainerStyle()
	  }, _vm._l((_vm.tabItems), function(item, index) {
	    return _c('div', {
	      style: _vm.getItemStyle(item, index),
	      on: {
	        "click": function($event) {
	          _vm.itemClick($event, item, index)
	        }
	      }
	    }, [(item.icon) ? _c('bui-icon', {
	      attrs: {
	        "name": item.icon,
	        "color": index === _vm.value ? _vm.selectedColor : _vm.normalColor,
	        "size": _vm.iconSize
	      },
	      on: {
	        "click": function($event) {
	          _vm.itemClick($event, item, index)
	        }
	      }
	    }) : _vm._e(), (item.title) ? _c('text', {
	      style: _vm.getTitleStyle(item, index),
	      on: {
	        "click": function($event) {
	          _vm.itemClick($event, item, index)
	        }
	      }
	    }, [_vm._v(_vm._s(item.title))]) : _vm._e()], 1)
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(92)
	)

	/* script */
	__vue_exports__ = __webpack_require__(93)

	/* template */
	var __vue_template__ = __webpack_require__(94)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-tabbar-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7455502d"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 92 */
/***/ (function(module, exports) {

	module.exports = {
	  "span1": {
	    "flex": 1
	  }
	}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//

	module.exports = {
	    data: function data() {
	        return {
	            iosfix: false
	        };
	    },
	    watch: {},
	    props: {
	        tabId: {},
	        currentTab: {}
	    },
	    methods: {},
	    created: function created() {
	        var env = weex.config.env.platform.toLowerCase();
	        if (env == "ios") {
	            this.iosfix = true;
	        }
	    }
	};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: _vm.tabId,
	    class: [_vm.iosfix ? 'span1' : '']
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(96)

	/* template */
	var __vue_template__ = __webpack_require__(97)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-tabbar-item-a.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 96 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//

	module.exports = {
	    data: function data() {
	        return {
	            left: 0
	        };
	    },
	    watch: {
	        currentTabIndex: function currentTabIndex() {
	            if (this.index == this.currentTabIndex) {
	                this.left = 0;
	            } else {
	                this.left = this.width;
	            }
	        }
	    },
	    props: {
	        index: {},
	        currentTabIndex: {},
	        height: {},
	        width: { default: 750 }
	    },
	    methods: {},
	    created: function created() {
	        if (this.index == 0) {
	            this.left = 0;
	        } else {
	            this.left = this.width;
	        }
	    }
	};

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: {
	      'position': 'absolute',
	      'top': '0px',
	      'left': _vm.left,
	      'bottom': '0px',
	      'right': '0px'
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(99)
	)

	/* script */
	__vue_exports__ = __webpack_require__(100)

	/* template */
	var __vue_template__ = __webpack_require__(105)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-tabbar-scroll.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7ff05667"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-tabbar-wrapper": {
	    "width": 750,
	    "flex": 1
	  },
	  "bui-tabbar-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 100
	  },
	  "bui-tabbar": {
	    "flexDirection": "row",
	    "height": 100
	  },
	  "bui-tabbar-item-container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "#d7dde4"
	  },
	  "bui-tabbar-text": {
	    "marginTop": 5,
	    "textAlign": "center"
	  },
	  "bui-scroller-bar-top": {
	    "height": 80,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#d7dde4"
	  },
	  "bui-scroller-tabbar-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 80,
	    "marginBottom": 0
	  },
	  "bui-scroller-tabbar": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "bui-scroller-tabbar-row": {
	    "height": 80,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "paddingLeft": 50,
	    "paddingRight": 50
	  },
	  "actived": {
	    "position": "absolute",
	    "bottom": 0,
	    "left": 40,
	    "right": 40,
	    "borderBottomWidth": 5,
	    "borderBottomStyle": "solid"
	  },
	  "text": {
	    "color": "#9ea7b4",
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        scroll: {},
	        tabItems: { default: [] },
	        selectedColor: { default: '#3399ff' },
	        unselectedColor: { default: '#8a8a8a' },
	        titleSize: {},
	        top: { default: "0px" }, //内容区域离顶部的距离
	        selectedIndex: { default: 0 //当前选中的索引
	        } },
	    data: function data() {
	        return {};
	    },
	    components: {
	        tabitem: __webpack_require__(101)
	    },
	    created: function created() {
	        this.select(this.selectedIndex);
	    },
	    methods: {
	        tabItemOnClick: function tabItemOnClick(e) {
	            this.selectedIndex = e.index;
	            this.select(e.index);
	            this.$emit('tabItemOnClick', e);
	        },
	        select: function select(index) {
	            for (var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if (i == index) {
	                    tabItem.selected = true;
	                    tabItem.titleColor = this.selectedColor;
	                    tabItem.visibility = 'visible';
	                } else {
	                    tabItem.selected = false;
	                    tabItem.titleColor = this.unselectedColor;
	                    tabItem.visibility = 'hidden';
	                }
	            }
	        }
	    }
	};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(102)
	)

	/* script */
	__vue_exports__ = __webpack_require__(103)

	/* template */
	var __vue_template__ = __webpack_require__(104)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-tabbar-scroll-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5d1554e9"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 102 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-tabbar-wrapper": {
	    "width": 750,
	    "flex": 1
	  },
	  "bui-tabbar-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 100
	  },
	  "bui-tabbar": {
	    "flexDirection": "row",
	    "height": 100
	  },
	  "bui-tabbar-item-container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "#d7dde4"
	  },
	  "bui-tabbar-text": {
	    "marginTop": 5,
	    "textAlign": "center"
	  },
	  "bui-scroller-bar-top": {
	    "height": 80,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#d7dde4"
	  },
	  "bui-scroller-tabbar-content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 80,
	    "marginBottom": 0
	  },
	  "bui-scroller-tabbar": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "bui-scroller-tabbar-row": {
	    "height": 80,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "paddingLeft": 50,
	    "paddingRight": 50
	  },
	  "actived": {
	    "position": "absolute",
	    "bottom": 0,
	    "left": 40,
	    "right": 40,
	    "borderBottomWidth": 5,
	    "borderBottomStyle": "solid"
	  },
	  "text": {
	    "color": "#9ea7b4",
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        index: { default: 0 },
	        title: { default: '' },
	        titleColor: { default: '#000000' },
	        titleSize: { default: '28' },
	        selected: { default: false },
	        length: {},
	        scroll: { default: true }
	    },
	    methods: {
	        onclickitem: function onclickitem(e) {
	            var params = {
	                index: this.index
	            };
	            this.$emit('tabItemOnClick', params);
	        }
	    },
	    computed: {
	        width: function width() {
	            if (this.scroll) return;
	            var i = 750 / this.length;
	            return i;
	        }
	    }
	};

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-scroller-tabbar-row"],
	    style: {
	      'width': _vm.width
	    },
	    on: {
	      "click": _vm.onclickitem
	    }
	  }, [_c('text', {
	    staticClass: ["text"],
	    style: {
	      'color': _vm.titleColor,
	      'font-size': _vm.titleSize
	    }
	  }, [_vm._v(_vm._s(_vm.title))]), (_vm.selected) ? _c('text', {
	    staticClass: ["actived"],
	    style: {
	      'border-bottom-color': _vm.titleColor
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bui-tabbar-wrapper"]
	  }, [_c('div', {
	    staticClass: ["bui-scroller-bar-top"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('scroller', {
	    staticClass: ["bui-scroller-tabbar"],
	    attrs: {
	      "scrollDirection": "horizontal",
	      "showScrollbar": "false"
	    }
	  }, _vm._l((_vm.tabItems), function(item) {
	    return _c('tabitem', {
	      key: item.index,
	      attrs: {
	        "index": item.index,
	        "title": item.title,
	        "titleColor": item.titleColor,
	        "titleSize": _vm.titleSize,
	        "selected": item.selected,
	        "length": _vm.tabItems.length,
	        "scroll": _vm.scroll
	      },
	      on: {
	        "tabItemOnClick": _vm.tabItemOnClick
	      }
	    })
	  }))]), _vm._l((_vm.tabItems), function(item, i) {
	    return _c('embed', {
	      key: i,
	      staticClass: ["bui-scroller-tabbar-content"],
	      style: {
	        visibility: item.visibility
	      },
	      attrs: {
	        "src": item.src,
	        "type": "weex"
	      }
	    })
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(107)
	)

	/* script */
	__vue_exports__ = __webpack_require__(108)

	/* template */
	var __vue_template__ = __webpack_require__(109)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-tip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-652e7fb4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderRadius": 10,
	    "marginBottom": 10
	  },
	  "tip-txt": {
	    "fontSize": 30
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        type: { default: 'success' },
	        value: { default: '' }
	    }
	};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['tip', 'tip-' + _vm.type]
	  }, [_c('text', {
	    class: ['tip-txt', 'tip-txt-' + _vm.type]
	  }, [_vm._v(_vm._s(_vm.value))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(111)

	/* template */
	var __vue_template__ = __webpack_require__(112)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-video.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        'src': { default: '' },
	        'playstatus': { default: 'pause' },
	        'autoplay': { default: false },
	        'seek': { default: 0 }
	    },
	    data: function data() {
	        return {};
	    },
	    methods: {
	        "statusChange": function statusChange(status) {
	            this.$emit(status);
	        },
	        "progress": function progress(res) {
	            this.$emit("progress", res.total, res.progress);
	        }
	    }
	};

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('video-ex', {
	    attrs: {
	      "src": _vm.src,
	      "playstatus": _vm.playstatus,
	      "autoplay": _vm.autoplay,
	      "seek": _vm.seek
	    },
	    on: {
	      "pause": function($event) {
	        _vm.statusChange('pause')
	      },
	      "start": function($event) {
	        _vm.statusChange('start')
	      },
	      "finish": function($event) {
	        _vm.statusChange('finish')
	      },
	      "fail": function($event) {
	        _vm.statusChange('fail')
	      },
	      "progress": _vm.progress
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(114)

	/* template */
	var __vue_template__ = __webpack_require__(115)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-content.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 114 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        padded: { default: false },
	        padding: { default: "20px" }
	    }
	};

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: {
	      'padding': _vm.padded == 'true' ? _vm.padding : '0px'
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(117)

	/* template */
	var __vue_template__ = __webpack_require__(118)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-content-scroll.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        padded: { default: false },
	        padding: { default: "20px" }
	    }
	};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    style: {
	      'padding': _vm.padded == 'true' ? _vm.padding : '0px'
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(120)
	)

	/* script */
	__vue_exports__ = __webpack_require__(121)

	/* template */
	var __vue_template__ = __webpack_require__(122)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-image-slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3272bd98"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 120 */
/***/ (function(module, exports) {

	module.exports = {
	  "indicator": {
	    "width": 750,
	    "height": 100,
	    "position": "absolute",
	    "bottom": 0,
	    "left": 0,
	    "itemColor": "#ffffff",
	    "itemSelectedColor": "#747474",
	    "itemSize": 20,
	    "opacity": 0.8
	  }
	}

/***/ }),
/* 121 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: {
	        sliderStyle: {
	            default: {
	                "width": "750px",
	                "height": "400px"
	            }
	        },
	        indicatorStyle: {
	            default: {}
	        },
	        items: {
	            default: []
	        },
	        interval: {
	            default: 2000
	        },
	        autoplay: {
	            default: true
	        },
	        infinite: {
	            default: true
	        },
	        imgResize: {
	            default: "stretch"
	        },
	        imgWidth: {
	            default: "750px"
	        },
	        imgHeight: {
	            default: "750px"
	        },
	        placeholder: {
	            default: ""
	        }
	    },
	    methods: {
	        _change: function _change(e) {
	            this.$emit("change", e);
	        },
	        _click: function _click(e, index) {
	            this.$emit("itemClick", e, index);
	        }
	    }
	};

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('slider', {
	    style: _vm.sliderStyle,
	    attrs: {
	      "interval": _vm.interval,
	      "autoPlay": _vm.autoplay,
	      "infinite": _vm.infinite
	    },
	    on: {
	      "change": _vm._change
	    }
	  }, [_vm._l((_vm.items), function(item, index) {
	    return _c('div', [_c('bui-image', {
	      attrs: {
	        "width": _vm.imgWidth,
	        "resize": _vm.imgResize,
	        "height": _vm.imgHeight,
	        "placeholder": _vm.placeholder,
	        "src": item.url
	      },
	      on: {
	        "click": function($event) {
	          _vm._click($event, index)
	        }
	      }
	    })], 1)
	  }), _c('indicator', {
	    staticClass: ["indicator"],
	    style: _vm.indicatorStyle
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(124)
	)

	/* script */
	__vue_exports__ = __webpack_require__(125)

	/* template */
	var __vue_template__ = __webpack_require__(126)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-cell.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2297f6e7"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 124 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-cell": {
	    "height": 100,
	    "position": "relative",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "paddingLeft": 24,
	    "paddingRight": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "cell-margin": {
	    "marginBottom": 24
	  },
	  "cell-title": {
	    "flex": 1
	  },
	  "cell-indent": {
	    "paddingBottom": 30,
	    "paddingTop": 30
	  },
	  "has-desc": {
	    "paddingBottom": 18,
	    "paddingTop": 18
	  },
	  "cell-top-border": {
	    "borderTopColor": "#e2e2e2",
	    "borderTopWidth": 1
	  },
	  "cell-bottom-border": {
	    "borderBottomColor": "#e2e2e2",
	    "borderBottomWidth": 1
	  },
	  "cell-label-text": {
	    "fontSize": 30,
	    "color": "#666666",
	    "width": 188,
	    "marginRight": 10
	  },
	  "cell-content": {
	    "color": "#333333",
	    "fontSize": 30,
	    "lineHeight": 40
	  },
	  "cell-desc-text": {
	    "color": "#999999",
	    "fontSize": 24,
	    "lineHeight": 30,
	    "marginTop": 4
	  }
	}

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        label: {
	            type: String,
	            default: ''
	        },
	        title: {
	            type: String,
	            default: ''
	        },
	        desc: {
	            type: String,
	            default: ''
	        },
	        hasTopBorder: {
	            type: Boolean,
	            default: false
	        },
	        hasMargin: {
	            type: Boolean,
	            default: false
	        },
	        hasBottomBorder: {
	            type: Boolean,
	            default: true
	        },
	        hasVerticalIndent: {
	            type: Boolean,
	            default: false
	        },
	        cellStyle: {
	            type: Object,
	            default: function _default() {
	                return {};
	            }
	        }
	    },
	    methods: {
	        _cellClick: function _cellClick(e) {
	            this.$emit('cellClick', { e: e });
	        }
	    }
	};

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['bui-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
	    style: _vm.cellStyle,
	    on: {
	      "click": _vm._cellClick
	    }
	  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
	    staticClass: ["cell-label-text"]
	  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
	    staticClass: ["cell-title"]
	  }, [_vm._t("title", [_c('text', {
	    staticClass: ["cell-content"]
	  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
	    staticClass: ["cell-desc-text"]
	  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("action"), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(128)
	)

	/* script */
	__vue_exports__ = __webpack_require__(129)

	/* template */
	var __vue_template__ = __webpack_require__(130)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-popup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a5bba212"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 128 */
/***/ (function(module, exports) {

	module.exports = {
	  "bui-popup": {
	    "position": "fixed",
	    "width": 750
	  },
	  "top": {
	    "left": 0,
	    "right": 0
	  },
	  "bottom": {
	    "left": 0,
	    "right": 0
	  },
	  "left": {
	    "bottom": 0,
	    "top": 0
	  },
	  "right": {
	    "bottom": 0,
	    "top": 0
	  }
	}

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	exports.default = {
	    props: {
	        show: {
	            type: Boolean,
	            default: false
	        },
	        pos: {
	            type: String,
	            default: 'bottom'
	        },
	        backgroundColor: {
	            type: String,
	            default: '#FFFFFF'
	        },
	        height: {
	            type: [Number, String],
	            default: 840
	        },
	        width: {
	            type: [Number, String],
	            default: 750
	        }
	    },
	    computed: {
	        isNeedShow: function isNeedShow() {
	            var _this = this;

	            setTimeout(function () {
	                _this.appearPopup(_this.show);
	            }, 50);
	            return this.show;
	        },
	        popupHeight: function popupHeight() {
	            this.appearPopup(this.show, 150);
	            return this.height;
	        },
	        popupStyle: function popupStyle() {
	            var pos = this.pos,
	                width = this.width,
	                height = this.height,
	                backgroundColor = this.backgroundColor;

	            var style = {
	                width: width + 'px',
	                backgroundColor: backgroundColor
	            };
	            if (pos == "top") {
	                style = Object.assign(style, {
	                    top: -height + 'px',
	                    height: height + 'px'
	                });
	            }
	            if (pos == "bottom") {
	                style = Object.assign(style, {
	                    bottom: -height + 'px',
	                    height: height + 'px'
	                });
	            }
	            if (pos == "left") {
	                style = Object.assign(style, {
	                    left: -width + 'px'
	                });
	            }
	            if (pos == "right") {
	                style = Object.assign(style, {
	                    right: -width + 'px'
	                });
	            }
	            return style;
	        }
	    },
	    methods: {
	        _maskClick: function _maskClick() {
	            this.show = false;
	            this.appearPopup(false);
	        },
	        appearPopup: function appearPopup(bool) {
	            var _this2 = this;

	            var popupEl = this.$refs['popupBox'];
	            if (!popupEl) {
	                return;
	            }
	            animation.transition(popupEl, {
	                styles: {
	                    transform: this.getTransform(this.pos, this.width, this.height, !bool)
	                },
	                duration: 300,
	                delay: 0
	            }, function () {
	                if (!bool) {
	                    _this2.$emit('maskClick', { pos: _this2.pos });
	                }
	            });
	        },
	        getTransform: function getTransform(pos, width, height, bool) {
	            var _size = pos === 'top' || pos === 'bottom' ? height : width;
	            var _transform = void 0;
	            bool && (_size = 0);
	            switch (pos) {
	                case 'top':
	                    _transform = 'translateY(' + _size + 'px)';
	                    break;
	                case 'bottom':
	                    _transform = 'translateY(-' + _size + 'px)';
	                    break;
	                case 'left':
	                    _transform = 'translateX(' + _size + 'px)';
	                    break;
	                case 'right':
	                    _transform = 'translateX(-' + _size + 'px)';
	                    break;
	            }
	            return _transform;
	        }
	    }
	};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.show) ? _c('bui-mask', {
	    on: {
	      "click": _vm._maskClick
	    }
	  }) : _vm._e(), (_vm.show) ? _c('div', {
	    ref: "popupBox",
	    class: ['bui-popup', _vm.pos],
	    style: _vm.popupStyle,
	    attrs: {
	      "height": _vm.popupHeight,
	      "hack": _vm.isNeedShow
	    }
	  }, [_vm._t("default")], 2) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(132)
	)

	/* script */
	__vue_exports__ = __webpack_require__(133)

	/* template */
	var __vue_template__ = __webpack_require__(134)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-number-input.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e54bea6a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 132 */
/***/ (function(module, exports) {

	module.exports = {
	  "number-input": {
	    "flexDirection": "row"
	  },
	  "number-control": {
	    "backgroundColor": "#f5f5f5",
	    "borderRadius": 10,
	    "justifyContent": "center",
	    "alignItems": "center"
	  }
	}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    data: function data() {
	        return {};
	    },

	    props: {
	        value: {
	            type: Number,
	            default: 1
	        },
	        step: {
	            type: Number,
	            default: 1
	        },
	        controlSize: {
	            default: 70
	        },
	        min: {
	            type: Number,
	            default: 0
	        },
	        max: {
	            type: Number,
	            default: 100
	        }
	    },
	    computed: {
	        inputStyle: function inputStyle() {
	            var extraWidth = 20;
	            var digitWidth = 20;
	            return {
	                // TODO: 数字的宽度？
	                width: digitWidth * this.value.toString().length + extraWidth,
	                "margin-left": digitWidth,
	                "margin-right": digitWidth - extraWidth
	            };
	        },
	        controlStyle: function controlStyle() {
	            return {
	                width: this.controlSize,
	                height: this.controlSize,
	                "line-height": this.controlSize
	            };
	        }
	    },
	    watch: {
	        value: function value(newValue) {
	            this.$emit('input', Number(newValue));
	            this.$emit("change", this.value);
	        }
	    },
	    methods: {
	        minusClicked: function minusClicked() {
	            if (this.value <= Number(this.min)) return;
	            this.value = Number(this.value) - Number(this.step);
	        },
	        plusClicked: function plusClicked() {
	            if (this.value >= Number(this.max)) return;
	            this.value = Number(this.value) + Number(this.step);
	        }
	    }
	};

/***/ }),
/* 134 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["number-input"]
	  }, [_c('bui-icon', {
	    staticClass: ["number-control"],
	    style: _vm.controlStyle,
	    attrs: {
	      "name": "ion-minus",
	      "size": "35px"
	    },
	    on: {
	      "click": _vm.minusClicked
	    }
	  }), _c('input', {
	    style: _vm.inputStyle,
	    attrs: {
	      "type": "number",
	      "disabled": "true",
	      "value": (_vm.value)
	    },
	    on: {
	      "input": function($event) {
	        _vm.value = $event.target.attr.value
	      }
	    }
	  }), _c('bui-icon', {
	    staticClass: ["number-control"],
	    style: _vm.controlStyle,
	    attrs: {
	      "name": "ion-plus",
	      "size": "35px"
	    },
	    on: {
	      "click": _vm.plusClicked
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(136)
	)

	/* script */
	__vue_exports__ = __webpack_require__(137)

	/* template */
	var __vue_template__ = __webpack_require__(142)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-richcell.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-652b0543"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 136 */
/***/ (function(module, exports) {

	module.exports = {
	  "rich-cell": {
	    "alignItems": "center",
	    "flexDirection": "row",
	    "flexWrap": "wrap"
	  }
	}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {
	        "bui-richcell-text": __webpack_require__(138)
	    },
	    props: {
	        width: {
	            type: [String, Number],
	            default: 750
	        },
	        content: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        hasTextMargin: {
	            type: Boolean,
	            default: true
	        }
	    },
	    methods: {
	        _click: function _click(e, obj) {
	            this.$emit("click", e, obj);
	        }
	    },
	    data: function data() {
	        return {};
	    }
	};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(139)
	)

	/* script */
	__vue_exports__ = __webpack_require__(140)

	/* template */
	var __vue_template__ = __webpack_require__(141)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\bui-weex\\src\\components\\bui-richcell-text.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e68086b2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 139 */
/***/ (function(module, exports) {

	module.exports = {
	  "text": {
	    "fontSize": 24,
	    "color": "#3d3d3d"
	  },
	  "black": {
	    "color": "#3D3D3D"
	  },
	  "yellow": {
	    "color": "#EE9900"
	  },
	  "blue": {
	    "color": "#30A0FF"
	  },
	  "gray": {
	    "color": "#A5A5A5"
	  },
	  "red": {
	    "color": "#FF5000"
	  },
	  "margin-text": {
	    "marginRight": 6
	  }
	}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//

	module.exports = {
	    props: {
	        textValue: {
	            type: String,
	            default: ''
	        },
	        textTheme: {
	            type: String,
	            default: 'gray'
	        },
	        textStyle: {
	            type: Object,
	            default: function _default() {
	                return {};
	            }
	        },
	        hasTextMargin: {
	            type: Boolean,
	            default: true
	        }
	    },
	    computed: {
	        themeStyle: function themeStyle() {
	            var style = {};
	            var textStyle = this.textStyle;
	            if (textStyle && textStyle.fontSize) {
	                style = Object.assign(style, { fontSize: textStyle.fontSize + 'px', height: textStyle.fontSize * 1.2 + 'px' });
	            }
	            if (textStyle && textStyle.color) {
	                style = Object.assign(style, { color: textStyle.color });
	            }
	            style = Object.assign(style, this.textStyle);
	            return style;
	        }
	    },
	    methods: {
	        _click: function _click(e) {
	            this.$emit("click", e);
	        }
	    }
	};

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('text', {
	    class: ['text', _vm.textTheme, _vm.hasTextMargin ? 'margin-text' : ''],
	    style: _vm.themeStyle,
	    on: {
	      "click": _vm._click
	    }
	  }, [_vm._v(_vm._s(_vm.textValue))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.content.length != 0) ? _c('div', {
	    staticClass: ["rich-cell"],
	    style: {
	      width: _vm.width
	    }
	  }, _vm._l((_vm.content), function(v) {
	    return _c('div', [(v.type == 'text' && v.value) ? _c('bui-richcell-text', {
	      attrs: {
	        "textValue": v.value,
	        "textStyle": v.style,
	        "hasTextMargin": _vm.hasTextMargin,
	        "textTheme": v.theme
	      },
	      on: {
	        "click": function($event) {
	          _vm._click($event, v)
	        }
	      }
	    }) : _vm._e(), (v.type == 'icon' && v.icon) ? _c('bui-icon', {
	      attrs: {
	        "name": v.icon,
	        "color": v.color,
	        "size": v.size
	      },
	      on: {
	        "click": function($event) {
	          _vm._click($event, v)
	        }
	      }
	    }) : _vm._e(), (v.type == 'image' && v.src) ? _c('bui-image', {
	      attrs: {
	        "src": v.src,
	        "width": v.width,
	        "height": v.height
	      },
	      on: {
	        "click": function($event) {
	          _vm._click($event, v)
	        }
	      }
	    }) : _vm._e()], 1)
	  })) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var globalEvent = weex.requireModule('globalEvent');
	exports.default = {
	    created: function created() {
	        var _this = this;

	        this.globalEvent = globalEvent;
	        this.globalEvent.addEventListener("androidback", function (e) {
	            _this.router.back();
	        });
	    },

	    methods: {}
	};

/***/ }),
/* 144 */,
/* 145 */
/***/ (function(module, exports) {

	module.exports = {
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-fluid": {
	    "flexWrap": "wrap"
	  },
	  "center": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "column-center-top": {
	    "alignItems": "center"
	  },
	  "column-center-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "column-center-left": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "column-center-right": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "column-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "column-right-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "column-left-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "column-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "row-space-between": {
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "row-center-top": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "row-center-bottom": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "row-center-left": {
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "row-center-right": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "row-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "row-right-top": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "row-left-bottom": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "row-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "span1": {
	    "flex": 1
	  },
	  "span2": {
	    "flex": 2
	  },
	  "span3": {
	    "flex": 3
	  },
	  "span4": {
	    "flex": 4
	  },
	  "span5": {
	    "flex": 5
	  },
	  "span6": {
	    "flex": 6
	  },
	  "span7": {
	    "flex": 7
	  },
	  "span8": {
	    "flex": 8
	  },
	  "span9": {
	    "flex": 9
	  },
	  "span10": {
	    "flex": 10
	  },
	  "span11": {
	    "flex": 11
	  },
	  "span12": {
	    "flex": 12
	  },
	  "flex1": {
	    "flex": 1
	  },
	  "flex2": {
	    "flex": 2
	  },
	  "flex3": {
	    "flex": 3
	  },
	  "flex4": {
	    "flex": 4
	  },
	  "flex5": {
	    "flex": 5
	  },
	  "flex6": {
	    "flex": 6
	  },
	  "flex7": {
	    "flex": 7
	  },
	  "flex8": {
	    "flex": 8
	  },
	  "flex9": {
	    "flex": 9
	  },
	  "flex10": {
	    "flex": 10
	  },
	  "flex11": {
	    "flex": 11
	  },
	  "flex12": {
	    "flex": 12
	  },
	  "p-r": {
	    "position": "relative"
	  },
	  "p-a": {
	    "position": "absolute"
	  },
	  "badges": {
	    "backgroundColor": "#ff4e24",
	    "width": 50,
	    "height": 40,
	    "borderRadius": 30,
	    "textAlign": "center",
	    "color": "#ffffff",
	    "paddingTop": 7,
	    "fontSize": 24
	  },
	  "large-badges": {
	    "backgroundColor": "#ff4e24",
	    "width": 70,
	    "height": 40,
	    "borderRadius": 30,
	    "textAlign": "center",
	    "color": "#ffffff",
	    "paddingTop": 7
	  },
	  "bui-form-label": {
	    "width": 200,
	    "fontSize": 35,
	    "color": "#999999",
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "bui-form-input": {
	    "flex": 1,
	    "fontSize": 35,
	    "height": 80
	  },
	  "bui-form-switch": {
	    "position": "relative",
	    "right": 0,
	    "backgroundColor": "#FF0000"
	  },
	  "bui-list": {
	    "flex": 1
	  },
	  "bui-cell": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 100,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d7dde4",
	    "borderBottomStyle": "solid",
	    "backgroundColor:active": "#f5f5f5"
	  },
	  "bui-cell-large": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 120,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d7dde4",
	    "borderBottomStyle": "solid",
	    "backgroundColor:active": "#f5f5f5"
	  },
	  "bui-cell-xlarge": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 140,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d7dde4",
	    "borderBottomStyle": "solid",
	    "backgroundColor:active": "#f5f5f5"
	  },
	  "bui-list-left": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "paddingLeft": 20
	  },
	  "bui-list-main": {
	    "paddingLeft": 20,
	    "flex": 1,
	    "justifyContent": "center"
	  },
	  "bui-list-right": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "paddingRight": 20
	  },
	  "bui-list-title": {
	    "fontSize": 34,
	    "color": "#464c5b",
	    "textOverflow": "ellipsis",
	    "lines": 1
	  },
	  "bui-list-subtitle": {
	    "fontSize": 30,
	    "color": "#9ea7b4",
	    "textOverflow": "ellipsis",
	    "lines": 1
	  },
	  "bui-list-thumb": {
	    "width": 80,
	    "height": 80
	  },
	  "bui-list-action": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 300
	  },
	  "bui-loading": {
	    "width": 750,
	    "height": 150,
	    "flexDirection": "column",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "bui-refresh": {
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "width": 750,
	    "height": 100,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "bui-loading-indicator": {
	    "fontSize": 30,
	    "textAlign": "center",
	    "color": "#9ea7b4"
	  },
	  "bui-indicator": {
	    "height": 60,
	    "width": 60,
	    "color": "#9ea7b4"
	  },
	  "h1": {
	    "fontSize": 80,
	    "lineHeight": 120,
	    "color": "#464c5b"
	  },
	  "h2": {
	    "fontSize": 60,
	    "lineHeight": 100,
	    "color": "#464c5b"
	  },
	  "h3": {
	    "fontSize": 45,
	    "lineHeight": 60,
	    "color": "#464c5b"
	  },
	  "h4": {
	    "fontSize": 32,
	    "lineHeight": 45,
	    "color": "#464c5b"
	  },
	  "h5": {
	    "fontSize": 28,
	    "lineHeight": 40,
	    "color": "#464c5b"
	  }
	}

/***/ }),
/* 146 */
/***/ (function(module, exports) {

	module.exports = {
	  "slider": {
	    "flex": 1
	  },
	  "slider-item": {
	    "width": 750,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "g-flex-row": {
	    "display": "flex",
	    "flexDirection": "row"
	  }
	}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _home = __webpack_require__(148);

	var _home2 = _interopRequireDefault(_home);

	var _mixins = __webpack_require__(2);

	var _mixins2 = _interopRequireDefault(_mixins);

	var _pageMixins = __webpack_require__(143);

	var _pageMixins2 = _interopRequireDefault(_pageMixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//    import buiweex from "bui-weex";
	exports.default = {
	    mixins: [_mixins2.default, _pageMixins2.default],
	    data: function data() {
	        return {
	            backTimestamp: 0,
	            state: '----',
	            rightItem: {
	                icon: 'ion-ios-search-strong',
	                text: '更多'
	            },
	            currentTab: 0,
	            tabItems: [{
	                title: "首页",
	                icon: "ion-home"
	            }, {
	                icon: "ion-planet",
	                title: "专题"
	            }, {
	                icon: "ion-ios-cart",
	                title: "我的"
	            }]
	        };
	    },
	    created: function created() {
	        var _this = this;

	        this.storage.getItem('name', function (event) {
	            console.log('get value:', event.data);
	            _this.state = 'value: ' + event.data;
	        });

	        this.globalEvent.removeEventListener("androidback");
	        this.globalEvent.addEventListener("androidback", function (e) {
	            if (new Date().getTime() - _this.backTimestamp > 2000) {
	                _this.modal.toast({
	                    message: '再按一次退出',
	                    duration: 0.3
	                });
	                _this.backTimestamp = new Date().getTime();
	            } else {
	                _this.router.back();
	            }
	        });
	        //检测升级
	        this.nativeAction('/provider/upgrade');
	    },

	    components: {
	        //            "bui-tabbar": buiweex.buiTabbar,
	        //            "bui-tabbar-item": buiweex.buiTabbarItem,
	        //            'bui-header': buiweex.buiHeader,
	        //            'bui-icon': buiweex.buiIcon,
	        //            'bui-button': buiweex.buiButton,
	        //            'bui-image': buiweex.buiImage,
	        'home': _home2.default
	    },
	    methods: {
	        search: function search() {
	            this.router.push("/search");
	        },
	        share: function share() {
	            this.nativeAction('/provider/share');
	        },
	        onItemChange: function onItemChange(index) {},
	        onSliderChange: function onSliderChange(e) {
	            var index = e.index;
	            this.currentTab = index;
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(149)
	)
	__vue_styles__.push(__webpack_require__(150)
	)

	/* script */
	__vue_exports__ = __webpack_require__(151)

	/* template */
	var __vue_template__ = __webpack_require__(373)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\src\\components\\home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7d57bf02"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 149 */
/***/ (function(module, exports) {

	module.exports = {
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "flex-column": {
	    "flexDirection": "column"
	  },
	  "flex-fluid": {
	    "flexWrap": "wrap"
	  },
	  "center": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "column-center-top": {
	    "alignItems": "center"
	  },
	  "column-center-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "column-center-left": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "column-center-right": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "column-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "column-right-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "column-left-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "column-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "row-space-between": {
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "row-center-top": {
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  "row-center-bottom": {
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "row-center-left": {
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "row-center-right": {
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "row-left-top": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "row-right-top": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-start"
	  },
	  "row-left-bottom": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "row-right-bottom": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "span1": {
	    "flex": 1
	  },
	  "span2": {
	    "flex": 2
	  },
	  "span3": {
	    "flex": 3
	  },
	  "span4": {
	    "flex": 4
	  },
	  "span5": {
	    "flex": 5
	  },
	  "span6": {
	    "flex": 6
	  },
	  "span7": {
	    "flex": 7
	  },
	  "span8": {
	    "flex": 8
	  },
	  "span9": {
	    "flex": 9
	  },
	  "span10": {
	    "flex": 10
	  },
	  "span11": {
	    "flex": 11
	  },
	  "span12": {
	    "flex": 12
	  },
	  "flex1": {
	    "flex": 1
	  },
	  "flex2": {
	    "flex": 2
	  },
	  "flex3": {
	    "flex": 3
	  },
	  "flex4": {
	    "flex": 4
	  },
	  "flex5": {
	    "flex": 5
	  },
	  "flex6": {
	    "flex": 6
	  },
	  "flex7": {
	    "flex": 7
	  },
	  "flex8": {
	    "flex": 8
	  },
	  "flex9": {
	    "flex": 9
	  },
	  "flex10": {
	    "flex": 10
	  },
	  "flex11": {
	    "flex": 11
	  },
	  "flex12": {
	    "flex": 12
	  },
	  "p-r": {
	    "position": "relative"
	  },
	  "p-a": {
	    "position": "absolute"
	  },
	  "badges": {
	    "backgroundColor": "#ff4e24",
	    "width": 50,
	    "height": 40,
	    "borderRadius": 30,
	    "textAlign": "center",
	    "color": "#ffffff",
	    "paddingTop": 7,
	    "fontSize": 24
	  },
	  "large-badges": {
	    "backgroundColor": "#ff4e24",
	    "width": 70,
	    "height": 40,
	    "borderRadius": 30,
	    "textAlign": "center",
	    "color": "#ffffff",
	    "paddingTop": 7
	  },
	  "bui-form-label": {
	    "width": 200,
	    "fontSize": 35,
	    "color": "#999999",
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "bui-form-input": {
	    "flex": 1,
	    "fontSize": 35,
	    "height": 80
	  },
	  "bui-form-switch": {
	    "position": "relative",
	    "right": 0,
	    "backgroundColor": "#FF0000"
	  },
	  "bui-list": {
	    "flex": 1
	  },
	  "bui-cell": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 100,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d7dde4",
	    "borderBottomStyle": "solid",
	    "backgroundColor:active": "#f5f5f5"
	  },
	  "bui-cell-large": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 120,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d7dde4",
	    "borderBottomStyle": "solid",
	    "backgroundColor:active": "#f5f5f5"
	  },
	  "bui-cell-xlarge": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 140,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d7dde4",
	    "borderBottomStyle": "solid",
	    "backgroundColor:active": "#f5f5f5"
	  },
	  "bui-list-left": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "paddingLeft": 20
	  },
	  "bui-list-main": {
	    "paddingLeft": 20,
	    "flex": 1,
	    "justifyContent": "center"
	  },
	  "bui-list-right": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "paddingRight": 20
	  },
	  "bui-list-title": {
	    "fontSize": 34,
	    "color": "#464c5b",
	    "textOverflow": "ellipsis",
	    "lines": 1
	  },
	  "bui-list-subtitle": {
	    "fontSize": 30,
	    "color": "#9ea7b4",
	    "textOverflow": "ellipsis",
	    "lines": 1
	  },
	  "bui-list-thumb": {
	    "width": 80,
	    "height": 80
	  },
	  "bui-list-action": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 300
	  },
	  "bui-loading": {
	    "width": 750,
	    "height": 150,
	    "flexDirection": "column",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "bui-refresh": {
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "width": 750,
	    "height": 100,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "bui-loading-indicator": {
	    "fontSize": 30,
	    "textAlign": "center",
	    "color": "#9ea7b4"
	  },
	  "bui-indicator": {
	    "height": 60,
	    "width": 60,
	    "color": "#9ea7b4"
	  },
	  "h1": {
	    "fontSize": 80,
	    "lineHeight": 120,
	    "color": "#464c5b"
	  },
	  "h2": {
	    "fontSize": 60,
	    "lineHeight": 100,
	    "color": "#464c5b"
	  },
	  "h3": {
	    "fontSize": 45,
	    "lineHeight": 60,
	    "color": "#464c5b"
	  },
	  "h4": {
	    "fontSize": 32,
	    "lineHeight": 45,
	    "color": "#464c5b"
	  },
	  "h5": {
	    "fontSize": 28,
	    "lineHeight": 40,
	    "color": "#464c5b"
	  }
	}

/***/ }),
/* 150 */
/***/ (function(module, exports) {

	module.exports = {
	  "g-flex-row": {
	    "display": "flex",
	    "flexDirection": "row"
	  },
	  "g-flex-column": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "g-flayer": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "g-flex-center": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "g-flex-full": {
	    "flex": 1
	  },
	  "slider": {
	    "visibility": "visible"
	  },
	  "slider-item": {
	    "width": 750,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "hidden": {
	    "visibility": "hidden",
	    "height": 1
	  }
	}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _mixins = __webpack_require__(2);

	var _mixins2 = _interopRequireDefault(_mixins);

	var _movieList = __webpack_require__(152);

	var _movieList2 = _interopRequireDefault(_movieList);

	var _loading = __webpack_require__(159);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//    var buiweex = require("bui-weex");
	module.exports = {
	    mixins: [_mixins2.default],
	    data: function data() {
	        return {
	            rootClass: 'slide',
	            leftItem: {
	                icon: 'ion-chevron-left'
	            },
	            currentTab: -1,
	            tabItems: [{
	                title: "电影"
	            }, {
	                title: "电视剧"
	            }, {
	                title: "综艺"
	            }, {
	                title: "动漫"
	            }]
	        };
	    },
	    components: {
	        //            "bui-tabbar": buiweex.buiTabbar,
	        //            "bui-tabbar-item": buiweex.buiTabbarItem,
	        //            'bui-header': buiweex.buiHeader,
	        //            'bui-icon': buiweex.buiIcon,
	        //            'bui-button': buiweex.buiButton,
	        //            'bui-image': buiweex.buiImage,
	        'movie-list': _movieList2.default, Loadingaa: _loading2.default
	    },
	    created: function created() {
	        var _this = this;

	        this.log('home created done');
	        setTimeout(function () {
	            _this.currentTab = 0;
	        }, 500);
	    },


	    computed: {
	        classNameEmpty: function classNameEmpty() {
	            return this.currentTab == -1 ? ['slider'] : ['hidden'];
	        },
	        className0: function className0() {
	            return this.currentTab == 0 ? ['slider'] : ['hidden'];
	        },
	        className1: function className1() {
	            return this.currentTab == 1 ? ['slider'] : ['hidden'];
	        },
	        className2: function className2() {
	            return this.currentTab == 2 ? ['slider'] : ['hidden'];
	        },
	        className3: function className3() {
	            return this.currentTab == 3 ? ['slider'] : ['hidden'];
	        }
	    },
	    methods: {
	        back: function back() {
	            this.$pop();
	        },
	        onItemChange: function onItemChange(index) {
	            this.currentTab = index;
	        },
	        onSliderChange: function onSliderChange(e) {
	            this.currentTab = e.index;
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(153)
	)

	/* script */
	__vue_exports__ = __webpack_require__(154)

	/* template */
	var __vue_template__ = __webpack_require__(372)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\src\\components\\movie-list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-b47a8e8a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 153 */
/***/ (function(module, exports) {

	module.exports = {
	  "g-flex-row": {
	    "display": "flex",
	    "flexDirection": "row"
	  },
	  "g-flex-column": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "g-flayer": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "g-flex-center": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "g-flex-full": {
	    "flex": 1
	  },
	  "hidden": {
	    "visibility": "hidden",
	    "height": 1
	  },
	  "visible": {
	    "visibility": "visible"
	  },
	  "c-red": {
	    "backgroundColor": "#FF66ff"
	  }
	}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mixins = __webpack_require__(2);

	var _mixins2 = _interopRequireDefault(_mixins);

	var _vuex = __webpack_require__(6);

	var _movie = __webpack_require__(155);

	var _movie2 = _interopRequireDefault(_movie);

	var _loading = __webpack_require__(159);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import {buiImageSlider} from 'bui-weex';
	//Vue.mixin(mixins)
	//var buiweex = require("bui-weex");
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    mixins: [_mixins2.default],
	    components: {
	        Movie: _movie2.default, Loadingaa: _loading2.default
	        //         "bui-tabbar": buiweex.buiTabbar
	    },
	    props: {
	        videoType: {
	            type: String,
	            required: true
	        }
	    },
	    data: function data() {
	        return {
	            loading: 1,
	            myPage: 1
	        };
	    },
	    created: function created() {
	        var self = this;
	        //Vue.set(this.store.state.users, 'aaa', 'testing');
	        this.fetchList({ type: this.videoType, page: this.myPage });
	        //监听一个getter
	        //            this.store.watch(
	        //                function (state) {
	        //                    return self.store.getters.getListData[this.videoType];
	        //                },
	        //                function (newData) {
	        //                    self.loading = false
	        //                },
	        //                {
	        //                    deep: true //add this if u need to watch object properties change etc.
	        //                }
	        //            );
	        this.log('movie-list created done');
	    },

	    computed: {
	        test: function test() {
	            var key = "type" + this.videoType;
	            if (this.loading == 1 && this.store.state[key].length > 0) {
	                this.loading = 0;
	            }
	            return this.store.state[key];
	        },
	        classNameEmpty: function classNameEmpty() {
	            return this.loading == 1 ? ['visible'] : ['hidden'];
	        },
	        className0: function className0() {
	            return this.loading == 0 ? ['visible'] : ['hidden'];
	        }
	    },
	    watch: {
	        // 通过这种语法来watch就行，文档里有。。。看需求，还可以直接watch data，使用deep:true来深度观察
	        "loading": {
	            handler: function handler(val, oldVal) {},

	            // 深度观察
	            deep: true
	        }
	        //            "test": {
	        //                handler(val, oldVal) {
	        //                    console.log('dddddd')
	        //                },
	        //                // 深度观察
	        //                deep: true
	        //            },
	        //            "getListData": {
	        //                handler(val, oldVal) {
	        //                    console.log('dddddd')
	        //                },
	        //                // 深度观察
	        //                deep: true
	        //            }
	    },
	    methods: Object.assign({
	        loadMoreStories: function loadMoreStories() {
	            this.myPage = this.myPage + 1;
	            this.fetchList({ type: this.videoType, page: this.myPage });
	        }
	    }, (0, _vuex.mapActions)(['fetchList']))
	};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(156)
	)

	/* script */
	__vue_exports__ = __webpack_require__(157)

	/* template */
	var __vue_template__ = __webpack_require__(158)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\src\\components\\movie.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3457ea40"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 156 */
/***/ (function(module, exports) {

	module.exports = {
	  "cell-item": {
	    "height": 200
	  },
	  "title": {
	    "fontSize": 32,
	    "fontWeight": "bold",
	    "color": "#FF6600"
	  },
	  "g-flex-row": {
	    "display": "flex",
	    "flexDirection": "row"
	  },
	  "g-flex-column": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  "g-flayer": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "g-flex-center": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "marginBottom": 15
	  },
	  "padding": {
	    "padding": 10
	  },
	  "g-flex-full": {
	    "flex": 1
	  },
	  "root": {
	    "backgroundColor": "#E7E8EA"
	  },
	  "list": {
	    "width": 750,
	    "backgroundColor": "#EFEFEF"
	  },
	  "row": {
	    "flexDirection": "row"
	  },
	  "tab-cell": {
	    "backgroundColor": "#f51438"
	  },
	  "tab": {
	    "height": 120,
	    "width": 150,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "tab-icon": {
	    "width": 45,
	    "height": 45
	  },
	  "tab-title": {
	    "fontSize": 28,
	    "color": "#FFFFFF",
	    "marginTop": 10
	  },
	  "banner-image": {
	    "width": 750,
	    "height": 235
	  },
	  "app-cell": {
	    "backgroundColor": "#FFFFFF"
	  },
	  "card-message": {
	    "marginTop": 10,
	    "marginBottom": 10,
	    "marginRight": 10
	  },
	  "app-title": {
	    "width": 180,
	    "fontSize": 30,
	    "textAlign": "center",
	    "paddingTop": 15,
	    "color": "#999999"
	  },
	  "app-icon": {
	    "width": 140,
	    "height": 140,
	    "marginLeft": 20
	  },
	  "card": {
	    "width": 740,
	    "marginLeft": 5,
	    "marginTop": 5,
	    "marginBottom": 0,
	    "marginRight": 5,
	    "backgroundColor": "#FFFFFF",
	    "borderRadius": 0,
	    "paddingRight": 5
	  },
	  "card-banner": {
	    "width": 222,
	    "height": 60
	  },
	  "card-side": {
	    "padding": 10
	  },
	  "card-poster": {
	    "width": 230,
	    "height": 300
	  },
	  "card-btn-bottom": {
	    "backgroundColor": "#3c3f41",
	    "width": 230,
	    "height": 40,
	    "marginTop": -40,
	    "justifyContent": "center"
	  },
	  "card-title": {
	    "fontSize": 26,
	    "color": "#666666",
	    "marginTop": 10,
	    "maxWidth": 400,
	    "paddingBottom": 6
	  },
	  "card-line": {
	    "alignItems": "center",
	    "paddingTop": 5,
	    "paddingBottom": 5
	  },
	  "card-icon": {
	    "width": 36,
	    "height": 36,
	    "marginRight": 8
	  },
	  "card-subtitle": {
	    "fontSize": 28,
	    "color": "#07152a"
	  },
	  "card-progress": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "width": 100,
	    "height": 30,
	    "backgroundColor": "#FEC1C1",
	    "borderRadius": 20,
	    "marginTop": 10,
	    "marginBottom": 10
	  },
	  "card-progress-inner": {
	    "position": "absolute",
	    "height": 30,
	    "left": 0,
	    "borderRadius": 20,
	    "backgroundColor": "#ff3c32"
	  },
	  "card-got": {
	    "position": "absolute",
	    "left": 8,
	    "lineHeight": 30,
	    "color": "#FFFFFF",
	    "fontSize": 22
	  },
	  "card-remain": {
	    "position": "absolute",
	    "right": 8,
	    "lineHeight": 30,
	    "color": "#FFFFFF",
	    "fontSize": 22
	  },
	  "card-info": {
	    "width": 400,
	    "flexDirection": "row",
	    "alignItems": "flex-end"
	  },
	  "card-price": {
	    "fontSize": 52,
	    "color": "#ff3c32",
	    "marginBottom": -10,
	    "marginTop": 10,
	    "marginRight": 8
	  },
	  "card-sale-price": {
	    "fontSize": 28,
	    "color": "#999999",
	    "textDecoration": "line-through"
	  },
	  "card-btn": {
	    "backgroundColor": "#ff5d62",
	    "borderRadius": 8,
	    "width": 200,
	    "height": 40,
	    "marginTop": 5,
	    "marginLeft": 20,
	    "justifyContent": "center"
	  },
	  "card-btn-text": {
	    "color": "#FFFFFF",
	    "fontSize": 26,
	    "textAlign": "center",
	    "lines": 1
	  },
	  "floor": {
	    "marginBottom": 15,
	    "backgroundColor": "#FFFFFF"
	  },
	  "floor-title": {
	    "fontSize": 40,
	    "textAlign": "center",
	    "paddingTop": 35,
	    "paddingBottom": 25
	  },
	  "floor-desc": {
	    "lines": 2,
	    "color": "#999999",
	    "fontSize": 30,
	    "paddingLeft": 30,
	    "paddingRight": 30
	  },
	  "floor-image-box": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "marginTop": 20
	  },
	  "floor-image": {
	    "width": 245,
	    "height": 245
	  },
	  "floor-comment": {
	    "color": "#52bfe6",
	    "fontSize": 32,
	    "textAlign": "right",
	    "paddingRight": 50,
	    "marginTop": 25,
	    "marginBottom": 20
	  }
	}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mixins = __webpack_require__(2);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_mixins2.default],
	    props: {
	        data: {
	            type: Object,
	            required: true
	        },
	        'no-comment': {
	            type: [String, Boolean],
	            default: false
	        }
	    }, created: function created() {},

	    methods: {
	        test2: function test2(url) {
	            this.nativeAction('/activity/movieDetail?url=' + url);
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 158 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["g-flex-row"]
	  }, [_c('div', {
	    staticClass: ["g-flex-center"],
	    on: {
	      "click": function($event) {
	        _vm.test2(_vm.data.one.url)
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["card-poster"],
	    attrs: {
	      "src": _vm.data.one.img,
	      "placeholder": _vm.data.one.placeholder
	    }
	  }), _c('div', {
	    staticClass: ["card-btn", "g-flayer"]
	  }, [_c('text', {
	    staticClass: ["card-btn-text"]
	  }, [_vm._v(_vm._s(_vm.data.one.status))])]), _c('div', {
	    staticClass: ["card-btn-bottom"]
	  }, [_c('text', {
	    staticClass: ["card-btn-text"]
	  }, [_vm._v(_vm._s(_vm.data.one.title))])])]), _c('div', {
	    staticClass: ["g-flex-center"],
	    on: {
	      "click": function($event) {
	        _vm.test2(_vm.data.two.url)
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["card-poster"],
	    attrs: {
	      "src": _vm.data.two.img,
	      "placeholder": _vm.data.one.placeholder
	    }
	  }), _c('div', {
	    staticClass: ["card-btn", "g-flayer"]
	  }, [_c('text', {
	    staticClass: ["card-btn-text"]
	  }, [_vm._v(_vm._s(_vm.data.two.status))])]), _c('div', {
	    staticClass: ["card-btn-bottom"]
	  }, [_c('text', {
	    staticClass: ["card-btn-text"]
	  }, [_vm._v(_vm._s(_vm.data.two.title))])])]), _c('div', {
	    staticClass: ["g-flex-center"],
	    on: {
	      "click": function($event) {
	        _vm.test2(_vm.data.three.url)
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["card-poster"],
	    attrs: {
	      "src": _vm.data.three.img,
	      "placeholder": _vm.data.one.placeholder
	    }
	  }), _c('div', {
	    staticClass: ["card-btn", "g-flayer"]
	  }, [_c('text', {
	    staticClass: ["card-btn-text"]
	  }, [_vm._v(_vm._s(_vm.data.three.status))])]), _c('div', {
	    staticClass: ["card-btn-bottom"]
	  }, [_c('text', {
	    staticClass: ["card-btn-text"]
	  }, [_vm._v(_vm._s(_vm.data.three.title))])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(160)
	)

	/* script */
	__vue_exports__ = __webpack_require__(161)

	/* template */
	var __vue_template__ = __webpack_require__(371)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\src\\components\\loading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-100b2f68"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 160 */
/***/ (function(module, exports) {

	module.exports = {
	  "g-flex-row": {
	    "flexDirection": "row"
	  },
	  "g-flex-column": {
	    "flexDirection": "column"
	  },
	  "g-flayer": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "g-flex-center": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "v-flex-full": {
	    "flex": 1
	  },
	  "hidden": {
	    "visibility": "hidden",
	    "height": 1
	  },
	  "visible": {
	    "visibility": "visible"
	  },
	  "c-red": {
	    "backgroundColor": "#FF66ff"
	  }
	}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _weexUi = __webpack_require__(162);

	var _mixins = __webpack_require__(2);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    mixins: [_mixins2.default],
	    components: { WxcLoading: _weexUi.WxcLoading, WxcPartLoading: _weexUi.WxcPartLoading },
	    data: function data() {
	        return {
	            isShow: true,
	            width: 80,
	            height: 80,
	            marginTopData: {
	                marginTop: '0px'
	            }
	        };
	    },

	    computed: {
	        margintTop: function margintTop() {
	            this.marginTopData.marginTop = this.heightCenter() + 'px';
	            return this.marginTopData;
	        }
	    },
	    methods: {
	        heightCenter: function heightCenter() {
	            var height = 750 / this.$getConfig().env.deviceWidth * this.$getConfig().env.deviceHeight;
	            return height / 3;
	        }
	    }
	};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WxcTag = exports.WxcTabPage = exports.WxcStepper = exports.WxcSliderBar = exports.WxcSlideNav = exports.WxcSimpleFlow = exports.WxcSearchbar = exports.WxcSpecialRichText = exports.WxcRichText = exports.WxcResult = exports.WxcRadio = exports.WxcProgress = exports.WxcPopup = exports.WxcPageCalendar = exports.WxcOverlay = exports.WxcNoticebar = exports.WxcLotteryRain = exports.WxcMinibar = exports.WxcMask = exports.WxcPartLoading = exports.WxcLoading = exports.WxcLightbox = exports.WxcIndexlist = exports.WxcGridSelect = exports.WxcEpSlider = exports.WxcDialog = exports.WxcCountdown = exports.WxcCheckboxList = exports.WxcCheckbox = exports.WxcCell = exports.WxcButton = undefined;

	var _wxcButton = __webpack_require__(163);

	var _wxcButton2 = _interopRequireDefault(_wxcButton);

	var _wxcCell = __webpack_require__(169);

	var _wxcCell2 = _interopRequireDefault(_wxcCell);

	var _wxcCheckbox = __webpack_require__(179);

	var _wxcCheckbox2 = _interopRequireDefault(_wxcCheckbox);

	var _wxcCheckboxList = __webpack_require__(185);

	var _wxcCheckboxList2 = _interopRequireDefault(_wxcCheckboxList);

	var _wxcCountdown = __webpack_require__(190);

	var _wxcCountdown2 = _interopRequireDefault(_wxcCountdown);

	var _wxcDialog = __webpack_require__(195);

	var _wxcDialog2 = _interopRequireDefault(_wxcDialog);

	var _wxcEpSlider = __webpack_require__(201);

	var _wxcEpSlider2 = _interopRequireDefault(_wxcEpSlider);

	var _wxcGridSelect = __webpack_require__(207);

	var _wxcGridSelect2 = _interopRequireDefault(_wxcGridSelect);

	var _wxcIndexlist = __webpack_require__(216);

	var _wxcIndexlist2 = _interopRequireDefault(_wxcIndexlist);

	var _wxcLightbox = __webpack_require__(222);

	var _wxcLightbox2 = _interopRequireDefault(_wxcLightbox);

	var _wxcLoading = __webpack_require__(238);

	var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

	var _wxcPartLoading = __webpack_require__(245);

	var _wxcPartLoading2 = _interopRequireDefault(_wxcPartLoading);

	var _wxcMask = __webpack_require__(226);

	var _wxcMask2 = _interopRequireDefault(_wxcMask);

	var _wxcMinibar = __webpack_require__(249);

	var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

	var _wxcLotteryRain = __webpack_require__(255);

	var _wxcLotteryRain2 = _interopRequireDefault(_wxcLotteryRain);

	var _wxcNoticebar = __webpack_require__(268);

	var _wxcNoticebar2 = _interopRequireDefault(_wxcNoticebar);

	var _wxcOverlay = __webpack_require__(230);

	var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

	var _wxcPageCalendar = __webpack_require__(275);

	var _wxcPageCalendar2 = _interopRequireDefault(_wxcPageCalendar);

	var _wxcPopup = __webpack_require__(281);

	var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

	var _wxcProgress = __webpack_require__(286);

	var _wxcProgress2 = _interopRequireDefault(_wxcProgress);

	var _wxcRadio = __webpack_require__(291);

	var _wxcRadio2 = _interopRequireDefault(_wxcRadio);

	var _wxcResult = __webpack_require__(301);

	var _wxcResult2 = _interopRequireDefault(_wxcResult);

	var _wxcRichText = __webpack_require__(307);

	var _wxcRichText2 = _interopRequireDefault(_wxcRichText);

	var _wxcSpecialRichText = __webpack_require__(328);

	var _wxcSpecialRichText2 = _interopRequireDefault(_wxcSpecialRichText);

	var _wxcSearchbar = __webpack_require__(333);

	var _wxcSearchbar2 = _interopRequireDefault(_wxcSearchbar);

	var _wxcSimpleFlow = __webpack_require__(339);

	var _wxcSimpleFlow2 = _interopRequireDefault(_wxcSimpleFlow);

	var _wxcSlideNav = __webpack_require__(344);

	var _wxcSlideNav2 = _interopRequireDefault(_wxcSlideNav);

	var _wxcSliderBar = __webpack_require__(349);

	var _wxcSliderBar2 = _interopRequireDefault(_wxcSliderBar);

	var _wxcStepper = __webpack_require__(355);

	var _wxcStepper2 = _interopRequireDefault(_wxcStepper);

	var _wxcTabPage = __webpack_require__(360);

	var _wxcTabPage2 = _interopRequireDefault(_wxcTabPage);

	var _wxcTag = __webpack_require__(366);

	var _wxcTag2 = _interopRequireDefault(_wxcTag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.WxcButton = _wxcButton2.default;
	exports.WxcCell = _wxcCell2.default;
	exports.WxcCheckbox = _wxcCheckbox2.default;
	exports.WxcCheckboxList = _wxcCheckboxList2.default;
	exports.WxcCountdown = _wxcCountdown2.default;
	exports.WxcDialog = _wxcDialog2.default;
	exports.WxcEpSlider = _wxcEpSlider2.default;
	exports.WxcGridSelect = _wxcGridSelect2.default;
	exports.WxcIndexlist = _wxcIndexlist2.default;
	exports.WxcLightbox = _wxcLightbox2.default;
	exports.WxcLoading = _wxcLoading2.default;
	exports.WxcPartLoading = _wxcPartLoading2.default;
	exports.WxcMask = _wxcMask2.default;
	exports.WxcMinibar = _wxcMinibar2.default;
	exports.WxcLotteryRain = _wxcLotteryRain2.default;
	exports.WxcNoticebar = _wxcNoticebar2.default;
	exports.WxcOverlay = _wxcOverlay2.default;
	exports.WxcPageCalendar = _wxcPageCalendar2.default;
	exports.WxcPopup = _wxcPopup2.default;
	exports.WxcProgress = _wxcProgress2.default;
	exports.WxcRadio = _wxcRadio2.default;
	exports.WxcResult = _wxcResult2.default;
	exports.WxcRichText = _wxcRichText2.default;
	exports.WxcSpecialRichText = _wxcSpecialRichText2.default;
	exports.WxcSearchbar = _wxcSearchbar2.default;
	exports.WxcSimpleFlow = _wxcSimpleFlow2.default;
	exports.WxcSlideNav = _wxcSlideNav2.default;
	exports.WxcSliderBar = _wxcSliderBar2.default;
	exports.WxcStepper = _wxcStepper2.default;
	exports.WxcTabPage = _wxcTabPage2.default;
	exports.WxcTag = _wxcTag2.default; /**
	                                    * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	                                    * Created by Tw93 on 17/09/25
	                                    */

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(164);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(165)
	)

	/* script */
	__vue_exports__ = __webpack_require__(166)

	/* template */
	var __vue_template__ = __webpack_require__(168)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-125ceed2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 165 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-btn": {
	    "width": 702,
	    "height": 88,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 12
	  },
	  "btn-text": {
	    "textOverflow": "ellipsis",
	    "lines": 1,
	    "fontSize": 36,
	    "color": "#FFFFFF"
	  }
	}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _type = __webpack_require__(167);

	exports.default = {
	  props: {
	    text: {
	      type: String,
	      default: '确认'
	    },
	    type: {
	      type: String,
	      default: 'taobao'
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    btnStyle: Object,
	    textStyle: Object
	  },
	  computed: {
	    mrBtnStyle: function mrBtnStyle() {
	      var type = this.type,
	          disabled = this.disabled,
	          btnStyle = this.btnStyle;

	      var mrBtnStyle = Object.assign({}, _type.STYLE_MAP[type], btnStyle);
	      return disabled ? Object.assign({}, mrBtnStyle, {
	        backgroundColor: 'rgba(0, 0, 0, 0.1)',
	        borderWidth: 0
	      }) : mrBtnStyle;
	    },
	    mrTextStyle: function mrTextStyle() {
	      var type = this.type,
	          disabled = this.disabled,
	          textStyle = this.textStyle;

	      var mrTextStyle = Object.assign({}, _type.TEXT_STYLE_MAP[type], textStyle);
	      return disabled ? Object.assign({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;
	    }
	  },
	  methods: {
	    onClicked: function onClicked(e) {
	      var type = this.type,
	          disabled = this.disabled;

	      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 167 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var STYLE_MAP = exports.STYLE_MAP = {
	  taobao: {
	    backgroundColor: '#FF5000'
	  },
	  fliggy: {
	    backgroundColor: '#FFC900'
	  },
	  normal: {
	    backgroundColor: '#FFFFFF',
	    borderColor: '#A5A5A5',
	    borderWidth: '1px'
	  },
	  highlight: {
	    backgroundColor: '#FFFFFF',
	    borderColor: '#EE9900',
	    borderWidth: '1px'
	  }
	};

	var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
	  taobao: {
	    color: '#FFFFFF'
	  },
	  fliggy: {
	    color: '#3D3D3D'
	  },
	  normal: {
	    color: '#3D3D3D'
	  },
	  highlight: {
	    color: '#EE9900'
	  }
	};

/***/ }),
/* 168 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-btn"],
	    style: _vm.mrBtnStyle,
	    on: {
	      "click": _vm.onClicked
	    }
	  }, [_c('text', {
	    staticClass: ["btn-text"],
	    style: _vm.mrTextStyle
	  }, [_vm._v(_vm._s(_vm.text))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(170);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(171)
	)

	/* script */
	__vue_exports__ = __webpack_require__(172)

	/* template */
	var __vue_template__ = __webpack_require__(178)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-932f5cfc"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 171 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-cell": {
	    "height": 100,
	    "position": "relative",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "paddingLeft": 24,
	    "paddingRight": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "cell-margin": {
	    "marginBottom": 24
	  },
	  "cell-title": {
	    "flex": 1
	  },
	  "cell-indent": {
	    "paddingBottom": 30,
	    "paddingTop": 30
	  },
	  "has-desc": {
	    "paddingBottom": 18,
	    "paddingTop": 18
	  },
	  "cell-top-border": {
	    "borderTopColor": "#e2e2e2",
	    "borderTopWidth": 1
	  },
	  "cell-bottom-border": {
	    "borderBottomColor": "#e2e2e2",
	    "borderBottomWidth": 1
	  },
	  "cell-label-text": {
	    "fontSize": 30,
	    "color": "#666666",
	    "width": 188,
	    "marginRight": 10
	  },
	  "cell-arrow-icon": {
	    "width": 22,
	    "height": 22,
	    "position": "absolute",
	    "top": 41,
	    "right": 24
	  },
	  "cell-content": {
	    "color": "#333333",
	    "fontSize": 30,
	    "lineHeight": 40
	  },
	  "cell-desc-text": {
	    "color": "#999999",
	    "fontSize": 24,
	    "lineHeight": 30,
	    "marginTop": 4
	  }
	}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var icon = __webpack_require__(173);
	var Utils = __webpack_require__(174);
	module.exports = {
	  props: {
	    label: {
	      type: String,
	      default: ''
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    desc: {
	      type: String,
	      default: ''
	    },
	    link: {
	      type: String,
	      default: ''
	    },
	    hasTopBorder: {
	      type: Boolean,
	      default: false
	    },
	    hasMargin: {
	      type: Boolean,
	      default: false
	    },
	    hasBottomBorder: {
	      type: Boolean,
	      default: true
	    },
	    hasArrow: {
	      type: Boolean,
	      default: false
	    },
	    hasVerticalIndent: {
	      type: Boolean,
	      default: true
	    },
	    cellStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  data: function data() {
	    return {
	      arrowIcon: icon.arrowIcon
	    };
	  },
	  methods: {
	    cellClicked: function cellClicked(e) {
	      var link = this.link;
	      this.$emit('wxcCellDivClick', { e: e });
	      link && Utils.goToH5Page(link, true);
	    }
	  }
	};

/***/ }),
/* 173 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by Tw93 on 2016/10/29.
	 */
	module.exports = {
	  arrowIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAMFBMVEUAAAAgIyUgIyUgIyUgIyUgIyUgIyUgIyUgIyUgIyUgIyUgIyUgIyUgIyUgIyUgIyXxqNxkAAAAEHRSTlMATEYxFA4CPTgqCUMlIhsZEJGcAQAAAE5JREFUGNNjAIKLDxjgQFAewT4o6ABncwqKICQmIkkwC6oiJAyFArBKsDUKLYBzMgR3ISQKxTHZCDUIvQgzMe1CCCPchnAzwi+YfkT4HQA98hAFt122dQAAAABJRU5ErkJggg==",
	  extendIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJCAMAAAA1k+1bAAAAM1BMVEUAAACYmJiXl5eZmZmampqYmJiYmJiXl5eZmZmYmJiYmJiZmZmZmZmYmJibm5ubm5uZmZlAoLvfAAAAEHRSTlMA9fZuSmhhUfhzVziEQ0IhhORZQgAAAEJJREFUCNdFyzkSwCAMQ1Ehg9my6P6nTeF4eI3mFwJsTjNrrbn7hS2NUX4CHipxAajM6sDpUhE6o9KieOPYil96Yz7ijwK/GAbG3wAAAABJRU5ErkJggg=="
	};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by Tw93 on 2017/6/26.
	 */
	var UrlParser = __webpack_require__(175);
	var Utils = {
	  UrlParser: UrlParser,
	  appendProtocol: function appendProtocol(url) {
	    if (/^\/\//.test(url)) {
	      var bundleUrl = weex.config.bundleUrl;

	      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
	    }
	    return url;
	  },
	  encodeURLParams: function encodeURLParams(url) {
	    var parsedUrl = new UrlParser(url, true);
	    return parsedUrl.toString();
	  },
	  goToH5Page: function goToH5Page(jumpUrl) {
	    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	    var Navigator = weex.requireModule('navigator');
	    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
	    var url = Utils.appendProtocol(jumpUrlObj.toString());
	    Navigator.push({
	      url: Utils.encodeURLParams(url),
	      animated: animated
	    }, callback);
	  }
	};
	module.exports = Utils;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var required = __webpack_require__(176),
	    qs = __webpack_require__(177),
	    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
	    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

	/**
	 * These are the parse rules for the URL parser, it informs the parser
	 * about:
	 *
	 * 0. The char it Needs to parse, if it's a string it should be done using
	 *    indexOf, RegExp using exec and NaN means set as current value.
	 * 1. The property we should set when parsing this value.
	 * 2. Indication if it's backwards or forward parsing, when set as number it's
	 *    the value of extra chars that should be split off.
	 * 3. Inherit from location if non existing in the parser.
	 * 4. `toLowerCase` the resulting value.
	 */
	var rules = [['#', 'hash'], // Extract from the back.
	['?', 'query'], // Extract from the back.
	['/', 'pathname'], // Extract from the back.
	['@', 'auth', 1], // Extract from the front.
	[NaN, 'host', undefined, 1, 1], // Set left over value.
	[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
	[NaN, 'hostname', undefined, 1, 1] // Set left over.
	];

	/**
	 * These properties should not be copied or inherited from. This is only needed
	 * for all non blob URL's as a blob URL does not include a hash, only the
	 * origin.
	 *
	 * @type {Object}
	 * @private
	 */
	var ignore = { hash: 1, query: 1 };

	/**
	 * The location object differs when your code is loaded through a normal page,
	 * Worker or through a worker using a blob. And with the blobble begins the
	 * trouble as the location object will contain the URL of the blob, not the
	 * location of the page where our code is loaded in. The actual origin is
	 * encoded in the `pathname` so we can thankfully generate a good "default"
	 * location from it so we can generate proper relative URL's again.
	 *
	 * @param {Object|String} loc Optional default location object.
	 * @returns {Object} lolcation object.
	 * @api public
	 */
	function lolcation(loc) {
	  loc = loc || global.location || {};

	  var finaldestination = {},
	      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
	      key;

	  if ('blob:' === loc.protocol) {
	    finaldestination = new URL(unescape(loc.pathname), {});
	  } else if ('string' === type) {
	    finaldestination = new URL(loc, {});
	    for (key in ignore) {
	      delete finaldestination[key];
	    }
	  } else if ('object' === type) {
	    for (key in loc) {
	      if (key in ignore) continue;
	      finaldestination[key] = loc[key];
	    }

	    if (finaldestination.slashes === undefined) {
	      finaldestination.slashes = slashes.test(loc.href);
	    }
	  }

	  return finaldestination;
	}

	/**
	 * @typedef ProtocolExtract
	 * @type Object
	 * @property {String} protocol Protocol matched in the URL, in lowercase.
	 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
	 * @property {String} rest Rest of the URL that is not part of the protocol.
	 */

	/**
	 * Extract protocol information from a URL with/without double slash ("//").
	 *
	 * @param {String} address URL we want to extract from.
	 * @return {ProtocolExtract} Extracted information.
	 * @api private
	 */
	function extractProtocol(address) {
	  var match = protocolre.exec(address);

	  return {
	    protocol: match[1] ? match[1].toLowerCase() : '',
	    slashes: !!match[2],
	    rest: match[3]
	  };
	}

	/**
	 * Resolve a relative URL pathname against a base URL pathname.
	 *
	 * @param {String} relative Pathname of the relative URL.
	 * @param {String} base Pathname of the base URL.
	 * @return {String} Resolved pathname.
	 * @api private
	 */
	function resolve(relative, base) {
	  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
	      i = path.length,
	      last = path[i - 1],
	      unshift = false,
	      up = 0;

	  while (i--) {
	    if (path[i] === '.') {
	      path.splice(i, 1);
	    } else if (path[i] === '..') {
	      path.splice(i, 1);
	      up++;
	    } else if (up) {
	      if (i === 0) unshift = true;
	      path.splice(i, 1);
	      up--;
	    }
	  }

	  if (unshift) path.unshift('');
	  if (last === '.' || last === '..') path.push('');

	  return path.join('/');
	}

	/**
	 * The actual URL instance. Instead of returning an object we've opted-in to
	 * create an actual constructor as it's much more memory efficient and
	 * faster and it pleases my OCD.
	 *
	 * @constructor
	 * @param {String} address URL we want to parse.
	 * @param {Object|String} location Location defaults for relative paths.
	 * @param {Boolean|Function} parser Parser for the query string.
	 * @api public
	 */
	function URL(address, location, parser) {
	  if (!(this instanceof URL)) {
	    return new URL(address, location, parser);
	  }

	  var relative,
	      extracted,
	      parse,
	      instruction,
	      index,
	      key,
	      instructions = rules.slice(),
	      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
	      url = this,
	      i = 0;

	  //
	  // The following if statements allows this module two have compatibility with
	  // 2 different API:
	  //
	  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
	  //    where the boolean indicates that the query string should also be parsed.
	  //
	  // 2. The `URL` interface of the browser which accepts a URL, object as
	  //    arguments. The supplied object will be used as default values / fall-back
	  //    for relative paths.
	  //
	  if ('object' !== type && 'string' !== type) {
	    parser = location;
	    location = null;
	  }

	  if (parser && 'function' !== typeof parser) parser = qs.parse;

	  location = lolcation(location);

	  //
	  // Extract protocol information before running the instructions.
	  //
	  extracted = extractProtocol(address || '');
	  relative = !extracted.protocol && !extracted.slashes;
	  url.slashes = extracted.slashes || relative && location.slashes;
	  url.protocol = extracted.protocol || location.protocol || '';
	  address = extracted.rest;

	  //
	  // When the authority component is absent the URL starts with a path
	  // component.
	  //
	  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

	  for (; i < instructions.length; i++) {
	    instruction = instructions[i];
	    parse = instruction[0];
	    key = instruction[1];

	    if (parse !== parse) {
	      url[key] = address;
	    } else if ('string' === typeof parse) {
	      if (~(index = address.indexOf(parse))) {
	        if ('number' === typeof instruction[2]) {
	          url[key] = address.slice(0, index);
	          address = address.slice(index + instruction[2]);
	        } else {
	          url[key] = address.slice(index);
	          address = address.slice(0, index);
	        }
	      }
	    } else if (index = parse.exec(address)) {
	      url[key] = index[1];
	      address = address.slice(0, index.index);
	    }

	    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

	    //
	    // Hostname, host and protocol should be lowercased so they can be used to
	    // create a proper `origin`.
	    //
	    if (instruction[4]) url[key] = url[key].toLowerCase();
	  }

	  //
	  // Also parse the supplied query string in to an object. If we're supplied
	  // with a custom parser as function use that instead of the default build-in
	  // parser.
	  //
	  if (parser) url.query = parser(url.query);

	  //
	  // If the URL is relative, resolve the pathname against the base URL.
	  //
	  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
	    url.pathname = resolve(url.pathname, location.pathname);
	  }

	  //
	  // We should not add port numbers if they are already the default port number
	  // for a given protocol. As the host also contains the port number we're going
	  // override it with the hostname which contains no port number.
	  //
	  if (!required(url.port, url.protocol)) {
	    url.host = url.hostname;
	    url.port = '';
	  }

	  //
	  // Parse down the `auth` for the username and password.
	  //
	  url.username = url.password = '';
	  if (url.auth) {
	    instruction = url.auth.split(':');
	    url.username = instruction[0] || '';
	    url.password = instruction[1] || '';
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

	  //
	  // The href is just the compiled result.
	  //
	  url.href = url.toString();
	}

	/**
	 * This is convenience method for changing properties in the URL instance to
	 * insure that they all propagate correctly.
	 *
	 * @param {String} part          Property we need to adjust.
	 * @param {Mixed} value          The newly assigned value.
	 * @param {Boolean|Function} fn  When setting the query, it will be the function
	 *                               used to parse the query.
	 *                               When setting the protocol, double slash will be
	 *                               removed from the final url if it is true.
	 * @returns {URL}
	 * @api public
	 */
	function set(part, value, fn) {
	  var url = this;

	  switch (part) {
	    case 'query':
	      if ('string' === typeof value && value.length) {
	        value = (fn || qs.parse)(value);
	      }

	      url[part] = value;
	      break;

	    case 'port':
	      url[part] = value;

	      if (!required(value, url.protocol)) {
	        url.host = url.hostname;
	        url[part] = '';
	      } else if (value) {
	        url.host = url.hostname + ':' + value;
	      }

	      break;

	    case 'hostname':
	      url[part] = value;

	      if (url.port) value += ':' + url.port;
	      url.host = value;
	      break;

	    case 'host':
	      url[part] = value;

	      if (/:\d+$/.test(value)) {
	        value = value.split(':');
	        url.port = value.pop();
	        url.hostname = value.join(':');
	      } else {
	        url.hostname = value;
	        url.port = '';
	      }

	      break;

	    case 'protocol':
	      url.protocol = value.toLowerCase();
	      url.slashes = !fn;
	      break;

	    case 'pathname':
	      url.pathname = value.length && value.charAt(0) !== '/' ? '/' + value : value;

	      break;

	    default:
	      url[part] = value;
	  }

	  for (var i = 0; i < rules.length; i++) {
	    var ins = rules[i];

	    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

	  url.href = url.toString();

	  return url;
	}

	/**
	 * Transform the properties back in to a valid and full URL string.
	 *
	 * @param {Function} stringify Optional query stringify function.
	 * @returns {String}
	 * @api public
	 */
	function toString(stringify) {
	  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

	  var query,
	      url = this,
	      protocol = url.protocol;

	  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

	  var result = protocol + (url.slashes ? '//' : '');

	  if (url.username) {
	    result += url.username;
	    if (url.password) result += ':' + url.password;
	    result += '@';
	  }

	  result += url.host + url.pathname;

	  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
	  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

	  if (url.hash) result += url.hash;

	  return result;
	}

	URL.prototype = { set: set, toString: toString };

	//
	// Expose the URL parser and some additional properties that might be useful for
	// others or testing.
	//
	URL.extractProtocol = extractProtocol;
	URL.location = lolcation;
	URL.qs = qs;

	module.exports = URL;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 176 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Check if we're required to add a port number.
	 *
	 * @see https://url.spec.whatwg.org/#default-port
	 * @param {Number|String} port Port number we need to check
	 * @param {String} protocol Protocol we need to check against.
	 * @returns {Boolean} Is it a default port for the given protocol
	 * @api private
	 */

	module.exports = function required(port, protocol) {
	  protocol = protocol.split(':')[0];
	  port = +port;

	  if (!port) return false;

	  switch (protocol) {
	    case 'http':
	    case 'ws':
	      return port !== 80;

	    case 'https':
	    case 'wss':
	      return port !== 443;

	    case 'ftp':
	      return port !== 21;

	    case 'gopher':
	      return port !== 70;

	    case 'file':
	      return false;
	  }

	  return port !== 0;
	};

/***/ }),
/* 177 */
/***/ (function(module, exports) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Decode a URI encoded string.
	 *
	 * @param {String} input The URI encoded string.
	 * @returns {String} The decoded string.
	 * @api private
	 */
	function decode(input) {
	  return decodeURIComponent(input.replace(/\+/g, ' '));
	}

	/**
	 * Simple query string parser.
	 *
	 * @param {String} query The query string that needs to be parsed.
	 * @returns {Object}
	 * @api public
	 */
	function querystring(query) {
	  var parser = /([^=?&]+)=?([^&]*)/g,
	      result = {},
	      part;

	  //
	  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
	  // the lastIndex property so we can continue executing this loop until we've
	  // parsed all results.
	  //
	  for (; part = parser.exec(query); result[decode(part[1])] = decode(part[2])) {}

	  return result;
	}

	/**
	 * Transform a query string to an object.
	 *
	 * @param {Object} obj Object that should be transformed.
	 * @param {String} prefix Optional prefix.
	 * @returns {String}
	 * @api public
	 */
	function querystringify(obj, prefix) {
	  prefix = prefix || '';

	  var pairs = [];

	  //
	  // Optionally prefix with a '?' if needed
	  //
	  if ('string' !== typeof prefix) prefix = '?';

	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	    }
	  }

	  return pairs.length ? prefix + pairs.join('&') : '';
	}

	//
	// Expose the module.
	//
	exports.stringify = querystringify;
	exports.parse = querystring;

/***/ }),
/* 178 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
	    style: _vm.cellStyle,
	    attrs: {
	      "link": _vm.link
	    },
	    on: {
	      "click": _vm.cellClicked
	    }
	  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
	    staticClass: ["cell-label-text"]
	  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
	    staticClass: ["cell-title"]
	  }, [_vm._t("title", [_c('text', {
	    staticClass: ["cell-content"]
	  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
	    staticClass: ["cell-desc-text"]
	  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.hasArrow) ? _c('image', {
	    staticClass: ["cell-arrow-icon"],
	    attrs: {
	      "src": _vm.arrowIcon
	    }
	  }) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(180);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(181)
	)

	/* script */
	__vue_exports__ = __webpack_require__(182)

	/* template */
	var __vue_template__ = __webpack_require__(184)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c6c974ba"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 181 */
/***/ (function(module, exports) {

	module.exports = {
	  "checkbox": {
	    "width": 48,
	    "height": 48
	  },
	  "title-text": {
	    "fontSize": 30
	  }
	}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _wxcCell = __webpack_require__(169);

	var _wxcCell2 = _interopRequireDefault(_wxcCell);

	var _iconBase = __webpack_require__(183);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  components: { WxcCell: _wxcCell2.default },
	  props: {
	    hasTopBorder: {
	      type: Boolean,
	      default: false
	    },
	    title: {
	      type: String,
	      require: true
	    },
	    value: {
	      type: [String, Number, Object],
	      require: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      icon: [_iconBase.CHECKED, _iconBase.UNCHECKED, _iconBase.CHECKED_DISABLED, _iconBase.UNCHECKED_DISABLED],
	      color: '#3D3D3D',
	      innerChecked: false
	    };
	  },
	  computed: {
	    checkIcon: function checkIcon() {
	      var icon = this.icon,
	          disabled = this.disabled,
	          innerChecked = this.innerChecked;

	      if (disabled) {
	        return icon[innerChecked ? 2 : 3];
	      } else {
	        return icon[innerChecked ? 0 : 1];
	      }
	    }
	  },
	  created: function created() {
	    var checked = this.checked,
	        disabled = this.disabled;

	    this.innerChecked = checked;
	    this.color = checked && !disabled ? '#EE9900' : '#3D3D3D';
	  },

	  methods: {
	    wxcCellDivClick: function wxcCellDivClick() {
	      var disabled = this.disabled,
	          innerChecked = this.innerChecked,
	          value = this.value;

	      if (!disabled) {
	        this.innerChecked = !innerChecked;
	        this.color = this.innerChecked ? '#EE9900' : '#3D3D3D';
	        this.$emit('wxcCheckBoxItemChecked', { value: value, checked: this.innerChecked });
	      }
	    }
	  }
	};

/***/ }),
/* 183 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  CHECKED: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEjUExURUxpce2YAO2ZAAAAANuSAO6YAO6ZAO2XAO2ZAICAAOyXAO2YAO6ZAO6ZAO6YAOyVAO6ZAOyWAO2XAO6ZAO6ZAOyZAO6ZAOyYAOiLAO2YAO2YAOuWAO6XAOOOAO6ZAOuTAOqVAO6ZAO2YAO2ZAO6ZAO6YAL+AAMyZAO6YAO6YAOyYAO6YAO6ZAO6ZAO2UAOyXAO6YAO2ZAOuJAO2YAOuXAOyYAOyYAO6ZAOOOAO2YANWAAOyXAO2YAOyXAOyYAO2YAO6ZAO2YAO6ZAO2SAO6WAO6ZAOyZAO6ZAO6YAO6ZAO6ZAKpVAOqYAOuXAO6ZAO6ZAO6ZAOmWAO2YAO2YAOuYAO6ZAO2YAO6YAO2ZAO2ZAO2ZAOmWAOyZAO2ZAO6XAO2YAO6ZAJf2tK4AAABgdFJOUwDa9wEHsvmAfwJs8bQe/SmHRGJ4/G4tQwvpYz8sEvAaDMya8vq/BAX43WqzadwrG5XlDctbXHn+CUUGQlddXirAkEsOSe1foqHPsQM+QK88kyKNtU3N9t+R2eMuiZhYmUNfjO0AAAF/SURBVFjD7ZhnV8IwFIYpKbRNgCqtE9nLCQKKDPfee8/8/18hiHqObQMJqccP5v2e5/TJvfe0tx6PiIgnqkNDZY4B9agFpC9KCDMHSQu6BQQlc4kdhE0JWkBGDK8rzMnimGEBqRgr7DfrcEqABEiAXAJp+a1azg1QYfdgo57jBmnDQ4c7+5t5XpA2GvaFvHvb3E80MT7mnxxo5jnvqOXl808FBoOcVet4BaZl3vJ3vEZkzj6yefUJsnv1CbJ79QYFj5sXwMFrbuaHV2/QiXJ5XXbympXZhhZKt5X5hGbx8lq9eoPq96hUWS2AbvWiAsUjUjrjWyl3qxcVCMiRFMokv+xIXhTlB8XXVPrTjlAv2j76tiPVixbUtou17Z7IXnSdDYrLb+lSEj6TvWhHJB55QGbykexFC/qwM0NkL+qhbdm93N2cEr0Ypj9+dnUebrjwggRHiVpDfEQIkAD9OQgo9lMGwlnWHVtRsxhVf2s5dm1dj67BKvuW7fADQeRf5h2SyMmxXTU0BgAAAABJRU5ErkJggg==',

	  UNCHECKED: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUxpcd/f39XV1eDg4N/f3+Dg4N/f39/f39/f397e3t/f3+Dg4N7e3t3d3d/f39/f39/f39vb2wAAAODg4FDIs8gAAAATdFJOUwDxEvzaKXiAf2y//lxb8HnAKgHBpjqJAAAAeElEQVRYw+3YOxaAIAxEUb4JQQU1+9+rPdLkHG10Xp9b0A3OIeRCFirmSHIYoLwmr+Z82vIASYqLHdKYZICo6c7mqjYaoKLK9pedXAECBAgQIECAAAECBAgQoA9BJ9+vyGu1bmwuVX1/axw/NtfDId2+sicfCOiXXfhNK3VzfJS4AAAAAElFTkSuQmCC',

	  CHECKED_DISABLED: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACZUExURUxpceDg4N/f3+Dg4OXm5t7e3t/f3+Xm5t/f39/f39PT0+Dh4d3d3d/f393d3d/f39vb2+Hh4eDg4PLz9PHy8+Xl5uzt7u7v8OLi4u3u7/Dw8eHh4erq6+jo6ePk5O/w8evs7Ofn6Orr7PHy8urr6+vr7Ofo6O3t7uvs7eLi4+fn5+bn5/Dx8uzt7e/w8OPj4+np6uTl5eHh4kIni68AAAASdFJOUwBLuP7eqvrfwL8j85a5l/5N85cf5NYAAAFDSURBVFjD7ZhtUoMwFAAhEGjBWn0+IBQKrQpVa/26/+G0VhmFhiSEjj/MHmCH5SUTgmUZDFZgUzJVhlA7aInsc88BZRzvzG6JqAeD8GhLROZw6SsTwpy0RFMA/0oZF2BiREZkRKcRIeIjjiFKqud6g9oiTPIo2+60RXizigC2+k+U3GYAy1j3He274D6KF5pTO3RF16g7/lbXUFGna6Co2zVQ1O0SixZp/IRHutjvLrEofal3KO4Si3KWFQ+Ioi6xaFMDK6oE++YlJSpT9tFRoaBLLEJM1wBNHa9LYvxY3q2/6zjzkl1HTV1Pl5SoqevpklvZX3X5kt8lu0U+6wrG75IVHep6uqQ37b7ureB3Kez+Mn2tVzjCAfnzLDQfEUZkRH8nQr8rIg6EriK+G4IzO9XleLTrenBBZxNljvxAMPxL3gERb+o/eS/XGwAAAABJRU5ErkJggg==',

	  UNCHECKED_DISABLED: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUxpceDg4N/f39/f3+zu7t7e3t/f3+zu7t/f39/f39XV1eDg4OXm5t3d3eDg4N7e3t/f39/f39vb2+Xm5uDg4PLz9Kf8uvkAAAAUdFJOUwApePG+bNq/gH8S/M5b/lzweSrPOXjjsgAAAHZJREFUWMPt2DsWgCAQQ1EYGFDEf9z/Vu3RZs7RRvMWcPvEOcZc8Sq9OVFfGsjPKcBcSKNvIE3DZIcwJG0gWbBncxWLNFAP5MNcBDpChAgRIkSIECFChAgRIvRhKF8hCajRWI4VYX1rHD8218uma2fu5kBgv+wEo835c4Jy4u8AAAAASUVORK5CYII='
	};

/***/ }),
/* 184 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('wxc-cell', {
	    attrs: {
	      "hasTopBorder": _vm.hasTopBorder
	    },
	    on: {
	      "wxcCellDivClick": _vm.wxcCellDivClick
	    }
	  }, [_c('text', {
	    staticClass: ["title-text"],
	    style: {
	      color: _vm.color
	    },
	    slot: "title"
	  }, [_vm._v(_vm._s(_vm.title))]), _c('image', {
	    staticClass: ["checkbox"],
	    attrs: {
	      "src": _vm.checkIcon
	    },
	    slot: "value"
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(186);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(187)
	)

	/* script */
	__vue_exports__ = __webpack_require__(188)

	/* template */
	var __vue_template__ = __webpack_require__(189)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-checkbox-list\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-437a4324"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 187 */
/***/ (function(module, exports) {

	module.exports = {}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(180);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { WxcCheckbox: _index2.default },
	  props: {
	    list: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      checkedList: []
	    };
	  },
	  created: function created() {
	    var _this = this;

	    var list = this.list;

	    if (list && list.length > 0) {
	      list.forEach(function (item, i) {
	        item.checked && _this.checkedList.push(item.value);
	      });
	    }
	  },

	  methods: {
	    wxcCheckBoxItemChecked: function wxcCheckBoxItemChecked(e) {
	      if (e.checked) {
	        this.checkedList.push(e.value);
	      } else {
	        var index = this.checkedList.indexOf(e.value);
	        this.checkedList.splice(index, 1);
	      }
	      this.$emit('wxcCheckBoxListChecked', { checkedList: this.checkedList });
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 189 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', _vm._l((_vm.list), function(item, i) {
	    return _c('wxc-checkbox', _vm._b({
	      key: i,
	      on: {
	        "wxcCheckBoxItemChecked": _vm.wxcCheckBoxItemChecked
	      }
	    }, 'wxc-checkbox', item))
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(191);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(192)
	)

	/* script */
	__vue_exports__ = __webpack_require__(193)

	/* template */
	var __vue_template__ = __webpack_require__(194)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-40463ea6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 192 */
/***/ (function(module, exports) {

	module.exports = {
	  "time-dot-wrap": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  }
	}

/***/ }),
/* 193 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    // 时间戳
	    time: {
	      type: Number,
	      default: 1501200000000
	    },
	    // 倒计时的间隔,单位为"毫秒"
	    interval: {
	      type: Number,
	      default: 1000
	    },
	    tpl: {
	      type: String,
	      default: '{h}:{m}:{s}'
	    },
	    // 最外层包裹 style
	    timeWrapStyle: Object,
	    // 数字盒子 style
	    timeBoxStyle: Object,
	    // : 盒子Style
	    dotBoxStyle: Object,
	    // 数字文字 Style
	    timeTextStyle: Object,
	    // : 文字Style
	    dotTextStyle: Object
	  },
	  data: function data() {
	    return {
	      NOW_DATE: new Date().getTime(),
	      completed: false,
	      TIME_WRAP_STYLE: {
	        flexDirection: 'row',
	        alignItems: 'center',
	        marginLeft: '12px',
	        marginRight: '12px'
	      },
	      TIME_BOX_STYLE: {
	        flexDirection: 'row',
	        justifyContent: 'center',
	        alignItems: 'center',
	        backgroundColor: '#333333',
	        height: '30px',
	        width: '30px'
	      },
	      DOT_BOX_STYLE: {
	        width: '18px',
	        flexDirection: 'row',
	        justifyContent: 'center',
	        alignItems: 'center'
	      },
	      TIME_TEXT_STYLE: {
	        color: '#FFCC80',
	        fontSize: '18px'
	      },
	      DOT_TEXT_STYLE: {
	        color: '#333333',
	        fontSize: '18px',
	        fontWeight: 'bold'
	      }
	    };
	  },
	  mounted: function mounted() {
	    var _this = this;

	    setInterval(function () {
	      _this.NOW_DATE = new Date().getTime();
	    }, this.interval);
	  },

	  computed: {
	    mrTimeWrapStyle: function mrTimeWrapStyle() {
	      return Object.assign({}, this.TIME_WRAP_STYLE, this.timeWrapStyle);
	    },
	    mrTimeBoxStyle: function mrTimeBoxStyle() {
	      return Object.assign({}, this.TIME_BOX_STYLE, this.timeBoxStyle);
	    },
	    mrDotBoxStyle: function mrDotBoxStyle() {
	      return Object.assign({}, this.DOT_BOX_STYLE, this.dotBoxStyle);
	    },
	    mrTimeTextStyle: function mrTimeTextStyle() {
	      return Object.assign({}, this.TIME_TEXT_STYLE, this.timeTextStyle);
	    },
	    mrDotTextStyle: function mrDotTextStyle() {
	      return Object.assign({}, this.DOT_TEXT_STYLE, this.dotTextStyle);
	    },
	    countDownData: function countDownData() {
	      var timeSpacing = this.time - this.NOW_DATE;

	      // 倒计时结束了
	      if (timeSpacing < 0) {
	        if (this.completed === false) {
	          this.$emit('wxcOnComplete');
	        }
	        this.completed = true;
	        return {
	          hour: '00',
	          minute: '00',
	          second: '00'
	        };
	      }

	      // 计算小时
	      var hours = Math.floor(timeSpacing / (3600 * 1000));

	      // 计算分钟(去除小时)
	      var minute = Math.floor(timeSpacing % (3600 * 1000) / (60 * 1000));

	      // 计算秒数(去除分钟)
	      var second = Math.floor(timeSpacing % (60 * 1000) / 1000);

	      return {
	        hour: hours < 10 ? '0' + hours : hours,
	        minute: minute < 10 ? '0' + minute : minute,
	        second: second < 10 ? '0' + second : second
	      };
	    }
	  },

	  methods: {
	    // 分析模板
	    tplObj: function tplObj() {
	      var tplIndexOfHours = this.tpl.indexOf('h');
	      var tplIndexOfMinutes = this.tpl.indexOf('m');
	      var tplIndexOfSeconds = this.tpl.indexOf('s');

	      return {
	        firstDot: this.tpl.slice(tplIndexOfHours + 2, tplIndexOfMinutes - 1),
	        secondDot: this.tpl.slice(tplIndexOfMinutes + 2, tplIndexOfSeconds - 1)
	      };
	    }
	  }
	};

/***/ }),
/* 194 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: _vm.mrTimeWrapStyle
	  }, [_c('div', {
	    staticClass: ["time-dot-wrap"]
	  }, [_c('div', {
	    style: _vm.mrTimeBoxStyle
	  }, [_c('text', {
	    style: _vm.mrTimeTextStyle
	  }, [_vm._v(_vm._s(_vm.countDownData.hour))])]), _c('div', {
	    style: _vm.mrDotBoxStyle
	  }, [_c('text', {
	    style: _vm.mrDotTextStyle
	  }, [_vm._v(_vm._s(_vm.tplObj().firstDot))])]), _c('div', {
	    style: _vm.mrTimeBoxStyle
	  }, [_c('text', {
	    style: _vm.mrTimeTextStyle
	  }, [_vm._v(_vm._s(_vm.countDownData.minute))])]), _c('div', {
	    style: _vm.mrDotBoxStyle
	  }, [_c('text', {
	    style: _vm.mrDotTextStyle
	  }, [_vm._v(_vm._s(_vm.tplObj().secondDot))])]), _c('div', {
	    style: _vm.mrTimeBoxStyle
	  }, [_c('text', {
	    style: _vm.mrTimeTextStyle
	  }, [_vm._v(_vm._s(_vm.countDownData.second))])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(196);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(197)
	)

	/* script */
	__vue_exports__ = __webpack_require__(198)

	/* template */
	var __vue_template__ = __webpack_require__(200)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5568a168"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 197 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "width": 750
	  },
	  "mask": {
	    "top": 0,
	    "width": 750,
	    "height": 1344,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "dialog-box": {
	    "backgroundColor": "#FFFFFF",
	    "width": 558
	  },
	  "dialog-content": {
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "paddingLeft": 36,
	    "paddingRight": 36
	  },
	  "content-title": {
	    "color": "#333333",
	    "fontSize": 36,
	    "textAlign": "center",
	    "marginBottom": 24
	  },
	  "content-subtext": {
	    "color": "#666666",
	    "fontSize": 26,
	    "lineHeight": 36,
	    "textAlign": "center"
	  },
	  "dialog-footer": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderTopColor": "#F3F3F3",
	    "borderTopWidth": 1,
	    "borderTop": "1px solid #F3F3F3"
	  },
	  "footer-btn": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flex": 1,
	    "height": 90
	  },
	  "cancel": {
	    "borderRightColor": "#F3F3F3",
	    "borderRightWidth": 1,
	    "borderRight": "1px solid #F3F3F3"
	  },
	  "btn-text": {
	    "fontSize": 36,
	    "color": "#666666"
	  },
	  "no-prompt": {
	    "width": 486,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "marginTop": 24
	  },
	  "no-prompt-icon": {
	    "width": 24,
	    "height": 24,
	    "marginRight": 12
	  },
	  "no-prompt-text": {
	    "fontSize": 24,
	    "color": "#A5A5A5"
	  }
	}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var icon = __webpack_require__(199);
	module.exports = {
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    single: {
	      type: Boolean,
	      default: false
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    content: {
	      type: String,
	      default: ''
	    },
	    cancelText: {
	      type: String,
	      default: '取消'
	    },
	    confirmText: {
	      type: String,
	      default: '确定'
	    },
	    mainBtnColor: {
	      type: String,
	      default: '#EE9900'
	    },
	    secondBtnColor: {
	      type: String,
	      default: '#666666'
	    },
	    showNoPrompt: {
	      type: Boolean,
	      default: true
	    },
	    noPromptText: {
	      type: String,
	      default: '不再提示'
	    },
	    isChecked: {
	      type: Boolean,
	      default: false
	    },
	    maskBgColor: {
	      type: String,
	      default: 'rgba(0,0,0,0.6)'
	    }
	  },
	  data: function data() {
	    return {
	      noPromptIcon: icon.unChecked,
	      ref: 'viewport',
	      pageHeight: 1334
	    };
	  },
	  created: function created() {
	    var env = weex.config.env;

	    this.pageHeight = env.deviceHeight / env.deviceWidth * 750;
	  },

	  methods: {
	    secondaryClicked: function secondaryClicked() {
	      this.$emit('wxcDialogCancelBtnClicked', {
	        type: 'cancel'
	      });
	    },
	    primaryClicked: function primaryClicked(e) {
	      this.$emit('wxcDialogConfirmBtnClicked', {
	        type: 'confirm'
	      });
	    },
	    noPromptClicked: function noPromptClicked(e) {
	      var isChecked = !this.isChecked;
	      this.noPromptIcon = isChecked ? icon.checked : icon.unChecked;
	      this.$emit('wxcDialogNoPromptClicked', { isChecked: isChecked });
	    }
	  }
	};

/***/ }),
/* 199 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by Tw93 on 2016/10/29.
	 */
	module.exports = {
	  checked: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAADsUlEQVRYCe2Za4hNURTH/3vf91teMwx5k7xf4zGRPJopJCVfaDDKK4R88EnKB4UiMh4pCfFB+TBDEVFKJmHIUIy3YR7mjjn3zr1zH+ccrX2diUz3njuOO1fd/eGeffZae63fXevsszt7MfxsNXth7dN32AbO+UpVxRjG4NZkmbyqKoKMoUZRlItNjW9OjdmLKPln9PPpxIACO3NUMmBiJqFS+VKB6nY1vHjgps91jCLZN39EFUFy32A4p++CtWAWmLVbAgo1GkS07j5CVYegtL4HwTbWv57OGsuHbeWcHyVI37Ir4DZvqj+aEbkSkdB6dbmAVRRlG6dnkjxTJLMFkniIhZhEn/OVnBYO3VC6s61pTMTItdXdXc9ksuBoTMTIkylmkywHanQ2chHNRdToCKSyF6t/DP/5IgRubkmlKuRmXVoGK8UbnyFwfR3UWBtiDU90Wc/4Yop/ewHpWpmAhNkBz4Ij2Qca97+GdG0t1KgEmGzwlpyEpd+07AKVv7+FVFkKtb0F4BZ4isthKZipC5KUMpJ6WfoIqWI11HAzwM3wLDwG68DZuiEzAioH6iBVlEIJNQDMBPf8w7AOnpcWZNqgqhxLy4HcVp+ADH4BGId73kHYhhanZUNT1p361opS+M8VIvrhjjY36VUJNSUgA5/Ep5lr7n7Yhi9OOieZUDeoIn0AYm0I3NiMSG1FMptQwn5IlavFZwQpuubsg33ksqRzUgl1g3pKToM5egOqjODtXWh/cblT20qkVbyC5JZaIXcV7YF99IpOddMZ1A1q7jUKvqWXwN39Aahou7cH4adnfvOlRIMJyOaXYtw5YzfsY1f9ptPVG92g5MDkGwTv0svgviHCX+jBAYQeJnYW2g4D18sgNz0XMkfhTjgmlHWV6495ae/1Jne+iCztMHLzS4Qfl4PSLftfId5QnYCcsgXOSRv/cPY3A2lFVHPEHT3hXXIB5rzJYihScxHxrw9F3z5xPZxTt2mqhl27BEreuc0D76KzsAwo6oCxj1sD189v8Y5Bgzppp/5Xv8zigKfkFMKPjoPZe8Axfu2vYkP7fwVKJMxkhbNwh6FQnRnrcuo7M/Yvx3KgRkc3F1HDI0pn5mSUTnqzrWlMxEjHjjUESMfR2dY0JmLkVH0gQHFmHpGyhpWOxomJGjGa1kxrqXa5ey1B5Ht+9N1NcFceTK488SLvDmpRbPh4F8Fb2zuKDU0NtRv/m/KNeD1RHYdKJFR9AFClLbBuiWhicVcRCzERG3H8AAOtX+I/9HP9AAAAAElFTkSuQmCC",

	  unChecked: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAABmElEQVRYCe2ZoU7DUBSGz7mi6ZaR4FEz25Ia3F4AiUHvAVCgeQQ0jgfoGyB5gTpMkw3R1uBJaNqmYof8S5tULWE9HVtyrlhFc//75eu5E+cwNSuOY280Gt0z84qZAyKatO+O/MxFJBaRsCzL1yAIapzP+NlsNlee570x8/WRofYeJyIfdV3fzufzL4bJ8XgcAVJEPpn5qaqq98Vi8bM3ZaCX6/X6wvf9GxF5ZuYZYIuiWHKSJA/OuRdAEtFyOp1+D8Twp9g0TS+JCAJn2+320aEmkQCTpwIJHrCAqWFbARQXh/C58Tyl1TKB0bW3+79qcp+YDtMEoGexDFT7M5lRM6ptQDvPatSMahvQzrMaNaPaBrTzrEbNqLYB7TyrUTOqbUA7z2rUjGob0M6zGh3CaI5QdHq1w/vmdZhyh8Y+AtGO7husvb9lAiNAQxyAnnnTjtY+76A8sICpYQsdRiRo6KNXjp55lmV3HeUHHdJnE84GQ9u/BxsYz2Z8s/t7whwHIxJMH0QkIqLdBetjpsdeDMQisIAJbMj6Bdz9uoyhg7P4AAAAAElFTkSuQmCC"
	};

/***/ }),
/* 200 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [(_vm.show) ? _c('mask', {
	    staticClass: ["mask"],
	    style: {
	      backgroundColor: _vm.maskBgColor,
	      height: _vm.pageHeight + 'px'
	    }
	  }, [_c('div', {
	    staticClass: ["dialog-box"]
	  }, [_c('div', {
	    staticClass: ["dialog-content"]
	  }, [_vm._t("title", [_c('text', {
	    staticClass: ["content-title"]
	  }, [_vm._v(_vm._s(_vm.title))])]), _vm._t("content", [_c('text', {
	    staticClass: ["content-subtext"]
	  }, [_vm._v(_vm._s(_vm.content))])]), (_vm.showNoPrompt) ? _c('div', {
	    staticClass: ["no-prompt"],
	    on: {
	      "click": _vm.noPromptClicked
	    }
	  }, [_c('image', {
	    staticClass: ["no-prompt-icon"],
	    attrs: {
	      "src": _vm.noPromptIcon
	    }
	  }), _c('text', {
	    staticClass: ["no-prompt-text"]
	  }, [_vm._v(_vm._s(_vm.noPromptText))])]) : _vm._e()], 2), _c('div', {
	    staticClass: ["dialog-footer"]
	  }, [(!_vm.single) ? _c('div', {
	    staticClass: ["footer-btn", "cancel"],
	    on: {
	      "click": _vm.secondaryClicked
	    }
	  }, [_c('text', {
	    staticClass: ["btn-text"],
	    style: {
	      color: _vm.secondBtnColor
	    }
	  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e(), _c('div', {
	    staticClass: ["footer-btn", "confirm"],
	    on: {
	      "click": _vm.primaryClicked
	    }
	  }, [_c('text', {
	    staticClass: ["btn-text"],
	    style: {
	      color: _vm.mainBtnColor
	    }
	  }, [_vm._v(_vm._s(_vm.confirmText))])])])])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(202);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(203)
	)

	/* script */
	__vue_exports__ = __webpack_require__(204)

	/* template */
	var __vue_template__ = __webpack_require__(206)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1bc3ec3f"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 203 */
/***/ (function(module, exports) {

	module.exports = {
	  "slider-content": {
	    "position": "relative"
	  },
	  "slider": {
	    "position": "absolute",
	    "top": 0
	  }
	}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var expressionBinding = weex.requireModule('expressionBinding');
	var animation = weex.requireModule('animation');
	var Utils = __webpack_require__(205);

	exports.default = {
	  props: {
	    sliderId: {
	      type: [String, Number],
	      default: 1
	    },
	    panOffset: {
	      type: Number,
	      default: 80
	    },
	    cardLength: {
	      type: Number,
	      default: 1
	    },
	    selectIndex: {
	      type: Number,
	      default: 0
	    },
	    enableSwipe: {
	      type: Boolean,
	      default: true
	    },
	    containerS: {
	      type: Object,
	      default: function _default() {
	        return {
	          position: 'relative',
	          width: 750,
	          height: 352,
	          overflow: 'hidden'
	        };
	      }
	    },
	    cardS: {
	      type: Object,
	      default: function _default() {
	        return {
	          width: 360,
	          height: 300,
	          spacing: 0,
	          scale: 0.75
	        };
	      }
	    }
	  },
	  data: function data() {
	    return {
	      preventMove: true,
	      moving: false,
	      firstTouch: true,
	      startX: 0,
	      startTime: 0,
	      currentIndex: 0
	    };
	  },
	  computed: {
	    cardList: function cardList() {
	      return new Array(this.cardLength + 1).join().split('');
	    },
	    cardWidth: function cardWidth() {
	      return (this.cardLength - 1) * this.cardS.width + this.containerS.width + 235 + 'px';
	    }
	  },
	  created: function created() {
	    this.currentIndex = this.selectIndex;
	  },
	  mounted: function mounted() {
	    var _this = this;

	    setTimeout(function () {
	      var sliderCtn = _this.$refs['sliderCtn_' + _this.sliderId];
	      if (Utils.env.supportsEB() && sliderCtn && sliderCtn.ref) {
	        expressionBinding.enableBinding(sliderCtn.ref, 'pan');
	      }
	    }, 10);
	  },

	  methods: {
	    onTouchStart: function onTouchStart(e) {
	      if (Utils.env.supportsEB()) {
	        return;
	      }
	      this.startX = e.changedTouches[0].clientX;
	      this.startTime = Date.now();
	    },
	    onTouchMove: function onTouchMove(e) {
	      if (Utils.env.supportsEB()) {
	        return;
	      }
	      var moveX = e.changedTouches[0].clientX - this.startX;
	      var index = this.loopedIndex(this.currentIndex, this.cardLength);
	      var cardLength = this.cardLength;
	      var currentCardLeft = this.currentIndex * (this.cardS.width + this.cardS.spacing);
	      var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
	      animation.transition(sliderCtn, {
	        styles: {
	          transform: 'translateX(' + (moveX - currentCardLeft) + 'px)'
	        },
	        timingFunction: 'ease',
	        delay: 0,
	        duration: 0
	      }, function () {});
	      if (this.cardS.scale !== 1) {
	        var currentCard = this.$refs['card' + this.loopedIndex(index, cardLength) + '_' + this.sliderId][0];
	        animation.transition(currentCard, {
	          styles: {
	            transform: 'scale(' + (1 - Math.abs(moveX) / this.cardS.width * (1 - this.cardS.scale)) + ')'
	          },
	          timingFunction: 'ease',
	          delay: 0,
	          duration: 0
	        }, function () {});
	        // 左边的卡片
	        var leftCard = this.$refs['card' + this.loopedIndex(index - 1, cardLength) + '_' + this.sliderId][0];
	        // loop 函数负数返回 0，这里有点冲突
	        if (leftCard && index !== 0) {
	          animation.transition(leftCard, {
	            styles: {
	              transform: 'scale(' + (1 - Math.abs(moveX - this.cardS.width) / this.cardS.width * (1 - this.cardS.scale)) + ')'
	            },
	            timingFunction: 'ease',
	            delay: 0,
	            duration: 0
	          }, function () {});
	        }
	        // 右边卡片
	        var rightCard = this.$refs['card' + this.loopedIndex(index + 1, cardLength) + '_' + this.sliderId][0];
	        if (rightCard) {
	          animation.transition(rightCard, {
	            styles: {
	              transform: 'scale(' + (1 - Math.abs(this.cardS.width + moveX) / this.cardS.width * (1 - this.cardS.scale)) + ')'
	            },
	            timingFunction: 'ease',
	            delay: 0,
	            duration: 0
	          }, function () {});
	        }
	      }
	    },
	    onTouchEnd: function onTouchEnd(e) {
	      if (Utils.env.supportsEB()) {
	        return;
	      }
	      this.moving = true;
	      var moveX = e.changedTouches[0].clientX - this.startX;
	      var originIndex = this.currentIndex;
	      var cardLength = this.cardLength;
	      var selectIndex = originIndex;
	      var panOffset = this.panOffset || this.cardS.width / 2;

	      if (moveX < -panOffset) {
	        if (this.loop || selectIndex !== cardLength - 1) {
	          selectIndex++;
	        }
	      } else if (moveX > panOffset) {
	        if (this.loop || selectIndex !== 0) {
	          selectIndex--;
	        }
	      }
	      this.slideTo(originIndex, selectIndex);
	    },
	    onEpTouchStart: function onEpTouchStart(e) {
	      if (Utils.env.supportsEB() && e.state === 'start' || e.state === 'move' && this.firstTouch) {
	        this.firstTouch = false;
	        var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
	        this.bindExp(sliderCtn);
	      }
	    },
	    panEnd: function panEnd(e) {
	      if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
	        this.firstTouch = true;
	        this.moving = true;
	        var moveX = e.deltaX;
	        var originIndex = this.currentIndex;
	        var selectIndex = originIndex;
	        var duration = Date.now() - this.startTime;
	        var panOffset = this.panOffset || this.cardS.width / 2;
	        if (moveX < -panOffset || this.enableSwipe && moveX < -10 && duration < 200) {
	          if (selectIndex !== this.cardLength - 1) {
	            selectIndex++;
	          }
	        } else if (moveX > panOffset || this.enableSwipe && moveX > 10 && duration < 500) {
	          if (selectIndex !== 0) {
	            selectIndex--;
	          }
	        }
	        this.slideTo(originIndex, selectIndex);
	      }
	    },
	    slideTo: function slideTo(originIndex, selectIndex) {
	      var _this2 = this;

	      var currentCardScale = 1;
	      var rightCardScale = this.cardS.scale;
	      var leftCardScale = this.cardS.scale;
	      this.$emit('wxcEpSliderCurrentIndexSelected', { currentIndex: selectIndex });
	      if (originIndex < selectIndex) {
	        currentCardScale = this.cardS.scale;
	        rightCardScale = 1;
	      } else if (originIndex > selectIndex) {
	        currentCardScale = this.cardS.scale;
	        leftCardScale = 1;
	      }
	      var currentCard = this.$refs['card' + this.loopedIndex(originIndex, this.cardLength) + '_' + this.sliderId][0];
	      animation.transition(currentCard, {
	        styles: {
	          transform: 'scale(' + currentCardScale + ')'
	        },
	        timingFunction: 'ease',
	        delay: 0,
	        duration: 300
	      }, function () {});
	      var leftCard = this.$refs['card' + this.loopedIndex(originIndex - 1, this.cardLength) + '_' + this.sliderId][0];
	      if (leftCard && originIndex !== 0) {
	        animation.transition(leftCard, {
	          styles: {
	            transform: 'scale(' + leftCardScale + ')'
	          },
	          timingFunction: 'ease',
	          delay: 0,
	          duration: 300
	        }, function () {});
	      }
	      var rightCard = this.$refs['card' + this.loopedIndex(originIndex + 1, this.cardLength) + '_' + this.sliderId][0];
	      if (rightCard && originIndex !== this.cardLength - 1) {
	        animation.transition(rightCard, {
	          styles: {
	            transform: 'scale(' + rightCardScale + ')'
	          },
	          timingFunction: 'ease',
	          delay: 0,
	          duration: 300
	        }, function () {});
	      }
	      var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
	      animation.transition(sliderCtn, {
	        styles: {
	          transform: 'translateX(-' + selectIndex * (this.cardS.width + this.cardS.spacing) + 'px)'
	        },
	        timingFunction: 'ease',
	        delay: 0,
	        duration: 300
	      }, function () {
	        _this2.moving = false;
	        if (originIndex !== selectIndex) {
	          _this2.currentIndex = selectIndex;
	        }
	      });
	    },

	    // 使index维持在0-length之间循环
	    loopedIndex: function loopedIndex(index, total) {
	      if (index < 0) {
	        index = index + (1 - index / total) * total;
	      }
	      return index % total;
	    },
	    bindExp: function bindExp(element) {
	      var _this3 = this;

	      if (element && element.ref && !this.moving) {
	        this.startTime = Date.now();
	        var index = this.loopedIndex(this.currentIndex, this.cardLength);
	        var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
	        var currentCard = this.$refs['card' + index + '_' + this.sliderId][0];
	        var rightCard = null;
	        var leftCard = null;
	        var currentCardLeft = this.currentIndex * (this.cardS.width + this.cardS.spacing);
	        // 卡片容器
	        // x - currentCardLeft
	        var sliderCtnExpOri = 'x - ' + currentCardLeft;
	        var sliderCtnExp = '{"type":"-","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + currentCardLeft + '}]}';
	        var args = [{
	          element: sliderCtn.ref,
	          property: 'transform.translateX',
	          expression: sliderCtnExp,
	          'ori_expression': sliderCtnExpOri
	        }];

	        if (this.cardS.scale !== 1) {
	          // 当前显示的卡片
	          // 1-abs(x)/588*${1-this.cardS.scale}
	          var currentCardExpOri = '1-abs(x)/' + this.cardS.width + '*' + (1 - this.cardS.scale);
	          var currentCardExp = '{"type":"-","children":[{"type":"NumericLiteral","value":1},{"type":"*","children":[{"type":"/","children":[{"type":"CallExpression","children":[{"type":"Identifier","value":"abs"},{"type":"Arguments","children":[{"type":"Identifier","value":"x"}]}]},{"type":"NumericLiteral","value":' + this.cardS.width + '}]},{"type":"NumericLiteral","value":' + (1 - this.cardS.scale) + '}]}]}';
	          args.push({
	            element: currentCard.ref,
	            property: 'transform.scale',
	            expression: currentCardExp,
	            'ori_expression': currentCardExpOri
	          });

	          if (index === 0) {
	            // 右边卡片
	            rightCard = this.$refs['card' + (index + 1) + '_' + this.sliderId][0];
	            // 1-abs(588+x)/588*${1-this.cardS.scale}
	            var rightCardExpOri = '{sx: 1-abs(' + this.cardS.width + '+x)/' + this.cardS.width + '*' + (1 - this.cardS.scale) + ', sy: 1-abs(' + this.cardS.width + '+x)/' + this.cardS.width + '*' + (1 - this.cardS.scale) + '}';
	            var rightCardExp = '{"type":"-","children":[{"type":"NumericLiteral","value":1},{"type":"*","children":[{"type":"/","children":[{"type":"CallExpression","children":[{"type":"Identifier","value":"abs"},{"type":"Arguments","children":[{"type":"+","children":[{"type":"NumericLiteral","value":' + this.cardS.width + '},{"type":"Identifier","value":"x"}]}]}]},{"type":"NumericLiteral","value":' + this.cardS.width + '}]},{"type":"NumericLiteral","value":' + (1 - this.cardS.scale) + '}]}]}';
	            args.push({
	              element: rightCard.ref,
	              property: 'transform.scale',
	              expression: rightCardExp,
	              'ori_expression': rightCardExpOri
	            });
	          } else if (index === this.cardLength - 1) {
	            // 左边的卡片
	            leftCard = this.$refs['card' + (index - 1) + '_' + this.sliderId][0];
	            // 1-abs(x-${this.cardS.width})/${this.cardS.width}*${1-this.cardS.scale}
	            var leftCardExpOri = '{sx: 1-abs(x-' + this.cardS.width + ')/' + this.cardS.width + '*' + (1 - this.cardS.scale) + ', sy: 1-abs(x-' + this.cardS.width + ')/' + this.cardS.width + '*' + (1 - this.cardS.scale) + '}';
	            var leftCardExp = '{"type":"-","children":[{"type":"NumericLiteral","value":1},{"type":"*","children":[{"type":"/","children":[{"type":"CallExpression","children":[{"type":"Identifier","value":"abs"},{"type":"Arguments","children":[{"type":"-","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + this.cardS.width + '}]}]}]},{"type":"NumericLiteral","value":' + this.cardS.width + '}]},{"type":"NumericLiteral","value":' + (1 - this.cardS.scale) + '}]}]}';
	            args.push({
	              element: leftCard.ref,
	              property: 'transform.scale',
	              expression: leftCardExp,
	              'ori_expression': leftCardExpOri
	            });
	          } else {
	            // 左边卡片
	            leftCard = this.$refs['card' + (index - 1) + '_' + this.sliderId][0];
	            // 1-abs(x-${this.cardS.width})/${this.cardS.width}*${1-this.cardS.scale}
	            var _leftCardExpOri = '{sx: 1-abs(x-' + this.cardS.width + ')/' + this.cardS.width + '*' + (1 - this.cardS.scale) + ', sy: 1-abs(x-' + this.cardS.width + ')/' + this.cardS.width + '*' + (1 - this.cardS.scale) + '}';
	            var _leftCardExp = '{"type":"-","children":[{"type":"NumericLiteral","value":1},{"type":"*","children":[{"type":"/","children":[{"type":"CallExpression","children":[{"type":"Identifier","value":"abs"},{"type":"Arguments","children":[{"type":"-","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + this.cardS.width + '}]}]}]},{"type":"NumericLiteral","value":' + this.cardS.width + '}]},{"type":"NumericLiteral","value":' + (1 - this.cardS.scale) + '}]}]}';

	            args.push({
	              element: leftCard.ref,
	              property: 'transform.scale',
	              expression: _leftCardExp,
	              'ori_expression': _leftCardExpOri
	            });

	            // 右边卡片
	            rightCard = this.$refs['card' + (index + 1) + '_' + this.sliderId][0];
	            // 1-abs(${this.cardS.width}+x)/${this.cardS.width}*${1-this.cardS.scale}
	            var _rightCardExpOri = '{sx: 1-abs(' + this.cardS.width + '+x)/' + this.cardS.width + '*' + (1 - this.cardS.scale) + ', sy: 1-abs(' + this.cardS.width + '+x)/' + this.cardS.width + '*' + (1 - this.cardS.scale) + '}';
	            var _rightCardExp = '{"type":"-","children":[{"type":"NumericLiteral","value":1},{"type":"*","children":[{"type":"/","children":[{"type":"CallExpression","children":[{"type":"Identifier","value":"abs"},{"type":"Arguments","children":[{"type":"+","children":[{"type":"NumericLiteral","value":' + this.cardS.width + '},{"type":"Identifier","value":"x"}]}]}]},{"type":"NumericLiteral","value":' + this.cardS.width + '}]},{"type":"NumericLiteral","value":' + (1 - this.cardS.scale) + '}]}]}';
	            args.push({
	              element: rightCard.ref,
	              property: 'transform.scale',
	              expression: _rightCardExp,
	              'ori_expression': _rightCardExpOri
	            });
	          }
	        }
	        expressionBinding.createBinding(element.ref, 'pan', '', args, function (e) {
	          if (!_this3.moving) {
	            _this3.panEnd(e);
	          }
	        });
	      }
	    }
	  }
	};

/***/ }),
/* 205 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * 工具方法库
	 * @namespace Utils
	 * @example
	 */
	var Utils = {

	  /**
	   * 环境判断辅助 API
	   * @namespace Utils.env
	   * @example
	   *
	   *
	   * const { env } = Utils;
	   */
	  env: {

	    /**
	     * 是否是手淘容器
	     * @method
	     * @memberOf Utils.env
	     * @returns {boolean}
	     * @example
	     *
	     * const isTaobao = env.isTaobao();
	     */
	    isTaobao: function isTaobao() {
	      var appName = weex.config.env.appName;

	      return (/(tb|taobao|淘宝)/i.test(appName)
	      );
	    },


	    /**
	     * 是否是旅客容器
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isTrip = env.isTrip();
	     */
	    isTrip: function isTrip() {
	      var appName = weex.config.env.appName;

	      return appName === 'LX';
	    },

	    /**
	     * 是否是 web 环境
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isWeb = env.isWeb();
	     */
	    isWeb: function isWeb() {
	      var platform = weex.config.env.platform;

	      return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
	    },

	    /**
	     * 是否是 iOS 系统
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isIOS = env.isIOS();
	     */
	    isIOS: function isIOS() {
	      var platform = weex.config.env.platform;

	      return platform.toLowerCase() === 'ios';
	    },

	    /**
	     * 是否是 Android 系统
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isAndroid = env.isAndroid();
	     */
	    isAndroid: function isAndroid() {
	      var platform = weex.config.env.platform;

	      return platform.toLowerCase() === 'android';
	    },


	    /**
	     * 是否是支付宝容器
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isAlipay = env.isAlipay();
	     */
	    isAlipay: function isAlipay() {
	      var appName = weex.config.env.appName;

	      return appName === 'AP';
	    },


	    /**
	     * 是否是支付宝H5容器(防止以后支付宝接入weex)
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isAlipayWeb = env.isAlipayWeb();
	     */
	    isAlipayWeb: function isAlipayWeb() {
	      return Utils.env.isAlipay() && Utils.env.isWeb();
	    },


	    /**
	     * 判断是否支持expressionBinding
	     * 当weex版本大于0.10.1.6，为客户端即可以支持expressionBinding
	     * @returns {Boolean}
	     */
	    supportsEB: function supportsEB() {
	      var weexVersion = weex.config.env.weexVersion || '0';
	      var isHighWeex = Utils.compareVersion(weexVersion, '0.10.1.4') && (Utils.env.isIOS() || Utils.env.isAndroid());
	      var expressionBinding = weex.requireModule('expressionBinding');
	      return expressionBinding && expressionBinding.enableBinding && isHighWeex;
	    },


	    /**
	     * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
	     * @returns {boolean}
	     */
	    supportsEBForAndroid: function supportsEBForAndroid() {
	      return Utils.env.isAndroid() && Utils.env.supportsEB();
	    },


	    /**
	     * 判断IOS容器是否支持是否支持expressionBinding
	     * @returns {boolean}
	     */
	    supportsEBForIos: function supportsEBForIos() {
	      return Utils.env.isIOS() && Utils.env.supportsEB();
	    },


	    /**
	     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
	     * @returns {Number}
	     */
	    getPageHeight: function getPageHeight() {
	      var env = weex.config.env;

	      var navHeight = Utils.env.isWeb() ? 0 : 130;
	      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
	    }
	  },

	  /**
	   * 版本号比较
	   * @memberOf Utils
	   * @param currVer {string}
	   * @param promoteVer {string}
	   * @returns {boolean}
	   * @example
	   *
	   * const { Utils } = require('@ali/wx-bridge');
	   * const { compareVersion } = Utils;
	   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
	   */
	  compareVersion: function compareVersion() {
	    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0.0.0";
	    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "0.0.0";

	    if (currVer === promoteVer) return true;
	    var currVerArr = currVer.split(".");
	    var promoteVerArr = promoteVer.split(".");
	    var len = Math.max(currVerArr.length, promoteVerArr.length);
	    for (var i = 0; i < len; i++) {
	      var proVal = ~~promoteVerArr[i];
	      var curVal = ~~currVerArr[i];
	      if (proVal < curVal) {
	        return true;
	      } else if (proVal > curVal) {
	        return false;
	      }
	    }
	    return false;
	  }
	};

	module.exports = Utils;

/***/ }),
/* 206 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: _vm.containerS
	  }, [_c('div', {
	    ref: ("sliderCtn_" + _vm.sliderId),
	    staticClass: ["slider-content"],
	    style: {
	      width: _vm.cardWidth,
	      height: _vm.cardS.height + 'px',
	      transform: ("translateX(-" + (_vm.currentIndex * (_vm.cardS.width + _vm.cardS.spacing)) + "px)")
	    },
	    attrs: {
	      "preventMoveEvent": _vm.preventMove
	    },
	    on: {
	      "panstart": _vm.onTouchStart,
	      "panmove": _vm.onTouchMove,
	      "panend": _vm.onTouchEnd,
	      "horizontalpan": _vm.onEpTouchStart
	    }
	  }, _vm._l((_vm.cardList), function(v, index) {
	    return _c('div', {
	      ref: ("card" + index + "_" + _vm.sliderId),
	      refInFor: true,
	      staticClass: ["slider"],
	      style: {
	        transform: ("scale(" + (index===_vm.currentIndex ? 1 : _vm.cardS.scale) + ")"),
	        left: ((index * _vm.cardS.width) + "px"),
	        marginLeft: (((_vm.containerS.width - _vm.cardS.width) / 2) + "px"),
	        width: _vm.cardS.width + 'px',
	        height: _vm.cardS.height + 'px'
	      }
	    }, [_vm._t(("card" + index + "_" + _vm.sliderId))], 2)
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(208);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(209)
	)

	/* script */
	__vue_exports__ = __webpack_require__(210)

	/* template */
	var __vue_template__ = __webpack_require__(215)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-691bd9df"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 209 */
/***/ (function(module, exports) {

	module.exports = {
	  "grid-select": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "flexWrap": "wrap"
	  }
	}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _option = __webpack_require__(211);

	var _option2 = _interopRequireDefault(_option);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { Option: _option2.default },
	  props: {
	    // 列数
	    cols: {
	      type: Number,
	      default: 4
	    },
	    // 是否单选
	    single: {
	      type: Boolean,
	      default: false
	    },
	    // 数据
	    list: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    // 选择个数限制
	    limit: {
	      type: Number
	    },
	    // 用户自定义样式，用于个性化设置option样式
	    customStyles: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  data: function data() {
	    return {
	      dList: this.initList()
	    };
	  },

	  computed: {
	    cHackList: function cHackList() {
	      var list = this.list,
	          cols = this.cols;

	      var remainder = list.length % cols;
	      var len = remainder ? cols - remainder : 0;

	      return Array.apply(null, { length: len });
	    }
	  },
	  watch: {
	    list: function list() {
	      this.dList = this.initList();
	    }
	  },
	  created: function created() {
	    // 行间距
	    this.lineSpacing = this.customStyles.lineSpacing || '12px';
	  },

	  methods: {
	    onSelect: function onSelect(index) {
	      var checked = this.dList[index].checked;
	      if (this.limit <= this.checkedCount && !checked) {
	        this.$emit('overLimit', this.limit);
	      } else {
	        this.updateList(index);
	        this.$emit('select', {
	          selectIndex: index,
	          checked: !checked,
	          checkedList: this.dList.filter(function (item) {
	            return item.checked;
	          })
	        });
	      }
	    },
	    initList: function initList() {
	      var single = this.single;
	      var checkedCount = 0;

	      var dList = this.list.map(function (item, i) {
	        var checked = item.checked,
	            disabled = item.disabled;

	        disabled = !!disabled;
	        // disabled为true时认为checked无效，同时单选模式下只认为第一个checked为true的为有效值
	        checked = !disabled && !!checked && (!single || checkedCount === 0);
	        if (item.checked) checkedCount += 1;
	        return Object.assign({}, item, {
	          checked: checked,
	          disabled: disabled
	        });
	      });

	      this.checkedCount = checkedCount;
	      return dList;
	    },
	    updateList: function updateList(index) {
	      var single = this.single;
	      var checkedCount = 0;
	      this.dList = this.dList.map(function (item, i) {
	        if (single) {
	          item.checked = index === i && !item.checked;
	        } else {
	          if (i === index) item.checked = !item.checked;
	        }
	        if (item.checked) checkedCount += 1;
	        return item;
	      });
	      this.checkedCount = checkedCount;
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(212)
	)

	/* script */
	__vue_exports__ = __webpack_require__(213)

	/* template */
	var __vue_template__ = __webpack_require__(214)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3b53a090"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 212 */
/***/ (function(module, exports) {

	module.exports = {
	  "grid-option": {
	    "justifyContent": "center",
	    "borderRadius": 8,
	    "borderWidth": 2,
	    "paddingLeft": 6,
	    "paddingRight": 6
	  },
	  "text-title": {
	    "lines": 2,
	    "lineHeight": 30,
	    "textOverflow": "ellipsis",
	    "textAlign": "center",
	    "fontSize": 26
	  },
	  "image-checked": {
	    "position": "absolute",
	    "right": 0,
	    "bottom": 0,
	    "width": 38,
	    "height": 34
	  }
	}

/***/ }),
/* 213 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    index: {
	      type: Number,
	      default: -1
	    },
	    // 是否选中
	    checked: {
	      type: Boolean,
	      default: false
	    },
	    // 是否可选
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    // 标题
	    title: {
	      type: String,
	      default: ''
	    },
	    width: {
	      type: String,
	      default: '166px'
	    },
	    height: {
	      type: String,
	      default: '72px'
	    },
	    // 默认 x
	    icon: {
	      type: String,
	      default: '//gw.alicdn.com/tfs/TB1IAByhgMPMeJjy1XdXXasrXXa-38-34.png'
	    },
	    // 正常状态文字色值
	    color: {
	      type: String,
	      default: '#3d3d3d'
	    },
	    // 选中状态文字色值
	    checkedColor: {
	      type: String,
	      default: '#3d3d3d'
	    },
	    // 不可选状态文字色值
	    disabledColor: {
	      type: String,
	      default: '#9b9b9b'
	    },
	    // 正常状态边框色值
	    borderColor: {
	      type: String,
	      default: 'transparent'
	    },
	    // 选中状态边框色值
	    checkedBorderColor: {
	      type: String,
	      default: '#ffb200'
	    },
	    // 不可选状态边框色值
	    disabledBorderColor: {
	      type: String,
	      default: 'transparent'
	    },
	    // 正常状态背景色值
	    backgroundColor: {
	      type: String,
	      default: '#f6f6f6'
	    },
	    // 选中状态背景色值
	    checkedBackgroundColor: {
	      type: String,
	      default: '#fff'
	    },
	    // 不可选状态背景色值
	    disabledBackgroundColor: {
	      type: String,
	      default: '#f6f6f6'
	    }
	  },
	  computed: {
	    cWrapperStyle: function cWrapperStyle() {
	      var checked = this.checked,
	          disabled = this.disabled,
	          width = this.width,
	          height = this.height,
	          borderColor = this.borderColor,
	          checkedBorderColor = this.checkedBorderColor,
	          disabledBorderColor = this.disabledBorderColor,
	          backgroundColor = this.backgroundColor,
	          checkedBackgroundColor = this.checkedBackgroundColor,
	          disabledBackgroundColor = this.disabledBackgroundColor;

	      return {
	        width: width,
	        height: height,
	        borderColor: disabled ? disabledBorderColor : checked ? checkedBorderColor : borderColor,
	        backgroundColor: disabled ? disabledBackgroundColor : checked ? checkedBackgroundColor : backgroundColor
	      };
	    },
	    cTitleStyle: function cTitleStyle() {
	      var checked = this.checked,
	          disabled = this.disabled,
	          color = this.color,
	          checkedColor = this.checkedColor,
	          disabledColor = this.disabledColor;

	      return {
	        color: disabled ? disabledColor : checked ? checkedColor : color
	      };
	    }
	  },
	  methods: {
	    onClick: function onClick() {
	      if (!this.disabled) {
	        this.$emit('select', this.index);
	      }
	    }
	  }
	};

/***/ }),
/* 214 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["grid-option"],
	    style: _vm.cWrapperStyle,
	    on: {
	      "click": _vm.onClick
	    }
	  }, [(_vm.title) ? _c('text', {
	    staticClass: ["text-title"],
	    style: _vm.cTitleStyle
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.checked && _vm.icon) ? _c('image', {
	    staticClass: ["image-checked"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 215 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["grid-select"]
	  }, [_vm._l((_vm.dList), function(item, index) {
	    return _c('option', _vm._b({
	      key: index,
	      style: {
	        marginTop: index >= _vm.cols ? _vm.lineSpacing : null
	      },
	      attrs: {
	        "index": index
	      },
	      on: {
	        "select": function($event) {
	          _vm.onSelect(index)
	        }
	      }
	    }, 'option', Object.assign({}, _vm.customStyles, item)))
	  }), _vm._l((_vm.cHackList), function(item, index) {
	    return _c('option', _vm._b({
	      key: index,
	      style: {
	        opacity: 0,
	        marginTop: _vm.dList.length >= _vm.cols ? _vm.lineSpacing : null
	      }
	    }, 'option', Object.assign({}, _vm.customStyles, item)))
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(217);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(218)
	)

	/* script */
	__vue_exports__ = __webpack_require__(219)

	/* template */
	var __vue_template__ = __webpack_require__(221)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3c7fafa8"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 218 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-index-list": {
	    "position": "relative"
	  },
	  "index-list": {
	    "width": 750,
	    "height": 1334
	  },
	  "index-list-title": {
	    "borderBottomWidth": 1,
	    "borderColor": "rgba(32,35,37,0.15)",
	    "backgroundColor": "#FBFBFB",
	    "fontSize": 24,
	    "color": "#666666",
	    "paddingBottom": 14,
	    "paddingTop": 14,
	    "paddingLeft": 23,
	    "width": 750
	  },
	  "group-title": {
	    "borderBottomWidth": 0,
	    "paddingBottom": 0,
	    "paddingTop": 24
	  },
	  "index-list-item": {
	    "width": 750,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#e0e0e0",
	    "height": 92,
	    "paddingLeft": 24,
	    "paddingRight": 24,
	    "backgroundColor": "#FFFFFF"
	  },
	  "title": {
	    "fontSize": 32,
	    "color": "#3D3D3D"
	  },
	  "desc": {
	    "fontSize": 24,
	    "color": "#A5A5A5",
	    "marginLeft": 30
	  },
	  "index-list-nav": {
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "marginBottom": 60,
	    "marginTop": 60,
	    "paddingBottom": 20,
	    "paddingTop": 20,
	    "width": 70
	  },
	  "list-nav-key": {
	    "textAlign": "center",
	    "fontSize": 24,
	    "height": 40,
	    "color": "#666666"
	  },
	  "index-list-pop": {
	    "position": "fixed",
	    "top": 550,
	    "left": 316,
	    "width": 120,
	    "height": 120,
	    "textAlign": "center",
	    "justifyContent": "center",
	    "backgroundColor": "rgba(32,35,37,0.6)",
	    "borderBottomLeftRadius": 60,
	    "borderBottomRightRadius": 60,
	    "borderTopLeftRadius": 60,
	    "borderTopRightRadius": 60,
	    "paddingLeft": 0,
	    "paddingRight": 0,
	    "paddingTop": 35,
	    "paddingBottom": 35,
	    "color": "#ffffff"
	  },
	  "list-pop-text": {
	    "fontSize": 40,
	    "textAlign": "center",
	    "color": "#ffffff"
	  },
	  "group": {
	    "paddingBottom": 18,
	    "paddingRight": 70,
	    "backgroundColor": "#FBFBFB"
	  },
	  "group-list": {
	    "flexDirection": "row",
	    "marginLeft": 18,
	    "marginTop": 18,
	    "backgroundColor": "#FBFBFB"
	  },
	  "group-item": {
	    "width": 146,
	    "height": 64,
	    "borderWidth": 1,
	    "borderColor": "#e0e0e0",
	    "marginRight": 18,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "backgroundColor": "#FFFFFF"
	  },
	  "item-content": {
	    "flexDirection": "column"
	  },
	  "item-name": {
	    "fontSize": 24,
	    "lineHeight": 26,
	    "color": "#333333"
	  },
	  "item-desc": {
	    "marginTop": 2,
	    "color": "#999999",
	    "fontSize": 20,
	    "textAlign": "center"
	  },
	  "location-icon": {
	    "width": 32,
	    "height": 32,
	    "marginRight": 8
	  }
	}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	var Util = __webpack_require__(220);
	module.exports = {
	  props: {
	    height: {
	      type: [Number, String],
	      default: Util.getPageHeight()
	    },
	    normalList: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    onlyShowList: {
	      type: Boolean,
	      default: false
	    },
	    showIndex: {
	      type: Boolean,
	      default: true
	    },
	    navStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    hotListConfig: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    // 城市选择子组件 特殊情况支持
	    cityLocationConfig: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    formatList: function formatList() {
	      var normalList = this.normalList,
	          hotListConfig = this.hotListConfig,
	          cityLocationConfig = this.cityLocationConfig;

	      return Util.formatTotalList(normalList, hotListConfig, cityLocationConfig);
	    }
	  },
	  data: function data() {
	    return {
	      popKeyShow: false,
	      popKey: '',
	      navOffsetY: 0,
	      timer: null
	    };
	  },
	  methods: {
	    itemClicked: function itemClicked(item) {
	      this.$emit('wxcIndexlistItemClicked', {
	        item: item
	      });
	    },
	    go2Key: function go2Key(key) {
	      var _this = this;

	      var keyEl = this.$refs['index-item-title-' + key][0];
	      dom.scrollToElement(keyEl, {
	        offset: 0
	      });
	      this.popKey = key;
	      this.popKeyShow = true;
	      this.timer && clearTimeout(this.timer);
	      this.timer = setTimeout(function () {
	        _this.popKeyShow = false;
	      }, 600);
	    }
	  }
	};

/***/ }),
/* 220 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.formatTotalList = formatTotalList;
	exports.arrayChunk = arrayChunk;
	exports.getSpecialData = getSpecialData;
	exports.getPageHeight = getPageHeight;
	exports.isWeb = isWeb;
	/**
	 * 根据26个字母取每一项首字母对数据进行排序,处理数据变换
	 * @param  {object}
	 * @return {[array]}
	 */
	function formatTotalList(source, hotListConfig, cityLocationConfig) {
	  var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	  var res = [];
	  LETTERS.split('').forEach(function (letter) {
	    var _data = source.filter(function (item) {
	      if (item.pinYin) {
	        return item.pinYin.slice(0, 1).toLowerCase() === letter.toLowerCase();
	      } else if (item.py) {
	        return item.py.slice(0, 1).toLowerCase() === letter.toLowerCase();
	      } else {
	        return false;
	      }
	    });
	    if (_data.length) {
	      res.push({
	        title: letter,
	        data: _data,
	        type: 'list'
	      });
	    }
	  });

	  // 处理热门数据
	  var hotList = getSpecialData(hotListConfig);
	  hotList && res.unshift(hotList);

	  // 处理特殊定位数据
	  var cityLocation = getSpecialData(cityLocationConfig);
	  cityLocation && res.unshift(cityLocation);

	  return res;
	}

	/**
	 * 分割数组
	 * @param arr 被分割数组
	 * @param size 分割数组的长度
	 * @returns {Array}
	 */
	function arrayChunk() {
	  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

	  var groups = [];
	  if (arr && arr.length > 0) {
	    groups = arr.map(function (e, i) {
	      return i % size === 0 ? arr.slice(i, i + size) : null;
	    }).filter(function (e) {
	      return e;
	    });
	  }
	  return groups;
	}

	function getSpecialData(data) {
	  if (data && data.type && data.list && data.list.length > 0) {
	    var type = data.type,
	        title = data.title,
	        list = data.list;

	    var res = {
	      title: title,
	      type: type,
	      data: type === 'group' ? arrayChunk(list) : list
	    };
	    return res;
	  } else {
	    return null;
	  }
	}

	function getPageHeight() {
	  var env = weex.config.env;

	  var navHeight = isWeb() ? 0 : 130;
	  return env.deviceHeight / env.deviceWidth * 750 - navHeight;
	}

	function isWeb() {
	  var platform = weex.config.env.platform;

	  return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
	}

/***/ }),
/* 221 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-index-list"]
	  }, [_c('list', {
	    staticClass: ["index-list"],
	    style: {
	      height: _vm.height + 'px'
	    }
	  }, _vm._l((_vm.formatList), function(v, i) {
	    return _c('cell', {
	      key: i,
	      ref: 'index-item-title-' + v.title,
	      refInFor: true,
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [(!_vm.onlyShowList) ? _c('text', {
	      class: ['index-list-title', v.type && v.type == 'group' && 'group-title']
	    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (v.type && v.type == 'group' && !_vm.onlyShowList) ? _c('div', {
	      staticClass: ["group"]
	    }, _vm._l((v.data), function(group, index) {
	      return _c('div', {
	        key: index,
	        staticClass: ["group-list"]
	      }, _vm._l((group), function(item, i) {
	        return _c('div', {
	          key: i,
	          staticClass: ["group-item"],
	          on: {
	            "click": function($event) {
	              _vm.itemClicked(item)
	            }
	          }
	        }, [(item.isLocation) ? _c('image', {
	          staticClass: ["location-icon"],
	          attrs: {
	            "src": "//gw.alicdn.com/tfs/TB1JUiUPFXXXXXUXXXXXXXXXXXX-32-32.png"
	          }
	        }) : _vm._e(), _c('div', {
	          staticClass: ["item-content"]
	        }, [_c('text', {
	          staticClass: ["item-name"]
	        }, [_vm._v(_vm._s(item.name))]), (item.desc) ? _c('text', {
	          staticClass: ["item-desc"]
	        }, [_vm._v(_vm._s(item.desc))]) : _vm._e()])])
	      }))
	    })) : _vm._e(), (v.type === 'list') ? _c('div', _vm._l((v.data), function(item, index) {
	      return _c('div', {
	        key: index,
	        staticClass: ["index-list-item"],
	        on: {
	          "click": function($event) {
	            _vm.itemClicked(item)
	          }
	        }
	      }, [_c('text', {
	        staticClass: ["title"]
	      }, [_vm._v(_vm._s(item.name))]), _c('text', {
	        staticClass: ["desc"]
	      }, [_vm._v(_vm._s(item.desc))])])
	    })) : _vm._e()])
	  })), (_vm.showIndex && !_vm.onlyShowList) ? _c('div', {
	    staticClass: ["index-list-nav"],
	    style: _vm.navStyle
	  }, _vm._l((_vm.formatList), function(item, index) {
	    return _c('text', {
	      key: index,
	      staticClass: ["list-nav-key"],
	      attrs: {
	        "title": item.title
	      },
	      on: {
	        "click": function($event) {
	          _vm.go2Key(item.title)
	        }
	      }
	    }, [_vm._v(_vm._s(item.title))])
	  })) : _vm._e(), (_vm.popKeyShow) ? _c('div', {
	    staticClass: ["index-list-pop"]
	  }, [_c('text', {
	    staticClass: ["list-pop-text"]
	  }, [_vm._v(_vm._s(_vm.popKey))])]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(223);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(224)
	)

	/* script */
	__vue_exports__ = __webpack_require__(225)

	/* template */
	var __vue_template__ = __webpack_require__(237)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4b9efc55"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 224 */
/***/ (function(module, exports) {

	module.exports = {
	  "indicator": {
	    "position": "absolute",
	    "itemColor": "rgba(255, 195, 0, .5)",
	    "itemSelectedColor": "#ffc300",
	    "itemSize": 20,
	    "height": 20,
	    "bottom": 24
	  }
	}

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _wxcMask = __webpack_require__(226);

	var _wxcMask2 = _interopRequireDefault(_wxcMask);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  components: {
	    WxcMask: _wxcMask2.default
	  },
	  props: {
	    width: {
	      type: [Number, String],
	      default: 750
	    },
	    height: {
	      type: [Number, String],
	      default: 750
	    },
	    show: {
	      type: Boolean,
	      default: false
	    },
	    imageList: Array,
	    indicatorColor: {
	      type: Object,
	      default: function _default() {
	        return {
	          'item-color': 'rgba(255, 195, 0, .5)',
	          'item-selected-color': '#ffc300',
	          'item-size': '20px'
	        };
	      }
	    }
	  },
	  computed: {
	    indicatorStyle: function indicatorStyle() {
	      return Object.assign({
	        width: this.width + 'px'
	      }, this.indicatorColor);
	    }
	  },
	  data: function data() {
	    return {
	      showClose: false
	    };
	  },
	  methods: {
	    maskOverlayClick: function maskOverlayClick() {
	      this.$emit('wxcLightboxOverlayClicked', {});
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(227);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(228)
	)

	/* script */
	__vue_exports__ = __webpack_require__(229)

	/* template */
	var __vue_template__ = __webpack_require__(236)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6ffcea8c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 228 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "fixed",
	    "width": 750,
	    "zIndex": 99999
	  },
	  "wxc-mask": {
	    "position": "fixed",
	    "top": 300,
	    "left": 60,
	    "width": 702,
	    "height": 800
	  },
	  "mask-bottom": {
	    "width": 100,
	    "height": 100,
	    "backgroundColor": "rgba(0,0,0,0)",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "mask-close-icon": {
	    "width": 64,
	    "height": 64
	  }
	}

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _wxcOverlay = __webpack_require__(230);

	var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	var icon = __webpack_require__(235);

	module.exports = {
	  components: { WxcOverlay: _wxcOverlay2.default },
	  props: {
	    height: {
	      type: [String, Number],
	      default: 800
	    },
	    width: {
	      type: [String, Number],
	      default: 702
	    },
	    show: {
	      type: Boolean,
	      default: false
	    },
	    showClose: {
	      type: Boolean,
	      default: false
	    },
	    duration: {
	      type: [String, Number],
	      default: 300
	    },
	    hasOverlay: {
	      type: Boolean,
	      default: true
	    },
	    hasAnimation: {
	      type: Boolean,
	      default: true
	    },
	    timingFunction: {
	      type: Array,
	      default: function _default() {
	        return ['ease-in', 'ease-out'];
	      }
	    },
	    overlayCfg: {
	      type: Object,
	      default: function _default() {
	        return {
	          hasAnimation: true,
	          timingFunction: ['ease-in', 'ease-out'],
	          duration: 300,
	          opacity: 0.6
	        };
	      }
	    },
	    borderRadius: {
	      type: [String, Number],
	      default: 0
	    },
	    overlayCanClose: {
	      type: Boolean,
	      default: true
	    },
	    maskBgColor: {
	      type: String,
	      default: '#ffffff'
	    }
	  },
	  data: function data() {
	    return {
	      closeIcon: icon.closeIcon,
	      maskTop: 264,
	      opacity: 0
	    };
	  },
	  computed: {
	    mergeOverlayCfg: function mergeOverlayCfg() {
	      return Object.assign({}, this.overlayCfg, {
	        hasAnimation: this.hasAnimation
	      });
	    },
	    maskStyle: function maskStyle() {
	      var width = this.width,
	          height = this.height,
	          showClose = this.showClose,
	          hasAnimation = this.hasAnimation,
	          opacity = this.opacity;

	      var newHeight = showClose ? height - 0 + 100 : height;
	      var _weex$config$env = weex.config.env,
	          deviceHeight = _weex$config$env.deviceHeight,
	          deviceWidth = _weex$config$env.deviceWidth,
	          platform = _weex$config$env.platform;

	      var _deviceHeight = deviceHeight || 1334;
	      var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
	      var navHeight = isWeb ? 0 : 130;
	      var pageHeight = _deviceHeight / deviceWidth * 750 - navHeight;
	      return {
	        width: width + 'px',
	        height: newHeight + 'px',
	        left: (750 - width) / 2 + 'px',
	        top: (pageHeight - height) / 2 + 'px',
	        opacity: hasAnimation ? opacity : 1
	      };
	    },
	    contentStyle: function contentStyle() {
	      return {
	        width: this.width + 'px',
	        backgroundColor: this.maskBgColor,
	        height: this.height + 'px',
	        borderRadius: this.borderRadius + 'px'
	      };
	    },
	    shouldShow: function shouldShow() {
	      var _this = this;

	      var show = this.show,
	          hasAnimation = this.hasAnimation;

	      hasAnimation && setTimeout(function () {
	        _this.appearMask(show);
	      }, 50);
	      return show;
	    }
	  },
	  methods: {
	    closeIconClicked: function closeIconClicked() {
	      this.appearMask(false);
	    },
	    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
	      if (this.hasAnimation) {
	        this.appearMask(false);
	        this.$emit('wxcOverlayBodyClicking', {});
	      }
	    },
	    wxcOverlayBodyClicked: function wxcOverlayBodyClicked() {
	      if (!this.hasAnimation) {
	        this.appearMask(false);
	        this.$emit('wxcOverlayBodyClicked', {});
	      }
	    },
	    needEmit: function needEmit() {
	      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      !bool && this.$emit('wxcMaskSetHidden', {});
	    },
	    appearMask: function appearMask(bool) {
	      var _this2 = this;

	      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
	      var hasAnimation = this.hasAnimation,
	          timingFunction = this.timingFunction;

	      var maskEl = this.$refs['wxc-mask'];
	      if (hasAnimation && maskEl) {
	        animation.transition(maskEl, {
	          styles: {
	            opacity: bool ? 1 : 0
	          },
	          duration: duration,
	          timingFunction: timingFunction[bool ? 0 : 1],
	          delay: 0
	        }, function () {
	          _this2.needEmit(bool);
	        });
	      } else {
	        this.needEmit(bool);
	      }
	    }
	  }
	};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(231);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(232)
	)

	/* script */
	__vue_exports__ = __webpack_require__(233)

	/* template */
	var __vue_template__ = __webpack_require__(234)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4a90a78c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 232 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-overlay": {
	    "width": 750,
	    "position": "fixed",
	    "left": 0,
	    "top": 0,
	    "bottom": 0,
	    "right": 0
	  }
	}

/***/ }),
/* 233 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	module.exports = {
	  props: {
	    show: {
	      type: Boolean,
	      default: true
	    },
	    hasAnimation: {
	      type: Boolean,
	      default: true
	    },
	    duration: {
	      type: [Number, String],
	      default: 300
	    },
	    timingFunction: {
	      type: Array,
	      default: function _default() {
	        return ['ease-in', 'ease-out'];
	      }
	    },
	    opacity: {
	      type: [Number, String],
	      default: 0.6
	    },
	    canAutoClose: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    overlayStyle: function overlayStyle() {
	      return {
	        opacity: this.hasAnimation ? 0 : 1,
	        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
	      };
	    },
	    shouldShow: function shouldShow() {
	      var _this = this;

	      var show = this.show,
	          hasAnimation = this.hasAnimation;

	      hasAnimation && setTimeout(function () {
	        _this.appearOverlay(show);
	      }, 50);
	      return show;
	    }
	  },
	  methods: {
	    overlayClicked: function overlayClicked(e) {
	      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
	    },
	    appearOverlay: function appearOverlay(bool) {
	      var _this2 = this;

	      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
	      var hasAnimation = this.hasAnimation,
	          timingFunction = this.timingFunction,
	          canAutoClose = this.canAutoClose;

	      var needEmit = !bool && canAutoClose;
	      needEmit && this.$emit('wxcOverlayBodyClicking', {});
	      var overlayEl = this.$refs['wxc-overlay'];
	      if (hasAnimation && overlayEl) {
	        animation.transition(overlayEl, {
	          styles: {
	            opacity: bool ? 1 : 0
	          },
	          duration: duration,
	          timingFunction: timingFunction[bool ? 0 : 1],
	          delay: 0
	        }, function () {
	          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
	        });
	      } else {
	        needEmit && this.$emit('wxcOverlayBodyClicked', {});
	      }
	    }
	  }
	};

/***/ }),
/* 234 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.show) ? _c('div', {
	    ref: "wxc-overlay",
	    staticClass: ["wxc-overlay"],
	    style: _vm.overlayStyle,
	    attrs: {
	      "hack": _vm.shouldShow
	    },
	    on: {
	      "click": _vm.overlayClicked
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 235 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by Tw93 on 2016/10/29.
	 */
	module.exports = {
	  closeIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAGIElEQVR4Xu1b3VUbRxSe0ex7nAqCKwhCs8/BFdhUEFyBoQLjCgwVBFcQqMDwvCNkVxBRQeBd0s35dGZ1VqP53xEiB+YcHmytdu797v+POHvhh79w/tkrAK8a8AQITCaT/fl8/gdjbJ8xttf5694+ZYxNiegH53wqhLgdDoc/tk3e1kygaZr3nPNjxtghY+xNJiMPjLEbIrqs6/o68x3erxUFYDKZvFksFp+I6KQH0y6CHzjn54PB4GI4HAKYIqcIAFtm3GS0KBC9AVBKfWCMfdV27ZLKo1Zl2PRNVVUPpn3DT8xmM5jKIeccvgKm84tHzPAZp1LKqz6q0AuApmm+cs6h7rYDpq+EEOe5zkw7T7wfIFvBIKLzuq5Pc0HIAgAqP5vNvmtJmXc/gqiqqsB4EVvV951osDeAQOSoqupdzn3JAGip/O1Q+QshxFkOITESBBDz+fyMMfbJfF6D8DFV25IA0Mx/t3j4eyHEh9TLY5i2PaPpgO3/Znz+IISAJkTnD9EAaPQnFslfCyGOtyV1F0iankvG2PvuM6nmEA1A0zQTi81/k1Ii2dnZUUoBhD9NEOq6HsYQFQWAUurcYnc7Z75l0AYCY+xCSumKUCtsggDoOA+n1z3XUkqEpmdzlFLwCaY5vKvr+sZHpBcAh93D4e0/tc2HkNa0wvl1HSOKqqGPVi8ATdOccc4/dy/XL4z2siHCS36uowMc9eoQ0Ze6rhE6rccJgEb0HyPkRdlVSaZS32XxVwiNb11a4ATAIv1HIcReSPW1FFAbMI2+1wZDDLbvI6I3VVUFEx0tONQJq4zRpwVOAJRS/3alH1KljkeGefze/ptz/nE0GiFUJR9L4vUgpfw19CKL8JzfswJg8fxR0gdhSimgv5ah5YDgyjqllMHIZdMCxtiRrXJ0AWCGlOiYPx6Pj4noL1NKKSC4mE95hyU3sPLgAmBN/VM9vwsEIgrG5RLMA/ymadBXQN3SHqsZbABgCSWPUsrknp4DBG+xUor5jj9COb5yhjZBbgAwHo9PiGjpxfXJzvpSQCjNvPZHa6bMOT8djUZI61dnAwDTdmK9v8szx4CwDea1GZiJ3EYeswFA0zQ3nHP08Jcnxm5DYckHwmKx2O/rNF33m36AiG7rukav0asByP4wvFieVAeYqgm29nmKt/eBb3GEUynl2xAA1H0gJu6GNKD93BUd1gjqkTjZ6FBKefmx+YCtAQACfSCUknwXiP8TAMn9vBjNe1YARJhAcRByAFjL5bfsBG1CLAaCxQneSylXDh6X7zIMMti8DrVm7VAEhNwwuNZl3VIitGS+LZNjkqUYezefsZTF4UToCVLhNeYDIbKXJpiN0qhU2FIMRTUhTPRzyuLSmmA2daKKITCilApWUT6VzGG+tCZYHKC1qn2WDZESmtC3IYKhR3cY4u2sGpnXmvYsQ01GeusAYSOXt2mio6Md3xKzmUFsNDDNJ4d5nznE1Ca2jrarqZPSFo/SAt1QbZsOJ31XWLqaYPPipgbYpJ/VFnd0VncyGAEtYDQ0k9Caaw5yvR3t19GYL5zlDhxzsra+38kd5AaHDI7x+JWU8qgv0SW/r5RC1Fob2ce084IAOOwK/30ppVwWM7s+SikUU+amSpS/igJAg7A289NM7xwEB/M/pZRYtgyeaAC0jWHSuxp86rdjGRJT2yI7gUGK9QOaHqj9WpeXMfZTCHEYS080ALhXF0oAwVxWxCbGUcp6WiyjjkwP6/e2XUWEPDAfvcCRBEAHBPQMTE3ADAEbol9i0U8FQW+Mfnas50LyWNeLZh73JwOgQcDGps0c8HHRbe72vsAafpLad4HPAqB9gWN9rv0YPuGKiL6FNrVcmqBLWuwAIry5BrRR3t51Ry8AdHQAcUg/zbXV7p3LX35wzvFzmOXKzMHBwW33gbu7u+U4jogOiahdl/dNpe+J6DgX3Pbu3gC0KjqbzZzb3Km2Hni+6DZ6EQBagkNr7T2BKMp4UQ2wMaZT6PZHU75ffvhwWf7oAn99y+qt+YAYqSJ/WCwWsO092DfnHMMJ02fApqfaT0wHg8FNakiLocV8pqgJ5BCw6++8ArBrCez6/hevAf8BQp52fZ98hnoAAAAASUVORK5CYII="
	};

/***/ }),
/* 236 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
	    attrs: {
	      "show": _vm.show && _vm.hasOverlay
	    },
	    on: {
	      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking,
	      "wxcOverlayBodyClicked": _vm.wxcOverlayBodyClicked
	    }
	  }, 'wxc-overlay', _vm.mergeOverlayCfg)) : _vm._e(), (_vm.show) ? _c('div', {
	    ref: "wxc-mask",
	    staticClass: ["wxc-mask"],
	    style: _vm.maskStyle,
	    attrs: {
	      "hack": _vm.shouldShow
	    }
	  }, [_c('div', {
	    style: _vm.contentStyle
	  }, [_vm._t("default")], 2), (_vm.showClose) ? _c('div', {
	    staticClass: ["mask-bottom"],
	    style: {
	      width: _vm.width + 'px'
	    },
	    on: {
	      "click": _vm.closeIconClicked
	    }
	  }, [_c('image', {
	    staticClass: ["mask-close-icon"],
	    attrs: {
	      "src": _vm.closeIcon
	    }
	  })]) : _vm._e()]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 237 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('wxc-mask', {
	    attrs: {
	      "width": _vm.width,
	      "height": _vm.height,
	      "maskBgColor": "transparent",
	      "overlayOpacity": "0.8",
	      "show": _vm.show,
	      "showClose": _vm.showClose
	    },
	    on: {
	      "wxcMaskSetHidden": _vm.maskOverlayClick
	    }
	  }, [(_vm.show) ? _c('slider', {
	    style: {
	      height: _vm.height + 'px'
	    },
	    attrs: {
	      "autoPlay": "false"
	    }
	  }, [_vm._l((_vm.imageList), function(v, index) {
	    return _c('div', {
	      key: index,
	      style: {
	        height: _vm.height + 'px'
	      }
	    }, [_c('image', {
	      style: {
	        height: _vm.height + 'px',
	        width: _vm.width + 'px'
	      },
	      attrs: {
	        "resize": "cover",
	        "src": v.src
	      }
	    })])
	  }), _c('indicator', {
	    staticClass: ["indicator"],
	    style: _vm.indicatorStyle
	  })], 2) : _vm._e()])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(239);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(240)
	)

	/* script */
	__vue_exports__ = __webpack_require__(241)

	/* template */
	var __vue_template__ = __webpack_require__(244)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-loading\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e721e510"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 240 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-loading": {
	    "position": "fixed",
	    "left": 287,
	    "top": 500,
	    "zIndex": 9999
	  },
	  "loading-box": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 20,
	    "width": 175,
	    "height": 175,
	    "backgroundColor": "rgba(0,0,0,0.8)"
	  },
	  "trip-loading": {
	    "backgroundColor": "rgba(0,0,0,0.2)"
	  },
	  "loading-trip-image": {
	    "height": 75,
	    "width": 75
	  },
	  "loading-text": {
	    "color": "#ffffff",
	    "fontSize": 24,
	    "lineHeight": 30,
	    "height": 30,
	    "marginTop": 8,
	    "textOverflow": "ellipsis",
	    "width": 140,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _icon = __webpack_require__(242);

	var Util = __webpack_require__(243); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var appVersion = weex.config.env.appVersion || '0';
	var needShowPng = Util.compareVersion('8.2.4', appVersion) && Util.isTrip() && Util.isAndroid();
	module.exports = {
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    loadingText: {
	      type: String,
	      default: ''
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    interval: {
	      type: [Number, String],
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      showLoading: false,
	      tid: 0
	    };
	  },
	  computed: {
	    showText: function showText() {
	      return this.loadingText || needShowPng;
	    },
	    hackText: function hackText() {
	      return this.loadingText ? this.loadingText : needShowPng ? '正在加载中...' : '';
	    },
	    loading: function loading() {
	      var loading = {};
	      switch (this.type) {
	        case 'trip':
	          loading = {
	            url: needShowPng ? _icon.PNG : _icon.GIF,
	            class: 'trip-loading'
	          };
	          break;
	        default:
	          loading = {
	            url: _icon.BLACK_GIF,
	            class: 'default-loading'
	          };
	      }
	      return loading;
	    },
	    topPosition: function topPosition() {
	      return (Util.getPageHeight() - 200) / 2;
	    },
	    needShow: function needShow() {
	      this.setShow();
	      return this.show;
	    }
	  },
	  methods: {
	    setShow: function setShow() {
	      var _this = this;

	      var interval = this.interval,
	          show = this.show,
	          showLoading = this.showLoading;

	      var stInterval = parseInt(interval);
	      clearTimeout(this.tid);
	      if (show) {
	        if (showLoading) {
	          return;
	        }
	        if (stInterval === 0) {
	          this.showLoading = true;
	        } else {
	          this.tid = setTimeout(function () {
	            _this.showLoading = true;
	          }, stInterval);
	        }
	      } else {
	        this.showLoading = false;
	      }
	    }
	  }
	};

/***/ }),
/* 242 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by Tw93 on 2016/10/29.
	 */
	module.exports = {
	  GIF: "//img.alicdn.com/tfs/TB1aks3PpXXXXcXXFXXXXXXXXXX-150-150.gif",
	  BLACK_GIF: "//img.alicdn.com/tfs/TB1Ep_9NVXXXXb8XVXXXXXXXXXX-74-74.gif",
	  PNG: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAMAAAAPkIrYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAI6UExURUxpcf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5U/27QAAAC9dFJOUwBCaz78AvsB/f7E4Egk9tCgLbAfVSmu7AjtC/HqvQQoDpSeNzMbswYhieZk9fkNuuVY93UZStFFr5tpqzysK7VOyLLLCpoD1n6GGnoYjRLp+GwPmRx9Q9J/8+cVIsrcHdsHbfITbtVNw5f0cyCRDKaMBbmkikA/gkldpXseUceTt5iiFuSLtDifhLw7JipSFICpg3jZ092+zDFau3I0lW/G2t4JEIHJYKNqrV7o4WVGpyV8Zzac7i/Y4sJUOVnIpSYAAAM1SURBVFjD7ZjVWxtBFMUDJFlCgACBAAlQ3IprgVJaChRanCLFoVCgQN3d3d3d3f38b72B9mOzzCY7+8JL7tueud9vNzNzz52JRuMOd8xV5I3kTlp6jJ3f/L3hPLKccsxNQVlQHOXyoOWtJnBFtRxp4UX9dIbt1+Tw7z8TXc1hOkmKIA567w42KfDAFCct8eVHQdGsJgDaaNZAdNHUNF/PDlO8QvOBpSzdy0ggbewZntW2ACkMeYX9oxaEcG2cpNXA3VlqVCWRQoM5N2E20DsbFUSoyFreDf0AaJVqQgChAjbyojyAnC6pWEOoDdxlJtwAWqSir4FmXeBm0YbwT5CWcQRQsI4bdT4cuBYTE7NbLK4HIsz8TnLiXz3uEpcgPRfyo7z+13axSOwBNqkwOF9PimEtEDijbQUM8Wodsw1IFS3aMaBEtfvSFt8vsj4DvOepRSVTDYt+033AR/Vn1QH7RI8+wGW1qAl/YPHMo1XvsBB8UU5OKDiU51u1KHIcQ5zYAYExlajAtUClWCCz+awOVdsLrLGKlVHAQxXK3A+scnR06hfdalBffgKN+Y4a+cYQPynqKS1/jq9ETQeSuFGnr9obTZtUJv5jblYpoTLzZsnU4FZys24DlxiW3gB852Y9BFh28EPFntClw8A6cmQCvM1a00cGyNK/AoMqnJ5pU+PABxV98YXMO97wsl4B4yzdSi57lg81QP7gxxwhX23iY+WTP7BHcoFEPlYLUMMe8QNnH8ogO4iTGYsEDvGwOoB+uTPRXkCfrBxVbwNuyQ1WLQMOKmelAO062dEROokrrskQx5bIqskIhcbTfAVY4izh8BFKUOSuQiI1jEVOU46TUxcpOa9up+56zkVOMZluqdWlbx2ltJMuXxhLWaY9znOiyyipTOfaKrdQXsM2Zyl+tHdQUqFkWnc2UqpFdl7rU9Jori4ovATEdRLMezPTTTKqbfYrqnI3T7DYT9j6U3ck974nwbHh9hHTTZ6yLSyYPrEbx955JA+FDfTF5z/vGNVOaaGeVbyH9kgD867/aLBCwx/m3Gda6Z8Z97wEjcrIeP8pwMcYmqO1pbYH1b3u1rjDHXMbfwFhDJatfL699wAAAABJRU5ErkJggg==",
	  PART: '//gtms02.alicdn.com/tfs/TB1y4QbSXXXXXbgapXXXXXXXXXX-50-50.gif'
	};

/***/ }),
/* 243 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.compareVersion = compareVersion;
	exports.isTrip = isTrip;
	exports.isAndroid = isAndroid;
	exports.isWeb = isWeb;
	exports.getPageHeight = getPageHeight;
	/**
	 * Created by Tw93 on 2017/6/26.
	 */

	function compareVersion() {
	  var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0.0.0";
	  var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "0.0.0";

	  if (currVer === promoteVer) return true;
	  var currVerArr = currVer.split(".");
	  var promoteVerArr = promoteVer.split(".");
	  var len = Math.max(currVerArr.length, promoteVerArr.length);
	  for (var i = 0; i < len; i++) {
	    var proVal = ~~promoteVerArr[i];
	    var curVal = ~~currVerArr[i];
	    if (proVal < curVal) {
	      return true;
	    } else if (proVal > curVal) {
	      return false;
	    }
	  }
	  return false;
	}

	function isTrip() {
	  var appName = weex.config.env.appName;

	  return appName === 'LX';
	}

	function isAndroid() {
	  var platform = weex.config.env.platform;

	  return platform.toLowerCase() === 'android';
	}

	function isWeb() {
	  var platform = weex.config.env.platform;

	  return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
	}

	function getPageHeight() {
	  var env = weex.config.env;

	  var navHeight = isWeb() ? 0 : 130;
	  return env.deviceHeight / env.deviceWidth * 750 - navHeight;
	}

/***/ }),
/* 244 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "hackShow": _vm.needShow
	    }
	  }, [(_vm.showLoading) ? _c('div', {
	    staticClass: ["wxc-loading"],
	    style: {
	      top: _vm.topPosition + 'px'
	    }
	  }, [_c('div', {
	    class: ['loading-box', _vm.loading.class]
	  }, [_c('image', {
	    staticClass: ["loading-trip-image"],
	    attrs: {
	      "src": _vm.loading.url,
	      "resize": "contain",
	      "quality": "original"
	    }
	  }), (_vm.showText) ? _c('text', {
	    staticClass: ["loading-text"]
	  }, [_vm._v(_vm._s(_vm.hackText) + " ")]) : _vm._e()])]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(246);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(247)

	/* template */
	var __vue_template__ = __webpack_require__(248)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-part-loading\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _icon = __webpack_require__(242);

	module.exports = {
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: [Number, String],
	      default: 36
	    },
	    height: {
	      type: [Number, String],
	      default: 36
	    }
	  },
	  data: function data() {
	    return {
	      PART: _icon.PART
	    };
	  },
	  computed: {
	    loadingStyle: function loadingStyle() {
	      var height = this.height,
	          width = this.width;

	      return {
	        height: height + 'px',
	        width: width + 'px'
	      };
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 248 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.show) ? _c('image', {
	    style: _vm.loadingStyle,
	    attrs: {
	      "src": _vm.PART,
	      "resize": "contain",
	      "quality": "original"
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(250);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(251)
	)

	/* script */
	__vue_exports__ = __webpack_require__(252)

	/* template */
	var __vue_template__ = __webpack_require__(254)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-09602898"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 251 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-minibar": {
	    "width": 750,
	    "height": 90,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "backgroundColor": "#009ff0"
	  },
	  "left": {
	    "width": 90
	  },
	  "middle-title": {
	    "fontSize": 30,
	    "color": "#ffffff",
	    "height": 36,
	    "lineHeight": 34
	  },
	  "right": {
	    "width": 80
	  },
	  "left-button": {
	    "width": 21,
	    "height": 36,
	    "marginLeft": 40
	  },
	  "right-button": {
	    "width": 32,
	    "height": 32,
	    "marginRight": 16
	  },
	  "right-text": {
	    "width": 80,
	    "marginRight": 20,
	    "fontSize": 28,
	    "textAlign": "left",
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var icon = __webpack_require__(253);
	var Navigator = weex.requireModule('navigator');

	module.exports = {
	  props: {
	    backgroundColor: {
	      type: String,
	      default: '#FFC900'
	    },
	    leftButton: {
	      type: String,
	      default: icon.iconArrow
	    },
	    textColor: {
	      type: String,
	      default: '#3D3D3D'
	    },
	    rightButton: {
	      type: String,
	      default: ''
	    },
	    title: {
	      type: String,
	      default: '阿里旅行'
	    },
	    rightText: {
	      type: String,
	      default: ''
	    },
	    useDefaultReturn: {
	      type: Boolean,
	      default: true
	    },
	    show: {
	      type: Boolean,
	      default: true
	    }
	  },
	  methods: {
	    leftButtonClicked: function leftButtonClicked() {
	      var self = this;
	      if (self.useDefaultReturn) {
	        Navigator.pop({}, function (e) {});
	      }
	      self.$emit('wxcMinibarLeftButtonClicked', {});
	    },
	    rightButtonClicked: function rightButtonClicked() {
	      var self = this;
	      if (self.rightText || self.rightButton) {
	        self.$emit('wxcMinibarRightButtonClicked', {});
	      }
	    }
	  }
	};

/***/ }),
/* 253 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by Tw93 on 2016/10/29.
	 */
	module.exports = {
	  iconArrow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUxpcTw8PD09PQAAADw8PDw8PDMzMz09PTw8PDw8PD09PWFW+gwAAAAKdFJOUwCAoAJ4/gWX8prBgCgwAAAAMElEQVQoz2NgQAcsHJwYYgyMXFysbFgEudixCTIxjwqSIYhDdFSYKsLsRKZqSA4AAKEHBO9H54HuAAAAAElFTkSuQmCC"
	};

/***/ }),
/* 254 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.show) ? _c('div', {
	    staticClass: ["wxc-minibar"],
	    style: {
	      backgroundColor: _vm.backgroundColor
	    }
	  }, [_c('div', {
	    staticClass: ["left"],
	    on: {
	      "click": _vm.leftButtonClicked
	    }
	  }, [_c('image', {
	    staticClass: ["left-button"],
	    attrs: {
	      "src": _vm.leftButton
	    }
	  })]), _c('text', {
	    staticClass: ["middle-title"],
	    style: {
	      color: _vm.textColor
	    }
	  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
	    staticClass: ["right"],
	    on: {
	      "click": _vm.rightButtonClicked
	    }
	  }, [(_vm.rightText) ? _c('text', {
	    staticClass: ["right-text"],
	    style: {
	      color: _vm.textColor
	    }
	  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e(), (_vm.rightButton) ? _c('image', {
	    staticClass: ["right-button"],
	    attrs: {
	      "src": _vm.rightButton
	    }
	  }) : _vm._e()])]) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(256);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(257)
	)

	/* script */
	__vue_exports__ = __webpack_require__(258)

	/* template */
	var __vue_template__ = __webpack_require__(267)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-647b8638"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 257 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-lottery-rain": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "backgroundColor": "rgba(133,11,11,0.8)"
	  }
	}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rainItem = __webpack_require__(259);

	var _rainItem2 = _interopRequireDefault(_rainItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { RainItem: _rainItem2.default },
	  props: {
	    picList: Array,
	    config: Object,
	    wrapStyle: Object
	  },
	  methods: {
	    wxcLotteryRainCaught: function wxcLotteryRainCaught(e) {
	      this.$emit('wxcLotteryRainCaught', { rainId: e.rainId });
	    },
	    destroy: function destroy() {
	      var picList = this.picList;

	      var length = picList.length;
	      for (var i = 0; i < length; i++) {
	        this.$refs['rain-item-' + i][0].destroy();
	      }
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(260)
	)

	/* script */
	__vue_exports__ = __webpack_require__(261)

	/* template */
	var __vue_template__ = __webpack_require__(266)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\rain-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e77391dc"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 260 */
/***/ (function(module, exports) {

	module.exports = {
	  "rain-item": {
	    "position": "absolute",
	    "opacity": 0
	  }
	}

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var Ani = __webpack_require__(262);
	var Region = __webpack_require__(264);
	var CFG = __webpack_require__(265);

	exports.default = {
	  props: {
	    src: String,
	    rainId: [String, Number],
	    config: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    // 合并用户配置和默认
	    cfg: function cfg() {
	      return Object.assign({}, CFG.DEFAULT, this.config);
	    }
	  },
	  data: function data() {
	    return {
	      showItem: false,
	      hiding: false,
	      pos: {},
	      showTimer: null,
	      hideTimer: null,
	      intervalTimer: null
	    };
	  },
	  created: function created() {
	    var _cfg = this.cfg,
	        width = _cfg.width,
	        height = _cfg.height;

	    this.pos = Region.get(width, height);
	  },
	  mounted: function mounted() {
	    this.start();
	  },

	  methods: {
	    start: function start() {
	      var _this = this;

	      var cfg = this.cfg;

	      var random = Math.round(Math.random() * cfg.randomTime);
	      var showTime = cfg.showTime + random;
	      var intervalTime = Math.max(cfg.intervalTime, cfg.showAniTime + showTime + cfg.hideAniTime) + random;

	      this.onShow = function () {
	        _this.hideTimer = setTimeout(function () {
	          _this.hide();
	        }, showTime);
	      };

	      this.onHide = function () {
	        Region.remove(_this.pos);
	        _this.pos = {};
	        _this.showItem = false;
	        _this.hiding = false;
	        var _cfg2 = _this.cfg,
	            width = _cfg2.width,
	            height = _cfg2.height;

	        _this.pos = Region.get(width, height);
	      };

	      this.showTimer = setTimeout(function () {
	        _this.show();
	      }, random);

	      this.intervalTimer = setInterval(function () {
	        _this.show();
	      }, intervalTime);
	    },
	    hide: function hide() {
	      var cfg = this.cfg,
	          rainId = this.rainId;

	      this.hiding = true;
	      clearTimeout(this.showTimer);
	      clearTimeout(this.hideTimer);
	      Ani.hidePig(this.$refs['rain-item-' + rainId], cfg.hideAniTime, this.onHide);
	    },
	    show: function show() {
	      var cfg = this.cfg,
	          rainId = this.rainId;

	      this.showItem = true;
	      Ani.showPig(this.$refs['rain-item-' + rainId], cfg.showAniTime, this.onShow);
	    },
	    caught: function caught() {
	      var _this2 = this;

	      var rainId = this.rainId,
	          hiding = this.hiding;

	      if (hiding) return;
	      clearTimeout(this.showTimer);
	      clearTimeout(this.hideTimer);
	      Ani.shakePig(this.$refs['rain-item-' + rainId], function () {
	        _this2.hide();
	      });
	      this.$emit('wxcLotteryRainCaught', { rainId: rainId });
	    },
	    destroy: function destroy() {
	      Region.remove(this.pos);
	      clearTimeout(this.showTimer);
	      clearTimeout(this.hideTimer);
	      clearInterval(this.intervalTimer);
	      this.showItem = false;
	    }
	  }
	};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.showPig = showPig;
	exports.hidePig = hidePig;
	exports.shakePig = shakePig;
	/**
	 * Created by Tw93 on 2017/09/06.
	 * 红包雨动画类
	 */

	var animation = weex.requireModule('animation');
	var Util = __webpack_require__(263);
	var isIos = Util.isIOS();

	function showPig(ref, duration, callback) {
	  ref && animation.transition(ref, {
	    styles: {
	      transform: 'translate(0, -140px)',
	      opacity: 1
	    },
	    duration: duration,
	    timingFunction: 'ease-in'
	  }, function () {
	    callback && callback();
	  });
	}

	function hidePig(ref, duration, callback) {
	  ref && animation.transition(ref, {
	    styles: {
	      transform: 'translate(0, 0)',
	      opacity: 0
	    },
	    duration: duration,
	    timingFunction: 'ease-out'
	  }, function () {
	    callback && callback();
	  });
	}

	function shakePig(ref, callback) {
	  var duration = isIos ? 20 : 10;
	  ref && animation.transition(ref, {
	    styles: {
	      transform: 'rotate(12deg) translate(0, -140px)'
	    },
	    duration: duration,
	    timingFunction: 'ease-in'
	  }, function () {
	    animation.transition(ref, {
	      styles: {
	        transform: 'rotate(0) translate(0, -140px)'
	      },
	      duration: duration,
	      timingFunction: 'ease-out'
	    }, function () {
	      animation.transition(ref, {
	        styles: {
	          transform: 'rotate(-12deg) translate(0, -140px)'
	        },
	        duration: duration,
	        timingFunction: 'ease-in'
	      }, function () {
	        animation.transition(ref, {
	          styles: {
	            transform: 'rotate(0) translate(0, -140px)'
	          },
	          duration: duration,
	          timingFunction: 'ease-out'
	        }, function () {
	          callback && callback();
	        });
	      });
	    });
	  });
	}

/***/ }),
/* 263 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.isIOS = isIOS;
	exports.isWeb = isWeb;
	exports.getPageHeight = getPageHeight;
	/**
	 * Created by Tw93 on 2017/6/26.
	 */

	function isIOS() {
	  var platform = weex.config.env.platform;

	  return platform.toLowerCase() === 'ios';
	}

	function isWeb() {
	  var platform = weex.config.env.platform;

	  return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
	}

	function getPageHeight() {
	  var env = weex.config.env;

	  var navHeight = isWeb() ? 0 : 130;
	  return env.deviceHeight / env.deviceWidth * 750 - navHeight;
	}

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by Tw93 on 2017/09/06.
	 * 红包雨区域检测类
	 */

	var Util = __webpack_require__(263);

	var Region = {
	  regions: [],
	  isCross: function isCross(region) {
	    var regions = this.regions;


	    region.right = region.left + region.width;
	    region.bottom = region.top + region.height;

	    for (var i = 0; i < regions.length; i++) {
	      var curRegion = regions[i];
	      // 两区域相交
	      curRegion.right = curRegion.left + curRegion.width;
	      curRegion.bottom = curRegion.top + curRegion.height;
	      if (!(region.left > curRegion.right || region.right < curRegion.left || region.bottom < curRegion.top || region.top > curRegion.bottom)) {
	        return true;
	      }
	    }
	    return false;
	  },
	  get: function get(width, height) {
	    if (!width || !height) {
	      return;
	    }
	    var i = 1000;
	    var viewWidth = 750;
	    var viewHeight = Util.getPageHeight();
	    var wrapWidth = viewWidth - width;
	    var wrapHeight = viewHeight - height - 140;
	    wrapHeight = wrapHeight < 0 ? 0 : wrapHeight;
	    wrapWidth = wrapWidth < 0 ? 0 : wrapWidth;

	    var region = {
	      left: -9999,
	      top: -9999,
	      width: width,
	      height: height
	    };
	    while (i--) {
	      region.left = Math.round(Math.random() * wrapWidth);
	      region.top = Math.round(Math.random() * wrapHeight + height);
	      if (!this.isCross(region)) {
	        this.add(region);
	        return region;
	      }
	    }
	  },
	  buildRandom: function buildRandom() {
	    var random = new Date().getTime() + '_' + parseInt(Math.random() * 1000000);
	    return random;
	  },
	  add: function add(region) {
	    var regions = this.regions;

	    region.id = this.buildRandom();
	    regions.push(region);
	  },
	  remove: function remove(region) {
	    var regions = this.regions;

	    if (!region) return;
	    for (var i = 0; i < regions.length; i++) {
	      if (region.id === regions[i].id) {
	        regions.splice(i, 1);
	      }
	    }
	  }
	};
	module.exports = Region;

/***/ }),
/* 265 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DEFAULT = exports.DEFAULT = {
	  intervalTime: 400,
	  hideAniTime: 300,
	  showAniTime: 300,
	  showTime: 400,
	  randomTime: 300,
	  width: 241,
	  height: 206
	};

/***/ }),
/* 266 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.showItem && _vm.src) ? _c('image', {
	    ref: ("rain-item-" + _vm.rainId),
	    staticClass: ["rain-item"],
	    style: _vm.pos,
	    attrs: {
	      "src": _vm.src
	    },
	    on: {
	      "click": _vm.caught
	    }
	  }) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 267 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-lottery-rain"],
	    style: _vm.wrapStyle
	  }, _vm._l((_vm.picList), function(src, i) {
	    return _c('rain-item', {
	      key: "i",
	      ref: ("rain-item-" + i),
	      refInFor: true,
	      attrs: {
	        "src": src,
	        "rainId": i
	      },
	      on: {
	        "wxcLotteryRainCaught": _vm.wxcLotteryRainCaught
	      }
	    })
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(269);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(270)
	)

	/* script */
	__vue_exports__ = __webpack_require__(271)

	/* template */
	var __vue_template__ = __webpack_require__(274)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-759edc37"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 270 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-noticebar": {
	    "width": 750,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "paddingLeft": 24,
	    "backgroundColor": "#FFF7D6",
	    "borderBottomWidth": 1,
	    "borderTopWidth": 1,
	    "borderColor": "#FFEEAE",
	    "borderStyle": "solid",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "noticebar-content": {
	    "color": "#EE9900",
	    "fontSize": 26,
	    "lineHeight": 36,
	    "width": 592,
	    "textOverflow": "ellipsis"
	  },
	  "more-click-content": {
	    "width": 64,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "mode-icon": {
	    "width": 32,
	    "height": 32
	  },
	  "type-icon": {
	    "width": 32,
	    "height": 32
	  }
	}

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var icon = __webpack_require__(272);
	var Utils = __webpack_require__(273);

	module.exports = {
	  props: {
	    notice: {
	      type: String,
	      default: ''
	    },
	    noticeUrl: {
	      type: String,
	      default: ''
	    },
	    mode: {
	      type: String,
	      default: ''
	    },
	    lines: {
	      type: [Number, String],
	      default: 1
	    },
	    type: {
	      type: String,
	      default: ''
	    },
	    spm: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    contentWidth: function contentWidth() {
	      return this.mode ? 605 : 683;
	    },
	    modeIcon: function modeIcon() {
	      var modeIcon = void 0;
	      switch (this.mode) {
	        case 'link':
	          modeIcon = icon.linkIcon;
	          break;
	        case 'closable':
	          modeIcon = icon.closeIcon;
	          break;
	        default:
	          modeIcon = '';
	      }
	      return modeIcon;
	    },
	    typeIcon: function typeIcon() {
	      var typeIcon = void 0;
	      switch (this.type) {
	        case 'success':
	          typeIcon = icon.successIcon;
	          break;
	        case 'error':
	          typeIcon = icon.errorIcon;
	          break;
	        case 'info':
	          typeIcon = icon.infoIcon;
	          break;
	        case 'question':
	          typeIcon = icon.questionIcon;
	          break;
	        case 'warn':
	          typeIcon = icon.warnIcon;
	          break;
	        case 'time':
	          typeIcon = icon.timeIcon;
	          break;
	        case 'redbag':
	          typeIcon = icon.redbag;
	          break;
	        default:
	          typeIcon = '';
	      }
	      return typeIcon;
	    }
	  },
	  data: function data() {
	    return {
	      show: true
	    };
	  },
	  methods: {
	    noticeBarClicked: function noticeBarClicked() {
	      var mode = this.mode,
	          noticeUrl = this.noticeUrl,
	          spm = this.spm;

	      if (mode === 'link' && noticeUrl) {
	        var ttid = weex.config.env.ttid;

	        Utils.goToH5Page(noticeUrl, spm, ttid, true);
	        this.$emit('wxcNoticebarLinkClicked', { url: noticeUrl });
	      }
	    },
	    noticeIconClicked: function noticeIconClicked() {
	      var mode = this.mode;

	      if (mode === 'closable') {
	        this.show = false;
	        this.$emit('wxcNoticebarCloseClicked', {});
	      } else {
	        this.noticeBarClicked();
	      }
	    }
	  }
	};

/***/ }),
/* 272 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by Tw93 on 2016/10/29.
	 */
	module.exports = {
	  closeIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAiklEQVR42u3Uuw2DQBBF0VeCS6AEujWQ4Ab5dADa1JIDfCyLYF5CxJ4bTWq1226b0v/srTmPyz+sY45lyKz4MubV3vr6xxahePumzSMc9wjHPcJxj3DcIxz3CMc9AnGPQNwD8Fj5hYNj5Xj8YjoOEY5DhOMQ4ThEOA4Rjv8tYnume8cxYk+tVvuwE8W1BhjijgxwAAAAAElFTkSuQmCC",

	  linkIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAaUlEQVR42u2XsQ2AMAwEbwRGYjRGoCOu4k0YgUkSRgClywLECvprXN5VLxkxDffBShTF8Go8JZFjAhJ7C4iNMFwRilCEIuaKMDZGcmeWmjj7gLFy4+rkLrnkkkv+5cR62Ma3G/uYiD/yAlUn8FXOOtT+AAAAAElFTkSuQmCC",

	  infoIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAByUlEQVR42sVX7U3DMBC9ERihI7ABbAAb0A1gA9iA/iPmT9mg3YBu0GzQLNC6G4R7yC8KOQlybmIsWYmS3Pe754t4VnyX6xjk+RRkc6rkU68RO91v8A7fyJQrruUKitXIQY20Yza+hQxkLzNeyWOKkorrYyUrVX4f3+SWBnCve4l3+l3Tcybq80VW1CmtNLyFkbHycFDldpBlSbzGme4zlEmRReNB9kw3U1xsMe2ljbNuT0z7jMYJ2IVJPdHuARvKhayJY7E7fgR5DPKCF3r9yFDWemTYHbDZr/3BGT3lamxvCUhWwwd1MbCDrMgRTD9YTAqtxJgtgN/VxEs4BCF2RicsybB0wNTfD0I/DmC7AyDaopQDqD0d6JSQHIo7APT/ZwkKY8CC0LRhCQfAuGxDw0wFHIBcJBEZZsp2wF//xhxGmSdbmzNzAAfD4/jsZUQAGEDyzIpm5jBZ4Fk98QLPQPevQSKa5MQeTsw0a27/mojrqZxg5I5B1zgRTbr8hBNHGLdOsBzsDtePSSV3RDtHPejMjaDp//OpslcYUM64gVJwx/d9kAdl0/XgH7JBBi8GEDqEZRm5G8jIHK0E/k5cvuNQSj7AOy+bfgEoV4MBqNi7tQAAAABJRU5ErkJggg==",

	  warnIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABXklEQVR42u1W7WnDMBR8I3SEjNARPEJH8AjdIBmh/2rnT7pBs0G9QbJBvUArb9Dq4B0UmwMb+ZkG8kAgyUjv7n2cbHe7Wftq7fDd2CdGam2/vfPWfv4O7NkWll5tR6eZ+VNe11zjm0VbDvnZGb9xD3PuRbOvnO0AtqOoDB6FKo59ax3zLeuisY8o9sx1n0724Om45vUFc+whCqyNCPa9h7jmHotvDBKtGdJ2YIy1AkCga7YlQ5tYYBLAtFATzpazb+zFL+yw1gCmxYqzq4kO5jMAiHMFbacFRgOgOPn392LRQS6XAsCZInFCxatq1gC0OBWKznIAjMJIP+a1HYRkdEhGCWMOGdwpyMi3vjNhAemUolNuWpx06+DNn6MR/CXDfHFLl4oHU+Wv33ORqJH9EvlMR3v0Cu8FYCHrIgoCXdj/pAQAZhZkuJt+ZHiih0wz2sNBDIHOB/iAL7vbf7FfHwI9GrUaFUcAAAAASUVORK5CYII=",

	  successIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB00lEQVR42r2X4VHDMAyFNQIjMAIbwAYwQjcgG8AG8I+EP7BB2YBsUDZoFmidDYq/u8jnq6CJncS+812ayHqypPdqS8pw73LjGnk6NrI91vLt557JM+/4ho0sOdyHXOEYIA9ymjKxZQ1r54HX8ugdush5d6jl1Tt/cG9y5+c1IMPz5tDIJzaRvcMma9ekNHLUAjJ1PbasYS0lyQHfDcA9u5UCw4LX8qPpKzboZgUnmKLgrpFK077mzrV5Teq12zGQFUdgR5xhT59n7XZZeSg7wIxrvy+xey2BilWQVxWZhZm0vZCFTjUipB+FWwp8rJxgYUPjh5ogOMuAj9MYrMHuKwRAbdYFt30AdmjAkc7dAoDjueAMdCAEgPDw49JCHGOjQeSD2wBGS6BA50HkgdsSmCacGkQmuAaw0SY0NEwIIgPc0jAWol1Cx7fMRHCjvGAHZSolxZTaKK+WgfNAqTMH6T9Pa6/NWGD3PZj/HUhcam0TuO8ubhJa/CU4hf6kLNdzj2b5Um2DcDBjZs2dAU/g+knZkXox0W5XxcNn7km5j+98nrIvrpZ7LyK3OKVMPPOOb2d3yB7ZXeJyWqlYTZwd2rI0m/R6Xg1saakrk2feAZp6F/wF56nCjOMHayAAAAAASUVORK5CYII=",

	  errorIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB4UlEQVR42r1X7U3DMBC9ERghI7ABbEBHYAPYADaAfyT9AxskG5AN0g2aBVpnA/CT/CLrFQkfIbFk1WrO9+7j3dk2zwh7uw6NPZ0ba8+1fWLGdUi/Lb5Bxv5zhHe7guIIcowgXyUTstiDvcvAa3uAh5ny8VTba1S+C292G2cFkLS+PzX2AZlMPkDmT14jpJmiHiCl+2Eg9mAvU+IFHxLwBGW2yVDw2g4M32YDbCY4CbTFYN4eGfY1wUnei9CT7STbWmOujtzJWD7PZLutPFgdiHie++MW3jMFbFbzH2wyhSQdhCNaQW1BFMbkcDWHHx2uwIADZGmEgpemEVhMQ56TXUmfUCMI7ilftO0k35m2TK8RTnBNe28sP370GuEF57E+G0AlDgWSc+WE34DeU4Kac+GEOwVuEmrOlRNeErrKUMF/4gR6xW96cHFhGeb5GAr6QKfgagRkChwJrDzpTNu1YmDKYcTwbXPnAA+UXBPJuBY4dPPOYRwaBZ7VK4S+gm7x/pJkvpr2Ny5UgOuwWQruPazUiADWLsx5EPAyq9khWR0eQyBLtrPjCbjrpjzlb76Yw5dQ213Y2w2UglxY4z98kzfkBMItziEqhM2qcI4w3uG163mOqPSYiStjWnf45n0LfgON7uEBnQHWwwAAAABJRU5ErkJggg==",

	  questionIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACDklEQVR42r2X700CQRDFpwRLsAQ7kA60A+lAO9AO5BuHX7AD6IDrADqQBmDtAPeX8HKXTdjZ5Q43mYTczd83b+YWqzlhbvehsddDY8tjY5u+HBb2yTt0bMwTlnYXFvYeg/wcF3YqlG20eRkefG7TJPBvrPSb51EmiUx5h470sY2JPF9VNTD3ArcEKbUnaLTZyx5fVcGBUBXjbBCCHSJbfJcHb2w3BqHClz0IDXxnlWPQtYKTzJhEJolsO4BLsKtyh5ybqBvOJF2Fxp48JNQOtTXNMPBSZPNadEFW6GTI+abpsP6J4/Mhtjst2vVQmlIVaOGYZ0oi50OtwD59qOrdFlGlB3F+REXIzpAHe696OfcgZiHlfClR0BP8sHPmGJ2QXI9xqB7nfJEgeiRs9F3wewggznRMPDSFlIr2E6jffCCwLky07Qg4cPFolMWTGyXgfzXVptIEBrUA0iWLqaWQf0tAtqCoxaJTSkJ3DAeOpj+GWkT08BoEHMb7i6i/iknGbnyYkJSsagMPN3bjQ2B9jNIZFiyTGmc1SRNUpL3IzCiBhGpIWHE1C6o+eyXTBbIQgXXNRZcJyCritDSJ8sq7i26ZQZdEgBMDGR+qL7ooqh2ajppE0MUGW8FejaaImf7V4k9oROkRYZEg/OZWzDt9lCpWtI8Ge0LLqlD22NjYB37g+NyelkD0VisZxGq36R/zARfV9nDdlgAAAABJRU5ErkJggg==",

	  timeIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABvElEQVR42sWXv0rEQBDGB0XBTuwEQSGbp7DR3lb0CWzs7Q7yBB4cXHLPIPoOVlYWHmhlYWF1brRWRHR/mpGTNZdcwpKBgfyZbz5mM/vtROrY9ZEs2Szey0fxIB+ZK5uZibt+w7nmGe+IIVba2kN/a9UlTuwoti7xZx0nFgzYRqRPw+iAajShq2bsvOee7dj+5vpdIss41zzjHTEaD5YctQnP9mXRgdKpBJeTLNquiycWzBQ+JWclqQu++AZl8XuemmNpaGDJ8ZPLnM8kLyol8MUOo11paeQgl1ZeQhodaqWzSB9PN1ZoHhd3UpdcK+ebe92rjVSxvBCvFd/veZ5l14b70+1UoI3kw9oTY9pwcP2Kg+5TOjIUMbl1n8MpqE2xT28ICEWM6T6HU5C64qYXmhgOsHAKOssN6hOaGA6wcIp2M9IXmhgO7W7hhOEG3Q1NDAdYODsjbr7Umflw2Pv/3H3D26qlbt5c5U6u1zL51OaaezsliSw4zTWzfDIwUdV2mhaQsQQzX0B8yQxivmT6h0QY8w+J+seib62PRR3uvEGgtfmDQNejjz/sMZiFHva6H2+7H+i7/4UJ/9P2Bb6l6yB4ISjfAAAAAElFTkSuQmCC",

	  redbag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACJUlEQVR42u1WPWgUURB+MVEJIWIQMUUKtUuj2Fh5FoZ9u5uDwxQbCPt2PU85sYhgb3FNQtJ6hcUZQrqQLhwhRARFMcEqpEg4GysFkQQOTvwJ0fF7e8fTg929PXLLNjfwsbPvzex8M2+Yt6wrXSGiHnJ4noT2lmx+QLZGsULw33h+RrwSuRPnGJSi3EgEQltjUGoJEvjBpJIkWBtsV0kYUyT4xxCblyT0SdhUOk0AMMYYBA17CYE++QafNk8zCPSZGCrANyifP1knkR7F+9d/+3wTxAa8PdsckQQ7TEBluUIrVq8XyDWvYa2K4NuUvX3WW7ufuQCbD+31QNa4iHNLI6MX0Zz0RTk76iT063TXPO/pD9ND+MZOxET2UbFH5BpX2P+CxacRP1Bs8stlBlGJ9xGzrlIufZn5iWwiGHwP6IEKCC4oIHvlJ3QX+88bWJIZhpCfY2ECgz2f4D/RXGdYRAEhI5CAw+8FO2bHh+Ws9nV0jRtt3C1PQipQ8ndEJ8sLqcX51RQEX/f8CtYp6N8U1BEGgR+Ry00VGE42OntenVuw4yzd4TcVhH5VZSz0lILDb8G23CKRP7BZRswHLOqlQYVCXxs9kIpjED0DJhQQhEFA7ETTuqNZIPyqMwTCq/Ja9YDffvwE+LvG8BpIiIB2SI4xDiKF4xL4AlBCqKr5nwx4mdFjqx/l3Erif1DdhvJHQ45PLO7KIRFz1r9I8DfeZdaVrkD+Amv10kibNVl3AAAAAElFTkSuQmCC"
	};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by Tw93 on 2017/6/26.
	 */
	var UrlParser = __webpack_require__(175);
	var Utils = {
	  UrlParser: UrlParser,
	  appendProtocol: function appendProtocol(url) {
	    if (/^\/\//.test(url)) {
	      var bundleUrl = weex.config.bundleUrl;

	      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
	    }
	    return url;
	  },
	  encodeURLParams: function encodeURLParams(url) {
	    var parsedUrl = new UrlParser(url, true);
	    return parsedUrl.toString();
	  },
	  goToH5Page: function goToH5Page(jumpUrl) {
	    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	    var Navigator = weex.requireModule('navigator');
	    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
	    var url = Utils.appendProtocol(jumpUrlObj.toString());
	    Navigator.push({
	      url: Utils.encodeURLParams(url),
	      animated: animated
	    }, callback);
	  }
	};
	module.exports = Utils;

/***/ }),
/* 274 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.show) ? _c('div', {
	    staticClass: ["wxc-noticebar"],
	    on: {
	      "click": _vm.noticeBarClicked
	    }
	  }, [(_vm.typeIcon) ? _c('image', {
	    staticClass: ["type-icon"],
	    attrs: {
	      "src": _vm.typeIcon
	    }
	  }) : _vm._e(), _c('text', {
	    staticClass: ["noticebar-content"],
	    style: {
	      width: _vm.contentWidth + 'px',
	      lines: _vm.lines
	    }
	  }, [_vm._v(_vm._s(_vm.notice))]), (_vm.modeIcon) ? _c('div', {
	    staticClass: ["more-click-content"],
	    attrs: {
	      "mode": _vm.mode
	    },
	    on: {
	      "click": _vm.noticeIconClicked
	    }
	  }, [_c('image', {
	    staticClass: ["mode-icon"],
	    attrs: {
	      "src": _vm.modeIcon
	    }
	  })]) : _vm._e()]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(276);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(277)
	)

	/* script */
	__vue_exports__ = __webpack_require__(278)

	/* template */
	var __vue_template__ = __webpack_require__(280)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4adede78"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 277 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-page-calendar": {
	    "position": "fixed",
	    "top": 0,
	    "right": -750,
	    "width": 750,
	    "color": "#333333",
	    "backgroundColor": "#ffffff"
	  },
	  "flex-item": {
	    "flex": 1,
	    "textAlign": "center"
	  },
	  "calendar-weekday": {
	    "height": 60,
	    "backgroundColor": "#ffffff",
	    "borderBottomWidth": 1,
	    "borderTopWidth": 1,
	    "borderColor": "#e2e2e2",
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "alignItems": "center"
	  },
	  "weekday-text": {
	    "color": "#000000",
	    "flex": 1,
	    "textAlign": "center"
	  },
	  "calendar-list": {
	    "flexDirection": "column"
	  },
	  "calendar-month": {
	    "height": 60,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "#f2f3f4"
	  },
	  "month-text": {
	    "fontSize": 32
	  },
	  "calendar-row": {
	    "height": 140,
	    "flexDirection": "row",
	    "borderBottomWidth": 1,
	    "borderColor": "#f2f3f4",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "position": "relative"
	  },
	  "row-item": {
	    "flex": 1,
	    "height": 140,
	    "background": "#ffffff",
	    "borderWidth": 0,
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "calendar-note": {
	    "height": 36,
	    "lineHeight": 36,
	    "fontSize": 24,
	    "color": "#000000",
	    "textAlign": "center"
	  },
	  "calendar-item": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "height": 120
	  },
	  "calendar-day": {
	    "height": 48,
	    "lineHeight": 48,
	    "fontSize": 36,
	    "color": "#000000",
	    "textAlign": "center"
	  },
	  "calendar-ext": {
	    "height": 36,
	    "lineHeight": 36,
	    "color": "#999999",
	    "textAlign": "center",
	    "fontSize": 24,
	    "overflow": "hidden",
	    "textOverflow": "ellipsis"
	  },
	  "calendar-holiday": {
	    "color": "#FF5000"
	  },
	  "calendar-rest": {
	    "color": "#FF5000"
	  },
	  "item-row-selected": {
	    "color": "#ffffff",
	    "backgroundColor": "#FFC900",
	    "textAlign": "center"
	  },
	  "item-text-selected": {
	    "color": "#3d3d3d",
	    "textAlign": "center"
	  },
	  "calendar-disabled": {
	    "color": "#CCCCCC"
	  },
	  "cell-disabled": {
	    "backgroundColor": "#FBFBFB"
	  },
	  "calendar-day-include": {
	    "backgroundColor": "#FFF7D6"
	  }
	}

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(279);

	var Util = _interopRequireWildcard(_util);

	var _wxcMinibar = __webpack_require__(249);

	var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var animation = weex.requireModule('animation'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');

	module.exports = {
	  components: { WxcMinibar: _wxcMinibar2.default },
	  props: {
	    selectedDate: Array,
	    dateRange: {
	      type: Array,
	      required: true,
	      default: function _default() {
	        return [];
	      }
	    },
	    minibarCfg: {
	      type: Object,
	      default: function _default() {
	        return {
	          'title': '选择日期',
	          'background-color': '#FFC900',
	          'text-color': '#3D3D3D'
	        };
	      }
	    },
	    selectedNote: {
	      type: Array,
	      default: function _default() {
	        return ['开始', '到达', '往返'];
	      }
	    },
	    isRange: {
	      type: Boolean,
	      default: false
	    },
	    needDestroy: {
	      type: Boolean,
	      default: false
	    },
	    descList: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      isShow: false,
	      reSelect: true,
	      useDefaultReturn: false,
	      showHeader: Util.isWeb(),
	      today: Util.getToDay(),
	      calendarHeight: 1040,
	      pageHeight: 1334,
	      departDate: '',
	      arriveDate: ''
	    };
	  },
	  computed: {
	    monthsArray: function monthsArray() {
	      var range = this.dateRange,
	          today = this.today,
	          departDate = this.departDate,
	          arriveDate = this.arriveDate,
	          selectedNote = this.selectedNote,
	          descList = this.descList;

	      var param = { range: range, today: today, departDate: departDate, arriveDate: arriveDate, selectedNote: selectedNote, descList: descList };
	      return Util.generateDateCell(param);
	    }
	  },
	  created: function created() {
	    var self = this;
	    var env = weex.config.env;
	    self.pageHeight = env.deviceHeight / env.deviceWidth * 750;
	    self.calendarHeight = self.pageHeight - (this.showHeader ? 100 : 120) - 60;
	    self.detectShow();
	  },

	  methods: {
	    minibarLeftButtonClick: function minibarLeftButtonClick() {
	      var _this = this;

	      setTimeout(function () {
	        _this.hide();
	        _this.$emit('wxcPageCalendarBackClicked', {});
	      }, 100);
	    },
	    onClickDate: function onClickDate(datConfig) {
	      var self = this;
	      if (datConfig.disabled || datConfig.isEmpty) return;

	      if (self.reSelect) {
	        self.departDate = '';
	        self.arriveDate = '';
	        self.reSelect = false;
	      }

	      if (self.isRange) {
	        if (self.departDate && Date.parse(self.departDate) <= Date.parse(datConfig.date)) {
	          self.arriveDate = datConfig.date;
	        } else {
	          self.departDate = datConfig.date;
	        }
	        if (self.departDate && self.arriveDate) {
	          self.dispatchDateChange([self.departDate, self.arriveDate]);
	        }
	      } else {
	        self.departDate = datConfig.date;
	        self.dispatchDateChange([self.departDate]);
	      }
	    },
	    scrollToDate: function scrollToDate() {
	      if (this.departDate) {
	        var el = this.$refs.departDate[0];
	        dom.getComponentRect && dom.getComponentRect(el, function (e) {
	          if (e && e.result) {
	            var bottom = e.size.bottom;
	            var env = weex.config.env;
	            // 误差

	            var height = env.deviceHeight / env.deviceWidth * 750 - 50;
	            if (bottom > height || bottom === 0) {
	              dom.scrollToElement(el, { offset: -146, animated: false });
	            }
	          }
	        });
	      }
	    },
	    dispatchDateChange: function dispatchDateChange(dateArr) {
	      var _this2 = this;

	      setTimeout(function () {
	        _this2.hide();
	      }, 600);
	      this.$emit('wxcPageCalendarDateSelected', {
	        date: dateArr
	      });
	    },
	    detectShow: function detectShow() {
	      !this.needDestroy && (this.isShow = true);
	      if (this.isRange && this.selectedDate.length >= 2) {
	        this.departDate = this.selectedDate[0];
	        this.arriveDate = this.selectedDate[1];
	      } else if (this.selectedDate.length >= 1) {
	        this.departDate = this.selectedDate[0];
	        this.arriveDate = '';
	      }
	    },
	    _animate: function _animate() {
	      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	      animation.transition(this.$refs.pageCalendar, {
	        styles: {
	          transform: 'translateX(' + -width + 'px)'
	        },
	        timingFunction: 'ease-out',
	        duration: 300
	      }, function () {});
	    },
	    show: function show() {
	      var _this3 = this;

	      this.needDestroy && (this.isShow = true);
	      this.reSelect = true;
	      this.detectShow();
	      this._animate(750);
	      // 防止没有渲染完成
	      setTimeout(function () {
	        _this3.scrollToDate();
	      }, 1);
	    },
	    hide: function hide() {
	      this.needDestroy && (this.isShow = false);
	      this.reSelect = false;
	      this._animate(0);
	      this.$emit('wxcPageCalendarHide', {});
	    }
	  }
	};

/***/ }),
/* 279 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports._getTraditionalHoliday = _getTraditionalHoliday;
	exports._isDate = _isDate;
	exports._checkHash = _checkHash;
	exports.getTime = getTime;
	exports._isInRange = _isInRange;
	exports._isInSelectRange = _isInSelectRange;
	exports._fixNum = _fixNum;
	exports._isWeekend = _isWeekend;
	exports._isToday = _isToday;
	exports._getMonthDays = _getMonthDays;
	exports._getPadding = _getPadding;
	exports._unique = _unique;
	exports.getToDay = getToDay;
	exports.getWeekRows = getWeekRows;
	exports.generateDateCell = generateDateCell;
	exports.isWeb = isWeb;
	//国际节日
	var GLOBAL_HOLIDAY = exports.GLOBAL_HOLIDAY = {
	  '01-01': '元旦',
	  '02-14': '情人',
	  '05-01': '劳动',
	  '06-01': '儿童',
	  '10-01': '国庆',
	  '12-25': '圣诞'
	};

	//传统节日
	var TRADITIONAL_HOLIDAY = {
	  '除夕': ['2015-02-18', '2016-02-07', '2017-01-27', '2018-02-15', '2019-02-04', '2020-01-24'],
	  '春节': ['2015-02-19', '2016-02-08', '2017-01-28', '2018-02-16', '2019-02-05', '2020-01-25'],
	  '元宵': ['2015-03-05', '2016-02-22', '2017-02-11', '2018-03-02', '2019-02-19', '2020-02-08'],
	  '清明': ['2015-04-05', '2016-04-04', '2017-04-04', '2018-04-05', '2019-04-05', '2020-04-04'],
	  '端午': ['2015-06-20', '2016-06-09', '2017-05-30', '2018-06-18', '2019-06-07', '2020-06-25'],
	  '中秋': ['2015-09-27', '2016-09-15', '2017-10-04', '2018-09-24', '2019-09-13', '2020-10-01'],
	  '重阳': ['2015-10-21', '2016-10-09', '2017-10-28', '2018-10-17', '2019-10-07', '2020-10-25']
	};

	// 放假日
	var REST_DAYS = ['2017-10-01', '2017-10-02', '2017-10-03', '2017-10-04', '2017-10-05', '2017-10-06', '2017-10-07', '2017-10-08'];

	// 工作日
	var WORK_DAYS = ['2017-09-30'];

	function _getTraditionalHoliday() {
	  var HOLIDAY_TEMP = {};

	  var keys = Object.keys(TRADITIONAL_HOLIDAY);
	  keys.forEach(function (k, index) {
	    var arr = TRADITIONAL_HOLIDAY[k];
	    arr.forEach(function (i) {
	      HOLIDAY_TEMP[i] = k;
	    });
	  });

	  return HOLIDAY_TEMP;
	}

	function _isDate(obj) {
	  var type = obj == null ? String(obj) : {}.toString.call(obj) || 'object';
	  return type == '[object date]';
	}

	/**
	 * 检测Hash
	 *
	 * @method _checkHash
	 * @private
	 */
	function _checkHash(url, hash) {
	  return url && url.match(/#/) && url.replace(/^.*#/, '') === hash;
	}
	/**
	 * 获取当前日期的毫秒数
	 * @method getTime
	 * @param {String} date
	 * @return {Number}
	 */
	function getTime(date) {
	  if (_isDate(date)) {
	    return new Date(date).getTime();
	  } else {
	    try {
	      return new Date(date.replace(/-/g, '/')).getTime();
	    } catch (e) {
	      return 0;
	    }
	  }
	}

	function _isInRange(range, date) {
	  var start = getTime(range[0]),
	      end = getTime(range[1]),
	      date = getTime(date);
	  return start <= date && end >= date;
	}
	function _isInSelectRange(range, date) {
	  var start = getTime(range[0]),
	      end = getTime(range[1]),
	      date = getTime(date);
	  return start < date && end > date;
	}

	function _fixNum(num) {
	  return (num < 10 ? '0' : '') + num;
	}
	/**
	 * 是否是周末
	 * @method isWeekend
	 * @param {String} date
	 * @return {Boolean}
	 */
	function _isWeekend(date) {
	  var day = new Date(date.replace(/-/g, '/')).getDay();
	  return day === 0 || day === 6;
	}

	/**
	 * 是否是今天
	 * @method isToday
	 * @param {String} date
	 * @return {Boolean}
	 */
	function _isToday(_today, date) {
	  return getTime(_today) === getTime(date);
	}

	/**
	 * 检查是否是闰年
	 * @method _checkLeapYear
	 * @param {Number} y 年份
	 * @param {Date} t today
	 * @protected
	 */
	function _getMonthDays(y, t) {
	  var MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	  var y = y || t.getFullYear(),
	      isLeapYear = false;

	  if (y % 100) {
	    isLeapYear = !(y % 4);
	  } else {
	    isLeapYear = !(y % 400);
	  }

	  if (isLeapYear) {
	    MONTH_DAYS[1] = 29;
	  } else {
	    MONTH_DAYS[1] = 28;
	  }
	  return MONTH_DAYS;
	}
	/**
	 * 当月1号前面有多少空格
	 * @method _getPadding
	 * @protected
	 */
	function _getPadding(year, month) {
	  var date = new Date(year + '/' + month + '/1'),
	      day = date.getDay();
	  return day;
	}

	function _unique(array) {
	  return Array.prototype.filter.call(array, function (item, index) {
	    return array.indexOf(item) == index;
	  });
	}

	function getToDay() {
	  return new Date().getFullYear() + '-' + _fixNum(new Date().getMonth() + 1) + '-' + _fixNum(new Date().getDate());
	}

	function getWeekRows(y, m, today, dateRange, departDate, arriveDate, selectedNote, descList) {
	  var monthDays = _getMonthDays(y, today);
	  var padding = _getPadding(y, m, 7);
	  var num = monthDays[m - 1] + padding;
	  var rows = Math.ceil(num / 7);
	  var remain = num % 7;
	  var rowsData = [];

	  for (var i = 1; i <= rows; i++) {
	    var row = {
	      index: i,
	      cells: []
	    };

	    for (var j = 1; j <= 7; j++) {
	      var cell = {};
	      // 前后空格
	      if (i === 1 && j <= padding || remain && i === rows && j > remain) {
	        cell.isEmpty = true;
	      } else {
	        (function () {
	          var d = (i - 1) * 7 + j - padding;
	          var date = y + '-' + _fixNum(m) + '-' + _fixNum(d);
	          var cls = [];
	          var ref = '';
	          var cellClass = [];
	          var isInRange = _isInRange(dateRange, date);
	          var disabled = false;
	          var global = _fixNum(m) + '-' + _fixNum(d);
	          var note = '';
	          var ext = '';

	          if (descList && descList.length > 0) {
	            var nowDesc = descList.filter(function (item) {
	              return item.date == date;
	            });
	            if (nowDesc && nowDesc.length > 0) {
	              ext = nowDesc[0].value;
	              if (nowDesc[0].emphasize) {
	                cls.push('calendar-holiday');
	              }
	            }
	          }

	          // 国际节日
	          if (GLOBAL_HOLIDAY[global]) {
	            note = GLOBAL_HOLIDAY[global];
	            cls.push('calendar-holiday');
	          }

	          var tHolidy = _getTraditionalHoliday()[date];

	          // 传统节日
	          if (tHolidy) {
	            note = tHolidy;
	            cls.push('calendar-holiday');
	          }
	          // 放假日
	          if (REST_DAYS.indexOf(date) > -1) {
	            cls.push('calendar-holiday');
	          }

	          // 工作日
	          if (WORK_DAYS.indexOf(date) > -1) {
	            cls.push('calendar-work');
	          }

	          // 周末
	          if (_isWeekend(date)) {
	            cls.push('calendar-holiday');
	          }

	          // 今天
	          if (_isToday(today, date)) {
	            cls.push('calendar-today');
	            note = '今天';
	          }

	          // 不在日期范围内
	          if (!isInRange) {
	            disabled = true;
	          }

	          if (disabled) {
	            cls = [];
	            cls.push('calendar-disabled');
	            cellClass.push('cell-disabled');
	          }

	          if (!ext && disabled && isInRange) {
	            ext = '不可选';
	          }

	          if (departDate === date || arriveDate === date) {
	            note = departDate === date ? selectedNote[0] : selectedNote[1];
	            ref = departDate === date ? 'departDate' : 'arriveDate';
	            if (departDate === arriveDate && selectedNote.length >= 3) {
	              note = selectedNote[2];
	            }
	            cls.push('item-text-selected');
	            cellClass.push('item-row-selected');
	          }

	          if (departDate && arriveDate && _isInSelectRange([departDate, arriveDate], date)) {
	            cellClass.push('calendar-day-include');
	          }

	          cell = {
	            isEmpty: false,
	            ref: ref,
	            cls: _unique(cls).join(' '),
	            cellClass: _unique(cellClass).join(' '),
	            note: note,
	            date: date,
	            ext: ext,
	            disabled: disabled,
	            year: y,
	            month: m,
	            day: d,
	            text: d
	          };
	        })();
	      }
	      row.cells.push(cell);
	    }

	    rowsData.push(row);
	  }

	  return rowsData;
	}

	function generateDateCell(_ref) {
	  var range = _ref.range,
	      today = _ref.today,
	      departDate = _ref.departDate,
	      arriveDate = _ref.arriveDate,
	      selectedNote = _ref.selectedNote,
	      descList = _ref.descList;

	  var start = new Date(range[0].replace(/-/g, '/'));
	  var end = new Date(range[1].replace(/-/g, '/'));
	  var startYear = start.getFullYear();
	  var startMonth = start.getMonth() + 1;
	  var startDate = start.getDate();
	  var endYear = end.getFullYear();
	  var endMonth = end.getMonth() + 1;
	  var endDate = end.getDate();
	  var i = 0;
	  var l = (endYear - startYear) * 12 + endMonth - startMonth + 1;
	  var y = startYear;
	  var n = startMonth;
	  var months = [];

	  for (; i < l; i++) {
	    if (n > 12) {
	      n = 1;
	      y++;
	    }
	    months.push({
	      title: y + '-' + _fixNum(n),
	      year: y,
	      month: n,
	      startDate: i === 0 ? startDate : false,
	      endDate: i === l - 1 ? endDate : false,
	      rowsData: getWeekRows(y, n, today, range, departDate, arriveDate, selectedNote, descList)
	    });
	    n++;
	  }
	  return months;
	}

	function isWeb() {
	  var platform = weex.config.env.platform;

	  return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
	}

/***/ }),
/* 280 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "pageCalendar",
	    staticClass: ["wxc-page-calendar"],
	    style: {
	      height: _vm.pageHeight + 'px'
	    }
	  }, [_c('wxc-minibar', _vm._b({
	    attrs: {
	      "show": _vm.showHeader,
	      "useDefaultReturn": _vm.useDefaultReturn
	    },
	    on: {
	      "wxcMinibarLeftButtonClicked": _vm.minibarLeftButtonClick
	    }
	  }, 'wxc-minibar', _vm.minibarCfg)), (_vm.isShow) ? _c('div', {
	    staticClass: ["calendar-weekday"]
	  }, _vm._l((['日', '一', '二', '三', '四', '五', '六']), function(week, k) {
	    return _c('text', {
	      key: k,
	      staticClass: ["flex-item", "weekday-text"]
	    }, [_vm._v(_vm._s(week))])
	  })) : _vm._e(), (_vm.isShow) ? _c('list', {
	    staticClass: ["calendar-list"],
	    style: {
	      height: _vm.calendarHeight + 'px'
	    }
	  }, _vm._l((_vm.monthsArray), function(month, index) {
	    return _c('cell', {
	      key: index,
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["calendar-month"]
	    }, [_c('text', {
	      staticClass: ["month-text"]
	    }, [_vm._v(_vm._s(month.title))])]), _vm._l((month.rowsData), function(row, rowIndex) {
	      return _c('div', {
	        key: rowIndex,
	        staticClass: ["calendar-row"]
	      }, _vm._l((row.cells), function(cell, index) {
	        return _c('div', {
	          key: index,
	          ref: cell.ref,
	          refInFor: true,
	          class: ['row-item', cell.cellClass],
	          on: {
	            "click": function($event) {
	              _vm.onClickDate(cell)
	            }
	          }
	        }, [(cell.isEmpty) ? _c('div') : _vm._e(), (!cell.isEmpty) ? _c('div', {
	          staticClass: ["calendar-item"]
	        }, [_c('text', {
	          class: ['calendar-note', cell.cls]
	        }, [_vm._v(_vm._s(cell.note))]), _c('text', {
	          class: ['calendar-day', cell.cls]
	        }, [_vm._v(_vm._s(cell.text))]), _c('text', {
	          class: ['calendar-ext', cell.cls]
	        }, [_vm._v(_vm._s(cell.ext))])]) : _vm._e()])
	      }))
	    })], 2)
	  })) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(282);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(283)
	)

	/* script */
	__vue_exports__ = __webpack_require__(284)

	/* template */
	var __vue_template__ = __webpack_require__(285)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-ea18b730"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 283 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-popup": {
	    "position": "fixed",
	    "width": 750
	  },
	  "top": {
	    "left": 0,
	    "right": 0
	  },
	  "bottom": {
	    "left": 0,
	    "right": 0
	  },
	  "left": {
	    "bottom": 0,
	    "top": 0
	  },
	  "right": {
	    "bottom": 0,
	    "top": 0
	  }
	}

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _wxcOverlay = __webpack_require__(230);

	var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	var platform = weex.config.env.platform;

	var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';

	module.exports = {
	  components: { WxcOverlay: _wxcOverlay2.default },
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    pos: {
	      type: String,
	      default: 'bottom'
	    },
	    popupColor: {
	      type: String,
	      default: '#FFFFFF'
	    },
	    overlayCfg: {
	      type: Object,
	      default: function _default() {
	        return {
	          hasAnimation: true,
	          timingFunction: ['ease-in', 'ease-out'],
	          duration: 300,
	          opacity: 0.6
	        };
	      }
	    },
	    height: {
	      type: [Number, String],
	      default: 840
	    },
	    standOut: {
	      type: [Number, String],
	      default: 0
	    },
	    width: {
	      type: [Number, String],
	      default: 750
	    },
	    animation: {
	      type: Object,
	      default: function _default() {
	        return {
	          timingFunction: 'ease-in'
	        };
	      }
	    }
	  },
	  data: function data() {
	    return {
	      haveOverlay: true,
	      isOverShow: true
	    };
	  },
	  computed: {
	    isNeedShow: function isNeedShow() {
	      var _this = this;

	      setTimeout(function () {
	        _this.appearPopup(_this.show);
	      }, 50);
	      return this.show;
	    },
	    _height: function _height() {
	      this.appearPopup(this.show, 150);
	      return this.height;
	    },
	    transformValue: function transformValue() {
	      return this.getTransform(this.pos, this.width, this.height, true);
	    },
	    padStyle: function padStyle() {
	      var pos = this.pos,
	          width = this.width,
	          height = this.height,
	          popupColor = this.popupColor;

	      var style = {
	        width: width + 'px',
	        backgroundColor: popupColor
	      };
	      pos === 'top' && (style = Object.assign({}, style, {
	        top: -height + 'px',
	        height: height + 'px'
	      }));
	      pos === 'bottom' && (style = Object.assign({}, style, {
	        bottom: -height + 'px',
	        height: height + 'px'
	      }));
	      pos === 'left' && (style = Object.assign({}, style, {
	        left: -width + 'px'
	      }));
	      pos === 'right' && (style = Object.assign({}, style, {
	        right: -width + 'px'
	      }));
	      return style;
	    }
	  },
	  methods: {
	    handleTouchEnd: function handleTouchEnd(e) {
	      // 在支付宝上面有点击穿透问题
	      var platform = weex.config.env.platform;

	      platform === 'Web' && e.preventDefault && e.preventDefault();
	    },
	    hide: function hide() {
	      this.appearPopup(false);
	      this.$refs.overlay.appearOverlay(false);
	    },
	    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
	      this.isShow && this.appearPopup(false);
	    },
	    appearPopup: function appearPopup(bool) {
	      var _this2 = this;

	      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

	      this.isShow = bool;
	      var popupEl = this.$refs['wxc-popup'];
	      if (!popupEl) {
	        return;
	      }
	      animation.transition(popupEl, Object.assign({
	        styles: {
	          transform: this.getTransform(this.pos, this.width, this.height, !bool)
	        },
	        duration: duration,
	        delay: 0
	      }, this.animation), function () {
	        if (!bool) {
	          _this2.$emit('wxcPopupOverlayClicked', { pos: _this2.pos });
	        }
	      });
	    },
	    getTransform: function getTransform(pos, width, height, bool) {
	      var _size = pos === 'top' || pos === 'bottom' ? height : width;
	      var _transform = void 0;
	      if (isWeb) {
	        _size -= this.standOut;
	      }
	      bool && (_size = 0);
	      switch (pos) {
	        case 'top':
	          _transform = 'translateY(' + _size + 'px)';
	          break;
	        case 'bottom':
	          _transform = 'translateY(-' + _size + 'px)';
	          break;
	        case 'left':
	          _transform = 'translateX(' + _size + 'px)';
	          break;
	        case 'right':
	          _transform = 'translateX(-' + _size + 'px)';
	          break;
	      }
	      return _transform;
	    }
	  }
	};

/***/ }),
/* 285 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    on: {
	      "touchend": _vm.handleTouchEnd
	    }
	  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
	    ref: "overlay",
	    attrs: {
	      "show": _vm.haveOverlay && _vm.isOverShow
	    },
	    on: {
	      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
	    }
	  }, 'wxc-overlay', _vm.overlayCfg)) : _vm._e()], 1), (_vm.show) ? _c('div', {
	    ref: "wxc-popup",
	    class: ['wxc-popup', _vm.pos],
	    style: _vm.padStyle,
	    attrs: {
	      "height": _vm._height,
	      "hack": _vm.isNeedShow
	    },
	    on: {
	      "click": function () {}
	    }
	  }, [_vm._t("default")], 2) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(287);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(288)
	)

	/* script */
	__vue_exports__ = __webpack_require__(289)

	/* template */
	var __vue_template__ = __webpack_require__(290)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-progress\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-24af6f8d"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 288 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-progress": {
	    "position": "relative",
	    "backgroundColor": "#f2f3f4"
	  },
	  "progress": {
	    "position": "absolute",
	    "backgroundColor": "#FFC900"
	  }
	}

/***/ }),
/* 289 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    barColor: {
	      type: String,
	      default: '#FFC900'
	    },
	    barWidth: {
	      type: Number,
	      default: 600
	    },
	    barHeight: {
	      type: Number,
	      default: 8
	    },
	    value: {
	      type: Number,
	      default: 0
	    }
	  },
	  computed: {
	    runWayStyle: function runWayStyle() {
	      var barWidth = this.barWidth,
	          barHeight = this.barHeight;

	      return {
	        width: barWidth + 'px',
	        height: barHeight + 'px'
	      };
	    },
	    progressStyle: function progressStyle() {
	      var value = this.value,
	          barWidth = this.barWidth,
	          barHeight = this.barHeight,
	          barColor = this.barColor;

	      var newValue = value < 0 ? 0 : value > 100 ? 100 : value;
	      return {
	        backgroundColor: barColor,
	        height: barHeight + 'px',
	        width: newValue / 100 * barWidth + 'px'
	      };
	    }
	  }
	};

/***/ }),
/* 290 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-progress"],
	    style: _vm.runWayStyle
	  }, [_c('div', {
	    staticClass: ["progress"],
	    style: _vm.progressStyle
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(292);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(293)
	)

	/* script */
	__vue_exports__ = __webpack_require__(294)

	/* template */
	var __vue_template__ = __webpack_require__(300)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-radio\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-75a69e12"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 293 */
/***/ (function(module, exports) {

	module.exports = {}

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _item = __webpack_require__(295);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { wxcRadio: _item2.default },
	  props: {
	    list: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      checkedIndex: -1
	    };
	  },
	  computed: {
	    updateList: function updateList() {
	      var checkedIndex = this.checkedIndex,
	          list = this.list;

	      var updateList = [];
	      list && list.forEach(function (item, i) {
	        item.checked = i === checkedIndex;
	        updateList.push(item);
	      });
	      return updateList;
	    }
	  },
	  created: function created() {
	    var _this = this;

	    var list = this.list;

	    if (list && list.length > 0) {
	      list.forEach(function (item, i) {
	        item.checked && (_this.checkedIndex = i);
	      });
	    }
	  },

	  methods: {
	    wxcRadioItemChecked: function wxcRadioItemChecked(i, e) {
	      var oldIndex = this.checkedIndex;
	      var _list$i = this.list[i],
	          value = _list$i.value,
	          title = _list$i.title;

	      this.checkedIndex = i;
	      this.$emit('wxcRadioListChecked', { value: value, title: title, oldIndex: oldIndex, index: i });
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(296)
	)

	/* script */
	__vue_exports__ = __webpack_require__(297)

	/* template */
	var __vue_template__ = __webpack_require__(299)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-radio\\item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1c7c57fe"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 296 */
/***/ (function(module, exports) {

	module.exports = {
	  "radio": {
	    "width": 48,
	    "height": 48
	  },
	  "title-text": {
	    "fontSize": 30
	  }
	}

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _wxcCell = __webpack_require__(169);

	var _wxcCell2 = _interopRequireDefault(_wxcCell);

	var _iconBase = __webpack_require__(298);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  components: { WxcCell: _wxcCell2.default },
	  props: {
	    hasTopBorder: {
	      type: Boolean,
	      default: false
	    },
	    title: {
	      type: String,
	      require: true
	    },
	    value: {
	      type: [String, Number, Object],
	      require: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      icon: [_iconBase.CHECKED, _iconBase.UNCHECKED]
	    };
	  },
	  computed: {
	    radioIcon: function radioIcon() {
	      var icon = this.icon,
	          disabled = this.disabled,
	          checked = this.checked;

	      return checked ? icon[disabled ? 1 : 0] : '';
	    },
	    backgroundColor: function backgroundColor() {
	      var disabled = this.disabled;

	      return disabled ? '#F2F3F4' : '#FFFFFF';
	    },
	    color: function color() {
	      var disabled = this.disabled,
	          checked = this.checked;

	      return checked && !disabled ? '#EE9900' : '#3D3D3D';
	    }
	  },
	  methods: {
	    wxcCellDivClick: function wxcCellDivClick() {
	      var disabled = this.disabled,
	          value = this.value;

	      if (!disabled) {
	        this.$emit('wxcRadioItemChecked', { value: value, disabled: disabled });
	      }
	    }
	  }
	};

/***/ }),
/* 298 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = {
	  CHECKED: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADzUExURUxpce2ZAOuJAAAAAOuTAO6YAO2YAO6ZAKpVAN+AAO2YANWAAO6YAOuUAOuWAO6ZAO2YAO2SAO2YAOuWAO2YAICAAO2ZAO6XAO6ZAO6ZAL+AAOqVAOqXAOyYAO6ZAO2ZAO6YAO6YAO6ZAO2YAO2ZAO2SAO2ZAO2YAO2YAO6ZAO2XAO6ZAOaZAO2VAO6YAOOOAO2YAOqVAO2YAOuXAOmYAOqWAOyYAO2ZAO2YAOqYAO6ZAO6YAOmQAOiLAO6ZAOyZAO6YAOyZAOyZAO6YAO6ZAO2ZAO2YAO2YAOuZAO6ZAO6YAO2YAO6ZAO6YAO6ZAO2ZAO6ZAE03vp0AAABQdFJOUwDmDQEa3YP6Awh0BtAmP+BFDuknxAK2O3W0BDAxamn37Pv+rn8cc/a3r2LbCjqzCZwMtUAvPUOMcj5m7hcLk1+jN4lo3qDJ0xn8wn7q38/Kd0v3qQAAARZJREFUWMPt1sdywjAQgGEwxYDpPaJjWgihJqF3UiChvP/TMMOA40mwkL26sf9Zs6NPe5HJhGEYhilZWuMajzmCpy1PGvA5Ab999TGDX8nhsfvEz3fwICEUNotu15cF7jIHba5nJw+XrW518nFZ0WXURQhhdj1QXOT1rUN4uBrdZrNfZHLFY7R3FtzDTMErwfclDdr58mNVYnBFqAtzvPSiuSfZWwS5TiVSWZGiu70v5aSQrmjr2FznScmSpo7ZdUPH7qLr9LhoOp0uTZ1el5ZOv+u6zpDris6Y67/OqOuvDuBS6zo1gEutq3zvAS6Vbrv5Abl+dYc1yKXoouKuBHJddNPFcg69z6nWiEQ4fTfxx41h2B13BDc5Jq/erDtTAAAAAElFTkSuQmCC",
	  UNCHECKED: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADzUExURUxpceDg4NjY2AAAANjY2ODg4ODg4N/f36qqqt/f397e3tXV1d/f393d3d/f397e3t/f39vb29/f397e3uDg4ICAgN/f39zc3N7e3uDg4N/f37+/v+Dg4ODg4N/f39/f3+Dg4ODg4ODg4Nvb29/f39/f3+Dg4ODg4N/f39/f3+Dg4ODg4MzMzNzc3ODg4ODg4MbGxtXV1d/f39/f397e3t7e3t7e3t3d3eDg4ODg4N/f397e3t7e3tHR0d/f3+Dg4N/f3+Dg4N/f39/f39bW1t/f39/f3+Dg4ODg4N/f39/f3+Dg4N/f39/f39/f39/f3+Dg4KlnnBMAAABQdFJOUwDmDQEa3YP6Awh0BtAmP0XgDuknxAK2O3W0MAQxamn3/uz7HK5/c/a3r2LbCjqznAkMtUAvPYxD7nJmPhcLX5M3o4loGaDJ3tPfz/zCfurKXXWIkwAAARlJREFUWMPt1ltzwUAUwHESEhFCL5RuL24N2igS9F7qTkt9/0/TGdNGpmRtcvbN+T/vnNnfnpcNBDAMwzA7sflm8JgjxM1StwGfc5SQJuMP+JUicSkpT0fgQcLJaVCORYci3BU8DkdrCg9X+D6k8HGF0OXXRQhhdmUpLtJ+sAgPV6NTr78UmVyZM9o7C7HH6xtNhe9LfTZz5eqtyuBKURcWaT2lC3clrQhyrTu/zMsU3f592SeFq4q7js31O+lCd9Uxu/bo2F10nRcXTefR5arz6nLTeXft1vly7dD5c23r/Lr+6wAup84yAC6nrrL4BrgcutnXEuTa6FafIJetS8tzHeT60733Bz3ofdY1X0mK03cTf9wYhh1wP1u5Jq9N5fwAAAAAAElFTkSuQmCC"
	};

/***/ }),
/* 299 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('wxc-cell', {
	    attrs: {
	      "hasTopBorder": _vm.hasTopBorder,
	      "cellStyle": {
	        backgroundColor: _vm.backgroundColor
	      }
	    },
	    on: {
	      "wxcCellDivClick": _vm.wxcCellDivClick
	    }
	  }, [_c('text', {
	    staticClass: ["title-text"],
	    style: {
	      color: _vm.color
	    },
	    slot: "title"
	  }, [_vm._v(_vm._s(_vm.title))]), (_vm.radioIcon) ? _c('image', {
	    staticClass: ["radio"],
	    attrs: {
	      "src": _vm.radioIcon
	    },
	    slot: "value"
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 300 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', _vm._l((_vm.updateList), function(item, i) {
	    return _c('wxc-radio', _vm._b({
	      key: i,
	      on: {
	        "wxcRadioItemChecked": function($event) {
	          _vm.wxcRadioItemChecked(i, $event)
	        }
	      }
	    }, 'wxc-radio', item))
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(302);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(303)
	)

	/* script */
	__vue_exports__ = __webpack_require__(304)

	/* template */
	var __vue_template__ = __webpack_require__(306)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-00b0a5fd"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 303 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrap": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "wxc-result": {
	    "width": 750,
	    "flex": 1,
	    "alignItems": "center",
	    "backgroundColor": "#f2f3f4"
	  },
	  "result-image": {
	    "width": 320,
	    "height": 320
	  },
	  "result-content": {
	    "marginTop": 36,
	    "alignItems": "center"
	  },
	  "content-text": {
	    "fontSize": 30,
	    "color": "#A5A5A5",
	    "height": 42,
	    "lineHeight": 42,
	    "textAlign": "center"
	  },
	  "content-desc": {
	    "marginTop": 10
	  },
	  "result-button": {
	    "marginTop": 60,
	    "borderWidth": 1,
	    "borderColor": "#979797",
	    "backgroundColor": "#FFFFFF",
	    "borderRadius": 6,
	    "width": 240,
	    "height": 72,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "button-text": {
	    "color": "#666666",
	    "fontSize": 30
	  }
	}

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var TYPES = __webpack_require__(305);
	module.exports = {
	  props: {
	    type: {
	      type: String,
	      default: 'errorPage'
	    },
	    show: {
	      type: Boolean,
	      default: true
	    },
	    wrapStyle: Object,
	    paddingTop: {
	      type: [Number, String],
	      default: 232
	    },
	    customSet: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    resultType: function resultType() {
	      var type = this.type,
	          customSet = this.customSet;

	      var allTypes = this.isEmptyObject(customSet) ? TYPES : this.mergeDeep(TYPES, customSet);
	      var types = allTypes['errorPage'];
	      if (['errorPage', 'noGoods', 'noNetwork', 'errorLocation'].indexOf(type) > -1) {
	        types = allTypes[type];
	      }
	      return types;
	    },
	    setPaddingTop: function setPaddingTop() {
	      var paddingTop = this.paddingTop;
	      return paddingTop + 'px';
	    }
	  },
	  methods: {
	    handleTouchEnd: function handleTouchEnd(e) {
	      // 在支付宝上面有点击穿透问题
	      var platform = weex.config.env.platform;

	      platform === 'Web' && e.preventDefault && e.preventDefault();
	    },
	    onClick: function onClick() {
	      var type = this.type;
	      this.$emit('wxcResultButtonClicked', { type: type });
	    },
	    isObject: function isObject(item) {
	      return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item);
	    },
	    isEmptyObject: function isEmptyObject(obj) {
	      return Object.keys(obj).length === 0 && obj.constructor === Object;
	    },
	    mergeDeep: function mergeDeep(target) {
	      for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        sources[_key - 1] = arguments[_key];
	      }

	      if (!sources.length) return target;
	      var source = sources.shift();
	      if (this.isObject(target) && this.isObject(source)) {
	        for (var key in source) {
	          if (this.isObject(source[key])) {
	            if (!target[key]) {
	              Object.assign(target, _defineProperty({}, key, {}));
	            }
	            this.mergeDeep(target[key], source[key]);
	          } else {
	            Object.assign(target, _defineProperty({}, key, source[key]));
	          }
	        }
	      }
	      return this.mergeDeep.apply(this, [target].concat(sources));
	    }
	  }
	};

/***/ }),
/* 305 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Created by Tw93 on 2016/11/4.
	 */
	module.exports = {
	  errorPage: {
	    pic: '//gtms01.alicdn.com/tfs/TB1HH4TSpXXXXauXVXXXXXXXXXX-320-320.png',
	    content: '抱歉出错了，飞猪正在全力解决中',
	    button: '再试一次',
	    title: '出错啦'
	  },
	  noGoods: {
	    pic: '//gw.alicdn.com/tfs/TB1QXlEQXXXXXcNXFXXXXXXXXXX-320-320.png',
	    content: '主人，这里什么都没有找到',
	    button: '再试一次',
	    title: '暂无商品'
	  },
	  noNetwork: {
	    pic: '//gw.alicdn.com/tfs/TB1rs83QXXXXXcBXpXXXXXXXXXX-320-320.png',
	    content: '哎呀，没有网络了......',
	    button: '刷新一下',
	    title: '无网络'
	  },
	  errorLocation: {
	    pic: '//gw.alicdn.com/tfs/TB1rs83QXXXXXcBXpXXXXXXXXXX-320-320.png',
	    content: '哎呀，定位失败了......',
	    button: '刷新一下',
	    title: '定位失败'
	  }
	};

/***/ }),
/* 306 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.show) ? _c('div', {
	    staticClass: ["wrap"],
	    style: _vm.wrapStyle
	  }, [_c('div', {
	    staticClass: ["wxc-result"],
	    style: {
	      paddingTop: _vm.setPaddingTop
	    }
	  }, [_c('image', {
	    staticClass: ["result-image"],
	    attrs: {
	      "src": _vm.resultType.pic
	    }
	  }), (_vm.resultType.content) ? _c('div', {
	    staticClass: ["result-content"]
	  }, [_c('text', {
	    staticClass: ["content-text"]
	  }, [_vm._v(_vm._s(_vm.resultType.content))]), (_vm.resultType.desc) ? _c('text', {
	    staticClass: ["content-text", "content-desc"]
	  }, [_vm._v(_vm._s(_vm.resultType.desc))]) : _vm._e()]) : _vm._e(), (_vm.resultType.button) ? _c('div', {
	    staticClass: ["result-button"],
	    on: {
	      "touchend": _vm.handleTouchEnd,
	      "click": _vm.onClick
	    }
	  }, [_c('text', {
	    staticClass: ["button-text"]
	  }, [_vm._v(_vm._s(_vm.resultType.button))])]) : _vm._e()])]) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(308);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(309)
	)

	/* script */
	__vue_exports__ = __webpack_require__(310)

	/* template */
	var __vue_template__ = __webpack_require__(327)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7bfb948c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 309 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-rich-text": {
	    "justifyContent": "flex-start",
	    "alignItems": "center",
	    "flexWrap": "wrap",
	    "flexDirection": "row",
	    "flexShrink": 1
	  },
	  "default-text": {
	    "color": "#A5A5A5",
	    "fontSize": 24,
	    "lineHeight": 30
	  }
	}

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var Utils = __webpack_require__(311);
	module.exports = {
	  components: {
	    WxcRichTextText: __webpack_require__(312),
	    WxcRichTextLink: __webpack_require__(316),
	    WxcRichTextIcon: __webpack_require__(319),
	    WxcRichTextTag: __webpack_require__(323)
	  },
	  props: {
	    configList: {
	      type: [Array, String],
	      default: function _default() {
	        return [];
	      }
	    },
	    hasTextMargin: {
	      type: Boolean,
	      default: true
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  computed: {
	    isNotEmptyArray: function isNotEmptyArray() {
	      return Utils.isNonEmptyArray(this.configList);
	    },
	    isString: function isString() {
	      return Utils.isString(this.configList);
	    }
	  }
	};

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by Tw93 on 2017/6/26.
	 */
	var UrlParser = __webpack_require__(175);
	var Utils = {
	  UrlParser: UrlParser,
	  /**
	   * 对象类型
	   * @memberOf Utils
	   * @param obj
	   * @returns {string}
	   * @private
	   */
	  _typeof: function _typeof(obj) {
	    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
	  },


	  /**
	   * 判断 obj 是否为 `object`
	   * @memberOf Utils
	   * @param obj
	   * @returns {boolean}
	   * @example
	   *
	   * const { Utils } = require('@ali/wxv-bridge');
	   * const { isPlainObject } = Utils;
	   * console.log(isPlainObject({})); // true
	   * console.log(isPlainObject('')); // false
	   */
	  isPlainObject: function isPlainObject(obj) {
	    return Utils._typeof(obj) === 'object';
	  },


	  /**
	   * 判断 obj 是否为 `string`
	   * @memberOf Utils
	   * @param obj
	   * @returns {boolean}
	   * @example
	   *
	   * const { Utils } = require('@ali/wxv-bridge');
	   * const { isString } = Utils;
	   * console.log(isString({})); // false
	   * console.log(isString('')); // true
	   */
	  isString: function isString(obj) {
	    return typeof obj === 'string';
	  },


	  /**
	   * 判断 obj 是否为 `非空数组`
	   * @memberOf Utils
	   * @param obj
	   * @returns {boolean}
	   * @example
	   *
	   * const { Utils } = require('@ali/wxv-bridge');
	   * const { isNonEmptyArray } = Utils;
	   * console.log(isNonEmptyArray([])); // false
	   * console.log(isNonEmptyArray([1,1,1,1])); // true
	   */
	  isNonEmptyArray: function isNonEmptyArray() {
	    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
	  },
	  appendProtocol: function appendProtocol(url) {
	    if (/^\/\//.test(url)) {
	      var bundleUrl = weex.config.bundleUrl;

	      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
	    }
	    return url;
	  },
	  encodeURLParams: function encodeURLParams(url) {
	    var parsedUrl = new UrlParser(url, true);
	    return parsedUrl.toString();
	  },
	  goToH5Page: function goToH5Page(jumpUrl) {
	    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	    var Navigator = weex.requireModule('navigator');
	    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
	    var url = Utils.appendProtocol(jumpUrlObj.toString());
	    Navigator.push({
	      url: Utils.encodeURLParams(url),
	      animated: animated
	    }, callback);
	  }
	};
	module.exports = Utils;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(313)
	)

	/* script */
	__vue_exports__ = __webpack_require__(314)

	/* template */
	var __vue_template__ = __webpack_require__(315)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-84538922"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 313 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-text": {
	    "fontSize": 24,
	    "color": "#3d3d3d"
	  },
	  "black": {
	    "color": "#3D3D3D"
	  },
	  "yellow": {
	    "color": "#EE9900"
	  },
	  "gray": {
	    "color": "#A5A5A5"
	  },
	  "red": {
	    "color": "#FF5000"
	  },
	  "margin-text": {
	    "marginRight": 6
	  }
	}

/***/ }),
/* 314 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    textValue: {
	      type: String,
	      default: ''
	    },
	    textTheme: {
	      type: String,
	      default: 'gray'
	    },
	    textStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    hasTextMargin: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    themeStyle: function themeStyle() {
	      var style = {};
	      var textStyle = this.textStyle;
	      if (textStyle && textStyle.fontSize) {
	        style = Object.assign({}, style, {
	          fontSize: textStyle.fontSize + 'px',
	          height: textStyle.fontSize * 1.2 + 'px'
	        });
	      }
	      if (textStyle && textStyle.color) {
	        style = Object.assign({}, style, {
	          color: textStyle.color
	        });
	      }
	      return style;
	    }
	  }
	};

/***/ }),
/* 315 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('text', {
	    class: ['wxc-text', _vm.textTheme, _vm.hasTextMargin ? 'margin-text' : ''],
	    style: _vm.themeStyle
	  }, [_vm._v(_vm._s(_vm.textValue))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(317)

	/* template */
	var __vue_template__ = __webpack_require__(318)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-link.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _wxcRichTextText = __webpack_require__(312);

	var _wxcRichTextText2 = _interopRequireDefault(_wxcRichTextText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var Utils = __webpack_require__(311);

	module.exports = {
	  components: { WxcRichTextText: _wxcRichTextText2.default },
	  props: {
	    linkValue: {
	      type: [String, Number],
	      default: ''
	    },
	    hasTextMargin: {
	      type: Boolean,
	      default: true
	    },
	    linkHref: {
	      type: String,
	      default: ''
	    },
	    linkTheme: {
	      type: String,
	      default: 'black'
	    },
	    linkStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  data: function data() {
	    return {
	      defObj: {}
	    };
	  },
	  methods: {
	    onLinkClick: function onLinkClick(e) {
	      var self = this;
	      Utils.goToH5Page(self.linkHref);
	      self.$emit('wxcRichTextLinkClick', { element: e, href: self.linkHref });
	    }
	  }
	};

/***/ }),
/* 318 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    on: {
	      "click": _vm.onLinkClick
	    }
	  }, [_c('wxc-rich-text-text', {
	    attrs: {
	      "textValue": _vm.linkValue,
	      "hasTextMargin": _vm.hasTextMargin,
	      "textStyle": _vm.linkStyle ? _vm.linkStyle : _vm.defObj,
	      "textTheme": _vm.linkTheme ? _vm.linkTheme : 'black'
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(320)
	)

	/* script */
	__vue_exports__ = __webpack_require__(321)

	/* template */
	var __vue_template__ = __webpack_require__(322)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-64a6a68a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 320 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-image": {
	    "width": 90,
	    "height": 24,
	    "marginRight": 6
	  }
	}

/***/ }),
/* 321 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    iconSrc: {
	      type: String,
	      default: ''
	    },
	    iconStyle: {
	      type: Object,
	      default: function _default() {
	        return {
	          height: 24
	        };
	      }
	    }
	  },
	  data: function data() {
	    return {
	      width: 90
	    };
	  },
	  computed: {
	    computedStyle: function computedStyle() {
	      var width = this.width,
	          iconStyle = this.iconStyle;

	      if (iconStyle && iconStyle.width && iconStyle.height) {
	        return {
	          width: iconStyle.width + 'px',
	          height: iconStyle.height + 'px'
	        };
	      } else {
	        return {
	          width: width + 'px',
	          height: iconStyle.height + 'px'
	        };
	      }
	    }
	  },
	  methods: {
	    onLoad: function onLoad(e) {
	      if (e.success && e.size && e.size.naturalWidth > 0) {
	        var width = e.size.naturalWidth;
	        var height = e.size.naturalHeight;
	        this.width = width * (this.iconStyle.height / height);
	      }
	    }
	  }
	};

/***/ }),
/* 322 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('image', {
	    staticClass: ["wxc-image"],
	    style: {
	      width: _vm.computedStyle.width,
	      height: _vm.computedStyle.height
	    },
	    attrs: {
	      "src": _vm.iconSrc
	    },
	    on: {
	      "load": _vm.onLoad
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(324)
	)

	/* script */
	__vue_exports__ = __webpack_require__(325)

	/* template */
	var __vue_template__ = __webpack_require__(326)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7720f470"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 324 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-tag": {
	    "borderColor": "#3d3d3d",
	    "borderWidth": 2,
	    "borderRadius": 4,
	    "marginRight": 6,
	    "backgroundColor": "rgba(0,0,0,0)",
	    "paddingLeft": 6,
	    "paddingRight": 6,
	    "height": 26,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "tag-text": {
	    "fontSize": 20,
	    "color": "#3d3d3d"
	  },
	  "black": {
	    "color": "#3D3D3D"
	  },
	  "yellow": {
	    "color": "#EE9900"
	  },
	  "blue": {
	    "color": "#30A0FF"
	  },
	  "gray": {
	    "color": "#A5A5A5"
	  },
	  "red": {
	    "color": "#FF5000"
	  },
	  "border-black": {
	    "borderColor": "#A5A5A5"
	  },
	  "border-yellow": {
	    "borderColor": "#EE9900"
	  },
	  "border-gray": {
	    "borderColor": "#A5A5A5"
	  },
	  "border-red": {
	    "borderColor": "#FF5000"
	  }
	}

/***/ }),
/* 325 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    tagValue: {
	      type: [String, Number],
	      default: ''
	    },
	    tagTheme: {
	      type: String,
	      default: 'blue'
	    },
	    tagStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    newTheme: function newTheme() {
	      var tagStyle = this.tagStyle;
	      var tagValue = this.tagValue;
	      var divStyle = {};
	      var textStyle = {};
	      if (tagStyle && tagStyle.fontSize) {
	        textStyle = Object.assign({}, textStyle, {
	          fontSize: tagStyle.fontSize + 'px'
	        });
	      }
	      if (tagStyle && tagStyle.color) {
	        textStyle = Object.assign({}, textStyle, {
	          color: tagStyle.color
	        });
	      }

	      if (tagStyle && tagStyle.borderColor) {
	        divStyle = Object.assign({}, divStyle, {
	          borderColor: tagStyle.borderColor
	        });
	      }

	      if (tagStyle && tagStyle.borderWidth) {
	        divStyle = Object.assign({}, divStyle, {
	          borderWidth: tagStyle.borderWidth + 'px'
	        });
	      }

	      if (tagStyle && tagStyle.borderRadius) {
	        divStyle = Object.assign({}, divStyle, {
	          borderRadius: tagStyle.borderRadius + 'px'
	        });
	      }

	      if (tagStyle && tagStyle.backgroundColor) {
	        divStyle = Object.assign({}, divStyle, {
	          backgroundColor: tagStyle.backgroundColor
	        });
	      }

	      if (tagStyle && tagStyle.height) {
	        divStyle = Object.assign({}, divStyle, {
	          height: tagStyle.height + 'px'
	        });
	      }

	      if (tagStyle && tagStyle.width) {
	        divStyle = Object.assign({}, divStyle, {
	          width: tagStyle.width + 'px'
	        });
	      }

	      if (tagValue && tagValue.length === 1) {
	        divStyle = Object.assign({}, divStyle, {
	          paddingLeft: 0,
	          paddingRight: 0
	        });
	      }

	      return {
	        divStyle: divStyle,
	        textStyle: textStyle
	      };
	    }
	  }
	};

/***/ }),
/* 326 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['wxc-tag', 'border-' + _vm.tagTheme],
	    style: _vm.newTheme.divStyle
	  }, [_c('text', {
	    class: ['tag-text', _vm.tagTheme],
	    style: _vm.newTheme.textStyle
	  }, [_vm._v(_vm._s(_vm.tagValue))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 327 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.isNotEmptyArray) ? _c('div', {
	    staticClass: ["wxc-rich-text"]
	  }, _vm._l((_vm.configList), function(v) {
	    return _c('div', [(v.type == 'text' && v.value) ? _c('wxc-rich-text-text', {
	      attrs: {
	        "textValue": v.value,
	        "textStyle": v.style,
	        "hasTextMargin": _vm.hasTextMargin,
	        "textTheme": v.theme
	      }
	    }) : _vm._e(), (v.type == 'link' && v.href && v.value) ? _c('wxc-rich-text-link', {
	      attrs: {
	        "linkValue": v.value,
	        "linkHref": v.href,
	        "linkStyle": v.style,
	        "hasTextMargin": _vm.hasTextMargin,
	        "linkTheme": v.theme
	      }
	    }) : _vm._e(), (v.type == 'icon' && v.src) ? _c('wxc-rich-text-icon', {
	      attrs: {
	        "iconSrc": v.src,
	        "iconStyle": v.style
	      }
	    }) : _vm._e(), (v.type == 'tag' && v.value) ? _c('wxc-rich-text-tag', {
	      attrs: {
	        "tagValue": v.value,
	        "tagTheme": v.theme,
	        "tagStyle": v.style
	      }
	    }) : _vm._e()], 1)
	  })) : _vm._e(), (_vm.isString) ? _c('text', {
	    staticClass: ["default-text"]
	  }, [_vm._v(_vm._s(_vm.configList))]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(329);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(330)
	)

	/* script */
	__vue_exports__ = __webpack_require__(331)

	/* template */
	var __vue_template__ = __webpack_require__(332)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-866cfeb4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 330 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-special-rich-text": {
	    "position": "relative"
	  },
	  "tag-div": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "color": "#A5A5A5",
	    "fontSize": 24,
	    "lineHeight": 30
	  },
	  "wxc-text": {
	    "fontSize": 24,
	    "color": "#3d3d3d",
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "overflow": "hidden"
	  },
	  "black": {
	    "color": "#3D3D3D"
	  },
	  "yellow": {
	    "color": "#EE9900"
	  },
	  "gray": {
	    "color": "#A5A5A5"
	  },
	  "red": {
	    "color": "#FF5000"
	  },
	  "margin-text": {
	    "marginRight": 6
	  }
	}

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var Utils = __webpack_require__(311);
	module.exports = {
	  components: {
	    WxcRichTextText: __webpack_require__(312),
	    WxcRichTextIcon: __webpack_require__(319),
	    WxcRichTextTag: __webpack_require__(323)
	  },
	  props: {
	    configList: {
	      type: [Array, String],
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    newList: function newList() {
	      var configList = this.configList;

	      if (Utils.isNonEmptyArray(configList) && configList.length === 2) {
	        var r1 = configList[0];
	        var r2 = configList[1];
	        var iconStyle = r1.style;
	        var textStyle = r2.style;
	        var style = {};
	        var fontSize = 24;
	        var tagWidth = iconStyle && iconStyle.width ? iconStyle.width : 24;

	        if (textStyle && textStyle.fontSize) {
	          fontSize = textStyle.fontSize;
	          style = {
	            fontSize: textStyle.fontSize + 'px',
	            lineHeight: textStyle.fontSize * 1.4 + 'px'
	          };
	        }

	        if (textStyle && textStyle.color) {
	          style = Object.assign({}, style, {
	            color: textStyle.color
	          });
	        }

	        if (r1.type === 'tag' && iconStyle && iconStyle.width) {
	          r1 = Object.assign({}, r1, {
	            style: Object.assign({}, iconStyle, { width: null })
	          });
	        }
	        var newValue = r2.value ? new Array(Math.ceil(tagWidth / fontSize) + 1).join('    ') + (' ' + r2.value) : '';
	        r2 = Object.assign({}, r2, {
	          style: style,
	          value: newValue
	        });
	        return [r1, r2];
	      } else {
	        return [];
	      }
	    },
	    top: function top() {
	      var configList = this.configList;

	      if (Utils.isNonEmptyArray(configList) && configList.length === 2) {
	        var iconStyle = configList[0].style;
	        var textStyle = configList[1].style;
	        var fontSize = 24;
	        var tagHeight = iconStyle && iconStyle.height ? iconStyle.height : 26;
	        if (textStyle && textStyle.fontSize) {
	          fontSize = textStyle.fontSize;
	        }
	        return Math.ceil((fontSize * 1.3 - tagHeight) / 2);
	      } else {
	        return 0;
	      }
	    }
	  }
	};

/***/ }),
/* 332 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-special-rich-text"]
	  }, [_c('div', {
	    staticClass: ["tag-div"],
	    style: {
	      top: _vm.top + 'px'
	    }
	  }, [(_vm.newList[0].type == 'icon' && _vm.newList[0].src) ? _c('wxc-rich-text-icon', {
	    attrs: {
	      "iconSrc": _vm.newList[0].src,
	      "iconStyle": _vm.newList[0].style
	    }
	  }) : _vm._e(), (_vm.newList[0].type == 'tag' && _vm.newList[0].value) ? _c('wxc-rich-text-tag', {
	    attrs: {
	      "tagValue": _vm.newList[0].value,
	      "tagTheme": _vm.newList[0].theme,
	      "tagStyle": _vm.newList[0].style
	    }
	  }) : _vm._e()], 1), (_vm.newList[1].value) ? _c('text', {
	    class: ['wxc-text', _vm.newList[1].theme],
	    style: _vm.newList[1].style
	  }, [_vm._v(_vm._s(_vm.newList[1].value))]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(334);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(335)
	)

	/* script */
	__vue_exports__ = __webpack_require__(336)

	/* template */
	var __vue_template__ = __webpack_require__(338)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-635e9f67"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 335 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-search-bar": {
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "height": 84,
	    "flexDirection": "row"
	  },
	  "wxc-search-bar-yellow": {
	    "backgroundColor": "#ffc900"
	  },
	  "search-bar-input": {
	    "position": "absolute",
	    "top": 10,
	    "paddingTop": 0,
	    "paddingBottom": 0,
	    "paddingRight": 40,
	    "paddingLeft": 60,
	    "fontSize": 26,
	    "width": 624,
	    "height": 64,
	    "lineHeight": 64,
	    "backgroundColor": "#E5E5E5",
	    "outline": "none",
	    "borderRadius": 6
	  },
	  "search-bar-input-yellow": {
	    "backgroundColor": "#fff6d6",
	    "placeholderColor": "#666666"
	  },
	  "search-bar-icon": {
	    "position": "absolute",
	    "width": 30,
	    "height": 30,
	    "left": 34,
	    "top": 28
	  },
	  "search-bar-close": {
	    "position": "absolute",
	    "width": 30,
	    "height": 30,
	    "right": 120,
	    "top": 28
	  },
	  "search-bar-button": {
	    "width": 94,
	    "height": 36,
	    "fontSize": 30,
	    "textAlign": "center",
	    "backgroundColor": "#ffffff",
	    "marginTop": 16,
	    "marginRight": 0,
	    "color": "#333333",
	    "position": "absolute",
	    "right": 8,
	    "top": 9
	  },
	  "search-bar-button-yellow": {
	    "backgroundColor": "#FFC900"
	  },
	  "input-has-dep": {
	    "paddingLeft": 240,
	    "width": 710
	  },
	  "bar-dep": {
	    "width": 170,
	    "paddingRight": 12,
	    "paddingLeft": 12,
	    "height": 42,
	    "alignItems": "center",
	    "flexDirection": "row",
	    "position": "absolute",
	    "left": 24,
	    "top": 22,
	    "borderRightStyle": "solid",
	    "borderRightWidth": 1,
	    "borderRightColor": "#C7C7C7"
	  },
	  "bar-dep-yellow": {
	    "borderRightColor": "#C7C7C7"
	  },
	  "dep-text": {
	    "flex": 1,
	    "textAlign": "center",
	    "fontSize": 26,
	    "color": "#666666",
	    "marginRight": 6,
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "dep-arrow": {
	    "width": 24,
	    "height": 24
	  },
	  "icon-has-dep": {
	    "left": 214
	  },
	  "disabled-input": {
	    "width": 750,
	    "height": 64,
	    "position": "absolute",
	    "left": 0,
	    "backgroundColor": "rgba(0,0,0,0)"
	  },
	  "has-dep-disabled": {
	    "width": 550,
	    "left": 200
	  }
	}

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var icon = __webpack_require__(337);
	module.exports = {
	  props: {
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    alwaysShowCancel: {
	      type: Boolean,
	      default: false
	    },
	    inputType: {
	      type: String,
	      default: 'text'
	    },
	    mod: {
	      type: String,
	      default: 'default'
	    },
	    autofocus: {
	      type: Boolean,
	      default: false
	    },
	    theme: {
	      type: String,
	      default: 'gray'
	    },
	    defaultValue: {
	      type: String,
	      default: ''
	    },
	    placeholder: {
	      type: String,
	      default: '搜索'
	    },
	    depName: {
	      type: String,
	      default: '杭州'
	    }
	  },
	  computed: {
	    needShowCancel: function needShowCancel() {
	      return this.alwaysShowCancel || this.showCancel;
	    }
	  },
	  data: function data() {
	    return {
	      inputIcon: icon.inputIcon,
	      closeIcon: icon.closeIcon,
	      arrowIcon: icon.arrowIcon,
	      showCancel: false,
	      showClose: false,
	      value: ''
	    };
	  },
	  created: function created() {
	    this.defaultValue && (this.value = this.defaultValue);
	    if (this.disabled) {
	      this.showCancel = false;
	      this.showClose = false;
	    }
	  },

	  methods: {
	    onBlur: function onBlur() {
	      var self = this;
	      setTimeout(function () {
	        self.showCancel = false;
	        self.detectShowClose();
	        self.$emit('wxcSearchbarInputOnBlur', { value: self.value });
	      }, 10);
	    },
	    autoBlur: function autoBlur() {
	      this.$refs['search-input'].blur();
	    },
	    onFocus: function onFocus() {
	      this.showCancel = true;
	      this.detectShowClose();
	      this.$emit('wxcSearchbarInputOnFocus', { value: this.value });
	    },
	    closeClicked: function closeClicked() {
	      this.value = '';
	      this.showCancel && (this.showCancel = false);
	      this.showClose && (this.showClose = false);
	      this.$emit('wxcSearchbarCloseClicked', { value: this.value });
	      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
	    },
	    onInput: function onInput(e) {
	      this.value = e.value;
	      this.showCancel = true;
	      this.detectShowClose();
	      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
	    },
	    onSubmit: function onSubmit(e) {
	      this.onBlur();
	      this.value = e.value;
	      this.showCancel = true;
	      this.detectShowClose();
	      this.$emit('wxcSearchbarInputReturned', { value: this.value });
	    },
	    cancelClicked: function cancelClicked() {
	      this.showCancel && (this.showCancel = false);
	      this.showClose && (this.showClose = false);
	      this.$emit('wxcSearchbarCancelClicked', { value: this.value });
	    },
	    detectShowClose: function detectShowClose() {
	      this.showClose = this.value.length > 0 && this.showCancel;
	    },
	    depClicked: function depClicked() {
	      this.$emit('wxcSearchbarDepChooseClicked', {});
	    },
	    inputDisabledClicked: function inputDisabledClicked() {
	      this.$emit('wxcSearchbarInputDisabledClicked', {});
	    },
	    setValue: function setValue(value) {
	      this.value = value;
	    }
	  }
	};

/***/ }),
/* 337 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by Tw93 on 2016/10/31.
	 */

	module.exports = {
	  inputIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcWdnZ2dnZ2ZmZmZmZmdnZ4CAgGZmZmZmZmZmZmdnZ3R0dGdnZ2dnZ2ZmZmdnZ2ZmZmdnZ2ZmZmlpaW1tbWdnZ2dnZ2pqamdnZ2ZmZmdnZ2hoaGdnZ2dnZ2dnZ2hoaGZmZmhoaGZmZmlpaWdnZ2ZmZkA5lL8AAAAldFJOUwDdmfcF6QT5S+ZcC4toHs6YzLlJB2aGNclw5FHQl7pCjGevP67QWKJRAAAA4klEQVQoz62S2RaCMAxEy9ZSFtkXRcVt/v8XrRRQWk6ezNPQS9IkHcZ01FVeSCGLvKqZFbyRWEI23KCHTB17pdu6padUdtjQLgCcKJ50HDlA0P3mKpr466efKP7N56pyuqmWqvrr/XeVa/Si8ptlIgnHN7DvQM7zVUBkDRoBlVY5vNjCsYdcqwKlvSZWotBCwt3BLqQWAu0ObiHo7IC6+4oz3fmFnnsgt3Zazhp75zfgSL5Yz6n33vxvuQUQ4a7Xrh+v9anY8l+nno6chQaffR6cL8PUhcWN+Acfaf4iMBsfzzdtFxehXooN0gAAAABJRU5ErkJggg==",

	  closeIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUxpcWZmZmZmZmlpaWZmZmZmZmdnZ2dnZ2ZmZmxsbG1tbWZmZmZmZmZmZuXl5XJycv///2lpaeTk5Hh4eHd3d/39/XNzc2EMiGIAAAANdFJOUwD8a07Zm/P9thoc8m5QAlfPAAAAn0lEQVQoz3VS6RrEEBCbKuro0KJ9/0dddXx0dyc/HMkgAkCFYYpLyRUzMEOLBRsWoQe/Wpxg187vG76w7a3+i89KWaMt/sA+54gyTGelzlg6kX0WP/EK/unvcKXizQCrheFwWfHuCHUpA1W3yJTzpalzBRyHMnjkIHEog0dJC+RW5OEvu/dkl7xgiyT2SFKPhA6RjJ1+KPpp6c/w7/t8AFQ8F1LEfZUoAAAAAElFTkSuQmCC",

	  arrowIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcWxsbGhoaGZmZmZmZmZmZmZmZmdnZ2ZmZm9vb3FxcWtra2ZmZmdnZ3R0dICAgICAgGZmZmZmZmdnZ2dnZ2ZmZmZmZmZmZmhoaGlpaWdnZ2dnZ2dnZ2ZmZmZmZpgUTqAAAAAedFJOUwAaIOUj3tvTrxcSK+3HCwIGN5uruon5/FNEwsHz9AT339MAAABsSURBVCjP3ZFXDoAwDEM7KB0UCmWW4fsfEyHE5gKQr2dFkW2FkB+NGvQhdK92lojZxiyG3BeRAE9WTDhEdJxTCVssUFhIenYxKaZASBiRmqt/VqHpugZVdk+Wl2hblPkzs/OAd6916vq7r5gBMI0EqzF/qlIAAAAASUVORK5CYII="
	};

/***/ }),
/* 338 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.mod === 'default') ? _c('div', {
	    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme]
	  }, [_c('input', {
	    ref: "search-input",
	    class: ['search-bar-input', 'search-bar-input-' + _vm.theme],
	    style: {
	      width: _vm.needShowCancel ? '624px' : '710px'
	    },
	    attrs: {
	      "autofocus": _vm.autofocus,
	      "disabled": _vm.disabled,
	      "value": _vm.value,
	      "type": _vm.inputType,
	      "placeholder": _vm.placeholder
	    },
	    on: {
	      "blur": _vm.onBlur,
	      "focus": _vm.onFocus,
	      "input": _vm.onInput,
	      "return": _vm.onSubmit
	    }
	  }), (_vm.disabled) ? _c('div', {
	    staticClass: ["disabled-input"],
	    on: {
	      "click": _vm.inputDisabledClicked
	    }
	  }) : _vm._e(), _c('image', {
	    staticClass: ["search-bar-icon"],
	    attrs: {
	      "src": _vm.inputIcon
	    }
	  }), (_vm.showClose) ? _c('image', {
	    staticClass: ["search-bar-close"],
	    attrs: {
	      "src": _vm.closeIcon
	    },
	    on: {
	      "click": _vm.closeClicked
	    }
	  }) : _vm._e(), (_vm.needShowCancel) ? _c('text', {
	    class: ['search-bar-button', 'search-bar-button-' + _vm.theme],
	    on: {
	      "click": _vm.cancelClicked
	    }
	  }, [_vm._v("取消 ")]) : _vm._e()]) : _vm._e(), (_vm.mod === 'hasDep') ? _c('div', {
	    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme]
	  }, [_c('input', {
	    class: ['search-bar-input', 'input-has-dep', 'search-bar-input-' + _vm.theme],
	    attrs: {
	      "disabled": _vm.disabled,
	      "autofocus": _vm.autofocus,
	      "value": _vm.value,
	      "type": _vm.inputType,
	      "placeholder": _vm.placeholder
	    },
	    on: {
	      "blur": _vm.onBlur,
	      "focus": _vm.onFocus,
	      "input": _vm.onInput,
	      "return": _vm.onSubmit
	    }
	  }), (_vm.disabled) ? _c('div', {
	    staticClass: ["disabled-input", "has-dep-disabled"],
	    on: {
	      "click": _vm.inputDisabledClicked
	    }
	  }) : _vm._e(), _c('div', {
	    class: ['bar-dep', '.bar-dep-' + _vm.theme],
	    on: {
	      "click": _vm.depClicked
	    }
	  }, [_c('text', {
	    staticClass: ["dep-text"]
	  }, [_vm._v(_vm._s(_vm.depName))]), _c('image', {
	    staticClass: ["dep-arrow"],
	    attrs: {
	      "src": _vm.arrowIcon
	    }
	  })]), _c('image', {
	    staticClass: ["search-bar-icon", "icon-has-dep"],
	    attrs: {
	      "src": _vm.inputIcon
	    }
	  })]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(340);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(341)
	)

	/* script */
	__vue_exports__ = __webpack_require__(342)

	/* template */
	var __vue_template__ = __webpack_require__(343)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7a4f8165"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 341 */
/***/ (function(module, exports) {

	module.exports = {
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "full-rest": {
	    "flex": 1
	  },
	  "root": {
	    "paddingTop": 28,
	    "paddingBottom": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "title": {
	    "height": 40,
	    "paddingLeft": 70,
	    "paddingRight": 70
	  },
	  "content": {
	    "paddingTop": 9,
	    "paddingBottom": 42,
	    "paddingLeft": 70,
	    "paddingRight": 70
	  },
	  "last-one-content": {
	    "paddingBottom": 0
	  },
	  "line": {
	    "position": "absolute",
	    "top": 0,
	    "bottom": 0,
	    "left": 38,
	    "width": 2,
	    "backgroundColor": "#FFC300"
	  },
	  "first-one-title-line": {
	    "top": 20
	  },
	  "last-one-title-line": {
	    "bottom": 20
	  },
	  "last-one-content-line": {
	    "width": 0
	  },
	  "point": {
	    "position": "absolute",
	    "top": 13,
	    "left": 32,
	    "width": 14,
	    "height": 14,
	    "backgroundColor": "#FFF0BD",
	    "borderStyle": "solid",
	    "borderWidth": 2,
	    "borderColor": "#EE9900",
	    "borderRadius": 100
	  },
	  "highlight-point": {
	    "top": 7,
	    "left": 26,
	    "width": 26,
	    "height": 26,
	    "backgroundColor": "#EE9900",
	    "borderStyle": "solid",
	    "borderWidth": 6,
	    "borderColor": "#FFE78D"
	  },
	  "text-title": {
	    "fontSize": 30,
	    "color": "#3d3d3d"
	  },
	  "text-highlight-title": {
	    "color": "#EE9900"
	  },
	  "text-desc": {
	    "fontSize": 24,
	    "color": "#a5a5a5",
	    "marginBottom": 12
	  },
	  "text-date": {
	    "fontSize": 24,
	    "color": "#a5a5a5"
	  }
	}

/***/ }),
/* 342 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    list: {
	      type: Array,
	      required: true
	    },
	    themeColor: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    cItems: function cItems() {
	      return this.adapter(this.list);
	    }
	  },
	  methods: {
	    adapter: function adapter(items) {
	      var _themeColor = this.themeColor,
	          lineColor = _themeColor.lineColor,
	          pointInnerColor = _themeColor.pointInnerColor,
	          pointBorderColor = _themeColor.pointBorderColor,
	          highlightTitleColor = _themeColor.highlightTitleColor,
	          highlightPointInnerColor = _themeColor.highlightPointInnerColor,
	          highlightPointBorderColor = _themeColor.highlightPointBorderColor;

	      var len = items.length;
	      var pre = Date.now();

	      return items.map(function (item, index) {
	        item.key = pre + '_' + index;
	        item.__titleLineClass__ = [];
	        item.__contentClass__ = [];
	        item.__contentLineClass__ = [];
	        item.__pointClass__ = [];
	        item.__titleTextClass__ = [];
	        item.__pointStyle__ = {};
	        item.__lineStyle__ = {};
	        item.__titleStyle__ = {};

	        if (lineColor) item.__lineStyle__.backgroundColor = lineColor;
	        if (pointInnerColor) item.__pointStyle__.backgroundColor = pointInnerColor;
	        if (pointBorderColor) item.__pointStyle__.borderColor = pointBorderColor;

	        if (index === 0) {
	          item.__titleLineClass__.push('first-one-title-line');
	        }

	        if (index === len - 1) {
	          item.__titleLineClass__.push('last-one-title-line');
	          item.__contentClass__.push('last-one-content');
	          item.__contentLineClass__.push('last-one-content-line');
	        }

	        if (item.highlight) {
	          item.__pointClass__.push('highlight-point');
	          item.__titleTextClass__.push('text-highlight-title');
	          if (highlightTitleColor) item.__titleStyle__.color = highlightTitleColor;
	          if (highlightPointInnerColor) item.__pointStyle__.backgroundColor = highlightPointInnerColor;
	          if (highlightPointBorderColor) item.__pointStyle__.borderColor = highlightPointBorderColor;
	        }
	        return item;
	      });
	    }
	  }
	};

/***/ }),
/* 343 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, _vm._l((_vm.cItems), function(item, index) {
	    return _c('div', {
	      key: item.key
	    }, [_c('div', {
	      staticClass: ["title", "flex-row"]
	    }, [_c('div', {
	      staticClass: ["line"],
	      class: item.__titleLineClass__,
	      style: item.__lineStyle__
	    }), _c('div', {
	      staticClass: ["point"],
	      class: item.__pointClass__,
	      style: item.__pointStyle__
	    }), _c('text', {
	      staticClass: ["text-title", "full-rest"],
	      class: item.__titleTextClass__,
	      style: item.__titleStyle__
	    }, [_vm._v(_vm._s(item.title))])]), _c('div', {
	      staticClass: ["content", "flex-row"],
	      class: item.__contentClass__
	    }, [_c('div', {
	      staticClass: ["line"],
	      class: item.__contentLineClass__,
	      style: item.__lineStyle__
	    }), _c('div', {
	      staticClass: ["full-rest"]
	    }, [(item.desc) ? _c('text', {
	      staticClass: ["text-desc"]
	    }, [_vm._v(_vm._s(item.desc))]) : _vm._e(), (item.date) ? _c('text', {
	      staticClass: ["text-date"]
	    }, [_vm._v(_vm._s(item.date))]) : _vm._e()])])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(345);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(346)
	)

	/* script */
	__vue_exports__ = __webpack_require__(347)

	/* template */
	var __vue_template__ = __webpack_require__(348)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1a011203"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 346 */
/***/ (function(module, exports) {

	module.exports = {
	  "slide-nav": {
	    "position": "absolute",
	    "zIndex": 1000
	  }
	}

/***/ }),
/* 347 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var DOM = weex.requireModule('dom');
	// const Modal = weex.requireModule('modal');
	var Animation = weex.requireModule('animation');
	var OFFSET_ACCURACY = 10;
	var SCALE = weex.config.env.platform.toLowerCase() === 'web' ? 2 : 1;

	function _toNum(str) {
	  return typeof str === 'number' ? str : parseFloat((str || '').replace(/px$/i, ''));
	}

	function _getHeight(element, callback) {
	  if (!element) {
	    return;
	  }
	  if (element.__cacheHeight) {
	    element.__cacheHeight && callback && callback(element.__cacheHeight);
	  } else {
	    DOM.getComponentRect(element, function (res) {
	      var height = (parseFloat(res && res.size && res.size.height) || 0) / SCALE;
	      height && callback && callback(element.__cacheHeight = height);
	    });
	  }
	}

	exports.default = {

	  props: {
	    position: {
	      'type': String,
	      'default': 'top'
	    },

	    height: [String, Number]
	  },

	  data: function data() {
	    return {
	      visible: true
	    };
	  },


	  watch: {
	    visible: function visible(newVal) {
	      newVal ? this._slideIn() : this._slideOut();
	    }
	  },

	  created: function created() {
	    this._height = _toNum(this.height) || 0;
	    this._isBottom = this.position === 'bottom';
	    this._direction = this._isBottom ? 1 : -1;
	  },


	  methods: {
	    _slideOut: function _slideOut() {
	      var _this = this;

	      this.getHeight(function (height) {
	        _this.$emit('slideOut');
	        _this.slideY(height * _this._direction * SCALE, function () {
	          _this.$emit('slideOutEnd');
	        });
	      });
	    },
	    _slideIn: function _slideIn() {
	      var _this2 = this;

	      this.getHeight(function (height) {
	        _this2.$emit('slideIn');
	        _this2.slideY(0, function () {
	          _this2.$emit('slideInEnd');
	        });
	      });
	    },
	    getHeight: function getHeight(callback) {
	      return _getHeight(this.$refs.wrapper, callback);
	    },
	    slideOut: function slideOut() {
	      this.visible = false;
	    },
	    slideIn: function slideIn() {
	      this.visible = true;
	    },
	    slideY: function slideY(y, callback) {
	      Animation.transition(this.$refs.wrapper, {
	        styles: { transform: 'translateY(' + y + 'px)' },
	        duration: 150, //ms
	        timingFunction: 'ease',
	        delay: 0 //ms
	      }, callback);
	    }
	  },

	  handleTouchStart: function handleTouchStart(e) {
	    var touch = e.changedTouches[0];
	    this._touchParams = {
	      pageY: touch.screenY,
	      startY: touch.screenY,
	      lastPageY: touch.screenY,
	      timeStamp: e.timeStamp,
	      direction: -1
	    };
	  },
	  handleTouchMove: function handleTouchMove(e, bottomNav) {
	    var tp = this._touchParams;
	    var touch = e.changedTouches[0];
	    var offsetY = void 0;

	    // 安卓下滚动的时候经常不触发touchstart事件
	    if (!tp || tp.hasEnd) {
	      return this._touchParams = {
	        pageY: touch.screenY,
	        startY: touch.screenY,
	        lastPageY: touch.screenY,
	        timeStamp: e.timeStamp,
	        direction: -1
	      };
	    }

	    offsetY = touch.screenY - tp.pageY;

	    tp.lastPageY = tp.pageY;
	    tp.lastDirection = tp.direction;
	    tp.direction = offsetY > 0 ? 1 : -1;

	    if (tp.lastDirection !== tp.direction) {
	      tp.startY = tp.lastPageY;
	    }

	    tp.pageY = touch.screenY;
	    tp.offsetY = tp.pageY - tp.startY;

	    if (!this.__scrollable && bottomNav) {
	      if (tp.offsetY <= -OFFSET_ACCURACY) {
	        bottomNav.slideOut();
	      } else if (tp.offsetY >= OFFSET_ACCURACY) {
	        bottomNav.slideIn();
	      }
	    }
	  },
	  handleTouchEnd: function handleTouchEnd() {
	    var tp = this._touchParams;
	    tp && (tp.hasEnd = true);
	  },
	  handleScroll: function handleScroll(e, scroller, topNav, bottomNav, startThreshold) {
	    var _this3 = this;

	    var moveThreshold = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;

	    var scrollY = e.contentOffset.y;
	    var nav = topNav || bottomNav;
	    var scrollFn = function scrollFn(maxScrollY) {
	      if (-scrollY > maxScrollY) {
	        return;
	      }
	      maxScrollY = Math.abs(maxScrollY);
	      if (Math.abs(scrollY) < startThreshold) {
	        if (Math.abs(scrollY) >= maxScrollY - OFFSET_ACCURACY) {
	          var tp = _this3._touchParams;
	          if (!tp) {
	            return;
	          }
	          var offsetY = tp.offsetY;
	          if (offsetY < -OFFSET_ACCURACY) {
	            bottomNav && bottomNav.slideOut();
	          } else if (offsetY > OFFSET_ACCURACY) {
	            bottomNav && bottomNav.slideIn();
	          }
	        } else {
	          topNav && topNav.slideIn();
	          bottomNav && bottomNav.slideIn();
	        }
	      } else {
	        var _tp = _this3._touchParams;
	        if (!_tp) {
	          return;
	        }
	        var _offsetY = _tp.offsetY;
	        if (Math.abs(_offsetY) >= moveThreshold) {
	          if (_offsetY > 0) {
	            topNav && topNav.slideIn();
	            bottomNav && bottomNav.slideIn();
	          } else {
	            topNav && topNav.slideOut();
	            bottomNav && bottomNav.slideOut();
	          }
	        }
	      }
	    };

	    var maxScrollYCheck = function maxScrollYCheck(maxScrollY) {
	      if (!_this3.__scrollable) {
	        return;
	      }
	      if (startThreshold) {
	        scrollFn(maxScrollY);
	      } else {
	        nav.getHeight(function (navHeight) {
	          startThreshold = navHeight;
	          scrollFn(maxScrollY);
	        });
	      }
	    };

	    if (!nav) {
	      return;
	    }

	    _getHeight(scroller, function (scrollerHeight) {
	      var maxScrollY = e.contentSize.height - scrollerHeight;
	      _this3.__scrollable = maxScrollY >= OFFSET_ACCURACY;

	      if (bottomNav) {
	        bottomNav.getHeight(function (height) {
	          _this3.__scrollable = maxScrollY >= height;
	          maxScrollYCheck(maxScrollY);
	        });
	      } else {
	        maxScrollYCheck(maxScrollY);
	      }
	    });
	  }
	};

/***/ }),
/* 348 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "wrapper",
	    staticClass: ["slide-nav"]
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(350);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(351)
	)

	/* script */
	__vue_exports__ = __webpack_require__(352)

	/* template */
	var __vue_template__ = __webpack_require__(354)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e431dcf2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 351 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-slider-bar": {
	    "userSelect": "none"
	  },
	  "slider-bar-container": {
	    "height": 56,
	    "display": "flex",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "value-bar": {
	    "height": 4
	  },
	  "slide-block": {
	    "width": 56,
	    "height": 56,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 28,
	    "borderWidth": 1,
	    "borderColor": "rgba(0,0,0,0.1)",
	    "boxShadow": "0 6px 12px rgba(0, 0, 0, 0.05)",
	    "position": "absolute",
	    "left": 0,
	    "bottom": 0
	  }
	}

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var Utils = __webpack_require__(353);
	var EB = weex.requireModule('expressionBinding');
	var animation = weex.requireModule('animation');
	var dom = weex.requireModule('dom');

	exports.default = {
	  data: function data() {
	    return {
	      env: 'weex',
	      diffX1: 0,
	      diffX2: 0,
	      barWidth: 0,
	      preventMoveEvent: true,
	      timeout: 100,
	      minDiffX: 0,
	      selectRange: [0, 0]
	    };
	  },
	  props: {
	    length: {
	      type: Number,
	      default: 500
	    },
	    height: {
	      type: Number,
	      default: 4
	    },
	    // 是否双滑块模式
	    range: {
	      type: Boolean,
	      default: false
	    },
	    // 最小值
	    min: {
	      type: Number,
	      default: 0
	    },
	    // 最大值
	    max: {
	      type: Number,
	      default: 100
	    },
	    // 最小取值范围，用于范围选择范围最小差值
	    minDiff: {
	      type: Number,
	      default: 5
	    },
	    // 设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]
	    value: {
	      type: [Number, Array],
	      default: 0
	    },
	    // 设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]
	    defaultValue: {
	      type: [Number, Array],
	      default: 0
	    },
	    // 值为 true 时，滑块为禁用状态
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    invalidColor: {
	      type: String,
	      default: '#E0E0E0'
	    },
	    validColor: {
	      type: String,
	      default: '#EE9900'
	    },
	    disabledColor: {
	      type: String,
	      default: '#AAA'
	    }
	  },
	  created: function created() {
	    if (Utils.env.isWeb()) {
	      this.env = 'web';
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.block1 = this.$refs['slide-block-1']; // 左侧滑块
	    this.block2 = this.$refs['slide-block-2']; // 右侧滑块
	    this.valueBar = this.$refs['value-bar']; // 黄色值条
	    this.barContainer = this.$refs['bar-container']; // 滚动条容器

	    if (!this.range) {
	      this.diffX1 = this._getDiffX(this.value || this.defaultValue);
	    } else {
	      this.diffX1 = this._getDiffX(this.value[0] || this.defaultValue[0]);
	      this.diffX2 = this._getDiffX(this.value[1] || this.defaultValue[1]);
	      this.barWidth = this.diffX2 - this.diffX1;
	    }
	    // 是否支持expresstionBinding
	    if (Utils.env.supportsEB()) {
	      this.block1 && EB.enableBinding(this.block1.ref, 'pan');
	      this.block2 && EB.enableBinding(this.block2.ref, 'pan');
	      this.valueBar && EB.enableBinding(this.valueBar.ref, 'pan');
	    }
	    if (Utils.env.isAndroid()) {
	      this.timeout = 250;
	    }
	    if (this.range) {
	      this.selectRange = this.value || this.defaultValue; // 初始化范围选择返回数据
	      this.minDiffX = this.minDiff / (this.max - this.min) * this.length; // 滑块1、2之前最小间距
	    }
	    // 由于weex在mounted后渲染是异步的不能确保元素渲染完成，需要异步执行
	    setTimeout(function () {
	      dom.getComponentRect(_this.barContainer, function (option) {
	        var left = option.size.left;

	        _this.leftDiffX = left;
	      });
	    }, 100);

	    this.bindExp();
	  },

	  computed: {
	    containerStyle: function containerStyle() {
	      return {
	        width: this.length + 56 + 'px',
	        height: '56px'
	      };
	    },
	    rangeBarStyle: function rangeBarStyle() {
	      return {
	        width: this.length + 'px',
	        height: this.height + 'px',
	        flexDirection: 'row',
	        backgroundColor: this.invalidColor,
	        overflow: 'hidden'
	      };
	    },
	    valueBarStyle: function valueBarStyle() {
	      var left = 0;
	      var width = 0;
	      if (!this.range) {
	        width = this.diffX1;
	      } else {
	        left = this.diffX1;
	        width = this.diffX2 - this.diffX1;
	      }
	      return {
	        width: width + 'px',
	        height: this.height + 'px',
	        transform: 'translateX(' + left + 'px)',
	        backgroundColor: this.disabled ? this.disabledColor : this.validColor
	      };
	    },
	    blockStyle1: function blockStyle1() {
	      return {
	        transform: 'translateX(' + this.diffX1 + 'px)'
	      };
	    },
	    blockStyle2: function blockStyle2() {
	      return {
	        transform: 'translateX(' + this.diffX2 + 'px)'
	      };
	    }
	  },
	  methods: {
	    dispatchPan: function dispatchPan() {},


	    // 更新单选值或最小值
	    _weexStartHandler1: function _weexStartHandler1() {
	      var _this2 = this;

	      this.firstInterval = setInterval(function () {
	        if (!_this2.range) {
	          dom.getComponentRect(_this2.valueBar, function (option) {
	            var width = option.size.width;

	            var value = _this2._getValue(width);
	            _this2.$emit('updateValue', value);
	          });
	        } else {
	          dom.getComponentRect(_this2.block1, function (option) {
	            var left = option.size.left;

	            _this2.selectRange[0] = _this2._getValue(left - _this2.leftDiffX);
	            _this2.$emit('updateValue', _this2.selectRange);
	          });
	        }
	      }, this.timeout);
	    },


	    // 更新最大值
	    _weexStartHandler2: function _weexStartHandler2() {
	      var _this3 = this;

	      this.secondInterval = setInterval(function () {
	        dom.getComponentRect(_this3.block2, function (option) {
	          var left = option.size.left;

	          _this3.selectRange[1] = _this3._getValue(left - _this3.leftDiffX);
	          _this3.$emit('updateValue', _this3.selectRange);
	        });
	      }, this.timeout);
	    },


	    // 清除定时器
	    _weexEndHandler: function _weexEndHandler() {
	      this.firstInterval && clearInterval(this.firstInterval);
	      this.secondInterval && clearInterval(this.secondInterval);
	    },
	    _webStartHandler: function _webStartHandler(e) {
	      if (this.env === 'weex') {
	        return;
	      }
	      this.startX = e.touch.clientX;
	      this.startDiffX1 = this.diffX1;
	      this.startDiffX2 = this.diffX2;
	    },
	    _webMoveHandler1: function _webMoveHandler1(e) {
	      if (this.env === 'weex' || this.disabled) {
	        return;
	      }
	      var deltaX = e.touch.clientX - this.startX;
	      var diff = this.startDiffX1 + deltaX;
	      var max = this.length;
	      if (this.range) {
	        max = this.diffX2 - this.minDiffX;
	      }
	      if (diff > 0 && diff < max) {
	        this.diffX1 = diff;
	        animation.transition(this.block1, {
	          styles: {
	            transform: 'translateX(' + this.diffX1 + 'px)'
	          }
	        }, function () {});
	        if (!this.range) {
	          this.$emit('updateValue', this._getValue(this.diffX1));
	        } else {
	          this.selectRange[0] = this._getValue(this.diffX1);
	          this.$emit('updateValue', this.selectRange);
	        }
	      }
	    },
	    _webMoveHandler2: function _webMoveHandler2(e) {
	      if (this.env === 'weex' || this.disabled) {
	        return;
	      }
	      var deltaX = e.touch.clientX - this.startX;
	      var diff = this.startDiffX2 + deltaX;
	      var min = this.diffX1 + this.minDiffX;
	      var max = this.length;
	      if (diff > min && diff < max) {
	        this.diffX2 = diff;
	        animation.transition(this.block2, {
	          styles: {
	            transform: 'translateX(' + this.diffX2 + 'px)'
	          }
	        }, function () {});
	        if (!this.range) {
	          this.$emit('updateValue', this._getValue(this.diffX2));
	        } else {
	          this.selectRange[1] = this._getValue(this.diffX2);
	          this.$emit('updateValue', this.selectRange);
	        }
	      }
	    },
	    bindExp: function bindExp() {
	      var self = this;

	      // 如果禁用，不行进行表达式绑定
	      if (self.disabled) {
	        return;
	      }

	      // 初始化按钮&条的大小范围
	      var blockMax1 = 0;
	      if (self.range) {
	        blockMax1 = self.diffX2 - self.minDiffX;
	      } else {
	        blockMax1 = self.length;
	      }

	      var blockMax2 = self.length;
	      var blockMin2 = self.diffX1 + self.minDiffX;
	      var barMax1 = self.diffX2;
	      var barMax2 = self.length - self.diffX1;

	      // 滑块1表达式
	      var expBlock1 = '{"type":"CallExpression","children":[{"type":"Identifier","value":"min"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":' + blockMax1 + '},{"type":"CallExpression","children":[{"type":"Identifier","value":"max"},{"type":"Arguments","children":[{"type":"+","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + self.diffX1 + '}]},{"type":"NumericLiteral","value":0}]}]}]}]}';
	      // 滑块2表达式
	      var expBlock2 = '{"type":"CallExpression","children":[{"type":"Identifier","value":"min"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":' + blockMax2 + '},{"type":"CallExpression","children":[{"type":"Identifier","value":"max"},{"type":"Arguments","children":[{"type":"+","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + self.diffX2 + '}]},{"type":"NumericLiteral","value":' + blockMin2 + '}]}]}]}]}';
	      // valuebar表达式
	      var expBar1 = '{"type":"CallExpression","children":[{"type":"Identifier","value":"min"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":' + barMax1 + '},{"type":"CallExpression","children":[{"type":"Identifier","value":"max"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":0},{"type":"-","children":[{"type":"NumericLiteral","value":' + self.barWidth + '},{"type":"Identifier","value":"x"}]}]}]}]}]}';
	      // valuebar 范围表达式
	      var expBar2 = '{"type":"CallExpression","children":[{"type":"Identifier","value":"min"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":' + barMax2 + '},{"type":"CallExpression","children":[{"type":"Identifier","value":"max"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":0},{"type":"+","children":[{"type":"NumericLiteral","value":' + self.barWidth + '},{"type":"Identifier","value":"x"}]}]}]}]}]}';

	      if (!self.range) {
	        // 单选
	        var args = [{
	          element: self.block1.ref,
	          property: 'transform.translateX',
	          expression: expBlock1
	        }, {
	          element: self.valueBar.ref,
	          property: 'width',
	          expression: expBlock1
	        }];
	        EB && EB.createBinding(self.block1.ref, 'pan', '', args, function (e) {
	          if (e.state === 'end') {
	            var range = self.getRange();
	            // 限制diffX1范围
	            self.diffX1 = self._restrictValue(range.rangeX1, self.diffX1 + e.deltaX);
	            self.bindExp();
	          }
	        });
	      } else {
	        // 选范围
	        var _args = [{
	          element: self.block1.ref,
	          property: 'transform.translateX',
	          expression: expBlock1
	        }, {
	          element: self.valueBar.ref,
	          property: 'transform.translateX',
	          expression: expBlock1
	        }, {
	          element: self.valueBar.ref,
	          property: 'width',
	          expression: expBar1
	        }];

	        var args2 = [{
	          element: self.block2.ref,
	          property: 'transform.translateX',
	          expression: expBlock2
	        }, {
	          element: self.valueBar.ref,
	          property: 'width',
	          expression: expBar2
	        }];

	        EB && EB.createBinding(self.block1.ref, 'pan', '', _args, function (e) {
	          if (e.state === 'end') {
	            var range = self.getRange();
	            self.barWidth = self._restrictValue(range.rangeX1, self.barWidth - e.deltaX);
	            self.diffX1 = self._restrictValue(range.rangeX1, self.diffX1 + e.deltaX);
	            self.bindExp();
	          }
	        });

	        EB && EB.createBinding(self.block2.ref, 'pan', '', args2, function (e) {
	          if (e.state === 'end') {
	            var range = self.getRange();
	            self.diffX2 = self._restrictValue(range.rangeX2, self.diffX2 + e.deltaX);
	            self.barWidth = self._restrictValue([0, self.length - self.diffX1], self.barWidth + e.deltaX);
	            self.bindExp();
	          }
	        });
	      }
	    },


	    // 获取diffx1 diffx2 取值范围
	    getRange: function getRange(deltaX) {
	      if (!this.range) {
	        return {
	          rangeX1: [0, this.length]
	        };
	      } else {
	        return {
	          rangeX1: [0, this.diffX2 - this.minDiffX],
	          rangeX2: [this.diffX1 + this.minDiffX, this.length]
	        };
	      }
	    },


	    // 限制取值范围
	    _restrictValue: function _restrictValue(range, value) {
	      if (range && range.length && range.length === 2) {
	        if (value < range[0]) {
	          return range[0];
	        } else if (value > range[1]) {
	          return range[1];
	        } else {
	          return value;
	        }
	      }
	      return;
	    },


	    // 根据x方向偏移量计算value
	    _getValue: function _getValue(diffX) {
	      return Math.round(diffX / this.length * (this.max - this.min) + this.min);
	    },


	    // 根据value和length计算x方向偏移值
	    _getDiffX: function _getDiffX(value) {
	      return (value - this.min) / (this.max - this.min) * this.length;
	    }
	  }
	};

/***/ }),
/* 353 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * 工具方法库
	 * @namespace Utils
	 * @example
	 *
	 */
	var Utils = {

	  env: {

	    /**
	     * 是否是手淘容器
	     * @method
	     * @memberOf Utils.env
	     * @returns {boolean}
	     * @example
	     *
	     * const isTaobao = env.isTaobao();
	     */
	    isTaobao: function isTaobao() {
	      var appName = weex.config.env.appName;

	      return (/(tb|taobao|淘宝)/i.test(appName)
	      );
	    },


	    /**
	     * 是否是旅客容器
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isTrip = env.isTrip();
	     */
	    isTrip: function isTrip() {
	      var appName = weex.config.env.appName;

	      return appName === 'LX';
	    },

	    /**
	     * 是否是 web 环境
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isWeb = env.isWeb();
	     */
	    isWeb: function isWeb() {
	      var platform = weex.config.env.platform;

	      return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
	    },

	    /**
	     * 是否是 iOS 系统
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isIOS = env.isIOS();
	     */
	    isIOS: function isIOS() {
	      var platform = weex.config.env.platform;

	      return platform.toLowerCase() === 'ios';
	    },

	    /**
	     * 是否是 Android 系统
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isAndroid = env.isAndroid();
	     */
	    isAndroid: function isAndroid() {
	      var platform = weex.config.env.platform;

	      return platform.toLowerCase() === 'android';
	    },


	    /**
	     * 是否是支付宝容器
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isAlipay = env.isAlipay();
	     */
	    isAlipay: function isAlipay() {
	      var appName = weex.config.env.appName;

	      return appName === 'AP';
	    },


	    /**
	     * 是否是支付宝H5容器(防止以后支付宝接入weex)
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isAlipayWeb = env.isAlipayWeb();
	     */
	    isAlipayWeb: function isAlipayWeb() {
	      return Utils.env.isAlipay() && Utils.env.isWeb();
	    },


	    /**
	     * 判断是否支持expressionBinding
	     * 当weex版本大于0.10.1.6，为客户端即可以支持expressionBinding
	     * @returns {Boolean}
	     */
	    supportsEB: function supportsEB() {
	      var weexVersion = weex.config.env.weexVersion || '0';
	      var isHighWeex = Utils.compareVersion(weexVersion, '0.10.1.4') && (Utils.env.isIOS() || Utils.env.isAndroid());
	      var expressionBinding = weex.requireModule('expressionBinding');
	      return expressionBinding && expressionBinding.enableBinding && isHighWeex;
	    },


	    /**
	     * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
	     * @returns {boolean}
	     */
	    supportsEBForAndroid: function supportsEBForAndroid() {
	      return Utils.env.isAndroid() && Utils.env.supportsEB();
	    },


	    /**
	     * 判断IOS容器是否支持是否支持expressionBinding
	     * @returns {boolean}
	     */
	    supportsEBForIos: function supportsEBForIos() {
	      return Utils.env.isIOS() && Utils.env.supportsEB();
	    },


	    /**
	     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
	     * @returns {Number}
	     */
	    getPageHeight: function getPageHeight() {
	      var env = weex.config.env;

	      var navHeight = Utils.env.isWeb() ? 0 : 130;
	      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
	    }
	  },

	  /**
	   * 版本号比较
	   * @memberOf Utils
	   * @param currVer {string}
	   * @param promoteVer {string}
	   * @returns {boolean}
	   * @example
	   *
	   * const { compareVersion } = Utils;
	   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
	   */
	  compareVersion: function compareVersion() {
	    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0.0.0";
	    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "0.0.0";

	    if (currVer === promoteVer) return true;
	    var currVerArr = currVer.split(".");
	    var promoteVerArr = promoteVer.split(".");
	    var len = Math.max(currVerArr.length, promoteVerArr.length);
	    for (var i = 0; i < len; i++) {
	      var proVal = ~~promoteVerArr[i];
	      var curVal = ~~currVerArr[i];
	      if (proVal < curVal) {
	        return true;
	      } else if (proVal > curVal) {
	        return false;
	      }
	    }
	    return false;
	  }
	};

	module.exports = Utils;

/***/ }),
/* 354 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-slider-bar"]
	  }, [_c('div', {
	    ref: "bar-container",
	    staticClass: ["slider-bar-container"],
	    style: _vm.containerStyle
	  }, [_c('div', {
	    staticClass: ["range-bar"],
	    style: _vm.rangeBarStyle
	  }, [_c('div', {
	    ref: "value-bar",
	    staticClass: ["value-bar"],
	    style: _vm.valueBarStyle
	  }, [_c('div')])]), _c('div', {
	    ref: "slide-block-1",
	    staticClass: ["slide-block"],
	    style: _vm.blockStyle1,
	    attrs: {
	      "preventMoveEvent": _vm.preventMoveEvent
	    },
	    on: {
	      "touchstart": _vm._weexStartHandler1,
	      "panstart": _vm._webStartHandler,
	      "panmove": _vm._webMoveHandler1,
	      "touchend": _vm._weexEndHandler,
	      "horizontalpan": _vm.dispatchPan
	    }
	  }, [_c('div')]), (_vm.range) ? _c('div', {
	    ref: "slide-block-2",
	    staticClass: ["slide-block"],
	    style: _vm.blockStyle2,
	    attrs: {
	      "preventMoveEvent": _vm.preventMoveEvent
	    },
	    on: {
	      "touchstart": _vm._weexStartHandler2,
	      "panstart": _vm._webStartHandler,
	      "panmove": _vm._webMoveHandler2,
	      "touchend": _vm._weexEndHandler,
	      "horizontalpan": _vm.dispatchPan
	    }
	  }, [_c('div')]) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(356);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(357)
	)

	/* script */
	__vue_exports__ = __webpack_require__(358)

	/* template */
	var __vue_template__ = __webpack_require__(359)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-662ac666"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 357 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-stepper": {
	    "flexDirection": "row"
	  },
	  "stepper-plus": {
	    "width": 56,
	    "height": 56,
	    "backgroundColor": "#ededed",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 6
	  },
	  "stepper-minus": {
	    "width": 56,
	    "height": 56,
	    "backgroundColor": "#ededed",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 6
	  },
	  "stepper-input": {
	    "borderWidth": 0,
	    "outline": "none",
	    "textAlign": "center",
	    "color": "#3d3d3d",
	    "fontSize": 30,
	    "lineHeight": 56,
	    "width": 86
	  },
	  "stepper-icon": {
	    "fontSize": 36,
	    "color": "#666666",
	    "marginTop": -4
	  }
	}

/***/ }),
/* 358 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    min: {
	      type: [String, Number],
	      default: 1
	    },
	    max: {
	      type: [String, Number],
	      default: 100
	    },
	    step: {
	      type: [String, Number],
	      default: 1
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    defaultValue: {
	      type: [String, Number],
	      default: 1
	    },
	    readOnly: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    disableStyle: function disableStyle() {
	      if (this.disabled) {
	        return {
	          color: '#cccccc'
	        };
	      }
	    },
	    valueString: function valueString() {
	      return this.value.toString();
	    }
	  },
	  data: function data() {
	    return {
	      value: 1,
	      isLess: false,
	      isOver: false
	    };
	  },
	  created: function created() {
	    var self = this;
	    self.value = parseInt(self.defaultValue, 10);
	    if (self.disabled) {
	      self.isLess = true;
	      self.isOver = true;
	    }
	  },

	  methods: {
	    minusClicked: function minusClicked() {
	      var self = this;
	      if (self.disabled) {
	        return;
	      }
	      var isMinOver = self.value <= self.min;
	      var nowNum = self.value - parseInt(self.step, 10);
	      if (isMinOver) {
	        self.$emit('wxcStepperValueIsMinOver', { value: self.value });
	      } else {
	        self.value = nowNum;
	        self.resetDisabledStyle();
	      }
	      // 由于此处已经减step
	      if (nowNum <= self.min) {
	        self.value = parseInt(self.min, 10);
	        self.isLess = true;
	      }
	      self.$emit('wxcStepperValueChanged', { value: self.value });
	    },
	    plusClicked: function plusClicked() {
	      var self = this;
	      if (self.disabled) {
	        return;
	      }
	      var isMaxOver = self.value >= self.max;
	      var nowNum = self.value + parseInt(self.step, 10);
	      if (isMaxOver) {
	        self.$emit('wxcStepperValueIsMaxOver', { value: self.value });
	      } else {
	        self.value = nowNum;
	        self.resetDisabledStyle();
	      }
	      // 由于此处已经加step
	      if (nowNum >= self.max) {
	        self.value = parseInt(self.max, 10);
	        self.isOver = true;
	      }
	      self.$emit('wxcStepperValueChanged', { value: self.value });
	    },
	    onInput: function onInput(e) {
	      this.correctInputValue(e.value);
	    },
	    onBlur: function onBlur(e) {
	      this.correctInputValue(e.value);
	    },
	    correctInputValue: function correctInputValue(v) {
	      var self = this;
	      if (/^[1-9]\d{0,}$/.test(v) && parseInt(v, 10) >= self.min && parseInt(v, 10) <= self.max) {
	        self.value = parseInt(v, 10);
	      }
	      self.$emit('wxcStepperValueChanged', { value: self.value });
	    },
	    resetDisabledStyle: function resetDisabledStyle() {
	      this.isLess = false;
	      this.isOver = false;
	    }
	  }
	};

/***/ }),
/* 359 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-stepper"]
	  }, [_c('div', {
	    staticClass: ["stepper-minus"],
	    on: {
	      "click": _vm.minusClicked
	    }
	  }, [_c('text', {
	    staticClass: ["stepper-icon"],
	    style: {
	      color: _vm.isLess ? '#cccccc' : '#666666'
	    }
	  }, [_vm._v("-")])]), _c('input', {
	    staticClass: ["stepper-input"],
	    style: _vm.disableStyle,
	    attrs: {
	      "type": "number",
	      "value": _vm.valueString,
	      "disabled": _vm.disabled || _vm.readOnly
	    },
	    on: {
	      "input": _vm.onInput,
	      "blur": _vm.onBlur
	    }
	  }), _c('div', {
	    staticClass: ["stepper-plus"],
	    on: {
	      "click": _vm.plusClicked
	    }
	  }, [_c('text', {
	    staticClass: ["stepper-icon"],
	    style: {
	      color: _vm.isOver ? '#cccccc' : '#666666'
	    }
	  }, [_vm._v("+")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(361);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(362)
	)

	/* script */
	__vue_exports__ = __webpack_require__(363)

	/* template */
	var __vue_template__ = __webpack_require__(365)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0cf3aea7"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 362 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-tab-page": {
	    "width": 750,
	    "flexDirection": "column",
	    "backgroundColor": "#f2f3f4"
	  },
	  "tab-title-list": {
	    "flexDirection": "row"
	  },
	  "title-item": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "column",
	    "borderBottomStyle": "solid",
	    "position": "relative"
	  },
	  "border-bottom": {
	    "position": "absolute",
	    "bottom": 0
	  },
	  "tab-page-wrap": {
	    "width": 750,
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "tab-container": {
	    "flex": 1,
	    "flexDirection": "row",
	    "position": "absolute"
	  },
	  "tab-text": {
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  }
	}

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	var animation = weex.requireModule('animation');
	var swipeBack = weex.requireModule('swipeBack');
	var expressionBinding = weex.requireModule('expressionBinding');

	var Utils = __webpack_require__(364);
	var supportsEB = Utils.env.supportsEB();
	var supportsEBForIos = Utils.env.supportsEBForIos();
	var isIos = Utils.env.isIOS();

	module.exports = {
	  props: {
	    tabTitles: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    panDist: {
	      type: Number,
	      default: 200
	    },
	    spmC: {
	      type: [String, Number],
	      default: ''
	    },
	    tabStyles: {
	      type: Object,
	      default: function _default() {
	        return {
	          bgColor: '#FFFFFF',
	          titleColor: '#666666',
	          activeTitleColor: '#3D3D3D',
	          activeBgColor: '#FFFFFF',
	          isActiveTitleBold: true,
	          iconWidth: 70,
	          iconHeight: 70,
	          width: 160,
	          height: 120,
	          fontSize: 24,
	          hasActiveBottom: true,
	          activeBottomColor: '#FFC900',
	          activeBottomWidth: 120,
	          activeBottomHeight: 6,
	          textPaddingLeft: 10,
	          textPaddingRight: 10
	        };
	      }
	    },
	    titleType: {
	      type: String,
	      default: 'icon'
	    },
	    tabPageHeight: {
	      type: [String, Number],
	      default: 1334
	    },
	    isTabView: {
	      type: Boolean,
	      default: true
	    },
	    needSlider: {
	      type: Boolean,
	      default: true
	    },
	    duration: {
	      type: [Number, String],
	      default: 300
	    },
	    timingFunction: {
	      type: String,
	      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
	    }
	  },
	  data: function data() {
	    return {
	      currentPage: 0,
	      isMoving: false,
	      startTime: 0,
	      deltaX: 0,
	      translateX: 0,
	      startPosX: 0,
	      startPosY: 0,
	      judge: 'INITIAL'
	    };
	  },
	  mounted: function mounted() {
	    var _this = this;

	    if (swipeBack && swipeBack.forbidSwipeBack) {
	      swipeBack.forbidSwipeBack(true);
	    }
	    if (supportsEBForIos && this.needSlider && this.isTabView) {
	      setTimeout(function () {
	        var tabPageEl = _this.$refs['tab-page-wrap'];
	        tabPageEl && tabPageEl.ref && _this.bindExp(tabPageEl);
	      }, 20);
	    }
	  },

	  methods: {
	    next: function next() {
	      var page = this.currentPage;
	      if (page < this.tabTitles.length - 1) {
	        page++;
	      }
	      this.setPage(page);
	    },
	    prev: function prev() {
	      var page = this.currentPage;
	      if (page > 0) {
	        page--;
	      }
	      this.setPage(page);
	    },
	    startHandler: function startHandler(e) {
	      var _this2 = this;

	      if (supportsEBForIos && e.state === 'start' && this.isTabView && this.needSlider) {
	        // list下拉和到最下面问题修复
	        setTimeout(function () {
	          _this2.bindExp(_this2.$refs['tab-page-wrap']);
	        }, 0);
	      }
	    },
	    bindExp: function bindExp(element) {
	      var _this3 = this;

	      if (!this.isMoving && element && element.ref) {
	        var tabElement = this.$refs['tab-container'];
	        var currentPage = this.currentPage,
	            panDist = this.panDist;

	        var dist = currentPage * 750;
	        // x-dist
	        var args = [{
	          element: tabElement.ref,
	          property: 'transform.translateX',
	          expression: '{"type":"-","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + dist + '}]}'
	        }];
	        expressionBinding.enableBinding(element.ref, 'pan');
	        expressionBinding.createBinding(element.ref, 'pan', '', args, function (e) {
	          var deltaX = e.deltaX,
	              state = e.state;

	          if (state === 'end') {
	            if (deltaX < -panDist) {
	              _this3.next();
	            } else if (deltaX > panDist) {
	              _this3.prev();
	            } else {
	              _this3.setPage(currentPage);
	            }
	          }
	        });
	      }
	    },
	    setPage: function setPage(page) {
	      var _this4 = this;

	      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      if (!this.isTabView) {
	        this.jumpOut(url);
	        return;
	      }
	      if (this.isMoving === true) {
	        return;
	      }
	      this.isMoving = true;
	      var previousPage = this.currentPage;
	      var currentTabEl = this.$refs['wxc-tab-title-' + page][0];
	      var width = this.tabStyles.width;

	      var appearNum = parseInt(750 / width);
	      var tabsNum = this.tabTitles.length;
	      var computedPage = tabsNum > appearNum ? 2 : page;
	      var offset = page > appearNum ? -(750 - width) / 2 : -width * computedPage;

	      (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
	        offset: offset
	      });

	      page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
	        offset: -width * page
	      });

	      if (isIos) {
	        // 高版本ios 手淘上面会有不固定情况，hack一下
	        setTimeout(function () {
	          _this4._animateTransformX(page);
	        }, 10);
	      } else {
	        this._animateTransformX(page);
	      }

	      this.isMoving = false;
	      this.currentPage = page;
	      this.$emit('wxcTabPageCurrentTabSelected', { page: page });
	    },
	    jumpOut: function jumpOut(url) {
	      url && Utils.goToH5Page(url);
	    },
	    _animateTransformX: function _animateTransformX(page) {
	      var duration = this.duration,
	          timingFunction = this.timingFunction;

	      var containerEl = this.$refs['tab-container'];
	      var dist = page * 750;
	      animation.transition(containerEl, {
	        styles: {
	          transform: 'translateX(' + -dist + 'px)'
	        },
	        duration: duration,
	        timingFunction: timingFunction,
	        delay: 0
	      }, function () {});
	    },
	    _onTouchStart: function _onTouchStart(e) {
	      if (supportsEB || !this.isTabView || !this.needSlider) {
	        return;
	      }
	      this.startPosX = this._getTouchXPos(e);
	      this.startPosY = this._getTouchYPos(e);
	      this.deltaX = 0;
	      this.startTime = new Date().getTime();
	    },
	    _onTouchMove: function _onTouchMove(e) {
	      if (supportsEB || !this.isTabView || !this.needSlider) {
	        return;
	      }
	      this.deltaX = this._getTouchXPos(e) - this.startPosX;
	      this.deltaY = Math.abs(this._getTouchYPos(e) - this.startPosY + 1);
	      if (this.judge === 'INITIAL' && Math.abs(this.deltaX) / this.deltaY > 1.73) {
	        this.judge = 'SLIDE_ING';
	      }
	    },
	    _onTouchEnd: function _onTouchEnd() {
	      if (supportsEB || !this.isTabView || !this.needSlider) {
	        return;
	      }
	      if (this.judge === 'SLIDE_ING') {
	        if (this.deltaX < -50) {
	          this.next();
	        } else if (this.deltaX > 50) {
	          this.prev();
	        }
	      }
	      this.judge = 'INITIAL';
	    },
	    _getTouchXPos: function _getTouchXPos(e) {
	      return e.changedTouches[0]['pageX'];
	    },
	    _getTouchYPos: function _getTouchYPos(e) {
	      return e.changedTouches[0]['pageY'];
	    }
	  }
	};

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var UrlParser = __webpack_require__(175);

	/**
	 * 工具方法库
	 * @namespace Utils
	 * @example
	 *
	 */
	var Utils = {
	  UrlParser: UrlParser,
	  isNonEmptyArray: function isNonEmptyArray() {
	    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
	  },
	  appendProtocol: function appendProtocol(url) {
	    if (/^\/\//.test(url)) {
	      var bundleUrl = weex.config.bundleUrl;

	      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
	    }
	    return url;
	  },
	  encodeURLParams: function encodeURLParams(url) {
	    var parsedUrl = new UrlParser(url, true);
	    return parsedUrl.toString();
	  },
	  goToH5Page: function goToH5Page(jumpUrl) {
	    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	    var Navigator = weex.requireModule('navigator');
	    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
	    var url = Utils.appendProtocol(jumpUrlObj.toString());
	    Navigator.push({
	      url: Utils.encodeURLParams(url),
	      animated: animated
	    }, callback);
	  },

	  /**
	   * 环境判断辅助 API
	   * @namespace Utils.env
	   * @example
	   *
	   * const { Utils } = require('@ali/wxv-bridge');
	   * const { env } = Utils;
	   */
	  env: {

	    /**
	     * 是否是手淘容器
	     * @method
	     * @memberOf Utils.env
	     * @returns {boolean}
	     * @example
	     *
	     * const isTaobao = env.isTaobao();
	     */
	    isTaobao: function isTaobao() {
	      var appName = weex.config.env.appName;

	      return (/(tb|taobao|淘宝)/i.test(appName)
	      );
	    },


	    /**
	     * 是否是旅客容器
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isTrip = env.isTrip();
	     */
	    isTrip: function isTrip() {
	      var appName = weex.config.env.appName;

	      return appName === 'LX';
	    },

	    /**
	     * 是否是 web 环境
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isWeb = env.isWeb();
	     */
	    isWeb: function isWeb() {
	      var platform = weex.config.env.platform;

	      return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
	    },

	    /**
	     * 是否是 iOS 系统
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isIOS = env.isIOS();
	     */
	    isIOS: function isIOS() {
	      var platform = weex.config.env.platform;

	      return platform.toLowerCase() === 'ios';
	    },

	    /**
	     * 是否是 Android 系统
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isAndroid = env.isAndroid();
	     */
	    isAndroid: function isAndroid() {
	      var platform = weex.config.env.platform;

	      return platform.toLowerCase() === 'android';
	    },


	    /**
	     * 是否是支付宝容器
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isAlipay = env.isAlipay();
	     */
	    isAlipay: function isAlipay() {
	      var appName = weex.config.env.appName;

	      return appName === 'AP';
	    },


	    /**
	     * 是否是支付宝H5容器(防止以后支付宝接入weex)
	     * @memberOf Utils.env
	     * @method
	     * @returns {boolean}
	     * @example
	     *
	     * const isAlipayWeb = env.isAlipayWeb();
	     */
	    isAlipayWeb: function isAlipayWeb() {
	      return Utils.env.isAlipay() && Utils.env.isWeb();
	    },


	    /**
	     * 判断是否支持expressionBinding
	     * 当weex版本大于0.10.1.6，为客户端即可以支持expressionBinding
	     * @returns {Boolean}
	     */
	    supportsEB: function supportsEB() {
	      var weexVersion = weex.config.env.weexVersion || '0';
	      var isHighWeex = Utils.compareVersion(weexVersion, '0.10.1.4') && (Utils.env.isIOS() || Utils.env.isAndroid());
	      var expressionBinding = weex.requireModule('expressionBinding');
	      return expressionBinding && expressionBinding.enableBinding && isHighWeex;
	    },


	    /**
	     * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
	     * @returns {boolean}
	     */
	    supportsEBForAndroid: function supportsEBForAndroid() {
	      return Utils.env.isAndroid() && Utils.env.supportsEB();
	    },


	    /**
	     * 判断IOS容器是否支持是否支持expressionBinding
	     * @returns {boolean}
	     */
	    supportsEBForIos: function supportsEBForIos() {
	      return Utils.env.isIOS() && Utils.env.supportsEB();
	    },


	    /**
	     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
	     * @returns {Number}
	     */
	    getPageHeight: function getPageHeight() {
	      var env = weex.config.env;

	      var navHeight = Utils.env.isWeb() ? 0 : 130;
	      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
	    }
	  },

	  /**
	   * 版本号比较
	   * @memberOf Utils
	   * @param currVer {string}
	   * @param promoteVer {string}
	   * @returns {boolean}
	   * @example
	   *
	   * const { Utils } = require('@ali/wx-bridge');
	   * const { compareVersion } = Utils;
	   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
	   */
	  compareVersion: function compareVersion() {
	    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0.0.0";
	    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "0.0.0";

	    if (currVer === promoteVer) return true;
	    var currVerArr = currVer.split(".");
	    var promoteVerArr = promoteVer.split(".");
	    var len = Math.max(currVerArr.length, promoteVerArr.length);
	    for (var i = 0; i < len; i++) {
	      var proVal = ~~promoteVerArr[i];
	      var curVal = ~~currVerArr[i];
	      if (proVal < curVal) {
	        return true;
	      } else if (proVal > curVal) {
	        return false;
	      }
	    }
	    return false;
	  }
	};

	module.exports = Utils;

/***/ }),
/* 365 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-tab-page"],
	    style: {
	      height: (_vm.tabPageHeight) + 'px'
	    }
	  }, [_c('scroller', {
	    ref: "tab-title-list",
	    staticClass: ["tab-title-list"],
	    style: {
	      backgroundColor: _vm.tabStyles.bgColor,
	      height: (_vm.tabStyles.height) + 'px'
	    },
	    attrs: {
	      "showScrollbar": false,
	      "scrollDirection": "horizontal",
	      "dataSpm": _vm.spmC
	    }
	  }, _vm._l((_vm.tabTitles), function(v, index) {
	    return _c('div', {
	      key: index,
	      ref: 'wxc-tab-title-' + index,
	      refInFor: true,
	      staticClass: ["title-item"],
	      style: {
	        width: _vm.tabStyles.width + 'px',
	        height: _vm.tabStyles.height + 'px',
	        backgroundColor: _vm.currentPage == index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
	      },
	      attrs: {
	        "dataSpmClick": ("gostr=/tbtrip;locaid=d" + (v.dataSpm!==undefined ? v.dataSpm : '996' + index))
	      },
	      on: {
	        "click": function($event) {
	          _vm.setPage(index, v.url)
	        }
	      }
	    }, [(_vm.titleType == 'icon') ? _c('image', {
	      style: {
	        width: _vm.tabStyles.iconWidth + 'px',
	        height: _vm.tabStyles.iconHeight + 'px'
	      },
	      attrs: {
	        "src": _vm.currentPage == index ? v.activeIcon : v.icon
	      }
	    }) : _vm._e(), _c('text', {
	      staticClass: ["tab-text"],
	      style: {
	        fontSize: _vm.tabStyles.fontSize + 'px',
	        fontWeight: (_vm.currentPage == index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
	        color: _vm.currentPage == index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
	        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
	        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
	      }
	    }, [_vm._v(_vm._s(v.title))]), (_vm.tabStyles.hasActiveBottom) ? _c('div', {
	      staticClass: ["border-bottom"],
	      style: {
	        width: _vm.tabStyles.activeBottomWidth + 'px',
	        left: (_vm.tabStyles.width - _vm.tabStyles.activeBottomWidth) / 2 + 'px',
	        height: _vm.tabStyles.activeBottomHeight + 'px',
	        backgroundColor: _vm.currentPage == index ? _vm.tabStyles.activeBottomColor : 'transparent'
	      }
	    }) : _vm._e()])
	  })), _c('div', {
	    ref: "tab-page-wrap",
	    staticClass: ["tab-page-wrap"],
	    style: {
	      height: (_vm.tabPageHeight - _vm.tabStyles.height) + 'px'
	    },
	    attrs: {
	      "preventMoveEvent": true
	    },
	    on: {
	      "panstart": _vm._onTouchStart,
	      "panmove": _vm._onTouchMove,
	      "panend": _vm._onTouchEnd,
	      "horizontalpan": _vm.startHandler
	    }
	  }, [_c('div', {
	    ref: "tab-container",
	    staticClass: ["tab-container"]
	  }, [_vm._t("default")], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(367);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(368)
	)

	/* script */
	__vue_exports__ = __webpack_require__(369)

	/* template */
	var __vue_template__ = __webpack_require__(370)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\node_modules\\weex-ui\\packages\\wxc-tag\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-324a1556"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 368 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-tag": {
	    "alignItems": "flex-start"
	  },
	  "tag-item": {
	    "height": 24,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "overflow": "hidden",
	    "paddingBottom": 2
	  },
	  "tag-border": {
	    "borderBottomLeftRadius": 4,
	    "borderBottomRightRadius": 4,
	    "borderTopLeftRadius": 4,
	    "borderTopRightRadius": 4
	  },
	  "tag-hollow": {
	    "borderWidth": 1
	  },
	  "tag-image": {
	    "height": 24
	  },
	  "tag-special": {
	    "borderWidth": 1,
	    "flexDirection": "row"
	  },
	  "left-image": {
	    "width": 20,
	    "height": 20
	  },
	  "tag-left": {
	    "width": 24,
	    "height": 24,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "tag-text": {
	    "fontSize": 20,
	    "height": 22,
	    "lineHeight": 22,
	    "paddingLeft": 6,
	    "paddingRight": 6
	  }
	}

/***/ }),
/* 369 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'solid'
	    },
	    value: {
	      type: [String, Number],
	      default: '测试测试'
	    },
	    tagColor: {
	      type: String,
	      default: '#ff5000'
	    },
	    fontColor: {
	      type: String,
	      default: '#333'
	    },
	    specialIcon: {
	      type: String,
	      default: ''
	    },
	    img: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    showSolid: function showSolid() {
	      var type = this.type,
	          value = this.value;

	      return type === 'solid' && value !== '';
	    },
	    showHollow: function showHollow() {
	      var type = this.type,
	          value = this.value;

	      return type === 'hollow' && value !== '';
	    },
	    showSpecial: function showSpecial() {
	      var type = this.type,
	          value = this.value,
	          specialIcon = this.specialIcon;

	      return type === 'special' && value !== '' && specialIcon !== '';
	    },
	    showImage: function showImage() {
	      var type = this.type,
	          img = this.img;

	      return type === 'image' && img !== '';
	    },
	    tagTextStyle: function tagTextStyle() {
	      var tagColor = this.tagColor,
	          showSolid = this.showSolid;

	      return showSolid ? { backgroundColor: tagColor } : { borderColor: tagColor };
	    }
	  },
	  data: function data() {
	    return {
	      imgWidth: 90
	    };
	  },
	  methods: {
	    onLoad: function onLoad(e) {
	      if (e.success && e.size && e.size.naturalWidth > 0) {
	        var width = e.size.naturalWidth;
	        var height = e.size.naturalHeight;
	        this.imgWidth = width * (24 / height);
	      }
	    }
	  }
	};

/***/ }),
/* 370 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-tag"]
	  }, [(_vm.showSolid || _vm.showHollow) ? _c('div', {
	    class: ['tag-item', 'tag-border', _vm.showHollow && 'tag-hollow'],
	    style: _vm.tagTextStyle
	  }, [_c('text', {
	    staticClass: ["tag-text"],
	    style: {
	      color: _vm.fontColor
	    }
	  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e(), (_vm.showImage) ? _c('image', {
	    staticClass: ["tag-image"],
	    style: {
	      width: _vm.imgWidth
	    },
	    attrs: {
	      "src": _vm.img
	    },
	    on: {
	      "load": _vm.onLoad
	    }
	  }) : _vm._e(), (_vm.showSpecial) ? _c('div', {
	    staticClass: ["tag-special", "tag-border"],
	    style: {
	      borderColor: _vm.tagColor
	    }
	  }, [_c('div', {
	    staticClass: ["tag-left"],
	    style: {
	      backgroundColor: _vm.tagColor
	    }
	  }, [_c('image', {
	    staticClass: ["left-image"],
	    attrs: {
	      "src": _vm.specialIcon
	    }
	  })]), _c('text', {
	    staticClass: ["tag-text"],
	    style: {
	      color: _vm.fontColor
	    }
	  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 371 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["g-flex-column", "g-flex-center"]
	  }, [_c('wxc-part-loading', {
	    staticClass: ["v-flex-full"],
	    style: _vm.margintTop,
	    attrs: {
	      "show": _vm.isShow,
	      "width": _vm.width,
	      "height": _vm.height
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 372 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["g-flex-column", "g-flex-full"]
	  }, [_c('div', {
	    class: _vm.classNameEmpty
	  }, [_c('loadingaa')], 1), _c('list', {
	    class: _vm.className0,
	    attrs: {
	      "loadmoreoffset": "50"
	    },
	    on: {
	      "loadmore": _vm.loadMoreStories
	    }
	  }, _vm._l((_vm.test), function(movie) {
	    return _c('cell', {
	      key: movie.url,
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('movie', {
	      attrs: {
	        "data": movie
	      }
	    })], 1)
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 373 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('bui-tabbar', {
	    attrs: {
	      "selectedColor": "#ff9100",
	      "borderBottomColor": "#ff9100",
	      "tabItems": _vm.tabItems,
	      "showSelectedLine": "true"
	    },
	    on: {
	      "change": _vm.onItemChange
	    },
	    model: {
	      value: (_vm.currentTab),
	      callback: function(value) {
	        _vm.currentTab = value
	      }
	    }
	  }), _c('div', {
	    class: _vm.classNameEmpty
	  }, [_c('loadingaa')], 1), _c('movie-list', {
	    class: _vm.className0,
	    attrs: {
	      "videoType": 1
	    }
	  }), _c('movie-list', {
	    class: _vm.className1,
	    attrs: {
	      "videoType": 2
	    }
	  }), _c('movie-list', {
	    class: _vm.className2,
	    attrs: {
	      "videoType": 4
	    }
	  }), _c('movie-list', {
	    class: _vm.className3,
	    attrs: {
	      "videoType": 7
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 374 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('bui-header', {
	    attrs: {
	      "backgroundColor": "#ff9100",
	      "title": "地瓜影视"
	    }
	  }, [_c('div', {
	    staticClass: ["g-flex-row"],
	    slot: "right"
	  }, [_c('bui-icon', {
	    attrs: {
	      "name": "ion-ios-search-strong",
	      "color": "#ffffff"
	    },
	    on: {
	      "click": _vm.search
	    }
	  }), _c('bui-icon', {
	    staticStyle: {
	      marginLeft: "6px"
	    },
	    attrs: {
	      "name": "ion-android-share-alt",
	      "color": "#ffffff"
	    },
	    on: {
	      "click": _vm.share
	    }
	  })], 1)]), _c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "index": _vm.currentTab
	    },
	    on: {
	      "change": _vm.onSliderChange
	    }
	  }, [_c('div', [_c('home')], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);