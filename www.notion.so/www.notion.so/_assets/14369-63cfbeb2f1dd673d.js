"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [14369], {
        11444: (e, t, a) => {
            a.r(t), a.d(t, {
                UISpacePermissionGroupToken: () => l
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                avatarWrapStyle: {
                    width: "none",
                    minHeight: "none",
                    marginInlineEnd: 6
                },
                style0: { ...a(699422).RC
                },
                style1: {
                    margin: 0
                }
            };

            function l(e) {
                let {
                    parentStore: t,
                    style: l,
                    format: o
                } = e, s = e.groupPointer.id, d = e.groupPointer.spaceId, u = (0, a(659341).S4)({
                    spacePermissionGroupId: s,
                    spaceId: d
                }), c = (0, a(682985).K8)(() => e.groupModel ? e.groupModel : t ? a(398652).C.createChildStore(t, u).getModel() : void 0, [t, u, e.groupModel]), p = (0, a(533992).Y0)(), {} = (0, a(960253).I)(() => ({
                    badgeStyle: {
                        borderRadius: 4,
                        background: a(632079).Tj.background.tertiaryTranslucent,
                        fontSize: a(986939).A.isMobile ? 11 : 9,
                        lineHeight: p.isAndroid ? 1.5 : 1,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em"
                    }
                }), [p]), g = (0, a(109939).tz)(), m = (0, a(682985).K8)(() => (0, a(95384).n)({
                    intl: g,
                    permissionGroupModel: c
                }), [g, c]), f = (0, i.useCallback)(e => o === a(696654).NY.Inline ? (0, n.jsx)(a(308256).o, {
                    group: c,
                    size: e
                }) : (0, n.jsxs)(a(4458).fI, {
                    alignItems: "center",
                    minWidth: 0,
                    children: [(0, n.jsx)("div", {
                        style: r.avatarWrapStyle,
                        children: (0, n.jsx)(a(308256).o, {
                            group: c,
                            size: e
                        })
                    }), (0, n.jsx)("div", {
                        style: r.style0,
                        children: m
                    })]
                }), [o, c, m]);
                return (0, n.jsx)(a(376921).Ay, { ...e,
                    style: { ...r.style1,
                        ...l
                    },
                    renderAvatar: f
                })
            }
        },
        18416: (e, t, a) => {
            a.d(t, {
                U: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        shouldOpenAgentSidebar: !1
                    }
                }
                getShouldOpenAgentSidebar() {
                    return this.state.shouldOpenAgentSidebar
                }
                setShouldOpenAgentSidebar() {
                    this.setState({ ...this.state,
                        shouldOpenAgentSidebar: !0
                    })
                }
                clearShouldOpenAgentSidebar() {
                    this.setState({ ...this.state,
                        shouldOpenAgentSidebar: !1
                    })
                }
            }
            let r = new n
        },
        32481: (e, t, a) => {
            a.d(t, {
                w: () => i
            });
            async function i(e, t) {
                let i = await a(497345).f.load();
                await i.maybeShowMessagesImpl(e, t)
            }
        },
        42178: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                priceTagFillIcon: () => n
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.19 2.19 15.61 15.61",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M13.166 2.216a2.05 2.05 0 0 1 1.74.58l2.298 2.299c.456.456.671 1.1.58 1.74l-.383 2.68a2.05 2.05 0 0 1-.58 1.16l-6.529 6.53c-.8.8-2.098.8-2.899 0l-4.597-4.598c-.8-.8-.8-2.099 0-2.9L9.324 3.18a2.05 2.05 0 0 1 1.16-.58zm-.828 5.446a1.188 1.188 0 1 0 1.68-1.68 1.188 1.188 0 0 0-1.68 1.68"
                    })
                },
                n = (0, a(104509).wt)("priceTagFill", i, "fill")
        },
        47187: (e, t, a) => {
            a.d(t, {
                E: () => i
            });

            function i(e) {
                let {
                    size: t,
                    style: i
                } = e;
                return (0, a(960253).I)(() => ({
                    icon: {
                        width: .6 * t,
                        height: .6 * t,
                        fill: a(632079).Tj.text.secondary
                    },
                    iconContainer: {
                        width: t,
                        height: t,
                        borderRadius: "100%",
                        background: a(632079).Tj.background.tertiaryTranslucent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        ...i
                    }
                }), [t, i])
            }
        },
        59724: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    style0: { ...a(699422).RC
                    }
                },
                r = function(e) {
                    let {
                        botStore: t,
                        avatarSize: r,
                        shouldShowBadge: l,
                        style: o,
                        inline: s
                    } = e, d = (0, a(109939).tz)(), u = (0, a(533992).Y0)(), c = (0, a(682985).K8)(() => null == t ? void 0 : t.getDisplayName(d), [t, d]), {
                        outerStyle: p,
                        avatarWrapStyle: g,
                        badgeStyle: m
                    } = (0, a(960253).I)(() => ({
                        outerStyle: {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...o
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
                            color: a(632079).Tj.text.secondary,
                            background: a(632079).Tj.background.tertiaryTranslucent,
                            fontSize: a(986939).A.isMobile ? 11 : 9,
                            lineHeight: u.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginInlineStart: 8,
                            marginTop: 1
                        }
                    }), [o, s, u]);
                    return (0, i.jsxs)("div", {
                        style: p,
                        children: [(0, i.jsx)("div", {
                            style: g,
                            children: (0, i.jsx)(a(31319).A, {
                                botStore: t,
                                size: r
                            })
                        }), (0, i.jsx)("div", {
                            style: n.style0,
                            children: c
                        }), l ? (0, i.jsx)("div", {
                            style: m,
                            children: "Bot"
                        }) : void 0]
                    })
                }
        },
        89408: (e, t, a) => {
            function i(e) {
                var t;
                let {
                    environment: i,
                    featureKey: n
                } = e, r = (0, a(904434).R$)(i);
                if (!r || !r.isReady()) return;
                let l = null == (t = r.getSettings()) ? void 0 : t.dismissed_adoption_feature;
                return (null == l ? void 0 : l[n]) !== void 0
            }

            function n(e) {
                var t;
                let {
                    environment: i,
                    featureKey: n
                } = e, r = (0, a(904434).R$)(i);
                if (!r || !r.isReady()) return;
                let l = null == (t = r.getSettings()) ? void 0 : t.exposed_to_adoption_feature;
                return (null == l ? void 0 : l[n]) ? ? []
            }

            function r(e) {
                let {
                    environment: t,
                    featureKey: a
                } = e, i = n({
                    environment: t,
                    featureKey: a
                });
                return i ? i.length > 0 : void 0
            }

            function l(e) {
                var t;
                let {
                    environment: i
                } = e, n = (0, a(904434).R$)(i);
                return !!n && !!n.isReady() && ((null == (t = n.getSettings()) ? void 0 : t.seen_new_user_onboarding_checklist_experience) ? ? !1)
            }

            function o(e) {
                var t;
                let {
                    environment: i
                } = e, n = (0, a(904434).R$)(i);
                return !!n && !!n.isReady() && ((null == (t = n.getSettings()) ? void 0 : t.seen_new_user_onboarding_joiner_v2_experience) ? ? !1)
            }
            a.d(t, {
                Tw: () => n,
                dp: () => o,
                iB: () => i,
                mA: () => l,
                wz: () => r
            })
        },
        179239: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(898992), a(354520), a(581454);
            var i = a(296540);
            let n = {
                diffHelpers: new(a(815048)).O2("async-diffs", async () => await Promise.all([a.e(16471), a.e(79254)]).then(a.bind(a, 719829)))
            };
            var r = a(474848);
            let l = (0, a(109939).YK)({
                intermediateChanges: {
                    id: "editPropertyDiff.intermediateChanges",
                    defaultMessage: "{count, plural, one {# change} other {# changes}}"
                }
            });

            function o(e) {
                let t = a(9247).QP(e.propertySchema);
                switch (t) {
                    case "text":
                        return (0, r.jsx)(s, { ...e
                        });
                    case "relation":
                        return (0, r.jsx)(c, {
                            propertySchema: e.propertySchema,
                            beforeValue: e.beforeValue,
                            afterValue: e.afterValue,
                            rootStore: e.rootStore
                        });
                    case "arrow":
                        return (0, r.jsx)(g, { ...e
                        });
                    default:
                        (0, a(722371).HB)(t)
                }
            }

            function s(e) {
                let t = (0, a(533992).v3)(),
                    i = (0, a(482170).l)(u(e.beforeValue.value)),
                    l = (0, a(482170).l)(u(e.afterValue.value)),
                    o = (0, a(815048).fJ)(n.diffHelpers).value,
                    [s] = (0, a(97668).Yb)(async () => {
                        if (o) return await o.diffTextValueAsync({
                            environment: t,
                            from: "textPropertyDiff",
                            before: i,
                            after: l,
                            insertionAnnotation: [a(247438).Ifu.Inserted],
                            deletionAnnotation: [a(247438).Ifu.Deleted]
                        })
                    }, [t, i, l, o], {});
                if (void 0 === s.value) return (0, r.jsx)(d, {});
                let c = {
                    value: s.value,
                    spaceId: e.beforeValue.spaceId
                };
                return (0, r.jsx)(a(917659).A, {
                    value: c,
                    propertySchema: e.propertySchema,
                    rootStore: e.rootStore
                })
            }
            let d = i.memo(function() {
                return (0, r.jsx)(a(795830).P, {
                    style: {
                        display: "inline-block",
                        verticalAlign: "baseline",
                        width: "60%",
                        height: 14,
                        borderRadius: 4
                    }
                })
            });

            function u(e) {
                return a(247438).JG8(e, 1e3, [a(247438).Ey_("…")])
            }

            function c(e) {
                let {
                    beforeValue: t,
                    afterValue: i,
                    propertySchema: n,
                    rootStore: l
                } = e, o = (0, a(682985).K8)(() => a(561872).tH({
                    beforeValue: t.value,
                    afterValue: i.value,
                    propertySchema: n,
                    getRecordModel: l.getRecordModel,
                    getBlockTitle: e => a(970831).B.createChildStore(l, {
                        table: a(832375).evP,
                        id: e.id
                    }).getPropertyValue("title")
                }), [t, i, n, l]);
                return (0, r.jsx)(a(917659).A, {
                    value: {
                        value: o,
                        spaceId: t.spaceId
                    },
                    propertySchema: {
                        type: "title",
                        name: "Title"
                    },
                    rootStore: l
                })
            }
            let p = {
                display: "inline-flex",
                alignItems: "center",
                overflow: "hidden",
                flexWrap: "wrap",
                rowGap: 6
            };

            function g(e) {
                let t = e.intermediateChanges && e.intermediateChanges.length > 0;
                return (0, r.jsxs)("div", {
                    style: p,
                    children: [(0, r.jsx)(a(917659).A, {
                        value: e.beforeValue,
                        propertySchema: e.propertySchema,
                        rootStore: e.rootStore
                    }), t ? (0, r.jsx)(x, {
                        intermediateChanges: e.intermediateChanges,
                        propertySchema: e.propertySchema,
                        rootStore: e.rootStore,
                        latestTimestamp: e.latestIntermediateTimestamp
                    }) : (0, r.jsx)(f, {}), (0, r.jsx)(a(917659).A, {
                        value: e.afterValue,
                        propertySchema: e.propertySchema,
                        rootStore: e.rootStore
                    })]
                })
            }
            let m = {
                padding: "0px 6px"
            };

            function f() {
                return (0, r.jsx)("div", {
                    style: m,
                    children: (0, r.jsx)(a(16275).I, {
                        icon: a(491469).arrowChevronSingleRightSmallIcon,
                        size: "xs",
                        colorVariant: "tertiary"
                    })
                })
            }
            let h = {
                container: {
                    padding: "4px 8px"
                },
                tooltipContent: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                },
                tooltipTitle: {
                    fontWeight: a(699422).Wy.medium,
                    maxWidth: 264,
                    ...a(699422).RC
                },
                tooltipBody: {
                    color: a(632079).Tj.text.secondary,
                    display: "flex",
                    flexDirection: "row"
                },
                tooltipSeperatorDot: {
                    margin: "0px 4px"
                }
            };

            function x(e) {
                let t = (0, a(109939).tz)(),
                    i = (0, a(682985).K8)(() => {
                        let i = (0, a(714350).P)();
                        return e.intermediateChanges.map(n => {
                            let r = (0, a(458230).r4)({
                                textValue: n.value.value,
                                getRecordModel: e.rootStore.getRecordModel,
                                userTimeZone: i,
                                intl: t,
                                disableAnnotationPrefix: !0,
                                deterministic: !0
                            });
                            return "date" === e.propertySchema.type ? r : r.replace(/,/g, " / ")
                        }).filter(Boolean).join(", ") || ""
                    }, [e.intermediateChanges, e.rootStore.getRecordModel, e.propertySchema.type, t]);
                return (0, r.jsx)(a(51831).m, {
                    placement: "top",
                    content: t => (0, r.jsxs)("div", { ...t,
                        style: h.tooltipContent,
                        children: [(0, r.jsx)("div", {
                            style: h.tooltipTitle,
                            children: i
                        }), (0, r.jsxs)("div", {
                            style: h.tooltipBody,
                            children: [(0, r.jsx)(a(109939).sA, { ...l.intermediateChanges,
                                values: {
                                    count: e.intermediateChanges.length
                                }
                            }), (0, r.jsx)("div", {
                                style: h.tooltipSeperatorDot,
                                children: "•"
                            }), (e => {
                                if (e) return (0, a(799843).nl)(e, {
                                    useCompactFormat: !0
                                })
                            })(e.latestTimestamp)]
                        })]
                    }),
                    children: e => (0, r.jsx)("div", { ...e,
                        style: h.container,
                        children: (0, r.jsx)(a(16275).I, {
                            icon: a(758737).R,
                            size: "xs",
                            colorVariant: "tertiary"
                        })
                    })
                })
            }
        },
        233305: (e, t, a) => {
            a.d(t, {
                N: () => r
            });
            var i = a(296540),
                n = a(474848);

            function r({
                source: e,
                upsell: t,
                isDisabled: l,
                title: o,
                onClickBeforeUpgradeAction: s,
                postUpgradeCallback: d,
                hoverRef: u,
                tooltipMessage: c,
                tooltipPlacement: p,
                buttonMenuItemProps: g,
                display: m = "icon",
                customMessages: f,
                featureName: h,
                spaceStore: x
            }) {
                var v;
                let y = (0, a(109939).tz)(),
                    {
                        onClick: S,
                        focused: b,
                        ..._
                    } = g ? ? {},
                    j = t && "none" !== t.type,
                    {
                        upgradeEligibility: T,
                        handleClick: w
                    } = (0, a(79268).C)({
                        upsell: t,
                        source: e,
                        onClickBeforeUpgradeAction: s,
                        postUpgradeCallback: d,
                        spaceStore: x
                    }),
                    I = (0, a(156139).e)(T.status),
                    C = (0, i.useMemo)(() => j ? "text" === m ? (0, n.jsx)(a(268627).c, {
                        upgradeStatus: T.status,
                        handleClick: w,
                        upsell: t,
                        hoverRef: u,
                        customMessages: f,
                        featureName: h
                    }) : (0, n.jsx)(a(740957).c, {
                        upgradeStatus: T.status,
                        handleClick: w,
                        upsell: t,
                        hoverRef: u,
                        showPlanName: !0,
                        customMessages: f,
                        featureName: h
                    }) : null, [j, m, T.status, w, t, u, f, h]),
                    M = (0, i.useCallback)(e => {
                        if (!l) {
                            if (!t || "none" === t.type) {
                                null == S || S(e);
                                return
                            }
                            w()
                        }
                    }, [l, t, w, S]);
                return (0, n.jsx)(a(551942).T, {
                    tooltipMessage: l && t ? null == (v = I.disabledTooltip) ? void 0 : v.call(I, {
                        intl: y,
                        upsell: t
                    }) : c,
                    placement: p,
                    children: (0, n.jsx)(a(95582).A, { ..._,
                        focused: !!b,
                        title: o({
                            upgradeLabel: C
                        }),
                        onClick: M
                    })
                })
            }
        },
        237862: (e, t, a) => {
            function i(e, t) {
                let {
                    from: i
                } = t;
                (0, a(104310).u)({
                    event: {
                        eventName: "show_tooltip",
                        eventProperties: {
                            from: i,
                            time: Date.now()
                        }
                    }
                })
            }

            function n(e, t) {
                let {
                    from: i
                } = t;
                (0, a(104310).u)({
                    event: {
                        eventName: "dismiss_tooltip",
                        eventProperties: {
                            from: i,
                            time: Date.now()
                        }
                    }
                })
            }
            a.d(t, {
                i: () => i,
                z: () => n
            })
        },
        243326: (e, t, a) => {
            a.d(t, {
                k: () => n
            });
            var i = a(296540);

            function n({
                requests: e,
                feature: t,
                userId: a
            }) {
                let [r, l] = (0, i.useState)("loading");
                return (0, i.useEffect)(() => {
                    t && l(function(e, t, a) {
                        var i;
                        if (!t || !a) return "unrequested";
                        let n = null == (i = t[e]) ? void 0 : i.find(e => e.created_by_id === a);
                        return n && n.request_status || "unrequested"
                    }(t, e, a))
                }, [e, t, a]), [r, l]
            }
            a(898992), a(672577)
        },
        246467: (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var i = a(296540),
                n = a(474848);
            let r = {
                    display: "inline-block",
                    width: "1.2em",
                    marginInlineStart: 5,
                    marginInlineEnd: 2,
                    paddingBottom: 3,
                    verticalAlign: "middle"
                },
                l = function(e) {
                    let t, l = (0, a(109939).tz)(),
                        s = (0, a(75272).I)(),
                        d = (0, i.useRef)(),
                        u = (0, i.useCallback)(() => {
                            let t = e.value;
                            if (!t) return;
                            let i = a(25825).q8(t, (0, a(714350).P)());
                            if (!i) return;
                            let n = i.valueOf(),
                                r = n - Date.now();
                            r < 0 || r > a(627179).nD || d.current && d.current.timestamp === n || (d.current && clearTimeout(d.current.timer), d.current = {
                                timestamp: n,
                                timer: setTimeout(() => s("DateBox", "DateBox/createReminderTimer"), r)
                            })
                        }, [s, e.value]),
                        c = (0, i.useCallback)(() => {
                            d.current && (clearTimeout(d.current.timer), d.current = void 0)
                        }, []);
                    (0, i.useEffect)(() => {
                        u()
                    }, [u]), (0, i.useEffect)(() => () => {
                        c()
                    }, [c]);
                    let {
                        value: p,
                        withComma: g
                    } = e, m = (0, a(682985).K8)(() => p ? (0, a(850640).ZF)({
                        value: p,
                        date_format: e.dateFormat,
                        time_format: e.timeFormat,
                        userTimeZone: (0, a(714350).P)(),
                        allowRelativeDates: !0,
                        intl: l,
                        shortenDateAndRange: e.shortenDateAndRange,
                        displayInUserTimezone: e.displayInUserTimezone,
                        getToday: a(132315).x1
                    }) : void 0, [l, e.dateFormat, e.displayInUserTimezone, e.shortenDateAndRange, e.timeFormat, p]);
                    if (!p) return null;
                    let f = a(25825).AA(p, (0, a(714350).P)(), a(849917).locale);
                    (0, a(943003).Lh)(p) && (t = a(25825).Zs(p, (0, a(714350).P)()) ? {
                        color: a(632079).Tj.red.text.accentPrimary
                    } : {
                        color: a(632079).Tj.blue.text.accentPrimary
                    });
                    let h = (0, n.jsxs)(n.Fragment, {
                        children: [m, (0, a(943003).Lh)(p) ? (0, n.jsx)(a(16275).I, {
                            icon: a(848194).alarmSmallIcon,
                            style: r
                        }) : void 0, g ? ", " : null]
                    });
                    return e.disableTooltip ? (0, n.jsx)("div", {
                        className: e.className,
                        style: { ...e.style,
                            ...t
                        },
                        children: h
                    }) : (0, n.jsx)(a(51831).m, {
                        content: () => (0, n.jsxs)(n.Fragment, {
                            children: [e.tooltipHeader, (0, n.jsxs)("div", {
                                style: e.tooltipHeader ? {
                                    color: a(632079).Tj.text.inverseSecondary
                                } : {},
                                children: [o(f.start), f.end ? ` → ${o(f.end)}` : ""]
                            })]
                        }),
                        placement: e.tooltipPlacement,
                        children: a => (0, n.jsx)("div", {
                            className: e.className,
                            style: { ...e.style,
                                ...t
                            },
                            ...a,
                            children: h
                        })
                    })
                };

            function o(e) {
                return (0, a(850640).eV)({
                    value: e,
                    preset: "medium"
                })
            }
        },
        308256: (e, t, a) => {
            a.d(t, {
                o: () => n
            }), a(296540);
            var i = a(474848);

            function n(e) {
                let {
                    group: t
                } = e, n = e.size ? ? 20, r = (0, a(109939).tz)(), l = (0, a(682985).K8)(() => {
                    if (t && t.icon) return {
                        pointer: t.pointer,
                        icon: t.icon
                    }
                }, [t]), o = (0, a(682985).K8)(() => (0, a(95384).n)({
                    intl: r,
                    permissionGroupModel: t
                }), [r, t]);
                return (0, i.jsx)("div", {
                    children: l ? (0, i.jsx)(a(569553).B6, {
                        disabled: !0,
                        size: n,
                        icon: l,
                        isEmptyPage: !1,
                        title: o
                    }) : (0, i.jsx)(a(391343).A, {
                        size: n
                    })
                })
            }
        },
        311077: (e, t, a) => {
            a.d(t, {
                J: () => n,
                M: () => r
            }), a(16280);
            var i = a(296540);
            let n = i.createContext(null);

            function r() {
                let e = (0, i.useContext)(n);
                if (!e) throw Error("ActionBarContext must be used inside ActionBar");
                return e
            }
            n.displayName = "ActionBarContext"
        },
        315384: (e, t, a) => {
            a.d(t, {
                u: () => n
            });
            let i = new(a(815048)).O2("PulsingWrapper", async () => a.e(45248).then(a.bind(a, 593830))),
                n = (0, a(815048).jQ)(i, e => e.PulsingWrapper, {
                    renderLoading: (e, t) => t.children
                })
        },
        330116: (e, t, a) => {
            a.d(t, {
                E: () => n
            }), a(296540);
            var i = a(474848);

            function n(e) {
                let {
                    children: t,
                    size: n = "sm",
                    ...r
                } = e, l = (0, a(960253).I)(() => ({
                    wrapper: {
                        display: "flex",
                        alignItems: "center",
                        gap: "lg" === n ? 2 : void 0,
                        background: a(632079).Tj.background.elevated,
                        boxShadow: a(632079).Tj.shadow.outline.md,
                        borderRadius: "lg" === n ? 12 : 6,
                        width: "fit-content",
                        padding: "lg" === n ? 4 : 2
                    }
                }), [n]);
                return (0, i.jsx)("div", { ...r,
                    dir: (0, a(619157).A1)() ? "rtl" : "ltr",
                    style: l.wrapper,
                    children: (0, i.jsx)(a(311077).J.Provider, {
                        value: {
                            size: n
                        },
                        children: t
                    })
                })
            }
        },
        376921: (e, t, a) => {
            a.d(t, {
                Ay: () => s,
                mI: () => r,
                vb: () => l
            }), a(296540);
            var i = a(474848);
            let n = (0, a(109939).YK)({
                    removeTokenLabel: {
                        defaultMessage: "Remove {title}",
                        id: "uiGenericToken.removeTokenLabel"
                    },
                    removeTokenLabelGeneric: {
                        defaultMessage: "Remove Item",
                        id: "uiGenericToken.removeTokenLabelGeneric"
                    }
                }),
                r = a(696654).NY,
                l = {
                    [a(696654).NY.ExtremeSmall]: {
                        height: 12,
                        fontSize: 10,
                        margin: "0 4px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [a(696654).NY.ExtraSmall]: {
                        height: 14,
                        fontSize: 12,
                        margin: "0 6px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [a(696654).NY.Small]: {
                        height: 18,
                        fontSize: 12,
                        margin: "0 6px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 16
                    },
                    [a(696654).NY.CompactEssential]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [a(696654).NY.Medium]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [a(696654).NY.Inline]: {
                        height: 20,
                        fontSize: 14,
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20,
                        margin: "0 -5px 0 0",
                        marginEditState: "0 6px 0 0"
                    },
                    [a(696654).NY.Large]: {
                        height: 24,
                        fontSize: 16,
                        margin: "0 8px 8px 0",
                        marginEditState: "0 8px 8px 0",
                        closeIconSize: a(104509).Ev.sm,
                        avatarSize: 24
                    }
                },
                o = {
                    style0: { ...a(699422).RC
                    },
                    style1: {
                        opacity: .5
                    }
                };

            function s({
                avatarSize: e,
                format: t,
                isSingle: r,
                onClickRemove: d,
                renderAvatar: u,
                showRemoveButton: c,
                shouldShrink: p,
                style: g,
                title: m
            }) {
                let f = (0, a(109939).tz)(),
                    {
                        height: h,
                        fontSize: x,
                        margin: v,
                        marginEditState: y,
                        closeIconSize: S,
                        avatarSize: b
                    } = l[t],
                    _ = (0, a(960253).I)(() => ({
                        root: {
                            display: "flex",
                            alignItems: "center",
                            flexShrink: +!!p,
                            minWidth: 0,
                            height: h,
                            borderRadius: 6,
                            fontSize: x,
                            lineHeight: "120%",
                            margin: r ? 0 : c ? y : v,
                            ...g
                        }
                    }), [x, h, r, v, y, p, c, g]);
                return (0, i.jsxs)("div", {
                    style: _.root,
                    children: [null == u ? void 0 : u(e ? ? b), (0, i.jsx)("div", {
                        className: "notranslate",
                        style: o.style0,
                        children: m
                    }), c ? (0, i.jsx)(a(64960).Ay, {
                        ariaLabel: void 0 !== m ? f.formatMessage(n.removeTokenLabel, {
                            title: m
                        }) : f.formatMessage(n.removeTokenLabelGeneric),
                        onClick: d,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: h,
                            height: h,
                            marginInlineStart: 2,
                            marginInlineEnd: 2,
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: 6
                        },
                        children: (0, i.jsx)(a(16275).I, {
                            icon: a(519529).xMarkFillSmallIcon,
                            size: S,
                            style: o.style1
                        })
                    }) : null]
                })
            }
        },
        391343: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(296540);
            var i = a(474848);

            function n(e) {
                let t = (0, a(47187).E)(e);
                return (0, i.jsx)("div", {
                    style: t.iconContainer,
                    children: (0, i.jsx)(a(16275).I, {
                        icon: a(407598).peopleFillIcon,
                        size: t.icon.width,
                        colorVariant: "secondary"
                    })
                })
            }
        },
        399225: (e, t, a) => {
            a.r(t), a.d(t, {
                eyeFillSmallIcon: () => r,
                iconDefinition: () => n
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.7 3.26 14.6 9.48",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 7.122a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75"
                        }), (0, i.jsx)("path", {
                            d: "M8 3.26c3.125 0 5.857 1.673 7.152 4.141l.065.144c.11.293.11.617 0 .91l-.065.145c-1.295 2.468-4.027 4.14-7.152 4.14-3.027 0-5.685-1.57-7.026-3.912L.848 8.6a1.29 1.29 0 0 1 0-1.199l.126-.228C2.314 4.83 4.972 3.26 8 3.26m0 2.112a2.626 2.626 0 0 0-2.625 2.626l.014.269A2.626 2.626 0 0 0 7.73 10.61l.269.014a2.626 2.626 0 0 0 2.611-2.357l.014-.269A2.626 2.626 0 0 0 8 5.372"
                        })]
                    })
                },
                r = (0, a(104509).wt)("eyeFillSmall", n, "fillSmall")
        },
        478530: (e, t, a) => {
            a.d(t, {
                I: () => i
            });

            function i({
                spaceId: e
            }) {
                let t = (0, a(533992).v3)(),
                    n = (0, a(682985).K8)(() => e ? a(477870).L.getData(t, {
                        spaceId: e
                    }) : "no_space_id", [t, e]);
                return "no_space_id" === n ? {
                    isLoading: !1,
                    requests: {}
                } : {
                    isLoading: void 0 === n,
                    requests: n ? ? {}
                }
            }
        },
        497736: (e, t, a) => {
            a.d(t, {
                vF: () => m,
                Su: () => h,
                cG: () => s,
                UY: () => v,
                T5: () => u
            });
            var i = a(296540);
            let n = a.p + "edfba4a6d1ff7acd.png",
                r = a.p + "c9223887dcb57b7d.gif",
                l = a.p + "7e9cbd56b1eca7b9.gif";
            var o = a(474848);

            function s(e) {
                let {
                    variant: t,
                    style: i = {}
                } = e;
                return (0, o.jsx)("div", {
                    style: i,
                    children: (0, o.jsx)(a(4458).fI, {
                        alignItems: "center",
                        children: (0, o.jsx)(a(971375).x, {
                            variant: t,
                            shadowVariant: "light"
                        })
                    })
                })
            }
            let d = {
                marginInlineEnd: 8
            };

            function u(e) {
                let {
                    variant: t
                } = e;
                return (0, o.jsx)("div", {
                    style: d,
                    children: (0, o.jsx)(p, {
                        variant: t
                    })
                })
            }
            let c = {
                marginInlineStart: 8
            };

            function p(e) {
                let {
                    variant: t
                } = e, n = "dark" === (0, a(960253).e)(), [s, d] = (0, i.useState)(!0);
                (0, i.useEffect)(() => {
                    setTimeout(() => {
                        d(!1)
                    }, 6e3)
                }, []);
                let u = (0, i.useMemo)(() => {
                    if (s) return n ? r : l
                }, [n, s]);
                return (0, o.jsx)("div", {
                    style: c,
                    children: (0, o.jsx)(a(971375).x, {
                        variant: t,
                        shadowVariant: "light",
                        imgSource: u
                    })
                })
            }
            let g = {
                faceImgStyles: {
                    width: 20,
                    height: 20,
                    background: a(632079).Tj.assistantCornerButtonBackground,
                    borderRadius: "50%",
                    border: `1px solid ${a(632079).Tj.border.primary}`
                }
            };

            function m() {
                return (0, o.jsx)("img", {
                    style: g.faceImgStyles,
                    src: n,
                    role: "presentation",
                    alt: "Notion AI Face"
                })
            }
            let f = {
                faceImgStyles: {
                    width: 20,
                    height: 20,
                    background: a(632079).Tj.assistantCornerButtonBackground,
                    borderRadius: "50%",
                    border: `1px solid ${a(632079).Tj.border.primary}`
                }
            };

            function h() {
                return (0, o.jsx)("img", {
                    style: f.faceImgStyles,
                    src: n,
                    role: "presentation",
                    alt: "Notion AI Face"
                })
            }
            let x = {
                faceImgStyles: {
                    width: 20,
                    height: 20,
                    background: a(632079).Tj.assistantCornerButtonBackground,
                    borderRadius: "50%",
                    border: `1px solid ${a(632079).Tj.border.primary}`,
                    marginInlineStart: -2,
                    marginInlineEnd: 2
                }
            };

            function v() {
                return (0, o.jsx)("img", {
                    style: x.faceImgStyles,
                    src: n,
                    role: "presentation",
                    alt: "Notion AI Face"
                })
            }
        },
        517352: (e, t, a) => {
            a.d(t, {
                e: () => r
            });
            var i = a(296540),
                n = a(474848);
            let r = (0, i.forwardRef)(function(e, t) {
                let {
                    children: r,
                    relative: l,
                    tooltip: o,
                    tooltipPlacement: s = "top",
                    iconLeading: d,
                    iconTrailing: u,
                    ...c
                } = e, {
                    size: p
                } = (0, a(311077).M)(), g = (0, i.useMemo)(() => d && "sm" !== p ? {
                    size: "default",
                    icon: d
                } : d, [d, p]), m = (0, i.useMemo)(() => u && "sm" !== p ? {
                    size: "default",
                    icon: u
                } : u, [u, p]), f = (0, a(960253).I)(() => ({
                    button: {
                        borderRadius: a(399411).VJ["lg" === p ? "xl" : "xs"],
                        position: l ? "relative" : void 0
                    }
                }), [l, p]), h = e => (0, n.jsx)(a(988022).p, {
                    ref: t,
                    colorPalette: "gray",
                    size: p,
                    iconLeading: g,
                    iconTrailing: m,
                    external: !0,
                    disabledFeedback: !0,
                    style: f.button,
                    ...(0, a(63390).A)(c, e),
                    children: r ? (0, n.jsx)(a(111010).D, {
                        styleKey: "captionRegular",
                        children: r
                    }) : void 0
                });
                return o ? (0, n.jsx)(a(51831).m, {
                    content: () => o,
                    placement: s,
                    alignment: "center",
                    children: h
                }) : h()
            })
        },
        539694: (e, t, a) => {
            a.d(t, {
                _: () => i
            });
            let i = (0, a(104509).xh)("notion", {
                default: {
                    loader: () => a.e(60858).then(a.bind(a, 792668))
                },
                tintable: {
                    loader: () => a.e(60858).then(a.bind(a, 898378))
                }
            })
        },
        558208: (e, t, a) => {
            a.d(t, {
                AD: () => o,
                Ci: () => s,
                Ll: () => n,
                XN: () => l,
                rz: () => r
            });
            var i = a(296540);
            let n = "TemporaryAiThreadCache";
            class r {
                tempThreadPointer = void 0;
                getOrCreateThreadId(e) {
                    let {
                        environment: t,
                        spaceId: i,
                        maybeThreadStore: n
                    } = e;
                    if (n) return n.id;
                    if (this.tempThreadPointer) return this.tempThreadPointer.id;
                    let r = (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).Toz,
                        spaceId: i
                    });
                    return this.tempThreadPointer = {
                        id: r,
                        table: a(832375).Toz,
                        spaceId: i
                    }, r
                }
                reset() {
                    this.tempThreadPointer = void 0
                }
            }
            let l = (0, i.createContext)(new r);

            function o() {
                return (0, i.useContext)(l)
            }

            function s(e) {
                var t;
                return (null == e || null == (t = e.inMemoryRecordCache) ? void 0 : t.name) === n
            }
            l.displayName = "TemporaryAiThreadContext"
        },
        593847: (e, t, a) => {
            function i(e) {
                let {
                    spaceStore: t,
                    spaceJoinOrCreate: i,
                    isFirstTimeOnboarding: n,
                    flowName: r
                } = e;
                if ("default" !== r && "reimagined_default" !== r || !(null == t ? void 0 : t.isAiEnabledOnSpace()) || !n || "create" !== i) return !1;
                let l = a(218744).default.getEligibleGroup({
                    experimentId: "getting_started_example_company_workspace",
                    disableExposureLogging: !0
                });
                return !l || "control" === l
            }

            function n(e) {
                let {
                    environment: t,
                    spaceJoinOrCreate: i
                } = e;
                "create" !== i || a(218744).default.getEligibleGroup({
                    experimentId: "adoption_new_user_agent_onboarding_checklist"
                }) && (0, a(647164).o)({
                    environment: t,
                    featureKey: "adoption_agent_new_user_onboarding_checklist"
                })
            }

            function r(e) {
                var t;
                let {
                    environment: i
                } = e, n = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!n || (0, a(89408).mA)({
                        environment: i
                    })) return !1;
                let r = null == (t = n.getSettings()) ? void 0 : t.post_onboarding_agent_config;
                return !(null != r && r.thread_id && (0, a(596244).B)(r)) && !!(0, a(89408).wz)({
                    environment: i,
                    featureKey: "adoption_agent_new_user_onboarding_checklist"
                }) && "sidebar_d1" === a(218744).default.getEligibleGroup({
                    experimentId: "adoption_new_user_agent_onboarding_checklist",
                    disableExposureLogging: !0
                })
            }

            function l(e) {
                let {
                    environment: t
                } = e;
                return !!d({
                    environment: t
                }) && "sidebar_d1" === a(218744).default.getEligibleGroup({
                    experimentId: "adoption_new_user_agent_onboarding_joiner_v2",
                    disableExposureLogging: !0
                })
            }

            function o(e) {
                let {
                    environment: t
                } = e, i = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i || !d({
                        environment: t
                    })) return !1;
                if ("sidebar_d2" === a(218744).default.getEligibleGroup({
                        experimentId: "adoption_new_user_agent_onboarding_joiner_v2",
                        disableExposureLogging: !0
                    })) {
                    let e = (0, a(996903).i)(i);
                    return null !== e && e >= 1
                }
                return !1
            }

            function s(e) {
                let {
                    environment: t
                } = e;
                return !!d({
                    environment: t
                }) && "sidebar_nudge" === a(218744).default.getEligibleGroup({
                    experimentId: "adoption_new_user_agent_onboarding_joiner_v2",
                    disableExposureLogging: !0
                })
            }

            function d(e) {
                let {
                    environment: t
                } = e;
                return !(!a(728372).AppStoreCurrentUserSettingsStore.state || (0, a(89408).dp)({
                    environment: t
                })) && !!(0, a(89408).wz)({
                    environment: t,
                    featureKey: "adoption_new_user_agent_onboarding_joiner_v2"
                })
            }
            a.d(t, {
                Au: () => o,
                L9: () => s,
                MH: () => l,
                fw: () => r,
                g9: () => n,
                jr: () => i
            })
        },
        594014: (e, t, a) => {
            a.d(t, {
                m: () => r
            });
            var i = a(296540),
                n = a(474848);
            let r = i.memo(function(e) {
                let {
                    textValue: t
                } = e, r = (0, i.useMemo)(() => (0, a(862060).X1)((0, a(862060).eC)(t)), [t]);
                return (0, n.jsx)("span", {
                    children: r
                })
            })
        },
        647164: (e, t, a) => {
            a.d(t, {
                o: () => i
            });

            function i({
                environment: e,
                featureKey: t
            }) {
                var n;
                let r = (0, a(904434).R$)(e);
                if (!r) return;
                let l = null == (n = r.getSettings()) ? void 0 : n.exposed_to_adoption_feature;
                (0, a(377796).createAndCommit)({
                    environment: e,
                    userAction: "userSettingsActions.setAdoptionFeatureExposure",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: r,
                            transaction: e,
                            data: {
                                exposed_to_adoption_feature: { ...l,
                                    [t]: [...(null == l ? void 0 : l[t]) ? ? [], Date.now()]
                                }
                            }
                        })
                    }
                })
            }
        },
        675828: (e, t, a) => {
            a.d(t, {
                f: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                assistantBlueLink: {
                    color: a(632079).Tj.blue.text.accentPrimary,
                    cursor: "pointer",
                    fontWeight: a(699422).Wy.semibold
                }
            };

            function r(e) {
                return (0, i.jsx)("span", {
                    style: n.assistantBlueLink,
                    onClick: e.onClick,
                    children: e.children
                })
            }
        },
        726546: (e, t, a) => {
            a.d(t, {
                E: () => n
            });
            var i = a(296540);

            function n(e) {
                let t, n, {
                        type: r,
                        analyticsEntrypoint: l,
                        entrypoint: o,
                        isOptimisticUpsell: s
                    } = e,
                    d = (0, a(972740).L)(),
                    u = null == d ? void 0 : d.id,
                    c = (0, a(345776).T)(),
                    p = (0, a(226309).lh)({
                        spaceId: u
                    }),
                    g = (0, a(985435).y)(p);
                if ("product" !== r || (0, a(192159).eh)(p, e.product)) {
                    if ("feature" === r && (s || !(0, a(94418).e2)(e.featureAvailability))) {
                        var m;
                        let a = null == (m = e.featureAvailability) ? void 0 : m.upsell;
                        (null == a ? void 0 : a.type) === "product" && (t = a.product)
                    }
                } else t = e.product;
                t && (0, a(880280).rU)(t) && (n = t);
                let {
                    requests: f
                } = (0, a(478530).I)({
                    spaceId: u
                }), [h, x] = (0, a(243326).k)({
                    feature: n,
                    requests: f,
                    userId: c
                }), v = g && "unrequested" === h, y = (0, i.useCallback)(() => {
                    if (!n || !v) return a(763230).lQ;
                    (0, a(104310).u)({
                        event: {
                            eventName: "upgrade_request_button_clicked",
                            eventProperties: {
                                feature: n,
                                entrypoint: l
                            }
                        }
                    }), a(839250).Q.update(e => ({
                        open: !0,
                        feature: n,
                        userId: c,
                        setRequestState: x,
                        entrypoint: o
                    }))
                }, [v, n, l, c, x, o]);
                return n ? {
                    openModal: y,
                    requestState: h,
                    canUserRequestUpgrade: v,
                    isUserEligibleToRequestUpgrade: g,
                    userHasPendingRequest: "pending" === h
                } : {
                    openModal: y,
                    requestState: "unrequested",
                    canUserRequestUpgrade: !1,
                    isUserEligibleToRequestUpgrade: !1,
                    userHasPendingRequest: !1
                }
            }
        },
        743423: (e, t, a) => {
            a.d(t, {
                c: () => r,
                l: () => n
            });
            var i = a(296540);

            function n(e) {
                let {
                    onError: t,
                    onSuccess: n,
                    onStart: l,
                    onComplete: o,
                    environment: s,
                    bucket: d,
                    record: u,
                    accept: c = "image/png, image/jpeg"
                } = e, [p, g] = (0, i.useState)(!1);
                return {
                    uploadFile: (0, i.useCallback)(async () => {
                        let e = await a(385475).dA({
                            environment: s,
                            supportsMobileNativeFileUpload: !1,
                            multiple: !1,
                            accept: c
                        });
                        if (0 === e.length) return;
                        let i = e[0],
                            p = (0, a(728601).QC)(i.name),
                            m = a(92513).Dt(),
                            f = i instanceof File ? new File([i], `${m}${p}`, {
                                type: i.type
                            }) : i;
                        if (i.size > 2097152) {
                            t({
                                message: a(962299).A.formatMessage(r.fileTooLarge),
                                type: "size"
                            }), null == o || o(), g(!1);
                            return
                        }
                        let h = {
                            environment: s,
                            file: f,
                            onStart: () => {
                                null == l || l(), g(!0)
                            },
                            onError: e => {
                                t({
                                    message: a(962299).A.formatMessage(r.uploadError),
                                    type: "upload",
                                    error: e
                                }), null == o || o(), g(!1)
                            },
                            onComplete: e => {
                                n(e, i.name), null == o || o(), g(!1)
                            }
                        };
                        "secure" === d && u ? a(385475).QM({ ...h,
                            bucket: d,
                            record: u,
                            isFileBlock: !1
                        }) : a(385475).QM({ ...h,
                            bucket: "public"
                        })
                    }, [s, t, l, n, o, d, u, c]),
                    isUploading: p
                }
            }
            let r = (0, a(109939).YK)({
                pdfTooManyPages: {
                    id: "useFileUpload.pdfTooManyPages",
                    defaultMessage: "Please limit the PDF to {maxPageCount} pages or less."
                },
                fileTooLarge: {
                    id: "creatorProfile.useFileUpload.fileTooLarge",
                    defaultMessage: "Please limit file size to 10MB or less."
                },
                assistantFileTooLarge: {
                    id: "useFileUpload.assistantFileTooLarge",
                    defaultMessage: "Please limit the file size to {fileSize}MB or less."
                },
                assistantPdfFileNoContent: {
                    id: "useFileUpload.assistantPdfFileNoContent",
                    defaultMessage: "Unable to extract text. Note that reading images within PDFs is not supported."
                },
                assistantPdfTooManyPages: {
                    id: "useFileUpload.assistantPdfTooManyPages",
                    defaultMessage: "Please limit the PDF file to {maxPageCount} pages or less."
                },
                uploadError: {
                    id: "creatorProfile.useFileUpload.uploadError",
                    defaultMessage: "Failed to upload the file. Please try again."
                },
                invalidFileType: {
                    id: "useFileUpload.invalidFileType",
                    defaultMessage: "Unable to upload this file type. Please select a different type"
                },
                failedToRetrieveFile: {
                    id: "useFileUpload.failedToRetrieveFile",
                    defaultMessage: "Unable to find the file."
                },
                missingFileSize: {
                    id: "useFileUpload.missingFileSize",
                    defaultMessage: "File metadata is missing. Re-uploading may resolve this issue."
                },
                somethingWentWrong: {
                    id: "useFileUpload.somethingWentWrong",
                    defaultMessage: "Something went wrong. Please try again later"
                },
                noRemainingPagesForUpload: {
                    id: "useFileUpload.noRemainingPagesForUpload",
                    defaultMessage: "You have reached the maximum of {maxPageCount} PDF pages per session."
                },
                passwordProtected: {
                    id: "useFileUpload.passwordProtected",
                    defaultMessage: "The file is password protected."
                },
                corruptedFile: {
                    id: "useFileUpload.corruptedFile",
                    defaultMessage: "The file is corrupted or invalid."
                },
                moderationFlagged: {
                    id: "useFileUpload.moderationFlagged",
                    defaultMessage: "The content of this file has been flagged by moderation and cannot be used."
                },
                csvTooManyRowsAndColumns: {
                    id: "useFileUpload.csvTooManyRowsAndColumns",
                    defaultMessage: "For CSVs that exceed {maxRowCount} rows and {maxColCount} columns, please import the CSV as a database."
                },
                csvTooLarge: {
                    id: "useFileUpload.csvTooLarge",
                    defaultMessage: "Please limit the CSV to {maxSize} or less."
                },
                computerFileTooLarge: {
                    id: "useFileUpload.computerFileTooLarge",
                    defaultMessage: "Please limit the file size to {fileSize}MB or less."
                }
            })
        },
        758737: (e, t, a) => {
            a.d(t, {
                R: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.41 3.05 9.98 9.9",
                    directional: !0,
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M4.482 3.238a.625.625 0 1 0-.884.884L7.476 8l-3.878 3.878a.625.625 0 0 0 .884.884l4.32-4.32a.625.625 0 0 0 0-.884z"
                        }), (0, i.jsx)("path", {
                            d: "M8.882 3.238a.625.625 0 0 0-.884.884L11.876 8l-3.878 3.878a.625.625 0 0 0 .884.884l4.32-4.32a.625.625 0 0 0 0-.884z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("arrowChevronDoubleForwardSmall", n, "small")
        },
        790451: (e, t, a) => {
            a.d(t, {
                e: () => r
            }), a(296540);
            var i = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 11.75 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.07 11.558a.625.625 0 0 1 .885 0l1.42 1.42V9.513a.625.625 0 1 1 1.25 0v3.467l1.42-1.42a.625.625 0 0 1 .884.883l-2.487 2.487a.625.625 0 0 1-.884 0l-2.487-2.487a.625.625 0 0 1 0-.884"
                        }), (0, i.jsx)("path", {
                            d: "M6.25 2.375A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125V8.121c0-.563-.224-1.104-.622-1.502L11.63 2.997a2.13 2.13 0 0 0-1.502-.622zM5.375 4.5c0-.483.392-.875.875-.875H10V6.25a2 2 0 0 0 2 2h2.625v7.25a.875.875 0 0 1-.875.875h-7.5a.875.875 0 0 1-.875-.875zm8.741 2.75H12a1 1 0 0 1-1-1V4.134z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("arrowPageDown", n, "default")
        },
        805469: (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            var i = a(296540);
            let n = function({
                shouldPreserveTextSelection: e,
                shouldPreserveBlockSelection: t,
                shouldRestoreSelection: n,
                onClearSelection: r
            }) {
                let l = (0, a(533992).v3)(),
                    o = (0, i.useRef)(e),
                    s = (0, i.useRef)(""),
                    d = (0, i.useRef)({
                        selectionState: null,
                        textSelectionState: null
                    }),
                    u = (0, i.useCallback)(() => d.current, []),
                    c = (0, i.useCallback)(() => {
                        s.current = window.location.href, a(358377).default.hasSelection() && (d.current.textSelectionState = a(358377).default.cloneState()), (0, a(525779).clear)({
                            environment: l
                        }), t && (a(584265).default.isSelected() && (d.current.selectionState = a(584265).default.cloneState()), (0, a(471e3).I)({
                            environment: l
                        }))
                    }, [l, t]),
                    p = (0, i.useCallback)(() => {
                        d.current = {
                            selectionState: null,
                            textSelectionState: null
                        }, s.current = "", null == r || r()
                    }, [r]),
                    g = (0, i.useCallback)(() => {
                        let {
                            selectionState: e,
                            textSelectionState: i
                        } = d.current;
                        window.location.href === s.current && (i && "mode" in i && "editing" === i.mode && a(358377).default.setState({ ...a(358377).default.state,
                            ...i
                        }), t && e && a(584265).default.setState({ ...a(584265).default.state,
                            ...e
                        })), p()
                    }, [p, t]);
                return (0, a(383953).l)(() => {
                    o.current = e, e && c()
                }), (0, i.useEffect)(() => (o.current && !e ? n ? g() : p() : !o.current && e && c(), o.current = e, () => {
                    n ? g() : p()
                }), [e, p, g, c, n]), {
                    clearSavedSelection: p,
                    restoreSavedSelection: g,
                    getSavedSelection: u
                }
            }
        },
        839250: (e, t, a) => {
            a.d(t, {
                Q: () => i
            });
            let i = a(546605).Store.createValue({
                open: !1
            }, {
                name: "UpgradeRequestFormModalStore"
            })
        },
        872017: (e, t, a) => {
            a.d(t, {
                D: () => r,
                O: () => n
            });
            let i = ["profile", "plans", "members"];

            function n(e) {
                return !!(0, a(722371).Xk)(i, e)
            }

            function r(e) {
                switch (e) {
                    case "profile":
                    case "manage_emails":
                    case "notifications_and_settings":
                    case "user_settings":
                    case "notifications":
                    case "mail_and_calendar":
                    case "connected_apps":
                    case "language_and_region":
                    case "offline":
                    case "settings":
                    case "members":
                    case "plans":
                    case "billing":
                    case "ai_usage_dashboard":
                    case "subscription":
                    case "security":
                    case "identity_provisioning":
                    case "admin_content_search":
                    case "integrations":
                    case "integrations_mcp":
                    case "imports":
                    case "teams":
                    case "audit_log":
                    case "analytics":
                    case "sites":
                    case "public_pages":
                    case "custom_emoji":
                    case "verified_pages":
                    case "requests":
                    case "workspace_discovery":
                    case "experiments":
                    case "performance_toolbar":
                    case "personalization":
                    case "user_similarity_scores":
                    case "collection_debug":
                    case "offline_mode_debug":
                    case "ai":
                    case "design_previews":
                    case "mobile_native":
                        return e;
                    default:
                        return
                }
            }
        },
        931990: (e, t, a) => {
            function i(e) {
                let {
                    dateTime: t,
                    intl: i,
                    shortenDateAndRange: n
                } = e, r = a(25825).C6.toPersistedDate(t.valueOf());
                return a(850640).ZF({
                    value: r,
                    allowRelativeDates: !0,
                    intl: i,
                    shortenDateAndRange: n,
                    displayInUserTimezone: !0
                })
            }

            function n(e) {
                let {
                    dateTime: t,
                    intl: i,
                    userTimeZone: n,
                    displayInUserTimezone: r,
                    alwaysIncludeTimezone: l
                } = e, o = a(25825).C6.toPersistedDateTime(t.valueOf(), t.zoneName);
                return a(850640).ZF({
                    value: o,
                    allowRelativeDates: !0,
                    intl: i,
                    userTimeZone: n,
                    displayInUserTimezone: r,
                    alwaysIncludeTimezone: l
                })
            }

            function r(e) {
                let {
                    luxonRange: t,
                    intl: i
                } = e, n = a(25825).C6.toPersistedDateRange(t), r = a(850640).ZF({
                    value: n,
                    allowRelativeDates: !1,
                    shortenDateAndRange: !0,
                    intl: i,
                    displayInUserTimezone: !0
                }), l = t.end.setZone((0, a(714350).P)()), o = a(850640).fU({
                    start_time: l.toFormat(a(943003).GE),
                    humanReadable: !1,
                    intl: i
                });
                return i.formatMessage({
                    id: "verification.timeRange",
                    defaultMessage: "{formattedDateRange} at {formattedEndTime}"
                }, {
                    formattedDateRange: r,
                    formattedEndTime: o
                })
            }
            a.d(t, {
                OH: () => i,
                T2: () => n,
                do: () => r
            })
        },
        985435: (e, t, a) => {
            a.d(t, {
                y: () => i
            });

            function i(e) {
                let t = (0, a(993077).U2)(),
                    i = (0, a(682985).K8)(() => !!((null == t ? void 0 : t.isMember()) && !(null != t && t.isWorkspaceOwner())), [t]),
                    n = (0, a(972740).L)(),
                    r = (0, a(682985).K8)(() => null == n ? void 0 : n.getDisableMemberUpgradeRequests(), [n]);
                return !(a(986939).A.isMobile || r || !(0, a(262166).jR)((0, a(192159).AI)(e)) || (0, a(192159).et)(e)) && i
            }
        }
    }
]);