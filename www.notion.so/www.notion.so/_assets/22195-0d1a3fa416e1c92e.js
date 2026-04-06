"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [22195], {
        6591: (e, t, n) => {
            n.d(t, {
                E: () => r
            }), n(16280);
            var l = n(296540);
            let o = {
                    SimpleMonacoWrapper: new(n(815048)).O2("SimpleMonacoWrapper", async () => {
                        let [e, t, l] = await Promise.all([n.e(89440).then(n.bind(n, 262795)).then(e => e.default), n.e(79508).then(n.bind(n, 668553)).then(e => e.loader), Promise.all([n.e(79508), n.e(62989)]).then(n.bind(n, 985687))]);
                        return t.config({
                            monaco: e
                        }), l
                    })
                },
                a = (0, n(815048)._h)(o.SimpleMonacoWrapper, e => e.SimpleMonacoWrapper);
            var s = n(474848);
            let i = {
                position: "absolute",
                top: 8,
                insetInlineEnd: 12,
                display: "flex",
                gap: 8,
                zIndex: 1
            };

            function r(e) {
                let {
                    value: t,
                    onSave: o,
                    disabled: r,
                    language: d = "typescript",
                    onFocus: c,
                    onBlur: u,
                    onChange: p,
                    fetchTypescriptImports: g,
                    fillHeight: y
                } = e, m = (0, l.useRef)(null), [h, x] = l.useState(t), f = (0, n(668745).ZC)(t);
                l.useEffect(() => {
                    if (f === h && t !== f) {
                        var e;
                        x(t), null == (e = m.current) || e.setValue(t)
                    }
                }, [h, f, t]);
                let b = (0, l.useCallback)(() => {
                        if (h !== t) try {
                            null == o || o(h)
                        } catch (e) {
                            console.error(e), e instanceof Error && n(647095).rG({
                                message: e.message
                            })
                        }
                    }, [o, h, t]),
                    v = (0, l.useCallback)(() => {
                        var e;
                        x(t), null == (e = m.current) || e.setValue(t)
                    }, [t]),
                    j = (0, l.useCallback)(e => {
                        x(e ? ? ""), null == p || p(e ? ? "")
                    }, [p]),
                    k = (0, l.useCallback)(e => {
                        m.current = e
                    }, []),
                    [C, w] = l.useState(void 0);
                (0, n(97668).Yb)(async () => {
                    g && w(await g())
                }, [g]);
                let S = (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        borderRadius: 8 * !y,
                        overflow: "hidden",
                        height: y ? "100%" : "50vh",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 400
                    }
                }), [y]);
                return (0, s.jsxs)("div", {
                    style: S.container,
                    children: [t !== h ? (0, s.jsxs)("div", {
                        style: i,
                        children: [(0, s.jsx)(n(988022).p, {
                            onClick: v,
                            children: (0, s.jsx)(n(109939).sA, {
                                defaultMessage: "Discard",
                                id: "workflow.monacoCodeBlock.discard"
                            })
                        }), (0, s.jsx)(n(988022).p, {
                            onClick: b,
                            children: (0, s.jsx)(n(109939).sA, {
                                defaultMessage: "Save changes",
                                id: "workflow.monacoCodeBlock.save"
                            })
                        })]
                    }) : void 0, (0, s.jsx)(a, {
                        language: d,
                        value: h,
                        disabled: r,
                        onChange: j,
                        onMount: k,
                        onFocus: c,
                        onBlur: u,
                        imports: C
                    })]
                })
            }
        },
        140102: (e, t, n) => {
            n.d(t, {
                O: () => r,
                X: () => d
            }), n(16280);
            var l = n(296540),
                o = n(474848);
            let a = {
                container: {
                    position: "relative",
                    background: n(632079).Tj.gray.background.primary,
                    padding: 16,
                    borderRadius: 12
                },
                input: {
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    fontFamily: "monospace",
                    color: n(632079).Tj.text.primary,
                    margin: 0,
                    marginBottom: 12,
                    fontSize: 12
                },
                controls: {
                    position: "absolute",
                    top: 8,
                    insetInlineEnd: 8,
                    display: "flex",
                    gap: 8,
                    zIndex: 1
                }
            };

            function s(e) {
                let {
                    value: t,
                    onSave: s,
                    disabled: i,
                    onFocus: d,
                    onBlur: c
                } = e, [u, p] = l.useState(!1), [g, y] = l.useState(void 0), m = (0, l.useCallback)(e => {
                    y(e.target.value)
                }, []), h = (0, l.useCallback)(() => {
                    if (void 0 !== g) try {
                        null == s || s(g), y(void 0), p(!1)
                    } catch (e) {
                        console.error(e), e instanceof Error && n(647095).rG({
                            message: e.message
                        })
                    }
                }, [s, g]), x = (0, l.useCallback)(() => {
                    y(void 0), p(!1)
                }, []), f = (0, l.useCallback)(() => {
                    p(!0), y(t)
                }, [t]);
                return i ? (0, o.jsx)(r, { ...e
                }) : (0, o.jsxs)("div", {
                    style: a.container,
                    children: [(0, o.jsx)("div", {
                        style: a.controls,
                        children: u ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(n(988022).p, {
                                onClick: x,
                                children: (0, o.jsx)(n(109939).sA, {
                                    defaultMessage: "Discard",
                                    id: "workflow.codeBlock.discard"
                                })
                            }), (0, o.jsx)(n(988022).p, {
                                onClick: h,
                                children: (0, o.jsx)(n(109939).sA, {
                                    defaultMessage: "Save",
                                    id: "workflow.codeBlock.save"
                                })
                            })]
                        }) : (0, o.jsx)(n(988022).p, {
                            onClick: f,
                            children: (0, o.jsx)(n(109939).sA, {
                                defaultMessage: "Edit",
                                id: "workflow.codeBlock.edit"
                            })
                        })
                    }), u ? (0, o.jsx)(n(36481).p, {
                        value: void 0 !== g ? g : t,
                        onChange: m,
                        textarea: !0,
                        style: a.input,
                        autosize: !0,
                        autosizeMinHeight: 80,
                        onFocus: d,
                        onBlur: c
                    }) : (0, o.jsx)(r, { ...e
                    })]
                })
            }
            let i = {
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                userSelect: "text",
                WebkitUserSelect: "text",
                cursor: "text",
                fontFamily: "monospace",
                margin: 0,
                fontSize: 12
            };

            function r(e) {
                let {
                    value: t,
                    language: a = "typescript",
                    styles: s
                } = e, {
                    value: r
                } = (0, n(815048).fJ)(n(832737).y), d = l.useMemo(() => r ? r.highlight(t, r.languages[a] || r.languages.javascript, a) : t, [r, t, a]), c = (0, l.useCallback)(e => {
                    e.stopPropagation()
                }, []);
                return (0, o.jsx)("div", {
                    style: { ...i,
                        ...s
                    },
                    dangerouslySetInnerHTML: {
                        __html: d
                    },
                    onCopy: c
                })
            }

            function d(e) {
                let t = (0, n(533992).v3)(),
                    [a, i] = (0, l.useState)(!1),
                    r = (0, l.useCallback)(() => {
                        i(!0), (0, n(525779).clear)({
                            environment: t
                        })
                    }, [t]),
                    d = (0, l.useCallback)(() => {
                        i(!1)
                    }, []),
                    c = ((0, n(83208).X)("ai_workflows_monaco_code_editor"), !1);
                return (0, o.jsx)(n(790124).A, {
                    capture: a,
                    debugName: "SimpleCodeBlock",
                    children: () => c ? (0, o.jsx)(n(6591).E, { ...e,
                        onFocus: r,
                        onBlur: d
                    }) : (0, o.jsx)(s, { ...e,
                        onFocus: r,
                        onBlur: d
                    })
                })
            }
        },
        187649: (e, t, n) => {
            let l, o;

            function a(e) {
                l = e
            }
            async function s() {
                return o || (l ? o = await l() : void 0)
            }
            n.d(t, {
                Q: () => a,
                z: () => s
            })
        },
        310324: (e, t, n) => {
            n.d(t, {
                Ay: () => g,
                KF: () => p,
                LG: () => i,
                Zf: () => d,
                yD: () => r
            });
            var l = n(296540),
                o = n(474848);
            let a = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                s = l.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: s,
                    preventCaptureSpacebarWhenEmpty: i,
                    ...r
                }, d) {
                    let {
                        left: c,
                        right: u,
                        inputLeft: p,
                        inputRight: g,
                        inputRightStyle: y,
                        disableInput: m,
                        inputOuterStyle: x,
                        rightMobileEditLabel: b,
                        mobileKeyboardOnDismiss: v,
                        style: j,
                        value: k,
                        onChange: C,
                        autosize: w,
                        autosizeMinHeight: S,
                        autosizeMaxHeight: T,
                        customElementAttributes: A,
                        disabled: I,
                        format: M,
                        id: B,
                        placeholder: R,
                        type: N,
                        autoFocus: z,
                        focus: D,
                        focusInitial: E,
                        focusAfterAnimation: _,
                        forceShowClearButton: L,
                        ignoreKeyboardMode: P,
                        inputElementAttributes: W,
                        inputStyle: V,
                        isRightLastElementOfInput: F,
                        maxlength: O,
                        min: K,
                        max: $,
                        selectAll: H,
                        showClearButton: G,
                        suppressFocusRing: U,
                        textarea: X,
                        textareaSubmitOnEnter: J,
                        onBlur: q,
                        onCancel: Y,
                        onClearButtonClick: Z,
                        onClick: Q,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: en,
                        ...el
                    } = r, [eo, ea] = (0, l.useState)(() => !!(D || E));
                    (0, l.useEffect)(() => {
                        void 0 !== D && ea(D)
                    }, [D]);
                    let es = e ? void 0 : n(763230).D_,
                        ei = !t || k.length > 0 ? n(763230).D_ : void 0,
                        er = s ? void 0 : n(763230).D_,
                        ed = !i || k.length > 0 ? n(763230).D_ : void 0,
                        ec = (0, n(649476).Tf)(),
                        eu = (0, l.useContext)(n(649476).xu),
                        ep = (0, l.useRef)(null),
                        eg = {
                            value: k,
                            onChange: C,
                            autosize: w,
                            autosizeMinHeight: S,
                            autosizeMaxHeight: T,
                            customElementAttributes: A,
                            disabled: I,
                            format: M,
                            id: B,
                            placeholder: R,
                            type: N,
                            autoFocus: z,
                            focus: D,
                            focusInitial: E,
                            focusAfterAnimation: _,
                            forceShowClearButton: L,
                            ignoreKeyboardMode: P,
                            inputElementAttributes: W,
                            inputStyle: V,
                            isRightLastElementOfInput: F,
                            maxlength: O,
                            min: K,
                            max: $,
                            selectAll: H,
                            showClearButton: G,
                            suppressFocusRing: U,
                            textarea: X,
                            textareaSubmitOnEnter: J,
                            onBlur: q,
                            onCancel: Y,
                            onClearButtonClick: Z,
                            onClick: Q,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: en
                        };
                    return (0, o.jsx)(n(369064).N, {
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
                        onCut: er,
                        onCopy: er,
                        onPaste: er,
                        onKeypress: n(763230).D_,
                        onLeft: es,
                        onRight: es,
                        onDelete: ei,
                        onBackspace: ei,
                        onSpace: ed,
                        children: n(986939).A.isMobile ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(n(636518).Ay, {
                                ref: d,
                                ...el,
                                itemMarginLeft: ec ? 8 : void 0,
                                style: j,
                                title: (0, o.jsx)(f, {
                                    ref: ep,
                                    left: c,
                                    right: u,
                                    inputLeft: p,
                                    inputRight: g,
                                    inputRightStyle: y,
                                    disableInput: m,
                                    inputOuterStyle: x,
                                    rightMobileEditLabel: b,
                                    isFocused: eo,
                                    setIsFocused: ea,
                                    ...eg
                                })
                            }), (0, o.jsx)(n(368678).P, {
                                show: eo && eu.menuType !== n(649476).gu.ActionSheet,
                                onDismiss: v,
                                inputRef: ep
                            })]
                        }) : (0, o.jsx)(n(636518).Ay, {
                            ref: d,
                            ...el,
                            left: c,
                            right: u,
                            isTokenTitle: !0,
                            title: (0, o.jsx)(h, {
                                ref: ep,
                                disableInput: m,
                                inputOuterStyle: x,
                                inputRight: g,
                                inputRightStyle: y,
                                inputLeft: p,
                                ...eg
                            }),
                            style: { ...a,
                                ...j
                            }
                        })
                    })
                }),
                i = 30,
                r = 28;

            function d(e) {
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
            let c = {
                    outlineButtonHovered: {
                        background: n(632079).Tj.background.secondary
                    }
                },
                u = (0, n(64960)._S)({
                    color: n(632079).Tj.background.primary
                });

            function p(e) {
                let t = (0, n(533992).WS)(),
                    l = (0, n(960253).I)(() => ({
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
                return (0, o.jsx)(n(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...l.outlineButton,
                        ...e.style,
                        height: t ? i : r,
                        width: t ? i : r
                    },
                    hoveredStyle: c.outlineButtonHovered,
                    pressedStyle: l.outlineButtonPressed
                })
            }
            let g = s,
                y = {
                    style0: {
                        color: n(632079).Tj.text.secondary
                    }
                };

            function m({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let a = (0, n(533992).v3)(),
                    s = (0, l.useCallback)(e => {
                        e.preventDefault();
                        let l = t.current;
                        l && (0, n(862215).G)(a, l)
                    }, [a, t]);
                return (0, o.jsx)(n(64960).Ay, {
                    onClick: s,
                    style: y.style0,
                    children: e
                })
            }
            let h = l.forwardRef(function(e, t) {
                    let {
                        disabled: l,
                        disableInput: a,
                        inputOuterStyle: s,
                        inputRight: i,
                        inputRightStyle: r,
                        inputLeft: d,
                        min: c,
                        textarea: u,
                        ...p
                    } = e;
                    return (0, o.jsx)(n(36481).p, { ...p,
                        ref: t,
                        disabled: l || a,
                        style: {
                            height: u ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...s
                        },
                        left: d,
                        right: i,
                        rightStyle: r,
                        min: c,
                        textarea: u
                    })
                }),
                x = {
                    fontSize: 16
                },
                f = l.forwardRef(function(e, t) {
                    let {
                        left: a,
                        right: s,
                        inputLeft: i,
                        inputRight: r,
                        inputRightStyle: d,
                        disableInput: c,
                        inputOuterStyle: u,
                        rightMobileEditLabel: p,
                        isFocused: g,
                        setIsFocused: y,
                        disabled: h,
                        showClearButton: f,
                        onBlur: b,
                        onFocus: v,
                        ...j
                    } = e, k = (0, l.useCallback)(e => {
                        y(!1), b && b(e)
                    }, [b, y]), C = (0, l.useCallback)(e => {
                        y(!0), v && v(e)
                    }, [v, y]), w = (0, l.useRef)(null), S = (0, n(421573).A)(w, t), T = p && !g ? (0, o.jsx)(m, {
                        rightMobileEditLabel: p,
                        inputRef: w
                    }) : null;
                    return (0, o.jsx)(n(36481).p, { ...j,
                        ref: S,
                        format: "transparent",
                        style: { ...x,
                            ...u
                        },
                        onFocus: C,
                        onBlur: k,
                        showClearButton: !1 !== f,
                        disabled: h || c,
                        left: i || a,
                        right: T || r || s,
                        rightStyle: d
                    })
                })
        },
        368678: (e, t, n) => {
            n.d(t, {
                P: () => s
            });
            var l = n(296540),
                o = n(474848);
            let a = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: n(632079).Tj.blue.text.accentPrimary,
                    fontWeight: n(699422).Wy.semibold
                }
            };

            function s(e) {
                let {
                    onDismiss: t,
                    inputRef: s
                } = e, i = (0, n(533992).Y0)(), r = (0, l.useRef)(null), d = i.isMobileNative && i.isIOS, c = d && e.show;
                (0, n(336494).b)(n(651748).A, () => ({
                    getNode: () => r.current,
                    isShown: () => c
                }), [c]);
                let u = (0, n(571354).n)(),
                    p = (0, l.useCallback)(() => {
                        var e;
                        null == s || null == (e = s.current) || e.focus(), t && t();
                        let n = document.activeElement;
                        n instanceof HTMLElement && n.blur()
                    }, [s, t]);
                if (!d) return null;
                let g = c ? -(n(247800).j + u) : 0;
                return (0, o.jsx)(n(114596).O, {
                    open: !0,
                    children: (0, o.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: n(247800).j,
                            display: c ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: n(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${g}px)`,
                            transition: c ? "ease-out" : "ease-in",
                            boxShadow: c ? `
								0 -1px 0 ${n(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: r,
                        children: (0, o.jsx)(n(64960).Ay, {
                            style: a.style0,
                            onTouchEnd: () => {
                                p()
                            },
                            children: (0, o.jsx)(n(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        455852: (e, t, n) => {
            n.d(t, {
                A: () => c,
                k: () => a
            }), n(898992), n(354520), n(803949), n(581454);
            var l = n(296540),
                o = n(474848);
            let a = 9999999,
                s = {
                    overflowWrap: {
                        overflowWrap: "break-word"
                    },
                    iconContainer: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 10,
                        fill: n(632079).Tj.icon.secondary
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function i({
                items: e,
                selectType: t,
                selectAlignXAxis: l,
                selectedKeys: a,
                setSelectedKeys: s
            }) {
                let r = e.map((n, i) => {
                    let r = n.key;
                    return (0, o.jsx)(d, {
                        text: n.text,
                        description: n.description,
                        selected: a[r] ? ? !1,
                        isBelowButtons: !!n.showBelowButtons,
                        isLastItem: i === e.length - 1,
                        onSelect: e => {
                            var l;
                            null == (l = n.onSelect) || l.call(n, e), "radio" === t ? s(e => {
                                let t = { ...e
                                };
                                return Object.keys(t).forEach(e => {
                                    t[e] = e === n.key
                                }), t
                            }) : s(t => ({ ...t,
                                [r]: e
                            }))
                        },
                        selectType: t,
                        selectAlignXAxis: l
                    }, r)
                });
                return (0, o.jsxs)(n(4458).VP, {
                    gap: "inherit",
                    children: [(0, o.jsx)(n(884877).A, {
                        size: 5
                    }), r]
                })
            }
            let r = {
                justifyContent: "center",
                border: "none"
            };

            function d({
                text: e,
                description: t,
                selected: a,
                onSelect: s,
                isBelowButtons: i,
                selectType: c = "checkbox",
                selectAlignXAxis: u,
                isLastItem: p
            }) {
                let g = (0, l.useCallback)(() => {
                    "radio" === c ? null == s || s(!0) : null == s || s(!a)
                }, [c, s, a]);
                return (0, o.jsx)(n(469738).a, {
                    label: e,
                    description: t,
                    isSelected: a,
                    value: "select_item",
                    width: i ? void 0 : "fill",
                    colorVariant: i ? "secondary" : "primary",
                    style: {
                        marginBottom: 12 * !p,
                        ...i ? r : {}
                    },
                    selectType: c,
                    selectAlignXAxis: u,
                    onChange: g
                })
            }
            let c = function() {
                let e = (0, l.useId)(),
                    t = (0, l.useId)(),
                    {
                        open: r,
                        innerStyle: d,
                        keepFocus: c,
                        mode: u,
                        message: p,
                        debugInfo: g,
                        description: y,
                        warningText: m,
                        items: h,
                        selectionItems: x,
                        showCancel: f,
                        showCloseButton: b,
                        renderDraftCommentIcon: v,
                        icon: j,
                        allowCopy: k,
                        selectType: C
                    } = (0, n(682985).K8)(() => {
                        let {
                            open: e,
                            innerStyle: t,
                            keepFocus: l,
                            mode: o,
                            message: a,
                            debugInfo: s,
                            description: i,
                            warningText: r,
                            items: d,
                            selectionItems: c,
                            showCancel: u,
                            showCloseButton: p,
                            shouldRenderDraftCommentIcon: g,
                            icon: y,
                            allowCopy: m,
                            selectType: h
                        } = n(107333).A.state;
                        return {
                            open: e,
                            innerStyle: t,
                            keepFocus: l,
                            mode: o,
                            message: a,
                            debugInfo: s,
                            description: i,
                            warningText: r,
                            items: d,
                            selectionItems: c,
                            showCancel: u,
                            showCloseButton: p,
                            renderDraftCommentIcon: g,
                            icon: y,
                            allowCopy: m,
                            selectType: h
                        }
                    }, []),
                    w = (0, l.useCallback)(() => {
                        n(647095).zw();
                        let {
                            handleCancel: e
                        } = n(107333).A.state;
                        return e && e(), !1
                    }, []),
                    S = (0, l.useCallback)(() => {
                        let {
                            requiresUserAction: e
                        } = n(107333).A.state;
                        e || w()
                    }, [w]),
                    T = (0, n(83208).X)("update_dialog_styles"),
                    A = (0, n(960253).I)(() => {
                        let e = {
                            width: "100%",
                            ...!T && {
                                marginTop: 8
                            }
                        };
                        return {
                            plainButton: { ...e,
                                marginBottom: "-12px",
                                justifyContent: "center",
                                borderRadius: 6
                            },
                            warningContainer: {
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            },
                            warningText: {
                                width: "100%",
                                textAlign: "center"
                            },
                            button: { ...e,
                                borderRadius: 6
                            },
                            description: {
                                color: n(632079).Tj.text.secondary,
                                ...!T && {
                                    paddingTop: 6,
                                    paddingBottom: 6
                                },
                                textWrap: "pretty"
                            },
                            debugMessage: {
                                paddingTop: 10,
                                fontSize: 12,
                                color: n(632079).Tj.text.tertiary,
                                textAlign: y ? "unset" : "center"
                            },
                            modal: {
                                overflow: "hidden",
                                width: "wide" === u ? 406 : 324,
                                marginInlineStart: 24,
                                marginInlineEnd: 24,
                                padding: 20,
                                boxShadow: n(632079).Tj.shadow.outline.scrim,
                                background: n(632079).Tj.background.elevated,
                                borderRadius: 12,
                                fontSize: 16,
                                alignItems: "center",
                                ...d
                            },
                            message: {
                                textAlign: y ? "unset" : "center",
                                fontWeight: n(699422).Wy.semibold,
                                textWrap: "pretty"
                            },
                            buttonContainer: {
                                display: "flex",
                                flexDirection: "column",
                                ...T ? {
                                    padding: 0,
                                    gap: 8
                                } : {
                                    padding: 0,
                                    gap: 1
                                }
                            }
                        }
                    }, [y, d, u, T]),
                    [I, M] = (0, l.useState)({});
                (0, l.useEffect)(() => {
                    let e = {};
                    null == x || x.forEach(t => {
                        e[t.key] = t.preSelected ? ? !1
                    }), M(e)
                }, [x]);
                let B = (0, l.useCallback)(() => {
                    let l;

                    function a(e, t) {
                        let l = () => {
                                var t;
                                null == (t = e.onClick) || t.call(e), e.onAccept && (e.onAccept(x ? I : void 0), n(647095).zw())
                            },
                            a = 0 === t;
                        return "plain" === e.buttonType ? (0, o.jsx)(n(988022).p, {
                            size: "lg",
                            ariaLabel: e.ariaLabel,
                            autoFocus: a,
                            colorPalette: e.color,
                            style: A.plainButton,
                            className: e.className,
                            onClick: l,
                            children: e.label || "Label"
                        }, t) : "solid" === e.buttonType ? "gray" === e.color ? (0, o.jsx)(n(265779).E, {
                            size: "lg",
                            ariaLabel: e.ariaLabel,
                            autoFocus: a,
                            style: A.button,
                            className: e.className,
                            onClick: l,
                            children: e.label || "Label"
                        }, t) : (0, o.jsx)(n(912946).A, {
                            size: "lg",
                            ariaLabel: e.ariaLabel,
                            autoFocus: a,
                            style: A.button,
                            className: e.className,
                            colorPalette: "red" === e.color ? "red" : "blue",
                            onClick: l,
                            children: e.label || "Label"
                        }, t) : (0, o.jsx)(n(548436).A, {
                            size: e.isSmall ? "sm" : "lg",
                            ariaLabel: e.ariaLabel,
                            style: A.button,
                            colorPalette: "red" === e.color ? "red" : "blue" === e.color ? "blue" : void 0,
                            className: e.className,
                            onClick: l,
                            autoFocus: a,
                            children: e.label || "Label"
                        }, t)
                    }
                    let r = m && h.length > 0 ? [a(h[0], 0), (0, o.jsx)("div", {
                            style: A.warningContainer,
                            children: "string" == typeof m || "number" == typeof m ? (0, o.jsx)(n(111010).D, {
                                styleKey: "captionSmRegular",
                                colorVariant: "tertiary",
                                style: A.warningText,
                                children: m
                            }) : m
                        }, "dialog-warning-text"), ...h.slice(1).map((e, t) => a(e, t + 1))] : h.map((e, t) => a(e, t)),
                        d = (0, o.jsxs)("div", {
                            style: A.buttonContainer,
                            children: [r, f ? (0, o.jsx)(n(548436).A, {
                                size: "lg",
                                style: A.button,
                                onClick: w,
                                children: (0, o.jsx)(n(109939).sA, {
                                    id: "genericDialogModal.cancelButton.label",
                                    defaultMessage: "Cancel"
                                })
                            }) : void 0]
                        }),
                        c = (null == x ? void 0 : x.filter(e => !e.showBelowButtons)) ? ? [],
                        u = c.length > 0 ? (0, o.jsx)(i, {
                            items: c,
                            selectType: C,
                            selectedKeys: I,
                            selectAlignXAxis: "right",
                            setSelectedKeys: M
                        }) : void 0,
                        B = (null == x ? void 0 : x.filter(e => e.showBelowButtons)) ? ? [],
                        R = B.length > 0 ? (0, o.jsx)(i, {
                            items: B,
                            selectType: C,
                            selectedKeys: I,
                            selectAlignXAxis: "right",
                            setSelectedKeys: M
                        }) : void 0;
                    return g && (null != g && g.messagePrefix ? l = `${g.messagePrefix}: ${g.message}` : n(986939).A.isAdminMode && (l = (0, o.jsx)(n(109939).sA, {
                        id: "dialogRenderer.debugMessage.messagePrefix",
                        defaultMessage: "Debug message: {message}",
                        values: {
                            message: g.message
                        }
                    }))), (0, o.jsx)(n(310335).A, {
                        capture: !0,
                        preventType: n(644154).A.All,
                        children: (0, o.jsxs)("div", {
                            style: s.overflowWrap,
                            children: [b ? (0, o.jsx)(n(855353).A, {
                                onClick: S
                            }) : void 0, v ? (0, o.jsx)(n(59557).j, {}) : void 0, j ? (0, o.jsx)("div", {
                                style: s.iconContainer,
                                children: j
                            }) : void 0, k ? (0, o.jsx)(n(281023).k, {
                                enable: !0,
                                shortcuts: {
                                    copy: n(763230).D_
                                },
                                debugName: "DialogRenderer.allowCopy"
                            }) : void 0, T ? (0, o.jsxs)(n(4458).VP, {
                                gap: 24,
                                className: "autolayout-fill-width",
                                style: s.positionRelative,
                                children: [p ? (0, o.jsx)("div", {
                                    style: A.message,
                                    id: e,
                                    children: p
                                }) : void 0, l ? (0, o.jsx)("div", {
                                    style: A.debugMessage,
                                    children: l
                                }) : void 0, y ? (0, o.jsx)("div", {
                                    style: A.description,
                                    id: t,
                                    children: y
                                }) : void 0, u ? (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)(n(884877).A, {
                                        size: 20
                                    }), u, (0, o.jsx)(n(884877).A, {
                                        size: 8
                                    })]
                                }) : void 0, d, R || void 0]
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [p ? (0, o.jsx)("div", {
                                    style: A.message,
                                    id: e,
                                    children: p
                                }) : void 0, l ? (0, o.jsx)("div", {
                                    style: A.debugMessage,
                                    children: l
                                }) : void 0, y ? (0, o.jsx)("div", {
                                    style: A.description,
                                    id: t,
                                    children: y
                                }) : void 0, u ? (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)(n(884877).A, {
                                        size: 20
                                    }), u, (0, o.jsx)(n(884877).A, {
                                        size: 8
                                    })]
                                }) : void 0, d, R ? (0, o.jsx)(o.Fragment, {
                                    children: R
                                }) : void 0]
                            })]
                        })
                    })
                }, [h, f, x, C, I, g, A.message, A.debugMessage, A.description, A.button, A.plainButton, A.buttonContainer, A.warningContainer, A.warningText, b, S, v, j, k, p, m, e, y, t, w, T]);
                return (0, o.jsx)(n(556809).a, {
                    ariaLabelledBy: e,
                    ariaDescribedBy: t,
                    open: r,
                    keepFocus: c,
                    overlayZIndex: a,
                    onDismiss: S,
                    preventHideChildrenWhileOpening: !0,
                    innerStyle: A.modal,
                    children: B()
                })
            }
        },
        545504: (e, t, n) => {
            n.d(t, {
                w: () => l
            });

            function l({
                url: e,
                config: t
            }) {
                let o = (0, n(132702).parseRoute)({
                    url: e,
                    baseUrl: t.domainBaseUrl,
                    publicDomainName: t.publicDomainName,
                    isMobile: !1,
                    protocol: t.protocol,
                    currentUrl: void 0,
                    requestedOnAlternateDomain: t.requestedOnAlternateDomain
                });
                if ("page" === o.name) return o.blockId
            }
        },
        656767: (e, t, n) => {
            n.d(t, {
                R: () => m
            }), n(944114), n(898992), n(672577), n(803949), n(581454), n(737550);
            var l = n(296540),
                o = n(440961),
                a = n(474848);

            function s(e) {
                let {
                    collapseAll: t,
                    collapseAgentMessages: l,
                    uncollapseAll: o,
                    allMessagesCollapsed: s,
                    agentMessagesCollapsed: r,
                    hasCollapsedMessages: d
                } = e, c = "tertiary", u = "secondary";
                return (0, a.jsxs)(n(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    children: [(0, a.jsx)(n(988022).p, {
                        size: "xs",
                        style: i.controlButton,
                        onClick: s ? void 0 : t,
                        "aria-label": s ? "All messages are already collapsed" : "Collapse all messages",
                        disabled: s,
                        colorVariant: s ? c : u,
                        children: "Collapse all"
                    }), (0, a.jsx)(n(988022).p, {
                        size: "xs",
                        style: i.controlButton,
                        onClick: r ? void 0 : l,
                        "aria-label": r ? "All agent messages are already collapsed" : "Collapse only agent and tool messages",
                        disabled: r,
                        colorVariant: r ? c : u,
                        children: "Collapse agent messages"
                    }), (0, a.jsx)(n(988022).p, {
                        size: "xs",
                        style: i.controlButton,
                        onClick: d ? o : void 0,
                        "aria-label": d ? "Expand all messages" : "No messages are collapsed",
                        disabled: !d,
                        colorVariant: d ? u : c,
                        children: "Uncollapse all"
                    })]
                })
            }
            let i = {
                controlButton: {
                    whiteSpace: "nowrap"
                }
            };
            n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(354520), n(908872);
            let r = /"function"\s*:\s*"([^"]+)"/;

            function d(e, t) {
                if ("callFunction" !== e) return e;
                if ("string" == typeof t.content) {
                    let e = t.content.match(r);
                    if (null != e && e[1]) return e[1]
                }
                return e
            }
            let c = {
                chatContainer: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    height: "100%",
                    overflow: "visible",
                    padding: 12
                },
                messageHeader: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 12,
                    fontWeight: n(699422).Wy.semibold,
                    cursor: "pointer",
                    padding: "4px 0",
                    borderRadius: 4
                },
                messageHeaderClickable: {
                    background: "none",
                    border: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "start"
                },
                messageRole: {
                    padding: "2px 6px",
                    borderRadius: 4,
                    fontSize: 10,
                    fontWeight: n(699422).Wy.semibold,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    userSelect: "none"
                },
                systemRole: {
                    backgroundColor: n(632079).Tj.border.secondaryTranslucent,
                    color: n(632079).Tj.text.secondary
                },
                userRole: {
                    backgroundColor: "#2563eb",
                    color: "white"
                },
                assistantRole: {
                    backgroundColor: "#16a34a",
                    color: "white"
                },
                toolResultRole: {
                    backgroundColor: "#ea580c",
                    color: "white"
                },
                toolUseRole: {
                    backgroundColor: "#eab308",
                    color: "white"
                },
                unknownRole: {
                    backgroundColor: n(632079).Tj.text.secondary,
                    color: n(632079).Tj.background.primary
                },
                toolName: {
                    fontWeight: n(699422).Wy.bold,
                    marginInlineStart: 8,
                    color: n(632079).Tj.text.primary
                },
                messageContent: {
                    fontSize: 13,
                    lineHeight: 1.4,
                    color: n(632079).Tj.text.primary,
                    whiteSpace: "pre-wrap",
                    backgroundColor: n(632079).Tj.background.primary,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 4,
                    padding: 8,
                    overflow: "scroll"
                },
                cacheIndicator: {
                    fontSize: 10,
                    color: n(632079).Tj.text.secondary,
                    fontStyle: "italic"
                },
                collapsedIndicator: {
                    fontSize: 10,
                    color: n(632079).Tj.text.secondary,
                    fontStyle: "italic",
                    marginInlineStart: 8,
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer"
                },
                charCountIndicator: {
                    fontSize: 10,
                    color: n(632079).Tj.text.secondary,
                    fontStyle: "italic"
                },
                tokenCountIndicator: {
                    fontSize: 10,
                    color: n(632079).Tj.text.secondary,
                    fontStyle: "italic"
                },
                contentType: {
                    fontSize: 10,
                    color: n(632079).Tj.text.secondary,
                    fontFamily: "monospace"
                },
                style0: {
                    color: "#666",
                    fontStyle: "italic"
                },
                style1: {
                    height: 24
                },
                style2: {
                    border: "none"
                }
            };

            function u(e) {
                let t = new Set;
                return e.forEach((e, n) => {
                    t.add(n)
                }), t
            }

            function p(e) {
                let {
                    messages: t
                } = e, o = l.useRef(t), [s, i] = (0, l.useState)(() => u(t));
                l.useEffect(() => {
                    o.current = t
                }, [t]), l.useEffect(() => {
                    i(u(t))
                }, [t]);
                let r = (0, l.useCallback)(e => {
                        i(t => {
                            let n = new Set(t);
                            return n.has(e) ? n.delete(e) : n.add(e), n
                        })
                    }, []),
                    p = (0, l.useCallback)(() => {
                        let e = new Set;
                        o.current.forEach((t, n) => {
                            e.add(n)
                        }), i(e)
                    }, []),
                    g = (0, l.useCallback)(() => {
                        let e = new Set;
                        o.current.forEach((t, n) => {
                            let l = t.type.toLowerCase();
                            ("assistant" === l || "system" === l) && e.add(n), "content" in t && Array.isArray(t.content) && t.content.some(e => "tool_result" === e.type || "tool_use" === e.type) && e.add(n)
                        }), i(e)
                    }, []),
                    y = (0, l.useCallback)(() => {
                        i(new Set)
                    }, []),
                    m = s.size > 0,
                    h = (0, l.useMemo)(() => t.some((e, t) => !s.has(t)), [t, s]),
                    x = (0, l.useMemo)(() => {
                        let e = !1,
                            n = !1;
                        return t.forEach((t, l) => {
                            let o = t.type.toLowerCase(),
                                a = "content" in t && Array.isArray(t.content) && t.content.some(e => "tool_result" === e.type || "tool_use" === e.type),
                                i = "assistant" === o || "system" === o || a,
                                r = s.has(l);
                            i && !r && (e = !0), !i && r && (n = !0)
                        }), e || n
                    }, [t, s]),
                    {
                        onCollapseStateChange: f
                    } = e,
                    b = l.useRef(f),
                    v = l.useRef(void 0);
                l.useEffect(() => {
                    b.current = f
                }, [f]), l.useLayoutEffect(() => {
                    let e = b.current;
                    if (!e) return;
                    let t = {
                            collapseAll: p,
                            collapseAgentMessages: g,
                            uncollapseAll: y,
                            allMessagesCollapsed: !h,
                            agentMessagesCollapsed: !x,
                            hasCollapsedMessages: m
                        },
                        n = v.current;
                    n && n.allMessagesCollapsed === t.allMessagesCollapsed && n.agentMessagesCollapsed === t.agentMessagesCollapsed && n.hasCollapsedMessages === t.hasCollapsedMessages && n.collapseAll === t.collapseAll && n.collapseAgentMessages === t.collapseAgentMessages && n.uncollapseAll === t.uncollapseAll || (v.current = t, e(t))
                }, [p, g, y, h, x, m]);
                let j = (e, t = !1, n) => {
                        if (t && n) switch (n) {
                            case "tool_result":
                                return { ...c.messageRole,
                                    ...c.toolResultRole
                                };
                            case "tool_use":
                                return { ...c.messageRole,
                                    ...c.toolUseRole
                                };
                            default:
                                return { ...c.messageRole,
                                    ...c.unknownRole
                                }
                        }
                        switch (e.toLowerCase()) {
                            case "system":
                                return { ...c.messageRole,
                                    ...c.systemRole
                                };
                            case "user":
                                return { ...c.messageRole,
                                    ...c.userRole
                                };
                            case "assistant":
                                return { ...c.messageRole,
                                    ...c.assistantRole
                                };
                            default:
                                return { ...c.messageRole,
                                    ...c.unknownRole
                                }
                        }
                    },
                    k = e => {
                        try {
                            if ("tool_use" === e.type) return JSON.stringify(JSON.parse(e.content), null, 2)
                        } catch (e) {}
                        return "content" in e ? e.content : JSON.stringify(e, null, 2)
                    };
                return t && 0 !== t.length ? (0, a.jsxs)("div", {
                    style: c.chatContainer,
                    children: [t.map((e, t) => {
                        var o, i, u, p, g;
                        let y = s.has(t),
                            m = function(e) {
                                let {
                                    type: t
                                } = e;
                                if (t && "toolName" in e && e.toolName) return {
                                    type: t,
                                    name: d(e.toolName, e)
                                };
                                if (t && "name" in e && e.name) return {
                                    type: t,
                                    name: d(e.name, e)
                                };
                                if (t && "content" in e && Array.isArray(e.content)) {
                                    let n = e.content.filter(e => "tool_result" === e.type || "tool_use" === e.type).map(e => ({
                                        type: e.type,
                                        name: d("name" in e && e.name || "toolName" in e && e.toolName || void 0, e)
                                    }));
                                    if (n.length > 0) return {
                                        type: t,
                                        toolItems: n
                                    }
                                }
                                return {
                                    type: t
                                }
                            }(e),
                            h = "string" == typeof(p = e.content) ? p.length : Array.isArray(p) ? p.reduce((e, t) => e + k(t).length, 0) : 0,
                            x = "approximateTokenCount" in e ? e.approximateTokenCount : void 0;
                        return (0, a.jsxs)(n(4458).VP, {
                            gap: 4,
                            children: [(0, a.jsx)("button", {
                                style: c.messageHeaderClickable,
                                onClick: () => r(t),
                                type: "button",
                                children: (0, a.jsxs)("div", {
                                    style: c.messageHeader,
                                    children: [null != (o = m.toolItems) && o.length ? void 0 : (0, a.jsx)("span", {
                                        style: { ...j(m.type),
                                            ...c.style2
                                        },
                                        children: m.type
                                    }), m.name && !(null != (i = m.toolItems) && i.length) ? (0, a.jsx)("span", {
                                        style: c.toolName,
                                        children: m.name
                                    }) : void 0, null == (u = m.toolItems) ? void 0 : u.map((e, t) => (0, a.jsxs)(l.Fragment, {
                                        children: [(0, a.jsx)("span", {
                                            style: { ...j("", !0, e.type),
                                                border: "none",
                                                marginInlineStart: 8 * (t > 0)
                                            },
                                            children: "tool_result" === e.type ? "Tool result" : "Tool use"
                                        }), e.name ? (0, a.jsx)("span", {
                                            style: c.toolName,
                                            children: e.name
                                        }) : void 0]
                                    }, t)), e.do_cache ? (0, a.jsx)("span", {
                                        style: c.cacheIndicator,
                                        children: "• cached"
                                    }) : void 0, y ? (0, a.jsx)("span", {
                                        style: c.collapsedIndicator,
                                        children: "Collapsed"
                                    }) : void 0, (0, a.jsx)("span", {
                                        style: c.charCountIndicator,
                                        children: `${h.toLocaleString()} chars`
                                    }), "number" == typeof x ? (0, a.jsx)("span", {
                                        style: c.tokenCountIndicator,
                                        children: `• ${x.toLocaleString()} tokens`
                                    }) : void 0]
                                })
                            }), y ? void 0 : "string" == typeof(g = e.content) ? (0, a.jsx)("div", {
                                style: c.messageContent,
                                children: g
                            }) : Array.isArray(g) ? (0, a.jsx)("div", {
                                style: c.messageContent,
                                children: g.map((e, t) => (0, a.jsxs)(n(4458).VP, {
                                    gap: 4,
                                    marginBottom: 8,
                                    children: [(0, a.jsxs)("div", {
                                        style: c.contentType,
                                        children: ["Type: ", e.type, "name" in e ? `: ${e.name}` : "", "toolName" in e ? `: ${e.toolName}` : ""]
                                    }), (0, a.jsx)("div", {
                                        children: k(e)
                                    })]
                                }, t))
                            }) : (0, a.jsx)("div", {
                                style: c.messageContent,
                                children: "Invalid content format"
                            })]
                        }, t)
                    }), (0, a.jsx)("div", {
                        style: c.style1,
                        children: " "
                    })]
                }) : (0, a.jsx)("div", {
                    style: c.chatContainer,
                    children: (0, a.jsx)("div", {
                        style: c.style0,
                        children: "No messages to display - currently not supported for live transcripts, you may need to load from a log"
                    })
                })
            }
            let g = {
                backdrop: {
                    position: "fixed",
                    top: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20
                },
                dialogContainer: {
                    width: "95vw",
                    maxWidth: 1400,
                    height: "90vh",
                    backgroundColor: n(632079).Tj.background.primary,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 8,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    position: "relative"
                },
                header: {
                    padding: "16px 20px",
                    borderBottom: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    fontSize: 16,
                    fontWeight: n(699422).Wy.semibold,
                    color: n(632079).Tj.text.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                headerTitle: {
                    flex: "0 0 auto"
                },
                content: {
                    display: "flex",
                    height: "100%",
                    overflow: "hidden"
                },
                leftPanel: {
                    flex: "0 0 60%",
                    display: "flex",
                    flexDirection: "column",
                    borderInlineEnd: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    minWidth: 0
                },
                rightPanel: {
                    flex: "0 0 40%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "auto",
                    padding: "16px 20px",
                    gap: 16,
                    minWidth: 0
                },
                transcriptContainer: {
                    flex: 1,
                    overflow: "auto",
                    padding: "16px 20px",
                    minHeight: 0
                },
                sectionTitle: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.semibold,
                    color: n(632079).Tj.text.primary,
                    borderBottom: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    paddingBottom: 4
                },
                toggle: {
                    border: "none",
                    padding: 0,
                    margin: 0
                },
                metadataGrid: {
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                    gap: "8px 16px",
                    fontSize: 12,
                    fontFamily: "monospace"
                },
                metadataKey: {
                    color: n(632079).Tj.text.secondary,
                    fontWeight: n(699422).Wy.semibold
                },
                metadataValue: {
                    color: n(632079).Tj.text.primary,
                    wordBreak: "break-all"
                },
                braintrustLink: {
                    color: n(632079).Tj.text.primary,
                    textDecoration: "underline",
                    cursor: "pointer",
                    wordBreak: "break-all"
                },
                inferencePickerButton: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    paddingInlineStart: 6,
                    paddingInlineEnd: 6,
                    paddingTop: 2,
                    paddingBottom: 2,
                    borderRadius: 4
                },
                inferencePickerLabel: {
                    fontSize: 12,
                    color: n(632079).Tj.text.secondary
                },
                inferencePickerValue: {
                    fontSize: 12,
                    fontWeight: n(699422).Wy.semibold,
                    color: n(632079).Tj.text.primary
                },
                inferencePickerChevron: {
                    display: "flex",
                    alignItems: "center"
                },
                style0: {
                    fontSize: 10,
                    fontWeight: n(699422).Wy.bold,
                    color: "#666"
                },
                style1: {
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: 0,
                    margin: 0,
                    flexGrow: 1,
                    textAlign: "start",
                    display: "flex"
                },
                style2: {
                    background: "none",
                    border: "none",
                    padding: 0,
                    textAlign: "start",
                    font: "inherit"
                }
            };

            function y(e) {
                let {
                    options: t,
                    selectedOption: l,
                    onSelect: o,
                    label: s
                } = e;
                return (0, a.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "end",
                    overlayContainerZIndex: n(455852).k + 1,
                    popupWrapStyle: {
                        zIndex: n(455852).k + 1
                    },
                    content: e => (0, a.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        children: (0, a.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "inference-options",
                                render: e => (0, a.jsx)(n(844565).A, { ...e
                                }),
                                items: t.map(t => ({
                                    key: t.id,
                                    action: () => {
                                        o(t), e.close()
                                    },
                                    render: e => (0, a.jsx)(n(95582).A, { ...e,
                                        title: t.label,
                                        isChecked: t.id === l.id
                                    })
                                }))
                            }]
                        })
                    }),
                    children: e => (0, a.jsxs)(n(988022).p, { ...e,
                        style: g.inferencePickerButton,
                        children: [(0, a.jsx)("span", {
                            style: g.inferencePickerLabel,
                            children: s
                        }), (0, a.jsx)("span", {
                            style: g.inferencePickerValue,
                            children: l.label
                        }), (0, a.jsx)("span", {
                            style: g.inferencePickerChevron,
                            children: (0, a.jsx)(n(16275).I, {
                                icon: n(469102).arrowChevronSingleDownFillSmallIcon,
                                size: "xxs",
                                colorVariant: "tertiary"
                            })
                        })]
                    })
                })
            }

            function m(e) {
                var t, i, r, d, c, u, m, h;
                let x, f, {
                        inference: b,
                        trigger: v,
                        renderTrigger: j,
                        inferenceOptions: k,
                        selectedInferenceId: C,
                        onSelectInferenceId: w,
                        traceOptions: S,
                        selectedTraceId: T,
                        onSelectTraceId: A,
                        isInferenceLoading: I,
                        selectionLabel: M = "Inference",
                        traceSelectionLabel: B = "Trace",
                        onOpenChange: R
                    } = e,
                    [N, z] = (0, l.useState)(!1),
                    D = (0, l.useRef)(null),
                    [E, _] = (0, l.useState)(void 0),
                    L = (0, l.useMemo)(() => ({
                        collapseAll: () => {},
                        collapseAgentMessages: () => {},
                        uncollapseAll: () => {},
                        allMessagesCollapsed: !1,
                        agentMessagesCollapsed: !1,
                        hasCollapsedMessages: !1
                    }), []),
                    P = E ? ? L,
                    W = (0, l.useMemo)(() => ({
                        id: b.id,
                        label: "Latest"
                    }), [b.id]),
                    V = (0, l.useMemo)(() => k && k.length > 0 ? k : [W], [k, W]),
                    [F, O] = (0, l.useState)(W.id),
                    K = C ? ? F,
                    $ = (0, n(682985).K8)(() => (0, n(909212).Ke)(), []),
                    H = (0, n(109939).tz)(),
                    G = (0, l.useCallback)(() => z(!0), []),
                    U = (0, l.useCallback)(() => z(!1), []);
                (0, l.useEffect)(() => {
                    null == R || R(N)
                }, [N, R]), (0, l.useEffect)(() => () => {
                    null == R || R(!1)
                }, [R]), (0, l.useEffect)(() => {
                    N && void 0 === C && O(W.id)
                }, [W.id, N, C]), (0, l.useEffect)(() => {
                    if (V.length > 0 && !V.some(e => e.id === K)) {
                        let e = V[0].id;
                        void 0 === C && O(e), null == w || w(e)
                    }
                }, [K, C, V, w]);
                let X = (0, l.useMemo)(() => V.find(e => e.id === K) ? ? V[0], [V, K]),
                    J = (0, l.useMemo)(() => {
                        if (S && 0 !== S.length) return S.find(e => e.id === T) ? ? S[0]
                    }, [T, S]),
                    q = (0, l.useCallback)(e => {
                        void 0 === C && O(e.id), null == w || w(e.id)
                    }, [w, C]);
                (0, l.useEffect)(() => {
                    if (!N) return;
                    let e = e => {
                        "Escape" === e.key && U()
                    };
                    return document.addEventListener("keydown", e), D.current && D.current.focus(), () => {
                        document.removeEventListener("keydown", e)
                    }
                }, [N, U]);
                let Y = (0, l.useMemo)(() => b.metadata || {}, [b.metadata]),
                    Z = (0, l.useMemo)(() => {
                        var e, t, l;
                        let o = null == Y || null == (e = Y.modelInfo) ? void 0 : e.notionName;
                        return "string" != typeof o ? (null == Y || null == (l = Y.modelInfo) ? void 0 : l.vendorName) || "N/A" : (0, n(426048).R5)(o) || (0, n(358519).Xj)(n(253700).L, o) ? (0, n(229820).tv)(o, H) : (null == Y || null == (t = Y.modelInfo) ? void 0 : t.vendorName) || o
                    }, [H, null == Y || null == (t = Y.modelInfo) ? void 0 : t.notionName, null == Y || null == (i = Y.modelInfo) ? void 0 : i.vendorName]),
                    Q = (0, l.useMemo)(() => {
                        if (Y.renderedPrompt && Array.isArray(Y.renderedPrompt)) {
                            var e;
                            let t = [...Y.renderedPrompt];
                            return b.expected && t.push({
                                type: "assistant",
                                content: "string" == typeof(e = b.expected) ? e : Array.isArray(e) ? JSON.stringify(e, null, 2) : null == e ? "" : JSON.stringify(e, null, 2),
                                name: "Output"
                            }), t
                        }
                        return null
                    }, [Y, b.expected]),
                    ee = (0, l.useMemo)(() => Y.tools || [], [Y]),
                    et = (0, l.useMemo)(() => Y.compressedUrls ? Array.isArray(Y.compressedUrls) ? Y.compressedUrls : Object.entries(Y.compressedUrls).map(([e, t]) => ({
                        compressedForm: t,
                        expandedUrl: e
                    })) : [], [Y]),
                    en = (0, l.useCallback)(e => {
                        let t = (0, n(998884).WY)({
                            environmentName: "production",
                            suffix: "workflow"
                        });
                        return `https://www.braintrust.dev/app/Notion/p/${t}/logs?r=${e}`
                    }, []),
                    el = (0, l.useCallback)(e => {
                        let t = en(e);
                        window.open(t, "_blank")
                    }, [en]),
                    eo = (0, l.useMemo)(() => {
                        let e = "transcript" in b.input && Array.isArray(b.input.transcript) ? b.input.transcript : void 0,
                            t = new Map;
                        return null == e || e.forEach(e => {
                            "agent-tool-result" === e.type && e.toolName && t.set(e.toolName, (t.get(e.toolName) || 0) + 1)
                        }), t
                    }, [b.input]),
                    ea = N ? (0, a.jsx)("div", {
                        style: g.backdrop,
                        onClick: e => {
                            e.target === e.currentTarget && U()
                        },
                        role: "presentation",
                        children: (0, a.jsx)(n(545028)._b, {
                            zIndex: n(455852).k + 1,
                            children: (0, a.jsx)(n(519451).A, {
                                debugName: "InferenceMetadataDialog",
                                capture: !0,
                                allowEsc: !0,
                                allowSearch: !1,
                                children: (0, a.jsxs)("div", {
                                    ref: D,
                                    style: g.dialogContainer,
                                    role: "dialog",
                                    "aria-label": "Inference Details",
                                    tabIndex: -1,
                                    children: [(0, a.jsxs)("div", {
                                        style: g.header,
                                        children: [(0, a.jsx)("div", {
                                            style: g.headerTitle,
                                            children: "Inference Details"
                                        }), (0, a.jsxs)(n(4458).fI, {
                                            gap: 8,
                                            alignItems: "center",
                                            children: [S && S.length > 1 && J ? (0, a.jsx)(y, {
                                                options: S,
                                                selectedOption: J,
                                                onSelect: e => null == A ? void 0 : A(e.id),
                                                label: B
                                            }) : void 0, V.length > 1 ? (0, a.jsx)(y, {
                                                options: V,
                                                selectedOption: X,
                                                onSelect: q,
                                                label: M
                                            }) : void 0, I ? (0, a.jsx)(n(517334).k, {
                                                size: "sm"
                                            }) : void 0, (0, a.jsx)(s, {
                                                collapseAll: P.collapseAll,
                                                collapseAgentMessages: P.collapseAgentMessages,
                                                uncollapseAll: P.uncollapseAll,
                                                allMessagesCollapsed: P.allMessagesCollapsed,
                                                agentMessagesCollapsed: P.agentMessagesCollapsed,
                                                hasCollapsedMessages: P.hasCollapsedMessages
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        style: g.content,
                                        children: [(0, a.jsx)("div", {
                                            style: g.leftPanel,
                                            children: (0, a.jsx)("div", {
                                                style: g.transcriptContainer,
                                                children: (0, a.jsx)(p, {
                                                    messages: Q ? ? [],
                                                    onCollapseStateChange: _
                                                })
                                            })
                                        }), (0, a.jsxs)("div", {
                                            style: g.rightPanel,
                                            children: [(0, a.jsx)(n(748356).l, {
                                                display: "inline",
                                                tint: "blue",
                                                label: "Debug details",
                                                description: "This contains the raw technical debugging details about how the agent ran, including prompts and tool calls. This can be useful in understanding what went wrong and why."
                                            }), (0, a.jsxs)(n(4458).VP, {
                                                gap: 8,
                                                children: [(0, a.jsx)("div", {
                                                    style: g.sectionTitle,
                                                    children: "Info"
                                                }), (0, a.jsxs)("div", {
                                                    style: g.metadataGrid,
                                                    children: [(0, a.jsx)("div", {
                                                        style: g.metadataKey,
                                                        children: "ID:"
                                                    }), (0, a.jsx)("div", {
                                                        style: g.metadataValue,
                                                        children: b.id || "N/A"
                                                    }), (0, a.jsx)("div", {
                                                        style: g.metadataKey,
                                                        children: "Model:"
                                                    }), (0, a.jsx)("div", {
                                                        style: g.metadataValue,
                                                        children: Z
                                                    }), null != Y && null != (r = Y.completionMetrics) && r.tokens ? (0, a.jsxs)(a.Fragment, {
                                                        children: [(0, a.jsx)("div", {
                                                            style: g.metadataKey,
                                                            children: "Input Tokens:"
                                                        }), (0, a.jsx)("div", {
                                                            style: g.metadataValue,
                                                            children: String(Y.completionMetrics.tokens.inputTokens) || "N/A"
                                                        }), (0, a.jsx)("div", {
                                                            style: g.metadataKey,
                                                            children: "Output Tokens:"
                                                        }), (0, a.jsx)("div", {
                                                            style: g.metadataValue,
                                                            children: String(Y.completionMetrics.tokens.outputTokens) || "N/A"
                                                        })]
                                                    }) : void 0, null != Y && null != (d = Y.completionMetrics) && d.finishReason ? (0, a.jsxs)(a.Fragment, {
                                                        children: [(0, a.jsx)("div", {
                                                            style: g.metadataKey,
                                                            children: "Finish Reason:"
                                                        }), (0, a.jsx)("div", {
                                                            style: g.metadataValue,
                                                            children: (x = String(Y.completionMetrics.finishReason), f = null == Y || null == (h = Y.completionMetrics) ? void 0 : h.toolName, "tool_use" === x && f ? `${x}: ${f}` : x)
                                                        })]
                                                    }) : void 0]
                                                })]
                                            }), $ ? (0, a.jsxs)(n(4458).VP, {
                                                gap: 8,
                                                children: [(0, a.jsx)("div", {
                                                    style: g.sectionTitle,
                                                    children: "Notion internal"
                                                }), (0, a.jsxs)("div", {
                                                    style: g.metadataGrid,
                                                    children: [(0, a.jsx)("div", {
                                                        style: g.metadataKey,
                                                        children: "Input Type:"
                                                    }), (0, a.jsx)("div", {
                                                        style: g.metadataValue,
                                                        children: (null == (c = b.input) ? void 0 : c.type) || "N/A"
                                                    }), (0, a.jsx)("div", {
                                                        style: g.metadataKey,
                                                        children: "Model (internal):"
                                                    }), (0, a.jsx)("div", {
                                                        style: g.metadataValue,
                                                        children: (null == Y || null == (u = Y.modelInfo) ? void 0 : u.notionName) || (null == Y || null == (m = Y.modelInfo) ? void 0 : m.vendorName) || "N/A"
                                                    }), (0, a.jsx)("div", {
                                                        style: g.metadataKey,
                                                        children: "AI Session ID:"
                                                    }), (0, a.jsx)("div", {
                                                        style: g.metadataValue,
                                                        children: null != Y && Y.aiSessionId ? String(Y.aiSessionId) : "N/A"
                                                    }), (0, a.jsx)("div", {
                                                        style: g.metadataKey,
                                                        children: "AI Trace ID:"
                                                    }), null != Y && Y.aiTraceId ? (0, a.jsx)("button", {
                                                        style: { ...g.braintrustLink,
                                                            ...g.style2
                                                        },
                                                        onClick: () => el(String(Y.aiTraceId)),
                                                        title: "Click to open in Braintrust",
                                                        type: "button",
                                                        children: String(Y.aiTraceId)
                                                    }) : (0, a.jsx)("div", {
                                                        style: g.metadataValue,
                                                        children: "N/A"
                                                    })]
                                                })]
                                            }) : void 0, ee && ee.length > 0 ? (0, a.jsxs)(n(4458).VP, {
                                                gap: 8,
                                                children: [(0, a.jsx)("div", {
                                                    style: g.sectionTitle,
                                                    children: "Tools"
                                                }), (0, a.jsx)(n(4458).VP, {
                                                    gap: 2,
                                                    children: ee.map((e, t) => {
                                                        let l = (null == e ? void 0 : e.name) || `Tool ${t+1}`,
                                                            o = eo.get(l) || 0;
                                                        return (0, a.jsx)(n(479854).b, {
                                                            label: l,
                                                            right: o > 0 ? (0, a.jsx)("span", {
                                                                style: g.style0,
                                                                children: 1 === o ? "(ran)" : `(ran x${o})`
                                                            }) : void 0,
                                                            style: g.toggle,
                                                            defaultOpen: !1,
                                                            children: (0, a.jsx)(n(140102).X, {
                                                                language: "json",
                                                                value: JSON.stringify(e, null, 2)
                                                            })
                                                        }, t)
                                                    })
                                                })]
                                            }) : void 0, $ ? (0, a.jsxs)(n(4458).VP, {
                                                gap: 8,
                                                children: [(0, a.jsx)("div", {
                                                    style: g.sectionTitle,
                                                    children: "Raw Values"
                                                }), (0, a.jsx)(n(479854).b, {
                                                    label: "Input",
                                                    style: g.toggle,
                                                    defaultOpen: !1,
                                                    children: (0, a.jsx)(n(140102).X, {
                                                        language: "json",
                                                        value: JSON.stringify(b.input, null, 2)
                                                    })
                                                }), b.expected ? (0, a.jsx)(n(479854).b, {
                                                    label: "Output",
                                                    style: g.toggle,
                                                    defaultOpen: !1,
                                                    children: (0, a.jsx)(n(140102).X, {
                                                        language: "json",
                                                        value: JSON.stringify(b.expected, null, 2)
                                                    })
                                                }) : void 0, Y && Object.keys(Y).length > 0 ? (0, a.jsx)(n(479854).b, {
                                                    label: "Raw Metadata",
                                                    style: g.toggle,
                                                    defaultOpen: !1,
                                                    children: (0, a.jsx)(n(140102).X, {
                                                        language: "json",
                                                        value: JSON.stringify(Y, null, 2)
                                                    })
                                                }) : void 0]
                                            }) : void 0, et.length > 0 ? (0, a.jsxs)(n(4458).VP, {
                                                gap: 8,
                                                children: [(0, a.jsx)("div", {
                                                    style: g.sectionTitle,
                                                    children: "Compressed URLs"
                                                }), (0, a.jsx)("div", {
                                                    style: g.metadataGrid,
                                                    children: et.map(({
                                                        compressedForm: e,
                                                        expandedUrl: t
                                                    }) => (0, a.jsxs)(l.Fragment, {
                                                        children: [(0, a.jsx)("div", {
                                                            style: g.metadataKey,
                                                            children: `${e}:`
                                                        }), (0, a.jsx)("div", {
                                                            style: g.metadataValue,
                                                            children: t
                                                        })]
                                                    }, e))
                                                })]
                                            }) : void 0]
                                        })]
                                    })]
                                })
                            })
                        })
                    }) : null,
                    es = j ? j({
                        onClick: G
                    }) : v ? (0, a.jsx)("button", {
                        onClick: G,
                        style: g.style1,
                        type: "button",
                        "aria-label": "Open inference metadata dialog",
                        children: v
                    }) : null;
                return es ? (0, a.jsxs)(a.Fragment, {
                    children: [es, ea ? (0, o.createPortal)(ea, document.querySelector(".notion-app-inner") ? ? document.body) : void 0]
                }) : null
            }
        },
        766970: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => l,
                xMarkFillIcon: () => o
            }), n(296540);
            let l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                o = (0, n(104509).wt)("xMarkFill", l, "fill")
        },
        828294: (e, t, n) => {
            function l(e) {
                let t = (0, n(83208).X)(e);
                return "on" === (0, n(604306).r)("agent_writer_custom_skills") || t
            }

            function o(e) {
                return "on" === n(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || n(218744).default.checkGate({
                    gateName: e
                })
            }
            n.d(t, {
                N: () => l,
                a: () => o
            })
        },
        855353: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var l = n(474848);
            let o = {
                button: {
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "transparent"
                },
                buttonHovered: {
                    background: n(632079).Tj.buttonHoveredBackground
                },
                icon: {
                    width: n(104509).Ev.xs,
                    height: n(104509).Ev.xs
                }
            };

            function a(e) {
                let {
                    top: t,
                    right: a,
                    onClick: s,
                    ariaLabel: i,
                    tooltipEvents: r
                } = e, d = (0, n(109939).tz)(), c = (0, n(960253).I)(() => ({
                    buttonBackground: {
                        position: "absolute",
                        top: t ? ? 12,
                        insetInlineEnd: a ? ? 12,
                        width: 22,
                        height: 22,
                        borderRadius: "100%",
                        background: n(632079).Tj.background.elevated
                    }
                }), [t, a]);
                return (0, l.jsx)("div", {
                    style: c.buttonBackground,
                    children: (0, l.jsx)(n(374533).A, {
                        ariaLabel: i ? ? d.formatMessage({
                            id: "closeButton.ariaLabel",
                            defaultMessage: "Close"
                        }),
                        style: o.button,
                        hoveredStyle: o.buttonHovered,
                        onClick: s,
                        icon: n(519529).xMarkFillSmallIcon,
                        iconStyle: o.icon,
                        ...r
                    })
                })
            }
        },
        862215: (e, t, n) => {
            n.d(t, {
                G: () => l
            });

            function l(e, t) {
                let {
                    device: n
                } = e;
                n.isAndroid && t.focus(), t.select()
            }
        },
        884877: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(296540);
            var l = n(474848);

            function o(e) {
                let t = {
                    display: "inline-block",
                    minWidth: e.size,
                    minHeight: e.size
                };
                return "x" === e.axis ? t.minHeight = 1 : "y" === e.axis && (t.minWidth = 1), (0, l.jsx)("div", {
                    style: t
                })
            }
        },
        921048: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => l,
                magnifyingGlassSmallIcon: () => o
            }), n(296540);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.97 12.46 12.46",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.1 1.975a5.125 5.125 0 1 0 3.155 9.164l3.107 3.107a.625.625 0 1 0 .884-.884l-3.107-3.107A5.125 5.125 0 0 0 7.1 1.975M3.225 7.1a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                    })
                },
                o = (0, n(104509).wt)("magnifyingGlassSmall", l, "small")
        },
        937776: (e, t, n) => {
            n.d(t, {
                B: () => a
            }), n(296540);
            var l = n(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, l.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                a = (0, n(104509).wt)("archiveBox", o, "default")
        }
    }
]);