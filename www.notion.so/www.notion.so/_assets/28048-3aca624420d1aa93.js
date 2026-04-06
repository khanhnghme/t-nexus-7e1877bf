"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [28048], {
        116267: (e, t, r) => {
            r.d(t, {
                n: () => o
            });
            let a = new(r(815048)).O2("react-day-picker", async () => await Promise.all([r.e(90109), r.e(50672), r.e(68548)]).then(r.bind(r, 329061))),
                o = (0, r(815048)._h)(a, e => e.default)
        },
        257193: (e, t, r) => {
            r.d(t, {
                $: () => o,
                A: () => l
            });
            var a = () => r(546605);
            let o = {
                INVALID_DATE: "Invalid date",
                INVALID_RANGE: "Invalid range",
                NOT_SUPPORTED: "Not supported"
            };
            class i extends a().Store {
                getInitialState() {
                    return {
                        edited: !1,
                        temporary: "",
                        error: void 0
                    }
                }
            }
            let l = i
        },
        323700: (e, t, r) => {
            r.d(t, {
                Az: () => K,
                Cj: () => p,
                Dz: () => function e(t) {
                    let {
                        filter: a,
                        schema: o
                    } = t;
                    if ((0, r(400473).dU)(a)) {
                        let t = a.filters || [],
                            i = r(381453).oE(t.map(t => {
                                let a = e({
                                    filter: t,
                                    schema: o
                                });
                                if (a) return (0, r(400473).dU)(t) ? `(${a})` : a
                            })),
                            l = r(962299).A.formatMessage(x[a.operator]);
                        return i.join(` ${l} `)
                    }
                    if ((0, r(400473).yX)(a)) {
                        let e = o[a.property];
                        if (!e) return;
                        let t = a.filter,
                            i = e.name,
                            l = N({
                                filter: t,
                                schema: o
                            });
                        return r(381453).oE([i, l]).join(" ")
                    }
                },
                EA: () => f,
                IZ: () => g,
                J: () => s,
                Jk: () => P,
                RR: () => M,
                SN: () => l,
                WG: () => b,
                YL: () => V,
                h0: () => F,
                iI: () => Y,
                kz: () => m,
                o1: () => _,
                ql: () => c,
                w0: () => D,
                wE: () => q,
                xt: () => o,
                zZ: () => d
            }), r(16280), r(898992), r(823215), r(354520), r(581454);
            let a = {
                text: {
                    operator: "string_contains",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                relation: {
                    operator: "relation_contains",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                url: {
                    operator: "string_contains",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                checkbox: {
                    operator: "checkbox_is",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                created_by: {
                    operator: "person_contains",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                last_edited_by: {
                    operator: "person_contains",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                select: {
                    operator: "enum_is",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                multi_select: {
                    operator: "enum_contains",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                status: {
                    operator: "status_is",
                    value: {
                        type: "is_group",
                        value: void 0
                    }
                },
                person: {
                    operator: "person_contains",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                number: {
                    operator: "number_equals",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                auto_increment_id: {
                    operator: "number_equals",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                date: {
                    operator: "date_is_relative_to",
                    value: {
                        type: "relative",
                        value: "surrounding",
                        unit: "week"
                    }
                },
                created_time: {
                    operator: "date_is",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                last_edited_time: {
                    operator: "date_is",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                last_visited_time: {
                    operator: "date_is",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                email: {
                    operator: "string_contains",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                phone_number: {
                    operator: "string_contains",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                title: {
                    operator: "string_contains",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                file: {
                    operator: "is_not_empty"
                },
                location: {
                    operator: "location_is",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                verification: {
                    operator: "verification_is",
                    value: {
                        type: "exact",
                        value: void 0
                    }
                },
                place: {
                    operator: "is_not_empty"
                }
            };

            function o(e) {
                return a[e]
            }

            function i(e) {
                if ((0, r(537664).F)(e)) {
                    var t = e;
                    if (!t.formula2) return {
                        operator: "is_empty"
                    };
                    let o = t.formula2.result_type;
                    if ("array" === o.type) {
                        let e = (0, r(297493).JK)(o.of);
                        return "array" === e.type || "function" === e.type ? {
                            operator: "is_empty"
                        } : "block" === e.type || "unknown" === e.type || "undefined" === e.type ? {
                            operator: "any",
                            subfilter: a.text
                        } : {
                            operator: "any",
                            subfilter: a[e.type]
                        }
                    }
                    return "unknown" === o.type || "block" === o.type || "undefined" === o.type ? a.text : a[o.type]
                }
                return e.formula && e.formula.result_type ? a[e.formula.result_type] : {
                    operator: "is_empty"
                }
            }

            function l(e) {
                let {
                    property: t,
                    schema: o
                } = e, l = o[t];
                if (!l || "button" === l.type) return {
                    operator: "is_empty"
                };
                if ("formula" === l.type) return i(l);
                if ("rollup" === l.type)
                    if (l.aggregation && "show_unique" !== l.aggregation) return a[(0, r(288299).ou)((0, r(288299).ZP)(l.aggregation))];
                    else {
                        let t = (0, r(26837).eY)(e);
                        if (!t) return {
                            operator: "any",
                            subfilter: {
                                operator: "is_empty"
                            }
                        };
                        let o = t.rollupType,
                            l = "relation" === o ? t.targetPropertySchema : null;
                        if ("relation" === o && (null == l ? void 0 : l.type) === "rollup") return {
                            operator: "any",
                            subfilter: {
                                operator: "is_empty"
                            }
                        };
                        if ("relation" === o && (null == l ? void 0 : l.type) === "formula") {
                            let e = i(l);
                            return (0, r(400473).s1)(e) ? e : {
                                operator: "any",
                                subfilter: e
                            }
                        }
                        if ("relation" === o && (null == l ? void 0 : l.type) === "button") return {
                            operator: "is_empty"
                        };
                        let n = "relation" === o ? null == l ? void 0 : l.type : "text";
                        return n && (0, r(194180).ry)(n) ? {
                            operator: "any",
                            subfilter: a[n]
                        } : {
                            operator: "is_empty"
                        }
                    }
                return a[l.type]
            }
            let n = (0, r(109939).YK)({
                date_is_within: {
                    defaultMessage: "Is between",
                    id: "collectionFilterMenuHelpers.operator.dateIsWithin"
                },
                date_is_relative_to: {
                    defaultMessage: "Is relative to today",
                    id: "collectionFilterMenuHelpers.operator.dateIsRelativeTo"
                },
                is_empty: {
                    defaultMessage: "Is empty",
                    id: "collectionFilterMenuHelpers.operator.isEmpty"
                },
                is_not_empty: {
                    defaultMessage: "Is not empty",
                    id: "collectionFilterMenuHelpers.operator.isNotEmpty"
                },
                string_is: {
                    defaultMessage: "Is",
                    id: "collectionFilterMenuHelpers.operator.stringIs"
                },
                string_is_not: {
                    defaultMessage: "Is not",
                    id: "collectionFilterMenuHelpers.operator.stringIsNot"
                },
                string_contains: {
                    defaultMessage: "Contains",
                    id: "collectionFilterMenuHelpers.operator.stringContains"
                },
                string_does_not_contain: {
                    defaultMessage: "Does not contain",
                    id: "collectionFilterMenuHelpers.operator.stringDoesNotContain"
                },
                string_starts_with: {
                    defaultMessage: "Starts with",
                    id: "collectionFilterMenuHelpers.operator.stringStartsWith"
                },
                string_ends_with: {
                    defaultMessage: "Ends with",
                    id: "collectionFilterMenuHelpers.operator.stringEndsWith"
                },
                checkbox_is: {
                    defaultMessage: "Is",
                    id: "collectionFilterMenuHelpers.operator.checkboxIs"
                },
                checkbox_is_not: {
                    defaultMessage: "Is not",
                    id: "collectionFilterMenuHelpers.operator.checkboxIsNot"
                },
                enum_is: {
                    defaultMessage: "Is",
                    id: "collectionFilterMenuHelpers.operator.enumIs"
                },
                enum_is_not: {
                    defaultMessage: "Is not",
                    id: "collectionFilterMenuHelpers.operator.enumIsNot"
                },
                enum_contains: {
                    defaultMessage: "Contains",
                    id: "collectionFilterMenuHelpers.operator.enumContains"
                },
                enum_does_not_contain: {
                    defaultMessage: "Does not contain",
                    id: "collectionFilterMenuHelpers.operator.enumDoesNotContain"
                },
                status_is: {
                    defaultMessage: "Is",
                    id: "collectionFilterMenuHelpers.operator.statusIs"
                },
                status_is_not: {
                    defaultMessage: "Is not",
                    id: "collectionFilterMenuHelpers.operator.statusIsNot"
                },
                person_contains: {
                    defaultMessage: "Contains",
                    id: "collectionFilterMenuHelpers.operator.personContains"
                },
                person_does_not_contain: {
                    defaultMessage: "Does not contain",
                    id: "collectionFilterMenuHelpers.operator.personDoesNotContain"
                },
                relation_contains: {
                    defaultMessage: "Contains",
                    id: "collectionFilterMenuHelpers.operator.relationContains"
                },
                relation_does_not_contain: {
                    defaultMessage: "Does not contain",
                    id: "collectionFilterMenuHelpers.operator.relationDoesNotContain"
                },
                location_is: {
                    defaultMessage: "Is",
                    id: "collectionFilterMenuHelpers.operator.locationIs"
                },
                location_is_not: {
                    defaultMessage: "Is not",
                    id: "collectionFilterMenuHelpers.operator.locationIsNot"
                },
                number_equals: {
                    defaultMessage: "=",
                    id: "collectionFilterMenuHelpers.operator.numberEquals"
                },
                number_does_not_equal: {
                    defaultMessage: "≠",
                    id: "collectionFilterMenuHelpers.operator.numberDoesNotEqual"
                },
                number_greater_than: {
                    defaultMessage: ">",
                    id: "collectionFilterMenuHelpers.operator.numberGreaterThan"
                },
                number_less_than: {
                    defaultMessage: "<",
                    id: "collectionFilterMenuHelpers.operator.numberLessThan"
                },
                number_greater_than_or_equal_to: {
                    defaultMessage: "≥",
                    id: "collectionFilterMenuHelpers.operator.numberGreaterThanOrEqualTo"
                },
                number_less_than_or_equal_to: {
                    defaultMessage: "≤",
                    id: "collectionFilterMenuHelpers.operator.numberLessThanOrEqualTo"
                },
                date_is: {
                    defaultMessage: "Is",
                    id: "collectionFilterMenuHelpers.operator.dateIs"
                },
                date_is_before: {
                    defaultMessage: "Is before",
                    id: "collectionFilterMenuHelpers.operator.dateIsBefore"
                },
                date_is_after: {
                    defaultMessage: "Is after",
                    id: "collectionFilterMenuHelpers.operator.dateIsAfter"
                },
                date_is_on_or_before: {
                    defaultMessage: "Is on or before",
                    id: "collectionFilterMenuHelpers.operator.dateIsOnOrBefore"
                },
                date_is_on_or_after: {
                    defaultMessage: "Is on or after",
                    id: "collectionFilterMenuHelpers.operator.dateIsOnOrAfter"
                },
                any: {
                    defaultMessage: "Any",
                    id: "collectionFilterMenuHelpers.operator.any"
                },
                none: {
                    defaultMessage: "None",
                    id: "collectionFilterMenuHelpers.operator.none"
                },
                every: {
                    defaultMessage: "Every",
                    id: "collectionFilterMenuHelpers.operator.every"
                },
                string_has_no_alphabet_prefix: {
                    defaultMessage: "(Not used)",
                    id: "collectionFilterMenuHelpers.operator.stringHasNoAlphabetPrefix"
                },
                verification_is: {
                    defaultMessage: "Is",
                    id: "collectionFilterMenuHelpers.operator.verificationStateIs"
                },
                verification_is_not: {
                    defaultMessage: "Is not",
                    id: "collectionFilterMenuHelpers.operator.verificationStateIsNot"
                }
            });

            function s(e) {
                if ("enum_contains_all" === e) throw Error("enum_contains_all is not supported to be displayed in the filter menu");
                return r(962299).A.formatMessage(n[e])
            }
            let u = (0, r(109939).YK)({
                    today: {
                        defaultMessage: "Today",
                        id: "collectionFilterMenuHelpers.relativeDates.today"
                    },
                    tomorrow: {
                        defaultMessage: "Tomorrow",
                        id: "collectionFilterMenuHelpers.relativeDates.tomorrow"
                    },
                    yesterday: {
                        defaultMessage: "Yesterday",
                        id: "collectionFilterMenuHelpers.relativeDates.yesterday"
                    },
                    one_week_ago: {
                        defaultMessage: "One week ago",
                        id: "collectionFilterMenuHelpers.relativeDates.oneWeekAgo"
                    },
                    one_week_from_now: {
                        defaultMessage: "One week from now",
                        id: "collectionFilterMenuHelpers.relativeDates.oneWeekFromNow"
                    },
                    one_month_ago: {
                        defaultMessage: "One month ago",
                        id: "collectionFilterMenuHelpers.relativeDates.oneMonthAgo"
                    },
                    one_month_from_now: {
                        defaultMessage: "One month from now",
                        id: "collectionFilterMenuHelpers.relativeDates.oneMonthFromNow"
                    }
                }),
                d = (0, r(109939).YK)({
                    past: {
                        defaultMessage: "Past",
                        id: "collectionFilterMenuHelpers.relativeDates.past"
                    },
                    future: {
                        defaultMessage: "Next",
                        id: "collectionFilterMenuHelpers.relativeDates.next"
                    }
                }),
                c = (0, r(109939).YK)({
                    direction: {
                        defaultMessage: "Direction",
                        id: "collectionFilterMenuHelpers.relativeDates.direction"
                    },
                    iconButtonDirectionDropdown: {
                        defaultMessage: "Choose Past, This or Next from the menu below",
                        id: "collectionFilterMenuHelpers.relativeDates.DirectionDropdown"
                    },
                    unit: {
                        defaultMessage: "Unit",
                        id: "collectionFilterMenuHelpers.relativeDates.unit"
                    },
                    iconButtonUnitDropdown: {
                        defaultMessage: "Choose Day, Week, Month or Year from the menu below",
                        id: "collectionFilterMenuHelpers.relativeDates.UnitDropdown"
                    }
                }),
                p = (0, r(109939).YK)({
                    this: {
                        defaultMessage: "This",
                        id: "collectionFilterMenuHelpers.relativedates.this"
                    }
                }),
                f = (0, r(109939).YK)({
                    day: {
                        defaultMessage: "day",
                        id: "collectionFilterMenuHelpers.relativeDates.day"
                    },
                    week: {
                        defaultMessage: "week",
                        id: "collectionFilterMenuHelpers.relativeDates.week"
                    },
                    month: {
                        defaultMessage: "month",
                        id: "collectionFilterMenuHelpers.relativeDates.month"
                    },
                    year: {
                        defaultMessage: "year",
                        id: "collectionFilterMenuHelpers.relativeDates.year"
                    }
                }),
                _ = (0, r(109939).YK)({
                    day: {
                        defaultMessage: "days",
                        id: "collectionFilterMenuHelpers.relativeDates.days"
                    },
                    week: {
                        defaultMessage: "weeks",
                        id: "collectionFilterMenuHelpers.relativeDates.weeks"
                    },
                    month: {
                        defaultMessage: "months",
                        id: "collectionFilterMenuHelpers.relativeDates.months"
                    },
                    year: {
                        defaultMessage: "years",
                        id: "collectionFilterMenuHelpers.relativeDates.years"
                    }
                }),
                v = (0, r(109939).YK)({
                    exactDate: {
                        defaultMessage: "Custom date",
                        id: "collectionFilterMenuHelpers.relativeDates.exactDate"
                    },
                    exactDateRange: {
                        defaultMessage: "Exact dates",
                        id: "collectionFilterMenuHelpers.relativeDates.exactDateRange"
                    }
                });

            function M(e) {
                return "exact" === e.type ? r(962299).A.formatMessage(v.exactDate) : r(962299).A.formatMessage(u[e.value])
            }
            let g = (0, r(109939).YK)({
                custom: {
                    defaultMessage: "Relative range",
                    id: "collectionFilterMenuHelpers.relativeDates.range"
                },
                surrounding: {
                    defaultMessage: "Surrounding range",
                    id: "collectionFilterMenuHelpers.relativeDates.customRange"
                },
                this_week: {
                    defaultMessage: "This week",
                    id: "collectionFilterMenuHelpers.relativeDates.thisWeek"
                },
                the_past_week: {
                    defaultMessage: "The past week",
                    id: "collectionFilterMenuHelpers.relativeDates.thePastWeek"
                },
                the_past_month: {
                    defaultMessage: "The past month",
                    id: "collectionFilterMenuHelpers.relativeDates.thePastMonth"
                },
                the_past_year: {
                    defaultMessage: "The past year",
                    id: "collectionFilterMenuHelpers.relativeDates.thePastYear"
                },
                the_next_week: {
                    defaultMessage: "The next week",
                    id: "collectionFilterMenuHelpers.relativeDates.theNextWeek"
                },
                the_next_month: {
                    defaultMessage: "The next month",
                    id: "collectionFilterMenuHelpers.relativeDates.theNextMonth"
                },
                the_next_year: {
                    defaultMessage: "The next year",
                    id: "collectionFilterMenuHelpers.relativeDates.theNextYear"
                }
            });

            function m(e) {
                var t, a;
                if ("custom" === e.value) {
                    let a, o;
                    return t = e, a = r(962299).A.formatMessage(d[t.direction]), o = 1 === t.count ? r(962299).A.formatMessage(f[t.unit]) : r(962299).A.formatMessage(_[t.unit]), 1 === t.count ? `${a} ${o}` : `${a} ${t.count} ${o}`
                }
                if ("surrounding" === e.value) {
                    let t, o;
                    return a = e, t = r(962299).A.formatMessage(f[a.unit]), o = r(962299).A.formatMessage(p.this), `${o} ${t}`
                }
                return "exact" === e.type ? r(962299).A.formatMessage(v.exactDateRange) : "relative" === e.type ? r(962299).A.formatMessage(g[e.value]) : void(0, r(722371).HB)(e)
            }
            let y = (0, r(109939).YK)({
                    start_date: {
                        defaultMessage: "Start date",
                        id: "collectionFilterMenuHelpers.dateFilterModes.start_date"
                    },
                    end_date: {
                        defaultMessage: "End date",
                        id: "collectionFilterMenuHelpers.dateFilterModes.end_date"
                    }
                }),
                h = (0, r(109939).YK)({
                    start_date: {
                        defaultMessage: "For date ranges, filters on the start date. For individual dates, filters on the date.",
                        id: "collectionFilterMenuHelpers.dateFilterModesTooltip.start_date"
                    },
                    end_date: {
                        defaultMessage: "For date ranges, filters on the end date. For individual dates, filters on the date.",
                        id: "collectionFilterMenuHelpers.dateFilterModesTooltip.end_date"
                    }
                });

            function F(e) {
                return r(962299).A.formatMessage(y[e])
            }

            function b(e) {
                return r(962299).A.formatMessage(h[e])
            }
            let x = (0, r(109939).YK)({
                    and: {
                        defaultMessage: "And",
                        id: "collectionFilterMenuHelpers.combinatorOperators.and"
                    },
                    or: {
                        defaultMessage: "Or",
                        id: "collectionFilterMenuHelpers.combinatorOperators.or"
                    }
                }),
                H = (0, r(109939).YK)({
                    checked: {
                        defaultMessage: "Checked",
                        id: "collectionFilterMenuHelpers.checkbox.checked"
                    },
                    unchecked: {
                        defaultMessage: "Unchecked",
                        id: "collectionFilterMenuHelpers.checkbox.unchecked"
                    }
                });

            function D(e) {
                return e.value ? r(962299).A.formatMessage(r(435137).D6(e.value)) : ""
            }

            function k({
                filter: e,
                schema: t
            }) {
                return N({
                    filter: e.subfilter,
                    schema: t
                })
            }

            function I({
                filter: e
            }) {
                return M(e.value)
            }

            function w({
                filter: e
            }) {
                return m(e.value)
            }

            function A({
                filter: e
            }) {
                return `"${e.value.value||""}"`
            }

            function E({
                filter: e
            }) {
                return void 0 === e.value.value ? void 0 : e.value.value.toString()
            }

            function T({
                filter: e
            }) {
                let t;
                return t = e.value.value ? H.checked : H.unchecked, r(962299).A.formatMessage(t)
            }
            let O = {
                is_empty: () => void 0,
                is_not_empty: () => void 0,
                string_is: A,
                string_is_not: A,
                string_contains: A,
                string_does_not_contain: A,
                string_starts_with: A,
                string_ends_with: A,
                checkbox_is: T,
                checkbox_is_not: T,
                enum_is: A,
                enum_is_not: A,
                enum_contains: A,
                enum_does_not_contain: A,
                status_is: A,
                status_is_not: A,
                relation_contains: () => void 0,
                relation_does_not_contain: () => void 0,
                person_contains: () => void 0,
                person_does_not_contain: () => void 0,
                location_is: () => void 0,
                location_is_not: () => void 0,
                number_equals: E,
                number_does_not_equal: E,
                number_greater_than: E,
                number_less_than: E,
                number_greater_than_or_equal_to: E,
                number_less_than_or_equal_to: E,
                date_is: I,
                date_is_before: I,
                date_is_after: I,
                date_is_on_or_before: I,
                date_is_on_or_after: I,
                date_is_within: w,
                date_is_relative_to: w,
                any: k,
                none: k,
                every: k,
                string_has_no_alphabet_prefix: () => void 0,
                verification_is: A,
                verification_is_not: A
            };

            function N(e) {
                let {
                    filter: t
                } = e;
                if ("enum_contains_all" === t.operator) throw Error("enum_contains_all is not supported to be displayed in the filter menu");
                let a = s(t.operator),
                    o = O[t.operator](e);
                return r(381453).oE([a, o]).join(" ")
            }
            let C = {
                text: function(e, t) {
                    return (0, r(400473).tk)(t) ? {
                        operator: t
                    } : (0, r(400473).fZ)(e) ? {
                        operator: t,
                        value: {
                            type: "exact",
                            value: void 0
                        }
                    } : "string_has_no_alphabet_prefix" === e.operator ? {
                        operator: t
                    } : {
                        operator: t,
                        value: e.value
                    }
                },
                number: function(e, t) {
                    return (0, r(400473).tk)(t) ? {
                        operator: t
                    } : (0, r(400473).fZ)(e) ? {
                        operator: t,
                        value: {
                            type: "exact",
                            value: void 0
                        }
                    } : {
                        operator: t,
                        value: e.value
                    }
                },
                checkbox: function(e, t) {
                    return {
                        operator: t,
                        value: e.value
                    }
                },
                select: function(e, t) {
                    return (0, r(400473).tk)(t) ? {
                        operator: t
                    } : (0, r(400473).fZ)(e) ? {
                        operator: t,
                        value: {
                            type: "exact",
                            value: void 0
                        }
                    } : {
                        operator: t,
                        value: e.value
                    }
                },
                multi_select: function(e, t) {
                    return (0, r(400473).tk)(t) ? {
                        operator: t
                    } : (0, r(400473).fZ)(e) ? {
                        operator: t,
                        value: {
                            type: "exact",
                            value: void 0
                        }
                    } : {
                        operator: t,
                        value: e.value
                    }
                },
                status: function(e, t) {
                    return (0, r(400473).tk)(t) ? {
                        operator: t
                    } : (0, r(400473).fZ)(e) ? {
                        operator: t,
                        value: {
                            type: "is_option",
                            value: void 0
                        }
                    } : {
                        operator: t,
                        value: e.value
                    }
                },
                relation: function(e, t) {
                    return (0, r(400473).tk)(t) ? {
                        operator: t
                    } : (0, r(400473).fZ)(e) ? {
                        operator: t,
                        value: {
                            type: "exact",
                            value: void 0
                        }
                    } : {
                        operator: t,
                        value: e.value
                    }
                },
                person: function(e, t) {
                    return (0, r(400473).tk)(t) ? {
                        operator: t
                    } : (0, r(400473).fZ)(e) ? {
                        operator: t,
                        value: {
                            type: "exact",
                            value: void 0
                        }
                    } : {
                        operator: t,
                        value: e.value
                    }
                },
                date: function(e, t, a) {
                    if ((0, r(400473).tk)(t)) return {
                        operator: t
                    };
                    let o = (0, r(400473).fZ)(e) ? void 0 : e.use_end;
                    if ("date_is_within" === t)
                        if ("date_is_within" !== e.operator) return {
                            operator: t,
                            value: {
                                type: "exact",
                                value: void 0
                            },
                            use_end: o
                        };
                        else return e;
                    if ("date_is_relative_to" === t)
                        if ("date_is_relative_to" !== e.operator) return {
                            operator: t,
                            value: {
                                type: "relative",
                                value: "surrounding",
                                unit: "week"
                            },
                            use_end: o
                        };
                        else return e;
                    if ((0, r(400473).Cw)(e))
                        if ("combinator" === a) return {
                            operator: t,
                            value: {
                                type: "relative",
                                value: "today"
                            },
                            use_end: o
                        };
                        else return {
                            operator: t,
                            value: {
                                type: "exact",
                                value: void 0
                            },
                            use_end: o
                        };
                    return (0, r(400473).fZ)(e) ? {
                        operator: t,
                        value: {
                            type: "exact",
                            value: void 0
                        }
                    } : {
                        operator: t,
                        value: e.value,
                        use_end: o
                    }
                },
                file: function(e, t) {
                    return {
                        operator: t
                    }
                },
                location: function(e, t) {
                    return {
                        operator: t,
                        value: e.value
                    }
                },
                verification: function(e, t) {
                    return {
                        operator: t,
                        value: e.value
                    }
                },
                place: function(e, t) {
                    return {
                        operator: t
                    }
                }
            };

            function Y({
                filterValueType: e,
                filter: t,
                operator: r,
                context: a
            }) {
                return (0, C[e])(t, r, a)
            }
            let S = (0, r(109939).YK)({
                    and: {
                        defaultMessage: "And",
                        id: "database.filterOperators.and"
                    },
                    or: {
                        defaultMessage: "Or",
                        id: "database.filterOperators.or"
                    }
                }),
                R = (0, r(109939).YK)({
                    and: {
                        defaultMessage: "All filters must match",
                        id: "database.filterOperators.andCaption"
                    },
                    or: {
                        defaultMessage: "At least one filter must match",
                        id: "database.filterOperators.orCaption"
                    }
                });

            function K(e, t) {
                return "and" === e ? t.formatMessage(S.and) : t.formatMessage(S.or)
            }

            function V(e, t) {
                return "and" === e ? t.formatMessage(R.and) : t.formatMessage(R.or)
            }
            let j = (0, r(109939).YK)({
                any: {
                    defaultMessage: "Any",
                    id: "database.filterOperators.any"
                },
                every: {
                    defaultMessage: "Every",
                    id: "database.filterOperators.every"
                },
                none: {
                    defaultMessage: "None",
                    id: "database.filterOperators.none"
                }
            });

            function q(e, t) {
                return "any" === e ? t.formatMessage(j.any) : "every" === e ? t.formatMessage(j.every) : t.formatMessage(j.none)
            }
            let P = (0, r(109939).YK)({
                number: {
                    id: "collectionFilterMenuFilter.filterOperators.number.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                text: {
                    id: "collectionFilterMenuFilter.filterOperators.text.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                checkbox: {
                    id: "collectionFilterMenuFilter.filterOperators.checkbox.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                select: {
                    id: "collectionFilterMenuFilter.filterOperators.select.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                multi_select: {
                    id: "collectionFilterMenuFilter.filterOperators.multi_select.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                status: {
                    id: "collectionFilterMenuFilter.filterOperators.status.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                relation: {
                    id: "collectionFilterMenuFilter.filterOperators.relation.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                location: {
                    id: "collectionFilterMenuFilter.filterOperators.location.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                person: {
                    id: "collectionFilterMenuFilter.filterOperators.person.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                date: {
                    id: "collectionFilterMenuFilter.filterOperators.date.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                file: {
                    id: "collectionFilterMenuFilter.filterOperators.file.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                verification: {
                    id: "collectionFilterMenuFilter.filterOperators.verification.order",
                    defaultMessage: "{operator}{operatorValue}"
                },
                place: {
                    id: "collectionFilterMenuFilter.filterOperators.place.order",
                    defaultMessage: "{operator}{operatorValue}"
                }
            })
        },
        348582: (e, t, r) => {
            r.d(t, {
                Y: () => a
            });

            function a(e, t, o = r(943003).vz) {
                let i = r(25825).C6.notionDateToLuxon(e, {
                    locale: t.locale
                });
                return (0, r(850640).vP)(i, o)
            }
        },
        695760: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var a = r(296540),
                o = r(474848);
            let i = (0, r(109939).YK)({
                    invalidDateError: {
                        id: "dateInputError.invalidDateError.tooltip",
                        defaultMessage: "Invalid date"
                    },
                    invalidDateRangeError: {
                        id: "dateInputError.invalidDateRangeError.tooltip",
                        defaultMessage: "Invalid range"
                    },
                    notSupportedDateRangeError: {
                        id: "dateInputError.notSupportedDateRangeError.tooltip",
                        defaultMessage: "The date is not supported"
                    }
                }),
                l = function(e) {
                    let t = (0, r(109939).tz)(),
                        i = (0, r(682985).uB)(void 0, r(257193).A),
                        {
                            value: l
                        } = e;
                    (0, a.useEffect)(() => {
                        i.reset()
                    }, [l, i]);
                    let n = (0, a.useCallback)(() => (0, o.jsx)(v, {
                            dateInputMenuItemProps: e,
                            store: i
                        }), [e, i]),
                        s = (0, r(682985).K8)(() => p(t, i), [t, i]);
                    return s ? (0, o.jsx)(r(51831).m, {
                        content: () => s,
                        forceVisibleState: !0,
                        placement: "left",
                        originGap: -8,
                        children: n
                    }) : (0, o.jsx)(v, {
                        dateInputMenuItemProps: e,
                        store: i
                    })
                };

            function n(e, t) {
                return r(986939).A.isMobile ? "YYYY-MM-DD" : t ? ? r(943003).vz
            }

            function s(e, t) {
                return !!r(986939).A.isMobile || !t
            }

            function u() {
                return {
                    inputDefault: {
                        background: r(632079).Tj.background.secondaryTranslucent,
                        boxShadow: `${r(632079).Tj.border.primaryTranslucent} 0 0 0 1px`
                    },
                    inputFocused: {
                        background: r(632079).Tj.background.secondaryTranslucent,
                        boxShadow: r(632079).Tj.inputBlueFocusRing
                    },
                    inputError: {
                        background: r(632079).Tj.background.secondaryTranslucent,
                        boxShadow: r(632079).Tj.inputRedFocusRing
                    },
                    placeholder: {
                        color: r(632079).Tj.text.tertiary
                    }
                }
            }

            function d(e, t) {
                return {
                    menuItem: {
                        marginBottom: +!!r(986939).A.isMobile
                    },
                    inputWrapper: {
                        borderRadius: 6,
                        height: 28,
                        position: "relative"
                    },
                    inputEditRegion: {
                        width: s(e, t) ? "calc(100% - 14px)" : "87%"
                    },
                    inputEditRegionMobile: {
                        padding: "2px 6px",
                        position: "relative"
                    },
                    placeholder: {
                        position: "absolute",
                        insetInlineStart: e.device.isIpad ? 26 : 12,
                        top: e.device.isIpad ? void 0 : "50%",
                        transform: "translateY(-50%)"
                    }
                }
            }

            function c({
                inputType: e,
                placeholder: t,
                value: a,
                hideClearButton: i
            }) {
                let l = d((0, r(533992).v3)(), i),
                    n = u();
                return "date" !== e || a ? null : (0, o.jsx)("div", {
                    style: { ...l.placeholder,
                        ...n.placeholder
                    },
                    children: t
                })
            }

            function p(e, t) {
                if (t.state.error) switch (t.state.error) {
                    case r(257193).$.INVALID_DATE:
                        return e.formatMessage(i.invalidDateError);
                    case r(257193).$.INVALID_RANGE:
                        return e.formatMessage(i.invalidDateRangeError);
                    case r(257193).$.NOT_SUPPORTED:
                        return e.formatMessage(i.notSupportedDateRangeError);
                    default:
                        (0, r(722371).HB)(t.state.error)
                }
            }

            function f(e, t, a, o, i) {
                let l = function(e, t, a, o) {
                    if (!a.state.edited) return;
                    if (!a.state.temporary) return {
                        value: void 0
                    };
                    let i = (0, r(629518).yc)(a.state.temporary, r(986939).A.isMobile ? r(25825).tr : n(e, o), t);
                    return i ? {
                        value: {
                            type: "date",
                            start_date: i
                        }
                    } : {
                        error: r(257193).$.INVALID_DATE
                    }
                }(e, t, a, i);
                if (l) return o ? o(l) : l
            }

            function _(e, t, r, a, o, i, l, n) {
                let s = f(e, r, a, i, l);
                s ? (t(s), s.error ? a.setState({ ...a.state,
                    edited: !1,
                    error: s.error
                }) : a.reset()) : a.setState({ ...a.state,
                    edited: !1
                }), n && o && o(n)
            }

            function v({
                dateInputMenuItemProps: e,
                store: t
            }) {
                let {
                    store: i,
                    hideClearButton: l,
                    focused: M,
                    value: g,
                    ...m
                } = e, {
                    onBlur: y,
                    onClearButtonClick: h,
                    onFocus: F,
                    onSubmit: b,
                    onUpdate: x,
                    placeholder: H,
                    validate: D,
                    desktopDateFormat: k,
                    inputStyle: I,
                    inputOuterStyle: w,
                    style: A,
                    disabled: E
                } = e, T = (0, r(109939).tz)(), O = (0, r(533992).v3)(), N = (0, a.useCallback)(e => _(O, x, T, t, y, D, k), [O, x, T, t, y, D, k]), C = (0, a.useCallback)(e => {
                    let r;
                    (r = f(O, T, t, D, k)) && (x(r), r.error ? t.setState({ ...t.state,
                        edited: !1,
                        error: r.error
                    }) : t.reset()), b && b(e, r)
                }, [O, x, T, t, b, D, k]), Y = (0, a.useCallback)(e => (function(e, t, r, a, o, i, l, n) {
                    let {
                        device: s
                    } = t;
                    o.setState({ ...o.state,
                        edited: !0,
                        temporary: e.target.value || ""
                    }), s.isAndroid && _(t, r, a, o, i, l, n)
                })(e, O, x, T, t, y, D, k), [O, x, T, t, y, D, k]), S = (0, a.useCallback)(() => {
                    let e;
                    return t.setState({ ...t.state,
                        edited: !0,
                        temporary: "",
                        error: void 0
                    }), void((e = f(O, T, t, D, k)) && x(e), t.setState({ ...t.state,
                        edited: !1
                    }), h && h())
                }, [O, h, x, T, t, D, k]), R = (0, a.useCallback)(e => {
                    t.setState({ ...t.state,
                        edited: !1
                    }), F && F(e)
                }, [F, t]), K = r(986939).A.isMobile && (null == g ? void 0 : g.type) !== "relative" ? "date" : "text", V = "date" === K ? "transparent" : "default", j = r(986939).A.isMobile ? void 0 : M, q = (0, r(682985).K8)(() => (function(e, t, a, o, i) {
                    if (t && "relative" === t.type) return (0, r(323700).RR)(t);
                    let l = t && "date" !== t.type ? r(25825).fN(t) : t;
                    return r(986939).A.isMobile ? l ? (0, r(348582).Y)(l, a, n(e, i)) : "" : o.state.temporary || o.state.edited ? o.state.temporary : l ? (0, r(348582).Y)(l, a, n(e, i)) : ""
                })(O, g, T, t, k), [O, g, T, t, k]), P = (0, r(682985).K8)(() => {
                    let e;
                    return {
                        style: { ...(e = d(O, l)).menuItem,
                            ...A,
                            marginInlineEnd: 0
                        },
                        inputOuterStyle: { ... function(e, t, r, a) {
                                let o = u(),
                                    i = p(r, a);
                                if (!e) return i ? o.inputError : t ? o.inputFocused : o.inputDefault
                            }(E, M, T, t),
                            ...e.inputWrapper,
                            ...w
                        },
                        inputStyle: { ...e.inputEditRegion,
                            ...r(986939).A.isMobile && e.inputEditRegionMobile,
                            ...I
                        }
                    }
                }, [O, I, w, A, E, M, T, t, l]);
                return (0, o.jsx)(r(310324).Ay, { ...m,
                    type: K,
                    format: V,
                    left: r(986939).A.isMobile && (0, o.jsx)(c, {
                        placeholder: H,
                        value: g,
                        hideClearButton: l,
                        inputType: K
                    }),
                    showClearButton: s(O, l),
                    focus: j,
                    onFocus: R,
                    onClearButtonClick: S,
                    onChange: Y,
                    onSubmit: C,
                    onBlur: N,
                    value: q,
                    disableInput: (null == g ? void 0 : g.type) === "relative",
                    ...P
                })
            }
        }
    }
]);