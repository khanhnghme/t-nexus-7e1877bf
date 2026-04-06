"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [87353], {
        187353: (e, t, o) => {
            o.d(t, {
                NK: () => h,
                HS: () => b,
                ZR: () => d,
                Jz: () => m,
                _R: () => p,
                Hg: () => a,
                zj: () => D,
                o: () => s,
                L2: () => u,
                jT: () => l,
                A3: () => r,
                mU: () => v,
                AU: () => S,
                qv: () => w,
                NR: () => f,
                wC: () => T,
                d$: () => U,
                tC: () => c,
                sQ: () => P,
                _P: () => C,
                Ft: () => j,
                av: () => F,
                OT: () => N,
                Rc: () => I,
                JK: () => k,
                o6: () => g,
                l0: () => R,
                Pp: () => _,
                SJ: () => q,
                xE: () => x,
                validateConfigStringAgainstValidators: () => E
            }), o(18107), o(410838), o(813451), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(967357), o(898992), o(823215), o(354520), o(672577), o(430670), o(581454), o(737550);
            let n = ["openai", "anthropic", "gemini", "mystery"];

            function i(e) {
                if (!(0, o(722371).Gv)(e)) return !1;
                let t = e.memberId,
                    i = e.model,
                    a = e.displayName,
                    r = e.modelFamily;
                return !!("string" == typeof t && t.length > 0 && (0, o(426048).R5)(i) && "string" == typeof a && a.length > 0 && (0, o(722371).Xk)(n, r)) && (e.memberId, !0)
            }

            function a(e, t) {
                if (!t) return {
                    cachedInferences: [],
                    annotationInferences: []
                };
                let {
                    inferences: n,
                    inferenceKeysToAnnotations: i,
                    acceptedInferenceKeys: a
                } = e.getOrCreateClientAIChatThreadStore(t).state, r = new Map;
                for (let e of n) r.set(e.key, e);
                return {
                    cachedInferences: o(381453).oE(a.map(e => r.get(e))),
                    annotationInferences: o(381453).oE(Object.entries(i).map(([e, t]) => {
                        let o = r.get(e);
                        if (o) return { ...o,
                            value: { ...o.value,
                                input: { ...o.value.input,
                                    annotation: t
                                }
                            }
                        }
                    }))
                }
            }

            function r(e) {
                let {
                    clientStore: t,
                    threadStore: n
                } = e, i = null == n ? void 0 : n.id;
                if (!i) return {
                    steps: [],
                    allReady: !1
                };
                let a = (null == n ? void 0 : n.getMessageStores()) ? ? [],
                    r = a.map(e => e.getStep()).filter(o(722371).O9) ? ? [],
                    l = new Set(r.map(e => e.id)),
                    s = t.getOrCreateClientAIChatThreadStore(i).state.temporarySteps;
                return {
                    steps: [...r.map(e => s.find(t => t.id === e.id) ? ? e), ...s.filter(e => !l.has(e.id))].filter(e => "title" !== e.type),
                    allReady: a.every(e => e.isReady())
                }
            }

            function l(e) {
                let t = e.find(P);
                if (t) return t.value
            }

            function s(e) {
                return e.find(M)
            }

            function u(e) {
                return l(e ? e.getTranscript() : [])
            }

            function p(e, t) {
                let o = t.findIndex(t => t.id === e.id);
                if (-1 !== o) return t.slice(0, o).findLast(e => "user" === e.type)
            }

            function c(e) {
                return "helpdocs" === e ? "helpdoc" : e
            }

            function d(e) {
                return "helpdoc" === e ? "helpdocs" : "all" === e ? "notion" : e
            }

            function g(e) {
                let {
                    results: t,
                    spaceStore: n,
                    environment: i,
                    traceId: a
                } = e;
                return e => {
                    if (!n) return {
                        annotations: [e],
                        status: "missing_citation"
                    };
                    let r = t.flatMap((e, t) => ((0, o(730127).y$)(e.result, n) ? ? []).map(e => ({ ...e,
                        position: t
                    })));
                    return function({
                        linkAnnotation: e,
                        getRenderableSearchResultAndPositionById: t,
                        environment: n
                    }) {
                        let i = o(247438).cQR(e);
                        if (!i) return {
                            annotations: [e],
                            status: "other_link"
                        };
                        let a = i.indexOf("#citation:"),
                            r = i.indexOf(o(253050).N$);
                        if (-1 !== r) {
                            let a = t(decodeURIComponent(i.slice(r + o(253050).N$.length)));
                            if (!a) return {
                                annotations: [e],
                                status: "other_link"
                            };
                            let l = (0, o(730127).OA)({
                                result: a,
                                environment: n
                            });
                            return {
                                annotations: [(0, o(247438).Sez)(l)],
                                status: "other_link"
                            }
                        }
                        if (-1 !== a) {
                            let r = t(decodeURIComponent(i.slice(a + 10)));
                            return r ? {
                                annotations: [function(e) {
                                    let {
                                        result: t,
                                        environment: n
                                    } = e, i = {
                                        resultId: t.id,
                                        positionWithinSource: t.positionWithinSource,
                                        traceId: t.traceId
                                    };
                                    return "notion" === t.type ? o(247438).X$({ ...i,
                                        href: (0, o(483227).J8)({
                                            store: new(o(970831)).B(n, {
                                                table: "block",
                                                id: t.id
                                            }),
                                            fullyQualified: !1,
                                            pageVisitSource: o(254656).y8.AIQna
                                        }),
                                        blockId: t.id,
                                        type: "block"
                                    }) : "webpage" === t.type ? o(247438).X$({ ...i,
                                        href: t.href,
                                        type: "webpage",
                                        url: (null == t ? void 0 : t.url) || ""
                                    }) : "helpdoc-section" === t.type ? o(247438).X$({ ...i,
                                        type: "helpdoc-section",
                                        href: t.href,
                                        url: t.url,
                                        parentPageHref: t.parentPageHref
                                    }) : "helpdocs" === t.type ? o(247438).X$({ ...i,
                                        type: "helpdoc",
                                        href: t.href,
                                        url: t.url
                                    }) : (0, o(600923).K)(t.type).getCitationAnnotationFromSearchResult({
                                        result: t
                                    })
                                }({
                                    result: r,
                                    environment: n
                                })],
                                status: "citation"
                            } : {
                                annotations: [e],
                                status: "missing_citation"
                            }
                        }
                        return {
                            annotations: [(0, o(247438).Sez)(i)],
                            status: "other_link"
                        }
                    }({
                        linkAnnotation: e,
                        getRenderableSearchResultAndPositionById: e => {
                            let t = r.find(t => "notion" === t.type ? decodeURIComponent(t.id) === e : decodeURIComponent(t.href) === e);
                            if (t) return t ? { ...t,
                                positionWithinSource: t.position,
                                traceId: a
                            } : void 0
                        },
                        environment: i
                    })
                }
            }
            let b = /\[\]\((.*?)\)/g;

            function m(e) {
                return e.replace(/\[([^\[\]]+?)\]\((.*?)\)/g, (e, t, n) => `[${t}](${o(253050).N$}${n})`).replace(/\[\]\((.*?)\)/g, (e, t) => `[citation](#citation:${t})`)
            }
            let h = 3600;

            function f() {
                return o(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }).stuck_run_threshold_seconds ? ? h
            }

            function y(e) {
                var t;
                return (null == e || null == (t = e.getParentPointer()) ? void 0 : t.table) === o(832375).C0E
            }

            function k(e) {
                var t;
                return y(e) && (null == e || null == (t = e.getData()) ? void 0 : t.run_id) !== void 0
            }

            function v(e) {
                let t = e.getData(),
                    n = null == t ? void 0 : t.run_id,
                    i = e.getSpaceId();
                if (n && i) return o(849697).t.createChildStore(e, {
                    table: o(832375).QRx,
                    id: n,
                    spaceId: i
                })
            }

            function w(e) {
                if (!e || "pending" !== e.getStatus()) return;
                let t = e.getDequeueAfter();
                if (void 0 !== t) return t;
                let o = e.getData(),
                    n = null == o ? void 0 : o.enqueued_at,
                    i = null == o ? void 0 : o.scheduled_run_jitter_seconds;
                if (n && void 0 !== i) return n + 1e3 * i
            }

            function S(e) {
                var t;
                if (!e || "pending" !== e.getStatus()) return;
                let o = e.getDequeueAfter();
                if (void 0 !== o && o > Date.now()) return "edits";
                let n = null == (t = e.getData()) ? void 0 : t.scheduled_run_jitter_seconds;
                if (n && n > 0) return "recurrence"
            }

            function I(e) {
                if (!e || !k(e)) return !1;
                let t = v(e);
                return !!(null != t && t.isDefined()) && "running" === t.getStatus()
            }

            function A(e) {
                return "agent-tool-result" === e.type && "result" === e.toolType
            }

            function C(e, t = h) {
                let o = e.getUpdatedTime() ? ? e.getCreatedTime();
                return !!o && Date.now() - o > 1e3 * t
            }

            function x({
                threadStore: e,
                transcript: t,
                clientStore: n,
                stuckThresholdSeconds: i
            }) {
                let a;
                if (!e || !y(e)) return;
                let r = v(e),
                    l = null == r ? void 0 : r.getStatus();
                if (!("skipped" === l || t.some(A))) {
                    if (!(t.some(e => "error" === e.type) || j({
                            clientStore: n,
                            threadStore: e
                        })) && !(-1 !== (a = t.findLastIndex(e => "agent-trigger" === e.type)) && t.slice(a + 1).some(e => (0, o(588831).z5)(e)))) {
                        if ("failure" === l) return "failure";
                        if ("retryableFailure" === l) return "retryableFailure";
                        if ("running" === l && C(e, i ? ? h)) return "stuck"
                    }
                }
            }

            function q(e) {
                if (!e || !y(e)) return !1;
                let t = v(e);
                return "pending" === (null == t ? void 0 : t.getStatus())
            }

            function j({
                clientStore: e,
                threadStore: t
            }) {
                return !!t && (!!t.getIsInferenceLeaseActive() || e.getOrCreateClientAIChatThreadStore(t.id).state.loading)
            }

            function T(e) {
                if (!e) return !1;
                let t = e.getMessageStores().at(-1);
                if (!t) return !1;
                let n = t.getStep();
                if (!n || !(0, o(180139).x3)(n)) return !1;
                let i = t.getData();
                return (null == i ? void 0 : i.completed) === !1
            }

            function R(e) {
                return "resultsBlended" === e.status || "resultsComplete" === e.status || "resultsPartial" === e.status || "generatingQuery" !== e.status && "searching" !== e.status && void(0, o(722371).HB)(e)
            }

            function _(e) {
                return "resultsComplete" === e.status || "resultsBlended" === e.status || "resultsPartial" !== e.status && "generatingQuery" !== e.status && "searching" !== e.status && void(0, o(722371).HB)(e)
            }

            function P(e) {
                return "config" === e.type
            }

            function M(e) {
                return "context" === e.type
            }

            function D(e) {
                let {
                    clientStore: t,
                    threadStore: o
                } = e, n = u(o);
                return n || t.state.configForNewTranscripts
            }

            function E(e) {
                if (e) try {
                    let t = decodeURIComponent(e),
                        n = JSON.parse(t);
                    if (!(null != n && n.type) || ! function(e) {
                            if (!e || !e.type) return !1;
                            switch (e.type) {
                                case "search":
                                    if (null === o(465862).Sh.validator(e)) return !0;
                                    return !1;
                                case "workflow":
                                    return !0;
                                case "council-chat":
                                    if (function(e) {
                                            if (!(0, o(722371).Gv)(e)) return !1;
                                            let t = e.type,
                                                n = e.members;
                                            return "council-chat" === t && !!Array.isArray(n) && 0 !== n.length && !!n.every(i) && (e.type, !0)
                                        }(e)) return !0;
                                    return !1;
                                default:
                                    return !1
                            }
                        }(n)) return;
                    return n
                } catch {
                    return
                }
            }

            function F(e) {
                return !e || 0 === r({
                    clientStore: o(57168).defaultClientAIChatStore,
                    threadStore: e
                }).steps.length
            }

            function N(e) {
                return !!e && r({
                    clientStore: o(57168).defaultClientAIChatStore,
                    threadStore: e
                }).steps.some(e => (0, o(588831).z5)(e) || "agent-trigger" === e.type || "agent-inference" === e.type)
            }

            function U(e) {
                var t;
                let {
                    transcript: n
                } = e, i = n.findLast(e => "context" === e.type);
                return !!i && (i.value.collectionViewBlockId ? ? i.value.blockId) !== (null == (t = o(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.id)
            }
        },
        253700: (e, t, o) => {
            o.d(t, {
                L: () => n
            });
            let n = o(969475).literals("almond-croissant-high", "almond-croissant-low", "almond-croissant-max", "almond-croissant-medium", "anthropic-haiku-4.5", "anthropic-haiku-4.5-thinking", "anthropic-opus", "anthropic-opus-4", "anthropic-opus-4-thinking", "anthropic-opus-4.1", "anthropic-opus-4.1-thinking", "anthropic-sonnet-3.7", "anthropic-sonnet-3.7-thinking", "anthropic-sonnet-4", "anthropic-sonnet-4-thinking", "anthropic-sonnet-alt", "anthropic-sonnet-alt-no-thinking", "anthropic-sonnet-alt-thinking", "anyscale-gpt-oss-safeguard-20b", "apple-danish", "avocado-froyo-high", "avocado-froyo-low", "avocado-froyo-max", "avocado-froyo-medium", "baseten-kimi-k2.5", "bedrock-anthropic-sonnet-3.7", "bedrock-nova-lite", "bedrock-nova-micro", "bedrock-nova-pro", "cerebras-deepseek-r1-distill-llama-70b", "cerebras-gpt-oss-120b", "cerebras-llama3.1-8b", "cerebras-llama3.3-70b", "cinder-kite", "custom-anthropic-slot-1", "custom-anthropic-slot-2", "custom-anthropic-slot-3", "custom-anthropic-slot-4", "custom-anthropic-slot-5", "custom-openai-slot-1", "custom-openai-slot-2", "custom-openai-slot-3", "custom-openai-slot-4", "custom-openai-slot-5", "default", "fireworks-deepseek-r1", "fireworks-deepseek-r1-0528", "fireworks-deepseek-v3", "fireworks-ft-router-101", "fireworks-ft-router-102", "fireworks-glm-5", "fireworks-gpt-oss-120b", "fireworks-gpt-oss-20b", "fireworks-gpt-oss-safeguard-120b", "fireworks-kimi-k2", "fireworks-kimi-k2.5", "fireworks-llama-8b-finetune-v07-p50-cru6bgc4", "fireworks-llama3-70b", "fireworks-llama3.1-405b", "fireworks-llama3.1-70b", "fireworks-llama3.1-8b", "fireworks-llama3.3-70b", "fireworks-llama3.3-70b-dedicated", "fireworks-llama3.3-70b-dedicated-multiregion", "fireworks-minimax-m2.5", "fireworks-mixtral-22b", "fireworks-mixtral-7b", "galette", "galette-low-thinking", "galette-medium-thinking", "gateau-roule", "gateau-roule-low-thinking", "gemini-flash", "gemini-pro", "gingerbread", "gpt-5.1-codex", "gpt-5.1-codex-max", "gpt-5.2-codex", "gpt-5.3-codex", "groq-gemma-7b-it", "groq-gemma2-9b-it", "groq-llama-70b", "groq-llama-8b", "groq-mixtral", "oatmeal-cake", "oatmeal-cookie", "oatmeal-cookie-high-thinking", "oatmeal-cookie-medium-thinking", "old-fashioned-donut", "openai-chatgpt-4o-latest", "openai-gpt-4.1", "openai-gpt-4.1-mini", "openai-gpt-4.1-nano", "openai-gpt-4o", "openai-gpt-4o-mini", "openai-gpt-5-mini", "openai-gpt-5-nano", "openai-o1", "openai-o1-mini", "openai-o3", "openai-o3-mini", "openai-o4-mini", "openai-turbo", "openai-turbo-10", "openai-turbo-8", "openai-turbo-minimal-thinking", "openai-turbo-thinking", "orange-tart", "orange-tart-minimal-thinking", "oregon-grape-high", "oregon-grape-low", "oregon-grape-medium", "oreo-cheesecake", "otaheite-apple-high", "otaheite-apple-low", "otaheite-apple-medium", "oval-kumquat", "oval-kumquat-high", "oval-kumquat-medium", "pi-anthropic-opus-4.6", "pi-anthropic-sonnet-4.6", "pi-fireworks-glm-5", "pi-gemini-3.1-pro", "pi-openai-gpt-5.2", "vertex-gemini-1.5-flash", "vertex-gemini-1.5-pro", "vertex-gemini-2.0-flash", "vertex-gemini-2.5-flash", "vertex-gemini-2.5-pro")
        },
        465862: (e, t, o) => {
            o.d(t, {
                LI: () => s,
                zu: () => i,
                Gy: () => l,
                Sh: () => a,
                zp: () => r
            });
            let n = o(969475).union([o(969475).object({
                required: {
                    type: o(969475).literals("asana", "box", "confluence", "discord", "github", "gmail", "google-calendar", "google-drive", "jira", "linear", "microsoft-teams", "notion-calendar", "notion-mail", "outlook", "salesforce", "sharepoint", "slack")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("ai-knowledge")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    collectionId: o(969475).uuid(),
                    pageId: o(969475).uuid(),
                    type: o(969475).literal("collection")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    pageId: o(969475).uuid(),
                    type: o(969475).literal("page")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("custom")
                },
                optional: {
                    customConnectorId: o(969475).string(),
                    displayName: o(969475).string(),
                    thirdPartyId: o(969475).string()
                }
            }), o(969475).object({
                required: {
                    type: o(969475).literal("everything")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("helpdocs")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("labeler")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("notion-none")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("notion")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    siteId: o(969475).uuid(),
                    type: o(969475).literal("site")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("slackbot")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    teamId: o(969475).uuid(),
                    type: o(969475).literal("teamspace")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("universal-none")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("universal-workspace")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("web")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("workspace")
                },
                optional: {}
            })]);
            o(969475).union([o(969475).object({
                required: {
                    type: o(969475).literals("asana", "box", "confluence", "discord", "github", "gmail", "google-calendar", "google-drive", "jira", "linear", "microsoft-teams", "notion-calendar", "notion-mail", "outlook", "salesforce", "sharepoint", "slack")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("ai-knowledge")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    collectionId: o(969475).uuid(),
                    pageId: o(969475).uuid(),
                    type: o(969475).literal("collection")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    pageId: o(969475).uuid(),
                    type: o(969475).literal("page")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("custom")
                },
                optional: {
                    customConnectorId: o(969475).string(),
                    displayName: o(969475).string(),
                    thirdPartyId: o(969475).string()
                }
            }), o(969475).object({
                required: {
                    type: o(969475).literal("everything")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("googleDrive")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("helpdocs")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("labeler")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("notion-none")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("notion")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    siteId: o(969475).uuid(),
                    type: o(969475).literal("site")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("slackbot")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    teamId: o(969475).uuid(),
                    type: o(969475).literal("teamspace")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("universal-none")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("universal-workspace")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("web")
                },
                optional: {}
            }), o(969475).object({
                required: {
                    type: o(969475).literal("workspace")
                },
                optional: {}
            })]);
            let i = o(969475).object({
                    required: {
                        type: o(969475).literal("markdown-chat")
                    },
                    optional: {
                        model: o(253700).L
                    }
                }),
                a = o(969475).object({
                    required: {
                        scopeForNextSearch: n,
                        type: o(969475).literal("search")
                    },
                    optional: {
                        filtersForNextSearch: o(969475).object({
                            required: {},
                            optional: {
                                ancestorsFilter: o(969475).array(o(969475).string()),
                                createdByFilter: o(969475).array(o(969475).uuid()),
                                dateRangeFilter: o(969475).object({
                                    required: {},
                                    optional: {
                                        endDate: o(969475).string(),
                                        startDate: o(969475).string()
                                    }
                                }),
                                excludeCreatedByFilter: o(969475).array(o(969475).uuid()),
                                teamspacesFilter: o(969475).array(o(969475).string()),
                                titleOnlyFilter: o(969475).boolean()
                            }
                        }),
                        searchSessionId: o(969475).string(),
                        useWebSearch: o(969475).boolean()
                    }
                }),
                r = o(969475).object({
                    required: {
                        type: o(969475).literal("workflow")
                    },
                    optional: {
                        addCitationData: o(969475).boolean(),
                        agentFollowupVariation: o(969475).union([o(969475).tuple([o(969475).literal("button"), o(969475).literal("default")]), o(969475).tuple([o(969475).literal("button"), o(969475).literal("nudge")]), o(969475).tuple([o(969475).literal("default")]), o(969475).tuple([o(969475).literal("nudge")])]),
                        agentShortUpdatePageResult: o(969475).boolean(),
                        agentSource: o(969475).literal("onboarding"),
                        availableConnectors: o(969475).array(o(969475).literals("asana", "box", "confluence", "custom", "discord", "github", "gmail", "google-calendar", "google-drive", "jira", "linear", "microsoft-teams", "notion-calendar", "notion-mail", "outlook", "salesforce", "sharepoint", "slack")),
                        customConnectorInfo: o(969475).array(o(969475).object({
                            required: {
                                name: o(969475).string(),
                                thirdPartyId: o(969475).string()
                            },
                            optional: {
                                description: o(969475).string()
                            }
                        })),
                        databaseAgentConfigMode: o(969475).boolean(),
                        disableSubagentSpawning: o(969475).boolean(),
                        enableAgentAskSurvey: o(969475).boolean(),
                        enableAgentAutomations: o(969475).boolean(),
                        enableAgentCardCustomization: o(969475).boolean(),
                        enableAgentCreateDbTemplate: o(969475).boolean(),
                        enableAgentDashboards: o(969475).boolean(),
                        enableAgentDiffs: o(969475).boolean(),
                        enableAgentGenerateImage: o(969475).boolean(),
                        enableAgentIntegrations: o(969475).boolean(),
                        enableAgentQueryDataSources: o(969475).boolean(),
                        enableAgentSupportPropertyReorder: o(969475).boolean(),
                        enableAgentThreadTools: o(969475).boolean(),
                        enableAgentUpdatePagePatch: o(969475).boolean(),
                        enableAgentViewNotificationsTool: o(969475).boolean(),
                        enableCodegenIntegration: o(969475).boolean(),
                        enableCrdtOperations: o(969475).boolean(),
                        enableCreateAndRunThread: o(969475).boolean(),
                        enableCsvAttachmentSupport: o(969475).boolean(),
                        enableCustomAgents: o(969475).boolean(),
                        enableDatabaseAgents: o(969475).boolean(),
                        enableExperimentalIntegrations: o(969475).boolean(),
                        enableMailAgentMultiProviderSupport: o(969475).boolean(),
                        enableMailDraftToAllConnectedClients: o(969475).boolean(),
                        enableMailExplicitToolCalls: o(969475).boolean(),
                        enableMarkdownVNext: o(969475).boolean(),
                        enableQueryCalendar: o(969475).boolean(),
                        enableQueryMail: o(969475).boolean(),
                        enableRunAgentTool: o(969475).boolean(),
                        enableScriptAgent: o(969475).boolean(),
                        enableScriptAgentAdvanced: o(969475).boolean(),
                        enableScriptAgentCalendar: o(969475).boolean(),
                        enableScriptAgentCustomToolCalling: o(969475).boolean(),
                        enableScriptAgentGoogleDriveInCustomAgent: o(969475).boolean(),
                        enableScriptAgentIntegrations: o(969475).boolean(),
                        enableScriptAgentMail: o(969475).boolean(),
                        enableScriptAgentMcpServers: o(969475).boolean(),
                        enableScriptAgentSearchConnectorsInCustomAgent: o(969475).boolean(),
                        enableScriptAgentSlack: o(969475).boolean(),
                        enableSoftwareFactoryPage: o(969475).boolean(),
                        enableSpeculativeSearch: o(969475).boolean(),
                        enableSystemPromptAsPage: o(969475).boolean(),
                        enableTpmThrottle: o(969475).boolean(),
                        enableUpdatePageAutofixer: o(969475).boolean(),
                        enableUpdatePageOrderUpdates: o(969475).boolean(),
                        enableUserSessionContext: o(969475).boolean(),
                        ephemeralInstructions: o(969475).array(o(969475).tuple([o(969475).string()])),
                        factoryInstructionsPageId: o(969475).uuid(),
                        hasMailTrigger: o(969475).boolean(),
                        isCustomAgent: o(969475).boolean(),
                        isCustomAgentBuilder: o(969475).boolean(),
                        isDatabaseAgent: o(969475).boolean(),
                        isMeetingNotesMode: o(969475).boolean(),
                        isMobile: o(969475).boolean(),
                        isOnboardingAgent: o(969475).boolean(),
                        isThreadStartedByAdmin: o(969475).boolean(),
                        mailTriggerTypes: o(969475).array(o(969475).literals("mail.email.received", "mail.email.receivedorsent", "mail.email.sent", "mail.label.applied")),
                        memoryDatabasePageId: o(969475).uuid(),
                        model: o(969475).literals("almond-croissant-high", "almond-croissant-low", "almond-croissant-max", "almond-croissant-medium", "anthropic-haiku-4.5", "anthropic-haiku-4.5-thinking", "anthropic-opus-4", "anthropic-opus-4-thinking", "anthropic-opus-4.1", "anthropic-opus-4.1-thinking", "anthropic-sonnet-3.7", "anthropic-sonnet-3.7-thinking", "anthropic-sonnet-4", "anthropic-sonnet-4-thinking", "anthropic-sonnet-alt", "anthropic-sonnet-alt-no-thinking", "anthropic-sonnet-alt-thinking", "apple-danish", "avocado-froyo-high", "avocado-froyo-low", "avocado-froyo-max", "avocado-froyo-medium", "baseten-kimi-k2.5", "cinder-kite", "custom-anthropic-slot-1", "custom-anthropic-slot-2", "custom-anthropic-slot-3", "custom-anthropic-slot-4", "custom-anthropic-slot-5", "custom-openai-slot-1", "custom-openai-slot-2", "custom-openai-slot-3", "custom-openai-slot-4", "custom-openai-slot-5", "fireworks-glm-5", "fireworks-kimi-k2.5", "fireworks-minimax-m2.5", "galette", "galette-low-thinking", "galette-medium-thinking", "gateau-roule", "gateau-roule-low-thinking", "gemini-flash", "gemini-pro", "gingerbread", "gpt-5.1-codex", "gpt-5.1-codex-max", "gpt-5.2-codex", "gpt-5.3-codex", "oatmeal-cake", "oatmeal-cookie", "oatmeal-cookie-high-thinking", "oatmeal-cookie-medium-thinking", "openai-gpt-4.1", "openai-gpt-4.1-mini", "openai-gpt-5-mini", "openai-gpt-5-nano", "openai-turbo", "openai-turbo-minimal-thinking", "openai-turbo-thinking", "orange-tart", "orange-tart-minimal-thinking", "oregon-grape-high", "oregon-grape-low", "oregon-grape-medium", "otaheite-apple-high", "otaheite-apple-low", "otaheite-apple-medium", "oval-kumquat", "oval-kumquat-high", "oval-kumquat-medium", "pi-anthropic-opus-4.6", "pi-anthropic-sonnet-4.6", "pi-fireworks-glm-5", "pi-gemini-3.1-pro", "pi-openai-gpt-5.2"),
                        modelFromUser: o(969475).boolean(),
                        onboardingAgentVersion: o(969475).literals("school", "work"),
                        oracleThreadType: o(969475).literals("daily_brief", "inbox_zero", "meeting_notes", "onboarding"),
                        scriptAgentConfigResolved: o(969475).boolean(),
                        searchScopes: o(969475).array(n),
                        searchSessionId: o(969475).string(),
                        trustedUrlGlobs: o(969475).array(o(969475).string()),
                        useComputer: o(969475).boolean(),
                        useCustomAgentDraft: o(969475).boolean(),
                        useMinimalTranscript: o(969475).boolean(),
                        useReadOnlyMode: o(969475).boolean(),
                        useRulePrioritization: o(969475).boolean(),
                        useSearchToolV2: o(969475).boolean(),
                        useWebSearch: o(969475).boolean(),
                        use_draft_actor_pointer: o(969475).boolean(),
                        workflowId: o(969475).string(),
                        workflowRunId: o(969475).string(),
                        writerMode: o(969475).boolean(),
                        yoloMode: o(969475).boolean()
                    }
                }),
                l = o(969475).object({
                    required: {
                        type: o(969475).literal("researcher")
                    },
                    optional: {
                        searchScope: n,
                        useWebSearch: o(969475).boolean()
                    }
                }),
                s = o(969475).object({
                    required: {},
                    optional: {
                        compactThreshold: o(969475).number(),
                        createSummaryThreshold: o(969475).number(),
                        recentSearchToolResultsToKeep: o(969475).number(),
                        updateSummaryInterval: o(969475).number()
                    }
                })
        },
        588831: (e, t, o) => {
            function n(e) {
                return "user" === e.type || "user-injected" === e.type || "agent-message" === e.type || "agent-prebuilt-prompt" === e.type
            }

            function i(e) {
                var t;
                return "agent-prebuilt-prompt" === e.type && (null == (t = e.value) ? void 0 : t.length) > 0
            }

            function a(e) {
                return e.findLast(i)
            }
            o.d(t, {
                n: () => a,
                xI: () => i,
                z5: () => n
            }), o(410838)
        },
        730127: (e, t, o) => {
            function n(e) {
                return "notion" !== e.type || "page" === e.citationLevel
            }

            function i(e, t) {
                if ("block" === e.type || "properties" === e.type) return;
                if ("page" === e.type) {
                    var n;
                    let i = (null == (n = e.blocks) ? void 0 : n.map(n => ({
                        type: "notion",
                        citationLevel: "block",
                        store: o(970831).B.createChildStore(t, {
                            table: o(832375).evP,
                            id: n.id,
                            spaceId: t.id
                        }),
                        id: n.id,
                        pageId: e.pageId ? ? e.id,
                        title: e.title,
                        path: e.path,
                        text: n.text,
                        lastEdited: e.lastEdited,
                        badges: void 0,
                        highlight: void 0
                    }))) ? ? [];
                    return [{
                        type: "notion",
                        citationLevel: e.type,
                        store: o(970831).B.createChildStore(t, {
                            table: o(832375).evP,
                            id: e.id,
                            spaceId: t.id
                        }),
                        id: e.id,
                        pageId: e.pageId ? ? e.id,
                        title: e.title,
                        authorName: e.authorName,
                        path: e.path,
                        text: e.text,
                        lastEdited: e.lastEdited,
                        badges: e.badges,
                        highlight: e.highlight
                    }, ...i]
                }
                let i = o(683053).tD.parseAssistantHref(e.id);
                if (i) {
                    if ("helpdoc" === e.type) {
                        if ("helpdoc" !== i.type) throw Error(`Expected helpdocs result, but got ${i.type}`);
                        return [{
                            type: "helpdocs",
                            href: e.id,
                            id: e.id,
                            title: e.title,
                            text: (0, o(444700).Mw)(e.text),
                            lastEdited: e.lastEdited,
                            url: i.url
                        }]
                    } else if ("helpdoc-section" === e.type) {
                        if ("helpdoc-section" !== i.type) throw Error(`Expected helpdoc-section result, but got ${i.type}`);
                        return [{
                            type: "helpdoc-section",
                            href: e.id,
                            id: e.id,
                            parentPageHref: i.parentPageHref,
                            title: e.title,
                            text: (0, o(444700).Mw)(e.text),
                            lastEdited: e.lastEdited,
                            url: i.url
                        }]
                    } else if ("webpage" === e.type) {
                        if ("webpage" !== i.type) throw Error(`Expected webpage result, but got ${i.type}`);
                        return [{
                            type: "webpage",
                            href: e.id,
                            id: e.id,
                            title: e.title,
                            text: (0, o(444700).Mw)(e.text),
                            lastEdited: e.lastEdited,
                            url: i.url,
                            domain: new URL(i.url).origin
                        }]
                    } else if ((0, o(281708).SC)(e.type)) return (0, o(600923).K)(e.type).generateRenderableResults({
                        result: e,
                        parsedHref: i
                    })
                }
            }

            function a(e, t) {
                let o = i(e, t);
                return o ? o.filter(n) : []
            }

            function r(e) {
                let {
                    result: t,
                    environment: n
                } = e;
                if ("notion" === t.type) {
                    let e = n.RouterStore.state.route;
                    return "chat" === e.name ? (0, o(366367).EY)({
                        isMobile: o(986939).A.isMobile,
                        currentRoute: e,
                        pageId: t.store.id,
                        pageVisitSource: o(254656).y8.AIQna
                    }) : (0, o(483227).Ay)({
                        store: t.store,
                        fullyQualified: !1,
                        pageVisitSource: o(254656).y8.AIQna
                    })
                }
                return "slack" === t.type ? (0, o(313168).mQ)({ ...t
                }) : "helpdocs" === t.type || "helpdoc-section" === t.type || "webpage" === t.type || (0, o(281708).SC)(t.type) ? t.url : void(0, o(722371).HB)(t.type)
            }

            function l(e, t) {
                var o;
                return null == (o = e.find(e => e.key === t || "messages" in e.result && e.result.messages.find(e => e.messageId === t))) ? void 0 : o.result
            }
            o.d(t, {
                OA: () => r,
                SF: () => a,
                vs: () => l,
                y$: () => i
            }), o(16280), o(898992), o(354520), o(672577), o(581454), o(814603), o(147566), o(198721)
        }
    }
]);