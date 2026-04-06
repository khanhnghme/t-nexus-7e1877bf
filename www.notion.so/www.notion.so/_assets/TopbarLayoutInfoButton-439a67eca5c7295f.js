"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [2597], {
        184785: (e, t, o) => {
            o.d(t, {
                q: () => i
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.62 3.62 16.75 12.75",
                    directional: !0,
                    svg: (0, o(474848).jsx)("path", {
                        d: "M16.25 3.625c1.174 0 2.125.951 2.125 2.125v8.5a2.125 2.125 0 0 1-2.125 2.125H3.75a2.125 2.125 0 0 1-2.125-2.125v-8.5c0-1.174.951-2.125 2.125-2.125zm-12.5 1.25a.875.875 0 0 0-.875.875v8.5c0 .483.392.875.875.875h8.7V4.875zm9.8 10.25h2.7a.875.875 0 0 0 .875-.875v-8.5a.875.875 0 0 0-.875-.875h-2.7z"
                    })
                },
                i = (0, o(104509).wt)("sidebarRight", n, "default")
        },
        251772: (e, t, o) => {
            o.r(t), o.d(t, {
                TopbarLayoutInfoButton: () => r
            });
            var n = o(296540),
                i = o(474848);
            let a = (0, o(109939).YK)({
                showInfoToolTip: {
                    defaultMessage: "View details",
                    id: "topbar.infoButton.tooltip"
                },
                hideInfoToolTip: {
                    defaultMessage: "Hide details",
                    id: "topbar.infoButton.tooltipToHide"
                },
                buttonAriaLabel: {
                    defaultMessage: "Page info",
                    id: "topbar.infoButton.text"
                }
            });

            function l({
                layoutStoreId: e,
                inPeek: t,
                onClick: n,
                ...r
            }) {
                let d = (0, o(109939).tz)(),
                    u = (0, o(682985).K8)(() => o(82702).A.getPanelState(t ? "peek" : "mainPage").isOpen, [t]);
                return (0, i.jsx)("div", {
                    style: o(440601).RN.iconButton,
                    children: (0, i.jsx)(o(374533).A, {
                        style: s.style2,
                        icon: o(184785).q,
                        iconStyle: o(440601).RN.icon,
                        ariaLabel: d.formatMessage(a.buttonAriaLabel),
                        focused: u,
                        onClick: e => {
                            null == n || n(e)
                        },
                        ...r
                    })
                })
            }
            let s = {
                style0: {
                    textAlign: "center"
                },
                style1: {
                    width: 380,
                    overflow: "hidden"
                },
                style2: {
                    width: o(440601).RN.iconButton.width,
                    height: o(440601).RN.iconButton.height
                }
            };

            function r(e) {
                let {
                    blockStore: t,
                    buttonPopupStore: r,
                    pageViewBlockContext: d
                } = e, u = (0, o(533992).v3)(), c = (0, n.useMemo)(() => (0, i.jsx)("div", {
                    style: s.style0,
                    children: (0, i.jsx)(o(109939).sA, { ...a.showInfoToolTip
                    })
                }), []), p = (0, n.useMemo)(() => (0, i.jsx)("div", {
                    style: s.style0,
                    children: (0, i.jsx)(o(109939).sA, { ...a.hideInfoToolTip
                    })
                }), []), f = (0, o(682985).K8)(() => {
                    if (o(475097).default.state.open) return o(475097).default.state.targetStore
                }, []), g = (0, o(682985).K8)(() => t.getAssociatedCollectionStore(), [t]), h = (0, o(682985).K8)(() => null == g ? void 0 : g.getLayoutStore(), [g]), b = (0, o(935817).sS)({
                    pageStore: t,
                    pageViewBlockStore: void 0,
                    collectionStore: g
                }).page_details, m = f === t, k = (0, o(682985).K8)(() => o(82702).A.getPanelState(m ? "peek" : "mainPage").displayStyle, [m]), S = function(e) {
                    let {
                        tab: t
                    } = e, n = (0, o(533992).v3)();
                    return (0, o(682985).K8)(() => (0, o(953099).N)(n) && o(449473).Ay.state.currentTab === t, [n, t])
                }({
                    tab: o(449473).tF.Info
                }), y = m ? "peek" : "mainPage", {
                    toggleDetailsPanel: P,
                    canShowButton: x
                } = (0, o(450108).q)({
                    collectionStore: g,
                    from: "topbar",
                    forceShowButtonIfNoProperties: !0,
                    pageViewBlockContext: d
                }), w = (0, o(682985).K8)(() => o(82702).A.getPanelState(m ? "peek" : "mainPage").isOpen, [m]);
                if (!x || !h) return null;
                if (!m) {
                    let e = S ? p : c;
                    return (0, i.jsx)(o(51831).m, {
                        placement: "bottom",
                        content: () => e,
                        children: e => (0, i.jsx)(l, { ...e,
                            layoutStoreId: h.id,
                            inPeek: m,
                            onClick: P
                        })
                    })
                }
                if ("static_sidebar" === k) {
                    let e = w ? p : c;
                    return (0, i.jsx)(o(51831).m, {
                        placement: "bottom",
                        content: () => e,
                        children: e => (0, i.jsx)(l, { ...e,
                            layoutStoreId: h.id,
                            inPeek: m,
                            onClick: P
                        })
                    })
                }
                return (0, i.jsx)(o(656252).A, {
                    popupType: o(986939).A.isMobile ? o(656252).z.SlideUp : o(656252).z.Popup,
                    onClose: () => {
                        (0, o(127789).F)({
                            environment: u,
                            layoutStore: h,
                            from: "topbar",
                            panelLocation: y
                        })
                    },
                    buttonPopupStore: r,
                    originGap: 8,
                    content: () => (0, i.jsx)(o(539888).H, {
                        modules: b,
                        store: t,
                        context: m ? o(166654).R.PeekView : o(166654).R.Frame,
                        disabled: !1,
                        shownAs: "popup"
                    }),
                    style: s.style1,
                    children: e => (0, i.jsx)(o(51831).m, {
                        placement: "bottom",
                        content: () => c,
                        children: t => (0, i.jsx)(l, { ...(0, o(63390).A)(e, t),
                            layoutStoreId: h.id,
                            inPeek: m,
                            onClick: P
                        })
                    })
                })
            }
        },
        450108: (e, t, o) => {
            o.d(t, {
                q: () => i
            });
            var n = o(296540);

            function i(e) {
                let {
                    collectionStore: t,
                    from: i,
                    forceShowButtonIfNoProperties: a,
                    pageViewBlockContext: l
                } = e, s = (0, o(682985).K8)(() => null == t ? void 0 : t.getLayoutStore(), [t]), r = (0, o(533992).v3)(), d = l === o(166654).R.PeekView, u = (0, o(682985).K8)(() => o(82702).A.getPanelState(d ? "peek" : "mainPage").isOpen, [d]), c = (0, o(682985).K8)(() => !!t && (0, o(261105).v)({
                    collectionStore: t,
                    collectionViewBlockStore: t.getParentBlockStore(),
                    checkNavigableAncestorLocked: !1
                }), [t]), p = (0, o(682985).K8)(() => !!s && s.getModules().page_details.length > 0, [s]), {
                    count: f,
                    isPropertiesModuleInPageDetails: g
                } = (0, o(682985).K8)(() => p && t ? (0, o(287753).pm)({
                    collectionStore: t
                }) : {
                    count: 0,
                    isPropertiesModuleInPageDetails: !1
                }, [p, t]), h = n.useCallback(() => {
                    if (!s) return;
                    let e = {
                        environment: r,
                        layoutStore: s,
                        from: i,
                        panelLocation: d ? "peek" : "mainPage"
                    };
                    u ? (0, o(127789).F)(e) : (0, o(127789).j)(e)
                }, [r, i, u, d, s]), b = n.useMemo(() => l !== o(166654).R.InPageSnapShot && l !== o(166654).R.DraftPostInInlineComposer && l !== o(166654).R.WorkflowInstructionsInInlineComposer && (f > 0 || !!a && g && c), [l, f, a, g, c]);
                return {
                    pageDetailsPropertiesCount: f,
                    toggleDetailsPanel: h,
                    isDetailsPanelOpen: u,
                    pageDetailsHasModules: p,
                    canShowButton: b
                }
            }
        },
        539888: (e, t, o) => {
            o.d(t, {
                H: () => i
            });
            let n = new(o(815048)).O2("UpdateSidebarTabInfo", async () => await o.e(21377).then(o.bind(o, 983269))),
                i = (0, o(815048)._h)(n, e => e.UpdateSidebarTabInfo)
        }
    }
]);