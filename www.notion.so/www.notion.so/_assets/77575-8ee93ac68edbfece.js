"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [77575], {
        245102: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowLineDownIcon: () => a,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.52 2.39 12.95 15.21",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10 2.4c.345 0 .625.28.625.625v9.966l3.333-3.333a.625.625 0 1 1 .884.884l-4.4 4.4a.625.625 0 0 1-.884 0l-4.4-4.4a.625.625 0 0 1 .884-.884l3.333 3.333V3.025c0-.345.28-.625.625-.625M4.15 16.35a.625.625 0 1 0 0 1.25h11.7a.625.625 0 0 0 0-1.25z"
                    })
                },
                a = (0, n(104509).wt)("arrowLineDown", r, "default")
        },
        336198: (e, t, n) => {
            n.d(t, {
                M: () => o
            });
            var r = n(296540);
            async function a(e) {
                let {
                    environment: t,
                    runId: n,
                    spaceId: r
                } = e;
                try {
                    let e = await t.api.callCellCompatibleApi({
                        eventName: "reenqueueWorkflowAutomation",
                        environment: t,
                        data: {
                            runIds: [n],
                            spaceId: r,
                            forceFastPath: !0
                        },
                        cellNavigation: {
                            spaceId: r
                        }
                    });
                    if ("success" !== e.type) {
                        var a;
                        return {
                            success: !1,
                            error: (null == (a = e.error) ? void 0 : a.message) || "Failed to run now"
                        }
                    }
                    let i = e.data.results[0];
                    if (!i) return {
                        success: !1,
                        error: "Failed to run now"
                    };
                    if ("success" === i.status) return {
                        success: !0
                    };
                    return {
                        success: !1,
                        error: i.errorMessage || "Failed to run now"
                    }
                } catch (e) {
                    return {
                        success: !1,
                        error: e instanceof Error ? e.message : "Failed to run now"
                    }
                }
            }
            n(16280);
            var i = n(474848);
            let s = (0, n(109939).YK)({
                success: {
                    id: "workflow.runNow.success",
                    defaultMessage: "Run started"
                },
                successAriaLabel: {
                    id: "workflow.runNow.successAriaLabel",
                    defaultMessage: "Run successfully started"
                },
                tooltip: {
                    id: "workflow.runNow.tooltip",
                    defaultMessage: "Run now"
                },
                ariaLabel: {
                    id: "workflow.runNow.ariaLabel",
                    defaultMessage: "Run now"
                }
            });

            function o(e) {
                let {
                    runStore: t,
                    onSuccess: o,
                    mode: l = "icon"
                } = e, d = (0, n(533992).v3)(), u = (0, n(109939).tz)(), [c, g] = (0, r.useState)(!1), [p, f] = (0, r.useState)(void 0), m = async e => {
                    e.stopPropagation(), f(void 0);
                    let n = t.getSpaceId();
                    if (!n) return void f("Unable to determine space");
                    let r = await a({
                        environment: d,
                        runId: t.id,
                        spaceId: n
                    });
                    r.success ? (g(!0), null == o || o(), setTimeout(() => {
                        g(!1)
                    }, 2e3)) : f(r.error || "Failed to run now")
                };
                return c ? "button" === l ? (0, i.jsx)(n(548436).A, {
                    size: "sm",
                    disabled: !0,
                    iconLeading: {
                        icon: n(437102).checkmarkCircleSmallIcon,
                        size: "xxs"
                    },
                    children: (0, i.jsx)(n(109939).sA, { ...s.success
                    })
                }) : (0, i.jsx)(n(51831).m, {
                    placement: "top",
                    content: () => u.formatMessage(s.success),
                    children: e => (0, i.jsx)(n(374533).A, { ...e,
                        icon: n(437102).checkmarkCircleSmallIcon,
                        colorPalette: "green",
                        size: "sm",
                        disabled: !0,
                        ariaLabel: u.formatMessage(s.successAriaLabel)
                    })
                }) : "button" === l ? (0, i.jsx)(n(51831).m, {
                    placement: "top",
                    content: () => p || u.formatMessage(s.tooltip),
                    children: e => (0, i.jsx)("span", { ...e,
                        children: (0, i.jsx)(n(548436).A, {
                            size: "sm",
                            onClick: m,
                            iconLeading: {
                                icon: n(781184).w,
                                size: "xxs"
                            },
                            children: (0, i.jsx)(n(109939).sA, { ...s.tooltip
                            })
                        })
                    })
                }) : (0, i.jsx)(n(51831).m, {
                    placement: "top",
                    content: () => p || u.formatMessage(s.tooltip),
                    children: e => (0, i.jsx)(n(374533).A, { ...e,
                        icon: n(781184).w,
                        colorPalette: p ? "red" : "gray",
                        size: "sm",
                        onClick: m,
                        ariaLabel: u.formatMessage(s.ariaLabel)
                    })
                })
            }
        },
        390184: (e, t, n) => {
            n.d(t, {
                Z: () => A
            }), n(18107), n(813451), n(967357), n(898992), n(354520), n(581454), n(737550);
            var r = n(296540),
                a = n(474848);
            let i = {
                link: {
                    color: "inherit",
                    textDecoration: "none",
                    cursor: "pointer"
                },
                linkHovered: {
                    color: n(632079).Tj.text.secondary
                },
                inlineIcon: {
                    display: "inline-flex",
                    alignItems: "center",
                    verticalAlign: "text-bottom"
                }
            };

            function s() {
                let [e, t] = (0, r.useState)(!1);
                return (0, a.jsx)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    paddingTop: 8,
                    paddingBottom: 24,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    children: (0, a.jsxs)(n(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "tertiary",
                        children: ["Agent 2.0 is enabled. Share feedback in ", (0, a.jsx)("a", {
                            href: "https://notion.slack.com/app_redirect?channel=proj-agent-2-0",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: { ...i.link,
                                ...e && i.linkHovered
                            },
                            onMouseEnter: () => t(!0),
                            onMouseLeave: () => t(!1),
                            children: "#proj-agent-2-0"
                        }), ", and flag any bad behavior with ", (0, a.jsx)("span", {
                            style: i.inlineIcon,
                            children: (0, a.jsx)(n(16275).I, {
                                icon: n(169677).d,
                                size: "xs",
                                colorVariant: "tertiary"
                            })
                        })]
                    })
                })
            }
            let o = {
                wrap: {
                    border: `1px solid ${n(632079).Tj.border.secondary}`,
                    background: n(632079).Tj.background.secondaryTranslucent
                },
                headerButton: {
                    borderRadius: 7
                },
                codeInner: {
                    borderRadius: 8,
                    backgroundColor: n(632079).Tj.codeBlockBackground,
                    padding: 12
                },
                metadata: {
                    display: "grid",
                    fontSize: 12,
                    paddingInlineStart: 8,
                    marginTop: 4,
                    marginBottom: 4,
                    gridTemplateColumns: "120px 1fr",
                    gap: 4
                },
                metadataKey: {
                    color: n(632079).Tj.text.secondary
                },
                metadataValue: {
                    color: n(632079).Tj.text.primary,
                    marginInlineStart: 0
                },
                statusBadge: {
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "2px 8px",
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: n(699422).Wy.semibold,
                    textTransform: "uppercase"
                },
                statusPending: {
                    backgroundColor: n(632079).Tj.yellow.background.secondary,
                    color: n(632079).Tj.yellow.text.primary
                },
                statusRunning: {
                    backgroundColor: n(632079).Tj.blue.background.secondary,
                    color: n(632079).Tj.blue.text.primary
                },
                statusSuccess: {
                    backgroundColor: n(632079).Tj.green.background.secondary,
                    color: n(632079).Tj.green.text.primary
                },
                statusFailure: {
                    backgroundColor: n(632079).Tj.red.background.secondary,
                    color: n(632079).Tj.red.text.primary
                },
                statusSkipped: {
                    backgroundColor: n(632079).Tj.gray.background.secondary,
                    color: n(632079).Tj.gray.text.primary
                },
                statusPaused: {
                    backgroundColor: n(632079).Tj.purple.background.secondary,
                    color: n(632079).Tj.purple.text.primary
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function l(e) {
                var t;
                let {
                    threadStore: i
                } = e, s = (0, n(109939).tz)(), [l, d] = (0, r.useState)(!1), u = (0, n(682985).K8)(() => {
                    var e;
                    return null == i || null == (e = i.getData()) ? void 0 : e.run_id
                }, [i]), c = (0, n(972740).L)(), g = (0, r.useMemo)(() => {
                    if (u && c) return n(849697).t.createChildStore(c, {
                        table: n(832375).QRx,
                        id: u,
                        spaceId: c.id
                    })
                }, [u, c]), p = (0, n(682985).K8)(() => null == g ? void 0 : g.getData(), [g]), f = (0, n(682985).K8)(() => null == g ? void 0 : g.getCreatedAt(), [g]), m = (0, n(682985).K8)(() => null == g ? void 0 : g.getDedupKey(), [g]), h = (0, n(682985).K8)(() => null == g ? void 0 : g.getParentId(), [g]), x = (0, n(682985).K8)(() => null == g ? void 0 : g.getParentTable(), [g]), y = (0, n(682985).K8)(() => null == g ? void 0 : g.getGroupId(), [g]), w = (0, n(682985).K8)(() => null == g ? void 0 : g.getSpaceId(), [g]), v = (0, n(682985).K8)(() => null == g ? void 0 : g.getUserActions(), [g]), S = (0, n(682985).K8)(() => null == g ? void 0 : g.getDequeueAfter(), [g]), b = (0, r.useCallback)(() => {
                    d(e => !e)
                }, []), j = (0, r.useMemo)(() => JSON.stringify({
                    run_id: u,
                    dedup_key: m,
                    parent_id: h,
                    parent_table: x,
                    space_id: w,
                    group_id: y,
                    user_actions: v,
                    status: null == p ? void 0 : p.status,
                    trigger_id: null == p ? void 0 : p.trigger_id,
                    trigger_data: null != p && p.trigger_data ? JSON.parse(p.trigger_data) : void 0,
                    error: null == p ? void 0 : p.error,
                    workflow_version: null == p ? void 0 : p.workflow_version,
                    spend: null == p ? void 0 : p.spend,
                    paused_reason: null == p ? void 0 : p.paused_reason,
                    created_at: f,
                    finished_at: null == p ? void 0 : p.finished_at,
                    trigger_at: null == p ? void 0 : p.trigger_at,
                    dequeue_after: S
                }, null, 2), [u, m, h, x, w, y, v, p, f, S]), k = (0, r.useMemo)(() => {
                    if (!S || (null == p ? void 0 : p.status) !== "pending") return;
                    let e = S - Date.now();
                    if (!(e <= 0)) return {
                        relative: (0, n(264305).a)(e),
                        absolute: new Date(S).toLocaleString()
                    }
                }, [S, null == p ? void 0 : p.status]), I = (0, n(960253).I)(() => ({
                    icon: {
                        transition: "transform 0.2s ease-in-out",
                        transformOrigin: "center",
                        transform: l ? "rotate(90deg)" : "rotate(0deg)"
                    }
                }), [l]);
                if (!u || !g) return null;
                let C = {
                    "Run ID": u,
                    "Dedup Key": m,
                    "Parent ID": h,
                    "Parent Table": x,
                    "Space ID": w,
                    "Group ID": y,
                    "User Actions": v ? JSON.stringify(v) : null,
                    Status: null != p && p.status ? (0, a.jsx)("span", {
                        style: { ...o.statusBadge,
                            ...(e => {
                                switch (e) {
                                    case "pending":
                                        return o.statusPending;
                                    case "running":
                                        return o.statusRunning;
                                    case "success":
                                        return o.statusSuccess;
                                    case "failure":
                                        return o.statusFailure;
                                    case "skipped":
                                        return o.statusSkipped;
                                    case "paused":
                                        return o.statusPaused;
                                    default:
                                        return {}
                                }
                            })(p.status)
                        },
                        children: p.status
                    }) : null,
                    "Trigger ID": null == p ? void 0 : p.trigger_id,
                    "Created At": f ? new Date(f).toLocaleString() : null,
                    "Finished At": null != p && p.finished_at ? new Date(p.finished_at).toLocaleString() : null,
                    Duration: (t = null == p ? void 0 : p.finished_at, f && t ? (0, n(264305).a)(t - f) : null),
                    "Workflow Version": null == p ? void 0 : p.workflow_version,
                    Spend: null != p && p.spend ? `$${p.spend.toFixed(4)}` : null,
                    "Paused Reason": null == p ? void 0 : p.paused_reason,
                    "Eligible For Dequeue": S ? new Date(S).toLocaleString() : null,
                    "Has Error": null != p && p.error ? "Yes" : null
                };
                return (0, a.jsxs)(n(4458).VP, {
                    padding: 4,
                    style: {
                        position: "relative",
                        ...o.wrap,
                        borderRadius: 8
                    },
                    className: "autolayout-col autolayout-fill-width",
                    children: [(0, a.jsx)(n(4458).fI, {
                        gap: 2,
                        alignItems: "center",
                        style: o.positionRelative,
                        children: (0, a.jsx)(n(4458).VP, {
                            className: "autolayout-col",
                            style: o.positionRelative,
                            flex: "1 1 0",
                            children: (0, a.jsx)(n(988022).p, {
                                style: o.headerButton,
                                iconLeading: {
                                    icon: n(491469).arrowChevronSingleRightSmallIcon,
                                    size: "xs",
                                    colorVariant: "secondary",
                                    style: I.icon
                                },
                                "aria-label": s.formatMessage({
                                    id: "aiInferenceTranscript.viewWorkflowRun",
                                    defaultMessage: "View workflow automation run details"
                                }),
                                onClick: b,
                                children: (0, a.jsx)(n(111010).D, {
                                    styleKey: "captionMedium",
                                    children: "workflow automation run"
                                })
                            })
                        })
                    }), (0, a.jsx)(n(203066).N, {
                        children: l ? (0, a.jsx)(n(153321).P.div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: "auto"
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            transition: {
                                duration: .2
                            },
                            children: (0, a.jsxs)(n(4458).VP, {
                                gap: 4,
                                padding: 8,
                                className: "autolayout-col autolayout-fill-width",
                                style: o.positionRelative,
                                children: [k ? (0, a.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    color: "text/secondary",
                                    children: s.formatMessage({
                                        id: "workflow.waiting.debugMessage",
                                        defaultMessage: "Run resumes in {duration} ({time})."
                                    }, {
                                        duration: k.relative,
                                        time: k.absolute
                                    })
                                }) : null, (0, a.jsx)("dl", {
                                    style: o.metadata,
                                    children: Object.entries(C).filter(([, e]) => null != e).map(([e, t]) => (0, a.jsxs)(r.Fragment, {
                                        children: [(0, a.jsx)("dt", {
                                            style: o.metadataKey,
                                            children: e
                                        }), (0, a.jsx)("dd", {
                                            style: o.metadataValue,
                                            children: t
                                        })]
                                    }, e))
                                }), (0, a.jsx)("div", {
                                    style: o.codeInner,
                                    children: (0, a.jsx)(n(140102).X, {
                                        value: j,
                                        language: "json"
                                    })
                                })]
                            })
                        }) : null
                    })]
                })
            }
            let d = {
                    container: {
                        backgroundColor: n(632079).Tj.background.secondaryTranslucent,
                        borderRadius: 8,
                        padding: 12,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginTop: 16
                    },
                    rightContainer: {
                        marginInlineStart: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    },
                    infoIcon: {
                        flexShrink: 0
                    },
                    tooltipContent: {
                        maxWidth: 240,
                        width: "max-content",
                        whiteSpace: "normal"
                    }
                },
                u = (0, n(109939).YK)({
                    waiting: {
                        id: "agentThreadPeek.enqueuedRun.waiting",
                        defaultMessage: "Waiting to start"
                    },
                    waitReasonEdits: {
                        id: "agentThreadPeek.enqueuedRun.waitReason.edits",
                        defaultMessage: "We’ll start after your page edits finish."
                    },
                    waitReasonRecurrence: {
                        id: "agentThreadPeek.enqueuedRun.waitReason.recurrence",
                        defaultMessage: "Some runs may wait to keep things running smoothly."
                    },
                    waitReasonAria: {
                        id: "agentThreadPeek.enqueuedRun.waitReason.ariaLabel",
                        defaultMessage: "Why this run is waiting"
                    }
                });

            function c(e) {
                let {
                    waitingUntilMs: t,
                    waitReason: i,
                    runStore: s,
                    isRunPending: o
                } = e, l = (0, n(109939).tz)(), [c, g] = (0, r.useState)(Date.now());
                (0, r.useEffect)(() => {
                    if (!t) return;
                    let e = setInterval(() => {
                        g(Date.now())
                    }, 1e3);
                    return () => clearInterval(e)
                }, [t]);
                let p = (0, r.useMemo)(() => {
                        if (!t) return;
                        let e = t - c;
                        if (!(e <= 0)) return (0, n(264305).a)(e)
                    }, [c, t]),
                    f = (0, r.useMemo)(() => {
                        switch (i) {
                            case "edits":
                                return u.waitReasonEdits;
                            case "recurrence":
                                return u.waitReasonRecurrence;
                            default:
                                return
                        }
                    }, [i]);
                return (0, a.jsxs)("div", {
                    style: d.container,
                    children: [(0, a.jsx)(n(517334).k, {
                        size: "sm"
                    }), (0, a.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        children: [(0, a.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: (0, a.jsx)(n(109939).sA, { ...u.waiting
                            })
                        }), f ? (0, a.jsx)(n(51831).m, {
                            content: () => (0, a.jsx)("div", {
                                style: d.tooltipContent,
                                children: (0, a.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    children: (0, a.jsx)(n(109939).sA, { ...f
                                    })
                                })
                            }),
                            textWrap: !0,
                            children: e => (0, a.jsx)(n(374533).A, {
                                size: "xs",
                                icon: n(372181).infoCircleSmallIcon,
                                ariaLabel: l.formatMessage(u.waitReasonAria),
                                style: d.infoIcon,
                                ...e
                            })
                        }) : null]
                    }), (0, a.jsxs)("div", {
                        style: d.rightContainer,
                        children: [p ? (0, a.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: p
                        }) : null, s && o ? (0, a.jsx)(n(336198).M, {
                            runStore: s
                        }) : null]
                    })]
                })
            }

            function g(e) {
                let {
                    step: t,
                    threadStore: r,
                    clientStore: i,
                    disableUserMessageEditing: s,
                    compactSurveySummary: o = !1
                } = e;
                return "agent-message" === t.type ? (0, a.jsx)(n(190841).Z, {
                    step: t,
                    threadStore: r
                }) : "user-injected" === t.type ? (0, a.jsx)(n(992463).m, {
                    step: t,
                    clientStore: i,
                    threadStore: r,
                    runningInference: !1,
                    compactSurveySummary: o
                }) : (0, a.jsx)(p, {
                    step: t,
                    clientStore: i,
                    threadStore: r,
                    disableUserMessageEditing: s
                })
            }

            function p(e) {
                let {
                    step: t,
                    clientStore: i,
                    threadStore: s,
                    disableUserMessageEditing: o
                } = e, l = (0, n(533992).v3)(), d = (0, n(109939).tz)(), u = t.userId === l.currentUser.id, c = (0, n(682985).K8)(() => s.getSpaceStore(), [s]), g = (0, n(682985).K8)(() => {
                    if (c && t.userId) return n(807825).L.createChildStore(c, {
                        table: n(832375).oo9,
                        id: t.userId
                    })
                }, [c, t.userId]), p = (0, n(682985).K8)(() => null == g ? void 0 : g.getDisplayName(d), [g, d]), f = (0, n(682985).K8)(() => {
                    var e;
                    return (null == (e = (0, n(187353).L2)(s)) ? void 0 : e.type) === "search"
                }, [s]), m = (0, n(682985).K8)(() => {
                    var e;
                    return (null == (e = (0, n(187353).L2)(s)) ? void 0 : e.type) === "researcher"
                }, [s]), h = (0, n(682985).K8)(() => {
                    var e;
                    return (null == (e = (0, n(187353).L2)(s)) ? void 0 : e.type) === "markdown-chat"
                }, [s]), x = (0, n(682985).K8)(() => (0, n(187353).Ft)({
                    threadStore: s,
                    clientStore: i
                }), [s, i]), [w, v] = (0, r.useState)(!1), b = (0, r.useRef)(null), j = (0, r.useRef)(null), {
                    store: k,
                    setValue: I
                } = (0, n(430937).AI)({
                    initialValue: t.value
                }), C = (0, r.useCallback)(() => {
                    v(!1), I(t.value)
                }, [t.value, I, v]), T = function(e) {
                    let {
                        step: t,
                        clientStore: a,
                        threadStore: i,
                        environment: s,
                        textRef: o,
                        setIsEditing: l,
                        mockTextStore: d
                    } = e, u = (0, r.useCallback)(() => {
                        l(!0), setTimeout(() => {
                            var e;
                            null == (e = o.current) || e.focus()
                        }, 1)
                    }, [l, o]), c = (0, r.useCallback)(e => {
                        l(!1),
                            function(e) {
                                let {
                                    environment: t,
                                    threadStore: r,
                                    clientStore: a,
                                    step: i,
                                    newValue: s
                                } = e, o = r.getTranscript().find(n(588831).z5), l = (null == o ? void 0 : o.id) === i.id, d = r.getSpaceId(), {
                                    serverCommitResult: u
                                } = (0, n(377796).createAndCommit)({
                                    userAction: "AgentUserStep.saveUserStepChanges",
                                    environment: t,
                                    cellTarget: d ? {
                                        spaceWithId: d
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        let {
                                            type: t
                                        } = i;
                                        "agent-prebuilt-prompt" === t ? (0, n(757688).ki)({
                                            threadStore: r,
                                            stepId: i.id,
                                            newValue: s,
                                            transaction: e
                                        }) : "user" === t ? (0, n(757688).D7)({
                                            threadStore: r,
                                            step: i,
                                            newValue: s,
                                            transaction: e
                                        }) : (0, n(722371).HB)(t), (0, n(757688).Pz)({
                                            threadStore: r,
                                            stepId: i.id,
                                            transaction: e
                                        })
                                    }
                                });
                                (0, n(757688).WE)({
                                    environment: t,
                                    threadStore: r,
                                    clientStore: a,
                                    forceRegenerateTitle: l,
                                    stepIdsToInclude: [i.id],
                                    waitBeforeSending: u,
                                    sendPatchResponse: !0
                                })
                            }({
                                environment: s,
                                threadStore: i,
                                clientStore: a,
                                step: t,
                                newValue: e
                            })
                    }, [s, i, a, t, l]);
                    return {
                        handleEditClick: u,
                        saveEdit: (0, r.useCallback)(() => {
                            let e = d.getValue();
                            e && 0 !== e.length && c(d.getValue() || [])
                        }, [c, d])
                    }
                }({
                    step: t,
                    clientStore: i,
                    threadStore: s,
                    environment: l,
                    textRef: b,
                    setIsEditing: v,
                    mockTextStore: k
                });
                (0, r.useEffect)(() => {
                    if (!w) return;
                    let e = e => {
                        j.current && !j.current.contains(e.target) && C()
                    };
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [w, C]);
                let M = (0, n(960253).I)(() => ({
                        container: {
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: u ? "flex-end" : "flex-start",
                            gap: 2
                        }
                    }), [u]),
                    R = 0 === (t.value || []).length;
                return (0, a.jsxs)("div", {
                    style: M.container,
                    ref: j,
                    "data-agent-chat-user-step-id": t.id,
                    children: [!u && g && c ? (0, a.jsx)(n(821480).U, {
                        type: "user",
                        userStore: g,
                        spaceStore: c,
                        displayName: p ? ? ""
                    }) : void 0, R ? void 0 : (0, a.jsx)(y, {
                        isCurrentUser: u,
                        userStore: g,
                        isEditing: w,
                        mockTextStore: k,
                        textRef: b,
                        onSaveEdit: T.saveEdit,
                        onEditClick: T.handleEditClick,
                        disableUserMessageEditing: o,
                        runningInference: x,
                        isSearchConfig: f,
                        isResearcherConfig: m,
                        isMarkdownChatConfig: h,
                        step: t,
                        threadStore: s
                    }), (0, a.jsx)(S, {
                        isCurrentUser: u,
                        isEditing: w,
                        onCancelEdit: C,
                        onSaveEdit: T.saveEdit,
                        mockTextStore: k
                    })]
                })
            }

            function f(e) {
                let {
                    store: t,
                    onClick: i,
                    clickable: s,
                    isCurrentUser: o
                } = e, l = (0, n(109939).tz)(), {
                    bodyStyleKey: d
                } = (0, n(765846).yq)(), u = (0, n(765846).Cd)(d), c = (0, n(960253).I)(() => ({
                    bubble: {
                        paddingTop: 6,
                        paddingBottom: 6,
                        paddingInlineStart: 14 * !!o,
                        paddingInlineEnd: 14 * !!o,
                        borderRadius: 16 * !!o,
                        ...o && {
                            backgroundColor: n(632079).Tj.background.tertiaryTranslucent
                        },
                        transition: "background-color 0.1s ease",
                        ...s ? {
                            cursor: "pointer"
                        } : {}
                    },
                    richText: { ...u,
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                        wordBreak: "break-word"
                    }
                }), [s, o, u]), g = (0, r.useCallback)(e => {
                    s && i && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), i())
                }, [s, i]);
                return (0, a.jsx)("div", {
                    style: c.bubble,
                    onClick: s ? i : void 0,
                    onKeyDown: s ? g : void 0,
                    role: s ? "button" : void 0,
                    tabIndex: s ? 0 : void 0,
                    "aria-label": s ? l.formatMessage(j.editMessage) : void 0,
                    children: (0, a.jsx)(n(53373).A, {
                        store: t,
                        disabled: !0,
                        style: c.richText,
                        disableSlashCommands: !0,
                        disableEmbedMenu: !0,
                        disableEmojiCommands: !0,
                        disableComment: !0,
                        disableSelectAllBlocks: !0,
                        disableSelectionDrag: !0,
                        disableEnter: !0,
                        disableMobileActionBar: !0,
                        disableStyleAnnotations: !0,
                        disableInsertedDeletedAnnotations: !0,
                        disableSuggestionAnnotations: !0,
                        inPageFind: n(831719).Os.none,
                        enableChatSelectionContextTokens: !0
                    })
                })
            }

            function m(e) {
                let {
                    step: t,
                    isVisible: i
                } = e, s = (0, n(533992).v3)(), o = (0, n(109939).tz)(), l = (0, r.useMemo)(() => t.value ? ? [], [t.value]), {
                    value: d
                } = (0, n(815048).fJ)(n(161333).e), u = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), c = (0, r.useCallback)(async () => {
                    u && d && await (0, n(945009).w)({
                        environment: s,
                        spaceStore: u,
                        copySourceData: {
                            type: "textValue",
                            textValue: l,
                            name: "AgentUserInitiatedStep.CopyButton"
                        },
                        copiedMessageLabel: o.formatMessage(d.clipboardMessages.copiedToClipboard)
                    })
                }, [s, o, l, u, d]), g = (0, n(960253).I)(() => ({
                    copyButton: {
                        opacity: +!!i,
                        transition: "opacity 0.1s ease"
                    }
                }), [i]);
                return (0, a.jsx)(n(51831).m, {
                    placement: "top",
                    delayThreshold: 300,
                    content: () => o.formatMessage({
                        id: "aiInferenceTranscript.userStep.copyText",
                        defaultMessage: "Copy text"
                    }),
                    children: e => (0, a.jsx)(n(374533).A, { ...e,
                        onClick: c,
                        icon: n(682006).a,
                        colorVariant: "secondary",
                        style: g.copyButton,
                        ariaLabel: o.formatMessage({
                            id: "aiInferenceTranscript.userStep.copyTextAriaLabel",
                            defaultMessage: "Copy text"
                        })
                    })
                })
            }
            n(672577);
            let h = {
                style0: {
                    borderRadius: "50%"
                },
                style1: {
                    width: n(104509).Ev.default,
                    height: n(104509).Ev.default
                }
            };

            function x(e) {
                let {
                    onCancel: t,
                    onSave: r,
                    saveDisabled: i
                } = e, s = (0, n(109939).tz)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n(374533).A, {
                        onClick: t,
                        icon: n(367198).xMarkCircleFillIcon,
                        colorVariant: "secondary",
                        style: h.style0,
                        iconStyle: h.style1,
                        ariaLabel: s.formatMessage({
                            id: "aiInferenceTranscript.userStep.cancel",
                            defaultMessage: "Cancel"
                        })
                    }), (0, a.jsx)(n(374533).A, {
                        onClick: r,
                        icon: n(93042).checkmarkCircleFillIcon,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary",
                        disabled: i,
                        style: h.style0,
                        iconStyle: h.style1,
                        ariaLabel: s.formatMessage({
                            id: "aiInferenceTranscript.userStep.save",
                            defaultMessage: "Save"
                        })
                    })]
                })
            }

            function y(e) {
                let {
                    isCurrentUser: t,
                    isEditing: i,
                    mockTextStore: s,
                    textRef: o,
                    onSaveEdit: l,
                    onEditClick: d,
                    disableUserMessageEditing: u,
                    runningInference: c,
                    isSearchConfig: g,
                    isResearcherConfig: p,
                    isMarkdownChatConfig: m,
                    step: h,
                    threadStore: x
                } = e, [y, w] = (0, r.useState)(!1), [S, b] = (0, n(641086).A)(), j = (0, n(960253).I)(() => ({
                    messageRow: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: t ? "flex-end" : "flex-start",
                        paddingBottom: 8,
                        width: "100%"
                    },
                    bubbleWrapper: {
                        maxWidth: t && !i ? "calc(95% - 40px)" : "95%",
                        ...i ? {
                            width: "100%"
                        } : {},
                        ...t && !i ? {
                            marginInlineStart: 70
                        } : {}
                    },
                    stagingAndInputWrap: {
                        borderRadius: 16,
                        padding: g ? "6px 14px" : "2px 14px 32px 14px",
                        paddingBottom: i ? 48 : "6px",
                        minHeight: 32,
                        minWidth: 68
                    },
                    textContainer: g ? {
                        paddingTop: 0,
                        paddingBottom: 0
                    } : {}
                }), [t, g, i]), k = t && !i && !u && !c, I = !!n(986939).A.isMobile;
                return (0, a.jsxs)("div", {
                    ref: S,
                    style: j.messageRow,
                    onMouseEnter: () => w(!0),
                    onMouseOver: () => w(!0),
                    onMouseLeave: () => w(!1),
                    children: [(0, a.jsx)("div", {
                        style: j.bubbleWrapper,
                        children: i ? (0, a.jsx)(n(834407).k, {
                            onSubmit: l,
                            store: s,
                            textRef: o,
                            fontSize: g || p || m ? 16 : void 0,
                            stagingAndInputWrapStyle: j.stagingAndInputWrap,
                            textContainerStyle: j.textContainer,
                            testId: "agent-edit-message-input"
                        }) : (0, a.jsx)(f, {
                            store: s,
                            onClick: k && I ? d : void 0,
                            clickable: k && I,
                            isCurrentUser: t
                        })
                    }), (0, a.jsx)(v, {
                        isRowHovered: y,
                        isRowFocused: b,
                        isEditing: i,
                        step: h,
                        threadStore: x,
                        onEditClick: k && !I ? d : void 0,
                        canEdit: k && !I,
                        isCurrentUser: t
                    })]
                })
            }
            let w = {
                timestamp: {
                    fontSize: 12,
                    lineHeight: "16px",
                    color: n(632079).Tj.text.tertiary,
                    marginInlineEnd: 6,
                    display: "flex",
                    alignItems: "center"
                }
            };

            function v(e) {
                let {
                    isRowHovered: t,
                    isRowFocused: i,
                    isEditing: s,
                    step: o,
                    threadStore: l,
                    onEditClick: d,
                    canEdit: u,
                    isCurrentUser: c
                } = e, g = t || i, p = (0, n(109939).tz)(), f = (0, r.useMemo)(() => (function(e, t) {
                    if (void 0 === e) return;
                    let n = new Date(e);
                    if (Number.isNaN(n.getTime())) return;
                    let r = new Date,
                        a = n.getDate() === r.getDate() && n.getMonth() === r.getMonth() && n.getFullYear() === r.getFullYear(),
                        i = n.getFullYear() === r.getFullYear();
                    return a ? t.formatTime(n, {
                        hour: "numeric",
                        minute: "2-digit"
                    }) : i ? t.formatDate(n, {
                        month: "short",
                        day: "numeric"
                    }) : t.formatDate(n, {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    })
                })(o.createdAt, p), [p, o.createdAt]), h = (0, n(960253).I)(() => ({
                    container: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: c ? "flex-end" : "flex-start",
                        height: 28,
                        paddingTop: 4,
                        opacity: +!!g,
                        transition: "opacity 0.1s ease"
                    },
                    buttonsContainer: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: u ? 48 : 24
                    }
                }), [g, c, u]);
                return s ? null : (0, a.jsxs)("div", {
                    style: h.container,
                    children: [f ? (0, a.jsx)("div", {
                        style: w.timestamp,
                        children: f
                    }) : void 0, (0, a.jsxs)("div", {
                        style: h.buttonsContainer,
                        children: [!0 === u ? (0, a.jsx)(b, {
                            onClick: d
                        }) : void 0, (0, a.jsx)(m, {
                            step: o,
                            threadStore: l,
                            isVisible: g
                        })]
                    })]
                })
            }

            function S(e) {
                let {
                    isEditing: t,
                    onCancelEdit: r,
                    onSaveEdit: i,
                    mockTextStore: s
                } = e, o = 0 === (0, n(682985).K8)(() => s.getValue() || [], [s]).length, l = (0, n(960253).I)(() => ({
                    actionsRow: {
                        position: "absolute",
                        bottom: 22,
                        insetInlineEnd: 8,
                        display: t ? "flex" : "none",
                        gap: 2,
                        alignItems: "center",
                        zIndex: 10
                    }
                }), [t]);
                return t ? (0, a.jsx)("div", {
                    style: l.actionsRow,
                    children: (0, a.jsx)(x, {
                        onCancel: r,
                        onSave: i,
                        saveDisabled: o
                    })
                }) : null
            }

            function b(e) {
                let {
                    onClick: t
                } = e, r = (0, n(109939).tz)();
                return (0, a.jsx)(n(51831).m, {
                    placement: "top",
                    delayThreshold: 300,
                    content: () => r.formatMessage(j.editMessage),
                    children: e => (0, a.jsx)(n(374533).A, { ...e,
                        onClick: t,
                        icon: n(753114).pencilLineSmallIcon,
                        colorVariant: "secondary",
                        ariaLabel: r.formatMessage(j.editMessage)
                    })
                })
            }
            let j = (0, n(109939).YK)({
                    editMessage: {
                        id: "aiInferenceTranscript.agentUserStep.editMessage",
                        defaultMessage: "Edit message"
                    }
                }),
                k = {
                    position: "relative"
                },
                I = r.memo(function(e) {
                    let {
                        turn: t,
                        isFirstUserTurn: r,
                        spaceStore: i,
                        threadStore: s,
                        clientStore: o,
                        showDebug: l,
                        disableUserMessageEditing: d,
                        aiChatFeatureController: u
                    } = e, c = (0, n(682985).K8)(() => s.getSpaceId() || "", [s]), p = (0, n(960253).I)(() => ({
                        userTurn: { ...l && {
                                boxShadow: "calc(var(--direction, 1) * -4px) 0 0 0 rgba(0,0,255,0.3)"
                            }
                        }
                    }), [l]);

                    function f(e) {
                        return (0, a.jsx)(n(305406).uQ, {
                            step: e.file,
                            threadStore: s,
                            clientStore: o,
                            children: e.content
                        })
                    }
                    return (0, a.jsx)("div", {
                        style: p.userTurn,
                        children: (0, a.jsxs)(n(4458).VP, {
                            gap: 8,
                            className: "autolayout-col autolayout-fill-width",
                            style: k,
                            children: [t.configStep ? (0, a.jsx)(n(305406).uQ, {
                                step: t.configStep,
                                threadStore: s,
                                clientStore: o
                            }, t.configStep.id) : null, t.contextStep && l ? (0, a.jsx)(n(305406).uQ, {
                                step: t.contextStep,
                                threadStore: s,
                                clientStore: o,
                                children: (0, a.jsx)(n(821448).E, {
                                    step: t.contextStep,
                                    displayMode: r ? "dateAndPageChip" : "pageChip"
                                })
                            }, t.contextStep.id) : null, t.userSpecifiedContextStep ? (0, a.jsx)(n(305406).uQ, {
                                step: t.userSpecifiedContextStep,
                                threadStore: s,
                                clientStore: o,
                                children: (0, a.jsx)(n(328806).H, {
                                    spaceStore: i,
                                    context: t.userSpecifiedContextStep
                                })
                            }, t.userSpecifiedContextStep.id) : null, (0, a.jsx)(n(3087).l, {
                                files: t.attachmentsStep ? ? [],
                                threadStore: s,
                                threadSpaceId: c,
                                showImagePreview: !0,
                                aiChatFeatureController: u,
                                justifyContent: "flex-end",
                                wrapFile: e => f(e)
                            }), (0, a.jsx)(n(3087).l, {
                                files: t.computerFileSteps ? ? [],
                                threadStore: s,
                                threadSpaceId: c,
                                showImagePreview: !1,
                                aiChatFeatureController: u,
                                justifyContent: "flex-end",
                                wrapFile: e => f(e)
                            }), t.userInitiatedStep ? (0, a.jsx)(n(305406).uQ, {
                                step: t.userInitiatedStep,
                                threadStore: s,
                                clientStore: o,
                                children: (0, a.jsx)(g, {
                                    clientStore: o,
                                    threadStore: s,
                                    step: t.userInitiatedStep,
                                    disableUserMessageEditing: d,
                                    compactSurveySummary: "sidebar" === u.agentChatFormFactor || "popup" === u.agentChatFormFactor
                                })
                            }, t.userInitiatedStep.id) : null]
                        })
                    })
                }),
                C = (0, n(109939).YK)({
                    transcriptTruncated: {
                        id: "aiInferenceTranscript.transcriptTurns.transcriptTruncated",
                        defaultMessage: "Chat limit exceeded. Showing latest messages."
                    },
                    workflowFailure: {
                        id: "aiInferenceTranscript.transcriptTurns.workflowFailure",
                        defaultMessage: "Custom agent failed. Please try running the custom agent again."
                    },
                    workflowRetryableFailure: {
                        id: "aiInferenceTranscript.transcriptTurns.workflowRetryableFailure",
                        defaultMessage: "Custom agent encountered an error and will retry automatically."
                    },
                    workflowStuck: {
                        id: "aiInferenceTranscript.transcriptTurns.workflowStuck",
                        defaultMessage: "Custom agent appears to be stuck. Please try running the custom agent again."
                    }
                }),
                T = {
                    paddingTop: 8,
                    paddingInlineStart: 32
                },
                M = {
                    position: "relative"
                };

            function R() {
                return (0, a.jsx)(n(4458).fI, {
                    justifyContent: "center",
                    paddingTop: 4,
                    paddingBottom: 4,
                    children: (0, a.jsx)(n(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "tertiary",
                        children: (0, a.jsx)(n(109939).sA, { ...C.transcriptTruncated
                        })
                    })
                })
            }

            function A(e) {
                let {
                    transcript: t,
                    spaceStore: i,
                    threadStore: o,
                    clientStore: d,
                    configType: u,
                    isCustomAgent: g,
                    runningInference: p,
                    showDebugOverride: f,
                    aiChatFeatureController: m,
                    showAttribution: h,
                    onFollowUpSelect: x,
                    isMultiAgentDelegationEnabled: y
                } = e, w = (0, n(533992).v3)(), v = (0, n(682985).K8)(() => d.state.showDebug, [d]) || !!f, {
                    turns: S,
                    wasTruncated: b
                } = (0, r.useMemo)(() => {
                    var e;
                    let r, a;
                    return e = {
                        transcript: t,
                        runningInference: p,
                        showDebug: v
                    }, {
                        turns: (a = (r = (0, n(490591).R0)({
                            transcript: e.transcript,
                            isRunningInference: e.runningInference,
                            showDebug: e.showDebug
                        })).length > 100) ? r.slice(Math.max(0, r.length - 100)) : r,
                        wasTruncated: a
                    }
                }, [t, p, v]), j = (0, n(682985).K8)(() => (0, n(446062).F)(o.id), [o]), k = (0, r.useMemo)(() => !!j || "post_onboarding_agent" === (0, n(850563).kQ)(t), [j, t]), A = (0, n(247388).b)(S), D = A.findLastIndex(e => "user-turn" === e.type), K = A.findIndex(e => "user-turn" === e.type), F = (0, n(682985).K8)(() => (0, n(187353).xE)({
                    threadStore: o,
                    transcript: t,
                    clientStore: d
                }), [o, t, d]), E = (0, n(682985).K8)(() => n(469424).f.getState().statuses, []), P = (0, n(682985).K8)(() => g && (0, n(187353).SJ)(o), [o, g]), _ = (0, n(682985).K8)(() => (0, n(187353).mU)(o), [o]), L = (0, n(682985).K8)(() => (0, n(187353).qv)(_), [_]), z = (0, n(682985).K8)(() => (0, n(187353).AU)(_), [_]), V = (0, n(682985).K8)(() => (null == _ ? void 0 : _.getStatus()) === "pending", [_]), B = (0, n(682985).K8)(() => {
                    if (!_ || "running" !== _.getStatus()) return !1;
                    let e = (0, n(187353).NR)();
                    return (0, n(187353)._P)(o, e)
                }, [_, o]), N = (0, n(682985).K8)(() => o.getConfig(), [o]), U = m.isAgentChat && (null == N ? void 0 : N.type) === "workflow" && N.enableScriptAgent && !1;
                (0, r.useEffect)(() => {
                    var e;
                    if (!B || !_) return;
                    let r = (null == (e = o.getParentPointer()) ? void 0 : e.id) ? ? (0, n(646440).getWorkflowIdFromStore)(o),
                        a = o.getUpdatedTime() ? ? o.getCreatedTime();
                    if (!r || !a) return;
                    let i = Date.now() - a,
                        s = 1e3 * (0, n(187353).NR)(),
                        l = t.at(-1),
                        d = l && "agent-tool-result" === l.type ? l.toolName : "";
                    (0, n(599231).US)({
                        workflowId: r,
                        threadId: o.id,
                        runId: _.id,
                        timeSinceLastUpdateMs: i,
                        thresholdMs: s,
                        inferenceId: o.id,
                        previousStepId: (null == l ? void 0 : l.id) ? ? "unknown",
                        previousStepType: (null == l ? void 0 : l.type) ? ? "unknown",
                        previousStepToolName: d
                    })
                }, [B, _, o, t]);
                let W = (0, r.useMemo)(() => {
                        let e = t.some(e => "agent-trigger" === e.type),
                            r = t.some(e => (0, n(588831).z5)(e));
                        return e && !r
                    }, [t]),
                    q = "failure" === F && W && (null == N ? void 0 : N.type) === "workflow" && N.enableScriptAgent,
                    O = (0, n(682985).K8)(() => {
                        var e;
                        return null == o || null == (e = o.getData()) ? void 0 : e.run_id
                    }, [o]),
                    Y = (0, r.useMemo)(() => JSON.stringify({
                        type: "workflow_failure",
                        runId: O,
                        threadId: null == o ? void 0 : o.id
                    }, null, 2), [O, null == o ? void 0 : o.id]);
                return (0, a.jsx)(n(101491).c8, {
                    threadStore: o,
                    clientStore: d,
                    environment: w,
                    sendPartialTranscript: !0,
                    children: (0, a.jsx)(n(522824).wJ, {
                        surfaceName: "ai_chat",
                        children: (0, a.jsx)(n(318981).A, {
                            store: o,
                            render: () => (0, a.jsxs)(n(4458).VP, {
                                gap: 12 * !!v,
                                className: "autolayout-col autolayout-fill-width",
                                style: M,
                                children: [b ? (0, a.jsx)(R, {}) : void 0, U ? (0, a.jsx)(s, {}) : void 0, A.map((e, t) => {
                                    switch (e.type) {
                                        case "user-turn":
                                            {
                                                let n = A.slice(0, t).filter(e => "agent-turn" === e.type).length,
                                                    r = E.slice(n).some(e => "undo" === e),
                                                    s = t !== D || r;
                                                return (0, a.jsx)(I, {
                                                    turn: e,
                                                    isFirstUserTurn: t === K,
                                                    spaceStore: i,
                                                    threadStore: o,
                                                    clientStore: d,
                                                    runningInference: p,
                                                    showDebug: v,
                                                    disableUserMessageEditing: s,
                                                    aiChatFeatureController: m
                                                }, `user-turn-${t}`)
                                            }
                                        case "agent-turn":
                                            {
                                                let r = A.slice(0, t).filter(n(490591).hY).at(-1),
                                                    s = A.slice(0, t).filter(e => "agent-turn" === e.type).length;
                                                return (0, a.jsx)(n(378700).lh, {
                                                    turn: e,
                                                    previousUserTurn: r,
                                                    isLastTurn: t === A.length - 1,
                                                    configType: u,
                                                    isCustomAgent: g,
                                                    spaceStore: i,
                                                    threadStore: o,
                                                    clientStore: d,
                                                    runningInference: p,
                                                    showDebug: v,
                                                    aiChatFeatureController: m,
                                                    showAttribution: h || 0 === s && j,
                                                    onFollowUpSelect: x,
                                                    useMinimalTranscript: (null == N ? void 0 : N.type) === "workflow" && N.useMinimalTranscript,
                                                    isPostOnboardingThread: k,
                                                    isMultiAgentDelegationEnabled: y
                                                }, `agent-turn-${t}`)
                                            }
                                        default:
                                            (0, n(722371).HB)(e)
                                    }
                                }), P ? (0, a.jsx)(c, {
                                    waitingUntilMs: L,
                                    waitReason: z,
                                    runStore: _,
                                    isRunPending: V
                                }) : void 0, F ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(n(75224).N, {
                                        icon: n(966559).exclamationMarkCircleSmallIcon,
                                        title: (0, a.jsx)(n(111010).D, {
                                            styleKey: "bodyRegular",
                                            colorVariant: "secondary",
                                            children: (0, a.jsx)(n(109939).sA, { ... function(e) {
                                                    switch (e) {
                                                        case "failure":
                                                            return C.workflowFailure;
                                                        case "retryableFailure":
                                                            return C.workflowRetryableFailure;
                                                        case "stuck":
                                                            return C.workflowStuck
                                                    }
                                                }(F)
                                            })
                                        })
                                    }), q ? (0, a.jsx)("div", {
                                        style: T,
                                        children: (0, a.jsx)(n(445567).m8, {
                                            resultJson: Y,
                                            environment: w,
                                            spaceStore: i,
                                            success: !1
                                        })
                                    }) : void 0]
                                }) : void 0, v ? (0, a.jsx)(l, {
                                    threadStore: o,
                                    clientStore: d
                                }) : void 0]
                            })
                        })
                    })
                })
            }
        },
        781184: (e, t, n) => {
            n.d(t, {
                w: () => i
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    directional: !0,
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M7.201 5.65a.649.649 0 0 0-.976.561v3.578c0 .5.543.813.976.56l3.067-1.788a.65.65 0 0 0 0-1.122z"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M8 1.875a6.125 6.125 0 1 1 0 12.25 6.125 6.125 0 0 1 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0",
                            clipRule: "evenodd"
                        })]
                    })
                },
                i = (0, n(104509).wt)("arrowTriangleRightCircleSmall", a, "small")
        }
    }
]);