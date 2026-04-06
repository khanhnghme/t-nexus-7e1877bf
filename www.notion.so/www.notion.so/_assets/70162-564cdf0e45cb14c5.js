"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [23644, 48486, 70162, 76298], {
        2816: (e, t, r) => {
            r.d(t, {
                W: () => l,
                t: () => i
            });
            var n = r(296540),
                o = r(474848);

            function i(e) {
                let {
                    value: t,
                    onChange: i,
                    wrapStyle: l,
                    onBlur: a,
                    ...u
                } = e, [s, d] = (0, n.useState)(!1), p = (0, r(533992).v3)(), c = (0, r(463846).A)(!0), y = (0, n.useCallback)(() => {
                    d(!1), null == a || a()
                }, [a]), f = (0, n.useCallback)(e => i(e.currentTarget.value), [i]), m = (0, n.useCallback)(() => {
                    "empty" !== r(358377).default.state.mode && (0, r(471e3).I)({
                        environment: p
                    }), d(!0)
                }, [p]);
                return (0, o.jsx)(r(519451).A, {
                    debugName: "AutomationPlainTextInput",
                    capture: s,
                    children: (0, o.jsx)("div", { ...c,
                        style: l,
                        children: (0, o.jsx)(r(36481).p, { ...u,
                            onBlur: y,
                            onChange: f,
                            onFocus: m,
                            value: t
                        })
                    })
                })
            }

            function l(e) {
                let {
                    onChange: t,
                    store: l,
                    ...a
                } = e, {
                    maybePersistedTransactionActions: u
                } = (0, r(305042).b)(), s = (0, r(682985).K8)(() => l.getValue() ? ? "", [l]), d = (0, n.useCallback)(e => {
                    u.createAndCommit({
                        userAction: "AutomationPlainTextInput.setValue",
                        perform: t => {
                            (0, r(368198).K)({
                                store: l,
                                transaction: t,
                                value: e
                            })
                        }
                    }), null == t || t(e)
                }, [u, t, l]);
                return (0, o.jsx)(i, {
                    value: s,
                    onChange: d,
                    ...a
                })
            }
        },
        34824: (e, t, r) => {
            r.d(t, {
                G: () => u,
                e: () => l
            });
            var n, o = r(296540),
                i = r(474848);
            let l = ((n = {})[n.Name = 0] = "Name", n),
                a = {
                    propertyIcon: {
                        fill: r(632079).Tj.icon.primary,
                        marginInlineStart: 6,
                        marginInlineEnd: 2
                    }
                },
                u = o.forwardRef(function(e, t) {
                    let {
                        propertySchema: n,
                        format: o
                    } = e, {
                        name: u,
                        type: s,
                        icon: d
                    } = n, p = (0, r(960253).e)(), c = o === l.Name ? u : r(799514).dC[s];
                    return (0, i.jsx)(r(95582).A, {
                        title: c,
                        icon: (0, i.jsx)(r(221535).zB, {
                            icon: d,
                            type: s,
                            size: r(986939).A.isMobile ? 18 : 16,
                            theme: r(632079).Tj,
                            themeMode: p,
                            style: a.propertyIcon
                        }),
                        ...e
                    })
                })
        },
        245102: (e, t, r) => {
            r.r(t), r.d(t, {
                arrowLineDownIcon: () => o,
                iconDefinition: () => n
            }), r(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.52 2.39 12.95 15.21",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M10 2.4c.345 0 .625.28.625.625v9.966l3.333-3.333a.625.625 0 1 1 .884.884l-4.4 4.4a.625.625 0 0 1-.884 0l-4.4-4.4a.625.625 0 0 1 .884-.884l3.333 3.333V3.025c0-.345.28-.625.625-.625M4.15 16.35a.625.625 0 1 0 0 1.25h11.7a.625.625 0 0 0 0-1.25z"
                    })
                },
                o = (0, r(104509).wt)("arrowLineDown", n, "default")
        },
        428602: (e, t, r) => {
            r.d(t, {
                Y: () => i
            }), r(296540);
            var n = r(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.053 6.407a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.893 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286M5.159 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M7.053 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M8.947 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M10.84 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286m-5.681 1.894a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286"
                        }), (0, n.jsx)("path", {
                            d: "M4.25 2.375c-1.036 0-1.875.84-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h7.5c1.036 0 1.875-.84 1.875-1.875v-7.5c0-1.036-.84-1.875-1.875-1.875zm-.625 9.375V5.632h8.75v6.118c0 .345-.28.625-.625.625h-7.5a.625.625 0 0 1-.625-.625"
                        })]
                    })
                },
                i = (0, r(104509).wt)("viewCalendarSmall", o, "small")
        },
        432705: (e, t, r) => {
            function n(e) {
                return "event" === e || "recurrence" === e
            }

            function o(e) {
                let t = e.getTrigger();
                return (0, r(722371).O9)(t) && n(t.type)
            }

            function i(e) {
                return "event" === e ? "event" : "recurrence" === e ? "recurrence" : void(0, r(722371).HB)(e)
            }
            r.d(t, {
                $X: () => o,
                H8: () => i,
                x2: () => n
            })
        },
        489561: (e, t, r) => {
            r.d(t, {
                CA: () => l
            }), r(16280), r(898992), r(354520), r(581454);
            let n = Symbol("JSON Schema"),
                o = Symbol("JSON Schema Components"),
                i = Symbol("No JSON Schema"),
                l = (0, r(722371).MU)((0, r(722371).WP)({
                    isNull: () => ({
                        type: "null",
                        [o]: {}
                    }),
                    boolean: () => ({
                        type: "boolean",
                        [o]: {}
                    }),
                    number: () => ({
                        type: "number",
                        [o]: {}
                    }),
                    integer: () => ({
                        type: "integer",
                        [o]: {}
                    }),
                    string: () => ({
                        type: "string",
                        [o]: {}
                    }),
                    matchesRegExp: e => ({
                        type: "string",
                        pattern: e.source,
                        [o]: {}
                    }),
                    dateString: () => ({
                        type: "string",
                        format: "date",
                        [o]: {}
                    }),
                    dateTimeString: () => ({
                        type: "string",
                        format: "date-time",
                        [o]: {}
                    }),
                    literal: e => {
                        let t = {
                            const: e,
                            [o]: {}
                        };
                        return "boolean" == typeof e ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof e ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    literals: (...e) => {
                        let t = {
                                enum: e,
                                [o]: {}
                            },
                            r = e[0];
                        return "boolean" == typeof r ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof r ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    uuid: () => ({
                        type: "string",
                        format: "uuid",
                        [o]: {}
                    }),
                    binary: () => ({
                        type: "string",
                        format: "binary",
                        [o]: {}
                    }),
                    uuidWithoutDashes: () => ({
                        type: "string",
                        format: "uuid",
                        [o]: {}
                    }),
                    array: e => ({
                        type: "array",
                        items: e[n],
                        [o]: e[n][o]
                    }),
                    tuple: e => ({
                        type: "tuple",
                        items: !1,
                        prefixItems: e.map(e => e[n]).filter(e => e !== i),
                        [o]: Object.assign({}, ...e.map(e => e[n][o]))
                    }),
                    record: (e, t) => ({
                        type: "object",
                        additionalProperties: t[n],
                        [o]: t[n][o]
                    }),
                    object: ({
                        required: e,
                        optional: t,
                        exact: l
                    }) => ({
                        type: "object",
                        properties: (0, r(722371).MU)(Object.entries({ ...e,
                            ...t
                        }).filter(([e, t]) => t[n] !== i).map(([e, t]) => [e, t[n]])),
                        ...l && {
                            additionalProperties: !1
                        },
                        ...Object.keys(e).length > 0 && {
                            required: Object.keys(e)
                        },
                        [o]: Object.assign({}, ...Object.values({ ...e,
                            ...t
                        }).map(e => e[n][o]))
                    }),
                    union: e => {
                        let t = (0, r(381453).hS)(e.map(e => e[n]).filter(e => e !== i), e => JSON.stringify(e)),
                            l = (0, r(381453).hS)(e.map(e => e[n][o]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [o]: Object.assign({}, ...l)
                        } : {
                            anyOf: t,
                            [o]: Object.assign({}, ...l)
                        }
                    },
                    intersection: e => {
                        let t = (0, r(381453).hS)(e.map(e => e[n]).filter(e => e !== i), e => JSON.stringify(e)),
                            l = (0, r(381453).hS)(e.map(e => e[n][o]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [o]: Object.assign({}, ...l)
                        } : {
                            allOf: t,
                            [o]: Object.assign({}, ...l)
                        }
                    },
                    gte: (e, t) => {
                        let r = e[n];
                        return r !== i ? { ...r,
                            minimum: t
                        } : r
                    },
                    gt: (e, t) => {
                        let r = e[n];
                        return r !== i ? { ...r,
                            exclusiveMinimum: t
                        } : r
                    },
                    lte: (e, t) => {
                        let r = e[n];
                        return r !== i ? { ...r,
                            maximum: t
                        } : r
                    },
                    lt: (e, t) => {
                        let r = e[n];
                        return r !== i ? { ...r,
                            exclusiveMaximum: t
                        } : r
                    },
                    maxLength: (e, t) => {
                        let r = e[n];
                        if (r === i) return r;
                        if ("type" in r) {
                            if ("string" === r.type) return { ...r,
                                maxLength: t
                            };
                            else if ("array" === r.type) return { ...r,
                                maxItems: t
                            }
                        }
                        throw Error("Unknown type for max length.")
                    },
                    minLength: (e, t) => {
                        let r = e[n];
                        if (r === i) return r;
                        if ("type" in r) {
                            if ("string" === r.type) return { ...r,
                                minLength: t
                            };
                            else if ("array" === r.type) return { ...r,
                                minItems: t
                            }
                        }
                        throw Error("Unknown type for min length.")
                    },
                    nonEmpty: e => {
                        let t = e[n];
                        if (t === i) return t;
                        if ("type" in t) {
                            if ("string" === t.type) return { ...t,
                                minLength: 1
                            };
                            else if ("object" === t.type) return { ...t,
                                minProperties: 1
                            };
                            else if ("array" === t.type) return { ...t,
                                minItems: 1
                            }
                        }
                        throw Error("Unknown non-emptyable type.")
                    },
                    nullable: e => {
                        let t = e[n];
                        if (t === i) return t;
                        if ("const" in t) return { ...t,
                            const: void 0,
                            enum: [t.const, null]
                        };
                        if ("type" in t)
                            if (Array.isArray(t.type))
                                if ("null" === t.type[1]) return t;
                                else(0, r(722371).HB)(t.type[1]);
                        else {
                            if ("string" === t.type || "object" === t.type || "array" === t.type || "tuple" === t.type || "boolean" === t.type || "integer" === t.type || "number" === t.type) return { ...t,
                                type: [t.type, "null"]
                            };
                            if ("null" === t.type) return t;
                            (0, r(722371).HB)(t.type)
                        } else if ("enum" in t) {
                            let e = t.enum;
                            return { ...t,
                                enum: Array.isArray(e) ? [...e, null] : [null]
                            }
                        } else {
                            var l;
                            if ("anyOf" in t) return { ...t,
                                anyOf: [...t.anyOf, {
                                    type: "null",
                                    [o]: {}
                                }]
                            };
                            if ("oneOf" in t) return { ...t,
                                oneOf: [...t.oneOf, {
                                    type: "null",
                                    [o]: {}
                                }]
                            };
                            if ("allOf" in t) return { ...t,
                                oneOf: [{
                                    allOf: t.allOf,
                                    [o]: {}
                                }, {
                                    type: "null",
                                    [o]: {}
                                }]
                            };
                            if ("$ref" in t) return {
                                anyOf: [t, {
                                    type: "null",
                                    [o]: {}
                                }],
                                [o]: t[o]
                            };
                            if (l = t, (0, r(722371).Gv)(l) && 0 === Object.keys(l).length) return t;
                            (0, r(722371).HB)(t)
                        }
                    }
                }).map(([e, t]) => [e, (...i) => 1 === i.length && (0, r(722371).Gv)(i[0]) && ("id" in i[0] || "title" in i[0] || "description" in i[0] || "examples" in i[0]) ? (...l) => {
                    let {
                        description: a,
                        examples: u,
                        id: s,
                        title: d
                    } = i[0], p = { ...d && {
                            title: d
                        },
                        description: a,
                        ...u && {
                            examples: u
                        },
                        ...t(...l)
                    };
                    return s && (p = {
                        $ref: `#/components/schemas/${s}`,
                        [o]: { ...p[o],
                            [s]: p
                        }
                    }), {
                        [n]: p,
                        ...r(969475)[e](...l)
                    }
                } : {
                    [n]: t(...i),
                    ...r(969475)[e](...i),
                    describe: t => l[e]({
                        description: t
                    })(...i)
                }]));
            Symbol("Exact empty object ({})"), l.object({
                id: "emptyObject"
            })({
                required: {},
                optional: {},
                exact: !0
            })
        },
        529983: (e, t, r) => {
            r.d(t, {
                A: () => a
            }), r(898992), r(672577), r(581454);
            var n = r(296540),
                o = r(474848);
            let i = {
                    fullWidthButton: {
                        backgroundColor: r(632079).Tj.background.secondary,
                        border: `1px solid ${r(632079).Tj.gray.border.secondaryTranslucent}`,
                        alignItems: "center",
                        color: r(632079).Tj.text.primary,
                        fontWeight: r(699422).Wy.regular
                    },
                    popupWrapper: {
                        margin: "12px 16px"
                    },
                    heading: {
                        fontSize: r(418676).Kw,
                        fontWeight: r(699422).Wy.medium,
                        color: r(632079).Tj.text.secondary,
                        marginBottom: 12
                    },
                    style0: {
                        width: "100%",
                        justifyContent: "space-between"
                    },
                    style1: {
                        width: "100%",
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                },
                l = {
                    fullWidthButtonHover: {
                        backgroundColor: (0, r(133251)._S)({
                            color: r(632079).Tj.background.secondary
                        }).hovered
                    }
                },
                a = function({
                    icon: e,
                    iconStyle: t,
                    title: a,
                    selectedKey: u,
                    onChange: s,
                    onClick: d,
                    popupStyle: p,
                    menuItemOptionsStyle: c,
                    menuStyle: y,
                    disabled: f,
                    collectionContextStore: m,
                    openButtonPopup: h,
                    hideCheck: g,
                    children: b,
                    disableParentClose: v,
                    inputPlaceholder: _,
                    renderSelectedKey: x,
                    variant: S,
                    ...I
                }) {
                    let w = "options" in I ? I.options : r(381453).Bq(I.sections),
                        k = w.find(e => r(381453).n4(e.key, u)),
                        C = (0, r(682985).uB)(void 0, r(510969).A),
                        j = (0, r(682985).O$)(C).open;
                    (0, n.useEffect)(() => {
                        m && h && (C.setState({ ...C.state,
                            open: h
                        }), m.settingsStore.setState({ ...m.settingsStore.state,
                            openButtonPopup: void 0
                        })), k || r(773352).log({
                            level: "error",
                            from: "CollectionSettingsPickListMenuItem",
                            type: "InvalidSelectedItem",
                            error: (0, r(416607).convertErrorToLog)("Selected key is invalid.")
                        })
                    });
                    let M = (0, o.jsx)(r(656252).A, {
                        popupType: r(986939).A.isMobile ? r(182718).nl.BottomSheet : r(182718).nl.Popup,
                        alignmentToOrigin: "end",
                        placementToOrigin: "bottom",
                        style: p,
                        originGap: 0,
                        buttonPopupStore: C,
                        disabled: f,
                        onClick: d,
                        content: e => {
                            let t;
                            t = r(986939).A.isMobile ? {
                                menuType: r(649476).gu.ActionSheet
                            } : {
                                menuType: r(649476).gu.Popup,
                                width: 250,
                                ...y
                            };
                            let n = (t, n) => t.hideOption ? null : "input" === t.type ? {
                                    key: n,
                                    render: n => (0, o.jsx)(r(310324).Ay, { ...n,
                                        style: i.style1,
                                        value: t.inputValue ? ? "",
                                        onChange: e => {
                                            var r;
                                            null == (r = t.onChange) || r.call(t, e.target.value)
                                        },
                                        onSubmit: r => {
                                            var n;
                                            null == (n = t.onSubmit) || n.call(t, t.key, e, t.inputValue), e.close()
                                        },
                                        placeholder: _,
                                        isChecked: !g && r(381453).n4(t.key, u)
                                    }),
                                    action: () => {}
                                } : {
                                    key: n,
                                    render: e => (0, o.jsx)(r(95582).A, { ...e,
                                        disabled: !1,
                                        title: t.title,
                                        icon: t.icon,
                                        caption: t.caption,
                                        captionStyle: t.captionStyle,
                                        inline: t.captionInline,
                                        spacerStyle: t.inlineSpacerStyle,
                                        body: t.body,
                                        style: c,
                                        isChecked: !g && r(381453).n4(t.key, u)
                                    }),
                                    action: () => {
                                        s(t.key, e), v || e.close()
                                    }
                                },
                                l = "sections" in I ? I.sections.map((e, t) => ({
                                    key: t,
                                    render: e => (0, o.jsx)(r(844565).A, {
                                        enableActionSheetTitle: !0,
                                        topBorder: t > 0,
                                        ...e
                                    }),
                                    items: r(381453).oE(e.map(n))
                                })) : [{
                                    key: 0,
                                    render: e => (0, o.jsx)(r(844565).A, {
                                        enableActionSheetTitle: !0,
                                        ...e
                                    }),
                                    items: r(381453).oE(w.map(n))
                                }];
                            return (0, o.jsxs)(r(747369).A, { ...t,
                                children: [(0, o.jsx)(r(558045).A, {
                                    type: r(558045).O.Vertical,
                                    sections: l,
                                    initialFocus: 0,
                                    resetFocusOnMouseOut: !0
                                }), b || null]
                            })
                        },
                        children: n => {
                            let s = function(e) {
                                let {
                                    renderSelectedKey: t,
                                    selectedKey: r,
                                    selectedOption: n
                                } = e;
                                return t ? t(r) : (null == n ? void 0 : n.type) === "input" ? n.inputValue : (null == n ? void 0 : n.type) === "button" ? n.title : void 0
                            }({
                                renderSelectedKey: x,
                                selectedKey: u,
                                selectedOption: k
                            });
                            return "fullWidth" === S ? (0, o.jsx)(r(95582).A, {
                                icon: null == e ? void 0 : e({}),
                                focused: !1,
                                disabled: f,
                                title: s,
                                buttonStyle: { ...i.style0,
                                    ...i.fullWidthButton
                                },
                                hoveredStyle: l.fullWidthButtonHover,
                                right: f ? void 0 : (0, o.jsx)(r(16275).I, {
                                    icon: r(595453).arrowChevronSingleDownSmallIcon,
                                    size: "sm",
                                    colorVariant: "tertiary"
                                }),
                                ...(0, r(63390).A)(n, I)
                            }) : (0, o.jsx)(r(209572).A, {
                                title: a,
                                showChevron: !0,
                                right: s,
                                rotateChevron: j,
                                disabled: f,
                                icon: e,
                                iconStyle: t,
                                ...(0, r(63390).A)(n, I)
                            })
                        }
                    });
                    return "fullWidth" === S ? (0, o.jsxs)("div", {
                        style: i.popupWrapper,
                        children: [(0, o.jsx)("div", {
                            style: i.heading,
                            children: a
                        }), M]
                    }) : M
                }
        },
        540358: (e, t, r) => {
            r.d(t, {
                A: () => o
            }), r(296540);
            var n = r(474848);

            function o(e) {
                let {
                    style: t
                } = e, o = (0, r(960253).I)(() => ({
                    badge: {
                        letterSpacing: 0,
                        whiteSpace: "nowrap",
                        width: "fit-content",
                        ...t
                    }
                }), [t]);
                return (0, n.jsx)(r(746434).E, {
                    color: "blue",
                    style: o.badge,
                    content: (0, n.jsx)(r(109939).sA, {
                        id: "newBadgeComponent.label",
                        defaultMessage: "New"
                    })
                })
            }
        },
        559096: (e, t, r) => {
            r.r(t), r.d(t, {
                loadLocalSubtree: () => a
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(803949), r(581454);
            var n = () => r(986939),
                o = () => r(430733),
                i = () => r(832375),
                l = () => r(247438);

            function a(e) {
                let {
                    environment: t,
                    blockId: a,
                    inMemoryRecordCache: u,
                    options: s
                } = e, d = t.currentUser.id, p = r(412951).RecordMap.create(), c = new Set, y = [{
                    pointer: {
                        table: i().evP,
                        id: a
                    },
                    parentId: "doesn't matter"
                }];
                for (; y.length > 0;) {
                    let e = y.shift();
                    if (!e || c.has(e.pointer.id)) continue;
                    let t = a === e.pointer.id,
                        f = function(e) {
                            let t, {
                                pointer: a,
                                recordMap: u,
                                inMemoryRecordCache: s,
                                currentUserId: d,
                                cursors: p,
                                cursor: c,
                                options: y,
                                isRootRequest: f
                            } = e;
                            return (0, r(496282).Yt)(a, i().evP) ? t = function(e) {
                                var t, a, u, s, d, p, c, y;
                                let {
                                    pointer: f,
                                    recordMap: m,
                                    inMemoryRecordCache: h,
                                    currentUserId: g,
                                    cursors: b,
                                    cursor: v,
                                    options: _,
                                    isRootRequest: x
                                } = e, S = h.getRecord({
                                    pointer: f,
                                    userId: g
                                }), I = null == S ? void 0 : S.value;
                                if (!I) return _.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: f
                                } : void 0;
                                let w = _.excludeCrdtData ? r(877308).ir(I) : I;
                                if (_.includeLegacyTransclusionBlockValues) {
                                    if (!x && w.parent_id !== v.parentId && !v.isBlockContentChild) return
                                } else if (!x && w.parent_id !== v.parentId) return;
                                if (w.type === r(955630).xd.externalObjectInstance && !_.allowCopyExternalObjectInstances) return {
                                    type: "error",
                                    reason: "encountered_external_object_instance",
                                    pointer: f
                                };
                                if (m.setValue(f, w), !_.skipNavigableChildren) {
                                    for (let e of r(993189).Bj6.fromBlock(w).getCollectionPointers()) {
                                        let t = h.getRecord({
                                            pointer: e,
                                            userId: g
                                        });
                                        if (t) {
                                            if ((null == (d = t.value) ? void 0 : d.parent_table) !== i().evP || (null == (p = t.value) ? void 0 : p.parent_id) !== w.id) continue
                                        } else {
                                            if (_.requireFullSubtree) return {
                                                type: "error",
                                                reason: "missing_record",
                                                pointer: e
                                            };
                                            continue
                                        }
                                        b.push({
                                            pointer: e,
                                            parentId: w.id
                                        })
                                    }
                                    if (w.view_ids)
                                        for (let e of w.view_ids) b.push({
                                            pointer: {
                                                table: i().Gy1,
                                                id: e,
                                                spaceId: w.space_id
                                            },
                                            parentId: w.id
                                        })
                                }
                                if (!_.skipBlockContent && (!_.skipTransclusionContainerChildren || "transclusion_container" !== w.type) && (!_.skipNavigableChildren || !(0, r(955630).$I)(w.type)))
                                    for (let e of r(993189).Bj6.fromBlock(w).getRenderableContentIds()) b.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e
                                        },
                                        parentId: w.id,
                                        isBlockContentChild: !0
                                    });
                                for (let e of r(993189).Bj6.fromBlock(w).getNonContentChildren()) b.push({
                                    pointer: {
                                        table: i().evP,
                                        id: e
                                    },
                                    parentId: w.id,
                                    isBlockContentChild: !0
                                });
                                if (w.type === r(955630).xd.externalObjectInstance)
                                    for (let e of (null == (c = w.format) ? void 0 : c.related_external_object_uris_to_instance_ids) && Object.values(null == (y = w.format) ? void 0 : y.related_external_object_uris_to_instance_ids) || []) b.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    });
                                if (!_.skipNavigableChildren && w.properties)
                                    for (let e of Object.values(w.properties).filter(r(722371).O9))
                                        for (let t of e)
                                            for (let e of l().uPN(t)) {
                                                if (l().jIt(e)) {
                                                    let t = l().v55(e);
                                                    b.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: t
                                                        },
                                                        parentId: w.id
                                                    })
                                                }
                                                if (l().sh$(e)) {
                                                    let t = l().cQR(e),
                                                        r = (0, o().lX)({
                                                            url: t,
                                                            baseUrl: n().A.domainBaseUrl,
                                                            publicDomainName: n().A.publicDomainName
                                                        });
                                                    r && b.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: r
                                                        },
                                                        parentId: w.id
                                                    })
                                                }
                                                if (l().N53(e)) {
                                                    let t = l().T$c(e);
                                                    t && b.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: t,
                                                            spaceId: w.space_id
                                                        },
                                                        parentId: w.id
                                                    })
                                                }
                                            }
                                if ("form" === w.type && null != (t = w.format) && t.form_layout_pointer && b.push({
                                        pointer: w.format.form_layout_pointer,
                                        parentId: w.id
                                    }), null != (a = w.format) && a.automation_id && b.push({
                                        pointer: {
                                            table: i().yBS,
                                            id: w.format.automation_id,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    }), null != (u = w.format) && u.workflow_id && b.push({
                                        pointer: {
                                            table: i().C0E,
                                            id: w.format.workflow_id,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    }), w.format && "database_agent_ids" in w.format && Array.isArray(w.format.database_agent_ids))
                                    for (let e of w.format.database_agent_ids) b.push({
                                        pointer: {
                                            table: i().C0E,
                                            id: e,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    });
                                null != (s = w.format) && s.ai_instructions_page_pointer && b.push({
                                    pointer: w.format.ai_instructions_page_pointer,
                                    parentId: w.id
                                })
                            }({
                                pointer: a,
                                recordMap: u,
                                inMemoryRecordCache: s,
                                currentUserId: d,
                                cursors: p,
                                cursor: c,
                                options: y,
                                isRootRequest: f
                            }) : (0, r(496282).Yt)(a, i().VlP) ? t = function(e) {
                                var t, r;
                                let {
                                    pointer: n,
                                    recordMap: o,
                                    inMemoryRecordCache: l,
                                    currentUserId: a,
                                    cursors: u,
                                    cursor: s,
                                    options: d
                                } = e;
                                if (!d.allowCopyCollections) return {
                                    type: "error",
                                    reason: "encountered_collection",
                                    pointer: n
                                };
                                let p = l.getRecord({
                                    pointer: n,
                                    userId: a
                                });
                                if (!(null != p && p.value)) return d.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: n
                                } : void 0;
                                if (p.value.parent_id !== s.parentId) return;
                                let c = p.value;
                                for (let e of (o.setValue(n, c), l.forEachRecord({
                                        userId: a,
                                        fn: ({
                                            model: e
                                        }) => {
                                            e.table === i().evP && e && e.parent_id === n.id && e.alive && u.push({
                                                pointer: e.pointer,
                                                parentId: n.id
                                            })
                                        }
                                    }), (null == (t = c.format) ? void 0 : t.automation_ids) ? ? [])) u.push({
                                    pointer: {
                                        table: i().yBS,
                                        id: e,
                                        spaceId: c.space_id
                                    },
                                    parentId: c.id
                                });
                                c.schema && (Object.values(c.schema).forEach(e => {
                                    e && "button" === e.type && e.automation_id && u.push({
                                        pointer: {
                                            id: e.automation_id,
                                            spaceId: c.space_id,
                                            table: i().yBS
                                        },
                                        parentId: c.id
                                    })
                                }), Object.values(c.schema).forEach(e => {
                                    if (null != e && e.default_workflow_id) {
                                        let t = e.default_workflow_id;
                                        u.push({
                                            pointer: {
                                                table: i().C0E,
                                                id: t,
                                                spaceId: c.space_id
                                            },
                                            parentId: s.parentId
                                        })
                                    }
                                })), null != (r = c.format) && r.layout_pointer && u.push({
                                    pointer: c.format.layout_pointer,
                                    parentId: c.id
                                })
                            }({
                                pointer: a,
                                recordMap: u,
                                inMemoryRecordCache: s,
                                currentUserId: d,
                                cursors: p,
                                cursor: c,
                                options: y
                            }) : (0, r(496282).Yt)(a, i().Gy1) ? t = function(e) {
                                var t, r;
                                let {
                                    pointer: n,
                                    recordMap: o,
                                    inMemoryRecordCache: i,
                                    currentUserId: l,
                                    cursors: a,
                                    cursor: u,
                                    options: s
                                } = e, d = i.getRecord({
                                    pointer: n,
                                    userId: l
                                });
                                if (!(null != d && d.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: n
                                } : void 0;
                                (d.value.parent_id === u.parentId || u.skipParentIdCheck) && ("form_editor" === d.value.type && null != (t = d.value.format) && t.form_block_pointer && a.push({
                                    pointer: d.value.format.form_block_pointer,
                                    parentId: d.value.id
                                }), null != (r = d.value.format) && r.dashboard_layout_pointer && a.push({
                                    pointer: d.value.format.dashboard_layout_pointer,
                                    parentId: d.value.id
                                }), o.setValue(n, d.value))
                            }({
                                pointer: a,
                                recordMap: u,
                                inMemoryRecordCache: s,
                                currentUserId: d,
                                cursors: p,
                                cursor: c,
                                options: y
                            }) : (0, r(496282).Yt)(a, i().yBS) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: r,
                                    inMemoryRecordCache: n,
                                    currentUserId: o,
                                    cursors: l,
                                    cursor: a,
                                    options: u
                                } = e, s = n.getRecord({
                                    pointer: t,
                                    userId: o
                                });
                                if (!(null != s && s.value)) return u.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                if (s.value.parent_id === a.parentId)
                                    for (let e of (r.setValue(t, s.value), s.value.action_ids ? ? [])) l.push({
                                        pointer: {
                                            table: i().SC1,
                                            id: e,
                                            spaceId: s.value.space_id
                                        },
                                        parentId: s.value.id
                                    })
                            }({
                                pointer: a,
                                recordMap: u,
                                inMemoryRecordCache: s,
                                currentUserId: d,
                                cursors: p,
                                cursor: c,
                                options: y
                            }) : (0, r(496282).Yt)(a, i().SC1) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: r,
                                    inMemoryRecordCache: n,
                                    currentUserId: o,
                                    cursors: l,
                                    cursor: a,
                                    options: u
                                } = e, s = n.getRecord({
                                    pointer: t,
                                    userId: o
                                });
                                if (!(null != s && s.value)) return u.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: a.pointer
                                } : void 0;
                                if (s.value.parent_id === a.parentId)
                                    for (let e of (r.setValue(t, s.value), s.value.blocks ? ? [])) l.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e,
                                            spaceId: s.value.space_id
                                        },
                                        parentId: s.value.id
                                    })
                            }({
                                pointer: a,
                                recordMap: u,
                                inMemoryRecordCache: s,
                                currentUserId: d,
                                cursors: p,
                                cursor: c,
                                options: y
                            }) : (0, r(496282).Yt)(a, i().C0E) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: r,
                                    inMemoryRecordCache: n,
                                    currentUserId: o,
                                    cursor: i,
                                    options: l
                                } = e, a = n.getRecord({
                                    pointer: t,
                                    userId: o
                                });
                                if (!(null != a && a.value)) return l.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i.pointer
                                } : void 0;
                                a.value.parent_id === i.parentId && r.setValue(t, a.value)
                            }({
                                pointer: a,
                                recordMap: u,
                                inMemoryRecordCache: s,
                                currentUserId: d,
                                cursor: c,
                                options: y
                            }) : (0, r(496282).Yt)(a, i().zx0) ? t = function(e) {
                                var t;
                                let {
                                    pointer: n,
                                    recordMap: o,
                                    inMemoryRecordCache: l,
                                    currentUserId: a,
                                    cursors: u,
                                    options: s
                                } = e, d = l.getRecord({
                                    pointer: n,
                                    userId: a
                                }), p = null == d ? void 0 : d.value;
                                if (!p) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: n
                                } : void 0;
                                let c = p.parent_id !== e.cursor.parentId ? { ...p,
                                        parent_id: e.cursor.parentId
                                    } : p,
                                    y = ((null == (t = c.modules) || null == (t = t.dashboard_layout_schema) ? void 0 : t.filter(e => "row" === e.type)) ? ? []).map(e => ({ ...e,
                                        modules: e.modules.filter(e => {
                                            var t;
                                            let n = l.getRecord({
                                                pointer: (0, r(17520).Q)({
                                                    collectionViewId: e.collection_view_id,
                                                    spaceId: c.space_id
                                                }),
                                                userId: a
                                            });
                                            return (null == n || null == (t = n.value) ? void 0 : t.type) !== "dashboard"
                                        })
                                    })).filter(e => e.modules.length > 0);
                                for (let e of (c = { ...c,
                                        modules: { ...c.modules,
                                            dashboard_layout_schema: y
                                        }
                                    }, o.setValue(n, c), r(993189).Bj6.fromValue(i().zx0, c).getBlockChildrenPointers())) u.push({
                                    pointer: e,
                                    parentId: n.id
                                });
                                let f = e => {
                                    let t = {
                                        id: e.collection_view_id,
                                        table: i().Gy1,
                                        spaceId: c.space_id
                                    };
                                    return u.push({
                                        pointer: t,
                                        parentId: n.id,
                                        skipParentIdCheck: !0
                                    }), e
                                };
                                (0, r(322268).E)(c.modules, e => {
                                    if ("formQuestion" === e.type) {
                                        let t = {
                                            id: e.formQuestionId,
                                            table: i().lo9,
                                            spaceId: c.space_id
                                        };
                                        u.push({
                                            pointer: t,
                                            parentId: n.id
                                        })
                                    } else if ("view" === e.type) f(e);
                                    else if ("row" === e.type)
                                        for (let t of e.modules) "view" === t.type && f(t)
                                })
                            }({
                                pointer: a,
                                recordMap: u,
                                inMemoryRecordCache: s,
                                currentUserId: d,
                                cursors: p,
                                cursor: c,
                                options: y
                            }) : (0, r(496282).Yt)(a, i().lo9) && (t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: r,
                                    inMemoryRecordCache: n,
                                    currentUserId: o,
                                    options: i
                                } = e, l = n.getRecord({
                                    pointer: t,
                                    userId: o
                                });
                                if (!(null != l && l.value)) return i.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                r.setValue(t, l.value)
                            }({
                                pointer: a,
                                recordMap: u,
                                inMemoryRecordCache: s,
                                currentUserId: d,
                                cursors: p,
                                cursor: c,
                                options: y
                            })), t
                        }({
                            pointer: e.pointer,
                            recordMap: p,
                            inMemoryRecordCache: u,
                            currentUserId: d,
                            cursors: y,
                            cursor: e,
                            options: s,
                            isRootRequest: t
                        });
                    if (f) return f;
                    c.add(e.pointer.id)
                }
                return {
                    type: "success",
                    recordMap: p
                }
            }
        },
        605263: (e, t, r) => {
            r.d(t, {
                K4: () => u,
                To: () => c,
                fi: () => s,
                q8: () => a,
                u: () => l
            }), r(16280), r(18107), r(967357);
            var n = r(296540),
                o = r(474848);
            let i = (0, n.createContext)({
                ancestors: []
            });

            function l(e) {
                let {
                    automationStore: t,
                    children: l,
                    contextType: a,
                    collectionStore: u,
                    collectionSettingsStore: s,
                    collectionViewBlockStore: c,
                    collectionViewStore: y,
                    enableExistenceGuarantees: f
                } = e, m = (0, r(533992).v3)(), h = (0, r(109939).tz)(), {
                    value: g
                } = (0, r(815048).fJ)(r(864850).T.formulas), {
                    value: b
                } = (0, r(815048).fJ)(r(879267).QV.automationTypecheck), v = (0, r(470569).o)(t), _ = (0, r(67499).S)(), x = (0, r(682985).K8)(() => g ? b ? function(e) {
                    let {
                        environment: t,
                        automationStore: n,
                        automationTypecheckModule: o,
                        contextType: i,
                        formulasModule: l,
                        intl: a,
                        subscriptionInfo: u,
                        pageStore: s,
                        enableExistenceGuarantees: c
                    } = e, y = c ? d.get(n) : d.get(n) ? ? p.get(n);
                    if (y) return y;
                    let f = new(r(345426)).ComputedStore(() => {
                        let e = n.getTriggerType(),
                            d = i;
                        return (0, r(722371).O9)(e) && (0, r(432705).x2)(e) && (d = (0, r(432705).H8)(e)), (0, r(100197).Z)({
                            environment: t,
                            automationStore: n,
                            automationTypecheckModule: o,
                            contextType: d,
                            formulasModule: l,
                            intl: a,
                            subscriptionInfo: u,
                            pageStore: s,
                            enableExistenceGuarantees: c
                        })
                    }, {
                        debugName: "automationContextTypecheckResultCachedStore"
                    });
                    return c && d.set(n, f), p.set(n, f), f
                }({
                    automationStore: t,
                    automationTypecheckModule: b,
                    contextType: a,
                    environment: m,
                    formulasModule: g,
                    intl: h,
                    subscriptionInfo: v,
                    pageStore: "button_block" === a ? null == _ ? void 0 : _.pageStore : void 0,
                    enableExistenceGuarantees: f
                }).state : {
                    error: new(r(600005)).N9("Missing automation dependency")
                } : {
                    error: new(r(600005)).N9("Missing formulas dependency")
                }, [m, t, b, a, g, h, v, null == _ ? void 0 : _.pageStore, f]), S = (0, n.useContext)(i), I = (0, n.useMemo)(() => 0 === S.ancestors.length ? [{
                    automationStore: t,
                    contextType: a,
                    typecheckResult: x,
                    collectionStore: u,
                    collectionSettingsStore: s,
                    collectionViewBlockStore: c,
                    collectionViewStore: y
                }] : [...S.ancestors, {
                    automationStore: t,
                    contextType: a,
                    typecheckResult: x,
                    collectionStore: u,
                    collectionSettingsStore: s,
                    collectionViewBlockStore: c,
                    collectionViewStore: y
                }], [S, t, a, x, u, s, c, y]), w = (0, n.useMemo)(() => ({
                    ancestors: I,
                    enableExistenceGuarantees: f
                }), [I, f]);
                return (0, o.jsx)(i.Provider, {
                    value: w,
                    children: l
                })
            }

            function a() {
                let e = (0, n.useContext)(i).ancestors.at(-1);
                if (!e) throw Error("No automation context found!");
                return e
            }

            function u() {
                return (0, n.useContext)(i).ancestors.at(-1)
            }

            function s() {
                return (0, n.useContext)(i).enableExistenceGuarantees
            }
            i.displayName = "AutomationContext", i.Consumer;
            let d = new WeakMap,
                p = new WeakMap;

            function c(e) {
                var t;
                return null == (t = d.get(e)) ? void 0 : t.state
            }
        },
        623644: (e, t, r) => {
            r.d(t, {
                NX: () => o,
                gp: () => l,
                h9: () => i,
                i6: () => u,
                rj: () => a,
                tw: () => n
            }), r(581454);
            let n = ["2021-05-11", "2021-05-13", "2021-08-16", "2022-02-22", "2022-06-28", "2025-09-03", "2026-03-11"],
                o = ["2022-06-28", "2025-09-03", "2026-03-11"],
                i = "2026-03-11",
                l = "2022-06-28",
                a = "2026-03-11";
            r(489561).CA.literals(...n);
            let u = "2025-09-03"
        },
        645153: (e, t, r) => {
            r.d(t, {
                A: () => l
            }), r(898992), r(354520), r(581454), r(737550);
            var n = r.n(r(844751)),
                o = r(296540),
                i = r(474848);
            let l = function({
                selectedProperty: e,
                onAccept: t,
                schema: l,
                onClose: a,
                allowProperty: u,
                isRelationProperty: s
            }) {
                let d, p = (0, r(109939).tz)(),
                    [c, y] = (0, o.useState)(""),
                    f = Object.keys(l),
                    m = f.some(r(235089).u);
                f = r(381453).Ul(f, e => {
                    let t = (0, r(561872)._g)({
                        schema: l,
                        property: e
                    });
                    return t ? t.name : ""
                });
                let h = m ? r(9247).Ho : r(439368).rn;
                if ((f = r(381453).FF(f, h)).unshift(h), u && (f = f.filter(e => {
                        let t = (0, r(561872)._g)({
                            schema: l,
                            property: e
                        });
                        return t && u(t)
                    })), c) {
                    let e = f.map(e => {
                        let t = (0, r(561872)._g)({
                            schema: l,
                            property: e
                        });
                        return t && t.name
                    });
                    e = n().filter(c, e).map(({
                        original: e
                    }) => e), f = f.filter(t => {
                        let n = (0, r(561872)._g)({
                            schema: l,
                            property: t
                        });
                        return n && n.name && e.includes(n.name)
                    })
                }
                let g = c || f.length > r(847754).R8,
                    b = r(381453).oE(f.map(n => {
                        let o = (0, r(561872)._g)({
                            schema: l,
                            property: n
                        });
                        return o ? {
                            key: n,
                            render: t => (0, i.jsx)(r(34824).G, { ...t,
                                propertySchema: o,
                                format: r(34824).e.Name,
                                isChecked: n === e
                            }),
                            action: () => t(n)
                        } : null
                    })),
                    v = [{
                        key: 0,
                        items: b
                    }],
                    _ = g ? (0, i.jsx)(r(844565).A, {
                        isInput: !0,
                        children: (0, i.jsx)(r(310324).Ay, {
                            focus: !r(986939).A.isMobile || void 0,
                            focusAfterAnimation: !0,
                            value: c,
                            onChange: e => y(e.target.value),
                            placeholder: s ? p.formatMessage({
                                defaultMessage: "Search for a relation property…",
                                id: "propertySelectMenu.searchForProperty.relation.placeholder"
                            }) : p.formatMessage({
                                defaultMessage: "Search for a property…",
                                id: "propertySelectMenu.searchForProperty.default.placeholder"
                            })
                        })
                    }) : null;
                return d = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    title: s ? p.formatMessage({
                        defaultMessage: "Relation property",
                        id: "propertySelectMenu.mobileMenu.relationProperty.header"
                    }) : p.formatMessage({
                        defaultMessage: "Property",
                        id: "propertySelectMenu.mobileMenu.property.header"
                    }),
                    right: (0, i.jsx)(r(109939).sA, { ...r(789722).W.cancel
                    }),
                    onClickRight: a,
                    header: _
                } : {
                    menuType: r(649476).gu.Popup,
                    width: 280,
                    maxHeight: 480,
                    header: _
                }, (0, i.jsx)(r(747369).A, { ...d,
                    children: 0 === b.length ? (0, i.jsx)(r(844565).A, {
                        children: (0, i.jsx)(r(498341).u, {
                            title: (0, i.jsx)(r(109939).sA, {
                                defaultMessage: "No results",
                                id: "propertySelectMenu.search.noResults.title"
                            })
                        })
                    }) : (0, i.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        sections: v,
                        onAccept: a,
                        initialFocus: c.length > 0 ? 0 : void 0
                    })
                })
            }
        },
        652134: (e, t, r) => {
            r.r(t), r.d(t, {
                aiFaceSmallIcon: () => i,
                iconDefinition: () => o
            }), r(296540);
            var n = r(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.43 11.63 12.81",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.204 1.93a3.47 3.47 0 0 0-4.097.39.625.625 0 1 0 .834.931 2.22 2.22 0 0 1 3.16.202.625.625 0 0 0 .944-.818 3.5 3.5 0 0 0-.84-.705m6.018.976A3.47 3.47 0 0 0 8.463 4.1l-5.077 8.476a.625.625 0 0 0 .437.938l4.41.715a.625.625 0 0 0 .2-1.234l-3.5-.568 4.602-7.685a2.22 2.22 0 0 1 3.822.02.625.625 0 1 0 1.08-.63 3.46 3.46 0 0 0-1.214-1.226m-7.83 2.105a1.094 1.094 0 1 0-.35 2.159 1.094 1.094 0 0 0 .35-2.159"
                        }), (0, n.jsx)("path", {
                            d: "M10.762 5.881a1.093 1.093 0 1 0-.35 2.159 1.093 1.093 0 0 0 .35-2.159"
                        })]
                    })
                },
                i = (0, r(104509).wt)("aiFaceSmall", o, "small")
        },
        682006: (e, t, r) => {
            r.d(t, {
                a: () => o
            }), r(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.37 1.37 13.25 13.25",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3.25 1.375c-1.036 0-1.875.84-1.875 1.875v6c0 1.036.84 1.875 1.875 1.875h1.625v1.625c0 1.036.84 1.875 1.875 1.875h6c1.036 0 1.875-.84 1.875-1.875v-6c0-1.036-.84-1.875-1.875-1.875h-1.625V3.25c0-1.036-.84-1.875-1.875-1.875zM2.625 3.25c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v1.625H6.75c-1.036 0-1.875.84-1.875 1.875v3.125H3.25a.625.625 0 0 1-.625-.625zm3.5 3.5c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v6c0 .345-.28.625-.625.625h-6a.625.625 0 0 1-.625-.625z"
                    })
                },
                o = (0, r(104509).wt)("duplicateSmall", n, "small")
        },
        832248: (e, t, r) => {
            r.d(t, {
                S7: () => a,
                fF: () => v,
                es: () => b,
                LE: () => h,
                zs: () => m,
                HE: () => f,
                yg: () => g,
                QH: () => y,
                kn: () => c,
                mB: () => u,
                L$: () => s,
                X3: () => d,
                jX: () => p
            }), r(898992), r(354520), r(581454), r(944114);
            var n = () => r(896346);
            class o extends n().p3 {
                constructor(e, t) {
                    super(e, t)
                }
                after(e, t) {
                    return super.after(e, t)
                }
            }
            let i = (0, r(109939).YK)({
                    dateAtTime: {
                        id: "automations.recurrenceHelpers.dateAtTime",
                        defaultMessage: "{date} at {time}"
                    },
                    dateBetweenMidnightAnd3AM: {
                        id: "automations.recurrenceHelpers.dateBetweenMidnightAnd3AM",
                        defaultMessage: "{date} between 12–3 AM"
                    },
                    numberEndConditionDescription: {
                        id: "automations.recurrenceHelpers.numberEndConditionDescription",
                        defaultMessage: "{number, plural, one {After {number} run} other {After {number} runs}}"
                    },
                    noEndCondition: {
                        id: "automations.recurrenceHelpers.noEndCondition",
                        defaultMessage: "Never"
                    }
                }),
                l = {
                    hour: o.HOURLY,
                    day: o.DAILY,
                    week: o.WEEKLY,
                    month: o.MONTHLY,
                    year: o.YEARLY
                },
                a = {
                    MO: o.MO,
                    TU: o.TU,
                    WE: o.WE,
                    TH: o.TH,
                    FR: o.FR,
                    SA: o.SA,
                    SU: o.SU
                };

            function u(e) {
                return (0, r(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 99
            }

            function s(e) {
                return (0, r(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function d(e) {
                let {
                    start_date: t,
                    frequency: n,
                    interval: i,
                    weekdays: u,
                    timezone: s,
                    hour: d,
                    minute: p
                } = e, c = (0, r(943003).eU)(t);
                "hour" === n && c.setUTCHours(d ? ? 0, p ? ? 0, 0, 0);
                let y = "week" === n && u ? u.map(e => a[e]) : void 0,
                    f = {};
                return (0, r(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? f.until = (0, r(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? f.count = e.end_condition.number_of_occurrences : (0, r(722371).HB)(e.end_condition)), "month" === e.frequency && (0, r(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? f.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? f.byweekday = (function e(t, ...r) {
                    if (0 === r.length) return t.map(e => [e]);
                    let n = [];
                    for (let o of t) n.push(...e(r[0], ...r.slice(1)).map(e => [o, ...e]));
                    return n
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => a[e].nth(t)) : (0, r(722371).HB)(e.monthly_restriction)), new o({
                    freq: l[n],
                    dtstart: c,
                    interval: i,
                    byweekday: y,
                    tzid: "hour" === n ? void 0 : s,
                    ..."hour" === n ? {} : {
                        byhour: d ? ? 0,
                        byminute: p ? ? 0,
                        bysecond: 0
                    },
                    ...f
                })
            }

            function p(e) {
                var t;
                if (0 === e.length) return {
                    violatesConstraint: !1,
                    templateNestingExceedsMaxDepth: !1,
                    ancestorHasDailyTemplate: !1,
                    nestedDepthOfAutomationAncestors: void 0,
                    immediateAncestorRecurrenceType: void 0
                };
                let r = e.filter(e => {
                        var t;
                        return (null == (t = e.getRecurrence()) ? void 0 : t.frequency) === "day"
                    }),
                    n = e.length,
                    o = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    i = n > 1,
                    l = r.length >= 1;
                return {
                    violatesConstraint: i || l,
                    templateNestingExceedsMaxDepth: i,
                    ancestorHasDailyTemplate: l,
                    nestedDepthOfAutomationAncestors: n,
                    immediateAncestorRecurrenceType: o
                }
            }

            function c(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function y(e) {
                return d(e).after((0, r(943003).eU)((0, r(943003).Rz)())) || void 0
            }

            function f(e) {
                let {
                    recurrence: t,
                    intl: n
                } = e, o = "hour" === t.frequency ? function(e) {
                    let t = r(906745).DateTime.now();
                    if (r(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let n = t.startOf("hour");
                    return { ...e,
                        start_date: n.toMillis(),
                        hour: n.hour,
                        minute: n.minute
                    }
                }(t) : t, l = y(b(o));
                if (!l) return;
                let a = r(906745).DateTime.fromJSDate(l).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, r(599412).H)(n));
                "hour" !== o.frequency && (a = a.setZone(o.timezone));
                let u = "hour" !== t.frequency && c(t),
                    s = (0, r(850640).Yq)({
                        date: a,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: n,
                        shortenDate: !0
                    });
                if (u) return n.formatMessage(i.dateBetweenMidnightAnd3AM, {
                    date: s
                }); {
                    let e = a.toLocaleString(r(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, r(714350).P)() && (e += ` ${a.toFormat("ZZZZ")}`), n.formatMessage(i.dateAtTime, {
                        date: s,
                        time: e
                    })
                }
            }

            function m(e, t) {
                return (0, r(722371).O9)(e) ? "number" === e.type ? t.formatMessage(i.numberEndConditionDescription, {
                    number: e.number_of_occurrences
                }) : "date" === e.type ? (0, r(850640).Yq)({
                    date: r(906745).DateTime.fromMillis(e.end_at),
                    dateFormat: "relative",
                    allowRelativeDates: !0,
                    intl: t,
                    shortenDate: !0
                }) : void(0, r(722371).HB)(e) : t.formatMessage(i.noEndCondition)
            }

            function h(e) {
                return { ...e,
                    start_date: (0, r(943003).l1)(e.start_date),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? {
                        type: "date",
                        end_at: (0, r(943003).l1)(e.end_condition.end_at)
                    } : (0, r(722371).HB)(e.end_condition) : void 0
                }
            }

            function g(e, t, r) {
                return e.plus(r - t)
            }

            function b(e) {
                var t;
                let n;
                return { ...e,
                    start_date: (0, r(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, n = r(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, r(943003).Rz)(n.toJSDate())
                    }) : (0, r(722371).HB)(e.end_condition) : void 0
                }
            }

            function v(e, t) {
                let n = r(381453).fN(e, e => void 0 !== e),
                    o = r(381453).fN(t, e => void 0 !== e);
                return r(381453).n4(n, o)
            }
        },
        852864: (e, t, r) => {
            r.d(t, {
                H: () => n
            }), r(898992), r(672577);

            function n({
                spaceStore: e,
                userId: t,
                environment: o
            }) {
                let i = new(r(736309)).d(o, {
                    table: r(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return i ? r(994797).SpaceViewStore.createChildStore(e, {
                    id: i.id,
                    table: r(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        966559: (e, t, r) => {
            r.r(t), r.d(t, {
                exclamationMarkCircleSmallIcon: () => i,
                iconDefinition: () => o
            }), r(296540);
            var n = r(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, n.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                i = (0, r(104509).wt)("exclamationMarkCircleSmall", o, "small")
        },
        976298: (e, t, r) => {
            r.d(t, {
                $0: () => d,
                Fx: () => g,
                Ge: () => a,
                I3: () => i,
                Kj: () => m,
                PP: () => b,
                TK: () => v,
                Yy: () => o,
                aE: () => _,
                cQ: () => h,
                kH: () => u,
                m7: () => l,
                nq: () => y,
                nv: () => p,
                tj: () => s
            }), r(898992), r(354520), r(737550);
            let n = {
                    checkbox: !0,
                    date: !0,
                    email: !0,
                    multi_select: !0,
                    number: !0,
                    person: !0,
                    phone_number: !0,
                    relation: !0,
                    select: !0,
                    status: !0,
                    text: !0,
                    title: !0,
                    url: !0,
                    auto_increment_id: !1,
                    button: !1,
                    created_by: !1,
                    created_time: !1,
                    file: !1,
                    formula: !1,
                    last_edited_by: !1,
                    last_edited_time: !1,
                    last_visited_time: !1,
                    location: !1,
                    rollup: !1,
                    verification: !1,
                    place: !1
                },
                o = {
                    checkbox: [{
                        type: "checkbox"
                    }, {
                        type: "undefined"
                    }],
                    date: [{
                        type: "date"
                    }, {
                        type: "undefined"
                    }],
                    email: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }],
                    multi_select: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    number: [{
                        type: "number"
                    }, {
                        type: "undefined"
                    }],
                    person: [{
                        type: "person"
                    }, { of: {
                            type: "person"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    phone_number: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }],
                    relation: [{
                        type: "block"
                    }, { of: {
                            type: "block"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    select: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    status: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    text: void 0,
                    title: void 0,
                    url: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }]
                };

            function i(e) {
                return !!(n[e.type] && !(0, r(425985).U)(e) && (!(0, r(9247).$M)(e) || void 0 === (0, r(9247).om)(e)))
            }

            function l(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: n,
                    filter: o,
                    sort: l,
                    sourcePropertyIds: a
                } = e, u = (a ? ? (0, r(722371).objectKeys)(n)).filter((t, l, a) => {
                    let u = n[t];
                    return !(!u || !i(u) || "relation" === u.type && e.restrictCrossSpace && (0, r(226989).o)(e.spaceId, u)) && (!o || o([t, u], l, n))
                });
                if (0 === u.length) return [];
                if (!t || !1 === l) return u;
                let s = (0, r(944940).L)(t, n, void 0, r(565546).jf.Page).collection_page_properties || [];
                return r(381453).Ul(u, e => s.findIndex(t => t.property === e))
            }

            function a(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: n,
                    sort: o
                } = e, i = (0, r(722371).objectKeys)(n).filter((e, t, o) => {
                    let i = n[e];
                    return !!i && !!(0, r(568249).J)(i)
                });
                if (0 === i.length) return [];
                if (!t || !1 === o) return i;
                let l = (0, r(944940).L)(t, n, void 0, r(565546).jf.Page).collection_page_properties || [];
                return r(381453).Ul(i, e => l.findIndex(t => t.property === e))
            }

            function u(e) {
                if (e.type === r(944897).M9.InvalidCharacter) return {
                    type: e.type,
                    character: e.character
                };
                if (e.type === r(944897).M9.TokenExpected) return {
                    type: e.type,
                    token: e.token
                };
                if (e.type === r(944897).uW.MissingSchemaPropertyOnThisRow) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === r(944897).uW.MissingSchemaPropertyOnCollection) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === r(944897).uW.ThisRowBlockPropertyMismatchCollection) return {
                    type: e.type,
                    thisRowCollection: e.thisRowCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.MissingContextVariable) return {
                    type: e.type,
                    valueId: e.valueId,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.FunctionCallTooFewArguments) return {
                    type: e.type,
                    numArguments: e.numArguments,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.FunctionCallUnexpectedArgument) return {
                    type: e.type,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.FunctionCallArgumentWrongType) return {
                    type: e.type,
                    argumentType: e.argumentType,
                    libraryFunctionName: e.libraryFunction.name,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.MissingDataDependencyBlock) return {
                    type: e.type,
                    blockPointer: e.blockPointer,
                    node: e.node,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.MissingDataDependencyPerson) return {
                    type: e.type,
                    personPointer: e.personPointer,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.MemberPropertyMismatchCollection) return {
                    type: e.type,
                    blockCollection: e.blockCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.DownstreamParseFailure) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.ContextVariableWrongType) return {
                    type: e.type,
                    valueId: e.valueId,
                    expectedType: e.expectedType,
                    resultType: e.resultType,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.DisallowedValueType) return {
                    type: e.type,
                    expressionValue: e.expressionValue,
                    allowedValueTypes: e.allowedValueTypes,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.LibraryFunctionExecutionError) return {
                    type: e.type,
                    error: e.error,
                    libraryFunctionName: e.libraryFunction.name,
                    errorSource: e.errorSource
                };
                return "errorSource" in e ? {
                    type: e.type,
                    errorSource: e.errorSource
                } : {
                    type: e.type
                }
            }
            let s = {
                checkbox: !0,
                date: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                button: !1,
                file: !1,
                verification: !1,
                auto_increment_id: !1,
                created_by: !1,
                created_time: !1,
                formula: !1,
                last_edited_by: !1,
                last_edited_time: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                place: !1
            };

            function d(e) {
                return !!s[e.type]
            }

            function p(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: n,
                    filter: o,
                    sort: i
                } = e, l = (0, r(722371).objectKeys)(n).filter((e, t, i) => {
                    var l;
                    let a = n[e];
                    return !(!a || !s[a.type] || (0, r(9247).$M)(a) && null != (l = (0, r(9247).om)(a)) && l.auto_update_on_edit) && (!o || o([e, a], t, n))
                });
                if (0 === l.length) return [];
                if (!t || !1 === i) return l;
                let a = (0, r(944940).L)(t, n, void 0, r(565546).jf.Page).collection_page_properties || [];
                return r(381453).Ul(l, e => a.findIndex(t => t.property === e))
            }
            let c = {
                checkbox: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                auto_increment_id: !1,
                button: !1,
                created_by: !1,
                created_time: !1,
                date: !1,
                file: !1,
                formula: !1,
                last_edited_by: !1,
                last_edited_time: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                verification: !1,
                place: !1
            };

            function y(e) {
                return c[e.type]
            }
            let f = {
                checkbox: !0,
                created_by: !0,
                created_time: !0,
                date: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                last_edited_by: !0,
                last_edited_time: !0,
                auto_increment_id: !1,
                button: !1,
                file: !1,
                formula: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                verification: !1,
                place: !1
            };

            function m(e) {
                return f[e.type]
            }

            function h(e) {
                return 0 === e
            }

            function g(e) {
                return "button_block" === e || "button_property" === e
            }

            function b(e) {
                let {
                    property: t,
                    collectionSchema: r
                } = e;
                return !!r && !r[t]
            }

            function v(e) {
                let {
                    collectionSchema: t,
                    property: r,
                    type: n
                } = e, o = null == t ? void 0 : t[r];
                return !o || ("action" === n ? !i(o) : !s[o.type])
            }

            function _({
                automationTrigger: e,
                collectionSchema: t
            }) {
                if ((null == e ? void 0 : e.type) === "event") {
                    let {
                        pagesAdded: n,
                        pagePropertiesEdited: o,
                        source: i
                    } = e.event;
                    if (void 0 === i) return !1;
                    let l = "some" === o.type && o.some,
                        a = "all" === o.type && o.all;
                    if ((l || a || []).some(e => b({
                            collectionSchema: t,
                            property: e.property
                        }) || v({
                            collectionSchema: t,
                            property: e.property,
                            type: "trigger"
                        }))) return !1;
                    let u = "some" === o.type && (!(0, r(722371).O9)(o.some) || 0 === o.some.length),
                        s = "all" === o.type && (!(0, r(722371).O9)(o.all) || 0 === o.all.length);
                    if (!n && ("none" === o.type || u || s)) return !1
                } else if ((null == e ? void 0 : e.type) !== "recurrence") return !1;
                else if (!e.recurrence) return !1;
                return !0
            }
        }
    }
]);