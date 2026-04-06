"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [64696], {
        786221: (e, t, l) => {
            l.d(t, {
                HL: () => u,
                L5: () => c,
                Pl: () => V,
                parseCSV: () => F,
                ph: () => p
            }), l(944114), l(517642), l(658004), l(733853), l(845876), l(432475), l(515024), l(731698), l(898992), l(823215), l(354520), l(672577), l(430670), l(803949), l(581454), l(908872), l(737550);
            var n = () => l(627179),
                a = () => l(773352),
                r = () => l(247438);
            let i = "PartialMatch",
                o = "FullMatch",
                s = (0, l(109939).YK)({
                    titleColumnName: {
                        id: "database.titleColumn.name",
                        defaultMessage: "Title"
                    },
                    genericColumnName: {
                        id: "database.genericColumn.name",
                        defaultMessage: "Column {columnNumber}"
                    }
                });

            function p(e) {
                let {
                    table: t,
                    deps: {
                        intl: n,
                        randomShortID: a,
                        isPhoneNumber: i
                    },
                    options: {
                        useCsvAdaptiveSchema: o,
                        addHeadersToCollectionEnabled: p
                    }
                } = e, c = function(e, t, n, a, r = !1, i, o, p) {
                    var c;
                    let f = (e = e.filter(e => e.some(e => !!(e.text || "").trim()))).length > 0 ? e[0].length : 0,
                        h = e.map((e, t) => ({
                            row: e,
                            rowIndex: t
                        })).filter(({
                            row: e
                        }) => e.length !== f);
                    if (h.length > 0) {
                        let e = h[0];
                        throw new(l(101787)).yI4("CsvImportError", {
                            data: {},
                            clientData: {
                                type: "csv_import_inconsistent_columns",
                                messageValues: {
                                    numTitleColumns: f,
                                    numBadRows: h.length,
                                    firstBadRowIndex: e.rowIndex + 1,
                                    firstBadRow: JSON.stringify(e.row.map(e => e.text)),
                                    firstBadRowLength: e.row.length
                                }
                            }
                        })
                    }
                    let g = null == (c = e[0]) ? void 0 : c.length;
                    null == i || i.set("ColumnCategory", function(e) {
                        if (e < 50) return "lessthan50";
                        if (e < 100) return "lessthan100";
                        if (e < 500) return "lessthan500";
                        if (e < 1e3) return "lessthan1000";
                        if (e < 5e3) return "lessthan5000";
                        else return "greaterthan5000"
                    }(g));
                    let y = null == o ? void 0 : o.columnHeaders,
                        _ = void 0 !== y && y.length > 0,
                        b = [];
                    _ ? (b = y.flatMap(e => e.doNotImport ? [] : [e.headerName]), null != o && o.useFirstRowAsHeaders && e.shift()) : 1 === e.length || p ? b = e[0].map((e, l) => t.formatMessage(s.genericColumnName, {
                        columnNumber: l + 1
                    })) : e.length > 1 && (b = e[0].map(e => e.text), e.shift());
                    let x = e,
                        {
                            types: w,
                            schema: T,
                            pages: S
                        } = _ && y ? function(e) {
                            let {
                                body: t,
                                intl: n,
                                randomShortID: a,
                                headerTitles: r,
                                headersMetadata: i,
                                isPreTypedCSV: o,
                                csvEvalContext: s
                            } = e, p = performance.now(), {
                                types: c,
                                notToImportColumnIndex: u
                            } = function(e) {
                                let {
                                    intl: t,
                                    columns: n,
                                    randomShortID: a
                                } = e, r = [];
                                return {
                                    types: n.flatMap((e, n) => {
                                        if (e.doNotImport) return r.push(n), [];
                                        let i = l(763230).D_;
                                        return "checkbox" === e.propertyType ? i = e => v(e) : "number" === e.propertyType ? i = e => I(e) : "date" === e.propertyType && "format" in e ? i = l => C(l, t, e.format) : "date" === e.propertyType && (i = e => C(e, t)), [{
                                            id: "title" === e.propertyType ? "title" : a(),
                                            schema: {
                                                name: e.headerName,
                                                type: e.propertyType
                                            },
                                            coerce: i
                                        }]
                                    }),
                                    notToImportColumnIndex: r
                                }
                            }({
                                intl: n,
                                columns: i,
                                randomShortID: a
                            }), f = performance.now() - p;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", f);
                            let {
                                pages: h,
                                selectPropertyOptions: g
                            } = d({
                                body: t,
                                types: c,
                                isPreTypedCSV: o,
                                notToImportColumnIndex: u
                            });
                            if (g)
                                for (let e of c) g[e.id] && ("select" === e.schema.type || "multi_select" === e.schema.type) && (e.schema.options = function(e) {
                                    let {
                                        randomShortID: t,
                                        optionValues: n,
                                        propertyType: a
                                    } = e;
                                    return ("multi_select" === a ? n.flatMap(e => e.split(",").map(e => e.trim()).filter(e => e.length > 0)) : n.map(e => e.trim()).filter(e => e.length > 0)).filter((e, t, l) => l.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t).map(e => ({
                                        id: t(),
                                        value: e,
                                        color: (0, l(326044).Z)([])
                                    }))
                                }({
                                    randomShortID: a,
                                    optionValues: g[e.id],
                                    propertyType: e.schema.type
                                }));
                            let {
                                schema: y
                            } = m({
                                body: t,
                                intl: n,
                                randomShortID: a,
                                headers: r,
                                types: c,
                                isPreTypedCSV: o
                            });
                            return {
                                types: c,
                                schema: y,
                                pages: h
                            }
                        }({
                            body: x,
                            intl: t,
                            randomShortID: n,
                            headerTitles: b,
                            headersMetadata: y,
                            isPreTypedCSV: _,
                            csvEvalContext: i
                        }) : function(e) {
                            let {
                                body: t,
                                intl: l,
                                randomShortID: n,
                                isPhoneNumber: a,
                                useCsvAdaptiveSchema: r,
                                headers: i,
                                isPreTypedCSV: o,
                                csvEvalContext: s
                            } = e, p = performance.now(), {
                                types: c
                            } = u({
                                body: t,
                                intl: l,
                                randomShortID: n,
                                isPhoneNumber: a,
                                useCsvAdaptiveSchema: r,
                                csvEvalContext: s
                            }), f = performance.now() - p;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", f);
                            let {
                                schema: h
                            } = m({
                                body: t,
                                intl: l,
                                randomShortID: n,
                                headers: i,
                                types: c,
                                isPreTypedCSV: o
                            }), {
                                pages: g
                            } = d({
                                body: t,
                                types: c,
                                isPreTypedCSV: o
                            });
                            return {
                                types: c,
                                schema: h,
                                pages: g
                            }
                        }({
                            body: x,
                            intl: t,
                            randomShortID: n,
                            isPhoneNumber: a,
                            useCsvAdaptiveSchema: r,
                            headers: b,
                            isPreTypedCSV: _,
                            csvEvalContext: i
                        });
                    return {
                        schema: T,
                        types: w,
                        pages: S
                    }
                }(t, n, a, i, o, e.csvEvalContext, e.metadata, p);
                return function(e) {
                    let {
                        actor: t,
                        blockType: n,
                        root: a,
                        parent: i,
                        name: o,
                        format: s,
                        deps: {
                            randomID: p,
                            spaceIdCreator: c,
                            addFileIdsToBlock: u,
                            createCollectionAsyncWithStatusLabel: m
                        },
                        options: {
                            ignoreBlockCount: d,
                            legacyNonCrdt: f
                        },
                        pages: h,
                        schema: g,
                        columnIds: y
                    } = e, v = e.collectionId ? ? (null == c ? void 0 : c.idInSavedSpace(l(46241).V)) ? ? p(), _ = e.collectionViewId ? ? (null == c ? void 0 : c.idInSavedSpace(l(435544).G)) ? ? p(), I = [], b = [], x = [], {
                        operations: C
                    } = l(993189).WBy.create({
                        id: v,
                        parent: a.existing ? a.record.pointer : {
                            id: a.id,
                            table: l(682956).ev,
                            spaceId: i.spaceId
                        },
                        space_id: i.spaceId,
                        name: r().x9d(o),
                        schema: g,
                        format: {
                            collection_page_properties: l(381453).oE(y.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...m && {
                                sync_state: {
                                    syncing: !0,
                                    last_synced_at: Date.now()
                                },
                                static_import_collection_type: l(565546).IE.CsvImport
                            }
                        },
                        createdBy: t
                    });
                    I.push(...C);
                    let w = {
                            id: a.existing ? a.record.id : a.id,
                            type: n,
                            collection_id: v,
                            format: {
                                collection_pointer: {
                                    table: l(46241).V,
                                    id: v,
                                    spaceId: i.spaceId
                                }
                            },
                            view_ids: [_],
                            createdBy: t,
                            parentPointer: i,
                            space_id: i.spaceId
                        },
                        {
                            createOrUpdateBlockOperations: T
                        } = l(877308).Rf({
                            blockModelArgs: w,
                            existingBlock: a.existing ? a.record : void 0,
                            legacyNonCrdt: f
                        });
                    if (I.push(...T), m) {
                        let {
                            operations: e
                        } = l(993189).lqf.create({
                            id: _,
                            type: "table",
                            name: "Show All",
                            parent: a.existing ? a.record.pointer : {
                                id: a.id,
                                table: l(682956).ev,
                                spaceId: i.spaceId
                            },
                            space_id: i.spaceId,
                            format: {
                                collection_pointer: (0, l(9247).Z8)({
                                    collectionId: v,
                                    spaceId: i.spaceId
                                }),
                                table_properties: l(381453).oE(y.map(e => {
                                    if (e) return {
                                        visible: !0,
                                        property: e
                                    }
                                })),
                                ...s
                            },
                            createdBy: t
                        });
                        I.push(...e)
                    }
                    let S = function(e) {
                        let {
                            actor: t,
                            collectionId: n,
                            spaceId: a,
                            pages: r,
                            randomID: i,
                            spaceIdCreator: o,
                            options: s
                        } = e;
                        return r.map(r => {
                            let p = (null == o ? void 0 : o.idInSavedSpace(l(682956).ev)) ? ? i(),
                                {
                                    model: c,
                                    operations: u
                                } = l(993189).zgg.create({
                                    id: p,
                                    parentPointer: {
                                        id: n,
                                        table: l(46241).V,
                                        spaceId: a
                                    },
                                    space_id: a,
                                    type: l(955630).xd.page,
                                    createdBy: t,
                                    properties: r,
                                    ...s.ignoreBlockCount ? {
                                        ignore_block_count: !0
                                    } : void 0
                                }),
                                m = [...u];
                            if (e.addFileIdsToBlock) {
                                let e = (0, l(781539).c)(c, "", "").fileIds;
                                e.length > 0 && m.push(l(488307).op.update({
                                    pointer: c.pointer,
                                    path: [],
                                    args: {
                                        file_ids: e.map(e => e.id)
                                    }
                                }))
                            }
                            return {
                                id: p,
                                operations: m
                            }
                        })
                    }({
                        actor: t,
                        collectionId: v,
                        addFileIdsToBlock: u,
                        spaceId: i.spaceId,
                        pages: h,
                        randomID: p,
                        spaceIdCreator: c,
                        options: {
                            ignoreBlockCount: d
                        }
                    });
                    for (let {
                            operations: e
                        } of S) b.push(...e);
                    let {
                        operations: M
                    } = l(993189).lqf.create({
                        id: _,
                        type: "table",
                        name: "Show All",
                        parent: a.existing ? a.record.pointer : {
                            id: a.id,
                            table: l(682956).ev,
                            spaceId: i.spaceId
                        },
                        space_id: i.spaceId,
                        format: {
                            collection_pointer: (0, l(9247).Z8)({
                                collectionId: v,
                                spaceId: i.spaceId
                            }),
                            table_properties: l(381453).oE(y.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...s
                        },
                        page_sort: S.map(e => e.id).slice(0, l(9247).WF),
                        createdBy: t
                    });
                    if (b.push(...M), !m) return {
                        operations: [...I, ...b]
                    }; {
                        let e = {
                                table: l(46241).V,
                                id: v,
                                spaceId: i.spaceId
                            },
                            t = l(488307).op.update({
                                pointer: e,
                                path: ["format", "sync_state"],
                                args: {
                                    syncing: !1,
                                    last_synced_at: Date.now()
                                }
                            });
                        return x.push(t), {
                            operations: b,
                            createCollectionOperations: I,
                            collectionFinishedOperations: x
                        }
                    }
                }({ ...c,
                    columnIds: c.types.map(e => e.id),
                    ...e
                })
            }

            function c(e) {
                let {
                    table: t,
                    actor: n,
                    parent: a,
                    tableId: r,
                    deps: {
                        randomID: i,
                        spaceIdCreator: o,
                        randomShortID: s
                    },
                    options: {
                        legacyNonCrdt: p,
                        ignoreBlockCount: c,
                        hasHeaderRow: u,
                        hasHeaderColumn: m
                    }
                } = e, d = [], f = t.length ? t[0].map(e => s()) : [], h = t.map(e => (null == o ? void 0 : o.idInSavedSpace(l(682956).ev)) ? ? i());
                return d.push(...l(993189).zgg.create({
                    id: r,
                    type: l(955630).xd.table,
                    content: h,
                    format: {
                        table_block_column_order: f,
                        ...u ? {
                            table_block_column_header: !0
                        } : {},
                        ...m ? {
                            table_block_row_header: !0
                        } : {}
                    },
                    properties: {},
                    parentPointer: a,
                    space_id: a.spaceId,
                    createdBy: n,
                    ignore_block_count: !!c || void 0,
                    legacyNonCrdt: p
                }).operations), d.push(...h.flatMap((e, i) => {
                    let o = (0, l(722371).MU)(f.flatMap((e, l) => {
                        var n;
                        let a = null == (n = t[i]) || null == (n = n[l]) ? void 0 : n.textValue;
                        return a ? [
                            [e, a]
                        ] : []
                    }));
                    return l(993189).zgg.create({
                        id: e,
                        type: l(955630).xd.tableRow,
                        parentPointer: {
                            id: r,
                            table: l(682956).ev,
                            spaceId: a.spaceId
                        },
                        space_id: a.spaceId,
                        properties: o,
                        createdBy: n,
                        legacyNonCrdt: p
                    }).operations
                })), {
                    operations: d
                }
            }

            function u(e) {
                let {
                    body: t,
                    intl: r,
                    randomShortID: s,
                    isPhoneNumber: p,
                    useCsvAdaptiveSchema: c,
                    csvEvalContext: u
                } = e, m = [{
                    test: B.bind(null, p),
                    sampledSchemaIsComplete: !0
                }, {
                    test: b,
                    sampledSchemaIsComplete: !0
                }, {
                    test: S,
                    sampledSchemaIsComplete: !0
                }, {
                    test: k,
                    sampledSchemaIsComplete: !0
                }, {
                    test: w,
                    sampledSchemaIsComplete: !0
                }, {
                    test: _,
                    sampledSchemaIsComplete: !1
                }, {
                    test: N,
                    sampledSchemaIsComplete: !1
                }, {
                    test: P,
                    sampledSchemaIsComplete: !1
                }, {
                    test: D,
                    sampledSchemaIsComplete: !0
                }];
                return {
                    types: l(381453).oE(l(381453).$1(t).map(e => e.length && e[0].columnType ? e[0].columnType : function(e, t, r, s, p, c) {
                        let u = t.filter(e => !!e);
                        if (0 === u.length) return D(e, u);
                        if (p) {
                            let l = u.length > 1e3 ? function(e) {
                                let t = e.length,
                                    l = [];
                                for (let n = 0; n < 1e3; n++) {
                                    let n = Math.floor(Math.random() * t);
                                    l.push(e[n])
                                }
                                return l
                            }(u) : u;
                            for (let p of s) {
                                let s = p.test(e, l, r);
                                if (s) {
                                    let l = s;
                                    if (!1 === s.isFullMatch) {
                                        a().log({
                                            level: "info",
                                            from: "csvHelper",
                                            type: "csvColumnTypes",
                                            data: {
                                                message: "Partial column type match detected, setting data type as string",
                                                columnType: s.schema.type,
                                                matchType: "Partial"
                                            }
                                        }), l = D(e, t);
                                        let r = (null == c ? void 0 : c.get(i)) || 0;
                                        (0, n().Et)(r) && (null == c || c.set(i, r + 1))
                                    } else a().log({
                                        level: "info",
                                        from: "csvHelper",
                                        type: "csvColumnTypes",
                                        data: {
                                            message: "Complete column type match detected",
                                            columnType: s.schema.type,
                                            matchType: "Full"
                                        }
                                    });
                                    let r = (null == c ? void 0 : c.get(o)) || 0;
                                    return (0, n().Et)(r) && (null == c || c.set(o, r + 1)), l
                                }
                            }
                        } else {
                            let t = u.filter(e => !l(381453).Im(e)).slice(0, 100);
                            for (let l of s) {
                                let s = l.test(e, t, r);
                                if (s) {
                                    let p = l.sampledSchemaIsComplete || t.length === u.length ? s : l.test(e, u, r);
                                    if (p) {
                                        if (!1 === p.isFullMatch) {
                                            a().log({
                                                level: "info",
                                                from: "csvHelper",
                                                type: "csvColumnTypes",
                                                data: {
                                                    message: "Partial column type match detected, Potential data loss due to parsing failures",
                                                    columnType: p.schema.type,
                                                    matchType: "Partial"
                                                }
                                            });
                                            let e = (null == c ? void 0 : c.get(i)) || 0;
                                            (0, n().Et)(e) && (null == c || c.set(i, e + 1))
                                        } else {
                                            let e = (null == c ? void 0 : c.get(o)) || 0;
                                            (0, n().Et)(e) && (null == c || c.set(o, e + 1))
                                        }
                                        return p
                                    }
                                }
                            }
                        }
                        return D(e, [])
                    }(r, e.map(e => null == e ? void 0 : e.text), s, m, c, u)))
                }
            }

            function m(e) {
                let {
                    body: t,
                    intl: l,
                    randomShortID: n,
                    headers: a,
                    types: i,
                    isPreTypedCSV: o
                } = e, p = a.map(() => !1);
                if (!o) {
                    for (let e = 0; e < a.length; e++)
                        if ("text" === i[e].schema.type)
                            for (let l = 0; l < t.length; l++) {
                                let n = t[l][e].textValue;
                                if (n) {
                                    for (let a of n)
                                        if (r().BEe(a)) {
                                            p[e] = !0, l = t.length;
                                            break
                                        }
                                }
                            }
                }
                let c = !0,
                    u = {
                        title: {
                            type: "title",
                            name: l.formatMessage(s.titleColumnName)
                        }
                    };
                return a.forEach((e, t) => {
                    let l = i[t];
                    if (l)
                        if ("text" !== l.schema.type || !c || p[t] || o)
                            if (o && "title" === l.schema.type) {
                                let t = u.title;
                                t && (t.name = e)
                            } else {
                                let t = l.id ? ? n();
                                l.id || (l.id = t), u[t] = { ...l.schema,
                                    name: e
                                }
                            }
                    else {
                        c = !1, l.id = "title", l.schema = {
                            type: "title",
                            name: e
                        };
                        let t = u.title;
                        t && (t.name = e)
                    }
                }), {
                    schema: u
                }
            }

            function d(e) {
                let {
                    body: t,
                    types: n,
                    isPreTypedCSV: a,
                    notToImportColumnIndex: i
                } = e, o = {};
                return {
                    pages: t.map(e => {
                        null != i && i.length && (e = e.filter((e, t) => !i.includes(t)));
                        let t = {};
                        return n.forEach((n, i) => {
                            if (n) {
                                let {
                                    id: s,
                                    schema: p,
                                    coerce: c
                                } = n, {
                                    type: u
                                } = p;
                                if (s) {
                                    let n = e[i] || "";
                                    if ("url" === u) t[s] = l(561872).jw(n.text);
                                    else if ("date" === u) t[s] = l(561872).m5(c(n.text));
                                    else if ("text" === u) t[s] = n.textValue || r().x9d(c(n.text));
                                    else if ("file" === u) t[s] = n.textValue || [];
                                    else if ("select" === u || "multi_select" === u) {
                                        let e = [];
                                        if (e = "multi_select" === u ? n.text.split(",").map(e => e.trim()).filter(e => e.length > 0).filter((e, t, l) => l.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t) : n.text.trim() ? [n.text.trim()] : [], a)
                                            for (let t of e) {
                                                if (!t || !t.trim()) continue;
                                                let e = t.trim();
                                                o[s] || (o[s] = []), o[s].find(t => t.toLowerCase() === e.toLowerCase()) || o[s].push(e)
                                            }
                                        t[s] = r().x9d(c(n.text))
                                    } else t[s] = r().x9d(c(n.text))
                                }
                            }
                        }), t
                    }),
                    selectPropertyOptions: a ? o : void 0
                }
            }
            let f = ["yes", "Yes", "true", "True", "checked"],
                h = ["no", "No", "false", "False", "unchecked"];

            function g(e) {
                return f.some(t => e === t) || h.some(t => e === t)
            }

            function y(e, t) {
                return e.length === t.length
            }

            function v(e) {
                return f.some(t => e === t) ? l(745680).I1 : l(745680).oP
            }

            function _(e, t) {
                if (t.every(g)) return {
                    schema: {
                        type: "checkbox"
                    },
                    validate: g,
                    coerce: e => v(e)
                }
            }

            function I(e) {
                let t = l(700369).sA(e);
                return `${t?t.value:void 0}`
            }

            function b(e, t) {
                let a = t.map(l(700369).sA),
                    r = a[0];
                if (r && a.every(e => !!(e && e.format === r.format))) return {
                    schema: {
                        type: "number",
                        number_format: r.format
                    },
                    validate(e) {
                        let t = l(700369).sA(e);
                        return !n().pN(t) && t.format === r.format
                    },
                    coerce: e => I(e)
                }
            }

            function x(e, t) {
                return (!parseInt(t) || !(t.length <= 6)) && !!l(629518).JC(t, e)
            }

            function C(e, t, n) {
                let a = e.includes("→");
                return l(629518).JC(e, t, a ? void 0 : n)
            }

            function w(e, t) {
                let l = t.filter(t => x(e, t));
                if (l.length >= t.length / 2) return {
                    schema: {
                        type: "date"
                    },
                    validate: t => x(e, t),
                    coerce: t => C(t, e),
                    isFullMatch: y(t, l)
                }
            }

            function T(e) {
                return e.length < 320 && e.includes("@") && l(159523).t6(e, "email")
            }

            function S(e, t) {
                let n = t.filter(T);
                if (n.length >= t.length / 2) return {
                    schema: {
                        type: "email"
                    },
                    validate: T,
                    coerce: l(763230).D_,
                    isFullMatch: y(t, n)
                }
            }

            function M(e) {
                return e.length < 320 && l(159523).t6(e, "url")
            }

            function k(e, t) {
                let n = t.filter(M);
                if (n.length >= t.length / 2) return {
                    schema: {
                        type: "url"
                    },
                    validate: M,
                    coerce: l(763230).D_,
                    isFullMatch: y(t, n)
                }
            }

            function E(e, t) {
                return !String(t).match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) && e(String(t))
            }

            function B(e, t, n) {
                let a = E.bind(null, e),
                    r = n.filter(a);
                if (r.length >= n.length / 2) return {
                    schema: {
                        type: "phone_number"
                    },
                    validate: a,
                    coerce: l(763230).D_,
                    isFullMatch: y(n, r)
                }
            }

            function N(e, t, n) {
                var a, r, i, o;
                let s = [];
                t.forEach(e => e.split(",").forEach(e => s.push(e.trim())));
                let p = l(561872).ki(s),
                    c = new Set(p);
                if (a = p.length, (r = s.length) > t.length && (i = a, o = r, i > 0 && i ** 2 < o)) return {
                    schema: {
                        type: "multi_select",
                        options: p.map((e, t) => ({
                            id: n(),
                            value: e,
                            color: (0, l(326044).Z)([])
                        }))
                    },
                    validate: e => c.has(e),
                    coerce: l(763230).D_
                }
            }

            function P(e, t, n) {
                var a, r;
                let i = l(561872).ki(t),
                    o = new Set(i);
                if (a = i.length, r = t.length, a > 0 && a ** 2 < r) return {
                    schema: {
                        type: "select",
                        options: i.map((e, t) => ({
                            id: n(),
                            value: e,
                            color: (0, l(326044).Z)([])
                        }))
                    },
                    validate: e => o.has(e),
                    coerce: l(763230).D_
                }
            }

            function D(e, t) {
                return {
                    schema: {
                        type: "text"
                    },
                    validate: () => !0,
                    coerce: l(763230).D_
                }
            }

            function F(e, t) {
                t || (t = function(e, t) {
                    let l = ",",
                        n = 0,
                        a = e.split(/\r?\n/).slice(0, 10).join("\n");
                    for (let e of t) {
                        let t = function(e, t) {
                            let l = [],
                                n = [],
                                a = "",
                                r = !1;
                            for (let i = 0; i < e.length; i++) {
                                let o = e[i],
                                    s = e[i + 1];
                                '"' === o ? r && '"' === s ? (a += '"', i++) : r = !r : o !== t || r ? "\n" !== o && "\r" !== o || r ? a += o : (n.push(a), n.length > 0 && l.push(n), n = [], a = "", "\r" === o && "\n" === s && i++) : (n.push(a), a = "")
                            }
                            return (a || n.length > 0) && (n.push(a), l.push(n)), l.filter(e => e.length > 0 && e.some(e => e.trim()))
                        }(a, e);
                        if (t.length <= 1) continue;
                        let r = t.map(e => e.length),
                            i = function(e) {
                                var t;
                                return Number((null == (t = Object.entries(e.reduce((e, t) => (e[t] = (e[t] || 0) + 1, e), {})).sort((e, t) => t[1] - e[1])[0]) ? void 0 : t[0]) || 0)
                            }(r),
                            o = r.filter(e => e === i).length / r.length,
                            s = i >= 6 ? .6 : .7;
                        if (i <= 1 || o < s) continue;
                        let p = t.flat().filter(t => t.includes(e)).length / (t.length * i),
                            c = 100 * o + 10 * i - 50 * p;
                        c > n && (n = c, l = e)
                    }
                    return l
                }(e, [",", ";", "	", "|"]));
                let l = [],
                    n = [],
                    a = "",
                    r = !1;
                for (let i = 0; i < e.length; i++) {
                    let o = e[i],
                        s = e[i + 1];
                    if ('"' === o) r && '"' === s ? (a += '"', i++) : r = !r;
                    else if (o !== t || r)
                        if ("\n" !== o && ("\r" !== o || "\n" === s) || r) {
                            if ("\r" === o && "\n" === s && !r) continue;
                            a += o
                        } else n.push(a), l.push(n), n = [], a = "";
                    else n.push(a), a = ""
                }
                return (a || n.length > 0) && (n.push(a), l.push(n)), l
            }
            let V = [{
                type: "title",
                name: "Title"
            }, {
                type: "text",
                name: "Text"
            }, {
                type: "number",
                name: "Number"
            }, {
                type: "select",
                name: "Select"
            }, {
                type: "multi_select",
                name: "Multi-select"
            }, {
                type: "status",
                name: "Status"
            }, {
                type: "date",
                name: "Date"
            }, {
                type: "checkbox",
                name: "Checkbox"
            }, {
                type: "url",
                name: "URL"
            }, {
                type: "email",
                name: "Email"
            }, {
                type: "phone_number",
                name: "Phone Number"
            }, {
                type: "person",
                name: "Person"
            }, {
                type: "dont_import",
                name: "Don't import"
            }]
        }
    }
]);