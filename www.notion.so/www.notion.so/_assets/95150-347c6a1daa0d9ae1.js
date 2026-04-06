"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [59042, 95150], {
        58011: (e, t, i) => {
            i.d(t, {
                O: () => r
            });
            var n = i(296540),
                a = i(474848);
            let o = {
                buttonStyle: {
                    color: i(632079).Tj.red.text.accentPrimary,
                    fontSize: i(418676).vQ
                },
                style0: {
                    marginInlineStart: 0
                }
            };

            function r(e) {
                let t, {
                        verificationState: r,
                        onChange: l,
                        blockId: s,
                        entrypoint: d
                    } = e,
                    c = (0, i(533992).v3)(),
                    u = (0, i(109939).tz)();
                switch (r.type) {
                    case "none":
                        break;
                    case "verified":
                    case "expired":
                        t = u.formatMessage(i(855126).n.removeVerificationProperty);
                        break;
                    case "archived":
                        t = u.formatMessage(i(855126).n.removeArchivedStatus);
                        break;
                    default:
                        (0, i(722371).HB)(r)
                }
                let f = (0, n.useCallback)(() => {
                    if ("none" === r.type) return;
                    let e = (0, i(435137).Ep)(r);
                    (0, i(787690).u)(c, {
                        action: "remove",
                        verification_type: e,
                        verification_page_id: s
                    }), l({
                        value: void 0,
                        metadata: {
                            action: "remove",
                            verification_type: e,
                            entrypoint: d
                        }
                    })
                }, [c, l, d, s, r]);
                return "none" === r.type ? null : (0, a.jsx)(i(844565).A, {
                    topBorder: !0,
                    children: (0, a.jsx)(i(95582).A, {
                        focused: !1,
                        icon: (0, a.jsx)(i(16275).I, {
                            icon: i(25094).xMarkSmallIcon,
                            size: "xs",
                            style: o.style0
                        }),
                        title: t,
                        onClick: f,
                        style: o.buttonStyle
                    })
                })
            }
        },
        65068: (e, t, i) => {
            i.d(t, {
                Z: () => o
            }), i(296540);
            var n = i(474848);
            let a = {
                headerStyle: {
                    padding: i(986939).A.isMobile ? 10 : 7,
                    paddingInlineStart: i(986939).A.isMobile ? 20 : 7,
                    background: i(986939).A.isMobile ? i(632079).Tj.popoverBackground : i(632079).Tj.tokenInputMenuItemBackground,
                    display: "flex",
                    alignItems: "center",
                    borderBottom: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`
                }
            };

            function o({
                verificationState: e
            }) {
                return "none" === e.type ? null : (0, n.jsx)("div", {
                    style: a.headerStyle,
                    children: (0, n.jsx)(i(106142).r, {
                        verificationState: e,
                        fontSize: i(986939).A.isMobile ? i(699422).J.UIRegular.mobile : void 0
                    })
                })
            }
        },
        176349: (e, t, i) => {
            function n(e) {
                let {
                    blockStore: t,
                    update: n
                } = e, a = function(e) {
                    switch (e) {
                        case "add":
                            return "page_verification_enabled";
                        case "update":
                            return "page_verification_edited";
                        case "remove":
                            return "page_verification_disabled";
                        default:
                            (0, i(722371).HB)(e)
                    }
                }(n.metadata.action), o = t.id, r = t.getAssociatedCollectionId(), l = t.getSpaceId(), s = n.metadata.entrypoint, d = r ? "db" : "non_db";
                if (r) {
                    let e = t.getAssociatedCollectionStore();
                    null != e && e.isPageTreeCollection() && (d = "wiki")
                }
                switch (a) {
                    case "page_verification_enabled":
                    case "page_verification_edited":
                        (0, i(104310).u)({
                            event: {
                                eventName: a,
                                eventProperties: {
                                    entrypoint: s,
                                    page_type: d,
                                    verification_type: n.metadata.verification_type,
                                    page_id: o,
                                    collection_id: r,
                                    space_id: l,
                                    expiration: n.metadata.expiration ? ? void 0,
                                    expiration_date: n.metadata.expiration_date ? ? void 0
                                }
                            }
                        });
                        break;
                    case "page_verification_disabled":
                        (0, i(104310).u)({
                            event: {
                                eventName: a,
                                eventProperties: {
                                    entrypoint: s,
                                    page_type: d,
                                    verification_type: n.metadata.verification_type,
                                    page_id: o,
                                    collection_id: r,
                                    space_id: l
                                }
                            }
                        });
                        break;
                    default:
                        (0, i(722371).HB)(a)
                }
            }

            function a(e) {
                let {
                    blockStore: t,
                    entrypoint: n,
                    action: a
                } = e, o = t.id, r = t.getAssociatedCollectionId(), l = t.getSpaceId(), s = r ? "db" : "non_db";
                if (r) {
                    let e = t.getAssociatedCollectionStore();
                    null != e && e.isPageTreeCollection() && (s = "wiki")
                }
                let d = (0, i(843641).i1)(t),
                    c = "none" === d.type ? void 0 : (0, i(435137).Ep)(d);
                (0, i(104310).u)({
                    event: {
                        eventName: "page_verification_owner_edited",
                        eventProperties: {
                            entrypoint: n,
                            page_type: s,
                            action: a,
                            verification_type: c,
                            page_id: o,
                            collection_id: r,
                            space_id: l
                        }
                    }
                })
            }
            i.d(t, {
                q: () => n,
                y: () => a
            })
        },
        179917: (e, t, i) => {
            i.d(t, {
                o: () => o
            }), i(296540);
            var n = i(474848);
            let a = {
                backButton: {
                    width: 24,
                    height: 24
                },
                closeButton: {
                    position: "absolute",
                    insetInlineEnd: 0,
                    marginInlineEnd: 8,
                    borderRadius: "100%"
                },
                menuTitle: {
                    flexGrow: 1,
                    fontWeight: i(699422).Wy.semibold,
                    fontSize: i(418676).vQ
                }
            };

            function o(e) {
                let {
                    label: t,
                    onClickBackButton: o,
                    onClose: r,
                    width: l,
                    showBottomBorder: s
                } = e, d = (0, i(109939).tz)(), c = (0, i(960253).I)(() => ({
                    container: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        height: 40,
                        width: l ? ? 320,
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8,
                        borderBottom: s ? `1px solid ${i(632079).Tj.border.secondaryTranslucent}` : void 0
                    }
                }), [s, l]);
                return (0, n.jsxs)("div", {
                    style: c.container,
                    children: [(0, n.jsx)(i(374533).A, {
                        icon: i(374241).arrowStraightLeftSmallIcon,
                        ariaLabel: d.formatMessage({
                            id: "verificationMenuHeader.backButton.ariaLabel",
                            defaultMessage: "Back"
                        }),
                        onClick: () => o(),
                        style: a.backButton
                    }), (0, n.jsx)("div", {
                        style: a.menuTitle,
                        children: t
                    }), (0, n.jsx)(i(314566).A, {
                        onClose: () => r(),
                        style: a.closeButton
                    })]
                })
            }
        },
        310324: (e, t, i) => {
            i.d(t, {
                Ay: () => p,
                KF: () => f,
                LG: () => l,
                Zf: () => d,
                yD: () => s
            });
            var n = i(296540),
                a = i(474848);
            let o = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                r = n.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: r,
                    preventCaptureSpacebarWhenEmpty: l,
                    ...s
                }, d) {
                    let {
                        left: c,
                        right: u,
                        inputLeft: f,
                        inputRight: p,
                        inputRightStyle: v,
                        disableInput: g,
                        inputOuterStyle: h,
                        rightMobileEditLabel: m,
                        mobileKeyboardOnDismiss: b,
                        style: j,
                        value: M,
                        onChange: S,
                        autosize: T,
                        autosizeMinHeight: k,
                        autosizeMaxHeight: A,
                        customElementAttributes: C,
                        disabled: _,
                        format: B,
                        id: w,
                        placeholder: I,
                        type: R,
                        autoFocus: P,
                        focus: D,
                        focusInitial: O,
                        focusAfterAnimation: E,
                        forceShowClearButton: V,
                        ignoreKeyboardMode: H,
                        inputElementAttributes: L,
                        inputStyle: z,
                        isRightLastElementOfInput: F,
                        maxlength: N,
                        min: $,
                        max: W,
                        selectAll: U,
                        showClearButton: K,
                        suppressFocusRing: G,
                        textarea: Y,
                        textareaSubmitOnEnter: Q,
                        onBlur: Z,
                        onCancel: q,
                        onClearButtonClick: J,
                        onClick: X,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: ei,
                        ...en
                    } = s, [ea, eo] = (0, n.useState)(() => !!(D || O));
                    (0, n.useEffect)(() => {
                        void 0 !== D && eo(D)
                    }, [D]);
                    let er = e ? void 0 : i(763230).D_,
                        el = !t || M.length > 0 ? i(763230).D_ : void 0,
                        es = r ? void 0 : i(763230).D_,
                        ed = !l || M.length > 0 ? i(763230).D_ : void 0,
                        ec = (0, i(649476).Tf)(),
                        eu = (0, n.useContext)(i(649476).xu),
                        ef = (0, n.useRef)(null),
                        ep = {
                            value: M,
                            onChange: S,
                            autosize: T,
                            autosizeMinHeight: k,
                            autosizeMaxHeight: A,
                            customElementAttributes: C,
                            disabled: _,
                            format: B,
                            id: w,
                            placeholder: I,
                            type: R,
                            autoFocus: P,
                            focus: D,
                            focusInitial: O,
                            focusAfterAnimation: E,
                            forceShowClearButton: V,
                            ignoreKeyboardMode: H,
                            inputElementAttributes: L,
                            inputStyle: z,
                            isRightLastElementOfInput: F,
                            maxlength: N,
                            min: $,
                            max: W,
                            selectAll: U,
                            showClearButton: K,
                            suppressFocusRing: G,
                            textarea: Y,
                            textareaSubmitOnEnter: Q,
                            onBlur: Z,
                            onCancel: q,
                            onClearButtonClick: J,
                            onClick: X,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: ei
                        };
                    return (0, a.jsx)(i(369064).N, {
                        debugName: "InputMenuItem",
                        capture: !0,
                        onUntab: i(763230).D_,
                        onTab: i(763230).D_,
                        onSelectAll: i(763230).D_,
                        onRedo: i(763230).D_,
                        onUndo: i(763230).D_,
                        onToggleBold: i(763230).D_,
                        onToggleItalics: i(763230).D_,
                        onToggleCode: i(763230).D_,
                        onCut: es,
                        onCopy: es,
                        onPaste: es,
                        onKeypress: i(763230).D_,
                        onLeft: er,
                        onRight: er,
                        onDelete: el,
                        onBackspace: el,
                        onSpace: ed,
                        children: i(986939).A.isMobile ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i(636518).Ay, {
                                ref: d,
                                ...en,
                                itemMarginLeft: ec ? 8 : void 0,
                                style: j,
                                title: (0, a.jsx)(x, {
                                    ref: ef,
                                    left: c,
                                    right: u,
                                    inputLeft: f,
                                    inputRight: p,
                                    inputRightStyle: v,
                                    disableInput: g,
                                    inputOuterStyle: h,
                                    rightMobileEditLabel: m,
                                    isFocused: ea,
                                    setIsFocused: eo,
                                    ...ep
                                })
                            }), (0, a.jsx)(i(368678).P, {
                                show: ea && eu.menuType !== i(649476).gu.ActionSheet,
                                onDismiss: b,
                                inputRef: ef
                            })]
                        }) : (0, a.jsx)(i(636518).Ay, {
                            ref: d,
                            ...en,
                            left: c,
                            right: u,
                            isTokenTitle: !0,
                            title: (0, a.jsx)(y, {
                                ref: ef,
                                disableInput: g,
                                inputOuterStyle: h,
                                inputRight: p,
                                inputRightStyle: v,
                                inputLeft: f,
                                ...ep
                            }),
                            style: { ...o,
                                ...j
                            }
                        })
                    })
                }),
                l = 30,
                s = 28;

            function d(e) {
                let {
                    icon: t
                } = e;
                return t({
                    fill: i(632079).Tj.icon.secondary,
                    width: i(104509).Ev.sm,
                    height: i(104509).Ev.sm,
                    flexGrow: 0,
                    flexShrink: 0
                })
            }
            let c = {
                    outlineButtonHovered: {
                        background: i(632079).Tj.background.secondary
                    }
                },
                u = (0, i(64960)._S)({
                    color: i(632079).Tj.background.primary
                });

            function f(e) {
                let t = (0, i(533992).WS)(),
                    n = (0, i(960253).I)(() => ({
                        outlineButton: { ...(0, i(64960).qq)({
                                shape: "default",
                                size: "sm",
                                hasIconOnly: !0,
                                isButtonGapEnabled: !0
                            }),
                            fontWeight: i(699422).Wy.medium,
                            lineHeight: 1.2,
                            border: `1px solid ${i(632079).Tj.border.primaryTranslucent}`,
                            background: e.hasBackground ? i(632079).Tj.background.primary : void 0
                        },
                        outlineButtonPressed: {
                            background: u.pressed
                        }
                    }), [e.hasBackground]);
                return (0, a.jsx)(i(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...n.outlineButton,
                        ...e.style,
                        height: t ? l : s,
                        width: t ? l : s
                    },
                    hoveredStyle: c.outlineButtonHovered,
                    pressedStyle: n.outlineButtonPressed
                })
            }
            let p = r,
                v = {
                    style0: {
                        color: i(632079).Tj.text.secondary
                    }
                };

            function g({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let o = (0, i(533992).v3)(),
                    r = (0, n.useCallback)(e => {
                        e.preventDefault();
                        let n = t.current;
                        n && (0, i(862215).G)(o, n)
                    }, [o, t]);
                return (0, a.jsx)(i(64960).Ay, {
                    onClick: r,
                    style: v.style0,
                    children: e
                })
            }
            let y = n.forwardRef(function(e, t) {
                    let {
                        disabled: n,
                        disableInput: o,
                        inputOuterStyle: r,
                        inputRight: l,
                        inputRightStyle: s,
                        inputLeft: d,
                        min: c,
                        textarea: u,
                        ...f
                    } = e;
                    return (0, a.jsx)(i(36481).p, { ...f,
                        ref: t,
                        disabled: n || o,
                        style: {
                            height: u ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...r
                        },
                        left: d,
                        right: l,
                        rightStyle: s,
                        min: c,
                        textarea: u
                    })
                }),
                h = {
                    fontSize: 16
                },
                x = n.forwardRef(function(e, t) {
                    let {
                        left: o,
                        right: r,
                        inputLeft: l,
                        inputRight: s,
                        inputRightStyle: d,
                        disableInput: c,
                        inputOuterStyle: u,
                        rightMobileEditLabel: f,
                        isFocused: p,
                        setIsFocused: v,
                        disabled: y,
                        showClearButton: x,
                        onBlur: m,
                        onFocus: b,
                        ...j
                    } = e, M = (0, n.useCallback)(e => {
                        v(!1), m && m(e)
                    }, [m, v]), S = (0, n.useCallback)(e => {
                        v(!0), b && b(e)
                    }, [b, v]), T = (0, n.useRef)(null), k = (0, i(421573).A)(T, t), A = f && !p ? (0, a.jsx)(g, {
                        rightMobileEditLabel: f,
                        inputRef: T
                    }) : null;
                    return (0, a.jsx)(i(36481).p, { ...j,
                        ref: k,
                        format: "transparent",
                        style: { ...h,
                            ...u
                        },
                        onFocus: S,
                        onBlur: M,
                        showClearButton: !1 !== x,
                        disabled: y || c,
                        left: l || o,
                        right: A || s || r,
                        rightStyle: d
                    })
                })
        },
        314566: (e, t, i) => {
            i.d(t, {
                A: () => r
            });
            var n = i(296540),
                a = i(474848);
            let o = {
                    closeButtonIconStyle: i(986939).A.isMobile ? {
                        width: 18,
                        height: 18
                    } : {}
                },
                r = n.memo(function({
                    onClose: e,
                    style: t
                }) {
                    let n = (0, i(109939).tz)(),
                        r = (0, i(960253).I)(() => ({
                            closeButton: {
                                borderRadius: "100%",
                                width: i(986939).A.isMobile ? 28 : 22,
                                height: i(986939).A.isMobile ? 28 : 22,
                                ...t
                            }
                        }), [t]);
                    return (0, a.jsx)(i(374533).A, {
                        iconStyle: o.closeButtonIconStyle,
                        style: r.closeButton,
                        hovered: !0,
                        icon: i(519529).xMarkFillSmallIcon,
                        onClick: e,
                        ariaLabel: n.formatMessage({
                            id: "circleCloseButton.ariaLabel",
                            defaultMessage: "Close"
                        })
                    })
                })
        },
        368678: (e, t, i) => {
            i.d(t, {
                P: () => r
            });
            var n = i(296540),
                a = i(474848);
            let o = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: i(632079).Tj.blue.text.accentPrimary,
                    fontWeight: i(699422).Wy.semibold
                }
            };

            function r(e) {
                let {
                    onDismiss: t,
                    inputRef: r
                } = e, l = (0, i(533992).Y0)(), s = (0, n.useRef)(null), d = l.isMobileNative && l.isIOS, c = d && e.show;
                (0, i(336494).b)(i(651748).A, () => ({
                    getNode: () => s.current,
                    isShown: () => c
                }), [c]);
                let u = (0, i(571354).n)(),
                    f = (0, n.useCallback)(() => {
                        var e;
                        null == r || null == (e = r.current) || e.focus(), t && t();
                        let i = document.activeElement;
                        i instanceof HTMLElement && i.blur()
                    }, [r, t]);
                if (!d) return null;
                let p = c ? -(i(247800).j + u) : 0;
                return (0, a.jsx)(i(114596).O, {
                    open: !0,
                    children: (0, a.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: i(247800).j,
                            display: c ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: i(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${p}px)`,
                            transition: c ? "ease-out" : "ease-in",
                            boxShadow: c ? `
								0 -1px 0 ${i(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: s,
                        children: (0, a.jsx)(i(64960).Ay, {
                            style: o.style0,
                            onTouchEnd: () => {
                                f()
                            },
                            children: (0, a.jsx)(i(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        782268: (e, t, i) => {
            i.d(t, {
                d: () => r
            }), i(296540);
            var n = i(474848);
            let a = {
                    padding: "8px 14px"
                },
                o = {
                    marginBottom: 4
                };

            function r(e) {
                let t, {
                        getRecordModel: r,
                        actorPointer: l,
                        verificationState: s
                    } = e,
                    d = (0, i(109939).tz)(),
                    c = (0, i(682985).K8)(() => (0, i(197018).lR)(d, (0, i(197018).xC)({
                        pointer: l,
                        getRecordModel: r
                    })), [r, d, l]);
                switch (s.type) {
                    case "none":
                        return null;
                    case "verified":
                    case "expired":
                        t = (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Last verified by {user}",
                            id: "VerificationMetadata.lastVerified",
                            values: {
                                user: c
                            }
                        });
                        break;
                    case "archived":
                        t = (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Archived by {user}",
                            id: "VerificationMetadata.archived",
                            values: {
                                user: c
                            }
                        });
                        break;
                    default:
                        (0, i(722371).HB)(s)
                }
                let u = (0, i(435137).gi)(s);
                return (0, n.jsxs)("div", {
                    style: a,
                    children: [(0, n.jsx)(i(324489).V, {
                        isSmall: !0,
                        isSecondaryColor: !0,
                        isMultiline: !0,
                        style: o,
                        children: t
                    }), (0, n.jsx)(i(324489).V, {
                        isSmall: !0,
                        isSecondaryColor: !0,
                        children: (0, i(931990).OH)({
                            dateTime: u,
                            intl: d
                        })
                    })]
                })
            }
        },
        787690: (e, t, i) => {
            i.d(t, {
                y: () => c,
                u: () => u
            });
            var n = i(296540),
                a = i(474848);
            let o = (0, i(109939).YK)({
                    placeholder: {
                        id: "VerificationExpiryMenu.pickSpecificDate.placeholder",
                        defaultMessage: "Pick a date"
                    }
                }),
                r = {
                    mobileContainerStyle: {
                        paddingBottom: 10
                    },
                    calendar: i(986939).A.isMobile ? {
                        padding: "16px 14px 16px",
                        borderBottom: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`,
                        background: i(632079).Tj.popoverBackground,
                        marginTop: 27,
                        boxShadow: `0 -1px 0 ${i(632079).Tj.border.secondaryTranslucent}`
                    } : {},
                    input: i(986939).A.isMobile ? {
                        padding: "16px 0",
                        marginTop: 0
                    } : {}
                };

            function l(e) {
                let t = (0, i(109939).tz)(),
                    {
                        onChange: l,
                        clearCustomDatePicker: s,
                        verificationState: d,
                        addExtraTopPadding: c
                    } = e,
                    u = (0, n.useRef)(e.today),
                    f = (0, n.useRef)(e.today.plus({
                        days: 1
                    })),
                    [p, v] = (0, n.useState)(!1),
                    g = (0, i(682985).O$)(i(97892).X),
                    y = "verified" !== d.type || d.isIndefinite ? void 0 : d.dateTimeRange.end,
                    h = (0, i(960253).I)(() => ({
                        containerStyle: {
                            paddingTop: c ? 12 : 4,
                            paddingBottom: 12
                        }
                    }), [c]);
                return (0, a.jsxs)(i(844565).A, {
                    mobileStyle: r.mobileContainerStyle,
                    style: h.containerStyle,
                    disableMobilePadding: !0,
                    children: [(0, a.jsx)(i(695760).A, {
                        placeholder: t.formatMessage(o.placeholder),
                        focused: p,
                        value: "verified" !== e.verificationState.type || e.verificationState.isIndefinite ? void 0 : i(25825).lN(e.verificationState.dateTimeRange.end),
                        onUpdate: e => {
                            if (e.error) return;
                            let t = e.value && i(25825).Dz(e.value);
                            t ? l({
                                range: {
                                    start: u.current,
                                    end: t.start
                                }
                            }) : s()
                        },
                        onFocus: () => v(!0),
                        onBlur: () => v(!1),
                        onClearButtonClick: s,
                        hideClearButton: !0,
                        style: r.input
                    }), (0, a.jsx)("div", {
                        style: r.calendar,
                        children: (0, a.jsx)(i(151012).A, {
                            firstDayOfWeek: g,
                            value: (null == y ? void 0 : y.toMillis()) || f.current.toMillis(),
                            selectValue: !!y,
                            onChange: e => {
                                l({
                                    range: {
                                        start: u.current,
                                        end: i(906745).DateTime.fromMillis(e)
                                    },
                                    option: "custom"
                                })
                            },
                            disabledDays: {
                                before: new Date(f.current.toMillis())
                            },
                            className: "notion-date-property-menu"
                        })
                    })]
                })
            }
            i(581454);
            let s = {
                title: {
                    fontSize: i(418676).vQ,
                    color: i(632079).Tj.text.primary
                },
                disabledTitle: {
                    color: i(632079).Tj.text.secondary
                },
                disabledCaption: {
                    color: i(632079).Tj.text.tertiary
                },
                disabledButton: {
                    color: i(632079).Tj.text.tertiary
                },
                upsellContainer: {
                    paddingTop: 12,
                    paddingInlineEnd: 12,
                    paddingBottom: 0,
                    paddingInlineStart: 12
                }
            };

            function d(e) {
                let {
                    verificationState: t,
                    onChange: o,
                    onCustomDateClick: r,
                    showTitle: l,
                    showUpsell: d
                } = e, c = (0, i(533992).v3)(), u = (0, i(109939).tz)(), f = (0, i(67499).S)(), p = (0, n.useRef)(e.today), v = "expired" === t.type || "none" === t.type ? (0, a.jsx)(i(109939).sA, {
                    defaultMessage: "Verify page",
                    id: "VerificationExpiryPicker.verify.header"
                }) : (0, a.jsx)(i(109939).sA, {
                    defaultMessage: "Reverify page",
                    id: "VerificationExpiryPicker.reverify.header"
                }), g = "verified" === t.type && t.isIndefinite, y = "verified" === t.type && !t.isIndefinite && t.dateTimeRange.end, h = !!d, x = (0, i(682985).K8)(() => (0, i(888).$)(f), [f]), m = null == x ? void 0 : x.id, b = (0, i(217844)._)({
                    name: "verified_pages",
                    spaceId: m,
                    userId: c.currentUser.id
                });
                return (0, a.jsxs)("div", {
                    children: [d && null != b && b.upsell ? (0, a.jsx)("div", {
                        style: s.upsellContainer,
                        children: (0, a.jsx)(i(754951).UpgradeButton, {
                            display: "button",
                            upsell: null == b ? void 0 : b.upsell,
                            source: "verification_upsell_item_page_entrypoint",
                            spaceStore: x
                        })
                    }) : void 0, (0, a.jsxs)(i(844565).A, {
                        title: l && v,
                        children: [i(435137).yj.map(e => {
                            let t = y && i(435137).gj({
                                start: p.current,
                                end: y
                            }) === e;
                            return (0, a.jsx)(i(95582).A, {
                                buttonStyle: h ? s.disabledButton : void 0,
                                disabled: h,
                                focused: !1,
                                icon: (0, a.jsx)(i(16275).I, {
                                    icon: i(253092).alarmIcon
                                }),
                                inline: !1,
                                title: (0, a.jsx)("span", {
                                    style: h ? s.disabledTitle : s.title,
                                    children: (0, a.jsx)(i(109939).sA, {
                                        defaultMessage: "For {numDays} days",
                                        id: "VerificationExpiryMenu.preset.title",
                                        values: {
                                            numDays: e
                                        }
                                    })
                                }),
                                caption: u.formatMessage({
                                    defaultMessage: "Until {date}",
                                    id: "VerificationExpiryMenu.preset.subtitle"
                                }, {
                                    date: i(931990).OH({
                                        dateTime: i(435137).RD(e, p.current).end,
                                        intl: u,
                                        shortenDateAndRange: !0
                                    })
                                }),
                                captionStyle: h ? s.disabledCaption : void 0,
                                isChecked: !!t,
                                onClick: () => {
                                    o({
                                        range: {
                                            start: p.current,
                                            end: p.current.plus({
                                                days: e
                                            })
                                        },
                                        option: `${e}d`
                                    })
                                }
                            }, e)
                        }), (0, a.jsx)(i(95582).A, {
                            buttonStyle: h ? s.disabledButton : void 0,
                            disabled: h,
                            focused: !1,
                            icon: (0, a.jsx)(i(16275).I, {
                                icon: i(870143).Q
                            }),
                            inline: !1,
                            title: (0, a.jsx)("span", {
                                style: h ? s.disabledTitle : s.title,
                                children: (0, a.jsx)(i(109939).sA, {
                                    defaultMessage: "Indefinitely",
                                    id: "VerificationExpiryPicker.option.indefinitely"
                                })
                            }),
                            onClick: () => o({
                                option: "indefinite"
                            }),
                            isChecked: g
                        }, "indefinite"), (0, a.jsx)(i(95582).A, {
                            buttonStyle: h ? s.disabledButton : void 0,
                            disabled: h,
                            focused: !1,
                            icon: (0, a.jsx)(i(16275).I, {
                                icon: i(998172).D
                            }),
                            title: (0, a.jsx)("span", {
                                style: h ? s.disabledTitle : s.title,
                                children: (0, a.jsx)(i(109939).sA, {
                                    defaultMessage: "Pick a date",
                                    id: "VerificationExpiryPicker.option.customDate"
                                })
                            }),
                            onClick: r
                        }, "custom")]
                    })]
                })
            }

            function c(e) {
                let {
                    verificationValue: t,
                    getRecordModel: o,
                    onChange: r,
                    blockId: s,
                    propertyName: c,
                    onClose: f,
                    showTitle: p,
                    showRemoveVerificationButton: v,
                    showVerificationFooter: g,
                    showCurrentStatusHeader: y,
                    showCustomHeader: h,
                    customHeader: x,
                    showUpsell: m,
                    entrypoint: b,
                    isPageArchived: j
                } = e, M = (0, i(533992).v3)(), S = (0, i(345776).T)(), T = (0, i(109939).tz)(), [k, A] = (0, n.useState)(!1), C = (0, n.useMemo)(() => i(435137).B2(t), [t]), _ = (0, n.useRef)(i(25825).ah((0, i(714350).P)())), B = (0, n.useRef)(i(25825).ah((0, i(714350).P)()).plus({
                    days: 1
                })), w = e => {
                    let {
                        range: t,
                        option: n
                    } = e;
                    if (!S || null != t && t.end && t.end.toMillis() < B.current.toMillis()) return;
                    let a = {
                            table: i(514214).oo,
                            id: S
                        },
                        o = t ? i(25825).C6.toPersistedDateTimeRange(t) : i(25825).C6.toPersistedDateTime(_.current.toMillis()),
                        l = "none" === C.type ? "add" : "update";
                    u(M, {
                        action: l,
                        verification_type: "verified",
                        verification_page_id: s,
                        verification_expiry: t ? t.end.toMillis() : void 0
                    }), r({
                        value: [a, o],
                        metadata: {
                            action: l,
                            verification_type: "verified",
                            entrypoint: b,
                            expiration: n,
                            expiration_date: t ? t.end.toMillis() : void 0
                        }
                    })
                }, I = {
                    menuType: i(649476).gu.Popup,
                    footer: g && !k && (0, a.jsx)(i(804296).n, {
                        verificationState: C,
                        getRecordModel: o
                    })
                };
                return i(986939).A.isMobile && (I = { ...I,
                    title: c,
                    menuType: i(649476).gu.Modal,
                    right: (0, a.jsx)(i(109939).sA, { ...i(789722).W.done
                    }),
                    onClickRight: k ? () => A(!1) : f
                }), (0, a.jsxs)(a.Fragment, {
                    children: [h && x && !k ? x : h && k ? (0, a.jsx)(i(179917).o, {
                        label: T.formatMessage({
                            id: "verificationPropertyOverlay.verificationMenuHeader.pickDate",
                            defaultMessage: "Pick a date"
                        }),
                        onClickBackButton: () => A(!1),
                        onClose: () => f(),
                        width: 265,
                        showBottomBorder: !1
                    }) : null, (0, a.jsx)(i(747369).A, { ...I,
                        header: !k && y && (0, a.jsx)(i(65068).Z, {
                            verificationState: C
                        }),
                        children: k ? (0, a.jsx)(l, {
                            today: _.current,
                            verificationState: C,
                            onChange: e => w(e),
                            clearCustomDatePicker: () => A(!1),
                            addExtraTopPadding: !h
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [j ? void 0 : (0, a.jsx)(d, {
                                today: _.current,
                                verificationState: C,
                                onChange: e => w(e),
                                onCustomDateClick: () => A(!0),
                                showTitle: p,
                                showUpsell: m
                            }), v ? (0, a.jsx)(i(58011).O, {
                                verificationState: C,
                                onChange: r,
                                blockId: s,
                                entrypoint: b
                            }) : void 0]
                        })
                    })]
                })
            }

            function u(e, t) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("verification_update", t)
            }
        },
        804296: (e, t, i) => {
            i.d(t, {
                n: () => o
            }), i(296540);
            var n = i(474848);
            let a = {
                footerStyle: {
                    borderTop: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`
                }
            };

            function o({
                verificationState: e,
                getRecordModel: t
            }) {
                return "none" === e.type ? null : (0, n.jsx)("div", {
                    style: a.footerStyle,
                    children: (0, n.jsx)(i(782268).d, {
                        verificationState: e,
                        getRecordModel: t,
                        actorPointer: e.actorPointer
                    })
                })
            }
        },
        855126: (e, t, i) => {
            i.d(t, {
                n: () => n
            });
            let n = (0, i(109939).YK)({
                expirationProperty: {
                    defaultMessage: "Expiration",
                    id: "verificationHelpers.menuTitle.Expiration"
                },
                noExpiration: {
                    defaultMessage: "None",
                    id: "verificationHelpers.noExpiration"
                },
                verifierProperty: {
                    defaultMessage: "Owner",
                    id: "verificationHelpers.menuTitle.Owner"
                },
                noOwners: {
                    defaultMessage: "No owners",
                    id: "verificationHelpers.noOwners.placeholder"
                },
                removeVerificationProperty: {
                    defaultMessage: "Remove verification",
                    id: "verificationHelpers.removeVerification"
                },
                removeArchivedStatus: {
                    defaultMessage: "Remove archived status",
                    id: "verificationHelpers.removeArchivedStatus"
                },
                nonOwnerCannotRemoveVerification: {
                    defaultMessage: "Only owners can remove verification",
                    id: "verificationHelpers.nonOwnerCannotRemoveVerification"
                },
                nonOwnerCannotRemoveArchival: {
                    defaultMessage: "Only owners can remove archived status",
                    id: "verificationHelpers.nonOwnerCannotRemoveArchival"
                },
                nonOwnersCannotEditVerification: {
                    defaultMessage: "Only owners can edit verification",
                    id: "verificationHelpers.nonOwnersCannotEditVerification"
                },
                ownersAttribution: {
                    defaultMessage: "{numOtherActors, plural, =0 {{actorName}} one {{actorName} and {numOtherActors} other} other {{actorName} and {numOtherActors} others}}",
                    id: "verificationHelpers.displayPageOwners"
                },
                verificationMenuTitle: {
                    defaultMessage: "Configure Verification",
                    id: "verificationHelpers.verificationMenu.menuTitle.configureVerification"
                },
                verificationMenuTitleArchived: {
                    defaultMessage: "Configure archived status",
                    id: "verificationHelpers.verificationMenu.menuTitle.configureArchival"
                },
                addVerificationMenuTitle: {
                    defaultMessage: "Verification Status",
                    id: "verificationHelpers.verificationMenu.menuTitle.addVerification"
                }
            })
        },
        862215: (e, t, i) => {
            i.d(t, {
                G: () => n
            });

            function n(e, t) {
                let {
                    device: i
                } = e;
                i.isAndroid && t.focus(), t.select()
            }
        },
        900822: (e, t, i) => {
            i.r(t), i.d(t, {
                badgeCheckIcon: () => o,
                iconDefinition: () => a
            }), i(296540);
            var n = i(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.57 1.57 16.86 16.86",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M12.806 8.074a.625.625 0 1 0-1.072-.643l-2.512 4.185-1.407-1.642a.625.625 0 1 0-.95.814l1.973 2.3a.625.625 0 0 0 1.01-.085z"
                        }), (0, n.jsx)("path", {
                            d: "M10.405 1.724a.625.625 0 0 0-.81 0L7.36 3.628l-2.926.233a.625.625 0 0 0-.573.574L3.628 7.36 1.724 9.595a.624.624 0 0 0 0 .81l1.904 2.234.233 2.926a.625.625 0 0 0 .574.573l2.926.234 2.234 1.904a.624.624 0 0 0 .81 0l2.234-1.904 2.926-.234a.625.625 0 0 0 .573-.573l.234-2.926 1.904-2.234a.624.624 0 0 0 0-.81L16.372 7.36l-.234-2.926a.625.625 0 0 0-.573-.573l-2.926-.234zM8.017 4.711 10 3.02l1.983 1.69c.1.085.224.136.355.147l2.597.207.207 2.597c.01.13.062.255.147.355L16.98 10l-1.69 1.983a.63.63 0 0 0-.147.355l-.207 2.597-2.597.207a.63.63 0 0 0-.355.147L10 16.98l-1.983-1.69a.63.63 0 0 0-.355-.147l-2.597-.207-.207-2.597a.63.63 0 0 0-.147-.355L3.02 10l1.69-1.983a.63.63 0 0 0 .147-.355l.207-2.597 2.597-.207a.63.63 0 0 0 .355-.147"
                        })]
                    })
                },
                o = (0, i(104509).wt)("badgeCheck", a, "default")
        },
        907851: (e, t, i) => {
            i.d(t, {
                Y: () => r
            });
            var n = i(296540),
                a = i(474848);
            let o = {
                container: {
                    width: i(986939).A.isMobile ? void 0 : 265
                }
            };

            function r(e) {
                let {
                    verificationValue: t,
                    propertyName: r,
                    onChange: l,
                    onClose: s,
                    blockId: d,
                    entrypoint: c,
                    showCurrentStatusHeader: u,
                    showVerificationFooter: f,
                    showRemoveVerificationButton: p,
                    getRecordModel: v
                } = e, g = (0, i(345776).T)(), y = (0, i(109939).tz)(), h = (0, n.useMemo)(() => (0, i(435137).I7)(t), [t]), x = (0, n.useRef)(i(25825).ah((0, i(714350).P)())), m = (0, n.useCallback)(() => {
                    g && l({
                        value: [{
                            table: i(514214).oo,
                            id: g
                        }, i(25825).C6.toPersistedDateTime(x.current.toMillis()), "archived"],
                        metadata: {
                            action: "none" === h.type ? "add" : "update",
                            verification_type: "archived",
                            entrypoint: c
                        }
                    })
                }, [g, c, l, h.type]);
                if ("archived" !== h.type) return (0, a.jsx)(i(787690).y, { ...e
                });
                let b = {
                    menuType: i(649476).gu.Popup,
                    header: u && (0, a.jsx)(i(65068).Z, {
                        verificationState: h
                    }),
                    footer: f && (0, a.jsx)(i(804296).n, {
                        verificationState: h,
                        getRecordModel: v
                    })
                };
                i(986939).A.isMobile && (b = { ...b,
                    title: r,
                    menuType: i(649476).gu.Modal,
                    right: (0, a.jsx)(i(109939).sA, { ...i(789722).W.done
                    }),
                    onClickRight: s
                });
                let j = [{
                    key: "page-status-actions",
                    render: e => (0, a.jsx)(i(844565).A, { ...e,
                        children: e.children
                    }),
                    items: [{
                        key: "verify",
                        action: () => {},
                        render: (t, n) => (0, a.jsx)(i(816231).A, { ...t,
                            onFocus: n.onFocus,
                            alignmentToOrigin: "start",
                            disableDefaultClick: !0,
                            renderExtension: () => (0, a.jsx)("div", {
                                style: o.container,
                                children: (0, a.jsx)(i(787690).y, { ...e,
                                    showCurrentStatusHeader: !1,
                                    showVerificationFooter: !1,
                                    showRemoveVerificationButton: !1
                                })
                            }),
                            children: (e, t) => (0, a.jsx)(i(95582).A, { ...e,
                                ref: t,
                                icon: (0, a.jsx)(i(16275).I, {
                                    icon: i(900822).badgeCheckIcon
                                }),
                                title: y.formatMessage({
                                    id: "verificationPropertyOverlayMenu.verify",
                                    defaultMessage: "Verify"
                                }),
                                showExtensionArrow: !0
                            })
                        })
                    }, ..."archived" !== h.type ? [{
                        key: "archive",
                        action: m,
                        render: e => (0, a.jsx)(i(95582).A, { ...e,
                            icon: (0, a.jsx)(i(16275).I, {
                                icon: i(937776).B
                            }),
                            title: y.formatMessage({
                                id: "verificationPropertyOverlayMenu.archive",
                                defaultMessage: "Archive"
                            })
                        })
                    }] : []]
                }];
                return (0, a.jsxs)(i(747369).A, { ...b,
                    children: [(0, a.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        initialFocus: 0,
                        sections: j
                    }), p ? (0, a.jsx)(i(58011).O, {
                        verificationState: h,
                        onChange: l,
                        blockId: d,
                        entrypoint: c
                    }) : void 0]
                })
            }
        }
    }
]);