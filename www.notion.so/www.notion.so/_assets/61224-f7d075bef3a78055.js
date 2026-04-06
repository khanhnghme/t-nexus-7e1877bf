"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [61224], {
        16986: (e, t, n) => {
            n.d(t, {
                Z: () => l
            }), n(898992), n(354520), n(581454);
            var o = n(296540),
                i = n(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.79 2.82 9.22 10.36",
                    svg: (0, i.jsx)("path", {
                        d: "m5.605 13.014 6.818-3.977a1.2 1.2 0 0 0 0-2.074L5.605 2.987A1.2 1.2 0 0 0 3.8 4.023v7.954a1.2 1.2 0 0 0 1.805 1.037"
                    })
                },
                a = (0, n(104509).wt)("mediaPlayFillSmall", r, "fillSmall"),
                s = (0, n(109939).YK)({
                    testAgentPrompt: {
                        id: "workflow.agent.triggers.testAgentPrompt",
                        defaultMessage: "Help me run {agentName, select, undefined {this agent} other {{agentName}}}"
                    }
                }),
                l = o.memo(function(e) {
                    let {
                        workflowStore: t,
                        disabled: r
                    } = e, l = (0, n(533992).v3)(), d = (0, n(109939).tz)(), {
                        navigate: c
                    } = (0, o.useContext)(n(44894).E), u = (0, n(972740).L)(), g = (0, n(876252).$)(), {
                        workflowValue: p
                    } = (0, n(867587).N)(t, !0), f = (0, n(682985).K8)(() => (0, n(445568).isWorkflowDataDatabaseAgent)(p), [p]), m = (0, n(682985).K8)(() => ((null == p ? void 0 : p.triggers) ? ? []).filter(e => {
                        var t;
                        let o = null == (t = e.state) ? void 0 : t.type;
                        return (0, n(934558).A)({
                            triggerType: o,
                            context: "display"
                        })
                    }), [p]), h = (0, o.useCallback)(() => {
                        if (t.table !== n(43296).C || !u || !g) return;
                        let e = n(728372).AppStoreSidebarSpaceViewStore.state;
                        if (!e) return;
                        let o = m.map(e => {
                                var t, o;
                                return {
                                    id: e.id,
                                    type: (null == (t = e.state) ? void 0 : t.type) ? ? "unknown",
                                    label: e.name ? ? (null == (o = e.state) ? void 0 : o.type) ? ? "Trigger",
                                    enabled: !1 !== e.enabled,
                                    configured: (0, n(548161).VB)(e)
                                }
                            }).sort((e, t) => e.enabled === t.enabled ? 0 : e.enabled ? -1 : 1),
                            i = !!n(218744).default.checkGate({
                                gateName: "agent_query_mail_tool"
                            }),
                            r = !!n(218744).default.checkGate({
                                gateName: "agent_query_calendar_tool"
                            }),
                            a = d.formatMessage(s.testAgentPrompt, {
                                agentName: t.getName() ? ? void 0
                            });
                        (0, n(599231).qt)({
                            action: "run_agent",
                            workflowId: t.id
                        });
                        let p = (0, n(674880).Jv)({
                                environment: l,
                                spaceStore: u,
                                userStore: g,
                                promptType: "test_custom_agent",
                                value: (0, n(247438).x9d)(a),
                                locale: (0, n(599412).H)(d),
                                args: {
                                    type: "test_custom_agent",
                                    enableQueryMail: i,
                                    enableQueryCalendar: r,
                                    workflowName: t.getName() ? ? void 0,
                                    triggers: o
                                }
                            }),
                            h = (0, n(674880).Xd)({
                                environment: l,
                                inferenceContext: {
                                    userStore: g,
                                    spaceStore: u,
                                    spaceViewStore: e,
                                    blockStore: void 0,
                                    peekStore: void 0,
                                    workflowStore: t
                                },
                                config: function(e) {
                                    let {
                                        environment: t,
                                        spaceId: o,
                                        workflowId: i,
                                        isDatabaseAgent: r
                                    } = e, a = (0, n(922900).getWorkflowAgentConfig)({
                                        environment: t,
                                        spaceId: o,
                                        isCustomAgent: !0,
                                        isCustomAgentBuilder: !0,
                                        workflowId: i,
                                        useCustomAgentDraft: !0,
                                        useDraftActorPointer: !0
                                    });
                                    return r ? { ...a,
                                        isDatabaseAgent: !0,
                                        enableRunAgentTool: !0,
                                        enableAgentThreadTools: !0
                                    } : a
                                }({
                                    environment: l,
                                    spaceId: u.id,
                                    workflowId: t.id,
                                    isDatabaseAgent: f
                                }),
                                addSteps: [p],
                                surface: "workflows"
                            }),
                            w = (0, n(225900).N)({
                                environment: l,
                                spaceStore: u,
                                transcript: h,
                                workflowId: t.id,
                                createdSource: "workflows",
                                parentPointer: t.pointer
                            }),
                            y = (0, n(475097).getUrlParamFromPeekMode)(n(387722).A),
                            x = (0, n(862451).createInferenceTranscriptChatRoute)({
                                environment: l,
                                threadId: w.id,
                                spaceId: u.id,
                                forceRouteToChat: !0,
                                additionalQueryParams: {
                                    wfv: "settings",
                                    [n(737869).ZI]: (0, n(4962).Xw)(t.id),
                                    ...y ? {
                                        [n(737869).fT]: y
                                    } : void 0
                                }
                            });
                        c({
                            environment: l,
                            url: x
                        })
                    }, [l, d, c, u, m, g, t, f]);
                    return r ? null : (0, i.jsx)(n(265779).E, {
                        size: "md",
                        iconLeading: {
                            icon: a,
                            size: "sm",
                            fitToViewBox: void 0
                        },
                        onClick: h,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "workflow.agent.triggers.testAgentButton",
                            defaultMessage: "Run agent"
                        })
                    })
                })
        },
        33072: (e, t, n) => {
            n.d(t, {
                c: () => a
            });
            var o = n(296540),
                i = n(474848);
            let r = (0, n(109939).YK)({
                modalAriaLabel: {
                    id: "mailClientSelectionModal.ariaLabel",
                    defaultMessage: "Select email client"
                },
                continueButton: {
                    id: "mailClientSelectionModal.continueButton",
                    defaultMessage: "Continue"
                }
            });

            function a() {
                let e = (0, n(109939).tz)(),
                    t = (0, n(682985).O$)(n(93380).j),
                    [a, s] = (0, o.useState)("notion_mail");
                (0, o.useEffect)(() => {
                    t.isOpen && s("notion_mail")
                }, [t.isOpen]);
                let l = (0, o.useCallback)(() => {
                        let {
                            onSelect: e
                        } = t;
                        e && e(a)
                    }, [t, a]),
                    d = (0, o.useCallback)(() => {
                        var e;
                        null == (e = t.onDismiss) || e.call(t), n(93380).j.close()
                    }, [t]);
                return t.isOpen ? (0, i.jsx)(n(556809).a, {
                    ariaLabel: e.formatMessage(r.modalAriaLabel),
                    open: !0,
                    onDismiss: d,
                    onClosed: d,
                    children: (0, i.jsxs)(n(4458).VP, {
                        gap: 24,
                        width: 450,
                        padding: 20,
                        children: [(0, i.jsx)(n(13014).E, {
                            variant: "modal",
                            selectedClient: a,
                            onSelectClient: s
                        }), (0, i.jsx)(n(912946).A, {
                            colorPalette: "blue",
                            size: "lg",
                            onClick: l,
                            isLoading: t.isLoading,
                            disabled: t.isLoading,
                            width: "fill",
                            children: (0, i.jsx)(n(109939).sA, { ...r.continueButton
                            })
                        })]
                    })
                }) : null
            }
        },
        40340: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var o = () => n(546605);
            class i extends o().Store {
                getInitialState() {
                    return {
                        permissionsInviteStore: (0, n(64273)._P)(),
                        contextualInviteStore: new(n(758972)).Ay
                    }
                }
                get stageFromStoreState() {
                    return this.state.contextualInviteStore.state.inviteStage
                }
            }
            let r = i
        },
        100246: (e, t, n) => {
            n.d(t, {
                g: () => i
            }), n(296540);
            var o = n(474848);

            function i(e) {
                let t = (0, n(533992).v3)();
                return (0, o.jsx)(n(95582).A, {
                    focused: !1,
                    href: e.href,
                    external: !0,
                    onClick: () => (0, n(150782).F)(t, {
                        from: e.analyticsFrom
                    }),
                    icon: (0, o.jsx)(n(16275).I, {
                        icon: n(80094).questionMarkCircleIcon,
                        colorVariant: "secondary"
                    }),
                    title: (0, o.jsx)(n(111010).D, {
                        colorPalette: "gray",
                        colorVariant: "secondary",
                        children: e.title
                    }),
                    style: n(699422).RC
                })
            }
        },
        127268: (e, t, n) => {
            n.d(t, {
                D: () => a
            }), n(898992), n(581454), n(737550);
            var o = n(296540),
                i = n(474848);
            let r = (0, n(109939).YK)({
                title: {
                    id: "workflows.versionHistory.title",
                    defaultMessage: "Version history"
                },
                restore: {
                    id: "workflows.versionHistory.restore",
                    defaultMessage: "Restore"
                },
                loading: {
                    id: "workflows.versionHistory.loading",
                    defaultMessage: "Loading…"
                },
                live: {
                    id: "workflows.versionHistory.live",
                    defaultMessage: "Live"
                },
                bot: {
                    id: "workflows.versionHistory.bot",
                    defaultMessage: "Bot"
                },
                unknownUser: {
                    id: "workflows.versionHistory.unknownUser",
                    defaultMessage: "Unknown"
                },
                userWithId: {
                    id: "workflows.versionHistory.userWithId",
                    defaultMessage: "User {userId}"
                }
            });

            function a(e) {
                let {
                    workflowStore: t,
                    onClose: o
                } = e, a = (0, n(109939).tz)(), s = (0, n(682985).uB)(void 0, n(128363).K);
                return (0, i.jsx)(n(556809).a, {
                    ariaLabel: a.formatMessage(r.title),
                    open: !0,
                    onDismiss: o,
                    children: (0, i.jsx)(c, {
                        workflowStore: t,
                        onClose: o,
                        workflowValidationErrorStore: s
                    })
                })
            }
            let s = {
                versionItem: {
                    paddingBlock: 8,
                    paddingInline: 16,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    borderRadius: 6
                },
                versionItemSelected: {
                    backgroundColor: n(632079).Tj.background.secondary
                },
                versionDate: {
                    fontSize: 14,
                    color: n(632079).Tj.text.primary,
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                },
                versionUser: {
                    fontSize: 12,
                    color: n(632079).Tj.text.secondary
                },
                liveBadge: {
                    backgroundColor: n(632079).Tj.blue.background.secondary,
                    color: n(632079).Tj.blue.text.primary,
                    paddingTop: 2,
                    paddingInlineEnd: 8,
                    paddingBottom: 2,
                    paddingInlineStart: 6,
                    borderRadius: 12,
                    fontSize: 12,
                    fontWeight: n(699422).Wy.medium,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4
                },
                liveBadgeDot: {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: n(632079).Tj.blue.icon.accentPrimary
                }
            };

            function l(e) {
                let {
                    store: t,
                    isSelected: o,
                    onSelect: a,
                    isLiveVersion: l
                } = e, d = (0, n(109939).tz)(), c = (0, n(682985).K8)(() => t.getCreatedAt(), [t]), u = (0, n(682985).K8)(() => t.getCreatedById(), [t]), g = (0, n(682985).K8)(() => t.getCreatedByTable(), [t]), p = (0, n(682985).K8)(() => {
                    if (g === n(514214).oo && u) {
                        let e = t.getSpaceId();
                        if (!e) return;
                        let o = n(807825).L.createChildStore(t, {
                            id: u,
                            table: n(514214).oo,
                            spaceId: e
                        });
                        if (o.isDefined() && !o.getIsDeleted()) return o.getName()
                    }
                }, [g, u, t]);
                return (0, i.jsxs)("div", {
                    role: "button",
                    tabIndex: 0,
                    onClick: a,
                    onKeyDown: e => {
                        ("Enter" === e.key || " " === e.key) && a()
                    },
                    style: { ...s.versionItem,
                        ...o ? s.versionItemSelected : {}
                    },
                    children: [(0, i.jsxs)("div", {
                        style: s.versionDate,
                        children: [(0, i.jsx)("span", {
                            children: c ? n(906745).DateTime.fromMillis(c).toLocaleString(n(906745).DateTime.DATETIME_MED) : d.formatMessage(r.loading)
                        }), l ? (0, i.jsxs)("span", {
                            style: s.liveBadge,
                            children: [(0, i.jsx)("span", {
                                style: s.liveBadgeDot
                            }), d.formatMessage(r.live)]
                        }) : void 0]
                    }), (0, i.jsx)("div", {
                        style: s.versionUser,
                        children: p || ("bot" === g ? d.formatMessage(r.bot) : g === n(514214).oo && u ? d.formatMessage(r.userWithId, {
                            userId: u.slice(0, 8)
                        }) : d.formatMessage(r.unknownUser))
                    })]
                })
            }
            let d = {
                workflowContainer: {
                    paddingInline: 16,
                    paddingBlock: 24
                },
                headerContainer: {
                    paddingInline: 12
                },
                leftPanel: {
                    flex: 1,
                    borderInlineEnd: `1px solid ${n(632079).Tj.border.secondary}`,
                    overflow: "auto",
                    position: "relative",
                    paddingInline: 20
                },
                header: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 16,
                    borderBottom: `1px solid ${n(632079).Tj.border.secondary}`
                },
                title: {
                    fontSize: 16,
                    fontWeight: n(699422).Wy.medium
                },
                closeButton: {
                    padding: 4
                },
                versionList: {
                    flex: 1,
                    overflow: "auto"
                },
                footer: {
                    padding: 16,
                    borderTop: `1px solid ${n(632079).Tj.border.secondary}`,
                    display: "flex",
                    justifyContent: "flex-end"
                }
            };

            function c(e) {
                let {
                    workflowStore: t,
                    onClose: a,
                    workflowValidationErrorStore: s
                } = e, c = (0, n(533992).v3)(), u = (0, n(109939).tz)(), [g, p] = (0, o.useState)(void 0), [f, m] = (0, o.useState)(void 0), [h, w] = (0, o.useState)(!1), y = t.id, x = (0, n(682985).K8)(() => t.getSpaceId(), [t]), v = (0, n(682985).K8)(() => {
                    let e = t.getPublishedArtifactStore();
                    return null == e ? void 0 : e.id
                }, [t]), [b] = (0, n(97668).Yb)(async () => {
                    if (!x) return {
                        artifactIds: []
                    };
                    let e = await c.api.callApi({
                        eventName: "getWorkflowVersions",
                        environment: c,
                        data: {
                            workflowId: y,
                            spaceId: x
                        }
                    });
                    return "failed" === e.type ? {
                        artifactIds: []
                    } : e.data
                }, [y, x, c]), k = (0, o.useMemo)(() => "resolved" === b.status ? b.value.artifactIds : [], [b]), j = "pending" === b.status;
                (0, o.useEffect)(() => {
                    k.length > 0 && !g && p(k[0])
                }, [k, g]), (0, o.useEffect)(() => {
                    if (!g || !x) return void m(void 0);
                    let e = n(509297).j.createChildStore(t, {
                        table: "workflow_artifact",
                        id: g,
                        spaceId: x
                    });
                    e.isType("version") && m(e)
                }, [g, x, t]);
                let S = (0, o.useCallback)(async () => {
                        if (!f || h) return;
                        w(!0);
                        let e = setTimeout(() => {
                            w(!1)
                        }, 3e4);
                        n(436555).D6({
                            label: (0, i.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                children: [(0, i.jsx)(n(517334).k, {
                                    size: 12,
                                    onDarkBackground: !0
                                }), u.formatMessage({
                                    defaultMessage: "Restoring version...",
                                    id: "workflows.versionHistory.restoringProgress"
                                })]
                            }),
                            durationMs: "keep"
                        });
                        try {
                            await (0, n(744160).a)({
                                environment: c,
                                workflowStore: t,
                                workflowArtifactStore: f
                            }), n(436555).D6({
                                label: u.formatMessage({
                                    defaultMessage: "Version restored successfully",
                                    id: "workflows.versionHistory.restoreSuccess"
                                })
                            }), a()
                        } catch (r) {
                            n(436555).N2();
                            let e = (0, n(161179).A)(r),
                                t = e instanceof n(548161).nc && e.reasons.some(e => "integration_not_owned_by_user" === e.type),
                                o = e instanceof n(548161).nc && e.reasons.some(e => "connector_run_as_user_required" === e.type),
                                i = t ? u.formatMessage({
                                    defaultMessage: "You tried to restore a version with changes to a third-party integration you did not create. Ask the integration owner to restore this version, or restore a different version.",
                                    id: "workflows.versionHistory.restoreIntegrationPermissionError"
                                }) : o ? u.formatMessage({
                                    defaultMessage: "This version contains a module that runs as the user who connected it. Ask the module creator to restore this version, or restore a different version.",
                                    id: "workflows.versionHistory.restoreConnectorRunAsUserError"
                                }) : u.formatMessage({
                                    defaultMessage: "Failed to restore version. Please try again.",
                                    id: "workflows.versionHistory.restoreError"
                                });
                            n(647095).f1(i)
                        } finally {
                            clearTimeout(e), w(!1)
                        }
                    }, [c, t, f, a, u, h]),
                    M = (0, o.useMemo)(() => x ? k.map(e => ({
                        id: e,
                        store: n(509297).j.createChildStore(t, {
                            table: "workflow_artifact",
                            id: e,
                            spaceId: x
                        })
                    })) : [], [k, x, t]),
                    C = (0, o.useMemo)(() => M.map(({
                        id: e,
                        store: t
                    }) => ({
                        key: e,
                        render: n => (0, i.jsx)(l, { ...n,
                            store: t,
                            isSelected: g === e,
                            onSelect: () => p(e),
                            isLiveVersion: e === v
                        }),
                        action: () => p(e)
                    })), [M, g, v]);
                return (0, i.jsxs)(n(4458).fI, {
                    height: "80vh",
                    maxHeight: 800,
                    maxWidth: 1200,
                    width: "calc(100vw - 48px)",
                    children: [(0, i.jsx)("div", {
                        style: d.leftPanel,
                        children: f ? (0, i.jsxs)("div", {
                            style: d.workflowContainer,
                            children: [(0, i.jsx)("div", {
                                style: d.headerContainer,
                                children: (0, i.jsx)(n(314925).yc, {
                                    workflowStore: f,
                                    disabled: !0,
                                    workflowValidationErrorStore: s
                                })
                            }), (0, i.jsx)(n(330339).b, {
                                workflowOrArtifactStore: f,
                                workflowStore: t,
                                disabled: !0,
                                workflowValidationErrorStore: s,
                                showInstructionsPeekButton: !1
                            })]
                        }) : (0, i.jsx)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            children: (0, i.jsx)(n(517334).k, {})
                        })
                    }), (0, i.jsxs)(n(4458).VP, {
                        width: 320,
                        children: [(0, i.jsxs)("div", {
                            style: d.header,
                            children: [(0, i.jsx)("div", {
                                style: d.title,
                                children: (0, i.jsx)(n(109939).sA, { ...r.title
                                })
                            }), (0, i.jsx)(n(988022).p, {
                                onClick: a,
                                style: d.closeButton,
                                "aria-label": "Close",
                                children: (0, i.jsx)(n(16275).I, {
                                    icon: n(117152).xMarkIcon
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            style: d.versionList,
                            children: j ? (0, i.jsx)(n(4458).fI, {
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                children: (0, i.jsx)(n(517334).k, {})
                            }) : (0, i.jsx)(n(558045).A, {
                                type: n(558045).O.Vertical,
                                sections: [{
                                    key: 0,
                                    items: C
                                }],
                                initialFocus: void 0,
                                onAccept: () => {}
                            })
                        }), (0, i.jsx)("div", {
                            style: d.footer,
                            children: (0, i.jsx)(n(912946).A, {
                                onClick: S,
                                colorPalette: "blue",
                                disabled: !f || h,
                                children: (0, i.jsx)(n(109939).sA, { ...r.restore
                                })
                            })
                        })]
                    })]
                })
            }
        },
        128662: (e, t, n) => {
            n.r(t), n.d(t, {
                ellipsisFillIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.24 8.25 15.51 3.5",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4 11.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m6 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m6 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
                    })
                },
                i = (0, n(104509).wt)("ellipsisFill", o, "fill")
        },
        139780: (e, t, n) => {
            n.d(t, {
                d: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.4 2.39 15.2 15.86",
                    svg: (0, n(474848).jsx)("path", {
                        d: "m4.897 3.085-.122-.142a.625.625 0 0 0-.95.814l3.18 3.71h-3.98a.625.625 0 0 0-.367 1.13L6.6 11.462l-1.506 4.636a.625.625 0 0 0 .962.699L10 13.932l3.943 2.865a.625.625 0 0 0 .903-.183l1.215 1.418a.625.625 0 1 0 .95-.814l-.495-.576a.6.6 0 0 1-.127-.113l-11.4-13.3a.6.6 0 0 1-.093-.144m.051 5.632h3.129l5.018 5.853.027.085-2.755-2.001a.625.625 0 0 0-.734 0l-2.755 2 1.052-3.237a.625.625 0 0 0-.227-.7zm8.633 2.613 3.762-2.733a.625.625 0 0 0-.367-1.13H12.1L10.594 2.83a.625.625 0 0 0-1.188 0L8.55 5.463l.953 1.112L10 5.046l1.052 3.239a.625.625 0 0 0 .595.432h3.404l-2.287 1.662z"
                    })
                },
                i = (0, n(104509).wt)("starSlash", o, "default")
        },
        171270: (e, t, n) => {
            n.d(t, {
                J: () => l
            }), n(16280);
            var o = () => n(955630),
                i = () => n(247438),
                r = () => n(124937),
                a = () => n(579695);

            function s(e) {
                let {
                    textValue: t,
                    prefixLength: n
                } = e;
                if (0 === n) return t;
                let o = [],
                    r = n;
                for (let e of i().RQ(t)) {
                    if (i().qXl(e)) {
                        o.push(e);
                        continue
                    }
                    let t = i().N8A(e),
                        n = i().uPN(e);
                    if (0 === r) o.push(e);
                    else if (r >= t.length) r -= t.length;
                    else {
                        let e = t.slice(r);
                        o.push(i().Ey_(e, n)), r = 0
                    }
                }
                return o
            }
            async function l(e) {
                var t;
                let {
                    workflowStore: l,
                    environment: d,
                    title: c,
                    draftInstructions: u
                } = e, g = u ? ? (null == (t = l.getData()) ? void 0 : t.instructions);
                if ((0, n(886883).ap)(g)) return n(970831).B.createChildStore(l, g);
                let p = l.getSpaceId();
                if (!p) throw Error("Workflow store is missing space id for instructions page");
                let f = (0, n(886883).Zv)(g) ? (0, n(886883).rr)(g) : [],
                    {
                        performResult: m,
                        serverCommitResult: h
                    } = (0, n(377796).createAndCommit)({
                        userAction: "WorkflowActions.ensureInstructionsPage",
                        environment: d,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: p
                        },
                        perform: e => {
                            let t = r().Wv({
                                environment: d,
                                type: o().xd.page,
                                properties: {
                                    title: (0, i().x9d)(c)
                                },
                                inMemoryRecordCache: l.inMemoryRecordCache,
                                transaction: e,
                                spaceId: p
                            });
                            if (n(161606).b({
                                    childStore: t,
                                    parentStore: l,
                                    alive: !0,
                                    transaction: e
                                }), f && f.length > 0)
                                for (let n of function(e) {
                                        let t = [];
                                        for (let n of function(e) {
                                                let t = [],
                                                    n = [];
                                                for (let o of i().RQ(e)) {
                                                    if (i().qXl(o)) {
                                                        n.push(o);
                                                        continue
                                                    }
                                                    let e = i().N8A(o),
                                                        r = i().uPN(o);
                                                    for (let [o, a] of e.split("\n").entries()) o > 0 && (t.push(n), n = []), a.length > 0 && n.push(i().Ey_(a, r))
                                                }
                                                return n.length > 0 && t.push(n), t
                                            }(e)) {
                                            if (0 === n.length) continue;
                                            let e = i().RQ(n)[0];
                                            if (!e) continue;
                                            let r = i().N8A(e),
                                                a = r.match(/^([-*+•–—])\s+/);
                                            if (a) {
                                                let e = s({
                                                    textValue: n,
                                                    prefixLength: a[0].length
                                                });
                                                t.push({
                                                    type: o().xd.bulletedList,
                                                    text: e
                                                });
                                                continue
                                            }
                                            let l = r.match(/^(\d+\.)\s+/);
                                            if (l) {
                                                let e = s({
                                                    textValue: n,
                                                    prefixLength: l[0].length
                                                });
                                                t.push({
                                                    type: o().xd.numberedList,
                                                    text: e
                                                });
                                                continue
                                            }
                                            t.push({
                                                type: o().xd.text,
                                                text: n
                                            })
                                        }
                                        return t
                                    }(f)) {
                                    let o = r().Wv({
                                        environment: d,
                                        type: n.type,
                                        properties: {
                                            title: n.text
                                        },
                                        inMemoryRecordCache: l.inMemoryRecordCache,
                                        transaction: e,
                                        spaceId: p
                                    });
                                    a().NI({
                                        parentStore: t,
                                        childStore: o,
                                        transaction: e
                                    })
                                }
                            return (0, n(421439).y4)({
                                store: l,
                                operation: n(861988).WV({
                                    pointer: l.pointer,
                                    instructions: t.pointer
                                }),
                                transaction: e
                            }), t
                        }
                    });
                return await h, m
            }
            n(944114)
        },
        181818: (e, t, n) => {
            n.d(t, {
                C: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.5 1.37 13 13.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.385 1.375a.625.625 0 1 0 0 1.25h.769c.76 0 1.375.616 1.375 1.375v1.223c0 1.085.49 2.097 1.298 2.777a3.63 3.63 0 0 0-1.298 2.777V12c0 .76-.616 1.375-1.375 1.375h-.77a.625.625 0 1 0 0 1.25h.77A2.625 2.625 0 0 0 12.779 12v-1.223c0-.897.514-1.725 1.32-2.128a.726.726 0 0 0 0-1.298 2.39 2.39 0 0 1-1.32-2.128V4a2.625 2.625 0 0 0-2.625-2.625zm-2.77 0h-.769A2.625 2.625 0 0 0 3.221 4v1.223c0 .897-.514 1.725-1.32 2.128a.726.726 0 0 0 0 1.298 2.39 2.39 0 0 1 1.32 2.128V12a2.625 2.625 0 0 0 2.625 2.625h.77a.625.625 0 1 0 0-1.25h-.77c-.76 0-1.375-.616-1.375-1.375v-1.223c0-1.085-.49-2.097-1.298-2.777a3.63 3.63 0 0 0 1.298-2.777V4c0-.76.616-1.375 1.375-1.375h.77a.625.625 0 1 0 0-1.25"
                    })
                },
                i = (0, n(104509).wt)("curlyBracesSmall", o, "small")
        },
        269929: (e, t, n) => {
            n.d(t, {
                q: () => o
            }), n(814603), n(147566), n(198721);

            function o(e) {
                let {
                    environment: t,
                    utmSource: o,
                    utmCampaign: i
                } = e, r = (0, n(427846)._)(t), a = (null == r ? void 0 : r.id) ? ? "", s = (null == r ? void 0 : r.getEmail()) ? ? "", l = (null == r ? void 0 : r.getName()) ? ? "", d = l, c = "", u = l.indexOf(" "); - 1 !== u && (d = l.slice(0, u), c = l.slice(u + 1));
                let g = new URLSearchParams;
                return g.set("User-ID", a), g.set("userId", a), g.set("email", s), g.set("firstName", d), g.set("lastName", c), g.set("utm_source", o), g.set("utm_campaign", i), `${n(168962).JZ.setupSessions}?${g.toString()}`
            }
        },
        302942: (e, t, n) => {
            function o(e) {
                if (!e.startsWith("https://")) return "Warning: Glob should start with https://. Press enter again to accept it anyway.";
                let t = e.slice(8);
                if (!t) return "Warning: Glob has nothing after https://. Press enter again to accept it anyway.";
                if ("*" === t || "**" === t || t.startsWith("*/") || t.startsWith("**/")) return "Warning: This glob matches all domains. Press enter again to accept it anyway.";
                let n = t.indexOf("/");
                if (!(-1 === n ? t : t.slice(0, n)).split(".").some(e => "*" !== e && "**" !== e && e.length > 0)) return "Warning: This glob matches all domains. Press enter again to accept it anyway."
            }
            n.d(t, {
                V: () => o
            }), n(898992), n(737550)
        },
        322354: (e, t, n) => {
            n.d(t, {
                I: () => r
            });
            var o = n(296540),
                i = n(474848);
            let r = o.memo(o.forwardRef(function(e, t) {
                    let {
                        style: o,
                        color: r,
                        title: a,
                        onClick: d,
                        onDropdownClick: c,
                        mainButtonTooltip: u,
                        dropdownTooltip: g,
                        dropdownAriaLabel: p,
                        iconLeading: f,
                        iconStyle: m,
                        isCompactDropdownIcon: h,
                        mainButtonStyle: w,
                        isLoading: y,
                        className: x,
                        disabled: v,
                        disableDropdown: b,
                        size: k,
                        variant: j = "solid"
                    } = e, S = (0, n(960253).I)(() => {
                        let e = (0, n(399411).qq)({
                            size: k,
                            isButtonGapEnabled: !1
                        });
                        return {
                            wrap: {
                                position: "relative",
                                display: "inline-flex",
                                flexShrink: 0,
                                height: e.height,
                                ...o
                            },
                            border: {
                                position: "absolute",
                                pointerEvents: "none",
                                border: "outline" === j ? `1px solid ${n(632079).Tj.border.primaryTranslucent}` : void 0,
                                borderRadius: e.borderRadius,
                                top: 0,
                                insetInlineStart: 0,
                                insetInlineEnd: 0,
                                bottom: 0
                            }
                        }
                    }, [k, j, o]);
                    return (0, i.jsxs)("div", {
                        style: S.wrap,
                        className: x,
                        children: [(0, i.jsx)(s, {
                            ref: t,
                            color: r,
                            disabled: v,
                            disableDropdown: b,
                            iconLeading: f,
                            iconStyle: m,
                            isLoading: y,
                            mainButtonStyle: w,
                            mainButtonTooltip: u,
                            onClick: d,
                            title: a,
                            variant: j
                        }), (0, i.jsx)(l, {
                            ref: t,
                            color: r,
                            disabled: b,
                            dropdownAriaLabel: p,
                            isCompactDropdownIcon: h,
                            dropdownTooltip: g,
                            isLoading: y,
                            onDropdownClick: c,
                            variant: j
                        }), (0, i.jsx)("div", {
                            style: S.border
                        })]
                    })
                })),
                a = {
                    marginInlineEnd: 4
                },
                s = o.memo(o.forwardRef(function(e, t) {
                    let {
                        mainButtonTooltip: o,
                        onClick: r,
                        disabled: s,
                        disableDropdown: l,
                        isLoading: u,
                        iconLeading: g,
                        title: p,
                        color: f,
                        variant: m,
                        mainButtonStyle: h,
                        iconStyle: w,
                        size: y
                    } = e, x = (0, n(960253).e)(), v = (0, n(960253).I)(() => {
                        let e = (0, n(399411).qq)({
                                size: y,
                                isButtonGapEnabled: !1
                            }),
                            t = c({
                                color: f,
                                variant: m,
                                themeMode: x
                            });
                        return {
                            mainButton: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                whiteSpace: "nowrap",
                                borderStartStartRadius: e.borderRadius,
                                borderEndStartRadius: e.borderRadius,
                                borderStartEndRadius: l ? e.borderRadius : void 0,
                                borderEndEndRadius: l ? e.borderRadius : void 0,
                                paddingInlineStart: e.paddingInlineStart,
                                paddingInlineEnd: e.paddingInlineEnd,
                                fontSize: e.fontSize,
                                fontWeight: n(699422).Wy.medium,
                                ...t.default,
                                ...h
                            },
                            icon: {
                                width: 12,
                                marginInlineEnd: 6,
                                fill: d(f, m, {
                                    outline: t.default.color,
                                    solid: {
                                        blue: n(632079).oZ.white,
                                        black: n(632079).oZ.white,
                                        orange: n(632079).Tj.palette.orange[400]
                                    }
                                }),
                                ...w
                            },
                            buttonHoveredStyle: t.hovered,
                            buttonPressedStyle: t.pressed
                        }
                    }, [f, l, w, h, y, m, x]);
                    return o ? (0, i.jsx)(n(51831).m, {
                        content: () => o,
                        children: e => (0, i.jsxs)(n(64960).Ay, {
                            ref: t,
                            style: v.mainButton,
                            onClick: r,
                            disabled: s,
                            disabledFeedback: !0,
                            hoveredStyle: v.buttonHoveredStyle,
                            pressedStyle: v.buttonPressedStyle,
                            ...e,
                            children: [g ? g(v.icon) : null, p]
                        })
                    }) : (0, i.jsxs)(n(64960).Ay, {
                        ref: t,
                        style: v.mainButton,
                        onClick: r,
                        disabled: s || u,
                        disabledFeedback: !0,
                        hoveredStyle: v.buttonHoveredStyle,
                        pressedStyle: v.buttonPressedStyle,
                        children: [u ? (0, i.jsx)(n(517334).k, {
                            style: a
                        }) : null, g ? g(v.icon) : null, p]
                    })
                })),
                l = o.memo(o.forwardRef(function(e, t) {
                    let {
                        disableDropdown: r,
                        disabled: a,
                        dropdownAriaLabel: s,
                        isCompactDropdownIcon: l,
                        dropdownTooltip: u,
                        onDropdownClick: g,
                        isLoading: p,
                        size: f,
                        color: m,
                        variant: h
                    } = e, w = (0, n(960253).e)(), y = (0, n(960253).I)(() => {
                        let e = (0, n(399411).qq)({
                                size: f,
                                isButtonGapEnabled: !1
                            }),
                            t = c({
                                color: m,
                                variant: h,
                                themeMode: w
                            });
                        return {
                            dropdownButton: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: n(986939).A.isMobile ? 28 : 24,
                                alignSelf: "stretch",
                                borderStartEndRadius: e.borderRadius,
                                borderEndEndRadius: e.borderRadius,
                                boxShadow: "outline" === h || "blue" === m || "black" === m ? `inset 1px 0 0 ${n(632079).Tj.border.primaryTranslucent}` : "orange" === m ? `${n(632079).Tj.palette.orange["dark"===w?200:100]} 1px 0 0 inset` : (0, n(722371).HB)(m),
                                ...t.default
                            },
                            dropdownButtonIcon: {
                                marginTop: l && !n(986939).A.isMobile ? 1 : 2,
                                fill: d(m, h, {
                                    outline: t.default.color,
                                    solid: {
                                        blue: n(632079).oZ.white,
                                        black: n(632079).oZ.white,
                                        orange: n(632079).Tj.palette.orange["dark" === w ? 500 : 400]
                                    }
                                }),
                                ...l && !n(986939).A.isMobile && {
                                    width: 14
                                }
                            },
                            buttonHoveredStyle: t.hovered,
                            buttonPressedStyle: t.pressed
                        }
                    }, [m, l, f, h, w]), x = (0, o.useCallback)(e => (0, i.jsx)(n(64960).Ay, {
                        ref: t,
                        style: y.dropdownButton,
                        onClick: g,
                        disabledFeedback: !0,
                        hoveredStyle: y.buttonHoveredStyle,
                        pressedStyle: y.buttonPressedStyle,
                        ariaLabel: s,
                        ...e,
                        children: (0, i.jsx)(n(16275).I, {
                            icon: l ? n(595453).arrowChevronSingleDownSmallIcon : n(986939).A.isMobile ? n(469102).arrowChevronSingleDownFillSmallIcon : n(36663).arrowChevronSingleDownFillIcon,
                            size: "sm",
                            style: y.dropdownButtonIcon
                        })
                    }), [s, l, g, t, y.buttonHoveredStyle, y.buttonPressedStyle, y.dropdownButton, y.dropdownButtonIcon]), v = (0, o.useCallback)(() => u, [u]);
                    return r || a ? null : u ? (0, i.jsx)(n(51831).m, {
                        content: v,
                        children: x
                    }) : (0, i.jsx)(n(64960).Ay, {
                        ref: t,
                        style: y.dropdownButton,
                        onClick: g,
                        disabledFeedback: !0,
                        hoveredStyle: y.buttonHoveredStyle,
                        pressedStyle: y.buttonPressedStyle,
                        disabled: p,
                        ariaLabel: s,
                        children: (0, i.jsx)(n(16275).I, {
                            icon: l ? n(595453).arrowChevronSingleDownSmallIcon : n(986939).A.isMobile ? n(469102).arrowChevronSingleDownFillSmallIcon : n(36663).arrowChevronSingleDownFillIcon,
                            size: "sm",
                            style: y.dropdownButtonIcon
                        })
                    })
                }));

            function d(e, t, n) {
                return "object" != typeof n[t] ? n[t] : n[t][e]
            }

            function c(e) {
                let {
                    color: t,
                    variant: o,
                    themeMode: i
                } = e, r = "dark" === i ? "lighten" : "darken";
                return {
                    default: {
                        background: d(t, o, {
                            outline: void 0,
                            solid: {
                                blue: n(632079).Tj.blue.background.accentPrimary,
                                black: n(632079).Tj.background.accentPrimary,
                                orange: n(632079).Tj.orange.background.secondaryTranslucent
                            }
                        }),
                        color: d(t, o, {
                            outline: {
                                blue: n(632079).Tj.blue.text.accentPrimary,
                                black: n(632079).Tj.text.primary,
                                orange: n(632079).Tj.orange.text.accentPrimary
                            },
                            solid: {
                                blue: n(632079).Tj.blue.text.inversePrimary,
                                black: n(632079).Tj.text.inversePrimary,
                                orange: n(632079).Tj.orange.text.accentPrimary
                            }
                        })
                    },
                    hovered: {
                        background: d(t, o, {
                            outline: {
                                blue: n(632079).Tj.blue.background.secondaryTranslucent,
                                black: n(632079).Tj.gray.background.secondaryTranslucent,
                                orange: n(632079).Tj.orange.background.secondaryTranslucent
                            },
                            solid: {
                                blue: (0, n(133251).RO)({
                                    color: n(632079).Tj.blue.background.accentPrimary,
                                    adjustmentDirection: r
                                }),
                                black: (0, n(133251).RO)({
                                    color: n(632079).Tj.background.accentPrimary,
                                    adjustmentDirection: "lighten"
                                }),
                                orange: (0, n(133251).RO)({
                                    color: n(632079).Tj.orange.background.secondaryTranslucent,
                                    adjustmentDirection: r
                                })
                            }
                        })
                    },
                    pressed: {
                        background: d(t, o, {
                            outline: {
                                blue: (0, n(133251).yZ)({
                                    color: n(632079).Tj.blue.background.secondaryTranslucent,
                                    adjustmentDirection: r
                                }),
                                black: (0, n(133251).yZ)({
                                    color: n(632079).Tj.gray.background.secondaryTranslucent,
                                    adjustmentDirection: r
                                }),
                                orange: (0, n(133251).yZ)({
                                    color: n(632079).Tj.orange.background.secondaryTranslucent,
                                    adjustmentDirection: r
                                })
                            },
                            solid: {
                                blue: (0, n(133251).yZ)({
                                    color: n(632079).Tj.blue.background.accentPrimary,
                                    adjustmentDirection: r
                                }),
                                black: (0, n(133251).yZ)({
                                    color: n(632079).Tj.background.accentPrimary,
                                    adjustmentDirection: "lighten"
                                }),
                                orange: (0, n(133251).yZ)({
                                    color: n(632079).Tj.orange.background.secondaryTranslucent,
                                    adjustmentDirection: r
                                })
                            }
                        })
                    }
                }
            }
        },
        330339: (e, t, n) => {
            n.d(t, {
                b: () => tF
            }), n(898992), n(354520), n(672577), n(581454);
            var o = n(296540);
            let i = {
                    botActor: {
                        triggers: "enabled",
                        integrations: "enabled",
                        requireLookupTriggerActor: !1
                    },
                    strictMode: {
                        triggers: "enabled",
                        integrations: "enabled",
                        requireLookupTriggerActor: !0
                    },
                    ownerActor: {
                        triggers: "enabled",
                        integrations: "enabled",
                        requireLookupTriggerActor: !0
                    },
                    endUserActor: {
                        triggers: "hidden",
                        integrations: "hidden",
                        requireLookupTriggerActor: !1
                    }
                },
                r = (0, n(109939).YK)({
                    migrationToast: {
                        id: "workflows.mail.migration.sendConfirmationEnabled",
                        defaultMessage: "Mail send confirmation enabled because this agent has workspace-wide page access"
                    }
                });
            var a = n(474848);
            let s = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.37 1.25 13.26 13.5",
                    svg: (0, a.jsx)("path", {
                        d: "M5.846 2.75h.77a.75.75 0 1 0 0-1.5h-.77A2.75 2.75 0 0 0 3.096 4v1.223c0 .85-.487 1.634-1.252 2.016a.85.85 0 0 0 0 1.522 2.26 2.26 0 0 1 1.252 2.016V12a2.75 2.75 0 0 0 2.75 2.75h.77a.75.75 0 0 0 0-1.5h-.77c-.69 0-1.25-.56-1.25-1.25v-1.223A3.76 3.76 0 0 0 3.363 8a3.76 3.76 0 0 0 1.233-2.777V4c0-.69.56-1.25 1.25-1.25m4.308 10.5h-.77a.75.75 0 0 0 0 1.5h.77a2.75 2.75 0 0 0 2.75-2.75v-1.223c0-.85.487-1.634 1.252-2.016a.85.85 0 0 0 0-1.522 2.26 2.26 0 0 1-1.252-2.016V4a2.75 2.75 0 0 0-2.75-2.75h-.77a.75.75 0 0 0 0 1.5h.77c.69 0 1.25.56 1.25 1.25v1.223c0 1.073.462 2.076 1.233 2.777a3.76 3.76 0 0 0-1.233 2.777V12c0 .69-.56 1.25-1.25 1.25"
                    })
                },
                l = (0, n(104509).wt)("curlyBracesFillSmall", s, "fillSmall");

            function d(e) {
                let {
                    children: t
                } = e, [i, r] = (0, o.useState)(!1), s = (0, n(682985).K8)(() => (0, n(909212).Ke)(), []), d = (0, o.useCallback)(() => r(e => !e), []);
                return s ? (0, a.jsxs)(n(4458).VP, {
                    gap: 4,
                    children: [(0, a.jsx)(n(988022).p, {
                        onClick: d,
                        iconLeading: {
                            icon: i ? l : n(181818).C,
                            size: "sm"
                        },
                        colorPalette: i ? "blue" : "gray",
                        children: i ? (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Hide debug JSON",
                            id: "workflow.editorSettings.hideDebugJson"
                        }) : (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "View debug JSON",
                            id: "workflow.editorSettings.viewDebugJson"
                        })
                    }), i ? t : void 0]
                }) : null
            }

            function c(e) {
                let {
                    workflowStore: t
                } = e, i = (0, n(533992).v3)(), r = (0, n(867587).N)(t, !0), s = (0, o.useMemo)(() => JSON.stringify(r.workflowValue, null, 2), [r.workflowValue]), l = (0, o.useCallback)(e => {
                    if (t.table === n(581654).U6) return;
                    let o = e ? JSON.parse(e) : void 0;
                    (0, n(377796).createAndCommit)({
                        userAction: "WorkflowPageBlock.WorkflowDebugPopupContent.handleSave",
                        environment: i,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: t.pointer.spaceId
                        },
                        perform: e => {
                            (0, n(812389).O)({
                                workflowStore: t,
                                workflow: o,
                                transaction: e
                            })
                        }
                    })
                }, [i, t]);
                return (0, a.jsx)(n(140102).X, {
                    value: s,
                    onSave: l,
                    language: "json"
                })
            }
            let u = {
                position: "relative"
            };

            function g(e) {
                let {
                    workflow: t,
                    workflowStore: o,
                    module: i
                } = e;
                return (0, a.jsxs)(n(4458).VP, {
                    className: "autolayout-fill-width",
                    style: u,
                    children: [void 0, (0, a.jsx)(n(776568).E, {
                        moduleId: i.id,
                        workflow: t,
                        workflowStore: o
                    }, i.id)]
                })
            }
            let p = {
                header: {
                    position: "relative",
                    paddingBlock: 6,
                    paddingInlineEnd: 0,
                    paddingInlineStart: 10,
                    color: n(632079).Tj.text.secondary,
                    height: 34,
                    alignItems: "center"
                },
                emphasizedHeader: {
                    position: "relative",
                    paddingBlock: 8,
                    paddingInlineEnd: 0,
                    paddingInlineStart: 10,
                    color: n(632079).Tj.text.secondary,
                    alignItems: "flex-start"
                },
                titleRow: {
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                    height: 20
                },
                emphasizedTitleRow: {
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                    minHeight: 26
                },
                headerDescription: {},
                infoIconWrapper: {
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center"
                },
                tooltip: {
                    minWidth: 190
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function f(e) {
                let {
                    children: t,
                    title: i,
                    isDimmed: r,
                    actionButton: s,
                    errorLabel: l,
                    style: d,
                    hasError: c,
                    infoTooltipMessage: u,
                    description: g,
                    isPrimarySection: f = !1
                } = e, m = (0, n(109939).tz)(), [h, w] = (0, o.useState)(!1), y = (0, o.useCallback)(() => {
                    w(!0)
                }, []), x = (0, o.useCallback)(() => {
                    w(!1)
                }, []), v = (0, n(960253).e)(), b = (0, n(960253).I)(() => ({
                    content: {
                        outline: c ? `2px solid ${n(632079).Tj.red.text.accentPrimary}` : "none",
                        opacity: r ? .4 : 1,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: n(632079).Tj.border.secondary,
                        borderRadius: 14,
                        paddingInline: (null == d ? void 0 : d.paddingInline) ? ? 16,
                        paddingBlock: (null == d ? void 0 : d.paddingBlock) ? ? 16,
                        backgroundColor: "dark" === v ? n(632079).Tj.background.secondary : n(632079).Tj.background.primary,
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.02)"
                    }
                }), [d, c, r, v]);
                return (0, a.jsxs)(n(4458).VP, {
                    style: p.positionRelative,
                    children: [(0, a.jsxs)(n(4458).fI, {
                        style: f ? p.emphasizedHeader : p.header,
                        justifyContent: "space-between",
                        children: [(0, a.jsxs)(n(4458).VP, {
                            children: [(0, a.jsxs)("div", {
                                style: f ? p.emphasizedTitleRow : p.titleRow,
                                children: [(0, a.jsx)(n(111010).D, {
                                    styleKey: f ? "bodySemibold" : "captionMedium",
                                    colorVariant: f ? "primary" : "secondary",
                                    children: i
                                }), u && !f ? (0, a.jsx)(n(51831).m, {
                                    style: p.tooltip,
                                    placement: "right",
                                    alignment: "center",
                                    textWrap: !0,
                                    content: () => (0, a.jsx)(n(109939).sA, { ...u
                                    }),
                                    children: e => (0, a.jsx)("div", {
                                        "aria-label": m.formatMessage(u),
                                        style: p.infoIconWrapper,
                                        tabIndex: 0,
                                        ...(0, n(63390).A)({
                                            onMouseEnter: y,
                                            onMouseLeave: x
                                        }, e),
                                        children: (0, a.jsx)(n(16275).I, {
                                            icon: n(372181).infoCircleSmallIcon,
                                            size: f ? "default" : "sm",
                                            colorVariant: h ? "secondary" : "tertiary",
                                            style: {
                                                opacity: h ? 1 : .8
                                            }
                                        })
                                    })
                                }) : void 0]
                            }), g ? (0, a.jsx)("div", {
                                style: p.headerDescription,
                                children: (0, a.jsx)(n(111010).D, {
                                    styleKey: "captionMedium",
                                    colorVariant: "secondary",
                                    children: g
                                })
                            }) : void 0]
                        }), s]
                    }), (0, a.jsx)("div", {
                        style: b.content,
                        children: t
                    }), c ? l : void 0]
                })
            }

            function m(e) {
                let {
                    connection: t,
                    isAdded: i,
                    pendingKeys: r,
                    getPendingKey: a,
                    isWaitingForCalendarConnection: s = !1,
                    isPending: l,
                    onConnect: d,
                    onTriggerAuth: c
                } = e, u = (0, n(617168).y)({
                    moduleValue: t.moduleValue,
                    existingModuleId: t.existingModuleId,
                    hasExternalConnection: t.hasExternalConnection,
                    hasDuplicateUrl: t.hasDuplicateUrl,
                    isAdded: i
                }), g = t.moduleType ? n(255755).y[t.moduleType] : void 0, p = (0, n(682985).K8)(() => {
                    var e;
                    return null == g || null == (e = g.needsCustomConnect) ? void 0 : e.call(g)
                }, [g]), f = l ? ? (!!r && !!a && (0, n(899849).JH)({
                    connection: t,
                    pendingKeys: r,
                    getPendingKey: a,
                    isWaitingForCalendarConnection: s
                }).isPending), m = (0, n(899849).G3)({
                    connection: t,
                    connectionStatus: u,
                    isPending: f
                }), h = (0, o.useMemo)(() => {
                    if (t.moduleType) return {
                        type: t.moduleType,
                        existingModuleId: t.existingModuleId,
                        workerId: t.workerId
                    }
                }, [t.existingModuleId, t.moduleType, t.workerId]), w = (0, o.useCallback)(async e => {
                    if (m) {
                        if (p) return void p.connectHandler();
                        if ("needsAuthentication" === u) {
                            t.moduleValue && c({
                                moduleValue: t.moduleValue,
                                removeOnCancel: !0
                            });
                            return
                        }
                        if (h) {
                            if (null != e && e.beforeConnect && !await e.beforeConnect(h)) return;
                            d(h)
                        }
                    }
                }, [h, t.moduleValue, u, p, m, d, c]);
                return {
                    connectionStatus: u,
                    customConnect: p,
                    isPending: f,
                    isActionEnabled: m,
                    runConnect: w
                }
            }

            function h(e) {
                let {
                    connection: t,
                    workflowStore: i,
                    sharedWarning: r,
                    onConnect: s,
                    onTriggerAuth: l,
                    onDisconnect: d,
                    onClose: c,
                    getPendingKey: u,
                    pendingAdds: g,
                    isAdded: p
                } = e, [f, h] = (0, o.useState)(!1), w = (0, n(682985).K8)(() => "calendar" === t.moduleType ? (0, n(440143).Y)().getCalendarProviderAccounts() : [], [t.moduleType]), y = "calendar" === t.moduleType && 0 === w.length, {
                    connectionStatus: x,
                    customConnect: v,
                    isActionEnabled: b,
                    isPending: k,
                    runConnect: j
                } = m({
                    connection: t,
                    isAdded: p,
                    pendingKeys: g,
                    getPendingKey: u,
                    onConnect: s,
                    onTriggerAuth: l
                }), S = (0, o.useCallback)(() => {
                    ((0, n(599231).qt)({
                        action: "open_connect_tool",
                        workflowId: i.id,
                        context: {
                            connection_type: t.type,
                            connection_name: t.name
                        },
                        from: "add_connection_modal"
                    }), y) ? h(!0): j()
                }, [j, y, i.id, t.type, t.name]), M = (0, o.useCallback)(() => {
                    h(!1), j()
                }, [j]), C = (0, o.useCallback)(() => {
                    d(t)
                }, [t, d]);
                return f ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n(674513).h, {
                        connection: t,
                        body: (0, a.jsx)(n(360709).c, {
                            connection: t,
                            onCancel: c
                        })
                    }), (0, a.jsx)(n(364e3).q, {
                        from: "agentCalendarModule",
                        isOpen: f,
                        onConnectionSuccess: M,
                        onDismiss: () => h(!1)
                    })]
                }) : k ? (0, a.jsx)(n(674513).h, {
                    connection: t,
                    connectionStatus: x,
                    workflowStore: i,
                    body: (0, a.jsx)(n(360709).c, {
                        connection: t,
                        onCancel: c
                    })
                }) : (0, a.jsx)(n(674513).h, {
                    connection: t,
                    connectionStatus: x,
                    workflowStore: i,
                    body: (0, a.jsx)(n(469643).y, {
                        connection: t
                    }),
                    footer: (0, a.jsx)(n(485165).W2, {
                        connectionStatus: x,
                        action: v ? "customConnect" : "connect",
                        customConnectMessage: null == v ? void 0 : v.connectMessage,
                        isActionEnabled: b,
                        onConnect: S,
                        onDisconnect: C,
                        warning: r
                    })
                })
            }
            let w = (0, n(109939).YK)({
                    selectButton: {
                        id: "workflow.agent.addConnectionModal.mailPane.selectButton",
                        defaultMessage: "Select"
                    }
                }),
                y = {
                    paddingInline: 24,
                    marginBlockEnd: 8
                },
                x = {
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    padding: 24
                },
                v = {
                    width: "100%"
                };

            function b(e) {
                let {
                    connection: t,
                    workflowStore: i,
                    sharedWarning: r,
                    onConnect: s,
                    onTriggerAuth: l,
                    onDisconnect: d,
                    onClose: c,
                    getPendingKey: u,
                    pendingAdds: g,
                    mailModuleError: p,
                    isAdded: f,
                    clientSelection: h
                } = e, {
                    connectionStatus: b,
                    customConnect: k,
                    isActionEnabled: j,
                    isPending: S,
                    runConnect: M
                } = m({
                    connection: t,
                    isAdded: f,
                    pendingKeys: g,
                    getPendingKey: u,
                    onConnect: s,
                    onTriggerAuth: l
                }), C = (0, o.useCallback)(() => {
                    (0, n(599231).qt)({
                        action: "open_connect_tool",
                        workflowId: i.id,
                        context: {
                            connection_type: t.type,
                            connection_name: t.name
                        },
                        from: "add_connection_modal"
                    }), M()
                }, [M, i.id, t.type, t.name]), I = (0, o.useCallback)(() => {
                    d(t)
                }, [t, d]);
                return h ? (0, a.jsx)(n(674513).h, {
                    connection: t,
                    workflowStore: i,
                    body: (0, a.jsx)("div", {
                        style: x,
                        children: (0, a.jsx)(n(13014).E, {
                            selectedClient: h.selectedClient,
                            onSelectClient: h.onSelect
                        })
                    }),
                    footer: (0, a.jsx)(n(584278).R, {
                        children: (0, a.jsx)(n(4458).fI, {
                            paddingTop: 16,
                            paddingBottom: 16,
                            paddingInlineStart: 24,
                            paddingInlineEnd: 16,
                            alignItems: "center",
                            justifyContent: "flex-end",
                            width: "100%",
                            children: (0, a.jsx)(n(912946).A, {
                                onClick: h.onConfirm,
                                size: "lg",
                                colorPalette: "blue",
                                style: v,
                                children: (0, a.jsx)(n(109939).sA, { ...w.selectButton
                                })
                            })
                        })
                    })
                }) : S ? (0, a.jsx)(n(674513).h, {
                    connection: t,
                    connectionStatus: b,
                    workflowStore: i,
                    body: (0, a.jsx)(n(360709).c, {
                        connection: t,
                        onCancel: c
                    })
                }) : (0, a.jsx)(n(674513).h, {
                    connection: t,
                    connectionStatus: b,
                    workflowStore: i,
                    body: (0, a.jsx)(n(469643).y, {
                        connection: t
                    }),
                    error: p ? (0, a.jsx)("div", {
                        style: y,
                        children: (0, a.jsx)(n(111010).D, {
                            styleKey: "bodySm",
                            colorPalette: "red",
                            colorVariant: "primary",
                            children: p
                        })
                    }) : null,
                    footer: (0, a.jsx)(n(485165).W2, {
                        connectionStatus: b,
                        action: k ? "customConnect" : "connect",
                        customConnectMessage: null == k ? void 0 : k.connectMessage,
                        isActionEnabled: j,
                        onConnect: C,
                        onDisconnect: I,
                        warning: r
                    })
                })
            }

            function k() {
                return (0, a.jsx)(n(111010).D, {
                    styleKey: "captionSmRegular",
                    colorVariant: "tertiary",
                    children: (0, a.jsx)(n(109939).sA, { ...n(376242).D.sharedAgentWarning
                    })
                })
            }
            n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(430670), n(803949);
            var j = () => n(593186),
                S = () => n(302465),
                M = () => n(546605);
            let C = {
                isMcpModalOpen: !1,
                mcpModuleIdToConnect: void 0,
                mcpModalInitialData: void 0
            };
            class I extends M().Store {
                getInitialState() {
                    return { ...C,
                        addedConnections: new Set,
                        pendingAdds: new Set
                    }
                }
                openMcpModal(e) {
                    this.setState({ ...this.state,
                        isMcpModalOpen: !0,
                        mcpModuleIdToConnect: e.moduleId,
                        mcpModalInitialData: e.initialData
                    })
                }
                closeMcpModal() {
                    this.setState({ ...this.state,
                        isMcpModalOpen: !1,
                        mcpModuleIdToConnect: void 0,
                        mcpModalInitialData: void 0
                    })
                }
                addConnection(e) {
                    let t = new Set(this.state.addedConnections);
                    t.add(e), this.setState({ ...this.state,
                        addedConnections: t
                    })
                }
                removeConnection(e) {
                    let t = new Set(this.state.addedConnections);
                    t.delete(e), this.setState({ ...this.state,
                        addedConnections: t
                    })
                }
                addPendingConnection(e) {
                    let t = new Set(this.state.pendingAdds);
                    t.add(e), this.setState({ ...this.state,
                        pendingAdds: t
                    })
                }
                removePendingConnection(e) {
                    let t = new Set(this.state.pendingAdds);
                    t.delete(e), this.setState({ ...this.state,
                        pendingAdds: t
                    })
                }
                clearAddedConnections() {
                    this.setState({ ...this.state,
                        addedConnections: new Set
                    })
                }
            }

            function A(e, t) {
                var n;
                return (null == (n = t.get(e)) ? void 0 : n.name) ? ? `Unnamed worker (ID: ${e})`
            }

            function T(e) {
                let {
                    type: t,
                    mcpServerId: n,
                    workerId: o
                } = e;
                return "mcpServer" === t && n ? n : "worker" === t && o ? o : t
            }

            function D(e, t) {
                return e.find(e => "worker" === e.type && e.state && "workerId" in e.state && e.state.workerId === t)
            }

            function _(e) {
                if ("module" === e.type) return e.moduleType && (0, n(190934).qW)(e.moduleType) ? 6 : "cursor" === e.moduleType || "claude" === e.moduleType || "boxy" === e.moduleType ? 2 : 1;
                if ("mcpServer" === e.type)
                    if (e.isPreconfigured) return 3;
                    else return 4;
                if ("worker" === e.type) return 5;
                (0, n(722371).HB)(e.type)
            }
            let P = (0, n(109939).YK)({
                    toolsSectionTitle: {
                        id: "workerPane.toolsSectionTitle",
                        defaultMessage: "Tools"
                    },
                    noTools: {
                        id: "workerPane.noTools",
                        defaultMessage: "No tools available"
                    },
                    detailsSectionTitle: {
                        id: "workerPane.detailsSectionTitle",
                        defaultMessage: "Details"
                    },
                    createdLabel: {
                        id: "workerPane.createdLabel",
                        defaultMessage: "Created"
                    },
                    lastDeployedLabel: {
                        id: "workerPane.lastDeployedLabel",
                        defaultMessage: "Last deployed"
                    },
                    viewDocs: {
                        id: "workerPane.viewDocs",
                        defaultMessage: "View documentation"
                    }
                }),
                L = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 24,
                        paddingBlock: 16,
                        flex: 1,
                        minHeight: 0,
                        width: "100%"
                    },
                    detailsLabel: {
                        minWidth: 100,
                        flexShrink: 0
                    },
                    section: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        paddingInline: n(485165).So,
                        alignItems: "flex-start"
                    },
                    toolItem: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        paddingBlock: 8
                    },
                    toolDescription: {
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                    },
                    loadingContainer: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        paddingInline: n(485165).So,
                        paddingBlock: 16
                    },
                    loadingPlaceholder: {
                        height: 48,
                        borderRadius: 6,
                        background: n(632079).Tj.background.tertiary
                    }
                };

            function R(e) {
                let {
                    connection: t,
                    workflowStore: i,
                    sharedWarning: r,
                    onConnect: s,
                    onTriggerAuth: l,
                    onDisconnect: d,
                    onClose: c,
                    getPendingKey: u,
                    pendingAdds: g,
                    isAdded: p
                } = e, {
                    connectionStatus: f,
                    customConnect: h,
                    isActionEnabled: w,
                    isPending: y,
                    runConnect: x
                } = m({
                    connection: t,
                    isAdded: p,
                    pendingKeys: g,
                    getPendingKey: u,
                    onConnect: s,
                    onTriggerAuth: l
                }), v = (0, o.useCallback)(() => {
                    (0, n(599231).qt)({
                        action: "open_connect_tool",
                        workflowId: i.id,
                        context: {
                            connection_type: t.type,
                            connection_name: t.name
                        },
                        from: "add_connection_modal"
                    }), x()
                }, [x, i.id, t.type, t.name]), b = (0, o.useCallback)(() => {
                    d(t)
                }, [t, d]);
                return y ? (0, a.jsx)(n(674513).h, {
                    connection: t,
                    connectionStatus: f,
                    workflowStore: i,
                    body: (0, a.jsx)(n(360709).c, {
                        connection: t,
                        onCancel: c
                    })
                }) : (0, a.jsx)(n(674513).h, {
                    connection: t,
                    connectionStatus: f,
                    workflowStore: i,
                    body: (0, a.jsx)(B, {
                        workerId: t.workerId
                    }),
                    footer: (0, a.jsx)(n(485165).W2, {
                        connectionStatus: f,
                        action: h ? "customConnect" : "connect",
                        customConnectMessage: null == h ? void 0 : h.connectMessage,
                        isActionEnabled: w,
                        onConnect: v,
                        onDisconnect: b,
                        warning: r
                    })
                })
            }

            function B(e) {
                let {
                    workerId: t
                } = e, i = (0, n(109939).tz)(), {
                    capabilities: r,
                    isLoading: s,
                    hasFetched: l
                } = (0, n(382472).u)(t), {
                    worker: d
                } = (0, n(930225).r)(t), c = (0, o.useMemo)(() => r.filter(e => "tool" === e._tag), [r]), u = null != d && d.createdAt ? i.formatDate(new Date(d.createdAt), {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }) : void 0, g = null != d && d.updatedAt ? i.formatDate(new Date(d.updatedAt), {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }) : void 0, p = u && g && u !== g;
                return s || !l ? (0, a.jsxs)("div", {
                    style: L.loadingContainer,
                    children: [(0, a.jsx)("div", {
                        style: L.loadingPlaceholder
                    }), (0, a.jsx)("div", {
                        style: L.loadingPlaceholder
                    }), (0, a.jsx)("div", {
                        style: L.loadingPlaceholder
                    })]
                }) : (0, a.jsxs)(n(136508)._, {
                    type: n(644154).A.Y,
                    style: L.container,
                    children: [0 === c.length ? (0, a.jsx)("div", {
                        style: L.section,
                        children: (0, a.jsx)(n(111010).D, {
                            styleKey: "bodySm",
                            colorVariant: "secondary",
                            children: (0, a.jsx)(n(109939).sA, { ...P.noTools
                            })
                        })
                    }) : (0, a.jsxs)("div", {
                        style: L.section,
                        children: [(0, a.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "tertiary",
                            children: (0, a.jsx)(n(109939).sA, { ...P.toolsSectionTitle
                            })
                        }), (0, a.jsx)(n(4458).VP, {
                            gap: 4,
                            children: c.map(e => (0, a.jsxs)("div", {
                                style: L.toolItem,
                                children: [(0, a.jsx)(n(111010).D, {
                                    styleKey: "bodySmMedium",
                                    children: e.config.title ? ? e.key
                                }), e.config.description ? (0, a.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    style: L.toolDescription,
                                    children: e.config.description
                                }) : void 0]
                            }, e.key))
                        })]
                    }), (0, a.jsxs)("div", {
                        style: L.section,
                        children: [(0, a.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "tertiary",
                            children: (0, a.jsx)(n(109939).sA, { ...P.detailsSectionTitle
                            })
                        }), (0, a.jsxs)(n(4458).VP, {
                            gap: 8,
                            alignItems: "flex-start",
                            children: [u ? (0, a.jsxs)(n(4458).fI, {
                                alignItems: "baseline",
                                gap: 8,
                                children: [(0, a.jsx)(n(111010).D, {
                                    styleKey: "bodySm",
                                    colorVariant: "secondary",
                                    style: L.detailsLabel,
                                    children: (0, a.jsx)(n(109939).sA, { ...P.createdLabel
                                    })
                                }), (0, a.jsx)(n(111010).D, {
                                    styleKey: "bodySm",
                                    children: u
                                })]
                            }) : void 0, p ? (0, a.jsxs)(n(4458).fI, {
                                alignItems: "baseline",
                                gap: 8,
                                children: [(0, a.jsx)(n(111010).D, {
                                    styleKey: "bodySm",
                                    colorVariant: "secondary",
                                    style: L.detailsLabel,
                                    children: (0, a.jsx)(n(109939).sA, { ...P.lastDeployedLabel
                                    })
                                }), (0, a.jsx)(n(111010).D, {
                                    styleKey: "bodySm",
                                    children: g
                                })]
                            }) : void 0]
                        })]
                    }), (0, a.jsx)("div", {
                        style: L.section,
                        children: (0, a.jsx)(n(265779).E, {
                            href: "https://project-ajax.mintlify.io/",
                            size: "sm",
                            external: !0,
                            children: (0, a.jsx)(n(109939).sA, { ...P.viewDocs
                            })
                        })
                    })]
                })
            }

            function K(e) {
                var t, i, r;
                let {
                    isOpen: s,
                    workflowStore: l
                } = e, d = (0, n(109939).tz)(), {
                    modalState: c,
                    mailModuleError: u,
                    suggestedConnections: g,
                    connections: p,
                    isCustomMcpAllowed: f,
                    isMcpUrlAllowlistActive: m,
                    isWorkspaceOwner: w,
                    isAgentSharedWithOthers: y,
                    currentUserPointer: x,
                    sidebarSpaceViewStore: v,
                    currentAgentMcpModuleSummaries: M,
                    allowedWorkspaceMcpUrls: C,
                    isSelectingMailClient: P,
                    selectedMailClient: L,
                    handleAddConnection: B,
                    handleCustomMcpButtonClick: K,
                    handleClose: E,
                    handleCloseMcpModal: V,
                    handleDisconnectConnection: W,
                    handleTriggerAuth: N,
                    handleMcpServerCreated: z,
                    handleSelectMailClient: U,
                    handleConfirmMailClient: F,
                    getPendingKey: O,
                    isConnectionAdded: q
                } = function(e) {
                    let {
                        workflowStore: t,
                        isOpen: i,
                        onClose: r,
                        onRequestAuth: a
                    } = e, s = (0, n(109939).tz)(), l = (0, n(533992).v3)(), {
                        workflowValue: d
                    } = (0, n(867587).N)(t, !0), c = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore), u = (0, n(972740).L)(), g = (0, n(993077).U2)(u), p = (0, n(682985).K8)(() => (null == g ? void 0 : g.isWorkspaceOwner()) ? ? !1, [g]), f = (0, n(203986).v)(), [m, h] = (0, n(682985).K8)(() => [(null == u ? void 0 : u.getMcpUrlAllowlistEnabled()) ? ? !1, (null == u ? void 0 : u.getAllowedMcpServerUrls()) ? ? []], [u]), w = m && h.length > 0, y = (0, n(345776).T)(), x = (0, n(682985).uB)(void 0, I), v = (0, n(682985).O$)(x), [b, k] = (0, o.useState)(new Map), [M, C] = (0, o.useState)([]), [P, L] = (0, o.useState)(), [R, B] = (0, o.useState)(!1), [K, E] = (0, o.useState)("notion_mail"), V = (0, n(83208).X)("mail_agent_draft_to_all_connected_clients"), W = (0, o.useRef)(void 0), {
                        isLoaded: N,
                        isBackendConnected: z
                    } = (0, n(682985).O$)(n(318329).Lf), [U, F] = (0, o.useState)(void 0), O = (0, o.useCallback)(() => {
                        F(void 0)
                    }, []), {
                        isAccepted: q
                    } = (0, n(917815).E)(), {
                        servers: H,
                        serverUrls: G
                    } = (0, n(602226).z)();
                    o.useEffect(() => {
                        i ? (0, n(81603).preloadNotionMailUserStatus)({
                            environment: l
                        }) : (L(void 0), B(!1), W.current = void 0)
                    }, [i, l]), o.useEffect(() => {
                        let e = null == c ? void 0 : c.getSpaceId();
                        e && q && (async () => {
                            try {
                                let [t, n] = await Promise.all([l.api.callApi({
                                    environment: l,
                                    eventName: "getWorkers",
                                    data: {
                                        spaceId: e
                                    }
                                }), l.api.callApi({
                                    environment: l,
                                    eventName: "listCapabilities",
                                    data: {
                                        spaceId: e,
                                        capabilityKind: "tool"
                                    }
                                })]);
                                if ("success" === t.type) {
                                    let e = new Map(t.data.workers.map(e => [e.workerId, {
                                        name: e.name
                                    }]));
                                    k(e)
                                }
                                "success" === n.type && C(n.data.capabilities)
                            } catch (e) {}
                        })()
                    }, [c, l, q]);
                    let $ = (0, n(682985).K8)(() => {
                            let e = (0, n(427846)._)(l);
                            return null == e ? void 0 : e.pointer
                        }, [l]),
                        {
                            isScriptAgentEnabled: Y,
                            isScriptAgentSearchConnectorsEnabledForWorkflow: Q,
                            isScriptAgentGoogleDriveEnabledForWorkflow: X
                        } = (0, n(682985).K8)(() => {
                            var e;
                            let o = null == (e = t.getPublishedArtifactStore()) ? void 0 : e.getData(),
                                i = (0, n(16712).Z0)({
                                    workflowData: d,
                                    publishedWorkflowData: o
                                });
                            return {
                                isScriptAgentEnabled: (null == i ? void 0 : i.enableScriptAgent) ? ? !1,
                                isScriptAgentSearchConnectorsEnabledForWorkflow: (null == i ? void 0 : i.enableScriptAgentSearchConnectorsInCustomAgent) ? ? !1,
                                isScriptAgentGoogleDriveEnabledForWorkflow: (null == i ? void 0 : i.enableScriptAgentGoogleDriveInCustomAgent) ? ? !1
                            }
                        }, [t, d]),
                        Z = (0, n(682985).K8)(() => Y ? (0, n(876688).wd)({
                            includeConnectorsWithAuthNeeded: !0
                        }).map(n(190934).Fg).filter(n(722371).O9) : [], [Y]),
                        J = (0, n(731770).v)({
                            workflowStore: t,
                            workflowValue: d,
                            showCurrentModules: !0,
                            isCustomAgentContext: !0
                        }),
                        ee = (0, n(682985).K8)(() => {
                            let e = t.getDraftData() ? ? t.getData();
                            return (null == e ? void 0 : e.modules) ? ? []
                        }, [t]),
                        et = (0, o.useMemo)(() => (ee ? ? []).filter(e => "mcpServer" === e.type), [ee]),
                        en = (0, o.useMemo)(() => new Set(et.map(e => {
                            var t;
                            let n = "mcpServer" === e.type ? null == (t = e.state) ? void 0 : t.serverUrl : void 0;
                            return n ? (0, S().Yl)(n) : ""
                        }).filter(e => "" !== e)), [et]),
                        eo = (0, o.useMemo)(() => et.map(e => {
                            var t;
                            return {
                                name: e.name,
                                serverUrl: "mcpServer" === e.type ? null == (t = e.state) ? void 0 : t.serverUrl : void 0
                            }
                        }), [et]),
                        ei = (0, o.useCallback)(e => {
                            var t;
                            let o = null == (t = e.workflowModuleStore) ? void 0 : t.getData(),
                                i = (0, j().jK)("mcpServer");
                            return {
                                type: "mcpServer",
                                id: (0, n(4962).Ay)(),
                                name: e.name,
                                version: (null == i ? void 0 : i.latestVersion) ? ? "1.0.0",
                                permissions: [],
                                state: {
                                    serverUrl: e.serverUrl,
                                    ...(0, n(409691).Ws)(null == o ? void 0 : o.tools),
                                    ...null != o && o.connectionPointer ? {
                                        connectionPointer: o.connectionPointer
                                    } : {},
                                    ...null != o && o.serverIconUrl ? {
                                        serverIconUrl: o.serverIconUrl
                                    } : {},
                                    ...null != o && o.officialName ? {
                                        officialName: o.officialName
                                    } : {},
                                    ...null != o && o.tools ? {
                                        tools: o.tools
                                    } : {},
                                    ...null != o && o.resources ? {
                                        resources: o.resources
                                    } : {}
                                }
                            }
                        }, []),
                        er = (0, o.useCallback)(e => {
                            r(), null == a || a(e)
                        }, [r, a]),
                        ea = (0, o.useCallback)(e => {
                            x.openMcpModal({
                                moduleId: e.mcpServerId,
                                initialData: e.initialData
                            }), r()
                        }, [r, x]),
                        es = (0, o.useCallback)(e => {
                            E(e)
                        }, []),
                        el = (0, o.useCallback)(() => {
                            let e = W.current;
                            e && (e(K), W.current = void 0, B(!1))
                        }, [K]),
                        ed = (0, o.useCallback)(() => {
                            n(599754).Ow({
                                currentPage: "ai",
                                tab: "ai_connectors"
                            })
                        }, []),
                        ec = (0, o.useCallback)(async e => {
                            let o, i, {
                                type: a,
                                mcpServerId: d,
                                existingModuleId: c,
                                workerId: u
                            } = e;
                            L(void 0);
                            let g = T({
                                type: a,
                                mcpServerId: d,
                                workerId: u
                            });
                            if (g && v.pendingAdds.has(g)) return;
                            let f = (0, j().jK)(a);
                            if (!f) return;
                            if ((0, n(190934).qW)(a)) {
                                let e = (0, n(190934).Ri)(a);
                                if ((0, n(212490).uD)(e, p).length > 0) return void ed()
                            }
                            let m = "slack" === a ? (0, n(4962).Ay)() : void 0,
                                h = t.getDraftData() ? ? t.getData(),
                                w = (null == h ? void 0 : h.modules) ? ? [];
                            if (c && (o = w.find(e => e.id === c)), !o && "worker" === a && u && (o = D(w, u)), !o && (0, j().sQ)(a) && (o = w.find(e => e.type === a)), !o && "slack" === a && m && (i = await (0, n(143630).c)({
                                    environment: l,
                                    moduleId: m,
                                    spaceId: t.pointer.spaceId,
                                    workflowId: t.id
                                })), !o) {
                                let o = T({
                                    type: a,
                                    workerId: u
                                });
                                x.addPendingConnection(o);
                                try {
                                    let d, c, g, p = !!f.authentication;
                                    if ("worker" === a && u && (d = A(u, b)), "slack" === a && i && (p = !1), "worker" === a && u ? c = {
                                            workerId: u,
                                            workerName: A(u, b)
                                        } : p && (c = {
                                            state: {}
                                        }), "mail" === a) {
                                        if (!await (0, n(81603).ensureNotionMailAccountOrTriggerOnboarding)({
                                                environment: l,
                                                onConfirm: () => {
                                                    ec(e)
                                                }
                                            })) return void x.removePendingConnection(o);
                                        let i = !1;
                                        try {
                                            let e = await l.api.callApi({
                                                eventName: "initializeMailModuleConnection",
                                                environment: l,
                                                data: {
                                                    spaceId: t.pointer.spaceId,
                                                    workflowId: t.id
                                                }
                                            });
                                            if ("success" === e.type && "success" === e.data.type) {
                                                let {
                                                    creatorEmail: i,
                                                    emailAddresses: a,
                                                    connectionPointer: d,
                                                    existingPreferredMailClient: c
                                                } = e.data, u = e => {
                                                    var c;
                                                    let u = (0, n(474939).B)({
                                                            emailAddresses: a,
                                                            preferredClient: e
                                                        }),
                                                        g = (0, n(285316).p$)(i, a),
                                                        p = g ? [g.emailAccountId] : [],
                                                        m = (null == (c = f.getShortName) ? void 0 : c.call(f, s)) ? ? f.getName(s),
                                                        h = (0, j().r4)({
                                                            type: "mail",
                                                            definition: f,
                                                            intl: s,
                                                            name: m,
                                                            id: (0, n(4962).Ay)(),
                                                            state: {
                                                                connectionPointer: d,
                                                                creatorEmail: i,
                                                                emailAddresses: a,
                                                                scopes: ["read", "write"],
                                                                emailPermissionSettings: u,
                                                                selectedEmailAccountIds: p,
                                                                preferredMailClient: e
                                                            }
                                                        });
                                                    (0, n(677701).c)({
                                                        workflowStore: t,
                                                        module: h,
                                                        environment: l
                                                    }), x.removePendingConnection(o), (0, n(599231).gn)({
                                                        environment: l,
                                                        tool: "mail",
                                                        workflowId: t.id
                                                    }), r()
                                                };
                                                if (void 0 === c && !V) {
                                                    W.current = u, B(!0), E("notion_mail"), x.removePendingConnection(o);
                                                    return
                                                }
                                                u(c ? ? n(285316).ou);
                                                return
                                            }
                                            i = !0
                                        } catch {
                                            i = !0
                                        }
                                        if (i) return void L(s.formatMessage(n(376242).D.mailModuleInitializationFailed))
                                    }
                                    if ("calendar" === a) {
                                        let t = (0, n(440143).Y)().getCalendarProviderAccounts();
                                        if (0 === t.length) {
                                            F(e), r();
                                            return
                                        }
                                        let o = (0, n(534066).d7)(l);
                                        o && (c = o.state, g = o.permissions)
                                    }
                                    "slack" === a && i && (c = { ...c ? ? {},
                                        connectionPointer : i
                                    });
                                    let h = (0, j().r4)({
                                        type: a,
                                        name: d,
                                        definition: f,
                                        intl: s,
                                        id: m,
                                        state: c
                                    });
                                    y && (0, n(190934).qW)(a) && (h = (0, n(190934).cU)({
                                        module: h,
                                        userId: y
                                    })), "calendar" === a && g && (h = (0, n(635270).my)(h, g)), (0, n(599231).gn)({
                                        environment: l,
                                        tool: a,
                                        workflowId: t.id
                                    }), (0, n(677701).c)({
                                        workflowStore: t,
                                        module: h,
                                        environment: l
                                    }), p ? er({
                                        moduleValue: h,
                                        removeOnCancel: !0
                                    }) : (x.addConnection(o), r())
                                } finally {
                                    let e = T({
                                        type: a,
                                        workerId: u
                                    });
                                    x.removePendingConnection(e)
                                }
                            }
                        }, [s, t, l, er, ed, r, v.pendingAdds, x, y, b, p, V]),
                        eu = (0, o.useCallback)(e => {
                            x.removeConnection(e)
                        }, [x]),
                        eg = (0, o.useCallback)(async e => {
                            await (0, n(899849).J1)({
                                connection: e,
                                environment: l,
                                workflowStore: t,
                                message: s.formatMessage(n(376242).D.removeConfirmMessage),
                                description: s.formatMessage(n(376242).D.removeConfirmDescription),
                                acceptLabel: s.formatMessage(n(376242).D.removeConfirmAcceptLabel),
                                onRemoved: e => {
                                    x.removeConnection(e)
                                }
                            })
                        }, [l, s, x, t]),
                        ep = (0, o.useCallback)(() => {
                            x.openMcpModal({}), r()
                        }, [r, x]),
                        ef = (0, o.useCallback)(() => {
                            let e = n(758654).ZO(window.location.href),
                                t = n(758654).O$(e, {
                                    target: "aiconnectors_custom_mcp"
                                });
                            (0, n(79266).navigate)({
                                environment: l,
                                url: t
                            })
                        }, [l]),
                        em = (0, o.useCallback)(() => {
                            f ? ep() : p && ef()
                        }, [ef, ep, f, p]),
                        eh = (0, o.useCallback)(() => {
                            x.closeMcpModal()
                        }, [x]),
                        ew = (0, o.useCallback)(e => {
                            if (!c) return;
                            let o = n(496282).L3.fromPointerLike({
                                    table: n(272920).y,
                                    id: e,
                                    spaceId: c.getSpaceId()
                                }),
                                i = n(646139).P.createChildStore(c, o),
                                r = i.getData();
                            if (!r) return;
                            let a = !!r.connectionPointer,
                                s = ei({
                                    id: e,
                                    ...(0, n(381453).Up)(r, ["name", "serverUrl", "serverIconUrl", "officialName"]),
                                    workflowModuleStore: i,
                                    hasExternalConnection: a
                                });
                            (0, n(599231).gn)({
                                environment: l,
                                tool: "mcpServer",
                                workflowId: t.id
                            }), (0, n(677701).c)({
                                workflowStore: t,
                                module: s,
                                environment: l
                            }), x.addConnection(e)
                        }, [c, t, l, ei, x]),
                        ey = (0, o.useCallback)(() => {
                            x.clearAddedConnections(), O(), r()
                        }, [r, x, O]),
                        ex = (0, o.useCallback)((e, t) => (function(e) {
                            let {
                                existingModules: t,
                                connectionType: n,
                                connectionId: o
                            } = e;
                            if ("module" === n) {
                                let e = t.find(e => e.type === o);
                                return null == e ? void 0 : e.id
                            }
                            if ("mcpServer" === n) {
                                let e = t.find(e => "mcpServer" === e.type && e.id === o);
                                return null == e ? void 0 : e.id
                            }
                            if ("worker" === n) {
                                var i;
                                return null == (i = D(t, o)) ? void 0 : i.id
                            }
                        })({
                            existingModules: ee,
                            connectionType: e,
                            connectionId: t
                        }), [ee]),
                        ev = function(e) {
                            let {
                                availableModules: t,
                                existingMcpServers: i,
                                existingModules: r,
                                currentAgentMcpUrls: a,
                                workersById: s,
                                availableCapabilities: l,
                                getExistingModuleId: d,
                                preconfiguredServers: c,
                                preconfiguredServerUrls: u
                            } = e, g = (0, n(109939).tz)();
                            return (0, o.useMemo)(() => {
                                let e = function(e) {
                                        let {
                                            availableModules: t,
                                            existingModules: n,
                                            getExistingModuleId: o,
                                            intl: i
                                        } = e, r = [];
                                        return t.filter(e => "mcpServer" !== e.type && "notion" !== e.type && "worker" !== e.type && "customConnector" !== e.type).forEach(({
                                            type: e,
                                            sharedModule: t
                                        }) => {
                                            var a, s, l;
                                            let d, c = o("module", e),
                                                u = !1;
                                            if (c) {
                                                let e = n.find(e => e.id === c);
                                                d = e, null != e && e.state && "connectionPointer" in e.state && (u = !!e.state.connectionPointer)
                                            }
                                            r.push({
                                                id: e,
                                                type: "module",
                                                name: t.getName(i),
                                                shortName: null == (a = t.getShortName) ? void 0 : a.call(t, i),
                                                iconVariant: "standard",
                                                moduleType: e,
                                                existingModuleId: c,
                                                hasExternalConnection: u,
                                                moduleValue: d,
                                                tagline: null == (s = t.getDescription) ? void 0 : s.call(t, i),
                                                searchKeywords: null == (l = t.getSearchKeywords) ? void 0 : l.call(t)
                                            })
                                        }), r
                                    }({
                                        availableModules: t,
                                        existingModules: r,
                                        getExistingModuleId: d,
                                        intl: g
                                    }),
                                    o = function(e) {
                                        let {
                                            availableModules: t,
                                            existingModules: n,
                                            workersById: o,
                                            availableCapabilities: i,
                                            getExistingModuleId: r
                                        } = e, a = [];
                                        return t.find(e => "worker" === e.type) && new Set(i.filter(e => "tool" === e._tag).map(e => e.workerId)).forEach(e => {
                                            var t;
                                            let s = (null == (t = o.get(e)) ? void 0 : t.name) ? ? e,
                                                l = i.filter(t => "tool" === t._tag && t.workerId === e).length,
                                                d = r("worker", e),
                                                c = void 0 !== d ? n.find(e => e.id === d) : void 0;
                                            a.push({
                                                id: e,
                                                type: "worker",
                                                name: s,
                                                iconVariant: "standard",
                                                moduleType: "worker",
                                                existingModuleId: null == c ? void 0 : c.id,
                                                hasExternalConnection: !1,
                                                moduleValue: c,
                                                workerId: e,
                                                toolCount: l
                                            })
                                        }), a
                                    }({
                                        availableModules: t,
                                        existingModules: r,
                                        workersById: s,
                                        availableCapabilities: l,
                                        getExistingModuleId: d,
                                        intl: g
                                    }),
                                    p = new Map;
                                if (c)
                                    for (let e of c) "hidden" !== e.visibility && e.tagline && p.set((0, S().Yl)(e.serverUrl), e.tagline);
                                let f = (0, n(692158).m)({
                                        existingMcpServers: i,
                                        currentAgentMcpUrls: a,
                                        preconfiguredServerUrls: u,
                                        preconfiguredServerTaglines: p,
                                        getExistingModuleId: d
                                    }),
                                    m = (0, n(692158).q)({
                                        servers: c ? ? [],
                                        existingServerUrls: f.addedUrls,
                                        currentAgentMcpUrls: a
                                    });
                                return {
                                    modules: e,
                                    workers: o,
                                    existingMcpServers: f,
                                    preconfiguredMcpServers: m
                                }
                            }, [t, i, r, g, d, a, s, l, c, u])
                        }({
                            availableModules: J,
                            existingMcpServers: (0, o.useMemo)(() => et.flatMap(e => "mcpServer" !== e.type ? [] : [(0, n(574134).D)(e)]), [et]),
                            existingModules: ee,
                            currentAgentMcpUrls: en,
                            workersById: b,
                            availableCapabilities: M,
                            getExistingModuleId: ex,
                            preconfiguredServers: H,
                            preconfiguredServerUrls: G
                        }),
                        eb = (0, o.useMemo)(() => {
                            let e = [];
                            if (ev.modules.forEach(t => {
                                    e.push(t)
                                }), Y && (Q || X)) {
                                let t = new Set(ev.modules.map(e => e.moduleType).filter(n(722371).O9));
                                Z.forEach(o => {
                                    var i, r;
                                    if ("googleDrive" === o) {
                                        if (!X) return
                                    } else if (!Q) return;
                                    if (t.has(o)) return;
                                    let a = (0, j().jK)(o),
                                        l = n(255755).y[o];
                                    if (!a || !l) return;
                                    let d = ex("module", o),
                                        c = void 0 !== d ? ee.find(e => e.id === d) : ee.find(e => e.type === o),
                                        u = !!c && (0, n(315126).q8)(c);
                                    e.push({
                                        id: o,
                                        type: "module",
                                        name: a.getName(s),
                                        iconVariant: "compact",
                                        moduleType: o,
                                        existingModuleId: d,
                                        hasExternalConnection: u,
                                        moduleValue: c,
                                        tagline: null == (i = a.getDescription) ? void 0 : i.call(a, s),
                                        searchKeywords: null == (r = a.getSearchKeywords) ? void 0 : r.call(a)
                                    })
                                })
                            }
                            return e.sort((e, t) => e.name < t.name ? -1 : 1), ev.existingMcpServers.items.filter(e => f || w || e.isPreconfigured).forEach(t => {
                                let n = et.find(e => "mcpServer" === e.type && e.id === t.id);
                                e.push({
                                    id: t.id,
                                    type: "mcpServer",
                                    name: t.name,
                                    url: t.serverUrl,
                                    serverIconUrl: t.serverIconUrl,
                                    iconVariant: "standard",
                                    mcpServerId: t.mcpServerId,
                                    existingModuleId: t.existingModuleId,
                                    hasExternalConnection: t.hasExternalConnection,
                                    hasDuplicateUrl: t.hasDuplicateUrl,
                                    isPreconfigured: t.isPreconfigured,
                                    tagline: t.tagline,
                                    moduleValue: n
                                })
                            }), ev.preconfiguredMcpServers.forEach(t => {
                                let o = ee.find(e => {
                                        var n;
                                        if ("mcpServer" !== e.type) return !1;
                                        let o = null == (n = e.state) ? void 0 : n.serverUrl;
                                        return !!o && (0, S().Yl)(o) === (0, S().Yl)(t.serverUrl)
                                    }),
                                    i = !!o && (0, n(315126).q8)(o);
                                e.push({
                                    id: t.id,
                                    type: "mcpServer",
                                    name: t.name,
                                    url: t.serverUrl,
                                    visibility: t.visibility,
                                    iconUrl: t.iconUrl,
                                    iconVariant: "standard",
                                    mcpServerId: void 0,
                                    existingModuleId: null == o ? void 0 : o.id,
                                    hasExternalConnection: i,
                                    hasDuplicateUrl: t.hasDuplicateUrl,
                                    isPreconfigured: !0,
                                    moduleValue: o,
                                    tagline: t.tagline,
                                    supportedAuthSchemes: t.supportedAuthSchemes,
                                    supportedOAuthScopes: t.supportedOAuthScopes,
                                    serverUrlConfig: t.serverUrlConfig
                                })
                            }), ev.workers.forEach(t => {
                                e.push({ ...t
                                })
                            }), e.sort((e, t) => {
                                let n = _(e),
                                    o = _(t);
                                return n === o ? e.name.localeCompare(t.name) : n - o
                            }), e
                        }, [ev, ee, ex, s, Y, Q, X, Z, et, f, w]),
                        ek = (0, o.useCallback)(e => v.addedConnections.has(e), [v.addedConnections]),
                        ej = (0, n(346582).b)(t),
                        {
                            suggestedConnections: eS,
                            connections: eM
                        } = (0, o.useMemo)(() => {
                            let e = [],
                                t = [],
                                n = eb.find(e => "mail" === e.moduleType),
                                o = eb.find(e => "calendar" === e.moduleType),
                                i = !(null != n && n.existingModuleId) || !(null != o && o.existingModuleId);
                            for (let n of eb)("mail" === n.moduleType || "calendar" === n.moduleType) && i ? e.push(n) : t.push(n);
                            return {
                                suggestedConnections: e,
                                connections: t
                            }
                        }, [eb]);
                    return {
                        modalState: v,
                        mailModuleError: P,
                        isMailAccountLoaded: N,
                        hasMailAccount: z,
                        isAgentSharedWithOthers: ej,
                        suggestedConnections: eS,
                        connections: eM,
                        pendingCalendarConnectionArgs: U,
                        resetPendingCalendarConnection: O,
                        isCustomMcpAllowed: f,
                        isMcpUrlAllowlistActive: w,
                        isWorkspaceOwner: p,
                        currentUserPointer: $,
                        sidebarSpaceViewStore: c,
                        currentAgentMcpModuleSummaries: eo,
                        allowedWorkspaceMcpUrls: h,
                        isSelectingMailClient: R,
                        selectedMailClient: K,
                        getPendingKey: T,
                        isConnectionAdded: ek,
                        handleAddConnection: ec,
                        handleConnectionRemoved: eu,
                        handleDisconnectConnection: eg,
                        handleTriggerAuth: er,
                        handleTriggerMcpAuth: ea,
                        handleSelectMailClient: es,
                        handleConfirmMailClient: el,
                        handleCustomMcpButtonClick: em,
                        handleClose: ey,
                        handleCloseMcpModal: eh,
                        handleMcpServerCreated: ew
                    }
                }(e), H = (0, o.useMemo)(() => [...g, ...p], [p, g]), G = (0, o.useMemo)(() => new Map(H.map(e => [e.id, e])), [H]), [$, Y] = (0, o.useState)(void 0), [Q, X] = (0, o.useState)(!1), Z = y ? (0, a.jsx)(k, {}) : void 0, J = (0, o.useMemo)(() => {
                    if ($) return G.get($)
                }, [G, $]);
                (0, n(669370).M)({
                    isOpen: s,
                    items: H,
                    selectedId: $,
                    setSelectedId: Y,
                    getItemId: e => e.id,
                    getDefaultId: e => {
                        var t;
                        return Q || null == (t = e[0]) ? void 0 : t.id
                    }
                });
                let ee = (0, o.useCallback)(e => {
                        z(e), E()
                    }, [z, E]),
                    et = (0, o.useCallback)(e => {
                        let t = G.get(e);
                        t && ((0, n(599231).qt)({
                            action: "select_connection",
                            workflowId: l.id,
                            context: {
                                connection_type: null == t ? void 0 : t.type,
                                connection_name: null == t ? void 0 : t.name
                            },
                            from: "add_connection_modal"
                        }), Y(e), X(!1))
                    }, [G, l.id]),
                    en = (0, o.useCallback)(() => {
                        X(!0), Y(void 0)
                    }, []),
                    eo = f || m,
                    ei = (0, n(899849).d9)({
                        isCustomMcpAllowed: eo,
                        isWorkspaceOwner: w
                    }),
                    er = eo ? n(376242).D.addCustomMcp : w ? n(376242).D.enableCustomMcp : n(376242).D.addCustomMcp,
                    ea = Q ? v && x && !c.isMcpModalOpen ? (0, a.jsx)(n(131317).K, {
                        connection: {
                            id: "custom-mcp-server",
                            type: "mcpServer",
                            name: "Custom MCP server",
                            iconVariant: "standard",
                            mcpServerId: void 0,
                            existingModuleId: void 0,
                            hasExternalConnection: !1,
                            isPreconfigured: !1,
                            tagline: "Add your own server"
                        },
                        spaceViewStore: v,
                        currentUserPointer: x,
                        workflowId: l.id,
                        existingAgentModules: M,
                        allowedWorkspaceMcpUrls: m ? C : void 0,
                        onSuccess: ee,
                        onClose: E
                    }, "custom-mcp-form") : null : J ? "mcpServer" === J.type ? v && x && !c.isMcpModalOpen ? (0, a.jsx)(n(235348).r, {
                        connection: J,
                        spaceViewStore: v,
                        workflowStore: l,
                        currentUserPointer: x,
                        workflowId: l.id,
                        existingAgentModules: M,
                        onSuccess: ee,
                        onClose: E,
                        onDisconnect: W,
                        isAdded: q(J.id),
                        sharedWarning: Z
                    }, J.id) : null : "mail" === J.moduleType ? (0, a.jsx)(b, {
                        connection: J,
                        workflowStore: l,
                        onConnect: B,
                        onTriggerAuth: N,
                        onDisconnect: W,
                        onClose: E,
                        getPendingKey: O,
                        pendingAdds: c.pendingAdds,
                        mailModuleError: u,
                        isAdded: q(J.id),
                        sharedWarning: Z,
                        clientSelection: P ? {
                            selectedClient: L,
                            onSelect: U,
                            onConfirm: F
                        } : void 0
                    }) : "worker" === J.type ? (0, a.jsx)(R, {
                        connection: J,
                        workflowStore: l,
                        onConnect: B,
                        onTriggerAuth: N,
                        onDisconnect: W,
                        onClose: E,
                        getPendingKey: O,
                        pendingAdds: c.pendingAdds,
                        isAdded: q(J.id),
                        sharedWarning: Z
                    }) : (0, a.jsx)(h, {
                        connection: J,
                        workflowStore: l,
                        onConnect: B,
                        onTriggerAuth: N,
                        onDisconnect: W,
                        onClose: E,
                        getPendingKey: O,
                        pendingAdds: c.pendingAdds,
                        isAdded: q(J.id),
                        sharedWarning: Z
                    }) : null;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n(833503).s, {
                        ariaLabel: d.formatMessage(n(376242).D.modalAriaLabel),
                        isOpen: s,
                        onDismiss: E,
                        areaConstraint: {
                            width: {
                                type: "fixed",
                                length: 680
                            },
                            height: {
                                type: "fixed",
                                length: 600
                            }
                        },
                        children: () => (0, a.jsx)(n(671968).q, {
                            isSinglePane: !1,
                            leftPaneWidth: 212,
                            title: (0, a.jsx)(n(111010).D, {
                                styleKey: "bodyLgSemibold",
                                colorVariant: "primary",
                                children: d.formatMessage(n(376242).D.title)
                            }),
                            searchAriaLabel: d.formatMessage(n(376242).D.searchAriaLabel),
                            closeSearchAriaLabel: d.formatMessage(n(376242).D.closeSearchAriaLabel),
                            searchPlaceholder: d.formatMessage(n(376242).D.searchPlaceholder),
                            leftPaneContent: ({
                                searchQuery: e
                            }) => (0, a.jsx)(n(781368).J, {
                                searchQuery: e,
                                suggestedConnections: g,
                                connections: p,
                                selectedConnectionId: $,
                                onSelect: et,
                                isConnectionAdded: q,
                                customMcpAction: {
                                    isVisible: ei.isVisible,
                                    isEnabled: ei.isEnabled,
                                    label: (0, a.jsx)(n(109939).sA, { ...er
                                    }),
                                    icon: ei.icon,
                                    onClick: eo ? en : K,
                                    showDisabledTooltip: ei.showDisabledTooltip
                                }
                            }),
                            rightPaneContent: ea
                        })
                    }), c.isMcpModalOpen && v && x ? (0, a.jsx)(n(841682).Z, {
                        isOpen: c.isMcpModalOpen,
                        onClose: V,
                        spaceViewStore: v,
                        workflowId: l.id,
                        currentUserPointer: x,
                        existingModuleId: c.mcpModuleIdToConnect,
                        initialName: null == (t = c.mcpModalInitialData) ? void 0 : t.name,
                        initialUrl: null == (i = c.mcpModalInitialData) ? void 0 : i.url,
                        initialServerUrlConfig: null == (r = c.mcpModalInitialData) ? void 0 : r.serverUrlConfig,
                        existingAgentModules: M,
                        onSuccess: ee
                    }) : void 0]
                })
            }
            let E = {
                    button: {
                        gap: 6,
                        height: 28,
                        paddingInline: 8,
                        borderRadius: 6
                    },
                    hoveredButton: {
                        background: n(632079).Tj.background.secondaryTranslucent
                    },
                    labelGroup: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    },
                    iconStack: {
                        display: "flex",
                        alignItems: "center"
                    },
                    sourceIcon: {
                        width: 18,
                        height: 18,
                        borderRadius: 999,
                        backgroundColor: n(632079).Tj.background.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        boxShadow: `0 0 0 0.5px ${n(632079).Tj.border.secondary}`,
                        boxSizing: "border-box"
                    },
                    sourceIconOverlap: {
                        marginInlineStart: -6
                    }
                },
                V = {
                    pressedButton: {
                        background: (0, n(64960)._S)({
                            color: n(632079).Tj.background.secondaryTranslucent
                        }).pressed
                    }
                };

            function W(e) {
                let {
                    label: t,
                    disabled: i,
                    onClick: r,
                    availableModules: s,
                    tooltipEvents: l
                } = e, d = (0, o.useMemo)(() => s.map(e => e.sharedModule.getIcon()).filter(e => null != e), [s]);
                return (0, a.jsx)(n(988022).p, { ...l,
                    size: "sm",
                    shouldShrink: !0,
                    disabled: i,
                    onClick: r,
                    colorPalette: "gray",
                    iconLeading: {
                        icon: n(638501).plusSmallIcon,
                        size: "sm",
                        fitToViewBox: void 0
                    },
                    style: E.button,
                    hoveredStyle: E.hoveredButton,
                    pressedStyle: V.pressedButton,
                    children: (0, a.jsxs)("span", {
                        style: E.labelGroup,
                        children: [t, d.length > 0 ? (0, a.jsx)("span", {
                            style: E.iconStack,
                            "aria-hidden": !0,
                            children: d.slice(0, 3).map((e, t) => (0, a.jsx)("span", {
                                style: { ...E.sourceIcon,
                                    ...t > 0 ? E.sourceIconOverlap : void 0
                                },
                                children: (0, a.jsx)(e, {
                                    width: 12,
                                    height: 12
                                })
                            }, t))
                        }) : void 0]
                    })
                })
            }
            let N = ["claude-sonnet-4-6", "claude-opus-4-6", "gpt-5.4-low", "gpt-5.4-medium", "gpt-5.4-high", "gpt-5.4-xhigh"];

            function z(e) {
                let {
                    workflowStore: t,
                    externalAgentHarness: o,
                    environment: i
                } = e;
                (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.saveExternalAgentHarness",
                    environment: i,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: t.pointer.spaceId
                    },
                    perform: e => {
                        (0, n(421439).y4)({
                            store: t,
                            operation: n(861988).RR({
                                pointer: t.pointer,
                                externalAgentHarness: o
                            }),
                            transaction: e
                        })
                    }
                })
            }
            let U = (0, n(109939).YK)({
                    title: {
                        id: "workflow.agent.harness.boxyModel.title",
                        defaultMessage: "Boxy model"
                    }
                }),
                F = {
                    inlineSize: "100%"
                },
                O = {
                    marginInlineEnd: "auto"
                },
                q = {
                    marginInlineStart: "auto"
                };

            function H(e) {
                let {
                    disabled: t,
                    model: i,
                    onSelectModel: r
                } = e, s = (0, n(109939).tz)(), l = (0, o.useCallback)(e => {
                    e !== i && r(e)
                }, [i, r]);
                return (0, a.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    gap: 16,
                    style: F,
                    children: [(0, a.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        colorVariant: "primary",
                        style: O,
                        children: s.formatMessage(U.title)
                    }), (0, a.jsx)(n(127322).A, {
                        buttonVariant: "outline",
                        alignmentToOrigin: "end",
                        disabled: t,
                        menuWidth: 240,
                        selectedTitle: i,
                        style: q,
                        renderMenuSections: e => [{
                            key: "boxy-models",
                            items: N.map(t => ({
                                key: t,
                                action: () => {
                                    l(t), e.close()
                                },
                                render: e => (0, a.jsx)(n(95582).A, { ...e,
                                    id: `agent-harness-boxy-model-${t}`,
                                    title: t,
                                    isChecked: i === t
                                })
                            }))
                        }]
                    })]
                })
            }
            let G = (0, n(109939).YK)({
                    title: {
                        id: "workflow.agent.harness.title",
                        defaultMessage: "Agent harness"
                    },
                    notionLabel: {
                        id: "workflow.agent.harness.notion.label",
                        defaultMessage: "Notion"
                    },
                    notionDescription: {
                        id: "workflow.agent.harness.notion.description",
                        defaultMessage: "Runs on Notion’s native custom-agent harness."
                    },
                    boxyLabel: {
                        id: "workflow.agent.harness.boxy.label",
                        defaultMessage: "Boxy"
                    },
                    boxyDescription: {
                        id: "workflow.agent.harness.boxy.description",
                        defaultMessage: "Runs on Boxy while keeping messages persisted in the Notion transcript."
                    }
                }),
                $ = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    paddingInline: 16,
                    paddingTop: 8,
                    paddingBottom: 8
                },
                Y = {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    marginTop: -2
                },
                Q = {
                    cursor: "pointer"
                },
                X = {
                    paddingInline: 0,
                    paddingBlock: 10
                },
                Z = {
                    paddingInlineStart: 28
                };

            function J(e) {
                var t, i;
                let {
                    workflowStore: r,
                    externalAgentHarness: s,
                    disabled: l = !1
                } = e, d = (0, n(533992).v3)(), c = (0, n(109939).tz)(), u = (0, n(214328).n)(r, "harness"), g = r.table === n(832375).C0E ? r : void 0, p = !l && !!g, m = (null == s ? void 0 : s.provider) === "boxy" ? "boxy" : "notion", h = "string" == typeof(i = null == (t = (null == s ? void 0 : s.provider) === "boxy" ? s : void 0) ? void 0 : t.model) && (0, n(722371).Xk)(N, i) ? t.model : "claude-opus-4-6", w = (0, o.useCallback)(e => {
                    p && g && z({
                        workflowStore: g,
                        externalAgentHarness: {
                            provider: "boxy",
                            model: e
                        },
                        environment: d
                    })
                }, [g, d, p]), y = (0, o.useCallback)(e => {
                    p && g && e !== m && z({
                        workflowStore: g,
                        externalAgentHarness: "boxy" === e ? {
                            provider: "boxy",
                            model: h
                        } : void 0,
                        environment: d
                    })
                }, [h, g, d, p, m]), x = (0, o.useCallback)(e => {
                    e !== h && w(e)
                }, [h, w]);
                return (0, a.jsx)(f, {
                    title: (0, a.jsx)(n(109939).sA, { ...G.title
                    }),
                    hasUnpublishedChanges: u,
                    isDimmed: !p,
                    style: X,
                    children: (0, a.jsxs)(n(4458).VP, {
                        gap: 16,
                        style: $,
                        children: [(0, a.jsxs)(n(4458).fI, {
                            gap: 12,
                            alignItems: "flex-start",
                            children: [(0, a.jsx)(n(101127).a, {
                                id: "agent-harness-notion",
                                name: "agent-harness",
                                value: "notion",
                                checked: "notion" === m,
                                onChange: () => y("notion"),
                                disabled: !p,
                                selectorSize: "small"
                            }), (0, a.jsxs)("label", {
                                htmlFor: "agent-harness-notion",
                                style: { ...Y,
                                    ...p ? Q : {}
                                },
                                children: [(0, a.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    children: c.formatMessage(G.notionLabel)
                                }), (0, a.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: c.formatMessage(G.notionDescription)
                                })]
                            })]
                        }), (0, a.jsxs)(n(4458).fI, {
                            gap: 12,
                            alignItems: "flex-start",
                            children: [(0, a.jsx)(n(101127).a, {
                                id: "agent-harness-boxy",
                                name: "agent-harness",
                                value: "boxy",
                                checked: "boxy" === m,
                                onChange: () => y("boxy"),
                                disabled: !p,
                                selectorSize: "small"
                            }), (0, a.jsxs)("label", {
                                htmlFor: "agent-harness-boxy",
                                style: { ...Y,
                                    ...p ? Q : {}
                                },
                                children: [(0, a.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    children: c.formatMessage(G.boxyLabel)
                                }), (0, a.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: c.formatMessage(G.boxyDescription)
                                })]
                            })]
                        }), "boxy" === m ? (0, a.jsx)("div", {
                            style: Z,
                            children: (0, a.jsx)(H, {
                                disabled: !p,
                                model: h,
                                onSelectModel: x
                            })
                        }) : void 0]
                    })
                })
            }
            let ee = (0, n(109939).YK)({
                    title: {
                        id: "workflow.agent.help.title",
                        defaultMessage: "Help"
                    },
                    description: {
                        id: "workflow.agent.help.description",
                        defaultMessage: "Get help with setting up your custom agent"
                    },
                    cta: {
                        id: "workflow.agent.help.cta",
                        defaultMessage: "Get help from a Notion expert"
                    }
                }),
                et = {
                    section: {
                        paddingBlock: 0,
                        paddingInline: 0
                    },
                    ctaButton: {
                        height: 48,
                        padding: "0 20px"
                    },
                    ctaButtonHovered: {
                        background: n(632079).Tj.background.secondaryTranslucent
                    },
                    ctaLabel: {
                        width: "100%",
                        padding: "0 4px"
                    }
                },
                en = {
                    ctaButtonPressed: {
                        background: (0, n(64960)._S)({
                            color: n(632079).Tj.background.secondaryTranslucent
                        }).pressed
                    }
                };

            function eo(e) {
                let {
                    workflowStore: t
                } = e, i = (0, n(533992).v3)(), r = (0, n(83208).X)("setup_session_custom_agent_settings_section"), s = (0, n(938211).J)(), l = (0, o.useCallback)(() => {
                    if (t.table !== n(832375).C0E) return;
                    (0, n(599231).qt)({
                        action: "open_setup_sessions_help",
                        workflowId: t.id,
                        from: "agent_settings_view"
                    });
                    let e = (0, n(269929).q)({
                        environment: i,
                        utmSource: "custom_agent_settings",
                        utmCampaign: "setup_session_custom_agent_settings_section"
                    });
                    (0, n(624621).L)({
                        environment: i,
                        url: e
                    })
                }, [i, t]);
                return !r || t.table !== n(832375).C0E || s ? null : (0, a.jsx)(f, {
                    title: (0, a.jsx)(n(109939).sA, { ...ee.title
                    }),
                    description: (0, a.jsx)(n(109939).sA, { ...ee.description
                    }),
                    isPrimarySection: !0,
                    isDimmed: !1,
                    style: et.section,
                    children: (0, a.jsx)(n(988022).p, {
                        onClick: l,
                        size: "xl",
                        width: "fill",
                        style: et.ctaButton,
                        hoveredStyle: et.ctaButtonHovered,
                        pressedStyle: en.ctaButtonPressed,
                        iconLeading: {
                            icon: n(211052).questionMarkCircleSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        },
                        iconTrailing: {
                            icon: n(759706).arrowDiagonalUpRightSmallIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        },
                        children: (0, a.jsx)("div", {
                            style: et.ctaLabel,
                            children: (0, a.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "primary",
                                children: (0, a.jsx)(n(109939).sA, { ...ee.cta
                                })
                            })
                        })
                    })
                })
            }

            function ei(e) {
                let {
                    workflowStore: t,
                    permissionMode: o,
                    environment: i
                } = e;
                t.table === n(43296).C && (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.savePermissionMode",
                    environment: i,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: t.pointer.spaceId
                    },
                    perform: e => {
                        (0, n(421439).y4)({
                            store: t,
                            operation: n(861988).Jl({
                                pointer: t.pointer,
                                permissionMode: o
                            }),
                            transaction: e
                        })
                    }
                })
            }
            let er = (0, n(109939).YK)({
                    toggleLabel: {
                        id: "workflow.agent.notionAccess.toggle.label",
                        defaultMessage: "Everything I can access in Notion"
                    },
                    toggleDescription: {
                        id: "workflow.agent.notionAccess.toggle.description",
                        defaultMessage: "Agent will have access to all pages and collections you can access. Default access to your AI Connectors coming soon."
                    },
                    disabledBySharing: {
                        id: "workflow.agent.notionAccess.toggle.disabledBySharing",
                        defaultMessage: "This setting cannot be used on agents shared with others"
                    },
                    tooltipAria: {
                        id: "workflow.agent.notionAccess.toggle.tooltip.aria",
                        defaultMessage: "Info about Notion access"
                    }
                }),
                ea = {
                    paddingInline: 10,
                    marginTop: 4,
                    marginBottom: 4
                },
                es = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minHeight: 32,
                    paddingBlock: 8,
                    paddingInline: 10
                },
                el = {
                    minWidth: 200
                },
                ed = {
                    marginInlineStart: 2
                };

            function ec(e) {
                let {
                    workflowStore: t,
                    disabled: i = !1,
                    permissionMode: r
                } = e, s = (0, n(533992).v3)(), l = (0, n(109939).tz)(), d = (0, n(682985).K8)(() => (n(218744).default.getConfig({
                    configName: "custom_agent_permissions"
                }).allowed_permission_modes ? ? ["botActor"]).includes("ownerActor"), []), c = (0, n(346582).b)(t), u = "ownerActor" === r, g = (0, o.useCallback)(() => {
                    ei({
                        workflowStore: t,
                        permissionMode: u ? "botActor" : "ownerActor",
                        environment: s
                    })
                }, [t, s, u]), p = !!i || c;
                return d || u ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        style: ea,
                        children: (0, a.jsxs)("div", {
                            style: es,
                            children: [(0, a.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                children: [(0, a.jsx)(n(16275).I, {
                                    icon: n(125040).personSmallIcon,
                                    size: "sm"
                                }), (0, a.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    children: [(0, a.jsx)(n(111010).D, {
                                        styleKey: "bodyMedium",
                                        children: (0, a.jsx)(n(109939).sA, { ...er.toggleLabel
                                        })
                                    }), (0, a.jsx)(n(51831).m, {
                                        style: el,
                                        content: () => (0, a.jsx)(n(109939).sA, { ...er.toggleDescription
                                        }),
                                        textWrap: !0,
                                        children: e => (0, a.jsx)(n(374533).A, {
                                            size: "xs",
                                            icon: n(372181).infoCircleSmallIcon,
                                            ariaLabel: l.formatMessage(er.tooltipAria),
                                            style: ed,
                                            ...e
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)(n(51831).m, {
                                disableTooltip: !c || u,
                                style: el,
                                content: () => (0, a.jsx)(n(109939).sA, { ...er.disabledBySharing
                                }),
                                textWrap: !0,
                                children: e => (0, a.jsx)("span", { ...e,
                                    children: (0, a.jsx)(n(354491).d, {
                                        disabled: p,
                                        on: u,
                                        onClick: g,
                                        "aria-label": l.formatMessage(er.toggleLabel)
                                    })
                                })
                            })]
                        })
                    }), (0, a.jsx)(n(346268).c, {
                        colorVariant: "secondary",
                        size: 16
                    })]
                }) : null
            }
            let eu = (0, n(109939).YK)({
                    title: {
                        id: "workflow.agent.permissionMode.title",
                        defaultMessage: "Permissions"
                    },
                    internalExperimentBadge: {
                        id: "workflow.agent.permissionMode.internalExperimentBadge",
                        defaultMessage: "Internal experiment"
                    },
                    modeBotActorLabel: {
                        id: "workflow.agent.permissionMode.botActor.label",
                        defaultMessage: "Agent is a user"
                    },
                    modeBotActorDescription: {
                        id: "workflow.agent.permissionMode.botActor.description",
                        defaultMessage: "The agent is it’s own user. It may reveal information that the user talking to it does not have access to."
                    },
                    modeStrictLabel: {
                        id: "workflow.agent.permissionMode.strictMode.label",
                        defaultMessage: "Strict mode"
                    },
                    modeStrictDescription: {
                        id: "workflow.agent.permissionMode.strictMode.description",
                        defaultMessage: "Requires that the user talking to the agent has permission to all the resources the agent can use."
                    },
                    modeEndUserLabel: {
                        id: "workflow.agent.permissionMode.endUser.label",
                        defaultMessage: "As end user"
                    },
                    modeEndUserDescription: {
                        id: "workflow.agent.permissionMode.endUser.description",
                        defaultMessage: "Runs with the user`s permissions. Has access to everything the user has access to. Disables triggers"
                    },
                    modeOwnerActorLabel: {
                        id: "workflow.agent.permissionMode.ownerActor.label",
                        defaultMessage: "As owner"
                    },
                    modeOwnerActorDescription: {
                        id: "workflow.agent.permissionMode.ownerActor.description",
                        defaultMessage: "Runs with the owner’s permissions. Triggers only execute for the owner."
                    }
                }),
                eg = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    paddingInline: 16,
                    paddingTop: 8,
                    paddingBottom: 8
                },
                ep = {
                    paddingInline: 0,
                    paddingBlock: 10
                };

            function ef(e) {
                let {
                    workflowStore: t,
                    disabled: i = !1,
                    permissionMode: r
                } = e, s = (0, n(682985).K8)(() => n(218744).default.getConfig({
                    configName: "custom_agent_permissions"
                }).allowed_permission_modes ? ? ["botActor"], []), l = (0, n(533992).v3)(), d = (0, n(109939).tz)(), c = (0, n(214328).n)(t, "permissionMode"), u = t.table === n(43296).C ? t : void 0, g = !i && !!u, p = (0, o.useMemo)(() => [{
                    value: "botActor",
                    label: d.formatMessage(eu.modeBotActorLabel),
                    description: d.formatMessage(eu.modeBotActorDescription)
                }, {
                    value: "strictMode",
                    label: d.formatMessage(eu.modeStrictLabel),
                    description: d.formatMessage(eu.modeStrictDescription)
                }, {
                    value: "endUserActor",
                    label: d.formatMessage(eu.modeEndUserLabel),
                    description: d.formatMessage(eu.modeEndUserDescription)
                }, {
                    value: "ownerActor",
                    label: d.formatMessage(eu.modeOwnerActorLabel),
                    description: d.formatMessage(eu.modeOwnerActorDescription)
                }], [d]), m = (0, o.useMemo)(() => p.filter(e => s.includes(e.value)), [p, s]), h = (0, n(960253).I)(() => ({
                    label: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginTop: -2,
                        cursor: g ? "pointer" : "default"
                    }
                }), [g]), w = (0, o.useCallback)(e => {
                    !g || e === r || u && ei({
                        workflowStore: u,
                        permissionMode: e,
                        environment: l
                    })
                }, [u, l, g, r]), y = s.length > 1, x = s.includes(r);
                return !y || x ? null : (0, a.jsx)(f, {
                    title: (0, a.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        children: [(0, a.jsx)(n(109939).sA, { ...eu.title
                        }), (0, a.jsx)(n(746434).E, {
                            color: "blue",
                            content: (0, a.jsx)(n(109939).sA, { ...eu.internalExperimentBadge
                            })
                        })]
                    }),
                    style: ep,
                    hasUnpublishedChanges: c,
                    isDimmed: !g,
                    children: (0, a.jsx)("div", {
                        style: eg,
                        children: m.map(e => (0, a.jsxs)(n(4458).fI, {
                            gap: 12,
                            alignItems: "flex-start",
                            children: [(0, a.jsx)(n(101127).a, {
                                id: e.value,
                                name: e.value,
                                value: e.value,
                                checked: r === e.value,
                                onChange: () => w(e.value),
                                disabled: !g,
                                selectorSize: "small"
                            }), (0, a.jsxs)("label", {
                                htmlFor: e.value,
                                style: h.label,
                                children: [(0, a.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    children: e.label
                                }), (0, a.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: e.description
                                })]
                            })]
                        }, e.value))
                    })
                })
            }
            let em = {
                error: {
                    color: n(632079).Tj.red.text.accentPrimary,
                    margin: 10
                }
            };

            function eh() {
                return (0, a.jsx)("div", {
                    style: em.error,
                    children: (0, a.jsx)(n(109939).sA, {
                        defaultMessage: "This field is required",
                        id: "workflowAdvancedAgent.workflowConfig.requiredErrorLabel"
                    })
                })
            }
            n(16280), n(737550);
            var ew = () => n(548161);
            let ey = (0, n(109939).YK)({
                    connectToService: {
                        id: "workflow.agent.setupChecklist.connectToService",
                        defaultMessage: "Connect to {serviceName}"
                    },
                    setupTrigger: {
                        id: "workflow.agent.setupChecklist.setupTrigger",
                        defaultMessage: "Set up {triggerName}"
                    },
                    setupCalendarAccount: {
                        id: "workflow.agent.setupChecklist.setupCalendarAccount",
                        defaultMessage: "Set up calendar account"
                    },
                    setupMailAccount: {
                        id: "workflow.agent.setupChecklist.setupMailAccount",
                        defaultMessage: "Set up mail account"
                    },
                    reconnectMailAccount: {
                        id: "workflow.agent.setupChecklist.reconnectMailAccount",
                        defaultMessage: "Reconnect your mail account"
                    },
                    moduleSlack: {
                        id: "workflow.agent.setupChecklist.module.slack",
                        defaultMessage: "Slack"
                    },
                    moduleGoogleDrive: {
                        id: "workflow.agent.setupChecklist.module.googledrive",
                        defaultMessage: "Google Drive"
                    },
                    moduleGoogleCalendar: {
                        id: "workflow.agent.setupChecklist.module.googlecalendar",
                        defaultMessage: "Google Calendar"
                    },
                    moduleGmail: {
                        id: "workflow.agent.setupChecklist.module.gmail",
                        defaultMessage: "Gmail"
                    },
                    moduleJira: {
                        id: "workflow.agent.setupChecklist.module.jira",
                        defaultMessage: "Jira"
                    },
                    moduleLinear: {
                        id: "workflow.agent.setupChecklist.module.linear",
                        defaultMessage: "Linear"
                    },
                    moduleNotion: {
                        id: "workflow.agent.setupChecklist.module.notion",
                        defaultMessage: "Notion"
                    },
                    moduleAirtable: {
                        id: "workflow.agent.setupChecklist.module.airtable",
                        defaultMessage: "Airtable"
                    },
                    moduleZapier: {
                        id: "workflow.agent.setupChecklist.module.zapier",
                        defaultMessage: "Zapier"
                    },
                    moduleMail: {
                        id: "workflow.agent.setupChecklist.module.mail",
                        defaultMessage: "Mail"
                    },
                    triggerCalendarEventCreated: {
                        id: "workflow.agent.setupChecklist.trigger.calendar.event.created",
                        defaultMessage: "calendar event created trigger"
                    },
                    triggerCalendarEventUpdated: {
                        id: "workflow.agent.setupChecklist.trigger.calendar.event.updated",
                        defaultMessage: "calendar event updated trigger"
                    },
                    triggerCalendarEventCanceled: {
                        id: "workflow.agent.setupChecklist.trigger.calendar.event.canceled",
                        defaultMessage: "calendar event canceled trigger"
                    },
                    triggerNotionPageCreated: {
                        id: "workflow.agent.setupChecklist.trigger.notion.page.created",
                        defaultMessage: "page created trigger"
                    },
                    triggerNotionPageUpdated: {
                        id: "workflow.agent.setupChecklist.trigger.notion.page.updated",
                        defaultMessage: "page updated trigger"
                    },
                    triggerNotionPageDeleted: {
                        id: "workflow.agent.setupChecklist.trigger.notion.page.deleted",
                        defaultMessage: "page deleted trigger"
                    },
                    triggerNotionDatabaseAgentUpdated: {
                        id: "workflow.agent.setupChecklist.trigger.notion.database.agent.updated",
                        defaultMessage: "database updated trigger"
                    },
                    triggerNotionPageDiscussionCommentAdded: {
                        id: "workflow.agent.setupChecklist.trigger.notion.page.discussion.comment.added",
                        defaultMessage: "comment added trigger"
                    },
                    triggerNotionAgentMentioned: {
                        id: "workflow.agent.setupChecklist.trigger.notion.agent.mentioned",
                        defaultMessage: "agent mention trigger"
                    },
                    triggerRecurrence: {
                        id: "workflow.agent.setupChecklist.trigger.recurrence",
                        defaultMessage: "schedule trigger"
                    },
                    triggerSlackMessage: {
                        id: "workflow.agent.setupChecklist.trigger.slack.message",
                        defaultMessage: "Slack message trigger"
                    },
                    triggerSlackReactionAdded: {
                        id: "workflow.agent.setupChecklist.trigger.slack.reaction.added",
                        defaultMessage: "Slack reaction trigger"
                    },
                    triggerSlackThreadCreated: {
                        id: "workflow.agent.setupChecklist.trigger.slack.thread.created",
                        defaultMessage: "Slack thread trigger"
                    },
                    triggerSlackAppMention: {
                        id: "workflow.agent.setupChecklist.trigger.slack.app.mention",
                        defaultMessage: "Slack mention trigger"
                    },
                    triggerDatabase: {
                        id: "workflow.agent.setupChecklist.trigger.database",
                        defaultMessage: "database trigger"
                    },
                    triggerPage: {
                        id: "workflow.agent.setupChecklist.trigger.page",
                        defaultMessage: "page trigger"
                    },
                    triggerSchedule: {
                        id: "workflow.agent.setupChecklist.trigger.schedule",
                        defaultMessage: "schedule trigger"
                    },
                    triggerWebhook: {
                        id: "workflow.agent.setupChecklist.trigger.webhook",
                        defaultMessage: "webhook trigger"
                    }
                }),
                ex = {
                    container: {
                        backgroundColor: n(632079).Tj.blue.background.primary,
                        borderRadius: 12,
                        padding: 10
                    },
                    header: {
                        height: 32,
                        paddingInline: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: n(632079).Tj.blue.text.accentPrimary
                    },
                    button: {
                        justifyContent: "flex-start",
                        paddingInline: 10,
                        fontWeight: n(699422).Wy.regular
                    },
                    hoveredButton: {
                        background: n(632079).Tj.blue.background.primaryTranslucent
                    },
                    pressedButton: {
                        background: n(632079).Tj.blue.background.secondaryTranslucent
                    }
                };

            function ev(e) {
                let {
                    workflowStore: t,
                    suppressChecklistStore: i
                } = e, r = (0, n(109939).tz)(), {
                    workflowValue: s
                } = (0, n(867587).N)(t, !0), l = (0, n(682985).K8)(() => (0, n(440143).Y)().getCalendarProviderAccounts().length, []), d = (0, n(682985).K8)(() => {
                    var e;
                    return null == s || null == (e = s.modules) ? void 0 : e.find(e => "calendar" === e.type)
                }, [s]), c = (0, n(684551).i)({
                    module: d ? ? {
                        type: "calendar",
                        id: "",
                        name: "",
                        version: ""
                    },
                    store: t
                }), u = !!d && (0, n(642157).p2)(c), g = (0, n(682985).K8)(() => {
                    var e;
                    return null == s || null == (e = s.modules) ? void 0 : e.find(e => "mail" === e.type)
                }, [s]), p = (0, n(684551).i)({
                    module: g ? ? {
                        type: "mail",
                        id: "",
                        name: "",
                        version: ""
                    },
                    store: t
                }), f = !!g && (0, n(642157).p2)(p), m = (0, n(682985).K8)(() => f && n(306833).o.state.emailAccountIdsNeedingReconnect.length > 0, [f]), h = (0, n(682985).K8)(() => {
                    if (!s) return [];
                    let e = [];
                    for (let t of s.modules ? ? []) {
                        let n = (0, j().jK)(t.type),
                            o = "calendar" === t.type && u,
                            i = !1;
                        if ("calendar" === t.type) {
                            let e = t.permissions ? ? [],
                                n = new Set(e.filter(e => "accountOrganizationCalendars" === e.type).map(e => e.identifier));
                            i = e.some(e => "calendar" === e.type && n.has(e.accountId))
                        }
                        if (o && l > 0 && !i && e.push({
                                type: "module",
                                displayName: r.formatMessage(ey.setupCalendarAccount),
                                moduleType: t.type
                            }), o && 0 === l || n && "ready" !== n.getModuleConfigurationStatus(t, s)) {
                            let n = eb(t.type, r);
                            e.push({
                                type: "module",
                                displayName: r.formatMessage(ey.connectToService, {
                                    serviceName: n
                                }),
                                moduleType: t.type
                            })
                        }
                        if ("mail" === t.type && f) {
                            let n = t.state,
                                o = (null == n ? void 0 : n.emailAddresses) && n.emailAddresses.length > 0,
                                i = !1;
                            if (null != n && n.selectedEmailAccountIds && n.selectedEmailAccountIds.length > 0 && n.emailPermissionSettings && (i = n.selectedEmailAccountIds.some(e => {
                                    var t, o;
                                    let i = null == (t = n.emailAddresses) || null == (t = t.find(t => t.emailAccountId === e)) ? void 0 : t.email;
                                    return i && (null == (o = n.emailPermissionSettings) ? void 0 : o[i])
                                })), o && !i && e.push({
                                    type: "module",
                                    displayName: r.formatMessage(ey.setupMailAccount),
                                    moduleType: t.type
                                }), !o) {
                                let n = eb(t.type, r);
                                e.push({
                                    type: "module",
                                    displayName: r.formatMessage(ey.connectToService, {
                                        serviceName: n
                                    }),
                                    moduleType: t.type
                                })
                            }
                        }
                    }
                    return e.push(... function(e) {
                        let {
                            triggers: t,
                            intl: n
                        } = e, o = [], i = new Map, r = function(e) {
                            let t = [];
                            for (let o of e ? ? [])
                                if (!(0, ew().VB)(o)) {
                                    var n;
                                    let e = null == (n = o.state) ? void 0 : n.type;
                                    e && t.push({
                                        trigger: o,
                                        triggerType: e
                                    })
                                }
                            return t
                        }(t);
                        for (let {
                                triggerType: e
                            } of r) {
                            let t = (i.get(e) ? ? 0) + 1;
                            i.set(e, t)
                        }
                        let a = new Map;
                        for (let {
                                trigger: e,
                                triggerType: t
                            } of r) {
                            let r = (a.get(t) ? ? 0) + 1;
                            a.set(t, r);
                            let s = i.get(t);
                            if (void 0 === s) throw Error(`Missing trigger count for ${t}`);
                            let l = function(e) {
                                let {
                                    triggerType: t,
                                    triggerIndex: n,
                                    totalTriggerCount: o,
                                    intl: i
                                } = e, r = function(e, t) {
                                    switch (e) {
                                        case "calendar.event.created":
                                            return t.formatMessage(ey.triggerCalendarEventCreated);
                                        case "calendar.event.updated":
                                            return t.formatMessage(ey.triggerCalendarEventUpdated);
                                        case "calendar.event.canceled":
                                            return t.formatMessage(ey.triggerCalendarEventCanceled);
                                        case "notion.page.created":
                                            return t.formatMessage(ey.triggerNotionPageCreated);
                                        case "notion.page.updated":
                                            return t.formatMessage(ey.triggerNotionPageUpdated);
                                        case "notion.page.deleted":
                                            return t.formatMessage(ey.triggerNotionPageDeleted);
                                        case "notion.database.agent.updated":
                                            return t.formatMessage(ey.triggerNotionDatabaseAgentUpdated);
                                        case "notion.page.discussion.comment.added":
                                            return t.formatMessage(ey.triggerNotionPageDiscussionCommentAdded);
                                        case "notion.agent.mentioned":
                                            return t.formatMessage(ey.triggerNotionAgentMentioned);
                                        case "recurrence":
                                            return t.formatMessage(ey.triggerRecurrence);
                                        case "slack.message":
                                            return t.formatMessage(ey.triggerSlackMessage);
                                        case "slack.reaction.added":
                                            return t.formatMessage(ey.triggerSlackReactionAdded);
                                        case "slack.thread.created":
                                            return t.formatMessage(ey.triggerSlackThreadCreated);
                                        case "slack.app.mention":
                                            return t.formatMessage(ey.triggerSlackAppMention);
                                        case "database":
                                            return t.formatMessage(ey.triggerDatabase);
                                        case "page":
                                            return t.formatMessage(ey.triggerPage);
                                        case "schedule":
                                            return t.formatMessage(ey.triggerSchedule);
                                        case "webhook":
                                            return t.formatMessage(ey.triggerWebhook);
                                        default:
                                            let n = e.split(".").slice(-1)[0].replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").toLowerCase();
                                            return `${n} trigger`
                                    }
                                }(t, i);
                                return o <= 1 ? r : `${r} ${i.formatNumber(n)}`
                            }({
                                triggerType: t,
                                triggerIndex: r,
                                totalTriggerCount: s,
                                intl: n
                            });
                            o.push({
                                type: "trigger",
                                displayName: n.formatMessage(ey.setupTrigger, {
                                    triggerName: l
                                }),
                                trigger: e
                            })
                        }
                        return o
                    }({
                        triggers: s.triggers,
                        intl: r
                    })), e
                }, [s, r, l, u, f]), w = (0, o.useCallback)(async e => {
                    await (0, n(915397).S)({
                        workflowStore: t,
                        editingTriggerId: e.id,
                        suppressChecklistStore: i
                    })
                }, [t, i]), y = (0, o.useCallback)(() => {
                    let e = document.querySelector('[data-section="tools-and-access"]');
                    e && e.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                }, []), x = (0, o.useCallback)(e => {
                    "trigger" === e.type && e.trigger ? w(e.trigger).catch(() => {}) : "module" === e.type && y()
                }, [w, y]);
                return 0 !== h.length || m ? (0, a.jsxs)("div", {
                    style: ex.container,
                    children: [(0, a.jsx)("div", {
                        style: ex.header,
                        children: (0, a.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            children: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Finish Setup",
                                id: "workflow.agent.setupChecklist.title"
                            })
                        })
                    }), (0, a.jsxs)(n(4458).VP, {
                        gap: 2,
                        children: [h.map((e, t) => (0, a.jsx)(n(988022).p, {
                            size: "lg",
                            onClick: () => x(e),
                            iconLeading: {
                                icon: n(634663).circleIcon,
                                colorVariant: "secondary"
                            },
                            style: ex.button,
                            hoveredStyle: ex.hoveredButton,
                            pressedStyle: ex.pressedButton,
                            children: e.displayName
                        }, t)), m ? (0, a.jsx)(n(988022).p, {
                            size: "lg",
                            onClick: y,
                            iconLeading: {
                                icon: n(634663).circleIcon,
                                colorVariant: "secondary"
                            },
                            style: ex.button,
                            hoveredStyle: ex.hoveredButton,
                            pressedStyle: ex.pressedButton,
                            children: (0, a.jsx)(n(109939).sA, { ...ey.reconnectMailAccount
                            })
                        }) : void 0]
                    })]
                }) : null
            }

            function eb(e, t) {
                switch (e) {
                    case "slack":
                        return t.formatMessage(ey.moduleSlack);
                    case "googledrive":
                        return t.formatMessage(ey.moduleGoogleDrive);
                    case "googlecalendar":
                        return t.formatMessage(ey.moduleGoogleCalendar);
                    case "gmail":
                        return t.formatMessage(ey.moduleGmail);
                    case "jira":
                        return t.formatMessage(ey.moduleJira);
                    case "linear":
                        return t.formatMessage(ey.moduleLinear);
                    case "notion":
                        return t.formatMessage(ey.moduleNotion);
                    case "airtable":
                        return t.formatMessage(ey.moduleAirtable);
                    case "zapier":
                        return t.formatMessage(ey.moduleZapier);
                    case "mail":
                        return t.formatMessage(ey.moduleMail);
                    default:
                        return e.charAt(0).toUpperCase() + e.slice(1)
                }
            }
            let ek = (0, n(109939).YK)({
                    templateTitle: {
                        id: "workflow.agent.template.title",
                        defaultMessage: "Templates (admin only)"
                    },
                    templateLabel: {
                        id: "workflow.agent.template.label",
                        defaultMessage: "Template mode"
                    },
                    templateToggleAria: {
                        id: "workflow.agent.template.toggleAria",
                        defaultMessage: "Toggle template mode"
                    }
                }),
                ej = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minHeight: 48,
                    paddingInline: 16
                },
                eS = {
                    paddingInline: 0,
                    paddingBlock: 0
                };

            function eM(e) {
                let {
                    workflowStore: t,
                    disabled: i = !1
                } = e, r = (0, n(533992).v3)(), s = (0, n(109939).tz)(), l = (0, n(682985).K8)(() => t.getIsTemplate(), [t]), d = (0, n(682985).K8)(() => (0, n(909212).Ke)(), []), c = d || l, u = (0, n(682985).K8)(() => t.canEdit(), [t]), g = (0, o.useCallback)(() => {
                    u && d && function(e) {
                        let {
                            isTemplate: t,
                            workflowStore: o,
                            environment: i
                        } = e;
                        (0, n(377796).createAndCommit)({
                            userAction: "WorkflowActions.saveIsTemplate",
                            environment: i,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: o.pointer.spaceId
                            },
                            perform: e => {
                                (0, n(421439).y4)({
                                    store: o,
                                    operation: n(861988).nR({
                                        pointer: o.pointer,
                                        isTemplate: t
                                    }),
                                    transaction: e
                                })
                            }
                        })
                    }({
                        environment: r,
                        workflowStore: t,
                        isTemplate: !l
                    })
                }, [r, t, l, u, d]);
                return c ? (0, a.jsx)(f, {
                    title: (0, a.jsx)(n(109939).sA, { ...ek.templateTitle
                    }),
                    hasUnpublishedChanges: !1,
                    isDimmed: i,
                    style: eS,
                    children: (0, a.jsxs)("div", {
                        style: ej,
                        children: [(0, a.jsx)(n(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            children: (0, a.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: (0, a.jsx)(n(109939).sA, { ...ek.templateLabel
                                })
                            })
                        }), (0, a.jsx)(n(354491).d, {
                            on: l,
                            onClick: g,
                            disabled: i || !u || !d,
                            "aria-label": s.formatMessage(ek.templateToggleAria)
                        })]
                    })
                }) : null
            }
            let eC = {
                borderRadius: 100,
                width: 20,
                height: 20,
                flexShrink: 0
            };

            function eI(e) {
                let {
                    value: t,
                    index: i,
                    onSave: r,
                    onRemove: s,
                    disabled: l = !1
                } = e, d = (0, n(109939).tz)(), c = (0, n(533992).v3)(), [u, g] = (0, o.useState)(!1), [p, f] = (0, o.useState)(!1), [m, h] = (0, o.useState)(t), w = (0, o.useRef)(null), y = (0, o.useRef)(null), [x, v] = (0, n(768397).s)(), b = (0, n(421573).A)(y, x), k = n(649316).U.bodyRegular, j = (0, n(960253).I)(() => ({
                    pill: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        borderRadius: 100,
                        paddingInline: "12px 6px",
                        paddingBlock: 6,
                        position: "relative",
                        minHeight: 32,
                        outline: "none",
                        flexShrink: 0,
                        ...p ? {
                            width: 200,
                            backgroundColor: n(632079).Tj.background.tertiary
                        } : {
                            maxWidth: 200,
                            backgroundColor: u ? n(632079).Tj.background.tertiary : n(632079).Tj.background.secondary
                        },
                        ...c.device.isDesktop && v && {
                            boxShadow: n(632079).Tj.buttonBlueFocusRing
                        }
                    },
                    pillText: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        cursor: l ? "default" : "text"
                    },
                    input: {
                        border: "none",
                        outline: "none",
                        ...k,
                        flex: 1,
                        minWidth: 0
                    }
                }), [l, c.device.isDesktop, v, k, p, u]), S = (0, o.useCallback)(() => {
                    g(!0)
                }, []), M = (0, o.useCallback)(() => {
                    g(!1)
                }, []), C = (0, o.useCallback)(e => {
                    e.stopPropagation(), l || p || (f(!0), h(t), requestAnimationFrame(() => {
                        var e, t;
                        null == (e = w.current) || e.focus(), null == (t = w.current) || t.select()
                    }))
                }, [l, p, t]), I = (0, o.useCallback)(e => {
                    e.stopPropagation();
                    let n = m.trim();
                    n && n !== t && r(i, n), f(!1), g(!1)
                }, [m, t, i, r]), A = (0, o.useCallback)(() => {
                    h(t), f(!1), g(!1)
                }, [t]), T = (0, o.useCallback)(e => {
                    "Enter" === e.key && (e.preventDefault(), I(e))
                }, [I]), D = (0, o.useCallback)(e => {
                    "Enter" !== e.key || p || l || (e.preventDefault(), C(e))
                }, [p, l, C]), _ = (0, o.useCallback)(e => {
                    h(e.target.value)
                }, []), P = (0, o.useCallback)(e => {
                    !e.currentTarget.contains(e.relatedTarget) && p && A()
                }, [A, p]), L = (0, o.useCallback)(e => {
                    e.stopPropagation(), s(i)
                }, [s, i]);
                return (0, n(251454).L)({
                    active: p,
                    closeHandler: A,
                    ref: y
                }), (0, a.jsx)("div", {
                    ref: b,
                    style: j.pill,
                    onMouseEnter: S,
                    onMouseLeave: M,
                    onClick: C,
                    onKeyDown: D,
                    onBlur: P,
                    tabIndex: l ? -1 : 0,
                    role: "button",
                    "aria-label": d.formatMessage({
                        defaultMessage: "Edit conversation starter",
                        id: "workflow.agent.conversationStarters.editPill"
                    }),
                    children: p ? (0, a.jsxs)(n(519451).A, {
                        debugName: "ConversationStarterPill",
                        capture: p,
                        children: [(0, a.jsx)(n(36481).p, {
                            ref: w,
                            value: m,
                            onChange: _,
                            onKeyDown: T,
                            format: "transparent",
                            style: j.input,
                            inputStyle: j.input,
                            maxlength: 100,
                            autoFocus: !0
                        }), (0, a.jsx)(n(374533).A, {
                            icon: n(971730).checkmarkSmallIcon,
                            onClick: I,
                            size: "sm",
                            colorVariant: "primary",
                            style: eC,
                            ariaLabel: d.formatMessage({
                                defaultMessage: "Save",
                                id: "workflow.agent.conversationStarters.save"
                            })
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            style: j.pillText,
                            lineClamp: 1,
                            children: t
                        }), (0, a.jsx)(n(374533).A, {
                            icon: n(25094).xMarkSmallIcon,
                            onClick: L,
                            size: "sm",
                            colorVariant: "secondary",
                            disabled: l,
                            style: eC,
                            ariaLabel: d.formatMessage({
                                defaultMessage: "Remove",
                                id: "workflow.agent.conversationStarters.remove"
                            })
                        })]
                    })
                })
            }
            let eA = {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    position: "relative",
                    paddingInlineEnd: 6
                },
                eT = {
                    flex: 1
                },
                eD = {
                    backgroundColor: "transparent",
                    borderRadius: 14,
                    border: "none"
                },
                e_ = {
                    flexShrink: 0,
                    borderRadius: 8
                },
                eP = {
                    paddingBlock: 11,
                    paddingInlineEnd: 0
                };

            function eL(e) {
                let {
                    workflowStore: t,
                    disabled: i = !1
                } = e, r = (0, n(533992).v3)(), s = (0, n(109939).tz)(), [l, d] = (0, o.useState)(""), c = (0, n(214328).n)(t, "conversationStarters"), u = (0, n(682985).K8)(() => (t.table === n(43296).C, t.getDataStore().getKeyStore("conversationStarters")), [t]), g = (0, n(682985).K8)(() => {
                    var e;
                    return Array.isArray(e = null == u ? void 0 : u.getValue()) ? e.filter(e => "string" == typeof e) : []
                }, [u]), p = (0, o.useCallback)(e => {
                    t.table === n(43296).C && function(e) {
                        let {
                            conversationStarters: t,
                            workflowStore: o,
                            environment: i
                        } = e;
                        (0, n(377796).createAndCommit)({
                            userAction: "WorkflowActions.saveConversationStarters",
                            environment: i,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: o.pointer.spaceId
                            },
                            perform: e => {
                                (0, n(421439).y4)({
                                    store: o,
                                    operation: n(861988).g9({
                                        pointer: o.pointer,
                                        conversationStarters: t
                                    }),
                                    transaction: e
                                })
                            }
                        })
                    }({
                        workflowStore: t,
                        conversationStarters: e.length > 0 ? e : void 0,
                        environment: r
                    })
                }, [r, t]), m = (0, o.useCallback)(() => {
                    let e = l.trim();
                    e && !g.includes(e) && (p([...g, e]), d(""))
                }, [l, g, p]), h = (0, o.useCallback)(e => {
                    p(g.filter((t, n) => n !== e))
                }, [g, p]), w = (0, o.useCallback)((e, t) => {
                    let n = [...g];
                    n[e] = t, p(n)
                }, [g, p]), y = (0, o.useCallback)(e => {
                    "Enter" === e.key && (e.preventDefault(), m())
                }, [m]), x = (0, o.useCallback)(e => {
                    d(e.target.value)
                }, []);
                return (0, a.jsxs)(n(4458).VP, {
                    gap: 12,
                    children: [(0, a.jsx)(f, {
                        title: (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Conversation starters",
                            id: "workflow.agent.conversationStarters.title"
                        }),
                        style: eP,
                        hasUnpublishedChanges: c,
                        isDimmed: i,
                        children: (0, a.jsxs)("div", {
                            style: eA,
                            children: [(0, a.jsx)("div", {
                                style: eT,
                                children: (0, a.jsx)(n(157982).E, {
                                    value: l,
                                    onChange: x,
                                    onKeyDown: y,
                                    placeholder: "What should people talk to this agent about…",
                                    inputStyle: eD,
                                    disabled: i,
                                    debugName: "ConversationStarterInput",
                                    autosizeMinHeight: 22
                                })
                            }), (0, a.jsx)(n(374533).A, {
                                icon: () => (0, a.jsx)(n(16275).I, {
                                    icon: n(831947).I,
                                    size: "default"
                                }),
                                onClick: m,
                                size: "md",
                                disabled: i || !l.trim(),
                                style: e_,
                                ariaLabel: s.formatMessage({
                                    defaultMessage: "Add conversation starter",
                                    id: "workflow.agent.conversationStarters.addButton"
                                })
                            })]
                        })
                    }), g.length > 0 ? (0, a.jsx)(n(4458).fI, {
                        flexWrap: "wrap",
                        gap: 12,
                        children: g.map((e, t) => (0, a.jsx)(eI, {
                            value: e,
                            index: t,
                            onSave: w,
                            onRemove: h,
                            disabled: i
                        }, t))
                    }) : null]
                })
            }
            n(908872), n(814603), n(147566), n(198721);
            let eR = new(n(245541)).R({
                    key: "custom-agent-favicon-cache",
                    namespace: "workflows",
                    important: !1,
                    trackingType: "preference"
                }),
                eB = {
                    width: 16,
                    height: 16,
                    display: "grid",
                    placeItems: "center"
                };

            function eK(e) {
                let {
                    domain: t,
                    faviconUrl: i
                } = e, [r, s] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    s(!1)
                }, [i]);
                let l = {
                    width: 16,
                    height: 16,
                    display: "block"
                };
                return r ? (0, a.jsx)("span", {
                    style: eB,
                    children: (0, a.jsx)(n(16275).I, {
                        icon: n(451034).globeSmallIcon,
                        style: l
                    })
                }) : (0, a.jsx)("span", {
                    style: eB,
                    children: (0, a.jsx)("img", {
                        src: i || `https://${t}/favicon.ico`,
                        width: 16,
                        height: 16,
                        onError: () => s(!0),
                        alt: "",
                        style: l
                    })
                })
            }
            let eE = {
                    buttonFocused: {
                        background: n(632079).Tj.background.secondaryTranslucent
                    },
                    error: {
                        fontSize: 12,
                        paddingInlineStart: 10
                    },
                    permissionRow: {
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 6,
                        justifyContent: "space-between",
                        height: 28,
                        paddingInlineStart: 10
                    },
                    resourceInfo: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        flex: 1,
                        fontWeight: n(699422).Wy.regular
                    },
                    permissionRoleSelect: {
                        fontSize: 12,
                        color: n(632079).Tj.text.secondary,
                        fontWeight: n(699422).Wy.medium
                    },
                    enterHint: {
                        fontSize: 12,
                        color: n(632079).Tj.text.tertiary,
                        fontWeight: n(699422).Wy.medium,
                        paddingInline: 8,
                        marginInlineEnd: -4
                    },
                    style0: {
                        width: 16,
                        height: 16,
                        display: "grid",
                        placeItems: "center"
                    }
                },
                eV = (0, n(64960)._S)({
                    color: n(632079).Tj.background.secondaryTranslucent
                });

            function eW({
                notionModule: e,
                workflowStore: t,
                threadStore: i,
                disabled: r = !1
            }) {
                let s = (0, n(533992).v3)(),
                    l = (0, n(109939).tz)(),
                    [d, c] = (0, o.useState)(""),
                    [u, g] = (0, o.useState)(),
                    [p, f] = (0, o.useState)(!1),
                    m = (0, n(682985).O$)(eR),
                    [h, w] = (0, o.useState)(m ? ? {}),
                    y = (0, n(682985).K8)(() => (0, n(974410).f)(t), [t]),
                    x = (0, n(960253).I)(() => ({
                        button: {
                            width: "100%",
                            paddingInlineStart: 10,
                            gap: 8,
                            display: "flex",
                            alignItems: "center",
                            height: 28,
                            borderRadius: 6,
                            "--pseudoHover--background": n(632079).Tj.background.secondaryTranslucent,
                            "--pseudoActive--background": eV.pressed
                        },
                        input: {
                            flex: 1,
                            fontSize: 14,
                            "--c-inpBluFocRin": "none"
                        }
                    }), []),
                    v = o.useMemo(() => {
                        var t;
                        let n = null == (t = e.permissions) ? void 0 : t.find(e => "search" === e.type && "web" === e.identifier.type);
                        return (null == n ? void 0 : n.type) === "search" && "web" === n.identifier.type && n.identifier.allowedDomains || []
                    }, [e.permissions]);
                (0, o.useEffect)(() => {
                    (async () => {
                        let e = v.filter(e => !h[e]);
                        if (0 === e.length) return;
                        let t = (await (0, n(975162).lX)(e, 10, async e => {
                            try {
                                let t = await s.api.callApi({
                                    eventName: "getDataForLinkMention",
                                    environment: s,
                                    data: {
                                        url: `https://${e}`,
                                        source: "custom_agent_domain_allowlist"
                                    }
                                });
                                if ("success" === t.type && "favicon_url" in t.data && t.data.favicon_url) return {
                                    domain: e,
                                    url: t.data.favicon_url
                                }
                            } catch (e) {}
                            return null
                        })).filter(e => null !== e).reduce((e, t) => (e[t.domain] = t.url, e), {});
                        if (Object.keys(t).length > 0) {
                            let e = { ...h,
                                ...t
                            };
                            w(e), eR.setState(e)
                        }
                    })()
                }, [v, s, h]);
                let b = (0, o.useCallback)(o => {
                        if (t.table === n(581654).U6) return;
                        let i = (e.permissions || []).filter(e => "search" !== e.type || "web" !== e.identifier.type),
                            r = {
                                moduleType: "notion",
                                type: "search",
                                identifier: {
                                    type: "web",
                                    ...o.length > 0 ? {
                                        allowedDomains: o
                                    } : {}
                                },
                                actions: ["allow"]
                            },
                            a = { ...e,
                                permissions: [...i, r]
                            };
                        (0, n(677701).c)({
                            environment: s,
                            workflowStore: t,
                            module: a
                        })
                    }, [s, e, t]),
                    k = (0, o.useCallback)(() => {
                        let e = function(e) {
                            try {
                                let t = e.trim().startsWith("http") ? e.trim() : `https://${e.trim()}`;
                                return new URL(t).hostname.toLowerCase().replace(/^www\./, "")
                            } catch {
                                return e.trim().toLowerCase().replace(/^www\./, "")
                            }
                        }(d);
                        e ? (0, n(287095).w)(e) ? v.includes(e) ? g(l.formatMessage({
                            id: "workflow.agent.domainAllowlist.error.duplicate",
                            defaultMessage: "Domain already added"
                        })) : (b([...v, e]), c(""), g(void 0)) : g(l.formatMessage({
                            id: "workflow.agent.domainAllowlist.error.invalid",
                            defaultMessage: "Invalid domain format. Example: arxiv.org"
                        })) : g(l.formatMessage({
                            id: "workflow.agent.domainAllowlist.error.empty",
                            defaultMessage: "Please enter a domain"
                        }))
                    }, [d, v, b, l]),
                    j = (0, o.useCallback)(e => {
                        b(v.filter(t => t !== e))
                    }, [v, b]),
                    S = (0, o.useCallback)(e => {
                        "Enter" === e.key && (e.preventDefault(), k())
                    }, [k]);
                return (0, a.jsxs)(n(4458).VP, {
                    gap: 4,
                    marginInlineStart: 24,
                    children: [v.map(e => (0, a.jsxs)("div", {
                        style: eE.permissionRow,
                        children: [(0, a.jsxs)("div", {
                            style: eE.resourceInfo,
                            children: [(0, a.jsx)(eK, {
                                domain: e,
                                faviconUrl: h[e]
                            }), (0, a.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: e
                            })]
                        }), (0, a.jsx)(n(4458).fI, {
                            alignItems: "center",
                            gap: 12,
                            children: (0, a.jsx)(n(761163).Ay, {
                                spaceStore: y,
                                table: n(682956).ev,
                                type: "user_permission",
                                role: "reader",
                                availableRoleItems: n(357194).PA,
                                onChange: t => {
                                    "none" === t && j(e)
                                },
                                upgradeButtonName: "user_permission_item",
                                alignmentToOrigin: "end",
                                isNoneOverride: !0,
                                buttonStyle: eE.permissionRoleSelect
                            })
                        })]
                    }, e)), r ? null : (0, a.jsx)(n(519451).A, {
                        debugName: "DomainAllowlistInput",
                        capture: p,
                        allowCopyPaste: !1,
                        children: (0, a.jsxs)("div", {
                            className: "pseudoHover pseudoActive",
                            style: { ...x.button,
                                ...p ? eE.buttonFocused : {}
                            },
                            children: [(0, a.jsx)(n(36481).p, {
                                value: d,
                                onChange: e => {
                                    c(e.target.value), g(void 0)
                                },
                                onKeyDown: S,
                                onFocus: () => f(!0),
                                onBlur: () => f(!1),
                                format: "transparent",
                                left: (0, a.jsx)("span", {
                                    style: eE.style0,
                                    children: (0, a.jsx)(n(16275).I, {
                                        icon: n(438460).W,
                                        size: "sm",
                                        colorVariant: "secondary"
                                    })
                                }),
                                placeholder: l.formatMessage(0 === v.length ? {
                                    id: "workflow.agent.domainAllowlist.placeholder.empty",
                                    defaultMessage: "Restrict to domain, e.g. arxiv.org"
                                } : {
                                    id: "workflow.agent.domainAllowlist.placeholder.withDomains",
                                    defaultMessage: "Add to restricted domains, e.g. arxiv.org"
                                }),
                                disabled: r,
                                style: x.input
                            }), d.trim() ? (0, a.jsx)(n(4458).fI, {
                                alignItems: "center",
                                gap: 12,
                                children: (0, a.jsx)("span", {
                                    style: eE.enterHint,
                                    children: "Enter ↵"
                                })
                            }) : void 0]
                        })
                    }), u ? (0, a.jsx)("div", {
                        style: eE.error,
                        children: (0, a.jsx)(n(111010).D, {
                            children: u
                        })
                    }) : null]
                })
            }

            function eN(e) {
                var t, o;
                let {
                    environment: i,
                    workflowStore: r,
                    patch: a
                } = e, s = (null == (t = r.getDraftData()) ? void 0 : t.config_overrides) ? ? (null == (o = r.getData()) ? void 0 : o.config_overrides), l = function(e, t) {
                    let o = { ...e ? ? {}
                    };
                    for (let e of (0, n(722371).objectKeys)(t)) {
                        var i, r, a;
                        let n = t[e];
                        i = o, r = e, void 0 === (a = n) ? delete i[r] : i[r] = a
                    }
                    return o
                }(s, a), d = (0, n(722371).objectKeys)(l).length > 0 ? l : void 0;
                if ((0, n(381453).n4)(s, d)) return;
                let c = r.pointer.spaceId;
                return (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.setConfigOverrides",
                    environment: i,
                    canUndo: !0,
                    cellTarget: c ? {
                        spaceWithId: c
                    } : void 0,
                    perform: e => {
                        (0, n(421439).y4)({
                            store: r,
                            operation: n(861988).wI({
                                pointer: r.pointer,
                                configOverrides: d
                            }),
                            transaction: e
                        })
                    }
                }).serverCommitResult
            }
            let ez = ["useComputer", "yoloMode"];

            function eU(e) {
                let {
                    environment: t,
                    workflowStore: n,
                    enabled: o
                } = e;
                return eN({
                    environment: t,
                    workflowStore: n,
                    patch: o ? {
                        enableScriptAgent: !0
                    } : {
                        enableScriptAgent: !1,
                        ...Object.fromEntries(ez.map(e => [e, !1]))
                    }
                })
            }
            let eF = (0, n(109939).YK)({
                    experimentalFeaturesToggleShow: {
                        id: "workflow.agent.experimentalFeatures.toggle.show",
                        defaultMessage: "Experimental features"
                    },
                    experimentalFeaturesToggleHide: {
                        id: "workflow.agent.experimentalFeatures.toggle.hide",
                        defaultMessage: "Hide experimental features"
                    },
                    scriptAgentLabel: {
                        id: "workflow.agent.experimentalFeatures.scriptAgent",
                        defaultMessage: "Agent 2.0"
                    },
                    scriptAgentToggleAria: {
                        id: "workflow.agent.experimentalFeatures.scriptAgent.toggleAria",
                        defaultMessage: "Toggle Agent 2.0"
                    },
                    scriptAgentAdvancedLabel: {
                        id: "workflow.agent.experimentalFeatures.scriptAgentAdvanced",
                        defaultMessage: "Agent 2.0 (advanced)"
                    },
                    scriptAgentAdvancedToggleAria: {
                        id: "workflow.agent.experimentalFeatures.scriptAgentAdvanced.toggleAria",
                        defaultMessage: "Toggle Agent 2.0 advanced"
                    },
                    scriptAgentSearchConnectorsLabel: {
                        id: "workflow.agent.experimentalFeatures.scriptAgentSearchConnectors",
                        defaultMessage: "Agent 2.0 (search connectors)"
                    },
                    scriptAgentSearchConnectorsToggleAria: {
                        id: "workflow.agent.experimentalFeatures.scriptAgentSearchConnectors.toggleAria",
                        defaultMessage: "Toggle Agent 2.0 (search connectors)"
                    },
                    scriptAgentGoogleDriveLabel: {
                        id: "workflow.agent.experimentalFeatures.scriptAgentGoogleDrive",
                        defaultMessage: "Agent 2.0 (Google Drive)"
                    },
                    scriptAgentGoogleDriveToggleAria: {
                        id: "workflow.agent.experimentalFeatures.scriptAgentGoogleDrive.toggleAria",
                        defaultMessage: "Toggle Agent 2.0 (Google Drive)"
                    }
                }),
                eO = [{
                    id: "script_agent",
                    label: eF.scriptAgentLabel,
                    ariaLabel: eF.scriptAgentToggleAria,
                    icon: n(107492).c,
                    configOverrideKey: "enableScriptAgent",
                    setOverride: eU
                }, {
                    id: "script_agent_advanced",
                    label: eF.scriptAgentAdvancedLabel,
                    ariaLabel: eF.scriptAgentAdvancedToggleAria,
                    icon: n(107492).c,
                    configOverrideKey: "enableScriptAgentAdvanced",
                    setOverride: function(e) {
                        let {
                            environment: t,
                            workflowStore: n,
                            enabled: o
                        } = e;
                        return eN({
                            environment: t,
                            workflowStore: n,
                            patch: {
                                enableScriptAgentAdvanced: o
                            }
                        })
                    }
                }, {
                    id: "script_agent_search_connectors",
                    label: eF.scriptAgentSearchConnectorsLabel,
                    ariaLabel: eF.scriptAgentSearchConnectorsToggleAria,
                    icon: n(107492).c,
                    configOverrideKey: "enableScriptAgentSearchConnectorsInCustomAgent",
                    setOverride: function(e) {
                        let {
                            environment: t,
                            workflowStore: n,
                            enabled: o
                        } = e;
                        return eN({
                            environment: t,
                            workflowStore: n,
                            patch: {
                                enableScriptAgentSearchConnectorsInCustomAgent: o
                            }
                        })
                    }
                }, {
                    id: "script_agent_google_drive",
                    label: eF.scriptAgentGoogleDriveLabel,
                    ariaLabel: eF.scriptAgentGoogleDriveToggleAria,
                    icon: n(107492).c,
                    configOverrideKey: "enableScriptAgentGoogleDriveInCustomAgent",
                    setOverride: function(e) {
                        let {
                            environment: t,
                            workflowStore: n,
                            enabled: o
                        } = e;
                        return eN({
                            environment: t,
                            workflowStore: n,
                            patch: {
                                enableScriptAgentGoogleDriveInCustomAgent: o
                            }
                        })
                    }
                }];

            function eq() {
                if ("u" < typeof window) return !1;
                let e = Reflect.get(window, "Meticulous");
                if (null == e) return !1;
                if ("object" == typeof e) {
                    let t = Reflect.get(e, "isRunningAsTest");
                    if ("boolean" == typeof t) return t;
                    if ("function" == typeof t) try {
                        let n = t.call(e);
                        if ("boolean" == typeof n) return n
                    } catch {}
                    return !0
                }
                return "function" == typeof e
            }
            let eH = {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: 32,
                paddingInline: 10
            };

            function eG(e) {
                let {
                    workflowStore: t,
                    experimentalContext: i
                } = e, r = (0, n(109939).tz)(), s = (0, n(682985).K8)(() => t.canEdit(), [t]), l = (0, n(960253).e)(), d = (0, n(960253).I)(() => ({
                    panel: {
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: n(632079).Tj.border.secondary,
                        borderRadius: 14,
                        padding: 16,
                        backgroundColor: "dark" === l ? n(632079).Tj.background.secondary : n(632079).Tj.background.primary,
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.02)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        opacity: s ? 1 : .4
                    }
                }), [s, l]), {
                    showExperimentalFeatures: c,
                    experimentalSectionDisabled: u,
                    hasExperimentalChanges: g,
                    visibleOptions: p
                } = i, [f, m] = (0, o.useState)(!1), h = (0, o.useCallback)(() => m(e => !e), []);
                if (!c) return null;
                let w = f || g ? "blue" : "gray";
                return (0, a.jsxs)(n(4458).VP, {
                    gap: 4,
                    marginTop: 8,
                    "data-section": "experimental-features",
                    children: [(0, a.jsx)(n(988022).p, {
                        onClick: h,
                        iconLeading: {
                            icon: f ? n(346349).sparklesFillSmallIcon : n(53634).sparklesSmallIcon,
                            size: "sm"
                        },
                        colorPalette: w,
                        "aria-expanded": f,
                        children: f ? (0, a.jsx)(n(109939).sA, { ...eF.experimentalFeaturesToggleHide
                        }) : (0, a.jsx)(n(109939).sA, { ...eF.experimentalFeaturesToggleShow
                        })
                    }), f ? (0, a.jsx)("div", {
                        style: d.panel,
                        children: p.map(e => (0, a.jsxs)("div", {
                            style: eH,
                            children: [(0, a.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                children: [(0, a.jsx)(n(16275).I, {
                                    icon: e.icon,
                                    size: "sm"
                                }), (0, a.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    children: (0, a.jsx)(n(109939).sA, { ...e.label
                                    })
                                })]
                            }), (0, a.jsx)(n(354491).d, {
                                on: e.enabled,
                                onClick: e.onToggle,
                                disabled: u || !s,
                                "aria-label": r.formatMessage(e.ariaLabel)
                            })]
                        }, e.id))
                    }) : void 0]
                })
            }
            let e$ = (0, n(109939).YK)({
                    instructionsAreLong: {
                        id: "workflow.agent.instructions.instructionsAreLong",
                        defaultMessage: "Instructions are long"
                    },
                    tooltipWarning: {
                        id: "workflow.agent.instructions.tokenCountTooltip.warning",
                        defaultMessage: "This agent’s instructions are large ({count}k tokens{mentionsSuffix}).\nAgents tend to perform worse when the instructions are > 60k tokens."
                    },
                    mentionsSuffix: {
                        id: "workflow.agent.instructions.tokenCountTooltip.mentionsSuffix",
                        defaultMessage: ", including {count, plural, one {# mentioned or linked resource} other {# mentioned or linked resources}}"
                    }
                }),
                eY = {
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    cursor: "default"
                },
                eQ = {
                    minWidth: 300,
                    whiteSpace: "pre-line"
                };

            function eX(e) {
                let {
                    workflowStore: t
                } = e, i = (0, n(109939).tz)(), {
                    tokenCount: r,
                    mentionedPageCount: s
                } = function(e) {
                    let t = (0, n(533992).v3)(),
                        {
                            workflowValue: i
                        } = (0, n(867587).N)(e, !0),
                        [r, a] = (0, o.useState)({
                            tokenCount: 0,
                            mentionedPageCount: 0,
                            hasContent: !1,
                            isLoading: !0
                        }),
                        s = (0, o.useRef)(void 0),
                        l = (0, n(682985).K8)(() => {
                            if ((0, n(886883).ap)(i.instructions)) return n(970831).B.createChildStore(e, i.instructions)
                        }, [i.instructions, e]),
                        d = (0, n(682985).K8)(() => l ? l.getLastEditedTime() : (0, n(886883).Zv)(i.instructions) ? (0, n(247438).q4_)((0, n(886883).rr)(i.instructions)).length : 0, [l, i.instructions]),
                        c = JSON.stringify(i.modules || []),
                        u = (0, o.useCallback)(async () => {
                            var o, i;
                            if (e.table === n(581654).U6) return void a({
                                tokenCount: 0,
                                mentionedPageCount: 0,
                                hasContent: !1,
                                isLoading: !1
                            });
                            let r = e.getSpaceId();
                            if (!r) return void a({
                                tokenCount: 0,
                                mentionedPageCount: 0,
                                hasContent: !1,
                                isLoading: !1
                            });
                            s.current && s.current.abort(), s.current = new AbortController;
                            try {
                                let n = await t.api.callApi({
                                    environment: t,
                                    eventName: "estimateInstructionsTokens",
                                    data: {
                                        workflowId: e.id,
                                        spaceId: r
                                    }
                                });
                                null != (o = s.current) && o.signal.aborted || ("success" === n.type ? a({
                                    tokenCount: n.data.tokenCount,
                                    mentionedPageCount: n.data.mentionedPageCount,
                                    hasContent: n.data.characterCount > 0,
                                    isLoading: !1
                                }) : a(e => ({ ...e,
                                    isLoading: !1
                                })))
                            } catch {
                                null != (i = s.current) && i.signal.aborted || a(e => ({ ...e,
                                    isLoading: !1
                                }))
                            }
                        }, [t, e]),
                        g = (0, n(84235).Y)(() => {
                            u()
                        }, 500);
                    return (0, o.useEffect)(() => {
                        a(e => ({ ...e,
                            isLoading: !0
                        })), g()
                    }, [d, c, g]), (0, o.useEffect)(() => () => {
                        s.current && s.current.abort(), g.cancel()
                    }, [g]), r
                }(t);
                if (r < 4e4) return null;
                let l = Math.round(r / 1e3),
                    d = s > 0 ? i.formatMessage(e$.mentionsSuffix, {
                        count: s
                    }) : "",
                    c = i.formatMessage(e$.tooltipWarning, {
                        count: l,
                        mentionsSuffix: d
                    });
                return (0, a.jsx)(n(51831).m, {
                    placement: "top",
                    alignment: "center",
                    style: eQ,
                    content: () => c,
                    children: e => (0, a.jsxs)("div", {
                        style: eY,
                        ...e,
                        children: [(0, a.jsx)(n(16275).I, {
                            icon: n(143896).exclamationMarkTriangleFillSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        }), (0, a.jsx)(n(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "tertiary",
                            children: i.formatMessage(e$.instructionsAreLong)
                        })]
                    })
                })
            }
            let eZ = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.92 3.37 14.15 9.45",
                    svg: (0, a.jsx)("path", {
                        d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v6.175H1a.075.075 0 0 0-.075.075v.25c0 .594.481 1.075 1.075 1.075h12c.594 0 1.075-.481 1.075-1.075v-.25a.075.075 0 0 0-.075-.075h-1.125V5.25c0-1.036-.84-1.875-1.875-1.875zM3.375 5.25c0-.345.28-.625.625-.625h8c.345 0 .625.28.625.625v6.125h-9.25z"
                    })
                },
                eJ = (0, n(104509).wt)("laptopComputerSmall", eZ, "small"),
                e0 = (0, n(109939).YK)({
                    knownSafeUrlsLabel: {
                        id: "workflow.agent.knownSafeUrls.label",
                        defaultMessage: "Allowlist URLs"
                    },
                    knownSafeUrlsTooltipLine1: {
                        id: "workflow.agent.knownSafeUrls.tooltip.line1",
                        defaultMessage: "Agents may ask for confirmation before opening external URLs. Add URL patterns here to automatically allow matching URLs."
                    },
                    knownSafeUrlsTooltipLine2: {
                        id: "workflow.agent.knownSafeUrls.tooltip.line2",
                        defaultMessage: "Use * to match any characters except /."
                    },
                    knownSafeUrlsTooltipLine3: {
                        id: "workflow.agent.knownSafeUrls.tooltip.line3",
                        defaultMessage: "Use ** to match any characters, including /."
                    },
                    knownSafeUrlsTooltipLine4: {
                        id: "workflow.agent.knownSafeUrls.tooltip.line4",
                        defaultMessage: "Use ** by itself to allow everything."
                    },
                    knownSafeUrlsTooltipExamplesLabel: {
                        id: "workflow.agent.knownSafeUrls.tooltip.examplesLabel",
                        defaultMessage: "Examples:"
                    },
                    knownSafeUrlsTooltipExample1: {
                        id: "workflow.agent.knownSafeUrls.tooltip.example1",
                        defaultMessage: "https://notion.so/*"
                    },
                    knownSafeUrlsTooltipExample2: {
                        id: "workflow.agent.knownSafeUrls.tooltip.example2",
                        defaultMessage: "https://github.com/myorg/**"
                    },
                    knownSafeUrlsTooltipAria: {
                        id: "workflow.agent.knownSafeUrls.tooltip.aria",
                        defaultMessage: "Info about allowlist URLs"
                    },
                    placeholder: {
                        id: "workflow.agent.trustedUrlGlobs.placeholder",
                        defaultMessage: "Add glob, e.g. https://github.com/myorg/**"
                    },
                    errorEmpty: {
                        id: "workflow.agent.trustedUrlGlobs.error.empty",
                        defaultMessage: "Please enter a URL glob"
                    },
                    errorDuplicate: {
                        id: "workflow.agent.trustedUrlGlobs.error.duplicate",
                        defaultMessage: "Glob already added"
                    },
                    errorMaxReached: {
                        id: "workflow.agent.trustedUrlGlobs.error.maxReached",
                        defaultMessage: "Maximum of {max} globs allowed"
                    },
                    workspaceConfirmationEnabledNotice: {
                        id: "workflow.agent.trustedUrlGlobs.workspaceConfirmationEnabledNotice",
                        defaultMessage: "Your workspace has enabled the “Require confirmation for web requests” setting. Allowlist URLs will not skip approvals."
                    }
                }),
                e1 = {
                    width: 16,
                    height: 16,
                    display: "grid",
                    placeItems: "center"
                };

            function e9(e) {
                let {
                    glob: t
                } = e, i = function(e) {
                    if (!e.startsWith("https://")) return;
                    let t = e.slice(8),
                        n = t.indexOf("/"),
                        o = -1 === n ? t : t.slice(0, n);
                    if (!o.includes("*")) return o
                }(t), [r, s] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    s(!1)
                }, [i]);
                let l = {
                    width: 16,
                    height: 16,
                    display: "block"
                };
                return !i || r ? (0, a.jsx)("span", {
                    style: e1,
                    children: (0, a.jsx)(n(16275).I, {
                        icon: n(451034).globeSmallIcon,
                        size: "sm",
                        style: l
                    })
                }) : (0, a.jsx)("span", {
                    style: e1,
                    children: (0, a.jsx)("img", {
                        src: `https://${i}/favicon.ico`,
                        width: 16,
                        height: 16,
                        onError: () => s(!0),
                        alt: "",
                        style: l
                    })
                })
            }
            let e2 = {
                    itemWrapper: {
                        paddingInline: 10,
                        marginTop: 4,
                        marginBottom: 4
                    },
                    permissionRow: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        minHeight: 32,
                        paddingBlock: 8,
                        paddingInline: 10
                    },
                    tooltip: {
                        minWidth: 320
                    },
                    tooltipIcon: {
                        marginInlineStart: 2
                    },
                    buttonFocused: {
                        background: n(632079).Tj.background.secondaryTranslucent
                    },
                    error: {
                        fontSize: 12,
                        paddingInlineStart: 10,
                        color: n(632079).Tj.red.text.primary
                    },
                    warning: {
                        fontSize: 12,
                        paddingInlineStart: 10
                    },
                    workspaceNotice: {
                        display: "flex",
                        alignItems: "start",
                        gap: 8,
                        fontSize: 12,
                        paddingInlineStart: 10,
                        paddingBlockEnd: 6
                    },
                    globRow: {
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 6,
                        justifyContent: "space-between",
                        height: 28,
                        paddingInlineStart: 10
                    },
                    resourceInfo: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        flex: 1,
                        fontWeight: n(699422).Wy.regular
                    },
                    permissionRoleSelect: {
                        fontSize: 12,
                        color: n(632079).Tj.text.secondary,
                        fontWeight: n(699422).Wy.medium
                    },
                    enterHint: {
                        fontSize: 12,
                        color: n(632079).Tj.text.tertiary,
                        fontWeight: n(699422).Wy.medium,
                        paddingInline: 8,
                        marginInlineEnd: -4
                    },
                    style0: {
                        width: 16,
                        height: 16,
                        display: "grid",
                        placeItems: "center"
                    }
                },
                e5 = (0, n(64960)._S)({
                    color: n(632079).Tj.background.secondaryTranslucent
                });

            function e8(e) {
                let {
                    workflowStore: t,
                    workflowData: i,
                    disabled: r = !1
                } = e, s = (0, n(533992).v3)(), l = (0, n(109939).tz)(), d = (0, o.useMemo)(() => [l.formatMessage(e0.knownSafeUrlsTooltipLine1), l.formatMessage(e0.knownSafeUrlsTooltipLine2), l.formatMessage(e0.knownSafeUrlsTooltipLine3), l.formatMessage(e0.knownSafeUrlsTooltipLine4), l.formatMessage(e0.knownSafeUrlsTooltipExamplesLabel), l.formatMessage(e0.knownSafeUrlsTooltipExample1), l.formatMessage(e0.knownSafeUrlsTooltipExample2)], [l]), [c, u] = (0, o.useState)(""), [g, p] = (0, o.useState)(), [f, m] = (0, o.useState)(), [h, w] = (0, o.useState)(!1), y = (0, n(682985).K8)(() => (0, n(974410).f)(t), [t]), x = (0, n(682985).K8)(() => !!(null == y ? void 0 : y.getSetting("force_ask_for_confirmation_on_web_open_requests")), [y]), v = (0, n(960253).I)(() => ({
                    button: {
                        width: "100%",
                        paddingInlineStart: 10,
                        gap: 8,
                        display: "flex",
                        alignItems: "center",
                        height: 28,
                        borderRadius: 6,
                        "--pseudoHover--background": n(632079).Tj.background.secondaryTranslucent,
                        "--pseudoActive--background": e5.pressed
                    },
                    input: {
                        flex: 1,
                        fontSize: 14,
                        "--c-inpBluFocRin": "none"
                    }
                }), []), b = (0, o.useMemo)(() => i.trustedUrlGlobs ? ? [], [i.trustedUrlGlobs]), k = (0, o.useCallback)(e => {
                    t.table === n(43296).C && function(e) {
                        let {
                            workflowStore: t,
                            trustedUrlGlobs: o,
                            environment: i
                        } = e;
                        t.table === n(43296).C && (0, n(377796).createAndCommit)({
                            userAction: "WorkflowActions.saveTrustedUrlGlobs",
                            environment: i,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: t.pointer.spaceId
                            },
                            perform: e => {
                                (0, n(421439).y4)({
                                    store: t,
                                    operation: n(861988)._z({
                                        pointer: t.pointer,
                                        trustedUrlGlobs: o
                                    }),
                                    transaction: e
                                })
                            }
                        })
                    }({
                        environment: s,
                        workflowStore: t,
                        trustedUrlGlobs: e.length > 0 ? e : void 0
                    })
                }, [s, t]), j = !r || b.length > 0, S = (0, o.useCallback)(() => {
                    let e = c.trim();
                    if (!e) return void p(l.formatMessage(e0.errorEmpty));
                    let t = (0, n(302942).V)(e);
                    if (t && f !== t) {
                        m(t), p(void 0);
                        return
                    }
                    if (b.includes(e)) {
                        p(l.formatMessage(e0.errorDuplicate)), m(void 0);
                        return
                    }
                    if (b.length >= 20) {
                        p(l.formatMessage(e0.errorMaxReached, {
                            max: 20
                        })), m(void 0);
                        return
                    }
                    k([...b, e]), u(""), p(void 0), m(void 0)
                }, [c, b, k, l, f]), M = (0, o.useCallback)(e => {
                    k(b.filter(t => t !== e))
                }, [b, k]), C = (0, o.useCallback)(e => {
                    "Enter" === e.key && (e.preventDefault(), S())
                }, [S]);
                return (0, a.jsxs)("div", {
                    style: e2.itemWrapper,
                    children: [(0, a.jsx)("div", {
                        style: e2.permissionRow,
                        children: (0, a.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            children: [(0, a.jsx)(n(16275).I, {
                                icon: n(451034).globeSmallIcon,
                                size: "sm"
                            }), (0, a.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                children: [(0, a.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    children: l.formatMessage(e0.knownSafeUrlsLabel)
                                }), (0, a.jsx)(n(51831).m, {
                                    style: e2.tooltip,
                                    content: () => (0, a.jsx)(n(4458).VP, {
                                        gap: 2,
                                        children: d.map((e, t) => (0, a.jsx)(n(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "inverseSecondary",
                                            children: e
                                        }, `${t}-${e}`))
                                    }),
                                    textWrap: !0,
                                    children: e => (0, a.jsx)(n(374533).A, {
                                        size: "xs",
                                        icon: n(372181).infoCircleSmallIcon,
                                        ariaLabel: l.formatMessage(e0.knownSafeUrlsTooltipAria),
                                        style: e2.tooltipIcon,
                                        ...e
                                    })
                                })]
                            })]
                        })
                    }), x ? (0, a.jsxs)("div", {
                        style: e2.workspaceNotice,
                        children: [(0, a.jsx)(n(16275).I, {
                            icon: n(372181).infoCircleSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        }), (0, a.jsx)(n(111010).D, {
                            colorVariant: "secondary",
                            children: l.formatMessage(e0.workspaceConfirmationEnabledNotice)
                        })]
                    }) : null, j ? (0, a.jsxs)(n(4458).VP, {
                        gap: 4,
                        marginInlineStart: 24,
                        children: [b.map(e => (0, a.jsxs)("div", {
                            style: e2.globRow,
                            children: [(0, a.jsxs)("div", {
                                style: e2.resourceInfo,
                                children: [(0, a.jsx)(e9, {
                                    glob: e
                                }), (0, a.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    children: e
                                })]
                            }), (0, a.jsx)(n(4458).fI, {
                                alignItems: "center",
                                gap: 12,
                                children: (0, a.jsx)(n(761163).Ay, {
                                    spaceStore: y,
                                    table: n(682956).ev,
                                    type: "user_permission",
                                    role: "reader",
                                    availableRoleItems: n(357194).PA,
                                    onChange: t => {
                                        "none" === t && M(e)
                                    },
                                    upgradeButtonName: "user_permission_item",
                                    alignmentToOrigin: "end",
                                    isNoneOverride: !0,
                                    buttonStyle: e2.permissionRoleSelect
                                })
                            })]
                        }, e)), r ? null : (0, a.jsx)(n(519451).A, {
                            debugName: "TrustedUrlGlobsInput",
                            capture: h,
                            allowCopyPaste: !1,
                            children: (0, a.jsxs)("div", {
                                className: "pseudoHover pseudoActive",
                                style: { ...v.button,
                                    ...h ? e2.buttonFocused : {}
                                },
                                children: [(0, a.jsx)(n(36481).p, {
                                    value: c,
                                    onChange: e => {
                                        u(e.target.value), p(void 0), m(void 0)
                                    },
                                    onKeyDown: C,
                                    onFocus: () => w(!0),
                                    onBlur: () => w(!1),
                                    format: "transparent",
                                    left: (0, a.jsx)("span", {
                                        style: e2.style0,
                                        children: (0, a.jsx)(n(16275).I, {
                                            icon: n(438460).W,
                                            size: "sm",
                                            colorVariant: "secondary"
                                        })
                                    }),
                                    placeholder: l.formatMessage(e0.placeholder),
                                    disabled: r,
                                    style: v.input
                                }), c.trim() ? (0, a.jsx)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 12,
                                    children: (0, a.jsx)("span", {
                                        style: e2.enterHint,
                                        children: "Enter ↵"
                                    })
                                }) : void 0]
                            })
                        }), f ? (0, a.jsx)("div", {
                            style: e2.warning,
                            children: (0, a.jsx)(n(111010).D, {
                                colorVariant: "secondary",
                                children: f
                            })
                        }) : g ? (0, a.jsx)("div", {
                            style: e2.error,
                            children: (0, a.jsx)(n(111010).D, {
                                colorPalette: "red",
                                colorVariant: "primary",
                                children: g
                            })
                        }) : null]
                    }) : null]
                })
            }
            let e3 = (0, n(109939).YK)({
                    advancedTitle: {
                        id: "workflow.agent.advanced.title",
                        defaultMessage: "Advanced"
                    },
                    advancedTooltip: {
                        id: "workflow.agent.advanced.tooltip",
                        defaultMessage: "Configure advanced settings for this agent"
                    },
                    agentComputerLabel: {
                        id: "workflow.agent.toolsAndAccess.agentComputer",
                        defaultMessage: "Agent computer"
                    },
                    agentComputerToggleAria: {
                        id: "workflow.agent.toolsAndAccess.agentComputer.toggleAria",
                        defaultMessage: "Toggle agent computer"
                    },
                    yoloModeLabel: {
                        id: "workflow.agent.toolsAndAccess.yoloMode",
                        defaultMessage: "Yolo mode"
                    },
                    yoloModeToggleAria: {
                        id: "workflow.agent.toolsAndAccess.yoloMode.toggleAria",
                        defaultMessage: "Toggle yolo mode"
                    },
                    yoloModeTooltip: {
                        id: "workflow.agent.toolsAndAccess.yoloMode.tooltip",
                        defaultMessage: "Computer will have unrestricted network access."
                    },
                    yoloModeTooltipAria: {
                        id: "workflow.agent.toolsAndAccess.yoloMode.tooltip.aria",
                        defaultMessage: "Info about yolo mode"
                    }
                }),
                e6 = {
                    paddingInline: 0,
                    paddingBlock: 10
                },
                e4 = {
                    position: "relative"
                },
                e7 = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minHeight: 32,
                    paddingBlock: 8,
                    paddingInline: 10
                },
                te = {
                    paddingInline: 10
                },
                tt = {
                    paddingInlineStart: 36
                },
                tn = {
                    minWidth: 140
                },
                to = {
                    marginInlineStart: 2
                };

            function ti(e) {
                let {
                    workflowStore: t,
                    workflowData: i,
                    disabled: r = !1
                } = e, s = (0, n(533992).v3)(), l = (0, n(109939).tz)(), d = (0, n(214328).n)(t, "safety"), c = (0, n(83208).X)("filesystem_sandbox"), u = (0, o.useMemo)(() => (0, n(16712).Z0)({
                    workflowData: i
                }), [i]), g = (null == u ? void 0 : u.useComputer) ? ? !0, p = (null == u ? void 0 : u.enableScriptAgent) ? ? !1, m = g && ((null == u ? void 0 : u.yoloMode) ? ? !0), h = (0, o.useCallback)(() => {
                    !r && t.table === n(832375).C0E && c && g && !p && eU({
                        environment: s,
                        workflowStore: t,
                        enabled: !0
                    })
                }, [c, g, p, r, s, t]);
                (0, o.useEffect)(() => {
                    h()
                }, [h]);
                let w = (0, o.useCallback)(() => {
                        t.table === n(832375).C0E && function(e) {
                            let {
                                environment: t,
                                workflowStore: n,
                                enabled: o
                            } = e;
                            eN({
                                environment: t,
                                workflowStore: n,
                                patch: o ? {
                                    useComputer: !0,
                                    enableScriptAgent: !0
                                } : {
                                    useComputer: !1
                                }
                            })
                        }({
                            environment: s,
                            workflowStore: t,
                            enabled: !g
                        })
                    }, [g, s, t]),
                    y = (0, o.useCallback)(() => {
                        t.table === n(832375).C0E && function(e) {
                            let {
                                environment: t,
                                workflowStore: n,
                                enabled: o
                            } = e;
                            eN({
                                environment: t,
                                workflowStore: n,
                                patch: {
                                    yoloMode: o
                                }
                            })
                        }({
                            environment: s,
                            workflowStore: t,
                            enabled: !m
                        })
                    }, [s, t, m]);
                return (0, a.jsx)(f, {
                    title: (0, a.jsx)(n(109939).sA, { ...e3.advancedTitle
                    }),
                    infoTooltipMessage: e3.advancedTooltip,
                    hasUnpublishedChanges: d,
                    style: e6,
                    isDimmed: r,
                    children: (0, a.jsxs)(n(4458).VP, {
                        gap: 0,
                        className: "autolayout-fill-width",
                        style: e4,
                        children: [c ? (0, a.jsxs)("div", {
                            style: te,
                            children: [(0, a.jsxs)("div", {
                                style: e7,
                                children: [(0, a.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    children: [(0, a.jsx)(n(16275).I, {
                                        icon: eJ,
                                        size: "sm"
                                    }), (0, a.jsx)(n(111010).D, {
                                        styleKey: "bodyMedium",
                                        children: (0, a.jsx)(n(109939).sA, { ...e3.agentComputerLabel
                                        })
                                    })]
                                }), (0, a.jsx)(n(354491).d, {
                                    disabled: r,
                                    on: g,
                                    onClick: w,
                                    "aria-label": l.formatMessage(e3.agentComputerToggleAria)
                                })]
                            }), g ? (0, a.jsxs)("div", {
                                style: { ...e7,
                                    ...tt
                                },
                                children: [(0, a.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    children: [(0, a.jsx)(n(16275).I, {
                                        icon: n(879051).shieldLockSmallIcon,
                                        size: "sm"
                                    }), (0, a.jsxs)(n(4458).fI, {
                                        alignItems: "center",
                                        children: [(0, a.jsx)(n(111010).D, {
                                            styleKey: "bodyMedium",
                                            children: (0, a.jsx)(n(109939).sA, { ...e3.yoloModeLabel
                                            })
                                        }), (0, a.jsx)(n(51831).m, {
                                            style: tn,
                                            content: () => (0, a.jsx)(n(109939).sA, { ...e3.yoloModeTooltip
                                            }),
                                            textWrap: !0,
                                            children: e => (0, a.jsx)(n(374533).A, {
                                                size: "xs",
                                                icon: n(372181).infoCircleSmallIcon,
                                                ariaLabel: l.formatMessage(e3.yoloModeTooltipAria),
                                                style: to,
                                                ...e
                                            })
                                        })]
                                    })]
                                }), (0, a.jsx)(n(354491).d, {
                                    disabled: r,
                                    on: m,
                                    onClick: y,
                                    "aria-label": l.formatMessage(e3.yoloModeToggleAria)
                                })]
                            }) : null]
                        }) : null, (0, a.jsx)(e8, {
                            workflowStore: t,
                            workflowData: i,
                            disabled: r
                        })]
                    })
                })
            }

            function tr(e) {
                let {
                    workflowStore: t,
                    script: o,
                    environment: i
                } = e;
                (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.saveScript",
                    environment: i,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: t.pointer.spaceId
                    },
                    perform: e => {
                        (0, n(421439).y4)({
                            store: t,
                            operation: n(861988)._C({
                                pointer: t.pointer,
                                script: o
                            }),
                            transaction: e
                        })
                    }
                })
            }
            let ta = {
                position: "relative"
            };

            function ts(e) {
                let {
                    isOpen: t,
                    onClose: i,
                    onDelete: r,
                    script: s,
                    workflowStore: l,
                    disabled: d = !1,
                    appearance: c
                } = e, u = (0, n(109939).tz)(), g = (0, n(533992).v3)(), p = l.table === n(43296).C && !d;
                (0, o.useEffect)(() => {
                    t && !s && i()
                }, [t, i, s]);
                let f = (0, o.useCallback)(e => {
                        if (!s || !(l instanceof n(360851).N)) return;
                        let t = e.target.value;
                        t !== s.name && tr({
                            workflowStore: l,
                            script: { ...s,
                                name: t
                            },
                            environment: g
                        })
                    }, [g, s, l]),
                    m = (0, o.useCallback)(e => {
                        if (!s || !(l instanceof n(360851).N)) return;
                        let t = e.target.value;
                        t !== s.key && tr({
                            workflowStore: l,
                            script: { ...s,
                                key: t
                            },
                            environment: g
                        })
                    }, [g, s, l]),
                    h = (0, o.useCallback)(e => {
                        s && e !== s.value && l instanceof n(360851).N && tr({
                            workflowStore: l,
                            script: { ...s,
                                value: e
                            },
                            environment: g
                        })
                    }, [g, s, l]),
                    w = (0, o.useCallback)(() => {
                        p && s && r(s)
                    }, [p, r, s]),
                    y = (0, o.useCallback)(() => {
                        i()
                    }, [i]),
                    x = (0, o.useMemo)(() => s ? (0, a.jsxs)(n(4458).VP, {
                        gap: 16,
                        children: [(0, a.jsxs)(n(4458).VP, {
                            gap: 8,
                            children: [(0, a.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "workflow.agent.scripts.modal.nameLabel",
                                    defaultMessage: "Name"
                                })
                            }), (0, a.jsx)(n(36481).p, {
                                value: s.name,
                                onChange: f,
                                disabled: !p,
                                format: "default",
                                spellCheck: !1,
                                placeholder: u.formatMessage({
                                    id: "workflow.agent.scripts.modal.namePlaceholder",
                                    defaultMessage: "Script name"
                                })
                            })]
                        }), (0, a.jsxs)(n(4458).VP, {
                            gap: 8,
                            children: [(0, a.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "workflow.agent.scripts.modal.keyLabel",
                                    defaultMessage: "Key"
                                })
                            }), (0, a.jsx)(n(36481).p, {
                                value: s.key,
                                onChange: m,
                                disabled: !p,
                                format: "default",
                                spellCheck: !1,
                                placeholder: u.formatMessage({
                                    id: "workflow.agent.scripts.modal.keyPlaceholder",
                                    defaultMessage: "Script key"
                                })
                            })]
                        }), (0, a.jsxs)(n(4458).VP, {
                            gap: 8,
                            children: [(0, a.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "workflow.agent.scripts.modal.codeLabel",
                                    defaultMessage: "Code"
                                })
                            }), (0, a.jsx)(n(6591).E, {
                                value: s.value,
                                onChange: h,
                                disabled: !p,
                                language: "typescript",
                                fillHeight: !1
                            })]
                        })]
                    }) : null, [h, m, f, u, p, s]);
                return s ? (0, a.jsx)(n(833503).s, {
                    isOpen: t,
                    onDismiss: i,
                    onClosed: i,
                    ariaLabel: u.formatMessage({
                        id: "workflow.agent.scripts.modal.ariaLabel",
                        defaultMessage: "Script settings"
                    }),
                    areaConstraint: {
                        width: {
                            type: "fixed",
                            length: 800
                        },
                        height: {
                            type: "min",
                            length: 480
                        }
                    },
                    children: ({
                        sizeRange: e
                    }) => (0, a.jsxs)(n(4458).VP, {
                        className: "autolayout-fill-width autolayout-fill-height",
                        padding: 20,
                        gap: 24,
                        style: { ...ta,
                            ...e
                        },
                        children: [(0, a.jsx)(n(111010).D, {
                            styleKey: "titleSemibold",
                            children: "new" === c ? (0, a.jsx)(n(109939).sA, {
                                id: "workflow.agent.scripts.modal.newTitle",
                                defaultMessage: "New script"
                            }) : (0, a.jsx)(n(109939).sA, {
                                id: "workflow.agent.scripts.modal.editTitle",
                                defaultMessage: "Edit script"
                            })
                        }), x, (0, a.jsxs)(n(4458).fI, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [p ? (0, a.jsx)(n(988022).p, {
                                colorPalette: "red",
                                onClick: w,
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "workflow.agent.scripts.modal.delete",
                                    defaultMessage: "Delete script"
                                })
                            }) : (0, a.jsx)("div", {}), (0, a.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                onClick: y,
                                disabled: !s,
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "workflow.agent.scripts.modal.done",
                                    defaultMessage: "Done"
                                })
                            })]
                        }), (0, a.jsx)(n(226512).R, {})]
                    })
                }) : null
            }
            let tl = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    paddingInline: 10
                },
                td = {
                    padding: "8px 12px",
                    borderRadius: 10,
                    gap: 8,
                    justifyContent: "flex-start",
                    width: "100%",
                    display: "flex",
                    alignItems: "center"
                },
                tc = {
                    marginTop: 10,
                    alignSelf: "flex-start",
                    marginInlineStart: 10,
                    paddingInline: 8
                },
                tu = {
                    paddingInline: 0,
                    paddingBlock: 10
                },
                tg = {
                    paddingInline: 10
                },
                tp = {
                    position: "relative"
                };

            function tf(e) {
                let {
                    workflowStore: t,
                    disabled: i = !1,
                    scriptsEnabled: r
                } = e, s = (0, n(533992).v3)(), l = (0, n(109939).tz)(), d = (0, n(682985).K8)(() => t instanceof n(360851).N && t.table === n(43296).C && t.canEdit(), [t]), c = (0, n(682985).K8)(() => {
                    let e = t.table === n(43296).C ? t.getDraftData() : t.getData(),
                        o = null == e ? void 0 : e.scripts;
                    if (!Array.isArray(o)) return [];
                    let i = [];
                    for (let e of o) e && e.id && "string" == typeof e.name && "string" == typeof e.key && "string" == typeof e.value && i.push(e);
                    return i
                }, [t]), [u, g] = (0, o.useState)(void 0), [p, m] = (0, o.useState)("edit"), h = (0, n(214328).n)(t, "scripts"), w = (0, o.useCallback)(() => {
                    if (!(t instanceof n(360851).N) || !d || !r) return;
                    let e = {
                        id: (0, n(4962).Ay)(),
                        name: "",
                        key: "",
                        value: ""
                    };
                    tr({
                        workflowStore: t,
                        script: e,
                        environment: s
                    }), g(e.id), m("new")
                }, [s, d, r, t]), y = (0, o.useCallback)(e => {
                    g(e), m("edit")
                }, []), x = (0, o.useCallback)(() => {
                    g(void 0), m("edit")
                }, []), v = (0, o.useCallback)(async e => {
                    t instanceof n(360851).N && (await n(647095).Gh({
                        message: l.formatMessage({
                            id: "workflow.agent.scripts.deleteConfirm.title",
                            defaultMessage: "Delete script?"
                        }),
                        description: l.formatMessage({
                            id: "workflow.agent.scripts.deleteConfirm.message",
                            defaultMessage: "Deleting this script will remove it from this agent. Any triggers set to run this script will instead run the agent."
                        }),
                        acceptLabel: l.formatMessage({
                            id: "workflow.agent.scripts.deleteConfirm.confirm",
                            defaultMessage: "Delete"
                        }),
                        acceptColor: "red"
                    })).accept && (! function(e) {
                        var t;
                        let {
                            workflowStore: o,
                            script: i,
                            environment: r
                        } = e, a = (null == (t = o.getDraftData()) ? void 0 : t.triggers) || [], s = a.some(e => e.scriptId === i.id), l = s ? a.map(e => e.scriptId === i.id ? { ...e,
                            scriptId: void 0
                        } : e) : a, d = o.pointer.spaceId;
                        (0, n(377796).createAndCommit)({
                            userAction: "WorkflowActions.deleteScript",
                            environment: r,
                            canUndo: !0,
                            cellTarget: d ? {
                                spaceWithId: d
                            } : void 0,
                            perform: e => {
                                (0, n(421439).y4)({
                                    store: o,
                                    operation: n(861988).Wb({
                                        pointer: o.pointer,
                                        script: i
                                    }),
                                    transaction: e
                                }), s && (0, n(421439).y4)({
                                    store: o,
                                    operation: n(861988).IA({
                                        pointer: o.pointer,
                                        triggers: l
                                    }),
                                    transaction: e
                                })
                            }
                        })
                    }({
                        workflowStore: t,
                        script: e,
                        environment: s
                    }), x())
                }, [s, x, l, t]), b = (0, o.useMemo)(() => c.find(e => e.id === u), [u, c]);
                if (!r && 0 === c.length) return null;
                let k = i || !r || !d;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(f, {
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "workflow.agent.scripts.title",
                            defaultMessage: "Scripts"
                        }),
                        hasUnpublishedChanges: h,
                        style: tu,
                        isDimmed: i,
                        children: (0, a.jsxs)(n(4458).VP, {
                            gap: 8,
                            className: "autolayout-fill-width",
                            style: tp,
                            children: [(0, a.jsx)("div", {
                                style: tl,
                                children: c.map(e => (0, a.jsxs)(n(988022).p, {
                                    style: td,
                                    onClick: () => y(e.id),
                                    disabled: !d || i,
                                    size: "lg",
                                    children: [(0, a.jsx)(n(16275).I, {
                                        icon: n(107492).c,
                                        size: "sm"
                                    }), (0, a.jsx)(n(111010).D, {
                                        styleKey: "bodyMedium",
                                        children: e.name
                                    })]
                                }, e.id))
                            }), r ? null : (0, a.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                style: tg,
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "workflow.agent.scripts.disabledHelperText",
                                    defaultMessage: "Enable scripts in Experimental features to add or edit scripts."
                                })
                            }), d ? (0, a.jsx)(n(265779).E, {
                                iconLeading: {
                                    icon: n(638501).plusSmallIcon,
                                    size: "sm"
                                },
                                colorPalette: "blue",
                                onClick: w,
                                disabled: k,
                                style: tc,
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "workflow.agent.scripts.addButton",
                                    defaultMessage: "Add script"
                                })
                            }) : null]
                        })
                    }), b ? (0, a.jsx)(ts, {
                        isOpen: !!b,
                        onClose: x,
                        onDelete: v,
                        script: b,
                        workflowStore: t,
                        disabled: !d || i || !r,
                        appearance: p
                    }) : null]
                })
            }
            var tm = () => n(544476);
            let th = (0, n(109939).YK)({
                    addTrigger: {
                        id: "workflow.agent.triggers.addTrigger",
                        defaultMessage: "Add trigger"
                    }
                }),
                tw = {
                    container: {
                        paddingInline: 10
                    },
                    button: {
                        display: "flex",
                        gap: 8,
                        height: 32,
                        flexGrow: 1,
                        paddingInline: 10,
                        borderRadius: 6
                    },
                    hoveredButton: {
                        background: n(632079).Tj.background.secondaryTranslucent
                    },
                    labelGroup: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    },
                    iconStack: {
                        display: "flex",
                        alignItems: "center"
                    },
                    sourceIcon: {
                        width: 18,
                        height: 18,
                        borderRadius: 999,
                        backgroundColor: n(632079).Tj.background.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        boxShadow: `0 0 0 0.5px ${n(632079).Tj.border.secondary}`,
                        boxSizing: "border-box"
                    },
                    sourceIconOverlap: {
                        marginInlineStart: -6
                    }
                };

            function ty(e) {
                let {
                    onClick: t
                } = e, i = (0, o.useMemo)(() => ["slack", "notion", "calendar"].map(e => {
                    var t;
                    return null == (t = (0, j().jK)(e)) ? void 0 : t.getIcon()
                }).filter(e => null != e), []);
                return (0, a.jsx)("div", {
                    style: tw.container,
                    children: (0, a.jsx)(n(988022).p, {
                        size: "sm",
                        shouldShrink: !0,
                        onClick: t,
                        colorPalette: "gray",
                        iconLeading: {
                            icon: n(638501).plusSmallIcon,
                            size: "sm",
                            fitToViewBox: void 0
                        },
                        style: tw.button,
                        hoveredStyle: tw.hoveredButton,
                        children: (0, a.jsxs)("span", {
                            style: tw.labelGroup,
                            children: [(0, a.jsx)(n(109939).sA, { ...th.addTrigger
                            }), (0, a.jsx)("span", {
                                style: tw.iconStack,
                                "aria-hidden": !0,
                                children: i.slice(0, 3).map((e, t) => (0, a.jsx)("span", {
                                    style: { ...tw.sourceIcon,
                                        ...t > 0 ? tw.sourceIconOverlap : void 0
                                    },
                                    children: (0, a.jsx)(e, {
                                        width: 12,
                                        height: 12
                                    })
                                }, t))
                            })]
                        })
                    })
                })
            }
            let tx = (0, n(109939).YK)({
                    inContextSuffix: {
                        id: "workflow.calendar.triggers.row.suffix.inContext",
                        defaultMessage: "in {context}"
                    },
                    calendarFallback: {
                        id: "workflow.calendar.triggers.row.suffix.calendarFallback",
                        defaultMessage: "calendar"
                    },
                    andFilterSummarySuffix: {
                        id: "workflow.calendar.triggers.row.suffix.andFilterSummary",
                        defaultMessage: "and {summary}"
                    }
                }),
                tv = {
                    filterText: {
                        color: n(632079).Tj.text.primary,
                        fontWeight: n(699422).Wy.medium
                    },
                    filterGroup: {
                        display: "block",
                        marginInlineStart: "5px"
                    }
                };

            function tb(e) {
                let {
                    trigger: t,
                    inTooltip: o
                } = e, i = (0, n(109939).tz)(), r = t.calendars;
                if (!r || 0 === r.length) return null;
                let s = t.filter ? (0, n(399001)._Z)({
                        intl: i,
                        filterGroup: t.filter,
                        renderLeafSummary: e => (0, a.jsx)("span", {
                            style: o ? void 0 : tv.filterText,
                            children: e
                        }),
                        renderGroupSummary: e => (0, a.jsx)("span", {
                            style: o ? tv.filterGroup : void 0,
                            children: e
                        })
                    }) : void 0,
                    l = s ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(n(109939).sA, { ...tx.andFilterSummarySuffix,
                            values: {
                                summary: s
                            }
                        }), " "]
                    }) : void 0,
                    d = (0, a.jsx)(n(109939).sA, { ...tx.inContextSuffix,
                        values: {
                            context: (0, a.jsx)(n(994428).x, {
                                separator: "comma",
                                limit: o ? void 0 : 2,
                                children: r.map(e => (0, a.jsx)(tk, {
                                    calendarReference: e,
                                    inTooltip: o
                                }, `${e.accountId}:${e.calendarId}`))
                            })
                        }
                    });
                return o ? (0, a.jsxs)(a.Fragment, {
                    children: [d, " ", l]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [l, d]
                })
            }

            function tk(e) {
                let {
                    calendarReference: t,
                    inTooltip: o
                } = e, i = (0, n(682985).K8)(() => void 0 !== (0, n(440143).Y)().getHomeCalendarStateForSpaceView(), []), r = (0, n(682985).K8)(() => {
                    var e;
                    return null == (e = (0, n(440143).Y)().getCalendar({
                        accountId: t.accountId,
                        calendarId: t.calendarId
                    })) ? void 0 : e.name
                }, [t.accountId, t.calendarId]);
                return i && r ? (0, a.jsx)("span", {
                    style: o ? void 0 : tv.filterText,
                    children: r.trim()
                }) : (0, a.jsx)(n(109939).sA, { ...tx.calendarFallback
                })
            }

            function tj(e) {
                let {
                    triggerStore: t,
                    trigger: i,
                    disabled: r,
                    isDatabaseAgent: s,
                    onEnableWhenMissing: l
                } = e, d = (0, n(533992).v3)(), c = !!i && (i.enabled ? ? !0), u = (0, o.useCallback)(e => {
                    var o;
                    if (e.stopPropagation(), !i) {
                        null == l || l();
                        return
                    }
                    if (!t) return;
                    let r = !(i.enabled ? ? !0),
                        a = null == (o = i.state) ? void 0 : o.type,
                        c = !!a && (0, n(394205).e1)(a);
                    (r ? n(599231).nX : n(599231).SQ)({
                        workflowId: t.id,
                        triggerId: i.id,
                        type: a,
                        mailFilterTypes: c ? (0, n(394205).Rv)(i) : void 0,
                        emailAccountId: c ? (0, n(394205).AS)(i) : void 0,
                        isDatabaseAgent: s
                    }), (0, n(377796).createAndCommit)({
                        userAction: "TriggerSwitchButton.toggle",
                        environment: d,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: t.pointer.spaceId
                        },
                        perform: e => {
                            (0, n(173157).z)({
                                store: t,
                                data: {
                                    enabled: r
                                },
                                transaction: e
                            })
                        }
                    })
                }, [d, s, l, i, t]);
                return i || l ? (0, a.jsx)(n(354491).d, {
                    on: c,
                    disabled: r,
                    onClick: u,
                    "aria-label": "Toggle trigger"
                }) : null
            }

            function tS(e) {
                let {
                    workflowOrArtifactStore: t
                } = e;
                return t.table === n(832375).C0E, t.getDataStore().getKeyStore("triggers")
            }
            let tM = (0, n(109939).YK)({
                    inContextSuffix: {
                        id: "workflow.agent.triggers.row.suffix.inContext",
                        defaultMessage: "in {context}"
                    },
                    databaseFallback: {
                        id: "workflow.agent.triggers.row.suffix.databaseFallback",
                        defaultMessage: "database"
                    },
                    inNotionSuffix: {
                        id: "workflow.agent.triggers.row.suffix.inNotion",
                        defaultMessage: "in Notion"
                    },
                    anyPublicChannelLabel: {
                        id: "workflow.agent.triggers.row.label.anyPublicChannel",
                        defaultMessage: "any public channel"
                    },
                    inInboxesSuffix: {
                        id: "workflow.agent.triggers.row.suffix.inInboxes",
                        defaultMessage: "in {count, plural, one {# inbox} other {# inboxes}}"
                    },
                    slackMessageTitle: {
                        id: "workflow.agent.triggers.row.title.slackMessage",
                        defaultMessage: "Message posted"
                    },
                    slackMentionTitle: {
                        id: "workflow.agent.triggers.row.title.slackMention",
                        defaultMessage: "Agent mentioned"
                    },
                    slackThreadTitle: {
                        id: "workflow.agent.triggers.row.title.slackThread",
                        defaultMessage: "Thread created"
                    },
                    slackReactionTitle: {
                        id: "workflow.agent.triggers.row.title.slackReaction",
                        defaultMessage: "Emoji reaction added"
                    },
                    recurrenceTitleGeneric: {
                        id: "workflow.agent.triggers.row.title.recurrence.generic",
                        defaultMessage: "<b>{schedule}</b>{atTime}"
                    },
                    recurrenceTitleGenericWithDate: {
                        id: "workflow.agent.triggers.row.title.recurrence.genericWithDate",
                        defaultMessage: "<b>{schedule}</b> on {date}{atTime}"
                    },
                    recurrenceTitleWeeklyOnDays: {
                        id: "workflow.agent.triggers.row.title.recurrence.weeklyOnDays",
                        defaultMessage: "<b>Weekly</b> on {days}{atTime}"
                    },
                    notionMentionTitle: {
                        id: "workflow.agent.triggers.row.title.notionMention",
                        defaultMessage: "When agent is mentioned"
                    },
                    notionPageCreatedTitle: {
                        id: "workflow.agent.triggers.row.title.notionPageCreated",
                        defaultMessage: "Page added"
                    },
                    notionPageUpdatedTitle: {
                        id: "workflow.agent.triggers.row.title.notionPageUpdated",
                        defaultMessage: "Property updated"
                    },
                    notionPageDeletedTitle: {
                        id: "workflow.agent.triggers.row.title.notionPageDeleted",
                        defaultMessage: "Page removed"
                    },
                    notionCommentAddedTitle: {
                        id: "workflow.agent.triggers.row.title.notionCommentAdded",
                        defaultMessage: "Comment added"
                    },
                    notionDatabaseAgentUpdatedTitle: {
                        id: "workflow.agent.triggers.row.title.notionDatabaseAgentUpdated",
                        defaultMessage: "Database agent updated"
                    },
                    notionButtonPressedTitle: {
                        id: "workflow.agent.triggers.row.title.notionButtonPressed",
                        defaultMessage: "Button pressed"
                    },
                    invalidBadge: {
                        id: "workflow.agent.triggers.row.badge.invalid",
                        defaultMessage: "Invalid"
                    }
                }),
                tC = {
                    outerWrapper: {
                        paddingInline: 10
                    },
                    container: {
                        position: "relative"
                    },
                    hoveredButton: {
                        background: n(632079).Tj.background.secondaryTranslucent
                    },
                    triggerLabelContainer: {
                        flexGrow: 1,
                        flexShrink: 1,
                        minWidth: 0
                    },
                    triggerLabel: {
                        display: "block"
                    },
                    titleText: {
                        color: n(632079).Tj.text.primary,
                        fontWeight: n(699422).Wy.medium
                    },
                    suffixText: {
                        marginInlineStart: 4,
                        color: n(632079).Tj.text.secondary
                    },
                    tooltipText: {},
                    tooltipSuffix: {
                        marginInlineStart: 4
                    },
                    rightButtonsContainer: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        flexShrink: 0
                    },
                    rightButtonsOverlay: {
                        position: "absolute",
                        top: "50%",
                        insetInlineEnd: 10,
                        transform: "translateY(-50%)",
                        zIndex: 1,
                        pointerEvents: "auto"
                    }
                },
                tI = (0, n(64960)._S)({
                    color: n(632079).Tj.background.secondaryTranslucent
                });

            function tA(e) {
                var t, i, r, s, l;
                let {
                    workflowStore: d,
                    trigger: c,
                    onClick: u,
                    disabled: g
                } = e, p = (0, n(109939).tz)(), {
                    workflowValue: f,
                    threadStore: m
                } = (0, n(867587).N)(d, !0), h = d.pointer, w = (0, n(682985).K8)(() => {
                    if (h || null != m && m.pointer) return (0, n(646440).getWorkflowDefinitionPointer)({
                        workflowPointer: h,
                        threadPointer: null == m ? void 0 : m.pointer
                    })
                }, [h, m]), {
                    triggerDefinition: y
                } = (0, n(210511).useTriggerWithDefinition)({
                    workflowValue: f,
                    trigger: c
                }), x = (0, ew().VB)(c) ? "complete" : "needsSetup", v = (null == (t = c.state) ? void 0 : t.type) === "notion.page.created" || (null == (i = c.state) ? void 0 : i.type) === "notion.page.updated" || (null == (r = c.state) ? void 0 : r.type) === "notion.page.deleted" ? c.state.collectionId : void 0, b = (0, n(682985).K8)(() => {
                    let e = d.getSpaceId();
                    if (e && v) return n(356912).m.createChildStore(d, {
                        table: "collection",
                        id: v,
                        spaceId: e
                    })
                }, [v, d]), k = (0, n(682985).K8)(() => (null == b ? void 0 : b.isDefined()) ? ? !1, [b]);
                (0, o.useEffect)(() => {
                    b && !k && b.load()
                }, [k, b]);
                let j = (0, n(682985).K8)(() => (null == b ? void 0 : b.getSchema()) ? ? {}, [b]),
                    S = k && (0, n(460657).c)({
                        trigger: c,
                        schema: j
                    }),
                    {
                        persistedOrDraftTriggerStore: M
                    } = function(e) {
                        let {
                            workflowOrArtifactStore: t,
                            triggerIdFromParent: i
                        } = e, r = (0, n(533992).v3)(), a = (0, o.useMemo)(() => {
                            let e = new(n(870941)).A({
                                name: "TriggerConfigModal",
                                isTemporaryData: !0
                            });
                            return e.addCacheFallback(r.defaultRecordCache.inMemoryRecordCache), e
                        }, [r.defaultRecordCache.inMemoryRecordCache]), s = (0, n(682985).K8)(() => (function(e) {
                            let {
                                workflowOrArtifactStore: t,
                                triggerId: n
                            } = e;
                            if (!n) return;
                            let o = tS({
                                    workflowOrArtifactStore: t
                                }),
                                i = (o.getValue() ? ? []).findIndex(e => e.id === n);
                            if (-1 !== i) return o.getKeyStore(i)
                        })({
                            workflowOrArtifactStore: t,
                            triggerId: i
                        }), [i, t]), [l, d] = (0, o.useState)(void 0);
                        return (0, o.useEffect)(() => {
                            var e;
                            let o = (0, n(646440).maybeWorkflowStore)(t);
                            if (!o || s) return;
                            let l = o.getSpaceId();
                            if (!l) return;
                            let c = tS({
                                    workflowOrArtifactStore: t
                                }),
                                u = (null == (e = c.getValue()) ? void 0 : e.length) ? ? 0,
                                g = c.getKeyStore(u).clone(a);
                            (0, n(377796).createAndCommit)({
                                userAction: "WorkflowActions.saveTrigger",
                                environment: r,
                                canUndo: !1,
                                cellTarget: {
                                    spaceWithId: l
                                },
                                perform: e => {
                                    (0, n(368198).K)({
                                        store: g,
                                        value: {
                                            id: i,
                                            name: void 0,
                                            enabled: !0,
                                            moduleId: void 0,
                                            state: void 0
                                        },
                                        transaction: e
                                    })
                                }
                            }), d(g)
                        }, [s, a, t, r, i]), (0, o.useMemo)(() => ({
                            persistedOrDraftTriggerStore: s ? ? l,
                            persistedTriggerStore: s
                        }), [s, l])
                    }({
                        workflowOrArtifactStore: d,
                        triggerIdFromParent: c.id
                    }),
                    C = null != y && y.description ? p.formatMessage(y.description) : c.name ? ? "New trigger",
                    I = (e => {
                        switch (null == (e = c.state) ? void 0 : e.type) {
                            case "slack.message":
                                return p.formatMessage(tM.slackMessageTitle);
                            case "slack.thread.created":
                                return p.formatMessage(tM.slackThreadTitle);
                            case "slack.app.mention":
                                return p.formatMessage(tM.slackMentionTitle);
                            case "slack.reaction.added":
                                return p.formatMessage(tM.slackReactionTitle);
                            case "notion.agent.mentioned":
                                return p.formatMessage(tM.notionMentionTitle);
                            case "notion.page.created":
                                return p.formatMessage(tM.notionPageCreatedTitle);
                            case "notion.page.updated":
                                return p.formatMessage(tM.notionPageUpdatedTitle);
                            case "notion.page.deleted":
                                return p.formatMessage(tM.notionPageDeletedTitle);
                            case "notion.page.discussion.comment.added":
                                return p.formatMessage(tM.notionCommentAddedTitle);
                            case "notion.database.agent.updated":
                                return p.formatMessage(tM.notionDatabaseAgentUpdatedTitle);
                            case "notion.button.pressed":
                                return p.formatMessage(tM.notionButtonPressedTitle);
                            case "recurrence":
                                return function(e) {
                                    let {
                                        intl: t,
                                        recurrenceTrigger: o
                                    } = e, i = (0, n(579585).Ut)({
                                        intl: t,
                                        recurrenceTrigger: o
                                    }), r = e => (0, a.jsx)(n(111010).D, {
                                        as: "span",
                                        styleKey: "bodyMedium",
                                        colorVariant: "primary",
                                        children: e
                                    });
                                    return (0, a.jsx)(n(111010).D, {
                                        as: "span",
                                        styleKey: "bodyRegular",
                                        colorVariant: "primary",
                                        children: "weeklyOnDays" === i.kind ? (0, a.jsx)(n(109939).sA, { ...tM.recurrenceTitleWeeklyOnDays,
                                            values: {
                                                days: i.days,
                                                atTime: i.atTime,
                                                b: r
                                            }
                                        }) : i.onDate ? (0, a.jsx)(n(109939).sA, { ...tM.recurrenceTitleGenericWithDate,
                                            values: {
                                                schedule: i.schedule,
                                                date: i.onDate,
                                                atTime: i.atTime,
                                                b: r
                                            }
                                        }) : (0, a.jsx)(n(109939).sA, { ...tM.recurrenceTitleGeneric,
                                            values: {
                                                schedule: i.schedule,
                                                atTime: i.atTime,
                                                b: r
                                            }
                                        })
                                    })
                                }({
                                    intl: p,
                                    recurrenceTrigger: c.state
                                });
                            default:
                                return C
                        }
                    })(),
                    A = g || !u,
                    T = !1 !== c.enabled,
                    D = "needsSetup" === x || S ? 160 : 72,
                    _ = (0, n(960253).I)(() => ({
                        button: {
                            paddingInlineStart: 10,
                            paddingInlineEnd: 10 + D,
                            paddingBlock: 8,
                            gap: 8,
                            minHeight: 32,
                            width: "100%"
                        },
                        pressedButton: {
                            background: tI.pressed
                        }
                    }), [D]),
                    P = f && w ? tT({
                        trigger: c,
                        workflowStore: d,
                        workflowDefinitionPointer: w,
                        moduleValue: c.moduleId ? null == (s = f.modules) ? void 0 : s.find(e => e.id === c.moduleId) : void 0
                    }) ? ? void 0 : void 0,
                    L = f && w ? function(e) {
                        let {
                            trigger: t
                        } = e, n = t.state;
                        if (n) return "calendar.event.created" === n.type || "calendar.event.updated" === n.type || "calendar.event.canceled" === n.type ? (0, a.jsx)(tb, {
                            trigger: n,
                            inTooltip: !0
                        }) : tT(e)
                    }({
                        trigger: c,
                        workflowStore: d,
                        workflowDefinitionPointer: w,
                        moduleValue: c.moduleId ? null == (l = f.modules) ? void 0 : l.find(e => e.id === c.moduleId) : void 0
                    }) ? ? void 0 : void 0,
                    {
                        ref: R,
                        isTruncated: B
                    } = (0, n(455659).o)();
                return f && w ? (0, a.jsx)("div", {
                    style: tC.outerWrapper,
                    children: (0, a.jsxs)("div", {
                        style: tC.container,
                        children: [(0, a.jsx)(n(988022).p, {
                            size: "lg",
                            onClick: u,
                            disabled: A,
                            colorPalette: T ? void 0 : "gray",
                            iconLeading: null != y && y.icon ? {
                                icon: y.icon,
                                size: "sm",
                                colorVariant: "primary",
                                fitToViewBox: void 0
                            } : void 0,
                            style: _.button,
                            hoveredStyle: tC.hoveredButton,
                            pressedStyle: _.pressedButton,
                            children: (0, a.jsx)(n(51831).m, {
                                disableTooltip: !B,
                                content: () => (0, a.jsxs)("span", {
                                    style: tC.tooltipText,
                                    children: [I, L ? (0, a.jsx)("span", {
                                        style: tC.tooltipSuffix,
                                        children: L
                                    }) : void 0]
                                }),
                                children: e => (0, a.jsx)("span", {
                                    ref: R,
                                    style: tC.triggerLabelContainer,
                                    ...e,
                                    children: (0, a.jsxs)(n(324489).V, {
                                        isInline: !0,
                                        isSecondaryColor: !0,
                                        style: tC.triggerLabel,
                                        children: [(0, a.jsx)("span", {
                                            style: tC.titleText,
                                            children: I
                                        }), P ? (0, a.jsx)("span", {
                                            style: tC.suffixText,
                                            children: P
                                        }) : void 0]
                                    })
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            role: "presentation",
                            style: { ...tC.rightButtonsContainer,
                                ...tC.rightButtonsOverlay
                            },
                            onPointerDown: e => {
                                e.stopPropagation()
                            },
                            onClick: e => {
                                e.stopPropagation()
                            },
                            children: ["needsSetup" === x ? (0, a.jsx)(n(746434).E, {
                                color: "blue",
                                content: (0, a.jsx)(n(109939).sA, {
                                    id: "workflow.trigger.incompleteSetup",
                                    defaultMessage: "Finish setup"
                                })
                            }) : S ? (0, a.jsx)(n(746434).E, {
                                color: "red",
                                content: (0, a.jsx)(n(109939).sA, { ...tM.invalidBadge
                                })
                            }) : void 0, (0, a.jsx)(tj, {
                                disabled: g,
                                triggerStore: M,
                                trigger: c,
                                workflowId: d.id,
                                isDatabaseAgent: (0, n(445568).isWorkflowDataDatabaseAgent)(f)
                            })]
                        })]
                    })
                }) : null
            }

            function tT(e) {
                let {
                    trigger: t,
                    workflowStore: o,
                    workflowDefinitionPointer: i,
                    moduleValue: r
                } = e, s = t.state;
                if (s) {
                    if ("slack.message" === s.type || "slack.thread.created" === s.type || "slack.app.mention" === s.type || "slack.reaction.added" === s.type) {
                        if (!r || "slack" !== r.type) return;
                        let e = s.channelIds;
                        return s.allChannels ? (0, a.jsx)(tD, {
                            channelIds: e,
                            moduleValue: r,
                            workflowDefinitionPointer: i
                        }) : e && 0 !== e.length ? (0, a.jsx)(n(109939).sA, { ...tM.inContextSuffix,
                            values: {
                                context: (0, a.jsx)(n(994428).x, {
                                    separator: "comma",
                                    limit: 2,
                                    children: e.map(e => (0, a.jsx)(n(335085).xC, {
                                        channelId: e,
                                        moduleId: r.id,
                                        workflowDefinitionPointer: i,
                                        moduleValue: r
                                    }, e))
                                })
                            }
                        }) : (0, a.jsx)(n(109939).sA, { ...tM.inContextSuffix,
                            values: {
                                context: (0, a.jsx)(n(109939).sA, { ...tM.anyPublicChannelLabel
                                })
                            }
                        })
                    }
                    if ("discord.interaction" === s.type) {
                        let e = s.channelIds;
                        if (!e || 0 === e.length) return;
                        return (0, a.jsx)(n(109939).sA, { ...tM.inContextSuffix,
                            values: {
                                context: (0, a.jsx)(n(994428).x, {
                                    separator: "comma",
                                    limit: 2,
                                    children: e.map(e => (0, a.jsx)("span", {
                                        children: `#${(0,tm().dO)(e)}`
                                    }, e))
                                })
                            }
                        })
                    }
                    if ("notion.page.created" === s.type || "notion.page.updated" === s.type || "notion.page.deleted" === s.type || "notion.page.discussion.comment.added" === s.type || "notion.database.agent.updated" === s.type) {
                        if (!s.collectionId) return;
                        return (0, a.jsx)(n(109939).sA, { ...tM.inContextSuffix,
                            values: {
                                context: (0, a.jsx)(t_, {
                                    workflowStore: o,
                                    collectionId: s.collectionId
                                })
                            }
                        })
                    }
                    if ("calendar.event.created" === s.type || "calendar.event.updated" === s.type || "calendar.event.canceled" === s.type) return (0, a.jsx)(tb, {
                        trigger: s
                    });
                    if ("mail.email.received" === s.type || "mail.email.sent" === s.type || "mail.email.receivedorsent" === s.type || "mail.label.applied" === s.type) {
                        var l, d;
                        if (!r || "mail" !== r.type) return;
                        let e = null == (l = s.emailAccountIds) ? void 0 : l.length,
                            t = null == (d = r.state) || null == (d = d.emailAddresses) ? void 0 : d.length,
                            o = e && e > 0 ? e : t;
                        if (!o) return;
                        return (0, a.jsx)(n(109939).sA, { ...tM.inInboxesSuffix,
                            values: {
                                count: o
                            }
                        })
                    }
                    if ("notion.agent.mentioned" === s.type) return (0, a.jsx)(n(109939).sA, { ...tM.inNotionSuffix
                    })
                }
            }

            function tD(e) {
                let {
                    channelIds: t,
                    moduleValue: i,
                    workflowDefinitionPointer: r
                } = e, {
                    channelDataMap: s
                } = (0, n(335085).$8)({
                    channelIds: t,
                    moduleId: i.id,
                    workflowDefinitionPointer: r,
                    moduleValue: i
                }), l = o.useMemo(() => t && 0 !== t.length ? t.filter(e => {
                    let {
                        channelData: t
                    } = (0, n(57577).F)({
                        identifier: e,
                        channels: Array.from(s.values())
                    });
                    return (null == t ? void 0 : t.type) === "private"
                }) : [], [t, s]);
                return (0, a.jsx)(n(109939).sA, { ...tM.inContextSuffix,
                    values: {
                        context: (0, a.jsxs)(n(994428).x, {
                            separator: "comma",
                            limit: 2,
                            children: [(0, a.jsx)(n(109939).sA, { ...tM.anyPublicChannelLabel
                            }, "all-public"), l.map(e => (0, a.jsx)(n(335085).xC, {
                                channelId: e,
                                moduleId: i.id,
                                workflowDefinitionPointer: r,
                                moduleValue: i
                            }, e))]
                        })
                    }
                })
            }

            function t_(e) {
                let {
                    workflowStore: t,
                    collectionId: i
                } = e, r = (0, n(682985).K8)(() => {
                    let e = t.getSpaceId();
                    if (e) return n(356912).m.createChildStore(t, {
                        table: "collection",
                        id: i,
                        spaceId: e
                    })
                }, [i, t]), s = (0, n(682985).K8)(() => (null == r ? void 0 : r.isDefined()) ? ? !1, [r]);
                return (o.useEffect(() => {
                    r && !s && r.load()
                }, [r, s]), r) ? (0, a.jsx)(n(627918).A, {
                    store: r,
                    shouldWrap: !0
                }) : (0, a.jsx)(n(109939).sA, { ...tM.databaseFallback
                })
            }
            let tP = (0, n(109939).YK)({
                    triggersTitle: {
                        id: "workflow.agent.triggers.title",
                        defaultMessage: "Triggers"
                    },
                    triggersDescription: {
                        id: "workflow.agent.tabs.triggers.description",
                        defaultMessage: "When should this agent run?"
                    },
                    chatInNotionTrigger: {
                        id: "workflow.agent.triggers.chatInNotion",
                        defaultMessage: "New chat with {agentName, select, undefined {this agent} other {{agentName}}}"
                    },
                    notionMentionTitle: {
                        id: "workflow.agent.triggers.row.title.notionMention",
                        defaultMessage: "When agent is mentioned"
                    },
                    inNotionSuffix: {
                        id: "workflow.agent.triggers.row.suffix.inNotion",
                        defaultMessage: "in Notion"
                    }
                }),
                tL = {
                    paddingInline: 10
                },
                tR = {
                    position: "relative",
                    paddingInline: 10,
                    paddingBlock: 6,
                    minHeight: 32
                },
                tB = {
                    paddingInline: 0,
                    paddingBlock: 10
                },
                tK = {
                    cursor: "default"
                },
                tE = {
                    paddingBlockStart: 4,
                    paddingInline: 14,
                    paddingBlockEnd: 8
                },
                tV = {
                    position: "relative"
                };

            function tW(e) {
                let {
                    workflowOrArtifactStore: t,
                    disabled: i,
                    disableRunButton: r,
                    suppressChecklistStore: s
                } = e, l = (0, n(533992).v3)(), d = (0, n(109939).tz)(), {
                    workflowValue: c
                } = (0, n(867587).N)(t, !0), u = (0, n(682985).K8)(() => void 0 !== t.getData(), [t]);
                ! function(e) {
                    let {
                        workflowData: t,
                        spaceId: i,
                        workflowId: r
                    } = e, a = (0, n(533992).v3)(), [s, l] = (0, o.useState)(0);
                    (0, o.useEffect)(() => {
                        if (null != t && t.triggers && t.modules)
                            for (let n of t.triggers) {
                                var e;
                                if ((null == (e = n.state) ? void 0 : e.type) !== "discord.interaction") continue;
                                let o = n.state.channelIds;
                                if (!o || 0 === o.length || (0, tm().tq)(o)) continue;
                                let s = t.modules.find(e => e.id === n.moduleId && "discord" === e.type);
                                if (s) {
                                    (0, tm().Sh)({
                                        environment: a,
                                        moduleId: s.id,
                                        spaceId: i,
                                        workflowId: r
                                    }).then(e => {
                                        e && l(e => e + 1)
                                    });
                                    break
                                }
                            }
                    }, [a, i, t, r])
                }({
                    workflowData: c,
                    spaceId: t.pointer.spaceId,
                    workflowId: t.id
                });
                let g = (0, n(682985).K8)(() => ((null == c ? void 0 : c.triggers) ? ? []).filter(e => {
                        var t;
                        let o = null == (t = e.state) ? void 0 : t.type;
                        return (0, n(934558).A)({
                            triggerType: o,
                            context: "display"
                        })
                    }), [c]),
                    p = (0, o.useMemo)(() => {
                        var e;
                        return (null == c || null == (e = c.triggers) ? void 0 : e.some(e => {
                            var t;
                            return (null == (t = e.state) ? void 0 : t.type) === "notion.agent.mentioned"
                        })) ? ? !1
                    }, [null == c ? void 0 : c.triggers]),
                    [m, h] = (0, o.useState)(!1),
                    w = null == c ? void 0 : c.name,
                    y = (0, n(102292).V)(w),
                    x = y.trim() ? y : void 0,
                    [v, b] = (0, o.useState)(!1),
                    [k, j] = (0, o.useState)(void 0),
                    S = (0, o.useCallback)(() => {
                        (0, n(599231).qt)({
                            action: "open_add_trigger_menu",
                            workflowId: t.id
                        }), j(void 0), b(!0)
                    }, [t.id]),
                    M = (0, o.useCallback)(e => {
                        (0, n(599231).qt)({
                            action: "open_edit_trigger_modal",
                            workflowId: t.id
                        }), j(e.id), b(!0)
                    }, [t.id]),
                    C = (0, o.useCallback)(() => {
                        b(!1), j(void 0)
                    }, []),
                    I = (0, n(646440).maybeWorkflowStore)(t),
                    A = !i && t.table !== n(832375).U6v,
                    T = (0, o.useCallback)(() => {
                        var e;
                        !I || !c || m || (null == (e = c.triggers) ? void 0 : e.some(e => {
                            var t;
                            return (null == (t = e.state) ? void 0 : t.type) === "notion.agent.mentioned"
                        })) || (h(!0), (async () => {
                            try {
                                var e;
                                let t = null == (e = c.modules) ? void 0 : e.find(e => "notion" === e.type);
                                await (0, n(988755).v)({
                                    workflowStore: I,
                                    environment: l,
                                    intl: d,
                                    selection: {
                                        triggerType: "notion.agent.mentioned",
                                        moduleType: "notion",
                                        moduleValue: t
                                    }
                                })
                            } finally {
                                h(!1)
                            }
                        })())
                    }, [l, d, m, I, c]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(f, {
                        title: (0, a.jsx)(n(109939).sA, { ...tP.triggersTitle
                        }),
                        description: (0, a.jsx)(n(109939).sA, { ...tP.triggersDescription
                        }),
                        isPrimarySection: !0,
                        isDimmed: i,
                        style: tB,
                        children: u ? (0, a.jsxs)(n(4458).VP, {
                            className: "autolayout-fill-width",
                            gap: 0,
                            style: tV,
                            children: [I && !r ? (0, a.jsx)("div", {
                                style: tE,
                                children: (0, a.jsx)(n(16986).Z, {
                                    workflowStore: I,
                                    disabled: r
                                })
                            }) : void 0, (0, a.jsx)("div", {
                                style: tL,
                                children: (0, a.jsxs)(n(4458).fI, {
                                    gap: 8,
                                    className: "autolayout-fill-width",
                                    style: { ...tR,
                                        ...tK,
                                        position: "relative"
                                    },
                                    alignItems: "center",
                                    children: [(0, a.jsx)(n(16275).I, {
                                        icon: n(534965).n,
                                        size: "sm"
                                    }), (0, a.jsxs)(n(4458).fI, {
                                        gap: 4,
                                        alignItems: "center",
                                        style: tV,
                                        flex: "1 1 0",
                                        children: [(0, a.jsx)(n(111010).D, {
                                            as: "span",
                                            styleKey: "bodyMedium",
                                            colorVariant: "primary",
                                            children: (0, a.jsx)(n(109939).sA, { ...tP.chatInNotionTrigger,
                                                values: {
                                                    agentName: x
                                                }
                                            })
                                        }), (0, a.jsx)(n(111010).D, {
                                            as: "span",
                                            styleKey: "bodyRegular",
                                            colorVariant: "secondary",
                                            children: (0, a.jsx)(n(109939).sA, { ...tP.inNotionSuffix
                                            })
                                        })]
                                    })]
                                })
                            }), p ? void 0 : (0, a.jsx)("div", {
                                style: tL,
                                children: (0, a.jsxs)(n(4458).fI, {
                                    className: "autolayout-fill-width",
                                    style: tR,
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [(0, a.jsxs)(n(4458).fI, {
                                        gap: 8,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        style: tV,
                                        flex: "1 1 0",
                                        children: [(0, a.jsx)(n(16275).I, {
                                            icon: n(160184).U,
                                            size: "sm"
                                        }), (0, a.jsxs)(n(4458).fI, {
                                            gap: 4,
                                            alignItems: "center",
                                            style: tV,
                                            flex: "1 1 0",
                                            children: [(0, a.jsx)(n(111010).D, {
                                                as: "span",
                                                styleKey: "bodyMedium",
                                                colorVariant: "primary",
                                                children: (0, a.jsx)(n(109939).sA, { ...tP.notionMentionTitle
                                                })
                                            }), (0, a.jsx)(n(111010).D, {
                                                as: "span",
                                                styleKey: "bodyRegular",
                                                colorVariant: "secondary",
                                                children: (0, a.jsx)(n(109939).sA, { ...tP.inNotionSuffix
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsx)(tj, {
                                        disabled: !A || m,
                                        triggerStore: void 0,
                                        trigger: void 0,
                                        workflowId: t.id,
                                        isDatabaseAgent: void 0,
                                        onEnableWhenMissing: T
                                    })]
                                })
                            }), g.map(e => {
                                var n;
                                return (0, a.jsx)(tA, {
                                    workflowStore: t,
                                    trigger: e,
                                    disabled: i,
                                    onClick: A && (null == (n = e.state) ? void 0 : n.type) !== "notion.agent.mentioned" ? () => M(e) : void 0
                                }, e.id)
                            }), A ? (0, a.jsx)(ty, {
                                onClick: S
                            }) : void 0]
                        }) : (0, a.jsx)(n(4458).fI, {
                            className: "autolayout-fill-width",
                            padding: 12,
                            alignItems: "center",
                            justifyContent: "center",
                            style: tV,
                            children: (0, a.jsx)(n(517334).k, {
                                size: "sm"
                            })
                        })
                    }), I && v ? (0, a.jsx)(n(915397).l, {
                        isOpen: v,
                        onClose: C,
                        workflowStore: I,
                        editingTriggerId: k,
                        suppressChecklistStore: s
                    }) : void 0]
                })
            }
            let tN = (0, n(109939).YK)({
                    instructionsTitle: {
                        id: "workflow.agent.instructions.title",
                        defaultMessage: "Instructions"
                    },
                    instructionsDescription: {
                        id: "workflow.agent.instructions.descriptionWithLink",
                        defaultMessage: "What should the agent do every time it runs? Here are a few <link>best practices</link>."
                    },
                    addMemoriesButton: {
                        id: "workflow.agent.instructions.addMemories",
                        defaultMessage: "Add memories"
                    },
                    addMemoriesPrompt: {
                        id: "workflow.agent.instructions.addMemoriesPrompt",
                        defaultMessage: "Add memories to this agent"
                    },
                    toolsAndAccessTitle: {
                        id: "workflow.agent.toolsAndAccess.title",
                        defaultMessage: "Tools and access"
                    },
                    toolsAndAccessDescription: {
                        id: "workflow.agent.toolsAndAccess.description",
                        defaultMessage: "What can the agent use? Add tools, pages, and connections it can access."
                    },
                    webAccessLabel: {
                        id: "workflows.notion.permissions.webAccess",
                        defaultMessage: "Web access"
                    },
                    webAccessTooltip: {
                        id: "workflows.notion.permissions.webAccess.tooltip",
                        defaultMessage: "Add domains to restrict web search to approved sources"
                    },
                    webAccessTooltipAria: {
                        id: "workflows.notion.permissions.webAccess.tooltip.aria",
                        defaultMessage: "Info about web access domain filtering"
                    },
                    addConnection: {
                        id: "workflow.agent.toolsAndAccess.add",
                        defaultMessage: "Add connection"
                    },
                    noConnectionsAvailable: {
                        id: "workflow.agent.toolsAndAccess.noConnections",
                        defaultMessage: "No connections available"
                    },
                    connectMissingFields: {
                        id: "workflow.agent.toolsAndAccess.connectMissingFields",
                        defaultMessage: "Please grant access to the highlighted rows for your agent to work properly"
                    },
                    modelTitle: {
                        id: "workflow.agent.model.title",
                        defaultMessage: "Model"
                    },
                    modelTooltip: {
                        id: "workflow.agent.model.tooltip",
                        defaultMessage: "Choose which AI model powers this agent"
                    }
                }),
                tz = {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: 15,
                    width: "100%",
                    marginInline: "auto"
                },
                tU = {
                    position: "relative"
                },
                tF = o.memo(function(e) {
                    var t;
                    let {
                        workflowOrArtifactStore: s,
                        workflowStore: l,
                        disabled: u = !1,
                        workflowValidationErrorStore: g,
                        showInstructionsPeekButton: p
                    } = e, f = (0, n(533992).v3)(), m = (0, n(109939).tz)(), h = (0, n(682985).K8)(() => n(218744).default.getConfig({
                        configName: "custom_agent_sub_features"
                    }).conversation_starters, []), w = (0, n(83208).X)("software_factory"), y = (0, n(682985).K8)(() => (0, n(909212).Xr)(), []);
                    ! function(e) {
                        let {
                            workflowStore: t,
                            environment: i,
                            disabled: r
                        } = e, a = (0, n(723240).r)(), s = t.table === n(43296).C && !r && !!a, l = (0, o.useRef)(!1), d = (0, o.useRef)(!1);
                        (0, o.useEffect)(() => {
                            d.current = !1
                        }, [t.id]);
                        let c = (0, o.useCallback)(async () => {
                            if (l.current || !s || !a) return;
                            let e = t.getDraftData() ? ? t.getData(),
                                o = ((null == e ? void 0 : e.modules) ? ? []).filter(n(315126).fz);
                            if (0 !== o.length) {
                                l.current = !0;
                                try {
                                    await Promise.allSettled(o.map(e => n(178718).R({
                                        environment: i,
                                        moduleId: e.id,
                                        spaceId: a,
                                        workflowId: t.id
                                    })))
                                } catch (e) {} finally {
                                    l.current = !1
                                }
                            }
                        }, [i, s, a, t]);
                        (0, o.useEffect)(() => {
                            s && !d.current && (d.current = !0, c())
                        }, [s, c])
                    }({
                        workflowStore: s,
                        environment: f,
                        disabled: u
                    });
                    let {
                        workflowValue: x
                    } = (0, n(867587).N)(s, !0);
                    ! function(e) {
                        let {
                            environment: t,
                            workflowStore: i,
                            workflowValue: a,
                            intl: s
                        } = e, l = (0, o.useRef)(!1), d = (0, o.useMemo)(() => {
                            var e;
                            return null == (e = a.modules) ? void 0 : e.find(e => "mail" === e.type)
                        }, [a.modules]), c = null != d && d.state && "connectionPointer" in d.state ? d.state.connectionPointer : void 0, u = (null == c ? void 0 : c.table) === n(53234).K ? c.id : void 0, g = (0, n(345776).T)(), {
                            loading: p,
                            connection: f
                        } = (0, n(622482).N)(u, null == c ? void 0 : c.spaceId), m = (0, o.useMemo)(() => !!c && (p ? void 0 : (null == f ? void 0 : f.created_by_id) === g), [c, p, f, g]);
                        (0, o.useEffect)(() => {
                            if (void 0 === m || !m || l.current) return;
                            let e = a.modules ? ? [],
                                o = (0, n(767316).vO)(e);
                            async function d(e) {
                                let {
                                    serverCommitResult: o
                                } = (0, n(677701).c)({
                                    environment: t,
                                    workflowStore: i,
                                    module: e
                                });
                                await o, await (0, n(727832).R)({
                                    environment: t,
                                    workflowStore: i
                                }), n(819652).Iz({
                                    message: s.formatMessage(r.migrationToast),
                                    icon: n(372181).infoCircleSmallIcon,
                                    variant: "default",
                                    presentationType: "transient"
                                })
                            }
                            o && (l.current = !0, d(o))
                        }, [t, i, a, s, m])
                    }({
                        environment: f,
                        workflowStore: l,
                        workflowValue: x,
                        intl: m
                    });
                    let v = (0, n(425749).WF)(x),
                        b = i[v],
                        k = "hidden" !== b.triggers,
                        j = u || "disabled" === b.triggers,
                        S = "hidden" !== b.integrations,
                        M = (0, n(682985).uB)(void 0, n(591222).x),
                        C = (0, n(682985).O$)(M),
                        I = function(e, t) {
                            let i = (0, n(533992).v3)(),
                                r = (0, n(867587).N)(e, !0),
                                a = (0, n(682985).K8)(() => {
                                    var t;
                                    if (e.table !== n(581654).U6) return null == (t = e.getPublishedArtifactStore()) ? void 0 : t.getData()
                                }, [e]),
                                s = (0, o.useMemo)(() => (0, n(16712).Z0)({
                                    workflowData: r.workflowValue,
                                    publishedWorkflowData: a
                                }), [r.workflowValue, a]),
                                l = (null == s ? void 0 : s.enableScriptAgent) ? ? !1,
                                d = (null == s ? void 0 : s.enableScriptAgentAdvanced) ? ? !1,
                                c = (null == s ? void 0 : s.enableScriptAgentSearchConnectorsInCustomAgent) ? ? !1,
                                u = (null == s ? void 0 : s.enableScriptAgentGoogleDriveInCustomAgent) ? ? !1,
                                g = (0, n(214328).n)(e, "experimental"),
                                p = e.table !== n(581654).U6,
                                f = "u" > typeof window ? window.location.hostname : void 0,
                                m = "string" == typeof f && f.includes("meticulous"),
                                [h, w] = (0, o.useState)(() => !("u" < typeof window) && eq());
                            (0, o.useEffect)(() => {
                                if (h || "u" < typeof window) return;
                                let e = !1,
                                    t = 0,
                                    n = window.setInterval(() => {
                                        if (eq()) {
                                            window.clearInterval(n), e || w(!0);
                                            return
                                        }(t += 1) >= 20 && window.clearInterval(n)
                                    }, 200);
                                return () => {
                                    e = !0, window.clearInterval(n)
                                }
                            }, [h]);
                            let y = m || h,
                                x = (0, n(682985).K8)(() => n(218744).default.getConfigKey("custom_agent_experimental_features", "availableOptions"), []),
                                v = (0, o.useMemo)(() => {
                                    let e = new Set;
                                    if (Array.isArray(x))
                                        for (let t of x) e.add(t);
                                    else if ("string" == typeof x)
                                        for (let t of x.split(",").map(e => e.trim()).filter(e => e.length > 0)) e.add(t);
                                    return e.has("script_agent_search_connectors") && e.add("script_agent_google_drive"), e
                                }, [x]),
                                b = (0, o.useMemo)(() => y ? [] : eO.filter(e => v.has(e.id) || ((null == s ? void 0 : s[e.configOverrideKey]) ? ? !1)).map(t => ({
                                    id: t.id,
                                    label: t.label,
                                    ariaLabel: t.ariaLabel,
                                    icon: t.icon,
                                    enabled: (null == s ? void 0 : s[t.configOverrideKey]) ? ? !1,
                                    onToggle: () => {
                                        e.table === n(43296).C && t.setOverride({
                                            environment: i,
                                            workflowStore: e,
                                            enabled: !(null == s ? void 0 : s[t.configOverrideKey])
                                        })
                                    }
                                })), [y, v, s, i, e]);
                            return {
                                showExperimentalFeatures: b.length > 0,
                                scriptAgentEnabled: l,
                                scriptAgentAdvancedEnabled: d,
                                scriptAgentSearchConnectorsEnabled: c,
                                scriptAgentGoogleDriveEnabled: u,
                                experimentalSectionDisabled: t || !p,
                                hasExperimentalChanges: g,
                                visibleOptions: b
                            }
                        }(s, u),
                        {
                            scriptAgentEnabled: A
                        } = I;
                    return (0, a.jsxs)("div", {
                        style: tz,
                        children: [(0, a.jsx)(t0, {}), u || C ? void 0 : (0, a.jsx)(ev, {
                            workflowStore: l,
                            suppressChecklistStore: M
                        }), (0, a.jsx)(ef, {
                            workflowStore: s,
                            disabled: u,
                            permissionMode: v
                        }), k ? (0, a.jsx)(tW, {
                            workflowOrArtifactStore: s,
                            disabled: j,
                            disableRunButton: u,
                            suppressChecklistStore: M
                        }) : void 0, (0, a.jsx)(tq, {
                            workflowStore: s,
                            disabled: u,
                            workflowValidationErrorStore: g,
                            showInstructionsPeekButton: p
                        }), h ? (0, a.jsx)(eL, {
                            workflowStore: s,
                            disabled: u
                        }) : void 0, S ? (0, a.jsx)(t$, {
                            workflowStore: s,
                            editableWorkflowStore: l,
                            disabled: u,
                            permissionMode: v
                        }) : void 0, (0, a.jsx)(tf, {
                            workflowStore: s,
                            disabled: u,
                            scriptsEnabled: A
                        }), w ? (0, a.jsx)(J, {
                            workflowStore: s,
                            externalAgentHarness: x.externalAgentHarness,
                            disabled: u
                        }) : void 0, (null == (t = x.externalAgentHarness) ? void 0 : t.provider) === "boxy" ? void 0 : (0, a.jsx)(tQ, {
                            workflowStore: s,
                            disabled: u
                        }), (0, a.jsx)(ti, {
                            workflowStore: s,
                            workflowData: x,
                            disabled: u
                        }), (0, a.jsx)(eo, {
                            workflowStore: s
                        }), y ? (0, a.jsx)(eM, {
                            workflowStore: l,
                            disabled: u
                        }) : void 0, (0, a.jsx)(eG, {
                            workflowStore: s,
                            experimentalContext: I
                        }), (0, a.jsx)(d, {
                            children: (0, a.jsx)(c, {
                                workflowStore: s
                            })
                        }), (0, a.jsx)(n(33072).c, {})]
                    })
                }),
                tO = {
                    style0: {
                        paddingInline: 0,
                        paddingBlock: 0
                    },
                    bestPracticesLink: {
                        color: "inherit",
                        textDecoration: "none",
                        borderBottom: `1px solid ${n(632079).Tj.border.primaryTranslucent}`,
                        cursor: "pointer"
                    }
                };

            function tq(e) {
                let {
                    workflowStore: t,
                    disabled: i,
                    workflowValidationErrorStore: r,
                    showInstructionsPeekButton: s
                } = e, l = (0, n(533992).v3)(), d = (0, n(109939).tz)(), c = (0, n(972740).L)(), u = (0, n(876252).$)(), g = (0, n(214328).n)(t, "instructions"), p = (0, n(682985).K8)(() => r.hasError("instructions"), [r]), m = (0, o.useCallback)(() => {
                    if (t.table !== n(832375).C0E || !c || !u) return;
                    let e = n(728372).AppStoreSidebarSpaceViewStore.state;
                    if (!e) return;
                    let o = d.formatMessage(tN.addMemoriesPrompt),
                        i = (0, n(674880).Jv)({
                            environment: l,
                            spaceStore: c,
                            userStore: u,
                            promptType: "update_custom_agent_with_memories",
                            value: (0, n(247438).x9d)(o),
                            locale: (0, n(599412).H)(d)
                        }),
                        r = (0, n(674880).Xd)({
                            environment: l,
                            inferenceContext: {
                                userStore: u,
                                spaceStore: c,
                                spaceViewStore: e,
                                blockStore: void 0,
                                peekStore: void 0,
                                workflowStore: t
                            },
                            config: (0, n(922900).getWorkflowAgentConfig)({
                                environment: l,
                                spaceId: c.id,
                                workflowId: t.id
                            }),
                            addSteps: [i],
                            surface: "workflows"
                        }),
                        a = (0, n(225900).N)({
                            environment: l,
                            spaceStore: c,
                            transcript: r,
                            workflowId: t.id,
                            createdSource: "workflows",
                            parentPointer: t.pointer
                        });
                    (0, n(358667).openChatPanel)({
                        environment: l,
                        store: t,
                        chatPanelState: {
                            isOpen: !0,
                            threadId: a.id
                        }
                    })
                }, [l, d, c, u, t]), h = (0, n(83208).X)("custom_agent_add_memories_button_enabled") && !i && t.table === n(832375).C0E ? (0, a.jsxs)(n(4458).fI, {
                    gap: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    className: "autolayout-fill-width",
                    style: tU,
                    children: [(0, a.jsx)(eX, {
                        workflowStore: t
                    }), (0, a.jsx)(n(265779).E, {
                        size: "sm",
                        onClick: m,
                        children: (0, a.jsx)(n(109939).sA, { ...tN.addMemoriesButton
                        })
                    })]
                }) : (0, a.jsx)(eX, {
                    workflowStore: t
                }), w = (0, a.jsx)(n(109939).sA, { ...tN.instructionsDescription,
                    values: {
                        link: (...e) => (0, a.jsx)("a", {
                            href: "https://www.notion.com/help/best-practices-for-creating-and-optimizing-a-custom-agent",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: tO.bestPracticesLink,
                            children: e
                        })
                    }
                });
                return (0, a.jsx)(f, {
                    title: (0, a.jsx)(n(109939).sA, { ...tN.instructionsTitle
                    }),
                    description: w,
                    isPrimarySection: !0,
                    hasError: p,
                    errorLabel: (0, a.jsx)(eh, {}),
                    hasUnpublishedChanges: g,
                    style: tO.style0,
                    isDimmed: i,
                    actionButton: h,
                    children: (0, a.jsx)(n(416065).G, {
                        workflowStore: t,
                        disabled: i,
                        workflowValidationErrorStore: r,
                        showInstructionsPeekButton: s
                    })
                })
            }

            function tH(e) {
                let {
                    moduleValue: t,
                    removeOnCancel: i,
                    onAuthDismissed: r,
                    threadStore: a,
                    workflowStore: s
                } = e, l = s.pointer, d = (0, n(533992).v3)(), c = (0, o.useRef)(!1), u = (0, n(682985).K8)(() => (0, n(646440).getWorkflowDefinitionPointer)({
                    workflowPointer: l
                }), [l]), g = (0, o.useCallback)(() => {
                    c.current = !0, r()
                }, [r]), p = (0, o.useCallback)(() => {
                    if (c.current || !i) return void r();
                    let e = s.table === n(832375).C0E ? s.getDraftData() ? ? s.getData() : s.getData(),
                        o = ((null == e ? void 0 : e.modules) ? ? []).find(e => e.id === t.id);
                    o && (0, n(315126).q8)(o) || s.table === n(832375).C0E && (0, n(593464).$)({
                        environment: d,
                        module: t,
                        threadStore: a,
                        workflowStore: s
                    }), r()
                }, [i, r, s, t, d, a]), {
                    startAuthFlow: f,
                    authModal: m
                } = (0, n(494257).K)({
                    moduleValue: t,
                    workflowDefinitionPointer: u || {
                        table: "workflow",
                        id: "",
                        spaceId: ""
                    },
                    workflowModuleStore: void 0,
                    from: "custom_agent_connection_modal",
                    onAuthComplete: g,
                    onAuthDismiss: p
                });
                return (o.useEffect(() => {
                    u && f()
                }, [f, u]), u) ? m : null
            }
            let tG = {
                permissionRow: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minHeight: 32,
                    paddingBlock: 8,
                    paddingInline: 10
                },
                permissionRowHighlighted: {
                    backgroundColor: n(632079).Tj.blue.background.secondaryTranslucent,
                    borderRadius: 6
                },
                itemWrapper: {
                    paddingInline: 10,
                    marginTop: 4,
                    marginBottom: 4
                },
                tooltip: {
                    minWidth: 140
                },
                tooltipIcon: {
                    marginInlineStart: 2
                },
                style0: {
                    paddingInline: 0,
                    paddingBlock: 10
                },
                validationMessage: {
                    paddingInlineStart: 10,
                    paddingBlockStart: 12
                }
            };

            function t$(e) {
                let {
                    workflowStore: t,
                    editableWorkflowStore: i,
                    disabled: r = !1,
                    permissionMode: s
                } = e, l = (0, n(214328).n)(t, "integrations"), d = (0, n(109939).tz)(), c = (0, n(533992).v3)(), {
                    workflowValue: u,
                    threadStore: p
                } = (0, n(867587).N)(t, !0), m = null == u ? void 0 : u.modules, h = (0, o.useMemo)(() => m ? ? [], [m]), [w, y] = o.useState(!1), [x, v] = o.useState(void 0), b = (0, o.useCallback)(e => {
                    v(e)
                }, []), k = (0, o.useCallback)(() => {
                    v(void 0)
                }, []), j = (0, o.useCallback)(() => {
                    v(void 0), y(!0), (0, n(599231).qt)({
                        action: "open_add_connection_menu",
                        workflowId: t.id
                    })
                }, [t.id]), S = (0, o.useCallback)(() => {
                    y(!1)
                }, []), M = (0, n(758360).K7)("custom_agent").supportsWebSearch("workflow"), C = (0, o.useMemo)(() => h.find(e => "notion" === e.type), [h]), I = (0, o.useMemo)(() => {
                    if (C) return (0, n(445568).isWebAccessEnabled)(C.permissions)
                }, [C]), A = (0, n(22221).t)(), T = (0, o.useCallback)(() => {
                    var e, o;
                    if (!C || t.table === n(832375).U6v) return;
                    let i = null == (e = C.permissions) ? void 0 : e.find(e => "search" === e.type && "web" === e.identifier.type),
                        r = (null == i ? void 0 : i.type) === "search" && "web" === i.identifier.type ? i.identifier.allowedDomains : void 0,
                        a = [...C.permissions || []].filter(e => "search" !== e.type || "web" !== e.identifier.type),
                        s = {
                            moduleType: "notion",
                            type: "search",
                            identifier: {
                                type: "web",
                                ...r && r.length > 0 ? {
                                    allowedDomains: r
                                } : {}
                            },
                            actions: [I ? "disallow" : "allow"]
                        },
                        l = { ...C,
                            permissions: [...a, s]
                        };
                    I || ((0, n(599231).ik)({
                        connected_tool: "notion",
                        workflow_id: t.id,
                        resource_type: "web"
                    }), null == (o = A.onValidationFixAction) || o.call(A, {
                        source: "web_access",
                        action: "enable"
                    })), (0, n(677701).c)({
                        environment: c,
                        workflowStore: t,
                        module: l
                    })
                }, [c, C, A, I, t]), D = (0, n(731770).v)({
                    workflowStore: t,
                    workflowValue: u,
                    showCurrentModules: !1,
                    isCustomAgentContext: !0
                }), _ = 0 === D.length, P = (0, n(445568).isWorkflowDataDatabaseAgent)(u), L = (0, n(83208).X)("db_agents_allow_integrations"), {
                    needsToolsAndAccessValidation: R,
                    shouldHighlightWebAccess: B
                } = A, E = "ownerActor" === s, V = (0, n(83208).X)("computer_custom_envs"), N = (0, o.useMemo)(() => h.filter(e => (!E || "notion" !== e.type) && ("computer" !== e.type || !!V)), [h, E, V]);
                return (0, a.jsxs)("div", {
                    "data-section": "tools-and-access",
                    children: [(0, a.jsx)(f, {
                        title: (0, a.jsx)(n(109939).sA, { ...tN.toolsAndAccessTitle
                        }),
                        description: (0, a.jsx)(n(109939).sA, { ...tN.toolsAndAccessDescription
                        }),
                        isPrimarySection: !0,
                        hasUnpublishedChanges: l,
                        style: tG.style0,
                        isDimmed: r,
                        children: (0, a.jsxs)(n(4458).VP, {
                            gap: 0,
                            className: "autolayout-fill-width",
                            style: tU,
                            children: [(0, a.jsx)(ec, {
                                workflowStore: i,
                                disabled: r,
                                permissionMode: s
                            }), C && M ? (0, a.jsxs)("div", {
                                style: tG.itemWrapper,
                                children: [(0, a.jsxs)("div", {
                                    style: { ...tG.permissionRow,
                                        ...B ? tG.permissionRowHighlighted : void 0
                                    },
                                    children: [(0, a.jsxs)(n(4458).fI, {
                                        alignItems: "center",
                                        gap: 8,
                                        children: [(0, a.jsx)(n(16275).I, {
                                            icon: n(451034).globeSmallIcon,
                                            size: "sm"
                                        }), (0, a.jsxs)(n(4458).fI, {
                                            alignItems: "center",
                                            children: [(0, a.jsx)(n(111010).D, {
                                                styleKey: "bodyMedium",
                                                children: (0, a.jsx)(n(109939).sA, { ...tN.webAccessLabel
                                                })
                                            }), I ? (0, a.jsx)(n(51831).m, {
                                                style: tG.tooltip,
                                                content: () => (0, a.jsx)(n(109939).sA, { ...tN.webAccessTooltip
                                                }),
                                                textWrap: !0,
                                                children: e => (0, a.jsx)(n(374533).A, {
                                                    size: "xs",
                                                    icon: n(372181).infoCircleSmallIcon,
                                                    ariaLabel: d.formatMessage(tN.webAccessTooltipAria),
                                                    style: tG.tooltipIcon,
                                                    ...e
                                                })
                                            }) : null]
                                        })]
                                    }), (0, a.jsx)(n(354491).d, {
                                        disabled: r,
                                        on: I ? ? !1,
                                        onClick: T,
                                        "aria-label": "Toggle web search"
                                    })]
                                }), I ? (0, a.jsx)(eW, {
                                    notionModule: C,
                                    workflowStore: t,
                                    threadStore: p,
                                    disabled: r
                                }) : null]
                            }) : null, N.length > 0 ? (0, a.jsx)(n(346268).c, {
                                colorVariant: "secondary",
                                size: 16
                            }) : void 0, N.map((e, i) => (0, a.jsxs)(o.Fragment, {
                                children: [i > 0 ? (0, a.jsx)(n(346268).c, {
                                    colorVariant: "secondary",
                                    size: 16
                                }) : void 0, (0, a.jsx)("div", {
                                    style: tG.itemWrapper,
                                    children: (0, a.jsx)(g, {
                                        workflowStore: t,
                                        workflow: u,
                                        module: e
                                    })
                                })]
                            }, e.id)), r || t.table === n(832375).U6v || P && !L ? void 0 : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(n(346268).c, {
                                    colorVariant: "secondary",
                                    size: 16
                                }), (0, a.jsxs)("div", {
                                    style: tG.itemWrapper,
                                    children: [(0, a.jsx)(n(51831).m, {
                                        disableTooltip: !_,
                                        placement: "top",
                                        alignment: "start",
                                        content: () => (0, a.jsx)(n(109939).sA, { ...tN.noConnectionsAvailable
                                        }),
                                        children: e => (0, a.jsx)(W, {
                                            tooltipEvents: e,
                                            availableModules: D,
                                            disabled: _ || r,
                                            onClick: j,
                                            label: (0, a.jsx)(n(109939).sA, { ...tN.addConnection
                                            })
                                        })
                                    }), (0, a.jsx)(K, {
                                        workflowStore: t,
                                        isOpen: w,
                                        onClose: S,
                                        onRequestAuth: b
                                    }), x ? (0, a.jsx)(tH, {
                                        moduleValue: x.moduleValue,
                                        removeOnCancel: x.removeOnCancel,
                                        onAuthDismissed: k,
                                        threadStore: p,
                                        workflowStore: t
                                    }, x.moduleValue.id) : void 0]
                                })]
                            })]
                        })
                    }), R ? (0, a.jsx)("div", {
                        style: tG.validationMessage,
                        children: (0, a.jsx)(n(111010).D, {
                            styleKey: "captionRegular",
                            colorPalette: "blue",
                            colorVariant: "accentPrimary",
                            children: (0, a.jsx)(n(109939).sA, { ...tN.connectMissingFields
                            })
                        })
                    }) : void 0]
                })
            }
            let tY = {
                paddingBlock: 0,
                paddingInline: 0
            };

            function tQ(e) {
                let {
                    workflowStore: t,
                    disabled: o = !1
                } = e, i = (0, n(214328).n)(t, "model");
                return (0, a.jsx)(f, {
                    title: (0, a.jsx)(n(109939).sA, { ...tN.modelTitle
                    }),
                    infoTooltipMessage: tN.modelTooltip,
                    hasUnpublishedChanges: i,
                    style: tY,
                    isDimmed: o,
                    children: (0, a.jsx)(tJ, {
                        workflowStore: t,
                        disabled: o
                    })
                })
            }
            let tX = {
                    triggerButton: {
                        display: "flex",
                        alignItems: "center",
                        minWidth: 0,
                        width: "100%",
                        borderRadius: 13,
                        height: 48,
                        paddingInline: 16,
                        gap: 12
                    },
                    hoveredTriggerButton: {
                        background: n(632079).Tj.background.secondaryTranslucent
                    },
                    triggerText: {
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        flexShrink: 1,
                        minWidth: 0
                    }
                },
                tZ = {
                    pressedTriggerButton: {
                        background: (0, n(64960)._S)({
                            color: n(632079).Tj.background.secondaryTranslucent
                        }).pressed
                    }
                };

            function tJ(e) {
                let {
                    workflowStore: t,
                    disabled: i = !1
                } = e, r = (0, n(109939).tz)(), {
                    workflowValue: s
                } = (0, n(867587).N)(t, !0), l = (0, o.useMemo)(() => {
                    var e;
                    return {
                        type: "workflow",
                        model: null == (e = s.model) ? void 0 : e.type,
                        modelFromUser: void 0 !== s.model
                    }
                }, [s.model]), d = (0, o.useMemo)(() => (0, n(220800).kD)(l), [l]), c = (0, n(682985).uB)(void 0, n(510969).A), u = (0, o.useMemo)(() => ({
                    close: () => {
                        c.setState({
                            open: !1
                        })
                    }
                }), [c]), {
                    modelName: g,
                    modelFamily: p
                } = (0, n(336399).R)({
                    config: l,
                    agentModelConfig: d,
                    intl: r
                });
                return (0, a.jsx)(n(656252).A, {
                    buttonPopupStore: c,
                    popupType: n(656252).z.Popup,
                    placementToOrigin: "top",
                    alignmentToOrigin: "start",
                    originGap: 4,
                    disabled: i,
                    content: () => (0, a.jsx)(n(905859).g, {
                        workflowStore: t,
                        buttonPopupParent: u,
                        showModelCardPopover: !0
                    }),
                    children: e => (0, a.jsxs)(n(988022).p, { ...e,
                        size: "lg",
                        style: tX.triggerButton,
                        hoveredStyle: tX.hoveredTriggerButton,
                        pressedStyle: tZ.pressedTriggerButton,
                        "aria-label": g,
                        disabled: i,
                        children: [(0, a.jsx)(n(437225).H, {
                            modelFamily: p,
                            defaultNoAiFace: !1
                        }), (0, a.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            width: "100%",
                            justifyContent: "space-between",
                            children: [(0, a.jsx)("span", {
                                style: tX.triggerText,
                                children: g
                            }), (0, a.jsx)(n(16275).I, {
                                icon: n(87963).arrowChevronSingleDownIcon,
                                size: "default",
                                colorVariant: "secondary"
                            })]
                        })]
                    })
                })
            }

            function t0() {
                let e = (0, n(345776).T)(),
                    t = (0, n(972740).L)();
                return (0, n(217844)._)({
                    name: "custom_agents",
                    spaceId: null == t ? void 0 : t.id,
                    userId: e
                }), null
            }
            n(632079).Tj.border.secondary
        },
        346349: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                sparklesFillSmallIcon: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.25 1.61 13.5 12.78",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M5.201 2.236a.625.625 0 1 0-1.25 0c0 .389-.249.914-.705 1.37s-.981.705-1.37.705a.625.625 0 0 0 0 1.25c.389 0 .914.25 1.37.706s.705.98.705 1.37a.625.625 0 0 0 1.25 0c0-.39.25-.915.706-1.37s.981-.706 1.37-.706a.625.625 0 1 0 0-1.25c-.389 0-.914-.249-1.37-.705S5.2 2.625 5.2 2.236m5.495 3.42a.625.625 0 0 0-1.25 0c0 .854-.403 1.715-1.058 2.37-.656.656-1.517 1.059-2.37 1.059a.625.625 0 1 0 0 1.25c.853 0 1.714.402 2.37 1.058.655.656 1.058 1.517 1.058 2.37a.625.625 0 0 0 1.25 0c0-.853.402-1.714 1.058-2.37s1.517-1.058 2.37-1.058a.625.625 0 0 0 0-1.25c-.853 0-1.714-.403-2.37-1.058-.656-.656-1.058-1.517-1.058-2.37"
                    })
                },
                i = (0, n(104509).wt)("sparklesFillSmall", o, "fillSmall")
        },
        362419: (e, t, n) => {
            function o(e) {
                let {
                    thread: t,
                    workflowStore: o,
                    spaceId: i
                } = e;
                if (t.run_id) return n(849697).t.createChildStore(o, {
                    table: n(832375).QRx,
                    id: t.run_id,
                    spaceId: i
                }).getStatus()
            }

            function i(e) {
                let {
                    thread: t,
                    filterType: i,
                    workflowStore: r,
                    spaceId: a,
                    includeUnknownStatus: s
                } = e;
                if ("pending" === i) {
                    if (!t.run_id) return !1;
                    let e = o({
                        thread: t,
                        workflowStore: r,
                        spaceId: a
                    });
                    return void 0 === e ? s : "pending" === e
                }
                if (t.run_id) {
                    let e = o({
                        thread: t,
                        workflowStore: r,
                        spaceId: a
                    });
                    if (void 0 === e) return s;
                    if ("running" === e) return !0
                }
                return function(e) {
                    let {
                        thread: t,
                        workflowStore: o,
                        spaceId: i
                    } = e;
                    return n(174148).E.createChildStore(o, {
                        table: n(832375).Toz,
                        id: t.id,
                        spaceId: i
                    }).getIsInferenceLeaseActive()
                }({
                    thread: t,
                    workflowStore: r,
                    spaceId: a
                })
            }

            function r(e) {
                let {
                    threads: t,
                    filterType: n,
                    workflowStore: o,
                    spaceId: r,
                    includeUnknownStatus: a
                } = e;
                return ("pending" === n || "in_progress" === n) && t.some(e => i({
                    thread: e,
                    filterType: n,
                    workflowStore: o,
                    spaceId: r,
                    includeUnknownStatus: a
                }))
            }

            function a(e) {
                let {
                    threads: t,
                    filterType: n,
                    workflowStore: o,
                    spaceId: r,
                    includeUnknownStatus: a
                } = e;
                return "pending" !== n && "in_progress" !== n ? [] : t.filter(e => i({
                    thread: e,
                    filterType: n,
                    workflowStore: o,
                    spaceId: r,
                    includeUnknownStatus: a
                }))
            }
            n.d(t, {
                UR: () => i,
                w5: () => r,
                zq: () => a
            }), n(898992), n(354520), n(737550)
        },
        424561: (e, t, n) => {
            n.d(t, {
                H: () => o
            });

            function o(e) {
                let t = (0, n(533992).v3)(),
                    o = (0, n(345776).T)(),
                    i = (0, n(972740).L)();
                return (0, n(682985).K8)(() => {
                    if (e instanceof n(970831).B && e.isPersonProfile() && n(218744).default.checkGate({
                            gateName: "person_profile_deletion"
                        })) {
                        let t = e.getLastEditedByPointer();
                        if (t && (0, n(268033).B_)(t)) return !1
                    }
                    if (null != i && i.canAdmin() && (0, n(630131).Y)(t, {
                            name: "configurable_deletion_and_retention_settings",
                            spaceId: null == i ? void 0 : i.id,
                            userId: o
                        })) return !0;
                    if (e instanceof n(356912).m) {
                        if (!e.canEditCollection()) return !1;
                        let t = e.getParentStore();
                        return !!t && t.canEdit()
                    }
                    if (e instanceof n(970831).B) {
                        if (!e.canEdit() || !e.isNavigableBlock()) return !1;
                        let t = e.getParentStore();
                        return !t || (!e.isTemplate() || !(t instanceof n(356912).m) || !!t.canEditCollection()) && t.canEdit()
                    }
                    if (e instanceof n(360851).N) return e.canEdit();
                    (0, n(722371).HB)(e)
                }, [i, t, e, o])
            }
        },
        438460: (e, t, n) => {
            n.d(t, {
                W: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.8 12.8",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M12.848 2.8a3.145 3.145 0 0 0-4.448 0L6.918 4.283a.625.625 0 0 0 .884.883l1.482-1.482c.74-.74 1.94-.74 2.68 0l.294.294c.74.74.74 1.94 0 2.68l-1.092 1.093.197-.012a3.9 3.9 0 0 1 1.366.16l.043.014.37-.37a3.145 3.145 0 0 0 0-4.449z"
                        }), (0, o.jsx)("path", {
                            d: "M10.472 5.47a.625.625 0 0 0-.884 0L5.229 9.83a.625.625 0 1 0 .884.883l4.359-4.359a.625.625 0 0 0 0-.883"
                        }), (0, o.jsx)("path", {
                            d: "M5.167 6.918a.625.625 0 0 0-.884 0L2.8 8.4a3.146 3.146 0 0 0 0 4.448l.294.294a3.145 3.145 0 0 0 4.449 0l.37-.37-.013-.043a3.9 3.9 0 0 1-.16-1.366l.011-.197-1.092 1.092c-.74.74-1.94.74-2.68 0l-.295-.294c-.74-.74-.74-1.94 0-2.68L5.167 7.8a.625.625 0 0 0 0-.883M11.6 8.525A3.073 3.073 0 0 0 8.525 11.6 3.075 3.075 0 1 0 11.6 8.525m-.425 1.409a.425.425 0 0 1 .85 0v1.241h1.242a.425.425 0 0 1 0 .85h-1.242v1.242a.425.425 0 1 1-.85 0v-1.242H9.934a.425.425 0 0 1 0-.85h1.241z"
                        })]
                    })
                },
                r = (0, n(104509).wt)("linkBadgePlusSmall", i, "small")
        },
        440601: (e, t, n) => {
            n.d(t, {
                Kh: () => r,
                Nq: () => i,
                RN: () => d,
                U: () => a,
                nh: () => l,
                u7: () => s
            });
            var o = n(296540);

            function i() {
                let {
                    isElectronWindows: e
                } = (0, n(533992).Y0)(), t = (0, n(682985).O$)(n(584257).b), i = (0, n(682985).K8)(() => n(584257).A.state.zoomFactor || n(196441).rx, []), r = e && !t;
                return (0, o.useMemo)(() => r ? (0, n(196441).yA)(i) + 4 : n(986939).A.isMobile ? 4 : 10, [r, i])
            }

            function r({
                shouldRenderTemplateGalleryTopbar: e
            }) {
                let t = (0, n(533992).v3)(),
                    i = (0, n(682985).K8)(() => n(584257).A.state.zoomFactor, []),
                    a = (0, n(682985).O$)(n(584257).b),
                    s = (0, n(682985).O$)((0, n(846044).e)(t)),
                    l = (0, n(682985).K8)(() => (0, n(712358).K)(t), [t]),
                    d = (0, n(682985).K8)(() => n(550830).default.isPanelPinnedState(), []),
                    c = (0, n(682985).K8)(() => n(896597).A.state.isFullScreen, []),
                    {
                        device: u
                    } = t,
                    g = i || n(196441).rx,
                    p = u.isElectronMac && (!s || !l && !d) && !c && !a,
                    f = u.isElectronWindows && !a,
                    m = f && (!s || !l && !d),
                    h = n(801113).ek(u.isElectronMac);
                return e && (h = n(801113).Hi), (0, o.useMemo)(() => ({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    overflow: "hidden",
                    height: h,
                    paddingInlineStart: p ? (0, n(196441).n$)(g) : m ? 46 : n(986939).A.isMobile ? 4 : 12,
                    paddingInlineEnd: f ? (0, n(196441).yA)(g) + 4 : n(986939).A.isMobile ? 4 : 10
                }), [h, p, g, m, f])
            }

            function a({
                store: e,
                shouldRenderTemplateGalleryTopbar: t,
                isBrowserFullScreen: o
            }) {
                let i = (0, n(533992).v3)(),
                    r = (0, n(533992).Y0)(),
                    s = (0, n(533992).WS)(),
                    l = (0, n(682985).K8)(() => "meet" === i.RouterStore.state.route.name, [i.RouterStore]),
                    d = (0, n(682985).K8)(() => ((0, n(933062).lU)(e) || l) && 0 === n(465361).A.state.banners.length, [e, l]),
                    c = n(801113).ek(r.isElectronMac);
                t && (c = 2 * n(801113).Hi);
                let u = (0, n(682985).K8)(() => n(352202).Z8(), []),
                    g = (0, n(682985).O$)((0, n(348295).$)(i)),
                    p = (0, n(682985).K8)(() => n(584257).A.state.zoomFactor, []),
                    f = n(801113).pz(r.isElectronMac, o, p || n(196441).rx);
                return (0, n(960253).I)(() => ({
                    header: {
                        background: d && !s ? "transparent" : n(632079).Tj.background.primary,
                        maxWidth: "100vw",
                        zIndex: 100,
                        WebkitUserSelect: "none",
                        userSelect: "none",
                        position: "relative"
                    },
                    container: {
                        width: `calc(100% - ${u}px)`,
                        maxWidth: "100vw",
                        height: c,
                        opacity: +!g,
                        transition: `
						opacity ${n(97143).L}ms,
						color ${n(97143).L}ms
					`,
                        position: "relative",
                        insetInlineStart: u
                    },
                    electronTopbarSidebarMousePeekArea: {
                        position: "absolute",
                        top: 0,
                        bottom: -n(132261).qe,
                        width: `${f}px`
                    }
                }), [d, s, u, g, c, f])
            }
            let s = 28,
                l = 28,
                d = {
                    iconButton: {
                        width: 28,
                        height: 28,
                        marginInlineEnd: 2
                    },
                    icon: {
                        height: n(104509).Ev.default,
                        width: n(104509).Ev.default,
                        fill: n(632079).Tj.icon.primary
                    },
                    tabletIcon: {
                        height: n(104509).lD.lg,
                        width: n(104509).lD.lg,
                        fill: n(632079).Tj.icon.primary
                    }
                }
        },
        442219: (e, t, n) => {
            n.d(t, {
                w: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.12 2.37 17.51 15.26",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M3.442 13.102a.625.625 0 0 1-.884 0L.304 10.848a.625.625 0 0 1 .884-.884l1.187 1.187V10a7.625 7.625 0 1 1 2.303 5.46.625.625 0 1 1 .872-.895A6.375 6.375 0 1 0 3.625 10v1.151l1.187-1.187a.625.625 0 1 1 .884.884z"
                        }), (0, o.jsx)("path", {
                            d: "M9.375 5.725a.625.625 0 0 1 1.25 0v3.65H13.6a.625.625 0 0 1 0 1.25H10A.625.625 0 0 1 9.375 10z"
                        })]
                    })
                },
                r = (0, n(104509).wt)("clockArrowBack", i, "default")
        },
        494341: (e, t, n) => {
            n.d(t, {
                Es: () => s,
                GZ: () => l,
                LH: () => u,
                Sk: () => d,
                VF: () => a,
                Y5: () => f,
                c3: () => y,
                dV: () => m,
                iQ: () => i,
                mQ: () => r,
                oX: () => p,
                qv: () => w,
                vP: () => x,
                wF: () => c,
                yi: () => h
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(803949), n(581454), n(737550), n(296540);
            var o = n(474848);
            async function i({
                environment: e,
                permissionsInviteStoreState: t,
                from: r,
                spaceStore: a
            }) {
                let s = (0, o.jsx)(n(109939).sA, {
                        id: "permissionsInvite.closeInviteDialog.confirmationMessage",
                        defaultMessage: "Your changes have not been saved. Discard changes?"
                    }),
                    l = (0, o.jsx)(n(109939).sA, {
                        id: "permissionsInvite.closeInviteDialog.confirmationButton.label",
                        defaultMessage: "Yes"
                    }),
                    d = (0, o.jsx)(n(109939).sA, {
                        id: "permissionsInvite.closeInviteDialog.cancelButton.label",
                        defaultMessage: "Cancel"
                    });
                if (t.inviteTargets.length > 0) {
                    let {
                        accept: o
                    } = await n(647095).Gh({
                        message: s,
                        acceptLabel: l,
                        cancelLabel: d
                    });
                    return n(179701).iv({ ...p(e, t, a),
                        from: r,
                        discard_changes: o
                    }), !o
                }
                return !1
            }

            function r(e) {
                let {
                    target: t,
                    permissionsInviteStore: n
                } = e;
                return n.state.inviteTargets.find(e => "newUser" === t.type ? "newUser" === e.type && t.value.email === e.value.email : "group" === t.type ? e.type === t.type && e.value.group_id === t.value.group_id : "agent" === t.type ? e.type === t.type && e.value.workflowId === t.value.workflowId : e.type === t.type && e.value.id === t.value.id)
            }

            function a(e) {
                let {
                    targetStore: t,
                    permissionsInviteStore: n,
                    userTarget: o
                } = e;
                return !!r({
                    permissionsInviteStore: n,
                    target: o
                }) || "existingUser" === o.type && c({
                    target: o,
                    store: t
                })
            }

            function s(e) {
                var t;
                let {
                    targetStore: o,
                    permissionsInviteStore: i,
                    currentInviteActors: s
                } = e;
                if (!s) return {
                    inviteUsers: [],
                    inviteGroups: []
                };
                if ((0, n(966980).nw)(o)) return s;
                let l = s.inviteUsers.filter(e => !a({
                    targetStore: o,
                    permissionsInviteStore: i,
                    userTarget: e
                }));
                return {
                    inviteGroups: s.inviteGroups.filter(e => !r({
                        permissionsInviteStore: i,
                        target: e
                    }) && !c({
                        target: e,
                        store: o
                    })),
                    inviteUsers: l,
                    inviteAgents: null == (t = s.inviteAgents) ? void 0 : t.filter(e => !r({
                        permissionsInviteStore: i,
                        target: e
                    }) && !c({
                        target: e,
                        store: o
                    })),
                    importedContacts: s.importedContacts
                }
            }

            function l(e, t) {
                if (!e || !t || 0 === e.length || 0 === t.length) return t;
                let n = new Set(e.map(e => e.value.email.toLowerCase()));
                return t.filter(e => !n.has(e.value.email.toLowerCase()))
            }

            function d(e) {
                let {
                    intl: t,
                    target: o
                } = e;
                switch (o.type) {
                    case "newUser":
                        return o.value.email;
                    case "existingUser":
                        return (0, n(413818).c6)(t, o.value);
                    case "group":
                        return (0, n(405461).Pf)({
                            intl: t,
                            groupName: o.value.name
                        });
                    case "agent":
                        return o.value.name;
                    default:
                        (0, n(722371).HB)(o)
                }
            }

            function c(e) {
                let {
                    target: t,
                    store: o
                } = e;
                if (!o.isDefined()) return !1;
                if ((0, n(966980).$R)(o)) {
                    let e = t.type;
                    return "existingUser" === e ? !!(0, n(887652).p)({
                        teamStore: o,
                        userId: t.value.id
                    }) : "group" === e && (0, n(175110).J)({
                        teamStore: o,
                        groupId: t.value.group_id
                    })
                }
                if (o instanceof n(970831).B || o instanceof n(356912).m || o instanceof n(360851).N) switch (t.type) {
                    case "existingUser":
                        return o.getPermissionItems().some(e => (0, n(642157).B2)(e) && e.user_id === t.value.id);
                    case "group":
                        return o.getPermissionItems().some(e => (0, n(642157).Ds)(e) && e.group_id === t.value.group_id);
                    case "agent":
                        return function(e) {
                            let {
                                store: t,
                                botId: o
                            } = e;
                            return t.getPermissionItems().some(e => (0, n(642157).P3)(e) && e.bot_id === o && "none" !== e.role && !e.access_revoked)
                        }({
                            store: o,
                            botId: t.value.botId
                        });
                    case "newUser":
                        return !1;
                    default:
                        return (0, n(722371).HB)(t)
                }
                if (o instanceof n(695906).SpaceStore)
                    if ("existingUser" === t.type) return !!(0, n(993077).dp)(o, t.value.id).isMember();
                    else return !1;
                if ((0, n(966980).nw)(o)) return !1;
                (0, n(722371).HB)(o)
            }

            function u(e) {
                let {
                    environment: t,
                    permissionsInviteStore: o,
                    store: i,
                    renderInShareModal: r
                } = e;
                if ((0, n(966980).Yu)(i)) {
                    let t = g({ ...e,
                        store: i
                    });
                    o.setState({
                        modalOpen: !r,
                        tokenQuery: "",
                        inviteTargets: [],
                        inviteRole: t,
                        table: n(832375).NXh,
                        flowId: n(92513).JW(),
                        inputFocus: "invitee",
                        emailMessage: ""
                    }), n(179701).VV()
                } else {
                    let a = g({ ...e,
                        store: i
                    });
                    o.setState({
                        modalOpen: !r,
                        tokenQuery: "",
                        inviteTargets: [],
                        inviteRole: a,
                        table: i.table,
                        flowId: n(92513).JW(),
                        inputFocus: "invitee",
                        emailMessage: ""
                    }), n(179701).F1({ ...p(t, e.permissionsInviteStore.state, (0, n(974410).f)(i))
                    })
                }
            }

            function g(e) {
                let {
                    store: t,
                    isSubscribed: o
                } = e;
                return (0, n(966980).Yu)(t) ? o ? "member" : "owner" : (0, n(216260).El)() ? "editor" : "read_and_write"
            }

            function p(e, t, o) {
                let {
                    inviteRole: i,
                    flowId: r
                } = t, a = (0, n(330870).a)(), s = null == a ? void 0 : a.getRole(), l = null == o ? void 0 : o.getRole(), {
                    inviteTargets: d,
                    emailMessage: c
                } = t, u = (0, n(216260).AI)(), g = {
                    invite_flow_id: r,
                    user_count: 0,
                    is_bot: !1,
                    invite_message_length: (null == c ? void 0 : c.length) ? ? 0,
                    ...s && {
                        page_current_user_role: s
                    },
                    ...l && {
                        space_role: l
                    },
                    ...u && {
                        subscription_tier: u
                    }
                };
                if (0 === d.length) return g;
                let p = d.filter(n(64273).Gz).length,
                    m = d.filter(n(64273).ju).length + p,
                    h = f(i);
                return { ...g,
                    role: h,
                    user_count: m,
                    new_user_count: p
                }
            }

            function f(e) {
                return (0, n(729052).kI)(e) ? (0, n(729052).ps)(e) : e
            }

            function m(e) {
                if ("group" === e.type) {
                    let t = e.value.getGroupId(),
                        o = n(801062).h.getGroupData(t);
                    if (o) return o.membershipTypes.includes("restricted_member")
                }
                return "existingUser" === e.type && "restricted_member" === e.membershipType
            }

            function h(e) {
                return "newUser" === e.type || "existingUser" === e.type && ("page_guest" === e.membershipType || "none" === e.membershipType)
            }

            function w(e) {
                return h(e) ? "rgba(246, 192, 80, 0.26)" : void 0
            }

            function y(e) {
                var t;
                let i, r, {
                    inviteTargets: a,
                    recordStore: s,
                    canEditSpaceMembership: l
                } = e;
                if (0 === a.length || !s) return null;
                let {
                    inviteTargetGuests: c,
                    inviteTargetMembers: u
                } = (i = [], r = [], a.forEach(e => {
                    h(e) ? i.push(e) : r.push(e)
                }), {
                    inviteTargetGuests: i,
                    inviteTargetMembers: r
                }), g = l ? [...u, ...c] : u, p = l ? [] : c, f = n(962299).A.getIntl(), m = (0, n(966980)._p)(s) ? null == (t = s.getBlockTitleStore()) ? void 0 : t.getValue() : s.getName();
                return l || 0 === p.length ? (0, o.jsx)(n(109939).sA, {
                    id: "permissionsInvite.inviteConfirmationToast.usersAddedMessage",
                    defaultMessage: "{numberOfTargets, plural, one {Added {targetName} to {recordName}} other {Added {numberOfTargets} people to {recordName}}}",
                    values: {
                        numberOfTargets: g.length,
                        targetName: d({
                            intl: f,
                            target: g[0]
                        }),
                        recordName: m
                    }
                }) : 0 === g.length ? (0, o.jsx)(n(109939).sA, {
                    id: "permissionsInvite.inviteConfirmationToast.inviteRequestedMessage",
                    defaultMessage: "{numberOfTargets, plural, one {Requested {targetName} for approval} other {Requested {numberOfTargets} invites for approval}}",
                    values: {
                        numberOfTargets: p.length,
                        targetName: d({
                            intl: f,
                            target: p[0]
                        })
                    }
                }) : (0, o.jsx)(n(109939).sA, {
                    id: "permissionsInvite.inviteConfirmationToast.userAddedAndRequestedText",
                    defaultMessage: "{numberOfAddedTargets, plural, one {Added {addedTargetName}} other {Added {numberOfAddedTargets} people}} & {numberOfRequestedTargets, plural, one {requested {requestedTargetName} for approval} other {requested {numberOfRequestedTargets} people for approval}}",
                    values: {
                        numberOfAddedTargets: g.length,
                        addedTargetName: d({
                            intl: f,
                            target: g[0]
                        }),
                        numberOfRequestedTargets: p.length,
                        requestedTargetName: d({
                            intl: f,
                            target: p[0]
                        })
                    }
                })
            }

            function x(e) {
                let t = n(728372).AppStoreSidebarSpaceStore.state;
                if ("existingUser" !== e.type) return "none";
                let o = (0, n(993077).sE)(t, e.value.id);
                return (null == o ? void 0 : o.getMembershipType()) ? ? "none"
            }
        },
        522643: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var o = n(474848);
            let i = function(e) {
                let t = (0, n(632079).O4)({
                        theme: "dark"
                    }),
                    i = {
                        display: "inline-flex",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                        borderRadius: 6,
                        height: 28,
                        padding: "0 8px",
                        lineHeight: 1.2,
                        fontSize: 14,
                        color: t.text.primary,
                        border: `1px solid ${t.text.primary}`,
                        gap: 6,
                        ...e.disabled ? {
                            opacity: .4
                        } : {}
                    };
                return (0, o.jsxs)(n(64960).Ay, {
                    disabled: e.disabled,
                    onClick: e.onClick,
                    style: i,
                    children: [e.icon, e.children]
                })
            }
        },
        580944: (e, t, n) => {
            n.d(t, {
                W: () => W
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(581454), n(908872);
            var o = n(296540);
            async function i(e) {
                let {
                    environment: t,
                    workflowId: n,
                    spaceId: o,
                    pausedReason: i
                } = e;
                try {
                    var r;
                    let e = await t.api.callCellCompatibleApi({
                        eventName: "listPausedWorkflowRuns",
                        environment: t,
                        data: {
                            workflowId: n,
                            spaceId: o,
                            pausedReason: i,
                            countOnly: !0
                        },
                        cellNavigation: {
                            spaceId: o
                        }
                    });
                    if ("success" === e.type) return {
                        count: e.data.count
                    };
                    return {
                        count: 0,
                        error: (null == (r = e.error) ? void 0 : r.message) || "Failed to get paused run count"
                    }
                } catch (e) {
                    return {
                        count: 0,
                        error: e instanceof Error ? e.message : "Failed to get paused run count"
                    }
                }
            }
            n(16280);
            var r = n(474848);
            let a = {
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingBlockStart: 96,
                height: "100%"
            };

            function s({
                onRefreshClick: e
            }) {
                return (0, r.jsx)("div", {
                    style: a,
                    children: (0, r.jsx)(n(782157).A, {
                        title: (0, r.jsx)(n(109939).sA, {
                            defaultMessage: "No chats yet",
                            id: "workflowThreads.noThreadsYet"
                        }),
                        description: (0, r.jsx)(n(109939).sA, {
                            defaultMessage: "Chats will appear here",
                            id: "workflowThreads.noThreadsYetDescription"
                        }),
                        cta: (0, r.jsx)(n(548436).A, {
                            iconLeading: {
                                icon: n(983012).w,
                                size: "sm"
                            },
                            size: "lg",
                            onClick: e,
                            children: (0, r.jsx)(n(109939).sA, {
                                defaultMessage: "Refresh",
                                id: "workflowRuns.refreshButton"
                            })
                        })
                    })
                })
            }
            let l = {
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingBlockStart: 96,
                height: "100%"
            };

            function d() {
                return (0, r.jsx)("div", {
                    style: l,
                    children: (0, r.jsx)(n(782157).A, {
                        description: "",
                        title: "",
                        icon: () => (0, r.jsx)(n(517334).k, {
                            size: 22
                        })
                    })
                })
            }
            async function c(e) {
                let {
                    environment: t,
                    workflowId: o,
                    spaceId: i,
                    pausedReason: r
                } = e;
                try {
                    let e = await t.api.callCellCompatibleApi({
                        eventName: "listPausedWorkflowRuns",
                        environment: t,
                        data: {
                            workflowId: o,
                            spaceId: i,
                            pausedReason: r,
                            countOnly: !1
                        },
                        cellNavigation: {
                            spaceId: i
                        }
                    });
                    if ("success" !== e.type) {
                        var a;
                        return {
                            successCount: 0,
                            errorCount: 0,
                            totalCount: 0,
                            error: (null == (a = e.error) ? void 0 : a.message) || "Failed to list paused runs"
                        }
                    }
                    let s = e.data.runIds;
                    if (0 === s.length) return {
                        successCount: 0,
                        errorCount: 0,
                        totalCount: 0
                    };
                    let l = (0, n(763230).iv)(s, n(548161).IZ),
                        d = 0,
                        c = 0;
                    for (let e of l) {
                        let n = await t.api.callCellCompatibleApi({
                            eventName: "reenqueueWorkflowAutomation",
                            environment: t,
                            data: {
                                runIds: e,
                                spaceId: i
                            },
                            cellNavigation: {
                                spaceId: i
                            }
                        });
                        if ("success" === n.type)
                            for (let e of n.data.results) "success" === e.status ? d++ : c++;
                        else c += e.length
                    }
                    return {
                        successCount: d,
                        errorCount: c,
                        totalCount: s.length
                    }
                } catch (e) {
                    return {
                        successCount: 0,
                        errorCount: 0,
                        totalCount: 0,
                        error: e instanceof Error ? e.message : "Failed to re-enqueue runs"
                    }
                }
            }
            async function u(e) {
                let {
                    environment: t,
                    workflowStore: o,
                    amount: i,
                    reason: r
                } = e, a = o.getDraftData(), s = null == a ? void 0 : a.usage_limit, l = null == a ? void 0 : a.paused_reason, d = n(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }), c = (null == d ? void 0 : d.default_run_limit) ? ? 100, u = (null == s ? void 0 : s.type) === "runLimit" ? s.maximum : c, g = u + i;
                (0, n(599231).rQ)({
                    workflowId: o.id,
                    amountRequested: i,
                    reason: r,
                    currentLimit: u,
                    newLimit: g
                });
                let p = (0, n(377796).createAndCommit)({
                    environment: t,
                    userAction: "WorkflowLimitIncreaseRequest",
                    canUndo: !1,
                    cellTarget: {
                        spaceWithId: o.pointer.spaceId
                    },
                    perform: e => {
                        let t = {
                            pointer: o.pointer,
                            command: "set",
                            path: ["data", "usage_limit"],
                            args: {
                                type: "runLimit",
                                maximum: g
                            }
                        };
                        if ((0, n(421439).y4)({
                                store: o,
                                operation: t,
                                transaction: e
                            }), (null == l ? void 0 : l.reason) === "runLimit") {
                            let t = {
                                pointer: o.pointer,
                                command: "set",
                                path: ["data", "paused_reason"],
                                args: void 0
                            };
                            (0, n(421439).y4)({
                                store: o,
                                operation: t,
                                transaction: e
                            });
                            let i = {
                                pointer: o.pointer,
                                command: "set",
                                path: ["data", "status"],
                                args: "runnable"
                            };
                            (0, n(421439).y4)({
                                store: o,
                                operation: i,
                                transaction: e
                            })
                        }
                    }
                });
                await p.serverCommitResult
            }

            function g(e) {
                let {
                    onClick: t
                } = e, o = (0, n(109939).tz)();
                return (0, r.jsx)(n(51831).m, {
                    content: () => (0, r.jsx)(n(109939).sA, {
                        id: "workflow.runLimit.helpTooltip",
                        defaultMessage: "Learn more"
                    }),
                    children: e => (0, r.jsx)(n(374533).A, { ...e,
                        href: (0, n(442564).x)("guides.agentBestPractices"),
                        external: !0,
                        onClick: t,
                        ariaLabel: o.formatMessage({
                            id: "workflow.runLimit.helpAriaLabel",
                            defaultMessage: "Learn about agent best practices"
                        }),
                        icon: n(211052).questionMarkCircleSmallIcon,
                        size: "sm",
                        variant: "plain",
                        colorVariant: "tertiary"
                    })
                })
            }
            let p = (0, n(222024).t)(),
                f = [100, 250, 500, 1e3, 1e4, 1e5],
                m = {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    cursor: "pointer"
                },
                h = {
                    marginTop: 2
                },
                w = {
                    width: "100%"
                },
                y = {
                    width: "100%"
                },
                x = {
                    flex: 1,
                    justifyContent: "center"
                },
                v = {
                    width: "100%",
                    justifyContent: "flex-start",
                    textAlign: "start"
                },
                b = {
                    position: "relative",
                    top: 3
                };

            function k(e) {
                let {
                    workflowStore: t,
                    isOpen: a,
                    onClose: s
                } = e, l = (0, n(533992).v3)(), d = (0, n(109939).tz)(), k = (0, n(682985).K8)(() => {
                    let e = t.getDraftData(),
                        o = null == e ? void 0 : e.usage_limit,
                        i = n(218744).default.getConfig({
                            configName: "custom_agent_sub_features"
                        }),
                        r = (null == i ? void 0 : i.default_run_limit) ? ? 100;
                    return (null == o ? void 0 : o.type) === "runLimit" ? o.maximum : r
                }, [t]), j = (0, n(682985).K8)(() => {
                    let e = n(218744).default.getConfig({
                        configName: "custom_agent_sub_features"
                    });
                    return (null == e ? void 0 : e.available_run_increases) ? ? f
                }, []), S = (0, o.useMemo)(() => [...Array.isArray(j) ? j : f], [j]), [M, C] = (0, o.useState)(100), [I, A] = (0, o.useState)(!1), [T, D] = (0, o.useState)(!1), [_, P] = (0, o.useState)(void 0), [L, R] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    S.includes(M) || C(S.includes(100) ? 100 : S[0] ? ? 100)
                }, [S, M]), (0, o.useEffect)(() => {
                    if (!a) return;
                    let e = t.getSpaceId();
                    e && (R(!0), i({
                        environment: l,
                        workflowId: t.id,
                        spaceId: e,
                        pausedReason: "runLimit"
                    }).then(e => {
                        P(e.count), R(!1)
                    }))
                }, [a, t, l]);
                let B = (0, o.useCallback)(() => {
                        D(e => !e)
                    }, []),
                    K = (0, n(682985).K8)(() => (0, n(575422).m)(t, d).name, [t, d]),
                    E = (0, o.useCallback)(async () => {
                        if (!I) {
                            A(!0);
                            try {
                                let e = !1;
                                if (await u({
                                        environment: l,
                                        workflowStore: t,
                                        amount: M,
                                        reason: ""
                                    }), T && _ && _ > 0) {
                                    let o = t.getSpaceId();
                                    if (o) {
                                        let i = await c({
                                            environment: l,
                                            workflowId: t.id,
                                            spaceId: o,
                                            pausedReason: "runLimit"
                                        });
                                        i.successCount > 0 ? (e = !0, n(436555).D6({
                                            label: d.formatMessage({
                                                defaultMessage: "Resumed {count} {count, plural, one {run} other {runs}}.",
                                                id: "workflows.continueLimitModal.successWithReenqueue"
                                            }, {
                                                count: i.successCount
                                            })
                                        })) : n(436555).D6({
                                            label: d.formatMessage({
                                                defaultMessage: "Resumed agent successfully",
                                                id: "workflows.continueLimitModal.success"
                                            })
                                        })
                                    }
                                } else n(436555).D6({
                                    label: d.formatMessage({
                                        defaultMessage: "Resumed agent successfully",
                                        id: "workflows.continueLimitModal.success"
                                    })
                                });
                                s({
                                    didReenqueueRuns: e
                                })
                            } catch (e) {
                                p.error({
                                    from: "ContinueRunLimitModal",
                                    type: "requestWorkflowLimitIncrease",
                                    error: e
                                }), n(647095).f1(d.formatMessage({
                                    defaultMessage: "Failed to continue",
                                    id: "workflows.continueLimitModal.error"
                                }))
                            } finally {
                                A(!1)
                            }
                        }
                    }, [l, t, M, d, s, I, T, _]),
                    V = d.formatMessage({
                        id: "workflows.continueLimitModal.resumeWithAmount",
                        defaultMessage: "Resume for {amount} runs"
                    }, {
                        amount: d.formatNumber(M)
                    });
                return (0, r.jsx)(n(833503).s, {
                    isOpen: a,
                    onDismiss: s,
                    children: () => (0, r.jsxs)(n(4458).VP, {
                        gap: 32,
                        padding: 32,
                        width: 380,
                        children: [(0, r.jsxs)(n(4458).VP, {
                            alignItems: "flex-start",
                            gap: 12,
                            children: [(0, r.jsx)(n(466113).G, {
                                workflowStore: t
                            }), (0, r.jsx)(n(111010).D, {
                                styleKey: "titleSemibold",
                                colorVariant: "primary",
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "workflows.continueLimitModal.title",
                                    defaultMessage: "Resume {agentName}?",
                                    values: {
                                        agentName: K
                                    }
                                })
                            }), (0, r.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "workflows.continueLimitModal.description",
                                    defaultMessage: "We paused it after {count} {count, plural, one {run} other {runs}} to avoid unnecessary activity{helpIcon}",
                                    values: {
                                        count: k,
                                        helpIcon: (0, r.jsx)("span", {
                                            style: b,
                                            children: (0, r.jsx)(g, {})
                                        })
                                    }
                                })
                            })]
                        }), (0, r.jsxs)(n(4458).VP, {
                            gap: 10,
                            children: [!L && (_ ? ? 0) > 0 ? (0, r.jsxs)("div", {
                                style: m,
                                onClick: B,
                                onKeyDown: e => {
                                    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), B())
                                },
                                role: "button",
                                tabIndex: 0,
                                children: [(0, r.jsx)(n(349050).S, {
                                    style: h,
                                    checked: T,
                                    size: 16,
                                    onClick: e => {
                                        e.stopPropagation(), B()
                                    }
                                }), (0, r.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    children: (0, r.jsx)(n(109939).sA, {
                                        id: "workflows.continueLimitModal.resumeRuns",
                                        defaultMessage: "Resume {count} paused runs",
                                        values: {
                                            count: _ ? ? 0
                                        }
                                    })
                                })]
                            }) : void 0, (0, r.jsxs)(n(4458).VP, {
                                gap: 12,
                                children: [(0, r.jsx)(n(656252).A, {
                                    popupType: n(656252).z.Popup,
                                    alignmentToOrigin: "start",
                                    placementToOrigin: "bottom",
                                    originGap: 4,
                                    content: ({
                                        close: e
                                    }) => (0, r.jsx)(n(747369).A, {
                                        menuType: n(649476).gu.Popup,
                                        children: (0, r.jsx)(n(558045).A, {
                                            initialFocus: 0,
                                            type: n(558045).O.Vertical,
                                            sections: [{
                                                key: "amount-options",
                                                render: e => (0, r.jsx)(n(844565).A, { ...e
                                                }),
                                                items: S.map(t => ({
                                                    key: t,
                                                    action: () => {
                                                        C(t), e()
                                                    },
                                                    render: e => (0, r.jsx)(n(95582).A, { ...e,
                                                        title: d.formatMessage({
                                                            id: "workflows.continueLimitModal.runsOption",
                                                            defaultMessage: "{amount} runs"
                                                        }, {
                                                            amount: d.formatNumber(t)
                                                        }),
                                                        buttonStyle: v
                                                    })
                                                }))
                                            }]
                                        })
                                    }),
                                    children: e => (0, r.jsx)(n(322354).I, {
                                        color: "blue",
                                        size: "lg",
                                        style: y,
                                        mainButtonStyle: x,
                                        title: I ? d.formatMessage({
                                            id: "workflows.continueLimitModal.submitting",
                                            defaultMessage: "Resuming…"
                                        }) : V,
                                        onClick: E,
                                        onDropdownClick: t => e.onClick(t),
                                        dropdownAriaLabel: d.formatMessage({
                                            id: "workflows.continueLimitModal.amountDropdownAriaLabel",
                                            defaultMessage: "Select run limit amount"
                                        }),
                                        disabled: I,
                                        disableDropdown: I,
                                        isLoading: I
                                    })
                                }), (0, r.jsx)(n(548436).A, {
                                    onClick: () => s(),
                                    disabled: I,
                                    size: "lg",
                                    style: w,
                                    children: (0, r.jsx)(n(109939).sA, {
                                        id: "workflows.continueLimitModal.cancel",
                                        defaultMessage: "Cancel"
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
            let j = {
                container: {
                    paddingTop: 14,
                    paddingInlineEnd: 20,
                    paddingBottom: 14,
                    paddingInlineStart: 20,
                    backgroundColor: n(632079).Tj.background.primary,
                    border: `1px solid ${n(632079).Tj.border.primary}`,
                    borderRadius: 14
                }
            };

            function S(e) {
                let {
                    workflowId: t
                } = e, i = (0, o.useRef)(!1);
                return (0, o.useEffect)(() => {
                    i.current || (i.current = !0, (0, n(599231).Bw)({
                        workflow_id: t,
                        banner_type: "paused_by_notion",
                        pause_reason: "disabledByNotion"
                    }))
                }, [t]), (0, r.jsxs)(n(4458).VP, {
                    style: j.container,
                    gap: 4,
                    marginTop: 12,
                    marginBottom: 12,
                    children: [(0, r.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        colorVariant: "primary",
                        children: (0, r.jsx)(n(109939).sA, {
                            id: "workflows.pausedByNotionBanner.title",
                            defaultMessage: "This agent has been paused by Notion"
                        })
                    }), (0, r.jsx)(n(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: (0, r.jsx)(n(109939).sA, {
                            id: "workflows.pausedByNotionBanner.message",
                            defaultMessage: "Please reach out to Notion support for help resuming it."
                        })
                    })]
                })
            }
            let M = {
                container: {
                    position: "relative",
                    paddingTop: 14,
                    paddingBottom: 14,
                    backgroundColor: n(632079).Tj.background.primary,
                    border: `1px solid ${n(632079).Tj.border.primary}`,
                    borderRadius: 14
                },
                dismissButton: {
                    position: "absolute",
                    top: 4,
                    insetInlineEnd: 4
                }
            };

            function C(e) {
                let {
                    workflowStore: t,
                    pausedRunCount: i,
                    isCreditLimitEnabled: a,
                    onReenqueue: s,
                    onDismiss: l
                } = e, d = (0, n(533992).v3)(), u = (0, n(109939).tz)(), [g, p] = (0, o.useState)(!1), f = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    f.current || (f.current = !0, (0, n(599231).Bw)({
                        workflow_id: t.id,
                        banner_type: "reenqueue_paused_runs",
                        pause_reason: void 0
                    }))
                }, [t.id]);
                let m = (0, o.useCallback)(async () => {
                        let e = t.getSpaceId();
                        if (e) {
                            (0, n(599231).HH)({
                                workflow_id: t.id,
                                banner_type: "reenqueue_paused_runs",
                                pause_reason: void 0,
                                action: "reenqueue"
                            }), p(!0);
                            try {
                                let o = (await (0, n(975162).lX)(n(425749).jX, n(425749).jX.length, n => c({
                                    environment: d,
                                    workflowId: t.id,
                                    spaceId: e,
                                    pausedReason: n
                                }))).reduce((e, t) => ({
                                    successCount: e.successCount + t.successCount,
                                    errorCount: e.errorCount + t.errorCount,
                                    totalCount: e.totalCount + t.totalCount,
                                    error: e.error ? ? t.error
                                }), {
                                    successCount: 0,
                                    errorCount: 0,
                                    totalCount: 0,
                                    error: void 0
                                });
                                o.successCount > 0 ? (n(436555).D6({
                                    label: u.formatMessage({
                                        id: "workflows.reenqueueBanner.success",
                                        defaultMessage: "Resumed {count} {count, plural, one {run} other {runs}}"
                                    }, {
                                        count: o.successCount
                                    })
                                }), null == s || s(o.successCount), l()) : o.error && n(436555).D6({
                                    label: u.formatMessage({
                                        id: "workflows.reenqueueBanner.error",
                                        defaultMessage: "Failed to resume runs"
                                    })
                                })
                            } finally {
                                p(!1)
                            }
                        }
                    }, [d, t, u, s, l]),
                    h = (0, o.useCallback)(() => {
                        (0, n(599231).HH)({
                            workflow_id: t.id,
                            banner_type: "reenqueue_paused_runs",
                            pause_reason: void 0,
                            action: "dismiss"
                        }), l()
                    }, [t.id, l]);
                return (0, r.jsxs)(n(4458).VP, {
                    gap: 0,
                    paddingInlineEnd: 32,
                    paddingInlineStart: 20,
                    marginTop: 12,
                    marginBottom: 12,
                    style: M.container,
                    children: [(0, r.jsx)("div", {
                        style: M.dismissButton,
                        children: (0, r.jsx)(n(374533).A, {
                            icon: n(25094).xMarkSmallIcon,
                            size: "sm",
                            colorVariant: "tertiary",
                            onClick: h,
                            disabled: g,
                            ariaLabel: u.formatMessage({
                                id: "workflows.reenqueueBanner.dismissAriaLabel",
                                defaultMessage: "Dismiss banner"
                            })
                        })
                    }), (0, r.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        children: [(0, r.jsxs)(n(4458).VP, {
                            gap: 4,
                            paddingInlineEnd: 32,
                            flex: 1,
                            children: [(0, r.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "primary",
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "workflows.reenqueueBanner.title",
                                    defaultMessage: "Paused runs ready to resume"
                                })
                            }), (0, r.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: (0, r.jsx)(I, {
                                    pausedRunCount: i,
                                    isCreditLimitEnabled: a
                                })
                            })]
                        }), (0, r.jsx)(n(548436).A, {
                            onClick: m,
                            disabled: g,
                            size: "md",
                            children: g ? (0, r.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                children: [(0, r.jsx)(n(517334).k, {
                                    size: "sm"
                                }), (0, r.jsx)(n(109939).sA, {
                                    id: "workflows.reenqueueBanner.resuming",
                                    defaultMessage: "Resuming…"
                                })]
                            }) : (0, r.jsx)(n(109939).sA, {
                                id: "workflows.reenqueueBanner.resumeButton",
                                defaultMessage: "Resume {count} {count, plural, one {run} other {runs}}",
                                values: {
                                    count: i
                                }
                            })
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    pausedRunCount: t,
                    isCreditLimitEnabled: o
                } = e;
                return o ? (0, r.jsx)(n(109939).sA, {
                    id: "workflows.reenqueueBanner.message.creditLimit",
                    defaultMessage: "{count} {count, plural, one {run was} other {runs were}} paused due to hitting the credit limit. Would you like to resume {count, plural, one {it} other {them}}?",
                    values: {
                        count: t
                    }
                }) : (0, r.jsx)(n(109939).sA, {
                    id: "workflows.reenqueueBanner.message",
                    defaultMessage: "{count} {count, plural, one {run was} other {runs were}} paused due to hitting the run limit. Would you like to resume {count, plural, one {it} other {them}}?",
                    values: {
                        count: t
                    }
                })
            }
            let A = [100, 250, 500, 1e3, 1e4, 1e5],
                T = {
                    dropdownButton: {
                        width: "100%",
                        height: 36,
                        paddingInline: 12,
                        backgroundColor: n(632079).Tj.background.primary,
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        borderRadius: 8,
                        fontSize: 14,
                        color: n(632079).Tj.text.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    chevronIcon: {
                        flexShrink: 0
                    },
                    reasonInput: {
                        width: "100%",
                        minHeight: 120,
                        padding: 12,
                        backgroundColor: n(632079).Tj.background.primary,
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        borderRadius: 8,
                        resize: "vertical",
                        fontSize: 14,
                        color: n(632079).Tj.text.primary
                    },
                    style0: {
                        background: "transparent"
                    },
                    style1: {
                        width: "100%",
                        justifyContent: "flex-start",
                        textAlign: "start"
                    },
                    style2: {
                        width: "100%"
                    },
                    checkboxRow: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        cursor: "pointer"
                    },
                    checkbox: {
                        marginTop: 2
                    }
                };

            function D(e) {
                let {
                    workflowStore: t,
                    isOpen: a,
                    onClose: s
                } = e, l = (0, n(533992).v3)(), d = (0, n(109939).tz)(), p = (0, n(682985).K8)(() => {
                    let e = n(218744).default.getConfig({
                        configName: "custom_agent_sub_features"
                    });
                    return (null == e ? void 0 : e.available_run_increases) ? ? A
                }, []), f = (0, o.useMemo)(() => Array.isArray(p) ? p : A, [p]), [m, h] = (0, o.useState)(f[0] ? ? 100), [w, y] = (0, o.useState)(""), [x, v] = (0, o.useState)(!1), [b, k] = (0, o.useState)(!1), [j, S] = (0, o.useState)(void 0), [M, C] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    if (!a) return;
                    let e = t.getSpaceId();
                    e && (C(!0), i({
                        environment: l,
                        workflowId: t.id,
                        spaceId: e,
                        pausedReason: "runLimit"
                    }).then(e => {
                        S(e.count), C(!1)
                    }))
                }, [a, t, l]);
                let I = (0, o.useCallback)(async () => {
                    if (!x) {
                        v(!0);
                        try {
                            if (await u({
                                    environment: l,
                                    workflowStore: t,
                                    amount: m,
                                    reason: w
                                }), b && j && j > 0) {
                                let e = t.getSpaceId();
                                if (e) {
                                    let o = await c({
                                        environment: l,
                                        workflowId: t.id,
                                        spaceId: e,
                                        pausedReason: "runLimit"
                                    });
                                    o.successCount > 0 ? n(436555).D6({
                                        label: d.formatMessage({
                                            defaultMessage: "Request sent successfully. Resumed {count} {count, plural, one {run} other {runs}}.",
                                            id: "workflows.requestLimitModal.successWithReenqueue"
                                        }, {
                                            count: o.successCount
                                        })
                                    }) : n(436555).D6({
                                        label: d.formatMessage({
                                            defaultMessage: "Request sent successfully",
                                            id: "workflows.requestLimitModal.success"
                                        })
                                    })
                                }
                            } else n(436555).D6({
                                label: d.formatMessage({
                                    defaultMessage: "Request sent successfully",
                                    id: "workflows.requestLimitModal.success"
                                })
                            });
                            s({
                                didReenqueueRuns: b
                            })
                        } catch (e) {
                            n(647095).f1(d.formatMessage({
                                defaultMessage: "Failed to request limit increase",
                                id: "workflows.requestLimitModal.error"
                            }))
                        } finally {
                            v(!1)
                        }
                    }
                }, [l, t, m, w, d, s, x, b, j]);
                return (0, r.jsx)(n(833503).s, {
                    isOpen: a,
                    onDismiss: s,
                    children: () => (0, r.jsxs)(n(4458).VP, {
                        gap: 32,
                        padding: 32,
                        width: 480,
                        children: [(0, r.jsxs)(n(4458).VP, {
                            alignItems: "center",
                            gap: 12,
                            children: [(0, r.jsx)(n(16275).I, {
                                icon: n(643551).u,
                                size: 48,
                                colorVariant: "secondary"
                            }), (0, r.jsx)(n(111010).D, {
                                styleKey: "titleSemibold",
                                colorVariant: "primary",
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "workflows.requestLimitModal.title",
                                    defaultMessage: "Need additional runs?"
                                })
                            }), (0, r.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                children: [(0, r.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    children: (0, r.jsx)(n(109939).sA, {
                                        id: "workflows.requestLimitModal.subtitle",
                                        defaultMessage: "Request to add more runs for this agent"
                                    })
                                }), (0, r.jsx)(g, {})]
                            })]
                        }), (0, r.jsxs)(n(4458).VP, {
                            gap: 12,
                            children: [(0, r.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "primary",
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "workflows.requestLimitModal.amountLabel",
                                    defaultMessage: "Amount"
                                })
                            }), (0, r.jsx)(n(656252).A, {
                                popupType: n(656252).z.Popup,
                                alignmentToOrigin: "start",
                                placementToOrigin: "bottom",
                                originGap: 4,
                                content: ({
                                    close: e
                                }) => (0, r.jsx)(n(747369).A, {
                                    menuType: n(649476).gu.Popup,
                                    children: (0, r.jsx)(n(558045).A, {
                                        initialFocus: 0,
                                        type: n(558045).O.Vertical,
                                        sections: [{
                                            key: "amount-options",
                                            render: e => (0, r.jsx)(n(844565).A, { ...e
                                            }),
                                            items: f.map(t => ({
                                                key: t,
                                                action: () => {
                                                    h(t), e()
                                                },
                                                render: e => (0, r.jsx)(n(95582).A, { ...e,
                                                    title: d.formatMessage({
                                                        id: "workflows.requestLimitModal.runsOption",
                                                        defaultMessage: "{amount} runs"
                                                    }, {
                                                        amount: d.formatNumber(t)
                                                    }),
                                                    buttonStyle: T.style1
                                                })
                                            }))
                                        }]
                                    })
                                }),
                                children: e => (0, r.jsxs)(n(988022).p, { ...e,
                                    style: T.dropdownButton,
                                    hoveredStyle: T.style0,
                                    pressedStyle: T.style0,
                                    children: [(0, r.jsx)("span", {
                                        children: d.formatMessage({
                                            id: "workflows.requestLimitModal.runsOption",
                                            defaultMessage: "{amount} runs"
                                        }, {
                                            amount: d.formatNumber(m)
                                        })
                                    }), (0, r.jsx)(n(16275).I, {
                                        icon: n(595453).arrowChevronSingleDownSmallIcon,
                                        size: "sm",
                                        colorVariant: "tertiary",
                                        style: T.chevronIcon
                                    })]
                                })
                            })]
                        }), (0, r.jsxs)(n(4458).VP, {
                            gap: 12,
                            children: [(0, r.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "primary",
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "workflows.requestLimitModal.reasonLabel",
                                    defaultMessage: "Reason for increase"
                                })
                            }), (0, r.jsx)("textarea", {
                                style: T.reasonInput,
                                placeholder: d.formatMessage({
                                    id: "workflows.requestLimitModal.reasonPlaceholder",
                                    defaultMessage: "e.g., higher task volume, ongoing projects"
                                }),
                                value: w,
                                onChange: e => y(e.target.value)
                            })]
                        }), void 0 !== j && j > 0 ? (0, r.jsxs)("div", {
                            style: T.checkboxRow,
                            onClick: () => k(!b),
                            onKeyDown: e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), k(!b))
                            },
                            role: "button",
                            tabIndex: 0,
                            children: [(0, r.jsx)(n(349050).S, {
                                style: T.checkbox,
                                checked: b,
                                size: 16,
                                onClick: e => {
                                    e.stopPropagation(), k(!b)
                                }
                            }), (0, r.jsxs)(n(4458).VP, {
                                gap: 4,
                                flex: 1,
                                children: [(0, r.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "primary",
                                    children: (0, r.jsx)(n(109939).sA, {
                                        id: "workflows.requestLimitModal.reenqueueCheckbox",
                                        defaultMessage: "Automatically resume paused runs"
                                    })
                                }), (0, r.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: M ? (0, r.jsx)(n(109939).sA, {
                                        id: "workflows.requestLimitModal.loadingCount",
                                        defaultMessage: "Checking for paused runs…"
                                    }) : (0, r.jsx)(n(109939).sA, {
                                        id: "workflows.requestLimitModal.reenqueueDescription",
                                        defaultMessage: "{count} {count, plural, one {run is} other {runs are}} currently paused due to reaching the limit",
                                        values: {
                                            count: j
                                        }
                                    })
                                })]
                            })]
                        }) : void 0, (0, r.jsxs)(n(4458).VP, {
                            gap: 12,
                            children: [(0, r.jsx)(n(912946).A, {
                                onClick: I,
                                disabled: x || !w.trim(),
                                colorPalette: "blue",
                                size: "lg",
                                style: T.style2,
                                children: x ? (0, r.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    children: [(0, r.jsx)(n(517334).k, {
                                        size: "sm"
                                    }), (0, r.jsx)(n(109939).sA, {
                                        id: "workflows.requestLimitModal.submitting",
                                        defaultMessage: "Requesting…"
                                    })]
                                }) : (0, r.jsx)(n(109939).sA, {
                                    id: "workflows.requestLimitModal.request",
                                    defaultMessage: "Request"
                                })
                            }), (0, r.jsx)(n(548436).A, {
                                onClick: () => s(),
                                disabled: x,
                                size: "lg",
                                style: T.style2,
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "workflows.requestLimitModal.cancel",
                                    defaultMessage: "Cancel"
                                })
                            })]
                        })]
                    })
                })
            }
            let _ = (0, n(222024).t)(),
                P = [100, 250, 500, 1e3, 1e4, 1e5],
                L = {
                    container: {
                        paddingTop: 14,
                        paddingInlineEnd: 16,
                        paddingBottom: 14,
                        paddingInlineStart: 20,
                        backgroundColor: n(632079).Tj.background.primary,
                        border: `1px solid ${n(632079).Tj.border.primary}`,
                        borderRadius: 14
                    },
                    menuButtonStyle: {
                        width: "100%",
                        justifyContent: "flex-start",
                        textAlign: "start"
                    }
                };

            function R(e) {
                let {
                    workflowStore: t,
                    onContinue: i,
                    inline: a,
                    title: s,
                    description: l,
                    pauseReason: d
                } = e, c = "runawayCreditUsage" === d ? "newAgentThreshold" : void 0, u = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    u.current || (u.current = !0, (0, n(599231).Bw)({
                        workflow_id: t.id,
                        banner_type: "pause_cta",
                        pause_reason: d,
                        runaway_check: c
                    }))
                }, [t.id, d, c]);
                let p = (0, o.useCallback)(() => {
                        (0, n(599231).HH)({
                            workflow_id: t.id,
                            banner_type: "pause_cta",
                            pause_reason: d,
                            action: "resume",
                            runaway_check: c
                        }), null == i || i()
                    }, [t.id, d, c, i]),
                    f = (0, o.useCallback)(() => {
                        (0, n(599231).HH)({
                            workflow_id: t.id,
                            banner_type: "pause_cta",
                            pause_reason: d,
                            action: "learn_more",
                            runaway_check: c
                        })
                    }, [t.id, d, c]),
                    m = (0, n(682985).K8)(() => {
                        let e = t.getDraftData(),
                            o = null == e ? void 0 : e.usage_limit,
                            i = n(218744).default.getConfig({
                                configName: "custom_agent_sub_features"
                            }),
                            r = (null == i ? void 0 : i.default_run_limit) ? ? 100;
                        return (null == o ? void 0 : o.type) === "runLimit" ? o.maximum : r
                    }, [t]);
                if (a) return (0, r.jsx)(B, {
                    workflowStore: t
                });
                let h = s ? ? (0, r.jsx)(n(109939).sA, {
                        id: "workflow.runLimitContinue.header",
                        defaultMessage: "Are you still using this agent?"
                    }),
                    w = l ? ? (0, r.jsx)(n(109939).sA, {
                        id: "workflow.runLimitContinue.subtitle",
                        defaultMessage: "We paused it after {count} {count, plural, one {run} other {runs}} to avoid unnecessary activity",
                        values: {
                            count: m
                        }
                    });
                return (0, r.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    marginTop: 12,
                    marginBottom: 12,
                    style: L.container,
                    children: [(0, r.jsxs)(n(4458).VP, {
                        gap: 4,
                        children: [(0, r.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            children: h
                        }), (0, r.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: [(0, r.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: w
                            }), (0, r.jsx)(g, {
                                onClick: f
                            })]
                        })]
                    }), (0, r.jsx)(n(548436).A, {
                        onClick: p,
                        size: "md",
                        children: (0, r.jsx)(n(109939).sA, {
                            id: "workflow.runLimitContinue.resume",
                            defaultMessage: "Resume"
                        })
                    })]
                })
            }

            function B(e) {
                let {
                    workflowStore: t
                } = e, i = (0, n(533992).v3)(), a = (0, n(109939).tz)(), s = (0, n(682985).K8)(() => {
                    let e = n(218744).default.getConfig({
                        configName: "custom_agent_sub_features"
                    });
                    return (null == e ? void 0 : e.available_run_increases) ? ? P
                }, []), l = (0, o.useMemo)(() => [...Array.isArray(s) ? s : P], [s]), [d, c] = (0, o.useState)(100), [p, f] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    l.includes(d) || c(l.includes(100) ? 100 : l[0] ? ? 100)
                }, [l, d]);
                let m = (0, o.useCallback)(async () => {
                        if (!p) {
                            f(!0);
                            try {
                                await u({
                                    environment: i,
                                    workflowStore: t,
                                    amount: d,
                                    reason: ""
                                }), n(436555).D6({
                                    label: a.formatMessage({
                                        defaultMessage: "Resumed agent successfully",
                                        id: "workflows.continueLimitModal.success"
                                    })
                                })
                            } catch (e) {
                                _.error({
                                    from: "WorkflowLimitContinueSection",
                                    type: "requestWorkflowLimitIncrease",
                                    error: e
                                }), n(647095).f1(a.formatMessage({
                                    defaultMessage: "Failed to continue",
                                    id: "workflows.continueLimitModal.error"
                                }))
                            } finally {
                                f(!1)
                            }
                        }
                    }, [i, t, d, a, p]),
                    h = a.formatMessage({
                        id: "workflows.continueLimitModal.resumeWithAmount",
                        defaultMessage: "Resume for {amount} runs"
                    }, {
                        amount: a.formatNumber(d)
                    });
                return (0, r.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    marginTop: 12,
                    marginBottom: 12,
                    style: L.container,
                    children: [(0, r.jsxs)(n(4458).VP, {
                        gap: 4,
                        children: [(0, r.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            children: (0, r.jsx)(n(109939).sA, {
                                id: "workflow.runLimitContinue.header",
                                defaultMessage: "Are you still using this agent?"
                            })
                        }), (0, r.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 2,
                            children: [(0, r.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "workflow.runLimitContinueInline.subtitle",
                                    defaultMessage: "We paused it to avoid unnecessary activity"
                                })
                            }), (0, r.jsx)(g, {})]
                        })]
                    }), (0, r.jsx)(n(656252).A, {
                        popupType: n(656252).z.Popup,
                        alignmentToOrigin: "start",
                        placementToOrigin: "bottom",
                        originGap: 4,
                        content: ({
                            close: e
                        }) => (0, r.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Popup,
                            children: (0, r.jsx)(n(558045).A, {
                                initialFocus: 0,
                                type: n(558045).O.Vertical,
                                sections: [{
                                    key: "amount-options",
                                    render: e => (0, r.jsx)(n(844565).A, { ...e
                                    }),
                                    items: l.map(t => ({
                                        key: t,
                                        action: () => {
                                            c(t), e()
                                        },
                                        render: e => (0, r.jsx)(n(95582).A, { ...e,
                                            title: a.formatMessage({
                                                id: "workflows.continueLimitModal.runsOption",
                                                defaultMessage: "{amount} runs"
                                            }, {
                                                amount: a.formatNumber(t)
                                            }),
                                            buttonStyle: L.menuButtonStyle
                                        })
                                    }))
                                }]
                            })
                        }),
                        children: e => (0, r.jsx)(n(322354).I, {
                            color: "blue",
                            size: "md",
                            title: p ? a.formatMessage({
                                id: "workflows.continueLimitModal.submitting",
                                defaultMessage: "Resuming…"
                            }) : h,
                            onClick: m,
                            onDropdownClick: t => e.onClick(t),
                            dropdownAriaLabel: a.formatMessage({
                                id: "workflows.continueLimitModal.amountDropdownAriaLabel",
                                defaultMessage: "Select run limit amount"
                            }),
                            disabled: p,
                            disableDropdown: p,
                            isLoading: p
                        })
                    })]
                })
            }
            let K = {
                container: {
                    paddingTop: 14,
                    paddingInlineEnd: 16,
                    paddingBottom: 14,
                    paddingInlineStart: 20,
                    backgroundColor: n(632079).Tj.background.primary,
                    border: `1px solid ${n(632079).Tj.border.primary}`,
                    borderRadius: 14,
                    marginBlock: 12
                },
                containerMinified: {
                    paddingTop: 12,
                    paddingInlineEnd: 12,
                    paddingBottom: 12,
                    paddingInlineStart: 12,
                    backgroundColor: n(632079).Tj.background.primary,
                    border: `1px solid ${n(632079).Tj.border.primary}`,
                    borderRadius: 12,
                    marginBlock: 8
                }
            };

            function E(e) {
                let {
                    workflowStore: t,
                    onRequestIncrease: i,
                    minified: a = !1
                } = e, s = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    s.current || (s.current = !0, (0, n(599231).Bw)({
                        workflow_id: t.id,
                        banner_type: "pause_cta",
                        pause_reason: "runLimit"
                    }))
                }, [t.id]);
                let l = (0, o.useCallback)(() => {
                        (0, n(599231).HH)({
                            workflow_id: t.id,
                            banner_type: "pause_cta",
                            pause_reason: "runLimit",
                            action: "request_increase"
                        }), i()
                    }, [t.id, i]),
                    d = (0, o.useCallback)(() => {
                        (0, n(599231).HH)({
                            workflow_id: t.id,
                            banner_type: "pause_cta",
                            pause_reason: "runLimit",
                            action: "learn_more"
                        })
                    }, [t.id]),
                    c = (0, n(682985).K8)(() => {
                        let e = t.getDraftData(),
                            o = null == e ? void 0 : e.usage_limit,
                            i = n(218744).default.getConfig({
                                configName: "custom_agent_sub_features"
                            }),
                            r = (null == i ? void 0 : i.default_run_limit) ? ? 100;
                        return (null == o ? void 0 : o.type) === "runLimit" ? o.maximum : r
                    }, [t]),
                    u = a ? K.containerMinified : K.container,
                    p = a ? "captionMedium" : "bodyMedium",
                    f = (0, r.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 4,
                        children: [(0, r.jsx)(n(111010).D, {
                            styleKey: p,
                            colorVariant: "primary",
                            children: (0, r.jsx)(n(109939).sA, {
                                id: "workflow.runLimitReached.header",
                                defaultMessage: "Run limit reached"
                            })
                        }), (0, r.jsx)(n(111010).D, {
                            styleKey: p,
                            colorVariant: "secondary",
                            children: (0, r.jsx)(n(109939).sA, {
                                id: "workflow.runLimitReached.count",
                                defaultMessage: " · {maxRuns} / {maxRuns}",
                                values: {
                                    maxRuns: c
                                }
                            })
                        })]
                    }),
                    m = (0, r.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 4,
                        children: [(0, r.jsx)(n(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: (0, r.jsx)(n(109939).sA, {
                                id: "workflow.runLimitReached.requestMessage",
                                defaultMessage: "Request an increase to continue using this agent"
                            })
                        }), (0, r.jsx)(g, {
                            onClick: d
                        })]
                    }),
                    h = (0, r.jsx)(n(548436).A, {
                        onClick: l,
                        size: a ? "sm" : "md",
                        children: (0, r.jsx)(n(109939).sA, {
                            id: "workflow.runLimitReached.requestIncrease",
                            defaultMessage: "Request"
                        })
                    });
                return a ? (0, r.jsxs)(n(4458).VP, {
                    gap: 8,
                    style: u,
                    children: [f, m, h]
                }) : (0, r.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    style: u,
                    children: [(0, r.jsxs)(n(4458).VP, {
                        gap: 4,
                        children: [f, m]
                    }), h]
                })
            }
            let V = {
                moreButtonContent: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    paddingInlineStart: 6
                },
                moreButton: {
                    color: n(632079).Tj.text.secondary,
                    fontSize: 14,
                    paddingInline: 12,
                    paddingBlock: 8,
                    width: "100%",
                    height: 36
                }
            };

            function W(e) {
                let {
                    workflowStore: t,
                    clientStore: a,
                    workflowViewType: l,
                    activityFilter: c,
                    activeThreadId: u,
                    onThreadClicked: g,
                    shouldResetOnFilterChange: p = !0
                } = e, f = (0, n(533992).v3)(), m = (0, n(109939).tz)(), {
                    navigate: h
                } = (0, o.useContext)(n(44894).E), w = (0, n(83208).X)("custom_agent_delete_thread"), y = (0, n(682985).K8)(() => t.canEdit(), [t]), x = (0, n(916820).Sn)(), v = (0, n(682985).O$)(x), {
                    status: b = "idle",
                    value: j,
                    loadMore: M,
                    hasMore: I,
                    isLoadingMore: A
                } = v ? ? {
                    status: "idle",
                    value: void 0,
                    loadMore: void 0,
                    hasMore: !1,
                    isLoadingMore: !1
                }, T = !!(null == v ? void 0 : v.isPausedByNotion), [_, P] = (0, o.useState)(void 0), L = o.useMemo(() => c ? "trigger" === c.type ? `trigger:${c.triggerId}` : c.type : "all", [c]), B = o.useRef(void 0);
                (0, o.useEffect)(() => {
                    let e = B.current !== L;
                    if (e && p) {
                        B.current = L, P(void 0);
                        return
                    }
                    "resolved" === b && j && P(t => {
                        if (e) return B.current = L, (0, n(381453).hS)([...j], "id");
                        let o = new Set((t ? ? []).filter(e => j.every(t => t.id !== e.id)).map(e => e.id));
                        return (0, n(381453).hS)([...j, ...(t ? ? []).filter(e => !o.has(e.id))], "id")
                    })
                }, [j, P, b, L, p]);
                let K = (0, o.useCallback)(() => {
                        null == x || x.refreshThreads()
                    }, [x]),
                    W = (0, o.useCallback)((e, o) => {
                        if (g) return void g(e, o);
                        let i = o ? (0, n(7029).V)(o) : void 0;
                        h({
                            environment: f,
                            url: (0, n(453573).Lm)({
                                workflowId: t.id,
                                params: {
                                    agentChatThreadId: e,
                                    workflowViewType: l
                                }
                            }),
                            openInNew: i,
                            redirect: !1
                        })
                    }, [t.id, f, l, h, g]),
                    z = (0, o.useCallback)(async e => {
                        var o, i;
                        if (!y) return;
                        let r = t.getSpaceId();
                        if (!r) return;
                        let s = n(174148).E.createChildStore(t, {
                            table: n(298085).T,
                            id: e.id,
                            spaceId: r
                        });
                        await (0, n(757688).vy)({
                            chatTranscriptInfo: {
                                id: s.id,
                                configType: e.type ? ? "workflow",
                                store: s,
                                title: e.title ? ? "",
                                description: "",
                                createdTime: e.created_at,
                                updatedTime: e.updated_at
                            },
                            environment: f,
                            clientStore: a
                        }), P(t => null == t ? void 0 : t.filter(t => t.id !== e.id)), null == x || null == (o = (i = x.state).removeFromCache) || o.call(i, [e.id]), u === e.id && h({
                            environment: f,
                            url: (0, n(453573).Lm)({
                                workflowId: t.id,
                                params: {
                                    agentChatThreadId: void 0,
                                    workflowViewType: l
                                }
                            }),
                            redirect: !1
                        }), await (null == x ? void 0 : x.refreshThreads())
                    }, [x, a, f, h, u, y, l, t]),
                    U = (0, n(682985).K8)(() => (0, n(604384).uf)(t), [t]),
                    {
                        runLimitUIVariant: F,
                        stuckThresholdSeconds: O,
                        isAgentCreditUsageDisplayEnabled: q
                    } = (0, n(682985).K8)(() => {
                        let e = n(218744).default.getConfig({
                            configName: "custom_agent_sub_features"
                        });
                        return {
                            runLimitUIVariant: e.run_limit_ui_variant ? ? "request",
                            stuckThresholdSeconds: e.stuck_run_threshold_seconds,
                            isAgentCreditUsageDisplayEnabled: e.agent_credit_usage_display ? ? !1
                        }
                    }, []),
                    H = (0, n(83208).X)("database_agent_credit_usage"),
                    G = (0, n(682985).K8)(() => {
                        let e = t.getDraftData() ? ? t.getData();
                        return (null == e || !e.isLite) && ((0, n(445568).isWorkflowDataDatabaseAgent)(e) ? q && H : q)
                    }, [t, q, H]),
                    $ = (0, n(682985).K8)(() => t.getSpaceId(), [t]),
                    [Y, Q] = (0, o.useState)(!1),
                    [X, Z] = (0, o.useState)(!1),
                    [J, ee] = (0, o.useState)(0),
                    [et, en] = (0, o.useState)(!1),
                    eo = (0, o.useCallback)(() => {
                        Q(!0)
                    }, []),
                    ei = (0, o.useCallback)(() => {
                        (0, n(777206).b)({
                            creditLimit: void 0,
                            workflowStore: t,
                            environment: f
                        })
                    }, [f, t]),
                    er = (0, o.useCallback)(() => {
                        (0, n(777206).V)({
                            workflowStore: t,
                            environment: f
                        })
                    }, [f, t]);
                (0, o.useEffect)(() => {
                    !$ || U || et ? Z(!1) : (0, n(975162).lX)(n(425749).jX, n(425749).jX.length, e => i({
                        environment: f,
                        workflowId: t.id,
                        spaceId: $,
                        pausedReason: e
                    })).then(e => {
                        let t = e.reduce((e, t) => e + t.count, 0);
                        t > 0 ? (ee(t), Z(!0)) : Z(!1)
                    })
                }, [f, t, $, U, et]);
                let ea = (0, n(682985).K8)(() => {
                        if (_) return (null == c ? void 0 : c.type) === "trigger" ? _.filter(e => e.trigger_id === c.triggerId) : (null == c ? void 0 : c.type) === "chat" ? _.filter(e => !e.trigger_id) : (null == c ? void 0 : c.type) === "failed" ? _.filter(e => {
                            if (e.run_id && $) {
                                let o = n(849697).t.createChildStore(t, {
                                    table: n(584742).Q,
                                    id: e.run_id,
                                    spaceId: $
                                }).getStatus();
                                if ("failure" === o) return !0;
                                if ("running" === o) {
                                    let o = n(174148).E.createChildStore(t, {
                                        table: n(298085).T,
                                        id: e.id,
                                        spaceId: $
                                    });
                                    if ((0, n(187353)._P)(o, O)) return !0
                                }
                            }
                            return !1
                        }) : (null == c ? void 0 : c.type) === "success" ? _.filter(e => !e.run_id || !e.run_id || !$ || "success" === n(849697).t.createChildStore(t, {
                            table: n(584742).Q,
                            id: e.run_id,
                            spaceId: $
                        }).getStatus()) : (null == c ? void 0 : c.type) === "pending" || (null == c ? void 0 : c.type) === "in_progress" ? $ ? _.filter(e => (0, n(362419).UR)({
                            thread: e,
                            filterType: c.type,
                            workflowStore: t,
                            spaceId: $,
                            includeUnknownStatus: !0
                        })) : [] : (null == c ? void 0 : c.type) === "paused" ? _.filter(e => {
                            if (e.run_id && $) {
                                let o = n(849697).t.createChildStore(t, {
                                    table: n(584742).Q,
                                    id: e.run_id,
                                    spaceId: $
                                }).getStatus();
                                return void 0 === o || "paused" === o
                            }
                            return !1
                        }) : _
                    }, [_, c, t, $, O]),
                    es = ((null == c ? void 0 : c.type) === "pending" || (null == c ? void 0 : c.type) === "in_progress") && void 0 !== ea && ea.length < 10,
                    el = "pending" === b && (void 0 === _ || 0 === _.length);
                return void 0 === ea || el ? (0, r.jsx)(d, {}) : "rejected" === b || 0 === ea.length ? (0, r.jsx)(s, {
                    onRefreshClick: K
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(n(4458).VP, {
                        gap: 16,
                        children: [(0, r.jsx)(N, {}), T ? (0, r.jsx)(S, {
                            workflowId: t.id
                        }) : "runLimit" === U ? G ? (0, r.jsx)(R, {
                            workflowStore: t,
                            onContinue: ei,
                            pauseReason: "runLimit"
                        }) : "continue_inline" === F ? (0, r.jsx)(R, {
                            workflowStore: t,
                            inline: !0,
                            pauseReason: "runLimit"
                        }) : "continue" === F ? (0, r.jsx)(R, {
                            workflowStore: t,
                            onContinue: eo,
                            pauseReason: "runLimit"
                        }) : (0, r.jsx)(E, {
                            workflowStore: t,
                            onRequestIncrease: eo
                        }) : "runawayCreditUsage" === U ? (0, r.jsx)(R, {
                            workflowStore: t,
                            onContinue: er,
                            pauseReason: "runawayCreditUsage",
                            title: (0, r.jsx)(n(109939).sA, {
                                id: "workflow.runawayCreditUsageContinue.header",
                                defaultMessage: "This agent is using credits at an unusually high rate"
                            }),
                            description: (0, r.jsx)(n(109939).sA, {
                                id: "workflow.runawayCreditUsageContinue.subtitle",
                                defaultMessage: "We paused it to prevent unexpected costs. Review its settings, or resume if this looks right."
                            })
                        }) : X && J > 0 ? (0, r.jsx)(C, {
                            workflowStore: t,
                            pausedRunCount: J,
                            isCreditLimitEnabled: G,
                            onReenqueue: () => {
                                Z(!1), K()
                            },
                            onDismiss: () => en(!0)
                        }) : void 0, (0, r.jsxs)(n(4458).VP, {
                            gap: 1,
                            children: [ea.map(e => (0, r.jsx)(n(864509).H, {
                                workflowStore: t,
                                clientStore: a,
                                thread: e,
                                isClickable: !0,
                                isHighlighted: e.id === u,
                                onThreadClick: t => W(e.id, t),
                                onDelete: w && y ? () => z(e) : void 0
                            }, e.id)), I && "resolved" === b && !es ? (0, r.jsx)(n(988022).p, {
                                colorPalette: "gray",
                                onClick: () => M && M(),
                                disabled: A,
                                style: V.moreButton,
                                iconLeading: {
                                    icon: n(128662).ellipsisFillIcon,
                                    size: "xs",
                                    style: {
                                        marginInlineStart: 2
                                    }
                                },
                                children: A ? (0, r.jsx)(n(517334).k, {}) : (0, r.jsx)("span", {
                                    style: V.moreButtonContent,
                                    children: m.formatMessage({
                                        id: "agentActivity.loadMore",
                                        defaultMessage: "More"
                                    })
                                })
                            }) : null]
                        })]
                    }), Y ? "continue" === F ? (0, r.jsx)(k, {
                        workflowStore: t,
                        isOpen: Y,
                        onClose: e => {
                            Q(!1), null != e && e.didReenqueueRuns && en(!0)
                        }
                    }) : (0, r.jsx)(D, {
                        workflowStore: t,
                        isOpen: Y,
                        onClose: e => {
                            Q(!1), null != e && e.didReenqueueRuns && en(!0)
                        }
                    }) : void 0]
                })
            }

            function N() {
                let e = (0, n(345776).T)(),
                    t = (0, n(972740).L)();
                return (0, n(217844)._)({
                    name: "custom_agents",
                    spaceId: null == t ? void 0 : t.id,
                    userId: e
                }), null
            }
            n(632079).Tj.border.secondary
        },
        643551: (e, t, n) => {
            n.d(t, {
                u: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.14 6.87 13.7 6.27",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.586 11.003V9.036l-3.902 3.903a.625.625 0 0 1-.884 0L7.735 9.874 4.2 12.967a.625.625 0 1 1-.822-.94l3.975-3.478.097-.071a.626.626 0 0 1 .756.1l3.035 3.034 3.486-3.484H12.71a.625.625 0 0 1 0-1.25h3.5a.626.626 0 0 1 .625.625v3.5a.625.625 0 0 1-1.25 0"
                    })
                },
                i = (0, n(104509).wt)("lineUptrend", o, "default")
        },
        748593: (e, t, n) => {
            n.d(t, {
                Z: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.85 1.57 9.98 12.06",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.442 1.758a.625.625 0 0 0-.884 0l-3.52 3.52a.625.625 0 1 0 .884.884l2.453-2.453V11.8c0 1.008.817 1.825 1.825 1.825h4a.625.625 0 1 0 0-1.25h-4a.575.575 0 0 1-.575-.575V3.709l2.453 2.453a.625.625 0 0 0 .884-.884z"
                    })
                },
                i = (0, n(104509).wt)("arrowTurnLeftUpSmall", o, "small")
        },
        761615: (e, t, n) => {
            n.d(t, {
                U: () => o
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);

            function o() {
                return (0, n(682985).K8)(() => {
                    var e;
                    let t = n(728372).AppStoreSidebarSpaceViewStore.state;
                    return t ? Array.from(new Set((null == (e = t.getSettings()) ? void 0 : e.sidebar_workflow_ids) ? ? [])) : []
                }, [])
            }
        },
        772868: (e, t, n) => {
            n.d(t, {
                v: () => r,
                x: () => s
            }), n(898992), n(737550);
            var o = n(296540),
                i = n(474848);
            let r = 44,
                a = {
                    banner: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: n(632079).oZ.red,
                        color: n(632079).oZ.white,
                        padding: "8px 16px",
                        gap: 12,
                        minHeight: r,
                        zIndex: 3
                    },
                    message: {
                        fontSize: 14,
                        fontWeight: n(699422).Wy.medium,
                        color: n(632079).oZ.white
                    }
                };

            function s(e) {
                let {
                    navigate: t
                } = (0, o.useContext)(n(44894).E), {
                    workflowStore: r
                } = e, s = (0, n(533992).v3)(), l = (0, n(682985).K8)(() => {
                    let e = r.getPermissionItems();
                    return (null == e ? void 0 : e.some(n(642157).Ny)) ? ? !1
                }, [r]), d = (0, n(424561).H)(r), c = !(0, n(682985).O$)(n(205885).e), u = (0, o.useCallback)(() => {
                    (0, n(981082).U)({
                        environment: s,
                        workflowStore: r
                    })
                }, [s, r]), g = (0, o.useCallback)(() => {
                    n(480482).EH({
                        environment: s,
                        stores: [r],
                        table: n(43296).C,
                        from: "trash_banner",
                        handleSuccess: () => {
                            t({
                                environment: s,
                                url: "/ai"
                            })
                        }
                    })
                }, [s, r, t]);
                return l ? (0, i.jsx)("div", {
                    style: a.banner,
                    children: (0, i.jsx)("span", {
                        style: a.message,
                        children: (0, i.jsx)(n(525803).D, {
                            enterpriseMessage: {
                                id: "workflows.deletedAgentBanner.permanentlyDeleted.enterprise",
                                defaultMessage: "This Agent was deleted from Trash",
                                description: "Message shown on enterprise plans when viewing an agent deleted from Trash"
                            },
                            defaultMessage: {
                                id: "workflows.deletedAgentBanner.permanentlyDeleted",
                                defaultMessage: "This Agent was permanently deleted",
                                description: "Message shown when viewing a permanently deleted agent"
                            }
                        })
                    })
                }) : (0, i.jsxs)("div", {
                    style: a.banner,
                    children: [(0, i.jsx)("span", {
                        style: a.message,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "workflows.deletedAgentBanner.message",
                            defaultMessage: "This Agent has been moved to Trash"
                        })
                    }), d ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(n(51831).m, {
                            disableTooltip: !c,
                            placement: "bottom",
                            content: () => (0, i.jsx)(n(109939).sA, {
                                defaultMessage: "Go online to restore this Agent",
                                id: "workflows.deletedAgentBanner.restoreButton.offlineTooltip"
                            }),
                            children: e => (0, i.jsx)("div", { ...e,
                                children: (0, i.jsx)(n(522643).A, {
                                    disabled: c,
                                    onClick: u,
                                    icon: (0, i.jsx)(n(16275).I, {
                                        icon: n(748593).Z,
                                        size: "xs"
                                    }),
                                    children: (0, i.jsx)(n(109939).sA, {
                                        id: "workflows.deletedAgentBanner.restoreButton",
                                        defaultMessage: "Restore Agent"
                                    })
                                })
                            })
                        }), (0, i.jsx)(n(51831).m, {
                            disableTooltip: !c,
                            placement: "bottom",
                            content: () => (0, i.jsx)(n(525803).D, {
                                enterpriseMessage: {
                                    defaultMessage: "Go online to delete this Agent from Trash",
                                    id: "workflows.deletedAgentBanner.deleteButton.offlineTooltip.enterprise",
                                    description: "Tooltip shown on enterprise plans when user tries to delete an agent from trash while offline"
                                },
                                defaultMessage: {
                                    defaultMessage: "Go online to permanently delete this Agent",
                                    id: "workflows.deletedAgentBanner.deleteButton.offlineTooltip",
                                    description: "Tooltip shown when user tries to delete an agent from trash while offline"
                                }
                            }),
                            children: e => (0, i.jsx)("div", { ...e,
                                children: (0, i.jsx)(n(522643).A, {
                                    disabled: c,
                                    onClick: g,
                                    icon: (0, i.jsx)(n(16275).I, {
                                        icon: n(822973).trashSmallIcon,
                                        size: "xs"
                                    }),
                                    children: (0, i.jsx)(n(525803).D, {
                                        enterpriseMessage: {
                                            defaultMessage: "Delete from Trash",
                                            id: "workflows.deletedAgentBanner.deleteButton.enterprise",
                                            description: "Button to delete an agent from trash on enterprise plans"
                                        },
                                        defaultMessage: {
                                            defaultMessage: "Permanently delete",
                                            id: "workflows.deletedAgentBanner.deleteButton",
                                            description: "Button to permanently delete an agent from trash"
                                        }
                                    })
                                })
                            })
                        })]
                    }) : void 0]
                })
            }
        },
        782157: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    description: {
                        textWrap: "balance",
                        color: n(632079).Tj.text.secondary
                    }
                },
                r = function({
                    icon: e,
                    title: t,
                    description: r,
                    cta: a,
                    bodyWidth: s,
                    iconSize: l = n(104509).Ev.lg
                }) {
                    let d = (0, n(960253).I)(() => ({
                        icon: {
                            width: l,
                            height: l,
                            color: n(632079).Tj.icon.secondary
                        },
                        body: {
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                            maxWidth: s ? ? 300,
                            gap: 8
                        }
                    }), [s, l]);
                    return (0, o.jsxs)(n(4458).VP, {
                        alignItems: "center",
                        gap: 16,
                        children: [e ? e(d.icon) : void 0, (0, o.jsxs)("div", {
                            style: d.body,
                            children: [(0, o.jsx)(n(111010).D, {
                                colorVariant: "primary",
                                styleKey: "titleSmSemibold",
                                children: t
                            }), (0, o.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                style: i.description,
                                children: r
                            })]
                        }), a ? (0, o.jsx)("div", {
                            children: a
                        }) : void 0]
                    })
                }
        },
        831947: (e, t, n) => {
            n.d(t, {
                I: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M10 6.375c.345 0 .625.28.625.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V13a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V7c0-.345.28-.625.625-.625"
                        }), (0, o.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                r = (0, n(104509).wt)("plusCircle", i, "default")
        },
        864509: (e, t, n) => {
            n.d(t, {
                H: () => x,
                m: () => m
            }), n(813451), n(898992), n(737550);
            var o = n(296540);
            async function i(e) {
                let {
                    environment: t,
                    runId: n,
                    spaceId: o
                } = e, i = await t.api.callApi({
                    eventName: "getWorkflowRunQueueInfo",
                    environment: t,
                    data: {
                        runId: n,
                        spaceId: o
                    }
                });
                if ("failed" === i.type) throw i.error;
                return i.data.queueInfo
            }
            n(944114), n(581454);
            var r = n(474848);
            let a = {
                    width: 20,
                    height: 20,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2
                },
                s = {
                    width: "max-content"
                },
                l = {
                    padding: 0,
                    margin: 0,
                    listStyle: "none"
                };

            function d(e) {
                let {
                    spaceId: t,
                    runId: d,
                    runStore: c,
                    workflowStore: u,
                    clientStore: g,
                    threadStore: p,
                    waitingUntil: f,
                    isThreadStuck: m
                } = e, h = (0, n(533992).v3)(), w = (0, n(682985).K8)(() => (0, n(909212).Ke)(), []), [y, x] = (0, o.useState)(null), [v, b] = (0, o.useState)(!1), k = (0, n(682985).K8)(() => null == c ? void 0 : c.getStatus(), [c]), j = (0, n(682985).K8)(() => (0, n(187353).Ft)({
                    clientStore: g,
                    threadStore: p
                }), [g, p]), S = (0, n(682985).K8)(() => {
                    var e;
                    if (!c || !c.isDefined()) return;
                    let t = c.getTriggerId(),
                        o = null == (e = c.getData()) ? void 0 : e.trigger_data;
                    if (!t || !o) return;
                    let i = (0, n(210511).getSpecificWorkflowTrigger)({
                            workflowData: u.getData(),
                            triggerId: t
                        }),
                        r = (0, n(210511).getTriggerDefinitionBySpecificTrigger)(i);
                    if (i && r) return r.icon
                }, [c, u]), M = (0, o.useMemo)(() => f ? (0, r.jsx)(n(16275).I, {
                    icon: n(606017).$,
                    size: "sm"
                }) : "pending" === k ? (0, r.jsx)(n(517334).k, {
                    size: "sm"
                }) : !m && ("running" === k || j) ? (0, r.jsx)(n(265035).ScrollingSquiggle, {
                    width: 18,
                    height: 12
                }) : S ? (0, r.jsx)(n(16275).I, {
                    icon: S,
                    size: "sm"
                }) : (0, r.jsx)(n(16275).I, {
                    icon: n(534965).n,
                    size: "sm"
                }), [f, k, m, j, S]);
                (0, o.useEffect)(() => {
                    if (!d || !k || !t || !v || !w) return;
                    let e = async () => {
                        try {
                            let e = await i({
                                environment: h,
                                runId: d,
                                spaceId: t
                            });
                            x(e)
                        } catch (e) {
                            x(null)
                        }
                    };
                    e();
                    let n = "pending" === k ? setInterval(() => {
                        e()
                    }, 1e4) : void 0;
                    return () => {
                        n && clearInterval(n)
                    }
                }, [h, d, k, t, v, w]);
                let C = (0, o.useMemo)(() => {
                        if (!y) return;
                        let e = [];
                        if (void 0 !== y.waitTimeMs && "dead" !== y.taskState && e.push(`Wait: ${(0,n(264305).a)(y.waitTimeMs)}`), void 0 !== y.queuePosition && e.push(`Position: ${y.queuePosition}`), void 0 !== y.totalInQueue && "dead" !== y.taskState && e.push(`Total: ${y.totalInQueue}`), y.queueType) {
                            let t = "";
                            switch (y.queueType) {
                                case "fairTaskQueue":
                                    t = "Fair Task Queue";
                                    break;
                                case "standardTaskQueue":
                                    t = "Standard Task Queue";
                                    break;
                                case "multiSqs":
                                    t = "Multi SQS";
                                    break;
                                case "sqs":
                                    t = "SQS";
                                    break;
                                default:
                                    t = "Unknown Queue Type"
                            }
                            e.push(`Queue Type: ${t}`)
                        }
                        return y.taskState && e.push(`State: ${y.taskState}`), y.taskId && e.push(`Task ID: ${y.taskId}`), !y.taskId && y.runId && e.push("Queue: SQS"), y.status && e.push(`Status: ${y.status}`), e.length > 0 ? e : void 0
                    }, [y]),
                    I = (0, o.useCallback)(e => (0, r.jsx)("div", { ...e,
                        style: a,
                        children: M
                    }), [M]),
                    A = (0, o.useCallback)((e, t) => (t !== v && b(t), I(e)), [I, v]);
                return w ? (0, r.jsx)(n(51831).m, {
                    style: s,
                    textWrap: !0,
                    delayThreshold: 0,
                    placement: "top",
                    content: e => (0, r.jsx)("ul", {
                        style: l,
                        ...e,
                        children: null == C ? void 0 : C.map((e, t) => (0, r.jsx)("li", {
                            children: e
                        }, t))
                    }),
                    children: A
                }) : I()
            }
            async function c(e) {
                let {
                    environment: t,
                    runId: n,
                    spaceId: o
                } = e;
                try {
                    var i;
                    let e = await t.api.callCellCompatibleApi({
                        eventName: "reenqueueWorkflowAutomation",
                        environment: t,
                        data: {
                            runIds: [n],
                            spaceId: o
                        },
                        cellNavigation: {
                            spaceId: o
                        }
                    });
                    if ("success" === e.type) return {
                        success: !0
                    };
                    return {
                        success: !1,
                        error: (null == (i = e.error) ? void 0 : i.message) || "Failed to re-enqueue run"
                    }
                } catch (e) {
                    return {
                        success: !1,
                        error: e instanceof Error ? e.message : "Failed to re-enqueue run"
                    }
                }
            }

            function u(e) {
                let {
                    runStore: t,
                    workflowStore: i,
                    onSuccess: a
                } = e, s = (0, n(533992).v3)(), l = (0, n(109939).tz)(), [d, u] = (0, o.useState)(!1), [g, p] = (0, o.useState)(void 0), f = (0, n(682985).K8)(() => {
                    var e;
                    let n = t.getData(),
                        o = null == n ? void 0 : n.paused_reason,
                        r = i.getDraftData();
                    return (null == r || null == (e = r.paused_reason) ? void 0 : e.reason) === o
                }, [t, i]), m = async e => {
                    e.stopPropagation(), p(void 0);
                    let n = t.getSpaceId();
                    if (!n) return void p("Unable to determine space");
                    let o = await c({
                        environment: s,
                        runId: t.id,
                        spaceId: n
                    });
                    o.success ? (u(!0), null == a || a(), setTimeout(() => {
                        u(!1)
                    }, 2e3)) : p(o.error || "Failed to resume run")
                };
                return d ? (0, r.jsx)(n(51831).m, {
                    placement: "top",
                    content: () => l.formatMessage({
                        id: "workflow.reenqueueRun.success",
                        defaultMessage: "Run resumed successfully"
                    }),
                    children: e => (0, r.jsx)(n(374533).A, { ...e,
                        icon: n(437102).checkmarkCircleSmallIcon,
                        colorPalette: "green",
                        size: "sm",
                        disabled: !0,
                        ariaLabel: l.formatMessage({
                            id: "workflow.reenqueueRun.successAriaLabel",
                            defaultMessage: "Run successfully resumed"
                        })
                    })
                }) : (0, r.jsx)(n(51831).m, {
                    placement: "top",
                    content: () => g || (f ? l.formatMessage({
                        id: "workflow.reenqueueRun.disabledTooltip",
                        defaultMessage: "Increase limit to resume this run"
                    }) : l.formatMessage({
                        id: "workflow.reenqueueRun.tooltip",
                        defaultMessage: "Resume this run"
                    })),
                    children: e => (0, r.jsx)(n(374533).A, { ...e,
                        icon: n(670989).l,
                        colorPalette: g ? "red" : "gray",
                        size: "sm",
                        onClick: m,
                        disabled: f,
                        ariaLabel: l.formatMessage({
                            id: "workflow.reenqueueRun.ariaLabel",
                            defaultMessage: "Resume paused run"
                        })
                    })
                })
            }
            n(16280);
            let g = (0, n(109939).YK)({
                deleteChat: {
                    id: "workflowThreads.deleteChat",
                    defaultMessage: "Delete chat"
                }
            });

            function p(e) {
                let t = Math.floor(Math.floor((Date.now() - e) / 1e3) / 60),
                    n = Math.floor(t / 60),
                    o = Math.floor(n / 24);
                return o > 0 ? `${o}d` : n > 0 ? `${n}h` : t > 0 ? `${t}m` : "now"
            }
            let f = {
                container: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    minWidth: 0
                },
                primary: {
                    flexGrow: 1,
                    flexShrink: 2,
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                secondary: {
                    color: n(632079).Tj.text.secondary,
                    flexGrow: 0,
                    flexShrink: 0,
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }
            };

            function m(e) {
                let {
                    thread: t,
                    workflowStore: o,
                    runStore: i,
                    threadStore: a
                } = e, s = (0, n(109939).tz)(), l = (0, n(682985).K8)(() => {
                    var e;
                    let t, r, s;
                    if (!i || !i.isDefined()) return;
                    let l = i.getTriggerId(),
                        d = null == (e = i.getData()) ? void 0 : e.trigger_data;
                    if (!l || !d) return;
                    try {
                        t = JSON.parse(d)
                    } catch {
                        return
                    }
                    let c = t,
                        u = function(e) {
                            var t;
                            let {
                                workflowStore: o,
                                threadStore: i
                            } = e, r = null == i || null == (t = i.getData()) ? void 0 : t.workflow_artifact_pointer;
                            if (!r) return;
                            let a = n(509297).j.createChildStore(o, r);
                            if (!a.isType("version")) return;
                            let s = a.getData();
                            if (s) return {
                                workflowData: s,
                                workflowDefinitionPointer: a.pointer
                            }
                        }({
                            workflowStore: o,
                            threadStore: a
                        });
                    u ? (r = u.workflowData, s = u.workflowDefinitionPointer) : (r = o.getData(), s = o.pointer);
                    let g = (0, n(210511).getSpecificWorkflowTrigger)({
                            workflowData: r,
                            triggerId: l
                        }),
                        p = (0, n(210511).getTriggerDefinitionBySpecificTrigger)(g);
                    if (g && p) return {
                        trigger: g,
                        triggerData: c,
                        triggerDefinition: p,
                        moduleId: g.moduleId ? ? "notion",
                        workflowDefinitionPointer: s ? ? o.pointer
                    }
                }, [i, o, a]);
                return l ? (0, r.jsx)(l.triggerDefinition.TriggerOrRunTitle, {
                    trigger: l.trigger,
                    data: l.triggerData,
                    moduleId: l.moduleId,
                    workflowDefinitionPointer: l.workflowDefinitionPointer,
                    titleContext: "run"
                }) : !t.trigger_id && t.created_by_display_name ? (0, r.jsxs)("span", {
                    style: f.container,
                    children: [(0, r.jsx)("span", {
                        style: f.primary,
                        children: t.title || s.formatMessage({
                            id: "workflowThreads.untitledChat",
                            defaultMessage: "Untitled chat"
                        })
                    }), (0, r.jsx)("span", {
                        style: f.secondary,
                        children: t.created_by_display_name
                    })]
                }) : (0, r.jsx)("span", {
                    children: t.title || s.formatMessage({
                        id: "workflowThreads.untitledChat",
                        defaultMessage: "Untitled chat"
                    })
                })
            }
            let h = {
                statusContainer: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    lineHeight: "16px",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    color: n(632079).Tj.text.tertiary
                },
                style0: {
                    color: n(632079).Tj.orange.text.accentPrimary
                },
                style1: {
                    color: n(632079).Tj.red.text.accentPrimary
                },
                style2: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                }
            };

            function w(e) {
                let {
                    waitingUntil: t,
                    threadStore: o,
                    runStore: i,
                    workflowStore: a,
                    shouldSuppressFailureStatus: s,
                    isThreadStuck: l
                } = e, d = (0, n(109939).tz)(), c = (0, n(682985).K8)(() => null == o ? void 0 : o.getCreatedTime(), [o]), g = (0, n(682985).K8)(() => null == i ? void 0 : i.getStatus(), [i]), f = (0, n(682985).K8)(() => {
                    var e;
                    return null == i || null == (e = i.getData()) ? void 0 : e.paused_reason
                }, [i]), m = (0, n(682985).K8)(() => !!i && (0, n(604384).QF)({
                    runStatus: g,
                    runPausedReason: f
                }), [i, g, f]), w = (0, n(682985).K8)(() => {
                    let e = null == o ? void 0 : o.getTranscript();
                    return !!e && e.some(e => "agent-tool-result" === e.type && ("confirmation:requested" === e.state || "requested" === e.userConfirmation))
                }, [o]), y = (0, n(682985).K8)(() => {
                    let e = null == o ? void 0 : o.getTranscript();
                    if (!e) return !1;
                    for (let t = e.length - 1; t >= 0; t -= 1) {
                        let n = e[t];
                        if ("agent-route-trigger" === n.type) return !1 === n.passed
                    }
                    return !1
                }, [o]);
                if (t) return (0, r.jsxs)("div", {
                    style: h.statusContainer,
                    children: ["pending" === g && i ? (0, r.jsx)(n(336198).M, {
                        runStore: i
                    }) : void 0, (0, r.jsx)(n(51831).m, {
                        delayThreshold: 0,
                        placement: "top",
                        content: () => d.formatMessage({
                            id: "workflow.waiting.tooltip",
                            defaultMessage: "This run is waiting before it can resume. Waiting until {time}."
                        }, {
                            time: new Date(t).toLocaleTimeString()
                        }),
                        children: e => (0, r.jsx)("div", { ...e,
                            children: d.formatMessage({
                                id: "workflow.waiting.badge",
                                defaultMessage: "Waiting"
                            })
                        })
                    }), c ? p(c) : void 0]
                });
                if (w || "paused" === g && "needsReview" === f) return (0, r.jsxs)("div", {
                    style: { ...h.statusContainer,
                        ...h.style0
                    },
                    children: [(0, r.jsx)(n(16275).I, {
                        icon: n(372365).clockSmallIcon,
                        size: "sm"
                    }), (0, r.jsx)("span", {
                        children: (0, n(604384).R6)("needsReview", d)
                    }), c ? p(c) : void 0]
                });
                if ("paused" === g && f) return (0, r.jsxs)("div", {
                    style: h.statusContainer,
                    children: [m && i ? (0, r.jsx)(u, {
                        runStore: i,
                        workflowStore: a
                    }) : void 0, (0, r.jsx)(n(51831).m, {
                        delayThreshold: 0,
                        placement: "top",
                        content: () => (0, n(604384).of)(f, d),
                        children: e => (0, r.jsx)("span", { ...e,
                            children: (0, n(604384).R6)(f, d)
                        })
                    }), c ? p(c) : void 0]
                });
                if ("cancelled" === g) return (0, r.jsxs)("div", {
                    style: h.statusContainer,
                    children: [(0, r.jsx)(n(16275).I, {
                        icon: n(580171).j,
                        size: "sm"
                    }), (0, r.jsx)("span", {
                        children: d.formatMessage({
                            id: "workflowThreads.status.cancelled",
                            defaultMessage: "Cancelled"
                        })
                    }), c ? p(c) : void 0]
                });
                if (l || "failure" === g && !s) {
                    let e = l ? d.formatMessage({
                            id: "workflowThreads.status.stuck.tooltip",
                            defaultMessage: "This run encountered an issue and never finished"
                        }) : void 0,
                        t = (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(n(16275).I, {
                                icon: n(813524).exclamationMarkCircleFillSmallIcon,
                                size: "sm"
                            }), (0, r.jsx)("span", {
                                children: d.formatMessage({
                                    id: "workflowThreads.status.failed",
                                    defaultMessage: "Failed"
                                })
                            })]
                        });
                    return (0, r.jsxs)("div", {
                        style: { ...h.statusContainer,
                            ...h.style1
                        },
                        children: [e ? (0, r.jsx)(n(51831).m, {
                            delayThreshold: 0,
                            placement: "top",
                            content: () => e,
                            children: e => (0, r.jsx)("div", { ...e,
                                style: h.style2,
                                children: t
                            })
                        }) : t, c ? p(c) : void 0]
                    })
                }
                return "insufficientPermissions" === g ? (0, r.jsxs)("div", {
                    style: { ...h.statusContainer,
                        ...h.style1
                    },
                    children: [(0, r.jsx)(n(16275).I, {
                        icon: n(813524).exclamationMarkCircleFillSmallIcon,
                        colorPalette: "red",
                        size: "sm"
                    }), (0, r.jsx)("span", {
                        children: d.formatMessage({
                            id: "workflowThreads.status.insufficientPermissions",
                            defaultMessage: "Blocked"
                        })
                    }), c ? p(c) : void 0]
                }) : "retryableFailure" === g ? (0, r.jsxs)("div", {
                    style: { ...h.statusContainer,
                        ...h.style0
                    },
                    children: [(0, r.jsx)(n(16275).I, {
                        icon: n(670989).l,
                        size: "sm"
                    }), (0, r.jsx)("span", {
                        children: d.formatMessage({
                            id: "workflowThreads.status.retrying",
                            defaultMessage: "Retrying"
                        })
                    }), c ? p(c) : void 0]
                }) : y ? (0, r.jsxs)("div", {
                    style: h.statusContainer,
                    children: [(0, r.jsx)(n(16275).I, {
                        icon: n(580171).j,
                        size: "sm"
                    }), (0, r.jsx)("span", {
                        children: d.formatMessage({
                            id: "workflowThreads.status.skipped",
                            defaultMessage: "No action"
                        })
                    }), c ? p(c) : void 0]
                }) : (0, r.jsx)("div", {
                    style: h.statusContainer,
                    children: c ? p(c) : void 0
                })
            }
            let y = {
                primaryMessage: {
                    fontSize: 14,
                    lineHeight: "20px",
                    color: n(632079).Tj.text.primary,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    flex: "0 1 auto"
                }
            };

            function x(e) {
                let {
                    workflowStore: t,
                    clientStore: i,
                    thread: a,
                    isClickable: s = !1,
                    isHighlighted: l = !1,
                    onThreadClick: c,
                    onDelete: u
                } = e, [p, f] = (0, o.useState)(!1), h = (0, n(682985).K8)(() => t.getSpaceId(), [t]), x = (0, n(682985).K8)(() => {
                    if (a.run_id && h) return n(849697).t.createChildStore(t, {
                        table: n(584742).Q,
                        id: a.run_id,
                        spaceId: h
                    })
                }, [a.run_id, t, h]), v = (0, n(682985).K8)(() => {
                    if (!x) return;
                    let e = x.getDequeueAfter();
                    if ("pending" === x.getStatus() && e && e > Date.now()) return e
                }, [x]), b = (0, n(972740).L)(), k = (0, n(682985).K8)(() => {
                    if (b && a.id) return n(174148).E.createChildStore(b, {
                        table: n(298085).T,
                        id: a.id,
                        spaceId: b.id
                    })
                }, [b, a.id]), j = (0, n(682985).K8)(() => {
                    if (!k || !x || "running" !== x.getStatus()) return !1;
                    let e = (0, n(187353).NR)();
                    return (0, n(187353)._P)(k, e)
                }, [x, k]), S = (0, n(682985).K8)(() => {
                    if (!k || !x || "failure" !== x.getStatus()) return !1;
                    let e = k.getTranscript(),
                        t = e.findLastIndex(e => "agent-trigger" === e.type);
                    return !!(-1 !== t && e.slice(t + 1).some(e => "user" === e.type || "user-injected" === e.type))
                }, [x, k]), M = (0, n(960253).I)(() => ({
                    threadItem: {
                        width: "100%",
                        position: "relative",
                        borderRadius: 6,
                        paddingInline: 12,
                        height: 36,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        cursor: "pointer",
                        background: l ? n(632079).Tj.background.tertiaryTranslucent : p ? n(632079).Tj.background.secondaryTranslucent : "transparent"
                    }
                }), [p, l]), C = (0, o.useCallback)(e => {
                    e.preventDefault(), e.stopPropagation(), s && c && c(e)
                }, [s, c]), I = (0, o.useCallback)(e => {
                    e.preventDefault(), e.stopPropagation(), null == u || u()
                }, [u]), A = (0, n(109939).tz)(), T = (p || l) && u ? (0, r.jsx)(n(51831).m, {
                    placement: "top",
                    content: () => A.formatMessage(g.deleteChat),
                    delayThreshold: 200,
                    children: e => (0, r.jsx)(n(374533).A, { ...e,
                        icon: n(822973).trashSmallIcon,
                        ariaLabel: A.formatMessage(g.deleteChat),
                        colorVariant: "secondary",
                        onClick: I
                    })
                }) : null;
                return (0, r.jsxs)(n(988022).p, {
                    style: M.threadItem,
                    onClick: C,
                    onMouseEnter: () => f(!0),
                    onMouseLeave: () => f(!1),
                    children: [(0, r.jsx)(d, {
                        spaceId: h,
                        runId: a.run_id,
                        runStore: x,
                        workflowStore: t,
                        clientStore: i,
                        threadStore: k,
                        waitingUntil: v,
                        isThreadStuck: j
                    }), (0, r.jsx)(n(4458).fI, {
                        flex: 1,
                        minWidth: 0,
                        alignItems: "center",
                        gap: 6,
                        paddingInlineEnd: 6,
                        children: (0, r.jsx)("span", {
                            style: y.primaryMessage,
                            children: (0, r.jsx)(m, {
                                thread: a,
                                workflowStore: t,
                                runStore: x,
                                threadStore: k
                            })
                        })
                    }), (0, r.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 8,
                        flexShrink: 0,
                        children: [(0, r.jsx)(w, {
                            waitingUntil: v,
                            threadStore: k,
                            runStore: x,
                            workflowStore: t,
                            shouldSuppressFailureStatus: S,
                            isThreadStuck: j
                        }), T]
                    })]
                })
            }
        },
        887652: (e, t, n) => {
            function o(e) {
                let {
                    teamStore: t,
                    userId: n
                } = e;
                return function(e) {
                    let {
                        rawMembership: t,
                        userId: n
                    } = e;
                    return t.find(e => "user" === e.entity_type && e.user_id === n && "none" !== e.type)
                }({
                    rawMembership: t.getRawMembership(),
                    userId: n
                })
            }
            n.d(t, {
                p: () => o
            }), n(898992), n(672577)
        },
        896597: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var o = () => n(546605);
            class i extends o().Store {
                getInitialState() {
                    return {
                        isFullScreen: window.outerWidth === window.screen.width && window.outerHeight === window.screen.height
                    }
                }
                constructor() {
                    super(), n(884972).Y5.addListener(this.updateFromElectronState), this.updateFromElectronState()
                }
                updateFromElectronState = async () => {
                    let e = await n(884972).Y5.get();
                    void 0 !== e && this.setState({
                        isFullScreen: e
                    })
                }
            }
            let r = new i
        },
        912479: (e, t, n) => {
            n.d(t, {
                k: () => r
            }), n(581454), n(296540);
            var o = n(474848);
            let i = {
                conversationStarter: {
                    borderRadius: 20,
                    backgroundColor: n(632079).Tj.background.secondary,
                    fontSize: 14,
                    color: n(632079).Tj.text.primary,
                    cursor: "pointer",
                    transition: "background-color 150ms",
                    border: "none"
                },
                conversationStarterHover: {
                    backgroundColor: n(632079).Tj.background.tertiaryTranslucent
                }
            };

            function r(e) {
                let {
                    starters: t,
                    onStarterClick: r,
                    disabled: a
                } = e;
                return (0, o.jsx)(n(4458).fI, {
                    width: 800,
                    maxWidth: "100%",
                    marginTop: 16,
                    flexWrap: "wrap",
                    justifyContent: "start",
                    gap: 8,
                    children: t.map((e, t) => (0, o.jsx)(n(988022).p, {
                        size: "lg",
                        onClick: () => r(e),
                        style: i.conversationStarter,
                        hoveredStyle: i.conversationStarterHover,
                        disabled: a,
                        children: e
                    }, t))
                })
            }
        },
        946493: (e, t, n) => {
            n.d(t, {
                P: () => h
            });
            var o = n(296540),
                i = n(474848);
            let r = (0, n(109939).YK)({
                    share: {
                        defaultMessage: "Share",
                        id: "topbar.share"
                    }
                }),
                a = {
                    shortcut: {
                        color: n(632079).Tj.text.inverseSecondary
                    }
                };

            function s({
                buttonPopupEvents: e,
                disabled: t,
                disabledTooltip: r
            }) {
                let l = !(0, n(682985).O$)(n(205885).e),
                    d = !!t || l,
                    u = (0, o.useCallback)(() => r ? (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Agents with “Everything I can access” enabled cannot be shared",
                        id: "topbar.shareButton.disabledByOwnerActorTooltip"
                    }) : l ? (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Unavailable while offline",
                        id: "topbar.shareButton.offlineTooltip"
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            children: (0, i.jsx)(n(109939).sA, {
                                defaultMessage: "Share custom agent",
                                id: "workflows.topbar.shareButton.tooltip"
                            })
                        }), (0, i.jsx)(n(693592).A, {
                            style: a.shortcut,
                            name: "openShareMenu"
                        })]
                    }), [l, r]);
                return (0, i.jsx)(n(51831).m, {
                    disableTooltip: n(986939).A.isMobile || !!t && !r,
                    content: u,
                    placement: "bottom",
                    delayThreshold: 400,
                    children: t => (0, i.jsx)(c, {
                        events: e ? (0, n(63390).A)(t, e) : t,
                        disabled: d
                    })
                })
            }
            let l = (0, n(268736).aD)(),
                d = {
                    mobileIconStyle: l.iconStyle,
                    shareButton: { ...n(986939).A.isMobile ? l.iconContainer : {},
                        marginInlineEnd: 2
                    }
                };

            function c({
                events: e,
                disabled: t
            }) {
                let o = (0, n(109939).tz)(),
                    a = n(986939).A.isMobile ? (0, i.jsx)(n(16275).I, {
                        icon: n(687911).Y,
                        style: d.mobileIconStyle
                    }) : (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Share",
                        id: "topbar.shareButton.title"
                    });
                return (0, i.jsx)(n(988022).p, {
                    id: void 0,
                    className: n(828432).voG,
                    ...e,
                    style: d.shareButton,
                    "aria-label": o.formatMessage(r.share),
                    disabled: t,
                    disabledFeedback: t,
                    children: a
                })
            }

            function u({
                buttonPopupStore: e,
                universalMemberInviteStore: t,
                inviteTargetsStore: n
            }) {
                e.reset(), t.reset(), n.reset()
            }
            let g = o.memo(function({
                    store: e,
                    buttonPopupStore: t,
                    disabled: r
                }) {
                    let a = (0, n(533992).v3)(),
                        l = (0, n(682985).K8)(() => a.device.isTablet, [a]),
                        d = (0, n(682985).uB)(void 0, n(40340).A),
                        c = (0, n(682985).uB)(void 0, n(888173).Ay),
                        g = (0, n(682985).uB)(void 0, n(874003).A),
                        p = (0, n(682985).K8)(() => e.canAdmin(), [e]),
                        f = (0, n(682985).K8)(() => {
                            var t;
                            return null == (t = e.getSpaceStore()) ? void 0 : t.id
                        }, [e]),
                        m = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore),
                        h = (0, n(611285).P)({
                            name: "custom_agents",
                            spaceId: f,
                            userId: a.currentUser.id
                        }),
                        w = (0, n(682985).K8)(() => {
                            var t, n;
                            return t = e, (n = g).shouldUserHaveAccessToPrivateWorkflow && n.shouldUserHaveAccessToPrivateWorkflow() && n.state.changePermissionsEnabled && n.state.privateWorkflowStore && n.state.privateWorkflowStore.id === t.id ? n.state.privateWorkflowStore : t
                        }, [e, g]),
                        y = (0, n(682985).K8)(() => !n(986939).A.isMobile && function(e, t) {
                            let {
                                permissionsInviteStore: n
                            } = e.state;
                            return n.state.inviteTargets.length > 0 || t.state.inviteTargets.length > 0
                        }(d, c), [c, d]),
                        x = (0, n(682985).K8)(() => t.state.open, [t]),
                        v = (0, n(682985).K8)(() => e.isDefined() && e.canRead(), [e]);
                    (0, o.useEffect)(() => {
                        x && !v && (u({
                            buttonPopupStore: t,
                            universalMemberInviteStore: d,
                            inviteTargetsStore: c
                        }), n(729619).XP({
                            environment: a,
                            store: e
                        }))
                    }, [x, v, t, d, c, a, e]), (0, o.useEffect)(() => {
                        n(880853).Ay.setState({ ...n(880853).Ay.state,
                            isInitialized: !0
                        })
                    }), (0, o.useEffect)(() => {
                        p || n(35838).YL({
                            environment: a,
                            sudoModeStore: g,
                            workflowId: e.id,
                            sidebarSpaceStore: m
                        })
                    }, [p, a, e, g, m]);
                    let b = (0, o.useCallback)(() => {
                            t.reset()
                        }, [t]),
                        k = (0, o.useCallback)(() => {
                            u({
                                buttonPopupStore: t,
                                universalMemberInviteStore: d,
                                inviteTargetsStore: c
                            }), (0, n(471e3).I)({
                                environment: a
                            }), n(729619).Tk({
                                environment: a,
                                store: w
                            }), n(371151).x(a)
                        }, [t, d, c, a, w]),
                        j = (0, o.useCallback)(e => (0, i.jsx)(s, {
                            buttonPopupEvents: e
                        }), []),
                        S = (0, o.useCallback)(async () => {
                            if (c.state.inviteTargets.length > 0) {
                                await n(729619).T({
                                    environment: a,
                                    inviteTargetsStore: c
                                }) && (n(729619).XP({
                                    environment: a,
                                    store: e
                                }), u({
                                    buttonPopupStore: t,
                                    universalMemberInviteStore: d,
                                    inviteTargetsStore: c
                                }));
                                return
                            }
                            let {
                                permissionsInviteStore: o
                            } = d.state;
                            "invitee" === o.state.inputFocus && o.setState({ ...o.state,
                                inputFocus: "none"
                            }), await (0, n(494341).iQ)({
                                environment: a,
                                permissionsInviteStoreState: o.state,
                                from: "share_menu",
                                spaceStore: m
                            }) || (n(729619).XP({
                                environment: a,
                                store: e
                            }), u({
                                buttonPopupStore: t,
                                universalMemberInviteStore: d,
                                inviteTargetsStore: c
                            }))
                        }, [t, m, a, c, d, e]),
                        M = (0, n(960253).e)(),
                        C = (0, n(960253).I)(() => ({
                            buttonPopup: { ...n(986939).A.isMobile ? {
                                    width: "100%"
                                } : l ? {
                                    width: 460
                                } : {
                                    width: n(912221).$D,
                                    overflow: "hidden",
                                    borderRadius: n(912221).Sg,
                                    boxShadow: n(632079).Tj.shadow.outline.lg,
                                    ..."dark" === M && {
                                        border: `1px solid ${n(632079).Tj.border.primaryTranslucent}`
                                    }
                                }
                            }
                        }), [l, M]);
                    return !h || r ? (0, i.jsx)(s, {
                        disabled: !0,
                        disabledTooltip: r
                    }) : (0, i.jsx)(n(656252).A, {
                        popupType: n(986939).A.isMobile ? n(656252).z.BottomSheet : n(656252).z.Popup,
                        forceInitialInbound: !0,
                        alignmentToOrigin: "end",
                        buttonPopupStore: t,
                        originGap: n(986939).A.isMobile ? void 0 : 8,
                        style: C.buttonPopup,
                        onClick: k,
                        content: () => (0, i.jsx)(n(868869).k, {
                            buttonPopupStore: t,
                            sudoModeStore: g,
                            store: w,
                            inviteTargetsStore: c,
                            universalMemberInviteStore: d,
                            onUpgradeButtonClick: b,
                            location: n(986939).A.isMobile ? "topbar_mobile" : "topbar_share_button",
                            onClose: S
                        }),
                        persistOnClose: y,
                        onDismiss: S,
                        onClose: S,
                        children: j
                    })
                }),
                p = (0, n(109939).YK)({
                    favoriteAriaLabel: {
                        id: "workflows.agentTopbar.favoriteAriaLabel",
                        defaultMessage: "Favorite"
                    },
                    favoritedAriaLabel: {
                        id: "workflows.agentTopbar.favoritedAriaLabel",
                        defaultMessage: "Favorited"
                    },
                    favoriteTooltip: {
                        id: "workflows.agentTopbar.favoriteTooltip",
                        defaultMessage: "Add to your favorites"
                    },
                    favoritedTooltip: {
                        id: "workflows.agentTopbar.favoritedTooltip",
                        defaultMessage: "Remove from your favorites"
                    }
                }),
                f = {
                    container: {
                        display: "flex",
                        alignItems: "center",
                        pointerEvents: "auto",
                        gap: 4,
                        marginInlineEnd: 2
                    },
                    textButtonGroup: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4
                    },
                    textButtonSeparator: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 16,
                        height: 28,
                        flexShrink: 0
                    },
                    textButtonSeparatorLine: {
                        width: 1,
                        height: 20,
                        backgroundColor: n(632079).Tj.border.secondary
                    },
                    shareButtonWrapper: {
                        marginInlineEnd: -2
                    },
                    favoriteButton: { ...n(440601).RN.iconButton,
                        marginInlineEnd: 0
                    }
                };

            function m() {
                return (0, i.jsx)("div", {
                    style: f.textButtonSeparator,
                    children: (0, i.jsx)("div", {
                        style: f.textButtonSeparatorLine
                    })
                })
            }
            let h = o.memo(function(e) {
                    let {
                        workflowStore: t,
                        activeSidePeek: r,
                        onSidePeekChange: a,
                        disabled: s,
                        onShowVersionHistory: l,
                        sudoModeStore: d
                    } = e, c = (0, n(533992).v3)(), u = (0, n(109939).tz)(), h = (0, n(972740).L)(), w = (0, n(717274).Yv)(), x = (0, o.useMemo)(() => new(n(510969)).A, []), v = (0, n(761615).U)(), b = (0, n(682985).K8)(() => t.canRead(), [t]), k = null == h ? void 0 : h.id, j = (0, n(682985).K8)(() => t.getSpaceId(), [t]), S = (0, n(682985).K8)(() => (0, n(445568).isWorkflowDataDatabaseAgent)(t.getData()), [t]), M = (0, n(682985).K8)(() => {
                        var e;
                        return !!(null == (e = t.getData()) ? void 0 : e.isLite)
                    }, [t]), C = (0, n(83208).X)("database_agent_credit_usage"), I = (0, n(682985).K8)(() => "ownerActor" === (0, n(425749).WF)(t.getDraftData()), [t]), A = (0, n(682985).K8)(() => !!(d.shouldUserHaveAccessToPrivateWorkflow && d.shouldUserHaveAccessToPrivateWorkflow()), [d]), T = (0, n(682985).K8)(() => t.canAdmin() ? ? !1, [t]), D = T && w, {
                        isCreditUsageDisplayEnabled: _,
                        isCreditRequestFlowsEnabled: P,
                        isCreditEnforcementEnabled: L,
                        isWorkspaceAdmin: R,
                        agentCreditState: B,
                        refetchCreditUsage: K,
                        handleMonthlyLimitChange: E,
                        openAICreditsDashboard: V
                    } = (0, n(859592).h)({
                        workflowStore: D ? t : void 0,
                        spaceId: D ? j ? ? k : void 0
                    }), W = (0, n(682985).K8)(() => t.hasChanges(), [t]), N = (0, n(729787).wY)(e.containerRef), z = null == N ? void 0 : N.width, U = T && W, F = function(e) {
                        let {
                            isAgentAdmin: t,
                            isCreditUsageDisplayEnabled: n,
                            isAIUsageDashboardEnabled: o,
                            isDatabaseAgent: i,
                            isLiteDatabaseAgent: r,
                            isDatabaseAgentCreditUsageEnabled: a
                        } = e;
                        return !!t && !!n && !!o && !r && (!i || a)
                    }({
                        isAgentAdmin: T,
                        isCreditUsageDisplayEnabled: _,
                        isAIUsageDashboardEnabled: w,
                        isDatabaseAgent: S,
                        isLiteDatabaseAgent: M,
                        isDatabaseAgentCreditUsageEnabled: C
                    }), O = v.includes(t.id), q = (0, n(960253).I)(() => ({
                        favoriteIcon: { ...n(440601).RN.icon,
                            ...O ? {
                                fill: n(632079).Tj.topbarFavorite
                            } : void 0
                        }
                    }), [O]), H = (0, o.useMemo)(() => O ? () => n(280772).Iq({
                        environment: c,
                        workflowId: t.id,
                        from: "agent_topbar"
                    }) : () => n(280772).xG({
                        environment: c,
                        workflowId: t.id,
                        from: "agent_topbar"
                    }), [c, t.id, O]), G = (0, o.useCallback)(() => {
                        "settings" === r ? a(void 0) : a("settings")
                    }, [r, a]), $ = (0, o.useCallback)(() => {
                        V()
                    }, [V]);
                    return (0, i.jsxs)("div", {
                        style: f.container,
                        children: [(0, i.jsxs)("div", {
                            style: f.textButtonGroup,
                            children: [F ? (0, i.jsx)(n(34045).yh, {
                                creditState: B,
                                isWorkspaceAdmin: R,
                                isCreditEnforcementEnabled: L,
                                isCreditRequestFlowsEnabled: P,
                                containerWidth: z,
                                onOpen: K,
                                onCurrentUsageClick: V,
                                onMonthlyLimitChange: E,
                                onRequestMoreCreditsClick: $
                            }) : void 0, F ? (0, i.jsx)(m, {}) : void 0, (0, i.jsx)(n(5750).X, {
                                onClick: G,
                                showDirtyDot: U,
                                containerWidth: z
                            }), (b || A) && !s && !S ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(m, {}), (0, i.jsx)("div", {
                                    style: f.shareButtonWrapper,
                                    children: (0, i.jsx)(g, {
                                        store: t,
                                        buttonPopupStore: x,
                                        disabled: I
                                    })
                                })]
                            }) : void 0]
                        }), (0, i.jsx)(n(51831).m, {
                            placement: "bottom",
                            originGap: c.device.isElectronWindows ? 10 : void 0,
                            content: () => (0, i.jsx)(n(109939).sA, { ...O ? p.favoritedTooltip : p.favoriteTooltip
                            }),
                            children: e => (0, i.jsx)(n(374533).A, { ...e,
                                icon: O ? n(170303).F : n(150963).w,
                                style: f.favoriteButton,
                                iconStyle: q.favoriteIcon,
                                onClick: H,
                                ariaLabel: u.formatMessage(O ? p.favoritedAriaLabel : p.favoriteAriaLabel)
                            })
                        }), (0, i.jsx)(y, {
                            workflowStore: t,
                            onShowVersionHistory: l
                        })]
                    })
                }),
                w = {
                    button: { ...n(440601).RN.iconButton,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 6,
                        marginInlineEnd: 0
                    },
                    mobilePopupStyle: {
                        borderRadius: 12,
                        backgroundColor: n(632079).Tj.background.secondary
                    },
                    menuPropIcon: {
                        fill: n(632079).Tj.icon.primary
                    }
                };

            function y(e) {
                let {
                    workflowStore: t,
                    onShowVersionHistory: r
                } = e, a = (0, n(533992).v3)(), s = (0, n(109939).tz)(), l = (0, o.useMemo)(() => new(n(510969)).A, []), d = s.formatMessage({
                    defaultMessage: "More…",
                    id: "agentTopbar.moreButton.tooltip"
                });
                return (0, i.jsx)(n(656252).A, {
                    popupType: n(986939).A.isMobile ? n(656252).z.BottomSheet : n(656252).z.Popup,
                    alignmentToOrigin: "end",
                    buttonPopupStore: l,
                    content: e => (0, i.jsx)(n(957768)._, {
                        workflowStore: t,
                        context: "topbar",
                        onShowVersionHistory: r,
                        dismiss: e.close
                    }),
                    originGap: a.device.isElectronWindows ? 12 : 8,
                    forceInitialInbound: !0,
                    style: n(986939).A.isMobile ? w.mobilePopupStyle : {
                        width: 256,
                        maxHeight: "80vh"
                    },
                    children: e => (0, i.jsx)(n(51831).m, {
                        content: () => d,
                        placement: "bottom",
                        originGap: a.device.isElectronWindows ? 10 : void 0,
                        delayThreshold: 400,
                        children: t => (0, i.jsx)(n(64960).Ay, {
                            style: w.button,
                            ariaLabel: d,
                            ...e,
                            ...t,
                            children: (0, i.jsx)(n(16275).I, {
                                icon: n(397900).ellipsisIcon,
                                size: "lg",
                                style: w.menuPropIcon
                            })
                        })
                    })
                })
            }
        },
        957768: (e, t, n) => {
            n.d(t, {
                _: () => g
            }), n(814603), n(147566), n(198721);
            var o = n(296540);
            async function i(e) {
                let {
                    environment: t,
                    workflowPointer: o,
                    spaceStore: i,
                    addToFavorites: r = !0
                } = e, a = function(e) {
                    let {
                        environment: t,
                        spaceStore: o,
                        sourceWorkflowPointer: i
                    } = e, r = n(360851).N.createChildStore(o, i), a = r.getData(), s = (null == a ? void 0 : a.name) ? ? "Untitled Agent", l = null == a ? void 0 : a.icon, d = r.getParentPointer(), c = (0, n(441998).Q)(s);
                    return (0, n(10681).k)({
                        environment: t,
                        spaceStore: o,
                        workflowName: c,
                        workflowIcon: l,
                        sourceWorkflowPointer: i,
                        parentPointer: d
                    })
                }({
                    environment: t,
                    spaceStore: i,
                    sourceWorkflowPointer: o
                });
                if (!a) throw Error("Failed to create placeholder workflow");
                await a.serverCommitResult, r && n(280772).xG({
                    environment: t,
                    workflowId: a.workflowStore.id,
                    from: "duplicate_workflow"
                });
                let s = n(975162).yX();
                return (0, n(703465).k)({
                    environment: t,
                    sourceWorkflowPointer: o,
                    targetWorkflowId: a.workflowStore.id,
                    spaceId: i.id,
                    deferred: s
                }), {
                    workflowStore: a.workflowStore,
                    onComplete: s.promise
                }
            }
            async function r(e) {
                let {
                    environment: t,
                    workflowStore: o
                } = e, {
                    serverCommitResult: i
                } = (0, n(377796).createAndCommit)({
                    environment: t,
                    userAction: "workflowActions.softDeleteWorkflow",
                    cellTarget: {
                        spaceWithId: o.pointer.spaceId
                    },
                    perform: e => {
                        (0, n(421439).y4)({
                            store: o,
                            transaction: e,
                            operation: {
                                pointer: o.pointer,
                                command: "set",
                                path: ["alive"],
                                args: !1
                            }
                        });
                        let t = o.getData(),
                            i = (null == t ? void 0 : t.triggers) || [];
                        if (i.length > 0) {
                            let t = i.map(e => ({ ...e,
                                enabled: !1
                            }));
                            (0, n(421439).y4)({
                                store: o,
                                operation: n(861988).IA({
                                    pointer: o.pointer,
                                    triggers: t
                                }),
                                transaction: e
                            })
                        }
                    },
                    canUndo: !0
                });
                n(280772).Iq({
                    environment: t,
                    workflowId: o.id,
                    from: "agent_deletion"
                }), await i
            }
            n(16280), n(581454);
            var a = n(474848);
            let s = {
                    paddingBlock: 8,
                    paddingInline: 12
                },
                l = {
                    marginBottom: 4
                },
                d = {
                    marginBottom: 0
                };

            function c(e) {
                let {
                    store: t
                } = e, o = (0, n(109939).tz)(), i = (0, n(682985).K8)(() => t.canRead(), [t]), r = (0, n(682985).K8)(() => t.getLastEditedByPointer(), [t]), c = (0, n(682985).K8)(() => t.getLastEditedTime(), [t]), u = (0, n(682985).K8)(() => r ? (0, n(935786).vt)({
                    parentStore: t,
                    pointer: r
                }) : void 0, [t, r]), g = (0, n(682985).K8)(() => c ? (0, n(850640).jE)(c, n(849917).locale, o) : "", [c, o]), p = (0, n(682985).K8)(() => null != u && u.asActor ? (0, n(197018).lR)(o, u) : void 0, [u, o]);
                return i && p && g ? (0, a.jsx)(n(844565).A, {
                    topBorder: !0,
                    children: (0, a.jsx)(n(636518).Ay, {
                        shouldWrapTitle: !0,
                        title: (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(n(324489).V, {
                                isSmall: !0,
                                isSecondaryColor: !0,
                                isMultiline: !0,
                                style: l,
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "workflowMetadataMenuItem.lastEditedBy",
                                    defaultMessage: "Last edited by {author}",
                                    values: {
                                        author: p
                                    }
                                })
                            }), (0, a.jsx)(n(324489).V, {
                                isSmall: !0,
                                isSecondaryColor: !0,
                                style: d,
                                children: g
                            })]
                        }),
                        style: s
                    })
                }) : null
            }
            let u = {
                keyboardShortcut: {
                    color: n(632079).Tj.text.tertiary,
                    fontSize: 12,
                    whiteSpace: "nowrap"
                }
            };

            function g(e) {
                let {
                    navigate: t
                } = (0, o.useContext)(n(44894).E), {
                    workflowStore: s,
                    context: l,
                    onShowVersionHistory: d,
                    dismiss: g
                } = e, f = (0, n(533992).v3)(), m = (0, n(109939).tz)(), h = (0, n(682985).K8)(() => {
                    var e;
                    return null == (e = s.getSpaceStore()) ? void 0 : e.id
                }, [s]), w = (0, n(611285).P)({
                    name: "custom_agents",
                    spaceId: h,
                    userId: f.currentUser.id
                }) ? ? !1, y = (0, n(346596).L)(f), x = (null == y ? void 0 : y.id) === s.id, v = (0, n(682985).K8)(() => s.getName(), [s]), b = (0, n(761615).U)().includes(s.id), k = (0, n(682985).K8)(() => s.canEdit(), [s]), {
                    canCreate: j
                } = (0, n(639938).V)(), S = (0, n(682985).K8)(() => n(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }).duplicate_agents, []), M = (0, n(682985).K8)(() => !!n(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }).analytics_view && s.canAdmin(), [s]), C = (0, o.useCallback)(async () => {
                    let e = new URL((0, n(453573).Lm)({
                            workflowId: s.id,
                            params: {}
                        }), window.location.origin).href,
                        [t, o] = await Promise.all([(0, n(161333).r)(), (0, n(969899).jd)()]);
                    await o({
                        environment: f,
                        stringValue: e,
                        copiedMessage: t.copiedLinkToClipboard
                    })
                }, [f, s.id]), I = (0, o.useCallback)(() => {
                    n(280772).xG({
                        environment: f,
                        workflowId: s.id,
                        from: "agent_actions_menu"
                    })
                }, [f, s.id]), A = (0, o.useCallback)(() => {
                    n(280772).Iq({
                        environment: f,
                        workflowId: s.id,
                        from: "agent_actions_menu"
                    })
                }, [f, s.id]), T = (0, o.useCallback)(async () => {
                    try {
                        let e = s.getSpaceStore();
                        if (!e) return;
                        let {
                            workflowStore: o,
                            onComplete: r
                        } = await i({
                            environment: f,
                            workflowPointer: s.pointer,
                            spaceStore: e
                        });
                        (0, n(599231).Ql)({
                            workflowId: o.id,
                            creationMethod: "duplicate",
                            sourceWorkflowId: s.id
                        }), t({
                            environment: f,
                            url: (0, n(453573).Lm)({
                                workflowId: o.id,
                                params: {
                                    workflowViewType: "settings"
                                },
                                peekModeParam: (0, n(475097).getUrlParamFromPeekMode)(n(387722).A),
                                peekViewBlockId: o.id
                            })
                        }), r.catch(() => {
                            n(647095).f1(m.formatMessage({
                                defaultMessage: "Failed to duplicate Agent. Please try again.",
                                id: "workflows.agentTopbar.duplicateError"
                            }))
                        })
                    } catch (e) {
                        n(647095).f1(m.formatMessage({
                            defaultMessage: "Failed to duplicate Agent. Please try again.",
                            id: "workflows.agentTopbar.duplicateError"
                        }))
                    }
                }, [f, s, t, m]), D = (0, o.useCallback)(async () => {
                    let {
                        accept: e
                    } = await n(647095).Gh({
                        message: m.formatMessage({
                            defaultMessage: "Are you sure you want to move {agentName, select, undefined {this Agent} other {{agentName}}} to Trash?",
                            id: "workflows.agentTopbar.deleteConfirmMessage"
                        }, {
                            agentName: (null == v ? void 0 : v.trim()) ? v : void 0
                        }),
                        acceptLabel: m.formatMessage({
                            id: "workflows.agentTopbar.deleteAcceptLabel",
                            defaultMessage: "Move to Trash"
                        })
                    });
                    if (e) try {
                        await r({
                            environment: f,
                            workflowStore: s
                        }), x && t({
                            environment: f,
                            url: "/ai",
                            skipWorkflowCheck: !0
                        })
                    } catch (e) {
                        n(647095).f1(m.formatMessage({
                            defaultMessage: "Failed to move Agent to Trash. Please try again.",
                            id: "workflows.agentTopbar.deleteError"
                        }))
                    }
                }, [m, f, s, x, v, t]), _ = (0, o.useCallback)(() => {
                    t({
                        environment: f,
                        url: (0, n(453573).Lm)({
                            workflowId: s.id,
                            params: {
                                workflowViewType: "settings"
                            },
                            peekModeParam: (0, n(475097).getUrlParamFromPeekMode)(n(387722).A),
                            peekViewBlockId: s.id
                        })
                    })
                }, [f, s, t]), P = (0, o.useCallback)(() => {
                    t({
                        environment: f,
                        url: (0, n(453573).Lm)({
                            workflowId: s.id,
                            params: {
                                workflowViewType: "analytics"
                            }
                        })
                    })
                }, [f, s.id, t]), L = [{
                    key: 0,
                    render: e => (0, a.jsx)(n(844565).A, { ...e,
                        topBorder: !1
                    }),
                    items: (0, n(682985).K8)(() => [...l.startsWith("sidebar") ? "sidebar-draggable" === l ? [{
                        key: "remove-favorite",
                        render: e => (0, a.jsx)(n(95582).A, {
                            icon: (0, a.jsx)(n(16275).I, {
                                icon: n(139780).d
                            }),
                            title: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Remove from favorites",
                                id: "sidebar.agents.removeFromFavorites"
                            }),
                            ...e
                        }),
                        action: A
                    }] : [{
                        key: "favorite",
                        render: e => (0, a.jsx)(n(95582).A, {
                            icon: (0, a.jsx)(n(16275).I, {
                                icon: b ? n(139780).d : n(150963).w
                            }),
                            title: b ? m.formatMessage({
                                id: "agents.AgentSidebarItem.unstar",
                                defaultMessage: "Remove from favorites"
                            }) : m.formatMessage({
                                id: "agents.AgentSidebarItem.star",
                                defaultMessage: "Add to favorites"
                            }),
                            ...e
                        }),
                        action: () => {
                            b ? A() : I()
                        }
                    }] : [], ...l.startsWith("sidebar") && k ? [{
                        key: "view-settings",
                        render: e => (0, a.jsx)(n(95582).A, {
                            icon: (0, a.jsx)(n(16275).I, {
                                icon: n(213039).M
                            }),
                            title: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "View settings",
                                id: "sidebar.agents.viewSettings"
                            }),
                            ...e
                        }),
                        action: _
                    }] : [], ...M ? [{
                        key: "view-analytics",
                        render: e => (0, a.jsx)(n(95582).A, {
                            icon: (0, a.jsx)(n(16275).I, {
                                icon: n(947449).o
                            }),
                            title: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "View analytics",
                                id: "sidebar.agents.viewAnalytics"
                            }),
                            ...e
                        }),
                        action: P
                    }] : [], ...f.device.isElectron ? [{
                        key: "copy-link-electron",
                        render: e => (0, a.jsx)(n(95582).A, {
                            icon: (0, a.jsx)(n(16275).I, {
                                icon: n(588739).linkIcon
                            }),
                            title: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Copy link",
                                id: "workflows.agentTopbar.copyLink"
                            }),
                            right: n(986939).A.isMobile ? void 0 : (0, a.jsx)(n(693592).A, {
                                name: "copyLinkToCurrentPage",
                                onlyShowFirst: !0,
                                style: u.keyboardShortcut
                            }),
                            ...e
                        }),
                        action: C
                    }] : [{
                        key: "copy-link-web",
                        render: e => (0, a.jsx)(n(95582).A, {
                            icon: (0, a.jsx)(n(16275).I, {
                                icon: n(588739).linkIcon
                            }),
                            title: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Copy link",
                                id: "workflows.agentTopbar.copyLink"
                            }),
                            right: n(986939).A.isMobile ? void 0 : (0, a.jsx)(n(693592).A, {
                                name: "copyCurrentPageLinkifiedBlockTitle",
                                onlyShowFirst: !0,
                                style: u.keyboardShortcut
                            }),
                            ...e
                        }),
                        action: C
                    }], ..."topbar" === l && d && k ? [{
                        key: "version-history",
                        render: e => (0, a.jsx)(n(95582).A, {
                            icon: (0, a.jsx)(n(16275).I, {
                                icon: n(442219).w
                            }),
                            title: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Version history",
                                id: "workflows.agentTopbar.versionHistory"
                            }),
                            ...e
                        }),
                        action: () => {
                            null == d || d()
                        }
                    }] : [], ...j && S && w ? [{
                        key: "duplicate",
                        render: e => (0, a.jsx)(n(95582).A, {
                            icon: (0, a.jsx)(n(16275).I, {
                                icon: n(703696).V
                            }),
                            title: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Duplicate",
                                id: "workflows.agentTopbar.duplicateAgent"
                            }),
                            ...e
                        }),
                        action: T
                    }] : [], ...k ? [{
                        key: "delete",
                        render: e => (0, a.jsx)(n(860287).A, {
                            isRed: !0,
                            svg: e => (0, a.jsx)(n(16275).I, {
                                icon: n(968411).trashIcon,
                                style: e
                            }),
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "workflows.agentTopbar.deleteAgent",
                                defaultMessage: "Move to Trash"
                            }),
                            ...e
                        }),
                        action: D
                    }] : []], [C, A, _, P, T, D, j, S, M, w, l, k, f.device.isElectron, d, b, m, I])
                }], R = {
                    menuType: n(986939).A.isMobile ? n(649476).gu.Modal : n(649476).gu.Popup,
                    right: n(986939).A.isMobile && "sidebar-static" === l ? (0, a.jsx)(n(109939).sA, { ...n(789722).W.done
                    }) : void 0,
                    ..."topbar" === l && {
                        width: 256
                    }
                };
                return (0, a.jsxs)(n(747369).A, { ...R,
                    children: [(0, a.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        onAccept: g,
                        initialFocus: void 0,
                        sections: L
                    }), (0, a.jsx)(c, {
                        store: s
                    }), "topbar" === l ? (0, a.jsx)(p, {}) : void 0]
                })
            }

            function p() {
                return (0, a.jsx)(n(844565).A, {
                    topBorder: !0,
                    children: (0, a.jsx)(n(100246).g, {
                        title: (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Learn about custom agents",
                            id: "workflows.agentTopbar.learnAboutCustomAgents"
                        }),
                        href: (0, n(442564).x)("guides.customAgentsHelp"),
                        analyticsFrom: "custom_agent_actions_menu"
                    })
                })
            }
        },
        978568: (e, t, n) => {
            n.d(t, {
                p: () => i
            }), n(296540);
            var o = n(474848);

            function i(e) {
                let {
                    workflowStore: t,
                    activityFilter: i,
                    setActivityFilter: r,
                    menuMinWidth: a
                } = e, s = (0, n(109939).tz)(), l = "all" !== i.type, d = (0, n(682985).K8)(() => n(218744).default.getConfig({
                    configName: "custom_agent_advanced_features"
                }).agentStatsView, []), c = (0, n(682985).K8)(() => t.canAdmin() ? ? !1, [t]), u = (0, n(682985).K8)(() => n(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }).stop_all_runs_button ? ? !1, []), g = d && c;
                return (0, o.jsx)(n(656252).A, {
                    alignmentToOrigin: "end",
                    originGap: 4,
                    popupType: n(182718).nl.Popup,
                    style: a ? {
                        minWidth: a
                    } : void 0,
                    content: e => {
                        let a = {
                            key: "filter-section",
                            render: e => (0, o.jsx)(n(844565).A, { ...e,
                                topBorder: !1,
                                title: (0, o.jsx)(n(109939).sA, {
                                    defaultMessage: "Filter",
                                    id: "agentPage.filter.title"
                                })
                            }),
                            items: [{
                                key: "all-activity",
                                render: e => (0, o.jsx)(n(95582).A, { ...e,
                                    icon: (0, o.jsx)(n(16275).I, {
                                        icon: n(442219).w
                                    }),
                                    title: (0, o.jsx)(n(109939).sA, {
                                        defaultMessage: "All activity",
                                        id: "agentPage.filter.allActivity"
                                    }),
                                    isChecked: "all" === i.type
                                }),
                                action: () => {
                                    (0, n(599231).qt)({
                                        action: "activity_filter_all",
                                        workflowId: t.id
                                    }), r({
                                        type: "all"
                                    }), e.close()
                                }
                            }, ...u ? [{
                                key: "pending-runs",
                                render: e => (0, o.jsx)(n(95582).A, { ...e,
                                    icon: (0, o.jsx)(n(16275).I, {
                                        icon: n(789511).S
                                    }),
                                    title: (0, o.jsx)(n(109939).sA, {
                                        defaultMessage: "Pending",
                                        id: "agentPage.filter.pendingRuns"
                                    }),
                                    isChecked: "pending" === i.type
                                }),
                                action: () => {
                                    (0, n(599231).qt)({
                                        action: "activity_filter_pending",
                                        workflowId: t.id
                                    }), r({
                                        type: "pending"
                                    }), e.close()
                                }
                            }] : [], ...u ? [{
                                key: "in-progress-runs",
                                render: e => (0, o.jsx)(n(95582).A, { ...e,
                                    icon: (0, o.jsx)(n(16275).I, {
                                        icon: n(781184).w
                                    }),
                                    title: (0, o.jsx)(n(109939).sA, {
                                        defaultMessage: "In progress",
                                        id: "agentPage.filter.inProgressRuns"
                                    }),
                                    isChecked: "in_progress" === i.type
                                }),
                                action: () => {
                                    (0, n(599231).qt)({
                                        action: "activity_filter_in_progress",
                                        workflowId: t.id
                                    }), r({
                                        type: "in_progress"
                                    }), e.close()
                                }
                            }] : [], {
                                key: "failed-runs",
                                render: e => (0, o.jsx)(n(95582).A, { ...e,
                                    icon: (0, o.jsx)(n(16275).I, {
                                        icon: n(927364).xMarkCircleIcon
                                    }),
                                    title: (0, o.jsx)(n(109939).sA, {
                                        defaultMessage: "Failed runs",
                                        id: "agentPage.filter.failedRuns"
                                    }),
                                    isChecked: "failed" === i.type
                                }),
                                action: () => {
                                    (0, n(599231).qt)({
                                        action: "activity_filter_failed",
                                        workflowId: t.id
                                    }), r({
                                        type: "failed"
                                    }), e.close()
                                }
                            }, {
                                key: "successful-runs",
                                render: e => (0, o.jsx)(n(95582).A, { ...e,
                                    icon: (0, o.jsx)(n(16275).I, {
                                        icon: n(853160).checkmarkCircleIcon
                                    }),
                                    title: (0, o.jsx)(n(109939).sA, {
                                        defaultMessage: "Successful runs",
                                        id: "agentPage.filter.successfulRuns"
                                    }),
                                    isChecked: "success" === i.type
                                }),
                                action: () => {
                                    (0, n(599231).qt)({
                                        action: "activity_filter_success",
                                        workflowId: t.id
                                    }), r({
                                        type: "success"
                                    }), e.close()
                                }
                            }, ...g ? [{
                                key: "stats-view",
                                render: e => (0, o.jsx)(n(95582).A, { ...e,
                                    icon: (0, o.jsx)(n(16275).I, {
                                        icon: n(516963).X
                                    }),
                                    title: (0, o.jsx)(n(109939).sA, {
                                        defaultMessage: "Stats",
                                        id: "agentPage.filter.statsView"
                                    }),
                                    isChecked: "stats" === i.type
                                }),
                                action: () => {
                                    "stats" !== i.type && (0, n(599231).qt)({
                                        action: "activity_filter_stats",
                                        workflowId: t.id
                                    }), r({
                                        type: "stats"
                                    }), e.close()
                                }
                            }] : []]
                        };
                        return (0, o.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Popup,
                            children: (0, o.jsx)(n(558045).A, {
                                type: n(558045).O.Vertical,
                                sections: [a],
                                initialFocus: 0,
                                onAccept: () => e.close()
                            })
                        })
                    },
                    children: e => (0, o.jsx)(n(374533).A, { ...e,
                        ariaLabel: s.formatMessage({
                            defaultMessage: "Filter activity",
                            id: "agentPage.filterActivity"
                        }),
                        size: "sm",
                        icon: n(103499).filterSmallIcon,
                        colorPalette: l ? "blue" : void 0,
                        colorVariant: l ? "accentPrimary" : "secondary",
                        onClick: o => {
                            var i;
                            (0, n(599231).qt)({
                                action: "activity_filter_open",
                                workflowId: t.id
                            }), null == (i = e.onClick) || i.call(e, o)
                        }
                    })
                })
            }
        }
    }
]);