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
	__vue_styles__.push(__webpack_require__(375)
	)
	__vue_styles__.push(__webpack_require__(376)
	)

	/* script */
	__vue_exports__ = __webpack_require__(377)

	/* template */
	var __vue_template__ = __webpack_require__(382)
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
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\src\\pages\\search.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-43192fd4"
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
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
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
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */
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
/* 376 */
/***/ (function(module, exports) {

	module.exports = {
	  "slider": {
	    "flex": 1
	  }
	}

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _searchResultList = __webpack_require__(378);

	var _searchResultList2 = _interopRequireDefault(_searchResultList);

	var _mixins = __webpack_require__(2);

	var _mixins2 = _interopRequireDefault(_mixins);

	var _pageMixins = __webpack_require__(143);

	var _pageMixins2 = _interopRequireDefault(_pageMixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_mixins2.default, _pageMixins2.default],
	    data: function data() {
	        return {
	            keyWord: ""
	        };
	    },
	    created: function created() {},

	    components: {
	        SearchResultList: _searchResultList2.default
	    },
	    methods: {
	        share: function share() {
	            this.nativeAction('/provider/share');
	        },
	        back: function back() {
	            this.router.back();
	        },
	        onSearch: function onSearch(value) {
	            this.keyWord = value;
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

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(379)
	)

	/* script */
	__vue_exports__ = __webpack_require__(380)

	/* template */
	var __vue_template__ = __webpack_require__(381)
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
	__vue_options__.__file = "D:\\Project\\AS_MY\\WeexExplorer\\src\\components\\search-result-list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-62620f6e"
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
/* 379 */
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
	  "c-red": {
	    "backgroundColor": "#FF66ff"
	  }
	}

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(6);

	var _movie = __webpack_require__(155);

	var _movie2 = _interopRequireDefault(_movie);

	var _mixins = __webpack_require__(2);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_mixins2.default],
	    components: {
	        Movie: _movie2.default
	    },
	    props: {
	        keyWord: {
	            type: String,
	            required: true
	        }
	    },
	    data: function data() {
	        return {
	            loading: true,
	            myPage: 1
	        };
	    },
	    created: function created() {},

	    computed: {
	        searchResult: function searchResult() {
	            return this.store.state.searchResult;
	        }
	    },
	    methods: Object.assign({
	        loadMoreStories: function loadMoreStories() {
	            this.myPage = this.myPage + 1;
	            this.searchList({ keyWord: this.keyWord, page: this.myPage });
	        }
	    }, (0, _vuex.mapActions)(['searchList'])),
	    watch: {
	        "keyWord": {
	            handler: function handler(val, oldVal) {
	                this.searchList({ keyWord: this.keyWord, page: 1 });
	            },

	            // 深度观察
	            deep: true
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

/***/ }),
/* 381 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["g-flex-column"]
	  }, [_c('div', {
	    staticClass: ["g-flex-full"]
	  }, [_c('list', {
	    staticClass: ["g-flex-full"],
	    attrs: {
	      "loadmoreoffset": "50"
	    },
	    on: {
	      "loadmore": _vm.loadMoreStories
	    }
	  }, _vm._l((_vm.searchResult), function(movie) {
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
	  }))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 382 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('bui-header', {
	    attrs: {
	      "backgroundColor": "#ff9100",
	      "title": "搜索"
	    }
	  }, [_c('div', {
	    slot: "left"
	  }, [_c('bui-icon', {
	    attrs: {
	      "name": "ion-ios-arrow-back",
	      "color": "#ffffff"
	    },
	    on: {
	      "click": _vm.back
	    }
	  })], 1), _c('div', {
	    slot: "right"
	  }, [_c('bui-icon', {
	    attrs: {
	      "name": "ion-android-share-alt",
	      "color": "#ffffff"
	    },
	    on: {
	      "click": _vm.share
	    }
	  })], 1)]), _c('bui-searchbar-center', {
	    on: {
	      "search": _vm.onSearch
	    }
	  }), _c('search-result-list', {
	    attrs: {
	      "keyWord": _vm.keyWord
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);