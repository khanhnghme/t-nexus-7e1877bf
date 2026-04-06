"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [68583], {
        367600: (e, t, i) => {
            i.d(t, {
                ie: () => j,
                P_: () => O
            }), i(16280), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(430670), i(581454), i(737550);
            var n = () => i(161179),
                l = () => i(300441),
                r = () => i(722371),
                o = () => i(773352),
                a = () => i(132702),
                s = () => i(386883),
                c = () => i(682956),
                d = () => i(247438),
                p = () => i(453573),
                u = () => i(857636),
                f = () => i(402459),
                h = () => i(932956),
                g = () => i(313168),
                m = () => i(140030),
                y = i.n(i(702189));

            function b(e) {
                let {
                    context: t,
                    tableBlockId: n,
                    spaceId: l,
                    cellCount: r
                } = e, o = t.getTableColumns(n);
                if (r === o.length || 0 === r) return {
                    columnIds: o,
                    operations: []
                };
                if (r > o.length) {
                    let e = r - o.length;
                    o = [...o, ...Array.from({
                        length: e
                    }, (e, t) => (0, i(698596)._g)(`${n}-${o.length+t}`))]
                } else o = o.slice(0, r);
                return t.setTableColumns(n, o), {
                    columnIds: o,
                    operations: [{
                        command: "update",
                        path: ["format"],
                        pointer: {
                            table: i(832375).evP,
                            id: n,
                            spaceId: l
                        },
                        args: {
                            table_block_column_order: o
                        }
                    }]
                }
            }

            function v(e) {
                if ("resolver" in e) {
                    let t = e.resolver({
                        resourceUrl: e.resourceUrl,
                        resolveIdsOnly: !1
                    });
                    if (t.type === e.type) return t;
                    throw new(i(520026)).Yv("Resource resolved to wrong target type: {type}", {
                        variables: {
                            type: t.type
                        }
                    })
                }
                return "dataSource" === e.type ? function({
                    resourceUrl: e,
                    recordMap: t
                }) {
                    let n = t.getModel({
                        table: i(832375).VlP,
                        id: (0, m().$e)(e)
                    });
                    if (!n) {
                        var l;
                        throw l = e, new(i(520026)).Yv("Data source not found: {dataSourceUrl}", {
                            variables: {
                                dataSourceUrl: l
                            }
                        })
                    }
                    return {
                        type: "dataSource",
                        collection: n
                    }
                }({ ...e,
                    type: "dataSource"
                }) : "block" === e.type ? function({
                    resourceUrl: e,
                    uriContext: t,
                    recordMap: n
                }) {
                    let l = n.getModel({
                        table: i(832375).evP,
                        id: (0, m().OR)(e, t).pageOrBlockId
                    });
                    if (!l) {
                        var r;
                        throw r = e, new(i(520026)).Yv("Block not found: {blockUrl}", {
                            variables: {
                                blockUrl: r
                            }
                        })
                    }
                    return {
                        type: "block",
                        block: l
                    }
                }({ ...e,
                    type: "block"
                }) : void(0, r().HB)(e.type)
            }

            function _(e) {
                if (!e || 0 === e.length) return e;
                let t = [];
                for (let n of e) {
                    let e = (0, d().N8A)(n);
                    if ("string" == typeof e && e.length > 0) {
                        let l = function(e) {
                            var t;
                            return e ? ((t = e).includes("\\u") ? t.replace(i(406779).BJ, i(406779).mb) : t).split("\n").map(e => {
                                let t = e.match(i(406779).jp);
                                return t ? i(406779).KL + e.slice(t[0].length) : e
                            }).join("\n") : e
                        }(e);
                        if (l === e) t.push(n);
                        else {
                            let e = (0, d().uPN)(n);
                            t.push((0, d().Ey_)(l, e))
                        }
                    } else t.push(n)
                }
                return t
            }
            let k = [...i(936868).od.map(e => `${e}://`), "slack://", "microsoftTeams://", "discord://"],
                I = "Cannot create/update databases via page tools.";

            function w(e) {
                return k.some(t => e.startsWith(t))
            }

            function x(e) {
                let {
                    baseUrl: t,
                    id: n
                } = e;
                return void 0 === n ? t : `${t}/${(0,i(4962).Xw)(n)}`
            }

            function E(e) {
                let {
                    href: t,
                    uriContext: i,
                    parseAgentUrlFn: n
                } = e, l = function(e) {
                    var t, i, n, l, r, o, a, s;
                    let {
                        href: c,
                        uriContext: d,
                        parseAgentUrlFn: u
                    } = e;
                    if (c.startsWith("slack://")) {
                        let e = (0, h().L1)(c);
                        if (void 0 === e) return;
                        return (0, g().mQ)({
                            baseUrl: e.baseUrl,
                            domain: e.domain,
                            channelId: e.channelId,
                            messageId: e.messageId,
                            threadTs: e.threadTs
                        })
                    }
                    if (c.startsWith("microsoftTeams://")) {
                        let e = (0, h().Bv)(c);
                        return null == e ? void 0 : e.url
                    }
                    if (c.startsWith("discord://")) {
                        let e = (0, h().LL)(c);
                        return null == e ? void 0 : e.url
                    }
                    let f = u(c, d);
                    if (f) switch (f.type) {
                        case "pageOrCollectionViewBlock":
                            return (0, m().Q2)({
                                baseUrl: d.baseUrl,
                                pageId: f.id,
                                blockId: f.blockId
                            });
                        case "snapshot":
                            return (0, m().K2)({
                                baseUrl: d.baseUrl,
                                pageOrDatabaseId: f.pageOrDatabaseId,
                                timestamp: f.timestamp
                            });
                        case "discussion":
                            if (void 0 === f.pageId) return;
                            let y = null == (t = (i = m().nm.discussion).getUrl) ? void 0 : t.call(i, {
                                type: "discussion",
                                discussionId: f.discussionId,
                                pageId: f.pageId,
                                blockId: f.blockId,
                                baseUrl: d.baseUrl
                            });
                            return "string" == typeof y ? y : void 0;
                        case "slackMessage":
                            let b = null == (n = (l = m().nm.slackMessage).getUrl) ? void 0 : n.call(l, f);
                            return "string" == typeof b ? b : void 0;
                        case "slackUser":
                            let v = null == (r = (o = m().nm.slackUser).getUrl) ? void 0 : r.call(o, f);
                            return "string" == typeof v ? v : void 0;
                        case "slackChannel":
                            let _ = null == (a = (s = m().nm.slackChannel).getUrl) ? void 0 : a.call(s, f);
                            return "string" == typeof _ ? _ : void 0;
                        case "agent":
                        case "trigger":
                        case "script":
                            return (0, p().Lm)({
                                baseUrl: d.baseUrl,
                                params: {},
                                workflowId: f.workflowId
                            });
                        case "collection":
                        case "collectionProperty":
                        case "collectionPropertyOption":
                        case "formulaCode":
                            return x({
                                baseUrl: d.baseUrl,
                                id: f.collectionId
                            });
                        case "formulaResult":
                        case "pageDiscussions":
                            return x({
                                baseUrl: d.baseUrl,
                                id: f.pageId
                            });
                        case "view":
                            return x({
                                baseUrl: d.baseUrl,
                                id: f.collectionViewId
                            });
                        case "citation":
                        case "webpage":
                            return f.url;
                        case "file":
                            return f.source;
                        case "user":
                        case "teamspace":
                        case "notification":
                        case "integration":
                        case "worker":
                        case "thread":
                            return d.baseUrl;
                        default:
                            return
                    }
                }({
                    href: t,
                    uriContext: i,
                    parseAgentUrlFn: n
                });
                return void 0 !== l ? l : w(t) ? i.baseUrl : t
            }

            function U(e, t, n) {
                let l, r = [],
                    o = [...(0, i(159523).I6)(e), ...(0, m().GP)(e)].sort((e, t) => e.start === t.start ? t.end - e.end : e.start - t.start).filter((l = -1, function(e) {
                        return !(e.start <= l) && (l = e.end, !0)
                    }));
                if (0 === o.length) return r.push((0, d().Ey_)(e, [])), r;
                let c = 0;
                for (let i of o) {
                    var u, y, b, v;
                    let l = E({
                            href: i.href,
                            uriContext: t,
                            parseAgentUrlFn: m().X1
                        }),
                        o = i.value;
                    if (i.start > c) {
                        let t = e.slice(c, i.start);
                        t && r.push((0, d().Ey_)(t, []))
                    }
                    if (i.href.startsWith("pageOrCollectionViewBlock://")) {
                        let e = m().nm.pageOrCollectionViewBlock.parseUri(i.href);
                        if (e instanceof Error) {
                            let e = ["a", i.href];
                            r.push((0, d().Ey_)(o, [e]))
                        } else {
                            let t = (0, d().ld4)(e.id, void 0);
                            r.push((0, d().wmz)(t, []))
                        }
                    } else if (i.href.startsWith("user://")) {
                        let e = (0, m().X1)(i.href, t);
                        if (e && "user" === e.type) {
                            let t = (0, d().P4h)(e.userId);
                            r.push((0, d().wmz)(t, []))
                        } else {
                            let e = ["a", i.href];
                            r.push((0, d().Ey_)(o, [e]))
                        }
                    } else if (i.href.startsWith("collection://")) {
                        let e = m().nm.collection.parseUri(i.href);
                        if (e instanceof Error) {
                            let e = ["a", i.href];
                            r.push((0, d().Ey_)(o, [e]))
                        } else {
                            let t = (0, d().ETy)({
                                    collectionId: e.collectionId,
                                    spaceId: n,
                                    parentCvbId: void 0
                                }),
                                i = (0, d().wmz)(t, []);
                            r.push(i)
                        }
                    } else if (i.href.startsWith("agent://")) {
                        let e = m().nm.agent.parseUri(i.href),
                            n = e instanceof Error ? void 0 : (0, p().Lm)({
                                baseUrl: t.baseUrl,
                                params: {},
                                workflowId: e.workflowId
                            });
                        if (void 0 === n) {
                            let e = ["a", i.href];
                            r.push((0, d().Ey_)(o, [e]))
                        } else {
                            let e = ["a", n];
                            r.push((0, d().Ey_)(n, [e]))
                        }
                    } else if ((0, f().ZI)(i.href)) {
                        let e = f().A2.slackMessage.parseUri(i.href),
                            n = e instanceof Error || null == (u = (y = f().A2.slackMessage).getUrl) ? void 0 : u.call(y, e);
                        if ("string" == typeof n) {
                            let e = E({
                                    href: n,
                                    uriContext: t,
                                    parseAgentUrlFn: m().X1
                                }),
                                i = (0, d().Sez)(e);
                            r.push((0, d().Ey_)(e, [i]))
                        } else {
                            let e = (0, d().Sez)(i.href);
                            r.push((0, d().Ey_)(o, [e]))
                        }
                    } else if ((0, f().ph)(i.href)) {
                        let e = f().A2.slackUser.parseUri(i.href),
                            n = e instanceof Error || null == (b = (v = f().A2.slackUser).getUrl) ? void 0 : b.call(v, e);
                        if ("string" == typeof n) {
                            let e = E({
                                    href: n,
                                    uriContext: t,
                                    parseAgentUrlFn: m().X1
                                }),
                                i = (0, d().Sez)(e);
                            r.push((0, d().Ey_)(e, [i]))
                        } else {
                            let e = (0, d().Sez)(i.href);
                            r.push((0, d().Ey_)(o, [e]))
                        }
                    } else if (i.href.startsWith("slack://")) {
                        let e = (0, h().L1)(i.href),
                            n = void 0 === e ? void 0 : (0, g().mQ)({
                                baseUrl: e.baseUrl,
                                domain: e.domain,
                                channelId: e.channelId,
                                messageId: e.messageId,
                                threadTs: e.threadTs
                            });
                        if (void 0 === n) {
                            let e = (0, d().Sez)(i.href);
                            r.push((0, d().Ey_)(o, [e]))
                        } else {
                            let e = E({
                                    href: n,
                                    uriContext: t,
                                    parseAgentUrlFn: m().X1
                                }),
                                i = (0, d().Sez)(e);
                            r.push((0, d().Ey_)(e, [i]))
                        }
                    } else if (w(i.href)) {
                        let e = (0, d().Sez)(l);
                        r.push((0, d().Ey_)(l, [e]))
                    } else try {
                        let e = (0, a().parseRoute)({
                            url: i.href,
                            baseUrl: t.baseUrl,
                            publicDomainName: t.publicDomainName,
                            isMobile: !1,
                            protocol: void 0,
                            currentUrl: void 0,
                            requestedOnAlternateDomain: (0, s().L)(t.baseUrl)
                        });
                        if ("page" === e.name && e.blockId) {
                            let t = (0, d().ld4)(e.blockId, void 0, e.snapshotTimestamp);
                            r.push((0, d().wmz)(t, []))
                        } else {
                            let e = ["a", i.href];
                            r.push((0, d().Ey_)(i.value, [e]))
                        }
                    } catch {
                        let e = ["a", i.href];
                        r.push((0, d().Ey_)(i.value, [e]))
                    }
                    c = i.end
                }
                if (c < e.length) {
                    let t = e.slice(c);
                    t && r.push((0, d().Ey_)(t, []))
                }
                return r
            }

            function O(e) {
                let {
                    text: t,
                    uriContext: l,
                    citationFormat: a = "citation",
                    citationCounter: s,
                    recordMap: c,
                    spaceId: f,
                    parseAgentUrlFn: h,
                    skipUrlProcessing: g
                } = e, y = [];
                for (let e of t) try {
                    y.push(... function(e) {
                        let {
                            inline: t,
                            uriContext: n,
                            spaceId: l,
                            parseAgentUrlFn: o,
                            citationCounter: a,
                            citationFormat: s,
                            recordMap: c,
                            skipUrlProcessing: f
                        } = e, h = [], g = e => {
                            if (!a) return;
                            let t = a.hrefToNumber[e];
                            return void 0 === t && (a.current += 1, t = a.current, a.hrefToNumber[e] = t), t
                        };
                        if ("string" == typeof t)
                            if (f) h.push([t]);
                            else {
                                let e = U(t, n, l);
                                h.push(...e)
                            }
                        else {
                            var y, b, v, _, k, I, w, x, O;
                            let e = t.annotations ? function(e, t, i) {
                                let n = [];
                                if (e.bold && n.push(["b"]), e.italic && n.push(["i"]), e.strikethrough && n.push(["s"]), e.underline && n.push(["_"]), e.code && n.push(["c"]), e.color) {
                                    let t = (0, u().Ah)(e.color);
                                    t && n.push(["h", t])
                                }
                                if (e.href) {
                                    let l = E({
                                        href: e.href,
                                        uriContext: t,
                                        parseAgentUrlFn: i
                                    });
                                    n.push(["a", l])
                                }
                                for (let l of e.discussionUrls ? ? []) {
                                    let e = i(l, t);
                                    e && "discussion" === e.type && n.push(["m", e.discussionId])
                                }
                                return n
                            }(t.annotations, n, o) : [];
                            if ("annotated" === t.type)
                                if (f || void 0 !== t.annotations && !0 === t.annotations.code) h.push((0, d().Ey_)(t.text, e));
                                else
                                    for (let i of U(t.text, n, l)) {
                                        let [t, n] = i, l = [...n ? ? [], ...e];
                                        h.push((0, d().Ey_)(t, l))
                                    } else if ("mention" === t.type)
                                        if (f || (null == (y = t.annotations) ? void 0 : y.code) === !0) {
                                            let i = (() => {
                                                switch (t.mention.type) {
                                                    case "user":
                                                    case "agent":
                                                        return t.mention.name ? ? t.mention.url;
                                                    case "page":
                                                    case "database":
                                                    case "data-source":
                                                        return t.mention.title ? ? t.mention.url;
                                                    case "date":
                                                        return t.mention.end ? `${t.mention.start} - ${t.mention.end}` : t.mention.start;
                                                    case "custom_emoji":
                                                        return `:${t.mention.name}:`;
                                                    default:
                                                        return (0, r().HB)(t.mention)
                                                }
                                            })();
                                            h.push((0, d().Ey_)(i, e))
                                        } else if ("user" === t.mention.type) {
                                let i = o(t.mention.url, n);
                                if (i && "user" === i.type) {
                                    let t = (0, d().P4h)(i.userId);
                                    h.push((0, d().wmz)(t, e))
                                } else if (i && "slackUser" === i.type) {
                                    let l = null == (b = (v = m().nm.slackUser).getUrl) ? void 0 : b.call(v, i),
                                        r = E({
                                            href: "string" == typeof l ? l : t.mention.url,
                                            uriContext: n,
                                            parseAgentUrlFn: o
                                        }),
                                        a = (0, d().Sez)(r);
                                    h.push((0, d().Ey_)(r, [a, ...e]))
                                } else {
                                    let i = E({
                                        href: t.mention.url,
                                        uriContext: n,
                                        parseAgentUrlFn: o
                                    });
                                    h.push((0, d().Ey_)(i, e))
                                }
                            } else if ("page" === t.mention.type || "database" === t.mention.type) {
                                let i = t.mention.url.replace(/([.,;:!?]+)$/, ""),
                                    r = o(i, n);
                                if (r && "pageOrCollectionViewBlock" === r.type) {
                                    let t = (0, d().ld4)(r.id, void 0);
                                    h.push((0, d().wmz)(t, e))
                                } else if (r && "agent" === r.type) {
                                    let i = (0, p().Lm)({
                                            baseUrl: n.baseUrl,
                                            params: {},
                                            workflowId: r.workflowId
                                        }),
                                        l = (0, d().Sez)(i),
                                        o = (0, d().Ey_)(t.mention.title || i || "Source", [l, ...e]);
                                    h.push(o)
                                } else if (r && "collection" === r.type) {
                                    let t = (0, d().ETy)({
                                            collectionId: r.collectionId,
                                            spaceId: l,
                                            parentCvbId: void 0
                                        }),
                                        i = (0, d().wmz)(t, e);
                                    h.push(i)
                                } else if (r) {
                                    let l = E({
                                            href: i,
                                            uriContext: n,
                                            parseAgentUrlFn: o
                                        }),
                                        r = (0, d().Sez)(l);
                                    h.push((0, d().Ey_)(t.mention.title || l || "Source", [r, ...e]))
                                } else {
                                    let i = E({
                                        href: t.mention.url,
                                        uriContext: n,
                                        parseAgentUrlFn: o
                                    });
                                    h.push((0, d().Ey_)(t.mention.title || i || "Source", e))
                                }
                            } else if ("date" === t.mention.type) {
                                let i = function(e) {
                                        let t = function(e) {
                                            let {
                                                start: t,
                                                end: i,
                                                startTime: n,
                                                endTime: l,
                                                timeZone: o
                                            } = e;
                                            return (0, r().O9)(n) && (0, r().O9)(o) ? (0, r().O9)(i) && (0, r().O9)(l) ? {
                                                variant: "datetimerange",
                                                start: t,
                                                end: i,
                                                startTime: n,
                                                endTime: l,
                                                timeZone: o
                                            } : {
                                                variant: "datetime",
                                                start: t,
                                                startTime: n,
                                                timeZone: o
                                            } : (0, r().O9)(i) ? {
                                                variant: "daterange",
                                                start: t,
                                                end: i
                                            } : {
                                                variant: "date",
                                                start: t
                                            }
                                        }(e);
                                        switch (t.variant) {
                                            case "datetimerange":
                                                return {
                                                    type: "datetimerange",
                                                    start_date: t.start,
                                                    start_time: t.startTime,
                                                    end_date: t.end,
                                                    end_time: t.endTime,
                                                    time_zone: t.timeZone,
                                                    date_format: "relative"
                                                };
                                            case "datetime":
                                                return {
                                                    type: "datetime",
                                                    start_date: t.start,
                                                    start_time: t.startTime,
                                                    time_zone: t.timeZone,
                                                    date_format: "relative"
                                                };
                                            case "daterange":
                                                return {
                                                    type: "daterange",
                                                    start_date: t.start,
                                                    end_date: t.end,
                                                    date_format: "relative"
                                                };
                                            case "date":
                                                return {
                                                    type: "date",
                                                    start_date: t.start,
                                                    date_format: "relative"
                                                };
                                            default:
                                                (0, r().HB)(t)
                                        }
                                    }(t.mention),
                                    n = (0, d().Ww9)(i);
                                h.push((0, d().wmz)(n, e))
                            } else if ("custom_emoji" === t.mention.type) {
                                let n = t.mention.name,
                                    r = c.getModelsByTable(i(996034).e).find(e => e.name === n);
                                if (r) {
                                    let t = {
                                            table: i(996034).e,
                                            id: r.id,
                                            spaceId: l
                                        },
                                        n = (0, d().XTT)(t);
                                    h.push((0, d().wmz)(n, e))
                                } else h.push((0, d().Ey_)(`:${n}:`, e))
                            } else if ("data-source" === t.mention.type) {
                                let i = t.mention.url.replace(/([.,;:!?]+)$/, ""),
                                    r = o(i, n);
                                if (r && "collection" === r.type) {
                                    let t = (0, d().ETy)({
                                            collectionId: r.collectionId,
                                            spaceId: l,
                                            parentCvbId: void 0
                                        }),
                                        i = (0, d().wmz)(t, e);
                                    h.push(i)
                                } else {
                                    let l = E({
                                            href: i,
                                            uriContext: n,
                                            parseAgentUrlFn: o
                                        }),
                                        r = (0, d().Sez)(l);
                                    h.push((0, d().Ey_)(t.mention.title || l || "Source", [r, ...e]))
                                }
                            } else if ("agent" === t.mention.type) {
                                let r = t.mention.url.replace(/([.,;:!?]+)$/, ""),
                                    a = o(r, n);
                                if (a && "agent" === a.type) {
                                    let s = c.getModel({
                                            table: i(43296).C,
                                            id: a.workflowId,
                                            spaceId: a.spaceId ? ? l
                                        }),
                                        p = null == s ? void 0 : s.getData(),
                                        u = (null == p ? void 0 : p.draft_runtime_actor_pointer) ? ? (null == p ? void 0 : p.runtime_actor_pointer);
                                    if ((null == u ? void 0 : u.table) === i(890920).GP) {
                                        let t = (0, d().Vb6)(u.id);
                                        h.push((0, d().wmz)(t, e))
                                    } else {
                                        let i = E({
                                                href: r,
                                                uriContext: n,
                                                parseAgentUrlFn: o
                                            }),
                                            l = (0, d().Sez)(i);
                                        h.push((0, d().Ey_)(t.mention.name || i || "Agent", [l, ...e]))
                                    }
                                } else {
                                    let i = E({
                                            href: r,
                                            uriContext: n,
                                            parseAgentUrlFn: o
                                        }),
                                        l = (0, d().Sez)(i);
                                    h.push((0, d().Ey_)(t.mention.name || i || "Agent", [l, ...e]))
                                }
                            } else(0, r().HB)(t.mention);
                            else if ("equation" === t.type) {
                                let i = (0, d().Ycj)(t.equation);
                                h.push((0, d().Ey_)(d().Yl$, [i, ...e]))
                            } else if ("citation" === t.type) {
                                let i;
                                if (t.href.startsWith("user://")) return h;
                                let l = o(t.href, n);
                                if ((null == l ? void 0 : l.type) === "agent") i = (0, p().Lm)({
                                    baseUrl: n.baseUrl,
                                    params: {},
                                    workflowId: l.workflowId
                                });
                                else if ((null == l ? void 0 : l.type) === "discussion" && l.pageId) {
                                    let e = null == (_ = (k = m().nm.discussion).getUrl) ? void 0 : _.call(k, {
                                        type: "discussion",
                                        discussionId: l.discussionId,
                                        pageId: l.pageId,
                                        blockId: l.blockId,
                                        baseUrl: n.baseUrl
                                    });
                                    i = "string" == typeof e ? e : t.href
                                } else if ((null == l ? void 0 : l.type) === "slackMessage") {
                                    let e = null == (I = (w = m().nm.slackMessage).getUrl) ? void 0 : I.call(w, l);
                                    i = "string" == typeof e ? e : t.href
                                } else if ((null == l ? void 0 : l.type) === "slackUser") {
                                    let e = null == (x = (O = m().nm.slackUser).getUrl) ? void 0 : x.call(O, l);
                                    i = "string" == typeof e ? e : t.href
                                } else if ((null == l ? void 0 : l.type) === "citation") {
                                    let t = g(l.url),
                                        n = (0, d().X$)({
                                            href: l.url,
                                            blockId: l.id,
                                            spaceId: l.spaceId,
                                            type: l.recordType,
                                            ...void 0 !== t ? {
                                                citationNumber: t
                                            } : void 0
                                        });
                                    h.push((0, d().wmz)(n, e)), i = l.url
                                } else i = t.href;
                                if ((null == l ? void 0 : l.type) !== "citation") {
                                    if ("citation" === s) {
                                        let t = (0, d().X$)({
                                            href: i,
                                            type: "url"
                                        });
                                        h.push((0, d().wmz)(t, e))
                                    } else if ("link" === s) {
                                        let t = g(i) ? ? 1,
                                            n = ["a", i];
                                        h.push((0, d().Ey_)(`[${t}]`, [n, ...e]))
                                    } else if ("only-number-citations" === s) {
                                        let t = g(i),
                                            n = (0, d().X$)({
                                                href: i,
                                                type: "url",
                                                ...void 0 !== t ? {
                                                    citationNumber: t
                                                } : void 0
                                            });
                                        h.push((0, d().wmz)(n, e))
                                    }
                                }
                            }
                        }
                        return h
                    }({
                        inline: e,
                        uriContext: l,
                        spaceId: f,
                        parseAgentUrlFn: h,
                        citationCounter: s,
                        citationFormat: a,
                        recordMap: c,
                        skipUrlProcessing: g
                    }))
                } catch (l) {
                    let t;
                    try {
                        t = "string" == typeof e ? "text" : e.type
                    } catch (e) {
                        t = "unknown"
                    }
                    let i = (0, n().A)(l);
                    o().log({
                        level: "error",
                        from: "convertToNotionText",
                        type: "convertToNotionTextError",
                        error: {
                            message: `Error converting agent text to notion token: ${t}`,
                            stack: i.stack
                        }
                    })
                }
                return y
            }

            function $(e, t) {
                let {
                    pageOrBlockId: i,
                    blockId: n
                } = (0, m().OR)(e, t);
                return n || i
            }

            function C(e) {
                let {
                    blockId: t,
                    spaceId: i,
                    recordMap: n
                } = e, l = n.getModel({
                    table: c().ev,
                    id: t,
                    spaceId: i
                });
                if (!l) throw Error(`Block not found in record map: ${t}`);
                return l
            }
            let S = "file://";

            function T(e) {
                if (e.source && (0, i(421814).FS)(e.source)) return e.source;
                if (e.source && e.source.startsWith(S)) try {
                    let t = e.source.slice(S.length),
                        i = decodeURIComponent(t);
                    return JSON.parse(i)
                } catch (e) {}
            }

            function B(e) {
                let t = T(e);
                if (t && "object" == typeof t && "permissionRecord" in t) return t.permissionRecord.id
            }

            function W(e) {
                let t, i = T(e.agentBlock);
                return i && ("string" == typeof i ? (e.properties.source = [(0, d().Ey_)(i, [])], e.format.display_source = i) : "object" == typeof i && "permissionRecord" in i && (e.properties.source = [(0, d().Ey_)(i.source, [])], e.format.display_source = i.source, e.format.copied_from_pointer = i.permissionRecord, t = i.permissionRecord, e.fileIds.push(i.source.split(":")[1]))), {
                    copiedFromPointer: t
                }
            }

            function F(e) {
                let {
                    parentPointer: t,
                    children: i,
                    idCreator: n,
                    legacyNonCrdt: r,
                    actorPointer: o,
                    context: a,
                    recordMap: s,
                    uriContext: c,
                    getNow: d,
                    parseAgentUrlFn: p,
                    preservedBlocksWithUrls: u,
                    warnings: f,
                    checkBlockEditAccess: h
                } = e, g = [], m = [];
                for (let e of i) {
                    let i = P({
                        parentPointer: t,
                        block: e,
                        idCreator: n,
                        legacyNonCrdt: r,
                        actorPointer: o,
                        context: a,
                        recordMap: s,
                        uriContext: c,
                        getNow: d,
                        parseAgentUrlFn: p,
                        preservedBlocksWithUrls: u,
                        warnings: f,
                        checkBlockEditAccess: h
                    });
                    if (l().Q.isSuccess(i)) {
                        let {
                            blockId: e,
                            operations: t
                        } = i.value;
                        g.push(e), m.push(...t)
                    } else throw i.error
                }
                return m.push({
                    command: "insertChildrenAfter",
                    path: ["content"],
                    pointer: t,
                    args: {
                        ids: g
                    }
                }), m
            }

            function M(e) {
                let {
                    parentPointer: t,
                    sectionChildren: n,
                    idCreator: l,
                    legacyNonCrdt: r,
                    actorPointer: o,
                    context: a,
                    recordMap: s,
                    uriContext: d,
                    getNow: p,
                    parseAgentUrlFn: u,
                    warnings: f
                } = e, h = l.idInSavedSpace(c().ev), {
                    model: g,
                    operations: m
                } = i(993189).zgg.create({
                    id: h,
                    type: "text",
                    parentPointer: t,
                    alive: !0,
                    created_time: p(),
                    createdBy: o,
                    space_id: t.spaceId,
                    legacyNonCrdt: r
                }), y = [...m];
                if (n && n.length > 0) {
                    let e = F({
                        parentPointer: {
                            table: c().ev,
                            id: g.id,
                            spaceId: t.spaceId
                        },
                        children: n,
                        idCreator: l,
                        legacyNonCrdt: r,
                        actorPointer: o,
                        context: a,
                        recordMap: s,
                        uriContext: d,
                        getNow: p,
                        parseAgentUrlFn: u,
                        preservedBlocksWithUrls: new Map,
                        warnings: f
                    });
                    y.push(...e)
                }
                return {
                    sectionId: g.id,
                    operations: y
                }
            }

            function A(e) {
                let {
                    blockId: t,
                    parentPointer: n,
                    collection: l,
                    collectionView: r,
                    inline: o,
                    idCreator: a,
                    actorPointer: s,
                    legacyNonCrdt: d,
                    getNow: p
                } = e, u = [], f = null == r ? void 0 : r.getRawQuery(), h = {
                    table: c().ev,
                    id: t,
                    spaceId: n.spaceId
                }, {
                    model: g,
                    operations: m
                } = i(993189).lqf.create({
                    id: a.idInSavedSpace(i(435544).G),
                    parent: h,
                    space_id: n.spaceId,
                    type: (null == r ? void 0 : r.getType()) ? ? "table",
                    ...null != r && r.name ? {
                        name: r.name
                    } : {},
                    ...void 0 !== f ? {
                        query2: f
                    } : {},
                    format: { ...(null == r ? void 0 : r.getFormat()) ? ? {},
                        collection_pointer : {
                            table: l.table,
                            id: l.id,
                            spaceId: l.spaceId
                        }
                    },
                    created_time: p()
                });
                u.push(...m);
                let {
                    model: y,
                    operations: b
                } = i(993189).zgg.create({
                    id: h.id,
                    parentPointer: n,
                    space_id: n.spaceId,
                    type: o ? "collection_view" : "collection_view_page",
                    createdBy: s,
                    created_time: p(),
                    view_ids: [g.id],
                    collection_id: l.id,
                    legacyNonCrdt: d
                });
                return u.push(...b), {
                    collectionViewModel: g,
                    blockModel: y,
                    operations: u
                }
            }

            function z(e) {
                let {
                    originalBlockId: t,
                    newChildren: i,
                    spaceId: n,
                    idCreator: r,
                    legacyNonCrdt: o,
                    actorPointer: a,
                    context: s,
                    recordMap: d,
                    uriContext: p,
                    getNow: u,
                    parseAgentUrlFn: f,
                    preservedBlocksWithUrls: h,
                    warnings: g,
                    checkBlockEditAccess: m
                } = e, y = [], b = {
                    table: c().ev,
                    id: t,
                    spaceId: n
                }, v = [];
                for (let e of i) {
                    let t = P({
                        parentPointer: b,
                        block: e,
                        idCreator: r,
                        legacyNonCrdt: o,
                        actorPointer: a,
                        context: s,
                        recordMap: d,
                        uriContext: p,
                        getNow: u,
                        parseAgentUrlFn: f,
                        preservedBlocksWithUrls: h,
                        warnings: g,
                        checkBlockEditAccess: m
                    });
                    if (l().Q.isSuccess(t)) {
                        let {
                            blockId: e,
                            operations: i
                        } = t.value;
                        v.push(e), y.push(...i)
                    } else throw t.error
                }
                for (let e of (C({
                        blockId: t,
                        spaceId: n,
                        recordMap: d
                    }).getContentIds() || []).filter(e => !v.includes(e))) y.push({
                    command: "set",
                    path: ["alive"],
                    pointer: {
                        table: c().ev,
                        id: e,
                        spaceId: n
                    },
                    args: !1
                });
                return y.push({
                    command: "set",
                    path: ["content"],
                    pointer: b,
                    args: v
                }), y
            }

            function P(e) {
                let {
                    parentPointer: t,
                    block: n,
                    idCreator: l,
                    legacyNonCrdt: o,
                    actorPointer: a,
                    context: s,
                    recordMap: d,
                    uriContext: p,
                    getNow: f,
                    parseAgentUrlFn: h,
                    preservedBlocksWithUrls: g,
                    warnings: y,
                    checkBlockEditAccess: k
                } = e;
                try {
                    let e = [],
                        w = (0, u().Er)(n) ? B(n) : void 0;
                    if ("table_row" === n.type && (0, r().O9)(n.cells) && e.push(...b({
                            context: s,
                            tableBlockId: t.id,
                            spaceId: t.spaceId,
                            cellCount: n.cells.length
                        }).operations), "page" === n.type || "database" === n.type || "unknown" === n.type) {
                        let r, u;
                        if (n.url) {
                            u = $(n.url, p);
                            let h = d.getModel({
                                table: c().ev,
                                id: u,
                                spaceId: t.spaceId
                            });
                            if (!h) throw Error(`Cannot create database reference: Block ${u} from URL "${n.url}" does not exist in the current space`);
                            if (r = h, !g.has(u) || s.claimedPreservedBlockIds.has(u)) {
                                if ("database" === n.type) {
                                    let i;
                                    if (u = l.idInSavedSpace(c().ev), !r.isCollectionView()) throw Error(`Block ${r.id} is not a collection view block (type: ${r.type})`);
                                    let s = r.getCollectionPointers();
                                    if (s && s.length > 0) i = s[0];
                                    else {
                                        let e = r.getCollectionViewPointers();
                                        if (e && 0 !== e.length)
                                            for (let t of e) {
                                                let e = d.getModel(t);
                                                if (i = null == e ? void 0 : e.getCollectionPointer()) break
                                            }
                                    }
                                    if (!i) throw Error(`No collection pointers found for collection view block: ${r.id}`);
                                    let p = A({
                                        blockId: u,
                                        parentPointer: t,
                                        collection: i,
                                        inline: !!n.inline,
                                        idCreator: l,
                                        actorPointer: a,
                                        legacyNonCrdt: o,
                                        getNow: f
                                    });
                                    e.push(...p.operations), r = p.blockModel
                                } else if ("page" === n.type) {
                                    let n = function(e) {
                                        let {
                                            parentPointer: t,
                                            targetBlockId: n,
                                            idCreator: l,
                                            actorPointer: r,
                                            legacyNonCrdt: o,
                                            getNow: a
                                        } = e, s = [], {
                                            model: d,
                                            operations: p
                                        } = i(993189).zgg.create({
                                            id: l.idInSavedSpace(c().ev),
                                            type: "alias",
                                            parentPointer: t,
                                            space_id: t.spaceId,
                                            createdBy: r,
                                            created_time: a(),
                                            alive: !0,
                                            format: {
                                                alias_pointer: {
                                                    table: c().ev,
                                                    id: n,
                                                    spaceId: t.spaceId
                                                }
                                            },
                                            legacyNonCrdt: o
                                        });
                                        return s.push(...p), {
                                            blockModel: d,
                                            operations: s
                                        }
                                    }({
                                        parentPointer: t,
                                        targetBlockId: u,
                                        idCreator: l,
                                        actorPointer: a,
                                        legacyNonCrdt: o,
                                        getNow: f
                                    });
                                    e.push(...n.operations), r = n.blockModel, u = n.blockModel.id
                                }
                                return {
                                    value: {
                                        blockId: u,
                                        operations: e
                                    }
                                }
                            }
                        } else {
                            if ("database" === n.type && s.disableDatabaseMutations) throw new(i(520026)).Yv(I);
                            if (u = l.idInSavedSpace(c().ev), "page" === n.type) {
                                let {
                                    model: l,
                                    operations: c
                                } = i(993189).zgg.create({
                                    id: u,
                                    type: "page",
                                    space_id: t.spaceId,
                                    created_time: f(),
                                    createdBy: a,
                                    parentPointer: t,
                                    alive: !0,
                                    properties: {
                                        title: O({
                                            text: n.text ? ? [],
                                            uriContext: p,
                                            citationFormat: s.citationFormat,
                                            citationCounter: s.citationCounter,
                                            recordMap: d,
                                            spaceId: t.spaceId,
                                            parseAgentUrlFn: h
                                        })
                                    },
                                    legacyNonCrdt: o
                                });
                                e.push(...c), r = l
                            } else if ("database" === n.type)
                                if (n.dataSourceUrl) {
                                    let i = v({
                                            type: "dataSource",
                                            resourceUrl: n.dataSourceUrl,
                                            recordMap: d,
                                            ...s.resolver ? {
                                                resolver: s.resolver
                                            } : {
                                                uriContext: p
                                            }
                                        }),
                                        c = i.collection.pointer,
                                        h = i.collectionView,
                                        g = A({
                                            blockId: u,
                                            parentPointer: t,
                                            collection: c,
                                            collectionView: h,
                                            inline: !!n.inline,
                                            idCreator: l,
                                            actorPointer: a,
                                            legacyNonCrdt: o,
                                            getNow: f
                                        });
                                    e.push(...g.operations), r = g.blockModel
                                } else {
                                    let g = {
                                            table: c().ev,
                                            id: u,
                                            spaceId: t.spaceId
                                        },
                                        {
                                            model: m,
                                            operations: y
                                        } = i(993189).WBy.create({
                                            id: l.idInSavedSpace(i(46241).V),
                                            parent: g,
                                            space_id: t.spaceId,
                                            name: O({
                                                text: n.text ? ? [],
                                                uriContext: p,
                                                citationFormat: s.citationFormat,
                                                citationCounter: s.citationCounter,
                                                recordMap: d,
                                                spaceId: t.spaceId,
                                                parseAgentUrlFn: h
                                            }),
                                            ...n.icon ? {
                                                icon: (0, i(223393).U)(n.icon)
                                            } : {},
                                            createdBy: a
                                        });
                                    e.push(...y);
                                    let b = A({
                                        blockId: u,
                                        parentPointer: t,
                                        collection: {
                                            table: m.table,
                                            id: m.id,
                                            spaceId: m.spaceId
                                        },
                                        inline: !!n.inline,
                                        idCreator: l,
                                        actorPointer: a,
                                        legacyNonCrdt: o,
                                        getNow: f
                                    });
                                    e.push(...b.operations), r = b.blockModel
                                }
                            else throw Error(`Cannot create ${n.type} blocks`);
                            return {
                                value: {
                                    blockId: u,
                                    operations: e
                                }
                            }
                        }
                        return s.claimedPreservedBlockIds.add(u), {
                            value: {
                                blockId: u,
                                operations: e
                            }
                        }
                    }
                    if ("synced_block_reference" === n.type) {
                        let {
                            pageOrBlockId: r,
                            blockId: u
                        } = (0, m().OR)(n.originalUrl, p), b = u || r;
                        if (!b) throw Error("synced_block_reference must include a valid originalUrl");
                        let v = l.idInSavedSpace(c().ev),
                            {
                                model: _,
                                operations: I
                            } = i(993189).zgg.create({
                                id: v,
                                type: "transclusion_reference",
                                parentPointer: t,
                                alive: !0,
                                created_time: f(),
                                createdBy: a,
                                space_id: t.spaceId,
                                format: {
                                    transclusion_reference_pointer: {
                                        id: b,
                                        spaceId: t.spaceId,
                                        table: "block"
                                    }
                                },
                                legacyNonCrdt: o
                            });
                        if (e.push(...I), n.children && n.children.length > 0) {
                            let i = d.getModel({
                                table: c().ev,
                                id: b,
                                spaceId: t.spaceId
                            });
                            if (k && i && !k(b)) null == y || y.push({
                                template: "Cannot modify the synced block content because you do not have edit access to the page containing the original synced block. The synced block reference was created but its content was not updated."
                            });
                            else {
                                let i = z({
                                    originalBlockId: b,
                                    newChildren: n.children,
                                    spaceId: t.spaceId,
                                    idCreator: l,
                                    legacyNonCrdt: o,
                                    actorPointer: a,
                                    context: s,
                                    recordMap: d,
                                    uriContext: p,
                                    getNow: f,
                                    parseAgentUrlFn: h,
                                    preservedBlocksWithUrls: g,
                                    warnings: y,
                                    checkBlockEditAccess: k
                                });
                                e.push(...i)
                            }
                        }
                        return {
                            value: {
                                blockId: _.id,
                                operations: e
                            }
                        }
                    }
                    if ("synced_block" === n.type && n.url) {
                        let {
                            pageOrBlockId: r,
                            blockId: u
                        } = (0, m().OR)(n.url, p), b = u || r;
                        if (!b) throw new(i(520026)).Yv("invalid synced block url");
                        if (g.has(b) && d.getModel({
                                table: c().ev,
                                id: b,
                                spaceId: t.spaceId
                            })) {
                            if (n.children && n.children.length > 0)
                                if (k && !k(b)) null == y || y.push({
                                    template: "Cannot modify the synced block content because you do not have edit access to the page containing the original synced block. The content was not updated."
                                });
                                else {
                                    let i = z({
                                        originalBlockId: b,
                                        newChildren: n.children,
                                        spaceId: t.spaceId,
                                        idCreator: l,
                                        legacyNonCrdt: o,
                                        actorPointer: a,
                                        context: s,
                                        recordMap: d,
                                        uriContext: p,
                                        getNow: f,
                                        parseAgentUrlFn: h,
                                        preservedBlocksWithUrls: g,
                                        warnings: y,
                                        checkBlockEditAccess: k
                                    });
                                    e.push(...i)
                                }
                            return {
                                value: {
                                    blockId: b,
                                    operations: e
                                }
                            }
                        }
                        null == y || y.push({
                            template: "Synced block with URL {url} was not found on the page. If you meant to create a synced block reference, use synced_block_reference tags instead. Falling back to creating a new synced block (which will not be synced with some original block).",
                            variables: {
                                url: n.url
                            }
                        })
                    } else if ("transcription" === n.type) {
                        if (n.url) {
                            let t = $(n.url, p);
                            if (g.has(t)) return s.claimedPreservedBlockIds.add(t), {
                                value: {
                                    blockId: t,
                                    operations: e
                                }
                            }
                        }
                        let r = l.idInSavedSpace(c().ev),
                            {
                                model: u,
                                operations: m
                            } = i(993189).zgg.create({
                                id: r,
                                type: "transcription",
                                parentPointer: t,
                                alive: !0,
                                created_time: f(),
                                createdBy: a,
                                space_id: t.spaceId,
                                legacyNonCrdt: o
                            });
                        e.push(...m);
                        let b = {
                            table: c().ev,
                            id: u.id,
                            spaceId: t.spaceId
                        };
                        n.text && e.push(i(488307).op.update({
                            pointer: b,
                            path: ["properties"],
                            args: {
                                title: O({
                                    text: n.text,
                                    uriContext: p,
                                    citationFormat: s.citationFormat,
                                    citationCounter: s.citationCounter,
                                    recordMap: d,
                                    spaceId: t.spaceId,
                                    parseAgentUrlFn: h
                                })
                            }
                        }));
                        let v = {
                                transcription_state: {
                                    state: "initial"
                                }
                            },
                            _ = [],
                            k = n.summary,
                            I = k && "children" in k ? k.children : void 0,
                            w = I && I.length > 0;
                        if (w) {
                            let {
                                sectionId: t,
                                operations: i
                            } = M({
                                parentPointer: b,
                                sectionChildren: I,
                                idCreator: l,
                                legacyNonCrdt: o,
                                actorPointer: a,
                                context: s,
                                recordMap: d,
                                uriContext: p,
                                getNow: f,
                                parseAgentUrlFn: h,
                                warnings: y
                            });
                            e.push(...i), v.transcription_state = {
                                state: "idle"
                            }, v.transcription_summary_id = t, _.push(t)
                        }
                        let x = n.notes,
                            E = x && "children" in x ? x.children : void 0,
                            {
                                sectionId: U,
                                operations: C
                            } = M({
                                parentPointer: b,
                                sectionChildren: E,
                                idCreator: l,
                                legacyNonCrdt: o,
                                actorPointer: a,
                                context: s,
                                recordMap: d,
                                uriContext: p,
                                getNow: f,
                                parseAgentUrlFn: h,
                                warnings: y
                            });
                        e.push(...C), v.transcription_notes_id = U, _.push(U);
                        let S = n.transcript,
                            T = S && "children" in S ? S.children : void 0;
                        if (w || T && T.length > 0) {
                            let {
                                sectionId: t,
                                operations: i
                            } = M({
                                parentPointer: b,
                                sectionChildren: T,
                                idCreator: l,
                                legacyNonCrdt: o,
                                actorPointer: a,
                                context: s,
                                recordMap: d,
                                uriContext: p,
                                getNow: f,
                                parseAgentUrlFn: h,
                                warnings: y
                            });
                            e.push(...i), v.transcription_transcript_id = t, _.push(t)
                        }
                        return e.push({
                            command: "update",
                            path: ["format"],
                            pointer: b,
                            args: v
                        }), e.push({
                            command: "set",
                            path: ["content"],
                            pointer: b,
                            args: _
                        }), {
                            value: {
                                blockId: u.id,
                                operations: e
                            }
                        }
                    } else if (w && g.has(w)) {
                        if (!d.getModel({
                                table: c().ev,
                                id: w,
                                spaceId: t.spaceId
                            })) throw Error(`Media block ${w} does not exist in the current space`);
                        return {
                            value: {
                                blockId: w,
                                operations: e
                            }
                        }
                    }
                    let x = l.idInSavedSpace(c().ev),
                        {
                            type: E,
                            format: U,
                            properties: C,
                            fileIds: S,
                            copiedFromPointer: T
                        } = function(e) {
                            let t, {
                                    blockId: n,
                                    parentId: l,
                                    agentBlock: o,
                                    context: a,
                                    uriContext: s,
                                    parseAgentUrlFn: c,
                                    spaceId: d,
                                    recordMap: p
                                } = e,
                                f = (0, i(421814).CU)(o),
                                h = {},
                                g = {},
                                m = [];
                            if ("callout" === o.type)(0, r().O9)(o.icon) && (h.page_icon = (0, i(223393).U)(o.icon)), h.callout_version = 2;
                            else if ("to_do" === o.type)(0, r().O9)(o.checked) && (g.checked = o.checked ? [
                                ["Yes"]
                            ] : [
                                ["No"]
                            ]);
                            else if ("code" === o.type)(0, r().O9)(o.language) && (g.language = [
                                [o.language]
                            ]);
                            else if ("numbered_list" === o.type)(0, r().O9)(o.list_format) && (h.list_format = o.list_format);
                            else if ("h1" === o.type || "h2" === o.type || "h3" === o.type || "h4" === o.type) h.toggleable = o.toggleable ? ? !1;
                            else if ("table" === o.type) {
                                var y, b;
                                let e = null == (y = o.rows) ? void 0 : y[0],
                                    t = Array.from({
                                        length: (null == e || null == (b = e.cells) ? void 0 : b.length) || 0
                                    }, (e, t) => (0, i(698596)._g)(`${n}-${t}`));
                                if (h.table_block_column_order = t, a.setTableColumns(n, t), h.table_block_column_header = o.headerRow, h.table_block_row_header = o.headerColumn, h.block_full_width = o.fitPageWidth, o.columnStyles && o.columnStyles.length > 0) {
                                    let e = {};
                                    for (let i = 0; i < t.length && i < o.columnStyles.length; i++) {
                                        let n = o.columnStyles[i],
                                            l = {};
                                        if (n.color) {
                                            let e = (0, u().Ah)(n.color);
                                            e && (l.color = e)
                                        }
                                        n.width && (l.width = n.width), Object.keys(l).length > 0 && (e[t[i]] = l)
                                    }
                                    Object.keys(e).length > 0 && (h.table_block_column_format = e)
                                }
                            } else if ("edit_reference" === o.type) {
                                if (o.editReferenceData) {
                                    let {
                                        variableNames: e,
                                        editRefNumber: t
                                    } = o.editReferenceData;
                                    h.edit_reference = {
                                        variableNames: e,
                                        editRefNumber: t
                                    }
                                }
                            } else if ("meeting_time_suggestions" === o.type) h.temporary_ui = {
                                type: "meetingTimeSuggestions",
                                suggestionKeys: o.suggestionKeys
                            };
                            else if ("table_row" === o.type) {
                                if ((0, r().O9)(o.cells)) {
                                    let e = a.getTableColumns(l);
                                    for (let t = 0; t < e.length; t++) {
                                        let i = e[t],
                                            n = t < o.cells.length ? o.cells[t] : {
                                                text: []
                                            };
                                        if (i) {
                                            let e = O({
                                                text: n.text || [],
                                                uriContext: s,
                                                citationFormat: a.citationFormat,
                                                citationCounter: a.citationCounter,
                                                recordMap: p,
                                                spaceId: d,
                                                parseAgentUrlFn: c
                                            });
                                            if (g[i] = _(e), n.color) {
                                                let e = (0, u().Ah)(n.color);
                                                e && (h.cell_format || (h.cell_format = {}), h.cell_format[i] = {
                                                    color: e
                                                })
                                            }
                                        }
                                    }
                                }(0, r().O9)(o.color) && (h.block_color = (0, u().Ah)(o.color))
                            } else(0, u().Er)(o) ? (t = W({
                                agentBlock: o,
                                properties: g,
                                format: h,
                                fileIds: m
                            }).copiedFromPointer, o.text && (g.caption = O({
                                text: o.text,
                                uriContext: s,
                                citationFormat: a.citationFormat,
                                citationCounter: a.citationCounter,
                                recordMap: p,
                                spaceId: d,
                                parseAgentUrlFn: c
                            }))) : "text" === o.type || "bulleted_list" === o.type || "toggle" === o.type || "column" === o.type || "column_list" === o.type || "tab" === o.type || "quote" === o.type || "equation" === o.type || "divider" === o.type || "table_of_contents" === o.type || "synced_block" === o.type || "mail" === o.type || (0, r().HB)(o);
                            return {
                                type: f,
                                format: h,
                                properties: g,
                                copiedFromPointer: t,
                                fileIds: m
                            }
                        }({
                            blockId: x,
                            parentId: t.id,
                            agentBlock: n,
                            context: s,
                            uriContext: p,
                            recordMap: d,
                            parseAgentUrlFn: h,
                            spaceId: t.spaceId
                        }),
                        P = {
                            id: x,
                            type: E,
                            parentPointer: t,
                            alive: !0,
                            created_time: f(),
                            createdBy: a,
                            space_id: t.spaceId,
                            file_ids: S,
                            copied_from: (null == T ? void 0 : T.table) === c().ev ? T.id : void 0,
                            properties: { ..."text" in n && n.text && !(0, u().Er)(n) ? {
                                    title: O({
                                        text: n.text,
                                        uriContext: p,
                                        citationFormat: s.citationFormat,
                                        citationCounter: s.citationCounter,
                                        recordMap: d,
                                        spaceId: t.spaceId,
                                        parseAgentUrlFn: h,
                                        skipUrlProcessing: "code" === n.type
                                    })
                                } : {},
                                ...C
                            },
                            format: { ..."color" in n && n.color ? {
                                    block_color: (0, u().Ah)(n.color)
                                } : {},
                                ...U
                            },
                            legacyNonCrdt: o
                        },
                        {
                            model: R,
                            operations: D
                        } = i(993189).zgg.create(P);
                    e.push(...D);
                    let L = {
                        table: c().ev,
                        id: R.id,
                        spaceId: t.spaceId
                    };
                    if ("children" in n && n.children && n.children.length > 0) {
                        let t = F({
                            parentPointer: L,
                            children: n.children,
                            idCreator: l,
                            legacyNonCrdt: o,
                            actorPointer: a,
                            context: s,
                            recordMap: d,
                            uriContext: p,
                            getNow: f,
                            parseAgentUrlFn: h,
                            preservedBlocksWithUrls: g,
                            warnings: y
                        });
                        e.push(...t)
                    } else if ("table" === n.type && n.rows && n.rows.length > 0) {
                        let t = F({
                            parentPointer: L,
                            children: n.rows,
                            idCreator: l,
                            legacyNonCrdt: o,
                            actorPointer: a,
                            context: s,
                            recordMap: d,
                            uriContext: p,
                            getNow: f,
                            parseAgentUrlFn: h,
                            preservedBlocksWithUrls: g,
                            warnings: y
                        });
                        e.push(...t)
                    }
                    return {
                        value: {
                            blockId: R.id,
                            operations: e
                        }
                    }
                } catch (e) {
                    if (console.error(e), e instanceof i(520026).Yv) return {
                        error: e
                    };
                    return {
                        error: new(i(520026)).Yv("Failed to create block")
                    }
                }
            }

            function R(e) {
                let {
                    parentPointer: t,
                    blockIds: i,
                    beforeBlockId: n,
                    afterBlockId: l
                } = e;
                return n ? {
                    command: "insertChildrenBefore",
                    path: ["content"],
                    pointer: t,
                    args: {
                        ids: i,
                        before: n
                    }
                } : {
                    command: "insertChildrenAfter",
                    path: ["content"],
                    pointer: t,
                    args: {
                        ids: i,
                        after: l
                    }
                }
            }

            function D(e) {
                let {
                    block: t,
                    update: n,
                    recordMap: l,
                    uriContext: r
                } = e;
                if ("replace" !== n.action && "replace-block" !== n.action) return;
                let o = "replace-block" === n.action ? n.block : n.blocks[0];
                if (t.isTranscriptionBlock() && "transcription" === o.type) {
                    var a, s;
                    if ("replace-block" === n.action) return;
                    let [, , e] = (0, i(745213)._5)({
                        recordMap: l,
                        spaceId: t.getSpaceId(),
                        baseUrl: r.baseUrl,
                        pageId: t.id
                    }), c = (null == e ? void 0 : e.type) === "text" && e.children || [], d = (0, i(512402).TF)({
                        blocks: c,
                        skipTranscriptionTranscript: !1
                    }).map(e => e.content).join("\n").trim(), p = (null == (a = o.transcript) ? void 0 : a.type) === "text" && (null == (s = o.transcript) ? void 0 : s.children) || [];
                    if (d !== (0, i(512402).TF)({
                            blocks: p.map(function e(t) {
                                let n = { ...t,
                                    id: (0, i(4962).Ay)()
                                };
                                return "table_row" === t.type ? { ...n,
                                    type: "table_row",
                                    cells: t.cells
                                } : "table" === t.type ? { ...n,
                                    type: "table",
                                    rows: t.rows.map(t => e(t))
                                } : "children" in t && t.children && t.children.length > 0 ? { ...n,
                                    children: t.children.map(e)
                                } : n
                            }),
                            skipTranscriptionTranscript: !1
                        }).map(e => e.content).join("\n").trim()) throw new(i(520026)).Yv("Editing transcripts via AI is disabled to preserve the original conversation. Users can manually edit the transcript.")
                }
                let d = l.getModel(t.getParentPointer());
                if (!d || d.table !== c().ev) return;
                let p = l.getModel(d.getParentPointer());
                if (p && p.table === c().ev && p.isTranscriptionBlock()) {
                    let e = p.getFormat().transcription_transcript_id;
                    if (e && e === d.id) throw new(i(520026)).Yv("Editing transcripts via AI is disabled to preserve the original conversation. Users can manually edit the transcript.")
                }
            }

            function L(e) {
                let {
                    agentBlock: t,
                    uriContext: i,
                    onBlockWithUrl: n
                } = e;
                if ("url" in t && t.url) {
                    let e = function(e, t) {
                        try {
                            return $(e, t)
                        } catch (e) {
                            return
                        }
                    }(t.url, i);
                    e && n(e, t)
                } else if ((0, u().Er)(t)) {
                    let e = B(t);
                    e && n(e, t)
                } else if ("children" in t && t.children)
                    for (let e of t.children) L({
                        agentBlock: e,
                        uriContext: i,
                        onBlockWithUrl: n
                    })
            }

            function j(e) {
                var t, n, o, a, s;
                let {
                    recordMap: p,
                    updates: f,
                    spaceId: h,
                    legacyNonCrdt: g,
                    actorPointer: k,
                    idCreator: w,
                    pageId: x,
                    uriContext: E,
                    options: U,
                    parseAgentUrlFn: S = m().X1,
                    agentBlocksOnPage: T,
                    warnings: B = [],
                    suppressErrors: F = !1,
                    checkBlockEditAccess: M,
                    useCrdtOperations: A
                } = e, z = [], j = e.getNow ? ? Date.now, N = (null == U ? void 0 : U.citationFormat) ? ? "link", V = null == U ? void 0 : U.resolver, X = (null == U ? void 0 : U.disableDatabaseMutations) ? ? !1, Y = {}, Q = {
                    setTableColumns: (e, t) => {
                        Y[e] = t
                    },
                    getTableColumns: e => {
                        var t;
                        if (Y[e]) return Y[e];
                        let i = C({
                            blockId: e,
                            spaceId: h,
                            recordMap: p
                        });
                        if ("table" !== i.type) throw Error(`Try to get column definition for a non-table block: ${e}`);
                        return (null == (t = i.getFormat()) ? void 0 : t.table_block_column_order) || []
                    },
                    citationFormat: N,
                    citationCounter: {
                        current: 0,
                        hrefToNumber: {}
                    },
                    resolver: V,
                    disableDatabaseMutations: X,
                    claimedPreservedBlockIds: new Set
                }, {
                    preservedBlocksWithUrls: K
                } = function(e) {
                    let {
                        updates: t,
                        agentBlocksOnPage: i,
                        uriContext: n
                    } = e, l = new Map;
                    for (let e of i ? ? []) L({
                        agentBlock: e,
                        uriContext: n,
                        onBlockWithUrl: (e, t) => {
                            "id" in t && e === t.id && l.set(e, t)
                        }
                    });
                    let r = new Set,
                        o = new Map;
                    for (let e of t)
                        if ("insert" === e.action || "replace" === e.action)
                            for (let t of e.blocks) L({
                                agentBlock: t,
                                uriContext: n,
                                onBlockWithUrl: (e, t) => {
                                    l.has(e) && (r.add(e), o.set(e, t))
                                }
                            });
                    return {
                        blocksWithUrls: l,
                        preservedBlockIds: r,
                        preservedBlocksWithUrls: o
                    }
                }({
                    updates: f,
                    agentBlocksOnPage: T ? ? [],
                    uriContext: E
                });
                for (let e of f)
                    if ("delete" === e.action) {
                        let i = C({
                                blockId: e.blockId,
                                spaceId: h,
                                recordMap: p
                            }),
                            l = K.get(e.blockId);
                        if (l) {
                            if ("database" === l.type) {
                                let r = l.inline ? "collection_view" : "collection_view_page",
                                    s = (t = e.blockId, n = h, o = i.type, o === (a = r) ? null : {
                                        command: "update",
                                        path: [],
                                        pointer: {
                                            table: c().ev,
                                            id: t,
                                            spaceId: n
                                        },
                                        args: {
                                            type: a
                                        }
                                    });
                                s && z.push(s)
                            }
                            continue
                        }
                        z.push({
                            command: "set",
                            path: ["alive"],
                            pointer: {
                                table: c().ev,
                                id: e.blockId,
                                spaceId: h
                            },
                            args: !1
                        }), z.push({
                            command: "listRemove",
                            path: ["content"],
                            pointer: {
                                table: c().ev,
                                id: i.parent_id,
                                spaceId: h
                            },
                            args: {
                                id: e.blockId
                            }
                        })
                    } else if ("replace" === e.action) {
                    let t = e.blockId,
                        i = C({
                            blockId: t,
                            spaceId: h,
                            recordMap: p
                        });
                    D({
                        block: i,
                        update: e,
                        recordMap: p,
                        uriContext: E
                    });
                    let n = p.getModel({
                            table: c().ev,
                            id: i.parent_id,
                            spaceId: h
                        }),
                        r = (null == n ? void 0 : n.getContentIds()) || [],
                        o = r.indexOf(t);
                    if ("transclusion_container" === i.type && 1 === e.blocks.length && "synced_block" === e.blocks[0].type) {
                        if (M && !M(t)) {
                            B.push({
                                template: "This page contains a synced block whose content lives on another page you do not have edit access to. The synced block content was not modified, but all other edits were applied successfully."
                            });
                            continue
                        }
                        let n = {
                                table: c().ev,
                                id: t,
                                spaceId: h
                            },
                            r = e.blocks[0].children && e.blocks[0].children.length > 0 ? q(e.blocks[0].children) : [],
                            o = [];
                        for (let e of r) {
                            let t = P({
                                parentPointer: n,
                                block: e,
                                idCreator: w,
                                legacyNonCrdt: g,
                                actorPointer: k,
                                context: Q,
                                recordMap: p,
                                uriContext: E,
                                getNow: j,
                                parseAgentUrlFn: S,
                                preservedBlocksWithUrls: K,
                                warnings: B,
                                checkBlockEditAccess: M
                            });
                            if (l().Q.isSuccess(t)) {
                                let {
                                    blockId: e,
                                    operations: i
                                } = t.value;
                                o.push(e), z.push(...i)
                            } else if (!F) throw t.error
                        }
                        for (let e of ((null == (s = i.getContentIds) ? void 0 : s.call(i)) ? ? []).filter(e => !o.includes(e))) z.push({
                            command: "set",
                            path: ["alive"],
                            pointer: {
                                table: c().ev,
                                id: e,
                                spaceId: h
                            },
                            args: !1
                        });
                        z.push({
                            command: "set",
                            path: ["content"],
                            pointer: n,
                            args: o
                        });
                        continue
                    }
                    let a = {
                            table: c().ev,
                            id: i.parent_id,
                            spaceId: h
                        },
                        d = q(e.blocks),
                        u = [],
                        f = [];
                    for (let e of d) {
                        let t = P({
                            parentPointer: a,
                            block: e,
                            idCreator: w,
                            legacyNonCrdt: g,
                            actorPointer: k,
                            context: Q,
                            recordMap: p,
                            uriContext: E,
                            getNow: j,
                            parseAgentUrlFn: S,
                            preservedBlocksWithUrls: K,
                            warnings: B,
                            checkBlockEditAccess: M
                        });
                        if (l().Q.isSuccess(t)) {
                            let {
                                blockId: e,
                                operations: i
                            } = t.value;
                            f.push(...i), u.push(e)
                        } else if (!F) throw t.error
                    }
                    if (u.length > 0) {
                        let t, i;
                        o < r.length - 1 ? t = r[o + 1] : i = e.blockId, f.push(R({
                            parentPointer: a,
                            blockIds: u,
                            beforeBlockId: t,
                            afterBlockId: i
                        }))
                    }
                    u.includes(t) || K.has(t) || (z.push({
                        command: "set",
                        path: ["alive"],
                        pointer: {
                            table: c().ev,
                            id: t,
                            spaceId: h
                        },
                        args: !1
                    }), z.push({
                        command: "listRemove",
                        path: ["content"],
                        pointer: {
                            table: c().ev,
                            id: i.parent_id,
                            spaceId: h
                        },
                        args: {
                            id: t
                        }
                    })), z.push(...f)
                } else if ("insert" === e.action) {
                    let t = function(e) {
                            let {
                                pageId: t,
                                beforeBlockId: i,
                                afterBlockId: n,
                                insideBlockId: l,
                                spaceId: r,
                                recordMap: o
                            } = e;
                            if (i) {
                                let e = C({
                                    blockId: i,
                                    spaceId: r,
                                    recordMap: o
                                });
                                return {
                                    table: c().ev,
                                    id: e.parent_id,
                                    spaceId: r
                                }
                            }
                            if (n) {
                                let e = C({
                                    blockId: n,
                                    spaceId: r,
                                    recordMap: o
                                });
                                return {
                                    table: c().ev,
                                    id: e.parent_id,
                                    spaceId: r
                                }
                            }
                            return l ? {
                                table: c().ev,
                                id: l,
                                spaceId: r
                            } : {
                                table: c().ev,
                                id: t,
                                spaceId: r
                            }
                        }({
                            pageId: x,
                            beforeBlockId: e.beforeBlockId,
                            afterBlockId: e.afterBlockId,
                            insideBlockId: e.insideBlockId,
                            spaceId: h,
                            recordMap: p,
                            uriContext: E
                        }),
                        i = q(e.blocks).map(e => {
                            let i = P({
                                parentPointer: t,
                                block: e,
                                idCreator: w,
                                legacyNonCrdt: g,
                                actorPointer: k,
                                context: Q,
                                recordMap: p,
                                uriContext: E,
                                getNow: j,
                                parseAgentUrlFn: S,
                                preservedBlocksWithUrls: K,
                                warnings: B,
                                checkBlockEditAccess: M
                            });
                            if (l().Q.isSuccess(i)) {
                                let {
                                    blockId: e,
                                    operations: t
                                } = i.value;
                                return z.push(...t), e
                            }
                            if (!F) throw i.error
                        }).filter(r().O9);
                    z.push(R({
                        parentPointer: t,
                        blockIds: i,
                        beforeBlockId: e.beforeBlockId,
                        afterBlockId: e.afterBlockId
                    }))
                } else if ("replace-block" === e.action) {
                    let t = e.blockId,
                        n = C({
                            blockId: t,
                            spaceId: h,
                            recordMap: p
                        });
                    if (D({
                            block: n,
                            update: e,
                            recordMap: p,
                            uriContext: E
                        }), M && !M(t)) {
                        ! function(e, t, i) {
                            let n = e,
                                l = new Set;
                            for (;;) {
                                if (l.has(n)) return !1;
                                l.add(n);
                                let e = i.getModel({
                                    table: c().ev,
                                    id: n,
                                    spaceId: t
                                });
                                if (!e) return !1;
                                let r = e.getType();
                                if ("transclusion_container" === r || "transclusion_reference" === r) return !0;
                                if ("page" === r || "collection_view" === r || "collection_view_page" === r) return !1;
                                let o = e.getParentPointer();
                                if (!o || o.table !== c().ev) return !1;
                                n = o.id
                            }
                        }(t, h, p) && B.push({
                            template: "Cannot modify the block because you do not have edit access to the page containing it. The content was not updated."
                        });
                        continue
                    }
                    let l = function(e) {
                        let {
                            existingBlock: t,
                            block: n,
                            context: l,
                            recordMap: o,
                            uriContext: a,
                            spaceId: s,
                            actorPointer: p,
                            getNow: f,
                            parseAgentUrlFn: h,
                            useCrdtOperations: g
                        } = e, m = {
                            table: c().ev,
                            id: t.id,
                            spaceId: s
                        }, k = (0, i(421814).CU)(n), w = [];
                        "database" === n.type && l.disableDatabaseMutations || t.type === k || w.push({
                            command: "update",
                            path: [],
                            pointer: m,
                            args: {
                                type: k
                            }
                        });
                        let x = {},
                            E = {},
                            U = [];
                        if ("database" === n.type) {
                            if (l.disableDatabaseMutations) throw new(i(520026)).Yv(I);
                            if ((0, r().O9)(n.inline)) {
                                let e = n.inline ? "collection_view" : "collection_view_page";
                                t.type !== e && w.push({
                                    command: "update",
                                    path: [],
                                    pointer: m,
                                    args: {
                                        type: e
                                    }
                                })
                            }
                            if (n.dataSourceUrl) {
                                let {
                                    collection: e
                                } = v({
                                    type: "dataSource",
                                    resourceUrl: n.dataSourceUrl,
                                    recordMap: o,
                                    ...l.resolver ? {
                                        resolver: l.resolver
                                    } : {
                                        uriContext: a
                                    }
                                });
                                x.collection_pointer = e.pointer
                            } else {
                                var C, S;
                                if (n.text) {
                                    let e = null == (C = t.getCollectionPointers) ? void 0 : C.call(t);
                                    if (e && e.length > 0) {
                                        let t = e[0],
                                            i = O({
                                                text: n.text,
                                                uriContext: a,
                                                citationFormat: l.citationFormat,
                                                citationCounter: l.citationCounter,
                                                recordMap: o,
                                                spaceId: s,
                                                parseAgentUrlFn: h
                                            });
                                        w.push({
                                            command: "set",
                                            path: ["name"],
                                            pointer: t,
                                            args: i
                                        })
                                    }
                                }
                                if (n.icon) {
                                    let e = null == (S = t.getCollectionPointers) ? void 0 : S.call(t);
                                    if (e && e.length > 0) {
                                        let t = e[0];
                                        w.push({
                                            command: "set",
                                            path: ["icon"],
                                            pointer: t,
                                            args: (0, i(223393).U)(n.icon)
                                        })
                                    }
                                }
                            }
                        } else if ("callout" === n.type)(0, r().O9)(n.icon) && (x.page_icon = (0, i(223393).U)(n.icon)), x.callout_version = 2, E.title = [];
                        else if ("to_do" === n.type)(0, r().O9)(n.checked) && (E.checked = n.checked ? [
                            ["Yes"]
                        ] : [
                            ["No"]
                        ]);
                        else if ("code" === n.type)(0, r().O9)(n.language) && (E.language = [
                            [n.language]
                        ]);
                        else if ("numbered_list" === n.type)(0, r().O9)(n.list_format) && (x.list_format = n.list_format);
                        else if ("h1" === n.type || "h2" === n.type || "h3" === n.type || "h4" === n.type) x.toggleable = !!n.toggleable;
                        else if ("table" === n.type)(0, r().O9)(n.headerRow) && (x.table_block_column_header = n.headerRow), (0, r().O9)(n.headerColumn) && (x.table_block_row_header = n.headerColumn), (0, r().O9)(n.fitPageWidth) && (x.block_full_width = n.fitPageWidth);
                        else if ("table_row" === n.type) {
                            if ((0, r().O9)(n.cells)) {
                                let {
                                    columnIds: e,
                                    operations: i
                                } = b({
                                    context: l,
                                    tableBlockId: t.parent_id,
                                    spaceId: s,
                                    cellCount: n.cells.length
                                });
                                w.push(...i);
                                let c = {};
                                for (let t = 0; t < e.length; t++) {
                                    let i = e[t],
                                        r = t < n.cells.length ? n.cells[t] : {
                                            text: []
                                        };
                                    if (i) {
                                        let e = O({
                                            text: r.text || [],
                                            uriContext: a,
                                            citationFormat: l.citationFormat,
                                            citationCounter: l.citationCounter,
                                            recordMap: o,
                                            spaceId: s,
                                            parseAgentUrlFn: h
                                        });
                                        if (E[i] = _(e), r.color) {
                                            let e = (0, u().Ah)(r.color);
                                            e && (c[i] = {
                                                color: e
                                            })
                                        }
                                    }
                                }
                                Object.keys(c).length > 0 && w.push({
                                    command: "update",
                                    path: ["format", "cell_format"],
                                    pointer: m,
                                    args: c
                                }), (0, r().O9)(n.color) && w.push({
                                    command: "update",
                                    path: ["format"],
                                    pointer: m,
                                    args: {
                                        block_color: (0, u().Ah)(n.color)
                                    }
                                })
                            }
                        } else "synced_block_reference" === n.type ? (0, r().O9)(n.originalUrl) && (x.transclusion_reference_pointer = {
                            table: c().ev,
                            id: $(n.originalUrl, a),
                            spaceId: s
                        }) : (0, u().Er)(n) ? (W({
                            agentBlock: n,
                            properties: E,
                            format: x,
                            fileIds: U
                        }), n.text && (E.caption = O({
                            text: n.text,
                            uriContext: a,
                            citationFormat: l.citationFormat,
                            citationCounter: l.citationCounter,
                            recordMap: o,
                            spaceId: s,
                            parseAgentUrlFn: h
                        }))) : "text" === n.type ? (0, r().O9)(n.text) || (E.title = []) : "edit_reference" === n.type ? n.editReferenceData && w.push({
                            command: "update",
                            path: ["format", "edit_reference"],
                            pointer: m,
                            args: { ...n.editReferenceData
                            }
                        }) : "meeting_time_suggestions" === n.type ? w.push({
                            command: "update",
                            path: ["format", "temporary_ui"],
                            pointer: m,
                            args: {
                                type: "meetingTimeSuggestions",
                                suggestionKeys: n.suggestionKeys
                            }
                        }) : "bulleted_list" === n.type || "toggle" === n.type || "column" === n.type || "column_list" === n.type || "tab" === n.type || "quote" === n.type || "equation" === n.type || "divider" === n.type || "table_of_contents" === n.type || "synced_block" === n.type || "page" === n.type || "transcription" === n.type || "mail" === n.type || "unknown" === n.type || (0, r().HB)(n);
                        if ("text" in n && n.text && "database" !== n.type && !(0, u().Er)(n)) {
                            let e = O({
                                    text: n.text,
                                    uriContext: a,
                                    citationFormat: l.citationFormat,
                                    citationCounter: l.citationCounter,
                                    recordMap: o,
                                    spaceId: s,
                                    parseAgentUrlFn: h,
                                    skipUrlProcessing: "code" === n.type
                                }),
                                r = g ? function(e) {
                                    let {
                                        existingBlock: t,
                                        newTitle: n,
                                        sessionId: l
                                    } = e;
                                    if (!t.isCrdtEnabled()) return;
                                    let r = t.getBlockTitleTextSliceTree(l);
                                    if (!r) return;
                                    let o = r.getTextValue();
                                    return function(e) {
                                        let {
                                            textSliceTree: t,
                                            existingTitle: n,
                                            newTitle: l,
                                            pointer: r
                                        } = e, o = [], a = (0, d().q4_)(n), s = (0, d().q4_)(l), c = (0, i(28855).rE)(a, s), p = 0;
                                        for (let [e, i] of c) switch (e) {
                                            case y().DIFF_DELETE:
                                                if (i.length > 0) {
                                                    let e = p + i.length - 1,
                                                        n = t.getOperationsForDeleteText(p, e);
                                                    for (let e = 0; e < n.operations.length; e++) o.push({
                                                        operation: n.operations[e],
                                                        invertedCrdtOperations: e < n.invertedOperations.length ? [n.invertedOperations[e]] : []
                                                    });
                                                    for (let e of n.operations) t.applyDeleteOperation(e)
                                                }
                                                break;
                                            case y().DIFF_INSERT:
                                                if (i.length > 0) {
                                                    let e = t.getOperationsForInsertTextValue(p, [
                                                        [i]
                                                    ], !1);
                                                    for (let t = 0; t < e.operations.length; t++) {
                                                        let i = "insertText" === e.operations[t].type;
                                                        o.push({
                                                            operation: e.operations[t],
                                                            invertedCrdtOperations: i ? [...e.invertedOperations] : []
                                                        })
                                                    }
                                                    for (let i of e.operations) "insertText" === i.type ? t.applyInsertTextOperation(i) : t.applyAnnotationOperation(i);
                                                    p += i.length
                                                }
                                                break;
                                            case y().DIFF_EQUAL:
                                                p += i.length
                                        }
                                        let u = function(e) {
                                            let {
                                                textSliceTree: t,
                                                newTitle: n
                                            } = e, l = [], r = (0, i(288039).k)(t.getTextValue()), o = (0, i(288039).k)(n);
                                            for (let e of r.values())
                                                for (let {
                                                        startIndex: i,
                                                        endIndex: n,
                                                        annotation: r
                                                    } of (e.sort((e, t) => e.sortIndex - t.sortIndex), e)) {
                                                    let e = (0, d().JIi)(r),
                                                        o = t.getOperationsForRemoveAnnotation(i, n, e, !1);
                                                    for (let e = 0; e < o.operations.length; e++) l.push({
                                                        operation: o.operations[e],
                                                        invertedCrdtOperations: e < o.invertedOperations.length ? [o.invertedOperations[e]] : []
                                                    });
                                                    for (let e of o.operations) t.applyAnnotationOperation(e)
                                                }
                                            for (let e of o.values())
                                                for (let {
                                                        startIndex: i,
                                                        endIndex: n,
                                                        annotation: r
                                                    } of (e.sort((e, t) => e.sortIndex - t.sortIndex), e)) {
                                                    let e = t.getOperationsForAddAnnotation(i, n, r);
                                                    for (let t = 0; t < e.operations.length; t++) l.push({
                                                        operation: e.operations[t],
                                                        invertedCrdtOperations: t < e.invertedOperations.length ? [e.invertedOperations[t]] : []
                                                    });
                                                    for (let i of e.operations) t.applyAnnotationOperation(i)
                                                }
                                            return l
                                        }({
                                            textSliceTree: t,
                                            newTitle: l
                                        });
                                        return o.push(...u), {
                                            operationsWithInversions: o.map(({
                                                operation: e,
                                                invertedCrdtOperations: t
                                            }) => ({
                                                operation: (0, i(305050).qA)({
                                                    pointer: r,
                                                    crdtOperation: e
                                                }),
                                                invertedCrdtOperations: t
                                            }))
                                        }
                                    }({
                                        textSliceTree: r,
                                        existingTitle: o,
                                        newTitle: n,
                                        pointer: t.pointer
                                    })
                                }({
                                    existingBlock: t,
                                    newTitle: e
                                }) : void 0;
                            if (r && r.operationsWithInversions.length > 0) {
                                let t = r.operationsWithInversions.map(({
                                    operation: t,
                                    invertedCrdtOperations: i
                                }) => ({ ...t,
                                    agentMetadata: {
                                        updatedTitle: e,
                                        invertedCrdtOperations: i
                                    }
                                }));
                                w.push(...t)
                            } else w.push({
                                command: "update",
                                path: ["properties"],
                                pointer: m,
                                args: {
                                    title: e
                                }
                            })
                        }
                        return "color" in n && n.color && (x.block_color = (0, u().Ah)(n.color)), Object.keys(x).length > 0 && w.push({
                            command: "update",
                            path: ["format"],
                            pointer: m,
                            args: x
                        }), Object.keys(E).length > 0 && w.push({
                            command: "update",
                            path: ["properties"],
                            pointer: m,
                            args: E
                        }), U.length > 0 && w.push(...U.map(e => ({
                            command: "listAfter",
                            pointer: m,
                            path: ["file_ids"],
                            args: {
                                id: e
                            }
                        }))), w.length > 0 && w.push(...t.ops.updateLastEdited({
                            author: p,
                            timestamp: f()
                        })), w
                    }({
                        existingBlock: n,
                        block: e.block,
                        context: Q,
                        recordMap: p,
                        uriContext: E,
                        spaceId: h,
                        actorPointer: k,
                        getNow: j,
                        parseAgentUrlFn: S,
                        useCrdtOperations: A
                    });
                    z.push(...l)
                } else(0, r().HB)(e);
                if (z.length > 0) {
                    let e = p.getModel({
                        table: c().ev,
                        id: x,
                        spaceId: h
                    });
                    e && z.push(...e.ops.updateLastEdited({
                        author: k,
                        timestamp: j()
                    }))
                }
                return z
            }

            function q(e) {
                return e.flatMap(e => ("h1" === e.type || "h2" === e.type || "h3" === e.type || "h4" === e.type) && !e.toggleable && e.children && e.children.length > 0 ? [{ ...e,
                    children: void 0
                }, ...q(e.children)] : "children" in e && e.children && e.children.length > 0 ? [{ ...e,
                    children: q(e.children)
                }] : [e])
            }
        },
        599566: (e, t, i) => {
            i.d(t, {
                FQ: () => D,
                MK: () => S,
                VT: () => T,
                hM: () => C
            }), i(16280), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(823215), i(354520), i(803949), i(581454), i(908872), i(737550), i(736192);
            var n = () => i(722371),
                l = () => i(445621),
                r = () => i(857636),
                o = () => i(512402);
            let a = new Set(["toggle", "column", "column_list", "callout", "quote", "page", "database", "equation", "table_of_contents", "divider", "transcription", "synced_block", "synced_block_reference", "edit_reference", "meeting_time_suggestions", "image", "pdf", "file", "audio", "video", "table"]),
                s = new Set,
                c = Object.values(i(804518).fileExtensionToCodeLanguageMap).reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
                d = "[A-Za-z][\\w-]*",
                p = /\{color="([^"]+)"}?/,
                u = RegExp(`^<(${d})([^>]*)/>$`),
                f = RegExp(`^<(${d})([^>]*)>([\\s\\S]*?)<\\/\\1>(.*)$`),
                h = RegExp("^<(edit_reference)([^>]*)>(.*)$"),
                g = RegExp(`^<(${d})([^>]*)>$`),
                m = new Set([" ", '"', "<", ">", "\n", "\r"]),
                y = /^(:{3,})\s*(\w+)?\s*(.*)$/,
                b = /^:{3,}\s*$/,
                v = new Set(["callout"]),
                _ = /toggle="true"/;

            function k(e, t) {
                let i = e.match(p),
                    n = !(null != t && t.preserveWhitespace);
                if (!i) return {
                    text: n ? e.trim() : e
                };
                let l = e.replace(p, "").trimEnd();
                return {
                    text: n ? l.trim() : l,
                    color: i[1]
                }
            }

            function I(e) {
                return 1 === e ? "h1" : 2 === e ? "h2" : 3 === e ? "h3" : "h4"
            }

            function w(e) {
                var t;
                let i = 0;
                for (; i < e.length && (t = e[i], " 	            　".includes(t));) i++;
                return i
            }

            function x(e = "") {
                if (!e.trim()) return {};
                let t = (0, i(736192).parse)(`<x ${e}/>`).querySelector("x");
                return t ? { ...t.attributes
                } : {}
            }

            function E(e) {
                for (let t of Object.keys(e)) void 0 === e[t] && delete e[t];
                return e
            }

            function U(e, t) {
                if (!e.variableNames) return;
                let i = e.variableNames.split(",").map(e => e.trim()).filter(e => e.length > 0);
                if (0 !== i.length) return {
                    editReferenceData: {
                        variableNames: i,
                        editRefNumber: t ? ++t.count : 0
                    }
                }
            }

            function O(e, t, i, n) {
                return [E(e), t, i, n]
            }

            function $(e) {
                let t = 1 / 0;
                for (let i of e) i.trim() && (t = Math.min(t, w(i)));
                return isFinite(t) || (t = 0), e.map(e => e.slice(t)).join("\n")
            }

            function C(e, t) {
                return T(e, () => !0, t).blocks
            }

            function S(e) {
                let t = e.split(/\r?\n/),
                    i = !1,
                    n = [];
                for (let e of t) {
                    if (e.trim().startsWith("```")) {
                        i = !i, n.push(e);
                        continue
                    }
                    if (i) {
                        n.push(e);
                        continue
                    }
                    "" !== e.trim() && n.push(e)
                }
                return n.join("\n")
            }

            function T(e, t, n) {
                let l = null != n && n.omitBlockTypes && n.omitBlockTypes.length > 0 ? new Set(n.omitBlockTypes) : s,
                    r = e;
                null != n && n.normalizePartialMarkdown ? r = (0, i(994835).Cy)(r) : null != n && n.normalizeFullMarkdown && (r = (0, i(994835).wp)(r));
                let o = (function(e) {
                    let t = e.split(/\r?\n/),
                        i = !1,
                        n = [];
                    for (let e of t) {
                        if (e.trim().startsWith("```")) {
                            i = !i, n.push(e);
                            continue
                        }
                        if (i) {
                            n.push(e);
                            continue
                        }
                        let t = e.trim().match(/^<(page|database)(\s[^>]*)?\/>$/);
                        if (t) {
                            var l;
                            let i = t[1],
                                r = t[2] ? ? "",
                                o = (null == (l = e.match(/^(\s*)/)) ? void 0 : l[1]) ? ? "";
                            n.push(`${o}<${i}${r}></${i}>`)
                        } else n.push(e)
                    }
                    return n.join("\n")
                })(function(e) {
                    let t = e.split(/\r?\n/),
                        i = !1,
                        n = [];
                    for (let e of t) {
                        var l;
                        if (e.trim().startsWith("```")) {
                            i = !i, n.push(e);
                            continue
                        }
                        if (i) {
                            n.push(e);
                            continue
                        }
                        let t = e.trim(),
                            r = (null == (l = e.match(/^(\s*)/)) ? void 0 : l[1]) ? ? "";
                        if (t.startsWith("<empty-block/>") && t.length > 14) {
                            n.push(`${r}<empty-block/>`);
                            let e = t.slice(14);
                            e.trim() && n.push(`${r}${e}`)
                        } else n.push(e)
                    }
                    return n.join("\n")
                }(S(r.replace(/\[\^\s+/g, "[^")))).split("\n");
                1 === o.length && "" === o[0] && o.pop();
                let [a, c, d, p] = B(o, 0, 0, t, l, !1, {
                    count: 0
                });
                return {
                    blocks: a,
                    unsafeUrls: d,
                    missingContent: p
                }
            }

            function B(e, t, l, d, p = s, m = !1, E) {
                let C = [],
                    S = t,
                    T = [],
                    M = [];
                for (; S < e.length;) {
                    var A;
                    if (w(e[S]) < l) break;
                    let [t, m, z, P] = function(e, t, l, a = s, d) {
                        let p = e[t],
                            m = w(p),
                            E = p.trim(); {
                            let i = E.match(/^▶(#{1,4})\s+(.*)$/);
                            if (i) {
                                let n = i[1].length,
                                    r = k(i[2]),
                                    [o, s, c, p] = W(e, t + 1, m, l, a, d);
                                return O({
                                    type: I(n),
                                    text: D(r.text),
                                    color: r.color,
                                    toggleable: !0,
                                    children: o
                                }, s, c, p)
                            }
                        } {
                            let i = E.match(/^▶(?:\s+(.*))?$/);
                            if (i) {
                                let n = k(i[1] ? ? ""),
                                    [r, o, s, c] = W(e, t + 1, m, l, a, d);
                                return O({
                                    type: "toggle",
                                    text: n.text ? D(n.text) : void 0,
                                    color: n.color,
                                    children: r
                                }, o, s, c)
                            }
                        } {
                            let n = E.match(y);
                            if (n) {
                                var C;
                                let o = null == (C = n[2]) ? void 0 : C.toLowerCase();
                                if (o && v.has(o)) {
                                    let s = n[3] ? ? "",
                                        c = x(s),
                                        p = k(s).color,
                                        u = (0, r().Fi)(c.color) ? c.color : p,
                                        f = [],
                                        h = t + 1;
                                    for (; h < e.length;) {
                                        let t = e[h].trim();
                                        if (b.test(t)) break;
                                        f.push(e[h]), h++
                                    }
                                    let [g, y, v, _] = B(f, 0, m, l, a, !0, d), I = g.length ? g : void 0;
                                    if ("callout" === o) return O({
                                        type: "callout",
                                        icon: (0, i(345740).Ew)(c.icon),
                                        color: u,
                                        children: I
                                    }, h + 1, v, _)
                                }
                            }
                        } {
                            let e = E.match(u);
                            if (e) {
                                let i = e[1],
                                    n = x(e[2]);
                                switch (i) {
                                    case "empty-block":
                                        return O({
                                            type: "text"
                                        }, t + 1, [], []);
                                    case "table_of_contents":
                                        return O({
                                            type: "table_of_contents",
                                            color: n.color
                                        }, t + 1, [], []);
                                    case "meeting_time_suggestions":
                                        return O({
                                            type: "meeting_time_suggestions",
                                            ...n.suggestionKeys ? {
                                                suggestionKeys: n.suggestionKeys.split(",").map(e => e.trim()).filter(e => e.length > 0)
                                            } : {}
                                        }, t + 1, [], []);
                                    case "unknown":
                                        return O({
                                            type: "unknown",
                                            url: n.url ? ? "",
                                            alt: n.alt
                                        }, t + 1, [], [])
                                }
                            }
                        } {
                            let n = E.match(f);
                            if (n) {
                                let r = n[1],
                                    o = x(n[2]),
                                    a = k(n[3]),
                                    s = n[4].trim(),
                                    c = a.text || "callout" === r ? D(a.text) : void 0,
                                    p = o.color ? ? a.color;
                                switch (r) {
                                    case "callout":
                                        let u = a.text ? [{
                                            type: "text",
                                            text: c
                                        }] : void 0;
                                        return O({
                                            type: "callout",
                                            icon: (0, i(345740).Ew)(o.icon),
                                            color: p,
                                            children: u
                                        }, t + 1, [], []);
                                    case "page":
                                        return O({
                                            type: "page",
                                            url: o.url,
                                            text: c,
                                            color: p
                                        }, t + 1, [], []);
                                    case "database":
                                        {
                                            let e = k(n[3], {
                                                    preserveWhitespace: !0
                                                }),
                                                l = e.text ? D(e.text) : void 0;
                                            return O({
                                                type: "database",
                                                url: o.url,
                                                inline: "true" === o.inline,
                                                ...o["data-source-url"] ? {
                                                    dataSourceUrl: o["data-source-url"]
                                                } : {},
                                                ...void 0 !== o.icon ? {
                                                    icon: (0, i(345740).Ew)(o.icon)
                                                } : {},
                                                text: l,
                                                color: p
                                            }, t + 1, [], [])
                                        }
                                    case "audio":
                                    case "image":
                                    case "video":
                                    case "file":
                                    case "pdf":
                                        {
                                            let i = o.source || o.src;
                                            if (s && e.splice(t + 1, 0, s), i && l && !l(i)) return O({
                                                type: "text",
                                                text: [i]
                                            }, t + 1, [i], []);
                                            return O({
                                                type: r,
                                                ...i && {
                                                    source: i
                                                },
                                                text: c,
                                                color: p
                                            }, t + 1, i && l && !l(i) ? [i] : [], [])
                                        }
                                    case "edit_reference":
                                        {
                                            let i = U(o, d);
                                            if (!i) return s && e.splice(t + 1, 0, s), O({
                                                type: "text",
                                                text: c ? ? []
                                            }, t + 1, [], []);
                                            let n = a.text ? D(a.text) : [];
                                            return s && e.splice(t + 1, 0, s),
                                            O({
                                                type: "edit_reference",
                                                editReferenceData: i.editReferenceData,
                                                text: n
                                            }, t + 1, [], [])
                                        }
                                }
                            }
                        } {
                            let n = E.match(h),
                                s = n ? ? E.match(g);
                            if (s) {
                                let c = s[1],
                                    p = x(s[2]),
                                    u = n ? s[3] : "",
                                    f = p.color,
                                    h = (0, i(345740).Ew)(p.icon),
                                    g = t + 1,
                                    y = 1;
                                for (; g < e.length && y > 0;) {
                                    let t = e[g].trim();
                                    if (t === `<${c}>` || t.match(RegExp(`^<${c}\\s+[^>]*>$`))) y++;
                                    else if (RegExp(`^</${c}(\\s|>)`).test(t) && 0 == --y) break;
                                    g++
                                }
                                let b = [];
                                u.trim() && b.push(u), b.push(...e.slice(t + 1, g));
                                let [v, _, I, w] = B(b, 0, m, l, a, !0, d), E = v.length ? v : void 0;
                                switch (c) {
                                    case "callout":
                                        return O({
                                            type: "callout",
                                            icon: h,
                                            color: f,
                                            children: E
                                        }, g + 1, I, w);
                                    case "details":
                                        {
                                            let e, t, i = [];
                                            for (let t of b) {
                                                let n = t.trim().match(/^<summary>(.*)<\/summary>$/);
                                                n && void 0 === e ? e = n[1] : i.push(t)
                                            }
                                            let n = e ? k(e) : {
                                                text: ""
                                            };
                                            if (i.length > 0) {
                                                let [e] = B(i, 0, m, l, a, !0, d);
                                                t = e.length ? e : void 0
                                            }
                                            return O({
                                                type: "toggle",
                                                text: n.text ? D(n.text) : void 0,
                                                color: n.color ? ? f,
                                                children: t
                                            }, g + 1, I, w)
                                        }
                                    case "columns":
                                        return O({
                                            type: "column_list",
                                            children: E
                                        }, g + 1, I, w);
                                    case "tabs":
                                        return O({
                                            type: "tab",
                                            children: E
                                        }, g + 1, I, w);
                                    case "column":
                                        return O({
                                            type: "column",
                                            children: E
                                        }, g + 1, I, w);
                                    case "tab":
                                        {
                                            let e = b.findIndex(e => "" !== e.trim()),
                                                t = k(e >= 0 ? b[e].trim() : ""),
                                                [i, n, r, o] = B(e >= 0 ? b.slice(e + 1) : [], 0, m, l, a, !0, d);
                                            return O({
                                                type: "text",
                                                text: t.text ? D(t.text) : void 0,
                                                color: t.color,
                                                children: i.length > 0 ? i : void 0
                                            }, g + 1, r, o)
                                        }
                                    case "synced_block":
                                        return O({
                                            type: "synced_block",
                                            url: p.url,
                                            children: E
                                        }, g + 1, I, w);
                                    case "synced_block_reference":
                                        if (!p.url) throw Error("Synced block reference must include a valid url");
                                        return O({
                                            type: "synced_block_reference",
                                            originalUrl: p.url,
                                            children: E
                                        }, g + 1, I, w);
                                    case "edit_reference":
                                        {
                                            let e = U(p, d);
                                            if (!e) {
                                                if (E && E.length > 0) return O(E[0], g + 1, I, w);
                                                return O({
                                                    type: "text",
                                                    text: []
                                                }, g + 1, I, w)
                                            }
                                            let t = function e(t) {
                                                let i = [];

                                                function n() {
                                                    if (0 === i.length) return;
                                                    let e = i[i.length - 1];
                                                    "string" == typeof e ? e.endsWith("\n") || (i[i.length - 1] = e + "\n") : i.push("\n")
                                                }
                                                for (let l = 0; l < t.length; l++) {
                                                    let r = t[l];
                                                    if ("text" in r && r.text && (n(), i.push(...r.text)), "children" in r && r.children) {
                                                        let t = e(r.children);
                                                        t.length > 0 && (n(), i.push(...t))
                                                    }
                                                }
                                                return i
                                            }(E ? ? []);
                                            return O({
                                                type: "edit_reference",
                                                editReferenceData: e.editReferenceData,
                                                text: t
                                            }, g + 1, I, w)
                                        }
                                    case "table":
                                        let $, C = [],
                                            S = 0,
                                            T = "true" === p["fit-page-width"] || "false" !== p["fit-page-width"] && void 0,
                                            W = "true" === p["header-row"] || "false" !== p["header-row"] && void 0,
                                            F = "true" === p["header-column"] || "false" !== p["header-column"] && void 0;
                                        if (S < b.length && b[S].trim().startsWith("<colgroup>")) {
                                            let e = S;
                                            for (; e < b.length && !b[e].trim().includes("</colgroup>") && !b[e].trim().startsWith("<tr");) e++;
                                            let t = [];
                                            for (let i = S + 1; i < e; i++) {
                                                let e = b[i].trim().match(/<col(?:\s+([^>]*?))?(?:>|$)/);
                                                if (e) {
                                                    let i = {};
                                                    if (e[1]) {
                                                        let t = x(e[1]);
                                                        if (i.color = (0, r().Fi)(t.color) ? t.color : void 0, t.width) {
                                                            let e = parseFloat(t.width);
                                                            !isNaN(e) && e > 0 && (i.width = e)
                                                        }
                                                    }
                                                    t.push(i)
                                                }
                                            }
                                            t.length > 0 && ($ = t), S = e < b.length && b[e].trim().includes("</colgroup>") ? e + 1 : e
                                        }
                                        for (; S < b.length;) {
                                            let e = b[S].trim();
                                            if (e.startsWith("<tr>") || e.startsWith("<tr ")) {
                                                let t, i = S + 1,
                                                    n = !1;
                                                for (; i < b.length;) {
                                                    let e = b[i].trim();
                                                    if (e.includes("</tr>")) {
                                                        n = !0;
                                                        break
                                                    }
                                                    if (e.startsWith("<tr") || e.startsWith("</table")) {
                                                        i--;
                                                        break
                                                    }
                                                    i++
                                                }
                                                let l = e.match(/<tr(?:\s+([^>]*))?>/);
                                                if (l && l[1]) {
                                                    let e = x(l[1]);
                                                    e.color && (0, r().Fi)(e.color) && (t = e.color)
                                                }
                                                let o = i + 1,
                                                    a = b.slice(S, o).join("\n"),
                                                    s = [],
                                                    c = a.indexOf("<", a.indexOf(">"));
                                                for (; - 1 !== c && c < a.length;) {
                                                    let e, t = a.slice(c).match(/^<(th|td)(?:\s+([^>]*?))?(?:>|$)/);
                                                    if (!t) {
                                                        c = a.indexOf("<", c + 1);
                                                        continue
                                                    }
                                                    let i = t[1],
                                                        n = t[2] || "",
                                                        l = c + t[0].length,
                                                        o = l,
                                                        d = `</${i}>`,
                                                        p = a.indexOf(d, l),
                                                        u = a.length,
                                                        f = a.slice(l).match(/<(?:th|td|\/tr|tr)[\s>]/);
                                                    if (f && void 0 !== f.index && (u = l + f.index), -1 !== p && p < u) o = p, c = p + d.length;
                                                    else if (o = u, c = u, f) {
                                                        let e = a.slice(u).match(/^<(\w+)/);
                                                        e && "tr" === e[1] && (c = a.length)
                                                    }
                                                    let h = a.slice(l, o).replace(/^\r?\n/, "").replace(/\r?\n[ \t]*$/, ""),
                                                        g = D(h),
                                                        m = 0 === g.length && "" === h ? [""] : g;
                                                    if (n) {
                                                        let t = x(n);
                                                        t.color && (0, r().Fi)(t.color) && (e = t.color)
                                                    }
                                                    let y = {
                                                        text: m
                                                    };
                                                    e && (y.color = e), s.push(y)
                                                }
                                                if (s.length > 0) {
                                                    let e = {
                                                        type: "table_row",
                                                        cells: s
                                                    };
                                                    t && (e.color = t), C.push(e)
                                                }
                                                S = n ? i + 1 : i
                                            } else S++
                                        }
                                        let M = {
                                            type: "table",
                                            rows: C
                                        };
                                        if ($ && $.length > 0) {
                                            let e = Math.max(0, ...C.map(e => e.cells.length)),
                                                t = [...$];
                                            for (; t.length < e;) t.push({});
                                            M.columnStyles = t
                                        }
                                        return void 0 !== W && (M.headerRow = W), void 0 !== F && (M.headerColumn = F), void 0 !== T && (M.fitPageWidth = T), O(M, g + 1, [], []);
                                    case "meeting-notes":
                                        let A = {
                                            type: "transcription"
                                        };
                                        p.readOnlyViewMeetingNoteUrl && (A.url = p.readOnlyViewMeetingNoteUrl);
                                        let z = t + 1,
                                            P = [];
                                        for (; z < g;) {
                                            let t = e[z].trim();
                                            if ("<summary>" === t || "<notes>" === t || "<transcript>" === t) break;
                                            P.push(e[z]), z++
                                        }
                                        P.length > 0 && (A.text = D(P.join("\n").trim()));
                                        let R = [],
                                            L = [];
                                        for (; z < g;) {
                                            let t = e[z].trim();
                                            if ("<summary>" === t) {
                                                let t = z + 1;
                                                for (; t < g && !e[t].trim().startsWith("</summary>");) t++;
                                                let i = e.slice(z + 1, t);
                                                if (i.some(e => "" !== e.trim())) {
                                                    let [e, t, n, r] = B(i, 0, m + 1, l, a, !0, d);
                                                    R.push(...n), L.push(...r), e.length && (A.summary = {
                                                        type: "text",
                                                        children: e
                                                    })
                                                }
                                                z = t + 1;
                                                continue
                                            }
                                            if ("<notes>" === t) {
                                                let t = z + 1;
                                                for (; t < g && !e[t].trim().startsWith("</notes>");) t++;
                                                let i = e.slice(z + 1, t);
                                                if (i.some(e => "" !== e.trim())) {
                                                    let [e, t, n, r] = B(i, 0, m + 1, l, a, !0, d);
                                                    R.push(...n), L.push(...r), e.length && (A.notes = {
                                                        type: "text",
                                                        children: e
                                                    })
                                                }
                                                z = t + 1;
                                                continue
                                            }
                                            if ("<transcript>" === t) {
                                                let t = z + 1;
                                                for (; t < g && !e[t].trim().startsWith("</transcript>");) t++;
                                                let i = e.slice(z + 1, t),
                                                    n = i.map(e => e.trim()).join(" ").trim();
                                                if (!(0, o().qI)(n) && i.some(e => "" !== e.trim())) {
                                                    let [e, t, n, r] = B(i, 0, m + 1, l, a, !0, d);
                                                    R.push(...n), L.push(...r), e.length && (A.transcript = {
                                                        type: "text",
                                                        children: e
                                                    })
                                                }
                                                z = t + 1;
                                                continue
                                            }
                                            z++
                                        }
                                        return O(A, g + 1, R, L)
                                }
                            }
                        }
                        if (E.startsWith("```")) {
                            let l, r = E.slice(3).trim() || void 0;
                            ("plaintext" === r || "text" === r) && (r = "plain text");
                            let o = t + 1,
                                a = [];
                            for (; o < e.length && !e[o].trim().startsWith("```");) a.push(e[o]), o++;
                            return "string" == typeof r && ((0, n().O)(i(804518).fileExtensionToCodeLanguageMap, r) ? l = i(804518).fileExtensionToCodeLanguageMap[r] : (0, n().O)(c, r.toLowerCase()) && (l = c[r.toLowerCase()])), O({
                                type: "code",
                                language: l,
                                text: [$(a)]
                            }, o + 1, [], [])
                        }
                        if ("$$" === E) {
                            let i = t + 1,
                                n = [];
                            for (; i < e.length && "$$" !== e[i].trim();) n.push(e[i]), i++;
                            return O({
                                type: "equation",
                                text: [$(n)]
                            }, i + 1, [], [])
                        }
                        if (E.startsWith("|")) {
                            let i = [],
                                n = t;
                            for (; n < e.length && e[n].trim().startsWith("|");) i.push({
                                type: "table_row",
                                cells: e[n].trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(e => e.trim()).map(e => ({
                                    text: D(e)
                                }))
                            }), n++;
                            let l = !1;
                            return i.length >= 2 && i[1].cells.every(e => {
                                var t;
                                return (null == (t = e.text) ? void 0 : t.length) === 1 && "string" == typeof e.text[0] && /^-+$/.test(e.text[0])
                            }) && (i.splice(1, 1), l = !0), O({
                                type: "table",
                                rows: i,
                                ...l && {
                                    headerRow: !0
                                }
                            }, n, [], [])
                        }
                        if (/^(?:-{2,}|\*{3,}|_{3,})$/.test(E)) return O({
                            type: "divider"
                        }, t + 1, [], []); {
                            let i = E.match(/^!\[(.*?)\]\((\S*)(?:\s+"[^"]*")?\)\s*(.*)$/);
                            if (i) {
                                let n = i[1],
                                    r = i[2],
                                    o = k(i[3] ? ? ""),
                                    a = o.text.trim();
                                return (a && e.splice(t + 1, 0, a), r && l && !l(r)) ? O({
                                    type: "text",
                                    text: [r]
                                }, t + 1, [r], []) : O({
                                    type: "image",
                                    ...r && {
                                        source: r
                                    },
                                    text: n ? D(k(n).text) : void 0,
                                    color: o.color
                                }, t + 1, r && l && !l(r) ? [r] : [], [])
                            }
                        } {
                            let i = E.match(/^(#{1,6})\s+(.*)$/);
                            if (i) {
                                let n = Math.min(i[1].length, 4),
                                    r = function(e) {
                                        if (!_.test(e)) return {
                                            text: e,
                                            toggleable: !1
                                        };
                                        let t = e.replace(/\s*toggle="true"\s*/g, " ");
                                        return {
                                            text: t = (t = (t = (t = t.replace(/\{\s*\}/g, "")).replace(/\{\s+/g, "{")).replace(/\s+\}/g, "}")).trimEnd(),
                                            toggleable: !0
                                        }
                                    }(i[2]),
                                    o = k(r.text);
                                if (r.toggleable) {
                                    let [i, r, s, c] = W(e, t + 1, m, l, a, d);
                                    return O({
                                        type: I(n),
                                        text: D(o.text),
                                        color: o.color,
                                        toggleable: !0,
                                        children: i
                                    }, r, s, c)
                                }
                                return O({
                                    type: I(n),
                                    text: D(o.text),
                                    color: o.color
                                }, t + 1, [], [])
                            }
                        } {
                            let i = E.match(/^>\s*(.*)$/);
                            if (i) {
                                let n = k(i[1] ? ? ""),
                                    r = [],
                                    o = t + 1,
                                    s = [],
                                    c = [];
                                if (t + 1 < e.length && w(e[t + 1]) > m) {
                                    let i = B(e, t + 1, m + 1, l, a, !1, d);
                                    r = i[0], o = i[1], s.push(...i[2]), c.push(...i[3])
                                }
                                return O({
                                    type: "quote",
                                    text: n.text ? D(n.text) : void 0,
                                    children: r.length ? r : void 0,
                                    color: n.color
                                }, o, s, c)
                            }
                        } {
                            let i = E.match(/^((?:-\s+)?- \[([ xX]?)\])(?:\s+(.*))?$/);
                            if (i) {
                                let n = "x" === i[2].toLowerCase(),
                                    r = i[1].length,
                                    o = m + r,
                                    s = k(E.slice(r)),
                                    [c, p, u, f] = F(e, t, o, m, l, a, d);
                                return O({
                                    type: "to_do",
                                    checked: n,
                                    text: c.text,
                                    children: c.children,
                                    color: s.color
                                }, p, u, f)
                            }
                        } {
                            let i = E.match(/^([-–—+*•])(?:\s+(.*))?$/);
                            if (i) {
                                let n = i[1].length,
                                    r = m + n,
                                    o = k(E.slice(n)),
                                    [s, c, p, u] = F(e, t, r, m, l, a, d);
                                return O({
                                    type: "bulleted_list",
                                    text: s.text,
                                    children: s.children,
                                    color: o.color
                                }, c, p, u)
                            }
                        } {
                            let i = E.match(/^(\d+\.)(?:\s+(.*))?$/);
                            if (i) {
                                let n = i[1].length,
                                    r = m + n,
                                    o = k(E.slice(n)),
                                    [s, c, p, u] = F(e, t, r, m, l, a, d);
                                return O({
                                    type: "numbered_list",
                                    text: s.text,
                                    children: s.children,
                                    color: o.color
                                }, c, p, u)
                            }
                        }
                        let S = k(p.slice(m), {
                                preserveWhitespace: !0
                            }),
                            [T, M, A, z] = W(e, t + 1, m, l, a, d);
                        return O({
                            type: "text",
                            text: D(S.text),
                            color: S.color,
                            children: T
                        }, M, A, z)
                    }(e, S, d, p, E);
                    if (M.push(...P), T.push(...z), p.size > 0 && (A = t.type, (0, n().y$)(a, A) && 1) && p.has(t.type)) {
                        S = m;
                        continue
                    }
                    C.push(t), S = m
                }
                return m && S < e.length && M.push(...e.slice(S, e.length)), [C, S, T, M]
            }

            function W(e, t, i, n, l = s, r) {
                if (t >= e.length || w(e[t]) <= i) return [void 0, t, [],
                    []
                ];
                let [o, a, c, d] = B(e, t, i + 1, n, l, !1, r);
                return [o.length ? o : void 0, a, c, d]
            }

            function F(e, t, i, n, l, r = s, o) {
                let a = e[t].slice(i),
                    c = [`${"	".repeat(n)}${a}`, ...e.slice(t + 1)],
                    d = [],
                    [p, u, f, h] = W(c, 0, n, l, r, o);
                d.push(...h);
                let g = 0 === u ? t + 1 : t + u;
                if (p && p.length > 0 && "text" === p[0].type) {
                    let e = [...p[0].children ? ? [], ...p.slice(1) ? ? []];
                    return [{
                        text: p[0].text,
                        children: e.length > 0 ? e : void 0
                    }, g, f, d]
                }
                return [{
                    children: p && p.length > 0 ? p : void 0
                }, g, f, d]
            }

            function M(e) {
                return !!e && /[a-zA-Z0-9]/.test(e)
            }

            function A(e) {
                return void 0 !== e && /\s/.test(e)
            }

            function z(e) {
                return !!e && /[!-/:-@\[-`{-~]/.test(e)
            }

            function P(e, t) {
                let i = t > 0 ? e[t - 1] : void 0,
                    n = t + 1 < e.length ? e[t + 1] : void 0,
                    l = void 0 === n || A(n);
                if (l) return !1;
                let r = void 0 !== n && z(n),
                    o = void 0 === i || A(i),
                    a = void 0 !== i && z(i),
                    s = !l && (!r || o || a),
                    c = void 0 === i || A(i);
                if (c) return s;
                let d = !c && (!a || l || r);
                return !(s && d && M(i) && M(n)) && s && (!d || a)
            }

            function R(e, t) {
                let i = t > 0 ? e[t - 1] : void 0,
                    n = t + 1 < e.length ? e[t + 1] : void 0,
                    l = void 0 === i || A(i);
                if (l) return !1;
                let r = void 0 !== i && z(i),
                    o = void 0 === n || A(n),
                    a = void 0 !== n && z(n),
                    s = !l && (!r || o || a),
                    c = void 0 === n || A(n);
                if (c) return s;
                let d = !c && (!a || l || r);
                return !(d && s && M(i) && M(n)) && s && (!d || a)
            }

            function D(e, {
                skipLinks: t
            } = {}) {
                let i = e.replace(/<br\s*\/?>/gi, "\n").replace(/\\\n/g, "\n"),
                    o = [],
                    a = "",
                    s = () => {
                        a && (o.push(a), a = "")
                    },
                    c = e => {
                        s(), o.push(e)
                    },
                    d = 0;
                e: for (; d < i.length;) {
                    if ("\\" === i[d] && d + 1 < i.length) {
                        a += i[d + 1], d += 2;
                        continue
                    }
                    if (i.startsWith("<span", d)) {
                        let e, t, n = i.indexOf(">", d);
                        if (-1 === n) {
                            a += i[d++];
                            continue
                        }
                        let l = x(i.slice(d + 5, n)),
                            o = i.indexOf("</span>", n); - 1 === o ? (e = i.slice(n + 1), t = i.length) : (e = i.slice(n + 1, o), t = o + 7);
                        let s = D(e),
                            p = (0, r().Fi)(l.color) ? l.color : void 0,
                            u = "true" === l.underline,
                            f = l["discussion-urls"] ? l["discussion-urls"].split(",") : void 0;
                        s.forEach(e => {
                            "string" == typeof e ? p || u || f ? c({
                                type: "annotated",
                                text: e,
                                annotations: { ...p && {
                                        color: p
                                    },
                                    ...u && {
                                        underline: !0
                                    },
                                    ...f && {
                                        discussionUrls: f
                                    }
                                }
                            }) : c(e) : "annotated" === e.type ? c({ ...e,
                                annotations: { ...e.annotations ? ? {},
                                    ...p && {
                                        color: p
                                    },
                                    ...u && {
                                        underline: !0
                                    },
                                    ...f && {
                                        discussionUrls: f
                                    }
                                }
                            }) : "mention" === e.type ? c({ ...e,
                                annotations: { ...p && {
                                        color: p
                                    },
                                    ...u && {
                                        underline: !0
                                    },
                                    ...f && {
                                        discussionUrls: f
                                    }
                                }
                            }) : c(e)
                        }), d = t;
                        continue
                    }
                    if (i.startsWith("<mention-date", d)) {
                        let e = i.substring(d).match(/^<mention-date\s+([^>]+?)\/>/);
                        if (e) {
                            let t = x(e[1]);
                            c({
                                type: "mention",
                                mention: E({
                                    type: "date",
                                    start: t.start,
                                    end: t.end,
                                    startTime: t.startTime,
                                    endTime: t.endTime,
                                    timeZone: t.timeZone
                                })
                            }), d += e[0].length;
                            continue
                        }
                    }
                    if (i.startsWith("<mention-", d)) {
                        let e = i.substring(d).match(/^<mention-(user|page|database|data-source|agent)\s+([^>]+?)(\/>|>)/);
                        if (e) {
                            let t = e[1],
                                l = x(e[2]),
                                r = "/>" === e[3],
                                o = d + e[0].length,
                                a = r ? "/>" : `</mention-${t}>`,
                                s = i.indexOf(a, r ? d : o);
                            if (-1 !== s) {
                                let e, p = r ? void 0 : i.slice(o, s).trim();
                                "user" === t ? (e = {
                                    type: "user",
                                    url: l.url
                                }, p && (e.name = p)) : "page" === t ? (e = {
                                    type: "page",
                                    url: l.url
                                }, p && (e.title = p)) : "database" === t ? (e = {
                                    type: "database",
                                    url: l.url
                                }, p && (e.title = p)) : "data-source" === t ? (e = {
                                    type: "data-source",
                                    url: l.url
                                }, null != p && p.trim() && (e.title = p)) : "agent" === t ? (e = {
                                    type: "agent",
                                    url: l.url
                                }, p && (e.name = p)) : (0, n().HB)(t), c({
                                    type: "mention",
                                    mention: e
                                }), d = s + a.length;
                                continue
                            }
                        }
                    }
                    if ("[" === i[d] && !t) {
                        let e = -1,
                            t = d + 1;
                        for (; t < i.length;) {
                            if ("\\" === i[t] && t + 1 < i.length) {
                                t += 2;
                                continue
                            }
                            if ("]" === i[t]) {
                                e = t;
                                break
                            }
                            t++
                        }
                        let l = i.indexOf("(", e),
                            r = -1;
                        if (-1 !== l && l === e + 1) {
                            let e = 1,
                                t = l + 1;
                            for (; t < i.length && e > 0;) {
                                if ("(" === i[t]) e++;
                                else if (")" === i[t]) 0 == --e && (r = t);
                                else if (m.has(i[t])) break;
                                t++
                            } - 1 === r && (r = i.indexOf(")", l))
                        }
                        if (-1 !== e && l === e + 1 && -1 !== r) {
                            let t = i.slice(d + 1, e),
                                o = i.slice(l + 1, r);
                            for (let e of D(t, {
                                    skipLinks: !0
                                }))
                                if ("string" == typeof e) c({
                                    type: "annotated",
                                    text: e,
                                    annotations: {
                                        href: o
                                    }
                                });
                                else switch (e.type) {
                                    case "annotated":
                                    case "equation":
                                        c({ ...e,
                                            annotations: { ...e.annotations ? ? {},
                                                href : o
                                            }
                                        });
                                        break;
                                    case "mention":
                                    case "citation":
                                        c(e);
                                        break;
                                    default:
                                        (0, n().HB)(e)
                                }
                            d = r + 1;
                            continue
                        }
                    }
                    if (i.startsWith("[^", d)) {
                        let e = i.indexOf("]", d);
                        if (-1 !== e) {
                            c({
                                type: "citation",
                                href: i.slice(d + 2, e).trim()
                            }), d = e + 1;
                            continue
                        }
                    }
                    if (":" === i[d]) {
                        let e = i.indexOf(":", d + 1);
                        if (-1 !== e && e > d + 1) {
                            let t = i.slice(d + 1, e);
                            if (l().x.VALID_NAME_REGEX.test(t)) {
                                c({
                                    type: "mention",
                                    mention: {
                                        type: "custom_emoji",
                                        name: t
                                    }
                                }), d = e + 1;
                                continue
                            }
                        }
                    }
                    if (i.startsWith("***", d)) {
                        let e = i.indexOf("***", d + 3);
                        if (-1 !== e) {
                            D(i.slice(d + 3, e)).forEach(e => p(e, {
                                bold: !0,
                                italic: !0
                            })), d = e + 3;
                            continue
                        }
                    }
                    if (i.startsWith("___", d)) {
                        let e = i.indexOf("___", d + 3);
                        if (-1 !== e) {
                            D(i.slice(d + 3, e)).forEach(e => p(e, {
                                bold: !0,
                                italic: !0
                            })), d = e + 3;
                            continue
                        }
                    }
                    if (i.startsWith("**", d)) {
                        let e = i.indexOf("**", d + 2);
                        if (-1 !== e) {
                            D(i.slice(d + 2, e)).forEach(e => p(e, {
                                bold: !0
                            })), d = e + 2;
                            continue
                        }
                    }
                    if (i.startsWith("__", d)) {
                        if (P(i, d) && P(i, d + 1)) {
                            let e = d + 2;
                            for (; e <= i.length - 2;) {
                                if (i.startsWith("__", e) && R(i, e) && R(i, e + 1)) {
                                    D(i.slice(d + 2, e)).forEach(e => p(e, {
                                        bold: !0
                                    })), d = e + 2;
                                    continue e
                                }
                                e++
                            }
                        }
                        a += i[d++], a += i[d++];
                        continue
                    }
                    if ("_" === i[d] && P(i, d)) {
                        let e = d + 1;
                        for (; e < i.length;) {
                            if ("_" === i[e] && R(i, e)) {
                                D(i.slice(d + 1, e)).forEach(e => p(e, {
                                    italic: !0
                                })), d = e + 1;
                                continue e
                            }
                            e++
                        }
                        a += i[d++];
                        continue
                    }
                    if ("*" === i[d]) {
                        let e = i.indexOf("*", d + 1);
                        if (-1 !== e) {
                            D(i.slice(d + 1, e)).forEach(e => p(e, {
                                italic: !0
                            })), d = e + 1;
                            continue
                        }
                    }
                    if (i.startsWith("~~", d)) {
                        let e = i.indexOf("~~", d + 2);
                        if (-1 !== e) {
                            D(i.slice(d + 2, e)).forEach(e => p(e, {
                                strikethrough: !0
                            })), d = e + 2;
                            continue
                        }
                    }
                    if ("`" === i[d]) {
                        let e = i.indexOf("`", d + 1);
                        if (-1 !== e) {
                            c({
                                type: "annotated",
                                text: i.slice(d + 1, e),
                                annotations: {
                                    code: !0
                                }
                            }), d = e + 1;
                            continue
                        }
                    }
                    if ("$" === i[d]) {
                        if ("$" === i[d + 1] && d + 2 < i.length && !/\s/.test(i[d + 2])) {
                            let e = i.indexOf("$$", d + 2),
                                t = 0 === d ? " " : i[d - 1],
                                n = -1 === e || e + 2 >= i.length ? " " : i[e + 2];
                            if (-1 !== e && e > d + 2 && !/\s/.test(i[e - 1]) && /\s/.test(t) && /\s/.test(n)) {
                                c({
                                    type: "equation",
                                    equation: i.slice(d + 2, e)
                                }), d = e + 2;
                                continue
                            }
                        }
                        if ("`" === i[d + 1]) {
                            let e = i.indexOf("`$", d + 2);
                            if (-1 !== e && !/\s/.test(i[e - 1])) {
                                c({
                                    type: "equation",
                                    equation: i.slice(d + 2, e)
                                }), d = e + 2;
                                continue
                            }
                        }
                        let e = i.indexOf("$", d + 1),
                            t = 0 === d ? " " : i[d - 1],
                            n = -1 === e || e + 1 >= i.length ? " " : i[e + 1];
                        if (-1 !== e && /\s/.test(t) && /\s/.test(n) && !/\s/.test(i[d + 1]) && !/\s/.test(i[e - 1])) {
                            c({
                                type: "equation",
                                equation: i.slice(d + 1, e)
                            }), d = e + 1;
                            continue
                        }
                        a += i[d++];
                        continue
                    }
                    a += i[d++]
                }
                return s(), o.reduce((e, t) => ("string" == typeof t && e.length && "string" == typeof e[e.length - 1] ? e[e.length - 1] = e[e.length - 1] + t : e.push(t), e), []);

                function p(e, t) {
                    "string" == typeof e ? c({
                        type: "annotated",
                        text: e,
                        annotations: t
                    }) : "annotated" === e.type || "mention" === e.type ? c({ ...e,
                        annotations: { ...e.annotations ? ? {},
                            ...t
                        }
                    }) : c(e)
                }
            }
        },
        994835: (e, t, i) => {
            function n(e) {
                return e.replace(/\[\^[ \t]*\{+/g, "[^").replace(/\[\^[ \t]+/g, "[^").replace(/([a-zA-Z0-9/:._~-])\}+\]/g, "$1]").replace(/([a-zA-Z0-9/:._~-])\}+$/g, "$1")
            }

            function l(e) {
                let t = e.replace(/\[\^\n/g, "\n").replace(/\[\^[^\]\n]*$/g, "");
                return function(e) {
                    if (!e) return e;
                    let t = e.split("\n"),
                        i = !1,
                        n = !1,
                        l = 0,
                        r = [],
                        o = new Set(["table", "colgroup", "col", "thead", "tbody", "tfoot", "tr", "td", "th", "caption", "callout", "details", "summary"]),
                        a = new Set(["col"]);
                    for (let e of t) {
                        let t = e.trim();
                        if (t.startsWith("```")) {
                            i = !i;
                            continue
                        }
                        if ("$$" === t) {
                            n = !n;
                            continue
                        }
                        if (i || n) continue;
                        if (/^:{3,}\s*\w+/.test(t)) {
                            l++;
                            continue
                        }
                        if (/^:{3,}\s*$/.test(t) && l > 0) {
                            l--;
                            continue
                        }
                        let s = t.match(/^<\s*(\/?)\s*([A-Za-z][\w-]*)(\s+[^>]*)?\s*(\/?)>$/);
                        if (!s) continue;
                        let c = "/" === s[1],
                            d = s[2].toLowerCase();
                        if (!o.has(d)) continue;
                        let p = "/" === s[4];
                        if (c) {
                            let e = r.lastIndexOf(d); - 1 !== e && r.splice(e, 1);
                            continue
                        }
                        if ("table" === d || "callout" === d || "details" === d) {
                            r.push(d);
                            continue
                        }
                        0 !== r.length && (p || a.has(d) || r.push(d))
                    }
                    let s = e;
                    if (l > 0 && (s += "\n" + Array(l).fill(":::").join("\n")), r.length > 0) {
                        let e = [...r].reverse().map(e => `</${e}>`).join("\n");
                        s += `
${e}`
                    }
                    return s
                }(t = a(t = t.replace(/\n\d+\.[ \t]*$/g, "\n").replace(/\n[-*+][ \t]*$/g, "\n").replace(/\n[-*+][ \t]+\[[xX ]\][ \t]*$/g, "\n")))
            }

            function r(e) {
                return a(e)
            }
            i.d(t, {
                Cy: () => l,
                _J: () => n,
                wp: () => r
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(581454);
            let o = ["meeting_time_suggestions"];

            function a(e) {
                let t = e.lastIndexOf("<");
                if (-1 === t) return e;
                let i = e.slice(t);
                for (let n of o) {
                    if (i.length - 1 <= n.length && n.startsWith(i.slice(1))) return e.slice(0, t);
                    if (i.startsWith("<" + n)) {
                        if (i.includes("/>")) return e;
                        return e.slice(0, t)
                    }
                }
                return e
            }
        }
    }
]);