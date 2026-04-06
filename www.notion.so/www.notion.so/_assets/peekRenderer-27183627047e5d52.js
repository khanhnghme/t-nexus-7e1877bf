"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [43151], {
        5750: (e, t, r) => {
            r.d(t, {
                X: () => o
            }), r(296540);
            var i = r(474848);
            let a = {
                button: {
                    position: "relative",
                    columnGap: 8
                },
                dirtyDotInline: {
                    width: 8,
                    height: 8,
                    marginInlineStart: 2,
                    backgroundColor: r(632079).Tj.blue.background.accentPrimary,
                    borderRadius: "50%",
                    pointerEvents: "none"
                },
                dirtyDotAbsolute: {
                    position: "absolute",
                    top: -2,
                    insetInlineEnd: -2,
                    width: 8,
                    height: 8,
                    backgroundColor: r(632079).Tj.blue.background.accentPrimary,
                    outlineWidth: 2,
                    outlineStyle: "solid",
                    outlineColor: r(632079).Tj.whiteButtonBackground,
                    borderRadius: "50%",
                    pointerEvents: "none"
                }
            };

            function o(e) {
                let {
                    onClick: t,
                    showDirtyDot: o
                } = e, n = (0, r(533992).v3)(), s = (0, r(109939).tz)(), l = (0, r(682985).K8)(() => (e.containerWidth ? ? (0, r(936221).U)(n)) >= 550, [n, e.containerWidth]);
                return (0, i.jsxs)(r(988022).p, {
                    iconLeading: {
                        icon: r(213039).M,
                        size: "default"
                    },
                    onClick: t,
                    "aria-label": s.formatMessage({
                        defaultMessage: "Settings",
                        id: "agentTopbar.flippy.settings.ariaLabel"
                    }),
                    style: a.button,
                    children: [l ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(r(109939).sA, {
                            defaultMessage: "Settings",
                            id: "agentTopbar.flippy.settings.label"
                        }), o && l ? (0, i.jsx)("span", {
                            style: a.dirtyDotInline
                        }) : void 0]
                    }) : void 0, o && !l ? (0, i.jsx)("span", {
                        style: a.dirtyDotAbsolute
                    }) : void 0]
                })
            }
        },
        6591: (e, t, r) => {
            r.d(t, {
                E: () => l
            }), r(16280);
            var i = r(296540);
            let a = {
                    SimpleMonacoWrapper: new(r(815048)).O2("SimpleMonacoWrapper", async () => {
                        let [e, t, i] = await Promise.all([r.e(89440).then(r.bind(r, 262795)).then(e => e.default), r.e(79508).then(r.bind(r, 668553)).then(e => e.loader), Promise.all([r.e(79508), r.e(62989)]).then(r.bind(r, 985687))]);
                        return t.config({
                            monaco: e
                        }), i
                    })
                },
                o = (0, r(815048)._h)(a.SimpleMonacoWrapper, e => e.SimpleMonacoWrapper);
            var n = r(474848);
            let s = {
                position: "absolute",
                top: 8,
                insetInlineEnd: 12,
                display: "flex",
                gap: 8,
                zIndex: 1
            };

            function l(e) {
                let {
                    value: t,
                    onSave: a,
                    disabled: l,
                    language: d = "typescript",
                    onFocus: c,
                    onBlur: u,
                    onChange: p,
                    fetchTypescriptImports: g,
                    fillHeight: f
                } = e, h = (0, i.useRef)(null), [m, v] = i.useState(t), S = (0, r(668745).ZC)(t);
                i.useEffect(() => {
                    if (S === m && t !== S) {
                        var e;
                        v(t), null == (e = h.current) || e.setValue(t)
                    }
                }, [m, S, t]);
                let y = (0, i.useCallback)(() => {
                        if (m !== t) try {
                            null == a || a(m)
                        } catch (e) {
                            console.error(e), e instanceof Error && r(647095).rG({
                                message: e.message
                            })
                        }
                    }, [a, m, t]),
                    x = (0, i.useCallback)(() => {
                        var e;
                        v(t), null == (e = h.current) || e.setValue(t)
                    }, [t]),
                    b = (0, i.useCallback)(e => {
                        v(e ? ? ""), null == p || p(e ? ? "")
                    }, [p]),
                    w = (0, i.useCallback)(e => {
                        h.current = e
                    }, []),
                    [k, j] = i.useState(void 0);
                (0, r(97668).Yb)(async () => {
                    g && j(await g())
                }, [g]);
                let _ = (0, r(960253).I)(() => ({
                    container: {
                        position: "relative",
                        borderRadius: 8 * !f,
                        overflow: "hidden",
                        height: f ? "100%" : "50vh",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 400
                    }
                }), [f]);
                return (0, n.jsxs)("div", {
                    style: _.container,
                    children: [t !== m ? (0, n.jsxs)("div", {
                        style: s,
                        children: [(0, n.jsx)(r(988022).p, {
                            onClick: x,
                            children: (0, n.jsx)(r(109939).sA, {
                                defaultMessage: "Discard",
                                id: "workflow.monacoCodeBlock.discard"
                            })
                        }), (0, n.jsx)(r(988022).p, {
                            onClick: y,
                            children: (0, n.jsx)(r(109939).sA, {
                                defaultMessage: "Save changes",
                                id: "workflow.monacoCodeBlock.save"
                            })
                        })]
                    }) : void 0, (0, n.jsx)(o, {
                        language: d,
                        value: m,
                        disabled: l,
                        onChange: b,
                        onMount: w,
                        onFocus: c,
                        onBlur: u,
                        imports: k
                    })]
                })
            }
        },
        10681: (e, t, r) => {
            r.d(t, {
                k: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    workflowName: a,
                    workflowIcon: o,
                    sourceWorkflowPointer: n,
                    parentPointer: s
                } = e, l = t.currentUser.id, d = null == i ? void 0 : i.id;
                if (!l || !d) return;
                let c = (0, r(295447).Z1)({
                        environment: t,
                        table: r(43296).C,
                        spaceId: d
                    }),
                    u = s ? ? i.pointer,
                    {
                        performResult: p,
                        serverCommitResult: g
                    } = (0, r(377796).createAndCommit)({
                        environment: t,
                        userAction: "duplicateWorkflow.createPlaceholder",
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: d
                        },
                        perform: e => {
                            let s = { ...(0, r(425749).bZ)(),
                                    name: a,
                                    icon: o,
                                    duplication_status: {
                                        type: "duplicating",
                                        source_workflow_pointer: n,
                                        started_at: Date.now(),
                                        user_id: l
                                    }
                                },
                                p = r(124937).vt({
                                    environment: t,
                                    table: r(43296).C,
                                    args: {
                                        id: c,
                                        parentPointer: u,
                                        space_id: d,
                                        data: s,
                                        createdByPointer: {
                                            table: r(514214).oo,
                                            id: l
                                        },
                                        permissions: [{
                                            type: "user_permission",
                                            role: "editor",
                                            user_id: l
                                        }]
                                    },
                                    inMemoryRecordCache: i.inMemoryRecordCache,
                                    transaction: e
                                }),
                                g = (0, r(295447).Z1)({
                                    environment: t,
                                    table: r(682956).ev,
                                    spaceId: d
                                }),
                                f = r(124937).Wv({
                                    environment: t,
                                    id: g,
                                    type: "page",
                                    spaceId: d,
                                    transaction: e,
                                    inMemoryRecordCache: i.inMemoryRecordCache,
                                    createdByTable: r(514214).oo,
                                    createdById: l
                                }),
                                h = (0, r(295447).Z1)({
                                    environment: t,
                                    table: r(682956).ev,
                                    spaceId: d
                                }),
                                m = r(124937).Wv({
                                    environment: t,
                                    id: h,
                                    type: "text",
                                    spaceId: d,
                                    transaction: e,
                                    inMemoryRecordCache: i.inMemoryRecordCache,
                                    createdByTable: r(514214).oo,
                                    createdById: l
                                });
                            return r(579695).NI({
                                parentStore: f.getContentStore(),
                                childStore: m,
                                transaction: e
                            }), r(161606).b({
                                transaction: e,
                                childStore: f,
                                parentStore: p,
                                alive: !0
                            }), (0, r(421439).y4)({
                                store: p,
                                operation: {
                                    pointer: p.pointer,
                                    command: "set",
                                    path: ["data", "instructions"],
                                    args: {
                                        table: r(682956).ev,
                                        id: g,
                                        spaceId: d
                                    }
                                },
                                transaction: e
                            }), p
                        }
                    });
                return {
                    workflowStore: p,
                    serverCommitResult: g
                }
            }
        },
        33402: (e, t, r) => {
            r.d(t, {
                J: () => a
            });
            let i = new(r(815048)).O2("PageAttributionHoverCard", async () => await r.e(73458).then(r.bind(r, 373592))),
                a = (0, r(815048)._h)(i, e => e.PageAttributionHoverCard)
        },
        35838: (e, t, r) => {
            async function i(e) {
                var t;
                let {
                    environment: i,
                    sudoModeStore: a,
                    sidebarSpaceStore: o,
                    targetPointer: n,
                    isAlreadyLoaded: s,
                    clearLoadedStore: l,
                    buildStore: d,
                    buildRequest: c
                } = e;
                if (r(986939).A.isMobile || s || a.state.loading || a.state.error) return;
                await r(218744).default.waitUntilStatsigReadyAsync();
                let u = o.isReady() && o.canAdmin(),
                    p = await (t = o.id, (0, r(655293).S)(i, {
                        name: "sudo_mode",
                        spaceId: t,
                        userId: i.currentUser.id
                    }));
                if (!n.id || !u || !p) return;
                a.setState({ ...a.state,
                    loading: !0
                }), l();
                let g = c(n),
                    f = await i.api.callApi({
                        eventName: "getPrivateRecordInfo",
                        environment: i,
                        data: g
                    });
                if ("failed" === f.type) return void a.setState({ ...a.state,
                    loading: !1,
                    error: f.error
                });
                let h = d({
                    environment: i,
                    recordId: n.id,
                    privateRecordCacheName: r(574698).Rb,
                    ancestorData: f.data,
                    spaceId: o.id
                });
                return a.setState({ ...a.state,
                    loading: !1,
                    error: void 0
                }), h
            }
            async function a(e) {
                let {
                    environment: t,
                    sudoModeStore: a,
                    pageBlockId: o,
                    sidebarSpaceStore: s
                } = e, l = a.state.privatePageStore && a.state.privatePageStore.id === o;
                if (!o || !s) return;
                let d = await i({
                    environment: t,
                    sudoModeStore: a,
                    sidebarSpaceStore: s,
                    targetPointer: {
                        id: o,
                        table: r(832375).evP,
                        spaceId: s.id
                    },
                    isAlreadyLoaded: !!l,
                    clearLoadedStore: () => a.setState({ ...a.state,
                        privatePageStore: void 0
                    }),
                    buildStore: e => n({ ...e,
                        recordTable: r(832375).evP
                    }),
                    buildRequest: e => ({
                        recordPointer: e
                    })
                });
                d && a.setState({ ...a.state,
                    privatePageStore: d
                })
            }
            async function o(e) {
                let {
                    environment: t,
                    sudoModeStore: a,
                    workflowId: o,
                    sidebarSpaceStore: s
                } = e, l = a.state.privateWorkflowStore && a.state.privateWorkflowStore.id === o;
                if (!o || !s) return;
                let d = await i({
                    environment: t,
                    sudoModeStore: a,
                    sidebarSpaceStore: s,
                    targetPointer: {
                        id: o,
                        table: r(832375).C0E,
                        spaceId: s.id
                    },
                    isAlreadyLoaded: !!l,
                    clearLoadedStore: () => a.setState({ ...a.state,
                        privateWorkflowStore: void 0
                    }),
                    buildStore: e => n({ ...e,
                        recordTable: r(832375).C0E
                    }),
                    buildRequest: e => ({
                        recordPointer: e
                    })
                });
                d && a.setState({ ...a.state,
                    privateWorkflowStore: d
                })
            }

            function n(e) {
                let t, {
                        environment: i,
                        recordId: a,
                        recordTable: o,
                        privateRecordCacheName: n,
                        ancestorData: s,
                        spaceId: l
                    } = e,
                    d = new(r(870941)).A({
                        name: n
                    });
                for (let e of s) switch (e.table) {
                    case "block":
                    case "collection":
                    case "workflow":
                    case "team":
                        d.setRecord({
                            pointer: {
                                spaceId: l,
                                table: e.table,
                                id: e.value.id
                            },
                            userId: i.currentUser.id
                        }, {
                            role: "editor",
                            value: e.value
                        })
                }
                return o === r(832375).evP ? t = new(r(970831)).B(i, {
                    id: a,
                    table: r(832375).evP
                }, {
                    inMemoryRecordCache: d
                }) : o === r(832375).VlP ? t = new(r(356912)).m(i, {
                    id: a,
                    table: r(832375).VlP
                }, {
                    inMemoryRecordCache: d
                }) : o === r(832375).C0E ? t = new(r(360851)).N(i, {
                    id: a,
                    table: r(832375).C0E,
                    spaceId: l
                }, {
                    inMemoryRecordCache: d
                }) : (0, r(722371).HB)(o), t.inMemoryRecordCache.addCacheFallback(i.defaultRecordCache.inMemoryRecordCache), t
            }
            r.d(t, {
                BX: () => a,
                YL: () => o,
                lE: () => n
            })
        },
        48542: (e, t, r) => {
            r.d(t, {
                A: () => o
            }), r(296540);
            var i = r(474848);
            let a = {
                    separator: {
                        height: 14,
                        width: 1,
                        marginInlineStart: 6,
                        marginInlineEnd: 6,
                        background: r(632079).Tj.border.primaryTranslucent
                    }
                },
                o = function() {
                    return (0, i.jsx)("div", {
                        style: a.separator
                    })
                }
        },
        87822: (e, t, r) => {
            r.d(t, {
                J: () => i
            });

            function i(e) {
                let {
                    spaceViewStore: t,
                    pageId: r
                } = e;
                return !!t && !!r && -1 !== t.getBookmarkedPageIds().indexOf(r)
            }
        },
        121930: (e, t, r) => {
            r.d(t, {
                w: () => a
            });
            let i = {
                    UncollectibleExperienceOverlay: new(r(815048)).O2("UncollectibleExperienceOverlay", async () => r.e(36432).then(r.bind(r, 575220)))
                },
                a = (0, r(815048)._h)(i.UncollectibleExperienceOverlay, e => e.UncollectibleExperienceOverlay)
        },
        127338: (e, t, r) => {
            r.d(t, {
                x: () => a
            });
            let i = new(r(815048)).O2("BannersRenderer", async () => Promise.all([r.e(75134), r.e(9773), r.e(40537), r.e(96346), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(23519), r.e(63771), r.e(53847), r.e(17250), r.e(26997), r.e(73259), r.e(33503), r.e(48486), r.e(96579), r.e(30532), r.e(73588), r.e(69684), r.e(76298), r.e(84444), r.e(23644), r.e(2337), r.e(31190), r.e(89563), r.e(61915), r.e(79563), r.e(74936), r.e(98608), r.e(87569), r.e(94153)]).then(r.bind(r, 309203))),
                a = (0, r(815048)._h)(i, e => e.BannersRenderer)
        },
        137032: (e, t, r) => {
            r.d(t, {
                z: () => i
            });

            function i(e) {
                r(984858).sidebarWidthStore.setState(e.width), (0, r(936221).U)(e.environment) < r(655567).gJ && r(270912).VN({
                    environment: e.environment,
                    from: "sidebar_expand"
                }), (0, r(455108).Z)()
            }
        },
        140102: (e, t, r) => {
            r.d(t, {
                O: () => l,
                X: () => d
            }), r(16280);
            var i = r(296540),
                a = r(474848);
            let o = {
                container: {
                    position: "relative",
                    background: r(632079).Tj.gray.background.primary,
                    padding: 16,
                    borderRadius: 12
                },
                input: {
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    fontFamily: "monospace",
                    color: r(632079).Tj.text.primary,
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

            function n(e) {
                let {
                    value: t,
                    onSave: n,
                    disabled: s,
                    onFocus: d,
                    onBlur: c
                } = e, [u, p] = i.useState(!1), [g, f] = i.useState(void 0), h = (0, i.useCallback)(e => {
                    f(e.target.value)
                }, []), m = (0, i.useCallback)(() => {
                    if (void 0 !== g) try {
                        null == n || n(g), f(void 0), p(!1)
                    } catch (e) {
                        console.error(e), e instanceof Error && r(647095).rG({
                            message: e.message
                        })
                    }
                }, [n, g]), v = (0, i.useCallback)(() => {
                    f(void 0), p(!1)
                }, []), S = (0, i.useCallback)(() => {
                    p(!0), f(t)
                }, [t]);
                return s ? (0, a.jsx)(l, { ...e
                }) : (0, a.jsxs)("div", {
                    style: o.container,
                    children: [(0, a.jsx)("div", {
                        style: o.controls,
                        children: u ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(r(988022).p, {
                                onClick: v,
                                children: (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Discard",
                                    id: "workflow.codeBlock.discard"
                                })
                            }), (0, a.jsx)(r(988022).p, {
                                onClick: m,
                                children: (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Save",
                                    id: "workflow.codeBlock.save"
                                })
                            })]
                        }) : (0, a.jsx)(r(988022).p, {
                            onClick: S,
                            children: (0, a.jsx)(r(109939).sA, {
                                defaultMessage: "Edit",
                                id: "workflow.codeBlock.edit"
                            })
                        })
                    }), u ? (0, a.jsx)(r(36481).p, {
                        value: void 0 !== g ? g : t,
                        onChange: h,
                        textarea: !0,
                        style: o.input,
                        autosize: !0,
                        autosizeMinHeight: 80,
                        onFocus: d,
                        onBlur: c
                    }) : (0, a.jsx)(l, { ...e
                    })]
                })
            }
            let s = {
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                userSelect: "text",
                WebkitUserSelect: "text",
                cursor: "text",
                fontFamily: "monospace",
                margin: 0,
                fontSize: 12
            };

            function l(e) {
                let {
                    value: t,
                    language: o = "typescript",
                    styles: n
                } = e, {
                    value: l
                } = (0, r(815048).fJ)(r(832737).y), d = i.useMemo(() => l ? l.highlight(t, l.languages[o] || l.languages.javascript, o) : t, [l, t, o]), c = (0, i.useCallback)(e => {
                    e.stopPropagation()
                }, []);
                return (0, a.jsx)("div", {
                    style: { ...s,
                        ...n
                    },
                    dangerouslySetInnerHTML: {
                        __html: d
                    },
                    onCopy: c
                })
            }

            function d(e) {
                let t = (0, r(533992).v3)(),
                    [o, s] = (0, i.useState)(!1),
                    l = (0, i.useCallback)(() => {
                        s(!0), (0, r(525779).clear)({
                            environment: t
                        })
                    }, [t]),
                    d = (0, i.useCallback)(() => {
                        s(!1)
                    }, []),
                    c = ((0, r(83208).X)("ai_workflows_monaco_code_editor"), !1);
                return (0, a.jsx)(r(790124).A, {
                    capture: o,
                    debugName: "SimpleCodeBlock",
                    children: () => c ? (0, a.jsx)(r(6591).E, { ...e,
                        onFocus: l,
                        onBlur: d
                    }) : (0, a.jsx)(n, { ...e,
                        onFocus: l,
                        onBlur: d
                    })
                })
            }
        },
        141342: (e, t, r) => {
            r.d(t, {
                l: () => i().l
            });
            var i = () => r(748356)
        },
        152208: (e, t, r) => {
            r.r(t), r.d(t, {
                eyeIcon: () => o,
                iconDefinition: () => a
            }), r(296540);
            var i = r(474848);
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
                o = (0, r(104509).wt)("eye", a, "default")
        },
        167279: (e, t, r) => {
            r.d(t, {
                default: () => e_
            });
            var i = r(296540);
            r(898992), r(737550);
            var a = r(474848);
            let o = {
                    display: "flex",
                    alignItems: "center",
                    fontSize: 14,
                    minWidth: 0
                },
                n = {
                    style0: {
                        color: r(632079).Tj.text.secondary,
                        marginInlineEnd: 4
                    },
                    style1: {
                        color: r(632079).Tj.text.inverseSecondary
                    }
                };

            function s(e, t) {
                return e && e instanceof r(695906).SpaceStore && t && e.id === t.id
            }
            let l = {
                privatePagesText: {
                    fontWeight: r(699422).Wy.medium,
                    marginInlineStart: 4,
                    ...r(699422).RC,
                    overflow: "hidden"
                },
                icon: {
                    marginInlineEnd: 4,
                    marginTop: 1
                },
                title: {
                    fontWeight: r(699422).Wy.semibold
                }
            };

            function d(e) {
                let {
                    parentStore: t,
                    prefixText: i
                } = e, o = (0, r(533992).v3)(), n = (0, r(682985).K8)(() => (0, r(427846)._)(o), [o]), d = (0, r(682985).K8)(() => t instanceof r(970831).B && t.isEmptyPage(), [t]), c = (0, r(682985).K8)(() => t.getIcon(), [t]), u = (0, r(682985).K8)(() => t instanceof r(695906).SpaceStore ? (0, r(742197).G)(o, t) : void 0, [o, t]), p = (0, r(682985).K8)(() => s(t, r(728372).AppStoreSidebarSpaceStore.state), [t]), g = (0, r(682985).K8)(() => (0, r(569553).Te)(t), [t]);
                return p ? (0, a.jsxs)(a.Fragment, {
                    children: [i, (0, a.jsx)(r(321753).A, {
                        size: 22,
                        avatarShouldShowShadow: !0,
                        userStore: n
                    }), (0, a.jsx)("span", {
                        style: l.privatePagesText,
                        children: (0, a.jsx)(r(109939).sA, {
                            defaultMessage: "Private pages",
                            id: "peekMoveToMenu.addTo.privatePages"
                        })
                    })]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [i, (0, a.jsx)(r(569553).B6, {
                        disabled: !0,
                        icon: c,
                        iconRecordCategory: g,
                        isEmptyPage: d,
                        title: u,
                        size: 18,
                        style: l.icon
                    }), (0, a.jsx)(r(627918).A, {
                        style: l.title,
                        store: t
                    })]
                })
            }
            let c = function({
                store: e,
                prefix: t,
                saveParent: l,
                pageType: c,
                forceUntyped: u
            }) {
                let p = (0, r(533992).v3)(),
                    g = (0, r(682985).K8)(() => {
                        let e = r(728372).AppStoreMainEditorCurrentBlockStore.state;
                        return e && (0, r(933062).lU)(e) ? "home_tab" : e && (0, r(829435).s)(e.id) ? "aggregated_type" : "quick_add"
                    }, []),
                    f = (0, r(682985).K8)(() => e.getParentStore(), [e]),
                    h = (0, i.useRef)(null),
                    m = (0, i.useCallback)(t => {
                        var i, a, o, n, d, f, m, v, S;
                        return i = t, a = h.current, o = p, n = e, d = l, f = g, m = c, v = u, void(i.preventDefault(), a && r(351198).ho({
                            environment: o,
                            blocks: [n],
                            originRect: a.getBoundingClientRect(),
                            moveToContext: f,
                            onAccept: ({
                                value: e
                            }) => {
                                let t;
                                (t = r(728372).AppStoreSidebarSpaceStore.state) && d && function(e) {
                                    let {
                                        pageType: t,
                                        spaceStore: i,
                                        currentUserId: a,
                                        result: o
                                    } = e;
                                    (0, r(936500).lQ)({
                                        currentUserId: a,
                                        spaceId: i.id,
                                        value: o
                                    }), t && (0, r(936500).tj)({
                                        currentUserId: a,
                                        spaceId: i.id,
                                        databaseType: r(8148).W7[t],
                                        parent: o
                                    })
                                }({
                                    pageType: m,
                                    spaceStore: t,
                                    currentUserId: o.currentUser.id,
                                    result: e
                                })
                            },
                            isAddTo: !0,
                            isDefaultPrivateLocation: s(n.getParentStore(), r(728372).AppStoreSidebarSpaceStore.state),
                            disableSuccessToast: !0,
                            forceUntyped: v || !(S = m) || "page" === S
                        }))
                    }, [h, p, e, l, g, c, u]);
                if (f && !(f instanceof r(519219).j) && !(f instanceof r(464011).b) && !(f instanceof r(547131).p) && !(f instanceof r(97746).K) && !(f instanceof r(712193).Z) && !(f instanceof r(922014).g) && !(f instanceof r(360851).N)) {
                    let e = t ? (0, a.jsx)("span", {
                        style: n.style0,
                        children: (0, a.jsx)(r(109939).sA, { ...t
                        })
                    }) : void 0;
                    return (0, a.jsx)(r(369064).N, {
                        debugName: "PeekMoveToMenu",
                        capture: !0,
                        onMoveTo: m,
                        children: (0, a.jsx)("div", {
                            style: o,
                            children: (0, a.jsx)(r(51831).m, {
                                content: () => (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)(r(109939).sA, {
                                        defaultMessage: "Set the default page or database",
                                        id: "peekMoveToMenu.tooltip"
                                    }), (0, a.jsx)("br", {}), (0, a.jsx)(r(693592).A, {
                                        style: n.style1,
                                        name: "moveTo"
                                    })]
                                }),
                                children: t => (0, a.jsx)(r(988022).p, {
                                    onClick: m,
                                    ref: h,
                                    shouldShrink: !0,
                                    iconTrailing: {
                                        icon: r(595453).arrowChevronSingleDownSmallIcon,
                                        colorVariant: "tertiary",
                                        size: "xs"
                                    },
                                    ...t,
                                    children: (0, a.jsx)(d, {
                                        parentStore: f,
                                        prefixText: e
                                    })
                                })
                            })
                        })
                    })
                }
                return null
            };
            r(672577), r(581454);
            let u = (0, r(109939).YK)({
                    changeForThisView: {
                        id: "peekTopbar.changePeekOption.changeForThisView",
                        defaultMessage: "Edit view default"
                    },
                    switchPeekMode: {
                        id: "peekTopbar.openPagesAs.button",
                        defaultMessage: "Switch peek mode"
                    },
                    openInNewTab: {
                        id: "peekTopbar.openInNewTab",
                        defaultMessage: "New tab"
                    }
                }),
                p = {
                    style0: {
                        minWidth: 190
                    },
                    style2: {
                        width: r(104509).Ev.default,
                        height: r(104509).Ev.default,
                        fill: r(632079).Tj.icon.secondary
                    }
                },
                g = function({
                    store: e,
                    onClick: t,
                    onDismissPopup: i,
                    onClosePeek: o
                }) {
                    let n = (0, r(533992).v3)(),
                        s = (0, r(109939).tz)();
                    (0, r(383953).l)(() => {
                        let e = h(),
                            t = r(475097).default.getPeekMode();
                        e.find(e => r(381453).n4(e.key, t)) || r(773352).log({
                            level: "warning",
                            from: "TopbarPeekModeButton",
                            type: "InvalidSelectedPeekMode",
                            error: (0, r(416607).convertErrorToLog)("Selected key is invalid.")
                        })
                    });
                    let l = h(),
                        d = (0, r(682985).K8)(() => r(475097).default.getPeekMode(), []);
                    return d ? (0, a.jsx)(r(656252).A, {
                        popupType: r(986939).A.isMobile ? r(182718).nl.SlideUp : r(182718).nl.Popup,
                        alignmentToOrigin: "center",
                        placementToOrigin: "bottom",
                        style: p.style0,
                        originGap: 0,
                        onClick: () => {
                            (function(e) {
                                if (!r(475097).default.state.open) return;
                                let t = r(475097).default.state.collectionContextStore;
                                t ? (0, r(567442).m)({
                                    environment: e,
                                    collectionStore: t.collectionStore(),
                                    collectionViewStore: t.collectionViewStore(),
                                    from: "peek_topbar",
                                    peek_target_id: r(475097).default.state.targetStore.id,
                                    from_peek_mode: r(475097).default.state.mode
                                }) : r(20557).pU(e, {
                                    from: "peek_topbar",
                                    peek_target_id: r(475097).default.state.targetStore.id,
                                    from_peek_mode: r(475097).default.state.mode
                                })
                            })(n), t && t()
                        },
                        onClose: i,
                        content: t => (0, a.jsx)(f, {
                            parent: t,
                            currentPeekMode: d,
                            options: l,
                            store: e,
                            onClosePeek: o
                        }),
                        children: e => (0, a.jsx)(r(51831).m, {
                            content: () => s.formatMessage(u.switchPeekMode),
                            children: t => (0, a.jsxs)(r(4458).fI, {
                                alignItems: "center",
                                gap: 2,
                                children: [(0, a.jsx)(r(48542).A, {}), (0, a.jsx)(r(374533).A, { ...e,
                                    ...t,
                                    icon: (0, r(476670).qg)(d),
                                    iconStyle: p.style2,
                                    ariaLabel: s.formatMessage(u.switchPeekMode)
                                })]
                            })
                        })
                    }) : null
                };

            function f({
                currentPeekMode: e,
                options: t,
                store: i,
                onClosePeek: o,
                parent: n
            }) {
                let s, l = (0, r(109939).tz)(),
                    d = (0, r(533992).v3)();
                s = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.ActionSheet
                } : {
                    menuType: r(649476).gu.Popup,
                    width: 220
                };
                let c = (0, r(682985).K8)(() => r(381453).oE([...t.map((t, o) => {
                        var s, l, c;
                        let u, p, g, f, h = t.key,
                            m = "full_page" === h ? (0, r(483227).Ay)({
                                store: i,
                                fullyQualified: !1,
                                pageVisitSource: r(254656).y8.Expand
                            }) : (s = d, l = h, c = i, u = r(728372).AppStoreMainEditorCurrentBlockStore.state, p = (0, r(399348).f)(c, {
                                includeTeamHomeFeed: !1,
                                includeDataSources: !1
                            }), f = (g = c.isNavigableBlock() ? p.slice(1) : [...p]).length > 0 ? g[0] : void 0, (0, r(28630).wy)({
                                environment: s,
                                store: c,
                                mainEditorCurrentBlockStore: f instanceof r(970831).B && !r(475097).default.state.open ? f : u,
                                collectionContextStore: r(475097).default.state.collectionContextStore,
                                fullyQualified: !1,
                                overridePeekMode: (0, r(475097).getPeekModeFromCollectionPeekModeFormat)(l)
                            }));
                        return {
                            key: o,
                            render: i => (0, a.jsx)(r(68774).N, {
                                href: m,
                                onClick: () => {
                                    var t;
                                    r(20557).z9(d, {
                                        from: "peek_topbar",
                                        peek_mode: h,
                                        from_peek_mode: e,
                                        target_page_id: null == (t = r(475097).default.peekTargetStore.state) ? void 0 : t.id
                                    }), n.close()
                                },
                                children: (0, a.jsx)(r(95582).A, { ...i,
                                    disabled: !1,
                                    title: t.title,
                                    icon: t.icon,
                                    caption: t.caption,
                                    body: t.body,
                                    isChecked: r(381453).n4(t.key, e)
                                })
                            }),
                            action: r(763230).lQ
                        }
                    }), !r(986939).A.isMobile && {
                        key: t.length,
                        render: e => (0, a.jsx)(r(95582).A, { ...e,
                            disabled: !1,
                            title: l.formatMessage(u.openInNewTab),
                            icon: (0, a.jsx)(r(16275).I, {
                                icon: r(62796).u,
                                colorVariant: "secondary"
                            })
                        }),
                        action: () => {
                            (0, r(79266).navigate)({
                                environment: d,
                                url: (0, r(483227).Ay)({
                                    store: i,
                                    fullyQualified: !1,
                                    pageVisitSource: r(254656).y8.Expand
                                }),
                                openInNew: "tab",
                                makeTabActive: !0
                            }), n.close()
                        }
                    }]), [t, e, d, i, n, l]),
                    p = (0, r(682985).K8)(() => r(475097).default.state.open ? r(475097).default.state.collectionContextStore : void 0, []),
                    g = (0, r(845001).x)(null == p ? void 0 : p.capabilitiesStore, null == p ? void 0 : p.permissionScopesStore),
                    h = (0, r(682985).K8)(() => r(475097).default.state.open ? r(475097).default.state.targetStore : void 0, []),
                    m = (0, r(682985).O$)(r(728372).AppStoreMainEditorCurrentBlockStore),
                    v = (0, r(682985).K8)(() => {
                        var e, t, r;
                        let i = m && m.id === (null == p || null == (e = p.collectionViewBlockStore()) ? void 0 : e.getRecordStoreUIRoot().id);
                        return (null == p || null == (t = p.collectionStore()) ? void 0 : t.id) === (null == h || null == (r = h.getAssociatedCollectionStore()) ? void 0 : r.id) && g && i
                    }, [m, p, h, g]);
                return (0, a.jsx)(r(747369).A, { ...s,
                    children: (0, a.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        sections: r(381453).oE([{
                            key: 0,
                            render: e => (0, a.jsx)(r(844565).A, {
                                enableActionSheetTitle: !0,
                                ...e
                            }),
                            items: c
                        }, v && {
                            key: 1,
                            render: e => (0, a.jsx)(r(844565).A, {
                                enableActionSheetTitle: !0,
                                topBorder: !0,
                                ...e
                            }),
                            items: [{
                                key: "change_for_view",
                                render: e => (0, a.jsx)(r(95582).A, { ...e,
                                    disabled: !1,
                                    title: l.formatMessage(u.changeForThisView),
                                    icon: (0, a.jsx)(r(16275).I, {
                                        icon: r(213039).M,
                                        colorVariant: "primary"
                                    })
                                }),
                                action: e => {
                                    var t;
                                    let i;
                                    t = o, (i = r(475097).default.state.open ? r(475097).default.state.collectionContextStore : void 0) && (r(475097).default.isCenterPeekOpen() && t && t(), (0, r(200371).O)({
                                        collectionContextStore: i,
                                        collectionSettingsStore: i.settingsStore
                                    }), (0, r(76790).a)({
                                        collectionSettingsStore: i.settingsStore,
                                        item: {
                                            type: "layout"
                                        }
                                    }), i.settingsStore.setState({ ...i.settingsStore.state,
                                        openButtonPopup: "peekModeFormat"
                                    })), n.close()
                                }
                            }]
                        }]),
                        initialFocus: 0
                    })
                })
            }

            function h() {
                return ["side_peek", "center_peek", "full_page"].map(e => ({
                    key: e,
                    type: "button",
                    title: (0, r(476670).LA)(e),
                    icon: (0, r(476670).qg)(e)({
                        width: r(104509).Ev.default,
                        height: r(104509).Ev.default,
                        fill: r(632079).Tj.text.secondary
                    })
                }))
            }
            let m = (0, r(109939).YK)({
                    moveToPrefixText: {
                        id: "peekMoveToMenu.moveTo.moveTo",
                        defaultMessage: "Move to"
                    },
                    addToPrefixText: {
                        id: "peekMoveToMenu.addTo.addTo",
                        defaultMessage: "Add to"
                    },
                    closeButton: {
                        defaultMessage: "Close",
                        id: "peekTopbar.close.button"
                    },
                    previousPageTooltip: {
                        defaultMessage: "Previous page",
                        id: "peekTopbar.peekNavUpArrow.tooltip"
                    },
                    nextPageTooltip: {
                        defaultMessage: "Next page",
                        id: "peekTopbar.peekNavDownArrow.tooltip"
                    },
                    closeLayoutInfoPanelTooltip: {
                        defaultMessage: "Close panel",
                        id: "peekTopbar.closeLayoutInfoPanelButton.tooltip"
                    }
                }),
                v = {
                    display: "grid",
                    gridAutoFlow: "column",
                    gridColumnGap: 2,
                    alignItems: "center"
                },
                S = {
                    margin: 0
                },
                y = function({
                    store: e,
                    shouldShowMoveToMenu: t,
                    onClose: o,
                    spaceStore: n,
                    spaceViewStore: s,
                    pageVisitStore: l,
                    presenceStore: d
                }) {
                    let c = (0, r(533992).v3)(),
                        u = (0, r(682985).O$)(r(475097).default.isSidePeekOpenStore),
                        {
                            banners: p
                        } = (0, r(682985).O$)(r(731810).A),
                        f = (0, r(682985).K8)(() => e.canEdit(), [e]),
                        h = (0, r(682985).K8)(() => e.canRead() && e.isDefined(), [e]),
                        m = (0, r(682985).O$)(r(584257).b),
                        y = (0, r(682985).K8)(() => r(584257).A.state.zoomFactor || r(196441).rx, []),
                        b = c.device.isElectron && !m && u,
                        k = (0, r(682985).K8)(() => e.isFormBlock(), [e]),
                        _ = (0, r(682985).K8)(() => r(82702).A.getPanelState("peek").isMouseHoveringPanel, []),
                        C = (0, r(682985).K8)(() => "static_sidebar" === r(82702).A.getPanelState("peek").displayStyle && r(82702).A.getPanelState("peek").isOpen, []),
                        [T, M] = i.useState(!1),
                        A = (0, r(682985).K8)(() => r(475097).default.state.topHoverAreaEntered, []),
                        P = (0, r(960253).I)(() => {
                            let e = A || T;
                            return {
                                hoverBtn: {
                                    opacity: +!!e,
                                    pointerEvents: e ? "auto" : "none",
                                    transition: "opacity 100ms ease"
                                }
                            }
                        }, [A, T]),
                        E = C && (A || _);
                    return (0, a.jsx)(r(318981).A, {
                        store: e,
                        disableRectangularSelection: !0,
                        disableEditNearestBlock: !0,
                        render: ({
                            selectableEvents: i
                        }) => (0, a.jsxs)("div", { ...i,
                            style: {
                                height: k ? 0 : void 0,
                                ... function(e) {
                                    let {
                                        isSidePeekOpen: t,
                                        borderRadius: i,
                                        isElectronWindows: a,
                                        isShowingTabBar: o,
                                        zoomFactor: n
                                    } = e;
                                    return {
                                        zIndex: t ? 100 : 110,
                                        background: r(632079).Tj.background.elevated,
                                        borderStartStartRadius: i ? ? 12,
                                        borderStartEndRadius: i ? ? 12,
                                        paddingInlineEnd: a && t && !o ? (0, r(196441).yA)(n) : void 0
                                    }
                                }({
                                    isSidePeekOpen: u,
                                    isElectronWindows: c.device.isElectronWindows,
                                    isShowingTabBar: m,
                                    zoomFactor: y
                                })
                            },
                            className: `${r(828432).S6D} ${b?r(828432).sbV:""}`,
                            children: [(0, a.jsxs)("div", {
                                style: function(e) {
                                    let {
                                        environment: t
                                    } = e, i = r(986939).A.isMobile ? 4 : 12, a = r(986939).A.isMobile ? 4 : 10;
                                    return {
                                        height: r(801113).ek(t.device.isElectronMac),
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingInlineStart: i,
                                        paddingInlineEnd: a
                                    }
                                }({
                                    environment: c
                                }),
                                children: [(0, a.jsxs)("div", {
                                    style: v,
                                    children: [(0, a.jsx)(j, {
                                        onClose: o
                                    }), k ? void 0 : (0, a.jsx)(r(753248).A, {
                                        store: e,
                                        shouldShowMoveToMenu: t
                                    }), (0, a.jsx)(x, {
                                        store: e,
                                        shouldShowMoveToMenu: t
                                    }), f ? (0, a.jsx)(r(868458).A, {
                                        store: e,
                                        buttonStyle: S
                                    }) : void 0, k ? void 0 : (0, a.jsx)("div", {
                                        style: P.hoverBtn,
                                        children: (0, a.jsx)(g, {
                                            store: e,
                                            onClick: () => M(!0),
                                            onDismissPopup: () => M(!1),
                                            onClosePeek: o
                                        })
                                    }), (0, a.jsx)("div", {
                                        style: { ...P.hoverBtn,
                                            ...v
                                        },
                                        children: (0, a.jsx)(I, {
                                            shouldShowMoveToMenu: t
                                        })
                                    })]
                                }), h ? (0, a.jsx)(w, {
                                    store: e,
                                    spaceStore: n,
                                    spaceViewStore: s,
                                    pageVisitStore: l,
                                    presenceStore: d,
                                    shouldShowLayoutPanelCloseButton: E
                                }) : void 0]
                            }), p.length > 0 ? (0, a.jsx)(r(127338).x, {
                                banners: p,
                                bannerStore: r(731810).A
                            }) : void 0]
                        })
                    })
                };

            function x({
                store: e,
                shouldShowMoveToMenu: t
            }) {
                let {
                    open: i,
                    saveParent: o,
                    pageVisitSource: n,
                    collectionContextStore: s
                } = (0, r(682985).K8)(() => ({
                    open: r(475097).default.state.open,
                    saveParent: !!r(475097).default.state.open && r(475097).default.state.saveParent,
                    pageVisitSource: r(475097).default.state.open ? r(475097).default.state.pageVisitSource : void 0,
                    collectionContextStore: r(475097).default.state.collectionContextStore
                }), []), l = (0, r(682985).K8)(() => {
                    let t = e.getAssociatedCollectionStore();
                    return (null == t ? void 0 : t.getDatabaseType()) === r(11448).dC ? "tasks" : void 0
                }, [e]), d = (0, r(682985).K8)(() => (null == s ? void 0 : s.contextTypeFromStoreState) === "collectionTypedView", [s]);
                return i && t ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r(48542).A, {}), (0, a.jsx)(c, {
                        store: e,
                        saveParent: o,
                        prefix: d ? m.moveToPrefixText : m.addToPrefixText,
                        pageType: l,
                        forceUntyped: n === r(254656).y8.SidebarQuickAdd
                    })]
                }) : null
            }
            let b = {
                style0: {
                    width: r(104509).Ev.default,
                    height: r(104509).Ev.default
                },
                style1: {
                    flexGrow: 1
                }
            };

            function w({
                store: e,
                spaceStore: t,
                spaceViewStore: o,
                pageVisitStore: n,
                presenceStore: s,
                shouldShowLayoutPanelCloseButton: l
            }) {
                let d, c, u = (0, r(533992).v3)(),
                    p = (0, r(533992).Y0)(),
                    g = (0, r(682985).K8)(() => (0, r(142484).q)(u, e, e.getSpaceStore()), [u, e]),
                    f = (0, r(682985).K8)(() => t && t.id !== e.getSpaceId(), [t, e]),
                    h = (0, r(682985).K8)(() => (0, r(829435).s)(e.id), [e]),
                    v = (0, r(682985).K8)(() => (0, r(933062).Nh)(e.id), [e]),
                    S = (0, r(682985).K8)(() => e.isFormBlock(), [e]),
                    y = (0, r(682985).K8)(() => e.isPageBlock(), [e]),
                    x = (0, r(682985).K8)(() => e.isExternalObjectInstancePageBlockStore(), [e]),
                    k = (0, r(682985).K8)(() => !r(986939).A.isMobile && t && o && !g && !f && !v && !S && (0, r(282276).shouldShowTopbarMoreButton)({
                        blockType: e.getType(),
                        systemBlockType: e.getSystemBlockTypeStore().getValue(),
                        isGuestPrivatePage: (0, r(642138).E)(e, o)
                    }), [e, t, o, g, f, v, S]),
                    j = (0, r(809210).Yj)({
                        blockStore: e
                    }),
                    _ = (0, r(682985).O$)(r(585823).gZ),
                    I = (0, r(682985).K8)(() => e.canEdit(), [e]),
                    C = (0, r(682985).K8)(() => {
                        var t;
                        return null == (t = r(708929).Uv.getStateForBlock(e.id)) ? void 0 : t.mode
                    }, [e.id]),
                    {
                        suggestTranslation: T,
                        suggestedPageTranslationLanguage: M,
                        detectedPageLanguage: A,
                        setTranslationSuggestionDismissed: P
                    } = (0, r(417131).V)(e),
                    E = !r(986939).A.isMobile && (y || x) && !S,
                    B = (0, r(270102).i)(e),
                    D = (0, r(809210).oo)({
                        blockStore: e,
                        spaceStore: t,
                        spaceViewStore: o
                    }),
                    R = (0, r(682985).K8)(() => e.getParentTable() === r(832375).C0E, [e]),
                    K = (0, r(682985).K8)(() => D && !r(986939).A.isMobile && "control" !== r(218744).default.getEligibleGroup({
                        experimentId: "move_copy_link_button",
                        defaultGroup: "control"
                    }), [D]),
                    N = (0, r(682985).K8)(() => t && o && !S && !g && !f && !B && "translate_locked" !== C && !R && "copy_link_only" !== r(218744).default.getEligibleGroup({
                        experimentId: "move_copy_link_button",
                        defaultGroup: "control",
                        disableExposureLogging: !0
                    }), [t, o, S, g, f, B, C, R]),
                    W = (0, r(109939).tz)(),
                    L = i.useCallback(() => {
                        var t;
                        let i = null == (t = e.getAssociatedCollectionStore()) ? void 0 : t.getLayoutStore();
                        i && (0, r(127789).F)({
                            environment: u,
                            layoutStore: i,
                            from: "topbar",
                            panelLocation: "peek"
                        })
                    }, [e, u]),
                    z = (0, r(682985).K8)(() => (0, r(59406).w)(u), [u]),
                    V = (0, r(682985).K8)(() => e.isTeamPost(), [e]),
                    U = (d = (0, r(533992).v3)(), c = (0, r(682985).K8)(() => {
                        let e = r(986939).A.isMobile ? void 0 : (0, r(27469).eO)({
                            environment: d,
                            isInPeek: !0
                        });
                        return e ? e - 12 : void 0
                    }, [d]), (0, r(960253).I)(() => ({
                        wrapStyles: {
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 0,
                            flexShrink: 0,
                            zIndex: 1,
                            minWidth: c,
                            paddingInlineStart: 12,
                            justifyContent: "flex-end"
                        }
                    }), [c]).wrapStyles);
                return (0, a.jsxs)("div", {
                    style: U,
                    children: [l ? (0, a.jsx)(r(51831).m, {
                        content: () => (0, a.jsx)("div", {
                            children: W.formatMessage(m.closeLayoutInfoPanelTooltip)
                        }),
                        disableTooltip: !l,
                        children: e => (0, a.jsx)(r(374533).A, { ...e,
                            ariaLabel: W.formatMessage(m.closeLayoutInfoPanelTooltip),
                            icon: r(487415).O,
                            iconStyle: b.style0,
                            onClick: L
                        })
                    }) : null, z ? (0, a.jsx)("div", {
                        style: b.style1
                    }) : void 0, M && A ? (0, a.jsx)(r(912572).Z6, {
                        store: e,
                        isVisible: T,
                        compact: !0,
                        setTranslationSuggestionDismissed: () => P(!0),
                        suggestedPageTranslationLanguage: M,
                        detectedPageLanguage: A
                    }) : void 0, (0, a.jsx)(r(239419).M, {
                        store: e,
                        isVisible: "suggest" === C && !S,
                        compact: !0
                    }), v || S || _ || T || "suggest" === C ? void 0 : (0, a.jsx)(r(356901).y, {
                        store: e,
                        isExpanded: !1,
                        isWindowSmall: !0,
                        isElectron: p.isElectron,
                        isShowingTabBar: !1
                    }), !I || S || V ? void 0 : (0, a.jsx)(r(616922).Ay, {
                        rootStore: e,
                        pageVisitStore: n,
                        presenceStore: s
                    }), D ? (0, a.jsx)(r(644097).E, {
                        store: e,
                        buttonPopupStore: r(344476).A
                    }) : void 0, K ? (0, a.jsx)(r(874367).e, {
                        store: e
                    }) : void 0, E ? (0, a.jsx)(r(309316).n, {
                        blockStore: e,
                        buttonPopupStore: r(601406).A,
                        pageViewBlockContext: r(166654).R.PeekView
                    }) : void 0, j ? (0, a.jsx)(r(15438).Ay, {
                        blockStore: e,
                        unreadDiscussionsPopupStore: r(704657).d
                    }) : void 0, N ? (0, a.jsx)(r(722716).TopbarFavoriteButton, {
                        store: e,
                        spaceViewStore: o
                    }) : void 0, S ? (0, a.jsx)(r(298956).A, {
                        formBlockStore: e,
                        inPeekMode: !0
                    }) : void 0, h ? (0, a.jsx)(r(442661).A, {}) : void 0, k ? (0, a.jsx)(r(517745).u, {
                        store: e,
                        buttonPopupStore: r(2680).A
                    }) : void 0]
                })
            }
            let k = {
                style0: {
                    color: r(632079).Tj.text.inverseSecondary
                },
                style1: {
                    width: r(104509).Ev.default,
                    height: r(104509).Ev.default
                }
            };

            function j({
                onClose: e
            }) {
                let t = (0, r(109939).tz)();
                return (0, r(682985).O$)(r(475097).default.isSidePeekOpenStore) ? (0, a.jsx)(r(51831).m, {
                    content: () => (0, a.jsxs)("div", {
                        children: [t.formatMessage(m.closeButton), (0, a.jsx)("br", {}), (0, a.jsx)(r(693592).A, {
                            style: k.style0,
                            name: "esc"
                        })]
                    }),
                    children: i => (0, a.jsx)(r(374533).A, { ...i,
                        ariaLabel: t.formatMessage(m.closeButton),
                        icon: r(487415).O,
                        iconStyle: k.style1,
                        onClick: () => e("close_button")
                    })
                }) : null
            }
            let _ = {
                style0: {
                    color: r(632079).Tj.text.inverseSecondary
                },
                style1: {
                    width: r(104509).Ev.default,
                    height: r(104509).Ev.default
                }
            };

            function I({
                shouldShowMoveToMenu: e
            }) {
                let t = (0, r(109939).tz)(),
                    i = (0, r(682985).O$)(r(475097).default),
                    {
                        resultsStore: o
                    } = i,
                    n = (0, r(682985).K8)(() => null == o ? void 0 : o.getState(), [o]);
                if (!i.open || e) return null;
                let s = i.targetStore.id;
                return n && n.length > 0 && n.some(e => e.id === s) ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r(48542).A, {}), (0, a.jsx)(r(51831).m, {
                        content: () => (0, a.jsxs)("div", {
                            children: [t.formatMessage(m.previousPageTooltip), (0, a.jsx)("br", {}), (0, a.jsx)(r(693592).A, {
                                style: _.style0,
                                name: "peekUp"
                            })]
                        }),
                        children: e => (0, a.jsx)(r(374533).A, { ...e,
                            ariaLabel: t.formatMessage(m.previousPageTooltip),
                            disabled: s === n[0].id,
                            icon: r(386946).h,
                            onClick: () => (0, r(973929).N)(),
                            colorVariant: "secondary",
                            iconStyle: _.style1
                        })
                    }), (0, a.jsx)(r(51831).m, {
                        content: () => (0, a.jsxs)("div", {
                            children: [t.formatMessage(m.nextPageTooltip), (0, a.jsx)("br", {}), (0, a.jsx)(r(693592).A, {
                                style: _.style0,
                                name: "peekDown"
                            })]
                        }),
                        children: e => (0, a.jsx)(r(374533).A, { ...e,
                            ariaLabel: t.formatMessage(m.nextPageTooltip),
                            disabled: s === n[n.length - 1].id,
                            icon: r(87963).arrowChevronSingleDownIcon,
                            onClick: () => (0, r(230336).E)(),
                            colorVariant: "secondary",
                            iconStyle: _.style1
                        })
                    })]
                }) : null
            }
            let C = {
                    header: {
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingInlineStart: 12,
                        paddingInlineEnd: 10,
                        paddingTop: 8,
                        paddingBottom: 8,
                        flexShrink: 0,
                        pointerEvents: "auto",
                        marginBottom: 4
                    },
                    chevronContainer: {
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        paddingBlock: 4,
                        paddingInline: 8,
                        color: r(632079).Tj.text.secondary
                    },
                    keyboardShortcut: {
                        color: r(632079).Tj.text.inverseSecondary
                    }
                },
                T = i.memo(function(e) {
                    let {
                        workflowStore: t,
                        onClose: o,
                        activeSidePeek: n,
                        onSidePeekChange: s,
                        disabled: l,
                        onShowVersionHistory: d,
                        sudoModeStore: c
                    } = e, u = (0, r(109939).tz)(), p = (0, i.useRef)(null);
                    return (0, a.jsxs)("div", {
                        ref: p,
                        style: C.header,
                        children: [(0, a.jsx)(r(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: (0, a.jsx)(r(51831).m, {
                                content: () => (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: u.formatMessage({
                                            id: "agentSidePeek.close.tooltip",
                                            defaultMessage: "Close"
                                        })
                                    }), (0, a.jsx)(r(693592).A, {
                                        style: C.keyboardShortcut,
                                        name: "esc"
                                    })]
                                }),
                                children: e => (0, a.jsx)(r(374533).A, { ...e,
                                    icon: r(487415).O,
                                    onClick: o,
                                    size: "md",
                                    style: C.chevronContainer,
                                    ariaLabel: u.formatMessage({
                                        defaultMessage: "Close side peek",
                                        id: "agentSidePeek.chevronButton.ariaLabel"
                                    })
                                })
                            })
                        }), (0, a.jsx)(r(654979).A, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            config: {
                                duration: 200
                            },
                            visible: !!n,
                            style: {
                                pointerEvents: n ? "auto" : "none"
                            },
                            children: (0, a.jsx)(r(946493).P, {
                                workflowStore: t,
                                activeSidePeek: n,
                                onSidePeekChange: s,
                                disabled: l,
                                onShowVersionHistory: d,
                                containerRef: p,
                                sudoModeStore: c
                            })
                        })]
                    })
                }),
                M = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingInline: 24,
                    paddingBlock: 12,
                    gap: 8,
                    flexShrink: 0,
                    pointerEvents: "auto"
                },
                A = {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 0,
                    pointerEvents: "auto",
                    paddingInline: 24,
                    overflowY: "auto"
                },
                P = {
                    flex: 1
                },
                E = i.memo(function(e) {
                    let {
                        clientStore: t,
                        workflowStore: i,
                        spaceStore: o,
                        workflowViewType: n,
                        activityFilter: s,
                        setActivityFilter: l,
                        onRefreshActivity: d,
                        onClose: c,
                        hasEditPermission: u,
                        activeThreadId: p,
                        activeSidePeek: g,
                        onSidePeekChange: f,
                        disabled: h,
                        onShowVersionHistory: m,
                        sudoModeStore: v
                    } = e, S = (0, r(109939).tz)(), y = (0, r(916820).Sn)(), x = (0, r(682985).K8)(() => (null == y ? void 0 : y.state.status) ? ? "idle", [y]), b = (0, a.jsx)(r(978568).p, {
                        workflowStore: i,
                        activityFilter: s,
                        setActivityFilter: l,
                        menuMinWidth: 250
                    }), w = (0, a.jsx)(r(51831).m, {
                        placement: "top",
                        content: () => S.formatMessage({
                            defaultMessage: "Refresh activity",
                            id: "agentPage.refreshActivity.tooltip"
                        }),
                        children: e => (0, a.jsx)(r(374533).A, { ...e,
                            ariaLabel: S.formatMessage({
                                defaultMessage: "Refresh activity",
                                id: "agentPage.refreshActivity"
                            }),
                            size: "sm",
                            icon: r(983012).w,
                            onClick: d,
                            disabled: "pending" === x
                        })
                    });
                    return (0, a.jsxs)(r(4458).VP, {
                        height: "100%",
                        width: "100%",
                        children: [(0, a.jsx)(T, {
                            workflowStore: i,
                            onClose: c,
                            activeSidePeek: g,
                            onSidePeekChange: f,
                            disabled: h,
                            onShowVersionHistory: m,
                            sudoModeStore: v
                        }), (0, a.jsxs)("div", {
                            style: M,
                            children: [(0, a.jsx)(r(16986).Z, {
                                workflowStore: i,
                                disabled: h
                            }), (0, a.jsx)("div", {
                                style: P
                            }), (0, a.jsx)(r(505213).D, {
                                section: "activity",
                                spaceStore: o,
                                workflowStore: i
                            }), b, w]
                        }), (0, a.jsx)("div", {
                            style: A,
                            children: u ? (0, a.jsx)(r(580944).W, {
                                clientStore: t,
                                workflowStore: i,
                                workflowViewType: n,
                                activityFilter: s,
                                activeThreadId: p
                            }) : void 0
                        })]
                    })
                }),
                B = (0, r(109939).YK)({
                    previewingAgent: {
                        id: "workflows.agentPreviewModal.previewingAgent",
                        defaultMessage: "Previewing {agentName}"
                    }
                }),
                D = {
                    modalContent: {
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: r(632079).Tj.background.primary
                    },
                    header: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 20px",
                        borderBottom: `1px solid ${r(632079).Tj.border.secondary}`,
                        flexShrink: 0
                    },
                    headerLeft: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    },
                    headerTitle: {
                        fontSize: 16,
                        fontWeight: r(699422).Wy.semibold,
                        color: r(632079).Tj.text.primary,
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    },
                    headerActions: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    },
                    closeButton: {
                        width: 32,
                        height: 32
                    },
                    contentWrapper: {
                        flexGrow: 1,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        position: "relative",
                        minHeight: 0,
                        height: "100%"
                    }
                };

            function R(e) {
                let {
                    workflowStore: t,
                    isOpen: o,
                    onClose: n,
                    initialThreadStore: s,
                    customTitle: l
                } = e, d = (0, r(109939).tz)(), c = (0, r(682985).uB)(void 0, r(57168).ClientAIChatStore), [u, p] = (0, i.useState)(s), [g, f] = (0, i.useState)(0), h = (0, r(682985).K8)(() => c.state.showDebug, [c]), m = (0, r(682985).K8)(() => t.getDraftData(), [t]), v = (null == m ? void 0 : m.name) || d.formatMessage({
                    defaultMessage: "Agent",
                    id: "workflows.agentPreviewModal.defaultAgentName"
                }), S = null == m ? void 0 : m.icon, y = null == m ? void 0 : m.description, x = null == m ? void 0 : m.conversationStarters, b = (0, i.useMemo)(() => new(r(558208)).rz, []);
                (0, i.useEffect)(() => {
                    s && p(s)
                }, [s]);
                let w = (0, i.useCallback)(({
                    newThreadStore: e
                }) => {
                    e ? p(e) : (b.reset(), p(void 0), f(e => e + 1))
                }, [b]);
                return (0, a.jsx)(r(833503).s, {
                    isOpen: o,
                    onDismiss: n,
                    allowDismissByEscape: !0,
                    showCloseIcon: !1,
                    areaConstraint: {
                        width: {
                            type: "fixed",
                            length: h ? 1200 : 800
                        },
                        height: {
                            type: "fixed",
                            length: 800
                        }
                    },
                    children: () => (0, a.jsx)(r(558208).XN.Provider, {
                        value: b,
                        children: (0, a.jsxs)("div", {
                            style: D.modalContent,
                            children: [(0, a.jsx)(K, {
                                agentName: v,
                                styles: D,
                                onClose: n,
                                tempAiThreadManager: b,
                                threadStore: u,
                                clientStore: c,
                                onThreadChange: w,
                                customTitle: l
                            }), (0, a.jsx)("div", {
                                style: D.contentWrapper,
                                children: (0, a.jsx)(W, {
                                    clientStore: c,
                                    workflowStore: t,
                                    agentIcon: S,
                                    agentName: v,
                                    agentDescription: y,
                                    conversationStarters: x,
                                    tempAiThreadManager: b,
                                    onThreadChange: w,
                                    threadStore: u
                                }, g)
                            })]
                        })
                    })
                })
            }

            function K(e) {
                let {
                    agentName: t,
                    styles: i,
                    onClose: o,
                    threadStore: n,
                    clientStore: s,
                    onThreadChange: l,
                    customTitle: d
                } = e, c = (0, r(109939).tz)(), u = (0, r(758360).K7)("custom_agent");
                return (0, a.jsxs)("div", {
                    style: i.header,
                    children: [(0, a.jsx)("div", {
                        style: i.headerLeft,
                        children: (0, a.jsxs)("div", {
                            style: i.headerTitle,
                            children: [(0, a.jsx)(r(16275).I, {
                                icon: r(152208).eyeIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }), d || (0, a.jsx)(r(109939).sA, { ...B.previewingAgent,
                                values: {
                                    agentName: t
                                }
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        style: i.headerActions,
                        children: [(0, a.jsx)(r(656592).ps, {
                            aiChatFeatureController: u,
                            threadStore: n,
                            clientStore: s,
                            onThreadChange: l,
                            showOnHover: !1,
                            features: {
                                showInviteButton: !1,
                                showNewChatButton: !1,
                                showNewChatButtonIcon: !1
                            }
                        }), (0, a.jsx)(r(374533).A, {
                            icon: r(117152).xMarkIcon,
                            onClick: o,
                            ariaLabel: c.formatMessage({
                                defaultMessage: "Close preview",
                                id: "workflows.agentPreviewModal.close"
                            }),
                            style: i.closeButton
                        })]
                    })]
                })
            }
            let N = {
                flex: 1,
                height: "100%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: 0
            };

            function W(e) {
                let {
                    workflowStore: t,
                    agentIcon: o,
                    agentName: n,
                    agentDescription: s,
                    conversationStarters: l,
                    onThreadChange: d,
                    threadStore: c,
                    clientStore: u
                } = e, p = (0, r(972740).L)(), [g, f] = (0, i.useState)(null == c ? void 0 : c.id), [h, m] = (0, i.useState)(!!c), v = (0, r(758360).K7)("custom_agent");
                return ((0, i.useEffect)(() => {
                    null != c && c.id ? (f(c.id), m(!0)) : (f(void 0), m(!1))
                }, [null == c ? void 0 : c.id]), p) ? (0, a.jsx)("div", {
                    style: N,
                    children: (0, a.jsx)(r(316258).hP, {
                        surface: r(316258).wy.inferenceTranscriptChatView,
                        children: h && g ? (0, a.jsx)(U, {
                            clientStore: u,
                            spaceStore: p,
                            threadId: g,
                            aiChatFeatureController: v,
                            onThreadChange: d
                        }) : (0, a.jsx)(z, {
                            agentName: n,
                            agentDescription: s,
                            conversationStarters: l,
                            workflowStore: t,
                            onThreadChange: d,
                            clientStore: u,
                            aiChatFeatureController: v,
                            agentIcon: o
                        })
                    })
                }) : null
            }
            let L = {
                emptyStateWrapper: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                    padding: "32px 48px",
                    width: "100%",
                    boxSizing: "border-box"
                },
                agentName: {
                    fontSize: 20,
                    fontWeight: r(699422).Wy.semibold,
                    color: r(632079).Tj.text.primary
                },
                inputWrapper: {
                    width: "100%",
                    maxWidth: 600
                },
                agentDescription: {
                    fontSize: 14,
                    color: r(632079).Tj.text.secondary,
                    textAlign: "center"
                }
            };

            function z(e) {
                let {
                    agentName: t,
                    agentDescription: o,
                    conversationStarters: n,
                    onThreadChange: s,
                    workflowStore: l,
                    clientStore: d,
                    aiChatFeatureController: c,
                    agentIcon: u
                } = e, p = (0, r(972740).L)(), g = (0, r(533992).v3)(), f = (0, r(682985).K8)(() => {
                    var e;
                    let t = l.getDraftData() ? ? l.getData(),
                        i = null == (e = l.getPublishedArtifactStore()) ? void 0 : e.getData();
                    return (0, r(16712).Z0)({
                        workflowData: t,
                        publishedWorkflowData: i
                    })
                }, [l]), h = (0, r(682985).K8)(() => {
                    var e;
                    let t = null == (e = l.getPublishedArtifactStore()) ? void 0 : e.getData();
                    return (0, r(445568).isWorkflowDataDatabaseAgent)(t)
                }, [l]), m = (0, r(682985).K8)(() => {
                    let e = r(218744).default.checkGate({
                            gateName: "agent_crdt_operations"
                        }),
                        t = r(218744).default.checkGate({
                            gateName: "agent_create_db_template"
                        }),
                        i = r(218744).default.checkGate({
                            gateName: "mail_explicit_tool_calls"
                        }),
                        a = r(218744).default.checkGate({
                            gateName: "outlook_custom_agent_email_connector"
                        });
                    return { ...(0, r(16712).ve)(l.id, {
                            configOverrides: f,
                            isDatabaseAgent: h,
                            enableCrdtOperations: e,
                            enableAgentCreateDbTemplate: t,
                            enableMailExplicitToolCalls: i,
                            enableMailAgentMultiProviderSupport: a,
                            defaultYoloMode: !1
                        }),
                        useCustomAgentDraft: !0
                    }
                }, [l, f, h]), {
                    nextConfig: v,
                    setNextConfig: S
                } = (0, r(891603).I)({
                    threadStore: void 0,
                    spaceId: null == p ? void 0 : p.id,
                    defaultConfig: m
                }), y = (0, i.useMemo)(() => p ? {
                    table: r(43296).C,
                    id: l.id,
                    spaceId: p.id
                } : void 0, [l, p]), x = (0, i.useCallback)(e => {
                    if (!p) return;
                    let t = r(674880).defaultInferenceContextStore.state;
                    if (!t || !t.userStore) return;
                    let i = (0, r(674880).Kf)({
                            environment: g,
                            spaceStore: p,
                            userStore: t.userStore,
                            value: (0, r(247438).x9d)(e)
                        }),
                        a = (0, r(674880).Xd)({
                            environment: g,
                            inferenceContext: t,
                            addSteps: [i],
                            surface: "workflows",
                            config: v
                        });
                    s({
                        newThreadStore: (0, r(225900).N)({
                            environment: g,
                            spaceStore: p,
                            transcript: a,
                            workflowId: l.id,
                            createdSource: "workflows",
                            parentPointer: y
                        })
                    })
                }, [p, g, v, l, y, s]);
                return (0, a.jsx)(r(4458).VP, {
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, a.jsxs)("div", {
                        style: L.emptyStateWrapper,
                        children: [(0, a.jsx)(r(651790).AgentIcon, {
                            agentIcon: u,
                            workflowStore: l,
                            size: 48,
                            animated: !0
                        }), (0, a.jsx)("div", {
                            style: L.agentName,
                            children: t
                        }), o ? (0, a.jsx)("div", {
                            style: L.agentDescription,
                            children: o
                        }) : void 0, (0, a.jsx)("div", {
                            style: L.inputWrapper,
                            children: (0, a.jsx)(r(656592).n_, {
                                aiChatFeatureController: c,
                                clientStore: d,
                                onThreadChange: s,
                                nextConfig: v,
                                setNextConfig: S,
                                parentPointer: y,
                                threadStore: void 0,
                                disabled: !1
                            })
                        }), n && n.length > 0 ? (0, a.jsx)(r(912479).k, {
                            starters: n,
                            onStarterClick: x,
                            disabled: !1
                        }) : void 0]
                    })
                })
            }
            let V = {
                height: "100%",
                width: "100%",
                padding: "24px 32px",
                overflow: "auto",
                boxSizing: "border-box",
                display: "flex"
            };

            function U(e) {
                let {
                    onThreadChange: t,
                    ...o
                } = e, n = (0, i.useRef)(null), s = (0, i.useRef)(!0), {
                    clientStore: l,
                    spaceStore: d,
                    threadId: c
                } = o, u = !c || c === r(548124).NEW_CHAT_THREAD_ID, {
                    transcript: p
                } = (0, r(732877).j)({
                    clientStore: l,
                    spaceStore: d,
                    chatPanelState: {
                        isOpen: !0,
                        isNewThread: u,
                        threadId: u ? r(548124).NEW_CHAT_THREAD_ID : c
                    }
                }), g = (0, i.useCallback)(() => {
                    if (n.current) {
                        let {
                            scrollTop: e,
                            scrollHeight: t,
                            clientHeight: r
                        } = n.current;
                        s.current = 50 > Math.abs(t - r - e)
                    }
                }, []);
                (0, i.useEffect)(() => {
                    s.current && n.current && requestAnimationFrame(() => {
                        n.current && s.current && (n.current.scrollTop = n.current.scrollHeight)
                    })
                }, [p]);
                let f = (0, i.useCallback)(() => {
                    g()
                }, [g]);
                return (0, i.useEffect)(() => {
                    n.current && (n.current.scrollTop = n.current.scrollHeight)
                }, []), (0, a.jsx)("div", {
                    ref: n,
                    style: V,
                    onScroll: f,
                    children: (0, a.jsx)(F, { ...o,
                        onThreadChange: t
                    })
                })
            }

            function F(e) {
                let {
                    clientStore: t,
                    spaceStore: o,
                    threadId: n,
                    onThreadChange: s
                } = e, l = !n || n === r(548124).NEW_CHAT_THREAD_ID, {
                    state: d,
                    threadStore: c,
                    transcript: u
                } = (0, r(732877).j)({
                    clientStore: t,
                    spaceStore: o,
                    chatPanelState: {
                        isOpen: !0,
                        isNewThread: l,
                        threadId: l ? r(548124).NEW_CHAT_THREAD_ID : n
                    }
                });
                (0, i.useEffect)(() => {
                    s({
                        newThreadStore: c
                    })
                }, [c, s]);
                let p = (0, r(682985).K8)(() => null == c ? void 0 : c.getCurrentInferenceId(), [c]);
                return ((0, i.useEffect)(() => {
                    c && s({
                        newThreadStore: c
                    })
                }, [p, c, s]), u) ? (0, a.jsx)(r(656592).NV, {
                    aiChatFeature: "custom_agent_preview",
                    threadStore: c,
                    transcript: u,
                    onThreadChange: s,
                    clientStore: t,
                    parentStore: o,
                    threadStoreState: d,
                    hideThreadPicker: !0,
                    hideActions: !0
                }) : null
            }

            function O(e) {
                return "trigger_created" === e.type || "trigger_updated" === e.type || "trigger_deleted" === e.type || "trigger_enabled_changed" === e.type
            }

            function H(e) {
                return "module_created" === e.type || "module_updated" === e.type || "module_deleted" === e.type || "module_permission_added" === e.type || "module_permission_removed" === e.type || "module_permission_updated" === e.type
            }

            function $(e) {
                return "script_created" === e.type || "script_updated" === e.type || "script_deleted" === e.type
            }
            r(354520), r(944114);
            let q = {
                    cursor: "default"
                },
                G = {
                    opacity: .5
                },
                X = i.memo(function({
                    edits: e
                }) {
                    let t = (0, a.jsx)(r(111010).D, {
                            styleKey: "bodyRegular",
                            colorPalette: "gray",
                            colorVariant: "secondary",
                            children: (0, a.jsx)(r(109939).sA, {
                                defaultMessage: "Unsaved edits",
                                id: "agent.unsavedEdits.labelNoCount"
                            })
                        }),
                        o = (0, i.useMemo)(() => {
                            let t = (function(e) {
                                let t = {
                                        trigger: e.filter(O),
                                        module: e.filter(H),
                                        script: e.filter($)
                                    },
                                    i = e.filter(e => !O(e) && !H(e) && !$(e)),
                                    a = [];
                                for (let [e, i] of (0, r(722371).WP)(t)) {
                                    let t;
                                    i.length > 1 && (t = {
                                        type: e,
                                        edits: i
                                    }), 1 === i.length && (t = {
                                        type: "single",
                                        edit: i[0]
                                    }), a.push(t)
                                }
                                for (let e of i) a.push({
                                    type: "single",
                                    edit: e
                                });
                                return (0, r(381453).oE)(a)
                            })(e).map((e, t) => {
                                let i = function(e) {
                                    let t = e => (0, a.jsx)(r(109939).sA, { ...e,
                                        values: {
                                            faded: (...e) => (0, a.jsx)("span", {
                                                style: G,
                                                children: e
                                            })
                                        }
                                    });
                                    if ("single" !== e.type) switch (e.type) {
                                        case "trigger":
                                            return t(Y.multipleTriggersUpdated);
                                        case "module":
                                            return t(Y.multipleModulesUpdated);
                                        case "script":
                                            return t(Y.multipleScriptsUpdated);
                                        default:
                                            (0, r(722371).HB)(e)
                                    }
                                    let {
                                        edit: i
                                    } = e;
                                    switch (i.type) {
                                        case "instructions_updated":
                                            return t(Y.instructionsUpdated);
                                        case "model_updated":
                                            return t(Y.modelUpdated);
                                        case "trigger_created":
                                            return t(Y.triggerCreated);
                                        case "trigger_updated":
                                            return t(Y.triggerUpdated);
                                        case "trigger_deleted":
                                            return t(Y.triggerDeleted);
                                        case "trigger_enabled_changed":
                                            return t(i.enabled ? Y.triggerEnabled : Y.triggerDisabled);
                                        case "module_created":
                                            return t(Y.moduleCreated);
                                        case "module_updated":
                                            return t(Y.moduleUpdated);
                                        case "module_deleted":
                                            return t(Y.moduleDeleted);
                                        case "module_permission_added":
                                            return t(Y.modulePermissionAdded);
                                        case "module_permission_removed":
                                            return t(Y.modulePermissionRemoved);
                                        case "module_permission_updated":
                                            return t(Y.modulePermissionUpdated);
                                        case "script_created":
                                            return t(Y.scriptCreated);
                                        case "script_updated":
                                            return t(Y.scriptUpdated);
                                        case "script_deleted":
                                            return t(Y.scriptDeleted);
                                        case "name_updated":
                                        case "icon_updated":
                                        case "description_updated":
                                        case "conversationStarters_updated":
                                        case "config_overrides_updated":
                                        case "externalAgentHarness_updated":
                                        case "permissionMode_updated":
                                        case "trustedUrlGlobs_updated":
                                            return;
                                        default:
                                            (0, r(722371).HB)(i)
                                    }
                                }(e);
                                if (i) return (0, a.jsx)("div", {
                                    children: i
                                }, `${e.type}-${t}`)
                            });
                            return (0, r(381453).oE)(t)
                        }, [e]);
                    return 0 === o.length ? t : (0, a.jsx)(r(51831).m, {
                        content: () => (0, a.jsx)(a.Fragment, {
                            children: o.map((e, t) => (0, a.jsx)("div", {
                                children: e
                            }, `${e}-${t}`))
                        }),
                        placement: "bottom",
                        alignment: "center",
                        children: e => (0, a.jsx)("div", { ...e,
                            style: q,
                            children: t
                        })
                    })
                }),
                Y = (0, r(109939).YK)({
                    instructionsUpdated: {
                        id: "agent.unsavedEdits.instructionsUpdated",
                        defaultMessage: "<faded>Edited</faded> instructions page"
                    },
                    modelUpdated: {
                        id: "agent.unsavedEdits.modelUpdated",
                        defaultMessage: "<faded>Updated</faded> model"
                    },
                    triggerCreated: {
                        id: "agent.unsavedEdits.triggerCreated",
                        defaultMessage: "<faded>Added</faded> new trigger"
                    },
                    triggerUpdated: {
                        id: "agent.unsavedEdits.triggerUpdated",
                        defaultMessage: "<faded>Updated</faded> trigger"
                    },
                    triggerDeleted: {
                        id: "agent.unsavedEdits.triggerDeleted",
                        defaultMessage: "<faded>Removed</faded> trigger"
                    },
                    triggerEnabled: {
                        id: "agent.unsavedEdits.triggerEnabled",
                        defaultMessage: "<faded>Enabled</faded> trigger"
                    },
                    triggerDisabled: {
                        id: "agent.unsavedEdits.triggerDisabled",
                        defaultMessage: "<faded>Disabled</faded> trigger"
                    },
                    multipleTriggersUpdated: {
                        id: "agent.unsavedEdits.multipleTriggersUpdated",
                        defaultMessage: "<faded>Updated</faded> triggers"
                    },
                    moduleCreated: {
                        id: "agent.unsavedEdits.moduleCreated",
                        defaultMessage: "<faded>Added</faded> new tool"
                    },
                    moduleUpdated: {
                        id: "agent.unsavedEdits.moduleUpdated",
                        defaultMessage: "<faded>Updated</faded> tool"
                    },
                    moduleDeleted: {
                        id: "agent.unsavedEdits.moduleDeleted",
                        defaultMessage: "<faded>Removed</faded> tool"
                    },
                    modulePermissionAdded: {
                        id: "agent.unsavedEdits.modulePermissionAdded",
                        defaultMessage: "<faded>Added</faded> tool permission"
                    },
                    modulePermissionRemoved: {
                        id: "agent.unsavedEdits.modulePermissionRemoved",
                        defaultMessage: "<faded>Removed</faded> tool permission"
                    },
                    modulePermissionUpdated: {
                        id: "agent.unsavedEdits.modulePermissionUpdated",
                        defaultMessage: "<faded>Updated</faded> tool permission"
                    },
                    multipleModulesUpdated: {
                        id: "agent.unsavedEdits.multipleModulesUpdated",
                        defaultMessage: "<faded>Updated</faded> tools and access"
                    },
                    scriptCreated: {
                        id: "agent.unsavedEdits.scriptCreated",
                        defaultMessage: "<faded>Added</faded> new script"
                    },
                    scriptUpdated: {
                        id: "agent.unsavedEdits.scriptUpdated",
                        defaultMessage: "<faded>Updated</faded> script"
                    },
                    scriptDeleted: {
                        id: "agent.unsavedEdits.scriptDeleted",
                        defaultMessage: "<faded>Removed</faded> script"
                    },
                    multipleScriptsUpdated: {
                        id: "agent.unsavedEdits.multipleScriptsUpdated",
                        defaultMessage: "<faded>Updated</faded> scripts"
                    }
                }),
                Z = (0, r(109939).YK)({
                    validationError: {
                        id: "agentPage.validationError",
                        defaultMessage: "Please fill in all required fields"
                    },
                    discardChangesFailed: {
                        id: "workflows.agentTopbar.discardChangesFailed",
                        defaultMessage: "Couldn’t discard changes. Please try again."
                    },
                    discardingProgress: {
                        id: "workflows.agentTopbar.discardingProgress",
                        defaultMessage: "Discarding changes…"
                    },
                    discardChangesSuccess: {
                        id: "workflows.agentTopbar.discardChangesSuccess",
                        defaultMessage: "Changes discarded"
                    }
                }),
                Q = (0, r(222024).t)(),
                J = {
                    marginInlineStart: 10
                },
                ee = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingInline: 24,
                    paddingBlock: 12,
                    marginBottom: 3,
                    gap: 8,
                    flexShrink: 0,
                    pointerEvents: "auto"
                },
                et = {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 0,
                    pointerEvents: "auto",
                    paddingInline: 24,
                    paddingBlockEnd: 24,
                    overflowY: "auto"
                },
                er = {
                    flexGrow: 1
                },
                ei = i.memo(function(e) {
                    let {
                        workflowStore: t,
                        workflowValidationErrorStore: o,
                        disabled: n,
                        hasEditPermission: s,
                        onClose: l,
                        hasChanges: d,
                        hasNeverBeenPublished: c,
                        edits: u,
                        isPublishedVersionLoading: p,
                        shouldShowPreviewButton: g,
                        onPreview: f,
                        activeSidePeek: h,
                        onSidePeekChange: m,
                        onShowVersionHistory: v,
                        sudoModeStore: S,
                        spaceStore: y,
                        shouldShowBasicSaveWarningModal: x
                    } = e, b = (0, r(533992).v3)(), w = (0, r(109939).tz)(), {
                        hasRequiredPermissions: k,
                        shouldHighlightWebAccess: j,
                        isPermissionValidationEnabled: _,
                        missingRequirements: I
                    } = (0, r(152931).m)({
                        workflowStore: t
                    }), [C, M] = (0, i.useState)(!1), A = (0, r(682985).K8)(() => r(480916).j.state.requestedWorkflowId, []), P = (0, i.useRef)({
                        source: "settings_save",
                        hasLoggedValidationShown: !1,
                        episodeStartMs: void 0,
                        initialMissing: void 0,
                        lastFixSource: void 0
                    }), E = C && !k, B = (0, i.useMemo)(() => ({
                        needsToolsAndAccessValidation: E,
                        shouldHighlightWebAccess: E && j,
                        onValidationFixAction: e => {
                            if (!_ || !E) return;
                            let {
                                source: i,
                                action: a
                            } = e;
                            P.current.lastFixSource = i;
                            let o = "set_level" === a ? e.level : void 0;
                            (0, r(599231).qt)({
                                action: "permissions_changed",
                                workflowId: t.id,
                                from: "agent_settings_view",
                                context: {
                                    change_source: i,
                                    change_action: a,
                                    ...void 0 !== o ? {
                                        change_level: o
                                    } : {},
                                    validation_shown: !0
                                }
                            })
                        }
                    }), [_, E, j, t.id]);
                    (0, i.useEffect)(() => {
                        var e;
                        let i = P.current;
                        if (!_ || !C) {
                            i.hasLoggedValidationShown = !1, i.episodeStartMs = void 0, i.initialMissing = void 0, i.lastFixSource = void 0;
                            return
                        }
                        if (i.hasLoggedValidationShown || ((0, r(599231).qt)({
                                action: "permissions_validation_shown",
                                workflowId: t.id,
                                from: "agent_settings_view",
                                context: {
                                    source: i.source,
                                    missing_notion_count: I.notionMissingCount,
                                    missing_slack_count: I.slackMissingCount,
                                    missing_web_access: I.missingWebAccess,
                                    has_missing_requirements: !k
                                }
                            }), i.hasLoggedValidationShown = !0), E) {
                            if (void 0 !== i.episodeStartMs) return;
                            i.episodeStartMs = Date.now(), i.initialMissing = I;
                            return
                        }
                        let a = i.episodeStartMs,
                            o = i.initialMissing;
                        void 0 !== a && void 0 !== o && k && (0, r(599231).qt)({
                            action: "permissions_resolved",
                            workflowId: t.id,
                            from: "agent_settings_view",
                            context: {
                                source: i.source,
                                resolved_by: void 0 === (e = i.lastFixSource) ? "unknown" : e,
                                time_to_resolve_ms: Date.now() - a,
                                initial_missing_notion_count: o.notionMissingCount,
                                initial_missing_slack_count: o.slackMissingCount,
                                initial_missing_web_access: o.missingWebAccess
                            }
                        }), i.episodeStartMs = void 0, i.initialMissing = void 0, i.lastFixSource = void 0
                    }, [C, k, _, I, E, t.id]), (0, i.useEffect)(() => {
                        k && C && M(!1)
                    }, [C, k]), (0, i.useEffect)(() => {
                        A === t.id && (P.current.source = "chat_redirect", M(!0), eo(), en(), r(480916).j.setState({
                            requestedWorkflowId: void 0
                        }))
                    }, [A, t.id]);
                    let {
                        isUpdatingUpstream: D,
                        markOperationStarted: R,
                        markOperationRequestFinished: K,
                        markSyncingComplete: N
                    } = ea({
                        isSyncingWithUpstream: p,
                        hasUnsavedChanges: d
                    }), {
                        isUpdatingUpstream: W,
                        markOperationStarted: L,
                        markOperationRequestFinished: z,
                        markSyncingComplete: V
                    } = ea({
                        isSyncingWithUpstream: p,
                        hasUnsavedChanges: d
                    }), U = D || W, F = (0, r(229337).B)({
                        edits: u,
                        spaceStore: y,
                        workflowStore: t,
                        isEnabled: x
                    }), O = (0, i.useCallback)(async () => {
                        if (!U) {
                            if (!k) {
                                P.current.source = "settings_save", M(!0), eo(), en();
                                return
                            }
                            if (await F()) {
                                R(), (0, r(599231).qt)({
                                    action: "publish",
                                    workflowId: t.id,
                                    from: "agent_settings_view"
                                }), r(436555).D6({
                                    label: w.formatMessage({
                                        defaultMessage: "Saving agent…",
                                        id: "workflows.agentTopbar.savingProgress"
                                    }),
                                    durationMs: "keep"
                                });
                                try {
                                    let e = await (0, r(727832).R)({
                                        environment: b,
                                        workflowStore: t
                                    });
                                    if (r(300441).Q.isFail(e)) {
                                        r(436555).N2(), N(), o.setMissingFields(e.error.filter(e => "missing_field" === e.type).map(e => e.fieldName)), r(647095).f1(w.formatMessage(Z.validationError));
                                        return
                                    }
                                    r(436555).D6({
                                        label: w.formatMessage({
                                            defaultMessage: "Agent saved successfully",
                                            id: "workflows.agentTopbar.saveSuccess"
                                        })
                                    })
                                } catch (e) {
                                    r(436555).N2(), N(), Q.error({
                                        from: "AgentSettingsSidePeek",
                                        type: "publishWorkflowFailed",
                                        error: e,
                                        data: {
                                            workflowId: t.id
                                        }
                                    }), r(647095).f1(w.formatMessage({
                                        defaultMessage: "Failed to update agent",
                                        id: "workflows.agentTopbar.updateError"
                                    }))
                                } finally {
                                    K()
                                }
                            }
                        }
                    }, [N, F, b, k, K, t, w, U, R, M, o]), H = (0, i.useCallback)(async () => {
                        if (!U && ((0, r(599231).qt)({
                                action: "open_discard_changes_modal",
                                workflowId: t.id,
                                from: "agent_settings_view"
                            }), (await r(647095).Gh({
                                message: w.formatMessage({
                                    defaultMessage: "Are you sure you want to discard your unsaved changes?",
                                    id: "workflows.agentTopbar.resetConfirmMessage"
                                }),
                                acceptLabel: w.formatMessage({
                                    defaultMessage: "Discard changes",
                                    id: "workflows.agentTopbar.resetSubmitText"
                                }),
                                acceptColor: "red"
                            })).accept)) {
                            (0, r(599231).qt)({
                                action: "confirm_discard_changes",
                                workflowId: t.id,
                                from: "agent_settings_view"
                            });
                            try {
                                L(), r(436555).D6({
                                    label: w.formatMessage(Z.discardingProgress),
                                    durationMs: "keep"
                                }), await (0, r(439203).G)({
                                    environment: b,
                                    workflowStore: t
                                }), r(436555).D6({
                                    label: w.formatMessage(Z.discardChangesSuccess)
                                })
                            } catch (e) {
                                r(436555).N2(), V(), Q.error({
                                    from: "AgentSettingsSidePeek",
                                    type: "discardWorkflowChangesFailed",
                                    error: e,
                                    data: {
                                        workflowId: t.id
                                    }
                                }), r(436555).D6({
                                    label: w.formatMessage(Z.discardChangesFailed)
                                })
                            } finally {
                                z()
                            }
                        }
                    }, [V, b, z, L, t, w, U]);
                    return (0, a.jsxs)(r(4458).VP, {
                        height: "100%",
                        width: "100%",
                        children: [(0, a.jsx)(T, {
                            workflowStore: t,
                            onClose: l,
                            activeSidePeek: h,
                            onSidePeekChange: m,
                            disabled: n ? ? !1,
                            onShowVersionHistory: v,
                            sudoModeStore: S
                        }), (0, a.jsxs)("div", {
                            style: ee,
                            children: [(0, a.jsx)("div", {
                                style: J,
                                children: (0, a.jsx)(r(111010).D, {
                                    styleKey: "titleSmSemibold",
                                    colorVariant: "primary",
                                    children: (0, a.jsx)(r(109939).sA, {
                                        defaultMessage: "Settings",
                                        id: "workflows.agentTopbar.settings"
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                style: er
                            }), s && U ? (0, a.jsx)(r(517334).k, {
                                size: "sm"
                            }) : s && u.length > 0 && !c ? (0, a.jsx)(X, {
                                edits: u
                            }) : void 0, s && d && !c && !U ? (0, a.jsx)(r(51831).m, {
                                content: () => (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Discard changes",
                                    id: "workflows.agentTopbar.resetSubmitText"
                                }),
                                children: e => (0, a.jsx)(r(374533).A, {
                                    size: "md",
                                    colorVariant: "secondary",
                                    ariaLabel: w.formatMessage({
                                        defaultMessage: "Discard changes",
                                        id: "workflows.agentTopbar.resetSubmitText"
                                    }),
                                    icon: r(325336).arrowUTurnUpLeftIcon,
                                    onClick: H,
                                    disabled: n,
                                    ...e
                                })
                            }) : void 0, s && g ? (0, a.jsx)(r(548436).A, {
                                onClick: f,
                                disabled: (U || n) && !c,
                                iconLeading: {
                                    icon: r(58838).eyeSmallIcon,
                                    size: "sm"
                                },
                                size: "md",
                                children: (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Preview",
                                    id: "workflows.agentTopbar.preview"
                                })
                            }) : void 0, s ? (0, a.jsx)(r(912946).A, {
                                onClick: O,
                                colorPalette: "blue",
                                disabled: U || n || !d,
                                size: "md",
                                children: (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Save",
                                    id: "workflows.agentTopbar.save"
                                })
                            }) : void 0]
                        }), (0, a.jsx)("div", {
                            style: et,
                            children: (0, a.jsx)(r(22221).T, {
                                value: B,
                                children: (0, a.jsx)(r(330339).b, {
                                    workflowOrArtifactStore: t,
                                    workflowStore: t,
                                    disabled: n || !s,
                                    workflowValidationErrorStore: o
                                })
                            })
                        })]
                    })
                });

            function ea(e) {
                let {
                    isSyncingWithUpstream: t,
                    hasUnsavedChanges: r
                } = e, [a, o] = (0, i.useState)(!1), [n, s] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    !n || a || t || r || s(!1)
                }, [r, a, t, n]), (0, i.useEffect)(() => {
                    if (!n) return;
                    let e = setTimeout(() => {
                        s(!1)
                    }, 3e4);
                    return () => {
                        clearTimeout(e)
                    }
                }, [n]), (0, i.useEffect)(() => {
                    if (!a) return;
                    let e = setTimeout(() => {
                        o(!1)
                    }, 3e4);
                    return () => {
                        clearTimeout(e)
                    }
                }, [a]), {
                    isRequestPhaseActive: a,
                    isSyncPhaseActive: n || t,
                    isUpdatingUpstream: a || n || t,
                    markOperationStarted: (0, i.useCallback)(() => {
                        o(!0), s(!0)
                    }, []),
                    markOperationRequestFinished: (0, i.useCallback)(() => {
                        o(!1)
                    }, []),
                    markSyncingComplete: (0, i.useCallback)(() => {
                        s(!1)
                    }, [])
                }
            }

            function eo() {
                let e = document.querySelector('[data-section="tools-and-access"]');
                e instanceof HTMLElement && e.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }

            function en() {
                r(218744).default.getEligibleGroup({
                    experimentId: "ai_model_cost_validate_permissions",
                    defaultGroup: "control"
                })
            }

            function es({
                agentPeekState: e
            }) {
                let t = (0, r(533992).v3)(),
                    o = (0, i.useCallback)(() => {
                        (0, r(740744).$I)({
                            environment: t
                        })
                    }, [t]),
                    n = (0, r(682985).K8)(() => Math.min(r(475097).default.getSidePeekWidth(t.WindowSizeStore.state.width, r(475097).SIDEPEEK_MIN_WIDTH), (0, r(447036).QX)()), [t]),
                    s = i.useRef(null),
                    l = (0, r(500786).h)(e.agentId),
                    d = (0, r(682985).K8)(() => (null == l ? void 0 : l.getAlive()) === !1, [l]),
                    c = (0, r(960253).I)(() => ({
                        containerStyles: {
                            position: "absolute",
                            top: d ? r(772868).v : 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            zIndex: 109,
                            pointerEvents: e.open ? "auto" : "none"
                        },
                        contentStyles: { ...{
                                flexDirection: "column",
                                position: "absolute",
                                display: "flex",
                                marginInlineStart: "auto",
                                background: r(632079).Tj.background.elevated
                            },
                            top: 0,
                            insetInlineEnd: 0,
                            width: "100%",
                            height: "100%",
                            borderRadius: 0,
                            borderInlineStartWidth: 1,
                            borderInlineStartStyle: "solid",
                            borderInlineStartColor: r(632079).Tj.border.secondary
                        }
                    }), [e.open, d]),
                    u = (0, i.useCallback)(() => {
                        if (e.open) e.isOpening && r(273061).S.setState({ ...e,
                            isOpening: !1
                        });
                        else {
                            if (e.reopenSecondarySidebarOnClose) {
                                let {
                                    contentType: i,
                                    mode: a
                                } = e.reopenSecondarySidebarOnClose;
                                r(374176).default.afterNextFlush(() => {
                                    (0, r(477810).J$)({
                                        environment: t,
                                        contentType: i,
                                        modeOverride: a
                                    })
                                })
                            }(0, r(740744).a2)()
                        }
                    }, [e, t]);
                return e.agentId && e.mode ? (0, a.jsx)(r(369064).N, {
                    debugName: "AgentPeekRenderer",
                    capture: e.open,
                    onEsc: o,
                    children: (0, a.jsx)(r(654979).A, {
                        forceCompositeLayer: !0,
                        animate: {
                            translateX: e.open ? 0 : n,
                            width: n
                        },
                        initial: {
                            translateX: e.open && !e.isOpening ? 0 : n,
                            width: n
                        },
                        style: c.containerStyles,
                        className: r(828432).Hfz,
                        onAnimationEnd: u,
                        children: (0, a.jsxs)("div", {
                            style: c.contentStyles,
                            ref: s,
                            children: [(0, a.jsx)(r(691886).h, {
                                sidebarRef: s,
                                type: "peek"
                            }), (0, a.jsx)(ed, {
                                agentId: e.agentId,
                                mode: e.mode
                            }, e.agentId)]
                        })
                    })
                }) : null
            }
            let el = {
                height: "100%"
            };

            function ed(e) {
                let {
                    agentId: t,
                    mode: o
                } = e, n = (0, r(533992).v3)(), {
                    navigate: s
                } = (0, i.useContext)(r(44894).E), l = (0, r(972740).L)(), d = (0, r(500786).h)(t), c = (0, r(682985).uB)(void 0, r(128363).K), u = (0, r(682985).uB)(void 0, r(874003).A), [p, g] = (0, i.useState)(!1), [f, h] = (0, i.useState)(!1), [m, v] = (0, i.useState)({
                    type: "all"
                }), S = (0, r(684535).K)(), y = (0, r(611285).P)({
                    name: "custom_agents",
                    spaceId: null == l ? void 0 : l.id,
                    userId: n.currentUser.id
                }), x = (0, r(682985).K8)(() => (0, r(604384).jp)(d), [d]), b = (0, r(682985).K8)(() => (null == d ? void 0 : d.getAlive()) === !1, [d]), {
                    preview_button: w,
                    stuck_run_threshold_seconds: k,
                    basic_save_warning_modal: j = !1
                } = (0, r(682985).K8)(() => r(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }), []), _ = k ? ? r(187353).NK, I = (0, r(682985).K8)(() => {
                    if (!d) return {
                        hasNeverBeenPublished: !1,
                        hasChanges: !1,
                        edits: [],
                        isPublishedVersionLoading: !1,
                        hasEditPermission: !1
                    };
                    let e = d.getPublishedArtifactStore(),
                        t = null == e ? void 0 : e.getData(),
                        i = d.getDraftData(),
                        a = !!(e && !e.isReady()),
                        o = !!e && !a && void 0 === t;
                    if (!i || a) return {
                        hasNeverBeenPublished: !e,
                        hasChanges: !1,
                        edits: [],
                        isPublishedVersionLoading: a,
                        hasEditPermission: d.canEdit()
                    };
                    if (o) return {
                        hasNeverBeenPublished: !1,
                        hasChanges: d.hasChanges(),
                        edits: [],
                        isPublishedVersionLoading: !1,
                        hasEditPermission: d.canEdit()
                    };
                    let n = (0, r(886883).ap)(null == i ? void 0 : i.instructions) ? r(970831).B.createChildStore(d, i.instructions) : void 0,
                        {
                            edits: s,
                            hasChanged: l
                        } = (0, r(604789).x)({
                            oldWorkflow: t,
                            newWorkflow: i,
                            oldWorkflowLastEditedTime: null == t ? void 0 : t.publishTime,
                            newWorkflowLastEditedTime: null == n ? void 0 : n.getLastEditedTime(),
                            returnAllEditsEvenIfWorkflowMissing: !0
                        }),
                        c = t ? l : !d.isNewUneditedUnpublishedWorkflow();
                    return {
                        hasNeverBeenPublished: !!d && !e,
                        hasChanges: c,
                        edits: s,
                        isPublishedVersionLoading: a,
                        hasEditPermission: d.canEdit()
                    }
                }, [d]), C = (0, i.useMemo)(() => "failed" === m.type && _ ? { ...m,
                    stuckThresholdMs: 1e3 * _
                } : m, [m, _]), T = "all" !== m.type && "stats" !== m.type, M = (0, r(352118).s)({
                    parentStore: l,
                    threadStore: void 0,
                    workflowId: null == d ? void 0 : d.id,
                    isEnabled: !!(d && l),
                    enableInfiniteScroll: "activity" === o,
                    pageSize: 10,
                    filter: T ? C : void 0
                }), A = (0, i.useRef)(void 0);
                A.current || (A.current = new(r(331460)).t(M));
                let P = A.current;
                (0, i.useEffect)(() => {
                    P.updateThreadHistory(M)
                }, [P, M]);
                let B = (0, i.useCallback)(() => {
                        if ("agent" === S.name) return void s({
                            environment: n,
                            url: (0, r(453573).Lm)({
                                workflowId: S.workflowId,
                                params: {
                                    workflowViewType: "chat",
                                    workflowViewId: S.workflowViewId,
                                    workflowPrompt: S.workflowPrompt,
                                    chatThreadId: S.chatThreadId,
                                    agentChatThreadId: S.agentChatThreadId
                                }
                            })
                        });
                        if ("chat" === S.name) {
                            let e = {};
                            S.threadId && (e.t = (0, r(4962).Xw)(S.threadId)), s({
                                environment: n,
                                url: (0, r(758654).Gm)({
                                    url: "/chat",
                                    query: e
                                })
                            });
                            return
                        }(0, r(740744).zM)()
                    }, [n, s, S]),
                    D = (0, i.useCallback)(e => {
                        if (!e) return void B();
                        let i = (0, r(475097).getUrlParamFromPeekMode)(r(387722).A);
                        "agent" === S.name ? s({
                            environment: n,
                            url: (0, r(453573).Lm)({
                                workflowId: S.workflowId,
                                params: {
                                    workflowViewType: e,
                                    workflowViewId: S.workflowViewId,
                                    workflowPrompt: S.workflowPrompt,
                                    chatThreadId: S.chatThreadId,
                                    agentChatThreadId: S.agentChatThreadId
                                },
                                peekViewBlockId: S.workflowId,
                                peekModeParam: i
                            })
                        }) : "chat" === S.name && s({
                            environment: n,
                            url: (0, r(453573).YZ)({
                                workflowId: t,
                                workflowViewType: e,
                                peekModeParam: i,
                                threadId: S.threadId
                            })
                        })
                    }, [t, n, B, s, S]),
                    K = (0, i.useCallback)(() => h(!1), []),
                    N = (0, i.useCallback)(() => h(!0), []),
                    W = (0, i.useCallback)(() => g(!1), []),
                    L = (0, i.useCallback)(() => g(!0), []),
                    z = (0, i.useCallback)(async () => {
                        await P.refreshThreads()
                    }, [P]);
                if (!d || !l) return (0, a.jsx)(r(4458).fI, {
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, a.jsx)(r(517334).k, {})
                });
                let {
                    hasEditPermission: V,
                    hasNeverBeenPublished: U,
                    edits: F,
                    hasChanges: O,
                    isPublishedVersionLoading: H
                } = I, $ = b || !V || !y || x, q = "agent" === S.name ? S.agentChatThreadId : "chat" === S.name ? S.threadId : void 0;
                return (0, a.jsx)("div", {
                    style: el,
                    children: (0, a.jsxs)(r(916820).aG, {
                        store: P,
                        children: [f ? (0, a.jsx)(r(127268).D, {
                            workflowStore: d,
                            onClose: K
                        }) : void 0, p ? (0, a.jsx)(R, {
                            workflowStore: d,
                            isOpen: p,
                            onClose: W
                        }) : void 0, "settings" === o ? (0, a.jsx)(ei, {
                            workflowStore: d,
                            workflowValidationErrorStore: c,
                            disabled: $,
                            hasEditPermission: V,
                            onClose: B,
                            hasChanges: O,
                            hasNeverBeenPublished: U,
                            edits: F,
                            isPublishedVersionLoading: H,
                            shouldShowPreviewButton: !!w,
                            onPreview: L,
                            activeSidePeek: o,
                            onSidePeekChange: D,
                            onShowVersionHistory: N,
                            sudoModeStore: u,
                            spaceStore: l,
                            shouldShowBasicSaveWarningModal: j
                        }) : (0, a.jsx)(E, {
                            clientStore: r(57168).defaultClientAIChatStore,
                            workflowStore: d,
                            spaceStore: l,
                            workflowViewType: o,
                            activityFilter: m,
                            setActivityFilter: v,
                            onRefreshActivity: z,
                            onClose: B,
                            hasEditPermission: V,
                            activeThreadId: q,
                            activeSidePeek: o,
                            onSidePeekChange: D,
                            disabled: b,
                            onShowVersionHistory: N,
                            sudoModeStore: u
                        })]
                    })
                })
            }
            let ec = {
                containerStyles: {
                    position: "fixed",
                    top: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    insetInlineStart: 0,
                    zIndex: 99,
                    background: r(632079).Tj.overlaySmokescreen
                }
            };

            function eu() {
                let e = (0, r(682985).K8)(() => r(475097).default.state.open, []),
                    t = (0, i.useContext)(r(953075).w),
                    o = (0, r(960253).I)(() => ({
                        contentStyles: { ...ex(),
                            top: r(475097).PeekModeOuterPadding,
                            insetInlineStart: r(475097).PeekModeOuterPadding,
                            insetInlineEnd: r(475097).PeekModeOuterPadding,
                            marginInlineEnd: "auto",
                            height: `calc(100% - ${r(475097).PeekModeOuterPadding}px*2)`,
                            maxWidth: r(475097).CenterPeekModeOuterWidth + t,
                            borderRadius: 12,
                            overflow: "hidden"
                        }
                    }), [t]);
                return (0, a.jsx)(r(114596).O, {
                    open: e,
                    children: (0, a.jsx)(ef, {
                        enableCaptureClick: !0,
                        priority: void 0,
                        showResizer: !1,
                        styles: { ...o,
                            ...ec
                        }
                    })
                })
            }

            function ep() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(682985).O$)(r(475097).default),
                    o = (0, r(682985).K8)(() => r(475097).default.getSidePeekWidth(e.WindowSizeStore.state.width), [e]),
                    n = (0, r(684535).K)(),
                    s = "agent" === n.name ? n.workflowId : void 0,
                    l = (0, r(500786).h)(s),
                    d = (0, r(972740).L)(),
                    c = (0, r(682985).K8)(() => {
                        if ("chat" !== n.name || !n.threadId || !d) return;
                        let e = r(174148).E.createChildStore(d, {
                                table: r(832375).Toz,
                                id: n.threadId,
                                spaceId: d.id
                            }),
                            t = null == e ? void 0 : e.getParentStore();
                        if ((null == t ? void 0 : t.table) === r(832375).C0E) return t
                    }, [n, d]),
                    u = (0, r(682985).K8)(() => (null == l ? void 0 : l.getAlive()) === !1 || (null == c ? void 0 : c.getAlive()) === !1, [l, c]),
                    p = (0, r(960253).I)(() => ({
                        containerStyles: {
                            position: "absolute",
                            top: u ? r(772868).v : 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            width: o,
                            zIndex: 109
                        },
                        contentStyles: { ...ex(),
                            top: 0,
                            insetInlineEnd: 0,
                            width: "100%",
                            height: "100%",
                            borderRadius: 0
                        }
                    }), [o, u]),
                    g = (0, r(682985).O$)(r(825244).P),
                    f = (0, r(682985).O$)(r(984858).peekResizingStore),
                    h = i.useRef(null);
                return (0, a.jsx)(r(654979).A, {
                    tag: ef,
                    forceCompositeLayer: !0,
                    skip: g || f,
                    animate: {
                        translateX: t.open && !t.isClosing ? 0 : o,
                        width: o
                    },
                    initial: {
                        translateX: t.open ? 0 : o
                    },
                    onAnimationStart: () => {
                        h.current = performance.now()
                    },
                    onAnimationEnd: () => {
                        let e = h.current ? Math.round(performance.now() - h.current) : null;
                        if (h.current = null, !t.open) return;
                        let i = t.isClosing ? "side_peek_renderer_animation_closing" : "side_peek_renderer_animation_opening";
                        t.isClosing ? (r(475097).default.setState({ ...t,
                            isClosing: !1
                        }), r(270912).YH()) : t.isOpening && r(475097).default.setState({ ...t,
                            isOpening: !1
                        }), e && (0, r(104310).u)({
                            event: {
                                eventName: i,
                                eventProperties: {
                                    duration_ms: e
                                }
                            }
                        })
                    },
                    enableCaptureClick: !1,
                    priority: -1,
                    showResizer: !0,
                    styles: p
                })
            }

            function eg() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(682985).O$)(r(475097).default),
                    {
                        currentSpaceStore: i,
                        currentSpaceViewStore: o
                    } = (0, r(682985).K8)(() => ({
                        currentSpaceStore: r(728372).AppStoreSidebarSpaceStore.state,
                        currentSpaceViewStore: r(728372).AppStoreSidebarSpaceViewStore.state
                    }), []),
                    n = (0, r(682985).K8)(() => {
                        var e;
                        return !!t.open && (t.showMoveTo || (null == (e = t.collectionContextStore) ? void 0 : e.contextTypeFromStoreState) === "collectionTypedView")
                    }, [t]);
                return t.open ? (0, a.jsx)(y, {
                    store: t.targetStore,
                    spaceStore: i,
                    spaceViewStore: o,
                    pageVisitStore: t.pageVisitStore,
                    presenceStore: t.presenceStore,
                    shouldShowMoveToMenu: n,
                    onClose: t => {
                        ej(e, t)
                    }
                }) : null
            }
            let ef = i.forwardRef(function(e, t) {
                    let {
                        priority: o
                    } = e, n = (0, r(533992).v3)(), s = (0, r(682985).O$)(r(475097).default), l = (0, r(682985).K8)(() => (0, r(846044).X)(n).shouldShowFrame, [n]), d = (0, r(682985).K8)(() => r(447036).Gb(), []), c = (0, r(682985).K8)(() => s.open && 0 === r(584265).default.state.stores.length && !r(584265).default.state.pivot && "editing" !== r(358377).default.state.mode && !r(880904).Ay.state.isOpen, [s.open]), u = (0, i.useCallback)(() => {
                        ej(n, "esc")
                    }, [n]), p = (0, i.useCallback)(() => {
                        var e;
                        e = n, r(475097).default.peekTargetStore.state && ((0, r(545586).navigateToBlock)({
                            environment: e,
                            store: r(475097).default.peekTargetStore.state,
                            pageVisitSource: r(254656).y8.Expand
                        }), r(20557).uO(e, {
                            isNewPage: r(475097).default.state.open && r(475097).default.state.showMoveTo,
                            peek_mode: r(475097).default.state.mode,
                            from: "command_enter",
                            target_page_id: r(475097).default.peekTargetStore.state.id
                        }), r(20557).Zh(e, {
                            peek_mode: r(475097).default.state.mode,
                            from: "command_enter",
                            target_page_id: r(475097).default.peekTargetStore.state.id,
                            target_parent_id: r(475097).default.peekTargetStore.state.getParentId()
                        }))
                    }, [n]);
                    if (!l) return null;
                    let g = s.open ? (0, a.jsx)(r(683078).A, {
                        debugName: "PeekRenderer",
                        priority: o,
                        capture: d
                    }) : null;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [g, (0, a.jsx)(r(369064).N, {
                            debugName: "PeekRenderer",
                            innerKey: s.open ? s.targetStore.id : void 0,
                            capture: s.open && c,
                            onEsc: s.open ? u : void 0,
                            onCommandEnter: s.open ? p : void 0,
                            children: (0, a.jsx)(eS, { ...e,
                                ref: t
                            })
                        })]
                    })
                }),
                eh = {
                    width: "100%",
                    height: "100%"
                },
                em = {
                    position: "absolute",
                    top: 10,
                    transform: "translateX(-100%)",
                    insetInlineStart: -10
                },
                ev = {
                    position: "relative",
                    width: "100%",
                    flexGrow: 1
                },
                eS = i.forwardRef(function(e, t) {
                    let {
                        enableCaptureClick: o,
                        bottomBar: n,
                        showResizer: s
                    } = e, l = (0, i.useCallback)(e => {
                        r(862921).A.PeekViewScroller = e ? ? void 0
                    }, []), d = (0, r(109939).tz)(), c = (0, r(533992).v3)(), u = (0, r(682985).O$)(r(475097).default), p = i.useRef(null), g = (0, r(67499).S)(), f = (0, r(682985).r6)(() => u.open ? r(827482).A.getMode(c, u.targetStore, u.targetStore.getSpaceStore()) : r(827482).s.disabled, [c, u]), h = (0, r(682985).r6)(() => (0, r(576348).ZE)(f.state, null == g ? void 0 : g.pageStore), [f, g]), m = (0, r(682985).K8)(() => {
                        if (!u.open) return;
                        let e = u.targetStore,
                            t = e.getSpaceStore();
                        return {
                            isPeekRenderer: !0,
                            pageStore: e,
                            spaceStore: t,
                            spaceViewStore: t ? (0, r(593303).k)(t.id) : void 0,
                            presenceStore: u.presenceStore,
                            pageVisitStore: u.pageVisitStore,
                            publicEditModeStore: f,
                            arePublicEditCompletionsEnabledStore: h
                        }
                    }, [u, f, h]), v = (0, i.useCallback)(() => {
                        ej(c, "esc")
                    }, [c]), S = (0, i.useCallback)(() => {
                        ej(c, "empty_space_click")
                    }, [c]);
                    (0, i.useEffect)(() => {
                        u.open && u.mode === r(387722).O ? (0, r(960831).j)(!0) : (0, r(960831).j)(!1)
                    }, [u.open, u.mode]);
                    let y = (0, r(682985).O$)(r(585823).ei),
                        x = (0, r(475717).l)(u.open ? u.targetStore : void 0),
                        {
                            modules: b
                        } = (0, r(573511).f)(u.open ? u.targetStore : void 0);
                    (0, r(27469).Du)(c, x);
                    let w = (0, r(682985).K8)(() => (0, r(27469).eO)({
                            environment: c,
                            isInPeek: !0
                        }), [c]),
                        k = (0, r(682985).K8)(() => (0, r(27469).Wi)({
                            environment: c,
                            isInPeek: !0
                        }), [c]),
                        j = (0, r(682985).K8)(() => r(475097).default.isSidePeekOpen() && r(585823).I1.state, []),
                        _ = (0, r(682985).K8)(() => r(82702).A.getPanelState("peek").isOpen, []),
                        I = (0, r(682985).K8)(() => {
                            if (!u.open) return !1;
                            let e = u.targetStore.getAssociatedCollectionStore();
                            return !!e && (0, r(27469)._D)({
                                collectionStore: e
                            })
                        }, [u]),
                        C = (0, r(960253).I)(() => ({ ...e.styles,
                            containerStyles: { ...e.styles.containerStyles,
                                ...e.style
                            },
                            layoutStaticSidebar: {
                                width: w,
                                flexShrink: 0,
                                paddingBottom: 24,
                                borderInlineStart: `1px solid ${r(632079).Tj.border.secondary}`
                            }
                        }), [e.styles, e.style, w]),
                        T = (0, r(825154).d)(e => {
                            let t = e.target;
                            t instanceof Element && t.closest(`.${r(828432).S6D}`) ? r(475097).default.setTopHoverAreaEntered(!0) : r(475097).default.setTopHoverAreaEntered(!1)
                        }, 100),
                        M = (0, r(473182).x9)();
                    i.useEffect(() => (window.addEventListener("mousemove", T), () => window.removeEventListener("mousemove", T)), [T]);
                    let A = u.scrollToBlockId ? u.scrollToBlockId : void 0,
                        P = (0, r(684535).K)();
                    (0, i.useEffect)(() => {
                        if (!u.open || !u.loadingContainerStore.state.ready || !u.targetStore) return;
                        let e = ("page" === P.name || "chat" === P.name || "meet" === P.name || "agent" === P.name) && P.scrollToBlockId;
                        "page" !== P.name && "chat" !== P.name || !P.discussionId || A || e || ((0, r(773777).d)(c, []), r(821243).B4({
                            environment: c,
                            blockStore: u.targetStore,
                            discussionIds: [P.discussionId],
                            analyticsFrom: "page_load",
                            shouldFocusDiscussion: !0,
                            recursivelyLoadAllDiscussions: !1
                        }))
                    }, [c, u, A, P]);
                    let E = (0, r(682985).O$)(h),
                        B = (0, r(682985).K8)(() => !!u.open && u.targetStore.isReady() && (!u.targetStore.canRead() || !u.targetStore.isDefined()), [u]),
                        D = i.useMemo(() => r(546605).Store.createValue({}), []),
                        R = (0, r(682985).K8)(() => {
                            if (u.open) return D.state[u.targetStore.id]
                        }, [u, D]),
                        K = (0, r(682985).K8)(() => !!u.open && u.targetStore.isPersonProfile(), [u]),
                        N = (0, r(994732).x)();
                    return (0, i.useEffect)(() => {
                        if (!u.open || !B || void 0 !== D.state[u.targetStore.id]) return;
                        let e = u.targetStore;
                        r(687544).Li({
                            environment: c,
                            request: {
                                type: "block-space",
                                blockId: e.id,
                                spaceId: e.getSpaceId()
                            },
                            ignoreLocalResult: !0
                        }).then(t => {
                            let {
                                publicPageData: r
                            } = t ? ? {};
                            D.update(t => ({ ...t,
                                [e.id]: !!(null == r ? void 0 : r.canRequestAccess)
                            }))
                        }).catch(e => {
                            console.error(e)
                        })
                    }, [B, u, c, D]), (0, a.jsx)(r(332136).q, {
                        value: m,
                        children: (0, a.jsx)("div", {
                            role: "region",
                            "aria-label": d.formatMessage({
                                id: "peekRenderer.ariaLabel",
                                defaultMessage: "Side Peek"
                            }),
                            "aria-hidden": !u.open || void 0,
                            style: C.containerStyles,
                            className: r(828432).Hfz,
                            ref: t,
                            children: u.open ? (0, a.jsxs)(a.Fragment, {
                                children: [o ? (0, a.jsx)("div", {
                                    style: eh,
                                    onClick: S
                                }) : void 0, (0, a.jsxs)("div", {
                                    style: C.contentStyles,
                                    ref: p,
                                    children: [j ? (0, a.jsx)("div", {
                                        style: em,
                                        children: (0, a.jsx)(r(315144).a, {
                                            rootStore: y
                                        })
                                    }) : void 0, s ? (0, a.jsx)(r(691886).h, {
                                        sidebarRef: p,
                                        type: "peek"
                                    }) : void 0, (0, a.jsx)(eg, {}), M ? (0, a.jsx)(r(121930).w, {}) : void 0, (0, a.jsx)(r(271954).t, {}), (0, a.jsx)(r(318981).A, {
                                        store: u.targetStore,
                                        isDefaultContainer: !0,
                                        droppable: !0,
                                        render: ({
                                            selectableEvents: e,
                                            selectableHoverMenuOverlay: t
                                        }) => {
                                            let o = {
                                                pageStore: u.targetStore,
                                                pageVisitStore: u.pageVisitStore,
                                                render: ({
                                                    ready: o,
                                                    initialRequestCompleted: n,
                                                    endOfResultsReached: s,
                                                    isCollectionInPage: d,
                                                    scrollerRef: c
                                                }) => (0, a.jsxs)("div", {
                                                    style: I ? {
                                                        flexGrow: 1,
                                                        display: "flex",
                                                        minHeight: 0
                                                    } : {
                                                        display: "contents"
                                                    },
                                                    children: [o ? void 0 : (0, a.jsx)("div", {
                                                        style: ev,
                                                        children: (0, a.jsx)(r(866147).A, {
                                                            peekMode: r(475097).default.getPeekMode(),
                                                            isVisible: !o,
                                                            store: u.targetStore
                                                        })
                                                    }), B && void 0 !== R ? (0, a.jsx)(r(592599).O, {
                                                        canRequestAccess: R,
                                                        block: {
                                                            id: u.targetStore.id,
                                                            spaceId: u.targetStore.getSpaceId()
                                                        }
                                                    }) : void 0, B ? void 0 : (0, a.jsxs)(a.Fragment, {
                                                        children: [(0, a.jsxs)(r(126767).H, {
                                                            ref: e => {
                                                                if (l(e), c) {
                                                                    let t = null == e ? void 0 : e.getNode();
                                                                    t instanceof HTMLElement && (c.current = t)
                                                                }
                                                            },
                                                            preventType: o ? N : r(644154).A.All,
                                                            type: r(644154).A.Y,
                                                            style: o ? eb : ew,
                                                            store: r(391880).A,
                                                            ...e,
                                                            children: [t, E ? (0, a.jsx)(r(712155).H7, {
                                                                scrollerStore: r(391880).A
                                                            }) : void 0, (0, a.jsx)(r(872762).E, {
                                                                scrollerStore: r(391880).A
                                                            }), n ? (0, a.jsxs)(i.Fragment, {
                                                                children: [K ? (0, a.jsx)(r(587386).PersonProfileContainer, {
                                                                    personProfileStore: u.targetStore
                                                                }) : (0, a.jsx)(r(865594).AT, {
                                                                    context: r(166654).R.PeekView,
                                                                    store: u.targetStore,
                                                                    onTitleEsc: v,
                                                                    forceSelectTitleOnMount: !0,
                                                                    paddingBottom: r(447036).ln,
                                                                    styleOverrides: ey,
                                                                    disabled: !u.open || u.isClosing
                                                                }), (0, a.jsx)(r(972233).l, {
                                                                    pageVisitStore: u.pageVisitStore,
                                                                    presenceStore: u.presenceStore,
                                                                    isPeekView: !0
                                                                })]
                                                            }) : void 0, o && !s ? (0, a.jsx)(r(517334).k, {
                                                                style: ek
                                                            }) : void 0]
                                                        }), E ? (0, a.jsx)(r(712155).X9, {
                                                            scrollerKey: "PeekView"
                                                        }) : void 0, (0, a.jsx)(r(654979).A, {
                                                            visible: I,
                                                            forceCompositeLayer: !0,
                                                            animate: {
                                                                width: w
                                                            },
                                                            initial: {
                                                                translateX: _ ? 0 : w
                                                            },
                                                            style: C.layoutStaticSidebar,
                                                            children: (0, a.jsx)("div", {
                                                                style: {
                                                                    width: k,
                                                                    height: "100%"
                                                                },
                                                                children: (0, a.jsx)(r(539888).H, {
                                                                    store: u.targetStore,
                                                                    context: r(166654).R.PeekView,
                                                                    disabled: !u.open || u.isClosing || !_,
                                                                    shownAs: "static_sidebar",
                                                                    modules: b
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                })
                                            };
                                            return (0, a.jsx)(i.Suspense, {
                                                fallback: (0, a.jsx)(r(866147).A, {
                                                    peekMode: r(475097).default.getPeekMode(),
                                                    isVisible: !0,
                                                    store: u.targetStore
                                                }),
                                                children: (0, a.jsx)(r(757619).V, { ...o,
                                                    store: u.loadingContainerStore,
                                                    scrollToBlockIds: A ? [A] : void 0,
                                                    onReady: () => {
                                                        r(89700).M(c, {
                                                            animateScrollToBlocks: !0,
                                                            shouldScroll: !0,
                                                            scrollToBlockId: A
                                                        })
                                                    }
                                                })
                                            })
                                        }
                                    }, u.targetStore.id), n]
                                })]
                            }) : void 0
                        })
                    })
                }),
                ey = {
                    pageCoverHeight: "20vh"
                };

            function ex() {
                return {
                    flexDirection: "column",
                    position: "absolute",
                    display: "flex",
                    marginInlineStart: "auto",
                    background: r(632079).Tj.background.elevated,
                    boxShadow: r(632079).Tj.shadow.outline.md
                }
            }
            let eb = {
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    position: "relative",
                    transform: "translateZ(0)"
                },
                ew = { ...eb,
                    opacity: 0,
                    pointerEvents: "none",
                    height: 0
                },
                ek = {
                    zIndex: 1,
                    opacity: .5,
                    width: r(311336).K,
                    height: r(311336).K,
                    marginTop: 0,
                    marginBottom: 24,
                    marginInlineStart: "auto",
                    marginInlineEnd: "auto"
                };

            function ej(e, t) {
                r(270912).VN({
                    environment: e,
                    from: t
                })
            }
            let e_ = function() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(682985).O$)(r(273061).S),
                    o = (0, r(682985).K8)(() => {
                        let e = r(475097).default.state.open ? r(475097).default.state.targetStore : void 0;
                        return null == e ? void 0 : e.getSystemBlockTypeStore().getValue()
                    }, []),
                    n = (0, i.useCallback)(() => {
                        r(475097).default.state.open && r(475097).default.isSidePeekOpen() && ((0, r(219743).g)(e), r(475097).default.setState({ ...r(475097).default.state,
                            isOpening: !1
                        })), r(273061).S.state.open && r(273061).S.state.agentId && (0, r(219743).g)(e)
                    }, [e]);
                (0, i.useEffect)(() => (e.WindowSizeStore.addListener(n), () => e.WindowSizeStore.removeListener(n)), [e.WindowSizeStore, n]), (0, i.useEffect)(() => {
                    (0, r(512845).mi)(o) && r(270912).VN({
                        environment: e,
                        from: "invalid_peek_page"
                    })
                }, [e, o]);
                let s = (0, r(682985).K8)(() => r(475097).default.getPeekMode(), []);
                if (t.agentId && t.mode) return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(es, {
                        agentPeekState: t
                    }), s === r(387722).O ? (0, a.jsx)(eu, {}) : s === r(387722).A ? (0, a.jsx)(ep, {}) : void 0]
                });
                switch (s) {
                    case r(387722).O:
                        return (0, a.jsx)(eu, {});
                    case r(387722).A:
                        return (0, a.jsx)(ep, {})
                }
            }
        },
        213039: (e, t, r) => {
            r.d(t, {
                M: () => o
            }), r(296540);
            var i = r(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.25 15.25 11.5",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M3 7.375h6.829a2.501 2.501 0 0 0 4.842 0H17a.625.625 0 1 0 0-1.25h-2.329a2.501 2.501 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25M12.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.75 15.75a2.5 2.5 0 0 0 2.421-1.875H17a.625.625 0 1 0 0-1.25h-6.829a2.5 2.5 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25h2.329A2.5 2.5 0 0 0 7.75 15.75m0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",
                            clipRule: "evenodd"
                        })]
                    })
                },
                o = (0, r(104509).wt)("sliders", a, "default")
        },
        271954: (e, t, r) => {
            r.d(t, {
                t: () => n
            });
            var i = r(296540),
                a = r(474848);
            let o = {
                style0: {
                    gap: 4
                },
                content: {
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 16,
                    textAlign: "center",
                    fontSize: 14,
                    gap: 16,
                    zIndex: 2,
                    top: "50%",
                    insetInlineStart: "50%",
                    transform: "translate(calc(var(--direction, 1) * -50%), -50%)",
                    maxWidth: 282,
                    lineHeight: "20px"
                },
                blurContainer: {
                    position: "fixed",
                    backdropFilter: "blur(18px)",
                    height: "100%",
                    width: "100%",
                    zIndex: 1
                },
                buttonWrapper: {
                    paddingInlineStart: "10px",
                    paddingInlineEnd: "12px"
                },
                opacityContainer: {
                    position: "fixed",
                    opacity: .4,
                    zIndex: 1,
                    background: r(632079).Tj.white,
                    height: "100%",
                    width: "100%"
                },
                secondaryMessage: {
                    color: r(632079).Tj.text.secondary,
                    textAlign: "center",
                    fontSize: 12,
                    lineHeight: "16px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function n() {
                var e;
                let t, n, s, l, d, c, u, p = (0, r(533992).v3)(),
                    g = (t = (0, r(83208).X)("blur_missing_name_spaces"), n = (0, r(972740).L)(), s = (0, r(226309)._3)({
                        spaceId: null == n ? void 0 : n.id
                    }), l = (0, r(192159).Fq)(s) && !(0, r(192159).Qx)(null == s ? void 0 : s.subscription), d = !!(null == s || null == (e = s.address) ? void 0 : e.name), c = (0, r(84163).J)(n), u = null == s ? void 0 : s.provider, t && c && l && !d && "app_store" !== u && "play_store" !== u),
                    f = (0, r(682985).K8)(() => (0, r(887788).h)(p), [p]);
                return ((0, i.useEffect)(() => {
                    g && (0, r(104310).u)({
                        event: {
                            eventName: "missing_name_blur_overlay_displayed",
                            eventProperties: {}
                        }
                    })
                }, [g, p]), g) ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        style: o.content,
                        children: [(0, a.jsx)(r(16275).I, {
                            icon: r(157160).lockIcon,
                            size: 24,
                            colorVariant: "primary"
                        }), (0, a.jsxs)(r(4458).VP, {
                            gap: 12,
                            className: "autolayout-fill-width",
                            style: o.positionRelative,
                            children: [(0, a.jsx)("div", {
                                children: f ? (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Access to Notion is limited because we need your billing name",
                                    id: "missingNameBlurExperience.missingNameBlurOverlay.messageContent"
                                }) : (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Access to Notion is limited",
                                    id: "missingNameBlurExperience.missingNameBlurOverlay.memberMessageContent"
                                })
                            }), (0, a.jsx)("div", {
                                style: o.secondaryMessage,
                                children: f ? void 0 : (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Contact a workspace owner to update your workspace’s billing name",
                                    id: "missingNameBlurExperience.missingNameBlurOverlay.memberSecondaryLabel"
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            style: o.buttonWrapper,
                            children: (0, a.jsx)(r(548436).A, {
                                style: o.style0,
                                size: "lg",
                                onClick: () => {
                                    (0, r(104310).u)({
                                        event: {
                                            eventName: "missing_name_blur_overlay_cta_clicked",
                                            eventProperties: {
                                                is_workspace_owner: f
                                            }
                                        }
                                    }), f ? r(599754).Ow({
                                        currentPage: "billing",
                                        tab: "address"
                                    }) : r(599754).Ow()
                                },
                                children: f ? (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Update billing name",
                                    id: "missingNameBlurExperience.missingNameBlurOverlay.buttonLabel"
                                }) : (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "View workspace owner",
                                    id: "missingNameBlurExperience.missingNameBlurOverlay.memberButtonLabel"
                                })
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        style: o.blurContainer
                    }), (0, a.jsx)("div", {
                        style: o.opacityContainer
                    })]
                }) : null
            }
        },
        311336: (e, t, r) => {
            r.d(t, {
                K: () => i
            });
            let i = "1.375em"
        },
        336198: (e, t, r) => {
            r.d(t, {
                M: () => s
            });
            var i = r(296540);
            async function a(e) {
                let {
                    environment: t,
                    runId: r,
                    spaceId: i
                } = e;
                try {
                    let e = await t.api.callCellCompatibleApi({
                        eventName: "reenqueueWorkflowAutomation",
                        environment: t,
                        data: {
                            runIds: [r],
                            spaceId: i,
                            forceFastPath: !0
                        },
                        cellNavigation: {
                            spaceId: i
                        }
                    });
                    if ("success" !== e.type) {
                        var a;
                        return {
                            success: !1,
                            error: (null == (a = e.error) ? void 0 : a.message) || "Failed to run now"
                        }
                    }
                    let o = e.data.results[0];
                    if (!o) return {
                        success: !1,
                        error: "Failed to run now"
                    };
                    if ("success" === o.status) return {
                        success: !0
                    };
                    return {
                        success: !1,
                        error: o.errorMessage || "Failed to run now"
                    }
                } catch (e) {
                    return {
                        success: !1,
                        error: e instanceof Error ? e.message : "Failed to run now"
                    }
                }
            }
            r(16280);
            var o = r(474848);
            let n = (0, r(109939).YK)({
                success: {
                    id: "workflow.runNow.success",
                    defaultMessage: "Run started"
                },
                successAriaLabel: {
                    id: "workflow.runNow.successAriaLabel",
                    defaultMessage: "Run successfully started"
                },
                tooltip: {
                    id: "workflow.runNow.tooltip",
                    defaultMessage: "Run now"
                },
                ariaLabel: {
                    id: "workflow.runNow.ariaLabel",
                    defaultMessage: "Run now"
                }
            });

            function s(e) {
                let {
                    runStore: t,
                    onSuccess: s,
                    mode: l = "icon"
                } = e, d = (0, r(533992).v3)(), c = (0, r(109939).tz)(), [u, p] = (0, i.useState)(!1), [g, f] = (0, i.useState)(void 0), h = async e => {
                    e.stopPropagation(), f(void 0);
                    let r = t.getSpaceId();
                    if (!r) return void f("Unable to determine space");
                    let i = await a({
                        environment: d,
                        runId: t.id,
                        spaceId: r
                    });
                    i.success ? (p(!0), null == s || s(), setTimeout(() => {
                        p(!1)
                    }, 2e3)) : f(i.error || "Failed to run now")
                };
                return u ? "button" === l ? (0, o.jsx)(r(548436).A, {
                    size: "sm",
                    disabled: !0,
                    iconLeading: {
                        icon: r(437102).checkmarkCircleSmallIcon,
                        size: "xxs"
                    },
                    children: (0, o.jsx)(r(109939).sA, { ...n.success
                    })
                }) : (0, o.jsx)(r(51831).m, {
                    placement: "top",
                    content: () => c.formatMessage(n.success),
                    children: e => (0, o.jsx)(r(374533).A, { ...e,
                        icon: r(437102).checkmarkCircleSmallIcon,
                        colorPalette: "green",
                        size: "sm",
                        disabled: !0,
                        ariaLabel: c.formatMessage(n.successAriaLabel)
                    })
                }) : "button" === l ? (0, o.jsx)(r(51831).m, {
                    placement: "top",
                    content: () => g || c.formatMessage(n.tooltip),
                    children: e => (0, o.jsx)("span", { ...e,
                        children: (0, o.jsx)(r(548436).A, {
                            size: "sm",
                            onClick: h,
                            iconLeading: {
                                icon: r(781184).w,
                                size: "xxs"
                            },
                            children: (0, o.jsx)(r(109939).sA, { ...n.tooltip
                            })
                        })
                    })
                }) : (0, o.jsx)(r(51831).m, {
                    placement: "top",
                    content: () => g || c.formatMessage(n.tooltip),
                    children: e => (0, o.jsx)(r(374533).A, { ...e,
                        icon: r(781184).w,
                        colorPalette: g ? "red" : "gray",
                        size: "sm",
                        onClick: h,
                        ariaLabel: c.formatMessage(n.ariaLabel)
                    })
                })
            }
        },
        352118: (e, t, r) => {
            r.d(t, {
                s: () => l
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454);
            var i = r(296540),
                a = () => r(174148),
                o = () => r(832375);
            let n = new(r(277637)).G(() => 0);
            async function s(e) {
                var t, i;
                let {
                    environment: a,
                    parentStore: n,
                    workflowId: s,
                    limit: l,
                    cursor: d,
                    types: c,
                    userId: u,
                    filter: p,
                    includeWriterChats: g
                } = e;
                if (!r(205885).A.state.online) return;
                let f = n.table === o().NXh ? n.id : n.getSpaceId();
                if (s) {
                    let e = await a.api.callCellCompatibleApi({
                        eventName: "getInferenceTranscriptsForWorkflow",
                        environment: a,
                        cellNavigation: {
                            spaceId: f
                        },
                        data: {
                            workflowId: s,
                            spaceId: f,
                            userId: u,
                            limit: l,
                            cursor: d,
                            filter: p
                        }
                    });
                    if ("failed" === e.type) return;
                    return {
                        threadIds: e.data.threadIds ? ? (null == (t = e.data.transcripts) ? void 0 : t.map(e => e.id)) ? ? [],
                        nextCursor: e.data.nextCursor,
                        isPausedByNotion: e.data.isPausedByNotion
                    }
                } {
                    let e = n.table === o().NXh ? {
                            table: o().NXh,
                            id: n.id,
                            spaceId: n.id
                        } : n.getSpaceShardedPointer(),
                        t = await a.api.callCellCompatibleApi({
                            eventName: "getInferenceTranscriptsForUser",
                            environment: a,
                            cellNavigation: {
                                spaceId: f
                            },
                            data: {
                                threadParentPointer: e,
                                limit: l,
                                cursor: d,
                                types: c,
                                includeWriterChats: g
                            }
                        });
                    if ("failed" === t.type) return;
                    return {
                        threadIds: t.data.threadIds ? ? (null == (i = t.data.transcripts) ? void 0 : i.map(e => e.id)) ? ? [],
                        nextCursor: t.data.nextCursor
                    }
                }
            }

            function l(e) {
                let {
                    parentStore: t,
                    threadStore: l,
                    workflowId: d,
                    enableInfiniteScroll: c = !1,
                    pageSize: u,
                    types: p,
                    userId: g,
                    filter: f,
                    shouldListenForNewThreads: h = !1,
                    includeWriterChats: m = !1
                } = e, v = e.isEnabled ? ? !0, S = !d && h, y = (0, r(533992).v3)(), x = (0, r(109939).tz)(), b = (0, i.useMemo)(() => [t ? t.table === o().NXh ? t.id : t.getSpaceId() : void 0, d ? ? "personal", S ? "exclude_workflow_owned" : "all_owned", g, p ? p.join(",") : "", f ? JSON.stringify(f) : "", c ? "infinite" : "finite", u, v ? "enabled" : "disabled", m ? "withWriter" : "noWriter"].join("|"), [c, f, v, u, t, S, p, g, d, m]), [w, k] = (0, i.useState)(() => ({
                    queryKey: b,
                    loadedThreadIds: [],
                    cursor: void 0,
                    isLoadingMore: !1,
                    isPausedByNotion: void 0
                })), j = w.loadedThreadIds, _ = w.cursor, I = w.isLoadingMore, [C, T] = (0, i.useState)(() => new Set);
                (0, i.useEffect)(() => {
                    k(e => e.queryKey === b ? e : {
                        queryKey: b,
                        loadedThreadIds: [],
                        cursor: void 0,
                        isLoadingMore: !1,
                        isPausedByNotion: void 0
                    })
                }, [b]);
                let M = (0, r(682985).K8)(() => {
                        if (t) return t.table === o().NXh ? t : (0, r(974410).f)(t)
                    }, [t]),
                    [A, P] = (0, r(97668).Yb)(async () => {
                        if (!v || !t) return;
                        let e = await s({
                            environment: y,
                            parentStore: t,
                            workflowId: d,
                            limit: c ? u : void 0,
                            types: p,
                            userId: g,
                            filter: f,
                            includeWriterChats: m
                        });
                        if (!e) return;
                        let {
                            threadIds: r,
                            nextCursor: i,
                            isPausedByNotion: a
                        } = e;
                        return {
                            threadIds: r ? ? [],
                            nextCursor: i,
                            isPausedByNotion: a
                        }
                    }, [t, y, v, d, c, u, p, g, f, m]);
                (0, i.useEffect)(() => {
                    if ("resolved" !== A.status || !A.value) return;
                    let {
                        threadIds: e,
                        nextCursor: t,
                        isPausedByNotion: r
                    } = A.value;
                    k(i => {
                        if (i.queryKey !== b) return i;
                        let a = c ? function(e, t) {
                            let r = new Set(e),
                                i = [...e];
                            for (let e of t) r.has(e) || (r.add(e), i.push(e));
                            return i
                        }(e, i.loadedThreadIds) : e;
                        return { ...i,
                            loadedThreadIds: a,
                            cursor: c ? t : i.cursor,
                            isPausedByNotion: r
                        }
                    })
                }, [A.status, A.value, c, b]);
                let E = (0, r(84235).Y)(() => {
                    N()
                }, 500);
                (0, i.useEffect)(() => {
                    if (!d || "resolved" !== A.status || !A.value) return;
                    let e = n.get(d),
                        t = j.length;
                    e !== t && (r(707964).u4({
                        name: "thread_history_loaded",
                        args: {
                            count: t
                        }
                    }), n.set(d, t))
                }, [d, j.length, A.status, A.value]), (0, i.useEffect)(() => {
                    if (!v || !d || !h) return;
                    let e = r(48091).Ay.addListener({
                        key: (0, r(568479).y3)({
                            workflowId: d
                        }),
                        authorizationToken: void 0,
                        listener: E,
                        subscriptionId: void 0
                    });
                    return () => {
                        e && r(48091).Ay.removeListener(e), E.cancel()
                    }
                }, [y, v, d, E, h]), (0, i.useEffect)(() => {
                    null != l && l.id && T(e => {
                        if (e.has(l.id)) return e;
                        let t = new Set(e);
                        return t.add(l.id), t
                    })
                }, [null == l ? void 0 : l.id]);
                let B = (0, i.useCallback)(async () => {
                        if (w.queryKey !== b || !t || !c || !_ || w.isLoadingMore) return;
                        let e = w.queryKey;
                        k(t => t.queryKey !== e ? t : { ...t,
                            isLoadingMore: !0
                        });
                        try {
                            let r = await s({
                                environment: y,
                                parentStore: t,
                                workflowId: d,
                                limit: u,
                                cursor: _,
                                types: p,
                                userId: g,
                                filter: f,
                                includeWriterChats: m
                            });
                            if (r) {
                                let {
                                    threadIds: t,
                                    nextCursor: i
                                } = r, a = t ? ? [];
                                k(t => {
                                    if (t.queryKey !== e) return t;
                                    let r = new Set(t.loadedThreadIds),
                                        o = [...t.loadedThreadIds];
                                    for (let e of a) r.has(e) || (r.add(e), o.push(e));
                                    return { ...t,
                                        loadedThreadIds: o,
                                        cursor: i
                                    }
                                })
                            }
                        } finally {
                            k(t => t.queryKey !== e ? t : { ...t,
                                isLoadingMore: !1
                            })
                        }
                    }, [t, y, d, c, _, b, u, p, g, f, m, w.isLoadingMore, w.queryKey]),
                    D = (0, i.useMemo)(() => {
                        let e = [...j];
                        for (let t of C) e.includes(t) || e.push(t);
                        return e.join(",")
                    }, [j, C]),
                    R = (0, r(682985).K8)(() => {
                        if (!M) return [];
                        let e = D ? D.split(",") : [],
                            t = new Map;
                        for (let r = 0; r < e.length; r++) t.set(e[r], r);
                        let i = [];
                        for (let t of e) {
                            var n;
                            let e = (null == l ? void 0 : l.id) === t ? l : a().E.createChildStore(M, {
                                table: o().Toz,
                                id: t,
                                spaceId: M.id
                            });
                            if (!1 === e.getAlive()) continue;
                            let r = null == (n = e.getData()) ? void 0 : n.workflow_id,
                                s = e.getParentTable(),
                                c = e.getParentId(),
                                u = "workflow" === s || void 0 !== r;
                            (!d || r === d || "workflow" === s && c === d) && (!d && S && u || i.push(function(e) {
                                let {
                                    threadStore: t,
                                    intl: r
                                } = e, i = t.getDataStore(), a = t.getCreatedByStore();
                                return {
                                    id: t.id,
                                    title: i.getKeyStore("title").getValue(),
                                    created_at: t.getCreatedTime(),
                                    updated_at: t.getUpdatedTime(),
                                    created_by_display_name: null == a ? void 0 : a.getDisplayName(r),
                                    trigger_id: i.getKeyStore("trigger_id").getValue(),
                                    run_id: i.getKeyStore("run_id").getValue(),
                                    type: t.getType()
                                }
                            }({
                                threadStore: e,
                                intl: x
                            })))
                        }
                        return i.sort((e, i) => {
                            let a = (0, r(960270).X)({
                                createdTime: e.created_at,
                                updatedTime: e.updated_at
                            }, {
                                createdTime: i.created_at,
                                updatedTime: i.updated_at
                            });
                            return 0 !== a ? a : (t.get(e.id) ? ? 0) - (t.get(i.id) ? ? 0)
                        })
                    }, [M, D, x, l, d, S]),
                    K = (0, i.useCallback)(e => {
                        k(t => ({ ...t,
                            loadedThreadIds: t.loadedThreadIds.filter(t => !e.includes(t))
                        })), T(t => {
                            let r = !1,
                                i = new Set(t);
                            for (let t of e) i.delete(t) && (r = !0);
                            return r ? i : t
                        })
                    }, []),
                    N = (0, i.useCallback)(async () => {
                        await P()
                    }, [P]);
                return (0, i.useMemo)(() => {
                    let e = !!_ && w.queryKey === b,
                        t = j.length > 0 && w.queryKey === b;
                    switch (A.status) {
                        case "pending":
                        case "idle":
                            return { ...A,
                                refetch: N,
                                value: t ? R : void 0,
                                isPausedByNotion: w.isPausedByNotion,
                                ...c ? {
                                    loadMore: B,
                                    hasMore: e,
                                    isLoadingMore: I
                                } : {},
                                removeFromCache: K
                            };
                        case "rejected":
                            return { ...A,
                                refetch: N,
                                isPausedByNotion: w.isPausedByNotion,
                                ...c ? {
                                    loadMore: B,
                                    hasMore: e,
                                    isLoadingMore: I
                                } : {},
                                removeFromCache: K
                            };
                        case "resolved":
                            return { ...A,
                                refetch: N,
                                value: R,
                                isPausedByNotion: w.isPausedByNotion,
                                ...c ? {
                                    loadMore: B,
                                    hasMore: e,
                                    isLoadingMore: I
                                } : {},
                                removeFromCache: K
                            };
                        default:
                            (0, r(722371).HB)(A)
                    }
                }, [A, c, _, B, j.length, R, K, N, b, w.queryKey, w.isPausedByNotion, I])
            }
        },
        414243: (e, t, r) => {
            r.d(t, {
                v: () => a
            }), r(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "4.65 2.91 5.84 10.18",
                    directional: !0,
                    svg: (0, r(474848).jsx)("path", {
                        d: "M4.87 7.47a.75.75 0 0 0 0 1.06l4.32 4.32a.75.75 0 1 0 1.06-1.06L6.46 8l3.79-3.79a.75.75 0 1 0-1.06-1.06z"
                    })
                },
                a = (0, r(104509).wt)("arrowChevronSingleLeftFillSmall", i, "fillSmall")
        },
        454736: (e, t, r) => {
            r.d(t, {
                p: () => o
            }), r(296540);
            var i = r(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.94 14.91 15.66",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10.55 12.808a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 1 0 1.1 0z"
                        }), (0, i.jsx)("path", {
                            d: "M15.4 1.95a3.48 3.48 0 0 0-3.48 3.48v1.92H6.4a2.425 2.425 0 0 0-2.425 2.425v5.4A2.425 2.425 0 0 0 6.4 17.6h7.2a2.425 2.425 0 0 0 2.425-2.425v-5.4A2.425 2.425 0 0 0 13.6 7.35h-.43V5.43a2.23 2.23 0 1 1 4.46 0v2.095a.625.625 0 1 0 1.25 0V5.43a3.48 3.48 0 0 0-3.48-3.48M5.225 9.775c0-.649.526-1.175 1.175-1.175h7.2c.649 0 1.175.526 1.175 1.175v5.4c0 .649-.526 1.175-1.175 1.175H6.4a1.175 1.175 0 0 1-1.175-1.175z"
                        })]
                    })
                },
                o = (0, r(104509).wt)("lockOpen", a, "default")
        },
        521469: (e, t, r) => {
            function i(e) {
                switch (e) {
                    case "plus":
                        return "plus_expansion_offer";
                    case "business":
                        return "business_expansion_offer";
                    default:
                        return
                }
            }

            function a(e, t) {
                if ("plus" === e) {
                    if ("one_member" === t) return "plus_expansion_one_member";
                    if ("two_member" === t) return "plus_expansion_two_member"
                }
                if ("business" === e) {
                    if ("one_member" === t) return "business_expansion_one_member";
                    if ("two_member" === t) return "business_expansion_two_member"
                }
            }

            function o(e) {
                switch (e) {
                    case "plus_expansion_one_member":
                    case "business_expansion_one_member":
                        return 1;
                    case "plus_expansion_two_member":
                    case "business_expansion_two_member":
                        return 2;
                    default:
                        return 3
                }
            }

            function n(e, t) {
                if (!e) return !1;
                let r = s(e, t);
                return !!r && (r.membersAdded ? ? 0) >= o(t)
            }

            function s(e, t) {
                var r;
                if (e) return null == e || null == (r = e.getSettings()) || null == (r = r.offer_member_count) ? void 0 : r.find(e => e.campaign === t)
            }
            r.d(t, {
                $E: () => a,
                UB: () => i,
                Zy: () => o,
                _w: () => s,
                fd: () => n
            }), r(898992), r(672577)
        },
        525803: (e, t, r) => {
            r.d(t, {
                D: () => a
            }), r(296540);
            var i = r(474848);

            function a(e) {
                let {
                    enterpriseMessage: t,
                    defaultMessage: a,
                    values: o
                } = e, n = (0, r(184444).kP)() ? t : a;
                return (0, i.jsx)(r(109939).sA, {
                    id: n.id,
                    defaultMessage: n.defaultMessage,
                    values: o
                })
            }
        },
        539888: (e, t, r) => {
            r.d(t, {
                H: () => a
            });
            let i = new(r(815048)).O2("UpdateSidebarTabInfo", async () => await r.e(21377).then(r.bind(r, 983269))),
                a = (0, r(815048)._h)(i, e => e.UpdateSidebarTabInfo)
        },
        567442: (e, t, r) => {
            r.d(t, {
                m: () => i
            });

            function i(e) {
                var t;
                let {
                    environment: i,
                    collectionViewStore: a
                } = e, o = null == a ? void 0 : a.getType();
                o && r(20557).jE(i, {
                    from: e.from,
                    from_peek_mode: e.from_peek_mode,
                    collection_id: null == (t = e.collectionStore) ? void 0 : t.id,
                    collection_view_id: null == a ? void 0 : a.id,
                    view_type: o
                })
            }
        },
        573511: (e, t, r) => {
            r.d(t, {
                f: () => i
            });

            function i(e) {
                return {
                    modules: (0, r(682985).K8)(() => {
                        if (!e) return;
                        let t = e.getAssociatedCollectionStore(),
                            r = null == t ? void 0 : t.getLayoutStore();
                        return null == r ? void 0 : r.getModules().page_details
                    }, [e])
                }
            }
        },
        587386: (e, t, r) => {
            r.r(t), r.d(t, {
                PersonProfileContainer: () => s
            }), r(898992), r(581454), r(737550);
            var i = r(296540),
                a = r(474848);
            let o = {
                    paddingLeft: 6
                },
                n = {
                    container: {
                        width: "100%",
                        height: "100%",
                        cursor: "default",
                        backgroundColor: r(632079).Tj.background.primary
                    }
                };

            function s(e) {
                let {
                    personProfileStore: t
                } = e, o = (0, r(682985).uB)(void 0, r(593423).A), s = (0, r(682985).K8)(() => null == t ? void 0 : t.getSpaceStore(), [t]), c = (0, r(682985).K8)(() => t.getPersonProfileUserId(), [t]), u = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), p = (0, r(682985).K8)(() => {
                    if (u && c) return r(807825).L.createChildStore(u, {
                        table: r(832375).oo9,
                        id: c
                    })
                }, [u, c]), g = (0, i.useRef)(null), f = (0, r(729787).wY)(g), h = (0, r(533992).v3)(), m = (0, r(83208).X)("person_profile_deletion"), v = (0, r(682985).K8)(() => (0, r(952592).z)(t), [t]), S = (0, r(682985).K8)(() => (0, r(447036).cq)(t) ? r(731810).A : r(465361).A, [t]);
                (0, i.useEffect)(() => (v && m && r(474329).HQ({
                    bannerStore: S,
                    id: "DeletedPage",
                    contentKey: "deleted_or_moved_page",
                    blockStore: t,
                    styleKey: r(909595).q.Red
                }), () => {
                    r(474329).zA({
                        bannerStore: S,
                        id: "DeletedPage"
                    })
                }), [v, m, t, S]), (0, i.useEffect)(() => {
                    "rendered" !== r(728372).default.state.renderPhase && r(728372).default.setPageRendered()
                }, []), (0, i.useEffect)(() => {
                    (0, r(104310).u)({
                        event: {
                            eventName: "person_profile_viewed",
                            eventProperties: {
                                is_own_profile: c === h.currentUser.id
                            }
                        }
                    })
                }, [h, c]);
                let y = !!(f && f.width < 740),
                    {
                        person_profile_page_main: x,
                        person_profile_page_details: b
                    } = (0, r(935817).Qf)({
                        personProfileStore: t
                    }),
                    w = (0, r(643160).yf)(),
                    k = x.some(e => "recentActivity" === e.type),
                    j = (0, r(960253).I)(() => ({
                        left: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "24px",
                            flexGrow: 1,
                            maxWidth: "780px",
                            width: y ? "100%" : "560px",
                            alignSelf: "flex-start"
                        },
                        right: {
                            width: "252px",
                            minWidth: "252px",
                            height: "min-content",
                            display: "flex",
                            flexDirection: "column",
                            gap: k || y ? 24 : 40
                        },
                        content: {
                            display: "flex",
                            flexDirection: y ? "column-reverse" : "row",
                            gap: y ? 40 : 60,
                            marginTop: 20,
                            ...w ? (0, r(381453).Up)(r(57461).dE, "paddingInlineStart", "paddingInlineEnd") : {}
                        }
                    }), [k, y, w]);
                return c && s ? (0, a.jsx)(r(126767).H, {
                    type: r(644154).A.Y,
                    style: n.container,
                    className: "person-profile-content",
                    store: o,
                    children: (0, a.jsxs)(r(394112).Mx, {
                        type: "person-profile",
                        withBottomPadding: !0,
                        children: [(0, a.jsx)(r(325204).K, {
                            personProfileStore: t
                        }), (0, a.jsxs)(r(394112).vV, {
                            ref: g,
                            style: j.content,
                            children: [(0, a.jsx)("div", {
                                style: j.left,
                                children: (0, a.jsx)(l, {
                                    modules: x,
                                    spaceStore: s,
                                    userId: c,
                                    viewedUserStore: p,
                                    personProfileStore: t
                                })
                            }), (0, a.jsx)("div", {
                                style: j.right,
                                children: (0, a.jsx)(d, {
                                    modules: b,
                                    userId: c,
                                    spaceStore: s,
                                    personProfileStore: t
                                })
                            })]
                        }, "main")]
                    })
                }) : null
            }
            let l = i.memo(function(e) {
                    let {
                        spaceStore: t,
                        userId: i,
                        modules: o,
                        viewedUserStore: n,
                        personProfileStore: s
                    } = e, l = (0, r(682985).K8)(() => (0, r(447036).cq)(s) ? r(475097).default.getPeekMode() : r(387722).O, [s]);
                    return (0, a.jsx)(a.Fragment, {
                        children: o.map(e => {
                            switch (e.type) {
                                case "recentActivity":
                                    return (0, a.jsx)(r(618).u, {
                                        spaceId: t.id,
                                        actorId: i,
                                        overridePeekMode: l,
                                        variant: "card"
                                    }, `${e.id}-${i}`);
                                case "properties":
                                    return (0, a.jsx)(r(375564).q, {
                                        userId: i,
                                        module: e,
                                        personProfileStore: s,
                                        showBottomDivider: !1
                                    }, `${e.id}-${i}`);
                                case "theirPages":
                                    return (0, a.jsx)(r(589275).N, {
                                        userStore: n,
                                        spaceStore: t,
                                        overridePeekMode: l,
                                        variant: "grid"
                                    }, `${e.id}-${i}`);
                                default:
                                    return null
                            }
                        })
                    })
                }),
                d = i.memo(function(e) {
                    let {
                        userId: t,
                        modules: i,
                        spaceStore: n,
                        personProfileStore: s
                    } = e;
                    return (0, a.jsx)(a.Fragment, {
                        children: i.map(e => {
                            switch (e.type) {
                                case "collaborators":
                                    return (0, a.jsx)("div", {
                                        style: o,
                                        children: (0, a.jsx)(r(731488).r, {
                                            userId: t,
                                            spaceStore: n
                                        })
                                    }, `${e.id}-${t}`);
                                case "teamspaces":
                                    return (0, a.jsx)("div", {
                                        style: o,
                                        children: (0, a.jsx)(r(746519).j, {
                                            userId: t
                                        })
                                    }, `${e.id}-${t}`);
                                case "properties":
                                    return (0, a.jsx)(r(375564).q, {
                                        userId: t,
                                        module: e,
                                        personProfileStore: s,
                                        showBottomDivider: !0
                                    }, `${e.id}-${t}`);
                                default:
                                    return null
                            }
                        })
                    })
                })
        },
        622862: (e, t, r) => {
            r.d(t, {
                Y: () => n
            }), r(581454);
            var i = () => r(722371),
                a = () => r(181472),
                o = () => r(818646);

            function n({
                modificationType: e,
                storesToModify: t,
                spaceViewStore: s,
                transaction: l
            }) {
                let d = s.getBookmarkedPagesStore();
                for (let n of t.map(e => r(970831).B.createChildStore(d, e.pointer)).reverse()) "add" === e ? (0, a().H)({
                    parentStore: d,
                    prependStore: n,
                    transaction: l
                }) : "remove" === e ? (0, o().T)({
                    parentStore: d,
                    childToRemoveStore: n,
                    transaction: l
                }) : (0, i().HB)(e)
            }
        },
        635690: (e, t, r) => {
            function i(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "bookmark",
                        eventProperties: {
                            from: e.from
                        }
                    }
                })
            }

            function a(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "unbookmark",
                        eventProperties: {
                            from: e.from
                        }
                    }
                })
            }
            r.d(t, {
                J: () => a,
                W: () => i
            })
        },
        691886: (e, t, r) => {
            r.d(t, {
                h: () => s
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var i = r(296540);

            function a(e) {
                r(449473).B8.setState({ ...r(449473).B8.state,
                    width: e.width
                }), (0, r(123538).Q)()
            }
            var o = r(474848);
            let n = new Set(["page", "secondary_sidebar"]);

            function s({
                type: e,
                sidebarRef: t
            }) {
                let p = (0, r(109939).tz)(),
                    v = (0, r(533992).v3)(),
                    [S, y] = (0, r(768397).s)(),
                    x = (0, i.useRef)(null),
                    b = (0, r(421573).A)(S, x),
                    w = (0, i.useRef)(!1),
                    k = (0, i.useCallback)(() => {
                        u({
                            isResizing: !1
                        }, e)
                    }, [e]),
                    j = (0, i.useCallback)(() => {
                        var t, r;
                        return t = v, r = e, void(w.current || h(r, t), u({
                            isResizing: !1
                        }, r))
                    }, [v, e]),
                    _ = (0, i.useCallback)(i => {
                        if (t.current) {
                            var o = i,
                                n = v,
                                s = t.current,
                                l = e,
                                d = w;
                            switch (r(239134).clear(n), d.current = !0, l) {
                                case "page":
                                    (0, r(137032).z)({
                                        width: g(o.currentX, s, l),
                                        environment: n
                                    });
                                    break;
                                case "update":
                                    a({
                                        width: g(o.currentX, s, l),
                                        environment: n
                                    });
                                    break;
                                case "peek":
                                    (0, r(17729).A)({
                                        width: g(o.currentX, s, l),
                                        environment: n
                                    });
                                    break;
                                case "secondary_sidebar":
                                    r(515492).Ay.setWidth(g(o.currentX, s, l));
                                    break;
                                default:
                                    (0, r(722371).HB)(l)
                            }
                            return
                        }
                    }, [v, e, t]),
                    I = (0, i.useCallback)(() => {
                        var t, i, a;
                        return t = v, i = e, a = w, void((0, r(471e3).I)({
                            environment: t
                        }), a.current = !1, u({ ...r(984858).sidebarResizingStore.state,
                            isResizing: !0
                        }, i))
                    }, [v, e]),
                    {
                        device: C
                    } = v,
                    T = (0, r(682985).O$)(r(395364).A),
                    M = (0, r(682985).K8)(() => ({
                        cursor: "col-resize",
                        height: "100%",
                        width: 12
                    }), [e]),
                    A = (0, r(682985).K8)(() => {
                        var t, i;
                        let a, o;
                        return t = e, i = v, a = (0, r(712358).K)(i), {
                            position: "absolute",
                            insetInlineStart: (o = "peek" === t || "update" === t) ? 0 : void 0,
                            insetInlineEnd: o ? void 0 : 0,
                            width: 1,
                            flexGrow: 0,
                            zIndex: "peek" === t ? 109 : 1,
                            top: a ? 0 : -1,
                            bottom: a ? 0 : -1,
                            pointerEvents: "auto",
                            backfaceVisibility: "hidden"
                        }
                    }, [e, v]),
                    P = (0, r(682985).K8)(() => {
                        var t, r;
                        let i, a, o = c(e);
                        return t = e, r = o, i = d(t), (a = l(t)) === i ? 0 : (r - a) / (i - a)
                    }, [e]),
                    E = (0, i.useRef)(!1),
                    [B, D] = (0, i.useState)(null);

                function R(e) {
                    D(e.clientY)
                }
                let K = (0, i.useCallback)(() => {
                    u({
                        isResizerHovered: E.current || y
                    }, e)
                }, [y, e]);

                function N() {
                    E.current = !0, K()
                }

                function W() {
                    E.current = !1, K()
                }(0, i.useEffect)(() => {
                    K()
                }, [y, K]);
                let L = (0, i.useCallback)(() => {
                        t.current && m(10, t.current, e, v)
                    }, [e, v, t]),
                    z = (0, i.useCallback)(() => {
                        t.current && m(-10, t.current, e, v)
                    }, [e, v, t]),
                    V = (0, r(619157).A1)() && !n.has(e) || !(0, r(619157).A1)() && n.has(e) ? "left" : "right",
                    U = "left" === V ? z : L,
                    F = "left" === V ? L : z,
                    O = (0, i.useCallback)(() => {
                        h(e, v)
                    }, [e, v]);
                return T || C.isChromebook ? null : (0, o.jsx)(r(369064).N, {
                    capture: y,
                    debugName: "SidebarResizer",
                    onLeft: U,
                    onRight: F,
                    onUp: r(763230).D_,
                    onDown: r(763230).D_,
                    onTab: r(763230).D_,
                    onUntab: r(763230).D_,
                    onEnter: O,
                    children: (0, o.jsx)(r(51831).m, {
                        content: () => (0, o.jsx)(f, {
                            type: e
                        }),
                        delayThreshold: 0,
                        originRectTransform: e => B ? new DOMRect(e.left, B, 0, 0) : e,
                        placement: "page" === e || "secondary_sidebar" === e ? "right" : "left",
                        originGap: 10,
                        children: e => (0, o.jsx)("div", {
                            style: A,
                            ...(0, r(63390).A)(e, {
                                onMouseMove: N,
                                onMouseLeave: W,
                                onMouseEnter: R
                            }),
                            children: (0, o.jsx)(r(245483).A, {
                                onDraggableDragStart: I,
                                onDraggableDragMove: _,
                                onDraggableDragEnd: j,
                                onDraggableDragCancel: k,
                                disableVerticalEdgeScroll: !0,
                                disableHorizontalEdgeScroll: !0,
                                render: e => (0, o.jsx)("div", {
                                    ref: b,
                                    role: "separator",
                                    tabIndex: 0,
                                    "aria-label": p.formatMessage({
                                        id: "sidebarResizer.tooltip.resizeLabel",
                                        defaultMessage: "Resize with left and right arrow keys"
                                    }),
                                    "aria-orientation": "vertical",
                                    "aria-valuenow": Math.round(100 * P),
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100,
                                    style: M,
                                    ...e
                                })
                            })
                        })
                    })
                })
            }

            function l(e) {
                switch (e) {
                    case "page":
                        return (0, r(828560).hw)() ? r(984858).SLIPPERY_SLOPE_SIDEBAR_MIN_WIDTH : r(984858).SIDEBAR_MIN_WIDTH;
                    case "update":
                        return r(449473).Iz;
                    case "peek":
                        return r(475097).SIDEPEEK_MIN_WIDTH;
                    case "secondary_sidebar":
                        return r(515492).WR;
                    default:
                        (0, r(722371).HB)(e)
                }
            }

            function d(e) {
                switch (e) {
                    case "page":
                        return (0, r(828560).hw)() ? 600 : 480;
                    case "secondary_sidebar":
                        return r(515492).y8;
                    case "update":
                        return r(132261).aL;
                    case "peek":
                        return (0, r(447036).QX)();
                    default:
                        (0, r(722371).HB)(e)
                }
            }

            function c(e) {
                switch (e) {
                    case "page":
                        return r(984858).sidebarWidthStore.state;
                    case "secondary_sidebar":
                        let t = r(984858).sidebarExpandedStore.state,
                            i = r(352202).n5();
                        return t ? r(984858).sidebarWidthStore.state + i : i;
                    case "update":
                        return r(449473).B8.state.width;
                    case "peek":
                        return r(475097).default.state.preferredSidePeekWidth;
                    default:
                        (0, r(722371).HB)(e)
                }
            }

            function u(e, t) {
                switch (t) {
                    case "page":
                        r(984858).sidebarResizingStore.update(t => ({ ...t,
                            ...e
                        }));
                        break;
                    case "update":
                        r(449473).B8.update(t => ({ ...t,
                            ...e
                        }));
                        break;
                    case "secondary_sidebar":
                        r(550830).default.update(t => ({ ...t,
                            ...e
                        }));
                        break;
                    case "peek":
                        r(984858).peekResizingStore.setState(e.isResizing ? ? !1);
                        break;
                    default:
                        (0, r(722371).HB)(t)
                }
            }

            function p(e, t) {
                let i = d(t),
                    a = l(t);
                return (0, r(627179).qE)({
                    value: e,
                    min: a,
                    max: i
                })
            }

            function g(e, t, i) {
                let a, o = (0, r(619157).A1)();
                switch (i) {
                    case "page":
                        a = o ? window.innerWidth - e : e;
                        break;
                    case "secondary_sidebar":
                        let n = r(984858).sidebarExpandedStore.state ? r(984858).sidebarWidthStore.state : 0;
                        a = o ? window.innerWidth - e - n : e - n;
                        break;
                    case "peek":
                    case "update":
                        let s = t.getBoundingClientRect();
                        a = o ? e - s.left : s.right - e;
                        break;
                    default:
                        (0, r(722371).HB)(i)
                }
                return p(a, i)
            }

            function f({
                type: e
            }) {
                let t, i = (0, r(533992).v3)(),
                    a = (0, r(682985).K8)(() => (function(e, t) {
                        switch (e) {
                            case "page":
                                return (0, r(712358).K)(t);
                            case "update":
                                return (0, r(953099).N)(t);
                            case "peek":
                                return r(475097).default.state.open;
                            case "secondary_sidebar":
                                return r(550830).default.isOpen();
                            default:
                                (0, r(722371).HB)(e)
                        }
                    })(e, i), [e, i]),
                    n = r(632079).Tj.text.inverseSecondary,
                    s = (0, o.jsx)(r(693592).A, {
                        name: "toggleSidebar"
                    }),
                    l = e => (0, o.jsx)("span", {
                        style: {
                            color: n
                        },
                        children: e
                    });
                if (a) switch (e) {
                    case "secondary_sidebar":
                    case "update":
                        t = (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Close <invertedcolor>Click</invertedcolor>",
                            id: "sidebarResizer.tooltip.closeMessage.noShortcut",
                            values: {
                                invertedcolor: l,
                                keyboardShortcut: s
                            }
                        });
                        break;
                    default:
                        t = (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Close <invertedcolor>Click or {keyboardShortcut}</invertedcolor>",
                            id: "sidebarResizer.tooltip.closeMessage",
                            values: {
                                invertedcolor: l,
                                keyboardShortcut: s
                            }
                        })
                } else t = (0, o.jsx)(r(109939).sA, {
                    defaultMessage: "Lock open <invertedcolor>Click or {keyboardShortcut}</invertedcolor>",
                    id: "sidebarResizer.tooltip.lockMessage",
                    values: {
                        invertedcolor: l,
                        keyboardShortcut: s
                    }
                });
                return (0, o.jsxs)(o.Fragment, {
                    children: [t ? (0, o.jsxs)(o.Fragment, {
                        children: [t, (0, o.jsx)("br", {})]
                    }) : null, (0, o.jsx)(r(109939).sA, {
                        defaultMessage: "Resize <invertedcolor>Drag</invertedcolor>",
                        id: "sidebarResizer.tooltip.resizeMessage",
                        values: {
                            invertedcolor: l,
                            keyboardShortcut: s
                        }
                    })]
                })
            }

            function h(e, t) {
                switch (e) {
                    case "page":
                        (0, r(16822).h)({
                            environment: t,
                            isExpanded: !r(984858).sidebarExpandedStore.state,
                            from: "sidebar_resizer",
                            saveDetailsSidebarPreference: !0
                        }), r(984858).sidebarOpenStore.setState(!1);
                        break;
                    case "update":
                        (0, r(911046).u)({
                            environment: t,
                            isExpanded: !(0, r(953099).N)(t),
                            from: "drag",
                            saveDetailsSidebarPreference: !0
                        });
                        break;
                    case "peek":
                        r(270912).VN({
                            environment: t,
                            from: "resizer_click"
                        });
                        break;
                    case "secondary_sidebar":
                        r(477810).VI({
                            environment: t
                        });
                        break;
                    default:
                        (0, r(722371).HB)(e)
                }
            }

            function m(e, t, i, o) {
                let n = c(i) + e;
                switch (i) {
                    case "page":
                        (0, r(137032).z)({
                            width: p(n, i),
                            environment: o
                        });
                        break;
                    case "update":
                        a({
                            width: p(n, i),
                            environment: o
                        });
                        break;
                    case "peek":
                        (0, r(17729).A)({
                            width: p(n, i),
                            environment: o
                        });
                        break;
                    case "secondary_sidebar":
                        let s = r(984858).sidebarExpandedStore.state ? r(984858).sidebarWidthStore.state : 0;
                        r(515492).Ay.setWidth(p(n - s, i));
                        break;
                    default:
                        (0, r(722371).HB)(i)
                }
            }
        },
        703465: (e, t, r) => {
            r.d(t, {
                k: () => n
            }), r(16280);
            var i = () => r(773352),
                a = () => r(300441);
            let o = (0, r(477465).Dv)("duplicateAgent");
            async function n(e) {
                let {
                    environment: t,
                    sourceWorkflowPointer: n,
                    targetWorkflowId: s,
                    spaceId: l,
                    deferred: d
                } = e;
                (0, r(963580).Ur)(s);
                try {
                    for await (let e of (0, r(259242).UT)({
                        environment: t,
                        eventName: o,
                        request: {
                            workflowPointer: n,
                            targetSpaceId: l,
                            targetWorkflowId: s,
                            addToFavorites: !1
                        },
                        multiCellRouting: {
                            spaceIds: [n.spaceId, l]
                        }
                    })) {
                        if (a().Q.isFail(e)) {
                            let t = e.error ? ? Error("Failed to duplicate agent");
                            i().log({
                                level: "warning",
                                from: "duplicateAgentInBackground",
                                type: "optimisticDuplicationFailed",
                                data: {
                                    workflowId: s,
                                    miscDataToConvertToString: {
                                        error: t instanceof Error ? t.message : String(t)
                                    }
                                }
                            }), d.reject(t);
                            return
                        }
                        if ("success" === e.value.status) return void d.resolve();
                        if ("failure" === e.value.status) {
                            let t = Error(e.value.error ? ? "Failed to duplicate agent");
                            i().log({
                                level: "warning",
                                from: "duplicateAgentInBackground",
                                type: "optimisticDuplicationFailed",
                                data: {
                                    workflowId: s,
                                    miscDataToConvertToString: {
                                        error: t.message
                                    }
                                }
                            }), d.reject(t);
                            return
                        }
                    }
                    let e = Error("Task completed without success status");
                    d.reject(e)
                } finally {
                    (0, r(963580).Lr)(s)
                }
            }
        },
        732877: (e, t, r) => {
            r.d(t, {
                j: () => a
            });
            var i = r(296540);

            function a({
                clientStore: e,
                chatPanelState: t,
                spaceStore: o
            }) {
                let {
                    threadStore: n,
                    isNewThread: s
                } = function({
                    clientStore: e,
                    chatPanelState: t,
                    spaceStore: i
                }) {
                    let a = (0, r(533992).v3)(),
                        o = (0, r(876252).$)(),
                        n = (0, r(558208).AD)();
                    return {
                        threadStore: (0, r(682985).K8)(() => {
                            if (!i || !t || !o) return;
                            let e = (0, r(548124).getChatPanelState)(a) ? ? t;
                            if ("isNewThread" in e && e.isNewThread) {
                                i && n.getOrCreateThreadId({
                                    environment: a,
                                    spaceId: i.id,
                                    maybeThreadStore: void 0
                                });
                                return
                            } {
                                let t = (0, r(548124).threadStoreGivenRouteData)({
                                    spaceStore: i,
                                    chatPanelState: e
                                });
                                return (0, r(540328).dr)(null == t ? void 0 : t.id) ? ? t
                            }
                        }, [i, t, o, n, a]),
                        isNewThread: "isNewThread" in t && t.isNewThread
                    }
                }({
                    clientStore: e,
                    chatPanelState: t,
                    spaceStore: o
                }), {
                    steps: l,
                    allReady: d
                } = (0, r(682985).K8)(() => n ? (0, r(187353).A3)({
                    clientStore: e,
                    threadStore: n
                }) : {
                    steps: [],
                    allReady: !1
                }, [e, n]), [c, u] = (0, i.useState)(d), [p, g] = (0, i.useState)(void 0), f = d && !c;
                return ((p !== n || f) && (g(n), u(d)), s) ? {
                    state: "new",
                    threadStore: n,
                    transcript: l
                } : (d || c) && n ? {
                    state: "ready",
                    threadStore: n,
                    transcript: l
                } : {
                    state: "loading",
                    threadStore: void 0,
                    transcript: void 0
                }
            }
        },
        757619: (e, t, r) => {
            r.d(t, {
                V: () => a
            }), r(296540);
            var i = r(474848);

            function a(e) {
                let {
                    render: t,
                    ...a
                } = e, o = (0, r(117931).A)({ ...a,
                    isFromActualPageLoad: !0
                });
                return (0, i.jsx)(i.Fragment, {
                    children: (0, r(682985).K8)(() => t(o), [t, o], {
                        silenceRerenderDefender: !0
                    })
                })
            }
        },
        781184: (e, t, r) => {
            r.d(t, {
                w: () => o
            }), r(296540);
            var i = r(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    directional: !0,
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.201 5.65a.649.649 0 0 0-.976.561v3.578c0 .5.543.813.976.56l3.067-1.788a.65.65 0 0 0 0-1.122z"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M8 1.875a6.125 6.125 0 1 1 0 12.25 6.125 6.125 0 0 1 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0",
                            clipRule: "evenodd"
                        })]
                    })
                },
                o = (0, r(104509).wt)("arrowTriangleRightCircleSmall", a, "small")
        },
        868458: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var i = r(296540),
                a = r(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.95 14.91 15.65",
                    svg: (0, a.jsx)("path", {
                        d: "M11.92 5.43a3.48 3.48 0 0 1 6.96 0v2.095a.625.625 0 1 1-1.25 0V5.43a2.23 2.23 0 1 0-4.46 0v1.92h.43a2.425 2.425 0 0 1 2.425 2.425v5.4A2.425 2.425 0 0 1 13.6 17.6H6.4a2.425 2.425 0 0 1-2.425-2.425v-5.4A2.425 2.425 0 0 1 6.4 7.35h5.52zm-1.357 7.373a1.35 1.35 0 1 0-1.126 0v1.247a.563.563 0 0 0 1.126 0z"
                    })
                },
                n = (0, r(104509).wt)("lockOpenFill", o, "fill");

            function s(e, t) {
                (0, r(104310).u)({
                    event: {
                        eventName: "edit_lock_toggle",
                        eventProperties: t
                    }
                })
            }
            let l = function({
                store: e,
                disableTooltip: t,
                hideText: i,
                isInlineCollection: o,
                buttonStyle: n
            }) {
                return r(986939).A.isMobile ? (0, a.jsx)(m, {
                    store: e,
                    hideText: i
                }) : (0, a.jsx)(h, {
                    store: e,
                    disableTooltip: t,
                    hideText: i,
                    isInlineCollection: o,
                    buttonStyle: n
                })
            };

            function d(e, t) {
                return {
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    gap: 4,
                    fontSize: r(986939).A.isMobile ? 12 : 14,
                    borderRadius: 4,
                    padding: "0 6px",
                    marginInlineEnd: 2,
                    height: 24,
                    marginTop: +!!r(986939).A.isMobile,
                    marginInlineStart: r(986939).A.isMobile ? 0 : -5,
                    ...e && {
                        marginInlineStart: r(986939).A.isMobile ? 8 : 12,
                        marginInlineEnd: 0
                    },
                    ...t
                }
            }
            let c = {
                style0: {
                    color: r(632079).Tj.text.inverseSecondary
                }
            };

            function u({
                store: e
            }) {
                let t = (0, r(682985).K8)(() => e.getFormat().block_locked_by, [e]),
                    i = (0, r(109939).tz)(),
                    o = (0, r(682985).K8)(() => t && (0, r(413818).c6)(i, r(807825).L.createChildStore(e, {
                        table: r(832375).oo9,
                        id: t
                    }).getModel()), [t, i, e]);
                return t ? (0, a.jsx)("div", {
                    children: (0, a.jsx)(r(109939).sA, {
                        defaultMessage: "Locked by {lockedByPerson}{br}to prevent accidental editing.{br}<prompttext>Click to unlock</prompttext>",
                        id: "pageLockIndicator.lockedTooltip",
                        values: {
                            lockedByPerson: (0, a.jsx)("b", {
                                children: o
                            }),
                            br: (0, a.jsx)("br", {}),
                            prompttext: e => (0, a.jsx)("span", {
                                style: c.style0,
                                children: e
                            })
                        }
                    })
                }) : null
            }

            function p(e, t) {
                r(996050).$.relockBlock({
                    userId: t.userId,
                    blockId: t.id
                });
                let i = t.getType();
                if (i) {
                    let {
                        collectionId: a,
                        ownedCollectionCount: o,
                        linkedCollectionCount: n
                    } = (0, r(633171).P)(t, {
                        skipPages: !0
                    });
                    s(e, {
                        from: "topbar",
                        block_type: i,
                        locked: !0,
                        collection_id: a,
                        owned_collection_count: o,
                        linked_collection_count: n
                    })
                }
            }

            function g({
                store: e,
                close: t
            }) {
                let o = (0, r(533992).v3)(),
                    n = (0, i.useCallback)(() => {
                        ! function(e, t) {
                            r(996050).$.temporarilyUnlockBlock({
                                userId: t.userId,
                                blockId: t.id
                            });
                            let i = t.getType();
                            if (i) {
                                let {
                                    collectionId: a,
                                    ownedCollectionCount: o,
                                    linkedCollectionCount: n
                                } = (0, r(633171).P)(t, {
                                    skipPages: !0
                                });
                                s(e, {
                                    from: "topbar",
                                    block_type: i,
                                    locked: !1,
                                    collection_id: a,
                                    owned_collection_count: o,
                                    linked_collection_count: n
                                })
                            }
                        }(o, e), t()
                    }, [o, e, t]),
                    l = (0, i.useCallback)(() => {
                        ! function(e, t) {
                            let i = t.pointer.spaceId;
                            (0, r(377796).createAndCommit)({
                                userAction: "PageLockTopbarIndicator.handlePermanentUnlockClick",
                                environment: e,
                                canUndo: !0,
                                cellTarget: i ? {
                                    spaceWithId: i
                                } : void 0,
                                perform: i => {
                                    (0, r(578825)._)({
                                        environment: e,
                                        store: t,
                                        isLocked: !1,
                                        transaction: i
                                    })
                                }
                            });
                            let a = t.getType();
                            if (a) {
                                let {
                                    collectionId: i,
                                    ownedCollectionCount: o,
                                    linkedCollectionCount: n
                                } = (0, r(633171).P)(t, {
                                    skipPages: !0
                                });
                                s(e, {
                                    from: "topbar",
                                    block_type: a,
                                    locked: !1,
                                    collection_id: i,
                                    owned_collection_count: o,
                                    linked_collection_count: n
                                })
                            }
                        }(o, e), t()
                    }, [o, e, t]),
                    d = [{
                        key: "temp_unlock",
                        render: e => (0, a.jsx)(r(860287).A, { ...e,
                            svg: r(636).pencilLineIcon,
                            title: (0, a.jsx)(r(109939).sA, {
                                defaultMessage: "Unlock for me",
                                id: "pageLockIndicator.temporaryUnlockOption.label"
                            })
                        }),
                        action: () => {
                            n()
                        }
                    }, {
                        key: "perm_unlock",
                        render: e => (0, a.jsx)(r(860287).A, { ...e,
                            svg: r(454736).p,
                            title: (0, a.jsx)(r(109939).sA, {
                                defaultMessage: "Unlock for everyone",
                                id: "pageLockIndicator.permanentUnlockOption.label"
                            })
                        }),
                        action: () => {
                            l()
                        }
                    }];
                return (0, a.jsx)(r(747369).A, {
                    menuType: r(649476).gu.Popup,
                    children: (0, a.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        onAccept: t,
                        sections: [{
                            key: "unlock_options",
                            items: d
                        }],
                        initialFocus: void 0
                    })
                })
            }
            let f = {
                style1: {
                    background: r(632079).Tj.blue.background.primaryTranslucent
                },
                style2: {
                    background: r(632079).Tj.blue.background.secondaryTranslucent
                },
                style3: {
                    lineHeight: 1
                }
            };

            function h({
                store: e,
                disableTooltip: t,
                hideText: o,
                isInlineCollection: s,
                buttonStyle: l
            }) {
                let c = (0, r(533992).v3)(),
                    m = (0, i.useCallback)(() => p(c, e), [c, e]),
                    v = (0, r(682985).K8)(() => e.isLockedForAllUsers(), [e]),
                    S = (0, r(682985).K8)(() => r(996050).$.isTemporarilyUnlocked({
                        userId: e.userId,
                        blockId: e.id
                    }), [e.id, e.userId]),
                    y = (0, r(682985).K8)(() => r(475097).default.state.open && r(475097).default.state.targetStore.id === e.id, [e.id]);
                if (v)
                    if (!S) return (0, a.jsx)(r(51831).m, {
                        content: () => (0, a.jsx)(u, {
                            store: e
                        }),
                        disableTooltip: t,
                        children: t => (0, a.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            children: [y ? (0, a.jsx)(r(48542).A, {}) : void 0, (0, a.jsx)(r(656252).A, {
                                popupType: r(423291).n.Popup,
                                content: ({
                                    close: t
                                }) => (0, a.jsx)(g, {
                                    store: e,
                                    close: t
                                }),
                                children: ({
                                    onClick: e
                                }) => (0, a.jsxs)(r(64960).Ay, {
                                    style: { ...d(s, l),
                                        color: r(632079).Tj.text.tertiary,
                                        fill: r(632079).Tj.icon.tertiary
                                    },
                                    onClick: e,
                                    ...t,
                                    children: [(0, a.jsx)(r(16275).I, {
                                        icon: r(269298).lockFillIcon
                                    }), o ? void 0 : (0, a.jsx)("div", {
                                        style: f.style3,
                                        children: (0, a.jsx)(r(109939).sA, {
                                            defaultMessage: "Locked",
                                            id: "pageLockIndicator.lockedButton.label"
                                        })
                                    })]
                                })
                            })]
                        })
                    });
                    else return (0, a.jsxs)(r(4458).fI, {
                        alignItems: "center",
                        children: [y ? (0, a.jsx)(r(48542).A, {}) : void 0, (0, a.jsxs)(r(64960).Ay, {
                            style: { ...d(s, l),
                                paddingInlineStart: 5,
                                border: `1px solid ${r(632079).Tj.blue.border.accentPrimary}`,
                                color: r(632079).Tj.blue.text.accentPrimary,
                                fill: r(632079).Tj.blue.icon.accentPrimary
                            },
                            onClick: m,
                            hoveredStyle: f.style1,
                            pressedStyle: f.style2,
                            children: [(0, a.jsx)(r(16275).I, {
                                icon: n
                            }), o ? void 0 : (0, a.jsx)("div", {
                                style: f.style3,
                                children: (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Re-lock",
                                    id: "pageLockIndicator.relockButton.label"
                                })
                            })]
                        })]
                    });
                return null
            }

            function m({
                store: e,
                hideText: t
            }) {
                let o = (0, r(533992).v3)(),
                    s = (0, i.useCallback)(() => p(o, e), [o, e]),
                    l = (0, r(682985).K8)(() => e.isLockedForAllUsers(), [e]),
                    d = (0, r(682985).K8)(() => r(996050).$.isTemporarilyUnlocked({
                        userId: e.userId,
                        blockId: e.id
                    }), [e.id, e.userId]),
                    c = (0, r(616844).Y5)("left", 10),
                    u = (0, r(616844).Y5)("right", 14);
                if (l)
                    if (d) return (0, a.jsxs)(r(64960).Ay, {
                        onClick: s,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            gap: 6,
                            paddingInlineStart: c,
                            paddingInlineEnd: u,
                            color: r(632079).Tj.blue.text.accentPrimary,
                            fill: r(632079).Tj.blue.icon.accentPrimary
                        },
                        children: [(0, a.jsx)(r(16275).I, {
                            icon: n
                        }), t ? void 0 : (0, a.jsx)("div", {
                            children: (0, a.jsx)(r(109939).sA, {
                                defaultMessage: "Re-lock",
                                id: "pageLockIndicator.mobileRelockButton.label"
                            })
                        })]
                    });
                    else return (0, a.jsx)(r(656252).A, {
                        popupType: r(423291).n.Popup,
                        content: ({
                            close: t
                        }) => (0, a.jsx)(g, {
                            store: e,
                            close: t
                        }),
                        children: ({
                            onClick: e
                        }) => (0, a.jsxs)(r(64960).Ay, {
                            onClick: e,
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                height: "100%",
                                paddingInlineStart: c,
                                paddingInlineEnd: u
                            },
                            children: [(0, a.jsx)(r(16275).I, {
                                icon: r(269298).lockFillIcon
                            }), t ? void 0 : (0, a.jsx)("div", {
                                children: (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Locked",
                                    id: "pageLockIndicator.mobileLockedButton.label"
                                })
                            })]
                        })
                    });
                return null
            }
        },
        868869: (e, t, r) => {
            r.d(t, {
                k: () => a
            });
            let i = new(r(815048)).O2("shareMenuContainer", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(71562), r.e(26361), r.e(16471), r.e(37353), r.e(62475), r.e(3151), r.e(18965), r.e(98629), r.e(96527), r.e(30085), r.e(90109), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(57688), r.e(54951), r.e(43444), r.e(23979), r.e(17250), r.e(26997), r.e(73259), r.e(28048), r.e(93430), r.e(55940), r.e(12560), r.e(88268), r.e(12001), r.e(40198), r.e(39726), r.e(31243), r.e(42534), r.e(86662), r.e(14886), r.e(39225), r.e(6212), r.e(2626), r.e(64453), r.e(4779), r.e(21969), r.e(29663), r.e(28482), r.e(76361), r.e(14369), r.e(74145), r.e(48860), r.e(75136), r.e(98175), r.e(18682), r.e(79349), r.e(58360), r.e(33162), r.e(82538), r.e(63793), r.e(18881), r.e(62731), r.e(41049), r.e(60262), r.e(72805), r.e(18416), r.e(2276), r.e(30532), r.e(73588), r.e(3723), r.e(91100), r.e(78311), r.e(4287), r.e(9817), r.e(65594), r.e(47302), r.e(91636), r.e(36441), r.e(64049), r.e(75189), r.e(28372), r.e(28663), r.e(47281), r.e(29087), r.e(46350), r.e(75234), r.e(67281), r.e(66200), r.e(52064), r.e(69626), r.e(82816), r.e(2832), r.e(48095), r.e(67098), r.e(35118), r.e(63611), r.e(94849), r.e(75484), r.e(98821), r.e(97711), r.e(89076), r.e(86998), r.e(58889), r.e(22920), r.e(9914), r.e(78257), r.e(84382), r.e(51386), r.e(95150), r.e(10471), r.e(87087), r.e(98419), r.e(11719), r.e(13592), r.e(6743), r.e(5234), r.e(85376), r.e(67252), r.e(42709), r.e(44903), r.e(92181), r.e(7251), r.e(72143), r.e(67612), r.e(53478), r.e(75559), r.e(86793), r.e(34), r.e(54253), r.e(26665), r.e(67984), r.e(605), r.e(75681)]).then(r.bind(r, 144329))),
                a = (0, r(815048)._h)(i, e => e.ShareMenuContainer)
        },
        871629: (e, t, r) => {
            r.d(t, {
                J: () => s,
                Y: () => n
            });
            var i = r(296540),
                a = r(474848);
            let o = {
                position: "sticky",
                insetInlineEnd: 4
            };

            function n(e) {
                let {
                    children: t,
                    align: i,
                    sticky: n,
                    style: s
                } = e, l = (0, r(960253).I)(() => {
                    let t = e.height || 24;
                    return {
                        buttonWrapperStyle: {
                            display: "flex",
                            justifyContent: "right" === i ? "end" : "start",
                            position: "absolute",
                            top: (r(47080).wc - t) / 2,
                            insetInlineEnd: 0,
                            insetInlineStart: 0,
                            zIndex: 2,
                            margin: "0 4px",
                            pointerEvents: "none",
                            ...s
                        },
                        innerWrapperStyle: {
                            position: "relative",
                            display: "flex",
                            pointerEvents: "auto",
                            background: r(632079).Tj.background.elevated,
                            padding: "2px",
                            height: t,
                            boxShadow: r(632079).Tj.shadow.outline.md,
                            borderRadius: 6
                        }
                    }
                }, [i, e.height, s]);
                return t ? (0, a.jsx)("div", {
                    style: l.buttonWrapperStyle,
                    children: (0, a.jsx)("div", { ...(0, r(762507).ow)(l.innerWrapperStyle, n && o),
                        className: "quickActionContainer",
                        children: t
                    })
                }) : null
            }

            function s(e) {
                let {
                    surface: t,
                    align: r
                } = e;
                switch (t) {
                    case "table":
                        return (0, a.jsx)(g, { ...e,
                            align: r ? ? "right"
                        });
                    case "property_module":
                    case "page":
                        return (0, a.jsx)(d, { ...e,
                            align: r ? ? "right"
                        });
                    case "compact_page":
                        return (0, a.jsx)(c, { ...e,
                            align: r ? ? "right"
                        });
                    case "board":
                        return (0, a.jsx)(l, { ...e,
                            align: r ? ? "right"
                        });
                    case "gallery":
                        return (0, a.jsx)(u, { ...e,
                            align: r ? ? "right"
                        });
                    case "list":
                        return (0, a.jsx)(p, { ...e,
                            align: r ? ? "right"
                        });
                    default:
                        return (0, a.jsx)(n, { ...e,
                            align: r ? ? "right"
                        })
                }
            }

            function l(e) {
                let t = (0, r(960253).I)(() => ({
                    buttonWrapperStyle: {
                        top: 0,
                        ...e.style
                    }
                }), [e.style]);
                return (0, a.jsx)(n, { ...e,
                    style: t.buttonWrapperStyle
                })
            }

            function d(e) {
                let {
                    propertyModule: t
                } = (0, i.useContext)(r(422575).L8), o = (0, r(960253).I)(() => ({
                    buttonWrapperStyle: {
                        top: t && "style" in t && "large" === t.style ? 10 : 5,
                        ...e.style
                    }
                }), [t, e.style]);
                return (0, a.jsx)(n, { ...e,
                    style: o.buttonWrapperStyle
                })
            }

            function c(e) {
                let t = (0, r(960253).I)(() => ({
                    buttonWrapperStyle: {
                        top: "unset",
                        ...e.style
                    }
                }), [e.style]);
                return (0, a.jsx)(n, { ...e,
                    style: t.buttonWrapperStyle
                })
            }

            function u(e) {
                let t = (0, r(960253).I)(() => ({
                    buttonWrapperStyle: {
                        top: -1,
                        ...e.style
                    }
                }), [e.style]);
                return (0, a.jsx)(n, { ...e,
                    style: t.buttonWrapperStyle
                })
            }

            function p(e) {
                let t = (0, r(960253).I)(() => ({
                    buttonWrapperStyle: {
                        position: void 0,
                        margin: 0,
                        ...e.style
                    }
                }), [e.style]);
                return (0, a.jsx)(n, { ...e,
                    style: t.buttonWrapperStyle
                })
            }

            function g(e) {
                let {
                    align: t = "right"
                } = e, {
                    shouldWrap: o,
                    propertyFormat: s
                } = (0, i.useContext)(r(422575).L8), l = null == s ? void 0 : s.width, d = (0, i.useMemo)(() => l && l <= 32 ? 0 : l && l < 50 ? 2 : 4, [l]), c = (0, r(960253).I)(() => ({
                    buttonWrapperStyle: { ...e.style,
                        ...r(986939).A.isMobile && o ? {
                            position: "sticky",
                            float: t,
                            marginInlineEnd: 0,
                            marginInlineStart: 2,
                            insetInlineEnd: d
                        } : {
                            margin: `0 ${d}px`
                        }
                    }
                }), [t, d, e.style, o]);
                return (0, a.jsx)(n, { ...e,
                    style: c.buttonWrapperStyle,
                    sticky: !0
                })
            }
        },
        872762: (e, t, r) => {
            r.d(t, {
                E: () => a
            });
            let i = new(r(815048)).O2("DictationBubble", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(5410), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(12354), r.e(5721), r.e(57688), r.e(17250), r.e(64696), r.e(39726), r.e(87971), r.e(29663), r.e(74145), r.e(55067), r.e(79349), r.e(90735), r.e(50354), r.e(71136), r.e(86102), r.e(30671), r.e(3101)]).then(r.bind(r, 184681))),
                a = (0, r(815048)._h)(i, e => e.DictationBubble)
        },
        874003: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var i = () => r(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        changePermissionsEnabled: !1,
                        privatePageStore: void 0,
                        privateWorkflowStore: void 0,
                        loading: !1,
                        error: void 0
                    }
                }
                shouldSaveTransactionWithSudoMode(e) {
                    let t = e === this.state.privatePageStore || e === this.state.privateWorkflowStore,
                        r = this.doesUserAlreadyHaveEditorAccess(e.pointer);
                    return t && this.state.changePermissionsEnabled && !r
                }
                shouldUserHaveAccessToPrivatePageBlock() {
                    var e, t;
                    let i = null == (e = (0, r(328765).S)()) ? void 0 : e.canAdmin(),
                        a = (null == (t = (0, r(328765).S)()) ? void 0 : t.getSubscriptionTier()) === "enterprise";
                    return this.state.privatePageStore && i && a
                }
                shouldUserHaveAccessToPrivateWorkflow() {
                    var e, t;
                    let i = null == (e = (0, r(328765).S)()) ? void 0 : e.canAdmin(),
                        a = (null == (t = (0, r(328765).S)()) ? void 0 : t.getSubscriptionTier()) === "enterprise";
                    return this.state.privateWorkflowStore && i && a
                }
                doesUserAlreadyHaveEditorAccess(e) {
                    let t = r(728372).AppStoreSidebarSpaceStore.state;
                    return !!t && (e.table === r(832375).evP ? r(970831).B.createChildStore(t, e) : "collection" === e.table ? r(356912).m.createChildStore(t, e) : r(360851).N.createChildStore(t, e)).canAdmin()
                }
            }
            let o = a
        },
        912221: (e, t, r) => {
            r.d(t, {
                $D: () => s,
                CJ: () => d,
                CY: () => g,
                Sg: () => n,
                bq: () => o,
                iM: () => h,
                kJ: () => c,
                kx: () => p,
                qj: () => f,
                rL: () => i,
                sH: () => u,
                u6: () => a,
                zr: () => l
            });
            let i = 16,
                a = 20,
                o = 1e3,
                n = 12,
                s = 456,
                l = 24,
                d = 48;

            function c() {
                return {
                    background: r(632079).Tj.background.tertiaryTranslucent,
                    borderRadius: 8,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    marginInlineStart: r(986939).A.isMobile ? 0 : i,
                    marginInlineEnd: r(986939).A.isMobile ? 0 : i,
                    marginTop: 4,
                    marginBottom: 8
                }
            }

            function u() {
                return { ...g(),
                    width: "unset",
                    height: d,
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingInlineEnd: 6
                }
            }

            function p() {
                return r(986939).A.isMobile ? r(418676).Kw : r(418676).vQ
            }

            function g() {
                return {
                    borderRadius: 10,
                    transition: "background 150ms ease-out"
                }
            }

            function f({
                isMobile: e
            }) {
                return e ? 12 : 10
            }

            function h({
                themeMode: e,
                colorOverride: t,
                size: i = 24,
                useLargeBorderRadius: a,
                useLightBackgroundColor: o,
                icon: n
            }) {
                return {
                    background: t || (n && (0, r(111012).T8)(n) ? (0, r(111012).ez)({
                        icon: n,
                        mode: e,
                        useLightGrayColor: o
                    }) : r(632079).Tj.background.tertiaryTranslucent),
                    width: i,
                    height: i,
                    borderRadius: a ? 6 : "0.25em"
                }
            }
        },
        932052: (e, t, r) => {
            function i(e) {
                return e.canEdit() && (0, r(909212).re)()
            }

            function a(e) {
                return e.canEdit() && !e.isSystemBlock() && (0, r(909212).re)()
            }
            r.d(t, {
                G: () => a,
                m: () => i
            })
        },
        960270: (e, t, r) => {
            function i(e) {
                return e.updatedTime ? ? e.createdTime
            }

            function a(e, t) {
                return i(t) - i(e)
            }
            r.d(t, {
                X: () => a,
                m: () => i
            })
        },
        963580: (e, t, r) => {
            r.d(t, {
                Lr: () => s,
                PM: () => o,
                Ur: () => n
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var i = () => r(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        duplicatingWorkflowIds: new Set,
                        isDuplicating: !1
                    }
                }
            }
            let o = new a;

            function n(e) {
                o.update(t => {
                    let r = new Set(t.duplicatingWorkflowIds);
                    return r.add(e), {
                        duplicatingWorkflowIds: r,
                        isDuplicating: r.size > 0
                    }
                })
            }

            function s(e) {
                o.update(t => {
                    if (!t.duplicatingWorkflowIds.has(e)) return t;
                    let r = new Set(t.duplicatingWorkflowIds);
                    return r.delete(e), {
                        duplicatingWorkflowIds: r,
                        isDuplicating: r.size > 0
                    }
                })
            }
        },
        972233: (e, t, r) => {
            r.d(t, {
                l: () => a
            });
            let i = new(r(815048)).O2("presence-container", () => Promise.all([r.e(75134), r.e(41559), r.e(86625)]).then(r.bind(r, 342303))),
                a = (0, r(815048)._h)(i, e => e.PresenceContainer)
        }
    }
]);