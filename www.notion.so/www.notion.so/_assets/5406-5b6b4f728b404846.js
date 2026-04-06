"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [5406], {
        3375: (e, t, r) => {
            r.d(t, {
                X: () => o
            }), r(296540);
            var n = r(474848);
            let a = (0, r(109939).YK)({
                    compactedStepTitle: {
                        id: "aiInferenceTranscript.compactedTranscriptStep.title",
                        defaultMessage: "Made room for more conversation"
                    }
                }),
                i = {
                    summaryBubble: {
                        padding: "8px 12px",
                        border: `1px solid ${r(632079).Tj.border.secondaryTranslucent}`,
                        borderRadius: 12,
                        backgroundColor: r(632079).Tj.background.secondary,
                        maxHeight: 175,
                        overflowY: "auto"
                    }
                };

            function o(e) {
                let {
                    summary: t
                } = e;
                return (0, n.jsx)(r(374201).K, {
                    icon: r(529752).k,
                    title: (0, n.jsx)(r(109939).sA, { ...a.compactedStepTitle
                    }),
                    isExpandable: !0,
                    hideIcon: !0,
                    content: (0, n.jsx)("div", {
                        style: i.summaryBubble,
                        children: (0, n.jsx)(r(212024).h, {
                            markdown: t
                        })
                    })
                })
            }
        },
        22157: (e, t, r) => {
            r.d(t, {
                BE: () => s,
                Of: () => l,
                bM: () => o
            }), r(944114), r(296540);
            var n = r(474848);

            function a(e) {
                if (!(0, r(722371).Gv)(e)) return;
                let t = e.address,
                    n = e.name;
                if ("string" == typeof t && (void 0 === n || "string" == typeof n)) return {
                    address: t,
                    name: "string" == typeof n ? n : void 0
                }
            }

            function i(e) {
                if (!Array.isArray(e)) return;
                let t = [];
                for (let r of e) {
                    let e = a(r);
                    if (void 0 === e) return;
                    t.push(e)
                }
                return t.length > 0 ? t : void 0
            }

            function o(e) {
                let t = e.subject,
                    r = e.to,
                    n = e.from,
                    o = e.cc,
                    s = e.bcc,
                    l = e.text,
                    c = i(n);
                return {
                    from: void 0 !== c ? c[0] : a(n),
                    to: i(r),
                    cc: i(o),
                    bcc: i(s),
                    subject: "string" == typeof t ? t : void 0,
                    text: "string" == typeof l ? l : void 0
                }
            }

            function s(e) {
                let t = e.input;
                if (t && (0, r(722371).Gv)(t)) {
                    if ("from" in t || "to" in t) return o(t);
                    if ("args" in t && (0, r(722371).Gv)(t.args)) {
                        let e = t.args;
                        if ("toolArguments" in e && (0, r(722371).Gv)(e.toolArguments)) return o(e.toolArguments);
                        if ("from" in e || "to" in e) return o(e)
                    }
                }
                let n = e.result;
                if (n && (0, r(722371).Gv)(n)) {
                    let e = Reflect.get(n, "emailPreview");
                    if ((0, r(722371).Gv)(e)) return o(e)
                }
            }

            function l(e) {
                let {
                    toolResultStep: t
                } = e;
                if (!t) return;
                let a = t.toolType,
                    i = t.toolName ? ? (0, r(786380).yU)(a);
                if ((0, r(786380).D9)(i)) {
                    let e = s(t),
                        a = [];
                    if (!e) return;
                    return a.push({
                        key: `mail-compose-${t.id}`,
                        render: t => (0, n.jsx)(r(861873).$, {
                            from: e.from,
                            to: e.to,
                            cc: e.cc,
                            bcc: e.bcc,
                            subject: e.subject,
                            text: e.text
                        }),
                        action: () => {}
                    }), [{
                        key: `mail-tool-${t.id}`,
                        render: e => (0, n.jsx)(r(844565).A, { ...e,
                            disableDesktopPadding: !0
                        }),
                        items: a
                    }]
                }
            }
        },
        22262: (e, t, r) => {
            r.d(t, {
                Q: () => a
            }), r(296540);
            var n = r(474848);

            function a(e) {
                let t = (0, r(960253).e)(),
                    a = (0, r(960253).I)(() => ({
                        container: {
                            boxShadow: e.isFocused ? `0px 0px 0px 1px ${r(632079).Tj.blue.border.accentPrimary}, 0px 0px 0px 3px ${r(632079).Tj.blue.border.strong}` : `0px 0px 0px 1px ${r(632079).Tj.border.secondary}, 0 1px 3px rgba(0, 0, 0, 0.06)`,
                            backgroundColor: "dark" === t ? r(632079).Tj.palette.translucentGray[100] : r(632079).Tj.background.primary,
                            borderRadius: 8,
                            ...e.style
                        }
                    }), [e.style, e.isFocused, t]);
                return (0, n.jsx)("div", {
                    style: a.container,
                    children: e.children
                })
            }
        },
        46552: (e, t, r) => {
            r.d(t, {
                P: () => a
            }), r(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.37 6.08 19.25 8.5",
                    svg: (0, r(474848).jsx)("path", {
                        fillRule: "evenodd",
                        d: "M14.5 6.081c1.576 0 2.938.968 3.59 2.375H19a.625.625 0 0 1 0 1.25h-.543q.042.307.043.625c0 2.347-1.79 4.25-4 4.25s-4-1.903-4-4.25q.001-.547.124-1.056a1.53 1.53 0 0 0-1.249 0q.123.507.125 1.056c0 2.347-1.79 4.25-4 4.25s-4-1.903-4-4.25q0-.319.043-.625H1a.625.625 0 0 1 0-1.25h.91c.652-1.407 2.014-2.375 3.59-2.375 1.444 0 2.709.814 3.412 2.033a2.78 2.78 0 0 1 2.174 0c.703-1.22 1.97-2.033 3.414-2.033m-9 1.25c-1.448 0-2.75 1.27-2.75 3s1.302 3 2.75 3 2.75-1.27 2.75-3-1.302-3-2.75-3m9 0c-1.448 0-2.75 1.27-2.75 3s1.302 3 2.75 3 2.75-1.27 2.75-3-1.302-3-2.75-3",
                        clipRule: "evenodd"
                    })
                },
                a = (0, r(104509).wt)("eyeglasses", n, "default")
        },
        75224: (e, t, r) => {
            r.d(t, {
                N: () => i
            }), r(296540);
            var n = r(474848);
            let a = {
                icon: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: r(265035).SCROLLING_SQUIGGLE_DEFAULTS.height,
                    width: r(265035).SCROLLING_SQUIGGLE_DEFAULTS.width,
                    flexShrink: 0
                },
                iconHidden: {
                    display: "none"
                }
            };

            function i({
                icon: e,
                title: t,
                colorVariant: o = "secondary",
                variant: s = "default",
                hideIcon: l = !1
            }) {
                let {
                    bodyStyleKey: c
                } = (0, r(765846).yq)(), d = (0, r(765846).Cd)(c), u = (0, r(960253).I)(() => ({
                    container: {
                        display: "flex",
                        alignItems: "center",
                        gap: l ? 4 : 8,
                        paddingInlineStart: 4 * !!l
                    },
                    title: {
                        overflow: "hidden",
                        minWidth: 0,
                        flex: 1,
                        color: r(632079).Tj.text[o],
                        ...r(649316).U.bodyRegular,
                        ...d,
                        userSelect: "text"
                    }
                }), [o, l, d]);
                return (0, n.jsxs)("div", {
                    style: u.container,
                    children: [(0, n.jsx)("div", {
                        style: l ? a.iconHidden : a.icon,
                        children: l ? null : "function" == typeof e ? (0, n.jsx)(r(16275).I, {
                            icon: e,
                            size: "large" === s ? "default" : "sm",
                            colorVariant: o
                        }) : e
                    }), (0, n.jsx)("div", {
                        style: u.title,
                        children: t
                    })]
                })
            }
        },
        190841: (e, t, r) => {
            r.d(t, {
                Z: () => i
            }), r(296540);
            var n = r(474848);
            let a = {
                position: "relative",
                maxWidth: "80%",
                paddingTop: 4,
                marginTop: -4,
                background: "transparent"
            };

            function i(e) {
                let {
                    step: t,
                    threadStore: i
                } = e, o = (0, r(109939).tz)(), s = (0, r(682985).K8)(() => {
                    let e = r(728372).AppStoreSidebarSpaceStore.state;
                    if (!(!e || !t.parentAgentId || (0, r(697006).ut)(t.parentAgentId))) return r(360851).N.createChildStore(e, {
                        table: r(832375).C0E,
                        id: t.parentAgentId,
                        spaceId: e.id
                    })
                }, [t.parentAgentId]), l = (0, r(682985).K8)(() => t.parentAgentId === r(180139).Lj ? o.formatMessage({
                    id: "AgentMessageStep.personalAgent",
                    defaultMessage: "Personal Agent"
                }) : (null == s ? void 0 : s.getName()) ? ? "Agent", [s, t.parentAgentId, o]), c = 0 === (0, r(247438).AhH)(t.value), d = (0, r(284376).gg)({
                    threadStore: i,
                    step: t
                }), {
                    bodyStyleKey: u
                } = (0, r(765846).yq)(), p = (0, r(765846).Cd)(u), g = (0, r(960253).I)(() => ({
                    bubble: { ...p,
                        paddingTop: 6,
                        paddingBottom: 6,
                        paddingInlineStart: 14,
                        paddingInlineEnd: 14,
                        borderRadius: 18,
                        backgroundColor: r(632079).Tj.background.tertiaryTranslucent,
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                        transition: "background-color 0.1s ease"
                    }
                }), [p]);
                return c ? null : (0, n.jsxs)(r(4458).VP, {
                    alignItems: "flex-start",
                    gap: 4,
                    marginBottom: 16,
                    children: [(0, n.jsx)(r(821480).U, {
                        type: "agent",
                        workflowStore: s,
                        displayName: l
                    }), (0, n.jsx)(r(4458).fI, {
                        alignItems: "start",
                        gap: 8,
                        width: "100%",
                        children: (0, n.jsx)("div", {
                            style: a,
                            children: (0, n.jsx)("div", {
                                style: g.bubble,
                                children: d
                            })
                        })
                    })]
                })
            }
        },
        207966: (e, t, r) => {
            r.d(t, {
                o: () => n
            });

            function n(e) {
                var t, n;
                if (e) return (0, r(16712).kw)({
                    publishedModules: null == (t = e.getPublishedArtifactStore()) || null == (t = t.getData()) ? void 0 : t.modules,
                    draftModules: null == (n = e.getDraftData()) ? void 0 : n.modules
                })
            }
        },
        284376: (e, t, r) => {
            r.d(t, {
                IT: () => s,
                gg: () => c
            }), r(898992), r(672577);
            var n = r(296540),
                a = r(474848);
            let i = {
                    position: "relative",
                    maxWidth: "80%",
                    paddingTop: 4,
                    marginTop: -4,
                    background: "transparent"
                },
                o = {
                    width: 24,
                    height: 24
                };

            function s(e) {
                let {
                    step: t,
                    clientStore: s,
                    threadStore: d,
                    runningInference: u,
                    useAgentFontSizing: p,
                    autoScrollUserStepId: g
                } = e, f = (0, r(533992).v3)(), m = (0, r(109939).tz)(), h = !f.currentUser.id || t.userId === f.currentUser.id, y = (0, r(682985).K8)(() => (0, r(974410).f)(d), [d]), x = (0, r(682985).K8)(() => {
                    if (y && t.userId) return r(807825).L.createChildStore(y, {
                        table: r(832375).oo9,
                        id: t.userId
                    })
                }, [y, t.userId]), v = (0, r(682985).K8)(() => null == x ? void 0 : x.getDisplayName(m), [x, m]), b = (0, r(682985).K8)(() => {
                    var e;
                    return (null == (e = (0, r(187353).L2)(d)) ? void 0 : e.type) === "search"
                }, [d]), j = (0, r(682985).K8)(() => {
                    var e;
                    return (null == (e = (0, r(187353).L2)(d)) ? void 0 : e.type) === "researcher"
                }, [d]), S = (0, r(682985).K8)(() => {
                    var e;
                    return (null == (e = (0, r(187353).L2)(d)) ? void 0 : e.type) === "markdown-chat"
                }, [d]), {
                    bodyStyleKey: k
                } = (0, r(765846).yq)(), I = p ? (0, r(765846).Cd)(k) : void 0, [w, T] = (0, n.useState)(!1), [C, M] = (0, n.useState)(!1), A = (0, n.useRef)(null), R = (0, r(960253).I)(() => ({
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: h ? "flex-end" : "flex-start"
                    },
                    messageRow: {
                        display: "flex",
                        alignItems: "start",
                        gap: 8,
                        width: "100%",
                        justifyContent: h ? "flex-end" : "flex-start"
                    },
                    bubble: {
                        paddingTop: 6,
                        paddingBottom: 6,
                        paddingInlineStart: h ? 14 : 4,
                        paddingInlineEnd: h ? 14 : 4,
                        borderRadius: 18 * !!h,
                        ...h && {
                            backgroundColor: r(632079).Tj.background.tertiaryTranslucent
                        },
                        ...I,
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                        transition: "background-color 0.1s ease",
                        ...w && h && {
                            backgroundColor: r(632079).Tj.background.tertiaryTranslucent
                        }
                    },
                    actionsRow: {
                        position: "absolute",
                        transform: "translateY(-100%)",
                        top: 0,
                        insetInlineEnd: 0,
                        display: "flex",
                        gap: 2,
                        boxShadow: `0 0 0 0.5px ${r(632079).Tj.border.secondary}, 0px 1px 2px 0px rgba(0, 0, 0, 0.04)`,
                        opacity: w || C ? 1 : 0,
                        backgroundColor: r(632079).Tj.background.elevated,
                        borderRadius: 8,
                        padding: 2,
                        zIndex: 1,
                        transition: "opacity 0.2s ease"
                    },
                    stagingAndInputWrap: b ? {
                        borderRadius: 18,
                        paddingTop: 6,
                        paddingBottom: 6,
                        paddingInlineStart: 14,
                        paddingInlineEnd: 14,
                        minHeight: 32
                    } : {},
                    textContainer: b ? {
                        paddingTop: 0,
                        paddingBottom: 0
                    } : {}
                }), [h, w, C, b, I]), P = c({
                    threadStore: d,
                    step: t
                }), N = (0, n.useCallback)(() => {
                    T(!0)
                }, []), F = (0, n.useCallback)(() => {
                    T(!1)
                }, []), V = (0, n.useCallback)(() => {
                    M(!0), T(!1), setTimeout(() => {
                        var e;
                        null == (e = A.current) || e.focus()
                    }, 1)
                }, []), B = (0, n.useCallback)(e => {
                    M(!1), T(!1),
                        function(e) {
                            let {
                                environment: t,
                                threadStore: n,
                                clientStore: a,
                                step: i,
                                newValue: o
                            } = e, s = n.getTranscript().find(e => "user" === e.type), l = (null == s ? void 0 : s.id) === i.id, c = n.getSpaceId(), {
                                serverCommitResult: d
                            } = (0, r(377796).createAndCommit)({
                                userAction: "AIChatTranscript.RunFromStepButton.handleClick",
                                environment: t,
                                cellTarget: c ? {
                                    spaceWithId: c
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, r(757688).D7)({
                                        threadStore: n,
                                        step: i,
                                        newValue: o,
                                        transaction: e
                                    }), (0, r(757688).Pz)({
                                        threadStore: n,
                                        stepId: i.id,
                                        transaction: e
                                    })
                                }
                            });
                            (0, r(757688).WE)({
                                environment: t,
                                threadStore: n,
                                clientStore: a,
                                forceRegenerateTitle: l,
                                stepIdsToInclude: [i.id],
                                waitBeforeSending: d,
                                sendPatchResponse: !0
                            })
                        }({
                            environment: f,
                            threadStore: d,
                            clientStore: s,
                            step: t,
                            newValue: e
                        })
                }, [f, d, s, t]), D = (0, n.useCallback)(() => {
                    if (!d) return;
                    let e = (0, r(536614).r4)(t.value, d),
                        n = (0, r(758654).Gm)({
                            url: `${r(986939).A.domainBaseUrl}${r(168962).JZ.chat}`,
                            query: {
                                [r(737869).ah]: e
                            }
                        });
                    navigator.clipboard.writeText(n).then(() => {
                        r(436555).D6({
                            label: m.formatMessage({
                                id: "aiInferenceTranscript.userStep.linkCopiedToClipboard",
                                defaultMessage: "Link copied to clipboard"
                            }),
                            durationMs: 1e4
                        })
                    })
                }, [m, t.value, d]), {
                    store: E,
                    setValue: z
                } = (0, r(430937).AI)({
                    initialValue: t.value
                }), W = (0, n.useCallback)(() => {
                    M(!1), z(t.value)
                }, [t.value, z]), $ = (0, n.useCallback)(() => {
                    B(E.getValue() || [])
                }, [B, E]);
                return (0, a.jsxs)("div", {
                    style: R.container,
                    "data-agent-chat-user-step-id": g,
                    children: [!h && x && y ? (0, a.jsx)(r(821480).U, {
                        type: "user",
                        userStore: x,
                        spaceStore: y,
                        displayName: v ? ? "",
                        avatarSize: 32,
                        gap: 2
                    }) : void 0, (0, a.jsx)("div", {
                        style: R.messageRow,
                        children: (0, a.jsxs)("div", {
                            style: i,
                            onMouseEnter: N,
                            onMouseLeave: F,
                            children: [C ? (0, a.jsx)(r(834407).k, {
                                onSubmit: $,
                                store: E,
                                textRef: A,
                                fontSize: b || j || S ? 16 : void 0,
                                stagingAndInputWrapStyle: R.stagingAndInputWrap,
                                textContainerStyle: R.textContainer
                            }) : (0, a.jsx)("div", {
                                style: R.bubble,
                                children: P
                            }), (0, a.jsxs)("div", {
                                style: R.actionsRow,
                                children: [h && !C ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(r(374533).A, {
                                        style: o,
                                        icon: r(636).pencilLineIcon,
                                        ariaLabel: m.formatMessage({
                                            id: "aiInferenceTranscript.userStep.editMessage",
                                            defaultMessage: "Edit message"
                                        }),
                                        onClick: V,
                                        disabled: u
                                    }), (0, a.jsx)(r(51831).m, {
                                        content: () => m.formatMessage({
                                            id: "aiInferenceTranscript.userStep.shareMessage",
                                            defaultMessage: "Copy link to message"
                                        }),
                                        children: e => (0, a.jsx)(r(374533).A, {
                                            style: o,
                                            icon: r(687911).Y,
                                            ariaLabel: m.formatMessage({
                                                id: "aiInferenceTranscript.userStep.shareMessage",
                                                defaultMessage: "Copy link to message"
                                            }),
                                            onClick: D,
                                            disabled: u,
                                            ...e
                                        })
                                    })]
                                }) : void 0, C ? (0, a.jsx)(l, {
                                    step: t,
                                    onCancel: W,
                                    onSave: $
                                }) : void 0]
                            })]
                        })
                    })]
                })
            }

            function l(e) {
                let {
                    step: t,
                    onCancel: i,
                    onSave: o
                } = e, s = (0, r(109939).tz)(), {
                    store: l
                } = (0, r(430937).AI)({
                    initialValue: t.value
                }), c = (0, n.useCallback)(() => {
                    o(l.getValue() || [])
                }, [l, o]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r(374533).A, {
                        onClick: i,
                        icon: r(117152).xMarkIcon,
                        ariaLabel: s.formatMessage({
                            id: "aiInferenceTranscript.userStep.cancel",
                            defaultMessage: "Cancel"
                        })
                    }), (0, a.jsx)(r(374533).A, {
                        onClick: c,
                        icon: r(93042).checkmarkCircleFillIcon,
                        ariaLabel: s.formatMessage({
                            id: "aiInferenceTranscript.userStep.save",
                            defaultMessage: "Save"
                        })
                    })]
                })
            }

            function c(e) {
                let {
                    threadStore: t,
                    step: n
                } = e, a = (0, r(533992).v3)(), i = (0, r(960253).e)(), o = (0, r(815048).fJ)(r(406921).V);
                return (0, r(682985).K8)(() => {
                    let e = t.getSpaceId();
                    return e ? (0, r(536614).S5)({
                        environment: a,
                        textValue: {
                            value: n.value || [],
                            spaceId: e
                        },
                        parentStore: t,
                        disableHover: !1,
                        disableStyleAnnotations: !1,
                        disableInsertedDeletedAnnotations: !1,
                        disableDateStyleAnnotations: !1,
                        disableSuggestionAnnotations: !1,
                        disabled: !0,
                        theme: r(632079).Tj,
                        themeMode: i,
                        emojiType: (0, r(591404).FN)(a),
                        katex: o.value,
                        formulaValueTypes: []
                    }) : null
                }, [n.value, a, t, o.value, i], {
                    silenceRerenderDefender: !0
                })
            }
        },
        295555: (e, t, r) => {
            r.d(t, {
                N: () => a
            }), r(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.38 1.92 11.23 12.05",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M5.9 1.925a.575.575 0 0 0 0 1.15h4.2a.575.575 0 1 0 0-1.15zm-1.4 1.75a.575.575 0 0 0 0 1.15h7a.575.575 0 1 0 0-1.15zm-.237 1.7c-1.036 0-1.875.84-1.875 1.875v4.85c0 1.036.84 1.875 1.875 1.875h7.475c1.035 0 1.875-.84 1.875-1.875V7.25c0-1.035-.84-1.875-1.875-1.875zM3.638 7.25c0-.345.28-.625.625-.625h7.475c.345 0 .625.28.625.625v4.85c0 .345-.28.625-.625.625H4.263a.625.625 0 0 1-.625-.625z"
                    })
                },
                a = (0, r(104509).wt)("stackSmall", n, "small")
        },
        300921: (e, t, r) => {
            r.r(t), r.d(t, {
                arrowUpDownIcon: () => a,
                iconDefinition: () => n
            }), r(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.24 3.26 15.53 13.47",
                    directional: !0,
                    svg: (0, r(474848).jsx)("path", {
                        d: "M14.075 3.45a.625.625 0 0 0-.884 0l-3.497 3.5a.625.625 0 0 0 .883.884l2.431-2.431v10.705a.625.625 0 0 0 1.25 0V5.402l2.431 2.43a.625.625 0 1 0 .884-.883zM2.427 12.167a.625.625 0 0 1 .884 0l2.43 2.431V3.893a.625.625 0 0 1 1.25 0v10.705l2.431-2.43a.625.625 0 0 1 .884.883L6.81 16.55a.625.625 0 0 1-.884 0l-3.498-3.498a.625.625 0 0 1 0-.884"
                    })
                },
                a = (0, r(104509).wt)("arrowUpDown", n, "default")
        },
        305406: (e, t, r) => {
            r.d(t, {
                Lm: () => ts,
                ze: () => tN,
                uQ: () => tj,
                zg: () => tA
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(581454);
            var n = r(296540),
                a = r(474848);
            let i = (0, n.createContext)({
                threadId: void 0,
                trackResearchModeStepExpanded: void 0,
                trackResearchModeStepCollapsed: void 0,
                trackResearchModeReportFirstCharRendered: void 0,
                trackResearchModeReportLastCharRendered: void 0,
                trackResearchModeReportCopied: void 0,
                trackResearchModeReportSavedToPage: void 0
            });

            function o({
                children: e,
                threadId: t
            }) {
                let s = (0, r(533992).v3)(),
                    l = (0, n.useRef)(0),
                    c = (0, n.useCallback)(() => {
                        l.current++ < 100 && r(274498).Rk({
                            environment: s,
                            researchModeThreadId: t
                        })
                    }, [t, s]),
                    d = (0, n.useCallback)(() => {
                        l.current++ < 100 && r(274498).hK({
                            environment: s,
                            researchModeThreadId: t
                        })
                    }, [t, s]),
                    u = (0, n.useCallback)(() => {
                        l.current++ < 100 && r(274498).nM({
                            environment: s,
                            researchModeThreadId: t
                        })
                    }, [t, s]),
                    p = (0, n.useCallback)(() => {
                        l.current++ < 100 && r(274498).zJ({
                            environment: s,
                            researchModeThreadId: t
                        })
                    }, [t, s]),
                    g = (0, n.useCallback)(() => {
                        l.current++ < 100 && r(274498).q0({
                            environment: s,
                            researchModeThreadId: t
                        })
                    }, [t, s]),
                    f = (0, n.useCallback)(() => {
                        l.current++ < 100 && r(274498).tK({
                            environment: s,
                            researchModeThreadId: t
                        })
                    }, [t, s]),
                    m = (0, n.useMemo)(() => ({
                        threadId: t,
                        trackResearchModeStepExpanded: c,
                        trackResearchModeStepCollapsed: d,
                        trackResearchModeReportFirstCharRendered: u,
                        trackResearchModeReportLastCharRendered: p,
                        trackResearchModeReportCopied: g,
                        trackResearchModeReportSavedToPage: f
                    }), [t, c, d, u, p, g, f]);
                return (0, a.jsx)(i.Provider, {
                    value: m,
                    children: e
                })
            }

            function s(e) {
                let {
                    clientStore: t
                } = e;
                t.setState({ ...t.state,
                    isAIChatTranscriptSidePanelVisible: !1
                })
            }
            i.displayName = "ResearchModeChatAnalyticsContext";
            let l = {
                alignSelf: "flex-start",
                borderRadius: 100,
                display: "flex",
                padding: "0 14px",
                height: 32
            };

            function c({
                style: e,
                ...t
            }) {
                return (0, a.jsx)(r(912946).A, {
                    style: [l, e],
                    ...t
                })
            }
            let d = {
                padding: 8,
                marginBottom: 20
            };

            function u(e) {
                let {
                    config: t,
                    step: n
                } = e, {
                    featureAvailability: i
                } = n, o = (0, r(622081).bl)(t), s = (0, r(972740).L)(), l = (0, r(83208).X)("upgrade_system_ai"), {
                    upsellMessage: c
                } = (0, r(427724).x)({
                    featureAvailability: i,
                    upsellFrom: o
                }), u = (0, r(340309).o)({
                    featureAvailability: i,
                    source: o,
                    type: "text"
                }), {
                    bodyStyleKey: p
                } = (0, r(765846).yq)(), g = (0, r(765846).Cd)(p), f = (0, r(960253).I)(() => ({
                    wrapper: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 4,
                        ...g,
                        padding: 10
                    }
                }), [g]);
                return (0, a.jsx)(r(22262).Q, {
                    style: d,
                    children: (0, a.jsxs)("div", {
                        style: f.wrapper,
                        children: [l ? u ? (0, a.jsx)(r(754951).UpgradeButton, { ...u
                        }) : null : (0, a.jsx)("div", {
                            children: c
                        }), (0, a.jsx)(r(754951).UpgradeButton, {
                            source: o,
                            upsell: i.upsell,
                            display: "primary",
                            spaceStore: s
                        })]
                    })
                })
            }
            var p = () => r(247438),
                g = () => r(579695);

            function f(e) {
                let {
                    linkAnnotationToCitationAnnotations: t,
                    useExportedCitations: n,
                    getRecordModelFn: a
                } = e, i = 1, o = {}, s = {};
                return e => {
                    if (!p().BEe(e)) return {
                        val: [e],
                        modified: !1
                    };
                    let l = e[1],
                        c = p().VtW(l);
                    if (!c) return {
                        val: [e],
                        modified: !1
                    };
                    let {
                        annotations: d,
                        status: u
                    } = t(c);
                    return "other_link" === u ? {
                        val: [p().Ey_(e[0], [...d, ...l.filter(e => !p().sh$(e))])],
                        modified: !0
                    } : "missing_citation" === u ? {
                        val: [],
                        modified: !0
                    } : {
                        val: d.map(e => {
                            if (p().bZo(e))
                                if (!n) return p().wmz(e);
                                else {
                                    let t, n = p().NpB(e).href;
                                    s[n] ? t = s[n] : (o[t = `${i++}`] = n, s[n] = t);
                                    let l = (0, r(128464)._)({
                                        citationAnnotation: e,
                                        baseUrl: r(986939).A.domainBaseUrl,
                                        getRecordModel: a
                                    });
                                    if (!l) return;
                                    return p().Ey_(`[${t}]`, [p().Sez(l)])
                                }
                        }).filter(e => void 0 !== e),
                        modified: !0
                    }
                }
            }

            function m(e) {
                let {
                    store: t,
                    environment: n,
                    transaction: a,
                    modifyTokens: i
                } = e, o = t.getTitleStore(), s = null == o ? void 0 : o.getValue();
                if (o && void 0 !== s) {
                    let e = p().RQ(s).map(i),
                        t = e.map(e => e.val).flat(),
                        l = e.map(e => e.modified).some(Boolean),
                        c = y(t);
                    l && r(41403).R9({
                        environment: n,
                        store: o,
                        value: c,
                        transaction: a
                    })
                }
                let l = t.getProperties();
                l && Object.entries(l).forEach(([e, o]) => {
                    if ("title" === e) return;
                    let s = p().RQ(o).map(i),
                        l = s.map(e => e.val).flat(),
                        c = s.map(e => e.modified).some(Boolean),
                        d = y(l);
                    if (c) {
                        let i = t.getPropertyStore(e);
                        if (!i) return;
                        r(41403).R9({
                            environment: n,
                            store: i,
                            value: d,
                            transaction: a
                        })
                    }
                });
                let c = t.getContentStores();
                c && c.forEach(e => m({
                    store: e,
                    environment: n,
                    transaction: a,
                    modifyTokens: i
                }))
            }

            function h(e) {
                let {
                    markdown: t,
                    environment: n,
                    linkAnnotationToCitationAnnotations: a,
                    useExportedCitations: i,
                    markdownLinkifyIt: o,
                    tinyMceMicrosoftWordPasteFilter: s,
                    clipboardActions: l
                } = e, c = new(r(870941)).A({
                    name: "AIChatTranscript.MarkdownChatStep",
                    isTemporaryData: !0,
                    isSyntheticAssistantData: !0
                }), d = c.makeGetRecordModelFn(n.currentUser.id), u = (0, r(377796).createAndCommit)({
                    userAction: "AIChatTranscript.MarkdownChatStep.markdownToBlocks",
                    environment: n,
                    cellTarget: void 0,
                    canUndo: !1,
                    perform: e => {
                        let u = l.markdownToBlocks({
                            environment: n,
                            text: t,
                            inMemoryRecordCache: c,
                            transaction: e,
                            markdownOptions: {},
                            markdownLinkifyIt: o,
                            tinyMceMicrosoftWordPasteFilter: s,
                            ignoreImages: !0
                        });
                        if (!u) return;
                        let p = f({
                            linkAnnotationToCitationAnnotations: a,
                            useExportedCitations: i,
                            getRecordModelFn: d
                        });
                        for (let t of u) m({
                            store: t,
                            environment: n,
                            transaction: e,
                            modifyTokens: p
                        });
                        return (0, r(9774).wrapTemporaryBlocksInList)({
                            environment: n,
                            stores: u,
                            inMemoryRecordCache: c,
                            transaction: e
                        })
                    }
                }).performResult;
                return c.addCacheFallback(n.defaultRecordCache.inMemoryRecordCache), u
            }

            function y(e) {
                if (!e.length) return e;
                let t = [],
                    r = [],
                    n = !1,
                    a = e => {
                        let t = p().uPN(e),
                            r = p().g2K(t),
                            n = p().VtW(t);
                        if (r) {
                            let e = p().NpB(r);
                            return "slack" === e.type || "microsoft-teams" === e.type ? e.threadTs ? ? e.threadHref : e.href
                        }
                        if (n) return p().cQR(n)
                    },
                    i = () => {
                        if (r.length) {
                            let e = new Set,
                                n = r.filter(t => {
                                    let r = a(t);
                                    return !r || !e.has(r) && (e.add(r), !0)
                                });
                            t.push(...n), r = []
                        }
                    };
                for (let o of e) a(o) ? (n = !0, r.push(o)) : n ? p()._g9(o) ? r.push(o) : (i(), n = !1, t.push(o)) : t.push(o);
                return i(), t
            }
            r(803949), r(737550);
            let x = (0, r(109939).YK)({
                    researchModeButton: {
                        id: "inferenceTranscript.AIStepFollowupAction.researchModeButton",
                        defaultMessage: "Research Mode"
                    },
                    researchModeButtonTooltip: {
                        id: "inferenceTranscript.AIStepFollowupAction.researchModeButtonTooltip",
                        defaultMessage: "Get a thorough report for any question or topic"
                    },
                    copyStepTextButtonTooltip: {
                        id: "inferenceTranscript.AIStepFollowupAction.copyStepTextButtonTooltip",
                        defaultMessage: "Copy AI response to your clipboard"
                    },
                    saveAsPageTooltip: {
                        id: "inferenceTranscript.AIStepFollowupAction.saveAsPageTooltip",
                        defaultMessage: "Save AI response to your private pages"
                    },
                    saveAsPageToLocationTooltip: {
                        id: "inferenceTranscript.AIStepFollowupAction.saveAsPageToLocationTooltip",
                        defaultMessage: "Select a location to save the AI response"
                    },
                    saveAsPage: {
                        id: "inferenceTranscript.AIStepFollowupAction.saveAsPage",
                        defaultMessage: "Save as page"
                    },
                    defaultPageTitle: {
                        id: "inferenceTranscript.AIStepFollowupAction.defaultPageTitle",
                        defaultMessage: "AI Summary"
                    },
                    connectAppsTooltip: {
                        id: "inferenceTranscript.AIStepFollowupAction.connectAppsTooltip",
                        defaultMessage: "Connect your favorite apps to Notion AI"
                    }
                }),
                v = {
                    marginInlineEnd: 6
                };

            function b(e) {
                let {
                    step: t,
                    threadId: i,
                    configStep: o,
                    onClick: s
                } = e, l = (0, r(533992).v3)(), {
                    bodyStyleKey: c
                } = (0, r(765846).yq)(), d = (0, r(765846).Cd)(c), u = (0, r(960253).I)(() => ({
                    buttonContent: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        ...d
                    }
                }), [d]), p = (0, n.useCallback)(() => {
                    if ((0, r(757688).VG)({
                            environment: l,
                            step: t
                        }), s(), "search-chat" === t.type && (null == o ? void 0 : o.value.type) === "search") {
                        let e = o.value;
                        r(850552).Pw({
                            environment: l,
                            threadId: i,
                            searchSessionId: e.searchSessionId,
                            traceId: t.traceId,
                            stepId: t.id
                        })
                    }
                }, [l, t, i, o, s]);
                return (0, a.jsx)(r(51831).m, {
                    content: () => (0, a.jsx)(r(109939).sA, { ...x.copyStepTextButtonTooltip
                    }),
                    children: e => (0, a.jsx)(w, { ...e,
                        icon: () => (0, a.jsx)(r(16275).I, {
                            icon: r(703696).V,
                            style: v
                        }),
                        onClick: p,
                        title: (0, a.jsx)("div", {
                            style: u.buttonContent,
                            children: (0, a.jsx)(r(109939).sA, {
                                defaultMessage: "Copy",
                                id: "assistant.copyAISummaryButton"
                            })
                        }),
                        variant: "tinted"
                    })
                })
            }

            function j(e) {
                let {
                    navigate: t
                } = (0, n.useContext)(r(44894).E), {
                    threadId: i,
                    createBlockFrom: o,
                    markdown: s,
                    linkAnnotationToCitationAnnotations: l,
                    transactionName: c,
                    threadTitle: d,
                    step: u,
                    configStep: h,
                    onClick: y
                } = e, v = (0, r(533992).v3)(), {
                    value: b
                } = (0, r(815048).fJ)(r(235645).R.clipboardActions), j = (0, r(815048).fJ)(r(94386).g), S = (0, r(815048).fJ)(r(393771).S), k = (0, r(109939).tz)(), I = (0, n.useCallback)((e, t) => {
                    var n;
                    let a = (0, r(328765).S)();
                    if (!b || !a) return;
                    let i = t.inMemoryRecordCache.makeGetRecordModelFn(v.currentUser.id),
                        o = b.markdownToBlocks({
                            environment: v,
                            text: s,
                            inMemoryRecordCache: t.inMemoryRecordCache,
                            transaction: e,
                            markdownOptions: {},
                            markdownLinkifyIt: j.value,
                            tinyMceMicrosoftWordPasteFilter: S.value,
                            parentPointer: t.getSpaceShardedPointer()
                        });
                    if (!o || 0 === o.length) return;
                    let c = f({
                        linkAnnotationToCitationAnnotations: l,
                        useExportedCitations: !0,
                        getRecordModelFn: i
                    });
                    for (let t of o) m({
                        store: t,
                        environment: v,
                        transaction: e,
                        modifyTokens: c
                    });
                    let u = "header" === o[0].getType() ? o.shift() : void 0,
                        h = null == u || null == (n = u.getTitleStore()) ? void 0 : n.getValue(),
                        y = void 0 !== h ? h : void 0 !== d ? p().x9d(d) : p().x9d(k.formatMessage(x.defaultPageTitle));
                    r(41403).R9({
                        environment: v,
                        store: t.getBlockTitleStore(),
                        value: y,
                        transaction: e
                    });
                    let I = t.getContentStore();
                    for (let t of o) g().NI({
                        childStore: t,
                        parentStore: I,
                        transaction: e
                    })
                }, [v, k, d, b, s, l, j.value, S.value]), w = (0, n.useCallback)(e => {
                    let n = v.RouterStore.state.route;
                    "chat" === n.name ? t({
                        environment: v,
                        url: (0, r(366367).EY)({
                            currentRoute: n,
                            pageId: e.id,
                            pageVisitSource: r(254656).y8.AIQna,
                            isMobile: r(986939).A.isMobile
                        })
                    }) : (0, r(545586).navigateToBlock)({
                        environment: v,
                        store: e,
                        pageVisitSource: r(254656).y8.AIQna,
                        openInSidePeek: !0
                    })
                }, [v, t]), T = (0, n.useCallback)(async () => {
                    if (y(), !b || ["idle", "pending"].includes(j.status) || ["idle", "pending"].includes(S.status)) return;
                    let e = await (0, r(323836).M)({
                        environment: v,
                        from: o,
                        pageVisitSource: r(254656).y8.AIQna,
                        navigateOnCreate: !1
                    });
                    if (!e) return;
                    let t = e.getSpaceId();
                    if ((0, r(377796).createAndCommit)({
                            userAction: c,
                            environment: v,
                            cellTarget: {
                                spaceWithId: t
                            },
                            canUndo: !1,
                            perform: t => {
                                I(t, e)
                            }
                        }), "search-chat" === u.type && (null == h ? void 0 : h.value.type) === "search") {
                        let e = h.value;
                        r(850552).sS({
                            environment: v,
                            threadId: i,
                            searchSessionId: e.searchSessionId,
                            traceId: u.traceId,
                            stepId: u.id
                        })
                    }
                    w(e)
                }, [w, v, b, j, S, o, I, c, i, h, u, y]), C = (0, n.useCallback)(e => {
                    e.stopPropagation();
                    let t = (0, r(328765).S)();
                    if (!t) return;
                    let n = e.currentTarget.getBoundingClientRect(),
                        a = (0, r(295447).Z1)({
                            environment: v,
                            table: r(832375).evP,
                            spaceId: t.id
                        }),
                        o = r(970831).B.createChildStore(t, {
                            table: r(832375).evP,
                            id: a,
                            spaceId: t.id
                        });
                    r(351198).ho({
                        environment: v,
                        blocks: [o],
                        originRect: n,
                        moveToContext: "action_menu",
                        isAddTo: !1,
                        disableSuccessToast: !0,
                        forceShowPrivatePageOption: !0,
                        dontCommitActions: !0,
                        onAccept: ({
                            value: e
                        }) => {
                            (e => {
                                if (!b || ["idle", "pending"].includes(j.status) || ["idle", "pending"].includes(S.status) || !e.addBlockToPage || "page" !== e.addBlockToPage.target) return;
                                let {
                                    pageId: n
                                } = e.addBlockToPage, s = new(r(970831)).B(v, {
                                    table: r(832375).evP,
                                    id: n,
                                    spaceId: t.id
                                });
                                if ((0, r(377796).createAndCommit)({
                                        userAction: c,
                                        environment: v,
                                        cellTarget: {
                                            spaceWithId: t.id
                                        },
                                        canUndo: !1,
                                        perform: e => {
                                            r(124937).Wv({
                                                environment: v,
                                                id: a,
                                                type: "page",
                                                spaceId: t.id,
                                                transaction: e,
                                                inMemoryRecordCache: o.inMemoryRecordCache
                                            }), I(e, o), g().NI({
                                                childStore: o,
                                                parentStore: s.getContentStore(),
                                                transaction: e
                                            })
                                        }
                                    }), "search-chat" === u.type && (null == h ? void 0 : h.value.type) === "search") {
                                    let e = h.value;
                                    r(850552).sS({
                                        environment: v,
                                        threadId: i,
                                        searchSessionId: e.searchSessionId,
                                        traceId: u.traceId,
                                        stepId: u.id
                                    })
                                }
                                w(o)
                            })((0, r(418511)._W)(e))
                        }
                    })
                }, [v, w, b, j, S, I, c, i, h, u]);
                return (0, a.jsx)(r(316258).hP, {
                    surface: r(316258).wy.fullPage,
                    children: (0, a.jsx)(r(51831).m, {
                        content: () => (0, a.jsx)(r(109939).sA, { ...x.saveAsPageTooltip
                        }),
                        children: e => (0, a.jsx)("div", {
                            children: (0, a.jsx)(r(51831).m, {
                                content: () => (0, a.jsx)(r(109939).sA, { ...x.saveAsPageToLocationTooltip
                                }),
                                children: t => (0, a.jsx)(r(308438).E, {
                                    variant: "tinted",
                                    icon: r(245102).arrowLineDownIcon,
                                    fontSize: "14px",
                                    onClick: T,
                                    onDropdownClick: C,
                                    singleLineTitle: !0,
                                    title: (0, a.jsx)(r(109939).sA, { ...x.saveAsPage
                                    }),
                                    tooltipEvents: e,
                                    dropdownTooltipEvents: t
                                })
                            })
                        })
                    })
                })
            }

            function S(e) {
                let {
                    onAdditionalClick: t
                } = e, {
                    bubbleIcons: i,
                    connectorsUpsellOrManage: o
                } = (0, r(993315).b)({
                    connector: "generic",
                    analyticsFrom: "ai_chat_followup_upsell_suggestion"
                }), s = (0, n.useCallback)(() => {
                    t(), void 0 !== o && o()
                }, [o, t]), {
                    bodyStyleKey: l
                } = (0, r(765846).yq)(), c = (0, r(765846).Cd)(l), d = (0, r(960253).I)(() => ({
                    buttonContent: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        ...c,
                        marginInlineStart: 2
                    }
                }), [c]);
                return !i || r(986939).A.isMobile ? null : (0, a.jsx)(r(51831).m, {
                    content: () => (0, a.jsx)(r(109939).sA, { ...x.connectAppsTooltip
                    }),
                    children: e => (0, a.jsx)(w, { ...e,
                        icon: () => i,
                        onClick: s,
                        title: (0, a.jsx)("div", {
                            style: d.buttonContent,
                            children: (0, a.jsx)(r(109939).sA, { ...r(385728).D.searchMoreApps
                            })
                        }),
                        variant: "tinted"
                    })
                })
            }
            let k = {
                    AssistantActionButton: {
                        display: "flex",
                        alignItems: "center",
                        boxShadow: "none",
                        paddingTop: 6,
                        paddingInlineEnd: 12,
                        paddingBottom: 6,
                        paddingInlineStart: 12,
                        marginBottom: 6,
                        color: r(632079).Tj.text.primary,
                        fontSize: 12,
                        fontWeight: r(699422).Wy.medium,
                        borderRadius: 24,
                        width: "max-content",
                        background: r(632079).Tj.background.secondaryTranslucent,
                        height: r(986939).A.isMobile ? 36 : 32,
                        ...r(986939).A.isMobile && {
                            flexWrap: "nowrap",
                            textWrap: "nowrap"
                        }
                    },
                    style0: {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                },
                I = (0, r(64960)._S)({
                    color: r(632079).Tj.background.secondaryTranslucent
                }),
                w = n.forwardRef(function(e, t) {
                    let {
                        style: i,
                        hoveredStyle: o,
                        icon: s,
                        disabled: l,
                        iconStyle: c,
                        title: d,
                        onClick: u,
                        focused: p,
                        variant: g,
                        singleLineTitle: f,
                        ...m
                    } = e, h = !!d, y = (0, r(960253).I)(() => ({
                        hoveredStyle: {
                            background: I.hovered
                        },
                        pressedStyle: {
                            background: I.pressed
                        },
                        icon: {
                            width: r(986939).A.isMobile ? 18 : 16,
                            height: r(986939).A.isMobile ? 18 : 16,
                            fill: r(632079).Tj.icon.tertiary,
                            marginInlineEnd: 6 * !!h
                        }
                    }), [h]), x = s ? Array.isArray(s) ? s : [s] : void 0;
                    return (0, a.jsxs)(r(64960).Ay, { ...m,
                        ref: t,
                        disabled: l,
                        style: { ...k.AssistantActionButton,
                            ...i
                        },
                        hoveredStyle: { ...y.hoveredStyle,
                            ...o
                        },
                        pressedStyle: y.pressedStyle,
                        onClick: u,
                        focused: p,
                        ...e.tooltipEvents ? ? {},
                        children : [null == x ? void 0 : x.map((e, t) => (0, a.jsx)(n.Fragment, {
                            children: e({ ...y.icon,
                                ...c
                            })
                        }, t)), f ? (0, a.jsx)("span", {
                            style: k.style0,
                            children: d
                        }) : d]
                    })
                }),
                T = {
                    marginInlineEnd: 6
                };

            function C(e) {
                let t = (0, r(109939).tz)(),
                    {
                        threadStore: i,
                        onClick: o
                    } = e,
                    {
                        bodyStyleKey: s
                    } = (0, r(765846).yq)(),
                    l = (0, r(765846).Cd)(s),
                    c = (0, r(960253).I)(() => ({
                        buttonContent: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            ...l,
                            marginInlineStart: 2
                        }
                    }), [l]),
                    d = (0, r(533992).v3)(),
                    u = (0, n.useCallback)(() => {
                        o();
                        let e = i.getTranscript(),
                            n = e.find(e => "config" === e.type);
                        if (!n || "search" !== n.value.type) return;
                        let a = n.value,
                            s = e.find(e => "user" === e.type);
                        s && s.value && function(e) {
                            let {
                                environment: t,
                                intl: n,
                                queryTextValue: a,
                                searchSessionId: i,
                                entrypoint: o
                            } = e, s = (0, r(458230).r4)({
                                intl: n,
                                textValue: a,
                                userTimeZone: (0, r(714350).P)(),
                                deterministic: !1,
                                disableAnnotationPrefix: !0,
                                disableInsertedAnnotations: !1,
                                getRecordModel: r(774995).b.fromGetRecordValueFn(t.defaultRecordCache.inMemoryRecordCache.makeGetRecordValueFn(t.currentUser.id))
                            });
                            if (0 === s.trim().length) return;
                            let l = r(728372).AppStoreSidebarSpaceStore.state,
                                c = r(728372).AppStoreCurrentUserStore.state;
                            if (!l || !c) return;
                            (0, r(757688).Wq)({
                                clientStore: r(57168).defaultClientAIChatStore,
                                environment: t
                            });
                            let d = (0, r(295447).Z1)({
                                environment: t,
                                table: r(832375).Toz,
                                spaceId: l.id
                            });
                            r(274498).uH({
                                environment: t,
                                researchModeThreadId: d,
                                queryLength: s.length,
                                queryWords: s.split(" ").length,
                                searchSessionId: i,
                                qnaSessionId: void 0,
                                source: o,
                                sourceEventId: void 0,
                                suggestedQuery: !1,
                                attachmentCount: 0
                            });
                            let u = (0, r(757688).fI)({
                                environment: t
                            });
                            (0, r(862451).navigateAndStartInferenceTranscript)({
                                environment: t,
                                query: a,
                                clientStore: r(57168).defaultClientAIChatStore,
                                config: u,
                                surface: "full_page_chat"
                            })
                        }({
                            environment: d,
                            intl: t,
                            queryTextValue: s.value,
                            searchSessionId: a.searchSessionId,
                            entrypoint: "uf_retry_in_research_mode"
                        })
                    }, [i, d, t, o]);
                return (0, a.jsx)(r(51831).m, {
                    content: () => (0, a.jsx)(r(109939).sA, { ...x.researchModeButtonTooltip
                    }),
                    children: e => (0, a.jsx)(w, { ...e,
                        icon: () => (0, a.jsx)(r(16275).I, {
                            icon: r(46552).P,
                            style: T
                        }),
                        onClick: u,
                        title: (0, a.jsx)("div", {
                            style: c.buttonContent,
                            children: (0, a.jsx)(r(109939).sA, {
                                defaultMessage: "Try in Research Mode",
                                id: "assistant.retryInResearchModeButton"
                            })
                        }),
                        variant: "tinted"
                    })
                })
            }
            let M = {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6
                },
                A = {
                    id: "aiInferenceTranscript.debug.toolResult.errorSummary",
                    defaultMessage: "Error: {error}",
                    description: "Summary shown for a tool result that contains an error message. {error} is the raw error string."
                },
                R = {
                    id: "aiInferenceTranscript.debug.toolResult.insufficientPermissions",
                    defaultMessage: "Insufficient permissions",
                    description: "Summary shown when the tool result indicates it lacked the required permissions."
                },
                P = {
                    id: "aiInferenceTranscript.debug.toolResult.resultsCount",
                    defaultMessage: "{count, plural, one {# result} other {# results}}",
                    description: "Summary label describing how many items a tool result returned. Uses ICU pluralisation on {count}."
                },
                N = {
                    id: "aiInferenceTranscript.debug.toolResult.previewSnippet",
                    defaultMessage: "Preview: {snippet}",
                    description: "Summary snippet shown when the tool result preview is derived from raw text. {snippet} contains the preview text."
                },
                F = {
                    id: "aiInferenceTranscript.debug.toolResult.autofixedBadge",
                    defaultMessage: "Autofixed",
                    description: "Badge shown above the tool result summary when update-page-v2 autofixed content."
                },
                V = {
                    pending: {
                        id: "aiInferenceTranscript.debug.toolResult.state.pending",
                        defaultMessage: "Pending",
                        description: "Label describing a tool result that is pending execution."
                    },
                    streaming: {
                        id: "aiInferenceTranscript.debug.toolResult.state.streaming",
                        defaultMessage: "Streaming",
                        description: "Label describing a tool result that is currently streaming."
                    },
                    "confirmation:requested": {
                        id: "aiInferenceTranscript.debug.toolResult.state.confirmationRequested",
                        defaultMessage: "Confirmation requested",
                        description: "Label describing a tool result that is waiting for user confirmation."
                    },
                    "confirmation:rejected": {
                        id: "aiInferenceTranscript.debug.toolResult.state.confirmationRejected",
                        defaultMessage: "Confirmation rejected",
                        description: "Label describing a tool result where the user rejected confirmation."
                    },
                    applied: {
                        id: "aiInferenceTranscript.debug.toolResult.state.applied",
                        defaultMessage: "Applied",
                        description: "Label describing a tool result that applied successfully."
                    },
                    "applied:partial": {
                        id: "aiInferenceTranscript.debug.toolResult.state.appliedPartial",
                        defaultMessage: "Partially applied",
                        description: "Label describing a tool result that only partially applied its changes."
                    },
                    "applied:error": {
                        id: "aiInferenceTranscript.debug.toolResult.state.appliedError",
                        defaultMessage: "Apply error",
                        description: "Label describing a tool result that encountered an error while applying changes."
                    },
                    "confirmation:confirmed": {
                        id: "aiInferenceTranscript.debug.toolResult.state.confirmationConfirmed",
                        defaultMessage: "Confirmation confirmed",
                        description: "Label describing a tool result where the confirmation was accepted."
                    },
                    deferred: {
                        id: "aiInferenceTranscript.debug.toolResult.state.deferred",
                        defaultMessage: "Deferred",
                        description: "Label describing a tool result that was deferred and will be retried automatically."
                    }
                },
                B = {
                    SuggestionGroup: {
                        width: "100%"
                    },
                    suggestions: {
                        display: "flex",
                        alignItems: "center",
                        overflowX: "auto",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        whiteSpace: "nowrap",
                        gap: 8,
                        rowGap: 8,
                        padding: "4px 4px",
                        margin: "-4px -4px",
                        ...r(986939).A.isMobile && {
                            overflowX: "scroll",
                            flexWrap: "nowrap",
                            paddingBottom: 8,
                            marginBottom: -8,
                            paddingInlineStart: 16,
                            paddingInlineEnd: 16,
                            marginInlineStart: -16,
                            marginInlineEnd: -16
                        }
                    }
                };

            function D(e) {
                let {
                    threadStore: t,
                    step: i,
                    results: o,
                    titleStep: s
                } = e, l = (0, r(533992).v3)(), c = (0, r(345776).T)(), d = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), u = (0, r(217844)._)({
                    name: "ai_research_mode",
                    spaceId: null == d ? void 0 : d.id,
                    userId: c,
                    amount: 1
                }), p = (0, r(94418).e2)(u), g = (0, n.useMemo)(() => (0, r(187353).Jz)(i.value), [i.value]), f = (0, n.useMemo)(() => {
                    let e = i.value.match(r(187353).HS);
                    return e ? e.length : 0
                }, [i.value]), m = t.id, h = null == s ? void 0 : s.value, y = (0, r(682985).K8)(() => t.getTranscript().find(e => "config" === e.type), [t]), x = (0, r(682985).K8)(() => {
                    let e = t.getTranscript(),
                        r = e.findIndex(e => e.id === i.id);
                    return e.slice(0, r).filter(e => "user" === e.type).length > 1
                }, [t, i]), v = (0, r(682985).K8)(() => !!t.getTranscript().find(e => "attachment" === e.type), [t]), k = (0, n.useMemo)(() => (0, r(187353).o6)({
                    results: o,
                    spaceStore: d,
                    environment: l,
                    traceId: i.traceId
                }), [o, d, l, i.traceId]), I = (0, n.useCallback)(e => {
                    (0, r(104310).u)({
                        event: {
                            eventName: "clicked_ai_chat_follow_up",
                            eventProperties: {
                                thread_id: m,
                                trace_id: i.traceId,
                                mode: null == y ? void 0 : y.value.type,
                                action: e
                            }
                        }
                    })
                }, [m, i.traceId, null == y ? void 0 : y.value.type]);
                return (0, a.jsx)("div", {
                    style: B.SuggestionGroup,
                    children: (0, a.jsxs)("div", {
                        style: B.suggestions,
                        children: ["search-chat" === i.type ? (0, a.jsx)(b, {
                            threadId: m,
                            step: i,
                            configStep: y,
                            onClick: () => I("copy")
                        }) : void 0, "search-chat" !== i.type || !p || x || v ? void 0 : (0, a.jsx)(C, {
                            threadStore: t,
                            onClick: () => I("try_research_mode")
                        }), "search-chat" === i.type ? (0, a.jsx)(j, {
                            threadTitle: h,
                            threadId: m,
                            step: i,
                            configStep: y,
                            createBlockFrom: "unified_find_summary",
                            markdown: g,
                            linkAnnotationToCitationAnnotations: k,
                            transactionName: "SearchChatStep.createReportPage",
                            onClick: () => I("save_as_page")
                        }) : void 0, "search-chat" === i.type && 0 === f ? (0, a.jsx)(S, {
                            step: i,
                            configStep: y,
                            onAdditionalClick: () => I("connect_apps")
                        }) : void 0]
                    })
                })
            }
            let E = n.memo(function(e) {
                    let {
                        step: t,
                        results: i
                    } = e, o = t.traceId, s = (0, r(533992).v3)(), l = (0, r(815048).fJ)(r(94386).g), c = (0, r(815048).fJ)(r(393771).S), {
                        value: d
                    } = (0, r(815048).fJ)(r(235645).R.clipboardActions), u = (0, n.useRef)(null), g = (0, r(682985).uB)(void 0, r(931030).D), f = (0, n.useMemo)(() => (0, r(187353).Jz)(t.value), [t.value]), m = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore);
                    ! function(e) {
                        let {
                            containerRef: t,
                            citationHoverStore: a,
                            parentStore: i
                        } = e, o = (0, r(682985).K8)(() => {
                            if (!i) return;
                            let e = r(84300).A.state;
                            if (!e || "token" !== e.type || !t.current || !r(885711).gR(t.current, e.token.node)) return;
                            let n = e.annotations.find(p().bZo);
                            if (!n) return;
                            let a = p().NpB(n);
                            if (void 0 === a.type || "query_database_result" === a.type);
                            else if ("helpdoc" === a.type || "helpdoc-section" === a.type || "url" === a.type || "webpage" === a.type || p().E_d(a)) return {
                                type: "token",
                                citationType: "universal_search",
                                href: (0, r(281708).Ve)(a.href),
                                node: e.token.node
                            };
                            else if ("block" === a.type) {
                                let t = n ? a.scrollToBlockId || a.blockId : void 0;
                                if (!t) return;
                                let o = r(970831).B.createChildStore(i, {
                                    table: "block",
                                    id: t
                                }).getNavigableBlockStore();
                                if (!o) return;
                                return {
                                    type: "token",
                                    citationType: "notion",
                                    pageId: o.id,
                                    blockId: o.id === t ? void 0 : t,
                                    node: e.token.node
                                }
                            } else(0, r(722371).HB)(a.type)
                        }, [t, i]), s = (0, n.useRef)();
                        (0, n.useEffect)(() => {
                            let e;
                            return s.current && (clearTimeout(s.current), s.current = void 0), void 0 === o ? s.current = setTimeout(() => {
                                a.setState(void 0), s.current = void 0
                            }, 50) : (0 !== (e = o.node.getBoundingClientRect()).bottom || 0 !== e.left || 0 !== e.right || 0 !== e.top) && a.setState(o), () => {
                                s.current && (clearTimeout(s.current), s.current = void 0)
                            }
                        }, [a, o])
                    }({
                        containerRef: u,
                        citationHoverStore: g,
                        parentStore: m
                    });
                    let y = (0, n.useRef)((0, r(187353).o6)({
                        results: i,
                        spaceStore: m,
                        environment: s,
                        traceId: o
                    }));
                    (0, n.useEffect)(() => {
                        y.current = (0, r(187353).o6)({
                            results: i,
                            spaceStore: m,
                            environment: s,
                            traceId: o
                        })
                    }, [i, m, s, o]);
                    let x = (0, n.useMemo)(() => {
                        if (!f || !d || ["idle", "pending"].includes(l.status) || ["idle", "pending"].includes(c.status)) return;
                        let e = l.value,
                            t = c.value;
                        if (e && t) return r(363256).e.withListenerIgnored(() => h({
                            markdown: f,
                            environment: s,
                            markdownLinkifyIt: e,
                            tinyMceMicrosoftWordPasteFilter: t,
                            clipboardActions: d,
                            linkAnnotationToCitationAnnotations: y.current,
                            useExportedCitations: !1
                        }))
                    }, [f, d, l, c, s]);
                    return x && m ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ref: u,
                            style: z,
                            children: (0, a.jsx)(r(744628).c, {
                                displayName: "AIChatTranscript.MarkdownChatStep",
                                disabled: !0,
                                children: (0, a.jsx)(r(301124).A, {
                                    store: x,
                                    disabled: !0,
                                    disableCommentMenu: !0,
                                    disableHoverMenu: !0,
                                    disableDrag: !0
                                })
                            })
                        }), (0, a.jsx)(r(417115).cE, {
                            containerRef: u,
                            hoverStore: g,
                            parentStore: m,
                            isSearchChat: !0,
                            getPayloadDataForHref: e => (0, r(730127).vs)(i, e)
                        })]
                    }) : null
                }),
                z = {
                    paddingInlineStart: 12
                };
            r(18107), r(967357), r(430670);
            let W = {
                iconWrap: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 20,
                    minHeight: 20,
                    width: 20,
                    height: 20,
                    borderRadius: 999,
                    boxShadow: `${r(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                    background: r(632079).Tj.background.primary
                },
                container: {
                    display: "flex"
                }
            };

            function $(e) {
                let {
                    toggleOpen: t,
                    results: n
                } = e;
                return n.length < 3 ? null : (0, a.jsx)(r(153321).P.div, {
                    style: W.container,
                    animate: {
                        opacity: +!t,
                        width: 48 * !t
                    },
                    transition: {
                        duration: .2
                    },
                    children: n.slice(0, 3).map((e, n) => (0, a.jsx)(r(153321).P.div, {
                        style: { ...W.iconWrap,
                            zIndex: 3 - n
                        },
                        initial: {
                            x: -8 * n
                        },
                        animate: {
                            x: t ? -24 * n : -8 * n
                        },
                        transition: {
                            duration: .3
                        },
                        children: (0, a.jsx)(r(159671).R, {
                            result: e,
                            size: 14,
                            notStandaloneIcon: !0
                        })
                    }, "notion" === e.type ? e.store.id : e.href))
                })
            }
            let L = {
                ellipsisText: {
                    fontWeight: r(699422).Wy.semibold,
                    textTransform: "lowercase",
                    flex: "1 1 0%",
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                style2: {
                    marginInlineStart: 4,
                    marginInlineEnd: 4
                }
            };

            function _(e) {
                let {
                    isToggleHovered: t,
                    toggledOpen: n,
                    setToggledOpen: i,
                    setIsToggleHovered: o,
                    spaceStore: s,
                    sources: l,
                    step: c
                } = e, d = (0, r(187353).Pp)(c), {
                    bodyStyleKey: u
                } = (0, r(765846).yq)(), p = (0, r(765846).Cd)(u), g = (0, r(960253).I)(() => ({
                    messageWrap: {
                        marginInlineStart: 6,
                        ...p,
                        color: r(632079).Tj.text.secondary,
                        display: "flex",
                        alignItems: "center",
                        width: "fit-content",
                        maxWidth: "100%",
                        flexShrink: 1,
                        minWidth: 0,
                        gap: 2,
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8,
                        height: 32,
                        borderRadius: 6,
                        ...t && {
                            cursor: "pointer",
                            background: r(632079).Tj.buttonHoveredBackground
                        },
                        transition: "background 150ms ease"
                    }
                }), [t, p]), {
                    totalNumResults: f,
                    renderableResultsForPreview: m,
                    notionRenderablePageStores: h
                } = (0, r(682985).K8)(() => {
                    let e = (0, r(187353).l0)(c);
                    if (!s || !e) return {
                        totalNumResults: 0,
                        renderableResultsForPreview: [],
                        notionRenderablePageStores: []
                    };
                    let t = l.flatMap(e => {
                            var t;
                            return (null == (t = c.results) ? void 0 : t[e]) ? ? []
                        }),
                        n = t.length,
                        a = r(381453).oE(t.slice(0, 10).flatMap(({
                            result: e
                        }) => (0, r(730127).SF)(e, s))),
                        i = a.filter(e => "notion" === e.type).map(e => e.store);
                    return {
                        totalNumResults: n,
                        renderableResultsForPreview: a,
                        notionRenderablePageStores: i
                    }
                }, [c, s, l]), y = "searching" === c.status ? c.queries[0] : void 0, x = (0, r(682985).K8)(() => "searching" === c.status ? (0, a.jsxs)(r(4458).fI, {
                    alignItems: "center",
                    gap: 4,
                    children: [(0, a.jsx)(r(861510).N, {
                        styleKey: "bodyMedium",
                        animate: !0,
                        colorVariant: "secondary",
                        text: (0, a.jsx)(r(109939).sA, {
                            id: "CollapsedSearchStepResults.searching",
                            defaultMessage: "Searching"
                        })
                    }), (0, a.jsxs)(r(4458).fI, {
                        alignItems: "center",
                        flexWrap: "nowrap",
                        gap: 4,
                        children: [(0, a.jsx)(r(16275).I, {
                            icon: r(921048).magnifyingGlassSmallIcon,
                            size: "xxs",
                            colorVariant: "secondary"
                        }), (0, a.jsx)("span", {
                            style: L.ellipsisText,
                            children: (null == y ? void 0 : y.questionIntl) ? ? (null == y ? void 0 : y.keywords)
                        })]
                    })]
                }) : "resultsPartial" === c.status ? h.length > 0 ? (0, a.jsx)(r(76575).w, {
                    searchResultStores: h
                }) : (0, a.jsx)(r(861510).N, {
                    styleKey: "bodyMedium",
                    animate: !0,
                    colorVariant: "secondary",
                    text: (0, a.jsx)(r(109939).sA, {
                        id: "DeepFindStep.searchingNonNotionText",
                        defaultMessage: "Reading"
                    })
                }) : "resultsComplete" === c.status || "resultsBlended" === c.status ? (0, a.jsx)(r(109939).sA, {
                    id: "assistantCitationHelpers.numPagesFound",
                    defaultMessage: "{count, plural, one {{count} result} other {{count} results}}",
                    values: {
                        count: f
                    }
                }) : (0, a.jsx)(r(861510).N, {
                    text: (0, a.jsx)(r(109939).sA, { ...r(573449).v.thinking
                    }),
                    styleKey: "bodyMedium",
                    animate: !0,
                    colorVariant: "secondary"
                }), [c.status, f, y, h]);
                return (0, a.jsxs)(r(988022).p, {
                    style: g.messageWrap,
                    onMouseEnter: () => {
                        o(!0)
                    },
                    onMouseLeave: () => {
                        o(!1)
                    },
                    onClick: () => {
                        i(!n)
                    },
                    "aria-expanded": n,
                    children: [(0, a.jsxs)(r(4458).fI, {
                        alignItems: "center",
                        gap: 4,
                        flex: "1 1 0%",
                        minWidth: 0,
                        children: [(0, a.jsx)(r(4458).fI, {
                            alignItems: "center",
                            flex: "1 1 auto",
                            minWidth: 0,
                            gap: 4,
                            children: x
                        }), d ? (0, a.jsx)($, {
                            toggleOpen: n,
                            results: m
                        }) : (0, a.jsx)("div", {
                            style: L.style2,
                            children: (0, a.jsx)(r(118845).A, {
                                isTriColored: !0
                            })
                        })]
                    }), (0, a.jsx)("span", {
                        style: {
                            opacity: +!!t
                        },
                        children: (0, a.jsx)(r(16275).I, {
                            icon: n ? r(336632).Y : r(595453).arrowChevronSingleDownSmallIcon,
                            size: "xs",
                            colorVariant: "tertiary"
                        })
                    })]
                })
            }
            let O = ["notion", "notion-mail", "notion-calendar", "helpdocs", "helpdoc-section", "webpage", ...r(876688).yc.filter(e => !(0, r(281708).r9)(e))],
                U = {
                    padding: "1px 2px",
                    margin: "-1px -2px",
                    cursor: "default"
                },
                K = {
                    paddingInlineStart: 12
                };

            function H(e) {
                let {
                    step: t,
                    isLastVisibleStep: i,
                    threadStore: o,
                    clientStore: s
                } = e, [l, c] = (0, n.useState)(!1), [d, u] = (0, n.useState)(!1), [p, g] = (0, n.useState)(void 0), f = p ? ? t.showResults ? ? !0, m = (0, r(533992).v3)(), h = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), {
                    bodyStyleKey: y
                } = (0, r(765846).yq)(), x = (0, r(765846).Cd)(y), v = (0, r(109939).tz)(), b = (0, r(960253).I)(() => ({
                    wrap: {
                        borderBottom: l && f ? `1px solid ${r(632079).Tj.border.secondary}` : void 0,
                        paddingBottom: l ? 8 : void 0,
                        fontWeight: r(699422).Wy.medium,
                        fontSize: 12
                    },
                    summarizingWrap: {
                        marginTop: 20,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        width: "100%",
                        color: r(632079).Tj.text.secondary,
                        fontWeight: r(699422).Wy.medium,
                        ...x
                    }
                }), [l, f, x]), j = (0, r(187353).l0)(t), S = (0, r(682985).K8)(() => {
                    let e = (0, r(187353).L2)(o);
                    return (null == e ? void 0 : e.type) === "search" ? e : void 0
                }, [o]), {
                    sources: k,
                    hasNotionResults: I
                } = (0, n.useMemo)(() => {
                    var e;
                    let n = j ? (e = (0, r(722371).objectKeys)(t.results ? ? {}), [...O.filter(t => e.includes(t))]) : [];
                    return {
                        sources: n,
                        hasNotionResults: n.includes("notion") && j
                    }
                }, [j, t]), [w, T] = (0, n.useState)("resultsComplete" === t.status || "resultsBlended" === t.status ? k.at(0) : void 0);
                (0, n.useEffect)(() => {
                    !w && ("resultsComplete" === t.status || "resultsBlended" === t.status ? T(k[0]) : (null == S ? void 0 : S.scopeForNextSearch.type) === "notion" || (null == S ? void 0 : S.scopeForNextSearch.type) === "everything" ? k.includes("notion") && T("notion") : T(k[0]))
                }, [k, T, t.status, null == S ? void 0 : S.scopeForNextSearch.type, w]);
                let C = (0, n.useCallback)(async e => {
                        let {
                            assistantSearchScope: r,
                            useWebSearch: n,
                            searchFilters: a
                        } = e;
                        await Q({
                            assistantSearchScope: r,
                            filtersForNextSearch: a,
                            threadStore: o,
                            clientStore: s,
                            environment: m,
                            step: t,
                            useWebSearch: n
                        })
                    }, [s, m, t, o]),
                    M = (0, n.useCallback)(e => {
                        g(e), (0, r(470474).V)({
                            environment: m,
                            threadStore: o,
                            stepId: t.id,
                            traceId: t.traceId,
                            showResults: e,
                            from: "deep_find"
                        })
                    }, [m, t.id, t.traceId, o]);
                return h ? (0, a.jsxs)("div", {
                    style: b.wrap,
                    children: [(0, a.jsxs)("div", {
                        style: U,
                        children: [(0, a.jsx)(_, {
                            isToggleHovered: d,
                            toggledOpen: f,
                            setToggledOpen: M,
                            setIsToggleHovered: u,
                            spaceStore: h,
                            sources: k,
                            step: t
                        }), (0, a.jsx)(r(203066).N, {
                            children: f ? (0, a.jsx)(r(153321).P.div, {
                                initial: {
                                    opacity: 0,
                                    height: 0,
                                    overflow: "hidden"
                                },
                                animate: {
                                    opacity: 1,
                                    height: "auto",
                                    overflow: "visible"
                                },
                                exit: {
                                    opacity: 0,
                                    height: 0,
                                    overflow: "hidden"
                                },
                                transition: {
                                    duration: .3
                                },
                                children: (0, a.jsxs)("div", {
                                    style: K,
                                    children: [(0, a.jsx)(r(412560).g, {
                                        toggled: f,
                                        step: t,
                                        setToggled: M,
                                        setIsToggleHovered: u,
                                        deepFindFeedbackPayload: void 0,
                                        sources: r(381453).oE(k.map(e => (0, r(187353).tC)(e))),
                                        selectedDeepFindSource: w ? (0, r(187353).tC)(w) : void 0,
                                        setSelectedDeepFindSource: e => {
                                            ! function(e) {
                                                let {
                                                    environment: t,
                                                    threadStore: n,
                                                    step: a,
                                                    source: i,
                                                    position: o
                                                } = e, s = n.id, l = (0, r(187353).L2)(n), {
                                                    traceId: c
                                                } = a;
                                                if (!l || "search" !== l.type) return;
                                                let d = l.searchSessionId;
                                                (0, r(104310).u)({
                                                    event: {
                                                        eventName: "deep_find_select_tab",
                                                        eventProperties: {
                                                            tab_name: i,
                                                            tab_position: o,
                                                            thread_id: s,
                                                            search_session_id: d,
                                                            trace_id: c
                                                        }
                                                    }
                                                }), "notion-calendar" === i && (0, r(414824).R)({
                                                    environment: t,
                                                    data: {
                                                        type: "track",
                                                        payload: {
                                                            event: "enterpriseSearchAction",
                                                            action: "tabClicked"
                                                        }
                                                    }
                                                })
                                            }({
                                                environment: m,
                                                threadStore: o,
                                                step: t,
                                                source: e,
                                                position: k.indexOf((0, r(187353).ZR)(e))
                                            }), T("helpdoc" === e ? "helpdocs" : "all" === e ? void 0 : e)
                                        },
                                        assistantSearchScope: t.scope,
                                        deepFindSearchFilters: t.filters,
                                        useWebSearch: t.useWebSearch,
                                        searchAgainAndUpdateAssistantSearchScope: C
                                    }), (0, a.jsx)(G, {
                                        step: t,
                                        source: w,
                                        tabPosition: w ? k.indexOf(w) : -1,
                                        spaceStore: h,
                                        threadStore: o,
                                        showAllResults: l,
                                        setShowAllResults: c,
                                        handleAnalyticsOnResultClick: (e, n) => {
                                            (0, r(187353).l0)(t) && function(e) {
                                                let {
                                                    result: t,
                                                    environment: n,
                                                    threadStore: a,
                                                    spaceStore: i,
                                                    position: o,
                                                    step: s,
                                                    intl: l,
                                                    tabPosition: c
                                                } = e, d = a.id, u = (0, r(187353).L2)(a), p = Object.values(s.results ? ? {}).flatMap(e => e).length, g = s.traceId;
                                                if (!u || "search" !== u.type) return;
                                                let f = u.searchSessionId,
                                                    m = (0, r(187353)._R)(s, a.getTranscript());
                                                if (!m) return;
                                                let h = (0, r(458230).r4)({
                                                    textValue: m.value,
                                                    getRecordModel: i.getRecordModel,
                                                    userTimeZone: (0, r(714350).P)(),
                                                    intl: l
                                                }) ? ? "";
                                                (0, r(104310).u)({
                                                    event: {
                                                        eventName: "qna_result_clicked",
                                                        eventProperties: {
                                                            thread_id: d,
                                                            search_session_id: f,
                                                            trace_id: g,
                                                            clicked_page_id: t.id,
                                                            position: o,
                                                            result_type: t.type,
                                                            source: "list"
                                                        }
                                                    }
                                                }), "notion-calendar" === t.type && (0, r(414824).R)({
                                                    environment: n,
                                                    data: {
                                                        type: "track",
                                                        payload: {
                                                            event: "enterpriseSearchAction",
                                                            action: "resultClicked"
                                                        }
                                                    }
                                                }), (0, r(104310).u)({
                                                    event: {
                                                        eventName: "select_search_item",
                                                        eventProperties: {
                                                            sources: ["notion" === t.type ? r(821603).Ni.NotionUnknown : r(821603).Ni.UniversalUnknown],
                                                            localSources: void 0,
                                                            context: "query_results",
                                                            searchSource: "unified_find_deep_dive",
                                                            searchSessionId: f ? ? "",
                                                            aiSessionId: d,
                                                            traceId: g,
                                                            originalPosition: o,
                                                            queryText: void 0,
                                                            selectedSearchResultMetadata: {
                                                                blockId: t.id,
                                                                blockType: void 0
                                                            },
                                                            selectedItemIndex: o,
                                                            isMobile: r(986939).A.isMobile,
                                                            queryStringLength: (null == h ? void 0 : h.length) ? ? 0,
                                                            totalSearchResultCount: p,
                                                            isMetaClick: !1,
                                                            searchSessionFlowNumber: -1,
                                                            numLocalResults: 0,
                                                            numTotalLocalResults: 0,
                                                            hasFilters: !1,
                                                            verificationState: {
                                                                type: "none"
                                                            },
                                                            tabPosition: c,
                                                            numKeystrokes: void 0,
                                                            hadMetaClick: !1,
                                                            timeToSelectMs: -1,
                                                            timeFromFirstKeyStrokeToSelectMs: void 0,
                                                            timeToRenderResult: void 0
                                                        }
                                                    }
                                                })
                                            }({
                                                result: e,
                                                step: t,
                                                environment: m,
                                                threadStore: o,
                                                spaceStore: h,
                                                position: n,
                                                intl: v,
                                                tabPosition: w ? k.indexOf(w) : -1
                                            })
                                        }
                                    })]
                                })
                            }) : null
                        })]
                    }), i && ((0, r(187353).Pp)(t) || I && f) ? (0, a.jsx)("div", {
                        style: K,
                        children: (0, a.jsx)("div", {
                            style: b.summarizingWrap,
                            children: (0, a.jsxs)(r(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                minWidth: 0,
                                children: [(0, a.jsx)(r(861510).N, {
                                    styleKey: "bodyMedium",
                                    animate: !0,
                                    colorVariant: "secondary",
                                    text: (0, a.jsx)(r(109939).sA, {
                                        id: "DeepFindSearchStep.summarize",
                                        defaultMessage: "Summarizing"
                                    })
                                }), (0, a.jsx)(r(118845).A, {
                                    isTriColored: !0
                                })]
                            })
                        })
                    }) : null]
                }) : null
            }
            let q = {
                container: {
                    height: 256,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    borderRadius: 12,
                    marginTop: 12
                },
                style0: {
                    paddingTop: 12,
                    paddingBottom: 12
                }
            };

            function G(e) {
                let {
                    step: t
                } = e, n = !e.source;
                return !(0, r(187353).l0)(t) || "resultsPartial" === t.status && n ? (0, a.jsx)("div", {
                    style: q.style0,
                    children: (0, a.jsx)(r(344903)._H, {
                        numberOfRows: 5
                    })
                }) : (0, r(187353).Pp)(t) && n ? (0, a.jsx)("div", {
                    style: q.container,
                    children: (0, a.jsx)(r(111010).D, {
                        colorVariant: "tertiary",
                        styleKey: "bodyMedium",
                        children: (0, a.jsx)(r(109939).sA, {
                            id: "DeepFindSearchStep.noResults",
                            defaultMessage: "No results in your Notion workspace"
                        })
                    })
                }) : (0, a.jsx)(Y, { ...e,
                    step: t
                })
            }
            let J = {
                moreButton: {
                    fontSize: r(699422).J.UIRegular.desktop,
                    fontWeight: r(699422).Wy.regular,
                    color: r(632079).Tj.text.secondary,
                    marginInlineStart: -8,
                    padding: 8,
                    width: "calc(100% + 20px)",
                    height: "auto",
                    justifyContent: "start"
                },
                icon: {
                    marginInlineEnd: 4,
                    padding: 2,
                    boxSizing: "content-box"
                }
            };

            function Y(e) {
                var t;
                let {
                    step: i,
                    source: o,
                    spaceStore: s,
                    showAllResults: l,
                    setShowAllResults: c,
                    handleAnalyticsOnResultClick: d,
                    threadStore: u,
                    tabPosition: p
                } = e, g = (0, r(682985).uB)(void 0, r(931030).D), f = (0, n.useRef)(null), m = (o ? null == (t = i.results) ? void 0 : t[o] : (0, r(722371).WP)(i.results ? ? {}).flatMap(([e, t]) => t ? ? [])) ? ? [], h = l ? m : m.slice(0, 5), y = m.length > 5;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(r(4458).VP, {
                        gap: 1,
                        ref: f,
                        children: [r(381453).oE(h.flatMap(({
                            result: e
                        }) => (0, r(730127).SF)(e, s))).map((e, t) => (0, a.jsx)(r(809930).K, {
                            result: e,
                            position: t,
                            onMouseEnter: t => {
                                "notion" === e.type ? g.setState({
                                    type: "list",
                                    node: t.currentTarget,
                                    citationType: "notion",
                                    pageId: e.pageId,
                                    blockIds: []
                                }) : g.setState({
                                    type: "list",
                                    node: t.currentTarget,
                                    citationType: "universal_search",
                                    href: (0, r(281708).Ve)(e.href)
                                })
                            },
                            onMouseLeave: () => {
                                g.reset()
                            },
                            onClick: () => d(e, t)
                        }, `${e.id}::${e.text}`)), y ? (0, a.jsx)(r(4458).fI, {
                            alignItems: "center",
                            width: "100%",
                            children: (0, a.jsx)(r(988022).p, {
                                style: J.moreButton,
                                iconLeading: {
                                    icon: l ? r(567738).arrowStraightUpFillSmallIcon : r(309087).arrowStraightDownFillSmallIcon,
                                    size: "xs",
                                    colorVariant: "secondary",
                                    style: J.icon
                                },
                                onClick: () => {
                                    ! function(e) {
                                        let {
                                            threadStore: t,
                                            step: n,
                                            source: a,
                                            tabPosition: i,
                                            showMore: o
                                        } = e, s = t.id, l = (0, r(187353).L2)(t), {
                                            traceId: c
                                        } = n;
                                        if (!l || "search" !== l.type) return;
                                        let d = l.searchSessionId;
                                        (0, r(104310).u)({
                                            event: {
                                                eventName: "deep_find_toggle_show_more",
                                                eventProperties: {
                                                    show_more: o,
                                                    tab_name: a,
                                                    tab_position: i,
                                                    thread_id: s,
                                                    search_session_id: d,
                                                    trace_id: c
                                                }
                                            }
                                        })
                                    }({
                                        threadStore: u,
                                        step: i,
                                        source: o ? (0, r(187353).tC)(o) : "all",
                                        tabPosition: p,
                                        showMore: !l
                                    }), l ? c(!1) : c(!0)
                                },
                                children: l ? (0, a.jsx)(r(109939).sA, {
                                    id: "assistantCitationHelpers.showLess",
                                    defaultMessage: "Show less"
                                }) : (0, a.jsx)(r(109939).sA, {
                                    id: "assistantCitationHelpers.showMore",
                                    defaultMessage: "Show more"
                                })
                            })
                        }) : void 0]
                    }), (0, a.jsx)(r(417115).cE, {
                        containerRef: f,
                        hoverStore: g,
                        parentStore: s,
                        getPayloadDataForHref: e => (0, r(730127).vs)(m, e)
                    })]
                })
            }
            async function Q(e) {
                let {
                    assistantSearchScope: t,
                    filtersForNextSearch: n,
                    threadStore: a,
                    clientStore: i,
                    environment: o,
                    step: s,
                    useWebSearch: l
                } = e;
                if ((0, r(757688).kh)({
                        threadStore: a,
                        config: {
                            type: "search",
                            scopeForNextSearch: t,
                            useWebSearch: l,
                            filtersForNextSearch: n
                        },
                        environment: o
                    }), a.getCurrentInferenceId() || i.getOrCreateClientAIChatThreadStore(a.id).state.loading) {
                    let e = a.getSpaceId(),
                        {
                            serverCommitResult: t
                        } = (0, r(377796).createAndCommit)({
                            userAction: "AIChatTranscript.SearchStep.cancelInferenceForNewSearch",
                            environment: o,
                            cellTarget: e ? {
                                spaceWithId: e
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, r(757688).GS)({
                                    threadStore: a,
                                    transaction: e,
                                    clientStore: i
                                })
                            }
                        });
                    await t
                }(0, r(757688).WF)({
                    environment: o,
                    threadStore: a,
                    stepId: function(e) {
                        let {
                            step: t,
                            threadStore: r
                        } = e, n = r.getTranscript(), a = n.findIndex(e => e.id === t.id);
                        return a > 0 ? n[a - 1] : t
                    }({
                        step: s,
                        threadStore: a
                    }).id
                })
            }
            let X = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 12.44 12.71",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M4.2 2.375A1.825 1.825 0 0 0 2.375 4.2v7.6c0 1.008.817 1.825 1.825 1.825H6a.075.075 0 0 0 .075-.075v-1.1A.075.075 0 0 0 6 12.375H4.2a.575.575 0 0 1-.575-.575V4.2c0-.318.257-.575.575-.575h7.6c.318 0 .575.257.575.575V6c0 .041.034.075.075.075h1.1A.075.075 0 0 0 13.625 6V4.2A1.825 1.825 0 0 0 11.8 2.375z"
                        }), (0, a.jsx)("path", {
                            d: "M9.956 6.683a2.47 2.47 0 0 0-2.92.277.625.625 0 1 0 .834.932 1.224 1.224 0 0 1 1.74.111.625.625 0 0 0 .945-.818 2.5 2.5 0 0 0-.6-.502"
                        }), (0, a.jsx)("path", {
                            d: "M13.864 7.316a2.473 2.473 0 0 0-3.392.851L7.176 13.67a.625.625 0 0 0 .436.938l2.864.464a.625.625 0 0 0 .2-1.233l-1.954-.317 2.822-4.713a1.223 1.223 0 0 1 2.105.01.625.625 0 0 0 1.08-.63 2.46 2.46 0 0 0-.865-.873M8.671 8.845a.736.736 0 1 0-.236 1.454.736.736 0 0 0 .236-1.454"
                        }), (0, a.jsx)("path", {
                            d: "M12.157 9.41a.736.736 0 1 0-.236 1.454.736.736 0 0 0 .236-1.454"
                        })]
                    })
                },
                Z = (0, r(104509).wt)("aiBlockSmall", X, "small"),
                ee = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.49 2.56 14.99 10.87",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M10.259 4.834a2.996 2.996 0 0 1 5.156.028.626.626 0 0 1-1.08.63 1.746 1.746 0 0 0-3.004-.015l-3.756 6.268 2.765.449a.625.625 0 0 1-.2 1.233l-3.673-.595a.626.626 0 0 1-.437-.938zM3.751 10.2a.55.55 0 0 1 0 1.1h-2.7a.55.55 0 1 1 0-1.1zm1.075-2.625a.55.55 0 0 1 0 1.1H1.051a.55.55 0 1 1 0-1.1z"
                        }), (0, a.jsx)("path", {
                            d: "M11.156 7.115a.974.974 0 1 1 1.922.313.974.974 0 0 1-1.922-.313M6.685 6.39a.974.974 0 1 1 1.923.312.974.974 0 0 1-1.923-.312M4.15 4.95a.55.55 0 0 1 0 1.1h-3.1a.55.55 0 1 1 0-1.1zm1.667-1.623a3 3 0 0 1 4.262.272.626.626 0 0 1-.944.818A1.75 1.75 0 0 0 6.65 4.26a.625.625 0 0 1-.834-.932"
                        })]
                    })
                },
                et = (0, r(104509).wt)("aiDescriptionSmall", ee, "small"),
                er = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 2.19 10.47 11.62",
                    svg: (0, a.jsx)("path", {
                        d: "M5.92 2.446c-1.217-.71-2.745.168-2.745 1.577v7.954c0 1.409 1.528 2.287 2.745 1.577l6.818-3.978c1.207-.704 1.207-2.448 0-3.152zM4.425 4.023c0-.444.481-.72.865-.497l6.818 3.977c.38.222.38.772 0 .994L5.29 12.474a.575.575 0 0 1-.865-.497z"
                    })
                },
                en = (0, r(104509).wt)("mediaPlaySmall", er, "small"),
                ea = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.97 12.46 12.46",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M7.613 4.436c-.12-.55-.905-.55-1.026 0l-.181.826a1.5 1.5 0 0 1-1.143 1.144l-.826.181c-.55.121-.55.905 0 1.026l.826.181a1.5 1.5 0 0 1 1.143 1.144l.181.826c.121.55.905.55 1.026 0l.181-.826a1.5 1.5 0 0 1 1.144-1.144l.826-.181c.55-.121.55-.905 0-1.026l-.826-.181a1.5 1.5 0 0 1-1.144-1.144z"
                        }), (0, a.jsx)("path", {
                            d: "M7.1 1.975a5.125 5.125 0 1 0 3.155 9.164l3.107 3.107a.625.625 0 1 0 .884-.884l-3.107-3.107A5.125 5.125 0 0 0 7.1 1.975M3.225 7.1a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                        })]
                    })
                },
                ei = (0, r(104509).wt)("sparkleMagnifyingGlassSmall", ea, "small"),
                eo = ["blue", "green", "purple", "orange", "pink", "red", "teal", "yellow", "brown", "gray"],
                es = 0;

            function el({
                suffix: e,
                defaultMessage: t,
                description: r
            }) {
                return {
                    id: `aiInferenceTranscript.debug.stepType.${e}`,
                    defaultMessage: t,
                    description: r
                }
            }

            function ec(e) {
                let [t, r, n] = e.label, [a, i, o] = e.tooltip, s = e.colorPalette ? ? function() {
                    if (es >= eo.length) return eo[eo.length - 1];
                    let e = eo[es];
                    return es += 1, e
                }();
                return {
                    icon: e.icon,
                    label: {
                        descriptor: el({
                            suffix: t,
                            defaultMessage: r,
                            description: n
                        })
                    },
                    tooltip: {
                        descriptor: el({
                            suffix: a,
                            defaultMessage: i,
                            description: o
                        })
                    },
                    colorPalette: s
                }
            }
            let ed = {
                    user: ec({
                        icon: r(125040).personSmallIcon,
                        label: ["user.label", "User message", "Label for transcript debug steps that capture the user's message."],
                        tooltip: ["user.tooltip", "Original request and metadata provided by the user for this turn.", "Tooltip describing user steps within the transcript debug view."]
                    }),
                    config: ec({
                        icon: r(80086).gearSmallIcon,
                        label: ["config.label", "Configuration", "Label for transcript debug steps that store configuration details."],
                        tooltip: ["config.tooltip", "Thread configuration such as surface, feature flags, and model settings.", "Tooltip explaining what the configuration step contains in the debug panel."]
                    }),
                    context: ec({
                        icon: r(295555).N,
                        label: ["context.label", "System context", "Label for transcript debug steps that summarise system-provided context."],
                        tooltip: ["context.tooltip", "Context gathered by Notion prior to the agent executing this turn.", "Tooltip describing context summary debug steps in the transcript."]
                    }),
                    "user-specified-context": ec({
                        icon: r(295555).N,
                        label: ["userSpecifiedContext.label", "User-provided context", "Label for transcript debug steps that contain user provided context."],
                        tooltip: ["userSpecifiedContext.tooltip", "Additional context the user supplied before running the agent.", "Tooltip describing user supplied context debug steps in the transcript."]
                    }),
                    attachment: ec({
                        icon: r(785655).x,
                        label: ["attachment.label", "Attachment", "Label for transcript debug steps that represent uploaded attachments."],
                        tooltip: ["attachment.tooltip", "Files and media attached to this turn for the agent to reference.", "Tooltip describing attachment debug steps in the transcript."]
                    }),
                    "agent-inference": ec({
                        icon: et,
                        label: ["agentInference.label", "Agent reasoning", "Label for transcript debug steps that store the agent's inference output."],
                        tooltip: ["agentInference.tooltip", "Model thoughts, intermediate reasoning, and streamed tool calls.", "Tooltip describing agent inference debug steps in the transcript."]
                    }),
                    "agent-tool-result": ec({
                        icon: ei,
                        label: ["agentToolResult.label", "Tool call result", "Label for transcript debug steps that capture the output of a tool call."],
                        tooltip: ["agentToolResult.tooltip", "Response data returned by tools the agent invoked while running this turn.", "Tooltip explaining what tool result debug steps contain."]
                    }),
                    "agent-debug-error": ec({
                        icon: r(50171).exclamationMarkTriangleSmallIcon,
                        label: ["agentDebugError.label", "Agent debug error", "Label for transcript debug steps that capture internal agent errors."],
                        tooltip: ["agentDebugError.tooltip", "Detailed error information captured while executing the agent.", "Tooltip describing agent debug error steps in the transcript."]
                    }),
                    "agent-trigger": ec({
                        icon: r(449837).f,
                        label: ["agentTrigger.label", "Automation trigger", "Label for transcript debug steps that initiated an agent workflow."],
                        tooltip: ["agentTrigger.tooltip", "Trigger payload or workflow input that caused the agent to run.", "Tooltip describing agent trigger debug steps in the transcript."]
                    }),
                    "agent-route-trigger": ec({
                        icon: r(480674).arrowBranchSmallIcon,
                        label: ["agentRouteTrigger.label", "Route trigger", "Label for transcript debug steps that show routing decisions."],
                        tooltip: ["agentRouteTrigger.tooltip", "Details about how the agent routed execution to a particular branch.", "Tooltip describing agent route trigger debug steps in the transcript."]
                    }),
                    "eval-result": ec({
                        icon: r(436887).j,
                        label: ["evalResult.label", "Evaluation result", "Label for transcript debug steps that contain automated evaluation results."],
                        tooltip: ["evalResult.tooltip", "Scores or feedback generated by automated evals monitoring the agent.", "Tooltip describing evaluation result debug steps in the transcript."]
                    }),
                    "premium-feature-unavailable": ec({
                        icon: r(697198).lockSmallIcon,
                        label: ["premiumFeatureUnavailable.label", "Premium feature notice", "Label for transcript debug steps that show premium feature availability issues."],
                        tooltip: ["premiumFeatureUnavailable.tooltip", "Indicates the agent attempted to use a premium feature that is not enabled.", "Tooltip describing premium feature unavailable debug steps in the transcript."]
                    }),
                    "agent-transcript-summary": ec({
                        icon: r(534965).n,
                        label: ["agentTranscriptSummary.label", "Transcript summary", "Label for transcript debug steps that hold agent authored summaries."],
                        tooltip: ["agentTranscriptSummary.tooltip", "Running summary of the conversation produced by the agent.", "Tooltip describing agent transcript summary steps in the debug view."]
                    }),
                    "activate-transcript-compaction": ec({
                        icon: r(534965).n,
                        label: ["activateTranscriptCompaction.label", "Transcript compaction", "Label for transcript debug steps that activate a summary-based compaction."],
                        tooltip: ["activateTranscriptCompaction.tooltip", "Applies the latest transcript summary to reduce context size.", "Tooltip describing transcript compaction activation steps in the debug view."]
                    }),
                    "agent-records-updated": ec({
                        icon: r(437102).checkmarkCircleSmallIcon,
                        label: ["agentRecordsUpdated.label", "Records updated", "Label for transcript debug steps that describe record updates."],
                        tooltip: ["agentRecordsUpdated.tooltip", "Lists the records the agent modified as part of this step.", "Tooltip describing agent records updated debug steps in the transcript."]
                    }),
                    "agent-turn-start": ec({
                        icon: en,
                        label: ["agentTurnStart.label", "Turn start", "Label for transcript debug steps that mark the beginning of an agent turn."],
                        tooltip: ["agentTurnStart.tooltip", "Marker indicating when the agent began processing this turn.", "Tooltip describing agent turn start debug steps in the transcript."]
                    }),
                    "agent-turn-full-record-map": ec({
                        icon: r(295555).N,
                        label: ["agentTurnFullRecordMap.label", "Turn record map", "Label for transcript debug steps that include the turn's full record map."],
                        tooltip: ["agentTurnFullRecordMap.tooltip", "Complete record map captured for this turn, including referenced records.", "Tooltip describing turn record map debug steps in the transcript."]
                    }),
                    "agent-record-map": ec({
                        icon: r(295555).N,
                        label: ["agentRecordMap.label", "Record map", "Label for transcript debug steps that contain a partial record map."],
                        tooltip: ["agentRecordMap.tooltip", "Subset of records fetched or produced during this step.", "Tooltip describing agent record map debug steps in the transcript."]
                    }),
                    "agent-prebuilt-prompt": ec({
                        icon: r(53634).sparklesSmallIcon,
                        label: ["agentPrebuiltPrompt.label", "Prebuilt prompt", "Label for transcript debug steps that store a prebuilt prompt."],
                        tooltip: ["agentPrebuiltPrompt.tooltip", "Prompt template injected into the agent before executing this step.", "Tooltip describing agent prebuilt prompt debug steps in the transcript."]
                    }),
                    "agent-integration": ec({
                        icon: r(770985).plugSmallIcon,
                        label: ["agentIntegration.label", "Integration call", "Label for transcript debug steps that log integration activity."],
                        tooltip: ["agentIntegration.tooltip", "Metadata about calls to external integrations triggered by the agent.", "Tooltip describing agent integration debug steps in the transcript."]
                    }),
                    "agent-search-query-generation": ec({
                        icon: r(921048).magnifyingGlassSmallIcon,
                        label: ["agentSearchQueryGeneration.label", "Search query", "Label for transcript debug steps that record generated search queries."],
                        tooltip: ["agentSearchQueryGeneration.tooltip", "Query constructed for a search tool invocation within this turn.", "Tooltip describing agent search query generation debug steps."]
                    }),
                    "debug-inference": ec({
                        icon: ei,
                        label: ["debugInference.label", "Debug inference", "Label for transcript debug steps that contain raw inference payloads."],
                        tooltip: ["debugInference.tooltip", "Raw inference payload emitted for debugging purposes.", "Tooltip describing debug inference steps in the transcript."]
                    }),
                    "memory-agent": ec({
                        icon: r(53634).sparklesSmallIcon,
                        label: ["memoryAgent.label", "Memory agent", "Label for transcript debug steps that record memory agent activity."],
                        tooltip: ["memoryAgent.tooltip", "Reads or writes performed by the memory agent during this turn.", "Tooltip describing memory agent debug steps in the transcript."]
                    }),
                    "summarize-transcript": ec({
                        icon: r(402169).J,
                        label: ["summarizeTranscript.label", "Summary request", "Label for transcript debug steps that initiate transcript summarisation."],
                        tooltip: ["summarizeTranscript.tooltip", "Request issued to generate a summary of the transcript so far.", "Tooltip describing summarize transcript debug steps in the transcript."]
                    }),
                    "summarize-transcript-record-map": ec({
                        icon: r(295555).N,
                        label: ["summarizeTranscriptRecordMap.label", "Summary record map", "Label for transcript debug steps that store record maps for summarisation."],
                        tooltip: ["summarizeTranscriptRecordMap.tooltip", "Record map gathered while preparing the transcript summary.", "Tooltip describing summarize transcript record map debug steps."]
                    }),
                    "summarize-transcript-error": ec({
                        icon: r(50171).exclamationMarkTriangleSmallIcon,
                        label: ["summarizeTranscriptError.label", "Summary error", "Label for transcript debug steps that log summarisation errors."],
                        tooltip: ["summarizeTranscriptError.tooltip", "Error information captured while attempting to summarise the transcript.", "Tooltip describing summarize transcript error debug steps."]
                    }),
                    "record-pointers-updated": ec({
                        icon: r(748869).linkSmallIcon,
                        label: ["recordPointersUpdated.label", "Record pointers updated", "Label for transcript debug steps that record pointer updates."],
                        tooltip: ["recordPointersUpdated.tooltip", "References that were updated as part of this step.", "Tooltip describing record pointers updated debug steps in the transcript."]
                    }),
                    "search-observation": ec({
                        icon: r(921048).magnifyingGlassSmallIcon,
                        label: ["searchObservation.label", "Search observation", "Label for transcript debug steps that log search observations."],
                        tooltip: ["searchObservation.tooltip", "Observations captured while performing agent-driven search.", "Tooltip describing search observation debug steps in the transcript."]
                    }),
                    "researcher-text-observation": ec({
                        icon: r(402169).J,
                        label: ["researcherTextObservation.label", "Text observation", "Label for transcript debug steps that store researcher text observations."],
                        tooltip: ["researcherTextObservation.tooltip", "Text that the researcher agent extracted while analysing sources.", "Tooltip describing researcher text observation debug steps."]
                    }),
                    "researcher-next-steps": ec({
                        icon: r(436887).j,
                        label: ["researcherNextSteps.label", "Next steps", "Label for transcript debug steps that list suggested next steps."],
                        tooltip: ["researcherNextSteps.tooltip", "Recommendations the researcher agent provided for continuing work.", "Tooltip describing researcher next steps debug entries in the transcript."]
                    }),
                    mention: ec({
                        icon: r(534965).n,
                        label: ["mention.label", "Mention", "Label for transcript debug steps that represent mentions."],
                        tooltip: ["mention.tooltip", "Metadata for mentions resolved within the transcript.", "Tooltip describing mention debug steps in the transcript."]
                    }),
                    aiBlockResponse: ec({
                        icon: Z,
                        label: ["aiBlockResponse.label", "AI block response", "Label for transcript debug steps that render responses for AI blocks."],
                        tooltip: ["aiBlockResponse.tooltip", "Rendered content shown in the AI block on the page.", "Tooltip describing AI block response debug steps in the transcript."]
                    }),
                    "system-notification": ec({
                        icon: r(431644).k,
                        label: ["systemNotification.label", "System notification", "Label for transcript debug steps that surface system notifications."],
                        tooltip: ["systemNotification.tooltip", "Notices and warnings shown to the user alongside the agent transcript.", "Tooltip describing system notification debug steps in the transcript."]
                    }),
                    "generate-formula": ec({
                        icon: r(438166).s,
                        label: ["generateFormula.label", "Formula generation", "Label for transcript debug steps that capture formula generation output."],
                        tooltip: ["generateFormula.tooltip", "Details about formulas generated by the agent during this step.", "Tooltip describing generate formula debug steps in the transcript."]
                    }),
                    wait: ec({
                        icon: r(372365).clockSmallIcon,
                        label: ["wait.label", "Waiting", "Label for transcript debug steps that represent wait periods."],
                        tooltip: ["wait.tooltip", "Indicates the agent is waiting on background work before continuing.", "Tooltip describing wait debug steps in the transcript."]
                    }),
                    error: ec({
                        icon: r(50171).exclamationMarkTriangleSmallIcon,
                        label: ["error.label", "Error", "Label for transcript debug steps that capture user-visible errors."],
                        tooltip: ["error.tooltip", "User-friendly error surfaced in place of the original agent output.", "Tooltip describing error debug steps in the transcript."]
                    }),
                    "agent-message": ec({
                        icon: r(534965).n,
                        label: ["agentMessage.label", "Agent message", "Label for transcript debug steps that render agent authored messages."],
                        tooltip: ["agentMessage.tooltip", "Message the agent sent to the user during this turn.", "Tooltip describing agent message debug steps in the transcript."]
                    })
                },
                eu = el({
                    suffix: "fallback.label",
                    defaultMessage: "{stepType}",
                    description: "Fallback label when a step type has no explicit metadata mapping."
                }),
                ep = el({
                    suffix: "fallback.tooltip",
                    defaultMessage: 'Debug data for step type "{stepType}".',
                    description: "Fallback tooltip when a step type has no explicit metadata mapping."
                }),
                eg = ["results", "items", "records", "entries", "values", "data"];

            function ef(e) {
                if (Array.isArray(e)) return e;
                if (!(!(0, r(722371).Gv)(e) || Array.isArray(e)))
                    for (let t of eg) {
                        let r = e[t];
                        if (Array.isArray(r) && r.length > 0) return r
                    }
            }

            function em(e) {
                return "string" == typeof e ? e : "number" == typeof e || "boolean" == typeof e ? String(e) : Array.isArray(e) ? e.filter(Boolean).join(", ") : (0, r(722371).Gv)(e) ? ey(e) : void 0
            }

            function eh(e, t) {
                return e.length <= t ? e : `${e.slice(0,t-1)}…`
            }

            function ey(e) {
                try {
                    return JSON.stringify(e)
                } catch {
                    return
                }
            }
            let ex = {
                    padding: 8,
                    marginBottom: 20
                },
                ev = {
                    alignSelf: "flex-start",
                    borderRadius: 100,
                    display: "flex",
                    marginTop: 12,
                    marginBottom: 6,
                    padding: "7px 12px",
                    width: "fit-content"
                };

            function eb(e) {
                let t = (0, r(533992).v3)(),
                    {
                        config: n,
                        threadStore: i
                    } = e,
                    o = (0, r(682985).K8)(() => i.getSpaceId(), [i]),
                    s = (0, r(217844)._)({
                        name: "researcher" === n.type ? "ai_research_mode" : "ai_usage",
                        spaceId: o,
                        userId: t.currentUser.id,
                        amount: 1
                    }),
                    l = (0, r(622081).bl)(n),
                    {
                        upsellMessage: c,
                        actionButtonMsg: d,
                        actionForFeatureAvailability: u
                    } = (0, r(427724).x)({
                        featureAvailability: s,
                        upsellFrom: l
                    }),
                    p = (0, r(340309).o)({
                        featureAvailability: s,
                        source: l,
                        type: "text"
                    }),
                    g = (0, r(340309).o)({
                        featureAvailability: s,
                        source: l,
                        type: "primary"
                    }),
                    f = (0, r(83208).X)("upgrade_system_ai"),
                    {
                        bodyStyleKey: m
                    } = (0, r(765846).yq)(),
                    h = (0, r(765846).Cd)(m),
                    y = (0, r(960253).I)(() => ({
                        wrapper: { ...h,
                            padding: 10
                        }
                    }), [h]);
                return (0, a.jsx)(r(22262).Q, {
                    style: ex,
                    children: (0, a.jsx)("div", {
                        style: y.wrapper,
                        children: f ? p && g ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(r(754951).UpgradeButton, { ...p
                            }), (0, a.jsx)(r(754951).UpgradeButton, { ...g
                            })]
                        }) : null : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                children: c
                            }), d ? (0, a.jsx)(r(912946).A, {
                                colorPalette: "blue",
                                onClick: u,
                                iconLeading: {
                                    icon: r(989556).arrowInCircleUpSmallIcon,
                                    size: "sm"
                                },
                                style: ev,
                                children: d
                            }) : void 0]
                        })
                    })
                })
            }

            function ej(e) {
                if (!(0, r(236242).UB)(e)) {
                    let t = e.value.trim();
                    return t ? [{
                        kind: "text",
                        text: t
                    }] : []
                }
                switch (e.tagName) {
                    case "content":
                        {
                            let t = (0, r(236242).PJ)(e.children ? ? []).trim();
                            return t ? [{
                                kind: "markdown",
                                markdown: t
                            }] : []
                        }
                    case "properties":
                        {
                            let t = (0, r(236242).PJ)(e.children ? ? []).trim();
                            if (!t) return [];
                            let n = function(e) {
                                try {
                                    var t, n = JSON.parse(e);
                                    if (!(0, r(722371).Gv)(n)) return;
                                    let a = {};
                                    for (let [e, i] of (0, r(722371).WP)(n)) {
                                        a[e] = (t = i, "string" == typeof t || "number" == typeof t || "boolean" == typeof t || null == t ? t : Array.isArray(t) ? t.map(e => ew(e)) : ew(t))
                                    }
                                    return a
                                } catch {
                                    return
                                }
                            }(t);
                            if (n) return [{
                                kind: "properties",
                                properties: n
                            }];
                            return [eS(t)]
                        }
                    case "warnings":
                        {
                            let t = (0, r(236242).PJ)(e.children ? ? []).trim();
                            return t ? [{
                                kind: "warning",
                                message: t
                            }] : []
                        }
                    default:
                        {
                            let t = (0, r(236242)._o)(e).trim();
                            return t ? [{
                                kind: "markdown",
                                markdown: t
                            }] : []
                        }
                }
            }

            function eS(e) {
                return {
                    kind: "markdown",
                    markdown: e
                }
            }
            let ek = {
                container: {
                    width: "100%"
                },
                warningBox: {
                    borderRadius: 8,
                    padding: "8px 10px",
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    backgroundColor: r(632079).Tj.background.secondaryTranslucent
                },
                propertiesGroup: {
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    borderRadius: 8,
                    padding: 8,
                    backgroundColor: r(632079).Tj.background.primary
                },
                propertyRow: {
                    display: "grid",
                    gridTemplateColumns: "160px 1fr",
                    gap: 8,
                    alignItems: "flex-start"
                },
                propertyName: {
                    wordBreak: "break-word"
                },
                style0: {
                    minWidth: 0
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function eI(e) {
                let {
                    content: t,
                    aiChatFeatureController: i
                } = e, o = (0, n.useMemo)(() => (function(e) {
                    let t = e.trim();
                    if (!t) return [];
                    try {
                        let e = (0, r(236242).BD)(t);
                        if (!e.length) return [eS(t)];
                        return e.flatMap(ej)
                    } catch {
                        return [eS(t)]
                    }
                })(t), [t]);
                return 0 === o.length ? null : (0, a.jsx)(r(4458).VP, {
                    gap: 8,
                    className: "autolayout-col autolayout-fill-width",
                    style: ek.positionRelative,
                    children: o.map((e, t) => {
                        switch (e.kind) {
                            case "text":
                                return (0, a.jsx)(r(212024).h, {
                                    markdown: e.text,
                                    aiChatFeatureController: i
                                }, `text-${t}`);
                            case "markdown":
                                return (0, a.jsx)(r(212024).h, {
                                    markdown: e.markdown,
                                    aiChatFeatureController: i
                                }, `markdown-${t}`);
                            case "properties":
                                return (0, a.jsx)("div", {
                                    style: ek.propertiesGroup,
                                    children: function(e) {
                                        let {
                                            properties: t,
                                            styles: n,
                                            aiChatFeatureController: i
                                        } = e, o = (0, r(722371).WP)(t);
                                        return 0 === o.length ? null : (0, a.jsx)(r(4458).VP, {
                                            gap: 8,
                                            className: "autolayout-col autolayout-fill-width",
                                            style: n.positionRelative,
                                            children: o.map(([e, t]) => (0, a.jsxs)("div", {
                                                style: n.propertyRow,
                                                children: [(0, a.jsx)(r(111010).D, {
                                                    styleKey: "captionMedium",
                                                    colorVariant: "tertiary",
                                                    style: n.propertyName,
                                                    children: e
                                                }), (0, a.jsx)("div", {
                                                    style: n.style0,
                                                    children: (0, a.jsx)(r(212024).h, {
                                                        markdown: function e(t) {
                                                            return null == t ? "—" : Array.isArray(t) ? t.map(t => e(t)).join(", ") : String(t)
                                                        }(t),
                                                        aiChatFeatureController: i
                                                    })
                                                })]
                                            }, e))
                                        })
                                    }({
                                        properties: e.properties,
                                        styles: ek,
                                        aiChatFeatureController: i
                                    })
                                }, `properties-${t}`);
                            case "warning":
                                return (0, a.jsx)("div", {
                                    style: ek.warningBox,
                                    children: (0, a.jsx)(r(111010).D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: "secondary",
                                        children: e.message
                                    })
                                }, `warning-${t}`);
                            default:
                                return null
                        }
                    })
                })
            }

            function ew(e) {
                if (null == e) return "";
                if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) return String(e);
                try {
                    return JSON.stringify(e)
                } catch {
                    return String(e)
                }
            }
            let eT = (0, r(109939).YK)({
                copy: {
                    id: "ResearchModeReportStep.copy",
                    defaultMessage: "Copy"
                },
                reportGeneratingTooltipHeader: {
                    id: "ResearchModeReportStep.reportGeneratingTooltipHeader",
                    defaultMessage: "Report is being generated…"
                },
                reportGeneratingTooltipBody: {
                    id: "ResearchModeReportStep.reportGeneratingTooltipBody",
                    defaultMessage: "Actions will be available when the report is complete"
                },
                saveAsPageTooltip: {
                    id: "ResearchModeReportStep.saveAsPageTooltip",
                    defaultMessage: "Save report to your private pages"
                },
                saveAsPageToLocationTooltip: {
                    id: "ResearchModeReportStep.saveAsPageToLocationTooltip",
                    defaultMessage: "Select a location to save your report"
                },
                saveAsPage: {
                    id: "ResearchModeReportStep.saveAsPage",
                    defaultMessage: "Save as page"
                }
            });

            function eC({
                linkAnnotation: e,
                citationInfo: t,
                environment: n
            }) {
                var a, i;
                let o = p().cQR(e);
                if (!o) return {
                    annotations: [e],
                    status: "other_link"
                };
                let s = o.indexOf("#citation:");
                if (-1 === s) return {
                    annotations: [e],
                    status: "other_link"
                };
                let [l, c, d] = decodeURIComponent(o.slice(s + 10)).split(","), u = t.stepCitations[l];
                if (!u) return {
                    annotations: [e],
                    status: "missing_citation"
                };
                let g = t => {
                    if (!t.citationInfo) return e;
                    if ("notion" === t.citationInfo.citationType) return p().X$({
                        href: t.citationInfo.blockId ? (0, r(483227).Ay)({
                            store: new(r(970831)).B(n, {
                                table: "block",
                                id: t.citationInfo.blockId
                            }),
                            fullyQualified: !1,
                            pageVisitSource: r(254656).y8.AIQna
                        }) : (0, r(483227).Ay)({
                            store: new(r(970831)).B(n, {
                                table: "block",
                                id: t.citationInfo.pageId
                            }),
                            fullyQualified: !1,
                            pageVisitSource: r(254656).y8.AIQna
                        }),
                        blockId: t.citationInfo.blockId || t.citationInfo.pageId,
                        type: "block"
                    });
                    if ("universal_search" === t.citationInfo.citationType) {
                        if ("slack" === t.citationInfo.target) {
                            let e = t.citationInfo.href;
                            return p().X$({
                                href: (0, r(281708).V9)(e),
                                threadHref: (0, r(281708).V9)(e),
                                type: "slack",
                                domain: t.citationInfo.domain || "",
                                baseUrl: t.citationInfo.baseUrl || "",
                                channelId: t.citationInfo.channelId || "",
                                messageId: t.citationInfo.messageId || "",
                                threadTs: t.citationInfo.threadTs || ""
                            })
                        } else if ("google-drive" === t.citationInfo.target) return p().X$({
                            href: (0, r(281708).V9)(t.citationInfo.href),
                            type: "google-drive",
                            messageId: t.citationInfo.messageId || "",
                            url: t.citationInfo.url || ""
                        });
                        else if ("github" === t.citationInfo.target) return p().X$({
                            href: (0, r(281708).V9)(t.citationInfo.href),
                            type: "github",
                            messageId: t.citationInfo.messageId || "",
                            url: t.citationInfo.url || ""
                        });
                        else if ("jira" === t.citationInfo.target) return p().X$({
                            href: (0, r(281708).V9)(t.citationInfo.href),
                            type: "jira",
                            messageId: t.citationInfo.messageId || "",
                            url: t.citationInfo.url || ""
                        });
                        else if ("webpage" === t.citationInfo.target) {
                            let e = (0, r(932956).OU)(t.citationInfo.href);
                            return p().X$({
                                href: (0, r(281708).RW)(t.citationInfo.href),
                                type: "webpage",
                                url: (null == e ? void 0 : e.url) || ""
                            })
                        }
                    }
                    return e
                };
                if ("claim" === c) {
                    let t = (u.claims || []).find(e => e.id === d);
                    if (!t) return {
                        annotations: [e],
                        status: "missing_citation"
                    };
                    let r = (null == (a = u.artifacts) ? void 0 : a.filter(e => {
                        var r;
                        return null == (r = t.supportingArtifactIds) ? void 0 : r.includes(e.id)
                    })) ? ? [];
                    return r.length ? {
                        annotations: r.map(g),
                        status: "citation"
                    } : {
                        annotations: [e],
                        status: "missing_citation"
                    }
                }
                if ("artifact" === c) {
                    let t = null == (i = u.artifacts) ? void 0 : i.find(e => e.id === d);
                    return t ? {
                        annotations: [g(t)],
                        status: "citation"
                    } : {
                        annotations: [e],
                        status: "missing_citation"
                    }
                }
                return {
                    annotations: [e],
                    status: "missing_citation"
                }
            }

            function eM({
                processedMarkdownList: e,
                environment: t,
                clipboardActions: a,
                linkAnnotationToCitationAnnotations: i,
                useExportedCitations: o
            }) {
                let s = (0, r(815048).fJ)(r(94386).g),
                    l = (0, r(815048).fJ)(r(393771).S);
                return (0, n.useMemo)(() => {
                    if (!e.length || !a || ["idle", "pending"].includes(s.status) || ["idle", "pending"].includes(l.status)) return;
                    let n = s.value,
                        c = l.value;
                    if (n && c) return e.map(e => r(363256).e.withListenerIgnored(() => h({
                        markdown: e,
                        environment: t,
                        linkAnnotationToCitationAnnotations: i,
                        useExportedCitations: o,
                        markdownLinkifyIt: n,
                        tinyMceMicrosoftWordPasteFilter: c,
                        clipboardActions: a
                    })))
                }, [e, t, s, l, a, i, o])
            }

            function eA(e) {
                let t = (0, r(682985).K8)(() => r(838448).default.getActiveSession(), []);
                return (0, r(682985).K8)(() => {
                    if (!t) return;
                    let n = t.evaluatorFromStoreState.state;
                    return e && e.stepCitations && Object.values(e.stepCitations).forEach(e => {
                        var t;
                        null == (t = e.artifacts) || t.forEach(e => {
                            var t;
                            if ((null == (t = e.citationInfo) ? void 0 : t.citationType) === "universal_search")
                                if ("slack" === e.citationInfo.target) {
                                    let t = (0, r(932956).L1)(e.citationInfo.href);
                                    if (t) {
                                        let a = e.citationInfo.title || "",
                                            i = e.citationInfo.text || "",
                                            o = e.citationInfo.messages || [],
                                            s = o.length > 0 ? o.map(e => (0, r(281708).V9)(e.messageId)) : [(0, r(281708).V9)(e.citationInfo.href)];
                                        n.setUniversalResultPayload((0, r(281708).V9)(e.citationInfo.href), {
                                            href: (0, r(281708).V9)(e.citationInfo.href),
                                            threadHref: (0, r(281708).V9)(e.citationInfo.href),
                                            type: "slack",
                                            title: a,
                                            text: i,
                                            lastEdited: "",
                                            user: "",
                                            ...t,
                                            threadMessages: s
                                        }), o.forEach((e, t) => {
                                            let o = (0, r(932956).L1)(e.messageId);
                                            o && (0 === t && o.threadTs && n.setUniversalResultPayload((0, r(281708).V9)(e.threadId), {
                                                href: (0, r(281708).V9)(e.threadId),
                                                type: "slack",
                                                threadHref: (0, r(281708).V9)(e.threadId),
                                                title: a,
                                                text: i,
                                                user: "",
                                                lastEdited: e.lastEdited,
                                                domain: o.domain,
                                                baseUrl: o.baseUrl,
                                                channelId: o.channelId,
                                                messageId: o.messageId,
                                                threadTs: o.threadTs,
                                                threadMessages: s
                                            }), n.setUniversalResultPayload((0, r(281708).V9)(e.messageId), {
                                                href: (0, r(281708).V9)(e.messageId),
                                                type: "slack",
                                                threadHref: (0, r(281708).V9)(e.threadId),
                                                title: a,
                                                text: e.text,
                                                user: e.user,
                                                lastEdited: e.lastEdited,
                                                domain: o.domain,
                                                baseUrl: o.baseUrl,
                                                channelId: o.channelId,
                                                messageId: o.messageId,
                                                threadTs: o.threadTs,
                                                threadMessages: s
                                            }))
                                        })
                                    }
                                } else "google-drive" === e.citationInfo.target ? n.setUniversalResultPayload((0, r(281708).V9)(e.citationInfo.href), {
                                    href: (0, r(281708).V9)(e.citationInfo.href),
                                    type: "google-drive",
                                    title: e.citationInfo.title || "",
                                    text: e.citationInfo.text || "",
                                    lastEdited: "",
                                    url: e.citationInfo.url || ""
                                }) : "github" === e.citationInfo.target ? n.setUniversalResultPayload((0, r(281708).V9)(e.citationInfo.href), {
                                    href: (0, r(281708).V9)(e.citationInfo.href),
                                    type: "github",
                                    title: e.citationInfo.title || "",
                                    text: e.citationInfo.text || "",
                                    lastEdited: "",
                                    url: e.citationInfo.url || ""
                                }) : "jira" === e.citationInfo.target ? n.setUniversalResultPayload((0, r(281708).V9)(e.citationInfo.href), {
                                    href: (0, r(281708).V9)(e.citationInfo.href),
                                    type: "jira",
                                    title: e.citationInfo.title || "",
                                    text: e.citationInfo.text || "",
                                    lastEdited: "",
                                    url: e.citationInfo.url || ""
                                }) : "webpage" === e.citationInfo.target && n.setUniversalResultPayload((0, r(281708).RW)(e.citationInfo.href), {
                                    href: (0, r(281708).RW)(e.citationInfo.href),
                                    type: "webpage",
                                    title: e.citationInfo.title || "",
                                    text: e.citationInfo.text || "",
                                    lastEdited: "",
                                    url: e.citationInfo.url || ""
                                })
                        })
                    }), n
                }, [e, t])
            }

            function eR(e) {
                let {
                    step: t,
                    wrapInAssistantSurfaceProvider: n
                } = e, i = (0, r(972740).L)();
                return i ? n ? (0, a.jsx)(r(316258).hP, {
                    surface: r(316258).wy.fullPage,
                    children: (0, a.jsx)(eN, {
                        spaceStore: i,
                        markdown: t.value,
                        citationInfo: t.citationInfo || {
                            stepCitations: {}
                        }
                    })
                }) : (0, a.jsx)(eN, {
                    spaceStore: i,
                    markdown: t.value,
                    citationInfo: t.citationInfo || {
                        stepCitations: {}
                    }
                }) : null
            }
            let eP = {
                display: "flex",
                flexDirection: "column",
                position: "relative",
                marginBottom: 16,
                gap: 16
            };

            function eN(e) {
                let {
                    markdown: t,
                    citationInfo: i,
                    spaceStore: o
                } = e, s = (0, n.useRef)(null), l = (0, r(533992).v3)(), c = (0, r(682985).uB)(void 0, r(931030).D), d = eA(i);
                (0, r(656484).c2)({
                    containerRef: s,
                    citationHoverStore: c,
                    parentStore: o,
                    evaluatorState: d
                });
                let u = (0, n.useMemo)(() => [(0, r(177861).y5)(t)], [t]),
                    {
                        value: p
                    } = (0, r(815048).fJ)(r(235645).R.clipboardActions),
                    g = (0, n.useCallback)(e => eC({
                        linkAnnotation: e,
                        citationInfo: i,
                        environment: l
                    }), [i, l]),
                    f = eM({
                        processedMarkdownList: u,
                        environment: l,
                        clipboardActions: p,
                        linkAnnotationToCitationAnnotations: g,
                        useExportedCitations: !1
                    }),
                    m = null == f ? void 0 : f[0],
                    h = (0, n.useMemo)(() => {
                        let e = [];
                        for (let t in i.stepCitations)
                            for (let r of i.stepCitations[t].artifacts || []) e.push(r.citationInfo);
                        return e
                    }, [i.stepCitations]);
                return m ? (0, a.jsxs)("div", {
                    style: eP,
                    ref: s,
                    children: [(0, a.jsx)(r(744628).c, {
                        displayName: "AIChatTranscript.ResearcherReportStep",
                        disabled: !0,
                        children: (0, a.jsx)(r(385827).s, {
                            allowSelectionWithin: !0,
                            children: (0, a.jsx)(r(301124).A, {
                                store: m,
                                disabled: !0,
                                disableCommentMenu: !0,
                                disableHoverMenu: !0,
                                disableDrag: !0
                            })
                        })
                    }), (0, a.jsx)(r(417115).cE, {
                        containerRef: s,
                        hoverStore: c,
                        parentStore: o,
                        getPayloadDataForHref: e => {
                            let t = h.filter(e => (null == e ? void 0 : e.citationType) === "universal_search");
                            return (0, r(983617).Dd)(t, e)
                        },
                        useCompactWebPreview: !0
                    })]
                }) : null
            }

            function eF(e) {
                let {
                    step: t,
                    wrapInAssistantSurfaceProvider: n
                } = e, i = (0, r(972740).L)();
                return i ? n ? (0, a.jsx)(r(316258).hP, {
                    surface: r(316258).wy.fullPage,
                    children: (0, a.jsx)(eV, {
                        step: t,
                        spaceStore: i
                    })
                }) : (0, a.jsx)(eV, {
                    step: t,
                    spaceStore: i
                }) : null
            }

            function eV(e) {
                let {
                    navigate: t
                } = (0, n.useContext)(r(44894).E), {
                    step: o,
                    spaceStore: s
                } = e, l = o.finished, c = (0, n.useMemo)(() => o.citationInfo || {
                    stepCitations: {}
                }, [o]), d = (0, r(533992).v3)(), u = (0, n.useContext)(i), h = (0, r(684535).K)(), y = (0, n.useMemo)(() => [(0, r(177861).y5)(o.value)], [o.value]), {
                    value: x
                } = (0, r(815048).fJ)(r(235645).R.clipboardActions), {
                    value: v
                } = (0, r(815048).fJ)(r(161333).e), {
                    value: b
                } = (0, r(815048).fJ)(r(969899).OM), j = (0, n.useCallback)(e => eC({
                    linkAnnotation: e,
                    citationInfo: c,
                    environment: d
                }), [c, d]), S = eM({
                    processedMarkdownList: y,
                    environment: d,
                    clipboardActions: x,
                    linkAnnotationToCitationAnnotations: j,
                    useExportedCitations: !1
                }), k = !!(null == S ? void 0 : S[0]), I = (0, n.useCallback)(() => {
                    var e;
                    if (!b || !v) return;
                    let t = y[0];
                    if (!t) return;
                    let n = new Map,
                        a = 1,
                        i = t.replace(/\[(\*\*\[\d+\]\*\*)\]\(#citation:([^)]+)\)/g, (e, t, i) => {
                            try {
                                let [e, t, s] = decodeURIComponent(i).split(",");
                                if (!e || !t || !s) return "";
                                let l = c.stepCitations[e];
                                if (!l) return "";
                                let u = [];
                                if ("claim" === t) {
                                    let e = l.claims.find(e => e.id === s);
                                    null != e && e.supportingArtifactIds && (u = e.supportingArtifactIds.map(e => {
                                        var t;
                                        return null == (t = l.artifacts) ? void 0 : t.find(t => t.id === e)
                                    }).filter(Boolean) ? ? [])
                                } else if ("artifact" === t) {
                                    var o;
                                    let e = null == (o = l.artifacts) ? void 0 : o.find(e => e.id === s);
                                    e && (u = [e])
                                }
                                if (!u.length) return "";
                                return u.map(e => (function(e, t) {
                                    if (!(null != e && e.citationInfo)) return;
                                    let n = e.citationInfo;
                                    if ("notion" === n.citationType) {
                                        let e = n.blockId ? ? n.pageId;
                                        if (!e) return;
                                        return (0, r(483227).Ay)({
                                            store: new(r(970831)).B(t, {
                                                table: "block",
                                                id: e
                                            }),
                                            fullyQualified: !0,
                                            pageVisitSource: r(254656).y8.AIQna
                                        })
                                    }
                                    if ("universal_search" === n.citationType)
                                        if ("slack" !== n.target) return n.url;
                                        else {
                                            let {
                                                baseUrl: e,
                                                channelId: t,
                                                messageId: a,
                                                domain: i,
                                                threadTs: o
                                            } = n;
                                            return t && a ? (0, r(313168).mQ)({
                                                baseUrl: e,
                                                channelId: t,
                                                messageId: a,
                                                domain: i,
                                                threadTs: o
                                            }) : n.baseUrl || n.href
                                        }
                                })(e, d)).filter(e => !!e).map(e => {
                                    let t = n.get(e);
                                    return void 0 === t && (t = a++, n.set(e, t)), `[[${t}]](${e})`
                                }).join("")
                            } catch (e) {
                                return ""
                            }
                        });
                    b.copyString({
                        environment: d,
                        stringValue: i,
                        copiedMessage: v.clipboardMessages.copiedToClipboard
                    }), null == (e = u.trackResearchModeReportCopied) || e.call(u)
                }, [d, y, u, c, v, b]);
                (0, n.useEffect)(() => {
                    if (k) {
                        var e;
                        null == (e = u.trackResearchModeReportFirstCharRendered) || e.call(u)
                    }
                }, [u, k]);
                let w = (0, r(815048).fJ)(r(94386).g),
                    T = (0, r(815048).fJ)(r(393771).S),
                    C = (0, n.useCallback)(e => {
                        "chat" === h.name ? t({
                            environment: d,
                            url: (0, r(366367).EY)({
                                currentRoute: h,
                                pageId: e.id,
                                pageVisitSource: r(254656).y8.AIQna,
                                isMobile: r(986939).A.isMobile
                            })
                        }) : (0, r(545586).navigateToBlock)({
                            environment: d,
                            store: e,
                            pageVisitSource: r(254656).y8.AIQna,
                            openInSidePeek: !0
                        })
                    }, [d, h, t]),
                    M = (0, n.useCallback)((e, t, n, a) => {
                        if (!x) return;
                        let i = n.inMemoryRecordCache.makeGetRecordModelFn(e.currentUser.id),
                            o = x.markdownToBlocks({
                                environment: e,
                                text: a,
                                inMemoryRecordCache: n.inMemoryRecordCache,
                                transaction: t,
                                markdownOptions: {},
                                markdownLinkifyIt: w.value,
                                tinyMceMicrosoftWordPasteFilter: T.value,
                                parentPointer: n.getSpaceShardedPointer()
                            });
                        if (!o || 0 === o.length) return;
                        let s = f({
                            linkAnnotationToCitationAnnotations: j,
                            useExportedCitations: !0,
                            getRecordModelFn: i
                        });
                        for (let r of o) m({
                            store: r,
                            environment: e,
                            transaction: t,
                            modifyTokens: s
                        });
                        let l = "header" === o[0].getType() ? o.shift() : void 0;
                        if (l) {
                            var c;
                            r(41403).R9({
                                environment: e,
                                store: n.getBlockTitleStore(),
                                value: (null == (c = l.getTitleStore()) ? void 0 : c.getValue()) || p().x9d(""),
                                transaction: t
                            })
                        } else r(41403).R9({
                            environment: e,
                            store: n.getBlockTitleStore(),
                            value: p().x9d("New Report"),
                            transaction: t
                        });
                        let d = n.getContentStore();
                        for (let e of o) g().NI({
                            childStore: e,
                            parentStore: d,
                            transaction: t
                        })
                    }, [x, j, w.value, T.value]),
                    A = (0, n.useCallback)(async () => {
                        var e;
                        if (!x || ["idle", "pending"].includes(w.status) || ["idle", "pending"].includes(T.status)) return;
                        let t = y[0];
                        if (!t) return;
                        let n = await (0, r(323836).M)({
                            environment: d,
                            from: "research_mode_report",
                            pageVisitSource: r(254656).y8.AIQna,
                            navigateOnCreate: !1
                        });
                        if (!n) return;
                        let a = n.getSpaceId();
                        (0, r(377796).createAndCommit)({
                            userAction: "ResearchModeReportStep.createReportPage",
                            environment: d,
                            cellTarget: {
                                spaceWithId: a
                            },
                            canUndo: !1,
                            perform: e => {
                                M(d, e, n, t)
                            }
                        }), null == (e = u.trackResearchModeReportSavedToPage) || e.call(u), C(n)
                    }, [u, C, d, x, w, T, y, M]),
                    R = (0, n.useCallback)(e => {
                        e.stopPropagation();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, r(295447).Z1)({
                                environment: d,
                                table: r(832375).evP,
                                spaceId: s.id
                            }),
                            a = r(970831).B.createChildStore(s, {
                                table: r(832375).evP,
                                id: n,
                                spaceId: s.id
                            });
                        r(351198).ho({
                            environment: d,
                            blocks: [a],
                            originRect: t,
                            moveToContext: "action_menu",
                            isAddTo: !1,
                            disableSuccessToast: !0,
                            forceShowPrivatePageOption: !0,
                            dontCommitActions: !0,
                            onAccept: ({
                                value: e
                            }) => {
                                (e => {
                                    var t;
                                    if (!x || ["idle", "pending"].includes(w.status) || ["idle", "pending"].includes(T.status)) return;
                                    let i = y[0];
                                    if (!i || !e.addBlockToPage || "page" !== e.addBlockToPage.target) return;
                                    let {
                                        pageId: o
                                    } = e.addBlockToPage, l = new(r(970831)).B(d, {
                                        table: r(832375).evP,
                                        id: o,
                                        spaceId: s.id
                                    });
                                    (0, r(377796).createAndCommit)({
                                        userAction: "ResearchModeReportStep.createReportPage",
                                        environment: d,
                                        cellTarget: {
                                            spaceWithId: s.id
                                        },
                                        canUndo: !1,
                                        perform: e => {
                                            r(124937).Wv({
                                                environment: d,
                                                id: n,
                                                type: "page",
                                                spaceId: s.id,
                                                transaction: e,
                                                inMemoryRecordCache: a.inMemoryRecordCache
                                            }), M(d, e, a, i), g().NI({
                                                childStore: a,
                                                parentStore: l.getContentStore(),
                                                transaction: e
                                            })
                                        }
                                    }), C(a), null == (t = u.trackResearchModeReportSavedToPage) || t.call(u)
                                })((0, r(418511)._W)(e))
                            }
                        })
                    }, [d, u, C, s, x, w, T, y, M]);
                return (0, a.jsxs)(r(4458).fI, {
                    gap: 8,
                    children: [(0, a.jsx)(r(51831).m, {
                        content: () => l ? (0, a.jsx)(r(109939).sA, { ...eT.copy
                        }) : (0, a.jsx)(eD, {}),
                        children: e => (0, a.jsx)(r(308438).A, {
                            icon: r(703696).V,
                            onClick: I,
                            title: (0, a.jsx)(r(109939).sA, { ...eT.copy
                            }),
                            variant: "tinted",
                            disabled: !l,
                            tooltipEvents: e
                        })
                    }), (0, a.jsx)(r(51831).m, {
                        content: () => l ? (0, a.jsx)(r(109939).sA, { ...eT.saveAsPageTooltip
                        }) : (0, a.jsx)(eD, {}),
                        children: e => (0, a.jsx)(r(51831).m, {
                            content: () => l ? (0, a.jsx)(r(109939).sA, { ...eT.saveAsPageToLocationTooltip
                            }) : (0, a.jsx)(eD, {}),
                            children: t => (0, a.jsx)(r(308438).E, {
                                variant: "tinted",
                                icon: r(245102).arrowLineDownIcon,
                                onClick: A,
                                onDropdownClick: R,
                                disabled: !l,
                                singleLineTitle: !0,
                                title: (0, a.jsx)(r(109939).sA, { ...eT.saveAsPage
                                }),
                                tooltipEvents: e,
                                dropdownTooltipEvents: t
                            })
                        })
                    })]
                })
            }
            let eB = {
                tooltipBody: {
                    color: r(632079).Tj.text.secondary
                }
            };

            function eD() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r(109939).sA, { ...eT.reportGeneratingTooltipHeader
                    }), (0, a.jsx)("div", {
                        style: eB.tooltipBody,
                        children: (0, a.jsx)(r(109939).sA, { ...eT.reportGeneratingTooltipBody
                        })
                    })]
                })
            }
            r(814603), r(147566), r(198721);
            let eE = {
                artifactContent: {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 8,
                    fontSize: 12,
                    color: r(632079).Tj.text.primary
                },
                iconWrap: {
                    position: "relative",
                    marginInlineEnd: 12
                },
                icon: {
                    position: "absolute",
                    insetInlineStart: 0,
                    top: 0
                },
                titleElement: {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                wrapper: {
                    padding: "12px 16px",
                    borderRadius: 4,
                    backgroundColor: r(632079).Tj.background.elevated,
                    position: "relative"
                },
                closeButton: {
                    position: "absolute",
                    insetInlineEnd: 8,
                    top: 8,
                    cursor: "pointer",
                    color: r(632079).Tj.text.secondary
                },
                style0: {
                    width: "100%"
                },
                style1: {
                    fontSize: 14
                }
            };

            function ez(e) {
                var t, i, o, s, l, c, d, u, p, g, f, m, h, y, x, v, b, j, S;
                let k, {
                        artifact: I,
                        researchModeCitationInfo: w,
                        onClose: T
                    } = e,
                    C = (0, r(533992).v3)(),
                    M = (0, r(723240).r)(),
                    A = (0, n.useMemo)(() => {
                        var e, t, n;
                        return (null == (e = I.citationInfo) ? void 0 : e.citationType) === "notion" && null != (t = I.citationInfo) && t.pageId ? new(r(970831)).B(C, {
                            table: "block",
                            id: null == (n = I.citationInfo) ? void 0 : n.pageId
                        }) : void 0
                    }, [C, I.citationInfo]),
                    R = (0, n.useMemo)(() => {
                        var e, t, n;
                        return (null == (e = I.citationInfo) ? void 0 : e.citationType) === "notion" && null != (t = I.citationInfo) && t.blockId ? new(r(970831)).B(C, {
                            table: "block",
                            id: null == (n = I.citationInfo) ? void 0 : n.blockId
                        }) : void 0
                    }, [C, I.citationInfo]),
                    {
                        metaHref: P,
                        href: N
                    } = (0, r(682985).K8)(() => {
                        var e, t, n, a, i, o, s, l, c;
                        if ((null == (e = I.citationInfo) ? void 0 : e.citationType) === "claim") return {
                            metaHref: void 0,
                            href: void 0
                        };
                        if ((null == (t = I.citationInfo) ? void 0 : t.citationType) === "notion") {
                            if (!A) return {
                                metaHref: void 0,
                                href: void 0
                            };
                            let e = (0, r(483227).Ay)({
                                store: R || A,
                                fullyQualified: !1,
                                pageVisitSource: r(254656).y8.AIQna
                            });
                            return {
                                metaHref: e,
                                href: e
                            }
                        }
                        if ((null == (n = I.citationInfo) ? void 0 : n.citationType) === "user") {
                            let e = void 0 !== M ? (0, r(805697).o4)({
                                userId: null == (i = I.citationInfo) ? void 0 : i.userId,
                                spaceIdCreator: C.idCreator.getSpaceIdCreatorSync(M),
                                pageVisitSource: r(254656).y8.AIChat
                            }) : void 0;
                            return {
                                metaHref: e,
                                href: e
                            }
                        } {
                            if ((null == (a = I.citationInfo) ? void 0 : a.target) !== "slack") return {
                                metaHref: null == (l = I.citationInfo) ? void 0 : l.url,
                                href: null == (c = I.citationInfo) ? void 0 : c.url
                            };
                            let e = (0, r(313168).mQ)({ ...I.citationInfo,
                                channelId: (null == (o = I.citationInfo) ? void 0 : o.channelId) || "",
                                messageId: (null == (s = I.citationInfo) ? void 0 : s.messageId) || ""
                            });
                            return {
                                metaHref: e,
                                href: e
                            }
                        }
                    }, [A, R, I.citationInfo, M, C.idCreator]);
                if ((null == (t = I.citationInfo) ? void 0 : t.citationType) === "claim") k = (0, a.jsxs)("div", {
                    style: eE.artifactContent,
                    children: [(0, a.jsx)("div", {
                        style: eE.iconWrap,
                        children: (0, a.jsx)(r(16275).I, {
                            icon: r(93042).checkmarkCircleFillIcon,
                            colorPalette: "green",
                            colorVariant: "accentPrimary"
                        })
                    }), (0, a.jsx)(e$, {
                        stepKey: null == (s = I.citationInfo) ? void 0 : s.stepKey,
                        claimId: null == (l = I.citationInfo) ? void 0 : l.claimId,
                        claims: (null == (c = w.stepCitations[null == (d = I.citationInfo) ? void 0 : d.stepKey]) ? void 0 : c.claims) || [],
                        artifacts: (null == (u = w.stepCitations[null == (p = I.citationInfo) ? void 0 : p.stepKey]) ? void 0 : u.artifacts) || [],
                        researchModeCitationInfo: w
                    })]
                }, I.id);
                else if ((null == (i = I.citationInfo) ? void 0 : i.citationType) === "notion") {
                    let e = null != (g = I.citationInfo) && g.blockId ? [null == (f = I.citationInfo) ? void 0 : f.blockId] : [];
                    k = (0, a.jsx)(r(590422).Q, {
                        href: N,
                        metaHref: P,
                        external: !0,
                        children: (0, a.jsxs)("div", {
                            style: eE.artifactContent,
                            children: [(0, a.jsx)("div", {
                                style: eE.iconWrap,
                                children: A ? (0, a.jsx)(r(417115).ts, {
                                    citation: {
                                        id: (0, r(418672).ew)(null == (m = I.citationInfo) ? void 0 : m.pageId),
                                        pointer: {
                                            table: "block",
                                            id: null == (h = I.citationInfo) ? void 0 : h.pageId
                                        },
                                        type: I.citationInfo.citationType,
                                        store: A,
                                        inlineCitedBlockIds: e,
                                        ...I.citationInfo
                                    },
                                    size: 14,
                                    style: eE.icon
                                }) : void 0
                            }), A && 0 === e.length ? (0, a.jsxs)("div", {
                                style: eE.style0,
                                children: [(0, a.jsx)(r(627918).A, {
                                    store: A,
                                    style: eE.style1
                                }), (0, a.jsx)(r(417115).M9, {
                                    citationText: I.content
                                })]
                            }) : void 0, A && e.length > 0 ? (0, a.jsx)(r(417115).ln, {
                                inlineCitedBlockIds: e,
                                store: A
                            }) : void 0]
                        }, I.id)
                    })
                } else if ((null == (o = I.citationInfo) ? void 0 : o.citationType) === "universal_search") {
                    let e;
                    if ((null == (y = I.citationInfo) ? void 0 : y.target) === "slack") {
                        let t = null == (b = I.citationInfo) || null == (b = b.text) || null == (b = b.split(":")) ? void 0 : b[0];
                        e = (0, a.jsx)(r(109939).sA, {
                            id: "ResearcherPlanStep.SlackCitationTitle.title",
                            defaultMessage: "{author} in #{title}",
                            values: {
                                title: null == (j = I.citationInfo) ? void 0 : j.title,
                                author: t
                            }
                        })
                    } else e = (0, a.jsx)("span", {
                        style: eE.titleElement,
                        children: null == (S = I.citationInfo) ? void 0 : S.title
                    });
                    k = (0, a.jsx)(r(590422).Q, {
                        href: N,
                        metaHref: P,
                        external: !0,
                        children: (0, a.jsxs)("div", {
                            style: eE.artifactContent,
                            children: [null != (x = I.citationInfo) && x.target ? (0, a.jsx)("div", {
                                style: eE.iconWrap,
                                children: (0, a.jsx)(r(417115).ts, {
                                    citation: function(e) {
                                        switch (e.target) {
                                            case "slack":
                                                return { ...e,
                                                    href: (0, r(281708).V9)(e.href),
                                                    domain: e.domain || "",
                                                    baseUrl: e.baseUrl || "",
                                                    channelId: e.channelId || "",
                                                    messageId: e.messageId || "",
                                                    threadTs: e.threadTs || "",
                                                    type: "slack"
                                                };
                                            case "webpage":
                                                return { ...e,
                                                    href: (0, r(281708).RW)(e.href),
                                                    url: e.url || "",
                                                    type: "webpage"
                                                };
                                            case "microsoft-teams":
                                                return { ...e,
                                                    href: (0, r(281708).V9)(e.href),
                                                    url: e.url || "",
                                                    type: "microsoft-teams",
                                                    channelId: e.channelId || "",
                                                    messageId: e.messageId || "",
                                                    threadTs: e.threadTs || "",
                                                    messageType: e.messageType || "channel"
                                                };
                                            case "helpdoc":
                                                return { ...e,
                                                    href: (0, r(281708).h5)(e.href),
                                                    url: e.url || "",
                                                    type: "helpdoc"
                                                };
                                            case "githubCode":
                                                return { ...e,
                                                    href: (0, r(281708).V9)(e.href),
                                                    url: e.url || "",
                                                    type: "github"
                                                };
                                            case "discord":
                                                return { ...e,
                                                    href: (0, r(281708).V9)(e.href),
                                                    url: e.url || "",
                                                    messageId: e.messageId || "",
                                                    channelId: e.channelId || "",
                                                    guildId: e.guildId || "",
                                                    type: "discord"
                                                };
                                            default:
                                                if ((0, r(281708).SC)(e.target)) return { ...e,
                                                    href: (0, r(281708).V9)(e.href),
                                                    url: e.url || "",
                                                    type: e.target
                                                };
                                                (0, r(722371).HB)(e.target)
                                        }
                                    }(I.citationInfo),
                                    size: 14,
                                    style: eE.icon
                                })
                            }) : void 0, (0, a.jsx)(r(417115).d4, {
                                citationText: null == (v = I.citationInfo) ? void 0 : v.text,
                                titleElement: e
                            })]
                        }, I.id)
                    })
                } else k = (0, a.jsx)("div", {
                    style: eE.artifactContent,
                    children: I.content
                }, I.id);
                return (0, a.jsxs)("div", {
                    style: T ? eE.wrapper : {},
                    children: [T ? (0, a.jsx)("div", {
                        onClick: T,
                        role: "button",
                        tabIndex: 0,
                        style: eE.closeButton,
                        children: (0, a.jsx)(r(16275).I, {
                            icon: r(25094).xMarkSmallIcon,
                            size: "sm"
                        })
                    }) : void 0, k]
                })
            }
            let eW = {
                wrapper: {
                    padding: "12px 16px",
                    borderRadius: 4,
                    backgroundColor: r(632079).Tj.background.elevated,
                    position: "relative"
                },
                closeButton: {
                    position: "absolute",
                    insetInlineEnd: 8,
                    top: 8,
                    cursor: "pointer",
                    color: r(632079).Tj.text.secondary
                },
                title: {
                    fontSize: 12,
                    fontWeight: r(699422).Wy.medium,
                    color: r(632079).Tj.text.primary,
                    marginBottom: 8
                },
                subtitle: {
                    fontSize: 12,
                    fontWeight: r(699422).Wy.medium,
                    color: r(632079).Tj.text.primary,
                    marginTop: 12,
                    marginBottom: 8
                },
                summary: {
                    fontSize: 14,
                    color: r(632079).Tj.text.accentPrimary,
                    whiteSpace: "pre-wrap"
                },
                style0: {
                    marginBottom: 12
                }
            };

            function e$({
                claimId: e,
                claims: t,
                artifacts: n,
                onClose: i,
                researchModeCitationInfo: o,
                stepKey: s
            }) {
                let l = t.find(t => t.id === e),
                    c = n.filter(e => {
                        var t;
                        return null == l || null == (t = l.supportingArtifactIds) ? void 0 : t.includes(e.id)
                    });
                return l ? (0, a.jsxs)("div", {
                    style: eW.wrapper,
                    children: [i ? (0, a.jsx)("div", {
                        onClick: i,
                        role: "button",
                        tabIndex: 0,
                        style: eW.closeButton,
                        children: (0, a.jsx)(r(16275).I, {
                            icon: r(25094).xMarkSmallIcon,
                            size: "sm"
                        })
                    }) : void 0, (0, a.jsxs)("div", {
                        style: eW.title,
                        children: ["Claim", s ? ` (${s})` : ""]
                    }), (0, a.jsxs)("div", {
                        style: eW.summary,
                        children: [(0, a.jsx)("div", {
                            style: eW.style0,
                            children: l.content
                        }), c.length > 0 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                style: eW.subtitle,
                                children: "Supporting Evidence"
                            }), c.map(e => (0, a.jsx)(ez, {
                                artifact: e,
                                researchModeCitationInfo: o
                            }, e.id))]
                        }) : void 0]
                    })]
                }) : null
            }

            function eL(e) {
                if (0 === e) return "0s";
                let t = Math.floor(e / 1e3),
                    r = Math.floor(t / 60),
                    n = t % 60;
                return `${r?`${r}m `:""}${n?`${n}s`:""}`
            }
            let e_ = n.memo(function(e) {
                    let t = (0, r(972740).L)();
                    return t ? e.wrapInAssistantSurfaceProvider ? (0, a.jsx)(r(316258).hP, {
                        surface: r(316258).wy.fullPage,
                        children: (0, a.jsx)(eU, { ...e,
                            spaceStore: t
                        })
                    }) : (0, a.jsx)(eU, { ...e,
                        spaceStore: t
                    }) : null
                }),
                eO = {
                    stepWrap: {
                        padding: "6px 6px 0",
                        display: "flex",
                        flexDirection: "column"
                    },
                    step: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 16,
                        color: r(632079).Tj.text.primary,
                        padding: 10,
                        fontSize: 14,
                        fontWeight: r(699422).Wy.medium,
                        cursor: "pointer",
                        height: "unset"
                    },
                    additionalContext: {
                        fontSize: 12,
                        color: r(632079).Tj.text.secondary
                    },
                    status: {
                        fontSize: 12,
                        padding: "2px 6px",
                        borderRadius: 4,
                        backgroundColor: "rgba(0,0,0,0.05)"
                    },
                    statusDone: {
                        backgroundColor: r(632079).Tj.blue.background.accentPrimary,
                        color: "#FFFFFF"
                    },
                    statusInProgress: {
                        backgroundColor: r(632079).Tj.blue.background.accentPrimary,
                        color: "#FFFFFF"
                    },
                    statusNeedsMoreInfo: {
                        backgroundColor: r(632079).Tj.palette.purple[400],
                        color: "#FFFFFF"
                    },
                    statusWarning: {
                        backgroundColor: r(632079).Tj.palette.orange[400],
                        color: "#FFFFFF"
                    },
                    statusFailed: {
                        backgroundColor: r(632079).Tj.palette.red[400],
                        color: "#FFFFFF"
                    },
                    statusCancelled: {
                        backgroundColor: r(632079).Tj.palette.gray[400],
                        color: "#FFFFFF"
                    },
                    details: {
                        marginTop: 4
                    },
                    summary: {
                        cursor: "pointer",
                        userSelect: "none",
                        color: r(632079).Tj.text.secondary,
                        fontSize: 12,
                        fontWeight: r(699422).Wy.medium,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "4px 0"
                    },
                    content: {
                        fontSize: 12,
                        color: r(632079).Tj.text.secondary,
                        padding: "4px 0",
                        whiteSpace: "pre-wrap"
                    },
                    question: {
                        fontWeight: r(699422).Wy.medium,
                        marginBottom: 8
                    },
                    claims: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 16
                    },
                    expandedContent: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        marginTop: 8,
                        paddingInlineEnd: 24,
                        paddingInlineStart: 10,
                        color: r(632079).Tj.text.accentPrimary
                    },
                    claimRow: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10
                    },
                    claimBullet: {
                        marginTop: 6,
                        fontWeight: r(699422).Wy.medium,
                        fontSize: "20px",
                        height: 20,
                        width: 20,
                        minWidth: 20,
                        minHeight: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        userSelect: "none",
                        color: r(632079).Tj.text.tertiary
                    },
                    loadingSpinnerContainer: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20
                    },
                    title: {
                        textWrap: "balance",
                        lineHeight: "1.5"
                    },
                    nonExpandableStep: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 16,
                        color: r(632079).Tj.text.primary,
                        padding: 10,
                        fontSize: 14,
                        fontWeight: r(699422).Wy.medium,
                        height: "unset"
                    },
                    style0: {
                        minWidth: 300,
                        maxWidth: 400,
                        maxHeight: 400,
                        overflow: "auto"
                    }
                },
                eU = n.memo(function({
                    step: e,
                    researchModeCitationInfo: t,
                    debug: i = !1,
                    onExpandChange: o,
                    isExpanded: s,
                    spaceStore: l
                }) {
                    var c;
                    let [d, u] = (0, n.useState)(!1), p = s ? ? d, [g, f] = (0, n.useState)(null), m = (0, n.useRef)(new Map), h = (0, n.useRef)(null), y = (0, r(533992).v3)(), {
                        value: x
                    } = (0, r(815048).fJ)(r(235645).R.clipboardActions), v = (0, r(682985).uB)(void 0, r(931030).D), b = (0, n.useMemo)(() => {
                        var r, n;
                        return t || {
                            stepCitations: {
                                [e.value.key]: {
                                    claims: (null == (r = e.value.output) ? void 0 : r.claims) || [],
                                    artifacts: (null == (n = e.value.output) ? void 0 : n.artifacts) || []
                                }
                            }
                        }
                    }, [t, e]), j = eA(b);
                    (0, r(656484).c2)({
                        containerRef: h,
                        citationHoverStore: v,
                        parentStore: l,
                        evaluatorState: j
                    });
                    let S = (0, r(960253).I)(() => ({
                            expandIcon: {
                                width: 20,
                                height: 20,
                                display: "flex",
                                alignItems: "center",
                                transform: p ? "rotate(0deg)" : "rotate(calc(var(--direction, 1) * -90deg))",
                                transition: "transform 200ms ease-out",
                                flexShrink: 0,
                                marginInlineStart: "auto"
                            }
                        }), [p]),
                        k = (0, n.useMemo)(() => {
                            var t;
                            return null != (t = e.value.output) && t.claims && 0 !== e.value.output.claims.length ? e.value.output.claims.map((t, r) => {
                                let n = encodeURIComponent(`${e.value.key},claim,${t.id}`),
                                    a = `#citation:${n}`;
                                return `${t.content} [**[${r+1}]**](${a})`
                            }) : ["No relevant findings."]
                        }, [null == (c = e.value.output) ? void 0 : c.claims, e.value.key]),
                        I = (0, n.useCallback)(e => eC({
                            linkAnnotation: e,
                            citationInfo: b,
                            environment: y
                        }), [b, y]),
                        w = eM({
                            processedMarkdownList: k,
                            environment: y,
                            clipboardActions: x,
                            linkAnnotationToCitationAnnotations: I,
                            useExportedCitations: !1
                        });
                    return (0, a.jsxs)("div", {
                        style: eO.stepWrap,
                        children: [(() => {
                            switch (e.value.agent) {
                                case r(180139).dL:
                                    return (0, a.jsx)(eG, {
                                        step: e,
                                        isExpanded: p,
                                        onExpandChange: e => {
                                            o && o(e), u(e)
                                        },
                                        debug: i,
                                        styles: { ...S,
                                            ...eO
                                        },
                                        researchModeCitationInfo: b,
                                        temporaryListStores: w,
                                        chatWrapperRef: h
                                    });
                                case r(180139).lA:
                                    return (0, a.jsx)(eQ, {
                                        step: e,
                                        debug: i,
                                        styles: { ...S,
                                            ...eO
                                        }
                                    });
                                case r(180139).Ke:
                                    return (0, a.jsx)(eZ, {
                                        step: e,
                                        debug: i,
                                        styles: { ...S,
                                            ...eO
                                        }
                                    });
                                default:
                                    return null
                            }
                        })(), (0, a.jsx)(r(417115).cE, {
                            containerRef: h,
                            hoverStore: v,
                            parentStore: l
                        }), g && m.current.get(g) ? (0, a.jsx)(r(182718).zD, {
                            open: !!g,
                            onClosed: () => f(null),
                            onDismiss: () => f(null),
                            originRect: m.current.get(g).getBoundingClientRect(),
                            popupType: r(182718).nl.Popup,
                            placementToOrigin: "bottom",
                            alignmentToOrigin: "start",
                            originGap: 16,
                            style: eO.style0,
                            preventScaleTransition: !1,
                            content: () => {
                                var t, r;
                                return (0, a.jsx)(e$, {
                                    claimId: g,
                                    claims: (null == (t = e.value.output) ? void 0 : t.claims) || [],
                                    artifacts: (null == (r = e.value.output) ? void 0 : r.artifacts) || [],
                                    onClose: () => f(null),
                                    researchModeCitationInfo: b
                                })
                            }
                        }) : void 0]
                    }, e.value.key)
                }),
                eK = {
                    display: "flex",
                    alignItems: "start",
                    gap: 12
                },
                eH = {
                    color: "#666",
                    fontSize: "0.9em"
                },
                eq = {
                    overflow: "hidden"
                },
                eG = n.memo(function({
                    step: e,
                    isExpanded: t,
                    onExpandChange: n,
                    debug: i,
                    styles: o,
                    researchModeCitationInfo: s,
                    temporaryListStores: l,
                    chatWrapperRef: c
                }) {
                    var d;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(r(988022).p, {
                            style: o.step,
                            onClick: () => n(!t),
                            children: [(0, a.jsxs)("span", {
                                style: eK,
                                children: [((e, t) => {
                                    switch (e) {
                                        case "done":
                                            if (i && 1 === t) return (0, a.jsx)(r(16275).I, {
                                                icon: r(789777).exclamationMarkTriangleFillIcon,
                                                size: 20,
                                                style: {
                                                    fill: o.statusWarning.backgroundColor
                                                }
                                            });
                                            if (i && 0 === t) return (0, a.jsx)(r(16275).I, {
                                                icon: r(80925).exclamationMarkCircleFillIcon,
                                                size: 20,
                                                style: {
                                                    fill: o.statusFailed.backgroundColor
                                                }
                                            });
                                            return (0, a.jsx)(r(16275).I, {
                                                icon: r(93042).checkmarkCircleFillIcon,
                                                size: 20,
                                                style: {
                                                    fill: o.statusDone.backgroundColor
                                                }
                                            });
                                        case "in-progress":
                                            return (0, a.jsx)("div", {
                                                style: o.loadingSpinnerContainer,
                                                children: (0, a.jsx)(r(517334).k, {
                                                    size: 16
                                                })
                                            });
                                        case "failed":
                                            return (0, a.jsx)(r(16275).I, {
                                                icon: r(80925).exclamationMarkCircleFillIcon,
                                                size: 20,
                                                style: {
                                                    fill: o.statusFailed.backgroundColor
                                                }
                                            });
                                        default:
                                            return null
                                    }
                                })(e.value.status, null == (d = e.value.eval) ? void 0 : d.completeness), (0, a.jsx)("span", {
                                    style: o.title,
                                    children: e.value.input.question
                                }), i && e.value.timestampEndMs && e.value.timestampStartMs ? (0, a.jsx)("span", {
                                    style: eH,
                                    children: eL(e.value.timestampEndMs - e.value.timestampStartMs)
                                }) : void 0]
                            }), (0, a.jsx)(r(16275).I, {
                                icon: r(87963).arrowChevronSingleDownIcon,
                                colorVariant: "tertiary",
                                style: o.expandIcon
                            })]
                        }), (0, a.jsx)(r(153321).P.div, {
                            initial: {
                                height: 0
                            },
                            animate: {
                                height: t ? "auto" : 0
                            },
                            exit: {
                                height: 0
                            },
                            style: eq,
                            children: (0, a.jsxs)("div", {
                                style: o.expandedContent,
                                ref: c,
                                children: ["in-progress" === e.value.status ? (0, a.jsx)(e4, {}) : l && l.map(e => e && (0, a.jsxs)("div", {
                                    style: o.claimRow,
                                    children: [(0, a.jsx)("span", {
                                        style: o.claimBullet,
                                        children: "•"
                                    }), (0, a.jsx)(r(744628).c, {
                                        displayName: "ResearchModeSinglePlanStep.Claims",
                                        disabled: !0,
                                        children: (0, a.jsx)(r(385827).s, {
                                            allowSelectionWithin: !0,
                                            children: (0, a.jsx)(r(301124).A, {
                                                store: e,
                                                disabled: !0,
                                                disableCommentMenu: !0,
                                                disableHoverMenu: !0,
                                                disableDrag: !0
                                            })
                                        })
                                    }, e.key)]
                                }, e.key)), i ? (0, a.jsx)(eJ, {
                                    step: e,
                                    styles: o,
                                    researchModeCitationInfo: s
                                }) : void 0]
                            })
                        }, e.value.key)]
                    })
                }),
                eJ = n.memo(function({
                    step: e,
                    styles: t,
                    researchModeCitationInfo: n
                }) {
                    var i, o, s, l;
                    return e.value.agent !== r(180139).dL ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            style: t.question,
                            children: `(${e.value.agent}) "${e.value.input.question}"`
                        }), null != (i = e.value.output) && i.workLog ? (0, a.jsxs)("details", {
                            style: t.details,
                            children: [(0, a.jsx)("summary", {
                                style: t.summary,
                                children: "Work log ▾"
                            }), (0, a.jsx)("div", {
                                style: t.content,
                                children: (0, a.jsx)("div", {
                                    children: e.value.output.workLog.join("\n")
                                }, "workLog")
                            })]
                        }) : void 0, null != (o = e.value.output) && o.artifacts ? (0, a.jsxs)("details", {
                            style: t.details,
                            children: [(0, a.jsxs)("summary", {
                                style: t.summary,
                                children: ["Supporting evidence (", null == (s = e.value.output) ? void 0 : s.artifacts.length, ") ▾"]
                            }), (0, a.jsx)("div", {
                                style: t.content,
                                children: null == (l = e.value.output) ? void 0 : l.artifacts.map(e => (0, a.jsx)(ez, {
                                    artifact: e,
                                    researchModeCitationInfo: n
                                }, e.id))
                            })]
                        }) : void 0, e.value.eval ? (0, a.jsxs)("details", {
                            style: t.details,
                            children: [(0, a.jsx)("summary", {
                                style: t.summary,
                                children: "Eval ▾"
                            }), (0, a.jsxs)("div", {
                                style: t.content,
                                children: [(0, a.jsxs)("div", {
                                    children: ["Completeness: ", e.value.eval.completeness]
                                }, "completeness"), (0, a.jsxs)("div", {
                                    children: ["Faithfulness: ", e.value.eval.faithfulness]
                                }, "faithfulness")]
                            })]
                        }) : void 0]
                    })
                }),
                eY = {
                    contentWrapper: {
                        display: "flex",
                        alignItems: "center",
                        gap: 12
                    },
                    durationText: {
                        fontSize: "0.85em",
                        opacity: .7,
                        fontWeight: r(699422).Wy.regular,
                        marginInlineStart: "auto",
                        padding: "2px 6px",
                        borderRadius: "4px"
                    },
                    iconWrapper: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                    }
                },
                eQ = n.memo(function({
                    step: e,
                    debug: t,
                    styles: n
                }) {
                    let i = (0, r(960253).I)(() => ({
                        container: { ...n.nonExpandableStep,
                            padding: "6px 10px",
                            fontSize: "13px",
                            lineHeight: "1.4",
                            fontWeight: r(699422).Wy.regular,
                            color: r(632079).Tj.text.secondary,
                            backgroundColor: r(632079).Tj.codeBlockBackground,
                            borderRadius: "6px",
                            marginBottom: "4px"
                        },
                        title: { ...n.title,
                            flex: 1,
                            fontWeight: r(699422).Wy.regular,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }
                    }), [n]);
                    if (e.value.agent !== r(180139).lA) return null;
                    let o = e.value.input;
                    return o.agent !== r(180139).lA ? null : (0, a.jsx)("div", {
                        style: i.container,
                        children: (0, a.jsxs)("span", {
                            style: eY.contentWrapper,
                            children: [(0, a.jsx)("span", {
                                style: eY.iconWrapper,
                                children: (e => {
                                    switch (e) {
                                        case "done":
                                            return (0, a.jsx)(r(16275).I, {
                                                icon: r(93042).checkmarkCircleFillIcon,
                                                size: 20,
                                                style: {
                                                    fill: n.statusDone.backgroundColor
                                                }
                                            });
                                        case "in-progress":
                                            return (0, a.jsx)("div", {
                                                style: n.loadingSpinnerContainer,
                                                children: (0, a.jsx)(r(517334).k, {
                                                    size: 16
                                                })
                                            });
                                        case "failed":
                                            return (0, a.jsx)(r(16275).I, {
                                                icon: r(80925).exclamationMarkCircleFillIcon,
                                                size: 20,
                                                style: {
                                                    fill: n.statusFailed.backgroundColor
                                                }
                                            });
                                        default:
                                            return null
                                    }
                                })(e.value.status)
                            }), (0, a.jsx)("span", {
                                style: i.title,
                                children: (() => {
                                    let {
                                        artifact: e
                                    } = o;
                                    if ("notion" === e.citationType) return "Reading Notion Page";
                                    if ("universal_search" === e.citationType && "webpage" === e.target && e.url) {
                                        let t = new URL(e.url),
                                            r = `${t.hostname}${t.pathname}`;
                                        return `Read Webpage: ${r.length>30?`${r.substring(0,30)}...`:r}`
                                    }
                                    return "Read Content"
                                })()
                            }), t && e.value.timestampEndMs && e.value.timestampStartMs ? (0, a.jsx)("span", {
                                style: eY.durationText,
                                children: eL(e.value.timestampEndMs - e.value.timestampStartMs)
                            }) : void 0]
                        })
                    })
                }),
                eX = {
                    contentWrapper: {
                        display: "flex",
                        alignItems: "center",
                        gap: 12
                    },
                    durationText: {
                        fontSize: "0.85em",
                        opacity: .7,
                        fontWeight: r(699422).Wy.regular,
                        marginInlineStart: "auto",
                        padding: "2px 6px",
                        borderRadius: "4px"
                    },
                    iconWrapper: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                    }
                },
                eZ = n.memo(function({
                    step: e,
                    debug: t,
                    styles: n
                }) {
                    let i = (0, r(960253).I)(() => ({
                        container: { ...n.nonExpandableStep,
                            padding: "6px 10px",
                            fontSize: "13px",
                            lineHeight: "1.4",
                            fontWeight: r(699422).Wy.regular,
                            color: r(632079).Tj.text.secondary,
                            backgroundColor: r(632079).Tj.codeBlockBackground,
                            borderRadius: "6px",
                            marginBottom: "4px"
                        },
                        title: { ...n.title,
                            flex: 1,
                            fontWeight: r(699422).Wy.regular,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }
                    }), [n]);
                    if (e.value.agent !== r(180139).Ke) return null;
                    let o = e.value.input;
                    return o.agent !== r(180139).Ke ? null : (0, a.jsx)("div", {
                        style: i.container,
                        children: (0, a.jsxs)("span", {
                            style: eX.contentWrapper,
                            children: [(0, a.jsx)("span", {
                                style: eX.iconWrapper,
                                children: (e => {
                                    switch (e) {
                                        case "done":
                                            return (0, a.jsx)(r(16275).I, {
                                                icon: r(93042).checkmarkCircleFillIcon,
                                                size: 20,
                                                style: {
                                                    fill: n.statusDone.backgroundColor
                                                }
                                            });
                                        case "in-progress":
                                            return (0, a.jsx)("div", {
                                                style: n.loadingSpinnerContainer,
                                                children: (0, a.jsx)(r(517334).k, {
                                                    size: 16
                                                })
                                            });
                                        case "failed":
                                            return (0, a.jsx)(r(16275).I, {
                                                icon: r(80925).exclamationMarkCircleFillIcon,
                                                size: 20,
                                                style: {
                                                    fill: n.statusFailed.backgroundColor
                                                }
                                            });
                                        default:
                                            return null
                                    }
                                })(e.value.status)
                            }), (0, a.jsx)("span", {
                                style: i.title,
                                children: (() => {
                                    let {
                                        taskType: e
                                    } = o, t = e.replace(/-/g, " ").replace(/\b\w/g, e => e.toUpperCase());
                                    return `${t}`
                                })()
                            }), t && e.value.timestampEndMs && e.value.timestampStartMs ? (0, a.jsx)("span", {
                                style: eX.durationText,
                                children: eL(e.value.timestampEndMs - e.value.timestampStartMs)
                            }) : void 0]
                        })
                    })
                }),
                e0 = {
                    marginInlineStart: 42,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14
                },
                e1 = {
                    flex: 1
                },
                e5 = {
                    height: 14,
                    width: "85%"
                },
                e2 = {
                    height: 14,
                    width: "65%",
                    marginTop: 8
                },
                e4 = n.memo(function() {
                    return (0, a.jsx)(r(4458).VP, {
                        gap: 16,
                        children: [1, 2, 3].map((e, t) => (0, a.jsx)("div", {
                            style: e0,
                            children: (0, a.jsxs)("div", {
                                style: e1,
                                children: [(0, a.jsx)(r(795830).P, {
                                    style: e5
                                }), (0, a.jsx)(r(795830).P, {
                                    style: e2
                                })]
                            })
                        }, t))
                    })
                });

            function e9(e) {
                let {
                    step: t
                } = e, n = t.operations.filter(e => void 0 === e.databaseName), i = (0, r(381453).$z)(t.operations.filter(e => void 0 !== e.databaseName), e => e.databaseName);
                return (0, a.jsxs)(r(4458).VP, {
                    className: "autolayout-col autolayout-fill-width",
                    style: {
                        gap: 30,
                        ...e7.positionRelative
                    },
                    children: [(0, a.jsx)(te, {
                        categoryName: "",
                        name: "Databases",
                        operations: n
                    }), Object.entries(i).map(([e, t]) => (0, a.jsx)(e6, {
                        databaseName: e,
                        operations: t
                    }, e))]
                })
            }

            function e6(e) {
                let {
                    databaseName: t,
                    operations: n
                } = e, i = n.filter(e => e.databaseName === t && void 0 === e.propertyName && void 0 === e.viewName), o = (0, r(381453).$z)(n.filter(e => void 0 !== e.propertyName && void 0 === e.viewName), e => e.propertyName), s = (0, r(381453).$z)(n.filter(e => void 0 !== e.viewName), e => e.viewName), l = Object.keys(o).sort(), c = Object.keys(s).sort();
                return (0, a.jsxs)(r(4458).VP, {
                    className: "autolayout-col autolayout-fill-width",
                    style: {
                        gap: 30,
                        ...e7.positionRelative
                    },
                    children: [(0, a.jsx)(te, {
                        categoryName: "database",
                        name: t,
                        operations: i,
                        excludeKeys: ["databaseName"]
                    }), Object.entries(o).map(([e, t]) => (0, a.jsx)(e3, {
                        propertyName: e,
                        operations: t
                    }, e)), Object.entries(s).map(([e, t]) => (0, a.jsx)(e8, {
                        viewName: e,
                        operations: t
                    }, e)), (0, a.jsx)(r(111010).D, {
                        styleKey: "bodySemibold",
                        children: `Defined ${l.length} properties`
                    }), (0, a.jsx)("ul", {
                        children: l.map(e => (0, a.jsx)("li", {
                            children: e
                        }, e))
                    }), (0, a.jsx)(r(111010).D, {
                        styleKey: "bodySemibold",
                        children: `Defined ${c.length} views`
                    }), (0, a.jsx)("ul", {
                        children: c.map(e => (0, a.jsx)("li", {
                            children: e
                        }, e))
                    })]
                })
            }

            function e3(e) {
                let {
                    propertyName: t,
                    operations: r
                } = e;
                return (0, a.jsx)(te, {
                    categoryName: "property",
                    name: t,
                    operations: r,
                    excludeKeys: ["databaseName", "propertyName"]
                })
            }

            function e8(e) {
                let {
                    viewName: t,
                    operations: r
                } = e;
                return (0, a.jsx)(te, {
                    categoryName: "view",
                    name: t,
                    operations: r,
                    excludeKeys: ["databaseName", "viewName"]
                })
            }
            let e7 = {
                operationRow: {
                    position: "relative",
                    background: r(632079).Tj.background.secondary
                },
                operationType: {
                    position: "relative",
                    background: r(632079).Tj.gray.background.secondaryTranslucent,
                    flexShrink: 0
                },
                propertyKey: {
                    position: "relative",
                    flexShrink: 0
                },
                monospace: {
                    fontFamily: "monospace",
                    fontSize: 12,
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.3
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function te(e) {
                let {
                    name: t,
                    categoryName: n,
                    operations: i,
                    excludeKeys: o = []
                } = e;
                return (0, a.jsxs)(r(4458).VP, {
                    gap: 10,
                    className: "autolayout-fill-width",
                    style: e7.positionRelative,
                    children: [(0, a.jsxs)(r(4458).fI, {
                        gap: 4,
                        alignItems: "center",
                        className: "autolayout-row",
                        style: e7.positionRelative,
                        children: [(0, a.jsx)(r(111010).D, {
                            styleKey: "bodySemibold",
                            children: t
                        }), (0, a.jsx)(r(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "tertiary",
                            children: n
                        })]
                    }), (0, a.jsx)(r(4458).VP, {
                        gap: 4,
                        className: "autolayout-col",
                        style: e7.positionRelative,
                        children: i.map((e, t) => {
                            let {
                                type: n,
                                ...i
                            } = e;
                            return (0, a.jsxs)(r(4458).fI, {
                                gap: 10,
                                style: e7.operationRow,
                                className: "autolayout-fill-width",
                                children: [(0, a.jsx)(r(4458).VP, {
                                    className: "autolayout-col",
                                    width: 250,
                                    style: e7.operationType,
                                    padding: 16,
                                    children: (0, a.jsx)(r(111010).D, {
                                        styleKey: "bodySmSemibold",
                                        colorVariant: "secondary",
                                        children: n
                                    })
                                }), (0, a.jsx)(r(4458).VP, {
                                    gap: 10,
                                    padding: 16,
                                    className: "autolayout-col",
                                    style: e7.positionRelative,
                                    flex: "1 1 0",
                                    children: Object.entries(i).map(([e, t]) => o.includes(e) ? null : (0, a.jsxs)(r(4458).fI, {
                                        gap: 4,
                                        className: "autolayout-row autolayout-fill-width",
                                        style: e7.positionRelative,
                                        children: [(0, a.jsx)(r(4458).VP, {
                                            className: "autolayout-col",
                                            width: 150,
                                            style: e7.propertyKey,
                                            children: (0, a.jsx)(r(111010).D, {
                                                styleKey: "captionRegular",
                                                colorVariant: "secondary",
                                                children: e
                                            })
                                        }), (0, a.jsx)(tt, {
                                            value: t
                                        })]
                                    }, e))
                                })]
                            }, t)
                        })
                    })]
                })
            }

            function tt(e) {
                let {
                    value: t
                } = e;
                return "string" == typeof t ? (0, a.jsx)("div", {
                    style: e7.monospace,
                    children: t
                }) : (0, a.jsx)("div", {
                    style: e7.monospace,
                    children: JSON.stringify(t, null, 2)
                })
            }
            let tr = {
                    position: "relative",
                    fontFamily: "monospace",
                    fontSize: 12,
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.3
                },
                tn = {
                    position: "relative"
                };

            function ta(e) {
                let {
                    step: t
                } = e, i = (0, r(109939).tz)(), [o, s] = (0, n.useState)(!1), l = t.setup.allTemplates.length, c = t.setup.allTemplates.filter(e => "collection" === e.type).length, d = t.setup.allTemplates.filter(e => "property" === e.type).length, u = t.setup.allTemplates.filter(e => "collection_view" === e.type).length;
                return (0, a.jsxs)(r(4458).fI, {
                    gap: 4,
                    alignItems: "flex-start",
                    className: "autolayout-row autolayout-fill-width",
                    style: tn,
                    children: [(0, a.jsx)(r(890389).f, {
                        isSidebar: !1,
                        open: o,
                        onClick: () => s(!o),
                        fill: !1,
                        ariaLabel: i.formatMessage(o ? {
                            id: "setupStep.toggleButton.collapse",
                            defaultMessage: "Collapse setup details"
                        } : {
                            id: "setupStep.toggleButton.expand",
                            defaultMessage: "Expand setup details"
                        })
                    }), o ? (0, a.jsx)(r(4458).VP, {
                        paddingBlock: 6,
                        paddingInline: 2,
                        style: tr,
                        className: "autolayout-col",
                        flex: "1 1 0",
                        children: JSON.stringify(t, null, 2)
                    }) : (0, a.jsx)(r(4458).VP, {
                        height: 24,
                        alignItems: "flex-start",
                        justifyContent: "center",
                        className: "autolayout-col",
                        style: tn,
                        flex: "1 1 0",
                        children: (0, a.jsx)(r(111010).D, {
                            styleKey: "bodySemibold",
                            children: `Generated ${l} templates (${c} collections, ${d} properties, ${u} views)`
                        })
                    })]
                })
            }

            function ti(e) {
                return null
            }
            let to = "linear-gradient(180deg, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)";

            function ts(e) {
                let {
                    clientStore: t,
                    threadStore: i,
                    shouldSkipStep: l,
                    preprocessTranscript: c,
                    transcriptContainerStyle: d,
                    showDebugOverride: u,
                    aiChatFeatureController: p
                } = e, g = (0, r(533992).v3)(), f = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), m = (0, r(682985).K8)(() => (0, r(187353).Ft)({
                    threadStore: i,
                    clientStore: t
                }), [i, t]);
                (0, r(480359).l)(m);
                let h = (0, r(682985).K8)(() => {
                        let n = [];
                        if (e.transcript) n = e.transcript;
                        else {
                            let {
                                steps: e
                            } = (0, r(187353).A3)({
                                clientStore: t,
                                threadStore: i
                            });
                            n = e
                        }
                        return c && (n = c({
                            transcript: n,
                            threadId: null == i ? void 0 : i.id,
                            runningInference: m
                        })), l && (n = n.filter(e => !l(e))), n
                    }, [t, i, c, e.transcript, l, m]),
                    y = (0, r(682985).K8)(() => {
                        let r = h.find(e => "config" === e.type);
                        return r ? r.value : e.config || t.state.configForNewTranscripts
                    }, [t, e.config, h]),
                    x = (0, n.useMemo)(() => "search" === y.type || "researcher" === y.type || "markdown-chat" === y.type || "council-chat" === y.type ? 16 : 14, [y.type]),
                    v = (0, n.useMemo)(() => "search" === y.type ? 12 : "researcher" === y.type ? 24 : "council-chat" === y.type ? 16 : 8, [y.type]),
                    b = (0, r(960253).I)(() => ({
                        transcript: {
                            display: "flex",
                            flexDirection: "column",
                            fontSize: x,
                            marginBottom: p.isAgentChat ? 12 : 36,
                            gap: v,
                            ...d ? ? {}
                        }
                    }), [p, d, v, x]),
                    j = (0, r(684535).K)(),
                    S = (0, n.useRef)(!1),
                    k = (0, r(682985).K8)(() => t.state.userInputToTranscriptRenderMetric, [t]);
                (0, n.useEffect)(() => {
                    if (S.current || !k || !(null != i && i.id)) return;
                    let {
                        metric: e,
                        surface: t
                    } = k;
                    r(680007).default.measure(e, {
                        data: {
                            thread_id: null == i ? void 0 : i.id,
                            ai_config_type: y.type,
                            ai_transcript_created_source: t
                        }
                    }), S.current = !0
                }, [y.type, g, null == i ? void 0 : i.id, k]), (0, n.useEffect)(() => {
                    let e = r(728372).AppStoreSidebarSpaceStore.state,
                        n = r(728372).AppStoreCurrentUserStore.state;
                    if (!i || !e || !n) return;
                    let a = setInterval(async () => {
                        let a = await (0, r(130925).e)(g, {
                            pointer: i.pointer,
                            userId: g.currentUser.id,
                            version: -1
                        });
                        if (!(null != a && a.value)) return;
                        let o = a.value.current_inference_lease_expiration;
                        if (!o || Date.now() <= o) return;
                        let s = i.getSpaceId(),
                            {
                                serverCommitResult: l
                            } = (0, r(377796).createAndCommit)({
                                userAction: "AIChatTranscript.leaseExpired",
                                environment: g,
                                cellTarget: s ? {
                                    spaceWithId: s
                                } : void 0,
                                canUndo: !0,
                                perform: a => {
                                    (0, r(757688).GS)({
                                        threadStore: i,
                                        transaction: a,
                                        clientStore: t
                                    }), (0, r(757688).Vn)({
                                        threadStore: i,
                                        environment: g,
                                        spaceStore: e,
                                        userStore: n,
                                        addSteps: [{
                                            id: (0, r(295447).Z1)({
                                                environment: g,
                                                table: r(832375).mSw,
                                                spaceId: e.id
                                            }),
                                            type: "error",
                                            message: "Inference timed out"
                                        }],
                                        transaction: a
                                    })
                                }
                            }),
                            c = t.getOrCreateClientAIChatThreadStore(i.id);
                        c.setState({ ...c.state,
                            stopInferencePromise: l
                        })
                    }, 1e4);
                    return () => clearInterval(a)
                }, [g, i, t]), (0, n.useEffect)(() => () => {
                    s({
                        clientStore: t
                    })
                }, [t]), (0, n.useEffect)(() => {
                    "chat" === j.name && j.peekViewBlockId && s({
                        clientStore: t
                    })
                }, [j, t]);
                let I = (0, r(682985).K8)(() => (t.state.showDebug || u) ? ? !1, [t, u]),
                    w = (0, n.useMemo)(() => h.map((e, t) => ({
                        step: e,
                        indexInTranscript: t
                    })).filter(({
                        step: e
                    }) => {
                        var t, n;
                        return t = e, n = I, "title" !== t.type && (!!n || !!(0, r(722371).Xk)(tc, t.type) || ("context" === t.type ? "value" in t : !(0, r(722371).Xk)(td, t.type) && "survey" !== t.type && "computer-file" !== t.type && "plan-mode" !== t.type && (t.type, !1)))
                    }), [h, I]),
                    T = (0, n.useMemo)(() => h.filter(e => "search" === e.type && (0, r(187353).l0)(e)), [h]),
                    C = (0, n.useMemo)(() => {
                        let e = new Set,
                            t = [];
                        for (let r = T.length - 1; r >= 0; r--) {
                            let n = Object.values(T[r].results ? ? {}).flat();
                            for (let r = 0; r < n.length; r++) {
                                let a = n[r];
                                e.has(a.key) || (e.add(a.key), t.push(a))
                            }
                        }
                        return t
                    }, [T]);
                if (!f || !i || 0 === w.length) return null;
                let M = (0, r(330942).dC)(h),
                    A = (0, a.jsx)("div", {
                        style: b.transcript,
                        children: w.map(({
                            step: e
                        }, r) => (0, a.jsx)(tl, {
                            config: y,
                            step: e,
                            threadStore: i,
                            clientStore: t,
                            runningInference: m,
                            isLastVisibleStep: r === w.length - 1,
                            showDebugOverride: u,
                            searchStepResults: C,
                            aiChatFeatureController: p
                        }, e.id))
                    });
                return M && i ? (0, a.jsx)(o, {
                    threadId: i.id,
                    children: A
                }) : p.isAgentChat ? (0, a.jsx)(r(765846).Wd, {
                    children: A
                }) : A
            }
            let tl = n.memo(function(e) {
                    let {
                        config: t,
                        step: i,
                        threadStore: o,
                        clientStore: s,
                        runningInference: l,
                        isLastVisibleStep: c,
                        showDebugOverride: d,
                        searchStepResults: u,
                        aiChatFeatureController: p
                    } = e, g = (0, r(682985).K8)(() => (s.state.showDebug || d) ? ? !1, [s, d]), [f, m] = (0, n.useState)(!1), h = (0, n.useCallback)(() => {
                        m(!0)
                    }, []), y = (0, n.useCallback)(() => {
                        m(!1)
                    }, []), x = l ? f && !c : f || c, v = "user" === i.type || "search" === i.type || "user-injected" === i.type, b = (0, r(960253).I)(() => ({
                        actions: {
                            display: v ? "none" : "flex",
                            gap: 8,
                            opacity: +!!x,
                            transition: "opacity 100ms ease"
                        }
                    }), [x, v]), j = "user" === i.type ? "right" : "left", S = (0, n.useCallback)(e => {
                        (0, r(104310).u)({
                            event: {
                                eventName: "clicked_ai_chat_follow_up",
                                eventProperties: {
                                    thread_id: o.id,
                                    trace_id: "traceId" in i ? i.traceId : void 0,
                                    mode: t.type,
                                    action: e
                                }
                            }
                        })
                    }, [t, i, o.id]), k = (0, n.useRef)(void 0);
                    return (0, n.useEffect)(() => {
                        k.current !== i.id && (k.current = i.id, (0, r(104310).u)({
                            event: {
                                eventName: "agent_chat_step_displayed",
                                eventProperties: {
                                    step_id: i.id,
                                    thread_id: o.id
                                }
                            }
                        }))
                    }, [i, o.id]), (0, a.jsx)(tj, {
                        step: i,
                        threadStore: o,
                        clientStore: s,
                        children: (0, a.jsxs)(r(4458).VP, {
                            gap: 12,
                            onMouseEnter: h,
                            onMouseLeave: y,
                            className: "inference-transcript-chat-step",
                            "data-inference-step-id": i.id,
                            children: [(0, a.jsx)(tf, {
                                config: t,
                                step: i,
                                threadStore: o,
                                clientStore: s,
                                runningInference: l,
                                isLastVisibleStep: c,
                                showDebug: g,
                                searchStepResults: u,
                                aiChatFeatureController: p
                            }), (0, a.jsxs)("div", {
                                style: b.actions,
                                children: [(0, a.jsx)(th, {
                                    step: i,
                                    threadStore: o,
                                    runningInference: l,
                                    showDebug: g,
                                    alignment: j,
                                    trackFollowupAction: S,
                                    searchStepResults: u
                                }), (0, a.jsx)(tv, {
                                    step: i,
                                    threadStore: o,
                                    alignment: j,
                                    configType: t.type,
                                    showDebug: g
                                })]
                            })]
                        })
                    })
                }),
                tc = ["user", "user-injected", "agent-message", "error", "premium-feature-unavailable", "markdown-chat", "search", "search-chat", "fast-researcher-plan", "fast-researcher-search-results", "fast-researcher-chat", "setup-operations", "setup", "researcher-agent", "researcher-agent-group", "researcher-report", "registered-tool-grouping", "attachment", "activate-transcript-compaction", "pi-compaction", "user-specified-context", "database-agent-setup"],
                td = ["config", "updated-config", "registered-tool-call", "registered-tool-output", "registered-tool-error", "retry", "debug-inference", "agent-search-query-generation", "memory-agent", "summarize-transcript", "summarize-transcript-record-map", "summarize-transcript-error", "record-pointers-updated", "search-observation", "researcher-text-observation", "researcher-next-steps", "agent-inference", "agent-tool-result", "agent-debug-error", "eval-result", "agent-transcript-summary", "agent-records-updated", "agent-turn-start", "agent-turn-full-record-map", "agent-record-map", "agent-prebuilt-prompt", "proactive-message", "mention", "agent-integration", "aiBlockResponse", "workflow-operation", "generate-formula", "system-notification", "agent-trigger", "agent-route-trigger", "agent-instruction-state", "workflow-effect-calling", "workflow-effect-called", "workflow-effect-error", "wait"];

            function tu(e) {
                return "markdown-chat" === e || "search" === e
            }
            let tp = {
                    flexGrow: 1
                },
                tg = {
                    position: "relative"
                },
                tf = n.memo(function(e) {
                    let {
                        step: t,
                        config: n,
                        threadStore: i,
                        clientStore: o,
                        runningInference: s,
                        isLastVisibleStep: l,
                        showDebug: c,
                        searchStepResults: d,
                        aiChatFeatureController: p
                    } = e, g = (0, r(972740).L)(), f = (0, r(682985).K8)(() => null == i ? void 0 : i.getSpaceId(), [i]);
                    if ("config" === t.type) return (0, a.jsx)(tk, {
                        step: t
                    });
                    if ("user" === t.type) return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r(284376).IT, {
                            step: t,
                            clientStore: o,
                            threadStore: i,
                            runningInference: s
                        }), s && l ? tu(n.type) ? (0, a.jsx)(r(4458).fI, {
                            alignItems: "center",
                            height: 32,
                            paddingInlineStart: 12,
                            children: (0, a.jsx)(r(473686).c, {
                                seed: null == i ? void 0 : i.id
                            })
                        }) : (0, a.jsx)(r(264305).P, {
                            steps: [],
                            renderStep: () => (0, a.jsx)("div", {}),
                            done: !1
                        }) : void 0]
                    });
                    if ("user-injected" === t.type) return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r(992463).m, {
                            step: t,
                            clientStore: o,
                            threadStore: i,
                            runningInference: s,
                            compactSurveySummary: "sidebar" === p.agentChatFormFactor || "popup" === p.agentChatFormFactor
                        }), s && l ? tu(n.type) ? (0, a.jsx)(r(4458).fI, {
                            alignItems: "center",
                            height: 32,
                            paddingInlineStart: 12,
                            children: (0, a.jsx)(r(473686).c, {
                                seed: null == i ? void 0 : i.id
                            })
                        }) : (0, a.jsx)(r(264305).P, {
                            steps: [],
                            renderStep: () => (0, a.jsx)("div", {}),
                            done: !1
                        }) : void 0]
                    });
                    if ("agent-message" === t.type) return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r(190841).Z, {
                            step: t,
                            threadStore: i
                        }), s && l ? tu(n.type) ? (0, a.jsx)(r(4458).fI, {
                            alignItems: "center",
                            height: 32,
                            paddingInlineStart: 12,
                            children: (0, a.jsx)(r(473686).c, {
                                seed: null == i ? void 0 : i.id
                            })
                        }) : (0, a.jsx)(r(264305).P, {
                            steps: [],
                            renderStep: () => (0, a.jsx)("div", {}),
                            done: !1
                        }) : void 0]
                    });
                    if ("premium-feature-unavailable" === t.type) return (0, a.jsx)(u, {
                        config: n,
                        threadStore: i,
                        step: t
                    });
                    else if ("error" === t.type && t.errorCode === r(101787)._D_) return (0, a.jsx)(eb, {
                        config: n,
                        threadStore: i
                    });
                    else if ("attachment" === t.type) return (0, a.jsxs)("div", {
                        style: {
                            display: "flex",
                            marginBottom: -8
                        },
                        children: [(0, a.jsx)("div", {
                            style: tp
                        }), (0, a.jsx)(r(315148).kp, {
                            uploadProgress: {
                                status: "complete",
                                fileUrl: t.fileUrl,
                                fileName: t.fileName,
                                contentType: t.contentType
                            },
                            permissionRecordOverride: {
                                table: r(832375).Toz,
                                id: i.id,
                                spaceId: f
                            }
                        })]
                    });
                    else if ("error" === t.type) {
                        let e = "researcher" !== n.type && "search" !== n.type && "markdown-chat" !== n.type && "workflow" !== n.type && "setup-generator" !== n.type && "council-chat" !== n.type || c ? (0, a.jsx)(tN, {
                            step: t
                        }) : (0, a.jsx)(r(983655).P, {
                            spaceStore: g,
                            errorStep: t,
                            configType: n.type,
                            showDetailedError: p.supportsDetailedError
                        });
                        return t.speakerId && t.speakerDisplayName ? (0, a.jsx)(r(397985).f, {
                            speakerId: t.speakerId,
                            speakerDisplayName: t.speakerDisplayName,
                            speakerModelFamily: t.speakerModelFamily,
                            children: e
                        }) : e
                    } else if ("markdown-chat" === t.type) return t.speakerId && t.speakerDisplayName ? (0, a.jsx)(r(397985).f, {
                        speakerId: t.speakerId,
                        speakerDisplayName: t.speakerDisplayName,
                        speakerModelFamily: t.speakerModelFamily,
                        children: (0, a.jsx)(r(365598).c, {
                            step: t
                        })
                    }) : (0, a.jsx)(r(365598).c, {
                        step: t
                    });
                    else if ("search" === t.type) return (0, a.jsx)(H, {
                        threadStore: i,
                        clientStore: o,
                        step: t,
                        isLastVisibleStep: l
                    });
                    else if ("search-chat" === t.type) return (0, a.jsx)(E, {
                        results: d,
                        step: t
                    }, t.id);
                    else if ("fast-researcher-plan" === t.type) return (0, a.jsx)(tV, {
                        step: t
                    });
                    else if ("fast-researcher-search-results" === t.type) return (0, a.jsx)(tV, {
                        step: t
                    });
                    else if ("fast-researcher-chat" === t.type) return (0, a.jsx)(r(365598).c, {
                        step: {
                            id: t.id,
                            type: "markdown-chat",
                            value: t.value,
                            traceId: t.traceId
                        }
                    });
                    else if ("setup-operations" === t.type) return (0, a.jsx)(e9, {
                        step: t
                    });
                    else if ("setup" === t.type) return (0, a.jsx)(ta, {
                        step: t
                    });
                    else if ("database-agent-setup" === t.type) return (0, a.jsx)(r(109939).sA, {
                        defaultMessage: "Unsupported step type",
                        id: "aiChatTranscript.unsupportedDBAgentStepType"
                    });
                    else if ("researcher-agent" === t.type) return (0, a.jsx)(e_, {
                        step: t,
                        debug: c,
                        wrapInAssistantSurfaceProvider: !0
                    }, t.value.key);
                    else if ("researcher-agent-group" === t.type) return (0, a.jsx)(r(920861).O, {
                        stepGroup: t
                    });
                    else if ("researcher-report" === t.type) return (0, a.jsx)(eR, {
                        step: t,
                        wrapInAssistantSurfaceProvider: !0
                    });
                    else if ("context" === t.type) {
                        var m;
                        return (0, a.jsx)(r(821448).E, {
                            step: t,
                            displayMode: "markdown-chat" === (m = n.type) || "search" === m || "researcher" === m ? "timeAndMode" : "date",
                            config: n
                        })
                    } else if ("registered-tool-grouping" === t.type) return (0, a.jsx)(ti, {
                        groupStep: t
                    });
                    else if ("user-specified-context" === t.type) return g ? (0, a.jsx)(r(328806).H, {
                        spaceStore: g,
                        context: t
                    }) : (0, a.jsx)(tT, {
                        step: t
                    });
                    else return "title" === t.type || "plan-mode" === t.type || (0, r(722371).Xk)(td, t.type) ? (0, a.jsx)(tT, {
                        step: t
                    }) : "survey" === t.type ? (0, a.jsx)(tw, {
                        step: t
                    }) : "activate-transcript-compaction" === t.type || "pi-compaction" === t.type ? (0, a.jsx)(r(3375).X, {
                        summary: t.summary
                    }) : ("computer-file" === t.type || t.type, null)
                }),
                tm = {
                    flexGrow: 1
                };

            function th(e) {
                let t, {
                        step: n,
                        threadStore: i,
                        runningInference: o,
                        showDebug: s,
                        alignment: l,
                        trackFollowupAction: c,
                        searchStepResults: d
                    } = e,
                    u = (0, r(682985).K8)(() => i.getTranscript().find(e => "title" === e.type), [i]),
                    p = i.id,
                    g = (0, r(682985).K8)(() => i.getTranscript().find(e => "config" === e.type), [i]);
                return void 0 === (t = "fast-researcher-chat" === n.type ? (0, a.jsx)(b, {
                    threadId: p,
                    step: n,
                    configStep: void 0,
                    onClick: () => {
                        c("copy")
                    }
                }) : "markdown-chat" === n.type ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(b, {
                        threadId: p,
                        step: n,
                        configStep: void 0,
                        onClick: () => {
                            c("copy")
                        }
                    }), (0, a.jsx)(j, {
                        threadTitle: null == u ? void 0 : u.value,
                        threadId: p,
                        step: n,
                        configStep: g,
                        createBlockFrom: "markdown_chat_response",
                        markdown: n.value,
                        linkAnnotationToCitationAnnotations: e => ({
                            annotations: [e],
                            status: "missing_citation"
                        }),
                        transactionName: "MarkdownChatStep.saveAsPage",
                        onClick: () => c("save_as_page")
                    })]
                }) : "search-chat" === n.type ? (0, a.jsx)(D, {
                    threadStore: i,
                    step: n,
                    titleStep: u,
                    results: d
                }) : "researcher-agent" === n.type ? s ? (0, a.jsx)(tC, {
                    step: n,
                    threadStore: i,
                    label: "Retry",
                    disabled: o
                }) : null : "researcher-report" === n.type ? (0, a.jsx)(r(4458).fI, {
                    gap: 8,
                    children: (0, a.jsx)(eF, {
                        step: n,
                        wrapInAssistantSurfaceProvider: !0
                    })
                }) : void 0) ? null : (0, a.jsxs)(r(4458).fI, {
                    alignItems: "center",
                    gap: 4,
                    marginTop: 4,
                    children: ["right" === l ? (0, a.jsx)("div", {
                        style: tm
                    }) : void 0, t, "left" === l ? (0, a.jsx)("div", {
                        style: tm
                    }) : void 0]
                })
            }
            let ty = {
                    "fast-researcher-chat": !0,
                    "researcher-report": !0,
                    "search-chat": !0,
                    "markdown-chat": !0
                },
                tx = {
                    flexGrow: 1
                };

            function tv(e) {
                var t, n;
                let {
                    step: i,
                    threadStore: o,
                    alignment: s,
                    configType: l,
                    showDebug: c
                } = e, d = (t = i.id, n = o, (0, r(682985).K8)(() => {
                    var e;
                    return null == (e = n.getMessageStoreById(t)) || null == (e = e.getData()) ? void 0 : e.inference_id
                }, [n, t]));
                return d && ty[i.type] ? (0, a.jsxs)(r(4458).fI, {
                    alignItems: "flex-start",
                    gap: 4,
                    marginTop: 8,
                    children: ["right" === s ? (0, a.jsx)("div", {
                        style: tx
                    }) : void 0, (0, a.jsx)(tA, {
                        step: i,
                        traceId: d,
                        feedbackType: "thumbs_up",
                        threadStore: o,
                        mode: "feedback-positive"
                    }), (0, a.jsx)(tA, {
                        step: i,
                        traceId: d,
                        feedbackType: "thumbs_down",
                        threadStore: o
                    }), c ? (0, a.jsx)(tR, {
                        traceId: d,
                        threadConfigType: l
                    }) : void 0, "left" === s ? (0, a.jsx)("div", {
                        style: tx
                    }) : void 0]
                }) : null
            }
            let tb = {
                wrap: {
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    background: r(632079).Tj.background.secondaryTranslucent
                },
                headerRow: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                },
                headerButton: {
                    borderRadius: 7,
                    display: "flex",
                    alignItems: "center",
                    padding: "4px 10px",
                    gap: 8,
                    flexShrink: 1
                },
                codeInner: {
                    borderRadius: 8,
                    backgroundColor: r(632079).Tj.background.secondary
                },
                previewContainer: {
                    position: "relative",
                    overflow: "hidden",
                    padding: "8px 10px",
                    borderRadius: 8,
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    backgroundColor: r(632079).Tj.background.primary
                },
                infoButton: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    backgroundColor: r(632079).Tj.background.primary,
                    cursor: "pointer"
                },
                style0: {
                    flex: 1,
                    minWidth: 0
                }
            };

            function tj(e) {
                let {
                    step: t,
                    threadStore: i,
                    clientStore: o,
                    children: s
                } = e, l = (0, r(109939).tz)(), c = (0, r(533992).v3)(), d = (0, r(972740).L)(), [u, p] = (0, n.useState)(!1), g = (0, n.useCallback)(() => {
                    p(e => !e)
                }, []), f = (0, n.useMemo)(() => {
                    var e;
                    let n;
                    return (n = ed[e = t.type]) ? { ...n,
                        isFallback: !1
                    } : {
                        icon: r(372181).infoCircleSmallIcon,
                        label: {
                            descriptor: eu,
                            values: {
                                stepType: e
                            }
                        },
                        tooltip: {
                            descriptor: ep,
                            values: {
                                stepType: e
                            }
                        },
                        isFallback: !0,
                        colorPalette: "gray"
                    }
                }, [t.type]), m = (0, r(960253).I)(() => ({
                    stepIconWrap: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        backgroundColor: f.colorPalette ? r(632079).Tj[f.colorPalette].background.secondaryTranslucent : r(632079).Tj.background.secondaryTranslucent,
                        border: `1px solid ${f.colorPalette?r(632079).Tj[f.colorPalette].border.secondary:r(632079).Tj.border.secondary}`,
                        flexShrink: 0
                    },
                    icon: {
                        transition: "transform 0.2s ease-in-out",
                        transformOrigin: "center",
                        transform: u ? "rotate(90deg)" : "rotate(0deg)"
                    }
                }), [u, f.colorPalette]), h = l.formatMessage(f.label.descriptor, f.label.values), y = l.formatMessage(f.tooltip.descriptor, f.tooltip.values), x = (0, n.useMemo)(() => {
                    let e, n, a;
                    if ("agent-tool-result" !== t.type) return;
                    let i = (e = [], (n = t => {
                        if ("string" != typeof t) return;
                        let r = t.trim();
                        !r || e.includes(r) || e.push(r)
                    })(t.toolTitle), n(t.toolName), t.toolType !== t.toolName && n(t.toolType), (a = (e, t) => {
                        if (!(t > 4) && null != e) {
                            if (Array.isArray(e)) {
                                for (let r of e) a(r, t + 1);
                                return
                            }
                            if ((0, r(722371).Gv)(e) && !Array.isArray(e))
                                for (let [, i] of (n(e.toolName), n(e.toolType), "string" == typeof e.name && "string" == typeof e.type && e.type.toLowerCase().includes("tool") && n(e.name), (0, r(722371).WP)(e))) a(i, t + 1)
                        }
                    })(t.result, 0), a(t.additionalResultForRender, 0), e);
                    if (0 === i.length) return;
                    let o = i.slice(0, 3),
                        s = i.length > o.length;
                    return `${o.join(", ")}${s?", ...":""}`
                }, [t]), v = (0, n.useMemo)(() => {
                    if ("agent-tool-result" === t.type) return function(e) {
                        if ("string" == typeof e.error && e.error.trim().length > 0) return {
                            variant: "error",
                            error: eh(e.error, 160)
                        };
                        let t = {
                            variant: "data"
                        };
                        e.state && (t.state = e.state), (e.insufficientPermissions || e.insufficientPermissionsDetails) && (t.insufficientPermissions = !0);
                        let r = ef(e.result) ? ? ef(e.additionalResultForRender);
                        if (r && r.length > 0) {
                            let {
                                items: e,
                                truncated: n
                            } = function(e) {
                                let t = [];
                                for (let r of e) {
                                    if (t.length >= 3) break;
                                    let e = em(r);
                                    e && t.push(eh(e, 36))
                                }
                                return {
                                    items: t,
                                    truncated: e.length > t.length
                                }
                            }(r);
                            t.results = {
                                count: r.length,
                                items: e,
                                truncated: n || r.length > e.length
                            }
                        } else {
                            let r = em(e.result) ? ? em(e.threadOperations) ? ? em(e.input) ? ? ey(e.result);
                            r && (t.rawSnippet = eh(r, 160))
                        }
                        return t
                    }(t)
                }, [t]), b = (0, r(682985).K8)(() => o.state.showDebug && (0, r(909212).Ke)(), [o]), j = (0, r(682985).K8)(() => {
                    if ("agent-tool-result" === t.type && d) return (0, r(445567).ZX)({
                        environment: c,
                        spaceStore: d,
                        threadStore: i,
                        toolResultStep: t,
                        showDebug: b
                    })
                }, [c, d, t, i, b]), S = (0, r(682985).uB)(void 0, r(419110).$), k = (0, n.useMemo)(() => {
                    var e;
                    if ("agent-tool-result" !== t.type) return;
                    let r = null == (e = t.renderedResult) ? void 0 : e.content;
                    if ("string" == typeof r) return r.trim().length > 0 ? r : void 0
                }, [t]), I = (0, n.useMemo)(() => {
                    if (!v) return;
                    if ("error" === v.variant) return l.formatMessage(A, {
                        error: v.error
                    });
                    let e = [];
                    if ("data" === v.variant && v.insufficientPermissions && e.push(l.formatMessage(R)), "data" === v.variant && v.state) {
                        let t = V[v.state];
                        e.push(l.formatMessage(t))
                    }
                    if ("data" === v.variant && v.results) {
                        let {
                            count: t,
                            items: r,
                            truncated: n
                        } = v.results, a = r.length > 0 ? `${r.join(", ")}${n||t>r.length?", ...":""}` : n || t > r.length ? "..." : "", i = l.formatMessage(P, {
                            count: t
                        });
                        e.push(a ? `${i}: ${a}` : i)
                    } else "data" === v.variant && v.rawSnippet && e.push(l.formatMessage(N, {
                        snippet: v.rawSnippet
                    }));
                    if (0 !== e.length) return e.join(" • ")
                }, [l, v]), w = (0, n.useMemo)(() => {
                    var e;
                    if ("agent-tool-result" !== t.type || !(0, r(426048).gY)(t, "update-page-v2")) return !1;
                    let n = null == (e = t.result) ? void 0 : e.autoFixSuccesses;
                    return "number" == typeof n && n > 0
                }, [t]), T = (0, n.useMemo)(() => JSON.stringify(t, null, 2), [t]), C = (0, n.useCallback)(e => {
                    e.stopPropagation(), (async () => {
                        let [e, t] = await Promise.all([(0, r(161333).r)(), (0, r(969899).jd)()]);
                        await t({
                            environment: c,
                            stringValue: T,
                            copiedMessage: e.copiedCodeToClipboard
                        })
                    })()
                }, [T, c]), M = (0, r(682985).K8)(() => i.getMessageStoreById(t.id), [i, t.id]), B = (0, n.useCallback)(e => {
                    try {
                        let n = JSON.parse(e);
                        if (n.id !== t.id) throw Error("Step ID mismatch");
                        if (!M) throw Error("Thread message step store not found");
                        let a = i.getSpaceId();
                        (0, r(377796).createAndCommit)({
                            userAction: "DebugStep.updateStep",
                            environment: c,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: e => {
                                (0, r(173157).z)({
                                    store: M,
                                    transaction: e,
                                    data: {
                                        step: n
                                    }
                                })
                            },
                            canUndo: !0
                        })
                    } catch (e) {
                        console.error("Error saving step", e)
                    }
                }, [t, c, M, i]);
                return b ? (0, a.jsxs)(r(4458).VP, {
                    padding: 4,
                    style: {
                        position: "relative",
                        ...tb.wrap,
                        borderRadius: 8
                    },
                    className: "autolayout-fill-width",
                    children: [(0, a.jsxs)(r(4458).fI, {
                        gap: 2,
                        alignItems: "center",
                        justifyContent: "center",
                        className: "autolayout-row",
                        style: tg,
                        children: [(0, a.jsxs)("div", {
                            style: { ...tb.headerRow,
                                ...tb.style0
                            },
                            children: [(0, a.jsx)(r(988022).p, {
                                style: tb.headerButton,
                                iconLeading: {
                                    icon: r(491469).arrowChevronSingleRightSmallIcon,
                                    size: "xs",
                                    colorVariant: "secondary",
                                    style: m.icon
                                },
                                "aria-label": l.formatMessage({
                                    id: "aiInferenceTranscript.viewFullStep",
                                    defaultMessage: "View full step"
                                }),
                                onClick: g,
                                children: (0, a.jsxs)(r(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    minHeight: 28,
                                    children: [(0, a.jsx)("div", {
                                        style: m.stepIconWrap,
                                        children: (0, a.jsx)(r(16275).I, {
                                            icon: f.icon,
                                            size: "xs",
                                            colorVariant: "secondary"
                                        })
                                    }), (0, a.jsx)(r(111010).D, {
                                        styleKey: "captionMedium",
                                        children: h
                                    }), x ? (0, a.jsx)(r(111010).D, {
                                        styleKey: "captionRegular",
                                        colorVariant: "tertiary",
                                        children: x
                                    }) : null]
                                })
                            }), (0, a.jsx)(r(51831).m, {
                                content: () => y,
                                children: e => (0, a.jsx)("button", {
                                    type: "button",
                                    "aria-label": y,
                                    onClick: e => {
                                        e.stopPropagation()
                                    },
                                    onMouseDown: t => {
                                        var r;
                                        t.stopPropagation(), null == (r = e.onMouseDown) || r.call(e, t)
                                    },
                                    onMouseEnter: e.onMouseEnter,
                                    onMouseLeave: e.onMouseLeave,
                                    onFocus: e.onFocus,
                                    onBlur: e.onBlur,
                                    style: tb.infoButton,
                                    children: (0, a.jsx)(r(16275).I, {
                                        icon: r(372181).infoCircleSmallIcon,
                                        size: "xs",
                                        colorVariant: "secondary"
                                    })
                                })
                            })]
                        }), (0, a.jsx)(r(51831).m, {
                            content: () => l.formatMessage({
                                id: "aiInferenceTranscript.debugStep.copyTooltip",
                                defaultMessage: "Copy"
                            }),
                            children: e => (0, a.jsx)(r(374533).A, { ...e,
                                icon: r(682006).a,
                                ariaLabel: l.formatMessage({
                                    id: "aiInferenceTranscript.debugStep.copyAriaLabel",
                                    defaultMessage: "Copy step JSON to clipboard"
                                }),
                                onClick: C
                            })
                        }), (0, a.jsx)(tD, {
                            step: t,
                            threadStore: i
                        })]
                    }), (0, a.jsxs)(r(4458).VP, {
                        gap: 4,
                        padding: 8,
                        className: "autolayout-col",
                        style: tg,
                        children: [j && j.length > 0 ? (0, a.jsx)("div", {
                            style: { ...tb.previewContainer,
                                maxHeight: u ? void 0 : 120,
                                overflow: u ? "visible" : "hidden",
                                maskImage: u ? void 0 : to,
                                WebkitMaskImage: u ? void 0 : to
                            },
                            children: (0, a.jsx)(r(558045).A, {
                                type: r(558045).O.Vertical,
                                initialFocus: void 0,
                                resetFocusOnMouseOut: !0,
                                sections: j,
                                store: S,
                                disableKeyboard: !0
                            })
                        }) : k ? (0, a.jsx)("div", {
                            style: { ...tb.previewContainer,
                                maxHeight: u ? void 0 : 120,
                                overflow: u ? "visible" : "hidden",
                                maskImage: u ? void 0 : to,
                                WebkitMaskImage: u ? void 0 : to
                            },
                            children: (0, a.jsx)(eI, {
                                content: k
                            })
                        }) : I ? (0, a.jsxs)(r(4458).VP, {
                            gap: 4,
                            className: "autolayout-col",
                            style: tg,
                            children: [w ? (0, a.jsx)(r(746434).E, {
                                content: (0, a.jsx)(r(109939).sA, { ...F
                                })
                            }) : null, (0, a.jsx)(r(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: I
                            })]
                        }) : null, (0, a.jsx)(r(203066).N, {
                            children: u ? (0, a.jsxs)(r(153321).P.div, {
                                initial: {
                                    opacity: 0,
                                    height: 0
                                },
                                animate: {
                                    opacity: 1,
                                    height: "auto"
                                },
                                exit: {
                                    opacity: 0,
                                    height: 0
                                },
                                transition: {
                                    duration: .2
                                },
                                children: [(0, a.jsx)(tz, {
                                    step: t,
                                    threadStore: i
                                }), (0, a.jsx)("div", {
                                    style: tb.codeInner,
                                    children: (0, a.jsx)(r(140102).X, {
                                        value: T,
                                        language: "json",
                                        onSave: B
                                    })
                                })]
                            }) : null
                        }), s]
                    })]
                }) : s ? (0, a.jsx)(r(4458).VP, {
                    className: "autolayout-col",
                    gap: 4,
                    style: tg,
                    children: s
                }) : null
            }
            let tS = {
                wrap: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px 8px",
                    borderRadius: 8,
                    alignSelf: "center",
                    background: r(632079).Tj.background.accentPrimary,
                    boxShadow: `0 0 0 0.5px ${r(632079).Tj.border.primary}, 0px 1px 2px 0px rgba(0, 0, 0, 0.04)`,
                    fontSize: 11,
                    fontWeight: r(699422).Wy.semibold,
                    color: r(632079).Tj.white,
                    textTransform: "uppercase",
                    userSelect: "none"
                }
            };

            function tk(e) {
                let {
                    step: t
                } = e;
                return (0, a.jsx)("div", {
                    style: tS.wrap,
                    children: t.value.type
                })
            }
            let tI = {
                button: {
                    width: "fit-content",
                    color: r(632079).Tj.text.secondary,
                    fontSize: 12
                },
                bubble: {
                    padding: "8px 12px",
                    border: `1px solid ${r(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 12,
                    backgroundColor: r(632079).Tj.background.primary,
                    marginBottom: 4
                }
            };

            function tw(e) {
                return e.step, null
            }

            function tT(e) {
                let {
                    step: t
                } = e, [i, o] = (0, n.useState)(!1), s = (0, n.useMemo)(() => JSON.stringify(t, null, 2), [t]);
                return (0, a.jsxs)(r(4458).VP, {
                    gap: 4,
                    children: [(0, a.jsx)(r(988022).p, {
                        onClick: () => o(!i),
                        style: tI.button,
                        children: t.type
                    }), i ? (0, a.jsx)("div", {
                        style: tI.bubble,
                        children: (0, a.jsx)(r(140102).O, {
                            value: s,
                            language: "json"
                        })
                    }) : void 0]
                })
            }

            function tC(e) {
                let {
                    step: t,
                    threadStore: i,
                    label: o,
                    disabled: s
                } = e, l = (0, r(533992).v3)(), d = (0, n.useCallback)(() => {
                    (0, r(757688).WF)({
                        environment: l,
                        threadStore: i,
                        stepId: t.id
                    })
                }, [l, t.id, i]);
                return s ? null : (0, a.jsx)(c, {
                    colorPalette: "blue",
                    onClick: d,
                    children: o
                })
            }
            let tM = {
                default: r(104509).Ev.sm,
                large: r(104509).lD.default
            };

            function tA(e) {
                let t = (0, r(109939).tz)(),
                    {
                        step: i,
                        threadStore: o,
                        feedbackType: s,
                        mode: l,
                        traceId: c,
                        iconColorVariant: d,
                        label: u,
                        promptKey: p,
                        variant: g = "default",
                        feature: f,
                        buttonSize: m = "md",
                        iconSize: h
                    } = e,
                    y = (0, r(533992).v3)(),
                    [x, v] = (0, n.useState)(!1),
                    b = l ? ? "feedback",
                    j = (0, r(83208).X)("enable_feedback_braintrust_modal") && !1,
                    S = (0, n.useCallback)(e => {
                        let {
                            additionalComments: t
                        } = e;
                        if (!c) throw Error("No traceId found");
                        let n = o.getTranscript().find(e => "config" === e.type);
                        if (!n) throw Error("No config step found");
                        let l = o.getSpaceId();
                        if (!l) throw Error("No spaceId found");
                        (0, r(522259).WB)({
                            environment: y,
                            type: n.value.type,
                            traceId: c,
                            spaceId: l,
                            feedbackType: s,
                            userComment: t,
                            threadId: o.id,
                            stepId: i.id,
                            config: n.value,
                            promptKey: p
                        }), v(!1), j && function(e) {
                            let {
                                environment: t,
                                braintrustLink: n
                            } = e;
                            r(647095).ui({
                                showCancel: !1,
                                keepFocus: !1,
                                allowCopy: !0,
                                message: (0, a.jsx)(r(109939).sA, {
                                    id: "aiInferenceTranscript.braintrustDialog.title",
                                    defaultMessage: "Braintrust Debugging"
                                }),
                                items: [{
                                    label: (0, a.jsxs)("span", {
                                        style: M,
                                        children: [(0, a.jsx)(r(16275).I, {
                                            icon: r(334945).z,
                                            size: "xs"
                                        }), (0, a.jsx)(r(109939).sA, {
                                            id: "aiInferenceTranscript.braintrustDialog.copy",
                                            defaultMessage: "Copy Braintrust link"
                                        })]
                                    }),
                                    buttonType: "outline",
                                    onClick: () => {
                                        (async () => {
                                            let [e, a] = await Promise.all([(0, r(161333).r)(), (0, r(969899).jd)()]);
                                            a({
                                                environment: t,
                                                stringValue: n,
                                                copiedMessage: e.copiedLinkToClipboard
                                            })
                                        })()
                                    }
                                }, {
                                    label: (0, a.jsxs)("span", {
                                        style: M,
                                        children: [(0, a.jsx)(r(16275).I, {
                                            icon: r(14561).b,
                                            size: "xs"
                                        }), (0, a.jsx)(r(109939).sA, {
                                            id: "aiInferenceTranscript.braintrustDialog.open",
                                            defaultMessage: "Open chat in Braintrust"
                                        })]
                                    }),
                                    buttonType: "outline",
                                    onClick: () => {
                                        window.open(n, "_blank")
                                    }
                                }, {
                                    label: (0, a.jsx)(r(109939).sA, {
                                        id: "aiInferenceTranscript.braintrustDialog.close",
                                        defaultMessage: "Close"
                                    }),
                                    buttonType: "solid",
                                    color: "blue",
                                    onClick: () => {
                                        r(647095).zw()
                                    }
                                }]
                            })
                        }({
                            environment: y,
                            braintrustLink: (0, r(998884).s0)({
                                environmentName: "production",
                                projectSuffix: n.value.type,
                                traceId: c
                            })
                        })
                    }, [y, c, o, s, i.id, p, j]),
                    k = (0, n.useCallback)(() => {
                        let e = o.getTranscript().find(e => "config" === e.type);
                        if ((null == e ? void 0 : e.value.type) === "workflow") try {
                            var t;
                            let n, a = null == (t = o.getData()) ? void 0 : t.workflow_id;
                            if (a) {
                                let e = (0, r(328765).S)();
                                if (e) {
                                    let t = r(360851).N.createChildStore(e, {
                                            table: r(832375).C0E,
                                            id: a,
                                            spaceId: e.id
                                        }),
                                        i = (0, r(207966).o)(t);
                                    n = (0, r(16712).Mh)(i)
                                }
                            }
                            r(305721).trackThumbsUpDownClicked({
                                environment: y,
                                sentiment: "thumbs_up" === s ? "thumbs_up" : "thumbs_down",
                                promptKey: p,
                                threadId: o.id,
                                feature: e.value.isCustomAgent ? "custom_agent" : f,
                                hasWorkerConnected: n
                            })
                        } catch {}
                        v(!0)
                    }, [y, s, o, p, f]),
                    I = (0, n.useMemo)(() => "large" === g ? "thumbs_up" === s ? r(729810).r : r(823691)._ : "thumbs_up" === s ? r(770408).s : r(169677).d, [s, g]),
                    w = h ? ? tM[g],
                    T = t.formatMessage({
                        id: "aiInferenceTranscript.shareFeedback",
                        defaultMessage: "Share feedback"
                    }),
                    C = t.formatMessage("thumbs_up" === s ? {
                        id: "aiInferenceTranscript.sharePositiveFeedback",
                        defaultMessage: "Share positive feedback"
                    } : {
                        id: "aiInferenceTranscript.shareNegativeFeedback",
                        defaultMessage: "Share negative feedback"
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r(51831).m, {
                        content: () => T,
                        children: e => u ? (0, a.jsx)(r(988022).p, {
                            iconLeading: {
                                icon: I,
                                size: w
                            },
                            "aria-label": C,
                            onClick: k,
                            children: u
                        }) : (0, a.jsx)(r(374533).A, {
                            icon: {
                                icon: I,
                                size: w
                            },
                            size: m,
                            onClick: k,
                            ariaLabel: C,
                            colorVariant: d,
                            ...e
                        })
                    }), (0, a.jsx)(r(979479).A, {
                        onDismiss: () => v(!1),
                        style: r(986939).A.isMobile ? {
                            maxHeight: "100%",
                            display: "flex"
                        } : {},
                        content: () => (0, a.jsx)(r(228015).O, {
                            handleSubmit: S,
                            mode: b,
                            closeForm: () => v(!1),
                            threadStore: o
                        }),
                        isOpen: x
                    })]
                })
            }

            function tR(e) {
                let t = (0, r(109939).tz)(),
                    {
                        traceId: i,
                        threadConfigType: o
                    } = e,
                    s = (0, n.useCallback)(() => {
                        if (!i) return;
                        let e = (0, r(998884).WY)({
                            environmentName: "production",
                            suffix: o
                        });
                        window.open(`https://www.braintrust.dev/app/Notion/p/${e}/logs?r=${i}`, "_blank")
                    }, [i, o]);
                return (0, a.jsx)(r(374533).A, {
                    icon: r(14561).b,
                    ariaLabel: t.formatMessage({
                        id: "aiInferenceTranscript.openInBraintrust",
                        defaultMessage: "Open in Braintrust"
                    }),
                    onClick: s
                })
            }
            let tP = {
                container: {
                    padding: 8,
                    marginBottom: 20
                },
                icon: {
                    fill: r(632079).Tj.red.icon.accentPrimary
                },
                codeBlock: {
                    padding: 12,
                    borderRadius: 8,
                    backgroundColor: r(632079).Tj.codeBlockBackground
                }
            };

            function tN(e) {
                let {
                    step: t
                } = e, i = (0, n.useMemo)(() => {
                    let {
                        stack: e,
                        ...r
                    } = t;
                    return JSON.stringify(r, null, 2)
                }, [t]), o = (0, r(109939).tz)();
                return (0, a.jsx)(r(22262).Q, {
                    style: tP.container,
                    children: (0, a.jsx)(r(479854).b, {
                        label: o.formatMessage({
                            id: "aiInferenceTranscript.errorStep.label",
                            defaultMessage: "An error occurred, please try again"
                        }),
                        icon: r(50171).exclamationMarkTriangleSmallIcon,
                        iconStyle: tP.icon,
                        children: (0, a.jsx)("div", {
                            style: tP.codeBlock,
                            children: (0, a.jsx)(r(140102).O, {
                                value: i,
                                language: "json"
                            })
                        })
                    })
                })
            }
            let tF = {
                codeBlock: {
                    padding: 12,
                    borderRadius: 8,
                    backgroundColor: r(632079).Tj.codeBlockBackground
                }
            };

            function tV(e) {
                let {
                    step: t
                } = e, i = (0, n.useMemo)(() => JSON.stringify(t, null, 2), [t]);
                return (0, a.jsx)(r(479854).b, {
                    label: t.type,
                    children: (0, a.jsx)("div", {
                        style: tF.codeBlock,
                        children: (0, a.jsx)(r(140102).O, {
                            value: i,
                            language: "json"
                        })
                    })
                })
            }
            let tB = {
                button: {
                    fontSize: 12,
                    color: r(632079).Tj.text.secondary,
                    borderRadius: 7
                }
            };

            function tD(e) {
                let {
                    step: t,
                    threadStore: i
                } = e, o = (0, r(533992).v3)(), s = (0, n.useCallback)(() => {
                    r(757688).WF({
                        environment: o,
                        threadStore: i,
                        stepId: t.id
                    })
                }, [o, t.id, i]);
                return (0, a.jsx)(r(988022).p, {
                    onClick: s,
                    style: tB.button,
                    children: "Run from here"
                })
            }
            let tE = {
                metadata: {
                    display: "grid",
                    fontSize: 12,
                    paddingInlineStart: 8,
                    marginTop: 4,
                    marginBottom: 4,
                    gridTemplateColumns: "96px 1fr",
                    gap: 4
                },
                metadataKey: {
                    color: r(632079).Tj.text.secondary
                },
                metadataValue: {
                    color: r(632079).Tj.text.primary,
                    marginInlineStart: 0
                }
            };

            function tz(e) {
                let {
                    step: t,
                    threadStore: i
                } = e, o = (0, r(682985).K8)(() => {
                    var e;
                    return null == (e = i.getMessageStoreById(t.id)) ? void 0 : e.getCreatedTime()
                }, [t.id, i]), {
                    completedTime: s,
                    unsatisfactory: l
                } = (0, r(682985).K8)(() => {
                    var e;
                    let r = null == (e = i.getMessageStoreById(t.id)) ? void 0 : e.getData();
                    return {
                        completedTime: null == r ? void 0 : r.completed_time,
                        unsatisfactory: null == r ? void 0 : r.unsatisfactory
                    }
                }, [t.id, i]), c = s && o ? (0, r(264305).a)(s - o) : null, d = {
                    "Created Time": o ? new Date(o).toLocaleString() : null,
                    "Completed Time": s ? new Date(s).toLocaleString() : null,
                    Duration: c,
                    Unsatisfactory: l ? "Yes" : null
                };
                return (0, a.jsx)("dl", {
                    style: tE.metadata,
                    children: Object.entries(d).filter(([, e]) => null !== e).map(([e, t]) => (0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsx)("dt", {
                            style: tE.metadataKey,
                            children: e
                        }), (0, a.jsx)("dd", {
                            style: tE.metadataValue,
                            children: t
                        })]
                    }, e))
                })
            }
        },
        328806: (e, t, r) => {
            r.d(t, {
                H: () => g
            }), r(581454);
            var n = r(296540);
            let a = {
                container: {
                    color: r(632079).Tj.text.secondary,
                    display: "flex",
                    maxWidth: "50%",
                    alignItems: "center",
                    gap: 5,
                    fontSize: r(699422).J.UISmall.desktop,
                    paddingTop: 4,
                    paddingInlineEnd: 8,
                    paddingBottom: 4,
                    paddingInlineStart: 6,
                    borderRadius: 12
                },
                containerHover: {
                    background: r(632079).Tj.background.tertiaryTranslucent
                },
                ellipsisText: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    minWidth: 0
                }
            };
            var i = r(474848);

            function o(e) {
                let {
                    pointer: t,
                    spaceStore: o
                } = e, s = (0, r(533992).v3)(), l = (0, r(548124).useThreadStoreFromCurrentRoute)(), c = (0, r(254505).m)(), d = r(970831).B.createChildStore(o, t), {
                    icon: u,
                    iconRecordCategory: p
                } = (0, r(682985).K8)(() => ({
                    icon: d.getIcon(),
                    iconRecordCategory: (0, r(569553).Te)(d)
                }), [d]), g = (0, n.useCallback)(() => {
                    (0, r(836924).Y)({
                        store: d,
                        environment: s,
                        pageVisitSource: r(254656).y8.MentionInPage,
                        chatThreadId: null == l ? void 0 : l.id,
                        openInSidePeek: c || void 0
                    })
                }, [d, s, l, c]);
                return (0, i.jsxs)(r(988022).p, {
                    onClick: g,
                    style: a.container,
                    hoveredStyle: a.containerHover,
                    size: "sm",
                    children: [(0, i.jsx)(r(569553).B6, {
                        disabled: !0,
                        icon: u,
                        isEmptyPage: !1,
                        size: 14,
                        iconRecordCategory: p
                    }), (0, i.jsx)(r(627918).A, {
                        store: d
                    })]
                })
            }
            let s = {
                opacity: .5,
                marginInlineStart: 4,
                flexShrink: 0
            };

            function l(e) {
                let {
                    selectedBlockPointers: t,
                    spaceStore: o
                } = e, l = (0, r(533992).v3)(), c = (0, r(548124).useThreadStoreFromCurrentRoute)(), d = (0, r(254505).m)(), u = (0, r(682985).K8)(() => {
                    var e;
                    return null == (e = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id
                }, []), p = (0, n.useMemo)(() => t.map(e => r(970831).B.createChildStore(o, e)), [t, o]), g = (0, n.useCallback)(() => {
                    let e = p.map(e => e.pointer);
                    (0, r(45464).e)({
                        environment: l,
                        spaceStore: o,
                        blockPointers: e,
                        currentPageId: u,
                        pageVisitSource: r(254656).y8.MentionInPage,
                        chatThreadId: null == c ? void 0 : c.id,
                        openInSidePeek: d || void 0
                    })
                }, [p, l, o, u, c, d]);
                if (0 === p.length) return null;
                let f = p[0],
                    m = p.length - 1;
                return (0, i.jsxs)(r(988022).p, {
                    style: a.container,
                    hoveredStyle: a.containerHover,
                    size: "sm",
                    onClick: g,
                    children: [(0, i.jsx)(r(16275).I, {
                        icon: r(308884).a,
                        size: "xs"
                    }), (0, i.jsx)("span", {
                        style: a.ellipsisText,
                        children: (0, i.jsx)(r(627918).A, {
                            store: f,
                            shouldWrap: !0
                        })
                    }), m > 0 ? (0, i.jsx)("span", {
                        style: s,
                        children: (0, i.jsx)(r(109939).sA, {
                            id: "agentUserSpecifiedContextRenderer.additionalBlocksCount",
                            defaultMessage: "+{count}",
                            values: {
                                count: m
                            }
                        })
                    }) : null]
                }, f.id)
            }

            function c(e) {
                let {
                    textSelectionContext: t,
                    spaceStore: o
                } = e, s = (0, r(533992).v3)(), l = (0, r(548124).useThreadStoreFromCurrentRoute)(), c = (0, r(254505).m)(), d = (0, r(682985).K8)(() => {
                    var e;
                    return null == (e = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id
                }, []), u = (0, n.useCallback)(() => {
                    (0, r(45464).y)({
                        environment: s,
                        spaceStore: o,
                        textSelection: t.value,
                        currentPageId: d,
                        pageVisitSource: r(254656).y8.MentionInPage,
                        chatThreadId: null == l ? void 0 : l.id,
                        openInSidePeek: c || void 0
                    })
                }, [t, s, o, d, l, c]), p = t.text.trim();
                return p ? (0, i.jsxs)(r(988022).p, {
                    style: a.container,
                    hoveredStyle: a.containerHover,
                    size: "sm",
                    onClick: u,
                    children: [(0, i.jsx)(r(16275).I, {
                        icon: r(308884).a,
                        size: "xs"
                    }), (0, i.jsx)("span", {
                        style: a.ellipsisText,
                        children: p
                    })]
                }) : null
            }

            function d(e) {
                let {
                    pointer: t,
                    spaceStore: n
                } = e, o = (0, r(109939).tz)(), s = r(807825).L.createChildStore(n, t), l = (0, r(682985).K8)(() => (0, r(413818).c6)(o, s.getModel()), [s, o]);
                return (0, i.jsxs)(r(988022).p, {
                    style: a.container,
                    hoveredStyle: a.containerHover,
                    size: "sm",
                    children: [(0, i.jsx)(r(321753).A, {
                        userStore: s,
                        size: 14
                    }), (0, i.jsx)("span", {
                        children: l
                    })]
                })
            }

            function u(e) {
                let {
                    pointer: t,
                    spaceStore: o
                } = e, s = (0, r(533992).v3)(), {
                    navigate: l
                } = (0, n.useContext)(r(44894).E), c = (0, r(109939).tz)(), d = r(360851).N.createChildStore(o, t), u = (0, r(682985).K8)(() => d.getRenderTitle(c), [d, c]), p = (0, n.useCallback)(() => {
                    l({
                        environment: s,
                        url: (0, r(739185).iZ)({
                            workflowId: t.id,
                            params: {}
                        })
                    })
                }, [l, s, t.id]);
                return (0, i.jsx)(r(988022).p, {
                    onClick: p,
                    style: a.container,
                    hoveredStyle: a.containerHover,
                    size: "sm",
                    children: (0, i.jsx)("span", {
                        children: u
                    })
                })
            }
            let p = {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "end",
                gap: "2px 0"
            };

            function g(e) {
                let {
                    spaceStore: t,
                    context: a
                } = e, {
                    pointers: s,
                    selectedBlockPointers: g,
                    textSelectionContext: f
                } = (0, n.useMemo)(() => {
                    var e, t, r;
                    let n = (null == (e = a.value) ? void 0 : e.pointers) ? ? [];
                    return {
                        pointers: n,
                        selectedBlockPointers: (null == (t = a.value) || null == (t = t.blockSelection) ? void 0 : t.value) ? ? [],
                        textSelectionContext: (null == (r = a.value) ? void 0 : r.textSelection) ? ? void 0
                    }
                }, [a.value]), m = (0, n.useMemo)(() => (0, r(381453).oE)(s.map(e => e.table === r(832375).evP ? (0, i.jsx)(o, {
                    pointer: e,
                    spaceStore: t
                }, e.id) : e.table === r(832375).oo9 ? (0, i.jsx)(d, {
                    pointer: e,
                    spaceStore: t
                }, e.id) : e.table !== r(832375).C0E || (0, r(697006).ut)(e.id) ? null : (0, i.jsx)(u, {
                    pointer: e,
                    spaceStore: t
                }, e.id))), [s, t]), h = (null == f ? void 0 : f.text.trim()) ? ? "";
                return 0 !== s.length || 0 !== g.length || h ? (0, i.jsxs)("div", {
                    style: p,
                    children: [m, g.length > 0 ? (0, i.jsx)(l, {
                        selectedBlockPointers: g,
                        spaceStore: t
                    }) : null, f && h ? (0, i.jsx)(c, {
                        textSelectionContext: f,
                        spaceStore: t
                    }) : null]
                }) : null
            }
        },
        334945: (e, t, r) => {
            r.d(t, {
                z: () => a
            }), r(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 1.14 9.65 12.98",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M9.2 1.15a1.35 1.35 0 0 1 1.28.925H11c1.008 0 1.825.818 1.825 1.825v8.4A1.826 1.826 0 0 1 11 14.125H5A1.826 1.826 0 0 1 3.175 12.3V3.9c0-1.007.817-1.825 1.825-1.825h.52A1.35 1.35 0 0 1 6.8 1.15zM5 3.325a.576.576 0 0 0-.575.575v8.4c0 .317.258.575.575.575h6a.576.576 0 0 0 .575-.575V3.9A.575.575 0 0 0 11 3.325h-.52a1.35 1.35 0 0 1-1.28.925H6.8a1.35 1.35 0 0 1-1.28-.925zM6.8 2.25a.25.25 0 0 0-.25.25v.4c0 .138.112.25.25.25h2.4a.25.25 0 0 0 .25-.25v-.4a.25.25 0 0 0-.25-.25z"
                    })
                },
                a = (0, r(104509).wt)("clipboardSmall", n, "small")
        },
        374201: (e, t, r) => {
            r.d(t, {
                K: () => p
            });
            var n = r(296540),
                a = r(474848);
            let i = {
                    width: "fit-content",
                    maxWidth: "100%",
                    borderRadius: 6,
                    overflow: "hidden"
                },
                o = {
                    background: "transparent"
                },
                s = {
                    background: "transparent"
                },
                l = {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    flex: 1,
                    minWidth: 0
                },
                c = {
                    flexShrink: 0
                },
                d = {
                    opacity: .3
                },
                u = {
                    position: "relative"
                };

            function p({
                icon: e,
                title: t,
                content: g,
                isExpandable: f,
                isExpandedOverride: m,
                onExpandedChange: h,
                onNonExpandableClick: y,
                toolRunning: x,
                variant: v = "default",
                hideOrigin: b,
                hideIcon: j = !1,
                statusIcon: S
            }) {
                let [k, I] = (0, n.useState)(m ? ? !1), [w, T] = (0, n.useState)(!1), C = (0, n.useId)(), {
                    bodyStyleKey: M
                } = (0, r(765846).yq)(), A = (0, r(83208).X)("agent_polish_2026"), R = w ? "primary" : "secondary", P = (0, n.useMemo)(() => x ? (0, a.jsx)(r(265035).ScrollingSquiggle, {
                    style: d
                }) : e, [x, e]), N = (0, n.useCallback)(() => {
                    I(e => {
                        let t = !e;
                        return null == h || h(t), t
                    })
                }, [h]);
                (0, n.useEffect)(() => {
                    void 0 !== m && (I(m), null == h || h(m))
                }, [m, h]);
                let F = (0, r(960253).I)(() => ({
                        expandedIndicator: {
                            flexShrink: 0,
                            marginTop: A && j ? 2 : void 0,
                            transition: "transform 0.15s ease-in-out",
                            transform: k ? "rotate(90deg)" : "rotate(0deg)",
                            fill: r(632079).Tj.icon.tertiary
                        }
                    }), [j, A, k]),
                    V = r(986939).A.isMobile ? {
                        onTouchEnd: () => T(!1),
                        onTouchStart: () => T(!0)
                    } : {
                        onMouseEnter: () => T(!0),
                        onMouseLeave: () => T(!1)
                    };
                return (0, a.jsx)(r(522434).S, {
                    isExpanded: !!f && k,
                    shouldSkipContentPadding: b,
                    contentId: f ? C : void 0,
                    origin: b ? void 0 : f || y ? (0, a.jsx)(r(64960).Ay, {
                        onClick: f ? N : y,
                        style: i,
                        hoveredStyle: o,
                        pressedStyle: s,
                        "aria-expanded": f ? k : void 0,
                        "aria-controls": f ? C : void 0,
                        ...V,
                        children: (0, a.jsx)(r(75224).N, {
                            icon: P,
                            colorVariant: R,
                            variant: v,
                            hideIcon: j,
                            title: f ? (0, a.jsxs)(r(4458).fI, {
                                gap: 4,
                                alignItems: "center",
                                justifyContent: "center",
                                className: "autolayout-row autolayout-fill-width",
                                style: u,
                                children: [(0, a.jsx)(r(111010).D, {
                                    styleKey: M,
                                    style: l,
                                    children: t
                                }), S ? (0, a.jsx)(r(16275).I, {
                                    icon: S,
                                    size: "large" === v ? "default" : "sm",
                                    colorVariant: R,
                                    style: c
                                }) : null, (0, a.jsx)(r(708966).Q, {
                                    iconGroup: r(741873).N,
                                    colorVariant: w ? "primary" : "secondary",
                                    variantName: "large" === v ? "default" : "small",
                                    size: "xs",
                                    style: F.expandedIndicator
                                })]
                            }) : (0, a.jsxs)(r(4458).fI, {
                                gap: 4,
                                alignItems: "center",
                                justifyContent: "center",
                                className: "autolayout-row autolayout-fill-width",
                                style: u,
                                children: [t, S ? (0, a.jsx)(r(16275).I, {
                                    icon: S,
                                    size: "large" === v ? "default" : "sm",
                                    colorVariant: R,
                                    style: c
                                }) : null]
                            })
                        })
                    }) : (0, a.jsx)("div", {
                        style: i,
                        children: (0, a.jsx)(r(75224).N, {
                            icon: P,
                            colorVariant: R,
                            hideIcon: j,
                            title: t
                        })
                    }),
                    content: g
                })
            }
        },
        397985: (e, t, r) => {
            r.d(t, {
                f: () => i
            }), r(296540);
            var n = r(474848);
            let a = {
                paddingBlockEnd: 4
            };

            function i(e) {
                let {
                    speakerDisplayName: t,
                    speakerModelFamily: i,
                    children: o
                } = e, s = i && (0, r(722371).Xk)(r(443037).my, i) ? i : void 0, l = function(e) {
                    switch (e) {
                        case "openai":
                            return r(632079).Tj.green.border.accentPrimary;
                        case "anthropic":
                            return r(632079).Tj.orange.border.accentPrimary;
                        case "gemini":
                            return r(632079).Tj.blue.border.accentPrimary;
                        default:
                            return r(632079).Tj.gray.border.accentPrimary
                    }
                }(s);
                return (0, n.jsxs)("div", {
                    style: {
                        borderInlineStart: `3px solid ${l}`,
                        paddingInlineStart: 12
                    },
                    children: [(0, n.jsx)("div", {
                        style: a,
                        children: (0, n.jsxs)(r(4458).fI, {
                            gap: 6,
                            alignItems: "center",
                            children: [(0, n.jsx)(r(437225).H, {
                                modelFamily: s
                            }), (0, n.jsx)(r(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "secondary",
                                children: t
                            })]
                        })
                    }), o]
                })
            }
        },
        402169: (e, t, r) => {
            r.d(t, {
                J: () => i
            }), r(296540);
            var n = r(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.37 2.12 12.04 13.29",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M5.25 2.125c-1.036 0-1.875.84-1.875 1.875v8c0 1.036.84 1.875 1.875 1.875h3.348l-.076-.116a3.9 3.9 0 0 1-.497-1.08l-.015-.054H5.25A.625.625 0 0 1 4.625 12V4c0-.345.28-.625.625-.625h5.5c.345 0 .625.28.625.625v3.697l.082-.007a4 4 0 0 1 1.079.054l.089.017V4c0-1.036-.84-1.875-1.875-1.875z"
                        }), (0, n.jsx)("path", {
                            d: "M5.75 4.175a.575.575 0 1 0 0 1.15h4.5a.575.575 0 1 0 0-1.15zm0 2a.575.575 0 1 0 0 1.15h4.5a.575.575 0 1 0 0-1.15zm6.05 2.4a3.025 3.025 0 1 0 1.62 5.58l.91 1.056a.625.625 0 0 0 .94-.823l-.954-1.108A3.025 3.025 0 0 0 11.8 8.575M10.025 11.6a1.775 1.775 0 1 1 3.55 0 1.775 1.775 0 0 1-3.55 0"
                        })]
                    })
                },
                i = (0, r(104509).wt)("docTextMagnifyingGlassSmall", a, "small")
        },
        408873: (e, t, r) => {
            r.d(t, {
                F: () => o
            });
            var n = r(296540),
                a = r(474848);
            let i = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            };

            function o(e) {
                let {
                    url: t,
                    imageNaturalHeight: o,
                    imageNaturalWidth: l
                } = e, c = (0, n.useMemo)(() => ({
                    display: "block",
                    width: `min(${l}px, 100%)`,
                    height: `min(${o}px, 100%)`,
                    pointerEvents: "auto",
                    objectFit: "cover"
                }), [l, o]);
                return (0, a.jsx)("div", {
                    style: s,
                    children: (0, a.jsx)(r(989059).A, {
                        src: t,
                        style: c,
                        placeholderLoadedStyle: i
                    })
                })
            }
            let s = {
                alignSelf: "center",
                margin: "0 auto",
                position: "relative",
                height: "100%",
                width: "100%",
                overflow: "hidden"
            }
        },
        430598: (e, t, r) => {
            r.d(t, {
                l: () => i
            }), r(296540);
            var n = r(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.62 4.19 16.75 11.61",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M4.8 6.75a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.95.65a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0M10 6.75a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.95.65a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0m3.25-.65a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3M4.15 10a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0m3.25-.65a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.95.65a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0m3.25-.65a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.95.65a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0M4.8 11.95a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.93.636c0-.345.28-.625.624-.625h5.25a.625.625 0 1 1 0 1.25h-5.25a.625.625 0 0 1-.625-.625m8.471-.636a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3"
                        }), (0, n.jsx)("path", {
                            d: "M3.75 4.197a2.125 2.125 0 0 0-2.125 2.125v7.356c0 1.174.951 2.125 2.125 2.125h12.5a2.125 2.125 0 0 0 2.125-2.125V6.322a2.125 2.125 0 0 0-2.125-2.125zm-.875 2.125c0-.483.392-.875.875-.875h12.5c.483 0 .875.392.875.875v7.356a.875.875 0 0 1-.875.875H3.75a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                i = (0, r(104509).wt)("keyboard", a, "default")
        },
        431644: (e, t, r) => {
            r.d(t, {
                k: () => a
            }), r(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.42 2.11 11.16 12.13",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M8 2.115c-.854 0-1.569.554-1.824 1.315a3.96 3.96 0 0 0-2.138 3.518v.895c0 .655-.238 1.287-.669 1.78l-.616.704c-.75.858-.141 2.202 1 2.202H5.89a2.156 2.156 0 0 0 4.218 0h2.139c1.14 0 1.75-1.344.999-2.202l-.616-.704a2.7 2.7 0 0 1-.669-1.78v-.895A3.96 3.96 0 0 0 9.824 3.43 1.92 1.92 0 0 0 8 2.115m-.669 1.839A.68.68 0 0 1 8 3.365c.34 0 .623.253.669.589l.048.353.33.138a2.71 2.71 0 0 1 1.665 2.503v.895c0 .958.348 1.882.978 2.603l.616.704a.078.078 0 0 1-.058.129H3.752a.078.078 0 0 1-.058-.129l.616-.704c.63-.72.978-1.645.978-2.603v-.895c0-1.126.686-2.093 1.665-2.503l.33-.138zM8 13.084c-.394 0-.735-.226-.9-.555h1.8c-.165.33-.506.556-.9.556"
                    })
                },
                a = (0, r(104509).wt)("bellSmall", n, "small")
        },
        436887: (e, t, r) => {
            r.d(t, {
                j: () => a
            }), r(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.31 2.48 13.04 10.27",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M4.876 8.65c.565 0 1.024.459 1.024 1.025v2.05c0 .566-.458 1.024-1.024 1.025h-2.05A1.025 1.025 0 0 1 1.8 11.725v-2.05c0-.566.458-1.025 1.024-1.025zm-1.976 3h1.9v-1.9H2.9zm10.9-1.5a.55.55 0 1 1 0 1.1h-6a.55.55 0 0 1 0-1.1zM5.379 2.742a.55.55 0 0 1 .943.566l-2.4 4a.55.55 0 0 1-.889.076l-1.6-1.868a.55.55 0 0 1 .835-.715l1.103 1.286zM13.8 4.75a.55.55 0 1 1 0 1.1h-6a.55.55 0 0 1 0-1.1z"
                    })
                },
                a = (0, r(104509).wt)("checklistSmall", n, "small")
        },
        438166: (e, t, r) => {
            r.d(t, {
                s: () => a
            }), r(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.82 1.82 12.68 12.68",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M8 1.825a.575.575 0 0 0-.575.575V4a.575.575 0 0 0 1.15 0V2.4A.575.575 0 0 0 8 1.825m4.367 1.809a.575.575 0 0 0-.814 0l-1.131 1.131a.575.575 0 1 0 .813.813l1.132-1.131a.575.575 0 0 0 0-.813m-7.92 0a.575.575 0 0 0-.813.813l1.13 1.131a.575.575 0 1 0 .814-.813zm3.248 3.071a.7.7 0 1 0-.99.99l.77.77.99-.99zm4.305.72a.575.575 0 0 0 0 1.15h1.6a.575.575 0 1 0 0-1.15zm-9.6 0a.575.575 0 1 0 0 1.15H4a.575.575 0 0 0 0-1.15zm11.895 5.88-5.37-5.37-.99.99 5.37 5.37a.7.7 0 0 0 .99-.99m-8.717-2.883a.575.575 0 0 0-.813 0l-1.131 1.131a.575.575 0 1 0 .813.813l1.131-1.131a.575.575 0 0 0 0-.813M8 11.425a.575.575 0 0 0-.575.575v1.6a.575.575 0 1 0 1.15 0V12A.575.575 0 0 0 8 11.425"
                    })
                },
                a = (0, r(104509).wt)("magicWandSmall", n, "small")
        },
        445567: (e, t, r) => {
            r.d(t, {
                m8: () => e3,
                ZY: () => e2,
                xr: () => e5,
                ZX: () => e9
            }), r(944114), r(898992), r(823215), r(354520), r(672577), r(430670), r(803949), r(581454);
            var n = r(296540),
                a = () => r(111010);
            r(814603), r(147566), r(198721);
            class i {
                expandedToCompressed = new Map;
                compressedToExpanded = new Map;
                nextId = 1;
                baseUrl;
                publicDomainName;
                constructor(e) {
                    this.baseUrl = e.config.domainBaseUrl, this.publicDomainName = e.config.publicDomainName
                }
                shouldCompressUrl(e) {
                    if (e.startsWith(this.baseUrl) || e.startsWith(this.publicDomainName)) return !0;
                    try {
                        if (e.startsWith("https://") || e.startsWith("http://")) {
                            let t = new URL(e).hostname.toLowerCase();
                            if (t.includes("notion.so") || t.includes("notion.site") || t.endsWith("slack.com")) return !0
                        }
                    } catch {}
                    for (let t of agentUriSchemas) {
                        let r = `${t}://`;
                        if (e.startsWith(r)) return !0
                    }
                    return !1
                }
                compress(e) {
                    return wrapUrisInCurlyBraces({
                        input: e,
                        baseUrl: this.baseUrl,
                        publicDomainName: this.publicDomainName
                    }).replace(/\{\{([^{}]+)\}\}/g, (e, t) => {
                        let r, n;
                        if (/^(?:[A-Za-z0-9._@-]+-)?(\d+)(?:-[A-Za-z0-9._@-]+)?$/.test(t)) return `{{${t}}}`;
                        let a = t.match(/^\[prefix=([^\]]+)\](.+)$/),
                            i = t.match(/^\[raw\](.+)$/);
                        if (i) return i[1];
                        if (a ? (r = a[1], n = a[2]) : n = t, !r && (n.startsWith("https://") || n.startsWith("http://")) && !this.shouldCompressUrl(n) && n.length <= 2e3) return `${n}`;
                        !this.expandedToCompressed.has(t) && (this.expandedToCompressed.set(t, this.nextId), this.compressedToExpanded.set(this.nextId, t), this.nextId++);
                        let s = this.expandedToCompressed.get(t),
                            l = function(e) {
                                if (e.startsWith("user://")) {
                                    let t = e.slice(7),
                                        r = t.lastIndexOf("/");
                                    if (-1 !== r) {
                                        let e = t.slice(r + 1);
                                        if (e.includes("@")) return e
                                    }
                                }
                                if (e.startsWith("slackUser://")) {
                                    let t = e.slice(12).split("/");
                                    if (3 === t.length && t[2]) return t[2]
                                }
                            }(n);
                        if (r) return l ? `{{${r}-${s}-${l}}}` : `{{${r}-${s}}}`;
                        if (n.startsWith(this.baseUrl) || n.startsWith(this.publicDomainName)) return `{{notion-${s}}}`;
                        if (n.includes("slack.com")) try {
                            let e = new URL(n);
                            if (e.hostname.toLowerCase().endsWith("slack.com")) {
                                let t = e.pathname;
                                if (t.includes("/p") && t.includes("/archives/")) return `{{slack-message-${s}}}`;
                                if (t.includes("/archives/")) return `{{slack-channel-${s}}}`;
                                if (t.includes("/team/")) return `{{slack-user-${s}}}`
                            }
                        } catch {}
                        if (n.startsWith("https://") || n.startsWith("http://")) {
                            let e = n.match(/^https?:\/\/([^/]+)/);
                            if (e && e[1]) {
                                let t = e[1].split(":")[0].replace(/^www\./, "");
                                return `{{${t}-${s}}}`
                            }
                        } else if (n.includes("://")) {
                            var c;
                            let e = null == (c = n.match(/^([^:]+):\/\//)) ? void 0 : c[1];
                            if (e) {
                                let t = o[e] || e;
                                return "no-prefix" === t ? l ? `{{${s}-${l}}}` : `{{${s}}}` : l ? `{{${t}-${s}-${l}}}` : `{{${t}-${s}}}`
                            }
                        }
                        return `{{${s}}}`
                    })
                }
                compressInferenceOutput(e) {
                    return inferenceOutputToToolsResults(e).map(e => "text" === e.type || "tool_use" === e.type ? { ...e,
                        content: this.compress(e.content)
                    } : e)
                }
                uncompress(e, t) {
                    let r = [],
                        n = [],
                        a = 0;
                    for (; a < e.length;) {
                        let i, o = e.indexOf("{{", a);
                        if (-1 === o) {
                            n.push(e.slice(a));
                            break
                        }
                        let s = e.indexOf("}}", o + 2);
                        if (-1 === s) {
                            n.push(e.slice(a));
                            break
                        }
                        n.push(e.slice(a, o));
                        let l = e.slice(o + 2, s),
                            c = !1,
                            d = l.match(/\d+/g);
                        if (d) {
                            for (let e of d) {
                                let t = l.indexOf(e),
                                    r = t + e.length,
                                    n = t > 0 ? l[t - 1] : "-",
                                    a = r < l.length ? l[r] : "-";
                                if ("-" === n && ("-" === a || "}" === a)) {
                                    i = e, c = !0;
                                    break
                                }
                            }!c && 1 === d.length && /^\d+$/.test(l) && (i = l, c = !0)
                        }
                        if (c && i && /^\d+$/.test(i)) {
                            let e = parseInt(i, 10),
                                a = this.compressedToExpanded.get(e);
                            if (a)
                                if (t) n.push(`{{${a}}}`);
                                else if (a.startsWith("[prefix=")) {
                                let e = a.indexOf("]"); - 1 !== e ? n.push(a.slice(e + 1)) : n.push(a)
                            } else n.push(a);
                            else r.push(`Failed to uncompress string: ID {{${e}}} has no mapping.`), n.push(`{{${e}}}`)
                        } else n.push(`{{${l}}}`);
                        a = s + 2
                    }
                    return {
                        uncompressed: n.join(""),
                        errors: r
                    }
                }
                uncompressInferenceOutput(e, t) {
                    let r = inferenceOutputToToolsResults(e),
                        n = [];
                    return {
                        uncompressed: r.map(e => {
                            if ("follow_ups" === e.type) {
                                let {
                                    uncompressed: r,
                                    errors: a
                                } = this.uncompress(e.content, t);
                                n.push(...a);
                                let i = e.followUps.map(e => {
                                    let {
                                        uncompressed: r,
                                        errors: a
                                    } = this.uncompress(e.message, t);
                                    return n.push(...a), {
                                        label: e.label,
                                        message: r
                                    }
                                });
                                return { ...e,
                                    content: r,
                                    followUps: i
                                }
                            }
                            let {
                                uncompressed: r,
                                errors: a
                            } = this.uncompress(e.content, t);
                            return n.push(...a), { ...e,
                                content: r
                            }
                        }),
                        errors: n
                    }
                }
                clone() {
                    let e = new i({
                        config: {
                            domainBaseUrl: this.baseUrl,
                            publicDomainName: this.publicDomainName
                        }
                    });
                    return e.expandedToCompressed = new Map(this.expandedToCompressed), e.compressedToExpanded = new Map(this.compressedToExpanded), e.nextId = this.nextId, e
                }
                toString() {
                    return `PromptStringCompressor(expandedToCompressed: ${JSON.stringify(Array.from(this.expandedToCompressed.entries()),null,2)}, compressedToExpanded: ${JSON.stringify(Array.from(this.compressedToExpanded.entries()),null,2)}, nextId: ${this.nextId})`
                }
                getCompressedUrls() {
                    let e = [];
                    for (let [t, r] of this.compressedToExpanded.entries()) e.some(e => e.expandedUrl === r) || e.push({
                        compressedForm: this.compress(`{{${r}}}`),
                        expandedUrl: r
                    });
                    return e
                }
            }
            let o = {
                view: "view",
                pageOrCollectionViewBlock: "notion",
                collection: "data-source",
                collectionProperty: "property",
                formulaResult: "formula-result",
                formulaCode: "formula-code",
                collectionPropertyOption: "option",
                discussion: "discussion",
                pageDiscussions: "page-discussions",
                integration: "integration",
                trigger: "trigger",
                script: "script",
                user: "user",
                teamspace: "teamspace",
                agent: "agent",
                thread: "thread",
                file: "file",
                slackUser: "slack-user",
                slackMessage: "slack-message",
                slackChannel: "slack-channel",
                worker: "worker",
                citation: "no-prefix",
                snapshot: "snapshot",
                notification: "notification"
            };
            var s = r(474848);
            let l = {
                container: {
                    position: "sticky",
                    top: 0,
                    background: r(632079).Tj.background.primary,
                    zIndex: 2,
                    boxShadow: `${r(632079).Tj.background.primary} 0 4px 4px`
                }
            };

            function c(e) {
                var t;
                let {
                    coworker: n
                } = e, a = n.coworkerEmail, i = null == (t = n.profile) ? void 0 : t.displayName;
                return a ? (0, s.jsx)(r(4458).fI, {
                    gap: 10,
                    paddingBlock: 8,
                    paddingInlineEnd: 12,
                    style: l.container,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    children: (0, s.jsx)(r(321753).A, {
                        type: i ? "avatar-name-email" : "avatar-name",
                        avatar: {
                            email: a,
                            name: i || a
                        },
                        size: 16
                    })
                }) : null
            }

            function d(e) {
                let {
                    calendarEvents: t,
                    environment: n,
                    detailed: a
                } = e;
                if (Array.isArray(t) && t.length) return (0, r(360989).ww)(t).map(e => (function(e) {
                    let t, n, {
                        calendarEvent: a,
                        environment: i,
                        detailed: o
                    } = e;
                    return "webUrl" in a && (t = a.webUrl), "eventId" in a && (n = a.eventId), {
                        key: `${JSON.stringify(a.calendar)}:${n||JSON.stringify(a)}`,
                        action() {
                            t && (0, r(79266).navigate)({
                                environment: i,
                                url: t,
                                openInNew: "tab"
                            })
                        },
                        render: e => (0, s.jsx)(r(548328).j, {
                            calendarEvent: a,
                            detailed: o
                        })
                    }
                })({
                    environment: n,
                    calendarEvent: e,
                    detailed: a
                })).filter(e => void 0 !== e)
            }
            r(908872);
            let u = {
                container: {
                    width: "100%",
                    maxWidth: 300,
                    borderRadius: 12,
                    overflow: "hidden",
                    border: `1px solid ${r(632079).Tj.border.secondary}`
                },
                error: {
                    padding: 12
                },
                image: {
                    display: "block",
                    width: "100%",
                    maxWidth: 300,
                    cursor: "zoom-in"
                },
                style0: {
                    marginTop: 6
                }
            };

            function p(e) {
                let {
                    fileUrl: t,
                    permissionRecord: i
                } = e, o = (0, r(533992).v3)(), l = (0, n.useRef)(null), [c, d] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    d(!1)
                }, [t]);
                let [p] = (0, r(97668).Yb)(async () => {
                    if (i) return (0, r(704232).k)({
                        environment: o,
                        url: {
                            url: t,
                            download: !1,
                            permissionRecord: i
                        },
                        isElectionAppWithProxySupport: !!r(584257).A.state.isNotionProtocolBugFixed
                    })
                }, [o, t, i]), g = p.value, f = (0, n.useCallback)(() => {
                    var e;
                    if (!g) return;
                    let t = null == (e = l.current) ? void 0 : e.getImageDimensions();
                    t && r(515260).o9({
                        environment: o,
                        renderFullScreenNode: () => (0, s.jsx)(r(408873).F, {
                            url: g,
                            error: void 0,
                            imageNaturalHeight: t.naturalHeight,
                            imageNaturalWidth: t.naturalWidth
                        }),
                        fullScreenNodeRect: t.clientRect,
                        contentAspectRatio: t.naturalWidth / Math.max(t.naturalHeight, 1)
                    })
                }, [o, g]);
                return i ? "pending" === p.status || "idle" === p.status ? (0, s.jsx)("div", {
                    style: u.container,
                    children: (0, s.jsx)("div", {
                        style: u.error,
                        children: (0, s.jsx)(r(517334).k, {
                            size: "sm"
                        })
                    })
                }) : "rejected" === p.status || c || !g ? (0, s.jsx)("div", {
                    style: u.container,
                    children: (0, s.jsxs)("div", {
                        style: u.error,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "captionRegular",
                            colorVariant: "tertiary",
                            children: (0, s.jsx)(r(109939).sA, {
                                id: "AgentBrowserScreenshot.loadError",
                                defaultMessage: "Unable to load screenshot"
                            })
                        }), g ? (0, s.jsx)("div", {
                            style: u.style0,
                            children: (0, s.jsx)(r(68774).N, {
                                href: g,
                                external: !0,
                                children: (0, s.jsx)(a().D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "accentPrimary",
                                    children: (0, s.jsx)(r(109939).sA, {
                                        id: "AgentBrowserScreenshot.openImage",
                                        defaultMessage: "Open image"
                                    })
                                })
                            })
                        }) : null]
                    })
                }) : (0, s.jsx)("div", {
                    style: u.container,
                    children: (0, s.jsx)(r(989059).A, {
                        src: g,
                        ref: l,
                        onClick: f,
                        onError: () => d(!0),
                        onLoad: e => d(e),
                        style: u.image,
                        placeholderStyle: u.image,
                        enableLoadingShimmer: !0,
                        alt: "Browser screenshot"
                    })
                }) : (0, s.jsx)("div", {
                    style: u.container,
                    children: (0, s.jsx)("div", {
                        style: u.error,
                        children: (0, s.jsx)(a().D, {
                            styleKey: "captionRegular",
                            colorVariant: "tertiary",
                            children: (0, s.jsx)(r(109939).sA, {
                                id: "AgentBrowserScreenshot.missingPermissionRecord",
                                defaultMessage: "Unable to display screenshot"
                            })
                        })
                    })
                })
            }
            let g = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.62 2.19 16.75 16.51",
                    svg: (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("path", {
                            d: "M4.15 5.4a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0m3.25-.65a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.95.65a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0m3.25-.65a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.95.65a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0M4.8 7.35a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3M6.75 8a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0M10 7.35a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3m1.95.65a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0m3.25-.65a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3M4.15 10.6a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0m3.204-.639a.625.625 0 1 0 0 1.25h5.25a.625.625 0 1 0 0-1.25zm7.196.639a.65.65 0 1 1 1.3 0 .65.65 0 0 1-1.3 0"
                        }), (0, s.jsx)("path", {
                            d: "M1.625 4.322c0-1.174.951-2.125 2.125-2.125h12.5c1.174 0 2.125.951 2.125 2.125v7.356a2.125 2.125 0 0 1-2.125 2.125H3.75a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v7.356c0 .484.392.875.875.875h12.5a.875.875 0 0 0 .875-.875V4.322a.875.875 0 0 0-.875-.875zM14.035 16.04a.625.625 0 1 0-.73-1.015l-3.17 2.278-3.17-2.278a.625.625 0 0 0-.73 1.015l3.535 2.54a.625.625 0 0 0 .73 0z"
                        })]
                    })
                },
                f = (0, r(104509).wt)("keyboardDown", g, "default");

            function m(e) {
                if (!e || "object" != typeof e) return;
                let t = Reflect.get(e, "action");
                if ("string" == typeof t) switch (t) {
                    case "list":
                        return {
                            action: "list"
                        };
                    case "create":
                    case "goto":
                        {
                            let r = Reflect.get(e, "tab"),
                                n = Reflect.get(e, "url");
                            if ("string" != typeof r || "string" != typeof n) return;
                            return {
                                action: t,
                                tab: r,
                                url: n
                            }
                        }
                    case "close":
                    case "get_current_url":
                    case "print_accessibility_tree":
                    case "screenshot":
                        {
                            let r = Reflect.get(e, "tab");
                            if ("string" != typeof r) return;
                            return {
                                action: t,
                                tab: r
                            }
                        }
                    case "wait":
                        {
                            let t = Reflect.get(e, "tab"),
                                r = Reflect.get(e, "seconds");
                            if ("string" != typeof t || "number" != typeof r) return;
                            return {
                                action: "wait",
                                tab: t,
                                seconds: r
                            }
                        }
                    case "type":
                        {
                            let t = Reflect.get(e, "tab"),
                                r = Reflect.get(e, "text");
                            if ("string" != typeof t || "string" != typeof r) return;
                            return {
                                action: "type",
                                tab: t,
                                text: r
                            }
                        }
                    case "keypress":
                        {
                            let t = Reflect.get(e, "tab"),
                                r = Reflect.get(e, "keys");
                            if ("string" != typeof t || !Array.isArray(r) || !r.every(e => "string" == typeof e)) return;
                            return {
                                action: "keypress",
                                tab: t,
                                keys: r
                            }
                        }
                    case "move":
                    case "click":
                    case "double_click":
                        {
                            let r = Reflect.get(e, "tab"),
                                n = Reflect.get(e, "x"),
                                a = Reflect.get(e, "y");
                            if ("string" != typeof r || "number" != typeof n || "number" != typeof a) return;
                            if ("click" === t) {
                                let t = Reflect.get(e, "button");
                                if (void 0 === t || "left" === t || "right" === t || "middle" === t) return {
                                    action: "click",
                                    tab: r,
                                    x: n,
                                    y: a,
                                    button: t
                                };
                                return {
                                    action: "click",
                                    tab: r,
                                    x: n,
                                    y: a
                                }
                            }
                            return {
                                action: t,
                                tab: r,
                                x: n,
                                y: a
                            }
                        }
                    case "scroll":
                        {
                            let t = Reflect.get(e, "tab"),
                                r = Reflect.get(e, "x"),
                                n = Reflect.get(e, "y"),
                                a = Reflect.get(e, "scroll_x"),
                                i = Reflect.get(e, "scroll_y");
                            if ("string" != typeof t || "number" != typeof r || "number" != typeof n || "number" != typeof a || "number" != typeof i) return;
                            return {
                                action: "scroll",
                                tab: t,
                                x: r,
                                y: n,
                                scroll_x: a,
                                scroll_y: i
                            }
                        }
                    case "drag":
                        {
                            let t = Reflect.get(e, "tab"),
                                r = Reflect.get(e, "path");
                            if ("string" != typeof t || !Array.isArray(r)) return;
                            let n = [];
                            for (let e of r) {
                                if (!e || "object" != typeof e) return;
                                let t = Reflect.get(e, "x"),
                                    r = Reflect.get(e, "y");
                                if ("number" != typeof t || "number" != typeof r) return;
                                n.push({
                                    x: t,
                                    y: r
                                })
                            }
                            return {
                                action: "drag",
                                tab: t,
                                path: n
                            }
                        }
                    default:
                        return
                }
            }

            function h(e) {
                switch (e.action) {
                    case "list":
                        return {
                            title: "List tabs"
                        };
                    case "create":
                        return {
                            title: "Create tab",
                            detail: `"${e.tab}" \xb7 ${e.url}`
                        };
                    case "goto":
                        return {
                            title: "Navigate",
                            detail: `"${e.tab}" \xb7 ${e.url}`
                        };
                    case "click":
                        return {
                            title: "Click",
                            detail: `"${e.tab}" \xb7 ${x(e.x,e.y)}` + (e.button ? ` \xb7 ${e.button}` : "")
                        };
                    case "double_click":
                        return {
                            title: "Double click",
                            detail: `"${e.tab}" \xb7 ${x(e.x,e.y)}`
                        };
                    case "scroll":
                        return {
                            title: "Scroll",
                            detail: `"${e.tab}" \xb7 from ${x(e.x,e.y)} \xb7 by (${e.scroll_x}, ${e.scroll_y})`
                        };
                    case "type":
                        return {
                            title: "Type",
                            detail: `"${e.tab}" \xb7 "${e.text}"`
                        };
                    case "keypress":
                        return {
                            title: "Press keys",
                            detail: `"${e.tab}" \xb7 ${function(e){if(!Array.isArray(e))return"(unspecified)";let t=[];for(let r of e)"string"==typeof r&&t.push(r);return 0===t.length?"(unspecified)":t.join(" + ")}(e.keys)}`
                        };
                    case "wait":
                        return {
                            title: "Wait",
                            detail: `"${e.tab}" \xb7 ${e.seconds}s`
                        };
                    case "move":
                        return {
                            title: "Move cursor",
                            detail: `"${e.tab}" \xb7 ${x(e.x,e.y)}`
                        };
                    case "drag":
                        var t = e;
                        if (!Array.isArray(t.path) || 0 === t.path.length) return {
                            title: "Drag",
                            detail: `"${t.tab}" \xb7 empty path`
                        };
                        let n = t.path[0],
                            a = t.path[t.path.length - 1];
                        return {
                            title: "Drag",
                            detail: `"${t.tab}" \xb7 ${x(n.x,n.y)} → ${x(a.x,a.y)}`
                        };
                    case "get_current_url":
                        return {
                            title: "Get current URL",
                            detail: `"${e.tab}"`
                        };
                    case "screenshot":
                        return {
                            title: "Screenshot",
                            detail: `"${e.tab}"`
                        };
                    case "print_accessibility_tree":
                        return {
                            title: "Accessibility tree",
                            detail: `"${e.tab}"`
                        };
                    case "close":
                        return {
                            title: "Close tab",
                            detail: `"${e.tab}"`
                        };
                    default:
                        return (0, r(722371).HB)(e), {
                            title: "Unknown browser action"
                        }
                }
            }

            function y(e) {
                switch (e.action) {
                    case "list":
                        return r(672959).Q;
                    case "create":
                        return r(581923).plusIcon;
                    case "goto":
                        return r(515388).globeIcon;
                    case "click":
                    case "double_click":
                    case "move":
                        return r(345783).S;
                    case "scroll":
                        return r(300921).arrowUpDownIcon;
                    case "type":
                        return f;
                    case "keypress":
                        return r(430598).l;
                    case "wait":
                        return r(789511).S;
                    case "drag":
                        return r(53445).arrowLeftRightIcon;
                    case "get_current_url":
                        return r(18731).C;
                    case "screenshot":
                        return r(937233).M;
                    case "print_accessibility_tree":
                        return r(46552).P;
                    case "close":
                        return r(117152).xMarkIcon;
                    default:
                        return (0, r(722371).HB)(e), r(345783).S
                }
            }

            function x(e, t) {
                return `(${e}, ${t})`
            }

            function v(e) {
                if (!e || "object" != typeof e) return;
                let t = Reflect.get(e, "table"),
                    n = Reflect.get(e, "id"),
                    a = Reflect.get(e, "spaceId");
                if ("string" == typeof t && (0, r(93953).bI)(t) && "string" == typeof n && (void 0 === a || "string" == typeof a)) {
                    if ((0, r(496282).w1)(t) && "string" != typeof a) return;
                    return r(496282).L3.fromPointerLike({
                        table: t,
                        id: n,
                        spaceId: a
                    })
                }
            }
            let b = {
                actionIcon: {
                    flexShrink: 0,
                    marginTop: 2
                },
                actionText: {
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word"
                },
                actionMeta: {
                    marginTop: 2
                },
                resultBlock: {
                    padding: 12,
                    borderRadius: 8,
                    background: r(632079).Tj.gray.background.primary
                }
            };

            function j(e) {
                var t, i, o;
                let {
                    step: l
                } = e, c = (0, n.useMemo)(() => {
                    var e;
                    return (null == (e = l.input) ? void 0 : e.actions) ? ? []
                }, [null == (t = l.input) ? void 0 : t.actions]), d = (0, n.useMemo)(() => c.map((e, t) => c.slice(0, t).reduce((e, t) => e + +("screenshot" === t.action), 0)), [c]), u = (0, n.useMemo)(() => c.map((e, t) => {
                    let n, {
                        title: i,
                        detail: o
                    } = h(e);
                    if ("screenshot" === e.action) {
                        let e = d[t],
                            r = function(e, t) {
                                if (!e || "object" != typeof e) return;
                                let r = Reflect.get(e, "files");
                                if (!Array.isArray(r)) return;
                                let n = r[t];
                                if (!n || "object" != typeof n || "file" !== Reflect.get(n, "type")) return;
                                let a = Reflect.get(n, "attachmentStep");
                                if (!a || "object" != typeof a) return;
                                let i = Reflect.get(a, "fileUrl");
                                if ("string" == typeof i) return {
                                    fileUrl: i,
                                    permissionRecord: v(Reflect.get(a, "permissionRecord"))
                                }
                            }(l.result, e);
                        r && (n = (0, s.jsx)(p, { ...r
                        }))
                    }
                    return (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsxs)(r(4458).fI, {
                            alignItems: "flex-start",
                            gap: 10,
                            children: [(0, s.jsx)(r(16275).I, {
                                icon: y(e),
                                size: "sm",
                                colorVariant: "secondary",
                                style: b.actionIcon
                            }), (0, s.jsxs)("div", {
                                style: b.actionText,
                                children: [(0, s.jsx)(a().D, {
                                    styleKey: "bodySmMedium",
                                    colorVariant: "secondary",
                                    children: i
                                }), o ? (0, s.jsx)(a().D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "tertiary",
                                    style: b.actionMeta,
                                    children: o
                                }) : null]
                            })]
                        }), n]
                    }, `${t}-${i}-${o??""}`)
                }), [c, d, l.result]), g = (null == (i = l.result) ? void 0 : i.text) ? ? "", f = (null == (o = l.result) ? void 0 : o.error) ? ? "";
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 12,
                    children: [u.length > 0 ? (0, s.jsx)(r(4458).VP, {
                        gap: 10,
                        children: u
                    }) : null, g ? (0, s.jsx)("div", {
                        style: b.resultBlock,
                        children: (0, s.jsx)(a().D, {
                            styleKey: "bodyRegular",
                            colorVariant: "primary",
                            children: g
                        })
                    }) : null, f ? (0, s.jsx)("div", {
                        style: b.resultBlock,
                        children: (0, s.jsx)(a().D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: f
                        })
                    }) : null]
                })
            }
            r(16280), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            let S = r(969475).object({
                    required: {
                        boxId: r(969475).string(),
                        createdThread: r(969475).boolean(),
                        done: r(969475).boolean(),
                        events: r(969475).array(r(969475).lazy(() => k)),
                        status: r(969475).literals("completed", "error", "running"),
                        threadId: r(969475).string()
                    },
                    optional: {
                        runId: r(969475).string()
                    }
                }),
                k = r(969475).union([r(969475).object({
                    required: {
                        messageId: r(969475).string(),
                        runId: r(969475).string(),
                        seq: r(969475).number(),
                        text: r(969475).string(),
                        threadId: r(969475).string(),
                        type: r(969475).literal("assistant.message")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        messageId: r(969475).string(),
                        runId: r(969475).string(),
                        seq: r(969475).number(),
                        text: r(969475).string(),
                        threadId: r(969475).string(),
                        type: r(969475).literal("assistant.thinking")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        code: r(969475).string(),
                        message: r(969475).string(),
                        runId: r(969475).string(),
                        seq: r(969475).number(),
                        threadId: r(969475).string(),
                        type: r(969475).literal("error")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        callId: r(969475).string(),
                        chunk: r(969475).string(),
                        runId: r(969475).string(),
                        seq: r(969475).number(),
                        threadId: r(969475).string(),
                        type: r(969475).literal("tool.output")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        callId: r(969475).string(),
                        runId: r(969475).string(),
                        seq: r(969475).number(),
                        threadId: r(969475).string(),
                        tool: r(969475).string(),
                        type: r(969475).literal("tool.started")
                    },
                    optional: {}
                })]),
                I = (0, r(109939).YK)({
                    showMoreMessages: {
                        id: "AgentScriptToolVisualizer.showMoreMessages",
                        defaultMessage: "Show {count} more"
                    },
                    noMessages: {
                        id: "AgentScriptToolVisualizer.noMessages",
                        defaultMessage: "No messages"
                    },
                    waitingForOutput: {
                        id: "AgentScriptToolVisualizer.boxyWaitingForOutput",
                        defaultMessage: "Waiting for Boxy output"
                    }
                }),
                w = {
                    list: {
                        borderRadius: 8,
                        padding: 12,
                        background: r(632079).Tj.gray.background.primary
                    },
                    messageType: {
                        flexShrink: 0
                    },
                    message: {
                        flex: 1,
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        color: r(632079).Tj.text.secondary
                    },
                    messageExpanded: {
                        overflow: "visible",
                        textOverflow: "clip",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "anywhere"
                    },
                    messageRow: {
                        alignItems: "center",
                        height: "auto",
                        paddingBlock: 4,
                        paddingInline: 0,
                        width: "100%"
                    },
                    messageRowExpanded: {
                        paddingBlock: 8
                    },
                    showMoreButton: {
                        paddingInlineStart: 0
                    }
                };

            function T(e) {
                var t;
                let {
                    step: i
                } = e, o = null == (t = i.result) ? void 0 : t.output, l = !!i.error, c = (0, n.useMemo)(() => {
                    if (i.error) return `Error: ${i.error}`;
                    if (void 0 === o) return "No output";
                    try {
                        return JSON.stringify(JSON.parse(o), null, 2)
                    } catch (e) {
                        if (e instanceof SyntaxError) return o;
                        throw e
                    }
                }, [o, i.error]), d = (0, n.useMemo)(() => (function(e) {
                    if (void 0 !== e) try {
                        var t;
                        return t = JSON.parse(e), (0, r(358519).Qq)(S, t)
                    } catch (e) {
                        return
                    }
                })(o), [o]), u = (0, n.useMemo)(() => d ? function(e) {
                    let t = [],
                        r = new Map,
                        n = new Map;
                    for (let a of e.events) switch (a.type) {
                        case "assistant.message":
                            t.push({
                                key: `assistant-message-${a.messageId}`,
                                type: "assistant",
                                message: a.text
                            });
                            break;
                        case "assistant.thinking":
                            t.push({
                                key: `assistant-thinking-${a.messageId}`,
                                type: "thinking",
                                message: a.text
                            });
                            break;
                        case "tool.started":
                            n.set(a.callId, a.tool);
                            break;
                        case "tool.output":
                            {
                                let e = r.get(a.callId);
                                if (void 0 === e) {
                                    t.push({
                                        key: `tool-output-${a.callId}-${a.seq}`,
                                        type: n.get(a.callId) ? ? "tool",
                                        message: a.chunk
                                    }), r.set(a.callId, t.length - 1);
                                    break
                                }
                                let i = t[e];t[e] = { ...i,
                                    message: `${i.message}${a.chunk}`
                                };
                                break
                            }
                        case "error":
                            t.push({
                                key: `error-${a.seq}`,
                                type: "error",
                                message: a.message
                            })
                    }
                    return t
                }(d) : [], [d]), [p, g] = (0, n.useState)(10), [f, m] = (0, n.useState)(new Set);
                (0, n.useEffect)(() => {
                    g(10), m(new Set)
                }, [i.id]);
                let h = (0, n.useMemo)(() => Math.max(u.length - p, 0), [u.length, p]),
                    y = (0, n.useMemo)(() => u.slice(h).map((e, t) => {
                        let r = h + t;
                        return {
                            message: e,
                            key: `${e.key}-${r}`
                        }
                    }), [u, h]);
                if (!d) return (0, s.jsx)("div", {
                    style: w.list,
                    children: (0, s.jsx)(r(140102).O, {
                        value: c,
                        language: l ? "text" : "json"
                    })
                });
                let x = y.length > 0;
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 8,
                    style: w.list,
                    children: [h > 0 ? (0, s.jsx)(r(988022).p, {
                        size: "sm",
                        shouldShrink: !0,
                        onClick: () => g(e => e + 10),
                        style: w.showMoreButton,
                        children: (0, s.jsx)(r(109939).sA, { ...I.showMoreMessages,
                            values: {
                                count: Math.min(10, h)
                            }
                        })
                    }) : null, x ? (0, s.jsx)(r(4458).VP, {
                        gap: 4,
                        width: "100%",
                        children: y.map(({
                            message: e,
                            key: t
                        }) => {
                            let n = f.has(t);
                            return (0, s.jsx)(r(988022).p, {
                                "aria-expanded": n,
                                onClick: () => m(e => {
                                    let r = new Set(e);
                                    return r.has(t) ? r.delete(t) : r.add(t), r
                                }),
                                style: { ...w.messageRow,
                                    ...n && w.messageRowExpanded
                                },
                                children: (0, s.jsxs)(r(4458).fI, {
                                    gap: 6,
                                    width: "100%",
                                    alignItems: n ? "flex-start" : "center",
                                    flexWrap: "nowrap",
                                    className: "autolayout-row autolayout-fill-width",
                                    children: [(0, s.jsx)(a().D, {
                                        styleKey: "bodySmMedium",
                                        colorVariant: "primary",
                                        style: w.messageType,
                                        children: e.type
                                    }), (0, s.jsx)(a().D, {
                                        styleKey: "bodySmRegular",
                                        title: n ? void 0 : e.message,
                                        style: { ...w.message,
                                            ...n && w.messageExpanded
                                        },
                                        children: e.message
                                    })]
                                })
                            }, t)
                        })
                    }) : (0, s.jsx)(a().D, {
                        styleKey: "bodySmRegular",
                        colorVariant: "secondary",
                        children: d.done ? (0, s.jsx)(r(109939).sA, { ...I.noMessages
                        }) : (0, s.jsx)(r(109939).sA, { ...I.waitingForOutput
                        })
                    })]
                })
            }
            let C = {
                position: "relative"
            };

            function M(e) {
                var t;
                let {
                    step: a
                } = e, i = (0, n.useMemo)(() => {
                    var e;
                    let t = function(e) {
                        if (e) try {
                            let t = JSON.parse(e);
                            if (!(0, r(358519).Xj)(r(527180).ve, t)) return;
                            let n = t.accounts.flatMap(e => e.calendars.flatMap(e => e.createdEvents));
                            return n.length > 0 ? n : void 0
                        } catch {
                            return
                        }
                    }(null == (e = a.result) ? void 0 : e.output);
                    if (t) return {
                        events: t,
                        detailed: !1
                    };
                    let n = function(e) {
                        if (null != e && e.args && (0, r(722371).Gv)(e.args) && (0, r(358519).Xj)(r(527180).bj, e.args)) return e.args.events.length > 0 ? [...e.args.events] : void 0
                    }(a.input);
                    if (n) return {
                        events: n,
                        detailed: !0
                    }
                }, [a.input, null == (t = a.result) ? void 0 : t.output]);
                if (!i) return null;
                let o = (0, r(360989).ww)(i.events);
                return (0, s.jsx)(r(4458).VP, {
                    gap: 4,
                    className: "autolayout-col autolayout-fill-width",
                    style: C,
                    children: o.map((e, t) => (0, s.jsx)(r(548328).j, {
                        calendarEvent: e,
                        detailed: i.detailed
                    }, "eventId" in e ? e.eventId ? ? t : t))
                })
            }
            let A = {
                position: "relative"
            };

            function R(e) {
                var t;
                let {
                    step: a
                } = e, i = (0, n.useMemo)(() => {
                    var e, t = null == (e = a.result) ? void 0 : e.output;
                    if (t) try {
                        let e = JSON.parse(t);
                        if (!(0, r(358519).Xj)(r(527180).Gh, e)) return;
                        return e.coworkers.length > 0 ? e.coworkers : void 0
                    } catch {}
                }, [null == (t = a.result) ? void 0 : t.output]);
                return i ? (0, s.jsx)(r(4458).VP, {
                    gap: 4,
                    className: "autolayout-col autolayout-fill-width",
                    style: A,
                    children: i.map(({
                        events: e,
                        ...t
                    }) => (0, s.jsx)(P, {
                        coworker: t,
                        events: e
                    }, t.coworkerEmail))
                }) : null
            }

            function P(e) {
                let {
                    coworker: t,
                    events: n
                } = e, a = (0, r(360989).ww)(n);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(c, {
                        coworker: t
                    }), a.map((e, t) => (0, s.jsx)(r(548328).j, {
                        calendarEvent: e,
                        detailed: !1
                    }, e.eventId ? ? t))]
                })
            }
            let N = (0, r(109939).YK)({
                    noEvents: {
                        id: "AgentCallFunctionCalendarListEventsRenderer.noEvents",
                        defaultMessage: "No events found"
                    }
                }),
                F = {
                    position: "relative"
                };

            function V(e) {
                var t;
                let {
                    step: a
                } = e, i = (0, n.useMemo)(() => {
                    var e;
                    let t = function(e) {
                        if (e) try {
                            let t = JSON.parse(e);
                            if (!(0, r(358519).Xj)(r(527180).Xk, t)) return;
                            let n = t.accounts.flatMap(e => e.calendars.flatMap(e => e.events));
                            return n.length > 0 ? n : void 0
                        } catch {
                            return
                        }
                    }(null == (e = a.result) ? void 0 : e.output);
                    if (t) return (0, r(360989).ww)(t)
                }, [null == (t = a.result) ? void 0 : t.output]);
                return null != i && i.length ? (0, s.jsx)(r(4458).VP, {
                    gap: 4,
                    className: "autolayout-col autolayout-fill-width",
                    style: F,
                    children: i.map((e, t) => (0, s.jsx)(r(548328).j, {
                        calendarEvent: e,
                        detailed: !1
                    }, e.eventId ? ? t))
                }) : (0, s.jsx)(r(109939).sA, { ...N.noEvents
                })
            }
            let B = {
                position: "relative"
            };

            function D(e) {
                var t;
                let {
                    step: a
                } = e, i = (0, n.useMemo)(() => {
                    var e;
                    let t = function(e) {
                        if (e) try {
                            let t = JSON.parse(e);
                            if (!(0, r(358519).Xj)(r(527180).Ml, t)) return;
                            return t.updatedEvents.length > 0 ? t.updatedEvents : void 0
                        } catch {
                            return
                        }
                    }(null == (e = a.result) ? void 0 : e.output);
                    if (t) return {
                        events: (0, r(360989).ww)(t),
                        detailed: !1
                    }
                }, [null == (t = a.result) ? void 0 : t.output]);
                return i ? (0, s.jsx)(r(4458).VP, {
                    gap: 4,
                    className: "autolayout-col autolayout-fill-width",
                    style: B,
                    children: i.events.map((e, t) => (0, s.jsx)(r(548328).j, {
                        calendarEvent: e,
                        detailed: i.detailed
                    }, e.eventId ? ? t))
                }) : null
            }
            let E = {
                actionIcon: {
                    flexShrink: 0,
                    marginTop: 2
                },
                actionText: {
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word"
                },
                actionMeta: {
                    marginTop: 2
                },
                resultBlock: {
                    padding: 12,
                    borderRadius: 8,
                    background: r(632079).Tj.gray.background.primary
                }
            };

            function z(e) {
                var t, i, o;
                let {
                    step: l
                } = e, c = (0, n.useMemo)(() => {
                    let e = function(e, t) {
                            if (!e || "object" != typeof e) return;
                            let r = Reflect.get(e, t);
                            if (!(!r || "object" != typeof r || Array.isArray(r))) return r
                        }(l.input, "args"),
                        t = e ? function(e, t) {
                            if (!e || "object" != typeof e) return;
                            let r = Reflect.get(e, t);
                            return Array.isArray(r) ? r : void 0
                        }(e, "actions") : void 0;
                    if (!t) return [];
                    let r = [];
                    for (let e of t) {
                        let t = m(e);
                        t && r.push(t)
                    }
                    return r
                }, [l.input]), d = (0, n.useMemo)(() => c.map((e, t) => c.slice(0, t).reduce((e, t) => e + +("screenshot" === t.action), 0)), [c]), u = (0, n.useMemo)(() => {
                    var e, t;
                    return (null == (e = l.result) ? void 0 : e.attachments) ? ? (null == (t = l.renderedResult) ? void 0 : t.attachments) ? ? []
                }, [null == (t = l.renderedResult) ? void 0 : t.attachments, null == (i = l.result) ? void 0 : i.attachments]), g = (0, n.useMemo)(() => c.map((e, t) => {
                    let n, {
                        title: i,
                        detail: o
                    } = h(e);
                    if ("screenshot" === e.action) {
                        let e = u[d[t]];
                        e && (0, r(180139).tT)(e.contentType) && e.permissionRecord && (n = (0, s.jsx)(p, {
                            fileUrl: e.fileUrl,
                            permissionRecord: e.permissionRecord
                        }))
                    }
                    return (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsxs)(r(4458).fI, {
                            alignItems: "flex-start",
                            gap: 10,
                            children: [(0, s.jsx)(r(16275).I, {
                                icon: y(e),
                                size: "sm",
                                colorVariant: "secondary",
                                style: E.actionIcon
                            }), (0, s.jsxs)("div", {
                                style: E.actionText,
                                children: [(0, s.jsx)(a().D, {
                                    styleKey: "bodySmMedium",
                                    colorVariant: "secondary",
                                    children: i
                                }), o ? (0, s.jsx)(a().D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "tertiary",
                                    style: E.actionMeta,
                                    children: o
                                }) : null]
                            })]
                        }), n]
                    }, `${t}-${i}-${o??""}`)
                }), [c, u, d]), f = (0, n.useMemo)(() => {
                    var e;
                    let t = null == (e = l.result) ? void 0 : e.output;
                    if (t) try {
                        return JSON.parse(t)
                    } catch {
                        return
                    }
                }, [null == (o = l.result) ? void 0 : o.output]), x = f ? W(f, "text") ? ? "" : "", v = f ? W(f, "error") ? ? "" : "";
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 12,
                    children: [g.length > 0 ? (0, s.jsx)(r(4458).VP, {
                        gap: 10,
                        children: g
                    }) : null, x ? (0, s.jsx)("div", {
                        style: E.resultBlock,
                        children: (0, s.jsx)(a().D, {
                            styleKey: "bodyRegular",
                            colorVariant: "primary",
                            children: x
                        })
                    }) : null, v ? (0, s.jsx)("div", {
                        style: E.resultBlock,
                        children: (0, s.jsx)(a().D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: v
                        })
                    }) : null]
                })
            }

            function W(e, t) {
                if (!e || "object" != typeof e) return;
                let r = Reflect.get(e, t);
                return "string" == typeof r ? r : void 0
            }
            let $ = (0, r(109939).YK)({
                    attachments: {
                        id: "AgentCallFunctionComputerReadFileRenderer.attachments",
                        defaultMessage: "Attachments"
                    },
                    contents: {
                        id: "AgentCallFunctionComputerReadFileRenderer.contents",
                        defaultMessage: "Contents"
                    },
                    fileNotFound: {
                        id: "AgentCallFunctionComputerReadFileRenderer.fileNotFound",
                        defaultMessage: "File not found"
                    },
                    noContent: {
                        id: "AgentCallFunctionComputerReadFileRenderer.noContent",
                        defaultMessage: "No file contents returned"
                    }
                }),
                L = {
                    attachmentsRow: {
                        position: "relative",
                        flexWrap: "wrap"
                    },
                    codeBlock: {
                        borderRadius: 8,
                        padding: 12,
                        background: r(632079).Tj.gray.background.primary
                    }
                };

            function _(e) {
                var t, i, o;
                let {
                    step: l
                } = e, c = (0, n.useMemo)(() => {
                    var e, t = null == (e = l.result) ? void 0 : e.output;
                    if (!t) return {};
                    try {
                        let e = JSON.parse(t);
                        return {
                            found: function(e, t) {
                                if (!e || "object" != typeof e) return;
                                let r = Reflect.get(e, t);
                                return "boolean" == typeof r ? r : void 0
                            }(e, "found"),
                            content: function(e, t) {
                                if (!e || "object" != typeof e) return;
                                let r = Reflect.get(e, t);
                                return "string" == typeof r ? r : void 0
                            }(e, "content")
                        }
                    } catch (e) {
                        if (e instanceof SyntaxError) return {
                            content: t
                        };
                        throw e
                    }
                }, [null == (t = l.result) ? void 0 : t.output]), d = (null == (i = l.result) ? void 0 : i.attachments) ? ? (null == (o = l.renderedResult) ? void 0 : o.attachments) ? ? [], u = "string" == typeof c.content && c.content.length > 0;
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 12,
                    children: [d.length > 0 ? (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...$.attachments
                            })
                        }), (0, s.jsx)(r(4458).fI, {
                            gap: 8,
                            style: L.attachmentsRow,
                            alignItems: "center",
                            className: "autolayout-row",
                            children: d.map(e => (0, s.jsx)(r(315148).kp, {
                                uploadProgress: {
                                    status: "complete",
                                    fileUrl: e.fileUrl,
                                    fileName: e.fileName,
                                    contentType: e.contentType
                                },
                                permissionRecordOverride: e.permissionRecord,
                                showImagePreview: !0
                            }, e.id))
                        })]
                    }) : null, (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...$.contents
                            })
                        }), (0, s.jsx)("div", {
                            style: L.codeBlock,
                            children: !1 === c.found ? (0, s.jsx)(a().D, {
                                styleKey: "bodySmRegular",
                                colorVariant: "secondary",
                                children: (0, s.jsx)(r(109939).sA, { ...$.fileNotFound
                                })
                            }) : u ? (0, s.jsx)(r(140102).O, {
                                value: c.content,
                                language: "text"
                            }) : (0, s.jsx)(a().D, {
                                styleKey: "bodySmRegular",
                                colorVariant: "secondary",
                                children: (0, s.jsx)(r(109939).sA, { ...$.noContent
                                })
                            })
                        })]
                    })]
                })
            }
            let O = (0, r(109939).YK)({
                    command: {
                        id: "AgentCallFunctionComputerTerminalRenderer.command",
                        defaultMessage: "Command"
                    },
                    output: {
                        id: "AgentCallFunctionComputerTerminalRenderer.output",
                        defaultMessage: "Output"
                    },
                    emptyCommand: {
                        id: "AgentCallFunctionComputerTerminalRenderer.emptyCommand",
                        defaultMessage: "No command"
                    }
                }),
                U = {
                    codeBlock: {
                        borderRadius: 8,
                        padding: 12,
                        background: r(632079).Tj.gray.background.primary
                    }
                };

            function K(e) {
                let {
                    step: t
                } = e, i = (0, r(109939).tz)(), o = (0, n.useMemo)(() => q(t), [t]);
                if (!H(t)) return null;
                let l = o.command ? ? i.formatMessage(O.emptyCommand);
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 12,
                    children: [(0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...O.command
                            })
                        }), (0, s.jsx)("div", {
                            style: U.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: l,
                                language: "text"
                            })
                        })]
                    }), o.output ? (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...O.output
                            })
                        }), (0, s.jsx)("div", {
                            style: U.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: o.output,
                                language: "text"
                            })
                        })]
                    }) : null]
                })
            }

            function H(e) {
                let t = q(e);
                return void 0 !== t.command || void 0 !== t.output
            }

            function q(e) {
                var t;
                let r = function(e, t) {
                        if (!e || "object" != typeof e) return;
                        let r = Reflect.get(e, t);
                        if (!(!r || "object" != typeof r || Array.isArray(r))) return r
                    }(e.input, "args"),
                    n = G(r ? J(r, "command") : void 0),
                    a = G(null == (t = e.result) ? void 0 : t.output);
                if (!a) return {
                    command: n,
                    output: void 0
                };
                let i = function(e) {
                    try {
                        return JSON.parse(e)
                    } catch {
                        return
                    }
                }(a);
                return i ? {
                    command: n,
                    output: G(J(i, "output"))
                } : {
                    command: n,
                    output: a
                }
            }

            function G(e) {
                if ("string" == typeof e) return e.trim().length > 0 ? e : void 0
            }

            function J(e, t) {
                if (!e || "object" != typeof e) return;
                let r = Reflect.get(e, t);
                return "string" == typeof r ? r : void 0
            }
            let Y = (0, r(109939).YK)({
                    requestLabel: {
                        id: "ai.agent.callFunction.createAndRunThread.requestLabel",
                        defaultMessage: "Message"
                    },
                    responseLabel: {
                        id: "ai.agent.callFunction.createAndRunThread.responseLabel",
                        defaultMessage: "Response"
                    }
                }),
                Q = {
                    markdownContainer: {
                        padding: 10,
                        border: `1px solid ${r(632079).Tj.border.secondary}`,
                        borderRadius: 8
                    }
                };

            function X(e) {
                let {
                    step: t
                } = e, i = (0, n.useMemo)(() => {
                    var e;
                    return function(e, t) {
                        if (!(0, r(722371).Gv)(e)) return;
                        let n = Reflect.get(e, t);
                        return "string" == typeof n ? n : void 0
                    }(null == (e = t.input) ? void 0 : e.args, "instructions") ? ? ""
                }, [t]), o = (0, n.useMemo)(() => (function(e) {
                    var t;
                    let n = null == (t = e.result) ? void 0 : t.output;
                    if ("string" != typeof n) return "";
                    try {
                        let e = JSON.parse(n);
                        if (!(0, r(722371).Gv)(e)) return n;
                        let t = Reflect.get(e, "response");
                        return "string" == typeof t ? t : n
                    } catch {
                        return n
                    }
                })(t), [t]), l = o.trim().length > 0;
                return (0, s.jsx)(r(4458).VP, {
                    gap: 10,
                    children: (0, s.jsxs)(r(4458).VP, {
                        gap: 8,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...Y.requestLabel
                            })
                        }), (0, s.jsx)("div", {
                            style: Q.markdownContainer,
                            children: (0, s.jsx)(r(600327).c, {
                                clientStep: {
                                    type: "assistantChatText",
                                    inferenceId: `${t.id}-request`,
                                    text: i
                                }
                            })
                        }), l ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(a().D, {
                                styleKey: "bodySmMedium",
                                colorVariant: "secondary",
                                children: (0, s.jsx)(r(109939).sA, { ...Y.responseLabel
                                })
                            }), (0, s.jsx)("div", {
                                style: Q.markdownContainer,
                                children: (0, s.jsx)(r(600327).c, {
                                    clientStep: {
                                        type: "assistantChatText",
                                        inferenceId: `${t.id}-response`,
                                        text: o
                                    }
                                })
                            })]
                        }) : null]
                    })
                })
            }

            function Z(e) {
                let {
                    step: t
                } = e, a = (0, n.useMemo)(() => {
                    var e, n;
                    let a = null == (e = t.input) ? void 0 : e.args;
                    if ((0, r(722371).Gv)(a) && ("from" in a || "to" in a)) return (0, r(22157).bM)(a);
                    if ((0, r(722371).Gv)(a) && "toolArguments" in a) {
                        let e = a.toolArguments;
                        if ((0, r(722371).Gv)(e) && ("from" in e || "to" in e)) return (0, r(22157).bM)(e)
                    }
                    let i = null == (n = t.result) ? void 0 : n.emailPreview;
                    if ((0, r(722371).Gv)(i)) return (0, r(22157).bM)(i)
                }, [t.input, t.result]);
                return a ? (0, s.jsx)(r(861873).$, {
                    from: a.from,
                    to: a.to,
                    cc: a.cc,
                    bcc: a.bcc,
                    subject: a.subject,
                    text: a.text
                }) : null
            }
            let ee = {
                header: {
                    wordBreak: "break-word"
                },
                markdownContainer: {
                    padding: 10,
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    borderRadius: 8
                }
            };

            function et(e, t) {
                if (!(0, r(722371).Gv)(e)) return;
                let n = Reflect.get(e, t);
                return "string" == typeof n ? n : void 0
            }

            function er(e) {
                let {
                    step: t
                } = e, {
                    headerContent: i,
                    bodyContent: o
                } = (0, n.useMemo)(() => (function(e) {
                    var t;
                    let n = null == (t = e.input) ? void 0 : t.args,
                        a = et(n, "headerContent"),
                        i = et(n, "bodyContent");
                    if (a || i) return {
                        headerContent: a,
                        bodyContent: i
                    };
                    if ((0, r(722371).Gv)(n) && "toolArguments" in n) {
                        let e = n.toolArguments;
                        return {
                            headerContent: et(e, "headerContent"),
                            bodyContent: et(e, "bodyContent")
                        }
                    }
                    return {}
                })(t), [t]);
                return i || o ? (0, s.jsxs)(r(4458).VP, {
                    gap: 8,
                    children: [i ? (0, s.jsx)(a().D, {
                        styleKey: "bodySmMedium",
                        colorVariant: "secondary",
                        style: ee.header,
                        children: i
                    }) : null, o ? (0, s.jsx)("div", {
                        style: ee.markdownContainer,
                        children: (0, s.jsx)(r(212024).h, {
                            markdown: o
                        })
                    }) : null]
                }) : null
            }
            let en = (0, r(109939).YK)({
                    requestLabel: {
                        id: "ai.agent.callFunction.spawnSubagent.requestLabel",
                        defaultMessage: "Message"
                    },
                    responseLabel: {
                        id: "ai.agent.callFunction.spawnSubagent.responseLabel",
                        defaultMessage: "Response"
                    }
                }),
                ea = {
                    markdownContainer: {
                        padding: 10,
                        border: `1px solid ${r(632079).Tj.border.secondary}`,
                        borderRadius: 8
                    }
                };

            function ei(e) {
                let {
                    step: t
                } = e, i = (0, n.useMemo)(() => {
                    var e;
                    return function(e, t) {
                        if (!(0, r(722371).Gv)(e)) return;
                        let n = Reflect.get(e, t);
                        return "string" == typeof n ? n : void 0
                    }(null == (e = t.input) ? void 0 : e.args, "prompt") ? ? ""
                }, [t]), o = (0, n.useMemo)(() => (function(e) {
                    var t;
                    let n = null == (t = e.result) ? void 0 : t.output;
                    if ("string" != typeof n) return "";
                    try {
                        let e = JSON.parse(n);
                        if (!(0, r(722371).Gv)(e)) return n;
                        let t = Reflect.get(e, "response");
                        return "string" == typeof t ? t : n
                    } catch (e) {
                        return (0, r(222024).t)().error({
                            from: "AgentCallFunctionSpawnSubagentRenderer",
                            type: "parseSubagentResponseFailed",
                            error: e
                        }), n
                    }
                })(t), [t]), l = o.trim().length > 0;
                return (0, s.jsx)(r(4458).VP, {
                    gap: 10,
                    children: (0, s.jsxs)(r(4458).VP, {
                        gap: 8,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...en.requestLabel
                            })
                        }), (0, s.jsx)("div", {
                            style: ea.markdownContainer,
                            children: (0, s.jsx)(r(600327).c, {
                                clientStep: {
                                    type: "assistantChatText",
                                    inferenceId: `${t.id}-request`,
                                    text: i
                                }
                            })
                        }), l ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(a().D, {
                                styleKey: "bodySmMedium",
                                colorVariant: "secondary",
                                children: (0, s.jsx)(r(109939).sA, { ...en.responseLabel
                                })
                            }), (0, s.jsx)("div", {
                                style: ea.markdownContainer,
                                children: (0, s.jsx)(r(600327).c, {
                                    clientStep: {
                                        type: "assistantChatText",
                                        inferenceId: `${t.id}-response`,
                                        text: o
                                    }
                                })
                            })]
                        }) : null]
                    })
                })
            }
            let eo = (0, r(109939).YK)({
                    progress: {
                        id: "ai.agent.wideResearch.progress",
                        defaultMessage: "{completed} / {total} complete"
                    },
                    statusHeader: {
                        id: "ai.agent.wideResearch.header.status",
                        defaultMessage: "Status"
                    },
                    rowLabelHeader: {
                        id: "ai.agent.wideResearch.header.topic",
                        defaultMessage: "Topic"
                    },
                    statusQueued: {
                        id: "ai.agent.wideResearch.status.queued",
                        defaultMessage: "Queued"
                    },
                    statusRunning: {
                        id: "ai.agent.wideResearch.status.running",
                        defaultMessage: "Running"
                    },
                    statusCompleted: {
                        id: "ai.agent.wideResearch.status.completed",
                        defaultMessage: "Completed"
                    },
                    statusFailed: {
                        id: "ai.agent.wideResearch.status.failed",
                        defaultMessage: "Failed"
                    },
                    canceled: {
                        id: "ai.agent.wideResearch.canceled",
                        defaultMessage: "Canceled by user"
                    },
                    hoverCardTaskLabel: {
                        id: "ai.agent.wideResearch.hoverCard.taskLabel",
                        defaultMessage: "Task"
                    },
                    hoverCardFieldsLabel: {
                        id: "ai.agent.wideResearch.hoverCard.fieldsLabel",
                        defaultMessage: "Fields"
                    },
                    hoverCardOpenSubagentLink: {
                        id: "ai.agent.wideResearch.hoverCard.openSubagentLink",
                        defaultMessage: "View task"
                    },
                    hoverCardOpenSubagentLinkAria: {
                        id: "ai.agent.wideResearch.hoverCard.openSubagentLinkAria",
                        defaultMessage: "View task {taskName} in a new tab"
                    },
                    hoverCardEmptyFieldValue: {
                        id: "ai.agent.wideResearch.hoverCard.emptyFieldValue",
                        defaultMessage: "Not available"
                    }
                }),
                es = {
                    cellText: { ...r(699422).RC,
                        display: "block"
                    },
                    statusCellTrigger: {
                        display: "inline-flex",
                        maxWidth: "100%"
                    },
                    hoverCard: {
                        maxWidth: 360,
                        maxHeight: 280,
                        overflowY: "auto",
                        padding: "10px 12px",
                        boxShadow: r(632079).Tj.shadow.outline.lg
                    },
                    hoverCardSectionTitle: {
                        display: "block"
                    },
                    hoverCardTaskText: {
                        display: "block",
                        ...r(699422).RC
                    },
                    hoverCardFieldKey: {
                        display: "block"
                    },
                    hoverCardFieldValue: {
                        display: "block",
                        wordBreak: "break-word"
                    },
                    hoverCardLink: {
                        display: "inline-block",
                        color: r(632079).Tj.text.primary,
                        textDecoration: "underline"
                    },
                    canceledBanner: {
                        background: r(632079).Tj.background.secondary,
                        borderRadius: 6,
                        padding: "6px 8px"
                    }
                };

            function el(e) {
                let {
                    output: t,
                    showCanceled: i = !1
                } = e, o = (0, r(109939).tz)(), l = (0, n.useMemo)(() => t.rows.map(e => ({ ...e,
                    isClickable: !1,
                    values: ec(e.values)
                })), [t.rows]), c = (0, n.useMemo)(() => (function(e) {
                    let {
                        intl: t,
                        fields: n,
                        rowLabelHeader: i
                    } = e, o = i ? ? t.formatMessage(eo.rowLabelHeader), l = [{
                        id: "status",
                        headerTitle: (0, s.jsx)(r(109939).sA, { ...eo.statusHeader
                        }),
                        renderCell: e => (function(e) {
                            let {
                                row: t,
                                intl: n,
                                fields: i
                            } = e, o = function(e, t) {
                                switch (e) {
                                    case "queued":
                                        return t.formatMessage(eo.statusQueued);
                                    case "running":
                                        return t.formatMessage(eo.statusRunning);
                                    case "completed":
                                        return t.formatMessage(eo.statusCompleted);
                                    case "failed":
                                        return t.formatMessage(eo.statusFailed)
                                }
                            }(t.status, n), l = function(e) {
                                let {
                                    row: t,
                                    statusLabel: n
                                } = e;
                                return "running" === t.status ? (0, s.jsxs)(r(4458).fI, {
                                    gap: 6,
                                    alignItems: "center",
                                    children: [(0, s.jsx)(r(517334).k, {
                                        size: "sm"
                                    }), (0, s.jsx)(a().D, {
                                        styleKey: "bodySmRegular",
                                        children: n
                                    })]
                                }) : "completed" === t.status ? (0, s.jsxs)(r(4458).fI, {
                                    gap: 6,
                                    alignItems: "center",
                                    children: [(0, s.jsx)(r(16275).I, {
                                        icon: r(971730).checkmarkSmallIcon,
                                        size: "sm",
                                        label: n
                                    }), (0, s.jsx)(a().D, {
                                        styleKey: "bodySmRegular",
                                        children: n
                                    })]
                                }) : "failed" === t.status ? (0, s.jsxs)(r(4458).fI, {
                                    gap: 6,
                                    alignItems: "center",
                                    children: [(0, s.jsx)(r(16275).I, {
                                        icon: r(25094).xMarkSmallIcon,
                                        size: "sm",
                                        label: n
                                    }), (0, s.jsx)(a().D, {
                                        styleKey: "bodySmRegular",
                                        children: n
                                    })]
                                }) : (0, s.jsx)(r(4458).fI, {
                                    gap: 6,
                                    alignItems: "center",
                                    children: (0, s.jsx)(a().D, {
                                        styleKey: "bodySmRegular",
                                        children: n
                                    })
                                })
                            }({
                                row: t,
                                statusLabel: o
                            }), c = function(e) {
                                let t = function(e) {
                                    let t = (0, r(851062).Tn)(e);
                                    if (!(null != t && t.startsWith("thread://"))) return;
                                    let [, n] = t.slice(9).split("/");
                                    var a = n;
                                    if (!a) return;
                                    let i = a.trim();
                                    return 32 === i.length ? (0, r(4962).np)(i) : 36 === i.length ? i : void 0
                                }(e);
                                if (t) return (0, r(366367).X_)({
                                    name: "chat",
                                    configureOpenInDesktopApp: !1,
                                    openSettingsTab: void 0,
                                    peekMode: void 0,
                                    threadId: t,
                                    workflowViewType: "chat"
                                })
                            }(t.threadUrl);
                            return c ? (0, s.jsx)(r(51831).m, {
                                allowHover: !0,
                                alignment: "start",
                                isLightBackground: !0,
                                placement: "top",
                                style: es.hoverCard,
                                content: e => (0, s.jsx)("div", { ...e,
                                    children: (0, s.jsxs)(r(4458).VP, {
                                        gap: 10,
                                        children: [(0, s.jsxs)(r(4458).VP, {
                                            gap: 2,
                                            children: [(0, s.jsx)(a().D, {
                                                style: es.hoverCardSectionTitle,
                                                styleKey: "bodySmMedium",
                                                colorVariant: "secondary",
                                                children: (0, s.jsx)(r(109939).sA, { ...eo.hoverCardTaskLabel
                                                })
                                            }), (0, s.jsx)(a().D, {
                                                style: es.hoverCardTaskText,
                                                styleKey: "bodySmRegular",
                                                children: t.label
                                            })]
                                        }), (0, s.jsxs)(r(4458).VP, {
                                            gap: 4,
                                            children: [(0, s.jsx)(a().D, {
                                                style: es.hoverCardSectionTitle,
                                                styleKey: "bodySmMedium",
                                                colorVariant: "secondary",
                                                children: (0, s.jsx)(r(109939).sA, { ...eo.hoverCardFieldsLabel
                                                })
                                            }), i.map((e, n) => {
                                                let i = t.values[e.key],
                                                    o = e.label ? ? e.key,
                                                    l = "string" == typeof i && i.trim().length > 0;
                                                return (0, s.jsxs)(r(4458).fI, {
                                                    alignItems: "baseline",
                                                    gap: 8,
                                                    children: [(0, s.jsx)(a().D, {
                                                        style: es.hoverCardFieldKey,
                                                        styleKey: "bodySmMedium",
                                                        colorVariant: "secondary",
                                                        children: `${o}:`
                                                    }), (0, s.jsx)(a().D, {
                                                        style: es.hoverCardFieldValue,
                                                        styleKey: "bodySmRegular",
                                                        colorVariant: l ? void 0 : "tertiary",
                                                        children: l ? i : (0, s.jsx)(r(109939).sA, { ...eo.hoverCardEmptyFieldValue
                                                        })
                                                    })]
                                                }, `${e.key}-${n}`)
                                            })]
                                        }), (0, s.jsx)(r(68774).N, {
                                            "aria-label": n.formatMessage(eo.hoverCardOpenSubagentLinkAria, {
                                                taskName: t.label
                                            }),
                                            href: c,
                                            external: !0,
                                            style: es.hoverCardLink,
                                            children: (0, s.jsx)(a().D, {
                                                styleKey: "bodySmRegular",
                                                children: (0, s.jsx)(r(109939).sA, { ...eo.hoverCardOpenSubagentLink
                                                })
                                            })
                                        })]
                                    })
                                }),
                                children: e => (0, s.jsx)("div", {
                                    style: es.statusCellTrigger,
                                    ...e,
                                    children: l
                                })
                            }) : l
                        })({
                            row: e,
                            intl: t,
                            fields: n
                        }),
                        widthData: {
                            width: 120,
                            maxWidth: 140
                        },
                        sortable: !1
                    }, {
                        id: "label",
                        headerTitle: o,
                        renderCell: e => (0, s.jsx)(a().D, {
                            styleKey: "bodySmRegular",
                            style: es.cellText,
                            children: e.label
                        }),
                        widthData: {
                            width: 220,
                            maxWidth: 320
                        },
                        sortable: !1
                    }];
                    for (let [e, t] of n.entries()) l.push({
                        id: `field-${t.key}-${e}`,
                        headerTitle: t.label ? ? t.key,
                        renderCell: e => (0, s.jsx)(a().D, {
                            styleKey: "bodySmRegular",
                            style: es.cellText,
                            children: e.values[t.key] ? ? ""
                        }),
                        widthData: {
                            width: 220,
                            maxWidth: 360
                        },
                        sortable: !1
                    });
                    return l
                })({
                    intl: o,
                    fields: t.fields,
                    rowLabelHeader: t.rowLabelHeader
                }), [o, t.fields, t.rowLabelHeader]), d = (0, n.useMemo)(() => (0, r(474438).rC)({
                    columnRenderInfo: c,
                    containerMarginTop: 0
                }), [c]), u = l.length, p = l.filter(e => "completed" === e.status || "failed" === e.status).length;
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 8,
                    children: [i ? (0, s.jsx)("div", {
                        style: es.canceledBanner,
                        children: (0, s.jsx)(a().D, {
                            styleKey: "bodySmRegular",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eo.canceled
                            })
                        })
                    }) : null, (0, s.jsx)(a().D, {
                        styleKey: "bodySmRegular",
                        colorVariant: "secondary",
                        children: (0, s.jsx)(r(109939).sA, { ...eo.progress,
                            values: {
                                completed: p,
                                total: u
                            }
                        })
                    }), (0, s.jsx)(r(474438).WE, {
                        columnRenderInfo: c,
                        rows: l,
                        allowHorizontalScroll: !0,
                        setStickyHeaderColumn: !0,
                        setStickyHeaderRow: !0,
                        showRowBorders: !0,
                        styles: d,
                        hideHeaderRowPadding: !0,
                        renderNoRowsComponent: () => null
                    })]
                })
            }

            function ec(e) {
                if (!(0, r(722371).Gv)(e)) return {};
                let t = {};
                for (let [r, n] of Object.entries(e)) "string" == typeof n ? t[r] = n : null == n ? t[r] = "" : t[r] = JSON.stringify(n);
                return t
            }
            let ed = (0, r(109939).YK)({
                loading: {
                    id: "ai.agent.wideResearch.loadingTable",
                    defaultMessage: "Launching wide research…"
                }
            });

            function eu(e) {
                var t, n;
                let {
                    step: i
                } = e, o = function(e) {
                    if ("string" == typeof e && 0 !== e.trim().length) try {
                        return ep(JSON.parse(e))
                    } catch (e) {
                        (0, r(222024).t)().error({
                            from: "AgentCallFunctionWideResearchRenderer",
                            type: "parseWideResearchOutputFailed",
                            error: e
                        });
                        return
                    }
                }(null == (t = i.result) ? void 0 : t.output) ? ? ep(null == (n = i.input) ? void 0 : n.args);
                if (!o) return (0, s.jsxs)(r(4458).fI, {
                    gap: 6,
                    alignItems: "center",
                    paddingTop: 4,
                    paddingBottom: 4,
                    children: [(0, s.jsx)(r(517334).k, {
                        size: "sm"
                    }), (0, s.jsx)(a().D, {
                        styleKey: "bodySmRegular",
                        colorVariant: "secondary",
                        children: (0, s.jsx)(r(109939).sA, { ...ed.loading
                        })
                    })]
                });
                let l = "confirmation:rejected" === (0, r(426048).Gu)(i);
                return (0, s.jsx)(el, {
                    output: o,
                    showCanceled: l
                })
            }

            function ep(e) {
                var t, n;
                if (!(0, r(722371).Gv)(e)) return;
                let a = Array.isArray(t = e.fields) ? t.flatMap(e => {
                        if (!(0, r(722371).Gv)(e)) return [];
                        let t = e.key;
                        return "string" != typeof t || 0 === t.trim().length ? [] : [{
                            key: t,
                            label: "string" == typeof e.label ? e.label : void 0,
                            description: "string" == typeof e.description ? e.description : void 0
                        }]
                    }) : [],
                    i = Array.isArray(n = e.rows) ? n.flatMap((e, t) => {
                        if (!(0, r(722371).Gv)(e)) return [];
                        let n = e.label;
                        if ("string" != typeof n || 0 === n.trim().length) return [];
                        let a = "string" == typeof e.id && e.id.trim().length > 0 ? e.id : `row-${t}`,
                            i = function(e) {
                                switch (e) {
                                    case "queued":
                                    case "running":
                                    case "completed":
                                    case "failed":
                                        return e;
                                    default:
                                        return "queued"
                                }
                            }(e.status),
                            o = "number" == typeof e.rowNumber && Number.isFinite(e.rowNumber) ? e.rowNumber : t + 1,
                            s = ec(e.values);
                        return [{
                            id: a,
                            rowNumber: o,
                            label: n,
                            status: i,
                            values: s,
                            error: "string" == typeof e.error ? e.error : void 0,
                            threadUrl: "string" == typeof e.threadUrl ? e.threadUrl : void 0
                        }]
                    }) : [];
                if (0 !== a.length && 0 !== i.length) return {
                    rowLabelHeader: "string" == typeof e.rowLabelHeader ? e.rowLabelHeader : void 0,
                    rowCount: "number" == typeof e.rowCount && Number.isFinite(e.rowCount) ? e.rowCount : i.length,
                    fields: a,
                    rows: i
                }
            }
            let eg = (0, r(109939).YK)({
                    input: {
                        id: "AgentScriptToolVisualizer.input",
                        defaultMessage: "Input"
                    },
                    output: {
                        id: "AgentScriptToolVisualizer.output",
                        defaultMessage: "Output"
                    },
                    attachments: {
                        id: "AgentScriptToolVisualizer.attachments",
                        defaultMessage: "Attachments"
                    },
                    attachmentLoadError: {
                        id: "AgentScriptToolVisualizer.attachmentLoadError",
                        defaultMessage: "Unable to load attachment image"
                    },
                    attachmentMissingPermissionRecord: {
                        id: "AgentScriptToolVisualizer.attachmentMissingPermissionRecord",
                        defaultMessage: "Unable to display attachment image"
                    }
                }),
                ef = {
                    container: {
                        width: "100%",
                        maxWidth: 300,
                        borderRadius: 12,
                        overflow: "hidden",
                        border: `1px solid ${r(632079).Tj.border.secondary}`
                    },
                    error: {
                        padding: 12
                    },
                    image: {
                        display: "block",
                        width: "100%",
                        cursor: "zoom-in"
                    }
                };

            function em(e) {
                let {
                    attachment: t
                } = e, i = (0, r(533992).v3)(), o = (0, n.useRef)(null), [l, c] = (0, n.useState)(!1), [d] = (0, r(97668).Yb)(async () => {
                    if (!t.permissionRecord) return;
                    let e = {
                            url: t.fileUrl,
                            download: !1,
                            downloadName: t.fileName,
                            permissionRecord: t.permissionRecord
                        },
                        r = t.permissionRecord.spaceId ? await i.api.callCellCompatibleApi({
                            eventName: "getSignedFileUrls",
                            environment: i,
                            data: {
                                urls: [e]
                            },
                            cellNavigation: {
                                spaceId: t.permissionRecord.spaceId
                            }
                        }) : await i.api.callApi({
                            eventName: "getSignedFileUrls",
                            environment: i,
                            data: {
                                urls: [e]
                            }
                        });
                    if ("failed" === r.type) throw r.error;
                    return r.data.signedUrls[0]
                }, [t.fileUrl, t.fileName, t.permissionRecord, i]), u = d.value, p = (0, n.useCallback)(() => {
                    var e;
                    if (!u) return;
                    let t = null == (e = o.current) ? void 0 : e.getImageDimensions();
                    t && r(515260).o9({
                        environment: i,
                        renderFullScreenNode: () => (0, s.jsx)(r(408873).F, {
                            url: u,
                            error: void 0,
                            imageNaturalHeight: t.naturalHeight,
                            imageNaturalWidth: t.naturalWidth
                        }),
                        fullScreenNodeRect: t.clientRect,
                        contentAspectRatio: t.naturalWidth / Math.max(t.naturalHeight, 1)
                    })
                }, [i, u]);
                return t.permissionRecord ? "pending" === d.status || "idle" === d.status ? (0, s.jsx)("div", {
                    style: ef.container,
                    children: (0, s.jsx)("div", {
                        style: ef.error,
                        children: (0, s.jsx)(r(517334).k, {
                            size: "sm"
                        })
                    })
                }) : "rejected" === d.status || l || !u ? (0, s.jsx)("div", {
                    style: ef.container,
                    children: (0, s.jsx)("div", {
                        style: ef.error,
                        children: (0, s.jsx)(a().D, {
                            styleKey: "captionRegular",
                            colorVariant: "tertiary",
                            children: (0, s.jsx)(r(109939).sA, { ...eg.attachmentLoadError
                            })
                        })
                    })
                }) : (0, s.jsx)("div", {
                    style: ef.container,
                    children: (0, s.jsx)(r(989059).A, {
                        src: u,
                        ref: o,
                        onClick: p,
                        style: ef.image,
                        placeholderStyle: ef.image,
                        alt: t.fileName,
                        onError: () => c(!0)
                    })
                }) : (0, s.jsx)("div", {
                    style: ef.container,
                    children: (0, s.jsx)("div", {
                        style: ef.error,
                        children: (0, s.jsx)(a().D, {
                            styleKey: "captionRegular",
                            colorVariant: "tertiary",
                            children: (0, s.jsx)(r(109939).sA, { ...eg.attachmentMissingPermissionRecord
                            })
                        })
                    })
                })
            }
            let eh = {
                    codeBlock: {
                        borderRadius: 8,
                        padding: 12,
                        background: r(632079).Tj.gray.background.primary
                    },
                    functionName: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    },
                    style0: {
                        position: "relative",
                        flexWrap: "wrap"
                    }
                },
                ey = {
                    "connections.computer.terminal": {
                        component: K,
                        shouldRender: H
                    },
                    "computer.terminal": {
                        component: K,
                        shouldRender: H
                    },
                    "connections.computer.browser": {
                        component: z
                    },
                    "computer.browser": {
                        component: z
                    },
                    "connections.notion.createAndRunThread": {
                        component: X
                    },
                    "notion.createAndRunThread": {
                        component: X
                    },
                    "connections.notion.spawnSubagent": {
                        component: ei
                    },
                    "notion.spawnSubagent": {
                        component: ei
                    },
                    "connections.notion.wideResearch": {
                        component: eu
                    },
                    "notion.wideResearch": {
                        component: eu
                    },
                    "connections.mail.sendNewEmail": {
                        component: Z
                    },
                    "mail.sendNewEmail": {
                        component: Z
                    },
                    "connections.mail.createOrUpdateDraft": {
                        component: Z
                    },
                    "mail.createOrUpdateDraft": {
                        component: Z
                    },
                    "connections.mail.createOrUpdateGmailDraft": {
                        component: Z
                    },
                    "mail.createOrUpdateGmailDraft": {
                        component: Z
                    },
                    "connections.mail.createOrUpdateOutlookDraft": {
                        component: Z
                    },
                    "mail.createOrUpdateOutlookDraft": {
                        component: Z
                    },
                    "connections.mail.sendExistingDraft": {
                        component: Z
                    },
                    "mail.sendExistingDraft": {
                        component: Z
                    },
                    "connections.calendar.createEvents": {
                        component: M
                    },
                    "calendar.createEvents": {
                        component: M
                    },
                    "connections.calendar.updateEvents": {
                        component: D
                    },
                    "calendar.updateEvents": {
                        component: D
                    },
                    "connections.calendar.listEvents": {
                        component: V
                    },
                    "calendar.listEvents": {
                        component: V
                    },
                    "connections.calendar.listCoworkersEvents": {
                        component: R
                    },
                    "calendar.listCoworkersEvents": {
                        component: R
                    },
                    "connections.notion.sendNotification": {
                        component: er
                    },
                    "notion.sendNotification": {
                        component: er
                    },
                    "connections.computer.downloadFile": {
                        component: ex
                    },
                    "computer.downloadFile": {
                        component: ex
                    },
                    "connections.computer.readFile": {
                        component: _
                    },
                    "computer.readFile": {
                        component: _
                    },
                    "connections.computer.uploadFile": {
                        component: ex
                    },
                    "computer.uploadFile": {
                        component: ex
                    },
                    "connections.boxy.createBox": {
                        component: ex
                    },
                    "connections.boxy.getBox": {
                        component: ex
                    },
                    "connections.boxy.sendBoxThread": {
                        component: T
                    },
                    "connections.boxy.streamMessageToThread": {
                        component: T
                    }
                };

            function ex(e) {
                var t, i, o;
                let {
                    step: l
                } = e, c = l.result, d = !!l.error, u = ("string" == typeof(null == (t = l.input) ? void 0 : t.function) && l.input.function.length > 0 ? l.input.function : void 0) ? ? "Unknown function", p = (0, n.useMemo)(() => JSON.stringify(l.input ? ? {}, null, 2), [l.input]), g = (0, n.useMemo)(() => {
                    if (l.error) return `Error: ${l.error}`;
                    if (!c) return "No output";
                    if (void 0 !== c.output) try {
                        return JSON.stringify(JSON.parse(c.output), null, 2)
                    } catch (e) {
                        if (e instanceof SyntaxError) return c.output;
                        throw e
                    }
                    return "No output"
                }, [c, l.error]), f = (null == (i = l.result) ? void 0 : i.attachments) ? ? (null == (o = l.renderedResult) ? void 0 : o.attachments) ? ? [];
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 12,
                    children: [(0, s.jsx)(a().D, {
                        styleKey: "bodySmRegular",
                        colorVariant: "primary",
                        style: eh.functionName,
                        children: u
                    }), f.length > 0 ? (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eg.attachments
                            })
                        }), (0, s.jsx)(r(4458).fI, {
                            gap: 8,
                            style: eh.style0,
                            alignItems: "center",
                            className: "autolayout-row",
                            children: f.map(e => (0, r(180139).tT)(e.contentType) ? (0, s.jsx)(em, {
                                attachment: e
                            }, e.id) : (0, s.jsx)(r(315148).kp, {
                                uploadProgress: {
                                    status: "complete",
                                    fileUrl: e.fileUrl,
                                    fileName: e.fileName,
                                    contentType: e.contentType
                                },
                                permissionRecordOverride: e.permissionRecord,
                                showImagePreview: !0
                            }, e.id))
                        })]
                    }) : null, (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eg.input
                            })
                        }), (0, s.jsx)("div", {
                            style: eh.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: p,
                                language: "json"
                            })
                        })]
                    }), (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eg.output
                            })
                        }), (0, s.jsx)("div", {
                            style: eh.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: g,
                                language: d ? "text" : "json"
                            })
                        })]
                    })]
                })
            }
            let ev = (0, r(109939).YK)({
                    input: {
                        id: "AgentClientToolVisualizer.input",
                        defaultMessage: "Input"
                    },
                    output: {
                        id: "AgentClientToolVisualizer.output",
                        defaultMessage: "Output"
                    }
                }),
                eb = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        padding: 12
                    },
                    section: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4
                    },
                    codeBlock: {
                        borderRadius: 8,
                        padding: 12,
                        background: r(632079).Tj.gray.background.primary,
                        maxHeight: 200,
                        overflow: "auto"
                    }
                };

            function ej(e) {
                var t, i;
                let {
                    step: o
                } = e, l = (0, n.useMemo)(() => {
                    var e;
                    let t = null == (e = o.input) ? void 0 : e.rawInput;
                    if (void 0 !== t) try {
                        return JSON.stringify(t, null, 2)
                    } catch (e) {
                        if (!(e instanceof TypeError)) throw e;
                        return String(t)
                    }
                }, [null == (t = o.input) ? void 0 : t.rawInput]), c = (0, n.useMemo)(() => {
                    var e;
                    let t = null == (e = o.result) ? void 0 : e.rawOutput;
                    if (void 0 !== t) try {
                        return JSON.stringify(t, null, 2)
                    } catch (e) {
                        if (!(e instanceof TypeError)) throw e;
                        return String(t)
                    }
                }, [null == (i = o.result) ? void 0 : i.rawOutput]);
                return l || c ? (0, s.jsxs)("div", {
                    style: eb.container,
                    children: [l ? (0, s.jsxs)("div", {
                        style: eb.section,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...ev.input
                            })
                        }), (0, s.jsx)("div", {
                            style: eb.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: l,
                                language: "json"
                            })
                        })]
                    }) : null, c ? (0, s.jsxs)("div", {
                        style: eb.section,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...ev.output
                            })
                        }), (0, s.jsx)("div", {
                            style: eb.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: c,
                                language: "json"
                            })
                        })]
                    }) : null]
                }) : null
            }
            let eS = {
                actionIcon: {
                    flexShrink: 0,
                    marginTop: 2
                },
                actionText: {
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word"
                },
                actionMeta: {
                    marginTop: 2
                },
                resultBlock: {
                    padding: 12,
                    borderRadius: 8,
                    background: r(632079).Tj.gray.background.primary
                }
            };

            function ek(e) {
                var t;
                let {
                    step: i
                } = e, o = (0, n.useMemo)(() => {
                    let e = eI(i.input, "actions");
                    if (!e) return [];
                    let t = [];
                    for (let r of e) {
                        let e = m(r);
                        e && t.push(e)
                    }
                    return t
                }, [i.input]), l = (0, n.useMemo)(() => o.map((e, t) => o.slice(0, t).reduce((e, t) => e + +("screenshot" === t.action), 0)), [o]), c = (0, n.useMemo)(() => {
                    var e, t;
                    return [...eI(i.result, "attachments") ? ? [], ...(Array.isArray(null == (e = i.renderedResult) ? void 0 : e.attachments) ? null == (t = i.renderedResult) ? void 0 : t.attachments : void 0) ? ? []]
                }, [null == (t = i.renderedResult) ? void 0 : t.attachments, i.result]), d = (0, n.useMemo)(() => o.map((e, t) => {
                    let n, {
                        title: i,
                        detail: o
                    } = h(e);
                    if ("screenshot" === e.action) {
                        let e = function(e) {
                            if (!e || "object" != typeof e) return;
                            let t = Reflect.get(e, "fileUrl");
                            if ("string" == typeof t) return {
                                fileUrl: t,
                                permissionRecord: v(Reflect.get(e, "permissionRecord"))
                            }
                        }(c[l[t]]);
                        e && (n = (0, s.jsx)(p, { ...e
                        }))
                    }
                    return (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsxs)(r(4458).fI, {
                            alignItems: "flex-start",
                            gap: 10,
                            children: [(0, s.jsx)(r(16275).I, {
                                icon: y(e),
                                size: "sm",
                                colorVariant: "secondary",
                                style: eS.actionIcon
                            }), (0, s.jsxs)("div", {
                                style: eS.actionText,
                                children: [(0, s.jsx)(a().D, {
                                    styleKey: "bodySmMedium",
                                    colorVariant: "secondary",
                                    children: i
                                }), o ? (0, s.jsx)(a().D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "tertiary",
                                    style: eS.actionMeta,
                                    children: o
                                }) : null]
                            })]
                        }), n]
                    }, `${t}-${i}-${o??""}`)
                }), [o, c, l]), u = (0, n.useMemo)(() => (function(e) {
                    if (!e || "object" != typeof e) return e;
                    let t = Reflect.get(e, "result");
                    return t && "object" == typeof t ? t : e
                })(i.result), [i.result]), g = ew(u, "text") ? ? "", f = ew(u, "error") ? ? "";
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 12,
                    children: [d.length > 0 ? (0, s.jsx)(r(4458).VP, {
                        gap: 10,
                        children: d
                    }) : null, g ? (0, s.jsx)("div", {
                        style: eS.resultBlock,
                        children: (0, s.jsx)(a().D, {
                            styleKey: "bodyRegular",
                            colorVariant: "primary",
                            children: g
                        })
                    }) : null, f ? (0, s.jsx)("div", {
                        style: eS.resultBlock,
                        children: (0, s.jsx)(a().D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: f
                        })
                    }) : null]
                })
            }

            function eI(e, t) {
                if (!e || "object" != typeof e) return;
                let r = Reflect.get(e, t);
                return Array.isArray(r) ? r : void 0
            }

            function ew(e, t) {
                if (!e || "object" != typeof e) return;
                let r = Reflect.get(e, t);
                return "string" == typeof r ? r : void 0
            }
            let eT = (0, r(109939).YK)({
                    command: {
                        id: "AgentComputerTerminalToolVisualizer.command",
                        defaultMessage: "Command"
                    },
                    output: {
                        id: "AgentComputerTerminalToolVisualizer.output",
                        defaultMessage: "Output"
                    },
                    emptyCommand: {
                        id: "AgentComputerTerminalToolVisualizer.emptyCommand",
                        defaultMessage: "No command"
                    }
                }),
                eC = {
                    codeBlock: {
                        borderRadius: 8,
                        padding: 12,
                        background: r(632079).Tj.gray.background.primary
                    }
                };

            function eM(e) {
                let {
                    step: t
                } = e, i = (0, r(109939).tz)(), o = (0, n.useMemo)(() => eA(t.result), [t.result]), l = (0, n.useMemo)(() => eP(eR(t.input, "command")), [t.input]), c = (0, n.useMemo)(() => eP(eR(o, "output")), [o]);
                return l || c ? (0, s.jsxs)(r(4458).VP, {
                    gap: 12,
                    children: [(0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eT.command
                            })
                        }), (0, s.jsx)("div", {
                            style: eC.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: l ? ? i.formatMessage(eT.emptyCommand),
                                language: "text"
                            })
                        })]
                    }), c ? (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eT.output
                            })
                        }), (0, s.jsx)("div", {
                            style: eC.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: c,
                                language: "text"
                            })
                        })]
                    }) : null]
                }) : null
            }

            function eA(e) {
                if (!e || "object" != typeof e) return e;
                let t = Reflect.get(e, "result");
                return t && "object" == typeof t ? t : e
            }

            function eR(e, t) {
                if (!e || "object" != typeof e) return;
                let r = Reflect.get(e, t);
                return "string" == typeof r ? r : void 0
            }

            function eP(e) {
                if ("string" == typeof e) return e.trim().length > 0 ? e : void 0
            }
            let eN = r(969475).record(r(969475).string(), r(969475).union([r(969475).object({
                    required: {
                        id: r(969475).string(),
                        isUser: r(969475).literal(!1),
                        searchSourceType: r(969475).literal("notion")
                    },
                    optional: {
                        cohereRelevanceScoreForRanking: r(969475).number(),
                        isPrimarySource: r(969475).boolean(),
                        score: r(969475).number()
                    }
                }), r(969475).object({
                    required: {
                        id: r(969475).string(),
                        isUser: r(969475).literal(!0),
                        searchSourceType: r(969475).literal("notion")
                    },
                    optional: {
                        cohereRelevanceScoreForRanking: r(969475).number(),
                        isPrimarySource: r(969475).boolean(),
                        score: r(969475).number()
                    }
                }), r(969475).object({
                    required: {
                        id: r(969475).string(),
                        lastEdited: r(969475).string(),
                        objectType: r(969475).string(),
                        path: r(969475).string(),
                        searchSourceType: r(969475).literal("salesforce"),
                        title: r(969475).string()
                    },
                    optional: {
                        cohereRelevanceScoreForRanking: r(969475).number(),
                        isPrimarySource: r(969475).boolean(),
                        score: r(969475).number()
                    }
                }), r(969475).object({
                    required: {
                        id: r(969475).string(),
                        lastEdited: r(969475).string(),
                        path: r(969475).string(),
                        searchSourceType: r(969475).literal("gmail"),
                        title: r(969475).string()
                    },
                    optional: {
                        cohereRelevanceScoreForRanking: r(969475).number(),
                        isPrimarySource: r(969475).boolean(),
                        score: r(969475).number()
                    }
                }), r(969475).object({
                    required: {
                        id: r(969475).string(),
                        lastEdited: r(969475).string(),
                        path: r(969475).string(),
                        searchSourceType: r(969475).literals("asana", "box", "confluence", "custom", "discord", "github", "google-calendar", "google-drive", "helpdoc-section", "helpdocs", "jira", "linear", "microsoft-teams", "notion-calendar", "notion-mail", "outlook", "sharepoint"),
                        title: r(969475).string()
                    },
                    optional: {
                        cohereRelevanceScoreForRanking: r(969475).number(),
                        isPrimarySource: r(969475).boolean(),
                        score: r(969475).number()
                    }
                }), r(969475).object({
                    required: {
                        id: r(969475).string(),
                        lastEdited: r(969475).string(),
                        searchSourceType: r(969475).literal("slack"),
                        text: r(969475).string(),
                        title: r(969475).string()
                    },
                    optional: {
                        channel: r(969475).string(),
                        cohereRelevanceScoreForRanking: r(969475).number(),
                        isPrimarySource: r(969475).boolean(),
                        score: r(969475).number()
                    }
                }), r(969475).object({
                    required: {
                        id: r(969475).string(),
                        lastEdited: r(969475).string(),
                        searchSourceType: r(969475).literal("webpage"),
                        title: r(969475).string()
                    },
                    optional: {
                        cohereRelevanceScoreForRanking: r(969475).number(),
                        isPrimarySource: r(969475).boolean(),
                        score: r(969475).number()
                    }
                })])),
                eF = (0, r(109939).YK)({
                    script: {
                        id: "AgentNotionScriptToolVisualizer.script",
                        defaultMessage: "Script"
                    },
                    output: {
                        id: "AgentNotionScriptToolVisualizer.output",
                        defaultMessage: "Output"
                    }
                }),
                eV = {
                    codeBlock: {
                        borderRadius: 8,
                        padding: 12,
                        background: r(632079).Tj.gray.background.primary
                    }
                };

            function eB(e) {
                var t;
                let {
                    step: i
                } = e, o = (null == (t = i.input) ? void 0 : t.code) ? ? "", l = i.result, c = (0, n.useMemo)(() => {
                    if (!l) return "No output";
                    let e = l.typecheckErrors ? ? [],
                        t = l.runtimeError,
                        r = l.logs ? ? [],
                        n = [],
                        a = t || e.length > 0 ? "Error" : "Success";
                    if (n.push(`Status: ${a}`), t || e.length > 0) {
                        let r = [];
                        t && r.push(t), r.push(...e), n.push("Error:"), n.push(...r)
                    }
                    return n.push("Logs:"), 0 === r.length ? n.push("(none)") : n.push(...r), n.join("\n")
                }, [l]);
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 12,
                    children: [(0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eF.script
                            })
                        }), (0, s.jsx)("div", {
                            style: eV.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: o,
                                language: "typescript"
                            })
                        })]
                    }), (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eF.output
                            })
                        }), (0, s.jsx)("div", {
                            style: eV.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: c,
                                language: "text"
                            })
                        })]
                    })]
                })
            }
            let eD = (0, r(109939).YK)({
                    attachments: {
                        id: "AgentReadFileToolVisualizer.attachments",
                        defaultMessage: "Attachments"
                    },
                    contents: {
                        id: "AgentReadFileToolVisualizer.contents",
                        defaultMessage: "Contents"
                    },
                    fileNotFound: {
                        id: "AgentReadFileToolVisualizer.fileNotFound",
                        defaultMessage: "File not found"
                    },
                    noContent: {
                        id: "AgentReadFileToolVisualizer.noContent",
                        defaultMessage: "No file contents returned"
                    }
                }),
                eE = {
                    attachmentsRow: {
                        position: "relative",
                        flexWrap: "wrap"
                    },
                    codeBlock: {
                        borderRadius: 8,
                        padding: 12,
                        background: r(632079).Tj.gray.background.primary
                    }
                };

            function ez(e) {
                let {
                    attachments: t,
                    content: n,
                    found: i
                } = e, o = "string" == typeof n && n.length > 0;
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 12,
                    children: [t.length > 0 ? (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eD.attachments
                            })
                        }), (0, s.jsx)(r(4458).fI, {
                            gap: 8,
                            style: eE.attachmentsRow,
                            alignItems: "center",
                            className: "autolayout-row",
                            children: t.map(e => (0, s.jsx)(r(315148).kp, {
                                uploadProgress: {
                                    status: "complete",
                                    fileUrl: e.fileUrl,
                                    fileName: e.fileName,
                                    contentType: e.contentType
                                },
                                permissionRecordOverride: e.permissionRecord,
                                showImagePreview: !0
                            }, e.id))
                        })]
                    }) : null, (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eD.contents
                            })
                        }), (0, s.jsx)("div", {
                            style: eE.codeBlock,
                            children: !1 === i ? (0, s.jsx)(a().D, {
                                styleKey: "bodySmRegular",
                                colorVariant: "secondary",
                                children: (0, s.jsx)(r(109939).sA, { ...eD.fileNotFound
                                })
                            }) : o ? (0, s.jsx)(r(140102).O, {
                                value: n,
                                language: "text"
                            }) : (0, s.jsx)(a().D, {
                                styleKey: "bodySmRegular",
                                colorVariant: "secondary",
                                children: (0, s.jsx)(r(109939).sA, { ...eD.noContent
                                })
                            })
                        })]
                    })]
                })
            }

            function eW(e) {
                var t;
                let {
                    step: r
                } = e, a = (0, n.useMemo)(() => {
                    var e, t, n;
                    return (e = r.result) ? "content" in e ? {
                        found: e.found,
                        content: e.content,
                        attachments: []
                    } : {
                        found: null == (t = e.result) ? void 0 : t.found,
                        content: null == (n = e.result) ? void 0 : n.content,
                        attachments: e.attachments ? ? []
                    } : {
                        attachments: []
                    }
                }, [r.result]), i = a.attachments.length > 0 ? a.attachments : (null == (t = r.renderedResult) ? void 0 : t.attachments) ? ? [];
                return (0, s.jsx)(ez, {
                    attachments: i,
                    content: a.content,
                    found: a.found
                })
            }
            let e$ = (0, r(109939).YK)({
                    command: {
                        id: "AgentTerminalToolVisualizer.command",
                        defaultMessage: "Command"
                    },
                    output: {
                        id: "AgentTerminalToolVisualizer.output",
                        defaultMessage: "Output"
                    },
                    emptyCommand: {
                        id: "AgentTerminalToolVisualizer.emptyCommand",
                        defaultMessage: "No command"
                    }
                }),
                eL = {
                    codeBlock: {
                        borderRadius: 8,
                        padding: 12,
                        background: r(632079).Tj.gray.background.primary
                    }
                };

            function e_(e) {
                var t, n;
                let {
                    step: i
                } = e, o = (0, r(109939).tz)(), l = eO(null == (t = i.input) ? void 0 : t.command), c = eO(null == (n = i.result) ? void 0 : n.output);
                if (!l && !c) return null;
                let d = void 0 !== l ? l : o.formatMessage(e$.emptyCommand);
                return (0, s.jsxs)(r(4458).VP, {
                    gap: 12,
                    children: [(0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...e$.command
                            })
                        }), (0, s.jsx)("div", {
                            style: eL.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: d,
                                language: "text"
                            })
                        })]
                    }), c ? (0, s.jsxs)(r(4458).VP, {
                        gap: 6,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "bodySmMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...e$.output
                            })
                        }), (0, s.jsx)("div", {
                            style: eL.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: c,
                                language: "text"
                            })
                        })]
                    }) : null]
                })
            }

            function eO(e) {
                if ("string" == typeof e) return e.trim().length > 0 ? e : void 0
            }
            let eU = (0, r(109939).YK)({
                    input: {
                        id: "ExternalAgentClientToolVisualizer.input",
                        defaultMessage: "Input"
                    },
                    output: {
                        id: "ExternalAgentClientToolVisualizer.output",
                        defaultMessage: "Output"
                    }
                }),
                eK = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        padding: 12
                    },
                    section: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4
                    },
                    codeBlock: {
                        borderRadius: 8,
                        padding: 12,
                        background: r(632079).Tj.gray.background.primary,
                        maxHeight: 200,
                        overflow: "auto"
                    }
                };

            function eH(e) {
                var t, i;
                let {
                    step: o
                } = e, l = (0, n.useMemo)(() => {
                    var e;
                    let t = null == (e = o.input) ? void 0 : e.rawInput;
                    if (void 0 !== t) try {
                        return JSON.stringify(t, null, 2)
                    } catch (e) {
                        if (!(e instanceof TypeError)) throw e;
                        return String(t)
                    }
                }, [null == (t = o.input) ? void 0 : t.rawInput]), c = (0, n.useMemo)(() => {
                    var e;
                    let t = null == (e = o.result) ? void 0 : e.rawOutput;
                    if (void 0 !== t) try {
                        return JSON.stringify(t, null, 2)
                    } catch (e) {
                        if (!(e instanceof TypeError)) throw e;
                        return String(t)
                    }
                }, [null == (i = o.result) ? void 0 : i.rawOutput]);
                return l || c ? (0, s.jsxs)("div", {
                    style: eK.container,
                    children: [l ? (0, s.jsxs)("div", {
                        style: eK.section,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eU.input
                            })
                        }), (0, s.jsx)("div", {
                            style: eK.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: l,
                                language: "json"
                            })
                        })]
                    }) : null, c ? (0, s.jsxs)("div", {
                        style: eK.section,
                        children: [(0, s.jsx)(a().D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(r(109939).sA, { ...eU.output
                            })
                        }), (0, s.jsx)("div", {
                            style: eK.codeBlock,
                            children: (0, s.jsx)(r(140102).O, {
                                value: c,
                                language: "json"
                            })
                        })]
                    }) : null]
                }) : null
            }
            let eq = (0, r(109939).YK)({
                statusSuccess: {
                    id: "agentInference.status.success",
                    defaultMessage: "Successfully finished task"
                },
                statusFailed: {
                    id: "agentInference.status.failed",
                    defaultMessage: "Failed to finish task"
                },
                improveAgentButton: {
                    id: "agentInference.improveAgent.button",
                    defaultMessage: "Improve this agent"
                },
                fixAgentButton: {
                    id: "agentInference.fixAgent.button",
                    defaultMessage: "Fix this agent"
                }
            });

            function eG(e) {
                let {
                    bodyStyleKey: t
                } = (0, r(765846).yq)(), n = (0, r(765846).Cd)(t);
                return (0, s.jsx)(r(324489).V, {
                    isSecondaryColor: !0,
                    style: n,
                    children: (0, s.jsx)(r(212024).h, {
                        markdown: e.markdown
                    })
                })
            }
            let eJ = {
                    height: 24,
                    display: "flex",
                    alignItems: "center"
                },
                eY = {
                    marginTop: 0,
                    minWidth: "initial",
                    minHeight: "initial"
                },
                eQ = {
                    padding: 0
                },
                eX = {
                    marginTop: 8
                },
                eZ = {
                    paddingTop: 16
                };

            function e0(e) {
                let {
                    bodyStyleKey: t
                } = (0, r(765846).yq)(), n = (0, r(765846).Cd)(t);
                return (0, s.jsx)(r(324489).V, {
                    isSecondaryColor: !0,
                    style: { ...eJ,
                        ...n
                    },
                    children: e.children
                })
            }

            function e1(e) {
                let t = "<lang ",
                    r = /<lang[^>]*\/?>/i,
                    n = e.replace(/\{\{([^{}]+)\}\}/g, (e, t) => {
                        let r = t.match(/^\[prefix=([^\]]+)\](.+)$/);
                        return r ? r[2] : t
                    }).split(/\n\n\n+/),
                    a = [],
                    i = "";
                for (let e = 0; e < n.length; e++) {
                    let o = i + n[e].trim();
                    if (i = "", o.startsWith(t) || t.startsWith(o))
                        if (o.match(r)) {
                            let e = o.replace(r, "").trim();
                            e && a.push(e)
                        } else i = o;
                    else o && a.push(o)
                }
                return {
                    processedParts: a,
                    buffer: i
                }
            }

            function e5(e) {
                let {
                    step: t,
                    toolResultsForStep: n,
                    threadStore: a,
                    runningInference: i,
                    queryGenStepMapToSearchCallId: o,
                    showDebug: s
                } = e;
                if ("string" == typeof t.value && t.value.includes("__databaseAgentSetup")) try {
                    if (JSON.parse(t.value).__databaseAgentSetup) return [{
                        type: "database-agent-setup",
                        isFinished: !0,
                        key: `database-agent-setup-${t.id}`,
                        step: t
                    }]
                } catch (e) {}
                if ("string" == typeof t.value && t.value.includes("__databaseAgentRunning")) try {
                    if (JSON.parse(t.value).__databaseAgentRunning) return [{
                        type: "database-agent-running",
                        key: `database-agent-running-${t.id}`,
                        step: t,
                        isFinished: !0
                    }]
                } catch (e) {}
                let l = [...(t.previousAttemptValues ? ? []).flatMap(r(258024).lH).filter(e => "tool_use" !== e.type), ...(0, r(258024).lH)(t.value)],
                    c = [],
                    d = function(e) {
                        let {
                            threadStore: t
                        } = e, n = t.getMessageStores().map(e => e.getStep()).filter(r(722371).O9), a = (0, r(68118).Ps)({
                            transcript: n,
                            domainBaseUrl: r(986939).A.domainBaseUrl
                        }), i = function(e) {
                            let {
                                transcript: t
                            } = e, n = {};
                            return t.map(e => {
                                if ((null == e ? void 0 : e.type) === "agent-tool-result" && (e.result && "object" == typeof e.result && "citationContext" in e.result && Object.assign(n, e.result.citationContext), e.result && "object" == typeof e.result && "output" in e.result && "string" == typeof e.result.output)) try {
                                    let t = JSON.parse(e.result.output);
                                    t && "object" == typeof t && "citationContext" in t && (0, r(358519).Xj)(eN, t.citationContext) && (n = { ...n,
                                        ...t.citationContext
                                    })
                                } catch {}
                            }), n
                        }({
                            transcript: n
                        });
                        return { ...a,
                            ...i
                        }
                    }({
                        threadStore: a
                    }),
                    u = function({
                        chunks: e,
                        toolResultsForStep: t
                    }) {
                        let r = [];
                        for (let n = 0; n < e.length; n++) {
                            let a = e[n];
                            if ("thinking" === a.type) a.content.trim() && r.push({
                                type: "thinking",
                                content: a.content.trim(),
                                isLastThinkingPart: n === e.length - 1,
                                startedAt: a.startedAt,
                                finishedAt: a.finishedAt
                            });
                            else if ("text" === a.type) a.content.trim() && r.push({
                                type: "text",
                                content: a.content.trim()
                            });
                            else if ("tool_use" === a.type) {
                                let e = t.find(e => e.toolCallId === a.id);
                                r.push({
                                    type: "tool_use",
                                    toolUse: a,
                                    toolResultStep: e,
                                    id: a.id
                                })
                            } else "follow_ups" === a.type ? a.followUps.length > 0 && r.push({
                                type: "follow_ups",
                                followUps: a.followUps,
                                multiSelect: a.multiSelect
                            }) : "custom_agent_template_picker" === a.type && r.push({
                                type: "custom_agent_template_picker"
                            })
                        }
                        return r
                    }({
                        chunks: l,
                        toolResultsForStep: n
                    });
                for (let [e, n] of u.entries())
                    if ("thinking" === n.type) {
                        let {
                            isLastThinkingPart: r,
                            content: a,
                            startedAt: i,
                            finishedAt: o
                        } = n, s = !r && o && i ? o - i : void 0, l = {
                            type: "thinking",
                            key: `thinking-${t.id}-${e}`,
                            content: a,
                            isLastThinkingPart: r,
                            step: t,
                            isFinished: !r,
                            durationMs: s
                        };
                        c.push(l)
                    } else if ("text" === n.type) {
                    var p, g;
                    let {
                        content: r
                    } = n, {
                        processedParts: a
                    } = e1(r), o = (p = u, (g = e) === p.length - 1 || p.slice(g + 1).every(e => "tool_use" === e.type && ("ask-survey" === e.toolUse.name || "generate-plan" === e.toolUse.name)));
                    a.forEach((r, n) => {
                        let s = n === a.length - 1,
                            l = i && o && s,
                            u = {
                                type: "chat",
                                key: `text-${t.id}-${e}-${n}`,
                                markdown: r,
                                citationContext: d,
                                step: t,
                                isFinished: !l
                            };
                        c.push(u)
                    })
                } else if ("tool_use" === n.type) {
                    let e = function(e) {
                        var t;
                        let {
                            queryGenStepMapToSearchCallId: n,
                            runningInference: a,
                            step: i,
                            toolResultStep: o,
                            toolUse: s
                        } = e;
                        if (!a && o && !(0, r(780899).nP)(o) && !(0, r(780899).I6)(o) && !(0, r(780899).OP)(o) || !((0, r(851062).U3)(s.name) || o && ((0, r(851062).U3)(o.toolType) || (0, r(851062).og)(o.toolType)))) return;
                        let l = o && ((0, r(851062).U3)(o.toolType) || (0, r(851062).og)(o.toolType)) ? o.toolType : ((0, r(851062).U3)(s.name), s.name),
                            c = !!(o && (0, r(780899).nP)(o)),
                            d = "external-agent-tool" === l ? function(e) {
                                let {
                                    toolUse: t,
                                    toolResultStep: n
                                } = e, a = function(e) {
                                    let t = (0, r(607673).P9)(e.content);
                                    return (0, r(358519).Xj)(e4, t) ? {
                                        externalAgentName: t.externalAgentName,
                                        externalToolName: t.externalToolName
                                    } : {}
                                }(t), i = n && (0, r(426048).gY)(n, "external-agent-tool") ? n.input : void 0, o = (null == i ? void 0 : i.externalAgentName) ? ? a.externalAgentName;
                                return {
                                    externalToolName: (null == i ? void 0 : i.externalToolName) ? ? a.externalToolName,
                                    collapsedGroupPresentation: o ? {
                                        name: o,
                                        keepCollapsedWhenSingleVisiblePart: !0
                                    } : void 0
                                }
                            }({
                                toolUse: s,
                                toolResultStep: o
                            }) : void 0;
                        if (o && (0, r(426048).gY)(o, "callFunction")) {
                            let e = function(e) {
                                var t;
                                let {
                                    toolResultStep: n,
                                    toolUse: a
                                } = e;
                                if (!n || !(0, r(426048).gY)(n, "callFunction")) return;
                                let i = (0, r(645604).zx)({
                                        toolResultStep: n,
                                        toolUse: a
                                    }),
                                    o = null == i ? void 0 : i.function;
                                if ("connections.search.search" !== o && "search.search" !== o && "connections.search.unifiedSearch" !== o && "search.unifiedSearch" !== o) return;
                                let s = function(e) {
                                        if (e && 0 !== e.length) return {
                                            default: {
                                                questions: e
                                            }
                                        }
                                    }(function(e) {
                                        if (!e) return;
                                        let t = e.args;
                                        if ((0, r(645604).u4)(t)) {
                                            if ("string" == typeof t.question && t.question.trim()) return [t.question.trim()];
                                            let e = t.queries;
                                            if (Array.isArray(e)) {
                                                let t = e.flatMap(e => (0, r(645604).u4)(e) && "string" == typeof e.question ? [e.question] : []);
                                                if (t.length) return t
                                            }
                                        }
                                    }(i)),
                                    l = (0, r(68118).xj)(null == (t = n.result) ? void 0 : t.output),
                                    c = {};
                                return s && (c.input = s), l && (c.extractedResults = l), { ...n,
                                    toolType: "search",
                                    toolName: "search.search",
                                    input: s,
                                    result: c
                                }
                            }({
                                toolResultStep: o,
                                toolUse: s
                            });
                            if (e) {
                                let t = n.get(s.id);
                                return {
                                    type: "search-tool-use",
                                    key: `search-tool-${s.id}`,
                                    toolName: "search",
                                    toolUse: s,
                                    toolResultStep: e,
                                    step: i,
                                    isFinished: c,
                                    queryGenSteps: t && t.length > 0 ? t : e2(s, o)
                                }
                            }
                            let t = (0, r(885175).c3)(o);
                            if (t) {
                                let {
                                    serverName: e,
                                    mcpToolName: r
                                } = t;
                                return {
                                    type: "mcp-tool-use",
                                    key: `mcp-tool-${s.id}`,
                                    toolName: "mcpServer.runTool",
                                    serverName: e ? ? "MCP Server",
                                    mcpToolName: r ? ? "tool",
                                    toolUse: s,
                                    toolResultStep: o,
                                    step: i,
                                    isFinished: c
                                }
                            }
                            let a = function(e) {
                                let {
                                    toolResultStep: t,
                                    toolUse: n
                                } = e;
                                if (!t || !(0, r(426048).gY)(t, "callFunction")) return;
                                let a = (0, r(645604).zx)({
                                        toolResultStep: t,
                                        toolUse: n
                                    }),
                                    i = null == a ? void 0 : a.function;
                                if (!(0, r(786380).Lp)(i)) return;
                                let o = function(e) {
                                        if (e) return `mail-${e}`
                                    }((0, r(645604).u4)(null == a ? void 0 : a.args) && "string" == typeof(null == a ? void 0 : a.args.toolName) ? a.args.toolName : void 0),
                                    s = function(e) {
                                        if (!e) return;
                                        let t = e.args;
                                        if (!(0, r(645604).u4)(t)) return;
                                        let n = Reflect.get(t, "toolArguments");
                                        return (0, r(645604).u4)(n) ? n : "from" in t || "to" in t || "subject" in t || "text" in t ? t : void 0
                                    }(a) ? ? function(e) {
                                        if ((0, r(645604).u4)(e) && ("from" in e || "to" in e || "subject" in e || "text" in e)) return e
                                    }((0, r(645604).u4)(t.result) ? Reflect.get(t.result, "emailPreview") : void 0);
                                return { ...t,
                                    toolType: "mail.runTool",
                                    toolName: o ? ? "mail.runTool",
                                    input: s,
                                    result: void 0
                                }
                            }({
                                toolResultStep: o,
                                toolUse: s
                            });
                            if (a) return {
                                type: "tool-use",
                                key: `mail-tool-${s.id}`,
                                toolName: "mail.runTool",
                                toolUse: s,
                                toolResultStep: a,
                                step: i,
                                isFinished: c
                            }
                        }
                        if ("search" === l) return {
                            type: "search-tool-use",
                            key: `search-tool-${s.id}`,
                            toolName: l,
                            toolUse: s,
                            toolResultStep: o,
                            step: i,
                            isFinished: c,
                            queryGenSteps: n.get(s.id) || []
                        };
                        if (!("mcpServer.runTool" === l && o && (0, r(426048).gY)(o, "mcpServer.runTool")) || (null == (t = o.moduleInfo) ? void 0 : t.type) !== "mcpServer") return {
                            type: "tool-use",
                            key: `tool-use-${s.id}`,
                            toolName: l,
                            toolUse: s,
                            toolResultStep: o,
                            step: i,
                            isFinished: c,
                            ...d
                        }; {
                            let e = o.moduleInfo.name || "MCP Server",
                                t = o.toolTitle || "tool";
                            return {
                                type: "mcp-tool-use",
                                key: `mcp-tool-${s.id}`,
                                toolName: "mcpServer.runTool",
                                serverName: e,
                                mcpToolName: t,
                                toolUse: s,
                                toolResultStep: o,
                                step: i,
                                isFinished: c
                            }
                        }
                    }({
                        toolUse: n.toolUse,
                        step: t,
                        toolResultStep: n.toolResultStep,
                        runningInference: i,
                        queryGenStepMapToSearchCallId: o
                    });
                    e && c.push(e)
                } else if ("follow_ups" === n.type) {
                    if (n.followUps.length > 0) {
                        let r = {
                            type: "follow-ups",
                            key: `follow-ups-${t.id}-${e}`,
                            followUps: n.followUps,
                            multiSelect: n.multiSelect,
                            step: t,
                            isFinished: !0
                        };
                        c.push(r)
                    }
                } else if ("custom_agent_template_picker" === n.type) {
                    let r = {
                        type: "custom-agent-template-picker",
                        key: `custom-agent-template-picker-${t.id}-${e}`,
                        step: t,
                        isFinished: !0
                    };
                    c.push(r)
                }
                return c.some(e => "tool-use" === e.type && "escalate" === e.toolName) ? s ? c.filter(e => "tool-use" !== e.type || "escalate" !== e.toolName) : c.filter(e => "tool-use" === e.type && "escalate" === e.toolName) : c
            }

            function e2(e, t) {
                if ("callFunction" !== e.name) return [];
                if (t && (0, r(426048).gY)(t, "callFunction")) {
                    var n;
                    let r = null == (n = t.result) ? void 0 : n.cycleQueries;
                    if (void 0 !== r) {
                        if (0 === r.length) return [];
                        let t = r.flatMap(e => {
                            let t = e.trim();
                            return t ? [{
                                question: t,
                                keywords: t
                            }] : []
                        });
                        return 0 === t.length ? [] : [{
                            id: `synthetic-${e.id}`,
                            type: "agent-search-query-generation",
                            queries: t,
                            searchToolCallId: e.id
                        }]
                    }
                }
                return []
            }
            let e4 = r(969475).object({
                required: {},
                optional: {
                    externalAgentName: r(969475).string(),
                    externalToolName: r(969475).string()
                }
            });

            function e9(e) {
                var t, n, i, o, l;
                let {
                    environment: u,
                    spaceStore: p,
                    threadStore: g,
                    toolResultStep: f,
                    showDebug: m
                } = e;
                if (f) switch (f.toolType) {
                    case "query-data-sources":
                        if (!(0, r(426048).gY)(f, "query-data-sources")) return;
                        let h = null == (t = f.result) || null == (t = t.results) ? void 0 : t.map(e => (function(e) {
                            if ("object" == typeof e && e) {
                                if ("id" in e && "string" == typeof e.id && (0, r(4962).uj)(e.id)) return e.id;
                                if ("url" in e && "string" == typeof e.url) {
                                    let t = (0, r(246286).bn)(e.url);
                                    return (0, r(4962).uj)(t) ? t : (0, r(4962).parseUUIDWithoutDashes)(t)
                                }
                            }
                        })(e)).map((e, t) => e ? (0, r(650494).L)({
                            index: t,
                            environment: u,
                            spaceStore: p,
                            threadStore: g,
                            blockId: e
                        }) : void 0).filter(r(722371).O9);
                        if (!(null != h && h.length)) return;
                        return [{
                            key: `${f.id}-results`,
                            items: h
                        }];
                    case "result":
                        if (!(0, r(426048).gY)(f, "result")) return;
                        return function({
                            result: e,
                            environment: t,
                            spaceStore: n
                        }) {
                            if (!e.result) return [];
                            let {
                                success: a,
                                message: i,
                                reflection: o
                            } = e.result, l = [];
                            if (l.push({
                                    key: "result-status",
                                    render: t => (0, s.jsx)(r(636518).Ay, { ...t,
                                        title: (0, s.jsx)(e0, {
                                            children: (0, s.jsx)(r(109939).sA, { ...a ? eq.statusSuccess : eq.statusFailed
                                            })
                                        }),
                                        caption: (0, s.jsx)(eG, {
                                            markdown: i ? e1(i).processedParts.join("\n\n") : ""
                                        }),
                                        shouldWrapCaption: "result" === e.toolType,
                                        icon: (0, s.jsx)(r(4458).fI, {
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 24,
                                            height: 24,
                                            children: a ? (0, s.jsx)(r(16275).I, {
                                                icon: r(574657).checkmarkCircleFillSmallIcon,
                                                size: "sm",
                                                colorPalette: "green",
                                                colorVariant: "accentPrimary"
                                            }) : (0, s.jsx)(r(16275).I, {
                                                icon: r(778765).xMarkCircleFillSmallIcon,
                                                size: "sm",
                                                colorPalette: "red",
                                                colorVariant: "accentPrimary"
                                            })
                                        }),
                                        allowTextSelection: !0,
                                        desktopIconStyle: eY,
                                        style: eQ,
                                        captionStyle: eX
                                    }),
                                    action: () => {}
                                }), o && (0, r(851062).jm)(o) && t && n && e.result) {
                                let r = JSON.stringify(e.result, null, 2);
                                l.push({
                                    key: "result-improve-agent",
                                    render: () => (0, s.jsx)("div", {
                                        style: eZ,
                                        children: (0, s.jsx)(e3, {
                                            resultJson: r,
                                            environment: t,
                                            spaceStore: n,
                                            success: a
                                        })
                                    }),
                                    action: () => {}
                                })
                            }
                            return [{
                                key: "result",
                                render: e => (0, s.jsx)(r(844565).A, { ...e,
                                    disableDesktopPadding: !0
                                }),
                                items: l
                            }]
                        }({
                            result: f,
                            environment: u,
                            spaceStore: p
                        });
                    case "exit-setup-mode":
                        {
                            if (!(0, r(426048).gY)(f, "exit-setup-mode")) return;
                            let e = (null == (n = f.result) ? void 0 : n.summary) ? ? (null == (i = f.input) ? void 0 : i.result);
                            if (!e) return;
                            return [{
                                key: `${f.id}-exit-setup-mode`,
                                items: [],
                                render: t => (0, s.jsx)(r(844565).A, { ...t,
                                    children: (0, s.jsx)(a().D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: "secondary",
                                        children: e
                                    })
                                })
                            }]
                        }
                    case "search":
                    case "queryMail":
                    case "queryCalendar":
                    case "view":
                    case "view-notifications":
                    case "view-version-history":
                    case "view-database-files":
                    case "view-channel":
                    case "view-slack-channel":
                    case "view-code-repo":
                    case "create-database":
                    case "update-database":
                    case "update-database-data-sources":
                    case "update-database-views":
                    case "update-database-triggers":
                    case "error":
                    case "create-pages":
                    case "update-page":
                    case "update-page-v2":
                    case "delete-pages":
                    case "create-agent":
                    case "create-agent-v2":
                    case "update-agent":
                    case "update-agent-v2":
                    case "delete-agent":
                    case "generate-image":
                    case "images.generate":
                    case "edit-json":
                    case "query-salesforce-tool":
                    case "mcpServer.getPrompt":
                    case "mcpServer.listPrompts":
                    case "mcpServer.listResources":
                    case "mcpServer.readResource":
                    case "mcpServer.runTool":
                    case "mcpServer.listTools":
                    case "slack.addReactionToMessage":
                    case "slack.createThreadInChannel":
                    case "slack.createThreadInDirectMessage":
                    case "slack.findUserByEmail":
                    case "slack.getThreadsInChannelSince":
                    case "slack.getUser":
                    case "slack.parseSlackUriOrUrl":
                    case "slack.queryChannels":
                    case "slack.removeReactionFromMessage":
                    case "slack.replyInThread":
                    case "slack.updateMessage":
                    case "notion.addCommentToDiscussion":
                    case "notion.getPageDiscussions":
                    case "mail.getPrompt":
                    case "mail.listTools":
                    case "mail.searchEmails":
                    case "mail.searchOutlookEmails":
                    case "mail.viewThreadContent":
                    case "mail.createMailBlock":
                    case "mail.listMailboxViews":
                    case "mail.getMailbox":
                    case "mail.listStatusProperties":
                    case "mail.healthCheck":
                    case "mail.listGmailFilters":
                    case "mail.setReadStatus":
                    case "mail.createLabel":
                    case "mail.listLabels":
                    case "mail.updateLabel":
                    case "mail.deleteLabel":
                    case "mail.applyUserLabelsWithLazyCreate":
                    case "mail.removeUserLabels":
                    case "mail.archiveThreadsById":
                    case "mail.archiveThreadsByQuery":
                    case "mail.trashThread":
                    case "mail.markThreadSpam":
                    case "mail.moveThreadToInbox":
                    case "mail.starThread":
                    case "mail.createStatusColumn":
                    case "mail.updateStatus":
                    case "mail.setReminder":
                    case "mail.unsetReminder":
                    case "mail.blockSender":
                    case "mail.unblockSender":
                    case "mail.unsubscribeSender":
                    case "mail.createGmailFilter":
                    case "mail.deleteGmailFilter":
                    case "mail.updateGmailFilter":
                    case "mail.listOutlookCategories":
                    case "mail.createOutlookCategory":
                    case "mail.applyOutlookCategories":
                    case "mail.removeOutlookCategories":
                    case "mail.listOutlookFolders":
                    case "mail.createOutlookFolder":
                    case "mail.moveToOutlookFolder":
                    case "mail.sendExistingDraft":
                    case "mail.readAttachment":
                    case "files.getFileContent":
                    case "files.getFileName":
                    case "files.getFileUrl":
                    case "cursor.createAgent":
                    case "cursor.addFollowup":
                    case "cursor.getAgent":
                    case "cursor.listRepositories":
                    case "boxy.createBox":
                    case "boxy.getBox":
                    case "boxy.sendBoxThread":
                    case "boxy.streamMessageToThread":
                    case "summarize-meeting-note":
                    case "update-todos":
                    case "markSessionFailed":
                    case "wait":
                    case "escalate":
                    case "calendar.fetchPlaybook":
                    case "list-machines":
                    case "create-machine":
                    case "destroy-machine":
                    case "query-agent-threads":
                    case "investigate-agent-thread":
                    case "run-agent":
                    case "worker.listTools":
                    case "worker.runTool":
                    case "workers.list":
                    case "notion.querySql":
                    case "notion.queryDataSource":
                    case "notion.queryView":
                    case "notion.queryMeetings":
                        return;
                    case "remote-coding-agent-tool":
                        if (!(0, r(426048).gY)(f, "remote-coding-agent-tool")) return;
                        return [{
                            key: `${f.id}-remote-coding-agent-visualizer`,
                            items: [],
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                children: (0, s.jsx)(ej, {
                                    step: f
                                })
                            })
                        }];
                    case "external-agent-tool":
                        if (!(0, r(426048).gY)(f, "external-agent-tool")) return;
                        return [{
                            key: `${f.id}-external-agent-visualizer`,
                            items: [],
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                children: (0, s.jsx)(eH, {
                                    step: f
                                })
                            })
                        }];
                    case "notion.sendNotification":
                        {
                            if (!(0, r(426048).gY)(f, "notion.sendNotification")) return;
                            let e = f.input,
                                t = "string" == typeof(null == e ? void 0 : e.headerContent) ? e.headerContent : "",
                                n = "string" == typeof(null == e ? void 0 : e.bodyContent) ? e.bodyContent : void 0;
                            if (!n) return;
                            let a = [{
                                key: `${f.id}-send-notification-item`,
                                render: e => (0, s.jsx)(r(636518).Ay, { ...e,
                                    title: t,
                                    caption: (0, s.jsx)(eG, {
                                        markdown: n
                                    }),
                                    allowTextSelection: !0,
                                    captionStyle: eX
                                }),
                                action: () => {}
                            }];
                            return [{
                                key: `${f.id}-send-notification`,
                                render: e => (0, s.jsx)(r(844565).A, { ...e
                                }),
                                items: a
                            }]
                        }
                    case "mail.runTool":
                    case "mail.createOrUpdateDraft":
                    case "mail.createOrUpdateGmailDraft":
                    case "mail.createOrUpdateOutlookDraft":
                    case "mail.createOrUpdateDraftAllClients":
                    case "mail.sendNewEmail":
                        return (0, r(22157).Of)({
                            environment: u,
                            spaceStore: p,
                            toolResultStep: f
                        });
                    case "calendar.listCalendars":
                    case "calendar.listEvents":
                    case "calendar.listCoworkersEvents":
                    case "calendar.createEvents":
                    case "calendar.updateEvents":
                    case "calendar.cancelEvents":
                    case "calendar.suggestMeetingTimes":
                    case "calendar.listCalendarResources":
                        return function(e) {
                            let {
                                resultStep: t,
                                environment: n
                            } = e, a = function(e) {
                                let {
                                    environment: t,
                                    resultStep: n
                                } = e;
                                try {
                                    if ((0, r(426048).gY)(n, "calendar.listEvents")) return function(e) {
                                        var t;
                                        let {
                                            environment: r,
                                            result: n
                                        } = e;
                                        if (!(null != n && null != (t = n.accounts) && t.length)) return;
                                        let a = [];
                                        for (let e of n.accounts)
                                            for (let t of e.calendars) a.push(...t.events);
                                        if (a.length) return d({
                                            environment: r,
                                            calendarEvents: a,
                                            detailed: !1
                                        })
                                    }({
                                        environment: t,
                                        result: n.result
                                    });
                                    if ((0, r(426048).gY)(n, "calendar.listCoworkersEvents")) return function(e) {
                                        let {
                                            environment: t,
                                            result: r
                                        } = e;
                                        if (!r || !(null != r && r.coworkers && Array.isArray(r.coworkers))) return;
                                        let n = [];
                                        for (let {
                                                events: e,
                                                ...a
                                            } of r.coworkers) {
                                            let r = function(e) {
                                                let {
                                                    coworker: t
                                                } = e;
                                                if (null != t && t.coworkerEmail) return {
                                                    key: `coworker-${t.coworkerEmail}`,
                                                    action() {},
                                                    render: e => (0, s.jsx)(c, {
                                                        coworker: t
                                                    })
                                                }
                                            }({
                                                coworker: a,
                                                environment: t
                                            });
                                            r && n.push(r, ...d({
                                                environment: t,
                                                calendarEvents: e,
                                                detailed: !1
                                            }) || [])
                                        }
                                        return n
                                    }({
                                        environment: t,
                                        result: n.result
                                    });
                                    if ((0, r(426048).gY)(n, "calendar.createEvents")) return function(e) {
                                        var t;
                                        let {
                                            environment: r,
                                            input: n,
                                            result: a
                                        } = e;
                                        if (null != a && null != (t = a.accounts) && t.length) {
                                            let e = [];
                                            for (let t of a.accounts)
                                                for (let r of t.calendars) e.push(...r.createdEvents);
                                            if (e.length) return d({
                                                environment: r,
                                                calendarEvents: e,
                                                detailed: !1
                                            })
                                        }
                                        if (Array.isArray(null == n ? void 0 : n.events)) return d({
                                            environment: r,
                                            calendarEvents: n.events,
                                            detailed: !0
                                        })
                                    }({
                                        environment: t,
                                        input: n.input,
                                        result: n.result
                                    });
                                    if ((0, r(426048).gY)(n, "calendar.updateEvents")) return function(e) {
                                        let {
                                            environment: t,
                                            result: r
                                        } = e;
                                        if (r && null != r && r.updatedEvents && Array.isArray(r.updatedEvents)) return d({
                                            environment: t,
                                            calendarEvents: r.updatedEvents,
                                            detailed: !1
                                        })
                                    }({
                                        environment: t,
                                        result: n.result
                                    })
                                } catch {}
                            }({
                                environment: n,
                                resultStep: t
                            });
                            if (null != a && a.length) return [{
                                key: t.id,
                                items: a
                            }]
                        }({
                            environment: u,
                            resultStep: f
                        });
                    case "terminal":
                        let y, x;
                        if (!(0, r(426048).gY)(f, "terminal") || (y = eO(null == (o = f.input) ? void 0 : o.command), x = eO(null == (l = f.result) ? void 0 : l.output), void 0 === y && void 0 === x)) return;
                        return [{
                            key: `${f.id}-terminal-visualizer`,
                            items: [],
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                children: (0, s.jsx)(e_, {
                                    step: f
                                })
                            })
                        }];
                    case "computer.terminal":
                        let v, b;
                        if (!(0, r(426048).gY)(f, "computer.terminal") || (v = eP(eR(f.input, "command")), b = eP(eR(eA(f.result), "output")), void 0 === v && void 0 === b)) return;
                        return [{
                            key: `${f.id}-computer-terminal-visualizer`,
                            items: [],
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                children: (0, s.jsx)(eM, {
                                    step: f
                                })
                            })
                        }];
                    case "browser":
                        if (!(0, r(426048).gY)(f, "browser")) return;
                        return [{
                            key: `${f.id}-browser-visualizer`,
                            items: [],
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                children: (0, s.jsx)(j, {
                                    step: f
                                })
                            })
                        }];
                    case "computer.browser":
                        if (!(0, r(426048).gY)(f, "computer.browser")) return;
                        return [{
                            key: `${f.id}-computer-browser-visualizer`,
                            items: [],
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                children: (0, s.jsx)(ek, {
                                    step: f
                                })
                            })
                        }];
                    case "computer.readFile":
                        if (!(0, r(426048).gY)(f, "computer.readFile")) return;
                        return [{
                            key: `${f.id}-computer-read-file-visualizer`,
                            items: [],
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                children: (0, s.jsx)(eW, {
                                    step: f
                                })
                            })
                        }];
                    case "callFunction":
                        if (!(0, r(426048).gY)(f, "callFunction")) return;
                        let S = function(e) {
                                var t, n;
                                let a = "string" == typeof(null == (t = e.input) ? void 0 : t.function) && e.input.function.length > 0 ? e.input.function : void 0;
                                if (!a) return;
                                let i = ey[a];
                                if (i) {
                                    if (i.gate && !r(218744).default.checkGate({
                                            gateName: i.gate
                                        }) || i.shouldRender && !i.shouldRender(e)) return;
                                    return (0, s.jsx)(i.component, {
                                        step: e
                                    })
                                }
                                let o = null == (n = e.input) || null == (n = n.args) ? void 0 : n.toolName;
                                if ("string" == typeof o && (0, r(786380).Z)(a, o)) return (0, s.jsx)(Z, {
                                    step: e
                                })
                            }(f),
                            k = [];
                        return S && !m && k.push({
                            key: `${f.id}-callFunction-custom`,
                            items: [],
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                children: S
                            })
                        }), m && k.push({
                            key: `${f.id}-callFunction-visualizer`,
                            items: [],
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                children: (0, s.jsx)(ex, {
                                    step: f
                                })
                            })
                        }), k;
                    case "runScript":
                        if (!(0, r(426048).gY)(f, "runScript")) return;
                        return [{
                            key: `${f.id}-runScript-visualizer`,
                            items: [],
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                disableMobilePadding: !0,
                                children: (0, s.jsx)(eB, {
                                    step: f
                                })
                            })
                        }];
                    case "computer.listMachines":
                    case "computer.listSecrets":
                    case "computer.createMachine":
                    case "computer.destroyMachine":
                    case "computer.setSecret":
                    case "computer.getJobStatus":
                    case "computer.getJobLogs":
                    case "computer.getMachine":
                    case "computer.poll":
                    case "computer.wait":
                    case "computer.writeFile":
                    case "computer.listDir":
                    case "computer.mkdir":
                    case "computer.rm":
                    case "computer.getTags":
                    case "computer.setTags":
                    case "computer.deleteSecret":
                    case "computer.tunnels":
                    case "claude.startRun":
                    case "claude.archiveRun":
                    case "claude.getRunStatus":
                    case "claude.sendUserMessage":
                    case "claude.listSessionEvents":
                    case "test.getState":
                    case "fs.readDir":
                    case "fs.readFiles":
                    case "notion.createDatabase":
                    case "notion.createTwoWayRelation":
                    case "notion.updateDatabase":
                    case "notion.createAgent":
                    case "notion.createDatabaseAgent":
                    case "notion.loadAgent":
                    case "notion.loadUser":
                    case "notion.search":
                    case "notion.searchUsers":
                    case "notion.updateAgent":
                    case "notion.loadDatabase":
                    case "notion.loadDataSource":
                    case "notion.getFormulaValue":
                    case "notion.loadPage":
                    case "notion.loadMeetingNoteTranscript":
                    case "notion.createPage":
                    case "notion.createFactoryTask":
                    case "notion.updatePage":
                    case "notion.deletePages":
                    case "notion.deleteDatabases":
                    case "notion.queryThreads":
                    case "notion.investigateThread":
                    case "notion.createAndRunThread":
                    case "notion.spawnSubagent":
                    case "notion.wideResearch":
                    case "notion.viewFileUrl":
                    case "notion.getUserActivity":
                    case "computer.viewFileUrl":
                    case "slack.viewFileUrl":
                    case "enter-setup-mode":
                    case "asana.search":
                    case "box.search":
                    case "box.loadFile":
                    case "box.findSharedItem":
                    case "discord.search":
                    case "discord.sendMessageToChannel":
                    case "discord.updateMessage":
                    case "discord.addReaction":
                    case "discord.removeReaction":
                    case "discord.listChannels":
                    case "discord.getRecentChannelMessages":
                    case "github.search":
                    case "github.grepCode":
                    case "github.lsDirectory":
                    case "github.loadPR":
                    case "github.loadIssue":
                    case "github.loadCommit":
                    case "github.loadFile":
                    case "gmail.search":
                    case "gmail.loadThread":
                    case "gmail.query":
                    case "googleDrive.search":
                    case "googleDrive.loadFile":
                    case "googleDrive.lsFolder":
                    case "googleDrive.loadZipFile":
                    case "googleDrive.grepFiles":
                    case "googleDrive.getFileComments":
                    case "googleCalendar.search":
                    case "googleCalendar.query":
                    case "jira.search":
                    case "jira.loadIssue":
                    case "linear.search":
                    case "linear.loadIssue":
                    case "microsoftTeams.search":
                    case "microsoftTeams.loadMessage":
                    case "microsoftTeams.viewChannel":
                    case "microsoftTeams.viewChat":
                    case "microsoftTeams.getUserMessages":
                    case "outlook.search":
                    case "outlook.loadMessage":
                    case "outlook.loadThread":
                    case "outlook.query":
                    case "asana.loadTask":
                    case "sharepoint.loadFile":
                    case "slack.loadMessage":
                    case "slack.getUserMessages":
                    case "salesforce.search":
                    case "salesforce.soqlQuery":
                    case "salesforce.getSample":
                    case "salesforce.findUserIds":
                    case "salesforce.loadRecord":
                    case "security.searchAuditLogs":
                    case "security.getAuditLogEntry":
                    case "sharepoint.search":
                    case "confluence.search":
                    case "confluence.cqlQuery":
                    case "confluence.loadPage":
                    case "slack.search":
                    case "computer.uploadFile":
                    case "computer.downloadFile":
                    case "notion.getUserEngagementAnalytics":
                    case "notion.getContentEngagementAnalytics":
                    case "notion.getDailyUsersAnalytics":
                    case "notion.listUsersAnalytics":
                    case "notion.listContentAnalytics":
                    case "notion.getPageAnalyticsTimeSeries":
                    case "notion.getPageVisitors":
                    case "notion.listTeamspaces":
                    case "notion.getTeamspaceTopLevelPagesAndDatabases":
                    case "notion.loadPermissions":
                    case "notion.updatePermission":
                    case "web.search":
                    case "web.loadPage":
                    case "search.search":
                    case "marketplace.installTemplate":
                    case "marketplace.searchTemplates":
                    case "helpdocs.search":
                    case "browser.run":
                    case "search.unifiedSearch":
                    case "system.wait":
                    case "status":
                    case "ask-survey":
                    case "generate-plan":
                    case "notion.listUserConnections":
                    case "notion.createUserConnection":
                    case "notion.archivePages":
                    case "notion.unarchivePages":
                        return [];
                    default:
                        (0, r(722371).HB)(f.toolType)
                }
            }

            function e6(e) {
                let t = r(728372).AppStoreMainEditorCurrentBlockStore.state || (0, r(346596).k)(e);
                if (!t) {
                    let n = e.RouterStore.state.route;
                    if ("chat" === n.name && "peekViewBlockId" in n) {
                        let e = n.peekViewBlockId,
                            a = r(728372).AppStoreSidebarSpaceStore.state;
                        e && a && (t = r(360851).N.createChildStore(a, {
                            table: r(832375).C0E,
                            id: e,
                            spaceId: a.id
                        }))
                    }
                }
                return t
            }

            function e3(e) {
                let {
                    resultJson: t,
                    environment: a,
                    spaceStore: i,
                    success: o
                } = e, l = (0, r(109939).tz)(), c = (0, r(83208).X)("custom-agents-fix-me-button"), d = (0, r(682985).K8)(() => {
                    let e = e6(a),
                        t = (null == e ? void 0 : e.table) === "workflow" ? e : void 0;
                    return (null == t ? void 0 : t.canEdit()) ? ? !1
                }, [a]), u = n.useCallback(() => {
                    let e = e6(a);
                    if (!e) return;
                    let n = "workflow" === e.table ? e : void 0,
                        s = o ? "improve_custom_agent" : "fix_custom_agent";
                    (0, r(599231).qt)({
                        action: s,
                        workflowId: null == n ? void 0 : n.id
                    });
                    let c = l.formatMessage(o ? eq.improveAgentButton : eq.fixAgentButton),
                        d = r(674880).defaultInferenceContextStore.state;
                    if (!d) return;
                    let u = a.currentUser.id;
                    if (!u) return;
                    let p = r(807825).L.createChildStore(i, {
                            table: r(832375).oo9,
                            id: u
                        }),
                        g = (0, r(599412).H)(l),
                        f = !!n,
                        m = (0, r(922900).getWorkflowAgentConfig)({
                            isCustomAgent: f,
                            environment: a,
                            spaceId: i.id,
                            workflowId: f ? null == n ? void 0 : n.id : void 0,
                            useCustomAgentDraft: f
                        }),
                        h = { ...d,
                            blockStore: "block" === e.table ? e : d.blockStore,
                            workflowStore: "workflow" === e.table ? e : d.workflowStore
                        },
                        y = (0, r(674880).Jv)({
                            environment: a,
                            spaceStore: i,
                            userStore: p,
                            promptType: s,
                            value: (0, r(247438).x9d)(c),
                            locale: g,
                            args: {
                                type: s,
                                resultJson: t,
                                enableQueryMail: m.enableQueryMail,
                                enableQueryCalendar: m.enableQueryCalendar
                            }
                        }),
                        x = (0, r(674880).Xd)({
                            environment: a,
                            inferenceContext: h,
                            config: m,
                            addSteps: [y],
                            surface: "custom_agent"
                        }),
                        v = (0, r(225900).N)({
                            environment: a,
                            spaceStore: i,
                            transcript: x,
                            parentPointer: f ? null == n ? void 0 : n.pointer : void 0,
                            workflowId: f ? null == n ? void 0 : n.id : void 0,
                            createdSource: "custom_agent"
                        });
                    if (f && n) {
                        let e = (0, r(475097).getUrlParamFromPeekMode)(r(387722).A),
                            t = (0, r(453573).YZ)({
                                workflowId: n.id,
                                workflowViewType: "settings",
                                peekModeParam: e,
                                threadId: v.id
                            });
                        (0, r(79266).navigate)({
                            environment: a,
                            url: t
                        });
                        return
                    }(0, r(358667).openChatPanel)({
                        environment: a,
                        store: e,
                        chatPanelState: {
                            isOpen: !0,
                            threadId: v.id
                        }
                    })
                }, [t, a, l, i, o]);
                return c && d ? (0, s.jsx)(r(265779).E, {
                    onClick: u,
                    children: l.formatMessage(o ? eq.improveAgentButton : eq.fixAgentButton)
                }) : null
            }
        },
        470474: (e, t, r) => {
            r.d(t, {
                V: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    threadStore: n,
                    stepId: a,
                    showResults: i,
                    traceId: o,
                    from: s
                } = e, l = n.getStepStoreById(a);
                if (!l || "search" !== l.getKeyValue("type")) return;
                let c = (0, r(187353).L2)(n);
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_search_step_toggle_results",
                        eventProperties: {
                            search_session_id: c && "search" === c.type ? c.searchSessionId : void 0,
                            thread_id: n.id,
                            show_results: i,
                            trace_id: o,
                            from: s,
                            workflow_id: (0, r(646440).getWorkflowIdFromStore)(n)
                        }
                    }
                });
                let d = n.getSpaceId();
                (0, r(377796).createAndCommit)({
                    userAction: "AIChatTranscript.SearchStep.toggleVisibleResults",
                    environment: t,
                    cellTarget: d ? {
                        spaceWithId: d
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, r(173157).z)({
                            store: l,
                            data: {
                                showResults: i
                            },
                            transaction: e
                        })
                    }
                })
            }
        },
        473686: (e, t, r) => {
            r.d(t, {
                U: () => c,
                c: () => u
            });
            var n = r(296540),
                a = r(474848);
            let i = (0, r(109939).YK)({
                    brewing: {
                        id: "AgentThinkingStep.brewing",
                        defaultMessage: "Brewing"
                    },
                    pondering: {
                        id: "AgentThinkingStep.pondering",
                        defaultMessage: "Pondering"
                    },
                    crafting: {
                        id: "AgentThinkingStep.crafting",
                        defaultMessage: "Crafting"
                    },
                    processing: {
                        id: "AgentThinkingStep.processing",
                        defaultMessage: "Processing"
                    },
                    computing: {
                        id: "AgentThinkingStep.computing",
                        defaultMessage: "Computing"
                    },
                    generating: {
                        id: "AgentThinkingStep.generating",
                        defaultMessage: "Generating"
                    },
                    working: {
                        id: "AgentThinkingStep.working",
                        defaultMessage: "Working"
                    },
                    exploring: {
                        id: "AgentThinkingStep.exploring",
                        defaultMessage: "Exploring"
                    },
                    organizing: {
                        id: "AgentThinkingStep.organizing",
                        defaultMessage: "Organizing"
                    },
                    preparing: {
                        id: "AgentThinkingStep.preparing",
                        defaultMessage: "Preparing"
                    },
                    focusing: {
                        id: "AgentThinkingStep.focusing",
                        defaultMessage: "Focusing"
                    },
                    discovering: {
                        id: "AgentThinkingStep.discovering",
                        defaultMessage: "Discovering"
                    },
                    noodling: {
                        id: "AgentThinkingStep.noodling",
                        defaultMessage: "Noodling"
                    },
                    vibing: {
                        id: "AgentThinkingStep.vibing",
                        defaultMessage: "Vibing"
                    },
                    cooking: {
                        id: "AgentThinkingStep.cooking",
                        defaultMessage: "Cooking"
                    }
                }),
                o = Object.freeze((0, r(722371).objectKeys)(i)),
                s = "AgentThinkingStep.";

            function l(e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t &= t;
                return Math.abs(t)
            }

            function c(e) {
                if (void 0 === e) return i.crafting;
                let t = l(String(e)) % o.length;
                return i[o[t]]
            }
            let d = {
                messageWrapInner: {
                    display: "flex",
                    whiteSpace: "pre",
                    alignItems: "center",
                    gap: 4,
                    minWidth: 0
                },
                loadingDotsContainer: {
                    width: 24,
                    height: 24
                },
                scrollingSquiggleContainer: {
                    opacity: .3,
                    width: r(265035).SCROLLING_SQUIGGLE_DEFAULTS.width,
                    height: r(265035).SCROLLING_SQUIGGLE_DEFAULTS.height,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            };

            function u(e) {
                let {
                    styleKey: t,
                    message: c = i.crafting,
                    animationType: u = "loading-dots",
                    children: p,
                    cycleVerbs: g = !1,
                    cycleIntervalMs: f = 1e3,
                    seed: m,
                    contentGapPx: h = 8
                } = e, {
                    bodyStyleKey: y
                } = (0, r(765846).yq)(), x = (0, r(765846).Cd)(y), [v, b] = n.useState(0), j = n.useMemo(() => {
                    if (!g) return "string" == typeof c ? {
                        kind: "string",
                        value: c
                    } : {
                        kind: "descriptor",
                        value: c
                    };
                    let e = function(e) {
                            if ("string" == typeof e || !e.id.startsWith(s)) return;
                            let t = e.id.slice(s.length);
                            if ((0, r(722371).Xk)(o, t)) return t
                        }(c),
                        t = ((void 0 === e ? 0 : o.indexOf(e)) + (void 0 === m ? 0 : l(String(m)) % o.length) + v) % o.length;
                    return {
                        kind: "descriptor",
                        value: i[o[t]]
                    }
                }, [v, g, c, m]);
                n.useEffect(() => {
                    if (!g) return;
                    let e = window.setInterval(() => {
                        b(e => e + 1)
                    }, f);
                    return () => {
                        window.clearInterval(e)
                    }
                }, [f, g]);
                let S = (0, r(960253).I)(() => ({
                    messageContent: { ...x,
                        fontWeight: r(699422).Wy.medium,
                        color: r(632079).Tj.text.secondary,
                        display: "flex",
                        alignItems: "center",
                        gap: h,
                        minWidth: 0
                    }
                }), [x, h]);
                return (0, a.jsxs)("div", {
                    style: S.messageContent,
                    children: [(0, a.jsx)("div", {
                        role: "status",
                        "aria-live": "polite",
                        style: r(69916).Qg,
                        children: "string" === j.kind ? j.value : (0, a.jsx)(r(109939).sA, { ...j.value
                        })
                    }), function() {
                        switch (u) {
                            case "scrolling-squiggle":
                                return (0, a.jsx)("div", {
                                    style: d.scrollingSquiggleContainer,
                                    children: (0, a.jsx)(r(265035).ScrollingSquiggle, {})
                                });
                            case "loading-dots":
                                return (0, a.jsx)(r(118845).A, {
                                    isTriColored: !0,
                                    styleParentContainer: d.loadingDotsContainer
                                });
                            case "none":
                                return null
                        }
                    }(), (0, a.jsxs)("div", {
                        style: d.messageWrapInner,
                        children: [(0, a.jsx)(r(861510).N, {
                            styleKey: t || y,
                            animate: !0,
                            colorVariant: "secondary",
                            text: "string" === j.kind ? j.value : (0, a.jsx)(r(109939).sA, { ...j.value
                            })
                        }), p]
                    })]
                })
            }
        },
        480359: (e, t, r) => {
            r.d(t, {
                l: () => i
            });
            var n = r(296540);
            let a = (0, r(109939).YK)({
                generatingAnnouncement: {
                    id: "aiChatTranscript.a11y.generating",
                    defaultMessage: "Notion AI is generating a response…"
                },
                completeAnnouncement: {
                    id: "aiChatTranscript.a11y.complete",
                    defaultMessage: "Notion AI finished."
                }
            });

            function i(e) {
                let t = (0, r(109939).tz)(),
                    {
                        announce: i
                    } = (0, r(813367).U)(),
                    o = (0, n.useRef)(void 0);
                (0, n.useEffect)(() => {
                    if (void 0 === o.current) {
                        o.current = e;
                        return
                    }
                    let r = o.current;
                    e && !r && i(t.formatMessage(a.generatingAnnouncement)), !e && r && i(t.formatMessage(a.completeAnnouncement)), o.current = e
                }, [e, i, t])
            }
        },
        480674: (e, t, r) => {
            r.r(t), r.d(t, {
                arrowBranchSmallIcon: () => a,
                iconDefinition: () => n
            }), r(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.66 3.01 10.68 10.48",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3.286 3.015a.625.625 0 0 0-.625.625v2.8a.625.625 0 0 0 1.25 0V5.15l2.382 2.38a3.7 3.7 0 0 1 1.082 2.607v3.277c0 .042.034.075.075.075h1.1a.075.075 0 0 0 .075-.075v-3.277A3.7 3.7 0 0 1 9.707 7.53l2.382-2.382V6.44a.625.625 0 1 0 1.25 0v-2.8a.625.625 0 0 0-.625-.625h-2.8a.625.625 0 0 0 0 1.25h1.29l-2.38 2.382A5 5 0 0 0 8 7.737a5 5 0 0 0-.823-1.09L4.795 4.265h1.291a.625.625 0 0 0 0-1.25z"
                    })
                },
                a = (0, r(104509).wt)("arrowBranchSmall", n, "small")
        },
        522434: (e, t, r) => {
            r.d(t, {
                S: () => i
            }), r(296540);
            var n = r(474848);
            let a = {
                overflow: "hidden",
                padding: 1,
                margin: -1
            };

            function i(e) {
                let {
                    origin: t,
                    content: i,
                    isExpanded: o,
                    shouldSkipContentPadding: s,
                    disableInitialAnimation: l,
                    hideOrigin: c,
                    contentId: d
                } = e;
                return c && i ? (0, n.jsx)(r(4458).VP, {
                    minWidth: 0,
                    children: (0, n.jsx)("div", {
                        children: i
                    })
                }) : i ? (0, n.jsxs)(r(4458).VP, {
                    minWidth: 0,
                    children: [t, (0, n.jsx)(r(203066).N, {
                        children: o ? (0, n.jsx)(r(153321).P.div, {
                            id: d,
                            initial: !l && {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: "auto",
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            transition: {
                                duration: .2,
                                ease: "easeInOut"
                            },
                            style: a,
                            children: (0, n.jsx)("div", {
                                style: {
                                    paddingTop: 10 * !s
                                },
                                children: i
                            })
                        }) : void 0
                    })]
                }) : (0, n.jsx)(r(4458).VP, {
                    minWidth: 0,
                    children: t
                })
            }
        },
        529752: (e, t, r) => {
            r.d(t, {
                k: () => a
            }), r(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.69 6.04 12.61 3.92",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M2.32 6.042a.625.625 0 1 0 0 1.25h11.36a.625.625 0 0 0 0-1.25zm0 2.666a.625.625 0 0 0 0 1.25h7.566a.625.625 0 0 0 0-1.25z"
                    })
                },
                a = (0, r(104509).wt)("textShortSmall", n, "small")
        },
        607673: (e, t, r) => {
            r.d(t, {
                P9: () => v
            });
            var n = () => r(520026);

            function a(e) {
                e = function(e) {
                    var t, r;
                    let n, a, o = !1,
                        s = !1,
                        l = [];
                    for (let t = 0; t < e.length; t++) {
                        let c = e[t];
                        if (o || ("{" === c ? l.push("object") : "[" === c ? l.push("array") : "}" === c ? "object" === l[l.length - 1] && l.pop() : "]" === c && "array" === l[l.length - 1] && l.pop()), "\\" === c && !s) {
                            s = !0;
                            continue
                        }
                        if (!s && '"' === c)
                            if (o) o = !1, null != (r = n) && r.isKeyCandidate && (a = {
                                end: t,
                                cutIndex: n.cutIndex
                            }), n = void 0;
                            else {
                                let r = i(e, t - 1),
                                    a = r >= 0 ? e[r] : void 0,
                                    s = "object" === l[l.length - 1] && ("{" === a || "," === a),
                                    c = t;
                                if ("," === a && r >= 0) c = r;
                                else if ("{" === a && r >= 0) {
                                    let t = i(e, r - 1);
                                    c = t >= 0 && "," === e[t] ? t : r
                                }
                                n = {
                                    start: t,
                                    isKeyCandidate: s,
                                    cutIndex: c
                                }, o = !0
                            }
                        s = !1
                    }
                    if (o && null != (t = n) && t.isKeyCandidate) return e.substring(0, n.cutIndex);
                    let c = i(e, e.length - 1);
                    return c >= 0 && a && c === a.end ? e.substring(0, a.cutIndex) : e
                }(e = function(e) {
                    let t = !1,
                        r = !1,
                        n = [];
                    for (let a = 0; a < e.length; a++) {
                        let i = e[a];
                        if ("\\" === i && !r) {
                            r = !0, n.push({
                                char: i,
                                inString: t,
                                isEscaped: !1
                            });
                            continue
                        }
                        r || '"' !== i || (t = !t), n.push({
                            char: i,
                            inString: t,
                            isEscaped: r
                        }), r = !1
                    }
                    let a = n.length;
                    for (let e = n.length - 1; e >= 0; e--) {
                        let {
                            char: t,
                            inString: r
                        } = n[e];
                        if (!r && (/\s/.test(t) || '"' === t || "'" === t || "]" === t || "}" === t || "," === t)) a = e;
                        else break
                    }
                    return e.substring(0, a)
                }(e));
                let t = [],
                    r = !1,
                    n = !1;
                for (let a = 0; a < e.length; a++) {
                    let i = e[a];
                    if ("\\" === i && !n) {
                        n = !0;
                        continue
                    }
                    n || '"' !== i ? r || ("{" === i || "[" === i ? t.push(i) : "}" === i ? "{" === t[t.length - 1] && t.pop() : "]" === i && "[" === t[t.length - 1] && t.pop()) : r ? (t.pop(), r = !1) : (t.push('"'), r = !0), n = !1
                }
                let a = e;
                for (let e = t.length - 1; e >= 0; e--) switch (t[e]) {
                    case "{":
                        a += "}";
                        break;
                    case "[":
                        a += "]";
                        break;
                    case '"':
                        a += '"'
                }
                return a
            }

            function i(e, t) {
                for (let r = t; r >= 0; r--)
                    if (!/\s/.test(e[r])) return r;
                return -1
            }

            function o(e) {
                return e.replace(/"<parameter\s+name=\\"([^\\]+)\\">(((?:\\.|[^"\\])*))"(?![^,\s\n}])/g, (e, t, r, n) => {
                    try {
                        let e = JSON.parse(`"${n}"`);
                        return `<parameter name="${t}">${e}`
                    } catch (t) {
                        return e
                    }
                })
            }

            function s(e) {
                let t = new Set,
                    r = !1,
                    n = !1;
                for (let a = 0; a < e.length; a++) {
                    let i = e[a];
                    if ("\\" === i && !n) {
                        n = !0;
                        continue
                    }
                    n || '"' !== i || (r = !r), r && t.add(a), n = !1
                }
                return e.replace(/<([a-zA-Z][a-zA-Z0-9_-]*?)>([\s\S]*?)<\/\1>/g, (e, r, n, a) => t.has(a) ? e : `{"${r}": ${n}}`)
            }

            function l(e) {
                let t = e.match(/<parameter\s+name="([^"]+)">/);
                if (!t) return e;
                let r = t[1],
                    n = t.index,
                    a = n + t[0].length,
                    i = e.substring(0, n),
                    o = e.substring(a);
                if (o.startsWith("{{")) {
                    let e = 2,
                        t = 2;
                    for (; t < o.length && e > 0;) "}" === o[t] ? e-- : "{" === o[t] && e++, t++;
                    if (0 === e) {
                        let e = o.substring(0, t),
                            r = o.substring(t);
                        o = `"${e}"${r}`
                    }
                }
                return `${i}{"${r}": ${o}}`
            }

            function c(e, t, r) {
                if ("boolean" == typeof t || null == e) return e;
                if (t.anyOf) {
                    for (let n of t.anyOf) {
                        let t = d(e, n, r);
                        if (t !== e) return t
                    }
                    return e
                }
                if (t.oneOf) {
                    for (let n of t.oneOf) {
                        let t = d(e, n, r);
                        if (t !== e) return t
                    }
                    return e
                }
                if (Array.isArray(t.type)) {
                    for (let n of t.type) {
                        let a = u({
                            value: e,
                            type: n,
                            schema: t,
                            parser: r
                        });
                        if (a !== e) return a
                    }
                    return e
                }
                return t.type ? u({
                    value: e,
                    type: t.type,
                    schema: t,
                    parser: r
                }) : e
            }

            function d(e, t, r) {
                try {
                    return c(e, t, r)
                } catch {
                    return e
                }
            }

            function u(e) {
                let {
                    value: t,
                    type: r,
                    schema: n,
                    parser: a
                } = e;
                if ("object" === r && "object" == typeof t && !Array.isArray(t) && null !== t) {
                    var i, o, s, l = t,
                        d = n,
                        u = a;
                    if (!d.properties) return l;
                    let e = {};
                    for (let [t, r] of Object.entries(l)) {
                        let n = d.properties[t];
                        n && "boolean" != typeof n ? e[t] = c(r, n, u) : e[t] = r
                    }
                    return e
                }
                if ("array" === r && Array.isArray(t)) {
                    let e;
                    return i = t, o = n, s = a, (e = o.items) ? Array.isArray(e) ? i.map((t, r) => {
                        let n = e[r];
                        return n ? c(t, n, s) : t
                    }) : i.map(t => c(t, e, s)) : i
                }
                if ("string" === r && "string" != typeof t) try {
                    return JSON.stringify(t)
                } catch (e) {
                    return String(t)
                }
                if ("string" !== r && "string" == typeof t) {
                    if ("number" === r) {
                        let e = Number(t);
                        if (!isNaN(e)) return e
                    }
                    if ("boolean" === r) {
                        let e = t.trim().toLowerCase();
                        if (["true", "1", "yes", "on"].includes(e)) return !0;
                        if (["false", "0", "no", "off"].includes(e)) return !1
                    }
                    if ("object" === r || "array" === r) try {
                        let e = a(t);
                        return c(e, n, a)
                    } catch {}
                }
                return t
            }

            function p(e) {
                return e.replace(/\\\\"/g, '\\"')
            }

            function g(e) {
                let t = "",
                    r = !1,
                    n = !1;
                for (let a = 0; a < e.length; a += 1) {
                    let i = e[a];
                    if (!r) {
                        '"' === i && (r = !0), t += i;
                        continue
                    }
                    if (n) {
                        t += i, n = !1;
                        continue
                    }
                    if ("\\" === i) {
                        t += i, n = !0;
                        continue
                    }
                    if ('"' === i) {
                        let n = a + 1;
                        for (; n < e.length && /\s/.test(e[n]);) n += 1;
                        let o = n < e.length ? e[n] : "";
                        o && ![":", ",", "}", "]"].includes(o) ? t += '\\"' : (r = !1, t += i);
                        continue
                    }
                    t += i
                }
                return t
            }

            function f(e) {
                let t = e.trim();
                if (t.endsWith("}}")) {
                    let e = t.slice(0, -1);
                    try {
                        return JSON.parse(e), e
                    } catch {}
                }
                if (t.includes("}}]")) {
                    let e = t.replace(/\}\}\]/g, "}]");
                    try {
                        return JSON.parse(e), e
                    } catch {}
                }
                if (t.includes("}},")) {
                    let e = t.replace(/\}\},/g, "}],");
                    try {
                        return JSON.parse(e), e
                    } catch {}
                }
                if (t.includes('"]}]')) {
                    let e = t.replace(/"\]\}\]/g, '"}]');
                    try {
                        return JSON.parse(e), e
                    } catch {}
                }
                return e
            }

            function m(e) {
                let t = e.trim();
                return t.endsWith("\\") ? t.replace(/\\+$/, "") : e
            }

            function h(e, t) {
                if (!e.trim()) return {};
                let r = JSON.parse(e);
                return t ? function(e, t, r = JSON.parse) {
                    if ("object" != typeof e || null === e || Array.isArray(e)) return {};
                    let n = {};
                    for (let [i, o] of Object.entries(e)) {
                        var a;
                        let e = null == (a = t.properties) ? void 0 : a[i];
                        e && "boolean" != typeof e ? n[i] = c(o, e, r) : n[i] = o
                    }
                    return n
                }(r, t, x) : r
            }
            r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            class y extends n().Yv {
                constructor(e) {
                    super("JSON parse error for input: {error}", {
                        variables: {
                            error: e
                        }
                    }), this.name = "AgentToolInputJSONParseError", Object.setPrototypeOf(this, y.prototype)
                }
            }

            function x(e, t, r) {
                var n, i;
                let c;
                try {
                    let a = h(e, t);
                    return null == r || null == (n = r.onAutoFix) || n.call(r, !1), a
                } catch (e) {
                    c = e
                }
                let d = e;
                for (let e of [o, l, s, p, g, f, m, a]) d = e(d);
                try {
                    let e = h(d, t);
                    return null == r || null == (i = r.onAutoFix) || i.call(r, !0), e
                } catch {
                    throw new y(c)
                }
            }

            function v(e) {
                try {
                    return x(e)
                } catch (e) {}
            }
        },
        645604: (e, t, r) => {
            function n(e) {
                return !(!(0, r(722371).Gv)(e) || Array.isArray(e))
            }

            function a(e) {
                if ("string" != typeof e) return e;
                let t = (0, r(607673).P9)(e);
                return t ? n(t) && "content" in t ? t.content : t : e
            }

            function i(e) {
                if ("string" != typeof e) return;
                let t = (0, r(607673).P9)(e);
                return n(t) ? t : void 0
            }

            function o(e, t) {
                if (e)
                    for (let r of t) {
                        let t = e[r];
                        if ("string" == typeof t && t.length > 0) return t
                    }
            }

            function s(e, t) {
                if (!e) return;
                let r = e.args;
                if (n(r))
                    for (let e of t) {
                        let t = Reflect.get(r, e);
                        if ("string" == typeof t && t.length > 0) return t
                    }
                for (let r of t) {
                    let t = Reflect.get(e, r);
                    if ("string" == typeof t && t.length > 0) return t
                }
            }

            function l(e) {
                if ("callFunction" !== e.name) return;
                let t = (0, r(851062).Pz)(e.content),
                    a = (0, r(607673).P9)(t ? ? e.content);
                if (!a || !n(a)) return;
                let i = a.function;
                if ("string" != typeof i) return;
                let o = {
                    function: i
                };
                return "args" in a && n(a.args) && (o.args = a.args), "editDescriptionVariableName" in a && "string" == typeof a.editDescriptionVariableName && (o.editDescriptionVariableName = a.editDescriptionVariableName), o
            }

            function c(e) {
                let {
                    toolResultStep: t,
                    toolUse: n
                } = e;
                if (t && (0, r(426048).gY)(t, "callFunction")) {
                    var a;
                    let e = null == (a = t.input) ? void 0 : a.function;
                    if ("string" == typeof e) return e
                }
                if (n) {
                    let e = l(n);
                    return null == e ? void 0 : e.function
                }
            }

            function d(e) {
                let t = c(e);
                return "string" == typeof t && "connections.notion.wideResearch" === t
            }

            function u(e) {
                return "connections.notion.createAndRunThread" === c(e)
            }

            function p(e) {
                let {
                    toolResultStep: t,
                    toolUse: n
                } = e;
                return t && (0, r(426048).gY)(t, "callFunction") && t.input && "string" == typeof t.input.function ? t.input : l(n)
            }

            function g(e) {
                return (null == e ? void 0 : e.function) === "connections.system.wait"
            }

            function f(e) {
                return !!e && (0, r(426048).gY)(e, "callFunction") && g(e.input)
            }

            function m(e) {
                var t;
                if (!e || !(0, r(426048).gY)(e, "callFunction") || !g(e.input)) return;
                let i = a(null == (t = e.result) ? void 0 : t.output);
                if (!n(i)) return;
                let o = i.seconds,
                    s = i.resumeAtMs;
                if ("number" == typeof o && Number.isFinite(o) && "number" == typeof s && Number.isFinite(s)) return {
                    seconds: o,
                    resumeAtMs: s,
                    reason: "string" == typeof i.reason ? i.reason : void 0,
                    message: "string" == typeof i.message ? i.message : void 0
                }
            }
            r.d(t, {
                DC: () => d,
                DL: () => i,
                JJ: () => u,
                JN: () => f,
                M7: () => a,
                UH: () => m,
                W5: () => s,
                nk: () => o,
                u4: () => n,
                zx: () => p
            })
        },
        729810: (e, t, r) => {
            r.d(t, {
                r: () => a
            }), r(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.06 1.19 15.88 15.65",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M12.207 1.322a1.91 1.91 0 0 0-2.33.838l-.348.715c-.177.292-.36.658-.535 1.005l-.13.257c-.225.442-.431.822-.627 1.08L6.073 7.521h-2.41a1.6 1.6 0 0 0-1.6 1.6v5.139a1.6 1.6 0 0 0 1.6 1.6H6.97l1.227.42.021.01c.73.366 1.528.554 2.347.554h4.309a1.844 1.844 0 0 0 1.78-2.32c.554-.318.922-.918.922-1.6 0-.284-.067-.547-.18-.78.333-.327.54-.782.54-1.297a1.8 1.8 0 0 0-.388-1.124c.17-.27.271-.592.271-.943a1.844 1.844 0 0 0-1.843-1.844h-3.783c.069-.167.15-.33.242-.516a6 6 0 0 0 .416-1.004l.001-.002.507-1.774a1.913 1.913 0 0 0-1.144-2.315zM10.64 3.449l.345-.71a.66.66 0 0 1 .781-.248c.32.128.488.471.393.804l-.507 1.773v.001c-.08.276-.195.512-.336.797l-.014.028c-.134.27-.292.59-.408.97a1.03 1.03 0 0 0 .988 1.323h4.095c.327 0 .593.267.593.594a.56.56 0 0 1-.27.47.625.625 0 0 0 .066 1.086.56.56 0 0 1 .322.511.58.58 0 0 1-.4.55.625.625 0 0 0-.191 1.074c.149.122.23.285.23.453a.586.586 0 0 1-.584.594.625.625 0 0 0-.452 1.057.594.594 0 0 1-.416 1.02h-4.31c-.593 0-1.17-.13-1.703-.381a.6.6 0 0 0-.161-.083l-1.424-.488a.6.6 0 0 0-.202-.033h-.181V8.475L9.169 6.05l.037-.043c.286-.367.547-.86.772-1.303l.147-.29a13 13 0 0 1 .515-.965M5.794 8.772v5.839H3.663a.35.35 0 0 1-.35-.35V9.122a.35.35 0 0 1 .35-.35z"
                    })
                },
                a = (0, r(104509).wt)("handThumbsUp", n, "default")
        },
        741873: (e, t, r) => {
            r.d(t, {
                N: () => n
            });
            let n = (0, r(104509).xh)("arrowChevronSingleRight", {
                default: {
                    loader: () => r.e(30313).then(r.bind(r, 120011))
                },
                small: {
                    loader: () => r.e(30313).then(r.bind(r, 491469))
                },
                fill: {
                    loader: () => r.e(30313).then(r.bind(r, 321863))
                },
                fillSmall: {
                    loader: () => r.e(30313).then(r.bind(r, 588222))
                }
            }, ["chevron", "right", "arrow", "direction", "forward"])
        },
        785655: (e, t, r) => {
            r.d(t, {
                x: () => a
            }), r(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.09 2.55 9.81 10.89",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M11.762 3.338a2.657 2.657 0 0 0-3.758 0L4.172 7.17a3.673 3.673 0 0 0 5.195 5.195l3.353-3.353a.625.625 0 0 0-.884-.884L8.484 11.48a2.423 2.423 0 1 1-3.427-3.427l3.832-3.832a1.407 1.407 0 0 1 1.99 1.99l-3.832 3.832a.391.391 0 0 1-.553-.553L8.41 7.575a.625.625 0 1 0-.884-.884L5.61 8.607a1.641 1.641 0 1 0 2.321 2.32l3.832-3.831a2.657 2.657 0 0 0 0-3.758"
                    })
                },
                a = (0, r(104509).wt)("paperClipSmall", n, "small")
        },
        821448: (e, t, r) => {
            r.d(t, {
                E: () => i
            }), r(944114);
            var n = r(296540),
                a = r(474848);

            function i({
                step: e,
                displayMode: t,
                config: n
            }) {
                if ("date" === t) return (0, a.jsx)(c, {
                    step: e
                });
                if ("pageTitle" === t) return (0, a.jsx)(u, {
                    step: e
                });
                if ("pageChip" === t) return (0, a.jsx)(g, {
                    step: e
                });
                if ("timeAndMode" === t) return (0, a.jsx)(s, {
                    step: e,
                    config: n
                });
                if ("dateAndPageChip" === t) return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c, {
                        step: e
                    }), (0, a.jsx)(g, {
                        step: e
                    })]
                });
                else return (0, r(722371).HB)(t)
            }
            let o = {
                wrap: {
                    color: r(632079).Tj.text.secondary,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12
                },
                betaBadge: {
                    borderRadius: 4,
                    background: r(632079).Tj.palette.translucentGray[75],
                    display: "inline-block",
                    padding: "2px 5px",
                    marginInlineStart: 6
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function s({
                step: e,
                config: t
            }) {
                var i;
                let l = (0, r(109939).tz)(),
                    c = (0, r(533992).v3)(),
                    d = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceIdStore),
                    u = (0, n.useMemo)(() => {
                        if ((null == t ? void 0 : t.type) === "researcher") return (0, a.jsx)(r(746434).E, {
                            style: o.betaBadge,
                            content: (0, a.jsx)(r(111010).D, {
                                styleKey: "captionSmMedium",
                                color: "secondary",
                                children: (0, a.jsx)(r(109939).sA, {
                                    id: "aiInferenceTranscript.contextStep.betaLabel",
                                    defaultMessage: "Beta"
                                })
                            })
                        })
                    }, [t]),
                    p = (0, r(682985).K8)(() => {
                        var n;
                        let a = [];
                        if (null != (n = e.value) && n.currentDatetime) {
                            let t = new Date(e.value.currentDatetime),
                                r = t.toLocaleString(l.locale, {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                }),
                                n = new Date().toLocaleString(l.locale, {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                }),
                                i = t.toLocaleString(l.locale, {
                                    hour: "numeric",
                                    minute: "2-digit"
                                });
                            r === n ? a.push(i) : a.push(r)
                        }
                        if ((null == t ? void 0 : t.type) === "markdown-chat") {
                            let e = t.model && d ? r(295206).P.getModelMessage(c, d, t.model) : void 0;
                            e ? a.push(e) : a.push(l.formatMessage(r(516795).E.chatWithoutModel))
                        } else(null == t ? void 0 : t.type) === "search" ? a.push(l.formatMessage(r(516795).E.search)) : (null == t ? void 0 : t.type) === "researcher" && a.push(l.formatMessage(r(516795).E.researcher));
                        return a.join(" · ")
                    }, [t, c, l, d, null == (i = e.value) ? void 0 : i.currentDatetime]);
                return (0, a.jsxs)("div", {
                    style: o.wrap,
                    children: [p, u]
                })
            }
            let l = {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                marginTop: 16,
                marginBottom: 16,
                userSelect: "none"
            };

            function c({
                step: e
            }) {
                var t, i, o, s;
                let d = (0, r(109939).tz)(),
                    u = (0, n.useMemo)(() => {
                        var t;
                        return null != (t = e.value) && t.currentDatetime ? new Date(e.value.currentDatetime).toLocaleDateString(d.locale, {
                            weekday: "long",
                            month: "short",
                            day: "numeric"
                        }) : null
                    }, [d.locale, null == (t = e.value) ? void 0 : t.currentDatetime]),
                    p = (0, n.useMemo)(() => {
                        var t;
                        return null != (t = e.value) && t.currentDatetime ? new Date(e.value.currentDatetime).toLocaleDateString(d.locale, {
                            weekday: "long",
                            month: "short",
                            year: "numeric",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        }) : null
                    }, [d.locale, null == (i = e.value) ? void 0 : i.currentDatetime]),
                    g = (null == (o = e.value) ? void 0 : o.surface) === "writer" || (null == (s = e.value) ? void 0 : s.surface) === "rich_text_menu";
                return (0, a.jsx)(r(51831).m, {
                    content: () => (0, a.jsx)("span", {
                        children: p
                    }),
                    children: e => (0, a.jsxs)(r(111010).D, { ...e,
                        style: l,
                        styleKey: "captionMedium",
                        colorVariant: "tertiary",
                        children: [u, " ・ ", (0, a.jsx)(r(109939).sA, {
                            id: "aiInferenceTranscript.contextStep.dateTooltip",
                            defaultMessage: "Notion AI"
                        }), g ? (0, a.jsxs)(a.Fragment, {
                            children: [" ・ ", (0, a.jsx)(r(109939).sA, {
                                id: "aiInferenceTranscript.contextStep.writerMode",
                                defaultMessage: "Writer"
                            })]
                        }) : void 0]
                    })
                })
            }
            let d = {
                divider: {
                    flex: "1 0 0",
                    borderBottom: `0.5px solid ${r(632079).Tj.border.secondary}`,
                    minWidth: 32,
                    margin: "32px -16px"
                },
                text: {
                    display: "flex",
                    lineClamp: 1,
                    ...r(699422).RC
                },
                recordTitleHoveredStyle: {
                    color: r(632079).Tj.text.primary,
                    background: void 0
                }
            };

            function u({
                step: e
            }) {
                let t = (0, r(533992).v3)(),
                    n = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                    i = (0, r(254505).m)(),
                    s = (0, r(682985).K8)(() => {
                        if (!n) return;
                        let t = e.value.blockId ? ? e.value.collectionViewBlockId;
                        if (t) return r(970831).B.createChildStore(n, {
                            id: t,
                            table: r(832375).evP,
                            spaceId: n.id
                        })
                    }, [n, e.value.blockId, e.value.collectionViewBlockId]);
                return s ? (0, a.jsxs)(r(4458).fI, {
                    gap: 32,
                    alignItems: "center",
                    justifyContent: "center",
                    className: "autolayout-row autolayout-fill-width",
                    style: o.positionRelative,
                    children: [(0, a.jsx)("div", {
                        style: d.divider,
                        role: "separator"
                    }), (0, a.jsx)(r(111010).D, {
                        style: d.text,
                        styleKey: "captionRegular",
                        colorVariant: "tertiary",
                        children: (0, a.jsx)(r(64960).Ay, {
                            hoveredStyle: d.recordTitleHoveredStyle,
                            onClick: () => {
                                (0, r(545586).navigateToBlock)({
                                    environment: t,
                                    store: s,
                                    pageVisitSource: r(254656).y8.AIChat,
                                    openInSidePeek: i || void 0
                                })
                            },
                            children: (0, a.jsx)(r(627918).A, {
                                store: s
                            })
                        })
                    }), (0, a.jsx)("div", {
                        style: d.divider,
                        role: "separator"
                    })]
                }) : null
            }
            let p = {
                blockContainer: {
                    color: r(632079).Tj.text.secondary,
                    display: "flex",
                    maxWidth: "50%",
                    alignItems: "center",
                    gap: 5,
                    paddingTop: 4,
                    paddingInlineEnd: 8,
                    paddingBottom: 4,
                    paddingInlineStart: 6,
                    borderRadius: 12
                },
                blockContainerHover: {
                    background: r(632079).Tj.background.tertiaryTranslucent
                },
                style0: {
                    fontSize: 12,
                    lineHeight: "16px"
                }
            };

            function g({
                step: e
            }) {
                let t = (0, r(533992).v3)(),
                    n = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                    i = (0, r(254505).m)(),
                    o = (0, r(682985).K8)(() => {
                        if (!n) return;
                        let t = e.value.blockId ? ? e.value.collectionViewBlockId;
                        if (t) return r(970831).B.createChildStore(n, {
                            id: t,
                            table: r(832375).evP,
                            spaceId: n.id
                        })
                    }, [n, e.value.blockId, e.value.collectionViewBlockId]),
                    s = (0, r(682985).K8)(() => null == o ? void 0 : o.getIcon(), [o]);
                return o ? (0, a.jsx)(r(4458).fI, {
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    width: "100%",
                    children: (0, a.jsxs)(r(988022).p, {
                        onClick: () => {
                            (0, r(545586).navigateToBlock)({
                                environment: t,
                                store: o,
                                pageVisitSource: r(254656).y8.AIChat,
                                openInSidePeek: i || void 0
                            })
                        },
                        style: p.blockContainer,
                        hoveredStyle: p.blockContainerHover,
                        size: "sm",
                        children: [s ? (0, a.jsx)(r(569553).B6, {
                            disabled: !0,
                            icon: s,
                            isEmptyPage: !1,
                            size: 14
                        }) : (0, a.jsx)(r(569553).B6, {
                            disabled: !0,
                            iconRecordCategory: "pageBlock",
                            isEmptyPage: !1,
                            size: 14
                        }), (0, a.jsx)(r(627918).A, {
                            store: o,
                            style: p.style0
                        })]
                    })
                }) : null
            }
        },
        821480: (e, t, r) => {
            r.d(t, {
                U: () => o
            }), r(296540);
            var n = r(474848);
            let a = (0, r(109939).YK)({
                    fromThread: {
                        id: "messageAttributionHeader.fromThread",
                        defaultMessage: "sent a message from a thread:"
                    }
                }),
                i = {
                    cursor: "pointer"
                };

            function o(e) {
                let t = e.avatarSize ? ? (e.type, 20),
                    o = (0, r(109939).tz)(),
                    s = (0, r(525272).E)({
                        spaceStore: "user" === e.type ? e.spaceStore : void 0,
                        viewedUserId: "user" === e.type ? e.userStore.id : void 0
                    }),
                    l = void 0 !== e.onCallerThreadClick,
                    c = (0, n.jsxs)("div", {
                        className: "autolayout-fill-width",
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            gap: l ? 4 : 8,
                            alignItems: "center",
                            justifyContent: "agent" === e.type ? void 0 : "flex-end",
                            position: "relative",
                            marginBottom: e.gap
                        },
                        children: ["user" === e.type ? (0, n.jsx)(r(321753).A, {
                            userStore: e.userStore,
                            size: t
                        }) : e.workflowStore ? (0, n.jsx)(r(651790).AgentIcon, {
                            agentIcon: void 0,
                            workflowStore: e.workflowStore,
                            size: t
                        }) : (0, n.jsx)(r(971375).x, {
                            variant: "plans",
                            shadowVariant: "strong"
                        }), (0, n.jsx)(r(111010).D, {
                            styleKey: l ? "bodyMedium" : "captionMedium",
                            colorVariant: l ? void 0 : "secondary",
                            children: e.displayName
                        }), e.onCallerThreadClick ? (0, n.jsx)(r(988022).p, {
                            style: i,
                            onClick: e.onCallerThreadClick,
                            children: (0, n.jsx)(r(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: o.formatMessage(a.fromThread)
                            })
                        }) : null]
                    });
                return "user" === e.type && s ? (0, n.jsx)(r(532755).D, {
                    userStore: e.userStore,
                    spaceStore: e.spaceStore,
                    from: "ai_assistant",
                    children: c
                }) : c
            }
        },
        823691: (e, t, r) => {
            r.d(t, {
                _: () => a
            }), r(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.06 3.15 15.88 15.65",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M7.793 18.678a1.91 1.91 0 0 0 2.33-.838l.348-.715c.177-.293.36-.658.535-1.005l.13-.257c.225-.442.431-.822.627-1.08l2.164-2.306h2.41a1.6 1.6 0 0 0 1.6-1.6V5.74a1.6 1.6 0 0 0-1.6-1.6H13.03l-1.227-.42-.021-.011a5.2 5.2 0 0 0-2.347-.553H5.126a1.844 1.844 0 0 0-1.78 2.32 1.84 1.84 0 0 0-.922 1.6c0 .284.067.547.18.78-.333.327-.54.782-.54 1.297 0 .429.145.817.388 1.124-.17.27-.272.592-.272.943 0 1.018.826 1.844 1.844 1.844h3.783c-.069.167-.15.33-.242.516v.001a6 6 0 0 0-.417 1.004v.002L6.64 16.36a1.913 1.913 0 0 0 1.144 2.315zm1.567-2.126-.345.71a.66.66 0 0 1-.781.247.66.66 0 0 1-.393-.804l.507-1.773v-.001c.08-.276.195-.512.336-.797l.014-.028c.134-.27.292-.59.408-.97a1.03 1.03 0 0 0-.988-1.323H4.023a.594.594 0 0 1-.593-.594.56.56 0 0 1 .27-.47.625.625 0 0 0-.066-1.086.56.56 0 0 1-.321-.511c0-.255.157-.467.398-.55a.625.625 0 0 0 .192-1.074.59.59 0 0 1-.23-.453c0-.334.263-.594.584-.594a.625.625 0 0 0 .452-1.057.594.594 0 0 1 .416-1.02h4.31c.593 0 1.17.13 1.703.381a.6.6 0 0 0 .161.083l1.424.488a.6.6 0 0 0 .202.033h.181v6.136l-2.275 2.425-.037.043c-.286.367-.547.86-.772 1.303l-.147.29c-.177.352-.334.665-.486.912zm4.846-5.324v-5.84h2.131a.35.35 0 0 1 .35.35v5.139a.35.35 0 0 1-.35.35z"
                    })
                },
                a = (0, r(104509).wt)("handThumbsDown", n, "default")
        },
        834407: (e, t, r) => {
            r.d(t, {
                k: () => o
            }), r(296540);
            var n = r(474848);
            let a = Object.freeze({
                    property: !0
                }),
                i = {
                    opacity: 1,
                    cursor: "text"
                };

            function o(e) {
                let {
                    store: t,
                    onSubmit: o,
                    textRef: s,
                    stagingAndInputWrapStyle: l,
                    textContainerStyle: c,
                    testId: d
                } = e, u = (0, r(960253).e)(), {
                    bodyStyleKey: p
                } = (0, r(765846).yq)(), g = (0, r(765846).Cd)(p), f = e.fontSize ? ? g.fontSize ? ? 14, m = (0, r(960253).I)(() => ({
                    stagingAndInputWrap: {
                        boxShadow: `
					0px 0px 0px 1px ${r(632079).Tj.border.secondary},
					0px 4px 12px -2px rgba(0, 0, 0, 0.08)`,
                        backgroundColor: "dark" === u ? r(632079).Tj.palette.translucentGray[100] : "transparent",
                        borderRadius: 12,
                        paddingTop: 6,
                        paddingBottom: 6,
                        paddingInlineStart: 12,
                        paddingInlineEnd: 12,
                        overflow: "inherit",
                        flexGrow: 1,
                        flexShrink: 1,
                        ...l
                    },
                    wrap: {
                        display: "flex",
                        alignItems: "center",
                        fontSize: f,
                        flexWrap: "wrap"
                    },
                    textContainer: {
                        flexGrow: 1,
                        paddingTop: 4,
                        paddingBottom: 4,
                        minHeight: void 0,
                        maxHeight: 240,
                        overflow: "auto",
                        ...c
                    }
                }), [f, l, c, u]);
                return (0, n.jsx)(r(369064).N, {
                    debugName: "TextInput",
                    capture: !0,
                    children: (0, n.jsx)("div", {
                        style: m.stagingAndInputWrap,
                        tabIndex: 0,
                        children: (0, n.jsx)("div", {
                            style: m.wrap,
                            onClick: e => {
                                if (e.target === e.currentTarget) {
                                    let n = r(521595).n.findEditableWithStore(t);
                                    n && n.handleClick(e)
                                }
                            },
                            children: (0, n.jsx)(r(53373).A, {
                                onEnter: o,
                                style: m.textContainer,
                                placeholder: "Ask AI anything",
                                disabled: !1,
                                store: t,
                                placeholderStyle: i,
                                pasteBehavior: "inline",
                                disableSlashCommands: !0,
                                disableEmbedMenu: !0,
                                disableEmojiCommands: !1,
                                disableComment: !0,
                                disableSelectAllBlocks: !0,
                                disableSelectionDrag: !0,
                                disableEnter: !1,
                                disableMobileActionBar: !0,
                                disableStyleAnnotations: !0,
                                disableInsertedDeletedAnnotations: !0,
                                disableSuggestEdit: !0,
                                inPageFind: r(831719).Os.none,
                                usePopupForMentionOnMobile: !0,
                                enableChatSelectionContextTokens: !0,
                                ref: s,
                                testId: d,
                                disabledMentionTypes: a
                            })
                        })
                    })
                })
            }
        },
        861873: (e, t, r) => {
            r.d(t, {
                $: () => o
            }), r(581454);
            var n = r(296540),
                a = r(474848);
            let i = {
                container: {
                    paddingTop: 12,
                    paddingBottom: 24,
                    backgroundColor: r(632079).Tj.background.primary,
                    width: "100%",
                    overflow: "hidden",
                    gap: 12,
                    display: "flex",
                    flexDirection: "column",
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    borderRadius: 8
                },
                fieldRow: {
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "0 16px",
                    gap: 6
                },
                fieldLabel: {
                    color: r(632079).Tj.text.tertiary,
                    width: 60,
                    flexShrink: 0,
                    fontWeight: r(699422).Wy.regular,
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                },
                recipientDisplayName: {
                    color: r(632079).Tj.text.primary,
                    fontWeight: r(699422).Wy.regular,
                    flexShrink: 0
                },
                recipientAddressWithoutName: {
                    color: r(632079).Tj.text.primary,
                    fontWeight: r(699422).Wy.regular,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                },
                recipientAddressWithName: {
                    color: r(632079).Tj.text.secondary,
                    fontWeight: r(699422).Wy.regular,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                },
                subjectValue: {
                    color: r(632079).Tj.text.primary,
                    flex: 1,
                    fontWeight: r(699422).Wy.regular
                },
                fieldEmptyValue: {
                    color: r(632079).Tj.text.tertiary,
                    flex: 1,
                    fontWeight: r(699422).Wy.regular
                },
                bodyPreview: {
                    padding: "0 16px",
                    fontSize: 14,
                    color: r(632079).Tj.blue.text.accentPrimary,
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    boxSizing: "border-box"
                },
                lineHighlight: {
                    display: "inline",
                    backgroundColor: r(632079).Tj.blue.background.secondaryTranslucent,
                    padding: "0 4px",
                    boxDecorationBreak: "clone",
                    WebkitBoxDecorationBreak: "clone"
                },
                bodySeparator: {
                    borderTop: `1px solid ${r(632079).Tj.border.secondary}`
                }
            };

            function o(e) {
                let {
                    from: t,
                    to: o,
                    cc: s,
                    bcc: l,
                    subject: c,
                    text: d
                } = e;
                return (0, a.jsxs)("div", {
                    style: i.container,
                    children: [null != t && t.address ? (0, a.jsxs)("div", {
                        style: i.fieldRow,
                        children: [(0, a.jsx)("div", {
                            style: i.fieldLabel,
                            children: "From"
                        }), (0, a.jsxs)(r(4458).fI, {
                            gap: 4,
                            minWidth: 0,
                            children: [t.name ? (0, a.jsx)("div", {
                                style: i.recipientDisplayName,
                                children: t.name
                            }) : void 0, (0, a.jsx)("div", {
                                style: t.name ? i.recipientAddressWithName : i.recipientAddressWithoutName,
                                children: t.address
                            })]
                        })]
                    }) : void 0, o && o.length > 0 ? (0, a.jsxs)("div", {
                        style: i.fieldRow,
                        children: [(0, a.jsx)("div", {
                            style: i.fieldLabel,
                            children: "To"
                        }), (0, a.jsx)(r(4458).VP, {
                            alignSelf: "stretch",
                            flex: 1,
                            minWidth: 0,
                            children: o.map((e, t) => (0, a.jsx)(r(4458).fI, {
                                gap: 4,
                                minWidth: 0,
                                children: (0, a.jsxs)(r(4458).fI, {
                                    gap: 4,
                                    minWidth: 0,
                                    children: [e.name ? (0, a.jsx)("div", {
                                        style: i.recipientDisplayName,
                                        children: e.name
                                    }) : void 0, (0, a.jsx)("div", {
                                        style: e.name ? i.recipientAddressWithName : i.recipientAddressWithoutName,
                                        children: e.address
                                    })]
                                })
                            }, `${e.address}-${t}`))
                        })]
                    }) : (0, a.jsxs)("div", {
                        style: i.fieldRow,
                        children: [(0, a.jsxs)("div", {
                            style: i.fieldLabel,
                            children: ["To", (0, a.jsx)(r(16275).I, {
                                icon: r(965885).exclamationMarkCircleIcon,
                                size: "xs",
                                colorPalette: "yellow",
                                colorVariant: "accentPrimary"
                            })]
                        }), (0, a.jsx)("div", {
                            style: i.fieldEmptyValue,
                            children: "Missing recipient"
                        })]
                    }), s && s.length > 0 ? (0, a.jsxs)("div", {
                        style: i.fieldRow,
                        children: [(0, a.jsx)("div", {
                            style: i.fieldLabel,
                            children: "Cc"
                        }), (0, a.jsx)(r(4458).VP, {
                            alignSelf: "stretch",
                            flex: 1,
                            minWidth: 0,
                            children: s.map((e, t) => (0, a.jsx)(r(4458).fI, {
                                gap: 4,
                                minWidth: 0,
                                children: (0, a.jsxs)(r(4458).fI, {
                                    gap: 4,
                                    minWidth: 0,
                                    children: [e.name ? (0, a.jsx)("div", {
                                        style: i.recipientDisplayName,
                                        children: e.name
                                    }) : void 0, (0, a.jsx)("div", {
                                        style: e.name ? i.recipientAddressWithName : i.recipientAddressWithoutName,
                                        children: e.address
                                    })]
                                })
                            }, `${e.address}-${t}`))
                        })]
                    }) : void 0, l && l.length > 0 ? (0, a.jsxs)("div", {
                        style: i.fieldRow,
                        children: [(0, a.jsx)("div", {
                            style: i.fieldLabel,
                            children: "Bcc"
                        }), (0, a.jsx)(r(4458).VP, {
                            alignSelf: "stretch",
                            flex: 1,
                            minWidth: 0,
                            children: l.map((e, t) => (0, a.jsx)(r(4458).fI, {
                                gap: 4,
                                minWidth: 0,
                                children: (0, a.jsxs)(r(4458).fI, {
                                    gap: 4,
                                    minWidth: 0,
                                    children: [e.name ? (0, a.jsx)("div", {
                                        style: i.recipientDisplayName,
                                        children: e.name
                                    }) : void 0, (0, a.jsx)("div", {
                                        style: e.name ? i.recipientAddressWithName : i.recipientAddressWithoutName,
                                        children: e.address
                                    })]
                                })
                            }, `${e.address}-${t}`))
                        })]
                    }) : void 0, (0, a.jsxs)("div", {
                        style: i.fieldRow,
                        children: [(0, a.jsx)("div", {
                            style: i.fieldLabel,
                            children: "Subject"
                        }), c ? (0, a.jsx)("div", {
                            style: i.subjectValue,
                            children: c
                        }) : (0, a.jsx)("div", {
                            style: i.fieldEmptyValue,
                            children: "(No subject)"
                        })]
                    }), d ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            style: i.bodySeparator
                        }), (0, a.jsx)("div", {
                            style: i.bodyPreview,
                            children: (d || "").split("\n").map((e, t, r) => (0, a.jsxs)(n.Fragment, {
                                children: [e.trim().length > 0 ? (0, a.jsx)("span", {
                                    style: i.lineHighlight,
                                    children: e
                                }) : void 0, t < r.length - 1 ? "\n" : void 0]
                            }, `${e.slice(0,10)}-${t}`))
                        })]
                    }) : void 0]
                })
            }
        },
        885175: (e, t, r) => {
            r.d(t, {
                H1: () => c,
                c3: () => l,
                n8: () => s
            });
            let n = /^connections\.mcpServer(\d*|_[a-zA-Z][a-zA-Z0-9_]*)\.runTool$/;

            function a(e) {
                return !!(e && n.test(e))
            }
            let i = ["toolName"];

            function o(e) {
                if (!(0, r(645604).u4)(e)) return e;
                let t = {};
                for (let [n, a] of (0, r(722371).WP)(e)) i.includes(String(n)) || (t[n] = a);
                return t
            }

            function s(e) {
                if (!(0, r(645604).u4)(e)) return;
                let t = Reflect.get(e, "args");
                if ((0, r(645604).u4)(t)) {
                    let e = Reflect.get(t, "toolArguments");
                    return void 0 !== e ? o(e) : o(t)
                }
                let n = Reflect.get(e, "toolArguments");
                return void 0 !== n ? o(n) : void 0
            }

            function l(e) {
                var t, n;
                if (!e || !(0, r(426048).gY)(e, "callFunction") || !a(null == (t = e.input) ? void 0 : t.function)) return;
                let i = (0, r(645604).DL)(null == (n = e.result) ? void 0 : n.output),
                    o = e.moduleInfo,
                    s = (null == o ? void 0 : o.type) === "mcpServer" ? o.name : (0, r(645604).nk)(i, ["moduleName"]),
                    l = (0, r(645604).nk)(i, ["name", "toolName"]),
                    c = (0, r(645604).W5)(e.input, ["toolName"]);
                return {
                    serverName: null == s ? void 0 : s.trim(),
                    mcpToolName: l ? ? c
                }
            }

            function c(e) {
                var t;
                return !!e && !!(0, r(426048).gY)(e, "callFunction") && a(null == (t = e.input) ? void 0 : t.function)
            }
        },
        965885: (e, t, r) => {
            r.r(t), r.d(t, {
                exclamationMarkCircleIcon: () => i,
                iconDefinition: () => a
            }), r(296540);
            var n = r(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M9.875 6.25c.345 0 .625.28.625.625v3.5a.625.625 0 1 1-1.25 0v-3.5c0-.345.28-.625.625-.625m0 7.375a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
                        }), (0, n.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                i = (0, r(104509).wt)("exclamationMarkCircle", a, "default")
        },
        983655: (e, t, r) => {
            r.d(t, {
                P: () => s
            }), r(898992), r(354520), r(581454);
            var n = r(296540),
                a = r(474848);
            let i = {
                    header: {
                        whiteSpace: "normal",
                        height: "auto"
                    },
                    icon: {
                        fill: r(632079).Tj.red.icon.accentPrimary
                    },
                    codeBlock: {
                        padding: 12,
                        borderRadius: 8,
                        backgroundColor: r(632079).Tj.codeBlockBackground
                    },
                    providerError: {
                        padding: 12
                    }
                },
                o = (0, r(109939).YK)({
                    researcherTimeout: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.researcherTimeout",
                        defaultMessage: "Research timed out, generating report with limited information"
                    },
                    researcherPlanFailure: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.researcherPlanFailure",
                        defaultMessage: "Error during research, generating report with limited information"
                    },
                    noFallbackModel: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.noFallbackModel",
                        defaultMessage: "This chat’s model provider is currently not available. Please try a different model in a new chat."
                    },
                    customAgentRateLimited: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.customAgentRateLimited",
                        defaultMessage: "Agent is being rate limited. Will retry automatically in a moment."
                    },
                    customAgentUsageLimit: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.customAgentUsageLimit",
                        defaultMessage: "This agent has hit a usage limit"
                    },
                    genericError: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.genericError",
                        defaultMessage: "An error occurred, please try again"
                    },
                    trustRuleDenied: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.trustRuleDenied",
                        defaultMessage: "This action is not currently available. Please try again later or contact support if this persists."
                    },
                    customAgentNoEditors: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.customAgentNoEditors",
                        defaultMessage: "This agent does not have any editors. Please add an editor to the agent and try again."
                    },
                    customAgentEditorAccess: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.customAgentEditorAccess",
                        defaultMessage: "This agent has permissions to resources that no editors of the agent have the same access to. Please update the permissions for {invalidPermissionBlockNames} and try again."
                    },
                    customAgentEditorAccessNoAccess: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.customAgentEditorAccessNoAccess",
                        defaultMessage: "This agent has permissions to resources that no editors of the agent have the same access to. Please update permissions for any pages that show No Access in the agent settings and try again."
                    },
                    invalidToolSchema: {
                        id: "aiInferenceTranscript.userFriendlyErrorStep.invalidToolSchema",
                        defaultMessage: "One of this agent’s connected tools has an invalid schema. Contact the MCP server provider to fix the issue."
                    }
                });

            function s(e) {
                let {
                    errorStep: t,
                    configType: s,
                    showDetailedError: l = !1,
                    spaceStore: c
                } = e, d = (0, r(109939).tz)(), u = (0, r(682985).K8)(() => {
                    if ("researcher" === s) {
                        if (/timeout/i.test(t.message)) return d.formatMessage(o.researcherTimeout);
                        else if (/Failed to generate plan:/i.test(t.message)) return d.formatMessage(o.researcherPlanFailure)
                    } else if ("no-fallback-model" === t.subType) return d.formatMessage(o.noFallbackModel);
                    else if ("custom-agent-rate-limited" === t.subType) return d.formatMessage(o.customAgentRateLimited);
                    else if ("custom-agent-usage-limit" === t.subType) return d.formatMessage(o.customAgentUsageLimit);
                    else if ("trust-rule-denied" === t.subType) return d.formatMessage(o.trustRuleDenied);
                    else if ("custom-agent-no-editors" === t.subType) return d.formatMessage(o.customAgentNoEditors);
                    else if ("invalid-tool-schema" === t.subType) return d.formatMessage(o.invalidToolSchema);
                    else if ("custom-agent-editor-access" === t.subType) {
                        if (!("missingResourceKeys" in t) || !c) return d.formatMessage(o.customAgentEditorAccessNoAccess);
                        let e = t.missingResourceKeys.map(e => r(496282).L3.fromKey(e)).filter(e => (null == e ? void 0 : e.table) === "block").map(e => {
                            let t = r(678703).Bv.createChildStore(c, e);
                            if (t.canRead()) return t.getTitleValue()
                        }).filter(r(722371).O9);
                        return 0 === e.length ? d.formatMessage(o.customAgentEditorAccessNoAccess) : d.formatMessage(o.customAgentEditorAccess, {
                            invalidPermissionBlockNames: e.join(", ")
                        })
                    }
                    return d.formatMessage(o.genericError)
                }, [t, s, c, d]), p = n.useMemo(() => (function(e) {
                    if ("invalid-tool-schema" !== e.subType) return;
                    let t = e.message.match(/Invalid schema for function [^"]*'[^']*'[^"]*/);
                    return null == t ? void 0 : t[0]
                })(t), [t]), g = n.useMemo(() => {
                    if (!l) return;
                    let {
                        stack: e,
                        ...r
                    } = t;
                    return JSON.stringify(r, null, 2)
                }, [t, l]), f = (0, a.jsx)(r(111010).D, {
                    styleKey: "bodyRegular",
                    colorVariant: "secondary",
                    children: u
                });
                return l && g ? (0, a.jsx)(r(479854).b, {
                    label: f,
                    icon: r(966559).exclamationMarkCircleSmallIcon,
                    headerStyle: i.header,
                    iconStyle: i.icon,
                    isToggleEnabled: !0,
                    children: p ? (0, a.jsx)("div", {
                        style: i.providerError,
                        children: (0, a.jsx)(r(111010).D, {
                            styleKey: "bodySm",
                            colorVariant: "tertiary",
                            children: p
                        })
                    }) : (0, a.jsx)("div", {
                        style: i.codeBlock,
                        children: (0, a.jsx)(r(140102).O, {
                            value: g ? ? "",
                            language: "json"
                        })
                    })
                }) : (0, a.jsx)(r(75224).N, {
                    icon: r(966559).exclamationMarkCircleSmallIcon,
                    title: f
                })
            }
        },
        992463: (e, t, r) => {
            r.d(t, {
                m: () => c
            });
            var n = r(296540);
            r(898992), r(672577), r(430670), r(581454);
            var a = r(474848);
            let i = {
                    summaryCard: {
                        borderRadius: 16,
                        background: r(632079).Tj.background.primary,
                        boxShadow: r(632079).Tj.shadow.outline.sm,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        padding: "12px 16px 16px"
                    },
                    summaryCardCompact: {
                        borderRadius: 12,
                        gap: 8,
                        padding: "10px 12px 12px"
                    },
                    divider: {
                        width: "100%",
                        height: 1,
                        background: r(632079).Tj.border.secondary,
                        flexShrink: 0
                    },
                    answerText: {
                        fontSize: 16,
                        lineHeight: "24px",
                        color: r(632079).Tj.text.primary
                    },
                    answerTextCompact: {
                        fontSize: 14,
                        lineHeight: "20px"
                    }
                },
                o = (0, n.memo)(function(e) {
                    let {
                        value: t,
                        compact: o
                    } = e, {
                        store: s,
                        setValue: l
                    } = (0, r(430937).AI)({
                        initialValue: t,
                        shouldUseDefaultRecordCacheFallback: !0
                    });
                    return (0, n.useEffect)(() => {
                        JSON.stringify(s.getValue() ? ? []) !== JSON.stringify(t) && l(t)
                    }, [l, s, t]), (0, a.jsx)(r(53373).A, {
                        store: s,
                        disabled: !0,
                        inPageFind: r(831719).Os.none,
                        disableEquationInteraction: !0,
                        style: { ...i.answerText,
                            ...o && i.answerTextCompact
                        }
                    })
                }),
                s = (0, n.memo)(function(e) {
                    let {
                        questions: t,
                        responses: s,
                        compact: l = !1,
                        spaceId: c
                    } = e, d = function(e) {
                        let {
                            questions: t,
                            spaceId: a
                        } = e, i = (0, r(533992).v3)(), o = (0, r(109939).tz)(), s = (0, n.useMemo)(() => (0, r(347403).av)(t), [t]), l = (0, n.useMemo)(() => a && 0 !== s.length ? s.map(e => new(r(970831)).B(i, {
                            table: r(832375).evP,
                            id: e,
                            spaceId: a
                        })) : [], [i, s, a]);
                        return (0, n.useEffect)(() => {
                            for (let e of l) e.load()
                        }, [l]), (0, r(682985).K8)(() => (0, r(347403).qi)({
                            pageIds: s,
                            getTitle: e => {
                                var t;
                                return null == (t = l.find(t => t.id === e)) ? void 0 : t.getRenderTitle({
                                    intl: o,
                                    userTimeZone: (0, r(714350).P)()
                                })
                            }
                        }), [l, o, s])
                    }({
                        questions: t,
                        spaceId: c
                    });
                    return (0, a.jsx)("div", {
                        style: { ...i.summaryCard,
                            ...l && i.summaryCardCompact
                        },
                        children: t.map((e, t) => {
                            let u = function(e) {
                                let {
                                    question: t,
                                    response: n,
                                    spaceId: a,
                                    pageTitleById: i
                                } = e;
                                return void 0 === n ? (0, r(247438).x9d)("(skipped)") : (Array.isArray(n) ? n : [n]).flatMap((e, n) => [...0 === n ? [] : (0, r(247438).x9d)(", "), ... function(e) {
                                    let {
                                        question: t,
                                        value: n,
                                        spaceId: a,
                                        pageTitleById: i
                                    } = e;
                                    if (n === r(180139).qr) return (0, r(247438).x9d)("Other");
                                    if ((0, r(180139).c9)(n)) return [...(0, r(247438).x9d)("Other: "), ...n.value];
                                    if (n.startsWith(r(180139).$_)) {
                                        let e = n.slice(r(180139).$_.length);
                                        return e ? (0, r(247438).x9d)(`Other: ${e}`) : (0, r(247438).x9d)("Other")
                                    }
                                    return (0, r(347403).HD)({
                                        question: t,
                                        optionId: n,
                                        spaceId: a,
                                        pageTitleById: i
                                    })
                                }({
                                    question: t,
                                    value: e,
                                    spaceId: a,
                                    pageTitleById: i
                                })])
                            }({
                                question: e,
                                response: s[e.id],
                                spaceId: c,
                                pageTitleById: d
                            });
                            return (0, a.jsxs)(n.Fragment, {
                                children: [t > 0 ? (0, a.jsx)("div", {
                                    style: i.divider
                                }) : void 0, (0, a.jsxs)(r(4458).VP, {
                                    gap: 4,
                                    children: [(0, a.jsx)(r(111010).D, {
                                        styleKey: l ? "bodySmRegular" : "bodyRegular",
                                        colorVariant: "secondary",
                                        children: e.prompt
                                    }), (0, a.jsx)(o, {
                                        value: u,
                                        compact: l
                                    })]
                                })]
                            }, e.id)
                        })
                    })
                }),
                l = {
                    marginBottom: 16
                };

            function c(e) {
                let {
                    step: t,
                    clientStore: n,
                    threadStore: i,
                    runningInference: o,
                    compactSurveySummary: c = !1
                } = e, d = (0, r(682985).K8)(() => (function(e, t) {
                    let n = e.getTranscript();
                    if (t.surveyStepId) {
                        for (let e of n)
                            if (e && "survey" === e.type && e.id === t.surveyStepId) return e;
                        return
                    }
                    if ((0, r(997486).ar)((0, r(997486).i)(n))) return;
                    let a = !1;
                    for (let e = n.length - 1; e >= 0; e--) {
                        let r = n[e];
                        if (r) {
                            if (r.id === t.id) {
                                a = !0;
                                continue
                            }
                            if (a && "survey" === r.type && r.submitted && r.responses) return r
                        }
                    }
                })(i, t), [i, t]), u = (0, r(682985).K8)(() => i.getSpaceId(), [i]);
                if (null != d && d.responses) return (0, a.jsx)("div", {
                    style: l,
                    "data-agent-chat-user-step-id": t.id,
                    children: (0, a.jsx)(s, {
                        questions: d.questions,
                        responses: d.responses,
                        spaceId: u,
                        compact: c
                    })
                });
                if (!t.displayMessage) return null;
                let p = {
                    id: t.id,
                    type: "user",
                    value: t.displayMessage,
                    userId: t.userId || "",
                    createdAt: t.createdAt
                };
                return (0, a.jsx)(r(284376).IT, {
                    step: p,
                    clientStore: n,
                    threadStore: i,
                    runningInference: o,
                    useAgentFontSizing: !0,
                    autoScrollUserStepId: t.id
                })
            }
        }
    }
]);