var Kl = Object.create;
var vn = Object.defineProperty;
var Jl = Object.getOwnPropertyDescriptor;
var zl = Object.getOwnPropertyNames;
var Hl = Object.getPrototypeOf, Wl = Object.prototype.hasOwnProperty;
var u = (e, t) => vn(e, "name", { value: t, configurable: !0 }),
  Ar =
    ((e) =>
      typeof require != "undefined"
        ? require
        : typeof Proxy != "undefined"
        ? new Proxy(e, {
          get: (t, r) => (typeof require != "undefined" ? require : t)[r],
        })
        : e)(function (e) {
        if (typeof require != "undefined") {
          return require.apply(this, arguments);
        }
        throw new Error('Dynamic require of "' + e + '" is not supported');
      });
var An = (e, t) => () => (e && (t = e(e = 0)), t);
var W = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Do = (e, t) => {
    for (var r in t) vn(e, r, { get: t[r], enumerable: !0 });
  },
  Ql = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function") {
      for (let o of zl(t)) {
        !Wl.call(e, o) && o !== r &&
          vn(e, o, {
            get: () => t[o],
            enumerable: !(n = Jl(t, o)) || n.enumerable,
          });
      }
    }
    return e;
  };
var ee = (
  e,
  t,
  r,
) => (r = e != null ? Kl(Hl(e)) : {},
  Ql(
    t || !e || !e.__esModule
      ? vn(r, "default", { value: e, enumerable: !0 })
      : r,
    e,
  ));
function q(e) {
  return () => e;
}
function De() {
  return w;
}
var Yl,
  w,
  f = An(() => {
    "use strict";
    u(q, "noop");
    Yl = Promise.resolve();
    u(De, "getProcess");
    w = {
      abort: q(void 0),
      addListener: q(De()),
      allowedNodeEnvironmentFlags: new Set(),
      arch: "x64",
      argv: ["/bin/node"],
      argv0: "node",
      chdir: q(void 0),
      config: {
        target_defaults: {
          cflags: [],
          default_configuration: "",
          defines: [],
          include_dirs: [],
          libraries: [],
        },
        variables: {
          clang: 0,
          host_arch: "x64",
          node_install_npm: !1,
          node_install_waf: !1,
          node_prefix: "",
          node_shared_openssl: !1,
          node_shared_v8: !1,
          node_shared_zlib: !1,
          node_use_dtrace: !1,
          node_use_etw: !1,
          node_use_openssl: !1,
          target_arch: "x64",
          v8_no_strict_aliasing: 0,
          v8_use_snapshot: !1,
          visibility: "",
        },
      },
      connected: !1,
      cpuUsage: () => ({ user: 0, system: 0 }),
      cwd: () => "/",
      debugPort: 0,
      disconnect: q(void 0),
      domain: {
        run: q(void 0),
        add: q(void 0),
        remove: q(void 0),
        bind: q(void 0),
        intercept: q(void 0),
        ...De(),
      },
      emit: q(De()),
      emitWarning: q(void 0),
      env: {},
      eventNames: () => [],
      execArgv: [],
      execPath: "/",
      exit: q(void 0),
      features: {
        inspector: !1,
        debug: !1,
        uv: !1,
        ipv6: !1,
        tls_alpn: !1,
        tls_sni: !1,
        tls_ocsp: !1,
        tls: !1,
      },
      getMaxListeners: q(0),
      getegid: q(0),
      geteuid: q(0),
      getgid: q(0),
      getgroups: q([]),
      getuid: q(0),
      hasUncaughtExceptionCaptureCallback: q(!1),
      hrtime: q([0, 0]),
      platform: "linux",
      kill: q(!0),
      listenerCount: q(0),
      listeners: q([]),
      memoryUsage: q({
        arrayBuffers: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0,
        rss: 0,
      }),
      nextTick: (e, ...t) => {
        Yl.then(() => e(...t)).catch((r) => {
          setTimeout(() => {
            throw r;
          }, 0);
        });
      },
      off: q(De()),
      on: q(De()),
      once: q(De()),
      openStdin: q({}),
      pid: 0,
      ppid: 0,
      prependListener: q(De()),
      prependOnceListener: q(De()),
      rawListeners: q([]),
      release: { name: "node" },
      removeAllListeners: q(De()),
      removeListener: q(De()),
      resourceUsage: q({
        fsRead: 0,
        fsWrite: 0,
        involuntaryContextSwitches: 0,
        ipcReceived: 0,
        ipcSent: 0,
        majorPageFault: 0,
        maxRSS: 0,
        minorPageFault: 0,
        sharedMemorySize: 0,
        signalsCount: 0,
        swappedOut: 0,
        systemCPUTime: 0,
        unsharedDataSize: 0,
        unsharedStackSize: 0,
        userCPUTime: 0,
        voluntaryContextSwitches: 0,
      }),
      setMaxListeners: q(De()),
      setUncaughtExceptionCaptureCallback: q(void 0),
      setegid: q(void 0),
      seteuid: q(void 0),
      setgid: q(void 0),
      setgroups: q(void 0),
      setuid: q(void 0),
      stderr: { fd: 2 },
      stdin: { fd: 0 },
      stdout: { fd: 1 },
      title: "node",
      traceDeprecation: !1,
      umask: q(0),
      uptime: q(0),
      version: "",
      versions: {
        http_parser: "",
        node: "",
        v8: "",
        ares: "",
        uv: "",
        zlib: "",
        modules: "",
        openssl: "",
      },
    };
  });
var E,
  m = An(() => {
    "use strict";
    E = u(() => {}, "fn");
    E.prototype = E;
  });
var Bs = W((Kt) => {
  "use strict";
  d();
  f();
  m();
  var Ms = u(
      (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      "q",
    ),
    Zl = Ms((e) => {
      "use strict";
      e.byteLength = c, e.toByteArray = p, e.fromByteArray = b;
      var t = [],
        r = [],
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, s = o.length; i < s; ++i) t[i] = o[i], r[o.charCodeAt(i)] = i;
      var i, s;
      r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63;
      function a(v) {
        var h = v.length;
        if (h % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var A = v.indexOf("=");
        A === -1 && (A = h);
        var O = A === h ? 0 : 4 - A % 4;
        return [A, O];
      }
      u(a, "j");
      function c(v) {
        var h = a(v), A = h[0], O = h[1];
        return (A + O) * 3 / 4 - O;
      }
      u(c, "sr");
      function l(v, h, A) {
        return (h + A) * 3 / 4 - A;
      }
      u(l, "lr");
      function p(v) {
        var h,
          A = a(v),
          O = A[0],
          T = A[1],
          M = new n(l(v, O, T)),
          P = 0,
          S = T > 0 ? O - 4 : O,
          _;
        for (_ = 0; _ < S; _ += 4) {
          h = r[v.charCodeAt(_)] << 18 | r[v.charCodeAt(_ + 1)] << 12 |
            r[v.charCodeAt(_ + 2)] << 6 | r[v.charCodeAt(_ + 3)],
            M[P++] = h >> 16 & 255,
            M[P++] = h >> 8 & 255,
            M[P++] = h & 255;
        }
        return T === 2 &&
          (h = r[v.charCodeAt(_)] << 2 | r[v.charCodeAt(_ + 1)] >> 4,
            M[P++] = h & 255),
          T === 1 &&
          (h = r[v.charCodeAt(_)] << 10 | r[v.charCodeAt(_ + 1)] << 4 |
            r[v.charCodeAt(_ + 2)] >> 2,
            M[P++] = h >> 8 & 255,
            M[P++] = h & 255),
          M;
      }
      u(p, "ar");
      function g(v) {
        return t[v >> 18 & 63] + t[v >> 12 & 63] + t[v >> 6 & 63] + t[v & 63];
      }
      u(g, "yr");
      function y(v, h, A) {
        for (var O, T = [], M = h; M < A; M += 3) {
          O = (v[M] << 16 & 16711680) + (v[M + 1] << 8 & 65280) +
            (v[M + 2] & 255), T.push(g(O));
        }
        return T.join("");
      }
      u(y, "wr");
      function b(v) {
        for (
          var h, A = v.length, O = A % 3, T = [], M = 16383, P = 0, S = A - O;
          P < S;
          P += M
        ) T.push(y(v, P, P + M > S ? S : P + M));
        return O === 1
          ? (h = v[A - 1], T.push(t[h >> 2] + t[h << 4 & 63] + "=="))
          : O === 2 &&
            (h = (v[A - 2] << 8) + v[A - 1],
              T.push(t[h >> 10] + t[h >> 4 & 63] + t[h << 2 & 63] + "=")),
          T.join("");
      }
      u(b, "xr");
    }),
    Xl = Ms((e) => {
      e.read = function (t, r, n, o, i) {
        var s,
          a,
          c = i * 8 - o - 1,
          l = (1 << c) - 1,
          p = l >> 1,
          g = -7,
          y = n ? i - 1 : 0,
          b = n ? -1 : 1,
          v = t[r + y];
        for (
          y += b, s = v & (1 << -g) - 1, v >>= -g, g += c;
          g > 0;
          s = s * 256 + t[r + y], y += b, g -= 8
        );
        for (
          a = s & (1 << -g) - 1, s >>= -g, g += o;
          g > 0;
          a = a * 256 + t[r + y], y += b, g -= 8
        );
        if (s === 0) s = 1 - p;
        else {
          if (s === l) return a ? NaN : (v ? -1 : 1) * (1 / 0);
          a = a + Math.pow(2, o), s = s - p;
        }
        return (v ? -1 : 1) * a * Math.pow(2, s - o);
      },
        e.write = function (t, r, n, o, i, s) {
          var a,
            c,
            l,
            p = s * 8 - i - 1,
            g = (1 << p) - 1,
            y = g >> 1,
            b = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            v = o ? 0 : s - 1,
            h = o ? 1 : -1,
            A = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? (c = isNaN(r) ? 1 : 0, a = g)
                : (a = Math.floor(Math.log(r) / Math.LN2),
                  r * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2),
                  a + y >= 1 ? r += b / l : r += b * Math.pow(2, 1 - y),
                  r * l >= 2 && (a++, l /= 2),
                  a + y >= g
                    ? (c = 0, a = g)
                    : a + y >= 1
                    ? (c = (r * l - 1) * Math.pow(2, i), a = a + y)
                    : (c = r * Math.pow(2, y - 1) * Math.pow(2, i), a = 0));
            i >= 8;
            t[n + v] = c & 255, v += h, c /= 256, i -= 8
          );
          for (
            a = a << i | c, p += i;
            p > 0;
            t[n + v] = a & 255, v += h, a /= 256, p -= 8
          );
          t[n + v - h] |= A * 128;
        };
    }),
    ko = Zl(),
    Vt = Xl(),
    vs = typeof Symbol == "function" && typeof Symbol.for == "function"
      ? Symbol.for("nodejs.util.inspect.custom")
      : null;
  Kt.Buffer = C;
  Kt.SlowBuffer = ip;
  Kt.INSPECT_MAX_BYTES = 50;
  var Pn = 2147483647;
  Kt.kMaxLength = Pn;
  C.TYPED_ARRAY_SUPPORT = ep();
  !C.TYPED_ARRAY_SUPPORT && typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  function ep() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42;
    } catch (e) {
      return !1;
    }
  }
  u(ep, "Br");
  Object.defineProperty(C.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (C.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(C.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (C.isBuffer(this)) return this.byteOffset;
    },
  });
  function Ze(e) {
    if (e > Pn) {
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    }
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, C.prototype), t;
  }
  u(Ze, "d");
  function C(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string") {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      }
      return $o(e);
    }
    return Os(e, t, r);
  }
  u(C, "h");
  C.poolSize = 8192;
  function Os(e, t, r) {
    if (typeof e == "string") return rp(e, t);
    if (ArrayBuffer.isView(e)) return np(e);
    if (e == null) {
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e,
      );
    }
    if (
      Ge(e, ArrayBuffer) || e && Ge(e.buffer, ArrayBuffer) ||
      typeof SharedArrayBuffer < "u" &&
        (Ge(e, SharedArrayBuffer) || e && Ge(e.buffer, SharedArrayBuffer))
    ) return Cs(e, t, r);
    if (typeof e == "number") {
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    }
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return C.from(n, t, r);
    let o = op(e);
    if (o) return o;
    if (
      typeof Symbol < "u" && Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    ) return C.from(e[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e,
    );
  }
  u(Os, "Z");
  C.from = function (e, t, r) {
    return Os(e, t, r);
  };
  Object.setPrototypeOf(C.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(C, Uint8Array);
  function Ss(e) {
    if (typeof e != "number") {
      throw new TypeError('"size" argument must be of type number');
    }
    if (e < 0) {
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    }
  }
  u(Ss, "Q");
  function tp(e, t, r) {
    return Ss(e),
      e <= 0
        ? Ze(e)
        : t !== void 0
        ? typeof r == "string" ? Ze(e).fill(t, r) : Ze(e).fill(t)
        : Ze(e);
  }
  u(tp, "Er");
  C.alloc = function (e, t, r) {
    return tp(e, t, r);
  };
  function $o(e) {
    return Ss(e), Ze(e < 0 ? 0 : Lo(e) | 0);
  }
  u($o, "P");
  C.allocUnsafe = function (e) {
    return $o(e);
  };
  C.allocUnsafeSlow = function (e) {
    return $o(e);
  };
  function rp(e, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !C.isEncoding(t)) {
      throw new TypeError("Unknown encoding: " + t);
    }
    let r = Is(e, t) | 0, n = Ze(r), o = n.write(e, t);
    return o !== r && (n = n.slice(0, o)), n;
  }
  u(rp, "dr");
  function No(e) {
    let t = e.length < 0 ? 0 : Lo(e.length) | 0, r = Ze(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  u(No, "D");
  function np(e) {
    if (Ge(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return Cs(t.buffer, t.byteOffset, t.byteLength);
    }
    return No(e);
  }
  u(np, "gr");
  function Cs(e, t, r) {
    if (t < 0 || e.byteLength < t) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (e.byteLength < t + (r || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let n;
    return t === void 0 && r === void 0
      ? n = new Uint8Array(e)
      : r === void 0
      ? n = new Uint8Array(e, t)
      : n = new Uint8Array(e, t, r),
      Object.setPrototypeOf(n, C.prototype),
      n;
  }
  u(Cs, "$");
  function op(e) {
    if (C.isBuffer(e)) {
      let t = Lo(e.length) | 0, r = Ze(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0) {
      return typeof e.length != "number" || qo(e.length) ? Ze(0) : No(e);
    }
    if (e.type === "Buffer" && Array.isArray(e.data)) return No(e.data);
  }
  u(op, "mr");
  function Lo(e) {
    if (e >= Pn) {
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          Pn.toString(16) + " bytes",
      );
    }
    return e | 0;
  }
  u(Lo, "O");
  function ip(e) {
    return +e != e && (e = 0), C.alloc(+e);
  }
  u(ip, "Ir");
  C.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== C.prototype;
  };
  C.compare = function (e, t) {
    if (
      Ge(e, Uint8Array) && (e = C.from(e, e.offset, e.byteLength)),
        Ge(t, Uint8Array) && (t = C.from(t, t.offset, t.byteLength)),
        !C.isBuffer(e) || !C.isBuffer(t)
    ) {
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    }
    if (e === t) return 0;
    let r = e.length, n = t.length;
    for (let o = 0, i = Math.min(r, n); o < i; ++o) {
      if (e[o] !== t[o]) {
        r = e[o], n = t[o];
        break;
      }
    }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  C.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  C.concat = function (e, t) {
    if (!Array.isArray(e)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (e.length === 0) return C.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = C.allocUnsafe(t), o = 0;
    for (r = 0; r < e.length; ++r) {
      let i = e[r];
      if (Ge(i, Uint8Array)) {
        o + i.length > n.length
          ? (C.isBuffer(i) || (i = C.from(i)), i.copy(n, o))
          : Uint8Array.prototype.set.call(n, i, o);
      } else if (C.isBuffer(i)) i.copy(n, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += i.length;
    }
    return n;
  };
  function Is(e, t) {
    if (C.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || Ge(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string") {
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e,
      );
    }
    let r = e.length, n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let o = !1;
    for (;;) {
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return jo(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return Ls(e).length;
        default:
          if (o) return n ? -1 : jo(e).length;
          t = ("" + t).toLowerCase(), o = !0;
      }
    }
  }
  u(Is, "v");
  C.byteLength = Is;
  function sp(e, t, r) {
    let n = !1;
    if (
      (t === void 0 || t < 0) && (t = 0),
        t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        (r >>>= 0, t >>>= 0, r <= t)
    ) return "";
    for (e || (e = "utf8");;) {
      switch (e) {
        case "hex":
          return yp(this, t, r);
        case "utf8":
        case "utf-8":
          return _s(this, t, r);
        case "ascii":
          return dp(this, t, r);
        case "latin1":
        case "binary":
          return gp(this, t, r);
        case "base64":
          return fp(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return hp(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), n = !0;
      }
    }
  }
  u(sp, "Fr");
  C.prototype._isBuffer = !0;
  function Ct(e, t, r) {
    let n = e[t];
    e[t] = e[r], e[r] = n;
  }
  u(Ct, "I");
  C.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let t = 0; t < e; t += 2) Ct(this, t, t + 1);
    return this;
  };
  C.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let t = 0; t < e; t += 4) Ct(this, t, t + 3), Ct(this, t + 1, t + 2);
    return this;
  };
  C.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let t = 0; t < e; t += 8) {
      Ct(this, t, t + 7),
        Ct(this, t + 1, t + 6),
        Ct(this, t + 2, t + 5),
        Ct(this, t + 3, t + 4);
    }
    return this;
  };
  C.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
      ? _s(this, 0, e)
      : sp.apply(this, arguments);
  };
  C.prototype.toLocaleString = C.prototype.toString;
  C.prototype.equals = function (e) {
    if (!C.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : C.compare(this, e) === 0;
  };
  C.prototype.inspect = function () {
    let e = "", t = Kt.INSPECT_MAX_BYTES;
    return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">";
  };
  vs && (C.prototype[vs] = C.prototype.inspect);
  C.prototype.compare = function (e, t, r, n, o) {
    if (
      Ge(e, Uint8Array) && (e = C.from(e, e.offset, e.byteLength)),
        !C.isBuffer(e)
    ) {
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      );
    }
    if (
      t === void 0 && (t = 0),
        r === void 0 && (r = e ? e.length : 0),
        n === void 0 && (n = 0),
        o === void 0 && (o = this.length),
        t < 0 || r > e.length || n < 0 || o > this.length
    ) throw new RangeError("out of range index");
    if (n >= o && t >= r) return 0;
    if (n >= o) return -1;
    if (t >= r) return 1;
    if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
    let i = o - n,
      s = r - t,
      a = Math.min(i, s),
      c = this.slice(n, o),
      l = e.slice(t, r);
    for (let p = 0; p < a; ++p) {
      if (c[p] !== l[p]) {
        i = c[p], s = l[p];
        break;
      }
    }
    return i < s ? -1 : s < i ? 1 : 0;
  };
  function Rs(e, t, r, n, o) {
    if (e.length === 0) return -1;
    if (
      typeof r == "string"
        ? (n = r, r = 0)
        : r > 2147483647
        ? r = 2147483647
        : r < -2147483648 && (r = -2147483648),
        r = +r,
        qo(r) && (r = o ? 0 : e.length - 1),
        r < 0 && (r = e.length + r),
        r >= e.length
    ) {
      if (o) return -1;
      r = e.length - 1;
    } else if (r < 0) {
      if (o) r = 0;
      else return -1;
    }
    if (typeof t == "string" && (t = C.from(t, n)), C.isBuffer(t)) {
      return t.length === 0 ? -1 : As(e, t, r, n, o);
    }
    if (typeof t == "number") {
      return t = t & 255,
        typeof Uint8Array.prototype.indexOf == "function"
          ? o
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : As(e, [t], r, n, o);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  u(Rs, "rr");
  function As(e, t, r, n, o) {
    let i = 1, s = e.length, a = t.length;
    if (
      n !== void 0 &&
      (n = String(n).toLowerCase(),
        n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      i = 2, s /= 2, a /= 2, r /= 2;
    }
    function c(p, g) {
      return i === 1 ? p[g] : p.readUInt16BE(g * i);
    }
    u(c, "c");
    let l;
    if (o) {
      let p = -1;
      for (l = r; l < s; l++) {
        if (c(e, l) === c(t, p === -1 ? 0 : l - p)) {
          if (p === -1 && (p = l), l - p + 1 === a) {
            return p * i;
          }
        } else p !== -1 && (l -= l - p), p = -1;
      }
    } else {for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
        let p = !0;
        for (let g = 0; g < a; g++) {
          if (c(e, l + g) !== c(t, g)) {
            p = !1;
            break;
          }
        }
        if (p) return l;
      }}
    return -1;
  }
  u(As, "z");
  C.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  C.prototype.indexOf = function (e, t, r) {
    return Rs(this, e, t, r, !0);
  };
  C.prototype.lastIndexOf = function (e, t, r) {
    return Rs(this, e, t, r, !1);
  };
  function ap(e, t, r, n) {
    r = Number(r) || 0;
    let o = e.length - r;
    n ? (n = Number(n), n > o && (n = o)) : n = o;
    let i = t.length;
    n > i / 2 && (n = i / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (qo(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  u(ap, "Ar");
  function up(e, t, r, n) {
    return Tn(jo(t, e.length - r), e, r, n);
  }
  u(up, "Ur");
  function cp(e, t, r, n) {
    return Tn(Ep(t), e, r, n);
  }
  u(cp, "Rr");
  function lp(e, t, r, n) {
    return Tn(Ls(t), e, r, n);
  }
  u(lp, "Tr");
  function pp(e, t, r, n) {
    return Tn(vp(t, e.length - r), e, r, n);
  }
  u(pp, "Cr");
  C.prototype.write = function (e, t, r, n) {
    if (t === void 0) n = "utf8", r = this.length, t = 0;
    else if (r === void 0 && typeof t == "string") {
      n = t, r = this.length, t = 0;
    } else if (isFinite(t)) {
      t = t >>> 0,
        isFinite(r)
          ? (r = r >>> 0, n === void 0 && (n = "utf8"))
          : (n = r, r = void 0);
    } else {throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported",
      );}
    let o = this.length - t;
    if (
      (r === void 0 || r > o) && (r = o),
        e.length > 0 && (r < 0 || t < 0) || t > this.length
    ) throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let i = !1;
    for (;;) {
      switch (n) {
        case "hex":
          return ap(this, e, t, r);
        case "utf8":
        case "utf-8":
          return up(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return cp(this, e, t, r);
        case "base64":
          return lp(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return pp(this, e, t, r);
        default:
          if (i) throw new TypeError("Unknown encoding: " + n);
          n = ("" + n).toLowerCase(), i = !0;
      }
    }
  };
  C.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function fp(e, t, r) {
    return t === 0 && r === e.length
      ? ko.fromByteArray(e)
      : ko.fromByteArray(e.slice(t, r));
  }
  u(fp, "Sr");
  function _s(e, t, r) {
    r = Math.min(e.length, r);
    let n = [], o = t;
    for (; o < r;) {
      let i = e[o], s = null, a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
      if (o + a <= r) {
        let c, l, p, g;
        switch (a) {
          case 1:
            i < 128 && (s = i);
            break;
          case 2:
            c = e[o + 1],
              (c & 192) === 128 &&
              (g = (i & 31) << 6 | c & 63, g > 127 && (s = g));
            break;
          case 3:
            c = e[o + 1],
              l = e[o + 2],
              (c & 192) === 128 && (l & 192) === 128 &&
              (g = (i & 15) << 12 | (c & 63) << 6 | l & 63,
                g > 2047 && (g < 55296 || g > 57343) && (s = g));
            break;
          case 4:
            c = e[o + 1],
              l = e[o + 2],
              p = e[o + 3],
              (c & 192) === 128 && (l & 192) === 128 && (p & 192) === 128 &&
              (g = (i & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | p & 63,
                g > 65535 && g < 1114112 && (s = g));
        }
      }
      s === null ? (s = 65533, a = 1) : s > 65535 &&
        (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023),
        n.push(s),
        o += a;
    }
    return mp(n);
  }
  u(_s, "tr");
  var Ps = 4096;
  function mp(e) {
    let t = e.length;
    if (t <= Ps) return String.fromCharCode.apply(String, e);
    let r = "", n = 0;
    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += Ps));
    return r;
  }
  u(mp, "_r");
  function dp(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let o = t; o < r; ++o) n += String.fromCharCode(e[o] & 127);
    return n;
  }
  u(dp, "Lr");
  function gp(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let o = t; o < r; ++o) n += String.fromCharCode(e[o]);
    return n;
  }
  u(gp, "Nr");
  function yp(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let o = "";
    for (let i = t; i < r; ++i) o += Ap[e[i]];
    return o;
  }
  u(yp, "Mr");
  function hp(e, t, r) {
    let n = e.slice(t, r), o = "";
    for (let i = 0; i < n.length - 1; i += 2) {
      o += String.fromCharCode(n[i] + n[i + 1] * 256);
    }
    return o;
  }
  u(hp, "kr");
  C.prototype.slice = function (e, t) {
    let r = this.length;
    e = ~~e,
      t = t === void 0 ? r : ~~t,
      e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, C.prototype), n;
  };
  function se(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r) {
      throw new RangeError("Trying to access beyond buffer length");
    }
  }
  u(se, "a");
  C.prototype.readUintLE = C.prototype.readUIntLE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || se(e, t, this.length);
    let n = this[e], o = 1, i = 0;
    for (; ++i < t && (o *= 256);) n += this[e + i] * o;
    return n;
  };
  C.prototype.readUintBE = C.prototype.readUIntBE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || se(e, t, this.length);
    let n = this[e + --t], o = 1;
    for (; t > 0 && (o *= 256);) n += this[e + --t] * o;
    return n;
  };
  C.prototype.readUint8 = C.prototype.readUInt8 = function (e, t) {
    return e = e >>> 0, t || se(e, 1, this.length), this[e];
  };
  C.prototype.readUint16LE = C.prototype.readUInt16LE = function (e, t) {
    return e = e >>> 0, t || se(e, 2, this.length), this[e] | this[e + 1] << 8;
  };
  C.prototype.readUint16BE = C.prototype.readUInt16BE = function (e, t) {
    return e = e >>> 0, t || se(e, 2, this.length), this[e] << 8 | this[e + 1];
  };
  C.prototype.readUint32LE = C.prototype.readUInt32LE = function (e, t) {
    return e = e >>> 0,
      t || se(e, 4, this.length),
      (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
  };
  C.prototype.readUint32BE = C.prototype.readUInt32BE = function (e, t) {
    return e = e >>> 0,
      t || se(e, 4, this.length),
      this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  };
  C.prototype.readBigUInt64LE = lt(function (e) {
    e = e >>> 0, Gt(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && Pr(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      o = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(o) << BigInt(32));
  });
  C.prototype.readBigUInt64BE = lt(function (e) {
    e = e >>> 0, Gt(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && Pr(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      o = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(o);
  });
  C.prototype.readIntLE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || se(e, t, this.length);
    let n = this[e], o = 1, i = 0;
    for (; ++i < t && (o *= 256);) n += this[e + i] * o;
    return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
  };
  C.prototype.readIntBE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || se(e, t, this.length);
    let n = t, o = 1, i = this[e + --n];
    for (; n > 0 && (o *= 256);) i += this[e + --n] * o;
    return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i;
  };
  C.prototype.readInt8 = function (e, t) {
    return e = e >>> 0,
      t || se(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
  };
  C.prototype.readInt16LE = function (e, t) {
    e = e >>> 0, t || se(e, 2, this.length);
    let r = this[e] | this[e + 1] << 8;
    return r & 32768 ? r | 4294901760 : r;
  };
  C.prototype.readInt16BE = function (e, t) {
    e = e >>> 0, t || se(e, 2, this.length);
    let r = this[e + 1] | this[e] << 8;
    return r & 32768 ? r | 4294901760 : r;
  };
  C.prototype.readInt32LE = function (e, t) {
    return e = e >>> 0,
      t || se(e, 4, this.length),
      this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  };
  C.prototype.readInt32BE = function (e, t) {
    return e = e >>> 0,
      t || se(e, 4, this.length),
      this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  };
  C.prototype.readBigInt64LE = lt(function (e) {
    e = e >>> 0, Gt(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && Pr(e, this.length - 8);
    let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 +
      (r << 24);
    return (BigInt(n) << BigInt(32)) +
      BigInt(
        t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      );
  });
  C.prototype.readBigInt64BE = lt(function (e) {
    e = e >>> 0, Gt(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && Pr(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (BigInt(n) << BigInt(32)) +
      BigInt(
        this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r,
      );
  });
  C.prototype.readFloatLE = function (e, t) {
    return e = e >>> 0, t || se(e, 4, this.length), Vt.read(this, e, !0, 23, 4);
  };
  C.prototype.readFloatBE = function (e, t) {
    return e = e >>> 0, t || se(e, 4, this.length), Vt.read(this, e, !1, 23, 4);
  };
  C.prototype.readDoubleLE = function (e, t) {
    return e = e >>> 0, t || se(e, 8, this.length), Vt.read(this, e, !0, 52, 8);
  };
  C.prototype.readDoubleBE = function (e, t) {
    return e = e >>> 0, t || se(e, 8, this.length), Vt.read(this, e, !1, 52, 8);
  };
  function Ee(e, t, r, n, o, i) {
    if (!C.isBuffer(e)) {
      throw new TypeError('"buffer" argument must be a Buffer instance');
    }
    if (t > o || t < i) {
      throw new RangeError('"value" argument is out of bounds');
    }
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  u(Ee, "y");
  C.prototype.writeUintLE = C.prototype.writeUIntLE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
      let s = Math.pow(2, 8 * r) - 1;
      Ee(this, e, t, r, s, 0);
    }
    let o = 1, i = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256);) this[t + i] = e / o & 255;
    return t + r;
  };
  C.prototype.writeUintBE = C.prototype.writeUIntBE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
      let s = Math.pow(2, 8 * r) - 1;
      Ee(this, e, t, r, s, 0);
    }
    let o = r - 1, i = 1;
    for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
      this[t + o] = e / i & 255;
    }
    return t + r;
  };
  C.prototype.writeUint8 = C.prototype.writeUInt8 = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || Ee(this, e, t, 1, 255, 0),
      this[t] = e & 255,
      t + 1;
  };
  C.prototype.writeUint16LE = C.prototype.writeUInt16LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || Ee(this, e, t, 2, 65535, 0),
      this[t] = e & 255,
      this[t + 1] = e >>> 8,
      t + 2;
  };
  C.prototype.writeUint16BE = C.prototype.writeUInt16BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || Ee(this, e, t, 2, 65535, 0),
      this[t] = e >>> 8,
      this[t + 1] = e & 255,
      t + 2;
  };
  C.prototype.writeUint32LE = C.prototype.writeUInt32LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || Ee(this, e, t, 4, 4294967295, 0),
      this[t + 3] = e >>> 24,
      this[t + 2] = e >>> 16,
      this[t + 1] = e >>> 8,
      this[t] = e & 255,
      t + 4;
  };
  C.prototype.writeUint32BE = C.prototype.writeUInt32BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || Ee(this, e, t, 4, 4294967295, 0),
      this[t] = e >>> 24,
      this[t + 1] = e >>> 16,
      this[t + 2] = e >>> 8,
      this[t + 3] = e & 255,
      t + 4;
  };
  function Fs(e, t, r, n, o) {
    $s(t, n, o, e, r, 7);
    let i = Number(t & BigInt(4294967295));
    e[r++] = i,
      i = i >> 8,
      e[r++] = i,
      i = i >> 8,
      e[r++] = i,
      i = i >> 8,
      e[r++] = i;
    let s = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[r++] = s,
      s = s >> 8,
      e[r++] = s,
      s = s >> 8,
      e[r++] = s,
      s = s >> 8,
      e[r++] = s,
      r;
  }
  u(Fs, "ir");
  function Ds(e, t, r, n, o) {
    $s(t, n, o, e, r, 7);
    let i = Number(t & BigInt(4294967295));
    e[r + 7] = i,
      i = i >> 8,
      e[r + 6] = i,
      i = i >> 8,
      e[r + 5] = i,
      i = i >> 8,
      e[r + 4] = i;
    let s = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[r + 3] = s,
      s = s >> 8,
      e[r + 2] = s,
      s = s >> 8,
      e[r + 1] = s,
      s = s >> 8,
      e[r] = s,
      r + 8;
  }
  u(Ds, "nr");
  C.prototype.writeBigUInt64LE = lt(function (e, t = 0) {
    return Fs(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  C.prototype.writeBigUInt64BE = lt(function (e, t = 0) {
    return Ds(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  C.prototype.writeIntLE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, !n) {
      let a = Math.pow(2, 8 * r - 1);
      Ee(this, e, t, r, a - 1, -a);
    }
    let o = 0, i = 1, s = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256);) {
      e < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1),
        this[t + o] = (e / i >> 0) - s & 255;
    }
    return t + r;
  };
  C.prototype.writeIntBE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, !n) {
      let a = Math.pow(2, 8 * r - 1);
      Ee(this, e, t, r, a - 1, -a);
    }
    let o = r - 1, i = 1, s = 0;
    for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
      e < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1),
        this[t + o] = (e / i >> 0) - s & 255;
    }
    return t + r;
  };
  C.prototype.writeInt8 = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || Ee(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      this[t] = e & 255,
      t + 1;
  };
  C.prototype.writeInt16LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || Ee(this, e, t, 2, 32767, -32768),
      this[t] = e & 255,
      this[t + 1] = e >>> 8,
      t + 2;
  };
  C.prototype.writeInt16BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || Ee(this, e, t, 2, 32767, -32768),
      this[t] = e >>> 8,
      this[t + 1] = e & 255,
      t + 2;
  };
  C.prototype.writeInt32LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || Ee(this, e, t, 4, 2147483647, -2147483648),
      this[t] = e & 255,
      this[t + 1] = e >>> 8,
      this[t + 2] = e >>> 16,
      this[t + 3] = e >>> 24,
      t + 4;
  };
  C.prototype.writeInt32BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || Ee(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      this[t] = e >>> 24,
      this[t + 1] = e >>> 16,
      this[t + 2] = e >>> 8,
      this[t + 3] = e & 255,
      t + 4;
  };
  C.prototype.writeBigInt64LE = lt(function (e, t = 0) {
    return Fs(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  C.prototype.writeBigInt64BE = lt(function (e, t = 0) {
    return Ds(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  function ks(e, t, r, n, o, i) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  u(ks, "er");
  function Ns(e, t, r, n, o) {
    return t = +t,
      r = r >>> 0,
      o || ks(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      Vt.write(e, t, r, n, 23, 4),
      r + 4;
  }
  u(Ns, "or");
  C.prototype.writeFloatLE = function (e, t, r) {
    return Ns(this, e, t, !0, r);
  };
  C.prototype.writeFloatBE = function (e, t, r) {
    return Ns(this, e, t, !1, r);
  };
  function js(e, t, r, n, o) {
    return t = +t,
      r = r >>> 0,
      o || ks(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      Vt.write(e, t, r, n, 52, 8),
      r + 8;
  }
  u(js, "ur");
  C.prototype.writeDoubleLE = function (e, t, r) {
    return js(this, e, t, !0, r);
  };
  C.prototype.writeDoubleBE = function (e, t, r) {
    return js(this, e, t, !1, r);
  };
  C.prototype.copy = function (e, t, r, n) {
    if (!C.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      r || (r = 0),
        !n && n !== 0 && (n = this.length),
        t >= e.length && (t = e.length),
        t || (t = 0),
        n > 0 && n < r && (n = r),
        n === r || e.length === 0 || this.length === 0
    ) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let o = n - r;
    return this === e && typeof Uint8Array.prototype.copyWithin == "function"
      ? this.copyWithin(t, r, n)
      : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      o;
  };
  C.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        typeof t == "string"
          ? (n = t, t = 0, r = this.length)
          : typeof r == "string" && (n = r, r = this.length),
          n !== void 0 && typeof n != "string"
      ) throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !C.isEncoding(n)) {
        throw new TypeError("Unknown encoding: " + n);
      }
      if (e.length === 1) {
        let i = e.charCodeAt(0);
        (n === "utf8" && i < 128 || n === "latin1") && (e = i);
      }
    } else {typeof e == "number"
        ? e = e & 255
        : typeof e == "boolean" && (e = Number(e));}
    if (t < 0 || this.length < t || this.length < r) {
      throw new RangeError("Out of range index");
    }
    if (r <= t) return this;
    t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
    let o;
    if (typeof e == "number") for (o = t; o < r; ++o) this[o] = e;
    else {
      let i = C.isBuffer(e) ? e : C.from(e, n), s = i.length;
      if (s === 0) {
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      }
      for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
    }
    return this;
  };
  var Ut = {};
  function Bo(e, t, r) {
    Ut[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          this.name = `${this.name} [${e}]`,
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  u(Bo, "G");
  Bo("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
    return e
      ? `${e} is outside of buffer bounds`
      : "Attempt to access memory outside buffer bounds";
  }, RangeError);
  Bo("ERR_INVALID_ARG_TYPE", function (e, t) {
    return `The "${e}" argument must be of type number. Received type ${typeof t}`;
  }, TypeError);
  Bo("ERR_OUT_OF_RANGE", function (e, t, r) {
    let n = `The value of "${e}" is out of range.`, o = r;
    return Number.isInteger(r) && Math.abs(r) > 2 ** 32
      ? o = Ts(String(r))
      : typeof r == "bigint" &&
        (o = String(r),
          (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
          (o = Ts(o)),
          o += "n"),
      n += ` It must be ${t}. Received ${o}`,
      n;
  }, RangeError);
  function Ts(e) {
    let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  u(Ts, "K");
  function bp(e, t, r) {
    Gt(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && Pr(t, e.length - (r + 1));
  }
  u(bp, "Dr");
  function $s(e, t, r, n, o, i) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "", a;
      throw i > 3
        ? t === 0 || t === BigInt(0)
          ? a = `>= 0${s} and < 2${s} ** ${(i + 1) * 8}${s}`
          : a = `>= -(2${s} ** ${(i + 1) * 8 - 1}${s}) and < 2 ** ${
            (i + 1) * 8 - 1
          }${s}`
        : a = `>= ${t}${s} and <= ${r}${s}`,
        new Ut.ERR_OUT_OF_RANGE("value", a, e);
    }
    bp(n, o, i);
  }
  u($s, "hr");
  function Gt(e, t) {
    if (typeof e != "number") throw new Ut.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  u(Gt, "R");
  function Pr(e, t, r) {
    throw Math.floor(e) !== e
      ? (Gt(e, r), new Ut.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
      ? new Ut.ERR_BUFFER_OUT_OF_BOUNDS()
      : new Ut.ERR_OUT_OF_RANGE(
        r || "offset",
        `>= ${r ? 1 : 0} and <= ${t}`,
        e,
      );
  }
  u(Pr, "T");
  var wp = /[^+/0-9A-Za-z-_]/g;
  function xp(e) {
    if (e = e.split("=")[0], e = e.trim().replace(wp, ""), e.length < 2) {
      return "";
    }
    for (; e.length % 4 !== 0;) e = e + "=";
    return e;
  }
  u(xp, "br");
  function jo(e, t) {
    t = t || 1 / 0;
    let r, n = e.length, o = null, i = [];
    for (let s = 0; s < n; ++s) {
      if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
        if (!o) {
          if (r > 56319) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          o = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && i.push(239, 191, 189), o = r;
          continue;
        }
        r = (o - 55296 << 10 | r - 56320) + 65536;
      } else o && (t -= 3) > -1 && i.push(239, 191, 189);
      if (o = null, r < 128) {
        if ((t -= 1) < 0) break;
        i.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        i.push(r >> 6 | 192, r & 63 | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        i.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        i.push(
          r >> 18 | 240,
          r >> 12 & 63 | 128,
          r >> 6 & 63 | 128,
          r & 63 | 128,
        );
      } else throw new Error("Invalid code point");
    }
    return i;
  }
  u(jo, "b");
  function Ep(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  u(Ep, "Pr");
  function vp(e, t) {
    let r, n, o, i = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) {
      r = e.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
    }
    return i;
  }
  u(vp, "Or");
  function Ls(e) {
    return ko.toByteArray(xp(e));
  }
  u(Ls, "fr");
  function Tn(e, t, r, n) {
    let o;
    for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) {
      t[o + r] = e[o];
    }
    return o;
  }
  u(Tn, "_");
  function Ge(e, t) {
    return e instanceof t ||
      e != null && e.constructor != null && e.constructor.name != null &&
        e.constructor.name === t.name;
  }
  u(Ge, "E");
  function qo(e) {
    return e !== e;
  }
  u(qo, "Y");
  var Ap = function () {
    let e = "0123456789abcdef", t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
    }
    return t;
  }();
  function lt(e) {
    return typeof BigInt > "u" ? Pp : e;
  }
  u(lt, "g");
  function Pp() {
    throw new Error("BigInt not supported");
  }
  u(Pp, "Yr");
});
var x,
  d = An(() => {
    "use strict";
    x = ee(Bs());
  });
var qs = W((Cy, Mn) => {
  d();
  f();
  m();
  var Tp = function () {
    var e = String.fromCharCode,
      t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
      n = {};
    function o(s, a) {
      if (!n[s]) {
        n[s] = {};
        for (var c = 0; c < s.length; c++) n[s][s.charAt(c)] = c;
      }
      return n[s][a];
    }
    u(o, "getBaseValue");
    var i = {
      compressToBase64: function (s) {
        if (s == null) return "";
        var a = i._compress(s, 6, function (c) {
          return t.charAt(c);
        });
        switch (a.length % 4) {
          default:
          case 0:
            return a;
          case 1:
            return a + "===";
          case 2:
            return a + "==";
          case 3:
            return a + "=";
        }
      },
      decompressFromBase64: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : i._decompress(s.length, 32, function (a) {
            return o(t, s.charAt(a));
          });
      },
      compressToUTF16: function (s) {
        return s == null ? "" : i._compress(s, 15, function (a) {
          return e(a + 32);
        }) + " ";
      },
      decompressFromUTF16: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : i._decompress(s.length, 16384, function (a) {
            return s.charCodeAt(a) - 32;
          });
      },
      compressToUint8Array: function (s) {
        for (
          var a = i.compress(s),
            c = new Uint8Array(a.length * 2),
            l = 0,
            p = a.length;
          l < p;
          l++
        ) {
          var g = a.charCodeAt(l);
          c[l * 2] = g >>> 8, c[l * 2 + 1] = g % 256;
        }
        return c;
      },
      decompressFromUint8Array: function (s) {
        if (s == null) return i.decompress(s);
        for (
          var a = new Array(s.length / 2), c = 0, l = a.length;
          c < l;
          c++
        ) a[c] = s[c * 2] * 256 + s[c * 2 + 1];
        var p = [];
        return a.forEach(function (g) {
          p.push(e(g));
        }),
          i.decompress(p.join(""));
      },
      compressToEncodedURIComponent: function (s) {
        return s == null ? "" : i._compress(s, 6, function (a) {
          return r.charAt(a);
        });
      },
      decompressFromEncodedURIComponent: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : (s = s.replace(/ /g, "+"),
            i._decompress(s.length, 32, function (a) {
              return o(r, s.charAt(a));
            }));
      },
      compress: function (s) {
        return i._compress(s, 16, function (a) {
          return e(a);
        });
      },
      _compress: function (s, a, c) {
        if (s == null) return "";
        var l,
          p,
          g = {},
          y = {},
          b = "",
          v = "",
          h = "",
          A = 2,
          O = 3,
          T = 2,
          M = [],
          P = 0,
          S = 0,
          _;
        for (_ = 0; _ < s.length; _ += 1) {
          if (
            b = s.charAt(_),
              Object.prototype.hasOwnProperty.call(g, b) ||
              (g[b] = O++, y[b] = !0),
              v = h + b,
              Object.prototype.hasOwnProperty.call(g, v)
          ) h = v;
          else {
            if (Object.prototype.hasOwnProperty.call(y, h)) {
              if (h.charCodeAt(0) < 256) {
                for (l = 0; l < T; l++) {
                  P = P << 1, S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++;
                }
                for (
                  p = h.charCodeAt(0), l = 0;
                  l < 8;
                  l++
                ) {
                  P = P << 1 | p & 1,
                    S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++,
                    p = p >> 1;
                }
              } else {
                for (p = 1, l = 0; l < T; l++) {
                  P = P << 1 | p,
                    S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++,
                    p = 0;
                }
                for (
                  p = h.charCodeAt(0), l = 0;
                  l < 16;
                  l++
                ) {
                  P = P << 1 | p & 1,
                    S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++,
                    p = p >> 1;
                }
              }
              A--, A == 0 && (A = Math.pow(2, T), T++), delete y[h];
            } else {for (p = g[h], l = 0; l < T; l++) {
                P = P << 1 | p & 1,
                  S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++,
                  p = p >> 1;
              }}
            A--, A == 0 && (A = Math.pow(2, T), T++), g[v] = O++, h = String(b);
          }
        }
        if (h !== "") {
          if (Object.prototype.hasOwnProperty.call(y, h)) {
            if (h.charCodeAt(0) < 256) {
              for (l = 0; l < T; l++) {
                P = P << 1, S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++;
              }
              for (p = h.charCodeAt(0), l = 0; l < 8; l++) {
                P = P << 1 | p & 1,
                  S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++,
                  p = p >> 1;
              }
            } else {
              for (p = 1, l = 0; l < T; l++) {
                P = P << 1 | p,
                  S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++,
                  p = 0;
              }
              for (p = h.charCodeAt(0), l = 0; l < 16; l++) {
                P = P << 1 | p & 1,
                  S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++,
                  p = p >> 1;
              }
            }
            A--, A == 0 && (A = Math.pow(2, T), T++), delete y[h];
          } else {for (p = g[h], l = 0; l < T; l++) {
              P = P << 1 | p & 1,
                S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++,
                p = p >> 1;
            }}
          A--, A == 0 && (A = Math.pow(2, T), T++);
        }
        for (p = 2, l = 0; l < T; l++) {
          P = P << 1 | p & 1,
            S == a - 1 ? (S = 0, M.push(c(P)), P = 0) : S++,
            p = p >> 1;
        }
        for (;;) {
          if (P = P << 1, S == a - 1) {
            M.push(c(P));
            break;
          } else S++;
        }
        return M.join("");
      },
      decompress: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : i._decompress(s.length, 32768, function (a) {
            return s.charCodeAt(a);
          });
      },
      _decompress: function (s, a, c) {
        var l = [],
          p,
          g = 4,
          y = 4,
          b = 3,
          v = "",
          h = [],
          A,
          O,
          T,
          M,
          P,
          S,
          _,
          F = { val: c(0), position: a, index: 1 };
        for (A = 0; A < 3; A += 1) l[A] = A;
        for (T = 0, P = Math.pow(2, 2), S = 1; S != P;) {
          M = F.val & F.position,
            F.position >>= 1,
            F.position == 0 && (F.position = a, F.val = c(F.index++)),
            T |= (M > 0 ? 1 : 0) * S,
            S <<= 1;
        }
        switch (p = T) {
          case 0:
            for (T = 0, P = Math.pow(2, 8), S = 1; S != P;) {
              M = F.val & F.position,
                F.position >>= 1,
                F.position == 0 && (F.position = a, F.val = c(F.index++)),
                T |= (M > 0 ? 1 : 0) * S,
                S <<= 1;
            }
            _ = e(T);
            break;
          case 1:
            for (T = 0, P = Math.pow(2, 16), S = 1; S != P;) {
              M = F.val & F.position,
                F.position >>= 1,
                F.position == 0 && (F.position = a, F.val = c(F.index++)),
                T |= (M > 0 ? 1 : 0) * S,
                S <<= 1;
            }
            _ = e(T);
            break;
          case 2:
            return "";
        }
        for (l[3] = _, O = _, h.push(_);;) {
          if (F.index > s) return "";
          for (T = 0, P = Math.pow(2, b), S = 1; S != P;) {
            M = F.val & F.position,
              F.position >>= 1,
              F.position == 0 && (F.position = a, F.val = c(F.index++)),
              T |= (M > 0 ? 1 : 0) * S,
              S <<= 1;
          }
          switch (_ = T) {
            case 0:
              for (T = 0, P = Math.pow(2, 8), S = 1; S != P;) {
                M = F.val & F.position,
                  F.position >>= 1,
                  F.position == 0 && (F.position = a, F.val = c(F.index++)),
                  T |= (M > 0 ? 1 : 0) * S,
                  S <<= 1;
              }
              l[y++] = e(T), _ = y - 1, g--;
              break;
            case 1:
              for (T = 0, P = Math.pow(2, 16), S = 1; S != P;) {
                M = F.val & F.position,
                  F.position >>= 1,
                  F.position == 0 && (F.position = a, F.val = c(F.index++)),
                  T |= (M > 0 ? 1 : 0) * S,
                  S <<= 1;
              }
              l[y++] = e(T), _ = y - 1, g--;
              break;
            case 2:
              return h.join("");
          }
          if (g == 0 && (g = Math.pow(2, b), b++), l[_]) v = l[_];
          else if (_ === y) v = O + O.charAt(0);
          else return null;
          h.push(v),
            l[y++] = O + v.charAt(0),
            g--,
            O = v,
            g == 0 && (g = Math.pow(2, b), b++);
        }
      },
    };
    return i;
  }();
  typeof Mn != "undefined" && Mn != null && (Mn.exports = Tp);
});
var Ws = W((oh, Hs) => {
  "use strict";
  d();
  f();
  m();
  Hs.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };
});
var Uo = W((uh, Ys) => {
  d();
  f();
  m();
  var Tr = Ws(), Qs = {};
  for (let e of Object.keys(Tr)) Qs[Tr[e]] = e;
  var k = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] },
  };
  Ys.exports = k;
  for (let e of Object.keys(k)) {
    if (!("channels" in k[e])) {
      throw new Error("missing channels property: " + e);
    }
    if (!("labels" in k[e])) {
      throw new Error("missing channel labels property: " + e);
    }
    if (k[e].labels.length !== k[e].channels) {
      throw new Error("channel and label counts mismatch: " + e);
    }
    let { channels: t, labels: r } = k[e];
    delete k[e].channels,
      delete k[e].labels,
      Object.defineProperty(k[e], "channels", { value: t }),
      Object.defineProperty(k[e], "labels", { value: r });
  }
  k.rgb.hsl = function (e) {
    let t = e[0] / 255,
      r = e[1] / 255,
      n = e[2] / 255,
      o = Math.min(t, r, n),
      i = Math.max(t, r, n),
      s = i - o,
      a,
      c;
    i === o
      ? a = 0
      : t === i
      ? a = (r - n) / s
      : r === i
      ? a = 2 + (n - t) / s
      : n === i && (a = 4 + (t - r) / s),
      a = Math.min(a * 60, 360),
      a < 0 && (a += 360);
    let l = (o + i) / 2;
    return i === o ? c = 0 : l <= .5 ? c = s / (i + o) : c = s / (2 - i - o),
      [a, c * 100, l * 100];
  };
  k.rgb.hsv = function (e) {
    let t,
      r,
      n,
      o,
      i,
      s = e[0] / 255,
      a = e[1] / 255,
      c = e[2] / 255,
      l = Math.max(s, a, c),
      p = l - Math.min(s, a, c),
      g = u(function (y) {
        return (l - y) / 6 / p + 1 / 2;
      }, "diffc");
    return p === 0
      ? (o = 0, i = 0)
      : (i = p / l,
        t = g(s),
        r = g(a),
        n = g(c),
        s === l
          ? o = n - r
          : a === l
          ? o = 1 / 3 + t - n
          : c === l && (o = 2 / 3 + r - t),
        o < 0 ? o += 1 : o > 1 && (o -= 1)),
      [o * 360, i * 100, l * 100];
  };
  k.rgb.hwb = function (e) {
    let t = e[0],
      r = e[1],
      n = e[2],
      o = k.rgb.hsl(e)[0],
      i = 1 / 255 * Math.min(t, Math.min(r, n));
    return n = 1 - 1 / 255 * Math.max(t, Math.max(r, n)), [o, i * 100, n * 100];
  };
  k.rgb.cmyk = function (e) {
    let t = e[0] / 255,
      r = e[1] / 255,
      n = e[2] / 255,
      o = Math.min(1 - t, 1 - r, 1 - n),
      i = (1 - t - o) / (1 - o) || 0,
      s = (1 - r - o) / (1 - o) || 0,
      a = (1 - n - o) / (1 - o) || 0;
    return [i * 100, s * 100, a * 100, o * 100];
  };
  function Mp(e, t) {
    return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
  }
  u(Mp, "comparativeDistance");
  k.rgb.keyword = function (e) {
    let t = Qs[e];
    if (t) return t;
    let r = 1 / 0, n;
    for (let o of Object.keys(Tr)) {
      let i = Tr[o], s = Mp(e, i);
      s < r && (r = s, n = o);
    }
    return n;
  };
  k.keyword.rgb = function (e) {
    return Tr[e];
  };
  k.rgb.xyz = function (e) {
    let t = e[0] / 255, r = e[1] / 255, n = e[2] / 255;
    t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92,
      r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92,
      n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92;
    let o = t * .4124 + r * .3576 + n * .1805,
      i = t * .2126 + r * .7152 + n * .0722,
      s = t * .0193 + r * .1192 + n * .9505;
    return [o * 100, i * 100, s * 100];
  };
  k.rgb.lab = function (e) {
    let t = k.rgb.xyz(e), r = t[0], n = t[1], o = t[2];
    r /= 95.047,
      n /= 100,
      o /= 108.883,
      r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116,
      n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116,
      o = o > .008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
    let i = 116 * n - 16, s = 500 * (r - n), a = 200 * (n - o);
    return [i, s, a];
  };
  k.hsl.rgb = function (e) {
    let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100, o, i, s;
    if (r === 0) return s = n * 255, [s, s, s];
    n < .5 ? o = n * (1 + r) : o = n + r - n * r;
    let a = 2 * n - o, c = [0, 0, 0];
    for (let l = 0; l < 3; l++) {
      i = t + 1 / 3 * -(l - 1),
        i < 0 && i++,
        i > 1 && i--,
        6 * i < 1
          ? s = a + (o - a) * 6 * i
          : 2 * i < 1
          ? s = o
          : 3 * i < 2
          ? s = a + (o - a) * (2 / 3 - i) * 6
          : s = a,
        c[l] = s * 255;
    }
    return c;
  };
  k.hsl.hsv = function (e) {
    let t = e[0], r = e[1] / 100, n = e[2] / 100, o = r, i = Math.max(n, .01);
    n *= 2, r *= n <= 1 ? n : 2 - n, o *= i <= 1 ? i : 2 - i;
    let s = (n + r) / 2, a = n === 0 ? 2 * o / (i + o) : 2 * r / (n + r);
    return [t, a * 100, s * 100];
  };
  k.hsv.rgb = function (e) {
    let t = e[0] / 60,
      r = e[1] / 100,
      n = e[2] / 100,
      o = Math.floor(t) % 6,
      i = t - Math.floor(t),
      s = 255 * n * (1 - r),
      a = 255 * n * (1 - r * i),
      c = 255 * n * (1 - r * (1 - i));
    switch (n *= 255, o) {
      case 0:
        return [n, c, s];
      case 1:
        return [a, n, s];
      case 2:
        return [s, n, c];
      case 3:
        return [s, a, n];
      case 4:
        return [c, s, n];
      case 5:
        return [n, s, a];
    }
  };
  k.hsv.hsl = function (e) {
    let t = e[0], r = e[1] / 100, n = e[2] / 100, o = Math.max(n, .01), i, s;
    s = (2 - r) * n;
    let a = (2 - r) * o;
    return i = r * o,
      i /= a <= 1 ? a : 2 - a,
      i = i || 0,
      s /= 2,
      [t, i * 100, s * 100];
  };
  k.hwb.rgb = function (e) {
    let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100, o = r + n, i;
    o > 1 && (r /= o, n /= o);
    let s = Math.floor(6 * t), a = 1 - n;
    i = 6 * t - s, (s & 1) !== 0 && (i = 1 - i);
    let c = r + i * (a - r), l, p, g;
    switch (s) {
      default:
      case 6:
      case 0:
        l = a, p = c, g = r;
        break;
      case 1:
        l = c, p = a, g = r;
        break;
      case 2:
        l = r, p = a, g = c;
        break;
      case 3:
        l = r, p = c, g = a;
        break;
      case 4:
        l = c, p = r, g = a;
        break;
      case 5:
        l = a, p = r, g = c;
        break;
    }
    return [l * 255, p * 255, g * 255];
  };
  k.cmyk.rgb = function (e) {
    let t = e[0] / 100,
      r = e[1] / 100,
      n = e[2] / 100,
      o = e[3] / 100,
      i = 1 - Math.min(1, t * (1 - o) + o),
      s = 1 - Math.min(1, r * (1 - o) + o),
      a = 1 - Math.min(1, n * (1 - o) + o);
    return [i * 255, s * 255, a * 255];
  };
  k.xyz.rgb = function (e) {
    let t = e[0] / 100, r = e[1] / 100, n = e[2] / 100, o, i, s;
    return o = t * 3.2406 + r * -1.5372 + n * -.4986,
      i = t * -.9689 + r * 1.8758 + n * .0415,
      s = t * .0557 + r * -.204 + n * 1.057,
      o = o > .0031308 ? 1.055 * o ** (1 / 2.4) - .055 : o * 12.92,
      i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : i * 12.92,
      s = s > .0031308 ? 1.055 * s ** (1 / 2.4) - .055 : s * 12.92,
      o = Math.min(Math.max(0, o), 1),
      i = Math.min(Math.max(0, i), 1),
      s = Math.min(Math.max(0, s), 1),
      [o * 255, i * 255, s * 255];
  };
  k.xyz.lab = function (e) {
    let t = e[0], r = e[1], n = e[2];
    t /= 95.047,
      r /= 100,
      n /= 108.883,
      t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116,
      r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116,
      n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116;
    let o = 116 * r - 16, i = 500 * (t - r), s = 200 * (r - n);
    return [o, i, s];
  };
  k.lab.xyz = function (e) {
    let t = e[0], r = e[1], n = e[2], o, i, s;
    i = (t + 16) / 116, o = r / 500 + i, s = i - n / 200;
    let a = i ** 3, c = o ** 3, l = s ** 3;
    return i = a > .008856 ? a : (i - 16 / 116) / 7.787,
      o = c > .008856 ? c : (o - 16 / 116) / 7.787,
      s = l > .008856 ? l : (s - 16 / 116) / 7.787,
      o *= 95.047,
      i *= 100,
      s *= 108.883,
      [o, i, s];
  };
  k.lab.lch = function (e) {
    let t = e[0], r = e[1], n = e[2], o;
    o = Math.atan2(n, r) * 360 / 2 / Math.PI, o < 0 && (o += 360);
    let s = Math.sqrt(r * r + n * n);
    return [t, s, o];
  };
  k.lch.lab = function (e) {
    let t = e[0],
      r = e[1],
      o = e[2] / 360 * 2 * Math.PI,
      i = r * Math.cos(o),
      s = r * Math.sin(o);
    return [t, i, s];
  };
  k.rgb.ansi16 = function (e, t = null) {
    let [r, n, o] = e, i = t === null ? k.rgb.hsv(e)[2] : t;
    if (i = Math.round(i / 50), i === 0) return 30;
    let s = 30 +
      (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 |
        Math.round(r / 255));
    return i === 2 && (s += 60), s;
  };
  k.hsv.ansi16 = function (e) {
    return k.rgb.ansi16(k.hsv.rgb(e), e[2]);
  };
  k.rgb.ansi256 = function (e) {
    let t = e[0], r = e[1], n = e[2];
    return t === r && r === n
      ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232
      : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(r / 255 * 5) +
        Math.round(n / 255 * 5);
  };
  k.ansi16.rgb = function (e) {
    let t = e % 10;
    if (t === 0 || t === 7) {
      return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
    }
    let r = (~~(e > 50) + 1) * .5,
      n = (t & 1) * r * 255,
      o = (t >> 1 & 1) * r * 255,
      i = (t >> 2 & 1) * r * 255;
    return [n, o, i];
  };
  k.ansi256.rgb = function (e) {
    if (e >= 232) {
      let i = (e - 232) * 10 + 8;
      return [i, i, i];
    }
    e -= 16;
    let t,
      r = Math.floor(e / 36) / 5 * 255,
      n = Math.floor((t = e % 36) / 6) / 5 * 255,
      o = t % 6 / 5 * 255;
    return [r, n, o];
  };
  k.rgb.hex = function (e) {
    let r =
      (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(r.length) + r;
  };
  k.hex.rgb = function (e) {
    let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t) return [0, 0, 0];
    let r = t[0];
    t[0].length === 3 && (r = r.split("").map((a) => a + a).join(""));
    let n = parseInt(r, 16), o = n >> 16 & 255, i = n >> 8 & 255, s = n & 255;
    return [o, i, s];
  };
  k.rgb.hcg = function (e) {
    let t = e[0] / 255,
      r = e[1] / 255,
      n = e[2] / 255,
      o = Math.max(Math.max(t, r), n),
      i = Math.min(Math.min(t, r), n),
      s = o - i,
      a,
      c;
    return s < 1 ? a = i / (1 - s) : a = 0,
      s <= 0
        ? c = 0
        : o === t
        ? c = (r - n) / s % 6
        : o === r
        ? c = 2 + (n - t) / s
        : c = 4 + (t - r) / s,
      c /= 6,
      c %= 1,
      [c * 360, s * 100, a * 100];
  };
  k.hsl.hcg = function (e) {
    let t = e[1] / 100,
      r = e[2] / 100,
      n = r < .5 ? 2 * t * r : 2 * t * (1 - r),
      o = 0;
    return n < 1 && (o = (r - .5 * n) / (1 - n)), [e[0], n * 100, o * 100];
  };
  k.hsv.hcg = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = t * r, o = 0;
    return n < 1 && (o = (r - n) / (1 - n)), [e[0], n * 100, o * 100];
  };
  k.hcg.rgb = function (e) {
    let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100;
    if (r === 0) return [n * 255, n * 255, n * 255];
    let o = [0, 0, 0], i = t % 1 * 6, s = i % 1, a = 1 - s, c = 0;
    switch (Math.floor(i)) {
      case 0:
        o[0] = 1, o[1] = s, o[2] = 0;
        break;
      case 1:
        o[0] = a, o[1] = 1, o[2] = 0;
        break;
      case 2:
        o[0] = 0, o[1] = 1, o[2] = s;
        break;
      case 3:
        o[0] = 0, o[1] = a, o[2] = 1;
        break;
      case 4:
        o[0] = s, o[1] = 0, o[2] = 1;
        break;
      default:
        o[0] = 1, o[1] = 0, o[2] = a;
    }
    return c = (1 - r) * n,
      [(r * o[0] + c) * 255, (r * o[1] + c) * 255, (r * o[2] + c) * 255];
  };
  k.hcg.hsv = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = t + r * (1 - t), o = 0;
    return n > 0 && (o = t / n), [e[0], o * 100, n * 100];
  };
  k.hcg.hsl = function (e) {
    let t = e[1] / 100, n = e[2] / 100 * (1 - t) + .5 * t, o = 0;
    return n > 0 && n < .5
      ? o = t / (2 * n)
      : n >= .5 && n < 1 && (o = t / (2 * (1 - n))),
      [e[0], o * 100, n * 100];
  };
  k.hcg.hwb = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = t + r * (1 - t);
    return [e[0], (n - t) * 100, (1 - n) * 100];
  };
  k.hwb.hcg = function (e) {
    let t = e[1] / 100, n = 1 - e[2] / 100, o = n - t, i = 0;
    return o < 1 && (i = (n - o) / (1 - o)), [e[0], o * 100, i * 100];
  };
  k.apple.rgb = function (e) {
    return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
  };
  k.rgb.apple = function (e) {
    return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
  };
  k.gray.rgb = function (e) {
    return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
  };
  k.gray.hsl = function (e) {
    return [0, 0, e[0]];
  };
  k.gray.hsv = k.gray.hsl;
  k.gray.hwb = function (e) {
    return [0, 100, e[0]];
  };
  k.gray.cmyk = function (e) {
    return [0, 0, 0, e[0]];
  };
  k.gray.lab = function (e) {
    return [e[0], 0, 0];
  };
  k.gray.hex = function (e) {
    let t = Math.round(e[0] / 100 * 255) & 255,
      n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return "000000".substring(n.length) + n;
  };
  k.rgb.gray = function (e) {
    return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
  };
});
var Xs = W((mh, Zs) => {
  d();
  f();
  m();
  var On = Uo();
  function Op() {
    let e = {}, t = Object.keys(On);
    for (let r = t.length, n = 0; n < r; n++) {
      e[t[n]] = { distance: -1, parent: null };
    }
    return e;
  }
  u(Op, "buildGraph");
  function Sp(e) {
    let t = Op(), r = [e];
    for (t[e].distance = 0; r.length;) {
      let n = r.pop(), o = Object.keys(On[n]);
      for (let i = o.length, s = 0; s < i; s++) {
        let a = o[s], c = t[a];
        c.distance === -1 &&
          (c.distance = t[n].distance + 1, c.parent = n, r.unshift(a));
      }
    }
    return t;
  }
  u(Sp, "deriveBFS");
  function Cp(e, t) {
    return function (r) {
      return t(e(r));
    };
  }
  u(Cp, "link");
  function Ip(e, t) {
    let r = [t[e].parent, e], n = On[t[e].parent][e], o = t[e].parent;
    for (; t[o].parent;) {
      r.unshift(t[o].parent), n = Cp(On[t[o].parent][o], n), o = t[o].parent;
    }
    return n.conversion = r, n;
  }
  u(Ip, "wrapConversion");
  Zs.exports = function (e) {
    let t = Sp(e), r = {}, n = Object.keys(t);
    for (let o = n.length, i = 0; i < o; i++) {
      let s = n[i];
      t[s].parent !== null && (r[s] = Ip(s, t));
    }
    return r;
  };
});
var ta = W((bh, ea) => {
  d();
  f();
  m();
  var Vo = Uo(), Rp = Xs(), Jt = {}, _p = Object.keys(Vo);
  function Fp(e) {
    let t = u(function (...r) {
      let n = r[0];
      return n == null ? n : (n.length > 1 && (r = n), e(r));
    }, "wrappedFn");
    return "conversion" in e && (t.conversion = e.conversion), t;
  }
  u(Fp, "wrapRaw");
  function Dp(e) {
    let t = u(function (...r) {
      let n = r[0];
      if (n == null) return n;
      n.length > 1 && (r = n);
      let o = e(r);
      if (typeof o == "object") {
        for (let i = o.length, s = 0; s < i; s++) o[s] = Math.round(o[s]);
      }
      return o;
    }, "wrappedFn");
    return "conversion" in e && (t.conversion = e.conversion), t;
  }
  u(Dp, "wrapRounded");
  _p.forEach((e) => {
    Jt[e] = {},
      Object.defineProperty(Jt[e], "channels", { value: Vo[e].channels }),
      Object.defineProperty(Jt[e], "labels", { value: Vo[e].labels });
    let t = Rp(e);
    Object.keys(t).forEach((n) => {
      let o = t[n];
      Jt[e][n] = Dp(o), Jt[e][n].raw = Fp(o);
    });
  });
  ea.exports = Jt;
});
var aa = W((Ah, sa) => {
  "use strict";
  d();
  f();
  m();
  var ra = u((e, t) => (...r) => `\x1B[${e(...r) + t}m`, "wrapAnsi16"),
    na = u((e, t) => (...r) => {
      let n = e(...r);
      return `\x1B[${38 + t};5;${n}m`;
    }, "wrapAnsi256"),
    oa = u((e, t) => (...r) => {
      let n = e(...r);
      return `\x1B[${38 + t};2;${n[0]};${n[1]};${n[2]}m`;
    }, "wrapAnsi16m"),
    Sn = u((e) => e, "ansi2ansi"),
    ia = u((e, t, r) => [e, t, r], "rgb2rgb"),
    zt = u((e, t, r) => {
      Object.defineProperty(e, t, {
        get: () => {
          let n = r();
          return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
          }),
            n;
        },
        enumerable: !0,
        configurable: !0,
      });
    }, "setLazyProperty"),
    Go,
    Ht = u((e, t, r, n) => {
      Go === void 0 && (Go = ta());
      let o = n ? 10 : 0, i = {};
      for (let [s, a] of Object.entries(Go)) {
        let c = s === "ansi16" ? "ansi" : s;
        s === t ? i[c] = e(r, o) : typeof a == "object" && (i[c] = e(a[t], o));
      }
      return i;
    }, "makeDynamicStyles");
  function kp() {
    let e = new Map(),
      t = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39],
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      };
    t.color.gray = t.color.blackBright,
      t.bgColor.bgGray = t.bgColor.bgBlackBright,
      t.color.grey = t.color.blackBright,
      t.bgColor.bgGrey = t.bgColor.bgBlackBright;
    for (let [r, n] of Object.entries(t)) {
      for (let [o, i] of Object.entries(n)) {
        t[o] = { open: `\x1B[${i[0]}m`, close: `\x1B[${i[1]}m` },
          n[o] = t[o],
          e.set(i[0], i[1]);
      }
      Object.defineProperty(t, r, { value: n, enumerable: !1 });
    }
    return Object.defineProperty(t, "codes", { value: e, enumerable: !1 }),
      t.color.close = "\x1B[39m",
      t.bgColor.close = "\x1B[49m",
      zt(t.color, "ansi", () => Ht(ra, "ansi16", Sn, !1)),
      zt(t.color, "ansi256", () => Ht(na, "ansi256", Sn, !1)),
      zt(t.color, "ansi16m", () => Ht(oa, "rgb", ia, !1)),
      zt(t.bgColor, "ansi", () => Ht(ra, "ansi16", Sn, !0)),
      zt(t.bgColor, "ansi256", () => Ht(na, "ansi256", Sn, !0)),
      zt(t.bgColor, "ansi16m", () => Ht(oa, "rgb", ia, !0)),
      t;
  }
  u(kp, "assembleStyles");
  Object.defineProperty(sa, "exports", { enumerable: !0, get: kp });
});
var Ko = W(() => {
  d();
  f();
  m();
});
var ca = W((Fh, ua) => {
  "use strict";
  d();
  f();
  m();
  var Np = u((e, t, r) => {
      let n = e.indexOf(t);
      if (n === -1) return e;
      let o = t.length, i = 0, s = "";
      do s += e.substr(i, n - i) + t + r,
        i = n + o,
        n = e.indexOf(t, i); while (n !== -1);
      return s += e.substr(i), s;
    }, "stringReplaceAll"),
    jp = u((e, t, r, n) => {
      let o = 0, i = "";
      do {
        let s = e[n - 1] === "\r";
        i += e.substr(o, (s ? n - 1 : n) - o) + t + (s
          ? `\r
`
          : `
`) +
          r,
          o = n + 1,
          n = e.indexOf(
            `
`,
            o,
          );
      } while (n !== -1);
      return i += e.substr(o), i;
    }, "stringEncaseCRLFWithFirstIndex");
  ua.exports = { stringReplaceAll: Np, stringEncaseCRLFWithFirstIndex: jp };
});
var da = W(($h, ma) => {
  "use strict";
  d();
  f();
  m();
  var $p =
      /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    la = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    Lp = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    Bp = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
    qp = new Map([
      [
        "n",
        `
`,
      ],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"],
    ]);
  function fa(e) {
    let t = e[0] === "u", r = e[1] === "{";
    return t && !r && e.length === 5 || e[0] === "x" && e.length === 3
      ? String.fromCharCode(parseInt(e.slice(1), 16))
      : t && r
      ? String.fromCodePoint(parseInt(e.slice(2, -1), 16))
      : qp.get(e) || e;
  }
  u(fa, "unescape");
  function Up(e, t) {
    let r = [], n = t.trim().split(/\s*,\s*/g), o;
    for (let i of n) {
      let s = Number(i);
      if (!Number.isNaN(s)) r.push(s);
      else if (o = i.match(Lp)) {
        r.push(o[2].replace(Bp, (a, c, l) => c ? fa(c) : l));
      } else {throw new Error(
          `Invalid Chalk template style argument: ${i} (in style '${e}')`,
        );}
    }
    return r;
  }
  u(Up, "parseArguments");
  function Vp(e) {
    la.lastIndex = 0;
    let t = [], r;
    for (; (r = la.exec(e)) !== null;) {
      let n = r[1];
      if (r[2]) {
        let o = Up(n, r[2]);
        t.push([n].concat(o));
      } else t.push([n]);
    }
    return t;
  }
  u(Vp, "parseStyle");
  function pa(e, t) {
    let r = {};
    for (let o of t) {
      for (let i of o.styles) {
        r[i[0]] = o.inverse ? null : i.slice(1);
      }
    }
    let n = e;
    for (let [o, i] of Object.entries(r)) {
      if (!!Array.isArray(i)) {
        if (!(o in n)) throw new Error(`Unknown Chalk style: ${o}`);
        n = i.length > 0 ? n[o](...i) : n[o];
      }
    }
    return n;
  }
  u(pa, "buildStyle");
  ma.exports = (e, t) => {
    let r = [], n = [], o = [];
    if (
      t.replace($p, (i, s, a, c, l, p) => {
        if (s) o.push(fa(s));
        else if (c) {
          let g = o.join("");
          o = [],
            n.push(r.length === 0 ? g : pa(e, r)(g)),
            r.push({ inverse: a, styles: Vp(c) });
        } else if (l) {
          if (r.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          n.push(pa(e, r)(o.join(""))), o = [], r.pop();
        } else o.push(p);
      }),
        n.push(o.join("")),
        r.length > 0
    ) {
      let i = `Chalk template literal is missing ${r.length} closing bracket${
        r.length === 1 ? "" : "s"
      } (\`}\`)`;
      throw new Error(i);
    }
    return n.join("");
  };
});
var It = W((Vh, xa) => {
  "use strict";
  d();
  f();
  m();
  var Mr = aa(),
    { stdout: zo, stderr: Ho } = Ko(),
    { stringReplaceAll: Gp, stringEncaseCRLFWithFirstIndex: Kp } = ca(),
    { isArray: In } = Array,
    ya = ["ansi", "ansi", "ansi256", "ansi16m"],
    Wt = Object.create(null),
    Jp = u((e, t = {}) => {
      if (
        t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)
      ) throw new Error("The `level` option should be an integer from 0 to 3");
      let r = zo ? zo.level : 0;
      e.level = t.level === void 0 ? r : t.level;
    }, "applyOptions"),
    Cn = class {
      constructor(t) {
        return ha(t);
      }
    };
  u(Cn, "ChalkClass");
  var ha = u((e) => {
    let t = {};
    return Jp(t, e),
      t.template = (...r) => wa(t.template, ...r),
      Object.setPrototypeOf(t, Rn.prototype),
      Object.setPrototypeOf(t.template, t),
      t.template.constructor = () => {
        throw new Error(
          "`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.",
        );
      },
      t.template.Instance = Cn,
      t.template;
  }, "chalkFactory");
  function Rn(e) {
    return ha(e);
  }
  u(Rn, "Chalk");
  for (let [e, t] of Object.entries(Mr)) {
    Wt[e] = {
      get() {
        let r = _n(this, Wo(t.open, t.close, this._styler), this._isEmpty);
        return Object.defineProperty(this, e, { value: r }), r;
      },
    };
  }
  Wt.visible = {
    get() {
      let e = _n(this, this._styler, !0);
      return Object.defineProperty(this, "visible", { value: e }), e;
    },
  };
  var ba = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (let e of ba) {
    Wt[e] = {
      get() {
        let { level: t } = this;
        return function (...r) {
          let n = Wo(Mr.color[ya[t]][e](...r), Mr.color.close, this._styler);
          return _n(this, n, this._isEmpty);
        };
      },
    };
  }
  for (let e of ba) {
    let t = "bg" + e[0].toUpperCase() + e.slice(1);
    Wt[t] = {
      get() {
        let { level: r } = this;
        return function (...n) {
          let o = Wo(
            Mr.bgColor[ya[r]][e](...n),
            Mr.bgColor.close,
            this._styler,
          );
          return _n(this, o, this._isEmpty);
        };
      },
    };
  }
  var zp = Object.defineProperties(() => {}, {
      ...Wt,
      level: {
        enumerable: !0,
        get() {
          return this._generator.level;
        },
        set(e) {
          this._generator.level = e;
        },
      },
    }),
    Wo = u((e, t, r) => {
      let n, o;
      return r === void 0
        ? (n = e, o = t)
        : (n = r.openAll + e, o = t + r.closeAll),
        { open: e, close: t, openAll: n, closeAll: o, parent: r };
    }, "createStyler"),
    _n = u((e, t, r) => {
      let n = u(
        (...o) =>
          In(o[0]) && In(o[0].raw)
            ? ga(n, wa(n, ...o))
            : ga(n, o.length === 1 ? "" + o[0] : o.join(" ")),
        "builder",
      );
      return Object.setPrototypeOf(n, zp),
        n._generator = e,
        n._styler = t,
        n._isEmpty = r,
        n;
    }, "createBuilder"),
    ga = u((e, t) => {
      if (e.level <= 0 || !t) return e._isEmpty ? "" : t;
      let r = e._styler;
      if (r === void 0) return t;
      let { openAll: n, closeAll: o } = r;
      if (t.indexOf("\x1B") !== -1) {
        for (; r !== void 0;) t = Gp(t, r.close, r.open), r = r.parent;
      }
      let i = t.indexOf(`
`);
      return i !== -1 && (t = Kp(t, o, n, i)), n + t + o;
    }, "applyStyle"),
    Jo,
    wa = u((e, ...t) => {
      let [r] = t;
      if (!In(r) || !In(r.raw)) return t.join(" ");
      let n = t.slice(1), o = [r.raw[0]];
      for (let i = 1; i < r.length; i++) {
        o.push(String(n[i - 1]).replace(/[{}\\]/g, "\\$&"), String(r.raw[i]));
      }
      return Jo === void 0 && (Jo = da()), Jo(e, o.join(""));
    }, "chalkTag");
  Object.defineProperties(Rn.prototype, Wt);
  var Fn = Rn();
  Fn.supportsColor = zo;
  Fn.stderr = Rn({ level: Ho ? Ho.level : 0 });
  Fn.stderr.supportsColor = Ho;
  xa.exports = Fn;
});
var Hp,
  Dn,
  Qo = An(() => {
    d();
    f();
    m();
    Hp = {
      existsSync() {
        return !1;
      },
    }, Dn = Hp;
  });
var va = W((Xh, Ea) => {
  d();
  f();
  m();
  var Qt = 1e3,
    Yt = Qt * 60,
    Zt = Yt * 60,
    Rt = Zt * 24,
    Wp = Rt * 7,
    Qp = Rt * 365.25;
  Ea.exports = function (e, t) {
    t = t || {};
    var r = typeof e;
    if (r === "string" && e.length > 0) return Yp(e);
    if (r === "number" && isFinite(e)) return t.long ? Xp(e) : Zp(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e),
    );
  };
  function Yp(e) {
    if (e = String(e), !(e.length > 100)) {
      var t =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i
          .exec(e);
      if (!!t) {
        var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
        switch (n) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * Qp;
          case "weeks":
          case "week":
          case "w":
            return r * Wp;
          case "days":
          case "day":
          case "d":
            return r * Rt;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * Zt;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * Yt;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * Qt;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;
          default:
            return;
        }
      }
    }
  }
  u(Yp, "parse");
  function Zp(e) {
    var t = Math.abs(e);
    return t >= Rt
      ? Math.round(e / Rt) + "d"
      : t >= Zt
      ? Math.round(e / Zt) + "h"
      : t >= Yt
      ? Math.round(e / Yt) + "m"
      : t >= Qt
      ? Math.round(e / Qt) + "s"
      : e + "ms";
  }
  u(Zp, "fmtShort");
  function Xp(e) {
    var t = Math.abs(e);
    return t >= Rt
      ? kn(e, t, Rt, "day")
      : t >= Zt
      ? kn(e, t, Zt, "hour")
      : t >= Yt
      ? kn(e, t, Yt, "minute")
      : t >= Qt
      ? kn(e, t, Qt, "second")
      : e + " ms";
  }
  u(Xp, "fmtLong");
  function kn(e, t, r, n) {
    var o = t >= r * 1.5;
    return Math.round(e / r) + " " + n + (o ? "s" : "");
  }
  u(kn, "plural");
});
var Yo = W((o0, Aa) => {
  d();
  f();
  m();
  function ef(e) {
    r.debug = r,
      r.default = r,
      r.coerce = c,
      r.disable = i,
      r.enable = o,
      r.enabled = s,
      r.humanize = va(),
      r.destroy = l,
      Object.keys(e).forEach((p) => {
        r[p] = e[p];
      }),
      r.names = [],
      r.skips = [],
      r.formatters = {};
    function t(p) {
      let g = 0;
      for (let y = 0; y < p.length; y++) {
        g = (g << 5) - g + p.charCodeAt(y), g |= 0;
      }
      return r.colors[Math.abs(g) % r.colors.length];
    }
    u(t, "selectColor"), r.selectColor = t;
    function r(p) {
      let g, y = null, b, v;
      function h(...A) {
        if (!h.enabled) return;
        let O = h, T = Number(new Date()), M = T - (g || T);
        O.diff = M,
          O.prev = g,
          O.curr = T,
          g = T,
          A[0] = r.coerce(A[0]),
          typeof A[0] != "string" && A.unshift("%O");
        let P = 0;
        A[0] = A[0].replace(/%([a-zA-Z%])/g, (_, F) => {
          if (_ === "%%") return "%";
          P++;
          let j = r.formatters[F];
          if (typeof j == "function") {
            let V = A[P];
            _ = j.call(O, V), A.splice(P, 1), P--;
          }
          return _;
        }),
          r.formatArgs.call(O, A),
          (O.log || r.log).apply(O, A);
      }
      return u(h, "debug"),
        h.namespace = p,
        h.useColors = r.useColors(),
        h.color = r.selectColor(p),
        h.extend = n,
        h.destroy = r.destroy,
        Object.defineProperty(h, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () =>
            y !== null
              ? y
              : (b !== r.namespaces && (b = r.namespaces, v = r.enabled(p)), v),
          set: (A) => {
            y = A;
          },
        }),
        typeof r.init == "function" && r.init(h),
        h;
    }
    u(r, "createDebug");
    function n(p, g) {
      let y = r(this.namespace + (typeof g == "undefined" ? ":" : g) + p);
      return y.log = this.log, y;
    }
    u(n, "extend");
    function o(p) {
      r.save(p), r.namespaces = p, r.names = [], r.skips = [];
      let g, y = (typeof p == "string" ? p : "").split(/[\s,]+/), b = y.length;
      for (g = 0; g < b; g++) {
        !y[g] ||
          (p = y[g].replace(/\*/g, ".*?"),
            p[0] === "-"
              ? r.skips.push(new RegExp("^" + p.slice(1) + "$"))
              : r.names.push(new RegExp("^" + p + "$")));
      }
    }
    u(o, "enable");
    function i() {
      let p = [...r.names.map(a), ...r.skips.map(a).map((g) => "-" + g)].join(
        ",",
      );
      return r.enable(""), p;
    }
    u(i, "disable");
    function s(p) {
      if (p[p.length - 1] === "*") return !0;
      let g, y;
      for (g = 0, y = r.skips.length; g < y; g++) {
        if (r.skips[g].test(p)) return !1;
      }
      for (g = 0, y = r.names.length; g < y; g++) {
        if (r.names[g].test(p)) return !0;
      }
      return !1;
    }
    u(s, "enabled");
    function a(p) {
      return p.toString().substring(2, p.toString().length - 2).replace(
        /\.\*\?$/,
        "*",
      );
    }
    u(a, "toNamespace");
    function c(p) {
      return p instanceof Error ? p.stack || p.message : p;
    }
    u(c, "coerce");
    function l() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
      );
    }
    return u(l, "destroy"), r.enable(r.load()), r;
  }
  u(ef, "setup");
  Aa.exports = ef;
});
var Pa = W((Pe, Nn) => {
  d();
  f();
  m();
  Pe.formatArgs = rf;
  Pe.save = nf;
  Pe.load = of;
  Pe.useColors = tf;
  Pe.storage = sf();
  Pe.destroy = (() => {
    let e = !1;
    return () => {
      e ||
        (e = !0,
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
          ));
    };
  })();
  Pe.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33",
  ];
  function tf() {
    return typeof window != "undefined" && window.process &&
        (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator != "undefined" && navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : typeof document != "undefined" && document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance ||
        typeof window != "undefined" && window.console &&
          (window.console.firebug ||
            window.console.exception && window.console.table) ||
        typeof navigator != "undefined" && navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31 ||
        typeof navigator != "undefined" && navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  u(tf, "useColors");
  function rf(e) {
    if (
      e[0] = (this.useColors ? "%c" : "") + this.namespace +
        (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") +
        "+" + Nn.exports.humanize(this.diff), !this.useColors
    ) return;
    let t = "color: " + this.color;
    e.splice(1, 0, t, "color: inherit");
    let r = 0, n = 0;
    e[0].replace(/%[a-zA-Z%]/g, (o) => {
      o !== "%%" && (r++, o === "%c" && (n = r));
    }), e.splice(n, 0, t);
  }
  u(rf, "formatArgs");
  Pe.log = console.debug || console.log || (() => {});
  function nf(e) {
    try {
      e ? Pe.storage.setItem("debug", e) : Pe.storage.removeItem("debug");
    } catch (t) {}
  }
  u(nf, "save");
  function of() {
    let e;
    try {
      e = Pe.storage.getItem("debug");
    } catch (t) {}
    return !e && typeof w != "undefined" && "env" in w && (e = w.env.DEBUG), e;
  }
  u(of, "load");
  function sf() {
    try {
      return localStorage;
    } catch (e) {}
  }
  u(sf, "localstorage");
  Nn.exports = Yo()(Pe);
  var { formatters: af } = Nn.exports;
  af.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return "[UnexpectedJSONParseError]: " + t.message;
    }
  };
});
var Ta = W((jn) => {
  d();
  f();
  m();
  jn.isatty = function () {
    return !1;
  };
  function uf() {
    throw new Error("tty.ReadStream is not implemented");
  }
  u(uf, "t");
  jn.ReadStream = uf;
  function cf() {
    throw new Error("tty.WriteStream is not implemented");
  }
  u(cf, "e");
  jn.WriteStream = cf;
});
var Na = W((J) => {
  d();
  f();
  m();
  var re = u(
      (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      "p",
    ),
    Ma = re((e, t) => {
      "use strict";
      t.exports = function () {
        if (
          typeof Symbol != "function" ||
          typeof Object.getOwnPropertySymbols != "function"
        ) return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var r = {}, n = Symbol("test"), o = Object(n);
        if (
          typeof n == "string" ||
          Object.prototype.toString.call(n) !== "[object Symbol]" ||
          Object.prototype.toString.call(o) !== "[object Symbol]"
        ) return !1;
        var i = 42;
        r[n] = i;
        for (n in r) return !1;
        if (
          typeof Object.keys == "function" && Object.keys(r).length !== 0 ||
          typeof Object.getOwnPropertyNames == "function" &&
            Object.getOwnPropertyNames(r).length !== 0
        ) return !1;
        var s = Object.getOwnPropertySymbols(r);
        if (
          s.length !== 1 || s[0] !== n ||
          !Object.prototype.propertyIsEnumerable.call(r, n)
        ) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var a = Object.getOwnPropertyDescriptor(r, n);
          if (a.value !== i || a.enumerable !== !0) return !1;
        }
        return !0;
      };
    }),
    Vn = re((e, t) => {
      "use strict";
      var r = Ma();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    }),
    lf = re((e, t) => {
      "use strict";
      var r = typeof Symbol < "u" && Symbol, n = Ma();
      t.exports = function () {
        return typeof r != "function" || typeof Symbol != "function" ||
            typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol"
          ? !1
          : n();
      };
    }),
    pf = re((e, t) => {
      "use strict";
      var r = "Function.prototype.bind called on incompatible ",
        n = Array.prototype.slice,
        o = Object.prototype.toString,
        i = "[object Function]";
      t.exports = function (s) {
        var a = this;
        if (typeof a != "function" || o.call(a) !== i) {
          throw new TypeError(r + a);
        }
        for (
          var c = n.call(arguments, 1),
            l,
            p = function () {
              if (this instanceof l) {
                var h = a.apply(this, c.concat(n.call(arguments)));
                return Object(h) === h ? h : this;
              } else return a.apply(s, c.concat(n.call(arguments)));
            },
            g = Math.max(0, a.length - c.length),
            y = [],
            b = 0;
          b < g;
          b++
        ) y.push("$" + b);
        if (
          l = E(
            "binder",
            "return function (" + y.join(",") +
              "){ return binder.apply(this,arguments); }",
          )(p), a.prototype
        ) {
          var v = u(function () {}, "c");
          v.prototype = a.prototype, l.prototype = new v(), v.prototype = null;
        }
        return l;
      };
    }),
    ti = re((e, t) => {
      "use strict";
      var r = pf();
      t.exports = E.prototype.bind || r;
    }),
    ff = re((e, t) => {
      "use strict";
      var r = ti();
      t.exports = r.call(E.call, Object.prototype.hasOwnProperty);
    }),
    ri = re((e, t) => {
      "use strict";
      var r,
        n = SyntaxError,
        o = E,
        i = TypeError,
        s = u(function (K) {
          try {
            return o('"use strict"; return (' + K + ").constructor;")();
          } catch (X) {}
        }, "lr"),
        a = Object.getOwnPropertyDescriptor;
      if (a) {
        try {
          a({}, "");
        } catch (K) {
          a = null;
        }
      }
      var c = u(function () {
          throw new i();
        }, "gr"),
        l = a
          ? function () {
            try {
              return arguments.callee, c;
            } catch (K) {
              try {
                return a(arguments, "callee").get;
              } catch (X) {
                return c;
              }
            }
          }()
          : c,
        p = lf()(),
        g = Object.getPrototypeOf || function (K) {
          return K.__proto__;
        },
        y = {},
        b = typeof Uint8Array > "u" ? r : g(Uint8Array),
        v = {
          "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": p ? g([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": y,
          "%AsyncGenerator%": y,
          "%AsyncGeneratorFunction%": y,
          "%AsyncIteratorPrototype%": y,
          "%Atomics%": typeof Atomics > "u" ? r : Atomics,
          "%BigInt%": typeof BigInt > "u" ? r : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView > "u" ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": void 0,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
          "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
          "%FinalizationRegistry%": typeof FinalizationRegistry > "u"
            ? r
            : FinalizationRegistry,
          "%Function%": o,
          "%GeneratorFunction%": y,
          "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": p ? g(g([][Symbol.iterator]())) : r,
          "%JSON%": typeof JSON == "object" ? JSON : r,
          "%Map%": typeof Map > "u" ? r : Map,
          "%MapIteratorPrototype%": typeof Map > "u" || !p
            ? r
            : g(new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise > "u" ? r : Promise,
          "%Proxy%": typeof Proxy > "u" ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect > "u" ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set > "u" ? r : Set,
          "%SetIteratorPrototype%": typeof Set > "u" || !p
            ? r
            : g(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u"
            ? r
            : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": p ? g(""[Symbol.iterator]()) : r,
          "%Symbol%": p ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": l,
          "%TypedArray%": b,
          "%TypeError%": i,
          "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
          "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u"
            ? r
            : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
          "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
          "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
        },
        h = u(function K(X) {
          var z;
          if (X === "%AsyncFunction%") z = s("async function () {}");
          else if (X === "%GeneratorFunction%") z = s("function* () {}");
          else if (X === "%AsyncGeneratorFunction%") {
            z = s("async function* () {}");
          } else if (X === "%AsyncGenerator%") {
            var H = K("%AsyncGeneratorFunction%");
            H && (z = H.prototype);
          } else if (X === "%AsyncIteratorPrototype%") {
            var L = K("%AsyncGenerator%");
            L && (z = g(L.prototype));
          }
          return v[X] = z, z;
        }, "r"),
        A = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        O = ti(),
        T = ff(),
        M = O.call(E.call, Array.prototype.concat),
        P = O.call(E.apply, Array.prototype.splice),
        S = O.call(E.call, String.prototype.replace),
        _ = O.call(E.call, String.prototype.slice),
        F = O.call(E.call, RegExp.prototype.exec),
        j =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        V = /\\(\\)?/g,
        te = u(function (K) {
          var X = _(K, 0, 1), z = _(K, -1);
          if (X === "%" && z !== "%") {
            throw new n("invalid intrinsic syntax, expected closing `%`");
          }
          if (z === "%" && X !== "%") {
            throw new n("invalid intrinsic syntax, expected opening `%`");
          }
          var H = [];
          return S(K, j, function (L, at, ie, qt) {
            H[H.length] = ie ? S(qt, V, "$1") : at || L;
          }),
            H;
        }, "At"),
        G = u(function (K, X) {
          var z = K, H;
          if (T(A, z) && (H = A[z], z = "%" + H[0] + "%"), T(v, z)) {
            var L = v[z];
            if (L === y && (L = h(z)), typeof L > "u" && !X) {
              throw new i(
                "intrinsic " + K +
                  " exists, but is not available. Please file an issue!",
              );
            }
            return { alias: H, name: z, value: L };
          }
          throw new n("intrinsic " + K + " does not exist!");
        }, "ht");
      t.exports = function (K, X) {
        if (typeof K != "string" || K.length === 0) {
          throw new i("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof X != "boolean") {
          throw new i('"allowMissing" argument must be a boolean');
        }
        if (F(/^%?[^%]*%?$/, K) === null) {
          throw new n(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
          );
        }
        var z = te(K),
          H = z.length > 0 ? z[0] : "",
          L = G("%" + H + "%", X),
          at = L.name,
          ie = L.value,
          qt = !1,
          ut = L.alias;
        ut && (H = ut[0], P(z, M([0, 1], ut)));
        for (var Ot = 1, Ue = !0; Ot < z.length; Ot += 1) {
          var Se = z[Ot], ct = _(Se, 0, 1), Ve = _(Se, -1);
          if (
            (ct === '"' || ct === "'" || ct === "`" || Ve === '"' ||
              Ve === "'" || Ve === "`") && ct !== Ve
          ) throw new n("property names with quotes must have matching quotes");
          if (
            (Se === "constructor" || !Ue) && (qt = !0),
              H += "." + Se,
              at = "%" + H + "%",
              T(v, at)
          ) ie = v[at];
          else if (ie != null) {
            if (!(Se in ie)) {
              if (!X) {
                throw new i(
                  "base intrinsic for " + K +
                    " exists, but the property is not available.",
                );
              }
              return;
            }
            if (a && Ot + 1 >= z.length) {
              var St = a(ie, Se);
              Ue = !!St,
                Ue && "get" in St && !("originalValue" in St.get)
                  ? ie = St.get
                  : ie = ie[Se];
            } else Ue = T(ie, Se), ie = ie[Se];
            Ue && !qt && (v[at] = ie);
          }
        }
        return ie;
      };
    }),
    mf = re((e, t) => {
      "use strict";
      var r = ti(),
        n = ri(),
        o = n("%Function.prototype.apply%"),
        i = n("%Function.prototype.call%"),
        s = n("%Reflect.apply%", !0) || r.call(i, o),
        a = n("%Object.getOwnPropertyDescriptor%", !0),
        c = n("%Object.defineProperty%", !0),
        l = n("%Math.max%");
      if (c) {
        try {
          c({}, "a", { value: 1 });
        } catch (g) {
          c = null;
        }
      }
      t.exports = function (g) {
        var y = s(r, i, arguments);
        if (a && c) {
          var b = a(y, "length");
          b.configurable &&
            c(y, "length", {
              value: 1 + l(0, g.length - (arguments.length - 1)),
            });
        }
        return y;
      };
      var p = u(function () {
        return s(r, o, arguments);
      }, "ee");
      c ? c(t.exports, "apply", { value: p }) : t.exports.apply = p;
    }),
    ni = re((e, t) => {
      "use strict";
      var r = ri(), n = mf(), o = n(r("String.prototype.indexOf"));
      t.exports = function (i, s) {
        var a = r(i, !!s);
        return typeof a == "function" && o(i, ".prototype.") > -1 ? n(a) : a;
      };
    }),
    df = re((e, t) => {
      "use strict";
      var r = Vn()(),
        n = ni(),
        o = n("Object.prototype.toString"),
        i = u(function (c) {
          return r && c && typeof c == "object" && Symbol.toStringTag in c
            ? !1
            : o(c) === "[object Arguments]";
        }, "H"),
        s = u(function (c) {
          return i(c) ? !0 : c !== null && typeof c == "object" &&
            typeof c.length == "number" && c.length >= 0 &&
            o(c) !== "[object Array]" && o(c.callee) === "[object Function]";
        }, "se"),
        a = function () {
          return i(arguments);
        }();
      i.isLegacyArguments = s, t.exports = a ? i : s;
    }),
    gf = re((e, t) => {
      "use strict";
      var r = Object.prototype.toString,
        n = E.prototype.toString,
        o = /^\s*(?:function)?\*/,
        i = Vn()(),
        s = Object.getPrototypeOf,
        a = u(function () {
          if (!i) return !1;
          try {
            return E("return function*() {}")();
          } catch (l) {}
        }, "Ft"),
        c;
      t.exports = function (l) {
        if (typeof l != "function") return !1;
        if (o.test(n.call(l))) return !0;
        if (!i) {
          var p = r.call(l);
          return p === "[object GeneratorFunction]";
        }
        if (!s) return !1;
        if (typeof c > "u") {
          var g = a();
          c = g ? s(g) : !1;
        }
        return s(l) === c;
      };
    }),
    yf = re((e, t) => {
      "use strict";
      var r = E.prototype.toString,
        n = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
        o,
        i;
      if (
        typeof n == "function" && typeof Object.defineProperty == "function"
      ) {
        try {
          o = Object.defineProperty({}, "length", {
            get: function () {
              throw i;
            },
          }),
            i = {},
            n(
              function () {
                throw 42;
              },
              null,
              o,
            );
        } catch (P) {
          P !== i && (n = null);
        }
      } else n = null;
      var s = /^\s*class\b/,
        a = u(function (P) {
          try {
            var S = r.call(P);
            return s.test(S);
          } catch (_) {
            return !1;
          }
        }, "vr"),
        c = u(function (P) {
          try {
            return a(P) ? !1 : (r.call(P), !0);
          } catch (S) {
            return !1;
          }
        }, "hr"),
        l = Object.prototype.toString,
        p = "[object Object]",
        g = "[object Function]",
        y = "[object GeneratorFunction]",
        b = "[object HTMLAllCollection]",
        v = "[object HTML document.all class]",
        h = "[object HTMLCollection]",
        A = typeof Symbol == "function" && !!Symbol.toStringTag,
        O = !(0 in [,]),
        T = u(function () {
          return !1;
        }, "Or");
      typeof document == "object" &&
        (M = document.all,
          l.call(M) === l.call(document.all) && (T = u(function (P) {
            if ((O || !P) && (typeof P > "u" || typeof P == "object")) {
              try {
                var S = l.call(P);
                return (S === b || S === v || S === h || S === p) &&
                  P("") == null;
              } catch (_) {}
            }
            return !1;
          }, "Or")));
      var M;
      t.exports = n
        ? function (P) {
          if (T(P)) return !0;
          if (!P || typeof P != "function" && typeof P != "object") return !1;
          try {
            n(P, null, o);
          } catch (S) {
            if (S !== i) return !1;
          }
          return !a(P) && c(P);
        }
        : function (P) {
          if (T(P)) return !0;
          if (!P || typeof P != "function" && typeof P != "object") return !1;
          if (A) return c(P);
          if (a(P)) return !1;
          var S = l.call(P);
          return S !== g && S !== y && !/^\[object HTML/.test(S) ? !1 : c(P);
        };
    }),
    Oa = re((e, t) => {
      "use strict";
      var r = yf(),
        n = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty,
        i = u(function (l, p, g) {
          for (var y = 0, b = l.length; y < b; y++) {
            o.call(l, y) && (g == null ? p(l[y], y, l) : p.call(g, l[y], y, l));
          }
        }, "qt"),
        s = u(function (l, p, g) {
          for (var y = 0, b = l.length; y < b; y++) {
            g == null ? p(l.charAt(y), y, l) : p.call(g, l.charAt(y), y, l);
          }
        }, "Gt"),
        a = u(function (l, p, g) {
          for (var y in l) {
            o.call(l, y) && (g == null ? p(l[y], y, l) : p.call(g, l[y], y, l));
          }
        }, "Wt"),
        c = u(function (l, p, g) {
          if (!r(p)) throw new TypeError("iterator must be a function");
          var y;
          arguments.length >= 3 && (y = g),
            n.call(l) === "[object Array]"
              ? i(l, p, y)
              : typeof l == "string"
              ? s(l, p, y)
              : a(l, p, y);
        }, "_t");
      t.exports = c;
    }),
    Sa = re((e, t) => {
      "use strict";
      var r = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ],
        n = typeof globalThis > "u" ? global : globalThis;
      t.exports = function () {
        for (
          var o = [], i = 0;
          i < r.length;
          i++
        ) typeof n[r[i]] == "function" && (o[o.length] = r[i]);
        return o;
      };
    }),
    Ca = re((e, t) => {
      "use strict";
      var r = ri(), n = r("%Object.getOwnPropertyDescriptor%", !0);
      if (n) {
        try {
          n([], "length");
        } catch (o) {
          n = null;
        }
      }
      t.exports = n;
    }),
    Ia = re((e, t) => {
      "use strict";
      var r = Oa(),
        n = Sa(),
        o = ni(),
        i = o("Object.prototype.toString"),
        s = Vn()(),
        a = typeof globalThis > "u" ? global : globalThis,
        c = n(),
        l = o("Array.prototype.indexOf", !0) || function (h, A) {
          for (var O = 0; O < h.length; O += 1) if (h[O] === A) return O;
          return -1;
        },
        p = o("String.prototype.slice"),
        g = {},
        y = Ca(),
        b = Object.getPrototypeOf;
      s && y && b && r(c, function (h) {
        var A = new a[h]();
        if (Symbol.toStringTag in A) {
          var O = b(A), T = y(O, Symbol.toStringTag);
          if (!T) {
            var M = b(O);
            T = y(M, Symbol.toStringTag);
          }
          g[h] = T.get;
        }
      });
      var v = u(function (h) {
        var A = !1;
        return r(g, function (O, T) {
          if (!A) {
            try {
              A = O.call(h) === T;
            } catch (M) {}
          }
        }),
          A;
      }, "Kt");
      t.exports = function (h) {
        if (!h || typeof h != "object") return !1;
        if (!s || !(Symbol.toStringTag in h)) {
          var A = p(i(h), 8, -1);
          return l(c, A) > -1;
        }
        return y ? v(h) : !1;
      };
    }),
    hf = re((e, t) => {
      "use strict";
      var r = Oa(),
        n = Sa(),
        o = ni(),
        i = o("Object.prototype.toString"),
        s = Vn()(),
        a = typeof globalThis > "u" ? global : globalThis,
        c = n(),
        l = o("String.prototype.slice"),
        p = {},
        g = Ca(),
        y = Object.getPrototypeOf;
      s && g && y && r(c, function (h) {
        if (typeof a[h] == "function") {
          var A = new a[h]();
          if (Symbol.toStringTag in A) {
            var O = y(A), T = g(O, Symbol.toStringTag);
            if (!T) {
              var M = y(O);
              T = g(M, Symbol.toStringTag);
            }
            p[h] = T.get;
          }
        }
      });
      var b = u(function (h) {
          var A = !1;
          return r(p, function (O, T) {
            if (!A) {
              try {
                var M = O.call(h);
                M === T && (A = M);
              } catch (P) {}
            }
          }),
            A;
        }, "tn"),
        v = Ia();
      t.exports = function (h) {
        return v(h)
          ? !s || !(Symbol.toStringTag in h) ? l(i(h), 8, -1) : b(h)
          : !1;
      };
    }),
    bf = re((e) => {
      "use strict";
      var t = df(), r = gf(), n = hf(), o = Ia();
      function i(R) {
        return R.call.bind(R);
      }
      u(i, "R");
      var s = typeof BigInt < "u",
        a = typeof Symbol < "u",
        c = i(Object.prototype.toString),
        l = i(Number.prototype.valueOf),
        p = i(String.prototype.valueOf),
        g = i(Boolean.prototype.valueOf);
      s && (y = i(BigInt.prototype.valueOf));
      var y;
      a && (b = i(Symbol.prototype.valueOf));
      var b;
      function v(R, Gl) {
        if (typeof R != "object") return !1;
        try {
          return Gl(R), !0;
        } catch (yy) {
          return !1;
        }
      }
      u(v, "N"),
        e.isArgumentsObject = t,
        e.isGeneratorFunction = r,
        e.isTypedArray = o;
      function h(R) {
        return typeof Promise < "u" && R instanceof Promise ||
          R !== null && typeof R == "object" && typeof R.then == "function" &&
            typeof R.catch == "function";
      }
      u(h, "yn"), e.isPromise = h;
      function A(R) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView
          ? ArrayBuffer.isView(R)
          : o(R) || Se(R);
      }
      u(A, "cn"), e.isArrayBufferView = A;
      function O(R) {
        return n(R) === "Uint8Array";
      }
      u(O, "pn"), e.isUint8Array = O;
      function T(R) {
        return n(R) === "Uint8ClampedArray";
      }
      u(T, "ln"), e.isUint8ClampedArray = T;
      function M(R) {
        return n(R) === "Uint16Array";
      }
      u(M, "gn"), e.isUint16Array = M;
      function P(R) {
        return n(R) === "Uint32Array";
      }
      u(P, "dn"), e.isUint32Array = P;
      function S(R) {
        return n(R) === "Int8Array";
      }
      u(S, "bn"), e.isInt8Array = S;
      function _(R) {
        return n(R) === "Int16Array";
      }
      u(_, "mn"), e.isInt16Array = _;
      function F(R) {
        return n(R) === "Int32Array";
      }
      u(F, "An"), e.isInt32Array = F;
      function j(R) {
        return n(R) === "Float32Array";
      }
      u(j, "hn"), e.isFloat32Array = j;
      function V(R) {
        return n(R) === "Float64Array";
      }
      u(V, "Sn"), e.isFloat64Array = V;
      function te(R) {
        return n(R) === "BigInt64Array";
      }
      u(te, "vn"), e.isBigInt64Array = te;
      function G(R) {
        return n(R) === "BigUint64Array";
      }
      u(G, "On"), e.isBigUint64Array = G;
      function K(R) {
        return c(R) === "[object Map]";
      }
      u(K, "X"), K.working = typeof Map < "u" && K(new Map());
      function X(R) {
        return typeof Map > "u" ? !1 : K.working ? K(R) : R instanceof Map;
      }
      u(X, "jn"), e.isMap = X;
      function z(R) {
        return c(R) === "[object Set]";
      }
      u(z, "rr"), z.working = typeof Set < "u" && z(new Set());
      function H(R) {
        return typeof Set > "u" ? !1 : z.working ? z(R) : R instanceof Set;
      }
      u(H, "Pn"), e.isSet = H;
      function L(R) {
        return c(R) === "[object WeakMap]";
      }
      u(L, "er"), L.working = typeof WeakMap < "u" && L(new WeakMap());
      function at(R) {
        return typeof WeakMap > "u"
          ? !1
          : L.working
          ? L(R)
          : R instanceof WeakMap;
      }
      u(at, "wn"), e.isWeakMap = at;
      function ie(R) {
        return c(R) === "[object WeakSet]";
      }
      u(ie, "Dr"), ie.working = typeof WeakSet < "u" && ie(new WeakSet());
      function qt(R) {
        return ie(R);
      }
      u(qt, "En"), e.isWeakSet = qt;
      function ut(R) {
        return c(R) === "[object ArrayBuffer]";
      }
      u(ut, "tr"),
        ut.working = typeof ArrayBuffer < "u" && ut(new ArrayBuffer());
      function Ot(R) {
        return typeof ArrayBuffer > "u"
          ? !1
          : ut.working
          ? ut(R)
          : R instanceof ArrayBuffer;
      }
      u(Ot, "qe"), e.isArrayBuffer = Ot;
      function Ue(R) {
        return c(R) === "[object DataView]";
      }
      u(Ue, "nr"),
        Ue.working = typeof ArrayBuffer < "u" && typeof DataView < "u" &&
          Ue(new DataView(new ArrayBuffer(1), 0, 1));
      function Se(R) {
        return typeof DataView > "u"
          ? !1
          : Ue.working
          ? Ue(R)
          : R instanceof DataView;
      }
      u(Se, "Ge"), e.isDataView = Se;
      var ct = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
      function Ve(R) {
        return c(R) === "[object SharedArrayBuffer]";
      }
      u(Ve, "M");
      function St(R) {
        return typeof ct > "u"
          ? !1
          : (typeof Ve.working > "u" && (Ve.working = Ve(new ct())),
            Ve.working ? Ve(R) : R instanceof ct);
      }
      u(St, "We"), e.isSharedArrayBuffer = St;
      function jl(R) {
        return c(R) === "[object AsyncFunction]";
      }
      u(jl, "Tn"), e.isAsyncFunction = jl;
      function $l(R) {
        return c(R) === "[object Map Iterator]";
      }
      u($l, "Fn"), e.isMapIterator = $l;
      function Ll(R) {
        return c(R) === "[object Set Iterator]";
      }
      u(Ll, "In"), e.isSetIterator = Ll;
      function Bl(R) {
        return c(R) === "[object Generator]";
      }
      u(Bl, "Bn"), e.isGeneratorObject = Bl;
      function ql(R) {
        return c(R) === "[object WebAssembly.Module]";
      }
      u(ql, "Un"), e.isWebAssemblyCompiledModule = ql;
      function hs(R) {
        return v(R, l);
      }
      u(hs, "_e"), e.isNumberObject = hs;
      function bs(R) {
        return v(R, p);
      }
      u(bs, "ze"), e.isStringObject = bs;
      function ws(R) {
        return v(R, g);
      }
      u(ws, "Ve"), e.isBooleanObject = ws;
      function xs(R) {
        return s && v(R, y);
      }
      u(xs, "Je"), e.isBigIntObject = xs;
      function Es(R) {
        return a && v(R, b);
      }
      u(Es, "Le"), e.isSymbolObject = Es;
      function Ul(R) {
        return hs(R) || bs(R) || ws(R) || xs(R) || Es(R);
      }
      u(Ul, "Rn"), e.isBoxedPrimitive = Ul;
      function Vl(R) {
        return typeof Uint8Array < "u" && (Ot(R) || St(R));
      }
      u(Vl, "Dn"),
        e.isAnyArrayBuffer = Vl,
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
          function (R) {
            Object.defineProperty(e, R, {
              enumerable: !1,
              value: function () {
                throw new Error(R + " is not supported in userland");
              },
            });
          },
        );
    }),
    wf = re((e, t) => {
      t.exports = function (r) {
        return r instanceof x.Buffer;
      };
    }),
    xf = re((e, t) => {
      typeof Object.create == "function"
        ? t.exports = function (r, n) {
          n &&
            (r.super_ = n,
              r.prototype = Object.create(n.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
        }
        : t.exports = function (r, n) {
          if (n) {
            r.super_ = n;
            var o = u(function () {}, "n");
            o.prototype = n.prototype,
              r.prototype = new o(),
              r.prototype.constructor = r;
          }
        };
    }),
    Ra = Object.getOwnPropertyDescriptors || function (e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
      }
      return r;
    },
    Ef = /%[sdj%]/g;
  J.format = function (e) {
    if (!Kn(e)) {
      for (var t = [], r = 0; r < arguments.length; r++) {
        t.push(
          pt(arguments[r]),
        );
      }
      return t.join(" ");
    }
    for (
      var r = 1,
        n = arguments,
        o = n.length,
        i = String(e).replace(Ef, function (c) {
          if (c === "%%") return "%";
          if (r >= o) return c;
          switch (c) {
            case "%s":
              return String(n[r++]);
            case "%d":
              return Number(n[r++]);
            case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (l) {
                return "[Circular]";
              }
            default:
              return c;
          }
        }),
        s = n[r];
      r < o;
      s = n[++r]
    ) Gn(s) || !Xt(s) ? i += " " + s : i += " " + pt(s);
    return i;
  };
  J.deprecate = function (e, t) {
    if (typeof w < "u" && w.noDeprecation === !0) return e;
    if (typeof w > "u") {
      return function () {
        return J.deprecate(e, t).apply(this, arguments);
      };
    }
    var r = !1;
    function n() {
      if (!r) {
        if (w.throwDeprecation) throw new Error(t);
        w.traceDeprecation ? console.trace(t) : console.error(t), r = !0;
      }
      return e.apply(this, arguments);
    }
    return u(n, "n"), n;
  };
  var $n = {}, _a = /^$/;
  w.env.NODE_DEBUG &&
    (Ln = w.env.NODE_DEBUG,
      Ln = Ln.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*")
        .replace(/,/g, "$|^").toUpperCase(),
      _a = new RegExp("^" + Ln + "$", "i"));
  var Ln;
  J.debuglog = function (e) {
    if (e = e.toUpperCase(), !$n[e]) {
      if (_a.test(e)) {
        var t = w.pid;
        $n[e] = function () {
          var r = J.format.apply(J, arguments);
          console.error("%s %d: %s", e, t, r);
        };
      } else $n[e] = function () {};
    }
    return $n[e];
  };
  function pt(e, t) {
    var r = { seen: [], stylize: Af };
    return arguments.length >= 3 && (r.depth = arguments[2]),
      arguments.length >= 4 && (r.colors = arguments[3]),
      oi(t) ? r.showHidden = t : t && J._extend(r, t),
      Ft(r.showHidden) && (r.showHidden = !1),
      Ft(r.depth) && (r.depth = 2),
      Ft(r.colors) && (r.colors = !1),
      Ft(r.customInspect) && (r.customInspect = !0),
      r.colors && (r.stylize = vf),
      qn(r, e, r.depth);
  }
  u(pt, "A");
  J.inspect = pt;
  pt.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  };
  pt.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red",
  };
  function vf(e, t) {
    var r = pt.styles[t];
    return r
      ? "\x1B[" + pt.colors[r][0] + "m" + e + "\x1B[" + pt.colors[r][1] + "m"
      : e;
  }
  u(vf, "xn");
  function Af(e, t) {
    return e;
  }
  u(Af, "Mn");
  function Pf(e) {
    var t = {};
    return e.forEach(function (r, n) {
      t[r] = !0;
    }),
      t;
  }
  u(Pf, "Nn");
  function qn(e, t, r) {
    if (
      e.customInspect && t && Bn(t.inspect) && t.inspect !== J.inspect &&
      !(t.constructor && t.constructor.prototype === t)
    ) {
      var n = t.inspect(r, e);
      return Kn(n) || (n = qn(e, n, r)), n;
    }
    var o = Tf(e, t);
    if (o) return o;
    var i = Object.keys(t), s = Pf(i);
    if (
      e.showHidden && (i = Object.getOwnPropertyNames(t)),
        Sr(t) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)
    ) return Zo(t);
    if (i.length === 0) {
      if (Bn(t)) {
        var a = t.name ? ": " + t.name : "";
        return e.stylize("[Function" + a + "]", "special");
      }
      if (Or(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
      if (Un(t)) return e.stylize(Date.prototype.toString.call(t), "date");
      if (Sr(t)) return Zo(t);
    }
    var c = "", l = !1, p = ["{", "}"];
    if (Fa(t) && (l = !0, p = ["[", "]"]), Bn(t)) {
      var g = t.name ? ": " + t.name : "";
      c = " [Function" + g + "]";
    }
    if (
      Or(t) && (c = " " + RegExp.prototype.toString.call(t)),
        Un(t) && (c = " " + Date.prototype.toUTCString.call(t)),
        Sr(t) && (c = " " + Zo(t)),
        i.length === 0 && (!l || t.length == 0)
    ) return p[0] + c + p[1];
    if (r < 0) {
      return Or(t)
        ? e.stylize(RegExp.prototype.toString.call(t), "regexp")
        : e.stylize("[Object]", "special");
    }
    e.seen.push(t);
    var y;
    return l ? y = Mf(e, t, r, s, i) : y = i.map(function (b) {
      return ei(e, t, r, s, b, l);
    }),
      e.seen.pop(),
      Of(y, c, p);
  }
  u(qn, "fr");
  function Tf(e, t) {
    if (Ft(t)) return e.stylize("undefined", "undefined");
    if (Kn(t)) {
      var r = "'" +
        JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(
          /\\"/g,
          '"',
        ) + "'";
      return e.stylize(r, "string");
    }
    if (Da(t)) return e.stylize("" + t, "number");
    if (oi(t)) return e.stylize("" + t, "boolean");
    if (Gn(t)) return e.stylize("null", "null");
  }
  u(Tf, "Cn");
  function Zo(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
  }
  u(Zo, "xr");
  function Mf(e, t, r, n, o) {
    for (var i = [], s = 0, a = t.length; s < a; ++s) {
      ka(t, String(s)) ? i.push(ei(e, t, r, n, String(s), !0)) : i.push("");
    }
    return o.forEach(function (c) {
      c.match(/^\d+$/) || i.push(ei(e, t, r, n, c, !0));
    }),
      i;
  }
  u(Mf, "$n");
  function ei(e, t, r, n, o, i) {
    var s, a, c;
    if (
      c = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] },
        c.get
          ? c.set
            ? a = e.stylize("[Getter/Setter]", "special")
            : a = e.stylize("[Getter]", "special")
          : c.set && (a = e.stylize("[Setter]", "special")),
        ka(n, o) || (s = "[" + o + "]"),
        a ||
        (e.seen.indexOf(c.value) < 0
          ? (Gn(r) ? a = qn(e, c.value, null) : a = qn(e, c.value, r - 1),
            a.indexOf(`
`) > -1 && (i
                ? a = a.split(`
`).map(function (l) {
                  return "  " + l;
                }).join(`
`).slice(2)
                : a = `
` + a.split(`
`).map(function (l) {
                  return "   " + l;
                }).join(`
`)))
          : a = e.stylize("[Circular]", "special")),
        Ft(s)
    ) {
      if (i && o.match(/^\d+$/)) return a;
      s = JSON.stringify("" + o),
        s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? (s = s.slice(1, -1), s = e.stylize(s, "name"))
          : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(
            /(^"|"$)/g,
            "'",
          ),
            s = e.stylize(s, "string"));
    }
    return s + ": " + a;
  }
  u(ei, "Nr");
  function Of(e, t, r) {
    var n = 0,
      o = e.reduce(function (i, s) {
        return n++,
          s.indexOf(`
`) >= 0 && n++,
          i + s.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
    return o > 60
      ? r[0] + (t === "" ? "" : t + `
 `) + " " + e.join(`,
  `) + " " + r[1]
      : r[0] + t + " " + e.join(", ") + " " + r[1];
  }
  u(Of, "qn");
  J.types = bf();
  function Fa(e) {
    return Array.isArray(e);
  }
  u(Fa, "rt");
  J.isArray = Fa;
  function oi(e) {
    return typeof e == "boolean";
  }
  u(oi, "Cr");
  J.isBoolean = oi;
  function Gn(e) {
    return e === null;
  }
  u(Gn, "sr");
  J.isNull = Gn;
  function Sf(e) {
    return e == null;
  }
  u(Sf, "Gn");
  J.isNullOrUndefined = Sf;
  function Da(e) {
    return typeof e == "number";
  }
  u(Da, "et");
  J.isNumber = Da;
  function Kn(e) {
    return typeof e == "string";
  }
  u(Kn, "yr");
  J.isString = Kn;
  function Cf(e) {
    return typeof e == "symbol";
  }
  u(Cf, "Wn");
  J.isSymbol = Cf;
  function Ft(e) {
    return e === void 0;
  }
  u(Ft, "j");
  J.isUndefined = Ft;
  function Or(e) {
    return Xt(e) && ii(e) === "[object RegExp]";
  }
  u(Or, "C");
  J.isRegExp = Or;
  J.types.isRegExp = Or;
  function Xt(e) {
    return typeof e == "object" && e !== null;
  }
  u(Xt, "D");
  J.isObject = Xt;
  function Un(e) {
    return Xt(e) && ii(e) === "[object Date]";
  }
  u(Un, "ur");
  J.isDate = Un;
  J.types.isDate = Un;
  function Sr(e) {
    return Xt(e) && (ii(e) === "[object Error]" || e instanceof Error);
  }
  u(Sr, "$");
  J.isError = Sr;
  J.types.isNativeError = Sr;
  function Bn(e) {
    return typeof e == "function";
  }
  u(Bn, "ar");
  J.isFunction = Bn;
  function If(e) {
    return e === null || typeof e == "boolean" || typeof e == "number" ||
      typeof e == "string" || typeof e == "symbol" || typeof e > "u";
  }
  u(If, "_n");
  J.isPrimitive = If;
  J.isBuffer = wf();
  function ii(e) {
    return Object.prototype.toString.call(e);
  }
  u(ii, "$r");
  function Xo(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
  }
  u(Xo, "Mr");
  var Rf = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function _f() {
    var e = new Date(),
      t = [Xo(e.getHours()), Xo(e.getMinutes()), Xo(e.getSeconds())].join(":");
    return [e.getDate(), Rf[e.getMonth()], t].join(" ");
  }
  u(_f, "Vn");
  J.log = function () {
    console.log("%s - %s", _f(), J.format.apply(J, arguments));
  };
  J.inherits = xf();
  J._extend = function (e, t) {
    if (!t || !Xt(t)) return e;
    for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
    return e;
  };
  function ka(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  u(ka, "tt");
  var _t = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  J.promisify = function (e) {
    if (typeof e != "function") {
      throw new TypeError(
        'The "original" argument must be of type Function',
      );
    }
    if (_t && e[_t]) {
      var t = e[_t];
      if (typeof t != "function") {
        throw new TypeError(
          'The "util.promisify.custom" argument must be of type Function',
        );
      }
      return Object.defineProperty(t, _t, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0,
      }),
        t;
    }
    function t() {
      for (
        var r,
          n,
          o = new Promise(function (a, c) {
            r = a, n = c;
          }),
          i = [],
          s = 0;
        s < arguments.length;
        s++
      ) i.push(arguments[s]);
      i.push(function (a, c) {
        a ? n(a) : r(c);
      });
      try {
        e.apply(this, i);
      } catch (a) {
        n(a);
      }
      return o;
    }
    return u(t, "t"),
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      _t &&
      Object.defineProperty(t, _t, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0,
      }),
      Object.defineProperties(t, Ra(e));
  };
  J.promisify.custom = _t;
  function Ff(e, t) {
    if (!e) {
      var r = new Error("Promise was rejected with a falsy value");
      r.reason = e, e = r;
    }
    return t(e);
  }
  u(Ff, "Jn");
  function Df(e) {
    if (typeof e != "function") {
      throw new TypeError(
        'The "original" argument must be of type Function',
      );
    }
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
      var o = r.pop();
      if (typeof o != "function") {
        throw new TypeError(
          "The last argument must be of type Function",
        );
      }
      var i = this,
        s = u(function () {
          return o.apply(i, arguments);
        }, "a");
      e.apply(this, r).then(function (a) {
        w.nextTick(s.bind(null, null, a));
      }, function (a) {
        w.nextTick(Ff.bind(null, a, s));
      });
    }
    return u(t, "e"),
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      Object.defineProperties(t, Ra(e)),
      t;
  }
  u(Df, "Ln");
  J.callbackify = Df;
});
var $a = W((ae, zn) => {
  d();
  f();
  m();
  var kf = Ta(), Jn = Na();
  ae.init = Uf;
  ae.log = Lf;
  ae.formatArgs = jf;
  ae.save = Bf;
  ae.load = qf;
  ae.useColors = Nf;
  ae.destroy = Jn.deprecate(
    () => {},
    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
  );
  ae.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = Ko();
    e && (e.stderr || e).level >= 2 &&
      (ae.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221,
      ]);
  } catch (e) {}
  ae.inspectOpts = Object.keys(w.env).filter((e) => /^debug_/i.test(e)).reduce(
    (e, t) => {
      let r = t.substring(6).toLowerCase().replace(
          /_([a-z])/g,
          (o, i) => i.toUpperCase(),
        ),
        n = w.env[t];
      return /^(yes|on|true|enabled)$/i.test(n)
        ? n = !0
        : /^(no|off|false|disabled)$/i.test(n)
        ? n = !1
        : n === "null"
        ? n = null
        : n = Number(n),
        e[r] = n,
        e;
    },
    {},
  );
  function Nf() {
    return "colors" in ae.inspectOpts
      ? Boolean(ae.inspectOpts.colors)
      : kf.isatty(w.stderr.fd);
  }
  u(Nf, "useColors");
  function jf(e) {
    let { namespace: t, useColors: r } = this;
    if (r) {
      let n = this.color,
        o = "\x1B[3" + (n < 8 ? n : "8;5;" + n),
        i = `  ${o};1m${t} \x1B[0m`;
      e[0] = i + e[0].split(`
`).join(
        `
` + i,
      ), e.push(o + "m+" + zn.exports.humanize(this.diff) + "\x1B[0m");
    } else e[0] = $f() + t + " " + e[0];
  }
  u(jf, "formatArgs");
  function $f() {
    return ae.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
  }
  u($f, "getDate");
  function Lf(...e) {
    return w.stderr.write(
      Jn.format(...e) + `
`,
    );
  }
  u(Lf, "log");
  function Bf(e) {
    e ? w.env.DEBUG = e : delete w.env.DEBUG;
  }
  u(Bf, "save");
  function qf() {
    return w.env.DEBUG;
  }
  u(qf, "load");
  function Uf(e) {
    e.inspectOpts = {};
    let t = Object.keys(ae.inspectOpts);
    for (let r = 0; r < t.length; r++) {
      e.inspectOpts[t[r]] = ae.inspectOpts[t[r]];
    }
  }
  u(Uf, "init");
  zn.exports = Yo()(ae);
  var { formatters: ja } = zn.exports;
  ja.o = function (e) {
    return this.inspectOpts.colors = this.useColors,
      Jn.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
  };
  ja.O = function (e) {
    return this.inspectOpts.colors = this.useColors,
      Jn.inspect(e, this.inspectOpts);
  };
});
var La = W((O0, si) => {
  d();
  f();
  m();
  typeof w == "undefined" || w.type === "renderer" || w.browser === !0 ||
    w.__nwjs
    ? si.exports = Pa()
    : si.exports = $a();
});
var Ka = W((N0, Ga) => {
  "use strict";
  d();
  f();
  m();
  function Je(e) {
    if (typeof e != "string") {
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(e),
      );
    }
  }
  u(Je, "c");
  function Va(e, t) {
    for (var r = "", n = 0, o = -1, i = 0, s, a = 0; a <= e.length; ++a) {
      if (a < e.length) s = e.charCodeAt(a);
      else {
        if (s === 47) break;
        s = 47;
      }
      if (s === 47) {
        if (!(o === a - 1 || i === 1)) {
          if (o !== a - 1 && i === 2) {
            if (
              r.length < 2 || n !== 2 || r.charCodeAt(r.length - 1) !== 46 ||
              r.charCodeAt(r.length - 2) !== 46
            ) {
              if (r.length > 2) {
                var c = r.lastIndexOf("/");
                if (c !== r.length - 1) {
                  c === -1
                    ? (r = "", n = 0)
                    : (r = r.slice(0, c),
                      n = r.length - 1 - r.lastIndexOf("/")),
                    o = a,
                    i = 0;
                  continue;
                }
              } else if (r.length === 2 || r.length === 1) {
                r = "", n = 0, o = a, i = 0;
                continue;
              }
            }
            t && (r.length > 0 ? r += "/.." : r = "..", n = 2);
          } else {r.length > 0
              ? r += "/" + e.slice(o + 1, a)
              : r = e.slice(o + 1, a),
              n = a - o - 1;}
        }
        o = a, i = 0;
      } else s === 46 && i !== -1 ? ++i : i = -1;
    }
    return r;
  }
  u(Va, "A");
  function Kf(e, t) {
    var r = t.dir || t.root, n = t.base || (t.name || "") + (t.ext || "");
    return r ? r === t.root ? r + n : r + e + n : n;
  }
  u(Kf, "b");
  var er = {
    resolve: function () {
      for (
        var e = "", t = !1, r, n = arguments.length - 1;
        n >= -1 && !t;
        n--
      ) {
        var o;
        n >= 0 ? o = arguments[n] : (r === void 0 && (r = w.cwd()), o = r),
          Je(o),
          o.length !== 0 && (e = o + "/" + e, t = o.charCodeAt(0) === 47);
      }
      return e = Va(e, !t),
        t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
    },
    normalize: function (e) {
      if (Je(e), e.length === 0) return ".";
      var t = e.charCodeAt(0) === 47, r = e.charCodeAt(e.length - 1) === 47;
      return e = Va(e, !t),
        e.length === 0 && !t && (e = "."),
        e.length > 0 && r && (e += "/"),
        t ? "/" + e : e;
    },
    isAbsolute: function (e) {
      return Je(e), e.length > 0 && e.charCodeAt(0) === 47;
    },
    join: function () {
      if (arguments.length === 0) return ".";
      for (var e, t = 0; t < arguments.length; ++t) {
        var r = arguments[t];
        Je(r), r.length > 0 && (e === void 0 ? e = r : e += "/" + r);
      }
      return e === void 0 ? "." : er.normalize(e);
    },
    relative: function (e, t) {
      if (
        Je(e), Je(t), e === t || (e = er.resolve(e), t = er.resolve(t), e === t)
      ) return "";
      for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
      for (
        var n = e.length, o = n - r, i = 1;
        i < t.length && t.charCodeAt(i) === 47;
        ++i
      );
      for (
        var s = t.length, a = s - i, c = o < a ? o : a, l = -1, p = 0;
        p <= c;
        ++p
      ) {
        if (p === c) {
          if (a > c) {
            if (t.charCodeAt(i + p) === 47) return t.slice(i + p + 1);
            if (p === 0) return t.slice(i + p);
          } else {o > c &&
              (e.charCodeAt(r + p) === 47 ? l = p : p === 0 && (l = 0));}
          break;
        }
        var g = e.charCodeAt(r + p), y = t.charCodeAt(i + p);
        if (g !== y) break;
        g === 47 && (l = p);
      }
      var b = "";
      for (p = r + l + 1; p <= n; ++p) {
        (p === n || e.charCodeAt(p) === 47) &&
          (b.length === 0 ? b += ".." : b += "/..");
      }
      return b.length > 0
        ? b + t.slice(i + l)
        : (i += l, t.charCodeAt(i) === 47 && ++i, t.slice(i));
    },
    _makeLong: function (e) {
      return e;
    },
    dirname: function (e) {
      if (Je(e), e.length === 0) return ".";
      for (
        var t = e.charCodeAt(0), r = t === 47, n = -1, o = !0, i = e.length - 1;
        i >= 1;
        --i
      ) {
        if (t = e.charCodeAt(i), t === 47) {
          if (!o) {
            n = i;
            break;
          }
        } else o = !1;
      }
      return n === -1 ? r ? "/" : "." : r && n === 1 ? "//" : e.slice(0, n);
    },
    basename: function (e, t) {
      if (t !== void 0 && typeof t != "string") {
        throw new TypeError(
          '"ext" argument must be a string',
        );
      }
      Je(e);
      var r = 0, n = -1, o = !0, i;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t.length === e.length && t === e) return "";
        var s = t.length - 1, a = -1;
        for (i = e.length - 1; i >= 0; --i) {
          var c = e.charCodeAt(i);
          if (c === 47) {
            if (!o) {
              r = i + 1;
              break;
            }
          } else {a === -1 && (o = !1, a = i + 1),
              s >= 0 && (c === t.charCodeAt(s)
                ? --s === -1 && (n = i)
                : (s = -1, n = a));}
        }
        return r === n ? n = a : n === -1 && (n = e.length), e.slice(r, n);
      } else {
        for (
          i = e.length - 1;
          i >= 0;
          --i
        ) {
          if (e.charCodeAt(i) === 47) {
            if (!o) {
              r = i + 1;
              break;
            }
          } else n === -1 && (o = !1, n = i + 1);
        }
        return n === -1 ? "" : e.slice(r, n);
      }
    },
    extname: function (e) {
      Je(e);
      for (
        var t = -1, r = 0, n = -1, o = !0, i = 0, s = e.length - 1;
        s >= 0;
        --s
      ) {
        var a = e.charCodeAt(s);
        if (a === 47) {
          if (!o) {
            r = s + 1;
            break;
          }
          continue;
        }
        n === -1 && (o = !1, n = s + 1),
          a === 46
            ? t === -1 ? t = s : i !== 1 && (i = 1)
            : t !== -1 && (i = -1);
      }
      return t === -1 || n === -1 || i === 0 ||
          i === 1 && t === n - 1 && t === r + 1
        ? ""
        : e.slice(t, n);
    },
    format: function (e) {
      if (e === null || typeof e != "object") {
        throw new TypeError(
          'The "pathObject" argument must be of type Object. Received type ' +
            typeof e,
        );
      }
      return Kf("/", e);
    },
    parse: function (e) {
      Je(e);
      var t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      var r = e.charCodeAt(0), n = r === 47, o;
      n ? (t.root = "/", o = 1) : o = 0;
      for (
        var i = -1, s = 0, a = -1, c = !0, l = e.length - 1, p = 0;
        l >= o;
        --l
      ) {
        if (r = e.charCodeAt(l), r === 47) {
          if (!c) {
            s = l + 1;
            break;
          }
          continue;
        }
        a === -1 && (c = !1, a = l + 1),
          r === 46
            ? i === -1 ? i = l : p !== 1 && (p = 1)
            : i !== -1 && (p = -1);
      }
      return i === -1 || a === -1 || p === 0 ||
          p === 1 && i === a - 1 && i === s + 1
        ? a !== -1 &&
          (s === 0 && n
            ? t.base = t.name = e.slice(1, a)
            : t.base = t.name = e.slice(s, a))
        : (s === 0 && n
          ? (t.name = e.slice(1, i), t.base = e.slice(1, a))
          : (t.name = e.slice(s, i), t.base = e.slice(s, a)),
          t.ext = e.slice(i, a)),
        s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"),
        t;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null,
  };
  er.posix = er;
  Ga.exports = er;
});
var Ha = W((J0, za) => {
  d();
  f();
  m();
  var ci = Symbol("arg flag"),
    ye = class extends Error {
      constructor(t, r) {
        super(t),
          this.name = "ArgError",
          this.code = r,
          Object.setPrototypeOf(this, ye.prototype);
      }
    };
  u(ye, "ArgError");
  function Cr(
    e,
    {
      argv: t = w.argv.slice(2),
      permissive: r = !1,
      stopAtPositional: n = !1,
    } = {},
  ) {
    if (!e) {
      throw new ye(
        "argument specification object is required",
        "ARG_CONFIG_NO_SPEC",
      );
    }
    let o = { _: [] }, i = {}, s = {};
    for (let a of Object.keys(e)) {
      if (!a) {
        throw new ye(
          "argument key cannot be an empty string",
          "ARG_CONFIG_EMPTY_KEY",
        );
      }
      if (a[0] !== "-") {
        throw new ye(
          `argument key must start with '-' but found: '${a}'`,
          "ARG_CONFIG_NONOPT_KEY",
        );
      }
      if (a.length === 1) {
        throw new ye(
          `argument key must have a name; singular '-' keys are not allowed: ${a}`,
          "ARG_CONFIG_NONAME_KEY",
        );
      }
      if (typeof e[a] == "string") {
        i[a] = e[a];
        continue;
      }
      let c = e[a], l = !1;
      if (Array.isArray(c) && c.length === 1 && typeof c[0] == "function") {
        let [p] = c;
        c = u((g, y, b = []) => (b.push(p(g, y, b[b.length - 1])), b), "type"),
          l = p === Boolean || p[ci] === !0;
      } else if (typeof c == "function") l = c === Boolean || c[ci] === !0;
      else {throw new ye(
          `type missing or not a function or valid array type: ${a}`,
          "ARG_CONFIG_VAD_TYPE",
        );}
      if (a[1] !== "-" && a.length > 2) {
        throw new ye(
          `short argument keys (with a single hyphen) must have only one character: ${a}`,
          "ARG_CONFIG_SHORTOPT_TOOLONG",
        );
      }
      s[a] = [c, l];
    }
    for (let a = 0, c = t.length; a < c; a++) {
      let l = t[a];
      if (n && o._.length > 0) {
        o._ = o._.concat(t.slice(a));
        break;
      }
      if (l === "--") {
        o._ = o._.concat(t.slice(a + 1));
        break;
      }
      if (l.length > 1 && l[0] === "-") {
        let p = l[1] === "-" || l.length === 2
          ? [l]
          : l.slice(1).split("").map((g) => `-${g}`);
        for (let g = 0; g < p.length; g++) {
          let y = p[g],
            [b, v] = y[1] === "-" ? y.split(/=(.*)/, 2) : [y, void 0],
            h = b;
          for (; h in i;) h = i[h];
          if (!(h in s)) {
            if (r) {
              o._.push(y);
              continue;
            } else {throw new ye(
                `unknown or unexpected option: ${b}`,
                "ARG_UNKNOWN_OPTION",
              );}
          }
          let [A, O] = s[h];
          if (!O && g + 1 < p.length) {
            throw new ye(
              `option requires argument (but was followed by another short argument): ${b}`,
              "ARG_MISSING_REQUIRED_SHORTARG",
            );
          }
          if (O) o[h] = A(!0, h, o[h]);
          else if (v === void 0) {
            if (
              t.length < a + 2 ||
              t[a + 1].length > 1 && t[a + 1][0] === "-" &&
                !(t[a + 1].match(/^-?\d*(\.(?=\d))?\d*$/) &&
                  (A === Number ||
                    typeof BigInt != "undefined" && A === BigInt))
            ) {
              let T = b === h ? "" : ` (alias for ${h})`;
              throw new ye(
                `option requires argument: ${b}${T}`,
                "ARG_MISSING_REQUIRED_LONGARG",
              );
            }
            o[h] = A(t[a + 1], h, o[h]), ++a;
          } else o[h] = A(v, h, o[h]);
        }
      } else o._.push(l);
    }
    return o;
  }
  u(Cr, "arg");
  Cr.flag = (e) => (e[ci] = !0, e);
  Cr.COUNT = Cr.flag((e, t, r) => (r || 0) + 1);
  Cr.ArgError = ye;
  za.exports = Cr;
});
var Qa = W((Y0, Wa) => {
  "use strict";
  d();
  f();
  m();
  Wa.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var li = W((t1, Ya) => {
  "use strict";
  d();
  f();
  m();
  var zf = Qa();
  Ya.exports = (e) => {
    let t = zf(e);
    if (t === 0) return e;
    let r = new RegExp(`^[ \\t]{${t}}`, "gm");
    return e.replace(r, "");
  };
});
var Xa = W(($1, Za) => {
  "use strict";
  d();
  f();
  m();
  Za.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var Wn = W((U1, eu) => {
  "use strict";
  d();
  f();
  m();
  var Qf = Xa();
  eu.exports = (e) => typeof e == "string" ? e.replace(Qf(), "") : e;
});
var Qn = W((X1, ru) => {
  "use strict";
  d();
  f();
  m();
  ru.exports = (e, t = 1, r) => {
    if (
      r = { indent: " ", includeEmptyLines: !1, ...r }, typeof e != "string"
    ) {
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    }
    if (typeof t != "number") {
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    }
    if (typeof r.indent != "string") {
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r
          .indent}\``,
      );
    }
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var Vi = W((qS, sc) => {
  "use strict";
  d();
  f();
  m();
  sc.exports = function () {
    function e(t, r, n, o, i) {
      return t < r || n < r ? t > n ? n + 1 : t + 1 : o === i ? r : r + 1;
    }
    return u(e, "_min"), function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        t = r, r = n;
      }
      for (
        var o = t.length, i = r.length;
        o > 0 && t.charCodeAt(o - 1) === r.charCodeAt(i - 1);
      ) o--, i--;
      for (var s = 0; s < o && t.charCodeAt(s) === r.charCodeAt(s);) s++;
      if (o -= s, i -= s, o === 0 || i < 3) return i;
      var a = 0, c, l, p, g, y, b, v, h, A, O, T, M, P = [];
      for (c = 0; c < o; c++) P.push(c + 1), P.push(t.charCodeAt(s + c));
      for (var S = P.length - 1; a < i - 3;) {
        for (
          A = r.charCodeAt(s + (l = a)),
            O = r.charCodeAt(s + (p = a + 1)),
            T = r.charCodeAt(s + (g = a + 2)),
            M = r.charCodeAt(s + (y = a + 3)),
            b = a += 4,
            c = 0;
          c < S;
          c += 2
        ) {
          v = P[c],
            h = P[c + 1],
            l = e(v, l, p, A, h),
            p = e(l, p, g, O, h),
            g = e(p, g, y, T, h),
            b = e(g, y, b, M, h),
            P[c] = b,
            y = g,
            g = p,
            p = l,
            l = v;
        }
      }
      for (; a < i;) {
        for (A = r.charCodeAt(s + (l = a)), b = ++a, c = 0; c < S; c += 2) {
          v = P[c], P[c] = b = e(v, l, b, A, P[c + 1]), l = v;
        }
      }
      return b;
    };
  }();
});
var fc = W(() => {
  d();
  f();
  m();
});
var dc = W((DC, Hi) => {
  "use strict";
  d();
  f();
  m();
  var Nd = Object.prototype.hasOwnProperty, we = "~";
  function cn() {}
  u(cn, "_");
  Object.create &&
    (cn.prototype = Object.create(null), new cn().__proto__ || (we = !1));
  function jd(e, t, r) {
    this.fn = e, this.context = t, this.once = r || !1;
  }
  u(jd, "g");
  function mc(e, t, r, n, o) {
    if (typeof r != "function") {
      throw new TypeError("The listener must be a function");
    }
    var i = new jd(r, n || e, o), s = we ? we + t : t;
    return e._events[s]
      ? e._events[s].fn
        ? e._events[s] = [e._events[s], i]
        : e._events[s].push(i)
      : (e._events[s] = i, e._eventsCount++),
      e;
  }
  u(mc, "w");
  function bo(e, t) {
    --e._eventsCount === 0 ? e._events = new cn() : delete e._events[t];
  }
  u(bo, "y");
  function pe() {
    this._events = new cn(), this._eventsCount = 0;
  }
  u(pe, "u");
  pe.prototype.eventNames = function () {
    var e = [], t, r;
    if (this._eventsCount === 0) return e;
    for (r in t = this._events) Nd.call(t, r) && e.push(we ? r.slice(1) : r);
    return Object.getOwnPropertySymbols
      ? e.concat(Object.getOwnPropertySymbols(t))
      : e;
  };
  pe.prototype.listeners = function (e) {
    var t = we ? we + e : e, r = this._events[t];
    if (!r) return [];
    if (r.fn) return [r.fn];
    for (var n = 0, o = r.length, i = new Array(o); n < o; n++) i[n] = r[n].fn;
    return i;
  };
  pe.prototype.listenerCount = function (e) {
    var t = we ? we + e : e, r = this._events[t];
    return r ? r.fn ? 1 : r.length : 0;
  };
  pe.prototype.emit = function (e, t, r, n, o, i) {
    var s = we ? we + e : e;
    if (!this._events[s]) return !1;
    var a = this._events[s], c = arguments.length, l, p;
    if (a.fn) {
      switch (a.once && this.removeListener(e, a.fn, void 0, !0), c) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, t), !0;
        case 3:
          return a.fn.call(a.context, t, r), !0;
        case 4:
          return a.fn.call(a.context, t, r, n), !0;
        case 5:
          return a.fn.call(a.context, t, r, n, o), !0;
        case 6:
          return a.fn.call(a.context, t, r, n, o, i), !0;
      }
      for (p = 1, l = new Array(c - 1); p < c; p++) l[p - 1] = arguments[p];
      a.fn.apply(a.context, l);
    } else {
      var g = a.length, y;
      for (p = 0; p < g; p++) {
        switch (a[p].once && this.removeListener(e, a[p].fn, void 0, !0), c) {
          case 1:
            a[p].fn.call(a[p].context);
            break;
          case 2:
            a[p].fn.call(a[p].context, t);
            break;
          case 3:
            a[p].fn.call(a[p].context, t, r);
            break;
          case 4:
            a[p].fn.call(a[p].context, t, r, n);
            break;
          default:
            if (!l) {
              for (y = 1, l = new Array(c - 1); y < c; y++) {
                l[y - 1] = arguments[y];
              }
            }
            a[p].fn.apply(a[p].context, l);
        }
      }
    }
    return !0;
  };
  pe.prototype.on = function (e, t, r) {
    return mc(this, e, t, r, !1);
  };
  pe.prototype.once = function (e, t, r) {
    return mc(this, e, t, r, !0);
  };
  pe.prototype.removeListener = function (e, t, r, n) {
    var o = we ? we + e : e;
    if (!this._events[o]) return this;
    if (!t) return bo(this, o), this;
    var i = this._events[o];
    if (i.fn) {
      i.fn === t && (!n || i.once) && (!r || i.context === r) && bo(this, o);
    } else {
      for (var s = 0, a = [], c = i.length; s < c; s++) {
        (i[s].fn !== t || n && !i[s].once || r && i[s].context !== r) &&
          a.push(i[s]);
      }
      a.length ? this._events[o] = a.length === 1 ? a[0] : a : bo(this, o);
    }
    return this;
  };
  pe.prototype.removeAllListeners = function (e) {
    var t;
    return e
      ? (t = we ? we + e : e, this._events[t] && bo(this, t))
      : (this._events = new cn(), this._eventsCount = 0),
      this;
  };
  pe.prototype.off = pe.prototype.removeListener;
  pe.prototype.addListener = pe.prototype.on;
  pe.prefixed = we;
  pe.EventEmitter = pe;
  typeof Hi < "u" && (Hi.exports = pe);
});
var hc = W((Wi, Qi) => {
  d();
  f();
  m();
  (function (e, t) {
    typeof Ar == "function" && typeof Wi == "object" && typeof Qi == "object"
      ? Qi.exports = t()
      : e.pluralize = t();
  })(Wi, function () {
    var e = [], t = [], r = {}, n = {}, o = {};
    function i(b) {
      return typeof b == "string" ? new RegExp("^" + b + "$", "i") : b;
    }
    u(i, "sanitizeRule");
    function s(b, v) {
      return b === v
        ? v
        : b === b.toLowerCase()
        ? v.toLowerCase()
        : b === b.toUpperCase()
        ? v.toUpperCase()
        : b[0] === b[0].toUpperCase()
        ? v.charAt(0).toUpperCase() + v.substr(1).toLowerCase()
        : v.toLowerCase();
    }
    u(s, "restoreCase");
    function a(b, v) {
      return b.replace(/\$(\d{1,2})/g, function (h, A) {
        return v[A] || "";
      });
    }
    u(a, "interpolate");
    function c(b, v) {
      return b.replace(v[0], function (h, A) {
        var O = a(v[1], arguments);
        return s(h === "" ? b[A - 1] : h, O);
      });
    }
    u(c, "replace");
    function l(b, v, h) {
      if (!b.length || r.hasOwnProperty(b)) return v;
      for (var A = h.length; A--;) {
        var O = h[A];
        if (O[0].test(v)) return c(v, O);
      }
      return v;
    }
    u(l, "sanitizeWord");
    function p(b, v, h) {
      return function (A) {
        var O = A.toLowerCase();
        return v.hasOwnProperty(O)
          ? s(A, O)
          : b.hasOwnProperty(O)
          ? s(A, b[O])
          : l(O, A, h);
      };
    }
    u(p, "replaceWord");
    function g(b, v, h, A) {
      return function (O) {
        var T = O.toLowerCase();
        return v.hasOwnProperty(T)
          ? !0
          : b.hasOwnProperty(T)
          ? !1
          : l(T, T, h) === T;
      };
    }
    u(g, "checkWord");
    function y(b, v, h) {
      var A = v === 1 ? y.singular(b) : y.plural(b);
      return (h ? v + " " : "") + A;
    }
    return u(y, "pluralize"),
      y.plural = p(o, n, e),
      y.isPlural = g(o, n, e),
      y.singular = p(n, o, t),
      y.isSingular = g(n, o, t),
      y.addPluralRule = function (b, v) {
        e.push([i(b), v]);
      },
      y.addSingularRule = function (b, v) {
        t.push([i(b), v]);
      },
      y.addUncountableRule = function (b) {
        if (typeof b == "string") {
          r[b.toLowerCase()] = !0;
          return;
        }
        y.addPluralRule(b, "$0"), y.addSingularRule(b, "$0");
      },
      y.addIrregularRule = function (b, v) {
        v = v.toLowerCase(), b = b.toLowerCase(), o[b] = v, n[v] = b;
      },
      [
        ["I", "we"],
        ["me", "us"],
        ["he", "they"],
        ["she", "they"],
        ["them", "them"],
        ["myself", "ourselves"],
        ["yourself", "yourselves"],
        ["itself", "themselves"],
        ["herself", "themselves"],
        ["himself", "themselves"],
        ["themself", "themselves"],
        ["is", "are"],
        ["was", "were"],
        ["has", "have"],
        ["this", "these"],
        ["that", "those"],
        ["echo", "echoes"],
        ["dingo", "dingoes"],
        ["volcano", "volcanoes"],
        ["tornado", "tornadoes"],
        ["torpedo", "torpedoes"],
        ["genus", "genera"],
        ["viscus", "viscera"],
        ["stigma", "stigmata"],
        ["stoma", "stomata"],
        ["dogma", "dogmata"],
        ["lemma", "lemmata"],
        ["schema", "schemata"],
        ["anathema", "anathemata"],
        ["ox", "oxen"],
        ["axe", "axes"],
        ["die", "dice"],
        ["yes", "yeses"],
        ["foot", "feet"],
        ["eave", "eaves"],
        ["goose", "geese"],
        ["tooth", "teeth"],
        ["quiz", "quizzes"],
        ["human", "humans"],
        ["proof", "proofs"],
        ["carve", "carves"],
        ["valve", "valves"],
        ["looey", "looies"],
        ["thief", "thieves"],
        ["groove", "grooves"],
        ["pickaxe", "pickaxes"],
        ["passerby", "passersby"],
      ].forEach(function (b) {
        return y.addIrregularRule(b[0], b[1]);
      }),
      [
        [/s?$/i, "s"],
        [/[^\u0000-\u007F]$/i, "$0"],
        [/([^aeiou]ese)$/i, "$1"],
        [/(ax|test)is$/i, "$1es"],
        [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
        [/(e[mn]u)s?$/i, "$1s"],
        [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
        [
          /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
          "$1i",
        ],
        [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
        [/(seraph|cherub)(?:im)?$/i, "$1im"],
        [/(her|at|gr)o$/i, "$1oes"],
        [
          /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
          "$1a",
        ],
        [
          /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
          "$1a",
        ],
        [/sis$/i, "ses"],
        [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
        [/([^aeiouy]|qu)y$/i, "$1ies"],
        [/([^ch][ieo][ln])ey$/i, "$1ies"],
        [/(x|ch|ss|sh|zz)$/i, "$1es"],
        [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
        [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
        [/(pe)(?:rson|ople)$/i, "$1ople"],
        [/(child)(?:ren)?$/i, "$1ren"],
        [/eaux$/i, "$0"],
        [/m[ae]n$/i, "men"],
        ["thou", "you"],
      ].forEach(function (b) {
        return y.addPluralRule(b[0], b[1]);
      }),
      [
        [/s$/i, ""],
        [/(ss)$/i, "$1"],
        [
          /(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
          "$1fe",
        ],
        [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
        [/ies$/i, "y"],
        [
          /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
          "$1ie",
        ],
        [/\b(mon|smil)ies$/i, "$1ey"],
        [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
        [/(seraph|cherub)im$/i, "$1"],
        [
          /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
          "$1",
        ],
        [
          /(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
          "$1sis",
        ],
        [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
        [/(test)(?:is|es)$/i, "$1is"],
        [
          /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
          "$1us",
        ],
        [
          /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
          "$1um",
        ],
        [
          /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
          "$1on",
        ],
        [/(alumn|alg|vertebr)ae$/i, "$1a"],
        [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
        [/(matr|append)ices$/i, "$1ix"],
        [/(pe)(rson|ople)$/i, "$1rson"],
        [/(child)ren$/i, "$1"],
        [/(eau)x?$/i, "$1"],
        [/men$/i, "man"],
      ].forEach(function (b) {
        return y.addSingularRule(b[0], b[1]);
      }),
      [
        "adulthood",
        "advice",
        "agenda",
        "aid",
        "aircraft",
        "alcohol",
        "ammo",
        "analytics",
        "anime",
        "athletics",
        "audio",
        "bison",
        "blood",
        "bream",
        "buffalo",
        "butter",
        "carp",
        "cash",
        "chassis",
        "chess",
        "clothing",
        "cod",
        "commerce",
        "cooperation",
        "corps",
        "debris",
        "diabetes",
        "digestion",
        "elk",
        "energy",
        "equipment",
        "excretion",
        "expertise",
        "firmware",
        "flounder",
        "fun",
        "gallows",
        "garbage",
        "graffiti",
        "hardware",
        "headquarters",
        "health",
        "herpes",
        "highjinks",
        "homework",
        "housework",
        "information",
        "jeans",
        "justice",
        "kudos",
        "labour",
        "literature",
        "machinery",
        "mackerel",
        "mail",
        "media",
        "mews",
        "moose",
        "music",
        "mud",
        "manga",
        "news",
        "only",
        "personnel",
        "pike",
        "plankton",
        "pliers",
        "police",
        "pollution",
        "premises",
        "rain",
        "research",
        "rice",
        "salmon",
        "scissors",
        "series",
        "sewage",
        "shambles",
        "shrimp",
        "software",
        "species",
        "staff",
        "swine",
        "tennis",
        "traffic",
        "transportation",
        "trout",
        "tuna",
        "wealth",
        "welfare",
        "whiting",
        "wildebeest",
        "wildlife",
        "you",
        /pok[eé]mon$/i,
        /[^aeiou]ese$/i,
        /deer$/i,
        /fish$/i,
        /measles$/i,
        /o[iu]s$/i,
        /pox$/i,
        /sheep$/i,
      ].forEach(y.addUncountableRule),
      y;
  });
});
var Bc = W((DI, Lc) => {
  "use strict";
  d();
  f();
  m();
  Lc.exports = (e) => Object.prototype.toString.call(e) === "[object RegExp]";
});
var Uc = W(($I, qc) => {
  "use strict";
  d();
  f();
  m();
  qc.exports = (e) => {
    let t = typeof e;
    return e !== null && (t === "object" || t === "function");
  };
});
var Vc = W((Zi) => {
  "use strict";
  d();
  f();
  m();
  Object.defineProperty(Zi, "__esModule", { value: !0 });
  Zi.default = (e) =>
    Object.getOwnPropertySymbols(e).filter((t) =>
      Object.prototype.propertyIsEnumerable.call(e, t)
    );
});
var il = W((xF, Lg) => {
  Lg.exports = {
    name: "@prisma/client",
    version: "4.7.0",
    description:
      "Prisma Client is an auto-generated, type-safe and modern JavaScript/TypeScript ORM for Node.js that's tailored to your data. Supports MySQL, PostgreSQL, MariaDB, SQLite databases.",
    keywords: [
      "orm",
      "prisma2",
      "prisma",
      "client",
      "query",
      "database",
      "sql",
      "postgres",
      "postgresql",
      "mysql",
      "sqlite",
      "mariadb",
      "mssql",
      "typescript",
      "query-builder",
    ],
    main: "index.js",
    browser: "index-browser.js",
    types: "index.d.ts",
    license: "Apache-2.0",
    engines: { node: ">=14.17" },
    homepage: "https://www.prisma.io",
    repository: {
      type: "git",
      url: "https://github.com/prisma/prisma.git",
      directory: "packages/client",
    },
    author: "Tim Suchanek <suchanek@prisma.io>",
    bugs: "https://github.com/prisma/prisma/issues",
    scripts: {
      dev: "DEV=true node -r esbuild-register helpers/build.ts",
      build: "node -r esbuild-register helpers/build.ts",
      test: "jest --verbose",
      "test:functional":
        "node -r esbuild-register helpers/functional-test/run-tests.ts",
      "test:memory": "node -r esbuild-register helpers/memory-tests.ts",
      "test:functional:code":
        "node -r esbuild-register helpers/functional-test/run-tests.ts --no-types",
      "test:functional:types":
        "node -r esbuild-register helpers/functional-test/run-tests.ts --types-only",
      "test-notypes":
        "jest --verbose --testPathIgnorePatterns src/__tests__/types/types.test.ts",
      generate: "node scripts/postinstall.js",
      postinstall: "node scripts/postinstall.js",
      prepublishOnly: "pnpm run build",
      "new-test":
        "NODE_OPTIONS='-r ts-node/register' yo ./helpers/generator-test/index.ts",
    },
    files: [
      "README.md",
      "runtime",
      "scripts",
      "generator-build",
      "edge.js",
      "edge.d.ts",
      "index.js",
      "index.d.ts",
      "index-browser.js",
    ],
    devDependencies: {
      "@faker-js/faker": "7.6.0",
      "@fast-check/jest": "1.4.0",
      "@jest/globals": "28.1.3",
      "@jest/test-sequencer": "28.1.3",
      "@opentelemetry/api": "1.2.0",
      "@opentelemetry/context-async-hooks": "1.7.0",
      "@opentelemetry/instrumentation": "0.33.0",
      "@opentelemetry/resources": "1.7.0",
      "@opentelemetry/sdk-trace-base": "1.7.0",
      "@opentelemetry/semantic-conventions": "1.7.0",
      "@prisma/debug": "workspace:4.7.0",
      "@prisma/engine-core": "workspace:4.7.0",
      "@prisma/engines": "workspace:4.7.0",
      "@prisma/fetch-engine": "workspace:4.7.0",
      "@prisma/generator-helper": "workspace:4.7.0",
      "@prisma/get-platform": "workspace:4.7.0",
      "@prisma/instrumentation": "workspace:4.7.0",
      "@prisma/internals": "workspace:4.7.0",
      "@prisma/migrate": "workspace:4.7.0",
      "@prisma/mini-proxy": "0.3.0",
      "@swc-node/register": "1.5.4",
      "@swc/core": "1.3.14",
      "@swc/jest": "0.2.23",
      "@timsuchanek/copy": "1.4.5",
      "@types/debug": "4.1.7",
      "@types/fs-extra": "9.0.13",
      "@types/jest": "28.1.8",
      "@types/js-levenshtein": "1.1.1",
      "@types/mssql": "8.1.1",
      "@types/node": "14.18.33",
      "@types/pg": "8.6.5",
      "@types/yeoman-generator": "5.2.11",
      arg: "5.0.2",
      benchmark: "2.1.4",
      chalk: "4.1.2",
      cuid: "2.1.8",
      "decimal.js": "10.4.2",
      esbuild: "0.15.13",
      execa: "5.1.1",
      "expect-type": "0.15.0",
      "flat-map-polyfill": "0.3.8",
      "fs-extra": "10.1.0",
      "fs-monkey": "1.0.3",
      "get-own-enumerable-property-symbols": "3.0.2",
      globby: "11.1.0",
      "indent-string": "4.0.0",
      "is-obj": "2.0.0",
      "is-regexp": "2.1.0",
      jest: "28.1.3",
      "jest-junit": "14.0.1",
      "jest-snapshot": "28.1.3",
      "js-levenshtein": "1.1.6",
      klona: "2.0.5",
      "lz-string": "1.4.4",
      "make-dir": "3.1.0",
      mariadb: "3.0.2",
      memfs: "3.4.10",
      mssql: "9.0.1",
      "node-fetch": "2.6.7",
      pg: "8.8.0",
      "pkg-up": "3.1.0",
      pluralize: "8.0.0",
      "replace-string": "3.1.0",
      resolve: "1.22.1",
      rimraf: "3.0.2",
      "simple-statistics": "7.8.0",
      "sort-keys": "4.2.0",
      "source-map-support": "0.5.21",
      "sql-template-tag": "5.0.3",
      "stacktrace-parser": "0.1.10",
      "strip-ansi": "6.0.1",
      "strip-indent": "3.0.0",
      "ts-jest": "28.0.8",
      "ts-node": "10.9.1",
      "ts-pattern": "4.0.5",
      tsd: "0.21.0",
      typescript: "4.8.4",
      "yeoman-generator": "5.7.0",
      yo: "4.3.1",
    },
    peerDependencies: { prisma: "*" },
    peerDependenciesMeta: { prisma: { optional: !0 } },
    dependencies: {
      "@prisma/engines-version":
        "4.7.0-74.39190b250ebc338586e25e6da45e5e783bc8a635",
    },
    sideEffects: !1,
  };
});
d();
f();
m();
var Nl = ee(qs());
var Gs = {};
Do(Gs, { defineExtension: () => Us, getExtensionContext: () => Vs });
d();
f();
m();
d();
f();
m();
function Us(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
u(Us, "defineExtension");
d();
f();
m();
function Vs(e) {
  return e;
}
u(Vs, "getExtensionContext");
var zs = {};
Do(zs, { Extensions: () => Ks, Utils: () => Js });
d();
f();
m();
var Ks = {};
d();
f();
m();
var Js = {};
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
var Hn = ee(La());
var Vf = 100, ai = [], Ba, qa;
typeof w != "undefined" &&
  typeof ((Ba = w.stderr) == null ? void 0 : Ba.write) != "function" &&
  (Hn.default.log = (qa = console.debug) != null ? qa : console.log);
function Gf(e) {
  let t = (0, Hn.default)(e),
    r = Object.assign(
      (
        ...n
      ) => (t.log = r.log,
        n.length !== 0 && ai.push([e, ...n]),
        ai.length > Vf && ai.shift(),
        t("", ...n)),
      t,
    );
  return r;
}
u(Gf, "debugCall");
var Ua = Object.assign(Gf, Hn.default);
var Ke = Ua;
d();
f();
m();
var Ja = "library";
function ui(e) {
  let t = Jf();
  return t ||
    ((e == null ? void 0 : e.config.engineType) === "library"
      ? "library"
      : (e == null ? void 0 : e.config.engineType) === "binary"
      ? "binary"
      : Ja);
}
u(ui, "getClientEngineType");
function Jf() {
  let e = w.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
}
u(Jf, "getEngineTypeFromEnvVar");
d();
f();
m();
var Hf = ee(Ha()), Wf = ee(li());
function Ir(e) {
  return e instanceof Error;
}
u(Ir, "isError");
d();
f();
m();
d();
f();
m();
d();
f();
m();
var Dt = class {};
u(Dt, "Engine");
d();
f();
m();
var Ce = class extends Error {
  constructor(r, n, o) {
    super(r);
    this.clientVersion = n, this.errorCode = o, Error.captureStackTrace(Ce);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
u(Ce, "PrismaClientInitializationError");
d();
f();
m();
var he = class extends Error {
  constructor(r, { code: n, clientVersion: o, meta: i, batchRequestIdx: s }) {
    super(r);
    this.code = n,
      this.clientVersion = o,
      this.meta = i,
      this.batchRequestIdx = s;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
u(he, "PrismaClientKnownRequestError");
d();
f();
m();
var Xe = class extends Error {
  constructor(r, n) {
    super(r);
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
u(Xe, "PrismaClientRustPanicError");
d();
f();
m();
var Ie = class extends Error {
  constructor(r, { clientVersion: n, batchRequestIdx: o }) {
    super(r);
    this.clientVersion = n, this.batchRequestIdx = o;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
u(Ie, "PrismaClientUnknownRequestError");
d();
f();
m();
function tu({ error: e, user_facing_error: t }, r) {
  return t.error_code
    ? new he(t.message, {
      code: t.error_code,
      clientVersion: r,
      meta: t.meta,
      batchRequestIdx: t.batch_request_idx,
    })
    : new Ie(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
u(tu, "prismaGraphQLToJSError");
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
var nu = typeof globalThis == "object" ? globalThis : global;
d();
f();
m();
var ft = "1.2.0";
d();
f();
m();
var ou = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Yf(e) {
  var t = new Set([e]), r = new Set(), n = e.match(ou);
  if (!n) {
    return function () {
      return !1;
    };
  }
  var o = { major: +n[1], minor: +n[2], patch: +n[3], prerelease: n[4] };
  if (o.prerelease != null) {
    return u(function (c) {
      return c === e;
    }, "isExactmatch");
  }
  function i(a) {
    return r.add(a), !1;
  }
  u(i, "_reject");
  function s(a) {
    return t.add(a), !0;
  }
  return u(s, "_accept"),
    u(function (c) {
      if (t.has(c)) return !0;
      if (r.has(c)) return !1;
      var l = c.match(ou);
      if (!l) return i(c);
      var p = { major: +l[1], minor: +l[2], patch: +l[3], prerelease: l[4] };
      return p.prerelease != null || o.major !== p.major
        ? i(c)
        : o.major === 0
        ? o.minor === p.minor && o.patch <= p.patch ? s(c) : i(c)
        : o.minor <= p.minor
        ? s(c)
        : i(c);
    }, "isCompatible");
}
u(Yf, "_makeCompatibilityCheck");
var iu = Yf(ft);
var Zf = ft.split(".")[0],
  Rr = Symbol.for("opentelemetry.js.api." + Zf),
  _r = nu;
function mt(e, t, r, n) {
  var o;
  n === void 0 && (n = !1);
  var i = _r[Rr] = (o = _r[Rr]) !== null && o !== void 0 ? o : { version: ft };
  if (!n && i[e]) {
    var s = new Error(
      "@opentelemetry/api: Attempted duplicate registration of API: " + e,
    );
    return r.error(s.stack || s.message), !1;
  }
  if (i.version !== ft) {
    var s = new Error(
      "@opentelemetry/api: All API registration versions must match",
    );
    return r.error(s.stack || s.message), !1;
  }
  return i[e] = t,
    r.debug(
      "@opentelemetry/api: Registered a global for " + e + " v" + ft + ".",
    ),
    !0;
}
u(mt, "registerGlobal");
function ke(e) {
  var t, r, n = (t = _r[Rr]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !iu(n))) {
    return (r = _r[Rr]) === null || r === void 0 ? void 0 : r[e];
  }
}
u(ke, "getGlobal");
function dt(e, t) {
  t.debug(
    "@opentelemetry/api: Unregistering a global for " + e + " v" + ft + ".",
  );
  var r = _r[Rr];
  r && delete r[e];
}
u(dt, "unregisterGlobal");
var su = function () {
  function e(t) {
    this._namespace = t.namespace || "DiagComponentLogger";
  }
  return u(e, "DiagComponentLogger"),
    e.prototype.debug = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Fr("debug", this._namespace, t);
    },
    e.prototype.error = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Fr("error", this._namespace, t);
    },
    e.prototype.info = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Fr("info", this._namespace, t);
    },
    e.prototype.warn = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Fr("warn", this._namespace, t);
    },
    e.prototype.verbose = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Fr("verbose", this._namespace, t);
    },
    e;
}();
function Fr(e, t, r) {
  var n = ke("diag");
  if (!!n) return r.unshift(t), n[e].apply(n, r);
}
u(Fr, "logProxy");
d();
f();
m();
d();
f();
m();
var ve;
(function (e) {
  e[e.NONE = 0] = "NONE",
    e[e.ERROR = 30] = "ERROR",
    e[e.WARN = 50] = "WARN",
    e[e.INFO = 60] = "INFO",
    e[e.DEBUG = 70] = "DEBUG",
    e[e.VERBOSE = 80] = "VERBOSE",
    e[e.ALL = 9999] = "ALL";
})(ve || (ve = {}));
function au(e, t) {
  e < ve.NONE ? e = ve.NONE : e > ve.ALL && (e = ve.ALL), t = t || {};
  function r(n, o) {
    var i = t[n];
    return typeof i == "function" && e >= o ? i.bind(t) : function () {};
  }
  return u(r, "_filterFunc"), {
    error: r("error", ve.ERROR),
    warn: r("warn", ve.WARN),
    info: r("info", ve.INFO),
    debug: r("debug", ve.DEBUG),
    verbose: r("verbose", ve.VERBOSE),
  };
}
u(au, "createLogLevelDiagLogger");
var Xf = "diag",
  Te = function () {
    function e() {
      function t(n) {
        return function () {
          for (var o = [], i = 0; i < arguments.length; i++) {
            o[i] = arguments[i];
          }
          var s = ke("diag");
          if (!!s) return s[n].apply(s, o);
        };
      }
      u(t, "_logProxy");
      var r = this;
      r.setLogger = function (n, o) {
        var i, s;
        if (o === void 0 && (o = ve.INFO), n === r) {
          var a = new Error(
            "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation",
          );
          return r.error(
            (i = a.stack) !== null && i !== void 0 ? i : a.message,
          ),
            !1;
        }
        var c = ke("diag"), l = au(o, n);
        if (c) {
          var p = (s = new Error().stack) !== null && s !== void 0
            ? s
            : "<failed to generate stacktrace>";
          c.warn("Current logger will be overwritten from " + p),
            l.warn(
              "Current logger will overwrite one already registered from " + p,
            );
        }
        return mt("diag", l, r, !0);
      },
        r.disable = function () {
          dt(Xf, r);
        },
        r.createComponentLogger = function (n) {
          return new su(n);
        },
        r.verbose = t("verbose"),
        r.debug = t("debug"),
        r.info = t("info"),
        r.warn = t("warn"),
        r.error = t("error");
    }
    return u(e, "DiagAPI"),
      e.instance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e;
  }();
d();
f();
m();
var uu = function () {
  function e(t) {
    this._entries = t ? new Map(t) : new Map();
  }
  return u(e, "BaggageImpl"),
    e.prototype.getEntry = function (t) {
      var r = this._entries.get(t);
      if (!!r) return Object.assign({}, r);
    },
    e.prototype.getAllEntries = function () {
      return Array.from(this._entries.entries()).map(function (t) {
        var r = t[0], n = t[1];
        return [r, n];
      });
    },
    e.prototype.setEntry = function (t, r) {
      var n = new e(this._entries);
      return n._entries.set(t, r), n;
    },
    e.prototype.removeEntry = function (t) {
      var r = new e(this._entries);
      return r._entries.delete(t), r;
    },
    e.prototype.removeEntries = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      for (var n = new e(this._entries), o = 0, i = t; o < i.length; o++) {
        var s = i[o];
        n._entries.delete(s);
      }
      return n;
    },
    e.prototype.clear = function () {
      return new e();
    },
    e;
}();
d();
f();
m();
var em = Symbol("BaggageEntryMetadata");
var Ew = Te.instance();
function cu(e) {
  return e === void 0 && (e = {}), new uu(new Map(Object.entries(e)));
}
u(cu, "createBaggage");
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
var pi = [
    { n: "error", c: "error" },
    { n: "warn", c: "warn" },
    { n: "info", c: "info" },
    { n: "debug", c: "debug" },
    { n: "verbose", c: "trace" },
  ],
  Nw = function () {
    function e() {
      function t(n) {
        return function () {
          for (var o = [], i = 0; i < arguments.length; i++) {
            o[i] = arguments[i];
          }
          if (console) {
            var s = console[n];
            if (
              typeof s != "function" && (s = console.log),
                typeof s == "function"
            ) return s.apply(console, o);
          }
        };
      }
      u(t, "_consoleFunc");
      for (var r = 0; r < pi.length; r++) this[pi[r].n] = t(pi[r].c);
    }
    return u(e, "DiagConsoleLogger"), e;
  }();
d();
f();
m();
var lu = {
    get: function (e, t) {
      if (e != null) return e[t];
    },
    keys: function (e) {
      return e == null ? [] : Object.keys(e);
    },
  },
  pu = {
    set: function (e, t, r) {
      e != null && (e[t] = r);
    },
  };
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
function Yn(e) {
  return Symbol.for(e);
}
u(Yn, "createContextKey");
var tm = function () {
    function e(t) {
      var r = this;
      r._currentContext = t ? new Map(t) : new Map(),
        r.getValue = function (n) {
          return r._currentContext.get(n);
        },
        r.setValue = function (n, o) {
          var i = new e(r._currentContext);
          return i._currentContext.set(n, o), i;
        },
        r.deleteValue = function (n) {
          var o = new e(r._currentContext);
          return o._currentContext.delete(n), o;
        };
    }
    return u(e, "BaseContext"), e;
  }(),
  fu = new tm();
var rm = function (e, t) {
    for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
    return e;
  },
  mu = function () {
    function e() {}
    return u(e, "NoopContextManager"),
      e.prototype.active = function () {
        return fu;
      },
      e.prototype.with = function (t, r, n) {
        for (var o = [], i = 3; i < arguments.length; i++) {o[i - 3] =
            arguments[i];}
        return r.call.apply(r, rm([n], o));
      },
      e.prototype.bind = function (t, r) {
        return r;
      },
      e.prototype.enable = function () {
        return this;
      },
      e.prototype.disable = function () {
        return this;
      },
      e;
  }();
var nm = function (e, t) {
    for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
    return e;
  },
  fi = "context",
  om = new mu(),
  tr = function () {
    function e() {}
    return u(e, "ContextAPI"),
      e.getInstance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e.prototype.setGlobalContextManager = function (t) {
        return mt(fi, t, Te.instance());
      },
      e.prototype.active = function () {
        return this._getContextManager().active();
      },
      e.prototype.with = function (t, r, n) {
        for (var o, i = [], s = 3; s < arguments.length; s++) {i[s - 3] =
            arguments[s];}
        return (o = this._getContextManager()).with.apply(o, nm([t, r, n], i));
      },
      e.prototype.bind = function (t, r) {
        return this._getContextManager().bind(t, r);
      },
      e.prototype._getContextManager = function () {
        return ke(fi) || om;
      },
      e.prototype.disable = function () {
        this._getContextManager().disable(), dt(fi, Te.instance());
      },
      e;
  }();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
var Zn;
(function (e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Zn || (Zn = {}));
var Xn = "0000000000000000",
  eo = "00000000000000000000000000000000",
  mi = { traceId: eo, spanId: Xn, traceFlags: Zn.NONE };
var gt = function () {
  function e(t) {
    t === void 0 && (t = mi), this._spanContext = t;
  }
  return u(e, "NonRecordingSpan"),
    e.prototype.spanContext = function () {
      return this._spanContext;
    },
    e.prototype.setAttribute = function (t, r) {
      return this;
    },
    e.prototype.setAttributes = function (t) {
      return this;
    },
    e.prototype.addEvent = function (t, r) {
      return this;
    },
    e.prototype.setStatus = function (t) {
      return this;
    },
    e.prototype.updateName = function (t) {
      return this;
    },
    e.prototype.end = function (t) {},
    e.prototype.isRecording = function () {
      return !1;
    },
    e.prototype.recordException = function (t, r) {},
    e;
}();
var di = Yn("OpenTelemetry Context Key SPAN");
function to(e) {
  return e.getValue(di) || void 0;
}
u(to, "getSpan");
function du() {
  return to(tr.getInstance().active());
}
u(du, "getActiveSpan");
function Dr(e, t) {
  return e.setValue(di, t);
}
u(Dr, "setSpan");
function gu(e) {
  return e.deleteValue(di);
}
u(gu, "deleteSpan");
function yu(e, t) {
  return Dr(e, new gt(t));
}
u(yu, "setSpanContext");
function ro(e) {
  var t;
  return (t = to(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
u(ro, "getSpanContext");
d();
f();
m();
var im = /^([0-9a-f]{32})$/i, sm = /^[0-9a-f]{16}$/i;
function hu(e) {
  return im.test(e) && e !== eo;
}
u(hu, "isValidTraceId");
function bu(e) {
  return sm.test(e) && e !== Xn;
}
u(bu, "isValidSpanId");
function kr(e) {
  return hu(e.traceId) && bu(e.spanId);
}
u(kr, "isSpanContextValid");
function wu(e) {
  return new gt(e);
}
u(wu, "wrapSpanContext");
var xu = tr.getInstance(),
  no = function () {
    function e() {}
    return u(e, "NoopTracer"),
      e.prototype.startSpan = function (t, r, n) {
        var o = Boolean(r == null ? void 0 : r.root);
        if (o) return new gt();
        var i = n && ro(n);
        return am(i) && kr(i) ? new gt(i) : new gt();
      },
      e.prototype.startActiveSpan = function (t, r, n, o) {
        var i, s, a;
        if (!(arguments.length < 2)) {
          arguments.length === 2
            ? a = r
            : arguments.length === 3
            ? (i = r, a = n)
            : (i = r, s = n, a = o);
          var c = s != null ? s : xu.active(),
            l = this.startSpan(t, i, c),
            p = Dr(c, l);
          return xu.with(p, a, void 0, l);
        }
      },
      e;
  }();
function am(e) {
  return typeof e == "object" && typeof e.spanId == "string" &&
    typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
u(am, "isSpanContext");
var um = new no(),
  Eu = function () {
    function e(t, r, n, o) {
      this._provider = t, this.name = r, this.version = n, this.options = o;
    }
    return u(e, "ProxyTracer"),
      e.prototype.startSpan = function (t, r, n) {
        return this._getTracer().startSpan(t, r, n);
      },
      e.prototype.startActiveSpan = function (t, r, n, o) {
        var i = this._getTracer();
        return Reflect.apply(i.startActiveSpan, i, arguments);
      },
      e.prototype._getTracer = function () {
        if (this._delegate) return this._delegate;
        var t = this._provider.getDelegateTracer(
          this.name,
          this.version,
          this.options,
        );
        return t ? (this._delegate = t, this._delegate) : um;
      },
      e;
  }();
d();
f();
m();
d();
f();
m();
var vu = function () {
  function e() {}
  return u(e, "NoopTracerProvider"),
    e.prototype.getTracer = function (t, r, n) {
      return new no();
    },
    e;
}();
var cm = new vu(),
  gi = function () {
    function e() {}
    return u(e, "ProxyTracerProvider"),
      e.prototype.getTracer = function (t, r, n) {
        var o;
        return (o = this.getDelegateTracer(t, r, n)) !== null && o !== void 0
          ? o
          : new Eu(this, t, r, n);
      },
      e.prototype.getDelegate = function () {
        var t;
        return (t = this._delegate) !== null && t !== void 0 ? t : cm;
      },
      e.prototype.setDelegate = function (t) {
        this._delegate = t;
      },
      e.prototype.getDelegateTracer = function (t, r, n) {
        var o;
        return (o = this._delegate) === null || o === void 0
          ? void 0
          : o.getTracer(t, r, n);
      },
      e;
  }();
d();
f();
m();
d();
f();
m();
var Au;
(function (e) {
  e[e.NOT_RECORD = 0] = "NOT_RECORD",
    e[e.RECORD = 1] = "RECORD",
    e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
})(Au || (Au = {}));
d();
f();
m();
d();
f();
m();
var Pu;
(function (e) {
  e[e.INTERNAL = 0] = "INTERNAL",
    e[e.SERVER = 1] = "SERVER",
    e[e.CLIENT = 2] = "CLIENT",
    e[e.PRODUCER = 3] = "PRODUCER",
    e[e.CONSUMER = 4] = "CONSUMER";
})(Pu || (Pu = {}));
d();
f();
m();
d();
f();
m();
d();
f();
m();
var Tu;
(function (e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(Tu || (Tu = {}));
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
var yi = "[_0-9a-z-*/]",
  lm = "[a-z]" + yi + "{0,255}",
  pm = "[a-z0-9]" + yi + "{0,240}@[a-z]" + yi + "{0,13}",
  fm = new RegExp("^(?:" + lm + "|" + pm + ")$"),
  mm = /^[ -~]{0,255}[!-~]$/,
  dm = /,|=/;
function Mu(e) {
  return fm.test(e);
}
u(Mu, "validateKey");
function Ou(e) {
  return mm.test(e) && !dm.test(e);
}
u(Ou, "validateValue");
var Su = 32,
  gm = 512,
  Cu = ",",
  Iu = "=",
  ym = function () {
    function e(t) {
      this._internalState = new Map(), t && this._parse(t);
    }
    return u(e, "TraceStateImpl"),
      e.prototype.set = function (t, r) {
        var n = this._clone();
        return n._internalState.has(t) && n._internalState.delete(t),
          n._internalState.set(t, r),
          n;
      },
      e.prototype.unset = function (t) {
        var r = this._clone();
        return r._internalState.delete(t), r;
      },
      e.prototype.get = function (t) {
        return this._internalState.get(t);
      },
      e.prototype.serialize = function () {
        var t = this;
        return this._keys().reduce(function (r, n) {
          return r.push(n + Iu + t.get(n)), r;
        }, []).join(Cu);
      },
      e.prototype._parse = function (t) {
        t.length > gm ||
          (this._internalState = t.split(Cu).reverse().reduce(function (r, n) {
            var o = n.trim(), i = o.indexOf(Iu);
            if (i !== -1) {
              var s = o.slice(0, i), a = o.slice(i + 1, n.length);
              Mu(s) && Ou(a) && r.set(s, a);
            }
            return r;
          }, new Map()),
            this._internalState.size > Su &&
            (this._internalState = new Map(
              Array.from(this._internalState.entries()).reverse().slice(0, Su),
            )));
      },
      e.prototype._keys = function () {
        return Array.from(this._internalState.keys()).reverse();
      },
      e.prototype._clone = function () {
        var t = new e();
        return t._internalState = new Map(this._internalState), t;
      },
      e;
  }();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
d();
f();
m();
var hi = "trace",
  Ru = function () {
    function e() {
      this._proxyTracerProvider = new gi(),
        this.wrapSpanContext = wu,
        this.isSpanContextValid = kr,
        this.deleteSpan = gu,
        this.getSpan = to,
        this.getActiveSpan = du,
        this.getSpanContext = ro,
        this.setSpan = Dr,
        this.setSpanContext = yu;
    }
    return u(e, "TraceAPI"),
      e.getInstance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e.prototype.setGlobalTracerProvider = function (t) {
        var r = mt(hi, this._proxyTracerProvider, Te.instance());
        return r && this._proxyTracerProvider.setDelegate(t), r;
      },
      e.prototype.getTracerProvider = function () {
        return ke(hi) || this._proxyTracerProvider;
      },
      e.prototype.getTracer = function (t, r) {
        return this.getTracerProvider().getTracer(t, r);
      },
      e.prototype.disable = function () {
        dt(hi, Te.instance()), this._proxyTracerProvider = new gi();
      },
      e;
  }();
d();
f();
m();
d();
f();
m();
var _u = function () {
  function e() {}
  return u(e, "NoopTextMapPropagator"),
    e.prototype.inject = function (t, r) {},
    e.prototype.extract = function (t, r) {
      return t;
    },
    e.prototype.fields = function () {
      return [];
    },
    e;
}();
d();
f();
m();
var bi = Yn("OpenTelemetry Baggage Key");
function Fu(e) {
  return e.getValue(bi) || void 0;
}
u(Fu, "getBaggage");
function Du(e, t) {
  return e.setValue(bi, t);
}
u(Du, "setBaggage");
function ku(e) {
  return e.deleteValue(bi);
}
u(ku, "deleteBaggage");
var wi = "propagation",
  hm = new _u(),
  Nu = function () {
    function e() {
      this.createBaggage = cu,
        this.getBaggage = Fu,
        this.setBaggage = Du,
        this.deleteBaggage = ku;
    }
    return u(e, "PropagationAPI"),
      e.getInstance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e.prototype.setGlobalPropagator = function (t) {
        return mt(wi, t, Te.instance());
      },
      e.prototype.inject = function (t, r, n) {
        return n === void 0 && (n = pu),
          this._getGlobalPropagator().inject(t, r, n);
      },
      e.prototype.extract = function (t, r, n) {
        return n === void 0 && (n = lu),
          this._getGlobalPropagator().extract(t, r, n);
      },
      e.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
      },
      e.prototype.disable = function () {
        dt(wi, Te.instance());
      },
      e.prototype._getGlobalPropagator = function () {
        return ke(wi) || hm;
      },
      e;
  }();
var yt = tr.getInstance(),
  oo = Ru.getInstance(),
  f2 = Nu.getInstance(),
  d2 = Te.instance();
d();
f();
m();
function rr({ context: e, tracingConfig: t }) {
  let r = oo.getSpanContext(e != null ? e : yt.active());
  return (t == null ? void 0 : t.enabled) && r
    ? `00-${r.traceId}-${r.spanId}-0${r.traceFlags}`
    : "00-10-10-00";
}
u(rr, "getTraceParent");
d();
f();
m();
function xi(e) {
  let t = e.includes("tracing");
  return {
    get enabled() {
      return Boolean(globalThis.PRISMA_INSTRUMENTATION && t);
    },
    get middleware() {
      return Boolean(
        globalThis.PRISMA_INSTRUMENTATION &&
          globalThis.PRISMA_INSTRUMENTATION.middleware,
      );
    },
  };
}
u(xi, "getTracingConfig");
d();
f();
m();
async function nr(e, t) {
  var o;
  if (e.enabled === !1) return t();
  let r = oo.getTracer("prisma"), n = (o = e.context) != null ? o : yt.active();
  if (e.active === !1) {
    let i = r.startSpan(`prisma:client:${e.name}`, e, n);
    try {
      return await t(i, n);
    } finally {
      i.end();
    }
  }
  return r.startActiveSpan(`prisma:client:${e.name}`, e, n, async (i) => {
    try {
      return await t(i, yt.active());
    } finally {
      i.end();
    }
  });
}
u(nr, "runInChildSpan");
d();
f();
m();
function Nr(e) {
  return typeof e.batchRequestIdx == "number";
}
u(Nr, "hasBatchIndex");
d();
f();
m();
d();
f();
m();
d();
f();
m();
var jr = class extends Error {
  constructor(r, n) {
    super(r);
    this.clientVersion = n.clientVersion, this.cause = n.cause;
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
u(jr, "PrismaClientError");
var be = class extends jr {
  constructor(r, n) {
    var o;
    super(r, n);
    this.isRetryable = (o = n.isRetryable) != null ? o : !0;
  }
};
u(be, "DataProxyError");
d();
f();
m();
d();
f();
m();
function Q(e, t) {
  return { ...e, isRetryable: t };
}
u(Q, "setRetryable");
var or = class extends be {
  constructor(r) {
    super("This request must be retried", Q(r, !0));
    this.name = "ForcedRetryError";
    this.code = "P5001";
  }
};
u(or, "ForcedRetryError");
d();
f();
m();
var et = class extends be {
  constructor(r, n) {
    super(r, Q(n, !1));
    this.name = "InvalidDatasourceError";
    this.code = "P5002";
  }
};
u(et, "InvalidDatasourceError");
d();
f();
m();
var tt = class extends be {
  constructor(r, n) {
    super(r, Q(n, !1));
    this.name = "NotImplementedYetError";
    this.code = "P5004";
  }
};
u(tt, "NotImplementedYetError");
d();
f();
m();
d();
f();
m();
var Y = class extends be {
  constructor(r, n) {
    var i;
    super(r, n);
    this.response = n.response;
    let o = (i = this.response.headers) == null
      ? void 0
      : i["Prisma-Request-Id"];
    if (o) {
      let s = `(The request id was: ${o})`;
      this.message = this.message + " " + s;
    }
  }
};
u(Y, "DataProxyAPIError");
var kt = class extends Y {
  constructor(r) {
    super("Schema needs to be uploaded", Q(r, !0));
    this.name = "SchemaMissingError";
    this.code = "P5005";
  }
};
u(kt, "SchemaMissingError");
d();
f();
m();
d();
f();
m();
var Ei = "This request could not be understood by the server",
  $r = class extends Y {
    constructor(r, n, o) {
      super(n || Ei, Q(r, !1));
      this.name = "BadRequestError";
      this.code = "P5000";
      o && (this.code = o);
    }
  };
u($r, "BadRequestError");
d();
f();
m();
var Lr = class extends Y {
  constructor(r, n) {
    super("Engine not started: healthcheck timeout", Q(r, !0));
    this.name = "HealthcheckTimeoutError";
    this.code = "P5013";
    this.logs = n;
  }
};
u(Lr, "HealthcheckTimeoutError");
d();
f();
m();
var Br = class extends Y {
  constructor(r, n, o) {
    super(n, Q(r, !0));
    this.name = "EngineStartupError";
    this.code = "P5014";
    this.logs = o;
  }
};
u(Br, "EngineStartupError");
d();
f();
m();
var qr = class extends Y {
  constructor(r) {
    super("Engine version is not supported", Q(r, !1));
    this.name = "EngineVersionNotSupportedError";
    this.code = "P5012";
  }
};
u(qr, "EngineVersionNotSupportedError");
d();
f();
m();
var vi = "Request timed out",
  Ur = class extends Y {
    constructor(r, n = vi) {
      super(n, Q(r, !1));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
u(Ur, "GatewayTimeoutError");
d();
f();
m();
var bm = "Interactive transaction error",
  Vr = class extends Y {
    constructor(r, n = bm) {
      super(n, Q(r, !1));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
u(Vr, "InteractiveTransactionError");
d();
f();
m();
var wm = "Request parameters are invalid",
  Gr = class extends Y {
    constructor(r, n = wm) {
      super(n, Q(r, !1));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
u(Gr, "InvalidRequestError");
d();
f();
m();
var Ai = "Requested resource does not exist",
  Kr = class extends Y {
    constructor(r, n = Ai) {
      super(n, Q(r, !1));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
u(Kr, "NotFoundError");
d();
f();
m();
var Pi = "Unknown server error",
  ir = class extends Y {
    constructor(r, n, o) {
      super(n || Pi, Q(r, !0));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = o;
    }
  };
u(ir, "ServerError");
d();
f();
m();
var Ti = "Unauthorized, check your connection string",
  Jr = class extends Y {
    constructor(r, n = Ti) {
      super(n, Q(r, !1));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
u(Jr, "UnauthorizedError");
d();
f();
m();
var Mi = "Usage exceeded, retry again later",
  zr = class extends Y {
    constructor(r, n = Mi) {
      super(n, Q(r, !0));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
u(zr, "UsageExceededError");
async function xm(e) {
  let t;
  try {
    t = await e.text();
  } catch (r) {
    return { type: "EmptyError" };
  }
  try {
    let r = JSON.parse(t);
    if (typeof r == "string") {
      switch (r) {
        case "InternalDataProxyError":
          return { type: "DataProxyError", body: r };
        default:
          return { type: "UnknownTextError", body: r };
      }
    }
    if (typeof r == "object" && r !== null) {
      if ("is_panic" in r && "message" in r && "error_code" in r) {
        return { type: "QueryEngineError", body: r };
      }
      if (
        "EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r ||
        "InvalidRequestError" in r
      ) {
        let n = Object.values(r)[0].reason;
        return typeof n == "string" &&
            !["SchemaMissing", "EngineVersionNotSupported"].includes(n)
          ? { type: "UnknownJsonError", body: r }
          : { type: "DataProxyError", body: r };
      }
    }
    return { type: "UnknownJsonError", body: r };
  } catch (r) {
    return t === ""
      ? { type: "EmptyError" }
      : { type: "UnknownTextError", body: t };
  }
}
u(xm, "getResponseErrorBody");
async function Hr(e, t) {
  if (e.ok) return;
  let r = { clientVersion: t, response: e }, n = await xm(e);
  if (n.type === "QueryEngineError") {
    throw new he(n.body.message, { code: n.body.error_code, clientVersion: t });
  }
  if (n.type === "DataProxyError") {
    if (n.body === "InternalDataProxyError") {
      throw new ir(r, "Internal Data Proxy error");
    }
    if ("EngineNotStarted" in n.body) {
      if (n.body.EngineNotStarted.reason === "SchemaMissing") return new kt(r);
      if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") {
        throw new qr(r);
      }
      if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: o, logs: i } =
          n.body.EngineNotStarted.reason.EngineStartupError;
        throw new Br(r, o, i);
      }
      if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: o, error_code: i } =
          n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new Ce(o, t, i);
      }
      if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
        let { logs: o } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new Lr(r, o);
      }
    }
    if ("InteractiveTransactionMisrouted" in n.body) {
      let o = {
        IDParseError: "Could not parse interactive transaction ID",
        NoQueryEngineFoundError:
          "Could not find Query Engine for the specified host and transaction ID",
        TransactionStartError: "Could not start interactive transaction",
      };
      throw new Vr(r, o[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in n.body) {
      throw new Gr(r, n.body.InvalidRequestError.reason);
    }
  }
  if (e.status === 401 || e.status === 403) throw new Jr(r, sr(Ti, n));
  if (e.status === 404) return new Kr(r, sr(Ai, n));
  if (e.status === 429) throw new zr(r, sr(Mi, n));
  if (e.status === 504) throw new Ur(r, sr(vi, n));
  if (e.status >= 500) throw new ir(r, sr(Pi, n));
  if (e.status >= 400) throw new $r(r, sr(Ei, n));
}
u(Hr, "responseToError");
function sr(e, t) {
  return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
u(sr, "buildErrorMessage");
d();
f();
m();
function ju(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((o) => setTimeout(() => o(n), n));
}
u(ju, "backOff");
d();
f();
m();
var $u = {
  "@prisma/debug": "workspace:4.7.0",
  "@prisma/engines-version":
    "4.7.0-74.39190b250ebc338586e25e6da45e5e783bc8a635",
  "@prisma/fetch-engine": "workspace:4.7.0",
  "@prisma/get-platform": "workspace:4.7.0",
  "@swc/core": "1.3.14",
  "@swc/jest": "0.2.23",
  "@types/jest": "28.1.8",
  "@types/node": "16.18.3",
  execa: "5.1.1",
  jest: "28.1.3",
  typescript: "4.8.4",
};
d();
f();
m();
d();
f();
m();
var Wr = class extends be {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      Q(n, !0),
    );
    this.name = "RequestError";
    this.code = "P5010";
  }
};
u(Wr, "RequestError");
d();
f();
m();
function Lu() {
  return typeof self == "undefined" ? "node" : "browser";
}
u(Lu, "getJSRuntimeName");
async function Nt(e, t) {
  var o;
  let r = t.clientVersion, n = Lu();
  try {
    return n === "browser" ? await fetch(e, t) : await Oi(e, t);
  } catch (i) {
    let s = (o = i.message) != null ? o : "Unknown error";
    throw new Wr(s, { clientVersion: r });
  }
}
u(Nt, "request");
function vm(e) {
  return { ...e.headers, "Content-Type": "application/json" };
}
u(vm, "buildHeaders");
function Am(e) {
  return { method: e.method, headers: vm(e) };
}
u(Am, "buildOptions");
function Pm(e, t) {
  return {
    text: () => x.Buffer.concat(e).toString(),
    json: () => JSON.parse(x.Buffer.concat(e).toString()),
    ok: t.statusCode >= 200 && t.statusCode <= 299,
    status: t.statusCode,
    url: t.url,
    headers: t.headers,
  };
}
u(Pm, "buildResponse");
async function Oi(e, t = {}) {
  let r = Tm("https"), n = Am(t), o = [], { origin: i } = new URL(e);
  return new Promise((s, a) => {
    var l;
    let c = r.request(e, n, (p) => {
      let { statusCode: g, headers: { location: y } } = p;
      g >= 301 && g <= 399 && y &&
      (y.startsWith("http") === !1 ? s(Oi(`${i}${y}`, t)) : s(Oi(y, t))),
        p.on("data", (b) => o.push(b)),
        p.on("end", () => s(Pm(o, p))),
        p.on("error", a);
    });
    c.on("error", a), c.end((l = t.body) != null ? l : "");
  });
}
u(Oi, "nodeFetch");
var Tm = typeof Ar != "undefined" ? Ar : () => {};
var Mm = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  Bu = Ke("prisma:client:dataproxyEngine");
async function Om(e) {
  var i, s, a;
  let t = $u["@prisma/engines-version"],
    r = (i = e.clientVersion) != null ? i : "unknown";
  if (w.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) {
    return w.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  }
  let [n, o] = (s = r == null ? void 0 : r.split("-")) != null ? s : [];
  if (o === void 0 && Mm.test(n)) return n;
  if (o !== void 0 || r === "0.0.0") {
    let [c] = (a = t.split("-")) != null ? a : [],
      [l, p, g] = c.split("."),
      y = Sm(`<=${l}.${p}.${g}`),
      b = await Nt(y, { clientVersion: r });
    if (!b.ok) {
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${b.status} ${b.statusText}, response body: ${
          await b.text() || "<empty body>"
        }`,
      );
    }
    let v = await b.text();
    Bu("length of body fetched from unpkg.com", v.length);
    let h;
    try {
      h = JSON.parse(v);
    } catch (A) {
      throw console.error("JSON.parse error: body fetched from unpkg.com: ", v),
        A;
    }
    return h.version;
  }
  throw new tt(
    "Only `major.minor.patch` versions are supported by Prisma Data Proxy.",
    { clientVersion: r },
  );
}
u(Om, "_getClientVersion");
async function qu(e) {
  let t = await Om(e);
  return Bu("version", t), t;
}
u(qu, "getClientVersion");
function Sm(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
u(Sm, "prismaPkgURL");
var Uu = 10,
  Cm = Promise.resolve(),
  Si = Ke("prisma:client:dataproxyEngine"),
  ar = class extends Dt {
    constructor(r) {
      var i, s, a, c;
      super();
      this.config = r,
        this.env = { ...this.config.env, ...w.env },
        this.inlineSchema = (i = r.inlineSchema) != null ? i : "",
        this.inlineDatasources = (s = r.inlineDatasources) != null ? s : {},
        this.inlineSchemaHash = (a = r.inlineSchemaHash) != null ? a : "",
        this.clientVersion = (c = r.clientVersion) != null ? c : "unknown",
        this.logEmitter = r.logEmitter;
      let [n, o] = this.extractHostAndApiKey();
      this.remoteClientVersion = Cm.then(() => qu(this.config)),
        this.headers = { Authorization: `Bearer ${o}` },
        this.host = n,
        Si("host", this.host);
    }
    version() {
      return "unknown";
    }
    async start() {}
    async stop() {}
    on(r, n) {
      if (r === "beforeExit") {
        throw new tt("beforeExit event is not yet supported", {
          clientVersion: this.clientVersion,
        });
      }
      this.logEmitter.on(r, n);
    }
    async url(r) {
      return `https://${this.host}/${await this
        .remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
    }
    async getConfig() {
      return Promise.resolve({
        datasources: [{ activeProvider: this.config.activeProvider }],
      });
    }
    getDmmf() {
      throw new tt("getDmmf is not yet supported", {
        clientVersion: this.clientVersion,
      });
    }
    async uploadSchema() {
      let r = await Nt(await this.url("schema"), {
        method: "PUT",
        headers: this.headers,
        body: this.inlineSchema,
        clientVersion: this.clientVersion,
      });
      r.ok || Si("schema response status", r.status);
      let n = await Hr(r, this.clientVersion);
      if (n) {
        throw this.logEmitter.emit("warn", {
          message: `Error while uploading schema: ${n.message}`,
        }),
          n;
      }
      this.logEmitter.emit("info", {
        message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
      });
    }
    request({ query: r, headers: n = {}, transaction: o }) {
      return this.logEmitter.emit("query", { query: r }),
        this.requestInternal({ query: r, variables: {} }, n, o);
    }
    async requestBatch({ queries: r, headers: n = {}, transaction: o }) {
      let i = Boolean(o);
      this.logEmitter.emit("query", {
        query: `Batch${i ? " in transaction" : ""} (${r.length}):
${
          r.join(`
`)
        }`,
      });
      let s = {
          batch: r.map((c) => ({ query: c, variables: {} })),
          transaction: i,
          isolationLevel: o == null ? void 0 : o.isolationLevel,
        },
        { batchResult: a } = await this.requestInternal(s, n);
      return a;
    }
    requestInternal(r, n, o) {
      return this.withRetry({
        actionGerund: "querying",
        callback: async ({ logHttpCall: i }) => {
          let s = o
            ? `${o.payload.endpoint}/graphql`
            : await this.url("graphql");
          i(s);
          let a = await Nt(s, {
            method: "POST",
            headers: { ...Ci(n), ...this.headers },
            body: JSON.stringify(r),
            clientVersion: this.clientVersion,
          });
          a.ok || Si("graphql response status", a.status);
          let c = await Hr(a, this.clientVersion);
          await this.handleError(c);
          let l = await a.json();
          if (l.errors) {
            throw l.errors.length === 1
              ? tu(l.errors[0], this.config.clientVersion)
              : new Ie(l.errors, { clientVersion: this.config.clientVersion });
          }
          return l;
        },
      });
    }
    async transaction(r, n, o) {
      let i = {
        start: "starting",
        commit: "committing",
        rollback: "rolling back",
      };
      return this.withRetry({
        actionGerund: `${i[r]} transaction`,
        callback: async ({ logHttpCall: s }) => {
          var a, c;
          if (r === "start") {
            let l = JSON.stringify({
                max_wait: (a = o == null ? void 0 : o.maxWait) != null
                  ? a
                  : 2e3,
                timeout: (c = o == null ? void 0 : o.timeout) != null ? c : 5e3,
                isolation_level: o == null ? void 0 : o.isolationLevel,
              }),
              p = await this.url("transaction/start");
            s(p);
            let g = await Nt(p, {
                method: "POST",
                headers: { ...Ci(n), ...this.headers },
                body: l,
                clientVersion: this.clientVersion,
              }),
              y = await Hr(g, this.clientVersion);
            await this.handleError(y);
            let b = await g.json(), v = b.id, h = b["data-proxy"].endpoint;
            return { id: v, payload: { endpoint: h } };
          } else {
            let l = `${o.payload.endpoint}/${r}`;
            s(l);
            let p = await Nt(l, {
                method: "POST",
                headers: { ...Ci(n), ...this.headers },
                clientVersion: this.clientVersion,
              }),
              g = await Hr(p, this.clientVersion);
            await this.handleError(g);
            return;
          }
        },
      });
    }
    extractHostAndApiKey() {
      let r = this.mergeOverriddenDatasources(),
        n = Object.keys(r)[0],
        o = r[n],
        i = this.resolveDatasourceURL(n, o),
        s;
      try {
        s = new URL(i);
      } catch (g) {
        throw new et("Could not parse URL of the datasource", {
          clientVersion: this.clientVersion,
        });
      }
      let { protocol: a, host: c, searchParams: l } = s;
      if (a !== "prisma:") {
        throw new et(
          "Datasource URL must use prisma:// protocol when --data-proxy is used",
          { clientVersion: this.clientVersion },
        );
      }
      let p = l.get("api_key");
      if (p === null || p.length < 1) {
        throw new et("No valid API key found in the datasource URL", {
          clientVersion: this.clientVersion,
        });
      }
      return [c, p];
    }
    mergeOverriddenDatasources() {
      if (this.config.datasources === void 0) return this.inlineDatasources;
      let r = { ...this.inlineDatasources };
      for (let n of this.config.datasources) {
        if (!this.inlineDatasources[n.name]) {
          throw new Error(
            `Unknown datasource: ${n.name}`,
          );
        }
        r[n.name] = { url: { fromEnvVar: null, value: n.url } };
      }
      return r;
    }
    resolveDatasourceURL(r, n) {
      if (n.url.value) return n.url.value;
      if (n.url.fromEnvVar) {
        let o = n.url.fromEnvVar, i = this.env[o];
        if (i === void 0) {
          throw new et(
            `Datasource "${r}" references an environment variable "${o}" that is not set`,
            { clientVersion: this.clientVersion },
          );
        }
        return i;
      }
      throw new et(
        `Datasource "${r}" specification is invalid: both value and fromEnvVar are null`,
        { clientVersion: this.clientVersion },
      );
    }
    metrics(r) {
      throw new tt("Metric are not yet supported for Data Proxy", {
        clientVersion: this.clientVersion,
      });
    }
    async withRetry(r) {
      var n;
      for (let o = 0;; o++) {
        let i = u((s) => {
          this.logEmitter.emit("info", { message: `Calling ${s} (n=${o})` });
        }, "logHttpCall");
        try {
          return await r.callback({ logHttpCall: i });
        } catch (s) {
          if (!(s instanceof be) || !s.isRetryable) throw s;
          if (o >= Uu) throw s instanceof or ? s.cause : s;
          this.logEmitter.emit("warn", {
            message: `Attempt ${o + 1}/${Uu} failed for ${r.actionGerund}: ${
              (n = s.message) != null ? n : "(unknown)"
            }`,
          });
          let a = await ju(o);
          this.logEmitter.emit("warn", { message: `Retrying after ${a}ms` });
        }
      }
    }
    async handleError(r) {
      if (r instanceof kt) {
        throw await this.uploadSchema(),
          new or({ clientVersion: this.clientVersion, cause: r });
      }
      if (r) throw r;
    }
  };
u(ar, "DataProxyEngine");
function Ci(e) {
  if (e.transactionId) {
    let t = { ...e };
    return delete t.transactionId, t;
  }
  return e;
}
u(Ci, "runtimeHeadersToHttpHeaders");
d();
f();
m();
var rt;
((t) => {
  let e;
  ((
    M,
  ) => (M.findUnique = "findUnique",
    M.findUniqueOrThrow = "findUniqueOrThrow",
    M.findFirst = "findFirst",
    M.findFirstOrThrow = "findFirstOrThrow",
    M.findMany = "findMany",
    M.create = "create",
    M.createMany = "createMany",
    M.update = "update",
    M.updateMany = "updateMany",
    M.upsert = "upsert",
    M.delete = "delete",
    M.deleteMany = "deleteMany",
    M.groupBy = "groupBy",
    M.count = "count",
    M.aggregate = "aggregate",
    M.findRaw = "findRaw",
    M.aggregateRaw = "aggregateRaw"))(
      e = t.ModelAction || (t.ModelAction = {}),
    );
})(rt || (rt = {}));
var ur = {};
Do(ur, {
  error: () => _m,
  info: () => Rm,
  log: () => Im,
  query: () => Fm,
  should: () => Vu,
  tags: () => Yr,
  warn: () => Ii,
});
d();
f();
m();
var Qr = ee(It());
var Yr = {
    error: Qr.default.red("prisma:error"),
    warn: Qr.default.yellow("prisma:warn"),
    info: Qr.default.cyan("prisma:info"),
    query: Qr.default.blue("prisma:query"),
  },
  Vu = { warn: () => !w.env.PRISMA_DISABLE_WARNINGS };
function Im(...e) {
  console.log(...e);
}
u(Im, "log");
function Ii(e, ...t) {
  Vu.warn() && console.warn(`${Yr.warn} ${e}`, ...t);
}
u(Ii, "warn");
function Rm(e, ...t) {
  console.info(`${Yr.info} ${e}`, ...t);
}
u(Rm, "info");
function _m(e, ...t) {
  console.error(`${Yr.error} ${e}`, ...t);
}
u(_m, "error");
function Fm(e, ...t) {
  console.log(`${Yr.query} ${e}`, ...t);
}
u(Fm, "query");
d();
f();
m();
function Ri(e) {
  let t;
  return (...r) => t != null ? t : t = e(...r);
}
u(Ri, "callOnce");
d();
f();
m();
function _i(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
u(_i, "hasOwnProperty");
d();
f();
m();
function Fi(e) {
  return e != null && typeof e.then == "function";
}
u(Fi, "isPromiseLike");
d();
f();
m();
var Di = u((e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {}), "keyBy");
d();
f();
m();
function cr(e, t) {
  return Object.fromEntries(Object.entries(e).map(([r, n]) => [r, t(n, r)]));
}
u(cr, "mapObjectValues");
d();
f();
m();
var Gu = new Set(),
  ki = u((e, t, ...r) => {
    Gu.has(e) || (Gu.add(e), Ii(t, ...r));
  }, "warnOnce");
var ht = class extends Error {
  constructor(r, n) {
    super(`${km(r)}: ${Nm(n)}`, { cause: n });
    this.extensionName = r;
    this.name = "PrismaClientExtensionError",
      this.cause || (this.cause = n),
      typeof Error.captureStackTrace == "function" &&
      Error.captureStackTrace(this, ht);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientExtensionError";
  }
};
u(ht, "PrismaClientExtensionError");
function km(e) {
  return e
    ? `Error caused by extension "${e}"`
    : "Error caused by an extension";
}
u(km, "getTitleFromExtensionName");
function Nm(e) {
  return e instanceof Error ? e.message : `${e}`;
}
u(Nm, "getMessageFromCause");
function Zr(e, t) {
  return function (...r) {
    try {
      let n = t.apply(this, r);
      return Fi(n) ? n.then(void 0, (o) => Promise.reject(new ht(e, o))) : n;
    } catch (n) {
      throw new ht(e, n);
    }
  };
}
u(Zr, "wrapExtensionCallback");
function io(e, t) {
  return t && cr(t, (r) => typeof r == "function" ? Zr(e, r) : r);
}
u(io, "wrapAllExtensionCallbacks");
d();
f();
m();
var lr = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
u(lr, "MetricsClient");
d();
f();
m();
d();
f();
m();
function Ni(e, t) {
  var r;
  for (let n of t) {
    for (let o of Object.getOwnPropertyNames(n.prototype)) {
      Object.defineProperty(
        e.prototype,
        o,
        (r = Object.getOwnPropertyDescriptor(n.prototype, o)) != null
          ? r
          : Object.create(null),
      );
    }
  }
}
u(Ni, "applyMixins");
d();
f();
m();
var vt = ee(It());
d();
f();
m();
var pr = 9e15,
  Et = 1e9,
  ji = "0123456789abcdef",
  ao =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  uo =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  $i = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -pr,
    maxE: pr,
    crypto: !1,
  },
  Wu,
  nt,
  B = !0,
  lo = "[DecimalError] ",
  xt = lo + "Invalid argument: ",
  Qu = lo + "Precision limit exceeded",
  Yu = lo + "crypto unavailable",
  Zu = "[object Decimal]",
  ce = Math.floor,
  ne = Math.pow,
  jm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  $m = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Lm = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  Xu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  je = 1e7,
  $ = 7,
  Bm = 9007199254740991,
  qm = ao.length - 1,
  Li = uo.length - 1,
  I = { toStringTag: Zu };
I.absoluteValue = I.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), N(e);
};
I.ceil = function () {
  return N(new this.constructor(this), this.e + 1, 2);
};
I.clampedTo = I.clamp = function (e, t) {
  var r, n = this, o = n.constructor;
  if (e = new o(e), t = new o(t), !e.s || !t.s) return new o(NaN);
  if (e.gt(t)) throw Error(xt + t);
  return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new o(n);
};
I.comparedTo = I.cmp = function (e) {
  var t,
    r,
    n,
    o,
    i = this,
    s = i.d,
    a = (e = new i.constructor(e)).d,
    c = i.s,
    l = e.s;
  if (!s || !a) {
    return !c || !l ? NaN : c !== l ? c : s === a ? 0 : !s ^ c < 0 ? 1 : -1;
  }
  if (!s[0] || !a[0]) return s[0] ? c : a[0] ? -l : 0;
  if (c !== l) return c;
  if (i.e !== e.e) return i.e > e.e ^ c < 0 ? 1 : -1;
  for (n = s.length, o = a.length, t = 0, r = n < o ? n : o; t < r; ++t) {
    if (s[t] !== a[t]) return s[t] > a[t] ^ c < 0 ? 1 : -1;
  }
  return n === o ? 0 : n > o ^ c < 0 ? 1 : -1;
};
I.cosine = I.cos = function () {
  var e, t, r = this, n = r.constructor;
  return r.d
    ? r.d[0]
      ? (e = n.precision,
        t = n.rounding,
        n.precision = e + Math.max(r.e, r.sd()) + $,
        n.rounding = 1,
        r = Um(n, oc(n, r)),
        n.precision = e,
        n.rounding = t,
        N(nt == 2 || nt == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
I.cubeRoot = I.cbrt = function () {
  var e, t, r, n, o, i, s, a, c, l, p = this, g = p.constructor;
  if (!p.isFinite() || p.isZero()) return new g(p);
  for (
    B = !1,
      i = p.s * ne(p.s * p, 1 / 3),
      !i || Math.abs(i) == 1 / 0
        ? (r = ue(p.d),
          e = p.e,
          (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"),
          i = ne(r, 1 / 3),
          e = ce((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)),
          i == 1 / 0
            ? r = "5e" + e
            : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e),
          n = new g(r),
          n.s = p.s)
        : n = new g(i.toString()),
      s = (e = g.precision) + 3;;
  ) {
    if (
      a = n,
        c = a.times(a).times(a),
        l = c.plus(p),
        n = Z(l.plus(p).times(a), l.plus(c), s + 2, 1),
        ue(a.d).slice(0, s) === (r = ue(n.d)).slice(0, s)
    ) {
      if (r = r.slice(s - 3, s + 1), r == "9999" || !o && r == "4999") {
        if (!o && (N(a, e + 1, 0), a.times(a).times(a).eq(p))) {
          n = a;
          break;
        }
        s += 4, o = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") &&
          (N(n, e + 1, 1), t = !n.times(n).times(n).eq(p));
        break;
      }
    }
  }
  return B = !0, N(n, e, g.rounding, t);
};
I.decimalPlaces = I.dp = function () {
  var e, t = this.d, r = NaN;
  if (t) {
    if (e = t.length - 1, r = (e - ce(this.e / $)) * $, e = t[e], e) {
      for (; e % 10 == 0; e /= 10) {
        r--;
      }
    }
    r < 0 && (r = 0);
  }
  return r;
};
I.dividedBy = I.div = function (e) {
  return Z(this, new this.constructor(e));
};
I.dividedToIntegerBy = I.divToInt = function (e) {
  var t = this, r = t.constructor;
  return N(Z(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
I.equals = I.eq = function (e) {
  return this.cmp(e) === 0;
};
I.floor = function () {
  return N(new this.constructor(this), this.e + 1, 3);
};
I.greaterThan = I.gt = function (e) {
  return this.cmp(e) > 0;
};
I.greaterThanOrEqualTo = I.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
I.hyperbolicCosine = I.cosh = function () {
  var e, t, r, n, o, i = this, s = i.constructor, a = new s(1);
  if (!i.isFinite()) return new s(i.s ? 1 / 0 : NaN);
  if (i.isZero()) return a;
  r = s.precision,
    n = s.rounding,
    s.precision = r + Math.max(i.e, i.sd()) + 4,
    s.rounding = 1,
    o = i.d.length,
    o < 32
      ? (e = Math.ceil(o / 3), t = (1 / fo(4, e)).toString())
      : (e = 16, t = "2.3283064365386962890625e-10"),
    i = fr(s, 1, i.times(t), new s(1), !0);
  for (var c, l = e, p = new s(8); l--;) {
    c = i.times(i), i = a.minus(c.times(p.minus(c.times(p))));
  }
  return N(i, s.precision = r, s.rounding = n, !0);
};
I.hyperbolicSine = I.sinh = function () {
  var e, t, r, n, o = this, i = o.constructor;
  if (!o.isFinite() || o.isZero()) return new i(o);
  if (
    t = i.precision,
      r = i.rounding,
      i.precision = t + Math.max(o.e, o.sd()) + 4,
      i.rounding = 1,
      n = o.d.length,
      n < 3
  ) o = fr(i, 2, o, o, !0);
  else {
    e = 1.4 * Math.sqrt(n),
      e = e > 16 ? 16 : e | 0,
      o = o.times(1 / fo(5, e)),
      o = fr(i, 2, o, o, !0);
    for (var s, a = new i(5), c = new i(16), l = new i(20); e--;) {
      s = o.times(o), o = o.times(a.plus(s.times(c.times(s).plus(l))));
    }
  }
  return i.precision = t, i.rounding = r, N(o, t, r, !0);
};
I.hyperbolicTangent = I.tanh = function () {
  var e, t, r = this, n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : (e = n.precision,
        t = n.rounding,
        n.precision = e + 7,
        n.rounding = 1,
        Z(r.sinh(), r.cosh(), n.precision = e, n.rounding = t))
    : new n(r.s);
};
I.inverseCosine = I.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    o = r.precision,
    i = r.rounding;
  return n !== -1
    ? n === 0 ? t.isNeg() ? Ne(r, o, i) : new r(0) : new r(NaN)
    : t.isZero()
    ? Ne(r, o + 4, i).times(.5)
    : (r.precision = o + 6,
      r.rounding = 1,
      t = t.asin(),
      e = Ne(r, o + 4, i).times(.5),
      r.precision = o,
      r.rounding = i,
      e.minus(t));
};
I.inverseHyperbolicCosine = I.acosh = function () {
  var e, t, r = this, n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
    ? (e = n.precision,
      t = n.rounding,
      n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4,
      n.rounding = 1,
      B = !1,
      r = r.times(r).minus(1).sqrt().plus(r),
      B = !0,
      n.precision = e,
      n.rounding = t,
      r.ln())
    : new n(r);
};
I.inverseHyperbolicSine = I.asinh = function () {
  var e, t, r = this, n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : (e = n.precision,
      t = n.rounding,
      n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6,
      n.rounding = 1,
      B = !1,
      r = r.times(r).plus(1).sqrt().plus(r),
      B = !0,
      n.precision = e,
      n.rounding = t,
      r.ln());
};
I.inverseHyperbolicTangent = I.atanh = function () {
  var e, t, r, n, o = this, i = o.constructor;
  return o.isFinite()
    ? o.e >= 0
      ? new i(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN)
      : (e = i.precision,
        t = i.rounding,
        n = o.sd(),
        Math.max(n, e) < 2 * -o.e - 1
          ? N(new i(o), e, t, !0)
          : (i.precision = r = n - o.e,
            o = Z(o.plus(1), new i(1).minus(o), r + e, 1),
            i.precision = e + 4,
            i.rounding = 1,
            o = o.ln(),
            i.precision = e,
            i.rounding = t,
            o.times(.5)))
    : new i(NaN);
};
I.inverseSine = I.asin = function () {
  var e, t, r, n, o = this, i = o.constructor;
  return o.isZero()
    ? new i(o)
    : (t = o.abs().cmp(1),
      r = i.precision,
      n = i.rounding,
      t !== -1
        ? t === 0 ? (e = Ne(i, r + 4, n).times(.5), e.s = o.s, e) : new i(NaN)
        : (i.precision = r + 6,
          i.rounding = 1,
          o = o.div(new i(1).minus(o.times(o)).sqrt().plus(1)).atan(),
          i.precision = r,
          i.rounding = n,
          o.times(2)));
};
I.inverseTangent = I.atan = function () {
  var e,
    t,
    r,
    n,
    o,
    i,
    s,
    a,
    c,
    l = this,
    p = l.constructor,
    g = p.precision,
    y = p.rounding;
  if (l.isFinite()) {
    if (l.isZero()) return new p(l);
    if (l.abs().eq(1) && g + 4 <= Li) {
      return s = Ne(p, g + 4, y).times(.25), s.s = l.s, s;
    }
  } else {
    if (!l.s) return new p(NaN);
    if (g + 4 <= Li) return s = Ne(p, g + 4, y).times(.5), s.s = l.s, s;
  }
  for (
    p.precision = a = g + 10,
      p.rounding = 1,
      r = Math.min(28, a / $ + 2 | 0),
      e = r;
    e;
    --e
  ) l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for (
    B = !1, t = Math.ceil(a / $), n = 1, c = l.times(l), s = new p(l), o = l;
    e !== -1;
  ) {
    if (
      o = o.times(c),
        i = s.minus(o.div(n += 2)),
        o = o.times(c),
        s = i.plus(o.div(n += 2)),
        s.d[t] !== void 0
    ) for (e = t; s.d[e] === i.d[e] && e--;);
  }
  return r && (s = s.times(2 << r - 1)),
    B = !0,
    N(s, p.precision = g, p.rounding = y, !0);
};
I.isFinite = function () {
  return !!this.d;
};
I.isInteger = I.isInt = function () {
  return !!this.d && ce(this.e / $) > this.d.length - 2;
};
I.isNaN = function () {
  return !this.s;
};
I.isNegative = I.isNeg = function () {
  return this.s < 0;
};
I.isPositive = I.isPos = function () {
  return this.s > 0;
};
I.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
I.lessThan = I.lt = function (e) {
  return this.cmp(e) < 0;
};
I.lessThanOrEqualTo = I.lte = function (e) {
  return this.cmp(e) < 1;
};
I.logarithm = I.log = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    c,
    l = this,
    p = l.constructor,
    g = p.precision,
    y = p.rounding,
    b = 5;
  if (e == null) e = new p(10), t = !0;
  else {
    if (e = new p(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) {
      return new p(NaN);
    }
    t = e.eq(10);
  }
  if (r = l.d, l.s < 0 || !r || !r[0] || l.eq(1)) {
    return new p(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
  }
  if (t) {
    if (r.length > 1) i = !0;
    else {
      for (o = r[0]; o % 10 === 0;) o /= 10;
      i = o !== 1;
    }
  }
  if (
    B = !1,
      a = g + b,
      s = wt(l, a),
      n = t ? co(p, a + 10) : wt(e, a),
      c = Z(s, n, a, 1),
      Xr(c.d, o = g, y)
  ) {
    do if (
      a += 10,
        s = wt(l, a),
        n = t ? co(p, a + 10) : wt(e, a),
        c = Z(s, n, a, 1),
        !i
    ) {
      +ue(c.d).slice(o + 1, o + 15) + 1 == 1e14 && (c = N(c, g + 1, 0));
      break;
    } while (Xr(c.d, o += 10, y));
  }
  return B = !0, N(c, g, y);
};
I.minus = I.sub = function (e) {
  var t, r, n, o, i, s, a, c, l, p, g, y, b = this, v = b.constructor;
  if (e = new v(e), !b.d || !e.d) {
    return !b.s || !e.s
      ? e = new v(NaN)
      : b.d
      ? e.s = -e.s
      : e = new v(e.d || b.s !== e.s ? b : NaN),
      e;
  }
  if (b.s != e.s) return e.s = -e.s, b.plus(e);
  if (l = b.d, y = e.d, a = v.precision, c = v.rounding, !l[0] || !y[0]) {
    if (y[0]) e.s = -e.s;
    else if (l[0]) e = new v(b);
    else return new v(c === 3 ? -0 : 0);
    return B ? N(e, a, c) : e;
  }
  if (r = ce(e.e / $), p = ce(b.e / $), l = l.slice(), i = p - r, i) {
    for (
      g = i < 0,
        g ? (t = l, i = -i, s = y.length) : (t = y, r = p, s = l.length),
        n = Math.max(Math.ceil(a / $), s) + 2,
        i > n && (i = n, t.length = 1),
        t.reverse(),
        n = i;
      n--;
    ) t.push(0);
    t.reverse();
  } else {
    for (
      n = l.length, s = y.length, g = n < s, g && (s = n), n = 0;
      n < s;
      n++
    ) {
      if (l[n] != y[n]) {
        g = l[n] < y[n];
        break;
      }
    }
    i = 0;
  }
  for (
    g && (t = l, l = y, y = t, e.s = -e.s), s = l.length, n = y.length - s;
    n > 0;
    --n
  ) l[s++] = 0;
  for (n = y.length; n > i;) {
    if (l[--n] < y[n]) {
      for (o = n; o && l[--o] === 0;) l[o] = je - 1;
      --l[o], l[n] += je;
    }
    l[n] -= y[n];
  }
  for (; l[--s] === 0;) l.pop();
  for (; l[0] === 0; l.shift()) --r;
  return l[0]
    ? (e.d = l, e.e = po(l, r), B ? N(e, a, c) : e)
    : new v(c === 3 ? -0 : 0);
};
I.modulo = I.mod = function (e) {
  var t, r = this, n = r.constructor;
  return e = new n(e),
    !r.d || !e.s || e.d && !e.d[0]
      ? new n(NaN)
      : !e.d || r.d && !r.d[0]
      ? N(new n(r), n.precision, n.rounding)
      : (B = !1,
        n.modulo == 9
          ? (t = Z(r, e.abs(), 0, 3, 1), t.s *= e.s)
          : t = Z(r, e, 0, n.modulo, 1),
        t = t.times(e),
        B = !0,
        r.minus(t));
};
I.naturalExponential = I.exp = function () {
  return Bi(this);
};
I.naturalLogarithm = I.ln = function () {
  return wt(this);
};
I.negated = I.neg = function () {
  var e = new this.constructor(this);
  return e.s = -e.s, N(e);
};
I.plus = I.add = function (e) {
  var t, r, n, o, i, s, a, c, l, p, g = this, y = g.constructor;
  if (e = new y(e), !g.d || !e.d) {
    return !g.s || !e.s
      ? e = new y(NaN)
      : g.d || (e = new y(e.d || g.s === e.s ? g : NaN)),
      e;
  }
  if (g.s != e.s) return e.s = -e.s, g.minus(e);
  if (l = g.d, p = e.d, a = y.precision, c = y.rounding, !l[0] || !p[0]) {
    return p[0] || (e = new y(g)), B ? N(e, a, c) : e;
  }
  if (i = ce(g.e / $), n = ce(e.e / $), l = l.slice(), o = i - n, o) {
    for (
      o < 0 ? (r = l, o = -o, s = p.length) : (r = p, n = i, s = l.length),
        i = Math.ceil(a / $),
        s = i > s ? i + 1 : s + 1,
        o > s && (o = s, r.length = 1),
        r.reverse();
      o--;
    ) r.push(0);
    r.reverse();
  }
  for (
    s = l.length,
      o = p.length,
      s - o < 0 && (o = s, r = p, p = l, l = r),
      t = 0;
    o;
  ) t = (l[--o] = l[o] + p[o] + t) / je | 0, l[o] %= je;
  for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0;) l.pop();
  return e.d = l, e.e = po(l, n), B ? N(e, a, c) : e;
};
I.precision = I.sd = function (e) {
  var t, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(xt + e);
  return r.d ? (t = ec(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
I.round = function () {
  var e = this, t = e.constructor;
  return N(new t(e), e.e + 1, t.rounding);
};
I.sine = I.sin = function () {
  var e, t, r = this, n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : (e = n.precision,
        t = n.rounding,
        n.precision = e + Math.max(r.e, r.sd()) + $,
        n.rounding = 1,
        r = Gm(n, oc(n, r)),
        n.precision = e,
        n.rounding = t,
        N(nt > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
I.squareRoot = I.sqrt = function () {
  var e, t, r, n, o, i, s = this, a = s.d, c = s.e, l = s.s, p = s.constructor;
  if (l !== 1 || !a || !a[0]) {
    return new p(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
  }
  for (
    B = !1,
      l = Math.sqrt(+s),
      l == 0 || l == 1 / 0
        ? (t = ue(a),
          (t.length + c) % 2 == 0 && (t += "0"),
          l = Math.sqrt(t),
          c = ce((c + 1) / 2) - (c < 0 || c % 2),
          l == 1 / 0
            ? t = "5e" + c
            : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c),
          n = new p(t))
        : n = new p(l.toString()),
      r = (c = p.precision) + 3;;
  ) {
    if (
      i = n,
        n = i.plus(Z(s, i, r + 2, 1)).times(.5),
        ue(i.d).slice(0, r) === (t = ue(n.d)).slice(0, r)
    ) {
      if (t = t.slice(r - 3, r + 1), t == "9999" || !o && t == "4999") {
        if (!o && (N(i, c + 1, 0), i.times(i).eq(s))) {
          n = i;
          break;
        }
        r += 4, o = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") &&
          (N(n, c + 1, 1), e = !n.times(n).eq(s));
        break;
      }
    }
  }
  return B = !0, N(n, c, p.rounding, e);
};
I.tangent = I.tan = function () {
  var e, t, r = this, n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : (e = n.precision,
        t = n.rounding,
        n.precision = e + 10,
        n.rounding = 1,
        r = r.sin(),
        r.s = 1,
        r = Z(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0),
        n.precision = e,
        n.rounding = t,
        N(nt == 2 || nt == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
I.times = I.mul = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    c,
    l,
    p = this,
    g = p.constructor,
    y = p.d,
    b = (e = new g(e)).d;
  if (e.s *= p.s, !y || !y[0] || !b || !b[0]) {
    return new g(
      !e.s || y && !y[0] && !b || b && !b[0] && !y
        ? NaN
        : !y || !b
        ? e.s / 0
        : e.s * 0,
    );
  }
  for (
    r = ce(p.e / $) + ce(e.e / $),
      c = y.length,
      l = b.length,
      c < l && (i = y, y = b, b = i, s = c, c = l, l = s),
      i = [],
      s = c + l,
      n = s;
    n--;
  ) i.push(0);
  for (n = l; --n >= 0;) {
    for (t = 0, o = c + n; o > n;) {
      a = i[o] + b[n] * y[o - n - 1] + t, i[o--] = a % je | 0, t = a / je | 0;
    }
    i[o] = (i[o] + t) % je | 0;
  }
  for (; !i[--s];) i.pop();
  return t ? ++r : i.shift(),
    e.d = i,
    e.e = po(i, r),
    B ? N(e, g.precision, g.rounding) : e;
};
I.toBinary = function (e, t) {
  return Ui(this, 2, e, t);
};
I.toDecimalPlaces = I.toDP = function (e, t) {
  var r = this, n = r.constructor;
  return r = new n(r),
    e === void 0
      ? r
      : (Ae(e, 0, Et),
        t === void 0 ? t = n.rounding : Ae(t, 0, 8),
        N(r, e + r.e + 1, t));
};
I.toExponential = function (e, t) {
  var r, n = this, o = n.constructor;
  return e === void 0
    ? r = ze(n, !0)
    : (Ae(e, 0, Et),
      t === void 0 ? t = o.rounding : Ae(t, 0, 8),
      n = N(new o(n), e + 1, t),
      r = ze(n, !0, e + 1)),
    n.isNeg() && !n.isZero() ? "-" + r : r;
};
I.toFixed = function (e, t) {
  var r, n, o = this, i = o.constructor;
  return e === void 0
    ? r = ze(o)
    : (Ae(e, 0, Et),
      t === void 0 ? t = i.rounding : Ae(t, 0, 8),
      n = N(new i(o), e + o.e + 1, t),
      r = ze(n, !1, e + n.e + 1)),
    o.isNeg() && !o.isZero() ? "-" + r : r;
};
I.toFraction = function (e) {
  var t, r, n, o, i, s, a, c, l, p, g, y, b = this, v = b.d, h = b.constructor;
  if (!v) return new h(b);
  if (
    l = r = new h(1),
      n = c = new h(0),
      t = new h(n),
      i = t.e = ec(v) - b.e - 1,
      s = i % $,
      t.d[0] = ne(10, s < 0 ? $ + s : s),
      e == null
  ) e = i > 0 ? t : l;
  else {
    if (a = new h(e), !a.isInt() || a.lt(l)) throw Error(xt + a);
    e = a.gt(t) ? i > 0 ? t : l : a;
  }
  for (
    B = !1,
      a = new h(ue(v)),
      p = h.precision,
      h.precision = i = v.length * $ * 2;
    g = Z(a, t, 0, 1, 1), o = r.plus(g.times(n)), o.cmp(e) != 1;
  ) {
    r = n,
      n = o,
      o = l,
      l = c.plus(g.times(o)),
      c = o,
      o = t,
      t = a.minus(g.times(o)),
      a = o;
  }
  return o = Z(e.minus(r), n, 0, 1, 1),
    c = c.plus(o.times(l)),
    r = r.plus(o.times(n)),
    c.s = l.s = b.s,
    y = Z(l, n, i, 1).minus(b).abs().cmp(Z(c, r, i, 1).minus(b).abs()) < 1
      ? [l, n]
      : [c, r],
    h.precision = p,
    B = !0,
    y;
};
I.toHexadecimal = I.toHex = function (e, t) {
  return Ui(this, 16, e, t);
};
I.toNearest = function (e, t) {
  var r = this, n = r.constructor;
  if (r = new n(r), e == null) {
    if (!r.d) return r;
    e = new n(1), t = n.rounding;
  } else {
    if (e = new n(e), t === void 0 ? t = n.rounding : Ae(t, 0, 8), !r.d) {
      return e.s ? r : e;
    }
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return e.d[0]
    ? (B = !1, r = Z(r, e, 0, t, 1).times(e), B = !0, N(r))
    : (e.s = r.s, r = e),
    r;
};
I.toNumber = function () {
  return +this;
};
I.toOctal = function (e, t) {
  return Ui(this, 8, e, t);
};
I.toPower = I.pow = function (e) {
  var t, r, n, o, i, s, a = this, c = a.constructor, l = +(e = new c(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new c(ne(+a, l));
  if (a = new c(a), a.eq(1)) return a;
  if (n = c.precision, i = c.rounding, e.eq(1)) return N(a, n, i);
  if (t = ce(e.e / $), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= Bm) {
    return o = tc(c, a, r, n), e.s < 0 ? new c(1).div(o) : N(o, n, i);
  }
  if (s = a.s, s < 0) {
    if (t < e.d.length - 1) return new c(NaN);
    if (
      (e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1
    ) return a.s = s, a;
  }
  return r = ne(+a, l),
    t = r == 0 || !isFinite(r)
      ? ce(l * (Math.log("0." + ue(a.d)) / Math.LN10 + a.e + 1))
      : new c(r + "").e,
    t > c.maxE + 1 || t < c.minE - 1
      ? new c(t > 0 ? s / 0 : 0)
      : (B = !1,
        c.rounding = a.s = 1,
        r = Math.min(12, (t + "").length),
        o = Bi(e.times(wt(a, n + r)), n),
        o.d &&
        (o = N(o, n + 5, 1),
          Xr(o.d, n, i) &&
          (t = n + 10,
            o = N(Bi(e.times(wt(a, t + r)), t), t + 5, 1),
            +ue(o.d).slice(n + 1, n + 15) + 1 == 1e14 && (o = N(o, n + 1, 0)))),
        o.s = s,
        B = !0,
        c.rounding = i,
        N(o, n, i));
};
I.toPrecision = function (e, t) {
  var r, n = this, o = n.constructor;
  return e === void 0
    ? r = ze(n, n.e <= o.toExpNeg || n.e >= o.toExpPos)
    : (Ae(e, 1, Et),
      t === void 0 ? t = o.rounding : Ae(t, 0, 8),
      n = N(new o(n), e, t),
      r = ze(n, e <= n.e || n.e <= o.toExpNeg, e)),
    n.isNeg() && !n.isZero() ? "-" + r : r;
};
I.toSignificantDigits = I.toSD = function (e, t) {
  var r = this, n = r.constructor;
  return e === void 0
    ? (e = n.precision, t = n.rounding)
    : (Ae(e, 1, Et), t === void 0 ? t = n.rounding : Ae(t, 0, 8)),
    N(new n(r), e, t);
};
I.toString = function () {
  var e = this,
    t = e.constructor,
    r = ze(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
I.truncated = I.trunc = function () {
  return N(new this.constructor(this), this.e + 1, 1);
};
I.valueOf = I.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = ze(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function ue(e) {
  var t, r, n, o = e.length - 1, i = "", s = e[0];
  if (o > 0) {
    for (i += s, t = 1; t < o; t++) {
      n = e[t] + "", r = $ - n.length, r && (i += bt(r)), i += n;
    }
    s = e[t], n = s + "", r = $ - n.length, r && (i += bt(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0;) s /= 10;
  return i + s;
}
u(ue, "digitsToString");
function Ae(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(xt + e);
}
u(Ae, "checkInt32");
function Xr(e, t, r, n) {
  var o, i, s, a;
  for (i = e[0]; i >= 10; i /= 10) --t;
  return --t < 0 ? (t += $, o = 0) : (o = Math.ceil((t + 1) / $), t %= $),
    i = ne(10, $ - t),
    a = e[o] % i | 0,
    n == null
      ? t < 3
        ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0),
          s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0)
        : s = (r < 4 && a + 1 == i || r > 3 && a + 1 == i / 2) &&
            (e[o + 1] / i / 100 | 0) == ne(10, t - 2) - 1 ||
          (a == i / 2 || a == 0) && (e[o + 1] / i / 100 | 0) == 0
      : t < 4
      ? (t == 0
        ? a = a / 1e3 | 0
        : t == 1
        ? a = a / 100 | 0
        : t == 2 && (a = a / 10 | 0),
        s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999)
      : s = ((n || r < 4) && a + 1 == i || !n && r > 3 && a + 1 == i / 2) &&
        (e[o + 1] / i / 1e3 | 0) == ne(10, t - 3) - 1,
    s;
}
u(Xr, "checkRoundingDigits");
function so(e, t, r) {
  for (var n, o = [0], i, s = 0, a = e.length; s < a;) {
    for (i = o.length; i--;) o[i] *= t;
    for (o[0] += ji.indexOf(e.charAt(s++)), n = 0; n < o.length; n++) {
      o[n] > r - 1 &&
        (o[n + 1] === void 0 && (o[n + 1] = 0),
          o[n + 1] += o[n] / r | 0,
          o[n] %= r);
    }
  }
  return o.reverse();
}
u(so, "convertBase");
function Um(e, t) {
  var r, n, o;
  if (t.isZero()) return t;
  n = t.d.length,
    n < 32
      ? (r = Math.ceil(n / 3), o = (1 / fo(4, r)).toString())
      : (r = 16, o = "2.3283064365386962890625e-10"),
    e.precision += r,
    t = fr(e, 1, t.times(o), new e(1));
  for (var i = r; i--;) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return e.precision -= r, t;
}
u(Um, "cosine");
var Z = function () {
  function e(n, o, i) {
    var s, a = 0, c = n.length;
    for (n = n.slice(); c--;) s = n[c] * o + a, n[c] = s % i | 0, a = s / i | 0;
    return a && n.unshift(a), n;
  }
  u(e, "multiplyInteger");
  function t(n, o, i, s) {
    var a, c;
    if (i != s) c = i > s ? 1 : -1;
    else {for (a = c = 0; a < i; a++) {
        if (n[a] != o[a]) {
          c = n[a] > o[a] ? 1 : -1;
          break;
        }
      }}
    return c;
  }
  u(t, "compare");
  function r(n, o, i, s) {
    for (var a = 0; i--;) {
      n[i] -= a, a = n[i] < o[i] ? 1 : 0, n[i] = a * s + n[i] - o[i];
    }
    for (; !n[0] && n.length > 1;) n.shift();
  }
  return u(r, "subtract"), function (n, o, i, s, a, c) {
    var l,
      p,
      g,
      y,
      b,
      v,
      h,
      A,
      O,
      T,
      M,
      P,
      S,
      _,
      F,
      j,
      V,
      te,
      G,
      K,
      X = n.constructor,
      z = n.s == o.s ? 1 : -1,
      H = n.d,
      L = o.d;
    if (!H || !H[0] || !L || !L[0]) {
      return new X(
        !n.s || !o.s || (H ? L && H[0] == L[0] : !L)
          ? NaN
          : H && H[0] == 0 || !L
          ? z * 0
          : z / 0,
      );
    }
    for (
      c
        ? (b = 1, p = n.e - o.e)
        : (c = je, b = $, p = ce(n.e / b) - ce(o.e / b)),
        G = L.length,
        V = H.length,
        O = new X(z),
        T = O.d = [],
        g = 0;
      L[g] == (H[g] || 0);
      g++
    );
    if (
      L[g] > (H[g] || 0) && p--,
        i == null
          ? (_ = i = X.precision, s = X.rounding)
          : a
          ? _ = i + (n.e - o.e) + 1
          : _ = i,
        _ < 0
    ) T.push(1), v = !0;
    else {
      if (_ = _ / b + 2 | 0, g = 0, G == 1) {
        for (y = 0, L = L[0], _++; (g < V || y) && _--; g++) {
          F = y * c + (H[g] || 0), T[g] = F / L | 0, y = F % L | 0;
        }
        v = y || g < V;
      } else {
        for (
          y = c / (L[0] + 1) | 0,
            y > 1 &&
            (L = e(L, y, c), H = e(H, y, c), G = L.length, V = H.length),
            j = G,
            M = H.slice(0, G),
            P = M.length;
          P < G;
        ) M[P++] = 0;
        K = L.slice(), K.unshift(0), te = L[0], L[1] >= c / 2 && ++te;
        do y = 0,
          l = t(L, M, G, P),
          l < 0
            ? (S = M[0],
              G != P && (S = S * c + (M[1] || 0)),
              y = S / te | 0,
              y > 1
                ? (y >= c && (y = c - 1),
                  h = e(L, y, c),
                  A = h.length,
                  P = M.length,
                  l = t(h, M, A, P),
                  l == 1 && (y--, r(h, G < A ? K : L, A, c)))
                : (y == 0 && (l = y = 1), h = L.slice()),
              A = h.length,
              A < P && h.unshift(0),
              r(M, h, P, c),
              l == -1 &&
              (P = M.length,
                l = t(L, M, G, P),
                l < 1 && (y++, r(M, G < P ? K : L, P, c))),
              P = M.length)
            : l === 0 && (y++, M = [0]),
          T[g++] = y,
          l && M[0] ? M[P++] = H[j] || 0 : (M = [H[j]], P = 1); while (
          (j++ < V || M[0] !== void 0) && _--
        );
        v = M[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (b == 1) O.e = p, Wu = v;
    else {
      for (g = 1, y = T[0]; y >= 10; y /= 10) g++;
      O.e = g + p * b - 1, N(O, a ? i + O.e + 1 : i, s, v);
    }
    return O;
  };
}();
function N(e, t, r, n) {
  var o, i, s, a, c, l, p, g, y, b = e.constructor;
  e:
  if (t != null) {
    if (g = e.d, !g) return e;
    for (o = 1, a = g[0]; a >= 10; a /= 10) o++;
    if (i = t - o, i < 0) {
      i += $, s = t, p = g[y = 0], c = p / ne(10, o - s - 1) % 10 | 0;
    } else if (y = Math.ceil((i + 1) / $), a = g.length, y >= a) {
      if (n) {
        for (; a++ <= y;) g.push(0);
        p = c = 0, o = 1, i %= $, s = i - $ + 1;
      } else break e;
    } else {
      for (p = a = g[y], o = 1; a >= 10; a /= 10) o++;
      i %= $, s = i - $ + o, c = s < 0 ? 0 : p / ne(10, o - s - 1) % 10 | 0;
    }
    if (
      n = n || t < 0 || g[y + 1] !== void 0 ||
        (s < 0 ? p : p % ne(10, o - s - 1)),
        l = r < 4 ? (c || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : c > 5 ||
          c == 5 &&
            (r == 4 || n ||
              r == 6 &&
                (i > 0 ? s > 0 ? p / ne(10, o - s) : 0 : g[y - 1]) % 10 & 1 ||
              r == (e.s < 0 ? 8 : 7)),
        t < 1 || !g[0]
    ) {
      return g.length = 0,
        l
          ? (t -= e.e + 1, g[0] = ne(10, ($ - t % $) % $), e.e = -t || 0)
          : g[0] = e.e = 0,
        e;
    }
    if (
      i == 0
        ? (g.length = y, a = 1, y--)
        : (g.length = y + 1,
          a = ne(10, $ - i),
          g[y] = s > 0 ? (p / ne(10, o - s) % ne(10, s) | 0) * a : 0), l
    ) {
      for (;;) {
        if (y == 0) {
          for (i = 1, s = g[0]; s >= 10; s /= 10) i++;
          for (s = g[0] += a, a = 1; s >= 10; s /= 10) a++;
          i != a && (e.e++, g[0] == je && (g[0] = 1));
          break;
        } else {
          if (g[y] += a, g[y] != je) break;
          g[y--] = 0, a = 1;
        }
      }
    }
    for (i = g.length; g[--i] === 0;) g.pop();
  }
  return B &&
    (e.e > b.maxE
      ? (e.d = null, e.e = NaN)
      : e.e < b.minE && (e.e = 0, e.d = [0])),
    e;
}
u(N, "finalise");
function ze(e, t, r) {
  if (!e.isFinite()) return nc(e);
  var n, o = e.e, i = ue(e.d), s = i.length;
  return t
    ? (r && (n = r - s) > 0
      ? i = i.charAt(0) + "." + i.slice(1) + bt(n)
      : s > 1 && (i = i.charAt(0) + "." + i.slice(1)),
      i = i + (e.e < 0 ? "e" : "e+") + e.e)
    : o < 0
    ? (i = "0." + bt(-o - 1) + i, r && (n = r - s) > 0 && (i += bt(n)))
    : o >= s
    ? (i += bt(o + 1 - s), r && (n = r - o - 1) > 0 && (i = i + "." + bt(n)))
    : ((n = o + 1) < s && (i = i.slice(0, n) + "." + i.slice(n)),
      r && (n = r - s) > 0 && (o + 1 === s && (i += "."), i += bt(n))),
    i;
}
u(ze, "finiteToString");
function po(e, t) {
  var r = e[0];
  for (t *= $; r >= 10; r /= 10) t++;
  return t;
}
u(po, "getBase10Exponent");
function co(e, t, r) {
  if (t > qm) throw B = !0, r && (e.precision = r), Error(Qu);
  return N(new e(ao), t, 1, !0);
}
u(co, "getLn10");
function Ne(e, t, r) {
  if (t > Li) throw Error(Qu);
  return N(new e(uo), t, r, !0);
}
u(Ne, "getPi");
function ec(e) {
  var t = e.length - 1, r = t * $ + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
u(ec, "getPrecision");
function bt(e) {
  for (var t = ""; e--;) t += "0";
  return t;
}
u(bt, "getZeroString");
function tc(e, t, r, n) {
  var o, i = new e(1), s = Math.ceil(n / $ + 4);
  for (B = !1;;) {
    if (
      r % 2 && (i = i.times(t), zu(i.d, s) && (o = !0)), r = ce(r / 2), r === 0
    ) {
      r = i.d.length - 1, o && i.d[r] === 0 && ++i.d[r];
      break;
    }
    t = t.times(t), zu(t.d, s);
  }
  return B = !0, i;
}
u(tc, "intPow");
function Ju(e) {
  return e.d[e.d.length - 1] & 1;
}
u(Ju, "isOdd");
function rc(e, t, r) {
  for (var n, o = new e(t[0]), i = 0; ++i < t.length;) {
    if (n = new e(t[i]), n.s) o[r](n) && (o = n);
    else {
      o = n;
      break;
    }
  }
  return o;
}
u(rc, "maxOrMin");
function Bi(e, t) {
  var r,
    n,
    o,
    i,
    s,
    a,
    c,
    l = 0,
    p = 0,
    g = 0,
    y = e.constructor,
    b = y.rounding,
    v = y.precision;
  if (!e.d || !e.d[0] || e.e > 17) {
    return new y(
      e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0,
    );
  }
  for (t == null ? (B = !1, c = v) : c = t, a = new y(.03125); e.e > -2;) {
    e = e.times(a), g += 5;
  }
  for (
    n = Math.log(ne(2, g)) / Math.LN10 * 2 + 5 | 0,
      c += n,
      r = i = s = new y(1),
      y.precision = c;;
  ) {
    if (
      i = N(i.times(e), c, 1),
        r = r.times(++p),
        a = s.plus(Z(i, r, c, 1)),
        ue(a.d).slice(0, c) === ue(s.d).slice(0, c)
    ) {
      for (o = g; o--;) s = N(s.times(s), c, 1);
      if (t == null) {
        if (l < 3 && Xr(s.d, c - n, b, l)) {
          y.precision = c += 10, r = i = a = new y(1), p = 0, l++;
        } else return N(s, y.precision = v, b, B = !0);
      } else return y.precision = v, s;
    }
    s = a;
  }
}
u(Bi, "naturalExponential");
function wt(e, t) {
  var r,
    n,
    o,
    i,
    s,
    a,
    c,
    l,
    p,
    g,
    y,
    b = 1,
    v = 10,
    h = e,
    A = h.d,
    O = h.constructor,
    T = O.rounding,
    M = O.precision;
  if (h.s < 0 || !A || !A[0] || !h.e && A[0] == 1 && A.length == 1) {
    return new O(A && !A[0] ? -1 / 0 : h.s != 1 ? NaN : A ? 0 : h);
  }
  if (
    t == null ? (B = !1, p = M) : p = t,
      O.precision = p += v,
      r = ue(A),
      n = r.charAt(0),
      Math.abs(i = h.e) < 15e14
  ) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;) {
      h = h.times(e), r = ue(h.d), n = r.charAt(0), b++;
    }
    i = h.e,
      n > 1 ? (h = new O("0." + r), i++) : h = new O(n + "." + r.slice(1));
  } else {return l = co(O, p + 2, M).times(i + ""),
      h = wt(new O(n + "." + r.slice(1)), p - v).plus(l),
      O.precision = M,
      t == null ? N(h, M, T, B = !0) : h;}
  for (
    g = h,
      c = s = h = Z(h.minus(1), h.plus(1), p, 1),
      y = N(h.times(h), p, 1),
      o = 3;;
  ) {
    if (
      s = N(s.times(y), p, 1),
        l = c.plus(Z(s, new O(o), p, 1)),
        ue(l.d).slice(0, p) === ue(c.d).slice(0, p)
    ) {
      if (
        c = c.times(2),
          i !== 0 && (c = c.plus(co(O, p + 2, M).times(i + ""))),
          c = Z(c, new O(b), p, 1),
          t == null
      ) {
        if (Xr(c.d, p - v, T, a)) {
          O.precision = p += v,
            l = s = h = Z(g.minus(1), g.plus(1), p, 1),
            y = N(h.times(h), p, 1),
            o = a = 1;
        } else return N(c, O.precision = M, T, B = !0);
      } else return O.precision = M, c;
    }
    c = l, o += 2;
  }
}
u(wt, "naturalLogarithm");
function nc(e) {
  return String(e.s * e.s / 0);
}
u(nc, "nonFiniteToString");
function qi(e, t) {
  var r, n, o;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (o = t.length; t.charCodeAt(o - 1) === 48; --o);
  if (t = t.slice(n, o), t) {
    if (
      o -= n,
        e.e = r = r - n - 1,
        e.d = [],
        n = (r + 1) % $,
        r < 0 && (n += $),
        n < o
    ) {
      for (n && e.d.push(+t.slice(0, n)), o -= $; n < o;) {
        e.d.push(+t.slice(n, n += $));
      }
      t = t.slice(n), n = $ - t.length;
    } else n -= o;
    for (; n--;) t += "0";
    e.d.push(+t),
      B &&
      (e.e > e.constructor.maxE
        ? (e.d = null, e.e = NaN)
        : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else e.e = 0, e.d = [0];
  return e;
}
u(qi, "parseDecimal");
function Vm(e, t) {
  var r, n, o, i, s, a, c, l, p;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Xu.test(t)) return qi(e, t);
  } else if (t === "Infinity" || t === "NaN") {
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  }
  if ($m.test(t)) r = 16, t = t.toLowerCase();
  else if (jm.test(t)) r = 2;
  else if (Lm.test(t)) r = 8;
  else throw Error(xt + t);
  for (
    i = t.search(/p/i),
      i > 0 ? (c = +t.slice(i + 1), t = t.substring(2, i)) : t = t.slice(2),
      i = t.indexOf("."),
      s = i >= 0,
      n = e.constructor,
      s &&
      (t = t.replace(".", ""),
        a = t.length,
        i = a - i,
        o = tc(n, new n(r), i, i * 2)),
      l = so(t, r, je),
      p = l.length - 1,
      i = p;
    l[i] === 0;
    --i
  ) l.pop();
  return i < 0
    ? new n(e.s * 0)
    : (e.e = po(l, p),
      e.d = l,
      B = !1,
      s && (e = Z(e, o, a * 4)),
      c && (e = e.times(Math.abs(c) < 54 ? ne(2, c) : ot.pow(2, c))),
      B = !0,
      e);
}
u(Vm, "parseOther");
function Gm(e, t) {
  var r, n = t.d.length;
  if (n < 3) return t.isZero() ? t : fr(e, 2, t, t);
  r = 1.4 * Math.sqrt(n),
    r = r > 16 ? 16 : r | 0,
    t = t.times(1 / fo(5, r)),
    t = fr(e, 2, t, t);
  for (var o, i = new e(5), s = new e(16), a = new e(20); r--;) {
    o = t.times(t), t = t.times(i.plus(o.times(s.times(o).minus(a))));
  }
  return t;
}
u(Gm, "sine");
function fr(e, t, r, n, o) {
  var i, s, a, c, l = 1, p = e.precision, g = Math.ceil(p / $);
  for (B = !1, c = r.times(r), a = new e(n);;) {
    if (
      s = Z(a.times(c), new e(t++ * t++), p, 1),
        a = o ? n.plus(s) : n.minus(s),
        n = Z(s.times(c), new e(t++ * t++), p, 1),
        s = a.plus(n),
        s.d[g] !== void 0
    ) {
      for (i = g; s.d[i] === a.d[i] && i--;);
      if (i == -1) break;
    }
    i = a, a = n, n = s, s = i, l++;
  }
  return B = !0, s.d.length = g + 1, s;
}
u(fr, "taylorSeries");
function fo(e, t) {
  for (var r = e; --t;) r *= e;
  return r;
}
u(fo, "tinyPow");
function oc(e, t) {
  var r, n = t.s < 0, o = Ne(e, e.precision, 1), i = o.times(.5);
  if (t = t.abs(), t.lte(i)) return nt = n ? 4 : 1, t;
  if (r = t.divToInt(o), r.isZero()) nt = n ? 3 : 2;
  else {
    if (t = t.minus(r.times(o)), t.lte(i)) {
      return nt = Ju(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    }
    nt = Ju(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return t.minus(o).abs();
}
u(oc, "toLessThanHalfPi");
function Ui(e, t, r, n) {
  var o, i, s, a, c, l, p, g, y, b = e.constructor, v = r !== void 0;
  if (
    v
      ? (Ae(r, 1, Et), n === void 0 ? n = b.rounding : Ae(n, 0, 8))
      : (r = b.precision, n = b.rounding), !e.isFinite()
  ) p = nc(e);
  else {
    for (
      p = ze(e),
        s = p.indexOf("."),
        v
          ? (o = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2))
          : o = t,
        s >= 0 &&
        (p = p.replace(".", ""),
          y = new b(1),
          y.e = p.length - s,
          y.d = so(ze(y), 10, o),
          y.e = y.d.length),
        g = so(p, 10, o),
        i = c = g.length;
      g[--c] == 0;
    ) g.pop();
    if (!g[0]) p = v ? "0p+0" : "0";
    else {
      if (
        s < 0
          ? i--
          : (e = new b(e),
            e.d = g,
            e.e = i,
            e = Z(e, y, r, n, 0, o),
            g = e.d,
            i = e.e,
            l = Wu),
          s = g[r],
          a = o / 2,
          l = l || g[r + 1] !== void 0,
          l = n < 4
            ? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              s === a &&
                (n === 4 || l || n === 6 && g[r - 1] & 1 ||
                  n === (e.s < 0 ? 8 : 7)),
          g.length = r,
          l
      ) for (; ++g[--r] > o - 1;) g[r] = 0, r || (++i, g.unshift(1));
      for (c = g.length; !g[c - 1]; --c);
      for (s = 0, p = ""; s < c; s++) p += ji.charAt(g[s]);
      if (v) {
        if (c > 1) {
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --c; c % s; c++) p += "0";
            for (g = so(p, o, t), c = g.length; !g[c - 1]; --c);
            for (s = 1, p = "1."; s < c; s++) p += ji.charAt(g[s]);
          } else p = p.charAt(0) + "." + p.slice(1);
        }
        p = p + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i;) p = "0" + p;
        p = "0." + p;
      } else if (++i > c) for (i -= c; i--;) p += "0";
      else i < c && (p = p.slice(0, i) + "." + p.slice(i));
    }
    p = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + p;
  }
  return e.s < 0 ? "-" + p : p;
}
u(Ui, "toStringBinary");
function zu(e, t) {
  if (e.length > t) return e.length = t, !0;
}
u(zu, "truncate");
function Km(e) {
  return new this(e).abs();
}
u(Km, "abs");
function Jm(e) {
  return new this(e).acos();
}
u(Jm, "acos");
function zm(e) {
  return new this(e).acosh();
}
u(zm, "acosh");
function Hm(e, t) {
  return new this(e).plus(t);
}
u(Hm, "add");
function Wm(e) {
  return new this(e).asin();
}
u(Wm, "asin");
function Qm(e) {
  return new this(e).asinh();
}
u(Qm, "asinh");
function Ym(e) {
  return new this(e).atan();
}
u(Ym, "atan");
function Zm(e) {
  return new this(e).atanh();
}
u(Zm, "atanh");
function Xm(e, t) {
  e = new this(e), t = new this(t);
  var r, n = this.precision, o = this.rounding, i = n + 4;
  return !e.s || !t.s
    ? r = new this(NaN)
    : !e.d && !t.d
    ? (r = Ne(this, i, 1).times(t.s > 0 ? .25 : .75), r.s = e.s)
    : !t.d || e.isZero()
    ? (r = t.s < 0 ? Ne(this, n, o) : new this(0), r.s = e.s)
    : !e.d || t.isZero()
    ? (r = Ne(this, i, 1).times(.5), r.s = e.s)
    : t.s < 0
    ? (this.precision = i,
      this.rounding = 1,
      r = this.atan(Z(e, t, i, 1)),
      t = Ne(this, i, 1),
      this.precision = n,
      this.rounding = o,
      r = e.s < 0 ? r.minus(t) : r.plus(t))
    : r = this.atan(Z(e, t, i, 1)),
    r;
}
u(Xm, "atan2");
function ed(e) {
  return new this(e).cbrt();
}
u(ed, "cbrt");
function td(e) {
  return N(e = new this(e), e.e + 1, 2);
}
u(td, "ceil");
function rd(e, t, r) {
  return new this(e).clamp(t, r);
}
u(rd, "clamp");
function nd(e) {
  if (!e || typeof e != "object") throw Error(lo + "Object expected");
  var t,
    r,
    n,
    o = e.defaults === !0,
    i = [
      "precision",
      1,
      Et,
      "rounding",
      0,
      8,
      "toExpNeg",
      -pr,
      0,
      "toExpPos",
      0,
      pr,
      "maxE",
      0,
      pr,
      "minE",
      -pr,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < i.length; t += 3) {
    if (r = i[t], o && (this[r] = $i[r]), (n = e[r]) !== void 0) {
      if (ce(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(xt + r + ": " + n);
    }
  }
  if (r = "crypto", o && (this[r] = $i[r]), (n = e[r]) !== void 0) {
    if (n === !0 || n === !1 || n === 0 || n === 1) {
      if (n) {
        if (
          typeof crypto != "undefined" && crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        ) this[r] = !0;
        else throw Error(Yu);
      } else this[r] = !1;
    } else throw Error(xt + r + ": " + n);
  }
  return this;
}
u(nd, "config");
function od(e) {
  return new this(e).cos();
}
u(od, "cos");
function id(e) {
  return new this(e).cosh();
}
u(id, "cosh");
function ic(e) {
  var t, r, n;
  function o(i) {
    var s, a, c, l = this;
    if (!(l instanceof o)) return new o(i);
    if (l.constructor = o, Hu(i)) {
      l.s = i.s,
        B
          ? !i.d || i.e > o.maxE
            ? (l.e = NaN, l.d = null)
            : i.e < o.minE
            ? (l.e = 0, l.d = [0])
            : (l.e = i.e, l.d = i.d.slice())
          : (l.e = i.e, l.d = i.d ? i.d.slice() : i.d);
      return;
    }
    if (c = typeof i, c === "number") {
      if (i === 0) {
        l.s = 1 / i < 0 ? -1 : 1, l.e = 0, l.d = [0];
        return;
      }
      if (i < 0 ? (i = -i, l.s = -1) : l.s = 1, i === ~~i && i < 1e7) {
        for (s = 0, a = i; a >= 10; a /= 10) s++;
        B
          ? s > o.maxE
            ? (l.e = NaN, l.d = null)
            : s < o.minE
            ? (l.e = 0, l.d = [0])
            : (l.e = s, l.d = [i])
          : (l.e = s, l.d = [i]);
        return;
      } else if (i * 0 !== 0) {
        i || (l.s = NaN), l.e = NaN, l.d = null;
        return;
      }
      return qi(l, i.toString());
    } else if (c !== "string") throw Error(xt + i);
    return (a = i.charCodeAt(0)) === 45
      ? (i = i.slice(1), l.s = -1)
      : (a === 43 && (i = i.slice(1)), l.s = 1),
      Xu.test(i) ? qi(l, i) : Vm(l, i);
  }
  if (
    u(o, "Decimal"),
      o.prototype = I,
      o.ROUND_UP = 0,
      o.ROUND_DOWN = 1,
      o.ROUND_CEIL = 2,
      o.ROUND_FLOOR = 3,
      o.ROUND_HALF_UP = 4,
      o.ROUND_HALF_DOWN = 5,
      o.ROUND_HALF_EVEN = 6,
      o.ROUND_HALF_CEIL = 7,
      o.ROUND_HALF_FLOOR = 8,
      o.EUCLID = 9,
      o.config = o.set = nd,
      o.clone = ic,
      o.isDecimal = Hu,
      o.abs = Km,
      o.acos = Jm,
      o.acosh = zm,
      o.add = Hm,
      o.asin = Wm,
      o.asinh = Qm,
      o.atan = Ym,
      o.atanh = Zm,
      o.atan2 = Xm,
      o.cbrt = ed,
      o.ceil = td,
      o.clamp = rd,
      o.cos = od,
      o.cosh = id,
      o.div = sd,
      o.exp = ad,
      o.floor = ud,
      o.hypot = cd,
      o.ln = ld,
      o.log = pd,
      o.log10 = md,
      o.log2 = fd,
      o.max = dd,
      o.min = gd,
      o.mod = yd,
      o.mul = hd,
      o.pow = bd,
      o.random = wd,
      o.round = xd,
      o.sign = Ed,
      o.sin = vd,
      o.sinh = Ad,
      o.sqrt = Pd,
      o.sub = Td,
      o.sum = Md,
      o.tan = Od,
      o.tanh = Sd,
      o.trunc = Cd,
      e === void 0 && (e = {}),
      e && e.defaults !== !0
  ) {
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ], t = 0;
      t < n.length;
    ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  }
  return o.config(e), o;
}
u(ic, "clone");
function sd(e, t) {
  return new this(e).div(t);
}
u(sd, "div");
function ad(e) {
  return new this(e).exp();
}
u(ad, "exp");
function ud(e) {
  return N(e = new this(e), e.e + 1, 3);
}
u(ud, "floor");
function cd() {
  var e, t, r = new this(0);
  for (B = !1, e = 0; e < arguments.length;) {
    if (t = new this(arguments[e++]), t.d) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return B = !0, new this(1 / 0);
      r = t;
    }
  }
  return B = !0, r.sqrt();
}
u(cd, "hypot");
function Hu(e) {
  return e instanceof ot || e && e.toStringTag === Zu || !1;
}
u(Hu, "isDecimalInstance");
function ld(e) {
  return new this(e).ln();
}
u(ld, "ln");
function pd(e, t) {
  return new this(e).log(t);
}
u(pd, "log");
function fd(e) {
  return new this(e).log(2);
}
u(fd, "log2");
function md(e) {
  return new this(e).log(10);
}
u(md, "log10");
function dd() {
  return rc(this, arguments, "lt");
}
u(dd, "max");
function gd() {
  return rc(this, arguments, "gt");
}
u(gd, "min");
function yd(e, t) {
  return new this(e).mod(t);
}
u(yd, "mod");
function hd(e, t) {
  return new this(e).mul(t);
}
u(hd, "mul");
function bd(e, t) {
  return new this(e).pow(t);
}
u(bd, "pow");
function wd(e) {
  var t, r, n, o, i = 0, s = new this(1), a = [];
  if (
    e === void 0 ? e = this.precision : Ae(e, 1, Et),
      n = Math.ceil(e / $),
      this.crypto
  ) {
    if (crypto.getRandomValues) {
      for (t = crypto.getRandomValues(new Uint32Array(n)); i < n;) {
        o = t[i],
          o >= 429e7
            ? t[i] = crypto.getRandomValues(new Uint32Array(1))[0]
            : a[i++] = o % 1e7;
      }
    } else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(n *= 4); i < n;) {
        o = t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) +
          ((t[i + 3] & 127) << 24),
          o >= 214e7
            ? crypto.randomBytes(4).copy(t, i)
            : (a.push(o % 1e7), i += 4);
      }
      i = n / 4;
    } else throw Error(Yu);
  } else for (; i < n;) a[i++] = Math.random() * 1e7 | 0;
  for (
    n = a[--i], e %= $, n && e && (o = ne(10, $ - e), a[i] = (n / o | 0) * o);
    a[i] === 0;
    i--
  ) a.pop();
  if (i < 0) r = 0, a = [0];
  else {
    for (r = -1; a[0] === 0; r -= $) a.shift();
    for (n = 1, o = a[0]; o >= 10; o /= 10) n++;
    n < $ && (r -= $ - n);
  }
  return s.e = r, s.d = a, s;
}
u(wd, "random");
function xd(e) {
  return N(e = new this(e), e.e + 1, this.rounding);
}
u(xd, "round");
function Ed(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
u(Ed, "sign");
function vd(e) {
  return new this(e).sin();
}
u(vd, "sin");
function Ad(e) {
  return new this(e).sinh();
}
u(Ad, "sinh");
function Pd(e) {
  return new this(e).sqrt();
}
u(Pd, "sqrt");
function Td(e, t) {
  return new this(e).sub(t);
}
u(Td, "sub");
function Md() {
  var e = 0, t = arguments, r = new this(t[e]);
  for (B = !1; r.s && ++e < t.length;) r = r.plus(t[e]);
  return B = !0, N(r, this.precision, this.rounding);
}
u(Md, "sum");
function Od(e) {
  return new this(e).tan();
}
u(Od, "tan");
function Sd(e) {
  return new this(e).tanh();
}
u(Sd, "tanh");
function Cd(e) {
  return N(e = new this(e), e.e + 1, 1);
}
u(Cd, "trunc");
I[Symbol.for("nodejs.util.inspect.custom")] = I.toString;
I[Symbol.toStringTag] = "Decimal";
var ot = I.constructor = ic($i);
ao = new ot(ao);
uo = new ot(uo);
var He = ot;
var Ji = ee(Qn()), cc = ee(Vi());
d();
f();
m();
var Re = class {
  constructor(t, r, n, o) {
    this.modelName = t, this.name = r, this.typeName = n, this.isList = o;
  }
  _toGraphQLInputType() {
    return `${
      this.isList ? `List${this.typeName}` : this.typeName
    }FieldRefInput<${this.modelName}>`;
  }
};
u(Re, "FieldRefImpl");
d();
f();
m();
var ac = [
    "JsonNullValueInput",
    "NullableJsonNullValueInput",
    "JsonNullValueFilter",
  ],
  mo = Symbol(),
  Gi = new WeakMap(),
  Me = class {
    constructor(t) {
      t === mo ? Gi.set(this, `Prisma.${this._getName()}`) : Gi.set(
        this,
        `new Prisma.${this._getNamespace()}.${this._getName()}()`,
      );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Gi.get(this);
    }
  };
u(Me, "ObjectEnumValue");
var mr = class extends Me {
  _getNamespace() {
    return "NullTypes";
  }
};
u(mr, "NullTypesEnumValue");
var en = class extends mr {};
u(en, "DbNull");
var tn = class extends mr {};
u(tn, "JsonNull");
var rn = class extends mr {};
u(rn, "AnyNull");
var Ki = {
  classes: { DbNull: en, JsonNull: tn, AnyNull: rn },
  instances: { DbNull: new en(mo), JsonNull: new tn(mo), AnyNull: new rn(mo) },
};
d();
f();
m();
function go(e) {
  return ot.isDecimal(e)
    ? !0
    : e !== null && typeof e == "object" && typeof e.s == "number" &&
      typeof e.e == "number" && Array.isArray(e.d);
}
u(go, "isDecimalJsLike");
function uc(e) {
  if (ot.isDecimal(e)) return JSON.stringify(String(e));
  let t = new ot(0);
  return t.d = e.d, t.e = e.e, t.s = e.s, JSON.stringify(String(t));
}
u(uc, "stringifyDecimalJsLike");
var le = u((e, t) => {
    let r = {};
    for (let n of e) {
      let o = n[t];
      r[o] = n;
    }
    return r;
  }, "keyBy"),
  dr = {
    String: !0,
    Int: !0,
    Float: !0,
    Boolean: !0,
    Long: !0,
    DateTime: !0,
    ID: !0,
    UUID: !0,
    Json: !0,
    Bytes: !0,
    Decimal: !0,
    BigInt: !0,
  };
var Id = {
  string: "String",
  boolean: "Boolean",
  object: "Json",
  symbol: "Symbol",
};
function gr(e) {
  return typeof e == "string" ? e : e.name;
}
u(gr, "stringifyGraphQLType");
function on(e, t) {
  return t ? `List<${e}>` : e;
}
u(on, "wrapWithList");
var Rd =
    /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/,
  _d =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function yr(e, t) {
  let r = t == null ? void 0 : t.type;
  if (e === null) return "null";
  if (Object.prototype.toString.call(e) === "[object BigInt]") return "BigInt";
  if (He.isDecimal(e) || r === "Decimal" && go(e)) return "Decimal";
  if (x.Buffer.isBuffer(e)) return "Bytes";
  if (Fd(e, t)) return r.name;
  if (e instanceof Me) return e._getName();
  if (e instanceof Re) return e._toGraphQLInputType();
  if (Array.isArray(e)) {
    let o = e.reduce((i, s) => {
      let a = yr(s, t);
      return i.includes(a) || i.push(a), i;
    }, []);
    return o.includes("Float") && o.includes("Int") && (o = ["Float"]),
      `List<${o.join(" | ")}>`;
  }
  let n = typeof e;
  if (n === "number") return Math.trunc(e) === e ? "Int" : "Float";
  if (Object.prototype.toString.call(e) === "[object Date]") return "DateTime";
  if (n === "string") {
    if (_d.test(e)) return "UUID";
    if (new Date(e).toString() === "Invalid Date") return "String";
    if (Rd.test(e)) return "DateTime";
  }
  return Id[n];
}
u(yr, "getGraphQLType");
function Fd(e, t) {
  var n;
  let r = t == null ? void 0 : t.type;
  if (!kd(r)) return !1;
  if ((t == null ? void 0 : t.namespace) === "prisma" && ac.includes(r.name)) {
    let o = (n = e == null ? void 0 : e.constructor) == null ? void 0 : n.name;
    return typeof o == "string" && Ki.instances[o] === e &&
      r.values.includes(o);
  }
  return typeof e == "string" && r.values.includes(e);
}
u(Fd, "isValidEnumValue");
function yo(e, t) {
  return t.reduce((n, o) => {
    let i = (0, cc.default)(e, o);
    return i < n.distance ? { distance: i, str: o } : n;
  }, {
    distance: Math.min(
      Math.floor(e.length) * 1.1,
      ...t.map((n) => n.length * 3),
    ),
    str: null,
  }).str;
}
u(yo, "getSuggestion");
function hr(e, t = !1) {
  if (typeof e == "string") return e;
  if (e.values) {
    return `enum ${e.name} {
${(0, Ji.default)(e.values.join(", "), 2)}
}`;
  }
  {
    let r = (0, Ji.default)(
      e.fields.map((n) => {
        let o = `${n.name}`,
          i = `${t ? vt.default.green(o) : o}${n.isRequired ? "" : "?"}: ${
            vt.default.white(
              n.inputTypes.map((s) =>
                on(Dd(s.type) ? s.type.name : gr(s.type), s.isList)
              ).join(" | "),
            )
          }`;
        return n.isRequired ? i : vt.default.dim(i);
      }).join(`
`),
      2,
    );
    return `${vt.default.dim("type")} ${vt.default.bold.dim(e.name)} ${
      vt.default.dim("{")
    }
${r}
${vt.default.dim("}")}`;
  }
}
u(hr, "stringifyInputType");
function Dd(e) {
  return typeof e != "string";
}
u(Dd, "argIsInputType");
function nn(e) {
  return typeof e == "string" ? e === "Null" ? "null" : e : e.name;
}
u(nn, "getInputTypeName");
function jt(e) {
  return typeof e == "string" ? e : e.name;
}
u(jt, "getOutputTypeName");
function zi(e, t, r = !1) {
  if (typeof e == "string") return e === "Null" ? "null" : e;
  if (e.values) return e.values.join(" | ");
  let n = e,
    o = t && n.fields.every((i) => {
      var s;
      return i.inputTypes[0].location === "inputObjectTypes" ||
        ((s = i.inputTypes[1]) == null ? void 0 : s.location) ===
          "inputObjectTypes";
    });
  return r ? nn(e) : n.fields.reduce((i, s) => {
    let a = "";
    return !o && !s.isRequired
      ? a = s.inputTypes.map((c) => nn(c.type)).join(" | ")
      : a = s.inputTypes.map((c) => zi(c.type, s.isRequired, !0)).join(" | "),
      i[s.name + (s.isRequired ? "" : "?")] = a,
      i;
  }, {});
}
u(zi, "inputTypeToJson");
function lc(e, t, r) {
  let n = {};
  for (let o of e) n[r(o)] = o;
  for (let o of t) {
    let i = r(o);
    n[i] || (n[i] = o);
  }
  return Object.values(n);
}
u(lc, "unionBy");
function ho(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
u(ho, "lowerCase");
function pc(e) {
  return e.endsWith("GroupByOutputType");
}
u(pc, "isGroupByOutputName");
function kd(e) {
  return typeof e == "object" && e !== null && typeof e.name == "string" &&
    Array.isArray(e.values);
}
u(kd, "isSchemaEnum");
var sn = class {
  constructor({ datamodel: t }) {
    this.datamodel = t,
      this.datamodelEnumMap = this.getDatamodelEnumMap(),
      this.modelMap = this.getModelMap(),
      this.typeMap = this.getTypeMap(),
      this.typeAndModelMap = this.getTypeModelMap();
  }
  getDatamodelEnumMap() {
    return le(this.datamodel.enums, "name");
  }
  getModelMap() {
    return { ...le(this.datamodel.models, "name") };
  }
  getTypeMap() {
    return { ...le(this.datamodel.types, "name") };
  }
  getTypeModelMap() {
    return { ...this.getTypeMap(), ...this.getModelMap() };
  }
};
u(sn, "DMMFDatamodelHelper");
var an = class {
  constructor({ mappings: t }) {
    this.mappings = t, this.mappingsMap = this.getMappingsMap();
  }
  getMappingsMap() {
    return le(this.mappings.modelOperations, "model");
  }
};
u(an, "DMMFMappingsHelper");
var un = class {
  constructor({ schema: t }) {
    this.outputTypeToMergedOutputType = u(
      (t) => ({ ...t, fields: t.fields }),
      "outputTypeToMergedOutputType",
    );
    this.schema = t,
      this.enumMap = this.getEnumMap(),
      this.queryType = this.getQueryType(),
      this.mutationType = this.getMutationType(),
      this.outputTypes = this.getOutputTypes(),
      this.outputTypeMap = this.getMergedOutputTypeMap(),
      this.resolveOutputTypes(),
      this.inputObjectTypes = this.schema.inputObjectTypes,
      this.inputTypeMap = this.getInputTypeMap(),
      this.resolveInputTypes(),
      this.resolveFieldArgumentTypes(),
      this.queryType = this.outputTypeMap.Query,
      this.mutationType = this.outputTypeMap.Mutation,
      this.rootFieldMap = this.getRootFieldMap();
  }
  get [Symbol.toStringTag]() {
    return "DMMFClass";
  }
  resolveOutputTypes() {
    for (let t of this.outputTypes.model) {
      for (let r of t.fields) {
        typeof r.outputType.type == "string" && !dr[r.outputType.type] &&
          (r.outputType.type = this.outputTypeMap[r.outputType.type] ||
            this.outputTypeMap[r.outputType.type] ||
            this.enumMap[r.outputType.type] || r.outputType.type);
      }
      t.fieldMap = le(t.fields, "name");
    }
    for (let t of this.outputTypes.prisma) {
      for (let r of t.fields) {
        typeof r.outputType.type == "string" && !dr[r.outputType.type] &&
          (r.outputType.type = this.outputTypeMap[r.outputType.type] ||
            this.outputTypeMap[r.outputType.type] ||
            this.enumMap[r.outputType.type] || r.outputType.type);
      }
      t.fieldMap = le(t.fields, "name");
    }
  }
  resolveInputTypes() {
    let t = this.inputObjectTypes.prisma;
    this.inputObjectTypes.model && t.push(...this.inputObjectTypes.model);
    for (let r of t) {
      for (let n of r.fields) {
        for (let o of n.inputTypes) {
          let i = o.type;
          typeof i == "string" && !dr[i] &&
            (this.inputTypeMap[i] || this.enumMap[i]) &&
            (o.type = this.inputTypeMap[i] || this.enumMap[i] || i);
        }
      }
      r.fieldMap = le(r.fields, "name");
    }
  }
  resolveFieldArgumentTypes() {
    for (let t of this.outputTypes.prisma) {
      for (let r of t.fields) {
        for (let n of r.args) {
          for (let o of n.inputTypes) {
            let i = o.type;
            typeof i == "string" && !dr[i] &&
              (o.type = this.inputTypeMap[i] || this.enumMap[i] || i);
          }
        }
      }
    }
    for (let t of this.outputTypes.model) {
      for (let r of t.fields) {
        for (let n of r.args) {
          for (let o of n.inputTypes) {
            let i = o.type;
            typeof i == "string" && !dr[i] &&
              (o.type = this.inputTypeMap[i] || this.enumMap[i] || o.type);
          }
        }
      }
    }
  }
  getQueryType() {
    return this.schema.outputObjectTypes.prisma.find((t) => t.name === "Query");
  }
  getMutationType() {
    return this.schema.outputObjectTypes.prisma.find((t) =>
      t.name === "Mutation"
    );
  }
  getOutputTypes() {
    return {
      model: this.schema.outputObjectTypes.model.map(
        this.outputTypeToMergedOutputType,
      ),
      prisma: this.schema.outputObjectTypes.prisma.map(
        this.outputTypeToMergedOutputType,
      ),
    };
  }
  getEnumMap() {
    return {
      ...le(this.schema.enumTypes.prisma, "name"),
      ...this.schema.enumTypes.model
        ? le(this.schema.enumTypes.model, "name")
        : void 0,
    };
  }
  hasEnumInNamespace(t, r) {
    var n;
    return ((n = this.schema.enumTypes[r]) == null
      ? void 0
      : n.find((o) => o.name === t)) !== void 0;
  }
  getMergedOutputTypeMap() {
    return {
      ...le(this.outputTypes.model, "name"),
      ...le(this.outputTypes.prisma, "name"),
    };
  }
  getInputTypeMap() {
    return {
      ...this.schema.inputObjectTypes.model
        ? le(this.schema.inputObjectTypes.model, "name")
        : void 0,
      ...le(this.schema.inputObjectTypes.prisma, "name"),
    };
  }
  getRootFieldMap() {
    return {
      ...le(this.queryType.fields, "name"),
      ...le(this.mutationType.fields, "name"),
    };
  }
};
u(un, "DMMFSchemaHelper");
var At = class {
  constructor(t) {
    return Object.assign(this, new sn(t), new an(t));
  }
};
u(At, "BaseDMMFHelper");
Ni(At, [sn, an]);
var Pt = class {
  constructor(t) {
    return Object.assign(this, new At(t), new un(t));
  }
};
u(Pt, "DMMFHelper");
Ni(Pt, [At, un]);
d();
f();
m();
d();
f();
m();
var Hk = ee(fc()), kl = ee(dc());
Qo();
var En = ee(Ka());
d();
f();
m();
var fe = class {
  constructor(t, r) {
    if (t.length - 1 !== r.length) {
      throw t.length === 0
        ? new TypeError("Expected at least 1 string")
        : new TypeError(
          `Expected ${t.length} strings to have ${t.length - 1} values`,
        );
    }
    let n = r.reduce((s, a) => s + (a instanceof fe ? a.values.length : 1), 0);
    this.values = new Array(n),
      this.strings = new Array(n + 1),
      this.strings[0] = t[0];
    let o = 0, i = 0;
    for (; o < r.length;) {
      let s = r[o++], a = t[o];
      if (s instanceof fe) {
        this.strings[i] += s.strings[0];
        let c = 0;
        for (; c < s.values.length;) {
          this.values[i++] = s.values[c++], this.strings[i] = s.strings[c];
        }
        this.strings[i] += a;
      } else this.values[i++] = s, this.strings[i] = a;
    }
  }
  get text() {
    let t = 1, r = this.strings[0];
    for (; t < this.strings.length;) r += `$${t}${this.strings[t++]}`;
    return r;
  }
  get sql() {
    let t = 1, r = this.strings[0];
    for (; t < this.strings.length;) r += `?${this.strings[t++]}`;
    return r;
  }
  inspect() {
    return { text: this.text, sql: this.sql, values: this.values };
  }
};
u(fe, "Sql");
function $d(e, t = ",", r = "", n = "") {
  if (e.length === 0) {
    throw new TypeError(
      "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
    );
  }
  return new fe([r, ...Array(e.length - 1).fill(t), n], e);
}
u($d, "join");
function gc(e) {
  return new fe([e], []);
}
u(gc, "raw");
var Ld = gc("");
function yc(e, ...t) {
  return new fe(e, t);
}
u(yc, "sql");
d();
f();
m();
d();
f();
m();
var bc = ee(hc());
function wc(e) {
  return { ...e, mappings: Bd(e.mappings, e.datamodel) };
}
u(wc, "externalToInternalDmmf");
function Bd(e, t) {
  return {
    modelOperations: e.modelOperations.filter((n) => {
      let o = t.models.find((i) => i.name === n.model);
      if (!o) throw new Error(`Mapping without model ${n.model}`);
      return o.fields.some((i) => i.kind !== "object");
    }).map((n) => ({
      model: n.model,
      plural: (0, bc.default)(ho(n.model)),
      findUnique: n.findUnique || n.findSingle,
      findUniqueOrThrow: n.findUniqueOrThrow,
      findFirst: n.findFirst,
      findFirstOrThrow: n.findFirstOrThrow,
      findMany: n.findMany,
      create: n.createOne || n.createSingle || n.create,
      createMany: n.createMany,
      delete: n.deleteOne || n.deleteSingle || n.delete,
      update: n.updateOne || n.updateSingle || n.update,
      deleteMany: n.deleteMany,
      updateMany: n.updateMany,
      upsert: n.upsertOne || n.upsertSingle || n.upsert,
      aggregate: n.aggregate,
      groupBy: n.groupBy,
      findRaw: n.findRaw,
      aggregateRaw: n.aggregateRaw,
    })),
    otherOperations: e.otherOperations,
  };
}
u(Bd, "getMappings");
function xc(e) {
  return wc(e);
}
u(xc, "getPrismaClientDMMF");
d();
f();
m();
d();
f();
m();
var D = ee(It());
var $t = ee(Qn()), ns = ee(Wn());
d();
f();
m();
d();
f();
m();
var $e = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    var r;
    return (r = this._map.get(t)) == null ? void 0 : r.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let o = r();
    return this.set(t, o), o;
  }
};
u($e, "Cache");
d();
f();
m();
function We(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
u(We, "dmmfToJSModelName");
function vc(e, t, r) {
  let n = We(r);
  return !t.result || !(t.result.$allModels || t.result[n]) ? e : qd({
    ...e,
    ...Ec(t.name, t.result.$allModels),
    ...Ec(t.name, t.result[n]),
  });
}
u(vc, "getComputedFields");
function qd(e) {
  let t = new $e(),
    r = u(
      (n) => t.getOrCreate(n, () => e[n] ? e[n].needs.flatMap(r) : [n]),
      "resolveNeeds",
    );
  return cr(e, (n) => ({ ...n, needs: r(n.name) }));
}
u(qd, "resolveDependencies");
function Ec(e, t) {
  return t
    ? cr(
      t,
      ({ needs: r, compute: n }, o) => ({
        name: o,
        needs: r ? Object.keys(r).filter((i) => r[i]) : [],
        compute: Zr(e, n),
      }),
    )
    : {};
}
u(Ec, "getComputedFieldsFromModel");
function Ac(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t)) {
    if (!!e[n.name]) for (let o of n.needs) r[o] = !0;
  }
  return r;
}
u(Ac, "applyComputedFieldsToSelection");
d();
f();
m();
var br = ee(It()), Ic = ee(Qn());
d();
f();
m();
Qo();
d();
f();
m();
d();
f();
m();
d();
f();
m();
var Tt = ee(It());
var Ud = Tt.default.rgb(246, 145, 95),
  Vd = Tt.default.rgb(107, 139, 140),
  wo = Tt.default.cyan,
  Pc = Tt.default.rgb(127, 155, 155),
  Tc = u((e) => e, "identity"),
  Mc = {
    keyword: wo,
    entity: wo,
    value: Pc,
    punctuation: Vd,
    directive: wo,
    function: wo,
    variable: Pc,
    string: Tt.default.greenBright,
    boolean: Ud,
    number: Tt.default.cyan,
    comment: Tt.default.grey,
  };
var xo = {},
  Gd = 0,
  U = {
    manual: xo.Prism && xo.Prism.manual,
    disableWorkerMessageHandler: xo.Prism &&
      xo.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof Le) {
          let t = e;
          return new Le(t.type, U.util.encode(t.content), t.alias);
        } else {return Array.isArray(e)
            ? e.map(U.util.encode)
            : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
              /\u00a0/g,
              " ",
            );}
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return e.__id || Object.defineProperty(e, "__id", { value: ++Gd }),
          e.__id;
      },
      clone: u(function e(t, r) {
        let n, o, i = U.util.type(t);
        switch (r = r || {}, i) {
          case "Object":
            if (o = U.util.objId(t), r[o]) return r[o];
            n = {}, r[o] = n;
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case "Array":
            return o = U.util.objId(t),
              r[o] ? r[o] : (n = [],
                r[o] = n,
                t.forEach(function (s, a) {
                  n[a] = e(s, r);
                }),
                n);
          default:
            return t;
        }
      }, "deepClone"),
    },
    languages: {
      extend: function (e, t) {
        let r = U.util.clone(U.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || U.languages;
        let o = n[e], i = {};
        for (let a in o) {
          if (o.hasOwnProperty(a)) {
            if (a == t) for (let c in r) r.hasOwnProperty(c) && (i[c] = r[c]);
            r.hasOwnProperty(a) || (i[a] = o[a]);
          }
        }
        let s = n[e];
        return n[e] = i,
          U.languages.DFS(U.languages, function (a, c) {
            c === s && a != e && (this[a] = i);
          }),
          i;
      },
      DFS: u(function e(t, r, n, o) {
        o = o || {};
        let i = U.util.objId;
        for (let s in t) {
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s], c = U.util.type(a);
            c === "Object" && !o[i(a)]
              ? (o[i(a)] = !0, e(a, r, null, o))
              : c === "Array" && !o[i(a)] && (o[i(a)] = !0, e(a, r, s, o));
          }
        }
      }, "DFS"),
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return U.hooks.run("before-tokenize", n),
        n.tokens = U.tokenize(n.code, n.grammar),
        U.hooks.run("after-tokenize", n),
        Le.stringify(U.util.encode(n.tokens), n.language);
    },
    matchGrammar: function (e, t, r, n, o, i, s) {
      for (let h in r) {
        if (!r.hasOwnProperty(h) || !r[h]) continue;
        if (h == s) return;
        let A = r[h];
        A = U.util.type(A) === "Array" ? A : [A];
        for (let O = 0; O < A.length; ++O) {
          let T = A[O],
            M = T.inside,
            P = !!T.lookbehind,
            S = !!T.greedy,
            _ = 0,
            F = T.alias;
          if (S && !T.pattern.global) {
            let j = T.pattern.toString().match(/[imuy]*$/)[0];
            T.pattern = RegExp(T.pattern.source, j + "g");
          }
          T = T.pattern || T;
          for (let j = n, V = o; j < t.length; V += t[j].length, ++j) {
            let te = t[j];
            if (t.length > e.length) return;
            if (te instanceof Le) continue;
            if (S && j != t.length - 1) {
              T.lastIndex = V;
              var g = T.exec(e);
              if (!g) break;
              var p = g.index + (P ? g[1].length : 0),
                y = g.index + g[0].length,
                a = j,
                c = V;
              for (
                let L = t.length;
                a < L && (c < y || !t[a].type && !t[a - 1].greedy);
                ++a
              ) c += t[a].length, p >= c && (++j, V = c);
              if (t[j] instanceof Le) continue;
              l = a - j, te = e.slice(V, c), g.index -= V;
            } else {
              T.lastIndex = 0;
              var g = T.exec(te), l = 1;
            }
            if (!g) {
              if (i) break;
              continue;
            }
            P && (_ = g[1] ? g[1].length : 0);
            var p = g.index + _,
              g = g[0].slice(_),
              y = p + g.length,
              b = te.slice(0, p),
              v = te.slice(y);
            let G = [j, l];
            b && (++j, V += b.length, G.push(b));
            let K = new Le(h, M ? U.tokenize(g, M) : g, F, g, S);
            if (
              G.push(K),
                v && G.push(v),
                Array.prototype.splice.apply(t, G),
                l != 1 && U.matchGrammar(e, t, r, j, V, !0, h),
                i
            ) break;
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let o in n) t[o] = n[o];
        delete t.rest;
      }
      return U.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = U.hooks.all;
        r[e] = r[e] || [], r[e].push(t);
      },
      run: function (e, t) {
        let r = U.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, o; o = r[n++];) o(t);
      },
    },
    Token: Le,
  };
U.languages.clike = {
  comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0,
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
U.languages.javascript = U.languages.extend("clike", {
  "class-name": [U.languages.clike["class-name"], {
    pattern:
      /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0,
  }],
  keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, {
    pattern:
      /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0,
  }],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
U.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
U.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  "function-variable": {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function",
  },
  parameter: [{
    pattern:
      /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: U.languages.javascript,
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: U.languages.javascript,
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: U.languages.javascript,
  }, {
    pattern:
      /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: U.languages.javascript,
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
U.languages.markup && U.languages.markup.tag.addInlined("script", "javascript");
U.languages.js = U.languages.javascript;
U.languages.typescript = U.languages.extend("javascript", {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin:
    /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
U.languages.ts = U.languages.typescript;
function Le(e, t, r, n, o) {
  this.type = e,
    this.content = t,
    this.alias = r,
    this.length = (n || "").length | 0,
    this.greedy = !!o;
}
u(Le, "Token");
Le.stringify = function (e, t) {
  return typeof e == "string" ? e : Array.isArray(e)
    ? e.map(function (r) {
      return Le.stringify(r, t);
    }).join("")
    : Kd(e.type)(e.content);
};
function Kd(e) {
  return Mc[e] || Tc;
}
u(Kd, "getColorForSyntaxKind");
function Oc(e) {
  return Jd(e, U.languages.javascript);
}
u(Oc, "highlightTS");
function Jd(e, t) {
  return U.tokenize(e, t).map((n) => Le.stringify(n)).join("");
}
u(Jd, "highlight");
d();
f();
m();
var Sc = ee(li());
function Cc(e) {
  return (0, Sc.default)(e);
}
u(Cc, "dedent");
var _e = class {
  static read(t) {
    let r;
    try {
      r = Dn.readFileSync(t, "utf-8");
    } catch (n) {
      return null;
    }
    return _e.fromContent(r);
  }
  static fromContent(t) {
    let r = t.split(/\r?\n/);
    return new _e(1, r);
  }
  constructor(t, r) {
    this.firstLineNumber = t, this.lines = r;
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, r) {
    if (
      t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber
    ) return this;
    let n = t - this.firstLineNumber, o = [...this.lines];
    return o[n] = r(o[n]), new _e(this.firstLineNumber, o);
  }
  mapLines(t) {
    return new _e(
      this.firstLineNumber,
      this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
    );
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, r) {
    return this.mapLines((n, o) => o === t ? `${r} ${n}` : `  ${n}`);
  }
  slice(t, r) {
    let n = this.lines.slice(t - 1, r).join(`
`);
    return new _e(
      t,
      Cc(n).split(`
`),
    );
  }
  highlight() {
    let t = Oc(this.toString());
    return new _e(
      this.firstLineNumber,
      t.split(`
`),
    );
  }
  toString() {
    return this.lines.join(`
`);
  }
};
u(_e, "SourceFileSlice");
var zd = {
    red: (e) => br.default.red(e),
    gray: (e) => br.default.gray(e),
    dim: (e) => br.default.dim(e),
    bold: (e) => br.default.bold(e),
    underline: (e) => br.default.underline(e),
    highlightSource: (e) => e.highlight(),
  },
  Hd = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function Wd(
  { callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: o },
  i,
) {
  var g;
  let s = {
    functionName: `prisma.${r}()`,
    message: t,
    isPanic: n != null ? n : !1,
    callArguments: o,
  };
  if (!e || typeof window != "undefined" || w.env.NODE_ENV === "production") {
    return s;
  }
  let a = e.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let c = Math.max(1, a.lineNumber - 3),
    l = (g = _e.read(a.fileName)) == null ? void 0 : g.slice(c, a.lineNumber),
    p = l == null ? void 0 : l.lineAt(a.lineNumber);
  if (l && p) {
    let y = Yd(p), b = Qd(p);
    if (!b) return s;
    s.functionName = `${b.code})`,
      s.location = a,
      n ||
      (l = l.mapLineAt(a.lineNumber, (h) => h.slice(0, b.openingBraceIndex))),
      l = i.highlightSource(l);
    let v = String(l.lastLineNumber).length;
    if (
      s.contextLines = l.mapLines((h, A) =>
        i.gray(String(A).padStart(v)) + " " + h
      ).mapLines((h) => i.dim(h)).prependSymbolAt(
        a.lineNumber,
        i.bold(i.red("\u2192")),
      ), o
    ) {
      let h = y + v + 1;
      h += 2, s.callArguments = (0, Ic.default)(o, h).slice(h);
    }
  }
  return s;
}
u(Wd, "getTemplateParameters");
function Qd(e) {
  let t = Object.keys(rt.ModelAction).join("|"),
    n = new RegExp(String.raw`\S+(${t})\(`).exec(e);
  return n ? { code: n[0], openingBraceIndex: n.index + n[0].length } : null;
}
u(Qd, "findPrismaActionCall");
function Yd(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== " ") return t;
    t++;
  }
  return t;
}
u(Yd, "getIndent");
function Zd(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: o,
    callArguments: i,
  },
  s,
) {
  let a = [""], c = t ? " in" : ":";
  if (
    n
      ? (a.push(
        s.red(
          `Oops, an unknown error occurred! This is ${
            s.bold("on us")
          }, you did nothing wrong.`,
        ),
      ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${c}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${c}`)),
      t && a.push(s.underline(Xd(t))),
      o
  ) {
    a.push("");
    let l = [o.toString()];
    i && (l.push(i), l.push(s.dim(")"))), a.push(l.join("")), i && a.push("");
  } else a.push(""), i && a.push(i), a.push("");
  return a.push(r),
    a.join(`
`);
}
u(Zd, "stringifyErrorMessage");
function Xd(e) {
  let t = [e.fileName];
  return e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(":");
}
u(Xd, "stringifyLocationInFile");
function wr(e) {
  let t = e.showColors ? zd : Hd, r = Wd(e, t);
  return Zd(r, t);
}
u(wr, "createErrorMessageWithContext");
d();
f();
m();
function _c(e) {
  return e instanceof x.Buffer || e instanceof Date || e instanceof RegExp;
}
u(_c, "isSpecificValue");
function Fc(e) {
  if (e instanceof x.Buffer) {
    let t = x.Buffer.alloc ? x.Buffer.alloc(e.length) : new x.Buffer(e.length);
    return e.copy(t), t;
  } else {
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) return new RegExp(e);
    throw new Error("Unexpected situation");
  }
}
u(Fc, "cloneSpecificValue");
function Dc(e) {
  let t = [];
  return e.forEach(function (r, n) {
    typeof r == "object" && r !== null
      ? Array.isArray(r)
        ? t[n] = Dc(r)
        : _c(r)
        ? t[n] = Fc(r)
        : t[n] = ln({}, r)
      : t[n] = r;
  }),
    t;
}
u(Dc, "deepCloneArray");
function Rc(e, t) {
  return t === "__proto__" ? void 0 : e[t];
}
u(Rc, "safeGetProperty");
var ln = u(function (e, ...t) {
  if (!e || typeof e != "object") return !1;
  if (t.length === 0) return e;
  let r, n;
  for (let o of t) {
    if (!(typeof o != "object" || o === null || Array.isArray(o))) {
      for (let i of Object.keys(o)) {
        if (n = Rc(e, i), r = Rc(o, i), r !== e) {
          if (typeof r != "object" || r === null) {
            e[i] = r;
            continue;
          } else if (Array.isArray(r)) {
            e[i] = Dc(r);
            continue;
          } else if (_c(r)) {
            e[i] = Fc(r);
            continue;
          } else if (typeof n != "object" || n === null || Array.isArray(n)) {
            e[i] = ln({}, r);
            continue;
          } else {
            e[i] = ln(n, r);
            continue;
          }
        }
      }
    }
  }
  return e;
}, "deepExtend");
d();
f();
m();
var kc = u((e) => Array.isArray(e) ? e : e.split("."), "keys"),
  Yi = u((e, t) => kc(t).reduce((r, n) => r && r[n], e), "deepGet"),
  Eo = u(
    (e, t, r) =>
      kc(t).reduceRight(
        (n, o, i, s) => Object.assign({}, Yi(e, s.slice(0, i)), { [o]: n }),
        r,
      ),
    "deepSet",
  );
d();
f();
m();
function Nc(e, t) {
  if (!e || typeof e != "object" || typeof e.hasOwnProperty != "function") {
    return e;
  }
  let r = {};
  for (let n in e) {
    let o = e[n];
    Object.hasOwnProperty.call(e, n) && t(n, o) && (r[n] = o);
  }
  return r;
}
u(Nc, "filterObject");
d();
f();
m();
var eg = {
  "[object Date]": !0,
  "[object Uint8Array]": !0,
  "[object Decimal]": !0,
};
function jc(e) {
  return e
    ? typeof e == "object" && !eg[Object.prototype.toString.call(e)]
    : !1;
}
u(jc, "isObject");
d();
f();
m();
function $c(e, t) {
  let r = {}, n = Array.isArray(t) ? t : [t];
  for (let o in e) {
    Object.hasOwnProperty.call(e, o) && !n.includes(o) && (r[o] = e[o]);
  }
  return r;
}
u($c, "omit");
d();
f();
m();
var Oe = ee(It()), es = ee(Wn());
d();
f();
m();
var tg = Bc(),
  rg = Uc(),
  ng = Vc().default,
  og = u((e, t, r) => {
    let n = [];
    return u(function o(i, s = {}, a = "", c = []) {
      s.indent = s.indent || "	";
      let l;
      s.inlineCharacterLimit === void 0
        ? l = {
          newLine: `
`,
          newLineOrSpace: `
`,
          pad: a,
          indent: a + s.indent,
        }
        : l = {
          newLine: "@@__STRINGIFY_OBJECT_NEW_LINE__@@",
          newLineOrSpace: "@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",
          pad: "@@__STRINGIFY_OBJECT_PAD__@@",
          indent: "@@__STRINGIFY_OBJECT_INDENT__@@",
        };
      let p = u((g) => {
        if (s.inlineCharacterLimit === void 0) return g;
        let y = g.replace(new RegExp(l.newLine, "g"), "").replace(
          new RegExp(l.newLineOrSpace, "g"),
          " ",
        ).replace(new RegExp(l.pad + "|" + l.indent, "g"), "");
        return y.length <= s.inlineCharacterLimit ? y : g.replace(
          new RegExp(l.newLine + "|" + l.newLineOrSpace, "g"),
          `
`,
        ).replace(new RegExp(l.pad, "g"), a).replace(
          new RegExp(l.indent, "g"),
          a + s.indent,
        );
      }, "expandWhiteSpace");
      if (n.indexOf(i) !== -1) return '"[Circular]"';
      if (x.Buffer.isBuffer(i)) return `Buffer(${x.Buffer.length})`;
      if (
        i == null || typeof i == "number" || typeof i == "boolean" ||
        typeof i == "function" || typeof i == "symbol" || i instanceof Me ||
        tg(i)
      ) return String(i);
      if (i instanceof Date) return `new Date('${i.toISOString()}')`;
      if (i instanceof Re) return `prisma.${ho(i.modelName)}.fields.${i.name}`;
      if (Array.isArray(i)) {
        if (i.length === 0) return "[]";
        n.push(i);
        let g = "[" + l.newLine + i.map((y, b) => {
          let v = i.length - 1 === b ? l.newLine : "," + l.newLineOrSpace,
            h = o(y, s, a + s.indent, [...c, b]);
          return s.transformValue && (h = s.transformValue(i, b, h)),
            l.indent + h + v;
        }).join("") + l.pad + "]";
        return n.pop(), p(g);
      }
      if (rg(i)) {
        let g = Object.keys(i).concat(ng(i));
        if (
          s.filter && (g = g.filter((b) => s.filter(i, b))), g.length === 0
        ) return "{}";
        n.push(i);
        let y = "{" + l.newLine + g.map((b, v) => {
          let h = g.length - 1 === v ? l.newLine : "," + l.newLineOrSpace,
            A = typeof b == "symbol",
            O = !A && /^[a-z$_][a-z$_0-9]*$/i.test(b),
            T = A || O ? b : o(b, s, void 0, [...c, b]),
            M = o(i[b], s, a + s.indent, [...c, b]);
          s.transformValue && (M = s.transformValue(i, b, M));
          let P = l.indent + String(T) + ": " + M + h;
          return s.transformLine &&
            (P = s.transformLine({
              obj: i,
              indent: l.indent,
              key: T,
              stringifiedValue: M,
              value: i[b],
              eol: h,
              originalLine: P,
              path: c.concat(T),
            })),
            P;
        }).join("") + l.pad + "}";
        return n.pop(), p(y);
      }
      return i = String(i).replace(/[\r\n]/g, (g) =>
        g === `
`
          ? "\\n"
          : "\\r"),
        s.singleQuotes === !1
          ? (i = i.replace(/"/g, '\\"'), `"${i}"`)
          : (i = i.replace(/\\?'/g, "\\'"), `'${i}'`);
    }, "stringifyObject")(e, t, r);
  }, "stringifyObject"),
  pn = og;
var Xi = "@@__DIM_POINTER__@@";
function vo({ ast: e, keyPaths: t, valuePaths: r, missingItems: n }) {
  let o = e;
  for (let { path: i, type: s } of n) o = Eo(o, i, s);
  return pn(o, {
    indent: "  ",
    transformLine: (
      { indent: i, key: s, value: a, stringifiedValue: c, eol: l, path: p },
    ) => {
      let g = p.join("."),
        y = t.includes(g),
        b = r.includes(g),
        v = n.find((A) => A.path === g),
        h = c;
      if (v) {
        typeof a == "string" && (h = h.slice(1, h.length - 1));
        let A = v.isRequired ? "" : "?",
          O = v.isRequired ? "+" : "?",
          M = (v.isRequired ? Oe.default.greenBright : Oe.default.green)(
            ag(s + A + ": " + h + l, i, O),
          );
        return v.isRequired || (M = Oe.default.dim(M)), M;
      } else {
        let A = n.some((P) => g.startsWith(P.path)),
          O = s[s.length - 2] === "?";
        O && (s = s.slice(1, s.length - 1)),
          O && typeof a == "object" && a !== null && (h = h.split(`
`).map((P, S, _) => S === _.length - 1 ? P + Xi : P).join(`
`)),
          A && typeof a == "string" &&
          (h = h.slice(1, h.length - 1), O || (h = Oe.default.bold(h))),
          (typeof a != "object" || a === null) && !b && !A &&
          (h = Oe.default.dim(h));
        let T = y ? Oe.default.redBright(s) : s;
        h = b ? Oe.default.redBright(h) : h;
        let M = i + T + ": " + h + (A ? l : Oe.default.dim(l));
        if (y || b) {
          let P = M.split(`
`),
            S = String(s).length,
            _ = y ? Oe.default.redBright("~".repeat(S)) : " ".repeat(S),
            F = b ? ig(i, s, a, c) : 0,
            j = b && Gc(a),
            V = b ? "  " + Oe.default.redBright("~".repeat(F)) : "";
          _ && _.length > 0 && !j && P.splice(1, 0, i + _ + V),
            _ && _.length > 0 && j &&
            P.splice(P.length - 1, 0, i.slice(0, i.length - 2) + V),
            M = P.join(`
`);
        }
        return M;
      }
    },
  });
}
u(vo, "printJsonWithErrors");
function ig(e, t, r, n) {
  return r === null
    ? 4
    : typeof r == "string"
    ? r.length + 2
    : Gc(r)
    ? Math.abs(sg(`${t}: ${(0, es.default)(n)}`) - e.length)
    : String(r).length;
}
u(ig, "getValueLength");
function Gc(e) {
  return typeof e == "object" && e !== null && !(e instanceof Me);
}
u(Gc, "isRenderedAsObject");
function sg(e) {
  return e.split(`
`).reduce((t, r) => r.length > t ? r.length : t, 0);
}
u(sg, "getLongestLine");
function ag(e, t, r) {
  return e.split(`
`).map((n, o, i) =>
      o === 0 ? r + t.slice(1) + n : o < i.length - 1 ? r + n.slice(1) : n
    ).map((n) =>
      (0, es.default)(n).includes(Xi)
        ? Oe.default.dim(n.replace(Xi, ""))
        : n.includes("?")
        ? Oe.default.dim(n)
        : n
    ).join(`
`);
}
u(ag, "prefixLines");
var fn = 2,
  Ao = class {
    constructor(t, r) {
      this.type = t;
      this.children = r;
      this.printFieldError = u(({ error: t }, r, n) => {
        if (t.type === "emptySelect") {
          let o = n
            ? ""
            : ` Available options are listed in ${
              D.default.greenBright.dim("green")
            }.`;
          return `The ${D.default.redBright("`select`")} statement for type ${
            D.default.bold(jt(t.field.outputType.type))
          } must not be empty.${o}`;
        }
        if (t.type === "emptyInclude") {
          if (r.length === 0) {
            return `${
              D.default.bold(jt(t.field.outputType.type))
            } does not have any relation and therefore can't have an ${
              D.default.redBright("`include`")
            } statement.`;
          }
          let o = n
            ? ""
            : ` Available options are listed in ${
              D.default.greenBright.dim("green")
            }.`;
          return `The ${D.default.redBright("`include`")} statement for type ${
            D.default.bold(jt(t.field.outputType.type))
          } must not be empty.${o}`;
        }
        if (t.type === "noTrueSelect") {
          return `The ${D.default.redBright("`select`")} statement for type ${
            D.default.bold(jt(t.field.outputType.type))
          } needs ${D.default.bold("at least one truthy value")}.`;
        }
        if (t.type === "includeAndSelect") {
          return `Please ${D.default.bold("either")} use ${
            D.default.greenBright("`include`")
          } or ${D.default.greenBright("`select`")}, but ${
            D.default.redBright("not both")
          } at the same time.`;
        }
        if (t.type === "invalidFieldName") {
          let o = t.isInclude ? "include" : "select",
            i = t.isIncludeScalar ? "Invalid scalar" : "Unknown",
            s = n ? "" : t.isInclude && r.length === 0
              ? `
This model has no relations, so you can't use ${
                D.default.redBright("include")
              } with it.`
              : ` Available options are listed in ${
                D.default.greenBright.dim("green")
              }.`,
            a = `${i} field ${
              D.default.redBright(`\`${t.providedName}\``)
            } for ${D.default.bold(o)} statement on model ${
              D.default.bold.white(t.modelName)
            }.${s}`;
          return t.didYouMean &&
            (a += ` Did you mean ${
              D.default.greenBright(`\`${t.didYouMean}\``)
            }?`),
            t.isIncludeScalar && (a += `
Note, that ${
              D.default.bold("include")
            } statements only accept relation fields.`),
            a;
        }
        if (t.type === "invalidFieldType") {
          return `Invalid value ${
            D.default.redBright(`${pn(t.providedValue)}`)
          } of type ${
            D.default.redBright(yr(t.providedValue, void 0))
          } for field ${D.default.bold(`${t.fieldName}`)} on model ${
            D.default.bold.white(t.modelName)
          }. Expected either ${D.default.greenBright("true")} or ${
            D.default.greenBright("false")
          }.`;
        }
      }, "printFieldError");
      this.printArgError = u(({ error: t, path: r, id: n }, o, i) => {
        if (t.type === "invalidName") {
          let s = `Unknown arg ${
            D.default.redBright(`\`${t.providedName}\``)
          } in ${D.default.bold(r.join("."))} for type ${
            D.default.bold(
              t.outputType ? t.outputType.name : nn(t.originalType),
            )
          }.`;
          return t.didYouMeanField
            ? s += `
\u2192 Did you forget to wrap it with \`${D.default.greenBright("select")}\`? ${
              D.default.dim(
                "e.g. " +
                  D.default.greenBright(
                    `{ select: { ${t.providedName}: ${t.providedValue} } }`,
                  ),
              )
            }`
            : t.didYouMeanArg
            ? (s += ` Did you mean \`${
              D.default.greenBright(t.didYouMeanArg)
            }\`?`,
              !o && !i && (s += ` ${D.default.dim("Available args:")}
` + hr(t.originalType, !0)))
            : t.originalType.fields.length === 0
            ? s += ` The field ${
              D.default.bold(t.originalType.name)
            } has no arguments.`
            : !o && !i && (s += ` Available args:

` + hr(t.originalType, !0)),
            s;
        }
        if (t.type === "invalidType") {
          let s = pn(t.providedValue, { indent: "  " }),
            a = s.split(`
`).length > 1;
          if (
            a && (s = `
${s}
`), t.requiredType.bestFittingType.location === "enumTypes"
          ) {
            return `Argument ${D.default.bold(t.argName)}: Provided value ${
              D.default.redBright(s)
            }${a ? "" : " "}of type ${
              D.default.redBright(yr(t.providedValue))
            } on ${
              D.default.bold(`prisma.${this.children[0].name}`)
            } is not a ${
              D.default.greenBright(
                on(
                  gr(t.requiredType.bestFittingType.type),
                  t.requiredType.bestFittingType.isList,
                ),
              )
            }.
\u2192 Possible values: ${
              t.requiredType.bestFittingType.type.values.map((g) =>
                D.default.greenBright(
                  `${gr(t.requiredType.bestFittingType.type)}.${g}`,
                )
              ).join(", ")
            }`;
          }
          let c = ".";
          xr(t.requiredType.bestFittingType.type) && (c = `:
` + hr(t.requiredType.bestFittingType.type));
          let l = `${
              t.requiredType.inputType.map((g) =>
                D.default.greenBright(
                  on(gr(g.type), t.requiredType.bestFittingType.isList),
                )
              ).join(" or ")
            }${c}`,
            p = t.requiredType.inputType.length === 2 &&
                t.requiredType.inputType.find((g) => xr(g.type)) || null;
          return p && (l += `
` + hr(p.type, !0)),
            `Argument ${D.default.bold(t.argName)}: Got invalid value ${
              D.default.redBright(s)
            }${a ? "" : " "}on ${
              D.default.bold(`prisma.${this.children[0].name}`)
            }. Provided ${
              D.default.redBright(yr(t.providedValue))
            }, expected ${l}`;
        }
        if (t.type === "invalidNullArg") {
          let s = r.length === 1 && r[0] === t.name
              ? ""
              : ` for ${D.default.bold(`${r.join(".")}`)}`,
            a = ` Please use ${
              D.default.bold.greenBright("undefined")
            } instead.`;
          return `Argument ${D.default.greenBright(t.name)}${s} must not be ${
            D.default.bold("null")
          }.${a}`;
        }
        if (t.type === "missingArg") {
          let s = r.length === 1 && r[0] === t.missingName
            ? ""
            : ` for ${D.default.bold(`${r.join(".")}`)}`;
          return `Argument ${
            D.default.greenBright(t.missingName)
          }${s} is missing.`;
        }
        if (t.type === "atLeastOne") {
          let s = i
              ? ""
              : ` Available args are listed in ${
                D.default.dim.green("green")
              }.`,
            a = t.atLeastFields
              ? ` and at least one argument for ${
                t.atLeastFields.map((c) => D.default.bold(c)).join(", or ")
              }`
              : "";
          return `Argument ${D.default.bold(r.join("."))} of type ${
            D.default.bold(t.inputType.name)
          } needs ${D.default.greenBright("at least one")} argument${
            D.default.bold(a)
          }.${s}`;
        }
        if (t.type === "atMostOne") {
          let s = i
            ? ""
            : ` Please choose one. ${D.default.dim("Available args:")} 
${hr(t.inputType, !0)}`;
          return `Argument ${D.default.bold(r.join("."))} of type ${
            D.default.bold(t.inputType.name)
          } needs ${
            D.default.greenBright("exactly one")
          } argument, but you provided ${
            t.providedKeys.map((a) => D.default.redBright(a)).join(" and ")
          }.${s}`;
        }
      }, "printArgError");
      this.type = t, this.children = r;
    }
    get [Symbol.toStringTag]() {
      return "Document";
    }
    toString() {
      return `${this.type} {
${
        (0, $t.default)(
          this.children.map(String).join(`
`),
          fn,
        )
      }
}`;
    }
    validate(t, r = !1, n, o, i) {
      var O;
      t || (t = {});
      let s = this.children.filter((T) => T.hasInvalidChild || T.hasInvalidArg);
      if (s.length === 0) return;
      let a = [],
        c = [],
        l = t && t.select ? "select" : t.include ? "include" : void 0;
      for (let T of s) {
        let M = T.collectErrors(l);
        a.push(
          ...M.fieldErrors.map((P) => ({
            ...P,
            path: r ? P.path : P.path.slice(1),
          })),
        ),
          c.push(
            ...M.argErrors.map((P) => ({
              ...P,
              path: r ? P.path : P.path.slice(1),
            })),
          );
      }
      let p = this.children[0].name,
        g = r ? this.type : p,
        y = [],
        b = [],
        v = [];
      for (let T of a) {
        let M = this.normalizePath(T.path, t).join(".");
        if (T.error.type === "invalidFieldName") {
          y.push(M);
          let P = T.error.outputType, { isInclude: S } = T.error;
          P.fields.filter((_) =>
            S ? _.outputType.location === "outputObjectTypes" : !0
          ).forEach((_) => {
            let F = M.split(".");
            v.push({
              path: `${F.slice(0, F.length - 1).join(".")}.${_.name}`,
              type: "true",
              isRequired: !1,
            });
          });
        } else {T.error.type === "includeAndSelect"
            ? (y.push("select"), y.push("include"))
            : b.push(M);}
        if (
          T.error.type === "emptySelect" || T.error.type === "noTrueSelect" ||
          T.error.type === "emptyInclude"
        ) {
          let P = this.normalizePath(T.path, t),
            S = P.slice(0, P.length - 1).join(".");
          (O = T.error.field.outputType.type.fields) == null ||
            O.filter((F) =>
              T.error.type === "emptyInclude"
                ? F.outputType.location === "outputObjectTypes"
                : !0
            ).forEach((F) => {
              v.push({ path: `${S}.${F.name}`, type: "true", isRequired: !1 });
            });
        }
      }
      for (let T of c) {
        let M = this.normalizePath(T.path, t).join(".");
        if (T.error.type === "invalidName") y.push(M);
        else if (
          T.error.type !== "missingArg" && T.error.type !== "atLeastOne"
        ) b.push(M);
        else if (T.error.type === "missingArg") {
          let P = T.error.missingArg.inputTypes.length === 1
            ? T.error.missingArg.inputTypes[0].type
            : T.error.missingArg.inputTypes.map((S) => {
              let _ = nn(S.type);
              return _ === "Null" ? "null" : S.isList ? _ + "[]" : _;
            }).join(" | ");
          v.push({
            path: M,
            type: zi(P, !0, M.split("where.").length === 2),
            isRequired: T.error.missingArg.isRequired,
          });
        }
      }
      let h = u((T) => {
          let M = c.some((G) =>
              G.error.type === "missingArg" && G.error.missingArg.isRequired
            ),
            P = Boolean(
              c.find((G) =>
                G.error.type === "missingArg" && !G.error.missingArg.isRequired
              ),
            ),
            S = P || M,
            _ = "";
          M && (_ += `
${D.default.dim("Note: Lines with ")}${D.default.reset.greenBright("+")} ${
            D.default.dim("are required")
          }`),
            P && (_.length === 0 && (_ = `
`),
              M
                ? _ += D.default.dim(
                  `, lines with ${D.default.green("?")} are optional`,
                )
                : _ += D.default.dim(
                  `Note: Lines with ${D.default.green("?")} are optional`,
                ),
              _ += D.default.dim("."));
          let j = c.filter((G) =>
            G.error.type !== "missingArg" || G.error.missingArg.isRequired
          ).map((G) => this.printArgError(G, S, o === "minimal")).join(`
`);
          if (
            j += `
${
              a.map((G) => this.printFieldError(G, v, o === "minimal")).join(`
`)
            }`, o === "minimal"
          ) return (0, ns.default)(j);
          let V = {
            ast: r ? { [p]: t } : t,
            keyPaths: y,
            valuePaths: b,
            missingItems: v,
          };
          n != null && n.endsWith("aggregate") && (V = yg(V));
          let te = wr({
            callsite: T,
            originalMethod: n || g,
            showColors: o && o === "pretty",
            callArguments: vo(V),
            message: `${j}${_}
`,
          });
          return w.env.NO_COLOR || o === "colorless" ? (0, ns.default)(te) : te;
        }, "renderErrorStr"),
        A = new xe(h(i));
      throw w.env.NODE_ENV !== "production" &&
        Object.defineProperty(A, "render", { get: () => h, enumerable: !1 }),
        A;
    }
    normalizePath(t, r) {
      let n = t.slice(), o = [], i, s = r;
      for (; (i = n.shift()) !== void 0;) {
        !Array.isArray(s) && i === 0 ||
          (i === "select"
            ? s[i] ? s = s[i] : s = s.include
            : s && s[i] && (s = s[i]),
            o.push(i));
      }
      return o;
    }
  };
u(Ao, "Document");
var xe = class extends Error {
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
u(xe, "PrismaClientValidationError");
var oe = class extends Error {
  constructor(t) {
    super(
      t + `
Read more at https://pris.ly/d/client-constructor`,
    );
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
u(oe, "PrismaClientConstructorValidationError");
var me = class {
  constructor({ name: t, args: r, children: n, error: o, schemaField: i }) {
    this.name = t,
      this.args = r,
      this.children = n,
      this.error = o,
      this.schemaField = i,
      this.hasInvalidChild = n
        ? n.some((s) =>
          Boolean(s.error || s.hasInvalidArg || s.hasInvalidChild)
        )
        : !1,
      this.hasInvalidArg = r ? r.hasInvalidArg : !1;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    let t = this.name;
    return this.error
      ? t + " # INVALID_FIELD"
      : (this.args && this.args.args && this.args.args.length > 0 &&
        (this.args.args.length === 1
          ? t += `(${this.args.toString()})`
          : t += `(
${(0, $t.default)(this.args.toString(), fn)}
)`),
        this.children && (t += ` {
${
          (0, $t.default)(
            this.children.map(String).join(`
`),
            fn,
          )
        }
}`),
        t);
  }
  collectErrors(t = "select") {
    let r = [], n = [];
    if (
      this.error && r.push({ path: [this.name], error: this.error }),
        this.children
    ) {
      for (let o of this.children) {
        let i = o.collectErrors(t);
        r.push(
          ...i.fieldErrors.map((s) => ({
            ...s,
            path: [this.name, t, ...s.path],
          })),
        ),
          n.push(
            ...i.argErrors.map((s) => ({
              ...s,
              path: [this.name, t, ...s.path],
            })),
          );
      }
    }
    return this.args &&
      n.push(
        ...this.args.collectErrors().map((o) => ({
          ...o,
          path: [this.name, ...o.path],
        })),
      ),
      { fieldErrors: r, argErrors: n };
  }
};
u(me, "Field");
var de = class {
  constructor(t = []) {
    this.args = t,
      this.hasInvalidArg = t ? t.some((r) => Boolean(r.hasError)) : !1;
  }
  get [Symbol.toStringTag]() {
    return "Args";
  }
  toString() {
    return this.args.length === 0
      ? ""
      : `${
        this.args.map((t) => t.toString()).filter((t) => t).join(`
`)
      }`;
  }
  collectErrors() {
    return this.hasInvalidArg
      ? this.args.flatMap((t) => t.collectErrors())
      : [];
  }
};
u(de, "Args");
function ts(e, t) {
  return x.Buffer.isBuffer(e)
    ? JSON.stringify(e.toString("base64"))
    : e instanceof Re
    ? `{ _ref: ${JSON.stringify(e.name)}}`
    : Object.prototype.toString.call(e) === "[object BigInt]"
    ? e.toString()
    : typeof (t == null ? void 0 : t.type) == "string" && t.type === "Json"
    ? e === null
      ? "null"
      : e && e.values && e.__prismaRawParameters__
      ? JSON.stringify(e.values)
      : (t == null ? void 0 : t.isList) && Array.isArray(e)
      ? JSON.stringify(e.map((r) => JSON.stringify(r)))
      : JSON.stringify(JSON.stringify(e))
    : e === void 0
    ? null
    : e === null
    ? "null"
    : He.isDecimal(e) || (t == null ? void 0 : t.type) === "Decimal" && go(e)
    ? uc(e)
    : (t == null ? void 0 : t.location) === "enumTypes" && typeof e == "string"
    ? Array.isArray(e) ? `[${e.join(", ")}]` : e
    : typeof e == "number" && (t == null ? void 0 : t.type) === "Float"
    ? e.toExponential()
    : JSON.stringify(e, null, 2);
}
u(ts, "stringify");
var Fe = class {
  constructor(
    { key: t, value: r, isEnum: n = !1, error: o, schemaArg: i, inputType: s },
  ) {
    this.inputType = s,
      this.key = t,
      this.value = r instanceof Me ? r._getName() : r,
      this.isEnum = n,
      this.error = o,
      this.schemaArg = i,
      this.isNullable = (i == null
        ? void 0
        : i.inputTypes.reduce((a) => a && i.isNullable, !0)) || !1,
      this.hasError = Boolean(o) || (r instanceof de ? r.hasInvalidArg : !1) ||
        Array.isArray(r) &&
          r.some((a) => a instanceof de ? a.hasInvalidArg : !1);
  }
  get [Symbol.toStringTag]() {
    return "Arg";
  }
  _toString(t, r) {
    var n;
    if (typeof t != "undefined") {
      if (t instanceof de) {
        return `${r}: {
${(0, $t.default)(t.toString(), 2)}
}`;
      }
      if (Array.isArray(t)) {
        if (((n = this.inputType) == null ? void 0 : n.type) === "Json") {
          return `${r}: ${ts(t, this.inputType)}`;
        }
        let o = !t.some((i) => typeof i == "object");
        return `${r}: [${
          o ? "" : `
`
        }${
          (0, $t.default)(
            t.map((i) =>
              i instanceof de
                ? `{
${(0, $t.default)(i.toString(), fn)}
}`
                : ts(i, this.inputType)
            ).join(`,${
              o ? " " : `
`
            }`),
            o ? 0 : fn,
          )
        }${
          o ? "" : `
`
        }]`;
      }
      return `${r}: ${ts(t, this.inputType)}`;
    }
  }
  toString() {
    return this._toString(this.value, this.key);
  }
  collectErrors() {
    var r;
    if (!this.hasError) return [];
    let t = [];
    if (this.error) {
      let n =
        typeof ((r = this.inputType) == null ? void 0 : r.type) == "object"
          ? `${this.inputType.type.name}${this.inputType.isList ? "[]" : ""}`
          : void 0;
      t.push({ error: this.error, path: [this.key], id: n });
    }
    return Array.isArray(this.value)
      ? t.concat(
        this.value.flatMap((n, o) =>
          n != null && n.collectErrors
            ? n.collectErrors().map((i) => ({
              ...i,
              path: [this.key, o, ...i.path],
            }))
            : []
        ),
      )
      : this.value instanceof de
      ? t.concat(
        this.value.collectErrors().map((n) => ({
          ...n,
          path: [this.key, ...n.path],
        })),
      )
      : t;
  }
};
u(Fe, "Arg");
function as(
  {
    dmmf: e,
    rootTypeName: t,
    rootField: r,
    select: n,
    modelName: o,
    extensions: i,
  },
) {
  n || (n = {});
  let s = t === "query" ? e.queryType : e.mutationType,
    a = {
      args: [],
      outputType: { isList: !1, type: s, location: "outputObjectTypes" },
      name: t,
    },
    c = { modelName: o },
    l = zc({
      dmmf: e,
      selection: { [r]: n },
      schemaField: a,
      path: [t],
      context: c,
      extensions: i,
    });
  return new Ao(t, l);
}
u(as, "makeDocument");
function Jc(e) {
  return e;
}
u(Jc, "transformDocument");
function zc(
  { dmmf: e, selection: t, schemaField: r, path: n, context: o, extensions: i },
) {
  let s = r.outputType.type,
    a = o.modelName ? i.getAllComputedFields(o.modelName) : {};
  return t = Ac(t, a),
    Object.entries(t).reduce((c, [l, p]) => {
      let g = s.fieldMap ? s.fieldMap[l] : s.fields.find((M) => M.name === l);
      if (a != null && a[l]) return c;
      if (!g) {
        return c.push(
          new me({
            name: l,
            children: [],
            error: {
              type: "invalidFieldName",
              modelName: s.name,
              providedName: l,
              didYouMean: yo(
                l,
                s.fields.map((M) => M.name).concat(
                  Object.keys(a != null ? a : {}),
                ),
              ),
              outputType: s,
            },
          }),
        ),
          c;
      }
      if (
        g.outputType.location === "scalar" && g.args.length === 0 &&
        typeof p != "boolean"
      ) {
        return c.push(
          new me({
            name: l,
            children: [],
            error: {
              type: "invalidFieldType",
              modelName: s.name,
              fieldName: l,
              providedValue: p,
            },
          }),
        ),
          c;
      }
      if (p === !1) return c;
      let y = {
          name: g.name,
          fields: g.args,
          constraints: { minNumFields: null, maxNumFields: null },
        },
        b = typeof p == "object" ? $c(p, ["include", "select"]) : void 0,
        v = b
          ? To(b, y, o, [], typeof g == "string" ? void 0 : g.outputType.type)
          : void 0,
        h = g.outputType.location === "outputObjectTypes";
      if (p) {
        if (p.select && p.include) {
          c.push(
            new me({
              name: l,
              children: [
                new me({
                  name: "include",
                  args: new de(),
                  error: { type: "includeAndSelect", field: g },
                }),
              ],
            }),
          );
        } else if (p.include) {
          let M = Object.keys(p.include);
          if (M.length === 0) {
            return c.push(
              new me({
                name: l,
                children: [
                  new me({
                    name: "include",
                    args: new de(),
                    error: { type: "emptyInclude", field: g },
                  }),
                ],
              }),
            ),
              c;
          }
          if (g.outputType.location === "outputObjectTypes") {
            let P = g.outputType.type,
              S = P.fields.filter((F) =>
                F.outputType.location === "outputObjectTypes"
              ).map((F) => F.name),
              _ = M.filter((F) => !S.includes(F));
            if (_.length > 0) {
              return c.push(..._.map((F) =>
                new me({
                  name: F,
                  children: [
                    new me({
                      name: F,
                      args: new de(),
                      error: {
                        type: "invalidFieldName",
                        modelName: P.name,
                        outputType: P,
                        providedName: F,
                        didYouMean: yo(F, S) || void 0,
                        isInclude: !0,
                        isIncludeScalar: P.fields.some((j) => j.name === F),
                      },
                    }),
                  ],
                })
              )),
                c;
            }
          }
        } else if (p.select) {
          let M = Object.values(p.select);
          if (M.length === 0) {
            return c.push(
              new me({
                name: l,
                children: [
                  new me({
                    name: "select",
                    args: new de(),
                    error: { type: "emptySelect", field: g },
                  }),
                ],
              }),
            ),
              c;
          }
          if (M.filter((S) => S).length === 0) {
            return c.push(
              new me({
                name: l,
                children: [
                  new me({
                    name: "select",
                    args: new de(),
                    error: { type: "noTrueSelect", field: g },
                  }),
                ],
              }),
            ),
              c;
          }
        }
      }
      let A = h ? cg(e, g.outputType.type) : null, O = A;
      p && (p.select
        ? O = p.select
        : p.include
        ? O = ln(A, p.include)
        : p.by && Array.isArray(p.by) && g.outputType.namespace === "prisma" &&
          g.outputType.location === "outputObjectTypes" &&
          pc(g.outputType.type.name) && (O = ug(p.by)));
      let T;
      if (O !== !1 && h) {
        let M = o.modelName;
        typeof g.outputType.type == "object" &&
        g.outputType.namespace === "model" &&
        g.outputType.location === "outputObjectTypes" &&
        (M = g.outputType.type.name),
          T = zc({
            dmmf: e,
            selection: O,
            schemaField: g,
            path: [...n, l],
            context: { modelName: M },
            extensions: i,
          });
      }
      return c.push(new me({ name: l, args: v, children: T, schemaField: g })),
        c;
    }, []);
}
u(zc, "selectionToFields");
function ug(e) {
  let t = Object.create(null);
  for (let r of e) t[r] = !0;
  return t;
}
u(ug, "byToSelect");
function cg(e, t) {
  let r = Object.create(null);
  for (let n of t.fields) {
    e.typeMap[n.outputType.type.name] !== void 0 && (r[n.name] = !0),
      (n.outputType.location === "scalar" ||
        n.outputType.location === "enumTypes") && (r[n.name] = !0);
  }
  return r;
}
u(cg, "getDefaultSelection");
function os(e, t, r, n) {
  return new Fe({
    key: e,
    value: t,
    isEnum: n.location === "enumTypes",
    inputType: n,
    error: {
      type: "invalidType",
      providedValue: t,
      argName: e,
      requiredType: { inputType: r.inputTypes, bestFittingType: n },
    },
  });
}
u(os, "getInvalidTypeArg");
function Hc(e, t, r) {
  let { isList: n } = t, o = lg(t, r), i = yr(e, t);
  return i === o || n && i === "List<>" ||
      o === "Json" && i !== "Symbol" && !(e instanceof Me) &&
        !(e instanceof Re) ||
      i === "Int" && o === "BigInt" ||
      (i === "Int" || i === "Float") && o === "Decimal" ||
      i === "DateTime" && o === "String" || i === "UUID" && o === "String" ||
      i === "String" && o === "ID" || i === "Int" && o === "Float" ||
      i === "Int" && o === "Long" ||
      i === "String" && o === "Decimal" && pg(e) || e === null
    ? !0
    : t.isList && Array.isArray(e)
    ? e.every((s) => Hc(s, { ...t, isList: !1 }, r))
    : !1;
}
u(Hc, "hasCorrectScalarType");
function lg(e, t, r = e.isList) {
  let n = gr(e.type);
  return e.location === "fieldRefTypes" && t.modelName &&
    (n += `<${t.modelName}>`),
    on(n, r);
}
u(lg, "getExpectedType");
var Po = u((e) => Nc(e, (t, r) => r !== void 0), "cleanObject");
function pg(e) {
  return /^\-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i.test(e);
}
u(pg, "isDecimalString");
function fg(e, t, r, n) {
  let o = null, i = [];
  for (let s of r.inputTypes) {
    if (
      o = dg(e, t, r, s, n),
        (o == null ? void 0 : o.collectErrors().length) === 0
    ) return o;
    if (o && (o == null ? void 0 : o.collectErrors())) {
      let a = o == null ? void 0 : o.collectErrors();
      a && a.length > 0 && i.push({ arg: o, errors: a });
    }
  }
  if ((o == null ? void 0 : o.hasError) && i.length > 0) {
    let s = i.map(({ arg: a, errors: c }) => {
      let l = c.map((p) => {
        let g = 1;
        return p.error.type === "invalidType" &&
          (g = 2 * Math.exp(Wc(p.error.providedValue)) + 1),
          g += Math.log(p.path.length),
          p.error.type === "missingArg" && a.inputType &&
          xr(a.inputType.type) && a.inputType.type.name.includes("Unchecked") &&
          (g *= 2),
          p.error.type === "invalidName" && xr(p.error.originalType) &&
          p.error.originalType.name.includes("Unchecked") && (g *= 2),
          g;
      });
      return { score: c.length + mg(l), arg: a, errors: c };
    });
    return s.sort((a, c) => a.score < c.score ? -1 : 1), s[0].arg;
  }
  return o;
}
u(fg, "valueToArg");
function Wc(e) {
  let t = 1;
  if (!e || typeof e != "object") return t;
  for (let r in e) {
    if (
      !!Object.prototype.hasOwnProperty.call(e, r) && typeof e[r] == "object"
    ) {
      let n = Wc(e[r]) + 1;
      t = Math.max(n, t);
    }
  }
  return t;
}
u(Wc, "getDepth");
function mg(e) {
  return e.reduce((t, r) => t + r, 0);
}
u(mg, "sum");
function dg(e, t, r, n, o) {
  var p, g, y, b, v;
  if (typeof t == "undefined") {
    return r.isRequired
      ? new Fe({
        key: e,
        value: t,
        isEnum: n.location === "enumTypes",
        inputType: n,
        error: {
          type: "missingArg",
          missingName: e,
          missingArg: r,
          atLeastOne: !1,
          atMostOne: !1,
        },
      })
      : null;
  }
  let { isNullable: i, isRequired: s } = r;
  if (
    t === null && !i && !s &&
    !(xr(n.type)
      ? n.type.constraints.minNumFields !== null &&
        n.type.constraints.minNumFields > 0
      : !1)
  ) {
    return new Fe({
      key: e,
      value: t,
      isEnum: n.location === "enumTypes",
      inputType: n,
      error: {
        type: "invalidNullArg",
        name: e,
        invalidType: r.inputTypes,
        atLeastOne: !1,
        atMostOne: !1,
      },
    });
  }
  if (!n.isList) {
    if (xr(n.type)) {
      if (
        typeof t != "object" || Array.isArray(t) ||
        n.location === "inputObjectTypes" && !jc(t)
      ) return os(e, t, r, n);
      {
        let h = Po(t), A, O = Object.keys(h || {}), T = O.length;
        return T === 0 && typeof n.type.constraints.minNumFields == "number" &&
              n.type.constraints.minNumFields > 0 ||
            ((p = n.type.constraints.fields) == null
                ? void 0
                : p.some((M) => O.includes(M))) === !1
          ? A = {
            type: "atLeastOne",
            key: e,
            inputType: n.type,
            atLeastFields: n.type.constraints.fields,
          }
          : T > 1 && typeof n.type.constraints.maxNumFields == "number" &&
            n.type.constraints.maxNumFields < 2 &&
            (A = {
              type: "atMostOne",
              key: e,
              inputType: n.type,
              providedKeys: O,
            }),
          new Fe({
            key: e,
            value: h === null ? null : To(h, n.type, o, r.inputTypes),
            isEnum: n.location === "enumTypes",
            error: A,
            inputType: n,
            schemaArg: r,
          });
      }
    } else return Kc(e, t, r, n, o);
  }
  if (
    !Array.isArray(t) && n.isList && e !== "updateMany" && (t = [t]),
      n.location === "enumTypes" || n.location === "scalar"
  ) return Kc(e, t, r, n, o);
  let a = n.type,
    l = (typeof ((g = a.constraints) == null ? void 0 : g.minNumFields) ==
            "number" &&
          ((y = a.constraints) == null ? void 0 : y.minNumFields) > 0
        ? Array.isArray(t) &&
          t.some((h) => !h || Object.keys(Po(h)).length === 0)
        : !1)
      ? { inputType: a, key: e, type: "atLeastOne" }
      : void 0;
  if (!l) {
    let h = typeof ((b = a.constraints) == null ? void 0 : b.maxNumFields) ==
          "number" &&
        ((v = a.constraints) == null ? void 0 : v.maxNumFields) < 2
      ? Array.isArray(t) &&
        t.find((A) => !A || Object.keys(Po(A)).length !== 1)
      : !1;
    h &&
      (l = {
        inputType: a,
        key: e,
        type: "atMostOne",
        providedKeys: Object.keys(h),
      });
  }
  if (!Array.isArray(t)) {
    for (let h of r.inputTypes) {
      let A = To(t, h.type, o);
      if (A.collectErrors().length === 0) {
        return new Fe({
          key: e,
          value: A,
          isEnum: !1,
          schemaArg: r,
          inputType: h,
        });
      }
    }
  }
  return new Fe({
    key: e,
    value: t.map((h) =>
      n.isList && typeof h != "object"
        ? h
        : typeof h != "object" || !t
        ? os(e, h, r, n)
        : To(h, a, o)
    ),
    isEnum: !1,
    inputType: n,
    schemaArg: r,
    error: l,
  });
}
u(dg, "tryInferArgs");
function xr(e) {
  return !(typeof e == "string" || Object.hasOwnProperty.call(e, "values"));
}
u(xr, "isInputArgType");
function Kc(e, t, r, n, o) {
  return Hc(t, n, o)
    ? new Fe({
      key: e,
      value: t,
      isEnum: n.location === "enumTypes",
      schemaArg: r,
      inputType: n,
    })
    : os(e, t, r, n);
}
u(Kc, "scalarToArg");
function To(e, t, r, n, o) {
  var y;
  (y = t.meta) != null && y.source && (r = { modelName: t.meta.source });
  let i = Po(e),
    { fields: s, fieldMap: a } = t,
    c = s.map((b) => [b.name, void 0]),
    l = Object.entries(i || {}),
    g = lc(l, c, (b) => b[0]).reduce((b, [v, h]) => {
      let A = a ? a[v] : s.find((T) => T.name === v);
      if (!A) {
        let T = typeof h == "boolean" && o && o.fields.some((M) => M.name === v)
          ? v
          : null;
        return b.push(
          new Fe({
            key: v,
            value: h,
            error: {
              type: "invalidName",
              providedName: v,
              providedValue: h,
              didYouMeanField: T,
              didYouMeanArg: !T && yo(v, [...s.map((M) => M.name), "select"]) ||
                void 0,
              originalType: t,
              possibilities: n,
              outputType: o,
            },
          }),
        ),
          b;
      }
      let O = fg(v, h, A, r);
      return O && b.push(O), b;
    }, []);
  if (
    typeof t.constraints.minNumFields == "number" &&
      l.length < t.constraints.minNumFields || g.find((b) => {
        var v, h;
        return ((v = b.error) == null ? void 0 : v.type) === "missingArg" ||
          ((h = b.error) == null ? void 0 : h.type) === "atLeastOne";
      })
  ) {
    let b = t.fields.filter((v) =>
      !v.isRequired && i &&
      (typeof i[v.name] == "undefined" || i[v.name] === null)
    );
    g.push(...b.map((v) => {
      let h = v.inputTypes[0];
      return new Fe({
        key: v.name,
        value: void 0,
        isEnum: h.location === "enumTypes",
        error: {
          type: "missingArg",
          missingName: v.name,
          missingArg: v,
          atLeastOne: Boolean(t.constraints.minNumFields) || !1,
          atMostOne: t.constraints.maxNumFields === 1 || !1,
        },
        inputType: h,
      });
    }));
  }
  return new de(g);
}
u(To, "objectToArgs");
function us({ document: e, path: t, data: r }) {
  let n = Yi(r, t);
  if (n === "undefined") return null;
  if (typeof n != "object") return n;
  let o = gg(e, t);
  return is({ field: o, data: n });
}
u(us, "unpack");
function is({ field: e, data: t }) {
  var n;
  if (!t || typeof t != "object" || !e.children || !e.schemaField) return t;
  let r = {
    DateTime: (o) => new Date(o),
    Json: (o) => JSON.parse(o),
    Bytes: (o) => x.Buffer.from(o, "base64"),
    Decimal: (o) => new He(o),
    BigInt: (o) => BigInt(o),
  };
  for (let o of e.children) {
    let i = (n = o.schemaField) == null ? void 0 : n.outputType.type;
    if (i && typeof i == "string") {
      let s = r[i];
      if (s) {
        if (Array.isArray(t)) {
          for (let a of t) {
            typeof a[o.name] != "undefined" && a[o.name] !== null &&
              (Array.isArray(a[o.name])
                ? a[o.name] = a[o.name].map(s)
                : a[o.name] = s(a[o.name]));
          }
        } else {typeof t[o.name] != "undefined" && t[o.name] !== null &&
            (Array.isArray(t[o.name])
              ? t[o.name] = t[o.name].map(s)
              : t[o.name] = s(t[o.name]));}
      }
    }
    if (
      o.schemaField && o.schemaField.outputType.location === "outputObjectTypes"
    ) {
      if (Array.isArray(t)) for (let s of t) is({ field: o, data: s[o.name] });
      else is({ field: o, data: t[o.name] });
    }
  }
  return t;
}
u(is, "mapScalars");
function gg(e, t) {
  let r = t.slice(), n = r.shift(), o = e.children.find((i) => i.name === n);
  if (!o) throw new Error(`Could not find field ${n} in document ${e}`);
  for (; r.length > 0;) {
    let i = r.shift();
    if (!o.children) {
      throw new Error(`Can't get children for field ${o} with child ${i}`);
    }
    let s = o.children.find((a) => a.name === i);
    if (!s) throw new Error(`Can't find child ${i} of field ${o}`);
    o = s;
  }
  return o;
}
u(gg, "getField");
function rs(e) {
  return e.split(".").filter((t) => t !== "select").join(".");
}
u(rs, "removeSelectFromPath");
function ss(e) {
  if (Object.prototype.toString.call(e) === "[object Object]") {
    let r = {};
    for (let n in e) {
      if (n === "select") for (let o in e.select) r[o] = ss(e.select[o]);
      else r[n] = ss(e[n]);
    }
    return r;
  }
  return e;
}
u(ss, "removeSelectFromObject");
function yg({ ast: e, keyPaths: t, missingItems: r, valuePaths: n }) {
  let o = t.map(rs),
    i = n.map(rs),
    s = r.map((c) => ({
      path: rs(c.path),
      isRequired: c.isRequired,
      type: c.type,
    }));
  return { ast: ss(e), keyPaths: o, missingItems: s, valuePaths: i };
}
u(yg, "transformAggregatePrintJsonArgs");
d();
f();
m();
d();
f();
m();
d();
f();
m();
function mn(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
u(mn, "addObjectProperties");
d();
f();
m();
function Lt(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
u(Lt, "addProperty");
d();
f();
m();
function Bt(e) {
  let t = new $e();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      var n;
      return (n = e.getPropertyDescriptor) == null ? void 0 : n.call(e, r);
    },
  };
}
u(Bt, "cacheProperties");
d();
f();
m();
d();
f();
m();
var Mo = { enumerable: !0, configurable: !0, writable: !0 };
function Oo(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => Mo,
    has: (r, n) => t.has(n),
    set: (r, n, o) => t.add(n) && Reflect.set(r, n, o),
    ownKeys: () => [...t],
  };
}
u(Oo, "defaultProxyHandlers");
function Mt(e, t) {
  let r = hg(t), n = new Set();
  return new Proxy(e, {
    get(o, i) {
      if (n.has(i)) return o[i];
      let s = r.get(i);
      return s ? s.getPropertyValue(i) : o[i];
    },
    has(o, i) {
      var a, c;
      if (n.has(i)) return !0;
      let s = r.get(i);
      return s
        ? (c = (a = s.has) == null ? void 0 : a.call(s, i)) != null ? c : !0
        : Reflect.has(o, i);
    },
    ownKeys(o) {
      let i = Qc(Reflect.ownKeys(o), r), s = Qc(Array.from(r.keys()), r);
      return [...new Set([...i, ...s, ...n])];
    },
    set(o, i, s) {
      var c, l;
      let a = r.get(i);
      return ((l = (c = a == null ? void 0 : a.getPropertyDescriptor) == null
            ? void 0
            : c.call(a, i)) == null
          ? void 0
          : l.writable) === !1
        ? !1
        : (n.add(i), Reflect.set(o, i, s));
    },
    getOwnPropertyDescriptor(o, i) {
      let s = r.get(i);
      return s && s.getPropertyDescriptor
        ? { ...Mo, ...s.getPropertyDescriptor(i) }
        : Mo;
    },
  });
}
u(Mt, "createCompositeProxy");
function hg(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let o of n) t.set(o, r);
  }
  return t;
}
u(hg, "mapKeysToLayers");
function Qc(e, t) {
  return e.filter((r) => {
    var o, i;
    let n = t.get(r);
    return (i = (o = n == null ? void 0 : n.has) == null
        ? void 0
        : o.call(n, r)) != null
      ? i
      : !0;
  });
}
u(Qc, "getExistingKeys");
d();
f();
m();
function cs(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
u(cs, "removeProperties");
d();
f();
m();
d();
f();
m();
d();
f();
m();
var dn = "<unknown>";
function Yc(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var o = xg(n) || vg(n) || Tg(n) || Cg(n) || Og(n);
    return o && r.push(o), r;
  }, []);
}
u(Yc, "parse");
var bg =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  wg = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function xg(e) {
  var t = bg.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf("native") === 0,
    n = t[2] && t[2].indexOf("eval") === 0,
    o = wg.exec(t[2]);
  return n && o != null && (t[2] = o[1], t[3] = o[2], t[4] = o[3]), {
    file: r ? null : t[2],
    methodName: t[1] || dn,
    arguments: r ? [t[2]] : [],
    lineNumber: t[3] ? +t[3] : null,
    column: t[4] ? +t[4] : null,
  };
}
u(xg, "parseChrome");
var Eg =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function vg(e) {
  var t = Eg.exec(e);
  return t
    ? {
      file: t[2],
      methodName: t[1] || dn,
      arguments: [],
      lineNumber: +t[3],
      column: t[4] ? +t[4] : null,
    }
    : null;
}
u(vg, "parseWinjs");
var Ag =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  Pg = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Tg(e) {
  var t = Ag.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(" > eval") > -1, n = Pg.exec(t[3]);
  return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), {
    file: t[3],
    methodName: t[1] || dn,
    arguments: t[2] ? t[2].split(",") : [],
    lineNumber: t[4] ? +t[4] : null,
    column: t[5] ? +t[5] : null,
  };
}
u(Tg, "parseGecko");
var Mg = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Og(e) {
  var t = Mg.exec(e);
  return t
    ? {
      file: t[3],
      methodName: t[1] || dn,
      arguments: [],
      lineNumber: +t[4],
      column: t[5] ? +t[5] : null,
    }
    : null;
}
u(Og, "parseJSC");
var Sg =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Cg(e) {
  var t = Sg.exec(e);
  return t
    ? {
      file: t[2],
      methodName: t[1] || dn,
      arguments: [],
      lineNumber: +t[3],
      column: t[4] ? +t[4] : null,
    }
    : null;
}
u(Cg, "parseNode");
var So = class {
  getLocation() {
    return null;
  }
};
u(So, "DisabledCallSite");
var Co = class {
  constructor() {
    this._error = new Error();
  }
  getLocation() {
    let t = this._error.stack;
    if (!t) return null;
    let n = Yc(t).find((o) =>
      o.file && o.file !== "<anonymous>" && !o.file.includes("@prisma") &&
      !o.file.includes("getPrismaClient") && !o.file.startsWith("internal/") &&
      !o.methodName.includes("new ") && !o.methodName.includes("getCallSite") &&
      !o.methodName.includes("Proxy.") && o.methodName.split(".").length < 4
    );
    return !n || !n.file
      ? null
      : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
  }
};
u(Co, "EnabledCallSite");
function it(e) {
  return e === "minimal" ? new So() : new Co();
}
u(it, "getCallSite");
d();
f();
m();
function Qe(e) {
  let t,
    r = u((n, o, i = !0) => {
      try {
        return i === !0 ? t != null ? t : t = Zc(e(n, o)) : Zc(e(n, o));
      } catch (s) {
        return Promise.reject(s);
      }
    }, "_callback");
  return {
    then(n, o, i) {
      return r(ls(i), void 0).then(n, o, i);
    },
    catch(n, o) {
      return r(ls(o), void 0).catch(n, o);
    },
    finally(n, o) {
      return r(ls(o), void 0).finally(n, o);
    },
    requestTransaction(n, o) {
      let i = { kind: "batch", ...n }, s = r(i, o, !1);
      return s.requestTransaction ? s.requestTransaction(i, o) : s;
    },
    [Symbol.toStringTag]: "PrismaPromise",
  };
}
u(Qe, "createPrismaPromise");
function ls(e) {
  if (e) return { kind: "itx", ...e };
}
u(ls, "createItx");
function Zc(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
u(Zc, "valueToPromise");
d();
f();
m();
d();
f();
m();
d();
f();
m();
var Xc = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function Er(e = {}) {
  let t = Rg(e);
  return Object.entries(t).reduce(
    (
      n,
      [o, i],
    ) => (Xc[o] !== void 0 ? n.select[o] = { select: i } : n[o] = i, n),
    { select: {} },
  );
}
u(Er, "desugarUserArgs");
function Rg(e = {}) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
u(Rg, "desugarCountInUserArgs");
function Io(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
u(Io, "createUnpacker");
function el(e, t) {
  let r = Io(e);
  return t({ action: "aggregate", unpacker: r, argsMapper: Er })(e);
}
u(el, "aggregate");
d();
f();
m();
function _g(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == "object"
    ? Er({ ...r, _count: t })
    : Er({ ...r, _count: { _all: !0 } });
}
u(_g, "desugarUserArgs");
function Fg(e = {}) {
  return typeof e.select == "object"
    ? (t) => Io(e)(t)._count
    : (t) => Io(e)(t)._count._all;
}
u(Fg, "createUnpacker");
function tl(e, t) {
  return t({ action: "count", unpacker: Fg(e), argsMapper: _g })(e);
}
u(tl, "count");
d();
f();
m();
function Dg(e = {}) {
  let t = Er(e);
  if (Array.isArray(t.by)) {
    for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
  }
  return t;
}
u(Dg, "desugarUserArgs");
function kg(e = {}) {
  return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" &&
    t.forEach((r) => {
      r._count = r._count._all;
    }),
    t);
}
u(kg, "createUnpacker");
function rl(e, t) {
  return t({ action: "groupBy", unpacker: kg(e), argsMapper: Dg })(e);
}
u(rl, "groupBy");
function nl(e, t, r) {
  if (t === "aggregate") return (n) => el(n, r);
  if (t === "count") return (n) => tl(n, r);
  if (t === "groupBy") return (n) => rl(n, r);
}
u(nl, "applyAggregates");
d();
f();
m();
function ol(e) {
  let t = e.fields.filter((n) => !n.relationName), r = Di(t, (n) => n.name);
  return new Proxy({}, {
    get(n, o) {
      if (o in n || typeof o == "symbol") return n[o];
      let i = r[o];
      if (i) return new Re(e.name, o, i.type, i.isList);
    },
    ...Oo(Object.keys(r)),
  });
}
u(ol, "applyFieldsProxy");
d();
f();
m();
function Ng(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
u(Ng, "getNextDataPath");
function jg(e, t, r) {
  return t === void 0 ? e != null ? e : {} : Eo(t, r, e || !0);
}
u(jg, "getNextUserArgs");
function ps(e, t, r, n, o, i) {
  let a = e._baseDmmf.modelMap[t].fields.reduce(
    (c, l) => ({ ...c, [l.name]: l }),
    {},
  );
  return (c) => {
    let l = it(e._errorFormat),
      p = Ng(n, o),
      g = jg(c, i, p),
      y = r({ dataPath: p, callsite: l })(g),
      b = $g(e, t);
    return new Proxy(y, {
      get(v, h) {
        if (!b.includes(h)) return v[h];
        let O = [a[h].type, r, h], T = [p, g];
        return ps(e, ...O, ...T);
      },
      ...Oo([...b, ...Object.getOwnPropertyNames(y)]),
    });
  };
}
u(ps, "applyFluent");
function $g(e, t) {
  return e._baseDmmf.modelMap[t].fields.filter((r) => r.kind === "object").map(
    (r) => r.name,
  );
}
u($g, "getOwnKeys");
d();
f();
m();
d();
f();
m();
d();
f();
m();
var Ro = il().version;
var Be = class extends he {
  constructor(t) {
    super(t, { code: "P2025", clientVersion: Ro }), this.name = "NotFoundError";
  }
};
u(Be, "NotFoundError");
function fs(e, t, r, n) {
  let o;
  if (
    r && typeof r == "object" && "rejectOnNotFound" in r &&
    r.rejectOnNotFound !== void 0
  ) o = r.rejectOnNotFound, delete r.rejectOnNotFound;
  else if (typeof n == "boolean") o = n;
  else if (n && typeof n == "object" && e in n) {
    let i = n[e];
    if (i && typeof i == "object") return t in i ? i[t] : void 0;
    o = fs(e, t, r, i);
  } else typeof n == "function" ? o = n : o = !1;
  return o;
}
u(fs, "getRejectOnNotFound");
var Bg = /(findUnique|findFirst)/;
function sl(e, t, r, n) {
  if (n && !e && Bg.exec(t)) {
    throw typeof n == "boolean" && n
      ? new Be(`No ${r} found`)
      : typeof n == "function"
      ? n(new Be(`No ${r} found`))
      : Ir(n)
      ? n
      : new Be(`No ${r} found`);
  }
}
u(sl, "throwIfNotFound");
function al(e, t, r) {
  return e === rt.ModelAction.findFirstOrThrow ||
      e === rt.ModelAction.findUniqueOrThrow
    ? qg(t, r)
    : r;
}
u(al, "adaptErrors");
function qg(e, t) {
  return async (r) => {
    if ("rejectOnNotFound" in r.args) {
      let o = wr({
        originalMethod: r.clientMethod,
        callsite: r.callsite,
        message: "'rejectOnNotFound' option is not supported",
      });
      throw new xe(o);
    }
    return await t(r).catch((o) => {
      throw o instanceof he && o.code === "P2025" ? new Be(`No ${e} found`) : o;
    });
  };
}
u(qg, "applyOrThrowWrapper");
var Ug = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ],
  Vg = ["aggregate", "count", "groupBy"];
function ms(e, t) {
  var o;
  let r = [Gg(e, t)];
  (o = e._engineConfig.previewFeatures) != null &&
    o.includes("fieldReference") && r.push(zg(e, t));
  let n = e._extensions.getAllModelExtensions(t);
  return n && r.push(mn(n)), Mt({}, r);
}
u(ms, "applyModel");
function Gg(e, t) {
  let r = We(t), n = Kg(e, t);
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(o) {
      let i = o, s = u((c) => e._request(c), "requestFn");
      s = al(i, t, s);
      let a = u((c) => (l) => {
        let p = it(e._errorFormat);
        return Qe((g, y) => {
          let b = {
            args: l,
            dataPath: [],
            action: i,
            model: t,
            clientMethod: `${r}.${o}`,
            jsModelName: r,
            transaction: g,
            lock: y,
            callsite: p,
          };
          return s({ ...b, ...c });
        });
      }, "action");
      return Ug.includes(i) ? ps(e, t, a) : Jg(o) ? nl(e, o, a) : a({});
    },
  };
}
u(Gg, "modelActionsLayer");
function Kg(e, t) {
  let r = Object.keys(e._baseDmmf.mappingsMap[t]).filter((n) =>
    n !== "model" && n !== "plural"
  );
  return r.push("count"), r;
}
u(Kg, "getOwnKeys");
function Jg(e) {
  return Vg.includes(e);
}
u(Jg, "isValidAggregateName");
function zg(e, t) {
  return Bt(Lt("fields", () => {
    let r = e._baseDmmf.modelMap[t];
    return ol(r);
  }));
}
u(zg, "fieldsPropertyLayer");
d();
f();
m();
function ul(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
u(ul, "jsToDMMFModelName");
var ds = Symbol();
function _o(e) {
  let t = [Hg(e), Lt(ds, () => e)], r = e._extensions.getAllClientExtensions();
  return r && t.push(mn(r)), Mt(e, t);
}
u(_o, "applyModelsAndClientExtensions");
function Hg(e) {
  let t = Object.keys(e._baseDmmf.modelMap),
    r = t.map(We),
    n = [...new Set(t.concat(r))];
  return Bt({
    getKeys() {
      return n;
    },
    getPropertyValue(o) {
      let i = ul(o);
      if (e._baseDmmf.modelMap[i] !== void 0) return ms(e, i);
      if (e._baseDmmf.modelMap[o] !== void 0) return ms(e, o);
    },
    getPropertyDescriptor(o) {
      if (!r.includes(o)) return { enumerable: !1 };
    },
  });
}
u(Hg, "modelsLayer");
function cl(e) {
  return e[ds] ? e[ds] : e;
}
u(cl, "unapplyModelsAndClientExtensions");
function ll(e) {
  if (!this._hasPreviewFlag("clientExtensions")) {
    throw new xe(
      "Extensions are not yet generally available, please add `clientExtensions` to the `previewFeatures` field in the `generator` block in the `schema.prisma` file.",
    );
  }
  if (typeof e == "function") return e(this);
  let t = cl(this),
    r = Object.create(t, {
      _extensions: { value: this._extensions.append(e) },
    });
  return _o(r);
}
u(ll, "$extends");
d();
f();
m();
d();
f();
m();
function Ye(e) {
  if (typeof e != "object") return e;
  var t, r, n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e) e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = Ye(e[t]));
    } else {
      r = {};
      for (t in e) {
        t === "__proto__"
          ? Object.defineProperty(r, t, {
            value: Ye(e[t]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
          : r[t] = Ye(e[t]);
      }
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--;) r[t] = Ye(e[t]);
    return r;
  }
  return n === "[object Set]"
    ? (r = new Set(),
      e.forEach(function (o) {
        r.add(Ye(o));
      }),
      r)
    : n === "[object Map]"
    ? (r = new Map(),
      e.forEach(function (o, i) {
        r.set(Ye(i), Ye(o));
      }),
      r)
    : n === "[object Date]"
    ? new Date(+e)
    : n === "[object RegExp]"
    ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r)
    : n === "[object DataView]"
    ? new e.constructor(Ye(e.buffer))
    : n === "[object ArrayBuffer]"
    ? e.slice(0)
    : n.slice(-6) === "Array]"
    ? new e.constructor(e)
    : e;
}
u(Ye, "klona");
function pl(e, t, r, n = 0) {
  return r.length === 0 ? e._executeRequest(t) : Qe((o, i) => {
    var s;
    return o !== void 0 &&
      ((s = t.lock) == null || s.then(), t.transaction = o, t.lock = i),
      n === r.length ? e._executeRequest(t) : r[n]({
        model: t.model,
        operation: t.action,
        args: Ye(t.args),
        query: (a) => (t.args = a, pl(e, t, r, n + 1)),
      });
  });
}
u(pl, "iterateAndCallQueryCallbacks");
function fl(e, t) {
  let { jsModelName: r, action: n } = t;
  return r === void 0 || e._extensions.isEmpty()
    ? e._executeRequest(t)
    : pl(e, t, e._extensions.getAllQueryCallbacks(r, n));
}
u(fl, "applyQueryExtensions");
d();
f();
m();
d();
f();
m();
function ml(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
u(ml, "lazyProperty");
var gn = class {
  constructor(t, r) {
    this.extension = t;
    this.previous = r;
    this.computedFieldsCache = new $e();
    this.modelExtensionsCache = new $e();
    this.queryCallbacksCache = new $e();
    this.clientExtensions = ml(() => {
      var t, r;
      return this.extension.client
        ? {
          ...(r = this.previous) == null ? void 0 : r.getAllClientExtensions(),
          ...io(this.extension.name, this.extension.client),
        }
        : (t = this.previous) == null
        ? void 0
        : t.getAllClientExtensions();
    });
  }
  getAllComputedFields(t) {
    return this.computedFieldsCache.getOrCreate(t, () => {
      var r;
      return vc(
        (r = this.previous) == null ? void 0 : r.getAllComputedFields(t),
        this.extension,
        t,
      );
    });
  }
  getAllClientExtensions() {
    return this.clientExtensions.get();
  }
  getAllModelExtensions(t) {
    return this.modelExtensionsCache.getOrCreate(t, () => {
      var n, o;
      let r = We(t);
      return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
        ? (n = this.previous) == null ? void 0 : n.getAllModelExtensions(t)
        : {
          ...(o = this.previous) == null ? void 0 : o.getAllModelExtensions(t),
          ...io(this.extension.name, this.extension.model.$allModels),
          ...io(this.extension.name, this.extension.model[r]),
        };
    });
  }
  getAllQueryCallbacks(t, r) {
    return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
      var s, a;
      let n = (a = (s = this.previous) == null
            ? void 0
            : s.getAllQueryCallbacks(t, r)) != null
          ? a
          : [],
        o = this.extension.query;
      if (!o || !(o[t] || o.$allModels)) {
        return n;
      }
      let i = [];
      return o[t] !== void 0 &&
        (o[t][r] !== void 0 && i.push(o[t][r]),
          o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
        o.$allModels !== void 0 &&
        (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
          o.$allModels.$allOperations !== void 0 &&
          i.push(o.$allModels.$allOperations)),
        n.concat(i.map((c) => Zr(this.extension.name, c)));
    });
  }
};
u(gn, "MergedExtensionsListNode");
var st = class {
  constructor(t) {
    this.head = t;
  }
  static empty() {
    return new st();
  }
  static single(t) {
    return new st(new gn(t));
  }
  isEmpty() {
    return this.head === void 0;
  }
  append(t) {
    return new st(new gn(t, this.head));
  }
  getAllComputedFields(t) {
    var r;
    return (r = this.head) == null ? void 0 : r.getAllComputedFields(t);
  }
  getAllClientExtensions() {
    var t;
    return (t = this.head) == null ? void 0 : t.getAllClientExtensions();
  }
  getAllModelExtensions(t) {
    var r;
    return (r = this.head) == null ? void 0 : r.getAllModelExtensions(t);
  }
  getAllQueryCallbacks(t, r) {
    var n, o;
    return (o = (n = this.head) == null
        ? void 0
        : n.getAllQueryCallbacks(t, r)) != null
      ? o
      : [];
  }
};
u(st, "MergedExtensionsList");
d();
f();
m();
function dl(e, t = () => {}) {
  let r, n = new Promise((o) => r = o);
  return {
    then(o) {
      return --e === 0 && r(t()), o == null ? void 0 : o(n);
    },
  };
}
u(dl, "getLockCountPromise");
d();
f();
m();
function gl(e) {
  return typeof e == "string" ? e : e.reduce((t, r) => {
    let n = typeof r == "string" ? r : r.level;
    return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
  }, void 0);
}
u(gl, "getLogLevel");
d();
f();
m();
function hl(e, t, r) {
  let n = yl(e, r),
    o = yl(t, r),
    i = Object.values(o).map((a) => a[a.length - 1]),
    s = Object.keys(o);
  return Object.entries(n).forEach(([a, c]) => {
    s.includes(a) || i.push(c[c.length - 1]);
  }),
    i;
}
u(hl, "mergeBy");
var yl = u((e, t) =>
  e.reduce((r, n) => {
    let o = t(n);
    return r[o] || (r[o] = []), r[o].push(n), r;
  }, {}), "groupBy");
d();
f();
m();
var yn = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
u(yn, "MiddlewareHandler");
var hn = class {
  constructor() {
    this.query = new yn();
    this.engine = new yn();
  }
};
u(hn, "Middlewares");
d();
f();
m();
var El = ee(Wn());
d();
f();
m();
function bl({ result: e, modelName: t, select: r, extensions: n }) {
  let o = n.getAllComputedFields(t);
  if (!o) return e;
  let i = [], s = [];
  for (let a of Object.values(o)) {
    if (r) {
      if (!r[a.name]) continue;
      let c = a.needs.filter((l) => !r[l]);
      c.length > 0 && s.push(cs(c));
    }
    Wg(e, a.needs) && i.push(Qg(a, Mt(e, i)));
  }
  return i.length > 0 || s.length > 0 ? Mt(e, [...i, ...s]) : e;
}
u(bl, "applyResultExtensions");
function Wg(e, t) {
  return t.every((r) => _i(e, r));
}
u(Wg, "areNeedsMet");
function Qg(e, t) {
  return Bt(Lt(e.name, () => e.compute(t)));
}
u(Qg, "computedPropertyLayer");
d();
f();
m();
function Fo({ visitor: e, result: t, args: r, dmmf: n, model: o }) {
  var s;
  if (Array.isArray(t)) {
    for (let a = 0; a < t.length; a++) {
      t[a] = Fo({ result: t[a], args: r, model: o, dmmf: n, visitor: e });
    }
    return t;
  }
  let i = (s = e(t, o, r)) != null ? s : t;
  return r.include &&
    wl({
      includeOrSelect: r.include,
      result: i,
      parentModel: o,
      dmmf: n,
      visitor: e,
    }),
    r.select &&
    wl({
      includeOrSelect: r.select,
      result: i,
      parentModel: o,
      dmmf: n,
      visitor: e,
    }),
    i;
}
u(Fo, "visitQueryResult");
function wl(
  { includeOrSelect: e, result: t, parentModel: r, dmmf: n, visitor: o },
) {
  for (let [i, s] of Object.entries(e)) {
    if (!s || t[i] == null) continue;
    let a = r.fields.find((l) => l.name === i);
    if (!a || a.kind !== "object" || !a.relationName) continue;
    let c = typeof s == "object" ? s : {};
    t[i] = Fo({
      visitor: o,
      result: t[i],
      args: c,
      model: n.getModelMap()[a.type],
      dmmf: n,
    });
  }
}
u(wl, "visitNested");
d();
f();
m();
var bn = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
        (this.batches[r] = [],
          this.tickActive || (this.tickActive = !0,
            w.nextTick(() => {
              this.dispatchBatches(), this.tickActive = !1;
            }))),
        new Promise((n, o) => {
          this.batches[r].push({ request: t, resolve: n, reject: o });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          })
          : this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) {
              for (let o = 0; o < r.length; o++) r[o].reject(n);
            } else {for (let o = 0; o < r.length; o++) {
                let i = n[o];
                i instanceof Error ? r[o].reject(i) : r[o].resolve(i);
              }}
          }).catch((n) => {
            for (let o = 0; o < r.length; o++) r[o].reject(n);
          });
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
u(bn, "DataLoader");
var Yg = Ke("prisma:client:request_handler");
function xl(e) {
  var o;
  let t = e.transaction,
    r = (o = e.headers) != null ? o : {},
    n = rr({ tracingConfig: e.tracingConfig });
  return (t == null ? void 0 : t.kind) === "itx" && (r.transactionId = t.id),
    n !== void 0 && (r.traceparent = n),
    { transaction: t, headers: r };
}
u(xl, "getRequestInfo");
var wn = class {
  constructor(t, r, n) {
    this.logEmmitter = n,
      this.client = t,
      this.hooks = r,
      this.dataloader = new bn({
        batchLoader: (o) => {
          var p;
          let i = xl(o[0]),
            s = o.map((g) => String(g.document)),
            a = rr({
              context: o[0].otelParentCtx,
              tracingConfig: t._tracingConfig,
            });
          a && (i.headers.traceparent = a);
          let c = o.some((g) => g.document.type === "mutation"),
            l = ((p = i.transaction) == null ? void 0 : p.kind) === "batch"
              ? i.transaction
              : void 0;
          return this.client._engine.requestBatch({
            queries: s,
            headers: i.headers,
            transaction: l,
            containsWrite: c,
          });
        },
        singleLoader: (o) => {
          var c;
          let i = xl(o),
            s = String(o.document),
            a = ((c = i.transaction) == null ? void 0 : c.kind) === "itx"
              ? i.transaction
              : void 0;
          return this.client._engine.request({
            query: s,
            headers: i.headers,
            transaction: a,
            isWrite: o.document.type === "mutation",
          });
        },
        batchBy: (o) => {
          var i;
          return (i = o.transaction) != null && i.id
            ? `transaction-${o.transaction.id}`
            : Xg(o);
        },
      });
  }
  async request(
    {
      document: t,
      dataPath: r = [],
      rootField: n,
      typeName: o,
      isList: i,
      callsite: s,
      rejectOnNotFound: a,
      clientMethod: c,
      engineHook: l,
      args: p,
      headers: g,
      transaction: y,
      unpacker: b,
      extensions: v,
      otelParentCtx: h,
      otelChildCtx: A,
    },
  ) {
    if (this.hooks && this.hooks.beforeRequest) {
      let O = String(t);
      this.hooks.beforeRequest({
        query: O,
        path: r,
        rootField: n,
        typeName: o,
        document: t,
        isList: i,
        clientMethod: c,
        args: p,
      });
    }
    try {
      let O, T;
      if (l) {
        let S = await l(
          { document: t, runInTransaction: Boolean(y) },
          (_) =>
            this.dataloader.request({
              ..._,
              tracingConfig: this.client._tracingConfig,
            }),
        );
        O = S.data, T = S.elapsed;
      } else {
        let S = await this.dataloader.request({
          document: t,
          headers: g,
          transaction: y,
          otelParentCtx: h,
          otelChildCtx: A,
          tracingConfig: this.client._tracingConfig,
        });
        O = S == null ? void 0 : S.data, T = S == null ? void 0 : S.elapsed;
      }
      let M = this.unpack(t, O, r, n, b);
      sl(M, c, o, a);
      let P = this.applyResultExtensions({
        result: M,
        modelName: o,
        args: p,
        extensions: v,
      });
      return w.env.PRISMA_CLIENT_GET_TIME ? { data: P, elapsed: T } : P;
    } catch (O) {
      this.handleAndLogRequestError({
        error: O,
        clientMethod: c,
        callsite: s,
        transaction: y,
      });
    }
  }
  handleAndLogRequestError(
    { error: t, clientMethod: r, callsite: n, transaction: o },
  ) {
    try {
      this.handleRequestError({
        error: t,
        clientMethod: r,
        callsite: n,
        transaction: o,
      });
    } catch (i) {
      throw this.logEmmitter &&
        this.logEmmitter.emit("error", {
          message: i.message,
          target: r,
          timestamp: new Date(),
        }),
        i;
    }
  }
  handleRequestError(
    { error: t, clientMethod: r, callsite: n, transaction: o },
  ) {
    if (Yg(t), Zg(t, o) || t instanceof Be) throw t;
    let i = t.message;
    throw n &&
      (i = wr({
        callsite: n,
        originalMethod: r,
        isPanic: t.isPanic,
        showColors: this.client._errorFormat === "pretty",
        message: i,
      })),
      i = this.sanitizeMessage(i),
      t.code
        ? new he(i, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: t.meta,
          batchRequestIdx: t.batchRequestIdx,
        })
        : t.isPanic
        ? new Xe(i, this.client._clientVersion)
        : t instanceof Ie
        ? new Ie(i, {
          clientVersion: this.client._clientVersion,
          batchRequestIdx: t.batchRequestIdx,
        })
        : t instanceof Ce
        ? new Ce(i, this.client._clientVersion)
        : t instanceof Xe
        ? new Xe(i, this.client._clientVersion)
        : (t.clientVersion = this.client._clientVersion, t);
  }
  sanitizeMessage(t) {
    return this.client._errorFormat && this.client._errorFormat !== "pretty"
      ? (0, El.default)(t)
      : t;
  }
  unpack(t, r, n, o, i) {
    r != null && r.data && (r = r.data), i && (r[o] = i(r[o]));
    let s = [];
    return o && s.push(o),
      s.push(...n.filter((a) => a !== "select" && a !== "include")),
      us({ document: t, data: r, path: s });
  }
  applyResultExtensions({ result: t, modelName: r, args: n, extensions: o }) {
    if (o.isEmpty() || t == null) return t;
    let i = this.client._baseDmmf.getModelMap()[r];
    return i
      ? Fo({
        result: t,
        args: n != null ? n : {},
        model: i,
        dmmf: this.client._baseDmmf,
        visitor(s, a, c) {
          let l = We(a.name);
          return bl({
            result: s,
            modelName: l,
            select: c.select,
            extensions: o,
          });
        },
      })
      : t;
  }
  get [Symbol.toStringTag]() {
    return "RequestHandler";
  }
};
u(wn, "RequestHandler");
function Zg(e, t) {
  return Nr(e) && (t == null ? void 0 : t.kind) === "batch" &&
    e.batchRequestIdx !== t.index;
}
u(Zg, "isMismatchingBatchIndex");
function Xg(e) {
  var n;
  if (!e.document.children[0].name.startsWith("findUnique")) return;
  let t = (n = e.document.children[0].args) == null
      ? void 0
      : n.args.map((o) =>
        o.value instanceof de
          ? `${o.key}-${o.value.args.map((i) => i.key).join(",")}`
          : o.key
      ).join(","),
    r = e.document.children[0].children.join(",");
  return `${e.document.children[0].name}|${t}|${r}`;
}
u(Xg, "batchFindUniqueBy");
d();
f();
m();
function vl(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = Al(t[n]);
    return r;
  });
}
u(vl, "deserializeRawResults");
function Al({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return x.Buffer.from(t, "base64");
    case "decimal":
      return new He(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(Al);
    default:
      return t;
  }
}
u(Al, "deserializeValue");
d();
f();
m();
var xn = u(
  (e) => e.reduce((t, r, n) => `${t}@P${n}${r}`),
  "mssqlPreparedStatement",
);
d();
f();
m();
function qe(e) {
  try {
    return Pl(e, "fast");
  } catch (t) {
    return Pl(e, "slow");
  }
}
u(qe, "serializeRawParameters");
function Pl(e, t) {
  return JSON.stringify(e.map((r) => ey(r, t)));
}
u(Pl, "serializeRawParametersInternal");
function ey(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : ty(e)
    ? { prisma__type: "date", prisma__value: e.toJSON() }
    : He.isDecimal(e)
    ? { prisma__type: "decimal", prisma__value: e.toJSON() }
    : x.Buffer.isBuffer(e)
    ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
    : ry(e) || ArrayBuffer.isView(e)
    ? {
      prisma__type: "bytes",
      prisma__value: x.Buffer.from(e).toString("base64"),
    }
    : typeof e == "object" && t === "slow"
    ? Ml(e)
    : e;
}
u(ey, "encodeParameter");
function ty(e) {
  return e instanceof Date
    ? !0
    : Object.prototype.toString.call(e) === "[object Date]" &&
      typeof e.toJSON == "function";
}
u(ty, "isDate");
function ry(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
    ? e[Symbol.toStringTag] === "ArrayBuffer" ||
      e[Symbol.toStringTag] === "SharedArrayBuffer"
    : !1;
}
u(ry, "isArrayBufferLike");
function Ml(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(Tl);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Tl(e[r]);
  return t;
}
u(Ml, "preprocessObject");
function Tl(e) {
  return typeof e == "bigint" ? e.toString() : Ml(e);
}
u(Tl, "preprocessValueInObject");
d();
f();
m();
var Il = ee(Vi());
var Ol = [
    "datasources",
    "errorFormat",
    "log",
    "__internal",
    "rejectOnNotFound",
  ],
  Sl = ["pretty", "colorless", "minimal"],
  Cl = ["info", "query", "warn", "error"],
  ny = {
    datasources: (e, t) => {
      if (!!e) {
        if (typeof e != "object" || Array.isArray(e)) {
          throw new oe(
            `Invalid value ${
              JSON.stringify(e)
            } for "datasources" provided to PrismaClient constructor`,
          );
        }
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let o = vr(r, t) || `Available datasources: ${t.join(", ")}`;
            throw new oe(
              `Unknown datasource ${r} provided to PrismaClient constructor.${o}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n)) {
            throw new oe(
              `Invalid value ${
                JSON.stringify(e)
              } for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
            );
          }
          if (n && typeof n == "object") {
            for (let [o, i] of Object.entries(n)) {
              if (o !== "url") {
                throw new oe(
                  `Invalid value ${
                    JSON.stringify(e)
                  } for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
                );
              }
              if (typeof i != "string") {
                throw new oe(
                  `Invalid value ${
                    JSON.stringify(i)
                  } for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
                );
              }
            }
          }
        }
      }
    },
    errorFormat: (e) => {
      if (!!e) {
        if (typeof e != "string") {
          throw new oe(
            `Invalid value ${
              JSON.stringify(e)
            } for "errorFormat" provided to PrismaClient constructor.`,
          );
        }
        if (!Sl.includes(e)) {
          let t = vr(e, Sl);
          throw new oe(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e)) {
        throw new oe(
          `Invalid value ${
            JSON.stringify(e)
          } for "log" provided to PrismaClient constructor.`,
        );
      }
      function t(r) {
        if (typeof r == "string" && !Cl.includes(r)) {
          let n = vr(r, Cl);
          throw new oe(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      u(t, "validateLogLevel");
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (o) => {
            let i = ["stdout", "event"];
            if (!i.includes(o)) {
              let s = vr(o, i);
              throw new oe(
                `Invalid value ${
                  JSON.stringify(o)
                } for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object") {
          for (let [o, i] of Object.entries(r)) {
            if (n[o]) n[o](i);
            else {throw new oe(
                `Invalid property ${o} for "log" provided to PrismaClient constructor`,
              );}
          }
        }
      }
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object") {
        throw new oe(
          `Invalid value ${
            JSON.stringify(e)
          } for "__internal" to PrismaClient constructor`,
        );
      }
      for (let [r] of Object.entries(e)) {
        if (!t.includes(r)) {
          let n = vr(r, t);
          throw new oe(
            `Invalid property ${
              JSON.stringify(r)
            } for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
      }
    },
    rejectOnNotFound: (e) => {
      if (!!e) {
        if (
          Ir(e) || typeof e == "boolean" || typeof e == "object" ||
          typeof e == "function"
        ) return e;
        throw new oe(
          `Invalid rejectOnNotFound expected a boolean/Error/{[modelName: Error | boolean]} but received ${
            JSON.stringify(e)
          }`,
        );
      }
    },
  };
function Rl(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!Ol.includes(r)) {
      let o = vr(r, Ol);
      throw new oe(
        `Unknown property ${r} provided to PrismaClient constructor.${o}`,
      );
    }
    ny[r](n, t);
  }
}
u(Rl, "validatePrismaClientOptions");
function vr(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = oy(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
u(vr, "getDidYouMean");
function oy(e, t) {
  if (t.length === 0) return null;
  let r = t.map((o) => ({ value: o, distance: (0, Il.default)(e, o) }));
  r.sort((o, i) => o.distance < i.distance ? -1 : 1);
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
u(oy, "getAlternative");
d();
f();
m();
function _l(e) {
  return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
    let n = new Array(e.length),
      o = null,
      i = !1,
      s = 0,
      a = u(() => {
        i || (s++, s === e.length && (i = !0, o ? r(o) : t(n)));
      }, "settleOnePromise"),
      c = u((l) => {
        i || (i = !0, r(l));
      }, "immediatelyReject");
    for (let l = 0; l < e.length; l++) {
      e[l].then((p) => {
        n[l] = p, a();
      }, (p) => {
        if (!Nr(p)) {
          c(p);
          return;
        }
        p.batchRequestIdx === l ? c(p) : (o || (o = p), a());
      });
    }
  });
}
u(_l, "waitForBatch");
var ge = Ke("prisma:client"), iy = /^(\s*alter\s)/i;
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
function Fl(e) {
  return Array.isArray(e);
}
u(Fl, "isReadonlyArray");
function gs(e, t, r) {
  if (t.length > 0 && iy.exec(e)) {
    throw new Error(`Running ALTER using ${r} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  }
}
u(gs, "checkAlter");
var sy = {
    findUnique: "query",
    findUniqueOrThrow: "query",
    findFirst: "query",
    findFirstOrThrow: "query",
    findMany: "query",
    count: "query",
    create: "mutation",
    createMany: "mutation",
    update: "mutation",
    updateMany: "mutation",
    upsert: "mutation",
    delete: "mutation",
    deleteMany: "mutation",
    executeRaw: "mutation",
    queryRaw: "mutation",
    aggregate: "query",
    groupBy: "query",
    runCommandRaw: "mutation",
    findRaw: "query",
    aggregateRaw: "query",
  },
  ay = Symbol.for("prisma.client.transaction.id"),
  uy = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function cy(e) {
  class t {
    constructor(n) {
      this._middlewares = new hn();
      this._getDmmf = Ri(async (n) => {
        try {
          let o = await this._engine.getDmmf();
          return new Pt(xc(o));
        } catch (o) {
          this._fetcher.handleAndLogRequestError({ ...n, error: o });
        }
      });
      this.$extends = ll;
      var a, c, l, p, g, y, b, v, h;
      n && Rl(n, e.datasourceNames);
      let o = new kl.EventEmitter().on("error", (A) => {});
      this._extensions = st.empty(),
        this._previewFeatures =
          (c = (a = e.generator) == null ? void 0 : a.previewFeatures) != null
            ? c
            : [],
        this._rejectOnNotFound = n == null ? void 0 : n.rejectOnNotFound,
        this._clientVersion = (l = e.clientVersion) != null ? l : Ro,
        this._activeProvider = e.activeProvider,
        this._dataProxy = e.dataProxy,
        this._tracingConfig = xi(this._previewFeatures),
        this._clientEngineType = ui(e.generator);
      let i = {
          rootEnvPath: e.relativeEnvPaths.rootEnvPath &&
            En.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath: e.relativeEnvPaths.schemaEnvPath &&
            En.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        s = !1;
      try {
        let A = n != null ? n : {},
          O = (p = A.__internal) != null ? p : {},
          T = O.debug === !0;
        T && Ke.enable("prisma:client"), O.hooks && (this._hooks = O.hooks);
        let M = En.default.resolve(e.dirname, e.relativePath);
        Dn.existsSync(M) || (M = e.dirname),
          ge("dirname", e.dirname),
          ge("relativePath", e.relativePath),
          ge("cwd", M);
        let P = A.datasources || {},
          S = Object.entries(P).filter(([j, V]) => V && V.url).map((
            [j, { url: V }],
          ) => ({ name: j, url: V })),
          _ = hl([], S, (j) => j.name),
          F = O.engine || {};
        if (
          A.errorFormat
            ? this._errorFormat = A.errorFormat
            : w.env.NODE_ENV === "production"
            ? this._errorFormat = "minimal"
            : w.env.NO_COLOR
            ? this._errorFormat = "colorless"
            : this._errorFormat = "colorless",
            this._baseDmmf = new At(e.document),
            this._dataProxy
        ) {
          let j = e.document;
          this._dmmf = new Pt(j);
        }
        if (
          this._engineConfig = {
            cwd: M,
            dirname: e.dirname,
            enableDebugLogs: T,
            allowTriggerPanic: F.allowTriggerPanic,
            datamodelPath: En.default.join(
              e.dirname,
              (g = e.filename) != null ? g : "schema.prisma",
            ),
            prismaPath: (y = F.binaryPath) != null ? y : void 0,
            engineEndpoint: F.endpoint,
            datasources: _,
            generator: e.generator,
            showColors: this._errorFormat === "pretty",
            logLevel: A.log && gl(A.log),
            logQueries: A.log && Boolean(
              typeof A.log == "string"
                ? A.log === "query"
                : A.log.find((j) =>
                  typeof j == "string" ? j === "query" : j.level === "query"
                ),
            ),
            env: (h = (v = s == null ? void 0 : s.parsed) != null
                ? v
                : (b = e.injectableEdgeEnv) == null
                ? void 0
                : b.parsed) != null
              ? h
              : {},
            flags: [],
            clientVersion: e.clientVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingConfig: this._tracingConfig,
            logEmitter: o,
          },
            ge("clientVersion", e.clientVersion),
            ge(
              "clientEngineType",
              this._dataProxy ? "dataproxy" : this._clientEngineType,
            ),
            this._dataProxy && ge("using Data Proxy with edge runtime"),
            this._engine = this.getEngine(),
            this._getActiveProvider(),
            this._fetcher = new wn(this, this._hooks, o),
            A.log
        ) {
          for (let j of A.log) {
            let V = typeof j == "string"
              ? j
              : j.emit === "stdout"
              ? j.level
              : null;
            V && this.$on(V, (te) => {
              var G;
              ur.log(
                `${(G = ur.tags[V]) != null ? G : ""}`,
                te.message || te.query,
              );
            });
          }
        }
        this._metrics = new lr(this._engine);
      } catch (A) {
        throw A.clientVersion = this._clientVersion, A;
      }
      return _o(this);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    getEngine() {
      if (this._dataProxy === !0) return new ar(this._engineConfig);
      if (this._clientEngineType === "library") return !1;
      if (this._clientEngineType === "binary") return !1;
      throw new xe(
        "Invalid client engine type, please use `library` or `binary`",
      );
    }
    $use(n, o) {
      if (typeof n == "function") this._middlewares.query.use(n);
      else if (n === "all") this._middlewares.query.use(o);
      else if (n === "engine") this._middlewares.engine.use(o);
      else throw new Error(`Invalid middleware ${n}`);
    }
    $on(n, o) {
      n === "beforeExit"
        ? this._engine.on("beforeExit", o)
        : this._engine.on(n, (i) => {
          var a, c, l, p;
          let s = i.fields;
          return o(
            n === "query"
              ? {
                timestamp: i.timestamp,
                query: (a = s == null ? void 0 : s.query) != null ? a : i.query,
                params: (c = s == null ? void 0 : s.params) != null
                  ? c
                  : i.params,
                duration: (l = s == null ? void 0 : s.duration_ms) != null
                  ? l
                  : i.duration,
                target: i.target,
              }
              : {
                timestamp: i.timestamp,
                message: (p = s == null ? void 0 : s.message) != null
                  ? p
                  : i.message,
                target: i.target,
              },
          );
        });
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw n.clientVersion = this._clientVersion, n;
      }
    }
    async _runDisconnect() {
      await this._engine.stop(),
        delete this._connectionPromise,
        this._engine = this.getEngine(),
        delete this._disconnectionPromise,
        delete this._getConfigPromise;
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw n.clientVersion = this._clientVersion, n;
      } finally {
        this._dataProxy || (this._dmmf = void 0);
      }
    }
    async _getActiveProvider() {
      try {
        let n = await this._engine.getConfig();
        this._activeProvider = n.datasources[0].activeProvider;
      } catch (n) {}
    }
    $executeRawInternal(n, o, i, ...s) {
      let a = "", c;
      if (typeof i == "string") {
        a = i,
          c = { values: qe(s || []), __prismaRawParameters__: !0 },
          gs(a, s, "prisma.$executeRawUnsafe(<SQL>, [...values])");
      } else if (Fl(i)) {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql": {
            let p = new fe(i, s);
            a = p.sql,
              c = { values: qe(p.values), __prismaRawParameters__: !0 };
            break;
          }
          case "cockroachdb":
          case "postgresql": {
            let p = new fe(i, s);
            a = p.text,
              gs(a, p.values, "prisma.$executeRaw`<SQL>`"),
              c = { values: qe(p.values), __prismaRawParameters__: !0 };
            break;
          }
          case "sqlserver": {
            a = xn(i), c = { values: qe(s), __prismaRawParameters__: !0 };
            break;
          }
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $executeRaw`,
            );
        }
      } else {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql":
            a = i.sql;
            break;
          case "cockroachdb":
          case "postgresql":
            a = i.text, gs(a, i.values, "prisma.$executeRaw(sql`<SQL>`)");
            break;
          case "sqlserver":
            a = xn(i.strings);
            break;
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $executeRaw`,
            );
        }
        c = { values: qe(i.values), __prismaRawParameters__: !0 };
      }
      c != null && c.values
        ? ge(`prisma.$executeRaw(${a}, ${c.values})`)
        : ge(`prisma.$executeRaw(${a})`);
      let l = { query: a, parameters: c };
      return ge("Prisma Client call:"),
        this._request({
          args: l,
          clientMethod: "$executeRaw",
          dataPath: [],
          action: "executeRaw",
          callsite: it(this._errorFormat),
          transaction: n,
          lock: o,
        });
    }
    $executeRaw(n, ...o) {
      return Qe((i, s) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          return this.$executeRawInternal(i, s, n, ...o);
        }
        throw new xe(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
        );
      });
    }
    $executeRawUnsafe(n, ...o) {
      return Qe((i, s) => this.$executeRawInternal(i, s, n, ...o));
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb") {
        throw new xe(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
        );
      }
      return Qe((o, i) =>
        this._request({
          args: { command: n },
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          callsite: it(this._errorFormat),
          transaction: o,
          lock: i,
        })
      );
    }
    async $queryRawInternal(n, o, i, ...s) {
      let a = "", c;
      if (typeof i == "string") {
        a = i, c = { values: qe(s || []), __prismaRawParameters__: !0 };
      } else if (Fl(i)) {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql": {
            let p = new fe(i, s);
            a = p.sql,
              c = { values: qe(p.values), __prismaRawParameters__: !0 };
            break;
          }
          case "cockroachdb":
          case "postgresql": {
            let p = new fe(i, s);
            a = p.text,
              c = { values: qe(p.values), __prismaRawParameters__: !0 };
            break;
          }
          case "sqlserver": {
            let p = new fe(i, s);
            a = xn(p.strings),
              c = { values: qe(p.values), __prismaRawParameters__: !0 };
            break;
          }
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $queryRaw`,
            );
        }
      } else {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql":
            a = i.sql;
            break;
          case "cockroachdb":
          case "postgresql":
            a = i.text;
            break;
          case "sqlserver":
            a = xn(i.strings);
            break;
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $queryRaw`,
            );
        }
        c = { values: qe(i.values), __prismaRawParameters__: !0 };
      }
      c != null && c.values
        ? ge(`prisma.queryRaw(${a}, ${c.values})`)
        : ge(`prisma.queryRaw(${a})`);
      let l = { query: a, parameters: c };
      return ge("Prisma Client call:"),
        this._request({
          args: l,
          clientMethod: "$queryRaw",
          dataPath: [],
          action: "queryRaw",
          callsite: it(this._errorFormat),
          transaction: n,
          lock: o,
        }).then(vl);
    }
    $queryRaw(n, ...o) {
      return Qe((i, s) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          return this.$queryRawInternal(i, s, n, ...o);
        }
        throw new xe(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
        );
      });
    }
    $queryRawUnsafe(n, ...o) {
      return Qe((i, s) => this.$queryRawInternal(i, s, n, ...o));
    }
    __internal_triggerPanic(n) {
      if (!this._engineConfig.allowTriggerPanic) {
        throw new Error(
          `In order to use .__internal_triggerPanic(), please enable it like so:
new PrismaClient({
  __internal: {
    engine: {
      allowTriggerPanic: true
    }
  }
})`,
        );
      }
      let o = n ? { "X-DEBUG-FATAL": "1" } : { "X-DEBUG-NON-FATAL": "1" };
      return this._request({
        action: "queryRaw",
        args: { query: "SELECT 1", parameters: void 0 },
        clientMethod: "queryRaw",
        dataPath: [],
        headers: o,
        callsite: it(this._errorFormat),
      });
    }
    _transactionWithArray({ promises: n, options: o }) {
      let i = uy.nextId(),
        s = dl(n.length),
        a = n.map((c, l) => {
          var p, g;
          if (
            (c == null ? void 0 : c[Symbol.toStringTag]) !== "PrismaPromise"
          ) {
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
            );
          }
          return (g = (p = c.requestTransaction) == null ? void 0 : p.call(c, {
              id: i,
              index: l,
              isolationLevel: o == null ? void 0 : o.isolationLevel,
            }, s)) != null
            ? g
            : c;
        });
      return _l(a);
    }
    async _transactionWithCallback({ callback: n, options: o }) {
      let i = { traceparent: rr({ tracingConfig: this._tracingConfig }) },
        s = await this._engine.transaction("start", i, o),
        a;
      try {
        a = await n(ys(this, { id: s.id, payload: s.payload })),
          await this._engine.transaction("commit", i, s);
      } catch (c) {
        throw await this._engine.transaction("rollback", i, s).catch(() => {}),
          c;
      }
      return a;
    }
    $transaction(n, o) {
      let i;
      typeof n == "function"
        ? i = u(
          () => this._transactionWithCallback({ callback: n, options: o }),
          "callback",
        )
        : i = u(
          () => this._transactionWithArray({ promises: n, options: o }),
          "callback",
        );
      let s = {
        name: "transaction",
        enabled: this._tracingConfig.enabled,
        attributes: { method: "$transaction" },
      };
      return nr(s, i);
    }
    async _request(n) {
      n.otelParentCtx = yt.active();
      try {
        let o = {
            args: n.args,
            dataPath: n.dataPath,
            runInTransaction: Boolean(n.transaction),
            action: n.action,
            model: n.model,
          },
          i = {
            middleware: {
              name: "middleware",
              enabled: this._tracingConfig.middleware,
              attributes: { method: "$use" },
              active: !1,
            },
            operation: {
              name: "operation",
              enabled: this._tracingConfig.enabled,
              attributes: {
                method: o.action,
                model: o.model,
                name: `${o.model}.${o.action}`,
              },
            },
          },
          s = -1,
          a = u((c) => {
            let l = this._middlewares.query.get(++s);
            if (l) {
              return nr(
                i.middleware,
                async (b) => l(c, (v) => (b == null || b.end(), a(v))),
              );
            }
            let { runInTransaction: p, ...g } = c, y = { ...n, ...g };
            return p || (y.transaction = void 0), fl(this, y);
          }, "consumer");
        return await nr(i.operation, () => a(o));
      } catch (o) {
        throw o.clientVersion = this._clientVersion, o;
      }
    }
    async _executeRequest(
      {
        args: n,
        clientMethod: o,
        jsModelName: i,
        dataPath: s,
        callsite: a,
        action: c,
        model: l,
        headers: p,
        argsMapper: g,
        transaction: y,
        lock: b,
        unpacker: v,
        otelParentCtx: h,
      },
    ) {
      var te, G;
      this._dmmf === void 0 &&
      (this._dmmf = await this._getDmmf({ clientMethod: o, callsite: a })),
        n = g ? g(n) : n;
      let A, O = sy[c];
      (c === "executeRaw" || c === "queryRaw" || c === "runCommandRaw") &&
        (A = c);
      let T;
      if (l !== void 0) {
        if (
          T = (te = this._dmmf) == null ? void 0 : te.mappingsMap[l],
            T === void 0
        ) throw new Error(`Could not find mapping for model ${l}`);
        A = T[c === "count" ? "aggregate" : c];
      }
      if (O !== "query" && O !== "mutation") {
        throw new Error(`Invalid operation ${O} for action ${c}`);
      }
      let M = (G = this._dmmf) == null ? void 0 : G.rootFieldMap[A];
      if (M === void 0) {
        throw new Error(
          `Could not find rootField ${A} for action ${c} for model ${l} on rootType ${O}`,
        );
      }
      let { isList: P } = M.outputType,
        S = jt(M.outputType.type),
        _ = fs(c, S, n, this._rejectOnNotFound);
      py(_, i, c);
      let F = u(() => {
          let K = as({
            dmmf: this._dmmf,
            rootField: A,
            rootTypeName: O,
            select: n,
            modelName: l,
            extensions: this._extensions,
          });
          return K.validate(n, !1, o, this._errorFormat, a), K;
        }, "serializationFn"),
        j = { name: "serialize", enabled: this._tracingConfig.enabled },
        V = await nr(j, F);
      if (Ke.enabled("prisma:client")) {
        let K = String(V);
        ge("Prisma Client call:"),
          ge(
            `prisma.${o}(${
              vo({ ast: n, keyPaths: [], valuePaths: [], missingItems: [] })
            })`,
          ),
          ge("Generated request:"),
          ge(
            K + `
`,
          );
      }
      return await b,
        this._fetcher.request({
          document: V,
          clientMethod: o,
          typeName: S,
          dataPath: s,
          rejectOnNotFound: _,
          isList: P,
          rootField: A,
          callsite: a,
          args: n,
          engineHook: this._middlewares.engine.get(0),
          extensions: this._extensions,
          headers: p,
          transaction: y,
          unpacker: v,
          otelParentCtx: h,
          otelChildCtx: yt.active(),
        });
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics")) {
        throw new xe(
          "`metrics` preview feature must be enabled in order to access metrics API",
        );
      }
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      var o;
      return !!((o = this._engineConfig.previewFeatures) != null &&
        o.includes(n));
    }
  }
  return u(t, "PrismaClient"), t;
}
u(cy, "getPrismaClient");
var Dl = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
function ys(e, t) {
  return typeof e != "object" ? e : new Proxy(e, {
    get: (r, n) => {
      if (!Dl.includes(n)) {
        return n === ay
          ? t == null ? void 0 : t.id
          : typeof r[n] == "function"
          ? (...o) =>
            n === "then"
              ? r[n](o[0], o[1], t)
              : n === "catch" || n === "finally"
              ? r[n](o[0], t)
              : ys(r[n](...o), t)
          : ys(r[n], t);
      }
    },
    has(r, n) {
      return Dl.includes(n) ? !1 : Reflect.has(r, n);
    },
  });
}
u(ys, "transactionProxy");
var ly = { findUnique: "findUniqueOrThrow", findFirst: "findFirstOrThrow" };
function py(e, t, r) {
  if (e) {
    let n = ly[r],
      o = t ? `prisma.${t}.${n}` : `prisma.${n}`,
      i = `rejectOnNotFound.${t != null ? t : ""}.${r}`;
    ki(
      i,
      `\`rejectOnNotFound\` option is deprecated and will be removed in Prisma 5. Please use \`${o}\` method instead`,
    );
  }
}
u(py, "warnAboutRejectOnNotFound");
d();
f();
m();
var fy = new Set([
  "toJSON",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function my(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!fy.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
u(my, "makeStrictEnum");
d();
f();
m();
d();
f();
m();
var U6 = Nl.decompressFromBase64;
var export_findSync = void 0;
var export_warnEnvConflicts = void 0;
export {
  $d as join,
  as as makeDocument,
  Be as NotFoundError,
  Ce as PrismaClientInitializationError,
  cy as getPrismaClient,
  Dt as Engine,
  export_findSync as findSync,
  export_warnEnvConflicts as warnEnvConflicts,
  fe as Sql,
  gc as raw,
  Gs as Extensions,
  He as Decimal,
  he as PrismaClientKnownRequestError,
  ht as PrismaClientExtensionError,
  Ie as PrismaClientUnknownRequestError,
  Jc as transformDocument,
  Ki as objectEnumValues,
  Ld as empty,
  lr as MetricsClient,
  my as makeStrictEnum,
  Pt as DMMFClass,
  rt as DMMF,
  U6 as decompressFromBase64,
  Ua as Debug,
  us as unpack,
  Xe as PrismaClientRustPanicError,
  xe as PrismaClientValidationError,
  yc as sqltag,
  zs as Types,
};
