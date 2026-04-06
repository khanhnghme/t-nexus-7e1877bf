"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [15389], {
        215389: (e, t, a) => {
            a.d(t, {
                U_: () => o,
                YP: () => i
            }), a(581454);
            let i = [{
                    notionName: "openai-gpt-4o",
                    maxOutputTokens: 16384,
                    maxContextTokens: 128e3,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 2.5,
                            outputRate: 10,
                            cachedRate: 1.25,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 4.25,
                            outputRate: 17,
                            cachedRate: 2.125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-4o",
                    displayNameWithProvider: "OpenAI GPT-4o",
                    displayGroup: "fast"
                }, {
                    notionName: "openai-gpt-4o-mini",
                    maxOutputTokens: 16384,
                    maxContextTokens: 128e3,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .15,
                            outputRate: .6,
                            cachedRate: .075,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: .25,
                            outputRate: 1,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-4o mini",
                    displayNameWithProvider: "OpenAI GPT-4o mini",
                    displayGroup: "fast"
                }, {
                    notionName: "openai-turbo",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 2.5,
                            outputRate: 20,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5",
                    displayNameWithProvider: "OpenAI GPT-5",
                    displayGroup: "fast"
                }, {
                    notionName: "openai-chatgpt-4o-latest",
                    maxOutputTokens: 16384,
                    maxContextTokens: 128e3,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 2.5,
                            outputRate: 10,
                            cachedRate: 1.25,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 4.25,
                            outputRate: 17,
                            cachedRate: 2.125,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "openai-o1",
                    maxOutputTokens: 1e5,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 15,
                            outputRate: 60,
                            cachedRate: 7.5,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: 7.5,
                            outputRate: 30,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "openai-o1-mini",
                    maxOutputTokens: 65536,
                    maxContextTokens: 128e3,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 1.1,
                            outputRate: 4.4,
                            cachedRate: .55,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .55,
                            outputRate: 2.2,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "openai-o3-mini",
                    maxOutputTokens: 1e5,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 1.1,
                            outputRate: 4.4,
                            cachedRate: .55,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .55,
                            outputRate: 2.2,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "openai-gpt-4.1",
                    maxOutputTokens: 32768,
                    maxContextTokens: 1047576,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 2,
                            outputRate: 8,
                            cachedRate: .5,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: 1,
                            outputRate: 4,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 3.5,
                            outputRate: 14,
                            cachedRate: .875,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-4.1",
                    displayNameWithProvider: "OpenAI GPT-4.1",
                    displayGroup: "fast"
                }, {
                    notionName: "openai-gpt-4.1-mini",
                    maxOutputTokens: 32768,
                    maxContextTokens: 1047576,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: .4,
                            outputRate: 1.6,
                            cachedRate: .1,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .2,
                            outputRate: .8,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: .7,
                            outputRate: 2.8,
                            cachedRate: .175,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-4.1 Mini",
                    displayNameWithProvider: "OpenAI GPT-4.1 Mini",
                    displayGroup: "fast"
                }, {
                    notionName: "openai-gpt-4.1-nano",
                    maxOutputTokens: 32768,
                    maxContextTokens: 1047576,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .1,
                            outputRate: .4,
                            cachedRate: .025,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .05,
                            outputRate: .2,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: .2,
                            outputRate: .8,
                            cachedRate: .05,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "openai-gpt-5-mini",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: .25,
                            outputRate: 2,
                            cachedRate: .025,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .125,
                            outputRate: 1,
                            cachedRate: .0125,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: .45,
                            outputRate: 3.6,
                            cachedRate: .045,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .125,
                            outputRate: 1,
                            cachedRate: .0125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5 Mini",
                    displayNameWithProvider: "OpenAI GPT-5 Mini",
                    displayGroup: "fast"
                }, {
                    notionName: "openai-gpt-5-nano",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: .05,
                            outputRate: .4,
                            cachedRate: .005,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .025,
                            outputRate: .2,
                            cachedRate: .0025,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .025,
                            outputRate: .2,
                            cachedRate: .0025,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5 Nano",
                    displayNameWithProvider: "OpenAI GPT-5 Nano",
                    displayGroup: "fast"
                }, {
                    notionName: "openai-o3",
                    maxOutputTokens: 1e5,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 2,
                            outputRate: 8,
                            cachedRate: .5,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: 1,
                            outputRate: 4,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 3.5,
                            outputRate: 14,
                            cachedRate: .875,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: 1,
                            outputRate: 4,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "openai-o4-mini",
                    maxOutputTokens: 1e5,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 1.1,
                            outputRate: 4.4,
                            cachedRate: .275,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .55,
                            outputRate: 2.2,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 2,
                            outputRate: 8,
                            cachedRate: .5,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .55,
                            outputRate: 2.2,
                            cachedRate: .138,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "o4-mini",
                    displayNameWithProvider: "OpenAI o4-mini",
                    displayGroup: "intelligent"
                }, {
                    notionName: "openai-turbo-thinking",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "openai-turbo",
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 2.5,
                            outputRate: 20,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5 with thinking",
                    displayNameWithProvider: "OpenAI GPT-5 with thinking",
                    displayGroup: "intelligent"
                }, {
                    notionName: "openai-turbo-minimal-thinking",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "openai-turbo",
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 2.5,
                            outputRate: 20,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5 + minimal CoT",
                    displayNameWithProvider: "OpenAI GPT-5 + minimal CoT",
                    displayGroup: "fast"
                }, {
                    notionName: "openai-turbo-10",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 2.5,
                            outputRate: 20,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5 + juice@10",
                    displayNameWithProvider: "OpenAI GPT-5 + juice@10",
                    displayGroup: "fast"
                }, {
                    notionName: "openai-turbo-8",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 2.5,
                            outputRate: 20,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5 + juice@8",
                    displayNameWithProvider: "OpenAI GPT-5 + juice@8",
                    displayGroup: "fast"
                }, {
                    notionName: "orange-tart",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 2.5,
                            outputRate: 20,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5.1",
                    displayNameWithProvider: "OpenAI GPT-5.1",
                    displayGroup: "fast"
                }, {
                    notionName: "orange-tart-minimal-thinking",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "orange-tart",
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 2.5,
                            outputRate: 20,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: .0625,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Orange Tart (Minimal Thinking)",
                    displayNameWithProvider: "OpenAI Orange Tart (Minimal Thinking)",
                    displayGroup: "fast"
                }, {
                    notionName: "anthropic-sonnet-4",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Claude 4 Sonnet",
                    displayNameWithProvider: "Anthropic Claude 4 Sonnet",
                    displayGroup: "fast"
                }, {
                    notionName: "anthropic-sonnet-3.7",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Claude 3.7 Sonnet",
                    displayNameWithProvider: "Anthropic Claude 3.7 Sonnet",
                    displayGroup: "intelligent",
                    deprecated: !0
                }, {
                    notionName: "anthropic-sonnet-3.7-thinking",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "anthropic-sonnet-3.7",
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Claude 3.7 Sonnet with thinking",
                    displayNameWithProvider: "Anthropic Claude 3.7 Sonnet with thinking",
                    displayGroup: "intelligent"
                }, {
                    notionName: "anthropic-opus",
                    maxOutputTokens: 4096,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 15,
                            outputRate: 75,
                            cachedRate: 1.5,
                            cachedWriteRate: 18.75
                        }
                    },
                    displayName: "Claude Opus 3",
                    displayNameWithProvider: "Anthropic Claude Opus 3",
                    displayGroup: "intelligent"
                }, {
                    notionName: "anthropic-sonnet-4-thinking",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "anthropic-sonnet-4",
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Claude 4 Sonnet with thinking",
                    displayNameWithProvider: "Anthropic Claude 4 Sonnet with thinking",
                    displayGroup: "intelligent"
                }, {
                    notionName: "anthropic-opus-4",
                    maxOutputTokens: 32e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 15,
                            outputRate: 75,
                            cachedRate: 1.5,
                            cachedWriteRate: 18.75
                        }
                    },
                    displayName: "Claude 4 Opus",
                    displayNameWithProvider: "Anthropic Claude 4 Opus",
                    displayGroup: "fast"
                }, {
                    notionName: "anthropic-opus-4-thinking",
                    maxOutputTokens: 32e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "anthropic-opus-4",
                    pricing: {
                        default: {
                            inputRate: 15,
                            outputRate: 75,
                            cachedRate: 1.5,
                            cachedWriteRate: 18.75
                        }
                    },
                    displayName: "Claude 4 Opus with thinking",
                    displayNameWithProvider: "Anthropic Claude 4 Opus with thinking",
                    displayGroup: "intelligent"
                }, {
                    notionName: "anthropic-opus-4.1",
                    maxOutputTokens: 32e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 15,
                            outputRate: 75,
                            cachedRate: 1.5,
                            cachedWriteRate: 18.75
                        }
                    },
                    displayName: "Claude 4.1 Opus",
                    displayNameWithProvider: "Anthropic Claude 4.1 Opus",
                    displayGroup: "fast"
                }, {
                    notionName: "anthropic-opus-4.1-thinking",
                    maxOutputTokens: 32e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "anthropic-opus-4.1",
                    pricing: {
                        default: {
                            inputRate: 15,
                            outputRate: 75,
                            cachedRate: 1.5,
                            cachedWriteRate: 18.75
                        }
                    },
                    displayName: "Claude 4.1 Opus with thinking",
                    displayNameWithProvider: "Anthropic Claude 4.1 Opus with thinking",
                    displayGroup: "intelligent"
                }, {
                    notionName: "anthropic-sonnet-alt",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Claude Sonnet (dev only)",
                    displayNameWithProvider: "Anthropic Claude Sonnet (dev only)",
                    displayGroup: "fast"
                }, {
                    notionName: "anthropic-sonnet-alt-no-thinking",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "anthropic-sonnet-alt",
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Claude Sonnet 4.5 no thinking",
                    displayNameWithProvider: "Anthropic Claude Sonnet 4.5 no thinking",
                    displayGroup: "fast"
                }, {
                    notionName: "anthropic-sonnet-alt-thinking",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "anthropic-sonnet-alt",
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Claude Sonnet (dev only) with thinking",
                    displayNameWithProvider: "Anthropic Claude Sonnet (dev only) with thinking",
                    displayGroup: "intelligent"
                }, {
                    notionName: "anthropic-haiku-4.5",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 1,
                            outputRate: 5,
                            cachedRate: .1,
                            cachedWriteRate: 1.25
                        }
                    },
                    displayName: "Claude Haiku 4.5",
                    displayNameWithProvider: "Anthropic Claude Haiku 4.5",
                    displayGroup: "fast"
                }, {
                    notionName: "anthropic-haiku-4.5-thinking",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "anthropic-haiku-4.5",
                    pricing: {
                        default: {
                            inputRate: 1,
                            outputRate: 5,
                            cachedRate: .1,
                            cachedWriteRate: 1.25
                        }
                    },
                    displayName: "Claude Haiku 4.5 with thinking",
                    displayNameWithProvider: "Anthropic Claude Haiku 4.5 with thinking",
                    displayGroup: "intelligent"
                }, {
                    notionName: "apple-danish",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 5,
                            outputRate: 25,
                            cachedRate: .5,
                            cachedWriteRate: 6.25
                        }
                    },
                    displayName: "Claude Opus 4.5",
                    displayNameWithProvider: "Anthropic Claude Opus 4.5",
                    displayGroup: "intelligent"
                }, {
                    notionName: "vertex-gemini-1.5-pro",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 5,
                            cachedRate: .31,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "vertex-gemini-1.5-flash",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .15,
                            outputRate: .6,
                            cachedRate: .075,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "vertex-gemini-2.0-flash",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .15,
                            outputRate: .6,
                            cachedRate: .075,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "vertex-gemini-2.5-pro",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "vertex-gemini-2.5-flash",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .3,
                            outputRate: 2.5,
                            cachedRate: .03,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "gemini-pro",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "vertex-gemini-2.5-pro",
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Gemini 2.5 Pro",
                    displayNameWithProvider: "Google Gemini 2.5 Pro",
                    displayGroup: "intelligent"
                }, {
                    notionName: "gemini-flash",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "vertex-gemini-2.5-flash",
                    pricing: {
                        default: {
                            inputRate: .3,
                            outputRate: 2.5,
                            cachedRate: .03,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Gemini 2.5 Flash",
                    displayNameWithProvider: "Google Gemini 2.5 Flash",
                    displayGroup: "fast"
                }, {
                    notionName: "gateau-roule",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 2,
                            outputRate: 12,
                            cachedRate: .2,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Gemini 3 Pro",
                    displayNameWithProvider: "Google Gemini 3 Pro",
                    displayGroup: "intelligent"
                }, {
                    notionName: "gateau-roule-low-thinking",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 2,
                            outputRate: 12,
                            cachedRate: .2,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Gemini 3 Pro",
                    displayNameWithProvider: "Google Gemini 3 Pro",
                    displayGroup: "fast"
                }, {
                    notionName: "fireworks-llama3-70b",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .8,
                            outputRate: .8,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Llama 3 70B",
                    displayNameWithProvider: "Fireworks Llama 3 70B",
                    displayGroup: "fast"
                }, {
                    notionName: "fireworks-gpt-oss-safeguard-120b",
                    provider: "fireworks",
                    maxOutputTokens: 131100,
                    maxContextTokens: 131100,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .8,
                            outputRate: .8,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-OSS Safeguard 120B",
                    displayNameWithProvider: "Fireworks GPT-OSS Safeguard 120B"
                }, {
                    notionName: "fireworks-deepseek-r1",
                    maxOutputTokens: 16384,
                    maxContextTokens: 128e3,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .9,
                            outputRate: .9,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "DeepSeek R1",
                    displayNameWithProvider: "Fireworks DeepSeek R1",
                    displayGroup: "intelligent"
                }, {
                    notionName: "fireworks-llama3.1-405b",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 2,
                            outputRate: 2,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-llama3.1-70b",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .8,
                            outputRate: .8,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-llama3.3-70b",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .8,
                            outputRate: .8,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-llama3.3-70b-dedicated",
                    vendorName: "accounts/notion/deployedModels/llama-v3p3-70b-instruct-80986cac",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .8,
                            outputRate: .8,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-llama3.3-70b-dedicated-multiregion",
                    vendorName: "accounts/notion/deployments/mr-a4fac5d2",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .8,
                            outputRate: .8,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-llama3.1-8b",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 2,
                            outputRate: 2,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-mixtral-22b",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .5,
                            outputRate: .5,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-mixtral-7b",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .5,
                            outputRate: .5,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-ft-router-101",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .5,
                            outputRate: .5,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-ft-router-102",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .5,
                            outputRate: .5,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-deepseek-v3",
                    maxOutputTokens: 20480,
                    maxContextTokens: 128e3,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .9,
                            outputRate: .9,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-deepseek-r1-0528",
                    maxOutputTokens: 16384,
                    maxContextTokens: 128e3,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: .9,
                            outputRate: .9,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-kimi-k2",
                    maxOutputTokens: 16384,
                    maxContextTokens: 128e3,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 1,
                            outputRate: 1,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-kimi-k2.5",
                    maxOutputTokens: 32768,
                    maxContextTokens: 262144,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 1,
                            outputRate: 1,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Kimi K2.5",
                    displayNameWithProvider: "Fireworks Kimi K2.5",
                    displayGroup: "intelligent"
                }, {
                    notionName: "fireworks-minimax-m2.5",
                    maxOutputTokens: 16384,
                    maxContextTokens: 196608,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: .3,
                            outputRate: 1.2,
                            cachedRate: .03,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "MiniMax M2.5",
                    displayNameWithProvider: "Fireworks MiniMax M2.5",
                    displayGroup: "intelligent"
                }, {
                    notionName: "fireworks-glm-5",
                    maxOutputTokens: 25344,
                    maxContextTokens: 198e3,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: 1,
                            outputRate: 3.2,
                            cachedRate: .2,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GLM-5",
                    displayNameWithProvider: "Fireworks GLM-5",
                    displayGroup: "intelligent"
                }, {
                    notionName: "fireworks-gpt-oss-20b",
                    maxOutputTokens: 16384,
                    maxContextTokens: 128e3,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 1,
                            outputRate: 1,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-gpt-oss-120b",
                    maxOutputTokens: 16384,
                    maxContextTokens: 128e3,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    pricing: {
                        default: {
                            inputRate: .15,
                            outputRate: .6,
                            cachedRate: .01,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "fireworks-llama-8b-finetune-v07-p50-cru6bgc4",
                    vendorName: "accounts/notion/deployedModels/8b--incl-translated-thumbsupdown-v07--judge-0-9-p50-sgmio3b5",
                    maxOutputTokens: 16384,
                    maxContextTokens: 16384,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    pricing: {
                        default: {
                            inputRate: 1,
                            outputRate: 1,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "cinder-kite",
                    maxOutputTokens: 4096,
                    maxContextTokens: 32768,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: .5,
                            outputRate: 2,
                            cachedRate: .1,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Engram 1",
                    displayNameWithProvider: "Engram 1",
                    displayGroup: "fast"
                }, {
                    notionName: "groq-gemma2-9b-it",
                    maxOutputTokens: 8192,
                    maxContextTokens: 8192,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: .2,
                            outputRate: .2,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "groq-gemma-7b-it",
                    maxOutputTokens: 8192,
                    maxContextTokens: 8192,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: .07,
                            outputRate: .07,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "groq-llama-70b",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: .59,
                            outputRate: .79,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "groq-llama-8b",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: .05,
                            outputRate: .08,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "groq-mixtral",
                    maxOutputTokens: 32768,
                    maxContextTokens: 32768,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: .24,
                            outputRate: .24,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "bedrock-nova-pro",
                    maxOutputTokens: 5e3,
                    maxContextTokens: 3e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: 8,
                            outputRate: 8,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "bedrock-nova-lite",
                    maxOutputTokens: 5e3,
                    maxContextTokens: 3e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: .06,
                            outputRate: .24,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "bedrock-nova-micro",
                    maxOutputTokens: 5e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: .035,
                            outputRate: .14,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "bedrock-anthropic-sonnet-3.7",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    }
                }, {
                    notionName: "cerebras-llama3.1-8b",
                    maxOutputTokens: 16e3,
                    maxContextTokens: 16e3,
                    optimizedMaxOutputTokens: 2048,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: .1,
                            outputRate: .1,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "cerebras-llama3.3-70b",
                    maxOutputTokens: 48e3,
                    maxContextTokens: 48e3,
                    optimizedMaxOutputTokens: 2048,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    deprecated: !0,
                    pricing: {
                        default: {
                            inputRate: .6,
                            outputRate: .6,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "cerebras-deepseek-r1-distill-llama-70b",
                    maxOutputTokens: 64e3,
                    maxContextTokens: 64e3,
                    optimizedMaxOutputTokens: 2048,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: .6,
                            outputRate: .6,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "cerebras-gpt-oss-120b",
                    maxOutputTokens: 4e4,
                    maxContextTokens: 4e4,
                    optimizedMaxOutputTokens: 2048,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: .35,
                            outputRate: .75,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "anyscale-gpt-oss-safeguard-20b",
                    maxOutputTokens: 16384,
                    maxContextTokens: 128e3,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    }
                }, {
                    notionName: "baseten-kimi-k2.5",
                    maxOutputTokens: 262e3,
                    maxContextTokens: 262e3,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isAgentModel: !0,
                    pricing: {
                        default: {
                            inputRate: .6,
                            outputRate: 3
                        }
                    },
                    displayName: "Kimi K2.5",
                    displayNameWithProvider: "Baseten Kimi K2.5",
                    displayGroup: "fast"
                }, {
                    notionName: "oatmeal-cookie",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "oatmeal-cookie",
                    pricing: {
                        default: {
                            inputRate: 1.75,
                            outputRate: 14,
                            cachedRate: .175,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .875,
                            outputRate: 7,
                            cachedRate: .0875,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 3.5,
                            outputRate: 28,
                            cachedRate: .35,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .875,
                            outputRate: 7,
                            cachedRate: .0875,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT 5.2",
                    displayNameWithProvider: "GPT 5.2",
                    displayGroup: "fast"
                }, {
                    notionName: "pi-openai-gpt-5.2",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "oatmeal-cookie",
                    pricing: {
                        default: {
                            inputRate: 1.75,
                            outputRate: 14,
                            cachedRate: .175,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .875,
                            outputRate: 7,
                            cachedRate: .0875,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 3.5,
                            outputRate: 28,
                            cachedRate: .35,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .875,
                            outputRate: 7,
                            cachedRate: .0875,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Pi OpenAI GPT 5.2",
                    displayNameWithProvider: "Pi OpenAI GPT 5.2",
                    displayGroup: "fast"
                }, {
                    notionName: "pi-anthropic-sonnet-4.6",
                    maxOutputTokens: 64e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "almond-croissant-high",
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Pi Anthropic Sonnet 4.6",
                    displayNameWithProvider: "Pi Anthropic Sonnet 4.6",
                    displayGroup: "fast"
                }, {
                    notionName: "pi-anthropic-opus-4.6",
                    maxOutputTokens: 32e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "avocado-froyo-high",
                    pricing: {
                        default: {
                            inputRate: 15,
                            outputRate: 75,
                            cachedRate: 1.5,
                            cachedWriteRate: 18.75
                        }
                    },
                    displayName: "Pi Anthropic Opus 4.6",
                    displayNameWithProvider: "Pi Anthropic Opus 4.6",
                    displayGroup: "intelligent"
                }, {
                    notionName: "pi-gemini-3.1-pro",
                    maxOutputTokens: 65536,
                    maxInputLength: 272e3,
                    maxContextTokens: 1048576,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "galette",
                    pricing: {
                        default: {
                            inputRate: 2,
                            outputRate: 12,
                            cachedRate: .2,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Pi Gemini 3.1 Pro",
                    displayNameWithProvider: "Pi Gemini 3.1 Pro",
                    displayGroup: "intelligent"
                }, {
                    notionName: "pi-fireworks-glm-5",
                    maxOutputTokens: 25344,
                    maxInputLength: 272e3,
                    maxContextTokens: 198e3,
                    optimizedMaxOutputTokens: 4096,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "fireworks-glm-5",
                    pricing: {
                        default: {
                            inputRate: 1,
                            outputRate: 3.2,
                            cachedRate: .2,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Pi Fireworks GLM-5",
                    displayNameWithProvider: "Pi Fireworks GLM-5",
                    displayGroup: "intelligent"
                }, {
                    notionName: "oatmeal-cookie-medium-thinking",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "oatmeal-cookie",
                    pricing: {
                        default: {
                            inputRate: 1.75,
                            outputRate: 14,
                            cachedRate: .175,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .875,
                            outputRate: 7,
                            cachedRate: .0875,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 3.5,
                            outputRate: 28,
                            cachedRate: .35,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .875,
                            outputRate: 7,
                            cachedRate: .0875,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5.2 Medium",
                    displayNameWithProvider: "OpenAI GPT-5.2 Medium",
                    displayGroup: "fast"
                }, {
                    notionName: "oatmeal-cookie-high-thinking",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "oatmeal-cookie",
                    pricing: {
                        default: {
                            inputRate: 1.75,
                            outputRate: 14,
                            cachedRate: .175,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .875,
                            outputRate: 7,
                            cachedRate: .0875,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 3.5,
                            outputRate: 28,
                            cachedRate: .35,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .875,
                            outputRate: 7,
                            cachedRate: .0875,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5.2 High",
                    displayNameWithProvider: "OpenAI GPT-5.2 High",
                    displayGroup: "fast"
                }, {
                    notionName: "oatmeal-cake",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "oatmeal-cake",
                    pricing: {
                        default: {
                            inputRate: 21,
                            outputRate: 168,
                            cachedRate: 21,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: .625,
                            outputRate: 5,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Oatmeal Cake",
                    displayNameWithProvider: "Oatmeal Cake",
                    displayGroup: "fast"
                }, {
                    notionName: "gpt-5.3-codex",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "gpt-5.3-codex",
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5.3 Codex",
                    displayNameWithProvider: "OpenAI GPT-5.3 Codex",
                    displayGroup: "intelligent"
                }, {
                    notionName: "oval-kumquat",
                    maxOutputTokens: 128e3,
                    maxInputLength: 922e3,
                    maxContextTokens: 105e4,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "oval-kumquat",
                    pricing: {
                        default: {
                            inputRate: 2.5,
                            outputRate: 15,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: 1.25,
                            outputRate: 7.5,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 5,
                            outputRate: 30,
                            cachedRate: .5,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: .125,
                            outputRate: 7,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Oval Kumquat",
                    displayNameWithProvider: "Oval Kumquat",
                    displayGroup: "fast"
                }, {
                    notionName: "oval-kumquat-medium",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "oval-kumquat",
                    pricing: {
                        default: {
                            inputRate: 2.5,
                            outputRate: 15,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: 1.25,
                            outputRate: 7.5,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 5,
                            outputRate: 30,
                            cachedRate: .5,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: 1.25,
                            outputRate: 7.5,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Oval Kumquat (Medium)",
                    displayNameWithProvider: "Oval Kumquat (Medium)",
                    displayGroup: "fast"
                }, {
                    notionName: "oval-kumquat-high",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "oval-kumquat",
                    pricing: {
                        default: {
                            inputRate: 2.5,
                            outputRate: 15,
                            cachedRate: .25,
                            cachedWriteRate: 0
                        },
                        batch: {
                            inputRate: 1.25,
                            outputRate: 7.5,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        },
                        priority: {
                            inputRate: 5,
                            outputRate: 30,
                            cachedRate: .5,
                            cachedWriteRate: 0
                        },
                        flex: {
                            inputRate: 1.25,
                            outputRate: 7.5,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Oval Kumquat (High)",
                    displayNameWithProvider: "Oval Kumquat (High)",
                    displayGroup: "fast"
                }, {
                    notionName: "oregon-grape-low",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "oregon-grape-low",
                    pricing: {
                        default: {
                            inputRate: .75,
                            outputRate: 4.5,
                            cachedRate: .075,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Oregon Grape (Low)",
                    displayNameWithProvider: "Oregon Grape (Low)",
                    displayGroup: "fast"
                }, {
                    notionName: "oregon-grape-medium",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "oregon-grape-low",
                    pricing: {
                        default: {
                            inputRate: .75,
                            outputRate: 4.5,
                            cachedRate: .075,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Oregon Grape (Medium)",
                    displayNameWithProvider: "Oregon Grape (Medium)",
                    displayGroup: "fast"
                }, {
                    notionName: "oregon-grape-high",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "oregon-grape-low",
                    pricing: {
                        default: {
                            inputRate: .75,
                            outputRate: 4.5,
                            cachedRate: .075,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Oregon Grape (High)",
                    displayNameWithProvider: "Oregon Grape (High)",
                    displayGroup: "fast"
                }, {
                    notionName: "otaheite-apple-low",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "otaheite-apple-low",
                    pricing: {
                        default: {
                            inputRate: .2,
                            outputRate: 1.25,
                            cachedRate: .02,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Otaheite Apple (Low)",
                    displayNameWithProvider: "Otaheite Apple (Low)",
                    displayGroup: "fast"
                }, {
                    notionName: "otaheite-apple-medium",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "otaheite-apple-low",
                    pricing: {
                        default: {
                            inputRate: .2,
                            outputRate: 1.25,
                            cachedRate: .02,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Otaheite Apple (Medium)",
                    displayNameWithProvider: "Otaheite Apple (Medium)",
                    displayGroup: "fast"
                }, {
                    notionName: "otaheite-apple-high",
                    maxOutputTokens: 128e3,
                    maxInputLength: 272e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "otaheite-apple-low",
                    pricing: {
                        default: {
                            inputRate: .2,
                            outputRate: 1.25,
                            cachedRate: .02,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Otaheite Apple (High)",
                    displayNameWithProvider: "Otaheite Apple (High)",
                    displayGroup: "fast"
                }, {
                    notionName: "gpt-5.2-codex",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "gpt-5.2-codex",
                    pricing: {
                        default: {
                            inputRate: 1.75,
                            outputRate: 14,
                            cachedRate: .175,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5.2 Codex",
                    displayNameWithProvider: "OpenAI GPT-5.2 Codex",
                    displayGroup: "intelligent"
                }, {
                    notionName: "gpt-5.1-codex-max",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "gpt-5.1-codex-max",
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5.1 Codex Max",
                    displayNameWithProvider: "OpenAI GPT-5.1 Codex Max",
                    displayGroup: "intelligent"
                }, {
                    notionName: "gpt-5.1-codex",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    maxInputLength: 272e3,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "gpt-5.1-codex",
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "GPT-5.1 Codex",
                    displayNameWithProvider: "OpenAI GPT-5.1 Codex",
                    displayGroup: "intelligent"
                }, {
                    notionName: "gingerbread",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "gingerbread",
                    pricing: {
                        default: {
                            inputRate: .5,
                            outputRate: 3,
                            cachedRate: .05,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Gemini 3 Flash",
                    displayNameWithProvider: "Google Gemini 3 Flash",
                    displayGroup: "fast"
                }, {
                    notionName: "avocado-froyo-max",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "avocado-froyo-max",
                    pricing: {
                        default: {
                            inputRate: 5,
                            outputRate: 25,
                            cachedRate: .5,
                            cachedWriteRate: 6.25
                        }
                    },
                    displayName: "Opus 4.6 (Max)",
                    displayNameWithProvider: "Opus 4.6 (Max)",
                    displayGroup: "intelligent"
                }, {
                    notionName: "avocado-froyo-high",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "avocado-froyo-high",
                    pricing: {
                        default: {
                            inputRate: 5,
                            outputRate: 25,
                            cachedRate: .5,
                            cachedWriteRate: 6.25
                        }
                    },
                    displayName: "Opus 4.6 (High)",
                    displayNameWithProvider: "Opus 4.6 (High)",
                    displayGroup: "intelligent"
                }, {
                    notionName: "avocado-froyo-medium",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "avocado-froyo-medium",
                    pricing: {
                        default: {
                            inputRate: 5,
                            outputRate: 25,
                            cachedRate: .5,
                            cachedWriteRate: 6.25
                        }
                    },
                    displayName: "Opus 4.6 (Medium)",
                    displayNameWithProvider: "Opus 4.6 (Medium)",
                    displayGroup: "intelligent"
                }, {
                    notionName: "avocado-froyo-low",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "avocado-froyo-low",
                    pricing: {
                        default: {
                            inputRate: 5,
                            outputRate: 25,
                            cachedRate: .5,
                            cachedWriteRate: 6.25
                        }
                    },
                    displayName: "Opus 4.6 (Low)",
                    displayNameWithProvider: "Opus 4.6 (Low)",
                    displayGroup: "fast"
                }, {
                    notionName: "almond-croissant-max",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "almond-croissant-max",
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Sonnet 4.6 (Max)",
                    displayNameWithProvider: "Sonnet 4.6 (Max)",
                    displayGroup: "intelligent"
                }, {
                    notionName: "almond-croissant-high",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "almond-croissant-high",
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Sonnet 4.6 (High)",
                    displayNameWithProvider: "Sonnet 4.6 (High)",
                    displayGroup: "intelligent"
                }, {
                    notionName: "almond-croissant-medium",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "almond-croissant-medium",
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Sonnet 4.6 (Medium)",
                    displayNameWithProvider: "Sonnet 4.6 (Medium)",
                    displayGroup: "intelligent"
                }, {
                    notionName: "almond-croissant-low",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    baseModelForAvailability: "almond-croissant-low",
                    pricing: {
                        default: {
                            inputRate: 3,
                            outputRate: 15,
                            cachedRate: .3,
                            cachedWriteRate: 3.75
                        }
                    },
                    displayName: "Sonnet 4.6 (Low)",
                    displayNameWithProvider: "Sonnet 4.6 (Low)",
                    displayGroup: "fast"
                }, {
                    notionName: "oreo-cheesecake",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !1,
                    baseModelForAvailability: "oreo-cheesecake",
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Oreo Cheesecake",
                    displayNameWithProvider: "Oreo Cheesecake",
                    displayGroup: "fast"
                }, {
                    notionName: "old-fashioned-donut",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !0,
                    isThinkingEnabled: !0,
                    isAgentModel: !1,
                    baseModelForAvailability: "old-fashioned-donut",
                    pricing: {
                        default: {
                            inputRate: 1.25,
                            outputRate: 10,
                            cachedRate: .125,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Old Fashioned Donut",
                    displayNameWithProvider: "Old Fashioned Donut",
                    displayGroup: "fast"
                }, {
                    notionName: "galette",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    temperature: 1,
                    pricing: {
                        default: {
                            inputRate: 2,
                            outputRate: 12,
                            cachedRate: .2,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Gemini 3.1 Pro (High)",
                    displayNameWithProvider: "Google Gemini 3.1 Pro (High)",
                    displayGroup: "intelligent"
                }, {
                    notionName: "galette-low-thinking",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    temperature: 1,
                    pricing: {
                        default: {
                            inputRate: 2,
                            outputRate: 12,
                            cachedRate: .2,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Gemini 3.1 Pro (Low)",
                    displayNameWithProvider: "Google Gemini 3.1 Pro (Low)",
                    displayGroup: "fast"
                }, {
                    notionName: "galette-medium-thinking",
                    maxOutputTokens: 65536,
                    maxContextTokens: 1e6,
                    isProductionCallable: !0,
                    isProductionPickable: !0,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    temperature: 1,
                    pricing: {
                        default: {
                            inputRate: 2,
                            outputRate: 12,
                            cachedRate: .2,
                            cachedWriteRate: 0
                        }
                    },
                    displayName: "Gemini 3.1 Pro",
                    displayNameWithProvider: "Google Gemini 3.1 Pro",
                    displayGroup: "intelligent"
                }, {
                    notionName: "custom-openai-slot-1",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "custom-openai-slot-1",
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0
                        }
                    },
                    displayGroup: "intelligent"
                }, {
                    notionName: "custom-openai-slot-2",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "custom-openai-slot-2",
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0
                        }
                    },
                    displayGroup: "intelligent"
                }, {
                    notionName: "custom-openai-slot-3",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "custom-openai-slot-3",
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0
                        }
                    },
                    displayGroup: "intelligent"
                }, {
                    notionName: "custom-openai-slot-4",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "custom-openai-slot-4",
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0
                        }
                    },
                    displayGroup: "intelligent"
                }, {
                    notionName: "custom-openai-slot-5",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 4e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "custom-openai-slot-5",
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0
                        }
                    },
                    displayGroup: "intelligent"
                }, {
                    notionName: "custom-anthropic-slot-1",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "custom-anthropic-slot-1",
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    },
                    displayGroup: "intelligent"
                }, {
                    notionName: "custom-anthropic-slot-2",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "custom-anthropic-slot-2",
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    },
                    displayGroup: "intelligent"
                }, {
                    notionName: "custom-anthropic-slot-3",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "custom-anthropic-slot-3",
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    },
                    displayGroup: "intelligent"
                }, {
                    notionName: "custom-anthropic-slot-4",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "custom-anthropic-slot-4",
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    },
                    displayGroup: "intelligent"
                }, {
                    notionName: "custom-anthropic-slot-5",
                    maxOutputTokens: 128e3,
                    maxContextTokens: 2e5,
                    isProductionCallable: !0,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !0,
                    isAgentModel: !0,
                    isChatModel: !0,
                    baseModelForAvailability: "custom-anthropic-slot-5",
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0,
                            cachedRate: 0,
                            cachedWriteRate: 0
                        }
                    },
                    displayGroup: "intelligent"
                }],
                o = new Map([...i, {
                    notionName: "raw-model-override",
                    maxOutputTokens: 8192,
                    maxContextTokens: 128e3,
                    isProductionCallable: !1,
                    isProductionPickable: !1,
                    isHipaaCompliant: !1,
                    isThinkingEnabled: !1,
                    pricing: {
                        default: {
                            inputRate: 0,
                            outputRate: 0
                        }
                    }
                }].map(e => [e.notionName, e]))
        }
    }
]);