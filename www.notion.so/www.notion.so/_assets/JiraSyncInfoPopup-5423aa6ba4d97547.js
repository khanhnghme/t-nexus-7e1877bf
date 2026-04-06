"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [68744], {
        295597: (e, t, o) => {
            o.r(t), o.d(t, {
                JiraSyncInfoPopup: () => s
            });
            var i = o(296540);
            let n = "jira_sync_info_toast",
                a = (0, o(109939).YK)({
                    titleWhenProject: {
                        id: "jiraSyncInfoPopup.titleForProjectsCollectionView",
                        defaultMessage: "Keep track of projects in Jira"
                    },
                    titleWhenIssues: {
                        id: "jiraSyncInfoPopup.titleForTasksCollectionView",
                        defaultMessage: "Keep track of issues in Jira"
                    },
                    descriptionWhenProject: {
                        id: "jiraSyncInfoPopup.descriptionForProjectsCollectionView",
                        defaultMessage: "Notion makes it easy to preview Jira content, so you can keep track of projects and collaborate more easily"
                    },
                    descriptionWhenIssues: {
                        id: "jiraSyncInfoPopup.descriptionForIssuesCollectionsView",
                        defaultMessage: "Notion makes it easy to preview Jira content, so you can keep track of issues and collaborate more easily"
                    }
                });

            function s(e) {
                let t = (0, o(533992).v3)(),
                    s = (0, o(109939).tz)(),
                    {
                        blockStore: r
                    } = e,
                    l = (0, o(718012).V)(),
                    c = (0, o(368891).g)(),
                    u = (0, o(682985).K8)(() => l.getCalloutVisibility("jira_sync_info_popup").canShow, [l]),
                    {
                        isProjectCollectionView: p,
                        isSetupComplete: d,
                        isJiraSyncedCollection: f
                    } = (0, o(682985).K8)(() => {
                        let e = r.isCollectionView(),
                            t = r.getCollectionStoreIfSingleSource();
                        if (e && t) {
                            var i;
                            let e = t.getFormat(),
                                n = (null == e ? void 0 : e.external_collection_type) === o(565546).uO.Jira,
                                a = !!(null == e || null == (i = e.sync_state) ? void 0 : i.last_synced_at);
                            return {
                                isProjectCollectionView: (null == e ? void 0 : e.app_config_uri) === "notion://projects_collection",
                                isSetupComplete: a,
                                isJiraSyncedCollection: n
                            }
                        }
                        return {
                            isProjectCollectionView: !1,
                            isSetupComplete: !1,
                            isJiraSyncedCollection: !1
                        }
                    }, [r]),
                    m = (0, o(682985).K8)(() => {
                        var e;
                        let t = null == c || null == (e = c.getSettingsStore()) ? void 0 : e.getValue();
                        if (!t) return !0;
                        let o = t.jira_sync_onboarding_tour_state;
                        return !!(o && "notSeen" !== o)
                    }, [c]),
                    g = (0, o(682985).K8)(() => (0, o(23803).Sd)(), []) && f && d && !m && u && !o(986939).A.isMobile,
                    _ = (0, i.useMemo)(() => (function(e) {
                        let {
                            isProjectCollectionView: t,
                            intl: i,
                            onDismiss: s
                        } = e, r = t ? a.titleWhenProject : a.titleWhenIssues, l = t ? a.descriptionWhenProject : a.descriptionWhenIssues;
                        return {
                            presentationType: "persistent",
                            id: n,
                            title: i.formatMessage(r),
                            icon: o(738537).integrationSmallIcon,
                            message: i.formatMessage(l),
                            actions: {
                                primary: {
                                    title: i.formatMessage({
                                        id: "jiraSyncInfoPopup.primaryButton",
                                        defaultMessage: "Take the tour"
                                    }),
                                    onAction: () => {
                                        o(639675).Ay.setState({ ...o(639675).Ay.state,
                                            showOnboardingTour: !0
                                        }), s(), o(819652).UW({
                                            id: n
                                        })
                                    }
                                }
                            },
                            onDismiss: s
                        }
                    })({
                        isProjectCollectionView: p,
                        intl: s,
                        onDismiss: () => {
                            l.updateCalloutStatus({
                                calloutId: "jira_sync_info_popup",
                                visible: !1
                            }), c && (0, o(377796).createAndCommit)({
                                userAction: "JiraSyncInfoPopup.handleDismiss",
                                environment: t,
                                canUndo: !0,
                                cellTarget: "main",
                                perform: e => {
                                    (0, o(862759).m)({
                                        transaction: e,
                                        userSettingsStore: c,
                                        data: {
                                            jira_sync_onboarding_tour_state: "completed"
                                        }
                                    })
                                }
                            })
                        }
                    }), [c, t, l, s, p]);
                return (0, o(619772).A)(() => {
                    l.updateCalloutStatus({
                        calloutId: "jira_sync_info_popup",
                        visible: !0
                    }), o(819652).HK(_)
                }, g), null
            }
        },
        368891: (e, t, o) => {
            o.d(t, {
                g: () => i
            });

            function i() {
                return (0, o(682985).O$)(o(728372).AppStoreCurrentUserSettingsStore)
            }
        },
        738537: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => i,
                integrationSmallIcon: () => n
            }), o(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 2.57 12.26 11.2",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M6.182 4.729a2.154 2.154 0 1 1-4.307 0 2.154 2.154 0 0 1 4.307 0m-1.1 0a1.054 1.054 0 1 0-2.107 0 1.054 1.054 0 0 0 2.107 0m2.071-.5a.5.5 0 0 0 0 1h.076a.5.5 0 1 0 0-1zm1.097.5a.5.5 0 0 1 .5-.5h.076a.5.5 0 0 1 0 1H8.75a.5.5 0 0 1-.5-.5M6.007 7.202a.5.5 0 1 0-.865.502l.038.065a.5.5 0 1 0 .865-.5zm4.647-.182a.5.5 0 0 1 .182.684l-.038.065a.5.5 0 0 1-.865-.5l.038-.067a.5.5 0 0 1 .683-.182M6.806 8.58a.5.5 0 0 0-.865.502l.038.066a.5.5 0 1 0 .865-.501zm3.05-.181a.5.5 0 0 1 .182.683L10 9.148a.5.5 0 1 1-.866-.501l.038-.066a.5.5 0 0 1 .684-.182m2.116-1.516a2.154 2.154 0 1 0 0-4.308 2.154 2.154 0 0 0 0 4.308m0-1.1a1.054 1.054 0 1 1 0-2.108 1.054 1.054 0 0 1 0 2.108M8 13.775a2.154 2.154 0 1 0 0-4.308 2.154 2.154 0 0 0 0 4.308m0-3.208a1.054 1.054 0 1 1 0 2.108 1.054 1.054 0 0 1 0-2.108"
                    })
                },
                n = (0, o(104509).wt)("integrationSmall", i, "small")
        }
    }
]);