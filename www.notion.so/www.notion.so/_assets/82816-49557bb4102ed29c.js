"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [82816], {
        33418: (e, t, n) => {
            n.d(t, {
                J: () => c
            });
            var i = n(296540),
                a = n(474848);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.85 1.86 12.31 12.25",
                    svg: (0, a.jsx)("path", {
                        d: "M3.142 2.332a.55.55 0 0 1 .776.06l.226.263.008.012 8.773 10.235a.55.55 0 0 1-.843.707l-1.25-1.46H7.08l1.042 1.043a.55.55 0 0 1-.778.777l-1.98-1.98a.55.55 0 0 1 0-.778l1.98-1.98a.55.55 0 0 1 .778.778l-1.042 1.04h2.81L4.66 4.95h-.82a.89.89 0 0 0-.89.89v4.78a.55.55 0 0 1-1.1 0V5.84c0-1.06.828-1.923 1.872-1.984l-.641-.747a.55.55 0 0 1 .06-.777M13.6 4.83a.55.55 0 0 1 .55.55v4.78c0 .642-.305 1.21-.777 1.573l-.716-.836a.89.89 0 0 0 .393-.737V5.38a.55.55 0 0 1 .55-.55M7.877 2.031a.55.55 0 0 1 .778 0l1.98 1.98a.55.55 0 0 1 0 .778l-1.73 1.73-.718-.837.732-.732h-1.36l-.942-1.1H8.92L7.877 2.81a.55.55 0 0 1 0-.778"
                    })
                },
                o = (0, n(104509).wt)("arrowSquareLeftRightSlashSmall", l, "small");

            function r(e) {
                let {
                    environment: t,
                    userSettingsStore: i,
                    dismissed: a
                } = e;
                (0, n(377796).createAndCommit)({
                    environment: t,
                    userAction: "userSettingsActions.setDismissDictationNewPageNux",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: i,
                            transaction: e,
                            data: {
                                dismissed_dictation_new_page_nux: a
                            }
                        })
                    }
                })
            }(0, n(202146).exposeDebugValue)("resetDictationTooltip", e => {
                let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                t && r({
                    environment: e,
                    userSettingsStore: t,
                    dismissed: !1
                })
            });
            let s = (0, n(109939).YK)({
                    horizontalNewPageDictationItemTooltip: {
                        id: "TemplatePickerMenuItem.dictationCallout.tooltip",
                        defaultMessage: "Use your voice to write"
                    },
                    dictationCalloutHeader: {
                        id: "TemplatePickerMenuItem.dictationCallout.Header",
                        defaultMessage: "Use your voice to write with high-quality speech-to-text"
                    }
                }),
                c = (0, i.forwardRef)(function(e, t) {
                    let {
                        format: n,
                        className: i,
                        icon: l,
                        title: o,
                        isDefault: r,
                        isChecked: s,
                        recurrence: c,
                        recurrenceDisabled: d,
                        right: u,
                        focused: g,
                        onClick: x,
                        onMouseMove: v,
                        onMouseEnter: M,
                        onMouseLeave: j,
                        locked: b,
                        type: I
                    } = e;
                    if ("collection-overlay" === n) return (0, a.jsx)(p, {
                        ref: t,
                        className: i,
                        icon: l,
                        format: n,
                        title: o,
                        isDefault: r,
                        isChecked: s,
                        recurrence: c,
                        recurrenceDisabled: d,
                        right: u,
                        focused: g,
                        onClick: x,
                        onMouseMove: v,
                        onMouseEnter: M,
                        onMouseLeave: j,
                        locked: b,
                        type: I
                    });
                    if ("phone-modal" === n) return (0, a.jsx)(m, {
                        ref: t,
                        icon: l,
                        format: n,
                        title: o,
                        isDefault: r,
                        isChecked: s,
                        recurrence: c,
                        focused: g,
                        onClick: x
                    });
                    if ("horizontal-new-page" === n)
                        if ("dictation" === I) return (0, a.jsx)(y, {
                            ref: t,
                            focused: g,
                            onClick: x,
                            onMouseMove: v,
                            onMouseEnter: M,
                            onMouseLeave: j,
                            icon: l,
                            title: o,
                            type: I
                        });
                        else return (0, a.jsx)(h, {
                            ref: t,
                            focused: g,
                            onClick: x,
                            onMouseMove: v,
                            onMouseEnter: M,
                            onMouseLeave: j,
                            icon: l,
                            title: o,
                            type: I
                        });
                    return "horizontal-new-page-submenu" === n ? (0, a.jsx)(k, {
                        ref: t,
                        focused: g,
                        onClick: x,
                        onMouseMove: v,
                        onMouseEnter: M,
                        onMouseLeave: j,
                        icon: l,
                        title: o
                    }) : (0, a.jsx)(f, {
                        ref: t,
                        focused: g,
                        onClick: x,
                        onMouseMove: v,
                        onMouseEnter: M,
                        onMouseLeave: j,
                        icon: l,
                        format: n,
                        title: o,
                        isDefault: r,
                        isChecked: s,
                        recurrence: c,
                        recurrenceDisabled: d,
                        right: u
                    })
                }),
                d = {
                    text: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineStart: 8,
                        gap: 8
                    },
                    default: {
                        fontSize: 12,
                        fontWeight: n(699422).Wy.medium,
                        color: n(632079).Tj.text.tertiary,
                        borderRadius: 4,
                        background: n(632079).Tj.background.secondary,
                        padding: "1px 6px"
                    }
                };

            function u(e) {
                let {
                    format: t,
                    title: i,
                    isDefault: l,
                    isChecked: r,
                    recurrenceDisabled: s
                } = e;
                return "collection-overlay" !== t ? (0, a.jsx)(a.Fragment, {
                    children: i
                }) : (0, a.jsxs)(n(4458).fI, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [i, (0, a.jsxs)("span", {
                        style: d.text,
                        children: [l ? (0, a.jsx)("span", {
                            style: d.default,
                            children: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Default",
                                id: "database.templatePickerMenuItem.default"
                            })
                        }) : void 0, r ? (0, a.jsx)(n(16275).I, {
                            icon: n(971730).checkmarkSmallIcon,
                            size: "sm",
                            colorVariant: "primary"
                        }) : null, s ? (0, a.jsx)(n(16275).I, {
                            icon: o,
                            size: "sm",
                            colorVariant: "disabled"
                        }) : null]
                    })]
                })
            }
            let p = (0, i.forwardRef)(function(e, t) {
                    let {
                        className: i,
                        icon: l,
                        format: o,
                        title: r,
                        isDefault: s,
                        isChecked: c,
                        recurrence: d,
                        recurrenceDisabled: p,
                        right: m,
                        focused: g,
                        onClick: f,
                        onMouseMove: x,
                        onMouseEnter: h,
                        onMouseLeave: k,
                        locked: v,
                        type: y
                    } = e;
                    return (0, a.jsx)(n(95582).A, {
                        ref: t,
                        className: i,
                        icon: l,
                        title: (0, a.jsx)(u, {
                            format: o,
                            title: r,
                            isDefault: s,
                            isChecked: c,
                            recurrence: d,
                            recurrenceDisabled: p
                        }),
                        right: m,
                        focused: g,
                        onClick: f,
                        onMouseMove: x,
                        onMouseEnter: h,
                        onMouseLeave: k,
                        showDragHandle: !n(986939).A.isMobile && !v,
                        dragHandleDisabled: "empty_page" === y
                    })
                }),
                m = (0, i.forwardRef)(function(e, t) {
                    let {
                        icon: i,
                        format: l,
                        title: o,
                        isDefault: r,
                        isChecked: s,
                        recurrence: c,
                        focused: d,
                        onClick: p
                    } = e;
                    return (0, a.jsx)(n(95582).A, {
                        ref: t,
                        icon: i ? (0, a.jsx)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            width: 24,
                            height: 24,
                            children: i
                        }) : null,
                        title: (0, a.jsx)(u, {
                            format: l,
                            title: o,
                            isDefault: r,
                            isChecked: s,
                            recurrence: c
                        }),
                        focused: d,
                        onClick: p,
                        showDragHandle: !1
                    })
                }),
                g = {
                    hovered: {
                        background: n(632079).Tj.buttonHoveredBackground,
                        color: n(632079).Tj.text.primary
                    },
                    pressed: {
                        background: n(632079).Tj.buttonPressedBackground
                    },
                    right: {
                        marginInlineStart: "auto",
                        marginInlineEnd: 4
                    }
                },
                f = (0, i.forwardRef)(function({
                    focused: e,
                    onClick: t,
                    onMouseMove: i,
                    onMouseEnter: l,
                    onMouseLeave: o,
                    icon: r,
                    format: s,
                    title: c,
                    isDefault: d,
                    isChecked: p,
                    recurrence: m,
                    recurrenceDisabled: f,
                    right: x
                }, h) {
                    let k = (0, n(67499).S)(),
                        v = (0, n(682985).K8)(() => {
                            let e = null == k ? void 0 : k.publicEditModeStore.state;
                            return (0, n(576348).ZE)(e, null == k ? void 0 : k.pageStore)
                        }, [k]),
                        y = (0, n(960253).I)(() => ({
                            container: { ...n(57461).CC,
                                display: "flex",
                                alignItems: "center",
                                flexGrow: 1,
                                height: n(986939).A.isMobile ? 36 : 32,
                                fontSize: 16,
                                borderRadius: 4,
                                paddingInlineStart: 8,
                                marginBottom: 2,
                                color: v ? n(632079).Tj.text.secondary : n(632079).Tj.text.tertiary
                            }
                        }), [v]);
                    return (0, a.jsxs)(n(64960).Ay, {
                        style: y.container,
                        hovered: e,
                        onClick: t,
                        onMouseMove: i,
                        onMouseEnter: l,
                        onMouseLeave: o,
                        hoveredStyle: g.hovered,
                        pressedStyle: g.pressed,
                        children: [(0, a.jsx)(n(4458).fI, {
                            alignItems: "center",
                            width: 24,
                            height: 24,
                            marginInlineEnd: 10,
                            children: r
                        }), (0, a.jsx)(u, {
                            format: s,
                            title: c,
                            isDefault: d,
                            isChecked: p,
                            recurrence: m,
                            recurrenceDisabled: f
                        }), x ? (0, a.jsx)("div", {
                            style: g.right,
                            children: x
                        }) : null]
                    })
                }),
                x = (0, n(64960)._S)({
                    color: n(632079).Tj.background.tertiaryTranslucent
                }),
                h = (0, i.forwardRef)(function(e, t) {
                    let {
                        focused: i,
                        onClick: l,
                        onMouseMove: o,
                        onMouseEnter: r,
                        onMouseLeave: s,
                        icon: c,
                        title: d,
                        type: u,
                        tooltipEvents: p
                    } = e, m = (0, n(960253).I)(() => ({
                        container: { ...{
                                display: "flex",
                                alignItems: "center",
                                paddingTop: 6,
                                paddingInlineEnd: 14,
                                paddingBottom: 6,
                                paddingInlineStart: 10,
                                background: n(632079).Tj.background.tertiaryTranslucent,
                                borderRadius: 100,
                                fontSize: 13,
                                fontWeight: n(699422).Wy.medium
                            },
                            ..."more" === u ? {
                                width: 32,
                                height: 32,
                                padding: 0,
                                justifyContent: "center"
                            } : {},
                            ...i ? {
                                background: x.hovered
                            } : {}
                        }
                    }), [i, u]);
                    return (0, a.jsx)("div", {
                        ref: t,
                        onClick: l,
                        onMouseMove: o,
                        onMouseEnter: r,
                        onMouseLeave: s,
                        ...p || {},
                        style: m.container,
                        children: (0, a.jsxs)(n(4458).fI, {
                            gap: 4,
                            alignItems: "center",
                            children: [c, d]
                        })
                    })
                }),
                k = (0, i.forwardRef)(function(e, t) {
                    let {
                        focused: i,
                        onClick: l,
                        onMouseMove: o,
                        onMouseEnter: r,
                        onMouseLeave: s,
                        icon: c,
                        title: d
                    } = e, u = (0, n(960253).I)(() => {
                        let e = {
                            background: n(632079).Tj.background.tertiaryTranslucent,
                            borderRadius: 6
                        };
                        return {
                            container: {
                                display: "flex",
                                alignItems: "center",
                                paddingTop: 4,
                                paddingInlineEnd: 10,
                                paddingBottom: 4,
                                paddingInlineStart: 8,
                                ...i ? e : {}
                            }
                        }
                    }, [i]);
                    return (0, a.jsx)("div", {
                        ref: t,
                        onClick: l,
                        onMouseMove: o,
                        onMouseEnter: r,
                        onMouseLeave: s,
                        style: u.container,
                        children: (0, a.jsxs)(n(4458).fI, {
                            gap: 8,
                            alignItems: "center",
                            children: [c, d]
                        })
                    })
                }),
                v = {
                    tooltipContainer: {
                        display: "flex",
                        flexDirection: "row",
                        gap: "6px",
                        padding: "0px 0",
                        alignItems: "center",
                        marginInlineStart: "-4px"
                    },
                    tooltip: {
                        width: 200
                    },
                    badge: {
                        background: n(632079).Tj.palette.translucentGray[300],
                        color: n(632079).Tj.text.inverseSecondary,
                        width: "fit-content"
                    }
                },
                y = (0, i.forwardRef)(function(e, t) {
                    let l = (0, i.useRef)(null),
                        o = (0, n(718012).V)(),
                        [c, d] = function() {
                            let [e, t] = (0, i.useState)(!1), a = (0, n(533992).v3)(), l = (0, n(682985).O$)(n(728372).AppStoreCurrentUserSettingsStore);
                            return [(0, n(682985).K8)(() => {
                                let t = n(218744).default.checkGate({
                                        gateName: "dictation_new_page_nux"
                                    }),
                                    i = null == l ? void 0 : l.getSettings(),
                                    a = !!(null == i ? void 0 : i.dismissed_dictation_new_page_nux);
                                return t && !a && !e
                            }, [l, e]), (0, i.useCallback)(() => {
                                l && (t(!0), r({
                                    environment: a,
                                    userSettingsStore: l,
                                    dismissed: !0
                                }))
                            }, [a, l, t])]
                        }();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(n(397732).B, {
                            shouldShow: c,
                            calloutId: "dictation_new_page_origin_element_tooltip",
                            inAppCalloutStore: o,
                            children: (0, a.jsx)(n(788139).k, {
                                style: v.tooltip,
                                pointerLength: 25,
                                pointerPosition: "50%",
                                origin: l,
                                placementToOrigin: "top",
                                alignmentToOrigin: "center",
                                header: (0, a.jsx)(n(674788).A, {
                                    style: v.badge
                                }),
                                content: (0, a.jsx)(n(109939).sA, { ...s.dictationCalloutHeader
                                }),
                                shouldDismissUponOutsideClick: !0,
                                onCloseClick: d
                            })
                        }), (0, a.jsx)(n(51831).m, {
                            disableTooltip: c,
                            content: () => (0, a.jsxs)("div", {
                                style: v.tooltipContainer,
                                children: [(0, a.jsx)(n(674788).A, {
                                    style: v.badge
                                }), (0, a.jsx)(n(109939).sA, { ...s.horizontalNewPageDictationItemTooltip
                                })]
                            }),
                            originGap: 6,
                            placement: "top",
                            children: n => (0, a.jsx)("div", {
                                ref: l,
                                children: (0, a.jsx)(h, { ...e,
                                    ref: t,
                                    tooltipEvents: n
                                })
                            })
                        })]
                    })
                })
        },
        146349: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var i = n(296540),
                a = n(474848);
            let l = {
                    k1xSpc: "x3nfvp2",
                    kGNEyG: "x6s0dn4",
                    kjj79g: "xl56j7k",
                    kmuXW: "x2lah0s",
                    krdFHd: "x1i5p2am",
                    kfmiAY: "x1whfx0g",
                    kT0f0o: "xr2y4jy",
                    kVL7Gh: "x1ihp6rs",
                    $$css: !0
                },
                o = {
                    kzqmXN: "xzuapc8",
                    kZKoxP: "xqvfhly",
                    k71WvV: "x1w5wx5t",
                    $$css: !0
                },
                r = {
                    kzqmXN: "xvy4d1p",
                    kZKoxP: "xxk0z11",
                    k71WvV: "x1ws5yxj",
                    $$css: !0
                };

            function s({
                onClick: e,
                className: t,
                isMobile: c,
                style: d,
                testId: u,
                onFocus: p,
                onBlur: m,
                onMouseDown: g,
                onMouseEnter: f,
                onMouseLeave: x
            }) {
                let h = (0, i.useMemo)(() => [l, c ? o : r, d], [c, d]);
                return (0, a.jsx)(n(64960).Ay, {
                    onClick: e,
                    style: h,
                    className: t,
                    testId: u,
                    onFocus: p,
                    onBlur: m,
                    onMouseDown: g,
                    onMouseEnter: f,
                    onMouseLeave: x,
                    children: (0, a.jsx)(n(16275).I, {
                        icon: n(361226).ellipsisSmallIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    })
                })
            }
        },
        152208: (e, t, n) => {
            n.r(t), n.d(t, {
                eyeIcon: () => l,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.96 4.19 18.07 11.62",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10.17 6.694a3.307 3.307 0 0 1 3.135 3.303l-.005.17a3.305 3.305 0 0 1-3.3 3.137l-.17-.004a3.307 3.307 0 0 1-3.132-3.133l-.004-.17A3.307 3.307 0 0 1 10 6.69zm-.17 2.2a1.104 1.104 0 0 0 0 2.207 1.103 1.103 0 0 0 0-2.207"
                        }), (0, i.jsx)("path", {
                            d: "M10 4.194c3.878 0 7.26 2.075 8.862 5.127l.073.163c.126.333.126.7 0 1.033l-.073.163c-1.602 3.052-4.984 5.126-8.862 5.126-3.757 0-7.049-1.946-8.707-4.843l-.156-.283a1.46 1.46 0 0 1 0-1.359l.156-.283C2.95 6.141 6.243 4.194 10 4.194m0 1.251c-3.33 0-6.196 1.724-7.622 4.214l-.134.243a.21.21 0 0 0 0 .197l.134.243c1.426 2.49 4.292 4.214 7.622 4.214 3.437 0 6.38-1.837 7.756-4.457l.018-.048a.2.2 0 0 0 0-.1l-.018-.049C16.38 7.282 13.437 5.445 10 5.445"
                        })]
                    })
                },
                l = (0, n(104509).wt)("eye", a, "default")
        },
        200424: (e, t, n) => {
            e.exports = n.p + "9ade71d75a1c0e93.png"
        },
        445283: (e, t, n) => {
            n.d(t, {
                N: () => i
            });

            function i(e) {
                if ("avatar" === e) return n(616922).eQ;
                if ("xsmall" === e) return 18;
                if ("xsmall_plus" === e) return 24;
                if ("small" === e) return 28;
                if ("small_plus" === e) return 32;
                else if ("medium" === e) return 36;
                else if ("medium_sidebar_button" === e) return 40;
                else if ("medium_plus" === e) return 44;
                else if ("medium_large" === e) return 48;
                else if ("large" === e) return 50;
                else if ("large_plus" === e) return 64;
                else if ("xlarge" === e) return 94;
                else if ("plans" === e) return 20;
                else if ("deep_dive" === e) return 16;
                else if ("upsell_banner" === e) return 74;
                else if ("personalization_modal" === e) return 96;
                else return (0, n(722371).HB)(e)
            }
        },
        666484: (e, t, n) => {
            n.d(t, {
                A: () => l
            }), n(898992), n(672577);
            var i = () => n(375622);
            class a extends i().A {
                findCollectionTemplatePickerItemFromStore(e) {
                    if (e) return this.find(t => (null == t ? void 0 : t.templateStore) === e)
                }
            }
            let l = new a
        },
        717202: (e, t, n) => {
            n.d(t, {
                K: () => c
            });
            var i = n.n(n(32485)),
                a = n(296540);

            function l(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "collection_template_action",
                        eventProperties: t
                    }
                })
            }
            var o = n(474848);
            let r = (0, n(109939).YK)({
                    emptyPageTitle: {
                        defaultMessage: "Empty",
                        id: "database.templatePicker.emptyPageTitle"
                    }
                }),
                s = {
                    display: "contents"
                },
                c = a.memo(a.forwardRef(function(e, t) {
                    let i = (0, n(109939).tz)(),
                        {
                            templateStore: l,
                            isMobile: c,
                            isOverlay: d,
                            isDefault: u,
                            isChecked: m,
                            locked: g,
                            canConfigureCollection: f,
                            draggable: x,
                            recurrence: h,
                            recurrenceDisabled: k,
                            recurrenceButtonDisabled: v,
                            hideActionMenu: y,
                            collectionStore: M,
                            focused: j
                        } = e,
                        b = (0, n(533992).v3)(),
                        I = (0, n(67499).S)(),
                        [A, S] = (0, a.useState)(!1),
                        C = (0, n(682985).uB)(void 0, n(510969).A),
                        T = !l && !d;
                    (0, n(682985).K8)(() => {
                        if (!l) return !1;
                        let e = l.getAutomationPointer();
                        return !!e && (0, n(896149).z)(l, e)
                    }, [l]);
                    let w = (0, n(682985).K8)(() => {
                            var e;
                            return !!(null == (e = M.getParentBlockStore()) ? void 0 : e.canEditContentOnly())
                        }, [M]),
                        P = (0, n(682985).K8)(() => !!l && (0, n(998256).p)({
                            environment: b,
                            blocks: [l],
                            publicEditMode: void 0,
                            pageContext: I
                        }), [l, b, I]),
                        _ = (0, n(682985).K8)(() => !y && (!g || g && !x) && (f || w || P) && (A || C.state.open || c || d) && !T, [y, g, x, f, w, A, C, c, d, T, P]),
                        D = (0, n(682985).K8)(() => !l || l.isEmptyPage(), [l]),
                        E = (0, n(682985).K8)(() => {
                            var e;
                            return null == l || null == (e = l.getModel()) ? void 0 : e.getRenderIcon({
                                getRecordModel: M.getRecordModel
                            })
                        }, [l, M]),
                        R = (0, n(682985).K8)(() => (0, n(569553).Te)(l), [l]),
                        N = (0, a.useRef)(null);
                    (0, n(336494).b)(n(666484).A, () => ({
                        templateStore: l,
                        getNode: () => N.current
                    }), [l]);
                    let z = (0, n(960253).I)(() => ({
                            recordIcon: { ...!d && {
                                    pointerEvents: "none",
                                    marginInlineEnd: 10
                                }
                            },
                            pageIcon: { ...!d && {
                                    fill: n(632079).Tj.icon.tertiary
                                }
                            }
                        }), [d]),
                        V = (0, a.useCallback)(() => {
                            S(!0)
                        }, []),
                        K = (0, a.useCallback)(() => {
                            S(!1)
                        }, []),
                        W = l ? (0, o.jsx)(n(627918).A, {
                            enableHover: !0,
                            showTooltipWhenTruncated: !0,
                            store: l
                        }) : i.formatMessage(r.emptyPageTitle),
                        B = (0, n(682985).uB)(void 0, n(510969).A),
                        L = (0, n(682985).K8)(() => B.state.open, [B]),
                        O = (h || L) && l;
                    return (0, o.jsx)("div", {
                        ref: N,
                        style: s,
                        children: (0, o.jsx)(n(33418).J, {
                            ref: t,
                            className: n(828432).SDd,
                            type: l ? "custom_template" : "empty_page",
                            format: d ? "collection-overlay" : "page-menu-item",
                            locked: g || !f || !x,
                            icon: (0, o.jsx)(n(569553).B6, {
                                disabled: !0,
                                icon: E,
                                iconRecordCategory: R,
                                isEmptyPage: D,
                                size: n(986939).A.isMobile && d ? 24 : 20,
                                isLarge: !d,
                                style: z.recordIcon,
                                pageIconStyle: z.pageIcon
                            }),
                            title: W,
                            onClick: e.onClick,
                            onMouseEnter: e.onMouseEnter,
                            right: _ ? (0, o.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 2,
                                children: [O ? (0, o.jsx)(n(800345).q, { ...n(381453).cJ(e, ["onClick"]),
                                    focused: j,
                                    disabled: v,
                                    recurrence: h,
                                    showTooltip: !0,
                                    variant: "icon",
                                    buttonPopupStore: B,
                                    onChange: async e => {
                                        let {
                                            recurrenceActions: t
                                        } = await n(800345).k.load();
                                        e ? t.addRecurrence({
                                            environment: b,
                                            blockStore: l,
                                            recurrence: e
                                        }) : t.deleteRecurrence({
                                            environment: b,
                                            blockStore: l
                                        })
                                    }
                                }) : null, (0, o.jsx)(p, {
                                    templateStore: l,
                                    buttonPopupStore: C,
                                    isOverlay: d,
                                    canEditContentOnly: w,
                                    onCancelClick: e.onCancelClick
                                })]
                            }) : null,
                            onMouseMove: V,
                            onMouseLeave: K,
                            focused: j,
                            isDefault: u,
                            isChecked: m,
                            recurrence: h,
                            recurrenceDisabled: k
                        })
                    })
                })),
                d = {
                    marginInlineEnd: 0
                },
                u = {
                    marginInlineEnd: -4
                };

            function p(e) {
                let {
                    templateStore: t,
                    buttonPopupStore: a,
                    isOverlay: r,
                    canEditContentOnly: s,
                    onCancelClick: c
                } = e, p = (0, n(533992).v3)(), m = (0, n(67499).S)(), f = (0, n(682985).K8)(() => !!t && (0, n(998256).p)({
                    environment: p,
                    blocks: [t],
                    publicEditMode: void 0,
                    pageContext: m
                }), [t, p, m]);
                return (0, o.jsx)(n(51831).m, {
                    content: () => f ? (0, o.jsx)(n(109939).sA, {
                        defaultMessage: "Edit this template",
                        id: "database.templatePickerItem.editTemplate.tooltip"
                    }) : (0, o.jsx)(n(109939).sA, {
                        defaultMessage: "View this template",
                        id: "database.templatePickerItem.viewTemplate.tooltip"
                    }),
                    delayThreshold: 300,
                    children: e => (0, o.jsx)(n(656252).A, {
                        popupType: n(986939).A.isMobile ? n(423291).n.SlideUp : n(423291).n.Popup,
                        placementToOrigin: "right",
                        originGap: 12,
                        buttonPopupStore: a,
                        content: e => (0, o.jsx)(g, {
                            templateStore: t,
                            buttonPopupStore: a,
                            canEditContentOnly: s,
                            isOverlay: r,
                            parent: e,
                            onCancelClick: c
                        }),
                        onClick: () => {
                            l(p, {
                                template_action: "open_menu"
                            })
                        },
                        children: t => (0, o.jsx)(n(146349).A, {
                            className: i()(n(828432).dn9, {
                                [n(828432).qGl]: n(986939).A.isMobile || r
                            }),
                            isMobile: n(986939).A.isMobile && r,
                            testId: "template-action-menu-button",
                            style: { ...!r ? d : u
                            },
                            ...(0, n(63390).A)(e, t)
                        })
                    })
                })
            }
            let m = {
                nestingExplanationMenuItemTitle: {
                    whiteSpace: "normal",
                    fontWeight: n(699422).Wy.medium,
                    fontSize: n(699422).J.UISmall.desktop
                },
                nestingExplanationMenuItemCaption: {
                    whiteSpace: "normal",
                    color: n(632079).oZ.lightTextColor,
                    fontWeight: n(699422).Wy.regular,
                    fontSize: n(699422).J.UISmall.desktop
                },
                style0: {
                    display: "inline"
                },
                style1: {
                    padding: 2
                }
            };

            function g(e) {
                var t;
                let i, {
                        templateStore: s,
                        buttonPopupStore: c,
                        canEditContentOnly: d,
                        isOverlay: u,
                        parent: p,
                        onCancelClick: g
                    } = e,
                    v = (0, n(109939).tz)(),
                    y = (0, n(533992).v3)(),
                    M = (0, n(713311).ET)(),
                    j = (0, n(67499).S)(),
                    b = (0, a.useContext)(n(440411).n),
                    {
                        collectionStore: I,
                        collectionViewStore: A,
                        isInPageLayout: S
                    } = (0, n(682985).K8)(() => ({
                        collectionStore: null == M ? void 0 : M.collectionStore(),
                        collectionViewStore: null == M ? void 0 : M.collectionViewStore(),
                        isInPageLayout: !!(null == M ? void 0 : M.viewsModuleContextStore.getViewsModule())
                    }), [M]),
                    C = (0, n(682985).K8)(() => !!s && (0, n(998256).p)({
                        environment: y,
                        blocks: [s],
                        publicEditMode: void 0,
                        pageContext: j
                    }), [s, y, j]),
                    T = (0, n(682985).K8)(() => null == s ? void 0 : s.getAutomationStore(), [s]),
                    w = (0, n(682985).K8)(() => null != T && T.isActive() ? null == T ? void 0 : T.getRecurrence() : void 0, [T]),
                    P = (0, n(682985).K8)(() => {
                        if (!s) return !1;
                        let e = (0, n(524242).Is)(s);
                        return !e.automationStoresReady || e.violatesConstraint
                    }, [s]),
                    _ = (0, n(682985).K8)(() => {
                        if (s) {
                            let e = (0, n(524242).Is)(s);
                            if (e.automationStoresReady) return e
                        }
                    }, [s]),
                    D = !!(null == _ ? void 0 : _.templateNestingExceedsMaxDepth),
                    E = (t = {
                        templateNestingExceedsMaxDepth: D,
                        immediateAncestorRecurrenceType: null == _ ? void 0 : _.immediateAncestorRecurrenceType,
                        ancestorHasDailyTemplate: !!(null == _ ? void 0 : _.ancestorHasDailyTemplate),
                        automationStore: T,
                        environment: y
                    }, (0, n(682985).K8)(() => (function(e) {
                        let {
                            templateNestingExceedsMaxDepth: t,
                            immediateAncestorRecurrenceType: i,
                            ancestorHasDailyTemplate: a,
                            automationStore: l,
                            environment: r
                        } = e;
                        return ((null == l ? void 0 : l.getStatus()) === "disabled_duplication" || (null == l ? void 0 : l.getStatus()) === "disabled_inactive_space") && null != l && l.getAlive() ? (0, o.jsx)(n(109939).sA, {
                            defaultMessage: "This repeating template was turned off. <inlinelink>Turn on</inlinelink> with the same settings.",
                            id: "database.templatePickerItem.actionMenu.nestedTemplateExplanationCaptionDisabledDuringDuplication",
                            values: {
                                inlinelink: e => (0, o.jsx)(n(428217).V, {
                                    external: !1,
                                    color: "notion-link-blue",
                                    hoverColor: "blue",
                                    onClick: () => {
                                        f(r, l)
                                    },
                                    children: e
                                })
                            }
                        }) : a ? (0, o.jsx)(n(109939).sA, {
                            defaultMessage: "It already gets created daily from another repeating template.",
                            id: "database.templatePickerItem.actionMenu.nestedTemplateExplanationCaptionNestedInDaily"
                        }) : t ? (0, o.jsx)(n(109939).sA, {
                            defaultMessage: "It already gets created automatically from other repeating templates.",
                            id: "database.templatePickerItem.actionMenu.nestedTemplateExplanationCaptionTooDeeplyNested"
                        }) : i ? (0, o.jsx)(n(109939).sA, {
                            defaultMessage: "This template is within another template that repeats every {immediateAncestorRecurrenceType}.",
                            id: "database.templatePickerItem.actionMenu.nestedTemplateExplanationCaptionNestedInTemplate",
                            values: {
                                immediateAncestorRecurrenceType: i
                            }
                        }) : void 0
                    })(t), [t])),
                    R = (0, n(682985).K8)(() => null == T ? void 0 : T.isReady(), [T]),
                    N = (0, a.useCallback)(e => {
                        if (!I || !(null != A && A.isDefined())) return;
                        let t = I.getSpaceId(),
                            i = null != s && s.id ? {
                                template_page_id: null == s ? void 0 : s.id
                            } : "empty";
                        n(647095).ui({
                            showCancel: !0,
                            keepFocus: !1,
                            message: (0, o.jsx)(n(109939).sA, {
                                id: "database.collectionTemplatePickerItem.setAsDefaultDialog.message",
                                defaultMessage: "<span>Use “{pageName}” as default template when creating new pages?</span>",
                                values: {
                                    span: e => (0, o.jsx)("span", {
                                        children: e
                                    }),
                                    pageName: s ? (0, o.jsx)(n(627918).A, {
                                        store: s,
                                        style: m.style0
                                    }) : v.formatMessage(r.emptyPageTitle)
                                }
                            }),
                            items: [{
                                label: (0, o.jsx)(n(109939).sA, {
                                    id: "database.collectionTemplatePickerItem.setAsDefaultDialog.setCollection",
                                    defaultMessage: "For all views in “{databaseName}”",
                                    values: {
                                        databaseName: (0, o.jsx)(n(627918).A, {
                                            store: I,
                                            style: m.style0
                                        })
                                    }
                                }),
                                onAccept: () => {
                                    e.close(), (0, n(377796).createAndCommit)({
                                        environment: y,
                                        userAction: "CollectionTemplatePickerItem.handleSetAsDefault:collection",
                                        cellTarget: {
                                            spaceWithId: t
                                        },
                                        canUndo: !0,
                                        perform: e => {
                                            (0, n(715144).z)({
                                                stores: [I],
                                                update: {
                                                    collection_default_template: i
                                                },
                                                transaction: e
                                            }), (0, n(715144).z)({
                                                stores: [A],
                                                update: {
                                                    collection_view_default_template: i
                                                },
                                                transaction: e
                                            })
                                        }
                                    })
                                }
                            }, {
                                label: (0, o.jsx)(n(109939).sA, {
                                    id: "database.collectionTemplatePickerItem.setAsDefaultDialog.setCollectionView",
                                    defaultMessage: "Only on “{viewName}” view",
                                    values: {
                                        viewName: (0, o.jsx)(n(437188).A, {
                                            collectionViewName: A.getName(),
                                            collectionViewType: A.getType()
                                        })
                                    }
                                }),
                                onAccept: () => {
                                    e.close(), (0, n(377796).createAndCommit)({
                                        environment: y,
                                        userAction: "CollectionTemplatePickerItem.handleSetAsDefault:collectionView",
                                        cellTarget: {
                                            spaceWithId: t
                                        },
                                        canUndo: !0,
                                        perform: e => {
                                            (0, n(715144).z)({
                                                stores: [A],
                                                update: {
                                                    collection_view_default_template: i
                                                },
                                                transaction: e
                                            })
                                        }
                                    })
                                }
                            }]
                        })
                    }, [y, I, A, s, v]);
                if (!I) return null;
                let z = {
                    key: "section",
                    items: n(381453).oE([s && C && (!T || R) && !P && {
                        key: "repeatControl",
                        render: e => s && (0, o.jsx)(n(800345).q, { ...e,
                            recurrence: w,
                            onChange: async e => {
                                let {
                                    recurrenceActions: t
                                } = await n(800345).k.load();
                                e ? t.addRecurrence({
                                    environment: y,
                                    blockStore: s,
                                    recurrence: e
                                }) : t.deleteRecurrence({
                                    environment: y,
                                    blockStore: s
                                })
                            }
                        }),
                        action: () => {
                            var e;
                            return e = w, void(0, n(195857).DO_NOT_USE_trackLegacy)("recurrence_menu_open", {
                                isConfigured: void 0 !== e
                            })
                        }
                    }, u && !S && !d && {
                        key: "Set default",
                        render: e => (0, o.jsx)(n(860287).A, { ...e,
                            title: (0, o.jsx)(n(109939).sA, {
                                defaultMessage: "Set as default",
                                id: "database.collectionTemplatePickerItem.actionMenu.setAsDefault"
                            }),
                            svg: n(999129).M
                        }),
                        action: () => N(p)
                    }, s && {
                        key: "Edit",
                        render: e => (0, o.jsx)(n(860287).A, { ...e,
                            title: C ? (0, o.jsx)(n(109939).sA, {
                                defaultMessage: "Edit",
                                id: "database.templatePickerItem.actionMenu.edit"
                            }) : (0, o.jsx)(n(109939).sA, {
                                defaultMessage: "View",
                                id: "database.templatePickerItem.actionMenu.view"
                            }),
                            svg: C ? n(111481).M : n(152208).eyeIcon
                        }),
                        action: () => {
                            var e, t, n, i, a;
                            return e = y, t = c, n = s, i = g, a = b, void(n && (null == i || i(), h(n, e, a), t.reset(), l(e, {
                                template_action: "edit"
                            })))
                        }
                    }, s && !d && C && {
                        key: "Duplicate",
                        render: e => (0, o.jsx)(n(860287).A, { ...e,
                            title: (0, o.jsx)(n(109939).sA, {
                                defaultMessage: "Duplicate",
                                id: "database.templatePickerItem.actionMenu.duplicate"
                            }),
                            svg: n(703696).V
                        }),
                        action: e => k(e, y, I, c, s, g, b)
                    }, s && !d && C && {
                        key: "Delete",
                        render: e => (0, o.jsx)(n(860287).A, { ...e,
                            title: (0, o.jsx)(n(109939).sA, {
                                defaultMessage: "Delete",
                                id: "database.templatePickerItem.actionMenu.delete"
                            }),
                            svg: n(968411).trashIcon
                        }),
                        action: C ? () => x(y, I, s) : () => {}
                    }, (P || E) && {
                        key: "nestedTemplateExplanation",
                        render: e => (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(n(346268).c, {
                                size: 12
                            }), (0, o.jsx)(n(636518).Ay, { ...e,
                                style: m.style1,
                                titleStyle: m.nestingExplanationMenuItemTitle,
                                title: function(e) {
                                    let {
                                        cannotAddRecurrenceToTemplate: t
                                    } = e;
                                    return t && (0, o.jsx)(n(109939).sA, {
                                        defaultMessage: "This template can’t be repeated.",
                                        id: "database.templatePickerItem.actionMenu.nestedTemplateExplanationTitle"
                                    })
                                }({
                                    cannotAddRecurrenceToTemplate: P
                                }),
                                captionStyle: m.nestingExplanationMenuItemCaption,
                                caption: E
                            })]
                        }),
                        action: () => {}
                    }])
                };
                return i = n(986939).A.isMobile ? {
                    menuType: n(649476).gu.ActionSheet
                } : {
                    menuType: n(649476).gu.Popup,
                    width: 250
                }, (0, o.jsx)(n(747369).A, { ...i,
                    children: (0, o.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: [z]
                    })
                })
            }
            async function f(e, t) {
                if (!t) return;
                let i = t.getSpaceId(),
                    {
                        automationActions: a
                    } = await n(879267).QV.automations.load();
                (0, n(377796).createAndCommit)({
                    userAction: "CollectionTemplatePickerItem.setAutomationStatusToActive",
                    environment: e,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    canUndo: !0,
                    perform: n => a.enableAutomation({
                        automationStore: t,
                        environment: e,
                        transaction: n
                    })
                })
            }
            async function x(e, t, i) {
                if (!i) return;
                let {
                    accept: a
                } = await n(647095).Gh({
                    message: (0, o.jsx)(n(109939).sA, {
                        defaultMessage: "Delete this template?",
                        id: "database.confirmDialog.templatePickerItem.deleteMessage"
                    }),
                    acceptLabel: (0, o.jsx)(n(109939).sA, {
                        defaultMessage: "Delete",
                        id: "database.confirmDialog.templatePickerItem.deleteButton.label"
                    })
                });
                if (!a) return;
                let r = t.getSpaceId();
                (0, n(377796).createAndCommit)({
                    userAction: "CollectionTemplatePickerItem.handleDelete",
                    environment: e,
                    cellTarget: {
                        spaceWithId: r
                    },
                    canUndo: !0,
                    perform: e => n(845422).m0({
                        collectionStore: t,
                        templateStore: i,
                        transaction: e
                    })
                }), l(e, {
                    template_action: "delete"
                })
            }

            function h(e, t, i) {
                var a;
                let l = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                a = l ? (0, n(483227).Ay)({
                    store: l,
                    peekViewBlockId: e.id,
                    fullyQualified: !1,
                    pageVisitSource: n(254656).y8.PeekOpen
                }) : (0, n(483227).Ay)({
                    store: e,
                    fullyQualified: !1,
                    pageVisitSource: n(254656).y8.LinkInPage
                }), i ? i(a) : (0, n(79266).navigate)({
                    environment: t,
                    url: a
                })
            }
            async function k(e, t, i, a, o, r, s) {
                if (!o) return;
                null == r || r();
                let c = i.getSpaceId(),
                    {
                        recurrenceActions: d
                    } = await n(800345).k.load(),
                    {
                        performResult: u
                    } = (0, n(377796).createAndCommit)({
                        userAction: "CollectionTemplatePickerItem.duplicatedStore",
                        environment: t,
                        cellTarget: {
                            spaceWithId: c
                        },
                        canUndo: !0,
                        perform: a => {
                            let l = n(845422).oZ({
                                environment: t,
                                event: e.event,
                                collectionStore: i,
                                templateStore: o,
                                transaction: a
                            });
                            if (o.getAutomationId()) {
                                let e = o.getAutomationStore(),
                                    n = null == e ? void 0 : e.getRecurrence();
                                e && null != e && e.isActive() && n && d.createRecurrenceInner({
                                    transaction: a,
                                    environment: t,
                                    blockStore: l,
                                    recurrence: n
                                })
                            }
                            return l
                        }
                    });
                u && h(u, t, s), a.reset(), l(t, {
                    template_action: "duplicate"
                })
            }
        },
        800345: (e, t, n) => {
            n.d(t, {
                k: () => i,
                q: () => a
            });
            let i = new(n(815048)).O2("recurrence", async () => {
                    let [{
                        addRecurrence: e,
                        deleteRecurrence: t,
                        createRecurrenceInner: i
                    }, {
                        TemplateRecurrenceConfigMenu: a
                    }] = await Promise.all([Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(40537), n.e(23519), n.e(30532), n.e(69684), n.e(23644), n.e(98608), n.e(29021)]).then(n.bind(n, 167186)), Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(40537), n.e(23519), n.e(30532), n.e(69684), n.e(23644), n.e(98608), n.e(29021)]).then(n.bind(n, 825778))]);
                    return {
                        recurrenceActions: {
                            addRecurrence: e,
                            deleteRecurrence: t,
                            createRecurrenceInner: i
                        },
                        TemplateRecurrenceConfigMenu: a
                    }
                }),
                a = (0, n(815048).jQ)(i, e => e.TemplateRecurrenceConfigMenu)
        },
        971375: (e, t, n) => {
            n.d(t, {
                o: () => l,
                x: () => a
            }), n(296540);
            var i = n(474848);

            function a(e) {
                let {
                    variant: t,
                    imgSource: a,
                    tintColor: o,
                    faceStyle: r,
                    shadowVariant: s = "strong",
                    style: c,
                    ...d
                } = e, u = (0, n(960253).I)(() => {
                    let e = (0, n(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: n(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === s && {
                                boxShadow: e >= 90 ? n(632079).Tj.shadowMDThickerOutline : n(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === s && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? n(632079).Tj.shadowSMThickerOutline : n(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...c
                        }
                    }
                }, [t, s, c]);
                return (0, i.jsx)("div", { ...d,
                    children: (0, i.jsx)("div", {
                        style: u.faceImgWrap,
                        children: (0, i.jsx)(l, {
                            imgSource: a,
                            variant: t,
                            tintColor: o,
                            style: r
                        })
                    })
                })
            }

            function l(e) {
                let {
                    imgSource: t,
                    variant: a,
                    tintColor: l,
                    style: o,
                    alt: r,
                    ...s
                } = e, c = (0, n(445283).N)(a), d = t ? ? n(200424), u = r ? ? "Notion AI face", p = (0, n(960253).I)(() => ({
                    faceImg: {
                        height: c,
                        width: c,
                        transform: "scaleX(var(--direction, 1))",
                        ...o
                    },
                    tintedFace: {
                        height: c,
                        width: c,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: l,
                        WebkitMaskImage: `url(${d})`,
                        maskImage: `url(${d})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...o
                    }
                }), [c, o, l, d]);
                return void 0 !== l ? (0, i.jsx)("div", {
                    style: p.tintedFace,
                    role: "img",
                    "aria-label": u
                }) : (0, i.jsx)("img", { ...s,
                    style: p.faceImg,
                    src: d,
                    alt: u
                })
            }
        }
    }
]);