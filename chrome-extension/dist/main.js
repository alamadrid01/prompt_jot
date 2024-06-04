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
  var remove = function remove(_ref) {
    var firstChild = _ref.firstChild,
      lastChild = _ref.lastChild;
    var range = document.createRange();
    range.setStartAfter(firstChild);
    range.setEndAfter(lastChild);
    range.deleteContents();
    return firstChild;
  };
  var diffable = function diffable(node, operation) {
    return node.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node;
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
  function getNotesFromStorage() {
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get('notes', function (data) {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          console.log('this is the data received', data.notes);
          resolve(data.notes || []);
        }
      });
    });
  }
  function showInterface() {
    return _showInterface.apply(this, arguments);
  }
  function _showInterface() {
    _showInterface = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var popup, handleclick, handleNewNote, showInterfaceMain;
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
                if (latestNote) {
                  noteTitle.value = latestNote.title;
                  noteContent.value = latestNote.content;
                  // noteDate.innerHTML = latestNote.date;
                } else {
                  console.log('there is no new note');
                  handleNewNote(noteTitle, noteContent, noteDate, pingGuy);
                }
                var noteItems = window.document.querySelectorAll('.note-item');
                if (noteItems) {
                  var button = window.document.getElementById('buttons-list');
                  button.style.backgroundColor = 'rgb(168 161 135)';
                  noteItems.forEach(function (note) {
                    note.addEventListener('click', handleclick);
                  });
                }
                saveButton.addEventListener('click', function () {
                  var newNote = window.document.getElementById('new-note');
                  // const noteSpread = window.document.getElementById('note-spread');
                  var newNoteTitle = newNote.children[1].children[0].textContent;
                  var newNoteContent = newNote.children[1].children[1].textContent;
                  console.log('after clicked', newNoteTitle, newNoteContent, noteDate.textContent);
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
                      console.log('this is the notes array', notesArray);
                    });
                    pingGuyRemove();
                  } else {
                    return;
                  }
                });
                var plus = window.document.getElementById('plus');
                plus.addEventListener('click', function () {
                  console.log('it has been clicked');
                  handleNewNote(noteTitle, noteContent, noteDate, pingGuy);
                });
                noteTitle.addEventListener('input', function (e) {
                  var newNoteCreate = document.getElementById('new-note');
                  newNoteCreate.children[1].children[0].innerHTML = e.target.value;
                  pingGuyInsert();
                });
                noteContent.addEventListener('input', function (e) {
                  var newNoteCreate = document.getElementById('new-note');
                  newNoteCreate.children[1].children[1].innerHTML = e.target.value.slice(0, 75);
                  pingGuyInsert();
                });
              } else {
                console.log('it already exists');
                return;
              }
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
              newNote.id = 'new-note';
              newNote.classList.add('flex', 'px-2', 'py-2', 'select-none', 'note-item', 'relative', 'cursor-pointer', 'gap-4', 'items-center');
              newNote.innerHTML = "\n                <p id=\"newNoteDate\" class=\"text-xs absolute right-1 top-2 text-slate-600\">\n                    ".concat(formatDistanceToNow(new Date(), {
                addSuffix: true
              }), "\n                </p>\n                <div class=\"flex flex-col gap-1.5\">\n                    <h1 class=\"text-base text-slate-800 font-semibold\">New Note</h1>\n                    <p class=\"text-sm leading-5 text-slate-600\">Write here...</p>\n                </div>\n            ");
              pingGuy.classList.remove('hidden');
              pingGuy.classList.add('inline-flex');
              noteSpread.insertBefore(newNote, noteSpread.firstChild);
            };
            handleclick = function _handleclick(e) {
              e.stopPropagation();
              var id = Number(e.currentTarget.id);
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
                note.dataset.selected = 'true';
                note.style.backgroundColor = 'rgb(168 161 135)';
                note.style.borderRadius = '10px';
                noteTitle.value = notesArray.find(function (note) {
                  return note.id === id;
                }).title;
                noteContent.value = notesArray.find(function (note) {
                  return note.id === id;
                }).content;
              }
            };
            _context.prev = 3;
            _context.next = 6;
            return getNotesFromStorage();
          case 6:
            notesArray = _context.sent;
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            console.error('Failed to load notes:', _context.t0);
          case 12:
            popup = "\n    <div class=\"w-[1100px] h-[700px] flex gap-8\" >\n        <div class=\"w-[50%]  h-full flex-col py-4 px-3 bg-[#e2dabe] rounded-xl\">\n            <div class=\"flex items-center justify-between\">\n                <div class=\"flex gap-1.5\"> \n                    <div class=\"rounded-full w-3 h-3 bg-red-600\"></div>\n                    <div class=\"rounded-full w-3 h-3 bg-yellow-600\"></div>\n                    <div class=\"rounded-full w-3 h-3 bg-green-600\"></div>\n                </div>\n                <div class=\"flex cursor-pointer w-5 h-5\"> \n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"search\"><path fill=\"#717884\" d=\"M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z\"></path></svg>\n                </div>\n            </div>\n\n            <div class=\"flex justify-between mt-6 items-center\">\n                <div class=\"flex gap-3 items-center\">\n                    <div class=\"rounded-full w-3 h-3 bg-blue-600\"></div>\n                    <h2 class=\"text-xl text-slate-700 font-semibold\">Work</h2>\n                </div>\n                <svg class='cursor-pointer'width=\"20\" height\"20\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"plus\"><path fill=\"#717884\" d=\"M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z\"></path></svg>\n            </div>\n\n            <div id=\"note-spread\" class=\"flex flex-col gap-7 mt-5\">\n                ".concat(notesArray.length > 0 || notesArray !== undefined ? notesArray.map(function (note) {
              return "\n                    <div id=".concat(note.id, " class=\"flex px-2 py-2 select-none note-item relative cursor-pointer gap-4 items-center\">\n                    <p class=\"text-xs absolute right-1 top-2 text-slate-600\">").concat(formatDistanceToNow(new Date(note.id), {
                suffix: true
              }), "</p>\n                    <div class=\"flex flex-col gap-1.5\">\n                        <h1 class=\"text-base text-slate-800 font-semibold\">").concat(note.title, "</h1>\n                        <p class=\"text-sm leading-5 text-slate-600\">").concat(note.content.slice(0, 83), "</p>\n                    </div>\n                    </div>\n                ");
            }).join('') : "<div class=\"flex px-2 py-2 select-none note-item relative cursor-pointer gap-4 items-center\">\n                    <p class=\"text-xs absolute right-1 top-2 text-slate-600\">May, 10, 2024 at 6:18pm</p>\n                    <div class=\"flex flex-col gap-1.5\">\n                        <h1 class=\"text-base text-slate-800 font-semibold\">New Note</h1>\n                        <p class=\"text-sm leading-5 text-slate-600\">Write here...</p>\n                    </div>\n                </div>", "  \n            </div>\n\n        </div>\n        <div class=\"w-full relative px-5 py-4 flex-col gap-5 h-full bg-[#e2dabe] rounded-xl\">\n            <p id='note-date' class=\"text-sm text-slate-600 mt-4font-medium\">May, 10, 2024 at 6:18pm </p>\n            <input maxlength=\"30\" placeholder=\"Title here...\" type=\"text\" id=\"note-title\" class=\"text-3xl placeholder:text-slate-500/90 w-full font-serif bg-transparent outline-none border-none mt-2 text-slate-800 font-semibold\" />\n            <textarea rows=10 cols=40 placeholder=\"write here...\" type=\"text\" id=\"note-content\" class=\"text-base w-full resize-none bg-transparent outline-none border-none text-slate-700 leading-9 mt-4\"></textarea>\n\n                <div id=\"buttons-list\" class=\"flex items-center gap-6 absolute py-2 px-8 rounded-[25px] bottom-3 left-[35%]\">\n                    <p class=\"text-base text-slate-100 font-medium cursor-pointer\">Aa</p>\n                    <svg class=\"cursor-pointer w-[20px] h-[20px]\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"  id=\"history-alt\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z\"></path></svg>\n\n                    <svg class=\"cursor-pointer w-[20px] h-[20px] scale-x-[-1]\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"history-alt\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z\"></path></svg>\n\n                    <div class=\"relative\">\n                        <span id=\"ping-guy\" class=\"animate-ping absolute right-0 -top-1 hidden h-2 w-2 rounded-full bg-red-500 opacity-75\"></span>\n                        <svg class=\"cursor-pointer w-[20px] h-[20px]\" xmlns=\"http://www.w3.org/2000/svg\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" id=\"save\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"m20.71 9.29-6-6a1 1 0 0 0-.32-.21A1.09 1.09 0 0 0 14 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a1 1 0 0 0-.29-.71ZM9 5h4v2H9Zm6 14H9v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm4-1a1 1 0 0 1-1 1h-1v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.41l4 4Z\"></path></svg>\n                    </div>\n\n                    <svg class=\"class-pointer w-[20px] h-[20px]\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"  id=\"trash-alt\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z\"></path></svg>\n                </div>\n\n        </div>\n    </div>\n");
            showInterfaceMain();
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 9]]);
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
