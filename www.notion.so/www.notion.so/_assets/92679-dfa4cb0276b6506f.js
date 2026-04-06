(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [92679], {
        94469: (e, t, n) => {
            var r = Math.max,
                i = Math.min;
            e.exports = function(e, t, s) {
                var o = null == e ? 0 : e.length;
                if (!o) return -1;
                var l = o - 1;
                return void 0 !== s && (l = n(761489)(s), l = s < 0 ? r(o + l, 0) : i(l, o - 1)), n(2523)(e, n(315389)(t, 3), l, !0)
            }
        },
        302404: (e, t, n) => {
            e.exports = function(e, t) {
                return n(860270)(e, t)
            }
        },
        590179: (e, t, n) => {
            var r = () => n(419931);
            e.exports = n(538816)(function(e, t) {
                var i = {};
                if (null == e) return i;
                var s = !1;
                t = n(634932)(t, function(t) {
                    return t = n(831769)(t, e), s || (s = t.length > 1), t
                }), n(921791)(e, n(483349)(e), i), s && (i = n(509999)(i, 7, n(653138)));
                for (var o = t.length; o--;) r()(i, t[o]);
                return i
            })
        },
        610568: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => s
            });
            var r, i = (r = "file:///home/notion/workdir/notion-next/notion-next/node_modules/@sqlite.org/sqlite-wasm/sqlite-wasm/jswasm/sqlite3-bundler-friendly.mjs", function(e) {
                var t, i, s, o, l, a, c, u, _, p, f, d, m, h, g, y, q, b = e || {},
                    w = void 0 !== b ? b : {};
                w.ready = new Promise(function(e, t) {
                    i = e, s = t
                });
                let E = globalThis.sqlite3InitModuleState || Object.assign(Object.create(null), {
                    debugModule: () => {}
                });
                delete globalThis.sqlite3InitModuleState, E.debugModule("globalThis.location =", globalThis.location);
                let x = "emscripten-bug-17951";
                w[x] = function e(t, n) {
                    t.env.foo = function() {};
                    let r = w.locateFile(e.uri, void 0 === F ? "" : F);
                    E.debugModule("instantiateWasm() uri =", r);
                    let i = () => fetch(r, {
                        credentials: "same-origin"
                    });
                    return (WebAssembly.instantiateStreaming ? async () => WebAssembly.instantiateStreaming(i(), t).then(e => n(e.instance, e.module)) : async () => i().then(e => e.arrayBuffer()).then(e => WebAssembly.instantiate(e, t)).then(e => n(e.instance, e.module)))(), {}
                }, w[x].uri = "sqlite3.wasm";
                var S = Object.assign({}, w),
                    A = [],
                    I = "./this.program",
                    k = "object" == typeof window,
                    T = "function" == typeof importScripts;
                "object" == typeof process && "object" == typeof process.versions && process.versions.node;
                var F = "";
                (k || T) && (T ? F = self.location.href : "u" > typeof document && document.currentScript && (F = document.currentScript.src), r && (F = r), F = 0 !== F.indexOf("blob:") ? F.substr(0, F.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", o = e => {
                    var t = new XMLHttpRequest;
                    return t.open("GET", e, !1), t.send(null), t.responseText
                }, T && (a = e => {
                    var t = new XMLHttpRequest;
                    return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
                }), l = (e, t, n) => {
                    var r = new XMLHttpRequest;
                    r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = () => {
                        200 == r.status || 0 == r.status && r.response ? t(r.response) : n()
                    }, r.onerror = n, r.send(null)
                });
                var O = w.print || console.log.bind(console),
                    P = w.printErr || console.warn.bind(console);
                Object.assign(w, S), S = null, w.arguments && (A = w.arguments), w.thisProgram && (I = w.thisProgram), w.quit && w.quit, w.wasmBinary && (c = w.wasmBinary), w.noExitRuntime, "object" != typeof WebAssembly && $("no native wasm support detected");
                var L = !1,
                    C = "u" > typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                function D(e, t, n) {
                    for (var r = t + n, i = t; e[i] && !(i >= r);) ++i;
                    if (i - t > 16 && e.buffer && C) return C.decode(e.subarray(t, i));
                    for (var s = ""; t < i;) {
                        var o = e[t++];
                        if (!(128 & o)) {
                            s += String.fromCharCode(o);
                            continue
                        }
                        var l = 63 & e[t++];
                        if ((224 & o) == 192) {
                            s += String.fromCharCode((31 & o) << 6 | l);
                            continue
                        }
                        var a = 63 & e[t++];
                        if ((o = (240 & o) == 224 ? (15 & o) << 12 | l << 6 | a : (7 & o) << 18 | l << 12 | a << 6 | 63 & e[t++]) < 65536) s += String.fromCharCode(o);
                        else {
                            var c = o - 65536;
                            s += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                        }
                    }
                    return s
                }

                function N(e, t, n, r) {
                    if (!(r > 0)) return 0;
                    for (var i = n, s = n + r - 1, o = 0; o < e.length; ++o) {
                        var l = e.charCodeAt(o);
                        if (l >= 55296 && l <= 57343 && (l = 65536 + ((1023 & l) << 10) | 1023 & e.charCodeAt(++o)), l <= 127) {
                            if (n >= s) break;
                            t[n++] = l
                        } else if (l <= 2047) {
                            if (n + 1 >= s) break;
                            t[n++] = 192 | l >> 6, t[n++] = 128 | 63 & l
                        } else if (l <= 65535) {
                            if (n + 2 >= s) break;
                            t[n++] = 224 | l >> 12, t[n++] = 128 | l >> 6 & 63, t[n++] = 128 | 63 & l
                        } else {
                            if (n + 3 >= s) break;
                            t[n++] = 240 | l >> 18, t[n++] = 128 | l >> 12 & 63, t[n++] = 128 | l >> 6 & 63, t[n++] = 128 | 63 & l
                        }
                    }
                    return t[n] = 0, n - i
                }

                function R(e) {
                    for (var t = 0, n = 0; n < e.length; ++n) {
                        var r = e.charCodeAt(n);
                        r <= 127 ? t++ : r <= 2047 ? t += 2 : r >= 55296 && r <= 57343 ? (t += 4, ++n) : t += 3
                    }
                    return t
                }

                function j() {
                    var e = u.buffer;
                    w.HEAP8 = _ = new Int8Array(e), w.HEAP16 = f = new Int16Array(e), w.HEAP32 = d = new Int32Array(e), w.HEAPU8 = p = new Uint8Array(e), w.HEAPU16 = new Uint16Array(e), w.HEAPU32 = m = new Uint32Array(e), w.HEAPF32 = new Float32Array(e), w.HEAPF64 = new Float64Array(e), w.HEAP64 = new BigInt64Array(e), w.HEAPU64 = new BigUint64Array(e)
                }
                var M = w.INITIAL_MEMORY || 0x1000000;
                u = w.wasmMemory ? w.wasmMemory : new WebAssembly.Memory({
                    initial: M / 65536,
                    maximum: 32768
                }), j(), M = u.buffer.byteLength;
                var z = [],
                    B = [],
                    U = [],
                    Q = 0,
                    W = null,
                    H = null;

                function V(e) {
                    Q++, w.monitorRunDependencies && w.monitorRunDependencies(Q)
                }

                function G(e) {
                    if (Q--, w.monitorRunDependencies && w.monitorRunDependencies(Q), 0 == Q && (null !== W && (clearInterval(W), W = null), H)) {
                        var t = H;
                        H = null, t()
                    }
                }

                function $(e) {
                    w.onAbort && w.onAbort(e), P(e = "Aborted(" + e + ")"), L = !0, e += ". Build with -sASSERTIONS for more info.";
                    var t = new WebAssembly.RuntimeError(e);
                    throw s(t), t
                }

                function K(e) {
                    return e.startsWith("data:application/octet-stream;base64,")
                }

                function J(e) {
                    try {
                        if (e == h && c) return new Uint8Array(c);
                        if (a) return a(e);
                        throw "both async and sync fetching of the wasm failed"
                    } catch (e) {
                        $(e)
                    }
                }

                function X(e) {
                    for (; e.length > 0;) e.shift()(w)
                }
                w.locateFile ? K(h = "sqlite3.wasm") || (t = h, h = w.locateFile ? w.locateFile(t, F) : F + t) : h = new URL(n(728432), n.b).href;
                var Y = {
                        isAbs: e => "/" === e.charAt(0),
                        splitPath: e => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
                        normalizeArray: (e, t) => {
                            for (var n = 0, r = e.length - 1; r >= 0; r--) {
                                var i = e[r];
                                "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
                            }
                            if (t)
                                for (; n; n--) e.unshift("..");
                            return e
                        },
                        normalize: e => {
                            var t = Y.isAbs(e),
                                n = "/" === e.substr(-1);
                            return (e = Y.normalizeArray(e.split("/").filter(e => !!e), !t).join("/")) || t || (e = "."), e && n && (e += "/"), (t ? "/" : "") + e
                        },
                        dirname: e => {
                            var t = Y.splitPath(e),
                                n = t[0],
                                r = t[1];
                            return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
                        },
                        basename: e => {
                            if ("/" === e) return "/";
                            var t = (e = (e = Y.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                            return -1 === t ? e : e.substr(t + 1)
                        },
                        join: function() {
                            var e = Array.prototype.slice.call(arguments);
                            return Y.normalize(e.join("/"))
                        },
                        join2: (e, t) => Y.normalize(e + "/" + t)
                    },
                    Z = {
                        resolve: function() {
                            for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
                                var r = n >= 0 ? arguments[n] : ei.cwd();
                                if ("string" != typeof r) throw TypeError("Arguments to path.resolve must be strings");
                                if (!r) return "";
                                e = r + "/" + e, t = Y.isAbs(r)
                            }
                            return e = Y.normalizeArray(e.split("/").filter(e => !!e), !t).join("/"), (t ? "/" : "") + e || "."
                        },
                        relative: (e, t) => {
                            function n(e) {
                                for (var t = 0; t < e.length && "" === e[t]; t++);
                                for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                                return t > n ? [] : e.slice(t, n - t + 1)
                            }
                            e = Z.resolve(e).substr(1), t = Z.resolve(t).substr(1);
                            for (var r = n(e.split("/")), i = n(t.split("/")), s = Math.min(r.length, i.length), o = s, l = 0; l < s; l++)
                                if (r[l] !== i[l]) {
                                    o = l;
                                    break
                                }
                            for (var a = [], l = o; l < r.length; l++) a.push("..");
                            return (a = a.concat(i.slice(o))).join("/")
                        }
                    };

                function ee(e, t, n) {
                    var r = Array(n > 0 ? n : R(e) + 1),
                        i = N(e, r, 0, r.length);
                    return t && (r.length = i), r
                }
                var et = {
                    ttys: [],
                    init: function() {},
                    shutdown: function() {},
                    register: function(e, t) {
                        et.ttys[e] = {
                            input: [],
                            output: [],
                            ops: t
                        }, ei.registerDevice(e, et.stream_ops)
                    },
                    stream_ops: {
                        open: function(e) {
                            var t = et.ttys[e.node.rdev];
                            if (!t) throw new ei.ErrnoError(43);
                            e.tty = t, e.seekable = !1
                        },
                        close: function(e) {
                            e.tty.ops.fsync(e.tty)
                        },
                        fsync: function(e) {
                            e.tty.ops.fsync(e.tty)
                        },
                        read: function(e, t, n, r, i) {
                            if (!e.tty || !e.tty.ops.get_char) throw new ei.ErrnoError(60);
                            for (var s, o = 0, l = 0; l < r; l++) {
                                try {
                                    s = e.tty.ops.get_char(e.tty)
                                } catch (e) {
                                    throw new ei.ErrnoError(29)
                                }
                                if (void 0 === s && 0 === o) throw new ei.ErrnoError(6);
                                if (null == s) break;
                                o++, t[n + l] = s
                            }
                            return o && (e.node.timestamp = Date.now()), o
                        },
                        write: function(e, t, n, r, i) {
                            if (!e.tty || !e.tty.ops.put_char) throw new ei.ErrnoError(60);
                            try {
                                for (var s = 0; s < r; s++) e.tty.ops.put_char(e.tty, t[n + s])
                            } catch (e) {
                                throw new ei.ErrnoError(29)
                            }
                            return r && (e.node.timestamp = Date.now()), s
                        }
                    },
                    default_tty_ops: {
                        get_char: function(e) {
                            if (!e.input.length) {
                                var t = null;
                                if ("u" > typeof window && "function" == typeof window.prompt ? null !== (t = window.prompt("Input: ")) && (t += "\n") : "function" == typeof readline && null !== (t = readline()) && (t += "\n"), !t) return null;
                                e.input = ee(t, !0)
                            }
                            return e.input.shift()
                        },
                        put_char: function(e, t) {
                            null === t || 10 === t ? (O(D(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                        },
                        fsync: function(e) {
                            e.output && e.output.length > 0 && (O(D(e.output, 0)), e.output = [])
                        }
                    },
                    default_tty1_ops: {
                        put_char: function(e, t) {
                            null === t || 10 === t ? (P(D(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                        },
                        fsync: function(e) {
                            e.output && e.output.length > 0 && (P(D(e.output, 0)), e.output = [])
                        }
                    }
                };

                function en(e) {
                    var t, n = eg(65536, e = 65536 * Math.ceil(e / 65536));
                    return n ? (t = e, p.fill(0, n, n + t), n) : 0
                }
                var er = {
                        ops_table: null,
                        mount: function(e) {
                            return er.createNode(null, "/", 16895, 0)
                        },
                        createNode: function(e, t, n, r) {
                            if (ei.isBlkdev(n) || ei.isFIFO(n)) throw new ei.ErrnoError(63);
                            er.ops_table || (er.ops_table = {
                                dir: {
                                    node: {
                                        getattr: er.node_ops.getattr,
                                        setattr: er.node_ops.setattr,
                                        lookup: er.node_ops.lookup,
                                        mknod: er.node_ops.mknod,
                                        rename: er.node_ops.rename,
                                        unlink: er.node_ops.unlink,
                                        rmdir: er.node_ops.rmdir,
                                        readdir: er.node_ops.readdir,
                                        symlink: er.node_ops.symlink
                                    },
                                    stream: {
                                        llseek: er.stream_ops.llseek
                                    }
                                },
                                file: {
                                    node: {
                                        getattr: er.node_ops.getattr,
                                        setattr: er.node_ops.setattr
                                    },
                                    stream: {
                                        llseek: er.stream_ops.llseek,
                                        read: er.stream_ops.read,
                                        write: er.stream_ops.write,
                                        allocate: er.stream_ops.allocate,
                                        mmap: er.stream_ops.mmap,
                                        msync: er.stream_ops.msync
                                    }
                                },
                                link: {
                                    node: {
                                        getattr: er.node_ops.getattr,
                                        setattr: er.node_ops.setattr,
                                        readlink: er.node_ops.readlink
                                    },
                                    stream: {}
                                },
                                chrdev: {
                                    node: {
                                        getattr: er.node_ops.getattr,
                                        setattr: er.node_ops.setattr
                                    },
                                    stream: ei.chrdev_stream_ops
                                }
                            });
                            var i = ei.createNode(e, t, n, r);
                            return ei.isDir(i.mode) ? (i.node_ops = er.ops_table.dir.node, i.stream_ops = er.ops_table.dir.stream, i.contents = {}) : ei.isFile(i.mode) ? (i.node_ops = er.ops_table.file.node, i.stream_ops = er.ops_table.file.stream, i.usedBytes = 0, i.contents = null) : ei.isLink(i.mode) ? (i.node_ops = er.ops_table.link.node, i.stream_ops = er.ops_table.link.stream) : ei.isChrdev(i.mode) && (i.node_ops = er.ops_table.chrdev.node, i.stream_ops = er.ops_table.chrdev.stream), i.timestamp = Date.now(), e && (e.contents[t] = i, e.timestamp = i.timestamp), i
                        },
                        getFileDataAsTypedArray: function(e) {
                            return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
                        },
                        expandFileStorage: function(e, t) {
                            var n = e.contents ? e.contents.length : 0;
                            if (!(n >= t)) {
                                t = Math.max(t, n * (n < 1048576 ? 2 : 1.125) >>> 0), 0 != n && (t = Math.max(t, 256));
                                var r = e.contents;
                                e.contents = new Uint8Array(t), e.usedBytes > 0 && e.contents.set(r.subarray(0, e.usedBytes), 0)
                            }
                        },
                        resizeFileStorage: function(e, t) {
                            if (e.usedBytes != t)
                                if (0 == t) e.contents = null, e.usedBytes = 0;
                                else {
                                    var n = e.contents;
                                    e.contents = new Uint8Array(t), n && e.contents.set(n.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t
                                }
                        },
                        node_ops: {
                            getattr: function(e) {
                                var t = {};
                                return t.dev = ei.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, ei.isDir(e.mode) ? t.size = 4096 : ei.isFile(e.mode) ? t.size = e.usedBytes : ei.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t
                            },
                            setattr: function(e, t) {
                                void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && er.resizeFileStorage(e, t.size)
                            },
                            lookup: function(e, t) {
                                throw ei.genericErrors[44]
                            },
                            mknod: function(e, t, n, r) {
                                return er.createNode(e, t, n, r)
                            },
                            rename: function(e, t, n) {
                                if (ei.isDir(e.mode)) {
                                    var r;
                                    try {
                                        r = ei.lookupNode(t, n)
                                    } catch (e) {}
                                    if (r)
                                        for (var i in r.contents) throw new ei.ErrnoError(55)
                                }
                                delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = n, t.contents[n] = e, t.timestamp = e.parent.timestamp, e.parent = t
                            },
                            unlink: function(e, t) {
                                delete e.contents[t], e.timestamp = Date.now()
                            },
                            rmdir: function(e, t) {
                                var n = ei.lookupNode(e, t);
                                for (var r in n.contents) throw new ei.ErrnoError(55);
                                delete e.contents[t], e.timestamp = Date.now()
                            },
                            readdir: function(e) {
                                var t = [".", ".."];
                                for (var n in e.contents) e.contents.hasOwnProperty(n) && t.push(n);
                                return t
                            },
                            symlink: function(e, t, n) {
                                var r = er.createNode(e, t, 41471, 0);
                                return r.link = n, r
                            },
                            readlink: function(e) {
                                if (!ei.isLink(e.mode)) throw new ei.ErrnoError(28);
                                return e.link
                            }
                        },
                        stream_ops: {
                            read: function(e, t, n, r, i) {
                                var s = e.node.contents;
                                if (i >= e.node.usedBytes) return 0;
                                var o = Math.min(e.node.usedBytes - i, r);
                                if (o > 8 && s.subarray) t.set(s.subarray(i, i + o), n);
                                else
                                    for (var l = 0; l < o; l++) t[n + l] = s[i + l];
                                return o
                            },
                            write: function(e, t, n, r, i, s) {
                                if (t.buffer === _.buffer && (s = !1), !r) return 0;
                                var o = e.node;
                                if (o.timestamp = Date.now(), t.subarray && (!o.contents || o.contents.subarray)) {
                                    if (s) return o.contents = t.subarray(n, n + r), o.usedBytes = r, r;
                                    else if (0 === o.usedBytes && 0 === i) return o.contents = t.slice(n, n + r), o.usedBytes = r, r;
                                    else if (i + r <= o.usedBytes) return o.contents.set(t.subarray(n, n + r), i), r
                                }
                                if (er.expandFileStorage(o, i + r), o.contents.subarray && t.subarray) o.contents.set(t.subarray(n, n + r), i);
                                else
                                    for (var l = 0; l < r; l++) o.contents[i + l] = t[n + l];
                                return o.usedBytes = Math.max(o.usedBytes, i + r), r
                            },
                            llseek: function(e, t, n) {
                                var r = t;
                                if (1 === n ? r += e.position : 2 === n && ei.isFile(e.node.mode) && (r += e.node.usedBytes), r < 0) throw new ei.ErrnoError(28);
                                return r
                            },
                            allocate: function(e, t, n) {
                                er.expandFileStorage(e.node, t + n), e.node.usedBytes = Math.max(e.node.usedBytes, t + n)
                            },
                            mmap: function(e, t, n, r, i) {
                                if (!ei.isFile(e.node.mode)) throw new ei.ErrnoError(43);
                                var s, o, l = e.node.contents;
                                if (2 & i || l.buffer !== _.buffer) {
                                    if ((n > 0 || n + t < l.length) && (l = l.subarray ? l.subarray(n, n + t) : Array.prototype.slice.call(l, n, n + t)), o = !0, !(s = en(t))) throw new ei.ErrnoError(48);
                                    _.set(l, s)
                                } else o = !1, s = l.byteOffset;
                                return {
                                    ptr: s,
                                    allocated: o
                                }
                            },
                            msync: function(e, t, n, r, i) {
                                return er.stream_ops.write(e, t, 0, r, n, !1), 0
                            }
                        }
                    },
                    ei = {
                        root: null,
                        mounts: [],
                        devices: {},
                        streams: [],
                        nextInode: 1,
                        nameTable: null,
                        currentPath: "/",
                        initialized: !1,
                        ignorePermissions: !0,
                        ErrnoError: null,
                        genericErrors: {},
                        filesystems: null,
                        syncFSRequests: 0,
                        lookupPath: (e, t = {}) => {
                            if (!(e = Z.resolve(e))) return {
                                path: "",
                                node: null
                            };
                            if ((t = Object.assign({
                                    follow_mount: !0,
                                    recurse_count: 0
                                }, t)).recurse_count > 8) throw new ei.ErrnoError(32);
                            for (var n = e.split("/").filter(e => !!e), r = ei.root, i = "/", s = 0; s < n.length; s++) {
                                var o = s === n.length - 1;
                                if (o && t.parent) break;
                                if (r = ei.lookupNode(r, n[s]), i = Y.join2(i, n[s]), ei.isMountpoint(r) && (!o || o && t.follow_mount) && (r = r.mounted.root), !o || t.follow)
                                    for (var l = 0; ei.isLink(r.mode);) {
                                        var a = ei.readlink(i);
                                        if (i = Z.resolve(Y.dirname(i), a), r = ei.lookupPath(i, {
                                                recurse_count: t.recurse_count + 1
                                            }).node, l++ > 40) throw new ei.ErrnoError(32)
                                    }
                            }
                            return {
                                path: i,
                                node: r
                            }
                        },
                        getPath: e => {
                            for (var t;;) {
                                if (ei.isRoot(e)) {
                                    var n = e.mount.mountpoint;
                                    if (!t) return n;
                                    return "/" !== n[n.length - 1] ? n + "/" + t : n + t
                                }
                                t = t ? e.name + "/" + t : e.name, e = e.parent
                            }
                        },
                        hashName: (e, t) => {
                            for (var n = 0, r = 0; r < t.length; r++) n = (n << 5) - n + t.charCodeAt(r) | 0;
                            return (e + n >>> 0) % ei.nameTable.length
                        },
                        hashAddNode: e => {
                            var t = ei.hashName(e.parent.id, e.name);
                            e.name_next = ei.nameTable[t], ei.nameTable[t] = e
                        },
                        hashRemoveNode: e => {
                            var t = ei.hashName(e.parent.id, e.name);
                            if (ei.nameTable[t] === e) ei.nameTable[t] = e.name_next;
                            else
                                for (var n = ei.nameTable[t]; n;) {
                                    if (n.name_next === e) {
                                        n.name_next = e.name_next;
                                        break
                                    }
                                    n = n.name_next
                                }
                        },
                        lookupNode: (e, t) => {
                            var n = ei.mayLookup(e);
                            if (n) throw new ei.ErrnoError(n, e);
                            for (var r = ei.hashName(e.id, t), i = ei.nameTable[r]; i; i = i.name_next) {
                                var s = i.name;
                                if (i.parent.id === e.id && s === t) return i
                            }
                            return ei.lookup(e, t)
                        },
                        createNode: (e, t, n, r) => {
                            var i = new ei.FSNode(e, t, n, r);
                            return ei.hashAddNode(i), i
                        },
                        destroyNode: e => {
                            ei.hashRemoveNode(e)
                        },
                        isRoot: e => e === e.parent,
                        isMountpoint: e => !!e.mounted,
                        isFile: e => (61440 & e) == 32768,
                        isDir: e => (61440 & e) == 16384,
                        isLink: e => (61440 & e) == 40960,
                        isChrdev: e => (61440 & e) == 8192,
                        isBlkdev: e => (61440 & e) == 24576,
                        isFIFO: e => (61440 & e) == 4096,
                        isSocket: e => (49152 & e) == 49152,
                        flagModes: {
                            r: 0,
                            "r+": 2,
                            w: 577,
                            "w+": 578,
                            a: 1089,
                            "a+": 1090
                        },
                        modeStringToFlags: e => {
                            var t = ei.flagModes[e];
                            if (void 0 === t) throw Error("Unknown file open mode: " + e);
                            return t
                        },
                        flagsToPermissionString: e => {
                            var t = ["r", "w", "rw"][3 & e];
                            return 512 & e && (t += "w"), t
                        },
                        nodePermissions: (e, t) => ei.ignorePermissions ? 0 : t.includes("r") && !(292 & e.mode) || t.includes("w") && !(146 & e.mode) || t.includes("x") && !(73 & e.mode) ? 2 : 0,
                        mayLookup: e => {
                            var t = ei.nodePermissions(e, "x");
                            return t || 2 * !e.node_ops.lookup
                        },
                        mayCreate: (e, t) => {
                            try {
                                return ei.lookupNode(e, t), 20
                            } catch (e) {}
                            return ei.nodePermissions(e, "wx")
                        },
                        mayDelete: (e, t, n) => {
                            try {
                                r = ei.lookupNode(e, t)
                            } catch (e) {
                                return e.errno
                            }
                            var r, i = ei.nodePermissions(e, "wx");
                            if (i) return i;
                            if (n) {
                                if (!ei.isDir(r.mode)) return 54;
                                if (ei.isRoot(r) || ei.getPath(r) === ei.cwd()) return 10
                            } else if (ei.isDir(r.mode)) return 31;
                            return 0
                        },
                        mayOpen: (e, t) => e ? ei.isLink(e.mode) ? 32 : ei.isDir(e.mode) && ("r" !== ei.flagsToPermissionString(t) || 512 & t) ? 31 : ei.nodePermissions(e, ei.flagsToPermissionString(t)) : 44,
                        MAX_OPEN_FDS: 4096,
                        nextfd: (e = 0, t = ei.MAX_OPEN_FDS) => {
                            for (var n = e; n <= t; n++)
                                if (!ei.streams[n]) return n;
                            throw new ei.ErrnoError(33)
                        },
                        getStream: e => ei.streams[e],
                        createStream: (e, t, n) => {
                            ei.FSStream || (ei.FSStream = function() {
                                this.shared = {}
                            }, ei.FSStream.prototype = {}, Object.defineProperties(ei.FSStream.prototype, {
                                object: {
                                    get: function() {
                                        return this.node
                                    },
                                    set: function(e) {
                                        this.node = e
                                    }
                                },
                                isRead: {
                                    get: function() {
                                        return (2097155 & this.flags) != 1
                                    }
                                },
                                isWrite: {
                                    get: function() {
                                        return (2097155 & this.flags) != 0
                                    }
                                },
                                isAppend: {
                                    get: function() {
                                        return 1024 & this.flags
                                    }
                                },
                                flags: {
                                    get: function() {
                                        return this.shared.flags
                                    },
                                    set: function(e) {
                                        this.shared.flags = e
                                    }
                                },
                                position: {
                                    get: function() {
                                        return this.shared.position
                                    },
                                    set: function(e) {
                                        this.shared.position = e
                                    }
                                }
                            })), e = Object.assign(new ei.FSStream, e);
                            var r = ei.nextfd(t, n);
                            return e.fd = r, ei.streams[r] = e, e
                        },
                        closeStream: e => {
                            ei.streams[e] = null
                        },
                        chrdev_stream_ops: {
                            open: e => {
                                var t = ei.getDevice(e.node.rdev);
                                e.stream_ops = t.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
                            },
                            llseek: () => {
                                throw new ei.ErrnoError(70)
                            }
                        },
                        major: e => e >> 8,
                        minor: e => 255 & e,
                        makedev: (e, t) => e << 8 | t,
                        registerDevice: (e, t) => {
                            ei.devices[e] = {
                                stream_ops: t
                            }
                        },
                        getDevice: e => ei.devices[e],
                        getMounts: e => {
                            for (var t = [], n = [e]; n.length;) {
                                var r = n.pop();
                                t.push(r), n.push.apply(n, r.mounts)
                            }
                            return t
                        },
                        syncfs: (e, t) => {
                            "function" == typeof e && (t = e, e = !1), ei.syncFSRequests++, ei.syncFSRequests > 1 && P("warning: " + ei.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                            var n = ei.getMounts(ei.root.mount),
                                r = 0;

                            function i(e) {
                                return ei.syncFSRequests--, t(e)
                            }

                            function s(e) {
                                if (e) return s.errored ? void 0 : (s.errored = !0, i(e));
                                ++r >= n.length && i(null)
                            }
                            n.forEach(t => {
                                if (!t.type.syncfs) return s(null);
                                t.type.syncfs(t, e, s)
                            })
                        },
                        mount: (e, t, n) => {
                            var r, i = "/" === n,
                                s = !n;
                            if (i && ei.root) throw new ei.ErrnoError(10);
                            if (!i && !s) {
                                var o = ei.lookupPath(n, {
                                    follow_mount: !1
                                });
                                if (n = o.path, r = o.node, ei.isMountpoint(r)) throw new ei.ErrnoError(10);
                                if (!ei.isDir(r.mode)) throw new ei.ErrnoError(54)
                            }
                            var l = {
                                    type: e,
                                    opts: t,
                                    mountpoint: n,
                                    mounts: []
                                },
                                a = e.mount(l);
                            return a.mount = l, l.root = a, i ? ei.root = a : r && (r.mounted = l, r.mount && r.mount.mounts.push(l)), a
                        },
                        unmount: e => {
                            var t = ei.lookupPath(e, {
                                follow_mount: !1
                            });
                            if (!ei.isMountpoint(t.node)) throw new ei.ErrnoError(28);
                            var n = t.node,
                                r = n.mounted,
                                i = ei.getMounts(r);
                            Object.keys(ei.nameTable).forEach(e => {
                                for (var t = ei.nameTable[e]; t;) {
                                    var n = t.name_next;
                                    i.includes(t.mount) && ei.destroyNode(t), t = n
                                }
                            }), n.mounted = null;
                            var s = n.mount.mounts.indexOf(r);
                            n.mount.mounts.splice(s, 1)
                        },
                        lookup: (e, t) => e.node_ops.lookup(e, t),
                        mknod: (e, t, n) => {
                            var r = ei.lookupPath(e, {
                                    parent: !0
                                }).node,
                                i = Y.basename(e);
                            if (!i || "." === i || ".." === i) throw new ei.ErrnoError(28);
                            var s = ei.mayCreate(r, i);
                            if (s) throw new ei.ErrnoError(s);
                            if (!r.node_ops.mknod) throw new ei.ErrnoError(63);
                            return r.node_ops.mknod(r, i, t, n)
                        },
                        create: (e, t) => (t = (void 0 !== t ? t : 438) & 4095 | 32768, ei.mknod(e, t, 0)),
                        mkdir: (e, t) => (t = (void 0 !== t ? t : 511) & 1023 | 16384, ei.mknod(e, t, 0)),
                        mkdirTree: (e, t) => {
                            for (var n = e.split("/"), r = "", i = 0; i < n.length; ++i)
                                if (n[i]) {
                                    r += "/" + n[i];
                                    try {
                                        ei.mkdir(r, t)
                                    } catch (e) {
                                        if (20 != e.errno) throw e
                                    }
                                }
                        },
                        mkdev: (e, t, n) => (void 0 === n && (n = t, t = 438), t |= 8192, ei.mknod(e, t, n)),
                        symlink: (e, t) => {
                            if (!Z.resolve(e)) throw new ei.ErrnoError(44);
                            var n = ei.lookupPath(t, {
                                parent: !0
                            }).node;
                            if (!n) throw new ei.ErrnoError(44);
                            var r = Y.basename(t),
                                i = ei.mayCreate(n, r);
                            if (i) throw new ei.ErrnoError(i);
                            if (!n.node_ops.symlink) throw new ei.ErrnoError(63);
                            return n.node_ops.symlink(n, r, e)
                        },
                        rename: (e, t) => {
                            var n, r, i, s = Y.dirname(e),
                                o = Y.dirname(t),
                                l = Y.basename(e),
                                a = Y.basename(t);
                            if (n = ei.lookupPath(e, {
                                    parent: !0
                                }).node, r = ei.lookupPath(t, {
                                    parent: !0
                                }).node, !n || !r) throw new ei.ErrnoError(44);
                            if (n.mount !== r.mount) throw new ei.ErrnoError(75);
                            var c = ei.lookupNode(n, l),
                                u = Z.relative(e, o);
                            if ("." !== u.charAt(0)) throw new ei.ErrnoError(28);
                            if ("." !== (u = Z.relative(t, s)).charAt(0)) throw new ei.ErrnoError(55);
                            try {
                                i = ei.lookupNode(r, a)
                            } catch (e) {}
                            if (c !== i) {
                                var _ = ei.isDir(c.mode),
                                    p = ei.mayDelete(n, l, _);
                                if (p || (p = i ? ei.mayDelete(r, a, _) : ei.mayCreate(r, a))) throw new ei.ErrnoError(p);
                                if (!n.node_ops.rename) throw new ei.ErrnoError(63);
                                if (ei.isMountpoint(c) || i && ei.isMountpoint(i)) throw new ei.ErrnoError(10);
                                if (r !== n && (p = ei.nodePermissions(n, "w"))) throw new ei.ErrnoError(p);
                                ei.hashRemoveNode(c);
                                try {
                                    n.node_ops.rename(c, r, a)
                                } catch (e) {
                                    throw e
                                } finally {
                                    ei.hashAddNode(c)
                                }
                            }
                        },
                        rmdir: e => {
                            var t = ei.lookupPath(e, {
                                    parent: !0
                                }).node,
                                n = Y.basename(e),
                                r = ei.lookupNode(t, n),
                                i = ei.mayDelete(t, n, !0);
                            if (i) throw new ei.ErrnoError(i);
                            if (!t.node_ops.rmdir) throw new ei.ErrnoError(63);
                            if (ei.isMountpoint(r)) throw new ei.ErrnoError(10);
                            t.node_ops.rmdir(t, n), ei.destroyNode(r)
                        },
                        readdir: e => {
                            var t = ei.lookupPath(e, {
                                follow: !0
                            }).node;
                            if (!t.node_ops.readdir) throw new ei.ErrnoError(54);
                            return t.node_ops.readdir(t)
                        },
                        unlink: e => {
                            var t = ei.lookupPath(e, {
                                parent: !0
                            }).node;
                            if (!t) throw new ei.ErrnoError(44);
                            var n = Y.basename(e),
                                r = ei.lookupNode(t, n),
                                i = ei.mayDelete(t, n, !1);
                            if (i) throw new ei.ErrnoError(i);
                            if (!t.node_ops.unlink) throw new ei.ErrnoError(63);
                            if (ei.isMountpoint(r)) throw new ei.ErrnoError(10);
                            t.node_ops.unlink(t, n), ei.destroyNode(r)
                        },
                        readlink: e => {
                            var t = ei.lookupPath(e).node;
                            if (!t) throw new ei.ErrnoError(44);
                            if (!t.node_ops.readlink) throw new ei.ErrnoError(28);
                            return Z.resolve(ei.getPath(t.parent), t.node_ops.readlink(t))
                        },
                        stat: (e, t) => {
                            var n = ei.lookupPath(e, {
                                follow: !t
                            }).node;
                            if (!n) throw new ei.ErrnoError(44);
                            if (!n.node_ops.getattr) throw new ei.ErrnoError(63);
                            return n.node_ops.getattr(n)
                        },
                        lstat: e => ei.stat(e, !0),
                        chmod: (e, t, n) => {
                            var r;
                            if (!(r = "string" == typeof e ? ei.lookupPath(e, {
                                    follow: !n
                                }).node : e).node_ops.setattr) throw new ei.ErrnoError(63);
                            r.node_ops.setattr(r, {
                                mode: 4095 & t | -4096 & r.mode,
                                timestamp: Date.now()
                            })
                        },
                        lchmod: (e, t) => {
                            ei.chmod(e, t, !0)
                        },
                        fchmod: (e, t) => {
                            var n = ei.getStream(e);
                            if (!n) throw new ei.ErrnoError(8);
                            ei.chmod(n.node, t)
                        },
                        chown: (e, t, n, r) => {
                            var i;
                            if (!(i = "string" == typeof e ? ei.lookupPath(e, {
                                    follow: !r
                                }).node : e).node_ops.setattr) throw new ei.ErrnoError(63);
                            i.node_ops.setattr(i, {
                                timestamp: Date.now()
                            })
                        },
                        lchown: (e, t, n) => {
                            ei.chown(e, t, n, !0)
                        },
                        fchown: (e, t, n) => {
                            var r = ei.getStream(e);
                            if (!r) throw new ei.ErrnoError(8);
                            ei.chown(r.node, t, n)
                        },
                        truncate: (e, t) => {
                            if (t < 0) throw new ei.ErrnoError(28);
                            if ("string" == typeof e) {
                                var n;
                                n = ei.lookupPath(e, {
                                    follow: !0
                                }).node
                            } else n = e;
                            if (!n.node_ops.setattr) throw new ei.ErrnoError(63);
                            if (ei.isDir(n.mode)) throw new ei.ErrnoError(31);
                            if (!ei.isFile(n.mode)) throw new ei.ErrnoError(28);
                            var r = ei.nodePermissions(n, "w");
                            if (r) throw new ei.ErrnoError(r);
                            n.node_ops.setattr(n, {
                                size: t,
                                timestamp: Date.now()
                            })
                        },
                        ftruncate: (e, t) => {
                            var n = ei.getStream(e);
                            if (!n) throw new ei.ErrnoError(8);
                            if ((2097155 & n.flags) == 0) throw new ei.ErrnoError(28);
                            ei.truncate(n.node, t)
                        },
                        utime: (e, t, n) => {
                            var r = ei.lookupPath(e, {
                                follow: !0
                            }).node;
                            r.node_ops.setattr(r, {
                                timestamp: Math.max(t, n)
                            })
                        },
                        open: (e, t, n) => {
                            if ("" === e) throw new ei.ErrnoError(44);
                            if (t = "string" == typeof t ? ei.modeStringToFlags(t) : t, n = void 0 === n ? 438 : n, n = 64 & t ? 4095 & n | 32768 : 0, "object" == typeof e) r = e;
                            else {
                                e = Y.normalize(e);
                                try {
                                    var r;
                                    r = ei.lookupPath(e, {
                                        follow: !(131072 & t)
                                    }).node
                                } catch (e) {}
                            }
                            var i = !1;
                            if (64 & t)
                                if (r) {
                                    if (128 & t) throw new ei.ErrnoError(20)
                                } else r = ei.mknod(e, n, 0), i = !0;
                            if (!r) throw new ei.ErrnoError(44);
                            if (ei.isChrdev(r.mode) && (t &= -513), 65536 & t && !ei.isDir(r.mode)) throw new ei.ErrnoError(54);
                            if (!i) {
                                var s = ei.mayOpen(r, t);
                                if (s) throw new ei.ErrnoError(s)
                            }
                            512 & t && !i && ei.truncate(r, 0), t &= -131713;
                            var o = ei.createStream({
                                node: r,
                                path: ei.getPath(r),
                                flags: t,
                                seekable: !0,
                                position: 0,
                                stream_ops: r.stream_ops,
                                ungotten: [],
                                error: !1
                            });
                            return o.stream_ops.open && o.stream_ops.open(o), w.logReadFiles && !(1 & t) && (ei.readFiles || (ei.readFiles = {}), e in ei.readFiles || (ei.readFiles[e] = 1)), o
                        },
                        close: e => {
                            if (ei.isClosed(e)) throw new ei.ErrnoError(8);
                            e.getdents && (e.getdents = null);
                            try {
                                e.stream_ops.close && e.stream_ops.close(e)
                            } catch (e) {
                                throw e
                            } finally {
                                ei.closeStream(e.fd)
                            }
                            e.fd = null
                        },
                        isClosed: e => null === e.fd,
                        llseek: (e, t, n) => {
                            if (ei.isClosed(e)) throw new ei.ErrnoError(8);
                            if (!e.seekable || !e.stream_ops.llseek) throw new ei.ErrnoError(70);
                            if (0 != n && 1 != n && 2 != n) throw new ei.ErrnoError(28);
                            return e.position = e.stream_ops.llseek(e, t, n), e.ungotten = [], e.position
                        },
                        read: (e, t, n, r, i) => {
                            if (r < 0 || i < 0) throw new ei.ErrnoError(28);
                            if (ei.isClosed(e) || (2097155 & e.flags) == 1) throw new ei.ErrnoError(8);
                            if (ei.isDir(e.node.mode)) throw new ei.ErrnoError(31);
                            if (!e.stream_ops.read) throw new ei.ErrnoError(28);
                            var s = void 0 !== i;
                            if (s) {
                                if (!e.seekable) throw new ei.ErrnoError(70)
                            } else i = e.position;
                            var o = e.stream_ops.read(e, t, n, r, i);
                            return s || (e.position += o), o
                        },
                        write: (e, t, n, r, i, s) => {
                            if (r < 0 || i < 0) throw new ei.ErrnoError(28);
                            if (ei.isClosed(e) || (2097155 & e.flags) == 0) throw new ei.ErrnoError(8);
                            if (ei.isDir(e.node.mode)) throw new ei.ErrnoError(31);
                            if (!e.stream_ops.write) throw new ei.ErrnoError(28);
                            e.seekable && 1024 & e.flags && ei.llseek(e, 0, 2);
                            var o = void 0 !== i;
                            if (o) {
                                if (!e.seekable) throw new ei.ErrnoError(70)
                            } else i = e.position;
                            var l = e.stream_ops.write(e, t, n, r, i, s);
                            return o || (e.position += l), l
                        },
                        allocate: (e, t, n) => {
                            if (ei.isClosed(e)) throw new ei.ErrnoError(8);
                            if (t < 0 || n <= 0) throw new ei.ErrnoError(28);
                            if ((2097155 & e.flags) == 0) throw new ei.ErrnoError(8);
                            if (!ei.isFile(e.node.mode) && !ei.isDir(e.node.mode)) throw new ei.ErrnoError(43);
                            if (!e.stream_ops.allocate) throw new ei.ErrnoError(138);
                            e.stream_ops.allocate(e, t, n)
                        },
                        mmap: (e, t, n, r, i) => {
                            if ((2 & r) != 0 && (2 & i) == 0 && (2097155 & e.flags) != 2 || (2097155 & e.flags) == 1) throw new ei.ErrnoError(2);
                            if (!e.stream_ops.mmap) throw new ei.ErrnoError(43);
                            return e.stream_ops.mmap(e, t, n, r, i)
                        },
                        msync: (e, t, n, r, i) => e.stream_ops.msync ? e.stream_ops.msync(e, t, n, r, i) : 0,
                        munmap: e => 0,
                        ioctl: (e, t, n) => {
                            if (!e.stream_ops.ioctl) throw new ei.ErrnoError(59);
                            return e.stream_ops.ioctl(e, t, n)
                        },
                        readFile: (e, t = {}) => {
                            if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", "utf8" !== t.encoding && "binary" !== t.encoding) throw Error('Invalid encoding type "' + t.encoding + '"');
                            var n, r = ei.open(e, t.flags),
                                i = ei.stat(e).size,
                                s = new Uint8Array(i);
                            return ei.read(r, s, 0, i, 0), "utf8" === t.encoding ? n = D(s, 0) : "binary" === t.encoding && (n = s), ei.close(r), n
                        },
                        writeFile: (e, t, n = {}) => {
                            n.flags = n.flags || 577;
                            var r = ei.open(e, n.flags, n.mode);
                            if ("string" == typeof t) {
                                var i = new Uint8Array(R(t) + 1),
                                    s = N(t, i, 0, i.length);
                                ei.write(r, i, 0, s, void 0, n.canOwn)
                            } else if (ArrayBuffer.isView(t)) ei.write(r, t, 0, t.byteLength, void 0, n.canOwn);
                            else throw Error("Unsupported data type");
                            ei.close(r)
                        },
                        cwd: () => ei.currentPath,
                        chdir: e => {
                            var t = ei.lookupPath(e, {
                                follow: !0
                            });
                            if (null === t.node) throw new ei.ErrnoError(44);
                            if (!ei.isDir(t.node.mode)) throw new ei.ErrnoError(54);
                            var n = ei.nodePermissions(t.node, "x");
                            if (n) throw new ei.ErrnoError(n);
                            ei.currentPath = t.path
                        },
                        createDefaultDirectories: () => {
                            ei.mkdir("/tmp"), ei.mkdir("/home"), ei.mkdir("/home/web_user")
                        },
                        createDefaultDevices: () => {
                            ei.mkdir("/dev"), ei.registerDevice(ei.makedev(1, 3), {
                                read: () => 0,
                                write: (e, t, n, r, i) => r
                            }), ei.mkdev("/dev/null", ei.makedev(1, 3)), et.register(ei.makedev(5, 0), et.default_tty_ops), et.register(ei.makedev(6, 0), et.default_tty1_ops), ei.mkdev("/dev/tty", ei.makedev(5, 0)), ei.mkdev("/dev/tty1", ei.makedev(6, 0));
                            var e = function() {
                                if ("object" != typeof crypto || "function" != typeof crypto.getRandomValues) return () => $("randomDevice");
                                var e = new Uint8Array(1);
                                return () => (crypto.getRandomValues(e), e[0])
                            }();
                            ei.createDevice("/dev", "random", e), ei.createDevice("/dev", "urandom", e), ei.mkdir("/dev/shm"), ei.mkdir("/dev/shm/tmp")
                        },
                        createSpecialDirectories: () => {
                            ei.mkdir("/proc");
                            var e = ei.mkdir("/proc/self");
                            ei.mkdir("/proc/self/fd"), ei.mount({
                                mount: () => {
                                    var t = ei.createNode(e, "fd", 16895, 73);
                                    return t.node_ops = {
                                        lookup: (e, t) => {
                                            var n = ei.getStream(+t);
                                            if (!n) throw new ei.ErrnoError(8);
                                            var r = {
                                                parent: null,
                                                mount: {
                                                    mountpoint: "fake"
                                                },
                                                node_ops: {
                                                    readlink: () => n.path
                                                }
                                            };
                                            return r.parent = r, r
                                        }
                                    }, t
                                }
                            }, {}, "/proc/self/fd")
                        },
                        createStandardStreams: () => {
                            w.stdin ? ei.createDevice("/dev", "stdin", w.stdin) : ei.symlink("/dev/tty", "/dev/stdin"), w.stdout ? ei.createDevice("/dev", "stdout", null, w.stdout) : ei.symlink("/dev/tty", "/dev/stdout"), w.stderr ? ei.createDevice("/dev", "stderr", null, w.stderr) : ei.symlink("/dev/tty1", "/dev/stderr"), ei.open("/dev/stdin", 0), ei.open("/dev/stdout", 1), ei.open("/dev/stderr", 1)
                        },
                        ensureErrnoError: () => {
                            ei.ErrnoError || (ei.ErrnoError = function(e, t) {
                                this.node = t, this.setErrno = function(e) {
                                    this.errno = e
                                }, this.setErrno(e), this.message = "FS error"
                            }, ei.ErrnoError.prototype = Error(), ei.ErrnoError.prototype.constructor = ei.ErrnoError, [44].forEach(e => {
                                ei.genericErrors[e] = new ei.ErrnoError(e), ei.genericErrors[e].stack = "<generic error, no stack>"
                            }))
                        },
                        staticInit: () => {
                            ei.ensureErrnoError(), ei.nameTable = Array(4096), ei.mount(er, {}, "/"), ei.createDefaultDirectories(), ei.createDefaultDevices(), ei.createSpecialDirectories(), ei.filesystems = {
                                MEMFS: er
                            }
                        },
                        init: (e, t, n) => {
                            ei.init.initialized = !0, ei.ensureErrnoError(), w.stdin = e || w.stdin, w.stdout = t || w.stdout, w.stderr = n || w.stderr, ei.createStandardStreams()
                        },
                        quit: () => {
                            ei.init.initialized = !1;
                            for (var e = 0; e < ei.streams.length; e++) {
                                var t = ei.streams[e];
                                t && ei.close(t)
                            }
                        },
                        getMode: (e, t) => {
                            var n = 0;
                            return e && (n |= 365), t && (n |= 146), n
                        },
                        findObject: (e, t) => {
                            var n = ei.analyzePath(e, t);
                            return n.exists ? n.object : null
                        },
                        analyzePath: (e, t) => {
                            try {
                                var n = ei.lookupPath(e, {
                                    follow: !t
                                });
                                e = n.path
                            } catch (e) {}
                            var r = {
                                isRoot: !1,
                                exists: !1,
                                error: 0,
                                name: null,
                                path: null,
                                object: null,
                                parentExists: !1,
                                parentPath: null,
                                parentObject: null
                            };
                            try {
                                var n = ei.lookupPath(e, {
                                    parent: !0
                                });
                                r.parentExists = !0, r.parentPath = n.path, r.parentObject = n.node, r.name = Y.basename(e), n = ei.lookupPath(e, {
                                    follow: !t
                                }), r.exists = !0, r.path = n.path, r.object = n.node, r.name = n.node.name, r.isRoot = "/" === n.path
                            } catch (e) {
                                r.error = e.errno
                            }
                            return r
                        },
                        createPath: (e, t, n, r) => {
                            e = "string" == typeof e ? e : ei.getPath(e);
                            for (var i = t.split("/").reverse(); i.length;) {
                                var s = i.pop();
                                if (s) {
                                    var o = Y.join2(e, s);
                                    try {
                                        ei.mkdir(o)
                                    } catch (e) {}
                                    e = o
                                }
                            }
                            return o
                        },
                        createFile: (e, t, n, r, i) => {
                            var s = Y.join2("string" == typeof e ? e : ei.getPath(e), t),
                                o = ei.getMode(r, i);
                            return ei.create(s, o)
                        },
                        createDataFile: (e, t, n, r, i, s) => {
                            var o = t;
                            e && (e = "string" == typeof e ? e : ei.getPath(e), o = t ? Y.join2(e, t) : e);
                            var l = ei.getMode(r, i),
                                a = ei.create(o, l);
                            if (n) {
                                if ("string" == typeof n) {
                                    for (var c = Array(n.length), u = 0, _ = n.length; u < _; ++u) c[u] = n.charCodeAt(u);
                                    n = c
                                }
                                ei.chmod(a, 146 | l);
                                var p = ei.open(a, 577);
                                ei.write(p, n, 0, n.length, 0, s), ei.close(p), ei.chmod(a, l)
                            }
                            return a
                        },
                        createDevice: (e, t, n, r) => {
                            var i = Y.join2("string" == typeof e ? e : ei.getPath(e), t),
                                s = ei.getMode(!!n, !!r);
                            ei.createDevice.major || (ei.createDevice.major = 64);
                            var o = ei.makedev(ei.createDevice.major++, 0);
                            return ei.registerDevice(o, {
                                open: e => {
                                    e.seekable = !1
                                },
                                close: e => {
                                    r && r.buffer && r.buffer.length && r(10)
                                },
                                read: (e, t, r, i, s) => {
                                    for (var o, l = 0, a = 0; a < i; a++) {
                                        try {
                                            o = n()
                                        } catch (e) {
                                            throw new ei.ErrnoError(29)
                                        }
                                        if (void 0 === o && 0 === l) throw new ei.ErrnoError(6);
                                        if (null == o) break;
                                        l++, t[r + a] = o
                                    }
                                    return l && (e.node.timestamp = Date.now()), l
                                },
                                write: (e, t, n, i, s) => {
                                    for (var o = 0; o < i; o++) try {
                                        r(t[n + o])
                                    } catch (e) {
                                        throw new ei.ErrnoError(29)
                                    }
                                    return i && (e.node.timestamp = Date.now()), o
                                }
                            }), ei.mkdev(i, s, o)
                        },
                        forceLoadFile: e => {
                            if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                            if ("u" > typeof XMLHttpRequest) throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                            if (o) try {
                                e.contents = ee(o(e.url), !0), e.usedBytes = e.contents.length
                            } catch (e) {
                                throw new ei.ErrnoError(29)
                            } else throw Error("Cannot load without read() or XMLHttpRequest.")
                        },
                        createLazyFile: (e, t, n, r, i) => {
                            function s() {
                                this.lengthKnown = !1, this.chunks = []
                            }
                            if (s.prototype.get = function(e) {
                                    if (!(e > this.length - 1) && !(e < 0)) {
                                        var t = e % this.chunkSize,
                                            n = e / this.chunkSize | 0;
                                        return this.getter(n)[t]
                                    }
                                }, s.prototype.setDataGetter = function(e) {
                                    this.getter = e
                                }, s.prototype.cacheLength = function() {
                                    var e, t = new XMLHttpRequest;
                                    if (t.open("HEAD", n, !1), t.send(null), !(t.status >= 200 && t.status < 300 || 304 === t.status)) throw Error("Couldn't load " + n + ". Status: " + t.status);
                                    var r = Number(t.getResponseHeader("Content-length")),
                                        i = (e = t.getResponseHeader("Accept-Ranges")) && "bytes" === e,
                                        s = (e = t.getResponseHeader("Content-Encoding")) && "gzip" === e,
                                        o = 1048576;
                                    i || (o = r);
                                    var l = this;
                                    l.setDataGetter(e => {
                                        var t = e * o,
                                            i = (e + 1) * o - 1;
                                        if (i = Math.min(i, r - 1), void 0 === l.chunks[e] && (l.chunks[e] = ((e, t) => {
                                                if (e > t) throw Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
                                                if (t > r - 1) throw Error("only " + r + " bytes available! programmer error!");
                                                var i = new XMLHttpRequest;
                                                if (i.open("GET", n, !1), r !== o && i.setRequestHeader("Range", "bytes=" + e + "-" + t), i.responseType = "arraybuffer", i.overrideMimeType && i.overrideMimeType("text/plain; charset=x-user-defined"), i.send(null), !(i.status >= 200 && i.status < 300 || 304 === i.status)) throw Error("Couldn't load " + n + ". Status: " + i.status);
                                                return void 0 !== i.response ? new Uint8Array(i.response || []) : ee(i.responseText || "", !0)
                                            })(t, i)), void 0 === l.chunks[e]) throw Error("doXHR failed!");
                                        return l.chunks[e]
                                    }), (s || !r) && (o = r = 1, o = r = this.getter(0).length, O("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = r, this._chunkSize = o, this.lengthKnown = !0
                                }, "u" > typeof XMLHttpRequest) {
                                if (!T) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                                var o = new s;
                                Object.defineProperties(o, {
                                    length: {
                                        get: function() {
                                            return this.lengthKnown || this.cacheLength(), this._length
                                        }
                                    },
                                    chunkSize: {
                                        get: function() {
                                            return this.lengthKnown || this.cacheLength(), this._chunkSize
                                        }
                                    }
                                });
                                var l = {
                                    isDevice: !1,
                                    contents: o
                                }
                            } else var l = {
                                isDevice: !1,
                                url: n
                            };
                            var a = ei.createFile(e, t, l, r, i);
                            l.contents ? a.contents = l.contents : l.url && (a.contents = null, a.url = l.url), Object.defineProperties(a, {
                                usedBytes: {
                                    get: function() {
                                        return this.contents.length
                                    }
                                }
                            });
                            var c = {};

                            function u(e, t, n, r, i) {
                                var s = e.node.contents;
                                if (i >= s.length) return 0;
                                var o = Math.min(s.length - i, r);
                                if (s.slice)
                                    for (var l = 0; l < o; l++) t[n + l] = s[i + l];
                                else
                                    for (var l = 0; l < o; l++) t[n + l] = s.get(i + l);
                                return o
                            }
                            return Object.keys(a.stream_ops).forEach(e => {
                                var t = a.stream_ops[e];
                                c[e] = function() {
                                    return ei.forceLoadFile(a), t.apply(null, arguments)
                                }
                            }), c.read = (e, t, n, r, i) => (ei.forceLoadFile(a), u(e, t, n, r, i)), c.mmap = (e, t, n, r, i) => {
                                ei.forceLoadFile(a);
                                var s = en(t);
                                if (!s) throw new ei.ErrnoError(48);
                                return u(e, _, s, t, n), {
                                    ptr: s,
                                    allocated: !0
                                }
                            }, a.stream_ops = c, a
                        },
                        createPreloadedFile: (e, t, n, r, i, s, o, a, c, u) => {
                            var _ = t ? Z.resolve(Y.join2(e, t)) : e,
                                p = "cp " + _;

                            function f(n) {
                                function l(n) {
                                    u && u(), a || ei.createDataFile(e, t, n, r, i, c), s && s(), G(p)
                                }
                                Browser.handledByPreloadPlugin(n, _, l, () => {
                                    o && o(), G(p)
                                }) || l(n)
                            }
                            if (V(p), "string" == typeof n) {
                                var d = "al " + n;
                                l(n, e => {
                                    var t;
                                    t = 'Loading data file "' + n + '" failed (no arrayBuffer).', e || $(t), f(new Uint8Array(e)), d && G(d)
                                }, e => {
                                    if (o) o();
                                    else throw 'Loading data file "' + n + '" failed.'
                                }), d && V(d)
                            } else f(n)
                        },
                        indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
                        DB_NAME: () => "EM_FS_" + window.location.pathname,
                        DB_VERSION: 20,
                        DB_STORE_NAME: "FILE_DATA",
                        saveFilesToDB: (e, t, n) => {
                            t = t || (() => {}), n = n || (() => {});
                            var r = ei.indexedDB();
                            try {
                                var i = r.open(ei.DB_NAME(), ei.DB_VERSION)
                            } catch (e) {
                                return n(e)
                            }
                            i.onupgradeneeded = () => {
                                O("creating db"), i.result.createObjectStore(ei.DB_STORE_NAME)
                            }, i.onsuccess = () => {
                                var r = i.result.transaction([ei.DB_STORE_NAME], "readwrite"),
                                    s = r.objectStore(ei.DB_STORE_NAME),
                                    o = 0,
                                    l = 0,
                                    a = e.length;

                                function c() {
                                    0 == l ? t() : n()
                                }
                                e.forEach(e => {
                                    var t = s.put(ei.analyzePath(e).object.contents, e);
                                    t.onsuccess = () => {
                                        ++o + l == a && c()
                                    }, t.onerror = () => {
                                        l++, o + l == a && c()
                                    }
                                }), r.onerror = n
                            }, i.onerror = n
                        },
                        loadFilesFromDB: (e, t, n) => {
                            t = t || (() => {}), n = n || (() => {});
                            var r = ei.indexedDB();
                            try {
                                var i = r.open(ei.DB_NAME(), ei.DB_VERSION)
                            } catch (e) {
                                return n(e)
                            }
                            i.onupgradeneeded = n, i.onsuccess = () => {
                                var r = i.result;
                                try {
                                    var s = r.transaction([ei.DB_STORE_NAME], "readonly")
                                } catch (e) {
                                    n(e);
                                    return
                                }
                                var o = s.objectStore(ei.DB_STORE_NAME),
                                    l = 0,
                                    a = 0,
                                    c = e.length;

                                function u() {
                                    0 == a ? t() : n()
                                }
                                e.forEach(e => {
                                    var t = o.get(e);
                                    t.onsuccess = () => {
                                        ei.analyzePath(e).exists && ei.unlink(e), ei.createDataFile(Y.dirname(e), Y.basename(e), t.result, !0, !0, !0), ++l + a == c && u()
                                    }, t.onerror = () => {
                                        a++, l + a == c && u()
                                    }
                                }), s.onerror = n
                            }, i.onerror = n
                        }
                    },
                    es = {
                        DEFAULT_POLLMASK: 5,
                        calculateAt: function(e, t, n) {
                            if (Y.isAbs(t)) return t;
                            if (-100 === e) r = ei.cwd();
                            else {
                                var r;
                                r = es.getStreamFromFD(e).path
                            }
                            if (0 == t.length) {
                                if (!n) throw new ei.ErrnoError(44);
                                return r
                            }
                            return Y.join2(r, t)
                        },
                        doStat: function(e, t, n) {
                            try {
                                var r = e(t)
                            } catch (e) {
                                if (e && e.node && Y.normalize(t) !== Y.normalize(ei.getPath(e.node))) return -54;
                                throw e
                            }
                            d[n >> 2] = r.dev, d[n + 8 >> 2] = r.ino, d[n + 12 >> 2] = r.mode, m[n + 16 >> 2] = r.nlink, d[n + 20 >> 2] = r.uid, d[n + 24 >> 2] = r.gid, d[n + 28 >> 2] = r.rdev, y = [r.size >>> 0, +Math.abs(g = r.size) >= 1 ? g > 0 ? Math.min(+Math.floor(g / 0x100000000), 0xffffffff) >>> 0 : ~~Math.ceil((g - (~~g >>> 0)) / 0x100000000) >>> 0 : 0], d[n + 40 >> 2] = y[0], d[n + 44 >> 2] = y[1], d[n + 48 >> 2] = 4096, d[n + 52 >> 2] = r.blocks;
                            var i = r.atime.getTime(),
                                s = r.mtime.getTime(),
                                o = r.ctime.getTime();
                            return y = [Math.floor(i / 1e3) >>> 0, +Math.abs(g = Math.floor(i / 1e3)) >= 1 ? g > 0 ? Math.min(+Math.floor(g / 0x100000000), 0xffffffff) >>> 0 : ~~Math.ceil((g - (~~g >>> 0)) / 0x100000000) >>> 0 : 0], d[n + 56 >> 2] = y[0], d[n + 60 >> 2] = y[1], m[n + 64 >> 2] = i % 1e3 * 1e3, y = [Math.floor(s / 1e3) >>> 0, +Math.abs(g = Math.floor(s / 1e3)) >= 1 ? g > 0 ? Math.min(+Math.floor(g / 0x100000000), 0xffffffff) >>> 0 : ~~Math.ceil((g - (~~g >>> 0)) / 0x100000000) >>> 0 : 0], d[n + 72 >> 2] = y[0], d[n + 76 >> 2] = y[1], m[n + 80 >> 2] = s % 1e3 * 1e3, y = [Math.floor(o / 1e3) >>> 0, +Math.abs(g = Math.floor(o / 1e3)) >= 1 ? g > 0 ? Math.min(+Math.floor(g / 0x100000000), 0xffffffff) >>> 0 : ~~Math.ceil((g - (~~g >>> 0)) / 0x100000000) >>> 0 : 0], d[n + 88 >> 2] = y[0], d[n + 92 >> 2] = y[1], m[n + 96 >> 2] = o % 1e3 * 1e3, y = [r.ino >>> 0, +Math.abs(g = r.ino) >= 1 ? g > 0 ? Math.min(+Math.floor(g / 0x100000000), 0xffffffff) >>> 0 : ~~Math.ceil((g - (~~g >>> 0)) / 0x100000000) >>> 0 : 0], d[n + 104 >> 2] = y[0], d[n + 108 >> 2] = y[1], 0
                        },
                        doMsync: function(e, t, n, r, i) {
                            if (!ei.isFile(t.node.mode)) throw new ei.ErrnoError(43);
                            if (2 & r) return 0;
                            var s = p.slice(e, e + n);
                            ei.msync(t, s, i, n, r)
                        },
                        varargs: void 0,
                        get: function() {
                            return es.varargs += 4, d[es.varargs - 4 >> 2]
                        },
                        getStr: function(e) {
                            return e ? D(p, e, void 0) : ""
                        },
                        getStreamFromFD: function(e) {
                            var t = ei.getStream(e);
                            if (!t) throw new ei.ErrnoError(8);
                            return t
                        }
                    };

                function eo(e) {
                    return e < -0x20000000000000 || e > 0x20000000000000 ? NaN : Number(e)
                }

                function el(e) {
                    return m[e >> 2] + 0x100000000 * d[e + 4 >> 2]
                }
                var ea = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
                    ec = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

                function eu(e) {
                    var t = R(e) + 1,
                        n = eh(t);
                    return n && N(e, _, n, t), n
                }
                var e_ = {};

                function ep() {
                    if (!ep.strings) {
                        var e = {
                            USER: "web_user",
                            LOGNAME: "web_user",
                            PATH: "/",
                            PWD: "/",
                            HOME: "/home/web_user",
                            LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                            _: I || "./this.program"
                        };
                        for (var t in e_) void 0 === e_[t] ? delete e[t] : e[t] = e_[t];
                        var n = [];
                        for (var t in e) n.push(t + "=" + e[t]);
                        ep.strings = n
                    }
                    return ep.strings
                }
                var ef = function(e, t, n, r) {
                    e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = ei.nextInode++, this.name = t, this.mode = n, this.node_ops = {}, this.stream_ops = {}, this.rdev = r
                };
                Object.defineProperties(ef.prototype, {
                    read: {
                        get: function() {
                            return (365 & this.mode) == 365
                        },
                        set: function(e) {
                            e ? this.mode |= 365 : this.mode &= -366
                        }
                    },
                    write: {
                        get: function() {
                            return (146 & this.mode) == 146
                        },
                        set: function(e) {
                            e ? this.mode |= 146 : this.mode &= -147
                        }
                    },
                    isFolder: {
                        get: function() {
                            return ei.isDir(this.mode)
                        }
                    },
                    isDevice: {
                        get: function() {
                            return ei.isChrdev(this.mode)
                        }
                    }
                }), ei.FSNode = ef, ei.staticInit();
                var ed = {
                    __syscall_chmod: function(e, t) {
                        try {
                            return e = es.getStr(e), ei.chmod(e, t), 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_faccessat: function(e, t, n, r) {
                        try {
                            if (t = es.getStr(t), t = es.calculateAt(e, t), -8 & n) return -28;
                            var i = ei.lookupPath(t, {
                                follow: !0
                            }).node;
                            if (!i) return -44;
                            var s = "";
                            if (4 & n && (s += "r"), 2 & n && (s += "w"), 1 & n && (s += "x"), s && ei.nodePermissions(i, s)) return -2;
                            return 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_fchmod: function(e, t) {
                        try {
                            return ei.fchmod(e, t), 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_fchown32: function(e, t, n) {
                        try {
                            return ei.fchown(e, t, n), 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_fcntl64: function(e, t, n) {
                        es.varargs = n;
                        try {
                            var r = es.getStreamFromFD(e);
                            switch (t) {
                                case 0:
                                    var i = es.get();
                                    if (i < 0) return -28;
                                    return ei.createStream(r, i).fd;
                                case 1:
                                case 2:
                                case 6:
                                case 7:
                                    return 0;
                                case 3:
                                    return r.flags;
                                case 4:
                                    var i = es.get();
                                    return r.flags |= i, 0;
                                case 5:
                                    var i = es.get();
                                    return f[i + 0 >> 1] = 2, 0;
                                case 16:
                                case 8:
                                default:
                                    return -28;
                                case 9:
                                    return d[em() >> 2] = 28, -1
                            }
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_fstat64: function(e, t) {
                        try {
                            var n = es.getStreamFromFD(e);
                            return es.doStat(ei.stat, n.path, t)
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_ftruncate64: function(e, t) {
                        try {
                            if (t = eo(t), isNaN(t)) return -61;
                            return ei.ftruncate(e, t), 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_getcwd: function(e, t) {
                        try {
                            if (0 === t) return -28;
                            var n = ei.cwd(),
                                r = R(n) + 1;
                            if (t < r) return -68;
                            return N(n, p, e, t), r
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_ioctl: function(e, t, n) {
                        es.varargs = n;
                        try {
                            var r = es.getStreamFromFD(e);
                            switch (t) {
                                case 21509:
                                case 21505:
                                case 21510:
                                case 21511:
                                case 21512:
                                case 21506:
                                case 21507:
                                case 21508:
                                case 21523:
                                case 21524:
                                    if (!r.tty) return -59;
                                    return 0;
                                case 21519:
                                    if (!r.tty) return -59;
                                    var i = es.get();
                                    return d[i >> 2] = 0, 0;
                                case 21520:
                                    if (!r.tty) return -59;
                                    return -28;
                                case 21531:
                                    var i = es.get();
                                    return ei.ioctl(r, t, i);
                                default:
                                    return -28
                            }
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_lstat64: function(e, t) {
                        try {
                            return e = es.getStr(e), es.doStat(ei.lstat, e, t)
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_mkdirat: function(e, t, n) {
                        try {
                            return t = es.getStr(t), t = es.calculateAt(e, t), t = Y.normalize(t), "/" === t[t.length - 1] && (t = t.substr(0, t.length - 1)), ei.mkdir(t, n, 0), 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_newfstatat: function(e, t, n, r) {
                        try {
                            t = es.getStr(t);
                            var i = 256 & r,
                                s = 4096 & r;
                            return r &= -6401, t = es.calculateAt(e, t, s), es.doStat(i ? ei.lstat : ei.stat, t, n)
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_openat: function(e, t, n, r) {
                        es.varargs = r;
                        try {
                            t = es.getStr(t), t = es.calculateAt(e, t);
                            var i = r ? es.get() : 0;
                            return ei.open(t, n, i).fd
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_readlinkat: function(e, t, n, r) {
                        try {
                            if (t = es.getStr(t), t = es.calculateAt(e, t), r <= 0) return -28;
                            var i, s = ei.readlink(t),
                                o = Math.min(r, R(s)),
                                l = _[n + o];
                            return i = r + 1, N(s, p, n, i), _[n + o] = l, o
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_rmdir: function(e) {
                        try {
                            return e = es.getStr(e), ei.rmdir(e), 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_stat64: function(e, t) {
                        try {
                            return e = es.getStr(e), es.doStat(ei.stat, e, t)
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_unlinkat: function(e, t, n) {
                        try {
                            return t = es.getStr(t), t = es.calculateAt(e, t), 0 === n ? ei.unlink(t) : 512 === n ? ei.rmdir(t) : $("Invalid flags passed to unlinkat"), 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    __syscall_utimensat: function(e, t, n, r) {
                        try {
                            if (t = es.getStr(t), t = es.calculateAt(e, t, !0), n) {
                                var i = el(n),
                                    s = d[n + 8 >> 2];
                                o = 1e3 * i + s / 1e6, n += 16, i = el(n), s = d[n + 8 >> 2], l = 1e3 * i + s / 1e6
                            } else var o = Date.now(),
                                l = o;
                            return ei.utime(t, o, l), 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    _emscripten_get_now_is_monotonic: function() {
                        return !0
                    },
                    _localtime_js: function(e, t) {
                        var n, r = new Date(1e3 * el(e));
                        d[t >> 2] = r.getSeconds(), d[t + 4 >> 2] = r.getMinutes(), d[t + 8 >> 2] = r.getHours(), d[t + 12 >> 2] = r.getDate(), d[t + 16 >> 2] = r.getMonth(), d[t + 20 >> 2] = r.getFullYear() - 1900, d[t + 24 >> 2] = r.getDay();
                        var i = 0 | ((n = r.getFullYear()) % 4 == 0 && (n % 100 != 0 || n % 400 == 0) ? ea : ec)[r.getMonth()] + r.getDate() - 1;
                        d[t + 28 >> 2] = i, d[t + 36 >> 2] = -(60 * r.getTimezoneOffset());
                        var s = new Date(r.getFullYear(), 0, 1),
                            o = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(),
                            l = s.getTimezoneOffset(),
                            a = 0 | (o != l && r.getTimezoneOffset() == Math.min(l, o));
                        d[t + 32 >> 2] = a
                    },
                    _mmap_js: function(e, t, n, r, i, s, o) {
                        try {
                            var l = es.getStreamFromFD(r),
                                a = ei.mmap(l, e, i, t, n),
                                c = a.ptr;
                            return d[s >> 2] = a.allocated, m[o >> 2] = c, 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    _munmap_js: function(e, t, n, r, i, s) {
                        try {
                            var o = es.getStreamFromFD(i);
                            2 & n && es.doMsync(e, o, t, r, s), ei.munmap(o)
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return -e.errno
                        }
                    },
                    _tzset_js: function(e, t, n) {
                        var r = new Date().getFullYear(),
                            i = new Date(r, 0, 1),
                            s = new Date(r, 6, 1),
                            o = i.getTimezoneOffset(),
                            l = s.getTimezoneOffset(),
                            a = Math.max(o, l);

                        function c(e) {
                            var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                            return t ? t[1] : "GMT"
                        }
                        m[e >> 2] = 60 * a, d[t >> 2] = Number(o != l);
                        var u = c(i),
                            _ = c(s),
                            p = eu(u),
                            f = eu(_);
                        l < o ? (m[n >> 2] = p, m[n + 4 >> 2] = f) : (m[n >> 2] = f, m[n + 4 >> 2] = p)
                    },
                    emscripten_date_now: function() {
                        return Date.now()
                    },
                    emscripten_get_now: () => performance.now(),
                    emscripten_resize_heap: function(e) {
                        var t = p.length;
                        if ((e >>>= 0) > 0x80000000) return !1;
                        let n = (e, t) => e + (t - e % t) % t;
                        for (var r = 1; r <= 4; r *= 2) {
                            var i = t * (1 + .2 / r);
                            if (i = Math.min(i, e + 0x6000000), function(e) {
                                    var t = u.buffer;
                                    try {
                                        return u.grow(e - t.byteLength + 65535 >>> 16), j(), 1
                                    } catch (e) {}
                                }(Math.min(0x80000000, n(Math.max(e, i), 65536)))) return !0
                        }
                        return !1
                    },
                    environ_get: function(e, t) {
                        var n = 0;
                        return ep().forEach(function(r, i) {
                            var s = t + n;
                            m[e + 4 * i >> 2] = s;
                            for (var o = s, l = 0; l < r.length; ++l) _[0 | o++] = r.charCodeAt(l);
                            _[0 | o] = 0, n += r.length + 1
                        }), 0
                    },
                    environ_sizes_get: function(e, t) {
                        var n = ep();
                        m[e >> 2] = n.length;
                        var r = 0;
                        return n.forEach(function(e) {
                            r += e.length + 1
                        }), m[t >> 2] = r, 0
                    },
                    fd_close: function(e) {
                        try {
                            var t = es.getStreamFromFD(e);
                            return ei.close(t), 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return e.errno
                        }
                    },
                    fd_fdstat_get: function(e, t) {
                        try {
                            var n = es.getStreamFromFD(e),
                                r = n.tty ? 2 : ei.isDir(n.mode) ? 3 : ei.isLink(n.mode) ? 7 : 4;
                            return _[0 | t] = r, 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return e.errno
                        }
                    },
                    fd_read: function(e, t, n, r) {
                        try {
                            var i = es.getStreamFromFD(e),
                                s = function(e, t, n, r) {
                                    for (var i = 0, s = 0; s < n; s++) {
                                        var o = m[t >> 2],
                                            l = m[t + 4 >> 2];
                                        t += 8;
                                        var a = ei.read(e, _, o, l, r);
                                        if (a < 0) return -1;
                                        if (i += a, a < l) break;
                                        void 0 !== r && (r += a)
                                    }
                                    return i
                                }(i, t, n);
                            return m[r >> 2] = s, 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return e.errno
                        }
                    },
                    fd_seek: function(e, t, n, r) {
                        try {
                            if (t = eo(t), isNaN(t)) return 61;
                            var i = es.getStreamFromFD(e);
                            return ei.llseek(i, t, n), y = [i.position >>> 0, (g = i.position, +Math.abs(g) >= 1 ? g > 0 ? Math.min(+Math.floor(g / 0x100000000), 0xffffffff) >>> 0 : ~~Math.ceil((g - (~~g >>> 0)) / 0x100000000) >>> 0 : 0)], d[r >> 2] = y[0], d[r + 4 >> 2] = y[1], i.getdents && 0 === t && 0 === n && (i.getdents = null), 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return e.errno
                        }
                    },
                    fd_sync: function(e) {
                        try {
                            var t = es.getStreamFromFD(e);
                            if (t.stream_ops && t.stream_ops.fsync) return t.stream_ops.fsync(t);
                            return 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return e.errno
                        }
                    },
                    fd_write: function(e, t, n, r) {
                        try {
                            var i = es.getStreamFromFD(e),
                                s = function(e, t, n, r) {
                                    for (var i = 0, s = 0; s < n; s++) {
                                        var o = m[t >> 2],
                                            l = m[t + 4 >> 2];
                                        t += 8;
                                        var a = ei.write(e, _, o, l, r);
                                        if (a < 0) return -1;
                                        i += a, void 0 !== r && (r += a)
                                    }
                                    return i
                                }(i, t, n);
                            return m[r >> 2] = s, 0
                        } catch (e) {
                            if (void 0 === ei || !(e instanceof ei.ErrnoError)) throw e;
                            return e.errno
                        }
                    },
                    memory: u
                };
                ! function() {
                    var e = {
                        env: ed,
                        wasi_snapshot_preview1: ed
                    };

                    function t(e, t) {
                        var n;
                        w.asm = e.exports, w.asm.__indirect_function_table, n = w.asm.__wasm_call_ctors, B.unshift(n), G("wasm-instantiate")
                    }

                    function n(e) {
                        t(e.instance)
                    }

                    function r(t) {
                        return (!c && (k || T) && "function" == typeof fetch ? fetch(h, {
                            credentials: "same-origin"
                        }).then(function(e) {
                            if (!e.ok) throw "failed to load wasm binary file at '" + h + "'";
                            return e.arrayBuffer()
                        }).catch(function() {
                            return J(h)
                        }) : Promise.resolve().then(function() {
                            return J(h)
                        })).then(function(t) {
                            return WebAssembly.instantiate(t, e)
                        }).then(function(e) {
                            return e
                        }).then(t, function(e) {
                            P("failed to asynchronously prepare wasm: " + e), $(e)
                        })
                    }
                    if (V("wasm-instantiate"), w.instantiateWasm) try {
                        return w.instantiateWasm(e, t)
                    } catch (e) {
                        P("Module.instantiateWasm callback failed with error: " + e), s(e)
                    }(!c && "function" == typeof WebAssembly.instantiateStreaming && !K(h) && "function" == typeof fetch ? fetch(h, {
                        credentials: "same-origin"
                    }).then(function(t) {
                        return WebAssembly.instantiateStreaming(t, e).then(n, function(e) {
                            return P("wasm streaming compile failed: " + e), P("falling back to ArrayBuffer instantiation"), r(n)
                        })
                    }) : r(n)).catch(s)
                }(), w.___wasm_call_ctors = function() {
                    return (w.___wasm_call_ctors = w.asm.__wasm_call_ctors).apply(null, arguments)
                }, w._sqlite3_status64 = function() {
                    return (w._sqlite3_status64 = w.asm.sqlite3_status64).apply(null, arguments)
                }, w._sqlite3_status = function() {
                    return (w._sqlite3_status = w.asm.sqlite3_status).apply(null, arguments)
                }, w._sqlite3_db_status = function() {
                    return (w._sqlite3_db_status = w.asm.sqlite3_db_status).apply(null, arguments)
                }, w._sqlite3_msize = function() {
                    return (w._sqlite3_msize = w.asm.sqlite3_msize).apply(null, arguments)
                }, w._sqlite3_vfs_find = function() {
                    return (w._sqlite3_vfs_find = w.asm.sqlite3_vfs_find).apply(null, arguments)
                }, w._sqlite3_initialize = function() {
                    return (w._sqlite3_initialize = w.asm.sqlite3_initialize).apply(null, arguments)
                }, w._sqlite3_malloc = function() {
                    return (w._sqlite3_malloc = w.asm.sqlite3_malloc).apply(null, arguments)
                }, w._sqlite3_free = function() {
                    return (w._sqlite3_free = w.asm.sqlite3_free).apply(null, arguments)
                }, w._sqlite3_vfs_register = function() {
                    return (w._sqlite3_vfs_register = w.asm.sqlite3_vfs_register).apply(null, arguments)
                }, w._sqlite3_vfs_unregister = function() {
                    return (w._sqlite3_vfs_unregister = w.asm.sqlite3_vfs_unregister).apply(null, arguments)
                }, w._sqlite3_malloc64 = function() {
                    return (w._sqlite3_malloc64 = w.asm.sqlite3_malloc64).apply(null, arguments)
                }, w._sqlite3_realloc = function() {
                    return (w._sqlite3_realloc = w.asm.sqlite3_realloc).apply(null, arguments)
                }, w._sqlite3_realloc64 = function() {
                    return (w._sqlite3_realloc64 = w.asm.sqlite3_realloc64).apply(null, arguments)
                }, w._sqlite3_value_text = function() {
                    return (w._sqlite3_value_text = w.asm.sqlite3_value_text).apply(null, arguments)
                }, w._sqlite3_randomness = function() {
                    return (w._sqlite3_randomness = w.asm.sqlite3_randomness).apply(null, arguments)
                }, w._sqlite3_stricmp = function() {
                    return (w._sqlite3_stricmp = w.asm.sqlite3_stricmp).apply(null, arguments)
                }, w._sqlite3_strnicmp = function() {
                    return (w._sqlite3_strnicmp = w.asm.sqlite3_strnicmp).apply(null, arguments)
                }, w._sqlite3_uri_parameter = function() {
                    return (w._sqlite3_uri_parameter = w.asm.sqlite3_uri_parameter).apply(null, arguments)
                };
                var em = w.___errno_location = function() {
                        return (em = w.___errno_location = w.asm.__errno_location).apply(null, arguments)
                    },
                    eh = (w._sqlite3_uri_boolean = function() {
                        return (w._sqlite3_uri_boolean = w.asm.sqlite3_uri_boolean).apply(null, arguments)
                    }, w._sqlite3_serialize = function() {
                        return (w._sqlite3_serialize = w.asm.sqlite3_serialize).apply(null, arguments)
                    }, w._sqlite3_prepare_v2 = function() {
                        return (w._sqlite3_prepare_v2 = w.asm.sqlite3_prepare_v2).apply(null, arguments)
                    }, w._sqlite3_step = function() {
                        return (w._sqlite3_step = w.asm.sqlite3_step).apply(null, arguments)
                    }, w._sqlite3_column_int64 = function() {
                        return (w._sqlite3_column_int64 = w.asm.sqlite3_column_int64).apply(null, arguments)
                    }, w._sqlite3_column_int = function() {
                        return (w._sqlite3_column_int = w.asm.sqlite3_column_int).apply(null, arguments)
                    }, w._sqlite3_finalize = function() {
                        return (w._sqlite3_finalize = w.asm.sqlite3_finalize).apply(null, arguments)
                    }, w._sqlite3_file_control = function() {
                        return (w._sqlite3_file_control = w.asm.sqlite3_file_control).apply(null, arguments)
                    }, w._sqlite3_reset = function() {
                        return (w._sqlite3_reset = w.asm.sqlite3_reset).apply(null, arguments)
                    }, w._sqlite3_deserialize = function() {
                        return (w._sqlite3_deserialize = w.asm.sqlite3_deserialize).apply(null, arguments)
                    }, w._sqlite3_clear_bindings = function() {
                        return (w._sqlite3_clear_bindings = w.asm.sqlite3_clear_bindings).apply(null, arguments)
                    }, w._sqlite3_value_blob = function() {
                        return (w._sqlite3_value_blob = w.asm.sqlite3_value_blob).apply(null, arguments)
                    }, w._sqlite3_value_bytes = function() {
                        return (w._sqlite3_value_bytes = w.asm.sqlite3_value_bytes).apply(null, arguments)
                    }, w._sqlite3_value_double = function() {
                        return (w._sqlite3_value_double = w.asm.sqlite3_value_double).apply(null, arguments)
                    }, w._sqlite3_value_int = function() {
                        return (w._sqlite3_value_int = w.asm.sqlite3_value_int).apply(null, arguments)
                    }, w._sqlite3_value_int64 = function() {
                        return (w._sqlite3_value_int64 = w.asm.sqlite3_value_int64).apply(null, arguments)
                    }, w._sqlite3_value_subtype = function() {
                        return (w._sqlite3_value_subtype = w.asm.sqlite3_value_subtype).apply(null, arguments)
                    }, w._sqlite3_value_pointer = function() {
                        return (w._sqlite3_value_pointer = w.asm.sqlite3_value_pointer).apply(null, arguments)
                    }, w._sqlite3_value_type = function() {
                        return (w._sqlite3_value_type = w.asm.sqlite3_value_type).apply(null, arguments)
                    }, w._sqlite3_value_nochange = function() {
                        return (w._sqlite3_value_nochange = w.asm.sqlite3_value_nochange).apply(null, arguments)
                    }, w._sqlite3_value_frombind = function() {
                        return (w._sqlite3_value_frombind = w.asm.sqlite3_value_frombind).apply(null, arguments)
                    }, w._sqlite3_value_dup = function() {
                        return (w._sqlite3_value_dup = w.asm.sqlite3_value_dup).apply(null, arguments)
                    }, w._sqlite3_value_free = function() {
                        return (w._sqlite3_value_free = w.asm.sqlite3_value_free).apply(null, arguments)
                    }, w._sqlite3_result_blob = function() {
                        return (w._sqlite3_result_blob = w.asm.sqlite3_result_blob).apply(null, arguments)
                    }, w._sqlite3_result_error_toobig = function() {
                        return (w._sqlite3_result_error_toobig = w.asm.sqlite3_result_error_toobig).apply(null, arguments)
                    }, w._sqlite3_result_error_nomem = function() {
                        return (w._sqlite3_result_error_nomem = w.asm.sqlite3_result_error_nomem).apply(null, arguments)
                    }, w._sqlite3_result_double = function() {
                        return (w._sqlite3_result_double = w.asm.sqlite3_result_double).apply(null, arguments)
                    }, w._sqlite3_result_error = function() {
                        return (w._sqlite3_result_error = w.asm.sqlite3_result_error).apply(null, arguments)
                    }, w._sqlite3_result_int = function() {
                        return (w._sqlite3_result_int = w.asm.sqlite3_result_int).apply(null, arguments)
                    }, w._sqlite3_result_int64 = function() {
                        return (w._sqlite3_result_int64 = w.asm.sqlite3_result_int64).apply(null, arguments)
                    }, w._sqlite3_result_null = function() {
                        return (w._sqlite3_result_null = w.asm.sqlite3_result_null).apply(null, arguments)
                    }, w._sqlite3_result_pointer = function() {
                        return (w._sqlite3_result_pointer = w.asm.sqlite3_result_pointer).apply(null, arguments)
                    }, w._sqlite3_result_subtype = function() {
                        return (w._sqlite3_result_subtype = w.asm.sqlite3_result_subtype).apply(null, arguments)
                    }, w._sqlite3_result_text = function() {
                        return (w._sqlite3_result_text = w.asm.sqlite3_result_text).apply(null, arguments)
                    }, w._sqlite3_result_zeroblob = function() {
                        return (w._sqlite3_result_zeroblob = w.asm.sqlite3_result_zeroblob).apply(null, arguments)
                    }, w._sqlite3_result_zeroblob64 = function() {
                        return (w._sqlite3_result_zeroblob64 = w.asm.sqlite3_result_zeroblob64).apply(null, arguments)
                    }, w._sqlite3_result_error_code = function() {
                        return (w._sqlite3_result_error_code = w.asm.sqlite3_result_error_code).apply(null, arguments)
                    }, w._sqlite3_user_data = function() {
                        return (w._sqlite3_user_data = w.asm.sqlite3_user_data).apply(null, arguments)
                    }, w._sqlite3_context_db_handle = function() {
                        return (w._sqlite3_context_db_handle = w.asm.sqlite3_context_db_handle).apply(null, arguments)
                    }, w._sqlite3_vtab_nochange = function() {
                        return (w._sqlite3_vtab_nochange = w.asm.sqlite3_vtab_nochange).apply(null, arguments)
                    }, w._sqlite3_vtab_in_first = function() {
                        return (w._sqlite3_vtab_in_first = w.asm.sqlite3_vtab_in_first).apply(null, arguments)
                    }, w._sqlite3_vtab_in_next = function() {
                        return (w._sqlite3_vtab_in_next = w.asm.sqlite3_vtab_in_next).apply(null, arguments)
                    }, w._sqlite3_aggregate_context = function() {
                        return (w._sqlite3_aggregate_context = w.asm.sqlite3_aggregate_context).apply(null, arguments)
                    }, w._sqlite3_get_auxdata = function() {
                        return (w._sqlite3_get_auxdata = w.asm.sqlite3_get_auxdata).apply(null, arguments)
                    }, w._sqlite3_set_auxdata = function() {
                        return (w._sqlite3_set_auxdata = w.asm.sqlite3_set_auxdata).apply(null, arguments)
                    }, w._sqlite3_column_count = function() {
                        return (w._sqlite3_column_count = w.asm.sqlite3_column_count).apply(null, arguments)
                    }, w._sqlite3_data_count = function() {
                        return (w._sqlite3_data_count = w.asm.sqlite3_data_count).apply(null, arguments)
                    }, w._sqlite3_column_blob = function() {
                        return (w._sqlite3_column_blob = w.asm.sqlite3_column_blob).apply(null, arguments)
                    }, w._sqlite3_column_bytes = function() {
                        return (w._sqlite3_column_bytes = w.asm.sqlite3_column_bytes).apply(null, arguments)
                    }, w._sqlite3_column_double = function() {
                        return (w._sqlite3_column_double = w.asm.sqlite3_column_double).apply(null, arguments)
                    }, w._sqlite3_column_text = function() {
                        return (w._sqlite3_column_text = w.asm.sqlite3_column_text).apply(null, arguments)
                    }, w._sqlite3_column_value = function() {
                        return (w._sqlite3_column_value = w.asm.sqlite3_column_value).apply(null, arguments)
                    }, w._sqlite3_column_type = function() {
                        return (w._sqlite3_column_type = w.asm.sqlite3_column_type).apply(null, arguments)
                    }, w._sqlite3_column_name = function() {
                        return (w._sqlite3_column_name = w.asm.sqlite3_column_name).apply(null, arguments)
                    }, w._sqlite3_bind_blob = function() {
                        return (w._sqlite3_bind_blob = w.asm.sqlite3_bind_blob).apply(null, arguments)
                    }, w._sqlite3_bind_double = function() {
                        return (w._sqlite3_bind_double = w.asm.sqlite3_bind_double).apply(null, arguments)
                    }, w._sqlite3_bind_int = function() {
                        return (w._sqlite3_bind_int = w.asm.sqlite3_bind_int).apply(null, arguments)
                    }, w._sqlite3_bind_int64 = function() {
                        return (w._sqlite3_bind_int64 = w.asm.sqlite3_bind_int64).apply(null, arguments)
                    }, w._sqlite3_bind_null = function() {
                        return (w._sqlite3_bind_null = w.asm.sqlite3_bind_null).apply(null, arguments)
                    }, w._sqlite3_bind_pointer = function() {
                        return (w._sqlite3_bind_pointer = w.asm.sqlite3_bind_pointer).apply(null, arguments)
                    }, w._sqlite3_bind_text = function() {
                        return (w._sqlite3_bind_text = w.asm.sqlite3_bind_text).apply(null, arguments)
                    }, w._sqlite3_bind_parameter_count = function() {
                        return (w._sqlite3_bind_parameter_count = w.asm.sqlite3_bind_parameter_count).apply(null, arguments)
                    }, w._sqlite3_bind_parameter_index = function() {
                        return (w._sqlite3_bind_parameter_index = w.asm.sqlite3_bind_parameter_index).apply(null, arguments)
                    }, w._sqlite3_db_handle = function() {
                        return (w._sqlite3_db_handle = w.asm.sqlite3_db_handle).apply(null, arguments)
                    }, w._sqlite3_stmt_readonly = function() {
                        return (w._sqlite3_stmt_readonly = w.asm.sqlite3_stmt_readonly).apply(null, arguments)
                    }, w._sqlite3_stmt_isexplain = function() {
                        return (w._sqlite3_stmt_isexplain = w.asm.sqlite3_stmt_isexplain).apply(null, arguments)
                    }, w._sqlite3_stmt_status = function() {
                        return (w._sqlite3_stmt_status = w.asm.sqlite3_stmt_status).apply(null, arguments)
                    }, w._sqlite3_sql = function() {
                        return (w._sqlite3_sql = w.asm.sqlite3_sql).apply(null, arguments)
                    }, w._sqlite3_expanded_sql = function() {
                        return (w._sqlite3_expanded_sql = w.asm.sqlite3_expanded_sql).apply(null, arguments)
                    }, w._sqlite3_preupdate_old = function() {
                        return (w._sqlite3_preupdate_old = w.asm.sqlite3_preupdate_old).apply(null, arguments)
                    }, w._sqlite3_preupdate_count = function() {
                        return (w._sqlite3_preupdate_count = w.asm.sqlite3_preupdate_count).apply(null, arguments)
                    }, w._sqlite3_preupdate_depth = function() {
                        return (w._sqlite3_preupdate_depth = w.asm.sqlite3_preupdate_depth).apply(null, arguments)
                    }, w._sqlite3_preupdate_blobwrite = function() {
                        return (w._sqlite3_preupdate_blobwrite = w.asm.sqlite3_preupdate_blobwrite).apply(null, arguments)
                    }, w._sqlite3_preupdate_new = function() {
                        return (w._sqlite3_preupdate_new = w.asm.sqlite3_preupdate_new).apply(null, arguments)
                    }, w._sqlite3_value_numeric_type = function() {
                        return (w._sqlite3_value_numeric_type = w.asm.sqlite3_value_numeric_type).apply(null, arguments)
                    }, w._sqlite3_errmsg = function() {
                        return (w._sqlite3_errmsg = w.asm.sqlite3_errmsg).apply(null, arguments)
                    }, w._sqlite3_set_authorizer = function() {
                        return (w._sqlite3_set_authorizer = w.asm.sqlite3_set_authorizer).apply(null, arguments)
                    }, w._sqlite3_strglob = function() {
                        return (w._sqlite3_strglob = w.asm.sqlite3_strglob).apply(null, arguments)
                    }, w._sqlite3_strlike = function() {
                        return (w._sqlite3_strlike = w.asm.sqlite3_strlike).apply(null, arguments)
                    }, w._sqlite3_exec = function() {
                        return (w._sqlite3_exec = w.asm.sqlite3_exec).apply(null, arguments)
                    }, w._sqlite3_auto_extension = function() {
                        return (w._sqlite3_auto_extension = w.asm.sqlite3_auto_extension).apply(null, arguments)
                    }, w._sqlite3_cancel_auto_extension = function() {
                        return (w._sqlite3_cancel_auto_extension = w.asm.sqlite3_cancel_auto_extension).apply(null, arguments)
                    }, w._sqlite3_reset_auto_extension = function() {
                        return (w._sqlite3_reset_auto_extension = w.asm.sqlite3_reset_auto_extension).apply(null, arguments)
                    }, w._sqlite3_prepare_v3 = function() {
                        return (w._sqlite3_prepare_v3 = w.asm.sqlite3_prepare_v3).apply(null, arguments)
                    }, w._sqlite3_create_module = function() {
                        return (w._sqlite3_create_module = w.asm.sqlite3_create_module).apply(null, arguments)
                    }, w._sqlite3_create_module_v2 = function() {
                        return (w._sqlite3_create_module_v2 = w.asm.sqlite3_create_module_v2).apply(null, arguments)
                    }, w._sqlite3_drop_modules = function() {
                        return (w._sqlite3_drop_modules = w.asm.sqlite3_drop_modules).apply(null, arguments)
                    }, w._sqlite3_declare_vtab = function() {
                        return (w._sqlite3_declare_vtab = w.asm.sqlite3_declare_vtab).apply(null, arguments)
                    }, w._sqlite3_vtab_on_conflict = function() {
                        return (w._sqlite3_vtab_on_conflict = w.asm.sqlite3_vtab_on_conflict).apply(null, arguments)
                    }, w._sqlite3_vtab_collation = function() {
                        return (w._sqlite3_vtab_collation = w.asm.sqlite3_vtab_collation).apply(null, arguments)
                    }, w._sqlite3_vtab_in = function() {
                        return (w._sqlite3_vtab_in = w.asm.sqlite3_vtab_in).apply(null, arguments)
                    }, w._sqlite3_vtab_rhs_value = function() {
                        return (w._sqlite3_vtab_rhs_value = w.asm.sqlite3_vtab_rhs_value).apply(null, arguments)
                    }, w._sqlite3_vtab_distinct = function() {
                        return (w._sqlite3_vtab_distinct = w.asm.sqlite3_vtab_distinct).apply(null, arguments)
                    }, w._sqlite3_keyword_name = function() {
                        return (w._sqlite3_keyword_name = w.asm.sqlite3_keyword_name).apply(null, arguments)
                    }, w._sqlite3_keyword_count = function() {
                        return (w._sqlite3_keyword_count = w.asm.sqlite3_keyword_count).apply(null, arguments)
                    }, w._sqlite3_keyword_check = function() {
                        return (w._sqlite3_keyword_check = w.asm.sqlite3_keyword_check).apply(null, arguments)
                    }, w._sqlite3_complete = function() {
                        return (w._sqlite3_complete = w.asm.sqlite3_complete).apply(null, arguments)
                    }, w._sqlite3_libversion = function() {
                        return (w._sqlite3_libversion = w.asm.sqlite3_libversion).apply(null, arguments)
                    }, w._sqlite3_libversion_number = function() {
                        return (w._sqlite3_libversion_number = w.asm.sqlite3_libversion_number).apply(null, arguments)
                    }, w._sqlite3_shutdown = function() {
                        return (w._sqlite3_shutdown = w.asm.sqlite3_shutdown).apply(null, arguments)
                    }, w._sqlite3_last_insert_rowid = function() {
                        return (w._sqlite3_last_insert_rowid = w.asm.sqlite3_last_insert_rowid).apply(null, arguments)
                    }, w._sqlite3_set_last_insert_rowid = function() {
                        return (w._sqlite3_set_last_insert_rowid = w.asm.sqlite3_set_last_insert_rowid).apply(null, arguments)
                    }, w._sqlite3_changes64 = function() {
                        return (w._sqlite3_changes64 = w.asm.sqlite3_changes64).apply(null, arguments)
                    }, w._sqlite3_changes = function() {
                        return (w._sqlite3_changes = w.asm.sqlite3_changes).apply(null, arguments)
                    }, w._sqlite3_total_changes64 = function() {
                        return (w._sqlite3_total_changes64 = w.asm.sqlite3_total_changes64).apply(null, arguments)
                    }, w._sqlite3_total_changes = function() {
                        return (w._sqlite3_total_changes = w.asm.sqlite3_total_changes).apply(null, arguments)
                    }, w._sqlite3_txn_state = function() {
                        return (w._sqlite3_txn_state = w.asm.sqlite3_txn_state).apply(null, arguments)
                    }, w._sqlite3_close_v2 = function() {
                        return (w._sqlite3_close_v2 = w.asm.sqlite3_close_v2).apply(null, arguments)
                    }, w._sqlite3_busy_handler = function() {
                        return (w._sqlite3_busy_handler = w.asm.sqlite3_busy_handler).apply(null, arguments)
                    }, w._sqlite3_progress_handler = function() {
                        return (w._sqlite3_progress_handler = w.asm.sqlite3_progress_handler).apply(null, arguments)
                    }, w._sqlite3_busy_timeout = function() {
                        return (w._sqlite3_busy_timeout = w.asm.sqlite3_busy_timeout).apply(null, arguments)
                    }, w._sqlite3_create_function = function() {
                        return (w._sqlite3_create_function = w.asm.sqlite3_create_function).apply(null, arguments)
                    }, w._sqlite3_create_function_v2 = function() {
                        return (w._sqlite3_create_function_v2 = w.asm.sqlite3_create_function_v2).apply(null, arguments)
                    }, w._sqlite3_create_window_function = function() {
                        return (w._sqlite3_create_window_function = w.asm.sqlite3_create_window_function).apply(null, arguments)
                    }, w._sqlite3_overload_function = function() {
                        return (w._sqlite3_overload_function = w.asm.sqlite3_overload_function).apply(null, arguments)
                    }, w._sqlite3_trace_v2 = function() {
                        return (w._sqlite3_trace_v2 = w.asm.sqlite3_trace_v2).apply(null, arguments)
                    }, w._sqlite3_commit_hook = function() {
                        return (w._sqlite3_commit_hook = w.asm.sqlite3_commit_hook).apply(null, arguments)
                    }, w._sqlite3_update_hook = function() {
                        return (w._sqlite3_update_hook = w.asm.sqlite3_update_hook).apply(null, arguments)
                    }, w._sqlite3_rollback_hook = function() {
                        return (w._sqlite3_rollback_hook = w.asm.sqlite3_rollback_hook).apply(null, arguments)
                    }, w._sqlite3_preupdate_hook = function() {
                        return (w._sqlite3_preupdate_hook = w.asm.sqlite3_preupdate_hook).apply(null, arguments)
                    }, w._sqlite3_error_offset = function() {
                        return (w._sqlite3_error_offset = w.asm.sqlite3_error_offset).apply(null, arguments)
                    }, w._sqlite3_errcode = function() {
                        return (w._sqlite3_errcode = w.asm.sqlite3_errcode).apply(null, arguments)
                    }, w._sqlite3_extended_errcode = function() {
                        return (w._sqlite3_extended_errcode = w.asm.sqlite3_extended_errcode).apply(null, arguments)
                    }, w._sqlite3_errstr = function() {
                        return (w._sqlite3_errstr = w.asm.sqlite3_errstr).apply(null, arguments)
                    }, w._sqlite3_limit = function() {
                        return (w._sqlite3_limit = w.asm.sqlite3_limit).apply(null, arguments)
                    }, w._sqlite3_open = function() {
                        return (w._sqlite3_open = w.asm.sqlite3_open).apply(null, arguments)
                    }, w._sqlite3_open_v2 = function() {
                        return (w._sqlite3_open_v2 = w.asm.sqlite3_open_v2).apply(null, arguments)
                    }, w._sqlite3_create_collation = function() {
                        return (w._sqlite3_create_collation = w.asm.sqlite3_create_collation).apply(null, arguments)
                    }, w._sqlite3_create_collation_v2 = function() {
                        return (w._sqlite3_create_collation_v2 = w.asm.sqlite3_create_collation_v2).apply(null, arguments)
                    }, w._sqlite3_collation_needed = function() {
                        return (w._sqlite3_collation_needed = w.asm.sqlite3_collation_needed).apply(null, arguments)
                    }, w._sqlite3_table_column_metadata = function() {
                        return (w._sqlite3_table_column_metadata = w.asm.sqlite3_table_column_metadata).apply(null, arguments)
                    }, w._sqlite3_extended_result_codes = function() {
                        return (w._sqlite3_extended_result_codes = w.asm.sqlite3_extended_result_codes).apply(null, arguments)
                    }, w._sqlite3_uri_key = function() {
                        return (w._sqlite3_uri_key = w.asm.sqlite3_uri_key).apply(null, arguments)
                    }, w._sqlite3_uri_int64 = function() {
                        return (w._sqlite3_uri_int64 = w.asm.sqlite3_uri_int64).apply(null, arguments)
                    }, w._sqlite3_db_name = function() {
                        return (w._sqlite3_db_name = w.asm.sqlite3_db_name).apply(null, arguments)
                    }, w._sqlite3_db_filename = function() {
                        return (w._sqlite3_db_filename = w.asm.sqlite3_db_filename).apply(null, arguments)
                    }, w._sqlite3_compileoption_used = function() {
                        return (w._sqlite3_compileoption_used = w.asm.sqlite3_compileoption_used).apply(null, arguments)
                    }, w._sqlite3_compileoption_get = function() {
                        return (w._sqlite3_compileoption_get = w.asm.sqlite3_compileoption_get).apply(null, arguments)
                    }, w._sqlite3session_diff = function() {
                        return (w._sqlite3session_diff = w.asm.sqlite3session_diff).apply(null, arguments)
                    }, w._sqlite3session_attach = function() {
                        return (w._sqlite3session_attach = w.asm.sqlite3session_attach).apply(null, arguments)
                    }, w._sqlite3session_create = function() {
                        return (w._sqlite3session_create = w.asm.sqlite3session_create).apply(null, arguments)
                    }, w._sqlite3session_delete = function() {
                        return (w._sqlite3session_delete = w.asm.sqlite3session_delete).apply(null, arguments)
                    }, w._sqlite3session_table_filter = function() {
                        return (w._sqlite3session_table_filter = w.asm.sqlite3session_table_filter).apply(null, arguments)
                    }, w._sqlite3session_changeset = function() {
                        return (w._sqlite3session_changeset = w.asm.sqlite3session_changeset).apply(null, arguments)
                    }, w._sqlite3session_changeset_strm = function() {
                        return (w._sqlite3session_changeset_strm = w.asm.sqlite3session_changeset_strm).apply(null, arguments)
                    }, w._sqlite3session_patchset_strm = function() {
                        return (w._sqlite3session_patchset_strm = w.asm.sqlite3session_patchset_strm).apply(null, arguments)
                    }, w._sqlite3session_patchset = function() {
                        return (w._sqlite3session_patchset = w.asm.sqlite3session_patchset).apply(null, arguments)
                    }, w._sqlite3session_enable = function() {
                        return (w._sqlite3session_enable = w.asm.sqlite3session_enable).apply(null, arguments)
                    }, w._sqlite3session_indirect = function() {
                        return (w._sqlite3session_indirect = w.asm.sqlite3session_indirect).apply(null, arguments)
                    }, w._sqlite3session_isempty = function() {
                        return (w._sqlite3session_isempty = w.asm.sqlite3session_isempty).apply(null, arguments)
                    }, w._sqlite3session_memory_used = function() {
                        return (w._sqlite3session_memory_used = w.asm.sqlite3session_memory_used).apply(null, arguments)
                    }, w._sqlite3session_object_config = function() {
                        return (w._sqlite3session_object_config = w.asm.sqlite3session_object_config).apply(null, arguments)
                    }, w._sqlite3session_changeset_size = function() {
                        return (w._sqlite3session_changeset_size = w.asm.sqlite3session_changeset_size).apply(null, arguments)
                    }, w._sqlite3changeset_start = function() {
                        return (w._sqlite3changeset_start = w.asm.sqlite3changeset_start).apply(null, arguments)
                    }, w._sqlite3changeset_start_v2 = function() {
                        return (w._sqlite3changeset_start_v2 = w.asm.sqlite3changeset_start_v2).apply(null, arguments)
                    }, w._sqlite3changeset_start_strm = function() {
                        return (w._sqlite3changeset_start_strm = w.asm.sqlite3changeset_start_strm).apply(null, arguments)
                    }, w._sqlite3changeset_start_v2_strm = function() {
                        return (w._sqlite3changeset_start_v2_strm = w.asm.sqlite3changeset_start_v2_strm).apply(null, arguments)
                    }, w._sqlite3changeset_next = function() {
                        return (w._sqlite3changeset_next = w.asm.sqlite3changeset_next).apply(null, arguments)
                    }, w._sqlite3changeset_op = function() {
                        return (w._sqlite3changeset_op = w.asm.sqlite3changeset_op).apply(null, arguments)
                    }, w._sqlite3changeset_pk = function() {
                        return (w._sqlite3changeset_pk = w.asm.sqlite3changeset_pk).apply(null, arguments)
                    }, w._sqlite3changeset_old = function() {
                        return (w._sqlite3changeset_old = w.asm.sqlite3changeset_old).apply(null, arguments)
                    }, w._sqlite3changeset_new = function() {
                        return (w._sqlite3changeset_new = w.asm.sqlite3changeset_new).apply(null, arguments)
                    }, w._sqlite3changeset_conflict = function() {
                        return (w._sqlite3changeset_conflict = w.asm.sqlite3changeset_conflict).apply(null, arguments)
                    }, w._sqlite3changeset_fk_conflicts = function() {
                        return (w._sqlite3changeset_fk_conflicts = w.asm.sqlite3changeset_fk_conflicts).apply(null, arguments)
                    }, w._sqlite3changeset_finalize = function() {
                        return (w._sqlite3changeset_finalize = w.asm.sqlite3changeset_finalize).apply(null, arguments)
                    }, w._sqlite3changeset_invert = function() {
                        return (w._sqlite3changeset_invert = w.asm.sqlite3changeset_invert).apply(null, arguments)
                    }, w._sqlite3changeset_invert_strm = function() {
                        return (w._sqlite3changeset_invert_strm = w.asm.sqlite3changeset_invert_strm).apply(null, arguments)
                    }, w._sqlite3changeset_apply_v2 = function() {
                        return (w._sqlite3changeset_apply_v2 = w.asm.sqlite3changeset_apply_v2).apply(null, arguments)
                    }, w._sqlite3changeset_apply = function() {
                        return (w._sqlite3changeset_apply = w.asm.sqlite3changeset_apply).apply(null, arguments)
                    }, w._sqlite3changeset_apply_v2_strm = function() {
                        return (w._sqlite3changeset_apply_v2_strm = w.asm.sqlite3changeset_apply_v2_strm).apply(null, arguments)
                    }, w._sqlite3changeset_apply_strm = function() {
                        return (w._sqlite3changeset_apply_strm = w.asm.sqlite3changeset_apply_strm).apply(null, arguments)
                    }, w._sqlite3changegroup_new = function() {
                        return (w._sqlite3changegroup_new = w.asm.sqlite3changegroup_new).apply(null, arguments)
                    }, w._sqlite3changegroup_add = function() {
                        return (w._sqlite3changegroup_add = w.asm.sqlite3changegroup_add).apply(null, arguments)
                    }, w._sqlite3changegroup_output = function() {
                        return (w._sqlite3changegroup_output = w.asm.sqlite3changegroup_output).apply(null, arguments)
                    }, w._sqlite3changegroup_add_strm = function() {
                        return (w._sqlite3changegroup_add_strm = w.asm.sqlite3changegroup_add_strm).apply(null, arguments)
                    }, w._sqlite3changegroup_output_strm = function() {
                        return (w._sqlite3changegroup_output_strm = w.asm.sqlite3changegroup_output_strm).apply(null, arguments)
                    }, w._sqlite3changegroup_delete = function() {
                        return (w._sqlite3changegroup_delete = w.asm.sqlite3changegroup_delete).apply(null, arguments)
                    }, w._sqlite3changeset_concat = function() {
                        return (w._sqlite3changeset_concat = w.asm.sqlite3changeset_concat).apply(null, arguments)
                    }, w._sqlite3changeset_concat_strm = function() {
                        return (w._sqlite3changeset_concat_strm = w.asm.sqlite3changeset_concat_strm).apply(null, arguments)
                    }, w._sqlite3session_config = function() {
                        return (w._sqlite3session_config = w.asm.sqlite3session_config).apply(null, arguments)
                    }, w._sqlite3_sourceid = function() {
                        return (w._sqlite3_sourceid = w.asm.sqlite3_sourceid).apply(null, arguments)
                    }, w._sqlite3_wasm_pstack_ptr = function() {
                        return (w._sqlite3_wasm_pstack_ptr = w.asm.sqlite3_wasm_pstack_ptr).apply(null, arguments)
                    }, w._sqlite3_wasm_pstack_restore = function() {
                        return (w._sqlite3_wasm_pstack_restore = w.asm.sqlite3_wasm_pstack_restore).apply(null, arguments)
                    }, w._sqlite3_wasm_pstack_alloc = function() {
                        return (w._sqlite3_wasm_pstack_alloc = w.asm.sqlite3_wasm_pstack_alloc).apply(null, arguments)
                    }, w._sqlite3_wasm_pstack_remaining = function() {
                        return (w._sqlite3_wasm_pstack_remaining = w.asm.sqlite3_wasm_pstack_remaining).apply(null, arguments)
                    }, w._sqlite3_wasm_pstack_quota = function() {
                        return (w._sqlite3_wasm_pstack_quota = w.asm.sqlite3_wasm_pstack_quota).apply(null, arguments)
                    }, w._sqlite3_wasm_db_error = function() {
                        return (w._sqlite3_wasm_db_error = w.asm.sqlite3_wasm_db_error).apply(null, arguments)
                    }, w._sqlite3_wasm_test_struct = function() {
                        return (w._sqlite3_wasm_test_struct = w.asm.sqlite3_wasm_test_struct).apply(null, arguments)
                    }, w._sqlite3_wasm_enum_json = function() {
                        return (w._sqlite3_wasm_enum_json = w.asm.sqlite3_wasm_enum_json).apply(null, arguments)
                    }, w._sqlite3_wasm_vfs_unlink = function() {
                        return (w._sqlite3_wasm_vfs_unlink = w.asm.sqlite3_wasm_vfs_unlink).apply(null, arguments)
                    }, w._sqlite3_wasm_db_vfs = function() {
                        return (w._sqlite3_wasm_db_vfs = w.asm.sqlite3_wasm_db_vfs).apply(null, arguments)
                    }, w._sqlite3_wasm_db_reset = function() {
                        return (w._sqlite3_wasm_db_reset = w.asm.sqlite3_wasm_db_reset).apply(null, arguments)
                    }, w._sqlite3_wasm_db_export_chunked = function() {
                        return (w._sqlite3_wasm_db_export_chunked = w.asm.sqlite3_wasm_db_export_chunked).apply(null, arguments)
                    }, w._sqlite3_wasm_db_serialize = function() {
                        return (w._sqlite3_wasm_db_serialize = w.asm.sqlite3_wasm_db_serialize).apply(null, arguments)
                    }, w._sqlite3_wasm_vfs_create_file = function() {
                        return (w._sqlite3_wasm_vfs_create_file = w.asm.sqlite3_wasm_vfs_create_file).apply(null, arguments)
                    }, w._sqlite3_wasm_posix_create_file = function() {
                        return (w._sqlite3_wasm_posix_create_file = w.asm.sqlite3_wasm_posix_create_file).apply(null, arguments)
                    }, w._sqlite3_wasm_kvvfsMakeKeyOnPstack = function() {
                        return (w._sqlite3_wasm_kvvfsMakeKeyOnPstack = w.asm.sqlite3_wasm_kvvfsMakeKeyOnPstack).apply(null, arguments)
                    }, w._sqlite3_wasm_kvvfs_methods = function() {
                        return (w._sqlite3_wasm_kvvfs_methods = w.asm.sqlite3_wasm_kvvfs_methods).apply(null, arguments)
                    }, w._sqlite3_wasm_vtab_config = function() {
                        return (w._sqlite3_wasm_vtab_config = w.asm.sqlite3_wasm_vtab_config).apply(null, arguments)
                    }, w._sqlite3_wasm_db_config_ip = function() {
                        return (w._sqlite3_wasm_db_config_ip = w.asm.sqlite3_wasm_db_config_ip).apply(null, arguments)
                    }, w._sqlite3_wasm_db_config_pii = function() {
                        return (w._sqlite3_wasm_db_config_pii = w.asm.sqlite3_wasm_db_config_pii).apply(null, arguments)
                    }, w._sqlite3_wasm_db_config_s = function() {
                        return (w._sqlite3_wasm_db_config_s = w.asm.sqlite3_wasm_db_config_s).apply(null, arguments)
                    }, w._sqlite3_wasm_config_i = function() {
                        return (w._sqlite3_wasm_config_i = w.asm.sqlite3_wasm_config_i).apply(null, arguments)
                    }, w._sqlite3_wasm_config_ii = function() {
                        return (w._sqlite3_wasm_config_ii = w.asm.sqlite3_wasm_config_ii).apply(null, arguments)
                    }, w._sqlite3_wasm_config_j = function() {
                        return (w._sqlite3_wasm_config_j = w.asm.sqlite3_wasm_config_j).apply(null, arguments)
                    }, w._sqlite3_wasm_init_wasmfs = function() {
                        return (w._sqlite3_wasm_init_wasmfs = w.asm.sqlite3_wasm_init_wasmfs).apply(null, arguments)
                    }, w._sqlite3_wasm_test_intptr = function() {
                        return (w._sqlite3_wasm_test_intptr = w.asm.sqlite3_wasm_test_intptr).apply(null, arguments)
                    }, w._sqlite3_wasm_test_voidptr = function() {
                        return (w._sqlite3_wasm_test_voidptr = w.asm.sqlite3_wasm_test_voidptr).apply(null, arguments)
                    }, w._sqlite3_wasm_test_int64_max = function() {
                        return (w._sqlite3_wasm_test_int64_max = w.asm.sqlite3_wasm_test_int64_max).apply(null, arguments)
                    }, w._sqlite3_wasm_test_int64_min = function() {
                        return (w._sqlite3_wasm_test_int64_min = w.asm.sqlite3_wasm_test_int64_min).apply(null, arguments)
                    }, w._sqlite3_wasm_test_int64_times2 = function() {
                        return (w._sqlite3_wasm_test_int64_times2 = w.asm.sqlite3_wasm_test_int64_times2).apply(null, arguments)
                    }, w._sqlite3_wasm_test_int64_minmax = function() {
                        return (w._sqlite3_wasm_test_int64_minmax = w.asm.sqlite3_wasm_test_int64_minmax).apply(null, arguments)
                    }, w._sqlite3_wasm_test_int64ptr = function() {
                        return (w._sqlite3_wasm_test_int64ptr = w.asm.sqlite3_wasm_test_int64ptr).apply(null, arguments)
                    }, w._sqlite3_wasm_test_stack_overflow = function() {
                        return (w._sqlite3_wasm_test_stack_overflow = w.asm.sqlite3_wasm_test_stack_overflow).apply(null, arguments)
                    }, w._sqlite3_wasm_test_str_hello = function() {
                        return (w._sqlite3_wasm_test_str_hello = w.asm.sqlite3_wasm_test_str_hello).apply(null, arguments)
                    }, w._sqlite3_wasm_SQLTester_strglob = function() {
                        return (w._sqlite3_wasm_SQLTester_strglob = w.asm.sqlite3_wasm_SQLTester_strglob).apply(null, arguments)
                    }, w._malloc = function() {
                        return (eh = w._malloc = w.asm.malloc).apply(null, arguments)
                    }),
                    eg = (w._free = function() {
                        return (w._free = w.asm.free).apply(null, arguments)
                    }, w._realloc = function() {
                        return (w._realloc = w.asm.realloc).apply(null, arguments)
                    }, w._emscripten_builtin_memalign = function() {
                        return (eg = w._emscripten_builtin_memalign = w.asm.emscripten_builtin_memalign).apply(null, arguments)
                    });

                function ey(e) {
                    if (e = e || A, !(Q > 0)) {
                        if (w.preRun)
                            for ("function" == typeof w.preRun && (w.preRun = [w.preRun]); w.preRun.length;) {
                                var t;
                                t = w.preRun.shift(), z.unshift(t)
                            }
                        X(z), Q > 0 || (w.setStatus ? (w.setStatus("Running..."), setTimeout(function() {
                            setTimeout(function() {
                                w.setStatus("")
                            }, 1), n()
                        }, 1)) : n())
                    }

                    function n() {
                        if (!q && (q = !0, w.calledRun = !0, !L)) {
                            if (w.noFSInit || ei.init.initialized || ei.init(), ei.ignorePermissions = !1, et.init(), X(B), i(w), w.onRuntimeInitialized && w.onRuntimeInitialized(), w.postRun)
                                for ("function" == typeof w.postRun && (w.postRun = [w.postRun]); w.postRun.length;) {
                                    var e;
                                    e = w.postRun.shift(), U.unshift(e)
                                }
                            X(U)
                        }
                    }
                }
                if (w.stackSave = function() {
                        return (w.stackSave = w.asm.stackSave).apply(null, arguments)
                    }, w.stackRestore = function() {
                        return (w.stackRestore = w.asm.stackRestore).apply(null, arguments)
                    }, w.stackAlloc = function() {
                        return (w.stackAlloc = w.asm.stackAlloc).apply(null, arguments)
                    }, w.wasmMemory = u, H = function e() {
                        q || ey(), q || (H = e)
                    }, w.preInit)
                    for ("function" == typeof w.preInit && (w.preInit = [w.preInit]); w.preInit.length > 0;) w.preInit.pop()();
                return ey(), w.postRun || (w.postRun = []), w.postRun.push(function(e) {
                    if (globalThis.sqlite3ApiBootstrap = function t(n = globalThis.sqlite3ApiConfig || t.defaultConfig) {
                            let r;
                            if (t.sqlite3) return console.warn("sqlite3ApiBootstrap() called multiple times.", "Config and external initializers are ignored on calls after the first."), t.sqlite3;
                            let i = Object.assign(Object.create(null), {
                                exports: void 0,
                                memory: void 0,
                                bigIntEnabled: void 0 !== e ? !!e.HEAPU64 : !!globalThis.BigInt64Array,
                                debug: console.debug.bind(console),
                                warn: console.warn.bind(console),
                                error: console.error.bind(console),
                                log: console.log.bind(console),
                                wasmfsOpfsDir: "/opfs",
                                useStdAlloc: !1
                            }, n || {});
                            Object.assign(i, {
                                allocExportName: i.useStdAlloc ? "malloc" : "sqlite3_malloc",
                                deallocExportName: i.useStdAlloc ? "free" : "sqlite3_free",
                                reallocExportName: i.useStdAlloc ? "realloc" : "sqlite3_realloc"
                            }, i), ["exports", "memory", "wasmfsOpfsDir"].forEach(e => {
                                "function" == typeof i[e] && (i[e] = i[e]())
                            });
                            let s = Object.create(null),
                                o = Object.create(null),
                                l = e => s.sqlite3_js_rc_str && s.sqlite3_js_rc_str(e) || "Unknown result code #" + e;
                            class a extends Error {
                                constructor(...e) {
                                    let t;
                                    if (e.length)
                                        if ((e => "number" == typeof e && e === (0 | e))(e[0]))
                                            if (t = e[0], 1 === e.length) super(l(e[0]));
                                            else {
                                                const n = l(t);
                                                "object" == typeof e[1] ? super(n, e[1]) : (e[0] = n + ":", super(e.join(" ")))
                                            }
                                    else 2 === e.length && "object" == typeof e[1] ? super(...e) : super(e.join(" "));
                                    this.resultCode = t || s.SQLITE_ERROR, this.name = "SQLite3Error"
                                }
                            }
                            a.toss = (...e) => {
                                throw new a(...e)
                            };
                            let c = a.toss;
                            i.wasmfsOpfsDir && !/^\/[^/]+$/.test(i.wasmfsOpfsDir) && c("config.wasmfsOpfsDir must be falsy or in the form '/dir-name'.");
                            let u = e => "bigint" != typeof e && !!(e === (0 | e) && e <= 0x7fffffff && e >= -0x80000000),
                                _ = "u" < typeof SharedArrayBuffer ? function() {} : SharedArrayBuffer,
                                p = e => e.buffer instanceof _,
                                f = (e, t, n) => p(e) ? e.slice(t, n) : e.subarray(t, n),
                                d = e => e && (e instanceof Uint8Array || e instanceof Int8Array || e instanceof ArrayBuffer),
                                m = e => e && (e instanceof Uint8Array || e instanceof Int8Array || e instanceof ArrayBuffer),
                                h = e => d(e) || c("Value is not of a supported TypedArray type."),
                                g = new TextDecoder("utf-8"),
                                y = function(e, t, n) {
                                    return g.decode(f(e, t, n))
                                },
                                q = function(e) {
                                    return m(e) ? y(e instanceof ArrayBuffer ? new Uint8Array(e) : e) : Array.isArray(e) ? e.join("") : (o.isPtr(e) && (e = o.cstrToJs(e)), e)
                                };
                            class b extends Error {
                                constructor(...e) {
                                    2 === e.length && "object" == typeof e[1] ? super(...e) : e.length ? super(e.join(" ")) : super("Allocation failed."), this.resultCode = s.SQLITE_NOMEM, this.name = "WasmAllocError"
                                }
                            }
                            b.toss = (...e) => {
                                throw new b(...e)
                            }, Object.assign(s, {
                                sqlite3_bind_blob: void 0,
                                sqlite3_bind_text: void 0,
                                sqlite3_create_function_v2: (e, t, n, r, i, s, o, l, a) => {},
                                sqlite3_create_function: (e, t, n, r, i, s, o, l) => {},
                                sqlite3_create_window_function: (e, t, n, r, i, s, o, l, a, c) => {},
                                sqlite3_prepare_v3: (e, t, n, r, i, s) => {},
                                sqlite3_prepare_v2: (e, t, n, r, i) => {},
                                sqlite3_exec: (e, t, n, r, i) => {},
                                sqlite3_randomness: (e, t) => {}
                            });
                            let w = {
                                affirmBindableTypedArray: h,
                                flexibleString: q,
                                bigIntFits32: e => e >= -2147483647 n - 1 n && e <= 2147483647 n,
                                bigIntFits64: function e(t) {
                                    return e._max || (e._max = BigInt("0x7fffffffffffffff"), e._min = ~e._max), t >= e._min && t <= e._max
                                },
                                bigIntFitsDouble: function e(t) {
                                    return e._min || (e._min = Number.MIN_SAFE_INTEGER, e._max = Number.MAX_SAFE_INTEGER), t >= e._min && t <= e._max
                                },
                                isBindableTypedArray: d,
                                isInt32: u,
                                isSQLableTypedArray: m,
                                isTypedArray: e => !!(e && e.constructor && u(e.constructor.BYTES_PER_ELEMENT)) && e,
                                typedArrayToString: y,
                                isUIThread: () => globalThis.window === globalThis && !!globalThis.document,
                                isSharedTypedArray: p,
                                toss: function(...e) {
                                    throw Error(e.join(" "))
                                },
                                toss3: c,
                                typedArrayPart: f,
                                affirmDbHeader: function(e) {
                                    e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                    let t = "SQLite format 3";
                                    t.length > e.byteLength && c("Input does not contain an SQLite3 database header.");
                                    for (let n = 0; n < t.length; ++n) t.charCodeAt(n) !== e[n] && c("Input does not contain an SQLite3 database header.")
                                },
                                affirmIsDb: function(e) {
                                    e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                    let t = e.byteLength;
                                    (t < 512 || t % 512 != 0) && c("Byte array size", t, "is invalid for an SQLite3 db."), w.affirmDbHeader(e)
                                }
                            };
                            Object.assign(o, {
                                ptrSizeof: i.wasmPtrSizeof || 4,
                                ptrIR: i.wasmPtrIR || "i32",
                                bigIntEnabled: !!i.bigIntEnabled,
                                exports: i.exports || c("Missing API config.exports (WASM module exports)."),
                                memory: i.memory || i.exports.memory || c("API config object requires a WebAssembly.Memory object", "in either config.exports.memory (exported)", "or config.memory (imported)."),
                                alloc: void 0,
                                realloc: void 0,
                                dealloc: void 0
                            }), o.allocFromTypedArray = function(e) {
                                e instanceof ArrayBuffer && (e = new Uint8Array(e)), h(e);
                                let t = o.alloc(e.byteLength || 1);
                                return o.heapForSize(e.constructor).set(e.byteLength ? e : [0], t), t
                            }; {
                                let e = i.allocExportName,
                                    t = i.deallocExportName,
                                    n = i.reallocExportName;
                                for (let r of [e, t, n]) o.exports[r] instanceof Function || c("Missing required exports[", r, "] function.");
                                o.alloc = function e(t) {
                                    return e.impl(t) || b.toss("Failed to allocate", t, " bytes.")
                                }, o.alloc.impl = o.exports[e], o.realloc = function e(t, n) {
                                    let r = e.impl(t, n);
                                    return n ? r || b.toss("Failed to reallocate", n, " bytes.") : 0
                                }, o.realloc.impl = o.exports[n], o.dealloc = o.exports[t]
                            }
                            if (o.compileOptionUsed = function e(t) {
                                    if (arguments.length) {
                                        if (Array.isArray(t)) {
                                            let e = {};
                                            return t.forEach(t => {
                                                e[t] = s.sqlite3_compileoption_used(t)
                                            }), e
                                        } else if ("object" == typeof t) return Object.keys(t).forEach(e => {
                                            t[e] = s.sqlite3_compileoption_used(e)
                                        }), t
                                    } else {
                                        if (e._result) return e._result;
                                        e._opt || (e._rx = /^([^=]+)=(.+)/, e._rxInt = /^-?\d+$/, e._opt = function(t, n) {
                                            let r = e._rx.exec(t);
                                            n[0] = r ? r[1] : t, n[1] = !r || (e._rxInt.test(r[2]) ? +r[2] : r[2])
                                        });
                                        let t = {},
                                            n = [0, 0],
                                            r = 0,
                                            i;
                                        for (; i = s.sqlite3_compileoption_get(r++);) e._opt(i, n), t[n[0]] = n[1];
                                        return e._result = t
                                    }
                                    return "string" == typeof t && !!s.sqlite3_compileoption_used(t)
                                }, o.pstack = Object.assign(Object.create(null), {
                                    restore: o.exports.sqlite3_wasm_pstack_restore,
                                    alloc: function(e) {
                                        return "string" != typeof e || (e = o.sizeofIR(e)) || b.toss("Invalid value for pstack.alloc(", arguments[0], ")"), o.exports.sqlite3_wasm_pstack_alloc(e) || b.toss("Could not allocate", e, "bytes from the pstack.")
                                    },
                                    allocChunks: function(e, t) {
                                        "string" != typeof t || (t = o.sizeofIR(t)) || b.toss("Invalid size value for allocChunks(", arguments[1], ")");
                                        let n = o.pstack.alloc(e * t),
                                            r = [],
                                            i = 0,
                                            s = 0;
                                        for (; i < e; ++i, s += t) r.push(n + s);
                                        return r
                                    },
                                    allocPtr: (e = 1, t = !0) => 1 === e ? o.pstack.alloc(t ? 8 : o.ptrSizeof) : o.pstack.allocChunks(e, t ? 8 : o.ptrSizeof),
                                    call: function(e) {
                                        let t = o.pstack.pointer;
                                        try {
                                            return e(x)
                                        } finally {
                                            o.pstack.restore(t)
                                        }
                                    }
                                }), Object.defineProperties(o.pstack, {
                                    pointer: {
                                        configurable: !1,
                                        iterable: !0,
                                        writeable: !1,
                                        get: o.exports.sqlite3_wasm_pstack_ptr
                                    },
                                    quota: {
                                        configurable: !1,
                                        iterable: !0,
                                        writeable: !1,
                                        get: o.exports.sqlite3_wasm_pstack_quota
                                    },
                                    remaining: {
                                        configurable: !1,
                                        iterable: !0,
                                        writeable: !1,
                                        get: o.exports.sqlite3_wasm_pstack_remaining
                                    }
                                }), s.sqlite3_randomness = (...e) => {
                                    if (1 === e.length && w.isTypedArray(e[0]) && 1 === e[0].BYTES_PER_ELEMENT) {
                                        let t = e[0];
                                        if (0 === t.byteLength) return o.exports.sqlite3_randomness(0, 0), t;
                                        let n = o.pstack.pointer;
                                        try {
                                            let e = t.byteLength,
                                                n = 0,
                                                r = o.exports.sqlite3_randomness,
                                                i = o.heap8u(),
                                                s = e < 512 ? e : 512,
                                                l = o.pstack.alloc(s);
                                            do {
                                                let o = e > s ? s : e;
                                                r(o, l), t.set(f(i, l, l + o), n), e -= o, n += o
                                            } while (e > 0)
                                        } catch (e) {
                                            console.error("Highly unexpected (and ignored!) exception in sqlite3_randomness():", e)
                                        } finally {
                                            o.pstack.restore(n)
                                        }
                                        return t
                                    }
                                    o.exports.sqlite3_randomness(...e)
                                }, s.sqlite3_wasmfs_opfs_dir = function() {
                                    if (void 0 !== r) return r;
                                    let e = i.wasmfsOpfsDir;
                                    if (!e || !globalThis.FileSystemHandle || !globalThis.FileSystemDirectoryHandle || !globalThis.FileSystemFileHandle) return r = "";
                                    try {
                                        if (e && 0 === o.xCallWrapped("sqlite3_wasm_init_wasmfs", "i32", ["string"], e)) return r = e;
                                        return r = ""
                                    } catch (e) {
                                        return r = ""
                                    }
                                }, s.sqlite3_wasmfs_filename_is_persistent = function(e) {
                                    let t = s.sqlite3_wasmfs_opfs_dir();
                                    return !!t && !!e && e.startsWith(t + "/")
                                }, s.sqlite3_js_db_uses_vfs = function(e, t, n = 0) {
                                    try {
                                        let r = s.sqlite3_vfs_find(t);
                                        if (!r) return !1;
                                        if (!e) return r === s.sqlite3_vfs_find(0) && r;
                                        return r === s.sqlite3_js_db_vfs(e, n) && r
                                    } catch (e) {
                                        return !1
                                    }
                                }, s.sqlite3_js_vfs_list = function() {
                                    let e = [],
                                        t = s.sqlite3_vfs_find(0);
                                    for (; t;) {
                                        let n = new s.sqlite3_vfs(t);
                                        e.push(o.cstrToJs(n.$zName)), t = n.$pNext, n.dispose()
                                    }
                                    return e
                                }, s.sqlite3_js_db_export = function(e, t = 0) {
                                    let n;
                                    (e = o.xWrap.testConvertArg("sqlite3*", e)) || c("Invalid sqlite3* argument."), o.bigIntEnabled || c("BigInt64 support is not enabled.");
                                    let r = o.scopedAllocPush();
                                    try {
                                        let r = o.scopedAlloc(8 + o.ptrSizeof),
                                            i = r + 8,
                                            s = t ? o.isPtr(t) ? t : o.scopedAllocCString("" + t) : 0,
                                            l = o.exports.sqlite3_wasm_db_serialize(e, s, i, r, 0);
                                        l && c("Database serialization failed with code", x.capi.sqlite3_js_rc_str(l)), n = o.peekPtr(i);
                                        let a = o.peek(r, "i64");
                                        return l = a ? o.heap8u().slice(n, n + Number(a)) : new Uint8Array
                                    } finally {
                                        n && o.exports.sqlite3_free(n), o.scopedAllocPop(r)
                                    }
                                }, s.sqlite3_js_db_vfs = (e, t = 0) => o.sqlite3_wasm_db_vfs(e, t), s.sqlite3_js_aggregate_context = (e, t) => s.sqlite3_aggregate_context(e, t) || (t ? b.toss("Cannot allocate", t, "bytes for sqlite3_aggregate_context()") : 0), s.sqlite3_js_posix_create_file = function(e, t, n) {
                                    let r;
                                    t && o.isPtr(t) ? r = t : t instanceof ArrayBuffer || t instanceof Uint8Array ? (r = o.allocFromTypedArray(t), (arguments.length < 3 || !w.isInt32(n) || n < 0) && (n = t.byteLength)) : a.toss("Invalid 2nd argument for sqlite3_js_posix_create_file().");
                                    try {
                                        (!w.isInt32(n) || n < 0) && a.toss("Invalid 3rd argument for sqlite3_js_posix_create_file().");
                                        let t = o.sqlite3_wasm_posix_create_file(e, r, n);
                                        t && a.toss("Creation of file failed with sqlite3 result code", s.sqlite3_js_rc_str(t))
                                    } finally {
                                        o.dealloc(r)
                                    }
                                }, s.sqlite3_js_vfs_create_file = function(e, t, n, r) {
                                    let l;
                                    i.warn("sqlite3_js_vfs_create_file() is deprecated and", "should be avoided because it can lead to C-level crashes.", "See its documentation for alternative options."), n ? (o.isPtr(n) ? l = n : n instanceof ArrayBuffer && (n = new Uint8Array(n)), n instanceof Uint8Array ? (l = o.allocFromTypedArray(n), (arguments.length < 4 || !w.isInt32(r) || r < 0) && (r = n.byteLength)) : a.toss("Invalid 3rd argument type for sqlite3_js_vfs_create_file().")) : l = 0, (!w.isInt32(r) || r < 0) && (o.dealloc(l), a.toss("Invalid 4th argument for sqlite3_js_vfs_create_file()."));
                                    try {
                                        let n = o.sqlite3_wasm_vfs_create_file(e, t, l, r);
                                        n && a.toss("Creation of file failed with sqlite3 result code", s.sqlite3_js_rc_str(n))
                                    } finally {
                                        o.dealloc(l)
                                    }
                                }, s.sqlite3_js_sql_to_string = e => {
                                    if ("string" == typeof e) return e;
                                    let t = q(v);
                                    return t === v ? void 0 : t
                                }, w.isUIThread()) {
                                let e = function(e) {
                                    let t = Object.create(null);
                                    return t.prefix = "kvvfs-" + e, t.stores = [], ("session" === e || "" === e) && t.stores.push(globalThis.sessionStorage), ("local" === e || "" === e) && t.stores.push(globalThis.localStorage), t
                                };
                                s.sqlite3_js_kvvfs_clear = function(t = "") {
                                    let n = 0,
                                        r = e(t);
                                    return r.stores.forEach(e => {
                                        let t, i = [];
                                        for (t = 0; t < e.length; ++t) {
                                            let n = e.key(t);
                                            n.startsWith(r.prefix) && i.push(n)
                                        }
                                        i.forEach(t => e.removeItem(t)), n += i.length
                                    }), n
                                }, s.sqlite3_js_kvvfs_size = function(t = "") {
                                    let n = 0,
                                        r = e(t);
                                    return r.stores.forEach(e => {
                                        let t;
                                        for (t = 0; t < e.length; ++t) {
                                            let i = e.key(t);
                                            i.startsWith(r.prefix) && (n += i.length, n += e.getItem(i).length)
                                        }
                                    }), 2 * n
                                }
                            }
                            s.sqlite3_db_config = (function(e, t, ...n) {
                                switch (!this.s && (this.s = o.xWrap("sqlite3_wasm_db_config_s", "int", ["sqlite3*", "int", "string:static"]), this.pii = o.xWrap("sqlite3_wasm_db_config_pii", "int", ["sqlite3*", "int", "*", "int", "int"]), this.ip = o.xWrap("sqlite3_wasm_db_config_ip", "int", ["sqlite3*", "int", "int", "*"])), t) {
                                    case s.SQLITE_DBCONFIG_ENABLE_FKEY:
                                    case s.SQLITE_DBCONFIG_ENABLE_TRIGGER:
                                    case s.SQLITE_DBCONFIG_ENABLE_FTS3_TOKENIZER:
                                    case s.SQLITE_DBCONFIG_ENABLE_LOAD_EXTENSION:
                                    case s.SQLITE_DBCONFIG_NO_CKPT_ON_CLOSE:
                                    case s.SQLITE_DBCONFIG_ENABLE_QPSG:
                                    case s.SQLITE_DBCONFIG_TRIGGER_EQP:
                                    case s.SQLITE_DBCONFIG_RESET_DATABASE:
                                    case s.SQLITE_DBCONFIG_DEFENSIVE:
                                    case s.SQLITE_DBCONFIG_WRITABLE_SCHEMA:
                                    case s.SQLITE_DBCONFIG_LEGACY_ALTER_TABLE:
                                    case s.SQLITE_DBCONFIG_DQS_DML:
                                    case s.SQLITE_DBCONFIG_DQS_DDL:
                                    case s.SQLITE_DBCONFIG_ENABLE_VIEW:
                                    case s.SQLITE_DBCONFIG_LEGACY_FILE_FORMAT:
                                    case s.SQLITE_DBCONFIG_TRUSTED_SCHEMA:
                                    case s.SQLITE_DBCONFIG_STMT_SCANSTATUS:
                                    case s.SQLITE_DBCONFIG_REVERSE_SCANORDER:
                                        return this.ip(e, t, n[0], n[1] || 0);
                                    case s.SQLITE_DBCONFIG_LOOKASIDE:
                                        return this.pii(e, t, n[0], n[1], n[2]);
                                    case s.SQLITE_DBCONFIG_MAINDBNAME:
                                        return this.s(e, t, n[0]);
                                    default:
                                        return s.SQLITE_MISUSE
                                }
                            }).bind(Object.create(null)), s.sqlite3_value_to_js = function(e, t = !0) {
                                let n, r = s.sqlite3_value_type(e);
                                switch (r) {
                                    case s.SQLITE_INTEGER:
                                        o.bigIntEnabled ? (n = s.sqlite3_value_int64(e), w.bigIntFitsDouble(n) && (n = Number(n))) : n = s.sqlite3_value_double(e);
                                        break;
                                    case s.SQLITE_FLOAT:
                                        n = s.sqlite3_value_double(e);
                                        break;
                                    case s.SQLITE_TEXT:
                                        n = s.sqlite3_value_text(e);
                                        break;
                                    case s.SQLITE_BLOB:
                                        {
                                            let t = s.sqlite3_value_bytes(e),
                                                r = s.sqlite3_value_blob(e);t && !r && x.WasmAllocError.toss("Cannot allocate memory for blob argument of", t, "byte(s)"),
                                            n = t ? o.heap8u().slice(r, r + Number(t)) : null;
                                            break
                                        }
                                    case s.SQLITE_NULL:
                                        n = null;
                                        break;
                                    default:
                                        t && c(s.SQLITE_MISMATCH, "Unhandled sqlite3_value_type():", r), n = void 0
                                }
                                return n
                            }, s.sqlite3_values_to_js = function(e, t, n = !0) {
                                let r, i = [];
                                for (r = 0; r < e; ++r) i.push(s.sqlite3_value_to_js(o.peekPtr(t + o.ptrSizeof * r), n));
                                return i
                            }, s.sqlite3_result_error_js = function(e, t) {
                                t instanceof b ? s.sqlite3_result_error_nomem(e) : s.sqlite3_result_error(e, "" + t, -1)
                            }, s.sqlite3_result_js = function(e, t) {
                                if (t instanceof Error) return void s.sqlite3_result_error_js(e, t);
                                try {
                                    switch (typeof t) {
                                        case "undefined":
                                            break;
                                        case "boolean":
                                            s.sqlite3_result_int(e, +!!t);
                                            break;
                                        case "bigint":
                                            w.bigIntFits32(t) ? s.sqlite3_result_int(e, Number(t)) : w.bigIntFitsDouble(t) ? s.sqlite3_result_double(e, Number(t)) : o.bigIntEnabled ? w.bigIntFits64(t) ? s.sqlite3_result_int64(e, t) : c("BigInt value", t.toString(), "is too BigInt for int64.") : c("BigInt value", t.toString(), "is too BigInt.");
                                            break;
                                        case "number":
                                            (w.isInt32(t) ? s.sqlite3_result_int : o.bigIntEnabled && Number.isInteger(t) && w.bigIntFits64(BigInt(t)) ? s.sqlite3_result_int64 : s.sqlite3_result_double)(e, t);
                                            break;
                                        case "string":
                                            {
                                                let [n, r] = o.allocCString(t, !0);s.sqlite3_result_text(e, n, r, s.SQLITE_WASM_DEALLOC);
                                                break
                                            }
                                        case "object":
                                            if (null === t) {
                                                s.sqlite3_result_null(e);
                                                break
                                            }
                                            if (w.isBindableTypedArray(t)) {
                                                let n = o.allocFromTypedArray(t);
                                                s.sqlite3_result_blob(e, n, t.byteLength, s.SQLITE_WASM_DEALLOC);
                                                break
                                            }
                                        default:
                                            c("Don't not how to handle this UDF result value:", typeof t, t)
                                    }
                                } catch (t) {
                                    s.sqlite3_result_error_js(e, t)
                                }
                            }, s.sqlite3_column_js = function(e, t, n = !0) {
                                let r = s.sqlite3_column_value(e, t);
                                return 0 === r ? void 0 : s.sqlite3_value_to_js(r, n)
                            };
                            let E = (function(e, t, n) {
                                n = s[n], this.ptr ? o.pokePtr(this.ptr, 0) : this.ptr = o.allocPtr();
                                let r = n(e, t, this.ptr);
                                if (r) return a.toss(r, arguments[2] + "() failed with code " + r);
                                let i = o.peekPtr(this.ptr);
                                return i ? s.sqlite3_value_to_js(i, !0) : void 0
                            }).bind(Object.create(null));
                            s.sqlite3_preupdate_new_js = (e, t) => E(e, t, "sqlite3_preupdate_new"), s.sqlite3_preupdate_old_js = (e, t) => E(e, t, "sqlite3_preupdate_old"), s.sqlite3changeset_new_js = (e, t) => E(e, t, "sqlite3changeset_new"), s.sqlite3changeset_old_js = (e, t) => E(e, t, "sqlite3changeset_old");
                            let x = {
                                WasmAllocError: b,
                                SQLite3Error: a,
                                capi: s,
                                util: w,
                                wasm: o,
                                config: i,
                                version: Object.create(null),
                                client: void 0,
                                asyncPostInit: async function e() {
                                    if (e.isReady instanceof Promise) return e.isReady;
                                    let n = t.initializersAsync;
                                    delete t.initializersAsync;
                                    let r = async () => (x.__isUnderTest || (delete x.util, delete x.StructBinder), x),
                                        s = e => {
                                            throw i.error("an async sqlite3 initializer failed:", e), e
                                        };
                                    if (!n || !n.length) return e.isReady = r().catch(s);
                                    (n = n.map(e => e instanceof Function ? async t => e(x) : e)).push(r);
                                    let o = Promise.resolve(x);
                                    for (; n.length;) o = o.then(n.shift());
                                    return e.isReady = o.catch(s)
                                },
                                scriptInfo: void 0
                            };
                            try {
                                t.initializers.forEach(e => {
                                    e(x)
                                })
                            } catch (e) {
                                throw console.error("sqlite3 bootstrap initializer threw:", e), e
                            }
                            return delete t.initializers, t.sqlite3 = x, x
                        }, globalThis.sqlite3ApiBootstrap.initializers = [], globalThis.sqlite3ApiBootstrap.initializersAsync = [], globalThis.sqlite3ApiBootstrap.defaultConfig = Object.create(null), globalThis.sqlite3ApiBootstrap.sqlite3 = void 0, globalThis.WhWasmUtilInstaller = function(e) {
                            void 0 === e.bigIntEnabled && (e.bigIntEnabled = !!globalThis.BigInt64Array);
                            let t = (...e) => {
                                throw Error(e.join(" "))
                            };
                            e.exports || Object.defineProperty(e, "exports", {
                                enumerable: !0,
                                configurable: !0,
                                get: () => e.instance && e.instance.exports
                            });
                            let n = e.pointerIR || "i32",
                                r = e.ptrSizeof = "i32" === n ? 4 : "i64" === n ? 8 : t("Unhandled ptrSizeof:", n),
                                i = Object.create(null);
                            i.heapSize = 0, i.memory = null, i.freeFuncIndexes = [], i.scopedAlloc = [], i.utf8Decoder = new TextDecoder, i.utf8Encoder = new TextEncoder("utf-8"), e.sizeofIR = e => {
                                switch (e) {
                                    case "i8":
                                        return 1;
                                    case "i16":
                                        return 2;
                                    case "i32":
                                    case "f32":
                                    case "float":
                                        return 4;
                                    case "i64":
                                    case "f64":
                                    case "double":
                                        return 8;
                                    case "*":
                                        return r;
                                    default:
                                        return ("" + e).endsWith("*") ? r : void 0
                                }
                            };
                            let s = function() {
                                if (i.memory) {
                                    if (i.heapSize === i.memory.buffer.byteLength) return i
                                } else i.memory = e.memory instanceof WebAssembly.Memory ? e.memory : e.exports.memory;
                                let t = i.memory.buffer;
                                return i.HEAP8 = new Int8Array(t), i.HEAP8U = new Uint8Array(t), i.HEAP16 = new Int16Array(t), i.HEAP16U = new Uint16Array(t), i.HEAP32 = new Int32Array(t), i.HEAP32U = new Uint32Array(t), e.bigIntEnabled && (i.HEAP64 = new BigInt64Array(t), i.HEAP64U = new BigUint64Array(t)), i.HEAP32F = new Float32Array(t), i.HEAP64F = new Float64Array(t), i.heapSize = t.byteLength, i
                            };
                            e.heap8 = () => s().HEAP8, e.heap8u = () => s().HEAP8U, e.heap16 = () => s().HEAP16, e.heap16u = () => s().HEAP16U, e.heap32 = () => s().HEAP32, e.heap32u = () => s().HEAP32U, e.heapForSize = function(n, r = !0) {
                                let o = i.memory && i.heapSize === i.memory.buffer.byteLength ? i : s();
                                switch (n) {
                                    case Int8Array:
                                        return o.HEAP8;
                                    case Uint8Array:
                                        return o.HEAP8U;
                                    case Int16Array:
                                        return o.HEAP16;
                                    case Uint16Array:
                                        return o.HEAP16U;
                                    case Int32Array:
                                        return o.HEAP32;
                                    case Uint32Array:
                                        return o.HEAP32U;
                                    case 8:
                                        return r ? o.HEAP8U : o.HEAP8;
                                    case 16:
                                        return r ? o.HEAP16U : o.HEAP16;
                                    case 32:
                                        return r ? o.HEAP32U : o.HEAP32;
                                    case 64:
                                        if (o.HEAP64) return r ? o.HEAP64U : o.HEAP64;
                                        break;
                                    default:
                                        if (e.bigIntEnabled) {
                                            if (n === globalThis.BigUint64Array) return o.HEAP64U;
                                            if (n === globalThis.BigInt64Array) return o.HEAP64
                                        }
                                }
                                t("Invalid heapForSize() size: expecting 8, 16, 32,", "or (if BigInt is enabled) 64.")
                            }, e.functionTable = function() {
                                return e.exports.__indirect_function_table
                            }, e.functionEntry = function(t) {
                                let n = e.functionTable();
                                return t < n.length ? n.get(t) : void 0
                            }, e.jsFuncToWasm = function e(n, r) {
                                if (e._ || (e._ = {
                                        sigTypes: Object.assign(Object.create(null), {
                                            i: "i32",
                                            p: "i32",
                                            P: "i32",
                                            s: "i32",
                                            j: "i64",
                                            f: "f32",
                                            d: "f64"
                                        }),
                                        typeCodes: Object.assign(Object.create(null), {
                                            f64: 124,
                                            f32: 125,
                                            i64: 126,
                                            i32: 127
                                        }),
                                        uleb128Encode: function(e, t, n) {
                                            n < 128 ? e[t](n) : e[t](n % 128 | 128, n >> 7)
                                        },
                                        rxJSig: /^(\w)\((\w*)\)$/,
                                        sigParams: function(t) {
                                            let n = e._.rxJSig.exec(t);
                                            return n ? n[2] : t.substr(1)
                                        },
                                        letterType: n => e._.sigTypes[n] || t("Invalid signature letter:", n),
                                        pushSigType: (t, n) => t.push(e._.typeCodes[e._.letterType(n)])
                                    }), "string" == typeof n) {
                                    let e = r;
                                    r = n, n = e
                                }
                                let i = e._.sigParams(r),
                                    s = [1, 96];
                                for (let t of (e._.uleb128Encode(s, "push", i.length), i)) e._.pushSigType(s, t);
                                return "v" === r[0] ? s.push(0) : (s.push(1), e._.pushSigType(s, r[0])), e._.uleb128Encode(s, "unshift", s.length), s.unshift(0, 97, 115, 109, 1, 0, 0, 0, 1), s.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0), new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array(s)), {
                                    e: {
                                        f: n
                                    }
                                }).exports.f
                            };
                            let o = function(n, r, s) {
                                let o;
                                if (s && !i.scopedAlloc.length && t("No scopedAllocPush() scope is active."), "string" == typeof n) {
                                    let e = r;
                                    r = n, n = e
                                }
                                "string" == typeof r && n instanceof Function || t("Invalid arguments: expecting (function,signature) or (signature,function).");
                                let l = e.functionTable(),
                                    a = l.length;
                                for (; i.freeFuncIndexes.length;) {
                                    if (o = i.freeFuncIndexes.pop(), l.get(o)) {
                                        o = null;
                                        continue
                                    }
                                    break
                                }
                                o || (o = a, l.grow(1));
                                try {
                                    return l.set(o, n), s && i.scopedAlloc[i.scopedAlloc.length - 1].push(o), o
                                } catch (e) {
                                    if (!(e instanceof TypeError)) throw o === a && i.freeFuncIndexes.push(a), e
                                }
                                try {
                                    let t = e.jsFuncToWasm(n, r);
                                    l.set(o, t), s && i.scopedAlloc[i.scopedAlloc.length - 1].push(o)
                                } catch (e) {
                                    throw o === a && i.freeFuncIndexes.push(a), e
                                }
                                return o
                            };
                            e.installFunction = (e, t) => o(e, t, !1), e.scopedInstallFunction = (e, t) => o(e, t, !0), e.uninstallFunction = function(t) {
                                if (!t && 0 !== t) return;
                                let n = i.freeFuncIndexes,
                                    r = e.functionTable();
                                n.push(t);
                                let s = r.get(t);
                                return r.set(t, null), s
                            }, e.peek = function(r, o = "i8") {
                                let l;
                                o.endsWith("*") && (o = n);
                                let a = i.memory && i.heapSize === i.memory.buffer.byteLength ? i : s(),
                                    c = Array.isArray(r) ? [] : void 0;
                                do {
                                    switch (c && (r = arguments[0].shift()), o) {
                                        case "i1":
                                        case "i8":
                                            l = a.HEAP8[0 | r];
                                            break;
                                        case "i16":
                                            l = a.HEAP16[r >> 1];
                                            break;
                                        case "i32":
                                            l = a.HEAP32[r >> 2];
                                            break;
                                        case "float":
                                        case "f32":
                                            l = a.HEAP32F[r >> 2];
                                            break;
                                        case "double":
                                        case "f64":
                                            l = Number(a.HEAP64F[r >> 3]);
                                            break;
                                        case "i64":
                                            if (e.bigIntEnabled) {
                                                l = BigInt(a.HEAP64[r >> 3]);
                                                break
                                            }
                                        default:
                                            t("Invalid type for peek():", o)
                                    }
                                    c && c.push(l)
                                } while (c && arguments[0].length) return c || l
                            }, e.poke = function(e, r, o = "i8") {
                                o.endsWith("*") && (o = n);
                                let l = i.memory && i.heapSize === i.memory.buffer.byteLength ? i : s();
                                for (let n of Array.isArray(e) ? e : [e]) switch (o) {
                                    case "i1":
                                    case "i8":
                                        l.HEAP8[0 | n] = r;
                                        continue;
                                    case "i16":
                                        l.HEAP16[n >> 1] = r;
                                        continue;
                                    case "i32":
                                        l.HEAP32[n >> 2] = r;
                                        continue;
                                    case "float":
                                    case "f32":
                                        l.HEAP32F[n >> 2] = r;
                                        continue;
                                    case "double":
                                    case "f64":
                                        l.HEAP64F[n >> 3] = r;
                                        continue;
                                    case "i64":
                                        if (l.HEAP64) {
                                            l.HEAP64[n >> 3] = BigInt(r);
                                            continue
                                        }
                                    default:
                                        t("Invalid type for poke(): " + o)
                                }
                                return this
                            }, e.peekPtr = (...t) => e.peek(1 === t.length ? t[0] : t, n), e.pokePtr = (t, r = 0) => e.poke(t, r, n), e.peek8 = (...t) => e.peek(1 === t.length ? t[0] : t, "i8"), e.poke8 = (t, n) => e.poke(t, n, "i8"), e.peek16 = (...t) => e.peek(1 === t.length ? t[0] : t, "i16"), e.poke16 = (t, n) => e.poke(t, n, "i16"), e.peek32 = (...t) => e.peek(1 === t.length ? t[0] : t, "i32"), e.poke32 = (t, n) => e.poke(t, n, "i32"), e.peek64 = (...t) => e.peek(1 === t.length ? t[0] : t, "i64"), e.poke64 = (t, n) => e.poke(t, n, "i64"), e.peek32f = (...t) => e.peek(1 === t.length ? t[0] : t, "f32"), e.poke32f = (t, n) => e.poke(t, n, "f32"), e.peek64f = (...t) => e.peek(1 === t.length ? t[0] : t, "f64"), e.poke64f = (t, n) => e.poke(t, n, "f64"), e.getMemValue = e.peek, e.getPtrValue = e.peekPtr, e.setMemValue = e.poke, e.setPtrValue = e.pokePtr, e.isPtr32 = e => "number" == typeof e && e === (0 | e) && e >= 0, e.isPtr = e.isPtr32, e.cstrlen = function(t) {
                                if (!t || !e.isPtr(t)) return null;
                                let n = s().HEAP8U,
                                    r = t;
                                for (; 0 !== n[r]; ++r);
                                return r - t
                            };
                            let l = "u" < typeof SharedArrayBuffer ? function() {} : SharedArrayBuffer;
                            e.cstrToJs = function(t) {
                                var n, r;
                                let o = e.cstrlen(t);
                                return o ? (n = s().HEAP8U, r = t + o, i.utf8Decoder.decode(n.buffer instanceof l ? n.slice(t, r) : n.subarray(t, r))) : null === o ? o : ""
                            }, e.jstrlen = function(e) {
                                if ("string" != typeof e) return null;
                                let t = e.length,
                                    n = 0;
                                for (let r = 0; r < t; ++r) {
                                    let t = e.charCodeAt(r);
                                    t >= 55296 && t <= 57343 && (t = 65536 + ((1023 & t) << 10) | 1023 & e.charCodeAt(++r)), t <= 127 ? ++n : t <= 2047 ? n += 2 : t <= 65535 ? n += 3 : n += 4
                                }
                                return n
                            }, e.jstrcpy = function(e, n, r = 0, i = -1, s = !0) {
                                if (n && (n instanceof Int8Array || n instanceof Uint8Array) || t("jstrcpy() target must be an Int8Array or Uint8Array."), i < 0 && (i = n.length - r), !(i > 0) || !(r >= 0)) return 0;
                                let o = 0,
                                    l = e.length,
                                    a = r,
                                    c = r + i - !!s;
                                for (; o < l && r < c; ++o) {
                                    let t = e.charCodeAt(o);
                                    if (t >= 55296 && t <= 57343 && (t = 65536 + ((1023 & t) << 10) | 1023 & e.charCodeAt(++o)), t <= 127) {
                                        if (r >= c) break;
                                        n[r++] = t
                                    } else if (t <= 2047) {
                                        if (r + 1 >= c) break;
                                        n[r++] = 192 | t >> 6, n[r++] = 128 | 63 & t
                                    } else if (t <= 65535) {
                                        if (r + 2 >= c) break;
                                        n[r++] = 224 | t >> 12, n[r++] = 128 | t >> 6 & 63, n[r++] = 128 | 63 & t
                                    } else {
                                        if (r + 3 >= c) break;
                                        n[r++] = 240 | t >> 18, n[r++] = 128 | t >> 12 & 63, n[r++] = 128 | t >> 6 & 63, n[r++] = 128 | 63 & t
                                    }
                                }
                                return s && (n[r++] = 0), r - a
                            }, e.cstrncpy = function(n, r, i) {
                                if (n && r || t("cstrncpy() does not accept NULL strings."), i < 0) i = e.cstrlen(strPtr) + 1;
                                else if (!(i > 0)) return 0;
                                let s = e.heap8u(),
                                    o = 0,
                                    l;
                                for (; o < i && (l = s[r + o]); ++o) s[n + o] = l;
                                return o < i && (s[n + o++] = 0), o
                            }, e.jstrToUintArray = (e, t = !1) => i.utf8Encoder.encode(t ? e + "\0" : e);
                            let a = (e, n) => {
                                    e.alloc instanceof Function && e.dealloc instanceof Function || t("Object is missing alloc() and/or dealloc() function(s)", "required by", n + "().")
                                },
                                c = function(t, n, r, o) {
                                    if (a(e, o), "string" != typeof t) return null; {
                                        let e = i.utf8Encoder.encode(t),
                                            o = r(e.length + 1),
                                            l = s().HEAP8U;
                                        return l.set(e, o), l[o + e.length] = 0, n ? [o, e.length] : o
                                    }
                                };
                            e.allocCString = (t, n = !1) => c(t, n, e.alloc, "allocCString()"), e.scopedAllocPush = function() {
                                a(e, "scopedAllocPush");
                                let t = [];
                                return i.scopedAlloc.push(t), t
                            }, e.scopedAllocPop = function(n) {
                                a(e, "scopedAllocPop");
                                let r = arguments.length ? i.scopedAlloc.indexOf(n) : i.scopedAlloc.length - 1;
                                r < 0 && t("Invalid state object for scopedAllocPop()."), 0 == arguments.length && (n = i.scopedAlloc[r]), i.scopedAlloc.splice(r, 1);
                                for (let t; t = n.pop();) e.functionEntry(t) ? e.uninstallFunction(t) : e.dealloc(t)
                            }, e.scopedAlloc = function(n) {
                                i.scopedAlloc.length || t("No scopedAllocPush() scope is active.");
                                let r = e.alloc(n);
                                return i.scopedAlloc[i.scopedAlloc.length - 1].push(r), r
                            }, Object.defineProperty(e.scopedAlloc, "level", {
                                configurable: !1,
                                enumerable: !1,
                                get: () => i.scopedAlloc.length,
                                set: () => t("The 'active' property is read-only.")
                            }), e.scopedAllocCString = (t, n = !1) => c(t, n, e.scopedAlloc, "scopedAllocCString()");
                            let u = function(t, n) {
                                let r = e[t ? "scopedAlloc" : "alloc"]((n.length + 1) * e.ptrSizeof),
                                    i = 0;
                                return n.forEach(n => {
                                    e.pokePtr(r + e.ptrSizeof * i++, e[t ? "scopedAllocCString" : "allocCString"]("" + n))
                                }), e.pokePtr(r + e.ptrSizeof * i, 0), r
                            };
                            e.scopedAllocMainArgv = e => u(!0, e), e.allocMainArgv = e => u(!1, e), e.cArgvToJs = (t, n) => {
                                let r = [];
                                for (let i = 0; i < t; ++i) {
                                    let t = e.peekPtr(n + e.ptrSizeof * i);
                                    r.push(t ? e.cstrToJs(t) : null)
                                }
                                return r
                            }, e.scopedAllocCall = function(t) {
                                e.scopedAllocPush();
                                try {
                                    return t()
                                } finally {
                                    e.scopedAllocPop()
                                }
                            };
                            let _ = function(t, i, s) {
                                a(e, s);
                                let o = i ? "i64" : n,
                                    l = e[s](t * (i ? 8 : r));
                                if (e.poke(l, 0, o), 1 === t) return l;
                                let c = [l];
                                for (let n = 1; n < t; ++n) l += i ? 8 : r, c[n] = l, e.poke(l, 0, o);
                                return c
                            };
                            e.allocPtr = (e = 1, t = !0) => _(e, t, "alloc"), e.scopedAllocPtr = (e = 1, t = !0) => _(e, t, "scopedAlloc"), e.xGet = function(n) {
                                return e.exports[n] || t("Cannot find exported symbol:", n)
                            };
                            let p = (e, n) => t(e + "() requires", n, "argument(s).");
                            e.xCall = function(n, ...r) {
                                let i = e.xGet(n);
                                return i instanceof Function || t("Exported symbol", n, "is not a function."), i.length !== r.length && p(n, i.length), 2 == arguments.length && Array.isArray(arguments[1]) ? i.apply(null, arguments[1]) : i.apply(null, r)
                            }, i.xWrap = Object.create(null), i.xWrap.convert = Object.create(null), i.xWrap.convert.arg = new Map, i.xWrap.convert.result = new Map;
                            let f = i.xWrap.convert.arg,
                                d = i.xWrap.convert.result;
                            e.bigIntEnabled && f.set("i64", e => BigInt(e));
                            let m = "i32" === n ? e => 0 | e : e => BigInt(e) | BigInt(0);
                            f.set("i32", m).set("i16", e => 65535 & e).set("i8", e => 255 & e).set("f32", e => Number(e).valueOf()).set("float", f.get("f32")).set("f64", f.get("f32")).set("double", f.get("f64")).set("int", f.get("i32")).set("null", e => e).set(null, f.get("null")).set("**", m).set("*", m), d.set("*", m).set("pointer", m).set("number", e => Number(e)).set("void", e => void 0).set("null", e => e).set(null, d.get("null")); {
                                let r = ["i8", "i16", "i32", "int", "f32", "float", "f64", "double"];
                                e.bigIntEnabled && r.push("i64");
                                let i = f.get(n);
                                for (let e of r) f.set(e + "*", i), d.set(e + "*", i), d.set(e, f.get(e) || t("Missing arg converter:", e))
                            }
                            let h = function(t) {
                                return "string" == typeof t ? e.scopedAllocCString(t) : t ? m(t) : null
                            };
                            f.set("string", h).set("utf8", h).set("pointer", h), d.set("string", t => e.cstrToJs(t)).set("utf8", d.get("string")).set("string:dealloc", t => {
                                try {
                                    return t ? e.cstrToJs(t) : null
                                } finally {
                                    e.dealloc(t)
                                }
                            }).set("utf8:dealloc", d.get("string:dealloc")).set("json", t => JSON.parse(e.cstrToJs(t))).set("json:dealloc", t => {
                                try {
                                    return t ? JSON.parse(e.cstrToJs(t)) : null
                                } finally {
                                    e.dealloc(t)
                                }
                            });
                            let g = class {
                                constructor(e) {
                                    this.name = e.name || "unnamed adapter"
                                }
                                convertArg(e, n, r) {
                                    t("AbstractArgAdapter must be subclassed.")
                                }
                            };
                            f.FuncPtrAdapter = class n extends g {
                                constructor(e) {
                                    super(e), f.FuncPtrAdapter.warnOnUse && console.warn("xArg.FuncPtrAdapter is an internal-only API", "and is not intended to be invoked from", "client-level code. Invoked with:", e), this.name = e.name || "unnamed", this.signature = e.signature, e.contextKey instanceof Function && (this.contextKey = e.contextKey, e.bindScope || (e.bindScope = "context")), this.bindScope = e.bindScope || t("FuncPtrAdapter options requires a bindScope (explicit or implied)."), 0 > n.bindScopes.indexOf(e.bindScope) && t("Invalid options.bindScope (" + e.bindMod + ") for FuncPtrAdapter. Expecting one of: (" + n.bindScopes.join(", ") + ")"), this.isTransient = "transient" === this.bindScope, this.isContext = "context" === this.bindScope, this.isPermanent = "permanent" === this.bindScope, this.singleton = "singleton" === this.bindScope ? [] : void 0, this.callProxy = e.callProxy instanceof Function ? e.callProxy : void 0
                                }
                                contextKey(e, t) {
                                    return this
                                }
                                contextMap(e) {
                                    let t = this.__cmap || (this.__cmap = new Map),
                                        n = t.get(e);
                                    return void 0 === n && t.set(e, n = []), n
                                }
                                convertArg(t, r, s) {
                                    let l = this.singleton;
                                    if (!l && this.isContext && (l = this.contextMap(this.contextKey(r, s))), l && l[0] === t) return l[1];
                                    if (t instanceof Function) {
                                        this.callProxy && (t = this.callProxy(t));
                                        let e = o(t, this.signature, this.isTransient);
                                        if (n.debugFuncInstall && n.debugOut("FuncPtrAdapter installed", this, this.contextKey(r, s), "@" + e, t), l) {
                                            if (l[1]) {
                                                n.debugFuncInstall && n.debugOut("FuncPtrAdapter uninstalling", this, this.contextKey(r, s), "@" + l[1], t);
                                                try {
                                                    i.scopedAlloc[i.scopedAlloc.length - 1].push(l[1])
                                                } catch (e) {}
                                            }
                                            l[0] = t, l[1] = e
                                        }
                                        return e
                                    }
                                    if (e.isPtr(t) || null == t) {
                                        if (l && l[1] && l[1] !== t) {
                                            n.debugFuncInstall && n.debugOut("FuncPtrAdapter uninstalling", this, this.contextKey(r, s), "@" + l[1], t);
                                            try {
                                                i.scopedAlloc[i.scopedAlloc.length - 1].push(l[1])
                                            } catch (e) {}
                                            l[0] = l[1] = 0 | t
                                        }
                                        return t || 0
                                    }
                                    throw TypeError("Invalid FuncPtrAdapter argument type. Expecting a function pointer or a " + (this.name ? this.name + " " : "") + "function matching signature " + this.signature + ".")
                                }
                            }, f.FuncPtrAdapter.warnOnUse = !1, f.FuncPtrAdapter.debugFuncInstall = !1, f.FuncPtrAdapter.debugOut = console.debug.bind(console), f.FuncPtrAdapter.bindScopes = ["transient", "context", "singleton", "permanent"];
                            let y = e => f.get(e) || t("Argument adapter not found:", e),
                                q = e => d.get(e) || t("Result adapter not found:", e);
                            i.xWrap.convertArg = (e, ...t) => y(e)(...t), i.xWrap.convertArgNoCheck = (e, ...t) => f.get(e)(...t), i.xWrap.convertResult = (e, t) => null === e ? t : e ? q(e)(t) : void 0, i.xWrap.convertResultNoCheck = (e, t) => null === e ? t : e ? d.get(e)(t) : void 0, e.xWrap = function(n, r, ...s) {
                                3 == arguments.length && Array.isArray(arguments[2]) && (s = arguments[2]), e.isPtr(n) && (n = e.functionEntry(n) || t("Function pointer not found in WASM function table."));
                                let o = n instanceof Function,
                                    l = o ? n : e.xGet(n);
                                if (o && (n = l.name || "unnamed function"), s.length !== l.length && p(n, l.length), null === r && 0 === l.length) return l;
                                for (let e of (null != r && q(r), s)) e instanceof g ? f.set(e, (...t) => e.convertArg(...t)) : y(e);
                                let a = i.xWrap;
                                return 0 === l.length ? (...e) => e.length ? p(n, l.length) : a.convertResult(r, l.call(null)) : function(...t) {
                                    t.length !== l.length && p(n, l.length);
                                    let i = e.scopedAllocPush();
                                    try {
                                        for (let e in t) t[e] = a.convertArgNoCheck(s[e], t[e], t, e);
                                        return a.convertResultNoCheck(r, l.apply(null, t))
                                    } finally {
                                        e.scopedAllocPop(i)
                                    }
                                }
                            };
                            let b = function(e, n, r, i, s, o) {
                                if ("string" == typeof r) {
                                    if (1 === n) return o.get(r);
                                    else if (2 === n) return i ? (i instanceof Function || t(s, "requires a function argument."), o.set(r, i)) : delete o.get(r), e
                                }
                                t("Invalid arguments to", s)
                            };
                            return e.xWrap.resultAdapter = function e(t, n) {
                                return b(e, arguments.length, t, n, "resultAdapter()", d)
                            }, e.xWrap.argAdapter = function e(t, n) {
                                return b(e, arguments.length, t, n, "argAdapter()", f)
                            }, e.xWrap.FuncPtrAdapter = f.FuncPtrAdapter, e.xCallWrapped = function(t, n, r, ...i) {
                                return Array.isArray(arguments[3]) && (i = arguments[3]), e.xWrap(t, n, r || []).apply(null, i || [])
                            }, e.xWrap.testConvertArg = i.xWrap.convertArg, e.xWrap.testConvertResult = i.xWrap.convertResult, e
                        }, globalThis.WhWasmUtilInstaller.yawl = (function(e) {
                            let t = () => fetch(e.uri, {
                                    credentials: "same-origin"
                                }),
                                n = this,
                                r = function(t) {
                                    if (e.wasmUtilTarget) {
                                        let r = (...e) => {
                                                throw Error(e.join(" "))
                                            },
                                            i = e.wasmUtilTarget;
                                        if (i.module = t.module, i.instance = t.instance, i.instance.exports.memory || (i.memory = e.imports && e.imports.env && e.imports.env.memory || r("Missing 'memory' object!")), !i.alloc && t.instance.exports.malloc) {
                                            let e = t.instance.exports;
                                            i.alloc = function(t) {
                                                return e.malloc(t) || r("Allocation of", t, "bytes failed.")
                                            }, i.dealloc = function(t) {
                                                e.free(t)
                                            }
                                        }
                                        n(i)
                                    }
                                    return e.onload && e.onload(t, e), t
                                };
                            return WebAssembly.instantiateStreaming ? function() {
                                return WebAssembly.instantiateStreaming(t(), e.imports || {}).then(r)
                            } : function() {
                                return t().then(e => e.arrayBuffer()).then(t => WebAssembly.instantiate(t, e.imports || {})).then(r)
                            }
                        }).bind(globalThis.WhWasmUtilInstaller), globalThis.Jaccwabyt = function e(t) {
                            let n, r = (...e) => {
                                throw Error(e.join(" "))
                            };
                            t.heap instanceof WebAssembly.Memory || t.heap instanceof Function || r("config.heap must be WebAssembly.Memory instance or a function."), ["alloc", "dealloc"].forEach(function(e) {
                                t[e] instanceof Function || r("Config option '" + e + "' must be a function.")
                            });
                            let i = e,
                                s = t.heap instanceof Function ? t.heap : () => new Uint8Array(t.heap.buffer),
                                o = t.alloc,
                                l = t.dealloc,
                                a = t.log || console.log.bind(console),
                                c = t.memberPrefix || "",
                                u = t.memberSuffix || "",
                                _ = void 0 === t.bigIntEnabled ? !!globalThis.BigInt64Array : !!t.bigIntEnabled,
                                p = globalThis.BigInt,
                                f = globalThis.BigInt64Array,
                                d = t.ptrSizeof || 4,
                                m = t.ptrIR || "i32";
                            i.debugFlags || (i.__makeDebugFlags = function(e = null) {
                                e && e.__flags && (e = e.__flags);
                                let t = function e(t) {
                                    return 0 == arguments.length ? e.__flags : (t < 0 ? (delete e.__flags.getter, delete e.__flags.setter, delete e.__flags.alloc, delete e.__flags.dealloc) : (e.__flags.getter = 0 != (1 & t), e.__flags.setter = 0 != (2 & t), e.__flags.alloc = 0 != (4 & t), e.__flags.dealloc = 0 != (8 & t)), e._flags)
                                };
                                return Object.defineProperty(t, "__flags", {
                                    iterable: !1,
                                    writable: !1,
                                    value: Object.create(e)
                                }), e || t(0), t
                            }, i.debugFlags = i.__makeDebugFlags());
                            let h = (new DataView(n = new ArrayBuffer(2)).setInt16(0, 256, !0), 256 === new Int16Array(n)[0]),
                                g = e => "P" === e,
                                y = e => "(" === e[1] ? "p" : e[0],
                                q = function(e) {
                                    switch (y(e)) {
                                        case "c":
                                        case "C":
                                            return "i8";
                                        case "i":
                                            return "i32";
                                        case "p":
                                        case "P":
                                        case "s":
                                            return m;
                                        case "j":
                                            return "i64";
                                        case "f":
                                            return "float";
                                        case "d":
                                            return "double"
                                    }
                                    r("Unhandled signature IR:", e)
                                },
                                b = f ? () => !0 : () => r("BigInt64Array is not available."),
                                w = function(e) {
                                    switch (y(e)) {
                                        case "p":
                                        case "P":
                                        case "s":
                                            switch (d) {
                                                case 4:
                                                    return "getInt32";
                                                case 8:
                                                    return b() && "getBigInt64"
                                            }
                                            break;
                                        case "i":
                                            return "getInt32";
                                        case "c":
                                            return "getInt8";
                                        case "C":
                                            return "getUint8";
                                        case "j":
                                            return b() && "getBigInt64";
                                        case "f":
                                            return "getFloat32";
                                        case "d":
                                            return "getFloat64"
                                    }
                                    r("Unhandled DataView getter for signature:", e)
                                },
                                E = function(e) {
                                    switch (y(e)) {
                                        case "p":
                                        case "P":
                                        case "s":
                                            switch (d) {
                                                case 4:
                                                    return "setInt32";
                                                case 8:
                                                    return b() && "setBigInt64"
                                            }
                                            break;
                                        case "i":
                                            return "setInt32";
                                        case "c":
                                            return "setInt8";
                                        case "C":
                                            return "setUint8";
                                        case "j":
                                            return b() && "setBigInt64";
                                        case "f":
                                            return "setFloat32";
                                        case "d":
                                            return "setFloat64"
                                    }
                                    r("Unhandled DataView setter for signature:", e)
                                },
                                x = function(e) {
                                    switch (y(e)) {
                                        case "i":
                                        case "f":
                                        case "c":
                                        case "C":
                                        case "d":
                                            return Number;
                                        case "j":
                                            return b() && p;
                                        case "p":
                                        case "P":
                                        case "s":
                                            switch (d) {
                                                case 4:
                                                    return Number;
                                                case 8:
                                                    return b() && p
                                            }
                                    }
                                    r("Unhandled DataView set wrapper for signature:", e)
                                },
                                S = new WeakMap,
                                A = "(pointer-is-external)",
                                I = function(e, t, n) {
                                    if (n || (n = S.get(t)), n) {
                                        if (S.delete(t), Array.isArray(t.ondispose)) {
                                            let r;
                                            for (; r = t.ondispose.shift();) try {
                                                r instanceof Function ? r.call(t) : r instanceof Q ? r.dispose() : "number" == typeof r && l(r)
                                            } catch (t) {
                                                console.warn("ondispose() for", e.structName, "@", n, "threw. NOT propagating it.", t)
                                            }
                                        } else if (t.ondispose instanceof Function) try {
                                            t.ondispose()
                                        } catch (t) {
                                            console.warn("ondispose() for", e.structName, "@", n, "threw. NOT propagating it.", t)
                                        }
                                        delete t.ondispose, e.debugFlags.__flags.dealloc && a("debug.dealloc:", t[A] ? "EXTERNAL" : "", e.structName, "instance:", e.structInfo.sizeof, "bytes @" + n), t[A] || l(n)
                                    }
                                },
                                k = e => ({
                                    configurable: !1,
                                    writable: !1,
                                    iterable: !1,
                                    value: e
                                }),
                                T = function(e, t, n) {
                                    let i = !n;
                                    n ? Object.defineProperty(t, A, k(n)) : (n = o(e.structInfo.sizeof)) || r("Allocation of", e.structName, "structure failed.");
                                    try {
                                        e.debugFlags.__flags.alloc && a("debug.alloc:", i ? "" : "EXTERNAL", e.structName, "instance:", e.structInfo.sizeof, "bytes @" + n), i && s().fill(0, n, n + e.structInfo.sizeof), S.set(t, n)
                                    } catch (r) {
                                        throw I(e, t, n), r
                                    }
                                },
                                F = k(e => c + e + u),
                                O = function(e, t, n = !0) {
                                    let i = e.members[t];
                                    if (!i && (c || u)) {
                                        for (let n of Object.values(e.members))
                                            if (n.key === t) {
                                                i = n;
                                                break
                                            }!i && n && r(e.name + "::" + t, "is not a mapped struct member.")
                                    }
                                    return i
                                },
                                P = function e(t, n, r = !1) {
                                    e._ || (e._ = e => e.replace(/[^vipPsjrdcC]/g, "").replace(/[pPscC]/g, "i"));
                                    let i = O(t.structInfo, n, !0);
                                    return r ? e._(i.signature) : i.signature
                                },
                                L = k(function() {
                                    let e = [];
                                    for (let t of Object.keys(this.structInfo.members)) e.push(this.memberKey(t));
                                    return e
                                }),
                                C = new TextDecoder("utf-8"),
                                D = new TextEncoder,
                                N = "u" < typeof SharedArrayBuffer ? function() {} : SharedArrayBuffer,
                                R = function(e, t, n = !1) {
                                    let r = O(e.structInfo, t, n);
                                    return !!r && 1 === r.signature.length && "s" === r.signature[0] && r
                                },
                                j = function(e) {
                                    "s" !== e.signature && r("Invalid member type signature for C-string value:", JSON.stringify(e))
                                },
                                M = function(e, t) {
                                    var n;
                                    let r = O(e.structInfo, t, !0);
                                    j(r);
                                    let i = e[r.key];
                                    if (!i) return null;
                                    let o = i,
                                        l = s();
                                    for (; 0 !== l[o]; ++o);
                                    return i === o ? "" : (n = o, C.decode(l.buffer instanceof N ? l.slice(i, n) : l.subarray(i, n)))
                                },
                                z = function(e, ...t) {
                                    e.ondispose ? Array.isArray(e.ondispose) || (e.ondispose = [e.ondispose]) : e.ondispose = [], e.ondispose.push(...t)
                                },
                                B = function(e) {
                                    let t = D.encode(e),
                                        n = o(t.length + 1);
                                    n || r("Allocation error while duplicating string:", e);
                                    let i = s();
                                    return i.set(t, n), i[n + t.length] = 0, n
                                },
                                U = function(e, t, n) {
                                    let r = O(e.structInfo, t, !0);
                                    j(r);
                                    let i = B(n);
                                    return e[r.key] = i, z(e, i), e
                                },
                                Q = function(e, t) {
                                    arguments[2] !== k && r("Do not call the StructType constructor", "from client-level code."), Object.defineProperties(this, {
                                        structName: k(e),
                                        structInfo: k(t)
                                    })
                                };
                            Q.prototype = Object.create(null, {
                                dispose: k(function() {
                                    I(this.constructor, this)
                                }),
                                lookupMember: k(function(e, t = !0) {
                                    return O(this.structInfo, e, t)
                                }),
                                memberToJsString: k(function(e) {
                                    return M(this, e)
                                }),
                                memberIsString: k(function(e, t = !0) {
                                    return R(this, e, t)
                                }),
                                memberKey: F,
                                memberKeys: L,
                                memberSignature: k(function(e, t = !1) {
                                    return P(this, e, t)
                                }),
                                memoryDump: k(function() {
                                    let e = this.pointer;
                                    return e ? new Uint8Array(s().slice(e, e + this.structInfo.sizeof)) : null
                                }),
                                pointer: {
                                    configurable: !1,
                                    enumerable: !1,
                                    get: function() {
                                        return S.get(this)
                                    },
                                    set: () => r("Cannot assign the 'pointer' property of a struct.")
                                },
                                setMemberCString: k(function(e, t) {
                                    return U(this, e, t)
                                })
                            }), Object.assign(Q.prototype, {
                                addOnDispose: function(...e) {
                                    return z(this, ...e), this
                                }
                            }), Object.defineProperties(Q, {
                                allocCString: k(B),
                                isA: k(e => e instanceof Q),
                                hasExternalPointer: k(e => e instanceof Q && !!e[A]),
                                memberKey: F
                            });
                            let W = e => Number.isFinite(e) || e instanceof(p || Number),
                                H = function e(t, n, i) {
                                    if (!e._) {
                                        e._ = {
                                            getters: {},
                                            setters: {},
                                            sw: {}
                                        };
                                        let t = ["i", "c", "C", "p", "P", "s", "f", "d", "v()"];
                                        _ && t.push("j"), t.forEach(function(t) {
                                            e._.getters[t] = w(t), e._.setters[t] = E(t), e._.sw[t] = x(t)
                                        });
                                        let n = /^[ipPsjfdcC]$/,
                                            i = /^[vipPsjfdcC]\([ipPsjfdcC]*\)$/;
                                        e.sigCheck = function(e, t, s, o) {
                                            Object.prototype.hasOwnProperty.call(e, s) && r(e.structName, "already has a property named", s + "."), n.test(o) || i.test(o) || r("Malformed signature for", e.structName + "::" + t + ":", o)
                                        }
                                    }
                                    let o = t.memberKey(n);
                                    e.sigCheck(t.prototype, n, o, i.signature), i.key = o, i.name = n;
                                    let l = y(i.signature),
                                        c = t.prototype.structName + "::" + o,
                                        u = t.prototype.debugFlags.__flags,
                                        p = Object.create(null);
                                    if (p.configurable = !1, p.enumerable = !1, p.get = function() {
                                            u.getter && a("debug.getter:", e._.getters[l], "for", q(l), c, "@", this.pointer, "+", i.offset, "sz", i.sizeof);
                                            let t = new DataView(s().buffer, this.pointer + i.offset, i.sizeof)[e._.getters[l]](0, h);
                                            return u.getter && a("debug.getter:", c, "result =", t), t
                                        }, i.readOnly) {
                                        var f;
                                        f = t.prototype.structName, p.set = () => r(f + "::" + o, "is read-only.")
                                    } else p.set = function(t) {
                                        if (u.setter && a("debug.setter:", e._.setters[l], "for", q(l), c, "@", this.pointer, "+", i.offset, "sz", i.sizeof, t), this.pointer || r("Cannot set struct property on disposed instance."), null === t) t = 0;
                                        else
                                            for (; !W(t);) {
                                                if (g(i.signature) && t instanceof Q) {
                                                    t = t.pointer || 0, u.setter && a("debug.setter:", c, "resolved to", t);
                                                    break
                                                }
                                                r("Invalid value for pointer-type", c + ".")
                                            }
                                        new DataView(s().buffer, this.pointer + i.offset, i.sizeof)[e._.setters[l]](0, e._.sw[l](t), h)
                                    };
                                    Object.defineProperty(t.prototype, o, p)
                                },
                                V = function e(t, n) {
                                    1 == arguments.length ? t = (n = t).name : n.name || (n.name = t), t || r("Struct name is required.");
                                    let s = !1;
                                    Object.keys(n.members).forEach(e => {
                                        let i = n.members[e];
                                        if (i.sizeof)
                                            if (1 === i.sizeof) "c" === i.signature || "C" === i.signature || r("Unexpected sizeof==1 member", n.name + "::" + e, "with signature", i.signature);
                                            else 0 != i.sizeof % 4 && (console.warn("Invalid struct member description =", i, "from", n), r(t, "member", e, "sizeof is not aligned. sizeof=" + i.sizeof)), 0 != i.offset % 4 && (console.warn("Invalid struct member description =", i, "from", n), r(t, "member", e, "offset is not aligned. offset=" + i.offset));
                                        else r(t, "member", e, "is missing sizeof.");
                                        (!s || s.offset < i.offset) && (s = i)
                                    }), s ? n.sizeof < s.offset + s.sizeof && r("Invalid struct config:", t, "max member offset (" + s.offset + ") ", "extends past end of struct (sizeof=" + n.sizeof + ").") : r("No member property descriptions found.");
                                    let o = k(i.__makeDebugFlags(e.debugFlags)),
                                        l = function e(n) {
                                            this instanceof e ? arguments.length ? ((n !== (0 | n) || n <= 0) && r("Invalid pointer value for", t, "constructor."), T(e, this, n)) : T(e, this) : r("The", t, "constructor may only be called via 'new'.")
                                        };
                                    return Object.defineProperties(l, {
                                        debugFlags: o,
                                        isA: k(e => e instanceof l),
                                        memberKey: F,
                                        memberKeys: L,
                                        methodInfoForKey: k(function(e) {}),
                                        structInfo: k(n),
                                        structName: k(t)
                                    }), l.prototype = new Q(t, n, k), Object.defineProperties(l.prototype, {
                                        debugFlags: o,
                                        constructor: k(l)
                                    }), Object.keys(n.members).forEach(e => H(l, e, n.members[e])), l
                                };
                            return V.StructType = Q, V.config = t, V.allocCString = B, V.debugFlags || (V.debugFlags = i.__makeDebugFlags(i.debugFlags)), V
                        }, globalThis.sqlite3ApiBootstrap.initializers.push(function(e) {
                            let t = (...e) => {
                                throw Error(e.join(" "))
                            };
                            e.SQLite3Error.toss;
                            let n = e.capi,
                                r = e.wasm,
                                i = e.util;
                            if (globalThis.WhWasmUtilInstaller(r), delete globalThis.WhWasmUtilInstaller, r.bindingSignatures = [
                                    ["sqlite3_aggregate_context", "void*", "sqlite3_context*", "int"],
                                    ["sqlite3_bind_double", "int", "sqlite3_stmt*", "int", "f64"],
                                    ["sqlite3_bind_int", "int", "sqlite3_stmt*", "int", "int"],
                                    ["sqlite3_bind_null", void 0, "sqlite3_stmt*", "int"],
                                    ["sqlite3_bind_parameter_count", "int", "sqlite3_stmt*"],
                                    ["sqlite3_bind_parameter_index", "int", "sqlite3_stmt*", "string"],
                                    ["sqlite3_bind_pointer", "int", "sqlite3_stmt*", "int", "*", "string:static", "*"],
                                    ["sqlite3_busy_handler", "int", ["sqlite3*", new r.xWrap.FuncPtrAdapter({
                                        signature: "i(pi)",
                                        contextKey: (e, t) => e[0]
                                    }), "*"]],
                                    ["sqlite3_busy_timeout", "int", "sqlite3*", "int"],
                                    ["sqlite3_changes", "int", "sqlite3*"],
                                    ["sqlite3_clear_bindings", "int", "sqlite3_stmt*"],
                                    ["sqlite3_collation_needed", "int", "sqlite3*", "*", "*"],
                                    ["sqlite3_column_blob", "*", "sqlite3_stmt*", "int"],
                                    ["sqlite3_column_bytes", "int", "sqlite3_stmt*", "int"],
                                    ["sqlite3_column_count", "int", "sqlite3_stmt*"],
                                    ["sqlite3_column_double", "f64", "sqlite3_stmt*", "int"],
                                    ["sqlite3_column_int", "int", "sqlite3_stmt*", "int"],
                                    ["sqlite3_column_name", "string", "sqlite3_stmt*", "int"],
                                    ["sqlite3_column_text", "string", "sqlite3_stmt*", "int"],
                                    ["sqlite3_column_type", "int", "sqlite3_stmt*", "int"],
                                    ["sqlite3_column_value", "sqlite3_value*", "sqlite3_stmt*", "int"],
                                    ["sqlite3_commit_hook", "void*", ["sqlite3*", new r.xWrap.FuncPtrAdapter({
                                        name: "sqlite3_commit_hook",
                                        signature: "i(p)",
                                        contextKey: e => e[0]
                                    }), "*"]],
                                    ["sqlite3_compileoption_get", "string", "int"],
                                    ["sqlite3_compileoption_used", "int", "string"],
                                    ["sqlite3_complete", "int", "string:flexible"],
                                    ["sqlite3_context_db_handle", "sqlite3*", "sqlite3_context*"],
                                    ["sqlite3_data_count", "int", "sqlite3_stmt*"],
                                    ["sqlite3_db_filename", "string", "sqlite3*", "string"],
                                    ["sqlite3_db_handle", "sqlite3*", "sqlite3_stmt*"],
                                    ["sqlite3_db_name", "string", "sqlite3*", "int"],
                                    ["sqlite3_db_status", "int", "sqlite3*", "int", "*", "*", "int"],
                                    ["sqlite3_errcode", "int", "sqlite3*"],
                                    ["sqlite3_errmsg", "string", "sqlite3*"],
                                    ["sqlite3_error_offset", "int", "sqlite3*"],
                                    ["sqlite3_errstr", "string", "int"],
                                    ["sqlite3_exec", "int", ["sqlite3*", "string:flexible", new r.xWrap.FuncPtrAdapter({
                                        signature: "i(pipp)",
                                        bindScope: "transient",
                                        callProxy: e => {
                                            let t;
                                            return (i, s, o, l) => {
                                                try {
                                                    let n = r.cArgvToJs(s, o);
                                                    return t || (t = r.cArgvToJs(s, l)), 0 | e(n, t)
                                                } catch (e) {
                                                    return e.resultCode || n.SQLITE_ERROR
                                                }
                                            }
                                        }
                                    }), "*", "**"]],
                                    ["sqlite3_expanded_sql", "string", "sqlite3_stmt*"],
                                    ["sqlite3_extended_errcode", "int", "sqlite3*"],
                                    ["sqlite3_extended_result_codes", "int", "sqlite3*", "int"],
                                    ["sqlite3_file_control", "int", "sqlite3*", "string", "int", "*"],
                                    ["sqlite3_finalize", "int", "sqlite3_stmt*"],
                                    ["sqlite3_free", void 0, "*"],
                                    ["sqlite3_get_auxdata", "*", "sqlite3_context*", "int"],
                                    ["sqlite3_initialize", void 0],
                                    ["sqlite3_keyword_count", "int"],
                                    ["sqlite3_keyword_name", "int", ["int", "**", "*"]],
                                    ["sqlite3_keyword_check", "int", ["string", "int"]],
                                    ["sqlite3_libversion", "string"],
                                    ["sqlite3_libversion_number", "int"],
                                    ["sqlite3_limit", "int", ["sqlite3*", "int", "int"]],
                                    ["sqlite3_malloc", "*", "int"],
                                    ["sqlite3_open", "int", "string", "*"],
                                    ["sqlite3_open_v2", "int", "string", "*", "int", "string"],
                                    ["sqlite3_progress_handler", void 0, ["sqlite3*", "int", new r.xWrap.FuncPtrAdapter({
                                        name: "xProgressHandler",
                                        signature: "i(p)",
                                        bindScope: "context",
                                        contextKey: (e, t) => e[0]
                                    }), "*"]],
                                    ["sqlite3_realloc", "*", "*", "int"],
                                    ["sqlite3_reset", "int", "sqlite3_stmt*"],
                                    ["sqlite3_result_blob", void 0, "sqlite3_context*", "*", "int", "*"],
                                    ["sqlite3_result_double", void 0, "sqlite3_context*", "f64"],
                                    ["sqlite3_result_error", void 0, "sqlite3_context*", "string", "int"],
                                    ["sqlite3_result_error_code", void 0, "sqlite3_context*", "int"],
                                    ["sqlite3_result_error_nomem", void 0, "sqlite3_context*"],
                                    ["sqlite3_result_error_toobig", void 0, "sqlite3_context*"],
                                    ["sqlite3_result_int", void 0, "sqlite3_context*", "int"],
                                    ["sqlite3_result_null", void 0, "sqlite3_context*"],
                                    ["sqlite3_result_pointer", void 0, "sqlite3_context*", "*", "string:static", "*"],
                                    ["sqlite3_result_subtype", void 0, "sqlite3_value*", "int"],
                                    ["sqlite3_result_text", void 0, "sqlite3_context*", "string", "int", "*"],
                                    ["sqlite3_result_zeroblob", void 0, "sqlite3_context*", "int"],
                                    ["sqlite3_rollback_hook", "void*", ["sqlite3*", new r.xWrap.FuncPtrAdapter({
                                        name: "sqlite3_rollback_hook",
                                        signature: "v(p)",
                                        contextKey: e => e[0]
                                    }), "*"]],
                                    ["sqlite3_set_authorizer", "int", ["sqlite3*", new r.xWrap.FuncPtrAdapter({
                                        name: "sqlite3_set_authorizer::xAuth",
                                        signature: "i(pissss)",
                                        contextKey: (e, t) => e[0],
                                        callProxy: e => (t, i, s, o, l, a) => {
                                            try {
                                                return s = s && r.cstrToJs(s), o = o && r.cstrToJs(o), l = l && r.cstrToJs(l), a = a && r.cstrToJs(a), e(t, i, s, o, l, a) || 0
                                            } catch (e) {
                                                return e.resultCode || n.SQLITE_ERROR
                                            }
                                        }
                                    }), "*"]],
                                    ["sqlite3_set_auxdata", void 0, ["sqlite3_context*", "int", "*", new r.xWrap.FuncPtrAdapter({
                                        name: "xDestroyAuxData",
                                        signature: "v(*)",
                                        contextKey: (e, t) => e[0]
                                    })]],
                                    ["sqlite3_shutdown", void 0],
                                    ["sqlite3_sourceid", "string"],
                                    ["sqlite3_sql", "string", "sqlite3_stmt*"],
                                    ["sqlite3_status", "int", "int", "*", "*", "int"],
                                    ["sqlite3_step", "int", "sqlite3_stmt*"],
                                    ["sqlite3_stmt_isexplain", "int", ["sqlite3_stmt*"]],
                                    ["sqlite3_stmt_readonly", "int", ["sqlite3_stmt*"]],
                                    ["sqlite3_stmt_status", "int", "sqlite3_stmt*", "int", "int"],
                                    ["sqlite3_strglob", "int", "string", "string"],
                                    ["sqlite3_stricmp", "int", "string", "string"],
                                    ["sqlite3_strlike", "int", "string", "string", "int"],
                                    ["sqlite3_strnicmp", "int", "string", "string", "int"],
                                    ["sqlite3_table_column_metadata", "int", "sqlite3*", "string", "string", "string", "**", "**", "*", "*", "*"],
                                    ["sqlite3_total_changes", "int", "sqlite3*"],
                                    ["sqlite3_trace_v2", "int", ["sqlite3*", "int", new r.xWrap.FuncPtrAdapter({
                                        name: "sqlite3_trace_v2::callback",
                                        signature: "i(ippp)",
                                        contextKey: (e, t) => e[0]
                                    }), "*"]],
                                    ["sqlite3_txn_state", "int", ["sqlite3*", "string"]],
                                    ["sqlite3_uri_boolean", "int", "sqlite3_filename", "string", "int"],
                                    ["sqlite3_uri_key", "string", "sqlite3_filename", "int"],
                                    ["sqlite3_uri_parameter", "string", "sqlite3_filename", "string"],
                                    ["sqlite3_user_data", "void*", "sqlite3_context*"],
                                    ["sqlite3_value_blob", "*", "sqlite3_value*"],
                                    ["sqlite3_value_bytes", "int", "sqlite3_value*"],
                                    ["sqlite3_value_double", "f64", "sqlite3_value*"],
                                    ["sqlite3_value_dup", "sqlite3_value*", "sqlite3_value*"],
                                    ["sqlite3_value_free", void 0, "sqlite3_value*"],
                                    ["sqlite3_value_frombind", "int", "sqlite3_value*"],
                                    ["sqlite3_value_int", "int", "sqlite3_value*"],
                                    ["sqlite3_value_nochange", "int", "sqlite3_value*"],
                                    ["sqlite3_value_numeric_type", "int", "sqlite3_value*"],
                                    ["sqlite3_value_pointer", "*", "sqlite3_value*", "string:static"],
                                    ["sqlite3_value_subtype", "int", "sqlite3_value*"],
                                    ["sqlite3_value_text", "string", "sqlite3_value*"],
                                    ["sqlite3_value_type", "int", "sqlite3_value*"],
                                    ["sqlite3_vfs_find", "*", "string"],
                                    ["sqlite3_vfs_register", "int", "sqlite3_vfs*", "int"],
                                    ["sqlite3_vfs_unregister", "int", "sqlite3_vfs*"]
                                ], r.exports.sqlite3_activate_see instanceof Function && r.bindingSignatures.push(["sqlite3_key", "int", "sqlite3*", "string", "int"], ["sqlite3_key_v2", "int", "sqlite3*", "string", "*", "int"], ["sqlite3_rekey", "int", "sqlite3*", "string", "int"], ["sqlite3_rekey_v2", "int", "sqlite3*", "string", "*", "int"], ["sqlite3_activate_see", void 0, "string"]), r.bindingSignatures.int64 = [
                                    ["sqlite3_bind_int64", "int", ["sqlite3_stmt*", "int", "i64"]],
                                    ["sqlite3_changes64", "i64", ["sqlite3*"]],
                                    ["sqlite3_column_int64", "i64", ["sqlite3_stmt*", "int"]],
                                    ["sqlite3_create_module", "int", ["sqlite3*", "string", "sqlite3_module*", "*"]],
                                    ["sqlite3_create_module_v2", "int", ["sqlite3*", "string", "sqlite3_module*", "*", "*"]],
                                    ["sqlite3_declare_vtab", "int", ["sqlite3*", "string:flexible"]],
                                    ["sqlite3_deserialize", "int", "sqlite3*", "string", "*", "i64", "i64", "int"],
                                    ["sqlite3_drop_modules", "int", ["sqlite3*", "**"]],
                                    ["sqlite3_last_insert_rowid", "i64", ["sqlite3*"]],
                                    ["sqlite3_malloc64", "*", "i64"],
                                    ["sqlite3_msize", "i64", "*"],
                                    ["sqlite3_overload_function", "int", ["sqlite3*", "string", "int"]],
                                    ["sqlite3_preupdate_blobwrite", "int", "sqlite3*"],
                                    ["sqlite3_preupdate_count", "int", "sqlite3*"],
                                    ["sqlite3_preupdate_depth", "int", "sqlite3*"],
                                    ["sqlite3_preupdate_hook", "*", ["sqlite3*", new r.xWrap.FuncPtrAdapter({
                                        name: "sqlite3_preupdate_hook",
                                        signature: "v(ppippjj)",
                                        contextKey: e => e[0],
                                        callProxy: e => (t, n, i, s, o, l, a) => {
                                            e(t, n, i, r.cstrToJs(s), r.cstrToJs(o), l, a)
                                        }
                                    }), "*"]],
                                    ["sqlite3_preupdate_new", "int", ["sqlite3*", "int", "**"]],
                                    ["sqlite3_preupdate_old", "int", ["sqlite3*", "int", "**"]],
                                    ["sqlite3_realloc64", "*", "*", "i64"],
                                    ["sqlite3_result_int64", void 0, "*", "i64"],
                                    ["sqlite3_result_zeroblob64", "int", "*", "i64"],
                                    ["sqlite3_serialize", "*", "sqlite3*", "string", "*", "int"],
                                    ["sqlite3_set_last_insert_rowid", void 0, ["sqlite3*", "i64"]],
                                    ["sqlite3_status64", "int", "int", "*", "*", "int"],
                                    ["sqlite3_total_changes64", "i64", ["sqlite3*"]],
                                    ["sqlite3_update_hook", "*", ["sqlite3*", new r.xWrap.FuncPtrAdapter({
                                        name: "sqlite3_update_hook",
                                        signature: "v(iippj)",
                                        contextKey: e => e[0],
                                        callProxy: e => (t, n, i, s, o) => {
                                            e(t, n, r.cstrToJs(i), r.cstrToJs(s), o)
                                        }
                                    }), "*"]],
                                    ["sqlite3_uri_int64", "i64", ["sqlite3_filename", "string", "i64"]],
                                    ["sqlite3_value_int64", "i64", "sqlite3_value*"],
                                    ["sqlite3_vtab_collation", "string", "sqlite3_index_info*", "int"],
                                    ["sqlite3_vtab_distinct", "int", "sqlite3_index_info*"],
                                    ["sqlite3_vtab_in", "int", "sqlite3_index_info*", "int", "int"],
                                    ["sqlite3_vtab_in_first", "int", "sqlite3_value*", "**"],
                                    ["sqlite3_vtab_in_next", "int", "sqlite3_value*", "**"],
                                    ["sqlite3_vtab_nochange", "int", "sqlite3_context*"],
                                    ["sqlite3_vtab_on_conflict", "int", "sqlite3*"],
                                    ["sqlite3_vtab_rhs_value", "int", "sqlite3_index_info*", "int", "**"]
                                ], r.bigIntEnabled && r.exports.sqlite3changegroup_add) {
                                let e = {
                                    signature: "i(ps)",
                                    callProxy: e => (t, i) => {
                                        try {
                                            return 0 | e(t, r.cstrToJs(i))
                                        } catch (e) {
                                            return e.resultCode || n.SQLITE_ERROR
                                        }
                                    }
                                };
                                r.bindingSignatures.int64.push(["sqlite3changegroup_add", "int", ["sqlite3_changegroup*", "int", "void*"]], ["sqlite3changegroup_add_strm", "int", ["sqlite3_changegroup*", new r.xWrap.FuncPtrAdapter({
                                    name: "xInput",
                                    signature: "i(ppp)",
                                    bindScope: "transient"
                                }), "void*"]], ["sqlite3changegroup_delete", void 0, ["sqlite3_changegroup*"]], ["sqlite3changegroup_new", "int", ["**"]], ["sqlite3changegroup_output", "int", ["sqlite3_changegroup*", "int*", "**"]], ["sqlite3changegroup_output_strm", "int", ["sqlite3_changegroup*", new r.xWrap.FuncPtrAdapter({
                                    name: "xOutput",
                                    signature: "i(ppi)",
                                    bindScope: "transient"
                                }), "void*"]], ["sqlite3changeset_apply", "int", ["sqlite3*", "int", "void*", new r.xWrap.FuncPtrAdapter({
                                    name: "xFilter",
                                    bindScope: "transient",
                                    ...e
                                }), new r.xWrap.FuncPtrAdapter({
                                    name: "xConflict",
                                    signature: "i(pip)",
                                    bindScope: "transient"
                                }), "void*"]], ["sqlite3changeset_apply_strm", "int", ["sqlite3*", new r.xWrap.FuncPtrAdapter({
                                    name: "xInput",
                                    signature: "i(ppp)",
                                    bindScope: "transient"
                                }), "void*", new r.xWrap.FuncPtrAdapter({
                                    name: "xFilter",
                                    bindScope: "transient",
                                    ...e
                                }), new r.xWrap.FuncPtrAdapter({
                                    name: "xConflict",
                                    signature: "i(pip)",
                                    bindScope: "transient"
                                }), "void*"]], ["sqlite3changeset_apply_v2", "int", ["sqlite3*", "int", "void*", new r.xWrap.FuncPtrAdapter({
                                    name: "xFilter",
                                    bindScope: "transient",
                                    ...e
                                }), new r.xWrap.FuncPtrAdapter({
                                    name: "xConflict",
                                    signature: "i(pip)",
                                    bindScope: "transient"
                                }), "void*", "**", "int*", "int"]], ["sqlite3changeset_apply_v2_strm", "int", ["sqlite3*", new r.xWrap.FuncPtrAdapter({
                                    name: "xInput",
                                    signature: "i(ppp)",
                                    bindScope: "transient"
                                }), "void*", new r.xWrap.FuncPtrAdapter({
                                    name: "xFilter",
                                    bindScope: "transient",
                                    ...e
                                }), new r.xWrap.FuncPtrAdapter({
                                    name: "xConflict",
                                    signature: "i(pip)",
                                    bindScope: "transient"
                                }), "void*", "**", "int*", "int"]], ["sqlite3changeset_concat", "int", ["int", "void*", "int", "void*", "int*", "**"]], ["sqlite3changeset_concat_strm", "int", [new r.xWrap.FuncPtrAdapter({
                                    name: "xInputA",
                                    signature: "i(ppp)",
                                    bindScope: "transient"
                                }), "void*", new r.xWrap.FuncPtrAdapter({
                                    name: "xInputB",
                                    signature: "i(ppp)",
                                    bindScope: "transient"
                                }), "void*", new r.xWrap.FuncPtrAdapter({
                                    name: "xOutput",
                                    signature: "i(ppi)",
                                    bindScope: "transient"
                                }), "void*"]], ["sqlite3changeset_conflict", "int", ["sqlite3_changeset_iter*", "int", "**"]], ["sqlite3changeset_finalize", "int", ["sqlite3_changeset_iter*"]], ["sqlite3changeset_fk_conflicts", "int", ["sqlite3_changeset_iter*", "int*"]], ["sqlite3changeset_invert", "int", ["int", "void*", "int*", "**"]], ["sqlite3changeset_invert_strm", "int", [new r.xWrap.FuncPtrAdapter({
                                    name: "xInput",
                                    signature: "i(ppp)",
                                    bindScope: "transient"
                                }), "void*", new r.xWrap.FuncPtrAdapter({
                                    name: "xOutput",
                                    signature: "i(ppi)",
                                    bindScope: "transient"
                                }), "void*"]], ["sqlite3changeset_new", "int", ["sqlite3_changeset_iter*", "int", "**"]], ["sqlite3changeset_next", "int", ["sqlite3_changeset_iter*"]], ["sqlite3changeset_old", "int", ["sqlite3_changeset_iter*", "int", "**"]], ["sqlite3changeset_op", "int", ["sqlite3_changeset_iter*", "**", "int*", "int*", "int*"]], ["sqlite3changeset_pk", "int", ["sqlite3_changeset_iter*", "**", "int*"]], ["sqlite3changeset_start", "int", ["**", "int", "*"]], ["sqlite3changeset_start_strm", "int", ["**", new r.xWrap.FuncPtrAdapter({
                                    name: "xInput",
                                    signature: "i(ppp)",
                                    bindScope: "transient"
                                }), "void*"]], ["sqlite3changeset_start_v2", "int", ["**", "int", "*", "int"]], ["sqlite3changeset_start_v2_strm", "int", ["**", new r.xWrap.FuncPtrAdapter({
                                    name: "xInput",
                                    signature: "i(ppp)",
                                    bindScope: "transient"
                                }), "void*", "int"]], ["sqlite3session_attach", "int", ["sqlite3_session*", "string"]], ["sqlite3session_changeset", "int", ["sqlite3_session*", "int*", "**"]], ["sqlite3session_changeset_size", "i64", ["sqlite3_session*"]], ["sqlite3session_changeset_strm", "int", ["sqlite3_session*", new r.xWrap.FuncPtrAdapter({
                                    name: "xOutput",
                                    signature: "i(ppp)",
                                    bindScope: "transient"
                                }), "void*"]], ["sqlite3session_config", "int", ["int", "void*"]], ["sqlite3session_create", "int", ["sqlite3*", "string", "**"]], ["sqlite3session_diff", "int", ["sqlite3_session*", "string", "string", "**"]], ["sqlite3session_enable", "int", ["sqlite3_session*", "int"]], ["sqlite3session_indirect", "int", ["sqlite3_session*", "int"]], ["sqlite3session_isempty", "int", ["sqlite3_session*"]], ["sqlite3session_memory_used", "i64", ["sqlite3_session*"]], ["sqlite3session_object_config", "int", ["sqlite3_session*", "int", "void*"]], ["sqlite3session_patchset", "int", ["sqlite3_session*", "*", "**"]], ["sqlite3session_patchset_strm", "int", ["sqlite3_session*", new r.xWrap.FuncPtrAdapter({
                                    name: "xOutput",
                                    signature: "i(ppp)",
                                    bindScope: "transient"
                                }), "void*"]], ["sqlite3session_table_filter", void 0, ["sqlite3_session*", new r.xWrap.FuncPtrAdapter({
                                    name: "xFilter",
                                    ...e,
                                    contextKey: (e, t) => e[0]
                                }), "*"]])
                            }
                            r.bindingSignatures.wasm = [
                                ["sqlite3_wasm_db_reset", "int", "sqlite3*"],
                                ["sqlite3_wasm_db_vfs", "sqlite3_vfs*", "sqlite3*", "string"],
                                ["sqlite3_wasm_vfs_create_file", "int", "sqlite3_vfs*", "string", "*", "int"],
                                ["sqlite3_wasm_posix_create_file", "int", "string", "*", "int"],
                                ["sqlite3_wasm_vfs_unlink", "int", "sqlite3_vfs*", "string"]
                            ], e.StructBinder = globalThis.Jaccwabyt({
                                heap: r.heap8u,
                                alloc: r.alloc,
                                dealloc: r.dealloc,
                                bigIntEnabled: r.bigIntEnabled,
                                memberPrefix: "$"
                            }), delete globalThis.Jaccwabyt; {
                                let s = r.xWrap.argAdapter("string");
                                r.xWrap.argAdapter("string:flexible", e => s(i.flexibleString(e))), r.xWrap.argAdapter("string:static", (function(e) {
                                    return r.isPtr(e) ? e : this[e = "" + e] || (this[e] = r.allocCString(e))
                                }).bind(Object.create(null)));
                                let o = r.xWrap.argAdapter("*"),
                                    l = function() {};
                                r.xWrap.argAdapter("sqlite3_filename", o)("sqlite3_context*", o)("sqlite3_value*", o)("void*", o)("sqlite3_changegroup*", o)("sqlite3_changeset_iter*", o)("sqlite3_session*", o)("sqlite3_stmt*", t => o(t instanceof(e ? .oo1 ? .Stmt || l) ? t.pointer : t))("sqlite3*", t => o(t instanceof(e ? .oo1 ? .DB || l) ? t.pointer : t))("sqlite3_index_info*", e => o(e instanceof(n.sqlite3_index_info || l) ? e.pointer : e))("sqlite3_module*", e => o(e instanceof(n.sqlite3_module || l) ? e.pointer : e))("sqlite3_vfs*", t => "string" == typeof t ? n.sqlite3_vfs_find(t) || e.SQLite3Error.toss(n.SQLITE_NOTFOUND, "Unknown sqlite3_vfs name:", t) : o(t instanceof(n.sqlite3_vfs || l) ? t.pointer : t));
                                let a = r.xWrap.resultAdapter("*");
                                for (let t of (r.xWrap.resultAdapter("sqlite3*", a)("sqlite3_context*", a)("sqlite3_stmt*", a)("sqlite3_value*", a)("sqlite3_vfs*", a)("void*", a), 0 === r.exports.sqlite3_step.length && (r.xWrap.doArgcCheck = !1, e.config.warn("Disabling sqlite3.wasm.xWrap.doArgcCheck due to environmental quirks.")), r.bindingSignatures)) n[t[0]] = r.xWrap.apply(null, t);
                                for (let e of r.bindingSignatures.wasm) r[e[0]] = r.xWrap.apply(null, e);
                                let c = function(e) {
                                    return () => t(e + "() is unavailable due to lack", "of BigInt support in this build.")
                                };
                                for (let e of r.bindingSignatures.int64) n[e[0]] = r.bigIntEnabled ? r.xWrap.apply(null, e) : c(e[0]);
                                if (delete r.bindingSignatures, r.exports.sqlite3_wasm_db_error) {
                                    let t = r.xWrap("sqlite3_wasm_db_error", "int", "sqlite3*", "int", "string");
                                    i.sqlite3_wasm_db_error = function(r, i, s) {
                                        return i instanceof e.WasmAllocError ? (i = n.SQLITE_NOMEM, s = 0) : i instanceof Error && (s = s || "" + i, i = i.resultCode || n.SQLITE_ERROR), r ? t(r, i, s) : i
                                    }
                                } else i.sqlite3_wasm_db_error = function(e, t, n) {
                                    return console.warn("sqlite3_wasm_db_error() is not exported.", arguments), t
                                }
                            } {
                                let s = r.xCall("sqlite3_wasm_enum_json");
                                s || t("Maintenance required: increase sqlite3_wasm_enum_json()'s", "static buffer size!"), r.ctype = JSON.parse(r.cstrToJs(s));
                                let o = ["access", "authorizer", "blobFinalizers", "changeset", "config", "dataTypes", "dbConfig", "dbStatus", "encodings", "fcntl", "flock", "ioCap", "limits", "openFlags", "prepareFlags", "resultCodes", "sqlite3Status", "stmtStatus", "syncFlags", "trace", "txnState", "udfFlags", "version"];
                                for (let e of (r.bigIntEnabled && o.push("serialize", "session", "vtab"), o))
                                    for (let t of Object.entries(r.ctype[e])) n[t[0]] = t[1];
                                r.functionEntry(n.SQLITE_WASM_DEALLOC) || t("Internal error: cannot resolve exported function", "entry SQLITE_WASM_DEALLOC (==" + n.SQLITE_WASM_DEALLOC + ").");
                                let l = Object.create(null);
                                for (let e of ["resultCodes"])
                                    for (let t of Object.entries(r.ctype[e])) l[t[1]] = t[0];
                                n.sqlite3_js_rc_str = e => l[e];
                                let a = Object.assign(Object.create(null), {
                                    WasmTestStruct: !0,
                                    sqlite3_kvvfs_methods: !i.isUIThread(),
                                    sqlite3_index_info: !r.bigIntEnabled,
                                    sqlite3_index_constraint: !r.bigIntEnabled,
                                    sqlite3_index_orderby: !r.bigIntEnabled,
                                    sqlite3_index_constraint_usage: !r.bigIntEnabled
                                });
                                for (let t of r.ctype.structs) a[t.name] || (n[t.name] = e.StructBinder(t));
                                if (n.sqlite3_index_info) {
                                    for (let e of ["sqlite3_index_constraint", "sqlite3_index_orderby", "sqlite3_index_constraint_usage"]) n.sqlite3_index_info[e] = n[e], delete n[e];
                                    n.sqlite3_vtab_config = r.xWrap("sqlite3_wasm_vtab_config", "int", ["sqlite3*", "int", "int"])
                                }
                            }
                            let s = (e, t, r) => i.sqlite3_wasm_db_error(e, n.SQLITE_MISUSE, t + "() requires " + r + " argument" + (1 === r ? "" : "s") + "."),
                                o = e => i.sqlite3_wasm_db_error(e, n.SQLITE_FORMAT, "SQLITE_UTF8 is the only supported encoding."),
                                l = e => r.xWrap.argAdapter("sqlite3*")(e),
                                a = e => r.isPtr(e) ? r.cstrToJs(e) : e,
                                c = (function(e, t) {
                                    e = l(e);
                                    let n = this.dbMap.get(e);
                                    return t ? !n && t > 0 && this.dbMap.set(e, n = Object.create(null)) : this.dbMap.delete(e), n
                                }).bind(Object.assign(Object.create(null), {
                                    dbMap: new Map
                                }));
                            c.addCollation = function(e, t) {
                                let n = c(e, 1);
                                n.collation || (n.collation = new Set), n.collation.add(a(t).toLowerCase())
                            }, c._addUDF = function(e, t, n, r) {
                                t = a(t).toLowerCase();
                                let i = r.get(t);
                                i || r.set(t, i = new Set), i.add(n < 0 ? -1 : n)
                            }, c.addFunction = function(e, t, n) {
                                let r = c(e, 1);
                                r.udf || (r.udf = new Map), this._addUDF(e, t, n, r.udf)
                            }, c.addWindowFunc = function(e, t, n) {
                                let r = c(e, 1);
                                r.wudf || (r.wudf = new Map), this._addUDF(e, t, n, r.wudf)
                            }, c.cleanup = function(e) {
                                let t, i = [e = l(e)];
                                for (let e of ["sqlite3_busy_handler", "sqlite3_commit_hook", "sqlite3_preupdate_hook", "sqlite3_progress_handler", "sqlite3_rollback_hook", "sqlite3_set_authorizer", "sqlite3_trace_v2", "sqlite3_update_hook"]) {
                                    i.length = r.exports[e].length;
                                    try {
                                        n[e](...i)
                                    } catch (t) {
                                        console.warn("close-time call of", e + "(", i, ") threw:", t)
                                    }
                                }
                                let s = c(e, 0);
                                if (s) {
                                    if (s.collation) {
                                        for (let t of s.collation) try {
                                            n.sqlite3_create_collation_v2(e, t, n.SQLITE_UTF8, 0, 0, 0)
                                        } catch (e) {}
                                        delete s.collation
                                    }
                                    for (t = 0; t < 2; ++t) {
                                        let r = t ? s.wudf : s.udf;
                                        if (!r) continue;
                                        let i = t ? n.sqlite3_create_window_function : n.sqlite3_create_function_v2;
                                        for (let s of r) {
                                            let r = s[0],
                                                o = s[1],
                                                l = [e, r, 0, n.SQLITE_UTF8, 0, 0, 0, 0, 0];
                                            for (let e of (t && l.push(0), o)) try {
                                                l[2] = e, i.apply(null, l)
                                            } catch (e) {}
                                            o.clear()
                                        }
                                        r.clear()
                                    }
                                    delete s.udf, delete s.wudf
                                }
                            }; {
                                let e = r.xWrap("sqlite3_close_v2", "int", "sqlite3*");
                                n.sqlite3_close_v2 = function(t) {
                                    if (1 != arguments.length) return s(t, "sqlite3_close_v2", 1);
                                    if (t) try {
                                        c.cleanup(t)
                                    } catch (e) {}
                                    return e(t)
                                }
                            }
                            if (n.sqlite3session_table_filter) {
                                let e = r.xWrap("sqlite3session_delete", void 0, ["sqlite3_session*"]);
                                n.sqlite3session_delete = function(t) {
                                    if (1 != arguments.length) return s(pDb, "sqlite3session_delete", 1);
                                    t && n.sqlite3session_table_filter(t, 0, 0), e(t)
                                }
                            } {
                                let e = (e, t) => "argv[" + t + "]:" + e[0] + ":" + r.cstrToJs(e[1]).toLowerCase(),
                                    t = r.xWrap("sqlite3_create_collation_v2", "int", ["sqlite3*", "string", "int", "*", new r.xWrap.FuncPtrAdapter({
                                        name: "xCompare",
                                        signature: "i(pipip)",
                                        contextKey: e
                                    }), new r.xWrap.FuncPtrAdapter({
                                        name: "xDestroy",
                                        signature: "v(p)",
                                        contextKey: e
                                    })]);
                                n.sqlite3_create_collation_v2 = function(e, r, l, a, u, _) {
                                    if (6 != arguments.length) return s(e, "sqlite3_create_collation_v2", 6);
                                    if (0 == (15 & l)) l |= n.SQLITE_UTF8;
                                    else if (n.SQLITE_UTF8 !== (15 & l)) return o(e);
                                    try {
                                        let n = t(e, r, l, a, u, _);
                                        return 0 === n && u instanceof Function && c.addCollation(e, r), n
                                    } catch (t) {
                                        return i.sqlite3_wasm_db_error(e, t)
                                    }
                                }, n.sqlite3_create_collation = (e, t, r, i, o) => 5 == arguments.length ? n.sqlite3_create_collation_v2(e, t, r, i, o, 0) : s(e, "sqlite3_create_collation", 5)
                            } {
                                let e = function(e, t) {
                                        return e[0] + ":" + (e[2] < 0 ? -1 : e[2]) + ":" + t + ":" + r.cstrToJs(e[1]).toLowerCase()
                                    },
                                    t = Object.assign(Object.create(null), {
                                        xInverseAndStep: {
                                            signature: "v(pip)",
                                            contextKey: e,
                                            callProxy: e => (t, r, i) => {
                                                try {
                                                    e(t, ...n.sqlite3_values_to_js(r, i))
                                                } catch (e) {
                                                    n.sqlite3_result_error_js(t, e)
                                                }
                                            }
                                        },
                                        xFinalAndValue: {
                                            signature: "v(p)",
                                            contextKey: e,
                                            callProxy: e => t => {
                                                try {
                                                    n.sqlite3_result_js(t, e(t))
                                                } catch (e) {
                                                    n.sqlite3_result_error_js(t, e)
                                                }
                                            }
                                        },
                                        xFunc: {
                                            signature: "v(pip)",
                                            contextKey: e,
                                            callProxy: e => (t, r, i) => {
                                                try {
                                                    n.sqlite3_result_js(t, e(t, ...n.sqlite3_values_to_js(r, i)))
                                                } catch (e) {
                                                    n.sqlite3_result_error_js(t, e)
                                                }
                                            }
                                        },
                                        xDestroy: {
                                            signature: "v(p)",
                                            contextKey: e,
                                            callProxy: e => t => {
                                                try {
                                                    e(t)
                                                } catch (e) {
                                                    console.error("UDF xDestroy method threw:", e)
                                                }
                                            }
                                        }
                                    }),
                                    l = r.xWrap("sqlite3_create_function_v2", "int", ["sqlite3*", "string", "int", "int", "*", new r.xWrap.FuncPtrAdapter({
                                        name: "xFunc",
                                        ...t.xFunc
                                    }), new r.xWrap.FuncPtrAdapter({
                                        name: "xStep",
                                        ...t.xInverseAndStep
                                    }), new r.xWrap.FuncPtrAdapter({
                                        name: "xFinal",
                                        ...t.xFinalAndValue
                                    }), new r.xWrap.FuncPtrAdapter({
                                        name: "xDestroy",
                                        ...t.xDestroy
                                    })]),
                                    a = r.xWrap("sqlite3_create_window_function", "int", ["sqlite3*", "string", "int", "int", "*", new r.xWrap.FuncPtrAdapter({
                                        name: "xStep",
                                        ...t.xInverseAndStep
                                    }), new r.xWrap.FuncPtrAdapter({
                                        name: "xFinal",
                                        ...t.xFinalAndValue
                                    }), new r.xWrap.FuncPtrAdapter({
                                        name: "xValue",
                                        ...t.xFinalAndValue
                                    }), new r.xWrap.FuncPtrAdapter({
                                        name: "xInverse",
                                        ...t.xInverseAndStep
                                    }), new r.xWrap.FuncPtrAdapter({
                                        name: "xDestroy",
                                        ...t.xDestroy
                                    })]);
                                n.sqlite3_create_function_v2 = function e(t, r, a, u, _, p, f, d, m) {
                                    if (e.length !== arguments.length) return s(t, "sqlite3_create_function_v2", e.length);
                                    if (0 == (15 & u)) u |= n.SQLITE_UTF8;
                                    else if (n.SQLITE_UTF8 !== (15 & u)) return o(t);
                                    try {
                                        let e = l(t, r, a, u, _, p, f, d, m);
                                        return 0 === e && (p instanceof Function || f instanceof Function || d instanceof Function || m instanceof Function) && c.addFunction(t, r, a), e
                                    } catch (e) {
                                        return console.error("sqlite3_create_function_v2() setup threw:", e), i.sqlite3_wasm_db_error(t, e, "Creation of UDF threw: " + e)
                                    }
                                }, n.sqlite3_create_function = function e(t, r, i, o, l, a, c, u) {
                                    return e.length === arguments.length ? n.sqlite3_create_function_v2(t, r, i, o, l, a, c, u, 0) : s(t, "sqlite3_create_function", e.length)
                                }, n.sqlite3_create_window_function = function e(t, r, l, u, _, p, f, d, m, h) {
                                    if (e.length !== arguments.length) return s(t, "sqlite3_create_window_function", e.length);
                                    if (0 == (15 & u)) u |= n.SQLITE_UTF8;
                                    else if (n.SQLITE_UTF8 !== (15 & u)) return o(t);
                                    try {
                                        let e = a(t, r, l, u, _, p, f, d, m, h);
                                        return 0 === e && (p instanceof Function || f instanceof Function || d instanceof Function || m instanceof Function || h instanceof Function) && c.addWindowFunc(t, r, l), e
                                    } catch (e) {
                                        return console.error("sqlite3_create_window_function() setup threw:", e), i.sqlite3_wasm_db_error(t, e, "Creation of UDF threw: " + e)
                                    }
                                }, n.sqlite3_create_function_v2.udfSetResult = n.sqlite3_create_function.udfSetResult = n.sqlite3_create_window_function.udfSetResult = n.sqlite3_result_js, n.sqlite3_create_function_v2.udfConvertArgs = n.sqlite3_create_function.udfConvertArgs = n.sqlite3_create_window_function.udfConvertArgs = n.sqlite3_values_to_js, n.sqlite3_create_function_v2.udfSetError = n.sqlite3_create_function.udfSetError = n.sqlite3_create_window_function.udfSetError = n.sqlite3_result_error_js
                            } {
                                let e = {
                                    basic: r.xWrap("sqlite3_prepare_v3", "int", ["sqlite3*", "string", "int", "int", "**", "**"]),
                                    full: r.xWrap("sqlite3_prepare_v3", "int", ["sqlite3*", "*", "int", "int", "**", "**"])
                                };
                                n.sqlite3_prepare_v3 = function t(r, o, l, a, c, u) {
                                    var _, p;
                                    if (t.length !== arguments.length) return s(r, "sqlite3_prepare_v3", t.length);
                                    let [f, d] = (_ = o, p = l, "string" == typeof _ ? p = -1 : i.isSQLableTypedArray(_) ? (p = _.byteLength, _ = i.typedArrayToString(_ instanceof ArrayBuffer ? new Uint8Array(_) : _)) : Array.isArray(_) && (_ = _.join(""), p = -1), [_, p]);
                                    switch (typeof f) {
                                        case "string":
                                            return e.basic(r, f, d, a, c, null);
                                        case "number":
                                            return e.full(r, f, d, a, c, u);
                                        default:
                                            return i.sqlite3_wasm_db_error(r, n.SQLITE_MISUSE, "Invalid SQL argument type for sqlite3_prepare_v2/v3().")
                                    }
                                }, n.sqlite3_prepare_v2 = function e(t, r, i, o, l) {
                                    return e.length === arguments.length ? n.sqlite3_prepare_v3(t, r, i, 0, o, l) : s(t, "sqlite3_prepare_v2", e.length)
                                }
                            } {
                                let e = r.xWrap("sqlite3_bind_text", "int", ["sqlite3_stmt*", "int", "string", "int", "*"]),
                                    t = r.xWrap("sqlite3_bind_blob", "int", ["sqlite3_stmt*", "int", "*", "int", "*"]);
                                n.sqlite3_bind_text = function t(o, l, a, c, u) {
                                    let _, p;
                                    if (t.length !== arguments.length) return s(n.sqlite3_db_handle(o), "sqlite3_bind_text", t.length);
                                    if (r.isPtr(a) || null === a) return e(o, l, a, c, u);
                                    a instanceof ArrayBuffer ? a = new Uint8Array(a) : Array.isArray(pMem) && (a = pMem.join(""));
                                    try {
                                        if (i.isSQLableTypedArray(a)) _ = r.allocFromTypedArray(a), p = a.byteLength;
                                        else {
                                            if ("string" != typeof a) return i.sqlite3_wasm_db_error(n.sqlite3_db_handle(o), n.SQLITE_MISUSE, "Invalid 3rd argument type for sqlite3_bind_text().");
                                            [_, p] = r.allocCString(a)
                                        }
                                        return e(o, l, _, p, n.SQLITE_WASM_DEALLOC)
                                    } catch (e) {
                                        return r.dealloc(_), i.sqlite3_wasm_db_error(n.sqlite3_db_handle(o), e)
                                    }
                                }, n.sqlite3_bind_blob = function e(o, l, a, c, u) {
                                    let _, p;
                                    if (e.length !== arguments.length) return s(n.sqlite3_db_handle(o), "sqlite3_bind_blob", e.length);
                                    if (r.isPtr(a) || null === a) return t(o, l, a, c, u);
                                    a instanceof ArrayBuffer ? a = new Uint8Array(a) : Array.isArray(a) && (a = a.join(""));
                                    try {
                                        if (i.isBindableTypedArray(a)) _ = r.allocFromTypedArray(a), p = c >= 0 ? c : a.byteLength;
                                        else {
                                            if ("string" != typeof a) return i.sqlite3_wasm_db_error(n.sqlite3_db_handle(o), n.SQLITE_MISUSE, "Invalid 3rd argument type for sqlite3_bind_blob().");
                                            [_, p] = r.allocCString(a)
                                        }
                                        return t(o, l, _, p, n.SQLITE_WASM_DEALLOC)
                                    } catch (e) {
                                        return r.dealloc(_), i.sqlite3_wasm_db_error(n.sqlite3_db_handle(o), e)
                                    }
                                }
                            }
                            n.sqlite3_config = function(e, ...t) {
                                if (arguments.length < 2) return n.SQLITE_MISUSE;
                                switch (e) {
                                    case n.SQLITE_CONFIG_COVERING_INDEX_SCAN:
                                    case n.SQLITE_CONFIG_MEMSTATUS:
                                    case n.SQLITE_CONFIG_SMALL_MALLOC:
                                    case n.SQLITE_CONFIG_SORTERREF_SIZE:
                                    case n.SQLITE_CONFIG_STMTJRNL_SPILL:
                                    case n.SQLITE_CONFIG_URI:
                                        return r.exports.sqlite3_wasm_config_i(e, t[0]);
                                    case n.SQLITE_CONFIG_LOOKASIDE:
                                        return r.exports.sqlite3_wasm_config_ii(e, t[0], t[1]);
                                    case n.SQLITE_CONFIG_MEMDB_MAXSIZE:
                                        return r.exports.sqlite3_wasm_config_j(e, t[0]);
                                    case n.SQLITE_CONFIG_GETMALLOC:
                                    case n.SQLITE_CONFIG_GETMUTEX:
                                    case n.SQLITE_CONFIG_GETPCACHE2:
                                    case n.SQLITE_CONFIG_GETPCACHE:
                                    case n.SQLITE_CONFIG_HEAP:
                                    case n.SQLITE_CONFIG_LOG:
                                    case n.SQLITE_CONFIG_MALLOC:
                                    case n.SQLITE_CONFIG_MMAP_SIZE:
                                    case n.SQLITE_CONFIG_MULTITHREAD:
                                    case n.SQLITE_CONFIG_MUTEX:
                                    case n.SQLITE_CONFIG_PAGECACHE:
                                    case n.SQLITE_CONFIG_PCACHE2:
                                    case n.SQLITE_CONFIG_PCACHE:
                                    case n.SQLITE_CONFIG_PCACHE_HDRSZ:
                                    case n.SQLITE_CONFIG_PMASZ:
                                    case n.SQLITE_CONFIG_SERIALIZED:
                                    case n.SQLITE_CONFIG_SINGLETHREAD:
                                    case n.SQLITE_CONFIG_SQLLOG:
                                    case n.SQLITE_CONFIG_WIN32_HEAPSIZE:
                                    default:
                                        return n.SQLITE_NOTFOUND
                                }
                            }; {
                                let e = new Set;
                                n.sqlite3_auto_extension = function(t) {
                                    if (t instanceof Function) t = r.installFunction("i(ppp)", t);
                                    else if (1 != arguments.length || !r.isPtr(t)) return n.SQLITE_MISUSE;
                                    let i = r.exports.sqlite3_auto_extension(t);
                                    return t !== arguments[0] && (0 === i ? e.add(t) : r.uninstallFunction(t)), i
                                }, n.sqlite3_cancel_auto_extension = function(e) {
                                    return e && 1 == arguments.length && r.isPtr(e) ? r.exports.sqlite3_cancel_auto_extension(e) : 0
                                }, n.sqlite3_reset_auto_extension = function() {
                                    for (let t of (r.exports.sqlite3_reset_auto_extension(), e)) r.uninstallFunction(t);
                                    e.clear()
                                }
                            }
                            let u = n.sqlite3_vfs_find("kvvfs");
                            if (u)
                                if (i.isUIThread()) {
                                    let e = new n.sqlite3_kvvfs_methods(r.exports.sqlite3_wasm_kvvfs_methods());
                                    delete n.sqlite3_kvvfs_methods;
                                    let t = r.exports.sqlite3_wasm_kvvfsMakeKeyOnPstack,
                                        i = r.pstack,
                                        s = e => 115 === r.peek(e) ? sessionStorage : localStorage,
                                        o = {
                                            xRead: (e, n, o, l) => {
                                                let a = i.pointer,
                                                    c = r.scopedAllocPush();
                                                try {
                                                    let i = t(e, n);
                                                    if (!i) return -3;
                                                    let a = r.cstrToJs(i),
                                                        c = s(e).getItem(a);
                                                    if (!c) return -1;
                                                    let u = c.length;
                                                    if (l <= 0) return u;
                                                    if (1 === l) return r.poke(o, 0), u;
                                                    let _ = r.scopedAllocCString(c);
                                                    return l > u + 1 && (l = u + 1), r.heap8u().copyWithin(o, _, _ + l - 1), r.poke(o + l - 1, 0), l - 1
                                                } catch (e) {
                                                    return console.error("kvstorageRead()", e), -2
                                                } finally {
                                                    i.restore(a), r.scopedAllocPop(c)
                                                }
                                            },
                                            xWrite: (e, o, l) => {
                                                let a = i.pointer;
                                                try {
                                                    let n = t(e, o);
                                                    if (!n) return 1;
                                                    let i = r.cstrToJs(n);
                                                    return s(e).setItem(i, r.cstrToJs(l)), 0
                                                } catch (e) {
                                                    return console.error("kvstorageWrite()", e), n.SQLITE_IOERR
                                                } finally {
                                                    i.restore(a)
                                                }
                                            },
                                            xDelete: (e, o) => {
                                                let l = i.pointer;
                                                try {
                                                    let n = t(e, o);
                                                    if (!n) return 1;
                                                    return s(e).removeItem(r.cstrToJs(n)), 0
                                                } catch (e) {
                                                    return console.error("kvstorageDelete()", e), n.SQLITE_IOERR
                                                } finally {
                                                    i.restore(l)
                                                }
                                            }
                                        };
                                    for (let t of Object.keys(o)) e[e.memberKey(t)] = r.installFunction(e.memberSignature(t), o[t])
                                } else n.sqlite3_vfs_unregister(u);
                            r.xWrap.FuncPtrAdapter.warnOnUse = !0
                        }), globalThis.sqlite3ApiBootstrap.initializers.push(function(e) {
                            e.version = {
                                libVersion: "3.44.0",
                                libVersionNumber: 3044e3,
                                sourceId: "2023-11-01 11:23:50 17129ba1ff7f0daf37100ee82d507aef7827cf38de1866e2633096ae6ad81301",
                                downloadVersion: 344e4
                            }
                        }), globalThis.sqlite3ApiBootstrap.initializers.push(function(e) {
                            let t = (...t) => {
                                    throw new e.SQLite3Error(...t)
                                },
                                n = e.capi,
                                r = e.wasm,
                                i = e.util,
                                s = new WeakMap,
                                o = new WeakMap,
                                l = (e, t, n) => {
                                    let r = Object.getOwnPropertyDescriptor(e, t);
                                    return r ? r.value : n
                                },
                                a = function(e, r) {
                                    return r && (e instanceof p && (e = e.pointer), t(r, "sqlite3 result code", r + ":", e ? n.sqlite3_errmsg(e) : n.sqlite3_errstr(r))), arguments[0]
                                },
                                c = r.installFunction("i(ippp)", (function(e, t, i, s) {
                                    n.SQLITE_TRACE_STMT === e && console.log("SQL TRACE #" + ++this.counter + " via sqlite3@" + t + ":", r.cstrToJs(s))
                                }).bind({
                                    counter: 0
                                })),
                                u = Object.create(null),
                                _ = function i(...l) {
                                    if (!i._name2vfs) {
                                        i._name2vfs = Object.create(null);
                                        let e = "function" == typeof importScripts && (e => t("The VFS for", e, "is only available in the main window thread."));
                                        i._name2vfs[":localStorage:"] = {
                                            vfs: "kvvfs",
                                            filename: e || (() => "local")
                                        }, i._name2vfs[":sessionStorage:"] = {
                                            vfs: "kvvfs",
                                            filename: e || (() => "session")
                                        }
                                    }
                                    let _ = i.normalizeArgs(...l),
                                        p = _.filename,
                                        f = _.vfs,
                                        d = _.flags;
                                    ("string" != typeof p && "number" != typeof p || "string" != typeof d || f && "string" != typeof f && "number" != typeof f) && (e.config.error("Invalid DB ctor args", _, arguments), t("Invalid arguments for DB constructor."));
                                    let m = "number" == typeof p ? r.cstrToJs(p) : p,
                                        h = i._name2vfs[m];
                                    h && (f = h.vfs, p = m = h.filename(m));
                                    let g, y = 0;
                                    d.indexOf("c") >= 0 && (y |= n.SQLITE_OPEN_CREATE | n.SQLITE_OPEN_READWRITE), d.indexOf("w") >= 0 && (y |= n.SQLITE_OPEN_READWRITE), 0 === y && (y |= n.SQLITE_OPEN_READONLY), y |= n.SQLITE_OPEN_EXRESCODE;
                                    let q = r.pstack.pointer;
                                    try {
                                        let e = r.pstack.allocPtr(),
                                            t = n.sqlite3_open_v2(p, e, y, f || 0);
                                        g = r.peekPtr(e), a(g, t), n.sqlite3_extended_result_codes(g, 1), d.indexOf("t") >= 0 && n.sqlite3_trace_v2(g, n.SQLITE_TRACE_STMT, c, g)
                                    } catch (e) {
                                        throw g && n.sqlite3_close_v2(g), e
                                    } finally {
                                        r.pstack.restore(q)
                                    }
                                    this.filename = m, s.set(this, g), o.set(this, Object.create(null));
                                    try {
                                        let r = n.sqlite3_js_db_vfs(g);
                                        r || t("Internal error: cannot get VFS for new db handle.");
                                        let i = u[r];
                                        i instanceof Function ? i(this, e) : i && a(g, n.sqlite3_exec(g, i, 0, 0, 0))
                                    } catch (e) {
                                        throw this.close(), e
                                    }
                                };
                            _.setVfsPostOpenSql = function(e, t) {
                                u[e] = t
                            }, _.normalizeArgs = function(e = ":memory:", t = "c", n = null) {
                                let r = {};
                                return 1 == arguments.length && arguments[0] && "object" == typeof arguments[0] ? (Object.assign(r, arguments[0]), void 0 === r.flags && (r.flags = "c"), void 0 === r.vfs && (r.vfs = null), void 0 === r.filename && (r.filename = ":memory:")) : (r.filename = e, r.flags = t, r.vfs = n), r
                            };
                            let p = function(...e) {
                                _.apply(this, e)
                            };
                            p.dbCtorHelper = _;
                            let f = {
                                null: 1,
                                number: 2,
                                string: 3,
                                boolean: 4,
                                blob: 5
                            };
                            f.undefined, f.null, r.bigIntEnabled && (f.bigint = f.number);
                            let d = function() {
                                    f !== arguments[2] && t(n.SQLITE_MISUSE, "Do not call the Stmt constructor directly. Use DB.prepare()."), this.db = arguments[0], s.set(this, arguments[1]), this.parameterCount = n.sqlite3_bind_parameter_count(this.pointer)
                                },
                                m = function(e) {
                                    return e.pointer || t("DB has been closed."), e
                                },
                                h = function(e, n) {
                                    return (n !== (0 | n) || n < 0 || n >= e.columnCount) && t("Column index", n, "is out of range."), e
                                },
                                g = function(e, r) {
                                    let s = Object.create(null);
                                    switch (s.opt = Object.create(null), r.length) {
                                        case 1:
                                            "string" == typeof r[0] || i.isSQLableTypedArray(r[0]) || Array.isArray(r[0]) ? s.sql = r[0] : r[0] && "object" == typeof r[0] && (s.opt = r[0], s.sql = s.opt.sql);
                                            break;
                                        case 2:
                                            s.sql = r[0], s.opt = r[1];
                                            break;
                                        default:
                                            t("Invalid argument count for exec().")
                                    }
                                    s.sql = i.flexibleString(s.sql), "string" != typeof s.sql && t("Missing SQL argument or unsupported SQL value type.");
                                    let o = s.opt;
                                    switch (o.returnValue) {
                                        case "resultRows":
                                            o.resultRows || (o.resultRows = []), s.returnVal = () => o.resultRows;
                                            break;
                                        case "saveSql":
                                            o.saveSql || (o.saveSql = []), s.returnVal = () => o.saveSql;
                                            break;
                                        case void 0:
                                        case "this":
                                            s.returnVal = () => e;
                                            break;
                                        default:
                                            t("Invalid returnValue value:", o.returnValue)
                                    }
                                    if (o.callback || o.returnValue || void 0 === o.rowMode || (o.resultRows || (o.resultRows = []), s.returnVal = () => o.resultRows), o.callback || o.resultRows) switch (void 0 === o.rowMode ? "array" : o.rowMode) {
                                        case "object":
                                            s.cbArg = e => e.get(Object.create(null));
                                            break;
                                        case "array":
                                            s.cbArg = e => e.get([]);
                                            break;
                                        case "stmt":
                                            Array.isArray(o.resultRows) && t("exec(): invalid rowMode for a resultRows array: must", "be one of 'array', 'object',", "a result column number, or column name reference."), s.cbArg = e => e;
                                            break;
                                        default:
                                            if (i.isInt32(o.rowMode)) {
                                                s.cbArg = e => e.get(o.rowMode);
                                                break
                                            }
                                            if ("string" == typeof o.rowMode && o.rowMode.length > 1 && "$" === o.rowMode[0]) {
                                                let e = o.rowMode.substr(1);
                                                s.cbArg = r => {
                                                    let i = r.get(Object.create(null))[e];
                                                    return void 0 === i ? t(n.SQLITE_NOTFOUND, "exec(): unknown result column:", e) : i
                                                };
                                                break
                                            }
                                            t("Invalid rowMode:", o.rowMode)
                                    }
                                    return s
                                },
                                y = (e, t, n, ...r) => {
                                    let i = e.prepare(t);
                                    try {
                                        let e = i.bind(n).step() ? i.get(...r) : void 0;
                                        return i.reset(), e
                                    } finally {
                                        i.finalize()
                                    }
                                },
                                q = (e, t, n, r) => e.exec({
                                    sql: t,
                                    bind: n,
                                    rowMode: r,
                                    returnValue: "resultRows"
                                });
                            p.checkRc = (e, t) => a(e, t), p.prototype = {
                                isOpen: function() {
                                    return !!this.pointer
                                },
                                affirmOpen: function() {
                                    return m(this)
                                },
                                close: function() {
                                    if (this.pointer) {
                                        if (this.onclose && this.onclose.before instanceof Function) try {
                                            this.onclose.before(this)
                                        } catch (e) {}
                                        let e = this.pointer;
                                        if (Object.keys(o.get(this)).forEach((e, t) => {
                                                if (t && t.pointer) try {
                                                    t.finalize()
                                                } catch (e) {}
                                            }), s.delete(this), o.delete(this), n.sqlite3_close_v2(e), this.onclose && this.onclose.after instanceof Function) try {
                                            this.onclose.after(this)
                                        } catch (e) {}
                                        delete this.filename
                                    }
                                },
                                changes: function(e = !1, t = !1) {
                                    let r = m(this).pointer;
                                    return e ? t ? n.sqlite3_total_changes64(r) : n.sqlite3_total_changes(r) : t ? n.sqlite3_changes64(r) : n.sqlite3_changes(r)
                                },
                                dbFilename: function(e = "main") {
                                    return n.sqlite3_db_filename(m(this).pointer, e)
                                },
                                dbName: function(e = 0) {
                                    return n.sqlite3_db_name(m(this).pointer, e)
                                },
                                dbVfsName: function(e = 0) {
                                    let t, i = n.sqlite3_js_db_vfs(m(this).pointer, e);
                                    if (i) {
                                        let e = new n.sqlite3_vfs(i);
                                        try {
                                            t = r.cstrToJs(e.$zName)
                                        } finally {
                                            e.dispose()
                                        }
                                    }
                                    return t
                                },
                                prepare: function(e) {
                                    let i, s;
                                    m(this);
                                    let l = r.pstack.pointer;
                                    try {
                                        i = r.pstack.alloc(8), p.checkRc(this, n.sqlite3_prepare_v2(this.pointer, e, -1, i, null)), s = r.peekPtr(i)
                                    } finally {
                                        r.pstack.restore(l)
                                    }
                                    s || t("Cannot prepare empty SQL.");
                                    let a = new d(this, s, f);
                                    return o.get(this)[s] = a, a
                                },
                                exec: function() {
                                    let e;
                                    m(this);
                                    let s = g(this, arguments);
                                    if (!s.sql) return t("exec() requires an SQL string.");
                                    let o = s.opt,
                                        l = o.callback,
                                        a = Array.isArray(o.resultRows) ? o.resultRows : void 0,
                                        c = o.bind,
                                        u = !!(s.cbArg || o.columnNames || a),
                                        _ = r.scopedAllocPush(),
                                        h = Array.isArray(o.saveSql) ? o.saveSql : void 0;
                                    try {
                                        let t = i.isSQLableTypedArray(s.sql),
                                            _ = t ? s.sql.byteLength : r.jstrlen(s.sql),
                                            m = r.scopedAlloc(2 * r.ptrSizeof + (_ + 1)),
                                            g = m + r.ptrSizeof,
                                            y = g + r.ptrSizeof,
                                            q = y + _;
                                        for (t ? r.heap8().set(s.sql, y) : r.jstrcpy(s.sql, r.heap8(), y, _, !1), r.poke(y + _, 0); y && r.peek(y, "i8");) {
                                            r.pokePtr([m, g], 0), p.checkRc(this, n.sqlite3_prepare_v3(this.pointer, y, _, 0, m, g));
                                            let t = r.peekPtr(m);
                                            if (y = r.peekPtr(g), _ = q - y, t) {
                                                if (h && h.push(n.sqlite3_sql(t).trim()), e = new d(this, t, f), c && e.parameterCount && (e.bind(c), c = null), u && e.columnCount) {
                                                    let t = +!Array.isArray(o.columnNames);
                                                    if (u = !1, s.cbArg || a) {
                                                        for (; e.step(); e._lockedByExec = !1) {
                                                            0 == t++ && e.getColumnNames(o.columnNames), e._lockedByExec = !0;
                                                            let n = s.cbArg(e);
                                                            if (a && a.push(n), l && !1 === l.call(o, n, e)) break
                                                        }
                                                        e._lockedByExec = !1
                                                    }
                                                    0 === t && e.getColumnNames(o.columnNames)
                                                } else e.step();
                                                e.reset().finalize(), e = null
                                            }
                                        }
                                    } finally {
                                        r.scopedAllocPop(_), e && (delete e._lockedByExec, e.finalize())
                                    }
                                    return s.returnVal()
                                },
                                createFunction: function(e, r, s) {
                                    let o, a;
                                    switch (arguments.length) {
                                        case 1:
                                            e = (s = e).name, r = s.xFunc || 0;
                                            break;
                                        case 2:
                                            r instanceof Function || (r = (s = r).xFunc || 0)
                                    }
                                    s || (s = {}), "string" != typeof e && t("Invalid arguments: missing function name.");
                                    let c = s.xStep || 0,
                                        u = s.xFinal || 0,
                                        _ = s.xValue || 0,
                                        f = s.xInverse || 0;
                                    r instanceof Function ? (a = !1, (c instanceof Function || u instanceof Function) && t("Ambiguous arguments: scalar or aggregate?"), c = u = null) : c instanceof Function ? (u instanceof Function || t("Missing xFinal() callback for aggregate or window UDF."), r = null) : u instanceof Function ? t("Missing xStep() callback for aggregate or window UDF.") : t("Missing function-type properties."), !1 === a ? (_ instanceof Function || f instanceof Function) && t("xValue and xInverse are not permitted for non-window UDFs.") : _ instanceof Function ? (f instanceof Function || t("xInverse must be provided if xValue is."), a = !0) : f instanceof Function && t("xValue must be provided if xInverse is.");
                                    let d = s.pApp;
                                    null == d || "number" == typeof d && i.isInt32(d) || t("Invalid value for pApp property. Must be a legal WASM pointer value.");
                                    let m = s.xDestroy || 0;
                                    !m || m instanceof Function || t("xDestroy property must be a function.");
                                    let h = 0;
                                    l(s, "deterministic") && (h |= n.SQLITE_DETERMINISTIC), l(s, "directOnly") && (h |= n.SQLITE_DIRECTONLY), l(s, "innocuous") && (h |= n.SQLITE_INNOCUOUS), e = e.toLowerCase();
                                    let g = r || c,
                                        y = l(s, "arity"),
                                        q = "number" == typeof y ? y : g.length ? g.length - 1 : 0;
                                    return o = a ? n.sqlite3_create_window_function(this.pointer, e, q, n.SQLITE_UTF8 | h, d || 0, c, u, _, f, m) : n.sqlite3_create_function_v2(this.pointer, e, q, n.SQLITE_UTF8 | h, d || 0, r, c, u, m), p.checkRc(this, o), this
                                },
                                selectValue: function(e, t, n) {
                                    return y(this, e, t, 0, n)
                                },
                                selectValues: function(e, t, n) {
                                    let r = this.prepare(e),
                                        i = [];
                                    try {
                                        for (r.bind(t); r.step();) i.push(r.get(0, n));
                                        r.reset()
                                    } finally {
                                        r.finalize()
                                    }
                                    return i
                                },
                                selectArray: function(e, t) {
                                    return y(this, e, t, [])
                                },
                                selectObject: function(e, t) {
                                    return y(this, e, t, {})
                                },
                                selectArrays: function(e, t) {
                                    return q(this, e, t, "array")
                                },
                                selectObjects: function(e, t) {
                                    return q(this, e, t, "object")
                                },
                                openStatementCount: function() {
                                    return this.pointer ? Object.keys(o.get(this)).length : 0
                                },
                                transaction: function(e) {
                                    let r = "BEGIN";
                                    arguments.length > 1 && (/[^a-zA-Z]/.test(arguments[0]) && t(n.SQLITE_MISUSE, "Invalid argument for BEGIN qualifier."), r += " " + arguments[0], e = arguments[1]), m(this).exec(r);
                                    try {
                                        let t = e(this);
                                        return this.exec("COMMIT"), t
                                    } catch (e) {
                                        throw this.exec("ROLLBACK"), e
                                    }
                                },
                                savepoint: function(e) {
                                    m(this).exec("SAVEPOINT oo1");
                                    try {
                                        let t = e(this);
                                        return this.exec("RELEASE oo1"), t
                                    } catch (e) {
                                        throw this.exec("ROLLBACK to SAVEPOINT oo1; RELEASE SAVEPOINT oo1"), e
                                    }
                                },
                                checkRc: function(e) {
                                    return a(this, e)
                                }
                            };
                            let b = function(e) {
                                    return e.pointer || t("Stmt has been closed."), e
                                },
                                w = function(e) {
                                    let t = f[null == e ? "null" : typeof e];
                                    switch (t) {
                                        case f.boolean:
                                        case f.null:
                                        case f.number:
                                        case f.string:
                                            return t;
                                        case f.bigint:
                                            if (r.bigIntEnabled) return t;
                                        default:
                                            return i.isBindableTypedArray(e) ? f.blob : void 0
                                    }
                                },
                                E = function(e) {
                                    return w(e) || t("Unsupported bind() argument type:", typeof e)
                                },
                                x = function(e, r) {
                                    let s = "number" == typeof r ? r : n.sqlite3_bind_parameter_index(e.pointer, r);
                                    return 0 !== s && i.isInt32(s) ? (s < 1 || s > e.parameterCount) && t("Bind index", r, "is out of range.") : t("Invalid bind() parameter name: " + r), s
                                },
                                S = function(e, n) {
                                    return e._lockedByExec && t("Operation is illegal when statement is locked:", n), e
                                },
                                A = function s(o, l, a, c) {
                                    S(b(o), "bind()"), s._ || (s._tooBigInt = e => t("BigInt value is too big to store without precision loss:", e), s._ = {
                                        string: function(e, t, i, s) {
                                            let [o, l] = r.allocCString(i, !0);
                                            return (s ? n.sqlite3_bind_blob : n.sqlite3_bind_text)(e.pointer, t, o, l, n.SQLITE_WASM_DEALLOC)
                                        }
                                    }), E(c), l = x(o, l);
                                    let u = 0;
                                    switch (null == c ? f.null : a) {
                                        case f.null:
                                            u = n.sqlite3_bind_null(o.pointer, l);
                                            break;
                                        case f.string:
                                            u = s._.string(o, l, c, !1);
                                            break;
                                        case f.number:
                                            {
                                                let e;i.isInt32(c) ? e = n.sqlite3_bind_int : "bigint" == typeof c ? i.bigIntFits64(c) ? r.bigIntEnabled ? e = n.sqlite3_bind_int64 : i.bigIntFitsDouble(c) ? (c = Number(c), e = n.sqlite3_bind_double) : s._tooBigInt(c) : s._tooBigInt(c) : (c = Number(c), e = r.bigIntEnabled && Number.isInteger(c) ? n.sqlite3_bind_int64 : n.sqlite3_bind_double),
                                                u = e(o.pointer, l, c);
                                                break
                                            }
                                        case f.boolean:
                                            u = n.sqlite3_bind_int(o.pointer, l, +!!c);
                                            break;
                                        case f.blob:
                                            {
                                                if ("string" == typeof c) {
                                                    u = s._.string(o, l, c, !0);
                                                    break
                                                }
                                                c instanceof ArrayBuffer ? c = new Uint8Array(c) : i.isBindableTypedArray(c) || t("Binding a value as a blob requires", "that it be a string, Uint8Array, Int8Array, or ArrayBuffer.");
                                                let e = r.alloc(c.byteLength || 1);r.heap8().set(c.byteLength ? c : [0], e),
                                                u = n.sqlite3_bind_blob(o.pointer, l, e, c.byteLength, n.SQLITE_WASM_DEALLOC);
                                                break
                                            }
                                        default:
                                            e.config.warn("Unsupported bind() argument type:", c), t("Unsupported bind() argument type: " + typeof c)
                                    }
                                    return u && p.checkRc(o.db.pointer, u), o._mayGet = !1, o
                                };
                            d.prototype = {
                                finalize: function() {
                                    if (this.pointer) {
                                        S(this, "finalize()");
                                        let e = n.sqlite3_finalize(this.pointer);
                                        return delete o.get(this.db)[this.pointer], s.delete(this), delete this._mayGet, delete this.parameterCount, delete this._lockedByExec, delete this.db, e
                                    }
                                },
                                clearBindings: function() {
                                    return S(b(this), "clearBindings()"), n.sqlite3_clear_bindings(this.pointer), this._mayGet = !1, this
                                },
                                reset: function(e) {
                                    S(this, "reset()"), e && this.clearBindings();
                                    let t = n.sqlite3_reset(b(this).pointer);
                                    return this._mayGet = !1, a(this.db, t), this
                                },
                                bind: function() {
                                    let e, n;
                                    switch (b(this), arguments.length) {
                                        case 1:
                                            e = 1, n = arguments[0];
                                            break;
                                        case 2:
                                            e = arguments[0], n = arguments[1];
                                            break;
                                        default:
                                            t("Invalid bind() arguments.")
                                    }
                                    return void 0 === n ? this : (this.parameterCount || t("This statement has no bindable parameters."), this._mayGet = !1, null === n) ? A(this, e, f.null, n) : Array.isArray(n) ? (1 != arguments.length && t("When binding an array, an index argument is not permitted."), n.forEach((e, t) => A(this, t + 1, E(e), e)), this) : (n instanceof ArrayBuffer && (n = new Uint8Array(n)), "object" != typeof n || i.isBindableTypedArray(n)) ? A(this, e, E(n), n) : (1 != arguments.length && t("When binding an object, an index argument is not permitted."), Object.keys(n).forEach(e => A(this, e, E(n[e]), n[e])), this)
                                },
                                bindAsBlob: function(e, n) {
                                    b(this), 1 == arguments.length && (n = e, e = 1);
                                    let r = E(n);
                                    return f.string !== r && f.blob !== r && f.null !== r && t("Invalid value type for bindAsBlob()"), A(this, e, f.blob, n)
                                },
                                step: function() {
                                    S(this, "step()");
                                    let t = n.sqlite3_step(b(this).pointer);
                                    switch (t) {
                                        case n.SQLITE_DONE:
                                            return this._mayGet = !1;
                                        case n.SQLITE_ROW:
                                            return this._mayGet = !0;
                                        default:
                                            this._mayGet = !1, e.config.warn("sqlite3_step() rc=", t, n.sqlite3_js_rc_str(t), "SQL =", n.sqlite3_sql(this.pointer)), p.checkRc(this.db.pointer, t)
                                    }
                                },
                                stepReset: function() {
                                    return this.step(), this.reset()
                                },
                                stepFinalize: function() {
                                    try {
                                        let e = this.step();
                                        return this.reset(), e
                                    } finally {
                                        try {
                                            this.finalize()
                                        } catch (e) {}
                                    }
                                },
                                get: function(e, s) {
                                    if (b(this)._mayGet || t("Stmt.step() has not (recently) returned true."), Array.isArray(e)) {
                                        let t = 0,
                                            n = this.columnCount;
                                        for (; t < n;) e[t] = this.get(t++);
                                        return e
                                    }
                                    if (e && "object" == typeof e) {
                                        let t = 0,
                                            r = this.columnCount;
                                        for (; t < r;) e[n.sqlite3_column_name(this.pointer, t)] = this.get(t++);
                                        return e
                                    }
                                    switch (h(this, e), void 0 === s ? n.sqlite3_column_type(this.pointer, e) : s) {
                                        case n.SQLITE_NULL:
                                            return null;
                                        case n.SQLITE_INTEGER:
                                            if (r.bigIntEnabled) {
                                                let t = n.sqlite3_column_int64(this.pointer, e);
                                                if (t >= Number.MIN_SAFE_INTEGER && t <= Number.MAX_SAFE_INTEGER) return Number(t).valueOf();
                                                return t
                                            } {
                                                let r = n.sqlite3_column_double(this.pointer, e);
                                                return (r > Number.MAX_SAFE_INTEGER || r < Number.MIN_SAFE_INTEGER) && t("Integer is out of range for JS integer range: " + r), i.isInt32(r) ? 0 | r : r
                                            }
                                        case n.SQLITE_FLOAT:
                                            return n.sqlite3_column_double(this.pointer, e);
                                        case n.SQLITE_TEXT:
                                            return n.sqlite3_column_text(this.pointer, e);
                                        case n.SQLITE_BLOB:
                                            {
                                                let t = n.sqlite3_column_bytes(this.pointer, e),
                                                    i = n.sqlite3_column_blob(this.pointer, e),
                                                    s = new Uint8Array(t);
                                                return t && s.set(r.heap8u().slice(i, i + t), 0),
                                                t && this.db._blobXfer instanceof Array && this.db._blobXfer.push(s.buffer),
                                                s
                                            }
                                        default:
                                            t("Don't know how to translate", "type of result column #" + e + ".")
                                    }
                                    t("Not reached.")
                                },
                                getInt: function(e) {
                                    return this.get(e, n.SQLITE_INTEGER)
                                },
                                getFloat: function(e) {
                                    return this.get(e, n.SQLITE_FLOAT)
                                },
                                getString: function(e) {
                                    return this.get(e, n.SQLITE_TEXT)
                                },
                                getBlob: function(e) {
                                    return this.get(e, n.SQLITE_BLOB)
                                },
                                getJSON: function(e) {
                                    let t = this.get(e, n.SQLITE_STRING);
                                    return null === t ? t : JSON.parse(t)
                                },
                                getColumnName: function(e) {
                                    return n.sqlite3_column_name(h(b(this), e).pointer, e)
                                },
                                getColumnNames: function(e = []) {
                                    h(b(this), 0);
                                    let t = this.columnCount;
                                    for (let r = 0; r < t; ++r) e.push(n.sqlite3_column_name(this.pointer, r));
                                    return e
                                },
                                getParamIndex: function(e) {
                                    return b(this).parameterCount ? n.sqlite3_bind_parameter_index(this.pointer, e) : void 0
                                }
                            }; {
                                let e = {
                                    enumerable: !0,
                                    get: function() {
                                        return s.get(this)
                                    },
                                    set: () => t("The pointer property is read-only.")
                                };
                                Object.defineProperty(d.prototype, "pointer", e), Object.defineProperty(p.prototype, "pointer", e)
                            }
                            if (Object.defineProperty(d.prototype, "columnCount", {
                                    enumerable: !1,
                                    get: function() {
                                        return n.sqlite3_column_count(this.pointer)
                                    },
                                    set: () => t("The columnCount property is read-only.")
                                }), e.oo1 = {
                                    DB: p,
                                    Stmt: d
                                }, i.isUIThread()) {
                                e.oo1.JsStorageDb = function(e = "session") {
                                    "session" !== e && "local" !== e && t("JsStorageDb db name must be one of 'session' or 'local'."), _.call(this, {
                                        filename: e,
                                        flags: "c",
                                        vfs: "kvvfs"
                                    })
                                };
                                let r = e.oo1.JsStorageDb;
                                r.prototype = Object.create(p.prototype), r.clearStorage = n.sqlite3_js_kvvfs_clear, r.prototype.clearStorage = function() {
                                    return r.clearStorage(m(this).filename)
                                }, r.storageSize = n.sqlite3_js_kvvfs_size, r.prototype.storageSize = function() {
                                    return r.storageSize(m(this).filename)
                                }
                            }
                        }), globalThis.sqlite3ApiBootstrap.initializers.push(function(e) {
                            e.initWorker1API = (function() {
                                let e = (...e) => {
                                    throw Error(e.join(" "))
                                };
                                globalThis.WorkerGlobalScope instanceof Function || e("initWorker1API() must be run from a Worker thread.");
                                let t = this.sqlite3 || e("Missing this.sqlite3 object."),
                                    n = t.oo1.DB,
                                    r = function(e) {
                                        let t = i.idMap.get(e);
                                        return t || (t = "db#" + ++i.idSeq + "@" + e.pointer, i.idMap.set(e, t)), t
                                    },
                                    i = {
                                        dbList: [],
                                        idSeq: 0,
                                        idMap: new WeakMap,
                                        xfer: [],
                                        open: function(e) {
                                            let t = new n(e);
                                            return this.dbs[r(t)] = t, 0 > this.dbList.indexOf(t) && this.dbList.push(t), t
                                        },
                                        close: function(e, n) {
                                            if (e) {
                                                delete this.dbs[r(e)];
                                                let i = e.filename,
                                                    s = t.wasm.sqlite3_wasm_db_vfs(e.pointer, 0);
                                                e.close();
                                                let o = this.dbList.indexOf(e);
                                                o >= 0 && this.dbList.splice(o, 1), n && i && s && t.wasm.sqlite3_wasm_vfs_unlink(s, i)
                                            }
                                        },
                                        post: function(e, t) {
                                            t && t.length ? (globalThis.postMessage(e, Array.from(t)), t.length = 0) : globalThis.postMessage(e)
                                        },
                                        dbs: Object.create(null),
                                        getDb: function(t, n = !0) {
                                            return this.dbs[t] || (n ? e("Unknown (or closed) DB ID:", t) : void 0)
                                        }
                                    },
                                    s = function(t, n = !0) {
                                        let r = i.getDb(t.dbId, !1) || i.dbList[0];
                                        return n ? function(t = i.dbList[0]) {
                                            return t && t.pointer ? t : e("DB is not opened.")
                                        }(r) : r
                                    },
                                    o = function(e) {
                                        let n = /^file:.+(vfs=(\w+))/.exec(e);
                                        return t.capi.sqlite3_vfs_find(n ? n[2] : 0)
                                    },
                                    l = {
                                        open: function(n) {
                                            let s, l, a, c = Object.create(null),
                                                u = n.args || Object.create(null);
                                            u.simulateError && e("Throwing because of simulateError flag.");
                                            let _ = Object.create(null);
                                            if (c.vfs = u.vfs, "" === (a = u.filename) || ":" === a[0] ? c.filename = u.filename || "" : (c.filename = u.filename, (s = u.byteArray) && (l = o(u.filename))), l) {
                                                let e;
                                                try {
                                                    e = t.wasm.allocFromTypedArray(s);
                                                    let n = t.wasm.sqlite3_wasm_vfs_create_file(l, c.filename, e, s.byteLength);
                                                    n && t.SQLite3Error.toss(n)
                                                } catch (e) {
                                                    throw new t.SQLite3Error(e.name + " creating " + u.filename + ": " + e.message, {
                                                        cause: e
                                                    })
                                                } finally {
                                                    e && t.wasm.dealloc(e)
                                                }
                                            }
                                            let p = i.open(c);
                                            return _.filename = p.filename, _.persistent = !!t.capi.sqlite3_js_db_uses_vfs(p.pointer, "opfs"), _.dbId = r(p), _.vfs = p.dbVfsName(), _
                                        },
                                        close: function(e) {
                                            let t = s(e, !1),
                                                n = {
                                                    filename: t && t.filename
                                                };
                                            if (t) {
                                                let n = !!e.args && "object" == typeof e.args && !!e.args.unlink;
                                                i.close(t, n)
                                            }
                                            return n
                                        },
                                        exec: function(t) {
                                            let n = "string" == typeof t.args ? {
                                                sql: t.args
                                            } : t.args || Object.create(null);
                                            "stmt" === n.rowMode ? e("Invalid rowMode for 'exec': stmt mode", "does not work in the Worker API.") : n.sql || e("'exec' requires input SQL.");
                                            let r = s(t);
                                            (n.callback || Array.isArray(n.resultRows)) && (r._blobXfer = i.xfer);
                                            let o = n.callback,
                                                l = 0,
                                                a = !!n.columnNames;
                                            "string" == typeof o && (a || (n.columnNames = []), n.callback = function(e, t) {
                                                i.post({
                                                    type: o,
                                                    columnNames: n.columnNames,
                                                    rowNumber: ++l,
                                                    row: e
                                                }, i.xfer)
                                            });
                                            try {
                                                let e = n.countChanges ? r.changes(!0, 64 === n.countChanges) : void 0;
                                                r.exec(n), void 0 !== e && (n.changeCount = r.changes(!0, 64 === n.countChanges) - e), n.callback instanceof Function && (n.callback = o, i.post({
                                                    type: o,
                                                    columnNames: n.columnNames,
                                                    rowNumber: null,
                                                    row: void 0
                                                }))
                                            } finally {
                                                delete r._blobXfer, n.callback && (n.callback = o)
                                            }
                                            return n
                                        },
                                        "config-get": function() {
                                            let e = Object.create(null),
                                                n = t.config;
                                            return ["bigIntEnabled"].forEach(function(t) {
                                                Object.getOwnPropertyDescriptor(n, t) && (e[t] = n[t])
                                            }), e.version = t.version, e.vfsList = t.capi.sqlite3_js_vfs_list(), e.opfsEnabled = !!t.opfs, e
                                        },
                                        export: function(e) {
                                            let n = s(e),
                                                r = {
                                                    byteArray: t.capi.sqlite3_js_db_export(n.pointer),
                                                    filename: n.filename,
                                                    mimetype: "application/x-sqlite3"
                                                };
                                            return i.xfer.push(r.byteArray.buffer), r
                                        },
                                        toss: function(t) {
                                            e("Testing worker exception")
                                        },
                                        "opfs-tree": async function(n) {
                                            return t.opfs || e("OPFS support is unavailable."), await t.opfs.treeList()
                                        }
                                    };
                                globalThis.onmessage = async function(t) {
                                    let n, s = (t = t.data).dbId,
                                        o = t.type,
                                        a = performance.now();
                                    try {
                                        l.hasOwnProperty(o) && l[o] instanceof Function ? n = await l[o](t) : e("Unknown db worker message type:", t.type)
                                    } catch (e) {
                                        o = "error", n = {
                                            operation: t.type,
                                            message: e.message,
                                            errorClass: e.name,
                                            input: t
                                        }, e.stack && (n.stack = "string" == typeof e.stack ? e.stack.split(/\n\s*/) : e.stack)
                                    }
                                    s || (s = n.dbId || i.dbList[0] && r(i.dbList[0])), i.post({
                                        type: o,
                                        dbId: s,
                                        messageId: t.messageId,
                                        workerReceivedTime: a,
                                        workerRespondTime: performance.now(),
                                        departureTime: t.departureTime,
                                        result: n
                                    }, i.xfer)
                                }, globalThis.postMessage({
                                    type: "sqlite3-api",
                                    result: "worker1-ready"
                                })
                            }).bind({
                                sqlite3: e
                            })
                        }), globalThis.sqlite3ApiBootstrap.initializers.push(function(e) {
                            let t = e.wasm,
                                n = e.capi,
                                r = e.util.toss3,
                                i = Object.create(null),
                                s = Object.create(null),
                                o = e.StructBinder;
                            e.vfs = i, e.vtab = s;
                            let l = n.sqlite3_index_info;
                            l.prototype.nthConstraint = function(e, t = !1) {
                                if (e < 0 || e >= this.$nConstraint) return !1;
                                let n = this.$aConstraint + l.sqlite3_index_constraint.structInfo.sizeof * e;
                                return t ? n : new l.sqlite3_index_constraint(n)
                            }, l.prototype.nthConstraintUsage = function(e, t = !1) {
                                if (e < 0 || e >= this.$nConstraint) return !1;
                                let n = this.$aConstraintUsage + l.sqlite3_index_constraint_usage.structInfo.sizeof * e;
                                return t ? n : new l.sqlite3_index_constraint_usage(n)
                            }, l.prototype.nthOrderBy = function(e, t = !1) {
                                if (e < 0 || e >= this.$nOrderBy) return !1;
                                let n = this.$aOrderBy + l.sqlite3_index_orderby.structInfo.sizeof * e;
                                return t ? n : new l.sqlite3_index_orderby(n)
                            };
                            let a = function e(n, i, s, l = e.installMethodArgcCheck) {
                                if (n instanceof o.StructType ? s instanceof Function || t.isPtr(s) || r("Usage errror: expecting a Function or WASM pointer to one.") : r("Usage error: target object is-not-a StructType."), 1 == arguments.length) return (t, r) => e(n, t, r, l);
                                e.argcProxy || (e.argcProxy = function(e, t, n, i) {
                                    return function(...s) {
                                        return n.length !== arguments.length && r("Argument mismatch for", e.structInfo.name + "::" + t + ": Native signature is:", i), n.apply(this, s)
                                    }
                                }, e.removeFuncList = function() {
                                    this.ondispose.__removeFuncList && (this.ondispose.__removeFuncList.forEach((e, n) => {
                                        if ("number" == typeof e) try {
                                            t.uninstallFunction(e)
                                        } catch (e) {}
                                    }), delete this.ondispose.__removeFuncList)
                                });
                                let a = n.memberSignature(i);
                                a.length < 2 && r("Member", i, "does not have a function pointer signature:", a);
                                let c = n.memberKey(i),
                                    u = l && !t.isPtr(s) ? e.argcProxy(n, c, s, a) : s;
                                if (t.isPtr(u)) u && !t.functionEntry(u) && r("Pointer", u, "is not a WASM function table entry."), n[c] = u;
                                else {
                                    let r = t.installFunction(u, n.memberSignature(i, !0));
                                    n[c] = r, n.ondispose && n.ondispose.__removeFuncList || (n.addOnDispose("ondispose.__removeFuncList handler", e.removeFuncList), n.ondispose.__removeFuncList = []), n.ondispose.__removeFuncList.push(c, r)
                                }
                                return (t, r) => e(n, t, r, l)
                            };
                            a.installMethodArgcCheck = !1;
                            let c = function(e, t, n = a.installMethodArgcCheck) {
                                let r = new Map;
                                for (let i of Object.keys(t)) {
                                    let s = t[i],
                                        o = r.get(s);
                                    if (o) {
                                        let t = e.memberKey(i);
                                        e[t] = e[e.memberKey(o)]
                                    } else a(e, i, s, n), r.set(s, i)
                                }
                                return e
                            };
                            o.StructType.prototype.installMethod = function(e, t, n = a.installMethodArgcCheck) {
                                return arguments.length < 3 && e && "object" == typeof e ? c(this, ...arguments) : a(this, ...arguments)
                            }, o.StructType.prototype.installMethods = function(e, t = a.installMethodArgcCheck) {
                                return c(this, e, t)
                            }, n.sqlite3_vfs.prototype.registerVfs = function(t = !1) {
                                this instanceof e.capi.sqlite3_vfs || r("Expecting a sqlite3_vfs-type argument.");
                                let i = n.sqlite3_vfs_register(this, +!!t);
                                return i && r("sqlite3_vfs_register(", this, ") failed with rc", i), this.pointer !== n.sqlite3_vfs_find(this.$zName) && r("BUG: sqlite3_vfs_find(vfs.$zName) failed for just-installed VFS", this), this
                            }, i.installVfs = function(e) {
                                let n = 0,
                                    i = ["io", "vfs"];
                                for (let r of i) {
                                    let i = e[r];
                                    i && (++n, c(i.struct, i.methods, !!i.applyArgcCheck), "vfs" === r && (i.struct.$zName || "string" != typeof i.name || i.struct.addOnDispose(i.struct.$zName = t.allocCString(i.name)), i.struct.registerVfs(!!i.asDefault)))
                                }
                                return n || r("Misuse: installVfs() options object requires at least", "one of:", i), this
                            };
                            let u = function(n, r) {
                                let i = (function(i, s = !1) {
                                    if (0 == arguments.length && (i = new r), i instanceof r) return this.set(i.pointer, i), i;
                                    t.isPtr(i) || e.SQLite3Error.toss("Invalid argument to", n + "()");
                                    let o = this.get(i);
                                    return s && this.delete(i), o
                                }).bind(new Map);
                                return Object.assign(Object.create(null), {
                                    StructType: r,
                                    create: e => {
                                        let n = i();
                                        return t.pokePtr(e, n.pointer), n
                                    },
                                    get: e => i(e),
                                    unget: e => i(e, !0),
                                    dispose: e => {
                                        let t = i(e, !0);
                                        t && t.dispose()
                                    }
                                })
                            };
                            s.xVtab = u("xVtab", n.sqlite3_vtab), s.xCursor = u("xCursor", n.sqlite3_vtab_cursor), s.xIndexInfo = e => new n.sqlite3_index_info(e), s.xError = function t(r, i, s) {
                                let o;
                                if (t.errorReporter instanceof Function) try {
                                    t.errorReporter("sqlite3_module::" + r + "(): " + i.message)
                                } catch (e) {}
                                return i instanceof e.WasmAllocError ? o = n.SQLITE_NOMEM : arguments.length > 2 ? o = s : i instanceof e.SQLite3Error && (o = i.resultCode), o || n.SQLITE_ERROR
                            }, s.xError.errorReporter = console.error.bind(console), s.xRowid = (e, n) => t.poke(e, n, "i64"), s.setupModule = function(i) {
                                let o = !1,
                                    l = this instanceof n.sqlite3_module ? this : i.struct || (o = new n.sqlite3_module);
                                try {
                                    let n = i.methods || r("Missing 'methods' object.");
                                    for (let e of Object.entries({
                                            xConnect: "xCreate",
                                            xDisconnect: "xDestroy"
                                        })) {
                                        let t = e[0],
                                            r = e[1];
                                        !0 === n[t] ? n[t] = n[r] : !0 === n[r] && (n[r] = n[t])
                                    }
                                    if (i.catchExceptions) {
                                        let r = function(n, r) {
                                                return ["xConnect", "xCreate"].indexOf(n) >= 0 ? function(i, o, l, a, c, u) {
                                                    try {
                                                        return r(...arguments) || 0
                                                    } catch (r) {
                                                        return r instanceof e.WasmAllocError || (t.dealloc(t.peekPtr(u)), t.pokePtr(u, t.allocCString(r.message))), s.xError(n, r)
                                                    }
                                                } : function(...e) {
                                                    try {
                                                        return r(...e) || 0
                                                    } catch (e) {
                                                        return s.xError(n, e)
                                                    }
                                                }
                                            },
                                            i = Object.create(null);
                                        for (let e of ["xCreate", "xConnect", "xBestIndex", "xDisconnect", "xDestroy", "xOpen", "xClose", "xFilter", "xNext", "xEof", "xColumn", "xRowid", "xUpdate", "xBegin", "xSync", "xCommit", "xRollback", "xFindFunction", "xRename", "xSavepoint", "xRelease", "xRollbackTo", "xShadowName"]) {
                                            let t = n[e];
                                            t instanceof Function && ("xConnect" === e && n.xCreate === t ? i[e] = n.xCreate : "xCreate" === e && n.xConnect === t ? i[e] = n.xConnect : i[e] = r(e, t))
                                        }
                                        c(l, i, !1)
                                    } else c(l, n, !!i.applyArgcCheck);
                                    if (0 === l.$iVersion) {
                                        let e;
                                        e = "number" == typeof i.iVersion ? i.iVersion : l.$xShadowName ? 3 : l.$xSavePoint || l.$xRelease || l.$xRollbackTo ? 2 : 1, l.$iVersion = e
                                    }
                                } catch (e) {
                                    throw o && o.dispose(), e
                                }
                                return l
                            }, n.sqlite3_module.prototype.setupModule = function(e) {
                                return s.setupModule.call(this, e)
                            }
                        }), globalThis.sqlite3ApiBootstrap.initializers.push(function(e) {
                            let t = function t(r) {
                                if (!globalThis.SharedArrayBuffer || !globalThis.Atomics) return Promise.reject(Error("Cannot install OPFS: Missing SharedArrayBuffer and/or Atomics. The server must emit the COOP/COEP response headers to enable those. See https://sqlite.org/wasm/doc/trunk/persistence.md#coop-coep"));
                                if ("u" < typeof WorkerGlobalScope) return Promise.reject(Error("The OPFS sqlite3_vfs cannot run in the main thread because it requires Atomics.wait()."));
                                if (!globalThis.FileSystemHandle || !globalThis.FileSystemDirectoryHandle || !globalThis.FileSystemFileHandle || !globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle || !navigator ? .storage ? .getDirectory) return Promise.reject(Error("Missing required OPFS APIs."));
                                r && "object" == typeof r || (r = Object.create(null));
                                let i = new URL(globalThis.location.href).searchParams;
                                return i.has("opfs-disable") ? Promise.resolve(e) : (void 0 === r.verbose && (r.verbose = i.has("opfs-verbose") ? +i.get("opfs-verbose") || 2 : 1), void 0 === r.sanityChecks && (r.sanityChecks = i.has("opfs-sanity-check")), void 0 === r.proxyUri && (r.proxyUri = t.defaultProxyUri), "function" == typeof r.proxyUri && (r.proxyUri = r.proxyUri()), new Promise(function(t, i) {
                                    let s, o, l = [e.config.error, e.config.warn, e.config.log],
                                        a = (e, ...t) => {
                                            r.verbose > e && l[e]("OPFS syncer:", ...t)
                                        },
                                        c = e.util.toss,
                                        u = e.capi,
                                        _ = e.util,
                                        p = e.wasm,
                                        f = u.sqlite3_vfs,
                                        d = u.sqlite3_file,
                                        m = u.sqlite3_io_methods,
                                        h = Object.create(null);
                                    h.metrics = {
                                        dump: function() {
                                            let t, n = 0,
                                                r = 0,
                                                i = 0;
                                            for (t in S.opIds) {
                                                let e = A[t];
                                                n += e.count, r += e.time, i += e.wait, e.avgTime = e.count && e.time ? e.time / e.count : 0, e.avgWait = e.count && e.wait ? e.wait / e.count : 0
                                            }
                                            e.config.log(globalThis.location.href, "metrics for", globalThis.location.href, ":", A, "\nTotal of", n, "op(s) for", r, "ms (incl. " + i + " ms of waiting on the async side)"), e.config.log("Serialization metrics:", A.s11n), w.postMessage({
                                                type: "opfs-async-metrics"
                                            })
                                        },
                                        reset: function() {
                                            let e, t = e => e.count = e.time = e.wait = 0;
                                            for (e in S.opIds) t(A[e] = Object.create(null));
                                            let n = A.s11n = Object.create(null);
                                            (n = n.serialize = Object.create(null)).count = n.time = 0, (n = A.s11n.deserialize = Object.create(null)).count = n.time = 0
                                        }
                                    };
                                    let g = new m,
                                        y = new f().addOnDispose(() => g.dispose()),
                                        q = e => (s = !0, y.dispose(), i(e)),
                                        b = () => (s = !1, t(e)),
                                        w = new Worker(new URL(n.p + n.u(14528), n.b));
                                    setTimeout(() => {
                                        void 0 === s && q(Error("Timeout while waiting for OPFS async proxy worker."))
                                    }, 4e3), w._originalOnError = w.onerror, w.onerror = function(e) {
                                        ((...e) => a(0, ...e))("Error initializing OPFS asyncer:", e), q(Error("Loading OPFS async Worker failed for unknown reasons."))
                                    };
                                    let E = u.sqlite3_vfs_find(null),
                                        x = E ? new f(E) : null;
                                    g.$iVersion = 1, y.$iVersion = 2, y.$szOsFile = u.sqlite3_file.structInfo.sizeof, y.$mxPathname = 1024, y.$zName = p.allocCString("opfs"), y.$xDlOpen = y.$xDlError = y.$xDlSym = y.$xDlClose = null, y.addOnDispose("$zName", y.$zName, "cleanup default VFS wrapper", () => x ? x.dispose() : null);
                                    let S = Object.create(null);
                                    S.verbose = r.verbose, new DataView(o = new ArrayBuffer(2)).setInt16(0, 256, !0), S.littleEndian = 256 === new Int16Array(o)[0], S.asyncIdleWaitTime = 150, S.asyncS11nExceptions = 1, S.fileBufferSize = 65536, S.sabS11nOffset = S.fileBufferSize, S.sabS11nSize = 2 * y.$mxPathname, S.sabIO = new SharedArrayBuffer(S.fileBufferSize + S.sabS11nSize), S.opIds = Object.create(null);
                                    let A = Object.create(null); {
                                        let e = 0;
                                        S.opIds.whichOp = e++, S.opIds.rc = e++, S.opIds.xAccess = e++, S.opIds.xClose = e++, S.opIds.xDelete = e++, S.opIds.xDeleteNoWait = e++, S.opIds.xFileSize = e++, S.opIds.xLock = e++, S.opIds.xOpen = e++, S.opIds.xRead = e++, S.opIds.xSleep = e++, S.opIds.xSync = e++, S.opIds.xTruncate = e++, S.opIds.xUnlock = e++, S.opIds.xWrite = e++, S.opIds.mkdir = e++, S.opIds["opfs-async-metrics"] = e++, S.opIds["opfs-async-shutdown"] = e++, S.opIds.retry = e++, S.sabOP = new SharedArrayBuffer(4 * e), h.metrics.reset()
                                    }
                                    S.sq3Codes = Object.create(null), ["SQLITE_ACCESS_EXISTS", "SQLITE_ACCESS_READWRITE", "SQLITE_BUSY", "SQLITE_ERROR", "SQLITE_IOERR", "SQLITE_IOERR_ACCESS", "SQLITE_IOERR_CLOSE", "SQLITE_IOERR_DELETE", "SQLITE_IOERR_FSYNC", "SQLITE_IOERR_LOCK", "SQLITE_IOERR_READ", "SQLITE_IOERR_SHORT_READ", "SQLITE_IOERR_TRUNCATE", "SQLITE_IOERR_UNLOCK", "SQLITE_IOERR_WRITE", "SQLITE_LOCK_EXCLUSIVE", "SQLITE_LOCK_NONE", "SQLITE_LOCK_PENDING", "SQLITE_LOCK_RESERVED", "SQLITE_LOCK_SHARED", "SQLITE_LOCKED", "SQLITE_MISUSE", "SQLITE_NOTFOUND", "SQLITE_OPEN_CREATE", "SQLITE_OPEN_DELETEONCLOSE", "SQLITE_OPEN_MAIN_DB", "SQLITE_OPEN_READONLY"].forEach(e => {
                                        void 0 === (S.sq3Codes[e] = u[e]) && c("Maintenance required: not found:", e)
                                    }), S.opfsFlags = Object.assign(Object.create(null), {
                                        OPFS_UNLOCK_ASAP: 1,
                                        defaultUnlockAsap: !1
                                    });
                                    let I = (e, ...t) => {
                                        let n = S.opIds[e] || c("Invalid op ID:", e);
                                        S.s11n.serialize(...t), Atomics.store(S.sabOPView, S.opIds.rc, -1), Atomics.store(S.sabOPView, S.opIds.whichOp, n), Atomics.notify(S.sabOPView, S.opIds.whichOp);
                                        let r = performance.now();
                                        Atomics.wait(S.sabOPView, S.opIds.rc, -1);
                                        let i = Atomics.load(S.sabOPView, S.opIds.rc);
                                        if (A[e].wait += performance.now() - r, i && S.asyncS11nExceptions) {
                                            let t = S.s11n.deserialize();
                                            t && ((...e) => a(0, ...e))(e + "() async error:", ...t)
                                        }
                                        return i
                                    };
                                    h.debug = {
                                        asyncShutdown: () => {
                                            ((...e) => a(1, ...e))("Shutting down OPFS async listener. The OPFS VFS will no longer work."), I("opfs-async-shutdown")
                                        },
                                        asyncRestart: () => {
                                            ((...e) => a(1, ...e))("Attempting to restart OPFS VFS async listener. Might work, might not."), w.postMessage({
                                                type: "opfs-async-restart"
                                            })
                                        }
                                    };
                                    let k = function e(t = 16) {
                                            e._chars || (e._chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789", e._n = e._chars.length);
                                            let n = [],
                                                r = 0;
                                            for (; r < t; ++r) {
                                                let t = Math.random() * (64 * e._n) % e._n | 0;
                                                n[r] = e._chars[t]
                                            }
                                            return n.join("")
                                        },
                                        T = Object.create(null),
                                        F = Object.create(null);
                                    F.op = void 0, F.start = void 0;
                                    let O = e => {
                                            F.start = performance.now(), F.op = e, ++A[e].count
                                        },
                                        P = () => A[F.op].time += performance.now() - F.start,
                                        L = {
                                            xCheckReservedLock: function(e, t) {
                                                let n = T[e];
                                                return p.poke(t, +!!n.lockType, "i32"), 0
                                            },
                                            xClose: function(e) {
                                                O("xClose");
                                                let t = 0,
                                                    n = T[e];
                                                return n && (delete T[e], t = I("xClose", e), n.sq3File && n.sq3File.dispose()), P(), t
                                            },
                                            xDeviceCharacteristics: function(e) {
                                                return u.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN
                                            },
                                            xFileControl: function(e, t, n) {
                                                return u.SQLITE_NOTFOUND
                                            },
                                            xFileSize: function(e, t) {
                                                O("xFileSize");
                                                let n = I("xFileSize", e);
                                                if (0 == n) try {
                                                    let e = S.s11n.deserialize()[0];
                                                    p.poke(t, e, "i64")
                                                } catch (e) {
                                                    ((...e) => a(0, ...e))("Unexpected error reading xFileSize() result:", e), n = S.sq3Codes.SQLITE_IOERR
                                                }
                                                return P(), n
                                            },
                                            xLock: function(e, t) {
                                                O("xLock");
                                                let n = T[e],
                                                    r = 0;
                                                return n.lockType ? n.lockType = t : 0 === (r = I("xLock", e, t)) && (n.lockType = t), P(), r
                                            },
                                            xRead: function(e, t, n, r) {
                                                let i;
                                                O("xRead");
                                                let s = T[e];
                                                try {
                                                    i = I("xRead", e, n, Number(r)), (0 === i || u.SQLITE_IOERR_SHORT_READ === i) && p.heap8u().set(s.sabView.subarray(0, n), t)
                                                } catch (e) {
                                                    ((...e) => a(0, ...e))("xRead(", arguments, ") failed:", e, s), i = u.SQLITE_IOERR_READ
                                                }
                                                return P(), i
                                            },
                                            xSync: function(e, t) {
                                                O("xSync"), ++A.xSync.count;
                                                let n = I("xSync", e, t);
                                                return P(), n
                                            },
                                            xTruncate: function(e, t) {
                                                O("xTruncate");
                                                let n = I("xTruncate", e, Number(t));
                                                return P(), n
                                            },
                                            xUnlock: function(e, t) {
                                                O("xUnlock");
                                                let n = T[e],
                                                    r = 0;
                                                return u.SQLITE_LOCK_NONE === t && n.lockType && (r = I("xUnlock", e, t)), 0 === r && (n.lockType = t), P(), r
                                            },
                                            xWrite: function(e, t, n, r) {
                                                let i;
                                                O("xWrite");
                                                let s = T[e];
                                                try {
                                                    s.sabView.set(p.heap8u().subarray(t, t + n)), i = I("xWrite", e, n, Number(r))
                                                } catch (e) {
                                                    ((...e) => a(0, ...e))("xWrite(", arguments, ") failed:", e, s), i = u.SQLITE_IOERR_WRITE
                                                }
                                                return P(), i
                                            }
                                        },
                                        C = {
                                            xAccess: function(e, t, n, r) {
                                                O("xAccess");
                                                let i = I("xAccess", p.cstrToJs(t));
                                                return p.poke(r, +!i, "i32"), P(), 0
                                            },
                                            xCurrentTime: function(e, t) {
                                                return p.poke(t, 2440587.5 + new Date().getTime() / 864e5, "double"), 0
                                            },
                                            xCurrentTimeInt64: function(e, t) {
                                                return p.poke(t, 21086676e7 + new Date().getTime(), "i64"), 0
                                            },
                                            xDelete: function(e, t, n) {
                                                O("xDelete");
                                                let r = I("xDelete", p.cstrToJs(t), n, !1);
                                                return P(), r
                                            },
                                            xFullPathname: function(e, t, n, r) {
                                                return p.cstrncpy(r, t, n) < n ? 0 : u.SQLITE_CANTOPEN
                                            },
                                            xGetLastError: function(e, t, n) {
                                                return ((...e) => a(1, ...e))("OPFS xGetLastError() has nothing sensible to return."), 0
                                            },
                                            xOpen: function(e, t, n, r, i) {
                                                O("xOpen");
                                                let s = 0;
                                                0 === t ? t = k() : "number" == typeof t && (u.sqlite3_uri_boolean(t, "opfs-unlock-asap", 0) && (s |= S.opfsFlags.OPFS_UNLOCK_ASAP), t = p.cstrToJs(t));
                                                let o = Object.create(null);
                                                o.fid = n, o.filename = t, o.sab = new SharedArrayBuffer(S.fileBufferSize), o.flags = r;
                                                let l = I("xOpen", n, t, r, s);
                                                return l || (o.readOnly && p.poke(i, u.SQLITE_OPEN_READONLY, "i32"), T[n] = o, o.sabView = S.sabFileBufView, o.sq3File = new d(n), o.sq3File.$pMethods = g.pointer, o.lockType = u.SQLITE_LOCK_NONE), P(), l
                                            }
                                        };
                                    x && (y.$xRandomness = x.$xRandomness, y.$xSleep = x.$xSleep), y.$xRandomness || (C.xRandomness = function(e, t, n) {
                                        let r = p.heap8u(),
                                            i = 0;
                                        for (; i < t; ++i) r[n + i] = 255e3 * Math.random() & 255;
                                        return i
                                    }), y.$xSleep || (C.xSleep = function(e, t) {
                                        return Atomics.wait(S.sabOPView, S.opIds.xSleep, 0, t), 0
                                    }), h.getResolvedPath = function(e, t) {
                                        let n = new URL(e, "file://irrelevant").pathname;
                                        return t ? n.split("/").filter(e => !!e) : n
                                    }, h.getDirForFilename = async function(e, t = !1) {
                                        let n = h.getResolvedPath(e, !0),
                                            r = n.pop(),
                                            i = h.rootDirectory;
                                        for (let e of n) e && (i = await i.getDirectoryHandle(e, {
                                            create: !!t
                                        }));
                                        return [i, r]
                                    }, h.mkdir = async function(e) {
                                        try {
                                            return await h.getDirForFilename(e + "/filepart", !0), !0
                                        } catch (e) {
                                            return !1
                                        }
                                    }, h.entryExists = async function(e) {
                                        try {
                                            let [t, n] = await h.getDirForFilename(e);
                                            return await t.getFileHandle(n), !0
                                        } catch (e) {
                                            return !1
                                        }
                                    }, h.randomFilename = k, h.registerVfs = (e = !1) => p.exports.sqlite3_vfs_register(y.pointer, +!!e), h.treeList = async function() {
                                        let e = async function e(t, n) {
                                                for await (let r of (n.name = t.name, n.dirs = [], n.files = [], t.values())) if ("directory" === r.kind) {
                                                    let t = Object.create(null);
                                                    n.dirs.push(t), await e(r, t)
                                                } else n.files.push(r.name)
                                            },
                                            t = Object.create(null);
                                        return await e(h.rootDirectory, t), t
                                    }, h.rmfr = async function() {
                                        let e = h.rootDirectory,
                                            t = {
                                                recurse: !0
                                            };
                                        for await (let n of e.values()) e.removeEntry(n.name, t)
                                    }, h.unlink = async function(e, t = !1, n = !1) {
                                        try {
                                            let [n, r] = await h.getDirForFilename(e, !1);
                                            return await n.removeEntry(r, {
                                                recursive: t
                                            }), !0
                                        } catch (e) {
                                            if (n) throw Error("unlink(", arguments[0], ") failed: " + e.message, {
                                                cause: e
                                            });
                                            return !1
                                        }
                                    }, h.traverse = async function(e) {
                                        let t = {
                                            recursive: !0,
                                            directory: h.rootDirectory
                                        };
                                        "function" == typeof e && (e = {
                                            callback: e
                                        }), async function t(n, r) {
                                            for await (let i of n.values()) if (!1 === e.callback(i, n, r)) return !1;
                                            else if (e.recursive && "directory" === i.kind && !1 === await t(i, r + 1)) break
                                        }((e = Object.assign(t, e || {})).directory, 0)
                                    };
                                    let D = async function(e, t) {
                                        let [n, r] = await h.getDirForFilename(e, !0), i = await n.getFileHandle(r, {
                                            create: !0
                                        }), s = await i.createSyncAccessHandle(), o = 0, l, a = !1;
                                        try {
                                            for (s.truncate(0); void 0 !== (l = await t());) l instanceof ArrayBuffer && (l = new Uint8Array(l)), 0 === o && l.byteLength >= 15 && (_.affirmDbHeader(l), a = !0), s.write(l, {
                                                at: o
                                            }), o += l.byteLength;
                                            if ((o < 512 || 0 != o % 512) && c("Input size", o, "is not correct for an SQLite database."), !a) {
                                                let e = new Uint8Array(20);
                                                s.read(e, {
                                                    at: 0
                                                }), _.affirmDbHeader(e)
                                            }
                                            return s.write(new Uint8Array([1, 1]), {
                                                at: 18
                                            }), o
                                        } catch (e) {
                                            throw await s.close(), s = void 0, await n.removeEntry(r).catch(() => {}), e
                                        } finally {
                                            s && await s.close()
                                        }
                                    };
                                    if (h.importDb = async function(e, t) {
                                            if (t instanceof Function) return D(e, t);
                                            t instanceof ArrayBuffer && (t = new Uint8Array(t)), _.affirmIsDb(t);
                                            let n = t.byteLength,
                                                [r, i] = await h.getDirForFilename(e, !0),
                                                s, o = 0;
                                            try {
                                                let e = await r.getFileHandle(i, {
                                                    create: !0
                                                });
                                                return (s = await e.createSyncAccessHandle()).truncate(0), (o = s.write(t, {
                                                    at: 0
                                                })) != n && c("Expected to write " + n + " bytes but wrote " + o + "."), s.write(new Uint8Array([1, 1]), {
                                                    at: 18
                                                }), o
                                            } catch (e) {
                                                throw s && (await s.close(), s = void 0), await r.removeEntry(i).catch(() => {}), e
                                            } finally {
                                                s && await s.close()
                                            }
                                        }, e.oo1) {
                                        let t = function(...t) {
                                            let n = e.oo1.DB.dbCtorHelper.normalizeArgs(...t);
                                            n.vfs = y.$zName, e.oo1.DB.dbCtorHelper.call(this, n)
                                        };
                                        t.prototype = Object.create(e.oo1.DB.prototype), e.oo1.OpfsDb = t, t.importDb = h.importDb, e.oo1.DB.dbCtorHelper.setVfsPostOpenSql(y.pointer, function(e, t) {
                                            t.capi.sqlite3_busy_timeout(e, 1e4), t.capi.sqlite3_exec(e, ["pragma journal_mode=DELETE;", "pragma cache_size=-16384;"], 0, 0, 0)
                                        })
                                    }
                                    let N = function() {
                                        let e = p.scopedAllocPush(),
                                            t = new d;
                                        try {
                                            let e, n = t.pointer,
                                                r = u.SQLITE_OPEN_CREATE | u.SQLITE_OPEN_READWRITE | u.SQLITE_OPEN_MAIN_DB,
                                                i = p.scopedAlloc(8),
                                                s = "/sanity/check/file" + k(8),
                                                o = p.scopedAllocCString(s);
                                            if (S.s11n.serialize("This is ä string."), e = S.s11n.deserialize(), ((...e) => a(2, ...e))("deserialize() says:", e), "This is ä string." !== e[0] && c("String d13n error."), C.xAccess(y.pointer, o, 0, i), e = p.peek(i, "i32"), ((...e) => a(2, ...e))("xAccess(", s, ") exists ?=", e), e = C.xOpen(y.pointer, o, n, r, i), ((...e) => a(2, ...e))("open rc =", e, "state.sabOPView[xOpen] =", S.sabOPView[S.opIds.xOpen]), 0 !== e) return void((...e) => a(0, ...e))("open failed with code", e);
                                            C.xAccess(y.pointer, o, 0, i), (e = p.peek(i, "i32")) || c("xAccess() failed to detect file."), (e = L.xSync(t.pointer, 0)) && c("sync failed w/ rc", e), (e = L.xTruncate(t.pointer, 1024)) && c("truncate failed w/ rc", e), p.poke(i, 0, "i64"), (e = L.xFileSize(t.pointer, i)) && c("xFileSize failed w/ rc", e), ((...e) => a(2, ...e))("xFileSize says:", p.peek(i, "i64")), (e = L.xWrite(t.pointer, o, 10, 1)) && c("xWrite() failed!");
                                            let l = p.scopedAlloc(16);
                                            e = L.xRead(t.pointer, l, 6, 2), p.poke(l + 6, 0);
                                            let _ = p.cstrToJs(l);
                                            ((...e) => a(2, ...e))("xRead() got:", _), "sanity" !== _ && c("Unexpected xRead() value."), C.xSleep && (((...e) => a(2, ...e))("xSleep()ing before close()ing..."), C.xSleep(y.pointer, 2e3), ((...e) => a(2, ...e))("waking up from xSleep()")), e = L.xClose(n), ((...e) => a(2, ...e))("xClose rc =", e, "sabOPView =", S.sabOPView), ((...e) => a(2, ...e))("Deleting file:", s), C.xDelete(y.pointer, o, 4660), C.xAccess(y.pointer, o, 0, i), (e = p.peek(i, "i32")) && c("Expecting 0 from xAccess(", s, ") after xDelete()."), ((...e) => a(1, ...e))("End of OPFS sanity checks.")
                                        } finally {
                                            t.dispose(), p.scopedAllocPop(e)
                                        }
                                    };
                                    w.onmessage = function({
                                        data: t
                                    }) {
                                        switch (t.type) {
                                            case "opfs-unavailable":
                                                q(Error(t.payload.join(" ")));
                                                break;
                                            case "opfs-async-loaded":
                                                w.postMessage({
                                                    type: "opfs-async-init",
                                                    args: S
                                                });
                                                break;
                                            case "opfs-async-inited":
                                                if (!0 === s) break;
                                                try {
                                                    e.vfs.installVfs({
                                                        io: {
                                                            struct: g,
                                                            methods: L
                                                        },
                                                        vfs: {
                                                            struct: y,
                                                            methods: C
                                                        }
                                                    }), S.sabOPView = new Int32Array(S.sabOP), S.sabFileBufView = new Uint8Array(S.sabIO, 0, S.fileBufferSize), S.sabS11nView = new Uint8Array(S.sabIO, S.sabS11nOffset, S.sabS11nSize), (() => {
                                                        if (S.s11n) return S.s11n;
                                                        let e = new TextDecoder,
                                                            t = new TextEncoder("utf-8"),
                                                            n = new Uint8Array(S.sabIO, S.sabS11nOffset, S.sabS11nSize),
                                                            r = new DataView(S.sabIO, S.sabS11nOffset, S.sabS11nSize);
                                                        S.s11n = Object.create(null);
                                                        let i = Object.create(null);
                                                        i.number = {
                                                            id: 1,
                                                            size: 8,
                                                            getter: "getFloat64",
                                                            setter: "setFloat64"
                                                        }, i.bigint = {
                                                            id: 2,
                                                            size: 8,
                                                            getter: "getBigInt64",
                                                            setter: "setBigInt64"
                                                        }, i.boolean = {
                                                            id: 3,
                                                            size: 4,
                                                            getter: "getInt32",
                                                            setter: "setInt32"
                                                        }, i.string = {
                                                            id: 4
                                                        };
                                                        let s = e => i[typeof e] || c("Maintenance required: this value type cannot be serialized.", e),
                                                            o = e => {
                                                                switch (e) {
                                                                    case i.number.id:
                                                                        return i.number;
                                                                    case i.bigint.id:
                                                                        return i.bigint;
                                                                    case i.boolean.id:
                                                                        return i.boolean;
                                                                    case i.string.id:
                                                                        return i.string;
                                                                    default:
                                                                        c("Invalid type ID:", e)
                                                                }
                                                            };
                                                        return S.s11n.deserialize = function(t = !1) {
                                                            ++A.s11n.deserialize.count;
                                                            let i = performance.now(),
                                                                s = n[0],
                                                                l = s ? [] : null;
                                                            if (s) {
                                                                let t = [],
                                                                    i = 1,
                                                                    a, c, u;
                                                                for (a = 0; a < s; ++a, ++i) t.push(o(n[i]));
                                                                for (a = 0; a < s; ++a) {
                                                                    let s = t[a];
                                                                    s.getter ? (u = r[s.getter](i, S.littleEndian), i += s.size) : (c = r.getInt32(i, S.littleEndian), i += 4, u = e.decode(n.slice(i, i + c)), i += c), l.push(u)
                                                                }
                                                            }
                                                            return t && (n[0] = 0), A.s11n.deserialize.time += performance.now() - i, l
                                                        }, S.s11n.serialize = function(...e) {
                                                            let i = performance.now();
                                                            if (++A.s11n.serialize.count, e.length) {
                                                                let i = [],
                                                                    o = 0,
                                                                    l = 1;
                                                                for (n[0] = 255 & e.length; o < e.length; ++o, ++l) i.push(s(e[o])), n[l] = i[o].id;
                                                                for (o = 0; o < e.length; ++o) {
                                                                    let s = i[o];
                                                                    if (s.setter) r[s.setter](l, e[o], S.littleEndian), l += s.size;
                                                                    else {
                                                                        let i = t.encode(e[o]);
                                                                        r.setInt32(l, i.byteLength, S.littleEndian), l += 4, n.set(i, l), l += i.byteLength
                                                                    }
                                                                }
                                                            } else n[0] = 0;
                                                            A.s11n.serialize.time += performance.now() - i
                                                        }, S.s11n
                                                    })(), r.sanityChecks && (((...e) => a(1, ...e))("Running sanity checks because of opfs-sanity-check URL arg..."), N()), globalThis.FileSystemHandle && globalThis.FileSystemDirectoryHandle && globalThis.FileSystemFileHandle && globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle && navigator ? .storage ? .getDirectory ? navigator.storage.getDirectory().then(t => {
                                                        w.onerror = w._originalOnError, delete w._originalOnError, e.opfs = h, h.rootDirectory = t, ((...e) => a(2, ...e))("End of OPFS sqlite3_vfs setup.", y), b()
                                                    }).catch(q) : b()
                                                } catch (e) {
                                                    ((...e) => a(0, ...e))(e), q(e)
                                                }
                                                break;
                                            default:
                                                {
                                                    let e = "Unexpected message from the OPFS async worker: " + JSON.stringify(t);
                                                    ((...e) => a(0, ...e))(e),
                                                    q(Error(e))
                                                }
                                        }
                                    }
                                }))
                            };
                            t.defaultProxyUri = "sqlite3-opfs-async-proxy.js", globalThis.sqlite3ApiBootstrap.initializersAsync.push(async e => {
                                try {
                                    let n = t.defaultProxyUri;
                                    return e.scriptInfo.sqlite3Dir && (t.defaultProxyUri = e.scriptInfo.sqlite3Dir + n), t().catch(t => {
                                        e.config.warn("Ignoring inability to install OPFS sqlite3_vfs:", t.message)
                                    })
                                } catch (t) {
                                    return e.config.error("installOpfsVfs() exception:", t), Promise.reject(t)
                                }
                            })
                        }), globalThis.sqlite3ApiBootstrap.initializers.push(function(e) {
                            let t = e.util.toss,
                                n = e.util.toss3,
                                r = Object.create(null),
                                i = e.capi,
                                s = e.util,
                                o = e.wasm,
                                l = i.SQLITE_OPEN_MAIN_DB | i.SQLITE_OPEN_MAIN_JOURNAL | i.SQLITE_OPEN_SUPER_JOURNAL | i.SQLITE_OPEN_WAL,
                                a = ".opaque",
                                c = () => Math.random().toString(36).slice(2),
                                u = new TextDecoder,
                                _ = new TextEncoder,
                                p = Object.assign(Object.create(null), {
                                    name: "opfs-sahpool",
                                    directory: void 0,
                                    initialCapacity: 6,
                                    clearOnInit: !1,
                                    verbosity: 2
                                }),
                                f = [e.config.error, e.config.warn, e.config.log];
                            e.config.log;
                            let d = e.config.warn;
                            e.config.error;
                            let m = new Map,
                                h = (e, t) => {
                                    t ? m.set(e, t) : m.delete(e)
                                },
                                g = new Map,
                                y = (e, t) => {
                                    t ? g.set(e, t) : g.delete(e)
                                },
                                q = new i.sqlite3_io_methods;
                            q.$iVersion = 1, e.vfs.installVfs({
                                io: {
                                    struct: q,
                                    methods: {
                                        xCheckReservedLock: function(e, t) {
                                            let n = g.get(e);
                                            return n.log("xCheckReservedLock"), n.storeErr(), o.poke32(t, 1), 0
                                        },
                                        xClose: function(e) {
                                            let t = g.get(e);
                                            t.storeErr();
                                            let n = t.getOFileForS3File(e);
                                            if (n) try {
                                                t.log(`xClose ${n.path}`), t.mapS3FileToOFile(e, !1), n.sah.flush(), n.flags & i.SQLITE_OPEN_DELETEONCLOSE && t.deletePath(n.path)
                                            } catch (e) {
                                                return t.storeErr(e, i.SQLITE_IOERR)
                                            }
                                            return 0
                                        },
                                        xDeviceCharacteristics: function(e) {
                                            return i.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN
                                        },
                                        xFileControl: function(e, t, n) {
                                            return i.SQLITE_NOTFOUND
                                        },
                                        xFileSize: function(e, t) {
                                            let n = g.get(e);
                                            n.log("xFileSize");
                                            let r = n.getOFileForS3File(e).sah.getSize() - 4096;
                                            return o.poke64(t, BigInt(r)), 0
                                        },
                                        xLock: function(e, t) {
                                            let n = g.get(e);
                                            return n.log(`xLock ${t}`), n.storeErr(), n.getOFileForS3File(e).lockType = t, 0
                                        },
                                        xRead: function(e, t, n, r) {
                                            let s = g.get(e);
                                            s.storeErr();
                                            let l = s.getOFileForS3File(e);
                                            s.log(`xRead ${l.path} ${n} @ ${r}`);
                                            try {
                                                let e = l.sah.read(o.heap8u().subarray(t, t + n), {
                                                    at: 4096 + Number(r)
                                                });
                                                if (e < n) return o.heap8u().fill(0, t + e, t + n), i.SQLITE_IOERR_SHORT_READ;
                                                return 0
                                            } catch (e) {
                                                return s.storeErr(e, i.SQLITE_IOERR)
                                            }
                                        },
                                        xSectorSize: function(e) {
                                            return 4096
                                        },
                                        xSync: function(e, t) {
                                            let n = g.get(e);
                                            n.log(`xSync ${t}`), n.storeErr();
                                            let r = n.getOFileForS3File(e);
                                            try {
                                                return r.sah.flush(), 0
                                            } catch (e) {
                                                return n.storeErr(e, i.SQLITE_IOERR)
                                            }
                                        },
                                        xTruncate: function(e, t) {
                                            let n = g.get(e);
                                            n.log(`xTruncate ${t}`), n.storeErr();
                                            let r = n.getOFileForS3File(e);
                                            try {
                                                return r.sah.truncate(4096 + Number(t)), 0
                                            } catch (e) {
                                                return n.storeErr(e, i.SQLITE_IOERR)
                                            }
                                        },
                                        xUnlock: function(e, t) {
                                            let n = g.get(e);
                                            return n.log("xUnlock"), n.getOFileForS3File(e).lockType = t, 0
                                        },
                                        xWrite: function(e, n, r, s) {
                                            let l = g.get(e);
                                            l.storeErr();
                                            let a = l.getOFileForS3File(e);
                                            l.log(`xWrite ${a.path} ${r} ${s}`);
                                            try {
                                                let e = a.sah.write(o.heap8u().subarray(n, n + r), {
                                                    at: 4096 + Number(s)
                                                });
                                                return r === e ? 0 : t("Unknown write() failure.")
                                            } catch (e) {
                                                return l.storeErr(e, i.SQLITE_IOERR)
                                            }
                                        }
                                    }
                                }
                            });
                            let b = {
                                    xAccess: function(e, t, n, r) {
                                        let i = m.get(e);
                                        i.storeErr();
                                        try {
                                            let e = i.getPath(t);
                                            o.poke32(r, +!!i.hasFilename(e))
                                        } catch (e) {
                                            o.poke32(r, 0)
                                        }
                                        return 0
                                    },
                                    xCurrentTime: function(e, t) {
                                        return o.poke(t, 2440587.5 + new Date().getTime() / 864e5, "double"), 0
                                    },
                                    xCurrentTimeInt64: function(e, t) {
                                        return o.poke(t, 21086676e7 + new Date().getTime(), "i64"), 0
                                    },
                                    xDelete: function(e, t, n) {
                                        let r = m.get(e);
                                        r.log(`xDelete ${o.cstrToJs(t)}`), r.storeErr();
                                        try {
                                            return r.deletePath(r.getPath(t)), 0
                                        } catch (e) {
                                            return r.storeErr(e), i.SQLITE_IOERR_DELETE
                                        }
                                    },
                                    xFullPathname: function(e, t, n, r) {
                                        return o.cstrncpy(r, t, n) < n ? 0 : i.SQLITE_CANTOPEN
                                    },
                                    xGetLastError: function(e, t, n) {
                                        let r = m.get(e),
                                            s = r.popErr();
                                        if (r.log(`xGetLastError ${t} e =`, s), s) {
                                            let e = o.scopedAllocPush();
                                            try {
                                                let [e, r] = o.scopedAllocCString(s.message, !0);
                                                o.cstrncpy(n, e, t), r > t && o.poke8(n + t - 1, 0)
                                            } catch (e) {
                                                return i.SQLITE_NOMEM
                                            } finally {
                                                o.scopedAllocPop(e)
                                            }
                                        }
                                        return s ? s.sqlite3Rc || i.SQLITE_IOERR : 0
                                    },
                                    xOpen: function(e, n, r, s, l) {
                                        let a = m.get(e);
                                        try {
                                            a.log(`xOpen ${o.cstrToJs(n)} ${s}`);
                                            let e = n && o.peek8(n) ? a.getPath(n) : c(),
                                                u = a.getSAHForPath(e);
                                            !u && s & i.SQLITE_OPEN_CREATE && (a.getFileCount() < a.getCapacity() ? (u = a.nextAvailableSAH(), a.setAssociatedPath(u, e, s)) : t("SAH pool is full. Cannot create file", e)), u || t("file not found:", e);
                                            let _ = {
                                                path: e,
                                                flags: s,
                                                sah: u
                                            };
                                            a.mapS3FileToOFile(r, _), _.lockType = i.SQLITE_LOCK_NONE;
                                            let p = new i.sqlite3_file(r);
                                            return p.$pMethods = q.pointer, p.dispose(), o.poke32(l, s), 0
                                        } catch (e) {
                                            return a.storeErr(e), i.SQLITE_CANTOPEN
                                        }
                                    }
                                },
                                w = function(t) {
                                    e.capi.sqlite3_vfs_find(t) && n("VFS name is already registered:", t);
                                    let r = new i.sqlite3_vfs,
                                        s = i.sqlite3_vfs_find(null),
                                        l = s ? new i.sqlite3_vfs(s) : null;
                                    return r.$iVersion = 2, r.$szOsFile = i.sqlite3_file.structInfo.sizeof, r.$mxPathname = 512, r.addOnDispose(r.$zName = o.allocCString(t), () => h(r.pointer, 0)), l && (r.$xRandomness = l.$xRandomness, r.$xSleep = l.$xSleep, l.dispose()), r.$xRandomness || b.xRandomness || (b.xRandomness = function(e, t, n) {
                                        let r = o.heap8u(),
                                            i = 0;
                                        for (; i < t; ++i) r[n + i] = 255e3 * Math.random() & 255;
                                        return i
                                    }), r.$xSleep || b.xSleep || (b.xSleep = (e, t) => 0), e.vfs.installVfs({
                                        vfs: {
                                            struct: r,
                                            methods: b
                                        }
                                    }), r
                                };
                            class E {
                                vfsDir;#
                                e;#
                                t;#
                                n;#
                                r = new Map;#
                                i = new Map;#
                                s = new Set;#
                                o = new Map;#
                                l = new Uint8Array(516);#
                                a;#
                                c;#
                                u;
                                constructor(e = Object.create(null)) {
                                    this.#u = e.verbosity ? ? p.verbosity, this.vfsName = e.name || p.name, this.#c = w(this.vfsName), h(this.#c.pointer, this), this.vfsDir = e.directory || "." + this.vfsName, this.#a = new DataView(this.#l.buffer, this.#l.byteOffset), this.isReady = this.reset(!!(e.clearOnInit ? ? p.clearOnInit)).then(() => {
                                        if (this.$error) throw this.$error;
                                        return this.getCapacity() ? Promise.resolve(void 0) : this.addCapacity(e.initialCapacity || p.initialCapacity)
                                    })
                                }#
                                _(e, ...t) {
                                    this.#u > e && f[e](this.vfsName + ":", ...t)
                                }
                                log(...e) {
                                    this.#_(2, ...e)
                                }
                                warn(...e) {
                                    this.#_(1, ...e)
                                }
                                error(...e) {
                                    this.#_(0, ...e)
                                }
                                getVfs() {
                                    return this.#c
                                }
                                getCapacity() {
                                    return this.#r.size
                                }
                                getFileCount() {
                                    return this.#i.size
                                }
                                getFileNames() {
                                    let e = [];
                                    for (let t of this.#i.keys()) e.push(t);
                                    return e
                                }
                                async addCapacity(e) {
                                    for (let t = 0; t < e; ++t) {
                                        let e = c(),
                                            t = await this.#t.getFileHandle(e, {
                                                create: !0
                                            }),
                                            n = await t.createSyncAccessHandle();
                                        this.#r.set(n, e), this.setAssociatedPath(n, "", 0)
                                    }
                                    return this.getCapacity()
                                }
                                async reduceCapacity(e) {
                                    let t = 0;
                                    for (let n of Array.from(this.#s)) {
                                        if (t === e || this.getFileCount() === this.getCapacity()) break;
                                        let r = this.#r.get(n);
                                        n.close(), await this.#t.removeEntry(r), this.#r.delete(n), this.#s.delete(n), ++t
                                    }
                                    return t
                                }
                                releaseAccessHandles() {
                                    for (let e of this.#r.keys()) e.close();
                                    this.#r.clear(), this.#i.clear(), this.#s.clear()
                                }
                                async acquireAccessHandles(e) {
                                    let t = [];
                                    for await (let [e, n] of this.#t)
                                    "file" === n.kind && t.push([e, n]);
                                    return Promise.all(t.map(async ([t, n]) => {
                                        try {
                                            let r = await n.createSyncAccessHandle();
                                            if (this.#r.set(r, t), e) r.truncate(4096), this.setAssociatedPath(r, "", 0);
                                            else {
                                                let e = this.getAssociatedPath(r);
                                                e ? this.#i.set(e, r) : this.#s.add(r)
                                            }
                                        } catch (e) {
                                            throw this.storeErr(e), this.releaseAccessHandles(), e
                                        }
                                    }))
                                }
                                getAssociatedPath(e) {
                                    e.read(this.#l, {
                                        at: 0
                                    });
                                    let t = this.#a.getUint32(512);
                                    if (this.#l[0] && (t & i.SQLITE_OPEN_DELETEONCLOSE || (t & l) == 0)) return d(`Removing file with unexpected flags ${t.toString(16)}`, this.#l), this.setAssociatedPath(e, "", 0), "";
                                    let n = new Uint32Array(2);
                                    e.read(n, {
                                        at: 516
                                    });
                                    let r = this.computeDigest(this.#l);
                                    if (!n.every((e, t) => e === r[t])) return d("Disassociating file with bad digest."), this.setAssociatedPath(e, "", 0), ""; {
                                        let t = this.#l.findIndex(e => 0 === e);
                                        return 0 === t && e.truncate(4096), t ? u.decode(this.#l.subarray(0, t)) : ""
                                    }
                                }
                                setAssociatedPath(e, n, r) {
                                    let i = _.encodeInto(n, this.#l);
                                    512 <= i.written + 1 && t("Path too long:", n), this.#l.fill(0, i.written, 512), this.#a.setUint32(512, r);
                                    let s = this.computeDigest(this.#l);
                                    e.write(this.#l, {
                                        at: 0
                                    }), e.write(s, {
                                        at: 516
                                    }), e.flush(), n ? (this.#i.set(n, e), this.#s.delete(e)) : (e.truncate(4096), this.#s.add(e))
                                }
                                computeDigest(e) {
                                    let t = 0xdeadbeef,
                                        n = 0x41c6ce57;
                                    for (let r of e) t = 31 * t + 307 * r, n = 31 * n + 307 * r;
                                    return new Uint32Array([t >>> 0, n >>> 0])
                                }
                                async reset(e) {
                                    let t;
                                    await this.isReady;
                                    let n = await navigator.storage.getDirectory();
                                    for (let e of this.vfsDir.split("/")) e && (t = n, n = await n.getDirectoryHandle(e, {
                                        create: !0
                                    }));
                                    return this.#e = n, this.#n = t, this.#t = await this.#e.getDirectoryHandle(a, {
                                        create: !0
                                    }), this.releaseAccessHandles(), this.acquireAccessHandles(e)
                                }
                                getPath(e) {
                                    return o.isPtr(e) && (e = o.cstrToJs(e)), (e instanceof URL ? e : new URL(e, "file://localhost/")).pathname
                                }
                                deletePath(e) {
                                    let t = this.#i.get(e);
                                    return t && (this.#i.delete(e), this.setAssociatedPath(t, "", 0)), !!t
                                }
                                storeErr(e, t) {
                                    return e && (e.sqlite3Rc = t || i.SQLITE_IOERR, this.error(e)), this.$error = e, t
                                }
                                popErr() {
                                    let e = this.$error;
                                    return this.$error = void 0, e
                                }
                                nextAvailableSAH() {
                                    let [e] = this.#s.keys();
                                    return e
                                }
                                getOFileForS3File(e) {
                                    return this.#o.get(e)
                                }
                                mapS3FileToOFile(e, t) {
                                    t ? (this.#o.set(e, t), y(e, this)) : (this.#o.delete(e), y(e, !1))
                                }
                                hasFilename(e) {
                                    return this.#i.has(e)
                                }
                                getSAHForPath(e) {
                                    return this.#i.get(e)
                                }
                                async removeVfs() {
                                    if (!this.#c.pointer || !this.#t) return !1;
                                    i.sqlite3_vfs_unregister(this.#c.pointer), this.#c.dispose();
                                    try {
                                        this.releaseAccessHandles(), await this.#e.removeEntry(a, {
                                            recursive: !0
                                        }), this.#t = void 0, await this.#n.removeEntry(this.#e.name, {
                                            recursive: !0
                                        }), this.#e = this.#n = void 0
                                    } catch (t) {
                                        e.config.error(this.vfsName, "removeVfs() failed:", t)
                                    }
                                    return !0
                                }
                                exportFile(e) {
                                    let n = this.#i.get(e) || t("File not found:", e),
                                        r = n.getSize() - 4096,
                                        i = new Uint8Array(r > 0 ? r : 0);
                                    if (r > 0) {
                                        let e = n.read(i, {
                                            at: 4096
                                        });
                                        e != r && t("Expected to read " + r + " bytes but read " + e + ".")
                                    }
                                    return i
                                }
                                async importDbChunked(e, n) {
                                    let r = this.#i.get(e) || this.nextAvailableSAH() || t("No available handles to import to.");
                                    r.truncate(0);
                                    let o = 0,
                                        l, a = !1;
                                    try {
                                        for (; void 0 !== (l = await n());) l instanceof ArrayBuffer && (l = new Uint8Array(l)), 0 === o && l.byteLength >= 15 && (s.affirmDbHeader(l), a = !0), r.write(l, {
                                            at: 4096 + o
                                        }), o += l.byteLength;
                                        if ((o < 512 || 0 != o % 512) && t("Input size", o, "is not correct for an SQLite database."), !a) {
                                            let e = new Uint8Array(20);
                                            r.read(e, {
                                                at: 0
                                            }), s.affirmDbHeader(e)
                                        }
                                        r.write(new Uint8Array([1, 1]), {
                                            at: 4114
                                        })
                                    } catch (e) {
                                        throw this.setAssociatedPath(r, "", 0), e
                                    }
                                    return this.setAssociatedPath(r, e, i.SQLITE_OPEN_MAIN_DB), o
                                }
                                importDb(e, n) {
                                    if (n instanceof ArrayBuffer) n = new Uint8Array(n);
                                    else if (n instanceof Function) return this.importDbChunked(e, n);
                                    let r = this.#i.get(e) || this.nextAvailableSAH() || t("No available handles to import to."),
                                        s = n.byteLength;
                                    (s < 512 || s % 512 != 0) && t("Byte array size is invalid for an SQLite db.");
                                    let o = "SQLite format 3";
                                    for (let e = 0; e < o.length; ++e) o.charCodeAt(e) !== n[e] && t("Input does not contain an SQLite database header.");
                                    let l = r.write(n, {
                                        at: 4096
                                    });
                                    return l != s ? (this.setAssociatedPath(r, "", 0), t("Expected to write " + s + " bytes but wrote " + l + ".")) : (r.write(new Uint8Array([1, 1]), {
                                        at: 4114
                                    }), this.setAssociatedPath(r, e, i.SQLITE_OPEN_MAIN_DB)), l
                                }
                            }
                            class x {#
                                p;
                                constructor(e) {
                                    this.#p = e, this.vfsName = e.vfsName
                                }
                                async addCapacity(e) {
                                    return this.#p.addCapacity(e)
                                }
                                async reduceCapacity(e) {
                                    return this.#p.reduceCapacity(e)
                                }
                                getCapacity() {
                                    return this.#p.getCapacity(this.#p)
                                }
                                getFileCount() {
                                    return this.#p.getFileCount()
                                }
                                getFileNames() {
                                    return this.#p.getFileNames()
                                }
                                async reserveMinimumCapacity(e) {
                                    let t = this.#p.getCapacity();
                                    return t < e ? this.#p.addCapacity(e - t) : t
                                }
                                exportFile(e) {
                                    return this.#p.exportFile(e)
                                }
                                importDb(e, t) {
                                    return this.#p.importDb(e, t)
                                }
                                async wipeFiles() {
                                    return this.#p.reset(!0)
                                }
                                unlink(e) {
                                    return this.#p.deletePath(e)
                                }
                                async removeVfs() {
                                    return this.#p.removeVfs()
                                }
                            }
                            let S = async () => {
                                let e = await navigator.storage.getDirectory(),
                                    n = ".opfs-sahpool-sync-check-" + c(),
                                    r = await e.getFileHandle(n, {
                                        create: !0
                                    }),
                                    i = (await r.createSyncAccessHandle()).close();
                                return await i, await e.removeEntry(n), i ? .then && t("The local OPFS API is too old for opfs-sahpool:", "it has an async FileSystemSyncAccessHandle.close() method."), !0
                            };
                            e.installOpfsSAHPoolVfs = async function(t = Object.create(null)) {
                                let n = t.name || p.name;
                                return r[n] ? r[n] : globalThis.FileSystemHandle && globalThis.FileSystemDirectoryHandle && globalThis.FileSystemFileHandle && globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle && navigator ? .storage ? .getDirectory ? r[n] = S().then(async function() {
                                    if (t.$testThrowInInit) throw t.$testThrowInInit;
                                    let n = new E(t);
                                    return n.isReady.then(async () => {
                                        let t = new x(n);
                                        if (e.oo1) {
                                            let r = e.oo1,
                                                i = n.getVfs(),
                                                s = function(...e) {
                                                    let t = r.DB.dbCtorHelper.normalizeArgs(...e);
                                                    t.vfs = i.$zName, r.DB.dbCtorHelper.call(this, t)
                                                };
                                            s.prototype = Object.create(r.DB.prototype), t.OpfsSAHPoolDb = s, r.DB.dbCtorHelper.setVfsPostOpenSql(i.pointer, function(e, t) {
                                                t.capi.sqlite3_exec(e, ["pragma journal_mode=DELETE;", "pragma cache_size=-16384;"], 0, 0, 0)
                                            })
                                        }
                                        return n.log("VFS initialized."), t
                                    }).catch(async e => (await n.removeVfs().catch(() => {}), e))
                                }).catch(e => r[n] = Promise.reject(e)) : r[n] = Promise.reject(Error("Missing required OPFS APIs."))
                            }
                        }), void 0 !== e) {
                        let t, n = Object.assign(Object.create(null), {
                            exports: "u" < typeof wasmExports ? e.asm : wasmExports,
                            memory: e.wasmMemory
                        }, globalThis.sqlite3ApiConfig || {});
                        globalThis.sqlite3ApiConfig = n;
                        try {
                            t = globalThis.sqlite3ApiBootstrap()
                        } catch (e) {
                            throw console.error("sqlite3ApiBootstrap() error:", e), e
                        } finally {
                            delete globalThis.sqlite3ApiBootstrap, delete globalThis.sqlite3ApiConfig
                        }
                        e.sqlite3 = t
                    } else console.warn("This is not running in an Emscripten module context, so", "globalThis.sqlite3ApiBootstrap() is _not_ being called due to lack", "of config info for the WASM environment.", "It must be called manually.")
                }), b.ready
            });
            let s = i = function() {
                let e = i;
                if (!e) throw Error("Expecting globalThis.sqlite3InitModule to be defined by the Emscripten build.");
                let t = globalThis.sqlite3InitModuleState = Object.assign(Object.create(null), {
                    moduleScript: globalThis ? .document ? .currentScript,
                    isWorker: "u" > typeof WorkerGlobalScope,
                    location: globalThis.location,
                    urlParams: globalThis ? .location ? .href ? new URL(globalThis.location.href).searchParams : new URLSearchParams
                });
                if (t.debugModule = t.urlParams.has("sqlite3.debugModule") ? (...e) => console.warn("sqlite3.debugModule:", ...e) : () => {}, t.urlParams.has("sqlite3.dir")) t.sqlite3Dir = t.urlParams.get("sqlite3.dir") + "/";
                else if (t.moduleScript) {
                    let e = t.moduleScript.src.split("/");
                    e.pop(), t.sqlite3Dir = e.join("/") + "/"
                }
                if (globalThis.sqlite3InitModule = function n(...r) {
                        return e(...r).then(e => {
                            let r = e.sqlite3;
                            r.scriptInfo = t, n.__isUnderTest && (r.__isUnderTest = !0);
                            let i = r.asyncPostInit;
                            return delete r.asyncPostInit, i()
                        }).catch(e => {
                            throw console.error("Exception loading sqlite3 module:", e), e
                        })
                    }, globalThis.sqlite3InitModule.ready = e.ready, globalThis.sqlite3InitModuleState.moduleScript) {
                    let e = globalThis.sqlite3InitModuleState,
                        t = e.moduleScript.src.split("/");
                    t.pop(), e.scriptDir = t.join("/") + "/"
                }
                return t.debugModule("sqlite3InitModuleState =", t), globalThis.sqlite3InitModule
            }()
        },
        681335: (e, t, n) => {
            "use strict";
            n.d(t, {
                p: () => u
            });
            let r = Symbol("Comlink.proxy"),
                i = Symbol("Comlink.endpoint"),
                s = Symbol("Comlink.releaseProxy"),
                o = Symbol("Comlink.finalizer"),
                l = Symbol("Comlink.thrown"),
                a = e => "object" == typeof e && null !== e || "function" == typeof e,
                c = new Map([
                    ["proxy", {
                        canHandle: e => a(e) && e[r],
                        serialize(e) {
                            let {
                                port1: t,
                                port2: n
                            } = new MessageChannel;
                            return u(e, t), [n, [n]]
                        },
                        deserialize: e => {
                            var t;
                            let n;
                            return e.start(), t = e, n = new Map, t.addEventListener("message", function(e) {
                                    let {
                                        data: t
                                    } = e;
                                    if (!t || !t.id) return;
                                    let r = n.get(t.id);
                                    if (r) try {
                                        r(t)
                                    } finally {
                                        n.delete(t.id)
                                    }
                                }),
                                function e(t, n, r = [], o = function() {}) {
                                    let l, a = !1,
                                        c = new Proxy(o, {
                                            get(i, o) {
                                                if (p(a), o === s) return () => {
                                                    m && m.unregister(c), f(t), n.clear(), a = !0
                                                };
                                                if ("then" === o) {
                                                    if (0 === r.length) return {
                                                        then: () => c
                                                    };
                                                    let e = b(t, n, {
                                                        type: "GET",
                                                        path: r.map(e => e.toString())
                                                    }).then(q);
                                                    return e.then.bind(e)
                                                }
                                                return e(t, n, [...r, o])
                                            },
                                            set(e, i, s) {
                                                p(a);
                                                let [o, l] = y(s);
                                                return b(t, n, {
                                                    type: "SET",
                                                    path: [...r, i].map(e => e.toString()),
                                                    value: o
                                                }, l).then(q)
                                            },
                                            apply(s, o, l) {
                                                p(a);
                                                let c = r[r.length - 1];
                                                if (c === i) return b(t, n, {
                                                    type: "ENDPOINT"
                                                }).then(q);
                                                if ("bind" === c) return e(t, n, r.slice(0, -1));
                                                let [u, _] = h(l);
                                                return b(t, n, {
                                                    type: "APPLY",
                                                    path: r.map(e => e.toString()),
                                                    argumentList: u
                                                }, _).then(q)
                                            },
                                            construct(e, i) {
                                                p(a);
                                                let [s, o] = h(i);
                                                return b(t, n, {
                                                    type: "CONSTRUCT",
                                                    path: r.map(e => e.toString()),
                                                    argumentList: s
                                                }, o).then(q)
                                            }
                                        });
                                    return l = (d.get(t) || 0) + 1, d.set(t, l), m && m.register(c, t, c), c
                                }(t, n, [], void 0)
                        }
                    }],
                    ["throw", {
                        canHandle: e => a(e) && l in e,
                        serialize: ({
                            value: e
                        }) => [e instanceof Error ? {
                                isError: !0,
                                value: {
                                    message: e.message,
                                    name: e.name,
                                    stack: e.stack
                                }
                            } : {
                                isError: !1,
                                value: e
                            },
                            []
                        ],
                        deserialize(e) {
                            if (e.isError) throw Object.assign(Error(e.value.message), e.value);
                            throw e.value
                        }
                    }]
                ]);

            function u(e, t = globalThis, n = ["*"]) {
                t.addEventListener("message", function i(s) {
                    let a;
                    if (!s || !s.data) return;
                    if (! function(e, t) {
                            for (let n of e)
                                if (t === n || "*" === n || n instanceof RegExp && n.test(t)) return !0;
                            return !1
                        }(n, s.origin)) return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
                    let {
                        id: c,
                        type: p,
                        path: f
                    } = Object.assign({
                        path: []
                    }, s.data), d = (s.data.argumentList || []).map(q);
                    try {
                        var m, h, b;
                        let t = f.slice(0, -1).reduce((e, t) => e[t], e),
                            n = f.reduce((e, t) => e[t], e);
                        switch (p) {
                            case "GET":
                                a = n;
                                break;
                            case "SET":
                                t[f.slice(-1)[0]] = q(s.data.value), a = !0;
                                break;
                            case "APPLY":
                                a = n.apply(t, d);
                                break;
                            case "CONSTRUCT":
                                m = new n(...d), a = Object.assign(m, {
                                    [r]: !0
                                });
                                break;
                            case "ENDPOINT":
                                {
                                    let {
                                        port1: t,
                                        port2: n
                                    } = new MessageChannel;u(e, n),
                                    h = t,
                                    b = [t],
                                    g.set(h, b),
                                    a = h
                                }
                                break;
                            case "RELEASE":
                                a = void 0;
                                break;
                            default:
                                return
                        }
                    } catch (e) {
                        a = {
                            value: e,
                            [l]: 0
                        }
                    }
                    Promise.resolve(a).catch(e => ({
                        value: e,
                        [l]: 0
                    })).then(n => {
                        let [r, s] = y(n);
                        t.postMessage(Object.assign(Object.assign({}, r), {
                            id: c
                        }), s), "RELEASE" === p && (t.removeEventListener("message", i), _(t), o in e && "function" == typeof e[o] && e[o]())
                    }).catch(e => {
                        let [n, r] = y({
                            value: TypeError("Unserializable return value"),
                            [l]: 0
                        });
                        t.postMessage(Object.assign(Object.assign({}, n), {
                            id: c
                        }), r)
                    })
                }), t.start && t.start()
            }

            function _(e) {
                "MessagePort" === e.constructor.name && e.close()
            }

            function p(e) {
                if (e) throw Error("Proxy has been released and is not useable")
            }

            function f(e) {
                return b(e, new Map, {
                    type: "RELEASE"
                }).then(() => {
                    _(e)
                })
            }
            let d = new WeakMap,
                m = "FinalizationRegistry" in globalThis && new FinalizationRegistry(e => {
                    let t = (d.get(e) || 0) - 1;
                    d.set(e, t), 0 === t && f(e)
                });

            function h(e) {
                var t;
                let n = e.map(y);
                return [n.map(e => e[0]), (t = n.map(e => e[1]), Array.prototype.concat.apply([], t))]
            }
            let g = new WeakMap;

            function y(e) {
                for (let [t, n] of c)
                    if (n.canHandle(e)) {
                        let [r, i] = n.serialize(e);
                        return [{
                            type: "HANDLER",
                            name: t,
                            value: r
                        }, i]
                    }
                return [{
                    type: "RAW",
                    value: e
                }, g.get(e) || []]
            }

            function q(e) {
                switch (e.type) {
                    case "HANDLER":
                        return c.get(e.name).deserialize(e.value);
                    case "RAW":
                        return e.value
                }
            }

            function b(e, t, n, r) {
                return new Promise(i => {
                    let s = [, , , , ].fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
                    t.set(s, i), e.start && e.start(), e.postMessage(Object.assign({
                        id: s
                    }, n), r)
                })
            }
        },
        728432: (e, t, n) => {
            "use strict";
            e.exports = n.p + "fd5d027f538c8d07.wasm"
        },
        835970: (e, t, n) => {
            e.exports = function(e) {
                return (null == e ? 0 : e.length) ? n(983120)(e, 1) : []
            }
        },
        858156: (e, t, n) => {
            e.exports = function(e, t, r) {
                var i = null == e ? void 0 : n(47422)(e, t);
                return void 0 === i ? r : i
            }
        }
    }
]);