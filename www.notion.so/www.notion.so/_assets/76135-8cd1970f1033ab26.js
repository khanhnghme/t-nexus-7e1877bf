"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [76135], {
        388400: (e, t, n) => {
            n.d(t, {
                Bu: () => l,
                I8: () => g,
                qw: () => _
            }), n(898992), n(354520), n(803949);
            let a = /[\u4E00-\u9FA5]/g,
                o = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g,
                r = /[\u3041-\u3096\u30A0-\u30FF\u31F0-\u31FF\u3220-\u3243\u3280-\u337F]/g,
                i = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g,
                u = /[-./\\()"'''""，。、·～；,;<>~!@#$%^&*|+=[\]{}`~?:\s]/u;

            function _(e) {
                return (0, n(381453).oE)(e.split(u))
            }

            function g(e) {
                return "none" === l(e) ? _(e).length : e.length
            }

            function l(e, t) {
                let n = !!e.match(i);
                return e.match(a) || e.match(o) || n ? n ? "ko" : e.match(r) || "ja-JP" === t ? "ja" : "zh" : "none"
            }
        },
        388647: (e, t, n) => {
            function a(e) {
                return "on" === function(e) {
                    let {
                        disableExposureLogging: t
                    } = e;
                    return n(218744).default.checkGate({
                        gateName: "force_enable_script_agent",
                        disableExposureLogging: t
                    }) ? "on" : n(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_script_agent",
                        defaultGroup: "control",
                        disableExposureLogging: t,
                        enableEventTrailLogging: !0
                    })
                }(e)
            }

            function o(e = {}) {
                let t = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => a({
                    environment: t,
                    disableExposureLogging: e.disableExposureLogging
                }), [t, e.disableExposureLogging])
            }
            n.d(t, {
                k: () => o,
                p: () => a
            })
        },
        922900: (e, t, n) => {
            n.d(t, {
                getWorkflowAgentConfig: () => o
            }), n(898992), n(430670), n(737550);
            let a = new(n(245541)).R({
                key: "agent_memory_database_page",
                namespace: n(274919).Bq,
                important: !0,
                trackingType: "preference"
            });

            function o(e) {
                let t, {
                        isOnboardingAgent: o,
                        searchScopes: i,
                        searchSessionId: u,
                        useWebSearch: _,
                        useComputer: g,
                        yoloMode: l,
                        useReadOnlyMode: s,
                        model: c,
                        isCustomAgent: d,
                        isCustomAgentBuilder: p,
                        workflowId: f,
                        modelFromUser: m,
                        writerMode: b,
                        useRulePrioritization: A,
                        useCustomAgentDraft: h,
                        useDraftActorPointer: I,
                        ephemeralInstructions: M,
                        databaseAgentConfigMode: v,
                        environment: D,
                        spaceId: V,
                        spaceStore: C
                    } = e,
                    y = n(886556).z.isZeroRetentionEnabled(),
                    S = (0, n(612608).MI)((0, n(612608).VD)("custom_agents"), r),
                    k = (0, n(612608).MI)((0, n(612608).VD)("agent_automations"), r),
                    w = (0, n(612608).MI)((0, n(612608).VD)("agent_integrations"), r),
                    F = (0, n(612608).MI)((0, n(612608).VD)("experimental_integrations"), r),
                    x = (0, n(612608).MI)((0, n(612608).VD)("database_agents"), r),
                    E = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_advanced"), r),
                    G = (0, n(388647).p)({
                        environment: D
                    }),
                    T = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_search_connectors"), r),
                    R = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_google_drive"), r),
                    q = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_slack"), r),
                    z = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_mcp_servers"), r),
                    P = (0, n(612608).MI)((0, n(612608).VD)("script_agent_mail_module_available"), r),
                    B = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_custom_tool_calling"), r),
                    L = r("agent_enable_create_thread"),
                    N = r("software_factory_page"),
                    O = r("enable_script_agent_writer"),
                    j = r("database_agents_on_script_agent"),
                    W = (!v || j) && (!b || O),
                    J = (0, n(612608).MI)((0, n(612608).VD)("agent_user_session_context"), r),
                    K = r("agent_crdt_operations"),
                    U = (0, n(612608).MI)((0, n(612608).VD)("agent_card_customization"), r),
                    X = (0, n(612608).MI)((0, n(612608).VD)("agent_system_prompt_as_page"), r),
                    Y = (0, n(612608).MI)((0, n(612608).VD)("agent_view_notifications_tool_enabled"), r),
                    Z = (0, n(328765).S)(),
                    $ = C ? ? (void 0 === V || (null == Z ? void 0 : Z.id) === V ? Z : void 0),
                    H = r("sams_specials"),
                    Q = r("ai_image_generation") && !H && ((null == $ ? void 0 : $.isAiImageGenerationEnabledOnSpace()) ? ? !0),
                    ee = (0, n(612608).MI)((0, n(612608).VD)("agent_diffs"), r),
                    et = (0, n(612608).MI)((0, n(612608).VD)("agent_update_page_patch"), r),
                    en = (0, n(612608).MI)((0, n(612608).VD)("agent_create_db_template"), r),
                    ea = r("agent_search_tool_v2"),
                    eo = r("agent_update_page_autofixer"),
                    er = r("agent_markdown_vnext"),
                    ei = r("agent_update_page_order_updates"),
                    eu = r("agent_support_property_reorder"),
                    e_ = r("agent_short_update_page_result"),
                    eg = n(218744).default.getConfig({
                        configName: "agent_writer_model_config"
                    }).defaultModel,
                    el = a.getState(),
                    es = null == el ? void 0 : el.pageId,
                    ec = b || d ? void 0 : function() {
                        switch (n(218744).default.getEligibleGroup({
                            experimentId: "ai_product_retention_agent_follow_ups",
                            defaultGroup: "control"
                        })) {
                            case "button_nudge":
                                return ["button", "nudge"];
                            case "button_control":
                                return ["button", "default"];
                            case "nudge":
                                return ["nudge"];
                            default:
                                return
                        }
                    }(),
                    ed = "on" === n(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_agent_speculative_search",
                        defaultGroup: "control"
                    }),
                    ep = (0, n(876688).wd)(),
                    ef = ep.some(e => (0, n(281708).yY)(e)),
                    em = r("mail_explicit_tool_calls"),
                    eb = r("outlook_custom_agent_email_connector"),
                    eA = r("agent_query_calendar_tool") && ef,
                    eh = ep.some(e => (0, n(281708).Xs)(e) && "outlook" !== e),
                    eI = r("agent_query_mail_tool") && eh,
                    eM = (0, n(828294).a)("agent_rule_priority_hierarchy"),
                    ev = r("agent_ask_survey");
                return t = !f && (s ? ? !1), {
                    type: "workflow",
                    enableAgentAutomations: k,
                    enableAgentIntegrations: w,
                    enableCustomAgents: S,
                    enableExperimentalIntegrations: F,
                    enableAgentViewNotificationsTool: Y,
                    enableAgentDiffs: ee,
                    enableAgentUpdatePagePatch: et,
                    enableAgentCreateDbTemplate: en,
                    enableCsvAttachmentSupport: !0,
                    enableDatabaseAgents: x,
                    enableAgentThreadTools: !1,
                    enableRunAgentTool: !1,
                    enableCrdtOperations: K,
                    enableAgentCardCustomization: U,
                    enableSystemPromptAsPage: X,
                    enableUserSessionContext: J,
                    enableScriptAgentAdvanced: !!W && E,
                    enableScriptAgent: !!W && G,
                    enableScriptAgentSearchConnectorsInCustomAgent: !!W && !!d && T,
                    enableScriptAgentGoogleDriveInCustomAgent: !!W && !!d && R,
                    enableScriptAgentSlack: !!W && q,
                    enableScriptAgentMcpServers: !!W && z,
                    enableScriptAgentMail: !!W && P,
                    enableScriptAgentCalendar: !!W && G,
                    enableScriptAgentCustomToolCalling: !!W && B,
                    enableCreateAndRunThread: L,
                    enableSoftwareFactoryPage: N,
                    ...d ? {} : {
                        enableAgentGenerateImage: Q
                    },
                    agentFollowupVariation: ec,
                    enableSpeculativeSearch: ed,
                    enableQueryCalendar: eA,
                    enableQueryMail: eI,
                    enableMailExplicitToolCalls: em,
                    enableMailAgentMultiProviderSupport: eb,
                    useRulePrioritization: A ? ? eM,
                    memoryDatabasePageId: es,
                    workflowId: f,
                    availableConnectors: ep,
                    customConnectorInfo: n(501761).qu.state.customConnectors.flatMap(e => "active" === e.status && e.displayName ? [{
                        name: e.displayName,
                        thirdPartyId: e.thirdPartyId,
                        description: e.description
                    }] : []),
                    searchScopes: b ? [] : i ? ? n(425749).R2,
                    useSearchToolV2: ea,
                    useWebSearch: !b && !y && (void 0 === _ || _),
                    useComputer: g ? ? !0,
                    yoloMode: l ? ? !1,
                    useReadOnlyMode: t,
                    writerMode: !!b,
                    model: b ? eg : c,
                    searchSessionId: u,
                    modelFromUser: !b && (m ? ? void 0 !== c),
                    isCustomAgent: !!d,
                    isCustomAgentBuilder: !!p,
                    useCustomAgentDraft: !!h,
                    use_draft_actor_pointer: !!I,
                    enableUpdatePageAutofixer: eo,
                    enableMarkdownVNext: er,
                    enableUpdatePageOrderUpdates: ei,
                    enableAgentSupportPropertyReorder: eu,
                    agentShortUpdatePageResult: e_,
                    ephemeralInstructions: M,
                    ...b || o || null !== e.onboardingAgentVersion ? {} : {
                        enableAgentAskSurvey: ev
                    },
                    databaseAgentConfigMode: !!v,
                    isOnboardingAgent: !!o,
                    onboardingAgentVersion: e.onboardingAgentVersion,
                    isMobile: n(986939).A.isMobile
                }
            }

            function r(e) {
                return n(218744).default.checkGate({
                    gateName: e
                })
            }
        }
    }
]);