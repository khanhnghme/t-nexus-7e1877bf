"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [6212], {
        6634: (e, a, t) => {
            t.d(a, {
                Bf: () => m,
                Gt: () => h,
                H8: () => s,
                M4: () => y,
                SH: () => _,
                U5: () => i,
                Yx: () => c,
                b6: () => u,
                f3: () => n,
                in: () => g,
                yH: () => b
            }), t(898992), t(672577);
            let r = (0, t(109939).YK)({
                    summarizePageParameter: {
                        id: "parameters.summarize.page",
                        defaultMessage: "Page"
                    },
                    translateLanguageParameter: {
                        id: "parameters.translate.language",
                        defaultMessage: "Language"
                    },
                    changeToneToneParameter: {
                        id: "parameters.changeTone.tone",
                        defaultMessage: "Tone"
                    },
                    customNameParameter: {
                        id: "parameters.custom.name",
                        defaultMessage: "Name"
                    },
                    customInitialUserPromptParameter: {
                        id: "parameters.custom.initialUserPrompt",
                        defaultMessage: "Initial User Prompt"
                    },
                    customInstructionsParameter: {
                        id: "parameters.custom.instructions",
                        defaultMessage: "Instructions"
                    },
                    summarizeModeParameter: {
                        id: "parameters.summarize.mode",
                        defaultMessage: "Mode"
                    },
                    summarizeStyleParameter: {
                        id: "parameters.summarize.style",
                        defaultMessage: "Style"
                    },
                    databaseFilingDatabaseParameter: {
                        id: "parameters.databaseFiling.database",
                        defaultMessage: "Database"
                    },
                    newPageFromTemplateTemplateParameter: {
                        id: "parameters.newPageFromTemplate.template",
                        defaultMessage: "Template"
                    },
                    pageOrTopicPlaceholder: {
                        id: "parameters.pageOrTopicPlaceholder.text",
                        defaultMessage: "Select a page…"
                    },
                    templatePlaceholder: {
                        id: "parameters.templatePlaceholder.text",
                        defaultMessage: "Select a template…"
                    },
                    databasePlaceholder: {
                        id: "parameters.databasePlaceholder.text",
                        defaultMessage: "Select a database…"
                    },
                    languagePlaceholder: {
                        id: "parameters.languagePlaceholder.text",
                        defaultMessage: "Select a language…"
                    },
                    tonePlaceholder: {
                        id: "parameters.tonePlaceholder.text",
                        defaultMessage: "Select a tone…"
                    },
                    summarizeTranscriptTemplateParameter: {
                        id: "parameters.summarizeTranscript.template",
                        defaultMessage: "Template"
                    }
                }),
                i = [{
                    key: "english",
                    name: t(255173).VT.translateEnglish
                }, {
                    key: "korean",
                    name: t(255173).VT.translateKorean
                }, {
                    key: "chinese (simplified)",
                    name: t(255173).VT.translateChineseSimplified
                }, {
                    key: "chinese (traditional)",
                    name: t(255173).VT.translateChineseTraditional
                }, {
                    key: "japanese",
                    name: t(255173).VT.translateJapanese
                }, {
                    key: "spanish",
                    name: t(255173).VT.translateSpanish
                }, {
                    key: "russian",
                    name: t(255173).VT.translateRussian
                }, {
                    key: "french",
                    name: t(255173).VT.translateFrench
                }, {
                    key: "portuguese",
                    name: t(255173).VT.translatePortuguese
                }, {
                    key: "german",
                    name: t(255173).VT.translateGerman
                }, {
                    key: "italian",
                    name: t(255173).VT.translateItalian
                }, {
                    key: "dutch",
                    name: t(255173).VT.translateDutch
                }, {
                    key: "indonesian",
                    name: t(255173).VT.translateIndonesian
                }, {
                    key: "filipino",
                    name: t(255173).VT.translateFilipino
                }, {
                    key: "vietnamese",
                    name: t(255173).VT.translateVietnamese
                }];

            function n(e) {
                return i.find(a => a.key === e)
            }
            let l = [{
                key: "professional",
                name: t(255173).VT.changeToneProfessional
            }, {
                key: "casual",
                name: t(255173).VT.changeToneCasual
            }, {
                key: "straightforward",
                name: t(255173).VT.changeToneStraightforward
            }, {
                key: "confident",
                name: t(255173).VT.changeToneConfident
            }, {
                key: "friendly",
                name: t(255173).VT.changeToneFriendly
            }];

            function s(e) {
                return l.find(a => a.key === e)
            }
            let o = {
                    search_qna: {},
                    summarize: {
                        pageOrTopic: {
                            name: r.summarizePageParameter,
                            type: "blockOrText",
                            optional: !1,
                            isUserVisible: !0,
                            placeholder: r.pageOrTopicPlaceholder
                        },
                        summarizeMode: {
                            name: r.summarizeModeParameter,
                            type: "summarizeMode",
                            optional: !1,
                            isUserVisible: !1
                        },
                        summarizeStyle: {
                            name: r.summarizeStyleParameter,
                            type: "summarizeStyle",
                            optional: !1,
                            isUserVisible: !1
                        }
                    },
                    chat_key_points: {
                        pageOrTopic: {
                            name: r.summarizePageParameter,
                            type: "blockOrText",
                            optional: !1,
                            isUserVisible: !0,
                            placeholder: r.pageOrTopicPlaceholder
                        },
                        summarizeMode: {
                            name: r.summarizeModeParameter,
                            type: "summarizeMode",
                            optional: !1,
                            isUserVisible: !1
                        },
                        summarizeStyle: {
                            name: r.summarizeStyleParameter,
                            type: "summarizeStyle",
                            optional: !1,
                            isUserVisible: !1
                        }
                    },
                    chat_action_items: {},
                    page_qna: {},
                    fix_spelling_grammar: {},
                    fill_title: {},
                    add_summary: {},
                    add_key_points: {},
                    add_action_items: {},
                    continue_writing: {},
                    translate: {
                        language: {
                            name: r.translateLanguageParameter,
                            type: "language",
                            optional: !1,
                            isUserVisible: !0,
                            placeholder: r.languagePlaceholder
                        }
                    },
                    translate_page: {
                        language: {
                            name: r.translateLanguageParameter,
                            type: "fullPageTranslationLanguage",
                            optional: !1,
                            isUserVisible: !0,
                            placeholder: r.languagePlaceholder
                        }
                    },
                    improve_writing: {},
                    improve_formatting: {},
                    make_shorter: {},
                    make_longer: {},
                    change_tone: {
                        tone: {
                            name: r.changeToneToneParameter,
                            type: "tone",
                            optional: !1,
                            isUserVisible: !0,
                            placeholder: r.tonePlaceholder
                        }
                    },
                    simplify_language: {},
                    brainstorm_ideas: {},
                    write_code: {},
                    draft_outline: {},
                    draft_template: {},
                    draft_table: {},
                    draft_diagram: {},
                    draft_poem: {},
                    draft_meeting_agenda: {},
                    draft_email: {},
                    custom: {
                        name: {
                            name: r.customNameParameter,
                            type: "string",
                            optional: !1,
                            isUserVisible: !1
                        },
                        initialUserPrompt: {
                            name: r.customInitialUserPromptParameter,
                            type: "textValue",
                            optional: !1,
                            isUserVisible: !1
                        },
                        instructions: {
                            name: r.customInstructionsParameter,
                            type: "textValue",
                            optional: !1,
                            isUserVisible: !1
                        }
                    },
                    explain_this: {},
                    database_filing: {
                        collection: {
                            name: r.databaseFilingDatabaseParameter,
                            type: "collection",
                            optional: !1,
                            isUserVisible: !0,
                            placeholder: r.databasePlaceholder
                        }
                    },
                    query_database: {
                        collection: {
                            name: r.databaseFilingDatabaseParameter,
                            type: "collection",
                            optional: !1,
                            isUserVisible: !0,
                            placeholder: r.databasePlaceholder
                        }
                    },
                    new_page_from_template: {
                        template: {
                            name: r.newPageFromTemplateTemplateParameter,
                            type: "block",
                            optional: !1,
                            isUserVisible: !0,
                            placeholder: r.templatePlaceholder
                        }
                    },
                    help_me_write: {},
                    help_me_edit: {},
                    help_me_draft: {},
                    create_quiz: {},
                    search_workspace: {},
                    search_ai_knowledge: {},
                    new_years_resolution: {},
                    summarize_transcript: {
                        template: {
                            name: r.summarizeTranscriptTemplateParameter,
                            type: "textValue",
                            optional: !1,
                            isUserVisible: !1,
                            placeholder: r.templatePlaceholder
                        }
                    },
                    alphabetize_list: {},
                    reformat: {},
                    create_daily_brief: {},
                    inbox_zero: {},
                    translate_database_property: {
                        language: {
                            name: r.translateLanguageParameter,
                            type: "language",
                            optional: !1,
                            isUserVisible: !0,
                            placeholder: r.languagePlaceholder
                        }
                    },
                    summarize_database_property: {}
                },
                d = {
                    translate: {
                        skillType: "translate",
                        fillableParameter: "language",
                        remainingParameters: {}
                    },
                    translate_page: {
                        skillType: "translate_page",
                        fillableParameter: "language",
                        remainingParameters: {}
                    },
                    change_tone: {
                        skillType: "change_tone",
                        fillableParameter: "tone",
                        remainingParameters: {}
                    },
                    summarize: {
                        skillType: "summarize",
                        fillableParameter: "pageOrTopic",
                        remainingParameters: {
                            summarizeMode: "chat",
                            summarizeStyle: "prose"
                        }
                    },
                    chat_key_points: {
                        skillType: "chat_key_points",
                        fillableParameter: "pageOrTopic",
                        remainingParameters: {
                            summarizeMode: "chat",
                            summarizeStyle: "list"
                        }
                    },
                    database_filing: {
                        skillType: "database_filing",
                        fillableParameter: "collection",
                        remainingParameters: {}
                    },
                    query_database: {
                        skillType: "query_database",
                        fillableParameter: "collection",
                        remainingParameters: {}
                    },
                    new_page_from_template: {
                        skillType: "new_page_from_template",
                        fillableParameter: "template",
                        remainingParameters: {}
                    },
                    summarize_transcript: {
                        skillType: "summarize_transcript",
                        fillableParameter: "template",
                        remainingParameters: {}
                    },
                    translate_database_property: {
                        skillType: "translate_database_property",
                        fillableParameter: "language",
                        remainingParameters: {}
                    }
                };

            function m(e) {
                var a, t;
                let r = d[e];
                return { ...r,
                    parameterDefinition: (a = r.skillType, t = r.fillableParameter, o[a][t])
                }
            }

            function c(e) {
                var a, t;
                let {
                    skillType: r,
                    parameterValues: i
                } = e, n = d[r];
                return {
                    type: (a = n.skillType, t = n.fillableParameter, o[a][t]).type,
                    value: i[n.fillableParameter]
                }
            }

            function u(e, a) {
                return { ...d[e].remainingParameters,
                    [d[e].fillableParameter]: a
                }
            }
            let p = ["change_tone", "custom", "summarize", "chat_key_points", "translate", "database_filing", "query_database", "new_page_from_template", "translate_page", "summarize_transcript", "translate_database_property"],
                g = ["translate", "change_tone", "summarize", "chat_key_points", "database_filing", "query_database", "new_page_from_template", "translate_page", "summarize_transcript", "translate_database_property"],
                f = ["summarize", "chat_key_points"];

            function _(e) {
                return !!(0, t(722371).Xk)(p, e)
            }

            function h(e) {
                return !!(0, t(722371).Xk)(g, e)
            }

            function y(e) {
                return !!(0, t(722371).Xk)(f, e)
            }

            function b(e) {
                return (0, t(96447).dc)(e).requiresInput ? ? !1
            }
        },
        96447: (e, a, t) => {
            t.d(a, {
                yj: () => l,
                dc: () => s,
                $u: () => r
            }), t(16280), t(898992), t(737550);
            let r = ["search_qna", "summarize", "chat_key_points", "chat_action_items", "page_qna", "fix_spelling_grammar", "fill_title", "add_summary", "add_key_points", "add_action_items", "continue_writing", "translate", "improve_writing", "make_shorter", "make_longer", "reformat", "change_tone", "simplify_language", "brainstorm_ideas", "write_code", "draft_outline", "draft_template", "draft_table", "draft_diagram", "draft_poem", "draft_email", "draft_meeting_agenda", "custom", "explain_this", "database_filing", "query_database", "new_page_from_template", "improve_formatting", "help_me_draft", "help_me_edit", "help_me_write", "create_quiz", "translate_page", "search_workspace", "search_ai_knowledge", "new_years_resolution", "summarize_transcript", "alphabetize_list", "create_daily_brief", "inbox_zero", "translate_database_property", "summarize_database_property"],
                i = {
                    search_qna: t(288268).lO,
                    search_workspace: t(288268).gu,
                    search_ai_knowledge: t(288268).xM,
                    summarize: t(288268).eh,
                    chat_key_points: t(288268).vV,
                    chat_action_items: t(288268).tb,
                    page_qna: t(288268).uc,
                    create_quiz: t(288268).wn,
                    fix_spelling_grammar: t(288268).dp,
                    fill_title: t(288268).eb,
                    add_summary: t(288268).S0,
                    add_key_points: t(288268).cH,
                    add_action_items: t(288268).QQ,
                    continue_writing: t(288268).kZ,
                    translate: t(288268).Tl,
                    translate_page: t(288268).ih,
                    improve_writing: t(288268).tm,
                    make_shorter: t(288268).or,
                    make_longer: t(288268).Gz,
                    reformat: t(288268).Rf,
                    change_tone: t(288268).FY,
                    simplify_language: t(288268).wd,
                    improve_formatting: t(288268).Md,
                    brainstorm_ideas: t(288268).Sy,
                    write_code: t(288268).PJ,
                    draft_outline: t(288268).qD,
                    draft_template: t(288268).cO,
                    draft_table: t(288268).CU,
                    draft_diagram: t(288268).pU,
                    draft_poem: t(288268).pV,
                    draft_email: t(288268).aQ,
                    draft_meeting_agenda: t(288268).BE,
                    new_years_resolution: t(288268).PS,
                    custom: {
                        type: "custom",
                        version: 1,
                        getInstructions: e => {
                            var a;
                            let r = null == (a = e.parameterValues) ? void 0 : a.instructions;
                            return r ? r.some(e => (0, t(247438).qXl)(e)) ? r : (0, t(247438).q4_)(r) : ""
                        },
                        requiresInput: !1
                    },
                    explain_this: t(288268).k1,
                    database_filing: t(288268).hw,
                    query_database: t(288268).Mc,
                    new_page_from_template: t(288268).gZ,
                    help_me_draft: t(288268).xZ,
                    help_me_edit: t(288268).O2,
                    help_me_write: t(288268).hX,
                    summarize_transcript: t(288268).Sk,
                    alphabetize_list: t(288268).GE,
                    create_daily_brief: t(288268).SP,
                    inbox_zero: t(288268).J2,
                    translate_database_property: t(288268).dO,
                    summarize_database_property: t(288268).c4
                };

            function n(e) {
                let a = i[e];
                if (!a) throw Error(`No skill found for type: ${e}`);
                return a
            }

            function l(e) {
                let {
                    skillType: a,
                    parameterValues: t,
                    selection: r,
                    namespace: i
                } = e;
                return n(a).getInstructions({
                    parameterValues: t,
                    selection: r,
                    namespace: i
                }) ? ? ""
            }

            function s(e) {
                if (void 0 !== e) return n(e)
            }
        },
        132108: (e, a, t) => {
            t.d(a, {
                P: () => r
            });
            let r = t(546605).Store.createValue(!0, {
                name: "IsAiEligibleStore"
            })
        },
        185655: (e, a, t) => {
            t.d(a, {
                P: () => i
            }), t(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.18 1.3 11.63 11.45",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M8.45 12.75a3.66 3.66 0 0 1-1.643-.387v-.008l-1.132-.387h-.097v-6.15l1.399-1.492c.233-.298.458-.745.672-1.172.143-.283.28-.557.413-.773l.287-.589a1.024 1.024 0 0 1 1.232-.418c.496.193.76.728.612 1.24l-.403 1.41c-.079.272-.192.5-.305.73-.11.22-.22.441-.3.704a.32.32 0 0 0 .31.41h3.256a.97.97 0 0 1 .969.97c0 .333-.179.62-.442.79a.94.94 0 0 1 .534.852.955.955 0 0 1-.65.907.96.96 0 0 1 .364.744.96.96 0 0 1-.961.969.97.97 0 0 1-.69 1.65zM4.61 6.334H2.913a.727.727 0 0 0-.727.726v4.181c0 .402.326.727.727.727H4.61z"
                    })
                },
                i = (0, t(104509).wt)("handThumbsUpFillSmall", r, "fillSmall")
        },
        255173: (e, a, t) => {
            t.d(a, {
                $L: () => s,
                VT: () => r,
                fS: () => l,
                jm: () => o
            });
            let r = (0, t(109939).YK)({
                    translateSpanish: {
                        defaultMessage: "Spanish",
                        id: "id.completions.translateSpanish"
                    },
                    translateFrench: {
                        defaultMessage: "French",
                        id: "id.completions.translateFrench"
                    },
                    translateKorean: {
                        defaultMessage: "Korean",
                        id: "id.completions.translateKorean"
                    },
                    translateJapanese: {
                        defaultMessage: "Japanese",
                        id: "id.completions.translateJapanese"
                    },
                    translateEnglish: {
                        defaultMessage: "English",
                        id: "id.completions.translateEnglish"
                    },
                    translateChinese: {
                        defaultMessage: "Chinese",
                        id: "id.completions.translateChinese"
                    },
                    translateChineseSimplified: {
                        defaultMessage: "Chinese, Simplified",
                        id: "id.completions.translateChineseSimplified"
                    },
                    translateChineseTraditional: {
                        defaultMessage: "Chinese, Traditional",
                        id: "id.completions.translateChineseTraditional"
                    },
                    translateRussian: {
                        defaultMessage: "Russian",
                        id: "id.completions.translateRussian"
                    },
                    translatePortuguese: {
                        defaultMessage: "Portuguese",
                        id: "id.completions.translatePortuguese"
                    },
                    translateGerman: {
                        defaultMessage: "German",
                        id: "id.completions.translateGerman"
                    },
                    translateItalian: {
                        defaultMessage: "Italian",
                        id: "id.completions.translateItalian"
                    },
                    translateDutch: {
                        defaultMessage: "Dutch",
                        id: "id.completions.translateDutch"
                    },
                    translateIndonesian: {
                        defaultMessage: "Indonesian",
                        id: "id.completions.translateIndonesian"
                    },
                    translateFilipino: {
                        defaultMessage: "Filipino",
                        id: "id.completions.translateFilipino"
                    },
                    translateVietnamese: {
                        defaultMessage: "Vietnamese",
                        id: "id.completions.translateVietnamese"
                    },
                    changeToneProfessional: {
                        defaultMessage: "Professional",
                        id: "id.completions.changeToneProfessional"
                    },
                    changeToneCasual: {
                        defaultMessage: "Casual",
                        id: "id.completions.changeToneCasual"
                    },
                    changeToneStraightforward: {
                        defaultMessage: "Straightforward",
                        id: "id.completions.changeToneStraightforward"
                    },
                    changeToneConfident: {
                        defaultMessage: "Confident",
                        id: "id.completions.changeToneConfident"
                    },
                    changeToneFriendly: {
                        defaultMessage: "Friendly",
                        id: "id.completions.changeToneFriendly"
                    },
                    translateArabic: {
                        defaultMessage: "Arabic",
                        id: "id.completions.translateArabic"
                    },
                    translateHebrew: {
                        defaultMessage: "Hebrew",
                        id: "id.completions.translateHebrew"
                    }
                }),
                i = [{
                    key: "english",
                    name: r.translateEnglish
                }, {
                    key: "korean",
                    name: r.translateKorean
                }, {
                    key: "chinese (simplified)",
                    name: r.translateChineseSimplified
                }, {
                    key: "chinese (traditional)",
                    name: r.translateChineseTraditional
                }, {
                    key: "japanese",
                    name: r.translateJapanese
                }, {
                    key: "spanish",
                    name: r.translateSpanish
                }, {
                    key: "russian",
                    name: r.translateRussian
                }, {
                    key: "french",
                    name: r.translateFrench
                }, {
                    key: "portuguese",
                    name: r.translatePortuguese
                }, {
                    key: "german",
                    name: r.translateGerman
                }, {
                    key: "italian",
                    name: r.translateItalian
                }, {
                    key: "dutch",
                    name: r.translateDutch
                }, {
                    key: "indonesian",
                    name: r.translateIndonesian
                }, {
                    key: "filipino",
                    name: r.translateFilipino
                }, {
                    key: "vietnamese",
                    name: r.translateVietnamese
                }],
                n = [...i, {
                    key: "arabic",
                    name: r.translateArabic
                }, {
                    key: "hebrew",
                    name: r.translateHebrew
                }];

            function l(e) {
                return (null == e ? void 0 : e.includeRtlLanguages) ? [...n] : [...i]
            }
            let s = [{
                key: "professional",
                name: r.changeToneProfessional
            }, {
                key: "casual",
                name: r.changeToneCasual
            }, {
                key: "straightforward",
                name: r.changeToneStraightforward
            }, {
                key: "confident",
                name: r.changeToneConfident
            }, {
                key: "friendly",
                name: r.changeToneFriendly
            }];

            function o(e) {
                return "formula" !== e.type && "rollup" !== e.type && "relation" !== e.type && "file" !== e.type && "url" !== e.type && "auto_increment_id" !== e.type && "button" !== e.type && "email" !== e.type && "phone_number" !== e.type
            }
        },
        340309: (e, a, t) => {
            t.d(a, {
                o: () => n
            });
            let r = (0, t(109939).YK)({
                    default: {
                        id: "aiUpgradeButtonProps.genericCredits.default",
                        defaultMessage: "You’ve run out of free AI responses. <highlight>{upgradePhrase}</highlight>."
                    },
                    notEligible: {
                        id: "aiUpgradeButtonProps.genericCredits.notEligible",
                        defaultMessage: "You’ve run out of free AI responses."
                    }
                }),
                i = (0, t(109939).YK)({
                    default: {
                        id: "aiUpgradeButtonProps.creditLimit.default",
                        defaultMessage: "Your workspace has hit its credit limit. <highlight>{upgradePhrase}</highlight>."
                    },
                    notEligible: {
                        id: "aiUpgradeButtonProps.creditLimit.notEligible",
                        defaultMessage: "Your workspace has hit its credit limit."
                    }
                });

            function n(e) {
                let {
                    featureAvailability: a,
                    source: n,
                    showOptimisticUpsell: l,
                    type: s
                } = e, o = (0, t(723240).r)(), d = (0, t(972740).L)(), m = (0, t(226309).lh)({
                    spaceId: o
                }), c = (0, t(855021).q)(), u = (0, t(722371).Xk)(t(90416).uv, n), p = (0, t(682985).K8)(() => (0, t(717274).FA)(), []), g = (0, t(811656).Pd)(a) || l ? null == a ? void 0 : a.upsell : void 0;
                if (!g || "none" === g.type) return;
                let f = !!(p && m && (0, t(149957).Hg)(m)),
                    _ = {
                        source: n,
                        upsell: g,
                        featureName: "ai_usage",
                        spaceStore: d
                    };
                switch (s) {
                    case "primary":
                        return { ..._,
                            display: "primary"
                        };
                    case "button":
                        return { ..._,
                            display: "button",
                            size: "small"
                        };
                    case "icon":
                        return { ..._,
                            showPlanName: !0,
                            display: "icon"
                        };
                    case "text":
                        {
                            let a;
                            return a = p ? f ? {
                                eligible_to_purchase: i.default,
                                eligible_for_trial: i.default,
                                sales_eligible: i.default,
                                sales_assisted: i.default,
                                eligible_to_request: i.default,
                                request_pending: i.default,
                                not_eligible: i.notEligible
                            } : {
                                eligible_to_purchase: r.default,
                                eligible_for_trial: r.default,
                                sales_eligible: r.default,
                                sales_assisted: r.default,
                                eligible_to_request: r.default,
                                request_pending: r.default,
                                not_eligible: r.notEligible
                            } : function({
                                isFormulas: e,
                                isResearchMode: a,
                                salesAssistedUpgradeRequired: i
                            }) {
                                return {
                                    eligible_to_purchase: { ...t(385728).D["adminUpsell.selfService"],
                                        interpolatedValues: {
                                            isResearchMode: a,
                                            isFormulas: e
                                        }
                                    },
                                    eligible_for_trial: r.default,
                                    sales_assisted: { ...t(385728).D["adminUpsell.salesAssisted"],
                                        interpolatedValues: {
                                            isResearchMode: a,
                                            isFormulas: e
                                        }
                                    },
                                    eligible_to_request: { ...t(385728).D[i ? "memberCanRequest.salesAssisted" : "memberCanRequest.selfService"],
                                        interpolatedValues: {
                                            isResearchMode: a,
                                            isFormulas: e
                                        }
                                    }
                                }
                            }({
                                isFormulas: "ai_formulas" === n,
                                isResearchMode: u,
                                salesAssistedUpgradeRequired: "sales_assisted" === c
                            }),
                            { ..._,
                                display: "text",
                                size: e.size ? ? "small",
                                customMessages: a
                            }
                        }
                    default:
                        (0, t(722371).HB)(s)
                }
            }
        },
        361137: (e, a, t) => {
            t.d(a, {
                M: () => i
            }), t(296540);
            var r = t(474848);

            function i(e) {
                let {
                    variant: a,
                    highLevelState: i,
                    includeBoxShadow: n
                } = e, l = (0, t(533992).Y0)(), s = (0, t(682985).K8)(() => t(886556).z.shouldShowAnimatedAssistantFace(l), [l]);
                return i || s ? (0, r.jsx)(t(514984).k, {
                    sizeVariant: a,
                    highLevelState: i,
                    includeBoxShadow: n
                }) : (0, r.jsx)(t(971375).x, {
                    variant: a
                })
            }
        },
        514984: (e, a, t) => {
            t.d(a, {
                k: () => n
            }), t(296540);
            let r = new(t(815048)).O2("assistantAnimatedFace", () => Promise.all([t.e(32257), t.e(15961)]).then(t.bind(t, 319662)));
            var i = t(474848);

            function n(e) {
                let {
                    sizeVariant: a,
                    highLevelState: n,
                    includeBoxShadow: l,
                    onMouseEnter: s,
                    transitionMode: o,
                    onLowLevelStateChange: d
                } = e, {
                    value: m
                } = (0, t(815048).fJ)(r);
                if (!m) return (0, i.jsx)(t(971375).o, {
                    variant: a
                });
                let c = m.AssistantAnimatedFace,
                    u = m.AssistantAnimatedFaceInner;
                return n ? (0, i.jsx)(u, {
                    sizeVariant: a,
                    highLevelState: n,
                    includeBoxShadow: l ? ? !1,
                    onMouseEnter: s,
                    transitionMode: o,
                    onLowLevelStateChange: d
                }) : (0, i.jsx)(c, {
                    sizeVariant: a,
                    includeBoxShadow: l ? ? !1,
                    onMouseEnter: s
                })
            }
        },
        655084: (e, a, t) => {
            t.d(a, {
                A: () => n
            });
            var r = () => t(546605);
            class i extends r().Store {
                getInitialState() {
                    return {}
                }
            }
            let n = new i
        },
        689087: (e, a, t) => {
            t.d(a, {
                QJ: () => u,
                TI: () => o
            }), t(944114), t(581454);
            var r = () => t(975162);
            let i = 0,
                n = "clipboard",
                l = {
                    debug: !!t(986939).A.isDevelopingInAirplaneMode,
                    responseText: n,
                    showErrorCode: !1,
                    delayBetweenChunks: 20,
                    chunkSize: 5,
                    numLoremIpsums: 3
                },
                s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta auctor sem vel efficitur. Vivamus efficitur eros sed erat efficitur efficitur. Vivamus et augue vel est efficitur efficitur.";

            function o() {
                return l
            }
            async function d() {
                try {
                    return await navigator.clipboard.readText()
                } catch (e) {
                    return
                }
            }

            function m(e, a) {
                let t = Math.ceil(e.length / a),
                    r = Array(t);
                for (let i = 0, n = 0; i < t; ++i, n += a) r[i] = e.substr(n, a);
                return r
            }

            function c(e) {
                return e.map(e => ({
                    type: "success",
                    p: "padding",
                    completion: e,
                    inferenceId: "mock"
                }))
            }
            async function u({
                environment: e,
                data: a
            }) {
                console.log("Retrieving fake completion for data", a);
                let {
                    context: o
                } = a, p = o.selectedText, g = [], {
                    responseText: f
                } = l;
                if (f === n && (f = await d() ? ? "Unable to retrieve clipboard text."), void 0 === f && (g.push({
                        type: "success",
                        p: "padding",
                        completion: "\n",
                        inferenceId: "mock"
                    }, {
                        type: "success",
                        p: "padding",
                        completion: "this is ",
                        inferenceId: "mock"
                    }, {
                        type: "success",
                        p: "padding",
                        completion: "fake ",
                        inferenceId: "mock"
                    }, {
                        type: "success",
                        p: "padding",
                        completion: `streaming response ${i++}.`,
                        inferenceId: "mock"
                    }), t(986939).A.isDevelopingInAirplaneMode && g.push({
                        type: "success",
                        p: "padding",
                        completion: "\n\nTo see a real AI response, run the server with `--airplaneMode=false`.",
                        inferenceId: "mock"
                    }), "string" == typeof p))
                    for (let e of (g.push({
                            type: "success",
                            p: "padding",
                            completion: "\n\nHere is the text you selected:\n\n",
                            inferenceId: "mock"
                        }), m(p, l.chunkSize))) g.push({
                        type: "success",
                        completion: e,
                        p: "padding",
                        inferenceId: "mock"
                    });
                if (l.showErrorCode) g.push({
                    type: "error",
                    message: "alas",
                    errorCode: l.showErrorCode,
                    isRetryable: !1
                });
                else if (void 0 === f)
                    for (let e = 0; e < l.numLoremIpsums; e++) g.push(...c([`

${e+1}. `, ...m(s, 0 === l.delayBetweenChunks ? s.length : l.chunkSize)]));
                else if (f.length > 0) {
                    let e = m(f, l.chunkSize);
                    g.push(...c(e))
                }
                return Promise.resolve({
                    type: "success",
                    data: {
                        async * [Symbol.asyncIterator]() {
                            for (let e of g) await (0, r().wR)(l.delayBetweenChunks), yield e
                        }
                    },
                    status: 200,
                    headers: {}
                })
            }(0, t(202146).exposeDebugValue)("completionDebugSettings", l)
        },
        745015: (e, a, t) => {
            async function r(e, a, r) {
                let n;
                t(218744).default.checkGate({
                    gateName: "usage_based_pricing_pfa_checks_purchased_credits_enabled"
                }) ? await i(e, a, r) : i(e, a, r).catch(e => {
                    t(773352).log({
                        level: "error",
                        from: "ai.completionActions",
                        type: "maybeUpdateAIUsageEligibilityStoreV2Error",
                        spaceId: a,
                        error: e
                    })
                });
                let l = t(689087).TI();
                if (l.debug) n = 402 !== l.showErrorCode;
                else {
                    let i = t(939707).o.getState();
                    if (i && i.isEligible && "unlimited" === i.type && !r) {
                        let e = i.lastUpdatedAt;
                        if (Date.now() - e < 10 * t(627179).Xb) return
                    }
                    let l = await e.api.callCellCompatibleApi({
                        eventName: "getAIUsageEligibility",
                        environment: e,
                        data: {
                            spaceId: a
                        },
                        cellNavigation: {
                            cellId: void 0,
                            spaceId: a
                        }
                    });
                    if ("success" === l.type) {
                        (n = l.data.isEligible) && t(898327).K.state && t(898327).K.setState(!1);
                        let e = (null == i ? void 0 : i.isEligible) === !1 && (null == i ? void 0 : i.requestedAccess),
                            a = l.data.researchModeUsage ? ? 0;
                        t(939707).o.setState({ ...l.data,
                            lastUpdatedAt: Date.now(),
                            researchModeUsage: a,
                            ...!1 === l.data.isEligible && {
                                requestedAccess: e
                            }
                        })
                    }
                }
                void 0 !== n && t(132108).P.setState(n)
            }
            async function i(e, a, r) {
                let i = await t(54068).T.awaitData(e, {
                        spaceId: a
                    }),
                    n = t(547631).a.getData(e, {
                        spaceId: a
                    });
                if (!i) return void t(773352).log({
                    level: "warning",
                    from: "ai.completionActions",
                    type: "maybeUpdateAIUsageEligibilityStoreV2BillingDataMissing",
                    data: {
                        spaceId: a,
                        hasCurrentUsageData: void 0 !== n
                    }
                });
                if (n && (0, t(149957).Hg)(i) && !r) {
                    let e = n.lastUpdatedAt,
                        r = Date.now() - e;
                    if (r < 10 * t(627179).Xb) return void t(773352).log({
                        level: "info",
                        from: "ai.completionActions",
                        type: "maybeUpdateAIUsageEligibilityStoreV2CacheHit",
                        data: {
                            spaceId: a,
                            elapsedMs: r,
                            lastUpdatedAt: e
                        }
                    })
                }
                t(773352).log({
                    level: "info",
                    from: "ai.completionActions",
                    type: "maybeUpdateAIUsageEligibilityStoreV2Refreshing",
                    data: {
                        spaceId: a,
                        forceRefresh: r ? ? !1,
                        hadCachedData: void 0 !== n
                    }
                }), await (0, t(838451).y)(e, a)
            }
            t.d(a, {
                Z: () => r
            })
        },
        838451: (e, a, t) => {
            t.d(a, {
                y: () => r
            });
            async function r(e, a) {
                if (await t(547631).a.resetData(e, {
                        spaceId: a
                    }), (0, t(717274).FA)()) {
                    let r = await (0, t(655293).S)(e, {
                        name: "ai_usage",
                        amount: 1,
                        spaceId: a,
                        userId: e.currentUser.id
                    });
                    r && t(898327).K.state && t(898327).K.setState(!1), t(132108).P.setState(r)
                }
            }
        },
        898327: (e, a, t) => {
            t.d(a, {
                K: () => r
            });
            let r = t(546605).Store.createValue(!1)
        },
        955868: (e, a, t) => {
            t.d(a, {
                mA: () => p
            }), t(16280), t(517642), t(658004), t(733853), t(845876), t(432475), t(515024), t(731698), t(898992), t(354520);
            var r = () => t(970831),
                i = () => t(730517),
                n = () => t(496282),
                l = () => t(832375),
                s = () => t(300441),
                o = () => t(722371);
            class d extends Error {
                constructor(e, a) {
                    super(a), this.type = e
                }
            }
            class m extends d {
                constructor() {
                    super("query_collection_limit_outside_range", "Query collection limit must be between 0 and 1000")
                }
            }
            class c extends d {
                constructor(e) {
                    super("query_collection_failed", `Query collection failed: ${e.reason}`), this.data = e
                }
            }
            class u extends d {
                constructor() {
                    super("query_collection_too_many_items", "Query collection updating too many items")
                }
            }
            async function p(e, a) {
                var d, p, g;
                let {
                    source: f,
                    parentRecordStore: _,
                    collectionPointer: h,
                    filter: y,
                    sort: b,
                    limit: k
                } = a, P = k ? ? 1e3;
                if (P < 0 || P > 1e3) return {
                    error: new m
                };
                let w = t(356912).m.createChildStore(_, h);
                await w.load();
                let T = w.getModel();
                if (!T) return {
                    error: new c({
                        reason: "no collection value"
                    })
                };
                let v = w.getParentBlockStore();
                if (!v) return {
                    error: new c({
                        reason: "no collection parent"
                    })
                };
                await v.load();
                let M = v.getCollectionViewStores()[0],
                    S = M.getSpaceId();
                if (!M || !S) return {
                    error: new c({
                        reason: "no first collection view"
                    })
                };
                let V = "results",
                    I = {
                        [V]: {
                            type: "results",
                            limit: P
                        }
                    },
                    z = Object.keys(a.aggregations ? ? {});
                for (let e of z) {
                    if (e === V) return {
                        error: new c({
                            reason: `${V} is a reserved reducer keyword.`
                        })
                    };
                    let t = null == (d = a.aggregations) ? void 0 : d[e];
                    if (!t) return {
                        error: new c({
                            reason: `no aggregation provided for ${e}.`
                        })
                    };
                    t && (I[e] = {
                        type: "aggregation",
                        aggregation: t
                    })
                }
                let C = w.getSchema(),
                    x = {
                        filter: y && (0, t(9658).SK)(y, C),
                        sort: b && i().g4(b, C),
                        userId: e.currentUser.id,
                        userTimeZone: (0, t(714350).P)(),
                        searchQuery: void 0,
                        reducers: I,
                        archiveStatus: "NON_ARCHIVED"
                    },
                    U = await e.api.callCellCompatibleApi({
                        eventName: "queryCollection",
                        environment: e,
                        data: {
                            source: {
                                type: "collection",
                                id: h.id,
                                spaceId: h.spaceId
                            },
                            collectionView: {
                                id: M.id,
                                spaceId: S
                            },
                            loader: x,
                            clientType: "notion_app"
                        },
                        tracking: {
                            src: f
                        },
                        cellNavigation: {
                            spaceId: h.spaceId
                        }
                    });
                if ("failed" === U.type) return {
                    error: new c({
                        reason: "server query failed",
                        cause: U.error
                    })
                };
                let A = U.data.result.reducerResults[V];
                if (!A || "results" !== A.type) return {
                    error: new c({
                        reason: "unexpected server result"
                    })
                };
                if (1e3 === A.blockIds.length && A.hasMore) return {
                    error: new u
                };
                let {
                    groupsReducerIds: q,
                    reducerIdsWithNoGroupDependencies: E
                } = i().M(x.reducers), F = t(218744).default.getConfigKey("collection_request_settings", "clientFormulaTimeoutMs"), D = Date.now(), R = await t(864850).T.formulas.load(), O = e.idCreator.getSpaceIdCreatorSync(h.spaceId), B = {
                    pageSort: [],
                    schema: C,
                    loader: x,
                    userId: e.currentUser.id,
                    userStartOfWeek: t(97892).X.state,
                    currentTime: D,
                    getRecordModel: _.getRecordModel,
                    getRecordRole: _.getRecordRole,
                    intl: t(962299).A.getIntl(),
                    isSorted: !1,
                    visibleProperties: void 0,
                    relativeVariableResult: null == U ? void 0 : U.data.relativeVariableResult,
                    currentPageInRelatedCollection: void 0,
                    isSprintPlanningView: !1,
                    source: {
                        type: "collection",
                        id: h.id,
                        spaceId: h.spaceId
                    },
                    groupsReducerIds: q,
                    reducerIdsWithNoGroupDependencies: E,
                    formulaTimeoutMs: F,
                    resultCache: new Map,
                    regExpCache: new Map,
                    formatDateCache: new Map,
                    experimentService: t(218744).default,
                    collectionFeatureGates: (0, t(457103).i)(),
                    shouldUseClientMode: !1,
                    clientModeConfig: void 0,
                    formulasModule: R,
                    spaceIdCreator: O,
                    getRelationEdgeList: (0, t(323082).Y)({
                        environment: e,
                        spaceId: h.spaceId
                    })
                }, L = i().zl(B);
                for (let e of A.blockIds) {
                    let a = r().B.createChildStore(_, {
                            table: l().evP,
                            id: e
                        }),
                        t = null == (p = a.getAssociatedCollectionStore()) ? void 0 : p.pointer;
                    if (!(t && n().L3.isEqualIdTable(t, w.pointer))) continue;
                    let s = _.getRecordModel(a);
                    s && i().UC({
                        blockValueOrModel: s,
                        collectionValueOrModel: T,
                        queryArgs: B,
                        state: L
                    })
                }
                let K = t(311588).A.getEditedBlocksForCollection(T.id),
                    H = new Set(A.blockIds);
                for (let e of K) {
                    if (H.has(e)) continue;
                    let a = r().B.createChildStore(_, {
                        table: l().evP,
                        id: e
                    });
                    !a.isDefined() || a.isArchived() || i().UC({
                        blockValueOrModel: a.getModel(),
                        collectionValueOrModel: T,
                        queryArgs: B,
                        state: L
                    })
                }
                let {
                    result: N
                } = i().Mo(B, L), Y = i().uX({
                    result: N
                }), j = {};
                for (let e of z) {
                    let t = i().VI({
                        expectedAggregator: null == (g = a.aggregations) || null == (g = g[e]) ? void 0 : g.aggregator,
                        aggregationReducerResult: U.data.result.reducerResults[e]
                    });
                    if (s().Q.isFail(t)) return {
                        error: new c({
                            reason: "no aggregation provided" === t.error ? `no aggregation provided for ${e}` : "unexpected response returned for aggregation" === t.error ? `unexpected response returned for aggregation ${e}` : (0, o().HB)(t.error)
                        })
                    };
                    j[e] = t.value
                }
                return {
                    value: {
                        blockIds: Y,
                        ...j
                    }
                }
            }
        }
    }
]);