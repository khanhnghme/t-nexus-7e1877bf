"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [44724], {
        127322: (e, t, n) => {
            n.d(t, {
                A: () => s
            }), n(581454);
            var o = n(296540),
                i = () => n(546605);
            class r extends i().Store {
                getInitialState() {
                    return {}
                }
            }
            var l = n(474848);
            let s = o.forwardRef(function({
                isMenuItem: e,
                style: t,
                labelStyle: i,
                alignmentToOrigin: s,
                renderMenuSections: d,
                label: u,
                selectedTitle: h,
                focused: p,
                disabled: f,
                innerButtonStyle: m,
                buttonPopupStore: g,
                buttonVariant: y,
                buttonProps: x,
                menuWidth: b,
                menuMaxHeight: j,
                menuTitle: S,
                menuShowDone: v
            }, k) {
                let w = (0, n(682985).uB)(void 0, r),
                    T = (0, n(682985).uB)(g, n(510969).A),
                    A = (0, n(960253).I)(() => ({
                        wrapper: {
                            alignItems: "center",
                            display: "flex",
                            ...t
                        },
                        label: {
                            color: n(632079).Tj.text.tertiary,
                            fontSize: 14,
                            marginInlineEnd: "auto",
                            ...i
                        }
                    }), [i, t]);
                return ((0, o.useImperativeHandle)(k, () => ({
                    closeMenu: () => {
                        T.setState({ ...T.state,
                            open: !1
                        })
                    }
                }), [T]), e) ? (0, l.jsx)(c, {
                    alignmentToOrigin: s,
                    isMenuItem: e,
                    renderMenuSections: d,
                    buttonPopupStore: T,
                    selectButtonStore: w,
                    menuWidth: b,
                    menuMaxHeight: j,
                    menuTitle: S,
                    menuShowDone: v,
                    children: n => (0, l.jsx)(a, {
                        events: n,
                        style: t,
                        isMenuItem: e,
                        label: u,
                        selectedTitle: h,
                        focused: p,
                        disabled: f
                    })
                }) : (0, l.jsxs)("div", {
                    style: A.wrapper,
                    children: [u ? (0, l.jsx)("div", {
                        style: A.label,
                        children: u
                    }) : void 0, (0, l.jsx)(c, {
                        alignmentToOrigin: s,
                        isMenuItem: e,
                        renderMenuSections: d,
                        buttonPopupStore: T,
                        selectButtonStore: w,
                        menuWidth: b,
                        menuMaxHeight: j,
                        menuTitle: S,
                        menuShowDone: v,
                        children: e => {
                            if (y) {
                                let t = (0, n(586880).x)(y);
                                return (0, l.jsx)(t, {
                                    disabled: f,
                                    style: m,
                                    iconTrailing: {
                                        icon: n(595453).arrowChevronSingleDownSmallIcon,
                                        size: "xs",
                                        colorVariant: f ? "disabled" : "secondary"
                                    },
                                    ...x,
                                    ...e,
                                    children: h
                                })
                            }
                            return (0, l.jsx)(n(988022).p, {
                                disabled: f,
                                disabledFeedback: !0,
                                style: {
                                    marginInlineEnd: -6,
                                    ...m
                                },
                                iconTrailing: {
                                    icon: n(595453).arrowChevronSingleDownSmallIcon,
                                    size: "xs",
                                    colorVariant: f ? "disabled" : "secondary"
                                },
                                ...e,
                                children: h
                            })
                        }
                    })]
                })
            });

            function a({
                events: e,
                style: t,
                isMenuItem: o,
                label: i,
                selectedTitle: r,
                focused: s,
                disabled: c
            }) {
                return o ? (0, l.jsx)(n(338798)._, { ...e,
                    focused: !!s,
                    disabled: c,
                    style: t,
                    ...i ? {
                        title: i,
                        right: r
                    } : {
                        title: r
                    }
                }) : null
            }

            function c({
                children: e,
                alignmentToOrigin: t,
                isMenuItem: o,
                renderMenuSections: i,
                buttonPopupStore: r,
                selectButtonStore: s,
                menuWidth: a,
                menuMaxHeight: d,
                menuTitle: u,
                menuShowDone: h
            }) {
                let p = (0, n(682985).K8)(() => s.state.selectedKey, [s]);
                return (0, l.jsx)(n(656252).A, {
                    popupType: n(986939).A.isMobile ? n(656252).z.BottomSheet : n(656252).z.Popup,
                    buttonPopupStore: r,
                    alignmentToOrigin: void 0 !== t ? t : "end",
                    placementToOrigin: o ? "right" : "bottom",
                    originGap: o ? void 0 : 4,
                    content: e => {
                        let {
                            focusedIndex: t,
                            menuSections: o
                        } = function(e) {
                            let t, {
                                    parent: n,
                                    renderMenuSections: o,
                                    selectButtonStore: i,
                                    selectedKey: r
                                } = e,
                                l = 0;
                            return {
                                menuSections: o(n).map(e => ({ ...e,
                                    items: e.items.map(e => (r && e.key === r && (t = l), l++, { ...e,
                                        action: t => {
                                            var n;
                                            e.action(t), n = e.key, i.setState({
                                                selectedKey: n
                                            })
                                        }
                                    }))
                                })),
                                focusedIndex: t
                            }
                        }({
                            parent: e,
                            renderMenuSections: i,
                            selectButtonStore: s,
                            selectedKey: p
                        }), r = (0, l.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            initialFocus: t,
                            sections: o
                        });
                        return n(986939).A.isMobile ? (0, l.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Modal,
                            title: u,
                            right: h ? (0, l.jsx)(n(109939).sA, {
                                defaultMessage: "Done",
                                id: "selectButton.mobileModal.done.label"
                            }) : void 0,
                            onClickRight: h ? e.close : void 0,
                            children: r
                        }) : (0, l.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Popup,
                            width: a,
                            maxHeight: d,
                            children: r
                        })
                    },
                    children: e
                })
            }
        },
        300921: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowUpDownIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.24 3.26 15.53 13.47",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M14.075 3.45a.625.625 0 0 0-.884 0l-3.497 3.5a.625.625 0 0 0 .883.884l2.431-2.431v10.705a.625.625 0 0 0 1.25 0V5.402l2.431 2.43a.625.625 0 1 0 .884-.883zM2.427 12.167a.625.625 0 0 1 .884 0l2.43 2.431V3.893a.625.625 0 0 1 1.25 0v10.705l2.431-2.43a.625.625 0 0 1 .884.883L6.81 16.55a.625.625 0 0 1-.884 0l-3.498-3.498a.625.625 0 0 1 0-.884"
                    })
                },
                i = (0, n(104509).wt)("arrowUpDown", o, "default")
        },
        310324: (e, t, n) => {
            n.d(t, {
                Ay: () => p,
                KF: () => h,
                LG: () => s,
                Zf: () => c,
                yD: () => a
            });
            var o = n(296540),
                i = n(474848);
            let r = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                l = o.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: l,
                    preventCaptureSpacebarWhenEmpty: s,
                    ...a
                }, c) {
                    let {
                        left: d,
                        right: u,
                        inputLeft: h,
                        inputRight: p,
                        inputRightStyle: f,
                        disableInput: m,
                        inputOuterStyle: y,
                        rightMobileEditLabel: b,
                        mobileKeyboardOnDismiss: j,
                        style: S,
                        value: v,
                        onChange: k,
                        autosize: w,
                        autosizeMinHeight: T,
                        autosizeMaxHeight: A,
                        customElementAttributes: C,
                        disabled: B,
                        format: I,
                        id: M,
                        placeholder: D,
                        type: R,
                        autoFocus: P,
                        focus: W,
                        focusInitial: z,
                        focusAfterAnimation: E,
                        forceShowClearButton: L,
                        ignoreKeyboardMode: _,
                        inputElementAttributes: O,
                        inputStyle: V,
                        isRightLastElementOfInput: H,
                        maxlength: F,
                        min: K,
                        max: U,
                        selectAll: $,
                        showClearButton: G,
                        suppressFocusRing: N,
                        textarea: q,
                        textareaSubmitOnEnter: Q,
                        onBlur: Y,
                        onCancel: J,
                        onClearButtonClick: X,
                        onClick: Z,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: en,
                        ...eo
                    } = a, [ei, er] = (0, o.useState)(() => !!(W || z));
                    (0, o.useEffect)(() => {
                        void 0 !== W && er(W)
                    }, [W]);
                    let el = e ? void 0 : n(763230).D_,
                        es = !t || v.length > 0 ? n(763230).D_ : void 0,
                        ea = l ? void 0 : n(763230).D_,
                        ec = !s || v.length > 0 ? n(763230).D_ : void 0,
                        ed = (0, n(649476).Tf)(),
                        eu = (0, o.useContext)(n(649476).xu),
                        eh = (0, o.useRef)(null),
                        ep = {
                            value: v,
                            onChange: k,
                            autosize: w,
                            autosizeMinHeight: T,
                            autosizeMaxHeight: A,
                            customElementAttributes: C,
                            disabled: B,
                            format: I,
                            id: M,
                            placeholder: D,
                            type: R,
                            autoFocus: P,
                            focus: W,
                            focusInitial: z,
                            focusAfterAnimation: E,
                            forceShowClearButton: L,
                            ignoreKeyboardMode: _,
                            inputElementAttributes: O,
                            inputStyle: V,
                            isRightLastElementOfInput: H,
                            maxlength: F,
                            min: K,
                            max: U,
                            selectAll: $,
                            showClearButton: G,
                            suppressFocusRing: N,
                            textarea: q,
                            textareaSubmitOnEnter: Q,
                            onBlur: Y,
                            onCancel: J,
                            onClearButtonClick: X,
                            onClick: Z,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: en
                        };
                    return (0, i.jsx)(n(369064).N, {
                        debugName: "InputMenuItem",
                        capture: !0,
                        onUntab: n(763230).D_,
                        onTab: n(763230).D_,
                        onSelectAll: n(763230).D_,
                        onRedo: n(763230).D_,
                        onUndo: n(763230).D_,
                        onToggleBold: n(763230).D_,
                        onToggleItalics: n(763230).D_,
                        onToggleCode: n(763230).D_,
                        onCut: ea,
                        onCopy: ea,
                        onPaste: ea,
                        onKeypress: n(763230).D_,
                        onLeft: el,
                        onRight: el,
                        onDelete: es,
                        onBackspace: es,
                        onSpace: ec,
                        children: n(986939).A.isMobile ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(n(636518).Ay, {
                                ref: c,
                                ...eo,
                                itemMarginLeft: ed ? 8 : void 0,
                                style: S,
                                title: (0, i.jsx)(x, {
                                    ref: eh,
                                    left: d,
                                    right: u,
                                    inputLeft: h,
                                    inputRight: p,
                                    inputRightStyle: f,
                                    disableInput: m,
                                    inputOuterStyle: y,
                                    rightMobileEditLabel: b,
                                    isFocused: ei,
                                    setIsFocused: er,
                                    ...ep
                                })
                            }), (0, i.jsx)(n(368678).P, {
                                show: ei && eu.menuType !== n(649476).gu.ActionSheet,
                                onDismiss: j,
                                inputRef: eh
                            })]
                        }) : (0, i.jsx)(n(636518).Ay, {
                            ref: c,
                            ...eo,
                            left: d,
                            right: u,
                            isTokenTitle: !0,
                            title: (0, i.jsx)(g, {
                                ref: eh,
                                disableInput: m,
                                inputOuterStyle: y,
                                inputRight: p,
                                inputRightStyle: f,
                                inputLeft: h,
                                ...ep
                            }),
                            style: { ...r,
                                ...S
                            }
                        })
                    })
                }),
                s = 30,
                a = 28;

            function c(e) {
                let {
                    icon: t
                } = e;
                return t({
                    fill: n(632079).Tj.icon.secondary,
                    width: n(104509).Ev.sm,
                    height: n(104509).Ev.sm,
                    flexGrow: 0,
                    flexShrink: 0
                })
            }
            let d = {
                    outlineButtonHovered: {
                        background: n(632079).Tj.background.secondary
                    }
                },
                u = (0, n(64960)._S)({
                    color: n(632079).Tj.background.primary
                });

            function h(e) {
                let t = (0, n(533992).WS)(),
                    o = (0, n(960253).I)(() => ({
                        outlineButton: { ...(0, n(64960).qq)({
                                shape: "default",
                                size: "sm",
                                hasIconOnly: !0,
                                isButtonGapEnabled: !0
                            }),
                            fontWeight: n(699422).Wy.medium,
                            lineHeight: 1.2,
                            border: `1px solid ${n(632079).Tj.border.primaryTranslucent}`,
                            background: e.hasBackground ? n(632079).Tj.background.primary : void 0
                        },
                        outlineButtonPressed: {
                            background: u.pressed
                        }
                    }), [e.hasBackground]);
                return (0, i.jsx)(n(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...o.outlineButton,
                        ...e.style,
                        height: t ? s : a,
                        width: t ? s : a
                    },
                    hoveredStyle: d.outlineButtonHovered,
                    pressedStyle: o.outlineButtonPressed
                })
            }
            let p = l,
                f = {
                    style0: {
                        color: n(632079).Tj.text.secondary
                    }
                };

            function m({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let r = (0, n(533992).v3)(),
                    l = (0, o.useCallback)(e => {
                        e.preventDefault();
                        let o = t.current;
                        o && (0, n(862215).G)(r, o)
                    }, [r, t]);
                return (0, i.jsx)(n(64960).Ay, {
                    onClick: l,
                    style: f.style0,
                    children: e
                })
            }
            let g = o.forwardRef(function(e, t) {
                    let {
                        disabled: o,
                        disableInput: r,
                        inputOuterStyle: l,
                        inputRight: s,
                        inputRightStyle: a,
                        inputLeft: c,
                        min: d,
                        textarea: u,
                        ...h
                    } = e;
                    return (0, i.jsx)(n(36481).p, { ...h,
                        ref: t,
                        disabled: o || r,
                        style: {
                            height: u ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...l
                        },
                        left: c,
                        right: s,
                        rightStyle: a,
                        min: d,
                        textarea: u
                    })
                }),
                y = {
                    fontSize: 16
                },
                x = o.forwardRef(function(e, t) {
                    let {
                        left: r,
                        right: l,
                        inputLeft: s,
                        inputRight: a,
                        inputRightStyle: c,
                        disableInput: d,
                        inputOuterStyle: u,
                        rightMobileEditLabel: h,
                        isFocused: p,
                        setIsFocused: f,
                        disabled: g,
                        showClearButton: x,
                        onBlur: b,
                        onFocus: j,
                        ...S
                    } = e, v = (0, o.useCallback)(e => {
                        f(!1), b && b(e)
                    }, [b, f]), k = (0, o.useCallback)(e => {
                        f(!0), j && j(e)
                    }, [j, f]), w = (0, o.useRef)(null), T = (0, n(421573).A)(w, t), A = h && !p ? (0, i.jsx)(m, {
                        rightMobileEditLabel: h,
                        inputRef: w
                    }) : null;
                    return (0, i.jsx)(n(36481).p, { ...S,
                        ref: T,
                        format: "transparent",
                        style: { ...y,
                            ...u
                        },
                        onFocus: k,
                        onBlur: v,
                        showClearButton: !1 !== x,
                        disabled: g || d,
                        left: s || r,
                        right: A || a || l,
                        rightStyle: c
                    })
                })
        },
        338798: (e, t, n) => {
            n.d(t, {
                _: () => s
            });
            var o = n(296540),
                i = n(474848);
            let r = {
                    krdFHd: "x1i5p2am",
                    kfmiAY: "x1whfx0g",
                    kT0f0o: "xr2y4jy",
                    kVL7Gh: "x1ihp6rs",
                    $$css: !0
                },
                l = {
                    kzqmXN: "xh8yej3",
                    $$css: !0
                };

            function s(e) {
                let t = (0, o.useMemo)(() => [l, !n(986939).A.isMobile && r, e.buttonStyle], [e.buttonStyle]);
                return (0, i.jsx)(n(64960).Ay, {
                    onClick: e.onClick,
                    hovered: e.focused,
                    disabled: e.disabled,
                    style: t,
                    hoveredStyle: e.hoveredButtonStyle,
                    pressedStyle: e.pressedButtonStyle,
                    children: (0, i.jsx)(n(636518).Ay, { ...e,
                        dontShrinkTitle: !0,
                        right: (0, i.jsxs)("div", { ...{
                                className: "x78zum5 x6s0dn4 xuxw1ft x1r0jzty x17zd0t2"
                            },
                            children: [e.right ? (0, i.jsx)(n(324489).V, {
                                isSecondaryColor: !0,
                                children: e.right
                            }) : void 0, n(986939).A.isMobile ? void 0 : (0, i.jsx)("div", { ...{
                                    0: {
                                        className: "x2lah0s x1jaox4c"
                                    },
                                    1: {
                                        className: "x2lah0s x1jaox4c x182y5vf"
                                    }
                                }["right" === e.chevronType | 0],
                                children: (0, i.jsx)(n(16275).I, {
                                    icon: n(595453).arrowChevronSingleDownSmallIcon,
                                    size: "xs",
                                    colorVariant: "tertiary"
                                })
                            })]
                        })
                    })
                })
            }
        },
        368678: (e, t, n) => {
            n.d(t, {
                P: () => l
            });
            var o = n(296540),
                i = n(474848);
            let r = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: n(632079).Tj.blue.text.accentPrimary,
                    fontWeight: n(699422).Wy.semibold
                }
            };

            function l(e) {
                let {
                    onDismiss: t,
                    inputRef: l
                } = e, s = (0, n(533992).Y0)(), a = (0, o.useRef)(null), c = s.isMobileNative && s.isIOS, d = c && e.show;
                (0, n(336494).b)(n(651748).A, () => ({
                    getNode: () => a.current,
                    isShown: () => d
                }), [d]);
                let u = (0, n(571354).n)(),
                    h = (0, o.useCallback)(() => {
                        var e;
                        null == l || null == (e = l.current) || e.focus(), t && t();
                        let n = document.activeElement;
                        n instanceof HTMLElement && n.blur()
                    }, [l, t]);
                if (!c) return null;
                let p = d ? -(n(247800).j + u) : 0;
                return (0, i.jsx)(n(114596).O, {
                    open: !0,
                    children: (0, i.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: n(247800).j,
                            display: d ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: n(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${p}px)`,
                            transition: d ? "ease-out" : "ease-in",
                            boxShadow: d ? `
								0 -1px 0 ${n(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: a,
                        children: (0, i.jsx)(n(64960).Ay, {
                            style: r.style0,
                            onTouchEnd: () => {
                                h()
                            },
                            children: (0, i.jsx)(n(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        394327: (e, t, n) => {
            n.d(t, {
                Ji: () => a,
                bd: () => m,
                f0: () => h,
                mf: () => p,
                s7: () => u
            }), n(944114), n(296540);
            var o = () => n(51831),
                i = () => n(95582),
                r = () => n(844565),
                l = () => n(722371),
                s = n(474848);
            let a = 12,
                c = {
                    marginInlineEnd: 8
                },
                d = {
                    fontSize: 12,
                    lineHeight: 1.3,
                    opacity: .5
                };

            function u({
                title: e,
                byline: t,
                icon: o,
                iconSize: i,
                iconMargin: r,
                useThinTitle: l,
                useSecondaryColorTitle: a,
                containerStyles: p,
                summaryStyles: f,
                rightContent: m,
                badge: g
            }) {
                let y = h({
                    icon: o,
                    iconSize: i,
                    iconMargin: r,
                    useThinTitle: l,
                    containerStyles: p,
                    summaryStyles: f
                });
                return (0, s.jsxs)("div", {
                    style: y.container,
                    children: [o ? (0, s.jsx)("div", {
                        style: y.iconContainer,
                        children: o
                    }) : null, (0, s.jsxs)("div", {
                        style: y.summaryContainer,
                        children: [(0, s.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, s.jsx)(n(324489).V, {
                                style: y.name,
                                isSecondaryColor: a,
                                showTooltipWhenTruncated: !0,
                                children: e
                            }), g ? (0, s.jsx)("div", {
                                style: c,
                                children: g
                            }) : null]
                        }), t ? (0, s.jsx)(n(324489).V, {
                            style: d,
                            children: t
                        }) : null]
                    }), m]
                })
            }

            function h(e) {
                let {
                    icon: t,
                    iconSize: o,
                    iconMargin: i,
                    useThinTitle: r,
                    containerStyles: l,
                    summaryStyles: s
                } = e, c = i ? ? a, d = t ? o ? ? 20 : 0;
                return (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        padding: "8px 0",
                        width: "100%",
                        ...l
                    },
                    summaryContainer: {
                        width: `calc(100% - ${d}px)`,
                        ...s
                    },
                    iconContainer: {
                        height: d,
                        width: d,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexBasis: d,
                        marginInlineEnd: c,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 6
                    },
                    name: {
                        fontSize: 14,
                        fontWeight: r ? 400 : 500
                    }
                }), [d, c, r, l, s])
            }

            function p({
                titleStyles: e,
                includeByline: t,
                bylineStyles: o,
                includeIcon: i,
                iconStyles: r,
                containerStyles: l
            }) {
                let a = (0, n(960253).I)(() => ({
                    container: {
                        height: 53,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        padding: "8px 0",
                        width: "100%",
                        gap: 8,
                        ...l
                    },
                    icon: {
                        borderRadius: 4,
                        height: 24,
                        width: 24,
                        marginInlineStart: -2,
                        ...r
                    },
                    title: {
                        borderRadius: 4,
                        height: 14,
                        width: "80%",
                        ...e
                    },
                    byline: {
                        borderRadius: 4,
                        height: 12,
                        width: "60%",
                        ...o
                    }
                }), [l, e, o, r]);
                return (0, s.jsxs)("div", {
                    style: a.container,
                    children: [i ? (0, s.jsx)(n(795830).P, {
                        style: a.icon
                    }) : null, (0, s.jsxs)(n(4458).VP, {
                        justifyContent: "center",
                        alignItems: "flex-start",
                        width: "calc(100% - 32px)",
                        gap: 4,
                        children: [(0, s.jsx)(n(795830).P, {
                            style: a.title
                        }), t ? (0, s.jsx)(n(795830).P, {
                            style: a.byline
                        }) : null]
                    })]
                })
            }
            let f = {
                width: 312
            };

            function m(e) {
                let t = (0, n(109939).tz)(),
                    a = (0, n(682985).uB)(void 0, n(510969).A),
                    c = [],
                    d = [];
                for (let t of e.items)
                    if ("divider" === t.type) {
                        let t = d.length > 0,
                            n = {
                                key: `actions-${d.length}`,
                                render: n => (0, s.jsx)(r().A, {
                                    title: e.title,
                                    topBorder: t,
                                    ...n
                                }),
                                items: c
                            };
                        d.push(n), c = []
                    } else if ("action" === t.type) {
                    let e = {
                        key: t.key,
                        render: e => (0, s.jsx)(o().m, {
                            textWrap: !0,
                            content: () => t.tooltipTitle,
                            disableTooltip: t.tooltipDisabled ? ? !0,
                            placement: "right",
                            children: n => (0, s.jsx)(i().A, { ...e,
                                ...n,
                                isRedOnHover: t.isDestructive,
                                shouldWrapCaption: !0,
                                icon: t.icon,
                                title: t.title,
                                caption: t.caption,
                                disabled: t.disabled,
                                disabledFeedback: t.disabled
                            })
                        }),
                        action: () => {
                            t.action(), a.setState({ ...a.state,
                                open: !1
                            })
                        }
                    };
                    c.push(e)
                } else(0, l().HB)(t);
                let u = {
                    key: `actions-${d.length}`,
                    render: t => (0, s.jsx)(r().A, {
                        title: e.title,
                        topBorder: d.length > 0,
                        ...t
                    }),
                    items: c
                };
                return d.push(u), (0, s.jsx)(n(656252).A, {
                    stopClickPropagation: !0,
                    popupType: n(182718).nl.Popup,
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    style: f,
                    content: () => (0, s.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        width: 312,
                        children: (0, s.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            initialFocus: void 0,
                            sections: d
                        })
                    }),
                    onClose: n(763230).lQ,
                    buttonPopupStore: a,
                    children: e => (0, s.jsx)(n(374533).A, {
                        ariaLabel: t.formatMessage({
                            id: "iconCellActionMenu.iconButton.ariaLabel",
                            defaultMessage: "More actions"
                        }),
                        icon: n(361226).ellipsisSmallIcon,
                        ...e
                    })
                })
            }
        },
        543588: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var o = n(474848);
            let i = function(e) {
                let t = {
                        marginBottom: 4
                    },
                    {
                        title: i,
                        marginAfter: r,
                        desktopStyle: l,
                        desktopTitleStyle: s,
                        ...a
                    } = e,
                    c = (r || l) && { ...r && {
                            marginBottom: 16
                        },
                        ...l
                    },
                    d = s ? { ...t,
                        ...s
                    } : t;
                return (0, o.jsx)(n(844565).A, {
                    disableDesktopPadding: !0,
                    enableActionSheetTitle: !0,
                    desktopStyle: c,
                    desktopTitleStyle: d,
                    shouldShowBottomDivider: !1,
                    title: i,
                    ...a
                })
            }
        },
        654299: (e, t, n) => {
            n.d(t, {
                Vd: () => m,
                np: () => c,
                z_: () => f
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520);
            var o = n(296540),
                i = () => n(381453),
                r = n(474848);
            let l = ["control+t", "control+shift+n", "control+shift+t", "control+w", "control+shift+w", "control+r", "control+shift+r", "control+shift+i", "control+\\", "control+=", "control+-", "control+0", "control+[", "control+]", "control+shift+tab", "control+tab", "control+1", "control+2", "control+3", "control+4", "control+5", "control+6", "control+7", "control+8", "control+9"],
                s = ["command+,", "command+t", "command+shift+n", "command+shift+t", "command+w", "command+shift+w", "command+r", "command+shift+r", "alt+command+i", "command+\\", "command+=", "command+-", "command+0", "command+[", "command+]", "control+shift+tab", "control+tab", "command+option+left", "command+option+right", "command+shift+[", "command+shift+]", "command+1", "command+2", "command+3", "command+4", "command+5", "command+6", "command+7", "command+8", "command+9"],
                a = {
                    takenShortcutError: {
                        color: n(632079).Tj.palette.red["500"],
                        fontSize: 12
                    },
                    style0: {
                        textAlign: "center",
                        caretColor: "transparent"
                    }
                };

            function c(e) {
                function t() {
                    return e.shortcut ? f(e.shortcut, e.isMac) : void 0
                }
                let {
                    isMac: c,
                    isWindows: g
                } = (0, n(533992).Y0)(), y = (0, n(682985).K8)(() => n(62276).getKeyboardShortcuts(), []), [x, b] = (0, o.useState)(t), [j, S] = (0, o.useState)(new Set([])), [v, k] = (0, o.useState)(), [w, T] = (0, o.useState)(!1), A = (0, o.useRef)(!1), C = (0, o.useRef)(!1), B = (0, o.useRef)(!1);

                function I() {
                    if (x && B.current)
                        if (x.key)
                            if (c ? x.control || x.option || x.command : x.control || x.option)
                                if (function(e, t, o) {
                                        for (let r of Object.values((0, n(840203).a)(e)))
                                            for (let e of r)
                                                if (i().n4(f(e, o), t)) return !0;
                                        for (let e of o ? s : l)
                                            if (i().n4(f(e, o), t)) return !0;
                                        return !1
                                    }(y, x, c) || function(e, t, n) {
                                        for (let o of t)
                                            if (i().n4(f(o, n), e)) return !0;
                                        return !1
                                    }(x, e.conflictingShortcuts || [], c)) {
                                    b(t());
                                    let e = m(x, c);
                                    k((0, r.jsx)(n(109939).sA, {
                                        id: "desktopQuickSearch.error.shortcutAlreadyUsed",
                                        defaultMessage: "{reservedShortcut} is already used",
                                        values: {
                                            reservedShortcut: e
                                        }
                                    }))
                                } else {
                                    var o, a;
                                    let t, n = (o = x, a = c, t = [], o.shift && t.push("shift"), o.control && (a ? t.push("control") : t.push("ctrl")), o.option && (a ? t.push("option") : t.push("alt")), o.command && (a ? t.push("command") : t.push("meta")), o.enter && t.push("enter"), o.key && t.push(o.key.toLowerCase()), t.join("+"));
                                    e.onChange(n)
                                }
                    else b(t()), c ? k((0, r.jsx)(n(109939).sA, {
                        id: "desktopQuickSearch.error.macModifierRequired",
                        defaultMessage: "Use one of Option, Control, or Command for global keyboard shortcuts"
                    })) : k((0, r.jsx)(n(109939).sA, {
                        id: "desktopQuickSearch.error.windowsModifierRequired",
                        defaultMessage: "Use one of Control or Alt for global keyboard shortcuts"
                    }));
                    else b(void 0);
                    else B.current || b(t());
                    A.current = !0, T(!1), B.current = !1
                }
                return (0, r.jsxs)(n(4458).VP, {
                    gap: 10,
                    alignItems: "flex-end",
                    children: [(0, r.jsx)(n(36481).p, {
                        onKeyDown: function(e) {
                            C.current = !0, "Escape" === e.key ? e.currentTarget.blur() : "Tab" !== e.key && (e.preventDefault(), e.stopPropagation(), function(e) {
                                if (g && e.startsWith("Meta")) return;
                                let t = new Set([...j, e]),
                                    n = function(e) {
                                        let t = {};
                                        for (let n of e) n.startsWith("Meta") ? t.command = !0 : n.startsWith(h) ? t.option = !0 : n.startsWith(u) ? t.shift = !0 : n.startsWith(p) ? t.control = !0 : n.startsWith("Return") ? t.enter = !0 : n.startsWith("Key") ? t.key = n.substring(3).toLowerCase() : n.startsWith("Digit") ? t.key = n.substring(5) : d[n] && (t.key = d[n]);
                                        return 0 === Object.values(t).filter(e => void 0 !== e).length ? void 0 : t
                                    }(t);
                                S(t), b(n), k(void 0), B.current = !0
                            }(e.code))
                        },
                        onKeyUp: function(e) {
                            C.current && function(e) {
                                let t = new Set([...j]);
                                if (t.delete(e), e.startsWith("Meta"))
                                    for (let e of t) e.startsWith(u) || e.startsWith(h) || e.startsWith(p) || t.delete(e);
                                S(t), 0 === t.size && I()
                            }(e.code)
                        },
                        onFocus: function(e) {
                            b(void 0), T(!0)
                        },
                        onBlur: function(e) {
                            A.current || I(), A.current = !1, C.current = !1, S(new Set), T(!1)
                        },
                        focus: w,
                        readOnly: !0,
                        inputStyle: a.style0,
                        value: x && m(x, c)
                    }), v ? (0, r.jsx)("div", {
                        style: a.takenShortcutError,
                        children: v
                    }) : void 0]
                })
            }
            let d = {
                    ArrowDown: "down",
                    ArrowLeft: "left",
                    ArrowRight: "right",
                    ArrowUp: "up",
                    Backquote: "`",
                    Backslash: "\\",
                    Backspace: "backspace",
                    BracketLeft: "[",
                    BracketRight: "]",
                    Comma: ",",
                    Delete: "delete",
                    Enter: "return",
                    Equal: "=",
                    Minus: "-",
                    Period: ".",
                    Quote: "'",
                    Semicolon: ";",
                    Slash: "/",
                    Space: "space"
                },
                u = "Shift",
                h = "Alt",
                p = "Control";

            function f(e, t) {
                let n = {};
                for (let o of e.split("+")) "command" === (o = o.toLowerCase()) || "meta" === o ? n.command = !0 : "option" === o || "alt" === o ? n.option = !0 : "shift" === o ? n.shift = !0 : "control" === o || "ctrl" === o ? n.control = !0 : "cmdorctrl" === o || "commandorcontrol" === o ? t ? n.command = !0 : n.control = !0 : "enter" === o || "return" === o ? n.enter = !0 : n.key = o;
                return n
            }

            function m(e, t) {
                let n = [];
                if (e.shift && (t ? n.push("shift") : n.push("Shift")), e.control && (t ? n.push("control") : n.push("Ctrl")), e.option && (t ? n.push("option") : n.push("Alt")), e.command && (t ? n.push("⌘") : n.push("Win")), e.enter && (t ? n.push("enter") : n.push("Return")), e.key) {
                    let t = 1 === e.key.length ? e.key.toUpperCase() : e.key;
                    n.push(t)
                }
                return n.join("+")
            }
        },
        862215: (e, t, n) => {
            n.d(t, {
                G: () => o
            });

            function o(e, t) {
                let {
                    device: n
                } = e;
                n.isAndroid && t.focus(), t.select()
            }
        }
    }
]);