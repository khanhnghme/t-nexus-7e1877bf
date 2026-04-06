"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [12024], {
        33983: (e, t, r) => {
            r.d(t, {
                HS: () => l().HS,
                a9: () => i,
                nM: () => o
            }), r(898992), r(354520);
            var n = r(296540),
                l = () => r(266103);

            function i(e) {
                let {
                    markdown: t,
                    pageId: n,
                    spaceId: i,
                    idCreator: o,
                    actorPointer: a,
                    citationFormat: s,
                    omitBlockTypes: c = r(674230).W,
                    isUrlAllowed: u = () => !1
                } = e, {
                    blocks: d
                } = (0, r(599566).VT)(t, u, {
                    omitBlockTypes: c
                });
                return (0, l().Vz)({
                    blocks: d,
                    pageId: n,
                    spaceId: i,
                    idCreator: o,
                    actorPointer: a,
                    citationFormat: s
                })
            }

            function o(e) {
                let {
                    markdown: t,
                    spaceStore: i,
                    citationFormat: o,
                    citationContext: a,
                    threadStore: s,
                    isMarkdownVNextEnabled: c,
                    renderMode: u = "full",
                    isUrlAllowed: d
                } = e, h = (0, r(533992).v3)(), f = (0, r(345776).T)(), p = (0, r(83208).X)("ai_image_generation"), g = (0, r(682985).K8)(() => i.isAiImageGenerationEnabledOnSpace(), [i]), v = p && g, {
                    vNextParser: b
                } = (0, r(870950).I)({
                    isMarkdownVNextEnabled: c
                }), m = i.id, y = (0, r(682985).K8)(() => h.idCreator.getSpaceIdCreatorSync(m), [h.idCreator, m]), k = (0, n.useMemo)(() => new(r(870941)).A({
                    name: r(613805).i,
                    isTemporaryData: !0,
                    isSyntheticAssistantData: !0,
                    relatedThreadPointer: null == s ? void 0 : s.pointer
                }), [s]);
                return (0, n.useEffect)(() => () => {
                    k.removeCacheFallback(h.defaultRecordCache.inMemoryRecordCache)
                }, [h.defaultRecordCache.inMemoryRecordCache, k]), (0, n.useMemo)(() => {
                    if (!t || !f) return;
                    let e = {
                            table: r(832375).oo9,
                            id: f
                        },
                        n = y.idInSavedSpace(r(832375).evP),
                        i = v ? r(674230).W.filter(e => "image" !== e) : r(674230).W,
                        s = c && b ? (0, r(203489).t)({
                            blocks: b(t),
                            isUrlAllowed: d ? ? (() => !1)
                        }) : (0, r(599566).VT)(t, d ? ? (() => !1), {
                            omitBlockTypes: i,
                            normalizeFullMarkdown: "full" === u
                        }).blocks,
                        p = (0, l().Vz)({
                            blocks: s,
                            pageId: n,
                            spaceId: m,
                            idCreator: y,
                            actorPointer: e,
                            citationFormat: o
                        });
                    return k.addCacheFallback(h.defaultRecordCache.inMemoryRecordCache), (0, l().p4)({
                        environment: h,
                        userAction: `${r(613805).i}.markdownToBlocks`,
                        pageId: n,
                        spaceId: m,
                        blockOperations: p,
                        citationContext: a,
                        inMemoryRecordCache: k
                    })
                }, [t, h, f, y, m, o, a, k, v, c, u, b, d])
            }
        },
        58838: (e, t, r) => {
            r.r(t), r.d(t, {
                eyeSmallIcon: () => i,
                iconDefinition: () => l
            }), r(296540);
            var n = r(474848);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.7 3.26 14.6 9.48",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8 5.372a2.626 2.626 0 0 1 2.625 2.626l-.014.269A2.626 2.626 0 0 1 8 10.624l-.269-.014A2.626 2.626 0 0 1 5.39 8.267l-.014-.269A2.626 2.626 0 0 1 8 5.372m0 1.75a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75"
                        }), (0, n.jsx)("path", {
                            d: "M8 3.26c3.125 0 5.857 1.673 7.152 4.141l.065.144c.11.293.11.617 0 .91l-.065.145c-1.295 2.468-4.027 4.14-7.152 4.14-3.027 0-5.685-1.57-7.026-3.912L.848 8.6a1.29 1.29 0 0 1 0-1.199l.126-.228C2.314 4.83 4.972 3.26 8 3.26m0 1.252c-2.6 0-4.833 1.345-5.941 3.281l-.104.19a.04.04 0 0 0 0 .036l.104.189c1.108 1.935 3.34 3.281 5.941 3.281 2.684 0 4.976-1.434 6.045-3.47L14.05 8l-.005-.018c-1.069-2.036-3.36-3.47-6.045-3.47"
                        })]
                    })
                },
                i = (0, r(104509).wt)("eyeSmall", l, "small")
        },
        80362: (e, t, r) => {
            r.d(t, {
                E: () => l
            }), r(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3.125 4.25c0-.621.504-1.125 1.125-1.125h11.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H4.25A1.125 1.125 0 0 1 3.125 5.75zm1 3.875h11.75v7.625c0 .621-.504 1.125-1.125 1.125h-9.5a1.125 1.125 0 0 1-1.125-1.125zM8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                    })
                },
                l = (0, r(104509).wt)("archiveBoxFill", n, "fill")
        },
        203489: (e, t, r) => {
            function n(e) {
                return e.startsWith("attachment:") || e.startsWith("file://") || e.startsWith("data:")
            }
            r.d(t, {
                C: () => n,
                t: () => function e(t) {
                    let {
                        blocks: r,
                        isUrlAllowed: n
                    } = t, l = !1, i = [];
                    for (let t of r) {
                        let r = function t(r) {
                            let {
                                block: n,
                                isUrlAllowed: l
                            } = r;
                            switch (n.type) {
                                case "image":
                                case "pdf":
                                case "file":
                                case "audio":
                                case "video":
                                    {
                                        let e = n.source;
                                        if (void 0 !== e && "" !== e && !l(e)) return {
                                            block: {
                                                type: "text",
                                                text: [e]
                                            },
                                            changed: !0
                                        };
                                        return {
                                            block: n,
                                            changed: !1
                                        }
                                    }
                            }
                            let i = n,
                                o = !1;
                            if ("children" in n && void 0 !== n.children) {
                                let t = e({
                                    blocks: n.children,
                                    isUrlAllowed: l
                                });
                                t !== n.children && (i = Object.assign({}, i, {
                                    children: t
                                }), o = !0)
                            }
                            if ("transcription" === i.type) {
                                let e = void 0 !== i.summary ? t({
                                        block: i.summary,
                                        isUrlAllowed: l
                                    }) : void 0,
                                    r = void 0 !== i.notes ? t({
                                        block: i.notes,
                                        isUrlAllowed: l
                                    }) : void 0,
                                    n = void 0 !== i.transcript ? t({
                                        block: i.transcript,
                                        isUrlAllowed: l
                                    }) : void 0;
                                ((null == e ? void 0 : e.changed) === !0 || (null == r ? void 0 : r.changed) === !0 || (null == n ? void 0 : n.changed) === !0) && (i = { ...i,
                                    ...e ? {
                                        summary: e.block
                                    } : {},
                                    ...r ? {
                                        notes: r.block
                                    } : {},
                                    ...n ? {
                                        transcript: n.block
                                    } : {}
                                }, o = !0)
                            }
                            return {
                                block: i,
                                changed: o
                            }
                        }({
                            block: t,
                            isUrlAllowed: n
                        });
                        i.push(r.block), r.changed && (l = !0)
                    }
                    return l ? i : r
                }
            }), r(944114)
        },
        212024: (e, t, r) => {
            r.d(t, {
                h: () => B
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var n = r(296540),
                l = () => r(970831);
            r(944114), r(898992), r(354520);
            var i = () => r(832375);

            function o(e) {
                let t, r, n, l;
                if (!e) return 0;
                let i = e.split("\n"),
                    o = 0,
                    d = 0,
                    h = !1,
                    y = !1,
                    k = !1,
                    x = [],
                    S = [],
                    w = 0,
                    M = !0;
                for (let I = 0; I < i.length; I++) {
                    let j = i[I],
                        P = j.trim(),
                        B = o + j.length,
                        A = B < e.length,
                        T = g(j);
                    if (void 0 === t && !h && 0 === x.length) {
                        if (M) S.length = 0, S.push(T), w = T, M = !1;
                        else if (T > w) S.push(T), w = T;
                        else if (T < w) {
                            let e = b(S);
                            for (; void 0 !== e && e > T;) S.pop(), e = b(S);
                            (void 0 === e || e !== T) && S.push(T), w = T
                        }
                    }
                    let $ = a(P);
                    if (void 0 !== $) void 0 === t ? t = $ : $.marker === t.marker && $.length >= t.length && (t = void 0);
                    else if ("$$" === P) h = !h;
                    else {
                        var C, R;
                        if (void 0 === t && !h && !(!(C = P).startsWith("<") || C.startsWith("</") || C.endsWith("/>")) && c.test(C)) {
                            let e = v(P);
                            e && (R = e, !s.has(R.toLowerCase())) && (x.push(e), "table" === e && (k = !0))
                        } else if (void 0 === t && !h && u.test(P)) {
                            let e = v(P),
                                t = x.at(-1);
                            e && t === e && (x.pop(), "table" === e && (k = !1, n = B), 0 === x.length && (l = B))
                        }
                    }
                    let E = void 0 !== t,
                        F = I + 1 < i.length ? i[I + 1] : void 0,
                        D = null == F ? void 0 : F.trim(),
                        L = void 0 === F || E || h ? void 0 : g(F),
                        _ = !E && void 0 === a(P) && function(e) {
                            let t, r = 0;
                            for (; r < e.length;) {
                                let n = e[r];
                                if ("\\" === n) {
                                    r += 2;
                                    continue
                                }
                                if ("`" === n) {
                                    let n = r;
                                    for (; r < e.length && "`" === e[r];) r++;
                                    let l = r - n;
                                    void 0 === t ? t = l : l === t && (t = void 0)
                                } else r++
                            }
                            return void 0 !== t
                        }(j),
                        W = m(P),
                        N = function(e) {
                            if (m(e) || f.test(e) || p.test(e)) return !1;
                            let t = function(e) {
                                let t = 0,
                                    r = 0,
                                    n = !1,
                                    l = 0;
                                for (; r < e.length;) {
                                    let i = e[r];
                                    if ("`" === i) {
                                        let t = r;
                                        for (; r < e.length && "`" === e[r];) r++;
                                        let i = r - t;
                                        n ? i === l && (n = !1, l = 0) : (n = !0, l = i);
                                        continue
                                    }
                                    if ("\\" === i) {
                                        r += 2;
                                        continue
                                    }
                                    "|" === i && !n && t++, r++
                                }
                                return t
                            }(e);
                            return e.startsWith("|") ? t >= 2 : !(t < 2) && (!!e.endsWith("|") || t >= 3)
                        }(P),
                        V = !y && N && void 0 !== D && m(D);
                    E || h || 0 !== x.length || (V && (y = !0), y && (N || W ? r = B : (void 0 !== r && (d = r + 1), y = !1, r = void 0)));
                    let z = A && !E && !h && !y && !k && 0 === x.length && !_ && (S.length <= 1 || void 0 !== L && L < T) && (void 0 === L || L <= T);
                    void 0 !== n ? (d = n + 1, n = void 0) : void 0 !== l ? (d = l + 1, l = void 0) : z && (d = B + 1), o = B + 1
                }
                return d
            }

            function a(e) {
                if (e.length < 3) return;
                let t = e[0];
                if ("`" !== t && "~" !== t) return;
                let r = 0;
                for (let n = 0; n < e.length; n++)
                    if (e[n] === t) r++;
                    else break;
                if (r < 3) return;
                let n = e.slice(r);
                if (!("`" === t && n.includes("`"))) return {
                    marker: t,
                    length: r
                }
            }
            r(18107);
            let s = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]),
                c = /^<([A-Za-z][\w-]*)(\s+[^>]*)?>$/,
                u = /^<\/([A-Za-z][\w-]*)>$/,
                d = /^<\/?([A-Za-z][\w-]*)/,
                h = /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/,
                f = /^[-*+]\s/,
                p = /^\d+\.\s/;

            function g(e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    if (" " === n || "	" === n) t += 1;
                    else break
                }
                return t
            }

            function v(e) {
                let t = e.match(d);
                if (t) return t[1]
            }

            function b(e) {
                if (0 !== e.length) return e[e.length - 1]
            }

            function m(e) {
                return h.test(e)
            }

            function y(e) {
                if ("string" == typeof e) return e;
                switch (e.type) {
                    case "annotated":
                        return e.text;
                    case "equation":
                        return e.equation;
                    case "citation":
                        return e.href;
                    case "mention":
                        var t = e.mention;
                        switch (t.type) {
                            case "user":
                            case "agent":
                                return t.name ? ? t.url;
                            case "page":
                            case "database":
                            case "data-source":
                                return t.title ? ? t.url;
                            case "date":
                                return t.end ? `${t.start} - ${t.end}` : t.start;
                            case "custom_emoji":
                                return t.name
                        }
                        return
                }
            }

            function k(e) {
                return e && 0 !== e.length ? e.map(y).join("") : ""
            }

            function x(e, t) {
                return (null == e || !e.length) && (null == t || !t.length) || !!(null != e && e.length) && !!(null != t && t.length) && e.length === t.length && k(e) === k(t) && (0, r(381453).n4)(e, t)
            }

            function S(e, t, n) {
                let l = Math.min(e.length, t.length, n ? ? 1 / 0);
                for (let n = 0; n < l; n++)
                    if (! function(e, t) {
                            if (e.type !== t.type) return !1;
                            if ("divider" === e.type || "table_of_contents" === e.type) return !0;
                            if ("table" === e.type && "table" === t.type && (e.rows.length !== t.rows.length || e.headerRow !== t.headerRow || e.headerColumn !== t.headerColumn) || "table_row" === e.type && "table_row" === t.type && e.cells.length !== t.cells.length) return !1;
                            if ("code" === e.type && "code" === t.type) return e.language === t.language && !!x(e.text, t.text);
                            if ("to_do" === e.type && "to_do" === t.type && e.checked !== t.checked || "text" in e && "text" in t && !x(e.text, t.text)) return !1;
                            if ("children" in e && "children" in t) {
                                var n, l;
                                if (((null == (n = e.children) ? void 0 : n.length) ? ? 0) !== ((null == (l = t.children) ? void 0 : l.length) ? ? 0)) return !1
                            }
                            return (!("color" in e) || !("color" in t) || e.color === t.color) && (0, r(381453).n4)(e, t)
                        }(e[n], t[n])) return n;
                return l
            }
            r(581454);
            let w = {
                lastMarkdown: void 0,
                stablePrefixMarkdown: "",
                stablePrefixLength: 0,
                stableBlocks: [],
                lastRenderedBlocks: [],
                unchangedBlockCount: 0,
                version: 0
            };
            class M {
                parseBlocksFn;
                state;
                debug;
                constructor(e) {
                    this.parseBlocksFn = e.parseBlocks, this.debug = e.debug ? ? !1, this.state = { ...w
                    }
                }
                update(e) {
                    let t, n, l, i = (t = e.replace(/\r\n?/g, "\n"), n = (0, r(994835)._J)(t), (0, r(599566).MK)(n)),
                        a = this.state.lastMarkdown;
                    if (void 0 !== a && i.length < a.length) return {
                        blocks: this.state.stableBlocks,
                        isFullReparse: !1,
                        stablePrefixLength: this.state.stablePrefixLength,
                        version: this.state.version
                    };
                    if (i === a) return {
                        blocks: this.state.lastRenderedBlocks,
                        isFullReparse: !1,
                        stablePrefixLength: this.state.stablePrefixLength,
                        version: this.state.version
                    };
                    if (!(void 0 !== a && i.startsWith(a))) return void 0 === a ? this.fullReparse(i, "notAppendOnly") : this.fullReparse(i, "notAppendOnly", this.maybeCreateMismatchDebugData(a, i));
                    let s = o(i);
                    if (s < this.state.stablePrefixLength) return this.fullReparse(i, "stablePrefixShrank", this.maybeCreateMismatchDebugData(this.state.stablePrefixMarkdown, i.slice(0, s)));
                    let c = i.slice(0, s);
                    if (this.state.stablePrefixLength > 0 && !c.startsWith(this.state.stablePrefixMarkdown)) return this.fullReparse(i, "stablePrefixMismatch", this.maybeCreateMismatchDebugData(this.state.stablePrefixMarkdown, c));
                    if (s > this.state.stablePrefixLength) {
                        let e = c.slice(this.state.stablePrefixLength),
                            t = e ? this.parseBlocks(e) : [];
                        l = this.state.stableBlocks.concat(t)
                    } else l = this.state.stableBlocks;
                    let u = i.slice(s),
                        d = u ? this.parseBlocks(u) : [],
                        h = l.concat(d),
                        f = S(h, this.state.lastRenderedBlocks, l.length),
                        p = this.state.version + 1;
                    return this.state = {
                        lastMarkdown: i,
                        stablePrefixMarkdown: c,
                        stablePrefixLength: s,
                        stableBlocks: l,
                        lastRenderedBlocks: h,
                        unchangedBlockCount: f,
                        version: p
                    }, {
                        blocks: h,
                        isFullReparse: !1,
                        stablePrefixLength: s,
                        version: p
                    }
                }
                reset() {
                    this.state = { ...w,
                        version: this.state.version
                    }
                }
                maybeCreateMismatchDebugData(e, t) {
                    if (!this.debug) return;
                    let r = function(e, t) {
                        let r = Math.min(e.length, t.length);
                        for (let n = 0; n < r; n++)
                            if (e[n] !== t[n]) return n;
                        return r
                    }(e, t);
                    return {
                        previousStablePrefixLength: e.length,
                        nextStablePrefixLength: t.length,
                        previousStablePrefixSample: C(e),
                        nextStablePrefixSample: C(t),
                        firstMismatchIndex: r,
                        previousMismatchContext: R(e, r),
                        nextMismatchContext: R(t, r)
                    }
                }
                getStableBlocks() {
                    return this.state.stableBlocks.slice(0, this.state.unchangedBlockCount)
                }
                fullReparse(e, t, r) {
                    let n = this.parseBlocks(e),
                        l = o(e),
                        i = e.slice(0, l),
                        a = i ? this.parseBlocks(i) : [],
                        s = S(n, this.state.lastRenderedBlocks, a.length),
                        c = this.state.version + 1;
                    return this.state = {
                        lastMarkdown: e,
                        stablePrefixMarkdown: i,
                        stablePrefixLength: l,
                        stableBlocks: a,
                        lastRenderedBlocks: n,
                        unchangedBlockCount: s,
                        version: c
                    }, {
                        blocks: n,
                        isFullReparse: !0,
                        stablePrefixLength: l,
                        version: c,
                        fullReparseReason: t,
                        fullReparseDebugDetails: r
                    }
                }
                parseBlocks(e) {
                    return this.parseBlocksFn(e)
                }
            }

            function C(e) {
                if (e.length <= 200) return e;
                let t = e.slice(0, 100),
                    r = e.slice(e.length - 100);
                return `${t}
...
${r}`
            }

            function R(e, t) {
                let r = Math.max(0, t - 80),
                    n = Math.min(e.length, t + 80);
                return e.slice(r, n)
            }
            r(266103).Vz;
            var I = r(474848);

            function j(e) {
                let {
                    markdown: t,
                    spaceStore: o,
                    citationContext: a,
                    threadStore: s,
                    isStreaming: c,
                    isMarkdownVNextEnabled: u,
                    isUrlAllowed: d
                } = e, h = function(e) {
                    var t;
                    let o, a, s, {
                            markdown: c,
                            spaceStore: u,
                            citationFormat: d,
                            citationContext: h,
                            threadStore: f,
                            isMarkdownVNextEnabled: p,
                            renderMode: g = "incremental",
                            isUrlAllowed: v
                        } = e,
                        b = (0, r(533992).v3)(),
                        m = (0, r(345776).T)(),
                        y = (0, r(83208).X)("ai_image_generation"),
                        k = (0, r(682985).K8)(() => u.isAiImageGenerationEnabledOnSpace(), [u]),
                        x = y && k,
                        S = u.id,
                        w = (0, r(682985).K8)(() => b.idCreator.getSpaceIdCreatorSync(u.id), [b.idCreator, u.id]),
                        C = (0, n.useRef)(void 0),
                        R = (0, n.useRef)(0),
                        I = (0, n.useRef)(0),
                        j = (0, n.useRef)(0),
                        P = (0, n.useRef)(void 0),
                        B = (0, n.useRef)(w.idInSavedSpace(i().evP)),
                        A = (0, n.useRef)(void 0),
                        [T, $] = (0, n.useState)(void 0),
                        E = "incremental" === g,
                        F = (0, n.useMemo)(() => x ? r(674230).W.filter(e => "image" !== e) : r(674230).W, [x]),
                        D = (0, n.useMemo)(() => new(r(870941)).A({
                            name: r(613805).i,
                            isTemporaryData: !0,
                            isSyntheticAssistantData: !0,
                            relatedThreadPointer: null == f ? void 0 : f.pointer
                        }), [f]),
                        L = function(e) {
                            let {
                                markdown: t,
                                isMarkdownVNextEnabled: l,
                                renderMode: i = "incremental",
                                omitBlockTypes: o,
                                debug: a = !1,
                                isUrlAllowed: s = () => !1
                            } = e, {
                                vNextParser: c
                            } = (0, r(870950).I)({
                                isMarkdownVNextEnabled: l
                            }), u = (0, n.useCallback)(e => l && void 0 !== c ? (0, r(203489).t)({
                                blocks: c(e),
                                isUrlAllowed: s
                            }) : (0, r(599566).VT)(e, s, {
                                omitBlockTypes: o,
                                normalizePartialMarkdown: "incremental" === i,
                                normalizeFullMarkdown: "full" === i
                            }).blocks, [l, o, i, c, s]), d = (0, n.useMemo)(() => new M({
                                parseBlocks: u,
                                debug: a
                            }), [u, a]), h = (0, n.useRef)(0), f = (0, n.useRef)("");
                            return (0, n.useMemo)(() => {
                                if (!t || 0 === t.length) return d.reset(), f.current.length > 0 && h.current++, f.current = "", {
                                    blocks: [],
                                    stableBlockCount: 0,
                                    isFullReparse: !0,
                                    version: h.current,
                                    debug: {
                                        reason: "emptyMarkdown"
                                    }
                                };
                                if ("full" === i) {
                                    let e = u(t);
                                    return t !== f.current && h.current++, f.current = t, {
                                        blocks: e,
                                        stableBlockCount: e.length,
                                        isFullReparse: !0,
                                        version: h.current,
                                        debug: {
                                            reason: "fullRenderMode"
                                        }
                                    }
                                }
                                f.current = t;
                                let e = d.update(t);
                                return {
                                    blocks: e.blocks,
                                    stableBlockCount: d.getStableBlocks().length,
                                    isFullReparse: e.isFullReparse,
                                    version: e.version,
                                    debug: a && e.fullReparseReason ? {
                                        reason: e.fullReparseReason,
                                        details: e.fullReparseDebugDetails
                                    } : void 0
                                }
                            }, [t, u, i, d, a])
                        }({
                            markdown: c,
                            isMarkdownVNextEnabled: p,
                            renderMode: g,
                            omitBlockTypes: F,
                            debug: !1,
                            isUrlAllowed: v
                        }),
                        _ = (0, n.useCallback)(e => {
                            if (!E || e.isFullReparse || void 0 === P.current || !m || e.stableBlockCount > j.current) return;
                            let t = P.current,
                                n = A.current ? ? t.getContentStore().getValue() ? ? [],
                                o = function(e) {
                                    let {
                                        renderResult: t,
                                        listStore: n,
                                        existingBlockIds: o
                                    } = e, a = n.getModel();
                                    if (!a || t.stableBlockCount > o.length) return;
                                    let s = t.blocks.slice(t.stableBlockCount),
                                        c = r(412951).RecordMap.create();
                                    if (c.addModel(a), 0 === o.length) return {
                                        recordMap: c,
                                        updates: [{
                                            action: "insert",
                                            blocks: s
                                        }]
                                    };
                                    let u = [],
                                        d = Math.min(o.length - t.stableBlockCount, s.length),
                                        h = n.getContentStore();
                                    for (let e = 0; e < d; e++) {
                                        var f;
                                        let r = o[t.stableBlockCount + e];
                                        if (!r) continue;
                                        let n = l().B.createChildStore(h, {
                                                table: i().evP,
                                                id: r
                                            }),
                                            a = n.getModel();
                                        if (!a) return;
                                        let d = s[e],
                                            p = (null == (f = n.getContentStore().getValue()) ? void 0 : f.length) ? ? 0,
                                            g = function(e) {
                                                if ("table" === e.type && "rows" in e && e.rows) return e.rows;
                                                if ("transcription" === e.type) {
                                                    let t = [];
                                                    return e.summary && t.push(e.summary), e.notes && t.push(e.notes), e.transcript && t.push(e.transcript), t
                                                }
                                                return "children" in e && e.children ? e.children : []
                                            }(d).length,
                                            v = p > 0 || g > 0;
                                        c.addModel(a), v ? u.push({
                                            action: "replace",
                                            blockId: r,
                                            blocks: [d]
                                        }) : u.push({
                                            action: "replace-block",
                                            blockId: r,
                                            block: d
                                        })
                                    }
                                    if (s.length > d) {
                                        let e = o[o.length - 1] ? ? void 0;
                                        if (!e) return;
                                        let t = l().B.createChildStore(h, {
                                            table: i().evP,
                                            id: e
                                        }).getModel();
                                        if (!t) return;
                                        c.addModel(t), u.push({
                                            action: "insert",
                                            afterBlockId: e,
                                            blocks: s.slice(d)
                                        })
                                    }
                                    return {
                                        recordMap: c,
                                        updates: u
                                    }
                                }({
                                    renderResult: e,
                                    listStore: t,
                                    existingBlockIds: n
                                });
                            if (!o) return;
                            let a = (0, r(367600).ie)({
                                pageId: B.current,
                                recordMap: o.recordMap,
                                updates: o.updates,
                                spaceId: S,
                                legacyNonCrdt: !0,
                                idCreator: w,
                                actorPointer: {
                                    table: i().oo9,
                                    id: m
                                },
                                uriContext: {
                                    baseUrl: r(986939).A.domainBaseUrl,
                                    publicDomainName: r(986939).A.publicDomainName
                                },
                                agentBlocksOnPage: [],
                                options: {
                                    citationFormat: d
                                },
                                parseAgentUrlFn: r(140030).X1,
                                suppressErrors: !0
                            });
                            return 0 === a.length ? t : function(e) {
                                let {
                                    environment: t,
                                    listStore: n,
                                    blockOperations: l,
                                    citationContext: i,
                                    inMemoryRecordCache: o
                                } = e;
                                return r(363256).e.withListenerIgnored(() => (0, r(377796).createAndCommit)({
                                    userAction: `${r(613805).i}.markdownToBlocks`,
                                    environment: t,
                                    cellTarget: {
                                        spaceWithId: n.getSpaceId()
                                    },
                                    canUndo: !1,
                                    perform: e => ((0, r(266103).HS)({
                                        environment: t,
                                        transaction: e,
                                        rootStore: n,
                                        blockOperations: l,
                                        citationContext: i,
                                        inMemoryRecordCache: o,
                                        useSafeBlockOperations: !0
                                    }), n)
                                }).performResult)
                            }({
                                environment: b,
                                listStore: t,
                                blockOperations: a,
                                citationContext: h,
                                inMemoryRecordCache: D
                            })
                        }, [d, m, w, h, b, D, E, S]),
                        W = (0, n.useCallback)(e => {
                            if (!m) return;
                            let t = (0, r(266103).Vz)({
                                blocks: e,
                                pageId: B.current,
                                spaceId: S,
                                idCreator: w,
                                actorPointer: {
                                    table: i().oo9,
                                    id: m
                                },
                                citationFormat: d
                            });
                            return (0, r(266103).p4)({
                                environment: b,
                                userAction: `${r(613805).i}.markdownToBlocks`,
                                pageId: B.current,
                                spaceId: S,
                                blockOperations: t,
                                citationContext: h,
                                inMemoryRecordCache: D
                            })
                        }, [h, d, m, b, w, S, D]),
                        N = (0, n.useCallback)(e => {
                            var t;
                            let {
                                blocks: r
                            } = e;
                            if (0 === r.length) return;
                            let n = null == (t = P.current) ? void 0 : t.id,
                                l = _(e);
                            if (l || (l = W(r)), !l) {
                                P.current = void 0, A.current = void 0, j.current = 0, $(void 0);
                                return
                            }
                            let i = l.getContentStore().getValue() ? ? [];
                            return A.current = i, j.current = i.length, P.current = l, l.id !== n && $(l), l
                        }, [W, _]),
                        V = (t = () => {
                            let e = C.current;
                            if (!e || 0 === e.blocks.length || e.version <= R.current) return;
                            let t = performance.now();
                            N(e);
                            let n = performance.now(),
                                l = n - t,
                                i = I.current > 0 ? n - I.current : 0;
                            I.current = n, (l > 16 || i > 100) && e.debug && (0, r(864053).NK)([`[MARKDOWN RENDER COMMIT] Commit: ${Math.round(l)}ms, +${Math.round(i)}ms (Full Reparse: ${e.isFullReparse})`]), R.current = e.version
                        }, o = (0, n.useRef)(!1), a = (0, n.useRef)(void 0), s = (0, n.useRef)(t), (0, n.useEffect)(() => {
                            s.current = t
                        }), (0, n.useCallback)((...e) => {
                            a.current = e, o.current || (o.current = !0, queueMicrotask(() => {
                                o.current = !1, void 0 !== a.current && s.current(...a.current)
                            }))
                        }, []));
                    return (0, n.useEffect)(() => {
                        C.current = L, L.version > R.current && (L.isFullReparse && L.debug && (0, r(864053).NK)(["[MARKDOWN RENDER COMMIT] Reparse", L.debug]), V())
                    }, [L, V]), (0, n.useEffect)(() => (D.addCacheFallback(b.defaultRecordCache.inMemoryRecordCache), () => {
                        D.removeCacheFallback(b.defaultRecordCache.inMemoryRecordCache)
                    }), [b.defaultRecordCache.inMemoryRecordCache, D]), T
                }({
                    markdown: t,
                    spaceStore: o,
                    citationFormat: "citation",
                    citationContext: a,
                    threadStore: s,
                    isMarkdownVNextEnabled: u,
                    renderMode: c ? "incremental" : "full",
                    isUrlAllowed: d
                });
                return h ? (0, I.jsx)(T, { ...e,
                    temporaryBlockStore: h
                }) : null
            }

            function P(e) {
                let {
                    markdown: t,
                    spaceStore: n,
                    citationContext: l,
                    threadStore: i,
                    isUrlAllowed: o,
                    isMarkdownVNextEnabled: a
                } = e, s = (0, r(33983).nM)({
                    markdown: t,
                    spaceStore: n,
                    citationFormat: "citation",
                    citationContext: l,
                    threadStore: i,
                    isMarkdownVNextEnabled: a,
                    isUrlAllowed: o
                });
                return s ? (0, I.jsx)(T, { ...e,
                    temporaryBlockStore: s
                }) : null
            }

            function B(e) {
                var t;
                let {
                    isUrlAllowed: l
                } = e, i = (0, r(972740).L)(), {
                    threadStore: o
                } = e, a = (0, r(682985).K8)(() => {
                    let e = null == o ? void 0 : o.getTranscript();
                    if (!e) return !1;
                    let t = e ? (0, r(706968).TU)({
                        transcript: e
                    }) : void 0;
                    return (null == t ? void 0 : t.type) === "workflow" && !0 === t.enableMarkdownVNext
                }, [o]), s = (0, n.useCallback)(e => l ? l(e) : (0, r(203489).C)(e), [l]);
                if (!i) return null;
                let c = !!(null == (t = e.aiChatFeatureController) ? void 0 : t.shouldUseIncrementalMarkdownRendering);
                return (0, I.jsx)(r(337336).K, {
                    from: "NotionFlavoredMarkdownChatRenderer",
                    fallback: ({
                        error: e,
                        errorId: t
                    }) => (0, I.jsx)(r(789682).LargeSurfaceRenderError, {
                        error: e,
                        errorId: t
                    }),
                    children: c ? (0, I.jsx)(j, { ...e,
                        spaceStore: i,
                        threadStore: o,
                        isMarkdownVNextEnabled: a,
                        isUrlAllowed: s
                    }) : (0, I.jsx)(P, { ...e,
                        spaceStore: i,
                        threadStore: o,
                        isMarkdownVNextEnabled: a,
                        isUrlAllowed: s
                    })
                })
            }
            let A = {
                activeEditReferenceHighlight: {
                    background: r(632079).Tj.blue.background.secondaryTranslucent
                },
                icon: {
                    background: r(632079).Tj.blue.background.tertiaryTranslucent
                }
            };

            function T(e) {
                let {
                    spaceStore: t,
                    citationContext: i,
                    aiChatFeatureController: o,
                    stepId: a,
                    editReferenceMap: s,
                    threadStore: c,
                    clientStore: u,
                    temporaryBlockStore: d,
                    feedbackComponentIndex: h
                } = e, f = (0, r(386485).be)({
                    citationContext: i
                }), p = (0, n.useRef)(null), g = (0, r(682985).uB)(void 0, r(931030).D);
                (0, r(656484).c2)({
                    containerRef: p,
                    citationHoverStore: g,
                    parentStore: t,
                    evaluatorState: void 0
                });
                let {
                    bodyStyleKey: v
                } = (0, r(765846).yq)(), b = (0, r(765846).Cd)(v), m = (0, r(682985).K8)(() => null == d ? void 0 : d.getContentStore(), [d]), y = (0, r(682985).K8)(() => r(296738).lz.getSource(), []), k = (null == y ? void 0 : y.type) === "edit-reference" ? y.sourceId : void 0, x = (0, n.useMemo)(() => k ? (0, I.jsx)("style", {
                    children: `
			/* Highlight the active edit reference annotation */
			[data-active-edit-reference-id="${k}"] .notion-edit-reference-annotation[data-edit-reference-id="${k}"] {
				background: ${A.activeEditReferenceHighlight.background};
				box-shadow: 0 0 0 4px ${A.activeEditReferenceHighlight.background};
			}

			[data-active-edit-reference-id="${k}"] .notion-edit-reference-annotation[data-edit-reference-id="${k}"] .edit-reference-group__icon {
				background: ${A.icon.background} !important;
			}
		`
                }) : null, [k]), S = (null == o ? void 0 : o.supportsMinimalTranscript()) ? ? !1, w = (0, r(682985).K8)(() => {
                    if (!S || !m) return new Set;
                    let e = new Set;
                    for (let r of m.getValue() ? ? []) "edit_reference" === l().B.createChildStore(m, {
                        table: "block",
                        id: r,
                        spaceId: t.id
                    }).getType() && e.add(r);
                    return e
                }, [S, m, t.id]), M = (0, n.useCallback)((e, t, r) => {
                    if (w.has(e)) return null
                }, [w]);
                return m ? (0, I.jsxs)(I.Fragment, {
                    children: [x, (0, I.jsx)("div", {
                        "data-active-edit-reference-id": k || "",
                        children: (0, I.jsx)(r(744628).c, {
                            displayName: "AIChatTranscript.MarkdownChatStep",
                            disabled: !0,
                            ref: p,
                            style: b,
                            children: (0, I.jsx)(r(352863).N, {
                                threadStore: c,
                                clientStore: u,
                                stepId: a,
                                editReferenceMap: s,
                                feedbackComponentIndex: h,
                                children: (0, I.jsx)(r(301124).A, {
                                    store: m,
                                    disabled: !0,
                                    disableCommentMenu: !0,
                                    disableHoverMenu: !0,
                                    disableDrag: !1,
                                    overrideCanDrag: !0,
                                    overrideHeaderFontSizes: $,
                                    renderItem: S ? M : void 0,
                                    renderItemFallbackToDefault: S
                                })
                            })
                        })
                    }), (0, I.jsx)(r(417115).cE, {
                        containerRef: p,
                        hoverStore: g,
                        parentStore: m,
                        getPayloadDataForHref: f,
                        useCompactWebPreview: !0,
                        isSearchChat: (null == o ? void 0 : o.chonkyStyles) ? ? !0
                    })]
                }) : null
            }
            let $ = {
                header: 1.375,
                subHeader: 1.25,
                subSubHeader: 1.125,
                header4: 1.0625
            }
        },
        218993: (e, t, r) => {
            r.d(t, {
                $x: () => a,
                FD: () => i,
                g$: () => s,
                hL: () => o
            }), r(296540);
            var n = r(474848);
            let l = {
                minWidth: 0
            };

            function i(e) {
                let {
                    caption: t
                } = e;
                return t ? (0, n.jsx)(r(111010).D, {
                    styleKey: "captionRegular",
                    colorVariant: "tertiary",
                    style: l,
                    lineClamp: 1,
                    children: t
                }) : null
            }

            function o(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)(r(111010).D, {
                    styleKey: "bodyRegular",
                    colorVariant: "primary",
                    lineClamp: 1,
                    children: t
                })
            }

            function a(e) {
                let {
                    iconGroup: t,
                    iconSize: l
                } = e;
                return (0, n.jsx)(r(708966).Q, {
                    iconGroup: t,
                    style: {
                        width: r(104509).Ev[l],
                        height: r(104509).Ev[l]
                    },
                    variantName: "default"
                })
            }

            function s() {
                return {
                    textWrapperStyle: {
                        minWidth: 160
                    },
                    style: {
                        borderBottom: "none",
                        borderColor: "transparent",
                        marginTop: 0,
                        marginBottom: 0
                    }
                }
            }
        },
        266103: (e, t, r) => {
            r.d(t, {
                HS: () => c,
                Vz: () => s,
                p4: () => u
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454);
            var n = () => r(517013),
                l = () => r(488307),
                i = () => r(832375),
                o = () => r(421439),
                a = () => r(857796);

            function s(e) {
                let {
                    blocks: t,
                    pageId: n,
                    spaceId: l,
                    idCreator: i,
                    actorPointer: o,
                    citationFormat: a
                } = e;
                return (0, r(367600).ie)({
                    pageId: n,
                    recordMap: r(412951).RecordMap.create(),
                    updates: [{
                        action: "insert",
                        blocks: t
                    }],
                    spaceId: l,
                    legacyNonCrdt: !0,
                    idCreator: i,
                    actorPointer: o,
                    uriContext: {
                        baseUrl: r(986939).A.domainBaseUrl,
                        publicDomainName: r(986939).A.publicDomainName
                    },
                    agentBlocksOnPage: [],
                    options: {
                        citationFormat: a
                    },
                    parseAgentUrlFn: r(140030).X1,
                    suppressErrors: !0
                })
            }

            function c(e) {
                let {
                    environment: t,
                    transaction: s,
                    rootStore: c,
                    blockOperations: u,
                    citationContext: d,
                    inMemoryRecordCache: h,
                    useSafeBlockOperations: f = !1
                } = e, p = c.getContentStore(), g = new Set(p.getValue() ? ? []);
                for (let e of u) {
                    if (f && e.pointer.table === i().evP) {
                        (0, a().I)({
                            environment: t,
                            operation: e,
                            transaction: s,
                            inMemoryRecordCache: h
                        });
                        continue
                    }((0, l().$Y)(e) || (0, l().mP)(e)) && (0, o().y4)({
                        store: (0, n().v3)(p, e.pointer),
                        operation: e,
                        transaction: s
                    })
                }
                let v = (p.getValue() ? ? []).filter(e => !g.has(e)).map(e => r(970831).B.createChildStore(p, {
                    table: i().evP,
                    id: e
                }));
                return v.length > 0 && ((0, r(9774).postProcessAICreatedStores)(t, v), (0, r(665084).v4)({
                    stores: v,
                    environment: t,
                    transaction: s,
                    citationContext: d
                })), v
            }

            function u(e) {
                let {
                    environment: t,
                    userAction: n,
                    pageId: l,
                    spaceId: i,
                    blockOperations: o,
                    citationContext: a,
                    inMemoryRecordCache: s
                } = e;
                return r(363256).e.withListenerIgnored(() => (0, r(377796).createAndCommit)({
                    userAction: n,
                    environment: t,
                    cellTarget: {
                        spaceWithId: i
                    },
                    canUndo: !1,
                    perform: e => {
                        let n = r(124937).Wv({
                            environment: t,
                            type: "page",
                            id: l,
                            inMemoryRecordCache: s,
                            transaction: e,
                            spaceId: i,
                            format: {
                                page_small_text: !0
                            }
                        });
                        return c({
                            environment: t,
                            transaction: e,
                            rootStore: n,
                            blockOperations: o,
                            citationContext: a
                        }), n
                    }
                }).performResult)
            }
        },
        352863: (e, t, r) => {
            r.d(t, {
                A: () => a,
                N: () => o
            });
            var n = r(296540),
                l = r(474848);
            let i = (0, n.createContext)({
                threadStore: void 0,
                clientStore: void 0,
                stepId: void 0,
                editReferenceMap: void 0,
                feedbackComponentIndex: void 0
            });

            function o(e) {
                let {
                    threadStore: t,
                    clientStore: r,
                    stepId: o,
                    editReferenceMap: a,
                    feedbackComponentIndex: s,
                    children: c
                } = e, u = (0, n.useMemo)(() => ({
                    threadStore: t,
                    clientStore: r,
                    stepId: o,
                    editReferenceMap: a,
                    feedbackComponentIndex: s
                }), [t, r, o, a, s]);
                return (0, l.jsx)(i.Provider, {
                    value: u,
                    children: c
                })
            }

            function a() {
                return (0, n.useContext)(i)
            }
            i.displayName = "AgentChatStepContext"
        },
        386485: (e, t, r) => {
            r.d(t, {
                oQ: () => g,
                SP: () => p,
                $b: () => m,
                dM: () => v,
                eL: () => b,
                be: () => y
            }), r(944114), r(898992), r(581454), r(737550);
            var n = r(296540);
            let l = (0, r(104509).xh)("link", {
                default: {
                    loader: () => r.e(80401).then(r.bind(r, 588739))
                },
                small: {
                    loader: () => r.e(80401).then(r.bind(r, 748869))
                },
                fill: {
                    loader: () => r.e(80401).then(r.bind(r, 121903))
                },
                fillSmall: {
                    loader: () => r.e(80401).then(r.bind(r, 566278))
                }
            }, ["hyperlink", "connect", "URL", "join", "network"]);
            var i = r(474848);
            let o = {
                position: "relative",
                minWidth: 0,
                flexShrink: 0
            };

            function a(e) {
                var t, n;
                let {
                    result: a,
                    href: s,
                    hoverStore: c,
                    showUsedByLLM: u,
                    ...d
                } = e, h = v("helpdocs" === (t = a.searchSourceType) || "helpdoc-section" === t ? "helpdocs" : t), f = "slack" === (n = a).searchSourceType ? (0, r(444700).Mw)(n.text) : (0, r(444700).Mw)(n.title), p = function(e) {
                    switch (e.searchSourceType) {
                        case "slack":
                            return `#${e.channel}`;
                        case "gmail":
                        case "google-calendar":
                        case "notion-calendar":
                        case "notion-mail":
                            return e.lastEdited;
                        default:
                            return e.path
                    }
                }(a);
                return (0, i.jsx)(r(95582).A, { ...d,
                    ...(0, r(218993).g$)(),
                    onMouseEnter: e => {
                        c.setState({
                            type: "list",
                            node: e.currentTarget,
                            citationType: "universal_search",
                            href: (0, r(281708).Ve)(a.id)
                        })
                    },
                    onMouseLeave: () => {
                        c.reset()
                    },
                    title: (0, i.jsxs)(r(4458).fI, {
                        gap: 2,
                        style: o,
                        alignItems: "center",
                        className: "autolayout-row autolayout-fill-width",
                        children: [(0, i.jsx)(r(218993).hL, {
                            children: f
                        }), u ? (0, i.jsx)(r(486944).M, {}) : void 0]
                    }),
                    href: s,
                    icon: (0, i.jsx)(r(218993).$x, {
                        iconGroup: h ? ? l,
                        iconSize: "sm"
                    }),
                    right: (0, i.jsx)(r(218993).FD, {
                        caption: p
                    }),
                    external: !0
                })
            }
            let s = {
                position: "relative",
                minWidth: 0,
                flexShrink: 0
            };

            function c(e) {
                let {
                    title: t,
                    url: n,
                    caption: l,
                    showUsedByLLM: o,
                    ...a
                } = e;
                return (0, i.jsx)(r(95582).A, { ...a,
                    ...(0, r(218993).g$)(),
                    title: (0, i.jsxs)(r(4458).fI, {
                        gap: 2,
                        style: s,
                        alignItems: "center",
                        className: "autolayout-row autolayout-fill-width",
                        children: [(0, i.jsx)(r(218993).hL, {
                            children: t
                        }), o ? (0, i.jsx)(r(486944).M, {}) : void 0]
                    }),
                    href: n,
                    icon: (0, i.jsx)(r(218993).$x, {
                        iconGroup: r(668068).s,
                        iconSize: "sm"
                    }),
                    right: (0, i.jsx)(r(218993).FD, {
                        caption: l
                    }),
                    external: !0
                })
            }
            let u = {
                position: "relative",
                minWidth: 0,
                flexShrink: 0
            };

            function d(e) {
                let t, {
                        url: n,
                        showUsedByLLM: l,
                        ...o
                    } = e,
                    a = [],
                    s = (0, r(758654).qh)(n);
                return s && a.push(`https://www.google.com/s2/favicons?domain=${s}&sz=64`), t = e.title ? e.title : (0, i.jsx)(r(109939).sA, {
                    id: "WebpageSearchResultMenuItem.untitled",
                    defaultMessage: "Untitled"
                }), (0, i.jsx)(r(95582).A, { ...o,
                    ...(0, r(218993).g$)(),
                    title: (0, i.jsxs)(r(4458).fI, {
                        gap: 2,
                        style: u,
                        alignItems: "center",
                        className: "autolayout-row autolayout-fill-width",
                        children: [(0, i.jsx)(r(218993).hL, {
                            children: t
                        }), l ? (0, i.jsx)(r(486944).M, {}) : void 0]
                    }),
                    href: n,
                    right: (0, i.jsx)(r(218993).FD, {
                        caption: s
                    }),
                    icon: (0, i.jsx)(f, {
                        urls: a,
                        alt: e.title
                    }),
                    external: !0
                })
            }
            let h = {
                borderRadius: 4,
                width: 20,
                height: 20
            };

            function f(e) {
                let {
                    urls: t,
                    alt: l
                } = e, [o, a] = (0, n.useState)(0), [s, c] = (0, n.useState)(!1), [u, d] = (0, n.useState)(!1);
                return ((0, n.useEffect)(() => {
                    let e = new Image;
                    e.src = t[o], e.onload = () => {
                        c(!0)
                    }, e.onerror = () => {
                        t.length > o + 1 ? a(e => e + 1) : (d(!0), c(!0))
                    }
                }, [t, o]), s) ? u ? (0, i.jsx)(r(16275).I, {
                    icon: r(588739).linkIcon
                }) : (0, i.jsx)("img", {
                    src: t[o],
                    alt: l,
                    style: h
                }) : (0, i.jsx)(r(517334).k, {
                    size: 12
                })
            }

            function p(e) {
                return Array.from(g(e).keys())
            }

            function g(e) {
                let {
                    isCohereRankingEnabled: t,
                    resultStep: n,
                    overrideResults: l
                } = e, i = function({
                    isCohereRankingEnabled: e,
                    resultStep: t,
                    overrideResults: n
                }) {
                    let l = t.result ? ? {},
                        i = function(e) {
                            let t = new Map;
                            for (let r of e) {
                                let e = r.searchSourceType,
                                    n = t.get(e) ? ? [];
                                n.push(r), t.set(e, n)
                            }
                            return t
                        }(n ? ? l.extractedResults ? ? (0, r(596041).S)(l));
                    return new Map(Array.from(new Map(Array.from((e ? function(e) {
                        for (let [t, r] of e) r.sort((e, t) => (t.score ? ? 0) - (e.score ? ? 0));
                        return e
                    }(i) : new Map(Array.from(i.entries()).sort(([e, t], [r, n]) => n.length - t.length))).entries()).sort(([e, t], [r, n]) => {
                        let l = Math.max(...t.map(e => e.cohereRelevanceScoreForRanking ? ? 0));
                        return Math.max(...n.map(e => e.cohereRelevanceScoreForRanking ? ? 0)) - l
                    }).sort(([e, t], [r, n]) => {
                        let l = t.some(e => e.isPrimarySource);
                        return l !== n.some(e => e.isPrimarySource) ? l ? -1 : 1 : 0
                    })).entries()).sort(([e, t], [r, n]) => {
                        let l = t.some(e => e.isPrimarySource),
                            i = n.some(e => e.isPrimarySource),
                            o = "google-calendar" === e || "notion-calendar" === e,
                            a = "google-calendar" === r || "notion-calendar" === r;
                        return o === a ? 0 : o && !l ? 1 : a && !i ? -1 : 0
                    }))
                }({
                    isCohereRankingEnabled: t,
                    resultStep: n,
                    overrideResults: l
                }), o = new Map;
                if (t && i.size > 1) {
                    let e = function(e) {
                        let t = [];
                        for (let r of e.values()) t.push(...r);
                        return t.sort((e, t) => (t.cohereRelevanceScoreForRanking ? ? 0) - (e.cohereRelevanceScoreForRanking ? ? 0)).slice(0, 20)
                    }(i);
                    o.set("top-results", e)
                }
                for (let [e, t] of i) o.set(e, t);
                return o
            }

            function v(e) {
                return "notion" === e ? r(539694)._ : "webpage" === e ? r(579022).u : "helpdocs" === e || "helpdoc-section" === e ? r(668068).s : "top-results" !== e ? (0, r(722371).objectKeys)(r(44183).G).includes(e) ? r(44183).G[e] : l : void 0
            }

            function b(e) {
                let {
                    index: t,
                    result: n,
                    environment: l,
                    spaceStore: o,
                    hoverStore: s,
                    threadStore: u,
                    showUsedByLLM: h
                } = e;
                if ("webpage" === n.searchSourceType) return function({
                    index: e,
                    id: t,
                    title: n,
                    showUsedByLLM: l
                }) {
                    var o;
                    let a = null == (o = (0, r(932956).OU)(t)) ? void 0 : o.url;
                    if (a) return {
                        key: `web_result:${t}:${e}`,
                        render: e => (0, i.jsx)(d, { ...e,
                            id: t,
                            title: n,
                            url: a,
                            showUsedByLLM: l
                        }),
                        action: () => {}
                    }
                }({
                    index: t,
                    id: n.id,
                    title: n.title,
                    showUsedByLLM: h
                });
                if ("notion" === n.searchSourceType)
                    if (n.isUser) return (0, r(650494).h)({
                        index: t,
                        spaceStore: o,
                        userId: (0, r(180825).AF)({
                            prefix: "user",
                            id: n.id
                        })
                    });
                    else {
                        let e = (0, r(4962).uj)(n.id) ? n.id : (0, r(180825).AF)({
                            prefix: "pageOrCollectionViewBlock",
                            id: n.id
                        });
                        return (0, r(650494).L)({
                            index: t,
                            blockId: e,
                            environment: l,
                            spaceStore: o,
                            threadStore: u,
                            showUsedByLLM: h
                        })
                    }
                if ("helpdocs" === n.searchSourceType || "helpdoc-section" === n.searchSourceType) return function(e) {
                    var t;
                    let {
                        index: n,
                        result: l,
                        showUsedByLLM: o
                    } = e;
                    if ("helpdocs" !== l.searchSourceType && "helpdoc-section" !== l.searchSourceType) return;
                    let a = null == (t = (0, r(932956).OU)(l.path)) ? void 0 : t.url;
                    return {
                        key: `helpdoc:${l.id}:${n}`,
                        render: e => (0, i.jsx)(c, { ...e,
                            title: l.title,
                            caption: l.path,
                            url: a,
                            showUsedByLLM: o
                        }),
                        action: () => {}
                    }
                }({
                    index: t,
                    result: n,
                    environment: l,
                    spaceStore: o,
                    showUsedByLLM: h
                });
                n.searchSourceType;
                let f = function(e) {
                    let t = (0, r(932956).f9)(e.id);
                    if (t && t.type === e.searchSourceType) return "slack" === t.type ? (0, r(313168).mQ)(t) : t.url
                }(n);
                return f ? {
                    key: `${n.searchSourceType}:${n.id}`,
                    render: e => (0, i.jsx)(a, { ...e,
                        result: n,
                        href: f,
                        hoverStore: s,
                        showUsedByLLM: h
                    }),
                    action: () => {}
                } : void 0
            }

            function m({
                searchSourceType: e,
                environment: t,
                intl: n
            }) {
                var l;
                let i = r(728372).AppStoreSidebarSpaceStore.state;
                if (!i) return;
                let o = function(e) {
                    switch (e) {
                        case "helpdoc-section":
                            return {
                                type: "helpdocs"
                            };
                        case "webpage":
                            return {
                                type: "web"
                            };
                        case "custom":
                            return {
                                type: "custom"
                            };
                        default:
                            return {
                                type: e
                            }
                    }
                }(e);
                return null == (l = (0, r(688172).tu)({
                    environment: t,
                    searchScope: o,
                    spaceStore: i,
                    intl: n,
                    showEverythingLabel: !0
                })) ? void 0 : l.scopeTitle
            }

            function y(e) {
                let {
                    citationContext: t
                } = e;
                return (0, n.useCallback)(e => {
                    let n = null == t ? void 0 : t[e];
                    if (!n) return;
                    let l = (0, r(932956).f9)(n.id);
                    if (l)
                        if ("block" === l.type) return;
                        else if ("helpdoc" === l.type) {
                        if ("helpdocs" === n.searchSourceType) return { ...l,
                            type: "helpdoc",
                            url: l.url,
                            title: n.title,
                            text: "",
                            lastEdited: n.lastEdited,
                            href: (0, r(281708).h5)(l.href)
                        }
                    } else if ("webpage" === l.type) {
                        if ("webpage" === n.searchSourceType) return { ...l,
                            type: "webpage",
                            url: l.url,
                            title: n.title,
                            text: "",
                            lastEdited: n.lastEdited,
                            href: (0, r(281708).RW)(l.href)
                        }
                    } else if ("helpdoc-section" === l.type) {
                        if ("helpdoc-section" === n.searchSourceType) return { ...l,
                            type: "helpdoc-section",
                            url: l.url,
                            title: n.title,
                            text: "",
                            lastEdited: n.lastEdited,
                            href: (0, r(281708).w3)(l.href)
                        }
                    } else {
                        if ("database_query_results" === l.type || "citation_unsupported" === l.type) return;
                        return (0, r(600923).K)(l.type).getPayloadDataForHrefCallback({
                            context: n,
                            parsedData: l
                        })
                    }
                }, [t])
            }
        },
        414217: (e, t, r) => {
            r.d(t, {
                B: () => l
            });
            let n = {
                wrapper: {
                    background: r(632079).Tj.background.secondary,
                    borderRadius: 10,
                    padding: "8px 12px",
                    userSelect: "none",
                    pointerEvents: "auto",
                    width: "100%"
                }
            };

            function l(e) {
                return n
            }
        },
        486944: (e, t, r) => {
            r.d(t, {
                M: () => i
            }), r(296540);
            var n = r(474848);
            let l = {
                marginInlineStart: 6
            };

            function i() {
                return (0, n.jsx)(r(16275).I, {
                    icon: r(58838).eyeSmallIcon,
                    size: "xs",
                    colorVariant: "secondary",
                    style: l
                })
            }
        },
        636190: (e, t, r) => {
            r.d(t, {
                L: () => i
            }), r(296540);
            var n = r(474848);
            let l = {
                position: "relative"
            };

            function i({
                backgroundColor: e,
                children: t,
                ...o
            }) {
                let a = (0, r(414217).B)(e),
                    s = {
                        wrapper: { ...l,
                            ...a.wrapper,
                            background: e ? a.wrapper.background : "initial",
                            height: "100%",
                            padding: "20px 12px"
                        }
                    };
                return (0, n.jsx)(r(4458).VP, {
                    style: s.wrapper,
                    alignItems: "center",
                    justifyContent: "center",
                    className: "autolayout-fill-width",
                    children: (0, n.jsx)(r(684268).r, { ...o,
                        direction: "vertical",
                        iconSize: 48,
                        children: t
                    })
                })
            }
        },
        650494: (e, t, r) => {
            r.d(t, {
                L: () => i,
                h: () => o
            });
            var n = r(296540),
                l = r(474848);

            function i(e) {
                let {
                    index: t,
                    blockId: n,
                    environment: i,
                    spaceStore: o,
                    threadStore: a,
                    showUsedByLLM: s
                } = e;
                return {
                    key: `notion:${n}:${t}`,
                    render: e => (0, l.jsx)(u, { ...e,
                        blockId: n,
                        spaceStore: o,
                        showUsedByLLM: s
                    }),
                    action: ({
                        event: e
                    }) => {
                        let t = r(970831).B.createChildStore(o, {
                            id: n,
                            table: r(832375).evP
                        });
                        if (!t) return;
                        let l = (null == a ? void 0 : a.getTranscript()) ? ? [],
                            s = (0, r(330942).f_)(l),
                            c = !!(0, r(330942).sQ)(s),
                            u = (0, r(483227).Ef)({
                                environment: i,
                                updates: {
                                    store: t,
                                    pageVisitSource: c ? r(254656).y8.AIQna : r(254656).y8.AIChat
                                }
                            });
                        (0, r(79266).navigate)({
                            environment: i,
                            url: u,
                            openInNew: (0, r(7029).V)(e)
                        })
                    }
                }
            }

            function o(e) {
                let {
                    index: t,
                    spaceStore: n,
                    userId: i
                } = e, o = r(807825).L.createChildStore(n, {
                    id: i,
                    table: r(832375).oo9
                }).getModel();
                if (o) return {
                    key: `user:${i}:${t}`,
                    render: e => (0, l.jsx)(r(920224).A, { ...e,
                        actor: (0, r(197018).D3)(o)
                    }),
                    action: () => {}
                }
            }
            let a = {
                    marginInlineStart: 4
                },
                s = {
                    width: "100%"
                },
                c = {
                    position: "relative",
                    minWidth: 0,
                    flexShrink: 0
                };

            function u(e) {
                let {
                    blockId: t,
                    spaceStore: i,
                    showUsedByLLM: o,
                    ...u
                } = e, d = r(970831).B.createChildStore(i, {
                    id: t,
                    table: r(832375).evP
                }), {
                    icon: h,
                    iconRecordCategory: f,
                    isEmptyPage: p,
                    blockStoreHasPath: g,
                    showVerifiedPageIcon: v,
                    showArchivedPageIcon: b
                } = (0, r(682985).K8)(() => ({
                    icon: null == d ? void 0 : d.getIcon(),
                    iconRecordCategory: (0, r(569553).Te)(d),
                    isEmptyPage: (null == d ? void 0 : d.isEmptyPage()) ? ? !0,
                    blockStoreHasPath: d && (0, r(307983).a6)(d),
                    showVerifiedPageIcon: void 0 !== d && (0, r(435137).sN)(d.getModel(), d.getRecordModel),
                    showArchivedPageIcon: (null == d ? void 0 : d.isArchived()) ? ? !1
                }), [d]), m = (0, n.useCallback)(e => (0, l.jsx)(r(272307).HoverPagePreview, {
                    store: d,
                    events: e
                }), [d]);
                return d ? (0, l.jsx)(r(51831).m, {
                    noStyle: !0,
                    delayThreshold: 0,
                    placement: "left",
                    alignment: "center",
                    originGap: 24,
                    content: m,
                    children: e => (0, l.jsx)("div", {
                        onMouseEnter: e.onMouseEnter,
                        onMouseLeave: e.onMouseLeave,
                        style: s,
                        children: (0, l.jsx)(r(95582).A, { ...u,
                            ...(0, r(218993).g$)(),
                            title: (0, l.jsxs)(r(4458).fI, {
                                gap: 2,
                                style: c,
                                alignItems: "center",
                                className: "autolayout-row autolayout-fill-width",
                                children: [(0, l.jsx)(r(218993).hL, {
                                    children: (0, l.jsx)(r(627918).A, {
                                        store: d
                                    })
                                }), o ? (0, l.jsx)(r(486944).M, {}) : void 0, v ? (0, l.jsx)(r(16275).I, {
                                    icon: r(93042).checkmarkCircleFillIcon,
                                    size: "xxs",
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary",
                                    style: a
                                }) : void 0, b ? (0, l.jsx)(r(16275).I, {
                                    icon: r(80362).E,
                                    size: "xxs",
                                    colorPalette: "gray",
                                    colorVariant: "tertiary",
                                    style: a
                                }) : void 0]
                            }),
                            icon: (0, l.jsx)(r(569553).B6, {
                                disabled: !0,
                                icon: h,
                                iconRecordCategory: f,
                                isEmptyPage: p,
                                size: r(986939).A.isMobile ? 24 : 20
                            }),
                            right: g ? (0, l.jsx)(r(307983).Ay, {
                                store: d,
                                showFullPathInTooltip: !0
                            }) : void 0,
                            className: "notranslate"
                        })
                    })
                }) : null
            }
        },
        665084: (e, t, r) => {
            r.d(t, {
                v4: () => function e({
                    stores: t,
                    environment: g,
                    transaction: v,
                    citationContext: b
                }) {
                    for (let m of t) {
                        let t = m.getTitleStore(),
                            y = null == t ? void 0 : t.getValue();
                        if (t && y) {
                            let e = (0, u().RQ)(y).map(e => {
                                let t, f = e[1];
                                if (!f) return e;
                                let v = (0, u().VtW)(f),
                                    y = null == v ? void 0 : v[1];
                                if (null != y && y.startsWith("collection://")) {
                                    let e = function(e, t, r) {
                                        let n = p(e, t, r);
                                        if (n) return (0, u().ld4)(n.id, void 0)
                                    }(y, m, g);
                                    if (e) return (0, u().wmz)(e, [...(f ? ? []).filter(e => !(0, u().sh$)(e))])
                                }
                                if (null != y && y.startsWith("view://")) {
                                    let e = function(e, t) {
                                        if (!e.startsWith("view://")) return;
                                        let n = e.split("view://")[1];
                                        if (!n) return;
                                        let l = r(547131).p.createChildStore(t, {
                                            id: n,
                                            table: c().Gy1,
                                            spaceId: t.getSpaceId()
                                        }).getParentBlockStore();
                                        if (l) return (0, u().ld4)(l.id, void 0)
                                    }(y, m);
                                    if (e) return (0, u().wmz)(e, [...(f ? ? []).filter(e => !(0, u().sh$)(e))])
                                }
                                let k = (0, u().g2K)(f),
                                    x = null == k ? void 0 : k[1];
                                if ((null == x ? void 0 : x.type) === "url") {
                                    let f = function(e, t, r) {
                                        let n = p(e, t, r);
                                        if (n) return (0, u().X$)({
                                            type: "block",
                                            href: (0, h().Ef)({
                                                environment: r,
                                                updates: {
                                                    store: n
                                                }
                                            }),
                                            blockId: n.id
                                        })
                                    }(x.href, m, g);
                                    if (f) return (0, u().Ey_)(e[0], [...(e[1] ? ? []).filter(e => !(0, u().bZo)(e)), f]);
                                    let v = function(e, t, n) {
                                        if (!e.startsWith("view://")) return;
                                        let l = e.split("view://")[1];
                                        if (!l) return;
                                        let i = r(547131).p.createChildStore(t, {
                                            id: l,
                                            table: c().Gy1,
                                            spaceId: t.getSpaceId()
                                        }).getParentBlockStore();
                                        if (i) return (0, u().X$)({
                                            type: "block",
                                            href: (0, h().Ef)({
                                                environment: n,
                                                updates: {
                                                    store: i
                                                }
                                            }),
                                            blockId: i.id,
                                            collectionViewId: l
                                        })
                                    }(x.href, m, g);
                                    if (v) return (0, u().Ey_)(e[0], [...(e[1] ? ? []).filter(e => !(0, u().bZo)(e)), v]);
                                    let y = function(e, t, r) {
                                        var n;
                                        if (!e.startsWith("formulaResult://")) return;
                                        let i = null == (n = e.split("formulaResult://")[1]) ? void 0 : n.split("/");
                                        if (!i || i.length < 2) return;
                                        let o = i[1];
                                        if (!o) return;
                                        let a = l().B.createChildStore(t, {
                                            id: o,
                                            table: c().evP,
                                            spaceId: t.getSpaceId()
                                        });
                                        return (0, u().X$)({
                                            type: "block",
                                            href: (0, h().Ef)({
                                                environment: r,
                                                updates: {
                                                    store: a
                                                }
                                            }),
                                            blockId: o
                                        })
                                    }(x.href, m, g);
                                    if (y) return (0, u().Ey_)(e[0], [...(e[1] ? ? []).filter(e => !(0, u().bZo)(e)), y]);
                                    let k = (0, i().w)(x.href);
                                    if (k) {
                                        let t = l().B.createChildStore(m, {
                                                id: k,
                                                table: c().evP,
                                                spaceId: m.getSpaceId()
                                            }),
                                            r = (0, s().parseRoute)({
                                                url: x.href,
                                                isMobile: n().A.isMobile,
                                                baseUrl: n().A.domainBaseUrl,
                                                publicDomainName: n().A.publicDomainName,
                                                protocol: void 0,
                                                currentUrl: void 0,
                                                requestedOnAlternateDomain: (0, o().wasRequestedOnAlternateDomain)()
                                            }),
                                            i = "page" === r.name ? r.discussionId : void 0,
                                            a = "page" === r.name ? r.scrollToBlockId : void 0,
                                            d = "page" === r.name ? r.snapshotTimestamp : void 0,
                                            f = (0, h().Ef)({
                                                environment: g,
                                                updates: {
                                                    store: t
                                                }
                                            });
                                        return (0, u().Ey_)(e[0], [...(e[1] ? ? []).filter(e => !(0, u().bZo)(e)), (0, u().X$)({
                                            type: "block",
                                            href: f,
                                            blockId: k,
                                            ...i ? {
                                                discussionId: i
                                            } : {},
                                            ...a ? {
                                                scrollToBlockId: a
                                            } : {},
                                            ...d ? {
                                                snapshotTimestamp: d
                                            } : {}
                                        })])
                                    }
                                    if (x.href.startsWith("discussion://")) return;
                                    let S = null == b ? void 0 : b[x.href],
                                        w = (0, a().f9)(S ? S.id : x.href);
                                    w && (t = "block" === w.type ? (0, u().X$)({
                                        type: "block",
                                        href: x.href,
                                        blockId: w.blockId
                                    }) : "helpdoc" === w.type ? (0, u().X$)({
                                        type: "helpdoc",
                                        href: x.href,
                                        url: w.url
                                    }) : "webpage" === w.type ? (0, u().X$)({
                                        type: "webpage",
                                        href: x.href,
                                        url: w.url
                                    }) : "helpdoc-section" === w.type ? (0, u().X$)({
                                        type: "helpdoc-section",
                                        href: x.href,
                                        url: w.url,
                                        parentPageHref: w.parentPageHref
                                    }) : "citation_unsupported" === w.type || "database_query_results" === w.type ? void 0 : (0, d().K)(w.type).getCitationAnnotationFromParsedHref({
                                        parsedData: w,
                                        href: x.href
                                    }))
                                }
                                return t ? (0, u().Ey_)(e[0], [...(e[1] ? ? []).filter(e => !(0, u().bZo)(e)), t]) : e
                            }).filter(e => void 0 !== e);
                            f().R9({
                                environment: g,
                                store: t,
                                value: e,
                                transaction: v
                            })
                        }
                        let k = m.getContentStores();
                        k.length > 0 && e({
                            stores: k,
                            environment: g,
                            transaction: v,
                            citationContext: b
                        })
                    }
                }
            }), r(898992), r(354520), r(581454);
            var n = () => r(986939),
                l = () => r(970831),
                i = () => r(52628),
                o = () => r(700473),
                a = () => r(932956),
                s = () => r(132702),
                c = () => r(832375),
                u = () => r(247438),
                d = () => r(600923),
                h = () => r(483227),
                f = () => r(41403);

            function p(e, t, n) {
                if (!e.startsWith("collection://")) return;
                let l = e.split("collection://")[1];
                if (!l) return;
                let i = r(356912).m.createChildStore(t, {
                    id: l,
                    table: c().VlP,
                    spaceId: t.getSpaceId()
                }).getParentBlockStore();
                if (i) return i
            }
        },
        674230: (e, t, r) => {
            r.d(t, {
                W: () => n
            });
            let n = ["toggle", "column", "column_list", "callout", "page", "database", "table_of_contents", "transcription", "synced_block", "synced_block_reference", "image", "pdf", "file", "audio", "video"]
        },
        789682: (e, t, r) => {
            r.r(t), r.d(t, {
                LargeSurfaceRenderError: () => l
            }), r(296540);
            var n = r(474848);

            function l(e) {
                return (0, n.jsx)(r(636190).L, { ...e,
                    iconGroup: r(940227).F,
                    children: (0, n.jsx)(r(823151).g, {})
                })
            }
        },
        870950: (e, t, r) => {
            let n, l;
            r.d(t, {
                I: () => o
            });
            var i = r(296540);

            function o(e) {
                let {
                    isMarkdownVNextEnabled: t
                } = e, [o, a] = (0, i.useState)(() => n);
                return (0, i.useEffect)(() => {
                    let e = !0;
                    return t && void 0 === o && (n ? Promise.resolve(n) : (!l && (l = Promise.all([r.e(95560).then(r.bind(r, 708861)), r.e(95560).then(r.bind(r, 205950))]).then(([e, t]) => e.getNotionMarkdownVNextParser({
                        customTagParseDefinitions: t.getClientNotionCustomTagParseDefinitions()
                    })).then(e => (n = e, e)).catch(e => {
                        throw l = void 0, e
                    })), l)).then(t => {
                        e && a(() => t)
                    }).catch(e => {
                        (0, r(222024).t)().error({
                            from: "useNotionMarkdownVNextParser",
                            type: "loadNotionMarkdownVNextParser",
                            error: e
                        })
                    }), () => {
                        e = !1
                    }
                }, [t, o]), {
                    isMarkdownVNextEnabled: t,
                    vNextParser: o
                }
            }
        }
    }
]);