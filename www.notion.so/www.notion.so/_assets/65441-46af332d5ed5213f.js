"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [56809, 65441], {
        52628: (e, t, n) => {
            n.d(t, {
                w: () => a
            });

            function a(e) {
                return (0, n(545504).w)({
                    url: e,
                    config: { ...n(986939).A,
                        requestedOnAlternateDomain: (0, n(700473).wasRequestedOnAlternateDomain)()
                    }
                })
            }
        },
        58931: (e, t, n) => {
            n.d(t, {
                HR: () => r,
                _y: () => i
            });
            let a = (0, n(109939).YK)({
                discardCommentConfirmationPrompt: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.prompt",
                    defaultMessage: "Do you want to discard the comment?"
                },
                discardCommentButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.discardButton.label",
                    defaultMessage: "Discard"
                },
                draftCommentConfirmationPromptTitle: {
                    id: "newDiscussionMenu.draftCommentConfirmationDialogTitle.prompt",
                    defaultMessage: "Finish your draft comment?"
                },
                draftCommentConfirmationStartingNewDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationStartingNewDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you start a new one"
                },
                draftCommentConfirmationNavigateAwayPromptDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationNavigateAwayPromptDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you leave the page"
                },
                returnToPageButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.returnToPage.label",
                    defaultMessage: "Return to draft"
                }
            });

            function r(e) {
                let {
                    discussionInputStore: t,
                    environment: r,
                    discussionHelpers: s,
                    reason: o
                } = e;
                n(332190).A.isComposingNewDiscussion() ? i({
                    environment: r,
                    reason: o ? ? "navigating_away"
                }) : s.hasCommentChanged(t) ? (n(65255).yO(r), n(647095).ui({
                    message: n(962299).A.formatMessage(a.discardCommentConfirmationPrompt),
                    showCancel: !0,
                    handleCancel: () => n(65255).Ie(r),
                    keepFocus: !0,
                    items: [{
                        label: n(962299).A.formatMessage(a.discardCommentButtonLabel),
                        color: "red",
                        onAccept: () => {
                            n(65255).QP(r), (0, n(585356).c)()
                        }
                    }]
                })) : (0, n(585356).c)()
            }

            function i(e) {
                let {
                    environment: t
                } = e;
                if (!n(332190).A.isDraftCommentOnValidSelection()) return;
                let r = n(332190).A.getDiscussionInputStore();
                n(65255).yO(t), n(647095).ui({
                    message: n(962299).A.formatMessage(a.draftCommentConfirmationPromptTitle),
                    description: (() => {
                        switch (e.reason) {
                            case "starting_new":
                                return n(962299).A.formatMessage(a.draftCommentConfirmationStartingNewDescription);
                            case "navigating_away":
                                return n(962299).A.formatMessage(a.draftCommentConfirmationNavigateAwayPromptDescription);
                            default:
                                (0, n(722371).HB)(e.reason)
                        }
                    })(),
                    keepFocus: !0,
                    innerStyle: {
                        textAlign: "center"
                    },
                    showCancel: !1,
                    shouldRenderDraftCommentIcon: !0,
                    items: [{
                        label: n(962299).A.formatMessage(a.returnToPageButtonLabel),
                        buttonType: "solid",
                        color: "blue",
                        onAccept: () => {
                            (0, n(758275).x)({
                                currentBlockStore: n(728372).AppStoreMainEditorCurrentBlockStore.state,
                                discussionInputStore: r,
                                environment: t
                            }), n(65255).Ie(t)
                        }
                    }, {
                        label: n(962299).A.formatMessage(a.discardCommentButtonLabel),
                        color: "red",
                        buttonType: "outline",
                        onAccept: () => {
                            n(65255).QP(t), (0, n(585356).c)()
                        }
                    }]
                })
            }
        },
        97726: (e, t, n) => {
            n.d(t, {
                n: () => s
            });
            var a = n(296540),
                r = n(474848);
            let i = {
                diffDot: {
                    position: "absolute",
                    top: -2,
                    insetInlineEnd: -2,
                    background: n(632079).Tj.orange.icon.accentPrimary,
                    border: `1px solid ${n(632079).Tj.background.primary}`,
                    width: 9,
                    height: 9,
                    borderRadius: 9
                }
            };

            function s(e) {
                let {
                    icon: t,
                    title: s,
                    on: o,
                    disabled: l,
                    hasDiff: d,
                    wrapStyle: c,
                    innerStyle: u,
                    hideChevron: p
                } = e, m = (0, n(107332).P)({
                    variant: "tint",
                    colorPalette: "blue",
                    colorVariant: "accentPrimary"
                }), g = (0, n(107332).P)({
                    variant: "plain",
                    colorVariant: "secondary"
                }), h = (0, n(960253).I)(() => {
                    let e = o || l ? m : g;
                    return {
                        container: {
                            borderRadius: 14,
                            display: "inline-flex",
                            ...d && {
                                position: "relative"
                            },
                            ...c
                        },
                        filterPill: {
                            fontSize: 14,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            whiteSpace: "nowrap",
                            borderRadius: 32,
                            height: n(986939).A.isMobile ? 28 : 24,
                            lineHeight: n(986939).A.isMobile ? "28px" : "24px",
                            padding: "0 8px",
                            ...e.resting,
                            ...u
                        },
                        hovered: { ...e.hovered
                        },
                        pressed: { ...e.pressed
                        }
                    }
                }, [d, c, o, l, u, m, g]), f = (0, a.useCallback)(e => {
                    "Escape" === e.key && e.currentTarget.blur()
                }, []);
                return (0, r.jsxs)("div", {
                    style: h.container,
                    children: [(0, r.jsxs)(n(64960).Ay, {
                        disabled: l,
                        disabledFeedback: !0,
                        style: h.filterPill,
                        hoveredStyle: h.hovered,
                        pressedStyle: h.pressed,
                        onMouseEnter: e.onMouseEnter,
                        onMouseLeave: e.onMouseLeave,
                        onClick: e.onClick,
                        onDoubleClick: e.onDoubleClick,
                        onKeyDown: f,
                        children: [t, s, p ? void 0 : (0, r.jsx)(n(16275).I, {
                            icon: n(595453).arrowChevronSingleDownSmallIcon,
                            size: "xs",
                            fitToViewBox: "horizontal"
                        })]
                    }), d ? (0, r.jsx)("div", {
                        style: i.diffDot
                    }) : void 0]
                })
            }
        },
        164177: (e, t, n) => {
            n.d(t, {
                j: () => i
            });
            var a = () => n(546605);
            class r extends a().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let i = new r
        },
        200424: (e, t, n) => {
            e.exports = n.p + "9ade71d75a1c0e93.png"
        },
        226512: (e, t, n) => {
            n.d(t, {
                R: () => i
            });
            var a = n(296540),
                r = n(474848);

            function i(e) {
                var t, i;
                let o, l = (0, n(109939).tz)(),
                    {
                        onClick: d,
                        onDismiss: c,
                        style: u,
                        hoveredStyle: p,
                        showBackground: m = !0
                    } = e,
                    g = (t = u, i = m, o = (0, n(781889).o)(), (0, n(960253).I)(() => ({
                        button: {
                            alignItems: "center",
                            background: i ? n(632079).Tj.buttonHoveredBackground : "none",
                            borderRadius: "100%",
                            display: "flex",
                            height: n(104509).Ev.lg,
                            width: n(104509).Ev.lg,
                            justifyContent: "center",
                            position: "absolute",
                            insetInlineEnd: 10 + o,
                            top: 10,
                            zIndex: 10,
                            ...t
                        },
                        buttonHovered: {
                            background: i ? n(632079).Tj.buttonPressedBackground : n(632079).Tj.buttonHoveredBackground
                        }
                    }), [i, t, o])),
                    h = (0, a.useContext)(n(19187).e),
                    f = function(e) {
                        let {
                            onClick: t,
                            onDismiss: n
                        } = e, r = (0, a.useCallback)(e => {
                            null == t || t(e), null == n || n()
                        }, [t, n]);
                        return t || n ? r : void 0
                    }({
                        onClick: d,
                        onDismiss: c ? ? h
                    });
                return f ? (0, r.jsx)(n(374533).A, {
                    ariaLabel: l.formatMessage(s.dismissModalAriaLabel),
                    icon: n(766970).xMarkFillIcon,
                    onClick: f,
                    style: g.button,
                    hoveredStyle: { ...g.buttonHovered,
                        ...p
                    }
                }) : null
            }
            let s = (0, n(109939).YK)({
                dismissModalAriaLabel: {
                    id: "dismiss.dismissButton.label",
                    defaultMessage: "Dismiss"
                }
            })
        },
        301704: (e, t, n) => {
            n.d(t, {
                m: () => et
            }), n(16280), n(813451), n(944114), n(898992), n(354520), n(672577), n(581454), n(908872), n(814603), n(147566), n(198721);
            var a = n(296540);

            function r(e) {
                switch (e) {
                    case "update-page-v2":
                        return "update-page";
                    case "create-agent-v2":
                        return "create-agent";
                    case "update-agent-v2":
                        return "update-agent";
                    default:
                        return e
                }
            }
            n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            var i = n(474848);
            let s = {
                container: {
                    padding: 12,
                    marginTop: 16,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 8,
                    backgroundColor: n(632079).Tj.background.primary
                },
                section: {
                    marginBottom: 16
                },
                sectionTitle: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.semibold,
                    marginBottom: 12,
                    color: n(632079).Tj.text.primary
                },
                expectationItem: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    marginBottom: 8,
                    padding: 6,
                    backgroundColor: n(632079).Tj.background.primary,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 4
                },
                formField: {
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    minWidth: "fit-content"
                },
                formLabel: {
                    fontSize: 13,
                    color: n(632079).Tj.text.accentPrimary,
                    fontWeight: n(699422).Wy.medium,
                    minWidth: 30,
                    flexShrink: 0
                },
                select: {
                    padding: "4px 8px",
                    borderRadius: 3,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    backgroundColor: n(632079).Tj.background.primary,
                    color: n(632079).Tj.text.primary,
                    fontSize: 13,
                    minWidth: 80
                },
                numberInput: {
                    padding: "4px 8px",
                    borderRadius: 3,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    backgroundColor: n(632079).Tj.background.primary,
                    color: n(632079).Tj.text.primary,
                    fontSize: 13,
                    width: 50
                },
                textInput: {
                    padding: "4px 8px",
                    borderRadius: 3,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    backgroundColor: n(632079).Tj.background.primary,
                    color: n(632079).Tj.text.primary,
                    fontSize: 13,
                    width: "100%",
                    minWidth: 120
                },
                descriptionRow: {
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    width: "100%"
                },
                testButton: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                },
                addButton: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                },
                emptyState: {
                    fontSize: 12,
                    color: n(632079).Tj.text.accentPrimary,
                    fontStyle: "italic",
                    padding: 8
                },
                testResultsPopup: {
                    padding: 12,
                    width: 400,
                    minWidth: 400,
                    maxWidth: "none",
                    maxHeight: 300,
                    overflowY: "auto"
                },
                testResultItem: {
                    marginBottom: 16,
                    fontSize: 13,
                    color: n(632079).Tj.text.accentPrimary,
                    whiteSpace: "pre-wrap"
                },
                testResultTitle: {
                    fontWeight: n(699422).Wy.semibold,
                    marginBottom: 8,
                    fontSize: 14
                },
                failedTestButton: {
                    backgroundColor: "#ffebee",
                    color: "#d32f2f",
                    padding: "4px 8px",
                    borderRadius: 4
                },
                successTestButton: {
                    backgroundColor: "#e8f5e9",
                    color: "#2e7d32",
                    padding: "4px 8px",
                    borderRadius: 4
                }
            };

            function o(e) {
                let t = (0, n(109939).tz)(),
                    {
                        expectations: o,
                        onChange: l,
                        transcript: d,
                        toolNames: c
                    } = e,
                    [u, p] = (0, a.useState)(new Map),
                    [m, g] = (0, a.useState)(new Set),
                    h = d ? d.filter(e => e.type.includes("inference")).map((e, t) => ({
                        index: t,
                        id: e.id
                    })) : [],
                    f = (0, a.useMemo)(() => Array.from(new Set([...c ? ? [], ...n(851062).yu])), [c]),
                    x = a.useMemo(() => [...o.expect || []], [o.expect]),
                    y = (0, a.useCallback)(() => {
                        l({ ...o,
                            expect: [...x, {
                                toolType: "search",
                                minTimes: 0,
                                maxTimes: void 0,
                                description: ""
                            }]
                        })
                    }, [o, l, x]),
                    v = (0, a.useCallback)(e => {
                        let t = [...x];
                        t.splice(e, 1), l({ ...o,
                            expect: t.length > 0 ? t : void 0
                        })
                    }, [o, l, x]),
                    b = (0, a.useCallback)((e, t, n) => {
                        let a = [...x];
                        a[e] = { ...a[e],
                            [t]: n
                        }, l({ ...o,
                            expect: a
                        })
                    }, [o, l, x]),
                    j = (0, a.useCallback)(e => {
                        if (!d || !o.expect || 0 === o.expect.length || e < 0 || e >= o.expect.length) return;
                        let t = o.expect[e],
                            n = d;
                        t.stepId && (n = d.filter(e => e.id === t.stepId)), g(t => new Set(t).add(e)), p(t => {
                            let n = new Map(t);
                            return n.delete(e), n
                        });
                        try {
                            let a = function(e, t) {
                                if (!e.expect || 0 === e.expect.length) return;
                                let n = {};
                                for (let e of t)
                                    if ("agent-inference" === e.type) {
                                        for (let t of e.value)
                                            if ("object" == typeof t && "tool_use" === t.type && t.name) {
                                                let e = r(t.name);
                                                n[e] = (n[e] || 0) + 1
                                            }
                                    }
                                return function(e, t) {
                                    let n = {};
                                    for (let [e, a] of Object.entries(t)) {
                                        let t = r(e);
                                        n[t] = (n[t] || 0) + (a ? ? 0)
                                    }
                                    let a = 0,
                                        i = 0,
                                        s = [];
                                    for (let t of e.expect) {
                                        let e = n[r(t.toolType)] || 0,
                                            o = t.minTimes ? ? 0,
                                            l = t.maxTimes;
                                        a++;
                                        if (0 === l ? 0 === e : (void 0 === l || !(o > l)) && e >= o && (void 0 === l || e <= l)) i++;
                                        else {
                                            let n;
                                            n = 0 === l ? "never" : void 0 !== l ? `${o}-${l} times` : `at least ${o} times`, s.push(`Expected ${t.toolType} ${n}, got ${e}${t.description?` (${t.description})`:""}`)
                                        }
                                    }
                                    return {
                                        score: i / a,
                                        maxScore: 1,
                                        totalExpectations: a,
                                        metExpectations: i,
                                        violations: s,
                                        toolCounts: n
                                    }
                                }(e, n)
                            }({
                                expect: [t]
                            }, n);
                            a && p(t => new Map(t).set(e, a))
                        } catch (e) {} finally {
                            g(t => {
                                let n = new Set(t);
                                return n.delete(e), n
                            })
                        }
                    }, [o, d]);
                return (0, i.jsxs)("div", {
                    style: s.container,
                    children: [(0, i.jsx)("div", {
                        style: s.sectionTitle,
                        children: "Expected Tools Editor"
                    }), (0, i.jsx)(n(4458).fI, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                        marginBottom: 12,
                        children: (0, i.jsx)(n(988022).p, {
                            onClick: y,
                            style: s.addButton,
                            children: "Add Expected"
                        })
                    }), (0, i.jsx)(n(479854).b, {
                        label: "Visual editor",
                        defaultOpen: !0,
                        children: (0, i.jsx)("div", {
                            style: s.section,
                            children: x && x.length > 0 ? x.map((e, a) => (0, i.jsxs)("div", {
                                style: s.expectationItem,
                                children: [(0, i.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 4,
                                    children: [(0, i.jsxs)("div", {
                                        style: s.formField,
                                        children: [(0, i.jsx)("div", {
                                            style: s.formLabel,
                                            children: "Tool:"
                                        }), (0, i.jsx)("select", {
                                            style: s.select,
                                            value: e.toolType,
                                            onChange: e => {
                                                b(a, "toolType", e.target.value)
                                            },
                                            children: [...f].sort().map(e => (0, i.jsx)("option", {
                                                value: e,
                                                children: e
                                            }, e))
                                        })]
                                    }), (0, i.jsxs)(n(4458).fI, {
                                        gap: 4,
                                        alignItems: "center",
                                        children: [d ? (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)(n(988022).p, {
                                                onClick: () => j(a),
                                                style: s.testButton,
                                                disabled: m.has(a),
                                                children: m.has(a) ? (0, i.jsx)(n(517334).k, {}) : "Test"
                                            }), u.has(a) ? (0, i.jsx)(n(656252).A, {
                                                popupType: n(423291).n.Popup,
                                                placementToOrigin: "bottom",
                                                content: () => {
                                                    let e = u.get(a);
                                                    return (0, i.jsxs)("div", {
                                                        style: s.testResultsPopup,
                                                        children: [(0, i.jsx)("div", {
                                                            style: s.testResultTitle,
                                                            children: "Test Results"
                                                        }), (0, i.jsxs)("div", {
                                                            style: s.testResultItem,
                                                            children: [(0, i.jsx)("strong", {
                                                                children: "Score: "
                                                            }), `${e.score.toFixed(2)} (${e.metExpectations}/${e.totalExpectations} expectations met)`]
                                                        }), e.violations.length > 0 ? (0, i.jsxs)("div", {
                                                            style: s.testResultItem,
                                                            children: [(0, i.jsx)("strong", {
                                                                children: "Violations:"
                                                            }), "\n", e.violations.map(e => `• ${e}
`).join("")]
                                                        }) : void 0, (0, i.jsxs)("div", {
                                                            style: s.testResultItem,
                                                            children: [(0, i.jsx)("strong", {
                                                                children: "Tool Counts:"
                                                            }), "\n", Object.entries(e.toolCounts).length > 0 ? Object.entries(e.toolCounts).map(([e, t]) => `${e}: ${t}`).join(", ") : "none"]
                                                        })]
                                                    })
                                                },
                                                children: e => (0, i.jsx)(n(988022).p, { ...e,
                                                    style: 1 === u.get(a).score ? s.successTestButton : s.failedTestButton,
                                                    children: 1 === u.get(a).score ? "✅" : "❌"
                                                })
                                            }) : void 0]
                                        }) : void 0, (0, i.jsx)(n(374533).A, {
                                            icon: n(968411).trashIcon,
                                            onClick: () => v(a),
                                            ariaLabel: t.formatMessage({
                                                id: "aiInferenceTranscript.agentToolExpectationsEditor.removeExpectation",
                                                defaultMessage: "Remove tool expectation"
                                            })
                                        })]
                                    })]
                                }), (0, i.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 6,
                                    flexWrap: "wrap",
                                    children: [(0, i.jsxs)("div", {
                                        style: s.formField,
                                        children: [(0, i.jsx)("div", {
                                            style: s.formLabel,
                                            children: "Min:"
                                        }), (0, i.jsx)("input", {
                                            type: "number",
                                            style: s.numberInput,
                                            value: e.minTimes ? ? "",
                                            placeholder: "0",
                                            onChange: e => b(a, "minTimes", e.target.value ? parseInt(e.target.value) : void 0)
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        style: s.formField,
                                        children: [(0, i.jsx)("div", {
                                            style: s.formLabel,
                                            children: "Max:"
                                        }), (0, i.jsx)("input", {
                                            type: "number",
                                            style: s.numberInput,
                                            value: e.maxTimes ? ? "",
                                            placeholder: "∞",
                                            onChange: e => b(a, "maxTimes", e.target.value ? parseInt(e.target.value) : void 0)
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    style: s.descriptionRow,
                                    children: [(0, i.jsx)("div", {
                                        style: s.formLabel,
                                        children: "Desc:"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        style: s.textInput,
                                        value: e.description ? ? "",
                                        placeholder: "Description (optional)",
                                        onChange: e => b(a, "description", e.target.value)
                                    })]
                                }), h && h.length > 0 ? (0, i.jsx)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 6,
                                    flexWrap: "wrap",
                                    children: (0, i.jsxs)("div", {
                                        style: s.formField,
                                        children: [(0, i.jsx)("div", {
                                            style: s.formLabel,
                                            children: "stepId:"
                                        }), (0, i.jsxs)("select", {
                                            style: s.select,
                                            value: e.stepId ? ? "all",
                                            onChange: e => {
                                                let t = e.target.value,
                                                    n = h.find(e => e.id === t);
                                                b(a, "stepId", null == n ? void 0 : n.id)
                                            },
                                            children: [(0, i.jsx)("option", {
                                                value: "all",
                                                children: "all"
                                            }, -1), h.map(e => (0, i.jsx)("option", {
                                                value: e.id,
                                                children: `${e.index}: ...${e.id.slice(-8)}`
                                            }, e.index))]
                                        })]
                                    })
                                }) : void 0]
                            }, a)) : (0, i.jsx)("div", {
                                style: s.emptyState,
                                children: "No tool expectations defined. Click 'Add Expectation' to add one."
                            })
                        })
                    }), (0, i.jsx)(n(479854).b, {
                        label: "JSON editor",
                        defaultOpen: !1,
                        children: (0, i.jsx)(n(140102).X, {
                            language: "json",
                            value: JSON.stringify({ ...o,
                                expect: x.length > 0 ? x : void 0
                            }, null, 2)
                        })
                    })]
                })
            }

            function l(e) {
                return e.toLocaleString()
            }
            let d = "#3498db",
                c = "#9b59b6";

            function u(e) {
                var t, a, r;
                switch (e.type) {
                    case "user":
                        return {
                            label: "user",
                            content: null == (t = (0, n(247438).q4_)(e.value)) ? void 0 : t.trim()
                        };
                    case "user-injected":
                        return {
                            label: "user-injected",
                            content: null == (a = (0, n(247438).q4_)(e.displayMessage ? ? e.actualMessage)) ? void 0 : a.trim()
                        };
                    case "agent-inference":
                        {
                            let t = e.value;
                            if ("string" == typeof t) return {
                                label: "agent-inference",
                                content: t.trim()
                            };
                            if (Array.isArray(t)) {
                                let e = t.filter(e => "text" === e.type).map(e => "content" in e ? String(e.content) : ""),
                                    n = t.filter(e => "tool_use" === e.type).map(e => "name" in e ? e.name : "tool"),
                                    a = [];
                                return e.length > 0 && a.push(e.join(" ").trim()), n.length > 0 && a.push(`[tools: ${n.join(", ")}]`), {
                                    label: "agent-inference",
                                    content: a.join(" ")
                                }
                            }
                            return {
                                label: "agent-inference"
                            }
                        }
                    case "agent-tool-result":
                        {
                            let t = e.toolName ? ? "unknown";
                            if (e.error) return {
                                label: `tool: ${t}`,
                                content: `[error] ${e.error}`
                            };
                            let n = null == (r = e.renderedResult) ? void 0 : r.content;
                            if ("string" == typeof n && n.length > 0) return {
                                label: `tool: ${t}`,
                                content: n
                            };
                            if (e.result) return {
                                label: `tool: ${t}`,
                                content: JSON.stringify(e.result)
                            };
                            return {
                                label: `tool: ${t}`
                            }
                        }
                    case "config":
                        return {
                            label: "config",
                            content: JSON.stringify(e, void 0, 2)
                        };
                    case "context":
                        return {
                            label: "page context",
                            content: JSON.stringify(e, void 0, 2)
                        };
                    case "agent-turn-start":
                        return {
                            label: "turn start"
                        };
                    case "updated-config":
                        return {
                            label: "config updated",
                            content: JSON.stringify(e, void 0, 2)
                        };
                    case "agent-transcript-summary":
                        return {
                            label: "transcript summary",
                            content: "summary" in e ? String(e.summary) : void 0
                        };
                    case "agent-turn-full-record-map":
                        return {
                            label: "record map",
                            content: JSON.stringify(e, void 0, 2)
                        };
                    default:
                        return {
                            label: e.type,
                            content: JSON.stringify(e, void 0, 2)
                        }
                }
            }
            let p = {
                header: {
                    fontSize: 11,
                    color: n(632079).Tj.text.tertiary,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                chevron: {
                    display: "inline-block",
                    fontSize: 14,
                    transition: "transform 0.15s ease",
                    marginInlineEnd: 4
                },
                chevronCollapsed: {
                    transform: "rotate(-90deg)"
                },
                chart: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    padding: 4,
                    borderRadius: 6,
                    backgroundColor: n(632079).Tj.background.secondaryTranslucent,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`
                },
                row: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    cursor: "pointer"
                },
                inferenceLabel: {
                    fontSize: 9,
                    color: n(632079).Tj.text.tertiary,
                    width: 18,
                    flexShrink: 0,
                    textAlign: "end"
                },
                barArea: {
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden"
                },
                stackedBar: {
                    height: 14,
                    borderRadius: 2,
                    display: "flex",
                    overflow: "hidden"
                },
                segment: {
                    height: "100%"
                },
                hitRateLabel: {
                    fontSize: 9,
                    fontWeight: n(699422).Wy.semibold,
                    width: 28,
                    flexShrink: 0,
                    textAlign: "end"
                },
                totalLabel: {
                    fontSize: 9,
                    color: n(632079).Tj.text.tertiary,
                    width: 72,
                    flexShrink: 0,
                    textAlign: "end",
                    whiteSpace: "nowrap"
                },
                tooltip: {
                    whiteSpace: "pre-line"
                },
                legend: {
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    fontSize: 10,
                    color: n(632079).Tj.text.tertiary
                },
                legendSwatch: {
                    width: 8,
                    height: 8,
                    borderRadius: 2
                },
                diffPanel: {
                    marginInlineStart: 24,
                    marginBlockEnd: 4,
                    padding: 8,
                    borderRadius: 6,
                    backgroundColor: n(632079).Tj.background.secondary,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    fontSize: 10,
                    fontFamily: "monospace",
                    maxHeight: 500,
                    overflowY: "auto"
                },
                diffHeader: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBlockEnd: 6,
                    color: n(632079).Tj.text.secondary
                },
                diffStep: {
                    marginBlockEnd: 4
                },
                diffStepHeader: {
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                },
                diffStepToggle: {
                    fontSize: 12,
                    marginInlineEnd: 4,
                    color: n(632079).Tj.text.tertiary,
                    padding: 0
                },
                diffStepTogglePlaceholder: {
                    display: "inline-block",
                    width: 12,
                    marginInlineEnd: 4
                },
                diffStepLabel: {
                    color: n(632079).Tj.text.secondary,
                    fontWeight: n(699422).Wy.semibold,
                    fontSize: 10
                },
                diffStepContent: {
                    color: n(632079).Tj.text.tertiary,
                    marginInlineStart: 16,
                    wordBreak: "break-word",
                    whiteSpace: "pre-wrap"
                },
                copyButton: {
                    fontSize: 9,
                    color: n(632079).Tj.text.tertiary
                }
            };

            function m(e) {
                var t;
                let r, {
                        step: s
                    } = e,
                    [o, l] = (0, a.useState)(!1),
                    [d, c] = (0, a.useState)(!1),
                    m = u(s),
                    g = !!m.content,
                    h = g && ((null == (t = m.content) ? void 0 : t.length) ? ? 0) > 200,
                    f = g && h,
                    x = (0, a.useCallback)(() => {
                        let e = `${m.label}${m.content?`:
${m.content}`:""}`;
                        navigator.clipboard.writeText(e).then(() => {
                            c(!0), setTimeout(() => c(!1), 1500)
                        })
                    }, [m]);
                return (0, i.jsxs)("div", {
                    style: p.diffStep,
                    children: [(0, i.jsxs)("div", {
                        style: p.diffStepHeader,
                        children: [f ? (0, i.jsx)(n(988022).p, {
                            style: p.diffStepToggle,
                            onClick: () => l(!o),
                            children: o ? "▾" : "▸"
                        }) : (0, i.jsx)("span", {
                            style: p.diffStepTogglePlaceholder
                        }), f ? (0, i.jsx)(n(988022).p, {
                            style: { ...p.diffStepLabel,
                                flex: 1
                            },
                            onClick: () => l(!o),
                            children: m.label
                        }) : (0, i.jsx)("span", {
                            style: { ...p.diffStepLabel,
                                flex: 1
                            },
                            children: m.label
                        }), g ? (0, i.jsx)(n(988022).p, {
                            onClick: x,
                            style: p.copyButton,
                            children: d ? "Copied!" : "Copy"
                        }) : void 0]
                    }), g ? (0, i.jsx)("div", {
                        style: p.diffStepContent,
                        children: o || !h ? m.content : (r = (m.content ? ? "").trim()).length <= 200 ? r : `${r.slice(0,200)}...`
                    }) : void 0]
                })
            }

            function g(e) {
                let {
                    inferenceNumber: t,
                    transcript: r,
                    fromIndex: s,
                    toIndex: o
                } = e, [l, d] = (0, a.useState)(!1), c = (0, a.useMemo)(() => r.slice(s, o), [r, s, o]), g = (0, a.useCallback)(() => {
                    let e = function(e, t) {
                        let n = [`Transcript diff before inference #${e}`, ""];
                        for (let e of t) {
                            let t = u(e),
                                a = t.content ? `:
${t.content}` : "";
                            n.push(`  ${t.label}${a}`)
                        }
                        return n.join("\n")
                    }(t, c);
                    navigator.clipboard.writeText(e).then(() => {
                        d(!0), setTimeout(() => d(!1), 1500)
                    })
                }, [t, c]);
                return 0 === c.length ? (0, i.jsx)("div", {
                    style: p.diffPanel,
                    children: (0, i.jsx)("span", {
                        style: p.diffStepLabel,
                        children: "No steps before this inference"
                    })
                }) : (0, i.jsxs)("div", {
                    style: p.diffPanel,
                    children: [(0, i.jsxs)("div", {
                        style: p.diffHeader,
                        children: [(0, i.jsx)("span", {
                            children: `${c.length} step${1===c.length?"":"s"} added`
                        }), (0, i.jsx)(n(988022).p, {
                            onClick: g,
                            style: p.copyButton,
                            children: l ? "Copied!" : "Copy"
                        })]
                    }), c.map((e, t) => (0, i.jsx)(m, {
                        step: e
                    }, `${e.id}-${t}`))]
                })
            }

            function h(e) {
                let {
                    transcript: t
                } = e, [r, s] = (0, a.useState)(!0), [o, u] = (0, a.useState)(void 0), m = (0, a.useMemo)(() => (function(e) {
                    let t = 0,
                        n = [];
                    for (let a = 0; a < e.length; a++) {
                        let r = e[a];
                        if (!r || "agent-inference" !== r.type) continue;
                        t++;
                        let i = void 0 === r.finishedAt,
                            s = r.cachedTokensRead ? ? 0,
                            o = Math.max(0, (r.inputTokens ? ? 0) - s),
                            l = r.cachedTokensCreated ? ? 0,
                            d = s + o + l,
                            c = d > 0 ? s / d * 100 : 0;
                        n.push({
                            inferenceNumber: t,
                            stepId: r.id,
                            transcriptIndex: a,
                            cachedRead: s,
                            uncached: o,
                            cachedCreated: l,
                            total: d,
                            hitRate: c,
                            isInProgress: i
                        })
                    }
                    return n
                })(t), [t]);
                if (0 === m.length) return null;
                let h = m.filter(e => !e.isInProgress),
                    f = h.reduce((e, t) => e + t.cachedRead, 0),
                    x = h.reduce((e, t) => e + t.total, 0),
                    y = Math.max(6e4, 6e4 * Math.ceil(Math.max(...h.map(e => e.total), 0) / 6e4));
                return (0, i.jsxs)(n(4458).VP, {
                    gap: 6,
                    marginTop: 6,
                    children: [(0, i.jsxs)(n(988022).p, {
                        onClick: () => s(!r),
                        style: p.header,
                        children: [(0, i.jsxs)("span", {
                            children: [(0, i.jsx)("span", {
                                style: { ...p.chevron,
                                    ...r ? void 0 : p.chevronCollapsed
                                },
                                children: "▾"
                            }), "Cache hit rate by inference"]
                        }), (0, i.jsx)("span", {
                            children: `${m.length} calls \xb7 ${Math.round(x>0?f/x*100:0)}% cached`
                        })]
                    }), r ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            style: p.chart,
                            children: m.map((e, r) => {
                                let s = e.total / y * 100,
                                    h = e.total > 0 ? e.cachedRead / e.total * 100 : 0,
                                    f = e.total > 0 ? e.uncached / e.total * 100 : 0,
                                    x = e.total > 0 ? e.cachedCreated / e.total * 100 : 0,
                                    v = [`Inference #${e.inferenceNumber}`, `Cache hit rate: ${e.hitRate.toFixed(1)}%`, "", `Cached read: ${l(e.cachedRead)}`, `Uncached: ${l(e.uncached)}`, e.cachedCreated > 0 ? `Cached created: ${l(e.cachedCreated)}` : void 0, `Total input: ${l(e.total)}`, "", "Click to view transcript diff"].filter(e => void 0 !== e).join("\n"),
                                    b = o === e.inferenceNumber,
                                    j = r > 0 ? m[r - 1] : void 0,
                                    k = j ? j.transcriptIndex : 0,
                                    C = e.transcriptIndex;
                                return (0, i.jsxs)(a.Fragment, {
                                    children: [(0, i.jsx)(n(51831).m, {
                                        content: () => (0, i.jsx)("div", {
                                            style: p.tooltip,
                                            children: v
                                        }),
                                        placement: "top",
                                        children: t => {
                                            var a;
                                            return (0, i.jsxs)("div", { ...t,
                                                role: "button",
                                                tabIndex: 0,
                                                style: p.row,
                                                onClick: () => u(b ? void 0 : e.inferenceNumber),
                                                children: [(0, i.jsx)("span", {
                                                    style: p.inferenceLabel,
                                                    children: `#${e.inferenceNumber}`
                                                }), e.isInProgress ? (0, i.jsx)("div", {
                                                    style: p.barArea,
                                                    children: (0, i.jsx)(n(517334).k, {
                                                        size: 12
                                                    })
                                                }) : (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsx)("div", {
                                                        style: p.barArea,
                                                        children: (0, i.jsxs)("div", {
                                                            style: { ...p.stackedBar,
                                                                width: `${s}%`
                                                            },
                                                            children: [h > 0 ? (0, i.jsx)("div", {
                                                                style: { ...p.segment,
                                                                    width: `${h}%`,
                                                                    backgroundColor: c
                                                                }
                                                            }) : void 0, f > 0 ? (0, i.jsx)("div", {
                                                                style: { ...p.segment,
                                                                    width: `${f}%`,
                                                                    backgroundColor: d
                                                                }
                                                            }) : void 0, x > 0 ? (0, i.jsx)("div", {
                                                                style: { ...p.segment,
                                                                    width: `${x}%`,
                                                                    backgroundColor: "#1abc9c"
                                                                }
                                                            }) : void 0]
                                                        })
                                                    }), (0, i.jsx)("span", {
                                                        style: { ...p.hitRateLabel,
                                                            color: (a = e.hitRate) >= 80 ? "#27ae60" : a >= 40 ? "#f39c12" : "#e74c3c"
                                                        },
                                                        children: `${Math.round(e.hitRate)}%`
                                                    }), (0, i.jsx)("span", {
                                                        style: p.totalLabel,
                                                        children: `${l(e.total)} tokens`
                                                    })]
                                                })]
                                            })
                                        }
                                    }), b ? (0, i.jsx)(g, {
                                        inferenceNumber: e.inferenceNumber,
                                        transcript: t,
                                        fromIndex: k,
                                        toIndex: C
                                    }) : void 0]
                                }, e.stepId)
                            })
                        }), (0, i.jsx)(n(4458).fI, {
                            gap: 10,
                            children: (0, i.jsxs)("div", {
                                style: p.legend,
                                children: [(0, i.jsx)("span", {
                                    style: { ...p.legendSwatch,
                                        backgroundColor: c
                                    }
                                }), (0, i.jsx)("span", {
                                    children: "Cached read"
                                }), (0, i.jsx)("span", {
                                    style: { ...p.legendSwatch,
                                        backgroundColor: d
                                    }
                                }), (0, i.jsx)("span", {
                                    children: "Uncached"
                                }), (0, i.jsx)("span", {
                                    style: { ...p.legendSwatch,
                                        backgroundColor: "#1abc9c"
                                    }
                                }), (0, i.jsx)("span", {
                                    children: "Cache write (Anthropic only)"
                                })]
                            })
                        })]
                    }) : void 0]
                })
            }
            n(430670);
            let f = (0, n(109939).YK)({
                copy: {
                    id: "aiInferenceTranscript.debug.copy",
                    defaultMessage: "Copy"
                },
                copyTooltip: {
                    id: "aiInferenceTranscript.debug.copyTooltip",
                    defaultMessage: "Copy…"
                },
                input: {
                    id: "aiInferenceTranscript.debug.copyInput",
                    defaultMessage: "Input"
                },
                output: {
                    id: "aiInferenceTranscript.debug.copyOutput",
                    defaultMessage: "Output"
                },
                metadata: {
                    id: "aiInferenceTranscript.debug.copyMetadata",
                    defaultMessage: "Metadata"
                },
                tool: {
                    id: "aiInferenceTranscript.debug.copyTool",
                    defaultMessage: "Tool input"
                }
            });

            function x(e) {
                let {
                    inference: t
                } = e, r = (0, n(533992).v3)(), s = (0, n(109939).tz)(), o = "transcript" in t.input && Array.isArray(t.input.transcript) ? t.input.transcript : void 0, l = (0, a.useMemo)(() => n(381453).oE(null == o ? void 0 : o.flatMap(e => {
                    if ("agent-inference" === e.type && Array.isArray(e.value)) return e.value.filter(e => "tool_use" === e.type).map(e => ({
                        tool: e.name,
                        input: e.content
                    }))
                })), [o]), d = async e => {
                    let [t, a] = await Promise.all([(0, n(161333).r)(), (0, n(969899).jd)()]);
                    a({
                        environment: r,
                        stringValue: e,
                        copiedMessage: t.copiedToClipboard
                    })
                }, c = [(0, n(233319).gy)({
                    key: "copy",
                    actions: n(381453).oE([(0, n(233319).Ls)({
                        key: "input",
                        displayName: f.input,
                        analyticsName: f.input.defaultMessage,
                        action: () => d(JSON.stringify(t.input, null, 2)),
                        validators: [],
                        closeParentMenu: !0,
                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                            title: s.formatMessage(f.input)
                        })
                    }), (0, n(233319).Ls)({
                        key: "output",
                        displayName: f.output,
                        analyticsName: f.output.defaultMessage,
                        action: () => d(JSON.stringify(t.expected, null, 2)),
                        validators: [],
                        closeParentMenu: !0,
                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                            title: s.formatMessage(f.output)
                        })
                    }), (0, n(233319).Ls)({
                        key: "metadata",
                        displayName: f.metadata,
                        analyticsName: f.metadata.defaultMessage,
                        action: () => d(JSON.stringify(t.metadata, null, 2)),
                        validators: [],
                        closeParentMenu: !0,
                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                            title: s.formatMessage(f.metadata)
                        })
                    }), l.length > 0 && (0, n(35370).u)({
                        key: "tools",
                        displayName: f.tool,
                        analyticsName: "tools",
                        validators: [],
                        initialFocus: void 0,
                        subActions: () => [(0, n(233319).gy)({
                            key: "tools",
                            actions: l.map(e => ({
                                key: e.tool,
                                displayName: e.tool,
                                searchName: e.tool,
                                shortcuts: void 0,
                                analyticsName: e.tool,
                                action: () => d(e.input),
                                validators: [],
                                closeParentMenu: !0,
                                render: t => (0, i.jsx)(n(95582).A, { ...t,
                                    title: e.tool
                                })
                            }))
                        })]
                    })])
                })], u = (0, n(67499).S)();
                return (0, i.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    content: e => (0, i.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        minWidth: 220,
                        children: (0, i.jsx)(n(530500).A, {
                            context: {
                                blocks: [],
                                environment: r,
                                publicEditMode: void 0,
                                pageContext: u
                            },
                            sections: c,
                            initialFocus: void 0
                        })
                    }),
                    children: e => (0, i.jsx)(n(51831).m, {
                        content: () => (0, i.jsx)("div", {
                            children: s.formatMessage(f.copyTooltip)
                        }),
                        placement: "top",
                        children: t => (0, i.jsx)(n(374533).A, { ...(0, n(63390).A)(e, t),
                            icon: n(682006).a,
                            ariaLabel: s.formatMessage(f.copy)
                        })
                    })
                })
            }
            let y = {
                recentSearchToolResultsToKeep: -1,
                compactThreshold: void 0,
                createSummaryThreshold: void 0,
                updateSummaryInterval: void 0
            };

            function v(e) {
                return (0, n(358519).Qq)(n(465862).LI, e)
            }
            let b = (0, n(109939).YK)({
                    debugOptions: {
                        id: "aiInferenceTranscript.debugOverrides.title",
                        defaultMessage: "Debug options"
                    },
                    showAssistantDebugBar: {
                        id: "aiInferenceTranscript.debugOverrides.showAssistantDebugBar",
                        defaultMessage: "Show assistant debug bar"
                    },
                    showErrors: {
                        id: "aiInferenceTranscript.debugOverrides.showErrors",
                        defaultMessage: "Show errors"
                    },
                    showFullAgentSteps: {
                        id: "aiInferenceTranscript.debugOverrides.showFullAgentSteps",
                        defaultMessage: "Emit full agent steps"
                    },
                    skipFunctionTests: {
                        id: "aiInferenceTranscript.debugOverrides.skipFunctionTests",
                        defaultMessage: "Skip function tests"
                    },
                    promptCache: {
                        id: "aiInferenceTranscript.debugOverrides.promptCache",
                        defaultMessage: "Prompt cache"
                    },
                    none: {
                        id: "aiInferenceTranscript.debugOverrides.none",
                        defaultMessage: "None"
                    },
                    redis: {
                        id: "aiInferenceTranscript.debugOverrides.redis",
                        defaultMessage: "Redis"
                    },
                    s3: {
                        id: "aiInferenceTranscript.debugOverrides.s3",
                        defaultMessage: "S3"
                    },
                    embeddingModelOverride: {
                        id: "aiInferenceTranscript.debugOverrides.embeddingModelOverride",
                        defaultMessage: "Embedding model override"
                    },
                    contextManagementConfiguration: {
                        id: "aiInferenceTranscript.debugOverrides.contextManagementConfiguration",
                        defaultMessage: "Context management configuration"
                    },
                    default: {
                        id: "aiInferenceTranscript.debugOverrides.default",
                        defaultMessage: "Default"
                    },
                    bgeM3: {
                        id: "aiInferenceTranscript.debugOverrides.bgeM3",
                        defaultMessage: "BGE-M3"
                    },
                    e5: {
                        id: "aiInferenceTranscript.debugOverrides.e5",
                        defaultMessage: "E5"
                    },
                    bge1024: {
                        id: "aiInferenceTranscript.debugOverrides.bge1024",
                        defaultMessage: "BGE-1024"
                    },
                    bge4096: {
                        id: "aiInferenceTranscript.debugOverrides.bge4096",
                        defaultMessage: "BGE-4096"
                    }
                }),
                j = {
                    iconButton: {
                        width: 20,
                        height: 20,
                        fill: n(632079).Tj.icon.primary
                    },
                    style1: {
                        minWidth: 220
                    },
                    style2: {
                        minWidth: 280,
                        flex: 1
                    },
                    style4: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4
                    },
                    style5: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4
                    }
                };

            function k(e) {
                let {
                    clientStore: t
                } = e, r = (0, n(533992).v3)(), s = (0, n(109939).tz)(), o = (0, n(682985).K8)(() => t.state.debugOverrides, [t]), [l, d] = (0, a.useState)(o.contextManagementConfiguration ? ? y), [c, u] = (0, a.useState)(!1), p = (0, n(682985).K8)(() => {
                    var e;
                    return (null == (e = n(47052).A.state) ? void 0 : e.showDebugBar) ? ? !1
                }, []), m = (0, a.useCallback)(() => {
                    (0, n(229089).c6)(!p)
                }, [p]), g = (0, a.useCallback)(() => {
                    t.setState({ ...t.state,
                        debugOverrides: { ...t.state.debugOverrides,
                            emitDebugErrors: !t.state.debugOverrides.emitDebugErrors
                        }
                    })
                }, [t]), h = (0, a.useCallback)(() => {
                    t.setState({ ...t.state,
                        debugOverrides: { ...t.state.debugOverrides,
                            emitFullAgentSteps: !t.state.debugOverrides.emitFullAgentSteps
                        }
                    })
                }, [t]), f = (0, a.useCallback)(() => {
                    t.setState({ ...t.state,
                        debugOverrides: { ...t.state.debugOverrides,
                            fastWorkflowBuilds: !t.state.debugOverrides.fastWorkflowBuilds
                        }
                    })
                }, [t]), x = (0, a.useCallback)(e => {
                    t.setState({ ...t.state,
                        debugOverrides: { ...t.state.debugOverrides,
                            usePromptCache: "none" === e ? void 0 : e
                        }
                    })
                }, [t]), k = (0, a.useCallback)(e => {
                    t.setState({ ...t.state,
                        debugOverrides: { ...t.state.debugOverrides,
                            embeddingModelOverride: "default" === e ? void 0 : e
                        }
                    })
                }, [t]), C = (0, a.useCallback)(e => {
                    if ("" === e) return;
                    let t = Number(e);
                    return Number.isFinite(t) ? t : void 0
                }, []), T = (0, a.useCallback)((e, n) => {
                    let a = C(n),
                        r = v({ ...l,
                            [e]: a
                        });
                    r && (d(r), t.setState({ ...t.state,
                        debugOverrides: { ...t.state.debugOverrides,
                            contextManagementConfiguration: r
                        }
                    }))
                }, [t, l, C]), S = o.usePromptCache || "none", M = o.embeddingModelOverride || "default", I = [(0, n(233319).gy)({
                    key: "debug",
                    actions: [(0, n(233319).Ls)({
                        key: "showAssistantDebugBar",
                        displayName: b.showAssistantDebugBar,
                        analyticsName: b.showAssistantDebugBar.defaultMessage,
                        action: () => m(),
                        validators: [],
                        closeParentMenu: !1,
                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                            title: s.formatMessage(b.showAssistantDebugBar),
                            right: p && (0, i.jsx)(n(16275).I, {
                                icon: n(15956).checkmarkIcon,
                                size: "xxs"
                            })
                        })
                    }), (0, n(233319).Ls)({
                        key: "emitDebugErrors",
                        displayName: b.showErrors,
                        analyticsName: b.showErrors.defaultMessage,
                        action: () => g(),
                        validators: [],
                        closeParentMenu: !1,
                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                            title: s.formatMessage(b.showErrors),
                            right: o.emitDebugErrors && (0, i.jsx)(n(16275).I, {
                                icon: n(15956).checkmarkIcon,
                                size: "xxs"
                            })
                        })
                    }), (0, n(233319).Ls)({
                        key: "emitFullAgentSteps",
                        displayName: b.showFullAgentSteps,
                        analyticsName: b.showFullAgentSteps.defaultMessage,
                        action: () => h(),
                        validators: [],
                        closeParentMenu: !1,
                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                            title: s.formatMessage(b.showFullAgentSteps),
                            right: o.emitFullAgentSteps && (0, i.jsx)(n(16275).I, {
                                icon: n(15956).checkmarkIcon,
                                size: "xxs"
                            })
                        })
                    }), (0, n(233319).Ls)({
                        key: "fastWorkflowBuilds",
                        displayName: b.skipFunctionTests,
                        analyticsName: b.skipFunctionTests.defaultMessage,
                        action: () => f(),
                        validators: [],
                        closeParentMenu: !1,
                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                            title: s.formatMessage(b.skipFunctionTests),
                            right: o.fastWorkflowBuilds && (0, i.jsx)(n(16275).I, {
                                icon: n(15956).checkmarkIcon,
                                size: "xxs"
                            })
                        })
                    }), (0, n(35370).u)({
                        key: "promptCache",
                        displayName: b.promptCache,
                        analyticsName: "promptCache",
                        validators: [],
                        initialFocus: void 0,
                        right: (0, i.jsx)(n(111010).D, {
                            colorVariant: "tertiary",
                            children: "none" === S ? (0, i.jsx)(n(109939).sA, { ...b.none
                            }) : "redis" === S ? (0, i.jsx)(n(109939).sA, { ...b.redis
                            }) : (0, i.jsx)(n(109939).sA, { ...b.s3
                            })
                        }),
                        subActions: () => [(0, n(233319).gy)({
                            key: "cache",
                            actions: [(0, n(233319).Ls)({
                                key: "none",
                                displayName: b.none,
                                analyticsName: b.none.defaultMessage,
                                action: () => x("none"),
                                validators: [],
                                closeParentMenu: !1,
                                render: e => (0, i.jsx)(n(95582).A, { ...e,
                                    title: s.formatMessage(b.none),
                                    right: "none" === S && (0, i.jsx)(n(16275).I, {
                                        icon: n(15956).checkmarkIcon,
                                        size: "xxs"
                                    })
                                })
                            }), (0, n(233319).Ls)({
                                key: "redis",
                                displayName: b.redis,
                                analyticsName: b.redis.defaultMessage,
                                action: () => x("redis"),
                                validators: [],
                                closeParentMenu: !1,
                                render: e => (0, i.jsx)(n(95582).A, { ...e,
                                    title: s.formatMessage(b.redis),
                                    right: "redis" === S && (0, i.jsx)(n(16275).I, {
                                        icon: n(15956).checkmarkIcon,
                                        size: "xxs"
                                    })
                                })
                            }), (0, n(233319).Ls)({
                                key: "s3",
                                displayName: b.s3,
                                analyticsName: b.s3.defaultMessage,
                                action: () => x("s3"),
                                validators: [],
                                closeParentMenu: !1,
                                render: e => (0, i.jsx)(n(95582).A, { ...e,
                                    title: s.formatMessage(b.s3),
                                    right: "s3" === S && (0, i.jsx)(n(16275).I, {
                                        icon: n(15956).checkmarkIcon,
                                        size: "xxs"
                                    })
                                })
                            })]
                        })]
                    }), (0, n(35370).u)({
                        key: "embeddingModelOverride",
                        displayName: b.embeddingModelOverride,
                        analyticsName: "embeddingModelOverride",
                        validators: [],
                        initialFocus: void 0,
                        right: (0, i.jsx)(n(111010).D, {
                            colorVariant: "tertiary",
                            children: "default" === M ? (0, i.jsx)(n(109939).sA, { ...b.default
                            }) : "bge-m3" === M ? (0, i.jsx)(n(109939).sA, { ...b.bgeM3
                            }) : "bge-1024" === M ? (0, i.jsx)(n(109939).sA, { ...b.bge1024
                            }) : "bge-4096" === M ? (0, i.jsx)(n(109939).sA, { ...b.bge4096
                            }) : (0, i.jsx)(n(109939).sA, { ...b.e5
                            })
                        }),
                        subActions: () => [(0, n(233319).gy)({
                            key: "embeddingModels",
                            actions: [(0, n(233319).Ls)({
                                key: "default",
                                displayName: b.default,
                                analyticsName: b.default.defaultMessage,
                                action: () => k("default"),
                                validators: [],
                                closeParentMenu: !1,
                                render: e => (0, i.jsx)(n(95582).A, { ...e,
                                    title: s.formatMessage(b.default),
                                    right: "default" === M && (0, i.jsx)(n(16275).I, {
                                        icon: n(15956).checkmarkIcon,
                                        size: "xxs"
                                    })
                                })
                            }), (0, n(233319).Ls)({
                                key: "bge-m3",
                                displayName: b.bgeM3,
                                analyticsName: b.bgeM3.defaultMessage,
                                action: () => k("bge-m3"),
                                validators: [],
                                closeParentMenu: !1,
                                render: e => (0, i.jsx)(n(95582).A, { ...e,
                                    title: s.formatMessage(b.bgeM3),
                                    right: "bge-m3" === M && (0, i.jsx)(n(16275).I, {
                                        icon: n(15956).checkmarkIcon,
                                        size: "xxs"
                                    })
                                })
                            }), (0, n(233319).Ls)({
                                key: "bge-1024",
                                displayName: b.bge1024,
                                analyticsName: b.bge1024.defaultMessage,
                                action: () => k("bge-1024"),
                                validators: [],
                                closeParentMenu: !1,
                                render: e => (0, i.jsx)(n(95582).A, { ...e,
                                    title: s.formatMessage(b.bge1024),
                                    right: "bge-1024" === M && (0, i.jsx)(n(16275).I, {
                                        icon: n(15956).checkmarkIcon,
                                        size: "xxs"
                                    })
                                })
                            }), (0, n(233319).Ls)({
                                key: "bge-4096",
                                displayName: b.bge4096,
                                analyticsName: b.bge4096.defaultMessage,
                                action: () => k("bge-4096"),
                                validators: [],
                                closeParentMenu: !1,
                                render: e => (0, i.jsx)(n(95582).A, { ...e,
                                    title: s.formatMessage(b.bge4096),
                                    right: "bge-4096" === M && (0, i.jsx)(n(16275).I, {
                                        icon: n(15956).checkmarkIcon,
                                        size: "xxs"
                                    })
                                })
                            }), (0, n(233319).Ls)({
                                key: "e5",
                                displayName: b.e5,
                                analyticsName: b.e5.defaultMessage,
                                action: () => k("e5"),
                                validators: [],
                                closeParentMenu: !1,
                                render: e => (0, i.jsx)(n(95582).A, { ...e,
                                    title: s.formatMessage(b.e5),
                                    right: "e5" === M && (0, i.jsx)(n(16275).I, {
                                        icon: n(15956).checkmarkIcon,
                                        size: "xxs"
                                    })
                                })
                            })]
                        })]
                    }), (0, n(233319).Ls)({
                        key: "contextManagementConfiguration",
                        displayName: b.contextManagementConfiguration,
                        analyticsName: "contextManagementConfiguration",
                        action: () => {
                            d(o.contextManagementConfiguration ? ? y), u(e => !e)
                        },
                        validators: [],
                        closeParentMenu: !1,
                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                            title: s.formatMessage(b.contextManagementConfiguration),
                            right: c ? (0, i.jsx)(n(16275).I, {
                                icon: n(15956).checkmarkIcon,
                                size: "xxs"
                            }) : void 0
                        })
                    })]
                })], w = (0, n(67499).S)();
                return (0, i.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    content: e => (0, i.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        children: (0, i.jsxs)(n(4458).fI, {
                            alignItems: "stretch",
                            gap: 12,
                            paddingBlock: 8,
                            paddingInline: 12,
                            children: [(0, i.jsx)("div", {
                                style: j.style1,
                                children: (0, i.jsx)(n(530500).A, {
                                    context: {
                                        blocks: [],
                                        environment: r,
                                        publicEditMode: void 0,
                                        pageContext: w
                                    },
                                    sections: I,
                                    initialFocus: void 0
                                })
                            }), c ? (0, i.jsx)("div", {
                                style: j.style2,
                                role: "presentation",
                                onMouseDown: e => e.stopPropagation(),
                                onClick: e => e.stopPropagation(),
                                children: (0, i.jsxs)(n(4458).VP, {
                                    gap: 8,
                                    children: [(0, i.jsxs)("label", {
                                        style: j.style4,
                                        children: [(0, i.jsx)(n(111010).D, {
                                            styleKey: "captionMedium",
                                            colorVariant: "secondary",
                                            children: "recentSearchToolResultsToKeep"
                                        }), (0, i.jsx)(n(36481).p, {
                                            type: "number",
                                            value: void 0 === l.recentSearchToolResultsToKeep ? "" : String(l.recentSearchToolResultsToKeep),
                                            onChange: e => T("recentSearchToolResultsToKeep", e.target.value),
                                            placeholder: "-1 (no truncation)"
                                        })]
                                    }), (0, i.jsxs)("label", {
                                        style: j.style4,
                                        children: [(0, i.jsx)(n(111010).D, {
                                            styleKey: "captionMedium",
                                            colorVariant: "secondary",
                                            children: "compactThreshold"
                                        }), (0, i.jsx)(n(36481).p, {
                                            type: "number",
                                            step: "0.01",
                                            min: "0",
                                            value: void 0 === l.compactThreshold ? "" : String(l.compactThreshold),
                                            onChange: e => T("compactThreshold", e.target.value),
                                            placeholder: "0.0 - 1.0"
                                        })]
                                    }), (0, i.jsxs)("label", {
                                        style: j.style5,
                                        children: [(0, i.jsx)(n(111010).D, {
                                            styleKey: "captionMedium",
                                            colorVariant: "secondary",
                                            children: "createSummaryThreshold"
                                        }), (0, i.jsx)(n(36481).p, {
                                            type: "number",
                                            step: "0.01",
                                            min: "0",
                                            value: void 0 === l.createSummaryThreshold ? "" : String(l.createSummaryThreshold),
                                            onChange: e => T("createSummaryThreshold", e.target.value),
                                            placeholder: "0.0 - 1.0"
                                        })]
                                    }), (0, i.jsxs)("label", {
                                        style: j.style5,
                                        children: [(0, i.jsx)(n(111010).D, {
                                            styleKey: "captionMedium",
                                            colorVariant: "secondary",
                                            children: "updateSummaryInterval"
                                        }), (0, i.jsx)(n(36481).p, {
                                            type: "number",
                                            step: "0.01",
                                            min: "0",
                                            value: void 0 === l.updateSummaryInterval ? "" : String(l.updateSummaryInterval),
                                            onChange: e => T("updateSummaryInterval", e.target.value),
                                            placeholder: "0.0 - 1.0"
                                        })]
                                    }), (0, i.jsx)(n(111010).D, {
                                        colorVariant: "tertiary",
                                        styleKey: "captionRegular",
                                        children: "Leave fields empty to use defaults. Thresholds control summary create/update and compaction behavior."
                                    })]
                                })
                            }) : null]
                        })
                    }),
                    children: e => (0, i.jsx)(n(51831).m, {
                        content: () => (0, i.jsx)("div", {
                            children: "Debug options"
                        }),
                        placement: "top",
                        children: t => (0, i.jsx)(n(374533).A, { ...(0, n(63390).A)(e, t),
                            icon: n(397900).ellipsisIcon,
                            iconStyle: j.iconButton,
                            ariaLabel: s.formatMessage(b.debugOptions)
                        })
                    })
                })
            }

            function C(e) {
                let [t, r] = (0, a.useState)(!1), s = (0, n(533992).v3)(), {
                    onFocus: o,
                    onBlur: l,
                    ...d
                } = e, c = e => {
                    (0, n(525779).clear)({
                        environment: s
                    }), r(!0), null == o || o(e)
                }, u = e => {
                    r(!1), null == l || l(e)
                };
                return (0, i.jsx)(n(790124).A, {
                    capture: t,
                    children: e => (0, i.jsx)(n(36481).p, { ...d,
                        ...e,
                        onFocus: c,
                        onBlur: u
                    })
                })
            }
            n(823215);
            let T = {
                status: {
                    marginInlineEnd: 2
                },
                formContainer: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    padding: "12px 0"
                },
                formLabel: {
                    fontSize: 12,
                    color: n(632079).Tj.text.accentPrimary,
                    fontWeight: n(699422).Wy.medium
                },
                popupContent: {
                    padding: 16,
                    minWidth: 300
                },
                container: {
                    padding: 12,
                    marginTop: 16,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 8,
                    backgroundColor: n(632079).Tj.background.primary
                },
                sectionTitle: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.semibold,
                    marginBottom: 12,
                    color: n(632079).Tj.text.primary
                },
                testResultsPopup: {
                    padding: 12,
                    width: 400,
                    minWidth: 400,
                    maxWidth: "none",
                    maxHeight: 300,
                    overflowY: "auto"
                },
                testResultItem: {
                    marginBottom: 16,
                    fontSize: 13,
                    color: n(632079).Tj.text.accentPrimary,
                    whiteSpace: "pre-wrap"
                },
                testResultTitle: {
                    fontWeight: n(699422).Wy.semibold,
                    marginBottom: 8,
                    fontSize: 14
                },
                failedTestButton: {
                    backgroundColor: "#ffebee",
                    color: "#d32f2f",
                    padding: "4px 8px",
                    borderRadius: 4
                },
                successTestButton: {
                    backgroundColor: "#e8f5e9",
                    color: "#2e7d32",
                    padding: "4px 8px",
                    borderRadius: 4
                },
                memorySelect: {
                    padding: "4px 8px",
                    borderRadius: 4,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    backgroundColor: n(632079).Tj.background.primary,
                    color: n(632079).Tj.text.primary
                },
                addMemoryButton: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                },
                style0: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                }
            };

            function S(e) {
                let t = (0, n(109939).tz)(),
                    {
                        request: r,
                        memories: s,
                        clientStore: o,
                        onChange: l
                    } = e,
                    d = (0, n(533992).v3)(),
                    [c, u] = (0, a.useState)(!1),
                    [p, m] = (0, a.useState)(0),
                    [g, h] = (0, a.useState)(""),
                    f = ("inferenceTranscript" === r.type ? [...r.request.transcript, ...r.response.transcript].filter(e => e.type.includes("inference")) : []).map((e, t) => ({
                        index: t,
                        id: e.id
                    })),
                    x = (0, a.useCallback)((e, t) => {
                        let n = [...s];
                        n[p] = { ...n[p],
                            [e]: t
                        }, l(n)
                    }, [s, p, l]),
                    y = (0, a.useCallback)(() => {
                        let e = s.filter((e, t) => t !== p);
                        l(e), m(Math.min(p, e.length - 1))
                    }, [s, p, l]),
                    v = (0, a.useCallback)(() => {
                        l([...s, {
                            testTitle: "",
                            inputSummary: "",
                            promptFeedback: "",
                            testInstructions: "",
                            originalOutputPassesTest: !1,
                            originalOutputTestResults: [],
                            originalOutput: "",
                            feedback: "",
                            correctedOutputs: [],
                            verified: !1,
                            isOptional: !1
                        }]), m(s.length)
                    }, [s, l]),
                    b = (0, a.useCallback)(async () => {
                        g.trim() && (u(!0), await (0, n(522259).Wd)({
                            environment: d,
                            request: r,
                            memory: { ...s[p],
                                feedback: g
                            },
                            clientStore: o,
                            onChange: e => {
                                let t = [...s];
                                t[p] = e, l(t)
                            }
                        }), h(""), u(!1))
                    }, [d, r, s, p, o, l, g]),
                    j = (0, a.useCallback)(async () => {
                        u(!0), await (0, n(522259).VZ)({
                            environment: d,
                            request: r,
                            memory: s[p],
                            clientStore: o,
                            onChange: e => {
                                let t = [...s];
                                t[p] = e, l(t)
                            }
                        }), u(!1)
                    }, [d, r, s, p, o, l]),
                    k = s[p];
                return (0, i.jsxs)("div", {
                    style: T.container,
                    children: [(0, i.jsx)("div", {
                        style: T.sectionTitle,
                        children: "Memory Editor"
                    }), (0, i.jsxs)(n(4458).fI, {
                        gap: 8,
                        marginBottom: 12,
                        alignItems: "center",
                        children: [(0, i.jsx)("select", {
                            style: T.memorySelect,
                            value: p,
                            onChange: e => m(Number(e.target.value)),
                            children: s.map((e, t) => {
                                let n;
                                return (0, i.jsxs)("option", {
                                    value: t,
                                    children: ["Memory ", t + 1, ": ", (n = e.testTitle || "Untitled").length > 24 ? `${n.slice(0,24)}...` : n]
                                }, t)
                            })
                        }), (0, i.jsx)(n(988022).p, {
                            onClick: v,
                            style: T.addMemoryButton,
                            children: "Add Memory"
                        })]
                    }), k ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 8,
                            children: [(0, i.jsx)("div", {
                                style: T.status,
                                children: c ? (0, i.jsx)(n(517334).k, {}) : k.originalOutputTestResults && k.originalOutputTestResults.length > 0 ? (0, i.jsx)(n(656252).A, {
                                    popupType: n(423291).n.Popup,
                                    placementToOrigin: "bottom",
                                    content: () => (0, i.jsx)("div", {
                                        style: T.testResultsPopup,
                                        children: k.originalOutputTestResults.map((e, t) => (0, i.jsxs)("div", {
                                            style: T.testResultItem,
                                            children: [(0, i.jsxs)("div", {
                                                style: T.testResultTitle,
                                                children: ["Test Result ", t + 1, " - Score: ", e.score]
                                            }), e.reasoning]
                                        }, t))
                                    }),
                                    children: e => (0, i.jsxs)(n(988022).p, { ...e,
                                        style: k.originalOutputTestResults.every(e => 1 === e.score) ? T.successTestButton : T.failedTestButton,
                                        children: [k.originalOutputTestResults.every(e => 1 === e.score) ? "✅ Test score: " : "❌ Test score: ", (k.originalOutputTestResults.reduce((e, t) => e + t.score, 0) / k.originalOutputTestResults.length).toFixed(2)]
                                    })
                                }) : null
                            }), (0, i.jsxs)(n(4458).fI, {
                                gap: 8,
                                children: [(0, i.jsx)(n(656252).A, {
                                    popupType: n(423291).n.Popup,
                                    placementToOrigin: "bottom",
                                    content: e => (0, i.jsxs)("div", {
                                        style: T.popupContent,
                                        children: [(0, i.jsxs)(n(4458).VP, {
                                            gap: 4,
                                            children: [(0, i.jsx)("div", {
                                                style: T.formLabel,
                                                children: "Feedback"
                                            }), (0, i.jsx)(C, {
                                                value: g,
                                                placeholder: "Enter feedback to generate memory",
                                                onChange: e => h(e.target.value),
                                                textarea: !0,
                                                autosize: !0
                                            })]
                                        }), (0, i.jsx)(n(988022).p, {
                                            onClick: () => {
                                                b(), e.close()
                                            },
                                            disabled: !g.trim(),
                                            children: "Generate"
                                        })]
                                    }),
                                    children: e => (0, i.jsx)(n(988022).p, { ...e,
                                        children: "Auto-generate"
                                    })
                                }), (0, i.jsx)(n(988022).p, {
                                    onClick: j,
                                    children: "Test"
                                }), (0, i.jsx)(n(374533).A, {
                                    icon: n(968411).trashIcon,
                                    onClick: y,
                                    ariaLabel: t.formatMessage({
                                        id: "aiInferenceTranscript.memoryEditor.deleteMemory",
                                        defaultMessage: "Delete memory"
                                    })
                                })]
                            })]
                        }), (0, i.jsx)(n(479854).b, {
                            label: "Visual editor",
                            defaultOpen: !0,
                            children: (0, i.jsxs)("div", {
                                style: T.formContainer,
                                children: [(0, i.jsxs)(n(4458).VP, {
                                    gap: 4,
                                    children: [(0, i.jsx)("div", {
                                        style: T.formLabel,
                                        children: "Test Title"
                                    }), (0, i.jsx)(C, {
                                        value: k.testTitle,
                                        placeholder: "Enter test title",
                                        onChange: e => x("testTitle", e.target.value)
                                    })]
                                }), (0, i.jsxs)(n(4458).VP, {
                                    gap: 4,
                                    children: [(0, i.jsx)("div", {
                                        style: T.formLabel,
                                        children: "Input Summary"
                                    }), (0, i.jsx)(C, {
                                        value: k.inputSummary,
                                        placeholder: "Enter input summary",
                                        onChange: e => x("inputSummary", e.target.value),
                                        textarea: !0,
                                        autosize: !0
                                    })]
                                }), (0, i.jsxs)(n(4458).VP, {
                                    gap: 4,
                                    children: [(0, i.jsx)("div", {
                                        style: T.formLabel,
                                        children: "Prompt Feedback"
                                    }), (0, i.jsx)(C, {
                                        value: k.promptFeedback,
                                        placeholder: "Enter prompt feedback",
                                        onChange: e => x("promptFeedback", e.target.value),
                                        textarea: !0,
                                        autosize: !0
                                    })]
                                }), (0, i.jsxs)(n(4458).VP, {
                                    gap: 4,
                                    children: [(0, i.jsx)("div", {
                                        style: T.formLabel,
                                        children: "Test Instructions"
                                    }), (0, i.jsx)(C, {
                                        value: k.testInstructions,
                                        placeholder: "Enter test instructions",
                                        onChange: e => x("testInstructions", e.target.value),
                                        textarea: !0,
                                        autosize: !0
                                    })]
                                }), (0, i.jsx)(n(4458).VP, {
                                    gap: 4,
                                    children: (0, i.jsxs)("label", {
                                        style: T.style0,
                                        children: [(0, i.jsx)("input", {
                                            type: "checkbox",
                                            checked: k.originalOutputPassesTest,
                                            onChange: e => x("originalOutputPassesTest", e.target.checked)
                                        }), (0, i.jsx)("span", {
                                            style: T.formLabel,
                                            children: "Original Output Passes Test"
                                        })]
                                    })
                                }), (0, i.jsx)(n(4458).VP, {
                                    gap: 4,
                                    children: (0, i.jsxs)("label", {
                                        style: T.style0,
                                        children: [(0, i.jsx)("input", {
                                            type: "checkbox",
                                            checked: k.isOptional,
                                            onChange: e => x("isOptional", e.target.checked)
                                        }), (0, i.jsx)("span", {
                                            style: T.formLabel,
                                            children: "Optional Memory"
                                        })]
                                    })
                                }), f && f.length > 0 ? (0, i.jsxs)(n(4458).VP, {
                                    gap: 4,
                                    children: [(0, i.jsx)("div", {
                                        style: T.formLabel,
                                        children: "stepId:"
                                    }), (0, i.jsxs)("select", {
                                        style: T.style0,
                                        value: k.stepId ? ? "all",
                                        onChange: e => {
                                            let t = e.target.value,
                                                n = f.find(e => e.id === t);
                                            x("stepId", null == n ? void 0 : n.id)
                                        },
                                        children: [(0, i.jsx)("option", {
                                            value: "all",
                                            children: "all"
                                        }, -1), f.map(e => (0, i.jsx)("option", {
                                            value: e.id,
                                            children: `${e.index}: ...${e.id.slice(-8)}`
                                        }, e.index))]
                                    })]
                                }) : void 0]
                            })
                        }), (0, i.jsx)(n(479854).b, {
                            label: "JSON editor",
                            defaultOpen: !1,
                            children: (0, i.jsx)(n(140102).X, {
                                language: "json",
                                value: JSON.stringify(k, null, 2)
                            })
                        })]
                    }) : void 0]
                })
            }
            let M = {
                display: "flex",
                alignItems: "center",
                marginInlineStart: 4
            };

            function I(e) {
                let {
                    items: t,
                    selectedItem: r,
                    onSelect: s,
                    renderItem: o,
                    placeholder: l,
                    isFiltered: d
                } = e, [c, u] = (0, a.useState)(""), p = (0, a.useCallback)(e => {
                    u(e.target.value)
                }, []), m = t.filter(e => d(e, c));
                return (0, i.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    content: e => (0, i.jsxs)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        children: [(0, i.jsx)(n(310324).Ay, {
                            value: c,
                            onChange: p,
                            autoFocus: !0
                        }), (0, i.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "items",
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                items: m.map((t, a) => ({
                                    key: a,
                                    action: () => {
                                        s(t), e.close()
                                    },
                                    render: e => (0, i.jsx)(n(95582).A, { ...e,
                                        title: o(t),
                                        isChecked: t === r
                                    })
                                }))
                            }]
                        })]
                    }),
                    children: e => (0, i.jsx)(n(988022).p, { ...e,
                        children: (0, i.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            children: [r ? o(r) : l || "", (0, i.jsx)("span", {
                                style: M,
                                children: (0, i.jsx)(n(16275).I, {
                                    icon: n(469102).arrowChevronSingleDownFillSmallIcon,
                                    size: "xxs",
                                    colorVariant: "tertiary"
                                })
                            })]
                        })
                    })
                })
            }

            function w(e) {
                let {
                    project: t,
                    dataset: r,
                    onChange: s
                } = e, o = (0, n(533992).v3)(), [l, d] = (0, a.useState)([]), c = (0, a.useCallback)(async () => {
                    if (!t) return;
                    let e = await o.api.callApi({
                        eventName: "getBraintrustDatasetsForProject",
                        environment: o,
                        data: {
                            project: t
                        }
                    });
                    if ("failed" === e.type) throw e.error;
                    d(e.data.datasets.map(e => e.name).sort((e, t) => e.localeCompare(t)))
                }, [o, t]);
                return (0, n(97668).Yb)(async () => {
                    await c()
                }, [c]), (0, i.jsx)(I, {
                    items: l,
                    selectedItem: r,
                    onSelect: s,
                    renderItem: e => e,
                    isFiltered: (e, t) => e.toLowerCase().includes(t.toLowerCase()),
                    placeholder: "Select dataset"
                })
            }

            function A(e) {
                let {
                    project: t,
                    setProject: r
                } = e, [s, o] = (0, a.useState)([]), l = (0, n(533992).v3)();
                (0, n(97668).Yb)(async () => {
                    let e = await l.api.callApi({
                        eventName: "getBraintrustProjects",
                        environment: l,
                        data: {}
                    });
                    if ("failed" === e.type) throw e.error;
                    o(e.data.projects.map(({
                        id: e,
                        name: t
                    }) => ({
                        id: e,
                        name: t
                    })))
                }, [l]);
                let d = s.slice().sort((e, t) => e.name.localeCompare(t.name));
                return (0, i.jsx)(I, {
                    items: d,
                    selectedItem: t,
                    onSelect: r,
                    renderItem: e => e.name,
                    isFiltered: (e, t) => e.name.toLowerCase().includes(t.toLowerCase()),
                    placeholder: "Select project"
                })
            }

            function O(e) {
                let {
                    scopeKey: t,
                    inference: a,
                    defaultState: r
                } = e, s = (0, n(109939).tz)();
                return (0, i.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    content: e => (0, i.jsx)(D, {
                        scopeKey: t,
                        inference: a,
                        buttonPopupParent: e,
                        defaultState: r
                    }),
                    children: e => (0, i.jsx)(n(51831).m, {
                        content: () => "Save to dataset",
                        placement: "top",
                        children: t => (0, i.jsx)("div", { ...(0, n(63390).A)(t, e),
                            children: (0, i.jsx)(n(374533).A, {
                                icon: n(719324).arrowLineDownSmallIcon,
                                ariaLabel: s.formatMessage({
                                    defaultMessage: "Retry",
                                    id: "aiInferenceTranscript.debug.retry"
                                })
                            })
                        })
                    })
                })
            }
            let $ = {
                label: {
                    fontSize: 12,
                    color: n(632079).Tj.text.primary
                }
            };

            function D(e) {
                let {
                    scopeKey: t,
                    inference: r,
                    buttonPopupParent: s,
                    defaultState: o
                } = e, l = (0, n(533992).v3)(), d = (0, a.useMemo)(() => (function(e) {
                    let {
                        environment: t,
                        scopeKey: a,
                        defaultState: r
                    } = e, i = L(a), s = n(255482).K.get({
                        userId: t.currentUser.id,
                        key: i
                    });
                    return !s && r ? r : s || {
                        project: void 0,
                        dataset: void 0,
                        tags: []
                    }
                })({
                    environment: l,
                    scopeKey: t,
                    defaultState: o
                }), [l, o, t]), [c, u] = (0, a.useState)(d), p = (0, a.useCallback)(e => {
                    u(e),
                        function(e) {
                            let {
                                environment: t,
                                scopeKey: a,
                                state: r
                            } = e, i = L(a);
                            n(255482).K.set({
                                userId: t.currentUser.id,
                                key: i,
                                value: r
                            })
                        }({
                            environment: l,
                            scopeKey: t,
                            state: e
                        })
                }, [l, t]), m = (0, a.useCallback)(e => {
                    p({ ...c,
                        project: e,
                        dataset: void 0
                    })
                }, [p, c]), g = (0, a.useCallback)(e => {
                    p({ ...c,
                        dataset: e
                    })
                }, [p, c]), h = (0, a.useCallback)(e => {
                    p({ ...c,
                        tags: e
                    })
                }, [p, c]), f = (0, a.useCallback)(() => {
                    let {
                        project: e,
                        dataset: t,
                        tags: a
                    } = c;
                    e && t && (0, n(522259).wm)({
                        environment: l,
                        inference: { ...r,
                            tags: a
                        },
                        project: e.name,
                        dataset: t
                    })
                }, [l, r, c]);
                return (0, i.jsx)(n(747369).A, {
                    menuType: n(649476).gu.Popup,
                    ...s,
                    children: (0, i.jsxs)(n(4458).VP, {
                        gap: 8,
                        padding: 8,
                        children: [(0, i.jsx)("div", {
                            style: $.label,
                            children: "Project"
                        }), (0, i.jsx)(A, {
                            project: c.project,
                            setProject: m
                        }), c.project ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                style: $.label,
                                children: "Dataset"
                            }), (0, i.jsx)(w, {
                                project: c.project.name,
                                dataset: c.dataset,
                                onChange: g
                            })]
                        }) : void 0, c.project && c.dataset ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                style: $.label,
                                children: "Tags"
                            }), (0, i.jsx)(B, {
                                tags: c.tags,
                                onChange: h
                            }), (0, i.jsx)(n(548436).A, {
                                size: "lg",
                                onClick: f,
                                children: "Save"
                            })]
                        }) : void 0]
                    })
                })
            }
            let P = {
                    pointerEvents: "none"
                },
                N = {
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                };

            function B(e) {
                let {
                    tags: t,
                    onChange: r
                } = e, s = (0, a.useCallback)(e => {
                    r(t.includes(e) ? t.filter(t => t !== e) : [...t, e])
                }, [r, t]);
                return (0, i.jsx)(n(4458).VP, {
                    gap: 4,
                    children: (0, i.jsx)(n(4458).fI, {
                        flexWrap: "wrap",
                        gap: 8,
                        children: n(180139).d7.map(e => (0, i.jsxs)(n(988022).p, {
                            onClick: () => s(e),
                            style: N,
                            children: [(0, i.jsx)(n(349050).S, {
                                checked: t.includes(e),
                                size: 14,
                                style: P
                            }), (0, i.jsx)("span", {
                                children: e
                            })]
                        }, e))
                    })
                })
            }

            function L(e) {
                return `ai-inference-transcript-save-to-dataset-${e}`
            }
            let z = {
                container: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    fontSize: 12,
                    fontFamily: "monospace"
                },
                segmentedProgressContainer: {
                    width: "100%",
                    height: 6,
                    backgroundColor: n(632079).Tj.border.secondary,
                    borderRadius: 3,
                    overflow: "visible",
                    display: "flex",
                    position: "relative"
                },
                progressBar: {
                    flexGrow: 1,
                    minWidth: 100
                },
                label: {
                    color: n(632079).Tj.text.secondary,
                    minWidth: 120
                },
                metrics: {
                    display: "flex",
                    gap: 12,
                    marginTop: 2,
                    fontSize: 11,
                    color: n(632079).Tj.text.tertiary
                },
                meta: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    fontSize: 11,
                    color: n(632079).Tj.text.tertiary,
                    marginTop: 6
                },
                metric: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                },
                colorBox: {
                    width: 8,
                    height: 8,
                    borderRadius: 2
                },
                segment: {
                    height: "100%",
                    transition: "width 0.3s ease"
                },
                thresholdLine: {
                    position: "absolute",
                    top: -2,
                    width: 1,
                    height: 10,
                    backgroundColor: n(632079).Tj.text.secondary,
                    zIndex: 1,
                    pointerEvents: "none"
                },
                thresholdLegend: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginTop: 4,
                    fontSize: 11,
                    color: n(632079).Tj.text.tertiary
                },
                summaryToggle: {
                    width: "fit-content",
                    color: n(632079).Tj.text.secondary,
                    fontSize: 12
                },
                summaryBubble: {
                    padding: "8px 12px",
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 12,
                    backgroundColor: n(632079).Tj.background.secondary
                },
                tooltipContent: {
                    whiteSpace: "pre-line"
                },
                style1: {
                    backgroundColor: "#3498db"
                },
                style2: {
                    backgroundColor: "#9b59b6"
                },
                style3: {
                    backgroundColor: "#e67e22"
                },
                style4: {
                    backgroundColor: "#1abc9c"
                },
                style0: {
                    backgroundColor: "#16a085"
                }
            };

            function R(e) {
                let {
                    step: t,
                    compactionConfig: r,
                    tokenUsageOverride: s,
                    summaryInfo: o,
                    approxToolResultTokens: l
                } = e, {
                    inputTokens: d,
                    outputTokens: c,
                    cachedTokensRead: u,
                    cachedTokensCreated: p
                } = t, m = u ? ? 0, g = Math.max(0, (d ? ? 0) - m), h = l ? ? 0, f = m + g + (p ? ? 0) + h + (c ? ? 0), x = t.maxInputTokens ? ? t.maxContextTokens ? ? 272e3, [y, v] = (0, a.useState)(!1);
                if (0 === f) return null;
                let b = (null == s ? void 0 : s.tokenCount) ? ? f,
                    j = Math.min(100 * Math.min((null == s ? void 0 : s.tokenUsage) ? ? (null != s && s.tokenCount ? b / x : f / x), 1), 100),
                    k = e => void 0 === e || 0 === e ? "0" : e.toLocaleString(),
                    C = (null == o ? void 0 : o.transcriptContextUsage) !== void 0 && (null == r ? void 0 : r.updateSummaryInterval) !== void 0 ? Math.min(1, o.transcriptContextUsage + r.updateSummaryInterval) : void 0,
                    T = [`Total input tokens: ${k(d)}`, m > 0 ? `  • Cached read: ${k(m)}` : null, g > 0 ? `  • Uncached read: ${k(g)}` : null, `Output tokens: ${k(c)}`, h > 0 ? `Tool result tokens (approx): ${k(h)}` : null, p ? `Cached tokens created: ${k(p)}` : null, s ? `Approx transcript tokens: ${k(b)}` : null, r ? `Next summary create: ${k(Math.round(r.createSummaryThreshold*x))} (${Math.round(100*r.createSummaryThreshold)}%)` : null, void 0 !== C ? `Next summary update: ${k(Math.round(C*x))} (${Math.round(100*C)}%)` : null, r ? `Next compact: ${k(Math.round(r.compactThreshold*x))} (${Math.round(100*r.compactThreshold)}%)` : null, `Total: ${k(f)} / ${k(x)} (${Math.round(j)}%)`].filter(Boolean).join("\n"),
                    S = g / x * 100,
                    M = m / x * 100,
                    I = (c ? ? 0) / x * 100,
                    w = (p ? ? 0) / x * 100,
                    A = h / x * 100,
                    O = [(null == r ? void 0 : r.createSummaryThreshold) !== void 0 ? {
                        value: r.createSummaryThreshold,
                        color: n(632079).Tj.text.tertiary,
                        label: "Next create"
                    } : void 0, void 0 !== C ? {
                        value: C,
                        color: n(632079).Tj.text.secondary,
                        label: "Next update"
                    } : void 0, (null == r ? void 0 : r.compactThreshold) !== void 0 ? {
                        value: r.compactThreshold,
                        color: n(632079).Tj.text.secondary,
                        label: "Next compact"
                    } : void 0].filter(n(722371).O9);
                return (0, i.jsxs)("div", {
                    style: z.container,
                    children: [(0, i.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        children: [(0, i.jsx)("span", {
                            style: z.label,
                            children: "Token Usage:"
                        }), (0, i.jsx)("div", {
                            style: z.progressBar,
                            children: (0, i.jsx)(n(51831).m, {
                                content: () => (0, i.jsx)("div", {
                                    style: z.tooltipContent,
                                    children: T
                                }),
                                placement: "top",
                                children: e => (0, i.jsxs)("div", { ...e,
                                    style: z.segmentedProgressContainer,
                                    children: [g > 0 ? (0, i.jsx)("div", {
                                        style: { ...z.segment,
                                            width: `${Math.max(.5,S)}%`,
                                            backgroundColor: "#3498db"
                                        },
                                        title: `Uncached read tokens: ${k(g)}`
                                    }) : void 0, m > 0 ? (0, i.jsx)("div", {
                                        style: { ...z.segment,
                                            width: `${Math.max(.5,M)}%`,
                                            backgroundColor: "#9b59b6"
                                        },
                                        title: `Cached read tokens: ${k(m)}`
                                    }) : void 0, void 0 !== c && c > 0 ? (0, i.jsx)("div", {
                                        style: { ...z.segment,
                                            width: `${Math.max(.5,I)}%`,
                                            backgroundColor: "#e67e22"
                                        },
                                        title: `Output tokens: ${k(c)}`
                                    }) : void 0, h > 0 ? (0, i.jsx)("div", {
                                        style: { ...z.segment,
                                            width: `${Math.max(.5,A)}%`,
                                            backgroundColor: "#16a085"
                                        },
                                        title: `Tool result tokens: ${k(h)}`
                                    }) : void 0, void 0 !== p && p > 0 ? (0, i.jsx)("div", {
                                        style: { ...z.segment,
                                            width: `${Math.max(.5,w)}%`,
                                            backgroundColor: "#1abc9c"
                                        },
                                        title: `Cached tokens created: ${k(p)}`
                                    }) : void 0, O.map((e, t) => (0, i.jsx)("div", {
                                        style: { ...z.thresholdLine,
                                            insetInlineStart: `${100*e.value}%`,
                                            backgroundColor: e.color
                                        },
                                        title: `${e.label} threshold: ${Math.round(100*e.value)}%`
                                    }, `${e.label}-${t}`))]
                                })
                            })
                        }), (0, i.jsxs)("span", {
                            style: z.label,
                            children: [k(b), " / ", k(x), " (", Math.round(j), "%)"]
                        })]
                    }), (0, i.jsxs)("div", {
                        style: z.metrics,
                        children: [g > 0 ? (0, i.jsx)(n(51831).m, {
                            content: () => `Uncached read tokens: ${k(g)}`,
                            placement: "top",
                            children: e => (0, i.jsxs)("div", { ...e,
                                style: z.metric,
                                children: [(0, i.jsx)("div", {
                                    style: { ...z.colorBox,
                                        ...z.style1
                                    }
                                }), (0, i.jsxs)("span", {
                                    children: ["Uncached Read: ", k(g)]
                                })]
                            })
                        }) : void 0, m > 0 ? (0, i.jsx)(n(51831).m, {
                            content: () => `Cached read tokens: ${k(m)}`,
                            placement: "top",
                            children: e => (0, i.jsxs)("div", { ...e,
                                style: z.metric,
                                children: [(0, i.jsx)("div", {
                                    style: { ...z.colorBox,
                                        ...z.style2
                                    }
                                }), (0, i.jsxs)("span", {
                                    children: ["Cached Read: ", k(m)]
                                })]
                            })
                        }) : void 0, void 0 !== c && c > 0 ? (0, i.jsx)(n(51831).m, {
                            content: () => `Output tokens: ${k(c)}`,
                            placement: "top",
                            children: e => (0, i.jsxs)("div", { ...e,
                                style: z.metric,
                                children: [(0, i.jsx)("div", {
                                    style: { ...z.colorBox,
                                        ...z.style3
                                    }
                                }), (0, i.jsxs)("span", {
                                    children: ["Output: ", k(c)]
                                })]
                            })
                        }) : void 0, h > 0 ? (0, i.jsx)(n(51831).m, {
                            content: () => `Tool result tokens (approx): ${k(h)}`,
                            placement: "top",
                            children: e => (0, i.jsxs)("div", { ...e,
                                style: z.metric,
                                children: [(0, i.jsx)("div", {
                                    style: { ...z.colorBox,
                                        ...z.style0
                                    }
                                }), (0, i.jsxs)("span", {
                                    children: ["Tool Results: ", k(h)]
                                })]
                            })
                        }) : void 0, void 0 !== p && p > 0 ? (0, i.jsx)(n(51831).m, {
                            content: () => `Cached tokens created: ${k(p)}`,
                            placement: "top",
                            children: e => (0, i.jsxs)("div", { ...e,
                                style: z.metric,
                                children: [(0, i.jsx)("div", {
                                    style: { ...z.colorBox,
                                        ...z.style4
                                    }
                                }), (0, i.jsxs)("span", {
                                    children: ["Cached Created: ", k(p)]
                                })]
                            })
                        }) : void 0]
                    }), O.length > 0 ? (0, i.jsx)("div", {
                        style: z.thresholdLegend,
                        children: O.map((e, t) => (0, i.jsxs)("span", {
                            children: [e.label, ": ", Math.round(100 * e.value), "%"]
                        }, `${e.label}-legend-${t}`))
                    }) : void 0, o ? (0, i.jsxs)("div", {
                        style: z.meta,
                        children: [(0, i.jsx)(n(988022).p, {
                            onClick: () => v(!y),
                            style: z.summaryToggle,
                            children: y ? "v Summary available" : "> Summary available"
                        }), (0, i.jsxs)("span", {
                            children: ["Last summarized step: ", o.lastStepType ? ? "unknown", o.lastStepPreview ? ` - ${o.lastStepPreview}` : ""]
                        }), (0, i.jsxs)("span", {
                            children: ["Last step id: ", o.lastStepId]
                        }), y ? (0, i.jsx)("div", {
                            style: z.summaryBubble,
                            children: (0, i.jsx)(n(212024).h, {
                                markdown: o.summary
                            })
                        }) : void 0]
                    }) : void 0]
                })
            }

            function E(e) {
                return "agent-transcript-summary" === e.type
            }

            function F(e) {
                return "activate-transcript-compaction" === e.type
            }

            function W(e) {
                return e.toLocaleString()
            }

            function K(e) {
                return e > 0 && e < .01 ? "<1%" : `${Math.round(100*e)}%`
            }

            function q(e, t) {
                if (!e) return "";
                let n = e.trim();
                return n.length <= t ? n : `${n.slice(0,t)}...`
            }
            n(803949);
            let V = {
                header: {
                    fontSize: 11,
                    color: n(632079).Tj.text.tertiary,
                    display: "flex",
                    justifyContent: "space-between"
                },
                chartWrapper: {
                    flex: 1,
                    position: "relative"
                },
                chart: {
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 1,
                    height: 32,
                    padding: 4,
                    borderRadius: 6,
                    backgroundColor: n(632079).Tj.background.secondaryTranslucent,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    position: "relative",
                    zIndex: 1
                },
                gridLine: {
                    position: "absolute",
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    height: 1,
                    backgroundColor: n(632079).Tj.border.secondaryTranslucent,
                    zIndex: 0
                },
                bar: {
                    flex: "1 1 0",
                    borderRadius: 2,
                    minWidth: 1
                },
                barButton: {
                    padding: 0,
                    border: "none",
                    background: "none",
                    cursor: "pointer"
                },
                legend: {
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    fontSize: 10,
                    color: n(632079).Tj.text.tertiary
                },
                activePreview: {
                    fontSize: 11,
                    color: n(632079).Tj.text.secondary,
                    marginTop: 2
                },
                legendSwatch: {
                    width: 8,
                    height: 8,
                    borderRadius: 2,
                    backgroundColor: n(632079).Tj.background.tertiary
                },
                tooltip: {
                    whiteSpace: "pre-line"
                },
                style0: {
                    backgroundColor: n(632079).Tj.text.tertiary
                },
                style1: {
                    backgroundColor: n(632079).Tj.orange.background.accentPrimary
                },
                style2: {
                    backgroundColor: n(632079).Tj.red.background.accentPrimary
                }
            };

            function _(e) {
                let {
                    transcript: t,
                    onStepClick: r
                } = e, [s, o] = (0, a.useState)(void 0), [l, d] = (0, a.useState)(void 0), c = (0, a.useMemo)(() => {
                    let e, a, r, i, s, o, l;
                    return e = 0, a = 0, r = 272e3, i = 0, s = [], o = t.length > 50, l = t.length - 1, t.forEach((t, d) => {
                        var c, u, p, m;
                        let g;
                        if ("agent-inference" === t.type) e = i = (t.inputTokens ? ? 0) + (t.outputTokens ? ? 0), r = t.maxInputTokens ? ? t.maxContextTokens ? ? 272e3, a = Math.min(e / r, 1);
                        else if ("agent-tool-result" === t.type) {
                            let n, i;
                            e += "string" != typeof(i = "string" == typeof(n = null == (m = t.renderedResult) ? void 0 : m.content) && n.length > 0 ? n : t.result ? JSON.stringify(t.result) : t.error) || 0 === i.length ? 0 : Math.max(1, Math.ceil(i.length / 4)), a = Math.min(e / r, 1)
                        } else F(t) || E(t) ? ((0, n(722371).O9)(t.transcriptTokenCount) && (e = t.transcriptTokenCount), a = (0, n(722371).O9)(t.transcriptContextUsage) ? t.transcriptContextUsage : Math.min(e / r, 1), "maxInputTokens" in t && (0, n(722371).O9)(t.maxInputTokens) ? r = t.maxInputTokens : "maxContextTokens" in t && (0, n(722371).O9)(t.maxContextTokens) && (r = t.maxContextTokens)) : i > 0 && (a = Math.min(e / r, 1));
                        "user" === t.type ? g = null == (c = (0, n(247438).q4_)(t.value)) ? void 0 : c.trim() : "user-injected" === t.type ? g = null == (u = (0, n(247438).q4_)(t.displayMessage ? ? t.actualMessage)) ? void 0 : u.trim() : "agent-message" === t.type ? g = null == (p = (0, n(247438).q4_)(t.value)) ? void 0 : p.trim() : "markdown-chat" === t.type ? g = t.value.trim() : "error" === t.type ? g = t.message.trim() : "agent-tool-result" === t.type && (g = t.toolName ? ? void 0), (!o || d % 10 == 0 || E(t) || F(t) || d === l) && s.push({
                            index: d,
                            stepId: t.id,
                            stepType: t.type,
                            tokenCount: e,
                            usageRatio: a,
                            compactionEventType: F(t) ? "activation" : E(t) ? "summary" : "none",
                            preview: g
                        })
                    }), s
                }, [t]);
                if (0 === c.length) return null;
                let u = l ? ? s,
                    p = u ? c.find(e => e.stepId === u) : void 0,
                    m = q((null == p ? void 0 : p.preview) ? ? (p ? `[${p.stepType}]` : void 0), 20),
                    g = c[c.length - 1],
                    h = Math.max(1, ...c.map(e => e.tokenCount));
                return (0, i.jsxs)(n(4458).VP, {
                    gap: 6,
                    marginTop: 6,
                    children: [(0, i.jsxs)("div", {
                        style: V.header,
                        children: [(0, i.jsx)("span", {
                            children: "Transcript tokens over time"
                        }), (0, i.jsx)("span", {
                            children: `${W(g.tokenCount)} tokens \xb7 ${K(g.usageRatio)}`
                        })]
                    }), (0, i.jsx)(n(4458).fI, {
                        children: (0, i.jsxs)("div", {
                            style: V.chartWrapper,
                            children: [
                                [0, 1].map(e => (0, i.jsx)("div", {
                                    style: { ...V.gridLine,
                                        insetBlockEnd: `${100*e}%`
                                    }
                                }, `grid-${e}`)), (0, i.jsx)("div", {
                                    style: V.chart,
                                    children: c.map(e => {
                                        let t = Math.max(2, Math.round(e.tokenCount / h * 100)),
                                            a = n(632079).Tj.text.tertiary;
                                        switch (e.compactionEventType) {
                                            case "activation":
                                                a = n(632079).Tj.red.background.accentPrimary;
                                                break;
                                            case "summary":
                                                a = n(632079).Tj.orange.background.accentPrimary;
                                                break;
                                            default:
                                                a = n(632079).Tj.text.tertiary
                                        }
                                        let s = q(e.preview, 120),
                                            l = s ? `
${s}` : "",
                                            c = `Step ${e.index+1} \xb7 ${e.stepType}
${W(e.tokenCount)} tokens (${K(e.usageRatio)})${l}${r?"\nClick to jump":""}`,
                                            u = !!r;
                                        return (0, i.jsx)(n(51831).m, {
                                            content: () => (0, i.jsx)("div", {
                                                style: V.tooltip,
                                                children: c
                                            }),
                                            placement: "top",
                                            children: s => {
                                                let l = t => {
                                                        var n;
                                                        null == (n = s.onMouseEnter) || n.call(s, t), d(e.stepId)
                                                    },
                                                    c = e => {
                                                        var t;
                                                        null == (t = s.onMouseLeave) || t.call(s, e), d(void 0)
                                                    };
                                                return u ? (0, i.jsx)(n(988022).p, { ...s,
                                                    "aria-label": `Jump to step ${e.index+1}`,
                                                    onMouseEnter: l,
                                                    onMouseLeave: c,
                                                    onClick: () => {
                                                        o(e.stepId), null == r || r(e.stepId)
                                                    },
                                                    hoveredStyle: {
                                                        background: a
                                                    },
                                                    pressedStyle: {
                                                        background: a
                                                    },
                                                    style: { ...V.bar,
                                                        ...V.barButton,
                                                        height: `${t}%`,
                                                        background: a
                                                    }
                                                }) : (0, i.jsx)("div", { ...s,
                                                    style: { ...V.bar,
                                                        height: `${t}%`,
                                                        background: a
                                                    },
                                                    onMouseEnter: l,
                                                    onMouseLeave: c
                                                })
                                            }
                                        }, `${e.stepId}-${e.index}`)
                                    })
                                })
                            ]
                        })
                    }), m ? (0, i.jsx)("div", {
                        style: V.activePreview,
                        children: `Step ${((null==p?void 0:p.index)??0)+1}: ${m}`
                    }) : void 0, (0, i.jsxs)("div", {
                        style: V.legend,
                        children: [(0, i.jsx)("span", {
                            style: { ...V.legendSwatch,
                                ...V.style0
                            }
                        }), (0, i.jsx)("span", {
                            children: "Step token count (relative height)"
                        }), (0, i.jsx)("span", {
                            style: { ...V.legendSwatch,
                                ...V.style1
                            }
                        }), (0, i.jsx)("span", {
                            children: "Summary created"
                        }), (0, i.jsx)("span", {
                            style: { ...V.legendSwatch,
                                ...V.style2
                            }
                        }), (0, i.jsx)("span", {
                            children: "Compaction activated"
                        })]
                    })]
                })
            }

            function U(e, t) {
                let n = e.trim();
                return n.length <= t ? n : `${n.slice(0,t)}...`
            }

            function H(e) {
                return void 0 !== e.inputTokens || void 0 !== e.outputTokens || void 0 !== e.cachedTokensRead || void 0 !== e.cachedTokensCreated || void 0 !== e.maxContextTokens || void 0 !== e.maxInputTokens
            }
            let J = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                    fontSize: 14
                },
                Y = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    fontSize: 14
                },
                G = {
                    fontSize: 14
                },
                X = {
                    position: "relative",
                    pointerEvents: "auto"
                },
                Z = {
                    flexGrow: 1
                },
                Q = {
                    position: "relative",
                    overflowY: "auto"
                },
                ee = {
                    position: "relative"
                };

            function et(e) {
                var t, r, s, o;
                let {
                    clientStore: l,
                    threadStore: d
                } = e, c = (0, n(109939).tz)(), u = null == d ? void 0 : d.id, p = (0, n(682985).K8)(() => u ? l.getOrCreateClientAIChatThreadStore(u).state.inferences.length : 0, [l, u]), m = (0, n(682985).K8)(() => !!(u && l.getOrCreateClientAIChatThreadStore(u).state.loading || (null == d ? void 0 : d.getCurrentInferenceId()) !== void 0), [l, d, u]), g = (0, n(682985).K8)(() => u ? l.getOrCreateClientAIChatThreadStore(u).state.inferences : [], [l, u], {
                    equalityFn: n(795676).k
                }), h = (0, n(682985).K8)(() => u ? l.getOrCreateClientAIChatThreadStore(u).state.requestInfo : void 0, [l, u], {
                    equalityFn: n(795676).k
                }), f = (0, n(682985).K8)(() => (null == d ? void 0 : d.getTranscript()) ? ? [], [d], {
                    equalityFn: n(795676).k
                }), x = (0, a.useCallback)(() => {
                    if (!u) return;
                    let e = l.getOrCreateClientAIChatThreadStore(u),
                        {
                            acceptedInferenceKeys: t
                        } = e.state;
                    t.length > 0 ? e.setState({ ...e.state,
                        acceptedInferenceKeys: []
                    }) : e.setState({ ...e.state,
                        acceptedInferenceKeys: e.state.inferences.map(e => e.key)
                    })
                }, [l, u]), y = (0, n(682985).K8)(() => l.state.configForNewTranscripts, [l]), v = (0, n(682985).K8)(() => l.state.debugOverrides, [l]), b = (0, n(682985).K8)(() => l.state.model, [l]), j = (0, a.useCallback)(e => {
                    l.setState({ ...l.state,
                        model: e
                    })
                }, [l]), C = (0, n(682985).K8)(() => (0, n(187353).av)(d), [d]), T = (0, a.useCallback)(() => {
                    let e = new Blob([JSON.stringify({
                            threadId: u,
                            transcript: f,
                            inferences: g.map(e => ({
                                key: e.key,
                                input: e.value.input,
                                expected: e.value.expected,
                                metadata: e.value.metadata
                            })),
                            requestInfo: h,
                            exportedAt: new Date().toISOString()
                        }, null, 2)], {
                            type: "application/json"
                        }),
                        t = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
                    (0, n(216736).WN)({
                        blob: e,
                        filename: `agent-debug-transcript-${t}.json`
                    })
                }, [u, f, g, h]);
                return (0, i.jsxs)(n(4458).VP, {
                    className: "autolayout-fill-height autolayout-fill-width",
                    style: X,
                    children: [(0, i.jsxs)(n(4458).fI, {
                        gap: 8,
                        paddingBlock: 8,
                        paddingInline: 12,
                        height: 46,
                        alignItems: "center",
                        justifyContent: "center",
                        className: "autolayout-row",
                        style: ee,
                        children: [m ? (0, i.jsx)(n(517334).k, {}) : void 0, !C && d ? (0, i.jsx)(eu, {
                            clientStore: l,
                            threadStore: d
                        }, d.id) : void 0, (0, i.jsx)("div", {
                            style: Z
                        }), (0, i.jsx)(n(417951).$, {
                            model: b,
                            setModel: j,
                            format: "badge"
                        }), (0, i.jsx)(k, {
                            clientStore: l
                        }), C ? void 0 : (0, i.jsx)(n(51831).m, {
                            content: () => (0, i.jsx)("div", {
                                children: "Export transcript"
                            }),
                            placement: "bottom",
                            children: e => (0, i.jsx)(n(374533).A, { ...e,
                                icon: n(725111).arrowInCircleDownIcon,
                                ariaLabel: c.formatMessage({
                                    id: "aiInferenceTranscript.debug.exportTranscript",
                                    defaultMessage: "Export transcript"
                                }),
                                onClick: T
                            })
                        })]
                    }), (0, i.jsxs)(n(4458).VP, {
                        gap: 16,
                        paddingBlock: 8,
                        paddingInline: 12,
                        className: "autolayout-col",
                        style: Q,
                        flex: "1 0 0",
                        children: [h ? (0, i.jsx)(ea, {
                            requestInfo: h,
                            clientStore: l,
                            threadStore: d
                        }) : void 0, h && (t = h, (0, n(722371).O9)(null == t || null == (r = t.request) || null == (r = r.debugOverrides) ? void 0 : r.evalMode)) && [...(s = h).request.transcript, ...(null == (o = s.response) ? void 0 : o.transcript) ? ? []].filter(e => "agent-tool-result" === e.type && void 0 !== e.threadOperations).reduce((e, t) => {
                            var n;
                            return e + ((null == (n = t.threadOperations) ? void 0 : n.length) ? ? 0)
                        }, 0) > 0 ? (0, i.jsx)(ex, {
                            requestInfo: h,
                            clientStore: l,
                            threadStore: d
                        }) : void 0, C && y ? (0, i.jsx)(n(4458).VP, {
                            gap: 12,
                            children: (0, i.jsx)(em, {
                                debugOverrides: v,
                                clientStore: l,
                                configType: y.type
                            })
                        }) : void 0, (0, i.jsx)(ed, {
                            inferences: g,
                            requestInfo: h,
                            model: b,
                            debugOverrides: v,
                            transcript: f
                        }), (0, i.jsxs)("div", {
                            style: Y,
                            children: [g.length > 0 ? (0, i.jsxs)("div", {
                                style: J,
                                children: [(0, i.jsx)("div", {
                                    style: G,
                                    children: "Inferences"
                                }), (0, i.jsx)("div", {
                                    style: Z
                                }), p > 0 ? (0, i.jsx)("div", {
                                    children: `${p} inference${1===p?"":"s"}`
                                }) : void 0, !m && p > 0 ? (0, i.jsx)(n(988022).p, {
                                    onClick: x,
                                    children: "Toggle all"
                                }) : void 0]
                            }) : void 0, g.map((e, t) => (0, i.jsx)(ei, {
                                inference: e,
                                clientStore: l,
                                threadStore: d
                            }, `${e.key}-${t}`))]
                        })]
                    })]
                })
            }
            let en = {
                wrap: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    padding: "4px 2px",
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 8,
                    whiteSpace: "pre-wrap",
                    fontSize: 14
                },
                header: {
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                    padding: "0 6px"
                },
                toggle: {
                    border: "none",
                    padding: 0,
                    margin: 0
                },
                style0: {
                    flexGrow: 1
                },
                style1: {
                    marginInlineStart: 8,
                    fontSize: 12,
                    color: "inherit"
                }
            };

            function ea(e) {
                var t;
                let {
                    requestInfo: r,
                    clientStore: s,
                    threadStore: l
                } = e, d = null == l ? void 0 : l.id, {
                    request: c,
                    response: u,
                    memories: p
                } = r, m = c.transcript.find(e => "config" === e.type), g = (0, a.useCallback)(() => {
                    if (!u) throw Error("Response is required");
                    if (!d) return;
                    let e = s.getOrCreateClientAIChatThreadStore(d);
                    e.setState({ ...e.state,
                        requestInfo: { ...r,
                            memories: [{ ...n(180139).s8,
                                originalOutput: u
                            }]
                        }
                    })
                }, [s, r, u, d]), h = (0, a.useCallback)(e => {
                    if (!d) return;
                    let t = s.getOrCreateClientAIChatThreadStore(d);
                    t.setState({ ...t.state,
                        requestInfo: { ...r,
                            memories: e
                        }
                    })
                }, [s, r, d]), f = (0, a.useCallback)(e => {
                    if (!d) return;
                    let t = s.getOrCreateClientAIChatThreadStore(d);
                    t.setState({ ...t.state,
                        requestInfo: { ...r,
                            expectedAgentTools: e
                        }
                    })
                }, [s, r, d]), x = (0, a.useCallback)(e => {
                    var t, a, r;
                    if (!d) return;
                    let i = s.getOrCreateClientAIChatThreadStore(d),
                        o = (null == (t = e.metadata) ? void 0 : t.memories) || [],
                        l = null == (a = e.metadata) ? void 0 : a.expectedAgentTools;
                    e.input.type === n(330942).uF && i.setState({ ...i.state,
                        requestInfo: {
                            request: e.input,
                            response: e.expected,
                            memories: o,
                            expectedAgentTools: l,
                            availableToolNames: null == (r = e.metadata) ? void 0 : r.tools
                        }
                    })
                }, [s, d]), y = (0, a.useCallback)(() => {
                    if (!d) return;
                    let e = s.getOrCreateClientAIChatThreadStore(d);
                    e.setState({ ...e.state,
                        requestInfo: { ...r,
                            expectedAgentTools: {
                                expect: [{
                                    toolType: "search",
                                    minTimes: void 0,
                                    maxTimes: void 0,
                                    description: ""
                                }]
                            }
                        }
                    })
                }, [s, r, d]), v = (0, n(682985).K8)(() => (function(e) {
                    if (!e) return;
                    let t = e.getMessageStores().map(e => e.getStep()).filter(e => (null == e ? void 0 : e.type) === "eval-result");
                    if (0 === t.length) return;
                    let n = t[t.length - 1],
                        a = null == n ? void 0 : n.braintrustInfo;
                    if (null != a && a.project && null != a && a.dataset && null != a && a.originalInferenceId) return {
                        project: a.project,
                        dataset: a.dataset,
                        exampleId: a.originalInferenceId
                    }
                })(l), [l]), b = (0, a.useMemo)(() => ({
                    id: (null == v ? void 0 : v.exampleId) || c.traceId,
                    input: {
                        type: n(330942).uF,
                        ...c
                    },
                    expected: u,
                    metadata: {
                        memories: p.map(({
                            originalOutput: e,
                            ...t
                        }) => t),
                        ...r.expectedAgentTools && {
                            expectedAgentTools: r.expectedAgentTools
                        }
                    }
                }), [c, u, p, v, r.expectedAgentTools]), j = (0, a.useMemo)(() => {
                    if (r.response) return {
                        type: "inferenceTranscript",
                        request: r.request,
                        response: r.response
                    }
                }, [r]), k = (0, n(109939).tz)();
                return (0, i.jsxs)("div", {
                    style: en.wrap,
                    children: [(0, i.jsxs)("div", {
                        style: en.header,
                        children: [(0, i.jsxs)("span", {
                            style: en.style0,
                            children: ["Request", v ? (0, i.jsx)("a", {
                                href: `https://www.braintrust.dev/app/Notion/p/${v.project}/datasets/${v.dataset}?r=${v.exampleId}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: en.style1,
                                children: "View in Braintrust"
                            }) : void 0]
                        }), 0 === p.length ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(n(51831).m, {
                                content: () => "Add memory for this inference",
                                placement: "top",
                                children: e => (0, i.jsx)("div", { ...e,
                                    children: (0, i.jsx)(n(374533).A, {
                                        icon: n(638501).plusSmallIcon,
                                        onClick: g,
                                        ariaLabel: k.formatMessage({
                                            defaultMessage: "Add memory",
                                            id: "aiInferenceTranscript.debug.addMemory"
                                        })
                                    })
                                })
                            }), (0, i.jsx)(eh, {
                                onLoadExample: x,
                                datasetInfo: v
                            })]
                        }) : void 0, r.expectedAgentTools && r.expectedAgentTools.expect && 0 !== r.expectedAgentTools.expect.length ? void 0 : (0, i.jsx)(n(51831).m, {
                            content: () => "Add agent tool expectations",
                            placement: "top",
                            children: e => (0, i.jsx)("div", { ...e,
                                children: (0, i.jsx)(n(374533).A, {
                                    icon: n(896714).P,
                                    onClick: y,
                                    ariaLabel: k.formatMessage({
                                        defaultMessage: "Add agent tool expectations",
                                        id: "aiInferenceTranscript.debug.addAgentToolExpectations"
                                    })
                                })
                            })
                        }), b ? (0, i.jsx)(O, {
                            inference: b,
                            scopeKey: `inferenceTranscript-${null==m?void 0:m.value.type}`
                        }) : void 0]
                    }), (0, i.jsx)(n(479854).b, {
                        label: "Input",
                        style: en.toggle,
                        children: (0, i.jsx)(n(140102).X, {
                            language: "json",
                            value: JSON.stringify(r.request, null, 2)
                        })
                    }), r.response ? (0, i.jsx)(n(479854).b, {
                        label: "Output",
                        style: en.toggle,
                        children: (0, i.jsx)(n(140102).X, {
                            value: JSON.stringify(r.response, null, 2),
                            language: "json"
                        })
                    }) : null, j && p.length > 0 ? (0, i.jsx)(S, {
                        request: j,
                        memories: p,
                        onChange: h,
                        clientStore: s
                    }) : void 0, r.expectedAgentTools && r.expectedAgentTools.expect && r.expectedAgentTools.expect.length > 0 ? (0, i.jsx)(o, {
                        expectations: r.expectedAgentTools,
                        onChange: f,
                        transcript: [...r.request.transcript, ...(null == (t = r.response) ? void 0 : t.transcript) ? ? []]
                    }) : void 0]
                })
            }
            let er = {
                    wrap: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        padding: "4px 2px",
                        border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                        borderRadius: 8,
                        whiteSpace: "pre-wrap",
                        fontSize: 14
                    },
                    header: {
                        padding: "0 6px",
                        display: "flex",
                        gap: 4,
                        alignItems: "center"
                    },
                    annotation: {
                        padding: "0 6px"
                    },
                    toggle: {
                        border: "none",
                        padding: 0,
                        margin: 0
                    },
                    typeLabel: {
                        flexGrow: 1,
                        marginInlineStart: 4,
                        fontSize: 12,
                        fontFamily: "monospace"
                    },
                    style0: {
                        width: 300,
                        whiteSpace: "normal"
                    },
                    style1: {
                        cursor: "pointer",
                        textDecoration: "underline",
                        textDecorationStyle: "dotted"
                    }
                },
                ei = a.memo(function(e) {
                    let {
                        inference: t,
                        clientStore: r,
                        threadStore: s
                    } = e, o = t.key, l = (0, n(533992).v3)(), d = null == s ? void 0 : s.id, c = (0, n(682985).K8)(() => d ? r.getOrCreateClientAIChatThreadStore(d).state.inferenceKeysToAnnotations[o] : void 0, [r, o, d]), u = (0, a.useCallback)(e => {
                        if (!d) return;
                        let t = r.getOrCreateClientAIChatThreadStore(d),
                            n = e.target.value,
                            a = { ...t.state.inferenceKeysToAnnotations,
                                [o]: n
                            };
                        t.setState({ ...t.state,
                            inferenceKeysToAnnotations: a
                        })
                    }, [r, o, d]), p = (0, n(682985).K8)(() => {
                        if (!d) return !1;
                        let {
                            acceptedInferenceKeys: e
                        } = r.getOrCreateClientAIChatThreadStore(d).state;
                        return e.includes(o)
                    }, [r, o, d]), m = (0, a.useCallback)(e => {
                        if (!d) return;
                        let t = r.getOrCreateClientAIChatThreadStore(d),
                            {
                                acceptedInferenceKeys: a,
                                inferences: i
                            } = t.state,
                            s = e.shiftKey;
                        if (a.includes(o))
                            if (s) {
                                let e = i.findIndex(e => e.key === o),
                                    r = i.slice(0, e + 1).map(e => e.key);
                                t.setState({ ...t.state,
                                    acceptedInferenceKeys: n(381453).sb(a.filter(e => !r.includes(e)))
                                })
                            } else t.setState({ ...t.state,
                                acceptedInferenceKeys: a.filter(e => e !== o)
                            });
                        else if (s) {
                            let e = i.findIndex(e => e.key === o),
                                r = i.slice(0, e + 1).map(e => e.key),
                                s = n(381453).sb([...a, ...r]);
                            t.setState({ ...t.state,
                                acceptedInferenceKeys: s
                            })
                        } else t.setState({ ...t.state,
                            acceptedInferenceKeys: n(381453).sb([...a, o])
                        })
                    }, [r, o, d]), g = (0, a.useMemo)(() => {
                        let e = null == t ? void 0 : t.value.expected;
                        if (!e) return "";
                        if ("string" != typeof e) return JSON.stringify(e, null, 2);
                        try {
                            return e.trim().startsWith("{") ? JSON.stringify(JSON.parse(e), null, 2) : e
                        } catch (t) {
                            return e
                        }
                    }, [t]), h = (0, n(682985).K8)(() => {
                        if (d) return r.getOrCreateClientAIChatThreadStore(d).state.inferenceKeysToMemories[o]
                    }, [r, o, d]), f = (0, a.useMemo)(() => ({
                        type: "inference",
                        inference: t.value
                    }), [t]), y = (0, a.useCallback)(async () => {
                        d && await (0, n(522259).Ou)({
                            environment: l,
                            clientStore: r,
                            inference: t,
                            threadId: d
                        })
                    }, [r, l, t, d]), v = (0, a.useCallback)(e => {
                        if (!d) return;
                        let t = r.getOrCreateClientAIChatThreadStore(d);
                        t.setState({ ...t.state,
                            inferenceKeysToMemories: { ...t.state.inferenceKeysToMemories,
                                [o]: e[0]
                            }
                        })
                    }, [r, o, d]), b = (0, a.useCallback)(() => {
                        if (!d) return;
                        if (!t.value.expected) throw Error("Expected output is required");
                        let e = r.getOrCreateClientAIChatThreadStore(d);
                        e.setState({ ...e.state,
                            inferenceKeysToMemories: { ...e.state.inferenceKeysToMemories,
                                [o]: { ...n(180139).s8,
                                    originalOutput: t.value.expected
                                }
                            }
                        })
                    }, [r, o, t, d]), j = (0, a.useMemo)(() => ({ ...t.value,
                        metadata: { ...t.value.metadata,
                            memories: n(381453).oE([h])
                        }
                    }), [t, h]), k = (0, n(109939).tz)();
                    return t ? (0, i.jsxs)("div", {
                        style: er.wrap,
                        children: [(0, i.jsxs)("div", {
                            style: er.header,
                            children: [(0, i.jsx)(n(51831).m, {
                                content: () => (0, i.jsx)("div", {
                                    style: er.style0,
                                    children: "Checking this will 'freeze' this inference. When the request is retried, instead of running the inference again, the original output will be used."
                                }),
                                placement: "top",
                                children: e => (0, i.jsx)("div", { ...e,
                                    children: (0, i.jsx)(n(349050).S, {
                                        checked: p,
                                        size: 14,
                                        onClick: m
                                    })
                                })
                            }), (0, i.jsx)(n(656767).R, {
                                inference: t.value,
                                trigger: (0, i.jsx)("span", {
                                    style: { ...er.typeLabel,
                                        ...er.style1
                                    },
                                    children: function(e) {
                                        let t = e.type;
                                        for (let n of ("fileName" in e && (t += ` – ${e.fileName}`), "testName" in e && (t += ` – ${e.testName}`), "functionKey" in e && (t += ` – ${e.functionKey}`), "key" in e && (t += ` – ${e.key}`), ["retries", "validationRetries"]))
                                            if (n in e && e[n].length > 0) {
                                                let a = e[n].filter(e => "assistant" !== e.type);
                                                t += ` (${a.length} error steps)`
                                            }
                                        return t
                                    }(t.value.input)
                                })
                            }), (0, i.jsx)(n(51831).m, {
                                content: () => "Retry inference",
                                placement: "top",
                                children: e => (0, i.jsx)("div", { ...e,
                                    children: (0, i.jsx)(n(374533).A, {
                                        icon: n(940723).b,
                                        onClick: y,
                                        ariaLabel: k.formatMessage({
                                            defaultMessage: "Retry",
                                            id: "aiInferenceTranscript.debug.retry"
                                        })
                                    })
                                })
                            }), (0, i.jsx)(x, {
                                inference: t.value
                            }), h ? void 0 : (0, i.jsx)(n(51831).m, {
                                content: () => "Add memory for this inference",
                                placement: "top",
                                children: e => (0, i.jsx)("div", { ...e,
                                    children: (0, i.jsx)(n(374533).A, {
                                        icon: n(638501).plusSmallIcon,
                                        onClick: b,
                                        ariaLabel: k.formatMessage({
                                            defaultMessage: "Add memory",
                                            id: "aiInferenceTranscript.debug.addMemory"
                                        })
                                    })
                                })
                            }), (0, i.jsx)(O, {
                                inference: j,
                                scopeKey: `inference-${t.value.input.type}`,
                                defaultState: {
                                    project: void 0,
                                    dataset: t.value.input.type,
                                    tags: []
                                }
                            })]
                        }), (0, i.jsx)(eo, {
                            input: t.value.input
                        }), (0, i.jsx)(n(51831).m, {
                            content: () => (0, i.jsx)("div", {
                                style: er.style0,
                                children: "The text you type here is passed as 'context.annotation' when this inference is retried. Typically, this is rendered as a final user step in the prompt used to 'nudge' the model."
                            }),
                            placement: "right",
                            children: e => (0, i.jsx)("div", { ...e,
                                style: er.annotation,
                                children: (0, i.jsx)(C, {
                                    value: c,
                                    placeholder: "Set annotation",
                                    onChange: u,
                                    textarea: !0,
                                    autosize: !0
                                })
                            })
                        }), (0, i.jsx)(n(479854).b, {
                            label: "Input",
                            style: er.toggle,
                            children: (0, i.jsx)(n(140102).X, {
                                disabled: !0,
                                language: "json",
                                value: JSON.stringify({ ...t.value.input,
                                    examples: void 0
                                }, null, 2)
                            })
                        }), t.value.expected ? (0, i.jsx)(n(479854).b, {
                            label: "Output",
                            style: er.toggle,
                            children: (0, i.jsx)(n(140102).X, {
                                disabled: !0,
                                value: g,
                                language: "json"
                            })
                        }) : null, t.value.metadata ? (0, i.jsx)(n(479854).b, {
                            label: "Metadata",
                            style: er.toggle,
                            children: (0, i.jsx)(n(140102).X, {
                                disabled: !0,
                                value: JSON.stringify(t.value.metadata, null, 2),
                                language: "json"
                            })
                        }) : null, h ? (0, i.jsx)(S, {
                            request: f,
                            memories: [h],
                            onChange: v,
                            clientStore: r
                        }) : void 0]
                    }) : null
                }),
                es = {
                    container: {
                        fontSize: 12,
                        color: n(632079).Tj.text.secondary,
                        paddingTop: 0,
                        paddingInlineEnd: 6,
                        paddingBottom: 4,
                        paddingInlineStart: 6
                    }
                };

            function eo(e) {
                let {
                    input: t
                } = e, r = "transcript" in t && Array.isArray(t.transcript) ? t.transcript : void 0, s = (0, a.useMemo)(() => n(381453).oE(null == r ? void 0 : r.map(e => "agent-tool-result" === e.type ? e.toolName : void 0)), [r]);
                return 0 === s.length ? null : (0, i.jsxs)("div", {
                    style: es.container,
                    children: ["Tools: ", s.join(", ")]
                })
            }
            let el = {
                container: {
                    padding: "8px 12px",
                    borderBottom: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    marginBottom: 8
                }
            };

            function ed(e) {
                let {
                    inferences: t,
                    requestInfo: r,
                    debugOverrides: s,
                    transcript: o
                } = e, l = (0, a.useMemo)(() => {
                    var e;
                    let n, a = 0,
                        i = e => {
                            if ("agent-inference" !== e.type || !H(e)) return;
                            let t = e.startedAt || 0;
                            t > a && (a = t, n = e)
                        };
                    for (let e of o) i(e);
                    for (let e of t) {
                        let t = e.value.input;
                        if ("transcript" in t && Array.isArray(t.transcript))
                            for (let e of t.transcript) i(e)
                    }
                    if (null != r && null != (e = r.response) && e.transcript)
                        for (let e of r.response.transcript) i(e);
                    return n
                }, [t, r, o]), d = e => {
                    if (!(!(0, n(722371).O9)(e) || Number.isNaN(e))) return Math.min(1, Math.max(0, e))
                }, c = (0, n(682985).K8)(() => {
                    var e;
                    let t = d(null == (e = s.contextManagementConfiguration) ? void 0 : e.compactThreshold);
                    return void 0 !== t ? t : d(n(218744).default.getConfigKey("ai_agent_progressive_transcript_compression_threshold", "threshold")) ? ? 1
                }, [s.contextManagementConfiguration]), u = (0, n(682985).K8)(() => d(n(218744).default.getConfigKey("ai_agent_progressive_transcript_compression_threshold", "createSummaryThreshold")), []), p = (0, n(682985).K8)(() => d(n(218744).default.getConfigKey("ai_agent_progressive_transcript_compression_threshold", "updateSummaryInterval")), []), m = (0, a.useMemo)(() => {
                    var e;
                    return d(null == (e = s.contextManagementConfiguration) ? void 0 : e.createSummaryThreshold)
                }, [s.contextManagementConfiguration]), g = (0, a.useMemo)(() => {
                    var e;
                    return d(null == (e = s.contextManagementConfiguration) ? void 0 : e.updateSummaryInterval)
                }, [s.contextManagementConfiguration]), f = (0, a.useMemo)(() => ({
                    createSummaryThreshold: m ? ? u ? ? Math.max(0, c - .1),
                    updateSummaryInterval: g ? ? p ? ? .1,
                    compactThreshold: c
                }), [c, u, p, m, g]), x = (0, a.useMemo)(() => {
                    for (let e = o.length - 1; e >= 0; e -= 1) {
                        let t = o[e];
                        if ("agent-transcript-summary" === t.type && t.summary.trim().length > 0) return t
                    }
                }, [o]), y = (0, a.useMemo)(() => {
                    if (!x) return;
                    let e = o.find(e => e.id === x.lastStepId),
                        t = e ? function(e) {
                            if ("user" === e.type) {
                                let t = (0, n(247438).q4_)(e.value);
                                return {
                                    type: e.type,
                                    preview: t ? U(t, 80) : void 0
                                }
                            }
                            if ("user-injected" === e.type) {
                                let t = (0, n(247438).q4_)(e.displayMessage ? ? e.actualMessage);
                                return {
                                    type: e.type,
                                    preview: t ? U(t, 80) : void 0
                                }
                            }
                            return "agent-tool-result" === e.type ? {
                                type: e.type,
                                preview: e.toolName ? ? void 0
                            } : (e.type, {
                                type: e.type
                            })
                        }(e) : void 0;
                    return {
                        summary: x.summary,
                        lastStepId: x.lastStepId,
                        lastStepType: null == t ? void 0 : t.type,
                        lastStepPreview: null == t ? void 0 : t.preview,
                        transcriptContextUsage: x.transcriptContextUsage,
                        transcriptTokenCount: x.transcriptTokenCount
                    }
                }, [x, o]), v = (0, a.useMemo)(() => {
                    let e = o.findLastIndex(e => "agent-inference" === e.type);
                    if (-1 === e) return 0;
                    let t = 0;
                    for (let a = e + 1; a < o.length; a += 1) {
                        var n;
                        let e = o[a];
                        if ("agent-tool-result" !== e.type) continue;
                        let r = null == (n = e.renderedResult) ? void 0 : n.content,
                            i = "string" == typeof r && r.length > 0 ? r : e.result ? JSON.stringify(e.result) : e.error;
                        "string" == typeof i && i.length > 0 && (t += Math.max(1, Math.ceil(i.length / 4)))
                    }
                    return t
                }, [o]), b = (0, a.useMemo)(() => {
                    if (!l || !H(l)) return;
                    let e = (l.inputTokens ? ? 0) + (l.cachedTokensCreated ? ? 0) + (l.outputTokens ? ? 0) + v;
                    return {
                        tokenCount: e,
                        tokenUsage: e / (l.maxInputTokens ? ? l.maxContextTokens ? ? 272e3)
                    }
                }, [v, l]), j = (0, a.useCallback)(e => {
                    if ("u" < typeof document) return;
                    let t = document.querySelector(`[data-inference-step-id="${e}"]`);
                    t instanceof HTMLElement && t.scrollIntoView({
                        block: "center",
                        behavior: "smooth"
                    })
                }, []);
                return l && H(l) ? (0, i.jsxs)("div", {
                    style: el.container,
                    children: [(0, i.jsx)(R, {
                        step: l,
                        compactionConfig: f,
                        tokenUsageOverride: b,
                        approxToolResultTokens: v,
                        summaryInfo: y
                    }), (0, i.jsx)(_, {
                        transcript: o,
                        onStepClick: j
                    }), (0, i.jsx)(h, {
                        transcript: o
                    })]
                }) : null
            }
            let ec = {
                fontSize: 14
            };

            function eu(e) {
                let t = (0, n(109939).tz)(),
                    {
                        clientStore: r,
                        threadStore: s
                    } = e,
                    o = null == s ? void 0 : s.id,
                    l = (0, n(533992).v3)(),
                    d = (0, n(682985).K8)(() => s.getSpaceId(), [s]),
                    c = (0, n(682985).K8)(() => {
                        let e = s.getMessageStores().map(e => {
                            let t = e.getStep();
                            if (t && "config" === t.type) return t.value.type
                        });
                        return n(381453).oE(e)[0]
                    }, [s]),
                    [{
                        value: u
                    }, p] = (0, n(97668).Yb)(async () => {}, [l, d, s, c]),
                    m = (0, a.useMemo)(() => {
                        if (!u || "failed" === u.type) return;
                        let e = u.data.logs,
                            t = [],
                            n = new Map;
                        for (let a of e)
                            if (a.span_id === a.root_span_id) t.push(a);
                            else if (a.root_span_id) {
                            let e = n.get(a.root_span_id) || [];
                            e.push(a), n.set(a.root_span_id, e)
                        }
                        for (let e of n.values()) e.sort((e, t) => {
                            var n, a;
                            return ((null == (n = e.metadata) ? void 0 : n.index) || 0) - ((null == (a = t.metadata) ? void 0 : a.index) || 0)
                        });
                        return t.sort((e, t) => {
                            let n = new Date(e.created || "");
                            return new Date(t.created || "").getTime() - n.getTime()
                        }), {
                            rootSpans: t,
                            subSpanGroups: n
                        }
                    }, [u]),
                    g = (0, a.useCallback)(e => {
                        if (!e.span_id || !o) return;
                        let t = (null == m ? void 0 : m.subSpanGroups.get(e.span_id)) || [],
                            a = r.getOrCreateClientAIChatThreadStore(o);
                        a.setState({ ...a.state,
                            requestInfo: {
                                request: e.input,
                                response: e.output,
                                memories: []
                            },
                            inferences: n(381453).oE(t.map((e, t) => {
                                var a, r;
                                let i;
                                return i = "number" == typeof(null == (a = e.metadata) ? void 0 : a.index) ? e.metadata.index : "number" == typeof(null == (r = e.metadata) || null == (r = r.extraLogMetadata) ? void 0 : r.index) ? e.metadata.extraLogMetadata.index : t, {
                                    type: "inference",
                                    key: (0, n(548161).$A)(e.input),
                                    index: i,
                                    value: {
                                        id: e.id,
                                        input: e.input,
                                        expected: e.output,
                                        metadata: e.metadata
                                    }
                                }
                            }))
                        })
                    }, [r, m, o]),
                    h = (0, a.useCallback)(() => {
                        var e;
                        if (!o) return;
                        let t = null == (e = r.getOrCreateClientAIChatThreadStore(o).state.requestInfo) || null == (e = e.request) ? void 0 : e.traceId;
                        if (!c || !t) return;
                        let a = (0, n(998884).WY)({
                            environmentName: "production",
                            suffix: c
                        });
                        window.open(`https://www.braintrust.dev/app/Notion/p/${a}/logs?r=${t}`, "_blank")
                    }, [r, c, o]),
                    f = (0, a.useCallback)(() => {
                        if (!o) return;
                        let e = (0, n(998884).WY)({
                                environmentName: "production",
                                suffix: c
                            }),
                            t = new URLSearchParams({
                                search: JSON.stringify({
                                    filter: [{
                                        label: `input.threadId = '${o}' OR metadata.aiSessionId = '${o}'`,
                                        text: `input.threadId = '${o}' OR metadata.aiSessionId = '${o}'`,
                                        originType: "btql"
                                    }]
                                }),
                                tvt: "timeline",
                                range: '"1h"'
                            }).toString();
                        window.open(`https://www.braintrust.dev/app/Notion/p/${e}/logs?${t}`, "_blank")
                    }, [c, o]),
                    x = (0, a.useCallback)(() => {
                        var e;
                        if (!o) return;
                        let t = null == (e = r.getOrCreateClientAIChatThreadStore(o).state.requestInfo) || null == (e = e.request) ? void 0 : e.traceId;
                        if (!t) return;
                        let n = `https://ui.honeycomb.io/notion/environments/production?query=${encodeURIComponent(JSON.stringify({time_range:1800,granularity:0,breakdowns:[],calculations:[{op:"COUNT"}],filters:[{column:"aiTraceId",op:"=",value:t}],filter_combination:"AND",orders:[]}))}`;
                        window.open(n, "_blank")
                    }, [r, o]);
                return (0, i.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    content: e => (0, i.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        children: (0, i.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "refresh",
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                items: [{
                                    key: "refresh",
                                    render: e => (0, i.jsx)(n(95582).A, { ...e,
                                        title: "Refresh"
                                    }),
                                    action: () => void p()
                                }]
                            }, {
                                key: "dates",
                                render: e => (0, i.jsx)(n(844565).A, { ...e,
                                    shouldShowBottomDivider: !0
                                }),
                                items: ((null == m ? void 0 : m.rootSpans) || []).map(t => ({
                                    key: t.id,
                                    render: e => (0, i.jsx)(n(95582).A, { ...e,
                                        title: t.created || "No date"
                                    }),
                                    action: () => {
                                        e.close(), g(t)
                                    }
                                })) || []
                            }]
                        })
                    }),
                    children: e => (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(n(988022).p, { ...e,
                            style: ec,
                            children: (null == u ? void 0 : u.type) === "failed" ? "Failed to load logs" : m ? `View logs (${m.rootSpans.length})` : "Loading logs"
                        }), (0, i.jsx)(n(51831).m, {
                            content: () => (0, i.jsx)("span", {
                                children: "Open Trace in Braintrust"
                            }),
                            children: e => (0, i.jsx)(n(374533).A, { ...e,
                                icon: n(14561).b,
                                ariaLabel: t.formatMessage({
                                    id: "aiInferenceTranscript.openTraceInBraintrust",
                                    defaultMessage: "Open Trace in Braintrust"
                                }),
                                onClick: h
                            })
                        }), (0, i.jsx)(n(51831).m, {
                            content: () => (0, i.jsx)("span", {
                                children: "Open chat in Braintrust"
                            }),
                            children: e => (0, i.jsx)(n(374533).A, { ...e,
                                icon: n(477603).chatSmallIcon,
                                ariaLabel: t.formatMessage({
                                    id: "aiInferenceTranscript.openThreadInBraintrust",
                                    defaultMessage: "Open chat in Braintrust"
                                }),
                                onClick: f
                            })
                        }), (0, i.jsx)(n(51831).m, {
                            content: () => (0, i.jsx)("span", {
                                children: "Open in Honeycomb"
                            }),
                            children: e => (0, i.jsx)(n(374533).A, { ...e,
                                icon: n(748869).linkSmallIcon,
                                ariaLabel: t.formatMessage({
                                    id: "aiInferenceTranscript.openInHoneycomb",
                                    defaultMessage: "Open chat in Honeycomb"
                                }),
                                onClick: x
                            })
                        })]
                    })
                })
            }
            let ep = {
                wrap: {
                    margin: "12px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                title: {
                    fontSize: 16,
                    color: n(632079).Tj.text.secondary,
                    fontWeight: n(699422).Wy.medium
                },
                row: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: n(632079).Tj.text.secondary,
                    fontSize: 12
                },
                input: {
                    width: 200,
                    backgroundColor: n(632079).Tj.background.primary,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    fontSize: 12,
                    color: n(632079).Tj.text.secondary
                },
                style0: {
                    width: 200
                },
                style2: {
                    color: n(632079).Tj.text.secondary,
                    fontSize: 12
                },
                style3: {
                    width: 260,
                    fontFamily: "monospace",
                    fontSize: 11
                },
                style5: {
                    width: 65
                }
            };

            function em(e) {
                let {
                    clientStore: t,
                    configType: r,
                    debugOverrides: s
                } = e, o = "researcher" === r ? "researchModeDebugOptions" : void 0, l = (0, n(682985).K8)(() => "researcher" === r ? n(180139).vW : {}, [r]), [d, c] = (0, a.useState)(() => JSON.stringify(s.contextManagementConfiguration ? ? {}, null, 2)), u = (0, a.useCallback)(e => {
                    o && t.setState({ ...t.state,
                        debugOverrides: { ...t.state.debugOverrides,
                            [o]: { ...t.state.debugOverrides[o] ? ? {},
                                ...e
                            }
                        }
                    })
                }, [t, o]);
                if (!o) return null;
                let p = s[o] ? ? {},
                    m = Object.entries(l).filter(([e, t]) => "type" !== e && ("boolean" == typeof t || "string" == typeof t || "number" == typeof t)).map(([e, t]) => [e, p[e] ? ? t]);
                if (0 === m.length) return null;
                let g = m.map(([e, t]) => "boolean" == typeof t ? (0, i.jsxs)("div", {
                    style: ep.row,
                    children: [(0, i.jsx)("span", {
                        children: e
                    }), (0, i.jsx)(n(349050).S, {
                        checked: t,
                        onClick: () => u({
                            [e]: !t
                        }),
                        size: 12
                    })]
                }, e) : "string" == typeof t ? (0, i.jsxs)("div", {
                    style: ep.row,
                    children: [(0, i.jsx)("span", {
                        children: e
                    }), (0, i.jsx)(n(36481).p, {
                        value: t.toString(),
                        onChange: t => {
                            u({
                                [e]: t.target.value
                            })
                        },
                        style: ep.style0
                    })]
                }, e) : "number" == typeof t ? (0, i.jsxs)("div", {
                    style: ep.row,
                    children: [(0, i.jsx)("span", {
                        children: e
                    }), (0, i.jsx)(n(36481).p, {
                        type: "number",
                        value: t.toString(),
                        onChange: t => {
                            u({
                                [e]: Number(t.target.value)
                            })
                        },
                        style: { ...ep.input,
                            ...ep.style5
                        }
                    })]
                }, e) : null);
                return g.push((0, i.jsxs)(n(4458).VP, {
                    gap: 4,
                    children: [(0, i.jsx)("span", {
                        style: ep.style2,
                        children: "contextManagementConfiguration (JSON)"
                    }), (0, i.jsx)("textarea", {
                        rows: 4,
                        value: d,
                        onChange: e => {
                            let n = e.target.value;
                            c(n);
                            try {
                                let e = JSON.parse(n),
                                    a = v(e);
                                if (!a) return;
                                t.setState({ ...t.state,
                                    debugOverrides: { ...t.state.debugOverrides,
                                        contextManagementConfiguration: a
                                    }
                                })
                            } catch {}
                        },
                        style: ep.style3
                    })]
                }, "contextManagementConfiguration")), g.length > 0 ? (0, i.jsxs)("div", {
                    style: ep.wrap,
                    children: [(0, i.jsx)("div", {
                        style: ep.title,
                        children: "Debug overrides"
                    }), (0, i.jsx)(n(4458).fI, {
                        flexWrap: "wrap",
                        gap: 16,
                        children: g
                    })]
                }) : null
            }
            let eg = {
                label: {
                    fontSize: 12,
                    fontWeight: n(699422).Wy.medium,
                    color: n(632079).Tj.text.secondary
                },
                input: {
                    fontSize: 12,
                    padding: 6
                }
            };

            function eh(e) {
                let {
                    onLoadExample: t,
                    datasetInfo: r
                } = e, s = (0, n(109939).tz)(), o = (0, n(533992).v3)(), [l, d] = (0, a.useState)(""), [c, u] = (0, a.useState)(""), [p, m] = (0, a.useState)(""), [g, h] = (0, a.useState)(!1), [f, x] = (0, a.useState)(!1);
                a.useEffect(() => {
                    r && !f && (r.project && d(r.project), r.dataset && u(r.dataset), r.exampleId && m(r.exampleId), x(!0))
                }, [r, f]);
                let y = (0, a.useCallback)(async e => {
                    if (l.trim() && c.trim() && p.trim()) {
                        h(!0);
                        try {
                            let a = await o.api.callStreamApi({
                                eventName: "getBraintrustDataset",
                                environment: o,
                                data: {
                                    project: l.trim(),
                                    dataset: c.trim()
                                }
                            });
                            if ("success" !== a.type) throw Error("Failed to get dataset stream");
                            let r = null;
                            if (n(331653).hS.is(a.data))
                                for await (let e of a.data) {
                                    let {
                                        inference: t
                                    } = e;
                                    if (t.id === p.trim()) {
                                        r = t;
                                        break
                                    }
                                }
                            if (!r) return void window.alert(`Example ${p} not found in ${l}/${c}`);
                            t(r), e()
                        } catch (e) {
                            window.alert("Failed to load example from Braintrust")
                        } finally {
                            h(!1)
                        }
                    }
                }, [l, c, p, t, o]);
                return (0, i.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "end",
                    content: e => (0, i.jsxs)(n(4458).VP, {
                        gap: 8,
                        padding: 12,
                        minWidth: 300,
                        children: [(0, i.jsxs)(n(4458).VP, {
                            gap: 4,
                            children: [(0, i.jsx)("div", {
                                style: eg.label,
                                children: "Project"
                            }), (0, i.jsx)(C, {
                                value: l,
                                onChange: e => d(e.target.value),
                                placeholder: "Enter Braintrust project name",
                                style: eg.input
                            })]
                        }), (0, i.jsxs)(n(4458).VP, {
                            gap: 4,
                            children: [(0, i.jsx)("div", {
                                style: eg.label,
                                children: "Dataset"
                            }), (0, i.jsx)(C, {
                                value: c,
                                onChange: e => u(e.target.value),
                                placeholder: "Enter Braintrust dataset name",
                                style: eg.input
                            })]
                        }), (0, i.jsxs)(n(4458).VP, {
                            gap: 4,
                            children: [(0, i.jsx)("div", {
                                style: eg.label,
                                children: "Example ID"
                            }), (0, i.jsx)(C, {
                                value: p,
                                onChange: e => m(e.target.value),
                                placeholder: "Enter Braintrust example ID",
                                style: eg.input
                            })]
                        }), (0, i.jsxs)(n(4458).fI, {
                            gap: 8,
                            justifyContent: "flex-end",
                            marginTop: 8,
                            children: [(0, i.jsx)(n(988022).p, {
                                onClick: () => e.close(),
                                children: "Cancel"
                            }), (0, i.jsx)(n(988022).p, {
                                onClick: () => {
                                    y(e.close)
                                },
                                disabled: g || !l.trim() || !c.trim() || !p.trim(),
                                children: g ? (0, i.jsx)(n(517334).k, {}) : "Load from Braintrust"
                            })]
                        })]
                    }),
                    children: e => (0, i.jsx)(n(51831).m, {
                        content: () => "Load memories and tool expectations from Braintrust example",
                        placement: "top",
                        children: t => (0, i.jsx)("div", { ...t,
                            children: (0, i.jsx)(n(374533).A, { ...e,
                                icon: n(725111).arrowInCircleDownIcon,
                                ariaLabel: s.formatMessage({
                                    defaultMessage: "Load from Braintrust",
                                    id: "aiInferenceTranscript.debug.loadFromBraintrust"
                                })
                            })
                        })
                    })
                })
            }
            let ef = {
                wrap: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    padding: "8px 12px",
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 8,
                    backgroundColor: n(632079).Tj.background.secondary
                },
                header: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 14,
                    fontWeight: n(699422).Wy.medium
                },
                style0: {
                    flexGrow: 1
                },
                style1: {
                    fontSize: 12,
                    opacity: .7
                }
            };

            function ex(e) {
                let {
                    requestInfo: t
                } = e, r = (0, n(533992).v3)(), s = (0, n(109939).tz)(), [o, l] = (0, a.useState)(!1), d = (0, a.useMemo)(() => {
                    var e;
                    return [...t.request.transcript, ...(null == (e = t.response) ? void 0 : e.transcript) ? ? []].filter(e => "agent-tool-result" === e.type && void 0 !== e.threadOperations)
                }, [t]), c = d.length > 0, u = (0, a.useCallback)(() => {
                    if (!c) return;
                    let e = (0, n(354128).getAgentPreviewWrapper)(r);
                    e.enter({
                        environment: r,
                        steps: d,
                        transactionActions: n(377796),
                        applyOperation: (t, a) => {
                            (0, n(757688).Hp)({
                                environment: r,
                                operation: a,
                                recordCache: e.getInMemoryRecordCache(),
                                transaction: t
                            })
                        }
                    }), l(!0)
                }, [c, r, d]), p = (0, a.useCallback)(() => {
                    o && ((0, n(354128).getAgentPreviewWrapper)(r).exit(r), l(!1))
                }, [o, r]);
                if (!c) return null;
                let m = d.reduce((e, t) => {
                    var n;
                    return e + ((null == (n = t.threadOperations) ? void 0 : n.length) ? ? 0)
                }, 0);
                return (0, i.jsxs)("div", {
                    style: ef.wrap,
                    children: [(0, i.jsxs)("div", {
                        style: ef.header,
                        children: [(0, i.jsx)("span", {
                            style: ef.style0,
                            children: `Preview transactions (${m} operations from ${d.length} steps)`
                        }), (0, i.jsx)(n(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            children: o ? (0, i.jsx)(n(51831).m, {
                                content: () => "Cancel preview and return to normal view",
                                placement: "top",
                                children: e => (0, i.jsx)("div", { ...e,
                                    children: (0, i.jsxs)(n(988022).p, {
                                        onClick: p,
                                        children: [(0, i.jsx)(n(374533).A, {
                                            icon: n(25094).xMarkSmallIcon,
                                            ariaLabel: s.formatMessage({
                                                defaultMessage: "Cancel",
                                                id: "aiInferenceTranscript.debug.cancel"
                                            })
                                        }), "Cancel (Undo Preview)"]
                                    })
                                })
                            }) : (0, i.jsx)(n(51831).m, {
                                content: () => "Preview transcript transactions in the main view",
                                placement: "top",
                                children: e => (0, i.jsx)("div", { ...e,
                                    children: (0, i.jsxs)(n(988022).p, {
                                        onClick: u,
                                        children: [(0, i.jsx)(n(374533).A, {
                                            icon: n(399225).eyeFillSmallIcon,
                                            ariaLabel: s.formatMessage({
                                                defaultMessage: "Preview",
                                                id: "aiInferenceTranscript.debug.preview"
                                            })
                                        }), "Preview"]
                                    })
                                })
                            })
                        })]
                    }), o ? (0, i.jsx)("div", {
                        style: ef.style1,
                        children: "Preview is active. The main view now shows how the workspace would look after applying these transactions."
                    }) : void 0]
                })
            }
        },
        417951: (e, t, n) => {
            n.d(t, {
                $: () => i
            }), n(581454), n(296540);
            var a = n(474848);
            let r = {
                badge: {
                    fontSize: 12,
                    fontWeight: n(699422).Wy.medium,
                    padding: "1px 6px",
                    backgroundColor: n(632079).Tj.cardHoveredBackground,
                    color: n(632079).Tj.text.tertiary,
                    borderRadius: 4,
                    ...n(699422).RC
                }
            };

            function i(e) {
                let t = e.model,
                    i = (0, n(533992).v3)(),
                    o = (0, n(682985).K8)(() => n(585409).A.getData(i, {}) || [], [i]),
                    l = e.model ? s(e.model) || e.model : "Default model";
                return (0, a.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    content: r => (0, a.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        children: (0, a.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "models",
                                render: e => (0, a.jsx)(n(844565).A, { ...e,
                                    title: "Models",
                                    shouldShowBottomDivider: !0
                                }),
                                items: o.map(i => ({
                                    key: i,
                                    action: () => {
                                        e.setModel(i), r.close()
                                    },
                                    render: e => (0, a.jsx)(n(95582).A, { ...e,
                                        title: s(i) || i,
                                        isChecked: i === t
                                    })
                                }))
                            }]
                        })
                    }),
                    children: t => (0, a.jsx)(n(51831).m, {
                        content: () => (0, a.jsx)("div", {
                            children: "Select a model"
                        }),
                        placement: "bottom",
                        alignment: "center",
                        children: i => "button" === e.format ? (0, a.jsx)(n(988022).p, { ...(0, n(63390).A)(t, i),
                            children: l
                        }) : (0, a.jsx)(n(64960).Ay, { ...(0, n(63390).A)(t, i),
                            ignoreLocalHoverState: !0,
                            children: (0, a.jsx)("div", {
                                style: r.badge,
                                children: l
                            })
                        })
                    })
                })
            }

            function s(e) {
                if ("default" === e) return "Default model";
                try {
                    let t = (0, n(970389).PK)(e);
                    return t.displayNameWithProvider ? ? t.displayName
                } catch {
                    return
                }
            }
        },
        432376: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = () => n(546605);
            class r extends a().Store {
                getInitialState() {
                    return {
                        open: !1,
                        openAnimationCompleted: !0,
                        closeAnimationCompleted: !0
                    }
                }
            }
            let i = r
        },
        445283: (e, t, n) => {
            n.d(t, {
                N: () => a
            });

            function a(e) {
                if ("avatar" === e) return n(616922).eQ;
                if ("xsmall" === e) return 18;
                if ("xsmall_plus" === e) return 24;
                if ("small" === e) return 28;
                if ("small_plus" === e) return 32;
                else if ("medium" === e) return 36;
                else if ("medium_sidebar_button" === e) return 40;
                else if ("medium_plus" === e) return 44;
                else if ("medium_large" === e) return 48;
                else if ("large" === e) return 50;
                else if ("large_plus" === e) return 64;
                else if ("xlarge" === e) return 94;
                else if ("plans" === e) return 20;
                else if ("deep_dive" === e) return 16;
                else if ("upsell_banner" === e) return 74;
                else if ("personalization_modal" === e) return 96;
                else return (0, n(722371).HB)(e)
            }
        },
        448988: (e, t, n) => {
            n.d(t, {
                Wx: () => i,
                fM: () => a,
                sM: () => r
            });
            let a = new(n(815048)).O2("framer-motion", async () => await Promise.all([n.e(49806), n.e(79974), n.e(45414), n.e(37043)]).then(n.bind(n, 301716)));

            function r(e) {
                return e.useAnimation()
            }

            function i(e, ...t) {
                return e.useInView(...t)
            }
        },
        478597: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = () => n(546605);
            class r extends a().Store {
                environment;
                spaceId;
                constructor(e, t) {
                    super(), this.environment = e, this.spaceId = t, this.reset()
                }
                getInitialState() {
                    if (!this.environment) return;
                    let e = new(n(870941)).A({
                        name: "DiscussionInputStore",
                        isTemporaryData: !0
                    });
                    return {
                        textStore: new(n(517013)).pm({
                            environment: this.environment,
                            pointer: (0, n(295447).zP)({
                                environment: this.environment,
                                table: n(832375).SNf,
                                spaceId: this.spaceId
                            }),
                            path: ["text"],
                            recordStoreOptions: {
                                inMemoryRecordCache: e
                            }
                        }),
                        localRecordCache: e,
                        files: [],
                        showAttachFileIntro: !1,
                        renderFileAttachIntro: !1
                    }
                }
                isEmpty() {
                    let e = this.state.textStore.getValue();
                    return !e || 0 === e.length
                }
                hasNewLineCharacter() {
                    let e = this.state.textStore.getValue();
                    return n(247438).q4_(e).includes("\n")
                }
            }
            let i = r
        },
        511101: (e, t, n) => {
            n.d(t, {
                m: () => a
            });
            let a = "notion-modal-underlay"
        },
        540336: (e, t, n) => {
            n.d(t, {
                Jy: () => f,
                LZ: () => x,
                vU: () => h
            }), n(581454);
            var a = n(296540),
                r = n(474848);
            let i = {
                    kORKVm: "xryxfnj",
                    kXHlph: "xw2csxc",
                    k1xSpc: "x78zum5",
                    kzqmXN: "xh8yej3",
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                s = {
                    kGVxlE: "xx4f2qb",
                    $$css: !0
                },
                o = {
                    kGuDYH: "xif65rj",
                    kZCmMZ: "xmzvs34",
                    kwRFfy: "xf159sx",
                    kY2c9j: "x1vjfegm",
                    $$css: !0
                },
                l = {
                    kGuDYH: "x1j61zf2",
                    kLKAdn: "x1nn3v0j",
                    kY2c9j: "xhtitgo",
                    kZKoxP: "xn3w4p2",
                    kC7eKd: "x1mmz80m",
                    $$css: !0
                },
                d = {
                    kZCmMZ: "xf7dkkf",
                    kwRFfy: "xv54qhq",
                    $$css: !0
                },
                c = {
                    kLKAdn: "x1yrsyyn",
                    kGO01o: "x10b6aqq",
                    khDVqt: "xuxw1ft",
                    k7Eaqz: "xeuugli",
                    kmuXW: "x2lah0s",
                    kMwMTN: "x1b8rd1j",
                    $$css: !0
                },
                u = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                p = {
                    k4EQJz: "xkaiwgt",
                    kVAEAm: "x10l6tqk",
                    krVfgx: "x1ey2m1c",
                    kLqNvP: "xrotz4w",
                    kt4wiu: "x11dcrhx",
                    $$css: !0
                },
                m = {
                    k1xSpc: "x78zum5",
                    kzQI83: "x1iyjqo2",
                    $$css: !0
                },
                g = {
                    selectedTab: {
                        color: n(632079).Tj.text.primary
                    }
                };

            function h(e, t) {
                if (e) return `${e}-tab-${t}`
            }

            function f(e, t) {
                if (e) return `${e}-tabpanel-${t}`
            }
            let x = a.memo(function({
                tabs: e,
                selectedIndex: t,
                onChange: x,
                right: y,
                style: v,
                tabStyle: b,
                tabTitleStyle: j,
                selectedTabTitleStyle: k,
                tabBorderStyle: C,
                selectedTabStyle: T,
                readOnly: S,
                hideTabBorder: M,
                idPrefix: I
            }) {
                let w = (0, a.useContext)(n(649476).xu),
                    A = (0, n(616844).Y5)("left", 16),
                    O = (0, n(616844).Y5)("right", 16),
                    $ = w.menuType === n(649476).gu.Popup;
                return (0, r.jsxs)("div", { ...n(952687).A.props(i, !M && s, n(986939).A.isMobile ? [l, $ ? d : ((e, t) => [{
                        kZCmMZ: null != e ? "xnvo3vl" : e,
                        kwRFfy: null != t ? "x120eax6" : t,
                        $$css: !0
                    }, {
                        "--x-paddingInlineStart": "number" == typeof e ? e + "px" : null != e ? e : void 0,
                        "--x-paddingInlineEnd": "number" == typeof t ? t + "px" : null != t ? t : void 0
                    }])(A, O)] : o, v, {
                        $$css: !0,
                        className: "hide-scrollbar"
                    }),
                    children: [(0, r.jsx)("div", {
                        role: "tablist",
                        ...n(952687).A.props(m, "object" == typeof v && v && "flexDirection" in v && {
                            flexDirection: v.flexDirection
                        }),
                        children: e.map((e, i) => {
                            let s = i === t;
                            return (0, r.jsx)(a.Fragment, {
                                children: (0, r.jsxs)("div", { ...n(952687).A.props(c, b, s && u, s && g.selectedTab, s && T),
                                    children: [(0, r.jsx)(n(988022).p, {
                                        role: "tab",
                                        style: [j, s && k],
                                        onClick: () => x(i),
                                        disabled: S,
                                        "aria-selected": s,
                                        id: h(I, i),
                                        "aria-controls": f(I, i),
                                        colorPalette: s ? void 0 : "gray",
                                        children: e
                                    }), s ? (0, r.jsx)("div", { ...n(952687).A.props(p, C)
                                    }) : void 0]
                                }, `tabButton-${i}`)
                            }, i)
                        })
                    }), y ? (0, r.jsx)("div", {
                        className: "x1iyjqo2 x78zum5 x6s0dn4 x13a6bvl x1b8rd1j",
                        children: y
                    }) : void 0]
                })
            })
        },
        543588: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(296540);
            var a = n(474848);
            let r = function(e) {
                let t = {
                        marginBottom: 4
                    },
                    {
                        title: r,
                        marginAfter: i,
                        desktopStyle: s,
                        desktopTitleStyle: o,
                        ...l
                    } = e,
                    d = (i || s) && { ...i && {
                            marginBottom: 16
                        },
                        ...s
                    },
                    c = o ? { ...t,
                        ...o
                    } : t;
                return (0, a.jsx)(n(844565).A, {
                    disableDesktopPadding: !0,
                    enableActionSheetTitle: !0,
                    desktopStyle: d,
                    desktopTitleStyle: c,
                    shouldShowBottomDivider: !1,
                    title: r,
                    ...l
                })
            }
        },
        556809: (e, t, n) => {
            n.d(t, {
                a: () => s
            });
            var a = n(296540);

            function r(e) {
                n(561599).A.state.openModals.has(e) && (n(561599).A.state.openModals.delete(e), n(561599).A.emit())
            }
            var i = n(474848);

            function s(e) {
                let {
                    open: t,
                    onOpen: s,
                    transitionAppearance: o = "modal"
                } = e, l = (0, a.useRef)();
                void 0 === l.current && (l.current = n(92513).JW());
                let c = l.current,
                    u = (0, n(682985).uB)(e.store, n(432376).A),
                    p = (0, n(682985).K8)(() => u.state.open, [u]),
                    m = (0, a.useRef)(!1),
                    g = function({
                        disableAnimationFromProps: e,
                        isShowingTabBar: t
                    }) {
                        return !!t || e
                    }({
                        disableAnimationFromProps: "none" === o,
                        isShowingTabBar: (0, n(682985).O$)(n(584257).b)
                    }),
                    h = (0, a.useCallback)(() => {
                        if (!m.current && t) u.setState({
                            open: !0,
                            openAnimationCompleted: !1,
                            closeAnimationCompleted: !0
                        }), n(561599).A.state.openModals.has(c) || (n(561599).A.state.openModals.add(c), n(561599).A.emit()), s && s();
                        else m.current && !t && (u.setState({
                            open: !0,
                            openAnimationCompleted: !0,
                            closeAnimationCompleted: !1
                        }), r(c));
                        m.current = t
                    }, [c, u, s, t]);
                return (0, a.useEffect)(() => {
                    h()
                }, [h]), (0, n(637030).X)(() => {
                    r(c)
                }), (0, i.jsx)(n(114596).O, {
                    open: p,
                    zIndex: e.overlayZIndex,
                    origin: e.origin,
                    trapFocus: !0,
                    children: (0, i.jsx)(n(369064).N, {
                        debugName: "Modal",
                        capture: e.open,
                        onEsc: t => {
                            e.onDismiss && e.onDismiss(t)
                        },
                        children: (0, i.jsx)(n(654979).A, {
                            tag: d,
                            visible: e.open,
                            animate: {
                                opacity: 1
                            },
                            initial: {
                                opacity: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            forceCompositeLayer: !0,
                            config: {
                                duration: g ? 0 : void 0
                            },
                            onAnimationEnd: () => {
                                var n, a, r;
                                return n = t, a = u, r = e.onClosed, void(n ? a.setState({
                                    open: !0,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }) : (a.setState({
                                    open: !1,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }), null == r || r()))
                            },
                            open: e.open,
                            keepFocus: e.keepFocus,
                            disableAnimation: g,
                            showCloseIcon: e.showCloseIcon,
                            onDismiss: e.onDismiss,
                            isWaxPaper: e.isWaxPaper,
                            ariaLabel: e.ariaLabel,
                            ariaLabelledBy: e.ariaLabelledBy,
                            ariaDescribedBy: e.ariaDescribedBy,
                            innerStyle: e.innerStyle,
                            children: e.children,
                            preventHideChildrenWhileOpening: e.preventHideChildrenWhileOpening,
                            style: e.style,
                            className: e.className,
                            backgroundStyle: e.backgroundStyle,
                            store: u,
                            isWash: e.isWash,
                            transitionAppearance: o
                        })
                    })
                })
            }

            function o({
                children: e,
                disableAnimation: t,
                preventHideChildrenWhileOpening: a,
                store: r
            }) {
                let s = (0, n(682985).uB)(r, n(432376).A),
                    l = (0, n(682985).K8)(() => s.state.openAnimationCompleted, [s]);
                return t || l || a ? (0, i.jsx)(i.Fragment, {
                    children: e
                }) : null
            }
            let l = a.forwardRef(function({
                    showCloseIcon: e,
                    onDismiss: t,
                    isWaxPaper: a,
                    isWash: r,
                    ariaLabel: s,
                    ariaLabelledBy: l,
                    ariaDescribedBy: d,
                    style: c,
                    children: u,
                    disableAnimation: p,
                    preventHideChildrenWhileOpening: m,
                    store: g
                }, h) {
                    let f = (0, n(682985).uB)(g, n(432376).A),
                        x = (0, n(960253).I)(() => ({
                            dialog: {
                                position: "relative",
                                zIndex: 1,
                                maxHeight: "100%",
                                boxShadow: n(632079).Tj.shadow.outline.scrim,
                                borderRadius: 12,
                                overflow: "hidden",
                                ...c,
                                background: a ? n(632079).Tj.popoverWaxPaperBackground : r ? n(632079).Tj.background.secondary : n(632079).Tj.background.elevated,
                                backdropFilter: a ? "blur(40px)" : "none",
                                WebkitBackdropFilter: a ? "blur(40px)" : "none"
                            }
                        }), [c, a, r]);
                    return (0, i.jsxs)("div", {
                        "aria-modal": !0,
                        role: "dialog",
                        className: "notion-dialog",
                        tabIndex: -1,
                        "aria-label": s,
                        "aria-labelledby": l,
                        "aria-describedby": d,
                        style: x.dialog,
                        ref: h,
                        children: [e ? (0, i.jsx)(n(226512).R, {
                            onClick: t
                        }) : void 0, (0, i.jsx)(o, {
                            children: u,
                            disableAnimation: p,
                            preventHideChildrenWhileOpening: m,
                            store: f
                        })]
                    })
                }),
                d = a.forwardRef(function({
                    open: e,
                    keepFocus: t = !1,
                    disableAnimation: a,
                    showCloseIcon: r,
                    onDismiss: s,
                    isWaxPaper: o,
                    isWash: d,
                    ariaLabel: c,
                    ariaLabelledBy: u,
                    ariaDescribedBy: p,
                    innerStyle: m,
                    children: g,
                    preventHideChildrenWhileOpening: h,
                    style: f,
                    className: x,
                    backgroundStyle: y,
                    transitionAppearance: v,
                    store: b
                }, j) {
                    let k = (0, n(336995).A)(t),
                        C = function(e) {
                            switch (e) {
                                case "none":
                                    return {
                                        animate: {},
                                        initial: {},
                                        exit: {}
                                    };
                                case "modal":
                                    return {
                                        animate: {
                                            scale: 1
                                        },
                                        initial: {
                                            scale: .97
                                        },
                                        exit: {
                                            scale: .97
                                        }
                                    };
                                case "full-screen":
                                    return {
                                        initial: {
                                            translateY: 5,
                                            opacity: 0
                                        },
                                        animate: {
                                            translateY: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        config: {
                                            duration: 650,
                                            timingFunction: "ease-in-out"
                                        }
                                    };
                                default:
                                    (0, n(722371).HB)(e)
                            }
                        }(v),
                        {
                            mobileTopPadding: T,
                            mobileBottomPadding: S
                        } = function() {
                            let {
                                WindowSizeStore: e
                            } = (0, n(533992).v3)();
                            return {
                                mobileTopPadding: (0, n(682985).K8)(() => e.getSafePaddingTopPx(0), [e]),
                                mobileBottomPadding: (0, n(571354).n)()
                            }
                        }();
                    return (0, i.jsxs)("div", {
                        style: {
                            paddingTop: T,
                            paddingBottom: S,
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: e ? "auto" : "none",
                            ...f
                        },
                        ...k,
                        className: x,
                        ref: j,
                        children: [(0, i.jsx)(n(781036).B, {
                            backgroundStyle: y,
                            onDismiss: s
                        }), (0, i.jsx)(n(654979).A, {
                            tag: l,
                            skip: a,
                            visible: e,
                            ...C,
                            forceCompositeLayer: !0,
                            showCloseIcon: r,
                            onDismiss: s,
                            isWaxPaper: o,
                            isWash: d,
                            ariaLabel: c,
                            ariaLabelledBy: u,
                            ariaDescribedBy: p,
                            style: m,
                            children: g,
                            disableAnimation: a,
                            preventHideChildrenWhileOpening: h,
                            store: b
                        })]
                    })
                })
        },
        561599: (e, t, n) => {
            n.d(t, {
                A: () => s
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            var a = () => n(546605);
            class r extends a().Store {
                getInitialState() {
                    return {
                        openModals: new Set
                    }
                }
            }
            let i = new r,
                s = i;
            (0, n(202146).exposeDebugValue)("GlobalModalStore", i)
        },
        719324: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowLineDownSmallIcon: () => r,
                iconDefinition: () => a
            }), n(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.97 2.12 10.06 11.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 2.125a.625.625 0 0 0-.625.625v7.128L5.378 7.881a.625.625 0 1 0-.884.884l3.064 3.064c.244.244.64.244.884 0l3.065-3.064a.625.625 0 0 0-.884-.884L8.625 9.878V2.75A.625.625 0 0 0 8 2.125m-4.403 10.5a.625.625 0 1 0 0 1.25h8.806a.625.625 0 1 0 0-1.25z"
                    })
                },
                r = (0, n(104509).wt)("arrowLineDownSmall", a, "small")
        },
        725111: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowInCircleDownIcon: () => i,
                iconDefinition: () => r
            }), n(296540);
            var a = n(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M6.958 10.446a.625.625 0 0 1 .884 0l1.533 1.533V6.513a.625.625 0 1 1 1.25 0v5.466l1.533-1.533a.625.625 0 1 1 .884.883l-2.6 2.6a.625.625 0 0 1-.884 0l-2.6-2.6a.625.625 0 0 1 0-.883"
                        }), (0, a.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                i = (0, n(104509).wt)("arrowInCircleDown", r, "default")
        },
        781036: (e, t, n) => {
            n.d(t, {
                B: () => i
            });
            var a = n(296540),
                r = n(474848);

            function i({
                backgroundStyle: e,
                onDismiss: t
            }) {
                (0, a.useLayoutEffect)(() => {
                    if ((null == e ? void 0 : e.background) !== "transparent") return requestAnimationFrame(() => {
                        (0, n(960831).j)(!0)
                    }), n(164177).j.setState({
                        open: !0
                    }), () => {
                        (0, n(960831).j)(!1), n(164177).j.setState({
                            open: !1
                        })
                    }
                }, [null == e ? void 0 : e.background]);
                let s = (0, n(960253).I)(() => ({
                    underlay: function(e) {
                        let {
                            backgroundStyle: t
                        } = e;
                        return {
                            position: "absolute",
                            top: 0,
                            insetInlineStart: 0,
                            bottom: 0,
                            insetInlineEnd: 0,
                            background: n(632079).Tj.modalUnderlayBackground,
                            ...t
                        }
                    }({
                        backgroundStyle: e
                    })
                }), [e]);
                return (0, r.jsx)("div", {
                    role: "presentation",
                    style: s.underlay,
                    onClick: e => {
                        t && t(e)
                    },
                    className: n(511101).m
                })
            }
        },
        799843: (e, t, n) => {
            n.d(t, {
                DG: () => d,
                OH: () => o,
                nl: () => s,
                x$: () => l
            });
            let a = (0, n(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.year",
                        defaultMessage: "{numYears, plural, one {{numYears} year ago} other {{numYears} years ago}}"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.day",
                        defaultMessage: "{numDays, plural, one {{numDays} day ago} other {{numDays} days ago}}"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.week",
                        defaultMessage: "{numWeeks, plural, one {{numWeeks} week ago} other {{numWeeks} weeks ago}}"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.hour",
                        defaultMessage: "{numHours, plural, one {{numHours} hour ago} other {{numHours} hours ago}}"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.minute",
                        defaultMessage: "{numMinutes, plural, one {{numMinutes} minute ago} other {{numMinutes} minutes ago}}"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.second",
                        defaultMessage: "Just now"
                    }
                }),
                r = (0, n(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.ultraCompactYear",
                        defaultMessage: "{numYears}y"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.ultraCompactDay",
                        defaultMessage: "{numDays}d"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.ultraCompactWeek",
                        defaultMessage: "{numWeeks}w"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.ultraCompactHour",
                        defaultMessage: "{numHours}h"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.ultraCompactMinute",
                        defaultMessage: "{numMinutes}m"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.ultraCompactSeconds",
                        defaultMessage: "Just now"
                    }
                }),
                i = (0, n(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.compactYear",
                        defaultMessage: "{numYears}y ago"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.compactDay",
                        defaultMessage: "{numDays}d ago"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.compactWeek",
                        defaultMessage: "{numWeeks}w ago"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.compactHour",
                        defaultMessage: "{numHours}h ago"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.compactMinute",
                        defaultMessage: "{numMinutes}m ago"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.compactSecond",
                        defaultMessage: "Just now"
                    }
                });

            function s(e, {
                useCompactFormat: t,
                useUltraCompactFormat: o,
                useLowercase: l,
                roundDownYears: d,
                useWeeks: c,
                showDaysToOneWeek: u,
                nowOverrideMs: p = Date.now()
            } = {}) {
                let m = o ? r : t ? i : a,
                    g = new Date(e),
                    h = n(962299).A.getIntl().locale,
                    f = new Date(p),
                    x = Number(f) - e;
                if (x >= n(627179).Gq && d) {
                    let e = Math.floor(x / n(627179).Gq);
                    return n(962299).A.formatMessage(m.year, {
                        numYears: e
                    })
                }
                if (g.getFullYear() !== f.getFullYear()) return g.toLocaleDateString(h, o ? {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                let y = Math.floor(x / n(627179).nD);
                if (y < 28 && y > 7 && c || u && 7 === y) {
                    let e = Math.floor(y / 7);
                    return n(962299).A.formatMessage(m.week, {
                        numWeeks: e
                    })
                }
                if (u && y > 6 || !u && y >= 3) return g.toLocaleDateString(h, {
                    month: "short",
                    day: "numeric"
                });
                if (y >= 1) return n(962299).A.formatMessage(m.day, {
                    numDays: y
                });
                let v = Math.floor(x / n(627179).pT);
                if (v >= 1) return n(962299).A.formatMessage(m.hour, {
                    numHours: v
                });
                let b = Math.floor(x / n(627179).Xb);
                return b >= 1 ? n(962299).A.formatMessage(m.minute, {
                    numMinutes: b
                }) : l ? n(962299).A.formatMessage(m.second).toLocaleLowerCase() : n(962299).A.formatMessage(m.second)
            }

            function o(e, t) {
                let a = t - e,
                    r = Math.floor(a / n(627179).Gq),
                    i = Math.floor(a / n(627179).nD),
                    s = Math.floor(a / n(627179).pT),
                    o = Math.floor(a / n(627179).Xb),
                    l = Math.floor(a / n(627179).TD);
                return r >= 1 ? n(962299).A.formatMessage(n(362008).jX.year, {
                    numYears: r
                }) : i >= 1 ? n(962299).A.formatMessage(n(362008).jX.day, {
                    numDays: i
                }) : s >= 1 ? n(962299).A.formatMessage(n(362008).jX.hour, {
                    numHours: s
                }) : o >= 1 ? n(962299).A.formatMessage(n(362008).jX.minute, {
                    numMinutes: o
                }) : n(962299).A.formatMessage(n(362008).jX.second, {
                    numSeconds: l
                })
            }

            function l(e, t) {
                return new Date(e).toLocaleDateString(n(962299).A.getIntl().locale, {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: t ? void 0 : "2-digit"
                })
            }

            function d(e) {
                return new Date(e).toLocaleDateString(n(962299).A.getIntl().locale, {
                    month: "short",
                    year: "numeric",
                    day: "numeric"
                })
            }
        },
        876252: (e, t, n) => {
            n.d(t, {
                $: () => a
            });

            function a() {
                return (0, n(682985).O$)(n(728372).AppStoreCurrentUserStore)
            }
        },
        896714: (e, t, n) => {
            n.d(t, {
                P: () => r
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.72 1.77 14.55 16.45",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10.302 1.853a.63.63 0 0 0-.604 0l-6.65 3.669c-.2.11-.323.32-.323.547v7.862c0 .228.124.437.323.547l6.65 3.67a.63.63 0 0 0 .604 0l6.65-3.67c.2-.11.323-.32.323-.547V6.069a.63.63 0 0 0-.323-.547zM3.975 7.127l5.4 2.98v6.434l-5.4-2.98zm6.65 9.414v-6.434l5.4-2.98v6.435zM15.356 6.07 10 9.024 4.644 6.069 10 3.114z"
                    })
                },
                r = (0, n(104509).wt)("cube", a, "default")
        },
        940723: (e, t, n) => {
            n.d(t, {
                b: () => r
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.75 3.52 11.53 12.95",
                    svg: (0, n(474848).jsx)("path", {
                        d: "m7.006 16.267 8.523-4.971a1.5 1.5 0 0 0 0-2.592L7.006 3.733A1.5 1.5 0 0 0 4.75 5.028v9.944a1.5 1.5 0 0 0 2.256 1.295"
                    })
                },
                r = (0, n(104509).wt)("mediaPlayFill", a, "fill")
        },
        960831: (e, t, n) => {
            n.d(t, {
                j: () => a
            });

            function a(e) {
                var t;
                return null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (t = n(775657).electronApi.setOverlay) ? void 0 : t.call(n(775657).electronApi, e)
            }
        },
        970389: (e, t, n) => {
            function a(e) {
                let t = n(215389).U_.get("default" === e ? "openai-gpt-4o" : e);
                if (!t) throw Error(`Model not found in registry: ${e}`);
                return t
            }

            function r(e) {
                return a(e).pricing
            }
            n.d(t, {
                PK: () => a,
                az: () => r
            }), n(16280)
        }
    }
]);