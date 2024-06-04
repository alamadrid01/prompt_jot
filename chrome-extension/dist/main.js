(function () {
  'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
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

  var body = window.document.body;
  var notes = [{
    id: "first-note",
    title: "Meeting with Bob",
    content: "Discuss the project updates and deadlines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec odio nec urna fermentum congue. Nullam nec suscipit neque. Nulla facilisi. Donec ac vestibulum augue, ac tincidunt purus. Donec aliquam, urna in mollis ultricies, turpis sapien lacinia nunc, nec fringilla purus lorem nec metus. Nullam nec suscipit neque. Nulla facilisi. Donec ac vestibulum augue, ac tincidunt purus. Donec aliquam, urna in mollis ultricies, turpis sapien lacinia nunc, nec fringilla purus lorem nec metus.",
    date: "2024-06-03"
  }, {
    id: "second-note",
    title: "Grocery Shopping",
    content: "Buy milk, bread, eggs, and cheese. nec odio nec urna fermentum congue. Nullam nec\n      suscipit neque. Nulla facilisi. Donec ac\n      vestibulum augue, ac tincidunt purus. Donec\n      aliquam, urna in mollis ultricies, turpis\n      sapien lacinia nunc, nec fringilla purus\n      lorem nec metus. Nullam nec suscipit neque.\n      Nulla facilisi. Donec ac vestibulum augue, ac\n      tincidunt purus. Donec aliquam, urna in mollis\n      ultricies, turpis sapien lacinia nunc, nec\n      fringilla purus lorem nec metus",
    date: "2024-06-04"
  }, {
    id: "third-note",
    title: "Workout Session",
    content: "Morning workout session at the gym. nec odio nec urna fermentum congue. Nullam nec\n      suscipit neque. Nulla facilisi. Donec ac\n      vestibulum augue, ac tincidunt purus. Donec\n      aliquam, urna in mollis ultricies, turpis\n      sapien lacinia nunc, nec fringilla purus\n      lorem nec metus. Nullam nec suscipit neque.\n      Nulla facilisi. Donec ac vestibulum augue, ac\n      tincidunt purus. Donec aliquam, urna in mollis\n      ultricies, turpis sapien lacinia nunc, nec\n      fringilla purus lorem nec metus",
    date: "2024-06-05"
  }, {
    id: "fourth-note",
    title: "Dentist Appointment",
    content: "Routine dental check-up at 10 AM.nec odio nec urna fermentum congue. Nullam nec\n    suscipit neque. Nulla facilisi. Donec ac\n    vestibulum augue, ac tincidunt purus. Donec\n    aliquam, urna in mollis ultricies, turpis\n    sapien lacinia nunc, nec fringilla purus\n    lorem nec metus. Nullam nec suscipit neque.\n    Nulla facilisi. Donec ac vestibulum augue, ac\n    tincidunt purus. Donec aliquam, urna in mollis\n    ultricies, turpis sapien lacinia nunc, nec\n    fringilla purus lorem nec metus",
    date: "2024-06-06"
  }, {
    id: "fifth-note",
    title: "Read New Book",
    content: "Start reading 'The Great Gatsby'. nec odio nec urna fermentum congue. Nullam nec\n      suscipit neque. Nulla facilisi. Donec ac\n      vestibulum augue, ac tincidunt purus. Donec\n      aliquam, urna in mollis ultricies, turpis\n      sapien lacinia nunc, nec fringilla purus\n      lorem nec metus. Nullam nec suscipit neque.\n      Nulla facilisi. Donec ac vestibulum augue, ac\n      tincidunt purus. Donec aliquam, urna in mollis\n      ultricies, turpis sapien lacinia nunc, nec\n      fringilla purus lorem nec metus",
    date: "2024-06-07"
  }];
  var popup = "\n    <div class=\"w-[1100px] h-[700px] flex gap-8\" >\n        <div class=\"w-[50%]  h-full flex-col py-4 px-3 bg-[#e2dabe] rounded-xl\">\n            <div class=\"flex items-center justify-between\">\n                <div class=\"flex gap-1.5\"> \n                    <div class=\"rounded-full w-3 h-3 bg-red-600\"></div>\n                    <div class=\"rounded-full w-3 h-3 bg-yellow-600\"></div>\n                    <div class=\"rounded-full w-3 h-3 bg-green-600\"></div>\n                </div>\n                <div class=\"flex cursor-pointer w-5 h-5\"> \n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"search\"><path fill=\"#717884\" d=\"M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z\"></path></svg>\n                </div>\n            </div>\n\n            <div class=\"flex justify-between mt-6 items-center\">\n                <div class=\"flex gap-3 items-center\">\n                    <div class=\"rounded-full w-3 h-3 bg-blue-600\"></div>\n                    <h2 class=\"text-xl text-slate-700 font-semibold\">Work</h2>\n                </div>\n                <svg class='cursor-pointer'width=\"20\" height\"20\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"plus\"><path fill=\"#717884\" d=\"M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z\"></path></svg>\n            </div>\n\n            <div id=\"note-spread\" class=\"flex flex-col gap-7 mt-5\">\n                ".concat(notes.map(function (note) {
    return "\n                    <div id=".concat(note.id, " class=\"flex px-2 py-2 select-none note-item relative cursor-pointer gap-4 items-center\">\n                    <p class=\"text-xs absolute right-1 top-2 text-slate-600\">").concat(note.date, "</p>\n                    <div class=\"flex flex-col gap-1.5\">\n                        <h1 class=\"text-base text-slate-800 font-semibold\">").concat(note.title, "</h1>\n                        <p class=\"text-sm leading-5 text-slate-600\">").concat(note.content.slice(0, 75), "</p>\n                    </div>\n                    </div>\n                ");
  }).join(''), "  \n            </div>\n\n        </div>\n        <div class=\"w-full relative px-5 py-4 flex-col gap-5 h-full bg-[#e2dabe] rounded-xl\">\n            <p class=\"text-sm text-slate-600 mt-4font-medium\">May, 10, 2024 at 6:18pm </p>\n            <input placeholder=\"Title here...\" type=\"text\" id=\"note-title\" class=\"text-3xl placeholder:text-slate-500/90 w-full font-serif bg-transparent outline-none border-none mt-2 text-slate-800 font-semibold\" />\n            <textarea rows=10 cols=40 placeholder=\"write here...\" type=\"text\" id=\"note-content\" class=\"text-base w-full resize-none bg-transparent outline-none border-none text-slate-700 leading-9 mt-4\"></textarea>\n\n                <div id=\"buttons-list\" class=\"flex items-center gap-6 absolute py-2 px-8 rounded-[25px] bottom-3 left-[35%]\">\n                    <p class=\"text-base text-slate-100 font-medium cursor-pointer\">Aa</p>\n                    <svg class=\"cursor-pointer w-[20px] h-[20px]\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"  id=\"history-alt\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z\"></path></svg>\n\n                    <svg class=\"cursor-pointer w-[20px] h-[20px] scale-x-[-1]\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"history-alt\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z\"></path></svg>\n\n                    <svg class=\"class-pointer w-[20px] h-[20px]\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"  id=\"trash-alt\"><path fill=\"white\" stroke=\"white\" stroke-width=\"0.4\" d=\"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z\"></path></svg>\n                </div>\n\n        </div>\n    </div>\n");
  function handleclick(e) {
    e.stopPropagation();
    var id = e.currentTarget.id;
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
      noteTitle.value = notes.find(function (note) {
        return note.id === id;
      }).title;
      noteContent.value = notes.find(function (note) {
        return note.id === id;
      }).content;
    }
  }
  function showInterface() {
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
      var latestNote = notes[0];
      var noteTitle = window.document.getElementById('note-title');
      var noteContent = window.document.getElementById('note-content');
      noteTitle.value = latestNote.title;
      noteContent.value = latestNote.content;
      var noteItems = window.document.querySelectorAll('.note-item');
      if (noteItems) {
        var button = window.document.getElementById('buttons-list');
        console.log('this is the button', button);
        button.style.backgroundColor = 'rgb(168 161 135)';
        noteItems.forEach(function (note) {
          note.addEventListener('click', handleclick);
        });
      }
    } else {
      console.log('it already exists');
      return;
    }
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
