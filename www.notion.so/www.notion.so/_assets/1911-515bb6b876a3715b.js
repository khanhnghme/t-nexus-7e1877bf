"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [1911, 33503], {
        120011: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowChevronSingleRightIcon: () => r,
                iconDefinition: () => a
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "7.22 3.97 6.66 12.06",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M13.692 10.442a.625.625 0 0 0 0-.884l-5.4-5.4a.625.625 0 1 0-.884.884L12.366 10l-4.958 4.958a.625.625 0 0 0 .884.884z"
                    })
                },
                r = (0, i(104509).wt)("arrowChevronSingleRight", a, "default")
        },
        127322: (e, t, i) => {
            i.d(t, {
                A: () => s
            }), i(581454);
            var a = i(296540),
                r = () => i(546605);
            class o extends r().Store {
                getInitialState() {
                    return {}
                }
            }
            var n = i(474848);
            let s = a.forwardRef(function({
                isMenuItem: e,
                style: t,
                labelStyle: r,
                alignmentToOrigin: s,
                renderMenuSections: u,
                label: c,
                selectedTitle: p,
                focused: h,
                disabled: g,
                innerButtonStyle: f,
                buttonPopupStore: m,
                buttonVariant: w,
                buttonProps: v,
                menuWidth: y,
                menuMaxHeight: x,
                menuTitle: b,
                menuShowDone: k
            }, C) {
                let S = (0, i(682985).uB)(void 0, o),
                    M = (0, i(682985).uB)(m, i(510969).A),
                    j = (0, i(960253).I)(() => ({
                        wrapper: {
                            alignItems: "center",
                            display: "flex",
                            ...t
                        },
                        label: {
                            color: i(632079).Tj.text.tertiary,
                            fontSize: 14,
                            marginInlineEnd: "auto",
                            ...r
                        }
                    }), [r, t]);
                return ((0, a.useImperativeHandle)(C, () => ({
                    closeMenu: () => {
                        M.setState({ ...M.state,
                            open: !1
                        })
                    }
                }), [M]), e) ? (0, n.jsx)(d, {
                    alignmentToOrigin: s,
                    isMenuItem: e,
                    renderMenuSections: u,
                    buttonPopupStore: M,
                    selectButtonStore: S,
                    menuWidth: y,
                    menuMaxHeight: x,
                    menuTitle: b,
                    menuShowDone: k,
                    children: i => (0, n.jsx)(l, {
                        events: i,
                        style: t,
                        isMenuItem: e,
                        label: c,
                        selectedTitle: p,
                        focused: h,
                        disabled: g
                    })
                }) : (0, n.jsxs)("div", {
                    style: j.wrapper,
                    children: [c ? (0, n.jsx)("div", {
                        style: j.label,
                        children: c
                    }) : void 0, (0, n.jsx)(d, {
                        alignmentToOrigin: s,
                        isMenuItem: e,
                        renderMenuSections: u,
                        buttonPopupStore: M,
                        selectButtonStore: S,
                        menuWidth: y,
                        menuMaxHeight: x,
                        menuTitle: b,
                        menuShowDone: k,
                        children: e => {
                            if (w) {
                                let t = (0, i(586880).x)(w);
                                return (0, n.jsx)(t, {
                                    disabled: g,
                                    style: f,
                                    iconTrailing: {
                                        icon: i(595453).arrowChevronSingleDownSmallIcon,
                                        size: "xs",
                                        colorVariant: g ? "disabled" : "secondary"
                                    },
                                    ...v,
                                    ...e,
                                    children: p
                                })
                            }
                            return (0, n.jsx)(i(988022).p, {
                                disabled: g,
                                disabledFeedback: !0,
                                style: {
                                    marginInlineEnd: -6,
                                    ...f
                                },
                                iconTrailing: {
                                    icon: i(595453).arrowChevronSingleDownSmallIcon,
                                    size: "xs",
                                    colorVariant: g ? "disabled" : "secondary"
                                },
                                ...e,
                                children: p
                            })
                        }
                    })]
                })
            });

            function l({
                events: e,
                style: t,
                isMenuItem: a,
                label: r,
                selectedTitle: o,
                focused: s,
                disabled: d
            }) {
                return a ? (0, n.jsx)(i(338798)._, { ...e,
                    focused: !!s,
                    disabled: d,
                    style: t,
                    ...r ? {
                        title: r,
                        right: o
                    } : {
                        title: o
                    }
                }) : null
            }

            function d({
                children: e,
                alignmentToOrigin: t,
                isMenuItem: a,
                renderMenuSections: r,
                buttonPopupStore: o,
                selectButtonStore: s,
                menuWidth: l,
                menuMaxHeight: u,
                menuTitle: c,
                menuShowDone: p
            }) {
                let h = (0, i(682985).K8)(() => s.state.selectedKey, [s]);
                return (0, n.jsx)(i(656252).A, {
                    popupType: i(986939).A.isMobile ? i(656252).z.BottomSheet : i(656252).z.Popup,
                    buttonPopupStore: o,
                    alignmentToOrigin: void 0 !== t ? t : "end",
                    placementToOrigin: a ? "right" : "bottom",
                    originGap: a ? void 0 : 4,
                    content: e => {
                        let {
                            focusedIndex: t,
                            menuSections: a
                        } = function(e) {
                            let t, {
                                    parent: i,
                                    renderMenuSections: a,
                                    selectButtonStore: r,
                                    selectedKey: o
                                } = e,
                                n = 0;
                            return {
                                menuSections: a(i).map(e => ({ ...e,
                                    items: e.items.map(e => (o && e.key === o && (t = n), n++, { ...e,
                                        action: t => {
                                            var i;
                                            e.action(t), i = e.key, r.setState({
                                                selectedKey: i
                                            })
                                        }
                                    }))
                                })),
                                focusedIndex: t
                            }
                        }({
                            parent: e,
                            renderMenuSections: r,
                            selectButtonStore: s,
                            selectedKey: h
                        }), o = (0, n.jsx)(i(558045).A, {
                            type: i(558045).O.Vertical,
                            initialFocus: t,
                            sections: a
                        });
                        return i(986939).A.isMobile ? (0, n.jsx)(i(747369).A, {
                            menuType: i(649476).gu.Modal,
                            title: c,
                            right: p ? (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Done",
                                id: "selectButton.mobileModal.done.label"
                            }) : void 0,
                            onClickRight: p ? e.close : void 0,
                            children: o
                        }) : (0, n.jsx)(i(747369).A, {
                            menuType: i(649476).gu.Popup,
                            width: l,
                            maxHeight: u,
                            children: o
                        })
                    },
                    children: e
                })
            }
        },
        157982: (e, t, i) => {
            i.d(t, {
                E: () => o
            });
            var a = i(296540),
                r = i(474848);

            function o(e) {
                let {
                    placeholder: t,
                    value: o,
                    onChange: n,
                    onKeyDown: s,
                    onFocus: l,
                    onBlur: d,
                    inputStyle: u,
                    disabled: c,
                    debugName: p,
                    autosizeMinHeight: h,
                    inputClassName: g
                } = e, f = (0, i(533992).v3)(), [m, w] = (0, a.useState)(!1), v = (0, a.useCallback)(() => {
                    w(!0), (0, i(525779).clear)({
                        environment: f
                    }), null == l || l()
                }, [f, l]), y = (0, a.useCallback)(() => {
                    w(!1), null == d || d()
                }, [d]), x = (0, a.useCallback)(e => {
                    "Enter" === e.key ? e.preventDefault() : null == s || s(e)
                }, [s]);
                return (0, r.jsx)(i(790124).A, {
                    capture: m,
                    debugName: p,
                    children: e => (0, r.jsx)(i(36481).p, { ...e,
                        inputClassName: g,
                        placeholder: t,
                        value: o,
                        onChange: n,
                        onKeyDown: x,
                        onFocus: v,
                        onBlur: y,
                        style: u,
                        format: "transparent",
                        disabled: c,
                        spellCheck: !1,
                        textarea: !0,
                        autosize: !0,
                        autosizeMinHeight: h
                    })
                })
            }
        },
        236278: (e, t, i) => {
            i.d(t, {
                $: () => a
            });

            function a(e, t, a) {
                let r = {
                    id: "",
                    type: "static",
                    key: t,
                    category: i(292609).lU[t].category,
                    props: {}
                };
                return (0, i(505483).t)(e, r, a)
            }
        },
        241996: (e, t, i) => {
            i.d(t, {
                s: () => r
            }), i(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "4.77 3.05 5.58 9.9",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.162 3.238a.625.625 0 0 0-.884 0l-4.32 4.32a.625.625 0 0 0 0 .884l4.32 4.32a.625.625 0 1 0 .884-.884L6.284 8l3.878-3.878a.625.625 0 0 0 0-.884"
                    })
                },
                r = (0, i(104509).wt)("arrowChevronSingleLeftSmall", a, "small")
        },
        314925: (e, t, i) => {
            i.d(t, {
                iU: () => n,
                yc: () => d
            });
            var a = i(296540);

            function r(e) {
                let {
                    description: t,
                    workflowStore: a
                } = e;
                (0, i(377796).createAndCommit)({
                    userAction: "WorkflowActions.saveDescription",
                    environment: e.environment,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: a.pointer.spaceId
                    },
                    perform: e => {
                        (0, i(421439).y4)({
                            store: a,
                            operation: i(861988).Xo({
                                pointer: a.pointer,
                                description: t
                            }),
                            transaction: e
                        })
                    }
                })
            }
            var o = i(474848);
            let n = 1.25,
                s = "workflow_agent_header_tooltip",
                l = {
                    nameInput: {
                        fontSize: 32,
                        fontWeight: i(699422).Wy.bold,
                        color: i(632079).Tj.text.primary,
                        lineHeight: n
                    },
                    descriptionInput: {
                        fontSize: 16,
                        color: i(632079).Tj.text.secondary,
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap",
                        lineHeight: 1.5
                    },
                    headerContainer: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        marginBlockEnd: 12
                    },
                    buttonGroup: {
                        marginInlineStart: -8,
                        height: 28,
                        opacity: 0,
                        transition: "opacity 200ms ease"
                    },
                    buttonGroupVisible: {
                        opacity: 1
                    },
                    style1: {
                        display: "flex",
                        gap: 8
                    },
                    tooltipWrapper: {
                        display: "flex",
                        gap: 4,
                        borderRadius: 10,
                        background: i(632079).Tj.background.elevated,
                        color: i(632079).Tj.text.primary,
                        outlineStyle: "solid",
                        outlineColor: i(632079).Tj.border.secondary,
                        paddingBlock: 6,
                        paddingInlineStart: 10,
                        paddingInlineEnd: 6,
                        fontSize: 14,
                        lineHeight: 1.5,
                        fontWeight: i(699422).Wy.regular,
                        width: "max-content",
                        maxWidth: "unset",
                        marginInlineStart: 13,
                        boxShadow: i(632079).Tj.shadow.outline.md
                    },
                    iconTooltipContainer: {
                        position: "relative",
                        width: "max-content",
                        height: "max-content"
                    },
                    tooltipContainer: {
                        position: "absolute",
                        insetInlineStart: 96,
                        insetBlockEnd: "100%",
                        paddingBlockEnd: 4,
                        zIndex: 1
                    },
                    tooltipCloseButton: {
                        marginInlineStart: 4
                    },
                    tooltipCircle: {
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        background: i(632079).Tj.background.elevated,
                        outlineWidth: 1,
                        outlineStyle: "solid",
                        outlineColor: i(632079).Tj.border.secondary,
                        alignSelf: "center",
                        marginBlockStart: 5,
                        boxShadow: i(632079).Tj.shadow.outline.lg
                    },
                    positionRelative: {
                        position: "relative"
                    }
                },
                d = a.memo(function(e) {
                    let {
                        workflowStore: t,
                        workflowValidationErrorStore: d,
                        descriptionMode: u = "editable",
                        staticDescription: c
                    } = e, p = (0, i(533992).v3)(), h = (0, i(109939).tz)(), {
                        workflowValue: g
                    } = (0, i(867587).N)(t, !0), f = (0, i(682985).K8)(() => d.hasError("name"), [d]), m = (0, i(682985).K8)(() => d.hasError("description"), [d]), w = "editable" === u, {
                        name: v,
                        description: y
                    } = g, x = (0, i(102292).V)(v), [b, k] = (0, a.useState)(w && ((null == y ? void 0 : y.length) ? ? 0) > 0), C = (0, a.useRef)(y);
                    (0, a.useEffect)(() => {
                        let e = C.current,
                            t = !e || 0 === e.length,
                            i = !y || 0 === y.length;
                        if (!w) {
                            C.current = y;
                            return
                        }!t || i || b || k(!0), C.current = y
                    }, [y, b, w]);
                    let [S, M] = (0, a.useState)(!1), [j, A] = (0, a.useState)(!1), I = (0, i(682985).K8)(() => t.canAdmin(), [t]), T = (0, i(83208).X)("agent_page_icon_chat_bubble_tooltip"), {
                        isInAppMessageTooltipVisible: D,
                        isUserSettingsReady: R
                    } = (0, i(682985).K8)(() => {
                        var e;
                        return {
                            isInAppMessageTooltipVisible: i(696190).default.isVisible(s),
                            isUserSettingsReady: !!(null == (e = i(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : e.isReady())
                        }
                    }, []), E = T && I && R, B = E && D, {
                        disabled: z,
                        saveName: W
                    } = (0, i(322160).T)({
                        workflowStore: t,
                        workflowValue: g,
                        disabled: e.disabled
                    }), L = (0, a.useCallback)(e => {
                        let t = e.target.value;
                        f && d.clearError("name"), W(t)
                    }, [f, d, W]), N = (0, a.useCallback)(e => {
                        if (t.table === i(581654).U6) return;
                        let a = e.target.value;
                        m && d.clearError("description"), r({
                            workflowStore: t,
                            description: a,
                            environment: p,
                            threadStore: void 0
                        })
                    }, [t, p, m, d]), V = (0, a.useCallback)(() => {
                        M(!0)
                    }, []), _ = (0, a.useCallback)(() => {
                        M(!1)
                    }, []), P = (0, a.useCallback)(() => {
                        A(!0)
                    }, []), H = (0, a.useCallback)(() => {
                        A(!1)
                    }, []), U = (0, a.useCallback)(() => {
                        (0, i(59579).a)(p, s)
                    }, [p]);
                    (0, a.useEffect)(() => {
                        E && !D && (0, i(236278).$)(p, s)
                    }, [p, D, E]);
                    let K = (0, a.useCallback)(() => {
                            t.table !== i(581654).U6 && (m && d.clearError("description"), r({
                                workflowStore: t,
                                description: "",
                                environment: p,
                                threadStore: void 0
                            }), k(!1))
                        }, [t, p, m, d]),
                        F = z ? "" : "Add a description…";
                    return (0, o.jsx)(i(4458).VP, {
                        className: "autolayout-fill-width",
                        style: l.positionRelative,
                        children: (0, o.jsxs)("div", {
                            style: l.headerContainer,
                            onMouseEnter: V,
                            onMouseLeave: _,
                            children: [(0, o.jsxs)("div", {
                                style: l.iconTooltipContainer,
                                children: [(0, o.jsx)(i(432349).L, {
                                    workflowStore: t,
                                    disabled: z
                                }), B ? (0, o.jsxs)("div", {
                                    style: l.tooltipContainer,
                                    children: [(0, o.jsx)("div", {
                                        style: l.tooltipWrapper,
                                        children: (0, o.jsxs)(i(4458).fI, {
                                            alignItems: "center",
                                            children: [(0, o.jsx)(i(109939).sA, {
                                                defaultMessage: "Chat directly with me to make edits!",
                                                id: "workflowAgentHeader.agentIcon.chatEditsTooltip"
                                            }), (0, o.jsx)(i(374533).A, {
                                                ariaLabel: h.formatMessage({
                                                    defaultMessage: "Close",
                                                    id: "workflowAgentHeader.tooltipClose.ariaLabel"
                                                }),
                                                icon: i(25094).xMarkSmallIcon,
                                                size: "xs",
                                                style: l.tooltipCloseButton,
                                                onClick: U
                                            })]
                                        })
                                    }), (0, o.jsx)("div", {
                                        style: l.tooltipCircle
                                    })]
                                }) : void 0]
                            }), (0, o.jsx)("div", {
                                style: { ...l.buttonGroup,
                                    ...S || j ? l.buttonGroupVisible : {},
                                    ...l.style1
                                },
                                children: !z && w ? (0, o.jsx)(i(988022).p, {
                                    colorVariant: "tertiary",
                                    onClick: b ? K : () => k(!0),
                                    onFocus: P,
                                    onBlur: H,
                                    iconLeading: {
                                        icon: i(827670).infoCircleFillSmallIcon,
                                        size: "sm"
                                    },
                                    children: b ? (0, o.jsx)(i(109939).sA, {
                                        defaultMessage: "Remove description",
                                        id: "workflowAgentHeader.removeDescription.button"
                                    }) : (0, o.jsx)(i(109939).sA, {
                                        defaultMessage: "Add description",
                                        id: "workflowAgentHeader.addDescription.button"
                                    })
                                }) : void 0
                            }), (0, o.jsxs)(i(4458).VP, {
                                gap: 4,
                                children: [(0, o.jsx)("div", {
                                    style: l.nameInput,
                                    children: (0, o.jsx)(i(157982).E, {
                                        placeholder: "New agent",
                                        value: x,
                                        onChange: L,
                                        disabled: z,
                                        debugName: "AgentNameInput",
                                        autosizeMinHeight: 32 * n,
                                        inputClassName: i(828432).O2b
                                    })
                                }), b && w ? (0, o.jsx)("div", {
                                    style: l.descriptionInput,
                                    children: (0, o.jsx)(i(157982).E, {
                                        placeholder: F,
                                        value: y,
                                        onChange: N,
                                        disabled: z,
                                        debugName: "AgentDescriptionInput",
                                        autosizeMinHeight: 24
                                    })
                                }) : !w && c ? (0, o.jsx)("div", {
                                    style: l.descriptionInput,
                                    children: c
                                }) : void 0]
                            })]
                        })
                    })
                })
        },
        322160: (e, t, i) => {
            i.d(t, {
                T: () => r
            });
            var a = i(296540);

            function r(e) {
                let {
                    workflowStore: t,
                    workflowValue: r
                } = e, o = (0, i(533992).v3)(), n = (0, i(109939).tz)(), s = t.table === i(581654).U6, l = (0, i(682985).K8)(() => !s && (t.canEdit() ? ? !1), [t, s]), d = !l || !!e.disabled, u = (0, a.useRef)(!1), c = (0, a.useCallback)(() => {
                    s || u.current || (u.current = !0, (0, i(599231).p4)({
                        workflowId: t.id,
                        isDatabaseAgent: (0, i(445568).isWorkflowDataDatabaseAgent)(r)
                    }))
                }, [t, r, s]), p = (0, a.useCallback)(e => {
                    d || s || (c(), (0, i(795326).X)({
                        workflowStore: t,
                        name: e,
                        environment: o
                    }))
                }, [d, s, c, t, o]), h = (0, a.useCallback)(e => {
                    d || s || function(e) {
                        let {
                            icon: t,
                            workflowStore: a
                        } = e;
                        (0, i(377796).createAndCommit)({
                            userAction: "WorkflowActions.saveIcon",
                            environment: e.environment,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: a.pointer.spaceId
                            },
                            perform: e => {
                                (0, i(421439).y4)({
                                    store: a,
                                    operation: i(861988).yD({
                                        pointer: a.pointer,
                                        icon: t
                                    }),
                                    transaction: e
                                })
                            }
                        })
                    }({
                        workflowStore: t,
                        icon: e,
                        environment: o
                    })
                }, [d, s, t, o]), g = (0, a.useCallback)(e => {
                    d || s || i(874443).W(o, {
                        originRect: e.getBoundingClientRect(),
                        originGap: 4,
                        popupWidth: i(703188).jv,
                        popupHeight: i(703188).GF,
                        isSmallWidth: !1,
                        title: n.formatMessage({
                            defaultMessage: "Agent icon",
                            id: "agentPage.iconModalMenu.title"
                        }),
                        currentTab: "customAgent",
                        tabs: [{
                            type: "customAgent",
                            title: n.formatMessage({
                                defaultMessage: "Agent",
                                id: "agentPage.iconModalMenu.agentTab.title"
                            }),
                            agentIcon: r.icon,
                            onChange: (e, t) => {
                                h(e), t && t.keepVisible || i(874443).I()
                            }
                        }, {
                            type: "emoji",
                            onChange: (e, t) => {
                                h(e), t && t.keepVisible || i(874443).I()
                            }
                        }, {
                            type: "icon",
                            onChange: (e, t) => {
                                h(e), t && t.keepVisible || i(874443).I()
                            }
                        }, {
                            type: "file",
                            fileUpload: !1,
                            imageUpload: !0,
                            videoUpload: !1,
                            title: n.formatMessage({
                                defaultMessage: "Upload",
                                id: "agentPage.iconModalMenu.uploadTab.title"
                            }),
                            caption: n.formatMessage({
                                defaultMessage: "Recommended size is 280×280 pixels",
                                id: "agentPage.iconModalMenu.uploadTab.caption"
                            }),
                            onUpload: e => {
                                i(874443).I(), i(385475).QM({
                                    environment: o,
                                    file: e[0],
                                    bucket: "public",
                                    reportRichUploadMetrics: !0,
                                    onComplete: e => {
                                        h(e)
                                    },
                                    onError: () => {
                                        i(647095).f1(n.formatMessage({
                                            defaultMessage: "Upload failed. Please try again.",
                                            id: "agentPage.iconModalMenu.uploadError.message"
                                        }))
                                    }
                                })
                            }
                        }],
                        onDelete: () => {
                            h(void 0), i(874443).I()
                        }
                    })
                }, [d, s, o, n, r.icon, h]);
                return {
                    canEdit: l,
                    disabled: d,
                    saveName: p,
                    handleIconClick: (0, a.useCallback)(e => {
                        g(e.currentTarget)
                    }, [g]),
                    handleIconKeyDown: (0, a.useCallback)(e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), g(e.currentTarget))
                    }, [g]),
                    showIconPicker: g
                }
            }
        },
        331460: (e, t, i) => {
            i.d(t, {
                t: () => r
            });
            var a = () => i(546605);
            class r extends a().Store {
                constructor(e) {
                    super("AgentThreadListStore"), this.setState(e)
                }
                getInitialState() {
                    return {
                        status: "idle",
                        value: void 0,
                        refetch: () => Promise.resolve(void 0)
                    }
                }
                updateThreadHistory(e) {
                    this.setState(e)
                }
                async refreshThreads() {
                    let e = this.state.refetch;
                    await e()
                }
            }
        },
        338798: (e, t, i) => {
            i.d(t, {
                _: () => s
            });
            var a = i(296540),
                r = i(474848);
            let o = {
                    krdFHd: "x1i5p2am",
                    kfmiAY: "x1whfx0g",
                    kT0f0o: "xr2y4jy",
                    kVL7Gh: "x1ihp6rs",
                    $$css: !0
                },
                n = {
                    kzqmXN: "xh8yej3",
                    $$css: !0
                };

            function s(e) {
                let t = (0, a.useMemo)(() => [n, !i(986939).A.isMobile && o, e.buttonStyle], [e.buttonStyle]);
                return (0, r.jsx)(i(64960).Ay, {
                    onClick: e.onClick,
                    hovered: e.focused,
                    disabled: e.disabled,
                    style: t,
                    hoveredStyle: e.hoveredButtonStyle,
                    pressedStyle: e.pressedButtonStyle,
                    children: (0, r.jsx)(i(636518).Ay, { ...e,
                        dontShrinkTitle: !0,
                        right: (0, r.jsxs)("div", { ...{
                                className: "x78zum5 x6s0dn4 xuxw1ft x1r0jzty x17zd0t2"
                            },
                            children: [e.right ? (0, r.jsx)(i(324489).V, {
                                isSecondaryColor: !0,
                                children: e.right
                            }) : void 0, i(986939).A.isMobile ? void 0 : (0, r.jsx)("div", { ...{
                                    0: {
                                        className: "x2lah0s x1jaox4c"
                                    },
                                    1: {
                                        className: "x2lah0s x1jaox4c x182y5vf"
                                    }
                                }["right" === e.chevronType | 0],
                                children: (0, r.jsx)(i(16275).I, {
                                    icon: i(595453).arrowChevronSingleDownSmallIcon,
                                    size: "xs",
                                    colorVariant: "tertiary"
                                })
                            })]
                        })
                    })
                })
            }
        },
        432349: (e, t, i) => {
            i.d(t, {
                L: () => r
            }), i(296540);
            var a = i(474848);

            function r(e) {
                let {
                    workflowStore: t,
                    disabled: r = !1,
                    iconSize: o = 90
                } = e, {
                    workflowValue: n
                } = (0, i(867587).N)(t, !0), s = n.icon, {
                    canEdit: l,
                    disabled: d,
                    handleIconClick: u,
                    handleIconKeyDown: c
                } = (0, i(322160).T)({
                    workflowStore: t,
                    workflowValue: n,
                    disabled: r
                }), p = (0, i(960253).I)(() => ({
                    iconContainer: {
                        width: o,
                        height: o,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 64,
                        cursor: l ? "pointer" : "default",
                        userSelect: "none",
                        borderRadius: 8,
                        flexShrink: 0,
                        ...l && {
                            transition: "background-color 0.15s ease"
                        }
                    }
                }), [l, o]);
                return l && !d ? (0, a.jsx)(i(64960).Ay, {
                    style: p.iconContainer,
                    onClick: u,
                    onKeyDown: c,
                    children: (0, a.jsx)(i(651790).AgentIcon, {
                        agentIcon: s,
                        workflowStore: t,
                        size: o,
                        animated: !0
                    })
                }) : (0, a.jsx)("div", {
                    style: p.iconContainer,
                    children: (0, a.jsx)(i(651790).AgentIcon, {
                        agentIcon: s,
                        workflowStore: t,
                        size: o,
                        animated: !0
                    })
                })
            }
        },
        433413: (e, t, i) => {
            i.d(t, {
                h: () => o
            }), i(296540);
            var a = i(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M10.172 5.564a.625.625 0 0 0-.858.214L7.36 9.035 6.325 7.827a.625.625 0 1 0-.95.813l1.6 1.867a.625.625 0 0 0 1.01-.085l2.4-4a.625.625 0 0 0-.213-.858"
                        }), (0, a.jsx)("path", {
                            d: "M4.25 2.375c-1.036 0-1.875.84-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h7.5c1.036 0 1.875-.84 1.875-1.875v-7.5c0-1.036-.84-1.875-1.875-1.875zM3.625 4.25c0-.345.28-.625.625-.625h7.5c.345 0 .625.28.625.625v7.5c0 .345-.28.625-.625.625h-7.5a.625.625 0 0 1-.625-.625z"
                        })]
                    })
                },
                o = (0, i(104509).wt)("checkmarkSquareSmall", r, "small")
        },
        500786: (e, t, i) => {
            i.d(t, {
                h: () => a
            });

            function a(e) {
                let t = (0, i(972740).L)();
                return (0, i(682985).K8)(() => {
                    if (e && t) return i(360851).N.createChildStore(t, {
                        table: i(43296).C,
                        id: e,
                        spaceId: t.id
                    })
                }, [e, t])
            }
        },
        505213: (e, t, i) => {
            i.d(t, {
                D: () => l
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(803949), i(581454), i(737550);
            var a = i(296540),
                r = () => i(642157);
            i(944114);
            var o = () => i(801062),
                n = i(474848);
            let s = {
                container: {
                    display: "flex",
                    gap: 6,
                    flexDirection: "row",
                    alignItems: "center",
                    color: i(632079).Tj.text.secondary,
                    minHeight: 20,
                    paddingInline: 12,
                    minWidth: 0,
                    flexShrink: 1,
                    overflow: "hidden"
                },
                avatarsContainer: {
                    marginInlineStart: 8,
                    display: "flex",
                    flexDirection: "row-reverse"
                },
                avatarWrapper: {
                    marginInlineStart: -8
                },
                avatarDropdownWrapper: {
                    display: "flex",
                    alignContent: "flex-end",
                    minWidth: 140,
                    width: "100%",
                    marginTop: 4,
                    marginBottom: 4
                },
                label: {
                    fontSize: 12
                },
                style0: {
                    flexGrow: 1
                }
            };

            function l(e) {
                let {
                    section: t,
                    spaceStore: l,
                    workflowStore: d
                } = e, u = (0, i(345776).T)(), c = (0, i(682985).K8)(() => {
                    if (!d.isDefined()) return !1;
                    let e = d.getPermissionItems();
                    return 1 === e.length && "user_permission" === e[0].type && u === e[0].user_id
                }, [d, u]), p = (0, i(682985).K8)(() => !!d.isDefined() && d.getPermissionItems().some(e => "space_permission" === e.type && (0, r().lg)(e.role)), [d]), h = (0, i(682985).K8)(() => {
                    if (l) return l.getName()
                }, [l]), g = (0, i(682985).K8)(() => {
                    if (l) return l.getIcon()
                }, [l]), f = (0, i(682985).K8)(() => {
                    if (!l || !d.isDefined()) return [];
                    let e = d.getPermissionItems(),
                        t = new Set;
                    return e.forEach(e => {
                        "user_permission" === e.type && e.user_id && (0, r().lg)(e.role) && t.add(e.user_id)
                    }), Array.from(t).map(e => i(807825).L.createChildStore(l, {
                        table: i(832375).oo9,
                        id: e,
                        spaceId: l.id
                    }))
                }, [l, d]), m = (0, i(682985).K8)(() => (function(e) {
                    if (!e.isDefined()) return [];
                    let t = new Set;
                    for (let i of e.getPermissionItems()) "group_permission" === i.type && (0, r().lg)(i.role) && t.add(i.group_id);
                    let i = [];
                    for (let e of t) {
                        let t = o().h.getGroupData(e);
                        t && i.push(t)
                    }
                    return i
                })(d), [d]), w = (0, a.useMemo)(() => {
                    let e = f.map(e => ({
                            type: "user",
                            userStore: e
                        })),
                        t = m.map(e => ({
                            type: "group",
                            group: e
                        }));
                    return e.concat(t)
                }, [f, m]), v = (0, a.useMemo)(() => w.slice(0, 3), [w]), y = e => {
                    switch (e.type) {
                        case "user":
                            return (0, n.jsx)("div", {
                                style: s.avatarDropdownWrapper,
                                children: (0, n.jsx)(i(980494).A, {
                                    userStore: e.userStore,
                                    avatarSize: 18,
                                    style: s.style0,
                                    hasPersonHoverCard: !1
                                })
                            }, `${e.userStore.id}--tooltip`);
                        case "group":
                            return (0, n.jsx)("div", {
                                style: s.avatarDropdownWrapper,
                                children: (0, n.jsx)(i(308256).o, {
                                    group: e.group.group,
                                    size: 18
                                })
                            }, `${e.group.group.getGroupId()}--tooltip`);
                        default:
                            return null
                    }
                };
                return c ? null : p && h ? (0, n.jsxs)("div", {
                    style: s.container,
                    children: [g ? (0, n.jsx)(i(4458).fI, {
                        alignItems: "center",
                        marginInlineEnd: 2,
                        children: (0, n.jsx)(i(569553).B6, {
                            icon: g,
                            size: 18,
                            disabled: !0,
                            isEmptyPage: !1
                        })
                    }) : void 0, (0, n.jsx)(i(503473).j, {
                        style: s.label,
                        children: "chat" === t ? (0, n.jsx)(i(109939).sA, {
                            id: "AgentPage.everyoneAtWorkspaceCanViewChats",
                            defaultMessage: "Everyone at {workspace} can view chats",
                            values: {
                                workspace: h
                            }
                        }) : "activity" === t ? (0, n.jsx)(i(109939).sA, {
                            id: "AgentPage.everyoneAtWorkspaceCanViewActivity",
                            defaultMessage: "Everyone at {workspace} can view activity",
                            values: {
                                workspace: h
                            }
                        }) : (0, i(722371).HB)(t)
                    })]
                }) : (0, n.jsxs)("div", {
                    style: s.container,
                    children: [(0, n.jsx)(i(51831).m, {
                        placement: "bottom",
                        content: () => w.map(y),
                        children: e => (0, n.jsx)("div", {
                            style: s.avatarsContainer,
                            ...e,
                            children: v.map(e => (0, n.jsx)("div", {
                                style: s.avatarWrapper,
                                children: (e => {
                                    switch (e.type) {
                                        case "user":
                                            return (0, n.jsx)(i(321753).A, {
                                                userStore: e.userStore,
                                                size: 18
                                            }, e.userStore.id);
                                        case "group":
                                            return (0, n.jsx)(i(308256).o, {
                                                group: e.group.group,
                                                size: 18
                                            }, e.group.group.getGroupId());
                                        default:
                                            return null
                                    }
                                })(e)
                            }, "user" === e.type ? e.userStore.id : e.group.group.getGroupId()))
                        })
                    }), (0, n.jsx)(i(503473).j, {
                        style: s.label,
                        children: "chat" === t ? (0, n.jsx)(i(109939).sA, {
                            id: "AgentPage.editorsCanViewChats",
                            defaultMessage: "Editors can view chats"
                        }) : "activity" === t ? (0, n.jsx)(i(109939).sA, {
                            id: "AgentPage.editorsCanViewActivity",
                            defaultMessage: "Editors can view activity"
                        }) : (0, i(722371).HB)(t)
                    })]
                })
            }
        },
        604384: (e, t, i) => {
            function a(e) {
                var t;
                if (!e) return !1;
                let a = e.getDataStore().getValue();
                if (!a) return !1;
                let r = null == (t = a.paused_reason) ? void 0 : t.reason;
                return "paused" === a.status && (0, i(425749).cE)(r)
            }

            function r(e) {
                var t;
                if (!e) return;
                let i = e.getDataStore().getValue();
                if (i && (!i.status || "paused" === i.status)) return null == (t = i.paused_reason) ? void 0 : t.reason
            }

            function o(e) {
                var t;
                if (!e) return;
                let a = e.getDraftData() ? ? e.getData();
                if (!a || a.status && "paused" !== a.status) return;
                let r = null == (t = a.paused_reason) ? void 0 : t.reason;
                return (0, i(425749).I$)(r) ? r : void 0
            }

            function n(e, t) {
                switch (e) {
                    case "runLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.runLimit",
                            defaultMessage: "Run limit reached for this agent"
                        });
                    case "creditLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.creditLimit",
                            defaultMessage: "Credit limit reached for this agent"
                        });
                    case "runawayCreditUsage":
                        return t.formatMessage({
                            id: "workflow.pausedReason.runawayCreditUsage",
                            defaultMessage: "Auto-paused for unusually high credit usage"
                        });
                    case "failureLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.failureLimit",
                            defaultMessage: "Too many failures for this agent"
                        });
                    case "workspaceSpendLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.workspaceSpendLimit",
                            defaultMessage: "Workspace custom agent usage limit reached"
                        });
                    case "disabledByAdmin":
                        return t.formatMessage({
                            id: "workflow.pausedReason.disabledByAdmin",
                            defaultMessage: "Disabled by workspace owner"
                        });
                    case "orphanedAutoDisable":
                        return t.formatMessage({
                            id: "workflow.pausedReason.orphanedAutoDisable",
                            defaultMessage: "Automatically disabled — no full access members"
                        });
                    case "disabledByNotion":
                        return t.formatMessage({
                            id: "workflow.pausedReason.disabledByNotion",
                            defaultMessage: "Temporarily disabled."
                        });
                    case "internalError":
                        return t.formatMessage({
                            id: "workflow.pausedReason.internalError",
                            defaultMessage: "Internal error"
                        });
                    case "needsReview":
                        return t.formatMessage({
                            id: "workflow.pausedReason.needsReview",
                            defaultMessage: "Needs review"
                        });
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function s(e, t) {
                switch (e) {
                    case "runLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.runLimit.short",
                            defaultMessage: "Run limit"
                        });
                    case "creditLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.creditLimit.short",
                            defaultMessage: "Credit limit"
                        });
                    case "runawayCreditUsage":
                        return t.formatMessage({
                            id: "workflow.pausedReason.runawayCreditUsage.short",
                            defaultMessage: "Auto-paused"
                        });
                    case "failureLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.failureLimit.short",
                            defaultMessage: "Failures"
                        });
                    case "workspaceSpendLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.workspaceSpendLimit.short",
                            defaultMessage: "Workspace limit"
                        });
                    case "disabledByAdmin":
                        return t.formatMessage({
                            id: "workflow.pausedReason.disabledByAdmin.short",
                            defaultMessage: "Disabled"
                        });
                    case "orphanedAutoDisable":
                        return t.formatMessage({
                            id: "workflow.pausedReason.orphanedAutoDisable.short",
                            defaultMessage: "No owner"
                        });
                    case "disabledByNotion":
                        return t.formatMessage({
                            id: "workflow.pausedReason.disabledByNotion.short",
                            defaultMessage: "Disabled"
                        });
                    case "internalError":
                        return t.formatMessage({
                            id: "workflow.pausedReason.internalError.short",
                            defaultMessage: "Error"
                        });
                    case "needsReview":
                        return t.formatMessage({
                            id: "workflow.pausedReason.needsReview.short",
                            defaultMessage: "Needs review"
                        });
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function l(e) {
                let {
                    runStatus: t,
                    runPausedReason: i
                } = e;
                return "paused" === t && ("creditLimit" === i || "runLimit" === i || "runawayCreditUsage" === i)
            }
            i.d(t, {
                QF: () => l,
                R6: () => s,
                W0: () => r,
                jp: () => a,
                of: () => n,
                uf: () => o
            })
        },
        795326: (e, t, i) => {
            i.d(t, {
                X: () => a
            });

            function a(e) {
                let {
                    name: t,
                    workflowStore: a
                } = e;
                (0, i(377796).createAndCommit)({
                    userAction: "WorkflowActions.saveName",
                    environment: e.environment,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: a.pointer.spaceId
                    },
                    perform: e => {
                        (0, i(421439).y4)({
                            store: a,
                            operation: i(861988).i({
                                pointer: a.pointer,
                                name: t
                            }),
                            transaction: e
                        })
                    }
                })
            }
        },
        833503: (e, t, i) => {
            i.d(t, {
                s: () => m
            });
            var a = i(296540),
                r = () => i(722371),
                o = () => i(770808),
                n = i(474848);

            function s(e) {
                let {
                    children: t,
                    isSizeTransitionAnimated: r,
                    onSizeChanged: s
                } = e, l = (0, a.useMemo)(() => (0, o().Ve)(e.areaConstraint), [e.areaConstraint]), {
                    preferredSize: d,
                    ref: u
                } = (0, i(218381).e)(l), c = (0, a.useMemo)(() => (function(e) {
                    let {
                        areaConstraint: t,
                        preferredSize: a
                    } = e;
                    return {
                        width: (0, i(627179).qE)({
                            value: (null == a ? void 0 : a.width) ? ? 0,
                            min: t.width.min,
                            max: t.width.max
                        }),
                        height: (0, i(627179).qE)({
                            value: (null == a ? void 0 : a.height) ? ? 0,
                            min: t.height.min,
                            max: t.height.max
                        })
                    }
                })({
                    areaConstraint: l,
                    preferredSize: d
                }), [l, d]), p = function(e) {
                    let {
                        actualSize: t,
                        preferredSize: i,
                        areaConstraint: a
                    } = e, r = "allow" === a.width.scroll, o = "allow" === a.height.scroll, n = r && (null == i ? void 0 : i.width) !== void 0 && t.width < i.width, s = o && (null == i ? void 0 : i.width) !== void 0 && t.height < i.height;
                    return {
                        actualSize: t,
                        constrainedSize: {
                            minWidth: a.width.min,
                            maxWidth: r ? void 0 : a.width.max,
                            minHeight: a.height.min,
                            maxHeight: o ? void 0 : a.height.max
                        },
                        isWidthScrollbarVisible: n,
                        isHeightScrollbarVisible: s
                    }
                }({
                    actualSize: c,
                    preferredSize: d,
                    areaConstraint: l
                }), h = function(e) {
                    let {
                        actualSize: t,
                        areaConstraint: a,
                        isSizeTransitionAnimated: r
                    } = e, n = (0, i(11012).j)(100), {
                        prefersReducedMotion: s
                    } = (0, i(533992).Y0)(), l = (0, o().bv)(a);
                    return (0, i(960253).I)(() => {
                        let e = "allow" === a.width.scroll,
                            i = "allow" === a.height.scroll;
                        return {
                            wrapper: {
                                position: "relative"
                            },
                            content: {
                                height: null == t ? void 0 : t.height,
                                overflowX: e ? "auto" : "clip",
                                overflowY: i ? "auto" : "clip",
                                WebkitOverflowScrolling: "touch",
                                width: null == t ? void 0 : t.width,
                                transition: r && n && !s ? "0.25s ease width, 0.25s ease height" : void 0
                            },
                            measure: {
                                display: "flex",
                                flexDirection: "column",
                                height: l.height ? "fit-content" : "100%",
                                maxHeight: a.height.max,
                                maxWidth: a.width.max,
                                minHeight: a.height.min,
                                minWidth: a.width.min,
                                width: l.width ? "fit-content" : "100%"
                            }
                        }
                    }, [t, a, r, n, s, l])
                }({
                    actualSize: c,
                    areaConstraint: l,
                    isSizeTransitionAnimated: r
                });
                return (0, a.useEffect)(() => {
                    null == s || s(c, d)
                }, [c, s, d]), (0, n.jsx)(i(858803).w.Provider, {
                    value: p,
                    children: (0, n.jsx)("div", {
                        style: h.wrapper,
                        children: (0, n.jsx)("div", {
                            style: h.content,
                            children: (0, n.jsx)("div", {
                                ref: u,
                                className: "measure",
                                style: h.measure,
                                children: t
                            })
                        })
                    })
                })
            }
            i(898992), i(354520), i(581454);
            var l = () => i(381453);

            function d(e) {
                let t = 0,
                    i = Number.MAX_SAFE_INTEGER;
                for (let a of e) {
                    if (!a) continue;
                    let e = (0, o().Vo)(a),
                        r = (0, l().qE)(e.max, 0, Number.MAX_SAFE_INTEGER);
                    t = Math.max(t, (0, l().qE)(e.min, 0, r)), i = Math.min(i, r)
                }
                let a = function(e) {
                    let t;
                    for (let i of e) {
                        let e = null == i ? void 0 : i.scroll;
                        switch (e) {
                            case "disallow":
                                return "disallow";
                            case "allow":
                                t = "allow";
                                break;
                            case void 0:
                                break;
                            default:
                                (0, r().HB)(e)
                        }
                    }
                    return t
                }(e);
                return {
                    type: "range",
                    min: (0, l().qE)(t, 0, i),
                    max: i,
                    scroll: a
                }
            }

            function u(e) {
                let t = e.filter(Boolean);
                return {
                    width: d(t.map(e => null == e ? void 0 : e.width)),
                    height: d(t.map(e => null == e ? void 0 : e.height))
                }
            }

            function c(e) {
                let {
                    minimumOutsideSpacing: t
                } = e, r = (0, i(118872).lW)();
                return (0, a.useMemo)(() => {
                    let e = r.width - t.left - t.right,
                        i = r.height - t.top - t.bottom;
                    return (0, o().Ve)({
                        width: {
                            type: "max",
                            length: e
                        },
                        height: {
                            type: "max",
                            length: i
                        }
                    })
                }, [t.bottom, t.left, t.right, t.top, r.height, r.width])
            }

            function p(e) {
                let t, {
                        allowMenuList: o,
                        allowDismissByEscape: l = !0,
                        anchor: d = "center",
                        animateSizeTransition: p = !0,
                        ariaLabel: h,
                        ariaLabelledBy: g,
                        ariaDescribedBy: f,
                        keyboardAreaPriority: m,
                        children: w,
                        transition: v,
                        showCloseIcon: y,
                        borderRadius: x,
                        backgroundAppearance: b,
                        transitionAppearance: k
                    } = e,
                    [C, S] = (0, a.useState)(!1);
                (0, i(202146).exposeDebugValue)("screenshotMode", () => {
                    S(e => !e)
                });
                let M = function(e) {
                        let {
                            partial: t,
                            defaultLength: i = 0
                        } = e;
                        switch (null == t ? void 0 : t.type) {
                            case "sides":
                                return {
                                    type: "sides",
                                    left: t.left ? ? i,
                                    right: t.right ? ? i,
                                    top: t.top ? ? i,
                                    bottom: t.bottom ? ? i
                                };
                            case "axes":
                                return {
                                    type: "sides",
                                    left: t.horizontal ? ? i,
                                    right: t.horizontal ? ? i,
                                    top: t.vertical ? ? i,
                                    bottom: t.vertical ? ? i
                                };
                            case "all":
                                return {
                                    type: "sides",
                                    left: t.length ? ? i,
                                    right: t.length ? ? i,
                                    top: t.length ? ? i,
                                    bottom: t.length ? ? i
                                };
                            case void 0:
                                return {
                                    type: "sides",
                                    left: i,
                                    right: i,
                                    top: i,
                                    bottom: i
                                };
                            default:
                                (0, r().HB)(t)
                        }
                    }({
                        partial: e.minimumOutsideSpacing,
                        defaultLength: 40
                    }),
                    j = c({
                        minimumOutsideSpacing: M
                    });
                e.areaConstraint && (t = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "desktop"
                }) : e.areaConstraint);
                let A = u([j, t]),
                    I = function(e) {
                        let {
                            screenshotMode: t,
                            anchor: a,
                            minimumOutsideSpacing: o,
                            borderRadius: n
                        } = e;
                        return (0, i(960253).I)(() => {
                            let e, s, l;
                            switch (a) {
                                case "top":
                                    e = "flex-start", s = o.top;
                                    break;
                                case "bottom":
                                    e = "flex-end", l = o.bottom;
                                    break;
                                case "center":
                                case void 0:
                                    e = "center";
                                    break;
                                default:
                                    (0, r().HB)(a)
                            }
                            return {
                                innerStyle: {
                                    borderRadius: n ? ? 12,
                                    display: "flex",
                                    overflow: "hidden",
                                    position: "relative"
                                },
                                outerStyle: {
                                    alignItems: e,
                                    paddingTop: s,
                                    paddingBottom: l
                                },
                                overlay: t ? {
                                    background: i(632079).Tj.background.primary,
                                    transition: "0.2s ease background"
                                } : {},
                                fullScreenOverlay: {
                                    background: i(632079).Tj.background.primary
                                }
                            }
                        }, [a, t, o.bottom, o.top, n])
                    }({
                        screenshotMode: C,
                        anchor: d,
                        minimumOutsideSpacing: M,
                        borderRadius: x
                    }),
                    T = (0, n.jsx)(i(790124).A, {
                        capture: !0,
                        keyboardAreaPriority: m,
                        allowEsc: !0,
                        allowMenuList: o,
                        children: () => (0, n.jsx)(s, {
                            areaConstraint: A,
                            isSizeTransitionAnimated: p,
                            children: (0, n.jsx)(i(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? w({
                                    displayMode: "desktop",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    });
                return (0, n.jsx)(i(19187).e.Provider, {
                    value: v.onDismiss,
                    children: (0, n.jsx)(i(556809).a, {
                        ariaDescribedBy: f,
                        ariaLabel: h,
                        ariaLabelledBy: g,
                        backgroundStyle: "full-screen" === k ? I.fullScreenOverlay : I.overlay,
                        innerStyle: I.innerStyle,
                        isWaxPaper: "waxPaper" === b,
                        isWash: "wash" === b,
                        transitionAppearance: k,
                        onClosed: v.onClosed,
                        onDismiss: l ? v.onDismiss : void 0,
                        open: v.isOpen,
                        preventHideChildrenWhileOpening: !0,
                        children: T,
                        showCloseIcon: y,
                        style: I.outerStyle,
                        className: e.className
                    })
                })
            }
            let h = {
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto"
                },
                g = {
                    height: "var(--full-viewport-height)"
                };

            function f(e) {
                var t, r, o;
                let l, d, {
                        allowDismissByEscape: p = !0,
                        animateSizeTransition: f = !0,
                        ariaLabel: m,
                        ariaLabelledBy: w,
                        ariaDescribedBy: v,
                        children: y,
                        transition: x
                    } = e,
                    b = c({
                        minimumOutsideSpacing: {
                            type: "sides",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        }
                    }),
                    {
                        isTablet: k
                    } = (0, i(533992).Y0)();
                null != (t = e.deprecatedCompatibilityOverrides) && t.tabletsUsePhoneDisplayMode && k && (l = {
                    width: {
                        type: "fixed",
                        length: i(182718).bJ
                    }
                }), e.areaConstraint && (d = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "phone"
                }) : e.areaConstraint);
                let C = u([b, l, {
                        width: {
                            type: "fill",
                            scroll: null == (r = d) || null == (r = r.width) ? void 0 : r.scroll
                        },
                        height: null == (o = d) ? void 0 : o.height
                    }]),
                    S = (0, a.useCallback)(() => (0, n.jsx)(i(790124).A, {
                        capture: !0,
                        allowEsc: !0,
                        children: () => (0, n.jsx)(s, {
                            areaConstraint: C,
                            isSizeTransitionAnimated: f,
                            children: (0, n.jsx)(i(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? y({
                                    displayMode: "phone",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    }), [C, f, y]);
                return (0, n.jsx)(i(19187).e.Provider, {
                    value: x.onDismiss,
                    children: (0, n.jsx)(i(182718).zD, {
                        ariaLabel: m,
                        ariaLabelledBy: w,
                        ariaDescribedBy: v,
                        open: x.isOpen,
                        popupType: i(423291).n.BottomSheet,
                        onDismiss: p ? x.onDismiss : void 0,
                        onClosed: x.onClosed,
                        slideUpWrapStyle: g,
                        style: h,
                        content: S,
                        className: e.className,
                        bottomSheetBackgroundColor: "elevated"
                    })
                })
            }

            function m(e) {
                let {
                    isOpen: t,
                    onClosed: a,
                    onDismiss: o,
                    deprecatedCompatibilityOverrides: s,
                    startClosingOnDismiss: l
                } = e, d = function(e) {
                    let {
                        isPhone: t
                    } = (0, i(533992).Y0)();
                    return null != e && e.tabletsUsePhoneDisplayMode ? i(986939).A.isMobile ? "phone" : "desktop" : t ? "phone" : "desktop"
                }(s), u = (0, i(245372).j)({
                    isOpen: t,
                    onClosed: a,
                    onDismiss: o,
                    startClosingOnDismiss: l
                });
                if (!u.shouldRender) return null;
                switch (d) {
                    case "phone":
                        return (0, n.jsx)(f, { ...e,
                            transition: u
                        });
                    case "desktop":
                        return (0, n.jsx)(p, { ...e,
                            transition: u
                        });
                    default:
                        (0, r().HB)(d)
                }
            }
        },
        891603: (e, t, i) => {
            i.d(t, {
                I: () => r
            }), i(898992), i(354520), i(430670), i(581454), i(737550);
            var a = i(296540);

            function r(e) {
                let {
                    threadStore: t,
                    spaceId: r,
                    defaultConfig: n
                } = e, s = (0, i(533992).v3)(), l = (0, i(109939).tz)(), d = (0, i(909212).i7)(), u = (0, i(83208).X)("ai_allow_model_switching_during_chat"), c = (0, i(682985).K8)(() => {
                    let {
                        steps: e
                    } = (0, i(187353).A3)({
                        clientStore: i(57168).defaultClientAIChatStore,
                        threadStore: t
                    });
                    return (0, i(850563).TU)({
                        transcript: e
                    })
                }, [t], {
                    equalityFn: i(381453).n4
                }), p = (0, i(682985).K8)(() => (function(e) {
                    let {
                        environment: t,
                        intl: a,
                        isAgentEnabled: r,
                        spaceId: n
                    } = e, s = t.RouterStore.state.route;
                    if ("page" !== s.name && "chat" !== s.name && "home" !== s.name && "ai" !== s.name) return;
                    if ("chat" === s.name && s.peekViewBlockId && ("settings" === s.workflowViewType || "activity" === s.workflowViewType || "chat" === s.workflowViewType)) return (0, i(922900).getWorkflowAgentConfig)({
                        environment: t,
                        spaceId: n,
                        workflowId: s.peekViewBlockId,
                        isCustomAgent: !0
                    });
                    let l = s.targetConfig;
                    if (!l || !(0, i(271452).bD)(l.type)) return;
                    let d = (0, i(180139).bz)(l.type),
                        u = { ...d,
                            ...l
                        };
                    switch (u.type) {
                        case "markdown-chat":
                            if (o({
                                    config: (0, i(358519).Qq)(i(465862).zu, u),
                                    intl: a,
                                    isAgentEnabled: r,
                                    environment: t,
                                    spaceId: n
                                })) return u;
                            break;
                        case "researcher":
                            if ((0, i(358519).Xj)(i(465862).Gy, u)) return u;
                            break;
                        case "workflow":
                            if ((0, i(358519).Xj)(i(465862).zp, u) && o({
                                    config: u,
                                    intl: a,
                                    isAgentEnabled: r,
                                    environment: t,
                                    spaceId: n
                                })) return u
                    }
                    return d
                })({
                    environment: s,
                    intl: l,
                    isAgentEnabled: d,
                    spaceId: r
                }), [s, l, d, r], {
                    equalityFn: i(381453).n4
                }), h = (0, i(682985).K8)(() => (0, i(862451).getDefaultNewThreadConfigFromUserPreference)({
                    spaceId: r,
                    environment: s
                }), [r, s], {
                    equalityFn: i(381453).n4
                }), [g, f] = (0, a.useState)(), m = (0, a.useCallback)(e => {
                    f("reset" === e ? void 0 : e)
                }, []), w = (0, i(668745).ZC)(null == t ? void 0 : t.id);
                (0, a.useEffect)(() => {
                    if (w !== (null == t ? void 0 : t.id) && !(0, i(558208).Ci)(t)) {
                        if (t) {
                            let {
                                steps: e
                            } = (0, i(187353).A3)({
                                clientStore: i(57168).defaultClientAIChatStore,
                                threadStore: t
                            }), a = (0, i(850563).TU)({
                                transcript: e
                            });
                            if ((null == a ? void 0 : a.type) === "council-chat") return void m(a)
                        }
                        m("reset")
                    }
                }, [null == t ? void 0 : t.id, w, m, t]);
                let v = !!(null == t ? void 0 : t.id),
                    y = g ? ? (v ? void 0 : n) ? ? c ? ? (v ? void 0 : p) ? ? h,
                    x = "workflow" === y.type ? y.workflowId : void 0,
                    b = (0, i(500786).h)(x),
                    k = (0, i(682985).K8)(() => (null == b ? void 0 : b.canEdit()) ? ? !1, [b]);
                return {
                    nextConfig: (0, i(682985).K8)(() => {
                        let e = "workflow" === y.type || "markdown-chat" === y.type,
                            t = v && u && e && void 0 !== y.model && !o({
                                config: y,
                                intl: l,
                                isAgentEnabled: d,
                                environment: s,
                                spaceId: r
                            }),
                            a = "workflow" === y.type && !0 === y.isCustomAgent && k ? { ...y,
                                useCustomAgentDraft: !0
                            } : y;
                        var n = t ? "workflow" === a.type ? { ...a,
                                model: void 0,
                                modelFromUser: !1
                            } : "markdown-chat" === a.type ? { ...a,
                                model: void 0
                            } : a : a,
                            c = s,
                            p = r;
                        if ("workflow" === n.type) {
                            let e = (0, i(922900).getWorkflowAgentConfig)({ ...n,
                                environment: c,
                                spaceId: p
                            });
                            return e.writerMode ? (0, i(922900).getWorkflowAgentConfig)({ ...n,
                                environment: c,
                                spaceId: p,
                                writerMode: !1,
                                model: void 0
                            }) : e
                        }
                        return n
                    }, [y, s, k, l, d, u, v, r], {
                        equalityFn: i(795676).k
                    }),
                    setNextConfig: m
                }
            }

            function o(e) {
                let {
                    intl: t,
                    isAgentEnabled: a,
                    environment: r,
                    spaceId: o,
                    config: n
                } = e;
                if (!n) return !1;
                if (!n.model) return !0;
                let s = (0, i(317606)._y)({
                    intl: t,
                    isAgentEnabled: a,
                    environment: r,
                    spaceId: o
                });
                return !!(s.some(e => e.isLoading) || s.flatMap(e => e.items).filter(e => e.config.type === n.type).map(e => e.askMode).includes(n.model) || i(218744).default.checkGate({
                    gateName: "agent_model_picker"
                }) && (0, i(426048).R5)(n.model))
            }
        }
    }
]);