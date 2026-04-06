"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [87137], {
        375759: (e, a, t) => {
            t.r(a), t.d(a, {
                TabSpacesPopup: () => T
            });
            var n = t(296540);
            let o = {
                selectedTabSpace: {},
                secondaryPopup: {
                    open: !1
                },
                renamePopup: void 0
            };
            t(581454);
            var i = t(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.5 4.12 17.13 15.38",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M2.375 6.25c0-1.174.951-2.125 2.125-2.125h11c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125H8.598a4.6 4.6 0 0 0-.207-1.25H15.5a.875.875 0 0 0 .875-.875v-7.5a.875.875 0 0 0-.875-.875h-11a.875.875 0 0 0-.875.875v5.165a4.6 4.6 0 0 0-1.25.28z"
                        }), (0, i.jsx)("path", {
                            d: "M4 19.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-1.969-4.094h1.375v-1.375a.625.625 0 1 1 1.25 0v1.375h1.375a.625.625 0 1 1 0 1.25H4.656v1.375a.625.625 0 1 1-1.25 0v-1.375H2.031a.625.625 0 1 1 0-1.25"
                        })]
                    })
                },
                c = (0, t(104509).wt)("rectanglePlus", r, "default"),
                s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.5 1.99 16.54 17.51",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M6.75 2.545a.55.55 0 0 1 .55-.55h5.4a.55.55 0 0 1 0 1.1H7.3a.55.55 0 0 1-.55-.55m-1.25 1.7a.55.55 0 1 0 0 1.1h9a.55.55 0 0 0 0-1.1zm-2.537 4.3c0-1.174.951-2.125 2.125-2.125h9.825c1.174 0 2.125.951 2.125 2.125v6.45a2.125 2.125 0 0 1-2.125 2.125h-6.45a4.6 4.6 0 0 0 .135-1.25h6.315a.875.875 0 0 0 .875-.875v-6.45a.875.875 0 0 0-.875-.875H5.088a.875.875 0 0 0-.875.875v2.86a4.7 4.7 0 0 0-1.25.112z"
                        }), (0, i.jsx)("path", {
                            d: "M2.963 12.656A3.502 3.502 0 0 0 4 19.5a3.5 3.5 0 1 0-1.037-6.844m-1.557 3.375c0-.345.28-.625.625-.625h1.375v-1.375a.625.625 0 0 1 1.25 0v1.375h1.375a.625.625 0 0 1 0 1.25H4.656v1.375a.625.625 0 1 1-1.25 0v-1.375H2.031a.625.625 0 0 1-.625-.625"
                        })]
                    })
                },
                l = (0, t(104509).wt)("rectangleStackBadgePlus", s, "default");

            function p({
                createPlaceholderRef: e,
                ...a
            }) {
                let {
                    tabSpaceMenuState: o,
                    saveTabSpaceMetadata: r,
                    closeRenamePopup: c
                } = a, [s, l] = (0, n.useState)(void 0), {
                    open: u,
                    action: b
                } = (0, t(682985).K8)(() => {
                    let e = t(75170).A.state.createOrUpdateMenuState;
                    return {
                        open: !!e,
                        action: null == e ? void 0 : e.action
                    }
                }, []);
                return (0, n.useEffect)(() => {
                    "create" === b ? requestAnimationFrame(() => {
                        var a;
                        l(null == (a = e.current) ? void 0 : a.getBoundingClientRect())
                    }) : "update" === b && requestAnimationFrame(() => {
                        l(o.selectedTabSpace.originRect)
                    })
                }, [e, b, u, o.selectedTabSpace.originRect]), (0, i.jsx)(t(182718).zD, {
                    popupType: t(423291).n.Popup,
                    content: () => (0, i.jsx)(t(747369).A, {
                        menuType: t(649476).gu.Popup,
                        children: (0, i.jsx)(t(519451).A, {
                            debugName: "RenameTabSpacePopup",
                            capture: !0,
                            allowMenuList: !1,
                            allowEsc: !0,
                            children: (0, i.jsx)(d, { ...a
                            })
                        })
                    }),
                    open: u,
                    originRect: s,
                    placementToOrigin: "center",
                    alignmentToOrigin: "center",
                    onDismiss: e => {
                        "Escape" === e.key ? c() : r()
                    },
                    trapFocus: !0
                })
            }
            let u = {
                wrapper: {
                    display: "flex",
                    alignItems: "center",
                    color: t(632079).Tj.text.primary,
                    fontSize: 14,
                    padding: "4px 8px",
                    width: "100%",
                    gap: 6
                },
                iconButton: {
                    width: 28,
                    height: 28,
                    flexShrink: 0,
                    flexGrow: 0,
                    boxShadow: `inset 0 0 0 1px ${t(632079).Tj.border.primaryTranslucent}`
                },
                input: {
                    display: "block",
                    flexGrow: 1,
                    fontSize: 14,
                    lineHeight: "20px",
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingInlineStart: 10,
                    paddingInlineEnd: 10,
                    width: "100%",
                    borderRadius: 4,
                    boxShadow: `${t(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                    background: t(632079).Tj.background.secondaryTranslucent,
                    cursor: "text",
                    position: "relative"
                }
            };

            function d({
                initialFocus: e,
                tabSpaceMenuState: a,
                setMetadataFormState: o,
                saveTabSpaceMetadata: r,
                closeRenamePopup: c
            }) {
                var s, l;
                let p = null == (s = a.renamePopup) ? void 0 : s.metadataFormState,
                    [b, m] = (0, n.useState)(e),
                    g = (0, t(682985).K8)(() => t(75170).A.state.createOrUpdateMenuState, []),
                    S = (0, n.useCallback)(() => {
                        m(void 0), c(), t(874443).I()
                    }, [c]);
                (0, n.useEffect)(() => {
                    var e;
                    null != (e = a.renamePopup) && e.initialFocus && m(a.renamePopup.initialFocus)
                }, [null == (l = a.renamePopup) ? void 0 : l.initialFocus]), (0, n.useEffect)(() => {
                    if ((null == g ? void 0 : g.action) === "update") {
                        let {
                            tabSpaceId: e
                        } = g, {
                            tabSpacesState: a
                        } = t(75170).A.state, n = a.tabSpaces[e];
                        if (!n) return void S();
                        o({
                            icon: n.icon,
                            title: n.title
                        })
                    }
                }, [g, S, o]), (0, n.useEffect)(() => {
                    g || S()
                }, [g, S]), (0, n.useEffect)(() => () => {
                    S()
                }, [S]);
                let h = (0, n.useCallback)(e => {
                        o({ ...p,
                            icon: e
                        }), m("title")
                    }, [p, o, m]),
                    x = (0, n.useCallback)(e => {
                        o({ ...p,
                            title: e.target.value
                        })
                    }, [p, o]),
                    f = (0, n.useMemo)(() => {
                        if ((null == p ? void 0 : p.icon) !== void 0) return {
                            icon: p.icon,
                            pointer: {
                                table: "block",
                                id: (0, t(4962).Ay)()
                            }
                        }
                    }, [null == p ? void 0 : p.icon]);
                return (0, i.jsxs)("div", {
                    style: u.wrapper,
                    children: [(0, i.jsx)(t(569553).B6, {
                        disabled: !1,
                        bucket: "public",
                        icon: f,
                        defaultIcon: (0, i.jsx)(t(16275).I, {
                            icon: t(61913).G,
                            colorVariant: "primary"
                        }),
                        isEmptyPage: !1,
                        size: 18,
                        onChange: h,
                        style: u.iconButton,
                        mediaPickerTabs: ["emoji"],
                        hideCustomEmoji: !0,
                        openMenuOnMount: "icon" === b,
                        openMenuOnMountCallback: () => {
                            m(void 0)
                        }
                    }), (0, i.jsx)(t(36481).p, {
                        value: null == p ? void 0 : p.title,
                        onChange: x,
                        onKeyDown: e => {
                            "Enter" === e.key && (e.preventDefault(), r())
                        },
                        focus: "title" === b,
                        maxlength: 40,
                        style: u.input
                    })]
                })
            }
            let b = (0, t(109939).YK)({
                    more: {
                        id: "tabSpacesMenuItem.more",
                        defaultMessage: "More"
                    }
                }),
                m = { ...{
                        button: {
                            width: "100%",
                            borderRadius: 6
                        },
                        tabSpaceButton: {
                            display: "flex",
                            fontSize: 14,
                            height: 28,
                            paddingInlineStart: 10,
                            paddingInlineEnd: 10,
                            color: t(632079).Tj.text.primary,
                            alignItems: "center",
                            justifyContent: "space-between",
                            maxWidth: 250,
                            width: "100%"
                        },
                        tabSpaceLabelWrapper: {
                            display: "flex",
                            alignItems: "center",
                            flex: 1,
                            minWidth: 0,
                            gap: 8,
                            height: "100%"
                        },
                        tabSpaceTitleText: {
                            display: "flex",
                            alignItems: "center",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            lineHeight: 0,
                            height: "100%"
                        },
                        currentSelectedTabSpace: {
                            background: t(632079).Tj.sidebarItemSelectedBackground,
                            color: t(632079).Tj.text.primary,
                            borderRadius: 6
                        },
                        tabSpaceIcon: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            width: 22,
                            height: 18
                        },
                        rightIconWrapper: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 4,
                            marginInlineStart: 6
                        }
                    },
                    ellipsisButton: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        borderRadius: 4,
                        marginInlineStart: 4
                    }
                };

            function g({
                label: e,
                icon: a,
                rightOnClick: o,
                ...r
            }) {
                let {
                    isChecked: c,
                    ...s
                } = r, l = (0, t(109939).tz)(), p = (0, n.useRef)(null), [u, d] = (0, n.useState)(!1), S = (0, n.useCallback)(e => {
                    e.preventDefault(), e.stopPropagation(), o && p.current && o(p.current.getBoundingClientRect())
                }, [o]);
                return (0, i.jsx)(t(95582).A, { ...s,
                    ref: p,
                    onContextMenu: S,
                    style: { ...c ? m.currentSelectedTabSpace : {}
                    },
                    onMouseEnter: () => d(!0),
                    onMouseLeave: () => d(!1),
                    title: e,
                    icon: a || (0, i.jsx)(t(16275).I, {
                        icon: t(61913).G,
                        colorVariant: "primary"
                    }),
                    right: o ? (0, i.jsx)("div", {
                        style: { ...m.tabSpaceIcon,
                            width: 22 * !!u,
                            overflow: "hidden"
                        },
                        children: (0, i.jsx)(t(374533).A, {
                            icon: t(361226).ellipsisSmallIcon,
                            ariaLabel: l.formatMessage(b.more),
                            style: { ...m.ellipsisButton,
                                opacity: +!!u,
                                visibility: u ? "visible" : "hidden"
                            },
                            onClick: S
                        })
                    }) : void 0,
                    ignoreLocalHoverState: !1
                })
            }
            let S = (0, t(109939).YK)({
                    newGroupFromTabs: {
                        id: "tabSpacesMenu.newGroupFromTabs",
                        defaultMessage: "New group from {count} {count, plural, one {tab} other {tabs}}"
                    },
                    newEmptyGroup: {
                        id: "tabSpacesMenu.newEmptyGroup",
                        defaultMessage: "New empty group"
                    },
                    createNewTabGroup: {
                        id: "tabSpacesMenu.createNewTabGroup",
                        defaultMessage: "Create new tab group"
                    },
                    thisWindow: {
                        id: "tabSpacesMenu.thisWindow",
                        defaultMessage: "This window"
                    },
                    ungroupedTabs: {
                        id: "tabSpacesMenu.ungroupedTabs",
                        defaultMessage: "{count} ungrouped {count, plural, one {tab} other {tabs}}"
                    },
                    tabGroups: {
                        id: "tabSpacesMenu.tabGroups",
                        defaultMessage: "Tab groups"
                    }
                }),
                h = (0, t(109939).YK)({
                    tabSpaceActionChangeIcon: {
                        id: "tabSpacesMenu.changeIcon",
                        defaultMessage: "Change icon"
                    },
                    tabSpaceActionRename: {
                        id: "tabSpacesMenu.tabSpaceActionRename",
                        defaultMessage: "Rename tab group"
                    },
                    tabSpaceActionDelete: {
                        id: "tabSpacesMenu.tabSpaceActionDelete",
                        defaultMessage: "Delete tab group"
                    }
                }),
                x = {
                    width: 200
                };

            function f({
                tabSpaceId: e,
                onRename: a,
                onClose: o,
                onCloseMainMenu: r
            }) {
                let c = (0, t(109939).tz)(),
                    s = (0, n.useCallback)(t => {
                        a(e, t), o()
                    }, [o, a, e]),
                    l = (0, n.useCallback)(() => {
                        t(884972).uS.deleteTabSpace(e), o(), r()
                    }, [e, o, r]),
                    p = (0, n.useMemo)(() => [{
                        key: "tab-space-actions",
                        items: [{
                            key: "tab-space-action-change-icon",
                            action: () => s("icon"),
                            render: e => (0, i.jsx)(g, { ...e,
                                label: c.formatMessage(h.tabSpaceActionChangeIcon),
                                icon: (0, i.jsx)(t(16275).I, {
                                    icon: t(976898).emojiFaceIcon,
                                    colorVariant: "primary"
                                })
                            })
                        }, {
                            key: "tab-space-action-rename",
                            action: () => s("title"),
                            render: e => (0, i.jsx)(g, { ...e,
                                label: c.formatMessage(h.tabSpaceActionRename),
                                icon: (0, i.jsx)(t(16275).I, {
                                    icon: t(111481).M,
                                    colorVariant: "primary"
                                })
                            })
                        }],
                        render: e => (0, i.jsx)(t(844565).A, { ...e
                        })
                    }, {
                        key: "tab-space-delete",
                        items: [{
                            key: "tab-space-action-delete",
                            action: l,
                            render: e => (0, i.jsx)(g, { ...e,
                                label: c.formatMessage(h.tabSpaceActionDelete),
                                icon: (0, i.jsx)(t(16275).I, {
                                    icon: t(968411).trashIcon,
                                    colorVariant: "primary"
                                })
                            })
                        }],
                        render: e => (0, i.jsx)(t(844565).A, {
                            topBorder: !0,
                            ...e
                        })
                    }], [c, s, l]);
                return (0, i.jsx)("div", {
                    style: x,
                    children: (0, i.jsx)(t(519451).A, {
                        debugName: "TabSpacesSecondaryMenu",
                        capture: !0,
                        allowEsc: !0,
                        children: (0, i.jsx)(t(747369).A, {
                            menuType: t(649476).gu.Popup,
                            children: (0, i.jsx)(t(558045).A, {
                                type: t(558045).O.Vertical,
                                initialFocus: void 0,
                                sections: p
                            })
                        })
                    })
                })
            }

            function y({
                open: e,
                originRect: a,
                tabSpaceId: n,
                onRename: o,
                onClose: r,
                onCloseMainMenu: c
            }) {
                return n ? (0, i.jsx)(t(182718).zD, {
                    popupType: t(423291).n.Popup,
                    content: () => (0, i.jsx)(f, {
                        tabSpaceId: n,
                        onRename: o,
                        onClose: r,
                        onCloseMainMenu: c
                    }),
                    open: e,
                    originRect: a,
                    placementToOrigin: "right",
                    alignmentToOrigin: "start",
                    originGap: 8,
                    onDismiss: r,
                    trapFocus: !0
                }) : null
            }
            let M = {
                width: 250,
                maxHeight: "70vh"
            };

            function v({
                tabSpacesState: e,
                menuState: a,
                menuActions: o
            }) {
                let r = (0, n.useRef)(null),
                    s = (0, n.useCallback)(() => {
                        t(75170).A.update(e => ({ ...e,
                            open: !1
                        }))
                    }, []),
                    u = (0, n.useCallback)(e => {
                        t(884972).uS.setActiveTabSection(e), s()
                    }, [s]),
                    b = (0, n.useCallback)((e, a) => {
                        o.selectTabSpace(e, a)
                    }, [o]),
                    m = (0, n.useCallback)(e => {
                        o.openSecondaryPopup(e)
                    }, [o]),
                    h = (0, n.useCallback)(e => {
                        o.openCreatePopup(e)
                    }, [o]),
                    x = (0, n.useCallback)(e => {
                        t(884972).uS.reorderTabSpaces(e)
                    }, []),
                    f = (0, n.useCallback)((e, a) => {
                        o.openRenamePopup(e, a)
                    }, [o]),
                    T = function({
                        tabSpacesState: e,
                        tabSpacesLocalMenuState: a,
                        onActivateTabSection: o,
                        onSelectTabSpace: r,
                        onOpenSecondaryPopup: s,
                        onOpenNewTabSpacePopup: u,
                        onReorderTabSpaces: b,
                        newTabSpacePopupAnchorRef: m,
                        setMetadataFormState: h,
                        saveTabSpaceMetadata: x,
                        closeRenamePopup: f
                    }) {
                        let y = (0, t(109939).tz)(),
                            M = (0, t(75272).I)(),
                            {
                                tabSpaces: v,
                                orderedTabSpaceIds: T,
                                activeTabSectionId: j,
                                ungroupedTabCount: k
                            } = e,
                            w = (0, t(682985).K8)(() => {
                                var e;
                                return null == (e = t(75170).A.state.createOrUpdateMenuState) ? void 0 : e.action
                            }, []),
                            C = T.length > 0,
                            A = k > 0,
                            P = !C,
                            I = (0, n.useMemo)(() => ({
                                key: "ungrouped-section",
                                items: [{
                                    key: "ungrouped-section-item",
                                    action: () => o("ungrouped"),
                                    render: e => (0, i.jsx)(g, { ...e,
                                        label: y.formatMessage(S.ungroupedTabs, {
                                            count: k
                                        }),
                                        icon: (0, i.jsx)(t(16275).I, {
                                            icon: t(7776).squareGrid2X2Icon,
                                            colorVariant: "primary"
                                        }),
                                        isChecked: "ungrouped" === j
                                    })
                                }],
                                render: e => (0, i.jsx)(t(844565).A, { ...e,
                                    title: y.formatMessage(S.thisWindow)
                                })
                            }), [k, j, y, o]),
                            R = (0, n.useMemo)(() => ({
                                key: "tab-spaces-section",
                                items: T.map(e => ({
                                    key: e,
                                    action: () => o(e),
                                    render: a => {
                                        let t = v[e];
                                        return t ? (0, i.jsx)(g, { ...a,
                                            label: t.title,
                                            icon: t.icon,
                                            isChecked: j === e,
                                            rightOnClick: a => {
                                                s(a), r(e, a)
                                            }
                                        }) : null
                                    }
                                })),
                                render: e => {
                                    let {
                                        children: n,
                                        ...o
                                    } = e;
                                    return (0, i.jsxs)(t(844565).A, { ...o,
                                        title: y.formatMessage(S.tabGroups),
                                        hideTitle: P,
                                        topBorder: C,
                                        children: [C ? (0, i.jsx)(t(66467).Ay, {
                                            gap: 2,
                                            shouldAnimateDrop: !0,
                                            direction: "vertical",
                                            keys: T,
                                            renderKey: e => n[T.indexOf(e)],
                                            onDrop: b,
                                            onDragEnd: () => M("TabSpacesMenu", "TabSpacesMenu/onDragEnd")
                                        }) : void 0, (0, i.jsx)("div", {
                                            ref: m,
                                            style: {
                                                height: 36 * ("create" === w)
                                            }
                                        }), (0, i.jsx)(p, {
                                            createPlaceholderRef: m,
                                            tabSpaceMenuState: a,
                                            setMetadataFormState: h,
                                            saveTabSpaceMetadata: x,
                                            closeRenamePopup: f
                                        })]
                                    })
                                }
                            }), [T, v, j, y, P, C, m, w, o, r, s, b, M, a, f, x, h]),
                            F = (0, n.useMemo)(() => ({
                                key: "tab-spaces-create-section",
                                items: [...A ? [{
                                    key: "new-tab-space-from-ungrouped",
                                    action: () => {
                                        u({
                                            source: "ungroupedTabs"
                                        })
                                    },
                                    render: e => (0, i.jsx)(g, { ...e,
                                        icon: (0, i.jsx)(t(16275).I, {
                                            icon: l,
                                            colorVariant: "primary"
                                        }),
                                        label: y.formatMessage(S.newGroupFromTabs, {
                                            count: k
                                        })
                                    })
                                }] : [], {
                                    key: "new-empty-tab-space",
                                    action: () => {
                                        u({
                                            source: "empty"
                                        })
                                    },
                                    render: e => (0, i.jsx)(g, { ...e,
                                        label: y.formatMessage(S.newEmptyGroup),
                                        icon: (0, i.jsx)(t(16275).I, {
                                            icon: c,
                                            colorVariant: "primary"
                                        })
                                    })
                                }],
                                render: e => (0, i.jsx)(t(844565).A, {
                                    topBorder: !P,
                                    ...e
                                })
                            }), [A, k, y, P, u]),
                            O = (0, n.useMemo)(() => ({
                                key: "first-tab-space-section",
                                items: [{
                                    key: "first-tab-space-section-item",
                                    action: () => {},
                                    render: () => (0, i.jsx)(d, {
                                        tabSpaceMenuState: a,
                                        setMetadataFormState: h,
                                        saveTabSpaceMetadata: x,
                                        closeRenamePopup: f,
                                        initialFocus: "title"
                                    })
                                }],
                                render: e => (0, i.jsx)(t(844565).A, { ...e,
                                    topBorder: !0,
                                    title: y.formatMessage(S.createNewTabGroup)
                                })
                            }), [a, h, x, f, y]);
                        return (0, n.useMemo)(() => C ? [I, R, F] : [I, O], [C, I, R, F, O])
                    }({
                        tabSpacesState: e,
                        onActivateTabSection: u,
                        onSelectTabSpace: b,
                        onOpenSecondaryPopup: m,
                        onOpenNewTabSpacePopup: h,
                        onReorderTabSpaces: x,
                        newTabSpacePopupAnchorRef: r,
                        tabSpacesLocalMenuState: a,
                        setMetadataFormState: o.setMetadataFormState,
                        saveTabSpaceMetadata: o.saveTabSpaceMetadata,
                        closeRenamePopup: o.closeRenamePopup
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        style: M,
                        children: (0, i.jsx)(t(519451).A, {
                            debugName: "TabSpacesMenu",
                            capture: !0,
                            allowEsc: !0,
                            children: (0, i.jsx)(t(747369).A, {
                                menuType: t(649476).gu.Popup,
                                children: (0, i.jsx)(t(558045).A, {
                                    type: t(558045).O.Vertical,
                                    initialFocus: void 0,
                                    sections: T
                                })
                            })
                        })
                    }), (0, i.jsx)(y, {
                        open: a.secondaryPopup.open,
                        originRect: a.secondaryPopup.originRect,
                        tabSpaceId: a.selectedTabSpace.tabSpaceId,
                        onRename: f,
                        onClose: o.closeSecondaryPopup,
                        onCloseMainMenu: s
                    })]
                })
            }

            function T() {
                let e = (0, t(533992).v3)(),
                    [a, r] = (0, n.useState)(),
                    [c, s] = (0, n.useState)("right"),
                    [l, p] = (0, n.useState)("start"),
                    [u, d] = (0, n.useState)(0),
                    [b, m] = function() {
                        var e;
                        let [a, i] = (0, n.useState)(o), {
                            createOrUpdateTabSpace: r
                        } = {
                            createOrUpdateTabSpace: (0, n.useCallback)(e => {
                                let {
                                    createOrUpdateMenuState: a
                                } = t(75170).A.state;
                                if (!a) return void t(884972).uS.createTabSpace({ ...e,
                                    source: "empty"
                                });
                                let {
                                    action: n
                                } = a;
                                switch (n) {
                                    case "create":
                                        ! function(e, a) {
                                            let {
                                                source: n
                                            } = a;
                                            switch (n) {
                                                case "empty":
                                                case "ungroupedTabs":
                                                    t(884972).uS.createTabSpace({ ...e,
                                                        source: n
                                                    });
                                                    break;
                                                case "existingTabs":
                                                    let {
                                                        tabIds: o,
                                                        tabSectionId: i
                                                    } = a;
                                                    t(884972).uS.createTabSpace({ ...e,
                                                        source: n,
                                                        tabIds: o,
                                                        tabSectionId: i
                                                    })
                                            }
                                        }(e, a);
                                        break;
                                    case "update":
                                        ! function(e, a) {
                                            let {
                                                tabSpaceId: n
                                            } = a;
                                            t(884972).uS.updateTabSpaceMetadata(n, e)
                                        }(e, a)
                                }
                            }, [])
                        }, c = (0, n.useCallback)((e, a) => {
                            i(t => ({ ...t,
                                selectedTabSpace: {
                                    tabSpaceId: e,
                                    originRect: a
                                }
                            }))
                        }, []), s = (0, n.useCallback)(() => {
                            i(e => ({ ...e,
                                selectedTabSpace: {}
                            }))
                        }, []), l = (0, n.useCallback)(e => {
                            i(a => ({ ...a,
                                secondaryPopup: {
                                    open: !0,
                                    originRect: e
                                }
                            }))
                        }, []), p = (0, n.useCallback)(() => {
                            i(e => ({ ...e,
                                secondaryPopup: {
                                    open: !1,
                                    originRect: void 0
                                }
                            }))
                        }, []), u = (0, n.useCallback)((e, a) => {
                            i(e => ({ ...e,
                                renamePopup: {
                                    initialFocus: a
                                }
                            })), t(75170).A.update(a => ({ ...a,
                                createOrUpdateMenuState: {
                                    action: "update",
                                    tabSpaceId: e
                                }
                            }))
                        }, []), d = (0, n.useCallback)(e => {
                            i(e => ({ ...e,
                                renamePopup: {
                                    initialFocus: "title"
                                }
                            })), t(75170).A.update(a => ({ ...a,
                                createOrUpdateMenuState: {
                                    action: "create",
                                    ...e
                                }
                            }))
                        }, []), b = (0, n.useCallback)(() => {
                            t(75170).A.update(e => ({ ...e,
                                createOrUpdateMenuState: void 0
                            })), i(e => ({ ...e,
                                renamePopup: void 0
                            }))
                        }, []), m = (0, n.useCallback)(() => {
                            i(o)
                        }, []), g = (0, n.useCallback)(() => {
                            t(75170).A.update(e => ({ ...e,
                                open: !1,
                                createOrUpdateMenuState: void 0,
                                buttonBounds: void 0
                            })), m()
                        }, [m]), S = (0, n.useCallback)(e => {
                            i(a => ({ ...a,
                                renamePopup: { ...a.renamePopup,
                                    metadataFormState: e
                                }
                            }))
                        }, []), h = (0, n.useCallback)(() => {
                            var e;
                            let t = null == (e = a.renamePopup) ? void 0 : e.metadataFormState;
                            null != t && t.title && r({
                                title: t.title,
                                icon: t.icon
                            }), b()
                        }, [b, r, null == (e = a.renamePopup) ? void 0 : e.metadataFormState]), x = (0, n.useMemo)(() => ({
                            selectTabSpace: c,
                            clearSelection: s,
                            openSecondaryPopup: l,
                            closeSecondaryPopup: p,
                            openRenamePopup: u,
                            openCreatePopup: d,
                            closeRenamePopup: b,
                            setMetadataFormState: S,
                            saveTabSpaceMetadata: h,
                            closeTabSpacesMenu: g,
                            reset: m
                        }), [c, s, l, p, u, d, b, S, h, g, m]);
                        return [a, x]
                    }(),
                    {
                        open: g,
                        tabSpacesState: S
                    } = (0, t(682985).O$)(t(75170).A),
                    h = (null == S ? void 0 : S.orderedTabSpaceIds.length) > 0;
                return ((0, n.useEffect)(() => {
                    if (g) {
                        let a = t(75170).A.state.buttonBounds,
                            n = a ? "bottom" : "right",
                            o = a ? "center" : "start",
                            i = a ? -24 : 6,
                            c = a ? new DOMRect(Math.max(a.x, 6), Math.max(a.y, 6), a.width, a.height) : new DOMRect(Math.max((0, t(715094).k)(e), 6), 6, 0, 0);
                        requestAnimationFrame(() => {
                            s(n), p(o), r(c), d(i)
                        })
                    }
                }, [g, e]), S) ? (0, i.jsx)(t(182718).zD, {
                    popupType: t(423291).n.Popup,
                    content: () => (0, i.jsx)(v, {
                        tabSpacesState: S,
                        menuState: b,
                        menuActions: m
                    }),
                    open: g,
                    originRect: a,
                    placementToOrigin: c,
                    alignmentToOrigin: l,
                    originGap: u,
                    onDismiss: e => {
                        h || ("Escape" === e.key ? m.closeRenamePopup() : m.saveTabSpaceMetadata()), m.closeTabSpacesMenu()
                    },
                    trapFocus: !0,
                    disableFlippingPlacement: !0,
                    preventScaleTransition: !0,
                    viewportPadding: 6
                }) : null
            }
        },
        715094: (e, a, t) => {
            t.d(a, {
                k: () => n
            });

            function n(e) {
                let {
                    shouldShowSidebar: a
                } = (0, t(846044).X)(e), n = (0, t(712358).K)(e);
                return a && n && (0, t(845181).t)(e) ? (0, t(623179).r)(e) : 0
            }
        }
    }
]);