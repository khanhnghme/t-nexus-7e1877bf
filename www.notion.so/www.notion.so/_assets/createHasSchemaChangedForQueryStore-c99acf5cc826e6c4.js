"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [42050], {
        228810: (e, t, r) => {
            function o(e) {
                return new(r(345426)).ComputedStore(function() {
                    var t, o;
                    let n = e.normalizedSchemaStore.state,
                        i = null == (t = e.lastRemoteRequestStore.state) ? void 0 : t.schema,
                        a = null == (o = e.remoteRequestStore.state) ? void 0 : o.loader;
                    return !!i && !!a && function({
                        loader: e,
                        previousSchema: t,
                        currentSchema: o
                    }) {
                        var n, i;
                        let a;
                        return Array.from(void 0 === (n = e) ? new Set : new Set([... function(e) {
                            let t = [];
                            if (!(null != e && e.reducers)) return t;
                            let r = Object.values(e.reducers).filter(e => "groups" === e.type);
                            if (0 === r.length) return t;
                            for (let e of r)
                                if (t.push(e.groupBy.property), void 0 !== e.subGroup && t.push(e.subGroup.groupBy.property), e.aggregation && (("intersection" === e.aggregation.type || "intersection_and_independent" === e.aggregation.type) && e.aggregation.intersectionAggregation.property && t.push(e.aggregation.intersectionAggregation.property), "independent" === e.aggregation.type || "intersection_and_independent" === e.aggregation.type)) {
                                    var o, n, i;
                                    null != (o = e.aggregation.groupAggregation) && o.property && t.push(null == (i = e.aggregation.groupAggregation) ? void 0 : i.property), null != (n = e.aggregation.subGroupAggregation) && n.property && t.push(e.aggregation.subGroupAggregation.property)
                                }
                            return t
                        }(n), ...(i = n.sort, a = [], void 0 === i || i.forEach(e => {
                            a.push(e.property)
                        }), a), ... function e(t) {
                            let o = [];
                            if (void 0 === t) return o;
                            if ((0, r(400473).dU)(t)) {
                                var n;
                                return null == (n = t.filters) || n.forEach(t => {
                                    o.push(...e(t))
                                }), o
                            }
                            return (0, r(400473).yX)(t) ? (o.push(t.property), o) : (0, r(400473).LB)(t) ? (o.push(t.timestamp), o) : void(0, r(722371).HB)(t)
                        }(n.filter), ... function(e) {
                            let t = [];
                            if (!(null != e && e.reducers)) return t;
                            let r = Object.values(e.reducers).filter(e => "aggregation" === e.type);
                            if (0 === r.length) return t;
                            for (let e of r) e.aggregation.property && t.push(e.aggregation.property);
                            return t
                        }(n)])).some(e => {
                            let n = null == t ? void 0 : t[e],
                                i = null == o ? void 0 : o[e];
                            return !!n && !!i && (function(e, t) {
                                if (e.type !== t.type) return ["type"];
                                let o = [];
                                switch (e.name !== t.name && o.push("formatAttribute"), e.icon !== t.icon && o.push("formatAttribute"), e.type) {
                                    case void 0:
                                    case "file":
                                    case "button":
                                    case "verification":
                                    case "place":
                                    case "auto_increment_id":
                                    case "location":
                                    case "title":
                                    case "text":
                                    case "url":
                                    case "email":
                                    case "phone_number":
                                    case "created_by":
                                    case "last_edited_by":
                                    case "date":
                                    case "created_time":
                                    case "last_edited_time":
                                    case "last_visited_time":
                                    case "checkbox":
                                    case "number":
                                        return ["formatAttribute"];
                                    case "rollup":
                                        if ("rollup" !== t.type) return o;
                                        if (e.relation_property !== t.relation_property || !r(381453).n4(e.aggregation, t.aggregation) || e.target_property !== t.target_property || e.target_property_type !== t.target_property_type) return o.push("computedAttribute"), o;
                                        return ["formatAttribute"];
                                    case "formula":
                                        if ("formula" !== t.type) return o;
                                        if (!r(381453).n4(e.formula, t.formula) || !r(381453).n4(e.formula2, t.formula2) || !r(381453).n4(e.number_format, t.number_format) || !r(381453).n4(e.number_precision, t.number_precision)) return o.push("computedAttribute"), o;
                                        return ["formatAttribute"];
                                    case "select":
                                    case "multi_select":
                                    case "status":
                                        if ("status" !== t.type && "select" !== t.type && "multi_select" !== t.type) return [];
                                        return function(e, t) {
                                            let o = [],
                                                n = e.options || [],
                                                i = t.options || [],
                                                a = n.reduce((e, t, r) => (e.set(t.id, {
                                                    value: t,
                                                    index: r
                                                }), e), new Map),
                                                u = i.reduce((e, t, r) => (e.set(t.id, {
                                                    value: t,
                                                    index: r
                                                }), e), new Map);
                                            for (let e of i) a.has(e.id) || o.push("addedOption");
                                            for (let [e, {
                                                    value: t,
                                                    index: n
                                                }] of a.entries()) {
                                                let i = u.get(e);
                                                if (i)
                                                    if (i.index !== n) o.push("reorderedOptions");
                                                    else {
                                                        let e = function(e, t) {
                                                            let o = [];
                                                            return e.value !== t.value && o.push("value"), e.color !== t.color && o.push("color"), e.description !== t.description && o.push("description"), r(381453).n4(e.collectionIds, t.collectionIds) || o.push("collectionIds"), o
                                                        }(t, i.value);
                                                        if (0 === e.length) continue;
                                                        e.every(e => "value" !== e) ? o.push("formatAttribute") : o.push("value")
                                                    }
                                                else o.push("removedOption")
                                            }
                                            return "status" === e.type && "status" === t.type && e.defaultOption !== t.defaultOption && o.push("default"), o
                                        }(e, t);
                                    case "person":
                                        return "person" === t.type && (e.limit !== t.limit && o.push("limit"), e.default !== t.default && o.push("default")), o;
                                    case "relation":
                                        if ("relation" !== t.type) return [];
                                        return e.limit !== t.limit && o.push("limit"), o;
                                    default:
                                        (0, r(722371).HB)(e)
                                }
                            })(n, i).some(e => "formatAttribute" !== e)
                        })
                    }({
                        loader: a,
                        previousSchema: i,
                        currentSchema: n
                    })
                }, {
                    debugName: "hasSchemaChangedForQueryStore"
                })
            }
            r.r(t), r.d(t, {
                createHasSchemaChangedForQueryStore: () => o
            }), r(898992), r(737550), r(944114), r(823215), r(908872), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(354520), r(803949)
        }
    }
]);