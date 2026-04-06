"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [12001], {
        119300: (e, t, a) => {
            a.d(t, {
                b: () => i
            }), a(296540);
            var r = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.77 1.69 16.42 16.61",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M17.22 11.956a.626.626 0 0 1 .753.998l-6.377 4.815a2.65 2.65 0 0 1-3.012.125l-.18-.125-6.378-4.815-.093-.086a.626.626 0 0 1 .739-.977l.108.065 6.376 4.816.096.065a1.4 1.4 0 0 0 1.592-.065z"
                        }), (0, r.jsx)("path", {
                            d: "M8.403 2.232a2.65 2.65 0 0 1 3.193 0l5.553 4.192.106.085a2.2 2.2 0 0 1-.106 3.427l-5.553 4.192a2.65 2.65 0 0 1-3.193 0L2.85 9.936a2.2 2.2 0 0 1 0-3.512zm2.44.997a1.4 1.4 0 0 0-1.687 0L3.603 7.42a.95.95 0 0 0 0 1.517l5.553 4.192a1.4 1.4 0 0 0 1.688 0l5.552-4.192a.95.95 0 0 0 .088-1.44l-.088-.077z"
                        })]
                    })
                },
                i = (0, a(104509).wt)("layerMultiple", n, "default")
        },
        129303: (e, t, a) => {
            a.d(t, {
                m: () => i
            });
            var r = a(296540),
                n = a(474848);

            function i({
                badge_click_url: e
            }) {
                return (0, n.jsx)(l, {
                    href: e
                })
            }
            let o = {
                origin: {
                    cursor: "default"
                },
                avatarSquad: {
                    width: 80,
                    height: 52,
                    display: "flex",
                    alignItems: "center",
                    position: "relative"
                },
                avatarLeft: {
                    width: 61,
                    height: 40,
                    position: "absolute",
                    insetInlineStart: 0
                },
                bold: {
                    fontWeight: a(699422).Wy.semibold
                }
            };

            function l({
                href: e
            }) {
                let [t, i] = (0, r.useState)(!1), s = (0, a(960253).e)(), {
                    state: d,
                    pinPopup: c,
                    unpinPopup: u
                } = (0, a(473234).v)({
                    immediateState: t || void 0
                }), p = (0, r.useMemo)(() => ({
                    onMouseEnter: () => i(!0),
                    onMouseLeave: () => i(!1)
                }), []);
                return (0, n.jsx)(a(182718).zD, {
                    disableMouseCapture: !0,
                    preventCaptureEsc: !0,
                    preventScaleTransition: !0,
                    preventOpacityTransition: !0,
                    originGap: 6,
                    open: !!d,
                    popupType: a(182718).nl.Popup,
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    trapFocus: !1,
                    content: () => (0, n.jsxs)(a(4458).VP, {
                        width: 212,
                        alignItems: "flex-start",
                        gap: 8,
                        paddingTop: 8,
                        paddingInlineEnd: 12,
                        paddingBottom: 12,
                        paddingInlineStart: 12,
                        onMouseEnter: c,
                        onMouseLeave: u,
                        children: [(0, n.jsx)("div", {
                            style: o.avatarSquad,
                            children: (0, n.jsx)("img", {
                                src: "dark" === s ? a(896221).A.images.imageGeneration.faceImageDarkPng : a(896221).A.images.imageGeneration.faceImageLightPng,
                                style: o.avatarLeft,
                                alt: ""
                            })
                        }), (0, n.jsx)(a(111010).D, {
                            styleKey: "bodyRegular",
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "imageGenerationRolloutBadge.beta.popupText",
                                defaultMessage: "<b>Try image generation for free during Beta.</b> We’re still finalizing pricing before wider release.",
                                values: {
                                    b: e => (0, n.jsx)("span", {
                                        style: o.bold,
                                        children: e
                                    })
                                }
                            })
                        }), e ? (0, n.jsx)(a(548436).A, {
                            href: e,
                            external: !0,
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "imageGenerationRolloutBadge.learnMore",
                                defaultMessage: "Learn more"
                            })
                        }) : null]
                    }),
                    children: (0, n.jsx)("div", { ...p,
                        style: o.origin,
                        children: e ? (0, n.jsx)(a(331700).m, {
                            href: e,
                            type: "beta"
                        }) : (0, n.jsx)(a(18274).A, {})
                    })
                })
            }
        },
        233519: (e, t, a) => {
            a.d(t, {
                C: () => i,
                V: () => n
            });
            let r = new Map;

            function n(e) {
                r.set(e.blockId, e.template)
            }

            function i(e) {
                let t = r.get(e);
                if (t) return r.delete(e), t
            }
        },
        320819: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var r = a(296540),
                n = a(474848);
            let i = {
                    background: "none",
                    borderBottom: "none",
                    boxShadow: "none",
                    marginTop: 2,
                    marginBottom: 6,
                    paddingTop: 4,
                    paddingBottom: 4,
                    minHeight: "initial"
                },
                o = (0, r.forwardRef)(function(e, t) {
                    return (0, n.jsx)(a(636518).Ay, { ...e,
                        ref: t,
                        style: { ...i,
                            ...e.style
                        }
                    })
                })
        },
        326190: (e, t, a) => {
            a.d(t, {
                FK: () => n,
                Rt: () => i,
                Wz: () => c,
                a6: () => d,
                g7: () => o,
                ys: () => l
            }), a(410838);
            let r = (0, a(109939).YK)({
                providerError: {
                    id: "aiImage.error.providerError",
                    defaultMessage: "Unable to generate image right now. Please try again."
                },
                allProvidersFailed: {
                    id: "aiImage.error.allProvidersFailed",
                    defaultMessage: "Image generation is temporarily unavailable. Please try again later."
                },
                invalidModel: {
                    id: "aiImage.error.invalidModel",
                    defaultMessage: "The requested model is not available."
                },
                contentPolicyViolation: {
                    id: "aiImage.error.contentPolicyViolation",
                    defaultMessage: "This prompt violates our content policy. Please try a different description."
                },
                rateLimitExceeded: {
                    id: "aiImage.error.rateLimitExceeded",
                    defaultMessage: "You’ve reached the limit on image generations. Please try again later."
                },
                invalidRequest: {
                    id: "aiImage.error.invalidRequest",
                    defaultMessage: "Invalid request. Please check your input and try again."
                },
                defaultError: {
                    id: "aiImage.error.default",
                    defaultMessage: "Failed to generate image. Please try again."
                }
            });
            async function n({
                environment: e,
                prompt: t,
                spaceId: a,
                size: r,
                n: i,
                blockPointer: o,
                source: l
            }) {
                try {
                    let n = await e.api.callCellCompatibleApi({
                        eventName: "generateAiImage",
                        cellNavigation: {
                            spaceId: a
                        },
                        environment: e,
                        data: {
                            prompt: t,
                            spaceId: a,
                            size: r,
                            n: i,
                            blockPointer: o,
                            source: l
                        }
                    });
                    if ("failed" === n.type) return null;
                    return n.data
                } catch (e) {
                    return null
                }
            }

            function i(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_generate_block_image",
                        eventProperties: t
                    }
                })
            }

            function o(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_edit_block_image",
                        eventProperties: t
                    }
                })
            }

            function l(e) {
                switch (e) {
                    case "PROVIDER_ERROR":
                    case "PROVIDER_EXCEPTION":
                        return a(962299).A.formatMessage(r.providerError);
                    case "ALL_PROVIDERS_FAILED":
                        return a(962299).A.formatMessage(r.allProvidersFailed);
                    case "INVALID_MODEL":
                        return a(962299).A.formatMessage(r.invalidModel);
                    case "CONTENT_POLICY_VIOLATION":
                        return a(962299).A.formatMessage(r.contentPolicyViolation);
                    case "RATE_LIMIT_EXCEEDED":
                        return a(962299).A.formatMessage(r.rateLimitExceeded);
                    case "INVALID_REQUEST":
                        return a(962299).A.formatMessage(r.invalidRequest);
                    default:
                        return a(962299).A.formatMessage(r.defaultError)
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    spaceId: r,
                    prompt: n,
                    source: o,
                    style: l
                } = e, s = Date.now();
                i(t, {
                    source: o,
                    duration_ms: 0,
                    status: "start"
                });
                let d = a(674880).defaultInferenceContextStore.state;
                if (!d) return;
                let {
                    spaceStore: c,
                    userStore: u
                } = d, p = (0, a(922900).getWorkflowAgentConfig)({
                    environment: t,
                    writerMode: !1,
                    useWebSearch: !0,
                    searchScopes: [],
                    useReadOnlyMode: !0,
                    model: "orange-tart"
                }), g = l && "default" !== l ? `Create this in a ${l} style: ` : "", m = (0, a(247438).x9d)(g + n), y = (0, a(674880).Jv)({
                    environment: t,
                    spaceStore: c,
                    userStore: u,
                    promptType: "generate_image_prompt",
                    value: m,
                    locale: a(962299).A.intl.locale
                }), f = (0, a(674880).Xd)({
                    environment: t,
                    inferenceContext: d,
                    config: p,
                    addSteps: [y],
                    surface: "ai_block"
                }), h = (0, a(295447).Z1)({
                    environment: t,
                    table: a(832375).mSw,
                    spaceId: r
                });
                try {
                    let e = await (0, a(621347).g)({
                        environment: t,
                        data: {
                            transcript: f,
                            traceId: h,
                            spaceId: r,
                            generateTitle: !1,
                            createdSource: "ai_block",
                            isUserInAnySalesAssistedSpace: (0, a(598132).h0)(t),
                            isSpaceSalesAssisted: (0, a(598132).lM)(t, r)
                        }
                    });
                    if (e.error) {
                        let e = Date.now() - s;
                        i(t, {
                            source: o,
                            duration_ms: e,
                            status: "error",
                            error_code: "prompt_enhancement_failed"
                        });
                        return
                    }
                    let n = e.value.findLast(e => "agent-inference" === e.type);
                    if (!n || "agent-inference" !== n.type) return;
                    let {
                        value: l
                    } = (0, a(330942).ie)(n), d = "";
                    if ("string" == typeof l) d = l;
                    else if (Array.isArray(l))
                        for (let e of l) "text" === e.type && e.content && (d += e.content);
                    let c = d.trim() || void 0;
                    if (c) {
                        let e = Date.now() - s;
                        i(t, {
                            source: o,
                            duration_ms: e,
                            status: "prompt_enhancement_success"
                        })
                    }
                    return c
                } catch (e) {
                    i(t, {
                        source: o,
                        duration_ms: Date.now() - s,
                        status: "error",
                        error_code: "prompt_enhancement_exception"
                    });
                    return
                }
            }
            async function d(e) {
                let {
                    prompt: t,
                    environment: a,
                    spaceId: r,
                    size: i,
                    n: o,
                    source: l,
                    style: d
                } = e, c = await s({
                    environment: a,
                    spaceId: r,
                    prompt: t,
                    source: l,
                    style: d
                }) ? ? t, u = await n({
                    environment: a,
                    prompt: c,
                    spaceId: r,
                    size: i,
                    n: o,
                    source: l
                });
                return u ? { ...u,
                    enhancedPrompt: c
                } : null
            }

            function c(e) {
                let {
                    environment: t,
                    blockId: r,
                    sentiment: n,
                    additionalComments: i
                } = e, o = a(780311).q.getPhase(r);
                "feedback" !== o.phase || u({
                    environment: t,
                    blockId: r,
                    spaceId: o.spaceId,
                    sentiment: n,
                    userPrompt: o.userPrompt,
                    enhancedPrompt: o.enhancedPrompt ? ? o.userPrompt,
                    source: o.source,
                    model: o.model,
                    additionalComments: i
                })
            }
            async function u(e) {
                let {
                    environment: t,
                    blockId: a,
                    spaceId: r,
                    sentiment: n,
                    userPrompt: i,
                    enhancedPrompt: o,
                    source: l,
                    model: s,
                    additionalComments: d
                } = e;
                try {
                    await t.api.callCellCompatibleApi({
                        eventName: "saveAiImageFeedback",
                        cellNavigation: {
                            spaceId: r
                        },
                        environment: t,
                        data: {
                            blockId: a,
                            spaceId: r,
                            sentiment: n,
                            userPrompt: i,
                            enhancedPrompt: o,
                            source: l,
                            model: s,
                            additionalComments: d
                        }
                    })
                } catch {}
            }
        },
        331700: (e, t, a) => {
            a.d(t, {
                m: () => o
            }), a(296540);
            var r = a(474848);
            let n = (0, a(109939).YK)({
                    alpha: {
                        id: "linkBadge.alpha",
                        defaultMessage: "Alpha"
                    },
                    beta: {
                        id: "linkBadge.beta",
                        defaultMessage: "Beta"
                    }
                }),
                i = {
                    borderRadius: 4
                };

            function o({
                href: e,
                type: t
            }) {
                return (0, r.jsx)(a(64960).Ay, {
                    href: e,
                    style: i,
                    external: !0,
                    children: (0, r.jsx)(a(746434).E, {
                        content: (0, r.jsx)(a(109939).sA, { ...n[t]
                        })
                    })
                })
            }
        },
        348126: (e, t, a) => {
            a.d(t, {
                r: () => n
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.19 4.19 11.62 11.62",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m15.543 5.75-.684.684-1.288-1.289.692-.69a.91.91 0 0 1 1.28 0c.35.35.35.93 0 1.28zM6.11 15.183l7.914-7.914-1.289-1.29-7.92 7.909a1.3 1.3 0 0 0-.275.457l-.335 1.082c-.061.228.152.442.366.366l1.082-.336q.251-.068.457-.274"
                    })
                },
                n = (0, a(104509).wt)("pencil", r, "default")
        },
        365042: (e, t, a) => {
            a.d(t, {
                E: () => i,
                p: () => o
            }), a(296540);
            var r = a(474848);
            let n = {
                textArea: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    minWidth: 0,
                    flex: 1,
                    paddingInlineEnd: 6
                },
                removeButtonArea: {
                    position: "absolute",
                    insetInlineEnd: 6,
                    width: 16,
                    height: 16,
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "auto"
                },
                removeButton: {
                    width: 18,
                    height: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: a(632079).Tj.text.secondary
                }
            };

            function i(e) {
                let {
                    aiChatFeatureController: t,
                    icon: i,
                    text: l,
                    useSecondaryForeground: s = !1,
                    onClickRemove: d,
                    onClick: c,
                    buttonPopupEvents: u,
                    isDisabled: p
                } = e, g = (0, a(109939).tz)(), [m, y] = (0, a(848135).B)(), [f, h] = (0, a(768397).s)(), b = (null == t ? void 0 : t.aiChatType) === "agent_mobile" || y || h, x = (0, a(960253).e)(), v = (0, a(960253).I)(() => ({
                    container: {
                        maxWidth: "50%",
                        borderRadius: 1e3,
                        height: 28,
                        padding: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        outline: "none",
                        position: "relative",
                        pointerEvents: "auto",
                        cursor: c ? "pointer" : "default",
                        border: `1px solid ${o({themeMode:x,usesElevatedDarkModeBackground:null==t?void 0:t.usesElevatedDarkModeBackground})}`
                    },
                    gradientOverlay: {
                        position: "absolute",
                        insetInlineEnd: 0,
                        top: 0,
                        bottom: 0,
                        width: 40,
                        background: `linear-gradient(to right, transparent 0%, ${"dark"===x?null!=t&&t.usesElevatedDarkModeBackground?a(632079).Tj.gray.background.elevated:a(632079).Tj.background.secondary:a(632079).Tj.background.elevated} 30%)`,
                        borderStartStartRadius: 0,
                        borderStartEndRadius: 1e3,
                        borderEndEndRadius: 1e3,
                        borderEndStartRadius: 0,
                        zIndex: 1,
                        pointerEvents: "none"
                    },
                    removeButtonHovered: {
                        background: "light" === x ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)",
                        borderRadius: 1e3,
                        color: a(632079).Tj.text.primary
                    }
                }), [c, null == t ? void 0 : t.usesElevatedDarkModeBackground, x]);
                return (0, r.jsxs)(a(548436).A, {
                    style: v.container,
                    hoveredStyle: {
                        background: u ? void 0 : "none"
                    },
                    ref: m,
                    disabled: p,
                    onClick: p ? void 0 : c,
                    ...u,
                    children: [(0, r.jsx)(a(4458).fI, {
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        children: i
                    }), l ? (0, r.jsx)(a(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: s ? "secondary" : "accentPrimary",
                        style: n.textArea,
                        children: l
                    }) : null, d && !p ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(a(153321).P.div, {
                            style: v.gradientOverlay,
                            initial: !1,
                            animate: {
                                opacity: +!!b
                            }
                        }), (0, r.jsx)(a(153321).P.div, {
                            initial: !1,
                            animate: {
                                opacity: +!!b,
                                scale: b ? 1 : .8
                            },
                            style: n.removeButtonArea,
                            children: (0, r.jsx)(a(988022).p, {
                                ref: f,
                                style: n.removeButton,
                                hoveredStyle: v.removeButtonHovered,
                                "aria-label": g.formatMessage({
                                    id: "unifiedChatContextChip.removeButton.ariaLabel",
                                    defaultMessage: "Remove"
                                }),
                                onMouseDown: e => {
                                    e.preventDefault()
                                },
                                onClick: d,
                                children: (0, r.jsx)(a(16275).I, {
                                    icon: a(25094).xMarkSmallIcon,
                                    size: "xs"
                                })
                            })
                        })]
                    }) : void 0]
                })
            }

            function o(e) {
                let {
                    themeMode: t,
                    usesElevatedDarkModeBackground: r
                } = e;
                return r && "dark" === t ? a(632079).Tj.border.strong : a(632079).Tj.border.primary
            }
        },
        473234: (e, t, a) => {
            a.d(t, {
                v: () => n
            });
            var r = a(296540);

            function n(e) {
                let {
                    immediateState: t,
                    isEqual: a = Object.is,
                    openDelayMs: n = 400,
                    closeDelayMs: i = 150
                } = e, [o, l] = (0, r.useState)(!1), [s, d] = (0, r.useState)(void 0), c = !!(s && !a(t, s));
                (0, r.useEffect)(() => {
                    if (c) {
                        let e = setTimeout(() => {
                            d(void 0)
                        }, i);
                        return () => clearTimeout(e)
                    }
                }, [c, i]);
                let u = !!(t && !a(t, s));
                (0, r.useEffect)(() => {
                    if (t && u) {
                        let e = setTimeout(() => {
                            d(t)
                        }, n);
                        return () => clearTimeout(e)
                    }
                }, [t, u, n]);
                let [p, g] = (0, r.useState)(void 0), m = p ? ? (o ? void 0 : s), y = (0, r.useCallback)(() => {
                    g(m)
                }, [m]), f = (0, r.useCallback)(() => {
                    g(void 0)
                }, []), h = (0, r.useCallback)(() => {
                    f(), l(!0)
                }, [f]);
                return (0, r.useEffect)(() => {
                    l(!1)
                }, [s]), {
                    state: m,
                    pinPopup: y,
                    unpinPopup: f,
                    hasBeenHovering: !!(t && a(t, m)),
                    isPinned: !!p,
                    dismissPopup: h
                }
            }
        },
        632054: (e, t, a) => {
            a.d(t, {
                T: () => n
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.37 3.12 17.25 13.75",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M15.625 13.875h.875a2.125 2.125 0 0 0 2.125-2.125v-6.5A2.125 2.125 0 0 0 16.5 3.125h-10A2.125 2.125 0 0 0 4.375 5.25v.875H3.5A2.125 2.125 0 0 0 1.375 8.25v6.5c0 1.174.951 2.125 2.125 2.125h10a2.125 2.125 0 0 0 2.125-2.125zm-9.125 0h7.875v.875a.875.875 0 0 1-.875.875h-10a.875.875 0 0 1-.875-.875v-6.5c0-.483.392-.875.875-.875h.875v4.375c0 1.174.951 2.125 2.125 2.125m-.875-2.125v-6.5c0-.483.392-.875.875-.875h10c.483 0 .875.392.875.875v6.5a.875.875 0 0 1-.875.875h-10a.875.875 0 0 1-.875-.875"
                    })
                },
                n = (0, a(104509).wt)("rectangleOnRectangle", r, "default")
        },
        865451: (e, t, a) => {
            a.d(t, {
                Z: () => o,
                q: () => s
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(581454), a(737550);
            var r = a(296540),
                n = () => a(970831),
                i = a(474848);
            let o = (0, a(109939).YK)({
                    generateFailed: {
                        id: "aiGenerateInput.error.noResults",
                        defaultMessage: "Failed to generate image. Please try again."
                    },
                    generateRequestError: {
                        id: "aiGenerateInput.error.request",
                        defaultMessage: "An error occurred. Please try again."
                    },
                    submitAriaLabel: {
                        id: "aiGenerateInput.submit.ariaLabel",
                        defaultMessage: "Generate image"
                    },
                    styleDefault: {
                        id: "aiGenerateInput.style.default.v2",
                        defaultMessage: "General"
                    },
                    styleDiagram: {
                        id: "aiGenerateInput.style.diagram",
                        defaultMessage: "Diagram"
                    },
                    styleSlide: {
                        id: "aiGenerateInput.style.slide",
                        defaultMessage: "Slides"
                    },
                    styleChart: {
                        id: "aiGenerateInput.style.chart",
                        defaultMessage: "Chart"
                    },
                    styleInfographic: {
                        id: "aiGenerateInput.style.infographic",
                        defaultMessage: "Infographic"
                    },
                    styleComic: {
                        id: "aiGenerateInput.style.comic",
                        defaultMessage: "Comic"
                    },
                    styleSketch: {
                        id: "aiGenerateInput.style.sketch",
                        defaultMessage: "Sketch"
                    },
                    styleCartoon: {
                        id: "aiGenerateInput.style.cartoon",
                        defaultMessage: "Cartoon"
                    },
                    styleMockup: {
                        id: "aiGenerateInput.style.mockup",
                        defaultMessage: "Mockup"
                    },
                    stylePhoto: {
                        id: "aiGenerateInput.style.photo",
                        defaultMessage: "Photo"
                    },
                    styleModernArt: {
                        id: "aiGenerateInput.style.modernArt",
                        defaultMessage: "Modern Art"
                    },
                    stylePattern: {
                        id: "aiGenerateInput.style.pattern",
                        defaultMessage: "Pattern"
                    }
                }),
                l = {
                    default: {
                        id: "default",
                        messageKey: "styleDefault",
                        icon: a(890468).sparklesIcon
                    },
                    diagram: {
                        id: "diagram",
                        messageKey: "styleDiagram",
                        icon: a(950237).layoutIcon
                    },
                    slide: {
                        id: "slide",
                        messageKey: "styleSlide",
                        icon: a(632054).T
                    },
                    chart: {
                        id: "chart",
                        messageKey: "styleChart",
                        icon: a(344630).j
                    },
                    infographic: {
                        id: "infographic",
                        messageKey: "styleInfographic",
                        icon: a(119300).b
                    },
                    mockup: {
                        id: "mockup",
                        messageKey: "styleMockup",
                        icon: a(100410).iPhoneIcon
                    },
                    photo: {
                        id: "photo",
                        messageKey: "stylePhoto",
                        icon: a(937233).M
                    },
                    comic: {
                        id: "comic",
                        messageKey: "styleComic",
                        icon: a(943917).i
                    },
                    sketch: {
                        id: "sketch",
                        messageKey: "styleSketch",
                        icon: a(348126).r
                    },
                    cartoon: {
                        id: "cartoon",
                        messageKey: "styleCartoon",
                        icon: a(976898).emojiFaceIcon
                    },
                    modern_art: {
                        id: "modern_art",
                        messageKey: "styleModernArt",
                        icon: a(632054).T
                    },
                    pattern: {
                        id: "pattern",
                        messageKey: "stylePattern",
                        icon: a(870143).Q
                    }
                };

            function s(e) {
                let {
                    aiGeneration: t,
                    expansionState: a
                } = e, r = "collapsible" === a ? e.onExpandStart : () => {}, n = !1 !== e.showRolloutBadge;
                return (0, i.jsx)(g, {
                    aiGeneration: t,
                    expansionState: a,
                    onExpandStart: r,
                    showRolloutBadge: n,
                    styleOptionIds: e.styleOptionIds,
                    placeholder: e.placeholder,
                    collapsedPlaceholder: e.collapsedPlaceholder,
                    collapsedHeader: e.collapsedHeader,
                    templates: e.templates
                })
            }

            function d(e) {
                let {
                    store: t,
                    onRemove: r
                } = e, n = (0, a(682985).K8)(() => {
                    if (t) return {
                        icon: t.getIcon(),
                        iconRecordCategory: (0, a(569553).Te)(t)
                    }
                }, [t]);
                return t ? (0, i.jsx)(a(365042).E, {
                    isDisabled: !1,
                    icon: n ? (0, i.jsx)(a(569553).B6, {
                        disabled: !0,
                        icon: n.icon,
                        isEmptyPage: !1,
                        size: 16,
                        iconRecordCategory: n.iconRecordCategory
                    }) : null,
                    text: (0, i.jsx)(a(627918).A, {
                        store: t
                    }),
                    onClickRemove: r
                }) : null
            }
            let c = {
                    inputWrapper: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 0,
                        cursor: "text"
                    },
                    text: {
                        flex: 1,
                        minHeight: 20,
                        fontSize: 14,
                        lineHeight: "20px",
                        marginBottom: 30,
                        marginInlineStart: 5
                    },
                    placeholder: {
                        minHeight: 20,
                        fontSize: 14,
                        lineHeight: "20px"
                    },
                    bottomRow: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "auto"
                    },
                    stylePickerButton: {
                        marginInlineStart: -6
                    },
                    styleIcon: {
                        display: "block",
                        width: 20,
                        height: 20,
                        flexShrink: 0
                    },
                    sendButton: {
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        pointerEvents: "auto",
                        background: a(632079).Tj.blue.icon.accentPrimary
                    },
                    sendButtonIcon: {
                        width: 14,
                        height: 14,
                        fill: a(632079).Tj.text.inversePrimary
                    },
                    collapsedInputBox: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 20,
                        border: `1px solid ${a(632079).Tj.border.secondary}`,
                        backgroundColor: a(632079).Tj.background.primary,
                        padding: "10px 10px",
                        gap: 8,
                        cursor: "pointer",
                        width: "100%"
                    },
                    collapsedIcon: {
                        color: a(632079).Tj.icon.tertiary,
                        flexShrink: 0
                    },
                    collapsedInputWrapper: {
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        cursor: "text"
                    },
                    collapsedPlaceholder: {
                        minHeight: 20,
                        fontSize: 14,
                        lineHeight: "20px",
                        color: a(632079).Tj.text.tertiary,
                        cursor: "text"
                    },
                    betaBadgeWrapper: {
                        flexShrink: 0
                    },
                    templateGrid: {
                        display: "grid",
                        gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                        gap: 8,
                        marginBottom: 12
                    },
                    collapsedHeader: {
                        marginBottom: 12
                    },
                    templateButton: {
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        justifyContent: "flex-start",
                        height: "auto",
                        borderRadius: 4,
                        overflow: "hidden",
                        background: a(632079).Tj.background.secondaryTranslucent,
                        paddingTop: 8,
                        paddingInlineStart: 10,
                        paddingInlineEnd: 0,
                        paddingBottom: 0,
                        gap: 4
                    },
                    templateLabel: {
                        textAlign: "start"
                    },
                    templateImage: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "right bottom",
                        display: "block",
                        borderStartStartRadius: 4
                    },
                    templateButtonPressed: {
                        background: a(632079).Tj.background.secondary
                    }
                },
                u = (0, a(64960)._S)({
                    color: a(632079).Tj.background.secondaryTranslucent
                }),
                p = (0, a(64960)._S)({
                    color: a(632079).Tj.blue.background.accentPrimary
                });

            function g(e) {
                let {
                    aiGeneration: t,
                    expansionState: s,
                    onExpandStart: g,
                    showRolloutBadge: m,
                    placeholder: y,
                    collapsedPlaceholder: f,
                    collapsedHeader: h,
                    templates: b = []
                } = e, x = (0, r.useMemo)(() => e.styleOptionIds.map(e => l[e]), [e.styleOptionIds]), v = (0, a(109939).tz)(), I = (0, a(533992).v3)(), {
                    store: k,
                    setValue: j
                } = (0, a(430937).AI)({
                    initialValue: void 0
                }), S = r.useRef(null), [M, B] = (0, r.useState)(!1), [w, C] = (0, r.useState)("expanded" === s), [T, A] = (0, r.useState)("default"), [E, P] = (0, r.useState)(!0), _ = (0, a(682985).K8)(() => k.getValue(), [k]), R = (0, a(247438).w9s)(_), D = (0, a(960253).e)(), L = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore), z = (0, a(682985).K8)(() => {
                    if (L) return n().B.createChildStore(L, {
                        table: a(832375).evP,
                        id: t.blockId,
                        spaceId: t.spaceId
                    }).getNavigableBlockStore()
                }, [t.blockId, t.spaceId, L]), G = (0, r.useMemo)(() => {
                    if (!L) return [];
                    let e = (0, a(247438).moK)(_);
                    if (!e.length) return [];
                    let t = new Set,
                        r = [];
                    for (let a of e) E && a.id === (null == z ? void 0 : z.id) || t.has(a.id) || (t.add(a.id), r.push({
                        pointer: a,
                        store: n().B.createChildStore(L, a)
                    }));
                    return r
                }, [_, E, null == z ? void 0 : z.id, L]), K = !!z && E || G.length > 0, O = (0, r.useCallback)(() => {
                    P(!1)
                }, []), V = (0, r.useCallback)(e => {
                    let t = k.getValue();
                    if (!t) return;
                    let r = !1,
                        n = t.filter(t => !(0, a(432155).Bw)({
                            token: t,
                            pointer: e,
                            spaceStore: L ? ? void 0
                        }) || (r = !0, !1));
                    r && j(n)
                }, [k, j, L]), H = (0, a(960253).I)(() => ({
                    templateButtonHovered: {
                        background: u.hovered
                    },
                    collapsedInputBox: { ...c.collapsedInputBox,
                        backgroundColor: "dark" === D ? a(632079).Tj.popoverBackground : a(632079).Tj.background.primary,
                        border: `1px solid ${"dark"===D?a(632079).Tj.border.primary:a(632079).Tj.border.secondary}`
                    },
                    inputBox: {
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 10,
                        border: M ? `2px solid ${a(632079).Tj.blue.icon.accentPrimary}` : `1px solid ${"dark"===D?a(632079).Tj.border.primary:a(632079).Tj.border.secondary}`,
                        backgroundColor: "dark" === D ? a(632079).Tj.popoverBackground : a(632079).Tj.background.primary,
                        paddingTop: M ? 11 : 12,
                        paddingInlineEnd: M ? 11 : 12,
                        paddingBottom: M ? 6 : 7,
                        paddingInlineStart: M ? 11 : 12,
                        minHeight: 225,
                        position: "relative"
                    },
                    sendButtonHovered: {
                        background: p.hovered
                    },
                    sendButtonPressed: {
                        background: p.pressed
                    }
                }), [M, D]);
                x.length > 0 && !x.some(e => e.id === T) && A(x[0].id);
                let F = x.find(e => e.id === T),
                    W = (0, r.useCallback)(async () => {
                        let e = (0, a(247438).q4_)(_).trim();
                        if (!e) return;
                        a(326190).Rt(I, {
                            source: t.source,
                            status: "submit",
                            interaction_type: "submit",
                            style: T
                        });
                        let r = Date.now();
                        t.onGenerationStart({
                            prompt: e
                        });
                        try {
                            var n, i, l, s, d, c;
                            let u = await a(326190).a6({
                                    blockId: t.blockId,
                                    prompt: e,
                                    environment: I,
                                    spaceId: t.spaceId,
                                    size: t.size,
                                    n: t.n ? ? 1,
                                    source: t.source,
                                    style: T
                                }),
                                p = Date.now() - r,
                                g = null == u || null == (n = u.images) ? void 0 : n[0];
                            if (!u || u.error || !g) {
                                a(326190).Rt(I, {
                                    source: t.source,
                                    duration_ms: p,
                                    status: "error",
                                    error_code: (null == u || null == (i = u.error) ? void 0 : i.code) ? ? "no_images",
                                    ...null != u && null != (l = u.images) && null != (l = l[0]) && l.model ? {
                                        model: null == (s = u.images[0]) ? void 0 : s.model
                                    } : {}
                                }), t.onGenerationError((null == u || null == (d = u.error) ? void 0 : d.code) ? ? "no_images");
                                let e = null != u && null != (c = u.error) && c.code ? a(326190).ys(u.error.code) : v.formatMessage(o.generateFailed);
                                (0, a(984211).f)({
                                    item: {
                                        durationMs: "keep",
                                        label: e
                                    }
                                });
                                return
                            }
                            a(326190).Rt(I, {
                                source: t.source,
                                duration_ms: p,
                                status: "success",
                                ...g.model ? {
                                    model: g.model
                                } : {}
                            }), await t.onGenerationEnd({
                                url: g.url,
                                enhancedPrompt: u.enhancedPrompt,
                                model: g.model
                            })
                        } catch {
                            t.onGenerationError("exception");
                            let e = v.formatMessage(o.generateRequestError);
                            (0, a(984211).f)({
                                item: {
                                    durationMs: "keep",
                                    label: e
                                }
                            })
                        }
                    }, [_, t, I, v, T]),
                    N = (0, a(682985).K8)(() => {
                        var e;
                        let t = a(728372).AppStoreCurrentUserSettingsStore.state;
                        return (null == t || null == (e = t.getSettings()) ? void 0 : e.chat_enter_key_behavior) ? ? "send"
                    }, []),
                    q = (0, r.useCallback)(() => {
                        W()
                    }, [W]),
                    $ = (0, r.useCallback)(() => {
                        a(374176).default.afterNextFlush(() => {
                            let e = a(521595).n.findNodeFromStore(k);
                            e && (e.scrollTop = e.scrollHeight)
                        })
                    }, [k]),
                    U = (0, r.useCallback)(() => {
                        B(!0)
                    }, []),
                    Y = (0, r.useCallback)(() => {
                        B(!1)
                    }, []),
                    Q = (0, r.useCallback)(() => {
                        var e;
                        null == (e = S.current) || e.focus()
                    }, []),
                    X = (0, r.useCallback)(e => {
                        if (e.target === e.currentTarget && ("Enter" === e.key || " " === e.key)) {
                            var t;
                            e.preventDefault(), null == (t = S.current) || t.focus()
                        }
                    }, []),
                    Z = (0, r.useCallback)(() => {
                        "collapsible" === s && (a(326190).Rt(I, {
                            source: t.source,
                            status: "expand",
                            interaction_type: "expand"
                        }), g(), C(!0), setTimeout(() => {
                            var e;
                            null == (e = S.current) || e.focus()
                        }, 0))
                    }, [s, g, I, t.source]);
                (0, r.useEffect)(() => {
                    if ("expanded" === s) {
                        var e;
                        null == (e = S.current) || e.focus()
                    }
                }, [s]);
                let J = (0, r.useCallback)(e => {
                        a(326190).Rt(I, {
                            source: t.source,
                            status: "use_template",
                            interaction_type: "template_button",
                            style: e.style
                        }), A(e.style), j((0, a(247438).x9d)(e.prefill)), Z()
                    }, [t.source, I, Z, j]),
                    ee = (0, r.useMemo)(() => b.map(e => () => J(e)), [J, b]);
                if ((0, r.useEffect)(() => {
                        let e = (0, a(233519).C)(t.blockId);
                        if (!e) return;
                        let r = b.find(t => t.style === e.style);
                        r && J(r)
                    }, [t.blockId, J, b]), "collapsible" === s && !w) {
                    let e = f ? ? y;
                    return (0, i.jsxs)("div", {
                        children: [h ? (0, i.jsx)("div", {
                            style: c.collapsedHeader,
                            children: (0, i.jsx)(a(111010).D, {
                                styleKey: "bodySmMedium",
                                colorVariant: "secondary",
                                children: h
                            })
                        }) : null, b.length > 0 ? (0, i.jsx)("div", {
                            style: c.templateGrid,
                            children: b.map((e, t) => (0, i.jsxs)(a(265779).E, {
                                size: "lg",
                                style: c.templateButton,
                                hoveredStyle: H.templateButtonHovered,
                                pressedStyle: c.templateButtonPressed,
                                onClick: ee[t],
                                children: [(0, i.jsx)(a(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "secondary",
                                    style: c.templateLabel,
                                    children: e.label
                                }), (0, i.jsx)(a(4458).fI, {
                                    flex: 1,
                                    minHeight: 0,
                                    alignItems: "stretch",
                                    justifyContent: "stretch",
                                    width: "100%",
                                    children: e.imageSrc ? (0, i.jsx)("img", {
                                        src: e.imageSrc,
                                        alt: "",
                                        style: c.templateImage
                                    }) : (0, i.jsx)(a(16275).I, {
                                        icon: l[e.style].icon,
                                        size: "default",
                                        colorVariant: "secondary",
                                        style: c.templateImage
                                    })
                                })]
                            }, e.style))
                        }) : null, (0, i.jsxs)("button", {
                            type: "button",
                            style: H.collapsedInputBox,
                            onClick: Z,
                            "aria-label": e,
                            children: [(0, i.jsx)("div", {
                                style: c.collapsedIcon,
                                children: (0, i.jsx)(a(16275).I, {
                                    icon: a(775451).W,
                                    size: "default"
                                })
                            }), (0, i.jsx)("div", {
                                style: c.collapsedInputWrapper,
                                children: (0, i.jsx)("span", {
                                    style: c.collapsedPlaceholder,
                                    children: e
                                })
                            }), (0, i.jsx)("div", {
                                style: c.betaBadgeWrapper,
                                children: (0, i.jsx)(a(18274).A, {})
                            })]
                        })]
                    })
                }
                return (0, i.jsxs)("div", {
                    style: H.inputBox,
                    children: [(0, i.jsxs)("div", {
                        style: c.inputWrapper,
                        onClick: Q,
                        onKeyDown: X,
                        role: "textbox",
                        tabIndex: 0,
                        "aria-label": y,
                        children: [K ? (0, i.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 6,
                            marginBottom: 10,
                            children: [E ? (0, i.jsx)(d, {
                                store: z,
                                onRemove: z ? O : void 0
                            }) : null, G.map(({
                                pointer: e,
                                store: t
                            }) => (0, i.jsx)(d, {
                                store: t,
                                onRemove: () => V(e)
                            }, t.id))]
                        }) : null, (0, i.jsx)(a(53373).A, {
                            ref: S,
                            placeholder: y,
                            disabled: !1,
                            store: k,
                            style: c.text,
                            placeholderStyle: c.placeholder,
                            pasteBehavior: "inline",
                            disableSlashCommands: !0,
                            disableEmbedMenu: !0,
                            disableEmojiCommands: !0,
                            disableComment: !0,
                            disableSelectAllBlocks: !0,
                            disableSelectionDrag: !0,
                            enterBehavior: "newline" === N ? "soft-break" : "block-break",
                            onEnter: "send" === N ? q : void 0,
                            onCommandEnter: "newline" === N ? W : void 0,
                            onSoftBreak: $,
                            onFocus: U,
                            onBlur: Y,
                            disableMobileActionBar: !0,
                            disabledMentionTypes: {
                                reminder: !0,
                                property: !0,
                                user: !0
                            },
                            disableStyleAnnotations: !0,
                            disableInsertedDeletedAnnotations: !0,
                            inPageFind: a(831719).Os.none
                        })]
                    }), (0, i.jsxs)("div", {
                        style: c.bottomRow,
                        children: [(0, i.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            minWidth: 0,
                            children: (0, i.jsx)(a(656252).A, {
                                popupType: a(986939).A.isMobile ? a(656252).z.BottomSheet : a(656252).z.Popup,
                                alignmentToOrigin: "start",
                                placementToOrigin: "top",
                                originGap: 4,
                                onOpen: () => {
                                    a(326190).Rt(I, {
                                        source: t.source,
                                        status: "open_style_menu",
                                        interaction_type: "open_style_menu"
                                    })
                                },
                                content: e => (0, i.jsx)(a(747369).A, {
                                    menuType: a(649476).gu.Popup,
                                    children: (0, i.jsx)(a(558045).A, {
                                        type: a(558045).O.Vertical,
                                        initialFocus: x.findIndex(e => e.id === T),
                                        sections: [{
                                            key: "styles",
                                            render: e => (0, i.jsx)(a(844565).A, { ...e
                                            }),
                                            items: x.map(r => ({
                                                key: r.id,
                                                action: () => {
                                                    r.id !== T && a(326190).Rt(I, {
                                                        source: t.source,
                                                        status: "change_style",
                                                        interaction_type: "change_style",
                                                        style: r.id
                                                    }), A(r.id), e.close()
                                                },
                                                render: e => (0, i.jsx)(a(95582).A, { ...e,
                                                    icon: (0, i.jsx)(a(16275).I, {
                                                        icon: r.icon,
                                                        size: "default",
                                                        style: c.styleIcon
                                                    }),
                                                    title: v.formatMessage(o[r.messageKey]),
                                                    isChecked: T === r.id
                                                })
                                            }))
                                        }]
                                    })
                                }),
                                children: e => (0, i.jsx)(a(988022).p, {
                                    style: c.stylePickerButton,
                                    colorVariant: "secondary",
                                    iconLeading: F ? {
                                        icon: F.icon,
                                        size: "default",
                                        colorVariant: "secondary",
                                        style: c.styleIcon
                                    } : void 0,
                                    iconTrailing: {
                                        icon: a(595453).arrowChevronSingleDownSmallIcon,
                                        size: "sm",
                                        colorVariant: "tertiary"
                                    },
                                    ...e,
                                    children: (0, i.jsx)(a(111010).D, {
                                        styleKey: "bodyMedium",
                                        children: F ? v.formatMessage(o[F.messageKey]) : ""
                                    })
                                })
                            })
                        }), (0, i.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            gap: 8,
                            children: [m ? (0, i.jsx)(a(129303).m, {}) : null, (0, i.jsx)(a(374533).A, {
                                testId: "ai-generate-send-button",
                                icon: a(567738).arrowStraightUpFillSmallIcon,
                                onClick: W,
                                disabled: R,
                                style: c.sendButton,
                                iconStyle: c.sendButtonIcon,
                                hoveredStyle: H.sendButtonHovered,
                                pressedStyle: H.sendButtonPressed,
                                size: "lg",
                                ariaLabel: v.formatMessage(o.submitAriaLabel)
                            })]
                        })]
                    })]
                })
            }
        },
        870143: (e, t, a) => {
            a.d(t, {
                Q: () => n
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.37 6.18 17.25 7.64",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M17.375 10c0-2.206-2.602-3.38-4.256-1.92L10.944 10l2.175 1.92c1.654 1.46 4.256.286 4.256-1.92m-14.75 0c0 2.206 2.602 3.38 4.256 1.92L9.055 10 6.88 8.08C5.227 6.62 2.625 7.794 2.625 10m16 0c0 3.282-3.873 5.03-6.333 2.857L10 10.833l-2.292 2.024c-2.46 2.172-6.333.425-6.333-2.857s3.872-5.03 6.333-2.857L10 9.166l2.292-2.023c2.46-2.172 6.333-.425 6.333 2.857"
                    })
                },
                n = (0, a(104509).wt)("infinity", r, "default")
        },
        943917: (e, t, a) => {
            a.d(t, {
                i: () => n
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.63 15.26 14.86",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.5 3.63a2.125 2.125 0 0 0-2.125 2.125v7.5c0 1.173.951 2.125 2.125 2.125h4.935l3.871 2.978a.625.625 0 0 0 1.007-.496V15.38H15.5a2.125 2.125 0 0 0 2.125-2.125v-7.5A2.125 2.125 0 0 0 15.5 3.63zm-.875 2.125c0-.483.392-.875.875-.875h11c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-1.812a.625.625 0 0 0-.626.625v1.838l-3.033-2.334a.63.63 0 0 0-.381-.13H4.5a.875.875 0 0 1-.875-.874z"
                    })
                },
                n = (0, a(104509).wt)("bubbleRight", r, "default")
        },
        984211: (e, t, a) => {
            a.d(t, {
                f: () => n
            }), a(296540);
            var r = a(474848);

            function n(e) {
                let {
                    item: t,
                    onDismiss: n
                } = e;
                a(436555).D6({ ...t,
                    right: (0, r.jsx)(a(531119).Ag, {
                        onClick: n ? ? a(436555).N2,
                        children: (0, r.jsx)(a(109939).sA, {
                            id: "snackbar.dismiss.title",
                            defaultMessage: "Dismiss"
                        })
                    })
                })
            }
        }
    }
]);