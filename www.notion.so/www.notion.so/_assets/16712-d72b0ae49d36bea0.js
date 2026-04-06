"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [16712], {
        16712: (e, t, a) => {
            a.d(t, {
                Ad: () => i,
                BI: () => p,
                Hg: () => u,
                Mh: () => s,
                UD: () => l,
                Z0: () => o,
                kw: () => d,
                ve: () => r,
                yD: () => g
            }), a(944114), a(898992), a(672577), a(737550);
            var n = () => a(722371);

            function l(e, t, n) {
                let {
                    configStep: l,
                    experimentService: o,
                    userId: r,
                    spaceId: i
                } = e;
                for (let e of n || [])
                    if (!l[e]) return !1;
                return o.checkGate({
                    actor: r ? {
                        id: r,
                        table: "notion_user"
                    } : a(810016).S,
                    customIDs: {
                        spaceId: i
                    },
                    gateName: t
                })
            }

            function o(e) {
                let {
                    workflowData: t,
                    publishedWorkflowData: a
                } = e;
                return function(...e) {
                    let t = {};
                    for (let r of e)
                        if (r) {
                            for (let e of (0, n().objectKeys)(r))
                                if ("enableScriptAgent" === e || "enableScriptAgentAdvanced" === e || "enableScriptAgentSearchConnectorsInCustomAgent" === e || "enableScriptAgentGoogleDriveInCustomAgent" === e || "enableScriptAgentMail" === e || "enableScriptAgentCalendar" === e || "enableScriptAgentSlack" === e || "enableScriptAgentMcpServers" === e || "useComputer" === e || "yoloMode" === e) {
                                    var a, l, o;
                                    let n = r[e];
                                    a = t, l = e, o = n, "enableScriptAgent" === l ? "boolean" == typeof o ? a.enableScriptAgent = o : delete a.enableScriptAgent : "enableScriptAgentAdvanced" === l ? "boolean" == typeof o ? a.enableScriptAgentAdvanced = o : delete a.enableScriptAgentAdvanced : "enableScriptAgentSearchConnectorsInCustomAgent" === l ? "boolean" == typeof o ? a.enableScriptAgentSearchConnectorsInCustomAgent = o : delete a.enableScriptAgentSearchConnectorsInCustomAgent : "enableScriptAgentGoogleDriveInCustomAgent" === l ? "boolean" == typeof o ? a.enableScriptAgentGoogleDriveInCustomAgent = o : delete a.enableScriptAgentGoogleDriveInCustomAgent : "enableScriptAgentSlack" === l ? "boolean" == typeof o ? a.enableScriptAgentSlack = o : delete a.enableScriptAgentSlack : "enableScriptAgentMcpServers" === l ? "boolean" == typeof o ? a.enableScriptAgentMcpServers = o : delete a.enableScriptAgentMcpServers : "enableScriptAgentMail" === l ? "boolean" == typeof o ? a.enableScriptAgentMail = o : delete a.enableScriptAgentMail : "enableScriptAgentCalendar" === l ? "boolean" == typeof o ? a.enableScriptAgentCalendar = o : delete a.enableScriptAgentCalendar : "useComputer" === l ? "boolean" == typeof o ? a.useComputer = o : delete a.useComputer : "yoloMode" === l && ("boolean" == typeof o ? a.yoloMode = o : delete a.yoloMode)
                                }
                        }
                    return (0, n().objectKeys)(t).length > 0 ? t : void 0
                }(null == a ? void 0 : a.config_overrides, null == t ? void 0 : t.config_overrides)
            }

            function r(e, t) {
                let a = {
                        type: "workflow",
                        workflowId: e,
                        isCustomAgent: !0,
                        enableCustomAgents: !0,
                        enableAgentAutomations: !0,
                        enableAgentIntegrations: !0,
                        enableExperimentalIntegrations: !0,
                        enableAgentUpdatePagePatch: null == t ? void 0 : t.enableAgentUpdatePagePatch,
                        agentShortUpdatePageResult: null == t ? void 0 : t.agentShortUpdatePageResult,
                        enableCrdtOperations: null == t ? void 0 : t.enableCrdtOperations,
                        enableTpmThrottle: !0,
                        enableDatabaseAgents: null == t ? void 0 : t.enableDatabaseAgents,
                        isDatabaseAgent: null == t ? void 0 : t.isDatabaseAgent,
                        enableRunAgentTool: (null == t ? void 0 : t.isDatabaseAgent) === !0,
                        enableAgentThreadTools: (null == t ? void 0 : t.isDatabaseAgent) === !0,
                        agentFollowupVariation: void 0,
                        enableAgentCreateDbTemplate: null == t ? void 0 : t.enableAgentCreateDbTemplate,
                        enableMailExplicitToolCalls: null == t ? void 0 : t.enableMailExplicitToolCalls,
                        enableMailAgentMultiProviderSupport: null == t ? void 0 : t.enableMailAgentMultiProviderSupport,
                        enableMailDraftToAllConnectedClients: null == t ? void 0 : t.enableMailDraftToAllConnectedClients,
                        enableCreateAndRunThread: null == t ? void 0 : t.enableCreateAndRunThread,
                        hasMailTrigger: null == t ? void 0 : t.hasMailTrigger,
                        mailTriggerTypes: null == t ? void 0 : t.mailTriggerTypes,
                        yoloMode: (null == t ? void 0 : t.defaultYoloMode) ? ? !1
                    },
                    n = null == t ? void 0 : t.configOverrides;
                return n && (void 0 !== n.enableScriptAgent && (a.enableScriptAgent = n.enableScriptAgent), void 0 !== n.enableScriptAgentAdvanced && (a.enableScriptAgentAdvanced = n.enableScriptAgentAdvanced), void 0 !== n.enableScriptAgentSearchConnectorsInCustomAgent && (a.enableScriptAgentSearchConnectorsInCustomAgent = n.enableScriptAgentSearchConnectorsInCustomAgent), void 0 !== n.enableScriptAgentGoogleDriveInCustomAgent && (a.enableScriptAgentGoogleDriveInCustomAgent = n.enableScriptAgentGoogleDriveInCustomAgent), void 0 !== n.enableScriptAgentSlack && (a.enableScriptAgentSlack = n.enableScriptAgentSlack), void 0 !== n.enableScriptAgentMcpServers && (a.enableScriptAgentMcpServers = n.enableScriptAgentMcpServers), void 0 !== n.enableScriptAgentMail && (a.enableScriptAgentMail = n.enableScriptAgentMail), void 0 !== n.enableScriptAgentCalendar && (a.enableScriptAgentCalendar = n.enableScriptAgentCalendar), void 0 !== n.useComputer && (a.useComputer = n.useComputer), void 0 !== n.yoloMode && (a.yoloMode = n.yoloMode)), a
            }

            function i(e) {
                let t = [{
                        type: "notion"
                    }],
                    n = null == e ? void 0 : e.find(e => "notion" === e.type);
                return (0, a(445568).isWebAccessEnabled)(null == n ? void 0 : n.permissions) && t.push({
                    type: "web"
                }), (0, a(445568).isHelpDocsSearchEnabled)({
                    permissions: null == n ? void 0 : n.permissions,
                    defaultIfMissingExplicitPermission: !1
                }) && t.push({
                    type: "helpdocs"
                }), (null == e ? void 0 : e.some(e => "slack" === e.type)) && t.push({
                    type: "slack"
                }), (null == e ? void 0 : e.some(e => "github" === e.type)) && t.push({
                    type: "github"
                }), (null == e ? void 0 : e.some(e => "jira" === e.type)) && t.push({
                    type: "jira"
                }), (null == e ? void 0 : e.some(e => "linear" === e.type)) && t.push({
                    type: "linear"
                }), (null == e ? void 0 : e.some(e => "salesforce" === e.type)) && t.push({
                    type: "salesforce"
                }), (null == e ? void 0 : e.some(e => "asana" === e.type)) && t.push({
                    type: "asana"
                }), (null == e ? void 0 : e.some(e => "box" === e.type)) && t.push({
                    type: "box"
                }), (null == e ? void 0 : e.some(e => "discord" === e.type)) && t.push({
                    type: "discord"
                }), (null == e ? void 0 : e.some(e => "mail" === e.type)) && t.push({
                    type: "notion-mail"
                }), (null == e ? void 0 : e.some(e => "calendar" === e.type)) && t.push({
                    type: "notion-calendar"
                }), (null == e ? void 0 : e.some(e => "googleDrive" === e.type)) && t.push({
                    type: "google-drive"
                }), (null == e ? void 0 : e.some(e => "microsoftTeams" === e.type)) && t.push({
                    type: "microsoft-teams"
                }), (null == e ? void 0 : e.some(e => "sharepoint" === e.type)) && t.push({
                    type: "sharepoint"
                }), (null == e ? void 0 : e.some(e => "customConnector" === e.type)) && t.push({
                    type: "custom"
                }), t
            }

            function s(e) {
                return (null == e ? void 0 : e.some(e => {
                    var t;
                    return "worker" === e.type && (null == (t = e.state) ? void 0 : t.workerId)
                })) ? ? !1
            }

            function d(e) {
                let {
                    publishedModules: t,
                    draftModules: a
                } = e;
                return t ? ? a ? ? void 0
            }

            function g(e) {
                return (null == e ? void 0 : e.enableScriptAgent) ? ? !1
            }

            function u(e) {
                return (null == e ? void 0 : e.enableScriptAgentAdvanced) ? ? !1
            }

            function p(e) {
                return (null == e ? void 0 : e.type) === "workflow" && e.workflowId && e.isCustomAgent ? e.workflowId : void 0
            }
        },
        612608: (e, t, a) => {
            a.d(t, {
                MI: () => l,
                QT: () => n,
                VD: () => o
            }), a(16280), a(898992), a(737550);
            let n = [{
                featureGates: ["agent_model_picker"],
                id: "agent_model_picker",
                label: "Model picker",
                group: "default"
            }, {
                featureGates: ["ai_agent_token_usage_ring"],
                id: "ai_agent_token_usage_ring",
                label: "Token usage ring",
                group: "default"
            }, {
                featureGates: ["engram_model_picker"],
                id: "engram_model_picker",
                label: "Engram model",
                group: "advanced"
            }, {
                featureGates: ["custom_agents_server"],
                id: "custom_agents",
                label: "Custom agents",
                group: "default"
            }, {
                featureGates: ["agent_automations"],
                id: "agent_automations",
                label: "Automations",
                group: "default"
            }, {
                featureGates: ["agent_enable_view_notifications_tool"],
                id: "agent_view_notifications_tool_enabled",
                label: "Notifications tool",
                group: "default"
            }, {
                featureGates: ["agent_create_dashboard"],
                id: "agent_create_dashboard",
                label: "Dashboards",
                group: "default"
            }, {
                featureGates: ["agent_card_customization"],
                id: "agent_card_customization",
                label: "Card customization",
                group: "default"
            }, {
                featureGates: ["agent_integrations", "workflows_mail_module_available"],
                id: "agent_integrations",
                label: "Integrations",
                group: "default"
            }, {
                featureGates: ["agent_user_session_context"],
                id: "agent_user_session_context",
                label: "User session context",
                group: "default"
            }, {
                featureGates: ["ai_inference_debug_recorder"],
                id: "ai_inference_debug_recorder",
                label: "Log Raw Inference Chunks",
                group: "default"
            }, {
                featureGates: ["agent_diffs"],
                id: "agent_diffs",
                label: "Agent diffs",
                group: "advanced"
            }, {
                featureGates: ["agent_short_update_page_result"],
                id: "agent_short_update_page_result",
                label: "Update page result as patches",
                group: "advanced"
            }, {
                featureGates: ["agent_update_page_patch"],
                id: "agent_update_page_patch",
                label: "Agent update page patch",
                group: "advanced"
            }, {
                featureGates: ["agent_diffs_undo_button"],
                id: "agent_diffs_undo_button",
                label: "Agent diffs undo button",
                group: "default"
            }, {
                featureGates: ["agent_compact_deletion_markers"],
                id: "agent_compact_deletion_markers",
                label: "Compact deletion markers",
                group: "advanced"
            }, {
                featureGates: ["agent_create_db_template"],
                id: "agent_create_db_template",
                label: "Create database template",
                group: "advanced"
            }, {
                featureGates: ["workflows_github_module_available"],
                id: "experimental_integrations",
                label: "Experimental integrations",
                group: "advanced"
            }, {
                featureGates: ["agent_system_prompt_as_page"],
                id: "agent_system_prompt_as_page",
                label: "System Prompt as Page",
                group: "advanced"
            }, {
                featureGates: ["agent_script_agent_advanced"],
                id: "agent_script_agent_advanced",
                label: "Agent 2.0 (advanced)",
                group: "default"
            }, {
                featureGates: ["agent_script_agent_search_connectors"],
                id: "agent_script_agent_search_connectors",
                label: "Agent 2.0 (search connectors in custom agents)",
                group: "default"
            }, {
                featureGates: ["agent_script_agent_google_drive"],
                id: "agent_script_agent_google_drive",
                label: "Agent 2.0 (Google Drive in custom agents)",
                group: "default"
            }, {
                featureGates: ["agent_script_agent_slack"],
                id: "agent_script_agent_slack",
                label: "Agent 2.0 (Slack in personal agent)",
                group: "default"
            }, {
                featureGates: ["script_agent_mcp_server"],
                id: "agent_script_agent_mcp_servers",
                label: "Agent 2.0 (MCP servers in personal agent)",
                group: "default"
            }, {
                featureGates: ["script_agent_mail_module_available"],
                id: "script_agent_mail_module_available",
                label: "Agent 2.0 (mail)",
                group: "default"
            }, {
                featureGates: ["database_agents"],
                id: "database_agents",
                label: "Database agents",
                group: "advanced"
            }, {
                featureGates: ["ai_data_enrichment"],
                id: "ai_data_enrichment",
                label: "AI Data Enrichment",
                group: "advanced"
            }, {
                featureGates: ["agent_in_person_property"],
                id: "agent_in_person_property",
                label: "Agent in Person Property",
                group: "advanced"
            }, {
                featureGates: ["future_ai_interfaces"],
                id: "future_ai_interfaces",
                label: "Future AI Interfaces",
                group: "advanced"
            }, {
                featureGates: ["council_chat_enabled"],
                id: "council_chat",
                label: "Council chat",
                group: "advanced"
            }, {
                featureGates: ["use_parallel_for_search"],
                id: "use_parallel_for_search",
                label: "Use Parallel for Search",
                group: "advanced"
            }, {
                featureGates: ["use_parallel_for_extract_website"],
                id: "use_parallel_for_extract_website",
                label: "Use Parallel for Extract Website",
                group: "advanced"
            }, {
                featureGates: ["filesystem_sandbox"],
                id: "filesystem_sandbox",
                label: "Filesystem sandbox",
                group: "advanced"
            }, {
                featureGates: ["computer_custom_envs"],
                id: "computer_custom_envs",
                label: "Computer custom environments",
                group: "advanced"
            }, {
                featureGates: ["agent_incremental_block_render"],
                id: "agent_incremental_block_render",
                label: "Incremental markdown rendering",
                group: "default"
            }, {
                featureGates: ["daily_brief_debug"],
                id: "daily_brief_debug",
                label: "Daily brief debug",
                group: "default"
            }, {
                featureGates: ["agent_polish_2026"],
                id: "agent_polish_2026",
                label: "Agent Polish 2026",
                group: "default"
            }, {
                featureGates: ["multi_agent_delegation"],
                id: "multi_agent_delegation",
                label: "Multi-agent delegation",
                group: "default"
            }, {
                featureGates: ["agent_rule_priority_hierarchy"],
                id: "agent_rule_priority_hierarchy",
                label: "Rule priority hierarchy",
                group: "default"
            }, {
                featureGates: ["agent_script_agent_custom_tool_calling"],
                id: "agent_script_agent_custom_tool_calling",
                label: "OpenAI Custom Tool Calling",
                group: "advanced"
            }];

            function l(e, t) {
                return e.featureGates.some(e => t(e))
            }

            function o(e) {
                let t = n.find(t => t.id === e);
                if (!t) throw Error(`Feature gate group with id ${e} not found`);
                return t
            }
            n.filter(e => "agent_model_picker" === e.id || "ai_agent_token_usage_ring" === e.id || "custom_agents" === e.id || "agent_automations" === e.id || "agent_script_agent_advanced" === e.id || "agent_script_agent_search_connectors" === e.id || "agent_script_agent_google_drive" === e.id || "agent_script_agent_slack" === e.id || "agent_script_agent_mcp_servers" === e.id || "script_agent_mail_module_available" === e.id || "agent_rule_priority_hierarchy" === e.id || "filesystem_sandbox" === e.id || "computer_custom_envs" === e.id || "agent_in_person_property" === e.id || "agent_create_dashboard" === e.id)
        }
    }
]);