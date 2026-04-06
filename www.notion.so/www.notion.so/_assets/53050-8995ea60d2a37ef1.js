"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [53050], {
        253050: (e, t, o) => {
            o.d(t, {
                N$: () => b,
                aH: () => J,
                lc: () => N,
                Hw: () => Y,
                HZ: () => K
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(823215), o(354520), o(672577), o(430670), o(803949), o(581454), o(737550), o(814603), o(147566), o(198721);
            var n = o.n(o(43371)),
                r = () => o(381453),
                i = () => o(763230),
                a = () => o(955630),
                l = () => o(561872),
                s = () => o(682956),
                d = () => o(488307),
                u = () => o(685136),
                c = () => o(609277),
                p = () => o(514214),
                f = () => o(247438);
            let m = {
                    a: !0,
                    strong: !0,
                    em: !0,
                    code: !0,
                    del: !0,
                    s: !0,
                    span: !0,
                    time: !0
                },
                g = {
                    meta: !0,
                    style: !0,
                    script: !0,
                    head: !0,
                    title: !0
                },
                h = "sourceCode",
                b = "#maybeCitation:",
                v = RegExp(`^${b}<(.*)>$`);

            function C(e) {
                if (!e) return;
                let t = parseInt(e);
                return isNaN(t) ? void 0 : t
            }
            let N = {
                [f().Ifu.Page]: "data-notion-page-id",
                [f().Ifu.Collection]: "data-notion-collection-id",
                spaceId: "data-notion-space-id",
                [f().Ifu.Highlight]: "data-notion-highlight",
                [f().Ifu.User]: "data-notion-user-id",
                [f().Ifu.Discussion]: "data-notion-block-discussion-id",
                [f().Ifu.Equation]: "data-notion-inline-equation",
                [f().Ifu.Comment]: "data-notion-block-comment-id",
                cma: "data-notion-block-comment-author-id",
                cmm: "data-notion-block-comment-discussion-id",
                [a().xd.code]: "data-notion-code-syntax",
                [a().xd.callout]: "data-notion-callout",
                calloutIcon: "data-notion-callout-icon",
                calloutBackground: "data-notion-callout-background",
                [a().xd.tableOfContents]: "data-notion-toc",
                [a().xd.file]: "data-notion-file",
                fileAlias: "data-notion-file-alias",
                [a().xd.columnList]: "data-notion-column-list",
                [a().xd.column]: "data-notion-column-ratio",
                [a().xd.video]: "data-notion-video",
                [a().xd.audio]: "data-notion-audio",
                [a().xd.pdf]: "data-notion-pdf",
                [a().xd.equation]: "data-notion-equation",
                dateFormat: "data-notion-date-format",
                [a().xd.externalObjectInstance]: "data-notion-link-preview",
                [a().xd.embed]: "data-notion-embed"
            };

            function x(e, t) {
                return t && t.nodeType === e.Node.ELEMENT_NODE
            }

            function _(e, t) {
                return e.nodeType === t.Node.TEXT_NODE || e instanceof t.Element && m[e.tagName.toLowerCase()]
            }

            function y(e) {
                let t = [];
                if (!e.parentNode) return t;
                let o = e.parentNode;
                for (; o;) t.push(o), o = o.parentNode || void 0;
                return t
            }

            function A(e, t) {
                return y(e).filter(e => e instanceof t.Element && ("ul" === e.tagName.toLowerCase() || "ol" === e.tagName.toLowerCase())).length
            }
            o(49361).me, o(49361).Fv, o(49361).me, o(49361).Fv, o(49361).me, o(49361).Fv;
            let I = ["•", "◦", "▪"],
                E = ["h1", "h2", "h3", "h4", "h5", "h6"].map(e => `${e}:not(:first-child)`).join(", ");

            function w(e) {
                let {
                    node: t,
                    window: n,
                    stripText: r,
                    stripSurroundingWhitespace: i,
                    timeZone: l,
                    ignoreComments: d,
                    deps: u,
                    ignoreCodeBlock: c,
                    preserveLineBreaksInTableCellsEnabled: p
                } = e;
                if (!r) {
                    for (let e of Array.from(t.querySelectorAll("p:not(:first-child)"))) e.prepend("\n");
                    for (let e of Array.from(t.querySelectorAll(E))) e.prepend("\n");
                    for (let e of Array.from(t.querySelectorAll("ul > li"))) {
                        let t = A(e, n) - 1,
                            o = t % I.length,
                            r = I[o],
                            i = "    ".repeat(t);
                        e.prepend(`
${i}${r} `)
                    }
                    for (let e of Array.from(t.querySelectorAll("ol"))) {
                        let t = A(e, n),
                            o = "    ".repeat(t);
                        for (let t = 0; t < e.children.length; t += 1) e.children[t].prepend(`
${o}${t+1}. `)
                    }
                    for (let e of Array.from(t.querySelectorAll("pre"))) e.parentNode && e.parentNode.insertBefore(n.document.createTextNode("\n\n"), e)
                }
                let m = [],
                    g = [],
                    h = function e(t, n, r, i = []) {
                        var a;
                        if (n && 1 === t.nodeType && t.hasAttribute(N[f().Ifu.Comment]) || r && (null == (a = t.tagName) ? void 0 : a.toLowerCase()) === "pre") return i;
                        for (let a of (i.push(t), o(871871).PE(t.childNodes))) e(a, n, r, i);
                        return i
                    }(t, d, c),
                    b = !1,
                    C = h.filter(e => e.nodeType !== n.Node.TEXT_NODE ? !!p && e instanceof n.Element && "br" === e.tagName.toLowerCase() && (e.data = "\n", b = !0, !0) : !(r && /^( |\t)*(\n)+( |\t)*$/.test(e.data))),
                    x = !0;
                C.forEach((e, d) => {
                    var c, p, h, b;
                    let _, A, I, E, w = e.data;
                    r && (w = (w = (w = (w = w.replace(/\[ \] /g, "")).replace(/\[x\] /g, "")).replace(/^[\-\*\•]\s?/g, "")).replace(/(\s)+/g, "$1")), !t.hasAttribute("confluenceTabSpaces") && 0 === d && i && (w = w.trimStart()), w = f().xV3(w), d === C.length - 1 && x && i && (w = w.trimEnd());
                    let L = [],
                        S = y(e);
                    !r && S.some(e => e instanceof n.Element && ("h1" === e.tagName.toLowerCase() || "h2" === e.tagName.toLowerCase() || "h3" === e.tagName.toLowerCase() || "h4" === e.tagName.toLowerCase() || "h5" === e.tagName.toLowerCase() || "h6" === e.tagName.toLowerCase())) && L.push([f().Ifu.Bold]), S.some(e => e instanceof n.Element && "strong" === e.tagName.toLowerCase()) && L.push([f().Ifu.Bold]), S.some(e => e instanceof n.Element && "em" === e.tagName.toLowerCase()) && L.push([f().Ifu.Italic]), S.some(e => e instanceof n.Element && "u" === e.tagName.toLowerCase()) && L.push([f().Ifu.Underline]), S.some(e => e instanceof n.Element && ("code" === e.tagName.toLowerCase() || "pre" === e.tagName.toLowerCase())) && L.push([f().Ifu.Code]), S.some(e => e instanceof n.Element && ("del" === e.tagName.toLowerCase() || "strike" === e.tagName.toLowerCase() || "s" === e.tagName.toLowerCase())) && L.push([f().Ifu.Strike]);
                    let k = S.find(e => {
                        var t;
                        return e instanceof n.Element && (e.hasAttribute(N[f().Ifu.Highlight]) || (null == (t = e.parentElement) ? void 0 : t.hasAttribute(N[f().Ifu.Highlight])))
                    });
                    if (k && k instanceof n.Element) {
                        let e = k.getAttribute(N[f().Ifu.Highlight]),
                            t = null == (c = k.parentElement) ? void 0 : c.getAttribute(N[f().Ifu.Highlight]),
                            o = e && "undefined" !== e ? Z(e || "") : Z(t || "");
                        o && L.push([f().Ifu.Highlight, o])
                    }
                    let T = S.find(e => e instanceof n.Element && "a" === e.tagName.toLowerCase());
                    if (T) {
                        let e = T.getAttribute(N[f().Ifu.Page]),
                            t = T.getAttribute("notionUserId") || T.getAttribute(N[f().Ifu.User]),
                            n = T.getAttribute(N.spaceId),
                            r = T.getAttribute(N[f().Ifu.Comment]),
                            i = T.getAttribute(N[f().Ifu.Collection]);
                        if ("string" == typeof e && (0, o(4962).uj)(e) && "string" == typeof n && (0, o(4962).uj)(n)) _ = f().ld4(e, n);
                        else if ("string" == typeof i && (0, o(4962).uj)(i) && "string" == typeof n && (0, o(4962).uj)(n)) _ = f().ETy({
                            collectionId: i,
                            spaceId: n,
                            parentCvbId: void 0
                        });
                        else if (T.href) {
                            let e = v.exec(decodeURIComponent(T.hash));
                            e ? L.push(f().Sez(decodeURIComponent(e[1]))) : L.push(f().Sez(T.href))
                        } else "string" == typeof t && (0, o(4962).uj)(t) ? (_ = f().P4h(t), T.getAttribute("notionUserId") && d === C.length - 2 && (x = !1)) : r && n && (0, o(4962).uj)(r) && (0, o(4962).uj)(n) && (_ = f().hiQ(r, n))
                    }
                    let P = S.find(e => !!(e instanceof n.Element && e.getAttribute(N[f().Ifu.Discussion]))),
                        D = t.classList.contains("page-comment");
                    if (P && !D) {
                        let e = P.getAttribute(N[f().Ifu.Discussion]);
                        e && e.split(",").forEach(e => L.push(f().aQj(e)))
                    }
                    let B = S.find(e => e instanceof n.Element && "sub" === e.tagName.toLowerCase());
                    (null == B ? void 0 : B.getAttribute("confluenceProcessableEquation")) === "true" && (A = `_{${B.textContent}}`);
                    let O = S.find(e => e instanceof n.Element && "sup" === e.tagName.toLowerCase());
                    (null == O ? void 0 : O.getAttribute("confluenceProcessableEquation")) === "true" && (I = `^{${O.textContent}}`);
                    let M = S.find(e => e instanceof n.Element && e.hasAttribute(N[f().Ifu.Equation]));
                    null != M && M.textContent && (E = M.textContent);
                    let q = S.find(e => e instanceof n.Element && "time" === e.tagName.toLowerCase());
                    if (q) {
                        let e = q.getAttribute("datetime");
                        if (e) {
                            let t, n, r = (h = e, b = l, (n = (t = o(906745).DateTime.fromISO(h)).toMillis()) === t.startOf("day").toMillis() ? o(25825).C6.toPersistedDate(n, b) : o(25825).C6.toPersistedDateTime(n, b)),
                                i = q.getAttribute(N.dateFormat),
                                a = { ...r
                                };
                            "relative" === i && (a.date_format = "relative"), _ = f().Ww9(a)
                        }
                    }
                    let H = S.find(e => !!(e instanceof n.Element && e instanceof n.HTMLSpanElement && e.getAttribute(N[a().xd.externalObjectInstance])));
                    if (_) m.push(f().wmz(_, L));
                    else if (A) m.push(f().G0H(A, L));
                    else if (I) m.push(f().G0H(I, L));
                    else if (E) m.push(f().G0H(E, L));
                    else if (H && null != u && u.randomID) {
                        let e = (null == u || null == (p = u.spaceIdCreator) ? void 0 : p.idInSavedSpace(s().ev)) ? ? u.randomID();
                        m.push(f().wmz(f().bMp(e), L)), g.push(e)
                    } else m.push(f().Ey_(w, L))
                });
                let _ = f().JG8(m, 1e5),
                    w = f().__s(_);
                if (b) {
                    let e = f().Ey_("", [
                        [f().Ifu.Link, ""]
                    ]);
                    w.push(e)
                }
                return {
                    titleTokens: w,
                    linkMentionBlockIds: g
                }
            }

            function L(e, t) {
                let n = ["img[src]", "a[download]", `a[${N[a().xd.file]}]`, `audio[${N[a().xd.audio]}]`, `video[${N[a().xd.video]}]`, "li"];
                t && n.push("pre");
                let r = e.querySelectorAll(n.join(","));
                return o(871871).PE(r)
            }

            function S(e) {
                let {
                    actor: t,
                    parent: o,
                    node: n,
                    allOperations: r,
                    deps: {
                        importFileMap: i,
                        window: a,
                        intl: l,
                        randomID: s,
                        spaceIdCreator: d,
                        randomShortID: u,
                        isPhoneNumber: c,
                        addFileIdsToBlock: p
                    },
                    options: {
                        legacyNonCrdt: f,
                        ignoreBlockCount: m,
                        considerCodeBlockAsNonTextItem: g,
                        ignoreImages: h
                    }
                } = e;
                return z({
                    actor: t,
                    parent: o,
                    nodes: L(n, g),
                    allOperations: r,
                    deps: {
                        importFileMap: i,
                        window: a,
                        intl: l,
                        randomID: s,
                        spaceIdCreator: d,
                        randomShortID: u,
                        isPhoneNumber: c,
                        addFileIdsToBlock: p
                    },
                    options: {
                        legacyNonCrdt: f,
                        ignoreBlockCount: m,
                        ignoreImages: h
                    }
                })
            }

            function k(e) {
                let {
                    actor: t,
                    parent: o,
                    root: n,
                    linkMentionBlockIds: i,
                    allOperations: l,
                    deps: {
                        randomID: s,
                        spaceIdCreator: d
                    },
                    options: {
                        legacyNonCrdt: u,
                        ignoreBlockCount: c
                    }
                } = e;
                if (!i.length) return;
                let p = n.querySelectorAll(`span[${N[a().xd.externalObjectInstance]}]`);
                for (let [e, n] of r().yU(Array.from(p), i)) e && n && B({
                    actor: t,
                    parent: o,
                    node: e,
                    allOperations: l,
                    deps: {
                        randomID: s,
                        spaceIdCreator: d
                    },
                    options: {
                        legacyNonCrdt: u,
                        ignoreBlockCount: c
                    },
                    blockId: n
                })
            }

            function T(e) {
                let {
                    actor: t,
                    parent: n,
                    node: r,
                    type: i,
                    allOperations: a,
                    options: {
                        legacyNonCrdt: l,
                        ignoreBlockCount: d,
                        stripText: u,
                        stripSurroundingWhitespace: c,
                        ignoreCodeBlock: p
                    },
                    deps: {
                        window: f,
                        randomID: m,
                        spaceIdCreator: g
                    }
                } = e, h = (null == g ? void 0 : g.idInSavedSpace(s().ev)) ? ? m(), {
                    titleTokens: b,
                    linkMentionBlockIds: v
                } = w({
                    node: r,
                    window: f,
                    stripText: u,
                    stripSurroundingWhitespace: c,
                    ignoreComments: !0,
                    ignoreCodeBlock: p,
                    deps: {
                        randomID: m,
                        spaceIdCreator: g
                    }
                }), {
                    operations: C
                } = o(993189).zgg.create({
                    id: h,
                    type: i,
                    properties: {
                        title: b
                    },
                    parentPointer: n,
                    space_id: n.spaceId,
                    createdBy: t,
                    ignore_block_count: !!d || void 0,
                    legacyNonCrdt: l
                });
                return a.push(...C), k({
                    actor: t,
                    parent: n,
                    root: r,
                    linkMentionBlockIds: v,
                    allOperations: a,
                    deps: {
                        randomID: m,
                        spaceIdCreator: g
                    },
                    options: {
                        legacyNonCrdt: l,
                        ignoreBlockCount: d
                    }
                }), $({
                    node: r,
                    spaceId: n.spaceId,
                    window: f,
                    blockId: h,
                    actor: t,
                    allOperations: a
                }), h
            }

            function P(e) {
                let {
                    actor: t,
                    parent: n,
                    source: r,
                    allOperations: i,
                    deps: {
                        randomID: a,
                        spaceIdCreator: l
                    },
                    options: {
                        legacyNonCrdt: d,
                        ignoreBlockCount: u
                    }
                } = e, c = (null == l ? void 0 : l.idInSavedSpace(s().ev)) ? ? a(), p = o(939438).WT({
                    url: r.secureS3UrlOrAlias,
                    baseUrl: r.secureS3UrlOrAlias,
                    publicDomainName: ""
                }), {
                    model: m,
                    operations: g
                } = o(993189).zgg.create({
                    id: c,
                    type: "embed" === p ? "file" : p,
                    properties: {
                        title: f().x9d((0, o(728601).Jt)(r.secureS3UrlOrAlias)),
                        source: [f().Ey_(r.secureS3UrlOrAlias, [f().Sez(r.secureS3UrlOrAlias)])]
                    },
                    format: {
                        block_width: "image" === r.type && r.width ? Math.min(r.width, 700) : void 0,
                        block_height: r.height ? Math.min(r.height, 400) : void 0
                    },
                    parentPointer: n,
                    space_id: n.spaceId,
                    createdBy: t,
                    ignore_block_count: !!u || void 0,
                    legacyNonCrdt: d
                });
                return i.push(...g, m.DEPRECATED_DONT_CALL_WILL_BE_REMOVED_IN_Q2_2025___getSecureFilesUpdate("", "")), c
            }

            function D(e) {
                return "#text" === e.nodeName ? e.textContent ? e.textContent : "" : Array.from(e.childNodes).map(e => {
                    let t = e.nodeName.toLowerCase();
                    return "br" === t ? "\n" : "div" === t ? `${D(e)}
` : D(e)
                }).join("").split("\n").map(e => e.trimRight()).join("\n").trimEnd()
            }

            function B(e) {
                let t, {
                        actor: n,
                        parent: r,
                        node: i,
                        allOperations: l,
                        deps: {
                            randomID: d,
                            spaceIdCreator: u
                        },
                        options: {
                            legacyNonCrdt: c,
                            ignoreBlockCount: p
                        }
                    } = e,
                    f = e.blockId ? e.blockId : (null == u ? void 0 : u.idInSavedSpace(s().ev)) ? ? d(),
                    m = "true" === i.getAttribute("bot-connected"),
                    g = i.getAttribute("href"),
                    h = i.getAttribute(N[a().xd.externalObjectInstance]);
                if (o(773352).log({
                        level: "info",
                        from: "htmlHelpers",
                        type: "linkPreviewStatus",
                        data: {
                            miscDataToConvertToString: {
                                linkPreviewUrl: g,
                                linkPreviewIntegration: h,
                                isBotConnected: m,
                                unfurlMetadataStr: i.getAttribute("metadata"),
                                domainName: g ? o(188835).parse(g).hostname : void 0
                            }
                        }
                    }), !g || !h) return;
                let b = o(188835).parse(g).hostname;
                if (!b) return;
                if (m) {
                    let e = i.getAttribute("metadata");
                    if (e) {
                        let n;
                        try {
                            n = JSON.parse(e)
                        } catch (e) {}
                        t = n && n.uri && n.external_object_id && n.bot_id && n.attributes ? {
                            original_url: n.uri,
                            domain: b,
                            external_object_id: n.external_object_id,
                            bot_id: n.bot_id,
                            uri: n.uri,
                            attributes: n.attributes
                        } : {
                            original_url: g,
                            domain: b,
                            error: {
                                status_code: o(654070).xB.BAD_REQUEST
                            }
                        }
                    } else t = {
                        original_url: g,
                        domain: b,
                        error: {
                            status_code: o(654070).xB.BAD_REQUEST
                        }
                    }
                } else t = {
                    original_url: g,
                    domain: b
                };
                if (!t) return;
                let {
                    operations: v
                } = o(993189).zgg.create({
                    createdBy: n,
                    id: f,
                    parentPointer: {
                        id: r.id,
                        table: "block",
                        spaceId: r.spaceId
                    },
                    type: a().xd.externalObjectInstance,
                    space_id: r.spaceId,
                    format: t,
                    ignore_block_count: !!p || void 0,
                    legacyNonCrdt: c
                });
                return l.push(...v), f
            }
            let O = /language-(\w+)/;

            function M(e) {
                let t = null;
                return null == e || e.forEach((e, n, r) => {
                    if (t) return;
                    if (o(804518).fileExtensionToCodeLanguageMap.hasOwnProperty(e)) {
                        t = e;
                        return
                    }
                    let i = e.match(O);
                    i && i.length > 1 && o(804518).fileExtensionToCodeLanguageMap.hasOwnProperty(i[1]) && (t = i[1])
                }), t
            }
            let q = /^\[x\].*/,
                H = /^\[ \].*/,
                U = /^[-\*\•].*/;

            function $(e) {
                let {
                    node: t,
                    spaceId: o,
                    blockId: n,
                    actor: r,
                    allOperations: i,
                    window: a
                } = e, l = Array.from(t.querySelectorAll(`span[${N[f().Ifu.Discussion]}]`)), d = new Map;
                for (let e of l) {
                    let t = e.getAttribute(N[f().Ifu.Discussion]);
                    t && t.split(",").forEach(t => {
                        if (d.has(t)) {
                            var r;
                            null == (r = d.get(t)) || null == (r = r.context) || r.push([e.textContent ? ? "", [
                                [f().Ifu.Discussion, t]
                            ]])
                        } else {
                            let r = {
                                id: t,
                                type: "default",
                                parent_id: n,
                                parent_table: s().ev,
                                resolved: !1,
                                context: [
                                    [e.textContent ? ? "", [
                                        [f().Ifu.Discussion, t]
                                    ]]
                                ],
                                space_id: o,
                                version: 0
                            };
                            d.set(t, r)
                        }
                    })
                }
                j({
                    node: t,
                    spaceId: o,
                    window: a,
                    blockId: n,
                    actor: r,
                    discussionToTextMap: d,
                    allOperations: i
                })
            }

            function j(e) {
                let {
                    node: t,
                    spaceId: o,
                    window: n,
                    blockId: r,
                    actor: i,
                    discussionToTextMap: a,
                    allOperations: l,
                    deps: m,
                    options: g
                } = e;
                for (let [e, h] of a.entries()) h.comments = function(e) {
                    let {
                        node: t,
                        spaceId: o,
                        window: n,
                        actor: r,
                        discussionId: i,
                        allOperations: a,
                        deps: l,
                        options: s
                    } = e, m = Array.from(t.querySelectorAll(`span[${N.cmm}="${i}"]`)), g = Date.now(), h = [];
                    for (let e of m) {
                        if (null === e.textContent || 0 === e.textContent.trim().length) continue;
                        let m = e.getAttribute(N[f().Ifu.Comment]);
                        if (!m) continue;
                        let {
                            titleTokens: b
                        } = w({
                            node: e,
                            window: n,
                            stripText: !0,
                            stripSurroundingWhitespace: !0,
                            ignoreComments: !1
                        }), v = e.getAttribute(N.cma);
                        h.push(m);
                        let C = l && s && S({
                                actor: r,
                                parent: {
                                    table: u().SN,
                                    id: m,
                                    spaceId: o
                                },
                                node: t,
                                allOperations: a,
                                deps: l,
                                options: s
                            }),
                            x = {
                                id: m,
                                parent_id: i,
                                parent_table: c().$Y,
                                space_id: o,
                                version: 1,
                                created_time: g,
                                last_edited_time: g,
                                text: b,
                                created_by_table: p().oo,
                                created_by_id: v || r.id,
                                alive: !0,
                                ...C && {
                                    content: C
                                }
                            };
                        a.push(d().op.set({
                            pointer: {
                                table: u().SN,
                                id: m,
                                spaceId: o
                            },
                            path: [],
                            args: x
                        }))
                    }
                    return h
                }({
                    node: t,
                    spaceId: o,
                    window: n,
                    discussionId: e,
                    actor: i,
                    allOperations: l,
                    deps: m,
                    options: g
                }), l.push(d().op.set({
                    pointer: {
                        table: c().$Y,
                        id: e,
                        spaceId: o
                    },
                    path: [],
                    args: h
                }), {
                    pointer: {
                        table: s().ev,
                        id: r,
                        spaceId: o
                    },
                    command: "listAfter",
                    path: ["discussions"],
                    args: {
                        id: e
                    }
                })
            }

            function z(e) {
                let {
                    actor: t,
                    parent: d,
                    nodes: p,
                    allOperations: m,
                    deps: g,
                    htmlParserErrors: b,
                    options: v
                } = e;
                return r().KC(...p.map(e => (function e(t) {
                    let {
                        actor: d,
                        parent: p,
                        node: m,
                        allOperations: g,
                        deps: b,
                        htmlParserErrors: v,
                        options: y
                    } = t, {
                        importFileMap: A,
                        window: I,
                        intl: E,
                        randomID: O,
                        spaceIdCreator: R,
                        blockContentMaxSize: F
                    } = b, {
                        legacyNonCrdt: V,
                        ignoreBlockCount: Q,
                        treatNestedCodeAsCodeBlocks: G,
                        skipTableToCollectionConversion: J,
                        preserveLineBreaksInTableCellsEnabled: Y,
                        addHeadersToCollectionEnabled: K,
                        codePreviewFormat: X,
                        ignoreImages: ee
                    } = y;
                    if (m && m instanceof I.Element) {
                        let t = m.tagName.toLowerCase();
                        if ("div" === t && "page-comments" === m.getAttribute("class")) return [function(e) {
                            var t;
                            let {
                                node: o,
                                parent: n,
                                actor: r,
                                window: i,
                                allOperations: a,
                                deps: l,
                                options: d
                            } = e, u = o.getAttribute(N[f().Ifu.Discussion]) || ((null == (t = l.spaceIdCreator) ? void 0 : t.idInSavedSpace(c().$Y)) ? ? l.randomID()), p = new Map;
                            return p.set(u, {
                                type: "default",
                                id: u,
                                parent_id: n.id,
                                parent_table: s().ev,
                                resolved: !1,
                                space_id: n.spaceId,
                                version: 1
                            }), j({
                                node: o,
                                spaceId: n.spaceId,
                                window: i,
                                blockId: n.id,
                                discussionToTextMap: p,
                                allOperations: a,
                                actor: r,
                                deps: l,
                                options: d
                            }), u
                        }({
                            node: m,
                            window: I,
                            actor: d,
                            allOperations: g,
                            parent: p,
                            deps: b,
                            options: y
                        })];
                        if ("h1" === t) return [T({
                            actor: d,
                            parent: p,
                            node: m,
                            type: a().xd.header,
                            allOperations: g,
                            deps: {
                                window: I,
                                randomID: O,
                                spaceIdCreator: R
                            },
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                stripText: !0,
                                stripSurroundingWhitespace: !0
                            }
                        }), ...S({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                ignoreImages: ee
                            }
                        })];
                        if ("h2" === t) return [T({
                            actor: d,
                            parent: p,
                            node: m,
                            type: a().xd.subHeader,
                            allOperations: g,
                            deps: {
                                window: I,
                                randomID: O,
                                spaceIdCreator: R
                            },
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                stripText: !0,
                                stripSurroundingWhitespace: !0
                            }
                        }), ...S({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                ignoreImages: ee
                            }
                        })];
                        if ("hr" === t) return [function(e) {
                            let {
                                actor: t,
                                parent: n,
                                allOperations: r,
                                deps: {
                                    randomID: i,
                                    spaceIdCreator: l
                                },
                                options: {
                                    legacyNonCrdt: d,
                                    ignoreBlockCount: u
                                }
                            } = e, c = (null == l ? void 0 : l.idInSavedSpace(s().ev)) ? ? i(), {
                                operations: p
                            } = o(993189).zgg.create({
                                id: c,
                                type: a().xd.divider,
                                parentPointer: n,
                                space_id: n.spaceId,
                                createdBy: t,
                                ignore_block_count: !!u || void 0,
                                legacyNonCrdt: d
                            });
                            return r.push(...p), c
                        }({
                            actor: d,
                            parent: p,
                            allOperations: g,
                            deps: {
                                randomID: O,
                                spaceIdCreator: R
                            },
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q
                            }
                        })];
                        if ("h" === t[0]) return [T({
                            actor: d,
                            parent: p,
                            node: m,
                            type: a().xd.subSubHeader,
                            allOperations: g,
                            deps: {
                                window: I,
                                randomID: O,
                                spaceIdCreator: R
                            },
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                stripText: !0,
                                stripSurroundingWhitespace: !0
                            }
                        }), ...S({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                ignoreImages: ee
                            }
                        })];
                        if ("pre" === t || "code" === t || "div" === t && m.className === h) return m.innerHTML.length && F && F > 0 && m.innerHTML.length > F ? [] : [function(e) {
                            var t, n;
                            let {
                                actor: r,
                                parent: i,
                                node: l,
                                allOperations: d,
                                deps: {
                                    randomID: u,
                                    spaceIdCreator: c,
                                    window: p
                                },
                                options: {
                                    legacyNonCrdt: m,
                                    ignoreBlockCount: g,
                                    codePreviewFormat: h
                                }
                            } = e, b = (null == c ? void 0 : c.idInSavedSpace(s().ev)) ? ? u(), v = l.getAttribute(N[a().xd.code]);
                            v || (v = M(null == (t = l.querySelector("code")) || null == (t = t.parentElement) ? void 0 : t.classList)), v || (v = M(null == (n = l.querySelector("code")) ? void 0 : n.classList));
                            let C = v && (0, o(722371).O)(o(804518).fileExtensionToCodeLanguageMap, v) ? o(804518).fileExtensionToCodeLanguageMap[v] : "Plain Text",
                                {
                                    operations: x
                                } = o(993189).zgg.create({
                                    id: b,
                                    type: a().xd.code,
                                    properties: {
                                        title: f().x9d(D(l)),
                                        language: [
                                            [C]
                                        ]
                                    },
                                    format: {
                                        code_wrap: !0,
                                        code_preview_format: h
                                    },
                                    parentPointer: {
                                        id: i.id,
                                        table: i.table,
                                        spaceId: i.spaceId
                                    },
                                    space_id: i.spaceId,
                                    createdBy: r,
                                    ignore_block_count: !!g || void 0,
                                    legacyNonCrdt: m
                                });
                            return d.push(...x), $({
                                node: l,
                                spaceId: i.spaceId,
                                window: p,
                                blockId: b,
                                actor: r,
                                allOperations: d
                            }), b
                        }({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            deps: {
                                randomID: O,
                                spaceIdCreator: R,
                                window: I
                            },
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                codePreviewFormat: X
                            }
                        }), ...S({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                ignoreImages: ee
                            }
                        })];
                        if (m.hasAttribute(N[a().xd.callout])) return [function(e) {
                            let {
                                actor: t,
                                parent: r,
                                node: i,
                                allOperations: l,
                                htmlParserErrors: d,
                                deps: {
                                    importFileMap: u,
                                    window: c,
                                    intl: p,
                                    randomID: f,
                                    spaceIdCreator: m,
                                    randomShortID: g,
                                    isPhoneNumber: h,
                                    addFileIdsToBlock: b
                                },
                                options: {
                                    legacyNonCrdt: v,
                                    ignoreBlockCount: C
                                }
                            } = e, y = (null == m ? void 0 : m.idInSavedSpace(s().ev)) ? ? f(), A = i.getAttribute(N.calloutBackground), I = A ? Z(A) : void 0, E = i.getAttribute(N.calloutIcon), L = E && E.match(n()()) ? E : void 0, {
                                title: S,
                                children: k
                            } = function(e) {
                                let {
                                    node: t,
                                    window: n
                                } = e, r = o(871871).PE(t.childNodes), [i, ...a] = r;
                                if (!i) return {
                                    title: []
                                };
                                if ((e => !!x(n, e) && e instanceof n.HTMLParagraphElement)(i)) {
                                    let {
                                        titleTokens: e
                                    } = w({
                                        node: i,
                                        window: n,
                                        stripText: !1,
                                        stripSurroundingWhitespace: !0,
                                        ignoreComments: !0
                                    });
                                    return {
                                        title: e,
                                        children: a
                                    }
                                }
                                if (!_(i, n)) return {
                                    title: [],
                                    children: r
                                }; {
                                    let {
                                        titleTokens: e
                                    } = w({
                                        node: t,
                                        window: n,
                                        stripText: !1,
                                        stripSurroundingWhitespace: !0,
                                        ignoreComments: !0
                                    });
                                    return {
                                        title: e,
                                        children: void 0
                                    }
                                }
                            }({
                                node: i,
                                window: c
                            }), T = Array.isArray(k) ? z({
                                actor: t,
                                parent: {
                                    table: s().ev,
                                    id: y,
                                    spaceId: r.spaceId
                                },
                                nodes: k,
                                allOperations: l,
                                htmlParserErrors: d,
                                deps: {
                                    importFileMap: u,
                                    window: c,
                                    intl: p,
                                    randomID: f,
                                    spaceIdCreator: m,
                                    randomShortID: g,
                                    isPhoneNumber: h,
                                    addFileIdsToBlock: b
                                },
                                options: {
                                    legacyNonCrdt: v,
                                    ignoreBlockCount: C
                                }
                            }) : [], {
                                operations: P
                            } = o(993189).zgg.create({
                                id: y,
                                type: a().xd.callout,
                                content: T,
                                properties: {
                                    title: S
                                },
                                format: {
                                    block_color: I,
                                    page_icon: L
                                },
                                parentPointer: {
                                    id: r.id,
                                    table: r.table,
                                    spaceId: r.spaceId
                                },
                                space_id: r.spaceId,
                                createdBy: t,
                                ignore_block_count: !!C || void 0,
                                legacyNonCrdt: v
                            });
                            return l.push(...P), $({
                                node: i,
                                spaceId: r.spaceId,
                                window: c,
                                blockId: y,
                                actor: t,
                                allOperations: l
                            }), y
                        }({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            htmlParserErrors: v,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q
                            }
                        })];
                        if ("blockquote" === t) return [function(e) {
                            let {
                                actor: t,
                                parent: n,
                                node: r,
                                allOperations: i,
                                htmlParserErrors: l,
                                deps: {
                                    importFileMap: d,
                                    window: u,
                                    intl: c,
                                    randomID: p,
                                    spaceIdCreator: m,
                                    randomShortID: g,
                                    isPhoneNumber: h,
                                    addFileIdsToBlock: b
                                },
                                options: {
                                    legacyNonCrdt: v,
                                    ignoreBlockCount: C
                                }
                            } = e, N = (null == m ? void 0 : m.idInSavedSpace(s().ev)) ? ? p(), [x, ..._] = o(871871).PE(r.childNodes), y = x instanceof u.Element ? x : void 0, {
                                titleTokens: A,
                                linkMentionBlockIds: I
                            } = y ? w({
                                node: y,
                                window: u,
                                stripText: !1,
                                stripSurroundingWhitespace: !0,
                                ignoreComments: !0,
                                deps: {
                                    randomID: p,
                                    spaceIdCreator: m
                                }
                            }) : {
                                titleTokens: f().x9d(null != x && x.textContent ? x.textContent.trim() : ""),
                                linkMentionBlockIds: []
                            }, E = z({
                                actor: t,
                                parent: {
                                    id: N,
                                    table: s().ev,
                                    spaceId: n.spaceId
                                },
                                nodes: _,
                                allOperations: i,
                                htmlParserErrors: l,
                                deps: {
                                    importFileMap: d,
                                    window: u,
                                    intl: c,
                                    randomID: p,
                                    spaceIdCreator: m,
                                    randomShortID: g,
                                    isPhoneNumber: h,
                                    addFileIdsToBlock: b
                                },
                                options: {
                                    legacyNonCrdt: v,
                                    ignoreBlockCount: C
                                }
                            }), {
                                operations: L
                            } = o(993189).zgg.create({
                                id: N,
                                type: a().xd.quote,
                                properties: {
                                    title: A
                                },
                                content: E,
                                parentPointer: n,
                                space_id: n.spaceId,
                                createdBy: t,
                                ignore_block_count: !!C || void 0,
                                legacyNonCrdt: v
                            });
                            return i.push(...L), y && k({
                                actor: t,
                                parent: n,
                                root: y,
                                linkMentionBlockIds: I,
                                allOperations: i,
                                deps: {
                                    randomID: p,
                                    spaceIdCreator: m
                                },
                                options: {
                                    legacyNonCrdt: v,
                                    ignoreBlockCount: C
                                }
                            }), $({
                                node: r,
                                spaceId: n.spaceId,
                                blockId: N,
                                actor: t,
                                allOperations: i,
                                window: u
                            }), N
                        }({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            htmlParserErrors: v,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q
                            }
                        })];
                        if ("details" === t) return [function(e) {
                            let {
                                actor: t,
                                parent: n,
                                node: r,
                                allOperations: i,
                                htmlParserErrors: l,
                                deps: {
                                    importFileMap: d,
                                    window: u,
                                    intl: c,
                                    randomID: p,
                                    spaceIdCreator: m,
                                    randomShortID: g,
                                    isPhoneNumber: h,
                                    addFileIdsToBlock: b
                                },
                                options: {
                                    legacyNonCrdt: v,
                                    ignoreBlockCount: C
                                }
                            } = e, N = (null == m ? void 0 : m.idInSavedSpace(s().ev)) ? ? p(), x = r.querySelector("summary"), _ = o(871871).PE(r.childNodes).filter(e => e !== x), y = x && x.textContent && (() => {
                                let {
                                    titleTokens: e
                                } = w({
                                    node: x,
                                    window: u,
                                    stripText: !1,
                                    stripSurroundingWhitespace: !0,
                                    ignoreComments: !0,
                                    deps: {
                                        randomID: p,
                                        spaceIdCreator: m
                                    }
                                });
                                return e
                            })(), A = z({
                                actor: t,
                                parent: {
                                    id: N,
                                    table: s().ev,
                                    spaceId: n.spaceId
                                },
                                nodes: _,
                                allOperations: i,
                                htmlParserErrors: l,
                                deps: {
                                    importFileMap: d,
                                    window: u,
                                    intl: c,
                                    randomID: p,
                                    spaceIdCreator: m,
                                    randomShortID: g,
                                    isPhoneNumber: h,
                                    addFileIdsToBlock: b
                                },
                                options: {
                                    legacyNonCrdt: v,
                                    ignoreBlockCount: C
                                }
                            }), {
                                operations: I
                            } = o(993189).zgg.create({
                                id: N,
                                type: a().xd.toggle,
                                content: A,
                                properties: {
                                    title: y || f().x9d("")
                                },
                                parentPointer: n,
                                space_id: n.spaceId,
                                createdBy: t,
                                ignore_block_count: !!C || void 0,
                                legacyNonCrdt: v
                            });
                            return i.push(...I), N
                        }({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            deps: b,
                            htmlParserErrors: v,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q
                            }
                        })];
                        if ("table" === t) {
                            let {
                                tableData: e,
                                tableFiles: n,
                                hasHeaderRow: c,
                                hasHeaderColumn: f
                            } = function(e) {
                                let {
                                    node: t,
                                    window: o,
                                    importFileMap: n,
                                    intl: i,
                                    preserveLineBreaksInTableCellsEnabled: s
                                } = e, d = [], u = [], c = Array.from(t.querySelectorAll("tr")).filter(e => e.closest("table") === t), p = !1, f = !1;
                                if (c.length > 0) {
                                    let e = c[0].querySelectorAll("td, th"),
                                        t = c[0].querySelectorAll("th");
                                    if (p = e.length > 0 && t.length === e.length, f = c.every(e => {
                                            let t = e.querySelector("td, th");
                                            return t && "th" === t.tagName.toLowerCase()
                                        }) && c.length > 0, p && f) {
                                        let e = c[0].querySelector("td, th");
                                        e && "th" === e.tagName.toLowerCase() || (t.length >= c.filter(e => {
                                            let t = e.querySelector("td, th");
                                            return t && "th" === t.tagName.toLowerCase()
                                        }).length ? f = !1 : p = !1)
                                    }
                                }
                                for (let e of c) {
                                    let t = [],
                                        c = [];
                                    for (let i of Array.from(e.querySelectorAll("td, th")).filter(t => t.closest("tr") === e)) {
                                        let e = (i.textContent || "").trim(),
                                            l = W(i.getAttribute("rowspan"), 1),
                                            {
                                                titleTokens: d
                                            } = w({
                                                node: i,
                                                window: o,
                                                stripText: !1,
                                                stripSurroundingWhitespace: !0,
                                                ignoreComments: !0,
                                                preserveLineBreaksInTableCellsEnabled: s
                                            });
                                        t.push({
                                            text: e,
                                            textValue: d,
                                            rowSpan: l
                                        });
                                        let u = W(i.getAttribute("colspan"), 1);
                                        for (let e = 1; e < u; e++) t.push({
                                            text: "",
                                            rowSpan: l
                                        });
                                        let p = L(i);
                                        if (p.length) {
                                            let e = r().oE(p.flatMap(e => {
                                                var t;
                                                let o = e.getAttribute("src") || e.getAttribute(N[a().xd.file]) || e.getAttribute(N[a().xd.audio]) || e.getAttribute(N[a().xd.video]),
                                                    r = e.getAttribute(N.fileAlias);
                                                return o ? {
                                                    name: r || o,
                                                    url: (null == (t = n[o]) ? void 0 : t.secureS3UrlOrAlias) || o
                                                } : void 0
                                            }));
                                            c.push(...e)
                                        }
                                    }
                                    t.length && u.push(t);
                                    let p = l().eQ(c);
                                    d.push({
                                        text: i.formatMessage({
                                            id: "htmlHelpers.table.fileColumnName",
                                            defaultMessage: "Files"
                                        }),
                                        textValue: p
                                    })
                                }
                                for (let e = 0; e < u.length; e++) {
                                    let t = u[e];
                                    for (let o = 0; o < t.length; o++) {
                                        let n = t[o].rowSpan;
                                        if (n > 1)
                                            for (let t = 1; t < n && !(e + t >= u.length); t++) u[e + t].splice(o, 0, {
                                                text: "",
                                                rowSpan: 1
                                            })
                                    }
                                }
                                return {
                                    tableData: u,
                                    tableFiles: d,
                                    hasHeaderRow: p,
                                    hasHeaderColumn: f
                                }
                            }({
                                node: m,
                                window: I,
                                importFileMap: A,
                                intl: E,
                                preserveLineBreaksInTableCellsEnabled: Y
                            });
                            if (!J && n.some(e => {
                                    var t;
                                    return null == (t = e.textValue) ? void 0 : t.length
                                }))
                                for (let t = 0; t < e.length; t++) e[t].push({
                                    text: n[t].text,
                                    textValue: n[t].textValue,
                                    columnType: {
                                        schema: {
                                            type: "file"
                                        },
                                        validate: () => !0,
                                        coerce: i().D_
                                    }
                                });
                            let h = "table";
                            if ((m.hasAttribute("data-import-as-database") || !J && n.some(e => {
                                    var t;
                                    return null == (t = e.textValue) ? void 0 : t.length
                                })) && (h = "collection"), 0 === r().rG(e).length || p.table === o(46241).V || p.table === u().SN) return [];
                            let C = { ...p,
                                table: p.table
                            };
                            try {
                                let t = m.getAttribute("data-pre-generated-block-id") ? ? void 0;
                                return [function(e) {
                                    let {
                                        actor: t,
                                        parent: n,
                                        node: r,
                                        tableData: i,
                                        allOperations: a,
                                        deps: {
                                            intl: l,
                                            randomID: d,
                                            spaceIdCreator: u,
                                            randomShortID: c,
                                            isPhoneNumber: p,
                                            addFileIdsToBlock: f
                                        },
                                        options: {
                                            legacyNonCrdt: m,
                                            ignoreBlockCount: g,
                                            tableType: h,
                                            addHeadersToCollectionEnabled: b,
                                            hasHeaderRow: v,
                                            hasHeaderColumn: C,
                                            preGeneratedBlockId: N
                                        }
                                    } = e, x = N ? ? (null == u ? void 0 : u.idInSavedSpace(s().ev)) ? ? d();
                                    if ("table" === h) {
                                        let {
                                            operations: e
                                        } = (0, o(786221).L5)({
                                            actor: t,
                                            tableId: x,
                                            parent: n,
                                            table: i,
                                            deps: {
                                                randomID: d,
                                                spaceIdCreator: u,
                                                randomShortID: c
                                            },
                                            options: {
                                                legacyNonCrdt: m,
                                                ignoreBlockCount: g,
                                                hasHeaderRow: v,
                                                hasHeaderColumn: C
                                            }
                                        });
                                        a.push(...e)
                                    } else if ("collection" === h) {
                                        let e = r.getAttribute("data-database-title") ? ? "",
                                            {
                                                operations: s
                                            } = (0, o(786221).ph)({
                                                actor: t,
                                                blockType: "collection_view",
                                                root: {
                                                    existing: !1,
                                                    id: x
                                                },
                                                parent: n,
                                                name: e,
                                                format: {
                                                    table_wrap: !0
                                                },
                                                table: i,
                                                deps: {
                                                    intl: l,
                                                    randomID: d,
                                                    spaceIdCreator: u,
                                                    randomShortID: c,
                                                    isPhoneNumber: p,
                                                    addFileIdsToBlock: f ? ? !1
                                                },
                                                options: {
                                                    legacyNonCrdt: m,
                                                    ignoreBlockCount: g,
                                                    useCsvAdaptiveSchema: !0,
                                                    addHeadersToCollectionEnabled: b
                                                }
                                            });
                                        a.push(...s)
                                    }
                                    return x
                                }({
                                    actor: d,
                                    parent: C,
                                    node: m,
                                    tableData: e,
                                    allOperations: g,
                                    deps: b,
                                    options: {
                                        legacyNonCrdt: V,
                                        ignoreBlockCount: Q,
                                        tableType: h,
                                        addHeadersToCollectionEnabled: K,
                                        hasHeaderRow: c,
                                        hasHeaderColumn: f,
                                        preGeneratedBlockId: t
                                    }
                                })]
                            } catch (r) {
                                let e = (0, o(161179).A)(r);
                                if (!v || "CsvImportError" !== e.message) throw r;
                                let n = v.get(t) || 0;
                                return v.set(t, n + 1), []
                            }
                        }
                        if ("div" === t && m.hasAttribute(N[a().xd.columnList])) return [function(e) {
                            let {
                                actor: t,
                                parent: n,
                                node: r,
                                allOperations: i,
                                htmlParserErrors: l,
                                deps: {
                                    importFileMap: d,
                                    window: u,
                                    intl: c,
                                    randomID: p,
                                    spaceIdCreator: f,
                                    randomShortID: m,
                                    isPhoneNumber: g,
                                    addFileIdsToBlock: h
                                },
                                options: {
                                    legacyNonCrdt: b,
                                    ignoreBlockCount: v
                                }
                            } = e, C = (null == f ? void 0 : f.idInSavedSpace(s().ev)) ? ? p(), x = o(871871).PE(r.children).filter(e => e.hasAttribute(N[a().xd.column])).slice(0, 8).map(e => (function(e) {
                                let t, {
                                        actor: n,
                                        parent: r,
                                        node: i,
                                        allOperations: l,
                                        htmlParserErrors: d,
                                        deps: {
                                            importFileMap: u,
                                            window: c,
                                            intl: p,
                                            randomID: f,
                                            spaceIdCreator: m,
                                            randomShortID: g,
                                            isPhoneNumber: h,
                                            addFileIdsToBlock: b
                                        },
                                        options: {
                                            legacyNonCrdt: v,
                                            ignoreBlockCount: C
                                        }
                                    } = e,
                                    x = (null == m ? void 0 : m.idInSavedSpace(s().ev)) ? ? f(),
                                    _ = i.getAttribute(N[a().xd.column]);
                                if (null !== _) {
                                    let e = parseFloat(_);
                                    !Number.isNaN(e) && e > 0 && e <= 1 && (t = e)
                                }
                                let y = z({
                                        actor: n,
                                        parent: {
                                            id: x,
                                            table: s().ev,
                                            spaceId: r.spaceId
                                        },
                                        nodes: o(871871).PE(i.children),
                                        allOperations: l,
                                        htmlParserErrors: d,
                                        deps: {
                                            importFileMap: u,
                                            window: c,
                                            intl: p,
                                            randomID: f,
                                            spaceIdCreator: m,
                                            randomShortID: g,
                                            isPhoneNumber: h,
                                            addFileIdsToBlock: b
                                        },
                                        options: {
                                            legacyNonCrdt: v,
                                            ignoreBlockCount: C
                                        }
                                    }),
                                    {
                                        operations: A
                                    } = o(993189).zgg.create({
                                        id: x,
                                        type: a().xd.column,
                                        format: {
                                            column_ratio: t
                                        },
                                        content: y,
                                        parentPointer: r,
                                        space_id: r.spaceId,
                                        createdBy: n,
                                        ignore_block_count: !!C || void 0,
                                        legacyNonCrdt: v
                                    });
                                return l.push(...A), x
                            })({
                                actor: t,
                                parent: {
                                    id: C,
                                    table: s().ev,
                                    spaceId: n.spaceId
                                },
                                node: e,
                                allOperations: i,
                                htmlParserErrors: l,
                                deps: {
                                    importFileMap: d,
                                    window: u,
                                    intl: c,
                                    randomID: p,
                                    spaceIdCreator: f,
                                    randomShortID: m,
                                    isPhoneNumber: g,
                                    addFileIdsToBlock: h
                                },
                                options: {
                                    legacyNonCrdt: b,
                                    ignoreBlockCount: v
                                }
                            })), {
                                operations: _
                            } = o(993189).zgg.create({
                                id: C,
                                type: a().xd.columnList,
                                content: x,
                                parentPointer: n,
                                space_id: n.spaceId,
                                createdBy: t,
                                ignore_block_count: !!v || void 0,
                                legacyNonCrdt: b
                            });
                            return i.push(..._), C
                        }({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            htmlParserErrors: v,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q
                            }
                        })];
                        if ("nav" === t && m.hasAttribute(N[a().xd.tableOfContents])) return [function(e) {
                            let {
                                actor: t,
                                parent: n,
                                allOperations: r,
                                deps: {
                                    randomID: i,
                                    spaceIdCreator: l
                                },
                                options: {
                                    legacyNonCrdt: d,
                                    ignoreBlockCount: u
                                }
                            } = e, c = (null == l ? void 0 : l.idInSavedSpace(s().ev)) ? ? i(), {
                                operations: p
                            } = o(993189).zgg.create({
                                id: c,
                                type: a().xd.tableOfContents,
                                format: {
                                    block_color: "gray"
                                },
                                parentPointer: n,
                                space_id: n.spaceId,
                                createdBy: t,
                                ignore_block_count: !!u || void 0,
                                legacyNonCrdt: d
                            });
                            return r.push(...p), c
                        }({
                            actor: d,
                            parent: p,
                            allOperations: g,
                            deps: {
                                randomID: O,
                                spaceIdCreator: R
                            },
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q
                            }
                        }), ...S({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                ignoreImages: ee
                            }
                        })];
                        if ("ul" === t || "ol" === t) return r().KC(...Array.from(m.children).map(t => e({
                            actor: d,
                            parent: p,
                            node: t,
                            allOperations: g,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q
                            }
                        })));
                        if ("li" === t || q.test(m.textContent || "") || H.test(m.textContent || "") || U.test(m.textContent || "")) return [function(e) {
                            let t, {
                                    actor: n,
                                    parent: r,
                                    node: i,
                                    allOperations: l,
                                    htmlParserErrors: d,
                                    deps: {
                                        importFileMap: u,
                                        window: c,
                                        intl: p,
                                        randomID: m,
                                        spaceIdCreator: g,
                                        randomShortID: h,
                                        isPhoneNumber: b,
                                        addFileIdsToBlock: v
                                    },
                                    options: {
                                        legacyNonCrdt: C,
                                        ignoreBlockCount: x
                                    }
                                } = e,
                                y = (null == g ? void 0 : g.idInSavedSpace(s().ev)) ? ? m(),
                                A = c.document.createElement("span"),
                                I = [];
                            o(871871).PE(i.childNodes).forEach((e, t) => {
                                var o, n, r, i, l;
                                (o = e) instanceof c.Element && "a" === o.tagName.toLowerCase() && o.hasAttribute("data-confluence-web-image") || 0 === t && (n = e) instanceof c.Element && "a" === n.tagName.toLowerCase() && n.hasAttribute(N[a().xd.file]) ? I.push(e) : 0 === t && !((r = e) instanceof c.Element && "img" === r.tagName.toLowerCase() || (i = e) instanceof c.Element && "video" === i.tagName.toLowerCase() || (l = e) instanceof c.Element && "audio" === l.tagName.toLowerCase()) || _(e, c) ? (A.appendChild(e), e instanceof c.Element && L(e).forEach(e => I.push(e))) : I.push(e)
                            });
                            let E = z({
                                    actor: n,
                                    parent: {
                                        id: y,
                                        table: s().ev,
                                        spaceId: r.spaceId
                                    },
                                    nodes: I,
                                    allOperations: l,
                                    htmlParserErrors: d,
                                    deps: {
                                        importFileMap: u,
                                        window: c,
                                        intl: p,
                                        randomID: m,
                                        spaceIdCreator: g,
                                        randomShortID: h,
                                        isPhoneNumber: b,
                                        addFileIdsToBlock: v
                                    },
                                    options: {
                                        legacyNonCrdt: C,
                                        ignoreBlockCount: x
                                    }
                                }),
                                S = q.test(A.textContent || ""),
                                k = H.test(A.textContent || "");
                            t = S || k ? a().xd.toDo : i.parentNode instanceof c.Element && "ol" === i.parentNode.tagName.toLowerCase() ? a().xd.numberedList : a().xd.bulletedList;
                            let T = !1;
                            t === a().xd.toDo && S && (T = !0);
                            let {
                                titleTokens: P
                            } = w({
                                node: A,
                                window: c,
                                stripText: !0,
                                stripSurroundingWhitespace: !0,
                                ignoreComments: !0,
                                deps: {
                                    randomID: m,
                                    spaceIdCreator: g
                                }
                            }), {
                                operations: D
                            } = o(993189).zgg.create({
                                id: y,
                                type: t,
                                content: E,
                                properties: {
                                    title: P,
                                    checked: T ? f().x9d(o(745680).I1) : void 0
                                },
                                parentPointer: r,
                                space_id: r.spaceId,
                                createdBy: n,
                                ignore_block_count: !!x || void 0,
                                legacyNonCrdt: C
                            });
                            return l.push(...D), $({
                                node: A,
                                spaceId: r.spaceId,
                                blockId: y,
                                actor: n,
                                allOperations: l,
                                window: c
                            }), y
                        }({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            htmlParserErrors: v,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q
                            }
                        })];
                        if ("img" === t) {
                            if (ee) return [];
                            let e = m.getAttribute("src");
                            if (e && !ee) return [function(e) {
                                let t, {
                                    actor: n,
                                    parent: r,
                                    source: i,
                                    allOperations: l,
                                    deps: {
                                        randomID: d,
                                        spaceIdCreator: u
                                    },
                                    options: {
                                        legacyNonCrdt: c,
                                        ignoreBlockCount: p,
                                        fallbackWidth: m
                                    },
                                    node: g
                                } = e;
                                "image" === i.type && i.width ? t = Math.min(i.width, 700) : m && (t = Math.min(m, 700));
                                let h = (null == u ? void 0 : u.idInSavedSpace(s().ev)) ? ? d(),
                                    b = g.getAttribute("alt"),
                                    v = {
                                        source: f().x9d(i.secureS3UrlOrAlias)
                                    };
                                b && (v.alt_text = f().x9d(b));
                                let C = g.getAttribute("data-caption");
                                C && (v.caption = f().x9d(C));
                                let {
                                    model: N,
                                    operations: x
                                } = o(993189).zgg.create({
                                    id: h,
                                    type: a().xd.image,
                                    properties: v,
                                    format: {
                                        block_width: t
                                    },
                                    parentPointer: r,
                                    space_id: r.spaceId,
                                    createdBy: n,
                                    ignore_block_count: !!p || void 0,
                                    legacyNonCrdt: c
                                });
                                return l.push(...x, N.DEPRECATED_DONT_CALL_WILL_BE_REMOVED_IN_Q2_2025___getSecureFilesUpdate("", "")), h
                            }({
                                actor: d,
                                parent: p,
                                source: A[e] || {
                                    type: "unknown",
                                    secureS3UrlOrAlias: e
                                },
                                allOperations: g,
                                deps: {
                                    randomID: O,
                                    spaceIdCreator: R
                                },
                                options: {
                                    legacyNonCrdt: V,
                                    ignoreBlockCount: Q,
                                    fallbackWidth: m instanceof I.HTMLImageElement ? m.width : void 0
                                },
                                node: m
                            })]
                        }
                        if ("a" === t && m.getAttribute(N[a().xd.externalObjectInstance])) {
                            let e = B({
                                actor: d,
                                parent: p,
                                node: m,
                                allOperations: g,
                                deps: {
                                    randomID: O,
                                    spaceIdCreator: R
                                },
                                options: {
                                    legacyNonCrdt: V,
                                    ignoreBlockCount: Q
                                }
                            });
                            return e ? [e] : []
                        }
                        if ("a" === t && m.getAttribute(N[a().xd.embed])) {
                            let e = m.getAttribute("href");
                            if (e) return [P({
                                actor: d,
                                parent: p,
                                source: {
                                    type: "unknown",
                                    secureS3UrlOrAlias: e,
                                    height: 400
                                },
                                allOperations: g,
                                deps: {
                                    randomID: O,
                                    spaceIdCreator: R
                                },
                                options: {
                                    legacyNonCrdt: V,
                                    ignoreBlockCount: Q
                                }
                            })]
                        }
                        if ("a" === t && m.getAttribute(N[a().xd.file])) return [function(e) {
                            let {
                                actor: t,
                                parent: n,
                                node: r,
                                allOperations: i,
                                deps: {
                                    importFileMap: l,
                                    randomID: d,
                                    spaceIdCreator: u
                                },
                                options: {
                                    legacyNonCrdt: c,
                                    ignoreBlockCount: p
                                }
                            } = e, m = r.getAttribute(N[a().xd.file]) || "", g = l[m] ? l[m].secureS3UrlOrAlias : m, h = r.getAttribute(N.fileAlias) || "";
                            if (!h && g.lastIndexOf("/") >= 0) h = g.substring(g.lastIndexOf("/") + 1);
                            else if (!h) {
                                let e = (0, o(728601)._2)(g);
                                e && (h = e.fileName)
                            }
                            let b = (null == u ? void 0 : u.idInSavedSpace(s().ev)) ? ? d(),
                                {
                                    model: v,
                                    operations: C
                                } = o(993189).zgg.create({
                                    createdBy: t,
                                    id: b,
                                    parentPointer: {
                                        id: n.id,
                                        table: n.table,
                                        spaceId: n.spaceId
                                    },
                                    space_id: n.spaceId,
                                    properties: {
                                        source: f().x9d(g),
                                        title: f().x9d(h)
                                    },
                                    type: a().xd.file,
                                    ignore_block_count: !!p || void 0,
                                    legacyNonCrdt: c
                                });
                            return i.push(...C, v.DEPRECATED_DONT_CALL_WILL_BE_REMOVED_IN_Q2_2025___getSecureFilesUpdate("", "")), b
                        }({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            deps: {
                                importFileMap: A,
                                randomID: O,
                                spaceIdCreator: R
                            },
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q
                            }
                        })];
                        if ("a" === t && 0 === o(871871).PE(m.childNodes).length) {
                            let e = m.getAttribute("href");
                            if (m.hasAttribute("download") && e) return [P({
                                actor: d,
                                parent: p,
                                source: A[e] || {
                                    type: "unknown",
                                    secureS3UrlOrAlias: e
                                },
                                allOperations: g,
                                deps: {
                                    randomID: O,
                                    spaceIdCreator: R
                                },
                                options: {
                                    legacyNonCrdt: V,
                                    ignoreBlockCount: Q
                                }
                            })]
                        }
                        if ("video" === t) {
                            let e = m.querySelector("source");
                            if (e) {
                                let t = e.getAttribute("src");
                                if (t && o(939438).L_({
                                        url: t
                                    })) return [P({
                                    actor: d,
                                    parent: p,
                                    source: {
                                        type: "unknown",
                                        secureS3UrlOrAlias: t
                                    },
                                    allOperations: g,
                                    deps: {
                                        randomID: O,
                                        spaceIdCreator: R
                                    },
                                    options: {
                                        legacyNonCrdt: V,
                                        ignoreBlockCount: Q
                                    }
                                })]
                            }
                        }
                        if ("audio" === t) {
                            let e = m.querySelector("source");
                            if (e) {
                                let t = e.getAttribute("src");
                                if (t && o(939438).ck({
                                        url: t
                                    })) return [P({
                                    actor: d,
                                    parent: p,
                                    source: {
                                        type: "unknown",
                                        secureS3UrlOrAlias: t
                                    },
                                    allOperations: g,
                                    deps: {
                                        randomID: O,
                                        spaceIdCreator: R
                                    },
                                    options: {
                                        legacyNonCrdt: V,
                                        ignoreBlockCount: Q
                                    }
                                })]
                            }
                        }
                        if ("iframe" === t) {
                            let e = m.getAttribute("src");
                            if (e) return [function(e) {
                                let t, {
                                        actor: n,
                                        parent: r,
                                        node: i,
                                        sourceUrl: a,
                                        allOperations: l,
                                        deps: {
                                            randomID: d,
                                            spaceIdCreator: u
                                        },
                                        options: {
                                            legacyNonCrdt: c,
                                            ignoreBlockCount: p
                                        }
                                    } = e,
                                    m = C(i.getAttribute("height")),
                                    g = C(i.getAttribute("width")),
                                    h = (null == u ? void 0 : u.idInSavedSpace(s().ev)) ? ? d();
                                try {
                                    t = new URL(a)
                                } catch (e) {
                                    t = a
                                }
                                let b = o(939438).WT({
                                        url: a,
                                        baseUrl: t instanceof URL ? t.origin : t,
                                        publicDomainName: ""
                                    }),
                                    {
                                        operations: v
                                    } = o(993189).zgg.create({
                                        id: h,
                                        type: b,
                                        properties: {
                                            source: f().x9d(a)
                                        },
                                        format: {
                                            block_width: g,
                                            block_height: m,
                                            block_full_width: !1,
                                            block_page_width: !(g || m),
                                            block_preserve_scale: !0
                                        },
                                        parentPointer: r,
                                        space_id: r.spaceId,
                                        createdBy: n,
                                        ignore_block_count: !!p || void 0,
                                        legacyNonCrdt: c
                                    });
                                return l.push(...v), h
                            }({
                                actor: d,
                                parent: p,
                                node: m,
                                sourceUrl: e,
                                allOperations: g,
                                deps: {
                                    randomID: O,
                                    spaceIdCreator: R
                                },
                                options: {
                                    legacyNonCrdt: V,
                                    ignoreBlockCount: Q
                                }
                            })]
                        }
                        return "p" === t && m.getAttribute("confluenceNewLine") ? [T({
                            actor: d,
                            parent: p,
                            node: m,
                            type: a().xd.text,
                            allOperations: g,
                            deps: {
                                window: I,
                                randomID: O,
                                spaceIdCreator: R
                            },
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                stripText: !0,
                                stripSurroundingWhitespace: !0
                            }
                        })] : m.hasAttribute(N[a().xd.equation]) ? [function(e) {
                            let {
                                actor: t,
                                parent: n,
                                node: r,
                                allOperations: i,
                                deps: {
                                    randomID: l,
                                    spaceIdCreator: d
                                },
                                options: {
                                    legacyNonCrdt: u,
                                    ignoreBlockCount: c
                                }
                            } = e, p = (null == d ? void 0 : d.idInSavedSpace(s().ev)) ? ? l(), {
                                operations: m
                            } = o(993189).zgg.create({
                                id: p,
                                type: a().xd.equation,
                                properties: {
                                    title: f().x9d(D(r))
                                },
                                parentPointer: n,
                                space_id: n.spaceId,
                                createdBy: t,
                                ignore_block_count: !!c || void 0,
                                legacyNonCrdt: u
                            });
                            return i.push(...m), p
                        }({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            deps: {
                                randomID: O,
                                spaceIdCreator: R
                            },
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q
                            }
                        })] : [.../^\s*$/g.test(m.textContent || "") ? [] : [T({
                            actor: d,
                            parent: p,
                            node: m,
                            type: a().xd.text,
                            allOperations: g,
                            deps: {
                                window: I,
                                randomID: O,
                                spaceIdCreator: R
                            },
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                stripText: !1,
                                stripSurroundingWhitespace: !0,
                                ignoreCodeBlock: G
                            }
                        })], ...S({
                            actor: d,
                            parent: p,
                            node: m,
                            allOperations: g,
                            deps: b,
                            options: {
                                legacyNonCrdt: V,
                                ignoreBlockCount: Q,
                                considerCodeBlockAsNonTextItem: G,
                                ignoreImages: ee
                            }
                        })]
                    }
                    return []
                })({
                    actor: t,
                    parent: d,
                    node: e,
                    allOperations: m,
                    deps: g,
                    htmlParserErrors: b,
                    options: v
                })))
            }

            function W(e, t) {
                let o = null !== e ? parseInt(e, 10) : t;
                return isFinite(o) ? o : t
            }

            function R(e, t, o) {
                let n = o.document.createElement(t);
                for (; e.firstChild;) n.appendChild(e.firstChild);
                for (let t = e.attributes.length - 1; t >= 0; --t) {
                    let o = e.attributes[t];
                    n.setAttribute(o.name, o.value)
                }
                return e.parentNode && e.parentNode.replaceChild(n, e), n
            }

            function F(e, t, o) {
                let n = o.document.createElement(t);
                for (; e.firstChild;) n.appendChild(e.firstChild);
                e.appendChild(n)
            }

            function V(e) {
                let t = [],
                    o = e;
                for (; e.firstChild;) {
                    let n = e.firstChild;
                    t.push(n), e.parentNode && e.parentNode.insertBefore(n, o.nextSibling), o = n
                }
                let n = e.parentNode;
                return n && (n.removeChild(e), n.normalize()), t
            }

            function Q(e) {
                let {
                    rootNode: t,
                    window: n,
                    isInlineContent: r,
                    emojiData: i
                } = e;
                ! function(e) {
                    let {
                        rootNode: t,
                        window: o,
                        emojiData: {
                            emojiByName: n
                        }
                    } = e;
                    for (let e of Array.from(t.querySelectorAll("img[data-stringify-emoji]"))) {
                        let t = e.getAttribute("data-stringify-emoji") || "",
                            r = t.match(/^:(.+):$/);
                        if (!r || !e.parentNode) continue;
                        let i = n[r[1]] || t;
                        e.parentNode.replaceChild(o.document.createTextNode(i), e)
                    }
                }({
                    rootNode: t,
                    window: n,
                    emojiData: i
                }), t.normalize(),
                    function(e, t) {
                        ! function(e, t) {
                            for (let o of Array.from(e.querySelectorAll("p"))) {
                                let e = o.firstChild,
                                    n = 0;
                                for (; e && n < 1e4;) {
                                    let r = !1;
                                    if (e instanceof t.Element && null !== e.textContent && !e.textContent.trim()) {
                                        let t = Array.from(e.querySelectorAll("br"));
                                        if (t.length > 0) {
                                            for (let n of t) o.insertBefore(n, e);
                                            r = !0
                                        }
                                    }
                                    let i = e.nextSibling;
                                    r && o.removeChild(e), e = i, n += 1
                                }
                            }
                        }(e, t);
                        let o = Array.from(e.querySelectorAll("p"));
                        for (let e = 0; e < 1e4; e++) {
                            let e = o.shift();
                            if (!e || !e.parentNode) return;
                            let n = e.querySelector("br");
                            if (!n || n.parentElement !== e) continue;
                            let r = t.document.createElement("p");
                            e.parentNode.insertBefore(r, e.nextSibling);
                            let i = n.nextSibling;
                            for (; i;) {
                                let e = i.nextSibling;
                                r.appendChild(i), i = e
                            }
                            e.removeChild(n), o.unshift(r)
                        }
                    }(t, n);
                let a = o(871871).PE(t.childNodes);
                for (; a.length > 0;) {
                    let e = a.shift();
                    e && ! function(e) {
                        let {
                            window: t,
                            nodes: n
                        } = e, r = e.node;
                        if (r instanceof t.Element && r.parentNode && "google-sheets-html-origin" === r.tagName.toLowerCase()) {
                            let e = o(871871).PE(r.childNodes);
                            for (let t of e) r.parentNode.insertBefore(t, r);
                            n.unshift(...e), r.remove();
                            return
                        }
                        if (r && r.parentNode && 3 === r.nodeType && /^( |\t)*(\n)+( |\t)*$/.test(r.data) || r && r instanceof t.Element && r.parentNode && g[r.tagName.toLowerCase()]) return r.parentNode.removeChild(r);
                        if (r instanceof t.HTMLElement) {
                            let e = function(e) {
                                    if (e && -1 !== e.indexOf("px") || e && -1 !== e.indexOf("pt")) return parseInt(e)
                                }(r.style.fontSize || void 0),
                                o = function(e) {
                                    if (e && -1 !== e.indexOf("em")) return parseInt(e)
                                }(r.style.fontSize || void 0);
                            e && e >= 24 ? r = R(r, "h1", t) : o && o > 2 && (r = R(r, "h1", t))
                        }
                        if (r instanceof t.HTMLElement && ("line-through" === r.style.textDecoration && F(r, "del", t), "italic" === r.style.fontStyle && F(r, "em", t), ("bold" === r.style.fontWeight || r.style.fontWeight && parseInt(r.style.fontWeight) >= 500) && F(r, "strong", t)), r instanceof t.HTMLImageElement) {
                            let e = function(e) {
                                let t = e.match(/^([0-9]+)px$/i);
                                if (t) return parseInt(t[1])
                            }(r.style.width);
                            !r.width && e && (r.width = e)
                        }
                        if (r instanceof t.HTMLElement && ("b" === r.tagName.toLowerCase() ? r = R(r, "strong", t) : "i" === r.tagName.toLowerCase() && (r = R(r, "em", t))), r instanceof t.HTMLElement && "strong" === r.tagName.toLowerCase() && "normal" === r.style.fontWeight && (r = R(r, "span", t)), r instanceof t.HTMLElement && ("section" === r.tagName.toLowerCase() || "article" === r.tagName.toLowerCase()) && (r = R(r, "div", t)), r instanceof t.HTMLElement && "div" === r.tagName.toLowerCase() && "inline" === r.style.display && (r = R(r, "span", t)), r instanceof t.HTMLInputElement && "input" === r.tagName.toLowerCase() && "checkbox" === r.type) {
                            let e = r.checked,
                                o = r.parentNode,
                                i = t.document.createElement("span");
                            i.textContent = `[${e?"x":" "}] `, o && (o.insertBefore(i, r), o.removeChild(r)), n.push(i);
                            return
                        }
                        if (r instanceof t.HTMLElement && "table" === r.tagName.toLowerCase() && !r.classList.contains("simple-table")) {
                            let e = Array.from(r.querySelectorAll("tr")).map(e => e.querySelectorAll("td, th"));
                            if (e.every(e => 1 === e.length)) {
                                let o = t.document.createDocumentFragment();
                                for (let r of e) {
                                    let e = r[0],
                                        i = e.childNodes.length;
                                    for (let t = 0; t < i; t += 1) {
                                        let r = e.childNodes[t];
                                        r && (o.appendChild(r.cloneNode(!0)), n.push(r))
                                    }
                                    o.appendChild(t.document.createElement("hr"))
                                }
                                r.parentNode && r.parentNode.replaceChild(o, r)
                            }
                        }
                        if (r instanceof t.HTMLElement && ("ul" === r.tagName.toLowerCase() || "ol" === r.tagName.toLowerCase()) && r.parentNode instanceof t.HTMLElement && ("ul" === r.parentNode.tagName.toLowerCase() || "ol" === r.parentNode.tagName.toLowerCase()) && r.previousSibling instanceof t.HTMLElement && "li" === r.previousSibling.tagName.toLowerCase() && r.previousSibling.appendChild(r), r instanceof t.Element && (r.removeAttribute("style"), r.removeAttribute("dir")), r instanceof t.Element && "span" === r.tagName.toLowerCase()) {
                            var i;
                            if ("page-comment" === r.getAttribute("class") || null != (i = r.getAttribute("class")) && i.split(" ").includes("retain-span")) return;
                            (r.hasAttribute(N[f().Ifu.Highlight]) || r.hasAttribute(N[f().Ifu.Discussion]) || r.hasAttribute(N[f().Ifu.Comment]) || r.hasAttribute(N[f().Ifu.Equation]) ? Array.from(r.children) : V(r)).forEach(e => n.push(e))
                        } else {
                            if (r instanceof t.Element && ("pre" === r.tagName.toLowerCase() || "code" === r.tagName.toLowerCase())) return;
                            r && o(871871).PE(r.childNodes).forEach(e => n.push(e))
                        }
                    }({
                        window: n,
                        nodes: a,
                        node: e
                    })
                }
                for (o(871871).PE(t.childNodes).forEach(e => a.push(e)); a.length > 0;) {
                    let e = a.shift();
                    e && ! function(e) {
                        let {
                            window: t,
                            nodes: n
                        } = e, r = e.node;
                        if (G(r, t) && Array.from(r.childNodes).every(e => e instanceof t.Element && "h1" === e.tagName.toLowerCase())) {
                            let e = t.document.createElement("h1");
                            for (let t of Array.from(r.childNodes))
                                for (let o of Array.from(t.childNodes)) {
                                    let t = o.cloneNode(!0);
                                    t && e.appendChild(t)
                                }
                            let o = r.parentNode;
                            if (o) {
                                if ("td" === r.tagName.toLowerCase() || "th" === r.tagName.toLowerCase()) {
                                    let n = t.document.createElement(r.tagName.toLowerCase());
                                    n.appendChild(e), o.insertBefore(n, r)
                                } else o.insertBefore(e, r);
                                o.removeChild(r)
                            }
                            n.push(e);
                            return
                        }
                        if (G(r, t) && Array.from(r.childNodes).every(e => e instanceof t.Element && "h2" === e.tagName.toLowerCase())) {
                            let e = t.document.createElement("h2");
                            for (let t of Array.from(r.childNodes))
                                for (let o of Array.from(t.childNodes)) {
                                    let t = o.cloneNode(!0);
                                    t && e.appendChild(t)
                                }
                            let o = r.parentNode;
                            if (o) {
                                if ("td" === r.tagName.toLowerCase() || "th" === r.tagName.toLowerCase()) {
                                    let n = t.document.createElement(r.tagName.toLowerCase());
                                    n.appendChild(e), o.insertBefore(n, r)
                                } else o.insertBefore(e, r);
                                o.removeChild(r)
                            }
                            n.push(e);
                            return
                        }
                        r instanceof t.HTMLElement && ("div" === r.tagName.toLowerCase() || "span" === r.tagName.toLowerCase()) && r.parentNode && 0 === r.childNodes.length ? r.parentNode.removeChild(r) : G(r, t) && ("p" === r.tagName.toLowerCase() || "div" === r.tagName.toLowerCase() || "figure" === r.tagName.toLowerCase()) && o(871871).PE(r.childNodes).some(e => e instanceof t.Element && ("p" === e.tagName.toLowerCase() || "div" === e.tagName.toLowerCase() || "img" === e.tagName.toLowerCase() || "ul" === e.tagName.toLowerCase() || "ol" === e.tagName.toLowerCase() || "table" === e.tagName.toLowerCase() || "hr" === e.tagName.toLowerCase() || "video" === e.tagName.toLowerCase() || "iframe" === e.tagName.toLowerCase())) ? V(r).forEach(e => n.push(e)) : r && r.childNodes && o(871871).PE(r.childNodes).forEach(e => n.push(e))
                    }({
                        node: e,
                        window: n,
                        nodes: a
                    })
                }
                t.normalize(), r || o(871871).PE(t.childNodes).forEach(e => {
                    if (3 === e.nodeType) {
                        let o = n.document.createElement("p");
                        t.insertBefore(o, e), o.appendChild(e)
                    }
                })
            }

            function G(e, t) {
                return !(!(e instanceof t.Element) || 0 === e.childNodes.length || e.hasAttribute(N[a().xd.columnList]) || e.hasAttribute(N[a().xd.column]) || e.hasAttribute(N[a().xd.callout]))
            }

            function J(e) {
                let {
                    actor: t,
                    parent: n,
                    rootNode: r,
                    deps: i,
                    htmlParserErrors: a,
                    options: l
                } = e;
                Q({
                    rootNode: r,
                    window: i.window,
                    isInlineContent: !1,
                    emojiData: i.emojiData
                });
                let s = [],
                    d = z({
                        actor: t,
                        parent: n,
                        nodes: o(871871).PE(r.children),
                        allOperations: s,
                        deps: i,
                        htmlParserErrors: a,
                        options: l
                    });
                return {
                    allOperations: s,
                    rootContentIds: d
                }
            }

            function Y(e) {
                let {
                    node: t,
                    window: o,
                    stripText: n,
                    stripSurroundingWhitespace: r,
                    emojiData: i
                } = e;
                Q({
                    rootNode: t,
                    window: o,
                    isInlineContent: !0,
                    emojiData: i
                });
                let {
                    titleTokens: a
                } = w({
                    node: t,
                    window: o,
                    stripText: n,
                    stripSurroundingWhitespace: r,
                    ignoreComments: !0
                });
                return a
            }

            function K(e) {
                let {
                    node: t,
                    window: o,
                    emojiData: n
                } = e;
                return Q({
                        rootNode: t,
                        window: o,
                        isInlineContent: !1,
                        emojiData: n
                    }),
                    function e(t, o) {
                        let n = t.tagName.toLowerCase();
                        if (!X.has(n) || "div" === n && (t.className === h || t.hasAttribute(N[a().xd.columnList]))) return !0;
                        for (let n of Array.from(t.childNodes))
                            if (x(o, n) && e(n, o)) return !0;
                        return !1
                    }(t, o)
            }
            let X = new Set(["span", "div", "p"]);

            function Z(e) {
                if ("default" === e || "gray" === e || "brown" === e || "orange" === e || "yellow" === e || "teal" === e || "blue" === e || "purple" === e || "pink" === e || "red" === e || "gray_background" === e || "brown_background" === e || "orange_background" === e || "yellow_background" === e || "teal_background" === e || "blue_background" === e || "purple_background" === e || "pink_background" === e || "red_background" === e) return e
            }
        }
    }
]);