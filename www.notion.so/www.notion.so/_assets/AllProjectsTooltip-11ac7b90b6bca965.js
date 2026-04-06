"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [37062, 88895], {
        59579: (t, e, o) => {
            o.d(e, {
                a: () => r
            });

            function r(t, e) {
                let r = {
                    id: "",
                    key: e,
                    type: "static",
                    category: o(292609).lU[e].category,
                    props: {}
                };
                (0, o(466290).K)(t, r)
            }
        },
        95498: (t, e, o) => {
            o.r(e), o.d(e, {
                AllProjectsTooltip: () => s,
                NavigateToProjectTasksTooltip: () => u,
                ProjectCustomizationTooltip: () => l,
                TasksDatabaseViewsTooltip: () => p,
                YourCurrentTeamspaceTooltip: () => c
            }), o(898992), o(672577);
            var r = o(296540),
                a = o(474848);
            let i = {
                    minWidth: 300,
                    marginBottom: 0,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    fontSize: o(699422).J.UIRegular.desktop,
                    minHeight: 40
                },
                n = "project-management-import-onboarding",
                s = r.memo(function({
                    origin: t
                }) {
                    let e = (0, o(533992).v3)(),
                        r = (0, o(682985).K8)(() => !!o(414246).Z.state.showOnboardingTour, []),
                        s = (0, o(718012).V)();
                    return r ? (0, a.jsx)(o(397732).B, {
                        shouldShow: r,
                        calloutId: "asana_post_import_tour",
                        inAppCalloutStore: s,
                        children: (0, a.jsx)(o(992351).B, {
                            origin: t,
                            placementToOrigin: "right",
                            style: i,
                            tutorialId: n,
                            tutorialStepId: "all-projects-tooltip",
                            pointerLength: 40,
                            pointerPosition: "12.5%",
                            header: (0, a.jsx)("div", {
                                children: (0, a.jsx)(o(109939).sA, {
                                    id: "AsanaImportOnboarding.AllProjects.header1",
                                    defaultMessage: "Your Projects are here"
                                })
                            }),
                            content: (0, a.jsx)(o(109939).sA, {
                                id: "AsanaImportOnboarding.AllProjects.content",
                                defaultMessage: "All your Asana projects for this team are on this page. Use filters and views to customize this database to fit your needs."
                            }),
                            onPrimaryButtonClick: () => (0, o(396785).trackImportOnboardingTourProgress)(e, {
                                action: "advance",
                                importer: "asana",
                                from: "toast",
                                callout_id: n,
                                progress: 1
                            })
                        })
                    }) : null
                }),
                l = r.memo(function({
                    origin: t
                }) {
                    let e = (0, o(682985).K8)(() => !!o(414246).Z.state.showOnboardingTour, []),
                        r = (0, o(533992).v3)();
                    return e ? (0, a.jsx)(o(992351).B, {
                        origin: t,
                        placementToOrigin: "left",
                        style: i,
                        tutorialId: n,
                        tutorialStepId: "project-customization-tooltip",
                        pointerLength: 30,
                        pointerPosition: "8%",
                        header: (0, a.jsx)("div", {
                            children: (0, a.jsx)(o(109939).sA, {
                                id: "AsanaImportOnboarding.ProjectCustomization.header",
                                defaultMessage: "Customize your projects"
                            })
                        }),
                        content: (0, a.jsx)(o(109939).sA, {
                            id: "AsanaImportOnboarding.ProjectCustomization.content",
                            defaultMessage: "Customize your project by adding properties or a description on this page"
                        }),
                        onPrimaryButtonClick: () => (0, o(396785).trackImportOnboardingTourProgress)(r, {
                            action: "advance",
                            importer: "asana",
                            from: "toast",
                            callout_id: n,
                            progress: 2
                        })
                    }) : null
                }),
                u = r.memo(function({
                    origin: t,
                    onNext: e,
                    store: s
                }) {
                    let l = (0, o(682985).K8)(() => o(414246).Z.state.showOnboardingTour, []),
                        u = (0, o(533992).v3)(),
                        d = (0, r.useCallback)((t, e) => {
                            let r = o(728372).AppStoreMainEditorCurrentBlockStore.state,
                                a = o(28630).wy({
                                    environment: u,
                                    store: t,
                                    mainEditorCurrentBlockStore: r,
                                    collectionContextStore: e,
                                    fullyQualified: !1
                                });
                            a && (0, o(79266).navigate)({
                                environment: u,
                                url: a
                            })
                        }, [u]);
                    return l ? (0, a.jsx)(o(992351).B, {
                        origin: t,
                        placementToOrigin: "bottom",
                        style: i,
                        tutorialId: n,
                        tutorialStepId: "navigate-to-project-tasks-tooltip",
                        pointerLength: 20,
                        pointerPosition: "30%",
                        pointerOffset: 25,
                        onPrimaryButtonClick: () => {
                            var t;
                            let r = (null == s ? void 0 : s.groupsStore.anyGroupHasResults()) && s.groupsStore.getAllGroupStates(),
                                a = r && r.length > 0 ? null == (t = r.find(t => {
                                    var e;
                                    return null == (e = t.reducerResultStore) || null == (e = e.state) ? void 0 : e.blockIds.length
                                })) || null == (t = t.reducerResultStore) || null == (t = t.state) ? void 0 : t.blockIds[0] : void 0;
                            a && s && d(new(o(970831)).B(u, {
                                id: a,
                                table: "block"
                            }), s), e && e(), (0, o(396785).trackImportOnboardingTourProgress)(u, {
                                action: "advance",
                                importer: "asana",
                                from: "toast",
                                callout_id: n,
                                progress: 3
                            })
                        },
                        header: (0, a.jsx)("div", {
                            children: (0, a.jsx)(o(109939).sA, {
                                id: "AsanaImportOnboarding.NavigateToTasks.header",
                                defaultMessage: "View tasks for this project"
                            })
                        }),
                        content: (0, a.jsx)(o(109939).sA, {
                            id: "AsanaImportOnboarding.NavigateToTasks.content",
                            defaultMessage: "Click ‘Open’ next to the project title to view related tasks"
                        })
                    }) : null
                }),
                d = {
                    display: "inline-block",
                    marginTop: 4,
                    verticalAlign: "top",
                    marginInlineEnd: 2
                },
                p = r.memo(function({
                    origin: t,
                    store: e
                }) {
                    let r = (0, o(533992).v3)();
                    return (0, o(682985).K8)(() => o(414246).Z.state.showOnboardingTour && (null == e ? void 0 : e.isInPeekRendererStore), [e]) ? (0, a.jsx)(o(992351).B, {
                        origin: t,
                        placementToOrigin: "bottom",
                        style: i,
                        tutorialId: n,
                        tutorialStepId: "related-tasks-database-views-tooltip",
                        pointerLength: 20,
                        onPrimaryButtonClick: o(763230).lQ,
                        header: (0, a.jsx)(o(109939).sA, {
                            id: "AsanaImportOnboarding.RelatedTasks.header",
                            defaultMessage: "Project Tasks"
                        }),
                        content: (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(o(109939).sA, {
                                id: "AsanaImportOnboarding.RelatedTasks.contentPart1",
                                defaultMessage: "Find all your Asana tasks related to this project in the "
                            }), (0, a.jsx)(o(16275).I, {
                                icon: o(433413).h,
                                size: "sm",
                                style: d
                            }), (0, a.jsx)(o(109939).sA, {
                                id: "AsanaImportOnboarding.RelatedTasks.contentPart2",
                                defaultMessage: "Tasks Database"
                            })]
                        }),
                        onSkipButtonClick: () => (0, o(396785).trackImportOnboardingTourProgress)(r, {
                            action: "advance",
                            importer: "asana",
                            from: "toast",
                            callout_id: n,
                            progress: 4
                        })
                    }) : null
                }),
                c = r.memo(function({
                    origin: t
                }) {
                    let e = (0, o(682985).K8)(() => !!o(414246).Z.state.showOnboardingTour, []),
                        r = (0, o(533992).v3)();
                    return e ? (0, a.jsx)(o(992351).B, {
                        origin: t,
                        placementToOrigin: "bottom",
                        style: i,
                        tutorialId: n,
                        tutorialStepId: "your-teamspace-tooltip",
                        pointerLength: 20,
                        header: (0, a.jsx)(o(109939).sA, {
                            id: "AsanaImportOnboarding.YourCurrentTeamspace.header",
                            defaultMessage: "Your current teamspace"
                        }),
                        content: (0, a.jsx)(o(109939).sA, {
                            id: "AsanaImportOnboarding.YourCurrentTeamspace.content",
                            defaultMessage: "Navigate between your projects, tasks and other pages from here"
                        }),
                        onPrimaryButtonClick: () => {
                            (0, o(396785).trackImportOnboardingTourProgress)(r, {
                                action: "advance",
                                importer: "asana",
                                from: "toast",
                                callout_id: n,
                                progress: 5
                            })
                        }
                    }) : null
                })
        },
        128817: (t, e, o) => {
            function r(t, e, r) {
                var a;
                let i = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i) return;
                let n = null == (a = i.getSettings()) ? void 0 : a.tutorials;
                r ? (0, o(862759).m)({
                    userSettingsStore: i,
                    transaction: r,
                    data: {
                        tutorials: { ...n,
                            [e]: (0, o(752153).i9)(i, e)
                        }
                    }
                }) : p({
                    userAction: "TutorialActions.nextStep",
                    environment: t,
                    perform: t => {
                        (0, o(862759).m)({
                            userSettingsStore: i,
                            transaction: t,
                            data: {
                                tutorials: { ...n,
                                    [e]: (0, o(752153).i9)(i, e)
                                }
                            }
                        })
                    },
                    userId: i.id
                })
            }

            function a(t, e) {
                var r;
                let a = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a) return;
                let i = null == (r = a.getSettings()) ? void 0 : r.tutorials;
                p({
                    userAction: "TutorialActions.prevStep",
                    environment: t,
                    perform: t => {
                        (0, o(862759).m)({
                            userSettingsStore: a,
                            transaction: t,
                            data: {
                                tutorials: { ...i,
                                    [e]: (0, o(752153).KD)(a, e)
                                }
                            }
                        })
                    },
                    userId: a.id
                })
            }

            function i(t, e) {
                var r;
                let a = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a) return;
                let i = null == (r = a.getSettings()) ? void 0 : r.tutorials;
                (null == i ? void 0 : i[e]) !== o(212169).YD && p({
                    userAction: "TutorialActions.dismissTutorial",
                    environment: t,
                    perform: t => {
                        (0, o(862759).m)({
                            userSettingsStore: a,
                            transaction: t,
                            data: {
                                tutorials: { ...i,
                                    [e]: o(212169).YD
                                }
                            }
                        })
                    },
                    userId: a.id
                })
            }

            function n(t) {
                let e = o(728372).AppStoreCurrentUserSettingsStore.state;
                e && p({
                    userAction: "TutorialActions.resetTutorialsDebug",
                    environment: t,
                    perform: t => {
                        (0, o(862759).m)({
                            userSettingsStore: e,
                            transaction: t,
                            data: {
                                tutorials: {}
                            }
                        })
                    },
                    userId: e.id
                })
            }

            function s(t, e, r) {
                var a;
                let i = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i || (0, o(752153).x$)(i, e)) return;
                let n = (0, o(752153).gt)(i, e);
                o(212169).c$[e].steps.findIndex(t => t.id === n) >= o(212169).c$[e].steps.findIndex(t => t.id === r) || (0, o(862759).m)({
                    userSettingsStore: i,
                    transaction: t,
                    data: {
                        tutorials: { ...null == (a = i.getSettings()) ? void 0 : a.tutorials,
                            [e]: r
                        }
                    }
                })
            }

            function l(t, e, r) {
                if ((0, o(752153).ll)(r)) return;
                let a = (0, o(752153).tb)(e, r);
                a && s(t, e, a)
            }

            function u(t) {
                var e;
                let {
                    environment: r,
                    tutorialId: a,
                    tutorialStepId: i,
                    transaction: n
                } = t, s = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!s) return;
                let l = null == (e = s.getSettings()) ? void 0 : e.tutorials;
                n ? (0, o(862759).m)({
                    userSettingsStore: s,
                    transaction: n,
                    data: {
                        tutorials: { ...l,
                            [a]: i
                        }
                    }
                }) : p({
                    userAction: "TutorialActions.nextStep",
                    environment: r,
                    perform: t => {
                        (0, o(862759).m)({
                            userSettingsStore: s,
                            transaction: t,
                            data: {
                                tutorials: { ...l,
                                    [a]: i
                                }
                            }
                        })
                    },
                    userId: s.id
                })
            }

            function d(t) {
                let e = o(728372).AppStoreCurrentUserSettingsStore.state;
                return !!e && (0, o(752153).x$)(e, t)
            }

            function p(t) {
                return (0, o(377796).createAndCommit)({ ...t,
                    canUndo: !1,
                    cellTarget: "main"
                })
            }
            o.r(e), o.d(e, {
                checkIsTutorialDone: () => d,
                dismissTutorial: () => i,
                resetTutorials: () => n,
                tutorialAdvanceToStep: () => s,
                tutorialAdvanceToStepAfter: () => l,
                tutorialGoToNextStep: () => r,
                tutorialGoToPrevStep: () => a,
                tutorialGoToStep: () => u
            })
        },
        212169: (t, e, o) => {
            o.d(e, {
                Ud: () => n,
                YD: () => i,
                c$: () => r,
                q_: () => a
            });
            let r = {
                    "sprints-onboarding": {
                        steps: [{
                            id: "current-sprint-view-tooltip"
                        }, {
                            id: "sprint-task-tooltip"
                        }, {
                            id: "complete-sprint-button-tooltip"
                        }]
                    },
                    "enhanced-qna-onboarding": {
                        steps: [{
                            id: "find-in-tooltip"
                        }, {
                            id: "mention-tooltip"
                        }]
                    },
                    "jira-sync-onboarding": {
                        steps: [{
                            id: "all-projects-tooltip"
                        }, {
                            id: "all-issues-tooltip"
                        }, {
                            id: "database-views-and-filters-tooltip"
                        }, {
                            id: "settings-to-setup-projects-and-issues"
                        }]
                    },
                    "project-management-import-onboarding": {
                        steps: [{
                            id: "your-teamspace-tooltip"
                        }, {
                            id: "all-projects-tooltip"
                        }, {
                            id: "navigate-to-project-tasks-tooltip"
                        }, {
                            id: "project-customization-tooltip"
                        }, {
                            id: "related-tasks-database-views-tooltip"
                        }]
                    },
                    "ai-comment-onboarding": {
                        steps: [{
                            id: "ai-comment-onboarding-tooltip"
                        }]
                    },
                    database_onboarding: {
                        steps: [{
                            id: "database_onboarding_status_property_tooltip"
                        }, {
                            id: "database_onboarding_add_property_tooltip"
                        }, {
                            id: "database_onboarding_database_page_tooltip"
                        }, {
                            id: "database_onboarding_board_view_tooltip"
                        }]
                    },
                    "new-user-home-workspace-tour": {
                        steps: [{
                            id: "teamspaces"
                        }]
                    }
                },
                a = "completed",
                i = "dismissed";

            function n(t, e) {
                return null == e ? void 0 : e[t]
            }
        },
        368891: (t, e, o) => {
            o.d(e, {
                g: () => r
            });

            function r() {
                return (0, o(682985).O$)(o(728372).AppStoreCurrentUserSettingsStore)
            }
        },
        396785: (t, e, o) => {
            o.r(e), o.d(e, {
                PostImportIntroPopup: () => n,
                trackImportOnboardingTourProgress: () => s
            });
            var r = o(296540);
            let a = (0, o(109939).YK)({
                    titleForIntroToast: {
                        id: "PostImportIntroPopup.titleForIntroToast",
                        defaultMessage: "Project Management in Notion"
                    },
                    descriptionForIntroToast: {
                        id: "PostImportIntroPopup.descriptionForIntroToast",
                        defaultMessage: "Your newly imported Asana projects are here. Want to learn more about how to use Notion Projects and Tasks?"
                    },
                    primaryButton: {
                        id: "PostImportIntroPopup.primaryButton",
                        defaultMessage: "Take the tour"
                    }
                }),
                i = "post_import_intro_toast";

            function n() {
                let t = "asana_post_import_tour",
                    e = (0, o(533992).v3)(),
                    n = (0, o(718012).V)(),
                    l = (0, o(368891).g)(),
                    u = (0, o(682985).K8)(() => {
                        var e, r;
                        return (null == (e = o(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.getFormat().is_asana_imported_project) === !0 && (null == l || null == (r = l.getSettings()) ? void 0 : r.seen_asana_post_import_tour) !== !0 && n.getCalloutVisibility(t).canShow
                    }, [n, l]),
                    d = (0, r.useCallback)(() => {
                        ! function(t) {
                            let {
                                environment: e
                            } = t, r = o(728372).AppStoreCurrentUserSettingsStore.state;
                            r && void 0 === r.getSettingsStore().getKeyStore("seen_asana_post_import_tour").getValue() && (0, o(377796).createAndCommit)({
                                environment: e,
                                userAction: "userSettingsActions.setSeenAsanaPostImportTutorial",
                                canUndo: !0,
                                cellTarget: "main",
                                perform: t => {
                                    (0, o(862759).m)({
                                        userSettingsStore: r,
                                        transaction: t,
                                        data: {
                                            seen_asana_post_import_tour: !0
                                        }
                                    })
                                }
                            })
                        }({
                            environment: e
                        }), (0, o(59579).a)(e, t)
                    }, [e]),
                    p = (0, r.useCallback)(() => {
                        l && (0, o(377796).createAndCommit)({
                            userAction: "PostImportIntroPopup.startOnboardingTour",
                            environment: e,
                            canUndo: !0,
                            cellTarget: "main",
                            perform: t => {
                                var e;
                                (0, o(862759).m)({
                                    transaction: t,
                                    userSettingsStore: l,
                                    data: {
                                        tutorials: { ...null == l || null == (e = l.getSettings()) ? void 0 : e.tutorials,
                                            "project-management-import-onboarding": "your-teamspace-tooltip"
                                        }
                                    }
                                })
                            }
                        }), o(414246).Z.setState({ ...o(414246).Z.state,
                            showOnboardingTour: !0
                        })
                    }, [l, e]),
                    c = (0, o(109939).tz)(),
                    m = (0, r.useMemo)(() => (function(t) {
                        let {
                            intl: e,
                            onDismiss: o,
                            primaryActionHandler: r
                        } = t;
                        return {
                            presentationType: "persistent",
                            id: i,
                            title: e.formatMessage(a.titleForIntroToast),
                            message: e.formatMessage(a.descriptionForIntroToast),
                            actions: {
                                primary: {
                                    title: e.formatMessage(a.primaryButton),
                                    onAction: r
                                }
                            },
                            onDismiss: o
                        }
                    })({
                        intl: c,
                        onDismiss: () => {
                            d(), s(e, {
                                importer: "asana",
                                action: "dismissed",
                                progress: 0,
                                callout_id: t,
                                from: "imported_page"
                            })
                        },
                        primaryActionHandler: () => {
                            s(e, {
                                importer: "asana",
                                action: "start",
                                progress: 0,
                                callout_id: t,
                                from: "imported_page"
                            }), p(), d(), o(819652).UW({
                                id: i
                            })
                        }
                    }), [c, d, e, p]);
                return (0, o(619772).A)(() => {
                    o(819652).HK(m)
                }, u), null
            }

            function s(t, e) {
                return (0, o(104310).u)({
                    event: {
                        eventName: "import_projects_onboarding",
                        eventProperties: e
                    }
                })
            }
        },
        433413: (t, e, o) => {
            o.d(e, {
                h: () => i
            }), o(296540);
            var r = o(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M10.172 5.564a.625.625 0 0 0-.858.214L7.36 9.035 6.325 7.827a.625.625 0 1 0-.95.813l1.6 1.867a.625.625 0 0 0 1.01-.085l2.4-4a.625.625 0 0 0-.213-.858"
                        }), (0, r.jsx)("path", {
                            d: "M4.25 2.375c-1.036 0-1.875.84-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h7.5c1.036 0 1.875-.84 1.875-1.875v-7.5c0-1.036-.84-1.875-1.875-1.875zM3.625 4.25c0-.345.28-.625.625-.625h7.5c.345 0 .625.28.625.625v7.5c0 .345-.28.625-.625.625h-7.5a.625.625 0 0 1-.625-.625z"
                        })]
                    })
                },
                i = (0, o(104509).wt)("checkmarkSquareSmall", a, "small")
        },
        466290: (t, e, o) => {
            o.d(e, {
                K: () => a
            });
            var r = () => o(906745);

            function a(t, e) {
                o(696190).default.isVisible(e.key) && (o(696190).default.removeMessage(e.key), o(986939).A.isAdminMode || (! function(t, e) {
                    let a = o(728372).AppStoreCurrentUserSettingsStore.state,
                        i = null == a ? void 0 : a.getSettings();
                    if (!i || !a) return;
                    let n = new(o(543346)).GO(i.callout_placement_exposures);
                    for (let t of e) n.add(t, r().DateTime.now().toMillis());
                    (0, o(377796).createAndCommit)({
                        environment: t,
                        userAction: "messageActions.addPlacementExposures",
                        cellTarget: "main",
                        canUndo: !0,
                        perform: t => {
                            (0, o(862759).m)({
                                userSettingsStore: a,
                                transaction: t,
                                data: {
                                    callout_placement_exposures: n.exportUserSetting()
                                }
                            })
                        }
                    })
                }(t, [(0, o(125542).Q3)(e)]), (0, o(476114).q)(t, e), o(728372).AppStoreInAppCalloutStore.state.updateCalloutStatus({
                    calloutId: e.key,
                    visible: !1
                }), (0, o(819416).Z)(t, e.key)), o(696190).default.isPendingDynamicMessage(e.key) && (0, o(740063).G)(e.key))
            }
        },
        476114: (t, e, o) => {
            function r({
                environment: t,
                message: e,
                overwrite: a = !1
            }) {
                let i = o(728372).AppStoreCurrentUserSettingsStore.state,
                    n = null == i ? void 0 : i.getSettings();
                if (!i || !n) return;
                let s = new Map((n.callout_dismissal_timestamps ? ? []).map(t => [t.name, t]));
                (!s.has(e.key) || a) && s.set(e.key, {
                    name: e.key,
                    timestamp: o(906745).DateTime.now().toMillis()
                }), (0, o(377796).createAndCommit)({
                    environment: t,
                    userAction: "messageActions.addUserSettingsDismissal",
                    cellTarget: "main",
                    canUndo: !0,
                    perform: t => {
                        (0, o(862759).m)({
                            userSettingsStore: i,
                            transaction: t,
                            data: {
                                callout_dismissal_timestamps: Array.from(s.values())
                            }
                        })
                    }
                })
            }

            function a(t, e) {
                let a = (0, o(125542).K0)(e);
                "once_per_user" === a ? r({
                    environment: t,
                    message: e
                }) : "once_per_space" === a && function({
                    environment: t,
                    message: e,
                    overwrite: r = !1
                }) {
                    let a = o(728372).AppStoreSidebarSpaceViewStore.state,
                        i = null == a ? void 0 : a.getSettings();
                    if (!a || !i) return;
                    let n = a.getSpaceId(),
                        s = new Map((i.callout_dismissal_timestamps ? ? []).map(t => [t.name, t]));
                    (!s.has(e.key) || r) && s.set(e.key, {
                        name: e.key,
                        timestamp: o(906745).DateTime.now().toMillis()
                    }), (0, o(377796).createAndCommit)({
                        environment: t,
                        userAction: "messageActions.addSpaceViewDismissal",
                        canUndo: !0,
                        cellTarget: n ? {
                            spaceWithId: n
                        } : void 0,
                        perform: t => {
                            o(380762).AG(a, t, {
                                callout_dismissal_timestamps: Array.from(s.values())
                            })
                        }
                    })
                }({
                    environment: t,
                    message: e
                })
            }
            o.d(e, {
                q: () => a,
                H: () => r
            }), o(581454)
        },
        752153: (t, e, o) => {
            function r(t, e) {
                return a(l(t, e))
            }

            function a(t) {
                return void 0 !== t && (t === o(212169).q_ || t === o(212169).YD)
            }

            function i(t, e) {
                if (a(e)) return;
                let r = o(212169).c$[t],
                    i = r.steps.findIndex(t => t.id === e);
                return -1 === i ? r.steps[0].id : i === r.steps.length - 1 ? o(212169).q_ : r.steps[i + 1].id
            }

            function n(t, e) {
                let o = l(t, e);
                if (!(!o || a(o))) return i(e, o)
            }

            function s(t, e) {
                let r = l(t, e);
                if (r) {
                    var i;
                    let t = o(212169).c$[e];
                    if (a(r)) return null == (i = t.steps.at(-1)) ? void 0 : i.id;
                    let n = t.steps.findIndex(t => t.id === r);
                    return -1 !== n && 0 !== n ? t.steps[n - 1].id : void 0
                }
            }

            function l(t, e) {
                var r;
                if (!t) return;
                let a = ((null == (r = t.getSettings()) ? void 0 : r.tutorials) || {})[e];
                return void 0 === a ? o(212169).c$[e].steps[0].id : a
            }
            o.d(e, {
                KD: () => s,
                gt: () => l,
                i9: () => n,
                ll: () => a,
                tb: () => i,
                x$: () => r
            }), o(18107), o(967357)
        },
        992351: (t, e, o) => {
            o.d(e, {
                B: () => n
            });
            var r = o(296540);
            let a = new Map;
            var i = o(474848);

            function n({
                tutorialId: t,
                tutorialStepId: e,
                onPrimaryButtonClick: s,
                displayStore: l,
                calloutId: u,
                enableTracking: d = !1,
                ...p
            }) {
                var c;
                let m, g, S = (0, o(533992).v3)(),
                    f = (c = `${t}.${e}`, m = !a.get(c), (g = (0, r.useRef)(m)).current && a.set(c, !0), (0, r.useEffect)(() => () => {
                        g.current && a.set(c, !1)
                    }, [c]), g.current),
                    v = (0, o(718012).V)(),
                    {
                        currentStep: A,
                        isLoading: _
                    } = (0, o(682985).K8)(() => {
                        var e;
                        return {
                            isLoading: !(null != (e = o(728372).AppStoreCurrentUserSettingsStore.state) && e.getSettings()),
                            currentStep: (0, o(752153).gt)(o(728372).AppStoreCurrentUserSettingsStore.state, t)
                        }
                    }, [t]);
                if ((0, r.useEffect)(() => {
                        _ || A !== e || !f ? null == l || l.setState(!1) : null == l || l.setState(!0)
                    }, [_, A, e, f, l]), _ || A !== e || !f) return null;
                let b = o(212169).c$[t],
                    T = b.steps.findIndex(t => t.id === e),
                    h = b.steps.length,
                    k = r => {
                        d && (0, o(104310).u)({
                            event: {
                                eventName: "tutorial_tooltip_action",
                                eventProperties: {
                                    step: T + 1,
                                    total_steps: h,
                                    tutorial_id: t,
                                    tutorial_step_id: e,
                                    action_type: r
                                }
                            }
                        })
                    },
                    I = (0, i.jsx)(o(788139).k, {
                        onCloseClick: () => {
                            o(128817).dismissTutorial(S, t), k("dismiss")
                        },
                        onPrimaryButtonClick: e => {
                            o(128817).tutorialGoToNextStep(S, t), null == s || s(e), k("next")
                        },
                        onBackButtonClick: () => {
                            o(128817).tutorialGoToPrevStep(S, t), k("back")
                        },
                        numSteps: h,
                        currStepIndex: T,
                        ...p
                    });
                return u ? (0, i.jsx)(o(397732).B, {
                    calloutId: u,
                    shouldShow: !0,
                    inAppCalloutStore: v,
                    children: I
                }) : I
            }
        }
    }
]);