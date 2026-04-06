"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [2686], {
        368891: (e, t, r) => {
            r.d(t, {
                g: () => i
            });

            function i() {
                return (0, r(682985).O$)(r(728372).AppStoreCurrentUserSettingsStore)
            }
        },
        473119: (e, t, r) => {
            r.r(t), r.d(t, {
                ImproveJiraSyncPopup: () => o
            });
            var i = r(296540);
            let n = "improve_jira_sync_toast";

            function o(e) {
                let t = (0, r(533992).v3)(),
                    o = (0, r(109939).tz)(),
                    {
                        blockStore: a
                    } = e,
                    l = (0, r(718012).V)(),
                    s = (0, r(368891).g)(),
                    p = (0, r(682985).K8)(() => l.getCalloutVisibility("improve_jira_sync_popup").canShow, [l]),
                    u = (0, r(682985).K8)(() => {
                        if (!a.isCollectionView()) return !1;
                        let e = a.getCollectionStoreIfSingleSource();
                        if (!e) return !1;
                        let t = e.getFormat(),
                            i = null == t ? void 0 : t.uri;
                        return !!i && (0, r(607689).Ip)(i)
                    }, [a]),
                    c = (0, r(682985).K8)(() => {
                        var e;
                        return null == s || null == (e = s.getSettings()) ? void 0 : e.seen_improve_jira_sync_popup
                    }, [s]),
                    m = u && !c && p && !r(986939).A.isMobile,
                    d = (0, i.useMemo)(() => (function(e) {
                        let {
                            intl: t,
                            onDismiss: i,
                            environment: o
                        } = e;
                        return {
                            presentationType: "persistent",
                            id: n,
                            icon: r(989556).arrowInCircleUpSmallIcon,
                            title: t.formatMessage({
                                id: "improveJiraSyncPopup.title",
                                defaultMessage: "Improve your Jira Sync"
                            }),
                            message: t.formatMessage({
                                id: "improveJiraSyncPopup.description",
                                defaultMessage: "Jira synced databases are now faster and more reliable."
                            }),
                            actions: {
                                primary: {
                                    title: t.formatMessage({
                                        id: "improveJiraSyncPopup.primaryButton",
                                        defaultMessage: "Update"
                                    }),
                                    onAction: () => {
                                        (0, r(104310).u)({
                                            event: {
                                                eventName: "external_sync_entry_point",
                                                eventProperties: {
                                                    integration: "jira",
                                                    from: "improve_jira_sync_callout",
                                                    flowId: r(639675).Ay.getFlowId()
                                                }
                                            }
                                        }), r(667932).j({
                                            environment: o,
                                            from: "improve_jira_sync_popup"
                                        }), (0, r(104310).u)({
                                            event: {
                                                eventName: "external_sync_entry_point",
                                                eventProperties: {
                                                    integration: "jira",
                                                    from: "improve_jira_sync_callout",
                                                    flowId: r(639675).Ay.createNewFlowId()
                                                }
                                            }
                                        }), i(), r(819652).UW({
                                            id: n
                                        })
                                    }
                                },
                                secondary: {
                                    title: t.formatMessage({
                                        id: "improveJiraSyncPopup.secondaryButton",
                                        defaultMessage: "Learn more"
                                    }),
                                    onAction: () => {
                                        i(), r(819652).UW({
                                            id: n
                                        }), (0, r(624621).L)({
                                            environment: o,
                                            url: (0, r(442564).x)("guides.externalImportAndSync")
                                        })
                                    }
                                }
                            },
                            onDismiss: i
                        }
                    })({
                        intl: o,
                        onDismiss: () => {
                            l.updateCalloutStatus({
                                calloutId: "improve_jira_sync_popup",
                                visible: !1
                            }), s && (0, r(377796).createAndCommit)({
                                userAction: "ImproveJiraSyncPopup.handleDismiss",
                                environment: t,
                                canUndo: !0,
                                cellTarget: "main",
                                perform: e => {
                                    (0, r(862759).m)({
                                        transaction: e,
                                        userSettingsStore: s,
                                        data: {
                                            seen_improve_jira_sync_popup: !0
                                        }
                                    })
                                }
                            })
                        },
                        environment: t
                    }), [s, t, l, o]);
                return (0, r(619772).A)(() => {
                    (0, r(104310).u)({
                        event: {
                            eventName: "external_sync_setup_action",
                            eventProperties: {
                                integration: "jira",
                                actionType: "improve_jira_sync_callout_render",
                                flowId: r(639675).Ay.createNewFlowId()
                            }
                        }
                    }), l.updateCalloutStatus({
                        calloutId: "improve_jira_sync_popup",
                        visible: !0
                    }), r(819652).HK(d)
                }, m), null
            }
        },
        989556: (e, t, r) => {
            r.r(t), r.d(t, {
                arrowInCircleUpSmallIcon: () => o,
                iconDefinition: () => n
            }), r(296540);
            var i = r(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 4.585a.63.63 0 0 0-.442.183l-2.08 2.08a.625.625 0 0 0 .884.884l1.013-1.013v4.07a.625.625 0 1 0 1.25 0V6.72l1.013 1.013a.625.625 0 0 0 .884-.884l-2.08-2.08A.63.63 0 0 0 8 4.585"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                o = (0, r(104509).wt)("arrowInCircleUpSmall", n, "small")
        }
    }
]);