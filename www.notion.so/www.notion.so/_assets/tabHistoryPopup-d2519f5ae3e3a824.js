"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [94146], {
        450485: (e, t, i) => {
            i.r(t), i.d(t, {
                TabHistoryPopup: () => l
            }), i(898992), i(354520), i(581454);
            var n = i(296540),
                o = i(474848);
            let r = {
                    icon: {
                        fill: i(632079).Tj.sidebarSecondaryColor
                    }
                },
                s = n.forwardRef(function({
                    store: e,
                    ...t
                }, n) {
                    let s = (0, i(682985).K8)(() => e.getIcon(), [e]),
                        {
                            isEmptyPage: a,
                            canRead: c,
                            iconRecordCategory: l
                        } = (0, i(682985).K8)(() => ({
                            isEmptyPage: e.isEmptyPage(),
                            canRead: e.canRead(),
                            iconRecordCategory: (0, i(569553).Te)(e)
                        }), [e]);
                    return (0, o.jsx)(i(95582).A, { ...t,
                        ref: n,
                        disabled: !c,
                        title: (0, o.jsx)(i(627918).A, {
                            store: e
                        }),
                        icon: (0, o.jsx)(i(569553).B6, {
                            disabled: !0,
                            icon: s,
                            iconRecordCategory: l,
                            isEmptyPage: a,
                            size: 20,
                            pageIconStyle: r.icon,
                            largeIcon: !0,
                            disableAnimation: !0
                        }),
                        ignoreLocalHoverState: !1
                    })
                }),
                a = {
                    minWidth: 230,
                    maxHeight: "70vh"
                };

            function c({
                entries: e
            }) {
                let t = (0, i(533992).v3)(),
                    r = (0, n.useCallback)(() => {
                        i(263863).I.update(e => ({ ...e,
                            open: !1
                        }))
                    }, []),
                    l = (0, n.useCallback)((e, n) => {
                        let o = (0, i(7029).V)(e);
                        i(152994).x(t, n, o), r()
                    }, [r, t]),
                    u = (0, n.useMemo)(() => [{
                        key: "tab-history-section",
                        items: e.map(({
                            store: e,
                            historyId: t
                        }) => ({
                            key: t,
                            action: e => {
                                l(e.event, t)
                            },
                            render: t => (0, o.jsx)(s, { ...t,
                                store: e
                            })
                        })),
                        render: e => (0, o.jsx)(i(844565).A, { ...e
                        })
                    }], [e, l]);
                return (0, o.jsx)("div", {
                    style: a,
                    children: (0, o.jsx)(i(519451).A, {
                        debugName: "TabHistoryMenu",
                        capture: !0,
                        allowEsc: !0,
                        children: (0, o.jsx)(i(747369).A, {
                            menuType: i(649476).gu.Popup,
                            children: (0, o.jsx)(i(558045).A, {
                                type: i(558045).O.Vertical,
                                initialFocus: void 0,
                                sections: u
                            })
                        })
                    })
                })
            }

            function l() {
                let e = (0, i(533992).v3)(),
                    [t, r] = (0, n.useState)(),
                    {
                        open: s,
                        direction: a
                    } = (0, i(682985).O$)(i(263863).I),
                    l = (0, i(682985).K8)(() => s ? i(219040).H.getHistoryEntries(a).map(e => {
                        let t = function(e) {
                            let t = (0, i(52628).w)(e);
                            if (t) return (0, i(163114).AK)(t)
                        }(e.url);
                        if (t) return {
                            store: t,
                            historyId: e.historyId
                        }
                    }).filter(i(722371).O9) : [], [a, s]),
                    u = (0, i(682985).O$)(i(584257).b),
                    p = (0, i(682985).K8)(() => (0, i(715094).k)(e), [e]);
                return ((0, n.useEffect)(() => {
                    r(new DOMRect(p, u ? 0 : (0, i(801113).ek)(e.device.isElectronMac) + 10, 0, 0))
                }, [p, u, e.device.isElectronMac]), l.length) ? (0, o.jsx)(i(182718).zD, {
                    popupType: i(423291).n.Popup,
                    content: () => (0, o.jsx)(c, {
                        entries: l
                    }),
                    open: s,
                    originRect: t,
                    placementToOrigin: "right",
                    alignmentToOrigin: "start",
                    originGap: 10,
                    onDismiss: () => {
                        i(263863).I.update(e => ({ ...e,
                            open: !1
                        }))
                    },
                    trapFocus: !0,
                    disableFlippingPlacement: !0
                }) : null
            }
        },
        715094: (e, t, i) => {
            i.d(t, {
                k: () => n
            });

            function n(e) {
                let {
                    shouldShowSidebar: t
                } = (0, i(846044).X)(e), n = (0, i(712358).K)(e);
                return t && n && (0, i(845181).t)(e) ? (0, i(623179).r)(e) : 0
            }
        }
    }
]);