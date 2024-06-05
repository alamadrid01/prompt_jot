(function () {
  'use strict';

  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /*! (c) Andrea Giammarchi - ISC */
  var self$1 = {};
  try {
    self$1.WeakMap = WeakMap;
  } catch (WeakMap) {
    // this could be better but 90% of the time
    // it's everything developers need as fallback
    self$1.WeakMap = function (id, Object) {

      var dP = Object.defineProperty;
      var hOP = Object.hasOwnProperty;
      var proto = WeakMap.prototype;
      proto["delete"] = function (key) {
        return this.has(key) && delete key[this._];
      };
      proto.get = function (key) {
        return this.has(key) ? key[this._] : void 0;
      };
      proto.has = function (key) {
        return hOP.call(key, this._);
      };
      proto.set = function (key, value) {
        dP(key, this._, {
          configurable: true,
          value: value
        });
        return this;
      };
      return WeakMap;
      function WeakMap(iterable) {
        dP(this, '_', {
          value: '_@ungap/weakmap' + id++
        });
        if (iterable) iterable.forEach(add, this);
      }
      function add(pair) {
        this.set(pair[0], pair[1]);
      }
    }(Math.random(), Object);
  }
  var WeakMap$1 = self$1.WeakMap;

  /*! (c) Andrea Giammarchi - ISC */

  // Custom
  var UID = '-' + Math.random().toFixed(6) + '%';
  //                           Edge issue!

  var UID_IE = false;
  try {
    if (!function (template, content, tabindex) {
      return content in template && (template.innerHTML = '<p ' + tabindex + '="' + UID + '"></p>', template[content].childNodes[0].getAttribute(tabindex) == UID);
    }(document.createElement('template'), 'content', 'tabindex')) {
      UID = '_dt: ' + UID.slice(1, -1) + ';';
      UID_IE = true;
    }
  } catch (meh) {}
  var UIDC = '<!--' + UID + '-->';

  // DOM
  var COMMENT_NODE = 8;
  var ELEMENT_NODE$1 = 1;
  var TEXT_NODE = 3;
  var SHOULD_USE_TEXT_CONTENT = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
  var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;

  /*! (c) Andrea Giammarchi - ISC */

  function domsanitizer (template) {
    return template.join(UIDC).replace(selfClosing, fullClosing).replace(attrSeeker, attrReplacer);
  }
  var spaces = ' \\f\\n\\r\\t';
  var almostEverything = '[^' + spaces + '\\/>"\'=]+';
  var attrName = '[' + spaces + ']+' + almostEverything;
  var tagName = '<([A-Za-z]+[A-Za-z0-9:._-]*)((?:';
  var attrPartials = '(?:\\s*=\\s*(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' + almostEverything.replace('\\/', '') + '))?)';
  var attrSeeker = new RegExp(tagName + attrName + attrPartials + '+)([' + spaces + ']*/?>)', 'g');
  var selfClosing = new RegExp(tagName + attrName + attrPartials + '*)([' + spaces + ']*/>)', 'g');
  var findAttributes = new RegExp('(' + attrName + '\\s*=\\s*)([\'"]?)' + UIDC + '\\2', 'gi');
  function attrReplacer($0, $1, $2, $3) {
    return '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
  }
  function replaceAttributes($0, $1, $2) {
    return $1 + ($2 || '"') + UID + ($2 || '"');
  }
  function fullClosing($0, $1, $2) {
    return VOID_ELEMENTS.test($1) ? $0 : '<' + $1 + $2 + '></' + $1 + '>';
  }

  var isArray = Array.isArray;
  var _ref = [],
    slice = _ref.slice;

  var umap = (function (_) {
    return {
      // About: get: _.get.bind(_)
      // It looks like WebKit/Safari didn't optimize bind at all,
      // so that using bind slows it down by 60%.
      // Firefox and Chrome are just fine in both cases,
      // so let's use the approach that works fast everywhere 👍
      get: function get(key) {
        return _.get(key);
      },
      set: function set(key, value) {
        return _.set(key, value), value;
      }
    };
  });

  var ELEMENT_NODE = 1;
  var nodeType = 111;
  var remove$1 = function remove(_ref) {
    var firstChild = _ref.firstChild,
      lastChild = _ref.lastChild;
    var range = document.createRange();
    range.setStartAfter(firstChild);
    range.setEndAfter(lastChild);
    range.deleteContents();
    return firstChild;
  };
  var diffable = function diffable(node, operation) {
    return node.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove$1(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node;
  };
  var persistent = function persistent(fragment) {
    var childNodes = fragment.childNodes;
    var length = childNodes.length;
    if (length < 2) return length ? childNodes[0] : fragment;
    var nodes = slice.call(childNodes, 0);
    var firstChild = nodes[0];
    var lastChild = nodes[length - 1];
    return {
      ELEMENT_NODE: ELEMENT_NODE,
      nodeType: nodeType,
      firstChild: firstChild,
      lastChild: lastChild,
      valueOf: function valueOf() {
        if (childNodes.length !== length) {
          var i = 0;
          while (i < length) fragment.appendChild(nodes[i++]);
        }
        return fragment;
      }
    };
  };

  /*! (c) Andrea Giammarchi - ISC */
  var createContent = function (document) {

    var FRAGMENT = 'fragment';
    var TEMPLATE = 'template';
    var HAS_CONTENT = ('content' in create(TEMPLATE));
    var createHTML = HAS_CONTENT ? function (html) {
      var template = create(TEMPLATE);
      template.innerHTML = html;
      return template.content;
    } : function (html) {
      var content = create(FRAGMENT);
      var template = create(TEMPLATE);
      var childNodes = null;
      if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
        var selector = RegExp.$1;
        template.innerHTML = '<table>' + html + '</table>';
        childNodes = template.querySelectorAll(selector);
      } else {
        template.innerHTML = html;
        childNodes = template.childNodes;
      }
      append(content, childNodes);
      return content;
    };
    return function createContent(markup, type) {
      return (type === 'svg' ? createSVG : createHTML)(markup);
    };
    function append(root, childNodes) {
      var length = childNodes.length;
      while (length--) root.appendChild(childNodes[0]);
    }
    function create(element) {
      return element === FRAGMENT ? document.createDocumentFragment() : document.createElementNS('http://www.w3.org/1999/xhtml', element);
    }

    // it could use createElementNS when hasNode is there
    // but this fallback is equally fast and easier to maintain
    // it is also battle tested already in all IE
    function createSVG(svg) {
      var content = create(FRAGMENT);
      var template = create('div');
      template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
      append(content, template.firstChild.childNodes);
      return content;
    }
  }(document);

  /**
   * ISC License
   *
   * Copyright (c) 2020, Andrea Giammarchi, @WebReflection
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
   * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   * PERFORMANCE OF THIS SOFTWARE.
   */

  /**
   * @param {Node} parentNode The container where children live
   * @param {Node[]} a The list of current/live children
   * @param {Node[]} b The list of future children
   * @param {(entry: Node, action: number) => Node} get
   * The callback invoked per each entry related DOM operation.
   * @param {Node} [before] The optional node used as anchor to insert before.
   * @returns {Node[]} The same list of future children.
   */
  var udomdiff = (function (parentNode, a, b, get, before) {
    var bLength = b.length;
    var aEnd = a.length;
    var bEnd = bLength;
    var aStart = 0;
    var bStart = 0;
    var map = null;
    while (aStart < aEnd || bStart < bEnd) {
      // append head, tail, or nodes in between: fast path
      if (aEnd === aStart) {
        // we could be in a situation where the rest of nodes that
        // need to be added are not at the end, and in such case
        // the node to `insertBefore`, if the index is more than 0
        // must be retrieved, otherwise it's gonna be the first item.
        var node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
        while (bStart < bEnd) parentNode.insertBefore(get(b[bStart++], 1), node);
      }
      // remove head or tail: fast path
      else if (bEnd === bStart) {
        while (aStart < aEnd) {
          // remove the node only if it's unknown or not live
          if (!map || !map.has(a[aStart])) parentNode.removeChild(get(a[aStart], -1));
          aStart++;
        }
      }
      // same node: fast path
      else if (a[aStart] === b[bStart]) {
        aStart++;
        bStart++;
      }
      // same tail: fast path
      else if (a[aEnd - 1] === b[bEnd - 1]) {
        aEnd--;
        bEnd--;
      }
      // The once here single last swap "fast path" has been removed in v1.1.0
      // https://github.com/WebReflection/udomdiff/blob/single-final-swap/esm/index.js#L69-L85
      // reverse swap: also fast path
      else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
        // this is a "shrink" operation that could happen in these cases:
        // [1, 2, 3, 4, 5]
        // [1, 4, 3, 2, 5]
        // or asymmetric too
        // [1, 2, 3, 4, 5]
        // [1, 2, 3, 5, 6, 4]
        var _node = get(a[--aEnd], -1).nextSibling;
        parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
        parentNode.insertBefore(get(b[--bEnd], 1), _node);
        // mark the future index as identical (yeah, it's dirty, but cheap 👍)
        // The main reason to do this, is that when a[aEnd] will be reached,
        // the loop will likely be on the fast path, as identical to b[bEnd].
        // In the best case scenario, the next loop will skip the tail,
        // but in the worst one, this node will be considered as already
        // processed, bailing out pretty quickly from the map index check
        a[aEnd] = b[bEnd];
      }
      // map based fallback, "slow" path
      else {
        // the map requires an O(bEnd - bStart) operation once
        // to store all future nodes indexes for later purposes.
        // In the worst case scenario, this is a full O(N) cost,
        // and such scenario happens at least when all nodes are different,
        // but also if both first and last items of the lists are different
        if (!map) {
          map = new Map();
          var i = bStart;
          while (i < bEnd) map.set(b[i], i++);
        }
        // if it's a future node, hence it needs some handling
        if (map.has(a[aStart])) {
          // grab the index of such node, 'cause it might have been processed
          var index = map.get(a[aStart]);
          // if it's not already processed, look on demand for the next LCS
          if (bStart < index && index < bEnd) {
            var _i = aStart;
            // counts the amount of nodes that are the same in the future
            var sequence = 1;
            while (++_i < aEnd && _i < bEnd && map.get(a[_i]) === index + sequence) sequence++;
            // effort decision here: if the sequence is longer than replaces
            // needed to reach such sequence, which would brings again this loop
            // to the fast path, prepend the difference before a sequence,
            // and move only the future list index forward, so that aStart
            // and bStart will be aligned again, hence on the fast path.
            // An example considering aStart and bStart are both 0:
            // a: [1, 2, 3, 4]
            // b: [7, 1, 2, 3, 6]
            // this would place 7 before 1 and, from that time on, 1, 2, and 3
            // will be processed at zero cost
            if (sequence > index - bStart) {
              var _node2 = get(a[aStart], 0);
              while (bStart < index) parentNode.insertBefore(get(b[bStart++], 1), _node2);
            }
            // if the effort wasn't good enough, fallback to a replace,
            // moving both source and target indexes forward, hoping that some
            // similar node will be found later on, to go back to the fast path
            else {
              parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
            }
          }
          // otherwise move the source forward, 'cause there's nothing to do
          else aStart++;
        }
        // this node has no meaning in the future list, so it's more than safe
        // to remove it, and check the next live node out instead, meaning
        // that only the live list index should be forwarded
        else parentNode.removeChild(get(a[aStart++], -1));
      }
    }
    return b;
  });

  /*! (c) Andrea Giammarchi - ISC */
  var importNode = function (document, appendChild, cloneNode, createTextNode, importNode) {
    var _native = (importNode in document);
    // IE 11 has problems with cloning templates:
    // it "forgets" empty childNodes. This feature-detects that.
    var fragment = document.createDocumentFragment();
    fragment[appendChild](document[createTextNode]('g'));
    fragment[appendChild](document[createTextNode](''));
    /* istanbul ignore next */
    var content = _native ? document[importNode](fragment, true) : fragment[cloneNode](true);
    return content.childNodes.length < 2 ? function importNode(node, deep) {
      var clone = node[cloneNode]();
      for (var /* istanbul ignore next */
        childNodes = node.childNodes || [], length = childNodes.length, i = 0; deep && i < length; i++) {
        clone[appendChild](importNode(childNodes[i], deep));
      }
      return clone;
    } : /* istanbul ignore next */
    _native ? document[importNode] : function (node, deep) {
      return node[cloneNode](!!deep);
    };
  }(document, 'appendChild', 'cloneNode', 'createTextNode', 'importNode');

  var trim = ''.trim || /* istanbul ignore next */function () {
    return String(this).replace(/^\s+|\s+/g, '');
  };

  /* istanbul ignore next */
  var normalizeAttributes = UID_IE ? function (attributes, parts) {
    var html = parts.join(' ');
    return parts.slice.call(attributes, 0).sort(function (left, right) {
      return html.indexOf(left.name) <= html.indexOf(right.name) ? -1 : 1;
    });
  } : function (attributes, parts) {
    return parts.slice.call(attributes, 0);
  };
  function find(node, path) {
    var length = path.length;
    var i = 0;
    while (i < length) node = node.childNodes[path[i++]];
    return node;
  }
  function parse(node, holes, parts, path) {
    var childNodes = node.childNodes;
    var length = childNodes.length;
    var i = 0;
    while (i < length) {
      var child = childNodes[i];
      switch (child.nodeType) {
        case ELEMENT_NODE$1:
          var childPath = path.concat(i);
          parseAttributes(child, holes, parts, childPath);
          parse(child, holes, parts, childPath);
          break;
        case COMMENT_NODE:
          var textContent = child.textContent;
          if (textContent === UID) {
            parts.shift();
            holes.push(
            // basicHTML or other non standard engines
            // might end up having comments in nodes
            // where they shouldn't, hence this check.
            SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ? Text(node, path) : Any(child, path.concat(i)));
          } else {
            switch (textContent.slice(0, 2)) {
              case '/*':
                if (textContent.slice(-2) !== '*/') break;
              case "\uD83D\uDC7B":
                // ghost
                node.removeChild(child);
                i--;
                length--;
            }
          }
          break;
        case TEXT_NODE:
          // the following ignore is actually covered by browsers
          // only basicHTML ends up on previous COMMENT_NODE case
          // instead of TEXT_NODE because it knows nothing about
          // special style or textarea behavior
          /* istanbul ignore if */
          if (SHOULD_USE_TEXT_CONTENT.test(node.nodeName) && trim.call(child.textContent) === UIDC) {
            parts.shift();
            holes.push(Text(node, path));
          }
          break;
      }
      i++;
    }
  }
  function parseAttributes(node, holes, parts, path) {
    var attributes = node.attributes;
    var cache = [];
    var remove = [];
    var array = normalizeAttributes(attributes, parts);
    var length = array.length;
    var i = 0;
    while (i < length) {
      var attribute = array[i++];
      var direct = attribute.value === UID;
      var sparse;
      if (direct || 1 < (sparse = attribute.value.split(UIDC)).length) {
        var name = attribute.name;
        // the following ignore is covered by IE
        // and the IE9 double viewBox test
        /* istanbul ignore else */
        if (cache.indexOf(name) < 0) {
          cache.push(name);
          var realName = parts.shift().replace(direct ? /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ : new RegExp('^(?:|[\\S\\s]*?\\s)(' + name + ')\\s*=\\s*(\'|")[\\S\\s]*', 'i'), '$1');
          var value = attributes[realName] ||
          // the following ignore is covered by browsers
          // while basicHTML is already case-sensitive
          /* istanbul ignore next */
          attributes[realName.toLowerCase()];
          if (direct) holes.push(Attr(value, path, realName, null));else {
            var skip = sparse.length - 2;
            while (skip--) parts.shift();
            holes.push(Attr(value, path, realName, sparse));
          }
        }
        remove.push(attribute);
      }
    }
    length = remove.length;
    i = 0;

    /* istanbul ignore next */
    var cleanValue = 0 < length && UID_IE && !('ownerSVGElement' in node);
    while (i < length) {
      // Edge HTML bug #16878726
      var attr = remove[i++];
      // IE/Edge bug lighterhtml#63 - clean the value or it'll persist
      /* istanbul ignore next */
      if (cleanValue) attr.value = '';
      // IE/Edge bug lighterhtml#64 - don't use removeAttributeNode
      node.removeAttribute(attr.name);
    }

    // This is a very specific Firefox/Safari issue
    // but since it should be a not so common pattern,
    // it's probably worth patching regardless.
    // Basically, scripts created through strings are death.
    // You need to create fresh new scripts instead.
    // TODO: is there any other node that needs such nonsense?
    var nodeName = node.nodeName;
    if (/^script$/i.test(nodeName)) {
      // this used to be like that
      // var script = createElement(node, nodeName);
      // then Edge arrived and decided that scripts created
      // through template documents aren't worth executing
      // so it became this ... hopefully it won't hurt in the wild
      var script = document.createElement(nodeName);
      length = attributes.length;
      i = 0;
      while (i < length) script.setAttributeNode(attributes[i++].cloneNode(true));
      script.textContent = node.textContent;
      node.parentNode.replaceChild(script, node);
    }
  }
  function Any(node, path) {
    return {
      type: 'any',
      node: node,
      path: path
    };
  }
  function Attr(node, path, name, sparse) {
    return {
      type: 'attr',
      node: node,
      path: path,
      name: name,
      sparse: sparse
    };
  }
  function Text(node, path) {
    return {
      type: 'text',
      node: node,
      path: path
    };
  }

  // globals
  var parsed = umap(new WeakMap$1());
  function createInfo(options, template) {
    var markup = (options.convert || domsanitizer)(template);
    var transform = options.transform;
    if (transform) markup = transform(markup);
    var content = createContent(markup, options.type);
    cleanContent(content);
    var holes = [];
    parse(content, holes, template.slice(0), []);
    return {
      content: content,
      updates: function updates(content) {
        var updates = [];
        var len = holes.length;
        var i = 0;
        var off = 0;
        while (i < len) {
          var info = holes[i++];
          var node = find(content, info.path);
          switch (info.type) {
            case 'any':
              updates.push({
                fn: options.any(node, []),
                sparse: false
              });
              break;
            case 'attr':
              var sparse = info.sparse;
              var fn = options.attribute(node, info.name, info.node);
              if (sparse === null) updates.push({
                fn: fn,
                sparse: false
              });else {
                off += sparse.length - 2;
                updates.push({
                  fn: fn,
                  sparse: true,
                  values: sparse
                });
              }
              break;
            case 'text':
              updates.push({
                fn: options.text(node),
                sparse: false
              });
              node.textContent = '';
              break;
          }
        }
        len += off;
        return function () {
          var length = arguments.length;
          if (len !== length - 1) {
            throw new Error(length - 1 + ' values instead of ' + len + '\n' + template.join('${value}'));
          }
          var i = 1;
          var off = 1;
          while (i < length) {
            var update = updates[i - off];
            if (update.sparse) {
              var values = update.values;
              var value = values[0];
              var j = 1;
              var l = values.length;
              off += l - 2;
              while (j < l) value += arguments[i++] + values[j++];
              update.fn(value);
            } else update.fn(arguments[i++]);
          }
          return content;
        };
      }
    };
  }
  function createDetails(options, template) {
    var info = parsed.get(template) || parsed.set(template, createInfo(options, template));
    return info.updates(importNode.call(document, info.content, true));
  }
  var empty = [];
  function domtagger(options) {
    var previous = empty;
    var updates = cleanContent;
    return function (template) {
      if (previous !== template) updates = createDetails(options, previous = template);
      return updates.apply(null, arguments);
    };
  }
  function cleanContent(fragment) {
    var childNodes = fragment.childNodes;
    var i = childNodes.length;
    while (i--) {
      var child = childNodes[i];
      if (child.nodeType !== 1 && trim.call(child.textContent).length === 0) {
        fragment.removeChild(child);
      }
    }
  }

  /*! (c) Andrea Giammarchi - ISC */
  var hyperStyle = function () {

    // from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/varants.js
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var hyphen = /([^A-Z])([A-Z]+)/g;
    return function hyperStyle(node, original) {
      return 'ownerSVGElement' in node ? svg(node, original) : update(node.style, false);
    };
    function ized($0, $1, $2) {
      return $1 + '-' + $2.toLowerCase();
    }
    function svg(node, original) {
      var style;
      if (original) style = original.cloneNode(true);else {
        node.setAttribute('style', '--hyper:style;');
        style = node.getAttributeNode('style');
      }
      style.value = '';
      node.setAttributeNode(style);
      return update(style, true);
    }
    function toStyle(object) {
      var key,
        css = [];
      for (key in object) css.push(key.replace(hyphen, ized), ':', object[key], ';');
      return css.join('');
    }
    function update(style, isSVG) {
      var oldType, oldValue;
      return function (newValue) {
        var info, key, styleValue, value;
        switch (_typeof(newValue)) {
          case 'object':
            if (newValue) {
              if (oldType === 'object') {
                if (!isSVG) {
                  if (oldValue !== newValue) {
                    for (key in oldValue) {
                      if (!(key in newValue)) {
                        style[key] = '';
                      }
                    }
                  }
                }
              } else {
                if (isSVG) style.value = '';else style.cssText = '';
              }
              info = isSVG ? {} : style;
              for (key in newValue) {
                value = newValue[key];
                styleValue = typeof value === 'number' && !IS_NON_DIMENSIONAL.test(key) ? value + 'px' : value;
                if (!isSVG && /^--/.test(key)) info.setProperty(key, styleValue);else info[key] = styleValue;
              }
              oldType = 'object';
              if (isSVG) style.value = toStyle(oldValue = info);else oldValue = newValue;
              break;
            }
          default:
            if (oldValue != newValue) {
              oldType = 'string';
              oldValue = newValue;
              if (isSVG) style.value = newValue || '';else style.cssText = newValue || '';
            }
            break;
        }
      };
    }
  }();

  var aria = function aria(node) {
    return function (values) {
      for (var key in values) {
        var name = key === 'role' ? key : "aria-".concat(key);
        var value = values[key];
        if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
      }
    };
  };
  var attribute = function attribute(node, name) {
    var oldValue,
      orphan = true;
    var attributeNode = document.createAttributeNS(null, name);
    return function (newValue) {
      if (oldValue !== newValue) {
        oldValue = newValue;
        if (oldValue == null) {
          if (!orphan) {
            node.removeAttributeNode(attributeNode);
            orphan = true;
          }
        } else {
          attributeNode.value = newValue;
          if (orphan) {
            node.setAttributeNodeNS(attributeNode);
            orphan = false;
          }
        }
      }
    };
  };
  var _boolean = function _boolean(node, key, oldValue) {
    return function (newValue) {
      if (oldValue !== !!newValue) {
        // when IE won't be around anymore ...
        // node.toggleAttribute(key, oldValue = !!newValue);
        if (oldValue = !!newValue) node.setAttribute(key, '');else node.removeAttribute(key);
      }
    };
  };
  var data = function data(_ref) {
    var dataset = _ref.dataset;
    return function (values) {
      for (var key in values) {
        var value = values[key];
        if (value == null) delete dataset[key];else dataset[key] = value;
      }
    };
  };
  var event = function event(node, name) {
    var oldValue,
      type = name.slice(2);
    if (!(name in node) && name.toLowerCase() in node) type = type.toLowerCase();
    return function (newValue) {
      var info = isArray(newValue) ? newValue : [newValue, false];
      if (oldValue !== info[0]) {
        if (oldValue) node.removeEventListener(type, oldValue, info[1]);
        if (oldValue = info[0]) node.addEventListener(type, oldValue, info[1]);
      }
    };
  };
  var ref = function ref(node) {
    return function (value) {
      if (typeof value === 'function') value(node);else value.current = node;
    };
  };
  var setter = function setter(node, key) {
    return key === 'dataset' ? data(node) : function (value) {
      node[key] = value;
    };
  };

  // special attributes helpers
  var hyperProperty = function hyperProperty(node, name) {
    var oldValue;
    return function (newValue) {
      if (oldValue !== newValue) {
        oldValue = newValue;
        if (node[name] !== newValue) {
          if (newValue == null) {
            // cleanup before dropping the attribute to fix IE/Edge gotcha
            node[name] = '';
            node.removeAttribute(name);
          } else node[name] = newValue;
        }
      }
    };
  };

  // list of attributes that should not be directly assigned
  var readOnly = /^(?:form|list)$/i;

  // simplifies text node creation
  var text = function text(node, _text) {
    return node.ownerDocument.createTextNode(_text);
  };
  function Tagger(type) {
    this.type = type;
    return domtagger(this);
  }
  Tagger.prototype = {
    // there are four kind of attributes, and related behavior:
    //  * events, with a name starting with `on`, to add/remove event listeners
    //  * special, with a name present in their inherited prototype, accessed directly
    //  * regular, accessed through get/setAttribute standard DOM methods
    //  * style, the only regular attribute that also accepts an object as value
    //    so that you can style=${{width: 120}}. In this case, the behavior has been
    //    fully inspired by Preact library and its simplicity.
    attribute: function attribute$1(node, name, original) {
      var isSVG = this.type === 'svg';
      switch (name) {
        case 'class':
          if (isSVG) return attribute(node, name);
          name = 'className';
        case 'props':
          return setter(node, name);
        case 'aria':
          return aria(node);
        case 'style':
          return hyperStyle(node, original, isSVG);
        case 'ref':
          return ref(node);
        case '.dataset':
          return data(node);
        default:
          if (name.slice(0, 1) === '.') return setter(node, name.slice(1));
          if (name.slice(0, 1) === '?') return _boolean(node, name.slice(1));
          if (name.slice(0, 2) === 'on') return event(node, name);
          if (name in node && !(isSVG || readOnly.test(name))) return hyperProperty(node, name);
          return attribute(node, name);
      }
    },
    // in a hyper(node)`<div>${content}</div>` case
    // everything could happen:
    //  * it's a JS primitive, stored as text
    //  * it's null or undefined, the node should be cleaned
    //  * it's a promise, update the content once resolved
    //  * it's an explicit intent, perform the desired operation
    //  * it's an Array, resolve all values if Promises and/or
    //    update the node with the resulting list of content
    any: function any(node, childNodes) {
      var type = this.type;
      var fastPath = false;
      var oldValue;
      var anyContent = function anyContent(value) {
        switch (_typeof(value)) {
          case 'string':
          case 'number':
          case 'boolean':
            if (fastPath) {
              if (oldValue !== value) {
                oldValue = value;
                childNodes[0].textContent = value;
              }
            } else {
              fastPath = true;
              oldValue = value;
              childNodes = udomdiff(node.parentNode, childNodes, [text(node, value)], diffable, node);
            }
            break;
          case 'function':
            anyContent(value(node));
            break;
          case 'object':
          case 'undefined':
            if (value == null) {
              fastPath = false;
              childNodes = udomdiff(node.parentNode, childNodes, [], diffable, node);
              break;
            }
          default:
            fastPath = false;
            oldValue = value;
            if (isArray(value)) {
              if (value.length === 0) {
                if (childNodes.length) {
                  childNodes = udomdiff(node.parentNode, childNodes, [], diffable, node);
                }
              } else {
                switch (_typeof(value[0])) {
                  case 'string':
                  case 'number':
                  case 'boolean':
                    anyContent(String(value));
                    break;
                  case 'function':
                    anyContent(value.map(invoke, node));
                    break;
                  case 'object':
                    if (isArray(value[0])) {
                      value = value.concat.apply([], value);
                    }
                  default:
                    childNodes = udomdiff(node.parentNode, childNodes, value, diffable, node);
                    break;
                }
              }
            } else if ('ELEMENT_NODE' in value) {
              childNodes = udomdiff(node.parentNode, childNodes, value.nodeType === 11 ? slice.call(value.childNodes) : [value], diffable, node);
            } else if ('text' in value) {
              anyContent(String(value.text));
            } else if ('any' in value) {
              anyContent(value.any);
            } else if ('html' in value) {
              childNodes = udomdiff(node.parentNode, childNodes, slice.call(createContent([].concat(value.html).join(''), type).childNodes), diffable, node);
            } else if ('length' in value) {
              anyContent(slice.call(value));
            }
            break;
        }
      };
      return anyContent;
    },
    // style or textareas don't accept HTML as content
    // it's pointless to transform or analyze anything
    // different from text there but it's worth checking
    // for possible defined intents.
    text: function text(node) {
      var oldValue;
      var textContent = function textContent(value) {
        if (oldValue !== value) {
          oldValue = value;
          var type = _typeof(value);
          if (type === 'object' && value) {
            if ('text' in value) {
              textContent(String(value.text));
            } else if ('any' in value) {
              textContent(value.any);
            } else if ('html' in value) {
              textContent([].concat(value.html).join(''));
            } else if ('length' in value) {
              textContent(slice.call(value).join(''));
            }
          } else if (type === 'function') {
            textContent(value(node));
          } else {
            node.textContent = value == null ? '' : value;
          }
        }
      };
      return textContent;
    }
  };
  function invoke(callback) {
    return callback(this);
  }

  var create = Object.create,
    freeze = Object.freeze;
  var cache = umap(new WeakMap$1());
  var createRender = function createRender(Tagger) {
    return {
      html: outer('html', Tagger),
      svg: outer('svg', Tagger),
      render: function render(where, what) {
        var hole = typeof what === 'function' ? what() : what;
        var info = cache.get(where) || cache.set(where, createCache());
        var wire = hole instanceof LighterHole ? unroll(Tagger, info, hole) : hole;
        if (wire !== info.wire) {
          info.wire = wire;
          where.textContent = '';
          where.appendChild(wire.valueOf());
        }
        return where;
      }
    };
  };
  var createCache = function createCache() {
    return {
      stack: [],
      entry: null,
      wire: null
    };
  };
  var outer = function outer(type, Tagger) {
    var cache = umap(new WeakMap$1());
    var fixed = function fixed(info) {
      return function () {
        return unroll(Tagger, info, hole.apply(null, arguments));
      };
    };
    hole["for"] = function (ref, id) {
      var memo = cache.get(ref) || cache.set(ref, create(null));
      return memo[id] || (memo[id] = fixed(createCache()));
    };
    hole.node = function () {
      return unroll(Tagger, createCache(), hole.apply(null, arguments)).valueOf();
    };
    return hole;
    function hole() {
      return new LighterHole(type, tta.apply(null, arguments));
    }
  };
  var unroll = function unroll(Tagger, info, _ref) {
    var _entry;
    var type = _ref.type,
      template = _ref.template,
      values = _ref.values;
    var length = values.length;
    unrollValues(Tagger, info, values, length);
    var entry = info.entry;
    if (!entry || entry.template !== template || entry.type !== type) {
      var tag = new Tagger(type);
      info.entry = entry = {
        type: type,
        template: template,
        tag: tag,
        wire: persistent(tag.apply(void 0, [template].concat(_toConsumableArray(values))))
      };
    } else (_entry = entry).tag.apply(_entry, [template].concat(_toConsumableArray(values)));
    return entry.wire;
  };
  var unrollValues = function unrollValues(Tagger, _ref2, values, length) {
    var stack = _ref2.stack;
    for (var i = 0; i < length; i++) {
      var hole = values[i];
      if (hole instanceof Hole) values[i] = unroll(Tagger, stack[i] || (stack[i] = createCache()), hole);else if (isArray(hole)) unrollValues(Tagger, stack[i] || (stack[i] = createCache()), hole, hole.length);else stack[i] = null;
    }
    if (length < stack.length) stack.splice(length);
  };
  freeze(LighterHole);
  function LighterHole(type, args) {
    this.type = type;
    this.template = args.shift();
    this.values = args;
  }
  var Hole = LighterHole;
  createRender(Tagger);
  function tta() {
    var out = [],
      i = 0,
      length = arguments.length;
    while (i < length) out.push(arguments[i++]);
    return out;
  }

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return _assign.apply(this, arguments);
  };
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function next() {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }

  /** @ignore */
  var ENTRIES = 'ENTRIES';
  /** @ignore */
  var KEYS = 'KEYS';
  /** @ignore */
  var VALUES = 'VALUES';
  /** @ignore */
  var LEAF = '';
  /**
   * @private
   */
  var TreeIterator = /** @class */function () {
    function TreeIterator(set, type) {
      var node = set._tree;
      var keys = Array.from(node.keys());
      this.set = set;
      this._type = type;
      this._path = keys.length > 0 ? [{
        node: node,
        keys: keys
      }] : [];
    }
    TreeIterator.prototype.next = function () {
      var value = this.dive();
      this.backtrack();
      return value;
    };
    TreeIterator.prototype.dive = function () {
      if (this._path.length === 0) {
        return {
          done: true,
          value: undefined
        };
      }
      var _a = last$1(this._path),
        node = _a.node,
        keys = _a.keys;
      if (last$1(keys) === LEAF) {
        return {
          done: false,
          value: this.result()
        };
      }
      var child = node.get(last$1(keys));
      this._path.push({
        node: child,
        keys: Array.from(child.keys())
      });
      return this.dive();
    };
    TreeIterator.prototype.backtrack = function () {
      if (this._path.length === 0) {
        return;
      }
      var keys = last$1(this._path).keys;
      keys.pop();
      if (keys.length > 0) {
        return;
      }
      this._path.pop();
      this.backtrack();
    };
    TreeIterator.prototype.key = function () {
      return this.set._prefix + this._path.map(function (_a) {
        var keys = _a.keys;
        return last$1(keys);
      }).filter(function (key) {
        return key !== LEAF;
      }).join('');
    };
    TreeIterator.prototype.value = function () {
      return last$1(this._path).node.get(LEAF);
    };
    TreeIterator.prototype.result = function () {
      switch (this._type) {
        case VALUES:
          return this.value();
        case KEYS:
          return this.key();
        default:
          return [this.key(), this.value()];
      }
    };
    TreeIterator.prototype[Symbol.iterator] = function () {
      return this;
    };
    return TreeIterator;
  }();
  var last$1 = function last$1(array) {
    return array[array.length - 1];
  };

  /**
   * @ignore
   */
  var fuzzySearch = function fuzzySearch(node, query, maxDistance) {
    var results = new Map();
    if (query === undefined) return results;
    // Number of columns in the Levenshtein matrix.
    var n = query.length + 1;
    // Matching terms can never be longer than N + maxDistance.
    var m = n + maxDistance;
    // Fill first matrix row and column with numbers: 0 1 2 3 ...
    var matrix = new Uint8Array(m * n).fill(maxDistance + 1);
    for (var j = 0; j < n; ++j) matrix[j] = j;
    for (var i = 1; i < m; ++i) matrix[i * n] = i;
    recurse(node, query, maxDistance, results, matrix, 1, n, '');
    return results;
  };
  // Modified version of http://stevehanov.ca/blog/?id=114
  // This builds a Levenshtein matrix for a given query and continuously updates
  // it for nodes in the radix tree that fall within the given maximum edit
  // distance. Keeping the same matrix around is beneficial especially for larger
  // edit distances.
  //
  //           k   a   t   e   <-- query
  //       0   1   2   3   4
  //   c   1   1   2   3   4
  //   a   2   2   1   2   3
  //   t   3   3   2   1  [2]  <-- edit distance
  //   ^
  //   ^ term in radix tree, rows are added and removed as needed
  var recurse = function recurse(node, query, maxDistance, results, matrix, m, n, prefix) {
    var e_1, _a;
    var offset = m * n;
    try {
      key: for (var _b = __values(node.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var key = _c.value;
        if (key === LEAF) {
          // We've reached a leaf node. Check if the edit distance acceptable and
          // store the result if it is.
          var distance = matrix[offset - 1];
          if (distance <= maxDistance) {
            results.set(prefix, [node.get(key), distance]);
          }
        } else {
          // Iterate over all characters in the key. Update the Levenshtein matrix
          // and check if the minimum distance in the last row is still within the
          // maximum edit distance. If it is, we can recurse over all child nodes.
          var i = m;
          for (var pos = 0; pos < key.length; ++pos, ++i) {
            var _char = key[pos];
            var thisRowOffset = n * i;
            var prevRowOffset = thisRowOffset - n;
            // Set the first column based on the previous row, and initialize the
            // minimum distance in the current row.
            var minDistance = matrix[thisRowOffset];
            var jmin = Math.max(0, i - maxDistance - 1);
            var jmax = Math.min(n - 1, i + maxDistance);
            // Iterate over remaining columns (characters in the query).
            for (var j = jmin; j < jmax; ++j) {
              var different = _char !== query[j];
              // It might make sense to only read the matrix positions used for
              // deletion/insertion if the characters are different. But we want to
              // avoid conditional reads for performance reasons.
              var rpl = matrix[prevRowOffset + j] + +different;
              var del = matrix[prevRowOffset + j + 1] + 1;
              var ins = matrix[thisRowOffset + j] + 1;
              var dist = matrix[thisRowOffset + j + 1] = Math.min(rpl, del, ins);
              if (dist < minDistance) minDistance = dist;
            }
            // Because distance will never decrease, we can stop. There will be no
            // matching child nodes.
            if (minDistance > maxDistance) {
              continue key;
            }
          }
          recurse(node.get(key), query, maxDistance, results, matrix, i, n, prefix + key);
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  /**
   * A class implementing the same interface as a standard JavaScript
   * [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
   * with string keys, but adding support for efficiently searching entries with
   * prefix or fuzzy search. This class is used internally by [[MiniSearch]] as
   * the inverted index data structure. The implementation is a radix tree
   * (compressed prefix tree).
   *
   * Since this class can be of general utility beyond _MiniSearch_, it is
   * exported by the `minisearch` package and can be imported (or required) as
   * `minisearch/SearchableMap`.
   *
   * @typeParam T  The type of the values stored in the map.
   */
  var SearchableMap = /** @class */function () {
    /**
     * The constructor is normally called without arguments, creating an empty
     * map. In order to create a [[SearchableMap]] from an iterable or from an
     * object, check [[SearchableMap.from]] and [[SearchableMap.fromObject]].
     *
     * The constructor arguments are for internal use, when creating derived
     * mutable views of a map at a prefix.
     */
    function SearchableMap(tree, prefix) {
      if (tree === void 0) {
        tree = new Map();
      }
      if (prefix === void 0) {
        prefix = '';
      }
      this._size = undefined;
      this._tree = tree;
      this._prefix = prefix;
    }
    /**
     * Creates and returns a mutable view of this [[SearchableMap]], containing only
     * entries that share the given prefix.
     *
     * ### Usage:
     *
     * ```javascript
     * let map = new SearchableMap()
     * map.set("unicorn", 1)
     * map.set("universe", 2)
     * map.set("university", 3)
     * map.set("unique", 4)
     * map.set("hello", 5)
     *
     * let uni = map.atPrefix("uni")
     * uni.get("unique") // => 4
     * uni.get("unicorn") // => 1
     * uni.get("hello") // => undefined
     *
     * let univer = map.atPrefix("univer")
     * univer.get("unique") // => undefined
     * univer.get("universe") // => 2
     * univer.get("university") // => 3
     * ```
     *
     * @param prefix  The prefix
     * @return A [[SearchableMap]] representing a mutable view of the original Map at the given prefix
     */
    SearchableMap.prototype.atPrefix = function (prefix) {
      var e_1, _a;
      if (!prefix.startsWith(this._prefix)) {
        throw new Error('Mismatched prefix');
      }
      var _b = __read(trackDown(this._tree, prefix.slice(this._prefix.length)), 2),
        node = _b[0],
        path = _b[1];
      if (node === undefined) {
        var _c = __read(last(path), 2),
          parentNode = _c[0],
          key = _c[1];
        try {
          for (var _d = __values(parentNode.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
            var k = _e.value;
            if (k !== LEAF && k.startsWith(key)) {
              var node_1 = new Map();
              node_1.set(k.slice(key.length), parentNode.get(k));
              return new SearchableMap(node_1, prefix);
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      return new SearchableMap(node, prefix);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
     */
    SearchableMap.prototype.clear = function () {
      this._size = undefined;
      this._tree.clear();
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
     * @param key  Key to delete
     */
    SearchableMap.prototype["delete"] = function (key) {
      this._size = undefined;
      return remove(this._tree, key);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
     * @return An iterator iterating through `[key, value]` entries.
     */
    SearchableMap.prototype.entries = function () {
      return new TreeIterator(this, ENTRIES);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
     * @param fn  Iteration function
     */
    SearchableMap.prototype.forEach = function (fn) {
      var e_2, _a;
      try {
        for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
          var _d = __read(_c.value, 2),
            key = _d[0],
            value = _d[1];
          fn(key, value, this);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    };
    /**
     * Returns a Map of all the entries that have a key within the given edit
     * distance from the search key. The keys of the returned Map are the matching
     * keys, while the values are two-element arrays where the first element is
     * the value associated to the key, and the second is the edit distance of the
     * key to the search key.
     *
     * ### Usage:
     *
     * ```javascript
     * let map = new SearchableMap()
     * map.set('hello', 'world')
     * map.set('hell', 'yeah')
     * map.set('ciao', 'mondo')
     *
     * // Get all entries that match the key 'hallo' with a maximum edit distance of 2
     * map.fuzzyGet('hallo', 2)
     * // => Map(2) { 'hello' => ['world', 1], 'hell' => ['yeah', 2] }
     *
     * // In the example, the "hello" key has value "world" and edit distance of 1
     * // (change "e" to "a"), the key "hell" has value "yeah" and edit distance of 2
     * // (change "e" to "a", delete "o")
     * ```
     *
     * @param key  The search key
     * @param maxEditDistance  The maximum edit distance (Levenshtein)
     * @return A Map of the matching keys to their value and edit distance
     */
    SearchableMap.prototype.fuzzyGet = function (key, maxEditDistance) {
      return fuzzySearch(this._tree, key, maxEditDistance);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
     * @param key  Key to get
     * @return Value associated to the key, or `undefined` if the key is not
     * found.
     */
    SearchableMap.prototype.get = function (key) {
      var node = lookup(this._tree, key);
      return node !== undefined ? node.get(LEAF) : undefined;
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
     * @param key  Key
     * @return True if the key is in the map, false otherwise
     */
    SearchableMap.prototype.has = function (key) {
      var node = lookup(this._tree, key);
      return node !== undefined && node.has(LEAF);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
     * @return An `Iterable` iterating through keys
     */
    SearchableMap.prototype.keys = function () {
      return new TreeIterator(this, KEYS);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
     * @param key  Key to set
     * @param value  Value to associate to the key
     * @return The [[SearchableMap]] itself, to allow chaining
     */
    SearchableMap.prototype.set = function (key, value) {
      if (typeof key !== 'string') {
        throw new Error('key must be a string');
      }
      this._size = undefined;
      var node = createPath(this._tree, key);
      node.set(LEAF, value);
      return this;
    };
    Object.defineProperty(SearchableMap.prototype, "size", {
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
       */
      get: function get() {
        if (this._size) {
          return this._size;
        }
        /** @ignore */
        this._size = 0;
        var iter = this.entries();
        while (!iter.next().done) this._size += 1;
        return this._size;
      },
      enumerable: false,
      configurable: true
    });
    /**
     * Updates the value at the given key using the provided function. The function
     * is called with the current value at the key, and its return value is used as
     * the new value to be set.
     *
     * ### Example:
     *
     * ```javascript
     * // Increment the current value by one
     * searchableMap.update('somekey', (currentValue) => currentValue == null ? 0 : currentValue + 1)
     * ```
     *
     * If the value at the given key is or will be an object, it might not require
     * re-assignment. In that case it is better to use `fetch()`, because it is
     * faster.
     *
     * @param key  The key to update
     * @param fn  The function used to compute the new value from the current one
     * @return The [[SearchableMap]] itself, to allow chaining
     */
    SearchableMap.prototype.update = function (key, fn) {
      if (typeof key !== 'string') {
        throw new Error('key must be a string');
      }
      this._size = undefined;
      var node = createPath(this._tree, key);
      node.set(LEAF, fn(node.get(LEAF)));
      return this;
    };
    /**
     * Fetches the value of the given key. If the value does not exist, calls the
     * given function to create a new value, which is inserted at the given key
     * and subsequently returned.
     *
     * ### Example:
     *
     * ```javascript
     * const map = searchableMap.fetch('somekey', () => new Map())
     * map.set('foo', 'bar')
     * ```
     *
     * @param key  The key to update
     * @param defaultValue  A function that creates a new value if the key does not exist
     * @return The existing or new value at the given key
     */
    SearchableMap.prototype.fetch = function (key, initial) {
      if (typeof key !== 'string') {
        throw new Error('key must be a string');
      }
      this._size = undefined;
      var node = createPath(this._tree, key);
      var value = node.get(LEAF);
      if (value === undefined) {
        node.set(LEAF, value = initial());
      }
      return value;
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
     * @return An `Iterable` iterating through values.
     */
    SearchableMap.prototype.values = function () {
      return new TreeIterator(this, VALUES);
    };
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator
     */
    SearchableMap.prototype[Symbol.iterator] = function () {
      return this.entries();
    };
    /**
     * Creates a [[SearchableMap]] from an `Iterable` of entries
     *
     * @param entries  Entries to be inserted in the [[SearchableMap]]
     * @return A new [[SearchableMap]] with the given entries
     */
    SearchableMap.from = function (entries) {
      var e_3, _a;
      var tree = new SearchableMap();
      try {
        for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
          var _b = __read(entries_1_1.value, 2),
            key = _b[0],
            value = _b[1];
          tree.set(key, value);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (entries_1_1 && !entries_1_1.done && (_a = entries_1["return"])) _a.call(entries_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      return tree;
    };
    /**
     * Creates a [[SearchableMap]] from the iterable properties of a JavaScript object
     *
     * @param object  Object of entries for the [[SearchableMap]]
     * @return A new [[SearchableMap]] with the given entries
     */
    SearchableMap.fromObject = function (object) {
      return SearchableMap.from(Object.entries(object));
    };
    return SearchableMap;
  }();
  var trackDown = function trackDown(tree, key, path) {
    var e_4, _a;
    if (path === void 0) {
      path = [];
    }
    if (key.length === 0 || tree == null) {
      return [tree, path];
    }
    try {
      for (var _b = __values(tree.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var k = _c.value;
        if (k !== LEAF && key.startsWith(k)) {
          path.push([tree, k]); // performance: update in place
          return trackDown(tree.get(k), key.slice(k.length), path);
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_4) throw e_4.error;
      }
    }
    path.push([tree, key]); // performance: update in place
    return trackDown(undefined, '', path);
  };
  var lookup = function lookup(tree, key) {
    var e_5, _a;
    if (key.length === 0 || tree == null) {
      return tree;
    }
    try {
      for (var _b = __values(tree.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var k = _c.value;
        if (k !== LEAF && key.startsWith(k)) {
          return lookup(tree.get(k), key.slice(k.length));
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }
  };
  // Create a path in the radix tree for the given key, and returns the deepest
  // node. This function is in the hot path for indexing. It avoids unnecessary
  // string operations and recursion for performance.
  var createPath = function createPath(node, key) {
    var e_6, _a;
    var keyLength = key.length;
    outer: for (var pos = 0; node && pos < keyLength;) {
      try {
        for (var _b = (e_6 = void 0, __values(node.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
          var k = _c.value;
          // Check whether this key is a candidate: the first characters must match.
          if (k !== LEAF && key[pos] === k[0]) {
            var len = Math.min(keyLength - pos, k.length);
            // Advance offset to the point where key and k no longer match.
            var offset = 1;
            while (offset < len && key[pos + offset] === k[offset]) ++offset;
            var child_1 = node.get(k);
            if (offset === k.length) {
              // The existing key is shorter than the key we need to create.
              node = child_1;
            } else {
              // Partial match: we need to insert an intermediate node to contain
              // both the existing subtree and the new node.
              var intermediate = new Map();
              intermediate.set(k.slice(offset), child_1);
              node.set(key.slice(pos, pos + offset), intermediate);
              node["delete"](k);
              node = intermediate;
            }
            pos += offset;
            continue outer;
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_6) throw e_6.error;
        }
      }
      // Create a final child node to contain the final suffix of the key.
      var child = new Map();
      node.set(key.slice(pos), child);
      return child;
    }
    return node;
  };
  var remove = function remove(tree, key) {
    var _a = __read(trackDown(tree, key), 2),
      node = _a[0],
      path = _a[1];
    if (node === undefined) {
      return;
    }
    node["delete"](LEAF);
    if (node.size === 0) {
      cleanup(path);
    } else if (node.size === 1) {
      var _b = __read(node.entries().next().value, 2),
        key_1 = _b[0],
        value = _b[1];
      merge(path, key_1, value);
    }
  };
  var cleanup = function cleanup(path) {
    if (path.length === 0) {
      return;
    }
    var _a = __read(last(path), 2),
      node = _a[0],
      key = _a[1];
    node["delete"](key);
    if (node.size === 0) {
      cleanup(path.slice(0, -1));
    } else if (node.size === 1) {
      var _b = __read(node.entries().next().value, 2),
        key_2 = _b[0],
        value = _b[1];
      if (key_2 !== LEAF) {
        merge(path.slice(0, -1), key_2, value);
      }
    }
  };
  var merge = function merge(path, key, value) {
    if (path.length === 0) {
      return;
    }
    var _a = __read(last(path), 2),
      node = _a[0],
      nodeKey = _a[1];
    node.set(nodeKey + key, value);
    node["delete"](nodeKey);
  };
  var last = function last(array) {
    return array[array.length - 1];
  };
  var _a;
  var OR = 'or';
  var AND = 'and';
  var AND_NOT = 'and_not';
  /**
   * [[MiniSearch]] is the main entrypoint class, implementing a full-text search
   * engine in memory.
   *
   * @typeParam T  The type of the documents being indexed.
   *
   * ### Basic example:
   *
   * ```javascript
   * const documents = [
   *   {
   *     id: 1,
   *     title: 'Moby Dick',
   *     text: 'Call me Ishmael. Some years ago...',
   *     category: 'fiction'
   *   },
   *   {
   *     id: 2,
   *     title: 'Zen and the Art of Motorcycle Maintenance',
   *     text: 'I can see by my watch...',
   *     category: 'fiction'
   *   },
   *   {
   *     id: 3,
   *     title: 'Neuromancer',
   *     text: 'The sky above the port was...',
   *     category: 'fiction'
   *   },
   *   {
   *     id: 4,
   *     title: 'Zen and the Art of Archery',
   *     text: 'At first sight it must seem...',
   *     category: 'non-fiction'
   *   },
   *   // ...and more
   * ]
   *
   * // Create a search engine that indexes the 'title' and 'text' fields for
   * // full-text search. Search results will include 'title' and 'category' (plus the
   * // id field, that is always stored and returned)
   * const miniSearch = new MiniSearch({
   *   fields: ['title', 'text'],
   *   storeFields: ['title', 'category']
   * })
   *
   * // Add documents to the index
   * miniSearch.addAll(documents)
   *
   * // Search for documents:
   * let results = miniSearch.search('zen art motorcycle')
   * // => [
   * //   { id: 2, title: 'Zen and the Art of Motorcycle Maintenance', category: 'fiction', score: 2.77258 },
   * //   { id: 4, title: 'Zen and the Art of Archery', category: 'non-fiction', score: 1.38629 }
   * // ]
   * ```
   */
  var MiniSearch = /** @class */function () {
    /**
     * @param options  Configuration options
     *
     * ### Examples:
     *
     * ```javascript
     * // Create a search engine that indexes the 'title' and 'text' fields of your
     * // documents:
     * const miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * ```
     *
     * ### ID Field:
     *
     * ```javascript
     * // Your documents are assumed to include a unique 'id' field, but if you want
     * // to use a different field for document identification, you can set the
     * // 'idField' option:
     * const miniSearch = new MiniSearch({ idField: 'key', fields: ['title', 'text'] })
     * ```
     *
     * ### Options and defaults:
     *
     * ```javascript
     * // The full set of options (here with their default value) is:
     * const miniSearch = new MiniSearch({
     *   // idField: field that uniquely identifies a document
     *   idField: 'id',
     *
     *   // extractField: function used to get the value of a field in a document.
     *   // By default, it assumes the document is a flat object with field names as
     *   // property keys and field values as string property values, but custom logic
     *   // can be implemented by setting this option to a custom extractor function.
     *   extractField: (document, fieldName) => document[fieldName],
     *
     *   // tokenize: function used to split fields into individual terms. By
     *   // default, it is also used to tokenize search queries, unless a specific
     *   // `tokenize` search option is supplied. When tokenizing an indexed field,
     *   // the field name is passed as the second argument.
     *   tokenize: (string, _fieldName) => string.split(SPACE_OR_PUNCTUATION),
     *
     *   // processTerm: function used to process each tokenized term before
     *   // indexing. It can be used for stemming and normalization. Return a falsy
     *   // value in order to discard a term. By default, it is also used to process
     *   // search queries, unless a specific `processTerm` option is supplied as a
     *   // search option. When processing a term from a indexed field, the field
     *   // name is passed as the second argument.
     *   processTerm: (term, _fieldName) => term.toLowerCase(),
     *
     *   // searchOptions: default search options, see the `search` method for
     *   // details
     *   searchOptions: undefined,
     *
     *   // fields: document fields to be indexed. Mandatory, but not set by default
     *   fields: undefined
     *
     *   // storeFields: document fields to be stored and returned as part of the
     *   // search results.
     *   storeFields: []
     * })
     * ```
     */
    function MiniSearch(options) {
      if ((options === null || options === void 0 ? void 0 : options.fields) == null) {
        throw new Error('MiniSearch: option "fields" must be provided');
      }
      var autoVacuum = options.autoVacuum == null || options.autoVacuum === true ? defaultAutoVacuumOptions : options.autoVacuum;
      this._options = _assign(_assign(_assign({}, defaultOptions$1), options), {
        autoVacuum: autoVacuum,
        searchOptions: _assign(_assign({}, defaultSearchOptions), options.searchOptions || {}),
        autoSuggestOptions: _assign(_assign({}, defaultAutoSuggestOptions), options.autoSuggestOptions || {})
      });
      this._index = new SearchableMap();
      this._documentCount = 0;
      this._documentIds = new Map();
      this._idToShortId = new Map();
      // Fields are defined during initialization, don't change, are few in
      // number, rarely need iterating over, and have string keys. Therefore in
      // this case an object is a better candidate than a Map to store the mapping
      // from field key to ID.
      this._fieldIds = {};
      this._fieldLength = new Map();
      this._avgFieldLength = [];
      this._nextId = 0;
      this._storedFields = new Map();
      this._dirtCount = 0;
      this._currentVacuum = null;
      this._enqueuedVacuum = null;
      this._enqueuedVacuumConditions = defaultVacuumConditions;
      this.addFields(this._options.fields);
    }
    /**
     * Adds a document to the index
     *
     * @param document  The document to be indexed
     */
    MiniSearch.prototype.add = function (document) {
      var e_1, _a, e_2, _b, e_3, _c;
      var _d = this._options,
        extractField = _d.extractField,
        tokenize = _d.tokenize,
        processTerm = _d.processTerm,
        fields = _d.fields,
        idField = _d.idField;
      var id = extractField(document, idField);
      if (id == null) {
        throw new Error("MiniSearch: document does not have ID field \"".concat(idField, "\""));
      }
      if (this._idToShortId.has(id)) {
        throw new Error("MiniSearch: duplicate ID ".concat(id));
      }
      var shortDocumentId = this.addDocumentId(id);
      this.saveStoredFields(shortDocumentId, document);
      try {
        for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
          var field = fields_1_1.value;
          var fieldValue = extractField(document, field);
          if (fieldValue == null) continue;
          var tokens = tokenize(fieldValue.toString(), field);
          var fieldId = this._fieldIds[field];
          var uniqueTerms = new Set(tokens).size;
          this.addFieldLength(shortDocumentId, fieldId, this._documentCount - 1, uniqueTerms);
          try {
            for (var tokens_1 = (e_2 = void 0, __values(tokens)), tokens_1_1 = tokens_1.next(); !tokens_1_1.done; tokens_1_1 = tokens_1.next()) {
              var term = tokens_1_1.value;
              var processedTerm = processTerm(term, field);
              if (Array.isArray(processedTerm)) {
                try {
                  for (var processedTerm_1 = (e_3 = void 0, __values(processedTerm)), processedTerm_1_1 = processedTerm_1.next(); !processedTerm_1_1.done; processedTerm_1_1 = processedTerm_1.next()) {
                    var t = processedTerm_1_1.value;
                    this.addTerm(fieldId, shortDocumentId, t);
                  }
                } catch (e_3_1) {
                  e_3 = {
                    error: e_3_1
                  };
                } finally {
                  try {
                    if (processedTerm_1_1 && !processedTerm_1_1.done && (_c = processedTerm_1["return"])) _c.call(processedTerm_1);
                  } finally {
                    if (e_3) throw e_3.error;
                  }
                }
              } else if (processedTerm) {
                this.addTerm(fieldId, shortDocumentId, processedTerm);
              }
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (tokens_1_1 && !tokens_1_1.done && (_b = tokens_1["return"])) _b.call(tokens_1);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (fields_1_1 && !fields_1_1.done && (_a = fields_1["return"])) _a.call(fields_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    /**
     * Adds all the given documents to the index
     *
     * @param documents  An array of documents to be indexed
     */
    MiniSearch.prototype.addAll = function (documents) {
      var e_4, _a;
      try {
        for (var documents_1 = __values(documents), documents_1_1 = documents_1.next(); !documents_1_1.done; documents_1_1 = documents_1.next()) {
          var document_1 = documents_1_1.value;
          this.add(document_1);
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (documents_1_1 && !documents_1_1.done && (_a = documents_1["return"])) _a.call(documents_1);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
    };
    /**
     * Adds all the given documents to the index asynchronously.
     *
     * Returns a promise that resolves (to `undefined`) when the indexing is done.
     * This method is useful when index many documents, to avoid blocking the main
     * thread. The indexing is performed asynchronously and in chunks.
     *
     * @param documents  An array of documents to be indexed
     * @param options  Configuration options
     * @return A promise resolving to `undefined` when the indexing is done
     */
    MiniSearch.prototype.addAllAsync = function (documents, options) {
      var _this = this;
      if (options === void 0) {
        options = {};
      }
      var _a = options.chunkSize,
        chunkSize = _a === void 0 ? 10 : _a;
      var acc = {
        chunk: [],
        promise: Promise.resolve()
      };
      var _b = documents.reduce(function (_a, document, i) {
          var chunk = _a.chunk,
            promise = _a.promise;
          chunk.push(document);
          if ((i + 1) % chunkSize === 0) {
            return {
              chunk: [],
              promise: promise.then(function () {
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 0);
                });
              }).then(function () {
                return _this.addAll(chunk);
              })
            };
          } else {
            return {
              chunk: chunk,
              promise: promise
            };
          }
        }, acc),
        chunk = _b.chunk,
        promise = _b.promise;
      return promise.then(function () {
        return _this.addAll(chunk);
      });
    };
    /**
     * Removes the given document from the index.
     *
     * The document to remove must NOT have changed between indexing and removal,
     * otherwise the index will be corrupted.
     *
     * This method requires passing the full document to be removed (not just the
     * ID), and immediately removes the document from the inverted index, allowing
     * memory to be released. A convenient alternative is [[MiniSearch.discard]],
     * which needs only the document ID, and has the same visible effect, but
     * delays cleaning up the index until the next vacuuming.
     *
     * @param document  The document to be removed
     */
    MiniSearch.prototype.remove = function (document) {
      var e_5, _a, e_6, _b, e_7, _c;
      var _d = this._options,
        tokenize = _d.tokenize,
        processTerm = _d.processTerm,
        extractField = _d.extractField,
        fields = _d.fields,
        idField = _d.idField;
      var id = extractField(document, idField);
      if (id == null) {
        throw new Error("MiniSearch: document does not have ID field \"".concat(idField, "\""));
      }
      var shortId = this._idToShortId.get(id);
      if (shortId == null) {
        throw new Error("MiniSearch: cannot remove document with ID ".concat(id, ": it is not in the index"));
      }
      try {
        for (var fields_2 = __values(fields), fields_2_1 = fields_2.next(); !fields_2_1.done; fields_2_1 = fields_2.next()) {
          var field = fields_2_1.value;
          var fieldValue = extractField(document, field);
          if (fieldValue == null) continue;
          var tokens = tokenize(fieldValue.toString(), field);
          var fieldId = this._fieldIds[field];
          var uniqueTerms = new Set(tokens).size;
          this.removeFieldLength(shortId, fieldId, this._documentCount, uniqueTerms);
          try {
            for (var tokens_2 = (e_6 = void 0, __values(tokens)), tokens_2_1 = tokens_2.next(); !tokens_2_1.done; tokens_2_1 = tokens_2.next()) {
              var term = tokens_2_1.value;
              var processedTerm = processTerm(term, field);
              if (Array.isArray(processedTerm)) {
                try {
                  for (var processedTerm_2 = (e_7 = void 0, __values(processedTerm)), processedTerm_2_1 = processedTerm_2.next(); !processedTerm_2_1.done; processedTerm_2_1 = processedTerm_2.next()) {
                    var t = processedTerm_2_1.value;
                    this.removeTerm(fieldId, shortId, t);
                  }
                } catch (e_7_1) {
                  e_7 = {
                    error: e_7_1
                  };
                } finally {
                  try {
                    if (processedTerm_2_1 && !processedTerm_2_1.done && (_c = processedTerm_2["return"])) _c.call(processedTerm_2);
                  } finally {
                    if (e_7) throw e_7.error;
                  }
                }
              } else if (processedTerm) {
                this.removeTerm(fieldId, shortId, processedTerm);
              }
            }
          } catch (e_6_1) {
            e_6 = {
              error: e_6_1
            };
          } finally {
            try {
              if (tokens_2_1 && !tokens_2_1.done && (_b = tokens_2["return"])) _b.call(tokens_2);
            } finally {
              if (e_6) throw e_6.error;
            }
          }
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (fields_2_1 && !fields_2_1.done && (_a = fields_2["return"])) _a.call(fields_2);
        } finally {
          if (e_5) throw e_5.error;
        }
      }
      this._storedFields["delete"](shortId);
      this._documentIds["delete"](shortId);
      this._idToShortId["delete"](id);
      this._fieldLength["delete"](shortId);
      this._documentCount -= 1;
    };
    /**
     * Removes all the given documents from the index. If called with no arguments,
     * it removes _all_ documents from the index.
     *
     * @param documents  The documents to be removed. If this argument is omitted,
     * all documents are removed. Note that, for removing all documents, it is
     * more efficient to call this method with no arguments than to pass all
     * documents.
     */
    MiniSearch.prototype.removeAll = function (documents) {
      var e_8, _a;
      if (documents) {
        try {
          for (var documents_2 = __values(documents), documents_2_1 = documents_2.next(); !documents_2_1.done; documents_2_1 = documents_2.next()) {
            var document_2 = documents_2_1.value;
            this.remove(document_2);
          }
        } catch (e_8_1) {
          e_8 = {
            error: e_8_1
          };
        } finally {
          try {
            if (documents_2_1 && !documents_2_1.done && (_a = documents_2["return"])) _a.call(documents_2);
          } finally {
            if (e_8) throw e_8.error;
          }
        }
      } else if (arguments.length > 0) {
        throw new Error('Expected documents to be present. Omit the argument to remove all documents.');
      } else {
        this._index = new SearchableMap();
        this._documentCount = 0;
        this._documentIds = new Map();
        this._idToShortId = new Map();
        this._fieldLength = new Map();
        this._avgFieldLength = [];
        this._storedFields = new Map();
        this._nextId = 0;
      }
    };
    /**
     * Discards the document with the given ID, so it won't appear in search results
     *
     * It has the same visible effect of [[MiniSearch.remove]] (both cause the
     * document to stop appearing in searches), but a different effect on the
     * internal data structures:
     *
     *   - [[MiniSearch.remove]] requires passing the full document to be removed
     *   as argument, and removes it from the inverted index immediately.
     *
     *   - [[MiniSearch.discard]] instead only needs the document ID, and works by
     *   marking the current version of the document as discarded, so it is
     *   immediately ignored by searches. This is faster and more convenient than
     *   `remove`, but the index is not immediately modified. To take care of
     *   that, vacuuming is performed after a certain number of documents are
     *   discarded, cleaning up the index and allowing memory to be released.
     *
     * After discarding a document, it is possible to re-add a new version, and
     * only the new version will appear in searches. In other words, discarding
     * and re-adding a document works exactly like removing and re-adding it. The
     * [[MiniSearch.replace]] method can also be used to replace a document with a
     * new version.
     *
     * #### Details about vacuuming
     *
     * Repetite calls to this method would leave obsolete document references in
     * the index, invisible to searches. Two mechanisms take care of cleaning up:
     * clean up during search, and vacuuming.
     *
     *   - Upon search, whenever a discarded ID is found (and ignored for the
     *   results), references to the discarded document are removed from the
     *   inverted index entries for the search terms. This ensures that subsequent
     *   searches for the same terms do not need to skip these obsolete references
     *   again.
     *
     *   - In addition, vacuuming is performed automatically by default (see the
     *   `autoVacuum` field in [[Options]]) after a certain number of documents
     *   are discarded. Vacuuming traverses all terms in the index, cleaning up
     *   all references to discarded documents. Vacuuming can also be triggered
     *   manually by calling [[MiniSearch.vacuum]].
     *
     * @param id  The ID of the document to be discarded
     */
    MiniSearch.prototype.discard = function (id) {
      var _this = this;
      var shortId = this._idToShortId.get(id);
      if (shortId == null) {
        throw new Error("MiniSearch: cannot discard document with ID ".concat(id, ": it is not in the index"));
      }
      this._idToShortId["delete"](id);
      this._documentIds["delete"](shortId);
      this._storedFields["delete"](shortId);
      (this._fieldLength.get(shortId) || []).forEach(function (fieldLength, fieldId) {
        _this.removeFieldLength(shortId, fieldId, _this._documentCount, fieldLength);
      });
      this._fieldLength["delete"](shortId);
      this._documentCount -= 1;
      this._dirtCount += 1;
      this.maybeAutoVacuum();
    };
    MiniSearch.prototype.maybeAutoVacuum = function () {
      if (this._options.autoVacuum === false) {
        return;
      }
      var _a = this._options.autoVacuum,
        minDirtFactor = _a.minDirtFactor,
        minDirtCount = _a.minDirtCount,
        batchSize = _a.batchSize,
        batchWait = _a.batchWait;
      this.conditionalVacuum({
        batchSize: batchSize,
        batchWait: batchWait
      }, {
        minDirtCount: minDirtCount,
        minDirtFactor: minDirtFactor
      });
    };
    /**
     * Discards the documents with the given IDs, so they won't appear in search
     * results
     *
     * It is equivalent to calling [[MiniSearch.discard]] for all the given IDs,
     * but with the optimization of triggering at most one automatic vacuuming at
     * the end.
     *
     * Note: to remove all documents from the index, it is faster and more
     * convenient to call [[MiniSearch.removeAll]] with no argument, instead of
     * passing all IDs to this method.
     */
    MiniSearch.prototype.discardAll = function (ids) {
      var e_9, _a;
      var autoVacuum = this._options.autoVacuum;
      try {
        this._options.autoVacuum = false;
        try {
          for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
            var id = ids_1_1.value;
            this.discard(id);
          }
        } catch (e_9_1) {
          e_9 = {
            error: e_9_1
          };
        } finally {
          try {
            if (ids_1_1 && !ids_1_1.done && (_a = ids_1["return"])) _a.call(ids_1);
          } finally {
            if (e_9) throw e_9.error;
          }
        }
      } finally {
        this._options.autoVacuum = autoVacuum;
      }
      this.maybeAutoVacuum();
    };
    /**
     * It replaces an existing document with the given updated version
     *
     * It works by discarding the current version and adding the updated one, so
     * it is functionally equivalent to calling [[MiniSearch.discard]] followed by
     * [[MiniSearch.add]]. The ID of the updated document should be the same as
     * the original one.
     *
     * Since it uses [[MiniSearch.discard]] internally, this method relies on
     * vacuuming to clean up obsolete document references from the index, allowing
     * memory to be released (see [[MiniSearch.discard]]).
     *
     * @param updatedDocument  The updated document to replace the old version
     * with
     */
    MiniSearch.prototype.replace = function (updatedDocument) {
      var _a = this._options,
        idField = _a.idField,
        extractField = _a.extractField;
      var id = extractField(updatedDocument, idField);
      this.discard(id);
      this.add(updatedDocument);
    };
    /**
     * Triggers a manual vacuuming, cleaning up references to discarded documents
     * from the inverted index
     *
     * Vacuiuming is only useful for applications that use the
     * [[MiniSearch.discard]] or [[MiniSearch.replace]] methods.
     *
     * By default, vacuuming is performed automatically when needed (controlled by
     * the `autoVacuum` field in [[Options]]), so there is usually no need to call
     * this method, unless one wants to make sure to perform vacuuming at a
     * specific moment.
     *
     * Vacuuming traverses all terms in the inverted index in batches, and cleans
     * up references to discarded documents from the posting list, allowing memory
     * to be released.
     *
     * The method takes an optional object as argument with the following keys:
     *
     *   - `batchSize`: the size of each batch (1000 by default)
     *
     *   - `batchWait`: the number of milliseconds to wait between batches (10 by
     *   default)
     *
     * On large indexes, vacuuming could have a non-negligible cost: batching
     * avoids blocking the thread for long, diluting this cost so that it is not
     * negatively affecting the application. Nonetheless, this method should only
     * be called when necessary, and relying on automatic vacuuming is usually
     * better.
     *
     * It returns a promise that resolves (to undefined) when the clean up is
     * completed. If vacuuming is already ongoing at the time this method is
     * called, a new one is enqueued immediately after the ongoing one, and a
     * corresponding promise is returned. However, no more than one vacuuming is
     * enqueued on top of the ongoing one, even if this method is called more
     * times (enqueuing multiple ones would be useless).
     *
     * @param options  Configuration options for the batch size and delay. See
     * [[VacuumOptions]].
     */
    MiniSearch.prototype.vacuum = function (options) {
      if (options === void 0) {
        options = {};
      }
      return this.conditionalVacuum(options);
    };
    MiniSearch.prototype.conditionalVacuum = function (options, conditions) {
      var _this = this;
      // If a vacuum is already ongoing, schedule another as soon as it finishes,
      // unless there's already one enqueued. If one was already enqueued, do not
      // enqueue another on top, but make sure that the conditions are the
      // broadest.
      if (this._currentVacuum) {
        this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && conditions;
        if (this._enqueuedVacuum != null) {
          return this._enqueuedVacuum;
        }
        this._enqueuedVacuum = this._currentVacuum.then(function () {
          var conditions = _this._enqueuedVacuumConditions;
          _this._enqueuedVacuumConditions = defaultVacuumConditions;
          return _this.performVacuuming(options, conditions);
        });
        return this._enqueuedVacuum;
      }
      if (this.vacuumConditionsMet(conditions) === false) {
        return Promise.resolve();
      }
      this._currentVacuum = this.performVacuuming(options);
      return this._currentVacuum;
    };
    MiniSearch.prototype.performVacuuming = function (options, conditions) {
      return __awaiter(this, void 0, void 0, function () {
        var initialDirtCount, batchSize, batchWait_1, i, _a, _b, _c, term, fieldsData, fieldsData_1, fieldsData_1_1, _d, fieldId, fieldIndex, fieldIndex_1, fieldIndex_1_1, _e, shortId, e_10_1;
        var e_10, _f, e_11, _g, e_12, _h;
        return __generator(this, function (_j) {
          switch (_j.label) {
            case 0:
              initialDirtCount = this._dirtCount;
              if (!this.vacuumConditionsMet(conditions)) return [3 /*break*/, 10];
              batchSize = options.batchSize || defaultVacuumOptions.batchSize;
              batchWait_1 = options.batchWait || defaultVacuumOptions.batchWait;
              i = 1;
              _j.label = 1;
            case 1:
              _j.trys.push([1, 7, 8, 9]);
              _a = __values(this._index), _b = _a.next();
              _j.label = 2;
            case 2:
              if (!!_b.done) return [3 /*break*/, 6];
              _c = __read(_b.value, 2), term = _c[0], fieldsData = _c[1];
              try {
                for (fieldsData_1 = (e_11 = void 0, __values(fieldsData)), fieldsData_1_1 = fieldsData_1.next(); !fieldsData_1_1.done; fieldsData_1_1 = fieldsData_1.next()) {
                  _d = __read(fieldsData_1_1.value, 2), fieldId = _d[0], fieldIndex = _d[1];
                  try {
                    for (fieldIndex_1 = (e_12 = void 0, __values(fieldIndex)), fieldIndex_1_1 = fieldIndex_1.next(); !fieldIndex_1_1.done; fieldIndex_1_1 = fieldIndex_1.next()) {
                      _e = __read(fieldIndex_1_1.value, 1), shortId = _e[0];
                      if (this._documentIds.has(shortId)) {
                        continue;
                      }
                      if (fieldIndex.size <= 1) {
                        fieldsData["delete"](fieldId);
                      } else {
                        fieldIndex["delete"](shortId);
                      }
                    }
                  } catch (e_12_1) {
                    e_12 = {
                      error: e_12_1
                    };
                  } finally {
                    try {
                      if (fieldIndex_1_1 && !fieldIndex_1_1.done && (_h = fieldIndex_1["return"])) _h.call(fieldIndex_1);
                    } finally {
                      if (e_12) throw e_12.error;
                    }
                  }
                }
              } catch (e_11_1) {
                e_11 = {
                  error: e_11_1
                };
              } finally {
                try {
                  if (fieldsData_1_1 && !fieldsData_1_1.done && (_g = fieldsData_1["return"])) _g.call(fieldsData_1);
                } finally {
                  if (e_11) throw e_11.error;
                }
              }
              if (this._index.get(term).size === 0) {
                this._index["delete"](term);
              }
              if (!(i % batchSize === 0)) return [3 /*break*/, 4];
              return [4 /*yield*/, new Promise(function (resolve) {
                return setTimeout(resolve, batchWait_1);
              })];
            case 3:
              _j.sent();
              _j.label = 4;
            case 4:
              i += 1;
              _j.label = 5;
            case 5:
              _b = _a.next();
              return [3 /*break*/, 2];
            case 6:
              return [3 /*break*/, 9];
            case 7:
              e_10_1 = _j.sent();
              e_10 = {
                error: e_10_1
              };
              return [3 /*break*/, 9];
            case 8:
              try {
                if (_b && !_b.done && (_f = _a["return"])) _f.call(_a);
              } finally {
                if (e_10) throw e_10.error;
              }
              return [7 /*endfinally*/];
            case 9:
              this._dirtCount -= initialDirtCount;
              _j.label = 10;
            case 10:
              // Make the next lines always async, so they execute after this function returns
              return [4 /*yield*/, null];
            case 11:
              // Make the next lines always async, so they execute after this function returns
              _j.sent();
              this._currentVacuum = this._enqueuedVacuum;
              this._enqueuedVacuum = null;
              return [2 /*return*/];
          }
        });
      });
    };

    MiniSearch.prototype.vacuumConditionsMet = function (conditions) {
      if (conditions == null) {
        return true;
      }
      var minDirtCount = conditions.minDirtCount,
        minDirtFactor = conditions.minDirtFactor;
      minDirtCount = minDirtCount || defaultAutoVacuumOptions.minDirtCount;
      minDirtFactor = minDirtFactor || defaultAutoVacuumOptions.minDirtFactor;
      return this.dirtCount >= minDirtCount && this.dirtFactor >= minDirtFactor;
    };
    Object.defineProperty(MiniSearch.prototype, "isVacuuming", {
      /**
       * Is `true` if a vacuuming operation is ongoing, `false` otherwise
       */
      get: function get() {
        return this._currentVacuum != null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MiniSearch.prototype, "dirtCount", {
      /**
       * The number of documents discarded since the most recent vacuuming
       */
      get: function get() {
        return this._dirtCount;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MiniSearch.prototype, "dirtFactor", {
      /**
       * A number between 0 and 1 giving an indication about the proportion of
       * documents that are discarded, and can therefore be cleaned up by vacuuming.
       * A value close to 0 means that the index is relatively clean, while a higher
       * value means that the index is relatively dirty, and vacuuming could release
       * memory.
       */
      get: function get() {
        return this._dirtCount / (1 + this._documentCount + this._dirtCount);
      },
      enumerable: false,
      configurable: true
    });
    /**
     * Returns `true` if a document with the given ID is present in the index and
     * available for search, `false` otherwise
     *
     * @param id  The document ID
     */
    MiniSearch.prototype.has = function (id) {
      return this._idToShortId.has(id);
    };
    /**
     * Returns the stored fields (as configured in [[Options.storeFields]]) for
     * the given document ID. Returns `undefined` if the document is not present
     * in the index.
     *
     * @param id  The document ID
     */
    MiniSearch.prototype.getStoredFields = function (id) {
      var shortId = this._idToShortId.get(id);
      if (shortId == null) {
        return undefined;
      }
      return this._storedFields.get(shortId);
    };
    /**
     * Search for documents matching the given search query.
     *
     * The result is a list of scored document IDs matching the query, sorted by
     * descending score, and each including data about which terms were matched and
     * in which fields.
     *
     * ### Basic usage:
     *
     * ```javascript
     * // Search for "zen art motorcycle" with default options: terms have to match
     * // exactly, and individual terms are joined with OR
     * miniSearch.search('zen art motorcycle')
     * // => [ { id: 2, score: 2.77258, match: { ... } }, { id: 4, score: 1.38629, match: { ... } } ]
     * ```
     *
     * ### Restrict search to specific fields:
     *
     * ```javascript
     * // Search only in the 'title' field
     * miniSearch.search('zen', { fields: ['title'] })
     * ```
     *
     * ### Field boosting:
     *
     * ```javascript
     * // Boost a field
     * miniSearch.search('zen', { boost: { title: 2 } })
     * ```
     *
     * ### Prefix search:
     *
     * ```javascript
     * // Search for "moto" with prefix search (it will match documents
     * // containing terms that start with "moto" or "neuro")
     * miniSearch.search('moto neuro', { prefix: true })
     * ```
     *
     * ### Fuzzy search:
     *
     * ```javascript
     * // Search for "ismael" with fuzzy search (it will match documents containing
     * // terms similar to "ismael", with a maximum edit distance of 0.2 term.length
     * // (rounded to nearest integer)
     * miniSearch.search('ismael', { fuzzy: 0.2 })
     * ```
     *
     * ### Combining strategies:
     *
     * ```javascript
     * // Mix of exact match, prefix search, and fuzzy search
     * miniSearch.search('ismael mob', {
     *  prefix: true,
     *  fuzzy: 0.2
     * })
     * ```
     *
     * ### Advanced prefix and fuzzy search:
     *
     * ```javascript
     * // Perform fuzzy and prefix search depending on the search term. Here
     * // performing prefix and fuzzy search only on terms longer than 3 characters
     * miniSearch.search('ismael mob', {
     *  prefix: term => term.length > 3
     *  fuzzy: term => term.length > 3 ? 0.2 : null
     * })
     * ```
     *
     * ### Combine with AND:
     *
     * ```javascript
     * // Combine search terms with AND (to match only documents that contain both
     * // "motorcycle" and "art")
     * miniSearch.search('motorcycle art', { combineWith: 'AND' })
     * ```
     *
     * ### Combine with AND_NOT:
     *
     * There is also an AND_NOT combinator, that finds documents that match the
     * first term, but do not match any of the other terms. This combinator is
     * rarely useful with simple queries, and is meant to be used with advanced
     * query combinations (see later for more details).
     *
     * ### Filtering results:
     *
     * ```javascript
     * // Filter only results in the 'fiction' category (assuming that 'category'
     * // is a stored field)
     * miniSearch.search('motorcycle art', {
     *   filter: (result) => result.category === 'fiction'
     * })
     * ```
     *
     * ### Advanced combination of queries:
     *
     * It is possible to combine different subqueries with OR, AND, and AND_NOT,
     * and even with different search options, by passing a query expression
     * tree object as the first argument, instead of a string.
     *
     * ```javascript
     * // Search for documents that contain "zen" and ("motorcycle" or "archery")
     * miniSearch.search({
     *   combineWith: 'AND',
     *   queries: [
     *     'zen',
     *     {
     *       combineWith: 'OR',
     *       queries: ['motorcycle', 'archery']
     *     }
     *   ]
     * })
     *
     * // Search for documents that contain ("apple" or "pear") but not "juice" and
     * // not "tree"
     * miniSearch.search({
     *   combineWith: 'AND_NOT',
     *   queries: [
     *     {
     *       combineWith: 'OR',
     *       queries: ['apple', 'pear']
     *     },
     *     'juice',
     *     'tree'
     *   ]
     * })
     * ```
     *
     * Each node in the expression tree can be either a string, or an object that
     * supports all `SearchOptions` fields, plus a `queries` array field for
     * subqueries.
     *
     * Note that, while this can become complicated to do by hand for complex or
     * deeply nested queries, it provides a formalized expression tree API for
     * external libraries that implement a parser for custom query languages.
     *
     * @param query  Search query
     * @param options  Search options. Each option, if not given, defaults to the corresponding value of `searchOptions` given to the constructor, or to the library default.
     */
    MiniSearch.prototype.search = function (query, searchOptions) {
      var e_13, _a;
      if (searchOptions === void 0) {
        searchOptions = {};
      }
      var combinedResults = this.executeQuery(query, searchOptions);
      var results = [];
      try {
        for (var combinedResults_1 = __values(combinedResults), combinedResults_1_1 = combinedResults_1.next(); !combinedResults_1_1.done; combinedResults_1_1 = combinedResults_1.next()) {
          var _b = __read(combinedResults_1_1.value, 2),
            docId = _b[0],
            _c = _b[1],
            score = _c.score,
            terms = _c.terms,
            match = _c.match;
          // Final score takes into account the number of matching QUERY terms.
          // The end user will only receive the MATCHED terms.
          var quality = terms.length;
          var result = {
            id: this._documentIds.get(docId),
            score: score * quality,
            terms: Object.keys(match),
            match: match
          };
          Object.assign(result, this._storedFields.get(docId));
          if (searchOptions.filter == null || searchOptions.filter(result)) {
            results.push(result);
          }
        }
      } catch (e_13_1) {
        e_13 = {
          error: e_13_1
        };
      } finally {
        try {
          if (combinedResults_1_1 && !combinedResults_1_1.done && (_a = combinedResults_1["return"])) _a.call(combinedResults_1);
        } finally {
          if (e_13) throw e_13.error;
        }
      }
      results.sort(byScore);
      return results;
    };
    /**
     * Provide suggestions for the given search query
     *
     * The result is a list of suggested modified search queries, derived from the
     * given search query, each with a relevance score, sorted by descending score.
     *
     * By default, it uses the same options used for search, except that by
     * default it performs prefix search on the last term of the query, and
     * combine terms with `'AND'` (requiring all query terms to match). Custom
     * options can be passed as a second argument. Defaults can be changed upon
     * calling the `MiniSearch` constructor, by passing a `autoSuggestOptions`
     * option.
     *
     * ### Basic usage:
     *
     * ```javascript
     * // Get suggestions for 'neuro':
     * miniSearch.autoSuggest('neuro')
     * // => [ { suggestion: 'neuromancer', terms: [ 'neuromancer' ], score: 0.46240 } ]
     * ```
     *
     * ### Multiple words:
     *
     * ```javascript
     * // Get suggestions for 'zen ar':
     * miniSearch.autoSuggest('zen ar')
     * // => [
     * //  { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
     * //  { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 }
     * // ]
     * ```
     *
     * ### Fuzzy suggestions:
     *
     * ```javascript
     * // Correct spelling mistakes using fuzzy search:
     * miniSearch.autoSuggest('neromancer', { fuzzy: 0.2 })
     * // => [ { suggestion: 'neuromancer', terms: [ 'neuromancer' ], score: 1.03998 } ]
     * ```
     *
     * ### Filtering:
     *
     * ```javascript
     * // Get suggestions for 'zen ar', but only within the 'fiction' category
     * // (assuming that 'category' is a stored field):
     * miniSearch.autoSuggest('zen ar', {
     *   filter: (result) => result.category === 'fiction'
     * })
     * // => [
     * //  { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
     * //  { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 }
     * // ]
     * ```
     *
     * @param queryString  Query string to be expanded into suggestions
     * @param options  Search options. The supported options and default values
     * are the same as for the `search` method, except that by default prefix
     * search is performed on the last term in the query, and terms are combined
     * with `'AND'`.
     * @return  A sorted array of suggestions sorted by relevance score.
     */
    MiniSearch.prototype.autoSuggest = function (queryString, options) {
      var e_14, _a, e_15, _b;
      if (options === void 0) {
        options = {};
      }
      options = _assign(_assign({}, this._options.autoSuggestOptions), options);
      var suggestions = new Map();
      try {
        for (var _c = __values(this.search(queryString, options)), _d = _c.next(); !_d.done; _d = _c.next()) {
          var _e = _d.value,
            score = _e.score,
            terms = _e.terms;
          var phrase = terms.join(' ');
          var suggestion = suggestions.get(phrase);
          if (suggestion != null) {
            suggestion.score += score;
            suggestion.count += 1;
          } else {
            suggestions.set(phrase, {
              score: score,
              terms: terms,
              count: 1
            });
          }
        }
      } catch (e_14_1) {
        e_14 = {
          error: e_14_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
        } finally {
          if (e_14) throw e_14.error;
        }
      }
      var results = [];
      try {
        for (var suggestions_1 = __values(suggestions), suggestions_1_1 = suggestions_1.next(); !suggestions_1_1.done; suggestions_1_1 = suggestions_1.next()) {
          var _f = __read(suggestions_1_1.value, 2),
            suggestion = _f[0],
            _g = _f[1],
            score = _g.score,
            terms = _g.terms,
            count = _g.count;
          results.push({
            suggestion: suggestion,
            terms: terms,
            score: score / count
          });
        }
      } catch (e_15_1) {
        e_15 = {
          error: e_15_1
        };
      } finally {
        try {
          if (suggestions_1_1 && !suggestions_1_1.done && (_b = suggestions_1["return"])) _b.call(suggestions_1);
        } finally {
          if (e_15) throw e_15.error;
        }
      }
      results.sort(byScore);
      return results;
    };
    Object.defineProperty(MiniSearch.prototype, "documentCount", {
      /**
       * Total number of documents available to search
       */
      get: function get() {
        return this._documentCount;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MiniSearch.prototype, "termCount", {
      /**
       * Number of terms in the index
       */
      get: function get() {
        return this._index.size;
      },
      enumerable: false,
      configurable: true
    });
    /**
     * Deserializes a JSON index (serialized with `JSON.stringify(miniSearch)`)
     * and instantiates a MiniSearch instance. It should be given the same options
     * originally used when serializing the index.
     *
     * ### Usage:
     *
     * ```javascript
     * // If the index was serialized with:
     * let miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * miniSearch.addAll(documents)
     *
     * const json = JSON.stringify(miniSearch)
     * // It can later be deserialized like this:
     * miniSearch = MiniSearch.loadJSON(json, { fields: ['title', 'text'] })
     * ```
     *
     * @param json  JSON-serialized index
     * @param options  configuration options, same as the constructor
     * @return An instance of MiniSearch deserialized from the given JSON.
     */
    MiniSearch.loadJSON = function (json, options) {
      if (options == null) {
        throw new Error('MiniSearch: loadJSON should be given the same options used when serializing the index');
      }
      return this.loadJS(JSON.parse(json), options);
    };
    /**
     * Returns the default value of an option. It will throw an error if no option
     * with the given name exists.
     *
     * @param optionName  Name of the option
     * @return The default value of the given option
     *
     * ### Usage:
     *
     * ```javascript
     * // Get default tokenizer
     * MiniSearch.getDefault('tokenize')
     *
     * // Get default term processor
     * MiniSearch.getDefault('processTerm')
     *
     * // Unknown options will throw an error
     * MiniSearch.getDefault('notExisting')
     * // => throws 'MiniSearch: unknown option "notExisting"'
     * ```
     */
    MiniSearch.getDefault = function (optionName) {
      if (defaultOptions$1.hasOwnProperty(optionName)) {
        return getOwnProperty(defaultOptions$1, optionName);
      } else {
        throw new Error("MiniSearch: unknown option \"".concat(optionName, "\""));
      }
    };
    /**
     * @ignore
     */
    MiniSearch.loadJS = function (js, options) {
      var e_16, _a, e_17, _b, e_18, _c;
      var index = js.index,
        documentCount = js.documentCount,
        nextId = js.nextId,
        documentIds = js.documentIds,
        fieldIds = js.fieldIds,
        fieldLength = js.fieldLength,
        averageFieldLength = js.averageFieldLength,
        storedFields = js.storedFields,
        dirtCount = js.dirtCount,
        serializationVersion = js.serializationVersion;
      if (serializationVersion !== 1 && serializationVersion !== 2) {
        throw new Error('MiniSearch: cannot deserialize an index created with an incompatible version');
      }
      var miniSearch = new MiniSearch(options);
      miniSearch._documentCount = documentCount;
      miniSearch._nextId = nextId;
      miniSearch._documentIds = objectToNumericMap(documentIds);
      miniSearch._idToShortId = new Map();
      miniSearch._fieldIds = fieldIds;
      miniSearch._fieldLength = objectToNumericMap(fieldLength);
      miniSearch._avgFieldLength = averageFieldLength;
      miniSearch._storedFields = objectToNumericMap(storedFields);
      miniSearch._dirtCount = dirtCount || 0;
      miniSearch._index = new SearchableMap();
      try {
        for (var _d = __values(miniSearch._documentIds), _e = _d.next(); !_e.done; _e = _d.next()) {
          var _f = __read(_e.value, 2),
            shortId = _f[0],
            id = _f[1];
          miniSearch._idToShortId.set(id, shortId);
        }
      } catch (e_16_1) {
        e_16 = {
          error: e_16_1
        };
      } finally {
        try {
          if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
        } finally {
          if (e_16) throw e_16.error;
        }
      }
      try {
        for (var index_1 = __values(index), index_1_1 = index_1.next(); !index_1_1.done; index_1_1 = index_1.next()) {
          var _g = __read(index_1_1.value, 2),
            term = _g[0],
            data = _g[1];
          var dataMap = new Map();
          try {
            for (var _h = (e_18 = void 0, __values(Object.keys(data))), _j = _h.next(); !_j.done; _j = _h.next()) {
              var fieldId = _j.value;
              var indexEntry = data[fieldId];
              // Version 1 used to nest the index entry inside a field called ds
              if (serializationVersion === 1) {
                indexEntry = indexEntry.ds;
              }
              dataMap.set(parseInt(fieldId, 10), objectToNumericMap(indexEntry));
            }
          } catch (e_18_1) {
            e_18 = {
              error: e_18_1
            };
          } finally {
            try {
              if (_j && !_j.done && (_c = _h["return"])) _c.call(_h);
            } finally {
              if (e_18) throw e_18.error;
            }
          }
          miniSearch._index.set(term, dataMap);
        }
      } catch (e_17_1) {
        e_17 = {
          error: e_17_1
        };
      } finally {
        try {
          if (index_1_1 && !index_1_1.done && (_b = index_1["return"])) _b.call(index_1);
        } finally {
          if (e_17) throw e_17.error;
        }
      }
      return miniSearch;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.executeQuery = function (query, searchOptions) {
      var _this = this;
      if (searchOptions === void 0) {
        searchOptions = {};
      }
      if (typeof query !== 'string') {
        var options_1 = _assign(_assign(_assign({}, searchOptions), query), {
          queries: undefined
        });
        var results_1 = query.queries.map(function (subquery) {
          return _this.executeQuery(subquery, options_1);
        });
        return this.combineResults(results_1, options_1.combineWith);
      }
      var _a = this._options,
        tokenize = _a.tokenize,
        processTerm = _a.processTerm,
        globalSearchOptions = _a.searchOptions;
      var options = _assign(_assign({
        tokenize: tokenize,
        processTerm: processTerm
      }, globalSearchOptions), searchOptions);
      var searchTokenize = options.tokenize,
        searchProcessTerm = options.processTerm;
      var terms = searchTokenize(query).flatMap(function (term) {
        return searchProcessTerm(term);
      }).filter(function (term) {
        return !!term;
      });
      var queries = terms.map(termToQuerySpec(options));
      var results = queries.map(function (query) {
        return _this.executeQuerySpec(query, options);
      });
      return this.combineResults(results, options.combineWith);
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.executeQuerySpec = function (query, searchOptions) {
      var e_19, _a, e_20, _b;
      var options = _assign(_assign({}, this._options.searchOptions), searchOptions);
      var boosts = (options.fields || this._options.fields).reduce(function (boosts, field) {
        var _a;
        return _assign(_assign({}, boosts), (_a = {}, _a[field] = getOwnProperty(options.boost, field) || 1, _a));
      }, {});
      var boostDocument = options.boostDocument,
        weights = options.weights,
        maxFuzzy = options.maxFuzzy,
        bm25params = options.bm25;
      var _c = _assign(_assign({}, defaultSearchOptions.weights), weights),
        fuzzyWeight = _c.fuzzy,
        prefixWeight = _c.prefix;
      var data = this._index.get(query.term);
      var results = this.termResults(query.term, query.term, 1, data, boosts, boostDocument, bm25params);
      var prefixMatches;
      var fuzzyMatches;
      if (query.prefix) {
        prefixMatches = this._index.atPrefix(query.term);
      }
      if (query.fuzzy) {
        var fuzzy = query.fuzzy === true ? 0.2 : query.fuzzy;
        var maxDistance = fuzzy < 1 ? Math.min(maxFuzzy, Math.round(query.term.length * fuzzy)) : fuzzy;
        if (maxDistance) fuzzyMatches = this._index.fuzzyGet(query.term, maxDistance);
      }
      if (prefixMatches) {
        try {
          for (var prefixMatches_1 = __values(prefixMatches), prefixMatches_1_1 = prefixMatches_1.next(); !prefixMatches_1_1.done; prefixMatches_1_1 = prefixMatches_1.next()) {
            var _d = __read(prefixMatches_1_1.value, 2),
              term = _d[0],
              data_1 = _d[1];
            var distance = term.length - query.term.length;
            if (!distance) {
              continue;
            } // Skip exact match.
            // Delete the term from fuzzy results (if present) if it is also a
            // prefix result. This entry will always be scored as a prefix result.
            fuzzyMatches === null || fuzzyMatches === void 0 ? void 0 : fuzzyMatches["delete"](term);
            // Weight gradually approaches 0 as distance goes to infinity, with the
            // weight for the hypothetical distance 0 being equal to prefixWeight.
            // The rate of change is much lower than that of fuzzy matches to
            // account for the fact that prefix matches stay more relevant than
            // fuzzy matches for longer distances.
            var weight = prefixWeight * term.length / (term.length + 0.3 * distance);
            this.termResults(query.term, term, weight, data_1, boosts, boostDocument, bm25params, results);
          }
        } catch (e_19_1) {
          e_19 = {
            error: e_19_1
          };
        } finally {
          try {
            if (prefixMatches_1_1 && !prefixMatches_1_1.done && (_a = prefixMatches_1["return"])) _a.call(prefixMatches_1);
          } finally {
            if (e_19) throw e_19.error;
          }
        }
      }
      if (fuzzyMatches) {
        try {
          for (var _e = __values(fuzzyMatches.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
            var term = _f.value;
            var _g = __read(fuzzyMatches.get(term), 2),
              data_2 = _g[0],
              distance = _g[1];
            if (!distance) {
              continue;
            } // Skip exact match.
            // Weight gradually approaches 0 as distance goes to infinity, with the
            // weight for the hypothetical distance 0 being equal to fuzzyWeight.
            var weight = fuzzyWeight * term.length / (term.length + distance);
            this.termResults(query.term, term, weight, data_2, boosts, boostDocument, bm25params, results);
          }
        } catch (e_20_1) {
          e_20 = {
            error: e_20_1
          };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
          } finally {
            if (e_20) throw e_20.error;
          }
        }
      }
      return results;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.combineResults = function (results, combineWith) {
      if (combineWith === void 0) {
        combineWith = OR;
      }
      if (results.length === 0) {
        return new Map();
      }
      var operator = combineWith.toLowerCase();
      return results.reduce(combinators[operator]) || new Map();
    };
    /**
     * Allows serialization of the index to JSON, to possibly store it and later
     * deserialize it with `MiniSearch.loadJSON`.
     *
     * Normally one does not directly call this method, but rather call the
     * standard JavaScript `JSON.stringify()` passing the `MiniSearch` instance,
     * and JavaScript will internally call this method. Upon deserialization, one
     * must pass to `loadJSON` the same options used to create the original
     * instance that was serialized.
     *
     * ### Usage:
     *
     * ```javascript
     * // Serialize the index:
     * let miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * miniSearch.addAll(documents)
     * const json = JSON.stringify(miniSearch)
     *
     * // Later, to deserialize it:
     * miniSearch = MiniSearch.loadJSON(json, { fields: ['title', 'text'] })
     * ```
     *
     * @return A plain-object serializeable representation of the search index.
     */
    MiniSearch.prototype.toJSON = function () {
      var e_21, _a, e_22, _b;
      var index = [];
      try {
        for (var _c = __values(this._index), _d = _c.next(); !_d.done; _d = _c.next()) {
          var _e = __read(_d.value, 2),
            term = _e[0],
            fieldIndex = _e[1];
          var data = {};
          try {
            for (var fieldIndex_2 = (e_22 = void 0, __values(fieldIndex)), fieldIndex_2_1 = fieldIndex_2.next(); !fieldIndex_2_1.done; fieldIndex_2_1 = fieldIndex_2.next()) {
              var _f = __read(fieldIndex_2_1.value, 2),
                fieldId = _f[0],
                freqs = _f[1];
              data[fieldId] = Object.fromEntries(freqs);
            }
          } catch (e_22_1) {
            e_22 = {
              error: e_22_1
            };
          } finally {
            try {
              if (fieldIndex_2_1 && !fieldIndex_2_1.done && (_b = fieldIndex_2["return"])) _b.call(fieldIndex_2);
            } finally {
              if (e_22) throw e_22.error;
            }
          }
          index.push([term, data]);
        }
      } catch (e_21_1) {
        e_21 = {
          error: e_21_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
        } finally {
          if (e_21) throw e_21.error;
        }
      }
      return {
        documentCount: this._documentCount,
        nextId: this._nextId,
        documentIds: Object.fromEntries(this._documentIds),
        fieldIds: this._fieldIds,
        fieldLength: Object.fromEntries(this._fieldLength),
        averageFieldLength: this._avgFieldLength,
        storedFields: Object.fromEntries(this._storedFields),
        dirtCount: this._dirtCount,
        index: index,
        serializationVersion: 2
      };
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.termResults = function (sourceTerm, derivedTerm, termWeight, fieldTermData, fieldBoosts, boostDocumentFn, bm25params, results) {
      var e_23, _a, e_24, _b, _c;
      if (results === void 0) {
        results = new Map();
      }
      if (fieldTermData == null) return results;
      try {
        for (var _d = __values(Object.keys(fieldBoosts)), _e = _d.next(); !_e.done; _e = _d.next()) {
          var field = _e.value;
          var fieldBoost = fieldBoosts[field];
          var fieldId = this._fieldIds[field];
          var fieldTermFreqs = fieldTermData.get(fieldId);
          if (fieldTermFreqs == null) continue;
          var matchingFields = fieldTermFreqs.size;
          var avgFieldLength = this._avgFieldLength[fieldId];
          try {
            for (var _f = (e_24 = void 0, __values(fieldTermFreqs.keys())), _g = _f.next(); !_g.done; _g = _f.next()) {
              var docId = _g.value;
              if (!this._documentIds.has(docId)) {
                this.removeTerm(fieldId, docId, derivedTerm);
                matchingFields -= 1;
                continue;
              }
              var docBoost = boostDocumentFn ? boostDocumentFn(this._documentIds.get(docId), derivedTerm, this._storedFields.get(docId)) : 1;
              if (!docBoost) continue;
              var termFreq = fieldTermFreqs.get(docId);
              var fieldLength = this._fieldLength.get(docId)[fieldId];
              // NOTE: The total number of fields is set to the number of documents
              // `this._documentCount`. It could also make sense to use the number of
              // documents where the current field is non-blank as a normalisation
              // factor. This will make a difference in scoring if the field is rarely
              // present. This is currently not supported, and may require further
              // analysis to see if it is a valid use case.
              var rawScore = calcBM25Score(termFreq, matchingFields, this._documentCount, fieldLength, avgFieldLength, bm25params);
              var weightedScore = termWeight * fieldBoost * docBoost * rawScore;
              var result = results.get(docId);
              if (result) {
                result.score += weightedScore;
                assignUniqueTerm(result.terms, sourceTerm);
                var match = getOwnProperty(result.match, derivedTerm);
                if (match) {
                  match.push(field);
                } else {
                  result.match[derivedTerm] = [field];
                }
              } else {
                results.set(docId, {
                  score: weightedScore,
                  terms: [sourceTerm],
                  match: (_c = {}, _c[derivedTerm] = [field], _c)
                });
              }
            }
          } catch (e_24_1) {
            e_24 = {
              error: e_24_1
            };
          } finally {
            try {
              if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
            } finally {
              if (e_24) throw e_24.error;
            }
          }
        }
      } catch (e_23_1) {
        e_23 = {
          error: e_23_1
        };
      } finally {
        try {
          if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
        } finally {
          if (e_23) throw e_23.error;
        }
      }
      return results;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addTerm = function (fieldId, documentId, term) {
      var indexData = this._index.fetch(term, createMap);
      var fieldIndex = indexData.get(fieldId);
      if (fieldIndex == null) {
        fieldIndex = new Map();
        fieldIndex.set(documentId, 1);
        indexData.set(fieldId, fieldIndex);
      } else {
        var docs = fieldIndex.get(documentId);
        fieldIndex.set(documentId, (docs || 0) + 1);
      }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.removeTerm = function (fieldId, documentId, term) {
      if (!this._index.has(term)) {
        this.warnDocumentChanged(documentId, fieldId, term);
        return;
      }
      var indexData = this._index.fetch(term, createMap);
      var fieldIndex = indexData.get(fieldId);
      if (fieldIndex == null || fieldIndex.get(documentId) == null) {
        this.warnDocumentChanged(documentId, fieldId, term);
      } else if (fieldIndex.get(documentId) <= 1) {
        if (fieldIndex.size <= 1) {
          indexData["delete"](fieldId);
        } else {
          fieldIndex["delete"](documentId);
        }
      } else {
        fieldIndex.set(documentId, fieldIndex.get(documentId) - 1);
      }
      if (this._index.get(term).size === 0) {
        this._index["delete"](term);
      }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.warnDocumentChanged = function (shortDocumentId, fieldId, term) {
      var e_25, _a;
      try {
        for (var _b = __values(Object.keys(this._fieldIds)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var fieldName = _c.value;
          if (this._fieldIds[fieldName] === fieldId) {
            this._options.logger('warn', "MiniSearch: document with ID ".concat(this._documentIds.get(shortDocumentId), " has changed before removal: term \"").concat(term, "\" was not present in field \"").concat(fieldName, "\". Removing a document after it has changed can corrupt the index!"), 'version_conflict');
            return;
          }
        }
      } catch (e_25_1) {
        e_25 = {
          error: e_25_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_25) throw e_25.error;
        }
      }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addDocumentId = function (documentId) {
      var shortDocumentId = this._nextId;
      this._idToShortId.set(documentId, shortDocumentId);
      this._documentIds.set(shortDocumentId, documentId);
      this._documentCount += 1;
      this._nextId += 1;
      return shortDocumentId;
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addFields = function (fields) {
      for (var i = 0; i < fields.length; i++) {
        this._fieldIds[fields[i]] = i;
      }
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.addFieldLength = function (documentId, fieldId, count, length) {
      var fieldLengths = this._fieldLength.get(documentId);
      if (fieldLengths == null) this._fieldLength.set(documentId, fieldLengths = []);
      fieldLengths[fieldId] = length;
      var averageFieldLength = this._avgFieldLength[fieldId] || 0;
      var totalFieldLength = averageFieldLength * count + length;
      this._avgFieldLength[fieldId] = totalFieldLength / (count + 1);
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.removeFieldLength = function (documentId, fieldId, count, length) {
      if (count === 1) {
        this._avgFieldLength[fieldId] = 0;
        return;
      }
      var totalFieldLength = this._avgFieldLength[fieldId] * count - length;
      this._avgFieldLength[fieldId] = totalFieldLength / (count - 1);
    };
    /**
     * @ignore
     */
    MiniSearch.prototype.saveStoredFields = function (documentId, doc) {
      var e_26, _a;
      var _b = this._options,
        storeFields = _b.storeFields,
        extractField = _b.extractField;
      if (storeFields == null || storeFields.length === 0) {
        return;
      }
      var documentFields = this._storedFields.get(documentId);
      if (documentFields == null) this._storedFields.set(documentId, documentFields = {});
      try {
        for (var storeFields_1 = __values(storeFields), storeFields_1_1 = storeFields_1.next(); !storeFields_1_1.done; storeFields_1_1 = storeFields_1.next()) {
          var fieldName = storeFields_1_1.value;
          var fieldValue = extractField(doc, fieldName);
          if (fieldValue !== undefined) documentFields[fieldName] = fieldValue;
        }
      } catch (e_26_1) {
        e_26 = {
          error: e_26_1
        };
      } finally {
        try {
          if (storeFields_1_1 && !storeFields_1_1.done && (_a = storeFields_1["return"])) _a.call(storeFields_1);
        } finally {
          if (e_26) throw e_26.error;
        }
      }
    };
    return MiniSearch;
  }();
  var getOwnProperty = function getOwnProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property) ? object[property] : undefined;
  };
  var combinators = (_a = {}, _a[OR] = function (a, b) {
    var e_27, _a;
    try {
      for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var docId = _c.value;
        var existing = a.get(docId);
        if (existing == null) {
          a.set(docId, b.get(docId));
        } else {
          var _d = b.get(docId),
            score = _d.score,
            terms = _d.terms,
            match = _d.match;
          existing.score = existing.score + score;
          existing.match = Object.assign(existing.match, match);
          assignUniqueTerms(existing.terms, terms);
        }
      }
    } catch (e_27_1) {
      e_27 = {
        error: e_27_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_27) throw e_27.error;
      }
    }
    return a;
  }, _a[AND] = function (a, b) {
    var e_28, _a;
    var combined = new Map();
    try {
      for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var docId = _c.value;
        var existing = a.get(docId);
        if (existing == null) continue;
        var _d = b.get(docId),
          score = _d.score,
          terms = _d.terms,
          match = _d.match;
        assignUniqueTerms(existing.terms, terms);
        combined.set(docId, {
          score: existing.score + score,
          terms: existing.terms,
          match: Object.assign(existing.match, match)
        });
      }
    } catch (e_28_1) {
      e_28 = {
        error: e_28_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_28) throw e_28.error;
      }
    }
    return combined;
  }, _a[AND_NOT] = function (a, b) {
    var e_29, _a;
    try {
      for (var _b = __values(b.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var docId = _c.value;
        a["delete"](docId);
      }
    } catch (e_29_1) {
      e_29 = {
        error: e_29_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_29) throw e_29.error;
      }
    }
    return a;
  }, _a);
  var defaultBM25params = {
    k: 1.2,
    b: 0.7,
    d: 0.5
  };
  var calcBM25Score = function calcBM25Score(termFreq, matchingCount, totalCount, fieldLength, avgFieldLength, bm25params) {
    var k = bm25params.k,
      b = bm25params.b,
      d = bm25params.d;
    var invDocFreq = Math.log(1 + (totalCount - matchingCount + 0.5) / (matchingCount + 0.5));
    return invDocFreq * (d + termFreq * (k + 1) / (termFreq + k * (1 - b + b * fieldLength / avgFieldLength)));
  };
  var termToQuerySpec = function termToQuerySpec(options) {
    return function (term, i, terms) {
      var fuzzy = typeof options.fuzzy === 'function' ? options.fuzzy(term, i, terms) : options.fuzzy || false;
      var prefix = typeof options.prefix === 'function' ? options.prefix(term, i, terms) : options.prefix === true;
      return {
        term: term,
        fuzzy: fuzzy,
        prefix: prefix
      };
    };
  };
  var defaultOptions$1 = {
    idField: 'id',
    extractField: function extractField(document, fieldName) {
      return document[fieldName];
    },
    tokenize: function tokenize(text, fieldName) {
      return text.split(SPACE_OR_PUNCTUATION);
    },
    processTerm: function processTerm(term, fieldName) {
      return term.toLowerCase();
    },
    fields: undefined,
    searchOptions: undefined,
    storeFields: [],
    logger: function logger(level, message, code) {
      return console != null && console.warn != null && console[level](message);
    },
    autoVacuum: true
  };
  var defaultSearchOptions = {
    combineWith: OR,
    prefix: false,
    fuzzy: false,
    maxFuzzy: 6,
    boost: {},
    weights: {
      fuzzy: 0.45,
      prefix: 0.375
    },
    bm25: defaultBM25params
  };
  var defaultAutoSuggestOptions = {
    combineWith: AND,
    prefix: function prefix(term, i, terms) {
      return i === terms.length - 1;
    }
  };
  var defaultVacuumOptions = {
    batchSize: 1000,
    batchWait: 10
  };
  var defaultVacuumConditions = {
    minDirtFactor: 0.1,
    minDirtCount: 20
  };
  var defaultAutoVacuumOptions = _assign(_assign({}, defaultVacuumOptions), defaultVacuumConditions);
  var assignUniqueTerm = function assignUniqueTerm(target, term) {
    // Avoid adding duplicate terms.
    if (!target.includes(term)) target.push(term);
  };
  var assignUniqueTerms = function assignUniqueTerms(target, source) {
    var e_30, _a;
    try {
      for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
        var term = source_1_1.value;
        // Avoid adding duplicate terms.
        if (!target.includes(term)) target.push(term);
      }
    } catch (e_30_1) {
      e_30 = {
        error: e_30_1
      };
    } finally {
      try {
        if (source_1_1 && !source_1_1.done && (_a = source_1["return"])) _a.call(source_1);
      } finally {
        if (e_30) throw e_30.error;
      }
    }
  };
  var byScore = function byScore(_a, _b) {
    var a = _a.score;
    var b = _b.score;
    return b - a;
  };
  var createMap = function createMap() {
    return new Map();
  };
  var objectToNumericMap = function objectToNumericMap(object) {
    var e_31, _a;
    var map = new Map();
    try {
      for (var _b = __values(Object.keys(object)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var key = _c.value;
        map.set(parseInt(key, 10), object[key]);
      }
    } catch (e_31_1) {
      e_31 = {
        error: e_31_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_31) throw e_31.error;
      }
    }
    return map;
  };
  // This regular expression matches any Unicode space or punctuation character
  // Adapted from https://unicode.org/cldr/utility/list-unicodeset.jsp?a=%5Cp%7BZ%7D%5Cp%7BP%7D&abb=on&c=on&esc=on
  var SPACE_OR_PUNCTUATION = /[\n\r -#%-\*,-\/:;\?@\[-\]_\{\}\xA0\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/;

  (function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define("webextension-polyfill", ["module"], factory);
    } else if (typeof exports !== "undefined") {
      factory(module);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod);
      global.browser = mod.exports;
    }
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : null, function (module) {

    var _globalThis$chrome;
    if (!((_globalThis$chrome = globalThis.chrome) !== null && _globalThis$chrome !== void 0 && (_globalThis$chrome = _globalThis$chrome.runtime) !== null && _globalThis$chrome !== void 0 && _globalThis$chrome.id)) {
      throw new Error("This script should only be loaded in a browser extension.");
    }
    if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
      var CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received."; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
      // optimization for Firefox. Since Spidermonkey does not fully parse the
      // contents of a function until the first time it's called, and since it will
      // never actually need to be called, this allows the polyfill to be included
      // in Firefox nearly for free.

      var wrapAPIs = function wrapAPIs(extensionAPIs) {
        // NOTE: apiMetadata is associated to the content of the api-metadata.json file
        // at build time by replacing the following "include" with the content of the
        // JSON file.
        var apiMetadata = {
          "alarms": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "clearAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "bookmarks": {
            "create": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getChildren": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getRecent": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getSubTree": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTree": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "move": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeTree": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "browserAction": {
            "disable": {
              "minArgs": 0,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "enable": {
              "minArgs": 0,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "getBadgeBackgroundColor": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getBadgeText": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getPopup": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTitle": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "openPopup": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "setBadgeBackgroundColor": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setBadgeText": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setIcon": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "setPopup": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setTitle": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "browsingData": {
            "remove": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "removeCache": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeCookies": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeDownloads": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeFormData": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeHistory": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeLocalStorage": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removePasswords": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removePluginData": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "settings": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "commands": {
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "contextMenus": {
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "cookies": {
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAllCookieStores": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "devtools": {
            "inspectedWindow": {
              "eval": {
                "minArgs": 1,
                "maxArgs": 2,
                "singleCallbackArg": false
              }
            },
            "panels": {
              "create": {
                "minArgs": 3,
                "maxArgs": 3,
                "singleCallbackArg": true
              },
              "elements": {
                "createSidebarPane": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              }
            }
          },
          "downloads": {
            "cancel": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "download": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "erase": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getFileIcon": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "open": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "pause": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeFile": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "resume": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "show": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "extension": {
            "isAllowedFileSchemeAccess": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "isAllowedIncognitoAccess": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "history": {
            "addUrl": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "deleteAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "deleteRange": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "deleteUrl": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getVisits": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "i18n": {
            "detectLanguage": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAcceptLanguages": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "identity": {
            "launchWebAuthFlow": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "idle": {
            "queryState": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "management": {
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getSelf": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "setEnabled": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "uninstallSelf": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "notifications": {
            "clear": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "create": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getPermissionLevel": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "pageAction": {
            "getPopup": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTitle": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "hide": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setIcon": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "setPopup": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setTitle": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "show": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "permissions": {
            "contains": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "request": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "runtime": {
            "getBackgroundPage": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getPlatformInfo": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "openOptionsPage": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "requestUpdateCheck": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "sendMessage": {
              "minArgs": 1,
              "maxArgs": 3
            },
            "sendNativeMessage": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "setUninstallURL": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "sessions": {
            "getDevices": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getRecentlyClosed": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "restore": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "storage": {
            "local": {
              "clear": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "set": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "managed": {
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              }
            },
            "sync": {
              "clear": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "set": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          },
          "tabs": {
            "captureVisibleTab": {
              "minArgs": 0,
              "maxArgs": 2
            },
            "create": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "detectLanguage": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "discard": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "duplicate": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "executeScript": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getCurrent": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getZoom": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getZoomSettings": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "goBack": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "goForward": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "highlight": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "insertCSS": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "move": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "query": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "reload": {
              "minArgs": 0,
              "maxArgs": 2
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeCSS": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "sendMessage": {
              "minArgs": 2,
              "maxArgs": 3
            },
            "setZoom": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "setZoomSettings": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "update": {
              "minArgs": 1,
              "maxArgs": 2
            }
          },
          "topSites": {
            "get": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "webNavigation": {
            "getAllFrames": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getFrame": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "webRequest": {
            "handlerBehaviorChanged": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "windows": {
            "create": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getCurrent": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getLastFocused": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          }
        };
        if (Object.keys(apiMetadata).length === 0) {
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        }
        /**
         * A WeakMap subclass which creates and stores a value for any key which does
         * not exist when accessed, but behaves exactly as an ordinary WeakMap
         * otherwise.
         *
         * @param {function} createItem
         *        A function which will be called in order to create the value for any
         *        key which does not exist, the first time it is accessed. The
         *        function receives, as its only argument, the key being created.
         */
        var DefaultWeakMap = /*#__PURE__*/function (_WeakMap) {
          _inherits(DefaultWeakMap, _WeakMap);
          var _super = _createSuper(DefaultWeakMap);
          function DefaultWeakMap(createItem) {
            var _this;
            var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            _classCallCheck(this, DefaultWeakMap);
            _this = _super.call(this, items);
            _this.createItem = createItem;
            return _this;
          }
          _createClass(DefaultWeakMap, [{
            key: "get",
            value: function get(key) {
              if (!this.has(key)) {
                this.set(key, this.createItem(key));
              }
              return _get(_getPrototypeOf(DefaultWeakMap.prototype), "get", this).call(this, key);
            }
          }]);
          return DefaultWeakMap;
        }( /*#__PURE__*/_wrapNativeSuper(WeakMap));
        /**
         * Returns true if the given object is an object with a `then` method, and can
         * therefore be assumed to behave as a Promise.
         *
         * @param {*} value The value to test.
         * @returns {boolean} True if the value is thenable.
         */
        var isThenable = function isThenable(value) {
          return value && _typeof(value) === "object" && typeof value.then === "function";
        };
        /**
         * Creates and returns a function which, when called, will resolve or reject
         * the given promise based on how it is called:
         *
         * - If, when called, `chrome.runtime.lastError` contains a non-null object,
         *   the promise is rejected with that value.
         * - If the function is called with exactly one argument, the promise is
         *   resolved to that value.
         * - Otherwise, the promise is resolved to an array containing all of the
         *   function's arguments.
         *
         * @param {object} promise
         *        An object containing the resolution and rejection functions of a
         *        promise.
         * @param {function} promise.resolve
         *        The promise's resolution function.
         * @param {function} promise.reject
         *        The promise's rejection function.
         * @param {object} metadata
         *        Metadata about the wrapped method which has created the callback.
         * @param {boolean} metadata.singleCallbackArg
         *        Whether or not the promise is resolved with only the first
         *        argument of the callback, alternatively an array of all the
         *        callback arguments is resolved. By default, if the callback
         *        function is invoked with only a single argument, that will be
         *        resolved to the promise, while all arguments will be resolved as
         *        an array if multiple are given.
         *
         * @returns {function}
         *        The generated callback function.
         */

        var makeCallback = function makeCallback(promise, metadata) {
          return function () {
            for (var _len = arguments.length, callbackArgs = new Array(_len), _key = 0; _key < _len; _key++) {
              callbackArgs[_key] = arguments[_key];
            }
            if (extensionAPIs.runtime.lastError) {
              promise.reject(new Error(extensionAPIs.runtime.lastError.message));
            } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
              promise.resolve(callbackArgs[0]);
            } else {
              promise.resolve(callbackArgs);
            }
          };
        };
        var pluralizeArguments = function pluralizeArguments(numArgs) {
          return numArgs == 1 ? "argument" : "arguments";
        };
        /**
         * Creates a wrapper function for a method with the given name and metadata.
         *
         * @param {string} name
         *        The name of the method which is being wrapped.
         * @param {object} metadata
         *        Metadata about the method being wrapped.
         * @param {integer} metadata.minArgs
         *        The minimum number of arguments which must be passed to the
         *        function. If called with fewer than this number of arguments, the
         *        wrapper will raise an exception.
         * @param {integer} metadata.maxArgs
         *        The maximum number of arguments which may be passed to the
         *        function. If called with more than this number of arguments, the
         *        wrapper will raise an exception.
         * @param {boolean} metadata.singleCallbackArg
         *        Whether or not the promise is resolved with only the first
         *        argument of the callback, alternatively an array of all the
         *        callback arguments is resolved. By default, if the callback
         *        function is invoked with only a single argument, that will be
         *        resolved to the promise, while all arguments will be resolved as
         *        an array if multiple are given.
         *
         * @returns {function(object, ...*)}
         *       The generated wrapper function.
         */

        var wrapAsyncFunction = function wrapAsyncFunction(name, metadata) {
          return function asyncFunctionWrapper(target) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            if (args.length < metadata.minArgs) {
              throw new Error("Expected at least ".concat(metadata.minArgs, " ").concat(pluralizeArguments(metadata.minArgs), " for ").concat(name, "(), got ").concat(args.length));
            }
            if (args.length > metadata.maxArgs) {
              throw new Error("Expected at most ".concat(metadata.maxArgs, " ").concat(pluralizeArguments(metadata.maxArgs), " for ").concat(name, "(), got ").concat(args.length));
            }
            return new Promise(function (resolve, reject) {
              if (metadata.fallbackToNoCallback) {
                // This API method has currently no callback on Chrome, but it return a promise on Firefox,
                // and so the polyfill will try to call it with a callback first, and it will fallback
                // to not passing the callback if the first call fails.
                try {
                  target[name].apply(target, args.concat([makeCallback({
                    resolve: resolve,
                    reject: reject
                  }, metadata)]));
                } catch (cbError) {
                  console.warn("".concat(name, " API method doesn't seem to support the callback parameter, ") + "falling back to call it without a callback: ", cbError);
                  target[name].apply(target, args); // Update the API method metadata, so that the next API calls will not try to
                  // use the unsupported callback anymore.

                  metadata.fallbackToNoCallback = false;
                  metadata.noCallback = true;
                  resolve();
                }
              } else if (metadata.noCallback) {
                target[name].apply(target, args);
                resolve();
              } else {
                target[name].apply(target, args.concat([makeCallback({
                  resolve: resolve,
                  reject: reject
                }, metadata)]));
              }
            });
          };
        };
        /**
         * Wraps an existing method of the target object, so that calls to it are
         * intercepted by the given wrapper function. The wrapper function receives,
         * as its first argument, the original `target` object, followed by each of
         * the arguments passed to the original method.
         *
         * @param {object} target
         *        The original target object that the wrapped method belongs to.
         * @param {function} method
         *        The method being wrapped. This is used as the target of the Proxy
         *        object which is created to wrap the method.
         * @param {function} wrapper
         *        The wrapper function which is called in place of a direct invocation
         *        of the wrapped method.
         *
         * @returns {Proxy<function>}
         *        A Proxy object for the given method, which invokes the given wrapper
         *        method in its place.
         */

        var wrapMethod = function wrapMethod(target, method, wrapper) {
          return new Proxy(method, {
            apply: function apply(targetMethod, thisObj, args) {
              return wrapper.call.apply(wrapper, [thisObj, target].concat(_toConsumableArray(args)));
            }
          });
        };
        var hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
        /**
         * Wraps an object in a Proxy which intercepts and wraps certain methods
         * based on the given `wrappers` and `metadata` objects.
         *
         * @param {object} target
         *        The target object to wrap.
         *
         * @param {object} [wrappers = {}]
         *        An object tree containing wrapper functions for special cases. Any
         *        function present in this object tree is called in place of the
         *        method in the same location in the `target` object tree. These
         *        wrapper methods are invoked as described in {@see wrapMethod}.
         *
         * @param {object} [metadata = {}]
         *        An object tree containing metadata used to automatically generate
         *        Promise-based wrapper functions for asynchronous. Any function in
         *        the `target` object tree which has a corresponding metadata object
         *        in the same location in the `metadata` tree is replaced with an
         *        automatically-generated wrapper function, as described in
         *        {@see wrapAsyncFunction}
         *
         * @returns {Proxy<object>}
         */

        var wrapObject = function wrapObject(target) {
          var wrappers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var metadata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var cache = Object.create(null);
          var handlers = {
            has: function has(proxyTarget, prop) {
              return prop in target || prop in cache;
            },
            get: function get(proxyTarget, prop, receiver) {
              if (prop in cache) {
                return cache[prop];
              }
              if (!(prop in target)) {
                return undefined;
              }
              var value = target[prop];
              if (typeof value === "function") {
                // This is a method on the underlying object. Check if we need to do
                // any wrapping.
                if (typeof wrappers[prop] === "function") {
                  // We have a special-case wrapper for this method.
                  value = wrapMethod(target, target[prop], wrappers[prop]);
                } else if (hasOwnProperty(metadata, prop)) {
                  // This is an async method that we have metadata for. Create a
                  // Promise wrapper for it.
                  var wrapper = wrapAsyncFunction(prop, metadata[prop]);
                  value = wrapMethod(target, target[prop], wrapper);
                } else {
                  // This is a method that we don't know or care about. Return the
                  // original method, bound to the underlying object.
                  value = value.bind(target);
                }
              } else if (_typeof(value) === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                // This is an object that we need to do some wrapping for the children
                // of. Create a sub-object wrapper for it with the appropriate child
                // metadata.
                value = wrapObject(value, wrappers[prop], metadata[prop]);
              } else if (hasOwnProperty(metadata, "*")) {
                // Wrap all properties in * namespace.
                value = wrapObject(value, wrappers[prop], metadata["*"]);
              } else {
                // We don't need to do any wrapping for this property,
                // so just forward all access to the underlying object.
                Object.defineProperty(cache, prop, {
                  configurable: true,
                  enumerable: true,
                  get: function get() {
                    return target[prop];
                  },
                  set: function set(value) {
                    target[prop] = value;
                  }
                });
                return value;
              }
              cache[prop] = value;
              return value;
            },
            set: function set(proxyTarget, prop, value, receiver) {
              if (prop in cache) {
                cache[prop] = value;
              } else {
                target[prop] = value;
              }
              return true;
            },
            defineProperty: function defineProperty(proxyTarget, prop, desc) {
              return Reflect.defineProperty(cache, prop, desc);
            },
            deleteProperty: function deleteProperty(proxyTarget, prop) {
              return Reflect.deleteProperty(cache, prop);
            }
          }; // Per contract of the Proxy API, the "get" proxy handler must return the
          // original value of the target if that value is declared read-only and
          // non-configurable. For this reason, we create an object with the
          // prototype set to `target` instead of using `target` directly.
          // Otherwise we cannot return a custom object for APIs that
          // are declared read-only and non-configurable, such as `chrome.devtools`.
          //
          // The proxy handlers themselves will still use the original `target`
          // instead of the `proxyTarget`, so that the methods and properties are
          // dereferenced via the original targets.

          var proxyTarget = Object.create(target);
          return new Proxy(proxyTarget, handlers);
        };
        /**
         * Creates a set of wrapper functions for an event object, which handles
         * wrapping of listener functions that those messages are passed.
         *
         * A single wrapper is created for each listener function, and stored in a
         * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
         * retrieve the original wrapper, so that  attempts to remove a
         * previously-added listener work as expected.
         *
         * @param {DefaultWeakMap<function, function>} wrapperMap
         *        A DefaultWeakMap object which will create the appropriate wrapper
         *        for a given listener function when one does not exist, and retrieve
         *        an existing one when it does.
         *
         * @returns {object}
         */

        var wrapEvent = function wrapEvent(wrapperMap) {
          return {
            addListener: function addListener(target, listener) {
              for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
              }
              target.addListener.apply(target, [wrapperMap.get(listener)].concat(args));
            },
            hasListener: function hasListener(target, listener) {
              return target.hasListener(wrapperMap.get(listener));
            },
            removeListener: function removeListener(target, listener) {
              target.removeListener(wrapperMap.get(listener));
            }
          };
        };
        var onRequestFinishedWrappers = new DefaultWeakMap(function (listener) {
          if (typeof listener !== "function") {
            return listener;
          }
          /**
           * Wraps an onRequestFinished listener function so that it will return a
           * `getContent()` property which returns a `Promise` rather than using a
           * callback API.
           *
           * @param {object} req
           *        The HAR entry object representing the network request.
           */

          return function onRequestFinished(req) {
            var wrappedReq = wrapObject(req, {}
            /* wrappers */, {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            });
            listener(wrappedReq);
          };
        });
        var onMessageWrappers = new DefaultWeakMap(function (listener) {
          if (typeof listener !== "function") {
            return listener;
          }
          /**
           * Wraps a message listener function so that it may send responses based on
           * its return value, rather than by returning a sentinel value and calling a
           * callback. If the listener function returns a Promise, the response is
           * sent when the promise either resolves or rejects.
           *
           * @param {*} message
           *        The message sent by the other end of the channel.
           * @param {object} sender
           *        Details about the sender of the message.
           * @param {function(*)} sendResponse
           *        A callback which, when called with an arbitrary argument, sends
           *        that value as a response.
           * @returns {boolean}
           *        True if the wrapped listener returned a Promise, which will later
           *        yield a response. False otherwise.
           */

          return function onMessage(message, sender, sendResponse) {
            var didCallSendResponse = false;
            var wrappedSendResponse;
            var sendResponsePromise = new Promise(function (resolve) {
              wrappedSendResponse = function wrappedSendResponse(response) {
                didCallSendResponse = true;
                resolve(response);
              };
            });
            var result;
            try {
              result = listener(message, sender, wrappedSendResponse);
            } catch (err) {
              result = Promise.reject(err);
            }
            var isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
            // wrappedSendResponse synchronously, we can exit earlier
            // because there will be no response sent from this listener.

            if (result !== true && !isResultThenable && !didCallSendResponse) {
              return false;
            } // A small helper to send the message if the promise resolves
            // and an error if the promise rejects (a wrapped sendMessage has
            // to translate the message into a resolved promise or a rejected
            // promise).

            var sendPromisedResult = function sendPromisedResult(promise) {
              promise.then(function (msg) {
                // send the message value.
                sendResponse(msg);
              }, function (error) {
                // Send a JSON representation of the error if the rejected value
                // is an instance of error, or the object itself otherwise.
                var message;
                if (error && (error instanceof Error || typeof error.message === "string")) {
                  message = error.message;
                } else {
                  message = "An unexpected error occurred";
                }
                sendResponse({
                  __mozWebExtensionPolyfillReject__: true,
                  message: message
                });
              })["catch"](function (err) {
                // Print an error on the console if unable to send the response.
                console.error("Failed to send onMessage rejected reply", err);
              });
            }; // If the listener returned a Promise, send the resolved value as a
            // result, otherwise wait the promise related to the wrappedSendResponse
            // callback to resolve and send it as a response.

            if (isResultThenable) {
              sendPromisedResult(result);
            } else {
              sendPromisedResult(sendResponsePromise);
            } // Let Chrome know that the listener is replying.

            return true;
          };
        });
        var wrappedSendMessageCallback = function wrappedSendMessageCallback(_ref, reply) {
          var reject = _ref.reject,
            resolve = _ref.resolve;
          if (extensionAPIs.runtime.lastError) {
            // Detect when none of the listeners replied to the sendMessage call and resolve
            // the promise to undefined as in Firefox.
            // See https://github.com/mozilla/webextension-polyfill/issues/130
            if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
              resolve();
            } else {
              reject(new Error(extensionAPIs.runtime.lastError.message));
            }
          } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
            // Convert back the JSON representation of the error into
            // an Error instance.
            reject(new Error(reply.message));
          } else {
            resolve(reply);
          }
        };
        var wrappedSendMessage = function wrappedSendMessage(name, metadata, apiNamespaceObj) {
          for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
            args[_key4 - 3] = arguments[_key4];
          }
          if (args.length < metadata.minArgs) {
            throw new Error("Expected at least ".concat(metadata.minArgs, " ").concat(pluralizeArguments(metadata.minArgs), " for ").concat(name, "(), got ").concat(args.length));
          }
          if (args.length > metadata.maxArgs) {
            throw new Error("Expected at most ".concat(metadata.maxArgs, " ").concat(pluralizeArguments(metadata.maxArgs), " for ").concat(name, "(), got ").concat(args.length));
          }
          return new Promise(function (resolve, reject) {
            var wrappedCb = wrappedSendMessageCallback.bind(null, {
              resolve: resolve,
              reject: reject
            });
            args.push(wrappedCb);
            apiNamespaceObj.sendMessage.apply(apiNamespaceObj, args);
          });
        };
        var staticWrappers = {
          devtools: {
            network: {
              onRequestFinished: wrapEvent(onRequestFinishedWrappers)
            }
          },
          runtime: {
            onMessage: wrapEvent(onMessageWrappers),
            onMessageExternal: wrapEvent(onMessageWrappers),
            sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
              minArgs: 1,
              maxArgs: 3
            })
          },
          tabs: {
            sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
              minArgs: 2,
              maxArgs: 3
            })
          }
        };
        var settingMetadata = {
          clear: {
            minArgs: 1,
            maxArgs: 1
          },
          get: {
            minArgs: 1,
            maxArgs: 1
          },
          set: {
            minArgs: 1,
            maxArgs: 1
          }
        };
        apiMetadata.privacy = {
          network: {
            "*": settingMetadata
          },
          services: {
            "*": settingMetadata
          },
          websites: {
            "*": settingMetadata
          }
        };
        return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
      }; // The build process adds a UMD wrapper around this file, which makes the
      // `module` variable available.

      module.exports = wrapAPIs(chrome);
    } else {
      module.exports = globalThis.browser;
    }
  });

  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param argument - The value to convert
   *
   * @returns The parsed date in the local time zone
   *
   * @example
   * // Clone the date:
   * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert the timestamp to date:
   * const result = toDate(1392098430000)
   * //=> Tue Feb 11 2014 11:30:30
   */
  function toDate(argument) {
    var argStr = Object.prototype.toString.call(argument);

    // Clone the date
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new argument.constructor(+argument);
    } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
      // TODO: Can we get rid of as?
      return new Date(argument);
    } else {
      // TODO: Can we get rid of as?
      return new Date(NaN);
    }
  }

  /**
   * @name constructFrom
   * @category Generic Helpers
   * @summary Constructs a date using the reference date and the value
   *
   * @description
   * The function constructs a new date using the constructor from the reference
   * date and the given value. It helps to build generic functions that accept
   * date extensions.
   *
   * It defaults to `Date` if the passed reference date is a number or a string.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param date - The reference date to take constructor from
   * @param value - The value to create the date
   *
   * @returns Date initialized using the given date and value
   *
   * @example
   * import { constructFrom } from 'date-fns'
   *
   * // A function that clones a date preserving the original type
   * function cloneDate<DateType extends Date(date: DateType): DateType {
   *   return constructFrom(
   *     date, // Use contrustor from the given date
   *     date.getTime() // Use the date value to create a new date
   *   )
   * }
   */
  function constructFrom(date, value) {
    if (date instanceof Date) {
      return new date.constructor(value);
    } else {
      return new Date(value);
    }
  }

  /**
   * @module constants
   * @summary Useful constants
   * @description
   * Collection of useful date constants.
   *
   * The constants could be imported from `date-fns/constants`:
   *
   * ```ts
   * import { maxTime, minTime } from "./constants/date-fns/constants";
   *
   * function isAllowedTime(time) {
   *   return time <= maxTime && time >= minTime;
   * }
   * ```
   */


  /**
   * @constant
   * @name minutesInMonth
   * @summary Minutes in 1 month.
   */
  var minutesInMonth = 43200;

  /**
   * @constant
   * @name minutesInDay
   * @summary Minutes in 1 day.
   */
  var minutesInDay = 1440;

  var defaultOptions = {};
  function getDefaultOptions() {
    return defaultOptions;
  }

  /**
   * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
   * They usually appear for dates that denote time before the timezones were introduced
   * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
   * and GMT+01:00:00 after that date)
   *
   * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
   * which would lead to incorrect calculations.
   *
   * This function returns the timezone offset in milliseconds that takes seconds in account.
   */
  function getTimezoneOffsetInMilliseconds(date) {
    var _date = toDate(date);
    var utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
  }

  /**
   * @name compareAsc
   * @category Common Helpers
   * @summary Compare the two dates and return -1, 0 or 1.
   *
   * @description
   * Compare the two dates and return 1 if the first date is after the second,
   * -1 if the first date is before the second or 0 if dates are equal.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param dateLeft - The first date to compare
   * @param dateRight - The second date to compare
   *
   * @returns The result of the comparison
   *
   * @example
   * // Compare 11 February 1987 and 10 July 1989:
   * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
   * //=> -1
   *
   * @example
   * // Sort the array of dates:
   * const result = [
   *   new Date(1995, 6, 2),
   *   new Date(1987, 1, 11),
   *   new Date(1989, 6, 10)
   * ].sort(compareAsc)
   * //=> [
   * //   Wed Feb 11 1987 00:00:00,
   * //   Mon Jul 10 1989 00:00:00,
   * //   Sun Jul 02 1995 00:00:00
   * // ]
   */
  function compareAsc(dateLeft, dateRight) {
    var _dateLeft = toDate(dateLeft);
    var _dateRight = toDate(dateRight);
    var diff = _dateLeft.getTime() - _dateRight.getTime();
    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1;
      // Return 0 if diff is 0; return NaN if diff is NaN
    } else {
      return diff;
    }
  }

  /**
   * @name constructNow
   * @category Generic Helpers
   * @summary Constructs a new current date using the passed value constructor.
   * @pure false
   *
   * @description
   * The function constructs a new current date using the constructor from
   * the reference date. It helps to build generic functions that accept date
   * extensions and use the current date.
   *
   * It defaults to `Date` if the passed reference date is a number or a string.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param date - The reference date to take constructor from
   *
   * @returns Current date initialized using the given date constructor
   *
   * @example
   * import { constructNow, isSameDay } from 'date-fns'
   *
   * function isToday<DateType extends Date>(
   *   date: DateType | number | string,
   * ): boolean {
   *   // If we were to use `new Date()` directly, the function would  behave
   *   // differently in different timezones and return false for the same date.
   *   return isSameDay(date, constructNow(date));
   * }
   */
  function constructNow(date) {
    return constructFrom(date, Date.now());
  }

  /**
   * @name differenceInCalendarMonths
   * @category Month Helpers
   * @summary Get the number of calendar months between the given dates.
   *
   * @description
   * Get the number of calendar months between the given dates.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param dateLeft - The later date
   * @param dateRight - The earlier date
   *
   * @returns The number of calendar months
   *
   * @example
   * // How many calendar months are between 31 January 2014 and 1 September 2014?
   * const result = differenceInCalendarMonths(
   *   new Date(2014, 8, 1),
   *   new Date(2014, 0, 31)
   * )
   * //=> 8
   */
  function differenceInCalendarMonths(dateLeft, dateRight) {
    var _dateLeft = toDate(dateLeft);
    var _dateRight = toDate(dateRight);
    var yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
    var monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
  }

  function getRoundingMethod(method) {
    return function (number) {
      var round = method ? Math[method] : Math.trunc;
      var result = round(number);
      // Prevent negative zero
      return result === 0 ? 0 : result;
    };
  }

  /**
   * @name differenceInMilliseconds
   * @category Millisecond Helpers
   * @summary Get the number of milliseconds between the given dates.
   *
   * @description
   * Get the number of milliseconds between the given dates.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param dateLeft - The later date
   * @param dateRight - The earlier date
   *
   * @returns The number of milliseconds
   *
   * @example
   * // How many milliseconds are between
   * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
   * const result = differenceInMilliseconds(
   *   new Date(2014, 6, 2, 12, 30, 21, 700),
   *   new Date(2014, 6, 2, 12, 30, 20, 600)
   * )
   * //=> 1100
   */
  function differenceInMilliseconds(dateLeft, dateRight) {
    return +toDate(dateLeft) - +toDate(dateRight);
  }

  /**
   * @name endOfDay
   * @category Day Helpers
   * @summary Return the end of a day for the given date.
   *
   * @description
   * Return the end of a day for the given date.
   * The result will be in the local timezone.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param date - The original date
   *
   * @returns The end of a day
   *
   * @example
   * // The end of a day for 2 September 2014 11:55:00:
   * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 02 2014 23:59:59.999
   */
  function endOfDay(date) {
    var _date = toDate(date);
    _date.setHours(23, 59, 59, 999);
    return _date;
  }

  /**
   * @name endOfMonth
   * @category Month Helpers
   * @summary Return the end of a month for the given date.
   *
   * @description
   * Return the end of a month for the given date.
   * The result will be in the local timezone.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param date - The original date
   *
   * @returns The end of a month
   *
   * @example
   * // The end of a month for 2 September 2014 11:55:00:
   * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 30 2014 23:59:59.999
   */
  function endOfMonth(date) {
    var _date = toDate(date);
    var month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
  }

  /**
   * @name isLastDayOfMonth
   * @category Month Helpers
   * @summary Is the given date the last day of a month?
   *
   * @description
   * Is the given date the last day of a month?
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param date - The date to check

   * @returns The date is the last day of a month
   *
   * @example
   * // Is 28 February 2014 the last day of a month?
   * const result = isLastDayOfMonth(new Date(2014, 1, 28))
   * //=> true
   */
  function isLastDayOfMonth(date) {
    var _date = toDate(date);
    return +endOfDay(_date) === +endOfMonth(_date);
  }

  /**
   * @name differenceInMonths
   * @category Month Helpers
   * @summary Get the number of full months between the given dates.
   *
   * @description
   * Get the number of full months between the given dates using trunc as a default rounding method.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param dateLeft - The later date
   * @param dateRight - The earlier date
   *
   * @returns The number of full months
   *
   * @example
   * // How many full months are between 31 January 2014 and 1 September 2014?
   * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
   * //=> 7
   */
  function differenceInMonths(dateLeft, dateRight) {
    var _dateLeft = toDate(dateLeft);
    var _dateRight = toDate(dateRight);
    var sign = compareAsc(_dateLeft, _dateRight);
    var difference = Math.abs(differenceInCalendarMonths(_dateLeft, _dateRight));
    var result;

    // Check for the difference of less than month
    if (difference < 1) {
      result = 0;
    } else {
      if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {
        // This will check if the date is end of Feb and assign a higher end of month date
        // to compare it with Jan
        _dateLeft.setDate(30);
      }
      _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);

      // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
      // If so, result must be decreased by 1 in absolute value
      var isLastMonthNotFull = compareAsc(_dateLeft, _dateRight) === -sign;

      // Check for cases of one full calendar month
      if (isLastDayOfMonth(toDate(dateLeft)) && difference === 1 && compareAsc(dateLeft, _dateRight) === 1) {
        isLastMonthNotFull = false;
      }
      result = sign * (difference - Number(isLastMonthNotFull));
    }

    // Prevent negative zero
    return result === 0 ? 0 : result;
  }

  /**
   * The {@link differenceInSeconds} function options.
   */

  /**
   * @name differenceInSeconds
   * @category Second Helpers
   * @summary Get the number of seconds between the given dates.
   *
   * @description
   * Get the number of seconds between the given dates.
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param dateLeft - The later date
   * @param dateRight - The earlier date
   * @param options - An object with options.
   *
   * @returns The number of seconds
   *
   * @example
   * // How many seconds are between
   * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
   * const result = differenceInSeconds(
   *   new Date(2014, 6, 2, 12, 30, 20, 0),
   *   new Date(2014, 6, 2, 12, 30, 7, 999)
   * )
   * //=> 12
   */
  function differenceInSeconds(dateLeft, dateRight, options) {
    var diff = differenceInMilliseconds(dateLeft, dateRight) / 1000;
    return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
  }

  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };
  var formatDistance$1 = function formatDistance(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  };

  function buildFormatLongFn(args) {
    return function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // TODO: Remove String()
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }

  var dateFormats = {
    full: "EEEE, MMMM do, y",
    "long": "MMMM do, y",
    medium: "MMM d, y",
    "short": "MM/dd/yyyy"
  };
  var timeFormats = {
    full: "h:mm:ss a zzzz",
    "long": "h:mm:ss a z",
    medium: "h:mm:ss a",
    "short": "h:mm a"
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    "long": "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    "short": "{{date}}, {{time}}"
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };

  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };
  var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  };

  /* eslint-disable no-unused-vars */

  /**
   * The localize function argument callback which allows to convert raw value to
   * the actual type.
   *
   * @param value - The value to convert
   *
   * @returns The converted value
   */

  /**
   * The map of localized values for each width.
   */

  /**
   * The index type of the locale unit value. It types conversion of units of
   * values that don't start at 0 (i.e. quarters).
   */

  /**
   * Converts the unit value to the tuple of values.
   */

  /**
   * The tuple of localized era values. The first element represents BC,
   * the second element represents AD.
   */

  /**
   * The tuple of localized quarter values. The first element represents Q1.
   */

  /**
   * The tuple of localized day values. The first element represents Sunday.
   */

  /**
   * The tuple of localized month values. The first element represents January.
   */

  function buildLocalizeFn(args) {
    return function (value, options) {
      var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
      var valuesArray;
      if (context === "formatting" && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index = args.argumentCallback ? args.argumentCallback(value) : value;

      // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
      return valuesArray[index];
    };
  }

  var eraValues = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  };
  var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  };

  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };
  var dayValues = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    "short": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };
  var dayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  };
  var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
    var number = Number(dirtyNumber);

    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.

    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + "st";
        case 2:
          return number + "nd";
        case 3:
          return number + "rd";
      }
    }
    return number + "th";
  };
  var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: function argumentCallback(quarter) {
        return quarter - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };

  function buildMatchFn(args) {
    return function (string) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      }) :
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
      var value;
      value = args.valueCallback ? args.valueCallback(key) : key;
      value = options.valueCallback ?
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value: value,
        rest: rest
      };
    };
  }
  function findKey(object, predicate) {
    for (var key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
        return key;
      }
    }
    return undefined;
  }
  function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
    return undefined;
  }

  function buildMatchPatternFn(args) {
    return function (string) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult) return null;
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult) return null;
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value: value,
        rest: rest
      };
    };
  }

  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    "short": /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function valueCallback(value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: function valueCallback(index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };

  /**
   * @category Locales
   * @summary English locale (United States).
   * @language English
   * @iso-639-2 eng
   * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
   * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
   */
  var enUS = {
    code: "en-US",
    formatDistance: formatDistance$1,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
      weekStartsOn: 0 /* Sunday */,
      firstWeekContainsDate: 1
    }
  };

  /**
   * The {@link formatDistance} function options.
   */

  /**
   * @name formatDistance
   * @category Common Helpers
   * @summary Return the distance between the given dates in words.
   *
   * @description
   * Return the distance between the given dates in words.
   *
   * | Distance between dates                                            | Result              |
   * |-------------------------------------------------------------------|---------------------|
   * | 0 ... 30 secs                                                     | less than a minute  |
   * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
   * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
   * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
   * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
   * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
   * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
   * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
   * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
   * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
   * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
   * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
   * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
   * | N yrs ... N yrs 3 months                                          | about N years       |
   * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
   * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
   *
   * With `options.includeSeconds == true`:
   * | Distance between dates | Result               |
   * |------------------------|----------------------|
   * | 0 secs ... 5 secs      | less than 5 seconds  |
   * | 5 secs ... 10 secs     | less than 10 seconds |
   * | 10 secs ... 20 secs    | less than 20 seconds |
   * | 20 secs ... 40 secs    | half a minute        |
   * | 40 secs ... 60 secs    | less than a minute   |
   * | 60 secs ... 90 secs    | 1 minute             |
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param date - The date
   * @param baseDate - The date to compare with
   * @param options - An object with options
   *
   * @returns The distance in words
   *
   * @throws `date` must not be Invalid Date
   * @throws `baseDate` must not be Invalid Date
   * @throws `options.locale` must contain `formatDistance` property
   *
   * @example
   * // What is the distance between 2 July 2014 and 1 January 2015?
   * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
   * //=> '6 months'
   *
   * @example
   * // What is the distance between 1 January 2015 00:00:15
   * // and 1 January 2015 00:00:00, including seconds?
   * const result = formatDistance(
   *   new Date(2015, 0, 1, 0, 0, 15),
   *   new Date(2015, 0, 1, 0, 0, 0),
   *   { includeSeconds: true }
   * )
   * //=> 'less than 20 seconds'
   *
   * @example
   * // What is the distance from 1 January 2016
   * // to 1 January 2015, with a suffix?
   * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
   *   addSuffix: true
   * })
   * //=> 'about 1 year ago'
   *
   * @example
   * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
   * import { eoLocale } from 'date-fns/locale/eo'
   * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
   *   locale: eoLocale
   * })
   * //=> 'pli ol 1 jaro'
   */

  function formatDistance(date, baseDate, options) {
    var _ref, _options$locale;
    var defaultOptions = getDefaultOptions();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : enUS;
    var minutesInAlmostTwoDays = 2520;
    var comparison = compareAsc(date, baseDate);
    if (isNaN(comparison)) {
      throw new RangeError("Invalid time value");
    }
    var localizeOptions = Object.assign({}, options, {
      addSuffix: options === null || options === void 0 ? void 0 : options.addSuffix,
      comparison: comparison
    });
    var dateLeft;
    var dateRight;
    if (comparison > 0) {
      dateLeft = toDate(baseDate);
      dateRight = toDate(date);
    } else {
      dateLeft = toDate(date);
      dateRight = toDate(baseDate);
    }
    var seconds = differenceInSeconds(dateRight, dateLeft);
    var offsetInSeconds = (getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft)) / 1000;
    var minutes = Math.round((seconds - offsetInSeconds) / 60);
    var months;

    // 0 up to 2 mins
    if (minutes < 2) {
      if (options !== null && options !== void 0 && options.includeSeconds) {
        if (seconds < 5) {
          return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
        } else if (seconds < 10) {
          return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
        } else if (seconds < 20) {
          return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
        } else if (seconds < 40) {
          return locale.formatDistance("halfAMinute", 0, localizeOptions);
        } else if (seconds < 60) {
          return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
        } else {
          return locale.formatDistance("xMinutes", 1, localizeOptions);
        }
      } else {
        if (minutes === 0) {
          return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
        } else {
          return locale.formatDistance("xMinutes", minutes, localizeOptions);
        }
      }

      // 2 mins up to 0.75 hrs
    } else if (minutes < 45) {
      return locale.formatDistance("xMinutes", minutes, localizeOptions);

      // 0.75 hrs up to 1.5 hrs
    } else if (minutes < 90) {
      return locale.formatDistance("aboutXHours", 1, localizeOptions);

      // 1.5 hrs up to 24 hrs
    } else if (minutes < minutesInDay) {
      var hours = Math.round(minutes / 60);
      return locale.formatDistance("aboutXHours", hours, localizeOptions);

      // 1 day up to 1.75 days
    } else if (minutes < minutesInAlmostTwoDays) {
      return locale.formatDistance("xDays", 1, localizeOptions);

      // 1.75 days up to 30 days
    } else if (minutes < minutesInMonth) {
      var days = Math.round(minutes / minutesInDay);
      return locale.formatDistance("xDays", days, localizeOptions);

      // 1 month up to 2 months
    } else if (minutes < minutesInMonth * 2) {
      months = Math.round(minutes / minutesInMonth);
      return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = differenceInMonths(dateRight, dateLeft);

    // 2 months up to 12 months
    if (months < 12) {
      var nearestMonth = Math.round(minutes / minutesInMonth);
      return locale.formatDistance("xMonths", nearestMonth, localizeOptions);

      // 1 year up to max Date
    } else {
      var monthsSinceStartOfYear = months % 12;
      var years = Math.trunc(months / 12);

      // N years up to 1 years 3 months
      if (monthsSinceStartOfYear < 3) {
        return locale.formatDistance("aboutXYears", years, localizeOptions);

        // N years 3 months up to N years 9 months
      } else if (monthsSinceStartOfYear < 9) {
        return locale.formatDistance("overXYears", years, localizeOptions);

        // N years 9 months up to N year 12 months
      } else {
        return locale.formatDistance("almostXYears", years + 1, localizeOptions);
      }
    }
  }

  /**
   * The {@link formatDistanceToNow} function options.
   */

  /**
   * @name formatDistanceToNow
   * @category Common Helpers
   * @summary Return the distance between the given date and now in words.
   * @pure false
   *
   * @description
   * Return the distance between the given date and now in words.
   *
   * | Distance to now                                                   | Result              |
   * |-------------------------------------------------------------------|---------------------|
   * | 0 ... 30 secs                                                     | less than a minute  |
   * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
   * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
   * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
   * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
   * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
   * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
   * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
   * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
   * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
   * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
   * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
   * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
   * | N yrs ... N yrs 3 months                                          | about N years       |
   * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
   * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
   *
   * With `options.includeSeconds == true`:
   * | Distance to now     | Result               |
   * |---------------------|----------------------|
   * | 0 secs ... 5 secs   | less than 5 seconds  |
   * | 5 secs ... 10 secs  | less than 10 seconds |
   * | 10 secs ... 20 secs | less than 20 seconds |
   * | 20 secs ... 40 secs | half a minute        |
   * | 40 secs ... 60 secs | less than a minute   |
   * | 60 secs ... 90 secs | 1 minute             |
   *
   * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
   *
   * @param date - The given date
   * @param options - The object with options
   *
   * @returns The distance in words
   *
   * @throws `date` must not be Invalid Date
   * @throws `options.locale` must contain `formatDistance` property
   *
   * @example
   * // If today is 1 January 2015, what is the distance to 2 July 2014?
   * const result = formatDistanceToNow(
   *   new Date(2014, 6, 2)
   * )
   * //=> '6 months'
   *
   * @example
   * // If now is 1 January 2015 00:00:00,
   * // what is the distance to 1 January 2015 00:00:15, including seconds?
   * const result = formatDistanceToNow(
   *   new Date(2015, 0, 1, 0, 0, 15),
   *   {includeSeconds: true}
   * )
   * //=> 'less than 20 seconds'
   *
   * @example
   * // If today is 1 January 2015,
   * // what is the distance to 1 January 2016, with a suffix?
   * const result = formatDistanceToNow(
   *   new Date(2016, 0, 1),
   *   {addSuffix: true}
   * )
   * //=> 'in about 1 year'
   *
   * @example
   * // If today is 1 January 2015,
   * // what is the distance to 1 August 2016 in Esperanto?
   * const eoLocale = require('date-fns/locale/eo')
   * const result = formatDistanceToNow(
   *   new Date(2016, 7, 1),
   *   {locale: eoLocale}
   * )
   * //=> 'pli ol 1 jaro'
   */
  function formatDistanceToNow(date, options) {
    return formatDistance(date, constructNow(date), options);
  }

  var notesArray = [];
  var body = window.document.body;
  var noteItems = window.document.querySelectorAll('.note-item') || [];
  function getNotesFromStorage() {
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get('notes', function (data) {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(data.notes || []);
        }
      });
    });
  }
  var search = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'content', 'date']
  });
  function showInterface() {
    return _showInterface.apply(this, arguments);
  }
  function _showInterface() {
    _showInterface = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var popup, handleClick, handleNewNote, handleDeleteNote, debounce, saveNote, debouncedSaveNote, showInterfaceMain;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            showInterfaceMain = function _showInterfaceMain() {
              var mainContainer = window.document.createElement('div');
              mainContainer.id = 'mainContainerJot';
              mainContainer.style.position = 'fixed';
              mainContainer.style.top = '0';
              mainContainer.style.left = '0';
              mainContainer.style.width = '100%';
              mainContainer.style.height = '100%';
              mainContainer.style.zIndex = '1000';
              mainContainer.style.display = 'flex';
              mainContainer.style.justifyContent = 'center';
              mainContainer.style.alignItems = 'center';
              mainContainer.style.backgroundColor = 'transparent';
              if (!window.document.getElementById('mainContainerJot')) {
                body.appendChild(mainContainer);
                mainContainer.innerHTML = popup;
                var latestNote = notesArray[0];
                var noteTitle = window.document.getElementById('note-title');
                var noteContent = window.document.getElementById('note-content');
                var noteDate = window.document.getElementById('note-date');
                var pingGuy = window.document.getElementById('ping-guy');
                var saveButton = window.document.getElementById('save');
                var deleteButton = window.document.getElementById('trash-alt');
                var searchButton = window.document.getElementById('searchNote');
                window.document.getElementById('note-spread');
                var pingGuyInsert = function pingGuyInsert() {
                  if (pingGuy.classList.contains('inline-flex')) {
                    return;
                  } else {
                    pingGuy.classList.remove('hidden');
                    pingGuy.classList.add('inline-flex');
                  }
                };
                var pingGuyRemove = function pingGuyRemove() {
                  if (pingGuy.classList.contains('hidden')) {
                    return;
                  } else {
                    pingGuy.classList.remove('inline-flex');
                    pingGuy.classList.add('hidden');
                  }
                };
                if (latestNote) ; else {
                  console.log('there is no new note');
                  handleNewNote(noteTitle, noteContent, noteDate, pingGuy);
                }
                noteItems = window.document.querySelectorAll('.note-item');
                if (noteItems) {
                  var button = window.document.getElementById('buttons-list');
                  button.style.backgroundColor = 'rgb(168 161 135)';
                  noteItems.forEach(function (note) {
                    note.addEventListener('click', handleClick);
                  });
                }
                searchButton.addEventListener('click', function () {
                  var searchInput = window.document.getElementById('searchInput');
                  if (searchInput.classList.contains('hidden')) {
                    searchInput.classList.remove('hidden');
                    searchInput.focus();
                  }
                });
                searchInput.addEventListener('input', function (e) {
                  var searchResults = search.search(e.target.value, {
                    prefix: true,
                    fuzzy: 0.2
                  });
                  if (searchResults.length === 0) return;
                  var noteSpread = window.document.getElementById('note-spread');
                  noteSpread.innerHTML = searchResults.map(function (note) {
                    return "\n                <div id=".concat(note.id, " class=\"flex px-2 py-2 select-none note-item relative cursor-pointer gap-4 items-center\">\n                    <p class=\"text-xs absolute right-1 top-2 text-slate-600\">").concat(formatDistanceToNow(new Date(note.id), {
                      suffix: true
                    }), "</p>\n                    <div class=\"flex flex-col gap-1.5\">\n                        <h1 class=\"text-base text-slate-800 font-semibold\">").concat(note.title, "</h1>\n                        <p class=\"text-sm leading-5 text-slate-600\">").concat(note.content.slice(0, 83), "</p>\n                    </div>\n                </div>\n            ");
                  }).join('');
                  noteItems = window.document.querySelectorAll('.note-item');
                  noteItems.forEach(function (note) {
                    note.addEventListener('click', handleClick);
                  });
                });
                deleteButton.addEventListener('click', function () {
                  var selectedNote = window.document.querySelector('.note-item[data-selected="true"]');
                  if (selectedNote) {
                    var id = Number(selectedNote.id);
                    handleDeleteNote(id);
                    selectedNote.remove();
                    handleClick(id);
                  } else {
                    return;
                  }
                });
                saveButton.addEventListener('click', function () {
                  var newNote;
                  for (var i = 0; i < noteItems.length; i++) {
                    if (noteItems[i].dataset.selected === 'true') {
                      newNote = noteItems[i];
                    } else {
                      continue;
                    }
                  }
                  var newNoteTitle = newNote.children[1].children[0].textContent;
                  var newNoteContent = newNote.children[1].children[1].textContent;
                  if (newNote) {
                    var newNoteObj = {
                      id: Date.now(),
                      title: newNoteTitle,
                      content: newNoteContent,
                      date: noteDate.textContent
                    };
                    notesArray.unshift(newNoteObj);
                    chrome.storage.sync.set({
                      notes: notesArray
                    }, function () {
                      console.log('A note has been saved');
                    });

                    // search.addAll(notesArray);
                    newNote.id = newNoteObj.id;
                    pingGuyRemove();
                  } else {
                    return;
                  }
                });
                var plus = window.document.getElementById('plus');
                plus.addEventListener('click', function () {
                  console.log('it has been clicked');
                  var newInterfaceSecondPallet = document.getElementById('newInterfaceSecondPallet');
                  var interfaceSecondPallet = document.getElementById('interfaceSecondPallet');
                  if (interfaceSecondPallet.classList.contains('hidden')) {
                    newInterfaceSecondPallet.classList.add('hidden');
                    interfaceSecondPallet.classList.remove('hidden');
                    interfaceSecondPallet.classList.add('flex');
                  }
                  handleNewNote(noteTitle, noteContent, noteDate, pingGuy);
                });
                noteTitle.addEventListener('input', function (e) {
                  var newNoteCreate = document.getElementById('new-note');
                  if (newNoteCreate) {
                    newNoteCreate.children[1].children[0].innerHTML = e.target.value;
                    pingGuyInsert();
                  } else {
                    noteItems = window.document.querySelectorAll('.note-item');
                    for (var i = 0; i < noteItems.length; i++) {
                      if (noteItems[i].dataset.selected === 'true') {
                        noteItems[i].children[1].children[0].innerHTML = e.target.value;
                        pingGuyInsert();
                      }
                    }
                  }
                  debouncedSaveNote();
                });
                noteContent.addEventListener('input', function (e) {
                  var newNoteCreate = document.getElementById('new-note');
                  if (newNoteCreate) {
                    newNoteCreate.children[1].children[1].innerHTML = e.target.value;
                    pingGuyInsert();
                  } else {
                    noteItems = window.document.querySelectorAll('.note-item');
                    for (var i = 0; i < noteItems.length; i++) {
                      if (noteItems[i].dataset.selected === 'true') {
                        noteItems[i].children[1].children[1].innerHTML = e.target.value;
                        pingGuyInsert();
                      }
                    }
                  }
                  debouncedSaveNote();
                });
              } else {
                console.log('it already exists');
                return;
              }
            };
            saveNote = function _saveNote() {
              var noteTitle = document.getElementById('note-title');
              var noteContent = document.getElementById('note-content');
              var noteDate = document.getElementById('note-date');
              var pingGuy = document.getElementById('ping-guy');
              var selectedNote = document.querySelector('.note-item[data-selected="true"]');
              var id;
              selectedNote.id === 'new-note' ? id = Date.now() : id = Number(selectedNote.id);
              console.log(id);
              var updatedNote = {
                id: id,
                title: noteTitle.value,
                content: noteContent.value,
                date: noteDate.textContent
              };
              var index = notesArray.findIndex(function (note) {
                return note.id === id;
              });
              index !== -1 ? notesArray[index] = updatedNote : notesArray.unshift(updatedNote);
              chrome.storage.sync.set({
                notes: notesArray
              }, function () {
                console.log('Note saved');
              });
              pingGuy.classList.remove('inline-flex');
              pingGuy.classList.add('hidden');
            };
            debounce = function _debounce(callback, delay) {
              console.log('i am in debounce');
              var timeout;
              return function () {
                var _arguments = arguments,
                  _this = this;
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                  callback.apply(_this, _arguments);
                }, delay);
              };
            };
            handleDeleteNote = function _handleDeleteNote(id) {
              notesArray = notesArray.filter(function (note) {
                return note.id !== id;
              });
              chrome.storage.sync.set({
                notes: notesArray
              }, function () {
                console.log('Note deleted');
              });
            };
            handleNewNote = function _handleNewNote(noteTitle, noteContent, noteDate, pingGuy) {
              noteTitle.value = '';
              noteContent.value = '';
              noteDate.innerHTML = new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              }) + ' at ' + new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              }).toString().toLocaleLowerCase();
              noteTitle.focus();
              var noteSpread = window.document.getElementById('note-spread');
              var newNote = window.document.createElement('div');

              // newNote.id = 'new-note';
              newNote.id = Date.now();
              newNote.classList.add('flex', 'px-2', 'py-2', 'select-none', 'note-item', 'relative', 'cursor-pointer', 'gap-4', 'items-center');
              newNote.innerHTML = "\n                <p id=\"newNoteDate\" class=\"text-xs absolute right-1 top-2 text-slate-600\">\n                    ".concat(formatDistanceToNow(new Date(), {
                addSuffix: true
              }), "\n                </p>\n                <div class=\"flex flex-col gap-1.5\">\n                    <h1 class=\"text-base text-slate-800 font-semibold\">New Note</h1>\n                    <p class=\"text-sm leading-5 text-slate-600\">Write here...</p>\n                </div>\n            ");
              for (var i = 0; i < noteItems.length; i++) {
                noteItems[i].dataset.selected = 'false';
                noteItems[i].style.backgroundColor = 'transparent';
                noteItems[i].style.borderRadius = '0';
              }
              newNote.dataset.selected = 'true';
              pingGuy.classList.remove('hidden');
              pingGuy.classList.add('inline-flex');
              noteSpread.insertBefore(newNote, noteSpread.firstChild);
              newNote.addEventListener('click', handleClick);
            };
            handleClick = function _handleClick(e) {
              var newInterfaceSecondPallet = document.getElementById('newInterfaceSecondPallet');
              var interfaceSecondPallet = document.getElementById('interfaceSecondPallet');
              if (interfaceSecondPallet.classList.contains('hidden')) {
                newInterfaceSecondPallet.classList.add('hidden');
                interfaceSecondPallet.classList.remove('hidden');
                interfaceSecondPallet.classList.add('flex');
              }
              e.stopPropagation();
              var id = Number(e.currentTarget.id) || e.target.id;
              var note = document.getElementById(id);
              var isSelected = note.dataset.selected === 'true';
              var noteTitle = document.getElementById('note-title');
              var noteContent = document.getElementById('note-content');

              // const noteSpread = document.getElementById('note-spread');
              // noteSpread.remove()

              if (isSelected) {
                note.dataset.selected = 'false';
                note.style.backgroundColor = 'transparent';
                note.style.borderRadius = '0';
                noteTitle.value = '';
                noteContent.value = '';
              } else {
                document.querySelectorAll('.note-item').forEach(function (note) {
                  note.dataset.selected = 'false';
                  note.style.backgroundColor = 'transparent';
                  note.style.borderRadius = '0';
                });
                note.dataset.selected = 'true';
                note.style.backgroundColor = 'rgb(168 161 135)';
                note.style.borderRadius = '10px';

                // This only works for saved data in the storage
                noteTitle.value = notesArray.find(function (note) {
                  return note.id === id;
                }).title;
                noteContent.value = notesArray.find(function (note) {
                  return note.id === id;
                }).content;

                // noteTitle.value = note.children[1].children[0].textContent;
                // noteContent.value = note.children[1].children[1].textContent;
              }
            };
            _context.prev = 6;
            _context.next = 9;
            return getNotesFromStorage();
          case 9:
            notesArray = _context.sent;
            if (notesArray.length > 0) {
              search.addAll(notesArray);
            }
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            console.error('Failed to load notes:', _context.t0);
          case 16:
            popup = "\n    <div class=\"w-[1100px] h-[700px] flex gap-8\" >\n        <div class=\"w-[50%] overflow-y-scroll  h-full flex-col py-4 px-3 bg-[#e2dabe] rounded-xl custom-scrollbar\">\n            <div class=\"flex items-center justify-between\">\n                <div class=\"flex gap-1.5\"> \n                    <div class=\"rounded-full w-3 h-3 bg-red-600\"></div>\n                    <div class=\"rounded-full w-3 h-3 bg-yellow-600\"></div>\n                    <div class=\"rounded-full w-3 h-3 bg-green-600\"></div>\n                </div>\n                \n                <div class=\"flex items-center cursor-pointer\"> \n                    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-5 h-5\" viewBox=\"0 0 24 24\" id=\"searchNote\"><path fill=\"#717884\" d=\"M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z\"></path></svg>\n                    <input id=\"searchInput\" type=\"text\" placeholder=\"Search notes...\" class=\"text-sm ml-1.5 hidden bg-transparent outline-none border-b border-slate-400 text-slate-700\" />\n                </div>\n            </div>\n\n            <div class=\"flex justify-between mt-6 items-center\">\n                <div class=\"flex gap-3 items-center\">\n                    <div class=\"rounded-full w-3 h-3 bg-blue-600\"></div>\n                    <h2 class=\"text-xl text-slate-700 font-semibold\">Work</h2>\n                </div>\n                <svg class='cursor-pointer'width=\"20\" height\"20\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"plus\"><path fill=\"#717884\" d=\"M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z\"></path></svg>\n            </div>\n\n            <div id=\"note-spread\" class=\"flex flex-col gap-7 mt-5\">\n                ".concat(notesArray.length > 0 || notesArray !== undefined ? notesArray.map(function (note) {
              return "\n                    <div id=".concat(note.id, " class=\"flex px-2 py-2 select-none note-item relative cursor-pointer gap-4 items-center\">\n                    <p class=\"text-xs absolute right-1 top-2 text-slate-600\">").concat(formatDistanceToNow(new Date(note.id), {
                suffix: true
              }), "</p>\n                    <div class=\"flex flex-col gap-1.5\">\n                        <h1 class=\"text-base text-slate-800 font-semibold\">").concat(note.title, "</h1>\n                        <p class=\"text-sm leading-5 text-slate-600\">").concat(note.content.slice(0, 83), "</p>\n                    </div>\n                    </div>\n                ");
            }).join('') : "<div class=\"flex px-2 py-2 select-none note-item relative cursor-pointer gap-4 items-center\">\n                    <p class=\"text-xs absolute right-1 top-2 text-slate-600\">May, 10, 2024 at 6:18pm</p>\n                    <div class=\"flex flex-col gap-1.5\">\n                        <h1 class=\"text-base text-slate-800 font-semibold\">New Note</h1>\n                        <p class=\"text-sm leading-5 text-slate-600\">Write here...</p>\n                    </div>\n                </div>", "  \n            </div>\n\n        </div>\n        <div id=\"secondPallet\" class=\"w-full relative px-5 py-4 flex-col gap-5 h-full bg-[#e2dabe] rounded-xl\">\n            <div id=\"newInterfaceSecondPallet\" class=\"flex flex-col gap-5 w-full items-center justify-center h-full\">\n                <h1 class=\"text-base text-slate-800 font-semibold\">Select a note to read </h1>\n                <p class=\"text-sm text-slate-600\">Nothing is selected</p>\n            </div>\n            \n            <div id=\"interfaceSecondPallet\" class=\"hidden flex-col\">\n                <p id='note-date' class=\"text-sm text-slate-600 mt-4font-medium\">May, 10, 2024 at 6:18pm </p>\n                <input maxlength=\"30\" placeholder=\"Title here...\" type=\"text\" id=\"note-title\" class=\"text-3xl placeholder:text-slate-500/90 w-full font-serif bg-transparent outline-none border-none mt-2 text-slate-800 font-semibold\" />\n                <textarea rows=10 cols=40 placeholder=\"write here...\" type=\"text\" id=\"note-content\" class=\"text-base w-full resize-none bg-transparent outline-none border-none text-slate-700 leading-9 mt-4\"></textarea>\n\n                    <div id=\"buttons-list\" class=\"flex items-center gap-6 absolute py-2 px-8 rounded-[25px] bottom-3 left-[35%]\">\n                        <p class=\"text-base text-slate-100 font-medium cursor-pointer\">Aa</p>\n                        <svg class=\"cursor-pointer w-[20px] h-[20px]\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"  id=\"history-alt\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z\"></path></svg>\n\n                        <svg class=\"cursor-pointer w-[20px] h-[20px] scale-x-[-1]\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"history-alt\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z\"></path></svg>\n\n                        <div class=\"relative\">\n                            <span id=\"ping-guy\" class=\"animate-ping absolute right-0 -top-1 hidden h-2 w-2 rounded-full bg-red-500 opacity-75\"></span>\n                            <svg class=\"cursor-pointer w-[20px] h-[20px]\" xmlns=\"http://www.w3.org/2000/svg\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" id=\"save\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"m20.71 9.29-6-6a1 1 0 0 0-.32-.21A1.09 1.09 0 0 0 14 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a1 1 0 0 0-.29-.71ZM9 5h4v2H9Zm6 14H9v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm4-1a1 1 0 0 1-1 1h-1v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.41l4 4Z\"></path></svg>\n                        </div>\n\n                        <svg class=\"cursor-pointer w-[20px] h-[20px]\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"  id=\"trash-alt\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z\"></path></svg>\n                    </div>\n                </div>\n\n        </div>\n    </div>\n");
            debouncedSaveNote = debounce(saveNote, 1000);
            showInterfaceMain();
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[6, 13]]);
    }));
    return _showInterface.apply(this, arguments);
  }
  function hideInterface() {
    var mainContainer = window.document.getElementById('mainContainerJot');
    if (mainContainer) {
      mainContainer.remove();
    } else {
      return;
    }
  }
  body.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
      showInterface();
    } else if (e.key === 'Escape') {
      hideInterface();
    }
  });

})();
