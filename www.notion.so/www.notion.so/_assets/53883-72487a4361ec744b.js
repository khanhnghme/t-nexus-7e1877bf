"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [53883], {
        11444: (e, t, o) => {
            o.r(t), o.d(t, {
                UISpacePermissionGroupToken: () => i
            });
            var n = o(296540),
                r = o(474848);
            let l = {
                avatarWrapStyle: {
                    width: "none",
                    minHeight: "none",
                    marginInlineEnd: 6
                },
                style0: { ...o(699422).RC
                },
                style1: {
                    margin: 0
                }
            };

            function i(e) {
                let {
                    parentStore: t,
                    style: i,
                    format: a
                } = e, s = e.groupPointer.id, d = e.groupPointer.spaceId, c = (0, o(659341).S4)({
                    spacePermissionGroupId: s,
                    spaceId: d
                }), u = (0, o(682985).K8)(() => e.groupModel ? e.groupModel : t ? o(398652).C.createChildStore(t, c).getModel() : void 0, [t, c, e.groupModel]), p = (0, o(533992).Y0)(), {} = (0, o(960253).I)(() => ({
                    badgeStyle: {
                        borderRadius: 4,
                        background: o(632079).Tj.background.tertiaryTranslucent,
                        fontSize: o(986939).A.isMobile ? 11 : 9,
                        lineHeight: p.isAndroid ? 1.5 : 1,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em"
                    }
                }), [p]), y = (0, o(109939).tz)(), f = (0, o(682985).K8)(() => (0, o(95384).n)({
                    intl: y,
                    permissionGroupModel: u
                }), [y, u]), m = (0, n.useCallback)(e => a === o(696654).NY.Inline ? (0, r.jsx)(o(308256).o, {
                    group: u,
                    size: e
                }) : (0, r.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    minWidth: 0,
                    children: [(0, r.jsx)("div", {
                        style: l.avatarWrapStyle,
                        children: (0, r.jsx)(o(308256).o, {
                            group: u,
                            size: e
                        })
                    }), (0, r.jsx)("div", {
                        style: l.style0,
                        children: f
                    })]
                }), [a, u, f]);
                return (0, r.jsx)(o(376921).Ay, { ...e,
                    style: { ...l.style1,
                        ...i
                    },
                    renderAvatar: m
                })
            }
        },
        47187: (e, t, o) => {
            o.d(t, {
                E: () => n
            });

            function n(e) {
                let {
                    size: t,
                    style: n
                } = e;
                return (0, o(960253).I)(() => ({
                    icon: {
                        width: .6 * t,
                        height: .6 * t,
                        fill: o(632079).Tj.text.secondary
                    },
                    iconContainer: {
                        width: t,
                        height: t,
                        borderRadius: "100%",
                        background: o(632079).Tj.background.tertiaryTranslucent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        ...n
                    }
                }), [t, n])
            }
        },
        53684: (e, t, o) => {
            o.d(t, {
                n: () => i
            });
            var n = o(296540),
                r = o(474848);
            let l = {
                button: {
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: o(632079).Tj.text.tertiary,
                    borderRadius: 6,
                    padding: "0 6px"
                }
            };

            function i({
                blockStore: e,
                collectionContextStore: t,
                columnWidth: a
            }) {
                let s = (0, o(533992).v3)(),
                    d = (0, o(682985).O$)(t.currentSubitemFormatStoreForCollectionStore),
                    c = (0, o(682985).K8)(() => e.getAssociatedCollectionStore(), [e]),
                    u = (0, o(682985).K8)(() => {
                        var e;
                        return null == (e = t.collectionViewStore()) ? void 0 : e.getType()
                    }, [t]),
                    p = (0, o(682985).K8)(() => {
                        if (!d || !c) return;
                        let e = c.getSchema()[d.property];
                        if (void 0 !== e && (0, o(795e3).n)(e)) return e
                    }, [c, d]),
                    y = "table" === u || "list" === u || "timeline" === u,
                    f = (0, o(109939).tz)(),
                    m = o(986939).A.isMobile ? 75 : 200,
                    x = (0, o(960253).I)(() => ({
                        parentTitle: { ...y ? {
                                maxWidth: a ? Math.min(m, a - 75) : m
                            } : {},
                            ...o(699422).RC
                        }
                    }), [a, y, m]),
                    S = (0, o(682985).K8)(() => d && p ? (0, o(435260).e)({
                        store: e,
                        subitemFormat: d,
                        propertySchema: p
                    }) : [], [e, d, p]),
                    b = (0, o(682985).K8)(() => {
                        if (0 === S.length) return;
                        let t = S[0];
                        return o(970831).B.createChildStore(e, t)
                    }, [e, S]),
                    v = (0, o(682985).K8)(() => {
                        var e;
                        return null == b || null == (e = b.getModel()) ? void 0 : e.getRenderTitleWithPlaceholder({
                            getRecordModel: b.getRecordModel,
                            userTimeZone: (0, o(714350).P)(),
                            intl: f
                        })
                    }, [b, f]),
                    h = (0, o(682985).K8)(() => (0, o(88541).x)({
                        collectionContextStore: t,
                        blockStore: e
                    }), [t, e]),
                    g = (0, n.useCallback)(() => (0, r.jsx)("div", {
                        children: v
                    }), [v]),
                    j = (0, n.useCallback)(e => (0, r.jsxs)(o(64960).Ay, {
                        ariaLabel: f.formatMessage({
                            id: "parentItemIndicator.button.openParentSidePeek.ariaLabel",
                            defaultMessage: "Open parent in side peek"
                        }),
                        onClick: () => {
                            b && o(714416).kB({
                                relationPointers: S,
                                relatedPageStore: b,
                                environment: s,
                                from: "relation_property",
                                peekMode: "side_peek"
                            })
                        },
                        style: l.button,
                        ...e,
                        children: [(0, r.jsx)(o(16275).I, {
                            icon: o(748593).Z,
                            size: "sm",
                            colorVariant: "secondary"
                        }), (0, r.jsx)(o(111010).D, {
                            styleKey: "bodySmMedium",
                            children: (0, r.jsx)("div", {
                                style: x.parentTitle,
                                children: v
                            })
                        })]
                    }), [s, f, b, v, S, x.parentTitle]);
                return h && b ? (0, r.jsx)(o(51831).m, {
                    alignment: "start",
                    delayThreshold: 300,
                    content: g,
                    children: j
                }) : null
            }
        },
        59724: (e, t, o) => {
            o.d(t, {
                A: () => l
            }), o(296540);
            var n = o(474848);
            let r = {
                    style0: { ...o(699422).RC
                    }
                },
                l = function(e) {
                    let {
                        botStore: t,
                        avatarSize: l,
                        shouldShowBadge: i,
                        style: a,
                        inline: s
                    } = e, d = (0, o(109939).tz)(), c = (0, o(533992).Y0)(), u = (0, o(682985).K8)(() => null == t ? void 0 : t.getDisplayName(d), [t, d]), {
                        outerStyle: p,
                        avatarWrapStyle: y,
                        badgeStyle: f
                    } = (0, o(960253).I)(() => ({
                        outerStyle: {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...a
                        },
                        avatarWrapStyle: s ? {
                            width: "none",
                            minHeight: "none",
                            marginInlineEnd: 6
                        } : {
                            marginInlineEnd: 6
                        },
                        badgeStyle: {
                            padding: "2px 6px",
                            borderRadius: 4,
                            color: o(632079).Tj.text.secondary,
                            background: o(632079).Tj.background.tertiaryTranslucent,
                            fontSize: o(986939).A.isMobile ? 11 : 9,
                            lineHeight: c.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginInlineStart: 8,
                            marginTop: 1
                        }
                    }), [a, s, c]);
                    return (0, n.jsxs)("div", {
                        style: p,
                        children: [(0, n.jsx)("div", {
                            style: y,
                            children: (0, n.jsx)(o(31319).A, {
                                botStore: t,
                                size: l
                            })
                        }), (0, n.jsx)("div", {
                            style: r.style0,
                            children: u
                        }), i ? (0, n.jsx)("div", {
                            style: f,
                            children: "Bot"
                        }) : void 0]
                    })
                }
        },
        72502: (e, t, o) => {
            o.d(t, {
                K: () => n
            });

            function n({
                collectionContextStore: e,
                blockStore: t
            }) {
                return function({
                    collectionContextStore: e
                }) {
                    let t = (0, o(910915).r)(e),
                        n = e.normalizedFormatStore.state.subitem_display_mode,
                        r = e.normalizedFormatStore.state.subitem_filter_scope;
                    return t && ("hidden" === n || "flattened" === n && "parents" === r)
                }({
                    collectionContextStore: e
                }) && (0, o(523288).Q)({
                    collectionStore: e.collectionStore(),
                    blockStore: t
                })
            }
        },
        88223: (e, t, o) => {
            o.d(t, {
                T: () => r,
                m: () => n
            });
            let n = new(o(815048)).O2("formPropertyRenderer", () => Promise.all([o.e(71562), o.e(54951), o.e(96579), o.e(59111)]).then(o.bind(o, 756154))),
                r = (0, o(815048).jQ)(n, e => e.default)
        },
        88541: (e, t, o) => {
            o.d(t, {
                x: () => n
            });

            function n({
                collectionContextStore: e,
                blockStore: t
            }) {
                return (0, o(245037).j)({
                    collectionContextStore: e
                }) && function(e) {
                    var t, n;
                    let {
                        blockId: r,
                        collectionContextStore: l
                    } = e, i = null == (t = l.currentSubitemFormatStoreForCollectionStore) ? void 0 : t.state, a = null == i ? void 0 : i.inverse;
                    if (!i || !a) return !1;
                    let s = e.blockStore ? ? (null == (n = o(496704).K.findBlockFromId(r)) ? void 0 : n.getBlockStore());
                    if (!s) return !1;
                    let d = s.getSchema();
                    if (!d) return !1;
                    let c = d[a];
                    return !!c && "relation" === c.type && (0, o(435260).e)({
                        store: s,
                        subitemFormat: i,
                        propertySchema: c
                    }).length > 0
                }({
                    blockId: t.id,
                    collectionContextStore: e,
                    blockStore: t
                })
            }
        },
        93193: (e, t, o) => {
            function n(e) {
                if (!e) return !1;
                let t = e.getCollectionSource();
                return (null == t ? void 0 : t.type) === "myMeetings"
            }

            function r(e) {
                return (0, o(682985).K8)(() => n(e), [e])
            }
            o.d(t, {
                I: () => n,
                X: () => r
            })
        },
        111018: (e, t, o) => {
            o.r(t), o.d(t, {
                BlockPropertyRouter: () => l
            });
            var n = o(296540),
                r = o(474848);
            let l = n.memo(function(e) {
                var t, l, i;
                let a, {
                        property: s,
                        collectionStore: d,
                        surface: c,
                        formDataStore: u,
                        onTab: p,
                        onUntab: y,
                        onEnter: f,
                        onEsc: m,
                        onBgClick: x,
                        onOpenProperty: S,
                        store: b
                    } = e,
                    v = (0, o(940270).yo)({
                        collectionStore: d,
                        property: s
                    }),
                    h = (t = d, l = u, i = v, a = (0, o(713311).Ks)(), (0, o(682985).K8)(() => {
                        var e;
                        let o = t.getSchema();
                        return (null == l || null == (e = l.getFormState()) || null == (e = e.collectionSchema) ? void 0 : e[i]) ? ? o[i] ? ? (null == a ? void 0 : a.normalizedSchemaStore.state[i])
                    }, [a, l, t, i], {
                        debugName: "usePropertySchema",
                        equalityFn: o(381453).n4
                    })),
                    g = (0, n.useContext)(o(700587).U),
                    j = (0, n.useRef)(null);
                return ((0, o(336494).b)(o(668984).A, () => ({
                    getNode: () => {
                        let {
                            current: e
                        } = j;
                        return e ? "getNode" in e ? e.getNode() : e : null
                    },
                    props: {
                        onTab: p,
                        onUntab: y,
                        onEnter: f,
                        onEsc: m,
                        onBgClick: x,
                        onOpenProperty: S,
                        property: v,
                        surface: c,
                        store: b
                    },
                    getScrollerContext: () => g
                }), [g, p, y, f, m, x, S, v, c, b]), null != h && h.type) ? (0, r.jsx)(o(422575).qN, {
                    innerProps: e,
                    property: v,
                    unmappedProperty: s,
                    propertySchema: h,
                    containerRef: j,
                    children: (0, o(22148).J)(c) ? (0, r.jsx)(o(88223).T, {
                        ref: j,
                        innerProps: e,
                        surface: c,
                        property: v,
                        propertyType: null == h ? void 0 : h.type
                    }) : (0, r.jsx)(o(778584).v, {
                        ref: j,
                        innerProps: e,
                        surface: c,
                        property: v,
                        propertyType: null == h ? void 0 : h.type
                    })
                }) : null
            })
        },
        137955: (e, t, o) => {
            o.d(t, {
                b: () => i
            });
            var n = o(296540),
                r = o(474848);
            let l = {
                iconStyle: {
                    color: o(632079).Tj.text.secondary,
                    fill: o(632079).Tj.text.secondary,
                    width: 16,
                    height: 16
                },
                style0: {
                    height: 20,
                    width: 24,
                    borderRadius: 4
                }
            };

            function i(e) {
                let {
                    store: t,
                    property: i,
                    openOverlay: s
                } = e, d = (0, o(533992).v3)(), {
                    propertySchema: c,
                    surface: u,
                    collectionContextStore: p,
                    isEmptyStore: y,
                    canEdit: f
                } = (0, n.useContext)(o(422575).L8), m = (0, o(682985).O$)(y), x = (0, o(109939).tz)(), S = (0, n.useCallback)(async () => {
                    if (!c) return;
                    if (s) {
                        let e = (0, o(447036).cq)(t) ? o(129894).A : o(363746).A;
                        o(576186).ho({
                            blockPropertyValueOverlayStore: e,
                            collectionContextStore: p,
                            surface: u,
                            environment: d,
                            store: t,
                            property: i,
                            readOnly: !0
                        })
                    }
                    let e = o(298176).m.setIsWriting({
                            propertySchema: c,
                            stores: [t],
                            collectionId: t.getAssociatedCollectionId()
                        }),
                        {
                            propertyCompletionsActions: n
                        } = await o(712155).aiDependency.load();
                    n.autofillPropertyForBlocks({
                        environment: d,
                        stores: [t],
                        property: i,
                        propertySchema: c,
                        userEventForAnalytics: "generate_from_action_button",
                        collectionStore: null == p ? void 0 : p.collectionStore(),
                        collectionViewStore: null == p ? void 0 : p.collectionViewStore(),
                        collectionViewBlockStore: null == p ? void 0 : p.collectionViewBlockStore(),
                        sessionIdForAnalytics: e,
                        from: o(793550).zP(u)
                    })
                }, [p, d, u, s, i, c, t]), b = c ? (0, o(9247).YE)(c) : void 0, {
                    shouldShowLegacyAutofill: v
                } = (0, o(251955).D)({
                    aiInference: b
                });
                return (0, o(682985).K8)(() => f && c && (!o(986939).A.isMobile || m) && (0, o(576348).ge)(o(827482).A.getMode(d, t, t.getSpaceStore()), t) && (0, o(9247).$M)(c) && (0, o(9247).om)(c) && o(205885).A.state.online && v, [f, c, m, d, t, v]) ? (0, r.jsx)(o(221149).A, {
                    icon: o(438166).s,
                    tooltip: x.formatMessage(a.update),
                    onClick: S,
                    iconStyle: l.iconStyle,
                    style: l.style0,
                    hasBackground: !1
                }) : null
            }
            let a = (0, o(109939).YK)({
                update: {
                    defaultMessage: "Update",
                    id: "database.editButton.autofillWithAiTooltip"
                }
            })
        },
        198439: (e, t, o) => {
            o.d(t, {
                P: () => n
            });

            function n(e) {
                let {
                    store: t
                } = e;
                "new" === o(674829).A.state.editMode && o(674829).A.state.store.id === t.id && o(674829).A.reset()
            }
        },
        222119: (e, t, o) => {
            o.d(t, {
                W: () => r
            }), o(296540);
            var n = o(474848);

            function r({
                blockStore: e,
                collectionContextStore: t,
                wrapperStyle: l
            }) {
                let i = (0, o(682985).O$)(t.currentSubitemFormatStoreForCollectionStore),
                    a = (0, o(682985).K8)(() => (0, o(28630).Dj)({
                        store: e,
                        collectionContextStore: t
                    }), [t, e]),
                    s = (0, o(682985).K8)(() => {
                        if (!i || !a) return;
                        let e = a.getSchema()[i.property];
                        if (void 0 !== e && (0, o(795e3).n)(e)) return e
                    }, [a, i]),
                    d = (0, o(960253).I)(() => ({
                        wrapper: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 2,
                            verticalAlign: " text-top",
                            paddingInlineEnd: 8,
                            ...l
                        }
                    }), [l]),
                    c = (0, o(682985).K8)(() => i && s ? (0, o(149267).r)({
                        store: e,
                        subitemFormat: i,
                        propertySchema: s
                    }).length : 0, [e, i, s]);
                return (0, o(682985).K8)(() => (0, o(72502).K)({
                    collectionContextStore: t,
                    blockStore: e
                }), [t, e]) && 0 !== c ? (0, n.jsx)(o(51831).m, {
                    content: () => (0, n.jsx)(o(109939).sA, {
                        id: "subitemCountIndicator.tooltip",
                        defaultMessage: "{count, plural, one {# sub-item} other {# sub-items}}",
                        values: {
                            count: c
                        }
                    }),
                    children: e => (0, n.jsxs)("span", { ...e,
                        style: d.wrapper,
                        children: [(0, n.jsx)(o(16275).I, {
                            icon: o(623261).F,
                            size: "sm",
                            colorVariant: "secondary"
                        }), (0, n.jsx)(o(111010).D, {
                            colorVariant: "tertiary",
                            styleKey: "bodySmMedium",
                            children: c
                        })]
                    })
                }) : null
            }
        },
        245037: (e, t, o) => {
            o.d(t, {
                j: () => n
            });

            function n({
                collectionContextStore: e
            }) {
                return (0, o(910915).r)(e) && "flattened" === e.normalizedFormatStore.state.subitem_display_mode
            }
        },
        246467: (e, t, o) => {
            o.d(t, {
                A: () => i
            });
            var n = o(296540),
                r = o(474848);
            let l = {
                    display: "inline-block",
                    width: "1.2em",
                    marginInlineStart: 5,
                    marginInlineEnd: 2,
                    paddingBottom: 3,
                    verticalAlign: "middle"
                },
                i = function(e) {
                    let t, i = (0, o(109939).tz)(),
                        s = (0, o(75272).I)(),
                        d = (0, n.useRef)(),
                        c = (0, n.useCallback)(() => {
                            let t = e.value;
                            if (!t) return;
                            let n = o(25825).q8(t, (0, o(714350).P)());
                            if (!n) return;
                            let r = n.valueOf(),
                                l = r - Date.now();
                            l < 0 || l > o(627179).nD || d.current && d.current.timestamp === r || (d.current && clearTimeout(d.current.timer), d.current = {
                                timestamp: r,
                                timer: setTimeout(() => s("DateBox", "DateBox/createReminderTimer"), l)
                            })
                        }, [s, e.value]),
                        u = (0, n.useCallback)(() => {
                            d.current && (clearTimeout(d.current.timer), d.current = void 0)
                        }, []);
                    (0, n.useEffect)(() => {
                        c()
                    }, [c]), (0, n.useEffect)(() => () => {
                        u()
                    }, [u]);
                    let {
                        value: p,
                        withComma: y
                    } = e, f = (0, o(682985).K8)(() => p ? (0, o(850640).ZF)({
                        value: p,
                        date_format: e.dateFormat,
                        time_format: e.timeFormat,
                        userTimeZone: (0, o(714350).P)(),
                        allowRelativeDates: !0,
                        intl: i,
                        shortenDateAndRange: e.shortenDateAndRange,
                        displayInUserTimezone: e.displayInUserTimezone,
                        getToday: o(132315).x1
                    }) : void 0, [i, e.dateFormat, e.displayInUserTimezone, e.shortenDateAndRange, e.timeFormat, p]);
                    if (!p) return null;
                    let m = o(25825).AA(p, (0, o(714350).P)(), o(849917).locale);
                    (0, o(943003).Lh)(p) && (t = o(25825).Zs(p, (0, o(714350).P)()) ? {
                        color: o(632079).Tj.red.text.accentPrimary
                    } : {
                        color: o(632079).Tj.blue.text.accentPrimary
                    });
                    let x = (0, r.jsxs)(r.Fragment, {
                        children: [f, (0, o(943003).Lh)(p) ? (0, r.jsx)(o(16275).I, {
                            icon: o(848194).alarmSmallIcon,
                            style: l
                        }) : void 0, y ? ", " : null]
                    });
                    return e.disableTooltip ? (0, r.jsx)("div", {
                        className: e.className,
                        style: { ...e.style,
                            ...t
                        },
                        children: x
                    }) : (0, r.jsx)(o(51831).m, {
                        content: () => (0, r.jsxs)(r.Fragment, {
                            children: [e.tooltipHeader, (0, r.jsxs)("div", {
                                style: e.tooltipHeader ? {
                                    color: o(632079).Tj.text.inverseSecondary
                                } : {},
                                children: [a(m.start), m.end ? ` → ${a(m.end)}` : ""]
                            })]
                        }),
                        placement: e.tooltipPlacement,
                        children: o => (0, r.jsx)("div", {
                            className: e.className,
                            style: { ...e.style,
                                ...t
                            },
                            ...o,
                            children: x
                        })
                    })
                };

            function a(e) {
                return (0, o(850640).eV)({
                    value: e,
                    preset: "medium"
                })
            }
        },
        269924: (e, t, o) => {
            o.d(t, {
                BP: () => x,
                Qz: () => f,
                RM: () => m,
                Um: () => u,
                g$: () => c,
                nr: () => i,
                v: () => d,
                vy: () => y,
                wW: () => s,
                y9: () => p,
                zI: () => a
            });
            var n = o(296540),
                r = o(474848);
            let l = n.memo((0, n.forwardRef)(function(e, t) {
                let l, {
                        store: a,
                        onContextMenu: s,
                        editButtonClickProps: d,
                        quickActionButtons: c,
                        EmptyComponent: u,
                        buttonStyle: p,
                        property: y,
                        width: f,
                        formQuestionStore: m,
                        userExpandable: x
                    } = e,
                    {
                        baseStyles: S,
                        propertySchema: b,
                        propertyFormat: v
                    } = (0, n.useContext)(o(422575).L8),
                    h = (0, o(973681).DZ)(a, y, b),
                    g = (0, o(533992).v3)(),
                    j = (0, o(682985).K8)(() => a.isInLibraryBlock(), [a]),
                    k = i({
                        store: a,
                        type: null == b ? void 0 : b.type,
                        property: y,
                        userId: g.currentUser.id
                    }),
                    w = (0, o(960253).I)(() => ({
                        buttonStyle: { ...S.buttonStyle,
                            ...p
                        },
                        buttonPressedStyle: S.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: S.buttonHoveredStyle ? ? {}
                    }), [S.buttonHoveredStyle, S.buttonPressedStyle, S.buttonStyle, p]);
                if (!k && void 0 === u && void 0 === h) return null;
                if (h) l = (0, r.jsx)(o(167834).e, {
                    templateVariableType: h.templateVariable
                });
                else if (k || void 0 === u) {
                    let e = (null == v ? void 0 : v.date_format) ? ? (null == b ? void 0 : b.date_format),
                        t = (null == v ? void 0 : v.time_format) ? ? (null == b ? void 0 : b.time_format),
                        n = j && ((null == b ? void 0 : b.type) === "last_edited_time" || (null == b ? void 0 : b.type) === "created_time" || (null == b ? void 0 : b.type) === "last_visited_time");
                    l = (0, r.jsx)(o(361724).C, {
                        children: (0, r.jsx)(o(638185).b, {
                            dateValue: k,
                            dateFormat: e,
                            timeFormat: t,
                            store: a,
                            property: y,
                            formatWithUltraCompactRelativeFormat: n
                        })
                    })
                } else l = (0, r.jsx)(u, {});
                return (0, r.jsx)(o(858439).P, {
                    ref: t,
                    style: w.buttonStyle,
                    hoveredStyle: w.buttonHoveredStyle,
                    pressedStyle: w.buttonPressedStyle,
                    onContextMenu: s,
                    editButtonClickProps: d,
                    quickActionButtons: c,
                    width: f,
                    formQuestionStore: m,
                    userExpandable: x,
                    children: l
                })
            }));

            function i(e) {
                let {
                    store: t,
                    type: n,
                    property: r,
                    userId: l
                } = e;
                return (0, o(682985).K8)(() => {
                    switch (n) {
                        case "created_time":
                            let e = t.getCreatedTime();
                            return e ? o(25825).KQ(e, (0, o(714350).P)()) : void 0;
                        case "last_edited_time":
                            let i = t.getLastEditedTime();
                            return i ? o(25825).KQ(i, (0, o(714350).P)()) : void 0;
                        case "last_visited_time":
                            if (!l) return;
                            let a = o(726570)._.createChildStore(t, {
                                table: o(832375).F9f,
                                id: (0, o(665619).$5)({
                                    parent_id: t.id,
                                    user_id: l
                                }),
                                spaceId: t.getSpaceId()
                            }).getVisitedAt();
                            return a ? o(25825).KQ(a, (0, o(714350).P)()) : void 0;
                        default:
                            let s = t.getPropertyValue(r);
                            return (0, o(179358).b)(s)
                    }
                }, [r, t, n, l])
            }
            let a = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: i,
                        property: a,
                        surface: s
                    } = e, {
                        isPhone: d
                    } = (0, o(533992).Y0)(), c = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: d
                            }).page.text
                        }
                    }), [d]), u = (0, n.useMemo)(() => {
                        if (!o(986939).A.isMobile) return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o(622031).qO, {
                                store: i,
                                property: a
                            }, "workflow-autofill"), (0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                                store: i,
                                property: a,
                                surface: s
                            }, "copy")]
                        })
                    }, [s, a, i]), p = S(e, t, c);
                    return (0, r.jsx)(l, { ...p,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: u
                    })
                }),
                s = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: i,
                        property: a,
                        surface: s
                    } = e, {
                        isPhone: d
                    } = (0, o(533992).Y0)(), {
                        shouldWrap: c
                    } = (0, n.useContext)(o(422575).L8), u = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: d
                            }).table.text
                        }
                    }), [d]), p = (0, o(682985).K8)(() => i.isInLibraryBlock(), [i]), y = (0, n.useMemo)(() => {
                        if (!o(986939).A.isMobile && !p) return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o(622031).qO, {
                                store: i,
                                property: a
                            }, "workflow-autofill"), (0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                                store: i,
                                property: a,
                                surface: s
                            }, "copy")]
                        })
                    }, [p, i, a, s]), f = S(e, t, u);
                    return (0, r.jsx)(l, { ...f,
                        EmptyComponent: o(959110).rW,
                        quickActionButtons: y,
                        userExpandable: c
                    })
                }),
                d = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: i,
                        property: a,
                        surface: s
                    } = e, {
                        isPhone: d
                    } = (0, o(533992).Y0)(), c = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: d
                            }).compact_page.text
                        }
                    }), [d]), u = (0, n.useMemo)(() => {
                        if (!o(986939).A.isMobile) return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                                store: i,
                                property: a,
                                surface: s
                            }, "copy")]
                        })
                    }, [s, a, i]), p = S(e, t, c);
                    return (0, r.jsx)(l, { ...p,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: u
                    })
                }),
                c = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, i = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "date"
                    }), a = S(e, t, i);
                    return (0, r.jsx)(l, { ...a,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                u = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, i = (0, o(533992).WS)(), a = S(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: i
                            }).card.text
                        }
                    }), [i]));
                    return (0, r.jsx)(l, { ...a,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                p = (0, n.forwardRef)(function(e, t) {
                    let o = S(e, t);
                    return (0, r.jsx)(l, { ...o
                    })
                }),
                y = (0, n.forwardRef)(function(e, t) {
                    let o = S(e, t);
                    return (0, r.jsx)(l, { ...o
                    })
                }),
                f = (0, n.forwardRef)(function(e, t) {
                    let o = S(e, t);
                    return (0, r.jsx)(l, { ...o
                    })
                }),
                m = (0, n.forwardRef)(function(e, t) {
                    let o = S(e, t);
                    return (0, r.jsx)(l, { ...o
                    })
                }),
                x = (0, n.forwardRef)(function(e, t) {
                    let n = S(e, t);
                    return (0, r.jsx)(l, { ...n,
                        EmptyComponent: o(959110).Fe
                    })
                });

            function S(e, t, n) {
                let {
                    store: r,
                    collectionStore: l,
                    property: i,
                    onContextMenu: a,
                    width: s
                } = e;
                return {
                    ref: t,
                    store: r,
                    collectionStore: l,
                    property: i,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onContextMenu: a,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    width: s
                }
            }
        },
        308256: (e, t, o) => {
            o.d(t, {
                o: () => r
            }), o(296540);
            var n = o(474848);

            function r(e) {
                let {
                    group: t
                } = e, r = e.size ? ? 20, l = (0, o(109939).tz)(), i = (0, o(682985).K8)(() => {
                    if (t && t.icon) return {
                        pointer: t.pointer,
                        icon: t.icon
                    }
                }, [t]), a = (0, o(682985).K8)(() => (0, o(95384).n)({
                    intl: l,
                    permissionGroupModel: t
                }), [l, t]);
                return (0, n.jsx)("div", {
                    children: i ? (0, n.jsx)(o(569553).B6, {
                        disabled: !0,
                        size: r,
                        icon: i,
                        isEmptyPage: !1,
                        title: a
                    }) : (0, n.jsx)(o(391343).A, {
                        size: r
                    })
                })
            }
        },
        376921: (e, t, o) => {
            o.d(t, {
                Ay: () => s,
                mI: () => l,
                vb: () => i
            }), o(296540);
            var n = o(474848);
            let r = (0, o(109939).YK)({
                    removeTokenLabel: {
                        defaultMessage: "Remove {title}",
                        id: "uiGenericToken.removeTokenLabel"
                    },
                    removeTokenLabelGeneric: {
                        defaultMessage: "Remove Item",
                        id: "uiGenericToken.removeTokenLabelGeneric"
                    }
                }),
                l = o(696654).NY,
                i = {
                    [o(696654).NY.ExtremeSmall]: {
                        height: 12,
                        fontSize: 10,
                        margin: "0 4px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [o(696654).NY.ExtraSmall]: {
                        height: 14,
                        fontSize: 12,
                        margin: "0 6px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [o(696654).NY.Small]: {
                        height: 18,
                        fontSize: 12,
                        margin: "0 6px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 16
                    },
                    [o(696654).NY.CompactEssential]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [o(696654).NY.Medium]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [o(696654).NY.Inline]: {
                        height: 20,
                        fontSize: 14,
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 20,
                        margin: "0 -5px 0 0",
                        marginEditState: "0 6px 0 0"
                    },
                    [o(696654).NY.Large]: {
                        height: 24,
                        fontSize: 16,
                        margin: "0 8px 8px 0",
                        marginEditState: "0 8px 8px 0",
                        closeIconSize: o(104509).Ev.sm,
                        avatarSize: 24
                    }
                },
                a = {
                    style0: { ...o(699422).RC
                    },
                    style1: {
                        opacity: .5
                    }
                };

            function s({
                avatarSize: e,
                format: t,
                isSingle: l,
                onClickRemove: d,
                renderAvatar: c,
                showRemoveButton: u,
                shouldShrink: p,
                style: y,
                title: f
            }) {
                let m = (0, o(109939).tz)(),
                    {
                        height: x,
                        fontSize: S,
                        margin: b,
                        marginEditState: v,
                        closeIconSize: h,
                        avatarSize: g
                    } = i[t],
                    j = (0, o(960253).I)(() => ({
                        root: {
                            display: "flex",
                            alignItems: "center",
                            flexShrink: +!!p,
                            minWidth: 0,
                            height: x,
                            borderRadius: 6,
                            fontSize: S,
                            lineHeight: "120%",
                            margin: l ? 0 : u ? v : b,
                            ...y
                        }
                    }), [S, x, l, b, v, p, u, y]);
                return (0, n.jsxs)("div", {
                    style: j.root,
                    children: [null == c ? void 0 : c(e ? ? g), (0, n.jsx)("div", {
                        className: "notranslate",
                        style: a.style0,
                        children: f
                    }), u ? (0, n.jsx)(o(64960).Ay, {
                        ariaLabel: void 0 !== f ? m.formatMessage(r.removeTokenLabel, {
                            title: f
                        }) : m.formatMessage(r.removeTokenLabelGeneric),
                        onClick: d,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: x,
                            height: x,
                            marginInlineStart: 2,
                            marginInlineEnd: 2,
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: 6
                        },
                        children: (0, n.jsx)(o(16275).I, {
                            icon: o(519529).xMarkFillSmallIcon,
                            size: h,
                            style: a.style1
                        })
                    }) : null]
                })
            }
        },
        391343: (e, t, o) => {
            o.d(t, {
                A: () => r
            }), o(296540);
            var n = o(474848);

            function r(e) {
                let t = (0, o(47187).E)(e);
                return (0, n.jsx)("div", {
                    style: t.iconContainer,
                    children: (0, n.jsx)(o(16275).I, {
                        icon: o(407598).peopleFillIcon,
                        size: t.icon.width,
                        colorVariant: "secondary"
                    })
                })
            }
        },
        428602: (e, t, o) => {
            o.d(t, {
                Y: () => l
            }), o(296540);
            var n = o(474848);
            let r = {
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
                l = (0, o(104509).wt)("viewCalendarSmall", r, "small")
        },
        488098: (e, t, o) => {
            o.d(t, {
                L: () => l
            });
            var n = () => o(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        type: "closed"
                    }
                }
            }
            let l = new r;
            (0, o(202146).exposeDebugValue)("automationBuilderModalStore", l)
        },
        503473: (e, t, o) => {
            o.d(t, {
                j: () => i
            });
            var n = o(296540),
                r = o(474848);
            let l = {
                khDVqt: "xuxw1ft",
                kXHlph: "x6ikm8r",
                kORKVm: "x10wlt62",
                kg5iWk: "xlyipyv",
                $$css: !0
            };

            function i(e) {
                let {
                    children: t,
                    style: i,
                    overlayContainerZIndex: a,
                    placement: s = "bottom",
                    tooltipStyle: d
                } = e, {
                    isSafari: c
                } = (0, o(533992).Y0)(), u = (0, n.useRef)(null), p = function(e) {
                    let [t, o] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        let {
                            current: t
                        } = e;
                        if (!t) return void o(!1);
                        let n = "ResizeObserver" in window ? new ResizeObserver(([e]) => {
                            o(e.target.scrollWidth > e.target.clientWidth)
                        }) : void 0;
                        return null == n || n.observe(t), () => null == n ? void 0 : n.unobserve(t)
                    }, []), t
                }(u);
                return (0, r.jsx)(o(51831).m, {
                    delayThreshold: 500,
                    placement: s,
                    textWrap: !0,
                    style: d,
                    overlayContainerZIndex: a,
                    forceVisibleState: !!p && void 0,
                    disableTooltip: c,
                    content: () => p ? t : void 0,
                    children: e => (0, r.jsx)("div", {
                        ref: u,
                        ...o(952687).A.props(l, i),
                        ...e,
                        children: t
                    })
                })
            }
        },
        523288: (e, t, o) => {
            o.d(t, {
                Q: () => n
            });

            function n(e) {
                let {
                    collectionStore: t,
                    blockStore: n
                } = e, r = t ? (0, o(986629).by)(t.getFormat(), t.getSchema(), t.id) : void 0, l = null == r ? void 0 : r.property;
                if (!r || !l) return !1;
                let i = n.getSchema();
                if (!i) return !1;
                let a = i[l];
                return !!a && "relation" === a.type && (0, o(149267).r)({
                    store: n,
                    subitemFormat: r,
                    propertySchema: a,
                    includeNoAccess: !0
                }).length > 0
            }
        },
        594014: (e, t, o) => {
            o.d(t, {
                m: () => l
            });
            var n = o(296540),
                r = o(474848);
            let l = n.memo(function(e) {
                let {
                    textValue: t
                } = e, l = (0, n.useMemo)(() => (0, o(862060).X1)((0, o(862060).eC)(t)), [t]);
                return (0, r.jsx)("span", {
                    children: l
                })
            })
        },
        627125: (e, t, o) => {
            o.d(t, {
                z: () => n
            });

            function n(e) {
                switch (null == e ? void 0 : e.type) {
                    case "url":
                    case "email":
                    case "phone_number":
                        return e;
                    default:
                        return
                }
            }
        },
        652771: (e, t, o) => {
            o.d(t, {
                Dd: () => v,
                ER: () => S,
                I8: () => c,
                S1: () => u,
                V6: () => f,
                _Z: () => b,
                ej: () => m,
                h3: () => p,
                jd: () => d,
                nD: () => y,
                xV: () => x,
                zg: () => a
            }), o(581454);
            var n = o(296540),
                r = o(474848);
            let l = [],
                i = {
                    overflowIndicator: {
                        marginInlineEnd: 4,
                        color: o(632079).Tj.text.secondary
                    },
                    tooltip: {
                        padding: 8
                    },
                    remainderPropertiesContainer: {
                        display: "flex",
                        flexWrap: "wrap",
                        fontWeight: o(699422).Wy.regular,
                        width: "max-content",
                        maxWidth: "240px",
                        gap: 4
                    },
                    selectToken: {
                        margin: 0
                    },
                    chevronIcon: {
                        marginInlineEnd: -4,
                        flexShrink: 0
                    }
                },
                a = n.memo((0, n.forwardRef)(function(e, t) {
                    let {
                        buttonStyle: a,
                        editButtonClickProps: d,
                        property: c,
                        EmptyComponent: u,
                        onContextMenu: p,
                        tokenLimit: y,
                        tokenLimitThreshold: f,
                        store: m,
                        quickActionButtons: x,
                        width: S,
                        limitTokensToSingleTruncatedLine: b,
                        userExpandable: v,
                        formQuestionStore: h,
                        collectionSchema: g,
                        generateButtonStyles: j
                    } = e, {
                        propertySchema: k,
                        baseStyles: w,
                        shouldRenderTooltip: I
                    } = (0, n.useContext)(o(422575).L8), _ = (0, o(916769).Ug)(null == w ? void 0 : w.tokenFormat), C = (null == k ? void 0 : k.options) ? ? l, T = null == k ? void 0 : k.type, P = (0, o(682985).K8)(() => m.getPropertyValue(c), [m, c]), [R, A] = (0, n.useMemo)(() => {
                        let e = [];
                        if ("select" === T) {
                            let t = o(561872).fF(P, C);
                            e = t ? [t] : []
                        } else e = o(561872).J4(P, C);
                        h && (e = e.map(e => ({ ...e,
                            color: "default"
                        })));
                        let t = void 0 !== y,
                            n = void 0 === f || e.length >= f,
                            r = t && n;
                        return [r ? e.slice(0, y) : e, r ? e.slice(y) : []]
                    }, [T, y, f, P, C, h]), E = void 0 !== h && R.length > 0, B = (0, o(960253).I)(() => ({
                        buttonStyle: { ...w.buttonStyle,
                            ...a,
                            ...(null == j ? void 0 : j(0 === R.length)) || {}
                        },
                        buttonPressedStyle: w.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: w.buttonHoveredStyle ? ? {},
                        tokenContainer: b ? {
                            display: "flex",
                            flexWrap: "nowrap",
                            ...o(699422).RC
                        } : {
                            alignItems: "center"
                        },
                        moreToken: {
                            margin: 0,
                            ...b ? {
                                flexShrink: 0
                            } : {}
                        },
                        propertyValuesWrapper: {
                            width: "100%",
                            display: E ? "inline-flex" : void 0,
                            justifyContent: "space-between",
                            alignItems: "center"
                        }
                    }), [w.buttonHoveredStyle, w.buttonPressedStyle, w.buttonStyle, a, j, b, R.length, E]);
                    return null != R && R.length || void 0 !== u ? (0, r.jsx)(o(858439).P, {
                        ref: t,
                        editButtonClickProps: d,
                        onContextMenu: p,
                        style: B.buttonStyle,
                        hoveredStyle: B.buttonHoveredStyle,
                        pressedStyle: B.buttonPressedStyle,
                        quickActionButtons: x,
                        width: S,
                        userExpandable: v,
                        formQuestionStore: h,
                        collectionSchema: g,
                        children: null != R && R.length || void 0 === u ? (0, r.jsxs)("div", {
                            style: B.propertyValuesWrapper,
                            children: [(0, r.jsx)(s, {
                                shownOptions: R,
                                hiddenOptions: A,
                                tokenLimit: y,
                                tokenFormat: _,
                                styles: { ...B,
                                    ...i
                                },
                                store: m,
                                property: c,
                                parentHasTooltip: I
                            }), E ? (0, r.jsx)("div", {
                                style: i.chevronIcon,
                                children: (0, r.jsx)(o(16275).I, {
                                    icon: o(826725).T,
                                    size: "sm",
                                    colorVariant: "tertiary"
                                })
                            }) : null]
                        }) : (0, r.jsx)(u, {})
                    }) : null
                }));

            function s({
                shownOptions: e,
                hiddenOptions: t,
                tokenLimit: n,
                styles: l,
                tokenFormat: i,
                store: a,
                property: d,
                parentHasTooltip: c
            }) {
                let u = (0, o(960253).e)(),
                    p = (0, o(486536).v)({
                        blockId: null == a ? void 0 : a.id,
                        propertyId: d
                    }),
                    y = (0, o(601264).s)({
                        propertyId: d,
                        store: a
                    }),
                    f = !!y,
                    m = (0, o(960253).I)(() => {
                        let e = f || p ? { ...(0, o(605351).sQ)(u),
                                paddingTop: 4,
                                paddingBottom: 4,
                                flexWrap: "wrap",
                                lineHeight: 2,
                                display: "inline"
                            } : {},
                            t = f || p ? {
                                marginInlineStart: 3,
                                marginInlineEnd: 3,
                                maxWidth: "fit-content",
                                display: "inline-flex"
                            } : {};
                        return {
                            tokenContainer: { ...e,
                                ...l.tokenContainer
                            },
                            selectTokenHighlightStyle: t
                        }
                    }, [p, l.tokenContainer, u, f]);
                return (0, r.jsxs)(o(27507).h, {
                    style: m.tokenContainer,
                    className: y,
                    children: [e.map(e => (0, r.jsx)(o(348565).X, {
                        type: "select",
                        value: e.value,
                        description: e.description,
                        color: e.color,
                        shouldShrink: !!n,
                        style: m.selectTokenHighlightStyle,
                        shouldShowTooltip: !c
                    }, e.id)), t.length > 0 ? (0, r.jsx)(o(51831).m, {
                        style: l.tooltip,
                        content: () => (0, r.jsx)("div", {
                            style: l.remainderPropertiesContainer,
                            children: t.map(e => (0, r.jsx)(o(348565).X, {
                                type: "select",
                                value: e.value,
                                color: e.color,
                                shouldShrink: !1
                            }, e.id))
                        }),
                        isLightBackground: !0,
                        textWrap: !0,
                        alignment: "center",
                        placement: "bottom",
                        children: e => (0, r.jsx)("div", { ...e,
                            children: (0, r.jsx)(o(569726).A, {
                                count: t.length,
                                format: i,
                                fixedHeight: !1,
                                style: l.moreToken,
                                isCompact: !0
                            })
                        })
                    }) : void 0]
                })
            }
            let d = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i
                    } = e, {
                        shouldWrap: s
                    } = (0, n.useContext)(o(422575).L8), d = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(622031).qO, {
                            store: l,
                            property: i
                        }, "workflow-autofill"), (0, r.jsx)(o(137955).b, {
                            store: l,
                            property: i,
                            openOverlay: !0
                        }, "autofill"), (0, r.jsx)(o(243904).k, {}, "comment")]
                    }), [i, l]), c = v(e, t);
                    return (0, r.jsx)(a, { ...c,
                        EmptyComponent: o(959110).rW,
                        quickActionButtons: d,
                        userExpandable: s
                    })
                }),
                c = (0, n.forwardRef)(function(e, t) {
                    let l = v(e, t),
                        {
                            store: i,
                            property: s
                        } = e,
                        d = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o(622031).qO, {
                                store: i,
                                property: s
                            }, "workflow-autofill"), (0, r.jsx)(o(137955).b, {
                                store: i,
                                property: s,
                                openOverlay: !0
                            }, "autofill"), (0, r.jsx)(o(243904).k, {}, "comment")]
                        }), [s, i]);
                    return (0, r.jsx)(a, { ...l,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: d
                    })
                }),
                u = (0, n.forwardRef)(function(e, t) {
                    let l = v(e, t),
                        {
                            store: i,
                            property: s
                        } = e,
                        d = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o(137955).b, {
                                store: i,
                                property: s,
                                openOverlay: !0
                            }, "autofill"), (0, r.jsx)(o(243904).k, {}, "comment")]
                        }), [s, i]);
                    return (0, r.jsx)(a, { ...l,
                        EmptyComponent: o(959110).ao,
                        tokenLimit: 1,
                        quickActionButtons: d,
                        limitTokensToSingleTruncatedLine: !0
                    })
                }),
                p = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "multi_select"
                    }), i = v(e, t, l);
                    return (0, r.jsx)(a, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                y = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = v(e, t), {
                        tokenLimit: i,
                        tokenLimitThreshold: s
                    } = (0, o(682985).K8)(() => (0, o(940270).fr)(e.collectionViewStore), [e.collectionViewStore]);
                    return (0, r.jsx)(a, { ...l,
                        EmptyComponent: n ? o(959110).Jb : void 0,
                        tokenLimit: i,
                        tokenLimitThreshold: s
                    })
                }),
                f = (0, n.forwardRef)(function(e, t) {
                    let o = v(e, t);
                    return (0, r.jsx)(a, { ...o
                    })
                }),
                m = (0, n.forwardRef)(function(e, t) {
                    let o = v(e, t);
                    return (0, r.jsx)(a, { ...o
                    })
                }),
                x = (0, n.forwardRef)(function(e, t) {
                    let o = v(e, t);
                    return (0, r.jsx)(a, { ...o
                    })
                }),
                S = (0, n.forwardRef)(function(e, t) {
                    let o = v(e, t);
                    return (0, r.jsx)(a, { ...o
                    })
                }),
                b = (0, n.forwardRef)(function(e, t) {
                    let n = v(e, t);
                    return (0, r.jsx)(a, { ...n,
                        EmptyComponent: o(959110).Fe,
                        tokenLimit: 1
                    })
                });

            function v(e, t, n) {
                let {
                    store: r,
                    collectionStore: l,
                    property: i,
                    onContextMenu: a,
                    width: s
                } = e;
                return {
                    ref: t,
                    store: r,
                    collectionStore: l,
                    property: i,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onContextMenu: a,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    width: s
                }
            }
        },
        674829: (e, t, o) => {
            o.d(t, {
                A: () => l
            });
            var n = () => o(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        editMode: void 0,
                        store: void 0
                    }
                }
                cloneState() {
                    return o(381453).o8(this.state)
                }
            }
            let l = new r
        },
        682006: (e, t, o) => {
            o.d(t, {
                a: () => r
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.37 1.37 13.25 13.25",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M3.25 1.375c-1.036 0-1.875.84-1.875 1.875v6c0 1.036.84 1.875 1.875 1.875h1.625v1.625c0 1.036.84 1.875 1.875 1.875h6c1.036 0 1.875-.84 1.875-1.875v-6c0-1.036-.84-1.875-1.875-1.875h-1.625V3.25c0-1.036-.84-1.875-1.875-1.875zM2.625 3.25c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v1.625H6.75c-1.036 0-1.875.84-1.875 1.875v3.125H3.25a.625.625 0 0 1-.625-.625zm3.5 3.5c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v6c0 .345-.28.625-.625.625h-6a.625.625 0 0 1-.625-.625z"
                    })
                },
                r = (0, o(104509).wt)("duplicateSmall", n, "small")
        },
        721089: (e, t, o) => {
            o.d(t, {
                R: () => l
            }), o(296540);
            var n = o(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.61 3.05 9.98 9.9",
                    directional: !0,
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8.002 3.238a.625.625 0 0 0-.884 0l-4.32 4.32a.625.625 0 0 0 0 .884l4.32 4.32a.625.625 0 0 0 .884-.884L4.124 8l3.878-3.878a.625.625 0 0 0 0-.884"
                        }), (0, n.jsx)("path", {
                            d: "M12.402 3.238a.625.625 0 0 0-.884 0l-4.32 4.32a.625.625 0 0 0 0 .884l4.32 4.32a.625.625 0 0 0 .884-.884L8.524 8l3.878-3.878a.625.625 0 0 0 0-.884"
                        })]
                    })
                },
                l = (0, o(104509).wt)("arrowChevronDoubleBackwardSmall", r, "small")
        },
        730616: (e, t, o) => {
            o.d(t, {
                C: () => n
            });

            function n(e) {
                let {
                    store: t,
                    transient: n
                } = e;
                o(596184).A.setState({
                    isActive: !0,
                    store: t,
                    transient: !!n
                })
            }
        },
        748593: (e, t, o) => {
            o.d(t, {
                Z: () => r
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.85 1.57 9.98 12.06",
                    directional: !0,
                    svg: (0, o(474848).jsx)("path", {
                        d: "M7.442 1.758a.625.625 0 0 0-.884 0l-3.52 3.52a.625.625 0 1 0 .884.884l2.453-2.453V11.8c0 1.008.817 1.825 1.825 1.825h4a.625.625 0 1 0 0-1.25h-4a.575.575 0 0 1-.575-.575V3.709l2.453 2.453a.625.625 0 0 0 .884-.884z"
                    })
                },
                r = (0, o(104509).wt)("arrowTurnLeftUpSmall", n, "small")
        },
        765815: (e, t, o) => {
            o.d(t, {
                z: () => n
            });

            function n(e) {
                let t = e.getAliasTargetStore();
                return (null == t ? void 0 : t.table) === o(832375).evP ? t : e
            }
        },
        778584: (e, t, o) => {
            o.d(t, {
                v: () => ok
            }), o(898992), o(737550);
            var n = o(296540),
                r = o(474848);
            let l = n.memo((0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        collectionStore: i,
                        buttonStyle: a,
                        onContextMenu: s,
                        quickActionButtons: d,
                        property: c
                    } = e, {
                        baseStyles: u
                    } = (0, n.useContext)(o(422575).L8), p = (0, o(682985).K8)(() => {
                        var e;
                        let t = l.getPropertyValue(c),
                            n = null == i || null == (e = i.getRecordKeyStore()) ? void 0 : e.getRecordKey(),
                            r = (0, o(561872).On)(t);
                        return void 0 === r ? "..." : (0, o(154326).H4)(n, r)
                    }, [i, c, l]), y = (0, o(960253).I)(() => ({
                        buttonStyle: { ...u.buttonStyle,
                            ...a
                        },
                        buttonPressedStyle: u.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: u.buttonHoveredStyle ? ? {}
                    }), [u.buttonHoveredStyle, u.buttonPressedStyle, u.buttonStyle, a]);
                    return (0, r.jsx)(o(858439).P, {
                        ref: t,
                        style: y.buttonStyle,
                        hoveredStyle: y.buttonHoveredStyle,
                        pressedStyle: y.buttonPressedStyle,
                        onContextMenu: s,
                        quickActionButtons: d,
                        editButtonClickProps: void 0,
                        children: (0, r.jsx)(o(361724).C, {
                            fontColor: "light",
                            children: p
                        })
                    })
                })),
                i = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: n,
                        property: i,
                        surface: a
                    } = e, s = (0, o(533992).WS)(), d = x(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).page.text
                        }
                    }), [s]));
                    return (0, r.jsx)(l, { ...d,
                        quickActionButtons: (0, r.jsx)(o(965192).i, {
                            store: n,
                            property: i,
                            surface: a
                        })
                    })
                }),
                a = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: n,
                        property: i,
                        surface: a
                    } = e, {
                        isPhone: s
                    } = (0, o(533992).Y0)(), d = x(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).table.text
                        }
                    }), [s]));
                    return (0, r.jsx)(l, { ...d,
                        quickActionButtons: o(986939).A.isMobile ? void 0 : (0, r.jsx)(o(965192).i, {
                            store: n,
                            property: i,
                            surface: a
                        }, "copy")
                    })
                }),
                s = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: n,
                        property: i,
                        surface: a
                    } = e, {
                        isPhone: s
                    } = (0, o(533992).Y0)(), d = x(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).compact_page.text
                        }
                    }), [s]));
                    return (0, r.jsx)(l, { ...d,
                        quickActionButtons: o(986939).A.isMobile ? void 0 : (0, r.jsx)(o(965192).i, {
                            store: n,
                            property: i,
                            surface: a
                        }, "copy")
                    })
                }),
                d = (0, n.forwardRef)(function(e, t) {
                    let o = x(e, t);
                    return (0, r.jsx)(l, { ...o
                    })
                }),
                c = (0, n.forwardRef)(function(e, t) {
                    let n = (0, o(228315).F)({
                            ref: t,
                            collectionStore: e.collectionStore,
                            property: e.property,
                            propertyType: "auto_increment_id"
                        }),
                        i = x(e, t, n);
                    return (0, r.jsx)(l, { ...i
                    })
                }),
                u = (0, n.forwardRef)(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        i = x(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).card.text
                            }
                        }), [n]));
                    return (0, r.jsx)(l, { ...i
                    })
                }),
                p = (0, n.forwardRef)(function(e, t) {
                    let o = x(e, t);
                    return (0, r.jsx)(l, { ...o
                    })
                }),
                y = (0, n.forwardRef)(function(e, t) {
                    let o = x(e, t);
                    return (0, r.jsx)(l, { ...o
                    })
                }),
                f = (0, n.forwardRef)(function(e, t) {
                    let o = x(e, t);
                    return (0, r.jsx)(l, { ...o
                    })
                }),
                m = (0, n.forwardRef)(function(e, t) {
                    let o = x(e, t);
                    return (0, r.jsx)(l, { ...o
                    })
                });

            function x(e, t, o) {
                let {
                    store: n,
                    collectionStore: r,
                    property: l,
                    onContextMenu: i
                } = e;
                return {
                    ref: t,
                    store: n,
                    collectionStore: r,
                    property: l,
                    onContextMenu: i,
                    buttonStyle: null == o ? void 0 : o.buttonStyle
                }
            }
            let S = n.memo((0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        collectionStore: a,
                        buttonStyle: s,
                        innerButtonStyle: d,
                        onContextMenu: c,
                        disabled: u
                    } = e, p = (0, o(109939).tz)(), [y, f] = (0, n.useState)(!1), m = (0, o(533992).v3)(), {
                        baseStyles: x,
                        propertySchema: S,
                        collectionContextStore: b
                    } = (0, n.useContext)(o(422575).L8), v = (null == x ? void 0 : x.sizing) ? ? "default", {
                        value: h
                    } = (0, o(815048).fJ)(o(864850).T.formulas), {
                        value: g
                    } = (0, o(815048).fJ)(o(879267).QV.automationTypecheck), {
                        value: j
                    } = (0, o(815048).fJ)(o(879267).QV.automationActionRegistry), k = (0, o(682985).K8)(() => {
                        if (null != S && S.automation_id) return o(698405).d.createChildStore(a, {
                            table: o(832375).yBS,
                            id: S.automation_id,
                            spaceId: a.getSpaceId()
                        })
                    }, [a, S]), w = (0, o(470569).o)(k), I = null == b ? void 0 : b.settingsStore, _ = (0, o(682985).K8)(() => {
                        let e = m.currentUser.id;
                        if (h && g && j && (null == S ? void 0 : S.type) === "button" && S.automation_id && l.isPageBlock() && k) return {
                            type: "button_property",
                            persisted: !0,
                            automationStore: k,
                            property: i,
                            propertySchema: S,
                            intl: p,
                            parentRecordStore: k,
                            currentUserId: e,
                            pageStore: l,
                            formulasModule: h,
                            isLoggedIn: m.currentUser.isLoggedIn(),
                            automationTypecheckModule: g,
                            automationActionRegistryModule: j
                        }
                    }, [m.currentUser, h, g, j, S, l, k, i, p]), C = !(0, o(682985).O$)(o(205885).e), {
                        isDisabled: T,
                        hasError: P
                    } = (0, o(682985).K8)(() => {
                        if (C || !_) return {
                            isDisabled: !0,
                            hasError: !1
                        };
                        let e = (0, o(495396).lp)({
                                environment: m,
                                subscriptionInfo: w,
                                ..._
                            }).state,
                            t = "sufficient" === e.executionPermissionStatus;
                        return {
                            isDisabled: u || !t || !l.canEdit() || y,
                            hasError: (0, o(722371).O9)(e.typecheckResult) && o(300441).Q.isSuccess(e.typecheckResult) && (0, o(167869).x4)(e.typecheckResult.value)
                        }
                    }, [m, w, u, _, l, y, C]), R = (0, n.useCallback)(async () => {
                        if (_) {
                            if (P) {
                                b && I && S && o(918712).h({
                                    environment: m,
                                    mode: "edit_button_property",
                                    collectionSettingsStore: I,
                                    collectionStore: b.collectionStore(),
                                    collectionViewBlockStore: b.collectionViewBlockStore(),
                                    collectionViewStore: b.collectionViewStore(),
                                    disableCollectionSettingsInput: "collectionTypedView" === b.contextTypeFromStoreState,
                                    property: i,
                                    propertySchema: S
                                });
                                return
                            }
                            try {
                                var e;
                                f(!0);
                                let {
                                    automationExecutionActions: t
                                } = await o(879267).QV.automations.load();
                                await t.executeClientAutomation({
                                    environment: m,
                                    clientContext: _
                                }), null != (e = m.mobileNative) && e.buzz ? m.mobileNative.buzz() : window.navigator.vibrate(20)
                            } finally {
                                f(!1)
                            }
                        }
                    }, [_, b, I, m, P, i, S]), A = (0, o(682985).K8)(() => (null == _ ? void 0 : _.automationStore.getNameStore().getValue()) ? ? (null == S ? void 0 : S.name), [null == _ ? void 0 : _.automationStore, null == S ? void 0 : S.name]), E = (0, o(682985).K8)(() => {
                        if (!o(986939).A.isMobile) return (0, o(495396).nD)(null == _ ? void 0 : _.automationStore)
                    }, [_]), B = !A || 0 === A.length, M = (0, o(960253).I)(() => ({
                        buttonStyle: { ...x.buttonStyle,
                            ...s
                        },
                        buttonPressedStyle: x.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: x.buttonHoveredStyle ? ? {},
                        innerButtonStyle: {
                            pointerEvents: "auto",
                            overflow: "hidden",
                            height: "small" === v ? 20 : 24,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...d
                        },
                        innerButtonLabelStyle: {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: B ? o(632079).Tj.text.tertiary : void 0
                        }
                    }), [x.buttonHoveredStyle, x.buttonPressedStyle, x.buttonStyle, s, d, B, v]), z = e => (0, r.jsx)(o(548436).A, {
                        disabled: T,
                        disabledFeedback: !0,
                        size: "sm",
                        onClick: R,
                        style: M.innerButtonStyle,
                        ...e,
                        children: (0, r.jsx)("span", {
                            style: M.innerButtonLabelStyle,
                            children: B ? (0, r.jsx)(o(109939).sA, { ...o(302819).yn.buttonPlaceholder
                            }) : A
                        })
                    });
                    return (0, r.jsx)(o(858439).P, {
                        ref: t,
                        style: M.buttonStyle,
                        hoveredStyle: M.buttonHoveredStyle,
                        pressedStyle: M.buttonPressedStyle,
                        editButtonClickProps: void 0,
                        onContextMenu: c,
                        tooltipHide: (0, o(722371).O9)(E),
                        tooltipPropertyValue: C ? (0, r.jsx)(o(109939).sA, { ...o(233319).AY.unavailableOfflineTooltip
                        }) : void 0,
                        children: P ? (0, r.jsx)(o(51831).m, {
                            placement: "right",
                            content: () => (0, r.jsx)(o(879267).Od, {
                                content: (0, r.jsx)(o(109939).sA, { ...o(977441).A.buttonPropertyErrorTooltip
                                }),
                                subtitle: (0, r.jsx)(o(109939).sA, { ...o(302819).yn.clickToEdit
                                })
                            }),
                            children: z
                        }) : E ? (0, r.jsx)(o(879267).Vp, {
                            parentStore: l,
                            urlToPreview: E,
                            children: z
                        }) : z()
                    })
                })),
                b = {
                    innerButtonStyle: {
                        maxWidth: "100%"
                    }
                },
                v = (0, n.forwardRef)(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = E(e, t, { ...(0, o(960253).I)(() => ({
                                buttonStyle: { ...(0, o(642065)._Q)({
                                        isPhone: n
                                    }).table.button
                                }
                            }), [n]),
                            ...b
                        });
                    return (0, r.jsx)(S, { ...l
                    })
                }),
                h = (0, n.forwardRef)(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = E(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).page.button
                            }
                        }), [n]));
                    return (0, r.jsx)(S, { ...l
                    })
                }),
                g = (0, n.forwardRef)(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = E(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).compact_page.button
                            }
                        }), [n]));
                    return (0, r.jsx)(S, { ...l
                    })
                }),
                j = (0, n.forwardRef)(function(e, t) {
                    let o = E(e, t);
                    return (0, r.jsx)(S, { ...o
                    })
                }),
                k = (0, n.forwardRef)(function(e, t) {
                    let n = (0, o(228315).F)({
                            ref: t,
                            collectionStore: e.collectionStore,
                            property: e.property,
                            propertyType: "button"
                        }),
                        l = E(e, t, n);
                    return (0, r.jsx)(S, { ...l
                    })
                }),
                w = {
                    innerButtonStyle: {
                        height: 24
                    }
                },
                I = (0, n.forwardRef)(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = E(e, t, { ...(0, o(960253).I)(() => ({
                                buttonStyle: { ...(0, o(642065)._Q)({
                                        isPhone: n
                                    }).card.button
                                }
                            }), [n]),
                            ...w
                        });
                    return (0, r.jsx)(S, { ...l
                    })
                }),
                _ = (0, n.forwardRef)(function(e, t) {
                    let o = E(e, t);
                    return (0, r.jsx)(S, { ...o
                    })
                }),
                C = {
                    buttonStyle: {
                        maxWidth: 200
                    }
                },
                T = (0, n.forwardRef)(function(e, t) {
                    let o = E(e, t, C);
                    return (0, r.jsx)(S, { ...o
                    })
                }),
                P = {
                    buttonStyle: {
                        height: void 0
                    }
                },
                R = (0, n.forwardRef)(function(e, t) {
                    let o = E(e, t, P);
                    return (0, r.jsx)(S, { ...o
                    })
                }),
                A = (0, n.forwardRef)(function(e, t) {
                    let o = E(e, t);
                    return (0, r.jsx)(S, { ...o
                    })
                });

            function E(e, t, o) {
                let {
                    store: n,
                    collectionStore: r,
                    property: l,
                    disabled: i,
                    onContextMenu: a
                } = e;
                return {
                    ref: t,
                    store: n,
                    collectionStore: r,
                    property: l,
                    disabled: i,
                    onContextMenu: a,
                    buttonStyle: null == o ? void 0 : o.buttonStyle,
                    innerButtonStyle: null == o ? void 0 : o.innerButtonStyle
                }
            }
            let B = n.memo(n.forwardRef(function(e, t) {
                let {
                    store: l,
                    property: i,
                    enablePointerEventsForInteractiveTypes: a,
                    editButtonClickProps: s,
                    onClick: d,
                    onContextMenu: c,
                    buttonStyle: u,
                    showLabel: p,
                    disabled: y,
                    quickActionButtons: f,
                    width: m
                } = e, x = (0, o(533992).v3)(), S = (0, o(682985).K8)(() => (0, o(896216).w)(l.getPropertyValue(i)), [i, l]), {
                    baseStyles: b,
                    propertySchema: v,
                    surface: h,
                    collectionContextStore: g
                } = (0, n.useContext)(o(422575).L8), j = M(l, i, y), k = (0, n.useCallback)(() => {
                    let e = l.getPropertyStore(i);
                    if (e) {
                        var t, n, r;
                        let a = l.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "BlockPropertyValue.handleEditButtonClick",
                            environment: x,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                o(576186).qS({
                                    stores: [l],
                                    property: i,
                                    transaction: e
                                })
                            }
                        }), (0, o(85868).E)({
                            environment: x,
                            collection_id: null == g || null == (t = g.collectionStore()) ? void 0 : t.id,
                            collection_view_id: null == g || null == (n = g.collectionViewStore()) ? void 0 : n.id,
                            collection_view_block_id: null == g || null == (r = g.collectionViewBlockStore()) ? void 0 : r.id,
                            block_id: e.id,
                            property: i,
                            property_type: "checkbox",
                            from: (0, o(793550).zP)(h),
                            isFromBulkActionsToolbar: !1
                        })
                    }
                    d && d()
                }, [g, x, h, d, i, l]), w = (0, o(960253).I)(() => ({
                    buttonStyle: { ...b.buttonStyle,
                        ...u
                    },
                    buttonPressedStyle: b.buttonPressedStyle ? ? {},
                    buttonHoveredStyle: b.buttonHoveredStyle ? ? {}
                }), [b, u]);
                return (0, r.jsx)(o(858439).P, {
                    ref: t,
                    onContextMenu: c,
                    editButtonClickProps: s,
                    style: w.buttonStyle,
                    hoveredStyle: w.buttonHoveredStyle,
                    pressedStyle: w.buttonPressedStyle,
                    quickActionButtons: f,
                    width: m,
                    children: (0, r.jsx)(o(435524).o, {
                        propertyLabel: p ? null == v ? void 0 : v.name : void 0,
                        checked: S,
                        enablePointerEventsForInteractiveTypes: a,
                        onClick: k,
                        disabled: j,
                        store: l,
                        property: i
                    })
                })
            }));

            function M(e, t, n) {
                return (0, o(682985).K8)(() => n || !e.canEdit() || (0, o(235089).u)(t) || (0, o(444285).S)(e), [n, t, e])
            }
            let z = n.forwardRef(function(e, t) {
                    let {
                        store: l,
                        property: i
                    } = e, a = (0, o(533992).WS)(), s = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: a
                            }).table.checkbox
                        }
                    }), [a]), d = (0, n.useMemo)(() => (0, r.jsx)(o(622031).qO, {
                        store: l,
                        property: i
                    }, "workflow-autofill"), [i, l]), c = N(e, t, s);
                    return (0, r.jsx)(B, { ...c,
                        showLabel: !1,
                        quickActionButtons: d
                    })
                }),
                L = n.forwardRef(function(e, t) {
                    let {
                        store: l,
                        property: i
                    } = e, a = (0, o(533992).WS)(), s = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: a
                            }).page.checkbox
                        }
                    }), [a]), d = (0, n.useMemo)(() => (0, r.jsx)(o(622031).qO, {
                        store: l,
                        property: i
                    }, "workflow-autofill"), [i, l]), c = N(e, t, s);
                    return (0, r.jsx)(B, { ...c,
                        showLabel: !1,
                        collectionStore: e.collectionStore,
                        quickActionButtons: d
                    })
                }),
                V = n.forwardRef(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = N(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).compact_page.checkbox
                            }
                        }), [n]));
                    return (0, r.jsx)(B, { ...l,
                        showLabel: !1
                    })
                }),
                K = {
                    buttonStyle: {
                        minWidth: "fit-content"
                    }
                },
                F = n.forwardRef(function(e, t) {
                    let o = N(e, t, K);
                    return (0, r.jsx)(B, { ...o,
                        showLabel: !1
                    })
                }),
                W = n.forwardRef(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = N(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).card.checkbox,
                                width: "unset",
                                minWidth: "unset"
                            }
                        }), [n]));
                    return (0, r.jsx)(B, { ...l,
                        showLabel: !0
                    })
                }),
                H = n.forwardRef(function(e, t) {
                    let o = N(e, t);
                    return (0, r.jsx)(B, { ...o,
                        showLabel: !0
                    })
                }),
                D = n.forwardRef(function(e, t) {
                    let o = N(e, t);
                    return (0, r.jsx)(B, { ...o,
                        showLabel: !1
                    })
                }),
                Q = n.forwardRef(function(e, t) {
                    let o = N(e, t);
                    return (0, r.jsx)(B, { ...o,
                        showLabel: !1
                    })
                }),
                q = n.forwardRef(function(e, t) {
                    let o = N(e, t);
                    return (0, r.jsx)(B, { ...o,
                        showLabel: !1
                    })
                }),
                O = n.forwardRef(function(e, t) {
                    let o = N(e, t);
                    return (0, r.jsx)(B, { ...o,
                        showLabel: !1
                    })
                });

            function N(e, t, n) {
                let {
                    store: r,
                    disabled: l,
                    collectionStore: i,
                    property: a,
                    enablePointerEventsForInteractiveTypes: s,
                    onClick: d,
                    onContextMenu: c,
                    width: u
                } = e;
                return {
                    ref: t,
                    store: r,
                    disabled: l,
                    collectionStore: i,
                    property: a,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    enablePointerEventsForInteractiveTypes: s,
                    onClick: d,
                    onContextMenu: c,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    width: u
                }
            }
            let U = n.memo(n.forwardRef(function(e, t) {
                    let {
                        onContextMenu: l,
                        editButtonClickProps: i,
                        property: a,
                        store: s,
                        buttonStyle: d,
                        EmptyComponent: c,
                        quickActionButtons: u = [],
                        showIfEmpty: p,
                        width: y,
                        disableLinkify: f,
                        userExpandable: m
                    } = e, {
                        propertySchema: x,
                        baseStyles: S
                    } = (0, n.useContext)(o(422575).L8), b = (0, o(627125).z)(x), v = (0, o(682985).K8)(() => s.getPropertyValue(a), [a, s]), h = (0, o(682985).K8)(() => !!b && "url" === b.type && !b.show_full_url, [b]), g = (0, o(960253).I)(() => ({
                        buttonStyle: { ...S.buttonStyle,
                            ...d
                        },
                        buttonPressedStyle: S.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: S.buttonHoveredStyle ? ? {}
                    }), [S.buttonHoveredStyle, S.buttonPressedStyle, S.buttonStyle, d]);
                    return null != v && v.length || void 0 !== c ? (0, r.jsx)(o(858439).P, {
                        ref: t,
                        editButtonClickProps: i,
                        onContextMenu: l,
                        style: g.buttonStyle,
                        pressedStyle: g.buttonPressedStyle,
                        hoveredStyle: g.buttonHoveredStyle,
                        quickActionButtons: u,
                        width: y,
                        userExpandable: m,
                        children: null != v && v.length || void 0 === c ? b ? (0, r.jsx)(o(361724).C, {
                            children: (0, r.jsx)(o(763793).LE, {
                                type: b.type,
                                textValue: v,
                                useShortenedUrl: h,
                                disableLinkify: p || f,
                                store: s,
                                property: a
                            })
                        }) : null : (0, r.jsx)(c, {})
                    }) : null
                })),
                J = n.forwardRef(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, {
                        shouldWrap: s
                    } = (0, n.useContext)(o(422575).L8), d = (0, n.useMemo)(() => {
                        if (!o(986939).A.isMobile) return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o(622031).qO, {
                                store: l,
                                property: i
                            }, "workflow-autofill"), (0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                                store: l,
                                property: i,
                                surface: a
                            }, "copy")]
                        })
                    }, [a, i, l]), c = (0, o(533992).WS)(), u = er(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: c
                            }).table.text
                        }
                    }), [c]));
                    return (0, r.jsx)(U, { ...u,
                        EmptyComponent: o(959110).rW,
                        quickActionButtons: d,
                        userExpandable: s
                    })
                }),
                Y = n.forwardRef(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, s = (0, o(533992).WS)(), d = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).page.text
                        }
                    }), [s]), c = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(622031).qO, {
                            store: l,
                            property: i
                        }, "workflow-autofill"), (0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                            store: l,
                            property: i,
                            surface: a
                        }, "copy")]
                    }), [a, i, l]), u = er(e, t, d);
                    return (0, r.jsx)(U, { ...u,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: c
                    })
                }),
                $ = n.forwardRef(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, s = (0, o(533992).WS)(), d = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).compact_page.text
                        }
                    }), [s]), c = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                            store: l,
                            property: i,
                            surface: a
                        }, "copy"), (0, r.jsx)(o(622031).kF, {}, "visit")]
                    }), [a, i, l]), u = er(e, t, d);
                    return (0, r.jsx)(U, { ...u,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: c,
                        disableLinkify: !0
                    })
                }),
                G = n.forwardRef(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "phone_number"
                    }), i = er(e, t, l);
                    return (0, r.jsx)(U, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                Z = n.forwardRef(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(533992).WS)(), i = er(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: l
                            }).card.text
                        }
                    }), [l]));
                    return (0, r.jsx)(U, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                X = n.forwardRef(function(e, t) {
                    let o = er(e, t);
                    return (0, r.jsx)(U, { ...o
                    })
                }),
                ee = n.forwardRef(function(e, t) {
                    let o = er(e, t);
                    return (0, r.jsx)(U, { ...o
                    })
                }),
                et = n.forwardRef(function(e, t) {
                    let o = er(e, t);
                    return (0, r.jsx)(U, { ...o
                    })
                }),
                eo = n.forwardRef(function(e, t) {
                    let o = er(e, t);
                    return (0, r.jsx)(U, { ...o
                    })
                }),
                en = n.forwardRef(function(e, t) {
                    let n = er(e, t);
                    return (0, r.jsx)(U, { ...n,
                        EmptyComponent: o(959110).Fe,
                        showIfEmpty: !0
                    })
                });

            function er(e, t, n) {
                let {
                    store: r,
                    collectionStore: l,
                    property: i,
                    onContextMenu: a,
                    width: s
                } = e;
                return {
                    ref: t,
                    store: r,
                    collectionStore: l,
                    property: i,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onContextMenu: a,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    width: s
                }
            }
            o(581454);
            let el = new(o(815048)).O2("FilePropertyModule", async () => await o.e(5938).then(o.bind(o, 583265))),
                ei = (0, o(815048)._h)(el, e => e.FilePropertyModule),
                ea = n.memo(n.forwardRef(function(e, t) {
                    let {
                        store: l,
                        EmptyComponent: i,
                        onContextMenu: a,
                        buttonStyle: s,
                        selectableStyle: d,
                        property: c,
                        editButtonClickProps: u,
                        quickActionButtons: p,
                        width: y,
                        shouldDisableLinks: f,
                        shouldTruncateToSingleLine: m,
                        shouldLockImageAspectRatio: x,
                        userExpandable: S
                    } = e, b = (0, o(533992).v3)(), {
                        baseStyles: v,
                        collectionContextStore: h,
                        canEdit: g,
                        propertySchema: j
                    } = (0, n.useContext)(o(422575).L8), k = (0, o(9247).rz)(j), [w, I] = (0, n.useState)(void 0);
                    (0, n.useEffect)(() => {
                        I(l.clone())
                    }, [l]);
                    let _ = (0, n.useCallback)(e => {
                            o(576186).ho({
                                environment: b,
                                blockPropertyValueOverlayStore: u.blockPropertyValueOverlayStore,
                                store: l,
                                property: c,
                                surface: u.surface,
                                uploadFiles: e.files,
                                disableHorizontalEdgeScroll: u.disableHorizontalEdgeScroll,
                                collectionContextStore: h
                            })
                        }, [h, u.blockPropertyValueOverlayStore, u.disableHorizontalEdgeScroll, u.surface, b, c, l]),
                        C = (0, o(682985).K8)(() => {
                            let e = l.getPropertyValue(c);
                            return o(561872).pJ(e, k)
                        }, [k, c, l]),
                        T = (0, o(960253).I)(() => {
                            var e;
                            return {
                                buttonStyle: { ...v.buttonStyle,
                                    ...s
                                },
                                buttonPressedStyle: v.buttonPressedStyle ? ? {},
                                buttonHoveredStyle: v.buttonHoveredStyle ? ? {},
                                selectableStyle: {
                                    display: "inherit",
                                    borderRadius: null == (e = v.buttonStyle) ? void 0 : e.borderRadius,
                                    ...d
                                }
                            }
                        }, [v.buttonHoveredStyle, v.buttonPressedStyle, v.buttonStyle, s, d]),
                        P = !C || 0 === C.length,
                        R = P && void 0 !== i,
                        A = !P;
                    return w && (R || A) ? (0, r.jsx)(o(611752).Ay, {
                        store: w,
                        canNativeDropOnto: g,
                        onNativeDrop: _,
                        analyticsName: "file_property",
                        shouldShowDropZone: g,
                        style: T.selectableStyle,
                        children: (0, r.jsxs)(o(858439).P, {
                            ref: t,
                            onContextMenu: a,
                            editButtonClickProps: u,
                            style: T.buttonStyle,
                            pressedStyle: T.buttonPressedStyle,
                            hoveredStyle: T.buttonHoveredStyle,
                            quickActionButtons: p,
                            width: y,
                            forceEnableButton: m && !P,
                            userExpandable: S,
                            children: [R ? (0, r.jsx)(i, {}) : void 0, A ? (0, r.jsx)(ed, {
                                store: l,
                                links: C,
                                property: c,
                                shouldTruncateToSingleLine: m,
                                shouldDisableLinks: f,
                                shouldLockImageAspectRatio: x,
                                tokenFormat: (0, o(916769).Ug)(null == v ? void 0 : v.tokenFormat)
                            }) : void 0]
                        })
                    }) : null
                })),
                es = {
                    margin: 0,
                    flexShrink: 0
                },
                ed = n.memo(function({
                    store: e,
                    links: t,
                    property: n,
                    shouldTruncateToSingleLine: l = !1,
                    shouldDisableLinks: i = !1,
                    shouldLockImageAspectRatio: a = !1,
                    tokenFormat: s
                }) {
                    let d = l ? 3 : void 0,
                        c = (0, o(601264).s)({
                            propertyId: n,
                            store: e
                        }),
                        u = !!c,
                        p = (0, o(960253).e)(),
                        y = (0, o(960253).I)(() => ({
                            wrapperStyle: { ...u ? { ...(0, o(605351).sQ)(p),
                                    padding: 4,
                                    lineHeight: 2,
                                    ...!l && {
                                        flexWrap: "wrap",
                                        display: "inline-flex"
                                    }
                                } : {}
                            }
                        }), [u, l, p]),
                        f = d && t.length > d ? t.slice(0, d) : t,
                        m = f.length < t.length ? t.length - f.length : 0;
                    return (0, r.jsxs)(o(27507).h, {
                        style: y.wrapperStyle,
                        className: c,
                        children: [f.map((t, n) => (0, r.jsx)(o(302675).X, {
                            linkValue: t,
                            store: e,
                            shouldDisableLinks: i,
                            shouldLockImageAspectRatio: a
                        }, t.url + n)), m > 0 ? (0, r.jsx)(o(569726).A, {
                            count: m,
                            format: s,
                            style: es,
                            fixedHeight: !0,
                            isCompact: !0
                        }) : void 0]
                    })
                }),
                ec = {
                    selectableStyle: {
                        width: "100%"
                    }
                },
                eu = n.forwardRef(function(e, t) {
                    let {
                        shouldWrap: l
                    } = (0, n.useContext)(o(422575).L8), i = (0, o(533992).WS)(), a = ew(e, t, { ...(0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: i
                                }).table.button,
                                height: "100%"
                            }
                        }), [i]),
                        ...ec
                    });
                    return (0, r.jsx)(ea, { ...a,
                        EmptyComponent: o(959110).rW,
                        quickActionButtons: (0, r.jsx)(o(243904).k, {}, "comment"),
                        userExpandable: l
                    })
                }),
                ep = {
                    selectableStyle: {
                        width: "100%"
                    }
                },
                ey = n.forwardRef(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = ew(e, t, { ...(0, o(960253).I)(() => ({
                                buttonStyle: { ...(0, o(642065)._Q)({
                                        isPhone: n
                                    }).page.button,
                                    height: "100%"
                                }
                            }), [n]),
                            ...ep
                        });
                    return (0, r.jsx)(ea, { ...l,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: (0, r.jsx)(o(243904).k, {}, "comment")
                    })
                }),
                ef = n.forwardRef(function(e, t) {
                    let l = (0, o(533992).WS)(),
                        i = (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: l
                                }).compact_page.button
                            }
                        }), [l]),
                        a = (0, n.useMemo)(() => (0, r.jsx)(o(243904).k, {}, "comment"), []),
                        s = ew(e, t, i);
                    return (0, r.jsx)(ea, { ...s,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: a,
                        shouldDisableLinks: !0,
                        shouldLockImageAspectRatio: !0,
                        shouldTruncateToSingleLine: !0
                    })
                }),
                em = n.forwardRef(function(e, t) {
                    let n = ew(e, t);
                    return (0, r.jsx)(ea, { ...n,
                        EmptyComponent: o(959110).Fe,
                        shouldDisableLinks: !0
                    })
                }),
                ex = n.forwardRef(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "file"
                    }), i = ew(e, t, l);
                    return (0, r.jsx)(ea, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                eS = {
                    selectableStyle: {
                        width: "100%"
                    }
                },
                eb = n.forwardRef(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(533992).WS)(), i = ew(e, t, { ...(0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: l
                                }).card.button,
                                width: "100%"
                            }
                        }), [l]),
                        ...eS
                    });
                    return (0, r.jsx)(ea, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                ev = n.forwardRef(function(e, t) {
                    let o = ew(e, t);
                    return (0, r.jsx)(ea, { ...o
                    })
                }),
                eh = n.forwardRef(function(e, t) {
                    let o = ew(e, t);
                    return (0, r.jsx)(ea, { ...o
                    })
                }),
                eg = n.forwardRef(function(e, t) {
                    let o = ew(e, t);
                    return (0, r.jsx)(ea, { ...o
                    })
                }),
                ej = n.forwardRef(function(e, t) {
                    let o = ew(e, t);
                    return (0, r.jsx)(ea, { ...o
                    })
                }),
                ek = n.forwardRef(function(e, t) {
                    return (0, r.jsx)(o(643205).H, { ...e,
                        ref: t,
                        children: (0, r.jsx)(ei, { ...e
                        })
                    })
                });

            function ew(e, t, n) {
                let {
                    store: r,
                    onContextMenu: l,
                    property: i,
                    width: a
                } = e;
                return {
                    ref: t,
                    store: r,
                    property: i,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onContextMenu: l,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    selectableStyle: null == n ? void 0 : n.selectableStyle,
                    width: a
                }
            }
            o(672577);
            let eI = {
                hoveredStyle: {
                    color: o(632079).Tj.text.primary,
                    background: "transparent"
                },
                pressedStyle: {
                    background: "transparent"
                },
                relativeContainer: {
                    position: "relative"
                },
                button: {
                    width: "100%",
                    cursor: "pointer",
                    color: o(632079).Tj.text.primary
                },
                title: {
                    fontWeight: o(699422).Wy.medium,
                    whiteSpace: "nowrap",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center"
                },
                pageIcon: {
                    marginInlineStart: 2,
                    marginInlineEnd: 6
                }
            };

            function e_(e) {
                let {
                    blockStore: t
                } = e, n = (0, o(533992).v3)(), l = (0, o(682985).K8)(() => (0, o(399348).f)(t, {
                    includeTeamHomeFeed: !0,
                    includeDataSources: !1
                }).find(e => "team" === e.table), [t]), i = (0, o(682985).K8)(() => {
                    if (l) return l.getIcon()
                }, [l]), a = (0, o(960253).I)(() => {
                    let e;
                    if (null != i && i.icon) {
                        let t = (0, o(111012).VA)(i.icon);
                        e = "lightgray" === t ? o(632079).Tj.gray.background.secondary : (o(632079).Tj[t] || o(632079).Tj.gray).background.secondary
                    } else e = o(632079).Tj.gray.background.secondary;
                    return {
                        miniTeamSpaceIcon: {
                            position: "absolute",
                            bottom: -3,
                            insetInlineStart: 11,
                            borderRadius: 2,
                            background: e
                        }
                    }
                }, [i]);
                return (0, r.jsx)(o(64960).Ay, {
                    hoveredStyle: eI.hoveredStyle,
                    pressedStyle: eI.pressedStyle,
                    style: eI.button,
                    onClick: e => {
                        (0, o(545586).navigateToBlock)({
                            environment: n,
                            store: t,
                            openInNew: (0, o(7029).V)(e),
                            pageVisitSource: o(254656).y8.CollectionViewLocationProperty
                        })
                    },
                    children: (0, r.jsxs)("div", {
                        style: eI.relativeContainer,
                        children: [(0, r.jsx)(o(899260).A, {
                            store: t,
                            useInvertedColors: !1,
                            iconSize: 20,
                            style: eI.title,
                            iconStyle: eI.pageIcon,
                            underlineTitle: !0
                        }), l ? (0, r.jsx)(o(729746).x, {
                            store: l,
                            disabled: !0,
                            size: 12,
                            style: a.miniTeamSpaceIcon
                        }, "icon") : void 0]
                    })
                })
            }
            o(354520);
            let eC = (0, o(109939).YK)({
                shared: {
                    defaultMessage: "Shared",
                    id: "CollectionLocation.SidebarTitle.sectionShared"
                },
                private: {
                    defaultMessage: "Private",
                    id: "CollectionLocation.SidebarTitle.sectionPrivate"
                },
                noAccess: {
                    defaultMessage: "No access",
                    id: "CollectionLocation.noAccess"
                },
                emptyCollectionName: {
                    id: "CollectionLocation.EmptyCollectionName",
                    defaultMessage: "Untitled"
                }
            });

            function eT(e) {
                return (0, r.jsx)("span", {
                    style: { ...eP.style1,
                        ...e.style
                    },
                    children: "/"
                })
            }
            let eP = {
                shareTypeIndicatorIcon: {
                    width: 16,
                    height: 16,
                    marginInlineStart: 2,
                    marginInlineEnd: 2,
                    color: o(632079).Tj.gray.icon.secondary,
                    padding: 2,
                    backgroundColor: o(632079).Tj.gray.background.tertiary,
                    borderRadius: 3
                },
                style1: {
                    paddingInlineStart: 2
                },
                style2: {
                    padding: 0,
                    paddingInlineStart: 1,
                    margin: 0
                },
                style3: {
                    margin: 0,
                    background: void 0
                },
                style4: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 4
                },
                style5: {
                    marginTop: -4
                },
                style6: {
                    paddingInlineStart: 2
                }
            };

            function eR(e) {
                let {
                    collectionForLocationStore: t,
                    collectionContextStore: n,
                    pageStore: l
                } = e, i = (0, o(109939).tz)(), a = (0, o(682985).K8)(() => {
                    let e = (0, o(399348).f)(t ? ? l, {
                        includeTeamHomeFeed: !1,
                        includeDataSources: !1
                    }).filter(e => !(e instanceof o(360851).N));
                    return e.reverse(), e
                }, [t, l]), {
                    collectionIsInPrivate: s,
                    collectionIsInRestricted: d,
                    collectionIsInShared: c
                } = (0, o(682985).K8)(() => {
                    let e = null == n ? void 0 : n.groupsForTypedDatabasesStore.state;
                    return e && null != t && t.id ? {
                        collectionIsInPrivate: !!e.privateDatabases[t.id],
                        collectionIsInRestricted: !!e.restrictedDatabases[t.id],
                        collectionIsInShared: !!e.sharedDatabases[t.id]
                    } : {
                        collectionIsInPrivate: !1,
                        collectionIsInRestricted: !1,
                        collectionIsInShared: !1
                    }
                }, [null == n ? void 0 : n.groupsForTypedDatabasesStore, null == t ? void 0 : t.id], {
                    equalityFn: o(381453).n4
                }), u = (0, o(682985).K8)(() => (0, o(632079).O4)({
                    theme: "light"
                }), []), p = (0, o(960253).I)(() => ({
                    textStyle: {
                        color: u.popoverWaxPaperBackground,
                        fontWeight: o(699422).Wy.regular
                    }
                }), [u]), y = null;
                return s ? y = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o(16275).I, {
                        icon: o(269298).lockFillIcon,
                        style: eP.shareTypeIndicatorIcon
                    }), (0, r.jsx)("span", {
                        children: i.formatMessage(eC.private)
                    })]
                }) : d ? y = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        style: { ...eP.shareTypeIndicatorIcon,
                            ...eP.style2
                        },
                        children: (0, r.jsx)(o(16275).I, {
                            icon: o(550113).L,
                            style: { ...eP.shareTypeIndicatorIcon,
                                ...eP.style3
                            }
                        })
                    }), (0, r.jsx)("span", {
                        children: i.formatMessage(eC.noAccess)
                    })]
                }) : c && (y = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o(16275).I, {
                        icon: o(407598).peopleFillIcon,
                        style: eP.shareTypeIndicatorIcon
                    }), (0, r.jsx)("span", {
                        children: i.formatMessage(eC.shared)
                    })]
                })), (0, r.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    children: [s || d || c ? (0, r.jsxs)("div", {
                        style: { ...eP.style4,
                            ...p.textStyle
                        },
                        children: [y, d ? void 0 : (0, r.jsx)(eT, {
                            style: { ...eP.style5,
                                ...p.textStyle
                            }
                        })]
                    }) : void 0, a.length > 3 ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(eA, {
                            ancestorStore: a[0],
                            showDivider: !0
                        }), (0, r.jsx)("span", {
                            style: { ...eP.style6,
                                ...p.textStyle
                            },
                            children: "..."
                        }), (0, r.jsx)(eT, {
                            style: p.textStyle
                        }), s || c ? void 0 : (0, r.jsx)(eA, {
                            ancestorStore: a[a.length - 2],
                            showDivider: !0
                        }), (0, r.jsx)(eA, {
                            ancestorStore: a[a.length - 1],
                            showDivider: !1
                        })]
                    }) : a.map((e, t) => (0, r.jsx)(eA, {
                        ancestorStore: e,
                        showDivider: t < a.length - 1
                    }, e.id))]
                })
            }

            function eA(e) {
                let {
                    ancestorStore: t,
                    showDivider: n
                } = e, l = (0, o(682985).K8)(() => (0, o(632079).O4)({
                    theme: "light"
                }), []), i = (0, o(682985).K8)(() => {
                    if (t instanceof o(681735).h) return t.getIcon()
                }, [t]), a = (0, o(960253).I)(() => {
                    let e = o(632079).Tj.popoverWaxPaperBackground;
                    if (i)
                        if (i.icon) {
                            let t = (0, o(111012).VA)(i.icon);
                            e = "lightgray" === t ? o(632079).Tj.gray.background.secondary : (o(632079).Tj[t] || o(632079).Tj.gray).background.secondary
                        } else e = o(632079).Tj.gray.background.tertiary;
                    return {
                        teamIconStyle: {
                            background: e
                        },
                        textStyle: {
                            color: l.popoverWaxPaperBackground,
                            fontWeight: o(699422).Wy.regular
                        }
                    }
                }, [l, i]);
                return t instanceof o(681735).h ? (0, r.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    children: [(0, r.jsx)(o(611343).A, {
                        store: t,
                        showDivider: !1,
                        maxWidth: 160,
                        iconSize: 16,
                        iconStyle: a.teamIconStyle,
                        titleStyle: a.textStyle,
                        disabled: !1
                    }), n ? (0, r.jsx)(eT, {
                        style: a.textStyle
                    }) : void 0]
                }) : (0, r.jsxs)(o(4458).fI, {
                    alignItems: "center",
                    children: [(0, r.jsx)(o(245257).A, {
                        store: t,
                        showDivider: !1,
                        emojiSize: 18,
                        maxWidth: 160,
                        titleStyle: a.textStyle,
                        disabled: !1
                    }, t.id), n ? (0, r.jsx)(eT, {
                        style: a.textStyle
                    }) : void 0]
                })
            }
            let eE = {
                    borderRadius: 3,
                    marginInlineEnd: 2
                },
                eB = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    position: "relative",
                    marginInlineEnd: 2
                };

            function eM(e) {
                let {
                    teamStore: t,
                    collectionStore: n,
                    isInLibrary: l
                } = e, i = (0, o(682985).K8)(() => n.getIcon(), [n]), a = (0, o(682985).K8)(() => t.getIcon(), [t]), s = (0, o(960253).I)(() => {
                    let e;
                    if (null != a && a.icon) {
                        let t = (0, o(111012).VA)(a.icon);
                        e = "lightgray" === t ? o(632079).Tj.gray.background.secondary : (o(632079).Tj[t] || o(632079).Tj.gray).background.secondary
                    } else e = o(632079).Tj.gray.background.secondary;
                    return {
                        miniTeamSpaceIcon: {
                            position: "absolute",
                            bottom: -3,
                            insetInlineEnd: -3,
                            borderRadius: 2,
                            background: e
                        }
                    }
                }, [a]);
                return i || l ? (0, r.jsxs)("div", {
                    style: eB,
                    children: [(0, r.jsx)(o(569553).B6, {
                        icon: i,
                        iconRecordCategory: l && !i ? "collectionViewBlock" : "collection",
                        size: 20,
                        emojiSize: 20,
                        isEmptyPage: !1,
                        bucket: "public",
                        isLarge: !0,
                        largeIcon: !0,
                        disabled: !0
                    }), (0, r.jsx)(o(729746).x, {
                        store: t,
                        disabled: !0,
                        size: 12,
                        style: s.miniTeamSpaceIcon
                    }, "icon")]
                }) : (0, r.jsx)(o(729746).x, {
                    store: t,
                    disabled: !0,
                    size: 20,
                    style: eE
                }, "icon")
            }
            let ez = {
                    button: {
                        color: o(632079).Tj.palette.gray[800],
                        cursor: "pointer"
                    },
                    shareTypeIndicatorIcon: {
                        width: 20,
                        height: 20,
                        padding: 2,
                        marginInlineEnd: 2,
                        color: o(632079).Tj.gray.icon.secondary,
                        backgroundColor: o(632079).Tj.gray.background.secondaryTranslucent,
                        borderRadius: 3
                    },
                    miniShareTypeIndicatorIcon: {
                        position: "absolute",
                        bottom: -3,
                        insetInlineEnd: -3,
                        backgroundColor: o(632079).Tj.gray.background.secondary,
                        borderRadius: 3,
                        paddingTop: 1,
                        paddingBottom: 1
                    },
                    collectionTitleTextStyle: {
                        marginInlineStart: 2,
                        ...(0, o(793550).bB)()
                    },
                    style0: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        position: "relative"
                    },
                    style1: {
                        background: "transparent"
                    },
                    style2: {
                        padding: 0,
                        margin: 0
                    },
                    style3: {
                        margin: 0,
                        background: void 0
                    }
                },
                eL = function(e) {
                    let {
                        collectionContextStore: t,
                        collectionForLocationStore: n
                    } = e, l = (0, o(533992).v3)(), i = (0, o(109939).tz)(), {
                        collectionIsInPrivate: a,
                        collectionIsInRestricted: s,
                        collectionIsInShared: d
                    } = (0, o(682985).K8)(() => {
                        let e = t.groupsForTypedDatabasesStore.state;
                        return {
                            collectionIsInPrivate: !!(null == e ? void 0 : e.privateDatabases[n.id]),
                            collectionIsInRestricted: !!(null == e ? void 0 : e.restrictedDatabases[n.id]),
                            collectionIsInShared: !!(null == e ? void 0 : e.sharedDatabases[n.id])
                        }
                    }, [t.groupsForTypedDatabasesStore, n.id], {
                        equalityFn: o(381453).n4
                    }), c = (0, o(682985).K8)(() => (0, o(297311).U)(n), [n]), u = (0, o(682985).K8)(() => {
                        let e = n.getParentBlockStore();
                        return !!e && e.isInLibraryBlock() && n.canRead()
                    }, [n]), p = (0, o(682985).K8)(() => {
                        let e = (0, o(536614).r4)(n.getName(), n) ? ? i.formatMessage(eC.emptyCollectionName);
                        if (!u) return e;
                        let t = n.getParentBlockStore();
                        return 0 === e.length ? (null == t ? void 0 : t.getRenderTitleWithPlaceholder({
                            userTimeZone: (0, o(714350).P)(),
                            intl: i
                        })) ? ? i.formatMessage(eC.emptyCollectionName) : e
                    }, [n, i, u]), y = (0, o(682985).K8)(() => n.getIcon(), [n]), f = (0, o(682985).K8)(() => {
                        var e;
                        return null == (e = t.collectionViewBlockStore()) ? void 0 : e.id
                    }, [t]), m = (0, o(682985).K8)(() => {
                        let e = o(254656).y8.LocationProperty;
                        return f && (0, o(829435).s)(f) && (e = t.isInHomeWidgetStore.state ? o(254656).y8.PersonalHomeTileTasks : o(254656).y8.PersonalHomePageTasks), e
                    }, [f, t]);
                    if (!c && !a && !s && !d && !u) return null;
                    let x = a || s || d || u && !c,
                        S = u ? (0, r.jsx)(o(569553).B6, {
                            icon: void 0,
                            iconRecordCategory: "collectionViewBlock",
                            size: 20,
                            emojiSize: 20,
                            isEmptyPage: !1,
                            bucket: "public",
                            isLarge: !0,
                            largeIcon: !0,
                            disabled: !0
                        }) : (0, r.jsx)(o(16275).I, {
                            icon: o(407598).peopleFillIcon,
                            style: ez.shareTypeIndicatorIcon
                        });
                    if (y) {
                        let e = a ? (0, r.jsx)(o(16275).I, {
                            icon: o(930113).lockFillSmallIcon,
                            size: "xxs",
                            colorPalette: "gray",
                            colorVariant: "secondary",
                            style: ez.miniShareTypeIndicatorIcon
                        }) : (0, r.jsx)(o(16275).I, {
                            icon: o(480605).peopleFillSmallIcon,
                            size: "xxs",
                            colorPalette: "gray",
                            colorVariant: "secondary",
                            style: ez.miniShareTypeIndicatorIcon
                        });
                        S = (0, r.jsxs)("div", {
                            style: ez.style0,
                            children: [(0, r.jsx)(o(569553).B6, {
                                icon: y,
                                size: 20,
                                emojiSize: 20,
                                isEmptyPage: !1,
                                bucket: "public",
                                isLarge: !0,
                                largeIcon: !0,
                                disabled: !0
                            }), u ? void 0 : e]
                        })
                    } else s ? S = (0, r.jsx)("div", {
                        style: { ...ez.shareTypeIndicatorIcon,
                            ...ez.style2
                        },
                        children: (0, r.jsx)(o(16275).I, {
                            icon: o(550113).L,
                            style: { ...ez.shareTypeIndicatorIcon,
                                ...ez.style3
                            }
                        })
                    }) : a && (S = (0, r.jsx)(o(16275).I, {
                        icon: o(269298).lockFillIcon,
                        style: ez.shareTypeIndicatorIcon
                    }));
                    return (0, r.jsx)(o(64960).Ay, {
                        hoveredStyle: ez.style1,
                        pressedStyle: ez.style1,
                        style: ez.button,
                        onClick: e => {
                            let t = n.getParentBlockStore();
                            if (t) {
                                let n = (0, o(7029).V)(e);
                                (0, o(545586).navigateToBlock)({
                                    environment: l,
                                    store: t,
                                    pageVisitSource: m,
                                    openInNew: n
                                })
                            }
                        },
                        children: (0, r.jsxs)(o(4458).fI, {
                            alignItems: "center",
                            columnGap: 4,
                            children: [c ? (0, r.jsx)(eM, {
                                teamStore: c,
                                collectionStore: n,
                                isInLibrary: u
                            }) : void 0, x ? S : void 0, (0, r.jsx)("div", {
                                style: ez.collectionTitleTextStyle,
                                children: p
                            })]
                        })
                    })
                },
                eV = new(o(815048)).O2("PrivateSectionLocation", async () => await o.e(99124).then(o.bind(o, 587172))),
                eK = (0, o(815048)._h)(eV, e => e.PrivateSectionLocation),
                eF = new(o(815048)).O2("TeamStoreLocation", async () => await o.e(34138).then(o.bind(o, 339112))),
                eW = (0, o(815048)._h)(eF, e => e.TeamStoreLocation),
                eH = n.memo(n.forwardRef(function(e, t) {
                    let {
                        store: l,
                        EmptyComponent: i,
                        onContextMenu: a,
                        buttonStyle: s
                    } = e, {
                        baseStyles: d,
                        collectionContextStore: c
                    } = (0, n.useContext)(o(422575).L8), u = (0, o(682985).K8)(() => l.getAssociatedCollectionStore(), [l]), p = (0, o(682985).K8)(() => {
                        if (!c) return;
                        if ((0, o(93193).I)(null == c ? void 0 : c.collectionViewStore())) return l.getNavigableBlockStore();
                        let e = l.getParentStore();
                        if (e && "block" === e.table && e.canRead()) return e.getNavigableBlockStore()
                    }, [c, l]), y = (0, o(682985).K8)(() => {
                        let e = l.getParentStore();
                        if (e && e.canRead() && (0, o(966980).$R)(e)) return e
                    }, [l]), f = (0, o(682985).K8)(() => (0, o(528991).K)(l), [l]), m = (0, o(960253).I)(() => ({
                        buttonStyle: { ...d.buttonStyle,
                            minWidth: 32,
                            ...s
                        },
                        buttonPressedStyle: d.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: d.buttonHoveredStyle ? ? {}
                    }), [d.buttonHoveredStyle, d.buttonPressedStyle, d.buttonStyle, s]), x = c && u ? (0, r.jsx)(eL, {
                        collectionContextStore: c,
                        collectionForLocationStore: u
                    }) : p ? (0, r.jsx)(e_, {
                        blockStore: p
                    }) : y ? (0, r.jsx)(eW, {
                        teamStore: y
                    }) : f ? (0, r.jsx)(eK, {}) : i ? (0, r.jsx)(i, {}) : null;
                    return (0, r.jsx)(o(858439).P, {
                        ref: t,
                        onContextMenu: a,
                        editButtonClickProps: void 0,
                        style: m.buttonStyle,
                        pressedStyle: m.buttonPressedStyle,
                        hoveredStyle: m.buttonHoveredStyle,
                        tooltipPropertyValue: p ? (0, r.jsx)(eR, {
                            pageStore: p
                        }) : u && c ? (0, r.jsx)(eR, {
                            collectionForLocationStore: u,
                            collectionContextStore: c
                        }) : void 0,
                        forceEnableButton: !0,
                        children: x
                    })
                })),
                eD = n.forwardRef(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = eZ(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).table.text
                            }
                        }), [n]));
                    return (0, r.jsx)(eH, { ...l,
                        EmptyComponent: o(959110).rW
                    })
                }),
                eQ = n.forwardRef(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = eZ(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).page.text
                            }
                        }), [n]));
                    return (0, r.jsx)(eH, { ...l,
                        EmptyComponent: o(959110).ao
                    })
                }),
                eq = n.forwardRef(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = eZ(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).compact_page.text
                            }
                        }), [n]));
                    return (0, r.jsx)(eH, { ...l,
                        EmptyComponent: o(959110).ao
                    })
                }),
                eO = n.forwardRef(function(e, t) {
                    let n = eZ(e, t);
                    return (0, r.jsx)(eH, { ...n,
                        EmptyComponent: o(959110).Fe
                    })
                }),
                eN = n.forwardRef(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "location"
                    }), i = eZ(e, t, l);
                    return (0, r.jsx)(eH, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                eU = n.forwardRef(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(533992).WS)(), i = eZ(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: l
                            }).card.text
                        }
                    }), [l]));
                    return (0, r.jsx)(eH, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                eJ = n.forwardRef(function(e, t) {
                    let o = eZ(e, t);
                    return (0, r.jsx)(eH, { ...o
                    })
                }),
                eY = n.forwardRef(function(e, t) {
                    let o = eZ(e, t);
                    return (0, r.jsx)(eH, { ...o
                    })
                }),
                e$ = n.forwardRef(function(e, t) {
                    let o = eZ(e, t);
                    return (0, r.jsx)(eH, { ...o
                    })
                }),
                eG = n.forwardRef(function(e, t) {
                    let o = eZ(e, t);
                    return (0, r.jsx)(eH, { ...o
                    })
                });

            function eZ(e, t, o) {
                let {
                    store: n,
                    onContextMenu: r
                } = e;
                return {
                    ref: t,
                    store: n,
                    onContextMenu: r,
                    buttonStyle: null == o ? void 0 : o.buttonStyle
                }
            }
            let eX = n.memo((0, n.forwardRef)(function(e, t) {
                    var l, i;
                    let {
                        store: a,
                        buttonStyle: s,
                        onContextMenu: d,
                        editButtonClickProps: c,
                        quickActionButtons: u,
                        EmptyComponent: p,
                        isRightAligned: y,
                        property: f,
                        width: m,
                        userExpandable: x
                    } = e, {
                        baseStyles: S,
                        propertySchema: b,
                        shouldRenderTooltip: v,
                        collectionContextStore: h
                    } = (0, n.useContext)(o(422575).L8), g = (0, o(682985).K8)(() => {
                        let e = a.getPropertyValue(f);
                        return o(588688).M(e)
                    }, [f, a]), j = (0, o(793550).lh)({
                        numberValue: g,
                        numberFormat: null == b ? void 0 : b.number_format,
                        numberShowAs: null == b ? void 0 : b.show_as
                    }), k = (0, o(682985).K8)(() => (0, o(940270).yQ)({
                        viewType: null == h ? void 0 : h.getViewType(),
                        propertySchema: b
                    }), [b, h]), w = (0, o(960253).I)(() => ({
                        buttonStyle: { ...S.buttonStyle,
                            ...s,
                            ...k ? {
                                width: "inherit"
                            } : {}
                        },
                        buttonPressedStyle: S.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: S.buttonHoveredStyle ? ? {},
                        tokenWrapper: k ? {
                            width: "100%"
                        } : {}
                    }), [S.buttonHoveredStyle, S.buttonPressedStyle, S.buttonStyle, s, k]);
                    if (void 0 === g && void 0 === p) return null;
                    let I = (null == b || null == (l = b.show_as) ? void 0 : l.type) === "bar" || (null == b || null == (i = b.show_as) ? void 0 : i.type) === "ring";
                    return (0, r.jsx)(o(858439).P, {
                        ref: t,
                        style: w.buttonStyle,
                        hoveredStyle: w.buttonHoveredStyle,
                        pressedStyle: w.buttonPressedStyle,
                        onContextMenu: d,
                        editButtonClickProps: c,
                        quickActionButtons: u,
                        quickActionButtonsAlign: y ? "left" : void 0,
                        tooltipPropertyValue: v ? j : void 0,
                        width: m,
                        userExpandable: x,
                        children: void 0 === g && void 0 !== p ? (0, r.jsx)(p, {}) : I ? (0, r.jsx)(o(27507).h, {
                            isRightAligned: y,
                            style: w.tokenWrapper,
                            children: (0, r.jsx)(o(469316).E, {
                                numberValue: g,
                                isRightAligned: y,
                                store: a,
                                property: f,
                                fullWidthBar: k
                            })
                        }) : (0, r.jsx)(o(361724).C, {
                            isRightAligned: y,
                            children: (0, r.jsx)(o(469316).E, {
                                numberValue: g,
                                isRightAligned: y,
                                store: a,
                                property: f
                            })
                        })
                    })
                })),
                e0 = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, s = (0, o(533992).WS)(), d = te(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).page.text
                        }
                    }), [s])), c = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(622031).qO, {
                            store: l,
                            property: i
                        }, "workflow-autofill"), (0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                            store: l,
                            property: i,
                            surface: a
                        }, "copy")]
                    }), [a, i, l]);
                    return (0, r.jsx)(eX, { ...d,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: c
                    })
                }),
                e9 = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, {
                        isPhone: s
                    } = (0, o(533992).Y0)(), {
                        shouldWrap: d
                    } = (0, n.useContext)(o(422575).L8), c = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).table.text
                        }
                    }), [s]), u = (0, n.useMemo)(() => {
                        if (!o(986939).A.isMobile) return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o(622031).qO, {
                                store: l,
                                property: i
                            }, "workflow-autofill"), (0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                                store: l,
                                property: i,
                                surface: a
                            }, "copy")]
                        })
                    }, [a, i, l]), p = te(e, t, c);
                    return (0, r.jsx)(eX, { ...p,
                        EmptyComponent: o(959110).rW,
                        quickActionButtons: u,
                        isRightAligned: !0,
                        userExpandable: d
                    })
                }),
                e2 = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, {
                        isPhone: s
                    } = (0, o(533992).Y0)(), d = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).compact_page.text
                        }
                    }), [s]), c = (0, n.useMemo)(() => {
                        if (!o(986939).A.isMobile) return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                                store: l,
                                property: i,
                                surface: a
                            }, "copy")]
                        })
                    }, [a, i, l]), u = te(e, t, d);
                    return (0, r.jsx)(eX, { ...u,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: c
                    })
                }),
                e5 = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "number"
                    }), i = te(e, t, l);
                    return (0, r.jsx)(eX, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                e6 = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(533992).WS)(), i = te(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: l
                            }).card.text
                        }
                    }), [l]));
                    return (0, r.jsx)(eX, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                e1 = (0, n.forwardRef)(function(e, t) {
                    let o = te(e, t);
                    return (0, r.jsx)(eX, { ...o
                    })
                }),
                e8 = (0, n.forwardRef)(function(e, t) {
                    let o = te(e, t);
                    return (0, r.jsx)(eX, { ...o
                    })
                }),
                e3 = (0, n.forwardRef)(function(e, t) {
                    let o = te(e, t);
                    return (0, r.jsx)(eX, { ...o
                    })
                }),
                e4 = (0, n.forwardRef)(function(e, t) {
                    let o = te(e, t);
                    return (0, r.jsx)(eX, { ...o
                    })
                }),
                e7 = (0, n.forwardRef)(function(e, t) {
                    let n = te(e, t);
                    return (0, r.jsx)(eX, { ...n,
                        EmptyComponent: o(959110).Fe
                    })
                });

            function te(e, t, n) {
                let {
                    store: r,
                    collectionStore: l,
                    property: i,
                    onContextMenu: a,
                    width: s
                } = e;
                return {
                    ref: t,
                    store: r,
                    collectionStore: l,
                    property: i,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onContextMenu: a,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    width: s
                }
            }
            o(16280);
            let tt = {
                addressFirstLine: {
                    fontWeight: o(699422).Wy.bold,
                    fontSize: "14px",
                    paddingTop: 4,
                    paddingInlineEnd: 4,
                    paddingBottom: 0,
                    paddingInlineStart: 4
                },
                addressRest: {
                    fontSize: "12px",
                    paddingTop: 0,
                    paddingInlineEnd: 4,
                    paddingBottom: 4,
                    paddingInlineStart: 4,
                    color: o(632079).Tj.text.secondary
                }
            };

            function to({
                placeValue: e,
                width: t
            }) {
                let {
                    addressFirstLine: l,
                    addressRest: i
                } = (0, n.useMemo)(() => e.address ? (0, o(862060).lS)(e.address) : {
                    addressFirstLine: "",
                    addressRest: ""
                }, [e.address]), a = (0, o(960253).I)(() => ({
                    container: {
                        minWidth: t
                    }
                }), [t]);
                return (0, r.jsxs)("div", {
                    style: a.container,
                    children: [(0, r.jsx)("div", {
                        style: tt.addressFirstLine,
                        children: l
                    }), (0, r.jsx)("div", {
                        style: tt.addressRest,
                        children: i
                    }), (0, r.jsx)(o(990762).Vt, {
                        place: e
                    })]
                })
            }
            let tn = n.memo((0, n.forwardRef)((e, t) => {
                    let {
                        store: l,
                        buttonStyle: i,
                        onContextMenu: a,
                        editButtonClickProps: s,
                        quickActionButtons: d = [],
                        EmptyComponent: c,
                        property: u,
                        width: p,
                        userExpandable: y,
                        forceBlockPropertyButtonEnable: f = !1
                    } = e, {
                        baseStyles: m
                    } = (0, n.useContext)(o(422575).L8), x = (0, o(682985).K8)(() => l.getPropertyValue(u), [u, l]), S = (0, o(960253).I)(() => ({
                        buttonStyle: { ...m.buttonStyle,
                            ...i
                        },
                        buttonPressedStyle: m.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: m.buttonHoveredStyle ? ? {}
                    }), [m.buttonHoveredStyle, m.buttonPressedStyle, m.buttonStyle, i]);
                    return null != x && x.length || void 0 !== c ? (0, r.jsx)(o(858439).P, {
                        ref: t,
                        style: S.buttonStyle,
                        hoveredStyle: S.buttonHoveredStyle,
                        pressedStyle: S.buttonPressedStyle,
                        onContextMenu: a,
                        editButtonClickProps: s,
                        quickActionButtons: d,
                        forceEnableButton: f,
                        width: p,
                        userExpandable: y,
                        children: null != x && x.length || void 0 === c ? (0, r.jsx)(o(361724).C, {
                            children: (0, r.jsx)(o(594014).m, {
                                textValue: x,
                                parentStore: l
                            })
                        }) : (0, r.jsx)(c, {})
                    }) : null
                })),
                tr = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, s = (0, o(533992).WS)(), d = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).page.text
                        }
                    }), [s]), c = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(137955).b, {
                            store: l,
                            property: i,
                            openOverlay: !0
                        }, "autofill"), (0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                            store: l,
                            property: i,
                            surface: a
                        }, "copy")]
                    }), [a, i, l]), u = tx(e, t, d);
                    return (0, r.jsx)(tn, { ...u,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: c
                    })
                }),
                tl = {
                    tooltipStyle: {
                        backgroundColor: o(632079).Tj.background.primary,
                        color: o(632079).Tj.text.primary,
                        boxShadow: o(632079).Tj.shadow.outline.lg
                    },
                    style0: {
                        width: "100%"
                    }
                },
                ti = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, {
                        isPhone: s
                    } = (0, o(533992).Y0)(), d = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).table.text
                        }
                    }), [s]), c = (0, o(682985).K8)(() => {
                        let e = l.getPropertyValue(i);
                        return (0, o(862060).eC)(e)
                    }, [l, i]), u = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(137955).b, {
                            store: l,
                            property: i,
                            openOverlay: !0
                        }, "autofill"), (0, r.jsx)(o(243904).k, {}, "comment"), o(986939).A.isMobile ? null : (0, r.jsx)(o(965192).i, {
                            store: l,
                            property: i,
                            surface: a
                        }, "copy")]
                    }), [a, i, l]), p = tx(e, t, { ...d,
                        ...tl
                    });
                    return (0, r.jsx)(o(51831).m, {
                        content: () => (0, r.jsx)(to, {
                            placeValue: c,
                            width: p.width
                        }),
                        disableTooltip: !c,
                        placement: "bottom",
                        alignment: "start",
                        style: tl.tooltipStyle,
                        children: e => (0, r.jsx)("div", { ...e,
                            style: tl.style0,
                            children: (0, r.jsx)(tn, { ...p,
                                EmptyComponent: o(959110).rW,
                                quickActionButtons: u,
                                userExpandable: !0
                            })
                        })
                    })
                }),
                ta = n.forwardRef(function(e, t) {
                    let {
                        propertyModule: n
                    } = e;
                    if (!n || n && !(0, o(11287).NS)(n)) throw Error("PlacePropertyModule can only be used with place property modules");
                    let l = (0, o(682985).K8)(() => (0, o(862060).eC)(e.store.getPropertyValue(e.property)), [e.store, e.property]);
                    return (0, r.jsxs)(o(643205).H, { ...e,
                        ref: t,
                        children: [(0, r.jsx)(tr, { ...e
                        }), "map" === n.style && l ? (0, r.jsx)(o(990762).Vt, {
                            place: l
                        }) : void 0]
                    })
                }),
                ts = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, {
                        isPhone: s
                    } = (0, o(533992).Y0)(), d = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).compact_page.text,
                            maxWidth: "300px"
                        }
                    }), [s]), c = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(243904).k, {}, "comment"), o(986939).A.isMobile ? null : (0, r.jsx)(o(965192).i, {
                            store: l,
                            property: i,
                            surface: a
                        }, "copy")]
                    }), [a, i, l]), u = tx(e, t, d);
                    return (0, r.jsx)(tn, { ...u,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: c,
                        linkifyUrls: !1,
                        disableLinks: !0
                    })
                }),
                td = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "text"
                    }), i = tx(e, t, l);
                    return (0, r.jsx)(tn, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                tc = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(533992).WS)(), i = tx(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: l
                            }).card.text
                        }
                    }), [l]));
                    return (0, r.jsx)(tn, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                tu = (0, n.forwardRef)(function(e, t) {
                    let o = tx(e, t);
                    return (0, r.jsx)(tn, { ...o
                    })
                }),
                tp = (0, n.forwardRef)(function(e, t) {
                    let o = tx(e, t);
                    return (0, r.jsx)(tn, { ...o
                    })
                }),
                ty = (0, n.forwardRef)(function(e, t) {
                    let o = tx(e, t);
                    return (0, r.jsx)(tn, { ...o
                    })
                }),
                tf = (0, n.forwardRef)(function(e, t) {
                    let o = tx(e, t);
                    return (0, r.jsx)(tn, { ...o
                    })
                }),
                tm = (0, n.forwardRef)(function(e, t) {
                    let n = tx(e, t);
                    return (0, r.jsx)(tn, { ...n,
                        EmptyComponent: o(959110).Fe
                    })
                });

            function tx(e, t, n) {
                let {
                    store: r,
                    collectionStore: l,
                    property: i,
                    disabled: a,
                    onContextMenu: s,
                    width: d
                } = e;
                return {
                    ref: t,
                    store: r,
                    collectionStore: l,
                    property: i,
                    disabled: a,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onContextMenu: s,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    width: d
                }
            }
            let tS = (0, n.forwardRef)(function(e, t) {
                    return (0, r.jsx)(o(652771).jd, { ...e,
                        ref: t
                    })
                }),
                tb = (0, n.forwardRef)(function(e, t) {
                    return (0, r.jsx)(o(652771).I8, { ...e,
                        ref: t
                    })
                }),
                tv = (0, n.forwardRef)(function(e, t) {
                    return (0, r.jsx)(o(652771).S1, { ...e,
                        ref: t
                    })
                }),
                th = (0, n.forwardRef)(function(e, t) {
                    let n = (0, o(228315).F)({
                            ref: t,
                            collectionStore: e.collectionStore,
                            property: e.property,
                            propertyType: "multi_select"
                        }),
                        l = { ...e,
                            styles: n
                        };
                    return (0, r.jsx)(o(652771).h3, { ...l,
                        ref: t
                    })
                }),
                tg = (0, n.forwardRef)(function(e, t) {
                    return (0, r.jsx)(o(652771).nD, { ...e,
                        ref: t
                    })
                }),
                tj = (0, n.forwardRef)(function(e, t) {
                    return (0, r.jsx)(o(652771).V6, { ...e,
                        ref: t
                    })
                }),
                tk = (0, n.forwardRef)(function(e, t) {
                    return (0, r.jsx)(o(652771).ej, { ...e,
                        ref: t
                    })
                }),
                tw = (0, n.forwardRef)(function(e, t) {
                    return (0, r.jsx)(o(652771).xV, { ...e,
                        ref: t
                    })
                }),
                tI = (0, n.forwardRef)(function(e, t) {
                    return (0, r.jsx)(o(652771).ER, { ...e,
                        ref: t
                    })
                }),
                t_ = (0, n.forwardRef)(function(e, t) {
                    return (0, r.jsx)(o(652771)._Z, { ...e,
                        ref: t
                    })
                }),
                tC = n.memo(n.forwardRef(function(e, t) {
                    let {
                        store: l,
                        onContextMenu: i,
                        property: a,
                        disabled: s,
                        enablePointerEventsForInteractiveTypes: d,
                        editButtonClickProps: c,
                        selectButtonStyle: u,
                        checkboxButtonStyle: p,
                        checkboxShowLabel: y,
                        EmptyComponent: f,
                        quickActionButtons: m,
                        width: x,
                        userExpandable: S
                    } = e, {
                        baseStyles: b,
                        propertyFormat: v,
                        propertySchema: h,
                        shouldRenderTooltip: g
                    } = (0, n.useContext)(o(422575).L8), j = (0, o(916769).Ug)(null == b ? void 0 : b.tokenFormat), k = (0, o(682985).K8)(() => l.getPropertyValue(a), [a, l]), w = (0, n.useMemo)(() => h ? o(561872).RZ(k, h) ? ? "" : "", [k, h]), I = (null == v ? void 0 : v.statusShowAs) ? ? "select", _ = (0, o(960253).I)(() => ({
                        buttonStyle: { ...b.buttonStyle,
                            ..."select" === I ? u : p
                        },
                        buttonPressedStyle: b.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: b.buttonHoveredStyle ? ? {}
                    }), [b.buttonHoveredStyle, b.buttonPressedStyle, b.buttonStyle, u, p, I]);
                    return w || void 0 !== f ? (0, r.jsx)(o(858439).P, {
                        ref: t,
                        onContextMenu: i,
                        editButtonClickProps: c,
                        style: _.buttonStyle,
                        pressedStyle: _.buttonPressedStyle,
                        hoveredStyle: _.buttonHoveredStyle,
                        tooltipPropertyValue: g && "checkbox" === I ? w : void 0,
                        quickActionButtons: m,
                        width: x,
                        userExpandable: S,
                        children: "checkbox" === I ? (0, r.jsx)(tP, {
                            enablePointerEventsForInteractiveTypes: d,
                            showLabel: y,
                            propertyName: null == h ? void 0 : h.name,
                            propertyValue: k,
                            statusValue: w,
                            editButtonClickProps: c,
                            containerRef: t,
                            store: l,
                            property: a,
                            disabled: s
                        }) : w || void 0 === f ? (0, r.jsx)(tT, {
                            statusValue: w,
                            tokenFormat: j,
                            store: l,
                            property: a,
                            propertySchema: h,
                            parentHasTooltip: g
                        }) : (0, r.jsx)(f, {})
                    }) : null
                }));

            function tT(e) {
                let {
                    statusValue: t,
                    store: l,
                    parentHasTooltip: i,
                    property: a,
                    propertySchema: s
                } = e, d = (0, o(960253).e)(), c = (0, o(486536).v)({
                    blockId: null == l ? void 0 : l.id,
                    propertyId: a
                }), u = (0, o(601264).s)({
                    propertyId: a,
                    store: l
                }), p = !!u, y = (0, o(960253).I)(() => ({
                    container: { ...p || c ? { ...(0, o(605351).sQ)(d),
                            paddingTop: 3
                        } : {},
                        maxWidth: "fit-content"
                    }
                }), [c, d, p]), {
                    foundOption: f,
                    foundGroup: m
                } = (0, n.useMemo)(() => {
                    let e = (null == s ? void 0 : s.options) ? ? [],
                        o = e.find(e => e.value === t),
                        n = (null == s ? void 0 : s.groups) ? ? [],
                        r = o && n.find(e => {
                            var t;
                            return null == (t = e.optionIds) ? void 0 : t.includes(o.id)
                        });
                    return {
                        options: e,
                        foundOption: o,
                        foundGroup: r
                    }
                }, [s, t]);
                return f ? (0, r.jsx)(o(27507).h, {
                    style: y.container,
                    className: u,
                    children: (0, r.jsx)(o(348565).X, {
                        type: "status",
                        value: f.value,
                        description: f.description,
                        color: f.color,
                        groupColor: null == m ? void 0 : m.color,
                        shouldShowTooltip: !i
                    })
                }) : null
            }

            function tP(e) {
                let t = (0, o(109939).tz)(),
                    {
                        propertyName: l,
                        propertyValue: i,
                        statusValue: a,
                        showLabel: s,
                        enablePointerEventsForInteractiveTypes: d,
                        editButtonClickProps: c,
                        containerRef: u,
                        store: p,
                        property: y,
                        disabled: f
                    } = e,
                    m = (0, o(533992).v3)(),
                    {
                        propertySchema: x,
                        shouldRenderTooltip: S
                    } = (0, n.useContext)(o(422575).L8),
                    b = M(p, y, f),
                    v = (0, n.useMemo)(() => !!x && o(561872).MC(i, x, t), [x, i, t]),
                    h = (0, n.useCallback)(async e => {
                        await o(305866).VE({ ...c,
                            element: u && "current" in u ? (null == u ? void 0 : u.current) ? ? void 0 : void 0,
                            environment: m,
                            statusSetCheckbox: !e.altKey
                        })
                    }, [u, c, m]);
                return (0, r.jsx)(o(435524).o, {
                    onClick: h,
                    propertyLabel: s ? l : void 0,
                    checked: v,
                    enablePointerEventsForInteractiveTypes: d,
                    tooltip: S ? void 0 : a,
                    disabled: b,
                    store: p,
                    property: y
                })
            }
            let tR = (0, n.forwardRef)(function(e, t) {
                    let {
                        collectionStore: l,
                        store: i,
                        property: a
                    } = e, s = (0, o(533992).WS)(), {
                        shouldWrap: d
                    } = (0, n.useContext)(o(422575).L8), c = (0, o(960253).I)(() => ({
                        checkboxButtonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).table.checkbox
                        }
                    }), [s]), u = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(622031).qO, {
                            store: i,
                            property: a
                        }, "workflow-autofill"), (0, r.jsx)(o(243904).k, {}, "comment")]
                    }), [a, i]), p = tW(e, t, c);
                    return (0, r.jsx)(tC, { ...p,
                        checkboxShowLabel: !1,
                        EmptyComponent: o(959110).rW,
                        collectionStore: l,
                        quickActionButtons: u,
                        userExpandable: d
                    })
                }),
                tA = (0, n.forwardRef)(function(e, t) {
                    let {
                        collectionStore: l,
                        store: i,
                        property: a
                    } = e, s = (0, o(533992).WS)(), d = (0, o(960253).I)(() => ({
                        checkboxButtonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).page.checkbox
                        }
                    }), [s]), c = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(622031).qO, {
                            store: i,
                            property: a
                        }, "workflow-autofill"), (0, r.jsx)(o(243904).k, {}, "comment")]
                    }), [a, i]), u = tW(e, t, d);
                    return (0, r.jsx)(tC, { ...u,
                        checkboxShowLabel: !1,
                        EmptyComponent: o(959110).ao,
                        collectionStore: l,
                        quickActionButtons: c
                    })
                }),
                tE = (0, n.forwardRef)(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = tW(e, t, (0, o(960253).I)(() => ({
                            checkboxButtonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).compact_page.checkbox
                            }
                        }), [n]));
                    return (0, r.jsx)(tC, { ...l,
                        checkboxShowLabel: !1,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: (0, r.jsx)(o(243904).k, {}, "comment")
                    })
                }),
                tB = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "status"
                    }), i = tW(e, t, l);
                    return (0, r.jsx)(tC, { ...i,
                        checkboxShowLabel: !1,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                tM = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(533992).WS)(), i = tW(e, t, (0, o(960253).I)(() => ({
                        checkboxButtonStyle: { ...(0, o(642065)._Q)({
                                isPhone: l
                            }).card.checkbox
                        }
                    }), [l]));
                    return (0, r.jsx)(tC, { ...i,
                        checkboxShowLabel: !0,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                tz = (0, n.forwardRef)(function(e, t) {
                    let o = tW(e, t);
                    return (0, r.jsx)(tC, { ...o,
                        checkboxShowLabel: !0
                    })
                }),
                tL = (0, n.forwardRef)(function(e, t) {
                    let o = tW(e, t);
                    return (0, r.jsx)(tC, { ...o,
                        checkboxShowLabel: !1
                    })
                }),
                tV = (0, n.forwardRef)(function(e, t) {
                    let o = tW(e, t);
                    return (0, r.jsx)(tC, { ...o,
                        checkboxShowLabel: !1
                    })
                }),
                tK = (0, n.forwardRef)(function(e, t) {
                    let o = tW(e, t);
                    return (0, r.jsx)(tC, { ...o,
                        checkboxShowLabel: !1
                    })
                }),
                tF = (0, n.forwardRef)(function(e, t) {
                    let n = tW(e, t);
                    return (0, r.jsx)(tC, { ...n,
                        checkboxShowLabel: !1,
                        EmptyComponent: o(959110).Fe
                    })
                });

            function tW(e, t, r) {
                let {
                    store: l,
                    disabled: i,
                    property: a,
                    onContextMenu: s,
                    enablePointerEventsForInteractiveTypes: d,
                    width: c
                } = e, {
                    propertyFormat: u
                } = (0, n.useContext)(o(422575).L8), p = (null == u ? void 0 : u.statusShowAs) === "checkbox", y = (0, o(973681).QK)(e, {
                    isStatusCheckbox: p
                });
                return {
                    ref: t,
                    store: l,
                    disabled: i,
                    property: a,
                    selectButtonStyle: null == r ? void 0 : r.selectButtonStyle,
                    checkboxButtonStyle: null == r ? void 0 : r.checkboxButtonStyle,
                    editButtonClickProps: y,
                    onContextMenu: s,
                    enablePointerEventsForInteractiveTypes: d,
                    width: c
                }
            }
            let tH = n.memo((0, n.forwardRef)((e, t) => {
                    let {
                        store: l,
                        buttonStyle: i,
                        onContextMenu: a,
                        editButtonClickProps: s,
                        quickActionButtons: d = [],
                        EmptyComponent: c,
                        property: u,
                        width: p,
                        linkifyUrls: y,
                        disableLinks: f,
                        userExpandable: m,
                        clampLines: x,
                        forceBlockPropertyButtonEnable: S = !1
                    } = e, {
                        baseStyles: b
                    } = (0, n.useContext)(o(422575).L8), v = (0, o(682985).K8)(() => l.getPropertyValue(u), [u, l]), h = (0, o(960253).I)(() => ({
                        buttonStyle: { ...b.buttonStyle,
                            ...i
                        },
                        buttonPressedStyle: b.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: b.buttonHoveredStyle ? ? {}
                    }), [b.buttonHoveredStyle, b.buttonPressedStyle, b.buttonStyle, i]);
                    return null != v && v.length || void 0 !== c ? (0, r.jsx)(o(858439).P, {
                        ref: t,
                        style: h.buttonStyle,
                        hoveredStyle: h.buttonHoveredStyle,
                        pressedStyle: h.buttonPressedStyle,
                        onContextMenu: a,
                        editButtonClickProps: s,
                        quickActionButtons: d,
                        forceEnableButton: S,
                        width: p,
                        userExpandable: m,
                        children: null != v && v.length || void 0 === c ? (0, r.jsx)(o(361724).C, {
                            children: (0, r.jsx)(o(644970).A, {
                                textValue: v,
                                parentStore: l,
                                linkifyUrls: y,
                                disableLinks: f,
                                shouldTruncate: !!x,
                                clampLines: x
                            })
                        }) : (0, r.jsx)(c, {})
                    }) : null
                })),
                tD = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, s = (0, o(533992).WS)(), d = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).page.text
                        }
                    }), [s]), c = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(622031).qO, {
                            store: l,
                            property: i
                        }, "workflow-autofill"), (0, r.jsx)(o(137955).b, {
                            store: l,
                            property: i,
                            openOverlay: !0
                        }, "autofill"), (0, r.jsx)(o(243904).k, {}, "comment"), (0, r.jsx)(o(965192).i, {
                            store: l,
                            property: i,
                            surface: a
                        }, "copy")]
                    }), [a, i, l]), u = tZ(e, t, d);
                    return (0, r.jsx)(tH, { ...u,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: c
                    })
                }),
                tQ = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, {
                        isPhone: s
                    } = (0, o(533992).Y0)(), {
                        shouldWrap: d
                    } = (0, n.useContext)(o(422575).L8), c = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).table.text
                        }
                    }), [s]), u = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(622031).qO, {
                            store: l,
                            property: i
                        }, "workflow-autofill"), (0, r.jsx)(o(137955).b, {
                            store: l,
                            property: i,
                            openOverlay: !0
                        }, "autofill"), (0, r.jsx)(o(243904).k, {}, "comment"), o(986939).A.isMobile ? void 0 : (0, r.jsx)(o(965192).i, {
                            store: l,
                            property: i,
                            surface: a
                        }, "copy")]
                    }), [a, i, l]), p = tZ(e, t, c);
                    return (0, r.jsx)(tH, { ...p,
                        EmptyComponent: o(959110).rW,
                        quickActionButtons: u,
                        userExpandable: d
                    })
                }),
                tq = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        property: i,
                        surface: a
                    } = e, {
                        isPhone: s
                    } = (0, o(533992).Y0)(), d = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: s
                            }).compact_page.text,
                            maxWidth: "300px"
                        }
                    }), [s]), c = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o(243904).k, {}, "comment"), o(986939).A.isMobile ? void 0 : (0, r.jsx)(o(965192).i, {
                            store: l,
                            property: i,
                            surface: a
                        }, "copy")]
                    }), [a, i, l]), u = tZ(e, t, d);
                    return (0, r.jsx)(tH, { ...u,
                        EmptyComponent: o(959110).ao,
                        quickActionButtons: c,
                        linkifyUrls: !1,
                        disableLinks: !0
                    })
                }),
                tO = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "text"
                    }), i = tZ(e, t, l);
                    return (0, r.jsx)(tH, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                tN = (0, n.forwardRef)(function(e, t) {
                    let {
                        showIfEmpty: n
                    } = e, l = (0, o(533992).WS)(), i = tZ(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: l
                            }).card.text
                        }
                    }), [l]));
                    return (0, r.jsx)(tH, { ...i,
                        EmptyComponent: n ? o(959110).Jb : void 0
                    })
                }),
                tU = (0, n.forwardRef)(function(e, t) {
                    let o = tZ(e, t);
                    return (0, r.jsx)(tH, { ...o
                    })
                }),
                tJ = (0, n.forwardRef)(function(e, t) {
                    let o = tZ(e, t);
                    return (0, r.jsx)(tH, { ...o
                    })
                }),
                tY = (0, n.forwardRef)(function(e, t) {
                    let o = tZ(e, t);
                    return (0, r.jsx)(tH, { ...o
                    })
                }),
                t$ = (0, n.forwardRef)(function(e, t) {
                    let o = tZ(e, t);
                    return (0, r.jsx)(tH, { ...o
                    })
                }),
                tG = (0, n.forwardRef)(function(e, t) {
                    let n = tZ(e, t);
                    return (0, r.jsx)(tH, { ...n,
                        EmptyComponent: o(959110).Fe
                    })
                });

            function tZ(e, t, n) {
                let {
                    store: r,
                    collectionStore: l,
                    property: i,
                    disabled: a,
                    onContextMenu: s,
                    width: d
                } = e;
                return {
                    ref: t,
                    store: r,
                    collectionStore: l,
                    property: i,
                    disabled: a,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onContextMenu: s,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    width: d
                }
            }
            o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698);
            let tX = {
                buttonStyle: {
                    color: o(632079).Tj.text.secondary,
                    fill: o(632079).Tj.text.secondary,
                    height: 20,
                    width: 26
                },
                iconStyle: {
                    color: o(632079).Tj.text.secondary,
                    fill: o(632079).Tj.text.secondary
                }
            };

            function t0(e) {
                let {
                    store: t
                } = e, l = (0, o(533992).v3)(), i = (0, o(713311).Ks)(), a = (0, o(109939).tz)(), s = (0, n.useCallback)(() => {
                    let e = t.getBlockTitleStore();
                    (0, o(730616).C)({
                        store: t
                    }), (0, o(182553).h)({
                        environment: l,
                        store: t
                    }), (0, o(739204).z)({
                        store: e
                    }), (0, o(808111).u)(l, "list_item_edit_mode_enter", { ...(0, o(752242).sl)(i),
                        block_id: t.id,
                        from: "click",
                        view_type: "list"
                    })
                }, [t, l, i]), d = a.formatMessage({
                    id: "collectionViewItem.edit.tooltip",
                    defaultMessage: "Edit"
                });
                return (0, r.jsx)(o(51831).m, {
                    content: () => d,
                    children: e => (0, r.jsx)(o(374533).A, {
                        icon: o(636).pencilLineIcon,
                        ariaLabel: d,
                        onClick: s,
                        hasBackground: !0,
                        showShadow: !1,
                        style: tX.buttonStyle,
                        iconStyle: tX.iconStyle,
                        ...e
                    })
                })
            }
            let t9 = (0, o(109939).YK)({
                    untitledBlock: {
                        defaultMessage: "Untitled",
                        id: "collectionViewItemTitle.untitledBlock"
                    },
                    typeAName: {
                        defaultMessage: "Type a name…",
                        id: "collectionViewItemTitle.itemName.placeholder"
                    },
                    pageWithContentTooltip: {
                        defaultMessage: "This {type} has content",
                        id: "collectionViewItemTitle.pageWithContentTooltip"
                    }
                }),
                t2 = Object.freeze({
                    property: !0
                }),
                t5 = new Set(["table"]),
                t6 = {
                    pageIconStyle: {
                        fill: o(632079).Tj.text.tertiary
                    },
                    link: {
                        display: "inline"
                    },
                    subitemCountIndicator: {
                        display: "inline-flex",
                        alignItems: "center",
                        verticalAlign: "text-top"
                    },
                    parentItemIndicator: {
                        display: "inline-flex",
                        alignItems: "center",
                        verticalAlign: "text-top"
                    },
                    discussionIndicator: {
                        display: "inline-flex",
                        alignItems: "center",
                        color: o(632079).Tj.text.tertiary,
                        fontSize: 12,
                        fontWeight: o(699422).Wy.medium,
                        verticalAlign: "text-top"
                    },
                    errorIcon: {
                        display: "inline-block",
                        verticalAlign: "text-top",
                        marginInlineStart: 1,
                        marginInlineEnd: 7,
                        paddingBottom: 4,
                        fill: o(632079).Tj.palette.orange[500]
                    },
                    archiveIcon: {
                        display: "inline-flex",
                        verticalAlign: "text-top",
                        marginTop: 1
                    }
                },
                t1 = n.memo((0, n.forwardRef)(function(e, t) {
                    let {
                        buttonStyle: l,
                        canEdit: i,
                        collectionStore: a,
                        commentsIndicatorStyle: s,
                        editButtonClickProps: d,
                        forceMouseEntered: c,
                        surface: u,
                        iconActionFrom: p,
                        iconSize: y,
                        linkifyText: f,
                        onContextMenu: m,
                        onTab: x,
                        onUntab: S,
                        property: b,
                        quickActionButtons: v,
                        quickActionButtonsStyle: h,
                        recordIconStyle: g,
                        showIcon: j,
                        store: k,
                        textStyle: w,
                        titlePropertyType: I,
                        userExpandable: _,
                        width: C
                    } = e, T = (0, o(533992).v3)(), P = (0, o(109939).tz)(), {
                        baseStyles: R,
                        collectionContextStore: A,
                        propertySchema: E
                    } = (0, n.useContext)(o(422575).L8), {
                        collectionViewBlockId: B,
                        collectionViewId: M,
                        collectionUri: z
                    } = (0, o(682985).K8)(() => {
                        var e, t, o;
                        return {
                            collectionViewId: null == A || null == (e = A.collectionViewStore()) ? void 0 : e.id,
                            collectionViewBlockId: null == A || null == (t = A.collectionViewBlockStore()) ? void 0 : t.id,
                            collectionUri: null == A || null == (o = A.collectionStore()) ? void 0 : o.getFormat().app_config_uri
                        }
                    }, [A]), L = (0, o(682985).K8)(() => {
                        if ("inlineEditable" !== I) return !1;
                        let e = o(596184).A.state;
                        return !!(e.isActive && e.store.id === k.id)
                    }, [k.id, I]), V = (0, n.useMemo)(() => ({
                        type: "page_property_value_match",
                        collectionViewBlockId: B,
                        collectionViewId: M,
                        propertyId: "title"
                    }), [B, M]), {
                        icon: K,
                        iconStore: F,
                        isPage: W,
                        isEmptyPage: H,
                        isEmptyTitle: D,
                        recordTable: Q,
                        blockType: q,
                        hasError: O
                    } = (0, o(682985).K8)(() => {
                        let e = k.getIconStore();
                        return {
                            icon: k.getIcon(),
                            iconStore: e,
                            isPage: k.isType("page"),
                            isEmptyPage: k.isEmptyPage(),
                            isEmptyTitle: k.isEmptyTitle(),
                            recordTable: null == e ? void 0 : e.table,
                            blockType: k.getType(),
                            hasError: k.hasError()
                        }
                    }, [k], {
                        equalityFn: o(381453).n4
                    }), N = (0, o(682985).K8)(() => (0, o(569553).Te)(k), [k]), U = (0, o(682985).K8)(() => (null == k ? void 0 : k.isArchived()) ? ? !1, [k]), J = W && !H && !K, Y = (0, o(9247).cP)(b), $ = (0, o(682985).K8)(() => {
                        if (!Y) return f ? o(793550).UY({
                            store: (0, o(765815).z)(k),
                            propertySchema: (0, o(627125).z)(E),
                            property: b
                        }) : void 0;
                        let e = k.getFormatStore().getKeyStore("uri").getValue(),
                            t = e && o(758654).Jf({
                                str: e,
                                allowNoProtocol: !1
                            });
                        return t && (0, o(939042).e)(t, k.pointer.spaceId)
                    }, [Y, k, f, E, b]), G = (0, n.useCallback)(() => {
                        if (A && Y) {
                            var e;
                            e = { ...(0, o(752242).sl)(A) || {},
                                block_id: k.id,
                                property: b,
                                from: o(793550).zP(u),
                                is_external_title_property_id: !0
                            }, (0, o(104310).u)({
                                event: {
                                    eventName: "click_block_property_url",
                                    eventProperties: e
                                }
                            })
                        }
                    }, [A, T, u, b, k.id, Y]), Z = (0, n.useCallback)(e => {
                        if (!F) return;
                        let t = k.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "TitleProperty.handleRecordIconChange",
                            environment: T,
                            cellTarget: t ? {
                                spaceWithId: t
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, o(368198).K)({
                                    store: F,
                                    value: e,
                                    transaction: t
                                })
                            }
                        })
                    }, [T, F, k]), X = (0, o(960253).I)(() => {
                        let e = t5.has(u);
                        return {
                            textStyle: { ...R.textStyle,
                                display: "inline",
                                fontWeight: o(699422).Wy.medium,
                                ...w,
                                marginInlineEnd: o(986939).A.isMobile ? 3 : 5,
                                ...U && {
                                    color: o(632079).Tj.text.tertiary
                                }
                            },
                            buttonStyle: { ...R.buttonStyle,
                                ...l
                            },
                            quickActionButtonsStyle: { ...h
                            },
                            buttonPressedStyle: { ...R.buttonPressedStyle,
                                background: "none"
                            },
                            buttonHoveredStyle: { ...R.buttonHoveredStyle,
                                background: "none"
                            },
                            recordIconStyle: {
                                display: "inline-flex",
                                verticalAlign: "text-top",
                                ...g,
                                ...U && {
                                    opacity: .5
                                }
                            },
                            content: e ? {
                                display: "flex",
                                alignItems: "flex-start",
                                gap: o(986939).A.isMobile ? 4 : 1
                            } : {
                                display: "contents"
                            },
                            iconContainer: e ? {
                                flexShrink: 0
                            } : {
                                display: "contents"
                            },
                            restContainer: e ? {
                                flexGrow: 1,
                                minWidth: 0
                            } : {
                                display: "contents"
                            }
                        }
                    }, [u, R.textStyle, R.buttonStyle, R.buttonPressedStyle, R.buttonHoveredStyle, w, l, h, g, U]), ee = (0, r.jsx)(t8, {
                        titlePropertyType: I,
                        store: k,
                        environment: T,
                        collectionContextStore: A,
                        onTab: x,
                        onUntab: S,
                        textStyle: X.textStyle,
                        memoizedInPageFindTextProp: V,
                        property: b,
                        isEditing: L
                    }), et = (0, n.useMemo)(() => ({
                        collection_id: a.id,
                        recordTable: Q,
                        source: p,
                        block_type: q
                    }), [a.id, Q, p, q]), eo = (0, n.useMemo)(() => "never" !== j && ("table" !== u || !D || !H || void 0 !== K) && ("always" === j || void 0 !== K || !H), [j, u, D, H, K]), en = (0, o(682985).K8)(() => A && (0, o(88541).x)({
                        collectionContextStore: A,
                        blockStore: k
                    }), [A, k]), er = (0, o(682985).K8)(() => A && (0, o(72502).K)({
                        collectionContextStore: A,
                        blockStore: k
                    }), [A, k]), el = (0, n.useMemo)(() => {
                        let e;
                        return O ? (0, r.jsx)(o(16275).I, {
                            icon: o(50171).exclamationMarkTriangleSmallIcon,
                            size: "sm",
                            style: t6.errorIcon
                        }) : eo ? (e = W && i ? (0, r.jsx)(o(569553).B6, {
                            disabled: !1,
                            icon: K,
                            iconRecordCategory: N,
                            isEmptyPage: H,
                            size: y,
                            style: X.recordIconStyle,
                            pageIconStyle: t6.pageIconStyle,
                            store: k,
                            bucket: "secure",
                            onChange: Z,
                            iconLoggingData: et,
                            isInCollectionView: !0
                        }) : (0, r.jsx)(o(569553).B6, {
                            disabled: !0,
                            icon: K,
                            iconRecordCategory: N,
                            isEmptyPage: H,
                            size: y,
                            style: X.recordIconStyle,
                            pageIconStyle: t6.pageIconStyle,
                            isInCollectionView: !0,
                            store: k
                        }), J) ? (0, r.jsx)(o(51831).m, {
                            content: () => P.formatMessage(t9.pageWithContentTooltip, {
                                type: (0, o(463082).$O)(z)
                            }),
                            children: t => (0, r.jsx)("div", { ...t,
                                children: e
                            })
                        }) : e : null
                    }, [k, O, eo, i, K, N, W, H, y, X.recordIconStyle, Z, et, P, z, J]);
                    return (0, r.jsx)(o(858439).P, {
                        ref: t,
                        editButtonClickProps: d,
                        onContextMenu: m,
                        style: X.buttonStyle,
                        pressedStyle: X.buttonPressedStyle,
                        hoveredStyle: X.buttonHoveredStyle,
                        quickActionButtons: v,
                        quickActionButtonsStyle: X.quickActionButtonsStyle,
                        quickActionButtonsForceVisible: o(986939).A.isMobile ? void 0 : c,
                        tooltipHide: !0,
                        userExpandable: _,
                        children: (0, r.jsxs)("div", {
                            style: X.content,
                            children: [(0, r.jsx)("div", {
                                style: X.iconContainer,
                                children: el
                            }), (0, r.jsxs)("div", {
                                style: X.restContainer,
                                children: [!L && $ ? (0, r.jsx)(o(990461).s, {
                                    href: $,
                                    external: Y,
                                    onClick: G,
                                    style: t6.link,
                                    children: ee
                                }) : ee, U ? (0, r.jsx)(o(16275).I, {
                                    icon: o(968793).j,
                                    size: "sm",
                                    colorPalette: "gray",
                                    colorVariant: "tertiary",
                                    style: t6.archiveIcon
                                }) : null, void 0 !== A && en ? (0, r.jsx)("span", {
                                    style: t6.parentItemIndicator,
                                    children: (0, r.jsx)(o(53684).n, {
                                        blockStore: k,
                                        collectionContextStore: A,
                                        columnWidth: C
                                    })
                                }) : null, void 0 !== A && er ? (0, r.jsx)("span", {
                                    style: t6.subitemCountIndicator,
                                    children: (0, r.jsx)(o(222119).W, {
                                        blockStore: k,
                                        collectionContextStore: A
                                    })
                                }) : null, (0, r.jsx)(o(890898).g, {
                                    store: k,
                                    iconStyle: t6.discussionIndicator,
                                    buttonStyle: s
                                })]
                            })]
                        })
                    })
                }), o(795676).A),
                t8 = n.memo(function(e) {
                    let {
                        titlePropertyType: t,
                        store: n,
                        environment: l,
                        collectionContextStore: i,
                        onTab: a,
                        onUntab: s,
                        textStyle: d,
                        memoizedInPageFindTextProp: c,
                        property: u,
                        isEditing: p
                    } = e;
                    switch (t) {
                        case "inlineEditable":
                            return (0, r.jsx)(t3, {
                                store: n,
                                environment: l,
                                collectionContextStore: i,
                                onTab: a,
                                onUntab: s,
                                textStyle: d,
                                memoizedInPageFindTextProp: c,
                                isEditing: p
                            });
                        case "hidePlaceholderText":
                            return (0, r.jsx)(t4, {
                                store: n,
                                collectionContextStore: i,
                                textStyle: d,
                                property: u,
                                memoizedInPageFindTextProp: c,
                                environment: l
                            });
                        case "showPlaceholderAsTitle":
                            return (0, r.jsx)(o(627918).A, {
                                style: d,
                                store: n
                            });
                        default:
                            (0, o(722371).HB)(t)
                    }
                }, o(795676).A),
                t3 = n.memo(function(e) {
                    let {
                        store: t,
                        environment: l,
                        collectionContextStore: i,
                        onTab: a,
                        onUntab: s,
                        textStyle: d,
                        memoizedInPageFindTextProp: c,
                        isEditing: u
                    } = e, p = (0, o(109939).tz)(), y = (0, o(682985).K8)(() => (0, o(799514).yT)(t), [t]), f = (0, n.useCallback)(() => {
                        o(596184).A.setState({
                            isActive: !1
                        }), (0, o(525779).clear)({
                            environment: l
                        }), (0, o(472709).L)({
                            environment: l,
                            store: t
                        })
                    }, [t, l]), m = (0, n.useCallback)(e => {
                        if (!e || !("key" in e) || "Enter" !== e.key) {
                            if (i) {
                                var n, r, a;
                                (0, o(85868).E)({
                                    environment: l,
                                    collection_id: null == (n = i.collectionStore()) ? void 0 : n.id,
                                    collection_view_id: null == (r = i.collectionViewStore()) ? void 0 : r.id,
                                    collection_view_block_id: null == (a = i.collectionViewBlockStore()) ? void 0 : a.id,
                                    block_id: t.id,
                                    property: "title",
                                    property_type: "text",
                                    from: "list"
                                })
                            }(0, o(198439).P)({
                                store: t
                            })
                        }
                    }, [l, t, i]), x = (0, n.useCallback)(e => {
                        e.target.scrollLeft = 0
                    }, []), S = (0, o(682985).K8)(() => {
                        var e;
                        return u ? p.formatMessage(t9.typeAName) : (null == (e = t.getModel()) ? void 0 : e.getEmptyTitlePlaceholder({
                            getRecordModel: t.getRecordModel,
                            intl: p,
                            userTimeZone: (0, o(714350).P)()
                        })) || p.formatMessage(t9.untitledBlock)
                    }, [u, t, p]);
                    return (0, r.jsx)(o(53373).A, {
                        store: y,
                        disabled: !u,
                        disableSlashCommands: !0,
                        disableEmojiCommands: !0,
                        disableStyleAnnotations: !0,
                        disableInsertedDeletedAnnotations: !0,
                        disableEmbedMenu: !0,
                        disableShiftEnter: !0,
                        onEnter: f,
                        onEsc: f,
                        onTab: a,
                        onUntab: s,
                        onChange: m,
                        onBlur: x,
                        placeholder: S,
                        style: d,
                        disableSelectAllBlocks: !0,
                        pasteBehavior: "inline",
                        inPageFind: c,
                        disabledMentionTypes: t2
                    })
                }, o(795676).A),
                t4 = n.memo(function(e) {
                    let {
                        store: t,
                        collectionContextStore: n,
                        textStyle: l,
                        property: i,
                        memoizedInPageFindTextProp: a,
                        environment: s
                    } = e, d = (0, o(960253).e)(), c = (0, o(83208).X)("agent_diffs_three_way_diffing"), {
                        value: u
                    } = (0, o(815048).fJ)(o(406921).V), p = (0, o(682985).K8)(() => {
                        if (n) {
                            let e = n.searchQueryStore.state;
                            return e.length > 0 ? e : void 0
                        }
                    }, [n]), y = (0, o(682985).K8)(() => o(847591).qu.state ? ? p, [p]), f = (0, o(682985).K8)(() => {
                        let e = o(847591).wb.state;
                        return (0, o(831719).wc)(e) && e.id === t.id ? e : void 0
                    }, [t.id]), m = (0, o(682985).K8)(() => {
                        var e, n;
                        let r = null == (e = o(296738).lz.state) ? void 0 : e.entries;
                        if (!r) return;
                        let l = t.isCrdtEnabled() ? t.getReadOnlyBlockTitleTextSliceTree() : void 0,
                            i = (0, o(500461).w)(t.pointer) ? o(296738).lz.getCachedOpIds(t.pointer) : void 0,
                            a = null == (n = t.getTitleStore()) ? void 0 : n.getValue();
                        return (0, o(360343).eW)({
                            entries: r,
                            pointer: t.pointer,
                            currentTextValue: a,
                            textSliceTree: l,
                            cachedAgentInsertedOpIds: i,
                            enableThreeWayDiffing: c
                        })
                    }, [t, c]), x = (0, o(682985).K8)(() => {
                        var e;
                        if (m) return m;
                        let n = null == (e = t.getTitleStore()) ? void 0 : e.getValue();
                        return t.isType("external_object_instance_page") && (n = t.getPropertyValue(i)), y && y.length > 0 && n && (n = o(536614).nu({
                            textValue: n,
                            blockId: t.id,
                            textProps: a,
                            find: y,
                            currentFocusedResult: f,
                            store: t
                        })), n
                    }, [m, f, a, i, y, t], {
                        equalityFn: o(381453).n4
                    }), S = (0, o(682985).K8)(() => o(536614).S5({
                        environment: s,
                        textValue: x && {
                            value: x,
                            spaceId: (0, o(226221).e)(t.pointer.spaceId)
                        },
                        parentStore: t,
                        disableHover: !0,
                        disableStyleAnnotations: !0,
                        disableInsertedDeletedAnnotations: !m,
                        disableDateStyleAnnotations: !1,
                        disableSuggestionAnnotations: !0,
                        disabled: !0,
                        theme: o(632079).Tj,
                        themeMode: d,
                        emojiType: (0, o(591404).FN)(s),
                        katex: u,
                        formulaValueTypes: []
                    }), [s, t, x, m, u, d], {
                        silenceRerenderDefender: !0
                    });
                    return (0, r.jsx)("span", {
                        style: l,
                        children: S
                    })
                }, o(795676).A),
                t7 = {
                    recordIconStyle: {
                        height: o(104509).Ev.lg,
                        width: o(104509).Ev.lg,
                        marginTop: -2,
                        marginInlineEnd: 3,
                        marginBottom: 0,
                        marginInlineStart: -2
                    },
                    dbCommentButton: {
                        position: "relative",
                        top: 2,
                        marginTop: -2.8
                    }
                },
                oe = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l,
                        handleOpenPeekPage: i,
                        width: a
                    } = e, s = (0, o(533992).v3)(), {
                        isPhone: d
                    } = (0, o(533992).Y0)(), {
                        collectionContextStore: c,
                        canEdit: u,
                        shouldWrap: p
                    } = (0, n.useContext)(o(422575).L8), y = (0, o(682985).K8)(() => (null == c ? void 0 : c.isInLibraryBlock()) ? ? !1, [c]), f = (0, o(682985).K8)(() => (0, o(597845).Wi)(s, l.id), [s, l]), m = (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: d
                            }).table.text
                        }
                    }), [d]), x = (0, o(682985).K8)(() => (null == c ? void 0 : c.shouldShowPageIcon()) ? ? !0, [c]), S = o(986939).A.isMobile || void 0 === a || a > 100, b = !o(986939).A.isMobile, v = (0, n.useMemo)(() => f ? void 0 : (0, r.jsx)(o(931535).f, {
                        handleOpenPeekPage: i,
                        store: l,
                        showLabel: S,
                        showIcon: b
                    }), [i, l, f, S, b]), h = or(e, t, { ...m,
                        ...t7
                    });
                    return (0, r.jsx)(t1, { ...h,
                        iconActionFrom: "collection_table_view",
                        showIcon: x ? "always" : "never",
                        iconSize: 20,
                        titlePropertyType: y ? "showPlaceholderAsTitle" : "hidePlaceholderText",
                        quickActionButtons: v,
                        linkifyText: !u,
                        commentsIndicatorStyle: t7.dbCommentButton,
                        userExpandable: p,
                        canEdit: u
                    })
                }),
                ot = {
                    actionButton: {
                        marginInlineStart: 10,
                        marginInlineEnd: 1,
                        order: 3
                    }
                },
                oo = (0, n.forwardRef)(function(e, t) {
                    let {
                        store: l
                    } = e, {
                        isPhone: i
                    } = (0, o(533992).Y0)(), a = (0, o(533992).v3)(), {
                        canEdit: s,
                        collectionContextStore: d
                    } = (0, n.useContext)(o(422575).L8), c = (0, o(682985).K8)(() => {
                        let e = o(596184).A.state;
                        return !!(e.isActive && e.store.id === l.id)
                    }, [l]), u = (0, o(682985).K8)(() => !!d && d.isInHomeWidgetStore.state, [d]), p = (0, o(682985).K8)(() => (0, o(597845).Wi)(a, l.id), [a, l]), y = (0, o(682985).K8)(() => (null == d ? void 0 : d.shouldShowPageIcon()) ? ? !0, [d]), f = (0, n.useMemo)(() => {
                        let e = !o(986939).A.isMobile && !p,
                            t = s && !c;
                        return e && (t ? (0, r.jsx)(t0, {
                            store: l
                        }) : (0, r.jsx)(o(931535).f, {
                            store: l,
                            showLabel: !1,
                            showIcon: !0
                        }))
                    }, [c, s, l, p]), m = (0, o(960253).I)(() => ({
                        buttonStyle: {
                            marginInlineStart: 0,
                            marginInlineEnd: 0,
                            paddingInlineStart: u ? o(681693).VQ / 2 : void 0,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: "auto",
                            maxWidth: void 0,
                            minWidth: i ? void 0 : o(228315).X
                        },
                        textStyle: {
                            fontSize: i ? o(642065).hN : o(642065).Mi,
                            whiteSpace: c ? "pre" : "nowrap",
                            pointerEvents: c ? void 0 : "none",
                            cursor: c ? "text" : void 0,
                            width: "auto",
                            textOverflow: c ? void 0 : "ellipsis"
                        },
                        recordIconStyle: {
                            marginInlineEnd: o(141973).mA,
                            height: u ? o(104509).Ev.sm : o(104509).Ev.lg,
                            width: u ? o(104509).Ev.sm : o(104509).Ev.lg
                        }
                    }), [c, u, i]), x = or(e, t, { ...m,
                        ...ot
                    }), S = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "title"
                    });
                    return (0, r.jsx)(t1, { ...x,
                        iconActionFrom: "collection_list_view",
                        showIcon: y ? "always" : "never",
                        iconSize: u ? 16 : o(141973).kG,
                        editButtonClickProps: void 0,
                        quickActionButtonsStyle: ot.actionButton,
                        quickActionButtons: f,
                        titlePropertyType: "inlineEditable",
                        canEdit: s,
                        textStyle: { ...m.textStyle,
                            ...S.buttonStyle
                        }
                    })
                }),
                on = (0, n.forwardRef)(function(e, t) {
                    o(773352).log({
                        level: "error",
                        from: "BlockPropertyValue",
                        type: "BlockPropertyValue.InvalidTitlePropertyFormat"
                    });
                    let l = or(e, t),
                        {
                            canEdit: i
                        } = (0, n.useContext)(o(422575).L8);
                    return (0, r.jsx)(t1, { ...l,
                        iconActionFrom: "collection_table_view",
                        showIcon: "always",
                        iconSize: 20,
                        titlePropertyType: "hidePlaceholderText",
                        canEdit: i
                    })
                });

            function or(e, t, n) {
                let {
                    collectionStore: r,
                    disabled: l,
                    forceMouseEntered: i,
                    surface: a,
                    onContextMenu: s,
                    onTab: d,
                    onUntab: c,
                    property: u,
                    store: p,
                    width: y
                } = e;
                return {
                    ref: t,
                    store: p,
                    collectionStore: r,
                    property: u,
                    disabled: l,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onContextMenu: s,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    textStyle: null == n ? void 0 : n.textStyle,
                    recordIconStyle: null == n ? void 0 : n.recordIconStyle,
                    quickActionButtonsStyle: null == n ? void 0 : n.quickActionButtonsStyle,
                    surface: a,
                    onTab: d,
                    onUntab: c,
                    forceMouseEntered: i,
                    width: y
                }
            }

            function ol(e) {
                return (0, r.jsx)("div", {
                    style: o(986939).A.isMobile ? {
                        padding: "12px 20px",
                        fontSize: 14
                    } : {
                        fontSize: 12,
                        display: "flex",
                        alignItems: "center"
                    },
                    children: (0, r.jsx)(oi, { ...e
                    })
                })
            }

            function oi(e) {
                let {
                    verificationState: t,
                    blockStore: n
                } = e, l = (0, o(109939).tz)();
                switch (t.type) {
                    case "none":
                        return null;
                    case "verified":
                        if (t.isIndefinite) return (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "Verified by {user} on {date}",
                            id: "VerificationSummary.verifiedIndefinitely",
                            values: {
                                user: (0, r.jsx)(oa, {
                                    actorPointer: t.actorPointer,
                                    blockStore: n
                                }),
                                date: (0, o(931990).OH)({
                                    dateTime: t.startDateTime,
                                    intl: l
                                })
                            }
                        });
                        return (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "Verified by {user} from {dateTimeRange}",
                            id: "VerificationSummary.verified",
                            values: {
                                user: (0, r.jsx)(oa, {
                                    actorPointer: t.actorPointer,
                                    blockStore: n
                                }),
                                dateTimeRange: (0, o(931990).do)({
                                    luxonRange: t.dateTimeRange,
                                    intl: l
                                })
                            }
                        });
                    case "expired":
                        return (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "Last verified by {user} from {dateTimeRange}",
                            id: "VerificationSummary.verificationExpired",
                            values: {
                                user: (0, r.jsx)(oa, {
                                    actorPointer: t.actorPointer,
                                    blockStore: n
                                }),
                                dateTimeRange: (0, o(931990).do)({
                                    luxonRange: t.dateTimeRange,
                                    intl: l
                                })
                            }
                        });
                    case "archived":
                        return (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "Archived by {user} on {date}",
                            id: "VerificationSummary.archivedIndefinitely",
                            values: {
                                user: (0, r.jsx)(oa, {
                                    actorPointer: t.actorPointer,
                                    blockStore: n
                                }),
                                date: (0, o(931990).OH)({
                                    dateTime: t.startDateTime,
                                    intl: l
                                })
                            }
                        });
                    default:
                        (0, o(722371).HB)(t)
                }
            }

            function oa(e) {
                let {
                    actorPointer: t,
                    blockStore: n
                } = e, l = (0, o(682985).K8)(() => (0, o(935786).JQ)({
                    parentStore: n,
                    pointer: t
                }), [n, t]), i = {
                    display: "flex",
                    marginInlineStart: 4,
                    marginInlineEnd: 4
                };
                return l.table === o(514214).oo ? (0, r.jsx)(o(980494).A, {
                    userStore: l,
                    inline: !0,
                    style: i,
                    avatarSize: 16,
                    avatarMarginRight: 4,
                    hasPersonHoverCard: !1
                }) : l.table === o(890920).GP ? (0, r.jsx)(o(59724).A, {
                    botStore: l,
                    style: i,
                    avatarSize: 16
                }) : void(0, o(722371).HB)(l)
            }
            let os = n.memo(n.forwardRef(function(e, t) {
                    var l;
                    let {
                        property: i,
                        store: a,
                        collectionStore: s,
                        buttonStyle: d,
                        editButtonClickProps: c,
                        EmptyComponent: u
                    } = e, {
                        canEdit: p,
                        propertySchema: y,
                        baseStyles: f,
                        collectionSchemaStore: m
                    } = (0, n.useContext)(o(422575).L8), x = (0, o(682985).K8)(() => {
                        let e = m.getState();
                        return !!y && !!e && o(799514).E5(y, a, e)
                    }, [y, m, a]), S = (0, o(682985).K8)(() => {
                        var e;
                        if (s.isPageTreeCollection()) return !0;
                        let t = null == a || null == (e = a.getSpaceStore()) ? void 0 : e.getModel();
                        return !!t && (0, o(764498).X)(t)
                    }, [s, a]), b = (0, o(682985).K8)(() => {
                        let e = a.getPropertyValue(i);
                        return (0, o(435137).I7)((0, o(435137).U1)(e))
                    }, [i, a]), v = (0, o(682985).K8)(() => a.isArchived() ? ? !1, [a]), h = !p || !x || !S || "none" === b.type && v, g = (0, o(960253).I)(() => ({
                        buttonStyle: { ...f.buttonStyle,
                            ...d,
                            cursor: h ? "text" : "pointer"
                        },
                        buttonPressedStyle: f.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: f.buttonHoveredStyle ? ? {}
                    }), [f.buttonHoveredStyle, f.buttonPressedStyle, f.buttonStyle, d, h]), j = (0, n.useMemo)(() => {
                        if ("none" !== b.type) return (0, r.jsx)(ol, {
                            verificationState: b,
                            blockStore: a
                        })
                    }, [a, b]), k = (0, o(682985).K8)(() => {
                        var e;
                        let t = !x || !S,
                            n = m.getState();
                        if (!t || !n) return;
                        if (!S) return (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "Upgrade plan to edit verification",
                            id: "VerificationPropertyButton.tooltip.nonWikiVerificationRestrictedToBusinessTier"
                        });
                        let l = null == y ? void 0 : y.verifier_property,
                            i = l ? null == (e = n[l]) ? void 0 : e.name : void 0;
                        return (0, r.jsx)(oc, {
                            verifierPropertyName: i
                        })
                    }, [x, m, S, null == y ? void 0 : y.verifier_property]), w = v && "none" === b.type ? (0, r.jsx)(o(109939).sA, {
                        defaultMessage: "Unarchive this page to verify it",
                        id: "VerificationPropertyButton.tooltip.pageArchived"
                    }) : void 0, I = "none" === b.type;
                    return I && void 0 === u ? null : (0, r.jsx)(o(858439).P, {
                        ref: t,
                        editButtonClickProps: h ? void 0 : c,
                        style: g.buttonStyle,
                        hoveredStyle: g.buttonHoveredStyle,
                        pressedStyle: g.buttonPressedStyle,
                        tooltipPropertyValue: j,
                        tooltipPropertyCaption: k || w,
                        children: I && void 0 !== u ? (0, r.jsx)(u, {}) : (0, r.jsx)(o(106142).r, {
                            verificationState: b,
                            fontSize: null == (l = f.buttonStyle) ? void 0 : l.fontSize
                        })
                    })
                })),
                od = {
                    style0: {
                        fontWeight: o(699422).Wy.bold
                    }
                };

            function oc(e) {
                let {
                    verifierPropertyName: t
                } = e;
                return t ? (0, r.jsx)(o(109939).sA, {
                    defaultMessage: "Only people listed in {verifierPropertyName} can verify this page",
                    id: "VerificationPropertyButton.tooltip.editRestrictedToVerifier",
                    values: {
                        verifierPropertyName: (0, r.jsx)("span", {
                            style: od.style0,
                            children: t
                        })
                    }
                }) : (0, r.jsx)(o(109939).sA, {
                    defaultMessage: "Only page owners can verify this page",
                    id: "VerificationPropertyButton.tooltip.editRestrictedToOwner"
                })
            }
            let ou = n.forwardRef(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = og(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).table.text
                            }
                        }), [n]));
                    return (0, r.jsx)(os, { ...l,
                        EmptyComponent: o(959110).rW
                    })
                }),
                op = n.forwardRef(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = og(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).page.text
                            }
                        }), [n]));
                    return (0, r.jsx)(os, { ...l,
                        EmptyComponent: o(959110).ao
                    })
                }),
                oy = n.forwardRef(function(e, t) {
                    let n = (0, o(533992).WS)(),
                        l = og(e, t, (0, o(960253).I)(() => ({
                            buttonStyle: { ...(0, o(642065)._Q)({
                                    isPhone: n
                                }).compact_page.text
                            }
                        }), [n]));
                    return (0, r.jsx)(os, { ...l,
                        EmptyComponent: o(959110).ao
                    })
                }),
                of = n.forwardRef(function(e, t) {
                    let n = og(e, t);
                    return (0, r.jsx)(os, { ...n,
                        EmptyComponent: o(959110).Fe
                    })
                }),
                om = n.forwardRef(function(e, t) {
                    let {
                        collectionStore: l,
                        store: i,
                        showIfEmpty: a
                    } = e, {
                        propertySchema: s
                    } = (0, n.useContext)(o(422575).L8), d = (0, o(682985).K8)(() => l.getSchema(), [l]), c = (0, o(682985).K8)(() => !!s && o(799514).E5(s, i, d), [s, d, i]), u = (0, o(228315).F)({
                        ref: t,
                        collectionStore: e.collectionStore,
                        property: e.property,
                        propertyType: "verification"
                    }), p = og(e, t, u);
                    return (0, r.jsx)(os, { ...p,
                        EmptyComponent: a && c ? o(959110).Jb : void 0
                    })
                }),
                ox = n.forwardRef(function(e, t) {
                    let {
                        collectionStore: l,
                        store: i,
                        showIfEmpty: a
                    } = e, {
                        propertySchema: s
                    } = (0, n.useContext)(o(422575).L8), d = (0, o(682985).K8)(() => l.getSchema(), [l]), c = (0, o(682985).K8)(() => !!s && o(799514).E5(s, i, d), [s, d, i]), u = (0, o(533992).WS)(), p = og(e, t, (0, o(960253).I)(() => ({
                        buttonStyle: { ...(0, o(642065)._Q)({
                                isPhone: u
                            }).card.text
                        }
                    }), [u]));
                    return (0, r.jsx)(os, { ...p,
                        EmptyComponent: a && c ? o(959110).Jb : void 0
                    })
                }),
                oS = n.forwardRef(function(e, t) {
                    let o = og(e, t);
                    return (0, r.jsx)(os, { ...o
                    })
                }),
                ob = n.forwardRef(function(e, t) {
                    let o = og(e, t);
                    return (0, r.jsx)(os, { ...o
                    })
                }),
                ov = n.forwardRef(function(e, t) {
                    let o = og(e, t);
                    return (0, r.jsx)(os, { ...o
                    })
                }),
                oh = n.forwardRef(function(e, t) {
                    let o = og(e, t);
                    return (0, r.jsx)(os, { ...o
                    })
                });

            function og(e, t, n) {
                let {
                    store: r,
                    collectionStore: l,
                    property: i,
                    onClick: a,
                    onContextMenu: s
                } = e;
                return {
                    ref: t,
                    store: r,
                    collectionStore: l,
                    property: i,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onClick: a,
                    onContextMenu: s,
                    buttonStyle: null == n ? void 0 : n.buttonStyle
                }
            }
            let oj = {
                    propertyDiff: {
                        backgroundColor: o(632079).Tj.blue.background.secondary,
                        borderRadius: 4,
                        display: "flex",
                        alignItems: "center"
                    }
                },
                ok = n.memo(n.forwardRef(function(e, t) {
                    let {
                        property: n,
                        surface: l,
                        propertyType: i,
                        innerProps: a
                    } = e, s = (0, o(151193).b)(a.store);
                    if (!i) return null;
                    let d = ow[l][i];
                    if (!d) return null;
                    let c = (0, r.jsx)(d, {
                        ref: t,
                        ...a,
                        property: n,
                        surface: l
                    });
                    return (null == s ? void 0 : s.some(e => e.propertyId === n)) ? (0, r.jsx)("div", {
                        style: oj.propertyDiff,
                        children: c
                    }) : c
                })),
                ow = {
                    table: {
                        checkbox: z,
                        created_by: o(991178).JJ,
                        created_time: o(269924).wW,
                        date: o(269924).wW,
                        email: J,
                        file: eu,
                        formula: o(157912).GF,
                        last_edited_by: o(991178).JJ,
                        last_edited_time: o(269924).wW,
                        last_visited_time: o(269924).wW,
                        location: eD,
                        multi_select: o(652771).jd,
                        number: e9,
                        person: o(991178).JJ,
                        phone_number: J,
                        relation: o(265499).Kr,
                        rollup: o(937975).gN,
                        select: tS,
                        status: tR,
                        text: tQ,
                        title: oe,
                        url: J,
                        verification: ou,
                        auto_increment_id: a,
                        button: v,
                        place: ti
                    },
                    calendar: {
                        checkbox: H,
                        created_by: o(991178).Jd,
                        created_time: o(269924).y9,
                        date: o(269924).y9,
                        email: X,
                        file: ev,
                        formula: o(157912).G$,
                        last_edited_by: o(991178).Jd,
                        last_edited_time: o(269924).y9,
                        last_visited_time: o(269924).y9,
                        location: eJ,
                        multi_select: o(652771).V6,
                        number: e1,
                        person: o(991178).Jd,
                        phone_number: X,
                        relation: o(265499).eH,
                        rollup: o(937975)._s,
                        select: tj,
                        status: tz,
                        text: tU,
                        title: on,
                        url: X,
                        verification: oS,
                        auto_increment_id: p,
                        button: _,
                        place: tu
                    },
                    list: {
                        checkbox: F,
                        created_by: o(991178).VW,
                        created_time: o(269924).g$,
                        date: o(269924).g$,
                        email: G,
                        file: ex,
                        formula: o(157912).A7,
                        last_edited_by: o(991178).VW,
                        last_edited_time: o(269924).g$,
                        last_visited_time: o(269924).g$,
                        location: eN,
                        multi_select: o(652771).h3,
                        number: e5,
                        person: o(991178).VW,
                        phone_number: G,
                        relation: o(265499).eM,
                        rollup: o(937975).Q4,
                        select: th,
                        status: tB,
                        text: tO,
                        title: oo,
                        url: G,
                        verification: om,
                        auto_increment_id: c,
                        button: k,
                        place: td
                    },
                    board: {
                        checkbox: W,
                        created_by: o(991178).DC,
                        created_time: o(269924).Um,
                        date: o(269924).Um,
                        email: Z,
                        file: eb,
                        formula: o(157912).sK,
                        last_edited_by: o(991178).DC,
                        last_edited_time: o(269924).Um,
                        last_visited_time: o(269924).Um,
                        location: eU,
                        multi_select: o(652771).nD,
                        number: e6,
                        person: o(991178).DC,
                        phone_number: Z,
                        relation: o(265499).ki,
                        rollup: o(937975).aG,
                        select: tg,
                        status: tM,
                        text: tN,
                        title: on,
                        url: Z,
                        verification: ox,
                        auto_increment_id: u,
                        button: I,
                        place: tc
                    },
                    gallery: {
                        checkbox: W,
                        created_by: o(991178).DC,
                        created_time: o(269924).Um,
                        date: o(269924).Um,
                        email: Z,
                        file: eb,
                        formula: o(157912).sK,
                        last_edited_by: o(991178).DC,
                        last_edited_time: o(269924).Um,
                        last_visited_time: o(269924).Um,
                        location: eU,
                        multi_select: o(652771).nD,
                        number: e6,
                        person: o(991178).DC,
                        phone_number: Z,
                        relation: o(265499).ki,
                        rollup: o(937975).aG,
                        select: tg,
                        status: tM,
                        text: tN,
                        title: on,
                        url: Z,
                        verification: ox,
                        auto_increment_id: u,
                        button: I,
                        place: tc
                    },
                    timeline: {
                        checkbox: D,
                        created_by: o(991178).cE,
                        created_time: o(269924).vy,
                        date: o(269924).vy,
                        email: ee,
                        file: eh,
                        formula: o(157912).Rm,
                        last_edited_by: o(991178).cE,
                        last_edited_time: o(269924).vy,
                        last_visited_time: o(269924).vy,
                        location: eY,
                        multi_select: o(652771).ej,
                        number: e8,
                        person: o(991178).cE,
                        phone_number: ee,
                        relation: o(265499).DE,
                        rollup: o(937975).TN,
                        select: tk,
                        status: tL,
                        text: tJ,
                        title: on,
                        url: ee,
                        verification: ob,
                        auto_increment_id: y,
                        button: T,
                        place: tp
                    },
                    page: {
                        checkbox: L,
                        created_by: o(991178).e7,
                        created_time: o(269924).zI,
                        date: o(269924).zI,
                        email: Y,
                        file: ey,
                        formula: o(157912).lS,
                        last_edited_by: o(991178).e7,
                        last_edited_time: o(269924).zI,
                        last_visited_time: o(269924).zI,
                        location: eQ,
                        multi_select: o(652771).I8,
                        number: e0,
                        person: o(991178).e7,
                        phone_number: Y,
                        relation: o(265499).hF,
                        rollup: o(937975).p0,
                        select: tb,
                        status: tA,
                        text: tD,
                        title: on,
                        url: Y,
                        verification: op,
                        auto_increment_id: i,
                        button: h,
                        place: tr
                    },
                    compact_page: {
                        checkbox: V,
                        created_by: o(991178)._R,
                        created_time: o(269924).v,
                        date: o(269924).v,
                        email: $,
                        file: ef,
                        formula: o(157912).HZ,
                        last_edited_by: o(991178)._R,
                        last_edited_time: o(269924).v,
                        last_visited_time: o(269924).v,
                        location: eq,
                        multi_select: o(652771).S1,
                        number: e2,
                        person: o(991178)._R,
                        phone_number: $,
                        relation: o(265499).$s,
                        rollup: o(937975).Pv,
                        select: tv,
                        status: tE,
                        text: tq,
                        title: on,
                        url: $,
                        verification: oy,
                        auto_increment_id: s,
                        button: g,
                        place: ts
                    },
                    relation: {
                        checkbox: Q,
                        created_by: o(991178).L$,
                        created_time: o(269924).Qz,
                        date: o(269924).Qz,
                        email: et,
                        file: eg,
                        formula: o(157912).s3,
                        last_edited_by: o(991178).L$,
                        last_edited_time: o(269924).Qz,
                        last_visited_time: o(269924).Qz,
                        location: e$,
                        multi_select: o(652771).xV,
                        number: e3,
                        person: o(991178).L$,
                        phone_number: et,
                        relation: o(265499).I5,
                        rollup: o(937975).wM,
                        select: tw,
                        status: tV,
                        text: tY,
                        title: on,
                        url: et,
                        verification: ov,
                        auto_increment_id: f,
                        button: R,
                        place: ty
                    },
                    relation_section: {
                        checkbox: q,
                        created_by: o(991178).K2,
                        created_time: o(269924).RM,
                        date: o(269924).RM,
                        email: eo,
                        file: ej,
                        formula: o(157912).VD,
                        last_edited_by: o(991178).K2,
                        last_edited_time: o(269924).RM,
                        last_visited_time: o(269924).RM,
                        location: eG,
                        multi_select: o(652771).ER,
                        number: e4,
                        person: o(991178).K2,
                        phone_number: eo,
                        relation: o(265499).$$,
                        rollup: o(937975).N$,
                        select: tI,
                        status: tK,
                        text: t$,
                        title: on,
                        url: eo,
                        verification: oh,
                        auto_increment_id: m,
                        button: A,
                        place: tf
                    },
                    mini: {
                        checkbox: O,
                        created_by: o(991178).K1,
                        created_time: o(269924).BP,
                        date: o(269924).BP,
                        email: en,
                        file: em,
                        formula: o(157912).pe,
                        last_edited_by: o(991178).K1,
                        last_edited_time: o(269924).BP,
                        last_visited_time: o(269924).BP,
                        location: eO,
                        multi_select: o(652771)._Z,
                        number: e7,
                        person: o(991178).K1,
                        phone_number: en,
                        relation: o(265499).F1,
                        rollup: o(937975).Xh,
                        select: t_,
                        status: tF,
                        text: tG,
                        title: on,
                        url: en,
                        verification: of ,
                        auto_increment_id: d,
                        button: j,
                        place: tm
                    },
                    property_module: {
                        checkbox: L,
                        created_by: o(991178).oN,
                        created_time: o(269924).zI,
                        date: o(269924).zI,
                        email: Y,
                        file: ek,
                        formula: o(157912).lS,
                        last_edited_by: o(991178).oN,
                        last_edited_time: o(269924).zI,
                        last_visited_time: o(269924).zI,
                        location: eQ,
                        multi_select: o(652771).I8,
                        number: e0,
                        person: o(991178).oN,
                        phone_number: Y,
                        relation: o(265499).bn,
                        rollup: o(937975).p0,
                        select: tb,
                        status: tA,
                        text: tD,
                        title: on,
                        url: Y,
                        verification: op,
                        auto_increment_id: i,
                        button: h,
                        place: ta
                    },
                    feed: {
                        checkbox: F,
                        created_by: o(991178).VW,
                        created_time: o(269924).g$,
                        date: o(269924).g$,
                        email: G,
                        file: ex,
                        formula: o(157912).A7,
                        last_edited_by: o(991178).VW,
                        last_edited_time: o(269924).g$,
                        last_visited_time: o(269924).g$,
                        location: eN,
                        multi_select: o(652771).h3,
                        number: e5,
                        person: o(991178).VW,
                        phone_number: G,
                        relation: o(265499).eM,
                        rollup: o(937975).Q4,
                        select: th,
                        status: tB,
                        text: tO,
                        title: oo,
                        url: G,
                        verification: om,
                        auto_increment_id: c,
                        button: k,
                        place: td
                    }
                }
        },
        808111: (e, t, o) => {
            o.d(t, {
                u: () => n
            });

            function n(e, t, n) {
                (0, o(195857).DO_NOT_USE_trackLegacy)(t, n)
            }
        },
        826725: (e, t, o) => {
            o.d(t, {
                T: () => r
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 0.85 9.94 14.3",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M7.47 1.07a.75.75 0 0 1 1.06 0l.003.002L12.73 5.27a.75.75 0 1 1-1.06 1.06L8 2.66 4.33 6.33a.75.75 0 1 1-1.06-1.06zm0 13.86-4.2-4.2a.75.75 0 0 1 1.06-1.06L8 13.34l3.67-3.67a.75.75 0 0 1 1.06 1.06l-4.195 4.195-.005.005a.75.75 0 0 1-1.046.014"
                    })
                },
                r = (0, o(104509).wt)("arrowChevronDoubleUpAndDownFillSmall", n, "fillSmall")
        },
        890898: (e, t, o) => {
            o.d(t, {
                g: () => i
            });
            var n = o(296540),
                r = o(474848);
            let l = {
                style0: {
                    marginInlineEnd: 3,
                    fill: o(632079).Tj.icon.secondary
                }
            };

            function i({
                store: e,
                iconStyle: t,
                size: a,
                buttonStyle: s
            }) {
                let d = (0, o(533992).v3)(),
                    c = (0, n.useRef)(null),
                    u = (0, o(682985).K8)(() => o(966980).oC(e, {
                        recursivelyLoadAllDiscussions: !1
                    }), [e]),
                    {
                        menuOpen: p,
                        menuStoreId: y
                    } = (0, o(682985).K8)(() => {
                        let e = o(575125).A.state.open,
                            t = e ? o(575125).A.state.blockStore.id : void 0;
                        return {
                            menuOpen: e,
                            menuStoreId: t
                        }
                    }, []),
                    f = (0, n.useCallback)(() => {
                        var t;
                        p && y === e.id ? o(821243).xl() : (o(821243).xl(), o(821243).B4({
                            environment: d,
                            blockStore: e,
                            shouldFocusDiscussion: !0,
                            analyticsFrom: "db_page_comments",
                            rect: null == (t = c.current) ? void 0 : t.getBoundingClientRect(),
                            recursivelyLoadAllDiscussions: !1
                        }))
                    }, [p, y, d, e]);
                return 0 === u ? null : (0, r.jsx)(o(988022).p, {
                    "aria-label": "Open comments",
                    ref: c,
                    size: "xs",
                    style: s,
                    onClick: f,
                    children: (0, r.jsxs)("div", {
                        style: t,
                        children: [(0, r.jsx)(o(16275).I, {
                            icon: o(366326)._,
                            size: a ? ? o(104509).Ev.sm,
                            style: l.style0
                        }), u]
                    })
                })
            }
        },
        918712: (e, t, o) => {
            function n(e) {
                o(986939).A.isMobile ? function(e) {
                    let {
                        collectionSettingsStore: t
                    } = e;
                    "create_automation" === e.mode ? (0, o(76790).a)({
                        collectionSettingsStore: t,
                        item: {
                            type: "mobileCreateAutomation",
                            from: e.from,
                            source: e.source
                        }
                    }) : "edit_automation" === e.mode ? (0, o(76790).a)({
                        collectionSettingsStore: t,
                        item: {
                            type: "mobileEditAutomation",
                            source: e.source,
                            automationId: e.automationId
                        }
                    }) : "edit_button_property" === e.mode ? (0, o(76790).a)({
                        collectionSettingsStore: t,
                        item: {
                            type: "mobileEditButtonAutomation",
                            property: e.property,
                            propertySchema: e.propertySchema
                        }
                    }) : (0, o(722371).HB)(e)
                }(e) : function(e) {
                    let {
                        collectionSettingsStore: t,
                        collectionStore: n,
                        collectionViewBlockStore: r,
                        collectionViewStore: l,
                        readOnly: i
                    } = e;
                    "create_automation" === e.mode ? o(488098).L.setState({
                        type: "open_automation",
                        props: {
                            mode: "create",
                            collectionStore: n,
                            collectionViewBlockStore: r,
                            collectionViewStore: l,
                            collectionSettingsStore: t,
                            from: e.from,
                            source: e.source,
                            readOnly: i
                        }
                    }) : "edit_automation" === e.mode ? o(488098).L.setState({
                        type: "open_automation",
                        props: {
                            mode: "update",
                            collectionStore: n,
                            collectionViewBlockStore: r,
                            collectionViewStore: l,
                            collectionSettingsStore: t,
                            automationId: e.automationId,
                            source: e.source,
                            readOnly: i
                        }
                    }) : "edit_button_property" === e.mode ? o(488098).L.setState({
                        type: "open_button",
                        props: {
                            collectionStore: n,
                            collectionViewBlockStore: r,
                            collectionViewStore: l,
                            collectionSettingsStore: t,
                            disableCollectionSettingsInput: e.disableCollectionSettingsInput,
                            property: e.property,
                            propertySchema: e.propertySchema
                        }
                    }) : (0, o(722371).HB)(e)
                }(e)
            }

            function r(e) {
                let {
                    collectionSettingsStore: t
                } = e;
                o(986939).A.isMobile ? (0, o(465370).y)({
                    collectionSettingsStore: t
                }) : o(488098).L.setState({
                    type: "closed"
                })
            }
            o.d(t, {
                V: () => r,
                h: () => n
            })
        },
        931535: (e, t, o) => {
            o.d(t, {
                f: () => a
            });
            var n = o(296540),
                r = o(474848);
            let l = (0, o(109939).YK)({
                    openAsPageTitle: {
                        defaultMessage: "Open",
                        id: "database.actionButton.openAsPageTitle"
                    },
                    closeTitle: {
                        defaultMessage: "Close",
                        id: "peekTopbar.close.button"
                    },
                    closeSidePeekTooltip: {
                        defaultMessage: "Close side peek",
                        id: "agentSidePeek.chevronButton.ariaLabel"
                    }
                }),
                i = {
                    buttonHoveredStyle: {
                        background: o(632079).Tj.whiteButtonHoveredBackground
                    },
                    buttonPressedStyle: {
                        background: o(632079).Tj.whiteButtonPressedBackground
                    }
                };

            function a(e) {
                let t = (0, o(109939).tz)(),
                    {
                        navigate: a
                    } = (0, n.useContext)(o(44894).E),
                    {
                        store: s,
                        handleOpenPeekPage: d,
                        showLabel: c,
                        showIcon: u
                    } = e,
                    p = (0, o(533992).v3)(),
                    y = (0, o(713311).Ks)(),
                    f = (0, o(682985).K8)(() => void 0 !== y ? o(28630).hH(y) : "full_page", [y]),
                    m = n.useMemo(() => (0, o(793550).lA)(f, !1), [f]),
                    x = (0, o(682985).K8)(() => {
                        if ("side_peek" !== f || !o(475097).default.isSidePeekOpen()) return !1;
                        let e = o(475097).default.peekTargetStore.state;
                        if (!e) return !1;
                        let t = (0, o(765815).z)(s);
                        return e.id === t.id
                    }, [f, s]),
                    S = x ? t.formatMessage(l.closeSidePeekTooltip) : m.tooltip,
                    b = x ? t.formatMessage(l.closeTitle) : t.formatMessage(l.openAsPageTitle),
                    v = (0, n.useCallback)(() => (0, o(483227).Ef)({
                        environment: p,
                        updates: {
                            store: s,
                            fullyQualified: !0,
                            pageVisitSource: o(254656).y8.LinkInPage
                        }
                    }), [p, s]),
                    h = (0, n.useCallback)(() => {
                        let e = o(728372).AppStoreMainEditorCurrentBlockStore.state;
                        return o(28630).wy({
                            environment: p,
                            store: (0, o(765815).z)(s),
                            mainEditorCurrentBlockStore: e,
                            collectionContextStore: y,
                            fullyQualified: !1
                        })
                    }, [p, y, s]),
                    g = (0, n.useCallback)(e => {
                        if (x) return void o(270912).VN({
                            environment: p,
                            from: "close_button"
                        });
                        if (e.metaKey || e.ctrlKey) a({
                            environment: p,
                            url: v(),
                            openInNew: "tab"
                        });
                        else {
                            let e = o(986939).A.isMobile ? v() : h();
                            if (!e) return;
                            null == d || d(), a({
                                environment: p,
                                url: e
                            })
                        }
                    }, [p, h, v, d, x, a]),
                    j = (0, n.useCallback)(e => {
                        1 === e.button && a({
                            environment: p,
                            url: v(),
                            openInNew: "tab"
                        })
                    }, [p, v, a]),
                    k = (0, n.useCallback)(e => {
                        (0, o(705660).SQ)(e, o(705660).y$.EditorMouseDown, () => {
                            e.preventDefault()
                        })
                    }, []),
                    {
                        startDwell: w,
                        stopDwell: I
                    } = (0, o(150671).C)(o(508941).T.short),
                    _ = (0, n.useCallback)(() => w(p.currentUser.id, s.id), [w, p.currentUser.id, s.id]),
                    C = (0, n.useCallback)(() => I(), [I]),
                    T = (0, o(960253).I)(() => ({
                        buttonStyle: {
                            color: o(632079).Tj.text.secondary,
                            fill: o(632079).Tj.text.secondary,
                            fontFamily: o(699422).Tf.sans,
                            ...!c && {
                                width: 26
                            },
                            background: o(632079).Tj.whiteButtonBackground,
                            fontSize: 12,
                            fontWeight: o(699422).Wy.medium,
                            textTransform: "uppercase",
                            letterSpacing: .5,
                            borderRadius: 4,
                            height: 20,
                            display: "flex",
                            alignItems: "center",
                            gap: 6 * !!c,
                            paddingInlineStart: 4,
                            paddingInlineEnd: 4
                        }
                    }), [c]),
                    P = (0, n.useCallback)(() => S, [S]),
                    R = n.useMemo(() => u ? {
                        icon: m.icon,
                        size: "default",
                        colorVariant: "secondary"
                    } : void 0, [m.icon, u]),
                    A = (0, n.useCallback)(e => (0, r.jsx)("div", {
                        onAuxClick: j,
                        onMouseDown: k,
                        onMouseEnter: _,
                        onMouseLeave: C,
                        role: "button",
                        tabIndex: 0,
                        children: (0, r.jsxs)(o(64960).Ay, {
                            onClick: g,
                            ariaLabel: S,
                            style: T.buttonStyle,
                            hoveredStyle: i.buttonHoveredStyle,
                            pressedStyle: i.buttonPressedStyle,
                            ...e,
                            children: [R ? (0, r.jsx)(o(16275).I, { ...R,
                                fitToViewBox: "horizontal"
                            }) : null, c ? b : void 0]
                        })
                    }), [j, k, _, C, g, R, S, T.buttonStyle, c, b]);
                return (0, r.jsx)(o(51831).m, {
                    content: P,
                    children: A
                })
            }
        },
        931990: (e, t, o) => {
            function n(e) {
                let {
                    dateTime: t,
                    intl: n,
                    shortenDateAndRange: r
                } = e, l = o(25825).C6.toPersistedDate(t.valueOf());
                return o(850640).ZF({
                    value: l,
                    allowRelativeDates: !0,
                    intl: n,
                    shortenDateAndRange: r,
                    displayInUserTimezone: !0
                })
            }

            function r(e) {
                let {
                    dateTime: t,
                    intl: n,
                    userTimeZone: r,
                    displayInUserTimezone: l,
                    alwaysIncludeTimezone: i
                } = e, a = o(25825).C6.toPersistedDateTime(t.valueOf(), t.zoneName);
                return o(850640).ZF({
                    value: a,
                    allowRelativeDates: !0,
                    intl: n,
                    userTimeZone: r,
                    displayInUserTimezone: l,
                    alwaysIncludeTimezone: i
                })
            }

            function l(e) {
                let {
                    luxonRange: t,
                    intl: n
                } = e, r = o(25825).C6.toPersistedDateRange(t), l = o(850640).ZF({
                    value: r,
                    allowRelativeDates: !1,
                    shortenDateAndRange: !0,
                    intl: n,
                    displayInUserTimezone: !0
                }), i = t.end.setZone((0, o(714350).P)()), a = o(850640).fU({
                    start_time: i.toFormat(o(943003).GE),
                    humanReadable: !1,
                    intl: n
                });
                return n.formatMessage({
                    id: "verification.timeRange",
                    defaultMessage: "{formattedDateRange} at {formattedEndTime}"
                }, {
                    formattedDateRange: l,
                    formattedEndTime: a
                })
            }
            o.d(t, {
                OH: () => n,
                T2: () => r,
                do: () => l
            })
        },
        934181: (e, t, o) => {
            o.d(t, {
                p: () => r
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.46 2.46 11.08 11.08",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M3.088 2.463a.625.625 0 0 0-.625.625v4a.625.625 0 1 0 1.25 0V4.597l3.045 3.045a.625.625 0 0 0 .884-.884L4.597 3.713h2.49a.625.625 0 1 0 0-1.25zM9.244 8.36a.625.625 0 0 0-.883.884l3.042 3.043H8.912a.625.625 0 1 0 0 1.25h4c.345 0 .625-.28.625-.625v-4a.625.625 0 0 0-1.25 0v2.491z"
                    })
                },
                r = (0, o(104509).wt)("arrowExpandDiagonalSmall", n, "small")
        },
        966559: (e, t, o) => {
            o.r(t), o.d(t, {
                exclamationMarkCircleSmallIcon: () => l,
                iconDefinition: () => r
            }), o(296540);
            var n = o(474848);
            let r = {
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
                l = (0, o(104509).wt)("exclamationMarkCircleSmall", r, "small")
        },
        980494: (e, t, o) => {
            o.d(t, {
                A: () => l
            }), o(296540);
            var n = o(474848);
            let r = {
                    style0: { ...o(699422).RC
                    }
                },
                l = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        l = {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...e.style
                        },
                        i = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: a,
                            avatarShouldShowShadow: s,
                            avatarSize: d,
                            hasTooltip: c,
                            tooltipHeader: u,
                            hasPersonHoverCard: p,
                            spaceStore: y
                        } = e,
                        f = (0, o(109939).tz)(),
                        m = (0, o(682985).K8)(() => null == a ? void 0 : a.getDisplayName(f), [a, f]),
                        x = (0, n.jsxs)("div", {
                            style: l,
                            children: [(0, n.jsx)("div", {
                                style: i,
                                children: (0, n.jsx)(o(321753).A, {
                                    userStore: a,
                                    avatarShouldShowShadow: s,
                                    size: d,
                                    hasTooltip: c && !p,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: u
                                })
                            }), (0, n.jsx)("div", {
                                className: "notranslate",
                                style: r.style0,
                                children: m
                            })]
                        });
                    return p ? (0, n.jsx)(o(532755).D, {
                        userStore: a,
                        spaceStore: y,
                        from: e.personHoverCardEntrypoint,
                        children: x
                    }) : x
                }
        },
        991178: (e, t, o) => {
            o.d(t, {
                Jd: () => j,
                DC: () => g,
                _R: () => S,
                VW: () => h,
                K1: () => b,
                e7: () => x,
                de: () => u,
                oN: () => v,
                L$: () => w,
                K2: () => I,
                JJ: () => m,
                cE: () => k,
                Dd: () => _
            }), o(16280), o(898992), o(354520), o(581454);
            var n = o(296540);
            let r = {},
                l = new(o(815048)).O2("PropertyModulePersonProperty", async () => await Promise.all([o.e(40994), o.e(80139), o.e(17250), o.e(28048), o.e(55940), o.e(12560), o.e(21969), o.e(74145), o.e(18682), o.e(79349), o.e(47414), o.e(96579), o.e(9817), o.e(29447), o.e(75189), o.e(82120)]).then(o.bind(o, 754825))),
                i = (0, o(815048)._h)(l, e => e.PersonPropertyModule);
            var a = o(474848);
            let s = {
                    maxHeight: "min(50vh, 300px)",
                    overflowY: "auto"
                },
                d = {
                    maxWidth: 300,
                    paddingTop: 0,
                    paddingBottom: 0
                },
                c = n.memo(function({
                    children: e,
                    actors: t,
                    placement: n = "bottom",
                    alignment: r = "start",
                    disableTooltip: l = !1,
                    avatarSize: i
                }) {
                    let c = (0, o(533992).WS)();
                    return l = l || c || t.length < 1, (0, a.jsx)(o(51831).m, {
                        placement: n,
                        alignment: r,
                        disableTooltip: l,
                        style: d,
                        allowHover: !0,
                        content: e => (0, a.jsx)("div", { ...e,
                            style: s,
                            children: (0, a.jsx)(o(4458).VP, {
                                gap: 6,
                                paddingTop: 6,
                                paddingBottom: 6,
                                children: t.map(e => e instanceof o(807825).L ? (0, a.jsx)(o(980494).A, {
                                    userStore: e,
                                    avatarSize: i ? ? 20,
                                    inline: !0,
                                    hasTooltip: !1,
                                    hasPersonHoverCard: !1
                                }, e.id) : e instanceof o(447003).v ? (0, a.jsx)(o(59724).A, {
                                    botStore: e,
                                    avatarSize: i ? ? 20
                                }, e.id) : null)
                            })
                        }),
                        children: e
                    })
                }),
                u = n.memo(n.forwardRef(function(e, t) {
                    let {
                        buttonStyle: r,
                        onContextMenu: l,
                        editButtonClickProps: i,
                        property: s,
                        store: d,
                        EmptyComponent: c,
                        tokenFontSize: u,
                        tokenLimit: p,
                        quickActionButtons: m,
                        width: x,
                        formQuestionStore: S,
                        collectionSchema: b,
                        limitTokensToSingleTruncatedLine: v,
                        userExpandable: h,
                        generateButtonStyles: g,
                        isCompactCardMode: j = !1,
                        avatarSize: k
                    } = e, {
                        propertySchema: w,
                        baseStyles: I,
                        surface: _
                    } = (0, n.useContext)(o(422575).L8), C = (0, o(973681).DZ)(d, s, w), T = f({
                        store: d,
                        property: s,
                        propertySchema: w,
                        surface: _
                    }), P = 0 === T.length, R = T.length > 1, A = (0, o(916769).Ug)(null == I ? void 0 : I.tokenFormat), E = j && R ? o(696654).NY.Inline : A, B = j && R, M = (0, o(960253).I)(() => ({
                        buttonStyle: { ...I.buttonStyle,
                            ...r,
                            ...(null == g ? void 0 : g(P)) || {}
                        },
                        buttonPressedStyle: I.buttonPressedStyle ? ? {},
                        buttonHoveredStyle: I.buttonHoveredStyle ? ? {},
                        tokensContainer: { ...E === o(696654).NY.Inline ? {
                                gap: 0
                            } : {},
                            ...v && {
                                display: "flex",
                                ...o(699422).RC
                            }
                        },
                        token: { ...u && {
                                fontSize: u
                            }
                        },
                        actorTokenOverlap: { ...E === o(696654).NY.Inline ? {
                                margin: o(376921).vb[E].margin
                            } : {}
                        },
                        moreToken: {
                            margin: 0,
                            ...v && {
                                flexShrink: 0
                            }
                        }
                    }), [I.buttonHoveredStyle, I.buttonPressedStyle, I.buttonStyle, r, P, v, g, E, u]);
                    return P && void 0 === c ? null : (0, a.jsx)(o(858439).P, {
                        ref: t,
                        editButtonClickProps: i,
                        onContextMenu: l,
                        style: M.buttonStyle,
                        pressedStyle: M.buttonPressedStyle,
                        hoveredStyle: M.buttonHoveredStyle,
                        tooltipHide: E === o(696654).NY.Inline,
                        quickActionButtons: m,
                        width: x,
                        formQuestionStore: S,
                        collectionSchema: b,
                        userExpandable: h,
                        children: P && void 0 !== c && !C ? (0, a.jsx)(c, {}) : (0, a.jsx)(y, {
                            values: T,
                            tokenLimit: p,
                            tokenFormat: E,
                            styles: M,
                            store: d,
                            property: s,
                            limitTokensToSingleTruncatedLine: v ? ? !1,
                            userExpandable: h,
                            reverseStack: B,
                            moreTokenFormat: A,
                            avatarSize: k
                        })
                    })
                })),
                p = {
                    collapseIcon: {
                        fill: o(632079).Tj.text.secondary
                    },
                    style0: {
                        marginInlineStart: 10
                    },
                    style1: {
                        marginInlineStart: 5
                    },
                    style2: {
                        width: "100%",
                        flexShrink: 1
                    }
                };

            function y({
                values: e,
                tokenLimit: t,
                tokenFormat: r,
                styles: l,
                store: i,
                property: s,
                limitTokensToSingleTruncatedLine: d,
                userExpandable: c,
                reverseStack: u,
                moreTokenFormat: f,
                avatarSize: m
            }) {
                let [x, S] = (0, n.useState)(!1), b = t && e.length > t && !x, v = e.slice(0, b ? t : 20), h = (0, n.useCallback)(e => {
                    e.preventDefault(), S(!0)
                }, []), g = (0, n.useCallback)(e => {
                    e.preventDefault(), S(!1)
                }, []), j = (0, o(682985).K8)(() => {
                    if (i) return (0, o(966980).O3)(i, {
                        includePropertyDiscussions: !0
                    }).filter(e => e.getPropertyId() === s)
                }, [i, s]), k = (0, o(486536).v)({
                    blockId: null == i ? void 0 : i.id,
                    propertyId: s
                }), w = j && (null == j ? void 0 : j.length) > 0 || k, I = (0, o(960253).e)(), _ = (0, o(960253).I)(() => ({
                    personTokenStyle: { ...l.token,
                        ...w ? {
                            marginInlineStart: 3,
                            marginInlineEnd: 3,
                            maxWidth: "fit-content",
                            display: "inline-block"
                        } : {}
                    },
                    wrapperStyle: { ...l.tokensContainer,
                        ...w ? { ...(0, o(605351).sQ)(I),
                            paddingTop: 9,
                            paddingBottom: 0,
                            lineHeight: 2,
                            ...d ? {
                                display: "flex"
                            } : {
                                flexWrap: "wrap",
                                display: "inline"
                            }
                        } : {},
                        alignItems: "center"
                    },
                    reverseStackStyle: { ...u ? {
                            display: "flex",
                            flexDirection: "row-reverse",
                            width: "auto"
                        } : {}
                    },
                    moreTokenWrapper: {
                        marginInlineStart: 5 * (r === o(696654).NY.Inline)
                    }
                }), [w, d, l.tokensContainer, l.token, u, r, I]), C = (0, o(601264).s)({
                    propertyId: s,
                    store: i
                });
                return v = u ? [...v].reverse() : v, (0, a.jsxs)(o(27507).h, {
                    className: C,
                    style: _.wrapperStyle,
                    children: [(0, a.jsx)(o(27507).h, {
                        style: { ..._.wrapperStyle,
                            ..._.reverseStackStyle
                        },
                        children: v.map((t, n) => {
                            if ((0, o(247438).MMZ)(t)) return (0, a.jsx)(o(167834).W, {
                                templateVariableType: t
                            }, `person-property-value-${t}`);
                            if ((0, o(197018).Pu)(t) || (0, o(659341).I6)(t)) return (0, a.jsx)(o(227232).A, {
                                actorOrGroupPointer: (0, o(659341).I6)(t) ? (0, o(659341).S4)({
                                    spacePermissionGroupId: t.id,
                                    spaceId: t.spaceId
                                }) : t,
                                style: { ...(u ? 0 !== n : n < e.length - 1) && l.actorTokenOverlap,
                                    ..._.personTokenStyle,
                                    ...d && p.style2
                                },
                                tokenFormat: r,
                                avatarSize: m
                            }, t.id)
                        })
                    }), b ? c ? (0, a.jsx)(o(988022).p, {
                        size: "xs",
                        onClick: h,
                        style: p.style0,
                        children: (0, a.jsx)(o(569726).A, {
                            count: e.length - t,
                            format: f,
                            style: l.moreToken,
                            fixedHeight: !0,
                            isCompact: !0
                        })
                    }) : (0, a.jsx)("div", {
                        style: _.moreTokenWrapper,
                        children: (0, a.jsx)(o(569726).A, {
                            count: e.length - t,
                            format: f,
                            style: l.moreToken,
                            fixedHeight: !0,
                            isCompact: !0
                        })
                    }) : x ? (0, a.jsx)(o(988022).p, {
                        size: "xs",
                        onClick: g,
                        style: p.style1,
                        children: (0, a.jsx)(o(16275).I, {
                            icon: o(721089).R,
                            size: "sm",
                            style: p.collapseIcon
                        })
                    }) : void 0]
                })
            }

            function f({
                property: e,
                store: t,
                propertySchema: n,
                surface: r
            }) {
                return (0, o(682985).K8)(() => {
                    let l = null == n ? void 0 : n.type;
                    switch (l) {
                        case "created_by":
                            {
                                let e = t.getCreatedByPointer();
                                if (e) return [e];
                                break
                            }
                        case "last_edited_by":
                            {
                                let e = t.getLastEditedByPointer();
                                if (e) return [e];
                                break
                            }
                        case "person":
                            {
                                let l = t.isTemplate();
                                return (0, o(955582).a)({
                                    value: t.getPropertyValue(e),
                                    isTemplatePage: l,
                                    propertySchema: n,
                                    blockCreatorPointer: l || (0, o(22148).J)(r) ? void 0 : t.getCreatedByPointer()
                                })
                            }
                        case void 0:
                            break;
                        default:
                            (0, o(722371).HB)(l)
                    }
                    return []
                }, [e, n, t, r])
            }
            let m = n.forwardRef(function(e, t) {
                    let {
                        store: r,
                        property: l
                    } = e, {
                        shouldWrap: i
                    } = (0, n.useContext)(o(422575).L8), s = (0, o(533992).WS)(), d = (0, n.useMemo)(() => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o(622031).qO, {
                            store: r,
                            property: l
                        }, "workflow-autofill"), (0, a.jsx)(o(243904).k, {}, "comment")]
                    }), [l, r]), c = _(e, t);
                    return (0, a.jsx)(u, { ...c,
                        EmptyComponent: o(959110).rW,
                        collectionStore: e.collectionStore,
                        quickActionButtons: d,
                        userExpandable: i,
                        tokenFontSize: s ? o(642065).hN : void 0
                    })
                }),
                x = n.forwardRef(function(e, t) {
                    let {
                        store: r,
                        property: l
                    } = e, i = _(e, t), s = (0, n.useMemo)(() => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o(622031).qO, {
                            store: r,
                            property: l
                        }, "workflow-autofill"), (0, a.jsx)(o(243904).k, {}, "comment")]
                    }), [l, r]);
                    return (0, a.jsx)(u, { ...i,
                        EmptyComponent: o(959110).ao,
                        collectionStore: e.collectionStore,
                        quickActionButtons: s
                    })
                }),
                S = n.forwardRef(function(e, t) {
                    let r = _(e, t),
                        l = C({
                            store: e.store,
                            property: e.property,
                            surface: e.surface
                        }),
                        i = (0, n.useMemo)(() => (0, a.jsx)(o(243904).k, {}, "comment"), []);
                    return (0, a.jsx)(c, {
                        actors: l,
                        children: e => (0, a.jsx)("div", { ...e,
                            children: (0, a.jsx)(u, { ...r,
                                EmptyComponent: o(959110).ao,
                                tokenLimit: 1,
                                quickActionButtons: i,
                                limitTokensToSingleTruncatedLine: !0
                            })
                        })
                    })
                }),
                b = n.forwardRef(function(e, t) {
                    let n = _(e, t);
                    return (0, a.jsx)(u, { ...n,
                        EmptyComponent: o(959110).Fe,
                        tokenLimit: 1
                    })
                }),
                v = n.forwardRef(function(e, t) {
                    let {
                        store: l,
                        property: s
                    } = _(e, t), {
                        propertySchema: d,
                        propertyModule: c,
                        surface: u
                    } = (0, n.useContext)(o(422575).L8), p = f({
                        store: l,
                        property: s,
                        propertySchema: d,
                        surface: u
                    });
                    return c && (0, o(11287).E2)(c) ? (0, a.jsx)(o(643205).H, {
                        ref: t,
                        store: l,
                        property: s,
                        children: (0, a.jsx)(i, {
                            store: l,
                            property: s,
                            propertyValues: p,
                            propertySchema: d,
                            module: c,
                            surface: e.surface
                        })
                    }) : (! function(e) {
                        let {
                            throttleSeconds: t,
                            ...n
                        } = e, l = `${e.from}:${e.type}`, i = r[l], a = Date.now();
                        (!i || a - i > 1e3 * t) && (r[l] = a, function(e) {
                            let {
                                error: t,
                                ...n
                            } = e;
                            (0, o(419750).O8)(t, n)
                        }(n))
                    }({
                        from: "PropertyModulePersonProperty",
                        type: "invalidModule",
                        throttleSeconds: 60,
                        error: Error("Expected to find a property_person module."),
                        data: {
                            blockId: l.id,
                            propertyId: s,
                            miscDataToConvertToString: {
                                moduleType: null == c ? void 0 : c.type
                            }
                        }
                    }), null)
                }),
                h = n.forwardRef(function(e, t) {
                    let n = (0, o(228315).F)({
                            ref: t,
                            collectionStore: e.collectionStore,
                            property: e.property,
                            propertyType: "person"
                        }),
                        r = _(e, t, n);
                    return (0, a.jsx)(u, { ...r,
                        EmptyComponent: e.showIfEmpty ? o(959110).Jb : void 0,
                        tokenLimit: 5,
                        userExpandable: !0
                    })
                }),
                g = n.forwardRef(function(e, t) {
                    let {
                        showIfEmpty: n,
                        collectionViewStore: r
                    } = e, l = _(e, t), i = (0, o(682985).K8)(() => "compact" === (0, o(535144).C)(r), [r]), s = i ? 5 : void 0, d = C({
                        store: e.store,
                        property: e.property,
                        surface: e.surface
                    });
                    return (0, a.jsx)(c, {
                        actors: d,
                        disableTooltip: !i || d.length <= 1,
                        avatarSize: 18,
                        children: e => (0, a.jsx)("div", { ...e,
                            children: (0, a.jsx)(u, { ...l,
                                EmptyComponent: n ? o(959110).Jb : void 0,
                                isCompactCardMode: i,
                                tokenLimit: s,
                                avatarSize: 18
                            })
                        })
                    })
                }),
                j = n.forwardRef(function(e, t) {
                    let o = _(e, t);
                    return (0, a.jsx)(u, { ...o
                    })
                }),
                k = n.forwardRef(function(e, t) {
                    let o = _(e, t);
                    return (0, a.jsx)(u, { ...o
                    })
                }),
                w = n.forwardRef(function(e, t) {
                    let o = _(e, t);
                    return (0, a.jsx)(u, { ...o
                    })
                }),
                I = n.forwardRef(function(e, t) {
                    let o = _(e, t);
                    return (0, a.jsx)(u, { ...o
                    })
                });

            function _(e, t, n) {
                let {
                    store: r,
                    property: l,
                    onContextMenu: i,
                    width: a
                } = e;
                return {
                    ref: t,
                    store: r,
                    property: l,
                    editButtonClickProps: (0, o(973681).QK)(e),
                    onContextMenu: i,
                    buttonStyle: null == n ? void 0 : n.buttonStyle,
                    width: a
                }
            }

            function C({
                property: e,
                store: t,
                surface: r
            }) {
                let {
                    propertySchema: l
                } = (0, n.useContext)(o(422575).L8), i = (0, o(533992).v3)(), a = f({
                    store: t,
                    property: e,
                    propertySchema: l,
                    surface: r
                });
                return (0, o(682985).K8)(() => {
                    let e = null == t ? void 0 : t.getRecordModel;
                    return e ? a.map(t => {
                        if (!(0, o(197018).Pu)(t)) return;
                        let n = (0, o(197018).xC)({
                            pointer: t,
                            getRecordModel: e
                        });
                        return (0, o(478418).J)(i, n)
                    }).filter(e => void 0 !== e) : []
                }, [i, a, null == t ? void 0 : t.getRecordModel])
            }
        }
    }
]);