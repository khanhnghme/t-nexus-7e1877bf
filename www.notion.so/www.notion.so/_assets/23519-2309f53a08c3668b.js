"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [23519], {
        423123: (e, t, i) => {
            i.d(t, {
                d: () => function e(t, l) {
                    if (i(400473).dU(t) && (t.filters || []).forEach(t => e(t, l)), i(400473).yX(t)) {
                        let e = l(t.property);
                        e && (t.property = e)
                    }
                },
                w: () => function e(t, l) {
                    "filters" in t ? (t.filters || []).forEach(t => e(t, l)) : "timestamp" in t || function(e, t) {
                        if (i(400473).Pq(e) && ("relation_contains" === e.operator || "relation_does_not_contain" === e.operator))
                            if (Array.isArray(e.value)) {
                                let l = e.value.map(e => {
                                    let l = e.type;
                                    if ("exact" === l) {
                                        let l = e.value;
                                        return {
                                            type: "exact",
                                            value: l && t({
                                                table: i(682956).ev,
                                                id: l
                                            }) || l
                                        }
                                    }
                                    if ("relative" === l) return e;
                                    (0, i(722371).HB)(l)
                                });
                                e.value = l
                            } else {
                                let l = e.value.type;
                                if ("exact" === l) {
                                    let l = e.value.value;
                                    e.value.value = l && t({
                                        table: i(682956).ev,
                                        id: l
                                    }) || l
                                } else {
                                    if ("relative" === l) return;
                                    (0, i(722371).HB)(l)
                                }
                            }
                        if (i(400473).s1(e)) {
                            let l = e.subfilter;
                            if (i(400473).Pq(l) && ("relation_contains" === l.operator || "relation_does_not_contain" === l.operator))
                                if (Array.isArray(l.value)) {
                                    let e = l.value.map(e => {
                                        let l = e.type;
                                        if ("exact" === l) {
                                            let l = e.value;
                                            return {
                                                type: "exact",
                                                value: l && t({
                                                    table: i(682956).ev,
                                                    id: l
                                                }) || l
                                            }
                                        }
                                        if ("relative" === l) return e;
                                        (0, i(722371).HB)(l)
                                    });
                                    l.value = e
                                } else {
                                    let e = l.value.type;
                                    if ("exact" === e) {
                                        let e = l.value.value;
                                        l.value.value = e && t({
                                            table: i(682956).ev,
                                            id: e
                                        }) || e
                                    } else "relative" === e || (0, i(722371).HB)(e)
                                }
                        }
                    }("property" in t ? t.filter : t, l)
                }
            }), i(898992), i(354520), i(803949), i(581454)
        },
        623519: (e, t, i) => {
            i.d(t, {
                G: () => s,
                n: () => d
            }), i(944114), i(898992), i(354520), i(737550);
            var l = i.n(i(794148)),
                r = () => i(381453),
                o = () => i(722371),
                a = () => i(423123),
                n = () => i(138303);

            function p(e, t) {
                l()(e.table === t, `Expected space shard record pointer of table ${t} but got ${e.table}`), l()((0, o().O9)(e.spaceId), "Expected space shard record pointer but missing spaceId")
            }
            let c = {
                complete_sprint: e => {
                    let {
                        config: t,
                        preventClearingConfig: l,
                        visitors: a
                    } = e, n = new(i(227318)).d;
                    if (!t) return {
                        config: void 0,
                        remappedRecordPointers: n
                    };
                    let c = (0, r().mg)(t);
                    if (t.sprint_collection) {
                        let e = a.visitRecordPointer(t.sprint_collection, "config.sprint_collection");
                        if ("replace" === e.type) {
                            if (e.value) p(e.value, i(46241).V), n.add(e.value), c.sprint_collection = e.value;
                            else if (!(0, o().O9)(e.value) && !l) return {
                                config: void 0,
                                remappedRecordPointers: n
                            }
                        } else "keep" === e.type || (0, o().HB)(e)
                    }
                    if (t.task_collection) {
                        let e = a.visitRecordPointer(t.task_collection, "config.task_collection");
                        if ("replace" === e.type) {
                            if (e.value) p(e.value, i(46241).V), n.add(e.value), c.task_collection = e.value;
                            else if (!(0, o().O9)(e.value) && !l) return {
                                config: void 0,
                                remappedRecordPointers: n
                            }
                        } else "keep" === e.type || (0, o().HB)(e)
                    }
                    return {
                        config: c,
                        remappedRecordPointers: n
                    }
                },
                create_page: e => {
                    var t, l, a;
                    let {
                        config: c,
                        preventClearingConfig: u,
                        visitors: s
                    } = e, v = new(i(227318)).d;
                    if (!c) return {
                        config: void 0,
                        remappedRecordPointers: v
                    };
                    let d = (0, r().mg)(c),
                        f = d.collection,
                        g = (null == (t = d.target) ? void 0 : t.type) === "collection" ? d.target.collection : void 0;
                    if (d.collection) {
                        let e = s.visitRecordPointer(d.collection, "config.collection");
                        "replace" === e.type ? e.value ? (p(e.value, i(46241).V), v.add(e.value), d.collection = e.value) : (0, o().O9)(e.value) || (d.collection = void 0) : "keep" === e.type || (0, o().HB)(e)
                    }
                    let m = d.template_page_id;
                    if (d.template_page_id) {
                        let e = s.visitRecordPointer(i(496282).L3.fromPointerLike({
                            id: d.template_page_id,
                            table: i(682956).ev
                        }), "config.template_page_id");
                        "replace" === e.type ? e.value ? (p(e.value, i(682956).ev), v.add(e.value), d.template_page_id = e.value.id) : (0, o().O9)(e.value) || (d.template_page_id = void 0) : "keep" === e.type || (0, o().HB)(e)
                    }
                    if (d.properties && d.properties.length > 0) {
                        let e = [];
                        for (let t of d.properties) {
                            let i = s.visitCollectionProperty(t, "config.properties");
                            "replace" === i.type ? (0, o().O9)(i.value) && e.push(i.value) : "keep" === i.type ? e.push(t) : (0, o().HB)(i)
                        }
                        d.properties = e
                    }
                    if (d.values) {
                        let t = {};
                        for (let [i, a] of Object.entries(d.values)) {
                            let p = s.visitCollectionProperty(i, "config.values"),
                                c = "keep" === p.type ? i : p.value;
                            if (!c) continue;
                            let u = (0, r().mg)(a);
                            if ((0, o().O9)(null == u || null == (l = u.value) ? void 0 : l.value)) {
                                let {
                                    remappedRecordPointers: t,
                                    value: i
                                } = (0, n().RI)({
                                    baseUrl: e.baseUrl,
                                    formula: u.value.value,
                                    publicDomainName: e.publicDomainName,
                                    spaceId: e.sourceSpaceId,
                                    visitors: s
                                });
                                u.value.value = i, v = v.union(t)
                            }
                            t[c] = u
                        }
                        d.values = t
                    }
                    if (d.target)
                        if ("variable" === d.target.type) {
                            let e = s.visitFormulaContextValue(d.target.id, "config.target.id");
                            "replace" === e.type && (e.value ? d.target.id = e.value : d.target = void 0)
                        } else if ("collection" === d.target.type) {
                        let e = s.visitRecordPointer(d.target.collection, "config.target.collection");
                        if ("replace" === e.type) {
                            let t = e.value;
                            t ? (p(t, i(46241).V), v.add(t), d.target.collection = t) : d.target = void 0
                        } else "keep" === e.type || (0, o().HB)(e)
                    } else "private_space" === d.target.type || (0, o().HB)(d.target);
                    return (d.template_page_id && m === d.template_page_id && ((0, o().O9)(f) && (0, o().O9)(d.collection) && !i(496282).L3.isEqualIdTable(f, d.collection) || (0, o().O9)(g) && (null == (a = d.target) ? void 0 : a.type) === "collection" && (0, o().O9)(d.target.collection) && !i(496282).L3.isEqualIdTable(g, d.target.collection)) && (d.template_page_id = void 0), u || d.target || d.collection) ? {
                        config: d,
                        remappedRecordPointers: v
                    } : {
                        config: void 0,
                        remappedRecordPointers: v
                    }
                },
                define_variables: e => {
                    let {
                        config: t
                    } = e, l = new(i(227318)).d;
                    if (!t) return {
                        config: void 0,
                        remappedRecordPointers: l
                    };
                    let a = (0, r().mg)(t);
                    if (!a.values) return {
                        config: a,
                        remappedRecordPointers: l
                    };
                    for (let t of Object.values(a.values)) {
                        if (!(0, o().O9)(t.value) || !t.value.value) continue;
                        let {
                            remappedRecordPointers: i,
                            value: r
                        } = (0, n().RI)({
                            baseUrl: e.baseUrl,
                            formula: t.value.value,
                            publicDomainName: e.publicDomainName,
                            spaceId: e.sourceSpaceId,
                            visitors: e.visitors
                        });
                        t.value.value = r, l = l.union(i)
                    }
                    return {
                        config: a,
                        remappedRecordPointers: l
                    }
                },
                duplicate_blocks: e => ({
                    config: e.config,
                    remappedRecordPointers: new(i(227318)).d
                }),
                http_request: e => ({
                    config: e.config,
                    remappedRecordPointers: new(i(227318)).d
                }),
                modal_confirmation: e => {
                    let {
                        config: t
                    } = e, l = new(i(227318)).d;
                    if (!t) return {
                        config: void 0,
                        remappedRecordPointers: l
                    };
                    let o = (0, r().mg)(t);
                    if (!o.text || !o.text.value) return {
                        config: o,
                        remappedRecordPointers: l
                    };
                    let {
                        remappedRecordPointers: a,
                        value: p
                    } = (0, n().RI)({
                        baseUrl: e.baseUrl,
                        formula: o.text.value,
                        publicDomainName: e.publicDomainName,
                        spaceId: e.sourceSpaceId,
                        visitors: e.visitors
                    });
                    return o.text.value = p, {
                        config: o,
                        remappedRecordPointers: l = l.union(a)
                    }
                },
                open_page: e => {
                    let {
                        config: t,
                        visitors: l
                    } = e, a = new(i(227318)).d;
                    if (!t) return {
                        config: void 0,
                        remappedRecordPointers: a
                    };
                    let n = (0, r().mg)(t);
                    if (!n.target) return {
                        config: n,
                        remappedRecordPointers: a
                    };
                    if ("variable" === n.target.type) {
                        let e = l.visitFormulaContextValue(n.target.id, "config.target.id");
                        "replace" === e.type && (e.value ? n.target.id = e.value : n.target = void 0)
                    } else if ("page" === n.target.type) {
                        let e = l.visitRecordPointer(n.target.page, "config.target.page");
                        if ("replace" === e.type) {
                            let t = e.value;
                            t ? (p(t, i(682956).ev), a.add(t), n.target.page = t) : n.target = void 0
                        }
                    } else "url" === n.target.type || (0, o().HB)(n.target);
                    return {
                        config: n,
                        remappedRecordPointers: a
                    }
                },
                publish_site: e => ({
                    config: e.config,
                    remappedRecordPointers: new(i(227318)).d
                }),
                worker: e => ({
                    config: e.config,
                    remappedRecordPointers: new(i(227318)).d
                }),
                query_collection: e => {
                    let {
                        config: t,
                        preventClearingConfig: l,
                        visitors: n
                    } = e, c = new(i(227318)).d;
                    if (!t) return {
                        config: void 0,
                        remappedRecordPointers: c
                    };
                    let u = (0, r().mg)(t);
                    if (!u.collection) return {
                        config: void 0,
                        remappedRecordPointers: c
                    };
                    let s = n.visitRecordPointer(u.collection, "config.collection");
                    if ("replace" === s.type) {
                        let e = s.value;
                        e ? (p(e, i(46241).V), c.add(e), u.collection = e) : u.collection = void 0
                    }
                    if (!l && !u.collection) return {
                        config: void 0,
                        remappedRecordPointers: c
                    };
                    if (null != u && u.filter && ((0, a().w)(u.filter, e => {
                            let t = n.visitRecordPointer(e, "config.filter");
                            if ("replace" === t.type) {
                                if ((0, o().O9)(t.value)) return c.add(t.value), t.value.id
                            } else {
                                if ("keep" === t.type) return e.id;
                                (0, o().HB)(t)
                            }
                        }), (0, a().d)(u.filter, t => {
                            let i = e.visitors.visitCollectionProperty(t, "config.filter");
                            return "replace" === i.type ? i.value : "keep" === i.type ? t : void(0, o().HB)(i)
                        })), null != u && u.sort && u.sort.length > 0) {
                        let t = [];
                        for (let i of u.sort) {
                            let l = e.visitors.visitCollectionProperty(i.property, "config.sort");
                            "replace" === l.type ? (0, o().O9)(l.value) && t.push({ ...i,
                                property: l.value
                            }) : "keep" === l.type ? t.push({ ...i
                            }) : (0, o().HB)(l)
                        }
                        u.sort = t
                    }
                    return {
                        config: u,
                        remappedRecordPointers: c
                    }
                },
                send_gmail_notification: e => {
                    var t, l, o, a, p, c, u;
                    let {
                        config: s
                    } = e, v = new(i(227318)).d;
                    if (!s) return {
                        config: void 0,
                        remappedRecordPointers: v
                    };
                    let d = (0, r().mg)(s);
                    if (null != (t = d.to) && null != (t = t.value) && t.value) {
                        let {
                            remappedRecordPointers: t,
                            value: i
                        } = (0, n().RI)({
                            baseUrl: e.baseUrl,
                            formula: d.to.value.value,
                            publicDomainName: e.publicDomainName,
                            spaceId: e.sourceSpaceId,
                            visitors: e.visitors
                        });
                        d.to.value.value = i, v = v.union(t)
                    }
                    if (null != (l = d.cc) && null != (l = l.value) && l.value) {
                        let {
                            remappedRecordPointers: t,
                            value: i
                        } = (0, n().RI)({
                            baseUrl: e.baseUrl,
                            formula: d.cc.value.value,
                            publicDomainName: e.publicDomainName,
                            spaceId: e.sourceSpaceId,
                            visitors: e.visitors
                        });
                        d.cc.value.value = i, v = v.union(t)
                    }
                    if (null != (o = d.bcc) && null != (o = o.value) && o.value) {
                        let {
                            remappedRecordPointers: t,
                            value: i
                        } = (0, n().RI)({
                            baseUrl: e.baseUrl,
                            formula: d.bcc.value.value,
                            publicDomainName: e.publicDomainName,
                            spaceId: e.sourceSpaceId,
                            visitors: e.visitors
                        });
                        d.bcc.value.value = i, v = v.union(t)
                    }
                    if (null != (a = d.reply_to) && null != (a = a.value) && a.value) {
                        let {
                            remappedRecordPointers: t,
                            value: i
                        } = (0, n().RI)({
                            baseUrl: e.baseUrl,
                            formula: d.reply_to.value.value,
                            publicDomainName: e.publicDomainName,
                            spaceId: e.sourceSpaceId,
                            visitors: e.visitors
                        });
                        d.reply_to.value.value = i, v = v.union(t)
                    }
                    if (null != (p = d.from_name) && p.value) {
                        let {
                            remappedRecordPointers: t,
                            value: i
                        } = (0, n().RI)({
                            baseUrl: e.baseUrl,
                            formula: d.from_name.value,
                            publicDomainName: e.publicDomainName,
                            spaceId: e.sourceSpaceId,
                            visitors: e.visitors
                        });
                        d.from_name.value = i, v = v.union(t)
                    }
                    if (null != (c = d.email_subject) && c.value) {
                        let {
                            remappedRecordPointers: t,
                            value: i
                        } = (0, n().RI)({
                            baseUrl: e.baseUrl,
                            formula: d.email_subject.value,
                            publicDomainName: e.publicDomainName,
                            spaceId: e.sourceSpaceId,
                            visitors: e.visitors
                        });
                        d.email_subject.value = i, v = v.union(t)
                    }
                    if (null != (u = d.email_body) && u.value) {
                        let {
                            remappedRecordPointers: t,
                            value: i
                        } = (0, n().RI)({
                            baseUrl: e.baseUrl,
                            formula: d.email_body.value,
                            publicDomainName: e.publicDomainName,
                            spaceId: e.sourceSpaceId,
                            visitors: e.visitors
                        });
                        d.email_body.value = i, v = v.union(t)
                    }
                    return {
                        config: d,
                        remappedRecordPointers: v
                    }
                },
                send_in_app_notification: e => {
                    let {
                        config: t,
                        visitors: l
                    } = e, a = new(i(227318)).d;
                    if (!t) return {
                        config: void 0,
                        remappedRecordPointers: a
                    };
                    let c = (0, r().mg)(t);
                    if (c.target) {
                        let t = c.target;
                        if ("property" === t.type) {
                            if (t.propertyId && t.collectionPointer) {
                                let e = l.visitCollectionPropertyPointer({ ...t.collectionPointer,
                                    propertyId: t.propertyId
                                }, "config.target.collectionPointer");
                                if ("replace" === e.type) {
                                    let t = e.value;
                                    if (t) {
                                        p(t, i(46241).V);
                                        let e = i(496282).L3.fromSpaceShardRecordId({
                                            id: t.id,
                                            spaceId: t.spaceId
                                        }, t.table);
                                        a.add(e), c.target = {
                                            collectionPointer: e,
                                            propertyId: t.propertyId,
                                            type: "property"
                                        }
                                    } else(0, o().O9)(t) || (c.target = void 0)
                                } else "keep" === e.type || (0, o().HB)(e)
                            }
                        } else if ("formula" === t.type) {
                            if (t.value && t.value.value) {
                                let {
                                    remappedRecordPointers: i,
                                    value: l
                                } = (0, n().RI)({
                                    baseUrl: e.baseUrl,
                                    formula: t.value.value,
                                    publicDomainName: e.publicDomainName,
                                    spaceId: e.sourceSpaceId,
                                    visitors: e.visitors
                                });
                                t.value.value = l, a = a.union(i)
                            }
                        } else(0, o().HB)(t)
                    }
                    if (c.notification_message && c.notification_message.value) {
                        let {
                            remappedRecordPointers: t,
                            value: i
                        } = (0, n().RI)({
                            baseUrl: e.baseUrl,
                            formula: c.notification_message.value,
                            publicDomainName: e.publicDomainName,
                            spaceId: e.sourceSpaceId,
                            visitors: e.visitors
                        });
                        c.notification_message.value = i, a = a.union(t)
                    }
                    return {
                        config: c,
                        remappedRecordPointers: a
                    }
                },
                slack_notification: e => {
                    let {
                        sourceSpaceId: t,
                        targetSpaceId: l
                    } = e, r = new(i(227318)).d;
                    return t !== l ? {
                        config: void 0,
                        remappedRecordPointers: r
                    } : {
                        config: e.config,
                        remappedRecordPointers: r
                    }
                },
                update_pages: e => {
                    let {
                        config: t,
                        visitors: l
                    } = e, a = new(i(227318)).d;
                    if (!t) return {
                        config: void 0,
                        remappedRecordPointers: a
                    };
                    let p = (0, r().mg)(t);
                    if (!p.target || (f({
                            visitors: l,
                            remappedConfig: p,
                            remappedRecordPointers: a
                        }), !e.preventClearingConfig && !p.target)) return {
                        config: void 0,
                        remappedRecordPointers: a
                    };
                    if (p.properties && p.properties.length > 0) {
                        let t = [];
                        for (let i of p.properties) {
                            let l = e.visitors.visitCollectionProperty(i, "config.properties");
                            "replace" === l.type ? (0, o().O9)(l.value) && t.push(l.value) : "keep" === l.type ? t.push(i) : (0, o().HB)(l)
                        }
                        p.properties = t
                    }
                    if (p.values) {
                        let t = {};
                        for (let [i, l] of Object.entries(p.values ? ? {})) {
                            var c;
                            let p = e.visitors.visitCollectionProperty(i, "config.values"),
                                u = "keep" === p.type ? i : p.value;
                            if (!u) continue;
                            let s = (0, r().mg)(l);
                            if ((0, o().O9)(null == s || null == (c = s.value) ? void 0 : c.value)) {
                                let {
                                    remappedRecordPointers: t,
                                    value: i
                                } = (0, n().RI)({
                                    baseUrl: e.baseUrl,
                                    formula: s.value.value,
                                    publicDomainName: e.publicDomainName,
                                    spaceId: e.sourceSpaceId,
                                    visitors: e.visitors
                                });
                                s.value.value = i, a = a.union(t)
                            }
                            t[u] = s
                        }
                        p.values = t
                    }
                    return {
                        config: p,
                        remappedRecordPointers: a
                    }
                },
                archive_pages: e => {
                    let {
                        config: t,
                        visitors: l
                    } = e, o = new(i(227318)).d;
                    if (!t) return {
                        config: void 0,
                        remappedRecordPointers: o
                    };
                    let a = (0, r().mg)(t);
                    return a.target && (f({
                        visitors: l,
                        remappedConfig: a,
                        remappedRecordPointers: o
                    }), e.preventClearingConfig || a.target) ? {
                        config: a,
                        remappedRecordPointers: o
                    } : {
                        config: void 0,
                        remappedRecordPointers: o
                    }
                }
            };

            function u() {
                return {
                    type: "keep"
                }
            }

            function s(e) {
                let {
                    automationActionModel: t,
                    baseUrl: l,
                    preventClearingConfig: r,
                    publicDomainName: o,
                    sourceSpaceId: a,
                    visitors: n
                } = e, {
                    config: p,
                    remappedRecordPointers: s
                } = function(e) {
                    let {
                        automationActionModel: t,
                        baseUrl: i,
                        preventClearingConfig: l,
                        publicDomainName: r,
                        sourceSpaceId: o,
                        visitors: a
                    } = e, n = t.getType(), p = t.getConfig();
                    return (0, c[n])({
                        baseUrl: i,
                        config: p,
                        preventClearingConfig: l,
                        publicDomainName: r,
                        sourceSpaceId: o,
                        targetSpaceId: t.space_id,
                        visitors: a
                    })
                }({
                    automationActionModel: t,
                    baseUrl: l,
                    preventClearingConfig: r,
                    publicDomainName: o,
                    sourceSpaceId: a,
                    visitors: {
                        visitCollectionProperty: n.visitCollectionProperty ? ? u,
                        visitCollectionPropertyPointer: n.visitCollectionPropertyPointer ? ? u,
                        visitFormulaContextValue: n.visitFormulaContextValue ? ? u,
                        visitFormulaPageProperty: n.visitFormulaPageProperty ? ? u,
                        visitRecordPointer: n.visitRecordPointer ? ? u
                    }
                }), {
                    model: v
                } = i(993189).RUD.create({
                    alive: !0,
                    config: p ? ? {},
                    id: t.id,
                    parent_id: t.parent_id,
                    parent_table: t.parent_table,
                    space_id: t.space_id,
                    type: t.type,
                    version: t.getVersion()
                });
                return {
                    remappedRecordPointers: s,
                    value: v
                }
            }
            let v = {
                button: e => ({
                    config: e.config,
                    remappedRecordPointers: new(i(227318)).d
                }),
                event: e => {
                    let {
                        config: t,
                        visitors: l
                    } = e, n = new(i(227318)).d, c = (0, r().mg)(t);
                    if (!c.event.source) return {
                        config: c,
                        remappedRecordPointers: n
                    };
                    if ("collection" === c.event.source.type) {
                        let e = l.visitRecordPointer(c.event.source.pointer);
                        if ("replace" === e.type) {
                            let t = e.value;
                            t ? (p(t, i(46241).V), n.add(t), c.event.source = {
                                pointer: t,
                                type: "collection"
                            }) : c.event.source = void 0
                        }
                    } else if ("collection_view" === c.event.source.type) {
                        let e = l.visitRecordPointer(c.event.source.pointer);
                        if ("replace" === e.type) {
                            let t = e.value;
                            t ? (p(t, i(435544).G), n.add(t), c.event.source = {
                                pointer: t,
                                type: "collection_view"
                            }) : c.event.source = void 0
                        }
                    } else "filter" === c.event.source.type || (0, o().HB)(c.event.source);
                    if ("some" === c.event.pagePropertiesEdited.type) {
                        let t = [];
                        for (let i of c.event.pagePropertiesEdited.some ? ? []) {
                            let n = (0, r().mg)(i),
                                p = l.visitCollectionProperty(n.property);
                            if ("replace" === p.type)
                                if (!(0, o().O9)(p.value)) continue;
                                else n.property = p.value;
                            else "keep" === p.type || (0, o().HB)(p);
                            if ("changes_to_any" !== n.filter.operator) {
                                let t = {
                                    property: n.property,
                                    filter: n.filter
                                };
                                (0, a().w)(t, e => {
                                    let t = l.visitRecordPointer(e);
                                    if ("replace" === t.type) {
                                        if ((0, o().O9)(t.value)) return t.value.id
                                    } else {
                                        if ("keep" === t.type) return e.id;
                                        (0, o().HB)(t)
                                    }
                                }), (0, a().d)(t, t => {
                                    let i = e.visitors.visitCollectionProperty(t);
                                    return "replace" === i.type ? i.value : "keep" === i.type ? t : void(0, o().HB)(i)
                                })
                            }
                            t.push(n)
                        }
                        c.event.pagePropertiesEdited.some = t
                    } else if ("all" === c.event.pagePropertiesEdited.type) {
                        let t = [];
                        for (let i of c.event.pagePropertiesEdited.all ? ? []) {
                            let n = (0, r().mg)(i),
                                p = l.visitCollectionProperty(n.property);
                            if ("replace" === p.type)
                                if (!(0, o().O9)(p.value)) continue;
                                else n.property = p.value;
                            else "keep" === p.type || (0, o().HB)(p);
                            if ("changes_to_any" !== n.filter.operator) {
                                let t = {
                                    property: n.property,
                                    filter: n.filter
                                };
                                (0, a().w)(t, e => {
                                    let t = l.visitRecordPointer(e);
                                    if ("replace" === t.type) {
                                        if ((0, o().O9)(t.value)) return t.value.id
                                    } else {
                                        if ("keep" === t.type) return e.id;
                                        (0, o().HB)(t)
                                    }
                                }), (0, a().d)(t, t => {
                                    let i = e.visitors.visitCollectionProperty(t);
                                    return "replace" === i.type ? i.value : "keep" === i.type ? t : void(0, o().HB)(i)
                                })
                            }
                            t.push(n)
                        }
                        c.event.pagePropertiesEdited.all = t
                    } else "none" === c.event.pagePropertiesEdited.type || "any" === c.event.pagePropertiesEdited.type || (0, o().HB)(c.event.pagePropertiesEdited);
                    return {
                        config: c,
                        remappedRecordPointers: n
                    }
                },
                recurrence: e => ({
                    config: e.config,
                    remappedRecordPointers: new(i(227318)).d
                })
            };

            function d(e) {
                let {
                    automationModel: t,
                    visitors: l
                } = e, {
                    remappedRecordPointers: r,
                    config: o
                } = function(e) {
                    let {
                        automationModel: t,
                        visitors: i
                    } = e, l = t.getTriggerType(), r = t.getTrigger();
                    return (0, v[l])({
                        config: r,
                        visitors: i
                    })
                }({
                    automationModel: t,
                    visitors: {
                        visitCollectionProperty: l.visitCollectionProperty ? ? u,
                        visitRecordPointer: l.visitRecordPointer ? ? u
                    }
                }), {
                    model: a
                } = i(993189).R$j.create({
                    alive: !0,
                    createdBy: t.getCreatedByPointer(),
                    id: t.id,
                    lastEditedBy: t.getLastEditedByPointer(),
                    parent_id: t.parent_id,
                    parent_table: t.parent_table,
                    space_id: t.space_id,
                    status: t.getStatus(),
                    trigger: o,
                    version: t.getVersion()
                });
                return {
                    remappedRecordPointers: r,
                    value: a
                }
            }

            function f(e) {
                let {
                    visitors: t,
                    remappedConfig: l,
                    remappedRecordPointers: r
                } = e;
                if (l.target)
                    if ("variable" === l.target.type) {
                        let e = t.visitFormulaContextValue(l.target.id, "config.target.id");
                        "replace" === e.type && (e.value ? l.target.id = e.value : l.target = void 0)
                    } else if ("page" === l.target.type) {
                    let e = t.visitRecordPointer(l.target.page, "config.target.page");
                    if ("replace" === e.type) {
                        let t = e.value;
                        t ? (p(t, i(682956).ev), r.add(t), l.target.page = t) : l.target = void 0
                    }
                } else if ("collection" === l.target.type) {
                    var n, c;
                    let e = t.visitRecordPointer(l.target.collection, "config.target.collection");
                    if ("replace" === e.type) {
                        let t = e.value;
                        t ? (p(t, i(46241).V), r.add(t), l.target.collection = t) : l.target = void 0
                    } else "keep" === e.type || (0, o().HB)(e);
                    if (null != (n = l.target) && n.filter && ((0, a().w)(l.target.filter, e => {
                            let i = t.visitRecordPointer(e, "config.target.filter");
                            if ("replace" === i.type) {
                                if ((0, o().O9)(i.value)) return r.add(i.value), i.value.id
                            } else {
                                if ("keep" === i.type) return e.id;
                                (0, o().HB)(i)
                            }
                        }), (0, a().d)(l.target.filter, e => {
                            let i = t.visitCollectionProperty(e, "config.target.filter");
                            return "replace" === i.type ? i.value : "keep" === i.type ? e : void(0, o().HB)(i)
                        })), null != (c = l.target) && c.sort && l.target.sort.length > 0) {
                        let e = [];
                        for (let i of l.target.sort) {
                            let l = t.visitCollectionProperty(i.property, "config.target.sort");
                            "replace" === l.type ? (0, o().O9)(l.value) && e.push({ ...i,
                                property: l.value
                            }) : "keep" === l.type ? e.push({ ...i
                            }) : (0, o().HB)(l)
                        }
                        l.target.sort = e
                    }
                } else(0, o().HB)(l.target)
            }
        }
    }
]);