"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [98175], {
        669: (e, t, o) => {
            o.d(t, {
                A: () => d
            });
            var r = o(296540),
                n = o(474848);
            let i = (0, o(109939).YK)({
                    back: {
                        defaultMessage: "Back",
                        id: "collectionsSettingsMenu.back"
                    }
                }),
                l = {
                    hiddenDesktopHeaderDiv: {
                        height: 0
                    },
                    arrowButton: {
                        marginInlineEnd: 8,
                        marginInlineStart: -2,
                        height: 22
                    },
                    closeButton: {
                        borderRadius: "100%",
                        background: o(632079).Tj.gray.background.secondaryTranslucent
                    },
                    style0: {
                        flexGrow: 1
                    }
                },
                a = (0, o(64960)._S)({
                    color: o(632079).Tj.gray.background.secondaryTranslucent
                });

            function s({
                backArrowButton: e,
                topRightButton: t,
                children: r,
                title: d,
                desktopTitleType: c,
                settingsStackLength: p,
                handleClose: u,
                handleBackArrowClick: g,
                hideDesktopHeader: y,
                hasBackStack: f,
                isInPageViewMode: h,
                isDashboardWidget: m
            }) {
                let v = (0, o(109939).tz)(),
                    x = !!e || p > 1 || f,
                    b = (0, o(960253).I)(() => {
                        let e = h && !m,
                            t = x ? 12 : 16;
                        return {
                            nonHiddenDesktopHeaderDiv: {
                                display: "flex",
                                alignItems: e ? "top" : "center",
                                paddingTop: e ? "0px" : "14px",
                                paddingBottom: "6px",
                                paddingInlineStart: e ? "14px" : `${t}px`,
                                paddingInlineEnd: e ? "14px" : "16px",
                                height: e ? void 0 : 42
                            },
                            title: {
                                flexGrow: 1,
                                fontWeight: e ? o(699422).Wy.medium : o(699422).Wy.semibold,
                                fontSize: e ? 16 : 14,
                                lineHeight: e ? "24px" : void 0,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            },
                            closeButtonHovered: {
                                background: a.hovered
                            }
                        }
                    }, [m, h, x]),
                    S = !h;
                return (0, n.jsxs)(n.Fragment, {
                    children: [y ? (0, n.jsx)("div", {
                        style: l.hiddenDesktopHeaderDiv
                    }) : (0, n.jsxs)("div", {
                        style: b.nonHiddenDesktopHeaderDiv,
                        children: [e || (p > 1 || f ? (0, n.jsx)(o(374533).A, {
                            icon: o(374241).arrowStraightLeftSmallIcon,
                            style: l.arrowButton,
                            onClick: g,
                            ariaLabel: v.formatMessage(i.back)
                        }) : void 0), "sectionHeader" === c ? (0, n.jsx)(o(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            style: l.style0,
                            children: d
                        }) : (0, n.jsx)("span", {
                            style: b.title,
                            children: d
                        }), t || (S ? (0, n.jsx)(o(374533).A, {
                            testId: "collection-settings-menu-close-button",
                            onClick: u,
                            style: l.closeButton,
                            hoveredStyle: b.closeButtonHovered,
                            icon: o(25094).xMarkSmallIcon,
                            size: "xs",
                            ariaLabel: v.formatMessage({
                                id: "collectionSettingsMenu.close",
                                defaultMessage: "Close"
                            })
                        }) : void 0)]
                    }), r]
                })
            }
            let d = (0, r.forwardRef)(function({
                children: e,
                footer: t,
                header: i,
                unconstrainedWidth: l,
                desktopWidth: a,
                title: d,
                desktopTitleType: c,
                collectionSettingsStore: p,
                fullHeight: u,
                hideDesktopHeader: g,
                menuScrollerStyle: y,
                innerContentWrapperStyle: f,
                disableScroller: h,
                handleBackArrowClick: m,
                hasBackStack: v,
                handleClose: x,
                topRightButton: b,
                backArrowButton: S
            }, _) {
                let k, j = (0, o(713311).Ks)(),
                    w = (0, o(649476).Tf)(),
                    M = (0, o(226142).a)(),
                    I = (0, o(682985).K8)(() => (null == j ? void 0 : j.isDashboardWidget()) ? ? !1, [j]),
                    {
                        currentTab: C,
                        settingsStackLength: A,
                        hideHeader: P
                    } = (0, o(682985).K8)(() => {
                        let e = p.state;
                        return {
                            currentTab: (0, o(92293).S)(p),
                            settingsStackLength: e.stack.length,
                            hideHeader: e.hideSettingsHeader
                        }
                    }, [p], {
                        equalityFn: o(381453).n4
                    }),
                    T = (0, r.useCallback)(() => {
                        var e;
                        m ? m() : (0, o(465370).y)({
                            collectionSettingsStore: p,
                            keepPreviousRef: (null == j || null == (e = j.collectionViewStore()) ? void 0 : e.getType()) === "form_editor"
                        })
                    }, [m, p, j]),
                    B = (0, r.useCallback)(e => {
                        x ? x(e) : (0, o(72762).o)({
                            collectionSettingsStore: p
                        })
                    }, [x, p]),
                    H = (0, r.useCallback)(e => {
                        (0, o(444306).rW)(e.target) || (0, o(444306).iX)(e.target) || (0, o(444306).u2)(e.target) || o(272755).g.state.isOpen || B(e)
                    }, [B]);
                if (!C) return null;
                let D = M && !I;
                if (o(986939).A.isMobile) k = {
                    disableScroller: h,
                    menuType: o(649476).gu.Modal,
                    title: d,
                    left: A > 1 ? (0, n.jsx)(o(497857).h, {}) : void 0,
                    onClickLeft: A > 1 ? T : void 0,
                    scrollerStyle: y,
                    innerRef: _,
                    right: w ? void 0 : (0, n.jsx)(o(109939).sA, { ...o(789722).W.done
                    }),
                    onClickRight: w ? void 0 : B
                };
                else {
                    let e = l || a ? void 0 : D ? o(632188).vg : o(632188).vE;
                    k = {
                        disableScroller: h,
                        menuType: o(649476).gu.Popup,
                        minWidth: D ? o(632188).vg : o(632188).vE,
                        width: a,
                        maxHeight: u ? "100%" : "80vh",
                        ...e && {
                            maxWidth: e
                        },
                        onClickOutside: H,
                        scrollerStyle: {
                            flexGrow: 0,
                            ...y
                        },
                        header: !P && (0, n.jsx)(s, {
                            settingsStackLength: A,
                            handleClose: B,
                            handleBackArrowClick: T,
                            hasBackStack: v,
                            hideDesktopHeader: g,
                            title: d,
                            desktopTitleType: c,
                            topRightButton: b,
                            backArrowButton: S,
                            isDashboardWidget: I,
                            isInPageViewMode: M,
                            children: i
                        }),
                        paddingTop: 6 * !!P,
                        footer: t,
                        innerRef: _
                    }
                }
                let E = (0, n.jsxs)(n.Fragment, {
                    children: [o(986939).A.isMobile ? i : void 0, e, o(986939).A.isMobile ? t : void 0]
                });
                return u ? (0, n.jsx)(o(943019).Y, {
                    direction: "vertical",
                    children: (0, n.jsx)(o(747369).A, { ...k,
                        children: E
                    })
                }) : (0, n.jsx)(o(943019).Y, {
                    direction: "vertical",
                    children: (0, n.jsx)(o(747369).A, { ...k,
                        children: (0, n.jsx)(o(790124).N, {
                            capture: !0,
                            allowMobileAutoScroll: !0,
                            allowEsc: !0,
                            wrapperTag: "div",
                            children: (0, n.jsx)("div", {
                                style: f,
                                children: E
                            })
                        })
                    })
                })
            })
        },
        23889: (e, t, o) => {
            o.d(t, {
                nR: () => d,
                m$: () => a,
                Dy: () => s,
                _Q: () => g,
                FZ: () => p
            }), o(296540);
            var r = o(474848);
            let n = {
                offlineMessage: {
                    color: o(632079).Tj.text.secondary
                },
                style0: {
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                    paddingBottom: 20
                }
            };

            function i(e) {
                let {
                    innerContent: t,
                    collectionSettingsProps: i
                } = e;
                return (0, r.jsx)(o(669).A, {
                    collectionSettingsStore: i.collectionSettingsStore,
                    fullHeight: i.fullHeight,
                    hideDesktopHeader: i.hideDesktopHeader,
                    title: "offlineError" === t ? (0, r.jsx)("div", {
                        style: n.offlineMessage,
                        children: (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "Please go online.",
                            id: "lazyCollectionSettings.offlineError"
                        })
                    }) : void 0,
                    children: "loadingSpinner" === t ? (0, r.jsx)("div", {
                        style: n.style0,
                        children: (0, r.jsx)(o(517334).k, {})
                    }) : void 0
                })
            }
            let l = new(o(815048)).O2("collectionSettings", () => Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(49806), o.e(79974), o.e(45414), o.e(71562), o.e(26361), o.e(62475), o.e(3151), o.e(98629), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(15389), o.e(97732), o.e(23519), o.e(63771), o.e(53050), o.e(87353), o.e(45213), o.e(53847), o.e(12354), o.e(5721), o.e(57688), o.e(54951), o.e(43444), o.e(23979), o.e(17250), o.e(28048), o.e(55940), o.e(12560), o.e(88268), o.e(12001), o.e(40198), o.e(31243), o.e(42534), o.e(14886), o.e(39225), o.e(6212), o.e(2626), o.e(64453), o.e(4779), o.e(29663), o.e(76361), o.e(48860), o.e(75136), o.e(98175), o.e(18682), o.e(58360), o.e(33162), o.e(82538), o.e(63793), o.e(18881), o.e(62731), o.e(41049), o.e(60262), o.e(2276), o.e(91100), o.e(78311), o.e(4287), o.e(9817), o.e(65594), o.e(91636), o.e(36441), o.e(64049), o.e(28372), o.e(28663), o.e(47281), o.e(29087), o.e(46350), o.e(69626), o.e(82816), o.e(2832), o.e(75484), o.e(89076), o.e(86998), o.e(78257), o.e(51386), o.e(10471), o.e(87087), o.e(98419), o.e(13592), o.e(5234), o.e(85376), o.e(92181), o.e(99108)]).then(o.bind(o, 546352))),
                a = (0, o(815048)._h)(l, e => e.CollectionSettings, {
                    renderLoading: (e, t) => (0, r.jsx)(i, {
                        innerContent: e ? "loadingSpinner" : "empty",
                        collectionSettingsProps: t
                    }),
                    renderOfflineError: e => (0, r.jsx)(i, {
                        innerContent: "offlineError",
                        collectionSettingsProps: e
                    })
                });
            (0, o(815048)._h)(l, e => e.CollectionSettingsButtonOptions);
            let s = (0, o(815048)._h)(l, e => e.CollectionSettingsPropertyTypeMenuItem),
                d = (0, o(815048)._h)(l, e => e.CollectionEditButtonAutomationOption),
                c = new(o(815048)).O2("TableHeaderPropertyCreationMenu", () => Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(23519), o.e(63771), o.e(45213), o.e(53847), o.e(12354), o.e(54951), o.e(43444), o.e(23979), o.e(55940), o.e(88268), o.e(48486), o.e(47414), o.e(96579), o.e(82538), o.e(2276), o.e(86998), o.e(43935)]).then(o.bind(o, 616210))),
                p = (0, o(815048)._h)(c, e => e.TableHeaderPropertyCreationMenu),
                u = new(o(815048)).O2("CollectionSettingsSaveControl", () => Promise.all([o.e(75134), o.e(71562), o.e(21990)]).then(o.bind(o, 790512))),
                g = (0, o(815048)._h)(u, e => e.CollectionSettingsSaveControl)
        },
        31319: (e, t, o) => {
            o.d(t, {
                A: () => i
            }), o(296540);
            var r = o(474848);
            let n = {
                    activeDotStyle: {
                        height: 10,
                        width: 10,
                        backgroundColor: o(632079).Tj.palette.green[400],
                        border: "2px solid white",
                        borderRadius: "50%",
                        position: "absolute",
                        insetInlineStart: 11,
                        top: 11
                    }
                },
                i = function(e) {
                    let {
                        botValue: t,
                        botStore: i,
                        showActiveDot: l,
                        style: a,
                        size: s
                    } = e, d = (0, o(109939).tz)(), c = (0, o(682985).K8)(() => {
                        if (i) {
                            let e = i.getIcon();
                            if (e) return {
                                pointer: {
                                    table: o(832375).GPl,
                                    id: i.id,
                                    spaceId: i.getSpaceId()
                                },
                                icon: e
                            }
                        } else if (null != t && t.icon) return {
                            pointer: {
                                table: o(832375).GPl,
                                id: t.id,
                                spaceId: t.space_id
                            },
                            icon: t.icon
                        }
                    }, [i, t]), p = (0, o(682985).K8)(() => (null == i ? void 0 : i.getDisplayName(d)) ? ? (0, o(697006).Hg)(t), [i, t, d]);
                    return (0, r.jsxs)("div", {
                        style: a,
                        children: [(0, r.jsx)(o(569553).B6, {
                            icon: c,
                            title: p,
                            size: s || 18,
                            disabled: !0,
                            isEmptyPage: !1,
                            useInvertedColors: !0
                        }), l ? (0, r.jsx)("div", {
                            style: n.activeDotStyle
                        }) : void 0]
                    })
                }
        },
        59651: (e, t, o) => {
            o.d(t, {
                l: () => n
            });
            let r = {
                [o(49361).e1]: "collection_connected_property_figma",
                [o(49361).Hd]: "collection_connected_property_google_drive",
                [o(49361).ob]: "collection_connected_property_github",
                [o(49361).k0]: "collection_connected_property_zendesk",
                [o(49361).bh]: "collection_synced_database_github",
                [o(49361).MN]: "collection_synced_database_asana",
                [o(49361).Fo]: "collection_synced_database_gitlab",
                [o(49361).me]: "collection_synced_database_jira",
                [o(49361).F6]: "collection_synced_database_jira_workspace",
                [o(49361).Fv]: "collection_synced_database_jira_datacenter",
                [o(49361).mn]: "collection_synced_database_salesforce_workspace"
            };

            function n(e) {
                if (e) return r[e]
            }
        },
        71947: (e, t, o) => {
            o.d(t, {
                k: () => n
            });
            let r = new(o(815048)).O2("RollupConfigurationWarningBadgeMaybe", async () => await o.e(91388).then(o.bind(o, 855661))),
                n = (0, o(815048)._h)(r, e => e.RollupConfigurationWarningBadgeMaybe)
        },
        76790: (e, t, o) => {
            o.d(t, {
                a: () => r
            });

            function r(e) {
                let {
                    collectionSettingsStore: t,
                    item: o,
                    hideSettingsPopup: r
                } = e, n = t.state;
                t.setState({ ...n,
                    open: !0,
                    stack: [...n.stack, o],
                    ...void 0 !== r ? {
                        hideSettingsPopup: r
                    } : {}
                })
            }
        },
        105876: (e, t, o) => {
            o.d(t, {
                I: () => s
            });
            var r = o(296540);
            let n = new(o(815048)).O2("PagePropertiesRowNameMenu", async () => Promise.all([o.e(9773), o.e(36556), o.e(40537), o.e(96346), o.e(23519), o.e(12354), o.e(55940), o.e(47414), o.e(82538), o.e(2276), o.e(76298), o.e(23644), o.e(89563), o.e(1423)]).then(o.bind(o, 432025))),
                i = (0, o(815048)._h)(n, e => e.PagePropertiesRowNameMenu);
            var l = o(474848);
            let a = {
                    tooltipLockedIcon: {
                        fill: o(632079).Tj.text.inversePrimary,
                        marginInlineStart: 2,
                        display: "inline-block",
                        verticalAlign: "middle",
                        paddingBottom: 3
                    },
                    tooltipDescription: {
                        color: o(632079).Tj.text.inverseSecondary
                    },
                    tooltipAutoUpdatedByAi: {
                        color: o(632079).Tj.text.inverseSecondary
                    },
                    personPropertyPermissionsTooltip: {
                        color: o(632079).Tj.text.inverseSecondary
                    },
                    tooltipRollupConfigurationError: {
                        color: o(632079).Tj.text.inverseSecondary
                    },
                    style0: {
                        width: o(859996).Z9 + 4,
                        marginInlineStart: -(o(859996).Z9 + 4)
                    }
                },
                s = r.memo(function(e) {
                    let {
                        property: t,
                        blockStore: n,
                        schema: s,
                        disabled: c,
                        locked: p,
                        canConfigureCollection: u,
                        isInPeekRenderer: g,
                        labelComponent: y,
                        hideDragHandle: f,
                        pagePropertiesStore: h,
                        styleVariants: m,
                        disableRowNameInteractivity: v,
                        dragHandleStyle: x,
                        layoutModule: b,
                        forceHighlight: S,
                        forceFocusedHighlight: _,
                        hideIcon: k,
                        showDescriptionIcon: j,
                        propertyNameAriaId: w,
                        showDragHandleAsIcon: M
                    } = e, I = (0, r.useRef)(null), C = (0, o(713311).Ks)(), A = (0, o(533992).v3)(), {
                        isPhone: P
                    } = (0, o(533992).Y0)(), T = (0, o(83208).X)("database_agents"), [B, H] = (0, r.useState)(!1), D = s[t], E = (0, o(682985).K8)(() => h.state.hoveredProperty === t, [h, t]), {
                        shouldShowDragHandle: L,
                        shouldRenderDragHandle: O,
                        shouldShowDragIcon: W
                    } = (0, o(682985).K8)(() => {
                        let e = !P && !o(200083).A.state.isKeyboardMode && !f && !c && !p && u,
                            t = e && !M;
                        return {
                            shouldShowDragHandle: E && t,
                            shouldRenderDragHandle: t,
                            shouldShowDragIcon: e && E && M && !k
                        }
                    }, [E, P, f, c, p, u, M, k]), N = (0, o(682985).K8)(() => h.state.openProperty, [h]), z = (0, o(682985).K8)(() => null == C ? void 0 : C.collectionStore(), [C]), R = (0, o(960253).I)(() => {
                        let e, {
                                size: t = "medium",
                                width: r = {
                                    variant: "fixed",
                                    widthMobile: o(973037).yN,
                                    widthDesktop: o(973037).OQ
                                },
                                height: n,
                                color: i = "default"
                            } = m || {},
                            l = (null == n ? void 0 : n.variant) !== "medium" && (null != n && n.variant || "medium" !== t) ? 24 : 34;
                        if ("fixed" === r.variant) {
                            let t = P ? r.widthMobile || o(973037).yN : r.widthDesktop || o(973037).OQ;
                            e = {
                                width: t,
                                maxWidth: t,
                                minWidth: 0
                            }
                        } else "hug-content" === r.variant ? e = {
                            width: "min-content",
                            maxWidth: P ? r.maxWidthMobile || "100%" : r.maxWidthDesktop || "100%",
                            minWidth: 0
                        } : (0, o(722371).HB)(r);
                        return {
                            propertyLabelContainerStyles: {
                                display: "flex",
                                alignItems: "center",
                                color: "primary" === i ? o(632079).Tj.text.primary : o(632079).Tj.text.secondary,
                                height: l,
                                ...e
                            }
                        }
                    }, [m, P]), K = (0, r.useCallback)(() => {
                        h.setState({ ...h.state,
                            hoveredProperty: void 0
                        })
                    }, [h]), V = (0, r.useCallback)(() => {
                        h.setState({ ...h.state,
                            hoveredProperty: t
                        })
                    }, [h, t]), F = (0, r.useMemo)(() => O && (0, l.jsx)(o(654979).A, {
                        animate: {
                            opacity: +!!L
                        },
                        initial: {
                            opacity: 0
                        },
                        exit: {
                            opacity: 0
                        },
                        style: a.style0,
                        onMouseMove: V,
                        onMouseLeave: K,
                        children: (0, l.jsx)(o(633418).j, {
                            role: "cell",
                            disallowTabbing: !0,
                            onClick: t => {
                                var r, n, i;
                                return r = e.property, n = e.isInPeekRenderer, i = h, void((0, o(453734).Z)() || i.setState({ ...i.state,
                                    openProperty: {
                                        property: r,
                                        isInPeekRenderer: n
                                    }
                                }))
                            }
                        })
                    }), [h, e.isInPeekRenderer, e.property, K, V, L, O]), $ = (0, o(845001).x)(null == C ? void 0 : C.capabilitiesStore, null == C ? void 0 : C.permissionScopesStore), G = (0, r.useCallback)(e => {
                        if (!C) return;
                        let r = {
                            onClick: !v && ($ || u) ? () => {
                                var e, r, n, i;
                                return e = t, r = g, n = A, i = h, void((0, o(525779).clear)({
                                    environment: n
                                }), (0, o(471e3).I)({
                                    environment: n
                                }), (0, o(602262).y)(), i.setState({ ...i.state,
                                    openProperty: {
                                        property: e,
                                        isInPeekRenderer: r
                                    }
                                }))
                            } : o(763230).D_
                        };
                        return (0, l.jsx)(d, {
                            hideIcon: !!k,
                            showDragIcon: W,
                            dragHandleStyle: x,
                            schema: s,
                            property: t,
                            disabled: c || !!v,
                            locked: p,
                            canConfigureCollection: u,
                            events: (0, o(63390).A)(r, e),
                            propertyNameAriaId: w,
                            setIsDescriptionIconTooltipHovered: e => H(e),
                            styleVariants: m,
                            layoutModule: b,
                            forceHighlight: S,
                            forceFocusedHighlight: _,
                            collectionStore: z,
                            blockStore: n,
                            collectionContextStore: C,
                            showDescriptionIcon: j
                        })
                    }, [C, $, v, k, j, W, x, s, t, c, p, u, w, m, b, S, _, z, n, g, A, h]), U = !!(N && !c && N.property === t && N.isInPeekRenderer === g), q = (0, r.useCallback)(() => {
                        if (!C) return;
                        h.setState({ ...h.state,
                            openProperty: void 0
                        });
                        let e = C.settingsStore;
                        (0, o(72762).o)({
                            collectionSettingsStore: e
                        })
                    }, [C, h]), Y = (0, o(682985).K8)(() => (null == C ? void 0 : C.settingsStore.state.open) ? ? !1, [C]), Q = (0, r.useCallback)(() => {
                        let t = null == C ? void 0 : C.settingsStore;
                        if (C && t) return (0, l.jsx)("div", {
                            ref: I,
                            children: Y ? (0, l.jsx)(o(23889).m$, {
                                context: o(368538).B.TopbarFilterPopup,
                                collectionContextStore: C,
                                collectionSettingsStore: t,
                                hideDesktopHeader: !0
                            }) : (0, l.jsx)(i, { ...e,
                                popupContainerRef: I
                            })
                        })
                    }, [C, Y, e]), X = (0, o(126940).o)({
                        propertySchema: D,
                        schema: s,
                        parentStore: z
                    }), Z = (0, r.useCallback)(e => {
                        if (!C || !D) return null;
                        let r = (0, o(9247).$M)(D) && (0, o(9247).om)(D),
                            {
                                shouldShowLegacyAutofill: i
                            } = (0, o(251955).a)({
                                isDatabaseAgentsEnabled: T,
                                aiInference: (0, o(9247).YE)(D)
                            });
                        return (0, l.jsxs)("div", { ...e,
                            style: o(689266).Q$,
                            children: [(0, l.jsxs)("div", {
                                children: [D.name, p ? (0, l.jsx)(o(16275).I, {
                                    icon: o(697198).lockSmallIcon,
                                    size: "xs",
                                    style: a.tooltipLockedIcon
                                }) : void 0]
                            }), (null == D ? void 0 : D.description) !== void 0 && D.description.length > 0 ? (0, l.jsx)("div", {
                                style: a.tooltipDescription,
                                children: D.description
                            }) : null, z ? (0, l.jsx)(o(836403).t, {
                                propertySchema: D,
                                collectionStore: z,
                                property: t,
                                style: a.personPropertyPermissionsTooltip,
                                blockStore: n
                            }) : void 0, r && r.auto_update_on_edit && i ? (0, l.jsx)("div", {
                                style: a.tooltipAutoUpdatedByAi,
                                children: (0, l.jsx)(o(109939).sA, {
                                    defaultMessage: "Auto-updated by AI",
                                    id: "database.tableHeaderCell.tooltipAiAutofillDescription"
                                })
                            }) : void 0, X ? (0, l.jsx)("div", {
                                style: a.tooltipRollupConfigurationError,
                                children: (0, l.jsx)(o(109939).sA, { ...o(977441).A.rollupConfigurationErrorTooltip
                                })
                            }) : void 0]
                        })
                    }, [C, D, T, p, z, t, n, X]);
                    return C && D ? (0, l.jsx)(o(51831).m, {
                        disableTooltip: P,
                        content: Z,
                        delayThreshold: 500 * !B,
                        placement: "left",
                        tooltipClassName: o(828432).StS,
                        children: e => (0, l.jsxs)("div", {
                            style: R.propertyLabelContainerStyles,
                            onMouseMove: V,
                            onMouseLeave: K,
                            children: [F, (0, l.jsx)(o(182718).zD, {
                                popupType: P ? o(182718).nl.BottomSheet : o(182718).nl.Popup,
                                bottomSheetInitialState: "half",
                                originGap: 1,
                                alignmentToOrigin: "start",
                                content: Q,
                                trapFocus: !1,
                                open: U,
                                onDismiss: q,
                                children: y ? ? G(e)
                            })]
                        }, t)
                    }) : null
                }),
                d = r.memo(function(e) {
                    var t;
                    let {
                        schema: n,
                        property: i,
                        disabled: a,
                        locked: s,
                        canConfigureCollection: d,
                        events: c,
                        styleVariants: p,
                        forceHighlight: u,
                        forceFocusedHighlight: g,
                        showDragIcon: y,
                        collectionStore: f,
                        blockStore: h,
                        collectionContextStore: m
                    } = e, v = (null == p ? void 0 : p.color) || "default", x = (null == p ? void 0 : p.size) || "medium", b = null == p ? void 0 : p.fontWeight, S = n[i], _ = !!(null == S || null == (t = S.description) ? void 0 : t.length), k = !!e.showDescriptionIcon, j = (0, o(764396).i)({
                        collectionStore: f,
                        property: i,
                        propertySchema: S,
                        blockStore: h
                    }), w = (0, o(682985).K8)(() => (0, o(801643).A)(S, f), [S, f]), M = (0, o(801643).uF)({
                        featureName: w ? ? "verified_pages",
                        collectionStore: f
                    }), I = (0, o(126940).o)({
                        propertySchema: S,
                        schema: n,
                        parentStore: f
                    }), C = (0, o(682985).K8)(() => {
                        if (!S) return !1;
                        let e = !!j,
                            t = !!((0, o(576348).O0)() && (0, o(9247).$M)(S) && (0, o(9247).om)(S)),
                            r = !!(w && (null == M ? void 0 : M.upsell)),
                            n = !!I;
                        return e || t || r || n
                    }, [S, j, w, M, I]), A = (0, o(887779).Q)(i), P = r.useMemo(() => {
                        if (!A) return null;
                        let e = o(632079).Tj.background.primary;
                        return "jira" === A ? (0, o(117073).jiraIcon)({
                            width: 10,
                            height: 10,
                            stroke: e,
                            strokeWidth: 1,
                            paintOrder: "stroke fill",
                            vectorEffect: "non-scaling-stroke"
                        }) : (0, o(68722).salesforceIcon)({
                            width: 10,
                            height: 10,
                            stroke: e,
                            strokeWidth: 1,
                            paintOrder: "stroke fill",
                            vectorEffect: "non-scaling-stroke"
                        })
                    }, [A]), T = (0, o(682985).K8)(() => {
                        if (g) return !0;
                        let e = o(847591).wb.state;
                        return !!e && "page_property_name" === e.type && e.propertyId === i
                    }, [i, g]), B = (0, o(682985).K8)(() => {
                        var e;
                        if (u) return !0;
                        let t = o(847591).qu.state,
                            r = null == (e = n[i]) ? void 0 : e.name;
                        return !!t && !!r && r.toLowerCase().includes(t.toLowerCase())
                    }, [i, n, u]), H = (0, o(960253).I)(() => {
                        let t = T ? o(632079).Tj.findHighlightMatch.selectedBackground : o(632079).Tj.findHighlightMatch.unselectedBackground;
                        return {
                            button: {
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                                width: (0, o(11287).gx)(e.layoutModule) ? void 0 : "100%",
                                borderRadius: 4,
                                padding: "0 6px",
                                maxWidth: "100%"
                            },
                            property: {
                                backgroundColor: B ? t : void 0,
                                outline: B ? `5px solid ${t}` : void 0,
                                borderRadius: B ? 4 : void 0,
                                color: T ? "black" : void 0,
                                ..."medium" === x ? {
                                    fontSize: 14,
                                    lineHeight: "20px"
                                } : {
                                    fontSize: 13,
                                    lineHeight: "18px"
                                },
                                ...b ? {
                                    fontWeight: o(699422).Wy[b]
                                } : {}
                            },
                            icon: { ..."primary" === v ? {
                                    fill: o(632079).Tj.icon.primary
                                } : T ? {
                                    fill: "black"
                                } : {}
                            },
                            badgesWrapper: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 4,
                                flexShrink: 0,
                                marginInlineStart: 2 * ("small" === x)
                            }
                        }
                    }, [v, T, x, b, e.layoutModule, B]);
                    return S ? (0, l.jsx)(o(64960).Ay, {
                        role: "cell",
                        id: e.propertyNameAriaId,
                        style: H.button,
                        disabled: a || s || !d,
                        ...c,
                        onContextMenu: e => {
                            e.preventDefault(), c.onClick(e)
                        },
                        children: (0, l.jsx)(o(151710).mA, {
                            propertySchema: S,
                            showIcon: !e.hideIcon,
                            showDragIcon: y,
                            showIntegrationIconOverlay: P,
                            badge: (0, l.jsxs)("span", {
                                style: H.badgesWrapper,
                                children: [f ? (0, l.jsx)(o(276345).$, {
                                    propertySchema: S,
                                    collectionStore: f,
                                    property: i,
                                    blockStore: h
                                }) : void 0, (0, l.jsx)(o(151710).Jv, {
                                    propertySchema: S
                                }), (0, l.jsx)(o(334585).i, {
                                    propertySchema: S,
                                    collectionContextStore: m
                                }), (0, l.jsx)(o(71947).k, {
                                    propertySchema: S,
                                    schema: n,
                                    parentStore: f
                                }), _ ? (0, l.jsx)(o(654979).A, {
                                    animate: {
                                        opacity: +!!k
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    config: {
                                        duration: 250
                                    },
                                    style: {
                                        display: "inline-flex",
                                        pointerEvents: k ? "auto" : "none",
                                        marginInlineStart: 2 * !C
                                    },
                                    children: (0, l.jsx)(o(418154).g, {
                                        setIsHovered: e.setIsDescriptionIconTooltipHovered
                                    })
                                }) : void 0]
                            }),
                            style: H.property,
                            property: i,
                            className: T ? o(728069).wT : void 0,
                            labelSizeVariant: x,
                            iconSize: "medium" === x ? 16 : 14,
                            iconStyle: H.icon,
                            dragHandleStyle: e.dragHandleStyle
                        })
                    }) : null
                })
        },
        120025: (e, t, o) => {
            o.d(t, {
                A6: () => s,
                Ep: () => a,
                YB: () => n,
                es: () => d
            });
            var r = () => o(546605);
            class n extends r().Store {
                getInitialState() {
                    return {
                        forceShowProperties: !1,
                        searchOpen: !1,
                        searchQuery: ""
                    }
                }
            }
            let i = "unnamed";
            class l extends r().Store {
                getInitialState() {
                    return {
                        pagePropertiesStoreMap: {}
                    }
                }
                getNewEditorPagePropertiesStore(e) {
                    var t;
                    let o = e || i;
                    if (null != (t = this.state.pagePropertiesStoreMap) && t[o]) return this.state.pagePropertiesStoreMap[o];
                    let r = new n,
                        l = {
                            pagePropertiesStoreMap: { ...this.state.pagePropertiesStoreMap,
                                [o]: r
                            }
                        };
                    return this.setState(l), r
                }
            }
            let a = new l,
                s = new l;

            function d(e) {
                return (o(475097).default.state.open ? s : a).state.pagePropertiesStoreMap[e || i]
            }
        },
        126940: (e, t, o) => {
            function r(e) {
                let {
                    propertySchema: t,
                    schema: r,
                    parentStore: n
                } = e, i = (0, o(924448).o7)();
                return (0, o(682985).K8)(() => {
                    if (t && "rollup" === t.type && n && (t.relation_property || t.person_property)) {
                        if ("person" === t.rollup_type && t.person_property) {
                            let e = r[t.person_property];
                            if (!e || "person" !== e.type) return {
                                type: "source_property_deleted"
                            }
                        } else if (t.relation_property) {
                            let e = r[t.relation_property];
                            if (!e || "relation" !== e.type) return {
                                type: "source_property_deleted"
                            }
                        }
                        if (t.target_property && t.target_property_type) return function(e) {
                            let {
                                rollupSchema: t,
                                schema: r,
                                parentStore: n,
                                peopleCollectionStore: i
                            } = e;
                            return "person" === t.rollup_type && t.person_property && t.target_property && t.target_property_type ? function(e) {
                                let {
                                    rollupSchema: t,
                                    peopleCollectionStore: r
                                } = e;
                                if (t.target_property && (0, o(26837).cl)(t.target_property)) {
                                    let e = (0, o(26837).dk)(t.target_property);
                                    return t.target_property_type && e.type !== t.target_property_type ? {
                                        type: "target_property_type_mismatch",
                                        expected: t.target_property_type,
                                        actual: e.type
                                    } : void 0
                                }
                                if (r && t.target_property) {
                                    let e = (0, o(26837).U$)(r.getSchema())[r.getMappedProperty(t.target_property) ? ? t.target_property];
                                    if (!e) return {
                                        type: "target_property_deleted"
                                    };
                                    if (t.target_property_type && e.type !== t.target_property_type) return {
                                        type: "target_property_type_mismatch",
                                        expected: t.target_property_type,
                                        actual: e.type
                                    }
                                }
                            }({
                                rollupSchema: t,
                                peopleCollectionStore: i
                            }) : t.relation_property && t.target_property && t.target_property_type ? function(e) {
                                let {
                                    rollupSchema: t,
                                    schema: r,
                                    parentStore: n
                                } = e;
                                if (!t.relation_property) return;
                                let i = r[t.relation_property];
                                if ((null == i ? void 0 : i.type) !== "relation") return {
                                    type: "source_property_deleted"
                                };
                                if (!t.target_property || !t.target_property_type) return;
                                let l = (0, o(390768).N)(i) ? ? void 0;
                                if (!l) return;
                                let a = o(356912).m.createChildStore(n, l);
                                null == a || a.load();
                                let s = (null == a ? void 0 : a.getSchema())[(null == a ? void 0 : a.getMappedProperty(t.target_property)) ? ? t.target_property];
                                return s ? s.type !== t.target_property_type ? {
                                    type: "target_property_type_mismatch",
                                    expected: t.target_property_type,
                                    actual: s.type
                                } : void 0 : {
                                    type: "target_property_deleted"
                                }
                            }({
                                rollupSchema: t,
                                schema: r,
                                parentStore: n
                            }) : void 0
                        }({
                            rollupSchema: t,
                            schema: r,
                            parentStore: n,
                            peopleCollectionStore: i
                        })
                    }
                }, [t, r, n, i])
            }

            function n(e) {
                return void 0 !== r(e)
            }
            o.d(t, {
                o: () => n,
                s: () => r
            })
        },
        151710: (e, t, o) => {
            o.d(t, {
                Jv: () => d,
                Rl: () => c,
                mA: () => s
            });
            var r = o(296540),
                n = o(474848);
            let i = {
                    padding: "1px 4px",
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 1
                },
                l = function() {
                    return (0, n.jsx)(o(746434).E, {
                        color: "purple",
                        style: i,
                        content: (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "AI",
                            id: "database.property.aiAutofillEnabledIndicator"
                        })
                    })
                },
                a = {
                    position: "absolute",
                    bottom: 0,
                    insetInlineStart: 8,
                    width: 12,
                    height: 12,
                    borderRadius: 12,
                    background: "transparent",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1
                },
                s = r.memo(function(e) {
                    let {
                        badge: t,
                        className: r,
                        dragHandleStyle: i,
                        hideName: l,
                        iconSize: s,
                        iconStyle: d,
                        labelSizeVariant: p,
                        propertySchema: u,
                        showDragIcon: g,
                        showIcon: y,
                        style: f,
                        textRef: h
                    } = e, m = (0, o(960253).I)(() => ({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            lineHeight: "120%",
                            minWidth: 0,
                            fontSize: o(986939).A.isMobile ? 16 : 14,
                            gap: "small" === p ? 2 : 6,
                            ...f
                        },
                        iconWrapper: {
                            display: "grid",
                            justifyContent: "center",
                            alignItems: "center",
                            position: e.showIntegrationIconOverlay ? "relative" : void 0,
                            ...d
                        },
                        dragHandle: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!!g,
                            transition: `opacity ${o(153262).bM}`
                        },
                        itemIcon: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!g,
                            transition: `opacity ${o(153262).bM}`
                        }
                    }), [d, p, g, f, e.showIntegrationIconOverlay]);
                    return (0, n.jsxs)("div", {
                        className: r,
                        style: m.container,
                        children: [y ? (0, n.jsxs)("div", {
                            style: m.iconWrapper,
                            children: [(0, n.jsx)("div", {
                                style: m.itemIcon,
                                children: (0, n.jsx)(c, {
                                    propertySchema: u,
                                    iconSize: s,
                                    iconStyle: d
                                })
                            }), e.showIntegrationIconOverlay ? (0, n.jsx)("div", {
                                style: a,
                                children: e.showIntegrationIconOverlay
                            }) : void 0, (0, n.jsx)("div", {
                                style: m.dragHandle,
                                children: (0, n.jsx)(o(544954).t, {
                                    wrapperStyle: i
                                })
                            })]
                        }) : void 0, l ? void 0 : (0, n.jsx)("div", {
                            ref: h,
                            style: o(699422).RC,
                            children: u.name
                        }), t]
                    })
                });

            function d(e) {
                let {
                    propertySchema: t
                } = e, r = o(9247).YE(t), {
                    shouldShowLegacyAutofill: i
                } = (0, o(251955).D)({
                    aiInference: r
                });
                return (0, o(682985).K8)(() => (0, o(576348).O0)() && o(9247).$M(t) && o(9247).om(t) && i, [i, t]) ? (0, n.jsx)(l, {}) : null
            }

            function c(e) {
                let {
                    propertySchema: t,
                    iconSize: r,
                    iconStyle: i
                } = e, l = (0, o(960253).e)(), a = o(986939).A.isMobile ? 18 : 16;
                return (0, n.jsx)(o(221535).zB, {
                    type: t.type,
                    icon: t.icon,
                    size: r || a,
                    theme: o(632079).Tj,
                    themeMode: l,
                    style: i
                })
            }
        },
        226142: (e, t, o) => {
            o.d(t, {
                a: () => n
            });
            let r = new(o(345426)).ComputedStore(() => o(272755).g.state.isOpen, {
                debugName: "IsInPageViewModeStore"
            });

            function n() {
                return (0, o(682985).O$)(r)
            }
        },
        251955: (e, t, o) => {
            function r(e) {
                let {
                    aiInference: t
                } = e;
                return n({
                    isDatabaseAgentsEnabled: (0, o(551408).A)(),
                    aiInference: t
                })
            }

            function n(e) {
                let {
                    isDatabaseAgentsEnabled: t,
                    aiInference: o
                } = e;
                if (!t) return {
                    shouldShowDbAgent: !1,
                    shouldShowLegacyAutofill: !0
                };
                let r = !!o && !o.is_migrated;
                return {
                    shouldShowDbAgent: !r,
                    shouldShowLegacyAutofill: r
                }
            }
            o.d(t, {
                D: () => r,
                a: () => n
            })
        },
        276345: (e, t, o) => {
            o.d(t, {
                $: () => i
            }), o(296540);
            var r = o(474848);
            let n = {
                borderRadius: 4,
                height: 16,
                width: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            };

            function i({
                collectionStore: e,
                property: t,
                propertySchema: l,
                blockStore: a
            }) {
                return (0, o(764396).i)({
                    collectionStore: e,
                    property: t,
                    propertySchema: l,
                    blockStore: a
                }) ? (0, r.jsx)(o(746434).E, {
                    color: "yellow",
                    style: n,
                    content: (0, r.jsx)(o(16275).I, {
                        icon: o(349939).keyFillSmallIcon,
                        size: "xs"
                    })
                }) : null
            }
        },
        334585: (e, t, o) => {
            o.d(t, {
                i: () => n
            }), o(296540);
            var r = o(474848);

            function n({
                propertySchema: e,
                collectionContextStore: t
            }) {
                let l = (0, o(682985).K8)(() => (0, o(801643).A)(e, null == t ? void 0 : t.collectionStore()), [e, t]);
                return l ? (0, r.jsx)(i, {
                    featureName: l,
                    collectionContextStore: t,
                    propertySchema: e
                }) : null
            }

            function i({
                featureName: e,
                collectionContextStore: t,
                propertySchema: n
            }) {
                let l = (0, o(682985).K8)(() => null == t ? void 0 : t.collectionStore(), [t]),
                    a = (0, o(682985).K8)(() => l ? (0, o(974410).f)(l) : void 0, [l]),
                    s = (0, o(801643).uF)({
                        featureName: e,
                        collectionStore: l
                    });
                if (!(null != s && s.upsell)) return null;
                let d = "verification" === n.type ? "verification_upsell_item_collection_entrypoint" : "collection_connected_property";
                return (0, r.jsx)(o(364017).j, {
                    display: "icon",
                    upsell: s.upsell,
                    source: d,
                    featureName: e,
                    spaceStore: a
                })
            }
        },
        345152: (e, t, o) => {
            o.d(t, {
                b: () => r,
                g: () => n
            });
            let r = o(288304).YG;

            function n({
                environment: e,
                layoutArea: t,
                moduleType: i,
                pageViewBlockContext: l
            }) {
                return ("page_main" === t || "views_main_tab_modules" === t) && "properties" === i || "properties" === i && "page_details" === t && (0, o(27469).Wi)({
                    environment: e,
                    isInPeek: l === o(166654).R.PeekView
                }) >= r
            }
        },
        349939: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => r,
                keyFillSmallIcon: () => n
            }), o(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "4.29 1.67 7.41 12.66",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M8 1.675a3.7 3.7 0 0 0-1.825 6.92v4.092c0 .094.04.183.111.245l1.5 1.313a.325.325 0 0 0 .428 0l1.5-1.313a.325.325 0 0 0 .033-.456l-.944-1.101.944-1.1a.33.33 0 0 0 .078-.213V8.595A3.7 3.7 0 0 0 8 1.674M8 3.75A.875.875 0 1 1 8 5.5a.875.875 0 0 1 0-1.75"
                    })
                },
                n = (0, o(104509).wt)("keyFillSmall", r, "fillSmall")
        },
        364017: (e, t, o) => {
            o.d(t, {
                j: () => r
            });
            let r = (0, o(815048)._h)(new(o(815048)).O2("UpgradeButton", async () => Promise.all([o.e(54951), o.e(96579), o.e(22197)]).then(o.bind(o, 754951))), e => e.UpgradeButton, {
                renderLoading: () => null
            })
        },
        368538: (e, t, o) => {
            var r, n;
            o.d(t, {
                B: () => i,
                U: () => l
            });
            let i = ((r = {})[r.ViewSettings = 0] = "ViewSettings", r[r.FilterBar = 1] = "FilterBar", r[r.TopbarFilterPopup = 2] = "TopbarFilterPopup", r[r.TopbarSortPopup = 3] = "TopbarSortPopup", r[r.MobileSheet = 4] = "MobileSheet", r),
                l = ((n = {})[n.Source = 0] = "Source", n[n.Relation = 1] = "Relation", n)
        },
        372181: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => n,
                infoCircleSmallIcon: () => i
            }), o(296540);
            var r = o(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M7.9 4.425a.775.775 0 1 0 0 1.55.775.775 0 0 0 0-1.55M6.95 6.5a.625.625 0 1 0 0 1.25h.425V10H6.95a.625.625 0 1 0 0 1.25h2.1a.625.625 0 1 0 0-1.25h-.425V7.125A.625.625 0 0 0 8 6.5z"
                        }), (0, r.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                i = (0, o(104509).wt)("infoCircleSmall", n, "small")
        },
        418154: (e, t, o) => {
            o.d(t, {
                g: () => i
            });
            var r = o(296540),
                n = o(474848);

            function i({
                setIsHovered: e
            }) {
                let [t, l] = (0, o(848135).B)();
                return (0, r.useEffect)(() => {
                    e(l)
                }, [l, e]), (0, n.jsx)(o(4458).fI, {
                    ref: t,
                    alignItems: "center",
                    inline: !0,
                    children: (0, n.jsx)(o(16275).I, {
                        icon: o(372181).infoCircleSmallIcon,
                        size: "sm",
                        colorVariant: l ? "secondary" : "tertiary",
                        fitToViewBox: "horizontal"
                    })
                })
            }
        },
        424107: (e, t, o) => {
            o.d(t, {
                i: () => n
            }), o(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "6.24 2.75 7.51 14.51",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M6.25 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m5 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m1.25 7.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M6.25 10a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m6.25 7.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M6.25 16a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0"
                    })
                },
                n = (0, o(104509).wt)("dragHandle", r, "default")
        },
        444306: (e, t, o) => {
            function r(e) {
                return !(0, o(885711).EV)(e, e => e.classList && (e.classList.contains(o(828432).Hfz) || e.classList.contains(o(828432).uMd) || e.classList.contains(o(828432).LvP) || e.classList.contains(o(828432).sux) || e.classList.contains(o(828432).HA4) || e.classList.contains(o(828432).z$c))) && !!(0, o(885711).EV)(e, e => e.classList && e.classList.contains(o(545028).hq))
            }

            function n(e) {
                return !!(0, o(885711).EV)(e, e => e.classList && e.classList.contains(o(828432).N11))
            }

            function i(e) {
                return !!(0, o(885711).EV)(e, e => e.classList && e.classList.contains(o(828432).xeF))
            }

            function l(e) {
                return !!(0, o(885711).EV)(e, e => e.classList && e.classList.contains(o(828432).Jnf))
            }

            function a(e) {
                return !!(0, o(885711).EV)(e, e => e.classList && e.classList.contains(o(828432).kew))
            }
            o.d(t, {
                Rp: () => r,
                iX: () => a,
                pM: () => i,
                rW: () => n,
                u2: () => l
            })
        },
        465370: (e, t, o) => {
            o.d(t, {
                y: () => r
            });

            function r(e) {
                let {
                    collectionSettingsStore: t,
                    keepPreviousRef: r
                } = e, n = t.state, i = n.stack.slice(0, n.stack.length - 1);
                0 === i.length ? (0, o(72762).o)({
                    collectionSettingsStore: t
                }) : t.setState({
                    open: !0,
                    stack: i,
                    ...void 0 !== n.ref && r ? {
                        ref: n.ref
                    } : {}
                })
            }
        },
        475717: (e, t, o) => {
            o.d(t, {
                l: () => r
            });

            function r(e) {
                return (0, o(682985).K8)(() => (function(e) {
                    if (!e) return;
                    let t = null == e ? void 0 : e.getAssociatedCollectionStore();
                    return null == t ? void 0 : t.getLayoutStore()
                })(e), [e])
            }
        },
        632188: (e, t, o) => {
            o.d(t, {
                iZ: () => i,
                vE: () => r,
                vg: () => n
            });
            let r = 290,
                n = 280,
                i = 400
        },
        633418: (e, t, o) => {
            o.d(t, {
                j: () => s
            });
            var r = o(296540),
                n = o(474848);
            let i = {
                    k1xSpc: "x78zum5",
                    kGNEyG: "x6s0dn4",
                    kjj79g: "xl56j7k",
                    krdFHd: "xjwep3j",
                    kfmiAY: "x1t39747",
                    kT0f0o: "x1wcsgtt",
                    kVL7Gh: "x1pczhz8",
                    $$css: !0
                },
                l = {
                    kkrTdU: "x1jm3nie",
                    $$css: !0
                },
                a = {
                    kkrTdU: "x1ypdohk",
                    $$css: !0
                },
                s = (0, r.forwardRef)(function(e, t) {
                    let s = (0, o(109939).tz)(),
                        d = (0, o(533992).v3)(),
                        c = e["aria-label"],
                        {
                            disableDrag: p,
                            hideClickMessage: u
                        } = e,
                        g = (0, r.useMemo)(() => {
                            if (void 0 !== c) return c;
                            let e = !p,
                                t = !u;
                            return e && t ? s.formatMessage({
                                id: "dragHandleButton.ariaLabel.dragAndClick",
                                defaultMessage: "Drag to move, click to open menu"
                            }) : e ? s.formatMessage({
                                id: "dragHandleButton.ariaLabel.dragOnly",
                                defaultMessage: "Drag to move"
                            }) : t ? s.formatMessage({
                                id: "dragHandleButton.ariaLabel.clickOnly",
                                defaultMessage: "Click to open menu"
                            }) : ""
                        }, [c, p, u, s]),
                        {
                            onClick: y
                        } = e,
                        f = (0, r.useCallback)(e => {
                            y && (e.preventDefault(), y(e))
                        }, [y]),
                        h = (0, r.useCallback)(r => (0, n.jsx)(o(800526).U, {
                            ref: t,
                            ariaLabel: g,
                            role: e.role,
                            style: [i, e.disableDrag ? a : l, ((e, t) => [{
                                kzqmXN: null != e ? "x5lhr3w" : e,
                                kZKoxP: null != t ? "x16ye13r" : t,
                                $$css: !0
                            }, {
                                "--x-width": "number" == typeof e ? e + "px" : null != e ? e : void 0,
                                "--x-height": "number" == typeof t ? t + "px" : null != t ? t : void 0
                            }])(e.width ? ? o(859996).Z9, e.height ? ? o(859996).SP), e.style],
                            onClick: e.onClick,
                            onContextMenu: f,
                            disallowTabbing: e.disallowTabbing,
                            ...r,
                            children: (0, n.jsx)(o(16275).I, {
                                icon: o(424107).i,
                                colorVariant: "tertiary"
                            })
                        }), [g, f, e.disableDrag, e.disallowTabbing, e.height, e.onClick, e.role, e.style, e.width, t]);
                    return e.disableTooltip ? h({}) : (0, n.jsx)(o(51831).m, {
                        placement: e.tooltipPlacement ? ? "bottom",
                        delayThreshold: 300,
                        allowHover: !0,
                        content: function() {
                            let t = d.device.isMac ? "⌘/" : "ctrl/";
                            return (0, n.jsxs)("div", { ...{
                                    className: "x2b8uid"
                                },
                                children: [e.disableDrag ? void 0 : void 0 !== e.dragTooltipMessage ? e.dragTooltipMessage : (0, n.jsx)(o(109939).sA, {
                                    defaultMessage: "Drag <medium>to move</medium>",
                                    id: "dragHandleButton.dragPrompt.text",
                                    values: {
                                        medium: e => (0, n.jsx)("span", {
                                            className: "x1achzq6",
                                            children: e
                                        })
                                    }
                                }), e.hideClickMessage ? void 0 : (0, n.jsx)("div", {
                                    children: (0, n.jsx)(o(109939).sA, {
                                        defaultMessage: "Click <medium>or</medium> <kbd>⌘/</kbd> <medium>to open menu</medium>",
                                        id: "dragHandleButton.clickPrompt.text",
                                        values: {
                                            medium: e => (0, n.jsx)("span", {
                                                className: "x1achzq6",
                                                children: e
                                            }),
                                            kbd: () => (0, n.jsx)("kbd", {
                                                children: t
                                            })
                                        }
                                    })
                                })]
                            })
                        },
                        children: h
                    })
                })
        },
        644712: (e, t, o) => {
            o.d(t, {
                v: () => n
            }), o(16280), o(296540);
            var r = o(474848);

            function n(e, t) {
                switch (e) {
                    case "editor":
                        return (0, r.jsx)(o(109939).sA, {
                            id: "PersonPropertyPermissionsBadge.tooltipText.editor",
                            defaultMessage: "Anyone selected in {propertyName} has full access to this page",
                            values: {
                                propertyName: t
                            }
                        });
                    case "read_and_write":
                        return (0, r.jsx)(o(109939).sA, {
                            id: "PersonPropertyPermissionsBadge.tooltipText.readAndWrite",
                            defaultMessage: "Anyone selected in {propertyName} can edit this page",
                            values: {
                                propertyName: t
                            }
                        });
                    case "reader":
                        return (0, r.jsx)(o(109939).sA, {
                            id: "PersonPropertyPermissionsBadge.tooltipText.reader",
                            defaultMessage: "Anyone selected in {propertyName} can view this page",
                            values: {
                                propertyName: t
                            }
                        });
                    case "comment_only":
                        return (0, r.jsx)(o(109939).sA, {
                            id: "PersonPropertyPermissionsBadge.tooltipText.commentOnly",
                            defaultMessage: "Anyone selected in {propertyName} can comment on this page",
                            values: {
                                propertyName: t
                            }
                        });
                    case "content_only_editor":
                    case "membership_admin":
                    case "none":
                        throw Error(`Unhandled role in person property permissions badge: ${e}`);
                    default:
                        (0, o(722371).HB)(e)
                }
            }
        },
        681693: (e, t, o) => {
            o.d(t, {
                $L: () => i,
                BZ: () => s,
                EC: () => u,
                EI: () => m,
                E_: () => _,
                Ed: () => c,
                Fq: () => y,
                Lu: () => x,
                Mk: () => p,
                O0: () => S,
                V$: () => b,
                VQ: () => g,
                Xx: () => v,
                Xy: () => a,
                _g: () => h,
                dd: () => d,
                pW: () => l,
                q3: () => n,
                wH: () => r,
                xK: () => k
            });
            let r = 160,
                n = 40,
                i = 40,
                l = 20,
                a = 600,
                s = 270,
                d = 405,
                c = 480,
                p = 500,
                u, g = 16,
                y = 8,
                f = {
                    backdropFilter: "blur(48px)",
                    WebkitBackdropFilter: "blur(48px)"
                },
                h = 4;

            function m() {
                return {
                    icon: o(632079).Tj.icon.secondary,
                    text: o(632079).Tj.text.secondary
                }
            }

            function v() {
                return {
                    width: 48,
                    height: 48,
                    fill: o(632079).Tj.icon.tertiary
                }
            }

            function x({
                isPhone: e
            }) {
                return e ? o(632079).Tj.personalHomeBackgroundPhone : o(632079).Tj.background.primary
            }

            function b({
                isPhone: e,
                themeMode: t
            }) {
                return {
                    zIndex: 1,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 12,
                    background: o(632079).Tj.home.tile.background,
                    boxShadow: _({
                        isPhone: e,
                        themeMode: t
                    }),
                    ...f
                }
            }

            function S({
                mode: e
            }) {
                switch (e) {
                    case "dark":
                    default:
                        return 0;
                    case "light":
                        return 1
                }
            }

            function _({
                isPhone: e,
                themeMode: t,
                borderOnly: r
            }) {
                if ("dark" === t) return "unset";
                let n = S({
                    mode: t
                });
                return (0, o(381453).oE)([r || e ? void 0 : "0 12px 32px rgba(0, 0, 0, 0.02)", `0 0 0 ${n}px rgba(0, 0, 0, 0.05)`]).join(", ")
            }

            function k(e) {
                let {
                    borderOnly: t
                } = e, r = (0, o(533992).WS)(), n = (0, o(960253).e)();
                return {
                    unhoveredBoxShadow: _({
                        isPhone: r,
                        themeMode: n,
                        borderOnly: t
                    }),
                    hoveredBoxShadow: "light" === n ? "0 12px 32px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.085)" : o(632079).Tj.homeShadow.card.hovered
                }
            }
        },
        697198: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => n,
                lockSmallIcon: () => i
            }), o(296540);
            var r = o(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 1.59 9.66 12.45",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M8 8.1a1.125 1.125 0 0 0-.525 2.12v.93a.525.525 0 1 0 1.05 0v-.93A1.125 1.125 0 0 0 8 8.1"
                        }), (0, r.jsx)("path", {
                            d: "M8 1.6a3.25 3.25 0 0 0-3.25 3.25v1a2.026 2.026 0 0 0-1.575 1.975v4.2c0 1.118.907 2.025 2.025 2.025h5.6a2.025 2.025 0 0 0 2.025-2.025v-4.2c0-.964-.673-1.77-1.575-1.975v-1A3.25 3.25 0 0 0 8 1.6M6 4.85a2 2 0 1 1 4 0v.95H6zM4.425 7.825c0-.428.347-.775.775-.775h5.6c.428 0 .775.347.775.775v4.2a.775.775 0 0 1-.775.775H5.2a.775.775 0 0 1-.775-.775z"
                        })]
                    })
                },
                i = (0, o(104509).wt)("lockSmall", n, "small")
        },
        764396: (e, t, o) => {
            o.d(t, {
                i: () => r
            }), o(898992), o(672577), o(737550);

            function r({
                collectionStore: e,
                property: t,
                propertySchema: n,
                blockStore: i
            }) {
                let l = (0, o(682985).K8)(() => !!i && i.getPermissionItems().some(o(642157).T6), [i]),
                    a = (0, o(682985).K8)(() => {
                        if (l || !n) return;
                        let o = null == e ? void 0 : e.getPropertyPermissionItems().validItems;
                        return null == o ? void 0 : o.find(e => "person" === n.type ? "person" === e.property_info.type && e.property_info.property_id === t : "created_by" === n.type && "page_creator" === e.property_info.type)
                    }, [e, t, n, l]);
                return a && (0, o(642157).tb)(a) ? a : void 0
            }
        },
        801643: (e, t, o) => {
            function r({
                spaceId: e,
                userId: t
            }) {
                let n = (0, o(217844)._)({
                        name: "collection_connected_property_figma",
                        spaceId: e,
                        userId: t
                    }),
                    i = (0, o(217844)._)({
                        name: "collection_connected_property_github",
                        spaceId: e,
                        userId: t
                    }),
                    l = (0, o(217844)._)({
                        name: "collection_connected_property_google_drive",
                        spaceId: e,
                        userId: t
                    }),
                    a = (0, o(217844)._)({
                        name: "collection_connected_property_zendesk",
                        spaceId: e,
                        userId: t
                    }),
                    s = (0, o(217844)._)({
                        name: "collection_synced_database_salesforce_workspace",
                        spaceId: e,
                        userId: t
                    });
                return {
                    [o(49361).e1]: n,
                    [o(49361).ob]: i,
                    [o(49361).Hd]: l,
                    [o(49361).k0]: a,
                    [o(49361).mn]: s
                }
            }

            function n(e, t) {
                if (!e) return;
                if ("verification" === e.type) {
                    if (null != t && t.isPageTreeCollection()) return;
                    return "verified_pages"
                }
                let r = e && (0, o(425985).U)(e) ? e.connectedRelation.integration_id : void 0;
                return (0, o(59651).l)(r)
            }

            function i(e) {
                let t = e.featureName,
                    r = (0, o(682985).K8)(() => {
                        if (e.spaceStore) return e.spaceStore.id;
                        let t = e.collectionStore ? (0, o(974410).f)(e.collectionStore) : (0, o(328765).S)();
                        return e.spaceId ? ? (null == t ? void 0 : t.id)
                    }, [e.spaceId, e.collectionStore, e.spaceStore]),
                    n = (0, o(682985).K8)(() => {
                        var t;
                        return e.userId ? ? (null == (t = o(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id)
                    }, [e.userId]);
                return (0, o(217844)._)({
                    name: t,
                    spaceId: r,
                    userId: n
                })
            }

            function l({
                featureName: e,
                collectionStore: t,
                spaceStore: r
            }) {
                let n, a, s = i({
                    featureName: e,
                    collectionStore: t,
                    spaceStore: r
                });
                if (!s) return;
                let d = (0, o(94418).e2)(s),
                    c = (0, o(94418).Xq)(s);
                return c && "product" === c.type && ("plus" === c.product || "business" === c.product || "enterprise" === c.product) && (n = c.product), d && (a = d && s.expiry && "sunset" === s.expiry.type ? s.expiry.endDate : void 0), {
                    isAvailable: d,
                    expirationDate: a,
                    upsell: c,
                    upsellTier: n
                }
            }
            o.d(t, {
                A: () => n,
                G9: () => i,
                Ld: () => r,
                uF: () => l
            })
        },
        836403: (e, t, o) => {
            o.d(t, {
                t: () => i
            }), o(296540);
            var r = o(474848);
            let n = {
                verticalAlign: "middle",
                display: "inline-block",
                marginBottom: 2
            };

            function i({
                collectionStore: e,
                property: t,
                propertySchema: l,
                style: a,
                blockStore: s
            }) {
                let d = (0, o(764396).i)({
                        collectionStore: e,
                        property: t,
                        propertySchema: l,
                        blockStore: s
                    }),
                    c = (0, o(682985).K8)(() => {
                        if (!d) return null;
                        let {
                            role: e
                        } = d, t = l.name;
                        return (0, o(644712).v)(e, t)
                    }, [d, l.name]),
                    p = (0, r.jsx)(o(16275).I, {
                        icon: o(349939).keyFillSmallIcon,
                        size: "xxs",
                        style: n
                    });
                return c ? (0, r.jsxs)("span", {
                    style: a,
                    children: [p, " ", c]
                }) : null
            }
        },
        845001: (e, t, o) => {
            function r(e, t) {
                return o(218744).default.checkGate({
                    gateName: "collections_capabilities_refactor"
                }) ? (null == e ? void 0 : e.state.canConfigureView) ? ? !1 : (null == t ? void 0 : t.state.canConfigureBlock) ? ? !1
            }

            function n(e, t) {
                let r = (0, o(83208).X)("collections_capabilities_refactor");
                return (0, o(682985).K8)(() => r ? (null == e ? void 0 : e.state.canConfigureView) ? ? !1 : (null == t ? void 0 : t.state.canConfigureBlock) ? ? !1, [e, t, r])
            }
            o.d(t, {
                q: () => r,
                x: () => n
            })
        },
        887779: (e, t, o) => {
            function r(e) {
                let t = (0, o(713311).Ks)();
                return (0, o(682985).K8)(() => {
                    var r;
                    if (!o(218744).default.checkGate({
                            gateName: "external_sync_integration_icon_overlay"
                        })) return null;
                    let n = (null == t ? void 0 : t.collectionStore()) ? ? (null == t || null == (r = t.collectionViewStore()) ? void 0 : r.getCollectionStore());
                    return n ? i({
                        collectionStore: n,
                        propertyId: e
                    }) : null
                }, [t, e])
            }

            function n(e) {
                var t;
                let {
                    collectionContextStore: r,
                    propertyId: n
                } = e;
                if (!o(218744).default.checkGate({
                        gateName: "external_sync_integration_icon_overlay"
                    })) return null;
                let l = (null == r ? void 0 : r.collectionStore()) ? ? (null == r || null == (t = r.collectionViewStore()) ? void 0 : t.getCollectionStore());
                return l ? i({
                    collectionStore: l,
                    propertyId: n
                }) : null
            }

            function i(e) {
                var t, r;
                let {
                    collectionStore: n,
                    propertyId: i
                } = e;
                if (!n.isExternallyImportedAndSyncedCollection()) return null;
                let l = null == (t = n.getFormat()) ? void 0 : t.external_collection_type;
                if (!l) return null;
                if (l === o(565546).uO.Jira) {
                    if (!i) return null;
                    let e = null == (r = n.getSchema()) ? void 0 : r[i];
                    return (0, o(23803).sc)({
                        propertyId: i,
                        collectionStore: n,
                        propertySchema: e,
                        isExternallyImportedAndSyncedCollection: n.isExternallyImportedAndSyncedCollection()
                    }) ? null : "jira"
                }
                return l === o(565546).uO.Salesforce ? "salesforce" : null
            }
            o.d(t, {
                Q: () => r,
                b: () => n
            })
        },
        973037: (e, t, o) => {
            o.d(t, {
                Ge: () => i,
                OQ: () => r,
                aG: () => l,
                yN: () => n
            });
            let r = 160,
                n = 120;

            function i({
                isMobile: e,
                stackPropertyLabelAndValue: t,
                isPropertyInPageDetails: l
            }) {
                if (t || !l) return;
                let a = 120 / o(345152).b * 100;
                return e ? n : `min(max(${a}%, 120px), ${r}px)`
            }

            function l({
                stackPropertyLabelAndValue: e
            }) {
                return e ? {
                    variant: "hug-content"
                } : {
                    variant: "fixed"
                }
            }
        },
        977441: (e, t, o) => {
            o.d(t, {
                A: () => r
            });
            let r = (0, o(109939).YK)({
                inputPlaceholder: {
                    defaultMessage: "Property name",
                    id: "database.viewSettings.propertyTab.propertyName"
                },
                autofillOffLabel: {
                    defaultMessage: "Off",
                    id: "database.viewSettings.propertyTab.autofillOffLabel"
                },
                autofillOnLabel: {
                    defaultMessage: "On",
                    id: "database.viewSettings.propertyTab.autofillOnLabel"
                },
                keptUpToDateWithNotionAITooltip: {
                    defaultMessage: "Auto-updated by AI",
                    id: "database.tableHeaderCell.tooltipAiAutofillDescription"
                },
                buttonPropertyErrorTooltip: {
                    defaultMessage: "Button property has an error",
                    id: "database.tableHeaderCell.tooltipButtonPropertyError"
                },
                offlineWarningFormula: {
                    id: "database.tableHeaderCell.offlineWarning.formula",
                    defaultMessage: "Formula results may not be accurate when offline"
                },
                offlineWarningAutoUpdate: {
                    id: "database.tableHeaderCell.offlineWarning.autoUpdate",
                    defaultMessage: "Content will not auto-update when offline"
                },
                usersAndGroups: {
                    defaultMessage: "Users and groups",
                    id: "database.personProperty.notifications.usersAndGroups"
                },
                usersOnly: {
                    defaultMessage: "Users only",
                    id: "database.personProperty.notifications.usersOnly"
                },
                none: {
                    defaultMessage: "None",
                    id: "database.personProperty.notifications.none"
                },
                itemNameSingular: {
                    defaultMessage: "Singular",
                    id: "database.viewSettings.propertyTab.itemName.singular"
                },
                itemNamePlural: {
                    defaultMessage: "Plural",
                    id: "database.viewSettings.propertyTab.itemName.plural"
                },
                rollupConfigurationWarning: {
                    id: "database.viewSettings.rollupOptions.configurationWarning",
                    defaultMessage: "Configuration needs update"
                },
                rollupConfigurationWarningDescription: {
                    id: "database.viewSettings.rollupOptions.configurationWarningDescription",
                    defaultMessage: "The target property type changed. Re-select the target property to fix."
                },
                rollupConfigurationErrorTooltip: {
                    id: "database.tableHeader.rollupConfigurationError",
                    defaultMessage: "Target property type changed. Edit property to fix."
                }
            })
        }
    }
]);