"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [93430], {
        220753: (e, t, r) => {
            r.d(t, {
                D: () => i
            });
            class i {
                lastTickTimeMs;
                tickIntervalMs;
                constructor(e = 1e3) {
                    this.lastTickTimeMs = Date.now(), this.tickIntervalMs = e
                }
                async maybeYield() {
                    let e = Date.now();
                    e - this.lastTickTimeMs > this.tickIntervalMs && (await (0, r(975162).bT)(), this.lastTickTimeMs = e)
                }
            }
        },
        593430: (e, t, r) => {
            r.d(t, {
                oV: () => f,
                TG: () => u,
                uY: () => R,
                Z4: () => S,
                V$: () => C,
                ZR: () => T
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(430670), r(581454), r(737550);
            var i = r.n(r(625473)),
                n = () => r(381453),
                l = () => r(722371),
                o = () => r(369516),
                c = () => r(409477),
                a = () => r(247438);

            function u(e) {
                let t = a()._XS(e);
                if ("a" === t) return "[";
                if ("b" === t) return "**";
                if ("i" === t) return "*";
                if ("c" === t) return "`";
                if ("s" === t) return "~~";
                else if ("e" === t) return "$";
                else return ""
            }

            function f(e, t, i) {
                let n = a()._XS(e);
                if (a().sh$(e)) {
                    let n = a().cQR(e),
                        l = (0, r(430733).lX)({ ...i,
                            url: n
                        }),
                        o = l ? t({
                            toPageId: l
                        }) : n;
                    return `](${o||""})`
                }
                if ("b" === n) return "**";
                if ("i" === n) return "*";
                if ("c" === n) return "`";
                if ("s" === n) return "~~";
                else if ("e" === n) return "$";
                else return ""
            }

            function d(e) {
                let t = /^\s+/.exec(e);
                return t ? t[0] : ""
            }

            function s(e) {
                let t = /\s+$/.exec(e);
                return t ? t[0] : ""
            }

            function p(e) {
                let t = s(e);
                return t.length > 0 ? e.slice(0, -1 * t.length) : e
            }

            function k(e) {
                let {
                    block: t,
                    exportArgs: i
                } = e;
                return T({
                    textValue: a().RQ(r(993189).Bj6.fromBlock(t).getNonCollectionProperty("title")),
                    exportArgs: i
                })
            }

            function x(e) {
                let {
                    block: t,
                    exportArgs: i
                } = e, {
                    getRecordValue: l
                } = i, o = t && t.content ? t.content : [];
                return n().oE(o.map(t => L({
                    block: l({
                        table: r(682956).ev,
                        id: t
                    }),
                    exportArgs: { ...i,
                        blockId: t
                    },
                    visitedBlock: e.visitedBlock
                })))
            }

            function m(e) {
                return e.split("\n")
            }

            function b(e) {
                let {
                    block: t,
                    exportArgs: i
                } = e, n = a().RQ(r(993189).Bj6.fromBlock(t).getNonCollectionProperty("caption"));
                return n.length > 0 ? [{
                    text: T({
                        textValue: n,
                        exportArgs: i
                    }),
                    breakLines: !0,
                    children: []
                }] : []
            }

            function g(e) {
                let {
                    block: t,
                    exportArgs: i
                } = e;
                return T({
                    textValue: a().RQ(r(993189).Bj6.fromBlock(t).getNonCollectionProperty("caption")),
                    exportArgs: i
                })
            }

            function v(e) {
                return {
                    text: "",
                    breakLines: !0,
                    children: x(e)
                }
            }

            function h() {}

            function _(e) {
                var t;
                let {
                    block: r,
                    exportArgs: i
                } = e;
                return {
                    text: `# ${k({block:r,exportArgs:i}).trim()}`,
                    prefix: null == (t = i.getPrefixForBlock) ? void 0 : t.call(i, r),
                    breakLines: !0,
                    children: x(e)
                }
            }

            function $(e) {
                var t;
                let {
                    block: r,
                    exportArgs: i
                } = e;
                return {
                    text: `- ${k({block:r,exportArgs:i}).trim()}`,
                    prefix: null == (t = i.getPrefixForBlock) ? void 0 : t.call(i, r),
                    breakLines: !1,
                    childrenPrefix: y,
                    children: x(e)
                }
            }

            function B(e) {
                let {
                    block: t,
                    exportArgs: i
                } = e, {
                    getExportedRenderAsset: n
                } = i, l = r(993189).Bj6.fromBlock(t).getNonCollectionProperty("source"), o = a().q4_(l), c = n({
                    fromBlockId: i.blockId,
                    toFileURI: o
                }), u = g(e) || k({
                    block: t,
                    exportArgs: i
                }) || c;
                return {
                    text: `[${u}](${c})`,
                    breakLines: !0,
                    children: b(e)
                }
            }

            function P(e) {
                let {
                    block: t,
                    exportArgs: i
                } = e, {
                    getRecordValue: n,
                    getExportedPathToPage: l,
                    userTimeZone: o,
                    intl: c,
                    collectionExportDataMap: a
                } = i;
                if ("collection_view" === t.type || "collection_view_page" === t.type) {
                    var u;
                    let e = (0, r(216465)._z)({
                            blockId: t.id,
                            getRecordValue: n,
                            userTimeZone: o,
                            intl: c
                        }),
                        i = null == a || null == (u = a.get(t.id)) ? void 0 : u.find(e => !e.exportAllCollection),
                        f = l({
                            toPageId: t.id,
                            exportFileExt: ".csv",
                            collectionExportInfo: i
                        });
                    return {
                        text: `[${e}](${f})`,
                        breakLines: !0,
                        children: []
                    }
                }
            }
            let I = {
                text: function(e) {
                    var t;
                    let {
                        block: r,
                        exportArgs: i
                    } = e;
                    return {
                        text: k({
                            block: r,
                            exportArgs: i
                        }),
                        prefix: null == (t = i.getPrefixForBlock) ? void 0 : t.call(i, r),
                        breakLines: !0,
                        children: x(e)
                    }
                },
                header: _,
                sub_header: function(e) {
                    var t;
                    let {
                        block: r,
                        exportArgs: i
                    } = e;
                    return {
                        text: `## ${k({block:r,exportArgs:i}).trim()}`,
                        prefix: null == (t = i.getPrefixForBlock) ? void 0 : t.call(i, r),
                        breakLines: !0,
                        children: x(e)
                    }
                },
                sub_sub_header: function(e) {
                    var t;
                    let {
                        block: r,
                        exportArgs: i
                    } = e;
                    return {
                        text: `### ${k({block:r,exportArgs:i}).trim()}`,
                        prefix: null == (t = i.getPrefixForBlock) ? void 0 : t.call(i, r),
                        breakLines: !0,
                        children: x(e)
                    }
                },
                header_4: function(e) {
                    var t;
                    let {
                        block: r,
                        exportArgs: i
                    } = e;
                    return {
                        text: `#### ${k({block:r,exportArgs:i}).trim()}`,
                        prefix: null == (t = i.getPrefixForBlock) ? void 0 : t.call(i, r),
                        breakLines: !0,
                        children: x(e)
                    }
                },
                quote: function(e) {
                    var t;
                    let {
                        block: r,
                        exportArgs: i
                    } = e;
                    return {
                        text: `> ${k({block:r,exportArgs:i}).trim()}`,
                        prefix: null == (t = i.getPrefixForBlock) ? void 0 : t.call(i, r),
                        breakLines: !0,
                        childrenPrefix: "> ",
                        children: x(e)
                    }
                },
                bulleted_list: $,
                toggle: $,
                to_do: function(e) {
                    var t;
                    let i, {
                        block: n,
                        exportArgs: l
                    } = e;
                    return i = (0, r(896216).w)(r(993189).Bj6.fromBlock(n).getNonCollectionProperty("checked")) ? "- [x] " : "- [ ] ", {
                        text: `${i} ${k({block:n,exportArgs:l}).trim()}`,
                        prefix: null == (t = l.getPrefixForBlock) ? void 0 : t.call(l, n),
                        breakLines: !1,
                        childrenPrefix: y,
                        children: x(e)
                    }
                },
                numbered_list: function(e) {
                    var t;
                    let {
                        block: i,
                        exportArgs: l
                    } = e, {
                        getRecordValue: o
                    } = l, c = function(e) {
                        let t, {
                                block: i,
                                getRecordValue: l
                            } = e,
                            o = i.parent_id,
                            c = o ? l({
                                table: r(682956).ev,
                                id: o
                            }) : void 0;
                        if (c) {
                            var a;
                            t = n().oE(null == (a = c.content) ? void 0 : a.map(e => l({
                                table: r(682956).ev,
                                id: e
                            })))
                        } else t = [];
                        let u = n().SL(t, e => e.id === i.id),
                            f = n().di(t, 0, u),
                            d = n().Kl(f, e => e.type !== r(955630).xd.numberedList);
                        return f.length - (d + 1)
                    }({
                        block: i,
                        getRecordValue: o
                    });
                    return {
                        text: `${c+1}. ${k({block:i,exportArgs:l})}`,
                        prefix: null == (t = l.getPrefixForBlock) ? void 0 : t.call(l, i),
                        breakLines: !1,
                        childrenPrefix: y,
                        children: x(e)
                    }
                },
                code: function(e) {
                    var t, i;
                    let n, {
                            block: l,
                            exportArgs: o
                        } = e,
                        c = k({
                            block: l,
                            exportArgs: o
                        }),
                        u = l.properties && l.properties.language ? (i = l.properties.language, (n = a().q4_(i)) && (0, r(656974).aN)(n) ? (0, r(656974).Ys)(n).prismAlias : r(656974).Sc) : r(656974).Sc,
                        f = `\`\`\`${u===r(656974).Sc?"":u}
${m(c).join("\n")}
\`\`\``;
                    return {
                        text: `${f}`,
                        prefix: null == (t = o.getPrefixForBlock) ? void 0 : t.call(o, l),
                        breakLines: !0,
                        children: []
                    }
                },
                page: function(e) {
                    let {
                        block: t,
                        exportArgs: r
                    } = e;
                    if (t.id === r.navigableBlockId && !r.renderParentBlockId) return _(e);
                    let {
                        getExportedPathToPage: i
                    } = r, n = k({
                        block: t,
                        exportArgs: r
                    }), l = i({
                        toPageId: t.id
                    });
                    return {
                        text: `[${n}](${l})`,
                        breakLines: !0,
                        children: []
                    }
                },
                factory_task: h,
                image: function(e) {
                    let {
                        block: t,
                        exportArgs: i
                    } = e, {
                        getExportedRenderAsset: n
                    } = i, l = r(993189).Bj6.fromBlock(t).getNonCollectionProperty("source"), o = a().q4_(l), c = n({
                        fromBlockId: i.blockId,
                        toFileURI: o
                    }), u = function(e) {
                        let {
                            block: t,
                            exportArgs: i
                        } = e;
                        return T({
                            textValue: a().RQ(r(993189).Bj6.fromBlock(t).getNonCollectionProperty("alt_text")),
                            exportArgs: i
                        })
                    }(e) || g(e) || k({
                        block: t,
                        exportArgs: i
                    });
                    return {
                        text: (0, r(939438).rS)({
                            url: o
                        }) ? `![${u}](${c})` : `[${u}](${c})`,
                        breakLines: !0,
                        children: b(e)
                    }
                },
                video: B,
                embed: B,
                bookmark: function(e) {
                    let {
                        block: t,
                        exportArgs: i
                    } = e, n = r(993189).Bj6.fromBlock(t).getNonCollectionProperty("link"), l = r(561872).MO(n);
                    return {
                        text: `[${k({block:t,exportArgs:i})}](${l})`,
                        breakLines: !0,
                        children: b(e)
                    }
                },
                file: B,
                external_object_instance: function(e) {
                    var t;
                    let {
                        block: r
                    } = e, i = null == (t = r.format) ? void 0 : t.original_url;
                    if (i) return {
                        text: `[${i}](${i})`,
                        breakLines: !0,
                        children: []
                    }
                },
                tweet: B,
                maps: B,
                gist: B,
                framer: B,
                invision: B,
                mixpanel: B,
                drive: function(e) {
                    let {
                        block: t
                    } = e;
                    if (t.format && t.format.drive_properties) {
                        let {
                            url: e,
                            title: r
                        } = t.format.drive_properties;
                        return {
                            text: `[${r}](${e})`,
                            breakLines: !0,
                            children: []
                        }
                    }
                    return B(e)
                },
                figma: B,
                loom: B,
                pdf: B,
                typeform: B,
                codepen: B,
                audio: B,
                divider: function() {
                    return {
                        text: "---",
                        breakLines: !0,
                        children: []
                    }
                },
                equation: function(e) {
                    var t;
                    let {
                        block: r,
                        exportArgs: i
                    } = e, n = "";
                    return r && r.properties && r.properties.title && (n = a().k4p(r.properties.title)), {
                        text: `$$
${n}
$$`,
                        prefix: null == (t = i.getPrefixForBlock) ? void 0 : t.call(i, r),
                        breakLines: !0,
                        children: []
                    }
                },
                collection_view: P,
                collection_view_page: P,
                column_list: v,
                column: v,
                factory: h,
                personal_home_page: h,
                home_shortcuts: h,
                form: h,
                post: h,
                copy_indicator: h,
                breadcrumb: h,
                link_to_collection: h,
                link_to_page: h,
                callout: function(e) {
                    var t, i;
                    let {
                        block: n,
                        exportArgs: l
                    } = e, o = k({
                        block: n,
                        exportArgs: l
                    }), c = null == (t = n.format) ? void 0 : t.page_icon, a = (0, r(312028).A)(c) ? c : "string" == typeof c ? function({
                        source: e,
                        width: t = 40,
                        exportArgs: r
                    }) {
                        let {
                            getExportedRenderAsset: i
                        } = r, n = i({
                            fromBlockId: r.blockId,
                            toFileURI: e
                        });
                        return `<img src="${n}" alt="${n}" width="${t}px" />`
                    }({
                        source: c,
                        exportArgs: l
                    }) : "";
                    return {
                        text: `${a} ${o}`.trim(),
                        prefix: null == (i = l.getPrefixForBlock) ? void 0 : i.call(l, n),
                        breakLines: !0,
                        children: x(e),
                        htmlTag: "aside"
                    }
                },
                table_of_contents: h,
                whimsical: B,
                miro: B,
                abstract: B,
                sketch: B,
                excalidraw: B,
                replit: B,
                hex: B,
                deepnote: B,
                alias: function(e) {
                    let {
                        block: t,
                        exportArgs: i
                    } = e, {
                        getRecordValue: n
                    } = i;
                    if (t.format && t.format.alias_pointer && (0, r(496282).Yt)(t.format.alias_pointer, r(682956).ev)) {
                        let r = n(t.format.alias_pointer);
                        if (r) return L({
                            block: r,
                            exportArgs: { ...i,
                                renderParentBlockId: t.id,
                                blockId: t.format.alias_pointer.id
                            },
                            visitedBlock: e.visitedBlock
                        })
                    }
                },
                slide: v,
                transclusion_container: v,
                transclusion_reference: function(e) {
                    let {
                        block: t,
                        exportArgs: r
                    } = e, {
                        getRecordValue: i
                    } = r;
                    if (t.format && t.format.transclusion_reference_pointer) {
                        let n = i(t.format.transclusion_reference_pointer);
                        if (n) return L({
                            block: n,
                            exportArgs: { ...r,
                                renderParentBlockId: t.id,
                                blockId: t.format.transclusion_reference_pointer.id
                            },
                            visitedBlock: e.visitedBlock
                        })
                    }
                },
                table: function(e) {
                    var t, i;
                    let {
                        block: n,
                        exportArgs: l
                    } = e, {
                        getRecordValue: o
                    } = l, c = (null == (t = n.format) || null == (t = t.table_block_column_order) ? void 0 : t.length) || 0, a = n.content, u = {
                        text: "",
                        breakLines: !0,
                        children: []
                    };
                    if (0 === c || !a) return u;
                    let f = a.map(t => {
                            let i = o({
                                table: r(682956).ev,
                                id: t
                            });
                            return i && L({
                                block: i,
                                exportArgs: { ...l,
                                    blockId: t,
                                    renderParentBlockId: n.id
                                },
                                visitedBlock: e.visitedBlock
                            }) || u
                        }),
                        d = {
                            text: `| ${[...Array(c).keys()].map(()=>"---").join(" | ")} |`,
                            breakLines: !1,
                            children: []
                        };
                    return {
                        text: "",
                        prefix: null == (i = l.getPrefixForBlock) ? void 0 : i.call(l, n),
                        breakLines: !0,
                        children: [f[0], d, ...f.slice(1)]
                    }
                },
                table_row: function(e) {
                    var t, i;
                    let {
                        block: n,
                        exportArgs: l
                    } = e, {
                        getRecordValue: o,
                        renderParentBlockId: c
                    } = l;
                    if (!c) return;
                    let a = o({
                            table: r(682956).ev,
                            id: c
                        }),
                        u = null == a || null == (t = a.format) ? void 0 : t.table_block_column_order;
                    if (!u) return;
                    let f = r(993189).Bj6.fromBlock(n),
                        d = u.map(t => {
                            let r = f.getProperty(t, l.getRecordModel);
                            return r ? T({
                                textValue: r,
                                exportArgs: e.exportArgs
                            }) : void 0
                        });
                    return {
                        text: `| ${d.join(" | ")} |`,
                        prefix: null == (i = l.getPrefixForBlock) ? void 0 : i.call(l, n),
                        breakLines: !1,
                        children: []
                    }
                },
                tab: function(e) {
                    var t;
                    let {
                        block: i,
                        exportArgs: l
                    } = e, {
                        getRecordValue: o
                    } = l;
                    return {
                        text: `${n().oE(null==(t=i.content)?void 0:t.flatMap(e=>{let t=o({table:r(682956).ev,id:e});if(t)return[k({block:t,exportArgs:l}),w(x({block:t,exportArgs:l})).markdown.trim()]})).join("\n\n")}
		`,
                        breakLines: !0,
                        children: []
                    }
                },
                external_object_instance_page: h,
                button: h,
                ai_block: v,
                drawing: h,
                workflow: h,
                transcription: function(e) {
                    let {
                        block: t,
                        exportArgs: i
                    } = e, {
                        getRecordModel: n
                    } = i;
                    if ("transcription" !== t.type) return;
                    let l = (0, r(839464).Bi)(t);
                    return {
                        text: `${l.flatMap(t=>{if(!t.id)return[];let l=n({table:r(682956).ev,id:t.id});if(l)return[e.exportArgs.intl.formatMessage(r(839464).DK[t.type]),w(x({block:l.__IM_SORRY__getValue(),exportArgs:i})).markdown.trim()]}).join("\n\n")}
		`,
                        breakLines: !0,
                        children: []
                    }
                },
                mail: function(e) {
                    var t;
                    let {
                        block: r
                    } = e;
                    return "mail" !== r.type ? v(e) : {
                        text: (null == (t = r.properties) || null == (t = t.searchable_text) || null == (t = t[0]) ? void 0 : t[0]) || "",
                        breakLines: !0,
                        children: x(e)
                    }
                },
                custom: h,
                temporary_ui: v,
                edit_reference: v
            };

            function L(e) {
                let {
                    block: t,
                    forceRenderAsText: i,
                    exportArgs: {
                        transformBlockMapping: n
                    }
                } = e;
                if (t && t.type) {
                    if (e.visitedBlock)
                        if (e.visitedBlock.has(t.id)) return;
                        else e.visitedBlock.add(t.id);
                    let l = i && (0, r(955630).Db)(t.type, t.format) ? (null == n ? void 0 : n.text) ? ? I.text : (null == n ? void 0 : n[t.type]) ? ? I[t.type];
                    if (l) return l(e)
                }
            }
            let y = "    ";

            function w(e, t) {
                let r = "",
                    i = [],
                    n = 0;
                for (let t of e) {
                    if (!t) {
                        i.push("");
                        continue
                    }
                    t.breakLines && (r += "\n"), t.prefix && (r += `${t.prefix}`), t.htmlTag && (r += `<${t.htmlTag}>
`), t.text && (r += `${t.text}
`), t.breakLines && (r += t.childrenPrefix ? `${t.childrenPrefix}
` : "\n");
                    let e = w(t.children).markdown,
                        l = t.childrenPrefix;
                    if (e && l) {
                        let r = m(e);
                        e = [...r.slice(0, -1).map(e => {
                            if (t.prefix) {
                                let [t, r] = function(e) {
                                    let t = e.indexOf(" ");
                                    return -1 === t ? [e, ""] : [e.slice(0, t), e.slice(t + 1)]
                                }(e);
                                return t + l + r
                            }
                            return l + e
                        }), ...r.slice(-1)].join("\n")
                    }
                    r += `${e}`, t.htmlTag && (r += `</${t.htmlTag}>

`), t.suffix && (r += `${t.suffix}

`), r = r.replace(/[\n]{3,}/g, "\n\n"), i.push(r.slice(n)), n = r.length
                }
                if (t) {
                    for (let e = 0; e < i.length && (i[e] = i[e].trimStart(), !i[e]); ++e);
                    for (let e = i.length - 1; e >= 0; --e)
                        if (i[e] = i[e].trimEnd(), i[e]) {
                            i[e] += "\n";
                            break
                        }
                    r = i.join("")
                }
                return {
                    markdown: r,
                    tokenCounts: i.map(e => e.length)
                }
            }

            function T(e) {
                let {
                    textValue: t,
                    exportArgs: x
                } = e, m = "", b = a().RQ(t), g = [];
                for (let e of b) {
                    let t = o().r.normalize(a().uPN(e)),
                        b = (0, c().H)(g, t, e => i()(e)),
                        v = a().N8A(e),
                        h = t.map(e => (function(e) {
                            var t, i, n, o;
                            let {
                                annotation: c,
                                exportArgs: u
                            } = e, {
                                getRecordValue: f,
                                userTimeZone: d,
                                getExportedPathToPage: s,
                                intl: p,
                                transformAnnotation: x
                            } = u, m = r(993189).b4_.fromGetRecordValueFn(f);
                            if (x) {
                                let e = x(c, u);
                                if ("string" == typeof e) return e
                            }
                            if (a().rie(c)) {
                                let e = a().NcG(c),
                                    t = f({
                                        table: r(514214).oo,
                                        id: e
                                    });
                                return `@${(0,r(413818).c6)(p,t)}`
                            }
                            if (a().jIt(c)) {
                                let e = a().v55(c),
                                    t = f({
                                        table: r(682956).ev,
                                        id: e
                                    });
                                if (t) {
                                    let r = k({
                                            block: t,
                                            exportArgs: u
                                        }),
                                        i = s({
                                            toPageId: e
                                        });
                                    return `[${r}](${i})`
                                }
                            } else if (a().muW(c)) {
                                let e = a().TSJ(c);
                                if (!e) return;
                                let t = (0, r(216465).oD)({
                                        collectionPointer: e,
                                        getRecordValue: f
                                    }),
                                    i = null == t ? void 0 : t.getParentPointer(),
                                    n = (0, r(216465).R7)({
                                        intl: u.intl,
                                        collectionId: e.id,
                                        getRecordValue: f,
                                        userTimeZone: u.userTimeZone
                                    }),
                                    l = (0, r(506069).C)({
                                        collectionId: e.id,
                                        spaceId: u.root.spaceId,
                                        spaceDomain: void 0,
                                        parentCvbId: null == i ? void 0 : i.id,
                                        domainBaseUrl: u.baseUrl,
                                        pageVisitSource: r(254656).y8.Export,
                                        swapDsPrefix: (0, r(386883).L)(u.baseUrl)
                                    });
                                return `[${n}](${l})`
                            } else if (a().nNl(c)) {
                                let e = a().qS0(c);
                                if (e) return null == (t = m(e)) ? void 0 : t.getRenderTitle()
                            } else if (a().rDy(c)) {
                                let e = a().ZrY(c),
                                    t = f({
                                        table: r(685136).SN,
                                        id: e,
                                        spaceId: u.root.spaceId
                                    });
                                return null == t || null == (i = t.text) ? void 0 : i.toString()
                            } else if (a().qsB(c)) {
                                let {
                                    date_format: e,
                                    time_format: t,
                                    ...i
                                } = a().K7D(c);
                                return (0, r(850640).ZF)({
                                    value: i,
                                    date_format: e,
                                    time_format: t,
                                    userTimeZone: d,
                                    allowRelativeDates: !1,
                                    intl: u.intl
                                })
                            } else if (a().gir(c)) return a().U35(c);
                            else if (a().RaC(c)) {
                                let e = (0, r(216465).Pf)({
                                    annotation: c,
                                    exportArgs: u
                                });
                                if (e) return e
                            } else if (a().JCc(c)) {
                                if ((null == (n = a().FLg(c)) ? void 0 : n.mentionType) === "everyone") return "everyone";
                                let e = (0, r(216465).nZ)({
                                    annotation: c,
                                    exportArgs: u
                                });
                                if (e) return e
                            } else if (a().N53(c)) {
                                let e = a().T$c(c);
                                return null == (o = f({
                                    table: r(682956).ev,
                                    id: e,
                                    spaceId: u.root.spaceId
                                })) || null == (o = o.format) ? void 0 : o.original_url
                            } else if (a().bZo(c)) return "";
                            else if (a().ik2(c)) {
                                let {
                                    href: e
                                } = a().q1R(c);
                                return e
                            } else {
                                if (a().fts(c)) return a().$sA(c).text;
                                if (a().jcO(c) || a().sh$(c) || a().S4U(c) || a().iQL(c) || a().I1e(c) || a().XkZ(c) || a().jIt(c) || a().EQ8(c) || a().zX2(c) || a().YuY(c) || a().rlz(c) || a().go0(c) || a().lfl(c) || a().tI_(c) || a().iz3(c) || a().s1Y(c) || a()._aw(c) || a().Qmu(c) || a().Si1(c) || a().fL_(c) || a().$ch(c) || a().dei(c) || a().HPQ(c) || a().RXL(c) || a().cgd(c) || a().qUh(c) || a().IjF(c) || a().Q0m(c) || a().kH2(c)) return;
                                (0, l().HB)(c)
                            }
                        })({
                            annotation: e,
                            exportArgs: x
                        })).find(e => (0, l().O9)(e)) ? ? v,
                        _ = s(m);
                    for (let e of (m = p(m), b.deleted.reverse(), b.deleted)) m += f(e, x.getExportedPathToPage, x);
                    for (let e of (m += _, m += d(h), b.created)) m += u(e);
                    m += function(e) {
                        let t = d(e);
                        return e.slice(t.length)
                    }(h), g = [...g.filter(e => t.some(t => n().n4(e, t))), ...b.created]
                }
                let v = s(m);
                for (let e of (m = p(m), g.reverse(), g)) m += f(e, x.getExportedPathToPage, x);
                return m + v
            }

            function j(e, t) {
                let r = new e().match(t) || [];
                if (0 === r.length) return t;
                let i = "",
                    n = 0;
                for (let e of r) {
                    let r = 0 === e.index || "<" !== t[e.index - 1],
                        l = e.lastIndex === t.length || ">" !== t[e.lastIndex],
                        o = !!t.slice(e.index).match(/^[a-z][a-z]+:/i),
                        c = r && l && o;
                    i += t.slice(n, e.index), c && (i += "<"), i += e.raw, c && (i += ">"), n = e.lastIndex
                }
                return i + t.slice(n)
            }

            function F(e) {
                return e.replace(/\\/g, "\\\\")
            }

            function R(e) {
                let {
                    MarkdownIt: t,
                    LinkifyIt: r,
                    markdown: i,
                    plugin: n,
                    disable: l,
                    options: o
                } = e, c = new t({
                    linkify: !0,
                    ...o
                });
                return l && c.disable(l, !1), n && c.use(n), c.render(F(j(r, i)))
            }

            function S(e) {
                let {
                    MarkdownIt: t,
                    LinkifyIt: r,
                    markdown: i,
                    plugin: n
                } = e, l = new t({
                    linkify: !0
                });
                return n && l.use(n), l.renderInline(F(j(r, i)))
            }

            function C(e, t) {
                let r = new Set;
                return w(n().oE(e.map(e => L({
                    block: e,
                    exportArgs: { ...t,
                        blockId: e.id
                    },
                    visitedBlock: r
                })))).markdown.trim()
            }
        }
    }
]);