"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [33047, 89076], {
        36772: (e, t, i) => {
            i.d(t, {
                A: () => n
            }), i(296540);
            var o = i(474848);
            let r = {
                    lineHeight: 1.4
                },
                n = function(e) {
                    if (i(986939).A.isMobile)
                        if (e.propertySchema) return (0, o.jsx)(i(34824).G, {
                            propertySchema: e.propertySchema,
                            onClick: e.onClick,
                            focused: !1,
                            format: i(34824).e.Name,
                            showExtensionArrow: !e.disabled
                        });
                        else return (0, o.jsx)(i(95582).A, {
                            focused: !1,
                            title: (0, o.jsx)(i(109939).sA, {
                                defaultMessage: "Property",
                                id: "database.mobileFilterAndSortMenu.property.buttonMenuItem.label"
                            })
                        }); {
                        let t = e.propertySchema && (0, o.jsx)(i(151710).mA, {
                                propertySchema: e.propertySchema,
                                showIcon: !0,
                                style: r
                            }),
                            n = (0, o.jsx)(i(109939).sA, {
                                defaultMessage: "Property",
                                id: "database.filterAndSortMenu.propertyButton.label"
                            });
                        return (0, o.jsx)(i(332082).A, {
                            title: t,
                            placeholder: n,
                            onClick: e.onClick,
                            disabled: e.disabled,
                            disableMargins: e.disableMargins,
                            desktopStyle: e.textWrapperStyle
                        })
                    }
                }
        },
        76761: (e, t, i) => {
            i.d(t, {
                A: () => r
            }), i(296540);
            var o = i(474848);
            let r = function({
                switcherProps: e,
                ...t
            }) {
                return (0, o.jsx)(i(209572).A, {
                    right: (0, o.jsx)(i(354491).d, {
                        onClick: t.onClick,
                        disabled: t.disabled,
                        ...e
                    }),
                    ...t
                })
            }
        },
        128743: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightLeftIcon: () => r,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.97 15.26 12.06",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M2.411 9.79a.6.6 0 0 1 .147-.232l5.4-5.4a.625.625 0 1 1 .884.884L4.509 9.375H17a.625.625 0 1 1 0 1.25H4.509l4.333 4.333a.625.625 0 1 1-.884.884l-5.4-5.4a.62.62 0 0 1-.147-.651"
                    })
                },
                r = (0, i(104509).wt)("arrowStraightLeft", o, "default")
        },
        151483: (e, t, i) => {
            i.d(t, {
                C: () => n
            }), i(296540);
            var o = i(474848);
            let r = {
                position: "relative"
            };

            function n({
                icon: e
            }) {
                return (0, o.jsxs)("div", {
                    style: r,
                    children: [e, (0, o.jsx)(i(321825).H, {
                        size: "xs"
                    })]
                })
            }
        },
        209572: (e, t, i) => {
            i.d(t, {
                A: () => n
            }), i(296540);
            var o = i(474848);
            let r = {
                style0: { ...i(699422).RC,
                    display: "flex"
                },
                style1: {
                    flexGrow: 1,
                    flexShrink: 1
                }
            };

            function n(e) {
                let {
                    icon: t,
                    iconStyle: n,
                    title: l,
                    caption: a,
                    right: s,
                    rightStyle: d,
                    isRedOnHover: c,
                    isGray: u,
                    isOrange: p,
                    onClick: g,
                    onMouseDown: y,
                    onMouseEnter: m,
                    onMouseLeave: S,
                    disabled: f,
                    showChevron: h,
                    chevronStyle: v,
                    rotateChevron: b,
                    showDragHandle: w,
                    focused: x,
                    textWrapperStyle: _,
                    shouldWrapCaption: j,
                    desktopIconStyle: T,
                    buttonStyle: A,
                    desktopTitleStyle: C,
                    source: M,
                    menuListItemProps: k,
                    isPulsing: I,
                    shouldShowMobileBackground: P
                } = e, V = (0, i(564725).y$)(), B = (0, i(960253).I)(() => ({
                    style: { ...u ? {
                            color: i(632079).Tj.text.secondary,
                            fill: i(632079).Tj.icon.secondary
                        } : p ? {
                            color: i(632079).Tj.orange.icon.accentPrimary,
                            fill: i(632079).Tj.orange.icon.accentPrimary
                        } : {
                            color: i(632079).Tj.text.primary,
                            fill: i(632079).Tj.icon.primary
                        },
                        opacity: f ? .4 : void 0,
                        ...A
                    },
                    leftIconStyle: {
                        width: V,
                        height: V,
                        ...n
                    },
                    rightStyle: {
                        display: "flex",
                        alignItems: "center",
                        color: f ? i(632079).Tj.text.primary : i(632079).Tj.text.tertiary,
                        fill: f ? i(632079).Tj.icon.primary : i(632079).Tj.icon.tertiary,
                        flexShrink: 0,
                        marginInlineStart: i(986939).A.isMobile ? 8 : void 0,
                        ...d
                    },
                    rightChevronStyle: {
                        marginInlineStart: 6 * ("tableHeaderMenu" !== M),
                        transition: "transform 200ms ease-in-out",
                        ...b && {
                            transform: "rotate(90deg)"
                        },
                        ...v
                    }
                }), [u, p, f, n, v, d, A, V, b, M]), {
                    itemRef: F,
                    onKeyDown: O,
                    onFocus: K
                } = (0, i(943019).e)(), z = (0, o.jsx)(i(95582).A, {
                    ref: F,
                    role: "menuitem",
                    icon: null == t ? void 0 : t(B.leftIconStyle),
                    focused: x || !1,
                    disabled: f,
                    title: l,
                    caption: a,
                    shouldWrapTitle: !0,
                    shouldWrapCaption: j,
                    desktopTitleStyle: { ...r.style1,
                        ...C
                    },
                    onKeyDown: O,
                    onFocus: K,
                    disallowTabbing: !1,
                    showDragHandle: w,
                    buttonStyle: B.style,
                    rightStyle: B.rightStyle,
                    isRedOnHover: c,
                    ignoreLocalHoverState: !!f || void 0,
                    right: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            style: r.style0,
                            children: s
                        }), !f && h ? (0, o.jsx)(i(16275).I, {
                            icon: i(491469).arrowChevronSingleRightSmallIcon,
                            size: "sm",
                            colorVariant: "tableHeaderMenu" === M ? "secondary" : "tertiary",
                            style: B.rightChevronStyle
                        }) : null]
                    }),
                    onClick: g,
                    onMouseDown: y,
                    onMouseEnter: m,
                    onMouseLeave: S,
                    textWrapperStyle: _,
                    desktopIconStyle: T,
                    reducedPadding: e.reducedPadding,
                    shouldShowMobileBackground: P,
                    ...k
                });
                return I ? (0, o.jsx)(i(315384).u, {
                    borderRadius: 6,
                    shape: "square",
                    children: z
                }) : z
            }
        },
        240979: (e, t, i) => {
            i.d(t, {
                Q: () => r
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.52 2.4 12.95 15.2",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M15.85 3.65a.625.625 0 1 0 0-1.25H4.15a.625.625 0 1 0 0 1.25zm-1.008 6.692a.625.625 0 0 1-.884 0l-3.333-3.333v9.966a.625.625 0 1 1-1.25 0V7.009l-3.333 3.333a.625.625 0 1 1-.884-.884l4.4-4.4a.625.625 0 0 1 .884 0l4.4 4.4a.625.625 0 0 1 0 .884"
                    })
                },
                r = (0, i(104509).wt)("arrowLineUp", o, "default")
        },
        258442: (e, t, i) => {
            i.d(t, {
                t: () => n
            });
            var o = i(296540),
                r = i(474848);
            let n = o.memo(function(e) {
                let {
                    coverHeight: t,
                    coverSizeFormat: o,
                    emptyGalleryCoverStyle: n
                } = e, l = (0, i(960253).I)(() => ({
                    container: {
                        height: (0, i(623549).F)(t, o),
                        ...n
                    }
                }), [t, o, n]);
                return (0, r.jsx)("div", {
                    style: l.container
                })
            })
        },
        264388: (e, t, i) => {
            i.d(t, {
                q: () => l
            });
            var o = i(296540),
                r = i(474848);
            let n = {
                opacity: 1
            };

            function l({
                collectionContextStore: e,
                includeIcon: t
            }) {
                let a = (0, i(533992).v3)(),
                    s = (0, i(682985).K8)(() => {
                        var t;
                        return (null == (t = e.collectionViewBlockStore()) || null == (t = t.getCollectionViewIds()) ? void 0 : t.length) ? ? 0
                    }, [e]),
                    d = (0, i(682985).O$)(e.shouldShowSourceStore),
                    c = (0, i(682985).O$)(e.canConfigureBlockStore),
                    u = (0, o.useCallback)(() => {
                        var t;
                        if (!e.collectionViewStore()) return;
                        let o = !e.shouldShowSourceStore.state,
                            r = null == (t = e.collectionViewBlockStore()) ? void 0 : t.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewLayoutMenu.handleShowCollectionTitleClick",
                            environment: a,
                            cellTarget: r ? {
                                spaceWithId: r
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                let r = e.collectionViewBlockStore();
                                r && (0, i(715144).z)({
                                    stores: [r],
                                    update: {
                                        hide_inline_collection_name: !o
                                    },
                                    transaction: t
                                })
                            }
                        }), (0, i(893783).X)({
                            environment: a,
                            collectionContextStore: e,
                            action: "toggle_show_collection_title"
                        })
                    }, [e, a]),
                    p = (0, o.useMemo)(() => s > 1 ? (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Show data source titles",
                        id: "database.viewSettings.layoutTab.showDataSourceTitles.title"
                    }) : (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Show data source title",
                        id: "database.viewSettings.layoutTab.showDataSourceTitle.title"
                    }), [s]);
                return (0, r.jsx)(i(296060).A, {
                    title: p,
                    focused: !1,
                    on: d,
                    onClick: u,
                    disabled: !c,
                    textWrapperStyle: n,
                    icon: t ? (0, r.jsx)(i(16275).I, {
                        icon: i(550602).h
                    }) : void 0
                })
            }
        },
        325336: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowUTurnUpLeftIcon: () => r,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.72 15.76 12.16",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M7.592 4.792a.625.625 0 1 0-.884-.884l-4.4 4.4a.625.625 0 0 0 0 .884l4.4 4.4a.625.625 0 1 0 .884-.884L4.259 9.375H14a2.625 2.625 0 0 1 0 5.25h-1.42a.625.625 0 1 0 0 1.25H14a3.875 3.875 0 0 0 0-7.75H4.259z"
                    })
                },
                r = (0, i(104509).wt)("arrowUTurnUpLeft", o, "default")
        },
        350450: (e, t, i) => {
            i.d(t, {
                A: () => n
            }), i(296540);
            var o = i(474848);
            let r = {
                padding: "1px 4px",
                display: "inline-flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4
            };

            function n(e) {
                let {
                    message: t
                } = e, n = (0, i(533992).v3)(), l = (0, i(67499).S)();
                return (0, i(682985).K8)(() => {
                    let e = i(728372).AppStoreMainEditorCurrentBlockStore.state,
                        t = e && i(827482).A.getMode(n, e, e.getSpaceStore());
                    return (0, i(576348).ZE)(t, null == l ? void 0 : l.pageStore)
                }, [n, l]) ? (0, o.jsx)(i(746434).E, {
                    color: "purple",
                    style: { ...r,
                        ...e.style
                    },
                    content: t ? ? (0, o.jsx)(i(109939).sA, {
                        id: "aiBadgeComponent.label",
                        defaultMessage: "AI"
                    })
                }) : null
            }
        },
        356938: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightDownIcon: () => r,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 2.37 12.06 15.26",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.625 3a.625.625 0 1 0-1.25 0v12.491l-4.333-4.333a.625.625 0 1 0-.884.884l5.4 5.4a.62.62 0 0 0 .884 0l5.4-5.4a.625.625 0 1 0-.884-.884l-4.333 4.333z"
                    })
                },
                r = (0, i(104509).wt)("arrowStraightDown", o, "default")
        },
        358839: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightUpIcon: () => r,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 2.37 12.06 15.26",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M9.792 2.41a.6.6 0 0 0-.234.148l-5.4 5.4a.625.625 0 1 0 .884.884l4.333-4.333V17a.625.625 0 1 0 1.25 0V4.509l4.333 4.333a.625.625 0 1 0 .884-.884l-5.4-5.4a.62.62 0 0 0-.65-.147"
                    })
                },
                r = (0, i(104509).wt)("arrowStraightUp", o, "default")
        },
        362301: (e, t, i) => {
            i.d(t, {
                B: () => r
            }), i(296540);
            var o = i(474848);

            function r(e) {
                var t, r, n;
                let {
                    type: l,
                    icon: a,
                    size: s,
                    propertyId: d,
                    style: c,
                    theme: u,
                    themeMode: p
                } = e, g = (0, i(887779).Q)(d), y = {
                    bottom: (null == c || null == (t = c.overlay) ? void 0 : t.bottom) ? ? -2,
                    insetInlineStart: (null == c || null == (r = c.overlay) ? void 0 : r.insetInlineStart) ? ? 10
                }, m = (null == c || null == (n = c.overlay) ? void 0 : n.iconSize) ? ? 12, S = (0, i(960253).I)(() => {
                    var e, t, i;
                    return {
                        container: {
                            position: "relative",
                            display: "grid",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInlineStart: null == c || null == (e = c.container) ? void 0 : e.marginInlineStart,
                            flexShrink: null == c || null == (t = c.container) ? void 0 : t.flexShrink
                        },
                        icon: null != c && null != (i = c.icon) && i.fill ? {
                            fill: c.icon.fill
                        } : {},
                        overlayWrapper: {
                            position: "absolute",
                            bottom: y.bottom,
                            insetInlineStart: y.insetInlineStart,
                            width: m + 2,
                            height: m + 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: "none",
                            zIndex: 1
                        }
                    }
                }, [c, m, y.bottom, y.insetInlineStart]);
                return (0, o.jsxs)("span", {
                    style: S.container,
                    children: [(0, o.jsx)(i(221535).zB, {
                        type: l,
                        icon: a,
                        size: s,
                        theme: u,
                        themeMode: p,
                        style: S.icon
                    }), g ? (0, o.jsx)("span", {
                        style: S.overlayWrapper,
                        children: "jira" === g ? (0, i(117073).jiraIcon)({
                            width: m,
                            height: m,
                            stroke: u.background.primary,
                            strokeWidth: 1,
                            paintOrder: "stroke fill",
                            vectorEffect: "non-scaling-stroke"
                        }) : (0, i(68722).salesforceIcon)({
                            width: m,
                            height: m,
                            stroke: u.background.primary,
                            strokeWidth: 1,
                            paintOrder: "stroke fill",
                            vectorEffect: "non-scaling-stroke"
                        })
                    }) : null]
                })
            }
        },
        416733: (e, t, i) => {
            i.d(t, {
                h: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    collectionContextStore: o,
                    newViewType: r,
                    transaction: n
                } = e, l = o.collectionViewStore(), a = o.collectionViewBlockStore(), s = o.collectionStore();
                if (!l || !a || r === l.getType() || "page" === r || "form_editor" === r) return;
                "chart" === r && i(988540).Z({
                    environment: t,
                    collectionContextStore: o,
                    collectionViewId: l.id,
                    from: "collection_view_type_change"
                });
                let d = l.getType();
                (0, i(421439).y4)({
                    store: l,
                    operation: {
                        pointer: l.pointer,
                        path: l.path,
                        command: "update",
                        args: {
                            type: r
                        }
                    },
                    transaction: n
                }), "dashboard" === r && (0, i(421439).y4)({
                    store: l,
                    operation: {
                        pointer: l.pointer,
                        path: l.path,
                        command: "update",
                        args: {
                            format: { ...l.getFormat(),
                                collection_pointer: void 0
                            }
                        }
                    },
                    transaction: n
                }), (0, i(899324).W)({
                    environment: t,
                    collectionContextStore: o,
                    collectionViewStore: l,
                    collectionStore: s,
                    oldViewType: d,
                    newViewType: r,
                    transaction: n
                }), (0, i(253278).S)({
                    collectionContextStore: o
                })
            }
        },
        430682: (e, t, i) => {
            function o(e) {
                let {
                    collectionContextStore: t,
                    groupsPointer: o,
                    hasPartialResults: r
                } = e, n = t.shouldShowSpinnerStore.state, l = "load_general" === t.loadingDetailsStore.state.type && !r || "load_more_blocks" === t.loadingDetailsStore.state.type && i(381453).n4(t.loadingDetailsStore.state.group, o);
                return n && l
            }

            function r(e) {
                var t;
                let {
                    collectionContextStore: i,
                    displayState: o
                } = e, r = !!(null == (t = i.collectionStore()) || null == (t = t.getFormat()) || null == (t = t.sync_state) ? void 0 : t.syncing);
                return (i.shouldShowSpinnerStore.state || r) && 0 === o.visibleGroups.length
            }

            function n(e) {
                let {
                    collectionContextStore: t,
                    isForColumnGroups: i
                } = e;
                return t.isLoadingStore.state && t.loadingDetailsStore.state.type === (i ? "load_more_columns" : "load_more_groups")
            }

            function l(e) {
                let {
                    collectionContextStore: t,
                    groupsPointer: o
                } = e;
                return t.shouldShowSpinnerStore.state && "load_more_blocks" === t.loadingDetailsStore.state.type && i(381453).n4(t.loadingDetailsStore.state.group, o)
            }
            i.d(t, {
                Kk: () => l,
                Mw: () => n,
                c_: () => r,
                iv: () => o
            })
        },
        441971: (e, t, i) => {
            i.d(t, {
                f: () => o
            });

            function o(e) {
                return !e.isDashboardWidget() && !e.isEditableHomeCollectionStore.state
            }
        },
        448685: (e, t, i) => {
            i.d(t, {
                A: () => V,
                c: () => F
            }), i(944114), i(898992), i(354520), i(672577);
            var o = i(296540);
            i(581454);
            var r = i(474848);
            let n = {
                container: {
                    margin: i(986939).A.isMobile ? 0 : "0px 8px 8px",
                    borderRadius: i(986939).A.isMobile ? 12 : 10,
                    padding: 12,
                    background: i(632079).Tj.background.secondaryTranslucent,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden"
                },
                title: {
                    fontSize: i(986939).A.isMobile ? 14 : 12,
                    fontWeight: i(699422).Wy.medium,
                    color: i(632079).Tj.text.secondary,
                    marginBottom: 12
                },
                motionDiv: {
                    overflow: "hidden"
                },
                openAnimation: {
                    height: "auto",
                    opacity: 1
                },
                collapsedAnimation: {
                    height: 0,
                    opacity: 0
                },
                style0: {
                    width: "100%"
                },
                style1: {
                    marginTop: 8
                },
                style2: {
                    paddingInline: 8
                }
            };

            function l({
                environment: e,
                collectionContextStore: t
            }) {
                let d = (0, i(682985).K8)(() => (0, i(535144).C)(t.collectionViewStore()), [t]),
                    c = t.settingsStore,
                    u = !(0, i(682985).O$)(t.canConfigureBlockStore),
                    p = (0, o.useRef)(null),
                    g = (0, o.useRef)(!1),
                    y = [{
                        mode: "compact",
                        label: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Compact",
                            id: "database.viewSettings.layoutTab.cardLayoutModeSetting.compact"
                        })
                    }, {
                        mode: "list",
                        label: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "List",
                            id: "database.viewSettings.layoutTab.cardLayoutModeSetting.list"
                        })
                    }],
                    m = (0, o.useCallback)(() => {
                        if (g.current) {
                            var e;
                            null == (e = p.current) || e.scrollIntoView({
                                behavior: "smooth",
                                block: "end"
                            }), g.current = !1
                        }
                    }, [g]);

                function S(o) {
                    let r = t.collectionViewStore(),
                        n = null == r ? void 0 : r.getFormatStore();
                    if (!n) return;
                    let l = null == r ? void 0 : r.getSpaceId();
                    (0, i(377796).createAndCommit)({
                        userAction: "CollectionSettingsViewLayoutMenu.handleCardLayoutClick",
                        environment: e,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, i(368198).K)({
                                store: n,
                                value: { ...n.getValue(),
                                    card_layout: {
                                        mode: o
                                    }
                                },
                                transaction: e
                            })
                        }
                    }), (0, i(893783).X)({
                        environment: e,
                        collectionContextStore: t,
                        action: "toggle_card_layout_mode",
                        card_layout_mode: o
                    }), "compact" === o && (g.current = !0)
                }
                return (0, r.jsxs)("div", {
                    ref: p,
                    style: n.container,
                    children: [(0, r.jsx)("div", {
                        style: n.title,
                        children: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Card layout",
                            id: "database.viewSettings.layoutTab.cardLayoutModeSetting.title"
                        })
                    }), (0, r.jsx)(i(4458).fI, {
                        width: "100%",
                        gap: 12,
                        paddingInlineStart: 6,
                        paddingInlineEnd: 6,
                        justifyContent: "center",
                        children: y.map(e => (0, r.jsx)(s, {
                            mode: e.mode,
                            label: e.label,
                            selected: d === e.mode,
                            onClick: S,
                            disabled: u
                        }, e.mode))
                    }), (0, r.jsx)("div", {
                        style: n.style0,
                        children: (0, r.jsx)(i(203066).N, {
                            initial: !1,
                            children: "compact" === d ? (0, r.jsx)(i(153321).P.div, {
                                style: n.motionDiv,
                                initial: "collapsed",
                                animate: "open",
                                exit: "collapsed",
                                variants: {
                                    open: n.openAnimation,
                                    collapsed: n.collapsedAnimation
                                },
                                transition: {
                                    duration: .2
                                },
                                onAnimationComplete: m,
                                children: (0, r.jsxs)("div", {
                                    style: n.style1,
                                    children: [(0, r.jsx)("div", {
                                        style: n.style2,
                                        children: (0, r.jsx)(i(346268).c, {
                                            size: 16
                                        })
                                    }), (0, r.jsx)(a, {
                                        collectionContextStore: t,
                                        collectionSettingsStore: c
                                    })]
                                })
                            }, "details") : void 0
                        })
                    })]
                })
            }

            function a({
                collectionContextStore: e,
                collectionSettingsStore: t
            }) {
                let n = (0, i(533992).v3)(),
                    l = (0, o.useCallback)(() => {
                        (0, i(76790).a)({
                            collectionSettingsStore: t,
                            item: {
                                type: "compactCardSettings",
                                timelineViewTab: "table"
                            }
                        }), (0, i(893783).X)({
                            environment: n,
                            collectionContextStore: e,
                            action: "click_compact_card_settings",
                            from: "layout_menu"
                        })
                    }, [t, e, n]),
                    s = (0, i(682985).O$)(e.canConfigureBlockStore);
                return (0, r.jsx)(i(209572).A, {
                    title: (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Compact card settings",
                        id: "database.viewSettings.layoutTab.compactCardTitle"
                    }),
                    onClick: l,
                    disabled: !s,
                    showChevron: !0,
                    shouldShowMobileBackground: !1
                })
            }

            function s({
                label: e,
                mode: t,
                selected: o,
                onClick: n,
                disabled: l
            }) {
                let a = (0, i(960253).I)(() => ({
                    button: {
                        padding: 10,
                        borderRadius: i(986939).A.isMobile ? 12 : 10,
                        outline: o ? `2px solid ${i(632079).Tj.blue.border.accentPrimary}` : `1px solid ${i(632079).Tj.border.primary}`,
                        outlineOffset: o ? -2 : -1,
                        position: "relative",
                        width: "100%",
                        background: i(632079).Tj.background.elevated,
                        border: "none",
                        aspectRatio: "4 / 3"
                    },
                    title: {
                        fontSize: i(986939).A.isMobile ? 17 : 14,
                        fontWeight: i(699422).Wy.regular,
                        color: o ? i(632079).Tj.text.primary : i(632079).Tj.text.secondary
                    }
                }), [o]);
                return (0, r.jsxs)(i(4458).VP, {
                    gap: 6,
                    alignItems: "center",
                    flexBasis: 0,
                    flexGrow: 1,
                    maxWidth: 150,
                    children: [(0, r.jsx)("button", {
                        type: "button",
                        role: "radio",
                        "aria-checked": o,
                        onClick: () => {
                            l || n(t)
                        },
                        style: a.button,
                        disabled: l,
                        children: (0, r.jsx)(g, {
                            mode: t,
                            selected: o
                        })
                    }), (0, r.jsx)("div", {
                        style: a.title,
                        children: e
                    })]
                })
            }
            let d = {
                    display: "flex",
                    position: "absolute",
                    insetInlineStart: "10%",
                    gap: "20%",
                    height: "36%",
                    flexDirection: "column",
                    top: "50%",
                    width: "100%"
                },
                c = {
                    display: "flex",
                    gap: 5,
                    position: "absolute",
                    insetInlineStart: "10%",
                    height: "7%",
                    flexDirection: "row"
                },
                u = {
                    top: "50%",
                    width: "75%"
                },
                p = {
                    top: "66%",
                    width: "60%"
                };

            function g({
                mode: e,
                selected: t
            }) {
                let o = (0, i(960253).I)(() => ({
                    previewTopBar: {
                        position: "absolute",
                        insetInlineStart: 0,
                        top: 0,
                        width: "100%",
                        height: "32%",
                        background: t ? i(632079).Tj.blue.background.secondaryTranslucent : i(632079).Tj.background.secondaryTranslucent,
                        borderStartStartRadius: i(986939).A.isMobile ? 12 : 10,
                        borderStartEndRadius: i(986939).A.isMobile ? 12 : 10
                    },
                    previewLineBase: {
                        borderRadius: 90,
                        height: "100%",
                        background: t ? i(632079).Tj.blue.background.secondaryTranslucent : i(632079).Tj.gray.background.secondaryTranslucent
                    },
                    circle: {
                        position: "absolute",
                        insetInlineStart: "10%",
                        top: "calc(32% - 9%)",
                        height: "18%",
                        aspectRatio: "1 / 1",
                        borderRadius: "50%",
                        background: t ? i(632079).Tj.blue.background.tertiaryTranslucent : i(632079).Tj.gray.background.tertiaryTranslucent
                    }
                }), [t]);

                function n(e) {
                    return (0, r.jsx)("div", {
                        style: { ...o.previewLineBase,
                            width: e ? `${e}%` : "100%"
                        }
                    })
                }
                return "compact" === e ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        style: o.previewTopBar
                    }), (0, r.jsx)("div", {
                        style: o.circle
                    }), (0, r.jsxs)("div", {
                        style: { ...c,
                            ...u
                        },
                        children: [n(), n(), n()]
                    }), (0, r.jsxs)("div", {
                        style: { ...c,
                            ...p
                        },
                        children: [n(), n()]
                    })]
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        style: o.previewTopBar
                    }), (0, r.jsx)("div", {
                        style: o.circle
                    }), (0, r.jsxs)("div", {
                        style: d,
                        children: [n(55), n(25), n(40)]
                    })]
                })
            }
            let y = (0, i(109939).YK)({
                    none: {
                        defaultMessage: "None",
                        id: "database.viewPropertiesMenu.coverFormat.none"
                    },
                    page_content: {
                        defaultMessage: "Page content",
                        id: "database.viewPropertiesMenu.coverFormat.pageContent"
                    },
                    page_cover: {
                        defaultMessage: "Page cover",
                        id: "database.viewPropertiesMenu.coverFormat.pageCover"
                    }
                }),
                m = (0, i(109939).YK)({
                    small: {
                        defaultMessage: "Small",
                        id: "database.viewPropertiesMenu.coverSize.small"
                    },
                    medium: {
                        defaultMessage: "Medium",
                        id: "database.viewPropertiesMenu.coverSize.medium"
                    },
                    large: {
                        defaultMessage: "Large",
                        id: "database.viewPropertiesMenu.coverSize.large"
                    }
                });

            function S(e) {
                return e ? "page_content" === e.type || "page_content_first" === e.type ? i(962299).A.formatMessage(y.page_content) : "page_cover" === e.type ? i(962299).A.formatMessage(y.page_cover) : void 0 : i(962299).A.formatMessage(y.none)
            }
            let f = {
                    icon: {
                        fill: i(632079).Tj.icon.primary
                    }
                },
                h = {
                    paddingTop: 4,
                    paddingBottom: 4
                };

            function v({
                parentList: e,
                collectionContextStore: t,
                coverFormat: n,
                onCloseParentPopup: l,
                ...a
            }) {
                let s = (0, i(533992).v3)(),
                    d = (0, i(109939).tz)(),
                    c = (0, i(682985).O$)(t.normalizedSchemaStore),
                    [u, p] = (0, o.useState)(""),
                    [g, y] = (0, o.useState)(!1),
                    m = (0, o.useMemo)(() => i(381453).Ul(Object.keys(c), e => {
                        let t = c[e];
                        return t ? t.name : ""
                    }), [c]),
                    S = (0, o.useMemo)(() => m.filter(e => {
                        let t = c[e];
                        return (null == t ? void 0 : t.type) === "file"
                    }), [c, m]),
                    f = u.trim(),
                    h = f.length > 0,
                    x = (0, o.useCallback)(() => {
                        h && (function(e, t, o) {
                            let r = w(t),
                                n = t.collectionStore(),
                                l = t.collectionViewStore();
                            if (!r || !l || !n) return;
                            let a = l.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: "CollectionSettingsViewLayoutMenu.handleCreateFilePropertyForCardPreview",
                                environment: e,
                                cellTarget: a ? {
                                    spaceWithId: a
                                } : void 0,
                                canUndo: !0,
                                perform: t => {
                                    let a = (0, i(567879).createProperty)({
                                        environment: e,
                                        collectionStore: n,
                                        collectionViewArgs: void 0,
                                        propertyType: "file",
                                        propertyName: o || void 0,
                                        transaction: t
                                    });
                                    (0, i(715144).z)({
                                        stores: [l],
                                        update: {
                                            [r]: {
                                                type: "property",
                                                property: a
                                            }
                                        },
                                        transaction: t
                                    })
                                }
                            }), (0, i(893783).X)({
                                environment: e,
                                collectionContextStore: t,
                                action: "update_cover_format"
                            })
                        }(s, t, f), p(""), y(!1), l())
                    }, [h, s, t, f, l]);
                return (0, r.jsx)(i(816231).A, { ...a,
                    onFocus: e.onFocus,
                    disableCloseOnEnter: !0,
                    renderExtension: (e, o) => (0, r.jsx)(b, {
                        extensionPopupButtonEvents: e,
                        extensionMenuItemParent: o,
                        filePropertyIds: S,
                        schema: c,
                        coverFormat: n,
                        environment: s,
                        theme: i(632079).Tj,
                        intl: d,
                        collectionContextStore: t,
                        onCloseParentPopup: l,
                        isCreateFilePropertyInputVisible: g,
                        setIsCreateFilePropertyInputVisible: y,
                        canCreateFileProperty: h,
                        newFilePropertyName: u,
                        setNewFilePropertyName: p,
                        createFileProperty: x
                    }),
                    children: (e, t) => (0, r.jsx)(i(95582).A, { ...e,
                        ref: t,
                        title: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Page properties",
                            id: "database.viewSettings.layoutTab.cardPreview.pageProperties"
                        })
                    })
                })
            }

            function b({
                extensionPopupButtonEvents: e,
                extensionMenuItemParent: t,
                filePropertyIds: o,
                schema: n,
                coverFormat: l,
                environment: a,
                theme: s,
                intl: d,
                collectionContextStore: c,
                onCloseParentPopup: u,
                isCreateFilePropertyInputVisible: p,
                setIsCreateFilePropertyInputVisible: g,
                canCreateFileProperty: y,
                newFilePropertyName: m,
                setNewFilePropertyName: S,
                createFileProperty: v
            }) {
                let w = (0, i(960253).e)(),
                    x = i(986939).A.isMobile ? {
                        menuType: i(649476).gu.ActionSheet
                    } : {
                        menuType: i(649476).gu.Popup,
                        width: 250
                    },
                    _ = i(381453).oE(o.map(e => {
                        let o = n[e];
                        if (!o) return;
                        let d = {
                            type: "property",
                            property: e
                        };
                        return {
                            key: e,
                            render: e => (0, r.jsx)(i(95582).A, { ...e,
                                title: o.name,
                                icon: (0, r.jsx)(i(221535).zB, {
                                    type: o.type,
                                    icon: o.icon,
                                    size: i(986939).A.isMobile ? 16 : 14,
                                    theme: s,
                                    themeMode: w,
                                    style: f.icon
                                }),
                                isChecked: i(381453).n4(l, d)
                            }),
                            action: () => {
                                j(d, a, c), t.close(), u()
                            }
                        }
                    })),
                    T = [{
                        key: "create-file-property",
                        render: e => (0, r.jsx)(i(95582).A, { ...e,
                            disabled: p && !y,
                            icon: (0, r.jsx)(i(16275).I, {
                                icon: i(638501).plusSmallIcon,
                                size: "sm"
                            }),
                            title: p ? (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "Create new property",
                                id: "database.viewSettings.layoutTab.cardPreview.createNewProperty"
                            }) : (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "New file & media property",
                                id: "database.viewSettings.layoutTab.cardPreview.newFileProperty"
                            })
                        }),
                        action: e => {
                            if (!p) {
                                "stopPropagation" in e.event && e.event.stopPropagation(), g(!0);
                                return
                            }
                            v()
                        }
                    }, ...p ? [{
                        key: "create-file-property-input",
                        render: e => (0, r.jsx)(i(310324).Ay, { ...e,
                            style: h,
                            value: m,
                            onChange: e => S(e.target.value),
                            placeholder: d.formatMessage({
                                defaultMessage: "Property name",
                                id: "database.viewSettings.layoutTab.cardPreview.newFilePropertyPlaceholder"
                            }),
                            focusInitial: !i(986939).A.isMobile,
                            onSubmit: e => {
                                e.preventDefault(), e.stopPropagation(), v()
                            }
                        }),
                        action: () => {}
                    }] : []];
                return (0, r.jsx)(i(747369).A, { ...x,
                    ...e,
                    children: (0, r.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [..._.length > 0 ? [{
                            key: "properties",
                            render: e => (0, r.jsx)(i(844565).A, { ...e
                            }),
                            items: _
                        }] : [], {
                            key: "create-property",
                            render: e => (0, r.jsx)(i(844565).A, { ...e,
                                topBorder: _.length > 0
                            }),
                            items: T
                        }],
                        resetFocusOnMouseOut: !0
                    })
                })
            }

            function w(e) {
                var t;
                let o = null == (t = e.collectionViewStore()) ? void 0 : t.getType();
                if (o) return i(799514).Jx[o]
            }

            function x(e) {
                var t;
                let o = null == (t = e.collectionViewStore()) ? void 0 : t.getType();
                if (o) return i(799514).wm[o]
            }

            function _(e) {
                var t;
                let o = null == (t = e.collectionViewStore()) ? void 0 : t.getType();
                if (o) return i(799514).dD[o]
            }

            function j(e, t, o) {
                let r = w(o),
                    n = o.collectionViewStore();
                if (!r || !n) return;
                let l = n.getSpaceId();
                (0, i(377796).createAndCommit)({
                    userAction: "CollectionSettingsViewLayoutMenu.handleCoverFormatChange",
                    environment: t,
                    cellTarget: l ? {
                        spaceWithId: l
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        (0, i(715144).z)({
                            stores: [n],
                            update: {
                                [r]: e
                            },
                            transaction: t
                        })
                    }
                }), (0, i(893783).X)({
                    environment: t,
                    collectionContextStore: o,
                    action: "update_cover_format"
                })
            }
            let T = {
                    minWidth: 190
                },
                A = {
                    opacity: 1
                };

            function C({
                collectionContextStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(682985).K8)(() => (function(e) {
                        let t = e.normalizedFormatStore.state,
                            i = w(e);
                        if (i && t) return t[i]
                    })(e), [e]),
                    l = (0, i(682985).K8)(() => (function(e) {
                        let t = e.normalizedFormatStore.state,
                            o = x(e);
                        if (o && t) {
                            let e = t[o];
                            if (e) return e
                        }
                        return i(565546).fi
                    })(e), [e]),
                    a = (0, i(682985).K8)(() => {
                        var t;
                        return !i(986939).A.isMobile || (null == (t = e.collectionViewStore()) ? void 0 : t.getType()) === "board"
                    }, [e]),
                    s = (0, i(682985).O$)(e.canConfigureBlockStore),
                    d = (0, i(682985).uB)(void 0, i(510969).A),
                    c = (0, i(682985).O$)(d).open,
                    u = (0, i(682985).K8)(() => (function(e) {
                        let t = e.normalizedFormatStore.state,
                            i = _(e);
                        if (i && t) return t[i]
                    })(e), [e]),
                    p = (0, i(682985).O$)(e.normalizedSchemaStore),
                    g = (0, o.useMemo)(() => {
                        if (!n) return S(n);
                        if ("property" === n.type) {
                            let e = p[n.property];
                            return e ? e.name : (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "Unknown property",
                                id: "database.viewSettings.layoutTab.cardPreview.unknownProperty"
                            })
                        }
                        return S(n)
                    }, [n, p]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i(656252).A, {
                        popupType: i(986939).A.isMobile ? i(182718).nl.BottomSheet : i(182718).nl.Popup,
                        alignmentToOrigin: "end",
                        placementToOrigin: "bottom",
                        style: T,
                        originGap: 0,
                        buttonPopupStore: d,
                        disabled: !s,
                        content: o => {
                            let l = i(986939).A.isMobile ? {
                                    menuType: i(649476).gu.ActionSheet
                                } : {
                                    menuType: i(649476).gu.Popup,
                                    width: 250
                                },
                                a = l => ({
                                    key: `cover-format-${(null==l?void 0:l.type)??"none"}`,
                                    render: e => (0, r.jsx)(i(95582).A, { ...e,
                                        title: S(l),
                                        isChecked: i(381453).n4(n, l)
                                    }),
                                    action: () => {
                                        j(l, t, e), o.close()
                                    }
                                }),
                                s = [a(void 0), a({
                                    type: "page_cover"
                                })],
                                d = (null == n ? void 0 : n.type) === "page_content" ? {
                                    type: "page_content"
                                } : {
                                    type: "page_content_first"
                                },
                                c = [{
                                    key: "cover-format-page_content",
                                    render: e => (0, r.jsx)(i(95582).A, { ...e,
                                        title: S({
                                            type: "page_content"
                                        }),
                                        isChecked: (null == n ? void 0 : n.type) === "page_content" || (null == n ? void 0 : n.type) === "page_content_first",
                                        caption: "page_content_first" === d.type ? (0, r.jsx)(i(109939).sA, {
                                            defaultMessage: "Uses first block on the page",
                                            id: "database.viewSettings.layoutTab.pageContentFirstCaption"
                                        }) : void 0
                                    }),
                                    action: () => {
                                        j(d, t, e), o.close()
                                    }
                                }];
                            return (0, r.jsx)(i(747369).A, { ...l,
                                children: (0, r.jsx)(i(558045).A, {
                                    type: i(558045).O.Vertical,
                                    initialFocus: 0,
                                    sections: [{
                                        key: "cover-formats",
                                        items: [...s, {
                                            key: "properties-submenu",
                                            render: (t, i) => (0, r.jsx)(v, { ...t,
                                                parentList: i,
                                                collectionContextStore: e,
                                                coverFormat: n,
                                                onCloseParentPopup: () => o.close()
                                            }),
                                            action: () => {}
                                        }, ...c]
                                    }],
                                    resetFocusOnMouseOut: !0
                                })
                            })
                        },
                        children: e => (0, r.jsx)(i(209572).A, {
                            title: (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "Card preview",
                                id: "database.viewSettings.layoutTab.cardPreviewButtonTitle"
                            }),
                            showChevron: !0,
                            right: g,
                            rotateChevron: c,
                            disabled: !s,
                            ...e
                        })
                    }), a ? (0, r.jsx)(i(529983).A, {
                        title: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Card size",
                            id: "databdatabase.viewSettings.layoutTab.cardSizeButtonTitle"
                        }),
                        selectedKey: l,
                        popupStyle: T,
                        options: ["small", "medium", "large"].map(e => ({
                            key: e,
                            type: "button",
                            title: function(e) {
                                switch (e) {
                                    case "small":
                                        return i(962299).A.formatMessage(m.small);
                                    case "medium":
                                        return i(962299).A.formatMessage(m.medium);
                                    case "large":
                                        return i(962299).A.formatMessage(m.large)
                                }
                            }(e)
                        })),
                        onChange: o => (function(e, t, o) {
                            let r = x(o),
                                n = o.collectionViewStore();
                            if (!r || !n) return;
                            let l = n.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: "CollectionSettingsViewLayoutMenu.handleCoverSizeFormatChange",
                                environment: t,
                                cellTarget: l ? {
                                    spaceWithId: l
                                } : void 0,
                                canUndo: !0,
                                perform: t => {
                                    (0, i(715144).z)({
                                        stores: [n],
                                        update: {
                                            [r]: e
                                        },
                                        transaction: t
                                    })
                                }
                            }), (0, i(893783).X)({
                                environment: t,
                                collectionContextStore: o,
                                action: "toggle_cover_size_format"
                            })
                        })(o, t, e),
                        disabled: !s
                    }) : void 0, n ? (0, r.jsx)(i(296060).A, {
                        title: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Fit media",
                            id: "databdatabase.viewSettings.layoutTab.fitImageButtonTitle"
                        }),
                        on: "contain" === u,
                        focused: !1,
                        onClick: () => (function(e, t) {
                            let o = _(t),
                                r = t.collectionViewStore(),
                                n = t.normalizedFormatStore.state;
                            if (!o || !r) return;
                            let l = r.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: "CollectionSettingsViewLayoutMenu.handleCoverAspectFormatToggle",
                                environment: e,
                                cellTarget: l ? {
                                    spaceWithId: l
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, i(715144).z)({
                                        stores: [r],
                                        update: {
                                            [o]: "contain" === n[o] ? "cover" : "contain"
                                        },
                                        transaction: e
                                    })
                                }
                            }), (0, i(893783).X)({
                                environment: e,
                                collectionContextStore: t,
                                action: "toggle_cover_aspect_format"
                            })
                        })(t, e),
                        disabled: !s,
                        textWrapperStyle: A
                    }) : void 0]
                })
            }
            let M = {
                    minWidth: 190
                },
                k = function({
                    collectionContextStore: e
                }) {
                    let t = (0, i(533992).v3)(),
                        o = (0, i(682985).O$)(e.normalizedFormatStore),
                        n = (0, i(682985).O$)(e.isFullScreenStore),
                        l = (0, i(682985).K8)(() => {
                            var t;
                            return null == (t = e.collectionViewStore()) ? void 0 : t.getType()
                        }, [e]),
                        a = (0, i(682985).K8)(() => (function(e) {
                            var t;
                            let o = e.normalizedFormatStore.state,
                                r = null == (t = e.collectionViewStore()) ? void 0 : t.getType();
                            if (r) return (0, i(780035).i3)({
                                limit: o.inline_collection_first_load_limit,
                                isGrouped: !!o.collection_group_by || "board" === r && !!o.board_columns_by,
                                viewType: r
                            })
                        })(e), [e]),
                        s = (0, i(682985).O$)(e.canConfigureBlockStore);
                    return (o.collection_group_by || "feed" === l || !n && "calendar" !== l) && void 0 !== a ? (0, r.jsx)(i(529983).A, {
                        title: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Load limit",
                            id: "database.viewSettings.layoutTab.firstLoadLimitSetting"
                        }),
                        selectedKey: a,
                        popupStyle: M,
                        options: i(780035).X9.map(e => ({
                            key: e,
                            type: "button",
                            title: e.limit
                        })),
                        onChange: o => (function(e, t, o) {
                            let r = o.collectionViewStore();
                            if (!r) return;
                            let n = r.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: "CollectionSettingsFirstLoadLimit.handleFirstLoadLimitChange",
                                environment: t,
                                cellTarget: n ? {
                                    spaceWithId: n
                                } : void 0,
                                canUndo: !0,
                                perform: t => {
                                    (0, i(715144).z)({
                                        stores: [r],
                                        update: {
                                            inline_collection_first_load_limit: e
                                        },
                                        transaction: t
                                    })
                                }
                            }), o.groupsStore.resetAllLimits(), (0, i(893783).X)({
                                environment: t,
                                collectionContextStore: o,
                                action: "set_first_load_limit"
                            })
                        })(o, t, e),
                        disabled: !s
                    }) : null
                },
                I = (0, i(109939).YK)({
                    week: {
                        defaultMessage: "Week",
                        id: "calendar.viewRanges.week"
                    },
                    month: {
                        defaultMessage: "Month",
                        id: "calendar.viewRanges.month"
                    }
                }),
                P = {
                    doneButtonSection: {
                        paddingTop: 0,
                        marginBottom: i(255069).Qm
                    },
                    style1: { ...i(986939).A.isMobile ? {
                            background: i(632079).Tj.background.primary,
                            width: "100%",
                            padding: i(255069).X1
                        } : {
                            width: "100%",
                            paddingInlineStart: i(255069).Qm,
                            paddingInlineEnd: i(255069).Qm,
                            paddingTop: i(255069).Qm
                        }
                    },
                    style2: {
                        marginTop: 4
                    },
                    style3: {
                        paddingTop: 2,
                        paddingBottom: 2
                    },
                    style4: {
                        display: "flex",
                        margin: `0 ${i(255069).Qm}px`
                    },
                    style5: {
                        paddingTop: 0
                    }
                };

            function V({
                collectionContextStore: e,
                showDoneButton: t,
                collectionSettingsStore: n,
                onDoneClick: a,
                menuType: s,
                analytics: d
            }) {
                let c = (0, i(533992).v3)(),
                    u = (0, o.useCallback)(t => (0, r.jsx)(ed, {
                        collectionContextStore: e,
                        viewType: t
                    }, `view-type-button-${t}`), [e]),
                    p = (0, i(682985).O$)(e.normalizedQueryStore),
                    g = (0, i(682985).O$)(e.normalizedSchemaStore),
                    y = (0, i(682985).O$)(e.normalizedFormatStore),
                    m = (0, i(682985).O$)(e.isFullScreenStore),
                    S = (0, i(682985).O$)(e.isRootChildStore),
                    f = (0, i(682985).K8)(() => e.collectionViewBlockStore(), [e]),
                    h = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.collectionViewStore()) ? void 0 : t.getType()
                    }, [e]),
                    v = !!h && !!i(799514).Jx[h],
                    b = "table" === h || "board" === h || "gallery" === h || "calendar" === h || "feed" === h,
                    w = "table" === h,
                    x = Object.keys(g).filter(e => {
                        let t = g[e];
                        return t && (0, i(525918).$)(t)
                    }),
                    _ = Object.keys(g).filter(e => {
                        let t = g[e];
                        return t && "place" === t.type
                    }),
                    j = "timeline" === h && x.length > 0,
                    T = (0, i(682985).K8)(() => "timeline" === h && x.length > 1 && f && !(0, i(829435).s)(f.id), [h, x, f]),
                    A = (0, i(682985).K8)(() => null == f ? void 0 : f.isCollectionViewPageWithContent(), [f]),
                    M = "timeline" === h && !!(null == p ? void 0 : p.timeline_by_end),
                    I = "calendar" === h && x.length > 0,
                    B = "map" === h && _.length > 0,
                    F = "calendar" === h,
                    O = "calendar" === h,
                    K = "board" === h,
                    D = "feed" === h,
                    L = (0, i(682985).K8)(() => (0, i(861716).DG)({
                        environment: c,
                        isFullScreen: m,
                        isRootChild: S
                    }), [c, m, S]),
                    $ = "timeline" === h && !!y.timeline_show_table && L,
                    G = "timeline" === h && L,
                    U = (0, i(682985).K8)(() => (0, i(833311).q)({
                        collectionContextStore: e
                    }), [e]),
                    J = (0, i(682985).K8)(() => !e.isInHomeWidgetStore.state && "chart" !== h, [e.isInHomeWidgetStore, h]),
                    Q = "chart" !== h,
                    q = "chart" === h,
                    ee = "chart" === h,
                    er = (0, i(83208).X)("place_property"),
                    en = (0, i(396711).x)(h),
                    es = (0, i(682985).K8)(() => (0, i(441971).f)(e), [e]);
                if (!f) return null;
                let ec = U || v || w || b || j || M || T || I || O || F || G || $ || K || D || J || Q || B || en,
                    eu = U ? (0, r.jsx)(i(264388).q, {
                        collectionContextStore: e,
                        includeIcon: !1
                    }) : void 0,
                    ep = ["table", "board", "timeline", "calendar", "list", "gallery", "chart", "feed"];
                return er && ep.push("map"), es && ep.push("dashboard"), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i(844565).A, {
                        topBorder: !1,
                        shouldShowBottomDivider: i(986939).A.isMobile,
                        children: (0, r.jsx)("div", {
                            style: P.style1,
                            children: (0, r.jsx)("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: 8
                                },
                                children: ep.map(u)
                            })
                        })
                    }), ec ? (0, i(396711).x)(h) ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(i(844565).A, {
                            extraPadding: !0,
                            children: [eu, Q ? (0, r.jsx)(ea, {
                                collectionContextStore: e
                            }) : void 0, b ? (0, r.jsx)(Y, {
                                collectionContextStore: e
                            }) : void 0, K ? (0, r.jsx)(X, {
                                collectionContextStore: e,
                                collectionSettingsStore: n
                            }) : void 0, J ? (0, r.jsx)(el, {
                                collectionContextStore: e
                            }) : void 0, (0, r.jsx)(k, {
                                collectionContextStore: e
                            })]
                        }), (0, r.jsx)(i(844565).A, {
                            extraPadding: !0,
                            topBorder: !0,
                            children: v ? (0, r.jsx)(C, {
                                collectionContextStore: e
                            }) : void 0
                        }), (0, r.jsx)(i(844565).A, {
                            extraPadding: !1,
                            topBorder: !1,
                            children: en ? (0, r.jsx)(l, {
                                environment: c,
                                collectionContextStore: e
                            }) : void 0
                        })]
                    }) : (0, r.jsxs)(i(844565).A, {
                        extraPadding: !0,
                        children: [eu, v ? (0, r.jsx)(C, {
                            collectionContextStore: e
                        }) : void 0, w ? (0, r.jsx)(N, {
                            collectionContextStore: e
                        }) : void 0, Q ? (0, r.jsx)(ea, {
                            collectionContextStore: e
                        }) : void 0, b ? (0, r.jsx)(Y, {
                            collectionContextStore: e
                        }) : void 0, j ? (0, r.jsx)(z, {
                            collectionContextStore: e
                        }) : void 0, M ? (0, r.jsx)(E, {
                            collectionContextStore: e
                        }) : void 0, T ? (0, r.jsx)(Z, {
                            collectionContextStore: e
                        }) : void 0, I ? (0, r.jsx)(W, {
                            collectionContextStore: e
                        }) : void 0, B ? (0, r.jsx)(R, {
                            collectionContextStore: e
                        }) : void 0, O ? (0, r.jsx)(et, {
                            collectionContextStore: e
                        }) : void 0, F ? (0, r.jsx)(ei, {
                            collectionContextStore: e
                        }) : void 0, G ? (0, r.jsx)(i(670968).u, {
                            collectionContextStore: e
                        }) : void 0, $ ? (0, r.jsx)(H, {
                            collectionContextStore: e,
                            collectionSettingsStore: n
                        }) : void 0, K ? (0, r.jsx)(X, {
                            collectionContextStore: e,
                            collectionSettingsStore: n
                        }) : void 0, D ? (0, r.jsx)(eo, {
                            collectionContextStore: e,
                            collectionSettingsStore: n
                        }) : void 0, J ? (0, r.jsx)(el, {
                            collectionContextStore: e
                        }) : void 0, (0, r.jsx)(k, {
                            collectionContextStore: e
                        })]
                    }) : void 0, "createView" !== s || A ? void 0 : (0, r.jsx)(i(844565).A, {
                        extraPadding: !0,
                        disableMobileBorders: !0,
                        topBorder: !0,
                        style: P.style2,
                        children: (0, r.jsx)(i(730714).Q, {
                            forceShow: !0,
                            buttonStyle: P.style3,
                            overrideOnClickBehavior: () => {
                                (0, i(76790).a)({
                                    collectionSettingsStore: n,
                                    item: {
                                        type: "linkToDatabase",
                                        existingCollectionStore: void 0,
                                        analytics: d
                                    }
                                })
                            },
                            collectionContextStore: e,
                            collectionSettingsStore: n
                        })
                    }), t ? (0, r.jsx)(i(844565).A, {
                        extraPadding: !0,
                        disableMobileBorders: !0,
                        style: P.doneButtonSection,
                        children: (0, r.jsx)(i(912946).A, {
                            colorPalette: "blue",
                            style: P.style4,
                            onClick: () => {
                                var t, o, r;
                                null == a || a(), t = c, o = n, r = e, (0, i(132425).R)({
                                    collectionSettingsStore: o,
                                    item: {
                                        type: "main"
                                    }
                                }), (0, i(893783).X)({
                                    environment: t,
                                    collectionContextStore: r,
                                    action: "click_create_view_done"
                                })
                            },
                            children: ee ? (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "Edit chart",
                                id: "database.viewSettings.createViewTab.editChartButton.title"
                            }) : (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "Done",
                                id: "database.viewSettings.createViewTab.doneButton.title"
                            })
                        })
                    }) : void 0, q ? (0, r.jsx)(i(844565).A, {
                        extraPadding: !0,
                        topBorder: !1,
                        style: P.style5,
                        children: (0, r.jsx)(i(725843).A, {
                            href: (0, i(442564).x)("guides.charts"),
                            title: (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "Learn about charts",
                                id: "database.viewSettings.layoutTab.learnAboutCharts.title"
                            }),
                            analyticsFrom: "view_settings_layout"
                        })
                    }) : void 0]
                })
            }
            let B = {
                style0: {
                    marginTop: 2,
                    fontWeight: i(699422).Wy.medium,
                    color: i(632079).Tj.blue.text.accentPrimary
                }
            };

            function F(e) {
                let {
                    currentViewType: t
                } = e, o = t ? i(476670).C9[t] : void 0;
                return ["side_peek", "center_peek", "full_page"].map(e => ({
                    key: e,
                    type: "button",
                    title: (0, i(476670).LA)(e),
                    body: (0, r.jsxs)(r.Fragment, {
                        children: [(0, i(476670)._t)(e), o && t && e === o ? (0, r.jsx)("div", {
                            style: B.style0,
                            children: (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "Default for {view}",
                                id: "database.viewPropertiesMenu.peekMode.defaultForView",
                                values: {
                                    view: i(799514).to[t]
                                }
                            })
                        }) : void 0]
                    }),
                    icon: (0, i(476670).qg)(e)({
                        width: i(104509).Ev.default,
                        height: i(104509).Ev.default,
                        fill: i(632079).Tj.text.secondary
                    })
                }))
            }
            let O = {
                    flexShrink: 1
                },
                K = {
                    flexShrink: 0
                };

            function z({
                collectionContextStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    o = (0, i(533992).WS)(),
                    n = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.normalizedQueryStore.state) ? void 0 : t.timeline_by
                    }, [e]),
                    l = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.normalizedQueryStore.state) ? void 0 : t.timeline_by_end
                    }, [e]),
                    a = (0, i(682985).O$)(e.canConfigureBlockStore),
                    s = (0, i(682985).O$)(e.normalizedSchemaStore),
                    d = (0, i(682985).K8)(() => e.collectionViewStore(), [e]),
                    c = (0, i(682985).K8)(() => e.collectionStore(), [e]),
                    u = (0, i(682985).K8)(() => null == c ? void 0 : c.getSchema(), [c]),
                    p = (0, i(682985).K8)(() => null == c ? void 0 : c.getFormat(), [c]);
                if (!n || !d || !c || !p || !u) return null;
                let g = s[n];
                return g ? (0, r.jsx)(i(656252).A, {
                    popupType: o ? i(182718).nl.SlideUp : i(182718).nl.Popup,
                    alignmentToOrigin: "end",
                    placementToOrigin: "bottom",
                    originGap: 0,
                    content: l => {
                        let a;
                        return a = o ? {
                            menuType: i(649476).gu.ActionSheet
                        } : {
                            menuType: i(649476).gu.Popup,
                            width: 300
                        }, (0, r.jsx)(i(747369).A, { ...a,
                            children: (0, r.jsx)(i(491622).A, {
                                schema: u,
                                format: p,
                                currentProperty: n,
                                getProperties: () => Object.keys(s).filter(e => {
                                    let t = s[e];
                                    return t && (0, i(525918).$)(t)
                                }),
                                onAccept: o => {
                                    if (!o) return;
                                    let r = d.getSpaceId();
                                    (0, i(377796).createAndCommit)({
                                        userAction: "CollectionSettingsViewLayoutMenu.renderTimelineBySetting",
                                        environment: t,
                                        cellTarget: r ? {
                                            spaceWithId: r
                                        } : void 0,
                                        canUndo: !0,
                                        perform: e => {
                                            (0, i(66177).f)({
                                                collectionViewStore: d,
                                                update: {
                                                    timeline_by: o
                                                },
                                                transaction: e
                                            })
                                        }
                                    }), l.close(), (0, i(893783).X)({
                                        environment: t,
                                        collectionContextStore: e,
                                        action: "update_timeline_by",
                                        original_view_type: void 0,
                                        property_type: g.type
                                    })
                                }
                            })
                        })
                    },
                    children: e => (0, r.jsx)(i(209572).A, {
                        title: l ? (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Start date",
                            id: "database.viewSettings.layoutTab.timelineStartDate.title"
                        }) : (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Show timeline by",
                            id: "database.viewSettings.layoutTab.showTimelineByProperty.title"
                        }),
                        disabled: !a,
                        showChevron: !0,
                        right: (0, r.jsx)("div", {
                            style: i(699422).RC,
                            children: g.name
                        }),
                        rightStyle: O,
                        textWrapperStyle: K,
                        ...e
                    })
                }) : null
            }

            function E({
                collectionContextStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    o = (0, i(533992).WS)(),
                    n = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.normalizedQueryStore.state) ? void 0 : t.timeline_by_end
                    }, [e]),
                    l = (0, i(682985).O$)(e.canConfigureBlockStore),
                    a = (0, i(682985).O$)(e.normalizedSchemaStore),
                    s = (0, i(682985).K8)(() => e.collectionViewStore(), [e]),
                    d = (0, i(682985).K8)(() => e.collectionStore(), [e]),
                    c = (0, i(682985).K8)(() => null == d ? void 0 : d.getSchema(), [d]),
                    u = (0, i(682985).K8)(() => null == d ? void 0 : d.getFormat(), [d]);
                if (!n || !s || !d || !u || !c) return null;
                let p = a[n];
                return p ? (0, r.jsx)(i(656252).A, {
                    popupType: o ? i(182718).nl.SlideUp : i(182718).nl.Popup,
                    alignmentToOrigin: "end",
                    placementToOrigin: "bottom",
                    originGap: 0,
                    content: l => {
                        let d;
                        return d = o ? {
                            menuType: i(649476).gu.ActionSheet
                        } : {
                            menuType: i(649476).gu.Popup,
                            width: 300
                        }, (0, r.jsx)(i(747369).A, { ...d,
                            children: (0, r.jsx)(i(491622).A, {
                                schema: c,
                                format: u,
                                currentProperty: n,
                                getProperties: () => Object.keys(a).filter(e => {
                                    let t = a[e];
                                    return t && (0, i(525918).$)(t)
                                }),
                                onAccept: o => {
                                    if (!o) return;
                                    let r = s.getSpaceId();
                                    (0, i(377796).createAndCommit)({
                                        userAction: "CollectionSettingsViewLayoutMenu.renderTimelineEndSetting",
                                        environment: t,
                                        cellTarget: r ? {
                                            spaceWithId: r
                                        } : void 0,
                                        canUndo: !0,
                                        perform: e => {
                                            (0, i(66177).f)({
                                                collectionViewStore: s,
                                                update: {
                                                    timeline_by_end: o
                                                },
                                                transaction: e
                                            })
                                        }
                                    }), l.close(), (0, i(893783).X)({
                                        environment: t,
                                        collectionContextStore: e,
                                        action: "update_timeline_by_end",
                                        original_view_type: void 0,
                                        property_type: p.type
                                    })
                                }
                            })
                        })
                    },
                    children: e => (0, r.jsx)(i(209572).A, {
                        title: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "End date",
                            id: "database.viewSettings.layoutTab.timelineEndDate.title"
                        }),
                        showChevron: !0,
                        right: p.name,
                        disabled: !l,
                        ...e
                    })
                }) : null
            }
            let D = {
                    flexShrink: 1
                },
                L = {
                    flexShrink: 0
                };

            function W({
                collectionContextStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    o = (0, i(533992).WS)(),
                    n = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.normalizedQueryStore.state) ? void 0 : t.calendar_by
                    }, [e]),
                    l = (0, i(682985).O$)(e.canConfigureBlockStore),
                    a = (0, i(682985).O$)(e.normalizedSchemaStore),
                    s = (0, i(682985).K8)(() => e.collectionViewStore(), [e]),
                    d = (0, i(682985).K8)(() => e.collectionStore(), [e]),
                    c = (0, i(682985).K8)(() => null == d ? void 0 : d.getSchema(), [d]),
                    u = (0, i(682985).K8)(() => null == d ? void 0 : d.getFormat(), [d]);
                if (!n || !s || !d || !u || !c) return null;
                let p = a[n];
                return p ? (0, r.jsx)(i(656252).A, {
                    popupType: o ? i(182718).nl.SlideUp : i(182718).nl.Popup,
                    alignmentToOrigin: "end",
                    placementToOrigin: "bottom",
                    originGap: 0,
                    content: l => {
                        let d;
                        return d = o ? {
                            menuType: i(649476).gu.ActionSheet
                        } : {
                            menuType: i(649476).gu.Popup,
                            width: 300
                        }, (0, r.jsx)(i(747369).A, { ...d,
                            children: (0, r.jsx)(i(491622).A, {
                                schema: c,
                                format: u,
                                currentProperty: n,
                                getProperties: () => Object.keys(a).filter(e => {
                                    let t = a[e];
                                    return t && (0, i(525918).$)(t)
                                }),
                                onAccept: o => {
                                    if (!o) return;
                                    let r = s.getSpaceId();
                                    (0, i(377796).createAndCommit)({
                                        userAction: "CollectionSettingsViewLayoutMenu.renderCalendarBySetting",
                                        environment: t,
                                        cellTarget: r ? {
                                            spaceWithId: r
                                        } : void 0,
                                        canUndo: !0,
                                        perform: e => {
                                            (0, i(66177).f)({
                                                collectionViewStore: s,
                                                update: {
                                                    calendar_by: o
                                                },
                                                transaction: e
                                            })
                                        }
                                    }), l.close(), (0, i(893783).X)({
                                        environment: t,
                                        collectionContextStore: e,
                                        action: "update_calendar_by",
                                        original_view_type: void 0,
                                        property_type: p.type
                                    })
                                }
                            })
                        })
                    },
                    children: e => (0, r.jsx)(i(209572).A, {
                        title: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Show calendar by",
                            id: "database.viewSettings.layoutTab.showCalendarByProperty.title"
                        }),
                        disabled: !l,
                        showChevron: !0,
                        right: (0, r.jsx)("div", {
                            style: i(699422).RC,
                            children: p.name
                        }),
                        rightStyle: D,
                        textWrapperStyle: L,
                        ...e
                    })
                }) : null
            }
            let $ = {
                    flexShrink: 1
                },
                G = {
                    flexShrink: 0
                };

            function R({
                collectionContextStore: e
            }) {
                let t, o = (0, i(533992).v3)(),
                    n = (0, i(533992).WS)(),
                    l = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.normalizedQueryStore.state) ? void 0 : t.map_by
                    }, [e]),
                    a = (0, i(682985).O$)(e.canConfigureBlockStore),
                    s = (0, i(682985).O$)(e.normalizedSchemaStore),
                    d = (0, i(682985).K8)(() => e.collectionViewStore(), [e]),
                    c = (0, i(682985).K8)(() => e.collectionStore(), [e]),
                    u = (0, i(682985).K8)(() => null == c ? void 0 : c.getSchema(), [c]),
                    p = (0, i(682985).K8)(() => null == c ? void 0 : c.getFormat(), [c]);
                if (!d || !c || !p || !u) return null;
                if (l) {
                    var g;
                    t = null == (g = s[l]) ? void 0 : g.name
                }
                return (0, r.jsx)(i(656252).A, {
                    popupType: n ? i(182718).nl.BottomSheet : i(182718).nl.Popup,
                    bottomSheetInitialState: "half",
                    alignmentToOrigin: "end",
                    placementToOrigin: "bottom",
                    originGap: 0,
                    content: t => {
                        let a;
                        return a = n ? {
                            menuType: i(649476).gu.Modal
                        } : {
                            menuType: i(649476).gu.Popup,
                            width: 300
                        }, (0, r.jsx)(i(747369).A, { ...a,
                            children: (0, r.jsx)(i(491622).A, {
                                schema: u,
                                format: p,
                                currentProperty: l,
                                getProperties: () => Object.keys(s).filter(e => {
                                    let t = s[e];
                                    return t && "place" === t.type
                                }),
                                onAccept: r => {
                                    if (!r) return;
                                    let n = s[r],
                                        l = d.getSpaceId();
                                    (0, i(377796).createAndCommit)({
                                        userAction: "CollectionSettingsViewLayoutMenu.renderMapBySetting",
                                        environment: o,
                                        cellTarget: l ? {
                                            spaceWithId: l
                                        } : void 0,
                                        canUndo: !0,
                                        perform: e => {
                                            (0, i(66177).f)({
                                                collectionViewStore: d,
                                                update: {
                                                    map_by: r
                                                },
                                                transaction: e
                                            })
                                        }
                                    }), t.close(), (0, i(893783).X)({
                                        environment: o,
                                        collectionContextStore: e,
                                        action: "update_map_by",
                                        original_view_type: void 0,
                                        property_type: null == n ? void 0 : n.type
                                    })
                                }
                            })
                        })
                    },
                    children: e => (0, r.jsx)(i(209572).A, {
                        title: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Map by",
                            id: "database.viewSettings.layoutTab.showMapByProperty.title"
                        }),
                        disabled: !a,
                        showChevron: !0,
                        right: t ? (0, r.jsx)("div", {
                            style: i(699422).RC,
                            children: t
                        }) : null,
                        rightStyle: $,
                        textWrapperStyle: G,
                        ...e
                    })
                })
            }

            function H({
                collectionContextStore: e,
                collectionSettingsStore: t
            }) {
                let o = (0, i(533992).v3)(),
                    n = ((0, i(682985).O$)(e.normalizedFormatStore).timeline_table_properties || []).filter(e => !!e.visible).length,
                    l = (0, i(682985).O$)(e.canConfigureBlockStore);
                return (0, r.jsx)(i(209572).A, {
                    title: (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Table properties",
                        id: "database.viewSettings.layoutTab.tablePropertiesButton.title"
                    }),
                    showChevron: !0,
                    right: (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "{propertiesShown} shown",
                        id: "database.viewSettings.layoutTab.propertiesButton.propertiesShown.title",
                        values: {
                            propertiesShown: n
                        }
                    }),
                    onClick: () => {
                        (0, i(76790).a)({
                            collectionSettingsStore: t,
                            item: {
                                type: "properties",
                                timelineViewTab: "table"
                            }
                        }), (0, i(893783).X)({
                            environment: o,
                            collectionContextStore: e,
                            action: "click_timeline_table_properties"
                        })
                    },
                    disabled: !l
                })
            }
            let U = {
                opacity: 1
            };

            function X(e) {
                let {
                    collectionContextStore: t,
                    collectionSettingsStore: n
                } = e, l = (0, i(533992).v3)(), a = (0, i(682985).O$)(t.normalizedFormatStore), s = a.board_columns_by, d = (0, i(682985).K8)(() => (0, i(933047).FS)(a), [a]), c = (0, i(682985).O$)(t.normalizedSchemaStore), u = (0, i(682985).O$)(t.canConfigureBlockStore), p = (0, o.useCallback)(() => {
                    if (!s) return null;
                    let e = c[s.property];
                    if (!e) return null;
                    (0, i(76790).a)({
                        collectionSettingsStore: n,
                        item: {
                            type: "group",
                            groupByKey: "board_columns_by",
                            groupsFormatKey: "board_columns"
                        }
                    }), (0, i(893783).X)({
                        environment: l,
                        collectionContextStore: t,
                        action: "click_board_group_by",
                        original_view_type: void 0,
                        property_type: e.type
                    })
                }, [t, n, l, s, c]), g = (0, o.useCallback)(() => (0, i(813838).u)({
                    environment: l,
                    collectionContextStore: t
                }), [t, l]);
                if (!s) return null;
                let y = c[s.property];
                return y ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i(209572).A, {
                        title: (0, r.jsx)(i(109939).sA, {
                            id: "database.viewSettings.layoutTab.boardGroupByButton.title",
                            defaultMessage: "Group by"
                        }),
                        showChevron: !0,
                        right: y.name,
                        onClick: p,
                        disabled: !u
                    }), (0, r.jsx)(i(296060).A, {
                        title: (0, r.jsx)(i(109939).sA, {
                            id: "database.viewSettings.groupTab.colorColumns",
                            defaultMessage: "Color columns"
                        }),
                        on: !d,
                        focused: !1,
                        onClick: g,
                        disabled: !u,
                        textWrapperStyle: U
                    })]
                }) : null
            }
            let J = {
                opacity: 1
            };

            function N({
                collectionContextStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    o = (0, i(682985).O$)(e.canConfigureBlockStore),
                    n = (0, i(682985).K8)(() => !e.normalizedFormatStore.state.hide_table_vertical_lines, [e]);
                return (0, r.jsx)(i(296060).A, {
                    title: (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Show vertical lines",
                        id: "database.viewSettings.layoutTab.tableShowVerticalLines"
                    }),
                    on: n,
                    focused: !1,
                    onClick: () => (function(e, t) {
                        let o = t.collectionViewStore();
                        if (!o) return;
                        let r = !!t.normalizedFormatStore.state.hide_table_vertical_lines;
                        i(529312).au({
                            environment: e,
                            collectionViewStore: o,
                            currentValue: r
                        }), (0, i(893783).X)({
                            environment: e,
                            collectionContextStore: t,
                            action: "toggle_table_vertical_lines"
                        })
                    })(t, e),
                    disabled: !o,
                    textWrapperStyle: J
                })
            }
            let Q = {
                opacity: 1
            };

            function Y({
                collectionContextStore: e
            }) {
                var t;
                let n = (0, i(533992).v3)(),
                    l = (0, i(682985).O$)(e.normalizedFormatStore),
                    a = (0, i(682985).O$)(e.canConfigureBlockStore),
                    s = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.collectionViewStore()) ? void 0 : t.getType()
                    }, [e]),
                    d = l.table_wrap || "calendar" === s && (null == l || null == (t = l.calendar_properties) || null == (t = t.find(e => "title" === e.property)) ? void 0 : t.wrap) === !0,
                    c = (0, o.useMemo)(() => {
                        switch (s) {
                            case "table":
                                return (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Wrap all content",
                                    id: "database.viewSettings.layoutTab.tableWrapAllContent"
                                });
                            case "calendar":
                                return (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Wrap page titles",
                                    id: "database.viewSettings.layoutTab.calendarWrapTitle"
                                });
                            case "feed":
                                return (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Wrap properties",
                                    id: "database.viewSettings.layoutTab.feedWrapProperties"
                                });
                            default:
                                return (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Wrap all content",
                                    id: "database.viewSettings.layoutTab.collectionWrapAllContent"
                                })
                        }
                    }, [s]),
                    u = (0, o.useCallback)(() => {
                        let t = e.collectionViewStore();
                        t && (i(529312).g({
                            environment: n,
                            collectionViewStore: t,
                            currentValue: !!d
                        }), (0, i(893783).X)({
                            environment: n,
                            collectionContextStore: e,
                            action: "set_first_load_limit"
                        }), (0, i(893783).X)({
                            environment: n,
                            collectionContextStore: e,
                            action: "toggle_table_wrap_cells"
                        }))
                    }, [e, n, d]);
                return (0, r.jsx)(i(296060).A, {
                    title: c,
                    on: !!d,
                    focused: !1,
                    onClick: u,
                    disabled: !a,
                    textWrapperStyle: Q
                })
            }
            let q = {
                opacity: 1
            };

            function Z({
                collectionContextStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    o = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.normalizedQueryStore.state) ? void 0 : t.timeline_by_end
                    }, [e.normalizedQueryStore]),
                    n = (0, i(682985).O$)(e.canConfigureBlockStore);
                return (0, r.jsx)(i(296060).A, {
                    title: (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Separate start and end dates",
                        id: "database.viewSettings.layoutTab.timelineUseSeparateDates.title"
                    }),
                    focused: !1,
                    on: !!o,
                    onClick: () => (function(e, t) {
                        let o = t.normalizedQueryStore.state,
                            r = t.collectionViewStore(),
                            n = null == o ? void 0 : o.timeline_by,
                            l = null == o ? void 0 : o.timeline_by_end;
                        if (!n || !r) return;
                        let a = l ? void 0 : n,
                            s = r.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewLayoutMenu.handleTimelineSeparateDatesClick",
                            environment: e,
                            cellTarget: s ? {
                                spaceWithId: s
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, i(66177).f)({
                                    collectionViewStore: r,
                                    update: {
                                        timeline_by_end: a ? ? null
                                    },
                                    transaction: e
                                })
                            }
                        }), (0, i(893783).X)({
                            environment: e,
                            collectionContextStore: t,
                            action: "toggle_timeline_separate_dates"
                        })
                    })(t, e),
                    disabled: !n,
                    textWrapperStyle: q
                })
            }
            let ee = {
                minWidth: 190
            };

            function et({
                collectionContextStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(682985).O$)(e.canConfigureBlockStore),
                    l = (0, i(682985).K8)(() => {
                        let t;
                        return (null == (t = e.normalizedFormatStore.state) ? void 0 : t.calendar_view_range) || "month"
                    }, [e]),
                    a = (0, i(682985).K8)(() => "peekModeFormat" === e.settingsStore.state.openButtonPopup, [e]),
                    s = (0, o.useMemo)(() => ["month", "week"].map(e => ({
                        key: e,
                        type: "button",
                        title: i(962299).A.formatMessage(I[e])
                    })), []);
                return (0, r.jsx)(i(529983).A, {
                    title: (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Show calendar as",
                        id: "database.viewSettings.layoutTab.showCalendarAs.title"
                    }),
                    collectionContextStore: e,
                    openButtonPopup: a,
                    selectedKey: l,
                    popupStyle: ee,
                    options: s,
                    onChange: o => (function(e, t, o) {
                        let r = o.collectionViewStore();
                        if (!r) return;
                        let n = r.getSpaceId(),
                            {
                                serverCommitResult: l
                            } = (0, i(377796).createAndCommit)({
                                userAction: "CollectionSettingsViewLayoutMenu.handleViewRangeOptionClick",
                                environment: t,
                                cellTarget: n ? {
                                    spaceWithId: n
                                } : void 0,
                                canUndo: !0,
                                perform: t => {
                                    (0, i(715144).z)({
                                        stores: [r],
                                        update: {
                                            calendar_view_range: e
                                        },
                                        transaction: t
                                    })
                                }
                            }),
                            a = i(97892).X.state,
                            s = o.dateRangeStartStore.state,
                            d = o.dateRangeEndStore.state,
                            {
                                newDateRangeStart: c,
                                newDateRangeEnd: u
                            } = function(e) {
                                let {
                                    newViewRange: t,
                                    oldCalendarStart: o,
                                    startOfWeekSetting: r
                                } = e;
                                if ("month" === t) {
                                    let e = (0, i(25825).mK)(new Date((0, i(25825).to)(o, r)).getDate() > 7 ? (0, i(25825).Mw)(o) : o, r),
                                        t = (0, i(25825).to)((0, i(25825).AQ)({
                                            date: e,
                                            monthsToAdd: 1
                                        }), r);
                                    return {
                                        newDateRangeStart: e,
                                        newDateRangeEnd: t
                                    }
                                }
                                return {
                                    newDateRangeStart: (0, i(25825).mK)(Date.now(), r),
                                    newDateRangeEnd: (0, i(25825).to)(Date.now(), r)
                                }
                            }({
                                oldCalendarStart: s,
                                newViewRange: e,
                                startOfWeekSetting: a
                            });
                        (0, i(814491).r)({
                            dateRangeStart: c,
                            dateRangeEnd: u,
                            collectionContextStore: o
                        }), l.then(() => {
                            (0, i(893783).X)({
                                environment: t,
                                collectionContextStore: o,
                                action: "update_calendar_view_range"
                            }), (0, i(883475).LQ)({
                                newCalendarStart: c,
                                newCalendarEnd: u,
                                collectionViewId: r.id,
                                currentUserId: t.currentUser.id
                            })
                        }).catch(() => {
                            (0, i(814491).r)({
                                dateRangeStart: s,
                                dateRangeEnd: d,
                                collectionContextStore: o
                            })
                        })
                    })(o, t, e),
                    disabled: !n
                })
            }

            function ei({
                collectionContextStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(682985).K8)(() => {
                        var t;
                        return !!((null == (t = e.collectionViewStore()) ? void 0 : t.getFormatStore().getKeyStore("calendar_show_weekends").getValue()) ? ? !0)
                    }, [e]),
                    l = (0, o.useCallback)(() => {
                        let o = e.collectionViewStore();
                        if (!o) return;
                        let r = o.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewLayoutMenu.handleToggleShowWeekends",
                            environment: t,
                            cellTarget: r ? {
                                spaceWithId: r
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, i(715144).z)({
                                    stores: [o],
                                    update: {
                                        calendar_show_weekends: !n
                                    },
                                    transaction: e
                                })
                            }
                        }), (0, i(893783).X)({
                            environment: t,
                            collectionContextStore: e,
                            action: "toggle_calendar_show_weekends"
                        })
                    }, [e, t, n]);
                return (0, r.jsx)(i(76761).A, {
                    title: (0, r.jsx)(i(4458).fI, {
                        alignItems: "center",
                        children: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Show weekends",
                            id: "database.viewSettings.layoutTab.showWeekends.title"
                        })
                    }),
                    showChevron: !1,
                    switcherProps: {
                        on: n
                    },
                    onClick: l
                })
            }

            function eo({
                collectionContextStore: e,
                collectionSettingsStore: t
            }) {
                let n = (0, i(533992).v3)(),
                    l = (0, i(682985).O$)(e.canConfigureBlockStore),
                    a = (0, i(682985).K8)(() => {
                        var t;
                        return (null == (t = e.collectionViewStore()) || null == (t = t.getFormatStore()) ? void 0 : t.getKeyValue("feed_show_author_byline")) ? ? !0
                    }, [e]),
                    s = (0, o.useCallback)(() => {
                        let t = e.collectionViewStore();
                        if (!t) return;
                        let o = t.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "CollectionSettingsProperty.FeedOptions.handleToggleShowAuthorByline",
                            environment: n,
                            cellTarget: o ? {
                                spaceWithId: o
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, i(715144).z)({
                                    stores: [t],
                                    update: {
                                        feed_show_author_byline: !a
                                    },
                                    transaction: e
                                })
                            }
                        }), (0, i(893783).X)({
                            environment: n,
                            collectionContextStore: e,
                            action: "toggle_feed_show_author_byline"
                        })
                    }, [e, n, a]);
                return (0, r.jsx)(i(296060).A, {
                    title: (0, r.jsx)(i(4458).fI, {
                        alignItems: "center",
                        children: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Show author byline",
                            id: "database.viewSettings.layoutTab.feedShowAuthorByline.title"
                        })
                    }),
                    focused: !1,
                    on: a,
                    onClick: s,
                    disabled: !l
                })
            }
            let er = {
                    minWidth: 190
                },
                en = {
                    paddingTop: 8,
                    paddingBottom: 8
                };

            function el({
                collectionContextStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    o = (0, i(682985).O$)(e.canConfigureBlockStore),
                    n = (0, i(682985).K8)(() => (function(e) {
                        var t;
                        let o = e.normalizedFormatStore.state,
                            r = null == o ? void 0 : o.collection_peek_mode;
                        if (r) return r;
                        let n = null == (t = e.collectionViewStore()) ? void 0 : t.getType();
                        return n ? i(476670).C9[n] : "side_peek"
                    })(e), [e]),
                    l = (0, i(682985).K8)(() => "peekModeFormat" === e.settingsStore.state.openButtonPopup, [e]),
                    a = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.collectionViewStore()) ? void 0 : t.getType()
                    }, [e]);
                return (0, r.jsx)(i(529983).A, {
                    title: (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Open pages in",
                        id: "database.viewSettings.layoutTab.peekModeTitle"
                    }),
                    collectionContextStore: e,
                    openButtonPopup: l,
                    selectedKey: n,
                    popupStyle: er,
                    options: F({
                        currentViewType: a
                    }),
                    menuItemOptionsStyle: en,
                    onClick: () => {
                        (0, i(567442).m)({
                            environment: t,
                            collectionStore: e.collectionStore(),
                            collectionViewStore: e.collectionViewStore(),
                            from: "collection_view_settings"
                        })
                    },
                    onChange: o => (function(e, t, o) {
                        let r = o.collectionViewStore();
                        if (!r || !e) return;
                        let n = r.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewLayoutMenu.handlePeekModeFormatClick",
                            environment: t,
                            cellTarget: n ? {
                                spaceWithId: n
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, i(715144).z)({
                                    stores: [r],
                                    update: {
                                        collection_peek_mode: e
                                    },
                                    transaction: t
                                })
                            }
                        });
                        let l = (0, i(752242).sl)(o);
                        if (l && l.view_type && (l && l.view_type && (0, i(104310).u)({
                                event: {
                                    eventName: "update_peek_mode_format",
                                    eventProperties: {
                                        peek_mode: e,
                                        from: "collection_view_settings",
                                        ...l
                                    }
                                }
                            }), i(475097).default.state.open && i(475097).default.state.collectionContextStore === o)) {
                            let o = i(728372).AppStoreMainEditorCurrentBlockStore.state,
                                r = "full_page" === e ? (0, i(483227).Ay)({
                                    store: i(475097).default.state.targetStore,
                                    fullyQualified: !1,
                                    pageVisitSource: i(254656).y8.Expand
                                }) : (0, i(28630).wy)({
                                    environment: t,
                                    store: i(475097).default.state.targetStore,
                                    mainEditorCurrentBlockStore: o,
                                    collectionContextStore: i(475097).default.state.collectionContextStore,
                                    fullyQualified: !1,
                                    overridePeekMode: (0, i(475097).getPeekModeFromCollectionPeekModeFormat)(e)
                                });
                            r && (0, i(79266).navigate)({
                                environment: t,
                                url: r
                            })
                        }
                    })(o, t, e),
                    disabled: !o
                })
            }

            function ea({
                collectionContextStore: e
            }) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(682985).O$)(e.canConfigureBlockStore),
                    l = (0, i(682985).K8)(() => e.shouldShowPageIcon() ? ? !0, [e]),
                    a = (0, o.useCallback)(() => {
                        let o = e.collectionViewStore();
                        if (!o) return;
                        let r = o.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "CollectionSettingsProperty.TitleOptions.handleToggleShowIcon",
                            environment: t,
                            cellTarget: r ? {
                                spaceWithId: r
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, i(715144).z)({
                                    stores: [o],
                                    update: {
                                        show_page_icon: !l
                                    },
                                    transaction: e
                                })
                            }
                        }), (0, i(893783).X)({
                            environment: t,
                            collectionContextStore: e,
                            action: "toggle_show_page_icon"
                        })
                    }, [e, t, l]);
                return (0, r.jsx)(i(296060).A, {
                    title: (0, r.jsx)(i(4458).fI, {
                        alignItems: "center",
                        children: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Show page icon",
                            id: "database.viewSettings.layoutTab.showPageIcon.title"
                        })
                    }),
                    focused: !1,
                    on: l,
                    onClick: a,
                    disabled: !n
                })
            }
            let es = {
                style0: {
                    textAlign: "center"
                },
                style1: {
                    boxShadow: `inset 0 0 0 2px ${i(632079).Tj.blue.border.accentPrimary}`,
                    color: i(632079).Tj.blue.text.accentPrimary,
                    fill: i(632079).Tj.blue.icon.accentPrimary,
                    fontWeight: i(699422).Wy.medium
                },
                style2: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 11,
                    borderRadius: 6,
                    padding: 6,
                    boxShadow: `inset 0 0 0 1px ${i(632079).Tj.border.primary}`,
                    color: i(632079).Tj.text.secondary,
                    fill: i(632079).Tj.text.secondary
                }
            };

            function ed({
                viewType: e,
                collectionContextStore: t
            }) {
                let o = (0, i(533992).v3)(),
                    n = (0, i(682985).K8)(() => {
                        var e;
                        return null == (e = t.collectionViewStore()) ? void 0 : e.getType()
                    }, [t]),
                    l = (0, i(682985).O$)(t.canConfigureBlockStore),
                    a = n === e,
                    s = a || !l;
                return (0, r.jsxs)(i(64960).Ay, {
                    style: { ...es.style2,
                        ...a && es.style1
                    },
                    disabled: s,
                    onClick: () => {
                        var r;
                        let l = null == (r = t.collectionViewStore()) ? void 0 : r.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewLayoutMenu.renderViewTypeButton",
                            environment: o,
                            cellTarget: l ? {
                                spaceWithId: l
                            } : void 0,
                            canUndo: !0,
                            perform: r => {
                                (0, i(416733).h)({
                                    environment: o,
                                    collectionContextStore: t,
                                    newViewType: e,
                                    transaction: r
                                })
                            }
                        }), (0, i(893783).X)({
                            environment: o,
                            collectionContextStore: t,
                            action: "change_type",
                            original_view_type: n,
                            new_view_type: e
                        })
                    },
                    children: [i(647905).ZU[e]({
                        width: void 0,
                        height: 20,
                        marginBottom: 4,
                        marginTop: 4
                    }), (0, r.jsx)("div", {
                        style: es.style0,
                        children: i(799514).to[e]
                    })]
                }, e)
            }
        },
        466491: (e, t, i) => {
            i.d(t, {
                E: () => r
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.09 15.2 12.78",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M3.5 3.099c-.621 0-1.125.504-1.125 1.125v9.026A2.625 2.625 0 0 0 5 15.875h9.944a2.625 2.625 0 0 0 2.625-2.625V7.495a2.625 2.625 0 0 0-2.625-2.625H9.067L7.962 3.513A1.13 1.13 0 0 0 7.09 3.1zm.125 4.465V4.349H7.03l1.105 1.356c.214.263.534.415.872.415h5.937c.76 0 1.375.616 1.375 1.375v.069zm0 1.1h12.694v4.586c0 .76-.616 1.375-1.375 1.375H5c-.76 0-1.375-.616-1.375-1.375z"
                    })
                },
                r = (0, i(104509).wt)("folder", o, "default")
        },
        491622: (e, t, i) => {
            i.d(t, {
                A: () => s
            }), i(944114), i(898992), i(354520), i(581454);
            var o = i.n(i(844751)),
                r = i(296540),
                n = i(474848);
            let l = (0, i(109939).YK)({
                    inputPlaceholder: {
                        defaultMessage: "Search for a property…",
                        id: "database.viewSettings.propertySelect.inputPlaceholder"
                    },
                    none: {
                        defaultMessage: "None",
                        id: "database.viewSettings.propertySelect.noneMessage"
                    },
                    remove: {
                        defaultMessage: "Remove",
                        id: "database.viewSettings.propertySelect.removeMessage"
                    }
                }),
                a = {
                    menuItem: {
                        color: i(632079).Tj.text.secondary
                    }
                },
                s = r.memo(function({
                    currentProperty: e,
                    showNoneOption: t,
                    showRemoveOption: s,
                    getProperties: d,
                    onAccept: c,
                    inputPlaceholder: u,
                    inputLeft: p,
                    defaultShowPropertyCount: g,
                    disableSortByPageFormat: y,
                    schema: m,
                    format: S,
                    renderProperty: f,
                    aiInputSection: h
                }) {
                    let v = (0, i(109939).tz)(),
                        [b, w] = (0, r.useState)(""),
                        [x, _] = (0, r.useState)(!1),
                        j = (0, i(682985).uB)(void 0, i(419110).$),
                        T = (0, i(649476).Tf)(),
                        [A, C] = (0, i(739271).s)(),
                        M = (0, i(944940).L)(S, m, void 0, i(565546).jf.Page).collection_page_properties || [],
                        k = !g || x,
                        I = v.formatMessage(l.none),
                        P = t ? {
                            key: "none",
                            render: t => (0, n.jsx)(i(95582).A, { ...t,
                                isChecked: !e,
                                title: I
                            }),
                            action: () => {
                                c(void 0)
                            }
                        } : void 0,
                        V = s ? {
                            key: "remove",
                            render: e => (0, n.jsx)(i(95582).A, { ...e,
                                icon: (0, n.jsx)(i(16275).I, {
                                    icon: i(968411).trashIcon
                                }),
                                title: v.formatMessage(l.remove)
                            }),
                            action: () => {
                                c(void 0)
                            }
                        } : void 0,
                        B = d(),
                        F = B;
                    if (y || (F = i(381453).Ul(B, e => M.findIndex(t => t.property === e))), b) {
                        let e = new Map,
                            t = F.map(t => {
                                let o = m[t],
                                    r = o ? `${o.name} ${i(799514).dC[o.type]}` : "";
                                return e.set(t, r), r
                            });
                        t = o().filter(b, t).map(({
                            original: e
                        }) => e), F = F.filter(i => t.includes(e.get(i) || ""))
                    } else !k && g && (F = F.slice(0, g));
                    let O = i(381453).oE([!b || o().test(b, I) ? P : void 0, ...F.map(t => (function(e, t, o, r, l) {
                        let a = t[e];
                        if (a) return {
                            key: e,
                            render: t => {
                                let o = e === r;
                                return l ? l(t, e, o, a) : (0, n.jsx)(i(34824).G, { ...t,
                                    propertySchema: a,
                                    format: i(34824).e.Name,
                                    isChecked: o
                                })
                            },
                            action: () => {
                                o(e)
                            }
                        }
                    })(t, m, c, e, f))]);
                    k || !(B.length > F.length) || b || O.push({
                        key: "show_more",
                        render: e => (0, n.jsx)(i(95582).A, { ...e,
                            icon: (0, n.jsx)(i(16275).I, {
                                icon: i(397900).ellipsisIcon
                            }),
                            style: a.menuItem,
                            title: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "{moreCount} more",
                                id: "database.viewSettings.propertySelect.showMoreTitle",
                                values: {
                                    moreCount: B.length - F.length
                                }
                            })
                        }),
                        action: () => {
                            _(!0)
                        }
                    });
                    let K = O.length > 0,
                        z = !!b,
                        E = !V || K || z;
                    E && !K && O.push({
                        action: i(763230).lQ,
                        key: "noResults",
                        render: e => (0, n.jsx)(i(320819).A, { ...e,
                            caption: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "No results",
                                id: "database.viewSettings.propertySelect.noResultsTitle"
                            })
                        })
                    });
                    let D = [],
                        L = h && !i(986939).A.isMobile;
                    if (L && D.push({
                            key: "ai_helper",
                            comp: h
                        }), E && !L) {
                        let e = (0, n.jsx)(i(310324).Ay, {
                            inputLeft: p,
                            focusInitial: !i(986939).A.isMobile || void 0,
                            focus: !i(986939).A.isMobile || void 0,
                            value: b,
                            onChange: e => {
                                w(e.target.value), j.setState({ ...j.state,
                                    focus: {
                                        section: 0,
                                        indexLocal: 0,
                                        indexGlobal: 0,
                                        footerFocused: !1
                                    }
                                }), _(!1)
                            },
                            placeholder: u || v.formatMessage(l.inputPlaceholder),
                            ...A
                        });
                        T ? O.unshift({
                            key: "input",
                            render: () => e,
                            action: i(763230).lQ
                        }) : D.push({
                            key: "input",
                            comp: (0, n.jsx)(i(844565).A, {
                                isInput: !0,
                                children: e
                            })
                        })
                    }
                    return (O.length > 0 || V) && D.push({
                        key: "properties",
                        comp: (0, n.jsx)(i(558045).A, {
                            type: i(558045).O.Vertical,
                            initialFocus: 0,
                            comboboxProps: E ? C : void 0,
                            sections: [...O.length > 0 ? [{
                                key: "results",
                                render: e => (0, n.jsx)(i(844565).A, { ...e
                                }),
                                items: O
                            }] : [], ...V ? [{
                                key: "remove",
                                render: e => (0, n.jsx)(i(844565).A, {
                                    topBorder: O.length > 0,
                                    ...e
                                }),
                                items: [V]
                            }] : []],
                            store: j
                        })
                    }), (0, n.jsx)(n.Fragment, {
                        children: D.map(({
                            key: e,
                            comp: t
                        }) => (0, n.jsx)(r.Fragment, {
                            children: t
                        }, e))
                    })
                }, i(795676).A)
        },
        502260: (e, t, i) => {
            i.d(t, {
                l: () => o
            });
            let o = {
                [i(565546).uO.Jira]: i(896221).A.images.externalIntegrations.jiraPng,
                [i(565546).uO.Salesforce]: i(896221).A.images.externalIntegrations.salesforcePng
            }
        },
        505693: (e, t, i) => {
            i.d(t, {
                c: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    collectionContextStore: o
                } = e;
                o.collectionStore() && ((0, i(893783).X)({
                    environment: t,
                    collectionContextStore: o,
                    action: "click_new_property"
                }), (0, i(76790).a)({
                    collectionSettingsStore: o.settingsStore,
                    item: {
                        type: "propertyType",
                        onAccept: e => {
                            let {
                                propertyType: r,
                                isSuggestedProperty: n,
                                propertyName: l,
                                propertyIcon: a,
                                selectOptions: s
                            } = e;
                            i(987303).nZ({
                                environment: t,
                                propertyType: r,
                                isSuggestedProperty: n,
                                propertyName: l,
                                propertyIcon: a,
                                selectOptions: s,
                                collectionContextStore: o,
                                from: "view_settings"
                            })
                        }
                    }
                }))
            }
        },
        550602: (e, t, i) => {
            i.d(t, {
                h: () => r
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.76 13.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M12.718 4.625H6.313a3 3 0 0 0 0 6h7.562a1.75 1.75 0 1 1 0 3.5H7.282a2.126 2.126 0 1 0 0 1.25h6.593a3 3 0 1 0 0-6H6.313a1.75 1.75 0 1 1 0-3.5h6.405a2.126 2.126 0 1 0 0-1.25m1.157.625a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0"
                    })
                },
                r = (0, i(104509).wt)("pathRoundEnds", o, "default")
        },
        553608: (e, t, i) => {
            i.d(t, {
                C8: () => u,
                Dz: () => a,
                GC: () => g,
                GL: () => y,
                YY: () => p,
                dM: () => d,
                h9: () => s,
                jX: () => l,
                oF: () => c,
                uj: () => n
            });
            let o = {
                    JiraSyncInfoPopup: new(i(815048)).O2("JiraSyncInfoPopup", async () => await Promise.all([i.e(75134), i.e(68744)]).then(i.bind(i, 295597))),
                    ImproveJiraSyncPopup: new(i(815048)).O2("ImproveJiraSyncPopup", async () => await Promise.all([i.e(75134), i.e(2686)]).then(i.bind(i, 473119))),
                    JiraDCAuthModal: new(i(815048)).O2("JiraDCAuthModal", async () => await Promise.all([i.e(75134), i.e(17250), i.e(56809), i.e(28763)]).then(i.bind(i, 190229))),
                    ExternalImportAndSyncIndicator: new(i(815048)).O2("ExternalImportAndSyncIndicator", async () => await Promise.all([i.e(75134), i.e(98288)]).then(i.bind(i, 292460))),
                    JiraSyncedAllProjectsTooltip: new(i(815048)).O2("JiraSyncedAllProjectsTooltip", async () => await i.e(21446).then(i.bind(i, 417580))),
                    JiraSyncedAllIssuesTooltip: new(i(815048)).O2("JiraSyncedAllIssuesTooltip", async () => await i.e(21446).then(i.bind(i, 417580))),
                    JiraSyncedDatabaseViewsAndFiltersTooltip: new(i(815048)).O2("JiraSyncedDatabaseViewsAndFiltersTooltip", async () => await i.e(21446).then(i.bind(i, 417580))),
                    JiraSyncSourceTooltip: new(i(815048)).O2("JiraSyncSourceTooltip", async () => await i.e(21446).then(i.bind(i, 417580))),
                    JiraSyncedSettingsToSetupProjectsAndIssuesTooltip: new(i(815048)).O2("JiraSyncedSettingsToSetupProjectsAndIssuesTooltip", async () => await i.e(21446).then(i.bind(i, 417580)))
                },
                r = {
                    JiraSyncTeamSpaceModal: new(i(815048)).O2("JiraSyncTeamSpaceModal", async () => Promise.all([i.e(75134), i.e(40994), i.e(80139), i.e(17250), i.e(28048), i.e(55940), i.e(12560), i.e(33503), i.e(21969), i.e(74145), i.e(56809), i.e(48860), i.e(18682), i.e(79349), i.e(47414), i.e(96579), i.e(21753), i.e(9817), i.e(29447), i.e(75189), i.e(41075), i.e(56188)]).then(i.bind(i, 76948)))
                },
                n = (0, i(815048)._h)(r.JiraSyncTeamSpaceModal, e => e.default),
                l = (0, i(815048)._h)(o.JiraSyncedAllProjectsTooltip, e => e.JiraSyncedAllProjectsTooltip),
                a = (0, i(815048)._h)(o.JiraDCAuthModal, e => e.default),
                s = (0, i(815048)._h)(o.JiraSyncedAllIssuesTooltip, e => e.JiraSyncedAllIssuesTooltip),
                d = (0, i(815048)._h)(o.JiraSyncedDatabaseViewsAndFiltersTooltip, e => e.JiraSyncedDatabaseViewsAndFiltersTooltip),
                c = (0, i(815048)._h)(o.JiraSyncedSettingsToSetupProjectsAndIssuesTooltip, e => e.JiraSyncedSettingsToSetupProjectsAndIssuesTooltip),
                u = (0, i(815048)._h)(o.JiraSyncSourceTooltip, e => e.JiraSyncSourceTooltip),
                p = (0, i(815048)._h)(o.JiraSyncInfoPopup, e => e.JiraSyncInfoPopup),
                g = (0, i(815048)._h)(o.ImproveJiraSyncPopup, e => e.ImproveJiraSyncPopup),
                y = (0, i(815048)._h)(o.ExternalImportAndSyncIndicator, e => e.ExternalImportAndSyncIndicator)
        },
        554520: (e, t, i) => {
            function o({
                collectionContextStore: e,
                permissionScopes: t
            }) {
                return "collectionTypedView" !== e.contextTypeFromStoreState && t.canConfigureCollection
            }
            i.d(t, {
                K: () => o
            }), i(581454)
        },
        567442: (e, t, i) => {
            i.d(t, {
                m: () => o
            });

            function o(e) {
                var t;
                let {
                    environment: o,
                    collectionViewStore: r
                } = e, n = null == r ? void 0 : r.getType();
                n && i(20557).jE(o, {
                    from: e.from,
                    from_peek_mode: e.from_peek_mode,
                    collection_id: null == (t = e.collectionStore) ? void 0 : t.id,
                    collection_view_id: null == r ? void 0 : r.id,
                    view_type: n
                })
            }
        },
        609328: (e, t, i) => {
            i.d(t, {
                P: () => n
            }), i(944114), i(296540);
            var o = i(474848);
            let r = (0, i(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function n({
                environment: e,
                title: t,
                ...l
            }) {
                var a, s, d;
                let c = [],
                    u = null == (a = l.error) ? void 0 : a.stack;
                if (u) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (s = t.replay) || null == (d = s.terminate) || d.call(s)), c.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, i(969899).Nu)())({
                                environment: e,
                                stringValue: u,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${u}
		</code></pre>`,
                                copiedMessage: r.errorStacktraceCopied
                            })
                        }
                    })
                }
                c.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, o.jsx)(i(109939).sA, { ...i(647095)._0.dismissButtonLabel
                    }),
                    onAccept: i(763230).D_
                }), i(647095).ui({
                    message: t,
                    description: (0, o.jsx)(i(149795).dD, { ...l
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: c
                })
            }
        },
        623549: (e, t, i) => {
            i.d(t, {
                F: () => o
            });

            function o(e, t) {
                if (e) return e;
                switch (t) {
                    case "large":
                        return i(904315).A.card.desktop.large.height;
                    case "small":
                        return i(904315).A.card.desktop.small.height;
                    default:
                        return i(904315).A.card.desktop.medium.height
                }
            }
        },
        650750: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => r,
                squareOnSquarePlusIcon: () => n
            }), i(296540);
            var o = i(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.51 15.51",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M12 8.875c.345 0 .625.28.625.625v1.875H14.5a.625.625 0 1 1 0 1.25h-1.875V14.5a.625.625 0 1 1-1.25 0v-1.875H9.5a.625.625 0 1 1 0-1.25h1.875V9.5c0-.345.28-.625.625-.625"
                        }), (0, o.jsx)("path", {
                            d: "M4.5 2.375A2.125 2.125 0 0 0 2.375 4.5V12c0 1.174.951 2.125 2.125 2.125h1.625v1.625c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125v-7.5a2.125 2.125 0 0 0-2.125-2.125h-1.625V4.5A2.125 2.125 0 0 0 12 2.375zm8.375 3.75H8.25A2.125 2.125 0 0 0 6.125 8.25v4.625H4.5A.875.875 0 0 1 3.625 12V4.5c0-.483.392-.875.875-.875H12c.483 0 .875.392.875.875zm-5.5 2.125c0-.483.392-.875.875-.875h7.5c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-7.5a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                n = (0, i(104509).wt)("squareOnSquarePlus", r, "default")
        },
        670968: (e, t, i) => {
            i.d(t, {
                A: () => S,
                u: () => m
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(581454);
            var o = i.n(i(844751)),
                r = i(296540),
                n = i(474848);
            let l = (0, i(109939).YK)({
                    inputPlaceholder: {
                        defaultMessage: "Search for a property…",
                        id: "database.viewSettings.propertiesTab.inputPlaceholder"
                    },
                    togglePropertyVisibilityAriaLabel: {
                        defaultMessage: "Toggle property visibility",
                        id: "database.viewSettings.propertiesTab.togglePropertyVisibilityAriaLabel"
                    },
                    compactCardDescription: {
                        defaultMessage: "Enabled properties appear on their own line instead of wrapping with other properties",
                        id: "database.viewSettings.layoutTab.compactCard.description"
                    }
                }),
                a = i(546605).Store.createClass("", {
                    name: "InputStore"
                }),
                s = {
                    captionStyle: {
                        fontSize: 12,
                        color: i(632079).Tj.text.secondary,
                        fontWeight: i(699422).Wy.regular
                    },
                    headerImageStyle: {
                        width: "100%",
                        display: "block",
                        borderRadius: 10,
                        border: `1px solid ${i(632079).Tj.border.secondary}`
                    }
                };

            function d() {
                let e = (0, i(109939).tz)();
                return (0, n.jsx)(i(844565).A, {
                    children: (0, n.jsxs)(i(4458).VP, {
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        paddingTop: 8,
                        paddingInlineEnd: 12,
                        paddingBottom: 8,
                        paddingInlineStart: 12,
                        children: [(0, n.jsx)("video", {
                            src: i(896221).A.images.collections.collectionSettingsCompactCardSettingsPreviewMp4,
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            style: s.headerImageStyle
                        }), (0, n.jsx)("div", {
                            style: s.captionStyle,
                            children: e.formatMessage(l.compactCardDescription)
                        })]
                    })
                })
            }

            function c(e) {
                switch (e) {
                    case "editPropertiesAndOrderAndVisibility":
                        return {
                            allowEditProperties: !0,
                            allowEditOrder: !0,
                            allowTimelineControls: !1,
                            toggleType: "visibility",
                            customTitle: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Properties",
                                id: "database.viewSettings.editPropertiesTab.title"
                            })
                        };
                    case "editVisibilityAndOrder":
                        return {
                            allowEditProperties: !1,
                            allowEditOrder: !0,
                            allowTimelineControls: !0,
                            toggleType: "visibility",
                            customTitle: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Property visibility",
                                id: "database.viewSettings.propertyVisibilityTab.title"
                            })
                        };
                    case "editOrderAndWidth":
                        return {
                            allowEditProperties: !1,
                            allowEditOrder: !0,
                            allowTimelineControls: !1,
                            toggleType: "width",
                            customTitle: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Compact card settings",
                                id: "database.viewSettings.layoutTab.compactCard.title"
                            }),
                            customHeader: (0, n.jsx)(d, {})
                        };
                    case "editPropertiesOnly":
                        return {
                            allowEditProperties: !0,
                            allowEditOrder: !1,
                            allowTimelineControls: !1,
                            toggleType: "none",
                            customTitle: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Properties",
                                id: "database.viewSettings.editPropertiesTab.title"
                            })
                        };
                    default:
                        (0, i(722371).HB)(e)
                }
            }
            let u = {
                    icon: {
                        fill: i(632079).Tj.icon.primary
                    },
                    container: {
                        marginInlineStart: 2,
                        flexShrink: 0
                    },
                    propertyIcon: {
                        fill: i(632079).Tj.icon.primary,
                        marginInlineStart: 2,
                        flexShrink: 0
                    },
                    animationContainer: {
                        position: "relative",
                        width: i(104509).Ev.default,
                        height: i(104509).Ev.default
                    },
                    animatedBaseIconStyle: {
                        width: i(104509).Ev.default,
                        height: i(104509).Ev.default,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    animatedDragHandleStyle: {
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        width: i(104509).Ev.default,
                        height: i(104509).Ev.default,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none"
                    },
                    dragHandle: {
                        marginInlineEnd: 6,
                        flexShrink: 0
                    }
                },
                p = {
                    propertyPermissionBadge: {
                        marginInlineStart: 6,
                        flexShrink: 0
                    },
                    aiBadge: {
                        marginInlineStart: 6
                    },
                    eyeIcon: {
                        width: i(104509).Ev.sm,
                        height: i(104509).Ev.sm
                    },
                    chevronIcon: {
                        marginInlineStart: 5
                    }
                },
                g = r.memo(function({
                    formatKey: e,
                    propertyFormat: t,
                    propertySchema: o,
                    menuConfig: a,
                    inputStore: s,
                    propertiesMenuType: d,
                    canEditProperty: c,
                    canEditPropertyOffline: g,
                    baseMenuItemProps: y,
                    tooltipEvents: m
                }) {
                    let S = (0, i(109939).tz)(),
                        f = (0, i(533992).v3)(),
                        h = (0, i(713311).ET)(),
                        v = (0, i(682985).K8)(() => h.collectionStore(), [h]),
                        b = (0, i(845001).x)(h.capabilitiesStore, h.permissionScopesStore),
                        w = "width" === a.toggleType,
                        x = (0, i(83208).X)("fix_mobile_drag_conflict"),
                        C = (0, i(682985).K8)(() => _({
                            collectionContextStore: h,
                            inputStore: s,
                            propertiesMenuType: d,
                            isFixMobileDragConflictEnabled: x
                        }) && ("title" !== t.property || !T.includes(e)), [h, s, d, e, t, x]),
                        M = "visibility" === a.toggleType,
                        k = (0, i(682985).K8)(() => M && ("title" !== t.property || function(e, t) {
                            var o;
                            let r = t.normalizedFormatStore.state,
                                n = null == (o = t.collectionViewStore()) ? void 0 : o.getType();
                            if ("board" === n) return (0, i(565546).zl)(r.board_cover);
                            if ("gallery" === n) return (0, i(565546).zl)(r.gallery_cover);
                            if ("timeline" === n)
                                if ("timeline_table_properties" === e) return !0;
                                else return (0, i(565546).w3)(!!r.timeline_show_table, r.timeline_table_properties || []);
                            return !1
                        }(e, h)), [M, e, h, t]),
                        [I, P] = r.useState(!1),
                        [V, B] = r.useState(!1),
                        F = (0, r.useCallback)(() => {
                            P(!0)
                        }, []),
                        O = (0, r.useCallback)(() => {
                            P(!1), B(!1)
                        }, []),
                        K = (0, r.useCallback)(() => {
                            B(!0)
                        }, []),
                        z = (0, r.useCallback)(() => {
                            B(!1), P(!1),
                                function(e, t, o, r) {
                                    let {
                                        formatKey: n,
                                        propertyFormat: l
                                    } = e, a = o.collectionViewStore();
                                    if (!a) return;
                                    let s = a.getPropertyFormatsStore(n),
                                        d = null == s ? void 0 : s.getValue();
                                    if (!s || !d) return;
                                    let c = d.findIndex(e => e.property === l.property);
                                    if (-1 === c) return;
                                    let u = "full_line" === (0, i(565546).j0)({
                                            propertyFormat: l,
                                            propertySchema: r
                                        }) ? "inline" : "full_line",
                                        p = { ...l,
                                            card_property_width_mode: u
                                        },
                                        g = [...d];
                                    g[c] = p;
                                    let y = a.getSpaceId();
                                    (0, i(377796).createAndCommit)({
                                        userAction: "CollectionSettingsViewProperties.handleTogglePropertyWidth",
                                        environment: t,
                                        cellTarget: y ? {
                                            spaceWithId: y
                                        } : void 0,
                                        canUndo: !0,
                                        perform: e => {
                                            (0, i(368198).K)({
                                                store: s,
                                                value: g,
                                                transaction: e
                                            })
                                        }
                                    }), (0, i(893783).X)({
                                        environment: t,
                                        collectionContextStore: o,
                                        action: "toggle_card_property_width",
                                        card_property_width_mode: u,
                                        property_type: r.type
                                    })
                                }({
                                    formatKey: e,
                                    propertyFormat: t
                                }, f, h, o)
                        }, [e, t, f, h, o]),
                        E = (0, i(960253).I)(() => ({
                            titleStyle: {
                                marginInlineStart: !C || a.allowEditProperties || w ? void 0 : -4
                            },
                            titleSpan: {
                                marginInlineStart: C ? 8 : 10,
                                ...i(699422).RC
                            },
                            hoveredStyle: V ? {
                                background: i(632079).Tj.buttonPressedBackground
                            } : {
                                background: i(632079).Tj.buttonHoveredBackground
                            }
                        }), [C, a.allowEditProperties, w, V]),
                        D = function({
                            propertyType: e,
                            propertyIcon: t,
                            propertyId: o,
                            shouldShowDragHandleOnHover: l,
                            isHovering: a,
                            allowsDragging: s,
                            allowEditProperties: d,
                            collectionContextStore: c,
                            onMouseMove: p,
                            onMouseLeave: g
                        }) {
                            let y = (0, i(960253).e)(),
                                m = (0, i(682985).K8)(() => (0, i(887779).b)({
                                    collectionContextStore: c,
                                    propertyId: o
                                }), [c, o]),
                                S = (0, r.useMemo)(() => m ? (0, n.jsx)(i(362301).B, {
                                    propertyId: o,
                                    type: e,
                                    icon: t,
                                    size: i(104509).Ev.sm,
                                    theme: i(632079).Tj,
                                    themeMode: y,
                                    style: {
                                        icon: u.icon,
                                        container: u.container
                                    }
                                }) : (0, n.jsx)(i(221535).zB, {
                                    type: e,
                                    icon: t,
                                    size: i(104509).Ev.sm,
                                    theme: i(632079).Tj,
                                    themeMode: y,
                                    style: u.propertyIcon
                                }), [m, o, e, t, y]);
                            return s ? l ? (0, n.jsxs)("div", {
                                style: u.animationContainer,
                                children: [(0, n.jsx)(i(654979).A, {
                                    animate: {
                                        opacity: +!a
                                    },
                                    initial: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 1
                                    },
                                    style: u.animatedBaseIconStyle,
                                    children: S
                                }), (0, n.jsx)(i(654979).A, {
                                    animate: {
                                        opacity: +!!a
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    style: u.animatedDragHandleStyle,
                                    onMouseMove: p,
                                    onMouseLeave: g,
                                    children: (0, n.jsx)(i(544954).t, {})
                                })]
                            }) : (0, n.jsxs)(i(4458).fI, {
                                alignItems: "center",
                                children: [d ? (0, n.jsx)(i(544954).t, {
                                    wrapperStyle: u.dragHandle
                                }) : (0, n.jsx)(i(633418).j, {
                                    style: u.dragHandle,
                                    disableTooltip: !0
                                }), S]
                            }) : S
                        }({
                            propertyType: o.type,
                            propertyIcon: o.icon,
                            propertyId: t.property,
                            shouldShowDragHandleOnHover: w,
                            isHovering: I,
                            allowsDragging: C,
                            allowEditProperties: a.allowEditProperties,
                            collectionContextStore: h,
                            onMouseMove: F,
                            onMouseLeave: O
                        }),
                        L = (0, i(9247).YE)(o),
                        {
                            shouldShowLegacyAutofill: W
                        } = (0, i(251955).D)({
                            aiInference: L
                        }),
                        $ = (0, n.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            children: [D, (0, n.jsx)("span", {
                                style: E.titleSpan,
                                children: o.name
                            }), v && "person" === o.type ? (0, n.jsx)("div", {
                                style: p.propertyPermissionBadge,
                                children: (0, n.jsx)(i(276345).$, {
                                    collectionStore: v,
                                    property: t.property,
                                    propertySchema: o,
                                    blockStore: void 0
                                })
                            }) : void 0, (0, i(9247).$M)(o) && (0, i(9247).om)(o) && W ? (0, n.jsx)("div", {
                                style: p.aiBadge,
                                children: (0, n.jsx)(i(350450).A, {})
                            }) : void 0]
                        }),
                        G = (0, i(565546).j0)({
                            propertyFormat: t,
                            propertySchema: o
                        }),
                        R = !t.visible;
                    return "width" === a.toggleType ? (0, n.jsx)(i(296060).A, { ...(0, i(63390).A)(y, m),
                        titleStyle: E.titleStyle,
                        disabled: !b || "title" === t.property,
                        title: $,
                        on: "title" === t.property || "full_line" === G,
                        focused: I || V,
                        hoveredStyle: E.hoveredStyle,
                        ignoreLocalHoverState: !0,
                        onClick: () => {
                            z()
                        },
                        onMouseDown: K,
                        onMouseMove: F,
                        onMouseLeave: O
                    }) : (0, n.jsx)(i(95582).A, { ...(0, i(63390).A)(y, m),
                        titleStyle: E.titleStyle,
                        title: $,
                        right: (0, n.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            children: ["visibility" === a.toggleType ? (0, n.jsx)(i(374533).A, {
                                icon: R ? i(349608).M : i(399225).eyeFillSmallIcon,
                                iconStyle: p.eyeIcon,
                                colorVariant: R ? "secondary" : "primary",
                                onClick: () => {
                                    ! function(e, t, o, r) {
                                        var n;
                                        let {
                                            formatKey: l,
                                            propertyFormat: a
                                        } = e, s = o.collectionViewStore();
                                        if (!s) return;
                                        let d = o.normalizedFormatStore.state,
                                            c = (d[l] || []).filter(e => e.property !== a.property),
                                            u = { ...a,
                                                visible: !a.visible
                                            },
                                            p = c.filter(e => e.visible),
                                            g = c.filter(e => !e.visible),
                                            y = [];
                                        y = T.includes(l) ? !0 === u.visible ? [...A([...p, u]), ...A(g)] : [...A(p), ...A([u, ...g])] : [...p, u, ...g];
                                        let m = { ...d,
                                                [l]: y
                                            },
                                            S = s.getSpaceId();
                                        (0, i(377796).createAndCommit)({
                                            userAction: "CollectionSettingsViewProperties.handleTogglePropertyVisibility",
                                            environment: t,
                                            cellTarget: S ? {
                                                spaceWithId: S
                                            } : void 0,
                                            canUndo: !0,
                                            perform: e => {
                                                (0, i(548709).F)({
                                                    collectionViewStore: s,
                                                    update: {
                                                        format: m
                                                    },
                                                    transaction: e
                                                })
                                            }
                                        }), (0, i(893783).X)({
                                            environment: t,
                                            collectionContextStore: o,
                                            action: "toggle_property_visibility",
                                            original_view_type: s.getType(),
                                            property_type: null == (n = s.getCollectionStore()) || null == (n = n.getSchema()[u.property]) ? void 0 : n.type
                                        }), j(r)
                                    }({
                                        formatKey: e,
                                        propertyFormat: t
                                    }, f, h, s)
                                },
                                ariaLabel: S.formatMessage(l.togglePropertyVisibilityAriaLabel),
                                disabled: !k || !b
                            }) : void 0, c ? (0, n.jsx)(i(16275).I, {
                                icon: i(491469).arrowChevronSingleRightSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary",
                                style: p.chevronIcon
                            }) : void 0]
                        }),
                        disabled: !(c && g),
                        disabledFeedback: !g
                    })
                }),
                y = {
                    opacity: 1
                };

            function m(e) {
                let {
                    collectionContextStore: t,
                    onClick: o
                } = e, r = (0, i(533992).v3)(), l = !!(0, i(682985).O$)(t.normalizedFormatStore).timeline_show_table, a = (0, i(845001).x)(t.capabilitiesStore, t.permissionScopesStore);
                return (0, n.jsx)(i(296060).A, {
                    title: (0, n.jsx)(i(109939).sA, {
                        defaultMessage: "Show table",
                        id: "database.viewSettings.propertiesTab.showTable"
                    }),
                    on: l,
                    focused: !1,
                    onClick: () => {
                        let e = t.collectionViewStore();
                        if (!e) return;
                        let n = e.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "CollectionSettingsViewProperties.TimelineShowTableSwitcher",
                            environment: r,
                            cellTarget: n ? {
                                spaceWithId: n
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, i(715144).z)({
                                    stores: [e],
                                    update: {
                                        timeline_show_table: !l,
                                        timeline_table_properties: [{
                                            property: "name",
                                            visible: !0
                                        }]
                                    },
                                    transaction: t
                                })
                            }
                        }), null == o || o(), (0, i(893783).X)({
                            environment: r,
                            collectionContextStore: t,
                            action: "timeline_toggle_show_table"
                        })
                    },
                    disabled: !a,
                    textWrapperStyle: y
                })
            }
            let S = function({
                collectionContextStore: e,
                timelineViewTab: t,
                collectionSettingsStore: o,
                propertiesMenuType: r
            }) {
                let s = (0, i(109939).tz)(),
                    d = (0, i(533992).v3)(),
                    u = (0, i(682985).uB)(void 0, i(419110).$),
                    p = (0, i(682985).uB)(void 0, a),
                    g = (0, i(682985).O$)(p),
                    y = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = e.collectionViewStore()) ? void 0 : t.getType()
                    }, [e]),
                    m = (0, i(682985).K8)(() => {
                        if (y) return "timeline" === y ? (0, i(874297).F)({
                            timelineViewTab: t,
                            timelineShowTable: !!e.normalizedFormatStore.state.timeline_show_table
                        }) : (0, i(565546).u9)(y)
                    }, [t, y, e]),
                    S = (0, i(682985).K8)(() => (0, i(861716).DG)({
                        environment: d,
                        isFullScreen: e.isFullScreenStore.state,
                        isRootChild: e.isRootChildStore.state
                    }), [d, e]),
                    f = c(r);
                return (0, n.jsxs)(i(669).A, {
                    collectionSettingsStore: o,
                    title: f.customTitle,
                    header: f.customHeader ? ? (0, n.jsx)(i(844565).A, {
                        children: (0, n.jsx)(i(310324).Ay, {
                            focusInitial: !i(986939).A.isMobile,
                            value: g,
                            showClearButton: !0,
                            onChange: e => {
                                p.setState(e.target.value), u.setState({ ...u.state,
                                    focus: {
                                        section: 0,
                                        indexLocal: 0,
                                        indexGlobal: 0,
                                        footerFocused: !1
                                    }
                                })
                            },
                            placeholder: s.formatMessage(l.inputPlaceholder)
                        })
                    }),
                    footer: (0, n.jsx)(b, {
                        collectionContextStore: e,
                        collectionSettingsStore: o,
                        propertiesMenuType: r,
                        timelineViewTab: t
                    }),
                    children: [f.allowTimelineControls && "timeline" === y && S ? (0, n.jsx)(k, {
                        collectionSettingsStore: o,
                        collectionContextStore: e,
                        timelineViewTab: t,
                        inputStore: p,
                        propertiesMenuType: r
                    }) : void 0, m ? (0, n.jsx)(E, {
                        collectionContextStore: e,
                        collectionSettingsStore: o,
                        inputStore: p,
                        menuListStore: u,
                        formatKey: m,
                        propertiesMenuType: r
                    }) : void 0]
                })
            };

            function f({
                viewType: e
            }) {
                if ("table" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Shown in table",
                    id: "database.viewSettings.propertiesTab.shownInTableTitle"
                });
                if ("timeline" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Shown in timeline",
                    id: "database.viewSettings.propertiesTab.shownInTimelineTitle"
                });
                if ("board" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Shown in board",
                    id: "database.viewSettings.propertiesTab.shownInBoardTitle"
                });
                if ("list" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Shown in list",
                    id: "database.viewSettings.propertiesTab.shownInListTitle"
                });
                if ("gallery" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Shown in gallery",
                    id: "database.viewSettings.propertiesTab.shownInGalleryTitle"
                });
                else if ("calendar" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Shown in calendar",
                    id: "database.viewSettings.propertiesTab.shownInCalendarTitle"
                });
                else if ("map" === e) return null;
                else if ("page" === e) return null;
                else if ("chart" === e) return null;
                else if ("form_editor" === e) return null;
                else if ("feed" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Shown in feed",
                    id: "database.viewSettings.propertiesTab.shownInFeedTitle"
                });
                else if ("chat" === e) return null;
                else if ("custom" === e) return null;
                else if ("dashboard" === e) return null;
                else if ("teamspace_directory" === e) return null;
                else if ("library_external_pages" === e) return null;
                else if ("agents" === e) return null;
                (0, i(722371).HB)(e)
            }

            function h({
                viewType: e
            }) {
                if ("table" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Hidden in table",
                    id: "database.viewSettings.propertiesTab.hiddenInTableTitle"
                });
                if ("timeline" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Hidden in timeline",
                    id: "database.viewSettings.propertiesTab.hiddenInTimelineTitle"
                });
                if ("board" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Hidden in board",
                    id: "database.viewSettings.propertiesTab.hiddenInBoardTitle"
                });
                if ("list" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Hidden in list",
                    id: "database.viewSettings.propertiesTab.hiddenInListTitle"
                });
                if ("gallery" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Hidden in gallery",
                    id: "database.viewSettings.propertiesTab.hiddenInGalleryTitle"
                });
                else if ("calendar" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Hidden in calendar",
                    id: "database.viewSettings.propertiesTab.hiddenInCalendarTitle"
                });
                else if ("map" === e) return null;
                else if ("page" === e) return null;
                else if ("chart" === e) return null;
                else if ("form_editor" === e) return null;
                else if ("feed" === e) return (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Hidden in feed",
                    id: "database.viewSettings.propertiesTab.hiddenInFeedTitle"
                });
                else if ("chat" === e) return null;
                else if ("custom" === e) return null;
                else if ("dashboard" === e) return null;
                else if ("teamspace_directory" === e) return null;
                else if ("library_external_pages" === e) return null;
                else if ("agents" === e) return null;
                (0, i(722371).HB)(e)
            }

            function v(e, t, o) {
                let {
                    formatKey: r,
                    visibility: n
                } = e, l = t.collectionViewStore();
                if (!l) return;
                let a = t.normalizedFormatStore.state[r] || [],
                    s = a.filter(e => !!e.visible),
                    d = a.filter(e => !e.visible);
                T.includes(r) && (s = A(s), d = A(d));
                let c = [...s.map(e => ({ ...e,
                        visible: n
                    })), ...d.map(e => ({ ...e,
                        visible: n
                    }))],
                    u = l.getSpaceId();
                (0, i(377796).createAndCommit)({
                    userAction: "CollectionSettingsViewProperties.setAllPropertiesVisibility",
                    environment: o,
                    cellTarget: u ? {
                        spaceWithId: u
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, i(715144).z)({
                            stores: [l],
                            update: {
                                [r]: c
                            },
                            transaction: e
                        })
                    }
                })
            }

            function b({
                collectionContextStore: e,
                collectionSettingsStore: t,
                propertiesMenuType: o,
                timelineViewTab: l
            }) {
                let a = c(o),
                    s = (0, i(533992).v3)(),
                    d = (0, i(682985).K8)(() => {
                        var t;
                        let o = (0, i(396711).x)(e.getViewType()),
                            r = (null == (t = e.collectionViewStore()) ? void 0 : t.getCardLayoutMode()) === "compact";
                        return "visibility" === a.toggleType && o && r
                    }, [e, a.toggleType]),
                    u = "width" === a.toggleType,
                    p = (0, r.useCallback)(() => {
                        (0, i(927983).d)({
                            collectionSettingsStore: t,
                            item: {
                                type: "compactCardSettings",
                                timelineViewTab: l
                            }
                        }), (0, i(893783).X)({
                            environment: s,
                            collectionContextStore: e,
                            action: "click_compact_card_settings",
                            from: "property_visibility_menu"
                        })
                    }, [t, l, s, e]),
                    g = (0, r.useCallback)(() => {
                        (0, i(927983).d)({
                            collectionSettingsStore: t,
                            item: {
                                type: "propertyVisibility",
                                timelineViewTab: l
                            }
                        }), (0, i(893783).X)({
                            environment: s,
                            collectionContextStore: e,
                            action: "click_show_hide_properties",
                            from: "compact_card_settings_menu"
                        })
                    }, [t, l, s, e]);
                return a.allowEditProperties ? (0, n.jsx)(w, {
                    collectionContextStore: e,
                    collectionSettingsStore: t,
                    propertiesMenuType: o,
                    timelineViewTab: l
                }) : d ? (0, n.jsx)(i(844565).A, {
                    topBorder: !0,
                    extraPadding: !0,
                    children: (0, n.jsx)(i(209572).A, {
                        icon: i(927099).I,
                        title: (0, n.jsx)(i(109939).sA, {
                            id: "database.viewSettings.propertiesTab.styleProperties",
                            defaultMessage: "Style properties"
                        }),
                        isGray: !0,
                        onClick: p
                    })
                }) : u ? (0, n.jsx)(i(844565).A, {
                    topBorder: !0,
                    extraPadding: !0,
                    children: (0, n.jsx)(i(209572).A, {
                        icon: i(152208).eyeIcon,
                        title: (0, n.jsx)(i(109939).sA, {
                            id: "database.viewSettings.propertiesTab.showProperties",
                            defaultMessage: "Show properties"
                        }),
                        isGray: !0,
                        onClick: g
                    })
                }) : null
            }

            function w({
                collectionContextStore: e,
                collectionSettingsStore: t,
                propertiesMenuType: o,
                timelineViewTab: l
            }) {
                let a = (0, i(533992).v3)(),
                    s = (0, i(682985).O$)(e.permissionScopesStore),
                    d = (0, i(682985).K8)(() => {
                        var t;
                        return (null == (t = e.collectionViewStore()) ? void 0 : t.getType()) === "timeline" && "table" === l && !e.normalizedFormatStore.state.timeline_show_table
                    }, [e, l]),
                    u = (0, i(682985).K8)(() => {
                        let t = e.collectionViewBlockStore();
                        return t && (0, i(933062).Nh)(t.id)
                    }, [e]),
                    p = (0, i(83208).X)("jira_notion_only_properties"),
                    g = s.canConfigureCollection && !d && (!s.isExternallyImportedAndSyncedCollection || p) && !u,
                    y = (0, r.useCallback)(() => {
                        (0, i(505693).c)({
                            environment: a,
                            collectionContextStore: e
                        })
                    }, [a, e]),
                    m = (0, i(682985).O$)(e.isInHomeWidgetStore),
                    S = c(o);
                return (0, n.jsxs)(i(844565).A, {
                    topBorder: !0,
                    extraPadding: !0,
                    children: [g ? (0, n.jsx)(i(209572).A, {
                        icon: i(581923).plusIcon,
                        title: (0, n.jsx)(i(109939).sA, {
                            id: "database.viewSettings.propertiesTab.newProperty",
                            defaultMessage: "New property"
                        }),
                        isGray: !0,
                        onClick: y
                    }) : void 0, !m && S.allowEditProperties ? (0, n.jsx)(x, {
                        collectionContextStore: e,
                        collectionSettingsStore: t,
                        timelineViewTab: l
                    }) : void 0, (0, n.jsx)(i(725843).A, {
                        href: (0, i(442564).x)("guides.databaseProperties"),
                        title: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Learn about properties",
                            id: "database.viewSettings.propertiesTab.learnMoreButton.title"
                        }),
                        analyticsFrom: "view_settings_properties"
                    })]
                })
            }

            function x({
                collectionContextStore: e,
                collectionSettingsStore: t,
                timelineViewTab: o
            }) {
                let r = (0, i(533992).v3)(),
                    l = Object.keys((0, i(682985).O$)(e.normalizedDeletedSchemaStore)).length;
                return (0, i(682985).O$)(e.permissionScopesStore).canConfigureCollection && l > 0 ? (0, n.jsx)(i(209572).A, {
                    icon: i(968411).trashIcon,
                    title: (0, n.jsx)(i(109939).sA, {
                        id: "database.viewSettings.propertiesTab.deletedProperties",
                        defaultMessage: "Deleted properties"
                    }),
                    isGray: !0,
                    onClick: () => {
                        e.collectionStore() && ((0, i(893783).X)({
                            environment: r,
                            collectionContextStore: e,
                            action: "click_deleted_properties"
                        }), (0, i(76790).a)({
                            collectionSettingsStore: t,
                            item: {
                                type: "deletedProperties",
                                timelineViewTab: o
                            }
                        }))
                    },
                    right: l,
                    showChevron: !0
                }) : null
            }

            function _(e) {
                let {
                    collectionContextStore: t,
                    inputStore: o,
                    propertiesMenuType: r,
                    isFixMobileDragConflictEnabled: n
                } = e, l = o.state;
                return c(r).allowEditOrder && (n || !i(986939).A.isMobile) && (0, i(845001).q)(t.capabilitiesStore, t.permissionScopesStore) && !l
            }

            function j(e) {
                e.reset()
            }
            let T = ["board_properties", "gallery_properties", "calendar_properties"];

            function A(e) {
                let t = e.find(e => "title" === e.property);
                return t ? [t, ...e.filter(e => "title" !== e.property)] : e
            }
            let C = {
                style0: {
                    color: i(632079).Tj.text.inverseSecondary
                }
            };

            function M(e, t, o, r, l, a, s, d) {
                let {
                    formatKey: u,
                    properties: p
                } = e;
                return i(381453).oE(p.map(e => (function(e, t, o, r, l, a, s) {
                    var d;
                    let {
                        formatKey: u,
                        propertyFormat: p
                    } = e, y = o.permissionScopesStore.state, m = o.normalizedSchemaStore.state, S = (0, i(561872)._g)({
                        schema: m,
                        property: p.property
                    }), f = c(a), h = !S || !(0, i(9247).sl)(S), v = f.allowEditProperties && (0, i(554520).K)({
                        collectionContextStore: o,
                        permissionScopes: y
                    }) && (0, i(23803).RL)({
                        isExternallyImportedAndSyncedCollection: y.isExternallyImportedAndSyncedCollection,
                        propertyId: p.property,
                        collectionStore: o.collectionStore(),
                        propertySchema: S
                    }) && h;
                    if (y.isSyncedCollection && ((0, i(235089).u)(p.property) || (0, i(9247).cC)(p.property)) && (v = !1), !S) return;
                    let b = !(s && (0, i(260682).$)({
                            propertyType: null == S ? void 0 : S.type,
                            propertySchema: S,
                            allowAIProperty: !1
                        })),
                        w = !b || (null == (d = S.description) ? void 0 : d.length);
                    return {
                        key: p.property,
                        render: e => (0, n.jsx)(i(51831).m, {
                            disableTooltip: !w,
                            content: e => (0, n.jsx)("div", { ...e,
                                style: i(689266).Q$,
                                children: b ? (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("div", {
                                        children: S.name
                                    }), (0, n.jsx)("div", {
                                        style: C.style0,
                                        children: S.description
                                    })]
                                }) : (0, n.jsx)(i(109939).sA, {
                                    id: "collectionSettings.editProperty.offlineTooltip",
                                    defaultMessage: "Go online to edit property"
                                })
                            }),
                            placement: "left",
                            children: t => (0, n.jsx)(g, {
                                formatKey: u,
                                propertyFormat: p,
                                propertySchema: S,
                                menuConfig: f,
                                inputStore: l,
                                propertiesMenuType: a,
                                canEditProperty: v,
                                canEditPropertyOffline: b,
                                baseMenuItemProps: e,
                                tooltipEvents: t
                            })
                        }),
                        action: () => {
                            v && b && function(e, t, o, r) {
                                var n, l, a;
                                let s = (null == (n = r.collectionStore()) ? void 0 : n.getSchema()) || r.normalizedSchemaStore.state || {},
                                    {
                                        formatKey: d,
                                        propertyFormat: c
                                    } = e;
                                (0, i(893783).X)({
                                    environment: t,
                                    collectionContextStore: r,
                                    action: "click_property",
                                    original_view_type: null == r || null == (l = r.collectionViewStore()) ? void 0 : l.getType(),
                                    property_type: null == (a = s[c.property]) ? void 0 : a.type
                                }), (0, i(76790).a)({
                                    collectionSettingsStore: o,
                                    item: {
                                        type: "property",
                                        formatKey: d,
                                        property: c.property
                                    }
                                })
                            }({
                                formatKey: u,
                                propertyFormat: p
                            }, t, r, o)
                        }
                    }
                })({
                    formatKey: u,
                    propertyFormat: e
                }, t, o, l, a, s, d)))
            }

            function k({
                collectionSettingsStore: e,
                collectionContextStore: t,
                timelineViewTab: o,
                inputStore: l,
                propertiesMenuType: a
            }) {
                let s = (0, i(533992).v3)(),
                    d = (0, r.useCallback)(() => {
                        j(l)
                    }, [l]),
                    c = (0, r.useCallback)(o => {
                        (0, i(893783).X)({
                            environment: s,
                            collectionContextStore: t,
                            action: 0 === o ? "click_properties_tab_timeline" : "click_properties_tab_table"
                        }), (0, i(927983).d)({
                            collectionSettingsStore: e,
                            item: {
                                type: "editVisibilityAndOrder" === a ? "propertyVisibility" : "properties",
                                timelineViewTab: 0 === o ? "timeline" : "table"
                            }
                        }), j(l)
                    }, [s, e, t, l, a]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i(540336).LZ, {
                        tabs: [(0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Timeline",
                            id: "database.viewSettings.propertiesTab.timelineProperties"
                        }, "database.viewSettings.propertiesTab.timelineProperties"), (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Table",
                            id: "database.viewSettings.propertiesTab.tableProperties"
                        }, "database.viewSettings.propertiesTab.tableProperties")],
                        selectedIndex: +("timeline" !== o),
                        onChange: c
                    }), "table" === o ? (0, n.jsx)(i(844565).A, {
                        extraPadding: !0,
                        children: (0, n.jsx)(m, {
                            collectionContextStore: t,
                            onClick: d
                        })
                    }) : void 0]
                })
            }
            let I = {
                    height: 19,
                    padding: "0 4px",
                    marginBottom: 4
                },
                P = {
                    paddingInlineStart: 0,
                    paddingInlineEnd: 0
                },
                V = {
                    fontSize: 12,
                    height: "initial",
                    paddingTop: 2,
                    paddingBottom: 2
                },
                B = {
                    width: "100%",
                    paddingBottom: 0
                };

            function F(e) {
                let t = (0, i(533992).v3)(),
                    {
                        props: o,
                        formatKey: r,
                        children: l,
                        collectionContextStore: a,
                        inputStore: s
                    } = e,
                    d = (0, i(682985).O$)(a.canConfigureBlockStore),
                    c = (0, i(682985).O$)(s),
                    u = (0, i(682985).K8)(() => {
                        var e;
                        return "timeline_table_properties" === r ? "table" : null == (e = a.collectionViewStore()) ? void 0 : e.getType()
                    }, [a, r]);
                return (0, n.jsx)(i(844565).A, { ...o,
                    noTextOverflow: !0,
                    title: u ? (0, n.jsx)(h, {
                        viewType: u
                    }) : null,
                    desktopTitleStyle: I,
                    mobileTitleStyle: P,
                    right: !c && d && (0, n.jsx)(i(988022).p, {
                        size: "sm",
                        shouldShrink: !0,
                        colorPalette: "blue",
                        style: V,
                        onClick: () => {
                            (0, i(893783).X)({
                                environment: t,
                                collectionContextStore: a,
                                action: "click_show_all_properties"
                            }), v({
                                formatKey: r,
                                visibility: !0
                            }, a, t)
                        },
                        children: (0, n.jsx)(i(109939).sA, {
                            id: "database.viewSettings.propertiesTab.showAllProperties",
                            defaultMessage: "Show all"
                        })
                    }),
                    style: B,
                    children: l
                })
            }

            function O(e) {
                let {
                    formatKey: t,
                    visibleProperties: o,
                    hiddenProperties: r,
                    children: l,
                    collectionContextStore: a,
                    inputStore: s,
                    menuListStore: d,
                    propertiesMenuType: c
                } = e, u = (0, i(533992).v3)(), p = (0, i(83208).X)("fix_mobile_drag_conflict"), g = i(381453).oE([...o.map(e => "title" === e.property && T.includes(t) ? {
                    key: e.property,
                    draggable: !1
                } : e.property), o.length > 0 && r.length > 0 && {
                    key: "group-header-hidden-property",
                    draggable: !1
                }, ...r.map(e => "title" === e.property && T.includes(t) ? {
                    key: e.property,
                    draggable: !1
                } : e.property)]), y = g.findIndex(e => "string" == typeof e ? "title" === e : "title" === e.key);
                return (0, i(682985).K8)(() => _({
                    collectionContextStore: a,
                    inputStore: s,
                    propertiesMenuType: c,
                    isFixMobileDragConflictEnabled: p
                }), [a, s, c, p]) ? (0, n.jsx)(i(66467).Ay, {
                    direction: "vertical",
                    keys: g,
                    shouldAnimateDrop: !0,
                    touchDragDelay: p ? 200 : void 0,
                    getInvalidDropIndices: -1 === y ? void 0 : () => new Set([y]),
                    renderKey: (e, t) => l[t],
                    onDrop: (e, o) => {
                        ! function(e, t, o, r) {
                            let {
                                formatKey: n,
                                newPropertyKeys: l
                            } = e, a = o.collectionViewStore();
                            if (!a) return;
                            let s = o.normalizedFormatStore.state[n] || [],
                                d = l.indexOf("group-header-hidden-property"),
                                c = i(381453).oE(l.filter(e => !e.startsWith("group-header-")).map((e, t) => {
                                    let i = s.find(t => t.property === e);
                                    if (i) return d >= 0 ? { ...i,
                                        visible: t < d
                                    } : i
                                })),
                                u = s.filter(e => !l.includes(e.property));
                            T.includes(n) && (c = A(c), u = A(u));
                            let p = [...c, ...u],
                                g = a.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: "CollectionSettingsViewProperties.handlePropertyReorder",
                                environment: t,
                                cellTarget: g ? {
                                    spaceWithId: g
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, i(715144).z)({
                                        stores: [a],
                                        update: {
                                            [n]: p
                                        },
                                        transaction: e
                                    })
                                }
                            }), (0, i(893783).X)({
                                environment: t,
                                collectionContextStore: o,
                                action: "reorder_properties",
                                original_view_type: a.getType()
                            }), r.reset()
                        }({
                            formatKey: t,
                            newPropertyKeys: e
                        }, u, a, d)
                    }
                }) : (0, n.jsx)(n.Fragment, {
                    children: l
                })
            }
            let K = {
                    height: 19,
                    marginBottom: 4
                },
                z = {
                    fontSize: 12,
                    height: "initial",
                    paddingTop: 2,
                    paddingBottom: 2
                };

            function E({
                formatKey: e,
                collectionContextStore: t,
                collectionSettingsStore: l,
                inputStore: a,
                menuListStore: s,
                propertiesMenuType: d
            }) {
                let u = (0, i(533992).v3)(),
                    p = (0, i(682985).O$)(t.canConfigureBlockStore),
                    g = (0, i(682985).O$)(t.normalizedFormatStore),
                    y = (0, i(682985).O$)(t.normalizedSchemaStore),
                    m = (0, i(682985).O$)(a),
                    S = !(0, i(682985).O$)(i(205885).e),
                    h = (0, i(682985).K8)(() => t.collectionStore(), [t]),
                    b = (0, i(682985).K8)(() => (g[e] || []).map(e => ({
                        propertyFormat: e,
                        propertySchema: (0, i(561872)._g)({
                            schema: y,
                            property: e.property
                        })
                    })), [g, y, e]);
                b = b.filter(({
                    propertySchema: e
                }) => !(null != e && e.hide_in_property_list)), m && (b = b.filter(({
                    propertySchema: e
                }) => !!(e && e.name && o().test(m, e.name))));
                let w = b.map(({
                        propertyFormat: e
                    }) => e),
                    x = w.filter(e => !!e.visible),
                    _ = c(d),
                    j = "visibility" === _.toggleType,
                    T = (0, r.useMemo)(() => j || _.allowEditProperties ? w.filter(e => !e.visible) : [], [w, j, _]),
                    A = (0, i(682985).K8)(() => {
                        var i;
                        return "timeline_table_properties" === e ? "table" : null == (i = t.collectionViewStore()) ? void 0 : i.getType()
                    }, [t, e]),
                    C = (0, i(682985).K8)(() => M({
                        formatKey: e,
                        properties: x
                    }, u, t, h, l, a, d, S), [e, x, d, u, t, h, l, a, S]),
                    k = (0, i(682985).K8)(() => M({
                        formatKey: e,
                        properties: T
                    }, u, t, h, l, a, d, S), [e, T, d, u, t, h, l, a, S]),
                    I = (0, r.useMemo)(() => {
                        switch (_.toggleType) {
                            case "visibility":
                                return A ? (0, n.jsx)(f, {
                                    viewType: A
                                }) : null;
                            case "width":
                                return (0, n.jsx)(i(109939).sA, {
                                    defaultMessage: "Full line display",
                                    id: "database.viewSettings.propertiesTab.fullLineDisplay"
                                });
                            default:
                                return null
                        }
                    }, [_.toggleType, A]);
                return 0 === b.length ? (0, n.jsx)(i(844565).A, {
                    extraPadding: !0,
                    children: (0, n.jsx)(i(320819).A, {
                        caption: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "No results",
                            id: "database.viewSettings.propertiesTab.noResults"
                        })
                    })
                }) : 0 === x.length && "width" === _.toggleType ? (0, n.jsx)(i(844565).A, {
                    extraPadding: !0,
                    children: (0, n.jsx)(i(320819).A, {
                        caption: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "No properties shown",
                            id: "database.viewSettings.propertiesTab.noPropertiesToDisplay"
                        })
                    })
                }) : (0, n.jsx)(i(558045).A, {
                    type: i(558045).O.Vertical,
                    store: s,
                    initialFocus: void 0,
                    resetFocusOnMouseOut: !0,
                    sections: i(381453).oE([x.length > 0 && {
                        key: "visible_and_hidden_properties",
                        render: o => (0, n.jsx)(i(844565).A, { ...o,
                            extraPadding: !0,
                            noTextOverflow: !0,
                            title: I,
                            desktopTitleStyle: K,
                            right: !m && p && j && (0, n.jsx)(i(988022).p, {
                                size: "sm",
                                shouldShrink: !0,
                                colorPalette: "blue",
                                style: z,
                                onClick: () => {
                                    (0, i(893783).X)({
                                        environment: u,
                                        collectionContextStore: t,
                                        action: "click_hide_all_properties"
                                    }), v({
                                        formatKey: e,
                                        visibility: !1
                                    }, t, u)
                                },
                                children: (0, n.jsx)(i(109939).sA, {
                                    id: "database.viewSettings.propertiesTab.hideAllProperties",
                                    defaultMessage: "Hide all"
                                })
                            }),
                            children: (0, n.jsx)(O, {
                                collectionContextStore: t,
                                inputStore: a,
                                menuListStore: s,
                                formatKey: e,
                                visibleProperties: x,
                                hiddenProperties: T,
                                children: o.children,
                                propertiesMenuType: d
                            })
                        }),
                        items: i(381453).oE([...C, j ? T.length > 0 && {
                            key: "group-header-hidden-property",
                            render: i => (0, n.jsx)(F, {
                                collectionContextStore: t,
                                inputStore: a,
                                props: i,
                                formatKey: e,
                                children: (0, n.jsx)(n.Fragment, {})
                            }),
                            action: () => {}
                        } : void 0, ...k])
                    }, 0 === x.length && T.length > 0 && {
                        key: "hidden_properties",
                        render: i => (0, n.jsx)(F, {
                            collectionContextStore: t,
                            inputStore: a,
                            props: i,
                            formatKey: e,
                            children: (0, n.jsx)(O, {
                                formatKey: e,
                                visibleProperties: x,
                                hiddenProperties: T,
                                children: i.children,
                                collectionContextStore: t,
                                inputStore: a,
                                menuListStore: s,
                                propertiesMenuType: d
                            })
                        }),
                        items: k
                    }])
                })
            }
        },
        725843: (e, t, i) => {
            i.d(t, {
                A: () => r
            }), i(296540);
            var o = i(474848);
            let r = function(e) {
                let {
                    title: t,
                    href: r,
                    analyticsFrom: n
                } = e, l = (0, i(533992).v3)();
                return (0, o.jsx)(i(68774).N, {
                    href: r,
                    onClick: () => (0, i(150782).F)(l, {
                        from: n
                    }),
                    external: !0,
                    children: (0, o.jsx)(i(209572).A, {
                        icon: i(80094).questionMarkCircleIcon,
                        title: t,
                        isGray: !0
                    })
                })
            }
        },
        730714: (e, t, i) => {
            i.d(t, {
                Q: () => p
            });
            var o = i(296540);
            i(898992), i(672577);
            var r = i(474848);
            let n = {
                height: 12,
                width: 12,
                marginInlineEnd: 6
            };

            function l({
                environment: e,
                collectionSettingsStore: t,
                flowId: o,
                externalCollectionType: a,
                integrationIconUrl: s,
                site: d,
                botId: c,
                isSyncOwner: u
            }) {
                return (0, r.jsx)(i(209572).A, {
                    icon: i(466491).E,
                    onClick: () => {
                        (0, i(104310).u)({
                            event: {
                                eventName: "external_sync_sidebar_config",
                                eventProperties: {
                                    integration: a,
                                    actionType: "source_option_click",
                                    flowId: o,
                                    identifier: d,
                                    botId: c,
                                    isSyncOwner: u
                                }
                            }
                        }), (0, i(76790).a)({
                            collectionSettingsStore: t,
                            item: {
                                source: "external_source",
                                type: "externalProjectsSyncSettings"
                            }
                        })
                    },
                    right: (0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        gap: 0,
                        children: [(0, r.jsx)("img", {
                            style: n,
                            src: s,
                            alt: "External integration icon"
                        }), (0, r.jsx)(i(109939).sA, {
                            id: "database.viewSettings.mainTab.source.sourceName",
                            defaultMessage: "{integrationName}",
                            values: {
                                integrationName: (0, i(381453).ZH)(a || "")
                            }
                        })]
                    }),
                    showChevron: !0,
                    title: (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Source",
                        id: "database.viewSettings.mainTab.source.title"
                    })
                })
            }
            let a = {
                style0: {
                    boxShadow: i(978990).p.buttonBlueFocusRing.light,
                    borderRadius: 6
                }
            };

            function s({
                environment: e,
                collectionStore: t,
                collectionSettingsStore: n
            }) {
                let d = function(e, t) {
                        let {
                            botId: o,
                            site: r,
                            externalCollectionType: n,
                            syncState: l
                        } = (0, i(682985).K8)(() => {
                            let e = null == t ? void 0 : t.getFormat();
                            return {
                                botId: null == e ? void 0 : e.bot_id,
                                site: null == e ? void 0 : e.synced_collection_external_url,
                                externalCollectionType: null == e ? void 0 : e.external_collection_type,
                                syncState: null == e ? void 0 : e.sync_state
                            }
                        }, [t]), a = (0, i(682985).K8)(() => {
                            var e;
                            return null == (e = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.seen_jira_sync_source_tooltip
                        }, []), s = (0, i(682985).K8)(() => i(639675).Ay.getFlowId(), []), d = (0, i(682985).K8)(() => (0, i(23803).Sd)(), []), c = (0, i(682985).K8)(() => !!i(610463).A.externalAuthentications.state.find(t => t.id === o && t.user_id === e.currentUser.id), [o, e.currentUser.id]);
                        if (!n) return;
                        let u = {
                            externalCollectionType: n,
                            botId: o,
                            site: r,
                            integrationIconUrl: i(502260).l[n],
                            isSyncOwner: c,
                            flowId: s
                        };
                        switch (n) {
                            case i(565546).uO.Jira:
                                return { ...u,
                                    shouldShowTooltip: d && !0 !== a && l
                                };
                            case i(565546).uO.Salesforce:
                            default:
                                return { ...u,
                                    shouldShowTooltip: !1
                                }
                        }
                    }(e, t),
                    c = (0, o.useRef)(null);
                if (!d) return null;
                let {
                    botId: u,
                    site: p,
                    integrationIconUrl: g,
                    isSyncOwner: y,
                    shouldShowTooltip: m,
                    externalCollectionType: S,
                    flowId: f
                } = d;
                return m ? (0, r.jsxs)("div", {
                    ref: c,
                    style: a.style0,
                    children: [(0, r.jsx)(l, {
                        environment: e,
                        collectionSettingsStore: n,
                        flowId: f,
                        externalCollectionType: S,
                        integrationIconUrl: g,
                        site: p,
                        botId: u,
                        isSyncOwner: y
                    }), (0, r.jsx)(i(553608).C8, {
                        origin: c
                    })]
                }) : (0, r.jsx)(l, {
                    environment: e,
                    collectionSettingsStore: n,
                    flowId: f,
                    externalCollectionType: S,
                    integrationIconUrl: g,
                    site: p,
                    botId: u,
                    isSyncOwner: y
                })
            }
            let d = {
                    marginInlineEnd: 4
                },
                c = {
                    flexShrink: 0
                },
                u = {
                    flexShrink: 1
                };

            function p({
                collectionContextStore: e,
                collectionSettingsStore: t,
                disabled: n,
                overrideOnClickBehavior: l,
                buttonStyle: a,
                forceShow: g,
                ...y
            }) {
                let m = (0, i(533992).v3)(),
                    S = (0, i(109939).tz)(),
                    f = (0, i(682985).K8)(() => e.collectionStore(), [e]),
                    h = (0, i(682985).K8)(() => null == f ? void 0 : f.isExternalSyncedCollection(), [f]),
                    v = (0, i(682985).O$)(e.canConfigureBlockStore),
                    b = (0, i(682985).K8)(() => e.collectionViewBlockStore(), [e]),
                    w = (0, i(682985).K8)(() => (function(e) {
                        let {
                            forceShow: t,
                            forceDisabled: i,
                            hasPermissionToConfigureBlock: o,
                            collectionContextStore: r,
                            intl: n
                        } = e, l = r.collectionStore(), a = r.collectionViewBlockStore();
                        if (!l || !a) return {
                            shouldRender: !1
                        };
                        let s = function(e) {
                            let {
                                forceShow: t,
                                collectionStore: i,
                                collectionViewBlockStore: o
                            } = e;
                            return !!t || !o.isCollectionViewPageWithContent() && (!!i.isSyncedCollection() || !i.isSystemCollection())
                        }({
                            forceShow: t,
                            collectionStore: l,
                            collectionViewBlockStore: a
                        });
                        return s ? {
                            shouldRender: s,
                            ... function(e) {
                                let {
                                    forceDisabled: t,
                                    hasPermissionToConfigureBlock: i,
                                    collectionViewBlockStore: o,
                                    intl: r
                                } = e;
                                return t || !i ? {
                                    isDisabled: !0,
                                    disabledTooltipText: void 0
                                } : o.hasSingleSourceAndNoLinkedCollections() && o.getCollectionViewIds().length <= 1 ? {
                                    isDisabled: !0,
                                    disabledTooltipText: r.formatMessage({
                                        defaultMessage: "Add another view to change the source",
                                        id: "database.viewSettings.mainTab.sourceButton.disabledMessage.singleSourceSingleView"
                                    })
                                } : {
                                    isDisabled: !1
                                }
                            }({
                                forceDisabled: i,
                                hasPermissionToConfigureBlock: o,
                                collectionViewBlockStore: a,
                                intl: n
                            })
                        } : {
                            shouldRender: !1
                        }
                    })({
                        forceShow: g,
                        forceDisabled: n,
                        hasPermissionToConfigureBlock: v,
                        collectionContextStore: e,
                        intl: S
                    }), [e, n, g, v, S]),
                    x = (0, o.useMemo)(() => {
                        if (w.shouldRender && w.isDisabled) return w.disabledTooltipText
                    }, [w]),
                    {
                        collectionIcon: _,
                        isOwnedCollection: j
                    } = (0, i(682985).K8)(() => ({
                        collectionIcon: null == f ? void 0 : f.getIcon(),
                        isOwnedCollection: (null == f ? void 0 : f.getParentId()) === (null == b ? void 0 : b.id)
                    }), [f, b], {
                        equalityFn: i(381453).n4
                    }),
                    T = (0, o.useMemo)(() => {
                        if (!_) return j ? void 0 : (0, r.jsx)(i(16275).I, {
                            icon: i(684668).arrowDiagonalUpRightIcon,
                            size: 18,
                            style: d
                        });
                        let e = {
                            marginInlineEnd: 4,
                            opacity: .6
                        };
                        return j ? (0, r.jsx)(i(569553).B6, {
                            icon: _,
                            iconRecordCategory: "collection",
                            isEmptyPage: !1,
                            size: 20,
                            disabled: !0,
                            style: e
                        }) : (0, r.jsx)("div", {
                            style: e,
                            children: (0, r.jsx)(i(151483).C, {
                                icon: (0, r.jsx)(i(569553).B6, {
                                    icon: _,
                                    iconRecordCategory: "collection",
                                    isEmptyPage: !1,
                                    size: 20,
                                    disabled: !0
                                })
                            })
                        })
                    }, [_, j]);
                return h && f && v ? (0, r.jsx)(s, {
                    environment: m,
                    collectionStore: f,
                    collectionSettingsStore: t
                }) : f && b && w.shouldRender ? (0, r.jsx)(i(51831).m, {
                    placement: "left",
                    disableTooltip: void 0 === x,
                    content: () => x,
                    children: o => (0, r.jsx)(i(209572).A, { ...o,
                        ...y,
                        icon: i(550602).h,
                        title: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "Source",
                            id: "database.viewSettings.mainTab.sourceButton.title"
                        }),
                        showChevron: !0,
                        right: (0, r.jsxs)(r.Fragment, {
                            children: [T, (0, r.jsx)(i(627918).A, {
                                store: f
                            })]
                        }),
                        textWrapperStyle: c,
                        rightStyle: u,
                        disabled: w.isDisabled,
                        buttonStyle: a,
                        onClick: () => {
                            l ? l() : ((0, i(893783).X)({
                                environment: m,
                                collectionContextStore: e,
                                action: "click_source"
                            }), (0, i(76790).a)({
                                collectionSettingsStore: t,
                                item: {
                                    type: "source"
                                }
                            }))
                        }
                    })
                }) : null
            }
        },
        742726: (e, t, i) => {
            i.d(t, {
                z: () => n
            }), i(296540);
            var o = i(474848);
            let r = new(i(815048)).O2("CollectionItemCover", async () => {
                    let {
                        CollectionItemCover: e
                    } = await i.e(79883).then(i.bind(i, 192348));
                    return {
                        CollectionItemCover: e
                    }
                }),
                n = (0, i(815048)._h)(r, e => e.CollectionItemCover, {
                    renderLoading: (e, t) => {
                        let {
                            coverHeight: r,
                            coverSizeFormat: n,
                            emptyGalleryCoverStyle: l,
                            showEmptyGalleryCover: a
                        } = t;
                        return a ? (0, o.jsx)(i(258442).t, {
                            coverHeight: r,
                            coverSizeFormat: n,
                            emptyGalleryCoverStyle: l
                        }) : null
                    }
                })
        },
        813838: (e, t, i) => {
            i.d(t, {
                u: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    collectionContextStore: o
                } = e, r = o.normalizedFormatStore.state, n = r.board_columns_by, l = o.collectionViewStore();
                if (!n || !l) return;
                let a = !(0, i(933047).FS)(r),
                    s = l.pointer.spaceId;
                (0, i(377796).createAndCommit)({
                    userAction: "collectionSettingsActions.handleBoardGroupColorColumnsClick",
                    environment: t,
                    cellTarget: s ? {
                        spaceWithId: s
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, i(715144).z)({
                            stores: [l],
                            update: {
                                board_columns_by: { ...n,
                                    disableBoardColorColumns: a
                                }
                            },
                            transaction: e
                        })
                    }
                }), (0, i(893783).X)({
                    environment: t,
                    collectionContextStore: o,
                    action: "toggle_group_color_columns"
                })
            }
        },
        814491: (e, t, i) => {
            i.d(t, {
                r: () => o
            });

            function o(e) {
                let {
                    dateRangeStart: t,
                    dateRangeEnd: i,
                    collectionContextStore: o
                } = e;
                o.dateRangeStartStore.setState(t), o.dateRangeEndStore.setState(i)
            }
        },
        833311: (e, t, i) => {
            i.d(t, {
                q: () => o
            });

            function o({
                collectionContextStore: e
            }) {
                var t, r;
                let n = (0, i(845001).q)(e.capabilitiesStore, e.permissionScopesStore),
                    l = e.isDashboardWidget(),
                    a = e.collectionViewBlockStore(),
                    s = a && (0, i(933062).Nh)(a.id);
                if (l || s || !n || null != (t = e.previewContextStore.state) && t.hideViewBlockSource) return !1;
                let d = e.isFullScreenStore.state,
                    c = !!(null == a ? void 0 : a.getCollectionPointerIfSingleSource());
                if (d && c || (null == (r = e.viewsModuleContextStore) ? void 0 : r.getViewModuleType()) === "viewsMain") return !1;
                let u = e.collectionViewStore();
                return (null == u ? void 0 : u.getType()) !== "page" || !u || (null == u ? void 0 : u.getFormat().page_pointer) !== void 0
            }
        },
        847754: (e, t, i) => {
            i.d(t, {
                R8: () => n,
                VL: () => r,
                xO: () => o
            });
            let o = 480,
                r = 320,
                n = 6
        },
        933047: (e, t, i) => {
            i.d(t, {
                $e: () => c,
                DF: () => a,
                FS: () => d,
                K0: () => r,
                K3: () => s,
                Qt: () => u,
                Z3: () => S,
                Zl: () => m,
                _T: () => l,
                f0: () => p,
                nc: () => n,
                rA: () => y
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(581454);
            var o = () => i(910675);
            let r = (0, i(109939).YK)({
                unsupportedGroupAction: {
                    id: "collectionGroupHelpers.unsupportedGroupAction",
                    defaultMessage: "Selected group is not available for this task."
                },
                emptyGroupLabel: {
                    id: "database.boardView.uncategorizedColumnTitle",
                    defaultMessage: "No {name}"
                },
                today: {
                    id: "database.collectionGroupValue.dateGroup.today",
                    defaultMessage: "Today"
                },
                yesterday: {
                    id: "database.collectionGroupValue.dateGroup.yesterday",
                    defaultMessage: "Yesterday"
                },
                last_7_days: {
                    id: "database.collectionGroupValue.dateGroup.last7Days",
                    defaultMessage: "Last 7 days"
                },
                last_30_days: {
                    id: "database.collectionGroupValue.dateGroup.last_30Days",
                    defaultMessage: "Last 30 days"
                },
                tomorrow: {
                    id: "database.collectionGroupValue.dateGroup.tomorrow",
                    defaultMessage: "Tomorrow"
                },
                next_7_days: {
                    id: "database.collectionGroupValue.dateGroup.next7Days",
                    defaultMessage: "Next 7 days"
                },
                next_30_days: {
                    id: "database.collectionGroupValue.dateGroup.next30Days",
                    defaultMessage: "Next 30 days"
                },
                week_differingStartAndEndYear: {
                    id: "database.collectionGroupValue.dateGroup.week.differingStartAndEndYear",
                    defaultMessage: "{startMonth} {startDay} {startYear} – {endMonth} {endDay} {endYear}"
                },
                week_differingStartAndEndMonth: {
                    id: "database.collectionGroupValue.dateGroup.week.differingStartAndEndMonth",
                    defaultMessage: "{startMonth} {startDay} – {endMonth} {endDay} {startYear}"
                },
                week_sameStartAndEndMonth: {
                    id: "database.collectionGroupValue.dateGroup.week.sameStartAndEndMonth",
                    defaultMessage: "{startMonth} {startDay} – {endDay} {startYear}"
                },
                out_of_range: {
                    id: "database.collectionGroupValue.numberGroup.outOfRange",
                    defaultMessage: "Out of range"
                },
                range: {
                    id: "database.collectionGroupValue.numberGroup.range",
                    defaultMessage: "{start} to {end}"
                },
                groups: {
                    id: "database.groupMenu.groups",
                    defaultMessage: "Groups"
                },
                hideGroup: {
                    id: "database.groupMenu.hideGroup",
                    defaultMessage: "Hide group"
                },
                showGroup: {
                    id: "database.groupMenu.showGroup",
                    defaultMessage: "Show group"
                },
                groupLimitReachedTitle: {
                    id: "database.groupMenu.groupLimitReachedTitle",
                    defaultMessage: "Group limit reached"
                },
                groupLimitReachedCaption: {
                    id: "database.groupMenu.groupLimitReachedCaption",
                    defaultMessage: "A maximum of 1,000 groups can be shown"
                },
                noGroups: {
                    id: "database.groupMenu.noGroups",
                    defaultMessage: "No groups to display"
                },
                pinnedGroups: {
                    id: "database.groupMenu.pinnedGroups",
                    defaultMessage: "Pinned groups"
                },
                pinGroup: {
                    id: "database.groupMenu.pinGroup",
                    defaultMessage: "Pin group"
                },
                unpinGroup: {
                    id: "database.groupMenu.unpinGroup",
                    defaultMessage: "Unpin group"
                }
            });

            function n({
                intl: e,
                value: t
            }) {
                if ("today" === t.type) return e.formatMessage(r.today);
                if ("yesterday" === t.type) return e.formatMessage(r.yesterday);
                if ("last_7_days" === t.type) return e.formatMessage(r.last_7_days);
                if ("last_30_days" === t.type) return e.formatMessage(r.last_30_days);
                if ("tomorrow" === t.type) return e.formatMessage(r.tomorrow);
                else if ("next_7_days" === t.type) return e.formatMessage(r.next_7_days);
                else if ("next_30_days" === t.type) return e.formatMessage(r.next_30_days);
                else if ("day" === t.type) {
                    let o = (0, i(25825).AA)(t.range, (0, i(714350).P)(), e.locale);
                    return (0, i(850640).eV)({
                        value: o.start,
                        preset: "medium"
                    })
                } else if ("week" === t.type) {
                    let o = (0, i(25825).AA)(t.range, (0, i(714350).P)(), e.locale),
                        n = (0, i(850640).eV)({
                            value: o.start,
                            preset: "month_short"
                        }),
                        l = (0, i(850640).eV)({
                            value: o.start,
                            preset: "day"
                        }),
                        a = o.start.year,
                        s = (0, i(850640).eV)({
                            value: o.end,
                            preset: "month_short"
                        }),
                        d = (0, i(850640).eV)({
                            value: o.end,
                            preset: "day"
                        }),
                        c = o.end.year;
                    return a !== c ? e.formatMessage(r.week_differingStartAndEndYear, {
                        startMonth: n,
                        startDay: l,
                        endMonth: s,
                        endDay: d,
                        startYear: a,
                        endYear: c
                    }) : n !== s ? e.formatMessage(r.week_differingStartAndEndMonth, {
                        startMonth: n,
                        startDay: l,
                        endMonth: s,
                        endDay: d,
                        startYear: a
                    }) : e.formatMessage(r.week_sameStartAndEndMonth, {
                        startMonth: n,
                        startDay: l,
                        endDay: d,
                        startYear: a
                    })
                } else if ("month" === t.type) {
                    let o = (0, i(25825).AA)(t.range, (0, i(714350).P)(), e.locale);
                    return (0, i(850640).eV)({
                        value: o.start,
                        preset: "month_year_short"
                    })
                } else if ("year" === t.type) return (0, i(25825).AA)(t.range, (0, i(714350).P)(), e.locale).start.year.toString();
                (0, i(722371).HB)(t)
            }

            function l({
                intl: e,
                value: t,
                format: o
            }) {
                if ("out_of_range" === t.type) return e.formatMessage(r.out_of_range);
                if ("range" === t.type) {
                    let n = i(700369).ZV(t.start, o, e),
                        l = i(700369).ZV(t.end, o, e);
                    return e.formatMessage(r.range, {
                        start: n,
                        end: l
                    })
                }
                if ("unique" === t.type) return i(700369).ZV(t.value, o, e);
                (0, i(722371).HB)(t)
            }

            function a(e) {
                let {
                    groupByFormat: t,
                    currentGroups: i,
                    formatGroups: r,
                    newGroupFormat: n,
                    groupsLimit: l
                } = e, a = i.length < l ? i.length : l - 1, s = new Set;
                for (let e of i) {
                    let t = (0, o().Ix)(e);
                    s.add(t)
                }
                let d = r.filter(e => {
                    let i = (0, o().Ix)(e);
                    return e.value.type === t.type && !(0, o().Mn)(e, n) && !s.has(i)
                });
                return [...i.slice(0, a), n, ...i.slice(a), ...d]
            }

            function s(e) {
                return !e.device.isPhone && (e.isFullScreen || e.isRootChild)
            }

            function d(e) {
                var t;
                return (null == (t = e.board_columns_by) ? void 0 : t.disableBoardColorColumns) ? ? !1
            }

            function c(e) {
                var t, r, n, l, a, s;
                let {
                    environment: c,
                    groupFormat: u,
                    schema: p,
                    format: g,
                    theme: y,
                    themeMode: m,
                    ignoreDisableColorColumns: S
                } = e, f = !S && d(g);
                if (!g.collection_group_by && f) return;
                if (!u) return (0, i(632079).Q)(y, "default", m);
                let h = p[u.property];
                if (!h || f) return;
                let v = u.value;
                if ((0, i(532792).l)(h)) {
                    let e = (h.options || []).find(e => e.value === v.value);
                    return (0, i(632079).Q)(y, null == e ? void 0 : e.color, m)
                }
                if ("status" === h.type && "status" === v.type) {
                    let e;
                    if ((null == (t = v.value) ? void 0 : t.type) === "by_group") {
                        let t = v.value.group;
                        void 0 === (e = null == (n = h.groups) || null == (n = n.find(e => e.name === t)) ? void 0 : n.color) && (e = null == (l = (0, i(366710).D)(h.name, i(962299).A.getIntl()).groups) || null == (l = l.find(e => e.name.toLowerCase() === t.toLowerCase())) ? void 0 : l.color)
                    } else if ((null == (r = v.value) ? void 0 : r.type) === "by_option") {
                        let t = v.value.option;
                        e = null == (a = h.options) || null == (a = a.find(e => e.value === t)) ? void 0 : a.color
                    }
                    return (0, i(632079).Q)(y, e, m)
                }
                if ("relation" === h.type && "relation" === v.type && (0, o().zx)(v.value)) {
                    let e = (0, i(856235).m3)(h, c),
                        t = (0, i(856235).D3)(h, c),
                        o = null == e ? void 0 : e.getPropertyMapping(),
                        r = null == o ? void 0 : o[i(11448).Hx.StatusV2],
                        n = t && r && t[r];
                    if (n && "status" === n.type) {
                        let e = v.value.value.variable,
                            t = null == (s = n.options) || null == (s = s.find(t => t.id === e)) ? void 0 : s.color;
                        if (t) return (0, i(632079).Q)(y, t, m)
                    }
                }
            }

            function u(e) {
                return ("board" !== e.viewType || "board_columns_by" !== e.groupByKey) && "chart" !== e.viewType
            }

            function p(e) {
                let {
                    stores: t,
                    collectionContextStore: i
                } = e, o = i.collectionStoresStore.state.map(e => e.id);
                return "collectionTypedView" === i.contextTypeFromStoreState ? t.filter(e => {
                    let t = e.getAssociatedCollectionStore();
                    return t && o.includes(t.id)
                }) : t
            }
            let g = (0, i(109939).YK)({
                manual: {
                    defaultMessage: "Manual",
                    id: "database.viewSettings.groupTab.sortType.manual"
                },
                ascending: {
                    defaultMessage: "Ascending",
                    id: "database.viewSettings.groupTab.sortType.ascending"
                },
                descending: {
                    defaultMessage: "Descending",
                    id: "database.viewSettings.groupTab.sortType.descending"
                },
                alphabetical: {
                    defaultMessage: "Alphabetical",
                    id: "database.viewSettings.groupTab.sortType.alphabetical"
                },
                reverseAlphabetical: {
                    defaultMessage: "Reverse alphabetical",
                    id: "database.viewSettings.groupTab.sortType.reverseAlphabetical"
                },
                oldestFirst: {
                    defaultMessage: "Oldest first",
                    id: "database.viewSettings.groupTab.sortType.chronological"
                },
                newestFirst: {
                    defaultMessage: "Newest first",
                    id: "database.viewSettings.groupTab.sortType.reverseChronological"
                }
            });

            function y(e, t) {
                if ("manual" === t) return g.manual;
                if ("ascending" === t)
                    if ((0, o().Ik)(e) || "formula" === e.type && "date" === e.groupBy.type) return g.oldestFirst;
                    else if ((0, o().Vh)(e) || "relation" === e.type || "select" === e.type || "multi_select" === e.type || "formula" === e.type && "text" === e.groupBy.type) return g.alphabetical;
                else return g.ascending;
                if ("descending" === t)
                    if ((0, o().Ik)(e) || "formula" === e.type && "date" === e.groupBy.type) return g.newestFirst;
                    else if ((0, o().Vh)(e) || "relation" === e.type || "select" === e.type || "multi_select" === e.type || "formula" === e.type && "text" === e.groupBy.type) return g.reverseAlphabetical;
                else return g.descending;
                (0, i(722371).HB)(t)
            }

            function m(e, t, o) {
                let {
                    visibleGroups: r
                } = e;
                if ((0, i(430682).Mw)({
                        collectionContextStore: t,
                        isForColumnGroups: o
                    })) return !0;
                let n = 0 === r.length && !t.shouldShowSpinnerStore.state || r.length > 0;
                return e.hasMore && n
            }

            function S(e) {
                let {
                    disableReorder: t,
                    groupByKey: i,
                    format: r,
                    canConfigureBlock: n,
                    isMobile: l,
                    isFixMobileDragConflictEnabled: a
                } = e;
                if (l && !a || t || !n) return !1;
                if ("chart_config" === i) return !t;
                let s = r[i];
                return !!s && (0, o().Nf)(s).includes("manual")
            }
        }
    }
]);