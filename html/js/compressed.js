'use strict';
!function(global, factory) {
  if ("object" == typeof module && "object" == typeof module.exports) {
    module.exports = global.document ? factory(global, true) : function(root) {
      if (!root.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(root);
    };
  } else {
    factory(global);
  }
}("undefined" != typeof window ? window : this, function(window, noGlobal) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isArraylike(obj) {
    var length = "length" in obj && obj.length;
    var ltype = jQuery.type(obj);
    return "function" !== ltype && !jQuery.isWindow(obj) && (!(1 !== obj.nodeType || !length) || ("array" === ltype || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj));
  }
  /**
   * @param {undefined} args
   * @param {!Object} t
   * @param {boolean} value
   * @return {?}
   */
  function filter(args, t, value) {
    if (jQuery.isFunction(t)) {
      return jQuery.grep(args, function(e, r) {
        return !!t.call(e, r, e) !== value;
      });
    }
    if (t.nodeType) {
      return jQuery.grep(args, function(unit) {
        return unit === t !== value;
      });
    }
    if ("string" == typeof t) {
      if (reFeaturedMethod.test(t)) {
        return jQuery.filter(t, args, value);
      }
      t = jQuery.filter(t, args);
    }
    return jQuery.grep(args, function(name) {
      return indexOf.call(t, name) >= 0 !== value;
    });
  }
  /**
   * @param {!Object} elem
   * @param {string} dir
   * @return {?}
   */
  function sibling(elem, dir) {
    for (; (elem = elem[dir]) && 1 !== elem.nodeType;) {
    }
    return elem;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function createOptions(options) {
    var subwikiListsCache = optionsCache[options] = {};
    return jQuery.each(options.match(rnotwhite) || [], function(canCreateDiscussions, wikiId) {
      /** @type {boolean} */
      subwikiListsCache[wikiId] = true;
    }), subwikiListsCache;
  }
  /**
   * @return {undefined}
   */
  function $__jsx_onload() {
    document.removeEventListener("DOMContentLoaded", $__jsx_onload, false);
    window.removeEventListener("load", $__jsx_onload, false);
    jQuery.ready();
  }
  /**
   * @return {undefined}
   */
  function Data() {
    Object.defineProperty(this.cache = {}, 0, {
      get : function() {
        return {};
      }
    });
    this.expando = jQuery.expando + Data.uid++;
  }
  /**
   * @param {!Object} elem
   * @param {!Object} name
   * @param {?} data
   * @return {?}
   */
  function dataAttr(elem, name, data) {
    var key;
    if (void 0 === data && 1 === elem.nodeType) {
      if (key = "data-" + name.replace(rupper, "-$1").toLowerCase(), data = elem.getAttribute(key), "string" == typeof data) {
        try {
          data = "true" === data || "false" !== data && ("null" === data ? null : +data + "" === data ? +data : JSON_START.test(data) ? jQuery.parseJSON(data) : data);
        } catch (i) {
        }
        $.set(elem, name, data);
      } else {
        data = void 0;
      }
    }
    return data;
  }
  /**
   * @return {?}
   */
  function returnTrue() {
    return true;
  }
  /**
   * @return {?}
   */
  function returnFalse() {
    return false;
  }
  /**
   * @return {?}
   */
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (e) {
    }
  }
  /**
   * @param {!Object} elem
   * @param {!Element} content
   * @return {?}
   */
  function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
  }
  /**
   * @param {!Element} elem
   * @return {?}
   */
  function text(elem) {
    return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
  }
  /**
   * @param {!Object} e
   * @return {?}
   */
  function createGeneNameGenomicState(e) {
    /** @type {(Array<string>|null)} */
    var params = receivedOpenEvents.exec(e.type);
    return params ? e.type = params[1] : e.removeAttribute("type"), e;
  }
  /**
   * @param {number} elems
   * @param {!NodeList} refElements
   * @return {undefined}
   */
  function setGlobalEval(elems, refElements) {
    /** @type {number} */
    var i = 0;
    var length = elems.length;
    for (; length > i; i++) {
      data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
    }
  }
  /**
   * @param {(Object|string)} src
   * @param {!Object} elem
   * @return {undefined}
   */
  function cloneCopyEvent(src, elem) {
    var i;
    var l;
    var a;
    var pdataOld;
    var pdataCur;
    var b;
    var p;
    var events;
    if (1 === elem.nodeType) {
      if (data_priv.hasData(src) && (pdataOld = data_priv.access(src), pdataCur = data_priv.set(elem, pdataOld), events = pdataOld.events)) {
        delete pdataCur.handle;
        pdataCur.events = {};
        for (a in events) {
          /** @type {number} */
          i = 0;
          l = events[a].length;
          for (; l > i; i++) {
            jQuery.event.add(elem, a, events[a][i]);
          }
        }
      }
      if ($.hasData(src)) {
        b = $.access(src);
        p = jQuery.extend({}, b);
        $.set(elem, p);
      }
    }
  }
  /**
   * @param {!Object} context
   * @param {number} tag
   * @return {?}
   */
  function getAll(context, tag) {
    var n = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
    return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], n) : n;
  }
  /**
   * @param {!Object} src
   * @param {!Object} dest
   * @return {undefined}
   */
  function fixInput(src, dest) {
    var tagName = dest.nodeName.toLowerCase();
    if ("input" === tagName && reg.test(src.type)) {
      dest.checked = src.checked;
    } else {
      if ("input" === tagName || "textarea" === tagName) {
        dest.defaultValue = src.defaultValue;
      }
    }
  }
  /**
   * @param {?} name
   * @param {!Object} doc
   * @return {?}
   */
  function actualDisplay(name, doc) {
    var style;
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body);
    var o = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
    return elem.detach(), o;
  }
  /**
   * @param {?} nodeName
   * @return {?}
   */
  function defaultDisplay(nodeName) {
    var doc = document;
    var display = defaultDisplayMap[nodeName];
    return display || (display = actualDisplay(nodeName, doc), "none" !== display && display || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), doc = iframe[0].contentDocument, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), defaultDisplayMap[nodeName] = display), display;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {!Object} computed
   * @return {?}
   */
  function curCSS(elem, name, computed) {
    var minWidth;
    var width;
    var maxWidth;
    var ret;
    var style = elem.style;
    return computed = computed || getStyles(elem), computed && (ret = computed.getPropertyValue(name) || computed[name]), computed && ("" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), rnumnonpx.test(ret) && namespaces.test(name) && (minWidth = style.width, width = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = minWidth, style.minWidth = width, style.maxWidth = maxWidth)), 
    void 0 !== ret ? ret + "" : ret;
  }
  /**
   * @param {?} conditionFn
   * @param {!Function} hookFn
   * @return {?}
   */
  function addGetHookIf(conditionFn, hookFn) {
    return {
      get : function() {
        return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments);
      }
    };
  }
  /**
   * @param {!Object} style
   * @param {string} name
   * @return {?}
   */
  function vendorPropName(style, name) {
    if (name in style) {
      return name;
    }
    var UserSelect = name[0].toUpperCase() + name.slice(1);
    /** @type {string} */
    var origName = name;
    /** @type {number} */
    var i = prefixes.length;
    for (; i--;) {
      if (name = prefixes[i] + UserSelect, name in style) {
        return name;
      }
    }
    return origName;
  }
  /**
   * @param {!Object} elem
   * @param {!Object} value
   * @param {string} expected
   * @return {?}
   */
  function setPositiveNumber(elem, value, expected) {
    /** @type {(Array<string>|null)} */
    var matches = rnumsplit.exec(value);
    return matches ? Math.max(0, matches[1] - (expected || 0)) + (matches[2] || "px") : value;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {string} extra
   * @param {boolean} isBorderBox
   * @param {!Object} styles
   * @return {?}
   */
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    /** @type {number} */
    var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0;
    /** @type {number} */
    var val = 0;
    for (; 4 > i; i = i + 2) {
      if ("margin" === extra) {
        val = val + jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if ("content" === extra) {
          /** @type {number} */
          val = val - jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if ("margin" !== extra) {
          /** @type {number} */
          val = val - jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val = val + jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if ("padding" !== extra) {
          val = val + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {!Object} extra
   * @return {?}
   */
  function getWidthOrHeight(elem, name, extra) {
    /** @type {boolean} */
    var valueIsBorderBox = true;
    var val = "width" === name ? elem.offsetWidth : elem.offsetHeight;
    var styles = getStyles(elem);
    /** @type {boolean} */
    var isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
    if (0 >= val || null == val) {
      if (val = curCSS(elem, name, styles), (0 > val || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      /** @type {number} */
      val = parseFloat(val) || 0;
    }
    return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
  }
  /**
   * @param {!NodeList} elements
   * @param {number} show
   * @return {?}
   */
  function showHide(elements, show) {
    var display;
    var elem;
    var hidden;
    /** @type {!Array} */
    var values = [];
    /** @type {number} */
    var index = 0;
    var length = elements.length;
    for (; length > index; index++) {
      elem = elements[index];
      if (elem.style) {
        values[index] = data_priv.get(elem, "olddisplay");
        display = elem.style.display;
        if (show) {
          if (!(values[index] || "none" !== display)) {
            /** @type {string} */
            elem.style.display = "";
          }
          if ("" === elem.style.display && toggle(elem)) {
            values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
          }
        } else {
          hidden = toggle(elem);
          if (!("none" === display && hidden)) {
            data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
          }
        }
      }
    }
    /** @type {number} */
    index = 0;
    for (; length > index; index++) {
      elem = elements[index];
      if (elem.style) {
        if (!(show && "none" !== elem.style.display && "" !== elem.style.display)) {
          elem.style.display = show ? values[index] || "" : "none";
        }
      }
    }
    return elements;
  }
  /**
   * @param {!Array} type
   * @param {!Function} key
   * @param {string} object
   * @param {string} end
   * @param {number} easing
   * @return {?}
   */
  function Tween(type, key, object, end, easing) {
    return new Tween.prototype.init(type, key, object, end, easing);
  }
  /**
   * @return {?}
   */
  function createFxNow() {
    return setTimeout(function() {
      fxNow = void 0;
    }), fxNow = jQuery.now();
  }
  /**
   * @param {string} type
   * @param {number} includeWidth
   * @return {?}
   */
  function genFx(type, includeWidth) {
    var which;
    /** @type {number} */
    var i = 0;
    var attrs = {
      height : type
    };
    /** @type {number} */
    includeWidth = includeWidth ? 1 : 0;
    for (; 4 > i; i = i + (2 - includeWidth)) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    return includeWidth && (attrs.opacity = attrs.width = type), attrs;
  }
  /**
   * @param {?} options
   * @param {!Array} value
   * @param {!Object} target
   * @return {?}
   */
  function createTween(options, value, target) {
    var body;
    var r = (entry[value] || []).concat(entry["*"]);
    /** @type {number} */
    var z = 0;
    var y = r.length;
    for (; y > z; z++) {
      if (body = r[z].call(target, value, options)) {
        return body;
      }
    }
  }
  /**
   * @param {?} elem
   * @param {!Object} props
   * @param {!Object} opts
   * @return {undefined}
   */
  function defaultPrefilter(elem, props, opts) {
    var prop;
    var value;
    var matched;
    var tween;
    var hooks;
    var oldfire;
    var display;
    var type;
    var anim = this;
    var orig = {};
    var style = elem.style;
    var hidden = elem.nodeType && toggle(elem);
    var dataShow = data_priv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (null == hooks.unqueued) {
        /** @type {number} */
        hooks.unqueued = 0;
        /** @type {function(): undefined} */
        oldfire = hooks.empty.fire;
        /**
         * @return {undefined}
         */
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (1 === elem.nodeType && ("height" in props || "width" in props)) {
      /** @type {!Array} */
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      display = jQuery.css(elem, "display");
      type = "none" === display ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
      if ("inline" === type && "none" === jQuery.css(elem, "float")) {
        /** @type {string} */
        style.display = "inline-block";
      }
    }
    if (opts.overflow) {
      /** @type {string} */
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    for (prop in props) {
      if (value = props[prop], temporaryStyles.exec(value)) {
        if (delete props[prop], matched = matched || "toggle" === value, value === (hidden ? "hide" : "show")) {
          if ("show" !== value || !dataShow || void 0 === dataShow[prop]) {
            continue;
          }
          /** @type {boolean} */
          hidden = true;
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      } else {
        display = void 0;
      }
    }
    if (jQuery.isEmptyObject(orig)) {
      if ("inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display)) {
        style.display = display;
      }
    } else {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = data_priv.access(elem, "fxshow", {});
      }
      if (matched) {
        /** @type {boolean} */
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function() {
          jQuery(elem).hide();
        });
      }
      anim.done(function() {
        var prop;
        data_priv.remove(elem, "fxshow");
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            /** @type {number} */
            tween.start = "width" === prop || "height" === prop ? 1 : 0;
          }
        }
      }
    }
  }
  /**
   * @param {!Array} props
   * @param {!Array} obj
   * @return {undefined}
   */
  function propFilter(props, obj) {
    var key;
    var name;
    var result;
    var value;
    var hooks;
    for (key in props) {
      if (name = jQuery.camelCase(key), result = obj[name], value = props[key], jQuery.isArray(value) && (result = value[1], value = props[key] = value[0]), key !== name && (props[name] = value, delete props[key]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (key in value) {
          if (!(key in props)) {
            props[key] = value[key];
            obj[key] = result;
          }
        }
      } else {
        obj[name] = result;
      }
    }
  }
  /**
   * @param {!Object} elem
   * @param {!Object} properties
   * @param {!Object} options
   * @return {?}
   */
  function Animation(elem, properties, options) {
    var result;
    var i;
    /** @type {number} */
    var index = 0;
    /** @type {number} */
    var length = animationPrefilters.length;
    var deferred = jQuery.Deferred().always(function() {
      delete tick.elem;
    });
    /**
     * @return {?}
     */
    var tick = function() {
      if (i) {
        return false;
      }
      var currentTime = fxNow || createFxNow();
      /** @type {number} */
      var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
      /** @type {number} */
      var dVS = remaining / animation.duration || 0;
      /** @type {number} */
      var value = 1 - dVS;
      /** @type {number} */
      var index = 0;
      var length = animation.tweens.length;
      for (; length > index; index++) {
        animation.tweens[index].run(value);
      }
      return deferred.notifyWith(elem, [animation, value, remaining]), 1 > value && length ? remaining : (deferred.resolveWith(elem, [animation]), false);
    };
    var animation = deferred.promise({
      elem : elem,
      props : jQuery.extend({}, properties),
      opts : jQuery.extend(true, {
        specialEasing : {}
      }, options),
      originalProperties : properties,
      originalOptions : options,
      startTime : fxNow || createFxNow(),
      duration : options.duration,
      tweens : [],
      createTween : function(prop, end) {
        var result = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        return animation.tweens.push(result), result;
      },
      stop : function(value) {
        /** @type {number} */
        var index = 0;
        var count = value ? animation.tweens.length : 0;
        if (i) {
          return this;
        }
        /** @type {boolean} */
        i = true;
        for (; count > index; index++) {
          animation.tweens[index].run(1);
        }
        return value ? deferred.resolveWith(elem, [animation, value]) : deferred.rejectWith(elem, [animation, value]), this;
      }
    });
    var props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; length > index; index++) {
      if (result = animationPrefilters[index].call(animation, elem, props, animation.opts)) {
        return result;
      }
    }
    return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, {
      elem : elem,
      anim : animation,
      queue : animation.opts.queue
    })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  /**
   * @param {!Object} structure
   * @return {?}
   */
  function addToPrefiltersOrTransports(structure) {
    return function(name, n) {
      if ("string" != typeof name) {
        /** @type {string} */
        n = name;
        /** @type {string} */
        name = "*";
      }
      var type;
      /** @type {number} */
      var ol = 0;
      var o = name.toLowerCase().match(rnotwhite) || [];
      if (jQuery.isFunction(n)) {
        for (; type = o[ol++];) {
          if ("+" === type[0]) {
            type = type.slice(1) || "*";
            (structure[type] = structure[type] || []).unshift(n);
          } else {
            (structure[type] = structure[type] || []).push(n);
          }
        }
      }
    };
  }
  /**
   * @param {!Object} structure
   * @param {?} options
   * @param {!Object} originalOptions
   * @param {?} jqXHR
   * @return {?}
   */
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    /**
     * @param {string} dataType
     * @return {?}
     */
    function inspect(dataType) {
      var selected;
      return inspected[dataType] = true, jQuery.each(structure[dataType] || [], function(canCreateDiscussions, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), false);
      }), selected;
    }
    var inspected = {};
    /** @type {boolean} */
    var seekingTransport = structure === transports;
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  /**
   * @param {?} target
   * @param {?} opts
   * @return {?}
   */
  function ajaxExtend(target, opts) {
    var key;
    var deep;
    var flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in opts) {
      if (void 0 !== opts[key]) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = opts[key];
      }
    }
    return deep && jQuery.extend(true, target, deep), target;
  }
  /**
   * @param {!Object} s
   * @param {!XMLHttpRequest} jqXHR
   * @param {!Array} responses
   * @return {?}
   */
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct;
    var type;
    var finalDataType;
    var firstDataType;
    var contents = s.contents;
    var dataTypes = s.dataTypes;
    for (; "*" === dataTypes[0];) {
      dataTypes.shift();
      if (void 0 === ct) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          /** @type {string} */
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          /** @type {string} */
          firstDataType = type;
        }
      }
      /** @type {(string|undefined)} */
      finalDataType = finalDataType || firstDataType;
    }
    return finalDataType ? (finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]) : void 0;
  }
  /**
   * @param {!Object} s
   * @param {string} response
   * @param {?} jqXHR
   * @param {number} isSuccess
   * @return {?}
   */
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2;
    var current;
    var conv;
    var parts;
    var value;
    var converters = {};
    var resList = s.dataTypes.slice();
    if (resList[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = resList.shift();
    for (; current;) {
      if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !value && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), value = current, current = resList.shift()) {
        if ("*" === current) {
          current = value;
        } else {
          if ("*" !== value && value !== current) {
            if (conv = converters[value + " " + current] || converters["* " + current], !conv) {
              for (conv2 in converters) {
                if (parts = conv2.split(" "), parts[1] === current && (conv = converters[value + " " + parts[0]] || converters["* " + parts[0]])) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else {
                    if (converters[conv2] !== true) {
                      /** @type {string} */
                      current = parts[0];
                      resList.unshift(parts[1]);
                    }
                  }
                  break;
                }
              }
            }
            if (conv !== true) {
              if (conv && s["throws"]) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e) {
                  return {
                    state : "parsererror",
                    error : conv ? e : "No conversion from " + value + " to " + current
                  };
                }
              }
            }
          }
        }
      }
    }
    return {
      state : "success",
      data : response
    };
  }
  /**
   * @param {string} name
   * @param {!Object} object
   * @param {string} value
   * @param {!Function} next
   * @return {undefined}
   */
  function callback(name, object, value, next) {
    var i;
    if (jQuery.isArray(object)) {
      jQuery.each(object, function(_width, body) {
        if (value || testRxp.test(name)) {
          next(name, body);
        } else {
          callback(name + "[" + ("object" == typeof body ? _width : "") + "]", body, value, next);
        }
      });
    } else {
      if (value || "object" !== jQuery.type(object)) {
        next(name, object);
      } else {
        for (i in object) {
          callback(name + "[" + i + "]", object[i], value, next);
        }
      }
    }
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function getWindow(obj) {
    return jQuery.isWindow(obj) ? obj : 9 === obj.nodeType && obj.defaultView;
  }
  /** @type {!Array} */
  var arr = [];
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = arr.slice;
  /** @type {function(this:*, ...*): !Array<?>} */
  var concat = arr.concat;
  /** @type {function(this:IArrayLike<T>, ...T): number} */
  var push = arr.push;
  /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
  var indexOf = arr.indexOf;
  var class2type = {};
  /** @type {function(this:*): string} */
  var toString = class2type.toString;
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = class2type.hasOwnProperty;
  var support = {};
  var document = window.document;
  /** @type {string} */
  var core_version = "2.1.4";
  /**
   * @param {!Array} selector
   * @param {!Function} context
   * @return {?}
   */
  var jQuery = function(selector, context) {
    return new jQuery.fn.init(selector, context);
  };
  /** @type {!RegExp} */
  var regNewline = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  /** @type {!RegExp} */
  var nonAscii = /^-ms-/;
  /** @type {!RegExp} */
  var reCopyright = /-([\da-z])/gi;
  /**
   * @param {?} context
   * @param {string} match
   * @return {?}
   */
  var dashToCapital = function(context, match) {
    return match.toUpperCase();
  };
  jQuery.fn = jQuery.prototype = {
    jquery : core_version,
    constructor : jQuery,
    selector : "",
    length : 0,
    toArray : function() {
      return slice.call(this);
    },
    get : function(num) {
      return null != num ? 0 > num ? this[num + this.length] : this[num] : slice.call(this);
    },
    pushStack : function(item) {
      var ret = jQuery.merge(this.constructor(), item);
      return ret.prevObject = this, ret.context = this.context, ret;
    },
    each : function(fn, context) {
      return jQuery.each(this, fn, context);
    },
    map : function(b) {
      return this.pushStack(jQuery.map(this, function(parent, start) {
        return b.call(parent, start, parent);
      }));
    },
    slice : function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first : function() {
      return this.eq(0);
    },
    last : function() {
      return this.eq(-1);
    },
    eq : function(id) {
      var index = this.length;
      var thisIndex = +id + (0 > id ? index : 0);
      return this.pushStack(thisIndex >= 0 && index > thisIndex ? [this[thisIndex]] : []);
    },
    end : function() {
      return this.prevObject || this.constructor(null);
    },
    push : push,
    sort : arr.sort,
    splice : arr.splice
  };
  /** @type {function(): ?} */
  jQuery.extend = jQuery.fn.extend = function() {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    var target = arguments[0] || {};
    /** @type {number} */
    var i = 1;
    /** @type {number} */
    var l = arguments.length;
    /** @type {boolean} */
    var deep = false;
    if ("boolean" == typeof target) {
      /** @type {boolean} */
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (!("object" == typeof target || jQuery.isFunction(target))) {
      target = {};
    }
    if (i === l) {
      target = this;
      i--;
    }
    for (; l > i; i++) {
      if (null != (options = arguments[i])) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target !== copy) {
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
              if (copyIsArray) {
                /** @type {boolean} */
                copyIsArray = false;
                clone = src && jQuery.isArray(src) ? src : [];
              } else {
                clone = src && jQuery.isPlainObject(src) ? src : {};
              }
              target[name] = jQuery.extend(deep, clone, copy);
            } else {
              if (void 0 !== copy) {
                target[name] = copy;
              }
            }
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando : "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
    isReady : true,
    error : function(type) {
      throw new Error(type);
    },
    noop : function() {
    },
    isFunction : function(obj) {
      return "function" === jQuery.type(obj);
    },
    isArray : Array.isArray,
    isWindow : function(obj) {
      return null != obj && obj === obj.window;
    },
    isNumeric : function(value) {
      return !jQuery.isArray(value) && value - parseFloat(value) + 1 >= 0;
    },
    isPlainObject : function(object) {
      return "object" === jQuery.type(object) && !object.nodeType && !jQuery.isWindow(object) && !(object.constructor && !hasOwn.call(object.constructor.prototype, "isPrototypeOf"));
    },
    isEmptyObject : function(obj) {
      var key;
      for (key in obj) {
        return false;
      }
      return true;
    },
    type : function(name) {
      return null == name ? name + "" : "object" == typeof name || "function" == typeof name ? class2type[toString.call(name)] || "object" : typeof name;
    },
    globalEval : function(code) {
      var script;
      /** @type {function(string): *} */
      var indirect = eval;
      code = jQuery.trim(code);
      if (code) {
        if (1 === code.indexOf("use strict")) {
          script = document.createElement("script");
          /** @type {string} */
          script.text = code;
          document.head.appendChild(script).parentNode.removeChild(script);
        } else {
          indirect(code);
        }
      }
    },
    camelCase : function(string) {
      return string.replace(nonAscii, "ms-").replace(reCopyright, dashToCapital);
    },
    nodeName : function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each : function(obj, callback, a) {
      var data;
      /** @type {number} */
      var key = 0;
      var max = obj.length;
      var isArray = isArraylike(obj);
      if (a) {
        if (isArray) {
          for (; max > key && (data = callback.apply(obj[key], a), data !== false); key++) {
          }
        } else {
          for (key in obj) {
            if (data = callback.apply(obj[key], a), data === false) {
              break;
            }
          }
        }
      } else {
        if (isArray) {
          for (; max > key && (data = callback.call(obj[key], key, obj[key]), data !== false); key++) {
          }
        } else {
          for (key in obj) {
            if (data = callback.call(obj[key], key, obj[key]), data === false) {
              break;
            }
          }
        }
      }
      return obj;
    },
    trim : function(text) {
      return null == text ? "" : (text + "").replace(regNewline, "");
    },
    makeArray : function(arr, results) {
      var ret = results || [];
      return null != arr && (isArraylike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret;
    },
    inArray : function(elem, arr, i) {
      return null == arr ? -1 : indexOf.call(arr, elem, i);
    },
    merge : function(obj, a) {
      /** @type {number} */
      var pivotPosition = +a.length;
      /** @type {number} */
      var k = 0;
      var i = obj.length;
      for (; pivotPosition > k; k++) {
        obj[i++] = a[k];
      }
      return obj.length = i, obj;
    },
    grep : function(obj, fn, options) {
      var editItemKey;
      /** @type {!Array} */
      var a = [];
      /** @type {number} */
      var k = 0;
      var _l = obj.length;
      /** @type {boolean} */
      var missingOption = !options;
      for (; _l > k; k++) {
        /** @type {boolean} */
        editItemKey = !fn(obj[k], k);
        if (editItemKey !== missingOption) {
          a.push(obj[k]);
        }
      }
      return a;
    },
    map : function(obj, f, val) {
      var result;
      /** @type {number} */
      var i = 0;
      var length = obj.length;
      var isArray = isArraylike(obj);
      /** @type {!Array} */
      var values = [];
      if (isArray) {
        for (; length > i; i++) {
          result = f(obj[i], i, val);
          if (null != result) {
            values.push(result);
          }
        }
      } else {
        for (i in obj) {
          result = f(obj[i], i, val);
          if (null != result) {
            values.push(result);
          }
        }
      }
      return concat.apply([], values);
    },
    guid : 1,
    proxy : function(e, c) {
      var b;
      var headArgs;
      var proxy;
      return "string" == typeof c && (b = e[c], c = e, e = b), jQuery.isFunction(e) ? (headArgs = slice.call(arguments, 2), proxy = function() {
        return e.apply(c || this, headArgs.concat(slice.call(arguments)));
      }, proxy.guid = e.guid = e.guid || jQuery.guid++, proxy) : void 0;
    },
    now : Date.now,
    support : support
  });
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(canCreateDiscussions, p_Interval) {
    class2type["[object " + p_Interval + "]"] = p_Interval.toLowerCase();
  });
  var Sizzle = function(window) {
    /**
     * @param {!Object} selector
     * @param {!Object} context
     * @param {!Object} results
     * @param {!Object} seed
     * @return {?}
     */
    function Sizzle(selector, context, results, seed) {
      var match;
      var elem;
      var m;
      var nodeType;
      var i;
      var groups;
      var old;
      var nid;
      var newContext;
      var newSelector;
      if ((context ? context.ownerDocument || context : preferredDoc) !== document && $(context), context = context || document, results = results || [], nodeType = context.nodeType, "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) {
        return results;
      }
      if (!seed && documentIsHTML) {
        if (11 !== nodeType && (match = customSelectorReg.exec(selector))) {
          if (m = match[1]) {
            if (9 === nodeType) {
              if (elem = context.getElementById(m), !elem || !elem.parentNode) {
                return results;
              }
              if (elem.id === m) {
                return results.push(elem), results;
              }
            } else {
              if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                return results.push(elem), results;
              }
            }
          } else {
            if (match[2]) {
              return push.apply(results, context.getElementsByTagName(selector)), results;
            }
            if ((m = match[3]) && support.getElementsByClassName) {
              return push.apply(results, context.getElementsByClassName(m)), results;
            }
          }
        }
        if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          if (nid = old = expando, newContext = context, newSelector = 1 !== nodeType && selector, 1 === nodeType && "object" !== context.nodeName.toLowerCase()) {
            groups = tokenize(selector);
            if (old = context.getAttribute("id")) {
              nid = old.replace(rescape, "\\$&");
            } else {
              context.setAttribute("id", nid);
            }
            /** @type {string} */
            nid = "[id='" + nid + "'] ";
            i = groups.length;
            for (; i--;) {
              /** @type {string} */
              groups[i] = nid + toSelector(groups[i]);
            }
            newContext = IS_HTML_FRAGMENT.test(selector) && testContext(context.parentNode) || context;
            newSelector = groups.join(",");
          }
          if (newSelector) {
            try {
              return push.apply(results, newContext.querySelectorAll(newSelector)), results;
            } catch (m) {
            } finally {
              if (!old) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * @return {?}
     */
    function createCache() {
      /**
       * @param {string} duration
       * @param {?} url
       * @return {?}
       */
      function cache(duration, url) {
        return lengths.push(duration + " ") > Expr.cacheLength && delete cache[lengths.shift()], cache[duration + " "] = url;
      }
      /** @type {!Array} */
      var lengths = [];
      return cache;
    }
    /**
     * @param {!Function} fn
     * @return {?}
     */
    function markFunction(fn) {
      return fn[expando] = true, fn;
    }
    /**
     * @param {!Function} doSubs
     * @return {?}
     */
    function assert(doSubs) {
      var uiElem = document.createElement("div");
      try {
        return !!doSubs(uiElem);
      } catch (n) {
        return false;
      } finally {
        if (uiElem.parentNode) {
          uiElem.parentNode.removeChild(uiElem);
        }
        /** @type {null} */
        uiElem = null;
      }
    }
    /**
     * @param {string} attrs
     * @param {!Function} handler
     * @return {undefined}
     */
    function addHandle(attrs, handler) {
      var arr = attrs.split("|");
      var i = attrs.length;
      for (; i--;) {
        /** @type {!Function} */
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * @param {!Element} a
     * @param {!Element} b
     * @return {?}
     */
    /**
     * @param {!Object} name
     * @return {?}
     */
    function jQuerify(name) {
      return function(section) {
        var type = section.nodeName.toLowerCase();
        return "input" === type && section.type === name;
      };
    }
    /**
     * @param {!Object} type
     * @return {?}
     */
    function createButtonPseudo(type) {
      return function(section) {
        var undefined = section.nodeName.toLowerCase();
        return ("input" === undefined || "button" === undefined) && section.type === type;
      };
    }
    /**
     * @param {!Function} fn
     * @return {?}
     */
    function createPositionalPseudo(fn) {
      return markFunction(function(key) {
        return key = +key, markFunction(function(a, b) {
          var i;
          var k = fn([], a.length, key);
          var l = k.length;
          for (; l--;) {
            if (a[i = k[l]]) {
              /** @type {boolean} */
              a[i] = !(b[i] = a[i]);
            }
          }
        });
      });
    }
    /**
     * @param {!Node} context
     * @return {?}
     */
    function testContext(context) {
      return context && "undefined" != typeof context.getElementsByTagName && context;
    }
    /**
     * @return {undefined}
     */
    function setFilters() {
    }
    /**
     * @param {!Array} text
     * @return {?}
     */
    function toSelector(text) {
      /** @type {number} */
      var i = 0;
      var l = text.length;
      /** @type {string} */
      var selector = "";
      for (; l > i; i++) {
        /** @type {string} */
        selector = selector + text[i].value;
      }
      return selector;
    }
    /**
     * @param {!Function} matcher
     * @param {!Object} combinator
     * @param {string} base
     * @return {?}
     */
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir;
      var checkNonElements = base && "parentNode" === dir;
      /** @type {number} */
      var doneName = done++;
      return combinator.first ? function(elem, stat, context) {
        for (; elem = elem[dir];) {
          if (1 === elem.nodeType || checkNonElements) {
            return matcher(elem, stat, context);
          }
        }
      } : function(elem, context, xml) {
        var oldCache;
        var outerCache;
        /** @type {!Array} */
        var newCache = [dirruns, doneName];
        if (xml) {
          for (; elem = elem[dir];) {
            if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) {
              return true;
            }
          }
        } else {
          for (; elem = elem[dir];) {
            if (1 === elem.nodeType || checkNonElements) {
              if (outerCache = elem[expando] || (elem[expando] = {}), (oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                return newCache[2] = oldCache[2];
              }
              if (outerCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        }
      };
    }
    /**
     * @param {!Object} matchers
     * @return {?}
     */
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        for (; i--;) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    /**
     * @param {!Object} selector
     * @param {!NodeList} root
     * @param {!Object} result
     * @return {?}
     */
    function replace(selector, root, result) {
      /** @type {number} */
      var i = 0;
      var l = root.length;
      for (; l > i; i++) {
        Sizzle(selector, root[i], result);
      }
      return result;
    }
    /**
     * @param {!Array} arr
     * @param {!Object} selector
     * @param {!Object} filter
     * @param {string} context
     * @param {!Object} xml
     * @return {?}
     */
    function filter(arr, selector, filter, context, xml) {
      var elem;
      /** @type {!Array} */
      var result = [];
      /** @type {number} */
      var i = 0;
      var len = arr.length;
      /** @type {boolean} */
      var isDrawLayerVisibled = null != selector;
      for (; len > i; i++) {
        if ((elem = arr[i]) && (!filter || filter(elem, context, xml))) {
          result.push(elem);
          if (isDrawLayerVisibled) {
            selector.push(i);
          }
        }
      }
      return result;
    }
    /**
     * @param {!Object} error
     * @param {!Object} options
     * @param {!Function} callback
     * @param {!Object} element
     * @param {!Object} fn
     * @param {!Object} data
     * @return {?}
     */
    function render(error, options, callback, element, fn, data) {
      return element && !element[expando] && (element = render(element)), fn && !fn[expando] && (fn = render(fn, data)), markFunction(function(e, target, context, config) {
        var key;
        var i;
        var item;
        /** @type {!Array} */
        var obj = [];
        /** @type {!Array} */
        var res = [];
        var el = target.length;
        var args = e || replace(options || "*", context.nodeType ? [context] : context, []);
        var ret = !error || !e && options ? args : filter(args, obj, error, context, config);
        var value = callback ? fn || (e ? error : el || element) ? [] : target : ret;
        if (callback && callback(ret, value, context, config), element) {
          key = filter(value, res);
          element(key, [], context, config);
          i = key.length;
          for (; i--;) {
            if (item = key[i]) {
              /** @type {boolean} */
              value[res[i]] = !(ret[res[i]] = item);
            }
          }
        }
        if (e) {
          if (fn || error) {
            if (fn) {
              /** @type {!Array} */
              key = [];
              i = value.length;
              for (; i--;) {
                if (item = value[i]) {
                  key.push(ret[i] = item);
                }
              }
              fn(null, value = [], key, config);
            }
            i = value.length;
            for (; i--;) {
              if ((item = value[i]) && (key = fn ? indexOf(e, item) : obj[i]) > -1) {
                /** @type {boolean} */
                e[key] = !(target[key] = item);
              }
            }
          }
        } else {
          value = filter(value === target ? value.splice(el, value.length) : value);
          if (fn) {
            fn(null, target, value, config);
          } else {
            push.apply(target, value);
          }
        }
      });
    }
    /**
     * @param {!Array} tokens
     * @return {?}
     */
    function matcherFromTokens(tokens) {
      var checkContext;
      var matcher;
      var j;
      var length = tokens.length;
      var leadingRelative = Expr.relative[tokens[0].type];
      var implicitRelative = leadingRelative || Expr.relative[" "];
      /** @type {number} */
      var i = leadingRelative ? 1 : 0;
      var matchContext = addCombinator(function(elem) {
        return elem === checkContext;
      }, implicitRelative, true);
      var matchAnyContext = addCombinator(function(value) {
        return indexOf(checkContext, value) > -1;
      }, implicitRelative, true);
      /** @type {!Array} */
      var matchers = [function(elem, context, xml) {
        var i = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
        return checkContext = null, i;
      }];
      for (; length > i; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          /** @type {!Array} */
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
            /** @type {number} */
            j = ++i;
            for (; length > j && !Expr.relative[tokens[j].type]; j++) {
            }
            return render(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
              value : " " === tokens[i - 2].type ? "*" : ""
            })).replace(rtrim, "$1"), matcher, j > i && matcherFromTokens(tokens.slice(i, j)), length > j && matcherFromTokens(tokens = tokens.slice(j)), length > j && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    /**
     * @param {!Array} elementMatchers
     * @param {!Array} setMatchers
     * @return {?}
     */
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      /** @type {boolean} */
      var bySet = setMatchers.length > 0;
      /** @type {boolean} */
      var byElement = elementMatchers.length > 0;
      /**
       * @param {!Function} seed
       * @param {string} context
       * @param {?} xml
       * @param {!Object} results
       * @param {!Object} outermost
       * @return {?}
       */
      var superMatcher = function(seed, context, xml, results, outermost) {
        var elem;
        var j;
        var matcher;
        /** @type {number} */
        var matchedCount = 0;
        /** @type {string} */
        var i = "0";
        var unmatched = seed && [];
        /** @type {!Array} */
        var data = [];
        var contextBackup = outermostContext;
        var elems = seed || byElement && Expr.find.TAG("*", outermost);
        var dirrunsUnique = dirruns = dirruns + (null == contextBackup ? 1 : Math.random() || .1);
        var length = elems.length;
        if (outermost) {
          outermostContext = context !== document && context;
        }
        for (; i !== length && null != (elem = elems[i]); i++) {
          if (byElement && elem) {
            /** @type {number} */
            j = 0;
            for (; matcher = elementMatchers[j++];) {
              if (matcher(elem, context, xml)) {
                results.push(elem);
                break;
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
            }
          }
          if (bySet) {
            if (elem = !matcher && elem) {
              matchedCount--;
            }
            if (seed) {
              unmatched.push(elem);
            }
          }
        }
        if (matchedCount = matchedCount + i, bySet && i !== matchedCount) {
          /** @type {number} */
          j = 0;
          for (; matcher = setMatchers[j++];) {
            matcher(unmatched, data, context, xml);
          }
          if (seed) {
            if (matchedCount > 0) {
              for (; i--;) {
                if (!(unmatched[i] || data[i])) {
                  data[i] = pop.call(results);
                }
              }
            }
            data = filter(data);
          }
          push.apply(results, data);
          if (outermost && !seed && data.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        }
        return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
      };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    var i;
    var support;
    var Expr;
    var on;
    var isNative;
    var tokenize;
    var compile;
    var select;
    var outermostContext;
    var sortInput;
    var ret;
    var $;
    var document;
    var docElem;
    var documentIsHTML;
    var rbuggyQSA;
    var rbuggyMatches;
    var matches;
    var contains;
    /** @type {string} */
    var expando = "sizzle" + 1 * new Date;
    var preferredDoc = window.document;
    /** @type {number} */
    var dirruns = 0;
    /** @type {number} */
    var done = 0;
    var classCache = createCache();
    var tokenCache = createCache();
    var compilerCache = createCache();
    /**
     * @param {?} type
     * @param {?} string
     * @return {?}
     */
    var time = function(type, string) {
      return type === string && (ret = true), 0;
    };
    /** @type {number} */
    var V = 1 << 31;
    /** @type {function(this:Object, *): boolean} */
    var hasOwn = {}.hasOwnProperty;
    /** @type {!Array} */
    var arr = [];
    /** @type {function(this:IArrayLike<T>): T} */
    var pop = arr.pop;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var item = arr.push;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var push = arr.push;
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var slice = arr.slice;
    /**
     * @param {string} list
     * @param {!HTMLElement} value
     * @return {?}
     */
    var indexOf = function(list, value) {
      /** @type {number} */
      var i = 0;
      var l = list.length;
      for (; l > i; i++) {
        if (list[i] === value) {
          return i;
        }
      }
      return -1;
    };
    /** @type {string} */
    var booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    /** @type {string} */
    var _test = "[\\x20\\t\\r\\n\\f]";
    /** @type {string} */
    var characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+";
    /** @type {string} */
    var identifier = characterEncoding.replace("w", "w#");
    /** @type {string} */
    var _end2 = "\\[" + _test + "*(" + characterEncoding + ")(?:" + _test + "*([*^$|!~]?=)" + _test + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + _test + "*\\]";
    /** @type {string} */
    var pseudos = ":(" + characterEncoding + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _end2 + ")*)|.*)\\)|)";
    /** @type {!RegExp} */
    var entityEscapeRegExp = new RegExp(_test + "+", "g");
    /** @type {!RegExp} */
    var rtrim = new RegExp("^" + _test + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _test + "+$", "g");
    /** @type {!RegExp} */
    var chunker = new RegExp("^" + _test + "*," + _test + "*");
    /** @type {!RegExp} */
    var rcomma = new RegExp("^" + _test + "*([>+~]|" + _test + ")" + _test + "*");
    /** @type {!RegExp} */
    var reTrimSpaces = new RegExp("=" + _test + "*([^\\]'\"]*?)" + _test + "*\\]", "g");
    /** @type {!RegExp} */
    var rpseudo = new RegExp(pseudos);
    /** @type {!RegExp} */
    var ridentifier = new RegExp("^" + identifier + "$");
    var matchExpr = {
      ID : new RegExp("^#(" + characterEncoding + ")"),
      CLASS : new RegExp("^\\.(" + characterEncoding + ")"),
      TAG : new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
      ATTR : new RegExp("^" + _end2),
      PSEUDO : new RegExp("^" + pseudos),
      CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _test + "*(even|odd|(([+-]|)(\\d*)n|)" + _test + "*(?:([+-]|)" + _test + "*(\\d+)|))" + _test + "*\\)|)", "i"),
      bool : new RegExp("^(?:" + booleans + ")$", "i"),
      needsContext : new RegExp("^" + _test + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _test + "*((?:-\\d)?\\d*)" + _test + "*\\)|)(?=[^-]|$)", "i")
    };
    /** @type {!RegExp} */
    var inputNodeNames = /^(?:input|select|textarea|button)$/i;
    /** @type {!RegExp} */
    var rnoType = /^h\d$/i;
    /** @type {!RegExp} */
    var rnative = /^[^{]+\{\s*\[native \w/;
    /** @type {!RegExp} */
    var customSelectorReg = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    /** @type {!RegExp} */
    var IS_HTML_FRAGMENT = /[+~]/;
    /** @type {!RegExp} */
    var rescape = /'|\\/g;
    /** @type {!RegExp} */
    var value = new RegExp("\\\\([\\da-f]{1,6}" + _test + "?|(" + _test + ")|.)", "ig");
    /**
     * @param {?} from
     * @param {string} tag
     * @param {boolean} escapedWhitespace
     * @return {?}
     */
    var start = function(from, tag, escapedWhitespace) {
      /** @type {number} */
      var high = "0x" + tag - 65536;
      return high !== high || escapedWhitespace ? tag : 0 > high ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
    };
    /**
     * @return {undefined}
     */
    var fn = function() {
      $();
    };
    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (Ne) {
      push = {
        apply : arr.length ? function(type, obj) {
          item.apply(type, slice.call(obj));
        } : function(type, obj) {
          var n = type.length;
          /** @type {number} */
          var objCursor = 0;
          for (; type[n++] = obj[objCursor++];) {
          }
          /** @type {number} */
          type.length = n - 1;
        }
      };
    }
    support = Sizzle.support = {};
    /** @type {function(!Object): ?} */
    isNative = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return !!documentElement && "HTML" !== documentElement.nodeName;
    };
    /** @type {function(!Object): ?} */
    $ = Sizzle.setDocument = function(node) {
      var init;
      var win;
      var doc = node ? node.ownerDocument || node : preferredDoc;
      return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = doc.documentElement, win = doc.defaultView, win && win !== win.top && (win.addEventListener ? win.addEventListener("unload", fn, false) : win.attachEvent && win.attachEvent("onunload", fn)), documentIsHTML = !isNative(doc), support.attributes = assert(function(elm) {
        return elm.className = "i", !elm.getAttribute("className");
      }), support.getElementsByTagName = assert(function(testee) {
        return testee.appendChild(doc.createComment("")), !testee.getElementsByTagName("*").length;
      }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName), support.getById = assert(function(body) {
        return docElem.appendChild(body).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length;
      }), support.getById ? (Expr.find.ID = function(id, elem) {
        if ("undefined" != typeof elem.getElementById && documentIsHTML) {
          var m = elem.getElementById(id);
          return m && m.parentNode ? [m] : [];
        }
      }, Expr.filter.ID = function(view) {
        var name = view.replace(value, start);
        return function(e) {
          return e.getAttribute("id") === name;
        };
      }) : (delete Expr.find.ID, Expr.filter.ID = function(view) {
        var string = view.replace(value, start);
        return function(elem) {
          var token = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
          return token && token.value === string;
        };
      }), Expr.find.TAG = support.getElementsByTagName ? function(v, g) {
        return "undefined" != typeof g.getElementsByTagName ? g.getElementsByTagName(v) : support.qsa ? g.querySelectorAll(v) : void 0;
      } : function(selector, o) {
        var first;
        /** @type {!Array} */
        var tmp = [];
        /** @type {number} */
        var i = 0;
        var results = o.getElementsByTagName(selector);
        if ("*" === selector) {
          for (; first = results[i++];) {
            if (1 === first.nodeType) {
              tmp.push(first);
            }
          }
          return tmp;
        }
        return results;
      }, Expr.find.CLASS = support.getElementsByClassName && function(l, docDom) {
        return documentIsHTML ? docDom.getElementsByClassName(l) : void 0;
      }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function(container) {
        /** @type {string} */
        docElem.appendChild(container).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\f]' msallowcapture=''><option selected=''></option></select>";
        if (container.querySelectorAll("[msallowcapture^='']").length) {
          rbuggyQSA.push("[*^$]=" + _test + "*(?:''|\"\")");
        }
        if (!container.querySelectorAll("[selected]").length) {
          rbuggyQSA.push("\\[" + _test + "*(?:value|" + booleans + ")");
        }
        if (!container.querySelectorAll("[id~=" + expando + "-]").length) {
          rbuggyQSA.push("~=");
        }
        if (!container.querySelectorAll(":checked").length) {
          rbuggyQSA.push(":checked");
        }
        if (!container.querySelectorAll("a#" + expando + "+*").length) {
          rbuggyQSA.push(".#.+[+~]");
        }
      }), assert(function(e) {
        var element = doc.createElement("input");
        element.setAttribute("type", "hidden");
        e.appendChild(element).setAttribute("name", "D");
        if (e.querySelectorAll("[name=d]").length) {
          rbuggyQSA.push("name" + _test + "*[*^$|!~]?=");
        }
        if (!e.querySelectorAll(":enabled").length) {
          rbuggyQSA.push(":enabled", ":disabled");
        }
        e.querySelectorAll("*,:x");
        rbuggyQSA.push(",.*:");
      })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
        support.disconnectedMatch = matches.call(el, "div");
        matches.call(el, "[s!='']:x");
        rbuggyMatches.push("!=", pseudos);
      }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), init = rnative.test(docElem.compareDocumentPosition), contains = init || rnative.test(docElem.contains) ? function(a, b) {
        var adown = 9 === a.nodeType ? a.documentElement : a;
        var bup = b && b.parentNode;
        return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
      } : function(a, b) {
        if (b) {
          for (; b = b.parentNode;) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      }, time = init ? function(a, b) {
        if (a === b) {
          return ret = true, 0;
        }
        /** @type {number} */
        var idx = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return idx ? idx : (idx = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & idx || !support.sortDetached && b.compareDocumentPosition(a) === idx ? a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & idx ? -1 : 1);
      } : function(a, b) {
        if (a === b) {
          return ret = true, 0;
        }
        var cur;
        /** @type {number} */
        var i = 0;
        var aup = a.parentNode;
        var bup = b.parentNode;
        /** @type {!Array} */
        var ap = [a];
        /** @type {!Array} */
        var bp = [b];
        if (!aup || !bup) {
          return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }
        if (aup === bup) {
          return siblingCheck(a, b);
        }
        /** @type {!HTMLElement} */
        cur = a;
        for (; cur = cur.parentNode;) {
          ap.unshift(cur);
        }
        /** @type {!HTMLElement} */
        cur = b;
        for (; cur = cur.parentNode;) {
          bp.unshift(cur);
        }
        for (; ap[i] === bp[i];) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      }, doc) : document;
    };
    /**
     * @param {!Object} type
     * @param {!Object} a
     * @return {?}
     */
    Sizzle.matches = function(type, a) {
      return Sizzle(type, null, null, a);
    };
    /**
     * @param {!Object} elem
     * @param {!Object} selector
     * @return {?}
     */
    Sizzle.matchesSelector = function(elem, selector) {
      if ((elem.ownerDocument || elem) !== document && $(elem), selector = selector.replace(reTrimSpaces, "='$1']"), !(!support.matchesSelector || !documentIsHTML || rbuggyMatches && rbuggyMatches.test(selector) || rbuggyQSA && rbuggyQSA.test(selector))) {
        try {
          var ret = matches.call(elem, selector);
          if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) {
            return ret;
          }
        } catch (i) {
        }
      }
      return Sizzle(selector, document, null, [elem]).length > 0;
    };
    /**
     * @param {!Object} context
     * @param {!Object} item
     * @return {?}
     */
    Sizzle.contains = function(context, item) {
      return (context.ownerDocument || context) !== document && $(context), contains(context, item);
    };
    /**
     * @param {!Object} name
     * @param {string} value
     * @return {?}
     */
    Sizzle.attr = function(name, value) {
      if ((name.ownerDocument || name) !== document) {
        $(name);
      }
      var fn = Expr.attrHandle[value.toLowerCase()];
      var node = fn && hasOwn.call(Expr.attrHandle, value.toLowerCase()) ? fn(name, value, !documentIsHTML) : void 0;
      return void 0 !== node ? node : support.attributes || !documentIsHTML ? name.getAttribute(value) : (node = name.getAttributeNode(value)) && node.specified ? node.value : null;
    };
    /**
     * @param {!Object} type
     * @return {?}
     */
    Sizzle.error = function(type) {
      throw new Error("Syntax error, unrecognized expression: " + type);
    };
    /**
     * @param {!Object} arr
     * @return {?}
     */
    Sizzle.uniqueSort = function(arr) {
      var x;
      /** @type {!Array} */
      var p = [];
      /** @type {number} */
      var j = 0;
      /** @type {number} */
      var i = 0;
      if (ret = !support.detectDuplicates, sortInput = !support.sortStable && arr.slice(0), arr.sort(time), ret) {
        for (; x = arr[i++];) {
          if (x === arr[i]) {
            /** @type {number} */
            j = p.push(i);
          }
        }
        for (; j--;) {
          arr.splice(p[j], 1);
        }
      }
      return sortInput = null, arr;
    };
    /** @type {function(!Element): ?} */
    on = Sizzle.getText = function(d) {
      var val;
      /** @type {string} */
      var s = "";
      /** @type {number} */
      var e = 0;
      var type = d.nodeType;
      if (type) {
        if (1 === type || 9 === type || 11 === type) {
          if ("string" == typeof d.textContent) {
            return d.textContent;
          }
          d = d.firstChild;
          for (; d; d = d.nextSibling) {
            s = s + on(d);
          }
        } else {
          if (3 === type || 4 === type) {
            return d.nodeValue;
          }
        }
      } else {
        for (; val = d[e++];) {
          s = s + on(val);
        }
      }
      return s;
    };
    Expr = Sizzle.selectors = {
      cacheLength : 50,
      createPseudo : markFunction,
      match : matchExpr,
      attrHandle : {},
      find : {},
      relative : {
        ">" : {
          dir : "parentNode",
          first : true
        },
        " " : {
          dir : "parentNode"
        },
        "+" : {
          dir : "previousSibling",
          first : true
        },
        "~" : {
          dir : "previousSibling"
        }
      },
      preFilter : {
        ATTR : function(match) {
          return match[1] = match[1].replace(value, start), match[3] = (match[3] || match[4] || match[5] || "").replace(value, start), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4);
        },
        CHILD : function(match) {
          return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
        },
        PSEUDO : function(match) {
          var excess;
          var unquoted = !match[6] && match[2];
          return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
        }
      },
      filter : {
        TAG : function(elem) {
          var nodeName = elem.replace(value, start).toLowerCase();
          return "*" === elem ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        CLASS : function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + _test + ")" + className + "(" + _test + "|$)")) && classCache(className, function(e) {
            return pattern.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR : function(name, string, value) {
          return function(form) {
            var key = Sizzle.attr(form, name);
            return null == key ? "!=" === string : !string || (key = key + "", "=" === string ? key === value : "!=" === string ? key !== value : "^=" === string ? value && 0 === key.indexOf(value) : "*=" === string ? value && key.indexOf(value) > -1 : "$=" === string ? value && key.slice(-value.length) === value : "~=" === string ? (" " + key.replace(entityEscapeRegExp, " ") + " ").indexOf(value) > -1 : "|=" === string && (key === value || key.slice(0, value.length + 1) === value + "-"));
          };
        },
        CHILD : function(type, what, argument, first, last) {
          /** @type {boolean} */
          var simple = "nth" !== type.slice(0, 3);
          /** @type {boolean} */
          var forward = "last" !== type.slice(-4);
          /** @type {boolean} */
          var isStrict = "of-type" === what;
          return 1 === first && 0 === last ? function(tplDiv) {
            return !!tplDiv.parentNode;
          } : function(elem, n, isParentStrict) {
            var cache;
            var outerCache;
            var node;
            var diff;
            var nodeIndex;
            var start;
            /** @type {string} */
            var dir = simple !== forward ? "nextSibling" : "previousSibling";
            var parent = elem.parentNode;
            var iteratedVal = isStrict && elem.nodeName.toLowerCase();
            /** @type {boolean} */
            var useCache = !isParentStrict && !isStrict;
            if (parent) {
              if (simple) {
                for (; dir;) {
                  /** @type {!Object} */
                  node = elem;
                  for (; node = node[dir];) {
                    if (isStrict ? node.nodeName.toLowerCase() === iteratedVal : 1 === node.nodeType) {
                      return false;
                    }
                  }
                  /** @type {(boolean|string)} */
                  start = dir = "only" === type && !start && "nextSibling";
                }
                return true;
              }
              if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                outerCache = parent[expando] || (parent[expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = cache[0] === dirruns && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                for (; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) {
                  if (1 === node.nodeType && ++diff && node === elem) {
                    /** @type {!Array} */
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                  diff = cache[1];
                } else {
                  for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((isStrict ? node.nodeName.toLowerCase() !== iteratedVal : 1 !== node.nodeType) || !++diff || (useCache && ((node[expando] || (node[expando] = {}))[type] = [dirruns, diff]), node !== elem));) {
                  }
                }
              }
              return diff = diff - last, diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        PSEUDO : function(pseudo, argument) {
          var args;
          var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
            var idx;
            var matched = fn(seed, argument);
            var i = matched.length;
            for (; i--;) {
              idx = indexOf(seed, matched[i]);
              /** @type {boolean} */
              seed[idx] = !(matches[idx] = matched[i]);
            }
          }) : function(responce) {
            return fn(responce, 0, args);
          }) : fn;
        }
      },
      pseudos : {
        not : markFunction(function(selector) {
          /** @type {!Array} */
          var a = [];
          /** @type {!Array} */
          var results = [];
          var matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(a, queue, n, context) {
            var bundle;
            var result = matcher(a, null, context, []);
            var i = a.length;
            for (; i--;) {
              if (bundle = result[i]) {
                /** @type {boolean} */
                a[i] = !(queue[i] = bundle);
              }
            }
          }) : function(sNewObjName, isSlidingUp, context) {
            return a[0] = sNewObjName, matcher(a, null, context, results), a[0] = null, !results.pop();
          };
        }),
        has : markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        contains : markFunction(function(d) {
          return d = d.replace(value, start), function(elem) {
            return (elem.textContent || elem.innerText || on(elem)).indexOf(d) > -1;
          };
        }),
        lang : markFunction(function(lang) {
          return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(value, start).toLowerCase(), function(elem) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-");
              }
            } while ((elem = elem.parentNode) && 1 === elem.nodeType);
            return false;
          };
        }),
        target : function(type) {
          var charListNotLatin = window.location && window.location.hash;
          return charListNotLatin && charListNotLatin.slice(1) === type.id;
        },
        root : function(elem) {
          return elem === docElem;
        },
        focus : function(type) {
          return type === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(type.type || type.href || ~type.tabIndex);
        },
        enabled : function(type) {
          return type.disabled === false;
        },
        disabled : function(elem) {
          return elem.disabled === true;
        },
        checked : function(elem) {
          var custom = elem.nodeName.toLowerCase();
          return "input" === custom && !!elem.checked || "option" === custom && !!elem.selected;
        },
        selected : function(elem) {
          return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === true;
        },
        empty : function(elem) {
          elem = elem.firstChild;
          for (; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent : function(elem) {
          return !Expr.pseudos.empty(elem);
        },
        header : function(elem) {
          return rnoType.test(elem.nodeName);
        },
        input : function(target) {
          return inputNodeNames.test(target.nodeName);
        },
        button : function(elem) {
          var left = elem.nodeName.toLowerCase();
          return "input" === left && "button" === elem.type || "button" === left;
        },
        text : function(elem) {
          var EXT;
          return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (EXT = elem.getAttribute("type")) || "text" === EXT.toLowerCase());
        },
        first : createPositionalPseudo(function() {
          return [0];
        }),
        last : createPositionalPseudo(function(canCreateDiscussions, isSlidingUp) {
          return [isSlidingUp - 1];
        }),
        eq : createPositionalPseudo(function(canCreateDiscussions, dt, max) {
          return [0 > max ? max + dt : max];
        }),
        even : createPositionalPseudo(function(lastshuffle, propValue) {
          /** @type {number} */
          var value = 0;
          for (; propValue > value; value = value + 2) {
            lastshuffle.push(value);
          }
          return lastshuffle;
        }),
        odd : createPositionalPseudo(function(lastshuffle, propValue) {
          /** @type {number} */
          var value = 1;
          for (; propValue > value; value = value + 2) {
            lastshuffle.push(value);
          }
          return lastshuffle;
        }),
        lt : createPositionalPseudo(function(newNodeLists, dt, max) {
          var itemNodeList = 0 > max ? max + dt : max;
          for (; --itemNodeList >= 0;) {
            newNodeLists.push(itemNodeList);
          }
          return newNodeLists;
        }),
        gt : createPositionalPseudo(function(newNodeLists, dt, max) {
          var itemNodeList = 0 > max ? max + dt : max;
          for (; ++itemNodeList < dt;) {
            newNodeLists.push(itemNodeList);
          }
          return newNodeLists;
        })
      }
    };
    Expr.pseudos.nth = Expr.pseudos.eq;
    for (i in{
      radio : true,
      checkbox : true,
      file : true,
      password : true,
      image : true
    }) {
      Expr.pseudos[i] = jQuerify(i);
    }
    for (i in{
      submit : true,
      reset : true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched;
      var match;
      var tokens;
      var type;
      var soFar;
      var groups;
      var preFilters;
      var cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      /** @type {!Object} */
      soFar = selector;
      /** @type {!Array} */
      groups = [];
      preFilters = Expr.preFilter;
      for (; soFar;) {
        if (!matched || (match = chunker.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }
        /** @type {boolean} */
        matched = false;
        if (match = rcomma.exec(soFar)) {
          /** @type {string} */
          matched = match.shift();
          tokens.push({
            value : matched,
            type : match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if (!(!(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value : matched,
              type : type,
              matches : match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    }, compile = Sizzle.compile = function(selector, group) {
      var i;
      /** @type {!Array} */
      var setMatchers = [];
      /** @type {!Array} */
      var elementMatchers = [];
      var cached = compilerCache[selector + " "];
      if (!cached) {
        if (!group) {
          group = tokenize(selector);
        }
        i = group.length;
        for (; i--;) {
          cached = matcherFromTokens(group[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        /** @type {string} */
        cached.selector = selector;
      }
      return cached;
    }, select = Sizzle.select = function(selector, context, results, seed) {
      var i;
      var tokens;
      var token;
      var type;
      var find;
      /** @type {(!Function|boolean)} */
      var compiled = "function" == typeof selector && selector;
      var match = !seed && tokenize(selector = compiled.selector || selector);
      if (results = results || [], 1 === match.length) {
        if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
          if (context = (Expr.find.ID(token.matches[0].replace(value, start), context) || [])[0], !context) {
            return results;
          }
          if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        for (; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
          if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(value, start), IS_HTML_FRAGMENT.test(tokens[0].type) && testContext(context.parentNode) || context))) {
            if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) {
              return push.apply(results, seed), results;
            }
            break;
          }
        }
      }
      return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, IS_HTML_FRAGMENT.test(selector) && testContext(context.parentNode) || context), results;
    }, support.sortStable = expando.split("").sort(time).join("") === expando, support.detectDuplicates = !!ret, $(), support.sortDetached = assert(function(div1) {
      return 1 & div1.compareDocumentPosition(document.createElement("div"));
    }), assert(function(aItem) {
      return aItem.innerHTML = "<a href='#'></a>", "#" === aItem.firstChild.getAttribute("href");
    }) || addHandle("type|href|height|width", function(e, x, res) {
      return res ? void 0 : e.getAttribute(x, "type" === x.toLowerCase() ? 1 : 2);
    }), support.attributes && assert(function(aItem) {
      return aItem.innerHTML = "<input/>", aItem.firstChild.setAttribute("value", ""), "" === aItem.firstChild.getAttribute("value");
    }) || addHandle("value", function(object, canCreateDiscussions, directory) {
      return directory || "input" !== object.nodeName.toLowerCase() ? void 0 : object.defaultValue;
    }), assert(function(e) {
      return null == e.getAttribute("disabled");
    }) || addHandle(booleans, function(elem, name, n) {
      var val;
      return n ? void 0 : elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    }), Sizzle;
  }(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  var rneedsContext = jQuery.expr.match.needsContext;
  /** @type {!RegExp} */
  var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  /** @type {!RegExp} */
  var reFeaturedMethod = /^.[^:#\[\.,]*$/;
  /**
   * @param {!Object} type
   * @param {!Object} value
   * @param {string} name
   * @return {?}
   */
  jQuery.filter = function(type, value, name) {
    var node = value[0];
    return name && (type = ":not(" + type + ")"), 1 === value.length && 1 === node.nodeType ? jQuery.find.matchesSelector(node, type) ? [node] : [] : jQuery.find.matches(type, jQuery.grep(value, function(nodeToInspect) {
      return 1 === nodeToInspect.nodeType;
    }));
  };
  jQuery.fn.extend({
    find : function(selector) {
      var i;
      var len = this.length;
      /** @type {!Array} */
      var ret = [];
      var self = this;
      if ("string" != typeof selector) {
        return this.pushStack(jQuery(selector).filter(function() {
          /** @type {number} */
          i = 0;
          for (; len > i; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      /** @type {number} */
      i = 0;
      for (; len > i; i++) {
        jQuery.find(selector, self[i], ret);
      }
      return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret;
    },
    filter : function(type) {
      return this.pushStack(filter(this, type || [], false));
    },
    not : function(t) {
      return this.pushStack(filter(this, t || [], true));
    },
    is : function(selector) {
      return !!filter(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery;
  /** @type {!RegExp} */
  var customSelectorReg = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  /** @type {function(string, !Object): ?} */
  var init = jQuery.fn.init = function(selector, context) {
    var match;
    var emement;
    if (!selector) {
      return this;
    }
    if ("string" == typeof selector) {
      if (match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : customSelectorReg.exec(selector), !match || !match[1] && context) {
        return !context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);
      }
      if (match[1]) {
        if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
          for (match in context) {
            if (jQuery.isFunction(this[match])) {
              this[match](context[match]);
            } else {
              this.attr(match, context[match]);
            }
          }
        }
        return this;
      }
      return emement = document.getElementById(match[2]), emement && emement.parentNode && (this.length = 1, this[0] = emement), this.context = document, this.selector = selector, this;
    }
    return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? "undefined" != typeof rootjQuery.ready ? rootjQuery.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this));
  };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  /** @type {!RegExp} */
  var hitch_re = /^(?:parents|prev(?:Until|All))/;
  var guaranteedUnique = {
    children : true,
    contents : true,
    next : true,
    prev : true
  };
  jQuery.extend({
    dir : function(elem, dir, until) {
      /** @type {!Array} */
      var matched = [];
      /** @type {boolean} */
      var truncate = void 0 !== until;
      for (; (elem = elem[dir]) && 9 !== elem.nodeType;) {
        if (1 === elem.nodeType) {
          if (truncate && jQuery(elem).is(until)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    },
    sibling : function(n, elem) {
      /** @type {!Array} */
      var r = [];
      for (; n; n = n.nextSibling) {
        if (1 === n.nodeType && n !== elem) {
          r.push(n);
        }
      }
      return r;
    }
  });
  jQuery.fn.extend({
    has : function(target) {
      var targets = jQuery(target, this);
      var l = targets.length;
      return this.filter(function() {
        /** @type {number} */
        var i = 0;
        for (; l > i; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest : function(selector, context) {
      var node;
      /** @type {number} */
      var offset = 0;
      var count = this.length;
      /** @type {!Array} */
      var ret = [];
      var s = rneedsContext.test(selector) || "string" != typeof selector ? jQuery(selector, context || this.context) : 0;
      for (; count > offset; offset++) {
        node = this[offset];
        for (; node && node !== context; node = node.parentNode) {
          if (node.nodeType < 11 && (s ? s.index(node) > -1 : 1 === node.nodeType && jQuery.find.matchesSelector(node, selector))) {
            ret.push(node);
            break;
          }
        }
      }
      return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
    },
    index : function(elem) {
      return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add : function(name, options) {
      return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(name, options))));
    },
    addBack : function(selector) {
      return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  jQuery.each({
    parent : function(row) {
      var n = row.parentNode;
      return n && 11 !== n.nodeType ? n : null;
    },
    parents : function(elem) {
      return jQuery.dir(elem, "parentNode");
    },
    parentsUntil : function(elem, i, until) {
      return jQuery.dir(elem, "parentNode", until);
    },
    next : function(type) {
      return sibling(type, "nextSibling");
    },
    prev : function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll : function(elem) {
      return jQuery.dir(elem, "nextSibling");
    },
    prevAll : function(elem) {
      return jQuery.dir(elem, "previousSibling");
    },
    nextUntil : function(elem, i, until) {
      return jQuery.dir(elem, "nextSibling", until);
    },
    prevUntil : function(elem, i, until) {
      return jQuery.dir(elem, "previousSibling", until);
    },
    siblings : function(elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    },
    children : function(elem) {
      return jQuery.sibling(elem.firstChild);
    },
    contents : function(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    }
  }, function(name, t) {
    /**
     * @param {string} args
     * @param {!Object} fn
     * @return {?}
     */
    jQuery.fn[name] = function(args, fn) {
      var data = jQuery.map(this, t, args);
      return "Until" !== name.slice(-5) && (fn = args), fn && "string" == typeof fn && (data = jQuery.filter(fn, data)), this.length > 1 && (guaranteedUnique[name] || jQuery.unique(data), hitch_re.test(name) && data.reverse()), this.pushStack(data);
    };
  });
  /** @type {!RegExp} */
  var rnotwhite = /\S+/g;
  var optionsCache = {};
  /**
   * @param {!Object} options
   * @return {?}
   */
  jQuery.Callbacks = function(options) {
    options = "string" == typeof options ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
    var memory;
    var process;
    var serializer;
    var min;
    var n;
    var max;
    /** @type {!Array} */
    var val = [];
    /** @type {(Array|boolean)} */
    var list = !options.once && [];
    /**
     * @param {!Object} data
     * @return {undefined}
     */
    var fire = function(data) {
      memory = options.memory && data;
      /** @type {boolean} */
      process = true;
      max = min || 0;
      /** @type {number} */
      min = 0;
      n = val.length;
      /** @type {boolean} */
      serializer = true;
      for (; val && n > max; max++) {
        if (val[max].apply(data[0], data[1]) === false && options.stopOnFalse) {
          /** @type {boolean} */
          memory = false;
          break;
        }
      }
      /** @type {boolean} */
      serializer = false;
      if (val) {
        if (list) {
          if (list.length) {
            fire(list.shift());
          }
        } else {
          if (memory) {
            /** @type {!Array} */
            val = [];
          } else {
            self.disable();
          }
        }
      }
    };
    var self = {
      add : function() {
        if (val) {
          var y = val.length;
          !function add(values) {
            jQuery.each(values, function(canCreateDiscussions, value) {
              var type = jQuery.type(value);
              if ("function" === type) {
                if (!(options.unique && self.has(value))) {
                  val.push(value);
                }
              } else {
                if (value && value.length && "string" !== type) {
                  add(value);
                }
              }
            });
          }(arguments);
          if (serializer) {
            n = val.length;
          } else {
            if (memory) {
              min = y;
              fire(memory);
            }
          }
        }
        return this;
      },
      remove : function() {
        return val && jQuery.each(arguments, function(canCreateDiscussions, t) {
          var index;
          for (; (index = jQuery.inArray(t, val, index)) > -1;) {
            val.splice(index, 1);
            if (serializer) {
              if (n >= index) {
                n--;
              }
              if (max >= index) {
                max--;
              }
            }
          }
        }), this;
      },
      has : function(elem) {
        return elem ? jQuery.inArray(elem, val) > -1 : !(!val || !val.length);
      },
      empty : function() {
        return val = [], n = 0, this;
      },
      disable : function() {
        return val = list = memory = void 0, this;
      },
      disabled : function() {
        return !val;
      },
      lock : function() {
        return list = void 0, memory || self.disable(), this;
      },
      locked : function() {
        return !list;
      },
      fireWith : function(context, args) {
        return !val || process && !list || (args = args || [], args = [context, args.slice ? args.slice() : args], serializer ? list.push(args) : fire(args)), this;
      },
      fire : function() {
        return self.fireWith(this, arguments), this;
      },
      fired : function() {
        return !!process;
      }
    };
    return self;
  };
  jQuery.extend({
    Deferred : function(func) {
      /** @type {!Array} */
      var d = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]];
      /** @type {string} */
      var state = "pending";
      var promise = {
        state : function() {
          return state;
        },
        always : function() {
          return deferred.done(arguments).fail(arguments), this;
        },
        then : function() {
          /** @type {!Arguments} */
          var fns = arguments;
          return jQuery.Deferred(function(newDefer) {
            jQuery.each(d, function(i, tuple) {
              var fn = jQuery.isFunction(fns[i]) && fns[i];
              deferred[tuple[1]](function() {
                var returned = fn && fn.apply(this, arguments);
                if (returned && jQuery.isFunction(returned.promise)) {
                  returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                } else {
                  newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                }
              });
            });
            /** @type {null} */
            fns = null;
          }).promise();
        },
        promise : function(context) {
          return null != context ? jQuery.extend(context, promise) : promise;
        }
      };
      var deferred = {};
      return promise.pipe = promise.then, jQuery.each(d, function(x2, tuple) {
        var list = tuple[2];
        var stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, d[1 ^ x2][2].disable, d[2][2].lock);
        }
        /**
         * @return {?}
         */
        deferred[tuple[0]] = function() {
          return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
    },
    when : function(subordinate) {
      var progressValues;
      var progressContexts;
      var resolveContexts;
      /** @type {number} */
      var i = 0;
      /** @type {!Array<?>} */
      var resolveValues = slice.call(arguments);
      /** @type {number} */
      var length = resolveValues.length;
      /** @type {number} */
      var index = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0;
      var deferred = 1 === index ? subordinate : jQuery.Deferred();
      /**
       * @param {number} i
       * @param {number} ctx
       * @param {number} val
       * @return {?}
       */
      var updateFn = function(i, ctx, val) {
        return function(value) {
          ctx[i] = this;
          val[i] = arguments.length > 1 ? slice.call(arguments) : value;
          if (val === progressValues) {
            deferred.notifyWith(ctx, val);
          } else {
            if (!--index) {
              deferred.resolveWith(ctx, val);
            }
          }
        };
      };
      if (length > 1) {
        /** @type {!Array} */
        progressValues = new Array(length);
        /** @type {!Array} */
        progressContexts = new Array(length);
        /** @type {!Array} */
        resolveContexts = new Array(length);
        for (; length > i; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().done(updateFn(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFn(i, progressContexts, progressValues));
          } else {
            --index;
          }
        }
      }
      return index || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise();
    }
  });
  var readyList;
  /**
   * @param {!Object} key
   * @return {?}
   */
  jQuery.fn.ready = function(key) {
    return jQuery.ready.promise().done(key), this;
  };
  jQuery.extend({
    isReady : false,
    readyWait : 1,
    holdReady : function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready : function(wait) {
      if (!(wait === true ? --jQuery.readyWait : jQuery.isReady)) {
        /** @type {boolean} */
        jQuery.isReady = true;
        if (!(wait !== true && --jQuery.readyWait > 0)) {
          readyList.resolveWith(document, [jQuery]);
          if (jQuery.fn.triggerHandler) {
            jQuery(document).triggerHandler("ready");
            jQuery(document).off("ready");
          }
        }
      }
    }
  });
  /**
   * @param {string} obj
   * @return {?}
   */
  jQuery.ready.promise = function(obj) {
    return readyList || (readyList = jQuery.Deferred(), "complete" === document.readyState ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", $__jsx_onload, false), window.addEventListener("load", $__jsx_onload, false))), readyList.promise(obj);
  };
  jQuery.ready.promise();
  /** @type {function(!Object, !Function, !Object, ?, number, string, boolean): ?} */
  var access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    /** @type {number} */
    var i = 0;
    var len = elems.length;
    /** @type {boolean} */
    var bulk = null == key;
    if ("object" === jQuery.type(key)) {
      /** @type {boolean} */
      chainable = true;
      for (i in key) {
        jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else {
      if (void 0 !== value && (chainable = true, jQuery.isFunction(value) || (raw = true), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, value, arg1) {
        return bulk.call(jQuery(elem), arg1);
      })), fn)) {
        for (; len > i; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
  };
  /**
   * @param {!Object} elem
   * @return {?}
   */
  jQuery.acceptData = function(elem) {
    return 1 === elem.nodeType || 9 === elem.nodeType || !+elem.nodeType;
  };
  /** @type {number} */
  Data.uid = 1;
  /** @type {function(!Object): ?} */
  Data.accepts = jQuery.acceptData;
  Data.prototype = {
    key : function(owner) {
      if (!Data.accepts(owner)) {
        return 0;
      }
      var descriptor = {};
      var unlock = owner[this.expando];
      if (!unlock) {
        /** @type {number} */
        unlock = Data.uid++;
        try {
          descriptor[this.expando] = {
            value : unlock
          };
          Object.defineProperties(owner, descriptor);
        } catch (r) {
          /** @type {number} */
          descriptor[this.expando] = unlock;
          jQuery.extend(owner, descriptor);
        }
      }
      return this.cache[unlock] || (this.cache[unlock] = {}), unlock;
    },
    set : function(name, value, prop) {
      var i;
      var k = this.key(name);
      var el = this.cache[k];
      if ("string" == typeof value) {
        el[value] = prop;
      } else {
        if (jQuery.isEmptyObject(el)) {
          jQuery.extend(this.cache[k], value);
        } else {
          for (i in value) {
            el[i] = value[i];
          }
        }
      }
      return el;
    },
    get : function(name, value) {
      var val = this.cache[this.key(name)];
      return void 0 === value ? val : val[value];
    },
    access : function(value, key, c) {
      var text;
      return void 0 === key || key && "string" == typeof key && void 0 === c ? (text = this.get(value, key), void 0 !== text ? text : this.get(value, jQuery.camelCase(key))) : (this.set(value, key, c), void 0 !== c ? c : key);
    },
    remove : function(owner, key) {
      var i;
      var name;
      var camel;
      var unlock = this.key(owner);
      var cache = this.cache[unlock];
      if (void 0 === key) {
        this.cache[unlock] = {};
      } else {
        if (jQuery.isArray(key)) {
          name = key.concat(key.map(jQuery.camelCase));
        } else {
          camel = jQuery.camelCase(key);
          if (key in cache) {
            /** @type {!Array} */
            name = [key, camel];
          } else {
            name = camel;
            name = name in cache ? [name] : name.match(rnotwhite) || [];
          }
        }
        i = name.length;
        for (; i--;) {
          delete cache[name[i]];
        }
      }
    },
    hasData : function(owner) {
      return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
    },
    discard : function(owner) {
      if (owner[this.expando]) {
        delete this.cache[owner[this.expando]];
      }
    }
  };
  var data_priv = new Data;
  var $ = new Data;
  /** @type {!RegExp} */
  var JSON_START = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  /** @type {!RegExp} */
  var rupper = /([A-Z])/g;
  jQuery.extend({
    hasData : function(elem) {
      return $.hasData(elem) || data_priv.hasData(elem);
    },
    data : function(type, key, name) {
      return $.access(type, key, name);
    },
    removeData : function(elem, name) {
      $.remove(elem, name);
    },
    _data : function(elem, name, data) {
      return data_priv.access(elem, name, data);
    },
    _removeData : function(elem, name) {
      data_priv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data : function(type, value) {
      var w;
      var name;
      var data;
      var elem = this[0];
      var root = elem && elem.attributes;
      if (void 0 === type) {
        if (this.length && (data = $.get(elem), 1 === elem.nodeType && !data_priv.get(elem, "hasDataAttrs"))) {
          w = root.length;
          for (; w--;) {
            if (root[w]) {
              name = root[w].name;
              if (0 === name.indexOf("data-")) {
                name = jQuery.camelCase(name.slice(5));
                dataAttr(elem, name, data[name]);
              }
            }
          }
          data_priv.set(elem, "hasDataAttrs", true);
        }
        return data;
      }
      return "object" == typeof type ? this.each(function() {
        $.set(this, type);
      }) : access(this, function(name) {
        var data;
        var key = jQuery.camelCase(type);
        if (elem && void 0 === name) {
          if (data = $.get(elem, type), void 0 !== data) {
            return data;
          }
          if (data = $.get(elem, key), void 0 !== data) {
            return data;
          }
          if (data = dataAttr(elem, key, void 0), void 0 !== data) {
            return data;
          }
        } else {
          this.each(function() {
            var putRequest = $.get(this, key);
            $.set(this, key, name);
            if (-1 !== type.indexOf("-") && void 0 !== putRequest) {
              $.set(this, type, name);
            }
          });
        }
      }, null, value, arguments.length > 1, null, true);
    },
    removeData : function(key) {
      return this.each(function() {
        $.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue : function(elem, type, data) {
      var q;
      return elem ? (type = (type || "fx") + "queue", q = data_priv.get(elem, type), data && (!q || jQuery.isArray(data) ? q = data_priv.access(elem, type, jQuery.makeArray(data)) : q.push(data)), q || []) : void 0;
    },
    dequeue : function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type);
      var i = queue.length;
      var listener = queue.shift();
      var handle = jQuery._queueHooks(elem, type);
      /**
       * @return {undefined}
       */
      var next = function() {
        jQuery.dequeue(elem, type);
      };
      if ("inprogress" === listener) {
        listener = queue.shift();
        i--;
      }
      if (listener) {
        if ("fx" === type) {
          queue.unshift("inprogress");
        }
        delete handle.stop;
        listener.call(elem, next, handle);
      }
      if (!i && handle) {
        handle.empty.fire();
      }
    },
    _queueHooks : function(elem, type) {
      /** @type {string} */
      var key = type + "queueHooks";
      return data_priv.get(elem, key) || data_priv.access(elem, key, {
        empty : jQuery.Callbacks("once memory").add(function() {
          data_priv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue : function(type, data) {
      /** @type {number} */
      var setter = 2;
      return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if ("fx" === type && "inprogress" !== queue[0]) {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue : function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue : function(type) {
      return this.queue(type || "fx", []);
    },
    promise : function(type, result) {
      var tmp;
      /** @type {number} */
      var r = 1;
      var defer = jQuery.Deferred();
      var elements = this;
      var i = this.length;
      /**
       * @return {undefined}
       */
      var resolve = function() {
        if (!--r) {
          defer.resolveWith(elements, [elements]);
        }
      };
      if ("string" != typeof type) {
        /** @type {string} */
        result = type;
        type = void 0;
      }
      type = type || "fx";
      for (; i--;) {
        tmp = data_priv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          r++;
          tmp.empty.add(resolve);
        }
      }
      return resolve(), defer.promise(result);
    }
  });
  /** @type {string} */
  var FSSource = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  /** @type {!Array} */
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  /**
   * @param {!Object} element
   * @param {!Object} component
   * @return {?}
   */
  var toggle = function(element, component) {
    return element = component || element, "none" === jQuery.css(element, "display") || !jQuery.contains(element.ownerDocument, element);
  };
  /** @type {!RegExp} */
  var reg = /^(?:checkbox|radio)$/i;
  !function() {
    var text_screen = document.createDocumentFragment();
    var t = text_screen.appendChild(document.createElement("div"));
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    t.appendChild(input);
    support.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
    /** @type {string} */
    t.innerHTML = "<textarea>x</textarea>";
    /** @type {boolean} */
    support.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue;
  }();
  /** @type {string} */
  var strundefined = "undefined";
  /** @type {boolean} */
  support.focusinBubbles = "onfocusin" in window;
  /** @type {!RegExp} */
  var SIG_PATTERN = /^key/;
  /** @type {!RegExp} */
  var toggleMaximizeElement = /^(?:mouse|pointer|contextmenu)|click/;
  /** @type {!RegExp} */
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  /** @type {!RegExp} */
  var r = /^([^.]*)(?:\.(.+)|)$/;
  jQuery.event = {
    global : {},
    add : function(name, a, obj, event, selector) {
      var item;
      var eventHandle;
      var tmp;
      var events;
      var i;
      var data;
      var special;
      var handlers;
      var type;
      var h;
      var origType;
      var elemData = data_priv.get(name);
      if (elemData) {
        if (obj.handler) {
          /** @type {!Object} */
          item = obj;
          obj = item.handler;
          selector = item.selector;
        }
        if (!obj.guid) {
          /** @type {number} */
          obj.guid = jQuery.guid++;
        }
        if (!(events = elemData.events)) {
          events = elemData.events = {};
        }
        if (!(eventHandle = elemData.handle)) {
          /** @type {function(!Object): ?} */
          eventHandle = elemData.handle = function(e) {
            return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(name, arguments) : void 0;
          };
        }
        a = (a || "").match(rnotwhite) || [""];
        i = a.length;
        for (; i--;) {
          /** @type {!Array} */
          tmp = r.exec(a[i]) || [];
          type = origType = tmp[1];
          h = (tmp[2] || "").split(".").sort();
          if (type) {
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            data = jQuery.extend({
              type : type,
              origType : origType,
              data : event,
              handler : obj,
              guid : obj.guid,
              selector : selector,
              needsContext : selector && jQuery.expr.match.needsContext.test(selector),
              namespace : h.join(".")
            }, item);
            if (!(handlers = events[type])) {
              /** @type {!Array} */
              handlers = events[type] = [];
              /** @type {number} */
              handlers.delegateCount = 0;
              if (!(special.setup && special.setup.call(name, event, h, eventHandle) !== false)) {
                if (name.addEventListener) {
                  name.addEventListener(type, eventHandle, false);
                }
              }
            }
            if (special.add) {
              special.add.call(name, data);
              if (!data.handler.guid) {
                data.handler.guid = obj.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, data);
            } else {
              handlers.push(data);
            }
            /** @type {boolean} */
            jQuery.event.global[type] = true;
          }
        }
      }
    },
    remove : function(elem, data, scope, selector, view) {
      var j;
      var origCount;
      var tmp;
      var events;
      var i;
      var item;
      var special;
      var handlers;
      var type;
      var h;
      var name;
      var elemData = data_priv.hasData(elem) && data_priv.get(elem);
      if (elemData && (events = elemData.events)) {
        data = (data || "").match(rnotwhite) || [""];
        i = data.length;
        for (; i--;) {
          if (tmp = r.exec(data[i]) || [], type = name = tmp[1], h = (tmp[2] || "").split(".").sort(), type) {
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            for (; j--;) {
              item = handlers[j];
              if (!(!view && name !== item.origType || scope && scope.guid !== item.guid || tmp && !tmp.test(item.namespace) || selector && selector !== item.selector && ("**" !== selector || !item.selector))) {
                handlers.splice(j, 1);
                if (item.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, item);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!(special.teardown && special.teardown.call(elem, h, elemData.handle) !== false)) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          } else {
            for (type in events) {
              jQuery.event.remove(elem, type + data[i], scope, selector, true);
            }
          }
        }
        if (jQuery.isEmptyObject(events)) {
          delete elemData.handle;
          data_priv.remove(elem, "events");
        }
      }
    },
    trigger : function(event, value, elem, data) {
      var i;
      var cur;
      var tmp;
      var bubbleType;
      var ontype;
      var handle;
      var special;
      /** @type {!Array} */
      var eventPath = [elem || document];
      var type = hasOwn.call(event, "type") ? event.type : event;
      var h = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") >= 0 && (h = type.split("."), type = h.shift(), h.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = data ? 2 : 3, event.namespace = h.join("."), event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + 
      "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), value = null == value ? [event] : jQuery.makeArray(value, [event]), special = jQuery.event.special[type] || {}, data || !special.trigger || special.trigger.apply(elem, value) !== false)) {
        if (!data && !special.noBubble && !jQuery.isWindow(elem)) {
          bubbleType = special.delegateType || type;
          if (!rfocusMorph.test(bubbleType + type)) {
            cur = cur.parentNode;
          }
          for (; cur; cur = cur.parentNode) {
            eventPath.push(cur);
            tmp = cur;
          }
          if (tmp === (elem.ownerDocument || document)) {
            eventPath.push(tmp.defaultView || tmp.parentWindow || window);
          }
        }
        /** @type {number} */
        i = 0;
        for (; (cur = eventPath[i++]) && !event.isPropagationStopped();) {
          event.type = i > 1 ? bubbleType : special.bindType || type;
          handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
          if (handle) {
            handle.apply(cur, value);
          }
          handle = ontype && cur[ontype];
          if (handle && handle.apply && jQuery.acceptData(cur)) {
            event.result = handle.apply(cur, value);
            if (event.result === false) {
              event.preventDefault();
            }
          }
        }
        return event.type = type, data || event.isDefaultPrevented() || special._default && special._default.apply(eventPath.pop(), value) !== false || !jQuery.acceptData(elem) || ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)), event.result;
      }
    },
    dispatch : function(event) {
      event = jQuery.event.fix(event);
      var i;
      var j;
      var code;
      var matched;
      var handleObj;
      /** @type {!Array} */
      var handlerQueue = [];
      /** @type {!Array<?>} */
      var data = slice.call(arguments);
      var handlers = (data_priv.get(this, "events") || {})[event.type] || [];
      var special = jQuery.event.special[event.type] || {};
      if (data[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== false) {
        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
        /** @type {number} */
        i = 0;
        for (; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
          event.currentTarget = matched.elem;
          /** @type {number} */
          j = 0;
          for (; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
            if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              code = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, data);
              if (void 0 !== code && (event.result = code) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
        return special.postDispatch && special.postDispatch.call(this, event), event.result;
      }
    },
    handlers : function(event, handlers) {
      var j;
      var matches;
      var selector;
      var handleObj;
      /** @type {!Array} */
      var handlerQueue = [];
      var delegateCount = handlers.delegateCount;
      var cur = event.target;
      if (delegateCount && cur.nodeType && (!event.button || "click" !== event.type)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.disabled !== true || "click" !== event.type) {
            /** @type {!Array} */
            matches = [];
            /** @type {number} */
            j = 0;
            for (; delegateCount > j; j++) {
              handleObj = handlers[j];
              /** @type {string} */
              selector = handleObj.selector + " ";
              if (void 0 === matches[selector]) {
                matches[selector] = handleObj.needsContext ? jQuery(selector, this).index(cur) >= 0 : jQuery.find(selector, this, null, [cur]).length;
              }
              if (matches[selector]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem : cur,
                handlers : matches
              });
            }
          }
        }
      }
      return delegateCount < handlers.length && handlerQueue.push({
        elem : this,
        handlers : handlers.slice(delegateCount)
      }), handlerQueue;
    },
    props : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks : {},
    keyHooks : {
      props : "char charCode key keyCode".split(" "),
      filter : function(type, obj) {
        return null == type.which && (type.which = null != obj.charCode ? obj.charCode : obj.keyCode), type;
      }
    },
    mouseHooks : {
      props : "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter : function(type, options) {
        var eventDoc;
        var doc;
        var body;
        var buttons = options.button;
        return null == type.pageX && null != options.clientX && (eventDoc = type.target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body, type.pageX = options.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), type.pageY = options.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), type.which || void 0 === buttons || (type.which = 
        1 & buttons ? 1 : 2 & buttons ? 3 : 4 & buttons ? 2 : 0), type;
      }
    },
    fix : function(event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i;
      var prop;
      var copy;
      var type = event.type;
      /** @type {!Object} */
      var e = event;
      var fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = toggleMaximizeElement.test(type) ? this.mouseHooks : SIG_PATTERN.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(e);
      i = copy.length;
      for (; i--;) {
        prop = copy[i];
        event[prop] = e[prop];
      }
      return event.target || (event.target = document), 3 === event.target.nodeType && (event.target = event.target.parentNode), fixHook.filter ? fixHook.filter(event, e) : event;
    },
    special : {
      load : {
        noBubble : true
      },
      focus : {
        trigger : function() {
          return this !== safeActiveElement() && this.focus ? (this.focus(), false) : void 0;
        },
        delegateType : "focusin"
      },
      blur : {
        trigger : function() {
          return this === safeActiveElement() && this.blur ? (this.blur(), false) : void 0;
        },
        delegateType : "focusout"
      },
      click : {
        trigger : function() {
          return "checkbox" === this.type && this.click && jQuery.nodeName(this, "input") ? (this.click(), false) : void 0;
        },
        _default : function(type) {
          return jQuery.nodeName(type.target, "a");
        }
      },
      beforeunload : {
        postDispatch : function(event) {
          if (void 0 !== event.result && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    },
    simulate : function(eventName, event, type, options) {
      var e = jQuery.extend(new jQuery.Event, type, {
        type : eventName,
        isSimulated : true,
        originalEvent : {}
      });
      if (options) {
        jQuery.event.trigger(e, null, event);
      } else {
        jQuery.event.dispatch.call(event, e);
      }
      if (e.isDefaultPrevented()) {
        type.preventDefault();
      }
    }
  };
  /**
   * @param {!Object} elem
   * @param {!Object} type
   * @param {?} fn
   * @return {undefined}
   */
  jQuery.removeEvent = function(elem, type, fn) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, fn, false);
    }
  };
  /**
   * @param {!Object} src
   * @param {!Object} event
   * @return {?}
   */
  jQuery.Event = function(src, event) {
    return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === false ? returnTrue : returnFalse) : this.type = src, event && jQuery.extend(this, event), this.timeStamp = src && src.timeStamp || jQuery.now(), void(this[jQuery.expando] = true)) : new jQuery.Event(src, event);
  };
  jQuery.Event.prototype = {
    isDefaultPrevented : returnFalse,
    isPropagationStopped : returnFalse,
    isImmediatePropagationStopped : returnFalse,
    preventDefault : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isDefaultPrevented = returnTrue;
      if (e && e.preventDefault) {
        e.preventDefault();
      }
    },
    stopPropagation : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isPropagationStopped = returnTrue;
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isImmediatePropagationStopped = returnTrue;
      if (e && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter : "mouseover",
    mouseleave : "mouseout",
    pointerenter : "pointerover",
    pointerleave : "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType : fix,
      bindType : fix,
      handle : function(event) {
        var _ref12;
        var elem = this;
        var related = event.relatedTarget;
        var handleObj = event.handleObj;
        return (!related || related !== elem && !jQuery.contains(elem, related)) && (event.type = handleObj.origType, _ref12 = handleObj.handler.apply(this, arguments), event.type = fix), _ref12;
      }
    };
  });
  if (!support.focusinBubbles) {
    jQuery.each({
      focus : "focusin",
      blur : "focusout"
    }, function(orig, name) {
      /**
       * @param {!Object} event
       * @return {undefined}
       */
      var handler = function(event) {
        jQuery.event.simulate(name, event.target, jQuery.event.fix(event), true);
      };
      jQuery.event.special[name] = {
        setup : function() {
          var doc = this.ownerDocument || this;
          var aggFuncNames = data_priv.access(doc, name);
          if (!aggFuncNames) {
            doc.addEventListener(orig, handler, true);
          }
          data_priv.access(doc, name, (aggFuncNames || 0) + 1);
        },
        teardown : function() {
          var doc = this.ownerDocument || this;
          /** @type {number} */
          var data = data_priv.access(doc, name) - 1;
          if (data) {
            data_priv.access(doc, name, data);
          } else {
            doc.removeEventListener(orig, handler, true);
            data_priv.remove(doc, name);
          }
        }
      };
    });
  }
  jQuery.fn.extend({
    on : function(value, key, name, callback, one) {
      var handler;
      var type;
      if ("object" == typeof value) {
        if ("string" != typeof key) {
          name = name || key;
          key = void 0;
        }
        for (type in value) {
          this.on(type, key, name, value[type], one);
        }
        return this;
      }
      if (null == name && null == callback ? (callback = key, name = key = void 0) : null == callback && ("string" == typeof key ? (callback = name, name = void 0) : (callback = name, name = key, key = void 0)), callback === false) {
        /** @type {function(): ?} */
        callback = returnFalse;
      } else {
        if (!callback) {
          return this;
        }
      }
      return 1 === one && (handler = callback, callback = function(type) {
        return jQuery().off(type), handler.apply(this, arguments);
      }, callback.guid = handler.guid || (handler.guid = jQuery.guid++)), this.each(function() {
        jQuery.event.add(this, value, callback, name, key);
      });
    },
    one : function(event, selector, context, callback) {
      return this.on(event, selector, context, callback, 1);
    },
    off : function(types, callback, handler) {
      var handleObj;
      var type;
      if (types && types.preventDefault && types.handleObj) {
        return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
      }
      if ("object" == typeof types) {
        for (type in types) {
          this.off(type, callback, types[type]);
        }
        return this;
      }
      return (callback === false || "function" == typeof callback) && (handler = callback, callback = void 0), handler === false && (handler = returnFalse), this.each(function() {
        jQuery.event.remove(this, types, handler, callback);
      });
    },
    trigger : function(type, obj) {
      return this.each(function() {
        jQuery.event.trigger(type, obj, this);
      });
    },
    triggerHandler : function(type, callback) {
      var value = this[0];
      return value ? jQuery.event.trigger(type, callback, value, true) : void 0;
    }
  });
  /** @type {!RegExp} */
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
  /** @type {!RegExp} */
  var inviewObserver = /<([\w:]+)/;
  /** @type {!RegExp} */
  var re_commas = /<|&#?\w+;/;
  /** @type {!RegExp} */
  var trueRE = /<(?:script|style|link)/i;
  /** @type {!RegExp} */
  var partten = /checked\s*(?:[^=]|=\s*.checked.)/i;
  /** @type {!RegExp} */
  var opacityRe = /^$|\/(?:java|ecma)script/i;
  /** @type {!RegExp} */
  var receivedOpenEvents = /^true\/(.*)/;
  /** @type {!RegExp} */
  var rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  var wrapMap = {
    option : [1, "<select multiple='multiple'>", "</select>"],
    thead : [1, "<table>", "</table>"],
    col : [2, "<table><colgroup>", "</colgroup></table>"],
    tr : [2, "<table><tbody>", "</tbody></table>"],
    td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default : [0, "", ""]
  };
  /** @type {!Array} */
  wrapMap.optgroup = wrapMap.option;
  /** @type {!Array} */
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  /** @type {!Array} */
  wrapMap.th = wrapMap.td;
  jQuery.extend({
    clone : function(elem, n, array) {
      var i;
      var l;
      var srcElements;
      var destElements;
      var clone = elem.cloneNode(true);
      var inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        /** @type {number} */
        i = 0;
        l = srcElements.length;
        for (; l > i; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (n) {
        if (array) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          /** @type {number} */
          i = 0;
          l = srcElements.length;
          for (; l > i; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
    },
    buildFragment : function(nodes, context, result, elems) {
      var elem;
      var tmp;
      var tag;
      var zeroSizeMaxes;
      var ret;
      var zeroSizeMax;
      var fragment = context.createDocumentFragment();
      /** @type {!Array} */
      var results = [];
      /** @type {number} */
      var i = 0;
      var l = nodes.length;
      for (; l > i; i++) {
        if (elem = nodes[i], elem || 0 === elem) {
          if ("object" === jQuery.type(elem)) {
            jQuery.merge(results, elem.nodeType ? [elem] : elem);
          } else {
            if (re_commas.test(elem)) {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (inviewObserver.exec(elem) || ["", ""])[1].toLowerCase();
              zeroSizeMaxes = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = zeroSizeMaxes[1] + elem.replace(rxhtmlTag, "<$1></$2>") + zeroSizeMaxes[2];
              zeroSizeMax = zeroSizeMaxes[0];
              for (; zeroSizeMax--;) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(results, tmp.childNodes);
              tmp = fragment.firstChild;
              /** @type {string} */
              tmp.textContent = "";
            } else {
              results.push(context.createTextNode(elem));
            }
          }
        }
      }
      /** @type {string} */
      fragment.textContent = "";
      /** @type {number} */
      i = 0;
      for (; elem = results[i++];) {
        if ((!elems || -1 === jQuery.inArray(elem, elems)) && (ret = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), ret && setGlobalEval(tmp), result)) {
          /** @type {number} */
          zeroSizeMax = 0;
          for (; elem = tmp[zeroSizeMax++];) {
            if (opacityRe.test(elem.type || "")) {
              result.push(elem);
            }
          }
        }
      }
      return fragment;
    },
    cleanData : function(elems) {
      var data;
      var elem;
      var type;
      var key;
      var special = jQuery.event.special;
      /** @type {number} */
      var i = 0;
      for (; void 0 !== (elem = elems[i]); i++) {
        if (jQuery.acceptData(elem) && (key = elem[data_priv.expando], key && (data = data_priv.cache[key]))) {
          if (data.events) {
            for (type in data.events) {
              if (special[type]) {
                jQuery.event.remove(elem, type);
              } else {
                jQuery.removeEvent(elem, type, data.handle);
              }
            }
          }
          if (data_priv.cache[key]) {
            delete data_priv.cache[key];
          }
        }
        delete $.cache[elem[$.expando]];
      }
    }
  });
  jQuery.fn.extend({
    text : function(value) {
      return access(this, function(value) {
        return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append : function() {
      return this.domManip(arguments, function(elem) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend : function() {
      return this.domManip(arguments, function(elem) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before : function() {
      return this.domManip(arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after : function() {
      return this.domManip(arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    remove : function(selector, keepData) {
      var elem;
      var elems = selector ? jQuery.filter(selector, this) : this;
      /** @type {number} */
      var i = 0;
      for (; null != (elem = elems[i]); i++) {
        if (!(keepData || 1 !== elem.nodeType)) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }
      return this;
    },
    empty : function() {
      var elem;
      /** @type {number} */
      var i = 0;
      for (; null != (elem = this[i]); i++) {
        if (1 === elem.nodeType) {
          jQuery.cleanData(getAll(elem, false));
          /** @type {string} */
          elem.textContent = "";
        }
      }
      return this;
    },
    clone : function(c, i) {
      return c = null != c && c, i = null == i ? c : i, this.map(function() {
        return jQuery.clone(this, c, i);
      });
    },
    html : function(value) {
      return access(this, function(value) {
        var elem = this[0] || {};
        /** @type {number} */
        var endIdx = 0;
        var i = this.length;
        if (void 0 === value && 1 === elem.nodeType) {
          return elem.innerHTML;
        }
        if ("string" == typeof value && !trueRE.test(value) && !wrapMap[(inviewObserver.exec(value) || ["", ""])[1].toLowerCase()]) {
          /** @type {string} */
          value = value.replace(rxhtmlTag, "<$1></$2>");
          try {
            for (; i > endIdx; endIdx++) {
              elem = this[endIdx] || {};
              if (1 === elem.nodeType) {
                jQuery.cleanData(getAll(elem, false));
                /** @type {string} */
                elem.innerHTML = value;
              }
            }
            /** @type {number} */
            elem = 0;
          } catch (i) {
          }
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith : function() {
      var arg = arguments[0];
      return this.domManip(arguments, function(o) {
        arg = this.parentNode;
        jQuery.cleanData(getAll(this));
        if (arg) {
          arg.replaceChild(o, this);
        }
      }), arg && (arg.length || arg.nodeType) ? this : this.remove();
    },
    detach : function(elem) {
      return this.remove(elem, true);
    },
    domManip : function(args, callback) {
      /** @type {!Array<?>} */
      args = concat.apply([], args);
      var fragment;
      var first;
      var e;
      var n;
      var node;
      var elem;
      /** @type {number} */
      var i = 0;
      var l = this.length;
      var $appts = this;
      /** @type {number} */
      var iNoClone = l - 1;
      var str = args[0];
      var searchDir = jQuery.isFunction(str);
      if (searchDir || l > 1 && "string" == typeof str && !support.checkClone && partten.test(str)) {
        return this.each(function(index) {
          var self = $appts.eq(index);
          if (searchDir) {
            args[0] = str.call(this, index, self.html());
          }
          self.domManip(args, callback);
        });
      }
      if (l && (fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first)) {
        e = jQuery.map(getAll(fragment, "script"), text);
        n = e.length;
        for (; l > i; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (n) {
              jQuery.merge(e, getAll(node, "script"));
            }
          }
          callback.call(this[i], node, i);
        }
        if (n) {
          elem = e[e.length - 1].ownerDocument;
          jQuery.map(e, createGeneNameGenomicState);
          /** @type {number} */
          i = 0;
          for (; n > i; i++) {
            node = e[i];
            if (opacityRe.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(elem, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
              }
            }
          }
        }
      }
      return this;
    }
  });
  jQuery.each({
    appendTo : "append",
    prependTo : "prepend",
    insertBefore : "before",
    insertAfter : "after",
    replaceAll : "replaceWith"
  }, function(original, n) {
    /**
     * @param {!Array} td
     * @return {?}
     */
    jQuery.fn[original] = function(td) {
      var what;
      /** @type {!Array} */
      var nodes = [];
      var cells = jQuery(td);
      /** @type {number} */
      var last = cells.length - 1;
      /** @type {number} */
      var i = 0;
      for (; last >= i; i++) {
        what = i === last ? this : this.clone(true);
        jQuery(cells[i])[n](what);
        push.apply(nodes, what.get());
      }
      return this.pushStack(nodes);
    };
  });
  var iframe;
  var defaultDisplayMap = {};
  /** @type {!RegExp} */
  var namespaces = /^margin/;
  /** @type {!RegExp} */
  var rnumnonpx = new RegExp("^(" + FSSource + ")(?!px)[a-z%]+$", "i");
  /**
   * @param {!Object} node
   * @return {?}
   */
  var getStyles = function(node) {
    return node.ownerDocument.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null);
  };
  !function() {
    /**
     * @return {undefined}
     */
    function computeStyleTests() {
      /** @type {string} */
      div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
      /** @type {string} */
      div.innerHTML = "";
      documentFragment.appendChild(element);
      var t = window.getComputedStyle(div, null);
      /** @type {boolean} */
      n = "1%" !== t.top;
      /** @type {boolean} */
      r = "4px" === t.width;
      documentFragment.removeChild(element);
    }
    var n;
    var r;
    var documentFragment = document.documentElement;
    var element = document.createElement("div");
    var div = document.createElement("div");
    if (div.style) {
      /** @type {string} */
      div.style.backgroundClip = "content-box";
      /** @type {string} */
      div.cloneNode(true).style.backgroundClip = "";
      /** @type {boolean} */
      support.clearCloneStyle = "content-box" === div.style.backgroundClip;
      /** @type {string} */
      element.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
      element.appendChild(div);
      if (window.getComputedStyle) {
        jQuery.extend(support, {
          pixelPosition : function() {
            return computeStyleTests(), n;
          },
          boxSizingReliable : function() {
            return null == r && computeStyleTests(), r;
          },
          reliableMarginRight : function() {
            var t;
            var marginDiv = div.appendChild(document.createElement("div"));
            return marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", documentFragment.appendChild(element), t = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight), documentFragment.removeChild(element), div.removeChild(marginDiv), t;
          }
        });
      }
    }
  }();
  /**
   * @param {!Object} elem
   * @param {!Array} options
   * @param {!Function} value
   * @param {!Array} params
   * @return {?}
   */
  jQuery.swap = function(elem, options, value, params) {
    var ret;
    var prop;
    var originObject = {};
    for (prop in options) {
      originObject[prop] = elem.style[prop];
      elem.style[prop] = options[prop];
    }
    ret = value.apply(elem, params || []);
    for (prop in options) {
      elem.style[prop] = originObject[prop];
    }
    return ret;
  };
  /** @type {!RegExp} */
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
  /** @type {!RegExp} */
  var rnumsplit = new RegExp("^(" + FSSource + ")(.*)$", "i");
  /** @type {!RegExp} */
  var startsWithSo = new RegExp("^([+-])=(" + FSSource + ")", "i");
  var props = {
    position : "absolute",
    visibility : "hidden",
    display : "block"
  };
  var cssNormalTransform = {
    letterSpacing : "0",
    fontWeight : "400"
  };
  /** @type {!Array} */
  var prefixes = ["Webkit", "O", "Moz", "ms"];
  jQuery.extend({
    cssHooks : {
      opacity : {
        get : function(elem, value) {
          if (value) {
            var to = curCSS(elem, "opacity");
            return "" === to ? "1" : to;
          }
        }
      }
    },
    cssNumber : {
      columnCount : true,
      fillOpacity : true,
      flexGrow : true,
      flexShrink : true,
      fontWeight : true,
      lineHeight : true,
      opacity : true,
      order : true,
      orphans : true,
      widows : true,
      zIndex : true,
      zoom : true
    },
    cssProps : {
      "float" : "cssFloat"
    },
    style : function(elem, name, value, extra) {
      if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
        var ret;
        var type;
        var hooks;
        var origName = jQuery.camelCase(name);
        var style = elem.style;
        return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value ? hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, false, extra)) ? ret : style[name] : (type = typeof value, "string" === type && (ret = startsWithSo.exec(value)) && (value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), type = "number"), void(null != value && value === value && ("number" !== 
        type || jQuery.cssNumber[origName] || (value = value + "px"), support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)) || (style[name] = value))));
      }
    },
    css : function(value, name, key, styles) {
      var val;
      var arg;
      var desc;
      var origName = jQuery.camelCase(name);
      return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(value.style, origName)), desc = jQuery.cssHooks[name] || jQuery.cssHooks[origName], desc && "get" in desc && (val = desc.get(value, true, key)), void 0 === val && (val = curCSS(value, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === key || key ? (arg = parseFloat(val), key === true || jQuery.isNumeric(arg) ? arg || 0 : val) : val;
    }
  });
  jQuery.each(["height", "width"], function(canCreateDiscussions, name) {
    jQuery.cssHooks[name] = {
      get : function(elem, value, fn) {
        return value ? rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? jQuery.swap(elem, props, function() {
          return getWidthOrHeight(elem, name, fn);
        }) : getWidthOrHeight(elem, name, fn) : void 0;
      },
      set : function(elem, value, extra) {
        var styles = extra && getStyles(elem);
        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, "border-box" === jQuery.css(elem, "boxSizing", false, styles), styles) : 0);
      }
    };
  });
  jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, extra) {
    return extra ? jQuery.swap(elem, {
      display : "inline-block"
    }, curCSS, [elem, "marginRight"]) : void 0;
  });
  jQuery.each({
    margin : "",
    padding : "",
    border : "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand : function(data) {
        /** @type {number} */
        var i = 0;
        var expanded = {};
        /** @type {!Array} */
        var stops = "string" == typeof data ? data.split(" ") : [data];
        for (; 4 > i; i++) {
          expanded[prefix + cssExpand[i] + suffix] = stops[i] || stops[i - 2] || stops[0];
        }
        return expanded;
      }
    };
    if (!namespaces.test(prefix)) {
      /** @type {function(!Object, !Object, string): ?} */
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css : function(name, value) {
      return access(this, function(elem, name, undefined) {
        var styles;
        var l;
        var map = {};
        /** @type {number} */
        var i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          l = name.length;
          for (; l > i; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return void 0 !== undefined ? jQuery.style(elem, name, undefined) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show : function() {
      return showHide(this, true);
    },
    hide : function() {
      return showHide(this);
    },
    toggle : function(state) {
      return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
        if (toggle(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  /** @type {function(!Array, !Function, string, string, number): ?} */
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor : Tween,
    init : function(elem, options, prop, end, easing, unit) {
      /** @type {string} */
      this.elem = elem;
      /** @type {string} */
      this.prop = prop;
      this.easing = easing || "swing";
      /** @type {!Object} */
      this.options = options;
      this.start = this.now = this.cur();
      /** @type {number} */
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur : function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run : function(percent) {
      var eased;
      var hooks = Tween.propHooks[this.prop];
      return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default : {
      get : function(s) {
        var charset;
        return null == s.elem[s.prop] || s.elem.style && null != s.elem.style[s.prop] ? (charset = jQuery.css(s.elem, s.prop, ""), charset && "auto" !== charset ? charset : 0) : s.elem[s.prop];
      },
      set : function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else {
          if (tween.elem.style && (null != tween.elem.style[jQuery.cssProps[tween.prop]] || jQuery.cssHooks[tween.prop])) {
            jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
          } else {
            tween.elem[tween.prop] = tween.now;
          }
        }
      }
    }
  };
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set : function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear : function(p) {
      return p;
    },
    swing : function(p) {
      return .5 - Math.cos(p * Math.PI) / 2;
    }
  };
  /** @type {function(string, !Object, string, number, !Object, !Object): undefined} */
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow;
  var initializeCheckTimer;
  /** @type {!RegExp} */
  var temporaryStyles = /^(?:toggle|show|hide)$/;
  /** @type {!RegExp} */
  var rfxnum = new RegExp("^(?:([+-])=|)(" + FSSource + ")([a-z%]*)$", "i");
  /** @type {!RegExp} */
  var rrun = /queueHooks$/;
  /** @type {!Array} */
  var animationPrefilters = [defaultPrefilter];
  var entry = {
    "*" : [function(prop, value) {
      var tween = this.createTween(prop, value);
      var target = tween.cur();
      /** @type {(Array<string>|null)} */
      var parts = rfxnum.exec(value);
      /** @type {string} */
      var unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px");
      var start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && rfxnum.exec(jQuery.css(tween.elem, prop));
      /** @type {number} */
      var scale = 1;
      /** @type {number} */
      var u = 20;
      if (start && start[3] !== unit) {
        unit = unit || start[3];
        /** @type {!Array} */
        parts = parts || [];
        /** @type {number} */
        start = +target || 1;
        do {
          /** @type {(number|string)} */
          scale = scale || ".5";
          /** @type {number} */
          start = start / scale;
          jQuery.style(tween.elem, prop, start + unit);
        } while (scale !== (scale = tween.cur() / target) && 1 !== scale && --u);
      }
      return parts && (start = tween.start = +start || +target || 0, tween.unit = unit, tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]), tween;
    }]
  };
  jQuery.Animation = jQuery.extend(Animation, {
    tweener : function(props, callback) {
      if (jQuery.isFunction(props)) {
        /** @type {!Object} */
        callback = props;
        /** @type {!Array} */
        props = ["*"];
      } else {
        props = props.split(" ");
      }
      var prop;
      /** @type {number} */
      var x = 0;
      var y = props.length;
      for (; y > x; x++) {
        prop = props[x];
        entry[prop] = entry[prop] || [];
        entry[prop].unshift(callback);
      }
    },
    prefilter : function(callback, options) {
      if (options) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }
  });
  /**
   * @param {!Object} speed
   * @param {!Object} easing
   * @param {!Object} fn
   * @return {?}
   */
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
      complete : fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration : speed,
      easing : fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, (null == opt.queue || opt.queue === true) && (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    }, opt;
  };
  jQuery.fn.extend({
    fadeTo : function(fn, target, duration, callback) {
      return this.filter(toggle).css("opacity", 0).show().end().animate({
        opacity : target
      }, fn, duration, callback);
    },
    animate : function(type, key, value, callback) {
      var empty = jQuery.isEmptyObject(type);
      var optall = jQuery.speed(key, value, callback);
      /**
       * @return {undefined}
       */
      var doAnimation = function() {
        var anim = Animation(this, jQuery.extend({}, type), optall);
        if (empty || data_priv.get(this, "finish")) {
          anim.stop(true);
        }
      };
      return doAnimation.finish = doAnimation, empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop : function(type, t, x) {
      /**
       * @param {!Object} hooks
       * @return {undefined}
       */
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(x);
      };
      return "string" != typeof type && (x = t, t = type, type = void 0), t && type !== false && this.queue(type || "fx", []), this.each(function() {
        /** @type {boolean} */
        var E = true;
        /** @type {(boolean|string)} */
        var index = null != type && type + "queueHooks";
        /** @type {!Array} */
        var timers = jQuery.timers;
        var data = data_priv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        /** @type {number} */
        index = timers.length;
        for (; index--;) {
          if (!(timers[index].elem !== this || null != type && timers[index].queue !== type)) {
            timers[index].anim.stop(x);
            /** @type {boolean} */
            E = false;
            timers.splice(index, 1);
          }
        }
        if (E || !x) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish : function(type) {
      return type !== false && (type = type || "fx"), this.each(function() {
        var index;
        var data = data_priv.get(this);
        var queue = data[type + "queue"];
        var hooks = data[type + "queueHooks"];
        /** @type {!Array} */
        var timers = jQuery.timers;
        var length = queue ? queue.length : 0;
        /** @type {boolean} */
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        /** @type {number} */
        index = timers.length;
        for (; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        /** @type {number} */
        index = 0;
        for (; length > index; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(canCreateDiscussions, name) {
    var cssFn = jQuery.fn[name];
    /**
     * @param {?} x
     * @param {undefined} speed
     * @param {undefined} callback
     * @return {?}
     */
    jQuery.fn[name] = function(x, speed, callback) {
      return null == x || "boolean" == typeof x ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), x, speed, callback);
    };
  });
  jQuery.each({
    slideDown : genFx("show"),
    slideUp : genFx("hide"),
    slideToggle : genFx("toggle"),
    fadeIn : {
      opacity : "show"
    },
    fadeOut : {
      opacity : "hide"
    },
    fadeToggle : {
      opacity : "toggle"
    }
  }, function(original, name) {
    /**
     * @param {undefined} fn
     * @param {undefined} speed
     * @param {undefined} callback
     * @return {?}
     */
    jQuery.fn[original] = function(fn, speed, callback) {
      return this.animate(name, fn, speed, callback);
    };
  });
  /** @type {!Array} */
  jQuery.timers = [];
  /**
   * @return {undefined}
   */
  jQuery.fx.tick = function() {
    var timer;
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var timers = jQuery.timers;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!(timer() || timers[i] !== timer)) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = void 0;
  };
  /**
   * @param {?} timer
   * @return {undefined}
   */
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  /** @type {number} */
  jQuery.fx.interval = 13;
  /**
   * @return {undefined}
   */
  jQuery.fx.start = function() {
    if (!initializeCheckTimer) {
      /** @type {number} */
      initializeCheckTimer = setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  /**
   * @return {undefined}
   */
  jQuery.fx.stop = function() {
    clearInterval(initializeCheckTimer);
    /** @type {null} */
    initializeCheckTimer = null;
  };
  jQuery.fx.speeds = {
    slow : 600,
    fast : 200,
    _default : 400
  };
  /**
   * @param {string} time
   * @param {string} type
   * @return {?}
   */
  jQuery.fn.delay = function(time, type) {
    return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(fn, incoming_item) {
      /** @type {number} */
      var timer = setTimeout(fn, time);
      /**
       * @return {undefined}
       */
      incoming_item.stop = function() {
        clearTimeout(timer);
      };
    });
  };
  (function() {
    var input = document.createElement("input");
    var select = document.createElement("select");
    var opt = select.appendChild(document.createElement("option"));
    /** @type {string} */
    input.type = "checkbox";
    /** @type {boolean} */
    support.checkOn = "" !== input.value;
    support.optSelected = opt.selected;
    /** @type {boolean} */
    select.disabled = true;
    /** @type {boolean} */
    support.optDisabled = !opt.disabled;
    input = document.createElement("input");
    /** @type {string} */
    input.value = "t";
    /** @type {string} */
    input.type = "radio";
    /** @type {boolean} */
    support.radioValue = "t" === input.value;
  })();
  var Nothing;
  var result;
  var attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr : function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr : function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr : function(name, value, type) {
      var hooks;
      var attr;
      var undefined = name.nodeType;
      if (name && 3 !== undefined && 8 !== undefined && 2 !== undefined) {
        return typeof name.getAttribute === strundefined ? jQuery.prop(name, value, type) : (1 === undefined && jQuery.isXMLDoc(name) || (value = value.toLowerCase(), hooks = jQuery.attrHooks[value] || (jQuery.expr.match.bool.test(value) ? result : Nothing)), void 0 === type ? hooks && "get" in hooks && null !== (attr = hooks.get(name, value)) ? attr : (attr = jQuery.find.attr(name, value), null == attr ? void 0 : attr) : null !== type ? hooks && "set" in hooks && void 0 !== (attr = hooks.set(name, 
        type, value)) ? attr : (name.setAttribute(value, type + ""), type) : void jQuery.removeAttr(name, value));
      }
    },
    removeAttr : function(name, value) {
      var type;
      var event;
      /** @type {number} */
      var curr = 0;
      var matches = value && value.match(rnotwhite);
      if (matches && 1 === name.nodeType) {
        for (; type = matches[curr++];) {
          event = jQuery.propFix[type] || type;
          if (jQuery.expr.match.bool.test(type)) {
            /** @type {boolean} */
            name[event] = false;
          }
          name.removeAttribute(type);
        }
      }
    },
    attrHooks : {
      type : {
        set : function(element, value) {
          if (!support.radioValue && "radio" === value && jQuery.nodeName(element, "input")) {
            var n = element.value;
            return element.setAttribute("type", value), n && (element.value = n), value;
          }
        }
      }
    }
  });
  result = {
    set : function(elem, value, type) {
      return value === false ? jQuery.removeAttr(elem, type) : elem.setAttribute(type, type), type;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(canCreateDiscussions, name) {
    var defineStatic = attrHandle[name] || jQuery.find.attr;
    /**
     * @param {undefined} Class
     * @param {string} name
     * @param {number} value
     * @return {?}
     */
    attrHandle[name] = function(Class, name, value) {
      var ret;
      var handle;
      return value || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != defineStatic(Class, name, value) ? name.toLowerCase() : null, attrHandle[name] = handle), ret;
    };
  });
  /** @type {!RegExp} */
  var inputNodeNames = /^(?:input|select|textarea|button)$/i;
  jQuery.fn.extend({
    prop : function(type, value) {
      return access(this, jQuery.prop, type, value, arguments.length > 1);
    },
    removeProp : function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    propFix : {
      "for" : "htmlFor",
      "class" : "className"
    },
    prop : function(elem, name, value) {
      var ret;
      var hooks;
      var o;
      var type = elem.nodeType;
      if (elem && 3 !== type && 8 !== type && 2 !== type) {
        return o = 1 !== type || !jQuery.isXMLDoc(elem), o && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
      }
    },
    propHooks : {
      tabIndex : {
        get : function(target) {
          return target.hasAttribute("tabindex") || inputNodeNames.test(target.nodeName) || target.href ? target.tabIndex : -1;
        }
      }
    }
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get : function(e) {
        var elem = e.parentNode;
        return elem && elem.parentNode && elem.parentNode.selectedIndex, null;
      }
    };
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  /** @type {!RegExp} */
  var rclass = /[\t\r\n\f]/g;
  jQuery.fn.extend({
    addClass : function(name) {
      var zeroSizeMaxes;
      var elem;
      var value;
      var zeroSizeMax;
      var callbackCount;
      var className;
      /** @type {(boolean|string)} */
      var a = "string" == typeof name && name;
      /** @type {number} */
      var l = 0;
      var i = this.length;
      if (jQuery.isFunction(name)) {
        return this.each(function(cur) {
          jQuery(this).addClass(name.call(this, cur, this.className));
        });
      }
      if (a) {
        zeroSizeMaxes = (name || "").match(rnotwhite) || [];
        for (; i > l; l++) {
          if (elem = this[l], value = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ")) {
            /** @type {number} */
            callbackCount = 0;
            for (; zeroSizeMax = zeroSizeMaxes[callbackCount++];) {
              if (value.indexOf(" " + zeroSizeMax + " ") < 0) {
                /** @type {string} */
                value = value + (zeroSizeMax + " ");
              }
            }
            className = jQuery.trim(value);
            if (elem.className !== className) {
              elem.className = className;
            }
          }
        }
      }
      return this;
    },
    removeClass : function(name) {
      var zeroSizeMaxes;
      var elem;
      var content;
      var zeroSizeMax;
      var callbackCount;
      var finalValue;
      /** @type {(boolean|string)} */
      var a = 0 === arguments.length || "string" == typeof name && name;
      /** @type {number} */
      var l = 0;
      var i = this.length;
      if (jQuery.isFunction(name)) {
        return this.each(function(i) {
          jQuery(this).removeClass(name.call(this, i, this.className));
        });
      }
      if (a) {
        zeroSizeMaxes = (name || "").match(rnotwhite) || [];
        for (; i > l; l++) {
          if (elem = this[l], content = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "")) {
            /** @type {number} */
            callbackCount = 0;
            for (; zeroSizeMax = zeroSizeMaxes[callbackCount++];) {
              for (; content.indexOf(" " + zeroSizeMax + " ") >= 0;) {
                /** @type {string} */
                content = content.replace(" " + zeroSizeMax + " ", " ");
              }
            }
            finalValue = name ? jQuery.trim(content) : "";
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }
      return this;
    },
    toggleClass : function(value, stateVal) {
      /** @type {string} */
      var type = typeof value;
      return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : this.each(jQuery.isFunction(value) ? function(i) {
        jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
      } : function() {
        if ("string" === type) {
          var root;
          /** @type {number} */
          var r = 0;
          var i = jQuery(this);
          var roots = value.match(rnotwhite) || [];
          for (; root = roots[r++];) {
            if (i.hasClass(root)) {
              i.removeClass(root);
            } else {
              i.addClass(root);
            }
          }
        } else {
          if (type === strundefined || "boolean" === type) {
            if (this.className) {
              data_priv.set(this, "__className__", this.className);
            }
            this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
          }
        }
      });
    },
    hasClass : function(name) {
      /** @type {string} */
      var t = " " + name + " ";
      /** @type {number} */
      var i = 0;
      var l = this.length;
      for (; l > i; i++) {
        if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(rclass, " ").indexOf(t) >= 0) {
          return true;
        }
      }
      return false;
    }
  });
  /** @type {!RegExp} */
  var a = /\r/g;
  jQuery.fn.extend({
    val : function(content) {
      var hooks;
      var value;
      var m;
      var elem = this[0];
      return arguments.length ? (m = jQuery.isFunction(content), this.each(function(elem) {
        var value;
        if (1 === this.nodeType) {
          value = m ? content.call(this, elem, jQuery(this).val()) : content;
          if (null == value) {
            /** @type {string} */
            value = "";
          } else {
            if ("number" == typeof value) {
              /** @type {string} */
              value = value + "";
            } else {
              if (jQuery.isArray(value)) {
                value = jQuery.map(value, function(value) {
                  return null == value ? "" : value + "";
                });
              }
            }
          }
          hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
          if (!(hooks && "set" in hooks && void 0 !== hooks.set(this, value, "value"))) {
            this.value = value;
          }
        }
      })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && void 0 !== (value = hooks.get(elem, "value")) ? value : (value = elem.value, "string" == typeof value ? value.replace(a, "") : null == value ? "" : value)) : void 0;
    }
  });
  jQuery.extend({
    valHooks : {
      option : {
        get : function(val) {
          var uri = jQuery.find.attr(val, "value");
          return null != uri ? uri : jQuery.trim(jQuery.text(val));
        }
      },
      select : {
        get : function(obj) {
          var t;
          var option;
          var options = obj.options;
          var position = obj.selectedIndex;
          /** @type {boolean} */
          var after = "select-one" === obj.type || 0 > position;
          /** @type {(Array|null)} */
          var id = after ? null : [];
          var item = after ? position + 1 : options.length;
          var name = 0 > position ? item : after ? position : 0;
          for (; item > name; name++) {
            if (option = options[name], !(!option.selected && name !== position || (support.optDisabled ? option.disabled : null !== option.getAttribute("disabled")) || option.parentNode.disabled && jQuery.nodeName(option.parentNode, "optgroup"))) {
              if (t = jQuery(option).val(), after) {
                return t;
              }
              id.push(t);
            }
          }
          return id;
        },
        set : function(elem, value) {
          var outputFn;
          var option;
          var options = elem.options;
          var result = jQuery.makeArray(value);
          var i = options.length;
          for (; i--;) {
            option = options[i];
            if (option.selected = jQuery.inArray(option.value, result) >= 0) {
              /** @type {boolean} */
              outputFn = true;
            }
          }
          return outputFn || (elem.selectedIndex = -1), result;
        }
      }
    }
  });
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {
      set : function(elem, value) {
        return jQuery.isArray(value) ? elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0 : void 0;
      }
    };
    if (!support.checkOn) {
      /**
       * @param {!Object} elem
       * @return {?}
       */
      jQuery.valHooks[this].get = function(elem) {
        return null === elem.getAttribute("value") ? "on" : elem.value;
      };
    }
  });
  jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(canCreateDiscussions, name) {
    /**
     * @param {undefined} callback
     * @param {undefined} fn
     * @return {?}
     */
    jQuery.fn[name] = function(callback, fn) {
      return arguments.length > 0 ? this.on(name, null, callback, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover : function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    },
    bind : function(type, name, fn) {
      return this.on(type, null, name, fn);
    },
    unbind : function(type, fn) {
      return this.off(type, null, fn);
    },
    delegate : function(type, event, fn, callback) {
      return this.on(event, type, fn, callback);
    },
    undelegate : function(selector, event, fn) {
      return 1 === arguments.length ? this.off(selector, "**") : this.off(event, selector || "**", fn);
    }
  });
  var widgetUniqueIDIndex = jQuery.now();
  /** @type {!RegExp} */
  var rquery = /\?/;
  /**
   * @param {string} data
   * @return {?}
   */
  jQuery.parseJSON = function(data) {
    return JSON.parse(data + "");
  };
  /**
   * @param {string} data
   * @return {?}
   */
  jQuery.parseXML = function(data) {
    var xml;
    var parser;
    if (!data || "string" != typeof data) {
      return null;
    }
    try {
      /** @type {!DOMParser} */
      parser = new DOMParser;
      /** @type {(Document|null)} */
      xml = parser.parseFromString(data, "text/xml");
    } catch (r) {
      xml = void 0;
    }
    return (!xml || xml.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + data), xml;
  };
  /** @type {!RegExp} */
  var savedRegExp = /#.*$/;
  /** @type {!RegExp} */
  var rts = /([?&])_=[^&]*/;
  /** @type {!RegExp} */
  var emojiExpr = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  /** @type {!RegExp} */
  var initialRe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
  /** @type {!RegExp} */
  var re = /^(?:GET|HEAD)$/;
  /** @type {!RegExp} */
  var jsre = /^\/\//;
  /** @type {!RegExp} */
  var moveRegex = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/;
  var prefilters = {};
  var transports = {};
  /** @type {string} */
  var bt = "*/".concat("*");
  var ajaxLocation = window.location.href;
  /** @type {!Array} */
  var names = moveRegex.exec(ajaxLocation.toLowerCase()) || [];
  jQuery.extend({
    active : 0,
    lastModified : {},
    etag : {},
    ajaxSettings : {
      url : ajaxLocation,
      type : "GET",
      isLocal : initialRe.test(names[1]),
      global : true,
      processData : true,
      async : true,
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      accepts : {
        "*" : bt,
        text : "text/plain",
        html : "text/html",
        xml : "application/xml, text/xml",
        json : "application/json, text/javascript"
      },
      contents : {
        xml : /xml/,
        html : /html/,
        json : /json/
      },
      responseFields : {
        xml : "responseXML",
        text : "responseText",
        json : "responseJSON"
      },
      converters : {
        "* text" : String,
        "text html" : true,
        "text json" : jQuery.parseJSON,
        "text xml" : jQuery.parseXML
      },
      flatOptions : {
        url : true,
        context : true
      }
    },
    ajaxSetup : function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
    ajaxTransport : addToPrefiltersOrTransports(transports),
    ajax : function(url, options) {
      /**
       * @param {number} status
       * @param {!Object} nativeStatusText
       * @param {!Array} responses
       * @param {!Object} headers
       * @return {undefined}
       */
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess;
        var success;
        var error;
        var response;
        var modified;
        /** @type {!Object} */
        var statusText = nativeStatusText;
        if (2 !== signed) {
          /** @type {number} */
          signed = 2;
          if (_takingTooLongTimeout) {
            clearTimeout(_takingTooLongTimeout);
          }
          transport = void 0;
          str = headers || "";
          /** @type {number} */
          jqXHR.readyState = status > 0 ? 4 : 0;
          /** @type {boolean} */
          isSuccess = status >= 200 && 300 > status || 304 === status;
          if (responses) {
            response = ajaxHandleResponses(s, jqXHR, responses);
          }
          response = ajaxConvert(s, response, jqXHR, isSuccess);
          if (isSuccess) {
            if (s.ifModified) {
              modified = jqXHR.getResponseHeader("Last-Modified");
              if (modified) {
                jQuery.lastModified[cacheURL] = modified;
              }
              modified = jqXHR.getResponseHeader("etag");
              if (modified) {
                jQuery.etag[cacheURL] = modified;
              }
            }
            if (204 === status || "HEAD" === s.type) {
              /** @type {string} */
              statusText = "nocontent";
            } else {
              if (304 === status) {
                /** @type {string} */
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                /** @type {boolean} */
                isSuccess = !error;
              }
            }
          } else {
            error = statusText;
            if (status || !statusText) {
              /** @type {string} */
              statusText = "error";
              if (0 > status) {
                /** @type {number} */
                status = 0;
              }
            }
          }
          /** @type {number} */
          jqXHR.status = status;
          /** @type {string} */
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(node, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(node, [jqXHR, statusText, error]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = void 0;
          if (l) {
            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
          }
          completeDeferred.fireWith(node, [jqXHR, statusText]);
          if (l) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!--jQuery.active) {
              jQuery.event.trigger("ajaxStop");
            }
          }
        }
      }
      if ("object" == typeof url) {
        /** @type {!Object} */
        options = url;
        url = void 0;
      }
      options = options || {};
      var transport;
      var cacheURL;
      var str;
      var n;
      var _takingTooLongTimeout;
      var stops;
      var l;
      var i;
      var s = jQuery.ajaxSetup({}, options);
      var node = s.context || s;
      var globalEventContext = s.context && (node.nodeType || node.jquery) ? jQuery(node) : jQuery.event;
      var deferred = jQuery.Deferred();
      var completeDeferred = jQuery.Callbacks("once memory");
      var statusCode = s.statusCode || {};
      var p = {};
      var requestHeadersNames = {};
      /** @type {number} */
      var signed = 0;
      /** @type {string} */
      var status = "canceled";
      var jqXHR = {
        readyState : 0,
        getResponseHeader : function(header) {
          var i;
          if (2 === signed) {
            if (!n) {
              n = {};
              for (; i = emojiExpr.exec(str);) {
                /** @type {string} */
                n[i[1].toLowerCase()] = i[2];
              }
            }
            i = n[header.toLowerCase()];
          }
          return null == i ? null : i;
        },
        getAllResponseHeaders : function() {
          return 2 === signed ? str : null;
        },
        setRequestHeader : function(name, value) {
          var lname = name.toLowerCase();
          return signed || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, p[name] = value), this;
        },
        overrideMimeType : function(type) {
          return signed || (s.mimeType = type), this;
        },
        statusCode : function(map) {
          var tmp;
          if (map) {
            if (2 > signed) {
              for (tmp in map) {
                /** @type {!Array} */
                statusCode[tmp] = [statusCode[tmp], map[tmp]];
              }
            } else {
              jqXHR.always(map[jqXHR.status]);
            }
          }
          return this;
        },
        abort : function(type) {
          var statusText = type || status;
          return transport && transport.abort(statusText), done(0, statusText), this;
        }
      };
      if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(savedRegExp, "").replace(jsre, names[1] + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain && (stops = moveRegex.exec(s.url.toLowerCase()), s.crossDomain = !(!stops || stops[1] === names[1] && stops[2] === 
      names[2] && (stops[3] || ("http:" === stops[1] ? "80" : "443")) === (names[3] || ("http:" === names[1] ? "80" : "443")))), s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === signed) {
        return jqXHR;
      }
      l = jQuery.event && s.global;
      if (l && 0 === jQuery.active++) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      /** @type {boolean} */
      s.hasContent = !re.test(s.type);
      /** @type {string} */
      cacheURL = s.url;
      if (!s.hasContent) {
        if (s.data) {
          /** @type {string} */
          cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          /** @type {string} */
          s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + widgetUniqueIDIndex++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + widgetUniqueIDIndex++;
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(node, jqXHR, s) === false || 2 === signed)) {
        return jqXHR.abort();
      }
      /** @type {string} */
      status = "abort";
      for (i in{
        success : 1,
        error : 1,
        complete : 1
      }) {
        jqXHR[i](s[i]);
      }
      if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
        /** @type {number} */
        jqXHR.readyState = 1;
        if (l) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (s.async && s.timeout > 0) {
          /** @type {number} */
          _takingTooLongTimeout = setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          /** @type {number} */
          signed = 1;
          transport.send(p, done);
        } catch (success) {
          if (!(2 > signed)) {
            throw success;
          }
          done(-1, success);
        }
      } else {
        done(-1, "No Transport");
      }
      return jqXHR;
    },
    getJSON : function(data, callback, name) {
      return jQuery.get(data, callback, name, "json");
    },
    getScript : function(name, callback) {
      return jQuery.get(name, void 0, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(canCreateDiscussions, method) {
    /**
     * @param {string} logErrorUrl
     * @param {!Object} p
     * @param {!Object} color
     * @param {!Object} type
     * @return {?}
     */
    jQuery[method] = function(logErrorUrl, p, color, type) {
      return jQuery.isFunction(p) && (type = type || color, color = p, p = void 0), jQuery.ajax({
        url : logErrorUrl,
        type : method,
        dataType : type,
        data : p,
        success : color
      });
    };
  });
  /**
   * @param {string} url
   * @return {?}
   */
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url : url,
      type : "GET",
      dataType : "script",
      async : false,
      global : false,
      "throws" : true
    });
  };
  jQuery.fn.extend({
    wrapAll : function(html) {
      var t;
      return jQuery.isFunction(html) ? this.each(function(i) {
        jQuery(this).wrapAll(html.call(this, i));
      }) : (this[0] && (t = jQuery(html, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        var elem = this;
        for (; elem.firstElementChild;) {
          elem = elem.firstElementChild;
        }
        return elem;
      }).append(this)), this);
    },
    wrapInner : function(html) {
      return this.each(jQuery.isFunction(html) ? function(i) {
        jQuery(this).wrapInner(html.call(this, i));
      } : function() {
        var t = jQuery(this);
        var contents = t.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          t.append(html);
        }
      });
    },
    wrap : function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap : function() {
      return this.parent().each(function() {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  /**
   * @param {!Object} name
   * @return {?}
   */
  jQuery.expr.filters.hidden = function(name) {
    return name.offsetWidth <= 0 && name.offsetHeight <= 0;
  };
  /**
   * @param {!Object} elem
   * @return {?}
   */
  jQuery.expr.filters.visible = function(elem) {
    return !jQuery.expr.filters.hidden(elem);
  };
  /** @type {!RegExp} */
  var REGEX_ESCAPE_EXPR = /%20/g;
  /** @type {!RegExp} */
  var testRxp = /\[\]$/;
  /** @type {!RegExp} */
  var allDoubleQuoteRE = /\r?\n/g;
  /** @type {!RegExp} */
  var reHasHexPrefix = /^(?:submit|button|image|reset|file)$/i;
  /** @type {!RegExp} */
  var rsubmittable = /^(?:input|select|textarea|keygen)/i;
  /**
   * @param {?} obj
   * @param {string} name
   * @return {?}
   */
  jQuery.param = function(obj, name) {
    var property;
    /** @type {!Array} */
    var displayUsedBy = [];
    /**
     * @param {?} e
     * @param {string} value
     * @return {undefined}
     */
    var add = function(e, value) {
      value = jQuery.isFunction(value) ? value() : null == value ? "" : value;
      /** @type {string} */
      displayUsedBy[displayUsedBy.length] = encodeURIComponent(e) + "=" + encodeURIComponent(value);
    };
    if (void 0 === name && (name = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(obj) || obj.jquery && !jQuery.isPlainObject(obj)) {
      jQuery.each(obj, function() {
        add(this.name, this.value);
      });
    } else {
      for (property in obj) {
        callback(property, obj[property], name, add);
      }
    }
    return displayUsedBy.join("&").replace(REGEX_ESCAPE_EXPR, "+");
  };
  jQuery.fn.extend({
    serialize : function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray : function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var string = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !reHasHexPrefix.test(string) && (this.checked || !reg.test(string));
      }).map(function(canCreateDiscussions, ctlParams) {
        var val = jQuery(this).val();
        return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
          return {
            name : ctlParams.name,
            value : val.replace(allDoubleQuoteRE, "\r\n")
          };
        }) : {
          name : ctlParams.name,
          value : val.replace(allDoubleQuoteRE, "\r\n")
        };
      }).get();
    }
  });
  /**
   * @return {?}
   */
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest;
    } catch (e) {
    }
  };
  /** @type {number} */
  var nextCallbackId = 0;
  var xhrCallbacks = {};
  var xhrSuccessStatus = {
    0 : 200,
    1223 : 204
  };
  var xhrSupported = jQuery.ajaxSettings.xhr();
  if (window.attachEvent) {
    window.attachEvent("onunload", function() {
      var key;
      for (key in xhrCallbacks) {
        xhrCallbacks[key]();
      }
    });
  }
  /** @type {boolean} */
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  /** @type {boolean} */
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(options) {
    var callback;
    return support.cors || xhrSupported && !options.crossDomain ? {
      send : function(headers, callback) {
        var name;
        var xhr = options.xhr();
        /** @type {number} */
        var id = ++nextCallbackId;
        if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields) {
          for (name in options.xhrFields) {
            xhr[name] = options.xhrFields[name];
          }
        }
        if (options.mimeType && xhr.overrideMimeType) {
          xhr.overrideMimeType(options.mimeType);
        }
        if (!(options.crossDomain || headers["X-Requested-With"])) {
          /** @type {string} */
          headers["X-Requested-With"] = "XMLHttpRequest";
        }
        for (name in headers) {
          xhr.setRequestHeader(name, headers[name]);
        }
        /**
         * @param {string} event
         * @return {?}
         */
        callback = function(event) {
          return function() {
            if (callback) {
              delete xhrCallbacks[id];
              /** @type {null} */
              callback = xhr.onload = xhr.onerror = null;
              if ("abort" === event) {
                xhr.abort();
              } else {
                if ("error" === event) {
                  callback(xhr.status, xhr.statusText);
                } else {
                  callback(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "string" == typeof xhr.responseText ? {
                    text : xhr.responseText
                  } : void 0, xhr.getAllResponseHeaders());
                }
              }
            }
          };
        };
        xhr.onload = callback();
        xhr.onerror = callback("error");
        callback = xhrCallbacks[id] = callback("abort");
        try {
          xhr.send(options.hasContent && options.data || null);
        } catch (a) {
          if (callback) {
            throw a;
          }
        }
      },
      abort : function() {
        if (callback) {
          callback();
        }
      }
    } : void 0;
  });
  jQuery.ajaxSetup({
    accepts : {
      script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents : {
      script : /(?:java|ecma)script/
    },
    converters : {
      "text script" : function(value) {
        return jQuery.globalEval(value), value;
      }
    }
  });
  jQuery.ajaxPrefilter("script", function(settings) {
    if (void 0 === settings.cache) {
      /** @type {boolean} */
      settings.cache = false;
    }
    if (settings.crossDomain) {
      /** @type {string} */
      settings.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var fileElem;
      var callback;
      return {
        send : function(name, callback) {
          fileElem = jQuery("<script>").prop({
            async : true,
            charset : s.scriptCharset,
            src : s.url
          }).on("load error", callback = function(result) {
            fileElem.remove();
            /** @type {null} */
            callback = null;
            if (result) {
              callback("error" === result.type ? 404 : 200, result.type);
            }
          });
          document.head.appendChild(fileElem[0]);
        },
        abort : function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  /** @type {!Array} */
  var oldCallbacks = [];
  /** @type {!RegExp} */
  var rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp : "callback",
    jsonpCallback : function() {
      var indexLookupKey = oldCallbacks.pop() || jQuery.expando + "_" + widgetUniqueIDIndex++;
      return this[indexLookupKey] = true, indexLookupKey;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, scanners) {
    var callbackName;
    var overwritten;
    var responseContainer;
    /** @type {(boolean|string)} */
    var jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
    return jsonProp || "jsonp" === s.dataTypes[0] ? (callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== false && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
      return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
    }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
      /** @type {!Arguments} */
      responseContainer = arguments;
    }, scanners.always(function() {
      window[callbackName] = overwritten;
      if (s[callbackName]) {
        s.jsonpCallback = originalSettings.jsonpCallback;
        oldCallbacks.push(callbackName);
      }
      if (responseContainer && jQuery.isFunction(overwritten)) {
        overwritten(responseContainer[0]);
      }
      responseContainer = overwritten = void 0;
    }), "script") : void 0;
  });
  /**
   * @param {string} data
   * @param {!Object} context
   * @param {!Function} keepScripts
   * @return {?}
   */
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (!data || "string" != typeof data) {
      return null;
    }
    if ("boolean" == typeof context) {
      /** @type {!Object} */
      keepScripts = context;
      /** @type {boolean} */
      context = false;
    }
    context = context || document;
    /** @type {(Array<string>|null)} */
    var parsed = rsingleTag.exec(data);
    /** @type {(Array|boolean)} */
    var scripts = !keepScripts && [];
    return parsed ? [context.createElement(parsed[1])] : (parsed = jQuery.buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes));
  };
  /** @type {function(string, !Object, !Array): ?} */
  var proxyStoreLoad = jQuery.fn.load;
  /**
   * @param {string} name
   * @param {!Object} t
   * @param {!Array} n
   * @return {?}
   */
  jQuery.fn.load = function(name, t, n) {
    if ("string" != typeof name && proxyStoreLoad) {
      return proxyStoreLoad.apply(this, arguments);
    }
    var selector;
    var type;
    var response;
    var self = this;
    var o = name.indexOf(" ");
    return o >= 0 && (selector = jQuery.trim(name.slice(o)), name = name.slice(0, o)), jQuery.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (type = "POST"), self.length > 0 && jQuery.ajax({
      url : name,
      type : type,
      dataType : "html",
      data : t
    }).done(function(responseText) {
      /** @type {!Arguments} */
      response = arguments;
      self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
    }).complete(n && function(type, obj) {
      self.each(n, response || [type.responseText, obj, type]);
    }), this;
  };
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(canCreateDiscussions, name) {
    /**
     * @param {string} e
     * @return {?}
     */
    jQuery.fn[name] = function(e) {
      return this.on(name, e);
    };
  });
  /**
   * @param {?} elem
   * @return {?}
   */
  jQuery.expr.filters.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  var root = window.document.documentElement;
  jQuery.offset = {
    setOffset : function(element, options, x) {
      var offset;
      var x;
      var a;
      var i;
      var curOffset;
      var value;
      var l;
      var propertyName = jQuery.css(element, "position");
      var f = jQuery(element);
      var o = {};
      if ("static" === propertyName) {
        /** @type {string} */
        element.style.position = "relative";
      }
      curOffset = f.offset();
      a = jQuery.css(element, "top");
      value = jQuery.css(element, "left");
      /** @type {boolean} */
      l = ("absolute" === propertyName || "fixed" === propertyName) && (a + value).indexOf("auto") > -1;
      if (l) {
        offset = f.position();
        i = offset.top;
        x = offset.left;
      } else {
        /** @type {number} */
        i = parseFloat(a) || 0;
        /** @type {number} */
        x = parseFloat(value) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(element, x, curOffset);
      }
      if (null != options.top) {
        /** @type {number} */
        o.top = options.top - curOffset.top + i;
      }
      if (null != options.left) {
        /** @type {number} */
        o.left = options.left - curOffset.left + x;
      }
      if ("using" in options) {
        options.using.call(element, o);
      } else {
        f.css(o);
      }
    }
  };
  jQuery.fn.extend({
    offset : function(type) {
      if (arguments.length) {
        return void 0 === type ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, type, i);
        });
      }
      var root;
      var win;
      var elem = this[0];
      var box = {
        top : 0,
        left : 0
      };
      var doc = elem && elem.ownerDocument;
      return doc ? (root = doc.documentElement, jQuery.contains(root, elem) ? (typeof elem.getBoundingClientRect !== strundefined && (box = elem.getBoundingClientRect()), win = getWindow(doc), {
        top : box.top + win.pageYOffset - root.clientTop,
        left : box.left + win.pageXOffset - root.clientLeft
      }) : box) : void 0;
    },
    position : function() {
      if (this[0]) {
        var offsetParent;
        var offset;
        var n = this[0];
        var parentOffset = {
          top : 0,
          left : 0
        };
        return "fixed" === jQuery.css(n, "position") ? offset = n.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true)), {
          top : offset.top - parentOffset.top - jQuery.css(n, "marginTop", true),
          left : offset.left - parentOffset.left - jQuery.css(n, "marginLeft", true)
        };
      }
    },
    offsetParent : function() {
      return this.map(function() {
        var parent = this.offsetParent || root;
        for (; parent && !jQuery.nodeName(parent, "html") && "static" === jQuery.css(parent, "position");) {
          parent = parent.offsetParent;
        }
        return parent || root;
      });
    }
  });
  jQuery.each({
    scrollLeft : "pageXOffset",
    scrollTop : "pageYOffset"
  }, function(type, prop) {
    /** @type {boolean} */
    var top = "pageYOffset" === prop;
    /**
     * @param {?} value
     * @return {?}
     */
    jQuery.fn[type] = function(value) {
      return access(this, function(el, method, val) {
        var win = getWindow(el);
        return void 0 === val ? win ? win[prop] : el[method] : void(win ? win.scrollTo(top ? window.pageXOffset : val, top ? val : window.pageYOffset) : el[method] = val);
      }, type, value, arguments.length, null);
    };
  });
  jQuery.each(["top", "left"], function(canCreateDiscussions, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(parent, val) {
      return val ? (val = curCSS(parent, prop), rnumnonpx.test(val) ? jQuery(parent).position()[prop] + "px" : val) : void 0;
    });
  });
  jQuery.each({
    Height : "height",
    Width : "width"
  }, function(name, type) {
    jQuery.each({
      padding : "inner" + name,
      content : type,
      "" : "outer" + name
    }, function(defaultExtra, original) {
      /**
       * @param {!Object} margin
       * @param {boolean} value
       * @return {?}
       */
      jQuery.fn[original] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
        var extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type, undefined) {
          var doc;
          return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, undefined, extra);
        }, type, chainable ? margin : void 0, chainable, null);
      };
    });
  });
  /**
   * @return {?}
   */
  jQuery.fn.size = function() {
    return this.length;
  };
  jQuery.fn.andSelf = jQuery.fn.addBack;
  if ("function" == typeof define && define.amd) {
    define("jquery", [], function() {
      return jQuery;
    });
  }
  var _jQuery = window.jQuery;
  var old$ = window.$;
  return jQuery.noConflict = function(deep) {
    return window.$ === jQuery && (window.$ = old$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
  }, typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery), jQuery;
});
if ("undefined" == typeof jQuery) {
  throw new Error("Bootstrap's JavaScript requires jQuery");
}
+function($) {
  /**
   * @return {?}
   */
  function transitionEnd() {
    /** @type {!Element} */
    var el = document.createElement("bootstrap");
    var transEndEventNames = {
      WebkitTransition : "webkitTransitionEnd",
      MozTransition : "transitionend",
      OTransition : "oTransitionEnd otransitionend",
      transition : "transitionend"
    };
    var name;
    for (name in transEndEventNames) {
      if (void 0 !== el.style[name]) {
        return {
          end : transEndEventNames[name]
        };
      }
    }
    return false;
  }
  /**
   * @param {number} duration
   * @return {?}
   */
  $.fn.emulateTransitionEnd = function(duration) {
    /** @type {boolean} */
    var i = false;
    var unloadedImgElement = this;
    $(this).one("bsTransitionEnd", function() {
      /** @type {boolean} */
      i = true;
    });
    /**
     * @return {undefined}
     */
    var callback = function() {
      if (!i) {
        $(unloadedImgElement).trigger($.support.transition.end);
      }
    };
    return setTimeout(callback, duration), this;
  };
  $(function() {
    $.support.transition = transitionEnd();
    if ($.support.transition) {
      $.event.special.bsTransitionEnd = {
        bindType : $.support.transition.end,
        delegateType : $.support.transition.end,
        handle : function(event) {
          return $(event.target).is(this) ? event.handleObj.handler.apply(this, arguments) : void 0;
        }
      };
    }
  });
}(jQuery), +function($) {
  /**
   * @param {?} name
   * @return {?}
   */
  function Plugin(name) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.alert");
      if (!data) {
        $this.data("bs.alert", data = new Tooltip(this));
      }
      if ("string" == typeof name) {
        data[name].call($this);
      }
    });
  }
  /** @type {string} */
  var i = '[data-dismiss="alert"]';
  /**
   * @param {!Array} obj
   * @return {undefined}
   */
  var Tooltip = function(obj) {
    $(obj).on("click", i, this.close);
  };
  /** @type {string} */
  Tooltip.VERSION = "3.2.0";
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  Tooltip.prototype.close = function(e) {
    /**
     * @return {undefined}
     */
    function removeElement() {
      $parent.detach().trigger("closed.bs.alert").remove();
    }
    var $this = $(this);
    var selector = $this.attr("data-target");
    if (!selector) {
      selector = $this.attr("href");
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
    }
    var $parent = $(selector);
    if (e) {
      e.preventDefault();
    }
    if (!$parent.length) {
      $parent = $this.hasClass("alert") ? $this : $this.parent();
    }
    $parent.trigger(e = $.Event("close.bs.alert"));
    if (!e.isDefaultPrevented()) {
      $parent.removeClass("in");
      if ($.support.transition && $parent.hasClass("fade")) {
        $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(150);
      } else {
        removeElement();
      }
    }
  };
  var old = $.fn.alert;
  /** @type {function(?): ?} */
  $.fn.alert = Plugin;
  /** @type {function(!Array): undefined} */
  $.fn.alert.Constructor = Tooltip;
  /**
   * @return {?}
   */
  $.fn.alert.noConflict = function() {
    return $.fn.alert = old, this;
  };
  $(document).on("click.bs.alert.data-api", i, Tooltip.prototype.close);
}(jQuery), +function($) {
  /**
   * @param {string} key
   * @return {?}
   */
  function Plugin(key) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.button");
      var options = "object" == typeof key && key;
      if (!data) {
        $this.data("bs.button", data = new Button(this, options));
      }
      if ("toggle" == key) {
        data.toggle();
      } else {
        if (key) {
          data.setState(key);
        }
      }
    });
  }
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  var Button = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    /** @type {boolean} */
    this.isLoading = false;
  };
  /** @type {string} */
  Button.VERSION = "3.2.0";
  Button.DEFAULTS = {
    loadingText : "loading..."
  };
  /**
   * @param {string} state
   * @return {undefined}
   */
  Button.prototype.setState = function(state) {
    /** @type {string} */
    var d = "disabled";
    var $el = this.$element;
    /** @type {string} */
    var val = $el.is("input") ? "val" : "html";
    var data = $el.data();
    /** @type {string} */
    state = state + "Text";
    if (null == data.resetText) {
      $el.data("resetText", $el[val]());
    }
    $el[val](null == data[state] ? this.options[state] : data[state]);
    setTimeout($.proxy(function() {
      if ("loadingText" == state) {
        /** @type {boolean} */
        this.isLoading = true;
        $el.addClass(d).attr(d, d);
      } else {
        if (this.isLoading) {
          /** @type {boolean} */
          this.isLoading = false;
          $el.removeClass(d).removeAttr(d);
        }
      }
    }, this), 0);
  };
  /**
   * @return {undefined}
   */
  Button.prototype.toggle = function() {
    /** @type {boolean} */
    var t = true;
    var el_form_group = this.$element.closest('[data-toggle="buttons"]');
    if (el_form_group.length) {
      var i = this.$element.find("input");
      if ("radio" == i.prop("type")) {
        if (i.prop("checked") && this.$element.hasClass("active")) {
          /** @type {boolean} */
          t = false;
        } else {
          el_form_group.find(".active").removeClass("active");
        }
      }
      if (t) {
        i.prop("checked", !this.$element.hasClass("active")).trigger("change");
      }
    }
    if (t) {
      this.$element.toggleClass("active");
    }
  };
  var old = $.fn.button;
  /** @type {function(string): ?} */
  $.fn.button = Plugin;
  /** @type {function(!Array, !Object): undefined} */
  $.fn.button.Constructor = Button;
  /**
   * @return {?}
   */
  $.fn.button.noConflict = function() {
    return $.fn.button = old, this;
  };
  $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(event) {
    var block = $(event.target);
    if (!block.hasClass("btn")) {
      block = block.closest(".btn");
    }
    Plugin.call(block, "toggle");
    event.preventDefault();
  });
}(jQuery), +function($) {
  /**
   * @param {boolean} options
   * @return {?}
   */
  function Plugin(options) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.carousel");
      var _config = $.extend({}, Carousel.DEFAULTS, $this.data(), "object" == typeof options && options);
      var id = "string" == typeof options ? options : _config.slide;
      if (!data) {
        $this.data("bs.carousel", data = new Carousel(this, _config));
      }
      if ("number" == typeof options) {
        data.to(options);
      } else {
        if (id) {
          data[id]();
        } else {
          if (_config.interval) {
            data.pause().cycle();
          }
        }
      }
    });
  }
  /**
   * @param {!Array} selector
   * @param {!Object} options
   * @return {undefined}
   */
  var Carousel = function(selector, options) {
    this.$element = $(selector).on("keydown.bs.carousel", $.proxy(this.keydown, this));
    this.$indicators = this.$element.find(".carousel-indicators");
    /** @type {!Object} */
    this.options = options;
    /** @type {null} */
    this.paused = this.sliding = this.interval = this.$active = this.$items = null;
    if ("hover" == this.options.pause) {
      this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
    }
  };
  /** @type {string} */
  Carousel.VERSION = "3.2.0";
  Carousel.DEFAULTS = {
    interval : 5e3,
    pause : "hover",
    wrap : true
  };
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  Carousel.prototype.keydown = function(event) {
    switch(event.which) {
      case 37:
        this.prev();
        break;
      case 39:
        this.next();
        break;
      default:
        return;
    }
    event.preventDefault();
  };
  /**
   * @param {string} options
   * @return {?}
   */
  Carousel.prototype.cycle = function(options) {
    return options || (this.paused = false), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), this;
  };
  /**
   * @param {string} item
   * @return {?}
   */
  Carousel.prototype.getItemIndex = function(item) {
    return this.$items = item.parent().children(".item"), this.$items.index(item || this.$active);
  };
  /**
   * @param {number} index
   * @return {?}
   */
  Carousel.prototype.to = function(index) {
    var existingSourceMapRelation = this;
    var activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return index > this.$items.length - 1 || 0 > index ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
      existingSourceMapRelation.to(index);
    }) : activeIndex == index ? this.pause().cycle() : this.slide(index > activeIndex ? "next" : "prev", $(this.$items[index]));
  };
  /**
   * @param {string} promisedResponse
   * @return {?}
   */
  Carousel.prototype.pause = function(promisedResponse) {
    return promisedResponse || (this.paused = true), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), this.cycle(true)), this.interval = clearInterval(this.interval), this;
  };
  /**
   * @return {?}
   */
  Carousel.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next");
  };
  /**
   * @return {?}
   */
  Carousel.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev");
  };
  /**
   * @param {string} a
   * @param {string} next
   * @return {?}
   */
  Carousel.prototype.slide = function(a, next) {
    var $active = this.$element.find(".item.active");
    var $next = next || $active[a]();
    var isCycling = this.interval;
    /** @type {string} */
    var direction = "next" == a ? "left" : "right";
    /** @type {string} */
    var fallback = "next" == a ? "first" : "last";
    var that = this;
    if (!$next.length) {
      if (!this.options.wrap) {
        return;
      }
      $next = this.$element.find(".item")[fallback]();
    }
    if ($next.hasClass("active")) {
      return this.sliding = false;
    }
    var relatedTarget = $next[0];
    var event = $.Event("slide.bs.carousel", {
      relatedTarget : relatedTarget,
      direction : direction
    });
    if (this.$element.trigger(event), !event.isDefaultPrevented()) {
      if (this.sliding = true, isCycling && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var formsearch = $(this.$indicators.children()[this.getItemIndex($next)]);
        if (formsearch) {
          formsearch.addClass("active");
        }
      }
      var type = $.Event("slid.bs.carousel", {
        relatedTarget : relatedTarget,
        direction : direction
      });
      return $.support.transition && this.$element.hasClass("slide") ? ($next.addClass(a), $next[0].offsetWidth, $active.addClass(direction), $next.addClass(direction), $active.one("bsTransitionEnd", function() {
        $next.removeClass([a, direction].join(" ")).addClass("active");
        $active.removeClass(["active", direction].join(" "));
        /** @type {boolean} */
        that.sliding = false;
        setTimeout(function() {
          that.$element.trigger(type);
        }, 0);
      }).emulateTransitionEnd(1E3 * $active.css("transition-duration").slice(0, -1))) : ($active.removeClass("active"), $next.addClass("active"), this.sliding = false, this.$element.trigger(type)), isCycling && this.cycle(), this;
    }
  };
  var old = $.fn.carousel;
  /** @type {function(boolean): ?} */
  $.fn.carousel = Plugin;
  /** @type {function(!Array, !Object): undefined} */
  $.fn.carousel.Constructor = Carousel;
  /**
   * @return {?}
   */
  $.fn.carousel.noConflict = function() {
    return $.fn.carousel = old, this;
  };
  $(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(event) {
    var href;
    var $target = $(this);
    var $this = $($target.attr("data-target") || (href = $target.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
    if ($this.hasClass("carousel")) {
      var module = $.extend({}, $this.data(), $target.data());
      var slideIndex = $target.attr("data-slide-to");
      if (slideIndex) {
        /** @type {boolean} */
        module.interval = false;
      }
      Plugin.call($this, module);
      if (slideIndex) {
        $this.data("bs.carousel").to(slideIndex);
      }
      event.preventDefault();
    }
  });
  $(window).on("load", function() {
    $('[data-ride="carousel"]').each(function() {
      var list = $(this);
      Plugin.call(list, list.data());
    });
  });
}(jQuery), +function($) {
  /**
   * @param {number} options
   * @return {?}
   */
  function Plugin(options) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.collapse");
      var _config = $.extend({}, Collapse.DEFAULTS, $this.data(), "object" == typeof options && options);
      if (!data && _config.toggle && "show" == options) {
        /** @type {boolean} */
        options = !options;
      }
      if (!data) {
        $this.data("bs.collapse", data = new Collapse(this, _config));
      }
      if ("string" == typeof options) {
        data[options]();
      }
    });
  }
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  var Collapse = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    /** @type {null} */
    this.transitioning = null;
    if (this.options.parent) {
      this.$parent = $(this.options.parent);
    }
    if (this.options.toggle) {
      this.toggle();
    }
  };
  /** @type {string} */
  Collapse.VERSION = "3.2.0";
  Collapse.DEFAULTS = {
    toggle : true
  };
  /**
   * @return {?}
   */
  Collapse.prototype.dimension = function() {
    var hasWidth = this.$element.hasClass("width");
    return hasWidth ? "width" : "height";
  };
  /**
   * @return {?}
   */
  Collapse.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var event = $.Event("show.bs.collapse");
      if (this.$element.trigger(event), !event.isDefaultPrevented()) {
        var actives = this.$parent && this.$parent.find("> .panel > .in");
        if (actives && actives.length) {
          var hasData = actives.data("bs.collapse");
          if (hasData && hasData.transitioning) {
            return;
          }
          Plugin.call(actives, "hide");
          if (!hasData) {
            actives.data("bs.collapse", null);
          }
        }
        var dimension = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[dimension](0);
        /** @type {number} */
        this.transitioning = 1;
        /**
         * @return {undefined}
         */
        var complete = function() {
          this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
          /** @type {number} */
          this.transitioning = 0;
          this.$element.trigger("shown.bs.collapse");
        };
        if (!$.support.transition) {
          return complete.call(this);
        }
        var scrollSize = $.camelCase(["scroll", dimension].join("-"));
        this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize]);
      }
    }
  };
  /**
   * @return {?}
   */
  Collapse.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var event = $.Event("hide.bs.collapse");
      if (this.$element.trigger(event), !event.isDefaultPrevented()) {
        var dimension = this.dimension();
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
        /** @type {number} */
        this.transitioning = 1;
        /**
         * @return {undefined}
         */
        var complete = function() {
          /** @type {number} */
          this.transitioning = 0;
          this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
        };
        return $.support.transition ? void this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(350) : complete.call(this);
      }
    }
  };
  /**
   * @return {undefined}
   */
  Collapse.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  };
  var old = $.fn.collapse;
  /** @type {function(number): ?} */
  $.fn.collapse = Plugin;
  /** @type {function(!Array, !Object): undefined} */
  $.fn.collapse.Constructor = Collapse;
  /**
   * @return {?}
   */
  $.fn.collapse.noConflict = function() {
    return $.fn.collapse = old, this;
  };
  $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(event) {
    var href;
    var $this = $(this);
    var liSelector = $this.attr("data-target") || event.preventDefault() || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
    var $target = $(liSelector);
    var data = $target.data("bs.collapse");
    var option = data ? "toggle" : $this.data();
    var parent = $this.attr("data-parent");
    var $parent = parent && $(parent);
    if (!(data && data.transitioning)) {
      if ($parent) {
        $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass("collapsed");
      }
      $this[$target.hasClass("in") ? "addClass" : "removeClass"]("collapsed");
    }
    Plugin.call($target, option);
  });
}(jQuery), +function($) {
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function clearMenus(e) {
    if (!(e && 3 === e.which)) {
      $(liToRemove).remove();
      $(selector).each(function() {
        var $parent = getParent($(this));
        var options = {
          relatedTarget : this
        };
        if ($parent.hasClass("open")) {
          $parent.trigger(e = $.Event("hide.bs.dropdown", options));
          if (!e.isDefaultPrevented()) {
            $parent.removeClass("open").trigger("hidden.bs.dropdown", options);
          }
        }
      });
    }
  }
  /**
   * @param {!Object} $this
   * @return {?}
   */
  function getParent($this) {
    var selector = $this.attr("data-target");
    if (!selector) {
      selector = $this.attr("href");
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "");
    }
    var $parent = selector && $(selector);
    return $parent && $parent.length ? $parent : $this.parent();
  }
  /**
   * @param {?} name
   * @return {?}
   */
  function Plugin(name) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.dropdown");
      if (!data) {
        $this.data("bs.dropdown", data = new Dropdown(this));
      }
      if ("string" == typeof name) {
        data[name].call($this);
      }
    });
  }
  /** @type {string} */
  var liToRemove = ".dropdown-backdrop";
  /** @type {string} */
  var selector = '[data-toggle="dropdown"]';
  /**
   * @param {!Array} elem
   * @return {undefined}
   */
  var Dropdown = function(elem) {
    $(elem).on("click.bs.dropdown", this.toggle);
  };
  /** @type {string} */
  Dropdown.VERSION = "3.2.0";
  /**
   * @param {!Object} event
   * @return {?}
   */
  Dropdown.prototype.toggle = function(event) {
    var $this = $(this);
    if (!$this.is(".disabled, :disabled")) {
      var $parent = getParent($this);
      var isActive = $parent.hasClass("open");
      if (clearMenus(), !isActive) {
        if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
          $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", clearMenus);
        }
        var data = {
          relatedTarget : this
        };
        if ($parent.trigger(event = $.Event("show.bs.dropdown", data)), event.isDefaultPrevented()) {
          return;
        }
        $this.trigger("focus");
        $parent.toggleClass("open").trigger("shown.bs.dropdown", data);
      }
      return false;
    }
  };
  /**
   * @param {!Event} event
   * @return {?}
   */
  Dropdown.prototype.keydown = function(event) {
    if (/(38|40|27)/.test(event.keyCode)) {
      var $this = $(this);
      if (event.preventDefault(), event.stopPropagation(), !$this.is(".disabled, :disabled")) {
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        if (!isActive || isActive && 27 == event.keyCode) {
          return 27 == event.which && $parent.find(selector).trigger("focus"), $this.trigger("click");
        }
        /** @type {string} */
        var desc = " li:not(.divider):visible a";
        var l = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);
        if (l.length) {
          var h = l.index(l.filter(":focus"));
          if (38 == event.keyCode && h > 0) {
            h--;
          }
          if (40 == event.keyCode && h < l.length - 1) {
            h++;
          }
          if (!~h) {
            /** @type {number} */
            h = 0;
          }
          l.eq(h).trigger("focus");
        }
      }
    }
  };
  var old = $.fn.dropdown;
  /** @type {function(?): ?} */
  $.fn.dropdown = Plugin;
  /** @type {function(!Array): undefined} */
  $.fn.dropdown.Constructor = Dropdown;
  /**
   * @return {?}
   */
  $.fn.dropdown.noConflict = function() {
    return $.fn.dropdown = old, this;
  };
  $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(event) {
    event.stopPropagation();
  }).on("click.bs.dropdown.data-api", selector, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", selector + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown);
}(jQuery), +function($) {
  /**
   * @param {!Function} options
   * @param {undefined} arg
   * @return {?}
   */
  function Plugin(options, arg) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.modal");
      var _config = $.extend({}, Modal.DEFAULTS, $this.data(), "object" == typeof options && options);
      if (!data) {
        $this.data("bs.modal", data = new Modal(this, _config));
      }
      if ("string" == typeof options) {
        data[options](arg);
      } else {
        if (_config.show) {
          data.show(arg);
        }
      }
    });
  }
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  var Modal = function(element, options) {
    /** @type {!Object} */
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    /** @type {null} */
    this.$backdrop = this.isShown = null;
    /** @type {number} */
    this.scrollbarWidth = 0;
    if (this.options.remote) {
      this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
        this.$element.trigger("loaded.bs.modal");
      }, this));
    }
  };
  /** @type {string} */
  Modal.VERSION = "3.2.0";
  Modal.DEFAULTS = {
    backdrop : true,
    keyboard : true,
    show : true
  };
  /**
   * @param {undefined} data
   * @return {?}
   */
  Modal.prototype.toggle = function(data) {
    return this.isShown ? this.hide() : this.show(data);
  };
  /**
   * @param {!HTMLElement} html
   * @return {undefined}
   */
  Modal.prototype.show = function(html) {
    var that = this;
    var event = $.Event("show.bs.modal", {
      relatedTarget : html
    });
    this.$element.trigger(event);
    if (!(this.isShown || event.isDefaultPrevented())) {
      /** @type {boolean} */
      this.isShown = true;
      this.checkScrollbar();
      this.$body.addClass("modal-open");
      this.setScrollbar();
      this.escape();
      this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
      this.backdrop(function() {
        var o = $.support.transition && that.$element.hasClass("fade");
        if (!that.$element.parent().length) {
          that.$element.appendTo(that.$body);
        }
        that.$element.show().scrollTop(0);
        if (o) {
          that.$element[0].offsetWidth;
        }
        that.$element.addClass("in").attr("aria-hidden", false);
        that.enforceFocus();
        var s = $.Event("shown.bs.modal", {
          relatedTarget : html
        });
        if (o) {
          that.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
            that.$element.trigger("focus").trigger(s);
          }).emulateTransitionEnd(300);
        } else {
          that.$element.trigger("focus").trigger(s);
        }
      });
    }
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  Modal.prototype.hide = function(event) {
    if (event) {
      event.preventDefault();
    }
    event = $.Event("hide.bs.modal");
    this.$element.trigger(event);
    if (this.isShown && !event.isDefaultPrevented()) {
      /** @type {boolean} */
      this.isShown = false;
      this.$body.removeClass("modal-open");
      this.resetScrollbar();
      this.escape();
      $(document).off("focusin.bs.modal");
      this.$element.removeClass("in").attr("aria-hidden", true).off("click.dismiss.bs.modal");
      if ($.support.transition && this.$element.hasClass("fade")) {
        this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(300);
      } else {
        this.hideModal();
      }
    }
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.enforceFocus = function() {
    $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(options) {
      if (!(this.$element[0] === options.target || this.$element.has(options.target).length)) {
        this.$element.trigger("focus");
      }
    }, this));
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.escape = function() {
    if (this.isShown && this.options.keyboard) {
      this.$element.on("keyup.dismiss.bs.modal", $.proxy(function(event) {
        if (27 == event.which) {
          this.hide();
        }
      }, this));
    } else {
      if (!this.isShown) {
        this.$element.off("keyup.dismiss.bs.modal");
      }
    }
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.hideModal = function() {
    var oMultiSelect = this;
    this.$element.hide();
    this.backdrop(function() {
      oMultiSelect.$element.trigger("hidden.bs.modal");
    });
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.removeBackdrop = function() {
    if (this.$backdrop) {
      this.$backdrop.remove();
    }
    /** @type {null} */
    this.$backdrop = null;
  };
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  Modal.prototype.backdrop = function(callback) {
    var that = this;
    /** @type {string} */
    var animate = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;
      if (this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", $.proxy(function(event) {
        if (event.target === event.currentTarget) {
          if ("static" == this.options.backdrop) {
            this.$element[0].focus.call(this.$element[0]);
          } else {
            this.hide.call(this);
          }
        }
      }, this)), doAnimate && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !callback) {
        return;
      }
      if (doAnimate) {
        this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(150);
      } else {
        callback();
      }
    } else {
      if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        /**
         * @return {undefined}
         */
        var callbackRemove = function() {
          that.removeBackdrop();
          if (callback) {
            callback();
          }
        };
        if ($.support.transition && this.$element.hasClass("fade")) {
          this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(150);
        } else {
          callbackRemove();
        }
      } else {
        if (callback) {
          callback();
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.checkScrollbar = function() {
    if (!(document.body.clientWidth >= window.innerWidth)) {
      this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar();
    }
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.setScrollbar = function() {
    /** @type {number} */
    var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);
    if (this.scrollbarWidth) {
      this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
    }
  };
  /**
   * @return {undefined}
   */
  Modal.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", "");
  };
  /**
   * @return {?}
   */
  Modal.prototype.measureScrollbar = function() {
    /** @type {!Element} */
    var scrollDiv = document.createElement("div");
    /** @type {string} */
    scrollDiv.className = "modal-scrollbar-measure";
    this.$body.append(scrollDiv);
    /** @type {number} */
    var e = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    return this.$body[0].removeChild(scrollDiv), e;
  };
  var old = $.fn.modal;
  /** @type {function(!Function, undefined): ?} */
  $.fn.modal = Plugin;
  /** @type {function(!Array, !Object): undefined} */
  $.fn.modal.Constructor = Modal;
  /**
   * @return {?}
   */
  $.fn.modal.noConflict = function() {
    return $.fn.modal = old, this;
  };
  $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(event) {
    var $this = $(this);
    var href = $this.attr("href");
    var list = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, ""));
    var option = list.data("bs.modal") ? "toggle" : $.extend({
      remote : !/#/.test(href) && href
    }, list.data(), $this.data());
    if ($this.is("a")) {
      event.preventDefault();
    }
    list.one("show.bs.modal", function(event) {
      if (!event.isDefaultPrevented()) {
        list.one("hidden.bs.modal", function() {
          if ($this.is(":visible")) {
            $this.trigger("focus");
          }
        });
      }
    });
    Plugin.call(list, option, this);
  });
}(jQuery), +function($) {
  /**
   * @param {string} opts
   * @return {?}
   */
  function Plugin(opts) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.tooltip");
      var options = "object" == typeof opts && opts;
      if (data || "destroy" != opts) {
        if (!data) {
          $this.data("bs.tooltip", data = new Tooltip(this, options));
        }
        if ("string" == typeof opts) {
          data[opts]();
        }
      }
    });
  }
  /**
   * @param {!Array} obj
   * @param {boolean} config
   * @return {undefined}
   */
  var Tooltip = function(obj, config) {
    /** @type {null} */
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
    this.init("tooltip", obj, config);
  };
  /** @type {string} */
  Tooltip.VERSION = "3.2.0";
  Tooltip.DEFAULTS = {
    animation : true,
    placement : "top",
    selector : false,
    template : '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger : "hover focus",
    title : "",
    delay : 0,
    html : false,
    container : false,
    viewport : {
      selector : "body",
      padding : 0
    }
  };
  /**
   * @param {string} type
   * @param {!Array} element
   * @param {string} options
   * @return {undefined}
   */
  Tooltip.prototype.init = function(type, element, options) {
    /** @type {boolean} */
    this.enabled = true;
    /** @type {string} */
    this.type = type;
    this.$element = $(element);
    this.options = this.getOptions(options);
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);
    var sArrTypes = this.options.trigger.split(" ");
    var iTempIndex = sArrTypes.length;
    for (; iTempIndex--;) {
      var sType = sArrTypes[iTempIndex];
      if ("click" == sType) {
        this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else {
        if ("manual" != sType) {
          /** @type {string} */
          var eventIn = "hover" == sType ? "mouseenter" : "focusin";
          /** @type {string} */
          var eventOut = "hover" == sType ? "mouseleave" : "focusout";
          this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
          this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
        }
      }
    }
    if (this.options.selector) {
      this._options = $.extend({}, this.options, {
        trigger : "manual",
        selector : ""
      });
    } else {
      this.fixTitle();
    }
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.getDefaults = function() {
    return Tooltip.DEFAULTS;
  };
  /**
   * @param {!Object} options
   * @return {?}
   */
  Tooltip.prototype.getOptions = function(options) {
    return options = $.extend({}, this.getDefaults(), this.$element.data(), options), options.delay && "number" == typeof options.delay && (options.delay = {
      show : options.delay,
      hide : options.delay
    }), options;
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.getDelegateOptions = function() {
    var Pstub = {};
    var data = this.getDefaults();
    return this._options && $.each(this._options, function(k, undefined) {
      if (data[k] != undefined) {
        Pstub[k] = undefined;
      }
    }), Pstub;
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  Tooltip.prototype.enter = function(obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
    return self || (self = new this.constructor(obj.currentTarget, this.getDelegateOptions()), $(obj.currentTarget).data("bs." + this.type, self)), clearTimeout(self.timeout), self.hoverState = "in", self.options.delay && self.options.delay.show ? void(self.timeout = setTimeout(function() {
      if ("in" == self.hoverState) {
        self.show();
      }
    }, self.options.delay.show)) : self.show();
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  Tooltip.prototype.leave = function(obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
    return self || (self = new this.constructor(obj.currentTarget, this.getDelegateOptions()), $(obj.currentTarget).data("bs." + this.type, self)), clearTimeout(self.timeout), self.hoverState = "out", self.options.delay && self.options.delay.hide ? void(self.timeout = setTimeout(function() {
      if ("out" == self.hoverState) {
        self.hide();
      }
    }, self.options.delay.hide)) : self.hide();
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.show = function() {
    var event = $.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(event);
      var i = $.contains(document.documentElement, this.$element[0]);
      if (event.isDefaultPrevented() || !i) {
        return;
      }
      var self = this;
      var $tip = this.tip();
      var tipId = this.getUID(this.type);
      this.setContent();
      $tip.attr("id", tipId);
      this.$element.attr("aria-describedby", tipId);
      if (this.options.animation) {
        $tip.addClass("fade");
      }
      var placement = "function" == typeof this.options.placement ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
      /** @type {!RegExp} */
      var autoToken = /\s?auto?\s?/i;
      /** @type {boolean} */
      var autoPlace = autoToken.test(placement);
      if (autoPlace) {
        placement = placement.replace(autoToken, "") || "top";
      }
      $tip.detach().css({
        top : 0,
        left : 0,
        display : "block"
      }).addClass(placement).data("bs." + this.type, this);
      if (this.options.container) {
        $tip.appendTo(this.options.container);
      } else {
        $tip.insertAfter(this.$element);
      }
      var pos = this.getPosition();
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;
      if (autoPlace) {
        var orgPlacement = placement;
        var $parent = this.$element.parent();
        var parentDim = this.getPosition($parent);
        placement = "bottom" == placement && pos.top + pos.height + actualHeight - parentDim.scroll > parentDim.height ? "top" : "top" == placement && pos.top - parentDim.scroll - actualHeight < 0 ? "bottom" : "right" == placement && pos.right + actualWidth > parentDim.width ? "left" : "left" == placement && pos.left - actualWidth < parentDim.left ? "right" : placement;
        $tip.removeClass(orgPlacement).addClass(placement);
      }
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
      this.applyPlacement(calculatedOffset, placement);
      /**
       * @return {undefined}
       */
      var complete = function() {
        self.$element.trigger("shown.bs." + self.type);
        /** @type {null} */
        self.hoverState = null;
      };
      if ($.support.transition && this.$tip.hasClass("fade")) {
        $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(150);
      } else {
        complete();
      }
    }
  };
  /**
   * @param {!Object} offset
   * @param {string} placement
   * @return {undefined}
   */
  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var $tip = this.tip();
    var width = $tip[0].offsetWidth;
    var height = $tip[0].offsetHeight;
    /** @type {number} */
    var marginTop = parseInt($tip.css("margin-top"), 10);
    /** @type {number} */
    var marginLeft = parseInt($tip.css("margin-left"), 10);
    if (isNaN(marginTop)) {
      /** @type {number} */
      marginTop = 0;
    }
    if (isNaN(marginLeft)) {
      /** @type {number} */
      marginLeft = 0;
    }
    offset.top = offset.top + marginTop;
    offset.left = offset.left + marginLeft;
    $.offset.setOffset($tip[0], $.extend({
      using : function(props) {
        $tip.css({
          top : Math.round(props.top),
          left : Math.round(props.left)
        });
      }
    }, offset), 0);
    $tip.addClass("in");
    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;
    if ("top" == placement && actualHeight != height) {
      /** @type {number} */
      offset.top = offset.top + height - actualHeight;
    }
    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
    if (delta.left) {
      offset.left += delta.left;
    } else {
      offset.top += delta.top;
    }
    var arrowDelta = delta.left ? 2 * delta.left - width + actualWidth : 2 * delta.top - height + actualHeight;
    /** @type {string} */
    var arrowPosition = delta.left ? "left" : "top";
    /** @type {string} */
    var arrowOffsetPosition = delta.left ? "offsetWidth" : "offsetHeight";
    $tip.offset(offset);
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition);
  };
  /**
   * @param {number} delta
   * @param {number} dimension
   * @param {!Object} position
   * @return {undefined}
   */
  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? 50 * (1 - delta / dimension) + "%" : "");
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.setContent = function() {
    var $tip = this.tip();
    var titleText = this.getTitle();
    $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](titleText);
    $tip.removeClass("fade in top bottom left right");
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.hide = function() {
    /**
     * @return {undefined}
     */
    function complete() {
      if ("in" != self.hoverState) {
        $tip.detach();
      }
      self.$element.trigger("hidden.bs." + self.type);
    }
    var self = this;
    var $tip = this.tip();
    var event = $.Event("hide.bs." + this.type);
    return this.$element.removeAttr("aria-describedby"), this.$element.trigger(event), event.isDefaultPrevented() ? void 0 : ($tip.removeClass("in"), $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(150) : complete(), this.hoverState = null, this);
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.fixTitle = function() {
    var $e = this.$element;
    if ($e.attr("title") || "string" != typeof $e.attr("data-original-title")) {
      $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
    }
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.hasContent = function() {
    return this.getTitle();
  };
  /**
   * @param {!Object} $element
   * @return {?}
   */
  Tooltip.prototype.getPosition = function($element) {
    $element = $element || this.$element;
    var el = $element[0];
    /** @type {boolean} */
    var isBody = "BODY" == el.tagName;
    return $.extend({}, "function" == typeof el.getBoundingClientRect ? el.getBoundingClientRect() : null, {
      scroll : isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width : isBody ? $(window).width() : $element.outerWidth(),
      height : isBody ? $(window).height() : $element.outerHeight()
    }, isBody ? {
      top : 0,
      left : 0
    } : $element.offset());
  };
  /**
   * @param {string} position
   * @param {!Object} pos
   * @param {number} actualWidth
   * @param {number} actualHeight
   * @return {?}
   */
  Tooltip.prototype.getCalculatedOffset = function(position, pos, actualWidth, actualHeight) {
    return "bottom" == position ? {
      top : pos.top + pos.height,
      left : pos.left + pos.width / 2 - actualWidth / 2
    } : "top" == position ? {
      top : pos.top - actualHeight,
      left : pos.left + pos.width / 2 - actualWidth / 2
    } : "left" == position ? {
      top : pos.top + pos.height / 2 - actualHeight / 2,
      left : pos.left - actualWidth
    } : {
      top : pos.top + pos.height / 2 - actualHeight / 2,
      left : pos.left + pos.width
    };
  };
  /**
   * @param {string} placement
   * @param {!Object} pos
   * @param {?} actualWidth
   * @param {number} actualHeight
   * @return {?}
   */
  Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
    var delta = {
      top : 0,
      left : 0
    };
    if (!this.$viewport) {
      return delta;
    }
    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
    var viewportDimensions = this.getPosition(this.$viewport);
    if (/right|left/.test(placement)) {
      /** @type {number} */
      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
      if (topEdgeOffset < viewportDimensions.top) {
        /** @type {number} */
        delta.top = viewportDimensions.top - topEdgeOffset;
      } else {
        if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
          /** @type {number} */
          delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
        }
      }
    } else {
      /** @type {number} */
      var leftEdgeOffset = pos.left - viewportPadding;
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
      if (leftEdgeOffset < viewportDimensions.left) {
        /** @type {number} */
        delta.left = viewportDimensions.left - leftEdgeOffset;
      } else {
        if (rightEdgeOffset > viewportDimensions.width) {
          /** @type {number} */
          delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
        }
      }
    }
    return delta;
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.getTitle = function() {
    var t;
    var $e = this.$element;
    var o = this.options;
    return t = $e.attr("data-original-title") || ("function" == typeof o.title ? o.title.call($e[0]) : o.title);
  };
  /**
   * @param {number} id
   * @return {?}
   */
  Tooltip.prototype.getUID = function(id) {
    do {
      id = id + ~~(1E6 * Math.random());
    } while (document.getElementById(id));
    return id;
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.tip = function() {
    return this.$tip = this.$tip || $(this.options.template);
  };
  /**
   * @return {?}
   */
  Tooltip.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.validate = function() {
    if (!this.$element[0].parentNode) {
      this.hide();
      /** @type {null} */
      this.$element = null;
      /** @type {null} */
      this.options = null;
    }
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.enable = function() {
    /** @type {boolean} */
    this.enabled = true;
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.disable = function() {
    /** @type {boolean} */
    this.enabled = false;
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.toggleEnabled = function() {
    /** @type {boolean} */
    this.enabled = !this.enabled;
  };
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  Tooltip.prototype.toggle = function(event) {
    var self = this;
    if (event) {
      self = $(event.currentTarget).data("bs." + this.type);
      if (!self) {
        self = new this.constructor(event.currentTarget, this.getDelegateOptions());
        $(event.currentTarget).data("bs." + this.type, self);
      }
    }
    if (self.tip().hasClass("in")) {
      self.leave(self);
    } else {
      self.enter(self);
    }
  };
  /**
   * @return {undefined}
   */
  Tooltip.prototype.destroy = function() {
    clearTimeout(this.timeout);
    this.hide().$element.off("." + this.type).removeData("bs." + this.type);
  };
  var old = $.fn.tooltip;
  /** @type {function(string): ?} */
  $.fn.tooltip = Plugin;
  /** @type {function(!Array, boolean): undefined} */
  $.fn.tooltip.Constructor = Tooltip;
  /**
   * @return {?}
   */
  $.fn.tooltip.noConflict = function() {
    return $.fn.tooltip = old, this;
  };
}(jQuery), +function($) {
  /**
   * @param {string} opts
   * @return {?}
   */
  function Plugin(opts) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.popover");
      var options = "object" == typeof opts && opts;
      if (data || "destroy" != opts) {
        if (!data) {
          $this.data("bs.popover", data = new Popover(this, options));
        }
        if ("string" == typeof opts) {
          data[opts]();
        }
      }
    });
  }
  /**
   * @param {!Array} element
   * @param {boolean} options
   * @return {undefined}
   */
  var Popover = function(element, options) {
    this.init("popover", element, options);
  };
  if (!$.fn.tooltip) {
    throw new Error("Popover requires tooltip.js");
  }
  /** @type {string} */
  Popover.VERSION = "3.2.0";
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement : "right",
    trigger : "click",
    content : "",
    template : '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
  /** @type {function(!Array, boolean): undefined} */
  Popover.prototype.constructor = Popover;
  /**
   * @return {?}
   */
  Popover.prototype.getDefaults = function() {
    return Popover.DEFAULTS;
  };
  /**
   * @return {undefined}
   */
  Popover.prototype.setContent = function() {
    var $tip = this.tip();
    var titleText = this.getTitle();
    var c = this.getContent();
    $tip.find(".popover-title")[this.options.html ? "html" : "text"](titleText);
    $tip.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c);
    $tip.removeClass("fade top bottom left right in");
    if (!$tip.find(".popover-title").html()) {
      $tip.find(".popover-title").hide();
    }
  };
  /**
   * @return {?}
   */
  Popover.prototype.hasContent = function() {
    return this.getTitle() || this.getContent();
  };
  /**
   * @return {?}
   */
  Popover.prototype.getContent = function() {
    var $e = this.$element;
    var o = this.options;
    return $e.attr("data-content") || ("function" == typeof o.content ? o.content.call($e[0]) : o.content);
  };
  /**
   * @return {?}
   */
  Popover.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  /**
   * @return {?}
   */
  Popover.prototype.tip = function() {
    return this.$tip || (this.$tip = $(this.options.template)), this.$tip;
  };
  var old = $.fn.popover;
  /** @type {function(string): ?} */
  $.fn.popover = Plugin;
  /** @type {function(!Array, boolean): undefined} */
  $.fn.popover.Constructor = Popover;
  /**
   * @return {?}
   */
  $.fn.popover.noConflict = function() {
    return $.fn.popover = old, this;
  };
}(jQuery), +function($) {
  /**
   * @param {!Object} selector
   * @param {!Object} options
   * @return {undefined}
   */
  function ScrollSpy(selector, options) {
    var process = $.proxy(this.process, this);
    this.$body = $("body");
    this.$scrollElement = $($(selector).is("body") ? window : selector);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
    /** @type {string} */
    this.selector = (this.options.target || "") + " .nav li > a";
    /** @type {!Array} */
    this.offsets = [];
    /** @type {!Array} */
    this.targets = [];
    /** @type {null} */
    this.activeTarget = null;
    /** @type {number} */
    this.scrollHeight = 0;
    this.$scrollElement.on("scroll.bs.scrollspy", process);
    this.refresh();
    this.process();
  }
  /**
   * @param {!Function} opts
   * @return {?}
   */
  function Plugin(opts) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.scrollspy");
      var options = "object" == typeof opts && opts;
      if (!data) {
        $this.data("bs.scrollspy", data = new ScrollSpy(this, options));
      }
      if ("string" == typeof opts) {
        data[opts]();
      }
    });
  }
  /** @type {string} */
  ScrollSpy.VERSION = "3.2.0";
  ScrollSpy.DEFAULTS = {
    offset : 10
  };
  /**
   * @return {?}
   */
  ScrollSpy.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  };
  /**
   * @return {undefined}
   */
  ScrollSpy.prototype.refresh = function() {
    /** @type {string} */
    var i = "offset";
    /** @type {number} */
    var searchBarHeight = 0;
    if (!$.isWindow(this.$scrollElement[0])) {
      /** @type {string} */
      i = "position";
      searchBarHeight = this.$scrollElement.scrollTop();
    }
    /** @type {!Array} */
    this.offsets = [];
    /** @type {!Array} */
    this.targets = [];
    this.scrollHeight = this.getScrollHeight();
    var self = this;
    this.$body.find(this.selector).map(function() {
      var o = $(this);
      var href = o.data("target") || o.attr("href");
      var n = /^#./.test(href) && $(href);
      return n && n.length && n.is(":visible") && [[n[i]().top + searchBarHeight, href]] || null;
    }).sort(function(subtractor, subtractee) {
      return subtractor[0] - subtractee[0];
    }).each(function() {
      self.offsets.push(this[0]);
      self.targets.push(this[1]);
    });
  };
  /**
   * @return {?}
   */
  ScrollSpy.prototype.process = function() {
    var i;
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.getScrollHeight();
    /** @type {number} */
    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
    var offsets = this.offsets;
    var targets = this.targets;
    var activeTarget = this.activeTarget;
    if (this.scrollHeight != scrollHeight && this.refresh(), scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
    }
    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i);
    }
    i = offsets.length;
    for (; i--;) {
      if (activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1])) {
        this.activate(targets[i]);
      }
    }
  };
  /**
   * @param {string} target
   * @return {undefined}
   */
  ScrollSpy.prototype.activate = function(target) {
    /** @type {string} */
    this.activeTarget = target;
    $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    /** @type {string} */
    var columnContainer = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
    var active = $(columnContainer).parents("li").addClass("active");
    if (active.parent(".dropdown-menu").length) {
      active = active.closest("li.dropdown").addClass("active");
    }
    active.trigger("activate.bs.scrollspy");
  };
  var old = $.fn.scrollspy;
  /** @type {function(!Function): ?} */
  $.fn.scrollspy = Plugin;
  /** @type {function(!Object, !Object): undefined} */
  $.fn.scrollspy.Constructor = ScrollSpy;
  /**
   * @return {?}
   */
  $.fn.scrollspy.noConflict = function() {
    return $.fn.scrollspy = old, this;
  };
  $(window).on("load.bs.scrollspy.data-api", function() {
    $('[data-spy="scroll"]').each(function() {
      var list = $(this);
      Plugin.call(list, list.data());
    });
  });
}(jQuery), +function($) {
  /**
   * @param {?} element
   * @return {?}
   */
  function Plugin(element) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.tab");
      if (!data) {
        $this.data("bs.tab", data = new Tab(this));
      }
      if ("string" == typeof element) {
        data[element]();
      }
    });
  }
  /**
   * @param {!Array} id
   * @return {undefined}
   */
  var Tab = function(id) {
    this.element = $(id);
  };
  /** @type {string} */
  Tab.VERSION = "3.2.0";
  /**
   * @return {undefined}
   */
  Tab.prototype.show = function() {
    var $this = this.element;
    var result = $this.closest("ul:not(.dropdown-menu)");
    var s = $this.data("target");
    if (s || (s = $this.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), !$this.parent("li").hasClass("active")) {
      var previous = result.find(".active:last a")[0];
      var event = $.Event("show.bs.tab", {
        relatedTarget : previous
      });
      if ($this.trigger(event), !event.isDefaultPrevented()) {
        var i = $(s);
        this.activate($this.closest("li"), result);
        this.activate(i, i.parent(), function() {
          $this.trigger({
            type : "shown.bs.tab",
            relatedTarget : previous
          });
        });
      }
    }
  };
  /**
   * @param {!Object} element
   * @param {!Object} target
   * @param {!Object} callback
   * @return {undefined}
   */
  Tab.prototype.activate = function(element, target, callback) {
    /**
     * @return {undefined}
     */
    function next() {
      $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
      element.addClass("active");
      if (r) {
        element[0].offsetWidth;
        element.addClass("in");
      } else {
        element.removeClass("fade");
      }
      if (element.parent(".dropdown-menu")) {
        element.closest("li.dropdown").addClass("active");
      }
      if (callback) {
        callback();
      }
    }
    var $active = target.find("> .active");
    var r = callback && $.support.transition && $active.hasClass("fade");
    if (r) {
      $active.one("bsTransitionEnd", next).emulateTransitionEnd(150);
    } else {
      next();
    }
    $active.removeClass("in");
  };
  var old = $.fn.tab;
  /** @type {function(?): ?} */
  $.fn.tab = Plugin;
  /** @type {function(!Array): undefined} */
  $.fn.tab.Constructor = Tab;
  /**
   * @return {?}
   */
  $.fn.tab.noConflict = function() {
    return $.fn.tab = old, this;
  };
  $(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(event) {
    event.preventDefault();
    Plugin.call($(this), "show");
  });
}(jQuery), +function($) {
  /**
   * @param {!Function} opts
   * @return {?}
   */
  function Plugin(opts) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.affix");
      var options = "object" == typeof opts && opts;
      if (!data) {
        $this.data("bs.affix", data = new Affix(this, options));
      }
      if ("string" == typeof opts) {
        data[opts]();
      }
    });
  }
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  var Affix = function(element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);
    this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));
    this.$element = $(element);
    /** @type {null} */
    this.affixed = this.unpin = this.pinnedOffset = null;
    this.checkPosition();
  };
  /** @type {string} */
  Affix.VERSION = "3.2.0";
  /** @type {string} */
  Affix.RESET = "affix affix-top affix-bottom";
  Affix.DEFAULTS = {
    offset : 0,
    target : window
  };
  /**
   * @return {undefined}
   */
  Affix.prototype.destroy = function() {
    this.$target = $(this.options.target).off("scroll.bs.affix.data-api").off("click.bs.affix.data-api");
    this.$element.removeClass(Affix.RESET).removeAttr("style");
    $(this.$element).removeData();
  };
  /**
   * @return {?}
   */
  Affix.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) {
      return this.pinnedOffset;
    }
    this.$element.removeClass(Affix.RESET).addClass("affix");
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };
  /**
   * @return {undefined}
   */
  Affix.prototype.checkPositionWithEventLoop = function() {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };
  /**
   * @return {undefined}
   */
  Affix.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var scrollHeight = $(document).height();
      var scrollTop = this.$target.scrollTop();
      var position = this.$element.offset();
      var offset = this.options.offset;
      var offsetTop = offset.top;
      var offsetBottom = offset.bottom;
      if ("object" != typeof offset) {
        offsetBottom = offsetTop = offset;
      }
      if ("function" == typeof offsetTop) {
        offsetTop = offset.top(this.$element);
      }
      if ("function" == typeof offsetBottom) {
        offsetBottom = offset.bottom(this.$element);
      }
      /** @type {(boolean|string)} */
      var affix = !(null != this.unpin && scrollTop + this.unpin <= position.top) && (null != offsetBottom && position.top + this.$element.height() >= scrollHeight - offsetBottom ? "bottom" : null != offsetTop && offsetTop >= scrollTop && "top");
      if (this.affixed !== affix) {
        if (null != this.unpin) {
          this.$element.css("top", "");
        }
        /** @type {string} */
        var affixType = "affix" + (affix ? "-" + affix : "");
        var event = $.Event(affixType + ".bs.affix");
        this.$element.trigger(event);
        if (!event.isDefaultPrevented()) {
          /** @type {(boolean|string)} */
          this.affixed = affix;
          this.unpin = "bottom" == affix ? this.getPinnedOffset() : null;
          this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace("affix", "affixed")));
          if ("bottom" == affix) {
            this.$element.offset({
              top : scrollHeight - this.$element.height() - offsetBottom
            });
          }
        }
      }
    }
  };
  var old = $.fn.affix;
  /** @type {function(!Function): ?} */
  $.fn.affix = Plugin;
  /** @type {function(!Array, !Object): undefined} */
  $.fn.affix.Constructor = Affix;
  /**
   * @return {?}
   */
  $.fn.affix.noConflict = function() {
    return $.fn.affix = old, this;
  };
  $(window).on("load", function() {
    $('[data-spy="affix"]').each(function() {
      var list = $(this);
      var data = list.data();
      data.offset = data.offset || {};
      if (data.offsetBottom) {
        data.offset.bottom = data.offsetBottom;
      }
      if (data.offsetTop) {
        data.offset.top = data.offsetTop;
      }
      Plugin.call(list, data);
    });
  });
}(jQuery);

!function($) {
  /**
   * @return {undefined}
   */
  function process() {
    /** @type {boolean} */
    n = false;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var cl = tmp.length;
    for (; i < cl; i++) {
      var $this = $(tmp[i]).filter(function() {
        return $(this).is(":appeared");
      });
      if ($this.trigger("appear", [$this]), dropdown) {
        var target = dropdown.not($this);
        target.trigger("disappear", [target]);
      }
      dropdown = $this;
    }
  }
  var dropdown;
  /** @type {!Array} */
  var tmp = [];
  /** @type {boolean} */
  var a = false;
  /** @type {boolean} */
  var n = false;
  var defaults = {
    interval : 250,
    force_process : false
  };
  var $WINDOW = $(window);
  /**
   * @param {?} selector
   * @return {?}
   */
  $.expr[":"].appeared = function(selector) {
    var $element = $(selector);
    if (!$element.is(":visible")) {
      return false;
    }
    var window_left = $WINDOW.scrollLeft();
    var window_top = $WINDOW.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;
    return top + $element.height() >= window_top && top - ($element.data("appear-top-offset") || 0) <= window_top + $WINDOW.height() && left + $element.width() >= window_left && left - ($element.data("appear-left-offset") || 0) <= window_left + $WINDOW.width();
  };
  $.fn.extend({
    appear : function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!a) {
        /**
         * @return {undefined}
         */
        var load = function() {
          if (!n) {
            /** @type {boolean} */
            n = true;
            setTimeout(process, opts.interval);
          }
        };
        $(window).scroll(load).resize(load);
        /** @type {boolean} */
        a = true;
      }
      return opts.force_process && setTimeout(process, opts.interval), tmp.push(selector), $(selector);
    }
  });
  $.extend({
    force_appear : function() {
      return !!a && (process(), true);
    }
  });
}(jQuery);
!function($) {
  /**
   * @param {!Object} name
   * @param {!Object} options
   * @param {string} selector
   * @return {?}
   */
  $.fn.hoverIntent = function(name, options, selector) {
    var settings = {
      interval : 100,
      sensitivity : 6,
      timeout : 0
    };
    settings = "object" == typeof name ? $.extend(settings, name) : $.isFunction(options) ? $.extend(settings, {
      over : name,
      out : options,
      selector : selector
    }) : $.extend(settings, {
      over : name,
      out : name,
      selector : options
    });
    var x;
    var y;
    var prevX;
    var prevY;
    /**
     * @param {!MouseEvent} event
     * @return {undefined}
     */
    var track = function(event) {
      x = event.pageX;
      y = event.pageY;
    };
    /**
     * @param {?} item
     * @param {!Object} value
     * @return {?}
     */
    var compare = function(item, value) {
      return value.hoverIntent_t = clearTimeout(value.hoverIntent_t), Math.sqrt((prevX - x) * (prevX - x) + (prevY - y) * (prevY - y)) < settings.sensitivity ? ($(value).off("mousemove.hoverIntent", track), value.hoverIntent_s = true, settings.over.apply(value, [item])) : (prevX = x, prevY = y, value.hoverIntent_t = setTimeout(function() {
        compare(item, value);
      }, settings.interval), void 0);
    };
    /**
     * @param {?} object
     * @param {undefined} value
     * @return {?}
     */
    var delay = function(object, value) {
      return value.hoverIntent_t = clearTimeout(value.hoverIntent_t), value.hoverIntent_s = false, settings.out.apply(value, [object]);
    };
    /**
     * @param {!Object} e
     * @return {undefined}
     */
    var handleHover = function(e) {
      var event = $.extend({}, e);
      var ob = this;
      if (ob.hoverIntent_t) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      }
      if ("mouseenter" === e.type) {
        prevX = event.pageX;
        prevY = event.pageY;
        $(ob).on("mousemove.hoverIntent", track);
        if (!ob.hoverIntent_s) {
          /** @type {number} */
          ob.hoverIntent_t = setTimeout(function() {
            compare(event, ob);
          }, settings.interval);
        }
      } else {
        $(ob).off("mousemove.hoverIntent", track);
        if (ob.hoverIntent_s) {
          /** @type {number} */
          ob.hoverIntent_t = setTimeout(function() {
            delay(event, ob);
          }, settings.timeout);
        }
      }
    };
    return this.on({
      "mouseenter.hoverIntent" : handleHover,
      "mouseleave.hoverIntent" : handleHover
    }, settings.selector);
  };
}(jQuery);
!function($, window) {
  var o = function() {
    var c = {
      bcClass : "sf-breadcrumb",
      menuClass : "sf-js-enabled",
      anchorClass : "sf-with-ul",
      menuArrowClass : "sf-arrows"
    };
    var n = function() {
      /** @type {boolean} */
      var o = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      return o && $(window).load(function() {
        $("body").children().on("click", $.noop);
      }), o;
    }();
    var t = function() {
      /** @type {!CSSStyleDeclaration} */
      var style = document.documentElement.style;
      return "behavior" in style && "fill" in style && /iemobile/i.test(navigator.userAgent);
    }();
    var i = function() {
      return !!window.PointerEvent;
    }();
    /**
     * @param {!Object} $menu
     * @param {?} o
     * @return {undefined}
     */
    var toggleMenuClasses = function($menu, o) {
      /** @type {string} */
      var classes = c.menuClass;
      if (o.cssArrows) {
        /** @type {string} */
        classes = classes + (" " + c.menuArrowClass);
      }
      $menu.toggleClass(classes);
    };
    /**
     * @param {!Object} $menu
     * @param {!Object} o
     * @return {?}
     */
    var setPathToCurrent = function($menu, o) {
      return $menu.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + c.bcClass).filter(function() {
        return $(this).children(o.popUpSelector).hide().show().length;
      }).removeClass(o.pathClass);
    };
    /**
     * @param {!Object} $li
     * @return {undefined}
     */
    var toggleAnchorClass = function($li) {
      $li.children("a").toggleClass(c.anchorClass);
    };
    /**
     * @param {!Object} $menu
     * @return {undefined}
     */
    var toggleTouchAction = function($menu) {
      var msTouchAction = $menu.css("ms-touch-action");
      var touchAction = $menu.css("touch-action");
      touchAction = touchAction || msTouchAction;
      /** @type {string} */
      touchAction = "pan-y" === touchAction ? "auto" : "pan-y";
      $menu.css({
        "ms-touch-action" : touchAction,
        "touch-action" : touchAction
      });
    };
    /**
     * @param {!Object} $menu
     * @param {undefined} o
     * @return {undefined}
     */
    var applyHandlers = function($menu, o) {
      /** @type {string} */
      var targets = "li:has(" + o.popUpSelector + ")";
      if ($.fn.hoverIntent && !o.disableHI) {
        $menu.hoverIntent(over, out, targets);
      } else {
        $menu.on("mouseenter.superfish", targets, over).on("mouseleave.superfish", targets, out);
      }
      /** @type {string} */
      var key = "MSPointerDown.superfish";
      if (i) {
        /** @type {string} */
        key = "pointerdown.superfish";
      }
      if (!n) {
        /** @type {string} */
        key = key + " touchend.superfish";
      }
      if (t) {
        /** @type {string} */
        key = key + " mousedown.superfish";
      }
      $menu.on("focusin.superfish", "li", over).on("focusout.superfish", "li", out).on(key, "a", o, init);
    };
    /**
     * @param {!Object} e
     * @return {undefined}
     */
    var init = function(e) {
      var $this = $(this);
      var $btnFollow = $this.siblings(e.data.popUpSelector);
      if ($btnFollow.length > 0 && $btnFollow.is(":hidden")) {
        $this.one("click.superfish", false);
        if ("MSPointerDown" === e.type || "pointerdown" === e.type) {
          $this.trigger("focus");
        } else {
          $.proxy(over, $this.parent("li"))();
        }
      }
    };
    /**
     * @return {undefined}
     */
    var over = function() {
      var el = $(this);
      var o = getOptions(el);
      clearTimeout(o.sfTimer);
      el.siblings().superfish("hide").end().superfish("show");
    };
    /**
     * @return {undefined}
     */
    var out = function() {
      var el = $(this);
      var o = getOptions(el);
      if (n) {
        $.proxy(close, el, o)();
      } else {
        clearTimeout(o.sfTimer);
        /** @type {number} */
        o.sfTimer = setTimeout($.proxy(close, el, o), o.delay);
      }
    };
    /**
     * @param {!Object} o
     * @return {undefined}
     */
    var close = function(o) {
      /** @type {boolean} */
      o.retainPath = $.inArray(this[0], o.$path) > -1;
      this.superfish("hide");
      if (!this.parents("." + o.hoverClass).length) {
        o.onIdle.call(getMenu(this));
        if (o.$path.length) {
          $.proxy(over, o.$path)();
        }
      }
    };
    /**
     * @param {!Object} id
     * @return {?}
     */
    var getMenu = function(id) {
      return id.closest("." + c.menuClass);
    };
    /**
     * @param {!Object} id
     * @return {?}
     */
    var getOptions = function(id) {
      return getMenu(id).data("sf-options");
    };
    return {
      hide : function(val) {
        if (this.length) {
          var el = this;
          var o = getOptions(el);
          if (!o) {
            return this;
          }
          var t = o.retainPath === true ? o.$path : "";
          var i = el.find("li." + o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector);
          var speed = o.speedOut;
          if (val) {
            i.show();
            /** @type {number} */
            speed = 0;
          }
          /** @type {boolean} */
          o.retainPath = false;
          o.onBeforeHide.call(i);
          i.stop(true, true).animate(o.animationOut, speed, function() {
            var s = $(this);
            o.onHide.call(s);
          });
        }
        return this;
      },
      show : function() {
        var o = getOptions(this);
        if (!o) {
          return this;
        }
        var $this = this.addClass(o.hoverClass);
        var options = $this.children(o.popUpSelector);
        return o.onBeforeShow.call(options), options.stop(true, true).animate(o.animation, o.speed, function() {
          o.onShow.call(options);
        }), this;
      },
      destroy : function() {
        return this.each(function() {
          var $hasPopUp;
          var $this = $(this);
          var o = $this.data("sf-options");
          return !!o && ($hasPopUp = $this.find(o.popUpSelector).parent("li"), clearTimeout(o.sfTimer), toggleMenuClasses($this, o), toggleAnchorClass($hasPopUp), toggleTouchAction($this), $this.off(".superfish").off(".hoverIntent"), $hasPopUp.children(o.popUpSelector).attr("style", function(canCreateDiscussions, aShortcut) {
            return aShortcut.replace(/display[^;]+;?/g, "");
          }), o.$path.removeClass(o.hoverClass + " " + c.bcClass).addClass(o.pathClass), $this.find("." + o.hoverClass).removeClass(o.hoverClass), o.onDestroy.call($this), void $this.removeData("sf-options"));
        });
      },
      init : function(options) {
        return this.each(function() {
          var $this = $(this);
          if ($this.data("sf-options")) {
            return false;
          }
          var o = $.extend({}, $.fn.superfish.defaults, options);
          var $hasPopUp = $this.find(o.popUpSelector).parent("li");
          o.$path = setPathToCurrent($this, o);
          $this.data("sf-options", o);
          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          applyHandlers($this, o);
          $hasPopUp.not("." + c.bcClass).superfish("hide", true);
          o.onInit.call(this);
        });
      }
    };
  }();
  /**
   * @param {string} method
   * @param {boolean} args
   * @return {?}
   */
  $.fn.superfish = function(method, args) {
    return o[method] ? o[method].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof method && method ? $.error("Method " + method + " does not exist on jQuery.fn.superfish") : o.init.apply(this, arguments);
  };
  $.fn.superfish.defaults = {
    popUpSelector : "ul,.sf-mega",
    hoverClass : "sfHover",
    pathClass : "overrideThisToUse",
    pathLevels : 1,
    delay : 800,
    animation : {
      opacity : "show"
    },
    animationOut : {
      opacity : "hide"
    },
    speed : "normal",
    speedOut : "fast",
    cssArrows : true,
    disableHI : false,
    onInit : $.noop,
    onBeforeShow : $.noop,
    onShow : $.noop,
    onBeforeHide : $.noop,
    onHide : $.noop,
    onIdle : $.noop,
    onDestroy : $.noop
  };
}(jQuery, window);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
  def : "easeOutQuad",
  swing : function(p, t, diff, n, c) {
    return jQuery.easing[jQuery.easing.def](p, t, diff, n, c);
  },
  easeInQuad : function(b, x, c, t, by) {
    return t * (x = x / by) * x + c;
  },
  easeOutQuad : function(b, x, c, t, by) {
    return -t * (x = x / by) * (x - 2) + c;
  },
  easeInOutQuad : function(d, pos, value, duration, speed) {
    return (pos = pos / (speed / 2)) < 1 ? duration / 2 * pos * pos + value : -duration / 2 * (--pos * (pos - 2) - 1) + value;
  },
  easeInCubic : function(b, x, c, t, by) {
    return t * (x = x / by) * x * x + c;
  },
  easeOutCubic : function(b, x, i, t, a) {
    return t * ((x = x / a - 1) * x * x + 1) + i;
  },
  easeInOutCubic : function(d, pos, c, t, speed) {
    return (pos = pos / (speed / 2)) < 1 ? t / 2 * pos * pos * pos + c : t / 2 * ((pos = pos - 2) * pos * pos + 2) + c;
  },
  easeInQuart : function(b, x, c, t, by) {
    return t * (x = x / by) * x * x * x + c;
  },
  easeOutQuart : function(b, x, t, c, dx) {
    return -c * ((x = x / dx - 1) * x * x * x - 1) + t;
  },
  easeInOutQuart : function(pos, d, c, x, t) {
    return (d = d / (t / 2)) < 1 ? x / 2 * d * d * d * d + c : -x / 2 * ((d = d - 2) * d * d * d - 2) + c;
  },
  easeInQuint : function(pos, x, c, t, by) {
    return t * (x = x / by) * x * x * x * x + c;
  },
  easeOutQuint : function(b, x, i, t, c) {
    return t * ((x = x / c - 1) * x * x * x * x + 1) + i;
  },
  easeInOutQuint : function(pos, d, c, x, t) {
    return (d = d / (t / 2)) < 1 ? x / 2 * d * d * d * d * d + c : x / 2 * ((d = d - 2) * d * d * d * d + 2) + c;
  },
  easeInSine : function(x, t, b, d, c) {
    return -d * Math.cos(t / c * (Math.PI / 2)) + d + b;
  },
  easeOutSine : function(d, t, i, x, c) {
    return x * Math.sin(t / c * (Math.PI / 2)) + i;
  },
  easeInOutSine : function(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo : function(pos, x, n, t, c) {
    return 0 == x ? n : t * Math.pow(2, 10 * (x / c - 1)) + n;
  },
  easeOutExpo : function(x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo : function(duration, t, b, c, d) {
    return 0 == t ? b : t == d ? b + c : (t = t / (d / 2)) < 1 ? c / 2 * Math.pow(2, 10 * (t - 1)) + b : c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc : function(pos, x, start, value, mag) {
    return -value * (Math.sqrt(1 - (x = x / mag) * x) - 1) + start;
  },
  easeOutCirc : function(b, x, i, t, c) {
    return t * Math.sqrt(1 - (x = x / c - 1) * x) + i;
  },
  easeInOutCirc : function(d, pos, value, start, speed) {
    return (pos = pos / (speed / 2)) < 1 ? -start / 2 * (Math.sqrt(1 - pos * pos) - 1) + value : start / 2 * (Math.sqrt(1 - (pos = pos - 2) * pos) + 1) + value;
  },
  easeInElastic : function(c, t, x_min, dx, d) {
    /** @type {number} */
    var s = 1.70158;
    /** @type {number} */
    var f = 0;
    /** @type {number} */
    var a = dx;
    if (0 == t) {
      return x_min;
    }
    if (1 == (t = t / d)) {
      return x_min + dx;
    }
    if (f || (f = .3 * d), a < Math.abs(dx)) {
      /** @type {number} */
      a = dx;
      /** @type {number} */
      s = f / 4;
    } else {
      /** @type {number} */
      s = f / (2 * Math.PI) * Math.asin(dx / a);
    }
    return -(a * Math.pow(2, 10 * (t = t - 1)) * Math.sin((t * d - s) * (2 * Math.PI) / f)) + x_min;
  },
  easeOutElastic : function(c, t, x_min, dx, d) {
    /** @type {number} */
    var s = 1.70158;
    /** @type {number} */
    var f = 0;
    /** @type {number} */
    var a = dx;
    if (0 == t) {
      return x_min;
    }
    if (1 == (t = t / d)) {
      return x_min + dx;
    }
    if (f || (f = .3 * d), a < Math.abs(dx)) {
      /** @type {number} */
      a = dx;
      /** @type {number} */
      s = f / 4;
    } else {
      /** @type {number} */
      s = f / (2 * Math.PI) * Math.asin(dx / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / f) + dx + x_min;
  },
  easeInOutElastic : function(x, t, b, c, d) {
    /** @type {number} */
    var s = 1.70158;
    /** @type {number} */
    var p = 0;
    /** @type {number} */
    var a = c;
    if (0 == t) {
      return b;
    }
    if (2 == (t = t / (d / 2))) {
      return b + c;
    }
    if (p || (p = d * (.3 * 1.5)), a < Math.abs(c)) {
      /** @type {number} */
      a = c;
      /** @type {number} */
      s = p / 4;
    } else {
      /** @type {number} */
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return t < 1 ? -.5 * (a * Math.pow(2, 10 * (t = t - 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b : a * Math.pow(2, -10 * (t = t - 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack : function(pos, x, t, b, s, width) {
    return void 0 == width && (width = 1.70158), b * (x = x / s) * x * ((width + 1) * x - width) + t;
  },
  easeOutBack : function(d, t, b, x, c, s) {
    return void 0 == s && (s = 1.70158), x * ((t = t / c - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack : function(d, t, value, x, c, s) {
    return void 0 == s && (s = 1.70158), (t = t / (c / 2)) < 1 ? x / 2 * (t * t * (((s = s * 1.525) + 1) * t - s)) + value : x / 2 * ((t = t - 2) * t * (((s = s * 1.525) + 1) * t + s) + 2) + value;
  },
  easeInBounce : function(x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce : function(x, t, b, c, d) {
    return (t = t / d) < 1 / 2.75 ? c * (7.5625 * t * t) + b : t < 2 / 2.75 ? c * (7.5625 * (t = t - 1.5 / 2.75) * t + .75) + b : t < 2.5 / 2.75 ? c * (7.5625 * (t = t - 2.25 / 2.75) * t + .9375) + b : c * (7.5625 * (t = t - 2.625 / 2.75) * t + .984375) + b;
  },
  easeInOutBounce : function(x, t, b, c, d) {
    return t < d / 2 ? .5 * jQuery.easing.easeInBounce(x, 2 * t, 0, c, d) + b : .5 * jQuery.easing.easeOutBounce(x, 2 * t - d, 0, c, d) + .5 * c + b;
  }
});
!function($) {
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  $.fn.UItoTop = function(options) {
    var defaults = {
      text : "To Top",
      min : 200,
      inDelay : 600,
      outDelay : 400,
      containerID : "toTop",
      containerHoverID : "toTopHover",
      scrollSpeed : 1200,
      easingType : "linear"
    };
    var settings = $.extend(defaults, options);
    /** @type {string} */
    var form = "#" + settings.containerID;
    /** @type {string} */
    var target = "#" + settings.containerHoverID;
    $("body").append('<a href="#" id="' + settings.containerID + '">' + settings.text + "</a>");
    $(form).hide().on("click.UItoTop", function() {
      return $("html, body").animate({
        scrollTop : 0
      }, settings.scrollSpeed, settings.easingType), $("#" + settings.containerHoverID, this).stop().animate({
        opacity : 0
      }, settings.inDelay, settings.easingType), false;
    }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function() {
      $(target, this).stop().animate({
        opacity : 1
      }, 600, "linear");
    }, function() {
      $(target, this).stop().animate({
        opacity : 0
      }, 700, "linear");
    });
    $(window).scroll(function() {
      var newValue = $(window).scrollTop();
      if ("undefined" == typeof document.body.style.maxHeight) {
        $(form).css({
          position : "absolute",
          top : newValue + $(window).height() - 50
        });
      }
      if (newValue > settings.min) {
        $(form).fadeIn(settings.inDelay);
      } else {
        $(form).fadeOut(settings.Outdelay);
      }
    });
  };
}(jQuery);
!function(factory) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(jQuery);
  }
}(function($) {
  /**
   * @param {!Object} e
   * @param {!Location} item
   * @param {!Object} options
   * @return {undefined}
   */
  function scroll(e, item, options) {
    var name = item.hash.slice(1);
    /** @type {!Element} */
    var elem = document.getElementById(name) || document.getElementsByName(name)[0];
    if (elem) {
      if (e) {
        e.preventDefault();
      }
      var that = $(options.target);
      if (!(options.lock && that.is(":animated") || options.onBefore && options.onBefore(e, elem, that) === false)) {
        if (options.stop && that._scrollable().stop(true), options.hash) {
          /** @type {string} */
          var key = elem.id === name ? "id" : "name";
          var beforeCirc = $("<a> </a>").attr(key, name).css({
            position : "absolute",
            top : $(window).scrollTop(),
            left : $(window).scrollLeft()
          });
          /** @type {string} */
          elem[key] = "";
          $("body").prepend(beforeCirc);
          location.hash = item.hash;
          beforeCirc.remove();
          elem[key] = name;
        }
        that.scrollTo(elem, options).trigger("notify.serialScroll", [elem]);
      }
    }
  }
  /** @type {string} */
  var URI = location.href.replace(/#.*/, "");
  /** @type {function(!Object): undefined} */
  var $localScroll = $.localScroll = function(settings) {
    $("body").localScroll(settings);
  };
  return $localScroll.defaults = {
    duration : 1e3,
    axis : "y",
    event : "click",
    stop : true,
    target : window
  }, $.fn.localScroll = function(options) {
    /**
     * @return {?}
     */
    function filter() {
      return !!this.href && !!this.hash && this.href.replace(this.hash, "") == URI && (!options.filter || $(this).is(options.filter));
    }
    return options = $.extend({}, $localScroll.defaults, options), options.hash && location.hash && (options.target && window.scrollTo(0, 0), scroll(0, location, options)), options.lazy ? this.on(options.event, "a,area", function(ownerDocument) {
      if (filter.call(this)) {
        scroll(ownerDocument, this, options);
      }
    }) : this.find("a,area").filter(filter).bind(options.event, function(ownerDocument) {
      scroll(ownerDocument, this, options);
    }).end().end();
  }, $localScroll.hash = function() {
  }, $localScroll;
});
!function($) {
  /**
   * @param {number} val
   * @return {?}
   */
  function both(val) {
    return "object" == typeof val ? val : {
      top : val,
      left : val
    };
  }
  /** @type {function(!Object, !Object, !Object): undefined} */
  var $scrollTo = $.scrollTo = function(a, b, c) {
    $(window).scrollTo(a, b, c);
  };
  $scrollTo.defaults = {
    axis : "xy",
    duration : parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
    limit : true
  };
  /**
   * @param {?} timeColumn
   * @return {?}
   */
  $scrollTo.window = function(timeColumn) {
    return $(window)._scrollable();
  };
  /**
   * @return {?}
   */
  $.fn._scrollable = function() {
    return this.map(function() {
      var elem = this;
      /** @type {boolean} */
      var n = !elem.nodeName || $.inArray(elem.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
      if (!n) {
        return elem;
      }
      var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
      return /webkit/i.test(navigator.userAgent) || "BackCompat" == doc.compatMode ? doc.body : doc.documentElement;
    });
  };
  /**
   * @param {string} r
   * @param {!Object} f
   * @param {!Object} g
   * @return {?}
   */
  $.fn.scrollTo = function(r, f, g) {
    return "object" == typeof f && (g = f, f = 0), "function" == typeof g && (g = {
      onAfter : g
    }), "max" == r && (r = 9e9), g = $.extend({}, $scrollTo.defaults, g), f = f || g.duration, g.queue = g.queue && g.axis.length > 1, g.queue && (f = f / 2), g.offset = both(g.offset), g.over = both(g.over), this._scrollable().each(function() {
      /**
       * @param {!Function} a
       * @return {undefined}
       */
      function animate(a) {
        $elem.animate(config, f, g.easing, a && function() {
          a.call(this, f, g);
        });
      }
      if (null != r) {
        var identifiers;
        var elem = this;
        var $elem = $(elem);
        var f = r;
        var config = {};
        var isLast = $elem.is("html,body");
        switch(typeof f) {
          case "number":
          case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
              f = both(f);
              break;
            }
            if (f = $(f, this), !f.length) {
              return;
            }
          case "object":
            if (f.is || f.style) {
              identifiers = (f = $(f)).offset();
            }
        }
        $.each(g.axis.split(""), function(wasOver, width) {
          /** @type {string} */
          var b = "x" == width ? "Left" : "Top";
          /** @type {string} */
          var i = b.toLowerCase();
          /** @type {string} */
          var key = "scroll" + b;
          var value = elem[key];
          var borderWidth = $scrollTo.max(elem, width);
          if (identifiers) {
            config[key] = identifiers[i] + (isLast ? 0 : value - $elem.offset()[i]);
            if (g.margin) {
              config[key] -= parseInt(f.css("margin" + b)) || 0;
              config[key] -= parseInt(f.css("border" + b + "Width")) || 0;
            }
            config[key] += g.offset[i] || 0;
            if (g.over[i]) {
              config[key] += f["x" == width ? "width" : "height"]() * g.over[i];
            }
          } else {
            var value = f[i];
            config[key] = value.slice && "%" == value.slice(-1) ? parseFloat(value) / 100 * borderWidth : value;
          }
          if (g.limit && /^\d+$/.test(config[key])) {
            /** @type {number} */
            config[key] = config[key] <= 0 ? 0 : Math.min(config[key], borderWidth);
          }
          if (!wasOver && g.queue) {
            if (value != config[key]) {
              animate(g.onAfterFirst);
            }
            delete config[key];
          }
        });
        animate(g.onAfter);
      }
    }).end();
  };
  /**
   * @param {?} a
   * @param {number} b
   * @return {?}
   */
  $scrollTo.max = function(a, b) {
    /** @type {string} */
    var Dim = "x" == b ? "Width" : "Height";
    /** @type {string} */
    var scroll = "scroll" + Dim;
    if (!$(a).is("html,body")) {
      return a[scroll] - $(a)[Dim.toLowerCase()]();
    }
    /** @type {string} */
    var size = "client" + Dim;
    var html = a.ownerDocument.documentElement;
    var body = a.ownerDocument.body;
    return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
  };
}(jQuery);
!function($) {
  var t = $(window);
  var windowHeight = t.height();
  t.resize(function() {
    windowHeight = t.height();
  });
  /**
   * @param {string} xpos
   * @param {number} speedFactor
   * @param {boolean} outerHeight
   * @return {undefined}
   */
  $.fn.parallax = function(xpos, speedFactor, outerHeight) {
    /**
     * @return {undefined}
     */
    function update() {
      var pos = t.scrollTop();
      $this.each(function() {
        var input = $(this);
        var top = input.offset().top;
        var s = getComputedStyle(input);
        if (!(top + s < pos || top > pos + windowHeight)) {
          $this.css("backgroundPosition", xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
        }
      });
    }
    var getComputedStyle;
    var firstTop;
    var $this = $(this);
    $this.each(function() {
      firstTop = $this.offset().top;
    });
    /** @type {function(!Window): ?} */
    getComputedStyle = outerHeight ? function(replacement) {
      return replacement.outerHeight(true);
    } : function(loops) {
      return loops.height();
    };
    if (arguments.length < 1 || null === xpos) {
      /** @type {string} */
      xpos = "50%";
    }
    if (arguments.length < 2 || null === speedFactor) {
      /** @type {number} */
      speedFactor = .1;
    }
    if (arguments.length < 3 || null === outerHeight) {
      /** @type {boolean} */
      outerHeight = true;
    }
    t.bind("scroll", update).resize(update);
    update();
  };
}(jQuery);
!function(window, factory) {
  if ("object" == typeof exports) {
    module.exports = factory(require("jquery"));
  } else {
    if ("function" == typeof define && define.amd) {
      define(["jquery"], factory);
    } else {
      factory(window.jQuery);
    }
  }
}(this, function($) {
  /**
   * @param {!Object} el
   * @param {!Object} options
   * @return {undefined}
   */
  var CanvasRenderer = function(el, options) {
    var pixdata;
    /** @type {!Element} */
    var canvas = document.createElement("canvas");
    el.appendChild(canvas);
    if ("undefined" != typeof G_vmlCanvasManager) {
      G_vmlCanvasManager.initElement(canvas);
    }
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.height = options.size;
    /** @type {number} */
    var scaleBy = 1;
    if (window.devicePixelRatio > 1) {
      /** @type {number} */
      scaleBy = window.devicePixelRatio;
      /** @type {string} */
      canvas.style.width = canvas.style.height = [options.size, "px"].join("");
      /** @type {number} */
      canvas.width = canvas.height = options.size * scaleBy;
      ctx.scale(scaleBy, scaleBy);
    }
    ctx.translate(options.size / 2, options.size / 2);
    ctx.rotate((-.5 + options.rotate / 180) * Math.PI);
    /** @type {number} */
    var hr = (options.size - options.lineWidth) / 2;
    if (options.scaleColor && options.scaleLength) {
      /** @type {number} */
      hr = hr - (options.scaleLength + 2);
    }
    /** @type {function(): number} */
    Date.now = Date.now || function() {
      return +new Date;
    };
    /**
     * @param {string} lineColor
     * @param {number} lineWidth
     * @param {number} percent
     * @return {undefined}
     */
    var drawCircle = function(lineColor, lineWidth, percent) {
      /** @type {number} */
      percent = Math.min(Math.max(-1, percent || 0), 1);
      /** @type {boolean} */
      var isNegative = 0 >= percent;
      ctx.beginPath();
      ctx.arc(0, 0, hr, 0, 2 * Math.PI * percent, isNegative);
      /** @type {string} */
      ctx.strokeStyle = lineColor;
      /** @type {number} */
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };
    /**
     * @return {undefined}
     */
    var drawScale = function() {
      var offset;
      var length;
      /** @type {number} */
      ctx.lineWidth = 1;
      ctx.fillStyle = options.scaleColor;
      ctx.save();
      /** @type {number} */
      var a = 24;
      for (; a > 0; --a) {
        if (a % 6 === 0) {
          length = options.scaleLength;
          /** @type {number} */
          offset = 0;
        } else {
          /** @type {number} */
          length = .6 * options.scaleLength;
          /** @type {number} */
          offset = options.scaleLength - length;
        }
        ctx.fillRect(-options.size / 2 + offset, 0, length, 1);
        ctx.rotate(Math.PI / 12);
      }
      ctx.restore();
    };
    var reqAnimationFrame = function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(rafFunction) {
        window.setTimeout(rafFunction, 1e3 / 60);
      };
    }();
    /**
     * @return {undefined}
     */
    var drawBackground = function() {
      if (options.scaleColor) {
        drawScale();
      }
      if (options.trackColor) {
        drawCircle(options.trackColor, options.lineWidth, 1);
      }
    };
    /**
     * @return {?}
     */
    this.getCanvas = function() {
      return canvas;
    };
    /**
     * @return {?}
     */
    this.getCtx = function() {
      return ctx;
    };
    /**
     * @return {undefined}
     */
    this.clear = function() {
      ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
    };
    this.draw = function(percent) {
      if (options.scaleColor || options.trackColor) {
        if (ctx.getImageData && ctx.putImageData) {
          if (pixdata) {
            ctx.putImageData(pixdata, 0, 0);
          } else {
            drawBackground();
            pixdata = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
          }
        } else {
          this.clear();
          drawBackground();
        }
      } else {
        this.clear();
      }
      ctx.lineCap = options.lineCap;
      var color;
      color = "function" == typeof options.barColor ? options.barColor(percent) : options.barColor;
      drawCircle(color, options.lineWidth, percent / 100);
    }.bind(this);
    this.animate = function(from, to) {
      /** @type {number} */
      var reachableIn = Date.now();
      options.onStart(from, to);
      var animation = function() {
        /** @type {number} */
        var time = Math.min(Date.now() - reachableIn, options.animate.duration);
        var currentValue = options.easing(this, time, from, to - from, options.animate.duration);
        this.draw(currentValue);
        options.onStep(from, to, currentValue);
        if (time >= options.animate.duration) {
          options.onStop(from, to);
        } else {
          reqAnimationFrame(animation);
        }
      }.bind(this);
      reqAnimationFrame(animation);
    }.bind(this);
  };
  /**
   * @param {!Element} el
   * @param {string} opts
   * @return {undefined}
   */
  var EasyPieChart = function(el, opts) {
    var defaultOptions = {
      barColor : "#ef1e25",
      trackColor : "#f9f9f9",
      scaleColor : "#dfe0e0",
      scaleLength : 5,
      lineCap : "round",
      lineWidth : 3,
      size : 110,
      rotate : 0,
      animate : {
        duration : 1e3,
        enabled : true
      },
      easing : function(type, a, key, n, x) {
        return a = a / (x / 2), 1 > a ? n / 2 * a * a + key : -n / 2 * (--a * (a - 2) - 1) + key;
      },
      onStart : function() {
      },
      onStep : function() {
      },
      onStop : function() {
      }
    };
    if ("undefined" != typeof CanvasRenderer) {
      /** @type {function(!Object, !Object): undefined} */
      defaultOptions.renderer = CanvasRenderer;
    } else {
      if ("undefined" == typeof SVGRenderer) {
        throw new Error("Please load either the SVG- or the CanvasRenderer");
      }
      defaultOptions.renderer = SVGRenderer;
    }
    var options = {};
    /** @type {number} */
    var value = 0;
    var init = function() {
      /** @type {!Element} */
      this.el = el;
      this.options = options;
      var key;
      for (key in defaultOptions) {
        if (defaultOptions.hasOwnProperty(key)) {
          options[key] = opts && "undefined" != typeof opts[key] ? opts[key] : defaultOptions[key];
          if ("function" == typeof options[key]) {
            options[key] = options[key].bind(this);
          }
        }
      }
      options.easing = "string" == typeof options.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[options.easing]) ? jQuery.easing[options.easing] : defaultOptions.easing;
      if ("number" == typeof options.animate) {
        options.animate = {
          duration : options.animate,
          enabled : true
        };
      }
      if (!("boolean" != typeof options.animate || options.animate)) {
        options.animate = {
          duration : 1e3,
          enabled : options.animate
        };
      }
      this.renderer = new options.renderer(el, options);
      this.renderer.draw(value);
      if (el.dataset && el.dataset.percent) {
        this.update(parseFloat(el.dataset.percent));
      } else {
        if (el.getAttribute && el.getAttribute("data-percent")) {
          this.update(parseFloat(el.getAttribute("data-percent")));
        }
      }
    }.bind(this);
    this.update = function(o) {
      return o = parseFloat(o), options.animate.enabled ? this.renderer.animate(value, o) : this.renderer.draw(o), value = o, this;
    }.bind(this);
    /**
     * @return {?}
     */
    this.disableAnimation = function() {
      return options.animate.enabled = false, this;
    };
    /**
     * @return {?}
     */
    this.enableAnimation = function() {
      return options.animate.enabled = true, this;
    };
    init();
  };
  /**
   * @param {!Object} options
   * @return {?}
   */
  $.fn.easyPieChart = function(options) {
    return this.each(function() {
      var instanceOptions;
      if (!$.data(this, "easyPieChart")) {
        instanceOptions = $.extend({}, options, $(this).data());
        $.data(this, "easyPieChart", new EasyPieChart(this, instanceOptions));
      }
    });
  };
});
!function($) {
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  var Progressbar = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Progressbar.defaults, options);
  };
  Progressbar.defaults = {
    transition_delay : 300,
    refresh_speed : 50,
    display_text : "none",
    use_percentage : true,
    percent_format : function(wallaby) {
      return wallaby + "%";
    },
    amount_format : function(amount_max, amount_min) {
      return amount_max + " / " + amount_min;
    },
    update : $.noop,
    done : $.noop,
    fail : $.noop
  };
  /**
   * @return {?}
   */
  Progressbar.prototype.transition = function() {
    var el = this.$element;
    var $parent = el.parent();
    var $back_text = this.$back_text;
    var $front_text = this.$front_text;
    var options = this.options;
    /** @type {number} */
    var data_transitiongoal = parseInt(el.attr("data-transitiongoal"));
    /** @type {number} */
    var aria_valuemin = parseInt(el.attr("aria-valuemin")) || 0;
    /** @type {number} */
    var aria_valuemax = parseInt(el.attr("aria-valuemax")) || 100;
    var verticalStyle = $parent.hasClass("vertical");
    var aCh = options.update && "function" == typeof options.update ? options.update : Progressbar.defaults.update;
    var __setAttr = options.done && "function" == typeof options.done ? options.done : Progressbar.defaults.done;
    var getOppositeDir = options.fail && "function" == typeof options.fail ? options.fail : Progressbar.defaults.fail;
    if (isNaN(data_transitiongoal)) {
      return void getOppositeDir("data-transitiongoal not set");
    }
    /** @type {number} */
    var a = Math.round(100 * (data_transitiongoal - aria_valuemin) / (aria_valuemax - aria_valuemin));
    if ("center" === options.display_text && !$back_text && !$front_text) {
      this.$back_text = $back_text = $("<span>").addClass("progressbar-back-text").prependTo($parent);
      this.$front_text = $front_text = $("<span>").addClass("progressbar-front-text").prependTo(el);
      var size;
      if (verticalStyle) {
        size = $parent.css("height");
        $back_text.css({
          height : size,
          "line-height" : size
        });
        $front_text.css({
          height : size,
          "line-height" : size
        });
        $(window).resize(function() {
          size = $parent.css("height");
          $back_text.css({
            height : size,
            "line-height" : size
          });
          $front_text.css({
            height : size,
            "line-height" : size
          });
        });
      } else {
        size = $parent.css("width");
        $front_text.css({
          width : size
        });
        $(window).resize(function() {
          size = $parent.css("width");
          $front_text.css({
            width : size
          });
        });
      }
    }
    setTimeout(function() {
      var key;
      var current_value;
      var this_size;
      var parent_size;
      var text;
      if (verticalStyle) {
        el.css("height", a + "%");
      } else {
        el.css("width", a + "%");
      }
      /** @type {number} */
      var chat_retry = setInterval(function() {
        if (verticalStyle) {
          this_size = el.height();
          parent_size = $parent.height();
        } else {
          this_size = el.width();
          parent_size = $parent.width();
        }
        /** @type {number} */
        key = Math.round(100 * this_size / parent_size);
        /** @type {number} */
        current_value = Math.round(aria_valuemin + this_size / parent_size * (aria_valuemax - aria_valuemin));
        if (key >= a) {
          /** @type {number} */
          key = a;
          /** @type {number} */
          current_value = data_transitiongoal;
          __setAttr(el);
          clearInterval(chat_retry);
        }
        if ("none" !== options.display_text) {
          text = options.use_percentage ? options.percent_format(key) : options.amount_format(current_value, aria_valuemax, aria_valuemin);
          if ("fill" === options.display_text) {
            el.text(text);
          } else {
            if ("center" === options.display_text) {
              $back_text.text(text);
              $front_text.text(text);
            }
          }
        }
        el.attr("aria-valuenow", current_value);
        aCh(key, el);
      }, options.refresh_speed);
    }, options.transition_delay);
  };
  var old = $.fn.progressbar;
  /**
   * @param {string} key
   * @return {?}
   */
  $.fn.progressbar = function(key) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data("bs.progressbar");
      var options = "object" == typeof key && key;
      if (data && options) {
        $.extend(data.options, options);
      }
      if (!data) {
        $this.data("bs.progressbar", data = new Progressbar(this, options));
      }
      data.transition();
    });
  };
  /** @type {function(!Array, !Object): undefined} */
  $.fn.progressbar.Constructor = Progressbar;
  /**
   * @return {?}
   */
  $.fn.progressbar.noConflict = function() {
    return $.fn.progressbar = old, this;
  };
}(window.jQuery);
!function($) {
  /**
   * @param {number} t
   * @param {!Object} o
   * @return {?}
   */
  function formatToFixed2(t, o) {
    return t.toFixed(o.decimals);
  }
  /**
   * @param {number} option
   * @return {?}
   */
  $.fn.countTo = function(option) {
    return option = option || {}, $(this).each(function() {
      /**
       * @return {undefined}
       */
      function updateTimer() {
        el = el + extraString;
        reconnectTryTimes++;
        render(el);
        if ("function" == typeof options.onUpdate) {
          options.onUpdate.call(f, el);
        }
        if (reconnectTryTimes >= maxReconnectTryTimes) {
          $self.removeData("countTo");
          clearInterval(data.interval);
          el = options.to;
          if ("function" == typeof options.onComplete) {
            options.onComplete.call(f, el);
          }
        }
      }
      /**
       * @param {?} table
       * @return {undefined}
       */
      function render(table) {
        var id = options.formatter.call(f, table, options);
        $self.text(id);
      }
      var options = $.extend({}, $.fn.countTo.defaults, {
        from : $(this).data("from"),
        to : $(this).data("to"),
        speed : $(this).data("speed"),
        refreshInterval : $(this).data("refresh-interval"),
        decimals : $(this).data("decimals")
      }, option);
      /** @type {number} */
      var maxReconnectTryTimes = Math.ceil(options.speed / options.refreshInterval);
      /** @type {number} */
      var extraString = (options.to - options.from) / maxReconnectTryTimes;
      var f = this;
      var $self = $(this);
      /** @type {number} */
      var reconnectTryTimes = 0;
      var el = options.from;
      var data = $self.data("countTo") || {};
      $self.data("countTo", data);
      if (data.interval) {
        clearInterval(data.interval);
      }
      /** @type {number} */
      data.interval = setInterval(updateTimer, options.refreshInterval);
      render(el);
    });
  };
  $.fn.countTo.defaults = {
    from : 0,
    to : 0,
    speed : 1e3,
    refreshInterval : 100,
    decimals : 0,
    formatter : formatToFixed2,
    onUpdate : null,
    onComplete : null
  };
}(jQuery);
!function($) {
  /**
   * @return {?}
   */
  function getHashtag() {
    /** @type {string} */
    var url = location.href;
    return hashtag = -1 !== url.indexOf("#prettyPhoto") && decodeURI(url.substring(url.indexOf("#prettyPhoto") + 1, url.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag;
  }
  /**
   * @return {undefined}
   */
  function checkType() {
    if ("undefined" != typeof theRel) {
      /** @type {string} */
      location.hash = theRel + "/" + rel_index + "/";
    }
  }
  /**
   * @return {undefined}
   */
  function clearHashtag() {
    if (-1 !== location.href.indexOf("#prettyPhoto")) {
      /** @type {string} */
      location.hash = "prettyPhoto";
    }
  }
  /**
   * @param {string} name
   * @param {?} url
   * @return {?}
   */
  function getParam(name, url) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    /** @type {string} */
    var regExpStr = "[\\?&]" + name + "=([^&#]*)";
    /** @type {!RegExp} */
    var regExp = new RegExp(regExpStr);
    /** @type {(Array<string>|null)} */
    var path = regExp.exec(url);
    return null == path ? "" : path[1];
  }
  $.prettyPhoto = {
    version : "3.1.6"
  };
  /**
   * @param {!Object} pp_settings
   * @return {?}
   */
  $.fn.prettyPhoto = function(pp_settings) {
    /**
     * @return {undefined}
     */
    function _showContent() {
      $(".pp_loaderIcon").hide();
      projectedTop = scroll_pos.scrollTop + (windowHeight / 2 - self.containerHeight / 2);
      if (projectedTop < 0) {
        /** @type {number} */
        projectedTop = 0;
      }
      $ppt.fadeTo(settings.animation_speed, 1);
      $pp_pic_holder.find(".pp_content").animate({
        height : self.contentHeight,
        width : self.contentWidth
      }, settings.animation_speed);
      $pp_pic_holder.animate({
        top : projectedTop,
        left : j / 2 - self.containerWidth / 2 < 0 ? 0 : j / 2 - self.containerWidth / 2,
        width : self.containerWidth
      }, settings.animation_speed, function() {
        $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(self.height).width(self.width);
        $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);
        if (isSet && "image" == _getFileType(pp_images[set_position])) {
          $pp_pic_holder.find(".pp_hoverContainer").show();
        } else {
          $pp_pic_holder.find(".pp_hoverContainer").hide();
        }
        if (settings.allow_expand) {
          if (self.resized) {
            $("a.pp_expand,a.pp_contract").show();
          } else {
            $("a.pp_expand").hide();
          }
        }
        if (!(!settings.autoplay_slideshow || a || f)) {
          $.prettyPhoto.startSlideshow();
        }
        settings.changepicturecallback();
        /** @type {boolean} */
        f = true;
      });
      _insert_gallery();
      pp_settings.ajaxcallback();
    }
    /**
     * @param {!Function} callback
     * @return {undefined}
     */
    function _hideContent(callback) {
      $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden");
      $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
        $(".pp_loaderIcon").show();
        callback();
      });
    }
    /**
     * @param {number} setCount
     * @return {undefined}
     */
    function _checkPosition(setCount) {
      if (setCount > 1) {
        $(".pp_nav").show();
      } else {
        $(".pp_nav").hide();
      }
    }
    /**
     * @param {number} width
     * @param {number} height
     * @return {?}
     */
    function _fitToViewport(width, height) {
      if (resized = false, _getDimensions(width, height), imageWidth = width, imageHeight = height, (pp_containerWidth > j || pp_containerHeight > windowHeight) && doresize && settings.allow_resize && !$j) {
        /** @type {boolean} */
        resized = true;
        /** @type {boolean} */
        fitting = false;
        for (; !fitting;) {
          if (pp_containerWidth > j) {
            /** @type {number} */
            imageWidth = j - 200;
            /** @type {number} */
            imageHeight = height / width * imageWidth;
          } else {
            if (pp_containerHeight > windowHeight) {
              /** @type {number} */
              imageHeight = windowHeight - 200;
              /** @type {number} */
              imageWidth = width / height * imageHeight;
            } else {
              /** @type {boolean} */
              fitting = true;
            }
          }
          pp_containerHeight = imageHeight;
          pp_containerWidth = imageWidth;
        }
        if (pp_containerWidth > j || pp_containerHeight > windowHeight) {
          _fitToViewport(pp_containerWidth, pp_containerHeight);
        }
        _getDimensions(imageWidth, imageHeight);
      }
      return {
        width : Math.floor(imageWidth),
        height : Math.floor(imageHeight),
        containerHeight : Math.floor(pp_containerHeight),
        containerWidth : Math.floor(pp_containerWidth) + 2 * settings.horizontal_padding,
        contentHeight : Math.floor(pp_contentHeight),
        contentWidth : Math.floor(pp_contentWidth),
        resized : resized
      };
    }
    /**
     * @param {!Object} width
     * @param {number} height
     * @return {undefined}
     */
    function _getDimensions(width, height) {
      /** @type {number} */
      width = parseFloat(width);
      /** @type {number} */
      height = parseFloat(height);
      $pp_details = $pp_pic_holder.find(".pp_details");
      $pp_details.width(width);
      /** @type {number} */
      detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom"));
      $pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($("body")).css({
        position : "absolute",
        top : -1e4
      });
      detailsHeight = detailsHeight + $pp_details.height();
      detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight;
      $pp_details.remove();
      $pp_title = $pp_pic_holder.find(".ppt");
      $pp_title.width(width);
      /** @type {number} */
      titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom"));
      $pp_title = $pp_title.clone().appendTo($("body")).css({
        position : "absolute",
        top : -1e4
      });
      titleHeight = titleHeight + $pp_title.height();
      $pp_title.remove();
      pp_contentHeight = height + detailsHeight;
      /** @type {!Object} */
      pp_contentWidth = width;
      pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height();
      /** @type {!Object} */
      pp_containerWidth = width;
    }
    /**
     * @param {string} itemSrc
     * @return {?}
     */
    function _getFileType(itemSrc) {
      return itemSrc.match(/youtube\.com\/watch/i) || itemSrc.match(/youtu\.be/i) ? "youtube" : itemSrc.match(/vimeo\.com/i) ? "vimeo" : itemSrc.match(/\b.mov\b/i) ? "quicktime" : itemSrc.match(/\b.swf\b/i) ? "flash" : itemSrc.match(/\biframe=true\b/i) ? "iframe" : itemSrc.match(/\bajax=true\b/i) ? "ajax" : itemSrc.match(/\bcustom=true\b/i) ? "custom" : "#" == itemSrc.substr(0, 1) ? "inline" : "image";
    }
    /**
     * @return {undefined}
     */
    function _center_overlay() {
      if (doresize && "undefined" != typeof $pp_pic_holder) {
        if (scroll_pos = _get_scroll(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = windowHeight / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > windowHeight) {
          return;
        }
        $pp_pic_holder.css({
          top : projectedTop,
          left : j / 2 + scroll_pos.scrollLeft - contentwidth / 2
        });
      }
    }
    /**
     * @return {?}
     */
    function _get_scroll() {
      return self.pageYOffset ? {
        scrollTop : self.pageYOffset,
        scrollLeft : self.pageXOffset
      } : document.documentElement && document.documentElement.scrollTop ? {
        scrollTop : document.documentElement.scrollTop,
        scrollLeft : document.documentElement.scrollLeft
      } : document.body ? {
        scrollTop : document.body.scrollTop,
        scrollLeft : document.body.scrollLeft
      } : void 0;
    }
    /**
     * @return {undefined}
     */
    function _resize_overlay() {
      windowHeight = $(window).height();
      j = $(window).width();
      if ("undefined" != typeof $pp_overlay) {
        $pp_overlay.height($(document).height()).width(j);
      }
    }
    /**
     * @return {undefined}
     */
    function _insert_gallery() {
      if (isSet && settings.overlay_gallery && "image" == _getFileType(pp_images[set_position])) {
        /** @type {number} */
        itemWidth = 57;
        /** @type {number} */
        navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30;
        /** @type {number} */
        itemsPerPage = Math.floor((self.containerWidth - 100 - navWidth) / itemWidth);
        itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length;
        /** @type {number} */
        totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;
        if (0 == totalPage) {
          /** @type {number} */
          navWidth = 0;
          $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide();
        } else {
          $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show();
        }
        /** @type {number} */
        galleryWidth = itemsPerPage * itemWidth;
        /** @type {number} */
        fullGalleryWidth = pp_images.length * itemWidth;
        $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");
        /** @type {number} */
        goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage;
        $.prettyPhoto.changeGalleryPage(goToPage);
        $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected");
      } else {
        $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave");
      }
    }
    /**
     * @return {undefined}
     */
    function _build_overlay() {
      if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), $("body").append(settings.markup), $pp_pic_holder = $(".pp_pic_holder"), $ppt = $(".ppt"), $pp_overlay = $("div.pp_overlay"), isSet && settings.overlay_gallery) {
        /** @type {number} */
        currentGalleryPage = 0;
        /** @type {string} */
        toInject = "";
        /** @type {number} */
        var i = 0;
        for (; i < pp_images.length; i++) {
          if (pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)) {
            /** @type {string} */
            classname = "";
            img_src = pp_images[i];
          } else {
            /** @type {string} */
            classname = "default";
            /** @type {string} */
            img_src = "";
          }
          /** @type {string} */
          toInject = toInject + ("<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>");
        }
        toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
        $pp_pic_holder.find("#pp_full_res").after(toInject);
        $pp_gallery = $(".pp_pic_holder .pp_gallery");
        $pp_gallery_li = $pp_gallery.find("li");
        $pp_gallery.find(".pp_arrow_next").click(function() {
          return $.prettyPhoto.changeGalleryPage("next"), $.prettyPhoto.stopSlideshow(), false;
        });
        $pp_gallery.find(".pp_arrow_previous").click(function() {
          return $.prettyPhoto.changeGalleryPage("previous"), $.prettyPhoto.stopSlideshow(), false;
        });
        $pp_pic_holder.find(".pp_content").hover(function() {
          $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn();
        }, function() {
          $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut();
        });
        /** @type {number} */
        itemWidth = 57;
        $pp_gallery_li.each(function(prev) {
          $(this).find("a").click(function() {
            return $.prettyPhoto.changePage(prev), $.prettyPhoto.stopSlideshow(), false;
          });
        });
      }
      if (settings.slideshow) {
        $pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');
        $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
          return $.prettyPhoto.startSlideshow(), false;
        });
      }
      $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
      $pp_overlay.css({
        opacity : 0,
        height : $(document).height(),
        width : $(window).width()
      }).bind("click", function() {
        if (!settings.modal) {
          $.prettyPhoto.close();
        }
      });
      $("a.pp_close").bind("click", function() {
        return $.prettyPhoto.close(), false;
      });
      if (settings.allow_expand) {
        $("a.pp_expand").bind("click", function() {
          return $(this).hasClass("pp_expand") ? ($(this).removeClass("pp_expand").addClass("pp_contract"), doresize = false) : ($(this).removeClass("pp_contract").addClass("pp_expand"), doresize = true), _hideContent(function() {
            $.prettyPhoto.open();
          }), false;
        });
      }
      $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
        return $.prettyPhoto.changePage("previous"), $.prettyPhoto.stopSlideshow(), false;
      });
      $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
        return $.prettyPhoto.changePage("next"), $.prettyPhoto.stopSlideshow(), false;
      });
      _center_overlay();
    }
    pp_settings = jQuery.extend({
      hook : "rel",
      animation_speed : "fast",
      ajaxcallback : function() {
      },
      slideshow : 5E3,
      autoplay_slideshow : false,
      opacity : .8,
      show_title : true,
      allow_resize : true,
      allow_expand : true,
      default_width : 500,
      default_height : 344,
      counter_separator_label : "/",
      theme : "pp_default",
      horizontal_padding : 20,
      hideflash : false,
      wmode : "opaque",
      autoplay : true,
      modal : false,
      deeplinking : true,
      overlay_gallery : true,
      overlay_gallery_max : 30,
      keyboard_shortcuts : true,
      changepicturecallback : function() {
      },
      callback : function() {
      },
      ie6_fallback : true,
      markup : '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
      gallery_markup : '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
      image_markup : '<img id="fullResImage" src="{path}" />',
      flash_markup : '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
      quicktime_markup : '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
      iframe_markup : '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
      inline_markup : '<div class="pp_inline">{content}</div>',
      custom_markup : "",
      social_tools : '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js">\x3c/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
    }, pp_settings);
    var self;
    var f;
    var pp_contentHeight;
    var pp_contentWidth;
    var pp_containerHeight;
    var pp_containerWidth;
    var a;
    var value = this;
    /** @type {boolean} */
    var $j = false;
    var windowHeight = $(window).height();
    var j = $(window).width();
    return doresize = true, scroll_pos = _get_scroll(), $(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
      _center_overlay();
      _resize_overlay();
    }), pp_settings.keyboard_shortcuts && $(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(event) {
      if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) {
        switch(event.keyCode) {
          case 37:
            $.prettyPhoto.changePage("previous");
            event.preventDefault();
            break;
          case 39:
            $.prettyPhoto.changePage("next");
            event.preventDefault();
            break;
          case 27:
            if (!settings.modal) {
              $.prettyPhoto.close();
            }
            event.preventDefault();
        }
      }
    }), $.prettyPhoto.initialize = function() {
      return settings = pp_settings, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = $(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(value, function(clicked_el) {
        return -1 != $(clicked_el).attr(settings.hook).indexOf(theRel) ? $(clicked_el).attr("href") : void 0;
      }) : $.makeArray($(this).attr("href")), pp_titles = isSet ? jQuery.map(value, function(e) {
        return -1 != $(e).attr(settings.hook).indexOf(theRel) ? $(e).find("img").attr("alt") ? $(e).find("img").attr("alt") : "" : void 0;
      }) : $.makeArray($(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(value, function(clicked_el) {
        return -1 != $(clicked_el).attr(settings.hook).indexOf(theRel) ? $(clicked_el).attr("title") ? $(clicked_el).attr("title") : "" : void 0;
      }) : $.makeArray($(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = false), set_position = jQuery.inArray($(this).attr("href"), pp_images), rel_index = isSet ? set_position : $("a[" + settings.hook + "^='" + theRel + "']").index($(this)), _build_overlay(this), settings.allow_resize && $(window).bind("scroll.prettyphoto", function() {
        _center_overlay();
      }), $.prettyPhoto.open(), false;
    }, $.prettyPhoto.open = function(event) {
      return "undefined" == typeof settings && (settings = pp_settings, pp_images = $.makeArray(arguments[0]), pp_titles = $.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = $.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, _build_overlay(event.target)), settings.hideflash && $("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), _checkPosition($(pp_images).size()), $(".pp_loaderIcon").show(), 
      settings.deeplinking && checkType(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + $(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && 
      "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(getParam("width", pp_images[set_position])) ? getParam("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(getParam("height", pp_images[set_position])) ? getParam("height", pp_images[set_position]) : settings.default_height.toString(), $j = false, 
      -1 != movie_height.indexOf("%") && (movie_height = parseFloat($(window).height() * parseFloat(movie_height) / 100 - 150), $j = true), -1 != movie_width.indexOf("%") && (movie_width = parseFloat($(window).width() * parseFloat(movie_width) / 100 - 150), $j = true), $pp_pic_holder.fadeIn(function() {
        switch($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = false, _getFileType(pp_images[set_position])) {
          case "image":
            /** @type {!Image} */
            imgPreloader = new Image;
            /** @type {!Image} */
            nextImage = new Image;
            if (isSet && set_position < $(pp_images).size() - 1) {
              nextImage.src = pp_images[set_position + 1];
            }
            /** @type {!Image} */
            prevImage = new Image;
            if (isSet && pp_images[set_position - 1]) {
              prevImage.src = pp_images[set_position - 1];
            }
            $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]);
            /**
             * @return {undefined}
             */
            imgPreloader.onload = function() {
              self = _fitToViewport(imgPreloader.width, imgPreloader.height);
              _showContent();
            };
            /**
             * @return {undefined}
             */
            imgPreloader.onerror = function() {
              alert("Image cannot be loaded. Make sure the path is correct and image exist.");
              $.prettyPhoto.close();
            };
            imgPreloader.src = pp_images[set_position];
            break;
          case "youtube":
            self = _fitToViewport(movie_width, movie_height);
            movie_id = getParam("v", pp_images[set_position]);
            if ("" == movie_id) {
              movie_id = pp_images[set_position].split("youtu.be/");
              movie_id = movie_id[1];
              if (movie_id.indexOf("?") > 0) {
                movie_id = movie_id.substr(0, movie_id.indexOf("?"));
              }
              if (movie_id.indexOf("&") > 0) {
                movie_id = movie_id.substr(0, movie_id.indexOf("&"));
              }
            }
            /** @type {string} */
            movie = "http://www.youtube.com/embed/" + movie_id;
            /** @type {string} */
            movie = movie + (getParam("rel", pp_images[set_position]) ? "?rel=" + getParam("rel", pp_images[set_position]) : "?rel=1");
            if (settings.autoplay) {
              /** @type {string} */
              movie = movie + "&autoplay=1";
            }
            toInject = settings.iframe_markup.replace(/{width}/g, self.width).replace(/{height}/g, self.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
            break;
          case "vimeo":
            self = _fitToViewport(movie_width, movie_height);
            movie_id = pp_images[set_position];
            /** @type {!RegExp} */
            var regExp = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
            var matches = movie_id.match(regExp);
            /** @type {string} */
            movie = "http://player.vimeo.com/video/" + matches[3] + "?title=0&byline=0&portrait=0";
            if (settings.autoplay) {
              /** @type {string} */
              movie = movie + "&autoplay=1;";
            }
            /** @type {string} */
            vimeo_width = self.width + "/embed/?moog_width=" + self.width;
            toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, self.height).replace(/{path}/g, movie);
            break;
          case "quicktime":
            self = _fitToViewport(movie_width, movie_height);
            self.height += 15;
            self.contentHeight += 15;
            self.containerHeight += 15;
            toInject = settings.quicktime_markup.replace(/{width}/g, self.width).replace(/{height}/g, self.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
            break;
          case "flash":
            self = _fitToViewport(movie_width, movie_height);
            flash_vars = pp_images[set_position];
            flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length);
            filename = pp_images[set_position];
            filename = filename.substring(0, filename.indexOf("?"));
            toInject = settings.flash_markup.replace(/{width}/g, self.width).replace(/{height}/g, self.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
            break;
          case "iframe":
            self = _fitToViewport(movie_width, movie_height);
            frame_url = pp_images[set_position];
            frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1);
            toInject = settings.iframe_markup.replace(/{width}/g, self.width).replace(/{height}/g, self.height).replace(/{path}/g, frame_url);
            break;
          case "ajax":
            /** @type {boolean} */
            doresize = false;
            self = _fitToViewport(movie_width, movie_height);
            /** @type {boolean} */
            doresize = true;
            /** @type {boolean} */
            skipInjection = true;
            $.get(pp_images[set_position], function(responseHTML) {
              toInject = settings.inline_markup.replace(/{content}/g, responseHTML);
              $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
              _showContent();
            });
            break;
          case "custom":
            self = _fitToViewport(movie_width, movie_height);
            toInject = settings.custom_markup;
            break;
          case "inline":
            myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({
              width : settings.default_width
            }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($("body")).show();
            /** @type {boolean} */
            doresize = false;
            self = _fitToViewport($(myClone).width(), $(myClone).height());
            /** @type {boolean} */
            doresize = true;
            $(myClone).remove();
            toInject = settings.inline_markup.replace(/{content}/g, $(pp_images[set_position]).html());
        }
        if (!(imgPreloader || skipInjection)) {
          $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
          _showContent();
        }
      }), false;
    }, $.prettyPhoto.changePage = function(direction) {
      /** @type {number} */
      currentGalleryPage = 0;
      if ("previous" == direction) {
        set_position--;
        if (set_position < 0) {
          /** @type {number} */
          set_position = $(pp_images).size() - 1;
        }
      } else {
        if ("next" == direction) {
          set_position++;
          if (set_position > $(pp_images).size() - 1) {
            /** @type {number} */
            set_position = 0;
          }
        } else {
          /** @type {string} */
          set_position = direction;
        }
      }
      rel_index = set_position;
      if (!doresize) {
        /** @type {boolean} */
        doresize = true;
      }
      if (settings.allow_expand) {
        $(".pp_contract").removeClass("pp_contract").addClass("pp_expand");
      }
      _hideContent(function() {
        $.prettyPhoto.open();
      });
    }, $.prettyPhoto.changeGalleryPage = function(direction) {
      if ("next" == direction) {
        currentGalleryPage++;
        if (currentGalleryPage > totalPage) {
          /** @type {number} */
          currentGalleryPage = 0;
        }
      } else {
        if ("previous" == direction) {
          currentGalleryPage--;
          if (currentGalleryPage < 0) {
            currentGalleryPage = totalPage;
          }
        } else {
          /** @type {string} */
          currentGalleryPage = direction;
        }
      }
      slide_speed = "next" == direction || "previous" == direction ? settings.animation_speed : 0;
      /** @type {number} */
      slide_to = currentGalleryPage * itemsPerPage * itemWidth;
      $pp_gallery.find("ul").animate({
        left : -slide_to
      }, slide_speed);
    }, $.prettyPhoto.startSlideshow = function() {
      if ("undefined" == typeof a) {
        $pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
          return $.prettyPhoto.stopSlideshow(), false;
        });
        /** @type {number} */
        a = setInterval($.prettyPhoto.startSlideshow, settings.slideshow);
      } else {
        $.prettyPhoto.changePage("next");
      }
    }, $.prettyPhoto.stopSlideshow = function() {
      $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
        return $.prettyPhoto.startSlideshow(), false;
      });
      clearInterval(a);
      a = void 0;
    }, $.prettyPhoto.close = function() {
      if (!$pp_overlay.is(":animated")) {
        $.prettyPhoto.stopSlideshow();
        $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden");
        $("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
          $(this).remove();
        });
        $pp_overlay.fadeOut(settings.animation_speed, function() {
          if (settings.hideflash) {
            $("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible");
          }
          $(this).remove();
          $(window).unbind("scroll.prettyphoto");
          clearHashtag();
          settings.callback();
          /** @type {boolean} */
          doresize = true;
          /** @type {boolean} */
          f = false;
    });
      }
    }, !pp_alreadyInitialized && getHashtag() && (pp_alreadyInitialized = true, hashIndex = getHashtag(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
      $("a[" + pp_settings.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click");
    }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", $.prettyPhoto.initialize);
  };
}(jQuery);
/** @type {boolean} */
var pp_alreadyInitialized = false;
!function() {
  /** @type {boolean} */
  var initializing = false;
  /**
   * @return {undefined}
   */
  window.JQClass = function() {
  };
  JQClass.classes = {};
  /**
   * @param {string} name
   * @return {?}
   */
  JQClass.extend = function Class(name) {
    /**
     * @return {undefined}
     */
    function newClass() {
      if (!initializing && this._init) {
        this._init.apply(this, arguments);
      }
    }
    var prototype = this.prototype;
    /** @type {boolean} */
    initializing = true;
    var proto = new this;
    /** @type {boolean} */
    initializing = false;
    var s;
    for (s in name) {
      proto[s] = "function" == typeof name[s] && "function" == typeof prototype[s] ? function(k, CropAreaRectangle) {
        return function() {
          var c = this._super;
          /**
           * @param {!Object} args
           * @return {?}
           */
          this._super = function(args) {
            return prototype[k].apply(this, args || []);
          };
          var e = CropAreaRectangle.apply(this, arguments);
          return this._super = c, e;
        };
      }(s, name[s]) : name[s];
    }
    return newClass.prototype = proto, newClass.prototype.constructor = newClass, newClass.extend = Class, newClass;
  };
}(), function($$jscomp$3) {
  /**
   * @param {string} name
   * @return {?}
   */
  function camelCase$jscomp$0(name) {
    return name.replace(/-([a-z])/g, function(canCreateDiscussions, shortMonthName) {
      return shortMonthName.toUpperCase();
    });
  }
  JQClass.classes.JQPlugin = JQClass.extend({
    name : "plugin",
    defaultOptions : {},
    regionalOptions : {},
    _getters : [],
    _getMarker : function() {
      return "is-" + this.name;
    },
    _init : function() {
      $$jscomp$3.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
      var jqName = camelCase$jscomp$0(this.name);
      $$jscomp$3[jqName] = this;
      /**
       * @param {!Object} options
       * @return {?}
       */
      $$jscomp$3.fn[jqName] = function(options) {
        /** @type {!Array<?>} */
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        return $$jscomp$3[jqName]._isNotChained(options, otherArgs) ? $$jscomp$3[jqName][options].apply($$jscomp$3[jqName], [this[0]].concat(otherArgs)) : this.each(function() {
          if ("string" == typeof options) {
            if ("_" === options[0] || !$$jscomp$3[jqName][options]) {
              throw "Unknown method: " + options;
            }
            $$jscomp$3[jqName][options].apply($$jscomp$3[jqName], [this].concat(otherArgs));
          } else {
            $$jscomp$3[jqName]._attach(this, options);
          }
        });
      };
    },
    setDefaults : function(options) {
      $$jscomp$3.extend(this.defaultOptions, options || {});
    },
    _isNotChained : function(name, otherArgs) {
      return "option" === name && (0 === otherArgs.length || 1 === otherArgs.length && "string" == typeof otherArgs[0]) || $$jscomp$3.inArray(name, this._getters) > -1;
    },
    _attach : function(elem, options) {
      if (elem = $$jscomp$3(elem), !elem.hasClass(this._getMarker())) {
        elem.addClass(this._getMarker());
        options = $$jscomp$3.extend({}, this.defaultOptions, this._getMetadata(elem), options || {});
        var b = $$jscomp$3.extend({
          name : this.name,
          elem : elem,
          options : options
        }, this._instSettings(elem, options));
        elem.data(this.name, b);
        this._postAttach(elem, b);
        this.option(elem, options);
      }
    },
    _instSettings : function(elem, options) {
      return {};
    },
    _postAttach : function(elem, inst) {
    },
    _getMetadata : function(d$jscomp$21) {
      try {
        var f$jscomp$29 = d$jscomp$21.data(this.name.toLowerCase()) || "";
        f$jscomp$29 = f$jscomp$29.replace(/'/g, '"');
        f$jscomp$29 = f$jscomp$29.replace(/([a-zA-Z0-9]+):/g, function(isSlidingUp, _indentStr, i) {
          var prettyPrint = f$jscomp$29.substring(0, i).match(/"/g);
          return prettyPrint && prettyPrint.length % 2 !== 0 ? _indentStr + ":" : '"' + _indentStr + '":';
        });
        f$jscomp$29 = $$jscomp$3.parseJSON("{" + f$jscomp$29 + "}");
        var g$jscomp$14;
        for (g$jscomp$14 in f$jscomp$29) {
          var h$jscomp$31 = f$jscomp$29[g$jscomp$14];
          if ("string" == typeof h$jscomp$31 && h$jscomp$31.match(/^new Date\((.*)\)$/)) {
            /** @type {*} */
            f$jscomp$29[g$jscomp$14] = eval(h$jscomp$31);
          }
        }
        return f$jscomp$29;
      } catch (e) {
        return {};
      }
    },
    _getInst : function(elem) {
      return $$jscomp$3(elem).data(this.name) || {};
    },
    option : function(elem, name, value) {
      elem = $$jscomp$3(elem);
      var inst = elem.data(this.name);
      if (!name || "string" == typeof name && null == value) {
        var options = (inst || {}).options;
        return options && name ? options[name] : options;
      }
      if (elem.hasClass(this._getMarker())) {
        options = name || {};
        if ("string" == typeof name) {
          options = {};
          /** @type {string} */
          options[name] = value;
        }
        this._optionsChanged(elem, inst, options);
        $$jscomp$3.extend(inst.options, options);
      }
    },
    _optionsChanged : function(elem, inst, options) {
    },
    destroy : function(elem) {
      elem = $$jscomp$3(elem);
      if (elem.hasClass(this._getMarker())) {
        this._preDestroy(elem, this._getInst(elem));
        elem.removeData(this.name).removeClass(this._getMarker());
      }
    },
    _preDestroy : function(elem, inst) {
    }
  });
  $$jscomp$3.JQPlugin = {
    createPlugin : function(superClass, overrides) {
      if ("object" == typeof superClass) {
        /** @type {string} */
        overrides = superClass;
        /** @type {string} */
        superClass = "JQPlugin";
      }
      superClass = camelCase$jscomp$0(superClass);
      var className = camelCase$jscomp$0(overrides.name);
      JQClass.classes[className] = JQClass.classes[superClass].extend(overrides);
      new JQClass.classes[className];
    }
  };
}(jQuery), function($) {
  /** @type {string} */
  var pluginName = "countdown";
  /** @type {number} */
  var Y = 0;
  /** @type {number} */
  var O = 1;
  /** @type {number} */
  var W = 2;
  /** @type {number} */
  var D = 3;
  /** @type {number} */
  var H = 4;
  /** @type {number} */
  var M = 5;
  /** @type {number} */
  var S = 6;
  $.JQPlugin.createPlugin({
    name : pluginName,
    defaultOptions : {
      until : null,
      since : null,
      timezone : null,
      serverSync : null,
      format : "dHMS",
      layout : "",
      compact : false,
      padZeroes : false,
      significant : 0,
      description : "",
      expiryUrl : "",
      expiryText : "",
      alwaysExpire : false,
      onExpiry : null,
      onTick : null,
      tickInterval : 1
    },
    regionalOptions : {
      "" : {
        labels : ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
        labels1 : ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
        compactLabels : ["y", "m", "w", "d"],
        whichLabels : null,
        digits : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator : ":",
        isRTL : false
      }
    },
    _getters : ["getTimes"],
    _rtlClass : pluginName + "-rtl",
    _sectionClass : pluginName + "-section",
    _amountClass : pluginName + "-amount",
    _periodClass : pluginName + "-period",
    _rowClass : pluginName + "-row",
    _holdingClass : pluginName + "-holding",
    _showClass : pluginName + "-show",
    _descrClass : pluginName + "-descr",
    _timerElems : [],
    _init : function() {
      /**
       * @param {number} timestamp
       * @return {undefined}
       */
      function timerCallBack(timestamp) {
        var b = timestamp < 1e12 ? perfAvail ? performance.now() + performance.timing.navigationStart : now() : timestamp || now();
        if (b - a >= 1e3) {
          self._updateElems();
          a = b;
        }
        requestAnimationFrame(timerCallBack);
      }
      var self = this;
      this._super();
      /** @type {!Array} */
      this._serverSyncs = [];
      /** @type {!Function} */
      var now = "function" == typeof Date.now ? Date.now : function() {
        return (new Date).getTime();
      };
      /** @type {(boolean|null)} */
      var perfAvail = window.performance && "function" == typeof window.performance.now;
      var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
      /** @type {number} */
      var a = 0;
      if (!requestAnimationFrame || $.noRequestAnimationFrame) {
        /** @type {null} */
        $.noRequestAnimationFrame = null;
        setInterval(function() {
          self._updateElems();
        }, 980);
      } else {
        a = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || now();
        requestAnimationFrame(timerCallBack);
      }
    },
    UTCDate : function(tz, year, month, day, hours, mins, secs, ms) {
      if ("object" == typeof year && year.constructor == Date) {
        ms = year.getMilliseconds();
        secs = year.getSeconds();
        mins = year.getMinutes();
        hours = year.getHours();
        day = year.getDate();
        month = year.getMonth();
        year = year.getFullYear();
      }
      /** @type {!Date} */
      var d = new Date;
      return d.setUTCFullYear(year), d.setUTCDate(1), d.setUTCMonth(month || 0), d.setUTCDate(day || 1), d.setUTCHours(hours || 0), d.setUTCMinutes((mins || 0) - (Math.abs(tz) < 30 ? 60 * tz : tz)), d.setUTCSeconds(secs || 0), d.setUTCMilliseconds(ms || 0), d;
    },
    periodsToSeconds : function(periods) {
      return 31557600 * periods[0] + 2629800 * periods[1] + 604800 * periods[2] + 86400 * periods[3] + 3600 * periods[4] + 60 * periods[5] + periods[6];
    },
    resync : function() {
      var self = this;
      $("." + this._getMarker()).each(function() {
        var inst = $.data(this, self.name);
        if (inst.options.serverSync) {
          /** @type {null} */
          var serverSync = null;
          /** @type {number} */
          var i = 0;
          for (; i < self._serverSyncs.length; i++) {
            if (self._serverSyncs[i][0] == inst.options.serverSync) {
              serverSync = self._serverSyncs[i];
              break;
            }
          }
          if (null == serverSync[2]) {
            var serverResult = $.isFunction(inst.options.serverSync) ? inst.options.serverSync.apply(this, []) : null;
            /** @type {number} */
            serverSync[2] = (serverResult ? (new Date).getTime() - serverResult.getTime() : 0) - serverSync[1];
          }
          if (inst._since) {
            inst._since.setMilliseconds(inst._since.getMilliseconds() + serverSync[2]);
          }
          inst._until.setMilliseconds(inst._until.getMilliseconds() + serverSync[2]);
        }
      });
      /** @type {number} */
      var i = 0;
      for (; i < self._serverSyncs.length; i++) {
        if (null != self._serverSyncs[i][2]) {
          self._serverSyncs[i][1] += self._serverSyncs[i][2];
          delete self._serverSyncs[i][2];
        }
      }
    },
    _instSettings : function(elem, options) {
      return {
        _periods : [0, 0, 0, 0, 0, 0, 0]
      };
    },
    _addElem : function(elem) {
      if (!this._hasElem(elem)) {
        this._timerElems.push(elem);
      }
    },
    _hasElem : function(elem) {
      return $.inArray(elem, this._timerElems) > -1;
    },
    _removeElem : function(elem) {
      this._timerElems = $.map(this._timerElems, function(value) {
        return value == elem ? null : value;
      });
    },
    _updateElems : function() {
      /** @type {number} */
      var i = this._timerElems.length - 1;
      for (; i >= 0; i--) {
        this._updateCountdown(this._timerElems[i]);
      }
    },
    _optionsChanged : function(elem, inst, options) {
      if (options.layout) {
        options.layout = options.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      }
      this._resetExtraLabels(inst.options, options);
      /** @type {boolean} */
      var timezoneChanged = inst.options.timezone != options.timezone;
      $.extend(inst.options, options);
      this._adjustSettings(elem, inst, null != options.until || null != options.since || timezoneChanged);
      /** @type {!Date} */
      var now = new Date;
      if (inst._since && inst._since < now || inst._until && inst._until > now) {
        this._addElem(elem[0]);
      }
      this._updateCountdown(elem, inst);
    },
    _updateCountdown : function(elem, inst) {
      if (elem = elem.jquery ? elem : $(elem), inst = inst || this._getInst(elem)) {
        if (elem.html(this._generateHTML(inst)).toggleClass(this._rtlClass, inst.options.isRTL), $.isFunction(inst.options.onTick)) {
          var periods = "lap" != inst._hold ? inst._periods : this._calculatePeriods(inst, inst._show, inst.options.significant, new Date);
          if (!(1 != inst.options.tickInterval && this.periodsToSeconds(periods) % inst.options.tickInterval != 0)) {
            inst.options.onTick.apply(elem[0], [periods]);
          }
        }
        /** @type {boolean} */
        var s = "pause" != inst._hold && (inst._since ? inst._now.getTime() < inst._since.getTime() : inst._now.getTime() >= inst._until.getTime());
        if (s && !inst._expiring) {
          if (inst._expiring = true, this._hasElem(elem[0]) || inst.options.alwaysExpire) {
            if (this._removeElem(elem[0]), $.isFunction(inst.options.onExpiry) && inst.options.onExpiry.apply(elem[0], []), inst.options.expiryText) {
              var layout = inst.options.layout;
              inst.options.layout = inst.options.expiryText;
              this._updateCountdown(elem[0], inst);
              inst.options.layout = layout;
            }
            if (inst.options.expiryUrl) {
              window.location = inst.options.expiryUrl;
            }
          }
          /** @type {boolean} */
          inst._expiring = false;
        } else {
          if ("pause" == inst._hold) {
            this._removeElem(elem[0]);
          }
        }
      }
    },
    _resetExtraLabels : function(e, options) {
      var k;
      for (k in options) {
        if (k.match(/[Ll]abels[02-9]|compactLabels1/)) {
          e[k] = options[k];
        }
      }
      for (k in e) {
        if (k.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof options[k]) {
          /** @type {null} */
          e[k] = null;
        }
      }
    },
    _adjustSettings : function(elem, inst, recalc) {
      /** @type {null} */
      var serverEntry = null;
      /** @type {number} */
      var i = 0;
      for (; i < this._serverSyncs.length; i++) {
        if (this._serverSyncs[i][0] == inst.options.serverSync) {
          serverEntry = this._serverSyncs[i][1];
          break;
        }
      }
      if (null != serverEntry) {
        var serverOffset = inst.options.serverSync ? serverEntry : 0;
        /** @type {!Date} */
        var now = new Date;
      } else {
        var serverResult = $.isFunction(inst.options.serverSync) ? inst.options.serverSync.apply(elem[0], []) : null;
        /** @type {!Date} */
        now = new Date;
        /** @type {number} */
        serverOffset = serverResult ? now.getTime() - serverResult.getTime() : 0;
        this._serverSyncs.push([inst.options.serverSync, serverOffset]);
      }
      var timezone = inst.options.timezone;
      timezone = null == timezone ? -now.getTimezoneOffset() : timezone;
      if (recalc || !recalc && null == inst._until && null == inst._since) {
        inst._since = inst.options.since;
        if (null != inst._since) {
          inst._since = this.UTCDate(timezone, this._determineTime(inst._since, null));
          if (inst._since && serverOffset) {
            inst._since.setMilliseconds(inst._since.getMilliseconds() + serverOffset);
          }
        }
        inst._until = this.UTCDate(timezone, this._determineTime(inst.options.until, now));
        if (serverOffset) {
          inst._until.setMilliseconds(inst._until.getMilliseconds() + serverOffset);
        }
      }
      inst._show = this._determineShow(inst);
    },
    _preDestroy : function(elem, inst) {
      this._removeElem(elem[0]);
      elem.empty();
    },
    pause : function(elem) {
      this._hold(elem, "pause");
    },
    lap : function(elem) {
      this._hold(elem, "lap");
    },
    resume : function(elem) {
      this._hold(elem, null);
    },
    toggle : function(sub) {
      var that = $.data(sub, this.name) || {};
      this[that._hold ? "resume" : "pause"](sub);
    },
    toggleLap : function(elem) {
      var that = $.data(elem, this.name) || {};
      this[that._hold ? "resume" : "lap"](elem);
    },
    _hold : function(elem, hold) {
      var inst = $.data(elem, this.name);
      if (inst) {
        if ("pause" == inst._hold && !hold) {
          inst._periods = inst._savePeriods;
          /** @type {string} */
          var sign = inst._since ? "-" : "+";
          inst[inst._since ? "_since" : "_until"] = this._determineTime(sign + inst._periods[0] + "y" + sign + inst._periods[1] + "o" + sign + inst._periods[2] + "w" + sign + inst._periods[3] + "d" + sign + inst._periods[4] + "h" + sign + inst._periods[5] + "m" + sign + inst._periods[6] + "s");
          this._addElem(elem);
        }
        /** @type {string} */
        inst._hold = hold;
        inst._savePeriods = "pause" == hold ? inst._periods : null;
        $.data(elem, this.name, inst);
        this._updateCountdown(elem, inst);
      }
    },
    getTimes : function(elem) {
      var inst = $.data(elem, this.name);
      return inst ? "pause" == inst._hold ? inst._savePeriods : inst._hold ? this._calculatePeriods(inst, inst._show, inst.options.significant, new Date) : inst._periods : null;
    },
    _determineTime : function(a, item) {
      var plugin = this;
      /**
       * @param {number} delta
       * @return {?}
       */
      var offsetNumeric = function(delta) {
        /** @type {!Date} */
        var dateExpires = new Date;
        return dateExpires.setTime(dateExpires.getTime() + 1E3 * delta), dateExpires;
      };
      /**
       * @param {string} offset
       * @return {?}
       */
      var offsetString = function(offset) {
        offset = offset.toLowerCase();
        /** @type {!Date} */
        var d = new Date;
        /** @type {number} */
        var year = d.getFullYear();
        /** @type {number} */
        var month = d.getMonth();
        /** @type {number} */
        var index = d.getDate();
        /** @type {number} */
        var h = d.getHours();
        /** @type {number} */
        var minute = d.getMinutes();
        /** @type {number} */
        var s = d.getSeconds();
        /** @type {!RegExp} */
        var p = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
        /** @type {(Array<string>|null)} */
        var matches = p.exec(offset);
        for (; matches;) {
          switch(matches[2] || "s") {
            case "s":
              /** @type {number} */
              s = s + parseInt(matches[1], 10);
              break;
            case "m":
              /** @type {number} */
              minute = minute + parseInt(matches[1], 10);
              break;
            case "h":
              /** @type {number} */
              h = h + parseInt(matches[1], 10);
              break;
            case "d":
              /** @type {number} */
              index = index + parseInt(matches[1], 10);
              break;
            case "w":
              /** @type {number} */
              index = index + 7 * parseInt(matches[1], 10);
              break;
            case "o":
              /** @type {number} */
              month = month + parseInt(matches[1], 10);
              /** @type {number} */
              index = Math.min(index, plugin._getDaysInMonth(year, month));
              break;
            case "y":
              /** @type {number} */
              year = year + parseInt(matches[1], 10);
              /** @type {number} */
              index = Math.min(index, plugin._getDaysInMonth(year, month));
          }
          /** @type {(Array<string>|null)} */
          matches = p.exec(offset);
        }
        return new Date(year, month, index, h, minute, s, 0);
      };
      var data = null == a ? item : "string" == typeof a ? offsetString(a) : "number" == typeof a ? offsetNumeric(a) : a;
      return data && data.setMilliseconds(0), data;
    },
    _getDaysInMonth : function(year, month) {
      return 32 - (new Date(year, month, 32)).getDate();
    },
    _normalLabels : function(num) {
      return num;
    },
    _generateHTML : function(inst) {
      var self = this;
      inst._periods = inst._hold ? inst._periods : this._calculatePeriods(inst, inst._show, inst.options.significant, new Date);
      /** @type {boolean} */
      var _ = false;
      /** @type {number} */
      var showCount = 0;
      var sigCount = inst.options.significant;
      var show = $.extend({}, inst._show);
      /** @type {number} */
      var period = Y;
      for (; period <= S; period++) {
        /** @type {number} */
        _ = _ | ("?" == inst._show[period] && inst._periods[period] > 0);
        show[period] = "?" != inst._show[period] || _ ? inst._show[period] : null;
        /** @type {number} */
        showCount = showCount + (show[period] ? 1 : 0);
        /** @type {number} */
        sigCount = sigCount - (inst._periods[period] > 0 ? 1 : 0);
      }
      /** @type {!Array} */
      var showSignificant = [false, false, false, false, false, false, false];
      /** @type {number} */
      period = S;
      for (; period >= Y; period--) {
        if (inst._show[period]) {
          if (inst._periods[period]) {
            /** @type {boolean} */
            showSignificant[period] = true;
          } else {
            /** @type {boolean} */
            showSignificant[period] = sigCount > 0;
            sigCount--;
          }
        }
      }
      var labels = inst.options.compact ? inst.options.compactLabels : inst.options.labels;
      var whichLabels = inst.options.whichLabels || this._normalLabels;
      /**
       * @param {number} period
       * @return {?}
       */
      var showCompact = function(period) {
        var labelsNum = inst.options["compactLabels" + whichLabels(inst._periods[period])];
        return show[period] ? self._translateDigits(inst, inst._periods[period]) + (labelsNum ? labelsNum[period] : labels[period]) + " " : "";
      };
      /** @type {number} */
      var minDigits = inst.options.padZeroes ? 2 : 1;
      /**
       * @param {number} period
       * @return {?}
       */
      var showFull = function(period) {
        var labelsNum = inst.options["labels" + whichLabels(inst._periods[period])];
        return !inst.options.significant && show[period] || inst.options.significant && showSignificant[period] ? '<span class="' + self._sectionClass + '"><span class="' + self._amountClass + '">' + self._minDigits(inst, inst._periods[period], minDigits) + '</span><span class="' + self._periodClass + '">' + (labelsNum ? labelsNum[period] : labels[period]) + "</span></span>" : "";
      };
      return inst.options.layout ? this._buildLayout(inst, show, inst.options.layout, inst.options.compact, inst.options.significant, showSignificant) : (inst.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (inst._hold ? " " + this._holdingClass : "") + '">' + showCompact(Y) + showCompact(O) + showCompact(W) + showCompact(D) + (show[H] ? this._minDigits(inst, inst._periods[H], 2) : "") + (show[M] ? (show[H] ? inst.options.timeSeparator : "") + this._minDigits(inst, 
      inst._periods[M], 2) : "") + (show[S] ? (show[H] || show[M] ? inst.options.timeSeparator : "") + this._minDigits(inst, inst._periods[S], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (inst.options.significant || showCount) + (inst._hold ? " " + this._holdingClass : "") + '">' + showFull(Y) + showFull(O) + showFull(W) + showFull(D) + showFull(H) + showFull(M) + showFull(S)) + "</span>" + (inst.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + 
      '">' + inst.options.description + "</span>" : "");
    },
    _buildLayout : function(inst, show, layout, compact, significant, showSignificant) {
      var labels = inst.options[compact ? "compactLabels" : "labels"];
      var whichLabels = inst.options.whichLabels || this._normalLabels;
      /**
       * @param {number} index
       * @return {?}
       */
      var labelFor = function(index) {
        return (inst.options[(compact ? "compactLabels" : "labels") + whichLabels(inst._periods[index])] || labels)[index];
      };
      /**
       * @param {number} i
       * @param {number} s
       * @return {?}
       */
      var digit = function(i, s) {
        return inst.options.digits[Math.floor(i / s) % 10];
      };
      var subs = {
        desc : inst.options.description,
        sep : inst.options.timeSeparator,
        yl : labelFor(Y),
        yn : this._minDigits(inst, inst._periods[Y], 1),
        ynn : this._minDigits(inst, inst._periods[Y], 2),
        ynnn : this._minDigits(inst, inst._periods[Y], 3),
        y1 : digit(inst._periods[Y], 1),
        y10 : digit(inst._periods[Y], 10),
        y100 : digit(inst._periods[Y], 100),
        y1000 : digit(inst._periods[Y], 1E3),
        ol : labelFor(O),
        on : this._minDigits(inst, inst._periods[O], 1),
        onn : this._minDigits(inst, inst._periods[O], 2),
        onnn : this._minDigits(inst, inst._periods[O], 3),
        o1 : digit(inst._periods[O], 1),
        o10 : digit(inst._periods[O], 10),
        o100 : digit(inst._periods[O], 100),
        o1000 : digit(inst._periods[O], 1E3),
        wl : labelFor(W),
        wn : this._minDigits(inst, inst._periods[W], 1),
        wnn : this._minDigits(inst, inst._periods[W], 2),
        wnnn : this._minDigits(inst, inst._periods[W], 3),
        w1 : digit(inst._periods[W], 1),
        w10 : digit(inst._periods[W], 10),
        w100 : digit(inst._periods[W], 100),
        w1000 : digit(inst._periods[W], 1E3),
        dl : labelFor(D),
        dn : this._minDigits(inst, inst._periods[D], 1),
        dnn : this._minDigits(inst, inst._periods[D], 2),
        dnnn : this._minDigits(inst, inst._periods[D], 3),
        d1 : digit(inst._periods[D], 1),
        d10 : digit(inst._periods[D], 10),
        d100 : digit(inst._periods[D], 100),
        d1000 : digit(inst._periods[D], 1E3),
        hl : labelFor(H),
        hn : this._minDigits(inst, inst._periods[H], 1),
        hnn : this._minDigits(inst, inst._periods[H], 2),
        hnnn : this._minDigits(inst, inst._periods[H], 3),
        h1 : digit(inst._periods[H], 1),
        h10 : digit(inst._periods[H], 10),
        h100 : digit(inst._periods[H], 100),
        h1000 : digit(inst._periods[H], 1E3),
        ml : labelFor(M),
        mn : this._minDigits(inst, inst._periods[M], 1),
        mnn : this._minDigits(inst, inst._periods[M], 2),
        mnnn : this._minDigits(inst, inst._periods[M], 3),
        m1 : digit(inst._periods[M], 1),
        m10 : digit(inst._periods[M], 10),
        m100 : digit(inst._periods[M], 100),
        m1000 : digit(inst._periods[M], 1E3),
        sl : labelFor(S),
        sn : this._minDigits(inst, inst._periods[S], 1),
        snn : this._minDigits(inst, inst._periods[S], 2),
        snnn : this._minDigits(inst, inst._periods[S], 3),
        s1 : digit(inst._periods[S], 1),
        s10 : digit(inst._periods[S], 10),
        s100 : digit(inst._periods[S], 100),
        s1000 : digit(inst._periods[S], 1E3)
      };
      /** @type {!Object} */
      var html = layout;
      /** @type {number} */
      var i = Y;
      for (; i <= S; i++) {
        /** @type {string} */
        var $sendIcon = "yowdhms".charAt(i);
        /** @type {!RegExp} */
        var br_at_the_end = new RegExp("\\{" + $sendIcon + "<\\}([\\s\\S]*)\\{" + $sendIcon + ">\\}", "g");
        html = html.replace(br_at_the_end, !significant && show[i] || significant && showSignificant[i] ? "$1" : "");
      }
      return $.each(subs, function(canCreateDiscussions, $3) {
        /** @type {!RegExp} */
        var br_at_the_end = new RegExp("\\{" + canCreateDiscussions + "\\}", "g");
        html = html.replace(br_at_the_end, $3);
      }), html;
    },
    _minDigits : function(inst, value, len) {
      return value = "" + value, value.length >= len ? this._translateDigits(inst, value) : (value = "0000000000" + value, this._translateDigits(inst, value.substr(value.length - len)));
    },
    _translateDigits : function(inst, value) {
      return ("" + value).replace(/[0-9]/g, function(digit) {
        return inst.options.digits[digit];
      });
    },
    _determineShow : function(inst) {
      var format = inst.options.format;
      /** @type {!Array} */
      var show = [];
      return show[Y] = format.match("y") ? "?" : format.match("Y") ? "!" : null, show[O] = format.match("o") ? "?" : format.match("O") ? "!" : null, show[W] = format.match("w") ? "?" : format.match("W") ? "!" : null, show[D] = format.match("d") ? "?" : format.match("D") ? "!" : null, show[H] = format.match("h") ? "?" : format.match("H") ? "!" : null, show[M] = format.match("m") ? "?" : format.match("M") ? "!" : null, show[S] = format.match("s") ? "?" : format.match("S") ? "!" : null, show;
    },
    _calculatePeriods : function(inst, show, significant, now) {
      /** @type {!Date} */
      inst._now = now;
      inst._now.setMilliseconds(0);
      /** @type {!Date} */
      var until = new Date(inst._now.getTime());
      if (inst._since) {
        if (now.getTime() < inst._since.getTime()) {
          /** @type {!Date} */
          inst._now = now = until;
        } else {
          now = inst._since;
        }
      } else {
        until.setTime(inst._until.getTime());
        if (now.getTime() > inst._until.getTime()) {
          /** @type {!Date} */
          inst._now = now = until;
        }
      }
      /** @type {!Array} */
      var periods = [0, 0, 0, 0, 0, 0, 0];
      if (show[Y] || show[O]) {
        var lastNow = this._getDaysInMonth(now.getFullYear(), now.getMonth());
        var daysInMonth = this._getDaysInMonth(until.getFullYear(), until.getMonth());
        /** @type {boolean} */
        var m = until.getDate() == now.getDate() || until.getDate() >= Math.min(lastNow, daysInMonth) && now.getDate() >= Math.min(lastNow, daysInMonth);
        /**
         * @param {!Date} date
         * @return {?}
         */
        var getSecs = function(date) {
          return 60 * (60 * date.getHours() + date.getMinutes()) + date.getSeconds();
        };
        /** @type {number} */
        var months = Math.max(0, 12 * (until.getFullYear() - now.getFullYear()) + until.getMonth() - now.getMonth() + (until.getDate() < now.getDate() && !m || m && getSecs(until) < getSecs(now) ? -1 : 0));
        /** @type {number} */
        periods[Y] = show[Y] ? Math.floor(months / 12) : 0;
        /** @type {number} */
        periods[O] = show[O] ? months - 12 * periods[Y] : 0;
        /** @type {!Date} */
        now = new Date(now.getTime());
        /** @type {boolean} */
        var wasLastDay = now.getDate() == lastNow;
        var lastDay = this._getDaysInMonth(now.getFullYear() + periods[Y], now.getMonth() + periods[O]);
        if (now.getDate() > lastDay) {
          now.setDate(lastDay);
        }
        now.setFullYear(now.getFullYear() + periods[Y]);
        now.setMonth(now.getMonth() + periods[O]);
        if (wasLastDay) {
          now.setDate(lastDay);
        }
      }
      /** @type {number} */
      var diff = Math.floor((until.getTime() - now.getTime()) / 1E3);
      /**
       * @param {number} period
       * @param {number} numSecs
       * @return {undefined}
       */
      var extractPeriod = function(period, numSecs) {
        /** @type {number} */
        periods[period] = show[period] ? Math.floor(diff / numSecs) : 0;
        /** @type {number} */
        diff = diff - periods[period] * numSecs;
      };
      if (extractPeriod(W, 604800), extractPeriod(D, 86400), extractPeriod(H, 3600), extractPeriod(M, 60), extractPeriod(S, 1), diff > 0 && !inst._since) {
        /** @type {!Array} */
        var multiplier = [1, 12, 4.3482, 7, 24, 60, 60];
        /** @type {number} */
        var lastShown = S;
        /** @type {number} */
        var max = 1;
        /** @type {number} */
        var period = S;
        for (; period >= Y; period--) {
          if (show[period]) {
            if (periods[lastShown] >= max) {
              /** @type {number} */
              periods[lastShown] = 0;
              /** @type {number} */
              diff = 1;
            }
            if (diff > 0) {
              periods[period]++;
              /** @type {number} */
              diff = 0;
              /** @type {number} */
              lastShown = period;
              /** @type {number} */
              max = 1;
            }
          }
          /** @type {number} */
          max = max * multiplier[period];
        }
      }
      if (significant) {
        /** @type {number} */
        period = Y;
        for (; period <= S; period++) {
          if (significant && periods[period]) {
            significant--;
          } else {
            if (!significant) {
              /** @type {number} */
              periods[period] = 0;
            }
          }
        }
      }
      return periods;
    }
  });
}(jQuery);
!function($) {
  /**
   * @param {?} settings
   * @param {?} callback
   * @return {?}
   */
  $.fn.jflickrfeed = function(settings, callback) {
    settings = $.extend(true, {
      flickrbase : "http://api.flickr.com/services/feeds/",
      feedapi : "photos_public.gne",
      limit : 20,
      qstrings : {
        lang : "en-us",
        format : "json",
        jsoncallback : "?"
      },
      cleanDescription : true,
      useTemplate : true,
      itemTemplate : "",
      itemCallback : function() {
      }
    }, settings);
    /** @type {string} */
    var data = settings.flickrbase + settings.feedapi + "?";
    /** @type {boolean} */
    var c = true;
    var key;
    for (key in settings.qstrings) {
      if (!c) {
        /** @type {string} */
        data = data + "&";
      }
      /** @type {string} */
      data = data + (key + "=" + settings.qstrings[key]);
      /** @type {boolean} */
      c = false;
    }
    return $(this).each(function() {
      var $styleContainer = $(this);
      var value = this;
      $.getJSON(data, function(t) {
        $.each(t.items, function(i, item) {
          if (i < settings.limit) {
            if (settings.cleanDescription) {
              /** @type {!RegExp} */
              var t = /<p>(.*?)<\/p>/g;
              var result = item.description;
              if (t.test(result)) {
                item.description = result.match(t)[2];
                if (void 0 != item.description) {
                  item.description = item.description.replace("<p>", "").replace("</p>", "");
                }
              }
            }
            if (item.image_s = item.media.m.replace("_m", "_s"), item.image_t = item.media.m.replace("_m", "_t"), item.image_m = item.media.m.replace("_m", "_m"), item.image = item.media.m.replace("_m", ""), item.image_b = item.media.m.replace("_m", "_b"), delete item.media, settings.useTemplate) {
              var template = settings.itemTemplate;
              var i;
              for (i in item) {
                /** @type {!RegExp} */
                var rgx = new RegExp("{{" + i + "}}", "g");
                template = template.replace(rgx, item[i]);
              }
              $styleContainer.append(template);
            }
            settings.itemCallback.call(value, item);
          }
        });
        if ($.isFunction(callback)) {
          callback.call(value, t);
        }
      });
    });
  };
}(jQuery);
(function() {
  /**
   * @return {undefined}
   */
  function EventEmitter() {
  }
  /**
   * @param {!Object} listeners
   * @param {!Function} listener
   * @return {?}
   */
  function indexOfListener(listeners, listener) {
    var i = listeners.length;
    for (; i--;) {
      if (listeners[i].listener === listener) {
        return i;
      }
    }
    return -1;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function alias(name) {
    return function() {
      return this[name].apply(this, arguments);
    };
  }
  var proto = EventEmitter.prototype;
  var exports = this;
  var originalGlobalValue = exports.EventEmitter;
  /**
   * @param {string} type
   * @return {?}
   */
  proto.getListeners = function(type) {
    var toMsgs;
    var i;
    var msgs = this._getEvents();
    if ("object" == typeof type) {
      toMsgs = {};
      for (i in msgs) {
        if (msgs.hasOwnProperty(i) && type.test(i)) {
          toMsgs[i] = msgs[i];
        }
      }
    } else {
      toMsgs = msgs[type] || (msgs[type] = []);
    }
    return toMsgs;
  };
  /**
   * @param {!Array} listeners
   * @return {?}
   */
  proto.flattenListeners = function(listeners) {
    var i;
    /** @type {!Array} */
    var flatListeners = [];
    /** @type {number} */
    i = 0;
    for (; listeners.length > i; i = i + 1) {
      flatListeners.push(listeners[i].listener);
    }
    return flatListeners;
  };
  /**
   * @param {string} evt
   * @return {?}
   */
  proto.getListenersAsObject = function(evt) {
    var response;
    var listeners = this.getListeners(evt);
    return listeners instanceof Array && (response = {}, response[evt] = listeners), response || listeners;
  };
  /**
   * @param {string} evt
   * @param {!Function} listener
   * @return {?}
   */
  proto.addListener = function(evt, listener) {
    var key;
    var listeners = this.getListenersAsObject(evt);
    /** @type {boolean} */
    var listenerIsWrapped = "object" == typeof listener;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key) && -1 === indexOfListener(listeners[key], listener)) {
        listeners[key].push(listenerIsWrapped ? listener : {
          listener : listener,
          once : false
        });
      }
    }
    return this;
  };
  proto.on = alias("addListener");
  /**
   * @param {string} evt
   * @param {!Function} listener
   * @return {?}
   */
  proto.addOnceListener = function(evt, listener) {
    return this.addListener(evt, {
      listener : listener,
      once : true
    });
  };
  proto.once = alias("addOnceListener");
  /**
   * @param {string} evt
   * @return {?}
   */
  proto.defineEvent = function(evt) {
    return this.getListeners(evt), this;
  };
  /**
   * @param {!NodeList} evts
   * @return {?}
   */
  proto.defineEvents = function(evts) {
    /** @type {number} */
    var i = 0;
    for (; evts.length > i; i = i + 1) {
      this.defineEvent(evts[i]);
    }
    return this;
  };
  /**
   * @param {string} evt
   * @param {!Function} listener
   * @return {?}
   */
  proto.removeListener = function(evt, listener) {
    var index;
    var key;
    var listeners = this.getListenersAsObject(evt);
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        index = indexOfListener(listeners[key], listener);
        if (-1 !== index) {
          listeners[key].splice(index, 1);
        }
      }
    }
    return this;
  };
  proto.off = alias("removeListener");
  /**
   * @param {!Array} evt
   * @param {!Object} listeners
   * @return {?}
   */
  proto.addListeners = function(evt, listeners) {
    return this.manipulateListeners(false, evt, listeners);
  };
  /**
   * @param {!Array} evt
   * @param {!Object} listeners
   * @return {?}
   */
  proto.removeListeners = function(evt, listeners) {
    return this.manipulateListeners(true, evt, listeners);
  };
  /**
   * @param {boolean} remove
   * @param {!Array} evt
   * @param {!Object} listeners
   * @return {?}
   */
  proto.manipulateListeners = function(remove, evt, listeners) {
    var i;
    var value;
    var single = remove ? this.removeListener : this.addListener;
    var multiple = remove ? this.removeListeners : this.addListeners;
    if ("object" != typeof evt || evt instanceof RegExp) {
      i = listeners.length;
      for (; i--;) {
        single.call(this, evt, listeners[i]);
      }
    } else {
      for (i in evt) {
        if (evt.hasOwnProperty(i) && (value = evt[i])) {
          if ("function" == typeof value) {
            single.call(this, i, value);
          } else {
            multiple.call(this, i, value);
          }
        }
      }
    }
    return this;
  };
  /**
   * @param {!Object} str
   * @return {?}
   */
  proto.removeEvent = function(str) {
    var c;
    /** @type {string} */
    var type = typeof str;
    var s = this._getEvents();
    if ("string" === type) {
      delete s[str];
    } else {
      if ("object" === type) {
        for (c in s) {
          if (s.hasOwnProperty(c) && str.test(c)) {
            delete s[c];
          }
        }
      } else {
        delete this._events;
      }
    }
    return this;
  };
  proto.removeAllListeners = alias("removeEvent");
  /**
   * @param {string} evt
   * @param {!Array} args
   * @return {?}
   */
  proto.emitEvent = function(evt, args) {
    var listener;
    var i;
    var key;
    var response;
    var listeners = this.getListenersAsObject(evt);
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        i = listeners[key].length;
        for (; i--;) {
          listener = listeners[key][i];
          if (listener.once === true) {
            this.removeListener(evt, listener.listener);
          }
          response = listener.listener.apply(this, args || []);
          if (response === this._getOnceReturnValue()) {
            this.removeListener(evt, listener.listener);
          }
        }
      }
    }
    return this;
  };
  proto.trigger = alias("emitEvent");
  /**
   * @param {string} evt
   * @return {?}
   */
  proto.emit = function(evt) {
    /** @type {!Array<?>} */
    var args = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(evt, args);
  };
  /**
   * @param {?} value
   * @return {?}
   */
  proto.setOnceReturnValue = function(value) {
    return this._onceReturnValue = value, this;
  };
  /**
   * @return {?}
   */
  proto._getOnceReturnValue = function() {
    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
  };
  /**
   * @return {?}
   */
  proto._getEvents = function() {
    return this._events || (this._events = {});
  };
  /**
   * @return {?}
   */
  EventEmitter.noConflict = function() {
    return exports.EventEmitter = originalGlobalValue, EventEmitter;
  };
  if ("function" == typeof define && define.amd) {
    define("eventEmitter/EventEmitter", [], function() {
      return EventEmitter;
    });
  } else {
    if ("object" == typeof module && module.exports) {
      /** @type {function(): undefined} */
      module.exports = EventEmitter;
    } else {
      /** @type {function(): undefined} */
      this.EventEmitter = EventEmitter;
    }
  }
}).call(this), function(window) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function getIEEvent(obj) {
    var event = window.event;
    return event.target = event.target || event.srcElement || obj, event;
  }
  /** @type {!Element} */
  var doc = document.documentElement;
  /**
   * @return {undefined}
   */
  var bind = function() {
  };
  if (doc.addEventListener) {
    /**
     * @param {!Object} el
     * @param {(!Function|string)} event
     * @param {!Function} fn
     * @return {undefined}
     */
    bind = function(el, event, fn) {
      el.addEventListener(event, fn, false);
    };
  } else {
    if (doc.attachEvent) {
      /**
       * @param {!Object} obj
       * @param {string} type
       * @param {!Function} fn
       * @return {undefined}
       */
      bind = function(obj, type, fn) {
        /** @type {function(): undefined} */
        obj[type + fn] = fn.handleEvent ? function() {
          var event = getIEEvent(obj);
          fn.handleEvent.call(fn, event);
        } : function() {
          var event = getIEEvent(obj);
          fn.call(obj, event);
        };
        obj.attachEvent("on" + type, obj[type + fn]);
      };
    }
  }
  /**
   * @return {undefined}
   */
  var unbind = function() {
  };
  if (doc.removeEventListener) {
    /**
     * @param {!Object} object
     * @param {string} name
     * @param {?} callback
     * @return {undefined}
     */
    unbind = function(object, name, callback) {
      object.removeEventListener(name, callback, false);
    };
  } else {
    if (doc.detachEvent) {
      /**
       * @param {!Object} obj
       * @param {string} type
       * @param {string} fn
       * @return {undefined}
       */
      unbind = function(obj, type, fn) {
        obj.detachEvent("on" + type, obj[type + fn]);
        try {
          delete obj[type + fn];
        } catch (i) {
          obj[type + fn] = void 0;
        }
      };
    }
  }
  var eventie = {
    bind : bind,
    unbind : unbind
  };
  if ("function" == typeof define && define.amd) {
    define("eventie/eventie", eventie);
  } else {
    window.eventie = eventie;
  }
}(this), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define(["eventEmitter/EventEmitter", "eventie/eventie"], function(EventEmitter, eventie) {
      return factory(window, EventEmitter, eventie);
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(window, require("wolfy87-eventemitter"), require("eventie"));
    } else {
      window.imagesLoaded = factory(window, window.EventEmitter, window.eventie);
    }
  }
}(window, function(window, EventEmitter, eventie) {
  /**
   * @param {!Object} target
   * @param {string} source
   * @return {?}
   */
  function extend(target, source) {
    var prop;
    for (prop in source) {
      target[prop] = source[prop];
    }
    return target;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function isArray(value) {
    return "[object Array]" === objectToString$2.call(value);
  }
  /**
   * @param {!Object} item
   * @return {?}
   */
  function makeArray(item) {
    /** @type {!Array} */
    var ret = [];
    if (isArray(item)) {
      /** @type {!Object} */
      ret = item;
    } else {
      if ("number" == typeof item.length) {
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var l = item.length;
        for (; l > i; i++) {
          ret.push(item[i]);
        }
      } else {
        ret.push(item);
      }
    }
    return ret;
  }
  /**
   * @param {string} elem
   * @param {string} options
   * @param {string} element
   * @return {?}
   */
  function ImagesLoaded(elem, options, element) {
    if (!(this instanceof ImagesLoaded)) {
      return new ImagesLoaded(elem, options);
    }
    if ("string" == typeof elem) {
      /** @type {!NodeList<Element>} */
      elem = document.querySelectorAll(elem);
    }
    this.elements = makeArray(elem);
    this.options = extend({}, this.options);
    if ("function" == typeof options) {
      /** @type {string} */
      element = options;
    } else {
      extend(this.options, options);
    }
    if (element) {
      this.on("always", element);
    }
    this.getImages();
    if ($) {
      this.jqDeferred = new $.Deferred;
    }
    var PWWWService = this;
    setTimeout(function() {
      PWWWService.check();
    });
  }
  /**
   * @param {string} img
   * @return {undefined}
   */
  function LoadingImage(img) {
    /** @type {string} */
    this.img = img;
  }
  /**
   * @param {string} url
   * @return {undefined}
   */
  function Resource(url) {
    /** @type {string} */
    this.src = url;
    cache[url] = this;
  }
  var $ = window.jQuery;
  var console = window.console;
  /** @type {boolean} */
  var baseClass = void 0 !== console;
  /** @type {function(this:*): string} */
  var objectToString$2 = Object.prototype.toString;
  ImagesLoaded.prototype = new EventEmitter;
  ImagesLoaded.prototype.options = {};
  /**
   * @return {undefined}
   */
  ImagesLoaded.prototype.getImages = function() {
    /** @type {!Array} */
    this.images = [];
    /** @type {number} */
    var i = 0;
    var l = this.elements.length;
    for (; l > i; i++) {
      var elem = this.elements[i];
      if ("IMG" === elem.nodeName) {
        this.addImage(elem);
      }
      var type = elem.nodeType;
      if (type && (1 === type || 9 === type || 11 === type)) {
        var result = elem.querySelectorAll("img");
        /** @type {number} */
        var i = 0;
        var diff = result.length;
        for (; diff > i; i++) {
          var elem = result[i];
          this.addImage(elem);
        }
      }
    }
  };
  /**
   * @param {?} img
   * @return {undefined}
   */
  ImagesLoaded.prototype.addImage = function(img) {
    var loadingImage = new LoadingImage(img);
    this.images.push(loadingImage);
  };
  /**
   * @return {?}
   */
  ImagesLoaded.prototype.check = function() {
    /**
     * @param {!Object} options
     * @param {?} className
     * @return {?}
     */
    function onConfirm(options, className) {
      return _this.options.debug && baseClass && console.log("confirm", options, className), _this.progress(options), responsesReceived++, responsesReceived === length && _this.complete(), true;
    }
    var _this = this;
    /** @type {number} */
    var responsesReceived = 0;
    var length = this.images.length;
    if (this.hasAnyBroken = false, !length) {
      return void this.complete();
    }
    /** @type {number} */
    var i = 0;
    for (; length > i; i++) {
      var loadingImage = this.images[i];
      loadingImage.on("confirm", onConfirm);
      loadingImage.check();
    }
  };
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  ImagesLoaded.prototype.progress = function(value) {
    this.hasAnyBroken = this.hasAnyBroken || !value.isLoaded;
    var _this = this;
    setTimeout(function() {
      _this.emit("progress", _this, value);
      if (_this.jqDeferred && _this.jqDeferred.notify) {
        _this.jqDeferred.notify(_this, value);
      }
    });
  };
  /**
   * @return {undefined}
   */
  ImagesLoaded.prototype.complete = function() {
    /** @type {string} */
    var eventName = this.hasAnyBroken ? "fail" : "done";
    /** @type {boolean} */
    this.isComplete = true;
    var _this = this;
    setTimeout(function() {
      if (_this.emit(eventName, _this), _this.emit("always", _this), _this.jqDeferred) {
        /** @type {string} */
        var jqMethod = _this.hasAnyBroken ? "reject" : "resolve";
        _this.jqDeferred[jqMethod](_this);
      }
    });
  };
  if ($) {
    /**
     * @param {(!Function|RegExp|string)} options
     * @param {(!Function|RegExp|string)} callback
     * @return {?}
     */
    $.fn.imagesLoaded = function(options, callback) {
      var instance = new ImagesLoaded(this, options, callback);
      return instance.jqDeferred.promise($(this));
    };
  }
  LoadingImage.prototype = new EventEmitter;
  /**
   * @return {?}
   */
  LoadingImage.prototype.check = function() {
    var resource = cache[this.img.src] || new Resource(this.img.src);
    if (resource.isConfirmed) {
      return void this.confirm(resource.isLoaded, "cached was confirmed");
    }
    if (this.img.complete && void 0 !== this.img.naturalWidth) {
      return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
    }
    var _this = this;
    resource.on("confirm", function(resrc, message) {
      return _this.confirm(resrc.isLoaded, message), true;
    });
    resource.check();
  };
  /**
   * @param {boolean} isLoaded
   * @param {string} message
   * @return {undefined}
   */
  LoadingImage.prototype.confirm = function(isLoaded, message) {
    /** @type {boolean} */
    this.isLoaded = isLoaded;
    this.emit("confirm", this, message);
  };
  var cache = {};
  return Resource.prototype = new EventEmitter, Resource.prototype.check = function() {
    if (!this.isChecked) {
      /** @type {!Image} */
      var image = new Image;
      eventie.bind(image, "load", this);
      eventie.bind(image, "error", this);
      image.src = this.src;
      /** @type {boolean} */
      this.isChecked = true;
    }
  }, Resource.prototype.handleEvent = function(event) {
    /** @type {string} */
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  }, Resource.prototype.onload = function(event) {
    this.confirm(true, "onload");
    this.unbindProxyEvents(event);
  }, Resource.prototype.onerror = function(event) {
    this.confirm(false, "onerror");
    this.unbindProxyEvents(event);
  }, Resource.prototype.confirm = function(isLoaded, message) {
    /** @type {boolean} */
    this.isConfirmed = true;
    /** @type {boolean} */
    this.isLoaded = isLoaded;
    this.emit("confirm", this, message);
  }, Resource.prototype.unbindProxyEvents = function(event) {
    eventie.unbind(event.target, "load", this);
    eventie.unbind(event.target, "error", this);
  }, ImagesLoaded;
});
!function(root) {
  /**
   * @return {undefined}
   */
  function request() {
  }
  /**
   * @param {!Object} $
   * @return {?}
   */
  function defineBridget($) {
    /**
     * @param {!Object} PluginClass
     * @return {undefined}
     */
    function addOptionMethod(PluginClass) {
      if (!PluginClass.prototype.option) {
        /**
         * @param {!Object} key
         * @return {undefined}
         */
        PluginClass.prototype.option = function(key) {
          if ($.isPlainObject(key)) {
            this.options = $.extend(true, this.options, key);
          }
        };
      }
    }
    /**
     * @param {?} name
     * @param {!Object} Interaction
     * @return {undefined}
     */
    function bridge(name, Interaction) {
      /**
       * @param {string} n
       * @return {?}
       */
      $.fn[name] = function(n) {
        if ("string" == typeof n) {
          /** @type {!Array<?>} */
          var s = slice.call(arguments, 1);
          /** @type {number} */
          var i = 0;
          var l = this.length;
          for (; l > i; i++) {
            var trigger = this[i];
            var p = $.data(trigger, name);
            if (p) {
              if ($.isFunction(p[n]) && "_" !== n.charAt(0)) {
                var be = p[n].apply(p, s);
                if (void 0 !== be) {
                  return be;
                }
              } else {
                localRequest("no such method '" + n + "' for " + name + " instance");
              }
            } else {
              localRequest("cannot call methods on " + name + " prior to initialization; attempted to call '" + n + "'");
            }
          }
          return this;
        }
        return this.each(function() {
          var i = $.data(this, name);
          if (i) {
            i.option(n);
            i._init();
          } else {
            i = new Interaction(this, n);
            $.data(this, name, i);
          }
        });
      };
    }
    if ($) {
      /** @type {!Function} */
      var localRequest = "undefined" == typeof console ? request : function(t) {
        console.error(t);
      };
      return $.bridget = function(namespace, PluginClass) {
        addOptionMethod(PluginClass);
        bridge(namespace, PluginClass);
      }, $.bridget;
    }
  }
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = Array.prototype.slice;
  if ("function" == typeof define && define.amd) {
    define("jquery-bridget/jquery.bridget", ["jquery"], defineBridget);
  } else {
    defineBridget("object" == typeof exports ? require("jquery") : root.jQuery);
  }
}(window), function(window) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function trigger(obj) {
    var event = window.event;
    return event.target = event.target || event.srcElement || obj, event;
  }
  /** @type {!Element} */
  var doc = document.documentElement;
  /**
   * @return {undefined}
   */
  var bind = function() {
  };
  if (doc.addEventListener) {
    /**
     * @param {!Object} el
     * @param {(!Function|string)} event
     * @param {!Function} fn
     * @return {undefined}
     */
    bind = function(el, event, fn) {
      el.addEventListener(event, fn, false);
    };
  } else {
    if (doc.attachEvent) {
      /**
       * @param {!Object} el
       * @param {string} event
       * @param {!Function} callback
       * @return {undefined}
       */
      bind = function(el, event, callback) {
        /** @type {function(): undefined} */
        el[event + callback] = callback.handleEvent ? function() {
          var source = trigger(el);
          callback.handleEvent.call(callback, source);
        } : function() {
          var event = trigger(el);
          callback.call(el, event);
        };
        el.attachEvent("on" + event, el[event + callback]);
      };
    }
  }
  /**
   * @return {undefined}
   */
  var unbind = function() {
  };
  if (doc.removeEventListener) {
    /**
     * @param {!Object} object
     * @param {string} name
     * @param {?} callback
     * @return {undefined}
     */
    unbind = function(object, name, callback) {
      object.removeEventListener(name, callback, false);
    };
  } else {
    if (doc.detachEvent) {
      /**
       * @param {!Object} obj
       * @param {string} type
       * @param {string} fn
       * @return {undefined}
       */
      unbind = function(obj, type, fn) {
        obj.detachEvent("on" + type, obj[type + fn]);
        try {
          delete obj[type + fn];
        } catch (o) {
          obj[type + fn] = void 0;
        }
      };
    }
  }
  var eventie = {
    bind : bind,
    unbind : unbind
  };
  if ("function" == typeof define && define.amd) {
    define("eventie/eventie", eventie);
  } else {
    if ("object" == typeof exports) {
      module.exports = eventie;
    } else {
      window.eventie = eventie;
    }
  }
}(window), function() {
  /**
   * @return {undefined}
   */
  function EventEmitter() {
  }
  /**
   * @param {!Object} listeners
   * @param {!Function} listener
   * @return {?}
   */
  function indexOfListener(listeners, listener) {
    var i = listeners.length;
    for (; i--;) {
      if (listeners[i].listener === listener) {
        return i;
      }
    }
    return -1;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function alias(name) {
    return function() {
      return this[name].apply(this, arguments);
    };
  }
  var proto = EventEmitter.prototype;
  var exports = this;
  var originalGlobalValue = exports.EventEmitter;
  /**
   * @param {string} evt
   * @return {?}
   */
  proto.getListeners = function(evt) {
    var response;
    var key;
    var events = this._getEvents();
    if (evt instanceof RegExp) {
      response = {};
      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          response[key] = events[key];
        }
      }
    } else {
      response = events[evt] || (events[evt] = []);
    }
    return response;
  };
  /**
   * @param {!Array} listeners
   * @return {?}
   */
  proto.flattenListeners = function(listeners) {
    var i;
    /** @type {!Array} */
    var flatListeners = [];
    /** @type {number} */
    i = 0;
    for (; listeners.length > i; i = i + 1) {
      flatListeners.push(listeners[i].listener);
    }
    return flatListeners;
  };
  /**
   * @param {string} evt
   * @return {?}
   */
  proto.getListenersAsObject = function(evt) {
    var response;
    var listeners = this.getListeners(evt);
    return listeners instanceof Array && (response = {}, response[evt] = listeners), response || listeners;
  };
  /**
   * @param {string} evt
   * @param {!Function} listener
   * @return {?}
   */
  proto.addListener = function(evt, listener) {
    var key;
    var listeners = this.getListenersAsObject(evt);
    /** @type {boolean} */
    var listenerIsWrapped = "object" == typeof listener;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key) && -1 === indexOfListener(listeners[key], listener)) {
        listeners[key].push(listenerIsWrapped ? listener : {
          listener : listener,
          once : false
        });
      }
    }
    return this;
  };
  proto.on = alias("addListener");
  /**
   * @param {string} evt
   * @param {!Function} listener
   * @return {?}
   */
  proto.addOnceListener = function(evt, listener) {
    return this.addListener(evt, {
      listener : listener,
      once : true
    });
  };
  proto.once = alias("addOnceListener");
  /**
   * @param {string} evt
   * @return {?}
   */
  proto.defineEvent = function(evt) {
    return this.getListeners(evt), this;
  };
  /**
   * @param {!NodeList} evts
   * @return {?}
   */
  proto.defineEvents = function(evts) {
    /** @type {number} */
    var i = 0;
    for (; evts.length > i; i = i + 1) {
      this.defineEvent(evts[i]);
    }
    return this;
  };
  /**
   * @param {string} evt
   * @param {!Function} listener
   * @return {?}
   */
  proto.removeListener = function(evt, listener) {
    var index;
    var key;
    var listeners = this.getListenersAsObject(evt);
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        index = indexOfListener(listeners[key], listener);
        if (-1 !== index) {
          listeners[key].splice(index, 1);
        }
      }
    }
    return this;
  };
  proto.off = alias("removeListener");
  /**
   * @param {!Array} evt
   * @param {!Object} listeners
   * @return {?}
   */
  proto.addListeners = function(evt, listeners) {
    return this.manipulateListeners(false, evt, listeners);
  };
  /**
   * @param {!Array} evt
   * @param {!Object} listeners
   * @return {?}
   */
  proto.removeListeners = function(evt, listeners) {
    return this.manipulateListeners(true, evt, listeners);
  };
  /**
   * @param {boolean} remove
   * @param {!Array} evt
   * @param {!Object} listeners
   * @return {?}
   */
  proto.manipulateListeners = function(remove, evt, listeners) {
    var i;
    var value;
    var single = remove ? this.removeListener : this.addListener;
    var multiple = remove ? this.removeListeners : this.addListeners;
    if ("object" != typeof evt || evt instanceof RegExp) {
      i = listeners.length;
      for (; i--;) {
        single.call(this, evt, listeners[i]);
      }
    } else {
      for (i in evt) {
        if (evt.hasOwnProperty(i) && (value = evt[i])) {
          if ("function" == typeof value) {
            single.call(this, i, value);
          } else {
            multiple.call(this, i, value);
          }
        }
      }
    }
    return this;
  };
  /**
   * @param {!Object} e
   * @return {?}
   */
  proto.removeEvent = function(e) {
    var key;
    /** @type {string} */
    var toe = typeof e;
    var events = this._getEvents();
    if ("string" === toe) {
      delete events[e];
    } else {
      if (e instanceof RegExp) {
        for (key in events) {
          if (events.hasOwnProperty(key) && e.test(key)) {
            delete events[key];
          }
        }
      } else {
        delete this._events;
      }
    }
    return this;
  };
  proto.removeAllListeners = alias("removeEvent");
  /**
   * @param {string} evt
   * @param {!Array} args
   * @return {?}
   */
  proto.emitEvent = function(evt, args) {
    var listener;
    var i;
    var key;
    var response;
    var listeners = this.getListenersAsObject(evt);
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        i = listeners[key].length;
        for (; i--;) {
          listener = listeners[key][i];
          if (listener.once === true) {
            this.removeListener(evt, listener.listener);
          }
          response = listener.listener.apply(this, args || []);
          if (response === this._getOnceReturnValue()) {
            this.removeListener(evt, listener.listener);
          }
        }
      }
    }
    return this;
  };
  proto.trigger = alias("emitEvent");
  /**
   * @param {string} evt
   * @return {?}
   */
  proto.emit = function(evt) {
    /** @type {!Array<?>} */
    var args = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(evt, args);
  };
  /**
   * @param {?} value
   * @return {?}
   */
  proto.setOnceReturnValue = function(value) {
    return this._onceReturnValue = value, this;
  };
  /**
   * @return {?}
   */
  proto._getOnceReturnValue = function() {
    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
  };
  /**
   * @return {?}
   */
  proto._getEvents = function() {
    return this._events || (this._events = {});
  };
  /**
   * @return {?}
   */
  EventEmitter.noConflict = function() {
    return exports.EventEmitter = originalGlobalValue, EventEmitter;
  };
  if ("function" == typeof define && define.amd) {
    define("eventEmitter/EventEmitter", [], function() {
      return EventEmitter;
    });
  } else {
    if ("object" == typeof module && module.exports) {
      /** @type {function(): undefined} */
      module.exports = EventEmitter;
    } else {
      /** @type {function(): undefined} */
      exports.EventEmitter = EventEmitter;
    }
  }
}.call(this), function(window) {
  /**
   * @param {string} prop
   * @return {?}
   */
  function getStyleProperty(prop) {
    if (prop) {
      if ("string" == typeof style[prop]) {
        return prop;
      }
      prop = prop.charAt(0).toUpperCase() + prop.slice(1);
      var prefixed;
      /** @type {number} */
      var j = 0;
      /** @type {number} */
      var length = prefixes.length;
      for (; length > j; j++) {
        if (prefixed = prefixes[j] + prop, "string" == typeof style[prefixed]) {
          return prefixed;
        }
      }
    }
  }
  /** @type {!Array<string>} */
  var prefixes = "Webkit Moz ms Ms O".split(" ");
  /** @type {!CSSStyleDeclaration} */
  var style = document.documentElement.style;
  if ("function" == typeof define && define.amd) {
    define("get-style-property/get-style-property", [], function() {
      return getStyleProperty;
    });
  } else {
    if ("object" == typeof exports) {
      /** @type {function(string): ?} */
      module.exports = getStyleProperty;
    } else {
      /** @type {function(string): ?} */
      window.getStyleProperty = getStyleProperty;
    }
  }
}(window), function(window) {
  /**
   * @param {string} value
   * @return {?}
   */
  function getStyleSize(value) {
    /** @type {number} */
    var i = parseFloat(value);
    /** @type {boolean} */
    var b = -1 === value.indexOf("%") && !isNaN(i);
    return b && i;
  }
  /**
   * @return {undefined}
   */
  function y_() {
  }
  /**
   * @return {?}
   */
  function getZeroSize() {
    var size = {
      width : 0,
      height : 0,
      innerWidth : 0,
      innerHeight : 0,
      outerWidth : 0,
      outerHeight : 0
    };
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var len = measurements.length;
    for (; len > i; i++) {
      var measurement = measurements[i];
      /** @type {number} */
      size[measurement] = 0;
    }
    return size;
  }
  /**
   * @param {?} getStyleProperty
   * @return {?}
   */
  function defineGetSize(getStyleProperty) {
    /**
     * @return {undefined}
     */
    function setup() {
      if (!d) {
        /** @type {boolean} */
        d = true;
        var getComputedStyle = window.getComputedStyle;
        if (getStyle = function() {
          /** @type {function(!Node): ?} */
          var getStyleFn = getComputedStyle ? function(elem) {
            return getComputedStyle(elem, null);
          } : function(elem) {
            return elem.currentStyle;
          };
          return function(elem) {
            var style = getStyleFn(elem);
            return style || vf_("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), style;
          };
        }(), boxSizingProp = getStyleProperty("boxSizing")) {
          /** @type {!Element} */
          var div = document.createElement("div");
          /** @type {string} */
          div.style.width = "200px";
          /** @type {string} */
          div.style.padding = "1px 2px 3px 4px";
          /** @type {string} */
          div.style.borderStyle = "solid";
          /** @type {string} */
          div.style.borderWidth = "1px 2px 3px 4px";
          /** @type {string} */
          div.style[boxSizingProp] = "border-box";
          /** @type {!HTMLBodyElement} */
          var blogDiv = document.body || document.documentElement;
          blogDiv.appendChild(div);
          var style = getStyle(div);
          /** @type {boolean} */
          isBoxSizeOuter = 200 === getStyleSize(style.width);
          blogDiv.removeChild(div);
        }
      }
    }
    /**
     * @param {!HTMLElement} obj
     * @return {?}
     */
    function getSize(obj) {
      if (setup(), "string" == typeof obj && (obj = document.querySelector(obj)), obj && "object" == typeof obj && obj.nodeType) {
        var style = getStyle(obj);
        if ("none" === style.display) {
          return getZeroSize();
        }
        var size = {};
        size.width = obj.offsetWidth;
        size.height = obj.offsetHeight;
        /** @type {boolean} */
        var isBorderBox = size.isBorderBox = !(!boxSizingProp || !style[boxSizingProp] || "border-box" !== style[boxSizingProp]);
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var len = measurements.length;
        for (; len > i; i++) {
          var measurement = measurements[i];
          var value = style[measurement];
          value = mungeNonPixel(obj, value);
          /** @type {number} */
          var b = parseFloat(value);
          /** @type {number} */
          size[measurement] = isNaN(b) ? 0 : b;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
          size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        return styleHeight !== false && (size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight)), size.innerWidth = size.width - (paddingWidth + borderWidth), size.innerHeight = size.height - (paddingHeight + borderHeight), size.outerWidth = size.width + marginWidth, size.outerHeight = size.height + marginHeight, size;
      }
    }
    /**
     * @param {!HTMLElement} elem
     * @param {string} value
     * @return {?}
     */
    function mungeNonPixel(elem, value) {
      if (window.getComputedStyle || -1 === value.indexOf("%")) {
        return value;
      }
      var style = elem.style;
      var left = style.left;
      var rs = elem.runtimeStyle;
      var rsLeft = rs && rs.left;
      return rsLeft && (rs.left = elem.currentStyle.left), style.left = value, value = style.pixelLeft, style.left = left, rsLeft && (rs.left = rsLeft), value;
    }
    var getStyle;
    var boxSizingProp;
    var isBoxSizeOuter;
    /** @type {boolean} */
    var d = false;
    return getSize;
  }
  /** @type {!Function} */
  var vf_ = "undefined" == typeof console ? y_ : function(t) {
    console.error(t);
  };
  /** @type {!Array} */
  var measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  if ("function" == typeof define && define.amd) {
    define("get-size/get-size", ["get-style-property/get-style-property"], defineGetSize);
  } else {
    if ("object" == typeof exports) {
      module.exports = defineGetSize(require("desandro-get-style-property"));
    } else {
      window.getSize = defineGetSize(window.getStyleProperty);
    }
  }
}(window), function(window) {
  /**
   * @param {?} callback
   * @return {undefined}
   */
  function docReady(callback) {
    if ("function" == typeof callback) {
      if (docReady.isReady) {
        callback();
      } else {
        tmp.push(callback);
      }
    }
  }
  /**
   * @param {!Object} t
   * @return {undefined}
   */
  function init(t) {
    /** @type {boolean} */
    var isIE8NotReady = "readystatechange" === t.type && "complete" !== document.readyState;
    if (!(docReady.isReady || isIE8NotReady)) {
      trigger();
    }
  }
  /**
   * @return {undefined}
   */
  function trigger() {
    /** @type {boolean} */
    docReady.isReady = true;
    /** @type {number} */
    var t = 0;
    /** @type {number} */
    var d = tmp.length;
    for (; d > t; t++) {
      var test = tmp[t];
      test();
    }
  }
  /**
   * @param {!Function} eventie
   * @return {?}
   */
  function defineDocReady(eventie) {
    return "complete" === document.readyState ? trigger() : (eventie.bind(document, "DOMContentLoaded", init), eventie.bind(document, "readystatechange", init), eventie.bind(window, "load", init)), docReady;
  }
  var document = window.document;
  /** @type {!Array} */
  var tmp = [];
  /** @type {boolean} */
  docReady.isReady = false;
  if ("function" == typeof define && define.amd) {
    define("doc-ready/doc-ready", ["eventie/eventie"], defineDocReady);
  } else {
    if ("object" == typeof exports) {
      module.exports = defineDocReady(require("eventie"));
    } else {
      window.docReady = defineDocReady(window.eventie);
    }
  }
}(window), function(ElemProto) {
  /**
   * @param {!Object} o
   * @param {!Object} value
   * @return {?}
   */
  function match(o, value) {
    return o[style](value);
  }
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function test(e) {
    if (!e.parentNode) {
      /** @type {!DocumentFragment} */
      var _divContent = document.createDocumentFragment();
      _divContent.appendChild(e);
    }
  }
  /**
   * @param {!Object} value
   * @param {!Object} type
   * @return {?}
   */
  function query(value, type) {
    test(value);
    var fields = value.parentNode.querySelectorAll(type);
    /** @type {number} */
    var i = 0;
    var j = fields.length;
    for (; j > i; i++) {
      if (fields[i] === value) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {!Object} e
   * @param {!Object} s
   * @return {?}
   */
  function l(e, s) {
    return test(e), match(e, s);
  }
  var matchesSelector;
  var style = function() {
    if (ElemProto.matches) {
      return "matches";
    }
    if (ElemProto.matchesSelector) {
      return "matchesSelector";
    }
    /** @type {!Array} */
    var prefixes = ["webkit", "moz", "ms", "o"];
    /** @type {number} */
    var j = 0;
    /** @type {number} */
    var length = prefixes.length;
    for (; length > j; j++) {
      var prefix = prefixes[j];
      /** @type {string} */
      var method = prefix + "MatchesSelector";
      if (ElemProto[method]) {
        return method;
      }
    }
  }();
  if (style) {
    /** @type {!Element} */
    var div = document.createElement("div");
    var supportsOrphans = match(div, "div");
    /** @type {function(!Object, !Object): ?} */
    matchesSelector = supportsOrphans ? match : l;
  } else {
    /** @type {function(!Object, !Object): ?} */
    matchesSelector = query;
  }
  if ("function" == typeof define && define.amd) {
    define("matches-selector/matches-selector", [], function() {
      return matchesSelector;
    });
  } else {
    if ("object" == typeof exports) {
      /** @type {function(!Object, !Object): ?} */
      module.exports = matchesSelector;
    } else {
      /** @type {function(!Object, !Object): ?} */
      window.matchesSelector = matchesSelector;
    }
  }
}(Element.prototype), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(docReady, matchesSelector) {
      return factory(window, docReady, matchesSelector);
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(window, require("doc-ready"), require("desandro-matches-selector"));
    } else {
      window.fizzyUIUtils = factory(window, window.docReady, window.matchesSelector);
    }
  }
}(window, function(window, docReady, matchesSelector) {
  var utils = {};
  /**
   * @param {string} name
   * @param {!Object} options
   * @return {?}
   */
  utils.extend = function(name, options) {
    var option;
    for (option in options) {
      name[option] = options[option];
    }
    return name;
  };
  /**
   * @param {number} a
   * @param {number} b
   * @return {?}
   */
  utils.modulo = function(a, b) {
    return (a % b + b) % b;
  };
  /** @type {function(this:*): string} */
  var objectToString$2 = Object.prototype.toString;
  /**
   * @param {!Object} value
   * @return {?}
   */
  utils.isArray = function(value) {
    return "[object Array]" == objectToString$2.call(value);
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  utils.makeArray = function(obj) {
    /** @type {!Array} */
    var ary = [];
    if (utils.isArray(obj)) {
      /** @type {!Object} */
      ary = obj;
    } else {
      if (obj && "number" == typeof obj.length) {
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var length = obj.length;
        for (; length > i; i++) {
          ary.push(obj[i]);
        }
      } else {
        ary.push(obj);
      }
    }
    return ary;
  };
  /** @type {function(string, !Function): ?} */
  utils.indexOf = Array.prototype.indexOf ? function(obj, value) {
    return obj.indexOf(value);
  } : function(obj, value) {
    /** @type {number} */
    var key = 0;
    var max = obj.length;
    for (; max > key; key++) {
      if (obj[key] === value) {
        return key;
      }
    }
    return -1;
  };
  /**
   * @param {string} target
   * @param {!Function} obj
   * @return {undefined}
   */
  utils.removeFrom = function(target, obj) {
    var item = utils.indexOf(target, obj);
    if (-1 != item) {
      target.splice(item, 1);
    }
  };
  /** @type {function(!AudioNode): ?} */
  utils.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(selector) {
    return selector instanceof HTMLElement;
  } : function(value) {
    return value && "object" == typeof value && 1 == value.nodeType && "string" == typeof value.nodeName;
  };
  utils.setText = function() {
    /**
     * @param {?} elem
     * @param {?} text
     * @return {undefined}
     */
    function getText(elem, text) {
      setTextProperty = setTextProperty || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText");
      elem[setTextProperty] = text;
    }
    var setTextProperty;
    return getText;
  }();
  /**
   * @param {!Element} node
   * @param {?} selector
   * @return {?}
   */
  utils.getParent = function(node, selector) {
    for (; node != document.body;) {
      if (node = node.parentNode, matchesSelector(node, selector)) {
        return node;
      }
    }
  };
  /**
   * @param {(Object|string)} from
   * @return {?}
   */
  utils.getQueryElement = function(from) {
    return "string" == typeof from ? document.querySelector(from) : from;
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  utils.handleEvent = function(event) {
    /** @type {string} */
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  /**
   * @param {!Array} elems
   * @param {?} selector
   * @return {?}
   */
  utils.filterFindElements = function(elems, selector) {
    elems = utils.makeArray(elems);
    /** @type {!Array} */
    var ffElems = [];
    /** @type {number} */
    var i = 0;
    var j = elems.length;
    for (; j > i; i++) {
      var elem = elems[i];
      if (utils.isElement(elem)) {
        if (selector) {
          if (matchesSelector(elem, selector)) {
            ffElems.push(elem);
          }
          var childElems = elem.querySelectorAll(selector);
          /** @type {number} */
          var i = 0;
          var l = childElems.length;
          for (; l > i; i++) {
            ffElems.push(childElems[i]);
          }
        } else {
          ffElems.push(elem);
        }
      }
    }
    return ffElems;
  };
  /**
   * @param {!Function} _class
   * @param {string} methodName
   * @param {number} threshold
   * @return {undefined}
   */
  utils.debounceMethod = function(_class, methodName, threshold) {
    var f = _class.prototype[methodName];
    /** @type {string} */
    var timeoutName = methodName + "Timeout";
    /**
     * @return {undefined}
     */
    _class.prototype[methodName] = function() {
      var timeout = this[timeoutName];
      if (timeout) {
        clearTimeout(timeout);
      }
      /** @type {!Arguments} */
      var arg = arguments;
      var r = this;
      /** @type {number} */
      this[timeoutName] = setTimeout(function() {
        f.apply(r, arg);
        delete r[timeoutName];
      }, threshold || 100);
    };
  };
  /**
   * @param {!Object} str
   * @return {?}
   */
  utils.toDashed = function(str) {
    return str.replace(/(.)([A-Z])/g, function(canCreateDiscussions, roundID, divisionID) {
      return roundID + "-" + divisionID;
    }).toLowerCase();
  };
  var console = window.console;
  return utils.htmlInit = function(WidgetClass, namespace) {
    docReady(function() {
      var dashedNamespace = utils.toDashed(namespace);
      /** @type {!NodeList<Element>} */
      var headerList = document.querySelectorAll(".js-" + dashedNamespace);
      /** @type {string} */
      var a = "data-" + dashedNamespace + "-options";
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var newColumnLength = headerList.length;
      for (; newColumnLength > i; i++) {
        var options;
        /** @type {!Element} */
        var elem = headerList[i];
        /** @type {string} */
        var args = elem.getAttribute(a);
        try {
          /** @type {*} */
          options = args && JSON.parse(args);
        } catch (missMessage) {
          if (console) {
            console.error("Error parsing " + a + " on " + elem.nodeName.toLowerCase() + (elem.id ? "#" + elem.id : "") + ": " + missMessage);
          }
          continue;
        }
        var instance = new WidgetClass(elem, options);
        var $ = window.jQuery;
        if ($) {
          $.data(elem, namespace, instance);
        }
      }
    });
  }, utils;
}), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(localforage, getSize, getStyleProperty, utils) {
      return factory(window, localforage, getSize, getStyleProperty, utils);
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(window, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils"));
    } else {
      window.Outlayer = {};
      window.Outlayer.Item = factory(window, window.EventEmitter, window.getSize, window.getStyleProperty, window.fizzyUIUtils);
    }
  }
}(window, function(window, type, getSize, getStyleProperty, utils) {
  /**
   * @param {?} val
   * @return {?}
   */
  function isEmptyObj(val) {
    var k;
    for (k in val) {
      return false;
    }
    return k = null, true;
  }
  /**
   * @param {!Node} element
   * @param {!Object} layout
   * @return {undefined}
   */
  function Item(element, layout) {
    if (element) {
      /** @type {!Node} */
      this.element = element;
      /** @type {!Object} */
      this.layout = layout;
      this.position = {
        x : 0,
        y : 0
      };
      this._create();
    }
  }
  var getComputedStyle = window.getComputedStyle;
  /** @type {function(?): ?} */
  var getStyle = getComputedStyle ? function(endTab) {
    return getComputedStyle(endTab, null);
  } : function(elem) {
    return elem.currentStyle;
  };
  var transitionProperty = getStyleProperty("transition");
  var transformProperty = getStyleProperty("transform");
  var supportsCSS3 = transitionProperty && transformProperty;
  /** @type {boolean} */
  var is3d = !!getStyleProperty("perspective");
  var transitionEndEvent = {
    WebkitTransition : "webkitTransitionEnd",
    MozTransition : "transitionend",
    OTransition : "otransitionend",
    transition : "transitionend"
  }[transitionProperty];
  /** @type {!Array} */
  var prefixableProperties = ["transform", "transition", "transitionDuration", "transitionProperty"];
  var nameHexMap = function() {
    var cache = {};
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var len = prefixableProperties.length;
    for (; len > i; i++) {
      var prop = prefixableProperties[i];
      var supportedProp = getStyleProperty(prop);
      if (supportedProp && supportedProp !== prop) {
        cache[prop] = supportedProp;
      }
    }
    return cache;
  }();
  utils.extend(Item.prototype, type.prototype);
  /**
   * @return {undefined}
   */
  Item.prototype._create = function() {
    this._transn = {
      ingProperties : {},
      clean : {},
      onEnd : {}
    };
    this.css({
      position : "absolute"
    });
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  Item.prototype.handleEvent = function(event) {
    /** @type {string} */
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  /**
   * @return {undefined}
   */
  Item.prototype.getSize = function() {
    this.size = getSize(this.element);
  };
  /**
   * @param {!Object} name
   * @return {undefined}
   */
  Item.prototype.css = function(name) {
    var data = this.element.style;
    var i;
    for (i in name) {
      var key = nameHexMap[i] || i;
      data[key] = name[i];
    }
  };
  /**
   * @return {undefined}
   */
  Item.prototype.getPosition = function() {
    var style = getStyle(this.element);
    var layoutOptions = this.layout.options;
    var isOriginLeft = layoutOptions.isOriginLeft;
    var isOriginTop = layoutOptions.isOriginTop;
    /** @type {number} */
    var x = parseInt(style[isOriginLeft ? "left" : "right"], 10);
    /** @type {number} */
    var y = parseInt(style[isOriginTop ? "top" : "bottom"], 10);
    /** @type {number} */
    x = isNaN(x) ? 0 : x;
    /** @type {number} */
    y = isNaN(y) ? 0 : y;
    var layoutSize = this.layout.size;
    /** @type {number} */
    x = x - (isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight);
    /** @type {number} */
    y = y - (isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom);
    /** @type {number} */
    this.position.x = x;
    /** @type {number} */
    this.position.y = y;
  };
  /**
   * @return {undefined}
   */
  Item.prototype.layoutPosition = function() {
    var layoutSize = this.layout.size;
    var layoutOptions = this.layout.options;
    var style = {};
    /** @type {string} */
    var xPadding = layoutOptions.isOriginLeft ? "paddingLeft" : "paddingRight";
    /** @type {string} */
    var xProperty = layoutOptions.isOriginLeft ? "left" : "right";
    /** @type {string} */
    var prop = layoutOptions.isOriginLeft ? "right" : "left";
    var x = this.position.x + layoutSize[xPadding];
    /** @type {string} */
    x = layoutOptions.percentPosition && !layoutOptions.isHorizontal ? 100 * (x / layoutSize.width) + "%" : x + "px";
    /** @type {string} */
    style[xProperty] = x;
    /** @type {string} */
    style[prop] = "";
    /** @type {string} */
    var yPadding = layoutOptions.isOriginTop ? "paddingTop" : "paddingBottom";
    /** @type {string} */
    var yProperty = layoutOptions.isOriginTop ? "top" : "bottom";
    /** @type {string} */
    var l = layoutOptions.isOriginTop ? "bottom" : "top";
    var y = this.position.y + layoutSize[yPadding];
    /** @type {string} */
    y = layoutOptions.percentPosition && layoutOptions.isHorizontal ? 100 * (y / layoutSize.height) + "%" : y + "px";
    /** @type {string} */
    style[yProperty] = y;
    /** @type {string} */
    style[l] = "";
    this.css(style);
    this.emitEvent("layout", [this]);
  };
  /** @type {function(number, number): ?} */
  var translate = is3d ? function(num, y) {
    return "translate3d(" + num + "px, " + y + "px, 0)";
  } : function(num, y) {
    return "translate(" + num + "px, " + y + "px)";
  };
  /**
   * @param {number} x
   * @param {number} y
   * @return {?}
   */
  Item.prototype._transitionTo = function(x, y) {
    this.getPosition();
    var curX = this.position.x;
    var curY = this.position.y;
    /** @type {number} */
    var compareX = parseInt(x, 10);
    /** @type {number} */
    var compareY = parseInt(y, 10);
    /** @type {boolean} */
    var didNotMove = compareX === this.position.x && compareY === this.position.y;
    if (this.setPosition(x, y), didNotMove && !this.isTransitioning) {
      return void this.layoutPosition();
    }
    /** @type {number} */
    var transX = x - curX;
    /** @type {number} */
    var transY = y - curY;
    var transitionStyle = {};
    var layoutOptions = this.layout.options;
    /** @type {number} */
    transX = layoutOptions.isOriginLeft ? transX : -transX;
    /** @type {number} */
    transY = layoutOptions.isOriginTop ? transY : -transY;
    transitionStyle.transform = translate(transX, transY);
    this.transition({
      to : transitionStyle,
      onTransitionEnd : {
        transform : this.layoutPosition
      },
      isCleaning : true
    });
  };
  /**
   * @param {number} x
   * @param {number} y
   * @return {undefined}
   */
  Item.prototype.goTo = function(x, y) {
    this.setPosition(x, y);
    this.layoutPosition();
  };
  /** @type {!Function} */
  Item.prototype.moveTo = supportsCSS3 ? Item.prototype._transitionTo : Item.prototype.goTo;
  /**
   * @param {number} x
   * @param {number} y
   * @return {undefined}
   */
  Item.prototype.setPosition = function(x, y) {
    /** @type {number} */
    this.position.x = parseInt(x, 10);
    /** @type {number} */
    this.position.y = parseInt(y, 10);
  };
  /**
   * @param {!Object} args
   * @return {undefined}
   */
  Item.prototype._nonTransition = function(args) {
    this.css(args.to);
    if (args.isCleaning) {
      this._removeStyles(args.to);
    }
    var prop;
    for (prop in args.onTransitionEnd) {
      args.onTransitionEnd[prop].call(this);
    }
  };
  /**
   * @param {!Object} args
   * @return {?}
   */
  Item.prototype._transition = function(args) {
    if (!parseFloat(this.layout.options.transitionDuration)) {
      return void this._nonTransition(args);
    }
    var _transition = this._transn;
    var prop;
    for (prop in args.onTransitionEnd) {
      _transition.onEnd[prop] = args.onTransitionEnd[prop];
    }
    for (prop in args.to) {
      /** @type {boolean} */
      _transition.ingProperties[prop] = true;
      if (args.isCleaning) {
        /** @type {boolean} */
        _transition.clean[prop] = true;
      }
    }
    if (args.from) {
      this.css(args.from);
      var currentH = this.element.offsetHeight;
      /** @type {null} */
      currentH = null;
    }
    this.enableTransition(args.to);
    this.css(args.to);
    /** @type {boolean} */
    this.isTransitioning = true;
  };
  var itemTransitionProperties = transformProperty && utils.toDashed(transformProperty) + ",opacity";
  /**
   * @return {undefined}
   */
  Item.prototype.enableTransition = function() {
    if (!this.isTransitioning) {
      this.css({
        transitionProperty : itemTransitionProperties,
        transitionDuration : this.layout.options.transitionDuration
      });
      this.element.addEventListener(transitionEndEvent, this, false);
    }
  };
  Item.prototype.transition = Item.prototype[transitionProperty ? "_transition" : "_nonTransition"];
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  Item.prototype.onwebkitTransitionEnd = function(event) {
    this.ontransitionend(event);
  };
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  Item.prototype.onotransitionend = function(event) {
    this.ontransitionend(event);
  };
  var dashedVendorProperties = {
    "-webkit-transform" : "transform",
    "-moz-transform" : "transform",
    "-o-transform" : "transform"
  };
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  Item.prototype.ontransitionend = function(event) {
    if (event.target === this.element) {
      var _transition = this._transn;
      var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
      if (delete _transition.ingProperties[propertyName], isEmptyObj(_transition.ingProperties) && this.disableTransition(), propertyName in _transition.clean && (this.element.style[event.propertyName] = "", delete _transition.clean[propertyName]), propertyName in _transition.onEnd) {
        var onTransitionEnd = _transition.onEnd[propertyName];
        onTransitionEnd.call(this);
        delete _transition.onEnd[propertyName];
      }
      this.emitEvent("transitionEnd", [this]);
    }
  };
  /**
   * @return {undefined}
   */
  Item.prototype.disableTransition = function() {
    this.removeTransitionStyles();
    this.element.removeEventListener(transitionEndEvent, this, false);
    /** @type {boolean} */
    this.isTransitioning = false;
  };
  /**
   * @param {?} style
   * @return {undefined}
   */
  Item.prototype._removeStyles = function(style) {
    var param = {};
    var name;
    for (name in style) {
      /** @type {string} */
      param[name] = "";
    }
    this.css(param);
  };
  var css = {
    transitionProperty : "",
    transitionDuration : ""
  };
  return Item.prototype.removeTransitionStyles = function() {
    this.css(css);
  }, Item.prototype.removeElem = function() {
    this.element.parentNode.removeChild(this.element);
    this.css({
      display : ""
    });
    this.emitEvent("remove", [this]);
  }, Item.prototype.remove = function() {
    if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
      return void this.removeElem();
    }
    var _this = this;
    this.once("transitionEnd", function() {
      _this.removeElem();
    });
    this.hide();
  }, Item.prototype.reveal = function() {
    delete this.isHidden;
    this.css({
      display : ""
    });
    var options = this.layout.options;
    var onTransitionEnd = {};
    var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
    onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
    this.transition({
      from : options.hiddenStyle,
      to : options.visibleStyle,
      isCleaning : true,
      onTransitionEnd : onTransitionEnd
    });
  }, Item.prototype.onRevealTransitionEnd = function() {
    if (!this.isHidden) {
      this.emitEvent("reveal");
    }
  }, Item.prototype.getHideRevealTransitionEndProperty = function(styleProperty) {
    var style = this.layout.options[styleProperty];
    if (style.opacity) {
      return "opacity";
    }
    var prop;
    for (prop in style) {
      return prop;
    }
  }, Item.prototype.hide = function() {
    /** @type {boolean} */
    this.isHidden = true;
    this.css({
      display : ""
    });
    var options = this.layout.options;
    var onTransitionEnd = {};
    var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
    onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
    this.transition({
      from : options.visibleStyle,
      to : options.hiddenStyle,
      isCleaning : true,
      onTransitionEnd : onTransitionEnd
    });
  }, Item.prototype.onHideTransitionEnd = function() {
    if (this.isHidden) {
      this.css({
        display : "none"
      });
      this.emitEvent("hide");
    }
  }, Item.prototype.destroy = function() {
    this.css({
      position : "",
      left : "",
      right : "",
      top : "",
      bottom : "",
      transition : "",
      transform : ""
    });
  }, Item;
}), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(eventie, stamplay, getSize, utils, Item) {
      return factory(window, eventie, stamplay, getSize, utils, Item);
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(window, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item"));
    } else {
      window.Outlayer = factory(window, window.eventie, window.EventEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
    }
  }
}(window, function(window, eventie, ModelDecoratorCore, getSize, utils, Item) {
  /**
   * @param {(Object|string)} element
   * @param {undefined} options
   * @return {?}
   */
  function Outlayer(element, options) {
    var el = utils.getQueryElement(element);
    if (!el) {
      return void(wc && wc.error("Bad element for " + this.constructor.namespace + ": " + (el || element)));
    }
    this.element = el;
    if (jQuery) {
      this.$element = jQuery(this.element);
    }
    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options);
    /** @type {number} */
    var id = ++nextCallbackId;
    /** @type {number} */
    this.element.outlayerGUID = id;
    anonIdToIdMap[id] = this;
    this._create();
    if (this.options.isInitLayout) {
      this.layout();
    }
  }
  var wc = window.console;
  var jQuery = window.jQuery;
  /**
   * @return {undefined}
   */
  var noop = function() {
  };
  /** @type {number} */
  var nextCallbackId = 0;
  var anonIdToIdMap = {};
  return Outlayer.namespace = "outlayer", Outlayer.Item = Item, Outlayer.defaults = {
    containerStyle : {
      position : "relative"
    },
    isInitLayout : true,
    isOriginLeft : true,
    isOriginTop : true,
    isResizeBound : true,
    isResizingContainer : true,
    transitionDuration : "0.4s",
    hiddenStyle : {
      opacity : 0,
      transform : "scale(0.001)"
    },
    visibleStyle : {
      opacity : 1,
      transform : "scale(1)"
    }
  }, utils.extend(Outlayer.prototype, ModelDecoratorCore.prototype), Outlayer.prototype.option = function(value) {
    utils.extend(this.options, value);
  }, Outlayer.prototype._create = function() {
    this.reloadItems();
    /** @type {!Array} */
    this.stamps = [];
    this.stamp(this.options.stamp);
    utils.extend(this.element.style, this.options.containerStyle);
    if (this.options.isResizeBound) {
      this.bindResize();
    }
  }, Outlayer.prototype.reloadItems = function() {
    this.items = this._itemize(this.element.children);
  }, Outlayer.prototype._itemize = function(elems) {
    var itemElems = this._filterFindItemElements(elems);
    var Item = this.constructor.Item;
    /** @type {!Array} */
    var items = [];
    /** @type {number} */
    var i = 0;
    var len = itemElems.length;
    for (; len > i; i++) {
      var elem = itemElems[i];
      var item = new Item(elem, this);
      items.push(item);
    }
    return items;
  }, Outlayer.prototype._filterFindItemElements = function(elems) {
    return utils.filterFindElements(elems, this.options.itemSelector);
  }, Outlayer.prototype.getItemElements = function() {
    /** @type {!Array} */
    var elems = [];
    /** @type {number} */
    var i = 0;
    var length = this.items.length;
    for (; length > i; i++) {
      elems.push(this.items[i].element);
    }
    return elems;
  }, Outlayer.prototype.layout = function() {
    this._resetLayout();
    this._manageStamps();
    var isInstant = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, isInstant);
    /** @type {boolean} */
    this._isLayoutInited = true;
  }, Outlayer.prototype._init = Outlayer.prototype.layout, Outlayer.prototype._resetLayout = function() {
    this.getSize();
  }, Outlayer.prototype.getSize = function() {
    this.size = getSize(this.element);
  }, Outlayer.prototype._getMeasurement = function(measurement, size) {
    var elem;
    var option = this.options[measurement];
    if (option) {
      if ("string" == typeof option) {
        elem = this.element.querySelector(option);
      } else {
        if (utils.isElement(option)) {
          elem = option;
        }
      }
      this[measurement] = elem ? getSize(elem)[size] : option;
    } else {
      /** @type {number} */
      this[measurement] = 0;
    }
  }, Outlayer.prototype.layoutItems = function(items, isInstant) {
    items = this._getItemsForLayout(items);
    this._layoutItems(items, isInstant);
    this._postLayout();
  }, Outlayer.prototype._getItemsForLayout = function(items) {
    /** @type {!Array} */
    var layoutItems = [];
    /** @type {number} */
    var i = 0;
    var length = items.length;
    for (; length > i; i++) {
      var item = items[i];
      if (!item.isIgnored) {
        layoutItems.push(item);
      }
    }
    return layoutItems;
  }, Outlayer.prototype._layoutItems = function(items, isInstant) {
    if (this._emitCompleteOnItems("layout", items), items && items.length) {
      /** @type {!Array} */
      var queue = [];
      /** @type {number} */
      var i = 0;
      var length = items.length;
      for (; length > i; i++) {
        var item = items[i];
        var position = this._getItemLayoutPosition(item);
        position.item = item;
        position.isInstant = isInstant || item.isLayoutInstant;
        queue.push(position);
      }
      this._processLayoutQueue(queue);
    }
  }, Outlayer.prototype._getItemLayoutPosition = function() {
    return {
      x : 0,
      y : 0
    };
  }, Outlayer.prototype._processLayoutQueue = function(queue) {
    /** @type {number} */
    var len = 0;
    var i = queue.length;
    for (; i > len; len++) {
      var obj = queue[len];
      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant);
    }
  }, Outlayer.prototype._positionItem = function(item, x, y, isInstant) {
    if (isInstant) {
      item.goTo(x, y);
    } else {
      item.moveTo(x, y);
    }
  }, Outlayer.prototype._postLayout = function() {
    this.resizeContainer();
  }, Outlayer.prototype.resizeContainer = function() {
    if (this.options.isResizingContainer) {
      var size = this._getContainerSize();
      if (size) {
        this._setContainerMeasure(size.width, true);
        this._setContainerMeasure(size.height, false);
      }
    }
  }, Outlayer.prototype._getContainerSize = noop, Outlayer.prototype._setContainerMeasure = function(measure, isWidth) {
    if (void 0 !== measure) {
      var elemSize = this.size;
      if (elemSize.isBorderBox) {
        measure = measure + (isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth);
      }
      /** @type {number} */
      measure = Math.max(measure, 0);
      /** @type {string} */
      this.element.style[isWidth ? "width" : "height"] = measure + "px";
    }
  }, Outlayer.prototype._emitCompleteOnItems = function(eventName, items) {
    /**
     * @return {undefined}
     */
    function onComplete() {
      _this.emitEvent(eventName + "Complete", [items]);
    }
    /**
     * @return {undefined}
     */
    function tick() {
      filter_key++;
      if (filter_key === count) {
        onComplete();
      }
    }
    var _this = this;
    var count = items.length;
    if (!items || !count) {
      return void onComplete();
    }
    /** @type {number} */
    var filter_key = 0;
    /** @type {number} */
    var i = 0;
    var length = items.length;
    for (; length > i; i++) {
      var item = items[i];
      item.once(eventName, tick);
    }
  }, Outlayer.prototype.ignore = function(key) {
    var item = this.getItem(key);
    if (item) {
      /** @type {boolean} */
      item.isIgnored = true;
    }
  }, Outlayer.prototype.unignore = function(elem) {
    var item = this.getItem(elem);
    if (item) {
      delete item.isIgnored;
    }
  }, Outlayer.prototype.stamp = function(elems) {
    if (elems = this._find(elems)) {
      this.stamps = this.stamps.concat(elems);
      /** @type {number} */
      var i = 0;
      var length = elems.length;
      for (; length > i; i++) {
        var elem = elems[i];
        this.ignore(elem);
      }
    }
  }, Outlayer.prototype.unstamp = function(elems) {
    if (elems = this._find(elems)) {
      /** @type {number} */
      var i = 0;
      var length = elems.length;
      for (; length > i; i++) {
        var elem = elems[i];
        utils.removeFrom(this.stamps, elem);
        this.unignore(elem);
      }
    }
  }, Outlayer.prototype._find = function(elems) {
    return elems ? ("string" == typeof elems && (elems = this.element.querySelectorAll(elems)), elems = utils.makeArray(elems)) : void 0;
  }, Outlayer.prototype._manageStamps = function() {
    if (this.stamps && this.stamps.length) {
      this._getBoundingRect();
      /** @type {number} */
      var i = 0;
      var len = this.stamps.length;
      for (; len > i; i++) {
        var stamp = this.stamps[i];
        this._manageStamp(stamp);
      }
    }
  }, Outlayer.prototype._getBoundingRect = function() {
    var boundingRect = this.element.getBoundingClientRect();
    var size = this.size;
    this._boundingRect = {
      left : boundingRect.left + size.paddingLeft + size.borderLeftWidth,
      top : boundingRect.top + size.paddingTop + size.borderTopWidth,
      right : boundingRect.right - (size.paddingRight + size.borderRightWidth),
      bottom : boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
    };
  }, Outlayer.prototype._manageStamp = noop, Outlayer.prototype._getElementOffset = function(elem) {
    var boundingRect = elem.getBoundingClientRect();
    var thisRect = this._boundingRect;
    var size = getSize(elem);
    var offset = {
      left : boundingRect.left - thisRect.left - size.marginLeft,
      top : boundingRect.top - thisRect.top - size.marginTop,
      right : thisRect.right - boundingRect.right - size.marginRight,
      bottom : thisRect.bottom - boundingRect.bottom - size.marginBottom
    };
    return offset;
  }, Outlayer.prototype.handleEvent = function(event) {
    /** @type {string} */
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  }, Outlayer.prototype.bindResize = function() {
    if (!this.isResizeBound) {
      eventie.bind(window, "resize", this);
      /** @type {boolean} */
      this.isResizeBound = true;
    }
  }, Outlayer.prototype.unbindResize = function() {
    if (this.isResizeBound) {
      eventie.unbind(window, "resize", this);
    }
    /** @type {boolean} */
    this.isResizeBound = false;
  }, Outlayer.prototype.onresize = function() {
    /**
     * @return {undefined}
     */
    function delayed() {
      _this.resize();
      delete _this.resizeTimeout;
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    var _this = this;
    /** @type {number} */
    this.resizeTimeout = setTimeout(delayed, 100);
  }, Outlayer.prototype.resize = function() {
    if (this.isResizeBound && this.needsResizeLayout()) {
      this.layout();
    }
  }, Outlayer.prototype.needsResizeLayout = function() {
    var size = getSize(this.element);
    var hasSizes = this.size && size;
    return hasSizes && size.innerWidth !== this.size.innerWidth;
  }, Outlayer.prototype.addItems = function(elems) {
    var items = this._itemize(elems);
    return items.length && (this.items = this.items.concat(items)), items;
  }, Outlayer.prototype.appended = function(elems) {
    var items = this.addItems(elems);
    if (items.length) {
      this.layoutItems(items, true);
      this.reveal(items);
    }
  }, Outlayer.prototype.prepended = function(elems) {
    var items = this._itemize(elems);
    if (items.length) {
      var previousItems = this.items.slice(0);
      this.items = items.concat(previousItems);
      this._resetLayout();
      this._manageStamps();
      this.layoutItems(items, true);
      this.reveal(items);
      this.layoutItems(previousItems);
    }
  }, Outlayer.prototype.reveal = function(items) {
    this._emitCompleteOnItems("reveal", items);
    var i = items && items.length;
    /** @type {number} */
    var x = 0;
    for (; i && i > x; x++) {
      var node = items[x];
      node.reveal();
    }
  }, Outlayer.prototype.hide = function(items) {
    this._emitCompleteOnItems("hide", items);
    var i = items && items.length;
    /** @type {number} */
    var x = 0;
    for (; i && i > x; x++) {
      var o = items[x];
      o.hide();
    }
  }, Outlayer.prototype.revealItemElements = function(elems) {
    var items = this.getItems(elems);
    this.reveal(items);
  }, Outlayer.prototype.hideItemElements = function(elems) {
    var data = this.getItems(elems);
    this.hide(data);
  }, Outlayer.prototype.getItem = function(element) {
    /** @type {number} */
    var buildingName = 0;
    var itemsLength = this.items.length;
    for (; itemsLength > buildingName; buildingName++) {
      var item = this.items[buildingName];
      if (item.element === element) {
        return item;
      }
    }
  }, Outlayer.prototype.getItems = function(selector) {
    selector = utils.makeArray(selector);
    /** @type {!Array} */
    var children = [];
    /** @type {number} */
    var firstField = 0;
    var ln = selector.length;
    for (; ln > firstField; firstField++) {
      var matcher = selector[firstField];
      var res = this.getItem(matcher);
      if (res) {
        children.push(res);
      }
    }
    return children;
  }, Outlayer.prototype.remove = function(elems) {
    var removeItems = this.getItems(elems);
    if (this._emitCompleteOnItems("remove", removeItems), removeItems && removeItems.length) {
      /** @type {number} */
      var i = 0;
      var len = removeItems.length;
      for (; len > i; i++) {
        var item = removeItems[i];
        item.remove();
        utils.removeFrom(this.items, item);
      }
    }
  }, Outlayer.prototype.destroy = function() {
    var style = this.element.style;
    /** @type {string} */
    style.height = "";
    /** @type {string} */
    style.position = "";
    /** @type {string} */
    style.width = "";
    /** @type {number} */
    var buildingName = 0;
    var itemsLength = this.items.length;
    for (; itemsLength > buildingName; buildingName++) {
      var item = this.items[buildingName];
      item.destroy();
    }
    this.unbindResize();
    var id = this.element.outlayerGUID;
    delete anonIdToIdMap[id];
    delete this.element.outlayerGUID;
    if (jQuery) {
      jQuery.removeData(this.element, this.constructor.namespace);
    }
  }, Outlayer.data = function(type) {
    type = utils.getQueryElement(type);
    var ffor = type && type.outlayerGUID;
    return ffor && anonIdToIdMap[ffor];
  }, Outlayer.create = function(namespace, styles) {
    /**
     * @return {undefined}
     */
    function Layout() {
      Outlayer.apply(this, arguments);
    }
    return Object.create ? Layout.prototype = Object.create(Outlayer.prototype) : utils.extend(Layout.prototype, Outlayer.prototype), Layout.prototype.constructor = Layout, Layout.defaults = utils.extend({}, Outlayer.defaults), utils.extend(Layout.defaults, styles), Layout.prototype.settings = {}, Layout.namespace = namespace, Layout.data = Outlayer.data, Layout.Item = function() {
      Item.apply(this, arguments);
    }, Layout.Item.prototype = new Item, utils.htmlInit(Layout, namespace), jQuery && jQuery.bridget && jQuery.bridget(namespace, Layout), Layout;
  }, Outlayer.Item = Item, Outlayer;
}), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define("isotope/js/item", ["outlayer/outlayer"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("outlayer"));
    } else {
      window.Isotope = window.Isotope || {};
      window.Isotope.Item = factory(window.Outlayer);
    }
  }
}(window, function(result) {
  /**
   * @return {undefined}
   */
  function Item() {
    result.Item.apply(this, arguments);
  }
  Item.prototype = new result.Item;
  /**
   * @return {undefined}
   */
  Item.prototype._create = function() {
    /** @type {number} */
    this.id = this.layout.itemGUID++;
    result.Item.prototype._create.call(this);
    this.sortData = {};
  };
  /**
   * @return {undefined}
   */
  Item.prototype.updateSortData = function() {
    if (!this.isIgnored) {
      this.sortData.id = this.id;
      this.sortData["original-order"] = this.id;
      /** @type {number} */
      this.sortData.random = Math.random();
      var getSortData = this.layout.options.getSortData;
      var sorters = this.layout._sorters;
      var key;
      for (key in getSortData) {
        var sorter = sorters[key];
        this.sortData[key] = sorter(this.element, this);
      }
    }
  };
  /** @type {function(): undefined} */
  var destroy = Item.prototype.destroy;
  return Item.prototype.destroy = function() {
    destroy.apply(this, arguments);
    this.css({
      display : ""
    });
  }, Item;
}), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("get-size"), require("outlayer"));
    } else {
      window.Isotope = window.Isotope || {};
      window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
    }
  }
}(window, function(getSize, mainDish) {
  /**
   * @param {!Object} isotope
   * @return {undefined}
   */
  function LayoutMode(isotope) {
    /** @type {!Object} */
    this.isotope = isotope;
    if (isotope) {
      this.options = isotope.options[this.namespace];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }
  return function() {
    /**
     * @param {?} methodName
     * @return {?}
     */
    function getOutlayerMethod(methodName) {
      return function() {
        return mainDish.prototype[methodName].apply(this.isotope, arguments);
      };
    }
    /** @type {!Array} */
    var facadeMethods = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var len = facadeMethods.length;
    for (; len > i; i++) {
      var methodName = facadeMethods[i];
      LayoutMode.prototype[methodName] = getOutlayerMethod(methodName);
    }
  }(), LayoutMode.prototype.needsVerticalResizeLayout = function() {
    var size = getSize(this.isotope.element);
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  }, LayoutMode.prototype._getMeasurement = function() {
    this.isotope._getMeasurement.apply(this, arguments);
  }, LayoutMode.prototype.getColumnWidth = function() {
    this.getSegmentSize("column", "Width");
  }, LayoutMode.prototype.getRowHeight = function() {
    this.getSegmentSize("row", "Height");
  }, LayoutMode.prototype.getSegmentSize = function(segment, size) {
    var segmentName = segment + size;
    /** @type {string} */
    var outerSize = "outer" + size;
    if (this._getMeasurement(segmentName, outerSize), !this[segmentName]) {
      var firstItemSize = this.getFirstItemSize();
      this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size["inner" + size];
    }
  }, LayoutMode.prototype.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize(firstItem.element);
  }, LayoutMode.prototype.layout = function() {
    this.isotope.layout.apply(this.isotope, arguments);
  }, LayoutMode.prototype.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  }, LayoutMode.modes = {}, LayoutMode.create = function(namespace, options) {
    /**
     * @return {undefined}
     */
    function Mode() {
      LayoutMode.apply(this, arguments);
    }
    return Mode.prototype = new LayoutMode, options && (Mode.options = options), Mode.prototype.namespace = namespace, LayoutMode.modes[namespace] = Mode, Mode;
  }, LayoutMode;
}), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("outlayer"), require("get-size"), require("fizzy-ui-utils"));
    } else {
      window.Masonry = factory(window.Outlayer, window.getSize, window.fizzyUIUtils);
    }
  }
}(window, function(Outlayer, getSize, scale) {
  var Masonry = Outlayer.create("masonry");
  return Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement("columnWidth", "outerWidth");
    this._getMeasurement("gutter", "outerWidth");
    this.measureColumns();
    var i = this.cols;
    /** @type {!Array} */
    this.colYs = [];
    for (; i--;) {
      this.colYs.push(0);
    }
    /** @type {number} */
    this.maxY = 0;
  }, Masonry.prototype.measureColumns = function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
    }
    var columnWidth = this.columnWidth += this.gutter;
    var containerWidth = this.containerWidth + this.gutter;
    /** @type {number} */
    var cols = containerWidth / columnWidth;
    /** @type {number} */
    var excess = columnWidth - containerWidth % columnWidth;
    /** @type {string} */
    var mathMethod = excess && 1 > excess ? "round" : "floor";
    cols = Math[mathMethod](cols);
    /** @type {number} */
    this.cols = Math.max(cols, 1);
  }, Masonry.prototype.getContainerWidth = function() {
    var container = this.options.isFitWidth ? this.element.parentNode : this.element;
    var size = getSize(container);
    this.containerWidth = size && size.innerWidth;
  }, Masonry.prototype._getItemLayoutPosition = function(item) {
    item.getSize();
    /** @type {number} */
    var remainder = item.size.outerWidth % this.columnWidth;
    /** @type {string} */
    var mathMethod = remainder && 1 > remainder ? "round" : "ceil";
    var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
    /** @type {number} */
    colSpan = Math.min(colSpan, this.cols);
    var x = this._getColGroup(colSpan);
    /** @type {number} */
    var minimumY = Math.min.apply(Math, x);
    var shortColIndex = scale.indexOf(x, minimumY);
    var position = {
      x : this.columnWidth * shortColIndex,
      y : minimumY
    };
    var setHeight = minimumY + item.size.outerHeight;
    /** @type {number} */
    var indexOfRequirement = this.cols + 1 - x.length;
    /** @type {number} */
    var i = 0;
    for (; indexOfRequirement > i; i++) {
      this.colYs[shortColIndex + i] = setHeight;
    }
    return position;
  }, Masonry.prototype._getColGroup = function(colSpan) {
    if (2 > colSpan) {
      return this.colYs;
    }
    /** @type {!Array} */
    var colGroup = [];
    /** @type {number} */
    var length = this.cols + 1 - colSpan;
    /** @type {number} */
    var i = 0;
    for (; length > i; i++) {
      var value = this.colYs.slice(i, i + colSpan);
      /** @type {number} */
      colGroup[i] = Math.max.apply(Math, value);
    }
    return colGroup;
  }, Masonry.prototype._manageStamp = function(stamp) {
    var stampSize = getSize(stamp);
    var offset = this._getElementOffset(stamp);
    var firstX = this.options.isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    /** @type {number} */
    var s = Math.floor(firstX / this.columnWidth);
    /** @type {number} */
    s = Math.max(0, s);
    /** @type {number} */
    var date = Math.floor(lastX / this.columnWidth);
    /** @type {number} */
    date = date - (lastX % this.columnWidth ? 0 : 1);
    /** @type {number} */
    date = Math.min(this.cols - 1, date);
    var stampMaxY = (this.options.isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
    /** @type {number} */
    var i = s;
    for (; date >= i; i++) {
      /** @type {number} */
      this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
    }
  }, Masonry.prototype._getContainerSize = function() {
    /** @type {number} */
    this.maxY = Math.max.apply(Math, this.colYs);
    var size = {
      height : this.maxY
    };
    return this.options.isFitWidth && (size.width = this._getContainerFitWidth()), size;
  }, Masonry.prototype._getContainerFitWidth = function() {
    /** @type {number} */
    var unusedCols = 0;
    var i = this.cols;
    for (; --i && 0 === this.colYs[i];) {
      unusedCols++;
    }
    return (this.cols - unusedCols) * this.columnWidth - this.gutter;
  }, Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    return this.getContainerWidth(), previousWidth !== this.containerWidth;
  }, Masonry;
}), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("../layout-mode"), require("masonry-layout"));
    } else {
      factory(window.Isotope.LayoutMode, window.Masonry);
    }
  }
}(window, function(Outlayer, SupClass) {
  /**
   * @param {!Object} obj
   * @param {!Object} extendWith
   * @return {?}
   */
  function extend(obj, extendWith) {
    var i;
    for (i in extendWith) {
      obj[i] = extendWith[i];
    }
    return obj;
  }
  var MasonryMode = Outlayer.create("masonry");
  var _getElementOffset = MasonryMode.prototype._getElementOffset;
  var layout = MasonryMode.prototype.layout;
  var _getMeasurement = MasonryMode.prototype._getMeasurement;
  extend(MasonryMode.prototype, SupClass.prototype);
  MasonryMode.prototype._getElementOffset = _getElementOffset;
  MasonryMode.prototype.layout = layout;
  MasonryMode.prototype._getMeasurement = _getMeasurement;
  /** @type {function(): undefined} */
  var measureColumns = MasonryMode.prototype.measureColumns;
  /**
   * @return {undefined}
   */
  MasonryMode.prototype.measureColumns = function() {
    this.items = this.isotope.filteredItems;
    measureColumns.call(this);
  };
  /** @type {function(): undefined} */
  var _manageStamp = MasonryMode.prototype._manageStamp;
  return MasonryMode.prototype._manageStamp = function() {
    this.options.isOriginLeft = this.isotope.options.isOriginLeft;
    this.options.isOriginTop = this.isotope.options.isOriginTop;
    _manageStamp.apply(this, arguments);
  }, MasonryMode;
}), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("../layout-mode"));
    } else {
      factory(window.Isotope.LayoutMode);
    }
  }
}(window, function(LayoutMode) {
  var FitRows = LayoutMode.create("fitRows");
  return FitRows.prototype._resetLayout = function() {
    /** @type {number} */
    this.x = 0;
    /** @type {number} */
    this.y = 0;
    /** @type {number} */
    this.maxY = 0;
    this._getMeasurement("gutter", "outerWidth");
  }, FitRows.prototype._getItemLayoutPosition = function(item) {
    item.getSize();
    var itemWidth = item.size.outerWidth + this.gutter;
    var containerWidth = this.isotope.size.innerWidth + this.gutter;
    if (0 !== this.x && itemWidth + this.x > containerWidth) {
      /** @type {number} */
      this.x = 0;
      this.y = this.maxY;
    }
    var dimensionValidators = {
      x : this.x,
      y : this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight), this.x += itemWidth, dimensionValidators;
  }, FitRows.prototype._getContainerSize = function() {
    return {
      height : this.maxY
    };
  }, FitRows;
}), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define("isotope/js/layout-modes/vertical", ["../layout-mode"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("../layout-mode"));
    } else {
      factory(window.Isotope.LayoutMode);
    }
  }
}(window, function(LayoutMode) {
  var Vertical = LayoutMode.create("vertical", {
    horizontalAlignment : 0
  });
  return Vertical.prototype._resetLayout = function() {
    /** @type {number} */
    this.y = 0;
  }, Vertical.prototype._getItemLayoutPosition = function(item) {
    item.getSize();
    /** @type {number} */
    var audioOffsetX = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
    var y = this.y;
    return this.y += item.size.outerHeight, {
      x : audioOffsetX,
      y : y
    };
  }, Vertical.prototype._getContainerSize = function() {
    return {
      height : this.y
    };
  }, Vertical;
}), function(window, factory) {
  if ("function" == typeof define && define.amd) {
    define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(Outlayer, vjs, matchesSelector, utils, Item, LayoutMode) {
      return factory(window, Outlayer, vjs, matchesSelector, utils, Item, LayoutMode);
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(window, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical"));
    } else {
      window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
    }
  }
}(window, function(window, Outlayer, vjs, matchesSelector, utils, Item, LayoutMode) {
  /**
   * @param {!NodeList} sortBys
   * @param {!Element} sortAsc
   * @return {?}
   */
  function getItemSorter(sortBys, sortAsc) {
    return function(itemB, itemA) {
      /** @type {number} */
      var i = 0;
      var len = sortBys.length;
      for (; len > i; i++) {
        var sortBy = sortBys[i];
        var aVal = itemB.sortData[sortBy];
        var bVal = itemA.sortData[sortBy];
        if (aVal > bVal || bVal > aVal) {
          var isAscending = void 0 !== sortAsc[sortBy] ? sortAsc[sortBy] : sortAsc;
          /** @type {number} */
          var multiplier = isAscending ? 1 : -1;
          return (aVal > bVal ? 1 : -1) * multiplier;
        }
      }
      return 0;
    };
  }
  var jQuery = window.jQuery;
  /** @type {function(string): ?} */
  var trim = String.prototype.trim ? function(f) {
    return f.trim();
  } : function(condition) {
    return condition.replace(/^\s+|\s+$/g, "");
  };
  /** @type {!Element} */
  var documentElement = document.documentElement;
  /** @type {function(!Node): ?} */
  var isFinite = documentElement.textContent ? function(text2) {
    return text2.textContent;
  } : function(g) {
    return g.innerText;
  };
  var Isotope = Outlayer.create("isotope", {
    layoutMode : "masonry",
    isJQueryFiltering : true,
    sortAscending : true
  });
  /** @type {!Function} */
  Isotope.Item = Item;
  /** @type {!Object} */
  Isotope.LayoutMode = LayoutMode;
  /**
   * @return {undefined}
   */
  Isotope.prototype._create = function() {
    /** @type {number} */
    this.itemGUID = 0;
    this._sorters = {};
    this._getSorters();
    Outlayer.prototype._create.call(this);
    this.modes = {};
    this.filteredItems = this.items;
    /** @type {!Array} */
    this.sortHistory = ["original-order"];
    var name;
    for (name in LayoutMode.modes) {
      this._initLayoutMode(name);
    }
  };
  /**
   * @return {undefined}
   */
  Isotope.prototype.reloadItems = function() {
    /** @type {number} */
    this.itemGUID = 0;
    Outlayer.prototype.reloadItems.call(this);
  };
  /**
   * @return {?}
   */
  Isotope.prototype._itemize = function() {
    var items = Outlayer.prototype._itemize.apply(this, arguments);
    /** @type {number} */
    var i = 0;
    var length = items.length;
    for (; length > i; i++) {
      var item = items[i];
      /** @type {number} */
      item.id = this.itemGUID++;
    }
    return this._updateItemsSortData(items), items;
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  Isotope.prototype._initLayoutMode = function(name) {
    var Mode = LayoutMode.modes[name];
    var initialOpts = this.options[name] || {};
    this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
    this.modes[name] = new Mode(this);
  };
  /**
   * @return {?}
   */
  Isotope.prototype.layout = function() {
    return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout();
  };
  /**
   * @return {undefined}
   */
  Isotope.prototype._layout = function() {
    var isInstant = this._getIsInstant();
    this._resetLayout();
    this._manageStamps();
    this.layoutItems(this.filteredItems, isInstant);
    /** @type {boolean} */
    this._isLayoutInited = true;
  };
  /**
   * @param {!Object} name
   * @return {undefined}
   */
  Isotope.prototype.arrange = function(name) {
    /**
     * @return {undefined}
     */
    function hideReveal() {
      _this.reveal(filtered.needReveal);
      _this.hide(filtered.needHide);
    }
    this.option(name);
    this._getIsInstant();
    var filtered = this._filter(this.items);
    this.filteredItems = filtered.matches;
    var _this = this;
    this._bindArrangeComplete();
    if (this._isInstant) {
      this._noTransition(hideReveal);
    } else {
      hideReveal();
    }
    this._sort();
    this._layout();
  };
  /** @type {function(!Object): undefined} */
  Isotope.prototype._init = Isotope.prototype.arrange;
  /**
   * @return {?}
   */
  Isotope.prototype._getIsInstant = function() {
    var isInstant = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    return this._isInstant = isInstant, isInstant;
  };
  /**
   * @return {undefined}
   */
  Isotope.prototype._bindArrangeComplete = function() {
    /**
     * @return {undefined}
     */
    function arrangeParallelCallback() {
      if (e && isIE && strict) {
        _this.emitEvent("arrangeComplete", [_this.filteredItems]);
      }
    }
    var e;
    var isIE;
    var strict;
    var _this = this;
    this.once("layoutComplete", function() {
      /** @type {boolean} */
      e = true;
      arrangeParallelCallback();
    });
    this.once("hideComplete", function() {
      /** @type {boolean} */
      isIE = true;
      arrangeParallelCallback();
    });
    this.once("revealComplete", function() {
      /** @type {boolean} */
      strict = true;
      arrangeParallelCallback();
    });
  };
  /**
   * @param {!NodeList} items
   * @return {?}
   */
  Isotope.prototype._filter = function(items) {
    var filter = this.options.filter;
    filter = filter || "*";
    /** @type {!Array} */
    var matches = [];
    /** @type {!Array} */
    var hiddenMatched = [];
    /** @type {!Array} */
    var visibleUnmatched = [];
    var test = this._getFilterTest(filter);
    /** @type {number} */
    var i = 0;
    var length = items.length;
    for (; length > i; i++) {
      var item = items[i];
      if (!item.isIgnored) {
        var isMatched = test(item);
        if (isMatched) {
          matches.push(item);
        }
        if (isMatched && item.isHidden) {
          hiddenMatched.push(item);
        } else {
          if (!(isMatched || item.isHidden)) {
            visibleUnmatched.push(item);
          }
        }
      }
    }
    return {
      matches : matches,
      needReveal : hiddenMatched,
      needHide : visibleUnmatched
    };
  };
  /**
   * @param {undefined} filter
   * @return {?}
   */
  Isotope.prototype._getFilterTest = function(filter) {
    return jQuery && this.options.isJQueryFiltering ? function(table) {
      return jQuery(table.element).is(filter);
    } : "function" == typeof filter ? function(options) {
      return filter(options.element);
    } : function(event) {
      return matchesSelector(event.element, filter);
    };
  };
  /**
   * @param {?} elems
   * @return {undefined}
   */
  Isotope.prototype.updateSortData = function(elems) {
    var items;
    if (elems) {
      elems = utils.makeArray(elems);
      items = this.getItems(elems);
    } else {
      items = this.items;
    }
    this._getSorters();
    this._updateItemsSortData(items);
  };
  /**
   * @return {undefined}
   */
  Isotope.prototype._getSorters = function() {
    var getSortData = this.options.getSortData;
    var key;
    for (key in getSortData) {
      var sorter = getSortData[key];
      this._sorters[key] = mungeSorter(sorter);
    }
  };
  /**
   * @param {!Object} items
   * @return {undefined}
   */
  Isotope.prototype._updateItemsSortData = function(items) {
    var i = items && items.length;
    /** @type {number} */
    var time = 0;
    for (; i && i > time; time++) {
      var item = items[time];
      item.updateSortData();
    }
  };
  var mungeSorter = function() {
    /**
     * @param {!Function} sorter
     * @return {?}
     */
    function mungeSorter(sorter) {
      if ("string" != typeof sorter) {
        return sorter;
      }
      var args = trim(sorter).split(" ");
      var query = args[0];
      var uiJqConfig = query.match(/^\[(.+)\]$/);
      var options = uiJqConfig && uiJqConfig[1];
      var getValue = render(options, query);
      var parser = Isotope.sortDataParsers[args[1]];
      return sorter = parser ? function(elem) {
        return elem && parser(getValue(elem));
      } : function(elem) {
        return elem && getValue(elem);
      };
    }
    /**
     * @param {boolean} el
     * @param {?} selector
     * @return {?}
     */
    function render(el, selector) {
      var type;
      return type = el ? function(tabsEl) {
        return tabsEl.getAttribute(el);
      } : function(match) {
        var n = match.querySelector(selector);
        return n && isFinite(n);
      };
    }
    return mungeSorter;
  }();
  Isotope.sortDataParsers = {
    parseInt : function(text) {
      return parseInt(text, 10);
    },
    parseFloat : function(value) {
      return parseFloat(value);
    }
  };
  /**
   * @return {undefined}
   */
  Isotope.prototype._sort = function() {
    var field = this.options.sortBy;
    if (field) {
      /** @type {!Array<?>} */
      var sortBys = [].concat.apply(field, this.sortHistory);
      var itemSorter = getItemSorter(sortBys, this.options.sortAscending);
      this.filteredItems.sort(itemSorter);
      if (field != this.sortHistory[0]) {
        this.sortHistory.unshift(field);
      }
    }
  };
  /**
   * @return {?}
   */
  Isotope.prototype._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[layoutMode];
    if (!mode) {
      throw Error("No layout mode: " + layoutMode);
    }
    return mode.options = this.options[layoutMode], mode;
  };
  /**
   * @return {undefined}
   */
  Isotope.prototype._resetLayout = function() {
    Outlayer.prototype._resetLayout.call(this);
    this._mode()._resetLayout();
  };
  /**
   * @param {!Object} item
   * @return {?}
   */
  Isotope.prototype._getItemLayoutPosition = function(item) {
    return this._mode()._getItemLayoutPosition(item);
  };
  /**
   * @param {!Object} stamp
   * @return {undefined}
   */
  Isotope.prototype._manageStamp = function(stamp) {
    this._mode()._manageStamp(stamp);
  };
  /**
   * @return {?}
   */
  Isotope.prototype._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };
  /**
   * @return {?}
   */
  Isotope.prototype.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };
  /**
   * @param {!Array} elems
   * @return {undefined}
   */
  Isotope.prototype.appended = function(elems) {
    var items = this.addItems(elems);
    if (items.length) {
      var filteredItems = this._filterRevealAdded(items);
      this.filteredItems = this.filteredItems.concat(filteredItems);
    }
  };
  /**
   * @param {!Array} elems
   * @return {undefined}
   */
  Isotope.prototype.prepended = function(elems) {
    var items = this._itemize(elems);
    if (items.length) {
      this._resetLayout();
      this._manageStamps();
      var filteredItems = this._filterRevealAdded(items);
      this.layoutItems(this.filteredItems);
      this.filteredItems = filteredItems.concat(this.filteredItems);
      this.items = items.concat(this.items);
    }
  };
  /**
   * @param {(Node|NodeList|string)} items
   * @return {?}
   */
  Isotope.prototype._filterRevealAdded = function(items) {
    var filtered = this._filter(items);
    return this.hide(filtered.needHide), this.reveal(filtered.matches), this.layoutItems(filtered.matches, true), filtered.matches;
  };
  /**
   * @param {!Array} elems
   * @return {undefined}
   */
  Isotope.prototype.insert = function(elems) {
    var items = this.addItems(elems);
    if (items.length) {
      var i;
      var item;
      var length = items.length;
      /** @type {number} */
      i = 0;
      for (; length > i; i++) {
        item = items[i];
        this.element.appendChild(item.element);
      }
      var filteredInsertItems = this._filter(items).matches;
      /** @type {number} */
      i = 0;
      for (; length > i; i++) {
        /** @type {boolean} */
        items[i].isLayoutInstant = true;
      }
      this.arrange();
      /** @type {number} */
      i = 0;
      for (; length > i; i++) {
        delete items[i].isLayoutInstant;
      }
      this.reveal(filteredInsertItems);
    }
  };
  /** @type {function(!Object): undefined} */
  var _remove = Isotope.prototype.remove;
  return Isotope.prototype.remove = function(elems) {
    elems = utils.makeArray(elems);
    var removeItems = this.getItems(elems);
    _remove.call(this, elems);
    var len = removeItems && removeItems.length;
    if (len) {
      /** @type {number} */
      var i = 0;
      for (; len > i; i++) {
        var item = removeItems[i];
        utils.removeFrom(this.filteredItems, item);
      }
    }
  }, Isotope.prototype.shuffle = function() {
    /** @type {number} */
    var buildingName = 0;
    var itemsLength = this.items.length;
    for (; itemsLength > buildingName; buildingName++) {
      var item = this.items[buildingName];
      /** @type {number} */
      item.sortData.random = Math.random();
    }
    /** @type {string} */
    this.options.sortBy = "random";
    this._sort();
    this._layout();
  }, Isotope.prototype._noTransition = function(fn) {
    var transitionDuration = this.options.transitionDuration;
    /** @type {number} */
    this.options.transitionDuration = 0;
    var timerNS = fn.call(this);
    return this.options.transitionDuration = transitionDuration, timerNS;
  }, Isotope.prototype.getFilteredItemElements = function() {
    /** @type {!Array} */
    var elems = [];
    /** @type {number} */
    var i = 0;
    var len = this.filteredItems.length;
    for (; len > i; i++) {
      elems.push(this.filteredItems[i].element);
    }
    return elems;
  }, Isotope;
});
!function($, window, document, undefined) {
  /**
   * @param {!Array} element
   * @param {!Object} options
   * @return {undefined}
   */
  function Owl(element, options) {
    /** @type {null} */
    this.settings = null;
    this.options = $.extend({}, Owl.Defaults, options);
    this.$element = $(element);
    this.drag = $.extend({}, data);
    this.state = $.extend({}, styles);
    this.e = $.extend({}, navCommonStyle);
    this._plugins = {};
    this._supress = {};
    /** @type {null} */
    this._current = null;
    /** @type {null} */
    this._speed = null;
    /** @type {!Array} */
    this._coordinates = [];
    /** @type {null} */
    this._breakpoint = null;
    /** @type {null} */
    this._width = null;
    /** @type {!Array} */
    this._items = [];
    /** @type {!Array} */
    this._clones = [];
    /** @type {!Array} */
    this._mergers = [];
    this._invalidated = {};
    /** @type {!Array} */
    this._pipe = [];
    $.each(Owl.Plugins, $.proxy(function(t, plugin) {
      this._plugins[t[0].toLowerCase() + t.slice(1)] = new plugin(this);
    }, this));
    $.each(Owl.Pipe, $.proxy(function(canCreateDiscussions, worker) {
      this._pipe.push({
        filter : worker.filter,
        run : $.proxy(worker.run, this)
      });
    }, this));
    this.setup();
    this.initialize();
  }
  /**
   * @param {!Object} event
   * @return {?}
   */
  function getMousePosition(event) {
    if (event.touches !== undefined) {
      return {
        x : event.touches[0].pageX,
        y : event.touches[0].pageY
      };
    }
    if (event.touches === undefined) {
      if (event.pageX !== undefined) {
        return {
          x : event.pageX,
          y : event.pageY
        };
      }
      if (event.pageX === undefined) {
        return {
          x : event.clientX,
          y : event.clientY
        };
      }
    }
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function testProps(value) {
    var hasname;
    var flowIntoProperty;
    /** @type {!Element} */
    var content = document.createElement("div");
    /** @type {!Array} */
    var sval = value;
    for (hasname in sval) {
      if (flowIntoProperty = sval[hasname], "undefined" != typeof content.style[flowIntoProperty]) {
        return content = null, [flowIntoProperty, hasname];
      }
    }
    return [false];
  }
  /**
   * @return {?}
   */
  function checkTransitionsSupport() {
    return testProps(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1];
  }
  /**
   * @return {?}
   */
  function getCSSTransform() {
    return testProps(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
  }
  /**
   * @return {?}
   */
  function test_3d() {
    return testProps(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0];
  }
  /**
   * @return {?}
   */
  function hasTouchSupport() {
    return "ontouchstart" in window || !!navigator.msMaxTouchPoints;
  }
  /**
   * @return {?}
   */
  function isMSPointer() {
    return window.navigator.msPointerEnabled;
  }
  var data;
  var styles;
  var navCommonStyle;
  data = {
    start : 0,
    startX : 0,
    startY : 0,
    current : 0,
    currentX : 0,
    currentY : 0,
    offsetX : 0,
    offsetY : 0,
    distance : null,
    startTime : 0,
    endTime : 0,
    updatedX : 0,
    targetEl : null
  };
  styles = {
    isTouch : false,
    isScrolling : false,
    isSwiping : false,
    direction : false,
    inMotion : false
  };
  navCommonStyle = {
    _onDragStart : null,
    _onDragMove : null,
    _onDragEnd : null,
    _transitionEnd : null,
    _resizer : null,
    _responsiveCall : null,
    _goToLoop : null,
    _checkVisibile : null
  };
  Owl.Defaults = {
    items : 3,
    loop : false,
    center : false,
    mouseDrag : true,
    touchDrag : true,
    pullDrag : true,
    freeDrag : false,
    margin : 0,
    stagePadding : 0,
    merge : false,
    mergeFit : true,
    autoWidth : false,
    startPosition : 0,
    rtl : false,
    smartSpeed : 250,
    fluidSpeed : false,
    dragEndSpeed : false,
    responsive : {},
    responsiveRefreshRate : 200,
    responsiveBaseElement : window,
    responsiveClass : false,
    fallbackEasing : "swing",
    info : false,
    nestedItemSelector : false,
    itemElement : "div",
    stageElement : "div",
    themeClass : "owl-theme",
    baseClass : "owl-carousel",
    itemClass : "owl-item",
    centerClass : "center",
    activeClass : "active"
  };
  Owl.Width = {
    Default : "default",
    Inner : "inner",
    Outer : "outer"
  };
  Owl.Plugins = {};
  /** @type {!Array} */
  Owl.Pipe = [{
    filter : ["width", "items", "settings"],
    run : function(data) {
      data.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter : ["items", "settings"],
    run : function() {
      var Ymatrix = this._clones;
      var Xmatrix = this.$stage.children(".cloned");
      if (Xmatrix.length !== Ymatrix.length || !this.settings.loop && Ymatrix.length > 0) {
        this.$stage.children(".cloned").remove();
        /** @type {!Array} */
        this._clones = [];
      }
    }
  }, {
    filter : ["items", "settings"],
    run : function() {
      var clientW;
      var right;
      var result = this._clones;
      var arr = this._items;
      /** @type {number} */
      var avgda = this.settings.loop ? result.length - Math.max(2 * this.settings.items, 4) : 0;
      /** @type {number} */
      clientW = 0;
      /** @type {number} */
      right = Math.abs(avgda / 2);
      for (; right > clientW; clientW++) {
        if (avgda > 0) {
          this.$stage.children().eq(arr.length + result.length - 1).remove();
          result.pop();
          this.$stage.children().eq(0).remove();
          result.pop();
        } else {
          result.push(result.length / 2);
          this.$stage.append(arr[result[result.length - 1]].clone().addClass("cloned"));
          result.push(arr.length - 1 - (result.length - 1) / 2);
          this.$stage.prepend(arr[result[result.length - 1]].clone().addClass("cloned"));
        }
      }
    }
  }, {
    filter : ["width", "items", "settings"],
    run : function() {
      var merge;
      var index;
      var length;
      /** @type {number} */
      var s = this.settings.rtl ? 1 : -1;
      /** @type {string} */
      var width = (this.width() / this.settings.items).toFixed(3);
      /** @type {number} */
      var totalWidth = 0;
      /** @type {!Array} */
      this._coordinates = [];
      /** @type {number} */
      index = 0;
      length = this._clones.length + this._items.length;
      for (; length > index; index++) {
        merge = this._mergers[this.relative(index)];
        merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
        /** @type {number} */
        totalWidth = totalWidth + (this.settings.autoWidth ? this._items[this.relative(index)].width() + this.settings.margin : width * merge) * s;
        this._coordinates.push(totalWidth);
      }
    }
  }, {
    filter : ["width", "items", "settings"],
    run : function() {
      var i;
      var n;
      /** @type {string} */
      var value = (this.width() / this.settings.items).toFixed(3);
      var css = {
        width : Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
        "padding-left" : this.settings.stagePadding || "",
        "padding-right" : this.settings.stagePadding || ""
      };
      if (this.$stage.css(css), css = {
        width : this.settings.autoWidth ? "auto" : value - this.settings.margin
      }, css[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && $.grep(this._mergers, function(canCreateDiscussions) {
        return canCreateDiscussions > 1;
      }).length > 0) {
        /** @type {number} */
        i = 0;
        n = this._coordinates.length;
        for (; n > i; i++) {
          /** @type {number} */
          css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
          this.$stage.children().eq(i).css(css);
        }
      } else {
        this.$stage.children().css(css);
      }
    }
  }, {
    filter : ["width", "items", "settings"],
    run : function(data) {
      if (data.current) {
        this.reset(this.$stage.children().index(data.current));
      }
    }
  }, {
    filter : ["position"],
    run : function() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter : ["width", "position", "items", "settings"],
    run : function() {
      var outer;
      var inner;
      var i;
      var n;
      /** @type {number} */
      var rtl = this.settings.rtl ? 1 : -1;
      /** @type {number} */
      var padding = 2 * this.settings.stagePadding;
      var begin = this.coordinates(this.current()) + padding;
      var end = begin + this.width() * rtl;
      /** @type {!Array} */
      var h = [];
      /** @type {number} */
      i = 0;
      n = this._coordinates.length;
      for (; n > i; i++) {
        outer = this._coordinates[i - 1] || 0;
        /** @type {number} */
        inner = Math.abs(this._coordinates[i]) + padding * rtl;
        if (this.op(outer, "<=", begin) && this.op(outer, ">", end) || this.op(inner, "<", begin) && this.op(inner, ">", end)) {
          h.push(i);
        }
      }
      this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass);
      this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass);
      if (this.settings.center) {
        this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass);
        this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
      }
    }
  }];
  /**
   * @return {?}
   */
  Owl.prototype.initialize = function() {
    if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== true) {
      var imgs;
      var name;
      var maxAge;
      if (imgs = this.$element.find("img"), name = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : undefined, maxAge = this.$element.children(name).width(), imgs.length && 0 >= maxAge) {
        return this.preloadAutoWidthImages(imgs), false;
      }
    }
    this.$element.addClass("owl-loading");
    this.$stage = $("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">');
    this.$element.append(this.$stage.parent());
    this.replace(this.$element.children().not(this.$stage.parent()));
    this._width = this.$element.width();
    this.refresh();
    this.$element.removeClass("owl-loading").addClass("owl-loaded");
    this.eventsCall();
    this.internalEvents();
    this.addTriggerableEvents();
    this.trigger("initialized");
  };
  /**
   * @return {undefined}
   */
  Owl.prototype.setup = function() {
    var trackPos = this.viewport();
    var options = this.options.responsive;
    /** @type {number} */
    var to = -1;
    /** @type {null} */
    var settings = null;
    if (options) {
      $.each(options, function(from) {
        if (trackPos >= from && from > to) {
          /** @type {number} */
          to = Number(from);
        }
      });
      settings = $.extend({}, this.options, options[to]);
      delete settings.responsive;
      if (settings.responsiveClass) {
        this.$element.attr("class", function(canCreateDiscussions, aShortcut) {
          return aShortcut.replace(/\b owl-responsive-\S+/g, "");
        }).addClass("owl-responsive-" + to);
      }
    } else {
      settings = $.extend({}, this.options);
    }
    if (null === this.settings || this._breakpoint !== to) {
      this.trigger("change", {
        property : {
          name : "settings",
          value : settings
        }
      });
      this._breakpoint = to;
      /** @type {null} */
      this.settings = settings;
      this.invalidate("settings");
      this.trigger("changed", {
        property : {
          name : "settings",
          value : this.settings
        }
      });
    }
  };
  /**
   * @return {undefined}
   */
  Owl.prototype.optionsLogic = function() {
    this.$element.toggleClass("owl-center", this.settings.center);
    if (this.settings.loop && this._items.length < this.settings.items) {
      /** @type {boolean} */
      this.settings.loop = false;
    }
    if (this.settings.autoWidth) {
      /** @type {boolean} */
      this.settings.stagePadding = false;
      /** @type {boolean} */
      this.settings.merge = false;
    }
  };
  /**
   * @param {string} data
   * @return {?}
   */
  Owl.prototype.prepare = function(data) {
    var event = this.trigger("prepare", {
      content : data
    });
    return event.data || (event.data = $("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(data)), this.trigger("prepared", {
      content : event.data
    }), event.data;
  };
  /**
   * @return {undefined}
   */
  Owl.prototype.update = function() {
    /** @type {number} */
    var i = 0;
    var n = this._pipe.length;
    var filter = $.proxy(function(ballNumber) {
      return this[ballNumber];
    }, this._invalidated);
    var percent = {};
    for (; n > i;) {
      if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
        this._pipe[i].run(percent);
      }
      i++;
    }
    this._invalidated = {};
  };
  /**
   * @param {!Object} type
   * @return {?}
   */
  Owl.prototype.width = function(type) {
    switch(type = type || Owl.Width.Default) {
      case Owl.Width.Inner:
      case Owl.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  };
  /**
   * @return {?}
   */
  Owl.prototype.refresh = function() {
    return 0 !== this._items.length && ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = window.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0);
  };
  /**
   * @return {undefined}
   */
  Owl.prototype.eventsCall = function() {
    this.e._onDragStart = $.proxy(function(event) {
      this.onDragStart(event);
    }, this);
    this.e._onDragMove = $.proxy(function(event) {
      this.onDragMove(event);
    }, this);
    this.e._onDragEnd = $.proxy(function(e) {
      this.onDragEnd(e);
    }, this);
    this.e._onResize = $.proxy(function(event) {
      this.onResize(event);
    }, this);
    this.e._transitionEnd = $.proxy(function(event) {
      this.transitionEnd(event);
    }, this);
    this.e._preventClick = $.proxy(function(alreadyFailedWithException) {
      this.preventClick(alreadyFailedWithException);
    }, this);
  };
  /**
   * @return {undefined}
   */
  Owl.prototype.onThrottledResize = function() {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
  };
  /**
   * @return {?}
   */
  Owl.prototype.onResize = function() {
    return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))));
  };
  /**
   * @param {!KeyboardEvent} evt
   * @return {undefined}
   */
  Owl.prototype.eventsRouter = function(evt) {
    var a = evt.type;
    if ("mousedown" === a || "touchstart" === a) {
      this.onDragStart(evt);
    } else {
      if ("mousemove" === a || "touchmove" === a) {
        this.onDragMove(evt);
      } else {
        if ("mouseup" === a || "touchend" === a) {
          this.onDragEnd(evt);
        } else {
          if ("touchcancel" === a) {
            this.onDragEnd(evt);
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  Owl.prototype.internalEvents = function() {
    var no_emoji = (hasTouchSupport(), isMSPointer());
    if (this.settings.mouseDrag) {
      this.$stage.on("mousedown", $.proxy(function(teleEvent) {
        this.eventsRouter(teleEvent);
      }, this));
      this.$stage.on("dragstart", function() {
        return false;
      });
      /**
       * @return {?}
       */
      this.$stage.get(0).onselectstart = function() {
        return false;
      };
    } else {
      this.$element.addClass("owl-text-select-on");
    }
    if (this.settings.touchDrag && !no_emoji) {
      this.$stage.on("touchstart touchcancel", $.proxy(function(teleEvent) {
        this.eventsRouter(teleEvent);
      }, this));
    }
    if (this.transitionEndVendor) {
      this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
    }
    if (this.settings.responsive !== false) {
      this.on(window, "resize", $.proxy(this.onThrottledResize, this));
    }
  };
  /**
   * @param {!KeyboardEvent} event
   * @return {?}
   */
  Owl.prototype.onDragStart = function(event) {
    var e;
    var x;
    var y1;
    var name;
    if (e = event.originalEvent || event || window.event, 3 === e.which || this.state.isTouch) {
      return false;
    }
    if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = true, this.state.isScrolling = false, this.state.isSwiping = false, this.drag.distance = 0, x = getMousePosition(e).x, y1 = getMousePosition(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - 
    this.width() + this.settings.margin), this.state.inMotion && this.support3d) {
      name = this.getTransformProperty();
      this.drag.offsetX = name;
      this.animate(name);
      /** @type {boolean} */
      this.state.inMotion = true;
    } else {
      if (this.state.inMotion && !this.support3d) {
        return this.state.inMotion = false, false;
      }
    }
    /** @type {number} */
    this.drag.startX = x - this.drag.offsetX;
    /** @type {number} */
    this.drag.startY = y1 - this.drag.offsetY;
    /** @type {number} */
    this.drag.start = x - this.drag.startX;
    this.drag.targetEl = e.target || e.srcElement;
    /** @type {number} */
    this.drag.updatedX = this.drag.start;
    if ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) {
      /** @type {boolean} */
      this.drag.targetEl.draggable = false;
    }
    $(document).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", $.proxy(function(teleEvent) {
      this.eventsRouter(teleEvent);
    }, this));
  };
  /**
   * @param {!KeyboardEvent} event
   * @return {undefined}
   */
  Owl.prototype.onDragMove = function(event) {
    var e;
    var newPosX;
    var newPosY;
    var minimum;
    var maximum;
    var pull;
    if (this.state.isTouch) {
      if (!this.state.isScrolling) {
        e = event.originalEvent || event || window.event;
        newPosX = getMousePosition(e).x;
        newPosY = getMousePosition(e).y;
        /** @type {number} */
        this.drag.currentX = newPosX - this.drag.startX;
        /** @type {number} */
        this.drag.currentY = newPosY - this.drag.startY;
        /** @type {number} */
        this.drag.distance = this.drag.currentX - this.drag.offsetX;
        if (this.drag.distance < 0) {
          /** @type {string} */
          this.state.direction = this.settings.rtl ? "right" : "left";
        } else {
          if (this.drag.distance > 0) {
            /** @type {string} */
            this.state.direction = this.settings.rtl ? "left" : "right";
          }
        }
        if (this.settings.loop) {
          if (this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction) {
            this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
          } else {
            if (this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction) {
              this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            }
          }
        } else {
          minimum = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum());
          maximum = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum());
          /** @type {number} */
          pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
          /** @type {number} */
          this.drag.currentX = Math.max(Math.min(this.drag.currentX, minimum + pull), maximum + pull);
        }
        if (this.drag.distance > 8 || this.drag.distance < -8) {
          if (e.preventDefault !== undefined) {
            e.preventDefault();
          } else {
            /** @type {boolean} */
            e.returnValue = false;
          }
          /** @type {boolean} */
          this.state.isSwiping = true;
        }
        /** @type {number} */
        this.drag.updatedX = this.drag.currentX;
        if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
          /** @type {boolean} */
          this.state.isScrolling = true;
          this.drag.updatedX = this.drag.start;
        }
        this.animate(this.drag.updatedX);
      }
    }
  };
  /**
   * @param {!KeyboardEvent} e
   * @return {?}
   */
  Owl.prototype.onDragEnd = function(e) {
    var h;
    var w;
    var index;
    if (this.state.isTouch) {
      if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = false, this.state.isScrolling = false, this.state.isSwiping = false, 0 === this.drag.distance && this.state.inMotion !== true) {
        return this.state.inMotion = false, false;
      }
      /** @type {number} */
      this.drag.endTime = (new Date).getTime();
      /** @type {number} */
      h = this.drag.endTime - this.drag.startTime;
      /** @type {number} */
      w = Math.abs(this.drag.distance);
      if (w > 3 || h > 300) {
        this.removeClick(this.drag.targetEl);
      }
      index = this.closest(this.drag.updatedX);
      this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
      this.current(index);
      this.invalidate("position");
      this.update();
      if (!(this.settings.pullDrag || this.drag.updatedX !== this.coordinates(index))) {
        this.transitionEnd();
      }
      /** @type {number} */
      this.drag.distance = 0;
      $(document).off(".owl.dragEvents");
    }
  };
  /**
   * @param {?} e
   * @return {undefined}
   */
  Owl.prototype.removeClick = function(e) {
    this.drag.targetEl = e;
    $(e).on("click.preventClick", this.e._preventClick);
    window.setTimeout(function() {
      $(e).off("click.preventClick");
    }, 300);
  };
  /**
   * @param {!Event} e
   * @return {undefined}
   */
  Owl.prototype.preventClick = function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      /** @type {boolean} */
      e.returnValue = false;
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    $(e.target).off("click.preventClick");
  };
  /**
   * @return {?}
   */
  Owl.prototype.getTransformProperty = function() {
    var format;
    var val;
    return format = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), format = format.replace(/matrix(3d)?\(|\)/g, "").split(","), val = 16 === format.length, val !== true ? format[4] : format[12];
  };
  /**
   * @param {string} coordinate
   * @return {?}
   */
  Owl.prototype.closest = function(coordinate) {
    /** @type {number} */
    var position = -1;
    /** @type {number} */
    var pull = 30;
    var width = this.width();
    var coordinates = this.coordinates();
    return this.settings.freeDrag || $.each(coordinates, $.proxy(function(index, value) {
      return coordinate > value - pull && value + pull > coordinate ? position = index : this.op(coordinate, "<", value) && this.op(coordinate, ">", coordinates[index + 1] || value - width) && (position = "left" === this.state.direction ? index + 1 : index), -1 === position;
    }, this)), this.settings.loop || (this.op(coordinate, ">", coordinates[this.minimum()]) ? position = coordinate = this.minimum() : this.op(coordinate, "<", coordinates[this.maximum()]) && (position = coordinate = this.maximum())), position;
  };
  /**
   * @param {string} type
   * @return {undefined}
   */
  Owl.prototype.animate = function(type) {
    this.trigger("translate");
    /** @type {boolean} */
    this.state.inMotion = this.speed() > 0;
    if (this.support3d) {
      this.$stage.css({
        transform : "translate3d(" + type + "px,0px, 0px)",
        transition : this.speed() / 1E3 + "s"
      });
    } else {
      if (this.state.isTouch) {
        this.$stage.css({
          left : type + "px"
        });
      } else {
        this.$stage.animate({
          left : type
        }, this.speed() / 1E3, this.settings.fallbackEasing, $.proxy(function() {
          if (this.state.inMotion) {
            this.transitionEnd();
          }
        }, this));
      }
    }
  };
  /**
   * @param {!Object} position
   * @return {?}
   */
  Owl.prototype.current = function(position) {
    if (position === undefined) {
      return this._current;
    }
    if (0 === this._items.length) {
      return undefined;
    }
    if (position = this.normalize(position), this._current !== position) {
      var event = this.trigger("change", {
        property : {
          name : "position",
          value : position
        }
      });
      if (event.data !== undefined) {
        position = this.normalize(event.data);
      }
      /** @type {!Object} */
      this._current = position;
      this.invalidate("position");
      this.trigger("changed", {
        property : {
          name : "position",
          value : this._current
        }
      });
    }
    return this._current;
  };
  /**
   * @param {string} part
   * @return {undefined}
   */
  Owl.prototype.invalidate = function(part) {
    /** @type {boolean} */
    this._invalidated[part] = true;
  };
  /**
   * @param {string} position
   * @return {undefined}
   */
  Owl.prototype.reset = function(position) {
    position = this.normalize(position);
    if (position !== undefined) {
      /** @type {number} */
      this._speed = 0;
      /** @type {string} */
      this._current = position;
      this.suppress(["translate", "translated"]);
      this.animate(this.coordinates(position));
      this.release(["translate", "translated"]);
    }
  };
  /**
   * @param {!Object} value
   * @param {string} a
   * @return {?}
   */
  Owl.prototype.normalize = function(value, a) {
    var b = a ? this._items.length : this._items.length + this._clones.length;
    return !$.isNumeric(value) || 1 > b ? undefined : value = this._clones.length ? (value % b + b) % b : Math.max(this.minimum(a), Math.min(this.maximum(a), value));
  };
  /**
   * @param {number} position
   * @return {?}
   */
  Owl.prototype.relative = function(position) {
    return position = this.normalize(position), position = position - this._clones.length / 2, this.normalize(position, true);
  };
  /**
   * @param {string} callback
   * @return {?}
   */
  Owl.prototype.maximum = function(callback) {
    var fractionStart;
    var IO_OBSERVER_TIMEOUT;
    var i;
    /** @type {number} */
    var index = 0;
    var settings = this.settings;
    if (callback) {
      return this._items.length - 1;
    }
    if (!settings.loop && settings.center) {
      /** @type {number} */
      fractionStart = this._items.length - 1;
    } else {
      if (settings.loop || settings.center) {
        if (settings.loop || settings.center) {
          fractionStart = this._items.length + settings.items;
        } else {
          if (!settings.autoWidth && !settings.merge) {
            throw "Can not detect maximum absolute position.";
          }
          /** @type {number} */
          revert = settings.rtl ? 1 : -1;
          /** @type {number} */
          IO_OBSERVER_TIMEOUT = this.$stage.width() - this.$element.width();
          for (; (i = this.coordinates(index)) && !(i * revert >= IO_OBSERVER_TIMEOUT);) {
            /** @type {number} */
            fractionStart = ++index;
          }
        }
      } else {
        /** @type {number} */
        fractionStart = this._items.length - settings.items;
      }
    }
    return fractionStart;
  };
  /**
   * @param {string} callback
   * @return {?}
   */
  Owl.prototype.minimum = function(callback) {
    return callback ? 0 : this._clones.length / 2;
  };
  /**
   * @param {!Object} type
   * @return {?}
   */
  Owl.prototype.items = function(type) {
    return type === undefined ? this._items.slice() : (type = this.normalize(type, true), this._items[type]);
  };
  /**
   * @param {!Object} position
   * @return {?}
   */
  Owl.prototype.mergers = function(position) {
    return position === undefined ? this._mergers.slice() : (position = this.normalize(position, true), this._mergers[position]);
  };
  /**
   * @param {?} position
   * @return {?}
   */
  Owl.prototype.clones = function(position) {
    /** @type {number} */
    var odd = this._clones.length / 2;
    var even = odd + this._items.length;
    /**
     * @param {number} index
     * @return {?}
     */
    var map = function(index) {
      return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
    };
    return position === undefined ? $.map(this._clones, function(canCreateDiscussions, assertorDescriptions) {
      return map(assertorDescriptions);
    }) : $.map(this._clones, function(v, i) {
      return v === position ? map(i) : null;
    });
  };
  /**
   * @param {number} value
   * @return {?}
   */
  Owl.prototype.speed = function(value) {
    return value !== undefined && (this._speed = value), this._speed;
  };
  /**
   * @param {number} position
   * @return {?}
   */
  Owl.prototype.coordinates = function(position) {
    /** @type {null} */
    var coordinate = null;
    return position === undefined ? $.map(this._coordinates, $.proxy(function(canCreateDiscussions, position) {
      return this.coordinates(position);
    }, this)) : (this.settings.center ? (coordinate = this._coordinates[position], coordinate = coordinate + (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : coordinate = this._coordinates[position - 1] || 0, coordinate);
  };
  /**
   * @param {!Object} type
   * @param {!Object} a
   * @param {number} value
   * @return {?}
   */
  Owl.prototype.duration = function(type, a, value) {
    return Math.min(Math.max(Math.abs(a - type), 1), 6) * Math.abs(value || this.settings.smartSpeed);
  };
  /**
   * @param {?} position
   * @param {string} speed
   * @return {undefined}
   */
  Owl.prototype.to = function(position, speed) {
    if (this.settings.loop) {
      /** @type {number} */
      var offset = position - this.relative(this.current());
      var current = this.current();
      var total = this.current();
      var i = this.current() + offset;
      /** @type {boolean} */
      var valueFound = 0 > total - i;
      var value = this._clones.length + this._items.length;
      if (i < this.settings.items && valueFound === false) {
        current = total + this._items.length;
        this.reset(current);
      } else {
        if (i >= value - this.settings.items && valueFound === true) {
          /** @type {number} */
          current = total - this._items.length;
          this.reset(current);
        }
      }
      window.clearTimeout(this.e._goToLoop);
      this.e._goToLoop = window.setTimeout($.proxy(function() {
        this.speed(this.duration(this.current(), current + offset, speed));
        this.current(current + offset);
        this.update();
      }, this), 30);
    } else {
      this.speed(this.duration(this.current(), position, speed));
      this.current(position);
      this.update();
    }
  };
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  Owl.prototype.next = function(type) {
    type = type || false;
    this.to(this.relative(this.current()) + 1, type);
  };
  /**
   * @param {string} speed
   * @return {undefined}
   */
  Owl.prototype.prev = function(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  };
  /**
   * @param {!Event} event
   * @return {?}
   */
  Owl.prototype.transitionEnd = function(event) {
    return (event === undefined || (event.stopPropagation(), (event.target || event.srcElement || event.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = false, void this.trigger("translated"));
  };
  /**
   * @return {?}
   */
  Owl.prototype.viewport = function() {
    var width;
    if (this.options.responsiveBaseElement !== window) {
      width = $(this.options.responsiveBaseElement).width();
    } else {
      if (window.innerWidth) {
        width = window.innerWidth;
      } else {
        if (!document.documentElement || !document.documentElement.clientWidth) {
          throw "Can not detect viewport width.";
        }
        /** @type {number} */
        width = document.documentElement.clientWidth;
      }
    }
    return width;
  };
  /**
   * @param {!Object} pattern
   * @return {undefined}
   */
  Owl.prototype.replace = function(pattern) {
    this.$stage.empty();
    /** @type {!Array} */
    this._items = [];
    if (pattern) {
      pattern = pattern instanceof jQuery ? pattern : $(pattern);
    }
    if (this.settings.nestedItemSelector) {
      pattern = pattern.find("." + this.settings.nestedItemSelector);
    }
    pattern.filter(function() {
      return 1 === this.nodeType;
    }).each($.proxy(function(canCreateDiscussions, item) {
      item = this.prepare(item);
      this.$stage.append(item);
      this._items.push(item);
      this._mergers.push(1 * item.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1);
    }, this));
    this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
    this.invalidate("items");
  };
  /**
   * @param {!Object} name
   * @param {!Object} key
   * @return {undefined}
   */
  Owl.prototype.add = function(name, key) {
    key = key === undefined ? this._items.length : this.normalize(key, true);
    this.trigger("add", {
      content : name,
      position : key
    });
    if (0 === this._items.length || key === this._items.length) {
      this.$stage.append(name);
      this._items.push(name);
      this._mergers.push(1 * name.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1);
    } else {
      this._items[key].before(name);
      this._items.splice(key, 0, name);
      this._mergers.splice(key, 0, 1 * name.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1);
    }
    this.invalidate("items");
    this.trigger("added", {
      content : name,
      position : key
    });
  };
  /**
   * @param {!Object} key
   * @return {undefined}
   */
  Owl.prototype.remove = function(key) {
    key = this.normalize(key, true);
    if (key !== undefined) {
      this.trigger("remove", {
        content : this._items[key],
        position : key
      });
      this._items[key].remove();
      this._items.splice(key, 1);
      this._mergers.splice(key, 1);
      this.invalidate("items");
      this.trigger("removed", {
        content : null,
        position : key
      });
    }
  };
  /**
   * @return {undefined}
   */
  Owl.prototype.addTriggerableEvents = function() {
    var debug = $.proxy(function(KPIComponentCore, event) {
      return $.proxy(function(event) {
        if (event.relatedTarget !== this) {
          this.suppress([event]);
          KPIComponentCore.apply(this, [].slice.call(arguments, 1));
          this.release([event]);
        }
      }, this);
    }, this);
    $.each({
      next : this.next,
      prev : this.prev,
      to : this.to,
      destroy : this.destroy,
      refresh : this.refresh,
      replace : this.replace,
      add : this.add,
      remove : this.remove
    }, $.proxy(function(prefix, complete) {
      this.$element.on(prefix + ".owl.carousel", debug(complete, prefix + ".owl.carousel"));
    }, this));
  };
  /**
   * @return {undefined}
   */
  Owl.prototype.watchVisibility = function() {
    /**
     * @param {!HTMLElement} t
     * @return {?}
     */
    function expandThumbnail(t) {
      return t.offsetWidth > 0 && t.offsetHeight > 0;
    }
    /**
     * @return {undefined}
     */
    function fn() {
      if (expandThumbnail(this.$element.get(0))) {
        this.$element.removeClass("owl-hidden");
        this.refresh();
        window.clearInterval(this.e._checkVisibile);
      }
    }
    if (!expandThumbnail(this.$element.get(0))) {
      this.$element.addClass("owl-hidden");
      window.clearInterval(this.e._checkVisibile);
      this.e._checkVisibile = window.setInterval($.proxy(fn, this), 500);
    }
  };
  /**
   * @param {!Object} images
   * @return {undefined}
   */
  Owl.prototype.preloadAutoWidthImages = function(images) {
    var loadedCounter;
    var self;
    var element;
    var image;
    /** @type {number} */
    loadedCounter = 0;
    self = this;
    images.each(function(canCreateDiscussions, selectorOrEl) {
      element = $(selectorOrEl);
      /** @type {!Image} */
      image = new Image;
      /**
       * @return {undefined}
       */
      image.onload = function() {
        loadedCounter++;
        element.attr("src", image.src);
        element.css("opacity", 1);
        if (loadedCounter >= images.length) {
          /** @type {boolean} */
          self.state.imagesLoaded = true;
          self.initialize();
        }
      };
      image.src = element.attr("src") || element.attr("data-src") || element.attr("data-src-retina");
    });
  };
  /**
   * @return {undefined}
   */
  Owl.prototype.destroy = function() {
    if (this.$element.hasClass(this.settings.themeClass)) {
      this.$element.removeClass(this.settings.themeClass);
    }
    if (this.settings.responsive !== false) {
      $(window).off("resize.owl.carousel");
    }
    if (this.transitionEndVendor) {
      this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
    }
    var i;
    for (i in this._plugins) {
      this._plugins[i].destroy();
    }
    if (this.settings.mouseDrag || this.settings.touchDrag) {
      this.$stage.off("mousedown touchstart touchcancel");
      $(document).off(".owl.dragEvents");
      /**
       * @return {undefined}
       */
      this.$stage.get(0).onselectstart = function() {
      };
      this.$stage.off("dragstart", function() {
        return false;
      });
    }
    this.$element.off(".owl");
    this.$stage.children(".cloned").remove();
    /** @type {null} */
    this.e = null;
    this.$element.removeData("owlCarousel");
    this.$stage.children().contents().unwrap();
    this.$stage.children().unwrap();
    this.$stage.unwrap();
  };
  /**
   * @param {?} b
   * @param {string} op
   * @param {?} a
   * @return {?}
   */
  Owl.prototype.op = function(b, op, a) {
    var rtl = this.settings.rtl;
    switch(op) {
      case "<":
        return rtl ? b > a : a > b;
      case ">":
        return rtl ? a > b : b > a;
      case ">=":
        return rtl ? a >= b : b >= a;
      case "<=":
        return rtl ? b >= a : a >= b;
    }
  };
  /**
   * @param {!Object} element
   * @param {string} key
   * @param {!Function} fn
   * @param {string} callback
   * @return {undefined}
   */
  Owl.prototype.on = function(element, key, fn, callback) {
    if (element.addEventListener) {
      element.addEventListener(key, fn, callback);
    } else {
      if (element.attachEvent) {
        element.attachEvent("on" + key, fn);
      }
    }
  };
  /**
   * @param {!Object} element
   * @param {string} type
   * @param {string} fn
   * @param {?} useCapture
   * @return {undefined}
   */
  Owl.prototype.off = function(element, type, fn, useCapture) {
    if (element.removeEventListener) {
      element.removeEventListener(type, fn, useCapture);
    } else {
      if (element.detachEvent) {
        element.detachEvent("on" + type, fn);
      }
    }
  };
  /**
   * @param {!Object} name
   * @param {!Object} options
   * @param {string} value
   * @return {?}
   */
  Owl.prototype.trigger = function(name, options, value) {
    var status = {
      item : {
        count : this._items.length,
        index : this.current()
      }
    };
    var handlerName = $.camelCase($.grep(["on", name, value], function(match) {
      return match;
    }).join("-").toLowerCase());
    var event = $.Event([name, "owl", value || "carousel"].join(".").toLowerCase(), $.extend({
      relatedTarget : this
    }, status, options));
    return this._supress[name] || ($.each(this._plugins, function(canCreateDiscussions, options) {
      if (options.onTrigger) {
        options.onTrigger(event);
      }
    }), this.$element.trigger(event), this.settings && "function" == typeof this.settings[handlerName] && this.settings[handlerName].apply(this, event)), event;
  };
  /**
   * @param {?} v
   * @return {undefined}
   */
  Owl.prototype.suppress = function(v) {
    $.each(v, $.proxy(function(canCreateDiscussions, name) {
      /** @type {boolean} */
      this._supress[name] = true;
    }, this));
  };
  /**
   * @param {?} e
   * @return {undefined}
   */
  Owl.prototype.release = function(e) {
    $.each(e, $.proxy(function(canCreateDiscussions, name) {
      delete this._supress[name];
    }, this));
  };
  /**
   * @return {undefined}
   */
  Owl.prototype.browserSupport = function() {
    if (this.support3d = test_3d(), this.support3d) {
      this.transformVendor = getCSSTransform();
      /** @type {!Array} */
      var watch = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
      this.transitionEndVendor = watch[checkTransitionsSupport()];
      this.vendorName = this.transformVendor.replace(/Transform/i, "");
      /** @type {string} */
      this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "";
    }
    /** @type {number} */
    this.state.orientation = window.orientation;
  };
  /**
   * @param {boolean} options
   * @return {?}
   */
  $.fn.owlCarousel = function(options) {
    return this.each(function() {
      if (!$(this).data("owlCarousel")) {
        $(this).data("owlCarousel", new Owl(this, options));
      }
    });
  };
  /** @type {function(!Array, !Object): undefined} */
  $.fn.owlCarousel.Constructor = Owl;
}(window.Zepto || window.jQuery, window, document), function($, windowRef) {
  /**
   * @param {!Object} carousel
   * @return {undefined}
   */
  var Lazy = function(carousel) {
    /** @type {!Object} */
    this._core = carousel;
    /** @type {!Array} */
    this._loaded = [];
    this._handlers = {
      "initialized.owl.carousel change.owl.carousel" : $.proxy(function(data) {
        if (data.namespace && this._core.settings && this._core.settings.lazyLoad && (data.property && "position" == data.property.name || "initialized" == data.type)) {
          var settings = this._core.settings;
          var wordCount = settings.center && Math.ceil(settings.items / 2) || settings.items;
          var offset = settings.center && -1 * wordCount || 0;
          var position = (data.property && data.property.value || this._core.current()) + offset;
          var clones = this._core.clones().length;
          var field = $.proxy(function(canCreateDiscussions, presets) {
            this.load(presets);
          }, this);
          for (; offset++ < wordCount;) {
            this.load(clones / 2 + this._core.relative(position));
            if (clones) {
              $.each(this._core.clones(this._core.relative(position++)), field);
            }
          }
        }
      }, this)
    };
    this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
  };
  Lazy.Defaults = {
    lazyLoad : false
  };
  /**
   * @param {!Array} hash
   * @return {undefined}
   */
  Lazy.prototype.load = function(hash) {
    var service = this._core.$stage.children().eq(hash);
    var methods = service && service.find(".owl-lazy");
    if (!(!methods || $.inArray(service.get(0), this._loaded) > -1)) {
      methods.each($.proxy(function(i, s) {
        var m_srcImage;
        var element = $(s);
        var src = windowRef.devicePixelRatio > 1 && element.attr("data-src-retina") || element.attr("data-src");
        this._core.trigger("load", {
          element : element,
          url : src
        }, "lazy");
        if (element.is("img")) {
          element.one("load.owl.lazy", $.proxy(function() {
            element.css("opacity", 1);
            this._core.trigger("loaded", {
              element : element,
              url : src
            }, "lazy");
          }, this)).attr("src", src);
        } else {
          /** @type {!Image} */
          m_srcImage = new Image;
          m_srcImage.onload = $.proxy(function() {
            element.css({
              "background-image" : "url(" + src + ")",
              opacity : "1"
            });
            this._core.trigger("loaded", {
              element : element,
              url : src
            }, "lazy");
          }, this);
          m_srcImage.src = src;
        }
      }, this));
      this._loaded.push(service.get(0));
    }
  };
  /**
   * @return {undefined}
   */
  Lazy.prototype.destroy = function() {
    var key;
    var indexLookupKey;
    for (key in this.handlers) {
      this._core.$element.off(key, this.handlers[key]);
    }
    for (indexLookupKey in Object.getOwnPropertyNames(this)) {
      if ("function" != typeof this[indexLookupKey]) {
        /** @type {null} */
        this[indexLookupKey] = null;
      }
    }
  };
  /** @type {function(!Object): undefined} */
  $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
}(window.Zepto || window.jQuery, window, document), function($) {
  /**
   * @param {!Object} carousel
   * @return {undefined}
   */
  var AutoHeight = function(carousel) {
    /** @type {!Object} */
    this._core = carousel;
    this._handlers = {
      "initialized.owl.carousel" : $.proxy(function() {
        if (this._core.settings.autoHeight) {
          this.update();
        }
      }, this),
      "changed.owl.carousel" : $.proxy(function(treeElement) {
        if (this._core.settings.autoHeight && "position" == treeElement.property.name) {
          this.update();
        }
      }, this),
      "loaded.owl.lazy" : $.proxy(function(data) {
        if (this._core.settings.autoHeight && data.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current())) {
          this.update();
        }
      }, this)
    };
    this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
  };
  AutoHeight.Defaults = {
    autoHeight : false,
    autoHeightClass : "owl-height"
  };
  /**
   * @return {undefined}
   */
  AutoHeight.prototype.update = function() {
    this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass);
  };
  /**
   * @return {undefined}
   */
  AutoHeight.prototype.destroy = function() {
    var key;
    var indexLookupKey;
    for (key in this._handlers) {
      this._core.$element.off(key, this._handlers[key]);
    }
    for (indexLookupKey in Object.getOwnPropertyNames(this)) {
      if ("function" != typeof this[indexLookupKey]) {
        /** @type {null} */
        this[indexLookupKey] = null;
      }
    }
  };
  /** @type {function(!Object): undefined} */
  $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
}(window.Zepto || window.jQuery, window, document), function($, options, document) {
  /**
   * @param {!Object} carousel
   * @return {undefined}
   */
  var Video = function(carousel) {
    /** @type {!Object} */
    this._core = carousel;
    this._videos = {};
    /** @type {null} */
    this._playing = null;
    /** @type {boolean} */
    this._fullscreen = false;
    this._handlers = {
      "resize.owl.carousel" : $.proxy(function(event) {
        if (this._core.settings.video && !this.isInFullScreen()) {
          event.preventDefault();
        }
      }, this),
      "refresh.owl.carousel changed.owl.carousel" : $.proxy(function() {
        if (this._playing) {
          this.stop();
        }
      }, this),
      "prepared.owl.carousel" : $.proxy(function(e) {
        var code = $(e.content).find(".owl-video");
        if (code.length) {
          code.css("display", "none");
          this.fetch(code, $(e.content));
        }
      }, this)
    };
    this._core.options = $.extend({}, Video.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
    this._core.$element.on("click.owl.video", ".owl-video-play-icon", $.proxy(function(name) {
      this.play(name);
    }, this));
  };
  Video.Defaults = {
    video : false,
    videoHeight : false,
    videoWidth : false
  };
  /**
   * @param {!Object} type
   * @param {!Object} obj
   * @return {undefined}
   */
  Video.prototype.fetch = function(type, obj) {
    /** @type {string} */
    var provider = type.attr("data-vimeo-id") ? "vimeo" : "youtube";
    var c = type.attr("data-vimeo-id") || type.attr("data-youtube-id");
    var neededWidth = type.attr("data-width") || this._core.settings.videoWidth;
    var dxdydust = type.attr("data-height") || this._core.settings.videoHeight;
    var url = type.attr("href");
    if (!url) {
      throw new Error("Missing video URL.");
    }
    if (c = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/), c[3].indexOf("youtu") > -1) {
      /** @type {string} */
      provider = "youtube";
    } else {
      if (!(c[3].indexOf("vimeo") > -1)) {
        throw new Error("Video URL not supported.");
      }
      /** @type {string} */
      provider = "vimeo";
    }
    c = c[6];
    this._videos[url] = {
      type : provider,
      id : c,
      width : neededWidth,
      height : dxdydust
    };
    obj.attr("data-video", url);
    this.thumbnail(type, this._videos[url]);
  };
  /**
   * @param {!Object} target
   * @param {!Object} video
   * @return {?}
   */
  Video.prototype.thumbnail = function(target, video) {
    var keditorWrapper;
    var n;
    var path;
    /** @type {string} */
    var opt_by = video.width && video.height ? 'style="width:' + video.width + "px;height:" + video.height + 'px;"' : "";
    var $img = target.find("img");
    /** @type {string} */
    var srcAttr = "src";
    /** @type {string} */
    var lazyClass = "";
    var settings = this._core.settings;
    /**
     * @param {string} elementName
     * @return {undefined}
     */
    var create = function(elementName) {
      /** @type {string} */
      n = '<div class="owl-video-play-icon"></div>';
      /** @type {string} */
      keditorWrapper = settings.lazyLoad ? '<div class="owl-video-tn ' + lazyClass + '" ' + srcAttr + '="' + elementName + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + elementName + ')"></div>';
      target.after(keditorWrapper);
      target.after(n);
    };
    return target.wrap('<div class="owl-video-wrapper"' + opt_by + "></div>"), this._core.settings.lazyLoad && (srcAttr = "data-src", lazyClass = "owl-lazy"), $img.length ? (create($img.attr(srcAttr)), $img.remove(), false) : void("youtube" === video.type ? (path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg", create(path)) : "vimeo" === video.type && $.ajax({
      type : "GET",
      url : "http://vimeo.com/api/v2/video/" + video.id + ".json",
      jsonp : "callback",
      dataType : "jsonp",
      success : function(type) {
        path = type[0].thumbnail_large;
        create(path);
      }
    }));
  };
  /**
   * @return {undefined}
   */
  Video.prototype.stop = function() {
    this._core.trigger("stop", null, "video");
    this._playing.find(".owl-video-frame").remove();
    this._playing.removeClass("owl-video-playing");
    /** @type {null} */
    this._playing = null;
  };
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  Video.prototype.play = function(event) {
    this._core.trigger("play", null, "video");
    if (this._playing) {
      this.stop();
    }
    var i;
    var s;
    var n = $(event.target || event.srcElement);
    var item = n.closest("." + this._core.settings.itemClass);
    var video = this._videos[item.attr("data-video")];
    var a = video.width || "100%";
    var h = video.height || this._core.$stage.height();
    if ("youtube" === video.type) {
      /** @type {string} */
      i = '<iframe width="' + a + '" height="' + h + '" src="http://www.youtube.com/embed/' + video.id + "?autoplay=1&v=" + video.id + '" frameborder="0" allowfullscreen></iframe>';
    } else {
      if ("vimeo" === video.type) {
        /** @type {string} */
        i = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + a + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      }
    }
    item.addClass("owl-video-playing");
    this._playing = item;
    s = $('<div style="height:' + h + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>");
    n.after(s);
  };
  /**
   * @return {?}
   */
  Video.prototype.isInFullScreen = function() {
    /** @type {(Element|null)} */
    var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    return element && $(element).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = true), !(element && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = false, false) : !this._playing || this._core.state.orientation === options.orientation || (this._core.state.orientation = options.orientation, false));
  };
  /**
   * @return {undefined}
   */
  Video.prototype.destroy = function() {
    var key;
    var indexLookupKey;
    this._core.$element.off("click.owl.video");
    for (key in this._handlers) {
      this._core.$element.off(key, this._handlers[key]);
    }
    for (indexLookupKey in Object.getOwnPropertyNames(this)) {
      if ("function" != typeof this[indexLookupKey]) {
        /** @type {null} */
        this[indexLookupKey] = null;
      }
    }
  };
  /** @type {function(!Object): undefined} */
  $.fn.owlCarousel.Constructor.Plugins.Video = Video;
}(window.Zepto || window.jQuery, window, document), function($, metaWindow, selector, undefined) {
  /**
   * @param {!Object} scope
   * @return {undefined}
   */
  var Animate = function(scope) {
    /** @type {!Object} */
    this.core = scope;
    this.core.options = $.extend({}, Animate.Defaults, this.core.options);
    /** @type {boolean} */
    this.swapping = true;
    /** @type {string} */
    this.previous = undefined;
    /** @type {string} */
    this.next = undefined;
    this.handlers = {
      "change.owl.carousel" : $.proxy(function(treeElement) {
        if ("position" == treeElement.property.name) {
          this.previous = this.core.current();
          this.next = treeElement.property.value;
        }
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel" : $.proxy(function(verifiedEvent) {
        /** @type {boolean} */
        this.swapping = "translated" == verifiedEvent.type;
      }, this),
      "translate.owl.carousel" : $.proxy(function() {
        if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
          this.swap();
        }
      }, this)
    };
    this.core.$element.on(this.handlers);
  };
  Animate.Defaults = {
    animateOut : false,
    animateIn : false
  };
  /**
   * @return {undefined}
   */
  Animate.prototype.swap = function() {
    if (1 === this.core.settings.items && this.core.support3d) {
      this.core.speed(0);
      var ffleft;
      var clear = $.proxy(this.clear, this);
      var nextEleLineTop = this.core.$stage.children().eq(this.previous);
      var next = this.core.$stage.children().eq(this.next);
      var overlay = this.core.settings.animateIn;
      var outgoing = this.core.settings.animateOut;
      if (this.core.current() !== this.previous) {
        if (outgoing) {
          /** @type {number} */
          ffleft = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
          nextEleLineTop.css({
            left : ffleft + "px"
          }).addClass("animated owl-animated-out").addClass(outgoing).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", clear);
        }
        if (overlay) {
          next.addClass("animated owl-animated-in").addClass(overlay).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", clear);
        }
      }
    }
  };
  /**
   * @param {!Event} e
   * @return {undefined}
   */
  Animate.prototype.clear = function(e) {
    $(e.target).css({
      left : ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
    this.core.transitionEnd();
  };
  /**
   * @return {undefined}
   */
  Animate.prototype.destroy = function() {
    var key;
    var indexLookupKey;
    for (key in this.handlers) {
      this.core.$element.off(key, this.handlers[key]);
    }
    for (indexLookupKey in Object.getOwnPropertyNames(this)) {
      if ("function" != typeof this[indexLookupKey]) {
        /** @type {null} */
        this[indexLookupKey] = null;
      }
    }
  };
  /** @type {function(!Object): undefined} */
  $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
}(window.Zepto || window.jQuery, window, document), function($, window, video) {
  /**
   * @param {!Object} loadNext
   * @return {undefined}
   */
  var Autoplay = function(loadNext) {
    /** @type {!Object} */
    this.core = loadNext;
    this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);
    this.handlers = {
      "translated.owl.carousel refreshed.owl.carousel" : $.proxy(function() {
        this.autoplay();
      }, this),
      "play.owl.autoplay" : $.proxy(function(canCreateDiscussions, name, s) {
        this.play(name, s);
      }, this),
      "stop.owl.autoplay" : $.proxy(function() {
        this.stop();
      }, this),
      "mouseover.owl.autoplay" : $.proxy(function() {
        if (this.core.settings.autoplayHoverPause) {
          this.pause();
        }
      }, this),
      "mouseleave.owl.autoplay" : $.proxy(function() {
        if (this.core.settings.autoplayHoverPause) {
          this.autoplay();
        }
      }, this)
    };
    this.core.$element.on(this.handlers);
  };
  Autoplay.Defaults = {
    autoplay : false,
    autoplayTimeout : 5e3,
    autoplayHoverPause : false,
    autoplaySpeed : false
  };
  /**
   * @return {undefined}
   */
  Autoplay.prototype.autoplay = function() {
    if (this.core.settings.autoplay && !this.core.state.videoPlay) {
      window.clearInterval(this.interval);
      this.interval = window.setInterval($.proxy(function() {
        this.play();
      }, this), this.core.settings.autoplayTimeout);
    } else {
      window.clearInterval(this.interval);
    }
  };
  /**
   * @return {?}
   */
  Autoplay.prototype.play = function() {
    return video.hidden === true || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === false ? void window.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed);
  };
  /**
   * @return {undefined}
   */
  Autoplay.prototype.stop = function() {
    window.clearInterval(this.interval);
  };
  /**
   * @return {undefined}
   */
  Autoplay.prototype.pause = function() {
    window.clearInterval(this.interval);
  };
  /**
   * @return {undefined}
   */
  Autoplay.prototype.destroy = function() {
    var key;
    var i;
    window.clearInterval(this.interval);
    for (key in this.handlers) {
      this.core.$element.off(key, this.handlers[key]);
    }
    for (i in Object.getOwnPropertyNames(this)) {
      if ("function" != typeof this[i]) {
        /** @type {null} */
        this[i] = null;
      }
    }
  };
  /** @type {function(!Object): undefined} */
  $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
}(window.Zepto || window.jQuery, window, document), function($) {
  /**
   * @param {!Object} carousel
   * @return {undefined}
   */
  var Navigation = function(carousel) {
    /** @type {!Object} */
    this._core = carousel;
    /** @type {boolean} */
    this._initialized = false;
    /** @type {!Array} */
    this._pages = [];
    this._controls = {};
    /** @type {!Array} */
    this._templates = [];
    this.$element = this._core.$element;
    this._overrides = {
      next : this._core.next,
      prev : this._core.prev,
      to : this._core.to
    };
    this._handlers = {
      "prepared.owl.carousel" : $.proxy(function(e) {
        if (this._core.settings.dotsData) {
          this._templates.push($(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
        }
      }, this),
      "add.owl.carousel" : $.proxy(function(e) {
        if (this._core.settings.dotsData) {
          this._templates.splice(e.position, 0, $(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
        }
      }, this),
      "remove.owl.carousel prepared.owl.carousel" : $.proxy(function(event) {
        if (this._core.settings.dotsData) {
          this._templates.splice(event.position, 1);
        }
      }, this),
      "change.owl.carousel" : $.proxy(function(treeElement) {
        if ("position" == treeElement.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
          var f = this._core.current();
          var min = this._core.maximum();
          var x = this._core.minimum();
          treeElement.data = treeElement.property.value > min ? f >= min ? x : min : treeElement.property.value < x ? min : treeElement.property.value;
        }
      }, this),
      "changed.owl.carousel" : $.proxy(function(treeElement) {
        if ("position" == treeElement.property.name) {
          this.draw();
        }
      }, this),
      "refreshed.owl.carousel" : $.proxy(function() {
        if (!this._initialized) {
          this.initialize();
          /** @type {boolean} */
          this._initialized = true;
        }
        this._core.trigger("refresh", null, "navigation");
        this.update();
        this.draw();
        this._core.trigger("refreshed", null, "navigation");
      }, this)
    };
    this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
    this.$element.on(this._handlers);
  };
  Navigation.Defaults = {
    nav : false,
    navRewind : true,
    navText : ["prev", "next"],
    navSpeed : false,
    navElement : "div",
    navContainer : false,
    navContainerClass : "owl-nav",
    navClass : ["owl-prev", "owl-next"],
    slideBy : 1,
    dotClass : "owl-dot",
    dotsClass : "owl-dots",
    dots : true,
    dotsEach : false,
    dotData : false,
    dotsSpeed : false,
    dotsContainer : false,
    controlsClass : "owl-controls"
  };
  /**
   * @return {undefined}
   */
  Navigation.prototype.initialize = function() {
    var e;
    var override;
    var settings = this._core.settings;
    if (!settings.dotsData) {
      /** @type {!Array} */
      this._templates = [$("<div>").addClass(settings.dotClass).append($("<span>")).prop("outerHTML")];
    }
    if (!(settings.navContainer && settings.dotsContainer)) {
      this._controls.$container = $("<div>").addClass(settings.controlsClass).appendTo(this.$element);
    }
    this._controls.$indicators = settings.dotsContainer ? $(settings.dotsContainer) : $("<div>").hide().addClass(settings.dotsClass).appendTo(this._controls.$container);
    this._controls.$indicators.on("click", "div", $.proxy(function(event) {
      var last = $(event.target).parent().is(this._controls.$indicators) ? $(event.target).index() : $(event.target).parent().index();
      event.preventDefault();
      this.to(last, settings.dotsSpeed);
    }, this));
    e = settings.navContainer ? $(settings.navContainer) : $("<div>").addClass(settings.navContainerClass).prependTo(this._controls.$container);
    this._controls.$next = $("<" + settings.navElement + ">");
    this._controls.$previous = this._controls.$next.clone();
    this._controls.$previous.addClass(settings.navClass[0]).html(settings.navText[0]).hide().prependTo(e).on("click", $.proxy(function() {
      this.prev(settings.navSpeed);
    }, this));
    this._controls.$next.addClass(settings.navClass[1]).html(settings.navText[1]).hide().appendTo(e).on("click", $.proxy(function() {
      this.next(settings.navSpeed);
    }, this));
    for (override in this._overrides) {
      this._core[override] = $.proxy(this[override], this);
    }
  };
  /**
   * @return {undefined}
   */
  Navigation.prototype.destroy = function() {
    var handler;
    var control;
    var i;
    var override;
    for (handler in this._handlers) {
      this.$element.off(handler, this._handlers[handler]);
    }
    for (control in this._controls) {
      this._controls[control].remove();
    }
    for (override in this.overides) {
      this._core[override] = this._overrides[override];
    }
    for (i in Object.getOwnPropertyNames(this)) {
      if ("function" != typeof this[i]) {
        /** @type {null} */
        this[i] = null;
      }
    }
  };
  /**
   * @return {undefined}
   */
  Navigation.prototype.update = function() {
    var i;
    var x;
    var position;
    var settings = this._core.settings;
    /** @type {number} */
    var offset = this._core.clones().length / 2;
    var max = offset + this._core.items().length;
    var j = settings.center || settings.autoWidth || settings.dotData ? 1 : settings.dotsEach || settings.items;
    if ("page" !== settings.slideBy && (settings.slideBy = Math.min(settings.slideBy, settings.items)), settings.dots || "page" == settings.slideBy) {
      /** @type {!Array} */
      this._pages = [];
      /** @type {number} */
      i = offset;
      /** @type {number} */
      x = 0;
      /** @type {number} */
      position = 0;
      for (; max > i; i++) {
        if (x >= j || 0 === x) {
          this._pages.push({
            start : i - offset,
            end : i - offset + j - 1
          });
          /** @type {number} */
          x = 0;
          ++position;
        }
        x = x + this._core.mergers(this._core.relative(i));
      }
    }
  };
  /**
   * @return {undefined}
   */
  Navigation.prototype.draw = function() {
    var difference;
    var i;
    /** @type {string} */
    var description = "";
    var settings = this._core.settings;
    var scrollY = (this._core.$stage.children(), this._core.relative(this._core.current()));
    if (!settings.nav || settings.loop || settings.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= scrollY), this._controls.$next.toggleClass("disabled", scrollY >= this._core.maximum())), this._controls.$previous.toggle(settings.nav), this._controls.$next.toggle(settings.nav), settings.dots) {
      if (difference = this._pages.length - this._controls.$indicators.children().length, settings.dotData && 0 !== difference) {
        /** @type {number} */
        i = 0;
        for (; i < this._controls.$indicators.children().length; i++) {
          description = description + this._templates[this._core.relative(i)];
        }
        this._controls.$indicators.html(description);
      } else {
        if (difference > 0) {
          /** @type {string} */
          description = (new Array(difference + 1)).join(this._templates[0]);
          this._controls.$indicators.append(description);
        } else {
          if (0 > difference) {
            this._controls.$indicators.children().slice(difference).remove();
          }
        }
      }
      this._controls.$indicators.find(".active").removeClass("active");
      this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass("active");
    }
    this._controls.$indicators.toggle(settings.dots);
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  Navigation.prototype.onTrigger = function(event) {
    var settings = this._core.settings;
    event.page = {
      index : $.inArray(this.current(), this._pages),
      count : this._pages.length,
      size : settings && (settings.center || settings.autoWidth || settings.dotData ? 1 : settings.dotsEach || settings.items)
    };
  };
  /**
   * @return {?}
   */
  Navigation.prototype.current = function() {
    var wordPos = this._core.relative(this._core.current());
    return $.grep(this._pages, function(nodeArg) {
      return nodeArg.start <= wordPos && nodeArg.end >= wordPos;
    }).pop();
  };
  /**
   * @param {boolean} object
   * @return {?}
   */
  Navigation.prototype.getPosition = function(object) {
    var position;
    var length;
    var settings = this._core.settings;
    return "page" == settings.slideBy ? (position = $.inArray(this.current(), this._pages), length = this._pages.length, object ? ++position : --position, position = this._pages[(position % length + length) % length].start) : (position = this._core.relative(this._core.current()), length = this._core.items().length, object ? position = position + settings.slideBy : position = position - settings.slideBy), position;
  };
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  Navigation.prototype.next = function(type) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(true), type);
  };
  /**
   * @param {?} speed
   * @return {undefined}
   */
  Navigation.prototype.prev = function(speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
  };
  /**
   * @param {number} index
   * @param {!Object} type
   * @param {?} constructor
   * @return {undefined}
   */
  Navigation.prototype.to = function(index, type, constructor) {
    var length;
    if (constructor) {
      $.proxy(this._overrides.to, this._core)(index, type);
    } else {
      length = this._pages.length;
      $.proxy(this._overrides.to, this._core)(this._pages[(index % length + length) % length].start, type);
    }
  };
  /** @type {function(!Object): undefined} */
  $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
}(window.Zepto || window.jQuery, window, document), function($, window) {
  /**
   * @param {!Object} carousel
   * @return {undefined}
   */
  var Hash = function(carousel) {
    /** @type {!Object} */
    this._core = carousel;
    this._hashes = {};
    this.$element = this._core.$element;
    this._handlers = {
      "initialized.owl.carousel" : $.proxy(function() {
        if ("URLHash" == this._core.settings.startPosition) {
          $(window).trigger("hashchange.owl.navigation");
        }
      }, this),
      "prepared.owl.carousel" : $.proxy(function(e) {
        var hash = $(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
        this._hashes[hash] = e.content;
      }, this)
    };
    this._core.options = $.extend({}, Hash.Defaults, this._core.options);
    this.$element.on(this._handlers);
    $(window).on("hashchange.owl.navigation", $.proxy(function() {
      /** @type {string} */
      var hash = window.location.hash.substring(1);
      var items = this._core.$stage.children();
      var id = this._hashes[hash] && items.index(this._hashes[hash]) || 0;
      return !!hash && void this._core.to(id, false, true);
    }, this));
  };
  Hash.Defaults = {
    URLhashListener : false
  };
  /**
   * @return {undefined}
   */
  Hash.prototype.destroy = function() {
    var key;
    var indexLookupKey;
    $(window).off("hashchange.owl.navigation");
    for (key in this._handlers) {
      this._core.$element.off(key, this._handlers[key]);
    }
    for (indexLookupKey in Object.getOwnPropertyNames(this)) {
      if ("function" != typeof this[indexLookupKey]) {
        /** @type {null} */
        this[indexLookupKey] = null;
      }
    }
  };
  /** @type {function(!Object): undefined} */
  $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
}(window.Zepto || window.jQuery, window, document);
!function($) {
  /**
   * @param {!Object} el
   * @param {?} options
   * @return {undefined}
   */
  $.flexslider = function(el, options) {
    var slider = $(el);
    slider.vars = $.extend({}, $.flexslider.defaults, options);
    var _takingTooLongTimeout;
    var namespace = slider.vars.namespace;
    var msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture;
    var touch = ("ontouchstart" in window || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch;
    /** @type {string} */
    var b = "click touchend MSPointerUp keyup";
    /** @type {string} */
    var key = "";
    /** @type {boolean} */
    var vertical = "vertical" === slider.vars.direction;
    var reverse = slider.vars.reverse;
    /** @type {boolean} */
    var carousel = slider.vars.itemWidth > 0;
    /** @type {boolean} */
    var fade = "fade" === slider.vars.animation;
    /** @type {boolean} */
    var asNav = "" !== slider.vars.asNavFor;
    var methods = {};
    /** @type {boolean} */
    var g = true;
    $.data(el, "flexslider", slider);
    methods = {
      init : function() {
        /** @type {boolean} */
        slider.animating = false;
        /** @type {number} */
        slider.currentSlide = parseInt(slider.vars.startAt ? slider.vars.startAt : 0, 10);
        if (isNaN(slider.currentSlide)) {
          /** @type {number} */
          slider.currentSlide = 0;
        }
        /** @type {number} */
        slider.animatingTo = slider.currentSlide;
        /** @type {boolean} */
        slider.atEnd = 0 === slider.currentSlide || slider.currentSlide === slider.last;
        slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(" "));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        /** @type {boolean} */
        slider.syncExists = $(slider.vars.sync).length > 0;
        if ("slide" === slider.vars.animation) {
          /** @type {string} */
          slider.vars.animation = "swing";
        }
        /** @type {string} */
        slider.prop = vertical ? "top" : "marginLeft";
        slider.args = {};
        /** @type {boolean} */
        slider.manualPause = false;
        /** @type {boolean} */
        slider.stopped = false;
        /** @type {boolean} */
        slider.started = false;
        /** @type {null} */
        slider.startTimeout = null;
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && function() {
          /** @type {!Element} */
          var div = document.createElement("div");
          /** @type {!Array} */
          var props = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
          var i;
          for (i in props) {
            if (void 0 !== div.style[props[i]]) {
              return slider.pfx = props[i].replace("Perspective", "").toLowerCase(), slider.prop = "-" + slider.pfx + "-transform", true;
            }
          }
          return false;
        }();
        /** @type {string} */
        slider.ensureAnimationEnd = "";
        if ("" !== slider.vars.controlsContainer) {
          slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        }
        if ("" !== slider.vars.manualControls) {
          slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);
        }
        if ("" !== slider.vars.customDirectionNav) {
          slider.customDirectionNav = 2 === $(slider.vars.customDirectionNav).length && $(slider.vars.customDirectionNav);
        }
        if (slider.vars.randomize) {
          slider.slides.sort(function() {
            return Math.round(Math.random()) - .5;
          });
          slider.container.empty().append(slider.slides);
        }
        slider.doMath();
        slider.setup("init");
        if (slider.vars.controlNav) {
          methods.controlNav.setup();
        }
        if (slider.vars.directionNav) {
          methods.directionNav.setup();
        }
        if (slider.vars.keyboard && (1 === $(slider.containerSelector).length || slider.vars.multipleKeyboard)) {
          $(document).bind("keyup", function(event) {
            var key = event.keyCode;
            if (!slider.animating && (39 === key || 37 === key)) {
              var target = 39 === key ? slider.getTarget("next") : 37 === key && slider.getTarget("prev");
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        if (slider.vars.mousewheel) {
          slider.bind("mousewheel", function(event, currentIndex, a, i) {
            event.preventDefault();
            var target = slider.getTarget(0 > currentIndex ? "next" : "prev");
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }
        if (slider.vars.pausePlay) {
          methods.pausePlay.setup();
        }
        if (slider.vars.slideshow && slider.vars.pauseInvisible) {
          methods.pauseInvisible.init();
        }
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!(slider.manualPlay || slider.manualPause)) {
                slider.pause();
              }
            }, function() {
              if (!(slider.manualPause || slider.manualPlay || slider.stopped)) {
                slider.play();
              }
            });
          }
          if (!(slider.vars.pauseInvisible && methods.pauseInvisible.isHidden())) {
            if (slider.vars.initDelay > 0) {
              /** @type {number} */
              slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay);
            } else {
              slider.play();
            }
          }
        }
        if (asNav) {
          methods.asNav.setup();
        }
        if (touch && slider.vars.touch) {
          methods.touch();
        }
        if (!fade || fade && slider.vars.smoothHeight) {
          $(window).bind("resize orientationchange focus", methods.resize);
        }
        slider.find("img").attr("draggable", "false");
        setTimeout(function() {
          slider.vars.start(slider);
        }, 200);
      },
      asNav : {
        setup : function() {
          /** @type {boolean} */
          slider.asNav = true;
          /** @type {number} */
          slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if (msGesture) {
            el._slider = slider;
            slider.slides.each(function() {
              var el = this;
              /** @type {!MSGesture} */
              el._gesture = new MSGesture;
              el._gesture.target = el;
              el.addEventListener("MSPointerDown", function(e) {
                e.preventDefault();
                if (e.currentTarget._gesture) {
                  e.currentTarget._gesture.addPointer(e.pointerId);
                }
              }, false);
              el.addEventListener("MSGestureTap", function(event) {
                event.preventDefault();
                var a = $(this);
                var target = a.index();
                if (!($(slider.vars.asNavFor).data("flexslider").animating || a.hasClass("active"))) {
                  /** @type {string} */
                  slider.direction = slider.currentItem < target ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
            });
          } else {
            slider.slides.on(b, function(event) {
              event.preventDefault();
              var $slide = $(this);
              var target = $slide.index();
              /** @type {number} */
              var r = $slide.offset().left - $(slider).scrollLeft();
              if (0 >= r && $slide.hasClass(namespace + "active-slide")) {
                slider.flexAnimate(slider.getTarget("prev"), true);
              } else {
                if (!($(slider.vars.asNavFor).data("flexslider").animating || $slide.hasClass(namespace + "active-slide"))) {
                  /** @type {string} */
                  slider.direction = slider.currentItem < target ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              }
            });
          }
        }
      },
      controlNav : {
        setup : function() {
          if (slider.manualControls) {
            methods.controlNav.setupManual();
          } else {
            methods.controlNav.setupPaging();
          }
        },
        setupPaging : function() {
          var tt;
          var slide;
          /** @type {string} */
          var type = "thumbnails" === slider.vars.controlNav ? "control-thumbs" : "control-paging";
          /** @type {number} */
          var r = 1;
          if (slider.controlNavScaffold = $('<ol class="' + namespace + "control-nav " + namespace + type + '"></ol>'), slider.pagingCount > 1) {
            /** @type {number} */
            var i = 0;
            for (; i < slider.pagingCount; i++) {
              if (slide = slider.slides.eq(i), tt = "thumbnails" === slider.vars.controlNav ? '<img src="' + slide.attr("data-thumb") + '"/>' : "<a>" + r + "</a>", "thumbnails" === slider.vars.controlNav && true === slider.vars.thumbCaptions) {
                var captn = slide.attr("data-thumbcaption");
                if ("" !== captn && void 0 !== captn) {
                  /** @type {string} */
                  tt = tt + ('<span class="' + namespace + 'caption">' + captn + "</span>");
                }
              }
              slider.controlNavScaffold.append("<li>" + tt + "</li>");
              r++;
            }
          }
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(slider.controlNavScaffold);
          } else {
            slider.append(slider.controlNavScaffold);
          }
          methods.controlNav.set();
          methods.controlNav.active();
          slider.controlNavScaffold.delegate("a, img", b, function(event) {
            if (event.preventDefault(), "" === key || key === event.type) {
              var $this = $(this);
              var target = slider.controlNav.index($this);
              if (!$this.hasClass(namespace + "active")) {
                /** @type {string} */
                slider.direction = target > slider.currentSlide ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }
            if ("" === key) {
              key = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        setupManual : function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();
          slider.controlNav.bind(b, function(event) {
            if (event.preventDefault(), "" === key || key === event.type) {
              var $this = $(this);
              var target = slider.controlNav.index($this);
              if (!$this.hasClass(namespace + "active")) {
                /** @type {string} */
                slider.direction = target > slider.currentSlide ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }
            if ("" === key) {
              key = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set : function() {
          /** @type {string} */
          var selector = "thumbnails" === slider.vars.controlNav ? "img" : "a";
          slider.controlNav = $("." + namespace + "control-nav li " + selector, slider.controlsContainer ? slider.controlsContainer : slider);
        },
        active : function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update : function(type, name) {
          if (slider.pagingCount > 1 && "add" === type) {
            slider.controlNavScaffold.append($("<li><a>" + slider.count + "</a></li>"));
          } else {
            if (1 === slider.pagingCount) {
              slider.controlNavScaffold.find("li").remove();
            } else {
              slider.controlNav.eq(name).closest("li").remove();
            }
          }
          methods.controlNav.set();
          if (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) {
            slider.update(name, type);
          } else {
            methods.controlNav.active();
          }
        }
      },
      directionNav : {
        setup : function() {
          var nivoControl = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + "</a></li></ul>");
          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;
          } else {
            if (slider.controlsContainer) {
              $(slider.controlsContainer).append(nivoControl);
              slider.directionNav = $("." + namespace + "direction-nav li a", slider.controlsContainer);
            } else {
              slider.append(nivoControl);
              slider.directionNav = $("." + namespace + "direction-nav li a", slider);
            }
          }
          methods.directionNav.update();
          slider.directionNav.bind(b, function(event) {
            event.preventDefault();
            var target;
            if ("" === key || key === event.type) {
              target = slider.getTarget($(this).hasClass(namespace + "next") ? "next" : "prev");
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
            if ("" === key) {
              key = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update : function() {
          /** @type {string} */
          var key = namespace + "disabled";
          if (1 === slider.pagingCount) {
            slider.directionNav.addClass(key).attr("tabindex", "-1");
          } else {
            if (slider.vars.animationLoop) {
              slider.directionNav.removeClass(key).removeAttr("tabindex");
            } else {
              if (0 === slider.animatingTo) {
                slider.directionNav.removeClass(key).filter("." + namespace + "prev").addClass(key).attr("tabindex", "-1");
              } else {
                if (slider.animatingTo === slider.last) {
                  slider.directionNav.removeClass(key).filter("." + namespace + "next").addClass(key).attr("tabindex", "-1");
                } else {
                  slider.directionNav.removeClass(key).removeAttr("tabindex");
                }
              }
            }
          }
        }
      },
      pausePlay : {
        setup : function() {
          var nivoControl = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
          if (slider.controlsContainer) {
            slider.controlsContainer.append(nivoControl);
            slider.pausePlay = $("." + namespace + "pauseplay a", slider.controlsContainer);
          } else {
            slider.append(nivoControl);
            slider.pausePlay = $("." + namespace + "pauseplay a", slider);
          }
          methods.pausePlay.update(slider.vars.slideshow ? namespace + "pause" : namespace + "play");
          slider.pausePlay.bind(b, function(event) {
            event.preventDefault();
            if ("" === key || key === event.type) {
              if ($(this).hasClass(namespace + "pause")) {
                /** @type {boolean} */
                slider.manualPause = true;
                /** @type {boolean} */
                slider.manualPlay = false;
                slider.pause();
              } else {
                /** @type {boolean} */
                slider.manualPause = false;
                /** @type {boolean} */
                slider.manualPlay = true;
                slider.play();
              }
            }
            if ("" === key) {
              key = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update : function(type) {
          if ("play" === type) {
            slider.pausePlay.removeClass(namespace + "pause").addClass(namespace + "play").html(slider.vars.playText);
          } else {
            slider.pausePlay.removeClass(namespace + "play").addClass(namespace + "pause").html(slider.vars.pauseText);
          }
        }
      },
      touch : function() {
        /**
         * @param {!Object} e
         * @return {undefined}
         */
        function onMSPointerDown(e) {
          e.stopPropagation();
          if (slider.animating) {
            e.preventDefault();
          } else {
            slider.pause();
            el._gesture.addPointer(e.pointerId);
            /** @type {number} */
            accDx = 0;
            cwidth = vertical ? slider.h : slider.w;
            /** @type {number} */
            startT = Number(new Date);
            offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + slider.vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
          }
        }
        /**
         * @param {!Event} e
         * @return {?}
         */
        function onMSGestureChange(e) {
          e.stopPropagation();
          var slider = e.target._slider;
          if (slider) {
            /** @type {number} */
            var transX = -e.translationX;
            /** @type {number} */
            var transY = -e.translationY;
            return accDx = accDx + (vertical ? transY : transX), dx = accDx, scrolling = vertical ? Math.abs(accDx) < Math.abs(-transX) : Math.abs(accDx) < Math.abs(-transY), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
              el._gesture.stop();
            }) : void((!scrolling || Number(new Date) - startT > 500) && (e.preventDefault(), !fade && slider.transitions && (slider.vars.animationLoop || (dx = accDx / (0 === slider.currentSlide && 0 > accDx || slider.currentSlide === slider.last && accDx > 0 ? Math.abs(accDx) / cwidth + 2 : 1)), slider.setProps(offset + dx, "setTouch"))));
          }
        }
        /**
         * @param {!Event} e
         * @return {undefined}
         */
        function onMSGestureEnd(e) {
          e.stopPropagation();
          var slider = e.target._slider;
          if (slider) {
            if (slider.animatingTo === slider.currentSlide && !scrolling && null !== dx) {
              var updateDx = reverse ? -dx : dx;
              var target = slider.getTarget(updateDx > 0 ? "next" : "prev");
              if (slider.canAdvance(target) && (Number(new Date) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              } else {
                if (!fade) {
                  slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                }
              }
            }
            /** @type {null} */
            startX = null;
            /** @type {null} */
            startY = null;
            /** @type {null} */
            dx = null;
            /** @type {null} */
            offset = null;
            /** @type {number} */
            accDx = 0;
          }
        }
        var startX;
        var startY;
        var offset;
        var cwidth;
        var dx;
        var startT;
        var onTouchStart;
        var onTouchMove;
        var onTouchEnd;
        /** @type {boolean} */
        var scrolling = false;
        /** @type {number} */
        var localX = 0;
        /** @type {number} */
        var localY = 0;
        /** @type {number} */
        var accDx = 0;
        if (msGesture) {
          /** @type {string} */
          el.style.msTouchAction = "none";
          /** @type {!MSGesture} */
          el._gesture = new MSGesture;
          /** @type {!Object} */
          el._gesture.target = el;
          el.addEventListener("MSPointerDown", onMSPointerDown, false);
          el._slider = slider;
          el.addEventListener("MSGestureChange", onMSGestureChange, false);
          el.addEventListener("MSGestureEnd", onMSGestureEnd, false);
        } else {
          /**
           * @param {!Event} event
           * @return {undefined}
           */
          onTouchStart = function(event) {
            if (slider.animating) {
              event.preventDefault();
            } else {
              if (window.navigator.msPointerEnabled || 1 === event.touches.length) {
                slider.pause();
                cwidth = vertical ? slider.h : slider.w;
                /** @type {number} */
                startT = Number(new Date);
                localX = event.touches[0].pageX;
                localY = event.touches[0].pageY;
                offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + slider.vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = vertical ? localY : localX;
                startY = vertical ? localX : localY;
                el.addEventListener("touchmove", onTouchMove, false);
                el.addEventListener("touchend", onTouchEnd, false);
              }
            }
          };
          /**
           * @param {!Event} event
           * @return {undefined}
           */
          onTouchMove = function(event) {
            localX = event.touches[0].pageX;
            localY = event.touches[0].pageY;
            /** @type {number} */
            dx = vertical ? startX - localY : startX - localX;
            /** @type {boolean} */
            scrolling = vertical ? Math.abs(dx) < Math.abs(localX - startY) : Math.abs(dx) < Math.abs(localY - startY);
            /** @type {number} */
            var fxms = 500;
            if (!scrolling || Number(new Date) - startT > fxms) {
              event.preventDefault();
              if (!fade && slider.transitions) {
                if (!slider.vars.animationLoop) {
                  /** @type {number} */
                  dx = dx / (0 === slider.currentSlide && 0 > dx || slider.currentSlide === slider.last && dx > 0 ? Math.abs(dx) / cwidth + 2 : 1);
                }
                slider.setProps(offset + dx, "setTouch");
              }
            }
          };
          /**
           * @param {?} event
           * @return {undefined}
           */
          onTouchEnd = function(event) {
            if (el.removeEventListener("touchmove", onTouchMove, false), slider.animatingTo === slider.currentSlide && !scrolling && null !== dx) {
              var updateDx = reverse ? -dx : dx;
              var target = slider.getTarget(updateDx > 0 ? "next" : "prev");
              if (slider.canAdvance(target) && (Number(new Date) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              } else {
                if (!fade) {
                  slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                }
              }
            }
            el.removeEventListener("touchend", onTouchEnd, false);
            /** @type {null} */
            startX = null;
            /** @type {null} */
            startY = null;
            /** @type {null} */
            dx = null;
            /** @type {null} */
            offset = null;
          };
          el.addEventListener("touchstart", onTouchStart, false);
        }
      },
      resize : function() {
        if (!slider.animating && slider.is(":visible")) {
          if (!carousel) {
            slider.doMath();
          }
          if (fade) {
            methods.smoothHeight();
          } else {
            if (carousel) {
              slider.slides.width(slider.computedW);
              slider.update(slider.pagingCount);
              slider.setProps();
            } else {
              if (vertical) {
                slider.viewport.height(slider.h);
                slider.setProps(slider.h, "setTotal");
              } else {
                if (slider.vars.smoothHeight) {
                  methods.smoothHeight();
                }
                slider.newSlides.width(slider.computedW);
                slider.setProps(slider.computedW, "setTotal");
              }
            }
          }
        }
      },
      smoothHeight : function(value) {
        if (!vertical || fade) {
          var $obj = fade ? slider : slider.viewport;
          if (value) {
            $obj.animate({
              height : slider.slides.eq(slider.animatingTo).height()
            }, value);
          } else {
            $obj.height(slider.slides.eq(slider.animatingTo).height());
          }
        }
      },
      sync : function(type) {
        var $obj = $(slider.vars.sync).data("flexslider");
        var target = slider.animatingTo;
        switch(type) {
          case "animate":
            $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
            break;
          case "play":
            if (!($obj.playing || $obj.asNav)) {
              $obj.play();
            }
            break;
          case "pause":
            $obj.pause();
        }
      },
      uniqueID : function($clone) {
        return $clone.filter("[id]").add($clone.find("[id]")).each(function() {
          var $this = $(this);
          $this.attr("id", $this.attr("id") + "_clone");
        }), $clone;
      },
      pauseInvisible : {
        visProp : null,
        init : function() {
          var relativeToPath = methods.pauseInvisible.getHiddenProp();
          if (relativeToPath) {
            /** @type {string} */
            var evtname = relativeToPath.replace(/[H|h]idden/, "") + "visibilitychange";
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if (slider.startTimeout) {
                  clearTimeout(slider.startTimeout);
                } else {
                  slider.pause();
                }
              } else {
                if (slider.started) {
                  slider.play();
                } else {
                  if (slider.vars.initDelay > 0) {
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play();
                  }
                }
              }
            });
          }
        },
        isHidden : function() {
          var prefixHidden = methods.pauseInvisible.getHiddenProp();
          return !!prefixHidden && document[prefixHidden];
        },
        getHiddenProp : function() {
          /** @type {!Array} */
          var prefixes = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) {
            return "hidden";
          }
          /** @type {number} */
          var i = 0;
          for (; i < prefixes.length; i++) {
            if (prefixes[i] + "Hidden" in document) {
              return prefixes[i] + "Hidden";
            }
          }
          return null;
        }
      },
      setToClearWatchedEvent : function() {
        clearTimeout(_takingTooLongTimeout);
        /** @type {number} */
        _takingTooLongTimeout = setTimeout(function() {
          /** @type {string} */
          key = "";
        }, 3E3);
      }
    };
    /**
     * @param {number} target
     * @param {!Function} pause
     * @param {boolean} override
     * @param {boolean} withSync
     * @param {string} fromNav
     * @return {?}
     */
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (slider.vars.animationLoop || target === slider.currentSlide || (slider.direction = target > slider.currentSlide ? "next" : "prev"), asNav && 1 === slider.pagingCount && (slider.direction = slider.currentItem < target ? "next" : "prev"), !slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data("flexslider");
          if (slider.atEnd = 0 === target || target === slider.count - 1, master.flexAnimate(target, true, false, true, fromNav), slider.direction = slider.currentItem < target ? "next" : "prev", master.direction = slider.direction, Math.ceil((target + 1) / slider.visible) - 1 === slider.currentSlide || 0 === target) {
            return slider.currentItem = target, slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide"), false;
          }
          /** @type {number} */
          slider.currentItem = target;
          slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
          /** @type {number} */
          target = Math.floor(target / slider.visible);
        }
        if (slider.animating = true, slider.animatingTo = target, pause && slider.pause(), slider.vars.before(slider), slider.syncExists && !fromNav && methods.sync("animate"), slider.vars.controlNav && methods.controlNav.active(), carousel || slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide"), slider.atEnd = 0 === target || target === slider.last, slider.vars.directionNav && methods.directionNav.update(), target === slider.last && (slider.vars.end(slider), 
        slider.vars.animationLoop || slider.pause()), fade) {
          if (touch) {
            slider.slides.eq(slider.currentSlide).css({
              opacity : 0,
              zIndex : 1
            });
            slider.slides.eq(target).css({
              opacity : 1,
              zIndex : 2
            });
            slider.wrapup(dimension);
          } else {
            slider.slides.eq(slider.currentSlide).css({
              zIndex : 1
            }).animate({
              opacity : 0
            }, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({
              zIndex : 2
            }).animate({
              opacity : 1
            }, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
          }
        } else {
          var margin;
          var slideString;
          var calcNext;
          var dimension = vertical ? slider.slides.filter(":first").height() : slider.computedW;
          if (carousel) {
            margin = slider.vars.itemMargin;
            /** @type {number} */
            calcNext = (slider.itemW + margin) * slider.move * slider.animatingTo;
            slideString = calcNext > slider.limit && 1 !== slider.visible ? slider.limit : calcNext;
          } else {
            /** @type {number} */
            slideString = 0 === slider.currentSlide && target === slider.count - 1 && slider.vars.animationLoop && "next" !== slider.direction ? reverse ? (slider.count + slider.cloneOffset) * dimension : 0 : slider.currentSlide === slider.last && 0 === target && slider.vars.animationLoop && "prev" !== slider.direction ? reverse ? 0 : (slider.count + 1) * dimension : reverse ? (slider.count - 1 - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!(slider.vars.animationLoop && slider.atEnd)) {
              /** @type {boolean} */
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });
            clearTimeout(slider.ensureAnimationEnd);
            /** @type {number} */
            slider.ensureAnimationEnd = setTimeout(function() {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);
          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function() {
              slider.wrapup(dimension);
            });
          }
        }
        if (slider.vars.smoothHeight) {
          methods.smoothHeight(slider.vars.animationSpeed);
        }
      }
    };
    /**
     * @param {number} dimension
     * @return {undefined}
     */
    slider.wrapup = function(dimension) {
      if (!(fade || carousel)) {
        if (0 === slider.currentSlide && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else {
          if (slider.currentSlide === slider.last && 0 === slider.animatingTo && slider.vars.animationLoop) {
            slider.setProps(dimension, "jumpStart");
          }
        }
      }
      /** @type {boolean} */
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      slider.vars.after(slider);
    };
    /**
     * @return {undefined}
     */
    slider.animateSlides = function() {
      if (!slider.animating && g) {
        slider.flexAnimate(slider.getTarget("next"));
      }
    };
    /**
     * @return {undefined}
     */
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      /** @type {null} */
      slider.animatedSlides = null;
      /** @type {boolean} */
      slider.playing = false;
      if (slider.vars.pausePlay) {
        methods.pausePlay.update("play");
      }
      if (slider.syncExists) {
        methods.sync("pause");
      }
    };
    /**
     * @return {undefined}
     */
    slider.play = function() {
      if (slider.playing) {
        clearInterval(slider.animatedSlides);
      }
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      /** @type {boolean} */
      slider.started = slider.playing = true;
      if (slider.vars.pausePlay) {
        methods.pausePlay.update("pause");
      }
      if (slider.syncExists) {
        methods.sync("play");
      }
    };
    /**
     * @return {undefined}
     */
    slider.stop = function() {
      slider.pause();
      /** @type {boolean} */
      slider.stopped = true;
    };
    /**
     * @param {number} target
     * @param {string} fromNav
     * @return {?}
     */
    slider.canAdvance = function(target, fromNav) {
      var last = asNav ? slider.pagingCount - 1 : slider.last;
      return !!fromNav || (!(!asNav || slider.currentItem !== slider.count - 1 || 0 !== target || "prev" !== slider.direction) || (!asNav || 0 !== slider.currentItem || target !== slider.pagingCount - 1 || "next" === slider.direction) && (!(target === slider.currentSlide && !asNav) && (!!slider.vars.animationLoop || (!slider.atEnd || 0 !== slider.currentSlide || target !== last || "next" === slider.direction) && (!slider.atEnd || slider.currentSlide !== last || 0 !== target || "next" !== slider.direction))));
    };
    /**
     * @param {string} dir
     * @return {?}
     */
    slider.getTarget = function(dir) {
      return slider.direction = dir, "next" === dir ? slider.currentSlide === slider.last ? 0 : slider.currentSlide + 1 : 0 === slider.currentSlide ? slider.last : slider.currentSlide - 1;
    };
    /**
     * @param {number} pos
     * @param {string} special
     * @param {number} dur
     * @return {undefined}
     */
    slider.setProps = function(pos, special, dur) {
      var width = function() {
        var posCheck = pos ? pos : (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo;
        var gutterLine = function() {
          if (carousel) {
            return "setTouch" === special ? pos : reverse && slider.animatingTo === slider.last ? 0 : reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : slider.animatingTo === slider.last ? slider.limit : posCheck;
          }
          switch(special) {
            case "setTotal":
              return reverse ? (slider.count - 1 - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
            case "setTouch":
              return reverse ? pos : pos;
            case "jumpEnd":
              return reverse ? pos : slider.count * pos;
            case "jumpStart":
              return reverse ? slider.count * pos : pos;
            default:
              return pos;
          }
        }();
        return -1 * gutterLine + "px";
      }();
      if (slider.transitions) {
        /** @type {string} */
        width = vertical ? "translate3d(0," + width + ",0)" : "translate3d(" + width + ",0,0)";
        /** @type {string} */
        dur = void 0 !== dur ? dur / 1E3 + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
        slider.container.css("transition-duration", dur);
      }
      slider.args[slider.prop] = width;
      if (slider.transitions || void 0 === dur) {
        slider.container.css(slider.args);
      }
      slider.container.css("transform", width);
    };
    /**
     * @param {string} options
     * @return {undefined}
     */
    slider.setup = function(options) {
      if (fade) {
        slider.slides.css({
          width : "100%",
          "float" : "left",
          marginRight : "-100%",
          position : "relative"
        });
        if ("init" === options) {
          if (touch) {
            slider.slides.css({
              opacity : 0,
              display : "block",
              webkitTransition : "opacity " + slider.vars.animationSpeed / 1E3 + "s ease",
              zIndex : 1
            }).eq(slider.currentSlide).css({
              opacity : 1,
              zIndex : 2
            });
          } else {
            if (0 == slider.vars.fadeFirstSlide) {
              slider.slides.css({
                opacity : 0,
                display : "block",
                zIndex : 1
              }).eq(slider.currentSlide).css({
                zIndex : 2
              }).css({
                opacity : 1
              });
            } else {
              slider.slides.css({
                opacity : 0,
                display : "block",
                zIndex : 1
              }).eq(slider.currentSlide).css({
                zIndex : 2
              }).animate({
                opacity : 1
              }, slider.vars.animationSpeed, slider.vars.easing);
            }
          }
        }
        if (slider.vars.smoothHeight) {
          methods.smoothHeight();
        }
      } else {
        var sliderOffset;
        var arr;
        if ("init" === options) {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({
            overflow : "hidden",
            position : "relative"
          }).appendTo(slider).append(slider.container);
          /** @type {number} */
          slider.cloneCount = 0;
          /** @type {number} */
          slider.cloneOffset = 0;
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        if (slider.vars.animationLoop && !carousel) {
          /** @type {number} */
          slider.cloneCount = 2;
          /** @type {number} */
          slider.cloneOffset = 1;
          if ("init" !== options) {
            slider.container.find(".clone").remove();
          }
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(methods.uniqueID(slider.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"));
        }
        slider.newSlides = $(slider.vars.selector, slider);
        sliderOffset = reverse ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        if (vertical && !carousel) {
          slider.container.height(200 * (slider.count + slider.cloneCount) + "%").css("position", "absolute").width("100%");
          setTimeout(function() {
            slider.newSlides.css({
              display : "block"
            });
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, "init" === options ? 100 : 0);
        } else {
          slider.container.width(200 * (slider.count + slider.cloneCount) + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function() {
            slider.doMath();
            slider.newSlides.css({
              width : slider.computedW,
              "float" : "left",
              display : "block"
            });
            if (slider.vars.smoothHeight) {
              methods.smoothHeight();
            }
          }, "init" === options ? 100 : 0);
        }
      }
      if (!carousel) {
        slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
      }
      slider.vars.init(slider);
    };
    /**
     * @return {undefined}
     */
    slider.doMath = function() {
      var $divUnconnected = slider.slides.first();
      var slideMargin = slider.vars.itemMargin;
      var minItems = slider.vars.minItems;
      var maxItems = slider.vars.maxItems;
      slider.w = void 0 === slider.viewport ? slider.width() : slider.viewport.width();
      slider.h = $divUnconnected.height();
      /** @type {number} */
      slider.boxPadding = $divUnconnected.outerWidth() - $divUnconnected.width();
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = minItems ? minItems * slider.itemT : slider.w;
        slider.maxW = maxItems ? maxItems * slider.itemT - slideMargin : slider.w;
        slider.itemW = slider.minW > slider.w ? (slider.w - slideMargin * (minItems - 1)) / minItems : slider.maxW < slider.w ? (slider.w - slideMargin * (maxItems - 1)) / maxItems : slider.vars.itemWidth > slider.w ? slider.w : slider.vars.itemWidth;
        /** @type {number} */
        slider.visible = Math.floor(slider.w / slider.itemW);
        slider.move = slider.vars.move > 0 && slider.vars.move < slider.visible ? slider.vars.move : slider.visible;
        /** @type {number} */
        slider.pagingCount = Math.ceil((slider.count - slider.visible) / slider.move + 1);
        /** @type {number} */
        slider.last = slider.pagingCount - 1;
        /** @type {number} */
        slider.limit = 1 === slider.pagingCount ? 0 : slider.vars.itemWidth > slider.w ? slider.itemW * (slider.count - 1) + slideMargin * (slider.count - 1) : (slider.itemW + slideMargin) * slider.count - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        /** @type {number} */
        slider.last = slider.count - 1;
      }
      /** @type {number} */
      slider.computedW = slider.itemW - slider.boxPadding;
    };
    /**
     * @param {?} type
     * @param {!Object} id
     * @return {undefined}
     */
    slider.update = function(type, id) {
      slider.doMath();
      if (!carousel) {
        if (type < slider.currentSlide) {
          slider.currentSlide += 1;
        } else {
          if (type <= slider.currentSlide && 0 !== type) {
            slider.currentSlide -= 1;
          }
        }
        slider.animatingTo = slider.currentSlide;
      }
      if (slider.vars.controlNav && !slider.manualControls) {
        if ("add" === id && !carousel || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else {
          if ("remove" === id && !carousel || slider.pagingCount < slider.controlNav.length) {
            if (carousel && slider.currentSlide > slider.last) {
              slider.currentSlide -= 1;
              slider.animatingTo -= 1;
            }
            methods.controlNav.update("remove", slider.last);
          }
        }
      }
      if (slider.vars.directionNav) {
        methods.directionNav.update();
      }
    };
    /**
     * @param {?} obj
     * @param {?} pos
     * @return {undefined}
     */
    slider.addSlide = function(obj, pos) {
      var $floatContainer = $(obj);
      slider.count += 1;
      /** @type {number} */
      slider.last = slider.count - 1;
      if (vertical && reverse) {
        if (void 0 !== pos) {
          slider.slides.eq(slider.count - pos).after($floatContainer);
        } else {
          slider.container.prepend($floatContainer);
        }
      } else {
        if (void 0 !== pos) {
          slider.slides.eq(pos).before($floatContainer);
        } else {
          slider.container.append($floatContainer);
        }
      }
      slider.update(pos, "add");
      slider.slides = $(slider.vars.selector + ":not(.clone)", slider);
      slider.setup();
      slider.vars.added(slider);
    };
    /**
     * @param {number} obj
     * @return {undefined}
     */
    slider.removeSlide = function(obj) {
      var key = isNaN(obj) ? slider.slides.index($(obj)) : obj;
      slider.count -= 1;
      /** @type {number} */
      slider.last = slider.count - 1;
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        if (vertical && reverse) {
          slider.slides.eq(slider.last).remove();
        } else {
          slider.slides.eq(obj).remove();
        }
      }
      slider.doMath();
      slider.update(key, "remove");
      slider.slides = $(slider.vars.selector + ":not(.clone)", slider);
      slider.setup();
      slider.vars.removed(slider);
    };
    methods.init();
  };
  $(window).blur(function(canCreateDiscussions) {
    /** @type {boolean} */
    focused = false;
  }).focus(function(canCreateDiscussions) {
    /** @type {boolean} */
    focused = true;
  });
  $.flexslider.defaults = {
    namespace : "flex-",
    selector : ".slides > li",
    animation : "fade",
    easing : "swing",
    direction : "horizontal",
    reverse : false,
    animationLoop : true,
    smoothHeight : false,
    startAt : 0,
    slideshow : true,
    slideshowSpeed : 7E3,
    animationSpeed : 600,
    initDelay : 0,
    randomize : false,
    fadeFirstSlide : true,
    thumbCaptions : false,
    pauseOnAction : true,
    pauseOnHover : false,
    pauseInvisible : true,
    useCSS : true,
    touch : true,
    video : false,
    controlNav : true,
    directionNav : true,
    prevText : "Previous",
    nextText : "Next",
    keyboard : true,
    multipleKeyboard : false,
    mousewheel : false,
    pausePlay : false,
    pauseText : "Pause",
    playText : "Play",
    controlsContainer : "",
    manualControls : "",
    customDirectionNav : "",
    sync : "",
    asNavFor : "",
    itemWidth : 0,
    itemMargin : 0,
    minItems : 1,
    maxItems : 0,
    move : 0,
    allowOneSlide : true,
    start : function() {
    },
    before : function() {
    },
    after : function() {
    },
    end : function() {
    },
    added : function() {
    },
    removed : function() {
    },
    init : function() {
    }
  };
  /**
   * @param {number} options
   * @return {?}
   */
  $.fn.flexslider = function(options) {
    if (void 0 === options && (options = {}), "object" == typeof options) {
      return this.each(function() {
        var $this = $(this);
        var body = options.selector ? options.selector : ".slides > li";
        var dp = $this.find(body);
        if (1 === dp.length && options.allowOneSlide === true || 0 === dp.length) {
          dp.fadeIn(400);
          if (options.start) {
            options.start($this);
          }
        } else {
          if (void 0 === $this.data("flexslider")) {
            new $.flexslider(this, options);
          }
        }
      });
    }
    var $slider = $(this).data("flexslider");
    switch(options) {
      case "play":
        $slider.play();
        break;
      case "pause":
        $slider.pause();
        break;
      case "stop":
        $slider.stop();
        break;
      case "next":
        $slider.flexAnimate($slider.getTarget("next"), true);
        break;
      case "prev":
      case "previous":
        $slider.flexAnimate($slider.getTarget("prev"), true);
        break;
      default:
        if ("number" == typeof options) {
          $slider.flexAnimate(options, true);
        }
    }
  };
}(jQuery);
!function(factory) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(jQuery);
  }
}(function($) {
  /**
   * @param {!Object} element
   * @param {string} isTabIndexNotNaN
   * @return {?}
   */
  function focusable(element, isTabIndexNotNaN) {
    var a;
    var b;
    var baz;
    var nodeName = element.nodeName.toLowerCase();
    return "area" === nodeName ? (a = element.parentNode, b = a.name, !(!element.href || !b || "map" !== a.nodeName.toLowerCase()) && (baz = $("img[usemap='#" + b + "']")[0], !!baz && visible(baz))) : (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) && visible(element);
  }
  /**
   * @param {!Object} selector
   * @return {?}
   */
  function visible(selector) {
    return $.expr.filters.visible(selector) && !$(selector).parents().addBack().filter(function() {
      return "hidden" === $.css(this, "visibility");
    }).length;
  }
  $.ui = $.ui || {};
  $.extend($.ui, {
    version : "1.11.1",
    keyCode : {
      BACKSPACE : 8,
      COMMA : 188,
      DELETE : 46,
      DOWN : 40,
      END : 35,
      ENTER : 13,
      ESCAPE : 27,
      HOME : 36,
      LEFT : 37,
      PAGE_DOWN : 34,
      PAGE_UP : 33,
      PERIOD : 190,
      RIGHT : 39,
      SPACE : 32,
      TAB : 9,
      UP : 38
    }
  });
  $.fn.extend({
    scrollParent : function(includeHidden) {
      var value = this.css("position");
      /** @type {boolean} */
      var isTranslucent = "absolute" === value;
      /** @type {!RegExp} */
      var overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
      var options = this.parents().filter(function() {
        var parent = $(this);
        return (!isTranslucent || "static" !== parent.css("position")) && overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
      }).eq(0);
      return "fixed" !== value && options.length ? options : $(this[0].ownerDocument || document);
    },
    uniqueId : function() {
      /** @type {number} */
      var uuid = 0;
      return function() {
        return this.each(function() {
          if (!this.id) {
            /** @type {string} */
            this.id = "ui-id-" + ++uuid;
          }
        });
      };
    }(),
    removeUniqueId : function() {
      return this.each(function() {
        if (/^ui-id-\d+$/.test(this.id)) {
          $(this).removeAttr("id");
        }
      });
    }
  });
  $.extend($.expr[":"], {
    data : $.expr.createPseudo ? $.expr.createPseudo(function(t) {
      return function(i) {
        return !!$.data(i, t);
      };
    }) : function(type, obj, name) {
      return !!$.data(type, name[3]);
    },
    focusable : function(element) {
      return focusable(element, !isNaN($.attr(element, "tabindex")));
    },
    tabbable : function(element) {
      var tabIndex = $.attr(element, "tabindex");
      /** @type {boolean} */
      var isTabIndexNaN = isNaN(tabIndex);
      return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
    }
  });
  if (!$("<a>").outerWidth(1).jquery) {
    $.each(["Width", "Height"], function(canCreateDiscussions, name) {
      /**
       * @param {undefined} name
       * @param {!Array} measure
       * @param {boolean} isOuter
       * @param {?} currentMargin
       * @return {?}
       */
      function getWH(name, measure, isOuter, currentMargin) {
        return $.each(context, function() {
          /** @type {number} */
          measure = measure - (parseFloat($.css(name, "padding" + this)) || 0);
          if (isOuter) {
            /** @type {number} */
            measure = measure - (parseFloat($.css(name, "border" + this + "Width")) || 0);
          }
          if (currentMargin) {
            /** @type {number} */
            measure = measure - (parseFloat($.css(name, "margin" + this)) || 0);
          }
        }), measure;
      }
      /** @type {!Array} */
      var context = "Width" === name ? ["Left", "Right"] : ["Top", "Bottom"];
      var a = name.toLowerCase();
      var orig = {
        innerWidth : $.fn.innerWidth,
        innerHeight : $.fn.innerHeight,
        outerWidth : $.fn.outerWidth,
        outerHeight : $.fn.outerHeight
      };
      /**
       * @param {!Array} width
       * @return {?}
       */
      $.fn["inner" + name] = function(width) {
        return void 0 === width ? orig["inner" + name].call(this) : this.each(function() {
          $(this).css(a, getWH(this, width) + "px");
        });
      };
      /**
       * @param {?} width
       * @param {?} margin
       * @return {?}
       */
      $.fn["outer" + name] = function(width, margin) {
        return "number" != typeof width ? orig["outer" + name].call(this, width) : this.each(function() {
          $(this).css(a, getWH(this, width, true, margin) + "px");
        });
      };
    });
  }
  if (!$.fn.addBack) {
    /**
     * @param {!Object} selector
     * @return {?}
     */
    $.fn.addBack = function(selector) {
      return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
    };
  }
  if ($("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
    $.fn.removeData = function(fn) {
      return function(e) {
        return arguments.length ? fn.call(this, $.camelCase(e)) : fn.call(this);
      };
    }($.fn.removeData);
  }
  /** @type {boolean} */
  $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  $.fn.extend({
    focus : function(CropAreaRectangle) {
      return function(buffer, s) {
        return "number" == typeof buffer ? this.each(function() {
          var t = this;
          setTimeout(function() {
            $(t).focus();
            if (s) {
              s.call(t);
            }
          }, buffer);
        }) : CropAreaRectangle.apply(this, arguments);
      };
    }($.fn.focus),
    disableSelection : function() {
      /** @type {string} */
      var eventType = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function() {
        return this.bind(eventType + ".ui-disableSelection", function(event) {
          event.preventDefault();
        });
      };
    }(),
    enableSelection : function() {
      return this.unbind(".ui-disableSelection");
    },
    zIndex : function(value) {
      if (void 0 !== value) {
        return this.css("zIndex", value);
      }
      if (this.length) {
        var undefined;
        var value;
        var elem = $(this[0]);
        for (; elem.length && elem[0] !== document;) {
          if (undefined = elem.css("position"), ("absolute" === undefined || "relative" === undefined || "fixed" === undefined) && (value = parseInt(elem.css("zIndex"), 10), !isNaN(value) && 0 !== value)) {
            return value;
          }
          elem = elem.parent();
        }
      }
      return 0;
    }
  });
  $.ui.plugin = {
    add : function(type, obj, name) {
      var key;
      var a = $.ui[type].prototype;
      for (key in name) {
        a.plugins[key] = a.plugins[key] || [];
        a.plugins[key].push([obj, name[key]]);
      }
    },
    call : function(obj, type, value, fn) {
      var i;
      var values = obj.plugins[type];
      if (values && (fn || obj.element[0].parentNode && 11 !== obj.element[0].parentNode.nodeType)) {
        /** @type {number} */
        i = 0;
        for (; values.length > i; i++) {
          if (obj.options[values[i][0]]) {
            values[i][1].apply(obj.element, value);
          }
        }
      }
    }
  };
  /** @type {number} */
  var uuid = 0;
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = Array.prototype.slice;
  $.cleanData = function(origRelativeNext) {
    return function(checkSet) {
      var events;
      var elem;
      var i;
      /** @type {number} */
      i = 0;
      for (; null != (elem = checkSet[i]); i++) {
        try {
          events = $._data(elem, "events");
          if (events && events.remove) {
            $(elem).triggerHandler("remove");
          }
        } catch (o) {
        }
      }
      origRelativeNext(checkSet);
    };
  }($.cleanData);
  /**
   * @param {string} t
   * @param {!Function} i
   * @param {!Object} s
   * @return {?}
   */
  $.widget = function(t, i, s) {
    var n;
    var a;
    var o;
    var r;
    var h = {};
    var name = t.split(".")[0];
    return t = t.split(".")[1], n = name + "-" + t, s || (s = i, i = $.Widget), $.expr[":"][n.toLowerCase()] = function(t) {
      return !!$.data(t, n);
    }, $[name] = $[name] || {}, a = $[name][t], o = $[name][t] = function(e, t) {
      return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t);
    }, $.extend(o, a, {
      version : s.version,
      _proto : $.extend({}, s),
      _childConstructors : []
    }), r = new i, r.options = $.widget.extend({}, r.options), $.each(s, function(key, val) {
      return $.isFunction(val) ? void(h[key] = function() {
        /**
         * @return {?}
         */
        var e = function() {
          return i.prototype[key].apply(this, arguments);
        };
        /**
         * @param {undefined} exports
         * @return {?}
         */
        var n = function(exports) {
          return i.prototype[key].apply(this, exports);
        };
        return function() {
          var _ref12;
          var tmp = this._super;
          var __superApply = this._superApply;
          return this._super = e, this._superApply = n, _ref12 = val.apply(this, arguments), this._super = tmp, this._superApply = __superApply, _ref12;
        };
      }()) : void(h[key] = val);
    }), o.prototype = $.widget.extend(r, {
      widgetEventPrefix : a ? r.widgetEventPrefix || t : t
    }, h, {
      constructor : o,
      namespace : name,
      widgetName : t,
      widgetFullName : n
    }), a ? ($.each(a._childConstructors, function(canCreateDiscussions, child) {
      var childPrototype = child.prototype;
      $.widget(childPrototype.namespace + "." + childPrototype.widgetName, o, child._proto);
    }), delete a._childConstructors) : i._childConstructors.push(o), $.widget.bridge(t, o), o;
  };
  /**
   * @param {string} data
   * @return {?}
   */
  $.widget.extend = function(data) {
    var key;
    var value;
    /** @type {!Array<?>} */
    var input = slice.call(arguments, 1);
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var l = input.length;
    for (; l > i; i++) {
      for (key in input[i]) {
        value = input[i][key];
        if (input[i].hasOwnProperty(key) && void 0 !== value) {
          data[key] = $.isPlainObject(value) ? $.isPlainObject(data[key]) ? $.widget.extend({}, data[key], value) : $.widget.extend({}, value) : value;
        }
      }
    }
    return data;
  };
  /**
   * @param {string} name
   * @param {!Function} object
   * @return {undefined}
   */
  $.widget.bridge = function(name, object) {
    var type = object.prototype.widgetFullName || name;
    /**
     * @param {?} a
     * @return {?}
     */
    $.fn[name] = function(a) {
      /** @type {boolean} */
      var o = "string" == typeof a;
      /** @type {!Array<?>} */
      var r = slice.call(arguments, 1);
      var h = this;
      return a = !o && r.length ? $.widget.extend.apply(null, [a].concat(r)) : a, o ? this.each(function() {
        var i;
        var s = $.data(this, type);
        return "instance" === a ? (h = s, false) : s ? $.isFunction(s[a]) && "_" !== a.charAt(0) ? (i = s[a].apply(s, r), i !== s && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, false) : void 0) : $.error("no such method '" + a + "' for " + name + " widget instance") : $.error("cannot call methods on " + name + " prior to initialization; attempted to call method '" + a + "'");
      }) : this.each(function() {
        var t = $.data(this, type);
        if (t) {
          t.option(a || {});
          if (t._init) {
            t._init();
          }
        } else {
          $.data(this, type, new object(a, this));
        }
      }), h;
    };
  };
  /**
   * @return {undefined}
   */
  $.Widget = function() {
  };
  /** @type {!Array} */
  $.Widget._childConstructors = [];
  $.Widget.prototype = {
    widgetName : "widget",
    widgetEventPrefix : "",
    defaultElement : "<div>",
    options : {
      disabled : false,
      create : null
    },
    _createWidget : function(options, element) {
      element = $(element || this.defaultElement || this)[0];
      this.element = $(element);
      /** @type {number} */
      this.uuid = uuid++;
      /** @type {string} */
      this.eventNamespace = "." + this.widgetName + this.uuid;
      this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();
      if (element !== this) {
        $.data(element, this.widgetFullName, this);
        this._on(true, this.element, {
          remove : function(item) {
            if (item.target === element) {
              this.destroy();
            }
          }
        });
        this.document = $(element.style ? element.ownerDocument : element.document || element);
        this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
      }
      this._create();
      this._trigger("create", null, this._getCreateEventData());
      this._init();
    },
    _getCreateOptions : $.noop,
    _getCreateEventData : $.noop,
    _create : $.noop,
    _init : $.noop,
    destroy : function() {
      this._destroy();
      this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));
      this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
      this.bindings.unbind(this.eventNamespace);
      this.hoverable.removeClass("ui-state-hover");
      this.focusable.removeClass("ui-state-focus");
    },
    _destroy : $.noop,
    widget : function() {
      return this.element;
    },
    option : function(name, key) {
      var value;
      var opts;
      var j;
      /** @type {string} */
      var options = name;
      if (0 === arguments.length) {
        return $.widget.extend({}, this.options);
      }
      if ("string" == typeof name) {
        if (options = {}, value = name.split("."), name = value.shift(), value.length) {
          opts = options[name] = $.widget.extend({}, this.options[name]);
          /** @type {number} */
          j = 0;
          for (; value.length - 1 > j; j++) {
            opts[value[j]] = opts[value[j]] || {};
            opts = opts[value[j]];
          }
          if (name = value.pop(), 1 === arguments.length) {
            return void 0 === opts[name] ? null : opts[name];
          }
          /** @type {!Object} */
          opts[name] = key;
        } else {
          if (1 === arguments.length) {
            return void 0 === this.options[name] ? null : this.options[name];
          }
          /** @type {!Object} */
          options[name] = key;
        }
      }
      return this._setOptions(options), this;
    },
    _setOptions : function(options) {
      var key;
      for (key in options) {
        this._setOption(key, options[key]);
      }
      return this;
    },
    _setOption : function(key, value) {
      return this.options[key] = value, "disabled" === key && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!value), value && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
    },
    enable : function() {
      return this._setOptions({
        disabled : false
      });
    },
    disable : function() {
      return this._setOptions({
        disabled : true
      });
    },
    _on : function(t, i, name) {
      var n;
      var a = this;
      if ("boolean" != typeof t) {
        name = i;
        /** @type {string} */
        i = t;
        /** @type {boolean} */
        t = false;
      }
      if (name) {
        i = n = $(i);
        this.bindings = this.bindings.add(i);
      } else {
        name = i;
        i = this.element;
        n = this.widget();
      }
      $.each(name, function(_testModuleName, o) {
        /**
         * @return {?}
         */
        function r() {
          return t || a.options.disabled !== true && !$(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0;
        }
        if ("string" != typeof o) {
          r.guid = o.guid = o.guid || r.guid || $.guid++;
        }
        var match = _testModuleName.match(/^([\w:-]*)\s*(.*)$/);
        var b = match[1] + a.eventNamespace;
        var type = match[2];
        if (type) {
          n.delegate(type, b, r);
        } else {
          i.bind(b, r);
        }
      });
    },
    _off : function(ele, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
      ele.unbind(i).undelegate(i);
    },
    _delay : function(e, t) {
      /**
       * @return {?}
       */
      function handlerProxy() {
        return ("string" == typeof e ? a[e] : e).apply(a, arguments);
      }
      var a = this;
      return setTimeout(handlerProxy, t || 0);
    },
    _hoverable : function(element) {
      this.hoverable = this.hoverable.add(element);
      this._on(element, {
        mouseenter : function(event) {
          $(event.currentTarget).addClass("ui-state-hover");
        },
        mouseleave : function(event) {
          $(event.currentTarget).removeClass("ui-state-hover");
        }
      });
    },
    _focusable : function(element) {
      this.focusable = this.focusable.add(element);
      this._on(element, {
        focusin : function(event) {
          $(event.currentTarget).addClass("ui-state-focus");
        },
        focusout : function(event) {
          $(event.currentTarget).removeClass("ui-state-focus");
        }
      });
    },
    _trigger : function(type, event, data) {
      var prop;
      var orig;
      var callback = this.options[type];
      if (data = data || {}, event = $.Event(event), event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase(), event.target = this.element[0], orig = event.originalEvent) {
        for (prop in orig) {
          if (!(prop in event)) {
            event[prop] = orig[prop];
          }
        }
      }
      return this.element.trigger(event, data), !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
    }
  };
  $.each({
    show : "fadeIn",
    hide : "fadeOut"
  }, function(t, i) {
    /**
     * @param {!Object} s
     * @param {!Object} n
     * @param {!Function} a
     * @return {undefined}
     */
    $.Widget.prototype["_" + t] = function(s, n, a) {
      if ("string" == typeof n) {
        n = {
          effect : n
        };
      }
      var hasOptions;
      var r = n ? n === true || "number" == typeof n ? i : n.effect || i : t;
      n = n || {};
      if ("number" == typeof n) {
        n = {
          duration : n
        };
      }
      /** @type {boolean} */
      hasOptions = !$.isEmptyObject(n);
      /** @type {!Function} */
      n.complete = a;
      if (n.delay) {
        s.delay(n.delay);
      }
      if (hasOptions && $.effects && $.effects.effect[r]) {
        s[t](n);
      } else {
        if (r !== t && s[r]) {
          s[r](n.duration, n.easing, a);
        } else {
          s.queue(function(saveNotifs) {
            $(this)[t]();
            if (a) {
              a.call(s[0]);
            }
            saveNotifs();
          });
        }
      }
    };
  });
  $.widget;
  /** @type {boolean} */
  var a = false;
  $(document).mouseup(function() {
    /** @type {boolean} */
    a = false;
  });
  $.widget("ui.mouse", {
    version : "1.11.1",
    options : {
      cancel : "input,textarea,button,select,option",
      distance : 1,
      delay : 0
    },
    _mouseInit : function() {
      var that = this;
      this.element.bind("mousedown." + this.widgetName, function(event) {
        return that._mouseDown(event);
      }).bind("click." + this.widgetName, function(event) {
        return true === $.data(event.target, that.widgetName + ".preventClickEvent") ? ($.removeData(event.target, that.widgetName + ".preventClickEvent"), event.stopImmediatePropagation(), false) : void 0;
      });
      /** @type {boolean} */
      this.started = false;
    },
    _mouseDestroy : function() {
      this.element.unbind("." + this.widgetName);
      if (this._mouseMoveDelegate) {
        this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      }
    },
    _mouseDown : function(event) {
      if (!a) {
        if (this._mouseStarted) {
          this._mouseUp(event);
        }
        /** @type {!Event} */
        this._mouseDownEvent = event;
        var that = this;
        /** @type {boolean} */
        var isIE = 1 === event.which;
        var isIE8 = !("string" != typeof this.options.cancel || !event.target.nodeName) && $(event.target).closest(this.options.cancel).length;
        return !(isIE && !isIE8 && this._mouseCapture(event)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          /** @type {boolean} */
          that.mouseDelayMet = true;
        }, this.options.delay)), this._mouseDistanceMet(event) && this._mouseDelayMet(event) && (this._mouseStarted = this._mouseStart(event) !== false, !this._mouseStarted) ? (event.preventDefault(), true) : (true === $.data(event.target, this.widgetName + ".preventClickEvent") && $.removeData(event.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(event) {
          return that._mouseMove(event);
        }, this._mouseUpDelegate = function(event) {
          return that._mouseUp(event);
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), event.preventDefault(), a = true, true));
      }
    },
    _mouseMove : function(event) {
      return $.ui.ie && (!document.documentMode || 9 > document.documentMode) && !event.button ? this._mouseUp(event) : event.which ? this._mouseStarted ? (this._mouseDrag(event), event.preventDefault()) : (this._mouseDistanceMet(event) && this._mouseDelayMet(event) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, event) !== false, this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event)), !this._mouseStarted) : this._mouseUp(event);
    },
    _mouseUp : function(event) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = false, event.target === this._mouseDownEvent.target && $.data(event.target, this.widgetName + ".preventClickEvent", true), this._mouseStop(event)), a = false, false;
    },
    _mouseDistanceMet : function(event) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance;
    },
    _mouseDelayMet : function() {
      return this.mouseDelayMet;
    },
    _mouseStart : function() {
    },
    _mouseDrag : function() {
    },
    _mouseStop : function() {
    },
    _mouseCapture : function() {
      return true;
    }
  });
  $.widget("ui.slider", $.ui.mouse, {
    version : "1.11.1",
    widgetEventPrefix : "slide",
    options : {
      animate : false,
      distance : 0,
      max : 100,
      min : 0,
      orientation : "horizontal",
      range : false,
      step : 1,
      value : 0,
      values : null,
      change : null,
      slide : null,
      start : null,
      stop : null
    },
    numPages : 5,
    _create : function() {
      /** @type {boolean} */
      this._keySliding = false;
      /** @type {boolean} */
      this._mouseSliding = false;
      /** @type {boolean} */
      this._animateOff = true;
      /** @type {null} */
      this._handleIndex = null;
      this._detectOrientation();
      this._mouseInit();
      this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
      this._refresh();
      this._setOption("disabled", this.options.disabled);
      /** @type {boolean} */
      this._animateOff = false;
    },
    _refresh : function() {
      this._createRange();
      this._createHandles();
      this._setupEvents();
      this._refreshValue();
    },
    _createHandles : function() {
      var t;
      var d;
      var opts = this.options;
      var n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all");
      /** @type {string} */
      var a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>";
      /** @type {!Array} */
      var o = [];
      d = opts.values && opts.values.length || 1;
      if (n.length > d) {
        n.slice(d).remove();
        n = n.slice(0, d);
      }
      t = n.length;
      for (; d > t; t++) {
        o.push(a);
      }
      this.handles = n.add($(o.join("")).appendTo(this.element));
      this.handle = this.handles.eq(0);
      this.handles.each(function(t) {
        $(this).data("ui-slider-handle-index", t);
      });
    },
    _createRange : function() {
      var value = this.options;
      /** @type {string} */
      var classes = "";
      if (value.range) {
        if (value.range === true) {
          if (value.values) {
            if (value.values.length && 2 !== value.values.length) {
              /** @type {!Array} */
              value.values = [value.values[0], value.values[0]];
            } else {
              if ($.isArray(value.values)) {
                value.values = value.values.slice(0);
              }
            }
          } else {
            /** @type {!Array} */
            value.values = [this._valueMin(), this._valueMin()];
          }
        }
        if (this.range && this.range.length) {
          this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
            left : "",
            bottom : ""
          });
        } else {
          this.range = $("<div></div>").appendTo(this.element);
          /** @type {string} */
          classes = "ui-slider-range ui-widget-header ui-corner-all";
        }
        this.range.addClass(classes + ("min" === value.range || "max" === value.range ? " ui-slider-range-" + value.range : ""));
      } else {
        if (this.range) {
          this.range.remove();
        }
        /** @type {null} */
        this.range = null;
      }
    },
    _setupEvents : function() {
      this._off(this.handles);
      this._on(this.handles, this._handleEvents);
      this._hoverable(this.handles);
      this._focusable(this.handles);
    },
    _destroy : function() {
      this.handles.remove();
      if (this.range) {
        this.range.remove();
      }
      this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
      this._mouseDestroy();
    },
    _mouseCapture : function(event) {
      var position;
      var normValue;
      var currentTime;
      var closestHandle;
      var index;
      var allowed;
      var gamePos;
      var mouseOverHandle;
      var that = this;
      var o = this.options;
      return !o.disabled && (this.elementSize = {
        width : this.element.outerWidth(),
        height : this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), position = {
        x : event.pageX,
        y : event.pageY
      }, normValue = this._normValueFromMouse(position), currentTime = this._valueMax() - this._valueMin() + 1, this.handles.each(function(i) {
        /** @type {number} */
        var t = Math.abs(normValue - that.values(i));
        if (currentTime > t || currentTime === t && (i === that._lastChangedValue || that.values(i) === o.min)) {
          /** @type {number} */
          currentTime = t;
          closestHandle = $(this);
          /** @type {!Object} */
          index = i;
        }
      }), allowed = this._start(event, index), allowed !== false && (this._mouseSliding = true, this._handleIndex = index, closestHandle.addClass("ui-state-active").focus(), gamePos = closestHandle.offset(), mouseOverHandle = !$(event.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = mouseOverHandle ? {
        left : 0,
        top : 0
      } : {
        left : event.pageX - gamePos.left - closestHandle.width() / 2,
        top : event.pageY - gamePos.top - closestHandle.height() / 2 - (parseInt(closestHandle.css("borderTopWidth"), 10) || 0) - (parseInt(closestHandle.css("borderBottomWidth"), 10) || 0) + (parseInt(closestHandle.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(event, index, normValue), this._animateOff = true, true));
    },
    _mouseStart : function() {
      return true;
    },
    _mouseDrag : function(event) {
      var position = {
        x : event.pageX,
        y : event.pageY
      };
      var normValue = this._normValueFromMouse(position);
      return this._slide(event, this._handleIndex, normValue), false;
    },
    _mouseStop : function(event) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = false, this._stop(event, this._handleIndex), this._change(event, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = false, false;
    },
    _detectOrientation : function() {
      /** @type {string} */
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    },
    _normValueFromMouse : function(position) {
      var pixelTotal;
      var pixelMouse;
      var percentMouse;
      var valueTotal;
      var valueMouse;
      return "horizontal" === this.orientation ? (pixelTotal = this.elementSize.width, pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (pixelTotal = this.elementSize.height, pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), percentMouse = pixelMouse / pixelTotal, percentMouse > 1 && (percentMouse = 1), 0 > percentMouse && (percentMouse = 0), "vertical" === this.orientation && (percentMouse = 
      1 - percentMouse), valueTotal = this._valueMax() - this._valueMin(), valueMouse = this._valueMin() + percentMouse * valueTotal, this._trimAlignValue(valueMouse);
    },
    _start : function(event, index) {
      var uiHash = {
        handle : this.handles[index],
        value : this.value()
      };
      return this.options.values && this.options.values.length && (uiHash.value = this.values(index), uiHash.values = this.values()), this._trigger("start", event, uiHash);
    },
    _slide : function(event, index, val) {
      var result;
      var newVal;
      var allowed;
      if (this.options.values && this.options.values.length) {
        result = this.values(index ? 0 : 1);
        if (2 === this.options.values.length && this.options.range === true && (0 === index && val > result || 1 === index && result > val)) {
          val = result;
        }
        if (val !== this.values(index)) {
          newVal = this.values();
          /** @type {number} */
          newVal[index] = val;
          allowed = this._trigger("slide", event, {
            handle : this.handles[index],
            value : val,
            values : newVal
          });
          result = this.values(index ? 0 : 1);
          if (allowed !== false) {
            this.values(index, val);
          }
        }
      } else {
        if (val !== this.value()) {
          allowed = this._trigger("slide", event, {
            handle : this.handles[index],
            value : val
          });
          if (allowed !== false) {
            this.value(val);
          }
        }
      }
    },
    _stop : function(event, index) {
      var uiHash = {
        handle : this.handles[index],
        value : this.value()
      };
      if (this.options.values && this.options.values.length) {
        uiHash.value = this.values(index);
        uiHash.values = this.values();
      }
      this._trigger("stop", event, uiHash);
    },
    _change : function(args, index) {
      if (!this._keySliding && !this._mouseSliding) {
        var uiHash = {
          handle : this.handles[index],
          value : this.value()
        };
        if (this.options.values && this.options.values.length) {
          uiHash.value = this.values(index);
          uiHash.values = this.values();
        }
        /** @type {!Object} */
        this._lastChangedValue = index;
        this._trigger("change", args, uiHash);
      }
    },
    value : function(name) {
      return arguments.length ? (this.options.value = this._trimAlignValue(name), this._refreshValue(), void this._change(null, 0)) : this._value();
    },
    values : function(type, val) {
      var vals;
      var newValues;
      var i;
      if (arguments.length > 1) {
        return this.options.values[type] = this._trimAlignValue(val), this._refreshValue(), void this._change(null, type);
      }
      if (!arguments.length) {
        return this._values();
      }
      if (!$.isArray(arguments[0])) {
        return this.options.values && this.options.values.length ? this._values(type) : this.value();
      }
      vals = this.options.values;
      newValues = arguments[0];
      /** @type {number} */
      i = 0;
      for (; vals.length > i; i = i + 1) {
        vals[i] = this._trimAlignValue(newValues[i]);
        this._change(null, i);
      }
      this._refreshValue();
    },
    _setOption : function(key, undefined) {
      var i;
      /** @type {number} */
      var countRep = 0;
      switch("range" === key && this.options.range === true && ("min" === undefined ? (this.options.value = this._values(0), this.options.values = null) : "max" === undefined && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), $.isArray(this.options.values) && (countRep = this.options.values.length), "disabled" === key && this.element.toggleClass("ui-state-disabled", !!undefined), this._super(key, undefined), key) {
        case "orientation":
          this._detectOrientation();
          this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
          this._refreshValue();
          this.handles.css("horizontal" === undefined ? "bottom" : "left", "");
          break;
        case "value":
          /** @type {boolean} */
          this._animateOff = true;
          this._refreshValue();
          this._change(null, 0);
          /** @type {boolean} */
          this._animateOff = false;
          break;
        case "values":
          /** @type {boolean} */
          this._animateOff = true;
          this._refreshValue();
          /** @type {number} */
          i = 0;
          for (; countRep > i; i = i + 1) {
            this._change(null, i);
          }
          /** @type {boolean} */
          this._animateOff = false;
          break;
        case "min":
        case "max":
          /** @type {boolean} */
          this._animateOff = true;
          this._refreshValue();
          /** @type {boolean} */
          this._animateOff = false;
          break;
        case "range":
          /** @type {boolean} */
          this._animateOff = true;
          this._refresh();
          /** @type {boolean} */
          this._animateOff = false;
      }
    },
    _value : function() {
      var val = this.options.value;
      return val = this._trimAlignValue(val);
    },
    _values : function(key) {
      var val;
      var vals;
      var i;
      if (arguments.length) {
        return val = this.options.values[key], val = this._trimAlignValue(val);
      }
      if (this.options.values && this.options.values.length) {
        vals = this.options.values.slice();
        /** @type {number} */
        i = 0;
        for (; vals.length > i; i = i + 1) {
          vals[i] = this._trimAlignValue(vals[i]);
        }
        return vals;
      }
      return [];
    },
    _trimAlignValue : function(val) {
      if (this._valueMin() >= val) {
        return this._valueMin();
      }
      if (val >= this._valueMax()) {
        return this._valueMax();
      }
      var step = this.options.step > 0 ? this.options.step : 1;
      /** @type {number} */
      var valModStep = (val - this._valueMin()) % step;
      /** @type {number} */
      var alignValue = val - valModStep;
      return 2 * Math.abs(valModStep) >= step && (alignValue = alignValue + (valModStep > 0 ? step : -step)), parseFloat(alignValue.toFixed(5));
    },
    _valueMin : function() {
      return this.options.min;
    },
    _valueMax : function() {
      return this.options.max;
    },
    _refreshValue : function() {
      var rectangleWidth;
      var width;
      var value;
      var valueMin;
      var valueMax;
      var r = this.options.range;
      var options = this.options;
      var self = this;
      var animate = !this._animateOff && options.animate;
      var style = {};
      if (this.options.values && this.options.values.length) {
        this.handles.each(function(s) {
          /** @type {number} */
          width = 100 * ((self.values(s) - self._valueMin()) / (self._valueMax() - self._valueMin()));
          /** @type {string} */
          style["horizontal" === self.orientation ? "left" : "bottom"] = width + "%";
          $(this).stop(1, 1)[animate ? "animate" : "css"](style, options.animate);
          if (self.options.range === true) {
            if ("horizontal" === self.orientation) {
              if (0 === s) {
                self.range.stop(1, 1)[animate ? "animate" : "css"]({
                  left : width + "%"
                }, options.animate);
              }
              if (1 === s) {
                self.range[animate ? "animate" : "css"]({
                  width : width - rectangleWidth + "%"
                }, {
                  queue : false,
                  duration : options.animate
                });
              }
            } else {
              if (0 === s) {
                self.range.stop(1, 1)[animate ? "animate" : "css"]({
                  bottom : width + "%"
                }, options.animate);
              }
              if (1 === s) {
                self.range[animate ? "animate" : "css"]({
                  height : width - rectangleWidth + "%"
                }, {
                  queue : false,
                  duration : options.animate
                });
              }
            }
          }
          /** @type {number} */
          rectangleWidth = width;
        });
      } else {
        value = this.value();
        valueMin = this._valueMin();
        valueMax = this._valueMax();
        /** @type {number} */
        width = valueMax !== valueMin ? 100 * ((value - valueMin) / (valueMax - valueMin)) : 0;
        style["horizontal" === this.orientation ? "left" : "bottom"] = width + "%";
        this.handle.stop(1, 1)[animate ? "animate" : "css"](style, options.animate);
        if ("min" === r && "horizontal" === this.orientation) {
          this.range.stop(1, 1)[animate ? "animate" : "css"]({
            width : width + "%"
          }, options.animate);
        }
        if ("max" === r && "horizontal" === this.orientation) {
          this.range[animate ? "animate" : "css"]({
            width : 100 - width + "%"
          }, {
            queue : false,
            duration : options.animate
          });
        }
        if ("min" === r && "vertical" === this.orientation) {
          this.range.stop(1, 1)[animate ? "animate" : "css"]({
            height : width + "%"
          }, options.animate);
        }
        if ("max" === r && "vertical" === this.orientation) {
          this.range[animate ? "animate" : "css"]({
            height : 100 - width + "%"
          }, {
            queue : false,
            duration : options.animate
          });
        }
      }
    },
    _handleEvents : {
      keydown : function(event) {
        var allowed;
        var curVal;
        var newVal;
        var step;
        var index = $(event.target).data("ui-slider-handle-index");
        switch(event.keyCode) {
          case $.ui.keyCode.HOME:
          case $.ui.keyCode.END:
          case $.ui.keyCode.PAGE_UP:
          case $.ui.keyCode.PAGE_DOWN:
          case $.ui.keyCode.UP:
          case $.ui.keyCode.RIGHT:
          case $.ui.keyCode.DOWN:
          case $.ui.keyCode.LEFT:
            if (event.preventDefault(), !this._keySliding && (this._keySliding = true, $(event.target).addClass("ui-state-active"), allowed = this._start(event, index), allowed === false)) {
              return;
            }
        }
        switch(step = this.options.step, curVal = newVal = this.options.values && this.options.values.length ? this.values(index) : this.value(), event.keyCode) {
          case $.ui.keyCode.HOME:
            newVal = this._valueMin();
            break;
          case $.ui.keyCode.END:
            newVal = this._valueMax();
            break;
          case $.ui.keyCode.PAGE_UP:
            newVal = this._trimAlignValue(curVal + (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case $.ui.keyCode.PAGE_DOWN:
            newVal = this._trimAlignValue(curVal - (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case $.ui.keyCode.UP:
          case $.ui.keyCode.RIGHT:
            if (curVal === this._valueMax()) {
              return;
            }
            newVal = this._trimAlignValue(curVal + step);
            break;
          case $.ui.keyCode.DOWN:
          case $.ui.keyCode.LEFT:
            if (curVal === this._valueMin()) {
              return;
            }
            newVal = this._trimAlignValue(curVal - step);
        }
        this._slide(event, index, newVal);
      },
      keyup : function(event) {
        var index = $(event.target).data("ui-slider-handle-index");
        if (this._keySliding) {
          /** @type {boolean} */
          this._keySliding = false;
          this._stop(event, index);
          this._change(event, index);
          $(event.target).removeClass("ui-state-active");
        }
      }
    }
  });
});
jQuery(function($) {
  if ("undefined" == typeof woocommerce_price_slider_params) {
    return false;
  }
  $("input#min_price, input#max_price").hide();
  $(".price_slider, .price_label").show();
  var min = $(".price_slider_amount #min_price").data("min");
  var max = $(".price_slider_amount #max_price").data("max");
  /** @type {number} */
  current_min_price = parseInt(min, 10);
  /** @type {number} */
  current_max_price = parseInt(max, 10);
  if (woocommerce_price_slider_params.min_price) {
    /** @type {number} */
    current_min_price = parseInt(woocommerce_price_slider_params.min_price, 10);
  }
  if (woocommerce_price_slider_params.max_price) {
    /** @type {number} */
    current_max_price = parseInt(woocommerce_price_slider_params.max_price, 10);
  }
  $("body").bind("price_slider_create price_slider_slide", function(canCreateDiscussions, c, last) {
    if ("left" === woocommerce_price_slider_params.currency_pos) {
      $(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + c);
      $(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + last);
    } else {
      if ("left_space" === woocommerce_price_slider_params.currency_pos) {
        $(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + " " + c);
        $(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + " " + last);
      } else {
        if ("right" === woocommerce_price_slider_params.currency_pos) {
          $(".price_slider_amount span.from").html(c + woocommerce_price_slider_params.currency_symbol);
          $(".price_slider_amount span.to").html(last + woocommerce_price_slider_params.currency_symbol);
        } else {
          if ("right_space" === woocommerce_price_slider_params.currency_pos) {
            $(".price_slider_amount span.from").html(c + " " + woocommerce_price_slider_params.currency_symbol);
            $(".price_slider_amount span.to").html(last + " " + woocommerce_price_slider_params.currency_symbol);
          }
        }
      }
    }
    $("body").trigger("price_slider_updated", c, last);
  });
  $(".price_slider").slider({
    range : true,
    animate : true,
    min : min,
    max : max,
    values : [current_min_price, current_max_price],
    create : function() {
      $(".price_slider_amount #min_price").val(current_min_price);
      $(".price_slider_amount #max_price").val(current_max_price);
      $("body").trigger("price_slider_create", [current_min_price, current_max_price]);
    },
    slide : function(e, f) {
      $("input#min_price").val(f.values[0]);
      $("input#max_price").val(f.values[1]);
      $("body").trigger("price_slider_slide", [f.values[0], f.values[1]]);
    },
    change : function(p2, p) {
      $("body").trigger("price_slider_change", [p.values[0], p.values[1]]);
    }
  });
});
!function(factory) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], factory);
  } else {
    factory("object" == typeof exports ? require("jquery") : jQuery);
  }
}(function($) {
  /**
   * @param {string} value
   * @return {?}
   */
  function fn(value) {
    return config.raw ? value : encodeURIComponent(value);
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function get(value) {
    return fn(config.json ? JSON.stringify(value) : String(value));
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function parseCookieValue(s) {
    if (0 === s.indexOf('"')) {
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    }
    try {
      return s = decodeURIComponent(s.replace(pattern, " ")), config.json ? JSON.parse(s) : s;
    } catch (n) {
    }
  }
  /**
   * @param {string} s
   * @param {!Object} converter
   * @return {?}
   */
  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }
  /** @type {!RegExp} */
  var pattern = /\+/g;
  /** @type {function(boolean, !Object, !Object): ?} */
  var config = $.cookie = function(val, name, options) {
    if (arguments.length > 1 && !$.isFunction(name)) {
      if (options = $.extend({}, config.defaults, options), "number" == typeof options.expires) {
        var days = options.expires;
        /** @type {!Date} */
        var date = options.expires = new Date;
        date.setTime(+date + 864e5 * days);
      }
      return document.cookie = [fn(val), "=", get(name), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("");
    }
    /** @type {(undefined|{})} */
    var result = val ? void 0 : {};
    /** @type {!Array} */
    var requestedModules = document.cookie ? document.cookie.split("; ") : [];
    /** @type {number} */
    var m = 0;
    /** @type {number} */
    var reqmodlen = requestedModules.length;
    for (; m < reqmodlen; m++) {
      var headersAndBody = requestedModules[m].split("=");
      var key = decode(headersAndBody.shift());
      var cookie = headersAndBody.join("=");
      if (val && val === key) {
        result = read(cookie, name);
        break;
      }
      if (!(val || void 0 === (cookie = read(cookie)))) {
        result[key] = cookie;
      }
    }
    return result;
  };
  config.defaults = {};
  /**
   * @param {boolean} name
   * @param {!Object} options
   * @return {?}
   */
  $.removeCookie = function(name, options) {
    return void 0 !== $.cookie(name) && ($.cookie(name, "", $.extend({}, options, {
      expires : -1
    })), !$.cookie(name));
  };
});
!function(factory) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(jQuery);
  }
}(function($) {
  /**
   * @param {!Object} options
   * @return {?}
   */
  $.fn.tweet = function(options) {
    /**
     * @param {string} v
     * @param {!Object} data
     * @return {?}
     */
    function t(v, data) {
      if ("string" == typeof v) {
        /** @type {string} */
        var result = v;
        var i;
        for (i in data) {
          var val = data[i];
          /** @type {string} */
          result = result.replace(new RegExp("{" + i + "}", "g"), null === val ? "" : val);
        }
        return result;
      }
      return v(data);
    }
    /**
     * @param {!RegExp} node
     * @param {string} value
     * @return {?}
     */
    function replacer(node, value) {
      return function() {
        /** @type {!Array} */
        var res = [];
        return this.each(function() {
          res.push(this.replace(node, value));
        }), $(res);
      };
    }
    /**
     * @param {string} s
     * @return {?}
     */
    function escapeHTML(s) {
      return s.replace(/</g, "&lt;").replace(/>/g, "^&gt;");
    }
    /**
     * @param {string} text
     * @param {!NodeList} entities
     * @return {?}
     */
    function linkURLs(text, entities) {
      return text.replace(r, function(match) {
        var url = /^[a-z]+:/i.test(match) ? match : "http://" + match;
        /** @type {string} */
        var text = match;
        /** @type {number} */
        var i = 0;
        for (; i < entities.length; ++i) {
          var entity = entities[i];
          if (entity.url == url && entity.expanded_url) {
            url = entity.expanded_url;
            text = entity.display_url;
            break;
          }
        }
        return '<a href="' + escapeHTML(url) + '">' + escapeHTML(text) + "</a>";
      });
    }
    /**
     * @param {string} date_str
     * @return {?}
     */
    function parse_date(date_str) {
      return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function relative_time(date) {
      var dEndDateTime = arguments.length > 1 ? arguments[1] : new Date;
      /** @type {number} */
      var r = parseInt((dEndDateTime.getTime() - date) / 1e3, 10);
      /** @type {string} */
      var th_field = "";
      return th_field = r < 1 ? "just now" : r < 60 ? r + " seconds ago" : r < 120 ? "about a minute ago" : r < 2700 ? "about " + parseInt(r / 60, 10).toString() + " minutes ago" : r < 7200 ? "about an hour ago" : r < 86400 ? "about " + parseInt(r / 3600, 10).toString() + " hours ago" : r < 172800 ? "about a day ago" : "about " + parseInt(r / 86400, 10).toString() + " days ago";
    }
    /**
     * @param {string} text
     * @return {?}
     */
    function build_auto_join_text(text) {
      return text.match(/^(@([A-Za-z0-9-_]+)) .*/i) ? s.auto_join_text_reply : text.match(r) ? s.auto_join_text_url : text.match(/^((\w+ed)|just) .*/im) ? s.auto_join_text_ed : text.match(/^(\w*ing) .*/i) ? s.auto_join_text_ing : s.auto_join_text_default;
    }
    /**
     * @return {?}
     */
    function init() {
      var DEFAULT_RPP = (s.modpath, null === s.fetch ? s.count : s.fetch);
      var value = {
        include_entities : 1
      };
      if (s.list) {
        return {
          host : s.twitter_api_url,
          url : "/1.1/lists/statuses.json",
          parameters : $.extend({}, value, {
            list_id : s.list_id,
            slug : s.list,
            owner_screen_name : s.username,
            page : s.page,
            count : DEFAULT_RPP,
            include_rts : s.retweets ? 1 : 0
          })
        };
      }
      if (s.favorites) {
        return {
          host : s.twitter_api_url,
          url : "/1.1/favorites/list.json",
          parameters : $.extend({}, value, {
            list_id : s.list_id,
            screen_name : s.username,
            page : s.page,
            count : DEFAULT_RPP
          })
        };
      }
      if (null === s.query && 1 === s.username.length) {
        return {
          host : s.twitter_api_url,
          url : "/1.1/statuses/user_timeline.json",
          parameters : $.extend({}, value, {
            screen_name : s.username,
            page : s.page,
            count : DEFAULT_RPP,
            include_rts : s.retweets ? 1 : 0
          })
        };
      }
      var queryStr2 = s.query || "from:" + s.username.join(" OR from:");
      return {
        host : s.twitter_search_url,
        url : "/1.1/search/tweets.json",
        parameters : $.extend({}, value, {
          q : queryStr2,
          rpp : DEFAULT_RPP
        })
      };
    }
    /**
     * @param {!Object} item
     * @param {boolean} secure
     * @return {?}
     */
    function extract_avatar_url(item, secure) {
      return secure ? "user" in item ? item.user.profile_image_url_https : extract_avatar_url(item, false).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/") : item.profile_image_url || item.user.profile_image_url;
    }
    /**
     * @param {!Object} item
     * @return {?}
     */
    function extract_template_data(item) {
      var o = {};
      return o.item = item, o.source = item.source, o.name = item.from_user_name || item.user.name, o.screen_name = item.from_user || item.user.screen_name, o.avatar_size = s.avatar_size, o.avatar_url = extract_avatar_url(item, "https:" === document.location.protocol), o.retweet = "undefined" != typeof item.retweeted_status, o.tweet_time = parse_date(item.created_at), o.join_text = "auto" == s.join_text ? build_auto_join_text(item.text) : s.join_text, o.tweet_id = item.id_str, o.twitter_base = "http://" + 
      s.twitter_url + "/", o.user_url = o.twitter_base + o.screen_name, o.tweet_url = o.user_url + "/status/" + o.tweet_id, o.reply_url = o.twitter_base + "intent/tweet?in_reply_to=" + o.tweet_id, o.retweet_url = o.twitter_base + "intent/retweet?tweet_id=" + o.tweet_id, o.favorite_url = o.twitter_base + "intent/favorite?tweet_id=" + o.tweet_id, o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name, o.tweet_relative_time = relative_time(o.tweet_time), o.entities = item.entities ? 
      (item.entities.urls || []).concat(item.entities.media || []) : [], o.tweet_raw_text = o.retweet ? "RT @" + o.retweeted_screen_name + " " + item.retweeted_status.text : item.text, o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0], o.tweet_text_fancy = $([o.tweet_text]).makeHeart()[0], o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o), o.join = s.join_text ? t(' <span class="tweet_join">{join_text}</span> ', o) : " ", o.avatar = o.avatar_size ? 
      t('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', o) : "", o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o), o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o), o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o), o.retweet_action = 
      t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o), o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o), o;
    }
    var s = $.extend({
      modpath : "/twitter/",
      username : null,
      list_id : null,
      list : null,
      favorites : false,
      query : null,
      avatar_size : null,
      count : 3,
      fetch : null,
      page : 1,
      retweets : true,
      intro_text : null,
      outro_text : null,
      join_text : null,
      auto_join_text_default : "i said,",
      auto_join_text_ed : "i",
      auto_join_text_ing : "i am",
      auto_join_text_reply : "i replied to",
      auto_join_text_url : "i was looking at",
      loading_text : null,
      refresh_interval : null,
      twitter_url : "twitter.com",
      twitter_api_url : "api.twitter.com",
      twitter_search_url : "api.twitter.com",
      template : "{avatar}{time}{join}{text}",
      comparator : function(tweet1, tweet2) {
        return tweet2.tweet_time - tweet1.tweet_time;
      },
      filter : function(type) {
        return true;
      }
    }, options);
    /** @type {!RegExp} */
    var r = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi;
    return $.extend({
      tweet : {
        t : t
      }
    }), $.fn.extend({
      linkUser : replacer(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + s.twitter_url + '/$2">$2</a>'),
      linkHash : replacer(/(?:^| )[#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="http://' + s.twitter_search_url + "/search?q=&tag=$1&lang=all" + (s.username && 1 == s.username.length && !s.list ? "&from=" + s.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'),
      makeHeart : replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
    }), this.each(function(canCreateDiscussions, obj) {
      var n = $('<ul class="tweet_list">');
      /** @type {string} */
      var showCrudsButton = '<p class="tweet_intro">' + s.intro_text + "</p>";
      /** @type {string} */
      var options = '<p class="tweet_outro">' + s.outro_text + "</p>";
      var linkCont = $('<p class="loading">' + s.loading_text + "</p>");
      if (s.username && "string" == typeof s.username) {
        /** @type {!Array} */
        s.username = [s.username];
      }
      $(obj).unbind("tweet:load").bind("tweet:load", function() {
        if (s.loading_text) {
          $(obj).empty().append(linkCont);
        }
        $.ajax({
          dataType : "json",
          type : "post",
          async : false,
          url : s.modpath || "/twitter/",
          data : {
            request : init()
          },
          success : function(name, type) {
            if (name.message) {
              console.log(name.message);
            }
            var data = name.response;
            $(obj).empty().append(n);
            if (s.intro_text) {
              n.before(showCrudsButton);
            }
            n.empty();
            if (void 0 !== data.statuses) {
              resp = data.statuses;
            } else {
              if (void 0 !== data.results) {
                resp = data.results;
              } else {
                resp = data;
              }
            }
            var results = $.map(resp, extract_template_data);
            results = $.grep(results, s.filter).sort(s.comparator).slice(0, s.count);
            n.append($.map(results, function(f1) {
              return "<li>" + t(s.template, f1) + "</li>";
            }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");
            if (s.outro_text) {
              n.after(options);
            }
            $(obj).trigger("loaded").trigger(results ? "empty" : "full");
            if (s.refresh_interval) {
              window.setTimeout(function() {
                $(obj).trigger("tweet:load");
              }, 1E3 * s.refresh_interval);
            }
          }
        });
      }).trigger("tweet:load");
    });
  };
});
