"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [57042], {
        166919: (e, t, r) => {
            r.d(t, {
                B_: () => a,
                Y0: () => i,
                _: () => n
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    queries: r(969475).array(r(969475).object({
                        required: {
                            keywords: r(969475).string(),
                            question: r(969475).string()
                        },
                        optional: {
                            includeNotionHelpdocs: r(969475).boolean(),
                            lookback: r(969475).string()
                        },
                        exact: !0
                    }))
                },
                optional: {
                    includeWebResults: r(969475).boolean()
                },
                exact: !0
            });
            let a = r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            id: r(969475).string(),
                            lastEdited: r(969475).string(),
                            path: r(969475).string(),
                            snippet: r(969475).string(),
                            title: r(969475).string(),
                            type: r(969475).literals("asana", "block", "box", "confluence", "custom", "discord", "github", "gmail", "google-calendar", "google-drive", "helpdoc", "helpdoc-section", "jira", "linear", "microsoft-teams", "notion-calendar", "notion-mail", "outlook", "page", "properties", "salesforce", "sharepoint", "slack", "webpage")
                        },
                        optional: {
                            badges: r(969475).array(r(969475).object({
                                required: {
                                    label: r(969475).string(),
                                    type: r(969475).literals("agent", "ai_skill", "archived", "current_page", "is_collection", "is_template", "most_viewed", "popular_this_week", "verified", "verified_expired")
                                },
                                optional: {},
                                exact: !0
                            })),
                            isPrivate: r(969475).boolean(),
                            messages: r(969475).array(r(969475).object({
                                required: {
                                    lastEdited: r(969475).string(),
                                    messageId: r(969475).string(),
                                    text: r(969475).string()
                                },
                                optional: {
                                    threadId: r(969475).string(),
                                    user: r(969475).string()
                                },
                                exact: !0
                            })),
                            pageId: r(969475).string(),
                            properties: r(969475).string(),
                            url: r(969475).string()
                        },
                        exact: !0
                    }))
                },
                optional: {
                    searchTargetStatuses: r(969475).array(r(969475).object({
                        required: {
                            status: r(969475).literals("error", "timeout"),
                            target: r(969475).literals("asana", "box", "confluence", "custom", "discord", "github", "gmail", "google-calendar", "google-drive", "helpdocs", "jira", "linear", "microsoft-teams", "notion", "notion-calendar", "notion-mail", "outlook", "salesforce", "sharepoint", "slack", "web")
                        },
                        optional: {},
                        exact: !0
                    })),
                    systemMessages: r(969475).array(r(969475).string())
                },
                exact: !0
            });
            r(969475).object({
                required: {
                    keywords: r(969475).string(),
                    question: r(969475).string()
                },
                optional: {
                    includeNotionHelp: r(969475).boolean(),
                    includeWeb: r(969475).boolean(),
                    lookback: r(969475).string()
                },
                exact: !0
            });
            let i = r(969475).object({
                    required: {
                        results: r(969475).array(r(969475).lazy(() => o))
                    },
                    optional: {},
                    exact: !0
                }),
                o = r(969475).object({
                    required: {
                        id: r(969475).string(),
                        snippet: r(969475).string(),
                        title: r(969475).string(),
                        type: r(969475).literals("asana", "block", "box", "confluence", "custom", "discord", "github", "gmail", "google-calendar", "google-drive", "helpdoc", "helpdoc-section", "jira", "linear", "microsoft-teams", "notion-calendar", "notion-mail", "outlook", "page", "properties", "salesforce", "sharepoint", "slack", "webpage")
                    },
                    optional: {
                        lastEdited: r(969475).string(),
                        metadata: r(969475).union([r(969475).object({
                            required: {
                                calendarType: r(969475).literals("google-calendar", "notion-calendar"),
                                source: r(969475).literal("calendar")
                            },
                            optional: {
                                attendeeCount: r(969475).number(),
                                isRecurring: r(969475).boolean(),
                                location: r(969475).string()
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                source: r(969475).literal("github")
                            },
                            optional: {
                                authorName: r(969475).string(),
                                fileType: r(969475).string(),
                                repoName: r(969475).string(),
                                statusTag: r(969475).string()
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                mailType: r(969475).literals("gmail", "notion-mail"),
                                source: r(969475).literal("mail"),
                                threadId: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                blockType: r(969475).string(),
                                source: r(969475).literal("notion")
                            },
                            optional: {
                                badges: r(969475).array(r(969475).object({
                                    required: {
                                        label: r(969475).string(),
                                        type: r(969475).literals("agent", "ai_skill", "archived", "current_page", "is_collection", "is_template", "most_viewed", "popular_this_week", "verified", "verified_expired")
                                    },
                                    optional: {},
                                    exact: !0
                                })),
                                createdTime: r(969475).string(),
                                icon: r(969475).string()
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                source: r(969475).literal("slack")
                            },
                            optional: {
                                authorName: r(969475).string(),
                                channelId: r(969475).string(),
                                teamId: r(969475).string(),
                                threadTs: r(969475).string()
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                score: r(969475).number(),
                                source: r(969475).literal("web")
                            },
                            optional: {
                                favicon: r(969475).string()
                            },
                            exact: !0
                        })]),
                        path: r(969475).string(),
                        url: r(969475).string()
                    },
                    exact: !0
                }),
                n = {
                    dataTypes: `
type SearchPersistedState = {}

type SearchInput = {
	queries: Array<SearchQueryInput>
	includeWebResults?: boolean
}

type SearchEffectResult = {
	results: Array<SearchResult>
	systemMessages?: Array<string>
	searchTargetStatuses?: Array<{
		target: UniversalSearchTarget
		status: "timeout" | "error"
	}>
}

type UnifiedSearchInput = {
	question: string
	keywords: string
	lookback?: string
	includeNotionHelp?: boolean
	includeWeb?: boolean
}

type UnifiedSearchResult = {
	results: Array<UnifiedSearchResultItem>
}

type UnifiedSearchResultItem = {
	id: string
	type: AssistantSearchResultType
	title: string
	snippet: string
	url?: string
	path?: string
	lastEdited?: string
	metadata?: SearchHitMetadata
}`,
                    dataTypesArray: ["SearchPersistedState", "SearchInput", "SearchEffectResult", "UnifiedSearchInput", "UnifiedSearchResult", "UnifiedSearchResultItem"],
                    persistedStateValidator: r(969475).object({
                        required: {},
                        optional: {},
                        exact: !0
                    }),
                    persistedState: "",
                    triggers: {},
                    effects: {
                        "search.search": "(args: SearchInput) => Promise<SearchEffectResult>",
                        "search.unifiedSearch": "(args: UnifiedSearchInput) => Promise<UnifiedSearchResult>"
                    },
                    effectsArray: ["search.search", "search.unifiedSearch"],
                    effectsValidators: {
                        "search.search": r(969475).object({
                            required: {
                                queries: r(969475).array(r(969475).object({
                                    required: {
                                        keywords: r(969475).string(),
                                        question: r(969475).string()
                                    },
                                    optional: {
                                        includeNotionHelpdocs: r(969475).boolean(),
                                        lookback: r(969475).string()
                                    },
                                    exact: !0
                                }))
                            },
                            optional: {
                                includeWebResults: r(969475).boolean()
                            },
                            exact: !0
                        }),
                        "search.unifiedSearch": r(969475).object({
                            required: {
                                keywords: r(969475).string(),
                                question: r(969475).string()
                            },
                            optional: {
                                includeNotionHelp: r(969475).boolean(),
                                includeWeb: r(969475).boolean(),
                                lookback: r(969475).string()
                            },
                            exact: !0
                        })
                    }
                }
        },
        527180: (e, t, r) => {
            r.d(t, {
                ve: () => o,
                Iw: () => q,
                Gh: () => s,
                Xk: () => l,
                tB: () => c,
                Ml: () => n,
                bj: () => _,
                h6: () => x
            });
            let a = r(969475).union([r(969475).object({
                required: {
                    combinator: r(969475).literals("and", "or"),
                    filters: r(969475).array(r(969475).lazy(() => a)),
                    type: r(969475).literal("group")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).object({
                        required: {
                            operator: r(969475).literal("eq"),
                            value: r(969475).boolean()
                        },
                        optional: {},
                        exact: !0
                    }),
                    type: r(969475).literal("calendarEvent.isAllDay")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).object({
                        required: {
                            operator: r(969475).literal("eq"),
                            value: r(969475).boolean()
                        },
                        optional: {},
                        exact: !0
                    }),
                    type: r(969475).literal("calendarEvent.isTransparent")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).object({
                        required: {
                            operator: r(969475).literals("in", "nin"),
                            values: r(969475).array(r(969475).literals("availability", "birthday", "default", "focusTime", "fromGmail", "outOfOffice"))
                        },
                        optional: {},
                        exact: !0
                    }),
                    type: r(969475).literal("calendarEvent.category")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).object({
                        required: {
                            operator: r(969475).literal("in"),
                            values: r(969475).array(r(969475).literals("attendeeResponseStatus", "attendees", "conferencing", "description", "location", "period", "summary"))
                        },
                        optional: {},
                        exact: !0
                    }),
                    type: r(969475).literal("calendarEvent.updatedField")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).object({
                        required: {
                            operator: r(969475).literals("empty", "notEmpty")
                        },
                        optional: {},
                        exact: !0
                    }),
                    type: r(969475).literal("calendarEvent.conferencing")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).object({
                        required: {
                            operator: r(969475).literals("every", "none", "some"),
                            values: r(969475).array(r(969475).literals("accepted", "declined", "needsAction", "tentative"))
                        },
                        optional: {},
                        exact: !0
                    }),
                    type: r(969475).literal("calendarEvent.attendees.responseStatus")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).object({
                        required: {
                            operator: r(969475).literals("every", "none", "some"),
                            values: r(969475).array(r(969475).literals("accepted", "declined", "needsAction", "tentative"))
                        },
                        optional: {},
                        exact: !0
                    }),
                    type: r(969475).literal("calendarEvent.resources.responseStatus")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).union([r(969475).object({
                        required: {
                            combinator: r(969475).literals("and", "or"),
                            operator: r(969475).literal("contains"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            combinator: r(969475).literals("and", "or"),
                            operator: r(969475).literal("notContains"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("empty")
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("in"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("nin"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("notEmpty")
                        },
                        optional: {},
                        exact: !0
                    })]),
                    type: r(969475).literal("calendarEvent.description")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).union([r(969475).object({
                        required: {
                            combinator: r(969475).literals("and", "or"),
                            operator: r(969475).literal("contains"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            combinator: r(969475).literals("and", "or"),
                            operator: r(969475).literal("notContains"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("empty")
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("in"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("nin"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("notEmpty")
                        },
                        optional: {},
                        exact: !0
                    })]),
                    type: r(969475).literal("calendarEvent.location")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).union([r(969475).object({
                        required: {
                            combinator: r(969475).literals("and", "or"),
                            operator: r(969475).literal("contains"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            combinator: r(969475).literals("and", "or"),
                            operator: r(969475).literal("notContains"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("empty")
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("in"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("nin"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("notEmpty")
                        },
                        optional: {},
                        exact: !0
                    })]),
                    type: r(969475).literal("calendarEvent.organizer")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).union([r(969475).object({
                        required: {
                            combinator: r(969475).literals("and", "or"),
                            operator: r(969475).literal("contains"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            combinator: r(969475).literals("and", "or"),
                            operator: r(969475).literal("notContains"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("empty")
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("in"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("nin"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literal("notEmpty")
                        },
                        optional: {},
                        exact: !0
                    })]),
                    type: r(969475).literal("calendarEvent.summary")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    condition: r(969475).union([r(969475).object({
                        required: {
                            operator: r(969475).literals("every", "none", "notEvery", "some"),
                            values: r(969475).array(r(969475).string())
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            operator: r(969475).literals("empty", "notEmpty")
                        },
                        optional: {},
                        exact: !0
                    })]),
                    type: r(969475).literal("calendarEvent.attendees.email")
                },
                optional: {},
                exact: !0
            })]);
            r(969475).object({
                required: {
                    combinator: r(969475).literals("and", "or"),
                    filters: r(969475).array(r(969475).lazy(() => a)),
                    type: r(969475).literal("group")
                },
                optional: {},
                exact: !0
            });
            let i = r(969475).object({
                required: {
                    combinator: r(969475).literals("and", "or"),
                    filters: r(969475).array(r(969475).lazy(() => a)),
                    type: r(969475).literal("group")
                },
                optional: {},
                exact: !0
            });
            r(969475).union([r(969475).object({
                required: {
                    identifier: r(969475).string(),
                    type: r(969475).literal("accountOrganizationCalendars")
                },
                optional: {
                    actions: r(969475).array(r(969475).literals("read", "readCoworker", "write"))
                },
                exact: !0
            }), r(969475).object({
                required: {
                    accountId: (0, r(120462).YU)(),
                    calendarId: (0, r(120462).tn)(),
                    identifier: r(969475).string(),
                    type: r(969475).literal("calendar")
                },
                optional: {
                    actions: r(969475).array(r(969475).literals("read", "readCoworker", "write")),
                    constraints: r(969475).object({
                        required: {
                            skipConfirmation: r(969475).boolean()
                        },
                        optional: {},
                        exact: !0
                    })
                },
                exact: !0
            })]);
            let o = r(969475).object({
                    required: {
                        accounts: r(969475).array(r(969475).object({
                            required: {
                                accountId: r(969475).string(),
                                calendars: r(969475).array(r(969475).object({
                                    required: {
                                        accountId: r(969475).string(),
                                        calendarId: r(969475).string(),
                                        createdEvents: r(969475).array(r(969475).object({
                                            required: {
                                                calendar: r(969475).object({
                                                    required: {
                                                        accountId: r(969475).string(),
                                                        calendarId: r(969475).string()
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }),
                                                eventId: r(969475).string(),
                                                isAutoBlock: r(969475).boolean(),
                                                isMeeting: r(969475).boolean(),
                                                isRecurring: r(969475).boolean(),
                                                isTransparent: r(969475).boolean(),
                                                period: r(969475).union([r(969475).object({
                                                    required: {
                                                        end: r(969475).object({
                                                            required: {
                                                                date: r(969475).string()
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }),
                                                        start: r(969475).object({
                                                            required: {
                                                                date: r(969475).string()
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }),
                                                        type: r(969475).literal("DATE")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        end: r(969475).object({
                                                            required: {
                                                                dateTime: r(969475).string()
                                                            },
                                                            optional: {
                                                                timeZone: r(969475).string()
                                                            },
                                                            exact: !0
                                                        }),
                                                        start: r(969475).object({
                                                            required: {
                                                                dateTime: r(969475).string()
                                                            },
                                                            optional: {
                                                                timeZone: r(969475).string()
                                                            },
                                                            exact: !0
                                                        }),
                                                        type: r(969475).literal("DATE_TIME")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                })]),
                                                summary: r(969475).string(),
                                                webUrl: r(969475).string()
                                            },
                                            optional: {
                                                attachments: r(969475).array(r(969475).object({
                                                    required: {
                                                        url: r(969475).string()
                                                    },
                                                    optional: {
                                                        mimeType: r(969475).string(),
                                                        notionWorkspaceId: r(969475).string(),
                                                        title: r(969475).string()
                                                    },
                                                    exact: !0
                                                })),
                                                attendees: r(969475).array(r(969475).object({
                                                    required: {
                                                        isOptional: r(969475).boolean(),
                                                        isSelf: r(969475).boolean()
                                                    },
                                                    optional: {
                                                        displayName: r(969475).string(),
                                                        email: r(969475).string(),
                                                        isOrganizer: r(969475).boolean(),
                                                        responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                                    },
                                                    exact: !0
                                                })),
                                                colors: r(969475).object({
                                                    required: {},
                                                    optional: {
                                                        background: r(969475).string(),
                                                        foreground: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                conferencingUrl: r(969475).string(),
                                                creator: r(969475).object({
                                                    required: {
                                                        isSelf: r(969475).boolean()
                                                    },
                                                    optional: {
                                                        displayName: r(969475).string(),
                                                        email: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                description: r(969475).string(),
                                                eventStatus: r(969475).literals("cancelled", "confirmed", "tentative"),
                                                eventType: r(969475).literals("availability", "birthday", "default", "focusTime", "fromGmail", "outOfOffice"),
                                                location: r(969475).string(),
                                                organizer: r(969475).object({
                                                    required: {
                                                        isSelf: r(969475).boolean()
                                                    },
                                                    optional: {
                                                        displayName: r(969475).string(),
                                                        email: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                recurrenceRules: r(969475).array(r(969475).string()),
                                                resources: r(969475).array(r(969475).object({
                                                    required: {
                                                        isOptional: r(969475).boolean()
                                                    },
                                                    optional: {
                                                        displayName: r(969475).string(),
                                                        email: r(969475).string(),
                                                        responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                                    },
                                                    exact: !0
                                                })),
                                                responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                            },
                                            exact: !0
                                        })),
                                        isHidden: r(969475).boolean(),
                                        isPrimary: r(969475).boolean(),
                                        isReadOnly: r(969475).boolean(),
                                        isSelected: r(969475).boolean(),
                                        name: r(969475).string()
                                    },
                                    optional: {
                                        colors: r(969475).object({
                                            required: {},
                                            optional: {
                                                background: r(969475).string(),
                                                foreground: r(969475).string()
                                            },
                                            exact: !0
                                        }),
                                        description: r(969475).string()
                                    },
                                    exact: !0
                                })),
                                capabilities: r(969475).object({
                                    required: {
                                        readCalendars: r(969475).boolean(),
                                        readContacts: r(969475).boolean(),
                                        readEvents: r(969475).boolean(),
                                        searchEvents: r(969475).boolean(),
                                        writeEvents: r(969475).boolean()
                                    },
                                    optional: {},
                                    exact: !0
                                }),
                                providerName: r(969475).string()
                            },
                            optional: {
                                category: r(969475).literals("personal", "work"),
                                coworkersEmailDomains: r(969475).array(r(969475).string()),
                                email: r(969475).string()
                            },
                            exact: !0
                        }))
                    },
                    optional: {
                        citationContext: r(969475).record(r(969475).string(), r(969475).object({
                            required: {
                                id: r(969475).string(),
                                lastEdited: r(969475).string(),
                                path: r(969475).string(),
                                searchSourceType: r(969475).literal("notion-calendar"),
                                title: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })),
                        errors: r(969475).array(r(969475).object({
                            required: {
                                errorMessage: r(969475).string(),
                                identifier: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }))
                    },
                    exact: !0
                }),
                n = r(969475).object({
                    required: {
                        updatedEvents: r(969475).array(r(969475).object({
                            required: {
                                calendar: r(969475).object({
                                    required: {
                                        accountId: r(969475).string(),
                                        calendarId: r(969475).string()
                                    },
                                    optional: {},
                                    exact: !0
                                }),
                                eventId: r(969475).string(),
                                isAutoBlock: r(969475).boolean(),
                                isMeeting: r(969475).boolean(),
                                isRecurring: r(969475).boolean(),
                                isTransparent: r(969475).boolean(),
                                period: r(969475).union([r(969475).object({
                                    required: {
                                        end: r(969475).object({
                                            required: {
                                                date: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }),
                                        start: r(969475).object({
                                            required: {
                                                date: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }),
                                        type: r(969475).literal("DATE")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        end: r(969475).object({
                                            required: {
                                                dateTime: r(969475).string()
                                            },
                                            optional: {
                                                timeZone: r(969475).string()
                                            },
                                            exact: !0
                                        }),
                                        start: r(969475).object({
                                            required: {
                                                dateTime: r(969475).string()
                                            },
                                            optional: {
                                                timeZone: r(969475).string()
                                            },
                                            exact: !0
                                        }),
                                        type: r(969475).literal("DATE_TIME")
                                    },
                                    optional: {},
                                    exact: !0
                                })]),
                                summary: r(969475).string(),
                                webUrl: r(969475).string()
                            },
                            optional: {
                                attachments: r(969475).array(r(969475).object({
                                    required: {
                                        url: r(969475).string()
                                    },
                                    optional: {
                                        mimeType: r(969475).string(),
                                        notionWorkspaceId: r(969475).string(),
                                        title: r(969475).string()
                                    },
                                    exact: !0
                                })),
                                attendees: r(969475).array(r(969475).object({
                                    required: {
                                        isOptional: r(969475).boolean(),
                                        isSelf: r(969475).boolean()
                                    },
                                    optional: {
                                        displayName: r(969475).string(),
                                        email: r(969475).string(),
                                        isOrganizer: r(969475).boolean(),
                                        responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                    },
                                    exact: !0
                                })),
                                colors: r(969475).object({
                                    required: {},
                                    optional: {
                                        background: r(969475).string(),
                                        foreground: r(969475).string()
                                    },
                                    exact: !0
                                }),
                                conferencingUrl: r(969475).string(),
                                creator: r(969475).object({
                                    required: {
                                        isSelf: r(969475).boolean()
                                    },
                                    optional: {
                                        displayName: r(969475).string(),
                                        email: r(969475).string()
                                    },
                                    exact: !0
                                }),
                                description: r(969475).string(),
                                eventStatus: r(969475).literals("cancelled", "confirmed", "tentative"),
                                eventType: r(969475).literals("availability", "birthday", "default", "focusTime", "fromGmail", "outOfOffice"),
                                location: r(969475).string(),
                                organizer: r(969475).object({
                                    required: {
                                        isSelf: r(969475).boolean()
                                    },
                                    optional: {
                                        displayName: r(969475).string(),
                                        email: r(969475).string()
                                    },
                                    exact: !0
                                }),
                                recurrenceRules: r(969475).array(r(969475).string()),
                                resources: r(969475).array(r(969475).object({
                                    required: {
                                        isOptional: r(969475).boolean()
                                    },
                                    optional: {
                                        displayName: r(969475).string(),
                                        email: r(969475).string(),
                                        responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                    },
                                    exact: !0
                                })),
                                responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                            },
                            exact: !0
                        }))
                    },
                    optional: {
                        citationContext: r(969475).record(r(969475).string(), r(969475).object({
                            required: {
                                id: r(969475).string(),
                                lastEdited: r(969475).string(),
                                path: r(969475).string(),
                                searchSourceType: r(969475).literal("notion-calendar"),
                                title: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })),
                        errors: r(969475).array(r(969475).object({
                            required: {
                                errorMessage: r(969475).string(),
                                identifier: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }))
                    },
                    exact: !0
                }),
                l = r(969475).object({
                    required: {
                        accounts: r(969475).array(r(969475).object({
                            required: {
                                accountId: r(969475).string(),
                                calendars: r(969475).array(r(969475).object({
                                    required: {
                                        accountId: r(969475).string(),
                                        calendarId: r(969475).string(),
                                        events: r(969475).array(r(969475).object({
                                            required: {
                                                calendar: r(969475).object({
                                                    required: {
                                                        accountId: r(969475).string(),
                                                        calendarId: r(969475).string()
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }),
                                                eventId: r(969475).string(),
                                                isAutoBlock: r(969475).boolean(),
                                                isMeeting: r(969475).boolean(),
                                                isRecurring: r(969475).boolean(),
                                                isTransparent: r(969475).boolean(),
                                                period: r(969475).union([r(969475).object({
                                                    required: {
                                                        end: r(969475).object({
                                                            required: {
                                                                date: r(969475).string()
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }),
                                                        start: r(969475).object({
                                                            required: {
                                                                date: r(969475).string()
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }),
                                                        type: r(969475).literal("DATE")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        end: r(969475).object({
                                                            required: {
                                                                dateTime: r(969475).string()
                                                            },
                                                            optional: {
                                                                timeZone: r(969475).string()
                                                            },
                                                            exact: !0
                                                        }),
                                                        start: r(969475).object({
                                                            required: {
                                                                dateTime: r(969475).string()
                                                            },
                                                            optional: {
                                                                timeZone: r(969475).string()
                                                            },
                                                            exact: !0
                                                        }),
                                                        type: r(969475).literal("DATE_TIME")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                })]),
                                                summary: r(969475).string(),
                                                webUrl: r(969475).string()
                                            },
                                            optional: {
                                                attachments: r(969475).array(r(969475).object({
                                                    required: {
                                                        url: r(969475).string()
                                                    },
                                                    optional: {
                                                        mimeType: r(969475).string(),
                                                        notionWorkspaceId: r(969475).string(),
                                                        title: r(969475).string()
                                                    },
                                                    exact: !0
                                                })),
                                                attendees: r(969475).array(r(969475).object({
                                                    required: {
                                                        isOptional: r(969475).boolean(),
                                                        isSelf: r(969475).boolean()
                                                    },
                                                    optional: {
                                                        displayName: r(969475).string(),
                                                        email: r(969475).string(),
                                                        isOrganizer: r(969475).boolean(),
                                                        responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                                    },
                                                    exact: !0
                                                })),
                                                colors: r(969475).object({
                                                    required: {},
                                                    optional: {
                                                        background: r(969475).string(),
                                                        foreground: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                conferencingUrl: r(969475).string(),
                                                creator: r(969475).object({
                                                    required: {
                                                        isSelf: r(969475).boolean()
                                                    },
                                                    optional: {
                                                        displayName: r(969475).string(),
                                                        email: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                description: r(969475).string(),
                                                eventStatus: r(969475).literals("cancelled", "confirmed", "tentative"),
                                                eventType: r(969475).literals("availability", "birthday", "default", "focusTime", "fromGmail", "outOfOffice"),
                                                location: r(969475).string(),
                                                organizer: r(969475).object({
                                                    required: {
                                                        isSelf: r(969475).boolean()
                                                    },
                                                    optional: {
                                                        displayName: r(969475).string(),
                                                        email: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                recurrenceRules: r(969475).array(r(969475).string()),
                                                resources: r(969475).array(r(969475).object({
                                                    required: {
                                                        isOptional: r(969475).boolean()
                                                    },
                                                    optional: {
                                                        displayName: r(969475).string(),
                                                        email: r(969475).string(),
                                                        responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                                    },
                                                    exact: !0
                                                })),
                                                responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                            },
                                            exact: !0
                                        })),
                                        isHidden: r(969475).boolean(),
                                        isPrimary: r(969475).boolean(),
                                        isReadOnly: r(969475).boolean(),
                                        isSelected: r(969475).boolean(),
                                        name: r(969475).string()
                                    },
                                    optional: {
                                        colors: r(969475).object({
                                            required: {},
                                            optional: {
                                                background: r(969475).string(),
                                                foreground: r(969475).string()
                                            },
                                            exact: !0
                                        }),
                                        description: r(969475).string()
                                    },
                                    exact: !0
                                })),
                                capabilities: r(969475).object({
                                    required: {
                                        readCalendars: r(969475).boolean(),
                                        readContacts: r(969475).boolean(),
                                        readEvents: r(969475).boolean(),
                                        searchEvents: r(969475).boolean(),
                                        writeEvents: r(969475).boolean()
                                    },
                                    optional: {},
                                    exact: !0
                                }),
                                providerName: r(969475).string()
                            },
                            optional: {
                                category: r(969475).literals("personal", "work"),
                                coworkersEmailDomains: r(969475).array(r(969475).string()),
                                email: r(969475).string()
                            },
                            exact: !0
                        })),
                        userPreferences: r(969475).object({
                            required: {},
                            optional: {
                                timeFormat: r(969475).literals("12_HOUR", "24_HOUR")
                            },
                            exact: !0
                        })
                    },
                    optional: {
                        citationContext: r(969475).record(r(969475).string(), r(969475).object({
                            required: {
                                id: r(969475).string(),
                                lastEdited: r(969475).string(),
                                path: r(969475).string(),
                                searchSourceType: r(969475).literal("notion-calendar"),
                                title: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }))
                    },
                    exact: !0
                }),
                s = r(969475).object({
                    required: {
                        coworkers: r(969475).array(r(969475).object({
                            required: {
                                accountId: r(969475).string(),
                                coworkerEmail: r(969475).string(),
                                events: r(969475).array(r(969475).object({
                                    required: {
                                        calendar: r(969475).object({
                                            required: {
                                                accountId: r(969475).string(),
                                                calendarId: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }),
                                        eventId: r(969475).string(),
                                        isAutoBlock: r(969475).boolean(),
                                        isMeeting: r(969475).boolean(),
                                        isRecurring: r(969475).boolean(),
                                        isTransparent: r(969475).boolean(),
                                        period: r(969475).union([r(969475).object({
                                            required: {
                                                end: r(969475).object({
                                                    required: {
                                                        date: r(969475).string()
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }),
                                                start: r(969475).object({
                                                    required: {
                                                        date: r(969475).string()
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }),
                                                type: r(969475).literal("DATE")
                                            },
                                            optional: {},
                                            exact: !0
                                        }), r(969475).object({
                                            required: {
                                                end: r(969475).object({
                                                    required: {
                                                        dateTime: r(969475).string()
                                                    },
                                                    optional: {
                                                        timeZone: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                start: r(969475).object({
                                                    required: {
                                                        dateTime: r(969475).string()
                                                    },
                                                    optional: {
                                                        timeZone: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                type: r(969475).literal("DATE_TIME")
                                            },
                                            optional: {},
                                            exact: !0
                                        })]),
                                        summary: r(969475).string(),
                                        webUrl: r(969475).string()
                                    },
                                    optional: {
                                        attachments: r(969475).array(r(969475).object({
                                            required: {
                                                url: r(969475).string()
                                            },
                                            optional: {
                                                mimeType: r(969475).string(),
                                                notionWorkspaceId: r(969475).string(),
                                                title: r(969475).string()
                                            },
                                            exact: !0
                                        })),
                                        attendees: r(969475).array(r(969475).object({
                                            required: {
                                                isOptional: r(969475).boolean(),
                                                isSelf: r(969475).boolean()
                                            },
                                            optional: {
                                                displayName: r(969475).string(),
                                                email: r(969475).string(),
                                                isOrganizer: r(969475).boolean(),
                                                responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                            },
                                            exact: !0
                                        })),
                                        colors: r(969475).object({
                                            required: {},
                                            optional: {
                                                background: r(969475).string(),
                                                foreground: r(969475).string()
                                            },
                                            exact: !0
                                        }),
                                        conferencingUrl: r(969475).string(),
                                        creator: r(969475).object({
                                            required: {
                                                isSelf: r(969475).boolean()
                                            },
                                            optional: {
                                                displayName: r(969475).string(),
                                                email: r(969475).string()
                                            },
                                            exact: !0
                                        }),
                                        description: r(969475).string(),
                                        eventStatus: r(969475).literals("cancelled", "confirmed", "tentative"),
                                        eventType: r(969475).literals("availability", "birthday", "default", "focusTime", "fromGmail", "outOfOffice"),
                                        location: r(969475).string(),
                                        organizer: r(969475).object({
                                            required: {
                                                isSelf: r(969475).boolean()
                                            },
                                            optional: {
                                                displayName: r(969475).string(),
                                                email: r(969475).string()
                                            },
                                            exact: !0
                                        }),
                                        recurrenceRules: r(969475).array(r(969475).string()),
                                        resources: r(969475).array(r(969475).object({
                                            required: {
                                                isOptional: r(969475).boolean()
                                            },
                                            optional: {
                                                displayName: r(969475).string(),
                                                email: r(969475).string(),
                                                responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                            },
                                            exact: !0
                                        })),
                                        responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                    },
                                    exact: !0
                                }))
                            },
                            optional: {
                                profile: r(969475).object({
                                    required: {},
                                    optional: {
                                        displayName: r(969475).string(),
                                        email: r(969475).string(),
                                        photoUrl: r(969475).string()
                                    },
                                    exact: !0
                                })
                            },
                            exact: !0
                        }))
                    },
                    optional: {
                        citationContext: r(969475).record(r(969475).string(), r(969475).object({
                            required: {
                                id: r(969475).string(),
                                lastEdited: r(969475).string(),
                                path: r(969475).string(),
                                searchSourceType: r(969475).literal("notion-calendar"),
                                title: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }))
                    },
                    exact: !0
                }),
                c = r(969475).object({
                    required: {
                        suggestions: r(969475).array(r(969475).object({
                            required: {
                                availableParticipants: r(969475).array(r(969475).string()),
                                endAt: r(969475).string(),
                                startAt: r(969475).string(),
                                unavailableParticipants: r(969475).array(r(969475).string()),
                                unknownStatus: r(969475).array(r(969475).string())
                            },
                            optional: {},
                            exact: !0
                        }))
                    },
                    optional: {
                        citationContext: r(969475).record(r(969475).string(), r(969475).object({
                            required: {
                                id: r(969475).string(),
                                lastEdited: r(969475).string(),
                                path: r(969475).string(),
                                searchSourceType: r(969475).literal("notion-calendar"),
                                title: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })),
                        participantSchedules: r(969475).array(r(969475).object({
                            required: {
                                accountId: r(969475).string(),
                                coworkerEmail: r(969475).string(),
                                events: r(969475).array(r(969475).object({
                                    required: {
                                        eventId: r(969475).string(),
                                        isMeeting: r(969475).boolean(),
                                        isTransparent: r(969475).boolean(),
                                        period: r(969475).union([r(969475).object({
                                            required: {
                                                end: r(969475).object({
                                                    required: {
                                                        date: r(969475).string()
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }),
                                                start: r(969475).object({
                                                    required: {
                                                        date: r(969475).string()
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }),
                                                type: r(969475).literal("DATE")
                                            },
                                            optional: {},
                                            exact: !0
                                        }), r(969475).object({
                                            required: {
                                                end: r(969475).object({
                                                    required: {
                                                        dateTime: r(969475).string()
                                                    },
                                                    optional: {
                                                        timeZone: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                start: r(969475).object({
                                                    required: {
                                                        dateTime: r(969475).string()
                                                    },
                                                    optional: {
                                                        timeZone: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                type: r(969475).literal("DATE_TIME")
                                            },
                                            optional: {},
                                            exact: !0
                                        })]),
                                        summary: r(969475).string()
                                    },
                                    optional: {
                                        colors: r(969475).object({
                                            required: {},
                                            optional: {
                                                background: r(969475).string(),
                                                foreground: r(969475).string()
                                            },
                                            exact: !0
                                        }),
                                        eventStatus: r(969475).literals("cancelled", "confirmed", "tentative"),
                                        eventType: r(969475).literals("availability", "birthday", "default", "focusTime", "fromGmail", "outOfOffice"),
                                        responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                    },
                                    exact: !0
                                }))
                            },
                            optional: {
                                profile: r(969475).object({
                                    required: {},
                                    optional: {
                                        displayName: r(969475).string(),
                                        email: r(969475).string(),
                                        photoUrl: r(969475).string()
                                    },
                                    exact: !0
                                })
                            },
                            exact: !0
                        }))
                    },
                    exact: !0
                });
            r(969475).object({
                required: {
                    accountId: r(969475).string()
                },
                optional: {
                    actions: r(969475).array(r(969475).literals("read", "readCoworker", "write")),
                    calendarId: r(969475).string(),
                    constraints: r(969475).object({
                        required: {
                            skipConfirmation: r(969475).boolean()
                        },
                        optional: {},
                        exact: !0
                    })
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    availableAccounts: r(969475).nullable(r(969475).array(r(969475).object({
                        required: {
                            accountId: r(969475).string(),
                            calendars: r(969475).array(r(969475).object({
                                required: {
                                    accessRole: r(969475).string(),
                                    calendarId: r(969475).string(),
                                    name: r(969475).string(),
                                    primary: r(969475).boolean()
                                },
                                optional: {},
                                exact: !0
                            })),
                            displayName: r(969475).string(),
                            email: r(969475).undefinable(r(969475).string()),
                            provider: r(969475).string(),
                            supportsTriggers: r(969475).boolean()
                        },
                        optional: {},
                        exact: !0
                    }))),
                    defaultCalendar: r(969475).nullable(r(969475).object({
                        required: {
                            accountId: r(969475).string(),
                            calendarId: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                exact: !0
            });
            let u = `
connectionPointer?: RecordPointer<
	WorkflowExternalScopedConnectionTable | ExternalConnectionTable
>
calendarUserId?: string
defaultCalendar?: CalendarRef
connectedAccountSnapshots?: CalendarAccountData[]
enabledToolNames?: string[]`,
                d = r(969475).object({
                    required: {},
                    optional: {
                        calendarUserId: r(969475).string(),
                        connectedAccountSnapshots: r(969475).array(r(969475).object({
                            required: {
                                authorizationStatus: r(969475).literals("authorized", "missingScopes", "unauthorized"),
                                authorized: r(969475).boolean(),
                                displayName: r(969475).string(),
                                id: (0, r(120462).YU)(),
                                provider: r(969475).literals("google", "icloud", "notion", "outlook")
                            },
                            optional: {
                                calendars: r(969475).array(r(969475).object({
                                    required: {
                                        accessRole: r(969475).literals("freeBusyReader", "owner", "reader", "writer"),
                                        accountId: (0, r(120462).YU)(),
                                        color: r(969475).union([r(969475).isUndefined(), r(969475).object({
                                            required: {
                                                colorId: (0, r(120462).Wq)(),
                                                colorType: r(969475).literal("calendar"),
                                                type: r(969475).literal("preset")
                                            },
                                            optional: {},
                                            exact: !0
                                        }), r(969475).object({
                                            required: {
                                                colorHexes: r(969475).undefinable(r(969475).object({
                                                    required: {
                                                        dark: r(969475).object({
                                                            required: {
                                                                backgroundPrimary: r(969475).string()
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }),
                                                        light: r(969475).object({
                                                            required: {
                                                                backgroundPrimary: r(969475).string()
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                })),
                                                type: r(969475).literal("custom")
                                            },
                                            optional: {},
                                            exact: !0
                                        })]),
                                        id: (0, r(120462).tn)(),
                                        name: r(969475).string(),
                                        primary: r(969475).boolean()
                                    },
                                    optional: {},
                                    exact: !0
                                })),
                                email: r(969475).string()
                            },
                            exact: !0
                        })),
                        connectionPointer: (0, r(994818).IK)("external_connection", "workflow_external_scoped_connection"),
                        defaultCalendar: r(969475).object({
                            required: {
                                accountId: r(969475).string(),
                                calendarId: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }),
                        enabledToolNames: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                p = {
                    "calendar.event.created": {
                        state: `
type: "calendar.event.created"
calendars: Array<CalendarRef> // Required, must not be empty. Each calendar must have matching permissions on the integration. Use availableAccounts from the integration state to find valid accountId/calendarId pairs.
filter?: SubscriptionFilter`,
                        stateValidator: r(969475).object({
                            required: {
                                calendars: r(969475).array(r(969475).object({
                                    required: {
                                        accountId: r(969475).string(),
                                        calendarId: r(969475).string()
                                    },
                                    optional: {},
                                    exact: !0
                                })),
                                type: r(969475).literal("calendar.event.created")
                            },
                            optional: {
                                filter: i
                            },
                            exact: !0
                        })
                    },
                    "calendar.event.updated": {
                        state: `
type: "calendar.event.updated"
calendars: Array<CalendarRef> // Required, must not be empty. Each calendar must have matching permissions on the integration. Use availableAccounts from the integration state to find valid accountId/calendarId pairs.
filter?: SubscriptionFilter`,
                        stateValidator: r(969475).object({
                            required: {
                                calendars: r(969475).array(r(969475).object({
                                    required: {
                                        accountId: r(969475).string(),
                                        calendarId: r(969475).string()
                                    },
                                    optional: {},
                                    exact: !0
                                })),
                                type: r(969475).literal("calendar.event.updated")
                            },
                            optional: {
                                filter: i
                            },
                            exact: !0
                        })
                    },
                    "calendar.event.canceled": {
                        state: `
type: "calendar.event.canceled"
calendars: Array<CalendarRef> // Required, must not be empty. Each calendar must have matching permissions on the integration. Use availableAccounts from the integration state to find valid accountId/calendarId pairs.
filter?: SubscriptionFilter`,
                        stateValidator: r(969475).object({
                            required: {
                                calendars: r(969475).array(r(969475).object({
                                    required: {
                                        accountId: r(969475).string(),
                                        calendarId: r(969475).string()
                                    },
                                    optional: {},
                                    exact: !0
                                })),
                                type: r(969475).literal("calendar.event.canceled")
                            },
                            optional: {
                                filter: i
                            },
                            exact: !0
                        })
                    }
                },
                g = r(969475).object({
                    required: {
                        playbookId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                m = r(969475).object({
                    required: {},
                    optional: {
                        onlyAccountEmails: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                b = r(969475).object({
                    required: {
                        timeMax: r(969475).string(),
                        timeMin: r(969475).string(),
                        timeZone: r(969475).string()
                    },
                    optional: {
                        includeDeclinedInvites: r(969475).nullable(r(969475).boolean())
                    },
                    exact: !0
                }),
                y = r(969475).object({
                    required: {
                        coworkerEmails: r(969475).array(r(969475).string()),
                        timeMax: r(969475).string(),
                        timeMin: r(969475).string(),
                        timeZone: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                _ = r(969475).object({
                    required: {
                        events: r(969475).array(r(969475).object({
                            required: {
                                period: r(969475).union([r(969475).object({
                                    required: {
                                        end: r(969475).object({
                                            required: {
                                                date: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }),
                                        start: r(969475).object({
                                            required: {
                                                date: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }),
                                        type: r(969475).literal("DATE")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        end: r(969475).object({
                                            required: {
                                                dateTime: r(969475).string()
                                            },
                                            optional: {
                                                timeZone: r(969475).string()
                                            },
                                            exact: !0
                                        }),
                                        start: r(969475).object({
                                            required: {
                                                dateTime: r(969475).string()
                                            },
                                            optional: {
                                                timeZone: r(969475).string()
                                            },
                                            exact: !0
                                        }),
                                        type: r(969475).literal("DATE_TIME")
                                    },
                                    optional: {},
                                    exact: !0
                                })]),
                                summary: r(969475).string()
                            },
                            optional: {
                                attendees: r(969475).array(r(969475).object({
                                    required: {
                                        email: r(969475).string()
                                    },
                                    optional: {
                                        displayName: r(969475).string(),
                                        isOptional: r(969475).boolean()
                                    },
                                    exact: !0
                                })),
                                calendar: r(969475).object({
                                    required: {
                                        accountId: r(969475).string(),
                                        calendarId: r(969475).string()
                                    },
                                    optional: {},
                                    exact: !0
                                }),
                                description: r(969475).string(),
                                disableConferencing: r(969475).boolean(),
                                location: r(969475).string(),
                                recurrenceRules: r(969475).array(r(969475).string()),
                                resources: r(969475).array(r(969475).object({
                                    required: {
                                        isOptional: r(969475).boolean()
                                    },
                                    optional: {
                                        displayName: r(969475).string(),
                                        email: r(969475).string()
                                    },
                                    exact: !0
                                }))
                            },
                            exact: !0
                        })),
                        timeZone: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                h = r(969475).object({
                    required: {
                        timeZone: r(969475).string(),
                        updates: r(969475).array(r(969475).union([r(969475).object({
                            required: {
                                event: r(969475).object({
                                    required: {
                                        calendar: r(969475).object({
                                            required: {
                                                accountId: r(969475).string(),
                                                calendarId: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }),
                                        eventId: r(969475).string()
                                    },
                                    optional: {},
                                    exact: !0
                                }),
                                rsvp: r(969475).object({
                                    required: {
                                        responseStatus: r(969475).literals("accepted", "declined", "needsAction", "tentative")
                                    },
                                    optional: {
                                        comment: r(969475).string()
                                    },
                                    exact: !0
                                }),
                                updateType: r(969475).literal("RSVP")
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                event: r(969475).object({
                                    required: {
                                        calendar: r(969475).object({
                                            required: {
                                                accountId: r(969475).string(),
                                                calendarId: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }),
                                        eventId: r(969475).string()
                                    },
                                    optional: {},
                                    exact: !0
                                }),
                                update: r(969475).object({
                                    required: {},
                                    optional: {
                                        addConferencing: r(969475).boolean(),
                                        attendees: r(969475).array(r(969475).object({
                                            required: {
                                                email: r(969475).string()
                                            },
                                            optional: {
                                                displayName: r(969475).string(),
                                                isOptional: r(969475).boolean()
                                            },
                                            exact: !0
                                        })),
                                        description: r(969475).string(),
                                        location: r(969475).string(),
                                        period: r(969475).union([r(969475).object({
                                            required: {
                                                end: r(969475).object({
                                                    required: {
                                                        date: r(969475).string()
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }),
                                                start: r(969475).object({
                                                    required: {
                                                        date: r(969475).string()
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }),
                                                type: r(969475).literal("DATE")
                                            },
                                            optional: {},
                                            exact: !0
                                        }), r(969475).object({
                                            required: {
                                                end: r(969475).object({
                                                    required: {
                                                        dateTime: r(969475).string()
                                                    },
                                                    optional: {
                                                        timeZone: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                start: r(969475).object({
                                                    required: {
                                                        dateTime: r(969475).string()
                                                    },
                                                    optional: {
                                                        timeZone: r(969475).string()
                                                    },
                                                    exact: !0
                                                }),
                                                type: r(969475).literal("DATE_TIME")
                                            },
                                            optional: {},
                                            exact: !0
                                        })]),
                                        recurrenceRules: r(969475).array(r(969475).string()),
                                        resources: r(969475).array(r(969475).object({
                                            required: {
                                                isOptional: r(969475).boolean()
                                            },
                                            optional: {
                                                displayName: r(969475).string(),
                                                email: r(969475).string()
                                            },
                                            exact: !0
                                        })),
                                        summary: r(969475).string()
                                    },
                                    exact: !0
                                }),
                                updateType: r(969475).literal("UPDATE")
                            },
                            optional: {},
                            exact: !0
                        })]))
                    },
                    optional: {},
                    exact: !0
                }),
                f = r(969475).object({
                    required: {
                        events: r(969475).array(r(969475).object({
                            required: {
                                calendar: r(969475).object({
                                    required: {
                                        accountId: r(969475).string(),
                                        calendarId: r(969475).string()
                                    },
                                    optional: {},
                                    exact: !0
                                }),
                                eventId: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }))
                    },
                    optional: {},
                    exact: !0
                }),
                x = r(969475).object({
                    required: {
                        durationMinutes: r(969475).number(),
                        participantEmails: r(969475).array(r(969475).string()),
                        timeMax: r(969475).string(),
                        timeMin: r(969475).string(),
                        timeZone: r(969475).string()
                    },
                    optional: {
                        includeParticipantSchedules: r(969475).boolean(),
                        maxCount: r(969475).number()
                    },
                    exact: !0
                }),
                q = {
                    dataTypes: "",
                    dataTypesArray: [],
                    persistedStateValidator: d,
                    persistedState: u,
                    triggers: p,
                    effects: {
                        "calendar.fetchPlaybook": `
(args: {
				playbookId: string
			}) => Promise<CalendarPlaybookResult>`,
                        "calendar.listCalendars": `
(
				args: CalendarToolInput<"listCalendars">,
			) => Promise<CalendarToolResult<"listCalendars">>`,
                        "calendar.listEvents": `
(
				args: CalendarToolInput<"listEvents">,
			) => Promise<CalendarToolResult<"listEvents">>`,
                        "calendar.listCoworkersEvents": `
(
				args: CalendarToolInput<"listCoworkersEvents">,
			) => Promise<CalendarToolResult<"listCoworkersEvents">>`,
                        "calendar.createEvents": `
(
				args: CalendarToolInput<"createEvents">,
			) => Promise<CalendarToolResult<"createEvents">>`,
                        "calendar.updateEvents": `
(
				args: CalendarToolInput<"updateEvents">,
			) => Promise<CalendarToolResult<"updateEvents">>`,
                        "calendar.cancelEvents": `
(
				args: CalendarToolInput<"cancelEvents">,
			) => Promise<CalendarToolResult<"cancelEvents">>`,
                        "calendar.suggestMeetingTimes": `
(
				args: CalendarToolInput<"suggestMeetingTimes">,
			) => Promise<CalendarToolResult<"suggestMeetingTimes">>`,
                        "calendar.listCalendarResources": `
(
				args: CalendarToolInput<"listCalendarResources">,
			) => Promise<CalendarToolResult<"listCalendarResources">>`
                    },
                    effectsArray: ["calendar.fetchPlaybook", "calendar.listCalendars", "calendar.listEvents", "calendar.listCoworkersEvents", "calendar.createEvents", "calendar.updateEvents", "calendar.cancelEvents", "calendar.suggestMeetingTimes", "calendar.listCalendarResources"],
                    effectsValidators: {
                        "calendar.fetchPlaybook": g,
                        "calendar.listCalendars": m,
                        "calendar.listEvents": b,
                        "calendar.listCoworkersEvents": y,
                        "calendar.createEvents": _,
                        "calendar.updateEvents": h,
                        "calendar.cancelEvents": f,
                        "calendar.suggestMeetingTimes": x,
                        "calendar.listCalendarResources": r(969475).object({
                            required: {
                                minCapacity: r(969475).number(),
                                timeMax: r(969475).string(),
                                timeMin: r(969475).string(),
                                timeSlots: r(969475).array(r(969475).object({
                                    required: {
                                        endAt: r(969475).string(),
                                        startAt: r(969475).string()
                                    },
                                    optional: {},
                                    exact: !0
                                })),
                                timeZone: r(969475).string()
                            },
                            optional: {
                                maxCount: r(969475).number()
                            },
                            exact: !0
                        })
                    }
                }
        },
        717037: (e, t, r) => {
            r.d(t, {
                ZJ: () => ei,
                il: () => ea
            }), r(969475).object({
                required: {
                    emailPermissionSettings: r(969475).record(r(969475).string(), r(969475).object({
                        required: {
                            draft: r(969475).object({
                                required: {
                                    client: r(969475).literals("gmail", "notion_mail", "outlook"),
                                    enabled: r(969475).boolean()
                                },
                                optional: {},
                                exact: !0
                            }),
                            modifyInbox: r(969475).boolean(),
                            read: r(969475).boolean(),
                            send: r(969475).literals("disallow", "with_confirmation", "without_confirmation")
                        },
                        optional: {},
                        exact: !0
                    })),
                    selectedEmailAccountIds: r(969475).array(r(969475).string())
                },
                optional: {
                    emailAccounts: r(969475).array(r(969475).object({
                        required: {
                            displayName: r(969475).string(),
                            email: r(969475).string(),
                            emailAccountId: r(969475).string()
                        },
                        optional: {
                            provider: r(969475).string()
                        },
                        exact: !0
                    })),
                    preferredMailClient: r(969475).literals("gmail", "notion_mail", "outlook")
                },
                exact: !0
            }), r(969475).object({
                required: {
                    body: r(969475).string(),
                    emailAccountId: r(969475).string(),
                    from: r(969475).string(),
                    id: r(969475).string(),
                    receivedAt: r(969475).string(),
                    subject: r(969475).string(),
                    threadId: r(969475).string(),
                    to: r(969475).array(r(969475).string())
                },
                optional: {
                    attachments: r(969475).array(r(969475).object({
                        required: {
                            attachmentId: r(969475).string(),
                            filename: r(969475).string(),
                            inline: r(969475).boolean(),
                            mimeType: r(969475).string(),
                            sizeBytes: r(969475).number()
                        },
                        optional: {},
                        exact: !0
                    })),
                    bcc: r(969475).array(r(969475).string()),
                    cc: r(969475).array(r(969475).string()),
                    externalId: r(969475).string(),
                    fromName: r(969475).string(),
                    hasAttachments: r(969475).boolean(),
                    isRead: r(969475).boolean(),
                    labels: r(969475).array(r(969475).string()),
                    url: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    emailAccountId: r(969475).string(),
                    hasUnread: r(969475).boolean(),
                    id: r(969475).string(),
                    lastMessageAt: r(969475).string(),
                    messageCount: r(969475).number(),
                    participants: r(969475).array(r(969475).string()),
                    subject: r(969475).string()
                },
                optional: {
                    externalThreadId: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    email: r(969475).string(),
                    id: r(969475).string()
                },
                optional: {
                    isPrimary: r(969475).boolean(),
                    name: r(969475).string(),
                    provider: r(969475).string()
                },
                exact: !0
            });
            let a = r(969475).object({
                required: {
                    labelId: r(969475).string(),
                    labelName: r(969475).string()
                },
                optional: {},
                exact: !0
            });
            r(969475).object({
                required: {
                    columnId: r(969475).string(),
                    name: r(969475).string(),
                    options: r(969475).array(r(969475).lazy(() => a))
                },
                optional: {
                    hasMoreOptions: r(969475).boolean()
                },
                exact: !0
            });
            let i = `
/**
 * Represents an email message in Notion Mail
 */
type MailEmailMessage = {
	/**
	 * Unique identifier for the email message
	 */
	id: string
	/**
	 * The email thread this message belongs to
	 */
	threadId: string
	/**
	 * External ID from the mail provider (e.g., Gmail message ID)
	 */
	externalId?: string
	/**
	 * Sender's email address
	 */
	from: string
	/**
	 * Sender's display name
	 */
	fromName?: string
	/**
	 * List of recipient email addresses
	 */
	to: Array<string>
	/**
	 * List of CC recipient email addresses
	 */
	cc?: Array<string>
	/**
	 * List of BCC recipient email addresses
	 */
	bcc?: Array<string>
	/**
	 * Email subject line
	 */
	subject: string
	/**
	 * Body of the email (truncated to first 1000 words, preferring HTML content)
	 */
	body: string
	/**
	 * ISO 8601 timestamp when the email was received
	 */
	receivedAt: string
	/**
	 * The email account where this email was received
	 */
	emailAccountId: string
	/**
	 * Whether this email has been read
	 */
	isRead?: boolean
	/**
	 * Whether this email has attachments
	 */
	hasAttachments?: boolean
	/**
	 * Attachment metadata from the email (attachmentId, filename, mimeType, sizeBytes, inline)
	 */
	attachments?: Array<{
		attachmentId: string
		filename: string
		mimeType: string
		sizeBytes: number
		inline: boolean
	}>
	/**
	 * Labels or tags applied to this email
	 */
	labels?: Array<string>
	/**
	 * URL to view the email in Notion Mail
	 */
	url?: string
}

/**
 * Represents an email thread in Notion Mail
 */
type MailThread = {
	/**
	 * Unique identifier for the thread
	 */
	id: string
	/**
	 * External thread ID from the mail provider
	 */
	externalThreadId?: string
	/**
	 * Subject of the thread (from the first message)
	 */
	subject: string
	/**
	 * Participants in the thread
	 */
	participants: Array<string>
	/**
	 * Number of messages in the thread
	 */
	messageCount: number
	/**
	 * ISO 8601 timestamp of the last message
	 */
	lastMessageAt: string
	/**
	 * The email account where this thread exists
	 */
	emailAccountId: string
	/**
	 * Whether any message in the thread is unread
	 */
	hasUnread: boolean
}

/**
 * Represents a mailbox in Notion Mail
 */
type MailMailbox = {
	/**
	 * Unique identifier for the mailbox
	 */
	id: string
	/**
	 * Email address of the mailbox
	 */
	email: string
	/**
	 * Display name for the mailbox
	 */
	name?: string
	/**
	 * Email provider (e.g., "gmail", "outlook")
	 */
	provider?: string
	/**
	 * Whether this is the primary mailbox for the user
	 */
	isPrimary?: boolean
}

/**
 * Represents a single-select status option available for a status property
 */
type MailStatusPropertyOption = {
	/**
	 * Unique identifier for the option (maps to the user label ID)
	 */
	labelId: string
	/**
	 * Display name for the option
	 */
	labelName: string
}

/**
 * Represents a single-select status property (column) configured for a mailbox
 */
type MailStatusProperty = {
	/**
	 * Unique identifier for the status property (column ID)
	 */
	columnId: string
	/**
	 * Human-readable name of the status property
	 */
	name: string
	/**
	 * Available options for this status property
	 */
	options: Array<MailStatusPropertyOption>
	/**
	 * Indicates that additional options exist beyond the ones provided
	 */
	hasMoreOptions?: boolean
}`,
                o = `
connectionPointer?: RecordPointer<
	WorkflowExternalScopedConnectionTable | ExternalConnectionTable
>
creatorEmail?: string
emailAddresses?: Array<{
	emailAccountId: string
	email: string
	// The email address as provided by the mail service, preserving formatting
	// such as dots in Gmail addresses (e.g. "john.doe@gmail.com").
	// Falls back to \`email\` if absent (e.g. in older persisted state).
	displayEmail?: string
	displayName: string
	provider?: string
}>
serverIconUrl?: string
enabledToolNames?: string[]
/**
 * Granular per-email permission settings (NEW - preferred).
 * Key is email address, value is the permission settings object.
 * Example: { "user@example.com": { read: true, modifyInbox: true, ... } }
 */
emailPermissionSettings?: Record<string, MailEmailPermissionSettings>
/**
 * @deprecated Use emailPermissionSettings instead.
 * Legacy global scopes for backward compatibility.
 * Only "read" and "write" values are supported.
 */
scopes?: Array<LegacyMailScope | string>
/**
 * @deprecated Use emailPermissionSettings instead.
 * Legacy per-email-address scopes.
 * Only "read" and "write" values are supported.
 * Example: { "email@example.com": ["write"] }
 */
emailScopes?: Record<string, Array<LegacyMailScope | string>>
selectedEmailAccountIds?: Array<string>
/**
 * User's preferred mail client for creating drafts.
 * - undefined: first-time connection (show selection modal)
 * - When set: new email addresses default to this client
 */
preferredMailClient?: MailDraftClient`,
                n = r(969475).object({
                    required: {},
                    optional: {
                        connectionPointer: (0, r(994818).IK)("external_connection", "workflow_external_scoped_connection"),
                        creatorEmail: r(969475).string(),
                        emailAddresses: r(969475).array(r(969475).object({
                            required: {
                                displayName: r(969475).string(),
                                email: r(969475).string(),
                                emailAccountId: r(969475).string()
                            },
                            optional: {
                                displayEmail: r(969475).string(),
                                provider: r(969475).string()
                            },
                            exact: !0
                        })),
                        emailPermissionSettings: r(969475).record(r(969475).string(), r(969475).object({
                            required: {
                                draft: r(969475).object({
                                    required: {
                                        client: r(969475).literals("gmail", "notion_mail", "outlook"),
                                        enabled: r(969475).boolean()
                                    },
                                    optional: {},
                                    exact: !0
                                }),
                                modifyInbox: r(969475).boolean(),
                                read: r(969475).boolean(),
                                send: r(969475).literals("disallow", "with_confirmation", "without_confirmation")
                            },
                            optional: {},
                            exact: !0
                        })),
                        emailScopes: r(969475).record(r(969475).string(), r(969475).array(r(969475).string())),
                        enabledToolNames: r(969475).array(r(969475).string()),
                        preferredMailClient: r(969475).literals("gmail", "notion_mail", "outlook"),
                        scopes: r(969475).array(r(969475).string()),
                        selectedEmailAccountIds: r(969475).array(r(969475).string()),
                        serverIconUrl: r(969475).string()
                    },
                    exact: !0
                }),
                l = {
                    "mail.email.received": {
                        state: `
type: "mail.email.received"
/**
 * List of email account IDs to monitor.
 * - If empty or undefined: monitors all email accounts owned by the user
 * - If specified: only monitors emails received by these specific accounts
 */
emailAccountIds?: Array<string>
/**
 * Display information for selected email accounts (for UI display only).
 * Maps account ID to email address for showing in trigger descriptions.
 * Example: { "account-id-1": "user@example.com" }
 */
emailAccountDisplayInfo?: Record<string, string>
/**
 * Structured filters for email fields.
 * All filters are combined with AND logic.
 *
 * @backward-compatibility
 * - If undefined or empty array: matches all emails (no filtering applied)
 * - Existing workflows without this field will continue to work unchanged
 * - Filter evaluation happens server-side in webhooks.ts before triggering workflows
 */
filters?: Array<MailEmailFilter>
/**
 * When true, only fires for emails that are in the inbox (have the INBOX label).
 * Emails without the INBOX label (e.g. archived, spam) are skipped.
 * Undefined is equivalent to false — all emails are processed.
 */
inboxOnly?: boolean`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("mail.email.received")
                            },
                            optional: {
                                emailAccountDisplayInfo: r(969475).record(r(969475).string(), r(969475).string()),
                                emailAccountIds: r(969475).array(r(969475).string()),
                                filters: r(969475).array(r(969475).object({
                                    required: {
                                        field: r(969475).literals("body", "domain", "from", "subject", "to"),
                                        operator: r(969475).literals("is_empty", "is_not_empty", "string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                                        value: r(969475).object({
                                            required: {
                                                type: r(969475).literal("exact"),
                                                value: r(969475).undefinable(r(969475).string())
                                            },
                                            optional: {},
                                            exact: !0
                                        })
                                    },
                                    optional: {},
                                    exact: !0
                                })),
                                inboxOnly: r(969475).boolean()
                            },
                            exact: !0
                        })
                    },
                    "mail.email.sent": {
                        state: `
type: "mail.email.sent"
/**
 * List of email account IDs to monitor.
 * - If empty or undefined: monitors all email accounts owned by the user
 * - If specified: only monitors emails sent from these specific accounts
 */
emailAccountIds?: Array<string>
/**
 * Display information for selected email accounts (for UI display only).
 * Maps account ID to email address for showing in trigger descriptions.
 * Example: { "account-id-1": "user@example.com" }
 */
emailAccountDisplayInfo?: Record<string, string>
/**
 * Structured filters for email fields.
 * All filters are combined with AND logic.
 *
 * @backward-compatibility
 * - If undefined or empty array: matches all emails (no filtering applied)
 * - Existing workflows without this field will continue to work unchanged
 * - Filter evaluation happens server-side in webhooks.ts before triggering workflows
 */
filters?: Array<MailEmailFilter>`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("mail.email.sent")
                            },
                            optional: {
                                emailAccountDisplayInfo: r(969475).record(r(969475).string(), r(969475).string()),
                                emailAccountIds: r(969475).array(r(969475).string()),
                                filters: r(969475).array(r(969475).object({
                                    required: {
                                        field: r(969475).literals("body", "domain", "from", "subject", "to"),
                                        operator: r(969475).literals("is_empty", "is_not_empty", "string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                                        value: r(969475).object({
                                            required: {
                                                type: r(969475).literal("exact"),
                                                value: r(969475).undefinable(r(969475).string())
                                            },
                                            optional: {},
                                            exact: !0
                                        })
                                    },
                                    optional: {},
                                    exact: !0
                                }))
                            },
                            exact: !0
                        })
                    },
                    "mail.email.receivedorsent": {
                        state: `
type: "mail.email.receivedorsent"
/**
 * List of email account IDs to monitor.
 * - If empty or undefined: monitors all email accounts owned by the user
 * - If specified: only monitors emails received or sent by these specific accounts
 */
emailAccountIds?: Array<string>
/**
 * Display information for selected email accounts (for UI display only).
 * Maps account ID to email address for showing in trigger descriptions.
 * Example: { "account-id-1": "user@example.com" }
 */
emailAccountDisplayInfo?: Record<string, string>
/**
 * Structured filters for email fields.
 * All filters are combined with AND logic.
 *
 * @backward-compatibility
 * - If undefined or empty array: matches all emails (no filtering applied)
 * - Existing workflows without this field will continue to work unchanged
 * - Filter evaluation happens server-side in webhooks.ts before triggering workflows
 */
filters?: Array<MailEmailFilter>
/**
 * When true, only fires for emails that are in the inbox (have the INBOX label).
 * Emails without the INBOX label (e.g. archived, spam) are skipped.
 * Undefined is equivalent to false — all emails are processed.
 */
inboxOnly?: boolean`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("mail.email.receivedorsent")
                            },
                            optional: {
                                emailAccountDisplayInfo: r(969475).record(r(969475).string(), r(969475).string()),
                                emailAccountIds: r(969475).array(r(969475).string()),
                                filters: r(969475).array(r(969475).object({
                                    required: {
                                        field: r(969475).literals("body", "domain", "from", "subject", "to"),
                                        operator: r(969475).literals("is_empty", "is_not_empty", "string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                                        value: r(969475).object({
                                            required: {
                                                type: r(969475).literal("exact"),
                                                value: r(969475).undefinable(r(969475).string())
                                            },
                                            optional: {},
                                            exact: !0
                                        })
                                    },
                                    optional: {},
                                    exact: !0
                                })),
                                inboxOnly: r(969475).boolean()
                            },
                            exact: !0
                        })
                    },
                    "mail.label.applied": {
                        state: `
type: "mail.label.applied"
/**
 * List of email account IDs to monitor.
 * - If empty or undefined: monitors all email accounts owned by the user
 * - If specified: only monitors label applications in these specific accounts
 */
emailAccountIds?: Array<string>
/**
 * Display information for selected email accounts (for UI display only).
 * Maps account ID to email address for showing in trigger descriptions.
 * Example: { "account-id-1": "user@example.com" }
 */
emailAccountDisplayInfo?: Record<string, string>
/**
 * List of specific label names to monitor.
 * - If empty or undefined: triggers for any label application
 * - If specified: only triggers when one of these labels is applied
 */
labelNames?: Array<string>`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("mail.label.applied")
                            },
                            optional: {
                                emailAccountDisplayInfo: r(969475).record(r(969475).string(), r(969475).string()),
                                emailAccountIds: r(969475).array(r(969475).string()),
                                labelNames: r(969475).array(r(969475).string())
                            },
                            exact: !0
                        })
                    }
                },
                s = r(969475).object({
                    required: {
                        toolArguments: r(969475).record(r(969475).string(), r(969475).unknown()),
                        toolName: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                c = r(969475).undefinable(r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                })),
                u = r(969475).object({
                    required: {
                        name: r(969475).string()
                    },
                    optional: {
                        arguments: r(969475).record(r(969475).string(), r(969475).string())
                    },
                    exact: !0
                }),
                d = r(969475).record(r(969475).string(), r(969475).unknown()),
                p = r(969475).record(r(969475).string(), r(969475).unknown()),
                g = r(969475).record(r(969475).string(), r(969475).unknown()),
                m = r(969475).record(r(969475).string(), r(969475).unknown()),
                b = r(969475).record(r(969475).string(), r(969475).unknown()),
                y = r(969475).record(r(969475).string(), r(969475).unknown()),
                _ = r(969475).record(r(969475).string(), r(969475).unknown()),
                h = r(969475).record(r(969475).string(), r(969475).unknown()),
                f = r(969475).record(r(969475).string(), r(969475).unknown()),
                x = r(969475).record(r(969475).string(), r(969475).unknown()),
                q = r(969475).record(r(969475).string(), r(969475).unknown()),
                j = r(969475).record(r(969475).string(), r(969475).unknown()),
                v = r(969475).record(r(969475).string(), r(969475).unknown()),
                k = r(969475).record(r(969475).string(), r(969475).unknown()),
                w = r(969475).record(r(969475).string(), r(969475).unknown()),
                I = r(969475).record(r(969475).string(), r(969475).unknown()),
                T = r(969475).record(r(969475).string(), r(969475).unknown()),
                S = r(969475).record(r(969475).string(), r(969475).unknown()),
                R = r(969475).record(r(969475).string(), r(969475).unknown()),
                C = r(969475).record(r(969475).string(), r(969475).unknown()),
                A = r(969475).record(r(969475).string(), r(969475).unknown()),
                P = r(969475).record(r(969475).string(), r(969475).unknown()),
                M = r(969475).record(r(969475).string(), r(969475).unknown()),
                U = r(969475).record(r(969475).string(), r(969475).unknown()),
                D = r(969475).record(r(969475).string(), r(969475).unknown()),
                L = r(969475).record(r(969475).string(), r(969475).unknown()),
                N = r(969475).record(r(969475).string(), r(969475).unknown()),
                E = r(969475).record(r(969475).string(), r(969475).unknown()),
                O = r(969475).record(r(969475).string(), r(969475).unknown()),
                F = r(969475).record(r(969475).string(), r(969475).unknown()),
                G = r(969475).record(r(969475).string(), r(969475).unknown()),
                V = r(969475).record(r(969475).string(), r(969475).unknown()),
                z = r(969475).record(r(969475).string(), r(969475).unknown()),
                W = r(969475).record(r(969475).string(), r(969475).unknown()),
                B = r(969475).record(r(969475).string(), r(969475).unknown()),
                H = r(969475).record(r(969475).string(), r(969475).unknown()),
                Q = r(969475).record(r(969475).string(), r(969475).unknown()),
                Z = r(969475).record(r(969475).string(), r(969475).unknown()),
                J = r(969475).record(r(969475).string(), r(969475).unknown()),
                K = r(969475).record(r(969475).string(), r(969475).unknown()),
                Y = r(969475).record(r(969475).string(), r(969475).unknown()),
                X = r(969475).record(r(969475).string(), r(969475).unknown()),
                $ = r(969475).record(r(969475).string(), r(969475).unknown()),
                ee = r(969475).record(r(969475).string(), r(969475).unknown()),
                et = r(969475).record(r(969475).string(), r(969475).unknown()),
                er = r(969475).record(r(969475).string(), r(969475).unknown()),
                ea = ["mail.runTool", "mail.listTools", "mail.getPrompt", "mail.searchEmails", "mail.searchOutlookEmails", "mail.viewThreadContent", "mail.readAttachment", "mail.createMailBlock", "mail.listMailboxViews", "mail.getMailbox", "mail.listStatusProperties", "mail.healthCheck", "mail.listGmailFilters", "mail.setReadStatus", "mail.createLabel", "mail.listLabels", "mail.updateLabel", "mail.deleteLabel", "mail.applyUserLabelsWithLazyCreate", "mail.removeUserLabels", "mail.archiveThreadsById", "mail.archiveThreadsByQuery", "mail.trashThread", "mail.markThreadSpam", "mail.moveThreadToInbox", "mail.starThread", "mail.createStatusColumn", "mail.updateStatus", "mail.setReminder", "mail.unsetReminder", "mail.blockSender", "mail.unblockSender", "mail.unsubscribeSender", "mail.createGmailFilter", "mail.deleteGmailFilter", "mail.updateGmailFilter", "mail.listOutlookCategories", "mail.createOutlookCategory", "mail.applyOutlookCategories", "mail.removeOutlookCategories", "mail.listOutlookFolders", "mail.createOutlookFolder", "mail.moveToOutlookFolder", "mail.createOrUpdateDraft", "mail.createOrUpdateGmailDraft", "mail.createOrUpdateOutlookDraft", "mail.createOrUpdateDraftAllClients", "mail.sendNewEmail", "mail.sendExistingDraft"],
                ei = {
                    dataTypes: i,
                    dataTypesArray: ["MailEmailMessage", "MailThread", "MailMailbox", "MailStatusPropertyOption", "MailStatusProperty"],
                    persistedStateValidator: n,
                    persistedState: o,
                    triggers: l,
                    effects: {
                        "mail.runTool": `
(args: {
				toolArguments: Record<string, unknown>
				toolName: string
			}) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.listTools": "(args?: {}) => Promise<McpServerListToolsToolResult>",
                        "mail.getPrompt": `
(args: {
		name: string
		arguments?: Record<string, string>
	}) => Promise<McpServerGetPromptToolResult>`,
                        "mail.searchEmails": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.searchOutlookEmails": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.viewThreadContent": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.readAttachment": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.createMailBlock": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.listMailboxViews": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.getMailbox": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.listStatusProperties": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.healthCheck": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.listGmailFilters": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.setReadStatus": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.createLabel": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.listLabels": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.updateLabel": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.deleteLabel": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.applyUserLabelsWithLazyCreate": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.removeUserLabels": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.archiveThreadsById": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.archiveThreadsByQuery": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.trashThread": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.markThreadSpam": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.moveThreadToInbox": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.starThread": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.createStatusColumn": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.updateStatus": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.setReminder": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.unsetReminder": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.blockSender": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.unblockSender": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.unsubscribeSender": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.createGmailFilter": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.deleteGmailFilter": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.updateGmailFilter": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.listOutlookCategories": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.createOutlookCategory": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.applyOutlookCategories": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.removeOutlookCategories": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.listOutlookFolders": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.createOutlookFolder": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.moveToOutlookFolder": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.createOrUpdateDraft": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.createOrUpdateGmailDraft": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.createOrUpdateOutlookDraft": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.createOrUpdateDraftAllClients": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.sendNewEmail": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`,
                        "mail.sendExistingDraft": `
(
	args: Record<string, unknown>,
) => Promise<EffectResultOrValue<McpServerToolCallResult>>`
                    },
                    effectsArray: ea,
                    effectsValidators: {
                        "mail.runTool": s,
                        "mail.listTools": c,
                        "mail.getPrompt": u,
                        "mail.searchEmails": d,
                        "mail.searchOutlookEmails": p,
                        "mail.viewThreadContent": g,
                        "mail.readAttachment": m,
                        "mail.createMailBlock": b,
                        "mail.listMailboxViews": y,
                        "mail.getMailbox": _,
                        "mail.listStatusProperties": h,
                        "mail.healthCheck": f,
                        "mail.listGmailFilters": x,
                        "mail.setReadStatus": q,
                        "mail.createLabel": j,
                        "mail.listLabels": v,
                        "mail.updateLabel": k,
                        "mail.deleteLabel": w,
                        "mail.applyUserLabelsWithLazyCreate": I,
                        "mail.removeUserLabels": T,
                        "mail.archiveThreadsById": S,
                        "mail.archiveThreadsByQuery": R,
                        "mail.trashThread": C,
                        "mail.markThreadSpam": A,
                        "mail.moveThreadToInbox": P,
                        "mail.starThread": M,
                        "mail.createStatusColumn": U,
                        "mail.updateStatus": D,
                        "mail.setReminder": L,
                        "mail.unsetReminder": N,
                        "mail.blockSender": E,
                        "mail.unblockSender": O,
                        "mail.unsubscribeSender": F,
                        "mail.createGmailFilter": G,
                        "mail.deleteGmailFilter": V,
                        "mail.updateGmailFilter": z,
                        "mail.listOutlookCategories": W,
                        "mail.createOutlookCategory": B,
                        "mail.applyOutlookCategories": H,
                        "mail.removeOutlookCategories": Q,
                        "mail.listOutlookFolders": Z,
                        "mail.createOutlookFolder": J,
                        "mail.moveToOutlookFolder": K,
                        "mail.createOrUpdateDraft": Y,
                        "mail.createOrUpdateGmailDraft": X,
                        "mail.createOrUpdateOutlookDraft": $,
                        "mail.createOrUpdateDraftAllClients": ee,
                        "mail.sendNewEmail": et,
                        "mail.sendExistingDraft": er
                    }
                }
        },
        957042: (e, t, r) => {
            r.d(t, {
                zP: () => a5,
                JN: () => a0
            }), r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("asana"),
                    type: r(969475).literal("asana")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            assignee: r(969475).string(),
                            entity: r(969475).string(),
                            href: r(969475).string(),
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            project: r(969475).string(),
                            taskId: r(969475).string(),
                            team: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string(),
                            url: r(969475).string(),
                            workspace: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).union([r(969475).object({
                required: {
                    taskGid: r(969475).string()
                },
                optional: {
                    taskId: r(969475).isUndefined()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    taskId: r(969475).string()
                },
                optional: {
                    taskGid: r(969475).isUndefined()
                },
                exact: !0
            })]), r(969475).object({
                required: {
                    assignee: r(969475).string(),
                    blocks: r(969475).array(r(969475).string()),
                    description: r(969475).string(),
                    project: r(969475).string(),
                    title: r(969475).string(),
                    type: r(969475).literal("asana"),
                    workspace: r(969475).string()
                },
                optional: {},
                exact: !0
            });
            let a = `
type AsanaPersistedState = {}

type AsanaSearchInput = {
	question: string
	keywords?: string
	lookback?: string
}

type AsanaSearchResult = {
	results: Array<AsanaSearchResultItem>
}

type AsanaLoadTaskInput =
	| {
			taskId: string
			taskGid?: never
	  }
	| {
			taskId?: never
			taskGid: string
	  }

type AsanaLoadTaskResult = LoadAsanaResponse`,
                i = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                o = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string()
                    },
                    exact: !0
                }),
                n = r(969475).union([r(969475).object({
                    required: {
                        taskGid: r(969475).string()
                    },
                    optional: {
                        taskId: r(969475).isUndefined()
                    },
                    exact: !0
                }), r(969475).object({
                    required: {
                        taskId: r(969475).string()
                    },
                    optional: {
                        taskGid: r(969475).isUndefined()
                    },
                    exact: !0
                })]);
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("box"),
                    type: r(969475).literal("box")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            fileId: r(969475).string(),
                            fileType: r(969475).string(),
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    fileId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    fileId: r(969475).string(),
                    title: r(969475).string(),
                    type: r(969475).literal("box-file")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    sharedLink: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    itemId: r(969475).string(),
                    itemType: r(969475).literals("file", "folder"),
                    modifiedAt: r(969475).string(),
                    name: r(969475).string(),
                    owner: r(969475).string(),
                    size: r(969475).number()
                },
                optional: {},
                exact: !0
            });
            let l = `
type BoxPersistedState = {}

type BoxSearchInput = {
	question: string
	keywords?: string
	lookback?: string
}

type BoxSearchResult = {
	results: Array<BoxSearchResultItem>
}

type BoxLoadFileInput = {
	fileId: string
}

type BoxLoadFileResult = LoadBoxResponse

type BoxFindSharedItemInput = {
	sharedLink: string
}

type BoxFindSharedItemResult = {
	itemId: string
	itemType: "file" | "folder"
	name: string
	size: number
	modifiedAt: string
	owner: string
}`,
                s = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                c = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string()
                    },
                    exact: !0
                }),
                u = r(969475).object({
                    required: {
                        fileId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                d = r(969475).object({
                    required: {
                        sharedLink: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                p = `
/**
 * A connection pointer is used for modules that store external connection
 * state in the external_connection table.
 */
connectionPointer?: RecordPointer<ExternalConnectionTable>
/**
 * The last time the user connected this module.
 */
lastAuthenticatedAtMs?: number
/**
 * Placeholder for future module-specific scopes.
 */
scopes?: Array<string>`,
                g = r(969475).object({
                    required: {},
                    optional: {
                        connectionPointer: (0, r(994818).IK)("external_connection"),
                        lastAuthenticatedAtMs: r(969475).number(),
                        scopes: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                m = r(969475).object({
                    required: {
                        id: r(969475).string(),
                        ownerEmail: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                b = r(969475).object({
                    required: {
                        id: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                y = r(969475).object({
                    required: {
                        cwd: r(969475).string(),
                        id: r(969475).string(),
                        instruction: r(969475).string(),
                        model: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                _ = r(969475).object({
                    required: {
                        id: r(969475).string(),
                        message: r(969475).string(),
                        threadId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                h = {
                    "boxy.createBox": `
(args: {
				id: string
				ownerEmail: string
			}) => Promise<{ id: string }>`,
                    "boxy.getBox": `
(args: { id: string }) => Promise<{
				boxName: string
				status: BoxyBoxStatus
				operationId: string
			}>`,
                    "boxy.sendBoxThread": `
(args: {
				id: string
				cwd: string
				model: string
				instruction: string
			}) => Promise<BoxyThreadStreamResult>`,
                    "boxy.streamMessageToThread": `
(args: {
				id: string
				threadId: string
				message: string
			}) => Promise<BoxyThreadStreamResult>`
                };
            r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).union([r(969475).object({
                        required: {
                            action: r(969475).literal("click"),
                            tab: r(969475).string(),
                            x: r(969475).number(),
                            y: r(969475).number()
                        },
                        optional: {
                            button: r(969475).literals("left", "middle", "right")
                        },
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("close"),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("create"),
                            tab: r(969475).string(),
                            url: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("double_click"),
                            tab: r(969475).string(),
                            x: r(969475).number(),
                            y: r(969475).number()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("drag"),
                            path: r(969475).array(r(969475).object({
                                required: {
                                    x: r(969475).number(),
                                    y: r(969475).number()
                                },
                                optional: {},
                                exact: !0
                            })),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("get_current_url"),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("goto"),
                            tab: r(969475).string(),
                            url: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("keypress"),
                            keys: r(969475).array(r(969475).string()),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("list")
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("move"),
                            tab: r(969475).string(),
                            x: r(969475).number(),
                            y: r(969475).number()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("print_accessibility_tree"),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("screenshot"),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("scroll"),
                            scroll_x: r(969475).number(),
                            scroll_y: r(969475).number(),
                            tab: r(969475).string(),
                            x: r(969475).number(),
                            y: r(969475).number()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("type"),
                            tab: r(969475).string(),
                            text: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("wait"),
                            seconds: r(969475).number(),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    })]))
                },
                optional: {
                    closeSession: r(969475).boolean(),
                    sessionId: r(969475).string(),
                    viewport: r(969475).object({
                        required: {
                            height: r(969475).number(),
                            width: r(969475).number()
                        },
                        optional: {},
                        exact: !0
                    })
                },
                exact: !0
            }), r(969475).object({
                required: {
                    success: r(969475).boolean(),
                    text: r(969475).string()
                },
                optional: {
                    currentUrl: r(969475).string(),
                    error: r(969475).string(),
                    screenshotFileUri: r(969475).string(),
                    sessionId: r(969475).string(),
                    snapshot: r(969475).lazy(() => f),
                    tabs: r(969475).array(r(969475).lazy(() => x))
                },
                exact: !0
            });
            let f = r(969475).object({
                    required: {
                        formattedTree: r(969475).string(),
                        urlMap: r(969475).record(r(969475).string(), r(969475).string()),
                        xpathMap: r(969475).record(r(969475).string(), r(969475).string())
                    },
                    optional: {},
                    exact: !0
                }),
                x = r(969475).object({
                    required: {
                        id: r(969475).string()
                    },
                    optional: {
                        title: r(969475).string(),
                        url: r(969475).string()
                    },
                    exact: !0
                }),
                q = r(969475).object({
                    required: {
                        id: r(969475).string(),
                        windowName: r(969475).string()
                    },
                    optional: {
                        lastKnownTitle: r(969475).string(),
                        lastKnownUrl: r(969475).string()
                    },
                    exact: !0
                }),
                j = `
type BrowserRunInput = {
	actions: BrowserAction[]
	sessionId?: string
	closeSession?: boolean
	viewport?: { width: number; height: number }
}

type BrowserRunOutput = {
	success: boolean
	text: string
	error?: string
	sessionId?: string
	tabs?: BrowserTab[]
	currentUrl?: string
	screenshotFileUri?: string
	snapshot?: BrowserAccessibilitySnapshot
}

type BrowserAccessibilitySnapshot = {
	formattedTree: string
	xpathMap: Record<string, string>
	urlMap: Record<string, string>
}

type BrowserTab = {
	id: string
	url?: string
	title?: string
}

type BrowserPersistedTabState = {
	id: string
	windowName: string
	lastKnownUrl?: string
	lastKnownTitle?: string
}`,
                v = `
sessionId?: string
tabsById: Record<string, BrowserPersistedTabState>
primaryTabId?: string`,
                k = r(969475).object({
                    required: {
                        tabsById: r(969475).record(r(969475).string(), r(969475).lazy(() => q))
                    },
                    optional: {
                        primaryTabId: r(969475).string(),
                        sessionId: r(969475).string()
                    },
                    exact: !0
                }),
                w = r(969475).object({
                    required: {
                        actions: r(969475).array(r(969475).union([r(969475).object({
                            required: {
                                action: r(969475).literal("click"),
                                tab: r(969475).string(),
                                x: r(969475).number(),
                                y: r(969475).number()
                            },
                            optional: {
                                button: r(969475).literals("left", "middle", "right")
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("close"),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("create"),
                                tab: r(969475).string(),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("double_click"),
                                tab: r(969475).string(),
                                x: r(969475).number(),
                                y: r(969475).number()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("drag"),
                                path: r(969475).array(r(969475).object({
                                    required: {
                                        x: r(969475).number(),
                                        y: r(969475).number()
                                    },
                                    optional: {},
                                    exact: !0
                                })),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("get_current_url"),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("goto"),
                                tab: r(969475).string(),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("keypress"),
                                keys: r(969475).array(r(969475).string()),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("list")
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("move"),
                                tab: r(969475).string(),
                                x: r(969475).number(),
                                y: r(969475).number()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("print_accessibility_tree"),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("screenshot"),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("scroll"),
                                scroll_x: r(969475).number(),
                                scroll_y: r(969475).number(),
                                tab: r(969475).string(),
                                x: r(969475).number(),
                                y: r(969475).number()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("type"),
                                tab: r(969475).string(),
                                text: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("wait"),
                                seconds: r(969475).number(),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })]))
                    },
                    optional: {
                        closeSession: r(969475).boolean(),
                        sessionId: r(969475).string(),
                        viewport: r(969475).object({
                            required: {
                                height: r(969475).number(),
                                width: r(969475).number()
                            },
                            optional: {},
                            exact: !0
                        })
                    },
                    exact: !0
                }),
                I = {
                    "browser.run": `
(
				args: BrowserRunInput,
			) => Promise<EffectResultOrValue<BrowserRunOutput>>`
                },
                T = `
/**
 * A connection pointer is used for any modules that need to store external
 * authentication state.
 *
 * Uses ExternalConnectionTable only.
 */
connectionPointer?: RecordPointer<ExternalConnectionTable>
/**
 * This represents the last time the user authenticated for this module.
 * This is used to help determine if the connection has expired from when
 * the user authenticated and us checking if the connection is still active
 * through \`hasActiveOAuthConnection\`.
 */
lastAuthenticatedAtMs?: number
/**
 * This is a list of scopes selected by the user for the current module.
 * This will default to empty/undefined to encourage the user to think
 * about what functionality this module needs.
 */
scopes?: Array<string>`,
                S = r(969475).object({
                    required: {},
                    optional: {
                        connectionPointer: (0, r(994818).IK)("external_connection"),
                        lastAuthenticatedAtMs: r(969475).number(),
                        scopes: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                R = r(969475).object({
                    required: {
                        repository: r(969475).string(),
                        userMessage: r(969475).string()
                    },
                    optional: {
                        allowedHosts: r(969475).array(r(969475).string()),
                        checkoutBranch: r(969475).string(),
                        checkoutCommit: r(969475).string(),
                        model: r(969475).string(),
                        mountPath: r(969475).string(),
                        sessionTitle: r(969475).string()
                    },
                    exact: !0
                }),
                C = r(969475).object({
                    required: {},
                    optional: {
                        sessionId: r(969475).string()
                    },
                    exact: !0
                }),
                A = r(969475).object({
                    required: {},
                    optional: {
                        sessionId: r(969475).string()
                    },
                    exact: !0
                }),
                P = r(969475).object({
                    required: {
                        message: r(969475).string()
                    },
                    optional: {
                        sessionId: r(969475).string()
                    },
                    exact: !0
                }),
                M = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                U = {
                    "claude.startRun": `
(args: {
				repository: string
				userMessage: string
				checkoutBranch?: string
				checkoutCommit?: string
				mountPath?: string
				sessionTitle?: string
				model?: string
				allowedHosts?: ClaudeAllowedHosts
			}) => Promise<{
				sessionId: string
				status: "pending" | "running" | "idle" | "closed" | "existing"
			}>`,
                    "claude.getRunStatus": `
(args: { sessionId?: string }) => Promise<{
				sessionId: string
				status: "pending" | "running" | "idle" | "closed"
			}>`,
                    "claude.listSessionEvents": `
(args: { sessionId?: string }) => Promise<{
				sessionId: string
				events: Array<unknown>
			}>`,
                    "claude.sendUserMessage": `
(args: {
				message: string
				sessionId?: string
			}) => Promise<{ sessionId: string }>`,
                    "claude.archiveRun": "(args: {}) => Promise<{ sessionId: string }>"
                },
                D = r(969475).object({
                    required: {
                        name: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                L = r(969475).object({
                    required: {
                        key: r(969475).string(),
                        value: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                N = r(969475).object({
                    required: {},
                    optional: {
                        envVars: r(969475).array(r(969475).lazy(() => L)),
                        maintenanceScript: r(969475).string(),
                        setupScript: r(969475).string()
                    },
                    exact: !0
                });
            r(969475).object({
                required: {},
                optional: {
                    environmentName: r(969475).string(),
                    tags: r(969475).record(r(969475).string(), r(969475).string())
                },
                exact: !0
            }), r(969475).object({
                required: {
                    machines: r(969475).array(r(969475).lazy(() => D))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    environmentName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    secrets: r(969475).array(r(969475).object({
                        required: {
                            filePath: r(969475).string(),
                            secretName: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    cpuCount: r(969475).number(),
                    environmentName: r(969475).string(),
                    memoryMb: r(969475).number(),
                    name: r(969475).string(),
                    networkIsolation: r(969475).lazy(() => O),
                    tags: r(969475).record(r(969475).string(), r(969475).string()),
                    timeoutSeconds: r(969475).number(),
                    volumeSizeGb: r(969475).number()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    machine: r(969475).lazy(() => D),
                    ranMaintenance: r(969475).boolean(),
                    ranSetup: r(969475).boolean()
                },
                optional: {
                    firewall: r(969475).object({
                        required: {
                            mode: r(969475).literals("open", "restricted")
                        },
                        optional: {
                            allowedCidrs: r(969475).array(r(969475).string()),
                            allowedDomains: r(969475).array(r(969475).string()),
                            source: r(969475).literals("network-isolation", "safe-mode")
                        },
                        exact: !0
                    }),
                    firewallUpdated: r(969475).boolean(),
                    machineProvisioning: r(969475).literals("created", "reused"),
                    maintenanceHandle: r(969475).lazy(() => E),
                    maintenanceLogTail: r(969475).string(),
                    maintenanceLogsPath: r(969475).string(),
                    maintenanceStartState: r(969475).literals("failed", "not_requested", "scheduled", "started"),
                    setupHandle: r(969475).lazy(() => E),
                    setupLogTail: r(969475).string(),
                    setupLogsPath: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    environmentName: r(969475).string(),
                    name: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    secretName: r(969475).string(),
                    secretValue: r(969475).string()
                },
                optional: {
                    environmentName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    filePath: r(969475).string(),
                    secretName: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    command: r(969475).string()
                },
                optional: {
                    backgroundAfterSeconds: r(969475).number(),
                    environmentName: r(969475).string(),
                    machineName: r(969475).string(),
                    taskDescription: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    finished: r(969475).boolean(),
                    output: r(969475).string(),
                    processId: r(969475).number()
                },
                optional: {
                    statusCode: r(969475).number()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).union([r(969475).object({
                        required: {
                            action: r(969475).literal("click"),
                            tab: r(969475).string(),
                            x: r(969475).number(),
                            y: r(969475).number()
                        },
                        optional: {
                            button: r(969475).literals("left", "middle", "right")
                        },
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("close"),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("create"),
                            tab: r(969475).string(),
                            url: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("double_click"),
                            tab: r(969475).string(),
                            x: r(969475).number(),
                            y: r(969475).number()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("drag"),
                            path: r(969475).array(r(969475).object({
                                required: {
                                    x: r(969475).number(),
                                    y: r(969475).number()
                                },
                                optional: {},
                                exact: !0
                            })),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("get_current_url"),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("goto"),
                            tab: r(969475).string(),
                            url: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("keypress"),
                            keys: r(969475).array(r(969475).string()),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("list")
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("move"),
                            tab: r(969475).string(),
                            x: r(969475).number(),
                            y: r(969475).number()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("print_accessibility_tree"),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("screenshot"),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("scroll"),
                            scroll_x: r(969475).number(),
                            scroll_y: r(969475).number(),
                            tab: r(969475).string(),
                            x: r(969475).number(),
                            y: r(969475).number()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("type"),
                            tab: r(969475).string(),
                            text: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            action: r(969475).literal("wait"),
                            seconds: r(969475).number(),
                            tab: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    })]))
                },
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    success: r(969475).boolean(),
                    text: r(969475).string()
                },
                optional: {
                    error: r(969475).string()
                },
                exact: !0
            });
            let E = r(969475).object({
                required: {
                    jobId: r(969475).string(),
                    logsPath: r(969475).string(),
                    machineName: r(969475).string()
                },
                optional: {
                    environmentName: r(969475).string()
                },
                exact: !0
            });
            r(969475).object({
                required: {
                    jobId: r(969475).string(),
                    machineName: r(969475).string()
                },
                optional: {
                    environmentName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    jobId: r(969475).string(),
                    status: r(969475).literals("failed", "queued", "running", "success")
                },
                optional: {
                    exitCode: r(969475).number()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    jobId: r(969475).string(),
                    machineName: r(969475).string()
                },
                optional: {
                    environmentName: r(969475).string(),
                    tailLines: r(969475).number()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    jobId: r(969475).string(),
                    logTail: r(969475).string(),
                    logsPath: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    path: r(969475).string()
                },
                optional: {
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    url: r(969475).string()
                },
                optional: {},
                exact: !0
            });
            let O = r(969475).object({
                    required: {},
                    optional: {
                        allowedCidrs: r(969475).array(r(969475).string()),
                        allowedDomains: r(969475).array(r(969475).string()),
                        blockOutbound: r(969475).boolean()
                    },
                    exact: !0
                }),
                F = r(969475).literals("failed", "pending", "running", "succeeded", "unknown");
            r(969475).object({
                required: {},
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    name: r(969475).string(),
                    state: r(969475).lazy(() => F)
                },
                optional: {
                    createdAt: r(969475).string(),
                    exitCode: r(969475).number(),
                    tags: r(969475).record(r(969475).string(), r(969475).string())
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    state: r(969475).lazy(() => F)
                },
                optional: {
                    exitCode: r(969475).number()
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string(),
                    timeoutMs: r(969475).number()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    state: r(969475).lazy(() => F)
                },
                optional: {
                    exitCode: r(969475).number()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    path: r(969475).string()
                },
                optional: {
                    environmentName: r(969475).string(),
                    limit: r(969475).nullable(r(969475).number()),
                    machineName: r(969475).string(),
                    offset: r(969475).nullable(r(969475).number())
                },
                exact: !0
            }), r(969475).object({
                required: {
                    content: r(969475).string(),
                    found: r(969475).boolean(),
                    hasMore: r(969475).boolean()
                },
                optional: {
                    fileUri: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    content: r(969475).string(),
                    path: r(969475).string()
                },
                optional: {
                    append: r(969475).boolean(),
                    environmentName: r(969475).string(),
                    machineName: r(969475).string(),
                    overwrite: r(969475).boolean()
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    destinationPath: r(969475).string()
                },
                optional: {
                    attachmentName: r(969475).string(),
                    environmentName: r(969475).string(),
                    fileUrl: r(969475).string(),
                    machineName: r(969475).string(),
                    threadFileId: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    destinationPath: r(969475).string(),
                    fileName: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    path: r(969475).string()
                },
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    fileName: r(969475).string(),
                    url: r(969475).string()
                },
                optional: {
                    fileUri: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    path: r(969475).string()
                },
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    entries: r(969475).array(r(969475).string())
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    path: r(969475).string()
                },
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    path: r(969475).string()
                },
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    tags: r(969475).record(r(969475).string(), r(969475).string())
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    tags: r(969475).record(r(969475).string(), r(969475).string())
                },
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    secretName: r(969475).string()
                },
                optional: {
                    environmentName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            });
            let G = r(969475).object({
                required: {
                    name: r(969475).string(),
                    port: r(969475).number(),
                    url: r(969475).string()
                },
                optional: {},
                exact: !0
            });
            r(969475).object({
                required: {},
                optional: {
                    environmentName: r(969475).string(),
                    machineName: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    tunnels: r(969475).array(r(969475).lazy(() => G))
                },
                optional: {},
                exact: !0
            });
            let V = `
type ComputerMachineInfo = {
	readonly name: string
}

type ComputerEnvironmentVariable = {
	readonly key: string
	readonly value: string
}

type ComputerEnvironmentConfig = {
	readonly setupScript?: string
	readonly maintenanceScript?: string
	readonly envVars?: ReadonlyArray<ComputerEnvironmentVariable>
}

type ComputerListMachinesToolInput = {
	readonly environmentName?: string
	/** Filter machines by tags. Only machines matching ALL tags are returned. */
	readonly tags?: Readonly<Record<string, string>>
}

type ComputerListMachinesToolOutput = {
	readonly machines: ReadonlyArray<ComputerMachineInfo>
}

type ComputerListSecretsToolInput = {
	readonly environmentName?: string
}

type ComputerListSecretsToolOutput = {
	readonly secrets: ReadonlyArray<{ secretName: string; filePath: string }>
}

type ComputerCreateMachineToolInput = {
	readonly name?: string
	readonly environmentName?: string
	readonly cpuCount?: number
	readonly memoryMb?: number
	readonly volumeSizeGb?: number
	/**
	 * Auto-terminate the sandbox after this many seconds.
	 * Pass 0 to disable timeout (sandbox runs until explicitly destroyed).
	 */
	readonly timeoutSeconds?: number
	/** User-defined tags for filtering and reconnection */
	readonly tags?: Readonly<Record<string, string>>
	/** Network isolation configuration */
	readonly networkIsolation?: ComputerNetworkIsolationConfig
}

type ComputerCreateMachineToolOutput = {
	readonly machine: ComputerMachineInfo
	readonly ranSetup: boolean
	readonly setupLogsPath?: string
	readonly setupLogTail?: string
	readonly setupHandle?: ComputerJobHandle
	readonly ranMaintenance: boolean
	readonly maintenanceStartState?:
		| "not_requested"
		| "scheduled"
		| "started"
		| "failed"
	readonly maintenanceLogsPath?: string
	readonly maintenanceLogTail?: string
	readonly maintenanceHandle?: ComputerJobHandle
	readonly machineProvisioning?: "created" | "reused"
	readonly firewallUpdated?: boolean
	readonly firewall?: ComputerFirewallInfo
}

type ComputerDestroyMachineToolInput = {
	readonly name?: string
	readonly environmentName?: string
}

type ComputerDestroyMachineToolOutput = object

type ComputerSetSecretToolInput = {
	readonly environmentName?: string
	readonly secretName: string
	readonly secretValue: string
}

type ComputerSetSecretToolOutput = {
	readonly secretName: string
	readonly filePath: string
}

type ComputerTerminalToolInput = {
	readonly command: string
	readonly taskDescription?: string
	readonly backgroundAfterSeconds?: number
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerTerminalToolOutput = TerminalResult

type ComputerBrowserToolInput = {
	readonly actions: ReadonlyArray<BrowserAction>
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerBrowserToolOutput = BrowserResult

type ComputerJobHandle = {
	readonly jobId: string
	readonly machineName: string
	readonly environmentName?: string
	readonly logsPath: string
}

type ComputerGetJobStatusToolInput = {
	readonly jobId: string
	readonly machineName: string
	readonly environmentName?: string
}

type ComputerGetJobStatusToolOutput = {
	readonly jobId: string
	readonly status: "queued" | "running" | "success" | "failed"
	readonly exitCode?: number
}

type ComputerGetJobLogsToolInput = {
	readonly jobId: string
	readonly machineName: string
	readonly environmentName?: string
	readonly tailLines?: number
}

type ComputerGetJobLogsToolOutput = {
	readonly jobId: string
	readonly logsPath: string
	readonly logTail: string
}

type ComputerViewFileUrlToolInput = {
	readonly path: string
	readonly machineName?: string
}

type ComputerViewFileUrlToolOutput = {
	readonly url: string
}

type ComputerNetworkIsolationConfig = {
	readonly blockOutbound?: boolean
	readonly allowedCidrs?: ReadonlyArray<string>
	readonly allowedDomains?: ReadonlyArray<string>
}

type ComputerMachineState =
	| "pending"
	| "running"
	| "succeeded"
	| "failed"
	| "unknown"

type ComputerGetMachineToolInput = {
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerGetMachineToolOutput = {
	readonly name: string
	readonly state: ComputerMachineState
	readonly createdAt?: string
	readonly exitCode?: number
	readonly tags?: Readonly<Record<string, string>>
}

type ComputerPollToolInput = {
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerPollToolOutput = {
	readonly state: ComputerMachineState
	readonly exitCode?: number
}

type ComputerWaitToolInput = {
	readonly machineName?: string
	readonly environmentName?: string
	/** Maximum time to wait in ms. Defaults to the sandbox timeout. */
	readonly timeoutMs?: number
}

type ComputerWaitToolOutput = {
	readonly state: ComputerMachineState
	readonly exitCode?: number
}

type ComputerReadFileToolInput = {
	readonly path: string
	readonly machineName?: string
	readonly environmentName?: string
	/**
	 * The number of lines/pages to read.
	 * Only provide if the file is too large to read at once.
	 */
	readonly limit?: number | null
	/**
	 * The line/page number to start reading from.
	 * Only provide if the file is too large to read at once.
	 */
	readonly offset?: number | null
}

type ComputerReadFileToolOutput = {
	readonly content: string
	readonly found: boolean
	readonly hasMore: boolean
	readonly fileUri?: string
}

type ComputerWriteFileToolInput = {
	/** File path under /data. Relative paths resolve under /data. Paths containing node_modules are rejected. */
	readonly path: string
	/** UTF-8 text content to write. */
	readonly content: string
	/** Defaults to true unless append is true. Ignored when append is true. */
	readonly overwrite?: boolean
	/** Appends to the file, creating it if needed. Wins over overwrite when true. */
	readonly append?: boolean
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerWriteFileToolOutput = object

type ComputerUploadFileToolInput = {
	/** Destination path on the remote machine. */
	readonly destinationPath: string
	/**
	 * The file name of the attachment as shown in the conversation
	 * (e.g. 'report.pdf', 'archive.zip'). Preferred way to reference attachments.
	 */
	readonly attachmentName?: string
	/**
	 * Thread-scoped file ID to upload. Use attachmentName instead when possible.
	 */
	readonly threadFileId?: string
	/**
	 * File URL/alias to upload as a fallback when neither attachmentName
	 * nor threadFileId is available.
	 */
	readonly fileUrl?: string
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerUploadFileToolOutput = {
	readonly fileName: string
	readonly destinationPath: string
}

type ComputerDownloadFileToolInput = {
	/** Source path on the remote machine. */
	readonly path: string
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerDownloadFileToolOutput = {
	readonly url: string
	readonly fileName: string
	readonly fileUri?: string
}

type ComputerListDirToolInput = {
	readonly path: string
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerListDirToolOutput = {
	readonly entries: ReadonlyArray<string>
}

type ComputerMkdirToolInput = {
	readonly path: string
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerMkdirToolOutput = object

type ComputerDeleteFileToolInput = {
	readonly path: string
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerDeleteFileToolOutput = object

type ComputerGetTagsToolInput = {
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerGetTagsToolOutput = {
	readonly tags: Readonly<Record<string, string>>
}

type ComputerSetTagsToolInput = {
	readonly machineName?: string
	readonly environmentName?: string
	readonly tags: Readonly<Record<string, string>>
}

type ComputerSetTagsToolOutput = object

type ComputerDeleteSecretToolInput = {
	readonly environmentName?: string
	readonly secretName: string
}

type ComputerDeleteSecretToolOutput = object

type ComputerTunnelInfo = {
	readonly port: number
	readonly name: string
	readonly url: string
}

type ComputerGetTunnelsToolInput = {
	readonly machineName?: string
	readonly environmentName?: string
}

type ComputerGetTunnelsToolOutput = {
	readonly tunnels: ReadonlyArray<ComputerTunnelInfo>
}`,
                z = r(969475).object({
                    required: {},
                    optional: {
                        environments: r(969475).record(r(969475).string(), r(969475).lazy(() => N))
                    },
                    exact: !0
                }),
                W = r(969475).object({
                    required: {},
                    optional: {
                        environmentName: r(969475).string(),
                        tags: r(969475).record(r(969475).string(), r(969475).string())
                    },
                    exact: !0
                }),
                B = r(969475).object({
                    required: {},
                    optional: {
                        environmentName: r(969475).string()
                    },
                    exact: !0
                }),
                H = r(969475).object({
                    required: {},
                    optional: {
                        cpuCount: r(969475).number(),
                        environmentName: r(969475).string(),
                        memoryMb: r(969475).number(),
                        name: r(969475).string(),
                        networkIsolation: r(969475).lazy(() => O),
                        tags: r(969475).record(r(969475).string(), r(969475).string()),
                        timeoutSeconds: r(969475).number(),
                        volumeSizeGb: r(969475).number()
                    },
                    exact: !0
                }),
                Q = r(969475).object({
                    required: {},
                    optional: {
                        environmentName: r(969475).string(),
                        name: r(969475).string()
                    },
                    exact: !0
                }),
                Z = r(969475).object({
                    required: {
                        secretName: r(969475).string(),
                        secretValue: r(969475).string()
                    },
                    optional: {
                        environmentName: r(969475).string()
                    },
                    exact: !0
                }),
                J = r(969475).object({
                    required: {
                        command: r(969475).string()
                    },
                    optional: {
                        backgroundAfterSeconds: r(969475).number(),
                        environmentName: r(969475).string(),
                        machineName: r(969475).string(),
                        taskDescription: r(969475).string()
                    },
                    exact: !0
                }),
                K = r(969475).object({
                    required: {
                        actions: r(969475).array(r(969475).union([r(969475).object({
                            required: {
                                action: r(969475).literal("click"),
                                tab: r(969475).string(),
                                x: r(969475).number(),
                                y: r(969475).number()
                            },
                            optional: {
                                button: r(969475).literals("left", "middle", "right")
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("close"),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("create"),
                                tab: r(969475).string(),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("double_click"),
                                tab: r(969475).string(),
                                x: r(969475).number(),
                                y: r(969475).number()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("drag"),
                                path: r(969475).array(r(969475).object({
                                    required: {
                                        x: r(969475).number(),
                                        y: r(969475).number()
                                    },
                                    optional: {},
                                    exact: !0
                                })),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("get_current_url"),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("goto"),
                                tab: r(969475).string(),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("keypress"),
                                keys: r(969475).array(r(969475).string()),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("list")
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("move"),
                                tab: r(969475).string(),
                                x: r(969475).number(),
                                y: r(969475).number()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("print_accessibility_tree"),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("screenshot"),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("scroll"),
                                scroll_x: r(969475).number(),
                                scroll_y: r(969475).number(),
                                tab: r(969475).string(),
                                x: r(969475).number(),
                                y: r(969475).number()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("type"),
                                tab: r(969475).string(),
                                text: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                action: r(969475).literal("wait"),
                                seconds: r(969475).number(),
                                tab: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })]))
                    },
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                Y = r(969475).object({
                    required: {
                        jobId: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    optional: {
                        environmentName: r(969475).string()
                    },
                    exact: !0
                }),
                X = r(969475).object({
                    required: {
                        jobId: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    optional: {
                        environmentName: r(969475).string(),
                        tailLines: r(969475).number()
                    },
                    exact: !0
                }),
                $ = r(969475).object({
                    required: {
                        path: r(969475).string()
                    },
                    optional: {
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                ee = r(969475).object({
                    required: {},
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                et = r(969475).object({
                    required: {},
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                er = r(969475).object({
                    required: {},
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string(),
                        timeoutMs: r(969475).number()
                    },
                    exact: !0
                }),
                ea = r(969475).object({
                    required: {
                        path: r(969475).string()
                    },
                    optional: {
                        environmentName: r(969475).string(),
                        limit: r(969475).nullable(r(969475).number()),
                        machineName: r(969475).string(),
                        offset: r(969475).nullable(r(969475).number())
                    },
                    exact: !0
                }),
                ei = r(969475).object({
                    required: {
                        content: r(969475).string(),
                        path: r(969475).string()
                    },
                    optional: {
                        append: r(969475).boolean(),
                        environmentName: r(969475).string(),
                        machineName: r(969475).string(),
                        overwrite: r(969475).boolean()
                    },
                    exact: !0
                }),
                eo = r(969475).object({
                    required: {
                        destinationPath: r(969475).string()
                    },
                    optional: {
                        attachmentName: r(969475).string(),
                        environmentName: r(969475).string(),
                        fileUrl: r(969475).string(),
                        machineName: r(969475).string(),
                        threadFileId: r(969475).string()
                    },
                    exact: !0
                }),
                en = r(969475).object({
                    required: {
                        path: r(969475).string()
                    },
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                el = r(969475).object({
                    required: {
                        path: r(969475).string()
                    },
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                es = r(969475).object({
                    required: {
                        path: r(969475).string()
                    },
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                ec = r(969475).object({
                    required: {
                        path: r(969475).string()
                    },
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                eu = r(969475).object({
                    required: {},
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                ed = r(969475).object({
                    required: {
                        tags: r(969475).record(r(969475).string(), r(969475).string())
                    },
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                ep = r(969475).object({
                    required: {
                        secretName: r(969475).string()
                    },
                    optional: {
                        environmentName: r(969475).string()
                    },
                    exact: !0
                }),
                eg = r(969475).object({
                    required: {},
                    optional: {
                        environmentName: r(969475).string(),
                        machineName: r(969475).string()
                    },
                    exact: !0
                }),
                em = {
                    "computer.listMachines": `
listMachines(
		args: ComputerListMachinesToolInput,
	): Promise<ComputerListMachinesToolOutput>`,
                    "computer.listSecrets": `
listSecrets(
		args: ComputerListSecretsToolInput,
	): Promise<ComputerListSecretsToolOutput>`,
                    "computer.createMachine": `
createMachine(
		args: ComputerCreateMachineToolInput,
	): Promise<ComputerCreateMachineToolOutput>`,
                    "computer.destroyMachine": `
destroyMachine(
		args: ComputerDestroyMachineToolInput,
	): Promise<ComputerDestroyMachineToolOutput>`,
                    "computer.setSecret": `
setSecret(
		args: ComputerSetSecretToolInput,
	): Promise<ComputerSetSecretToolOutput>`,
                    "computer.terminal": "terminal(args: ComputerTerminalToolInput): Promise<ComputerTerminalToolOutput>",
                    "computer.browser": `
browser(
		args: ComputerBrowserToolInput,
	): Promise<EffectResultOrValue<ComputerBrowserToolOutput>>`,
                    "computer.getJobStatus": `
getJobStatus(
		args: ComputerGetJobStatusToolInput,
	): Promise<ComputerGetJobStatusToolOutput>`,
                    "computer.getJobLogs": `
getJobLogs(
		args: ComputerGetJobLogsToolInput,
	): Promise<ComputerGetJobLogsToolOutput>`,
                    "computer.viewFileUrl": `
viewFileUrl(
		args: ComputerViewFileUrlToolInput,
	): Promise<EffectResultOrValue<ComputerViewFileUrlToolOutput>>`,
                    "computer.getMachine": `
getMachine(
		args: ComputerGetMachineToolInput,
	): Promise<ComputerGetMachineToolOutput>`,
                    "computer.poll": "poll(args: ComputerPollToolInput): Promise<ComputerPollToolOutput>",
                    "computer.wait": "wait(args: ComputerWaitToolInput): Promise<ComputerWaitToolOutput>",
                    "computer.readFile": `
readFile(
		args: ComputerReadFileToolInput,
	): Promise<EffectResultOrValue<ComputerReadFileToolOutput>>`,
                    "computer.writeFile": `
writeFile(
		args: ComputerWriteFileToolInput,
	): Promise<ComputerWriteFileToolOutput>`,
                    "computer.uploadFile": `
uploadFile(
		args: ComputerUploadFileToolInput,
	): Promise<EffectResultOrValue<ComputerUploadFileToolOutput>>`,
                    "computer.downloadFile": `
downloadFile(
		args: ComputerDownloadFileToolInput,
	): Promise<EffectResultOrValue<ComputerDownloadFileToolOutput>>`,
                    "computer.listDir": "listDir(args: ComputerListDirToolInput): Promise<ComputerListDirToolOutput>",
                    "computer.mkdir": "mkdir(args: ComputerMkdirToolInput): Promise<ComputerMkdirToolOutput>",
                    "computer.rm": "rm(args: ComputerDeleteFileToolInput): Promise<ComputerDeleteFileToolOutput>",
                    "computer.getTags": "getTags(args: ComputerGetTagsToolInput): Promise<ComputerGetTagsToolOutput>",
                    "computer.setTags": "setTags(args: ComputerSetTagsToolInput): Promise<ComputerSetTagsToolOutput>",
                    "computer.deleteSecret": `
deleteSecret(
		args: ComputerDeleteSecretToolInput,
	): Promise<ComputerDeleteSecretToolOutput>`,
                    "computer.tunnels": `
tunnels(
		args: ComputerGetTunnelsToolInput,
	): Promise<ComputerGetTunnelsToolOutput>`
                };
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("confluence"),
                    type: r(969475).literal("confluence")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    query: r(969475).string()
                },
                optional: {
                    maxResults: r(969475).number()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    baseUrl: r(969475).string(),
                    query: r(969475).string(),
                    results: r(969475).array(r(969475).object({
                        required: {
                            blocks: r(969475).array(r(969475).string()),
                            id: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    pageId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    pageId: r(969475).string(),
                    title: r(969475).string(),
                    type: r(969475).literal("confluence-page")
                },
                optional: {},
                exact: !0
            });
            let eb = `
type ConfluencePersistedState = Record<never, never>

type ConfluenceSearchInput = {
	question: string
	keywords?: string
	lookback?: string
}

type ConfluenceSearchResult = {
	results: Array<ConfluenceSearchResultItem>
}

type ConfluenceCqlQueryInput = {
	query: string
	maxResults?: number
}

type ConfluenceCqlQueryResult = {
	results: Array<ConfluenceCqlQueryResultItem>
	query: string
	baseUrl: string
}

type ConfluenceLoadPageInput = {
	pageId: string
}

type ConfluenceLoadPageResult = {
	type: "confluence-page"
	title: string
	blocks: string[]
	pageId: string
}`,
                ey = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                e_ = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string()
                    },
                    exact: !0
                }),
                eh = r(969475).object({
                    required: {
                        query: r(969475).string()
                    },
                    optional: {
                        maxResults: r(969475).number()
                    },
                    exact: !0
                }),
                ef = r(969475).object({
                    required: {
                        pageId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                ex = `
/**
 * A connection pointer is used for any modules that need to store external
 * authentication state.
 *
 * Uses ExternalConnectionTable only.
 */
connectionPointer?: RecordPointer<ExternalConnectionTable>
/**
 * This represents the last time the user authenticated for this module.
 * This is used to help determine if the connection has expired from when
 * the user authenticated and us checking if the connection is still active
 * through \`hasActiveOAuthConnection\`.
 */
lastAuthenticatedAtMs?: number
/**
 * This is a list of scopes selected by the user for the current module.
 * This will default to empty/undefined to encourage the user to think
 * about what functionality this module needs.
 */
scopes?: Array<string>`,
                eq = r(969475).object({
                    required: {},
                    optional: {
                        connectionPointer: (0, r(994818).IK)("external_connection"),
                        lastAuthenticatedAtMs: r(969475).number(),
                        scopes: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                ej = r(969475).object({
                    required: {
                        prompt: r(969475).string(),
                        repository: r(969475).string()
                    },
                    optional: {
                        branchName: r(969475).string(),
                        openAsCursorGithubApp: r(969475).boolean(),
                        ref: r(969475).string(),
                        skipReviewerRequest: r(969475).boolean(),
                        webhook: r(969475).object({
                            required: {
                                url: r(969475).string()
                            },
                            optional: {
                                secret: r(969475).string()
                            },
                            exact: !0
                        })
                    },
                    exact: !0
                }),
                ev = r(969475).object({
                    required: {
                        agentId: r(969475).string(),
                        prompt: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                ek = r(969475).object({
                    required: {
                        agentId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                ew = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                eI = {
                    "cursor.createAgent": `
(args: {
				prompt: string
				repository: string
				ref?: string
				branchName?: string
				openAsCursorGithubApp?: boolean
				skipReviewerRequest?: boolean
				webhook?: {
					url: string
					secret?: string
				}
			}) => Promise<CursorAgent>`,
                    "cursor.addFollowup": `
(args: {
				agentId: string
				prompt: string
			}) => Promise<{ id: string }>`,
                    "cursor.getAgent": "(args: { agentId: string }) => Promise<CursorAgent>",
                    "cursor.listRepositories": `
(args: {}) => Promise<{
				repositories: Array<{
					owner: string
					name: string
					repository: string
				}>
			}>`
                };
            r(969475).object({
                required: {},
                optional: {},
                exact: !0
            });
            let eT = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                eS = r(969475).literals("react", "read", "search", "write");
            r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).lazy(() => eS)),
                    identifier: r(969475).union([r(969475).array(r(969475).string()), r(969475).string()]),
                    moduleType: r(969475).literal("discord"),
                    type: r(969475).literal("discord")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).lazy(() => eS)),
                    identifier: r(969475).union([r(969475).array(r(969475).string()), r(969475).string()])
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    connectionPointer: (0, r(994818).IK)("external_connection"),
                    guildId: r(969475).string(),
                    guildName: r(969475).string(),
                    installerDiscordUserId: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            author: r(969475).string(),
                            channelId: r(969475).string(),
                            guildId: r(969475).string(),
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            messageId: r(969475).string(),
                            messageType: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    channelId: r(969475).string(),
                    content: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    channelId: r(969475).string(),
                    content: r(969475).string(),
                    messageId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    channelId: r(969475).string(),
                    emoji: r(969475).string(),
                    messageId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    channelId: r(969475).string(),
                    emoji: r(969475).string(),
                    messageId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {}
            }), r(969475).object({
                required: {
                    id: r(969475).string(),
                    name: r(969475).string(),
                    type: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    channelId: r(969475).string()
                },
                optional: {
                    limit: r(969475).number()
                },
                exact: !0
            });
            let eR = r(969475).object({
                required: {
                    channelId: r(969475).string(),
                    content: r(969475).string(),
                    fromBot: r(969475).boolean(),
                    guildId: r(969475).string(),
                    id: r(969475).string(),
                    timestamp: r(969475).string(),
                    url: r(969475).string()
                },
                optional: {
                    channelName: r(969475).string()
                },
                exact: !0
            });
            r(969475).object({
                required: {
                    type: r(969475).literal("discord.interaction")
                },
                optional: {
                    allChannels: r(969475).boolean(),
                    channelIds: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).object({
                required: {
                    message: r(969475).lazy(() => eR),
                    thread: r(969475).array(r(969475).lazy(() => eR))
                },
                optional: {
                    applicationId: r(969475).string(),
                    interactionToken: r(969475).string(),
                    triggeringNotionUser: r(969475).object({
                        required: {
                            id: r(969475).string()
                        },
                        optional: {
                            email: r(969475).string(),
                            name: r(969475).string()
                        },
                        exact: !0
                    })
                },
                exact: !0
            });
            let eC = `
type DiscordPersistedState = {
	/**
	 * Pointer to the ExternalConnection record that stores guild metadata.
	 * Created during the Discord OAuth bot-install flow.
	 */
	connectionPointer?: RecordPointer<ExternalConnectionTable>
	/**
	 * The Discord guild (server) ID this module is scoped to.
	 * Used to enforce cross-server isolation — all operations
	 * are restricted to this guild.
	 */
	guildId?: string
	/**
	 * The display name of the connected Discord guild.
	 */
	guildName?: string
	/**
	 * Discord user ID of the user who installed the integration.
	 * Used to enforce Discord-level channel permissions on write effects —
	 * the agent cannot send/react in channels the installer lacks access to.
	 * Optional for backwards compatibility with existing installations.
	 */
	installerDiscordUserId?: string
}

type DiscordSearchInput = {
	question: string
	keywords?: string
	lookback?: string
}

type DiscordSearchResult = {
	results: Array<DiscordSearchResultItem>
}

type DiscordSendMessageToChannelInput = {
	channelId: string
	content: string
}

type DiscordUpdateMessageInput = {
	channelId: string
	messageId: string
	content: string
}

type DiscordAddReactionInput = {
	channelId: string
	messageId: string
	emoji: string
}

type DiscordRemoveReactionInput = {
	channelId: string
	messageId: string
	emoji: string
}

type DiscordListChannelsInput = Record<string, never>

/**
 * Represents a text channel in a Discord guild.
 */
type DiscordChannel = {
	/**
	 * The Discord channel ID (snowflake).
	 */
	id: string
	/**
	 * The name of the channel.
	 */
	name: string
	/**
	 * The type of channel (e.g. "text", "announcement", "forum", "media").
	 */
	type: string
}

type DiscordGetRecentChannelMessagesInput = {
	channelId: string
	limit?: number
}

/**
 * Represents a message sent or received in Discord.
 */
type DiscordMessage = {
	/**
	 * The Discord message ID (snowflake).
	 */
	id: string
	/**
	 * The Discord channel ID where the message was sent.
	 */
	channelId: string
	/**
	 * The name of the channel the message was sent in, if available.
	 */
	channelName?: string
	/**
	 * The Discord guild (server) ID.
	 */
	guildId: string
	/**
	 * The content of the message (markdown).
	 */
	content: string
	/**
	 * Whether the message was sent by the bot.
	 */
	fromBot: boolean
	/**
	 * ISO 8601 timestamp of when the message was created.
	 */
	timestamp: string
	/**
	 * A user-navigable URL to the message.
	 */
	url: string
}

/**
 * Trigger state for Discord interaction (slash command) triggers.
 */
type DiscordInteractionTrigger = {
	type: "discord.interaction"
	channelIds?: Array<string> // IDs of channels to trigger on. If you do not know the channel ID, you can leave this blank and the user will fill it out later. DO NOT make up channel IDs.
	allChannels?: boolean // Whether to trigger on all channels. Set to false. Only set this to true if the user explicitly mentions triggering from all channels.
}

/**
 * Trigger variables provided when a Discord interaction trigger fires.
 */
type DiscordInteractionTriggerVariables = {
    message: DiscordMessage; // The message from the /ai slash command.
    thread: Array<DiscordMessage>; // The thread context, if the command was invoked in a thread.
    /**
     * The Notion user who triggered this workflow, if resolved from the Discord user.
     * If undefined, the Discord user could not be mapped to a Notion user.
     */
    triggeringNotionUser?: TriggeringNotionUser;
};`,
                eA = `
/**
 * Pointer to the ExternalConnection record that stores guild metadata.
 * Created during the Discord OAuth bot-install flow.
 */
connectionPointer?: RecordPointer<ExternalConnectionTable>
/**
 * The Discord guild (server) ID this module is scoped to.
 * Used to enforce cross-server isolation — all operations
 * are restricted to this guild.
 */
guildId?: string
/**
 * The display name of the connected Discord guild.
 */
guildName?: string
/**
 * Discord user ID of the user who installed the integration.
 * Used to enforce Discord-level channel permissions on write effects —
 * the agent cannot send/react in channels the installer lacks access to.
 * Optional for backwards compatibility with existing installations.
 */
installerDiscordUserId?: string`,
                eP = r(969475).object({
                    required: {},
                    optional: {
                        connectionPointer: (0, r(994818).IK)("external_connection"),
                        guildId: r(969475).string(),
                        guildName: r(969475).string(),
                        installerDiscordUserId: r(969475).string()
                    },
                    exact: !0
                }),
                eM = {
                    "discord.interaction": {
                        state: `
type: "discord.interaction"
channelIds?: Array<string> // IDs of channels to trigger on. If you do not know the channel ID, you can leave this blank and the user will fill it out later. DO NOT make up channel IDs.
allChannels?: boolean // Whether to trigger on all channels. Set to false. Only set this to true if the user explicitly mentions triggering from all channels.`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("discord.interaction")
                            },
                            optional: {
                                allChannels: r(969475).boolean(),
                                channelIds: r(969475).array(r(969475).string())
                            },
                            exact: !0
                        })
                    }
                },
                eU = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string()
                    },
                    exact: !0
                }),
                eD = r(969475).object({
                    required: {
                        channelId: r(969475).string(),
                        content: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                eL = r(969475).object({
                    required: {
                        channelId: r(969475).string(),
                        content: r(969475).string(),
                        messageId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                eN = r(969475).object({
                    required: {
                        channelId: r(969475).string(),
                        emoji: r(969475).string(),
                        messageId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                eE = r(969475).object({
                    required: {
                        channelId: r(969475).string(),
                        emoji: r(969475).string(),
                        messageId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                eO = r(969475).object({
                    required: {},
                    optional: {}
                }),
                eF = r(969475).object({
                    required: {
                        channelId: r(969475).string()
                    },
                    optional: {
                        limit: r(969475).number()
                    },
                    exact: !0
                }),
                eG = {
                    "discord.search": "search(args: DiscordSearchInput): Promise<DiscordSearchResult>",
                    "discord.sendMessageToChannel": `
sendMessageToChannel(
		args: DiscordSendMessageToChannelInput,
	): Promise<DiscordMessage>`,
                    "discord.updateMessage": "updateMessage(args: DiscordUpdateMessageInput): Promise<DiscordMessage>",
                    "discord.addReaction": "addReaction(args: DiscordAddReactionInput): Promise<void>",
                    "discord.removeReaction": "removeReaction(args: DiscordRemoveReactionInput): Promise<void>",
                    "discord.listChannels": "listChannels(args: DiscordListChannelsInput): Promise<DiscordChannel[]>",
                    "discord.getRecentChannelMessages": `
getRecentChannelMessages(
		args: DiscordGetRecentChannelMessagesInput,
	): Promise<DiscordMessage[]>`
                };
            r(969475).object({
                required: {
                    id: r(969475).string()
                },
                optional: {},
                exact: !0
            });
            let eV = `
type File = {
	id: string
}`,
                ez = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                eW = r(969475).object({
                    required: {
                        fileId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                eB = r(969475).object({
                    required: {
                        fileId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                eH = r(969475).object({
                    required: {
                        fileId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                });
            r(969475).object({
                required: {
                    dir: r(969475).string()
                },
                optional: {
                    tree: r(969475).boolean()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    files: r(969475).array(r(969475).string())
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    entries: r(969475).array(r(969475).string())
                },
                optional: {
                    tree: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    files: r(969475).array(r(969475).object({
                        required: {
                            content: r(969475).string(),
                            path: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            });
            let eQ = `
type FsReadDirInput = {
	dir: string
	tree?: boolean
}

type FsReadFilesInput = {
	files: string[]
}

type FsReadDirResult = {
	entries: string[]
	tree?: string
}

type FsReadFilesResult = {
	files: Array<{
		path: string
		content: string
	}>
}`,
                eZ = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                eJ = r(969475).object({
                    required: {
                        dir: r(969475).string()
                    },
                    optional: {
                        tree: r(969475).boolean()
                    },
                    exact: !0
                }),
                eK = r(969475).object({
                    required: {
                        files: r(969475).array(r(969475).string())
                    },
                    optional: {},
                    exact: !0
                });
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("github"),
                    type: r(969475).literal("github")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string(),
                    options: r(969475).object({
                        required: {},
                        optional: {
                            fileType: r(969475).literals("code", "issue", "pull-request"),
                            repo: r(969475).string()
                        },
                        exact: !0
                    })
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {
                            authorName: r(969475).string(),
                            fileType: r(969475).string(),
                            githubRepoName: r(969475).string(),
                            statusTag: r(969475).string()
                        },
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    prNumber: r(969475).string(),
                    repoName: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    orgName: r(969475).string(),
                    prNumber: r(969475).string(),
                    repoName: r(969475).string(),
                    timestamp: r(969475).number(),
                    title: r(969475).string(),
                    type: r(969475).literal("github")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    issueNumber: r(969475).string(),
                    repoName: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    orgName: r(969475).string(),
                    prNumber: r(969475).string(),
                    repoName: r(969475).string(),
                    timestamp: r(969475).number(),
                    title: r(969475).string(),
                    type: r(969475).literal("github")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    commitSha: r(969475).string(),
                    repoName: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    orgName: r(969475).string(),
                    prNumber: r(969475).string(),
                    repoName: r(969475).string(),
                    timestamp: r(969475).number(),
                    title: r(969475).string(),
                    type: r(969475).literal("github")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    path: r(969475).string(),
                    repoName: r(969475).string()
                },
                optional: {
                    lineNumbers: r(969475).string(),
                    ref: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    codePath: r(969475).string(),
                    content: r(969475).string(),
                    orgName: r(969475).string(),
                    repoName: r(969475).string(),
                    type: r(969475).literal("githubCode"),
                    url: r(969475).string()
                },
                optional: {
                    branchName: r(969475).string(),
                    lineNumbers: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    query: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).array(r(969475).object({
                required: {
                    codePath: r(969475).string(),
                    content: r(969475).string(),
                    orgName: r(969475).string(),
                    repoName: r(969475).string(),
                    type: r(969475).literal("githubCode"),
                    url: r(969475).string()
                },
                optional: {
                    branchName: r(969475).string(),
                    lineNumbers: r(969475).string()
                },
                exact: !0
            })), r(969475).object({
                required: {
                    directory: r(969475).string()
                },
                optional: {
                    repoName: r(969475).string()
                },
                exact: !0
            }), r(969475).array(r(969475).object({
                required: {
                    codePath: r(969475).string(),
                    content: r(969475).string(),
                    orgName: r(969475).string(),
                    repoName: r(969475).string(),
                    type: r(969475).literal("githubCode"),
                    url: r(969475).string()
                },
                optional: {
                    branchName: r(969475).string(),
                    lineNumbers: r(969475).string()
                },
                exact: !0
            }));
            let eY = `
type GithubPersistedState = {}

type GithubSearchInput = {
	question: string
	keywords?: string
	lookback?: string
	options?: {
		repo?: string
		fileType?: "code" | "issue" | "pull-request"
	}
}

type GithubSearchResult = {
	results: Array<GithubSearchResultItem>
}

type GithubLoadPRInput = {
	repoName: string
	prNumber: string
}

type GithubLoadPRResult = LoadGithubResponse

type GithubLoadIssueInput = {
	repoName: string
	issueNumber: string
}

type GithubLoadIssueResult = LoadGithubResponse

type GithubLoadCommitInput = {
	repoName: string
	commitSha: string
}

type GithubLoadCommitResult = LoadGithubResponse

type GithubLoadFileInput = {
	repoName: string
	path: string
	ref?: string
	lineNumbers?: string
}

type GithubLoadFileResult = LoadGithubCodeResponse

type GithubGrepCodeInput = {
	query: string
}

type GithubGrepCodeResult = Array<LoadGithubCodeResponse>

type GithubLsDirectoryInput = {
	directory: string
	repoName?: string
}

type GithubLsDirectoryResult = Array<LoadGithubCodeResponse>`,
                eX = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                e$ = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string(),
                        options: r(969475).object({
                            required: {},
                            optional: {
                                fileType: r(969475).literals("code", "issue", "pull-request"),
                                repo: r(969475).string()
                            },
                            exact: !0
                        })
                    },
                    exact: !0
                }),
                e9 = r(969475).object({
                    required: {
                        query: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                e4 = r(969475).object({
                    required: {
                        directory: r(969475).string()
                    },
                    optional: {
                        repoName: r(969475).string()
                    },
                    exact: !0
                }),
                e6 = r(969475).object({
                    required: {
                        prNumber: r(969475).string(),
                        repoName: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                e7 = r(969475).object({
                    required: {
                        issueNumber: r(969475).string(),
                        repoName: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                e5 = r(969475).object({
                    required: {
                        commitSha: r(969475).string(),
                        repoName: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                e0 = r(969475).object({
                    required: {
                        path: r(969475).string(),
                        repoName: r(969475).string()
                    },
                    optional: {
                        lineNumbers: r(969475).string(),
                        ref: r(969475).string()
                    },
                    exact: !0
                });
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("gmail"),
                    type: r(969475).literal("gmail")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    query: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            emailAddress: r(969475).string(),
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).union([r(969475).object({
                required: {
                    threadId: r(969475).string()
                },
                optional: {
                    url: r(969475).isUndefined()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    url: r(969475).string()
                },
                optional: {
                    threadId: r(969475).isUndefined()
                },
                exact: !0
            })]), r(969475).object({
                required: {
                    messages: r(969475).array(r(969475).object({
                        required: {
                            messageId: r(969475).string(),
                            text: r(969475).string(),
                            timestamp: r(969475).number(),
                            user: r(969475).object({
                                required: {
                                    name: r(969475).string()
                                },
                                optional: {
                                    notionUserId: r(969475).string(),
                                    notionUserName: r(969475).string()
                                },
                                exact: !0
                            })
                        },
                        optional: {
                            attachments: r(969475).array(r(969475).object({
                                required: {
                                    filename: r(969475).string(),
                                    inline: r(969475).boolean(),
                                    mimeType: r(969475).string(),
                                    sizeBytes: r(969475).number()
                                },
                                optional: {
                                    attachmentId: r(969475).string()
                                },
                                exact: !0
                            })),
                            subject: r(969475).string()
                        },
                        exact: !0
                    })),
                    subject: r(969475).string(),
                    threadId: r(969475).string(),
                    timestamp: r(969475).number(),
                    type: r(969475).literal("gmail")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    maxResults: r(969475).number(),
                    q: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    threads: r(969475).array(r(969475).object({
                        required: {
                            messages: r(969475).array(r(969475).object({
                                required: {
                                    messageId: r(969475).string(),
                                    text: r(969475).string(),
                                    timestamp: r(969475).number(),
                                    user: r(969475).object({
                                        required: {
                                            name: r(969475).string()
                                        },
                                        optional: {
                                            notionUserId: r(969475).string(),
                                            notionUserName: r(969475).string()
                                        },
                                        exact: !0
                                    })
                                },
                                optional: {
                                    attachments: r(969475).array(r(969475).object({
                                        required: {
                                            filename: r(969475).string(),
                                            inline: r(969475).boolean(),
                                            mimeType: r(969475).string(),
                                            sizeBytes: r(969475).number()
                                        },
                                        optional: {
                                            attachmentId: r(969475).string()
                                        },
                                        exact: !0
                                    })),
                                    subject: r(969475).string()
                                },
                                exact: !0
                            })),
                            subject: r(969475).string(),
                            threadId: r(969475).string(),
                            timestamp: r(969475).number(),
                            type: r(969475).literal("gmail")
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            });
            let e8 = `
type GmailPersistedState = {}

type GmailSearchInput = {
	query: string
}

type GmailSearchResult = {
	results: Array<GmailSearchResultItem>
}

type GmailLoadThreadInput =
	| {
			threadId: string
			url?: never
	  }
	| {
			threadId?: never
			url: string
	  }

type GmailLoadThreadResult = LoadGmailResponse

type GmailQueryInput = {
	q?: string
	maxResults?: number
}

type GmailQueryResult = {
	threads: Array<LoadGmailResponse>
}`,
                e1 = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                e2 = r(969475).object({
                    required: {
                        query: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                e3 = r(969475).union([r(969475).object({
                    required: {
                        threadId: r(969475).string()
                    },
                    optional: {
                        url: r(969475).isUndefined()
                    },
                    exact: !0
                }), r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {
                        threadId: r(969475).isUndefined()
                    },
                    exact: !0
                })]),
                te = r(969475).object({
                    required: {},
                    optional: {
                        maxResults: r(969475).number(),
                        q: r(969475).string()
                    },
                    exact: !0
                });
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("googleCalendar"),
                    type: r(969475).literal("googleCalendar")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    query: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            emailAddress: r(969475).string(),
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    maxResults: r(969475).number(),
                    q: r(969475).string(),
                    timeMax: r(969475).string(),
                    timeMin: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    events: r(969475).array(r(969475).object({
                        required: {
                            id: r(969475).string(),
                            isRecurring: r(969475).boolean(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {
                            attendees: r(969475).array(r(969475).object({
                                required: {},
                                optional: {
                                    email: r(969475).string(),
                                    name: r(969475).string(),
                                    responseStatus: r(969475).literals("accepted", "declined", "noResponse", "tentative", "unknown")
                                },
                                exact: !0
                            })),
                            end: r(969475).string(),
                            location: r(969475).string(),
                            start: r(969475).string(),
                            url: r(969475).string()
                        },
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            });
            let tt = `
type GoogleCalendarPersistedState = {}

type GoogleCalendarSearchInput = {
	query: string
}

type GoogleCalendarSearchResult = {
	results: Array<GoogleCalendarSearchResultItem>
}

type GoogleCalendarQueryInput = {
	q?: string
	timeMin?: string
	timeMax?: string
	maxResults?: number
}

type GoogleCalendarQueryResult = {
	events: Array<GoogleCalendarQueryEvent>
}`,
                tr = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                ta = r(969475).object({
                    required: {
                        query: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                ti = r(969475).object({
                    required: {},
                    optional: {
                        maxResults: r(969475).number(),
                        q: r(969475).string(),
                        timeMax: r(969475).string(),
                        timeMin: r(969475).string()
                    },
                    exact: !0
                });
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("googleDrive"),
                    type: r(969475).literal("googleDrive")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string(),
                    sharedDriveIds: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            fileType: r(969475).string(),
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    fileId: r(969475).string()
                },
                optional: {
                    includeComments: r(969475).boolean(),
                    sharedDriveIds: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).union([r(969475).object({
                required: {},
                optional: {
                    ___effectResult: r(969475).literal(!0),
                    attachments: r(969475).array(r(969475).union([r(969475).object({
                        required: {
                            contentType: r(969475).literal("text/csv"),
                            fileName: r(969475).string(),
                            fileUrl: r(969475).string(),
                            id: r(969475).string(),
                            type: r(969475).literal("attachment")
                        },
                        optional: {
                            error: r(969475).string(),
                            metadata: r(969475).object({
                                required: {
                                    guardrail: r(969475).object({
                                        required: {
                                            attachmentRisk: r(969475).literals("confirmed_safe_by_user", "failed", "risky", "scanned", "skipped")
                                        },
                                        optional: {
                                            inferenceId: r(969475).string()
                                        },
                                        exact: !0
                                    })
                                },
                                optional: {
                                    aiTraceId: r(969475).string(),
                                    attachmentSource: r(969475).literals("ai_generated", "browser_tool", "computer_download", "mail-read-attachment", "page_block", "unknown", "user_upload"),
                                    estimatedTokens: r(969475).object({
                                        required: {
                                            anthropic: r(969475).number(),
                                            openai: r(969475).number()
                                        },
                                        optional: {},
                                        exact: !0
                                    }),
                                    fileSizeBytes: r(969475).number(),
                                    numFields: r(969475).number(),
                                    numRows: r(969475).number(),
                                    numRowsRead: r(969475).number(),
                                    truncatedContent: r(969475).string(),
                                    wasTruncated: r(969475).boolean()
                                },
                                exact: !0
                            }),
                            permissionRecord: r(969475).union([(0, r(994818).uV)("activity", "ai_embedding_config", "assistant_chat_session", "assistant_chat_step", "assistant_session_starter", "automation", "automation_action", "block_property_value", "bot_extended_metadata", "channel", "collection_property_schema", "comment", "custom_emoji", "discussion", "edge", "external_authentication_token", "external_connection", "external_object", "factory", "file_upload", "follow", "form_question", "form_response_snapshot", "free_chart", "inference_transcript", "integration_management_permissions", "invite", "layout", "legal_hold_page", "legal_hold_page_actor", "notification", "page_exit", "page_visit", "prompt", "prompt_usage", "record_counter", "record_key", "record_mention", "referral", "related_content", "schedule_for_event", "scheduled_digest_message", "server_integrations__jira_webhook", "sidebar_section", "sidebar_section_item", "site", "snapshot", "space_billing_data", "space_billing_invoices", "space_billing_subscription", "space_bot", "space_entitlement_usage", "space_permission_group", "space_permission_group_member", "space_user", "space_user_entitlement_usage", "space_user_recovery", "subscription_banner", "sync", "sync_credential", "sync_upstream_resource", "text_slice_block_mapping", "thread", "thread_message", "trusted_domain", "upgrade_request", "user_seen_record", "webhook_subscription", "workflow", "workflow_artifact", "workflow_automation_run", "workflow_external_scoped_connection", "workflow_module", "workflow_property_edit_attribution", "workflow_transcript", "workspace_encryption_key"), (0, r(994818).VR)("access_request", "admin_api_log", "admin_api_op_log", "ai_connector_connection", "ai_connector_user_connection", "ai_waitlist", "apple_token", "asana_token", "billing_contract", "billing_contract_space", "billing_data", "billing_data_history_entry", "billing_subscription", "block", "block_token", "bot", "bot_token", "collection", "collection_view", "confluence_token", "contact_sales", "cookie_consent", "credit", "customer", "device", "domain_verification_code", "drive_token", "education_domain", "education_email", "email_domain", "evernote_token", "experiment", "external_authentication", "external_entity", "external_integration_app", "external_integration_authorization", "external_token", "external_user_profile", "firebase_token", "geo_ip_location", "geo_ip_network", "github_student_pack_redemption", "global_oauth_client", "google_token", "integration", "integration_listing", "integration_token", "integration_webhook_subscription", "internal_domain", "invoice", "ip_restriction", "legal_hold", "legal_hold_export", "legal_hold_user", "marketplace_acquisition", "marketplace_badge", "marketplace_badge_assignment", "marketplace_coupon", "marketplace_creator_balance_transaction", "marketplace_creator_stripe_balance_log", "marketplace_custom_agent", "marketplace_custom_agent_version", "marketplace_customer", "marketplace_installation", "marketplace_listing", "marketplace_listing_review", "marketplace_payout", "marketplace_payout_remainder", "marketplace_profile", "marketplace_profile_content", "marketplace_profile_invitation", "marketplace_profile_member", "marketplace_refund", "marketplace_seller", "marketplace_service", "marketplace_service_request", "mcp_registry_entry", "mfa_settings", "microsoft_oauth", "monday_token", "notion_user", "oauth_authorization_code", "offer_code", "offer_status", "organization", "organization_bot", "organization_bot_token", "organization_request", "organization_space", "passkey_authenticator", "password", "plus_lock_waitlist", "public_domain", "public_email_domain", "reaction", "saml_config", "server_integrations__discord_user_mapping", "server_integrations__github_installation", "server_integrations__slack_bot_token", "server_integrations__slack_channel", "server_integrations__slack_enterprise", "server_integrations__slack_notion_token", "server_integrations__slack_unique_global_user", "server_integrations__slack_unique_local_user", "server_integrations__slack_workspace", "server_integrations__zendesk_token", "signup_tracking", "slack_integration", "slack_notification", "space", "space_content_duplication_lookup", "space_domain", "space_email_domain", "space_invite_link", "space_membership_update", "space_recover_pages", "space_view", "subscription", "synthetic_trial", "team", "template", "template_collection", "template_content_group", "template_creator", "template_draft", "template_tag", "temporary_password", "token", "trello_token", "used_credit", "user_alias", "user_data_consent_permissions", "user_device", "user_export", "user_metadata", "user_oauth_access_token", "user_oauth_authorization_code", "user_root", "user_session_auth_token", "user_settings", "workflow_external_connection", "workflow_external_connection_secret", "workflow_subscription")]),
                            queued: r(969475).boolean(),
                            value: r(969475).string()
                        },
                        exact: !0
                    }), r(969475).object({
                        required: {
                            contentType: r(969475).literals("image/gif", "image/heic", "image/jpeg", "image/png", "image/webp"),
                            fileName: r(969475).string(),
                            fileUrl: r(969475).string(),
                            id: r(969475).string(),
                            type: r(969475).literal("attachment")
                        },
                        optional: {
                            error: r(969475).string(),
                            metadata: r(969475).object({
                                required: {
                                    guardrail: r(969475).object({
                                        required: {
                                            attachmentRisk: r(969475).literals("confirmed_safe_by_user", "failed", "risky", "scanned", "skipped")
                                        },
                                        optional: {
                                            inferenceId: r(969475).string()
                                        },
                                        exact: !0
                                    })
                                },
                                optional: {
                                    aiTraceId: r(969475).string(),
                                    attachmentSource: r(969475).literals("ai_generated", "browser_tool", "computer_download", "mail-read-attachment", "page_block", "unknown", "user_upload"),
                                    estimatedTokens: r(969475).object({
                                        required: {
                                            anthropic: r(969475).number(),
                                            openai: r(969475).number()
                                        },
                                        optional: {},
                                        exact: !0
                                    }),
                                    fileSizeBytes: r(969475).number(),
                                    height: r(969475).number(),
                                    moderation: r(969475).union([r(969475).object({
                                        required: {
                                            status: r(969475).literal("failed")
                                        },
                                        optional: {},
                                        exact: !0
                                    }), r(969475).object({
                                        required: {
                                            status: r(969475).literal("flagged")
                                        },
                                        optional: {
                                            scores: r(969475).object({
                                                required: {
                                                    hate: r(969475).number(),
                                                    "hate/threatening": r(969475).number(),
                                                    "self-harm": r(969475).number(),
                                                    sexual: r(969475).number(),
                                                    "sexual/minors": r(969475).number(),
                                                    "violence/graphic": r(969475).number()
                                                },
                                                optional: {},
                                                exact: !0
                                            })
                                        },
                                        exact: !0
                                    }), r(969475).object({
                                        required: {
                                            status: r(969475).literal("passed")
                                        },
                                        optional: {},
                                        exact: !0
                                    }), r(969475).object({
                                        required: {
                                            status: r(969475).literal("skipped")
                                        },
                                        optional: {},
                                        exact: !0
                                    })]),
                                    truncatedContent: r(969475).string(),
                                    wasTruncated: r(969475).boolean(),
                                    width: r(969475).number()
                                },
                                exact: !0
                            }),
                            permissionRecord: r(969475).union([(0, r(994818).uV)("activity", "ai_embedding_config", "assistant_chat_session", "assistant_chat_step", "assistant_session_starter", "automation", "automation_action", "block_property_value", "bot_extended_metadata", "channel", "collection_property_schema", "comment", "custom_emoji", "discussion", "edge", "external_authentication_token", "external_connection", "external_object", "factory", "file_upload", "follow", "form_question", "form_response_snapshot", "free_chart", "inference_transcript", "integration_management_permissions", "invite", "layout", "legal_hold_page", "legal_hold_page_actor", "notification", "page_exit", "page_visit", "prompt", "prompt_usage", "record_counter", "record_key", "record_mention", "referral", "related_content", "schedule_for_event", "scheduled_digest_message", "server_integrations__jira_webhook", "sidebar_section", "sidebar_section_item", "site", "snapshot", "space_billing_data", "space_billing_invoices", "space_billing_subscription", "space_bot", "space_entitlement_usage", "space_permission_group", "space_permission_group_member", "space_user", "space_user_entitlement_usage", "space_user_recovery", "subscription_banner", "sync", "sync_credential", "sync_upstream_resource", "text_slice_block_mapping", "thread", "thread_message", "trusted_domain", "upgrade_request", "user_seen_record", "webhook_subscription", "workflow", "workflow_artifact", "workflow_automation_run", "workflow_external_scoped_connection", "workflow_module", "workflow_property_edit_attribution", "workflow_transcript", "workspace_encryption_key"), (0, r(994818).VR)("access_request", "admin_api_log", "admin_api_op_log", "ai_connector_connection", "ai_connector_user_connection", "ai_waitlist", "apple_token", "asana_token", "billing_contract", "billing_contract_space", "billing_data", "billing_data_history_entry", "billing_subscription", "block", "block_token", "bot", "bot_token", "collection", "collection_view", "confluence_token", "contact_sales", "cookie_consent", "credit", "customer", "device", "domain_verification_code", "drive_token", "education_domain", "education_email", "email_domain", "evernote_token", "experiment", "external_authentication", "external_entity", "external_integration_app", "external_integration_authorization", "external_token", "external_user_profile", "firebase_token", "geo_ip_location", "geo_ip_network", "github_student_pack_redemption", "global_oauth_client", "google_token", "integration", "integration_listing", "integration_token", "integration_webhook_subscription", "internal_domain", "invoice", "ip_restriction", "legal_hold", "legal_hold_export", "legal_hold_user", "marketplace_acquisition", "marketplace_badge", "marketplace_badge_assignment", "marketplace_coupon", "marketplace_creator_balance_transaction", "marketplace_creator_stripe_balance_log", "marketplace_custom_agent", "marketplace_custom_agent_version", "marketplace_customer", "marketplace_installation", "marketplace_listing", "marketplace_listing_review", "marketplace_payout", "marketplace_payout_remainder", "marketplace_profile", "marketplace_profile_content", "marketplace_profile_invitation", "marketplace_profile_member", "marketplace_refund", "marketplace_seller", "marketplace_service", "marketplace_service_request", "mcp_registry_entry", "mfa_settings", "microsoft_oauth", "monday_token", "notion_user", "oauth_authorization_code", "offer_code", "offer_status", "organization", "organization_bot", "organization_bot_token", "organization_request", "organization_space", "passkey_authenticator", "password", "plus_lock_waitlist", "public_domain", "public_email_domain", "reaction", "saml_config", "server_integrations__discord_user_mapping", "server_integrations__github_installation", "server_integrations__slack_bot_token", "server_integrations__slack_channel", "server_integrations__slack_enterprise", "server_integrations__slack_notion_token", "server_integrations__slack_unique_global_user", "server_integrations__slack_unique_local_user", "server_integrations__slack_workspace", "server_integrations__zendesk_token", "signup_tracking", "slack_integration", "slack_notification", "space", "space_content_duplication_lookup", "space_domain", "space_email_domain", "space_invite_link", "space_membership_update", "space_recover_pages", "space_view", "subscription", "synthetic_trial", "team", "template", "template_collection", "template_content_group", "template_creator", "template_draft", "template_tag", "temporary_password", "token", "trello_token", "used_credit", "user_alias", "user_data_consent_permissions", "user_device", "user_export", "user_metadata", "user_oauth_access_token", "user_oauth_authorization_code", "user_root", "user_session_auth_token", "user_settings", "workflow_external_connection", "workflow_external_connection_secret", "workflow_subscription")]),
                            queued: r(969475).boolean(),
                            value: r(969475).string()
                        },
                        exact: !0
                    }), r(969475).object({
                        required: {
                            base64EncodedFileUrl: r(969475).string(),
                            contentType: r(969475).literal("application/pdf"),
                            fileName: r(969475).string(),
                            fileUrl: r(969475).string(),
                            id: r(969475).string(),
                            type: r(969475).literal("attachment")
                        },
                        optional: {
                            error: r(969475).string(),
                            metadata: r(969475).object({
                                required: {
                                    guardrail: r(969475).object({
                                        required: {
                                            attachmentRisk: r(969475).literals("confirmed_safe_by_user", "failed", "risky", "scanned", "skipped")
                                        },
                                        optional: {
                                            inferenceId: r(969475).string()
                                        },
                                        exact: !0
                                    })
                                },
                                optional: {
                                    aiTraceId: r(969475).string(),
                                    attachmentSource: r(969475).literals("ai_generated", "browser_tool", "computer_download", "mail-read-attachment", "page_block", "unknown", "user_upload"),
                                    estimatedTokens: r(969475).object({
                                        required: {
                                            anthropic: r(969475).number(),
                                            openai: r(969475).number()
                                        },
                                        optional: {},
                                        exact: !0
                                    }),
                                    fileSizeBytes: r(969475).number(),
                                    numPages: r(969475).number(),
                                    truncatedContent: r(969475).string(),
                                    wasTruncated: r(969475).boolean()
                                },
                                exact: !0
                            }),
                            permissionRecord: r(969475).union([(0, r(994818).uV)("activity", "ai_embedding_config", "assistant_chat_session", "assistant_chat_step", "assistant_session_starter", "automation", "automation_action", "block_property_value", "bot_extended_metadata", "channel", "collection_property_schema", "comment", "custom_emoji", "discussion", "edge", "external_authentication_token", "external_connection", "external_object", "factory", "file_upload", "follow", "form_question", "form_response_snapshot", "free_chart", "inference_transcript", "integration_management_permissions", "invite", "layout", "legal_hold_page", "legal_hold_page_actor", "notification", "page_exit", "page_visit", "prompt", "prompt_usage", "record_counter", "record_key", "record_mention", "referral", "related_content", "schedule_for_event", "scheduled_digest_message", "server_integrations__jira_webhook", "sidebar_section", "sidebar_section_item", "site", "snapshot", "space_billing_data", "space_billing_invoices", "space_billing_subscription", "space_bot", "space_entitlement_usage", "space_permission_group", "space_permission_group_member", "space_user", "space_user_entitlement_usage", "space_user_recovery", "subscription_banner", "sync", "sync_credential", "sync_upstream_resource", "text_slice_block_mapping", "thread", "thread_message", "trusted_domain", "upgrade_request", "user_seen_record", "webhook_subscription", "workflow", "workflow_artifact", "workflow_automation_run", "workflow_external_scoped_connection", "workflow_module", "workflow_property_edit_attribution", "workflow_transcript", "workspace_encryption_key"), (0, r(994818).VR)("access_request", "admin_api_log", "admin_api_op_log", "ai_connector_connection", "ai_connector_user_connection", "ai_waitlist", "apple_token", "asana_token", "billing_contract", "billing_contract_space", "billing_data", "billing_data_history_entry", "billing_subscription", "block", "block_token", "bot", "bot_token", "collection", "collection_view", "confluence_token", "contact_sales", "cookie_consent", "credit", "customer", "device", "domain_verification_code", "drive_token", "education_domain", "education_email", "email_domain", "evernote_token", "experiment", "external_authentication", "external_entity", "external_integration_app", "external_integration_authorization", "external_token", "external_user_profile", "firebase_token", "geo_ip_location", "geo_ip_network", "github_student_pack_redemption", "global_oauth_client", "google_token", "integration", "integration_listing", "integration_token", "integration_webhook_subscription", "internal_domain", "invoice", "ip_restriction", "legal_hold", "legal_hold_export", "legal_hold_user", "marketplace_acquisition", "marketplace_badge", "marketplace_badge_assignment", "marketplace_coupon", "marketplace_creator_balance_transaction", "marketplace_creator_stripe_balance_log", "marketplace_custom_agent", "marketplace_custom_agent_version", "marketplace_customer", "marketplace_installation", "marketplace_listing", "marketplace_listing_review", "marketplace_payout", "marketplace_payout_remainder", "marketplace_profile", "marketplace_profile_content", "marketplace_profile_invitation", "marketplace_profile_member", "marketplace_refund", "marketplace_seller", "marketplace_service", "marketplace_service_request", "mcp_registry_entry", "mfa_settings", "microsoft_oauth", "monday_token", "notion_user", "oauth_authorization_code", "offer_code", "offer_status", "organization", "organization_bot", "organization_bot_token", "organization_request", "organization_space", "passkey_authenticator", "password", "plus_lock_waitlist", "public_domain", "public_email_domain", "reaction", "saml_config", "server_integrations__discord_user_mapping", "server_integrations__github_installation", "server_integrations__slack_bot_token", "server_integrations__slack_channel", "server_integrations__slack_enterprise", "server_integrations__slack_notion_token", "server_integrations__slack_unique_global_user", "server_integrations__slack_unique_local_user", "server_integrations__slack_workspace", "server_integrations__zendesk_token", "signup_tracking", "slack_integration", "slack_notification", "space", "space_content_duplication_lookup", "space_domain", "space_email_domain", "space_invite_link", "space_membership_update", "space_recover_pages", "space_view", "subscription", "synthetic_trial", "team", "template", "template_collection", "template_content_group", "template_creator", "template_draft", "template_tag", "temporary_password", "token", "trello_token", "used_credit", "user_alias", "user_data_consent_permissions", "user_device", "user_export", "user_metadata", "user_oauth_access_token", "user_oauth_authorization_code", "user_root", "user_session_auth_token", "user_settings", "workflow_external_connection", "workflow_external_connection_secret", "workflow_subscription")]),
                            queued: r(969475).boolean(),
                            value: r(969475).string()
                        },
                        exact: !0
                    }), r(969475).object({
                        required: {
                            contentType: r(969475).literals("application/javascript", "application/json", "application/typescript", "text/css", "text/html", "text/markdown", "text/plain", "text/x-c", "text/x-c++src", "text/x-go", "text/x-java-source", "text/x-python", "text/x-ruby", "text/x-rust", "text/x-shellscript", "text/xml", "text/yaml"),
                            fileName: r(969475).string(),
                            fileUrl: r(969475).string(),
                            id: r(969475).string(),
                            type: r(969475).literal("attachment")
                        },
                        optional: {
                            error: r(969475).string(),
                            metadata: r(969475).object({
                                required: {
                                    guardrail: r(969475).object({
                                        required: {
                                            attachmentRisk: r(969475).literals("confirmed_safe_by_user", "failed", "risky", "scanned", "skipped")
                                        },
                                        optional: {
                                            inferenceId: r(969475).string()
                                        },
                                        exact: !0
                                    })
                                },
                                optional: {
                                    aiTraceId: r(969475).string(),
                                    attachmentSource: r(969475).literals("ai_generated", "browser_tool", "computer_download", "mail-read-attachment", "page_block", "unknown", "user_upload"),
                                    estimatedTokens: r(969475).object({
                                        required: {
                                            anthropic: r(969475).number(),
                                            openai: r(969475).number()
                                        },
                                        optional: {},
                                        exact: !0
                                    }),
                                    fileSizeBytes: r(969475).number(),
                                    numLines: r(969475).number(),
                                    numLinesRead: r(969475).number(),
                                    truncatedContent: r(969475).string(),
                                    wasTruncated: r(969475).boolean()
                                },
                                exact: !0
                            }),
                            permissionRecord: r(969475).union([(0, r(994818).uV)("activity", "ai_embedding_config", "assistant_chat_session", "assistant_chat_step", "assistant_session_starter", "automation", "automation_action", "block_property_value", "bot_extended_metadata", "channel", "collection_property_schema", "comment", "custom_emoji", "discussion", "edge", "external_authentication_token", "external_connection", "external_object", "factory", "file_upload", "follow", "form_question", "form_response_snapshot", "free_chart", "inference_transcript", "integration_management_permissions", "invite", "layout", "legal_hold_page", "legal_hold_page_actor", "notification", "page_exit", "page_visit", "prompt", "prompt_usage", "record_counter", "record_key", "record_mention", "referral", "related_content", "schedule_for_event", "scheduled_digest_message", "server_integrations__jira_webhook", "sidebar_section", "sidebar_section_item", "site", "snapshot", "space_billing_data", "space_billing_invoices", "space_billing_subscription", "space_bot", "space_entitlement_usage", "space_permission_group", "space_permission_group_member", "space_user", "space_user_entitlement_usage", "space_user_recovery", "subscription_banner", "sync", "sync_credential", "sync_upstream_resource", "text_slice_block_mapping", "thread", "thread_message", "trusted_domain", "upgrade_request", "user_seen_record", "webhook_subscription", "workflow", "workflow_artifact", "workflow_automation_run", "workflow_external_scoped_connection", "workflow_module", "workflow_property_edit_attribution", "workflow_transcript", "workspace_encryption_key"), (0, r(994818).VR)("access_request", "admin_api_log", "admin_api_op_log", "ai_connector_connection", "ai_connector_user_connection", "ai_waitlist", "apple_token", "asana_token", "billing_contract", "billing_contract_space", "billing_data", "billing_data_history_entry", "billing_subscription", "block", "block_token", "bot", "bot_token", "collection", "collection_view", "confluence_token", "contact_sales", "cookie_consent", "credit", "customer", "device", "domain_verification_code", "drive_token", "education_domain", "education_email", "email_domain", "evernote_token", "experiment", "external_authentication", "external_entity", "external_integration_app", "external_integration_authorization", "external_token", "external_user_profile", "firebase_token", "geo_ip_location", "geo_ip_network", "github_student_pack_redemption", "global_oauth_client", "google_token", "integration", "integration_listing", "integration_token", "integration_webhook_subscription", "internal_domain", "invoice", "ip_restriction", "legal_hold", "legal_hold_export", "legal_hold_user", "marketplace_acquisition", "marketplace_badge", "marketplace_badge_assignment", "marketplace_coupon", "marketplace_creator_balance_transaction", "marketplace_creator_stripe_balance_log", "marketplace_custom_agent", "marketplace_custom_agent_version", "marketplace_customer", "marketplace_installation", "marketplace_listing", "marketplace_listing_review", "marketplace_payout", "marketplace_payout_remainder", "marketplace_profile", "marketplace_profile_content", "marketplace_profile_invitation", "marketplace_profile_member", "marketplace_refund", "marketplace_seller", "marketplace_service", "marketplace_service_request", "mcp_registry_entry", "mfa_settings", "microsoft_oauth", "monday_token", "notion_user", "oauth_authorization_code", "offer_code", "offer_status", "organization", "organization_bot", "organization_bot_token", "organization_request", "organization_space", "passkey_authenticator", "password", "plus_lock_waitlist", "public_domain", "public_email_domain", "reaction", "saml_config", "server_integrations__discord_user_mapping", "server_integrations__github_installation", "server_integrations__slack_bot_token", "server_integrations__slack_channel", "server_integrations__slack_enterprise", "server_integrations__slack_notion_token", "server_integrations__slack_unique_global_user", "server_integrations__slack_unique_local_user", "server_integrations__slack_workspace", "server_integrations__zendesk_token", "signup_tracking", "slack_integration", "slack_notification", "space", "space_content_duplication_lookup", "space_domain", "space_email_domain", "space_invite_link", "space_membership_update", "space_recover_pages", "space_view", "subscription", "synthetic_trial", "team", "template", "template_collection", "template_content_group", "template_creator", "template_draft", "template_tag", "temporary_password", "token", "trello_token", "used_credit", "user_alias", "user_data_consent_permissions", "user_device", "user_export", "user_metadata", "user_oauth_access_token", "user_oauth_authorization_code", "user_root", "user_session_auth_token", "user_settings", "workflow_external_connection", "workflow_external_connection_secret", "workflow_subscription")]),
                            queued: r(969475).boolean(),
                            value: r(969475).string()
                        },
                        exact: !0
                    })])),
                    computerFileSteps: r(969475).array(r(969475).object({
                        required: {
                            contentType: r(969475).string(),
                            fileName: r(969475).string(),
                            fileUrl: r(969475).string(),
                            id: r(969475).string(),
                            type: r(969475).literal("computer-file")
                        },
                        optional: {
                            error: r(969475).string(),
                            metadata: r(969475).object({
                                required: {
                                    fileSize: r(969475).number()
                                },
                                optional: {
                                    attachmentSource: r(969475).literals("ai_generated", "browser_tool", "computer_download", "mail-read-attachment", "page_block", "unknown", "user_upload")
                                },
                                exact: !0
                            }),
                            queued: r(969475).boolean(),
                            value: r(969475).string()
                        },
                        exact: !0
                    })),
                    result: r(969475).object({
                        required: {
                            blocks: r(969475).array(r(969475).string()),
                            fileId: r(969475).string(),
                            fileType: r(969475).string(),
                            timestamp: r(969475).number(),
                            title: r(969475).string(),
                            type: r(969475).literal("googleDrive")
                        },
                        optional: {
                            comments: r(969475).array(r(969475).object({
                                required: {
                                    author: r(969475).string(),
                                    bodyText: r(969475).string(),
                                    lastEdited: r(969475).string()
                                },
                                optional: {},
                                exact: !0
                            }))
                        },
                        exact: !0
                    })
                },
                exact: !0
            }), r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    fileId: r(969475).string(),
                    fileType: r(969475).string(),
                    timestamp: r(969475).number(),
                    title: r(969475).string(),
                    type: r(969475).literal("googleDrive")
                },
                optional: {
                    comments: r(969475).array(r(969475).object({
                        required: {
                            author: r(969475).string(),
                            bodyText: r(969475).string(),
                            lastEdited: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                exact: !0
            })]), r(969475).object({
                required: {
                    folderId: r(969475).string()
                },
                optional: {
                    sharedDriveIds: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).array(r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    fileId: r(969475).string(),
                    fileType: r(969475).string(),
                    timestamp: r(969475).number(),
                    title: r(969475).string(),
                    type: r(969475).literal("googleDrive")
                },
                optional: {
                    comments: r(969475).array(r(969475).object({
                        required: {
                            author: r(969475).string(),
                            bodyText: r(969475).string(),
                            lastEdited: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                exact: !0
            })), r(969475).object({
                required: {
                    fileId: r(969475).string()
                },
                optional: {
                    sharedDriveIds: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).array(r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    fileType: r(969475).string(),
                    path: r(969475).string(),
                    timestamp: r(969475).number(),
                    title: r(969475).string()
                },
                optional: {},
                exact: !0
            })), r(969475).object({
                required: {
                    query: r(969475).string()
                },
                optional: {
                    maxResults: r(969475).number(),
                    sharedDriveIds: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).array(r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    fileId: r(969475).string(),
                    fileType: r(969475).string(),
                    timestamp: r(969475).number(),
                    title: r(969475).string(),
                    type: r(969475).literal("googleDrive")
                },
                optional: {
                    comments: r(969475).array(r(969475).object({
                        required: {
                            author: r(969475).string(),
                            bodyText: r(969475).string(),
                            lastEdited: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                exact: !0
            })), r(969475).object({
                required: {
                    fileId: r(969475).string()
                },
                optional: {
                    sharedDriveIds: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).array(r(969475).object({
                required: {
                    author: r(969475).string(),
                    bodyText: r(969475).string(),
                    lastEdited: r(969475).string()
                },
                optional: {},
                exact: !0
            }));
            let to = `
type GoogleDrivePersistedState = {}

type GoogleDriveSearchInput = {
	question: string
	keywords?: string
	lookback?: string
	sharedDriveIds?: string[]
}

type GoogleDriveSearchResult = {
	results: Array<GoogleDriveSearchResultItem>
}

type GoogleDriveLoadFileInput = {
	fileId: string
	sharedDriveIds?: string[]
	includeComments?: boolean
}

type GoogleDriveLoadFileResult =
	EffectResultOrValue<LoadGoogleDriveResponse>

type GoogleDriveLsFolderInput = {
	folderId: string
	sharedDriveIds?: string[]
}

type GoogleDriveLsFolderResult = Array<LoadGoogleDriveResponse>

type GoogleDriveLoadZipFileInput = {
	fileId: string
	sharedDriveIds?: string[]
}

type GoogleDriveLoadZipFileResult = Array<GoogleDriveZipEntry>

type GoogleDriveGrepFilesInput = {
	query: string
	maxResults?: number
	sharedDriveIds?: string[]
}

type GoogleDriveGrepFilesResult = Array<LoadGoogleDriveResponse>

type GoogleDriveGetFileCommentsInput = {
	fileId: string
	sharedDriveIds?: string[]
}

type GoogleDriveGetFileCommentsResult = Array<GoogleDriveFileComment>`,
                tn = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                tl = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string(),
                        sharedDriveIds: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                ts = r(969475).object({
                    required: {
                        fileId: r(969475).string()
                    },
                    optional: {
                        includeComments: r(969475).boolean(),
                        sharedDriveIds: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                tc = r(969475).object({
                    required: {
                        folderId: r(969475).string()
                    },
                    optional: {
                        sharedDriveIds: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                tu = r(969475).object({
                    required: {
                        fileId: r(969475).string()
                    },
                    optional: {
                        sharedDriveIds: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                td = r(969475).object({
                    required: {
                        query: r(969475).string()
                    },
                    optional: {
                        maxResults: r(969475).number(),
                        sharedDriveIds: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                tp = r(969475).object({
                    required: {
                        fileId: r(969475).string()
                    },
                    optional: {
                        sharedDriveIds: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                tg = {
                    "googleDrive.search": "search(args: GoogleDriveSearchInput): Promise<GoogleDriveSearchResult>",
                    "googleDrive.loadFile": "loadFile(args: GoogleDriveLoadFileInput): Promise<GoogleDriveLoadFileResult>",
                    "googleDrive.lsFolder": "lsFolder(args: GoogleDriveLsFolderInput): Promise<GoogleDriveLsFolderResult>",
                    "googleDrive.loadZipFile": `
loadZipFile(
		args: GoogleDriveLoadZipFileInput,
	): Promise<GoogleDriveLoadZipFileResult>`,
                    "googleDrive.grepFiles": `
grepFiles(
		args: GoogleDriveGrepFilesInput,
	): Promise<GoogleDriveGrepFilesResult>`,
                    "googleDrive.getFileComments": `
getFileComments(
		args: GoogleDriveGetFileCommentsInput,
	): Promise<GoogleDriveGetFileCommentsResult>`
                };
            r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).union([r(969475).array(r(969475).string()), r(969475).string()])
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            id: r(969475).string(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            });
            let tm = `
type HelpdocsPersistedState = Record<never, never>

type HelpdocsSearchInput = {
	question: string
	keywords?: string | Array<string>
}

type HelpdocsSearchResult = {
	results: Array<HelpdocsSearchResultItem>
}`,
                tb = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                ty = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).union([r(969475).array(r(969475).string()), r(969475).string()])
                    },
                    exact: !0
                });
            r(969475).object({
                required: {
                    prompt: r(969475).string()
                },
                optional: {
                    imageFilenames: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).object({
                required: {
                    fileName: r(969475).string(),
                    fileSizeBytes: r(969475).number(),
                    fileUri: r(969475).string(),
                    height: r(969475).number(),
                    imageUrlAlias: r(969475).string(),
                    mimeType: r(969475).string(),
                    model: r(969475).string(),
                    prompt: r(969475).string(),
                    provider: r(969475).string(),
                    width: r(969475).number()
                },
                optional: {},
                exact: !0
            });
            let t_ = `
type ImagesGenerateInput = {
	prompt: string
	imageFilenames?: string[]
}

type GeneratedImage = {
	prompt: string
	imageUrlAlias: string
	fileUri: string
	mimeType: string
	fileName: string
	fileSizeBytes: number
	model: string
	provider: string
	height: number
	width: number
}`,
                th = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                tf = r(969475).object({
                    required: {
                        prompt: r(969475).string()
                    },
                    optional: {
                        imageFilenames: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                tx = {
                    "images.generate": `
(
				args: ImagesGenerateInput,
			) => Promise<EffectResultOrValue<GeneratedImage>>`
                };
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("jira"),
                    type: r(969475).literal("jira")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).union([r(969475).object({
                required: {
                    issueId: r(969475).string()
                },
                optional: {
                    issueKey: r(969475).isUndefined()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    issueKey: r(969475).string()
                },
                optional: {
                    issueId: r(969475).isUndefined()
                },
                exact: !0
            })]), r(969475).object({
                required: {
                    text: r(969475).string(),
                    title: r(969475).string(),
                    type: r(969475).literal("jira-issue")
                },
                optional: {},
                exact: !0
            });
            let tq = `
type JiraPersistedState = {}

type JiraSearchInput = {
	question: string
	keywords?: string
	lookback?: string
}

type JiraSearchResult = {
	results: Array<JiraSearchResultItem>
}

type JiraLoadIssueInput =
	| {
			issueKey: string
			issueId?: never
	  }
	| {
			issueKey?: never
			issueId: string
	  }

type JiraLoadIssueResult = LoadJiraResponse`,
                tj = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                tv = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string()
                    },
                    exact: !0
                }),
                tk = r(969475).union([r(969475).object({
                    required: {
                        issueId: r(969475).string()
                    },
                    optional: {
                        issueKey: r(969475).isUndefined()
                    },
                    exact: !0
                }), r(969475).object({
                    required: {
                        issueKey: r(969475).string()
                    },
                    optional: {
                        issueId: r(969475).isUndefined()
                    },
                    exact: !0
                })]);
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("linear"),
                    type: r(969475).literal("linear")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {
                            name: r(969475).string()
                        },
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).union([r(969475).object({
                required: {
                    issueId: r(969475).string()
                },
                optional: {
                    issueNumber: r(969475).isUndefined(),
                    teamId: r(969475).isUndefined()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    issueNumber: r(969475).string()
                },
                optional: {
                    issueId: r(969475).isUndefined(),
                    teamId: r(969475).string()
                },
                exact: !0
            })]), r(969475).object({
                required: {
                    text: r(969475).string(),
                    title: r(969475).string(),
                    type: r(969475).literal("linear-issue")
                },
                optional: {},
                exact: !0
            });
            let tw = `
type LinearPersistedState = {}

type LinearSearchInput = {
	question: string
	keywords?: string
	lookback?: string
}

type LinearSearchResult = {
	results: Array<LinearSearchResultItem>
}

type LinearLoadIssueInput =
	| {
			issueId: string
			issueNumber?: never
			teamId?: never
	  }
	| {
			issueId?: never
			issueNumber: string
			teamId?: string
	  }

type LinearLoadIssueResult = LoadLinearResponse`,
                tI = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                tT = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string()
                    },
                    exact: !0
                }),
                tS = r(969475).union([r(969475).object({
                    required: {
                        issueId: r(969475).string()
                    },
                    optional: {
                        issueNumber: r(969475).isUndefined(),
                        teamId: r(969475).isUndefined()
                    },
                    exact: !0
                }), r(969475).object({
                    required: {
                        issueNumber: r(969475).string()
                    },
                    optional: {
                        issueId: r(969475).isUndefined(),
                        teamId: r(969475).string()
                    },
                    exact: !0
                })]);
            r(969475).object({
                required: {},
                optional: {}
            }), r(969475).object({
                required: {
                    templateBlockId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    success: r(969475).boolean()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    query: r(969475).string()
                },
                optional: {
                    limit: r(969475).number()
                },
                exact: !0
            });
            let tR = r(969475).object({
                required: {
                    blockId: r(969475).undefinable(r(969475).string()),
                    creatorName: r(969475).undefinable(r(969475).string()),
                    description: r(969475).string(),
                    madeBy: r(969475).literals("community", "notion"),
                    name: r(969475).string(),
                    price: r(969475).undefinable(r(969475).number()),
                    slug: r(969475).string()
                },
                optional: {},
                exact: !0
            });
            r(969475).object({
                required: {
                    query: r(969475).string(),
                    templates: r(969475).array(r(969475).lazy(() => tR)),
                    total: r(969475).number()
                },
                optional: {},
                exact: !0
            });
            let tC = `
type MarketplacePersistedState = Record<string, never>

type InstallMarketplaceTemplateInput = {
	/**
	 * Block ID of the marketplace template root page.
	 */
	templateBlockId: string
}

type InstallMarketplaceTemplateResult = {
	success: boolean
}

type SearchMarketplaceTemplatesInput = {
	query: string
	limit?: number
}

type SearchMarketplaceTemplateItem = {
	name: string
	description: string
	slug: string
	blockId: string | undefined
	price: number | undefined
	madeBy: "community" | "notion"
	creatorName: string | undefined
}

type SearchMarketplaceTemplatesResult = {
	query: string
	templates: SearchMarketplaceTemplateItem[]
	total: number
}`,
                tA = r(969475).object({
                    required: {},
                    optional: {}
                }),
                tP = r(969475).object({
                    required: {
                        templateBlockId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                tM = r(969475).object({
                    required: {
                        query: r(969475).string()
                    },
                    optional: {
                        limit: r(969475).number()
                    },
                    exact: !0
                }),
                tU = {
                    "marketplace.installTemplate": `
(
				args: InstallMarketplaceTemplateInput,
			) => Promise<InstallMarketplaceTemplateResult>`,
                    "marketplace.searchTemplates": `
(
				args: SearchMarketplaceTemplatesInput,
			) => Promise<SearchMarketplaceTemplatesResult>`
                },
                tD = `
/**
 * This is the persisted state for the mcpServer module.
 */
export type McpServerPersistedState = McpServerPersistedStateCommon & {
	// Names of enabled tools. If undefined, all tools are enabled (backward compatibility)
	enabledToolNames?: string[]
	// Cached list of available tools (populated when tools are first fetched)
	tools?: McpServerListTool[]
	// Whether to run read-only tool calls automatically without confirmation. If undefined or true, runs automatically; if false, requires confirmation
	runReadToolsAutomatically?: boolean
	// Whether to run write tool calls automatically without confirmation. If undefined or false, requires confirmation; if true, runs automatically
	runWriteToolsAutomatically?: boolean
	// URIs of enabled resources. If undefined, all resources are enabled (backward compatibility)
	enabledResourceUris?: string[]
	// Cached list of available resources (populated when resources are first fetched)
	resources?: McpServerListResource[]
	// Official name from MCP server's serverInfo (e.g., "Notion", "GitHub MCP")
	// Different from the user-provided module name
	officialName?: string
	// Cached transport type that works for this server (sse or streamableHttp)
	// Used to avoid transport fallback on subsequent connections
	preferredTransport?: McpTransportType
	// Warning state derived from prompt-injection guardrails.
	promptInjectionWarnings?: {
		// Tool names that were flagged in the most recent metadata scan.
		flaggedToolNames: string[]
		lastScannedAtMs: number
	}
}`,
                tL = r(969475).object({
                    required: {},
                    optional: {
                        connectionPointer: (0, r(994818).IK)("external_connection"),
                        enabledResourceUris: r(969475).array(r(969475).string()),
                        enabledToolNames: r(969475).array(r(969475).string()),
                        officialName: r(969475).string(),
                        preferredTransport: r(969475).literals("sse", "streamableHttp"),
                        promptInjectionWarnings: r(969475).object({
                            required: {
                                flaggedToolNames: r(969475).array(r(969475).string()),
                                lastScannedAtMs: r(969475).number()
                            },
                            optional: {},
                            exact: !0
                        }),
                        resources: r(969475).array(r(969475).object({
                            required: {
                                description: r(969475).undefinable(r(969475).string()),
                                mimeType: r(969475).undefinable(r(969475).string()),
                                name: r(969475).string(),
                                title: r(969475).undefinable(r(969475).string()),
                                uri: r(969475).string()
                            },
                            optional: {
                                uriTemplate: r(969475).string()
                            },
                            exact: !0
                        })),
                        runReadToolsAutomatically: r(969475).boolean(),
                        runWriteToolsAutomatically: r(969475).boolean(),
                        serverIconUrl: r(969475).string(),
                        serverUrl: r(969475).string(),
                        tools: r(969475).array(r(969475).object({
                            required: {
                                description: r(969475).string(),
                                inputSchema: r(969475).record(r(969475).string(), r(969475).unknown()),
                                name: r(969475).string(),
                                title: r(969475).string()
                            },
                            optional: {
                                annotations: r(969475).object({
                                    required: {},
                                    optional: {
                                        destructiveHint: r(969475).boolean(),
                                        idempotent: r(969475).boolean(),
                                        openWorld: r(969475).boolean(),
                                        readOnlyHint: r(969475).boolean(),
                                        requiresConfirmation: r(969475).boolean()
                                    },
                                    exact: !0
                                }),
                                outputSchema: r(969475).record(r(969475).string(), r(969475).unknown())
                            },
                            exact: !0
                        }))
                    },
                    exact: !0
                }),
                tN = r(969475).object({
                    required: {
                        toolArguments: r(969475).record(r(969475).string(), r(969475).unknown()),
                        toolName: r(969475).string()
                    },
                    optional: {
                        readOnlyHint: r(969475).boolean()
                    },
                    exact: !0
                }),
                tE = r(969475).object({
                    required: {},
                    optional: {
                        cursor: r(969475).string()
                    },
                    exact: !0
                }),
                tO = r(969475).object({
                    required: {
                        uri: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                tF = r(969475).object({
                    required: {},
                    optional: {
                        cursor: r(969475).string()
                    },
                    exact: !0
                }),
                tG = r(969475).object({
                    required: {
                        name: r(969475).string()
                    },
                    optional: {
                        arguments: r(969475).record(r(969475).string(), r(969475).string())
                    },
                    exact: !0
                }),
                tV = r(969475).undefinable(r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                })),
                tz = {
                    "mcpServer.runTool": `
(args: {
		toolArguments: Record<string, unknown>
		toolName: string
		/** Populated by transformArgumentsForRun from tool annotations */
		readOnlyHint?: boolean
	}) => Promise<McpServerToolCallResult>`,
                    "mcpServer.listResources": `
(args: {
		cursor?: string
	}) => Promise<McpServerListResourcesToolResult>`,
                    "mcpServer.readResource": `
(args: {
		uri: string
	}) => Promise<McpServerReadResourceToolResult>`,
                    "mcpServer.listPrompts": `
(args: {
		cursor?: string
	}) => Promise<McpServerListPromptsToolResult>`,
                    "mcpServer.getPrompt": `
(args: {
		name: string
		arguments?: Record<string, string>
	}) => Promise<McpServerGetPromptToolResult>`,
                    "mcpServer.listTools": "(args?: {}) => Promise<McpServerListToolsToolResult>"
                };
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("microsoftTeams"),
                    type: r(969475).literal("microsoftTeams")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    channel: r(969475).string(),
                    keywords: r(969475).string(),
                    lookback: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            channel: r(969475).undefinable(r(969475).string()),
                            id: r(969475).string(),
                            isPrivate: r(969475).union([r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0)]),
                            lastEdited: r(969475).string(),
                            messages: r(969475).array(r(969475).object({
                                required: {
                                    lastEdited: r(969475).string(),
                                    messageId: r(969475).string(),
                                    text: r(969475).string(),
                                    threadId: r(969475).string(),
                                    user: r(969475).string()
                                },
                                optional: {},
                                exact: !0
                            })),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).union([r(969475).object({
                required: {
                    channelId: r(969475).string()
                },
                optional: {
                    channelName: r(969475).isUndefined()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    channelName: r(969475).string()
                },
                optional: {
                    channelId: r(969475).isUndefined()
                },
                exact: !0
            })]), r(969475).object({
                required: {
                    channel: r(969475).string(),
                    messages: r(969475).array(r(969475).object({
                        required: {
                            text: r(969475).string(),
                            user: r(969475).object({
                                required: {
                                    name: r(969475).string()
                                },
                                optional: {
                                    notionUserId: r(969475).string(),
                                    notionUserName: r(969475).string()
                                },
                                exact: !0
                            })
                        },
                        optional: {
                            attachments: r(969475).array(r(969475).string()),
                            date: r(969475).string()
                        },
                        exact: !0
                    })),
                    timestamp: r(969475).number(),
                    type: r(969475).literal("microsoft-teams")
                },
                optional: {
                    additionalMessageToModel: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    channelId: r(969475).string(),
                    messageId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    channel: r(969475).string(),
                    messages: r(969475).array(r(969475).object({
                        required: {
                            text: r(969475).string(),
                            user: r(969475).object({
                                required: {
                                    name: r(969475).string()
                                },
                                optional: {
                                    notionUserId: r(969475).string(),
                                    notionUserName: r(969475).string()
                                },
                                exact: !0
                            })
                        },
                        optional: {
                            attachments: r(969475).array(r(969475).string()),
                            date: r(969475).string()
                        },
                        exact: !0
                    })),
                    timestamp: r(969475).number(),
                    type: r(969475).literal("microsoft-teams")
                },
                optional: {
                    additionalMessageToModel: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    chatId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    channel: r(969475).string(),
                    messages: r(969475).array(r(969475).object({
                        required: {
                            text: r(969475).string(),
                            user: r(969475).object({
                                required: {
                                    name: r(969475).string()
                                },
                                optional: {
                                    notionUserId: r(969475).string(),
                                    notionUserName: r(969475).string()
                                },
                                exact: !0
                            })
                        },
                        optional: {
                            attachments: r(969475).array(r(969475).string()),
                            date: r(969475).string()
                        },
                        exact: !0
                    })),
                    timestamp: r(969475).number(),
                    type: r(969475).literal("microsoft-teams")
                },
                optional: {
                    additionalMessageToModel: r(969475).string()
                },
                exact: !0
            }), r(969475).union([r(969475).object({
                required: {
                    email: r(969475).string()
                },
                optional: {
                    name: r(969475).string(),
                    since: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    name: r(969475).string()
                },
                optional: {
                    email: r(969475).string(),
                    since: r(969475).string()
                },
                exact: !0
            })]), r(969475).object({
                required: {
                    messages: r(969475).array(r(969475).object({
                        required: {
                            conversationId: r(969475).string(),
                            conversationType: r(969475).literals("channel", "chat"),
                            id: r(969475).string(),
                            text: r(969475).string(),
                            timestamp: r(969475).string()
                        },
                        optional: {
                            conversation: r(969475).string(),
                            url: r(969475).string()
                        },
                        exact: !0
                    })),
                    totalCount: r(969475).number(),
                    user: r(969475).object({
                        required: {
                            id: r(969475).string()
                        },
                        optional: {
                            displayName: r(969475).string(),
                            email: r(969475).string(),
                            jobTitle: r(969475).string(),
                            userPrincipalName: r(969475).string()
                        },
                        exact: !0
                    })
                },
                optional: {
                    alternativeUsers: r(969475).array(r(969475).object({
                        required: {},
                        optional: {
                            displayName: r(969475).string(),
                            email: r(969475).string()
                        },
                        exact: !0
                    }))
                },
                exact: !0
            });
            let tW = `
type MicrosoftTeamsPersistedState = {}

type MicrosoftTeamsSearchInput = {
	question: string
	keywords?: string
	lookback?: string
	channel?: string
}

type MicrosoftTeamsSearchResult = {
	results: Array<MicrosoftTeamsSearchResultItem>
}

type MicrosoftTeamsViewChannelInput =
	| {
			channelId: string
			channelName?: never
	  }
	| {
			channelId?: never
			channelName: string
	  }

type MicrosoftTeamsViewChannelResult = LoadMicrosoftTeamsResponse

type MicrosoftTeamsLoadMessageInput = {
	channelId: string
	messageId: string
}

type MicrosoftTeamsLoadMessageResult = LoadMicrosoftTeamsResponse

type MicrosoftTeamsViewChatInput = {
	chatId: string
}

type MicrosoftTeamsViewChatResult = LoadMicrosoftTeamsResponse

type MicrosoftTeamsGetUserMessagesInput = (
	| { name: string; email?: string }
	| { email: string; name?: string }
) & {
	since?: string
}

type MicrosoftTeamsGetUserMessagesResult = {
	user: MicrosoftTeamsUserMessagesUser
	messages: Array<MicrosoftTeamsUserMessagesResultItem>
	totalCount: number
	alternativeUsers?: Array<{
		displayName?: string
		email?: string
	}>
}`,
                tB = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                tH = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        channel: r(969475).string(),
                        keywords: r(969475).string(),
                        lookback: r(969475).string()
                    },
                    exact: !0
                }),
                tQ = r(969475).union([r(969475).object({
                    required: {
                        channelId: r(969475).string()
                    },
                    optional: {
                        channelName: r(969475).isUndefined()
                    },
                    exact: !0
                }), r(969475).object({
                    required: {
                        channelName: r(969475).string()
                    },
                    optional: {
                        channelId: r(969475).isUndefined()
                    },
                    exact: !0
                })]),
                tZ = r(969475).object({
                    required: {
                        channelId: r(969475).string(),
                        messageId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                tJ = r(969475).object({
                    required: {
                        chatId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                tK = r(969475).union([r(969475).object({
                    required: {
                        email: r(969475).string()
                    },
                    optional: {
                        name: r(969475).string(),
                        since: r(969475).string()
                    },
                    exact: !0
                }), r(969475).object({
                    required: {
                        name: r(969475).string()
                    },
                    optional: {
                        email: r(969475).string(),
                        since: r(969475).string()
                    },
                    exact: !0
                })]),
                tY = {
                    "microsoftTeams.search": "search(args: MicrosoftTeamsSearchInput): Promise<MicrosoftTeamsSearchResult>",
                    "microsoftTeams.viewChannel": `
viewChannel(
		args: MicrosoftTeamsViewChannelInput,
	): Promise<MicrosoftTeamsViewChannelResult>`,
                    "microsoftTeams.loadMessage": `
loadMessage(
		args: MicrosoftTeamsLoadMessageInput,
	): Promise<MicrosoftTeamsLoadMessageResult>`,
                    "microsoftTeams.viewChat": `
viewChat(
		args: MicrosoftTeamsViewChatInput,
	): Promise<MicrosoftTeamsViewChatResult>`,
                    "microsoftTeams.getUserMessages": `
getUserMessages(
		args: MicrosoftTeamsGetUserMessagesInput,
	): Promise<MicrosoftTeamsGetUserMessagesResult>`
                };

            function tX() {
                return r(969475).createType(function(e) {
                    return r(969475).failIf.not `defined` (void 0 === e) || r(969475).failIf.not `a number` ("number" != typeof e)
                }, "utcFloatingTimestamp")
            }
            let t$ = r(969475).union([r(969475).object({
                    required: {
                        dataSourceUrl: r(969475).string(),
                        name: r(969475).string(),
                        type: r(969475).literal("board")
                    },
                    optional: {
                        advancedFilter: r(969475).lazy(() => t4),
                        cardLayoutMode: r(969475).literals("compact", "default"),
                        cardSize: r(969475).literals("large", "medium", "small"),
                        cover: r(969475).union([r(969475).object({
                            required: {
                                fileProperty: r(969475).string(),
                                type: r(969475).literal("file_property")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page_content")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page_content_first")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page_cover")
                            },
                            optional: {}
                        })]),
                        coverAspect: r(969475).literals("contain", "cover"),
                        defaultPageTemplate: r(969475).string(),
                        displayProperties: r(969475).array(r(969475).string()),
                        fullWidthProperties: r(969475).array(r(969475).string()),
                        groupBy: r(969475).lazy(() => t9),
                        simpleFilters: r(969475).array(r(969475).object({
                            required: {
                                filter: r(969475).lazy(() => t7)
                            },
                            optional: {
                                id: r(969475).string()
                            }
                        })),
                        sorts: r(969475).array(r(969475).object({
                            required: {
                                direction: r(969475).literals("ascending", "descending"),
                                property: r(969475).string()
                            },
                            optional: {}
                        })),
                        subGroupBy: r(969475).lazy(() => t9)
                    }
                }), r(969475).object({
                    required: {
                        dataSourceUrl: r(969475).string(),
                        name: r(969475).string(),
                        type: r(969475).literal("calendar")
                    },
                    optional: {
                        advancedFilter: r(969475).lazy(() => t4),
                        calendarBy: r(969475).string(),
                        defaultPageTemplate: r(969475).string(),
                        displayProperties: r(969475).array(r(969475).string()),
                        showWeekends: r(969475).boolean(),
                        simpleFilters: r(969475).array(r(969475).object({
                            required: {
                                filter: r(969475).lazy(() => t7)
                            },
                            optional: {
                                id: r(969475).string()
                            }
                        })),
                        sorts: r(969475).array(r(969475).object({
                            required: {
                                direction: r(969475).literals("ascending", "descending"),
                                property: r(969475).string()
                            },
                            optional: {}
                        })),
                        viewRange: r(969475).literals("month", "week")
                    }
                }), r(969475).object({
                    required: {
                        chartConfig: r(969475).union([r(969475).object({
                            required: {
                                placeHolderType: r(969475).literals("bar", "column", "donut", "line", "number"),
                                type: r(969475).literal("placeholder")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                dataConfig: r(969475).union([r(969475).object({
                                    required: {
                                        nameProperty: r(969475).string(),
                                        type: r(969475).literal("results_reducer"),
                                        valueProperty: r(969475).string(),
                                        valueSeriesFormat: r(969475).object({
                                            required: {
                                                displayType: r(969475).literals("bar", "column", "line")
                                            },
                                            optional: {}
                                        })
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        aggregationConfig: r(969475).object({
                                            required: {
                                                aggregation: r(969475).union([r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("average"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("checked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("count_values"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("date_range"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("earliest_date"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("latest_date"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("max"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("median"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("min"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("not_empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_checked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_not_empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_unchecked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("range"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("show_unique"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("sum"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("unchecked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("unique"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).object({
                                                            required: {
                                                                groupName: r(969475).string(),
                                                                operator: r(969475).literals("count_per_group", "percent_per_group")
                                                            },
                                                            optional: {}
                                                        }),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("count")
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean(),
                                                        property: r(969475).string()
                                                    }
                                                })]),
                                                seriesFormat: r(969475).object({
                                                    required: {
                                                        displayType: r(969475).literals("bar", "column", "line")
                                                    },
                                                    optional: {}
                                                })
                                            },
                                            optional: {
                                                stackOptions: r(969475).object({
                                                    required: {
                                                        groupBy: r(969475).lazy(() => t9)
                                                    },
                                                    optional: {}
                                                })
                                            }
                                        }),
                                        groupBy: r(969475).lazy(() => t9),
                                        type: r(969475).literal("groups_reducer")
                                    },
                                    optional: {}
                                })]),
                                type: r(969475).literals("bar", "column", "line")
                            },
                            optional: {
                                chartFormat: r(969475).object({
                                    required: {},
                                    optional: {
                                        axisAvatar: r(969475).literals("avatar", "avatar_name", "name"),
                                        axisCumulative: r(969475).boolean(),
                                        axisGridLine: r(969475).literals("both", "horizontal", "none", "vertical"),
                                        axisGroupStyle: r(969475).literals("normal", "percent", "side_by_side"),
                                        axisHideEmptyGroups: r(969475).boolean(),
                                        axisLabel: r(969475).literals("both", "none", "x_axis", "y_axis"),
                                        axisShowDataLabels: r(969475).boolean(),
                                        caption: r(969475).string(),
                                        colorTheme: r(969475).literals("auto", "blue", "colorful", "gray", "green", "orange", "pink", "purple", "red", "teal", "yellow"),
                                        donutDataLabels: r(969475).literals("name", "name_and_value", "none", "value"),
                                        donutHideValue: r(969475).boolean(),
                                        height: r(969475).literals("extra_large", "large", "medium", "small"),
                                        hideLegend: r(969475).boolean(),
                                        hideLineFillArea: r(969475).boolean(),
                                        hideNegativeValues: r(969475).boolean(),
                                        hideTitle: r(969475).boolean(),
                                        legendPosition: r(969475).literals("bottom", "off", "side"),
                                        mainSort: r(969475).literals("manual", "results-advanced", "x-ascending", "x-descending", "y-ascending", "y-descending"),
                                        numberColor: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow"),
                                        numberConditionalColor: r(969475).object({
                                            required: {
                                                rules: r(969475).array(r(969475).object({
                                                    required: {
                                                        id: r(969475).string(),
                                                        operator: r(969475).literals("equal", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "not_equal"),
                                                        value: r(969475).number()
                                                    },
                                                    optional: {
                                                        color: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow")
                                                    }
                                                }))
                                            },
                                            optional: {
                                                elseColor: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow")
                                            }
                                        }),
                                        numberFormatOverride: r(969475).literals("argentine_peso", "australian_dollar", "baht", "bitcoin", "canadian_dollar", "chilean_peso", "colombian_peso", "danish_krone", "dirham", "dollar", "euro", "forint", "franc", "hong_kong_dollar", "koruna", "krona", "leu", "lira", "mexican_peso", "new_taiwan_dollar", "new_zealand_dollar", "nigerian_naira", "norwegian_krone", "number", "number_with_commas", "pakistani_rupee", "percent", "peruvian_sol", "philippine_peso", "pound", "rand", "real", "ringgit", "riyal", "ruble", "rupee", "rupiah", "shekel", "singapore_dollar", "uruguayan_peso", "vietnamese_dong", "won", "yen", "yuan", "zloty"),
                                        numberPrecisionOverride: r(969475).literals("precision_0", "precision_1", "precision_2", "precision_3", "precision_4", "precision_5", "precision_from_number_property", "precision_uncapped"),
                                        referenceLines: r(969475).array(r(969475).object({
                                            required: {
                                                color: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow"),
                                                dashStyle: r(969475).literals("Dash", "Solid"),
                                                id: r(969475).string(),
                                                label: r(969475).string(),
                                                value: r(969475).number()
                                            },
                                            optional: {}
                                        })),
                                        showCaption: r(969475).boolean(),
                                        showValueLabel: r(969475).boolean(),
                                        smoothLine: r(969475).boolean(),
                                        valueLabel: r(969475).string(),
                                        weightColorValue: r(969475).boolean(),
                                        yAxisMax: r(969475).number(),
                                        yAxisMin: r(969475).number()
                                    }
                                })
                            }
                        }), r(969475).object({
                            required: {
                                dataConfig: r(969475).union([r(969475).object({
                                    required: {
                                        nameProperty: r(969475).string(),
                                        type: r(969475).literal("results_reducer"),
                                        valueProperty: r(969475).string()
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        aggregationConfig: r(969475).object({
                                            required: {
                                                aggregation: r(969475).union([r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("average"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("checked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("count_values"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("date_range"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("earliest_date"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("latest_date"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("max"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("median"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("min"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("not_empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_checked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_not_empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_unchecked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("range"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("show_unique"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("sum"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("unchecked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("unique"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).object({
                                                            required: {
                                                                groupName: r(969475).string(),
                                                                operator: r(969475).literals("count_per_group", "percent_per_group")
                                                            },
                                                            optional: {}
                                                        }),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("count")
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean(),
                                                        property: r(969475).string()
                                                    }
                                                })])
                                            },
                                            optional: {}
                                        }),
                                        groupBy: r(969475).lazy(() => t9),
                                        type: r(969475).literal("groups_reducer")
                                    },
                                    optional: {}
                                })]),
                                type: r(969475).literal("donut")
                            },
                            optional: {
                                chartFormat: r(969475).object({
                                    required: {},
                                    optional: {
                                        axisAvatar: r(969475).literals("avatar", "avatar_name", "name"),
                                        axisCumulative: r(969475).boolean(),
                                        axisGridLine: r(969475).literals("both", "horizontal", "none", "vertical"),
                                        axisGroupStyle: r(969475).literals("normal", "percent", "side_by_side"),
                                        axisHideEmptyGroups: r(969475).boolean(),
                                        axisLabel: r(969475).literals("both", "none", "x_axis", "y_axis"),
                                        axisShowDataLabels: r(969475).boolean(),
                                        caption: r(969475).string(),
                                        colorTheme: r(969475).literals("auto", "blue", "colorful", "gray", "green", "orange", "pink", "purple", "red", "teal", "yellow"),
                                        donutDataLabels: r(969475).literals("name", "name_and_value", "none", "value"),
                                        donutHideValue: r(969475).boolean(),
                                        height: r(969475).literals("extra_large", "large", "medium", "small"),
                                        hideLegend: r(969475).boolean(),
                                        hideLineFillArea: r(969475).boolean(),
                                        hideNegativeValues: r(969475).boolean(),
                                        hideTitle: r(969475).boolean(),
                                        legendPosition: r(969475).literals("bottom", "off", "side"),
                                        mainSort: r(969475).literals("manual", "results-advanced", "x-ascending", "x-descending", "y-ascending", "y-descending"),
                                        numberColor: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow"),
                                        numberConditionalColor: r(969475).object({
                                            required: {
                                                rules: r(969475).array(r(969475).object({
                                                    required: {
                                                        id: r(969475).string(),
                                                        operator: r(969475).literals("equal", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "not_equal"),
                                                        value: r(969475).number()
                                                    },
                                                    optional: {
                                                        color: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow")
                                                    }
                                                }))
                                            },
                                            optional: {
                                                elseColor: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow")
                                            }
                                        }),
                                        numberFormatOverride: r(969475).literals("argentine_peso", "australian_dollar", "baht", "bitcoin", "canadian_dollar", "chilean_peso", "colombian_peso", "danish_krone", "dirham", "dollar", "euro", "forint", "franc", "hong_kong_dollar", "koruna", "krona", "leu", "lira", "mexican_peso", "new_taiwan_dollar", "new_zealand_dollar", "nigerian_naira", "norwegian_krone", "number", "number_with_commas", "pakistani_rupee", "percent", "peruvian_sol", "philippine_peso", "pound", "rand", "real", "ringgit", "riyal", "ruble", "rupee", "rupiah", "shekel", "singapore_dollar", "uruguayan_peso", "vietnamese_dong", "won", "yen", "yuan", "zloty"),
                                        numberPrecisionOverride: r(969475).literals("precision_0", "precision_1", "precision_2", "precision_3", "precision_4", "precision_5", "precision_from_number_property", "precision_uncapped"),
                                        referenceLines: r(969475).array(r(969475).object({
                                            required: {
                                                color: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow"),
                                                dashStyle: r(969475).literals("Dash", "Solid"),
                                                id: r(969475).string(),
                                                label: r(969475).string(),
                                                value: r(969475).number()
                                            },
                                            optional: {}
                                        })),
                                        showCaption: r(969475).boolean(),
                                        showValueLabel: r(969475).boolean(),
                                        smoothLine: r(969475).boolean(),
                                        valueLabel: r(969475).string(),
                                        weightColorValue: r(969475).boolean(),
                                        yAxisMax: r(969475).number(),
                                        yAxisMin: r(969475).number()
                                    }
                                })
                            }
                        }), r(969475).object({
                            required: {
                                dataConfig: r(969475).object({
                                    required: {
                                        aggregationConfig: r(969475).object({
                                            required: {
                                                aggregation: r(969475).union([r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("average"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("checked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("count_values"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("date_range"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("earliest_date"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("latest_date"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("max"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("median"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("min"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("not_empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_checked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_not_empty"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("percent_unchecked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("range"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("show_unique"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("sum"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("unchecked"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("unique"),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).object({
                                                            required: {
                                                                groupName: r(969475).string(),
                                                                operator: r(969475).literals("count_per_group", "percent_per_group")
                                                            },
                                                            optional: {}
                                                        }),
                                                        property: r(969475).string()
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean()
                                                    }
                                                }), r(969475).object({
                                                    required: {
                                                        aggregator: r(969475).literal("count")
                                                    },
                                                    optional: {
                                                        enforceMaxAggregationLimit: r(969475).boolean(),
                                                        property: r(969475).string()
                                                    }
                                                })])
                                            },
                                            optional: {}
                                        }),
                                        type: r(969475).literal("number_reducer")
                                    },
                                    optional: {}
                                }),
                                type: r(969475).literal("number")
                            },
                            optional: {
                                chartFormat: r(969475).object({
                                    required: {},
                                    optional: {
                                        axisAvatar: r(969475).literals("avatar", "avatar_name", "name"),
                                        axisCumulative: r(969475).boolean(),
                                        axisGridLine: r(969475).literals("both", "horizontal", "none", "vertical"),
                                        axisGroupStyle: r(969475).literals("normal", "percent", "side_by_side"),
                                        axisHideEmptyGroups: r(969475).boolean(),
                                        axisLabel: r(969475).literals("both", "none", "x_axis", "y_axis"),
                                        axisShowDataLabels: r(969475).boolean(),
                                        caption: r(969475).string(),
                                        colorTheme: r(969475).literals("auto", "blue", "colorful", "gray", "green", "orange", "pink", "purple", "red", "teal", "yellow"),
                                        donutDataLabels: r(969475).literals("name", "name_and_value", "none", "value"),
                                        donutHideValue: r(969475).boolean(),
                                        height: r(969475).literals("extra_large", "large", "medium", "small"),
                                        hideLegend: r(969475).boolean(),
                                        hideLineFillArea: r(969475).boolean(),
                                        hideNegativeValues: r(969475).boolean(),
                                        hideTitle: r(969475).boolean(),
                                        legendPosition: r(969475).literals("bottom", "off", "side"),
                                        mainSort: r(969475).literals("manual", "results-advanced", "x-ascending", "x-descending", "y-ascending", "y-descending"),
                                        numberColor: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow"),
                                        numberConditionalColor: r(969475).object({
                                            required: {
                                                rules: r(969475).array(r(969475).object({
                                                    required: {
                                                        id: r(969475).string(),
                                                        operator: r(969475).literals("equal", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "not_equal"),
                                                        value: r(969475).number()
                                                    },
                                                    optional: {
                                                        color: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow")
                                                    }
                                                }))
                                            },
                                            optional: {
                                                elseColor: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow")
                                            }
                                        }),
                                        numberFormatOverride: r(969475).literals("argentine_peso", "australian_dollar", "baht", "bitcoin", "canadian_dollar", "chilean_peso", "colombian_peso", "danish_krone", "dirham", "dollar", "euro", "forint", "franc", "hong_kong_dollar", "koruna", "krona", "leu", "lira", "mexican_peso", "new_taiwan_dollar", "new_zealand_dollar", "nigerian_naira", "norwegian_krone", "number", "number_with_commas", "pakistani_rupee", "percent", "peruvian_sol", "philippine_peso", "pound", "rand", "real", "ringgit", "riyal", "ruble", "rupee", "rupiah", "shekel", "singapore_dollar", "uruguayan_peso", "vietnamese_dong", "won", "yen", "yuan", "zloty"),
                                        numberPrecisionOverride: r(969475).literals("precision_0", "precision_1", "precision_2", "precision_3", "precision_4", "precision_5", "precision_from_number_property", "precision_uncapped"),
                                        referenceLines: r(969475).array(r(969475).object({
                                            required: {
                                                color: r(969475).literals("blue", "brown", "gray", "green", "lightgray", "orange", "pink", "purple", "red", "yellow"),
                                                dashStyle: r(969475).literals("Dash", "Solid"),
                                                id: r(969475).string(),
                                                label: r(969475).string(),
                                                value: r(969475).number()
                                            },
                                            optional: {}
                                        })),
                                        showCaption: r(969475).boolean(),
                                        showValueLabel: r(969475).boolean(),
                                        smoothLine: r(969475).boolean(),
                                        valueLabel: r(969475).string(),
                                        weightColorValue: r(969475).boolean(),
                                        yAxisMax: r(969475).number(),
                                        yAxisMin: r(969475).number()
                                    }
                                })
                            }
                        })]),
                        dataSourceUrl: r(969475).string(),
                        name: r(969475).string(),
                        type: r(969475).literal("chart")
                    },
                    optional: {
                        advancedFilter: r(969475).lazy(() => t4),
                        defaultPageTemplate: r(969475).string(),
                        simpleFilters: r(969475).array(r(969475).object({
                            required: {
                                filter: r(969475).lazy(() => t7)
                            },
                            optional: {
                                id: r(969475).string()
                            }
                        }))
                    }
                }), r(969475).object({
                    required: {
                        name: r(969475).string(),
                        rows: r(969475).array(r(969475).object({
                            required: {
                                id: r(969475).string(),
                                widgets: r(969475).array(r(969475).object({
                                    required: {
                                        id: r(969475).string(),
                                        view: r(969475).lazy(() => t$)
                                    },
                                    optional: {
                                        viewUrl: r(969475).string()
                                    }
                                }))
                            },
                            optional: {
                                height: r(969475).number()
                            }
                        })),
                        type: r(969475).literal("dashboard")
                    },
                    optional: {
                        globalFilters: r(969475).array(r(969475).object({
                            required: {
                                filter: r(969475).lazy(() => t7),
                                id: r(969475).string(),
                                targets: r(969475).array(r(969475).object({
                                    required: {
                                        dataSourceId: r(969475).string(),
                                        property: r(969475).string()
                                    },
                                    optional: {}
                                }))
                            },
                            optional: {
                                icon: r(969475).string(),
                                name: r(969475).string()
                            }
                        }))
                    }
                }), r(969475).object({
                    required: {
                        dataSourceUrl: r(969475).string(),
                        name: r(969475).string(),
                        questions: r(969475).array(r(969475).object({
                            required: {
                                property: r(969475).string()
                            },
                            optional: {
                                description: r(969475).string(),
                                hasConditionalLogic: r(969475).boolean(),
                                name: r(969475).string(),
                                required: r(969475).boolean()
                            }
                        })),
                        type: r(969475).literal("form_editor")
                    },
                    optional: {
                        description: r(969475).string(),
                        hasConditionalLogic: r(969475).boolean(),
                        icon: r(969475).string(),
                        title: r(969475).string()
                    }
                }), r(969475).object({
                    required: {
                        dataSourceUrl: r(969475).string(),
                        name: r(969475).string(),
                        type: r(969475).literal("gallery")
                    },
                    optional: {
                        advancedFilter: r(969475).lazy(() => t4),
                        cardLayoutMode: r(969475).literals("compact", "default"),
                        cardSize: r(969475).literals("large", "medium", "small"),
                        cover: r(969475).union([r(969475).object({
                            required: {
                                fileProperty: r(969475).string(),
                                type: r(969475).literal("file_property")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page_content")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page_content_first")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page_cover")
                            },
                            optional: {}
                        })]),
                        coverAspect: r(969475).literals("contain", "cover"),
                        defaultPageTemplate: r(969475).string(),
                        displayProperties: r(969475).array(r(969475).string()),
                        fullWidthProperties: r(969475).array(r(969475).string()),
                        groupBy: r(969475).lazy(() => t9),
                        simpleFilters: r(969475).array(r(969475).object({
                            required: {
                                filter: r(969475).lazy(() => t7)
                            },
                            optional: {
                                id: r(969475).string()
                            }
                        })),
                        sorts: r(969475).array(r(969475).object({
                            required: {
                                direction: r(969475).literals("ascending", "descending"),
                                property: r(969475).string()
                            },
                            optional: {}
                        }))
                    }
                }), r(969475).object({
                    required: {
                        dataSourceUrl: r(969475).string(),
                        name: r(969475).string(),
                        type: r(969475).literal("list")
                    },
                    optional: {
                        advancedFilter: r(969475).lazy(() => t4),
                        defaultPageTemplate: r(969475).string(),
                        displayProperties: r(969475).array(r(969475).string()),
                        groupBy: r(969475).lazy(() => t9),
                        simpleFilters: r(969475).array(r(969475).object({
                            required: {
                                filter: r(969475).lazy(() => t7)
                            },
                            optional: {
                                id: r(969475).string()
                            }
                        })),
                        sorts: r(969475).array(r(969475).object({
                            required: {
                                direction: r(969475).literals("ascending", "descending"),
                                property: r(969475).string()
                            },
                            optional: {}
                        }))
                    }
                }), r(969475).object({
                    required: {
                        dataSourceUrl: r(969475).string(),
                        mapBy: r(969475).string(),
                        name: r(969475).string(),
                        type: r(969475).literal("map")
                    },
                    optional: {
                        defaultPageTemplate: r(969475).string()
                    }
                }), r(969475).object({
                    required: {
                        dataSourceUrl: r(969475).string(),
                        name: r(969475).string(),
                        type: r(969475).literal("table")
                    },
                    optional: {
                        advancedFilter: r(969475).lazy(() => t4),
                        defaultPageTemplate: r(969475).string(),
                        displayProperties: r(969475).array(r(969475).string()),
                        groupBy: r(969475).lazy(() => t9),
                        simpleFilters: r(969475).array(r(969475).object({
                            required: {
                                filter: r(969475).lazy(() => t7)
                            },
                            optional: {
                                id: r(969475).string()
                            }
                        })),
                        sorts: r(969475).array(r(969475).object({
                            required: {
                                direction: r(969475).literals("ascending", "descending"),
                                property: r(969475).string()
                            },
                            optional: {}
                        }))
                    }
                }), r(969475).object({
                    required: {
                        dataSourceUrl: r(969475).string(),
                        name: r(969475).string(),
                        type: r(969475).literal("timeline")
                    },
                    optional: {
                        advancedFilter: r(969475).lazy(() => t4),
                        defaultPageTemplate: r(969475).string(),
                        displayProperties: r(969475).array(r(969475).string()),
                        groupBy: r(969475).lazy(() => t9),
                        showTable: r(969475).boolean(),
                        simpleFilters: r(969475).array(r(969475).object({
                            required: {
                                filter: r(969475).lazy(() => t7)
                            },
                            optional: {
                                id: r(969475).string()
                            }
                        })),
                        sorts: r(969475).array(r(969475).object({
                            required: {
                                direction: r(969475).literals("ascending", "descending"),
                                property: r(969475).string()
                            },
                            optional: {}
                        })),
                        timelineBy: r(969475).string(),
                        timelineByEnd: r(969475).string()
                    }
                })]),
                t9 = r(969475).union([r(969475).object({
                    required: {
                        end: r(969475).number(),
                        property: r(969475).string(),
                        propertyType: r(969475).literal("number"),
                        size: r(969475).number(),
                        sort: r(969475).union([r(969475).object({
                            required: {
                                type: r(969475).literal("ascending")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("descending")
                            },
                            optional: {}
                        })]),
                        start: r(969475).number()
                    },
                    optional: {
                        disableBoardColorColumns: r(969475).boolean(),
                        groupBy: r(969475).object({
                            required: {
                                type: r(969475).literal("unique")
                            },
                            optional: {
                                end: r(969475).number(),
                                start: r(969475).number()
                            }
                        }),
                        hideEmptyGroups: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        groupBy: r(969475).literals("alphabet_prefix", "exact"),
                        property: r(969475).string(),
                        propertyType: r(969475).literals("email", "phone_number", "text", "title", "url"),
                        sort: r(969475).union([r(969475).object({
                            required: {
                                type: r(969475).literal("ascending")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("descending")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("manual")
                            },
                            optional: {}
                        })])
                    },
                    optional: {
                        disableBoardColorColumns: r(969475).boolean(),
                        hideEmptyGroups: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        groupBy: r(969475).literals("day", "month", "relative", "week", "year"),
                        property: r(969475).string(),
                        propertyType: r(969475).literals("created_time", "date", "last_edited_time"),
                        sort: r(969475).union([r(969475).object({
                            required: {
                                type: r(969475).literal("ascending")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("descending")
                            },
                            optional: {}
                        })])
                    },
                    optional: {
                        disableBoardColorColumns: r(969475).boolean(),
                        hideEmptyGroups: r(969475).boolean(),
                        startDayOfWeek: r(969475).literals(0, 1)
                    }
                }), r(969475).object({
                    required: {
                        groupBy: r(969475).literals("group", "option"),
                        property: r(969475).string(),
                        propertyType: r(969475).literal("status"),
                        sort: r(969475).union([r(969475).object({
                            required: {
                                type: r(969475).literal("ascending")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("descending")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("manual")
                            },
                            optional: {}
                        })])
                    },
                    optional: {
                        disableBoardColorColumns: r(969475).boolean(),
                        hideEmptyGroups: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        property: r(969475).string(),
                        propertyType: r(969475).literal("checkbox"),
                        sort: r(969475).object({
                            required: {
                                type: r(969475).literal("manual")
                            },
                            optional: {}
                        })
                    },
                    optional: {
                        disableBoardColorColumns: r(969475).boolean(),
                        hideEmptyGroups: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        property: r(969475).string(),
                        propertyType: r(969475).literal("person"),
                        sort: r(969475).object({
                            required: {
                                type: r(969475).literal("manual")
                            },
                            optional: {}
                        })
                    },
                    optional: {
                        disableBoardColorColumns: r(969475).boolean(),
                        hideEmptyGroups: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        property: r(969475).string(),
                        propertyType: r(969475).literal("relation"),
                        sort: r(969475).union([r(969475).object({
                            required: {
                                type: r(969475).literal("ascending")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("descending")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("manual")
                            },
                            optional: {}
                        })])
                    },
                    optional: {
                        disableBoardColorColumns: r(969475).boolean(),
                        hideEmptyGroups: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        property: r(969475).string(),
                        propertyType: r(969475).literals("multi_select", "select"),
                        sort: r(969475).union([r(969475).object({
                            required: {
                                type: r(969475).literal("ascending")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("descending")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("manual")
                            },
                            optional: {}
                        })])
                    },
                    optional: {
                        disableBoardColorColumns: r(969475).boolean(),
                        hideEmptyGroups: r(969475).boolean()
                    }
                })]),
                t4 = r(969475).object({
                    required: {
                        filters: r(969475).array(r(969475).union([r(969475).lazy(() => t4), r(969475).object({
                            required: {
                                operator: r(969475).literals("checkbox_is", "checkbox_is_not"),
                                property: r(969475).string(),
                                propertyType: r(969475).literal("checkbox"),
                                type: r(969475).literal("property"),
                                value: r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).union([r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0)])
                                    },
                                    optional: {}
                                })
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                operator: r(969475).literals("date_is", "date_is_after", "date_is_before", "date_is_on_or_after", "date_is_on_or_before"),
                                property: r(969475).string(),
                                propertyType: r(969475).literals("created_time", "date", "last_edited_time"),
                                type: r(969475).literal("property"),
                                value: r(969475).union([r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("relative"),
                                        value: r(969475).literals("one_month_ago", "one_month_from_now", "one_week_ago", "one_week_from_now", "today", "tomorrow", "yesterday")
                                    },
                                    optional: {}
                                })])
                            },
                            optional: {
                                use_end: r(969475).boolean()
                            }
                        }), r(969475).object({
                            required: {
                                operator: r(969475).literals("is_empty", "is_not_empty"),
                                property: r(969475).string(),
                                propertyType: r(969475).literals("created_time", "date", "email", "file", "last_edited_time", "multi_select", "number", "person", "phone_number", "relation", "select", "status", "text", "title", "url"),
                                type: r(969475).literal("property")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                property: r(969475).string(),
                                propertyType: r(969475).literal("formula"),
                                resultFilter: r(969475).lazy(() => t7),
                                type: r(969475).literal("property")
                            },
                            optional: {
                                operator: r(969475).literals("any", "every", "none")
                            }
                        }), r(969475).object({
                            required: {
                                operator: r(969475).literals("enum_contains", "enum_does_not_contain"),
                                property: r(969475).string(),
                                propertyType: r(969475).literal("multi_select"),
                                type: r(969475).literal("property"),
                                value: r(969475).union([r(969475).array(r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                })), r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                })])
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                operator: r(969475).literals("number_does_not_equal", "number_equals", "number_greater_than", "number_greater_than_or_equal_to", "number_less_than", "number_less_than_or_equal_to"),
                                property: r(969475).string(),
                                propertyType: r(969475).literal("number"),
                                type: r(969475).literal("property"),
                                value: r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).number())
                                    },
                                    optional: {}
                                })
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                operator: r(969475).literals("person_contains", "person_does_not_contain"),
                                property: r(969475).string(),
                                propertyType: r(969475).literal("person"),
                                type: r(969475).literal("property"),
                                value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("relative"),
                                        value: r(969475).literal("me")
                                    },
                                    optional: {}
                                })])), r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("relative"),
                                        value: r(969475).literal("me")
                                    },
                                    optional: {}
                                })])
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                operator: r(969475).literals("relation_contains", "relation_does_not_contain"),
                                property: r(969475).string(),
                                propertyType: r(969475).literal("relation"),
                                type: r(969475).literal("property"),
                                value: r(969475).union([r(969475).array(r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                })), r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                })])
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                operator: r(969475).literals("enum_is", "enum_is_not"),
                                property: r(969475).string(),
                                propertyType: r(969475).literal("select"),
                                type: r(969475).literal("property"),
                                value: r(969475).union([r(969475).array(r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                })), r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                })])
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                operator: r(969475).literals("status_is", "status_is_not"),
                                property: r(969475).string(),
                                propertyType: r(969475).literal("status"),
                                type: r(969475).literal("property"),
                                value: r(969475).union([r(969475).array(r(969475).object({
                                    required: {
                                        type: r(969475).literals("is_group", "is_option"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                })), r(969475).object({
                                    required: {
                                        type: r(969475).literals("is_group", "is_option"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                })])
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                operator: r(969475).literals("string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                                property: r(969475).string(),
                                propertyType: r(969475).literals("email", "phone_number", "text", "title", "url"),
                                type: r(969475).literal("property"),
                                value: r(969475).object({
                                    required: {
                                        type: r(969475).literal("exact"),
                                        value: r(969475).undefinable(r(969475).string())
                                    },
                                    optional: {}
                                })
                            },
                            optional: {}
                        })])),
                        operator: r(969475).literals("and", "or"),
                        type: r(969475).literal("group")
                    },
                    optional: {}
                }),
                t6 = r(969475).union([r(969475).object({
                    required: {
                        aggregator: r(969475).literal("average"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("checked"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("count_values"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("date_range"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("earliest_date"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("empty"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("latest_date"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("max"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("median"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("min"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("not_empty"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("percent_checked"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("percent_empty"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("percent_not_empty"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("percent_unchecked"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("range"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("show_unique"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("sum"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("unchecked"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("unique"),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).object({
                            required: {
                                groupName: r(969475).string(),
                                operator: r(969475).literals("count_per_group", "percent_per_group")
                            },
                            optional: {}
                        }),
                        property: r(969475).string()
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        aggregator: r(969475).literal("count")
                    },
                    optional: {
                        enforceMaxAggregationLimit: r(969475).boolean(),
                        property: r(969475).string()
                    }
                })]),
                t7 = r(969475).union([r(969475).object({
                    required: {
                        operator: r(969475).literals("checkbox_is", "checkbox_is_not"),
                        property: r(969475).string(),
                        propertyType: r(969475).literal("checkbox"),
                        type: r(969475).literal("property"),
                        value: r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).union([r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0)])
                            },
                            optional: {}
                        })
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        operator: r(969475).literals("date_is", "date_is_after", "date_is_before", "date_is_on_or_after", "date_is_on_or_before"),
                        property: r(969475).string(),
                        propertyType: r(969475).literals("created_time", "date", "last_edited_time"),
                        type: r(969475).literal("property"),
                        value: r(969475).union([r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("relative"),
                                value: r(969475).literals("one_month_ago", "one_month_from_now", "one_week_ago", "one_week_from_now", "today", "tomorrow", "yesterday")
                            },
                            optional: {}
                        })])
                    },
                    optional: {
                        use_end: r(969475).boolean()
                    }
                }), r(969475).object({
                    required: {
                        operator: r(969475).literals("is_empty", "is_not_empty"),
                        property: r(969475).string(),
                        propertyType: r(969475).literals("created_time", "date", "email", "file", "last_edited_time", "multi_select", "number", "person", "phone_number", "relation", "select", "status", "text", "title", "url"),
                        type: r(969475).literal("property")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        property: r(969475).string(),
                        propertyType: r(969475).literal("formula"),
                        resultFilter: r(969475).lazy(() => t7),
                        type: r(969475).literal("property")
                    },
                    optional: {
                        operator: r(969475).literals("any", "every", "none")
                    }
                }), r(969475).object({
                    required: {
                        operator: r(969475).literals("enum_contains", "enum_does_not_contain"),
                        property: r(969475).string(),
                        propertyType: r(969475).literal("multi_select"),
                        type: r(969475).literal("property"),
                        value: r(969475).union([r(969475).array(r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        })), r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        })])
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        operator: r(969475).literals("number_does_not_equal", "number_equals", "number_greater_than", "number_greater_than_or_equal_to", "number_less_than", "number_less_than_or_equal_to"),
                        property: r(969475).string(),
                        propertyType: r(969475).literal("number"),
                        type: r(969475).literal("property"),
                        value: r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).number())
                            },
                            optional: {}
                        })
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        operator: r(969475).literals("person_contains", "person_does_not_contain"),
                        property: r(969475).string(),
                        propertyType: r(969475).literal("person"),
                        type: r(969475).literal("property"),
                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("relative"),
                                value: r(969475).literal("me")
                            },
                            optional: {}
                        })])), r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("relative"),
                                value: r(969475).literal("me")
                            },
                            optional: {}
                        })])
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        operator: r(969475).literals("relation_contains", "relation_does_not_contain"),
                        property: r(969475).string(),
                        propertyType: r(969475).literal("relation"),
                        type: r(969475).literal("property"),
                        value: r(969475).union([r(969475).array(r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        })), r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        })])
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        operator: r(969475).literals("enum_is", "enum_is_not"),
                        property: r(969475).string(),
                        propertyType: r(969475).literal("select"),
                        type: r(969475).literal("property"),
                        value: r(969475).union([r(969475).array(r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        })), r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        })])
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        operator: r(969475).literals("status_is", "status_is_not"),
                        property: r(969475).string(),
                        propertyType: r(969475).literal("status"),
                        type: r(969475).literal("property"),
                        value: r(969475).union([r(969475).array(r(969475).object({
                            required: {
                                type: r(969475).literals("is_group", "is_option"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        })), r(969475).object({
                            required: {
                                type: r(969475).literals("is_group", "is_option"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        })])
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        operator: r(969475).literals("string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                        property: r(969475).string(),
                        propertyType: r(969475).literals("email", "phone_number", "text", "title", "url"),
                        type: r(969475).literal("property"),
                        value: r(969475).object({
                            required: {
                                type: r(969475).literal("exact"),
                                value: r(969475).undefinable(r(969475).string())
                            },
                            optional: {}
                        })
                    },
                    optional: {}
                })]),
                t5 = r(969475).union([r(969475).object({
                    required: {
                        type: r(969475).literal("page"),
                        url: r(969475).string()
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        type: r(969475).literal("teamspace"),
                        url: r(969475).string()
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        type: r(969475).literal("user"),
                        url: r(969475).string()
                    },
                    optional: {}
                })]),
                t0 = r(969475).union([r(969475).object({
                    required: {
                        main: r(969475).array(r(969475).union([r(969475).object({
                            required: {
                                property: r(969475).string(),
                                type: r(969475).literal("property")
                            },
                            optional: {
                                config: r(969475).object({
                                    required: {
                                        style: r(969475).literals("compact", "landscape", "large", "map", "portrait", "small", "square", "text")
                                    },
                                    optional: {}
                                })
                            }
                        }), r(969475).object({
                            required: {
                                relation: r(969475).string(),
                                type: r(969475).literal("views")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("backlinks")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("bottom_controls")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("cover")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("discussions")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("editor")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page_sections")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("properties")
                            },
                            optional: {
                                variant: r(969475).literal("pinned")
                            }
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("relations")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("title")
                            },
                            optional: {
                                pinnedProperties: r(969475).array(r(969475).string()),
                                propertyLabels: r(969475).literals("hide", "show")
                            }
                        })]))
                    },
                    optional: {
                        format: r(969475).object({
                            required: {},
                            optional: {
                                pageFullWidth: r(969475).boolean(),
                                propertyIcons: r(969475).literals("hide", "show")
                            }
                        }),
                        sidebar: r(969475).array(r(969475).union([r(969475).object({
                            required: {
                                property: r(969475).string(),
                                type: r(969475).literal("property")
                            },
                            optional: {
                                config: r(969475).object({
                                    required: {
                                        style: r(969475).literals("compact", "landscape", "large", "map", "portrait", "small", "square", "text")
                                    },
                                    optional: {}
                                })
                            }
                        }), r(969475).object({
                            required: {
                                relation: r(969475).string(),
                                type: r(969475).literal("views")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("backlinks")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("bottom_controls")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("cover")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("discussions")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("editor")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page_sections")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("properties")
                            },
                            optional: {
                                variant: r(969475).literal("pinned")
                            }
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("relations")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("title")
                            },
                            optional: {
                                pinnedProperties: r(969475).array(r(969475).string()),
                                propertyLabels: r(969475).literals("hide", "show")
                            }
                        })]))
                    }
                }), r(969475).object({
                    required: {
                        main: r(969475).array(r(969475).union([r(969475).object({
                            required: {
                                property: r(969475).string(),
                                type: r(969475).literal("property")
                            },
                            optional: {
                                config: r(969475).object({
                                    required: {
                                        style: r(969475).literals("compact", "landscape", "large", "map", "portrait", "small", "square", "text")
                                    },
                                    optional: {}
                                })
                            }
                        }), r(969475).object({
                            required: {
                                relation: r(969475).string(),
                                type: r(969475).literal("views")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("backlinks")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("bottom_controls")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("cover")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("discussions")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("editor")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page_sections")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("properties")
                            },
                            optional: {
                                variant: r(969475).literal("pinned")
                            }
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("relations")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("title")
                            },
                            optional: {
                                pinnedProperties: r(969475).array(r(969475).string()),
                                propertyLabels: r(969475).literals("hide", "show")
                            }
                        })])),
                        tab: r(969475).object({
                            required: {
                                modules: r(969475).array(r(969475).union([r(969475).object({
                                    required: {
                                        property: r(969475).string(),
                                        type: r(969475).literal("property")
                                    },
                                    optional: {
                                        config: r(969475).object({
                                            required: {
                                                style: r(969475).literals("compact", "landscape", "large", "map", "portrait", "small", "square", "text")
                                            },
                                            optional: {}
                                        })
                                    }
                                }), r(969475).object({
                                    required: {
                                        relation: r(969475).string(),
                                        type: r(969475).literal("views")
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("backlinks")
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("bottom_controls")
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("cover")
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("discussions")
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("editor")
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("page_sections")
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("properties")
                                    },
                                    optional: {
                                        variant: r(969475).literal("pinned")
                                    }
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("relations")
                                    },
                                    optional: {}
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("title")
                                    },
                                    optional: {
                                        pinnedProperties: r(969475).array(r(969475).string()),
                                        propertyLabels: r(969475).literals("hide", "show")
                                    }
                                })]))
                            },
                            optional: {
                                id: r(969475).string()
                            }
                        })
                    },
                    optional: {
                        format: r(969475).object({
                            required: {},
                            optional: {
                                pageFullWidth: r(969475).boolean(),
                                propertyIcons: r(969475).literals("hide", "show")
                            }
                        }),
                        sidebar: r(969475).array(r(969475).union([r(969475).object({
                            required: {
                                property: r(969475).string(),
                                type: r(969475).literal("property")
                            },
                            optional: {
                                config: r(969475).object({
                                    required: {
                                        style: r(969475).literals("compact", "landscape", "large", "map", "portrait", "small", "square", "text")
                                    },
                                    optional: {}
                                })
                            }
                        }), r(969475).object({
                            required: {
                                relation: r(969475).string(),
                                type: r(969475).literal("views")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("backlinks")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("bottom_controls")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("cover")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("discussions")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("editor")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page_sections")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("properties")
                            },
                            optional: {
                                variant: r(969475).literal("pinned")
                            }
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("relations")
                            },
                            optional: {}
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("title")
                            },
                            optional: {
                                pinnedProperties: r(969475).array(r(969475).string()),
                                propertyLabels: r(969475).literals("hide", "show")
                            }
                        })]))
                    }
                })]),
                t8 = r(969475).object({
                    required: {
                        name: r(969475).string(),
                        schema: r(969475).record(r(969475).string(), r(969475).union([r(969475).object({
                            required: {
                                dataSourceUrl: r(969475).string(),
                                name: r(969475).string(),
                                type: r(969475).literal("relation")
                            },
                            optional: {
                                description: r(969475).string(),
                                limit: r(969475).literal(1),
                                propertyUrl: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                groups: r(969475).object({
                                    required: {},
                                    optional: {
                                        complete: r(969475).array(r(969475).object({
                                            required: {
                                                name: r(969475).string()
                                            },
                                            optional: {
                                                color: r(969475).literals("blue", "brown", "default", "gray", "green", "orange", "pink", "purple", "red", "yellow"),
                                                description: r(969475).string(),
                                                url: r(969475).string()
                                            }
                                        })),
                                        current: r(969475).array(r(969475).object({
                                            required: {
                                                name: r(969475).string()
                                            },
                                            optional: {
                                                color: r(969475).literals("blue", "brown", "default", "gray", "green", "orange", "pink", "purple", "red", "yellow"),
                                                description: r(969475).string(),
                                                url: r(969475).string()
                                            }
                                        })),
                                        future: r(969475).array(r(969475).object({
                                            required: {
                                                name: r(969475).string()
                                            },
                                            optional: {
                                                color: r(969475).literals("blue", "brown", "default", "gray", "green", "orange", "pink", "purple", "red", "yellow"),
                                                description: r(969475).string(),
                                                url: r(969475).string()
                                            }
                                        })),
                                        in_progress: r(969475).array(r(969475).object({
                                            required: {
                                                name: r(969475).string()
                                            },
                                            optional: {
                                                color: r(969475).literals("blue", "brown", "default", "gray", "green", "orange", "pink", "purple", "red", "yellow"),
                                                description: r(969475).string(),
                                                url: r(969475).string()
                                            }
                                        })),
                                        to_do: r(969475).array(r(969475).object({
                                            required: {
                                                name: r(969475).string()
                                            },
                                            optional: {
                                                color: r(969475).literals("blue", "brown", "default", "gray", "green", "orange", "pink", "purple", "red", "yellow"),
                                                description: r(969475).string(),
                                                url: r(969475).string()
                                            }
                                        }))
                                    }
                                }),
                                name: r(969475).string(),
                                type: r(969475).literal("status")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                options: r(969475).array(r(969475).object({
                                    required: {
                                        name: r(969475).string()
                                    },
                                    optional: {
                                        color: r(969475).literals("blue", "brown", "default", "gray", "green", "orange", "pink", "purple", "red", "yellow"),
                                        description: r(969475).string(),
                                        url: r(969475).string()
                                    }
                                })),
                                type: r(969475).literal("multi_select")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                options: r(969475).array(r(969475).object({
                                    required: {
                                        name: r(969475).string()
                                    },
                                    optional: {
                                        color: r(969475).literals("blue", "brown", "default", "gray", "green", "orange", "pink", "purple", "red", "yellow"),
                                        description: r(969475).string(),
                                        url: r(969475).string()
                                    }
                                })),
                                type: r(969475).literal("select")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("auto_increment_id")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("button")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("checkbox")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("created_by")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("created_time")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("date")
                            },
                            optional: {
                                date_format: r(969475).literals("DD/MM/YYYY", "MM/DD/YYYY", "MMM DD, YYYY", "MMM d", "YYYY/MM/DD", "ll", "relative"),
                                default_reminder: r(969475).object({
                                    required: {
                                        time: r(969475).string(),
                                        unit: r(969475).literals("day", "month", "week", "year"),
                                        value: r(969475).number()
                                    },
                                    optional: {
                                        defaultTimeZone: r(969475).string()
                                    }
                                }),
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0),
                                time_format: r(969475).literals(" ", "A h:mm", "H:mm", "LT", "h:mm A")
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("email")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("file")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("last_edited_by")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("last_edited_time")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("last_visited_time")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("location")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("number")
                            },
                            optional: {
                                description: r(969475).string(),
                                number_format: r(969475).literals("argentine_peso", "australian_dollar", "baht", "bitcoin", "canadian_dollar", "chilean_peso", "colombian_peso", "danish_krone", "dirham", "dollar", "euro", "forint", "franc", "hong_kong_dollar", "koruna", "krona", "leu", "lira", "mexican_peso", "new_taiwan_dollar", "new_zealand_dollar", "nigerian_naira", "norwegian_krone", "number", "number_with_commas", "pakistani_rupee", "percent", "peruvian_sol", "philippine_peso", "pound", "rand", "real", "ringgit", "riyal", "ruble", "rupee", "rupiah", "shekel", "singapore_dollar", "uruguayan_peso", "vietnamese_dong", "won", "yen", "yuan", "zloty"),
                                number_precision: r(969475).literals("precision_0", "precision_1", "precision_2", "precision_3", "precision_4", "precision_5", "precision_uncapped"),
                                readOnly: r(969475).literal(!0),
                                show_as: r(969475).object({
                                    required: {
                                        color: r(969475).literals("blue", "brown", "default", "gray", "green", "orange", "pink", "purple", "red", "yellow"),
                                        maxValue: r(969475).number(),
                                        showValue: r(969475).boolean(),
                                        type: r(969475).literals("bar", "ring")
                                    },
                                    optional: {}
                                })
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("person")
                            },
                            optional: {
                                description: r(969475).string(),
                                limit: r(969475).literal(1),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("phone_number")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("place")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("rollup")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("text")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("title")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("url")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("verification")
                            },
                            optional: {
                                description: r(969475).string(),
                                readOnly: r(969475).literal(!0)
                            }
                        }), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).literal("formula")
                            },
                            optional: {
                                codeUrl: r(969475).string(),
                                description: r(969475).string(),
                                formula: r(969475).string(),
                                resultType: r(969475).literals("checkbox", "date", "number", "person", "select", "text"),
                                updateRequirements: r(969475).string()
                            }
                        })])),
                        url: r(969475).string()
                    },
                    optional: {
                        default_page_template: r(969475).string(),
                        icon: r(969475).string(),
                        page_templates: r(969475).array(r(969475).object({
                            required: {
                                name: r(969475).string(),
                                url: r(969475).string()
                            },
                            optional: {}
                        }))
                    }
                }),
                t1 = r(969475).literals("comment_only", "editor", "read_and_write", "reader");
            r(969475).union([r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).lazy(() => t1)),
                    identifier: r(969475).union([r(969475).object({
                        required: {
                            blockId: r(969475).uuid(),
                            type: r(969475).literal("pageOrCollectionViewBlock")
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            type: r(969475).literal("agent"),
                            workflowId: r(969475).uuid()
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            type: r(969475).literal("workspacePublic")
                        },
                        optional: {},
                        exact: !0
                    })]),
                    type: r(969475).literal("notion")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literals("allow", "disallow")),
                    identifier: r(969475).union([r(969475).object({
                        required: {
                            type: r(969475).literal("helpdocs")
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            type: r(969475).literal("web")
                        },
                        optional: {
                            allowedDomains: r(969475).array(r(969475).string())
                        },
                        exact: !0
                    })]),
                    type: r(969475).literal("search")
                },
                optional: {},
                exact: !0
            })]), r(969475).union([r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literals("allow", "disallow")),
                    identifier: r(969475).literal("helpdocsSearch")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literals("allow", "disallow")),
                    identifier: r(969475).literal("webSearch")
                },
                optional: {
                    allowedDomains: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literals("comment", "edit", "full_access", "view")),
                    identifier: r(969475).union([r(969475).array(r(969475).string()), r(969475).string()])
                },
                optional: {
                    name: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literals("disallow", "interact")),
                    identifier: r(969475).object({
                        required: {
                            type: r(969475).literal("agent"),
                            url: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    })
                },
                optional: {},
                exact: !0
            })]), r(969475).object({
                required: {
                    interval: r(969475).number(),
                    timezone: r(969475).string(),
                    type: r(969475).literal("recurrence")
                },
                optional: {
                    collectionId: r(969475).uuid(),
                    end_condition: r(969475).union([r(969475).object({
                        required: {
                            end_at: tX(),
                            type: r(969475).literal("date")
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            number_of_occurrences: r(969475).number(),
                            type: r(969475).literal("number")
                        },
                        optional: {},
                        exact: !0
                    })]),
                    hour: r(969475).number(),
                    minute: r(969475).number(),
                    scheduleId: r(969475).string(),
                    start_date: tX(),
                    viewId: r(969475).uuid()
                },
                exact: !0
            }), r(969475).union([r(969475).object({
                required: {
                    frequency: r(969475).literal("day")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    frequency: r(969475).literal("hour")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    frequency: r(969475).literal("month")
                },
                optional: {
                    monthly_restriction: r(969475).union([r(969475).object({
                        required: {
                            monthdays: r(969475).array(r(969475).number()),
                            type: r(969475).literal("monthdays")
                        },
                        optional: {},
                        exact: !0
                    }), r(969475).object({
                        required: {
                            type: r(969475).literal("weekdays_in_month"),
                            week_numbers: r(969475).array(r(969475).number()),
                            weekdays: r(969475).array(r(969475).literals("FR", "MO", "SA", "SU", "TH", "TU", "WE"))
                        },
                        optional: {},
                        exact: !0
                    })])
                },
                exact: !0
            }), r(969475).object({
                required: {
                    frequency: r(969475).literal("week")
                },
                optional: {
                    weekdays: r(969475).array(r(969475).literals("FR", "MO", "SA", "SU", "TH", "TU", "WE"))
                },
                exact: !0
            }), r(969475).object({
                required: {
                    frequency: r(969475).literal("year")
                },
                optional: {},
                exact: !0
            })]), r(969475).object({
                required: {},
                optional: {}
            }), r(969475).object({
                required: {
                    type: r(969475).string()
                },
                optional: {
                    permissions: r(969475).unknown(),
                    state: r(969475).unknown()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    connectionKey: r(969475).string(),
                    connectionStatus: r(969475).literals("needs_connection", "needs_permissions", "ready"),
                    integration: r(969475).object({
                        required: {
                            name: r(969475).string(),
                            type: r(969475).string()
                        },
                        optional: {
                            permissions: r(969475).array(r(969475).unknown()),
                            state: r(969475).unknown()
                        },
                        exact: !0
                    }),
                    url: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    name: r(969475).string()
                },
                optional: {
                    serverUrl: r(969475).string()
                },
                exact: !0
            });
            let t2 = `
type RecurrenceTriggerBase = {
    type: "recurrence";
    interval: number; // e.g. every 2 days, every 2 weeks
    timezone: string; // e.g. "America/New_York". Default to the user's current timezone unless otherwise specified.
    hour?: number; // Optional, 0-23
    minute?: number; // Optional, 0-59
    /**
     * Optional start date for this schedule.
     *
     * This uses the same UTC-floating timestamp representation as {@link RecurrenceConfig.start_date}.
     */
    start_date?: UtcFloatingTimestamp;
    /**
     * Optional end condition for this schedule.
     *
     * This uses the same shape and UTC-floating timestamp representation as {@link RecurrenceConfig.end_condition}.
     */
    end_condition?: {
        type: "date";
        end_at: UtcFloatingTimestamp;
    } | {
        type: "number";
        number_of_occurrences: number;
    };
    /**
     * For database agents: the collection to iterate over when the recurrence fires.
     * If not provided, the agent will not run over the collection.
     */
    collectionId?: RecordId<CollectionTable>;
    /**
     * For database agents: optional view to filter which rows to process.
     * If not provided, all rows in the collection will be processed.
     */
    viewId?: RecordId<CollectionViewTable>;
};

type RecurrenceTriggerFrequencyConfig =
	| {
			frequency: "hour"
	  }
	| {
			frequency: "day"
	  }
	| {
			frequency: "week"
			weekdays?: Array<"MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU"> // Optional, trigger only on certain weekdays
	  }
	| {
			frequency: "month"
			monthly_restriction?:
				| {
						type: "monthdays"
						monthdays: Array<number>
				  }
				| {
						type: "weekdays_in_month"
						/**
						 * Only execute on these weekdays.
						 */
						weekdays: Array<"MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU">
						/**
						 * On these week numbers. Note that "-1" means the last week
						 * of the month.
						 */
						week_numbers: Array<number>
				  }
	  }
	| {
			frequency: "year"
	  }

type NotionListUserConnectionsInput = Record<string, never>

type NotionCreateUserConnectionInput = {
	type: string
	state?: unknown
	permissions?: unknown
}

type ModulesModuleEntry = {
	url: string
	/** Script agent connection name (e.g. "connections.figma.runTool" uses "figma" for mcpServer_figma). */
	connectionKey: string
	integration: AgentIntegration
	connectionStatus: ConnectionStatus
}

type PreconfiguredMcpServerEntry = {
	name: string
	serverUrl?: string
}`,
                t3 = r(969475).object({
                    required: {},
                    optional: {
                        ownedByDatabasePropertyIds: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                re = {
                    recurrence: {
                        state: `
export type RecurrenceTrigger = RecurrenceTriggerBase &
	RecurrenceTriggerFrequencyConfig`,
                        stateValidator: r(969475).union([r(969475).object({
                            required: {
                                frequency: r(969475).literal("day"),
                                interval: r(969475).number(),
                                timezone: r(969475).string(),
                                type: r(969475).literal("recurrence")
                            },
                            optional: {
                                collectionId: r(969475).uuid(),
                                end_condition: r(969475).union([r(969475).object({
                                    required: {
                                        end_at: tX(),
                                        type: r(969475).literal("date")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        number_of_occurrences: r(969475).number(),
                                        type: r(969475).literal("number")
                                    },
                                    optional: {},
                                    exact: !0
                                })]),
                                hour: r(969475).number(),
                                minute: r(969475).number(),
                                scheduleId: r(969475).string(),
                                start_date: tX(),
                                viewId: r(969475).uuid()
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                frequency: r(969475).literal("hour"),
                                interval: r(969475).number(),
                                timezone: r(969475).string(),
                                type: r(969475).literal("recurrence")
                            },
                            optional: {
                                collectionId: r(969475).uuid(),
                                end_condition: r(969475).union([r(969475).object({
                                    required: {
                                        end_at: tX(),
                                        type: r(969475).literal("date")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        number_of_occurrences: r(969475).number(),
                                        type: r(969475).literal("number")
                                    },
                                    optional: {},
                                    exact: !0
                                })]),
                                hour: r(969475).number(),
                                minute: r(969475).number(),
                                scheduleId: r(969475).string(),
                                start_date: tX(),
                                viewId: r(969475).uuid()
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                frequency: r(969475).literal("month"),
                                interval: r(969475).number(),
                                timezone: r(969475).string(),
                                type: r(969475).literal("recurrence")
                            },
                            optional: {
                                collectionId: r(969475).uuid(),
                                end_condition: r(969475).union([r(969475).object({
                                    required: {
                                        end_at: tX(),
                                        type: r(969475).literal("date")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        number_of_occurrences: r(969475).number(),
                                        type: r(969475).literal("number")
                                    },
                                    optional: {},
                                    exact: !0
                                })]),
                                hour: r(969475).number(),
                                minute: r(969475).number(),
                                monthly_restriction: r(969475).union([r(969475).object({
                                    required: {
                                        monthdays: r(969475).array(r(969475).number()),
                                        type: r(969475).literal("monthdays")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("weekdays_in_month"),
                                        week_numbers: r(969475).array(r(969475).number()),
                                        weekdays: r(969475).array(r(969475).literals("FR", "MO", "SA", "SU", "TH", "TU", "WE"))
                                    },
                                    optional: {},
                                    exact: !0
                                })]),
                                scheduleId: r(969475).string(),
                                start_date: tX(),
                                viewId: r(969475).uuid()
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                frequency: r(969475).literal("week"),
                                interval: r(969475).number(),
                                timezone: r(969475).string(),
                                type: r(969475).literal("recurrence")
                            },
                            optional: {
                                collectionId: r(969475).uuid(),
                                end_condition: r(969475).union([r(969475).object({
                                    required: {
                                        end_at: tX(),
                                        type: r(969475).literal("date")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        number_of_occurrences: r(969475).number(),
                                        type: r(969475).literal("number")
                                    },
                                    optional: {},
                                    exact: !0
                                })]),
                                hour: r(969475).number(),
                                minute: r(969475).number(),
                                scheduleId: r(969475).string(),
                                start_date: tX(),
                                viewId: r(969475).uuid(),
                                weekdays: r(969475).array(r(969475).literals("FR", "MO", "SA", "SU", "TH", "TU", "WE"))
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                frequency: r(969475).literal("year"),
                                interval: r(969475).number(),
                                timezone: r(969475).string(),
                                type: r(969475).literal("recurrence")
                            },
                            optional: {
                                collectionId: r(969475).uuid(),
                                end_condition: r(969475).union([r(969475).object({
                                    required: {
                                        end_at: tX(),
                                        type: r(969475).literal("date")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        number_of_occurrences: r(969475).number(),
                                        type: r(969475).literal("number")
                                    },
                                    optional: {},
                                    exact: !0
                                })]),
                                hour: r(969475).number(),
                                minute: r(969475).number(),
                                scheduleId: r(969475).string(),
                                start_date: tX(),
                                viewId: r(969475).uuid()
                            },
                            exact: !0
                        })])
                    },
                    "notion.page.discussion.comment.added": {
                        state: `
type: "notion.page.discussion.comment.added"
collectionId?: string // UUID of the collection/database`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("notion.page.discussion.comment.added")
                            },
                            optional: {
                                collectionId: r(969475).string()
                            },
                            exact: !0
                        })
                    },
                    "notion.page.created": {
                        state: `
type: "notion.page.created"
collectionId?: string // UUID of the collection/database
viewId?: string // Optional UUID of the collection view
propertyFilters?: AutomationEventConfiguration["pagePropertiesEdited"]
debounceTimeoutSeconds?: number`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("notion.page.created")
                            },
                            optional: {
                                collectionId: r(969475).string(),
                                debounceTimeoutSeconds: r(969475).number(),
                                propertyFilters: r(969475).union([r(969475).object({
                                    required: {
                                        type: r(969475).literal("all")
                                    },
                                    optional: {
                                        all: r(969475).array(r(969475).object({
                                            required: {
                                                filter: r(969475).union([r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_not_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("string_has_no_alphabet_prefix")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("checkbox_is", "checkbox_is_not"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0)])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is", "date_is_after", "date_is_before", "date_is_on_or_after", "date_is_on_or_before"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        type: r(969475).literal("date")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        start_time: r(969475).string(),
                                                                        time_zone: r(969475).string(),
                                                                        type: r(969475).literal("datetime")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literals("hour", "minute"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("today")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("tomorrow")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("yesterday")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is_relative_to", "date_is_within"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                count: r(969475).number(),
                                                                direction: r(969475).literals("future", "past"),
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("custom")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("daterange")
                                                                    },
                                                                    optional: {
                                                                        end_date: r(969475).string(),
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })]),
                                                                        start_date: r(969475).string()
                                                                    },
                                                                    exact: !0
                                                                }))
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("surrounding")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("this_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_contains", "enum_contains_all", "enum_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("number_does_not_equal", "number_equals", "number_greater_than", "number_greater_than_or_equal_to", "number_less_than", "number_less_than_or_equal_to"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).number())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("person_contains", "person_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("changes_to_any")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("relation_contains", "relation_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_is", "enum_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("status_is", "status_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                })]),
                                                property: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }))
                                    },
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("any")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("none")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("some")
                                    },
                                    optional: {
                                        some: r(969475).array(r(969475).object({
                                            required: {
                                                filter: r(969475).union([r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_not_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("string_has_no_alphabet_prefix")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("checkbox_is", "checkbox_is_not"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0)])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is", "date_is_after", "date_is_before", "date_is_on_or_after", "date_is_on_or_before"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        type: r(969475).literal("date")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        start_time: r(969475).string(),
                                                                        time_zone: r(969475).string(),
                                                                        type: r(969475).literal("datetime")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literals("hour", "minute"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("today")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("tomorrow")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("yesterday")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is_relative_to", "date_is_within"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                count: r(969475).number(),
                                                                direction: r(969475).literals("future", "past"),
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("custom")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("daterange")
                                                                    },
                                                                    optional: {
                                                                        end_date: r(969475).string(),
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })]),
                                                                        start_date: r(969475).string()
                                                                    },
                                                                    exact: !0
                                                                }))
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("surrounding")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("this_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_contains", "enum_contains_all", "enum_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("number_does_not_equal", "number_equals", "number_greater_than", "number_greater_than_or_equal_to", "number_less_than", "number_less_than_or_equal_to"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).number())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("person_contains", "person_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("changes_to_any")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("relation_contains", "relation_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_is", "enum_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("status_is", "status_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                })]),
                                                property: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }))
                                    },
                                    exact: !0
                                })]),
                                viewId: r(969475).string()
                            },
                            exact: !0
                        })
                    },
                    "notion.page.updated": {
                        state: `
type: "notion.page.updated"
collectionId?: string // UUID of the collection/database
propertyIds?: string[] // Optional array of property URLs or names to watch
shouldIgnorePageContentUpdates?: boolean
debounceTimeoutSeconds?: number
propertyFilters?: AutomationEventConfiguration["pagePropertiesEdited"]`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("notion.page.updated")
                            },
                            optional: {
                                collectionId: r(969475).string(),
                                debounceTimeoutSeconds: r(969475).number(),
                                propertyFilters: r(969475).union([r(969475).object({
                                    required: {
                                        type: r(969475).literal("all")
                                    },
                                    optional: {
                                        all: r(969475).array(r(969475).object({
                                            required: {
                                                filter: r(969475).union([r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_not_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("string_has_no_alphabet_prefix")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("checkbox_is", "checkbox_is_not"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0)])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is", "date_is_after", "date_is_before", "date_is_on_or_after", "date_is_on_or_before"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        type: r(969475).literal("date")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        start_time: r(969475).string(),
                                                                        time_zone: r(969475).string(),
                                                                        type: r(969475).literal("datetime")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literals("hour", "minute"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("today")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("tomorrow")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("yesterday")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is_relative_to", "date_is_within"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                count: r(969475).number(),
                                                                direction: r(969475).literals("future", "past"),
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("custom")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("daterange")
                                                                    },
                                                                    optional: {
                                                                        end_date: r(969475).string(),
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })]),
                                                                        start_date: r(969475).string()
                                                                    },
                                                                    exact: !0
                                                                }))
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("surrounding")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("this_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_contains", "enum_contains_all", "enum_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("number_does_not_equal", "number_equals", "number_greater_than", "number_greater_than_or_equal_to", "number_less_than", "number_less_than_or_equal_to"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).number())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("person_contains", "person_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("changes_to_any")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("relation_contains", "relation_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_is", "enum_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("status_is", "status_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                })]),
                                                property: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }))
                                    },
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("any")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("none")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("some")
                                    },
                                    optional: {
                                        some: r(969475).array(r(969475).object({
                                            required: {
                                                filter: r(969475).union([r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_not_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("string_has_no_alphabet_prefix")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("checkbox_is", "checkbox_is_not"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0)])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is", "date_is_after", "date_is_before", "date_is_on_or_after", "date_is_on_or_before"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        type: r(969475).literal("date")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        start_time: r(969475).string(),
                                                                        time_zone: r(969475).string(),
                                                                        type: r(969475).literal("datetime")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literals("hour", "minute"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("today")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("tomorrow")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("yesterday")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is_relative_to", "date_is_within"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                count: r(969475).number(),
                                                                direction: r(969475).literals("future", "past"),
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("custom")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("daterange")
                                                                    },
                                                                    optional: {
                                                                        end_date: r(969475).string(),
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })]),
                                                                        start_date: r(969475).string()
                                                                    },
                                                                    exact: !0
                                                                }))
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("surrounding")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("this_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_contains", "enum_contains_all", "enum_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("number_does_not_equal", "number_equals", "number_greater_than", "number_greater_than_or_equal_to", "number_less_than", "number_less_than_or_equal_to"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).number())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("person_contains", "person_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("changes_to_any")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("relation_contains", "relation_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_is", "enum_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("status_is", "status_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                })]),
                                                property: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }))
                                    },
                                    exact: !0
                                })]),
                                propertyIds: r(969475).array(r(969475).string()),
                                shouldIgnorePageContentUpdates: r(969475).boolean()
                            },
                            exact: !0
                        })
                    },
                    "notion.page.deleted": {
                        state: `
type: "notion.page.deleted"
collectionId?: string // UUID of the collection/database
viewId?: string // Optional UUID of the collection view
propertyFilters?: AutomationEventConfiguration["pagePropertiesEdited"]`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("notion.page.deleted")
                            },
                            optional: {
                                collectionId: r(969475).string(),
                                propertyFilters: r(969475).union([r(969475).object({
                                    required: {
                                        type: r(969475).literal("all")
                                    },
                                    optional: {
                                        all: r(969475).array(r(969475).object({
                                            required: {
                                                filter: r(969475).union([r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_not_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("string_has_no_alphabet_prefix")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("checkbox_is", "checkbox_is_not"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0)])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is", "date_is_after", "date_is_before", "date_is_on_or_after", "date_is_on_or_before"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        type: r(969475).literal("date")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        start_time: r(969475).string(),
                                                                        time_zone: r(969475).string(),
                                                                        type: r(969475).literal("datetime")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literals("hour", "minute"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("today")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("tomorrow")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("yesterday")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is_relative_to", "date_is_within"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                count: r(969475).number(),
                                                                direction: r(969475).literals("future", "past"),
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("custom")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("daterange")
                                                                    },
                                                                    optional: {
                                                                        end_date: r(969475).string(),
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })]),
                                                                        start_date: r(969475).string()
                                                                    },
                                                                    exact: !0
                                                                }))
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("surrounding")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("this_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_contains", "enum_contains_all", "enum_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("number_does_not_equal", "number_equals", "number_greater_than", "number_greater_than_or_equal_to", "number_less_than", "number_less_than_or_equal_to"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).number())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("person_contains", "person_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("changes_to_any")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("relation_contains", "relation_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_is", "enum_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("status_is", "status_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                })]),
                                                property: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }))
                                    },
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("any")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("none")
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("some")
                                    },
                                    optional: {
                                        some: r(969475).array(r(969475).object({
                                            required: {
                                                filter: r(969475).union([r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("is_not_empty")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("string_has_no_alphabet_prefix")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("checkbox_is", "checkbox_is_not"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0)])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is", "date_is_after", "date_is_before", "date_is_on_or_after", "date_is_on_or_before"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([r(969475).isUndefined(), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        type: r(969475).literal("date")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        start_date: r(969475).string(),
                                                                        start_time: r(969475).string(),
                                                                        time_zone: r(969475).string(),
                                                                        type: r(969475).literal("datetime")
                                                                    },
                                                                    optional: {
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literals("hour", "minute"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })])
                                                                    },
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_month_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_ago")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("one_week_from_now")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("today")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("tomorrow")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("yesterday")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("date_is_relative_to", "date_is_within"),
                                                        value: r(969475).union([r(969475).object({
                                                            required: {
                                                                count: r(969475).number(),
                                                                direction: r(969475).literals("future", "past"),
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("custom")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("daterange")
                                                                    },
                                                                    optional: {
                                                                        end_date: r(969475).string(),
                                                                        reminder: r(969475).union([r(969475).object({
                                                                            required: {
                                                                                time: r(969475).string(),
                                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                                value: r(969475).number()
                                                                            },
                                                                            optional: {
                                                                                defaultTimeZone: r(969475).string()
                                                                            },
                                                                            exact: !0
                                                                        }), r(969475).object({
                                                                            required: {
                                                                                unit: r(969475).literal("none")
                                                                            },
                                                                            optional: {},
                                                                            exact: !0
                                                                        })]),
                                                                        start_date: r(969475).string()
                                                                    },
                                                                    exact: !0
                                                                }))
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                unit: r(969475).literals("day", "month", "week", "year"),
                                                                value: r(969475).literal("surrounding")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_next_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_month")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("the_past_year")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("this_week")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {
                                                        use_end: r(969475).boolean()
                                                    },
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_contains", "enum_contains_all", "enum_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("number_does_not_equal", "number_equals", "number_greater_than", "number_greater_than_or_equal_to", "number_less_than", "number_less_than_or_equal_to"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).number())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("person_contains", "person_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).union([(0, r(994818).VR)("bot"), (0, r(994818).VR)("notion_user"), (0, r(994818).IK)("space_permission_group"), r(969475).isUndefined()])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).literal("me")
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literal("changes_to_any")
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("relation_contains", "relation_does_not_contain"),
                                                        value: r(969475).union([r(969475).array(r(969475).union([r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("relative"),
                                                                value: r(969475).union([r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("builtin"),
                                                                        variable: r(969475).literals("current", "last", "next")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                }), r(969475).object({
                                                                    required: {
                                                                        type: r(969475).literal("current_page_in_related_collection")
                                                                    },
                                                                    optional: {},
                                                                    exact: !0
                                                                })])
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        }), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("enum_is", "enum_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("status_is", "status_is_not"),
                                                        value: r(969475).union([r(969475).array(r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })), r(969475).object({
                                                            required: {
                                                                type: r(969475).literals("is_group", "is_option"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })])
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                }), r(969475).object({
                                                    required: {
                                                        operator: r(969475).literals("string_contains", "string_does_not_contain", "string_ends_with", "string_is", "string_is_not", "string_starts_with"),
                                                        value: r(969475).object({
                                                            required: {
                                                                type: r(969475).literal("exact"),
                                                                value: r(969475).undefinable(r(969475).string())
                                                            },
                                                            optional: {},
                                                            exact: !0
                                                        })
                                                    },
                                                    optional: {},
                                                    exact: !0
                                                })]),
                                                property: r(969475).string()
                                            },
                                            optional: {},
                                            exact: !0
                                        }))
                                    },
                                    exact: !0
                                })]),
                                viewId: r(969475).string()
                            },
                            exact: !0
                        })
                    },
                    "notion.database.agent.updated": {
                        state: `
type: "notion.database.agent.updated"
collectionId?: RecordId<CollectionTable>`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("notion.database.agent.updated")
                            },
                            optional: {
                                collectionId: r(969475).uuid()
                            },
                            exact: !0
                        })
                    },
                    "notion.button.pressed": {
                        state: `
type: "notion.button.pressed"
collectionId?: string`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("notion.button.pressed")
                            },
                            optional: {
                                collectionId: r(969475).string()
                            },
                            exact: !0
                        })
                    },
                    "notion.agent.mentioned": {
                        state: 'type: "notion.agent.mentioned"',
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("notion.agent.mentioned")
                            },
                            optional: {},
                            exact: !0
                        })
                    }
                },
                rt = r(969475).object({
                    required: {
                        bodyContent: r(969475).string(),
                        headerContent: r(969475).string(),
                        sendToWorkflowOwner: r(969475).boolean()
                    },
                    optional: {
                        userUrl: r(969475).string()
                    },
                    exact: !0
                }),
                rr = r(969475).object({
                    required: {
                        pageUrl: r(969475).string()
                    },
                    optional: {
                        includeResolved: r(969475).boolean()
                    },
                    exact: !0
                }),
                ra = r(969475).object({
                    required: {
                        discussionUrl: r(969475).string(),
                        text: r(969475).string()
                    },
                    optional: {
                        attachedFileIds: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                ri = r(969475).object({
                    required: {
                        daysFilter: r(969475).literals("all_time", "last_28_days", "last_365_days", "last_7_days", "last_90_days")
                    },
                    optional: {},
                    exact: !0
                }),
                ro = r(969475).object({
                    required: {
                        daysFilter: r(969475).literals("all_time", "last_28_days", "last_365_days", "last_7_days", "last_90_days")
                    },
                    optional: {},
                    exact: !0
                }),
                rn = r(969475).object({
                    required: {
                        activeWindow: r(969475).literals("last_28_days", "last_7_days", "last_90_days")
                    },
                    optional: {
                        days: r(969475).number()
                    },
                    exact: !0
                }),
                rl = r(969475).object({
                    required: {
                        timeRange: r(969475).literals("all_time", "last_28_days", "last_365_days", "last_7_days", "last_90_days")
                    },
                    optional: {
                        sort: r(969475).object({
                            required: {
                                direction: r(969475).literals("asc", "desc"),
                                field: r(969475).literals("last_active", "page_edits", "page_views")
                            },
                            optional: {},
                            exact: !0
                        })
                    },
                    exact: !0
                }),
                rs = r(969475).object({
                    required: {
                        sort: r(969475).object({
                            required: {
                                direction: r(969475).literals("asc", "desc"),
                                field: r(969475).literals("pageViews", "uniquePageViews")
                            },
                            optional: {},
                            exact: !0
                        }),
                        timeRange: r(969475).literals("all_time", "last_28_days", "last_365_days", "last_7_days", "last_90_days")
                    },
                    optional: {
                        cursor: r(969475).string(),
                        filters: r(969475).object({
                            required: {},
                            optional: {
                                createdBy: r(969475).array(r(969475).string()),
                                createdTime: r(969475).object({
                                    required: {},
                                    optional: {
                                        ending: r(969475).string(),
                                        starting: r(969475).string()
                                    },
                                    exact: !0
                                }),
                                inTeamspaces: r(969475).array(r(969475).string()),
                                lastEditedTime: r(969475).object({
                                    required: {},
                                    optional: {
                                        ending: r(969475).string(),
                                        starting: r(969475).string()
                                    },
                                    exact: !0
                                }),
                                titleQuery: r(969475).string()
                            },
                            exact: !0
                        })
                    },
                    exact: !0
                }),
                rc = r(969475).object({
                    required: {
                        pageUrl: r(969475).string()
                    },
                    optional: {
                        days: r(969475).number()
                    },
                    exact: !0
                }),
                ru = r(969475).object({
                    required: {
                        limit: r(969475).number(),
                        pageUrl: r(969475).string()
                    },
                    optional: {
                        includeTotalCount: r(969475).boolean(),
                        sinceTimestampMs: r(969475).number()
                    },
                    exact: !0
                }),
                rd = r(969475).undefinable(r(969475).object({
                    required: {},
                    optional: {
                        cursor: r(969475).string(),
                        includeArchived: r(969475).boolean(),
                        limit: r(969475).number(),
                        query: r(969475).string()
                    },
                    exact: !0
                })),
                rp = r(969475).object({
                    required: {
                        teamspaceUrl: r(969475).string()
                    },
                    optional: {
                        cursor: r(969475).string(),
                        limit: r(969475).number()
                    },
                    exact: !0
                }),
                rg = r(969475).object({
                    required: {
                        dataSources: r(969475).record(r(969475).string(), t8),
                        name: r(969475).string(),
                        views: r(969475).record(r(969475).string(), t$)
                    },
                    optional: {
                        icon: r(969475).string(),
                        inline: r(969475).boolean(),
                        layouts: r(969475).record(r(969475).string(), t0),
                        parent: t5,
                        replacesBlankParentPage: r(969475).boolean()
                    },
                    exact: !0
                }),
                rm = r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rb = r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                ry = r(969475).object({
                    required: {},
                    optional: {
                        description: r(969475).string(),
                        icon: r(969475).union([r(969475).object({
                            required: {
                                color: r(969475).string(),
                                shape: r(969475).string(),
                                type: r(969475).literal("agent_icon")
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                emoji: r(969475).string(),
                                type: r(969475).literal("emoji")
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("url"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })]),
                        integrations: r(969475).record(r(969475).string(), r(969475).object({
                            required: {
                                name: r(969475).string(),
                                type: r(969475).string()
                            },
                            optional: {
                                permissions: r(969475).array(r(969475).unknown()),
                                state: r(969475).unknown()
                            },
                            exact: !0
                        })),
                        name: r(969475).string(),
                        scripts: r(969475).record(r(969475).string(), r(969475).object({
                            required: {
                                key: r(969475).string(),
                                name: r(969475).string(),
                                value: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })),
                        triggers: r(969475).record(r(969475).string(), r(969475).object({
                            required: {
                                enabled: r(969475).boolean(),
                                state: r(969475).unknown()
                            },
                            optional: {
                                integrationUrl: r(969475).string(),
                                scriptUrl: r(969475).string()
                            },
                            exact: !0
                        }))
                    },
                    exact: !0
                }),
                r_ = r(969475).object({
                    required: {
                        dataSourceUrl: r(969475).string(),
                        propertyNames: r(969475).array(r(969475).string())
                    },
                    optional: {
                        description: r(969475).string(),
                        icon: r(969475).union([r(969475).object({
                            required: {
                                color: r(969475).string(),
                                shape: r(969475).string(),
                                type: r(969475).literal("agent_icon")
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                emoji: r(969475).string(),
                                type: r(969475).literal("emoji")
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("url"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })]),
                        isLite: r(969475).boolean(),
                        name: r(969475).string()
                    },
                    exact: !0
                }),
                rh = r(969475).object({
                    required: {
                        databaseUrl: r(969475).string(),
                        edits: r(969475).array(r(969475).union([r(969475).object({
                            required: {
                                command: r(969475).literal("delete"),
                                path: r(969475).array(r(969475).string())
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                command: r(969475).literal("replaceString"),
                                newStr: r(969475).string(),
                                numOccurrences: r(969475).number(),
                                path: r(969475).array(r(969475).string()),
                                replaceStr: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                command: r(969475).literal("set"),
                                path: r(969475).array(r(969475).string()),
                                value: r(969475).unknown()
                            },
                            optional: {},
                            exact: !0
                        })]))
                    },
                    optional: {},
                    exact: !0
                }),
                rf = r(969475).object({
                    required: {
                        sourceDataSourceUrl: r(969475).string(),
                        sourcePropertyName: r(969475).string(),
                        targetDataSourceUrl: r(969475).string(),
                        targetPropertyName: r(969475).string()
                    },
                    optional: {
                        limit: r(969475).literal(1),
                        sourcePropertyDescription: r(969475).string(),
                        targetPropertyDescription: r(969475).string()
                    },
                    exact: !0
                }),
                rx = r(969475).object({
                    required: {
                        agentUrl: r(969475).string(),
                        edits: r(969475).array(r(969475).union([r(969475).object({
                            required: {
                                command: r(969475).literal("delete"),
                                path: r(969475).array(r(969475).string())
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                command: r(969475).literal("replaceString"),
                                newStr: r(969475).string(),
                                numOccurrences: r(969475).number(),
                                path: r(969475).array(r(969475).string()),
                                replaceStr: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                command: r(969475).literal("set"),
                                path: r(969475).array(r(969475).string()),
                                value: r(969475).unknown()
                            },
                            optional: {},
                            exact: !0
                        })]))
                    },
                    optional: {},
                    exact: !0
                }),
                rq = r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rj = r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rv = r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rk = r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rw = r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rI = r(969475).object({
                    required: {
                        parent: r(969475).union([r(969475).object({
                            required: {
                                type: r(969475).literal("agent"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("dataSource"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("teamspace"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("user"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })])
                    },
                    optional: {
                        asTemplate: r(969475).boolean(),
                        content: r(969475).string(),
                        icon: r(969475).nullable(r(969475).string()),
                        pageTemplate: r(969475).string(),
                        properties: r(969475).record(r(969475).string(), r(969475).union([r(969475).array(r(969475).string()), r(969475).isNull(), r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0), r(969475).number(), r(969475).string()]))
                    },
                    exact: !0
                }),
                rT = r(969475).object({
                    required: {
                        parent: r(969475).object({
                            required: {
                                type: r(969475).literal("dataSource"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })
                    },
                    optional: {
                        content: r(969475).string(),
                        icon: r(969475).nullable(r(969475).string()),
                        properties: r(969475).record(r(969475).string(), r(969475).union([r(969475).array(r(969475).string()), r(969475).isNull(), r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0), r(969475).number(), r(969475).string()]))
                    },
                    exact: !0
                }),
                rS = r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {
                        contentPatch: r(969475).string(),
                        contentReplace: r(969475).string(),
                        contentUpdates: r(969475).array(r(969475).object({
                            required: {
                                newStr: r(969475).string()
                            },
                            optional: {
                                oldStr: r(969475).string(),
                                replaceAllMatches: r(969475).boolean()
                            },
                            exact: !0
                        })),
                        icon: r(969475).nullable(r(969475).string()),
                        parent: r(969475).union([r(969475).object({
                            required: {
                                type: r(969475).literal("agent"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("dataSource"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("page"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("teamspace"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("user"),
                                url: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        })]),
                        propertyUpdates: r(969475).record(r(969475).string(), r(969475).union([r(969475).array(r(969475).string()), r(969475).isNull(), r(969475).isUndefined(), r(969475).literal(!1), r(969475).literal(!0), r(969475).number(), r(969475).string()])),
                        verification: r(969475).object({
                            required: {
                                status: r(969475).literals("none", "verified")
                            },
                            optional: {
                                expirationDays: r(969475).number()
                            },
                            exact: !0
                        })
                    },
                    exact: !0
                }),
                rR = r(969475).object({
                    required: {
                        item: r(969475).union([r(969475).object({
                            required: {
                                accessLevel: r(969475).literals("can_comment", "can_edit", "can_edit_content", "can_view", "full_access", "no_access"),
                                type: r(969475).literal("public")
                            },
                            optional: {
                                publicOptions: r(969475).object({
                                    required: {},
                                    optional: {
                                        allowDuplicate: r(969475).boolean(),
                                        allowSearchEngineIndexing: r(969475).boolean(),
                                        expirationTimestamp: r(969475).number(),
                                        isPublicShareLink: r(969475).boolean(),
                                        isSite: r(969475).boolean()
                                    },
                                    exact: !0
                                })
                            },
                            exact: !0
                        }), r(969475).object({
                            required: {
                                accessLevel: r(969475).literals("can_comment", "can_edit", "can_edit_content", "can_view", "full_access", "no_access"),
                                type: r(969475).literal("user"),
                                userUrl: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                accessLevel: r(969475).literals("can_comment", "can_edit", "can_edit_content", "can_view", "full_access", "no_access"),
                                type: r(969475).literal("workspace")
                            },
                            optional: {},
                            exact: !0
                        })]),
                        url: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rC = r(969475).object({
                    required: {
                        pageUrls: r(969475).array(r(969475).string())
                    },
                    optional: {},
                    exact: !0
                }),
                rA = r(969475).object({
                    required: {
                        pageUrls: r(969475).array(r(969475).string())
                    },
                    optional: {},
                    exact: !0
                }),
                rP = r(969475).object({
                    required: {
                        pageUrls: r(969475).array(r(969475).string())
                    },
                    optional: {},
                    exact: !0
                }),
                rM = r(969475).object({
                    required: {
                        databaseUrls: r(969475).array(r(969475).string())
                    },
                    optional: {},
                    exact: !0
                }),
                rU = r(969475).object({
                    required: {
                        dataSourceUrls: r(969475).array(r(969475).string()),
                        query: r(969475).string()
                    },
                    optional: {
                        params: r(969475).array(r(969475).union([r(969475).isNull(), r(969475).literal(!1), r(969475).literal(!0), r(969475).number(), r(969475).string()]))
                    },
                    exact: !0
                }),
                rD = r(969475).object({
                    required: {
                        dataSourceUrl: r(969475).string()
                    },
                    optional: {
                        aggregation: t6,
                        filter: t4,
                        groupBy: t9,
                        limit: r(969475).number(),
                        rowsPerGroup: r(969475).number(),
                        sort: r(969475).array(r(969475).object({
                            required: {
                                direction: r(969475).literals("ascending", "descending"),
                                property: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }))
                    },
                    exact: !0
                }),
                rL = r(969475).object({
                    required: {
                        viewUrl: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rN = r(969475).object({
                    required: {},
                    optional: {
                        filter: r(969475).unknown()
                    },
                    exact: !0
                }),
                rE = r(969475).object({
                    required: {},
                    optional: {
                        agentUrl: r(969475).string(),
                        limit: r(969475).number(),
                        timeEnd: r(969475).string(),
                        timeStart: r(969475).string()
                    },
                    exact: !0
                }),
                rO = r(969475).object({
                    required: {
                        instructions: r(969475).string(),
                        threadUrl: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rF = r(969475).object({
                    required: {
                        instructions: r(969475).string()
                    },
                    optional: {
                        agentUrl: r(969475).string(),
                        threadUrl: r(969475).string()
                    },
                    exact: !0
                }),
                rG = r(969475).object({
                    required: {
                        name: r(969475).string(),
                        prompt: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rV = r(969475).object({
                    required: {
                        fields: r(969475).array(r(969475).object({
                            required: {
                                key: r(969475).string()
                            },
                            optional: {
                                description: r(969475).string(),
                                label: r(969475).string()
                            },
                            exact: !0
                        })),
                        rows: r(969475).array(r(969475).object({
                            required: {
                                label: r(969475).string(),
                                prompt: r(969475).string()
                            },
                            optional: {
                                id: r(969475).string()
                            },
                            exact: !0
                        }))
                    },
                    optional: {
                        instructions: r(969475).string(),
                        maxConcurrency: r(969475).number(),
                        rowLabelHeader: r(969475).string()
                    },
                    exact: !0
                }),
                rz = r(969475).object({
                    required: {
                        pageUrl: r(969475).string(),
                        propertyName: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rW = r(969475).object({
                    required: {},
                    optional: {
                        created_by_urls: r(969475).array(r(969475).string()),
                        keywords: r(969475).string(),
                        sort: r(969475).literals("created", "lastEdited", "relevance")
                    },
                    exact: !0
                }),
                rB = r(969475).object({
                    required: {
                        query: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rH = r(969475).object({
                    required: {
                        meetingNoteUrl: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                rQ = r(969475).object({
                    required: {
                        email: r(969475).string()
                    },
                    optional: {
                        limit: r(969475).number(),
                        lookback: r(969475).string()
                    },
                    exact: !0
                }),
                rZ = r(969475).object({
                    required: {},
                    optional: {}
                }),
                rJ = r(969475).object({
                    required: {
                        type: r(969475).string()
                    },
                    optional: {
                        permissions: r(969475).unknown(),
                        state: r(969475).unknown()
                    },
                    exact: !0
                }),
                rK = {
                    "notion.sendNotification": `
/*
		Send a notification to a user within Notion using the in-app Notion notification system
	*/
	sendNotification(args: {
		bodyContent: string
		headerContent: string
		userUrl?: string
		sendToWorkflowOwner: boolean
	}): Promise<NotionEffectResult<NotificationMessage>>`,
                    "notion.getPageDiscussions": `
/*
		Gets all discussions for a page. Pages can have multiple discussions, some of which may be resolved.
	*/
	getPageDiscussions(args: {
		pageUrl: string // The URL of the page to get discussions for.
		includeResolved?: boolean // Whether to include resolved discussions.
	}): Promise<NotionEffectResult<Array<NotionDiscussion>>>`,
                    "notion.addCommentToDiscussion": `
/*
		Adds a comment to an existing discussion.
	*/
	addCommentToDiscussion(args: {
		discussionUrl: string // The URL or ID of the discussion to add a comment to. Can be a page URL to leave a page discussion comment.
		text: string // Inline-only markdown text. Only supports inline elements (bold, italics, code) but not blocks (headers, lists).
		attachedFileIds?: Array<string> // The file IDs of any files to attach to the comment.
	}): Promise<NotionEffectResult<NotionComment>>`,
                    "notion.getUserEngagementAnalytics": `
/*
	Shows a workspace-wide usage summary: active people plus the most-viewed teamspaces and members.
	Only available to workspace owners/admins.
	*/
	getUserEngagementAnalytics(args: {
		daysFilter: WorkspaceAnalyticsDaysFilter
	}): Promise<
		NotionEffectResult<{
			daysFilter: WorkspaceAnalyticsDaysFilter
			activeMembersCount: number
			previousActiveMembersCount?: number
			activeGuestsCount: number
			previousActiveGuestsCount?: number
			topTeamspaces: Array<{ teamspaceUrl: string; pageViews: number }>
			topViewers: Array<{ userUrl: string; pageViews: number }>
			topEditors: Array<{ userUrl: string; pageEdits: number }>
		}>
	>`,
                    "notion.getContentEngagementAnalytics": `
/*
	Shows a workspace-wide content activity summary (views, unique views, pages created, edits) plus the most-viewed pages.
	Requires access to workspace analytics (availability depends on workspace plan/permissions).
	*/
	getContentEngagementAnalytics(args: {
		daysFilter: WorkspaceAnalyticsDaysFilter
	}): Promise<
		NotionEffectResult<{
			daysFilter: WorkspaceAnalyticsDaysFilter
			pageViews: number
			uniquePageViews: number
			pagesCreated: number
			pageEdits: number
			topPages: Array<{ pageUrl: string; pageViews: number }>
		}>
	>`,
                    "notion.getDailyUsersAnalytics": `
/*
	Shows a day-by-day trend of how many workspace members were active.
	Only available to workspace owners/admins.
	*/
	getDailyUsersAnalytics(args: {
		activeWindow: "last_7_days" | "last_28_days" | "last_90_days"
		days?: number
	}): Promise<
		NotionEffectResult<{
			points: Array<{ ds: string; activeMembers: number }>
		}>
	>`,
                    "notion.listUsersAnalytics": `
/*
	Shows a per-person activity table for the workspace (last active time, views, edits).
	Only available to workspace owners/admins. Views may be missing for people who opted out.
	*/
	listUsersAnalytics(args: {
		timeRange: WorkspaceAnalyticsDaysFilter
		sort?: {
			field: "last_active" | "page_views" | "page_edits"
			direction: "asc" | "desc"
		}
	}): Promise<
		NotionEffectResult<{
			users: Array<{
				userUrl: string
				userSpaceRole: MemberPermissionRole
				lastActiveMs?: number
				pageViews?: number
				pageEdits: number
			}>
		}>
	>`,
                    "notion.listContentAnalytics": `
/*
	Lists the most-viewed pages in the workspace (with audience + views), with optional filters and pagination.
	Requires access to workspace analytics (availability depends on workspace plan/permissions).
	*/
	listContentAnalytics(args: {
		timeRange: WorkspaceAnalyticsDaysFilter
		sort: ContentAnalyticsSort
		filters?: {
			titleQuery?: string
			createdBy?: string[]
			createdTime?: { starting?: string; ending?: string }
			lastEditedTime?: { starting?: string; ending?: string }
			inTeamspaces?: string[]
		}
		cursor?: string
	}): Promise<
		NotionEffectResult<{
			results: Array<{
				pageUrl: string
				pageViews: number
				uniquePageViews: number
				audience: PageAudience
			}>
			nextCursor?: string
		}>
	>`,
                    "notion.getPageAnalyticsTimeSeries": `
/*
	Shows how a specific page’s views changed over time (total and unique).
	*/
	getPageAnalyticsTimeSeries(args: { pageUrl: string; days?: number }): Promise<
		NotionEffectResult<{
			points: Array<{ ds: string; totalViews: number; uniqueViews: number }>
		}>
	>`,
                    "notion.getPageVisitors": `
/*
	Lists people who recently viewed a specific page. You must have edit access to the page to see this.
	*/
	getPageVisitors(args: {
		pageUrl: string
		sinceTimestampMs?: number
		limit: number
		includeTotalCount?: boolean
	}): Promise<
		NotionEffectResult<{
			visitors: Array<{
				userUrl: string
				visitedAtMs: number
				onTrustedDomain?: boolean
			}>
			totalCount?: number
			hasMore?: boolean
		}>
	>`,
                    "notion.listTeamspaces": `
/*
	List teamspaces in the workspace (paginated).
	*/
	listTeamspaces(args?: {
		limit?: number
		cursor?: string
		query?: string
		includeArchived?: boolean
	}): Promise<
		NotionEffectResult<{
			results: Array<{
				url: string
				name: string
				description?: string
				icon?: string
				accessLevel: "default" | "open" | "closed" | "private"
				archived: boolean
			}>
			nextCursor?: string
		}>
	>`,
                    "notion.getTeamspaceTopLevelPagesAndDatabases": `
/*
	List the top-level pages and databases inside a teamspace (paginated).
	*/
	getTeamspaceTopLevelPagesAndDatabases(args: {
		teamspaceUrl: string
		limit?: number
		cursor?: string
	}): Promise<
		NotionEffectResult<{
			results: Array<
				| { type: "page"; url: string; title?: string; icon?: string }
				| { type: "database"; url: string; title?: string; icon?: string }
			>
			nextCursor?: string
		}>
	>`,
                    "notion.createDatabase": `
/*
	Create a database from a JSON configuration and return the resulting JSON configuration.
	Typed loosely for script-agent usage; validated at runtime.
 */
	createDatabase(args: {
		name: string
		dataSources: Record<string, ScriptAgentDataSource>
		views: Record<string, WorkflowView>
		icon?: string
		inline?: boolean
		layouts?: Record<string, WorkflowDatabaseLayout>
		parent?: DatabaseParent
		replacesBlankParentPage?: boolean
	}): Promise<NotionEffectResult<unknown>>`,
                    "notion.loadAgent": `
/*
	Load a custom agent by URL and return its configuration with the linked instructions page.
	*/
	loadAgent(args: LoadAgentArgs): Promise<
		NotionEffectResult<{
			agentUrl: string
			/** Undefined for legacy agents with inline TextValue instructions (no page). */
			instructionsPageUrl: string | undefined
			configuration: AgentConfiguration
		}>
	>`,
                    "notion.loadUser": `
/*
	Load a user by URL and return basic profile information.
	*/
	loadUser(args: { url: string }): Promise<NotionEffectResult<User>>`,
                    "notion.createAgent": `
/*
	Create a custom agent from a JSON configuration and return the resulting configuration.
	Typed loosely for script-agent usage; validated at runtime.
	*/
	createAgent(args: CreateAgentArgs): Promise<
		NotionEffectResult<{
			agentUrl: string
			/** Undefined for legacy agents with inline TextValue instructions (no page). */
			instructionsPageUrl: string | undefined
			configuration: AgentConfiguration
		}>
	>`,
                    "notion.createDatabaseAgent": `
/*
	Create a database agent attached to a specific database.
	*/
	createDatabaseAgent(args: CreateDatabaseAgentArgs): Promise<
		NotionEffectResult<{
			agentUrl: string
			instructionsPageUrl: string
			configuration: AgentConfiguration
		}>
	>`,
                    "notion.updateDatabase": `
/*
	Update a database using JSON edits and return the resulting JSON configuration.
	Typed loosely for script-agent usage; validated at runtime.
 */
	updateDatabase(args: {
		databaseUrl: string
		edits: Array<EditJSONToolEdit>
	}): Promise<NotionEffectResult<unknown>>`,
                    "notion.createTwoWayRelation": `
/*
	Create a new two-way relation between two data sources.
 */
	createTwoWayRelation(
		args: CreateTwoWayRelationArgs,
	): Promise<NotionEffectResult<CreateTwoWayRelationResult>>`,
                    "notion.updateAgent": `
/*
	Update a custom agent using edit-json edits and return the resulting configuration.
	Typed loosely for script-agent usage; validated at runtime.
	*/
	updateAgent(args: UpdateAgentArgs): Promise<
		NotionEffectResult<{
			agentUrl: string
			/** Undefined for legacy agents with inline TextValue instructions (no page). */
			instructionsPageUrl: string | undefined
			configuration: AgentConfiguration
		}>
	>`,
                    "notion.loadDatabase": `
/*
		Load a database configuration by URL and return its schema and views.
	*/
	loadDatabase(args: { url: string }): Promise<
		NotionEffectResult<{
			databaseUrl: string
			configuration: JSONDatabaseConfiguration
		}>
	>`,
                    "notion.loadDataSource": `
/*
	Load a data source (database) by URL and return its schema configuration.
	*/
	loadDataSource(args: { url: string }): Promise<NotionEffectResult<DataSource>>`,
                    "notion.loadPage": `
/*
		Load a page by URL and return its properties and content.
	*/
	loadPage(args: {
		url: string
	}): Promise<NotionEffectResult<LoadPageEffectOutput>>`,
                    "notion.loadPermissions": `
/*
		Load explicit sharing permissions configured on a page/database.
	*/
	loadPermissions(args: {
		url: string
	}): Promise<NotionEffectResult<{ url: string; items: PermissionItem[] }>>`,
                    "notion.viewFileUrl": `
/*
		Return a file URL for viewing in the script agent.
	*/
	viewFileUrl(args: {
		url: string
	}): Promise<EffectResultOrValue<NotionEffectResult<{ url: string }>>>`,
                    "notion.createPage": `
/*
		Create a page under the given parent with optional properties and content.
	*/
	createPage(
		args: CreatePageEffectInput,
	): Promise<NotionEffectResult<LoadPageEffectOutput>>`,
                    "notion.createFactoryTask": `
/*
		Create a factory task under an attached software factory data source.
	*/
	createFactoryTask(
		args: CreateFactoryTaskEffectInput,
	): Promise<NotionEffectResult<FactoryTaskEffectOutput>>`,
                    "notion.updatePage": '\n/*\n		Update a page\'s properties, content, and/or verification status.\n\n		- Prefer updating content via `contentPatch` (safer; requires `agent_update_page_patch`).\n		- `contentPatch` must be a headerless V4A diff patch string (start with `@@` hunks; no `---`/`+++` headers).\n		- `contentReplace` replaces the entire page content with a new markdown string (requires `agent_update_page_patch`).\n		- `contentUpdates` remains supported for legacy callers.\n		- Use verification.status "verified" to mark a page as verified (optionally with expirationDays), or "none" to remove verification.\n	*/\n	updatePage(\n		args: UpdatePageEffectInput,\n	): Promise<NotionEffectResult<UpdatePageEffectOutput>>',
                    "notion.updatePermission": `
/*
	Set or remove a single sharing permission item on a page/database.
	*/
	updatePermission(args: {
		url: string
		item: PermissionItem
	}): Promise<NotionEffectResult<{ url: string; item: PermissionItem }>>`,
                    "notion.deletePages": `
/*
	Delete pages by moving them to trash.
	*/
	deletePages(
		args: DeletePagesArgs,
	): Promise<NotionEffectResult<DeletePagesResult>>`,
                    "notion.archivePages": `
/*
	Archive pages.
	*/
	archivePages(
		args: ArchivePagesArgs,
	): Promise<NotionEffectResult<ArchivePagesResult>>`,
                    "notion.unarchivePages": `
/*
	Unarchive pages.
	*/
	unarchivePages(
		args: UnarchivePagesArgs,
	): Promise<NotionEffectResult<UnarchivePagesResult>>`,
                    "notion.deleteDatabases": `
/*
	Delete databases by moving them to trash.
	*/
	deleteDatabases(
		args: DeleteDatabasesArgs,
	): Promise<NotionEffectResult<DeleteDatabasesResult>>`,
                    "notion.querySql": `
/*
	Run a read-only SQL query across the provided data sources.
	*/
	querySql(args: {
		dataSourceUrls: Array<string>
		query: string
		params?: Array<string | number | boolean | null>
	}): Promise<NotionEffectResult<NotionQueryResult>>`,
                    "notion.queryDataSource": `
/*
	Query a data source with structured filters, sorts, grouping, and aggregations.
	*/
	queryDataSource(args: {
		dataSourceUrl: string
		filter?: WorkflowViewFilter
		sort?: WorkflowViewSorts
		limit?: number
		groupBy?: WorkflowViewGroupBy
		aggregation?: WorkflowChartAggregation
		rowsPerGroup?: number
	}): Promise<NotionEffectResult<NotionQueryDataSourceResult>>`,
                    "notion.queryView": `
/*
	Query a specific database view and return its rows.
	*/
	queryView(args: {
		viewUrl: string
	}): Promise<NotionEffectResult<NotionQueryResult>>`,
                    "notion.queryMeetings": `
/*
	Query the current user's AI meeting notes with optional filter.
	*/
	queryMeetings(args: {
		filter?: unknown
	}): Promise<NotionEffectResult<NotionQueryResult>>`,
                    "notion.queryThreads": `
/*
	List recent agent threads for the current agent with optional time filtering.
	*/
	queryThreads(args: {
		agentUrl?: string
		limit?: number
		timeStart?: string
		timeEnd?: string
	}): Promise<
		NotionEffectResult<{
			threads: Array<{
				url: string
				createdTime: string
				title?: string
			}>
		}>
	>`,
                    "notion.investigateThread": `
/*
	Investigate an existing agent thread transcript.
	*/
	investigateThread(args: { threadUrl: string; instructions: string }): Promise<
		NotionEffectResult<{
			analysis: string
		}>
	>`,
                    "notion.createAndRunThread": `
/*
	Create a new sub-agent thread (or continue an existing one) and return its response.
	*/
	createAndRunThread(args: {
		agentUrl?: string
		threadUrl?: string
		instructions: string
	}): Promise<
		NotionEffectResult<{
			threadUrl: string
			response: string
		}>
	>`,
                    "notion.spawnSubagent": `
/*
	Spawn a subagent to explore a prompt and return its response.
	*/
	spawnSubagent(args: { name: string; prompt: string }): Promise<
		NotionEffectResult<{
			response: string
		}>
	>`,
                    "notion.wideResearch": `
/*
	Run multiple subagents for wide research and return structured results.
	*/
	wideResearch(
		args: WideResearchInput,
	): Promise<NotionEffectResult<WideResearchOutput>>`,
                    "notion.getFormulaValue": `
/*
	Get the computed value of a formula property for a specific page.
	*/
	getFormulaValue(args: {
		pageUrl: string
		propertyName: string
	}): Promise<NotionEffectResult<string | number | boolean | null>>`,
                    "notion.search": `
/*
	Search Notion content.
	*/
	search(args: NotionSearchEffectInput): Promise<
		NotionEffectResult<{
			results: Array<HydratedNotionSearchResult>
		}>
	>`,
                    "notion.searchUsers": `
/*
	Search for a Notion user by name or email.
	*/
	searchUsers(args: { query: string }): Promise<
		NotionEffectResult<{
			users: Array<User>
		}>
	>`,
                    "notion.loadMeetingNoteTranscript": `
/*
		Load a meeting note transcript by URL and return its content.
	*/
	loadMeetingNoteTranscript(args: { meetingNoteUrl: string }): Promise<
		NotionEffectResult<{
			meetingNoteUrl: string
			pageUrl: string
			content: string
		}>
	>`,
                    "notion.getUserActivity": `
/*
	Get a user's recent Notion activity including edits and comments.
	Returns both page edits and comments made by the user, sorted by timestamp (most recent first).
	Use this to see what a person has been working on in Notion.

	Lookback format: "7d" (days), "2w" (weeks), "1m" (months), or "default" (7 days)
	*/
	getUserActivity(args: {
		email: string
		lookback?: string
		limit?: number
	}): Promise<NotionEffectResult<NotionUserActivityResult>>`,
                    "notion.listUserConnections": `
/*
	List configured user connections for the personal agent.
	*/
	listUserConnections(
		args: NotionListUserConnectionsInput,
	): Promise<NotionEffectResult<ListUserConnectionsResult>>`,
                    "notion.createUserConnection": `
/*
	Create a new user connection for the personal agent.
	*/
	createUserConnection(
		args: NotionCreateUserConnectionInput,
	): Promise<NotionEffectResult<ModulesModuleEntry>>`
                };
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("outlook"),
                    type: r(969475).literal("outlook")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    query: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            emailAddress: r(969475).string(),
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    messageId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    messages: r(969475).array(r(969475).object({
                        required: {
                            text: r(969475).string(),
                            timestamp: r(969475).number(),
                            user: r(969475).object({
                                required: {
                                    name: r(969475).string()
                                },
                                optional: {
                                    notionUserId: r(969475).string(),
                                    notionUserName: r(969475).string()
                                },
                                exact: !0
                            })
                        },
                        optional: {
                            subject: r(969475).string()
                        },
                        exact: !0
                    })),
                    subject: r(969475).string(),
                    threadId: r(969475).string(),
                    timestamp: r(969475).number(),
                    type: r(969475).literal("outlook")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    threadId: r(969475).string()
                },
                optional: {
                    maxResults: r(969475).number()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    messages: r(969475).array(r(969475).object({
                        required: {
                            text: r(969475).string(),
                            timestamp: r(969475).number(),
                            user: r(969475).object({
                                required: {
                                    name: r(969475).string()
                                },
                                optional: {
                                    notionUserId: r(969475).string(),
                                    notionUserName: r(969475).string()
                                },
                                exact: !0
                            })
                        },
                        optional: {
                            subject: r(969475).string()
                        },
                        exact: !0
                    })),
                    subject: r(969475).string(),
                    threadId: r(969475).string(),
                    timestamp: r(969475).number(),
                    type: r(969475).literal("outlook")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    maxResults: r(969475).number(),
                    q: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    messages: r(969475).array(r(969475).object({
                        required: {
                            messages: r(969475).array(r(969475).object({
                                required: {
                                    text: r(969475).string(),
                                    timestamp: r(969475).number(),
                                    user: r(969475).object({
                                        required: {
                                            name: r(969475).string()
                                        },
                                        optional: {
                                            notionUserId: r(969475).string(),
                                            notionUserName: r(969475).string()
                                        },
                                        exact: !0
                                    })
                                },
                                optional: {
                                    subject: r(969475).string()
                                },
                                exact: !0
                            })),
                            subject: r(969475).string(),
                            threadId: r(969475).string(),
                            timestamp: r(969475).number(),
                            type: r(969475).literal("outlook")
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            });
            let rY = `
type OutlookPersistedState = {}

type OutlookSearchInput = {
	query: string
}

type OutlookSearchResult = {
	results: Array<OutlookSearchResultItem>
}

type OutlookLoadMessageInput = {
	messageId: string
}

type OutlookLoadMessageResult = LoadOutlookResponse

type OutlookLoadThreadInput = {
	threadId: string
	maxResults?: number
}

type OutlookLoadThreadResult = LoadOutlookResponse

type OutlookQueryInput = {
	q?: string
	maxResults?: number
}

type OutlookQueryResult = {
	messages: Array<LoadOutlookResponse>
}`,
                rX = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                r$ = r(969475).object({
                    required: {
                        query: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                r9 = r(969475).object({
                    required: {
                        messageId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                r4 = r(969475).object({
                    required: {
                        threadId: r(969475).string()
                    },
                    optional: {
                        maxResults: r(969475).number()
                    },
                    exact: !0
                }),
                r6 = r(969475).object({
                    required: {},
                    optional: {
                        maxResults: r(969475).number(),
                        q: r(969475).string()
                    },
                    exact: !0
                });
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("salesforce"),
                    type: r(969475).literal("salesforce")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            objectType: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    query: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    content: r(969475).string(),
                    domain: r(969475).string(),
                    query: r(969475).string(),
                    results: r(969475).array(r(969475).string())
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    targetObject: r(969475).string()
                },
                exact: !0
            });
            let r7 = r(969475).object({
                required: {},
                optional: {
                    Id: r(969475).string(),
                    attributes: r(969475).record(r(969475).string(), r(969475).unknown()),
                    name: r(969475).string()
                },
                exact: !0
            });
            r(969475).object({
                required: {
                    objects: r(969475).array(r(969475).string())
                },
                optional: {
                    sample: r(969475).object({
                        required: {
                            object: r(969475).string()
                        },
                        optional: {
                            sampleRecords: r(969475).array(r(969475).lazy(() => r7))
                        },
                        exact: !0
                    })
                },
                exact: !0
            }), r(969475).object({
                required: {
                    nameOrEmail: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    users: r(969475).array(r(969475).object({
                        required: {
                            email: r(969475).string(),
                            id: r(969475).string(),
                            name: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                exact: !0
            }), r(969475).object({
                required: {
                    objectType: r(969475).string(),
                    recordId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    objectType: r(969475).string(),
                    recordId: r(969475).string(),
                    title: r(969475).string(),
                    type: r(969475).literal("salesforce-record")
                },
                optional: {},
                exact: !0
            });
            let r5 = `
type SalesforcePersistedState = {}

type SalesforceSearchInput = {
	question: string
	keywords?: string
	lookback?: string
}

type SalesforceSearchResult = {
	results: Array<SalesforceSearchResultItem>
}

type SalesforceSoqlQueryInput = {
	query: string
}

type SalesforceSoqlQueryResult = {
	results: string[]
	content: string
	query: string
	domain: string
}

type SalesforceGetSampleInput = {
	targetObject?: string
}

/**
 * Mirrors the runtime shape returned from SalesforceUserRecall#getSampleSalesforceRecords:
 * Partial<SalesforceObjectRecordDTO> with the fields we currently populate.
 */
type SalesforceSampleRecord = {
	Id?: string
	name?: string
	attributes?: Record<string, unknown>
}

type SalesforceGetSampleResult = {
	objects: Array<string>
	sample?: {
		object: string
		sampleRecords?: Array<SalesforceSampleRecord>
	}
}

type SalesforceFindUserIdsInput = {
	nameOrEmail: string
}

type SalesforceFindUserIdsResult = {
	users?: Array<{
		id: string
		name: string
		email: string
	}>
}

type SalesforceLoadRecordInput = {
	recordId: string
	objectType: string
}

type SalesforceLoadRecordResult = LoadSalesforceResponse`,
                r0 = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                r8 = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string()
                    },
                    exact: !0
                }),
                r1 = r(969475).object({
                    required: {
                        query: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                r2 = r(969475).object({
                    required: {},
                    optional: {
                        targetObject: r(969475).string()
                    },
                    exact: !0
                }),
                r3 = r(969475).object({
                    required: {
                        nameOrEmail: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                ae = r(969475).object({
                    required: {
                        objectType: r(969475).string(),
                        recordId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                at = {
                    "salesforce.search": "search(args: SalesforceSearchInput): Promise<SalesforceSearchResult>",
                    "salesforce.soqlQuery": "soqlQuery(args: SalesforceSoqlQueryInput): Promise<SalesforceSoqlQueryResult>",
                    "salesforce.getSample": "getSample(args: SalesforceGetSampleInput): Promise<SalesforceGetSampleResult>",
                    "salesforce.findUserIds": `
findUserIds(
		args: SalesforceFindUserIdsInput,
	): Promise<SalesforceFindUserIdsResult>`,
                    "salesforce.loadRecord": `
loadRecord(
		args: SalesforceLoadRecordInput,
	): Promise<SalesforceLoadRecordResult>`
                };
            r(969475).object({
                required: {},
                optional: {}
            }), r(969475).object({
                required: {
                    type: r(969475).literal("security.threat.detected")
                },
                optional: {
                    agentIds: r(969475).array(r(969475).string()),
                    categoryFilter: r(969475).array(r(969475).literals("content_policy", "dynamic_instructions", "exfiltration", "hidden_instructions", "prompt_injection", "tampering", "worker_modules")),
                    severityFilter: r(969475).array(r(969475).literals("high", "low", "medium"))
                },
                exact: !0
            }), r(969475).object({
                required: {
                    agentId: r(969475).string(),
                    agentName: r(969475).string(),
                    auditEventIds: r(969475).array(r(969475).string()),
                    confidence: r(969475).literals("high", "low", "medium"),
                    details: r(969475).string(),
                    severity: r(969475).literals("high", "low", "medium"),
                    threatCategory: r(969475).literals("content_policy", "dynamic_instructions", "exfiltration", "hidden_instructions", "prompt_injection", "tampering", "worker_modules"),
                    timestamp: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {
                    agentId: r(969475).string(),
                    categoryFilter: r(969475).array(r(969475).literals("content_policy", "dynamic_instructions", "exfiltration", "hidden_instructions", "prompt_injection", "tampering", "worker_modules")),
                    endDate: r(969475).string(),
                    limit: r(969475).number(),
                    severityFilter: r(969475).array(r(969475).literals("high", "low", "medium")),
                    startDate: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    entries: r(969475).array(r(969475).lazy(() => ar)),
                    hasMore: r(969475).boolean(),
                    totalCount: r(969475).number()
                },
                optional: {},
                exact: !0
            });
            let ar = r(969475).object({
                required: {
                    agentId: r(969475).string(),
                    agentName: r(969475).string(),
                    eventType: r(969475).string(),
                    id: r(969475).string(),
                    severity: r(969475).literals("high", "low", "medium"),
                    summary: r(969475).string(),
                    timestamp: r(969475).string()
                },
                optional: {
                    category: r(969475).literals("content_policy", "dynamic_instructions", "exfiltration", "hidden_instructions", "prompt_injection", "tampering", "worker_modules"),
                    confidence: r(969475).literals("high", "low", "medium"),
                    reviewedBy: r(969475).string()
                },
                exact: !0
            });
            r(969475).object({
                required: {
                    entryId: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    agentId: r(969475).string(),
                    agentName: r(969475).string(),
                    details: r(969475).string(),
                    eventType: r(969475).string(),
                    id: r(969475).string(),
                    relatedEventIds: r(969475).array(r(969475).string()),
                    severity: r(969475).literals("high", "low", "medium"),
                    summary: r(969475).string(),
                    timestamp: r(969475).string()
                },
                optional: {
                    category: r(969475).literals("content_policy", "dynamic_instructions", "exfiltration", "hidden_instructions", "prompt_injection", "tampering", "worker_modules"),
                    confidence: r(969475).literals("high", "low", "medium"),
                    matchedRule: r(969475).string(),
                    resolution: r(969475).object({
                        required: {
                            status: r(969475).literals("dismissed", "pending", "resolved")
                        },
                        optional: {
                            notes: r(969475).string(),
                            resolvedAt: r(969475).string(),
                            resolvedBy: r(969475).string()
                        },
                        exact: !0
                    }),
                    reviewedBy: r(969475).string()
                },
                exact: !0
            });
            let aa = `
type SecurityPersistedState = Record<string, never>

/**
 * State for the "security.threat.detected" trigger.
 * Configures which severity levels and categories to monitor.
 */
type SecurityThreatDetectedTrigger = {
	type: "security.threat.detected"
	/** Severity levels to alert on. If empty or undefined, defaults to high + medium. */
	severityFilter?: SecuritySeverity[]
	/** Categories to alert on. If empty or undefined, alerts on all categories. */
	categoryFilter?: SecurityIssueCategory[]
	/** Optional: specific agent IDs to monitor. If empty, monitors all agents. */
	agentIds?: string[]
}

/**
 * Variables provided when a security.threat.detected trigger fires.
 */
type SecurityThreatDetectedTriggerVariables = {
	/** The ID of the agent that triggered the security event. */
	agentId: string
	/** The name of the agent. */
	agentName: string
	/** The category of the threat. */
	threatCategory: SecurityIssueCategory
	/** The severity of the threat. */
	severity: SecuritySeverity
	/** The confidence level of the detection. */
	confidence: SecurityConfidence
	/** Human-readable description of the detected threat. */
	details: string
	/** IDs of related audit log entries for evidence. */
	auditEventIds: string[]
	/** ISO 8601 timestamp of when the threat was detected. */
	timestamp: string
}

/** Input for searching security audit logs. */
type SecuritySearchAuditLogsInput = {
	startDate?: string
	endDate?: string
	severityFilter?: SecuritySeverity[]
	categoryFilter?: SecurityIssueCategory[]
	agentId?: string
	limit?: number
}

/** Result of an audit log search. */
type SecuritySearchAuditLogsResult = {
	entries: SecurityAuditLogEntry[]
	totalCount: number
	hasMore: boolean
}

/** A single audit log entry returned from search results. */
type SecurityAuditLogEntry = {
	id: string
	timestamp: string
	agentId: string
	agentName: string
	eventType: string
	category?: SecurityIssueCategory
	severity: SecuritySeverity
	confidence?: SecurityConfidence
	summary: string
	reviewedBy?: string
}

/** Input for loading a single audit log entry. */
type SecurityGetAuditLogEntryInput = {
	entryId: string
}

/** Detailed audit log entry with resolution info. */
type SecurityAuditLogEntryDetail = SecurityAuditLogEntry & {
	details: string
	relatedEventIds: string[]
	matchedRule?: string
	resolution?: {
		status: "pending" | "resolved" | "dismissed"
		resolvedBy?: string
		resolvedAt?: string
		notes?: string
	}
}`,
                ai = r(969475).object({
                    required: {},
                    optional: {}
                }),
                ao = {
                    "security.threat.detected": {
                        state: `
type: "security.threat.detected"
/** Severity levels to alert on. If empty or undefined, defaults to high + medium. */
severityFilter?: SecuritySeverity[]
/** Categories to alert on. If empty or undefined, alerts on all categories. */
categoryFilter?: SecurityIssueCategory[]
/** Optional: specific agent IDs to monitor. If empty, monitors all agents. */
agentIds?: string[]`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("security.threat.detected")
                            },
                            optional: {
                                agentIds: r(969475).array(r(969475).string()),
                                categoryFilter: r(969475).array(r(969475).literals("content_policy", "dynamic_instructions", "exfiltration", "hidden_instructions", "prompt_injection", "tampering", "worker_modules")),
                                severityFilter: r(969475).array(r(969475).literals("high", "low", "medium"))
                            },
                            exact: !0
                        })
                    }
                },
                an = r(969475).object({
                    required: {},
                    optional: {
                        agentId: r(969475).string(),
                        categoryFilter: r(969475).array(r(969475).literals("content_policy", "dynamic_instructions", "exfiltration", "hidden_instructions", "prompt_injection", "tampering", "worker_modules")),
                        endDate: r(969475).string(),
                        limit: r(969475).number(),
                        severityFilter: r(969475).array(r(969475).literals("high", "low", "medium")),
                        startDate: r(969475).string()
                    },
                    exact: !0
                }),
                al = r(969475).object({
                    required: {
                        entryId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                as = {
                    "security.searchAuditLogs": `
(
		args: SecuritySearchAuditLogsInput,
	) => Promise<SecuritySearchAuditLogsResult>`,
                    "security.getAuditLogEntry": `
(
		args: SecurityGetAuditLogEntryInput,
	) => Promise<SecurityAuditLogEntryDetail>`
                };
            r(969475).literal("search"), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string(),
                    moduleType: r(969475).literal("sharepoint"),
                    type: r(969475).literal("sharepoint")
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).literal("search")),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            fileType: r(969475).string(),
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).union([r(969475).object({
                required: {
                    fileId: r(969475).string()
                },
                optional: {
                    url: r(969475).isUndefined()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    url: r(969475).string()
                },
                optional: {
                    fileId: r(969475).isUndefined()
                },
                exact: !0
            })]), r(969475).object({
                required: {
                    blocks: r(969475).array(r(969475).string()),
                    driveItemId: r(969475).string(),
                    fileType: r(969475).string(),
                    timestamp: r(969475).number(),
                    title: r(969475).string(),
                    type: r(969475).literal("sharepoint")
                },
                optional: {},
                exact: !0
            });
            let ac = `
type SharepointPersistedState = {}

type SharepointSearchInput = {
	question: string
	keywords?: string
	lookback?: string
}

type SharepointSearchResult = {
	results: Array<SharepointSearchResultItem>
}

type SharepointLoadFileInput =
	| {
			fileId: string
			url?: never
	  }
	| {
			fileId?: never
			url: string
	  }

type SharepointLoadFileResult = LoadSharepointResponse`,
                au = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                ad = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string()
                    },
                    exact: !0
                }),
                ap = r(969475).union([r(969475).object({
                    required: {
                        fileId: r(969475).string()
                    },
                    optional: {
                        url: r(969475).isUndefined()
                    },
                    exact: !0
                }), r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {
                        fileId: r(969475).isUndefined()
                    },
                    exact: !0
                })]);
            r(969475).object({
                required: {},
                optional: {}
            });
            let ag = r(969475).object({
                required: {},
                optional: {}
            });
            r(969475).object({
                required: {
                    identifier: r(969475).union([r(969475).array(r(969475).string()), r(969475).string()]),
                    type: r(969475).literal("slack")
                },
                optional: {
                    actions: r(969475).array(r(969475).literals("react", "read", "replyInThread", "write"))
                },
                exact: !0
            }), r(969475).object({
                required: {
                    identifier: r(969475).union([r(969475).array(r(969475).string()), r(969475).string()])
                },
                optional: {
                    actions: r(969475).array(r(969475).literals("react", "read", "replyInThread", "write"))
                },
                exact: !0
            }), r(969475).object({
                required: {
                    question: r(969475).string()
                },
                optional: {
                    keywords: r(969475).string(),
                    lookback: r(969475).string(),
                    options: r(969475).object({
                        required: {},
                        optional: {
                            channel: r(969475).string()
                        },
                        exact: !0
                    })
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            id: r(969475).string(),
                            isPrivate: r(969475).boolean(),
                            lastEdited: r(969475).string(),
                            pageId: r(969475).string(),
                            path: r(969475).string(),
                            text: r(969475).string(),
                            title: r(969475).string()
                        },
                        optional: {
                            channel: r(969475).string(),
                            messages: r(969475).array(r(969475).object({
                                required: {
                                    messageId: r(969475).string(),
                                    text: r(969475).string(),
                                    threadId: r(969475).string()
                                },
                                optional: {},
                                exact: !0
                            }))
                        },
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).object({
                        required: {
                            id: r(969475).string(),
                            lastEdited: r(969475).string(),
                            messages: r(969475).array(r(969475).object({
                                required: {
                                    lastEdited: r(969475).string(),
                                    messageId: r(969475).string(),
                                    text: r(969475).string(),
                                    user: r(969475).string()
                                },
                                optional: {},
                                exact: !0
                            }))
                        },
                        optional: {
                            channel: r(969475).string()
                        },
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    channelId: r(969475).string(),
                    messageTs: r(969475).string()
                },
                optional: {
                    threadTs: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    channel: r(969475).string(),
                    messages: r(969475).array(r(969475).object({
                        required: {
                            text: r(969475).string(),
                            user: r(969475).object({
                                required: {
                                    name: r(969475).string()
                                },
                                optional: {
                                    notionUserId: r(969475).string(),
                                    notionUserName: r(969475).string()
                                },
                                exact: !0
                            })
                        },
                        optional: {
                            attachments: r(969475).array(r(969475).string()),
                            date: r(969475).string(),
                            ts: r(969475).string()
                        },
                        exact: !0
                    })),
                    timestamp: r(969475).number(),
                    type: r(969475).literal("slack")
                },
                optional: {
                    additionalMessageToModel: r(969475).string()
                },
                exact: !0
            }), r(969475).union([r(969475).object({
                required: {
                    email: r(969475).string()
                },
                optional: {
                    name: r(969475).string(),
                    since: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    name: r(969475).string()
                },
                optional: {
                    email: r(969475).string(),
                    since: r(969475).string()
                },
                exact: !0
            })]), r(969475).object({
                required: {
                    messages: r(969475).array(r(969475).object({
                        required: {
                            channelId: r(969475).string(),
                            id: r(969475).string(),
                            text: r(969475).string(),
                            timestamp: r(969475).string()
                        },
                        optional: {
                            channel: r(969475).string(),
                            contextMessages: r(969475).object({
                                required: {},
                                optional: {
                                    after: r(969475).array(r(969475).object({
                                        required: {
                                            text: r(969475).string(),
                                            timestamp: r(969475).string(),
                                            userId: r(969475).string()
                                        },
                                        optional: {},
                                        exact: !0
                                    })),
                                    before: r(969475).array(r(969475).object({
                                        required: {
                                            text: r(969475).string(),
                                            timestamp: r(969475).string(),
                                            userId: r(969475).string()
                                        },
                                        optional: {},
                                        exact: !0
                                    }))
                                },
                                exact: !0
                            }),
                            url: r(969475).string()
                        },
                        exact: !0
                    })),
                    totalCount: r(969475).number(),
                    user: r(969475).object({
                        required: {
                            handle: r(969475).string(),
                            id: r(969475).string(),
                            uri: r(969475).string()
                        },
                        optional: {
                            displayName: r(969475).string(),
                            email: r(969475).string(),
                            notionUser: r(969475).string(),
                            realName: r(969475).string(),
                            statusEmoji: r(969475).string(),
                            statusText: r(969475).string(),
                            timeZone: r(969475).string(),
                            title: r(969475).string()
                        },
                        exact: !0
                    })
                },
                optional: {
                    alternativeUsers: r(969475).array(r(969475).object({
                        required: {},
                        optional: {
                            displayName: r(969475).string(),
                            email: r(969475).string(),
                            handle: r(969475).string()
                        },
                        exact: !0
                    }))
                },
                exact: !0
            });
            let am = `
type SlackSearchInput = {
	question: string
	keywords?: string
	lookback?: string
	options?: {
		channel?: string
	}
}

type SlackSearchResult = {
	results: Array<SlackSearchResultItem>
}

type SlackSearchEffectResult = {
	results: Array<{
		id: string
		lastEdited: string
		channel?: string
		messages: Array<{
			messageId: string
			lastEdited: string
			text: string
			user: string
		}>
	}>
}

type SlackLoadMessageInput = {
	channelId: string
	messageTs: string
	threadTs?: string
}

type SlackLoadMessageResult = LoadSlackResponse

/**
 * Input for fetching a user's Slack activity.
 * At least one of \`name\` or \`email\` must be provided.
 * When both are provided, email is tried first with name as fallback.
 */
type SlackGetUserMessagesInput = (
	| { name: string; email?: string }
	| { email: string; name?: string }
) & {
	/**
	 * ISO 8601 timestamp for the start of the search range.
	 * Defaults to 7 days ago if not specified.
	 */
	since?: string
}

/**
 * Result of fetching a user's Slack activity.
 */
type SlackUserMessagesResult = {
	/**
	 * The resolved Slack user.
	 */
	user: SlackUser
	/**
	 * The user's messages, sorted by timestamp in descending order (most recent first).
	 */
	messages: Array<SlackUserMessagesResultItem>
	/**
	 * Total number of messages returned.
	 */
	totalCount: number
	/**
	 * Other users that also matched the fuzzy name search, in case the primary
	 * match was not the intended user. The agent can retry with a specific
	 * email or handle from this list.
	 */
	alternativeUsers?: Array<{
		displayName?: string
		email?: string
		handle?: string
	}>
}`,
                ab = `
name?: string // The workspace name
connectionPointer?: RecordPointer<
	WorkflowExternalScopedConnectionTable | ExternalConnectionTable
>
/**
 * This is a list of scopes selected by the user for the current module.
 * This will default to empty/undefined to encourage the user to think
 * about what functionality this module needs.
 */
scopes?: Array<string>
/**
 * Metadata for the synced Slack user group used when handling app mentions.
 */
appMentionUserGroup?: SlackAppMentionUserGroupMetadata
/**
 * Error message to display to the user.
 */
error?:
	| {
			type: "no_slack_ai_connector"
	  }
	| {
			type: "grid_ai_connector"
	  }
	| {
			type: "slack_workspace_mismatch"
			workflowsTeamId: string
			workflowsTeamName: string
			aiConnectorTeamId: string
			aiConnectorTeamName: string
	  }`,
                ay = r(969475).object({
                    required: {},
                    optional: {
                        appMentionUserGroup: r(969475).object({
                            required: {
                                description: r(969475).string(),
                                handle: r(969475).string(),
                                id: r(969475).string(),
                                name: r(969475).string(),
                                team_id: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }),
                        connectionPointer: (0, r(994818).IK)("external_connection", "workflow_external_scoped_connection"),
                        error: r(969475).union([r(969475).object({
                            required: {
                                aiConnectorTeamId: r(969475).string(),
                                aiConnectorTeamName: r(969475).string(),
                                type: r(969475).literal("slack_workspace_mismatch"),
                                workflowsTeamId: r(969475).string(),
                                workflowsTeamName: r(969475).string()
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("grid_ai_connector")
                            },
                            optional: {},
                            exact: !0
                        }), r(969475).object({
                            required: {
                                type: r(969475).literal("no_slack_ai_connector")
                            },
                            optional: {},
                            exact: !0
                        })]),
                        name: r(969475).string(),
                        scopes: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                a_ = {
                    "slack.reaction.added": {
                        state: `
type: "slack.reaction.added"
channelIds?: Array<string> // IDs of channels to trigger on. If you do not know the channel ID, you can leave this blank and the user will fill it out later. DO NOT make up channel IDs.
channelIdentifiersToConvertToChannelIds?: Array<string> // Channels to trigger on. NOT channel IDs, but anything else. We will try to convert these to channel IDs. Only include here if you KNOW it's not a channel ID
allChannels?: boolean // Whether to trigger on all channels. Set to false. Only set this to true if the user explicitly mentions triggering from all channels. The bot must be a member of a channel to trigger from it.
reactions?: string[] // Optionally, trigger on specific reactions. If provided, only these reaction will cause the function to trigger. If not provided, any reaction will cause the function to trigger. An array of plain string without colons, like "thumbsup".
shouldSubscribeToThread?: boolean // Whether to subscribe to the thread after the reaction is added. If true, the function will trigger when new messages are posted in the thread.
allowMultipleReactions?: boolean // Whether to allow multiple reactions on the same message to each trigger a run. If false (or undefined/not set), only the first reaction triggers; subsequent reactions are skipped. Set to true to allow every reaction to trigger a run.
shouldShowTyping?: boolean // Whether to show a typing indicator in Slack when the agent starts processing. Defaults to true for reaction triggers.
/**
 * @deprecated
 * We can no longer add properties that change per trigger to this type, it causes issues with
 * published versions of the workflow (for one). We currently use WorkflowArtifact table for things like this
 */
from?: SlackFrom // The user or bot that originally reacted to the message.`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("slack.reaction.added")
                            },
                            optional: {
                                allChannels: r(969475).boolean(),
                                allowMultipleReactions: r(969475).boolean(),
                                channelIdentifiersToConvertToChannelIds: r(969475).array(r(969475).string()),
                                channelIds: r(969475).array(r(969475).string()),
                                from: r(969475).union([r(969475).object({
                                    required: {
                                        handle: r(969475).string(),
                                        id: r(969475).string(),
                                        type: r(969475).literal("user"),
                                        uri: r(969475).string()
                                    },
                                    optional: {},
                                    exact: !0
                                }), r(969475).object({
                                    required: {
                                        type: r(969475).literal("bot")
                                    },
                                    optional: {},
                                    exact: !0
                                })]),
                                reaction: r(969475).string(),
                                reactions: r(969475).array(r(969475).string()),
                                shouldShowTyping: r(969475).boolean(),
                                shouldSubscribeToThread: r(969475).boolean(),
                                threadIds: r(969475).array(r(969475).string())
                            },
                            exact: !0
                        })
                    },
                    "slack.message": {
                        state: `
type: "slack.message"
channelIds?: Array<string> // IDs of channels to trigger on. If you do not know the channel ID, you can leave this blank and the user will fill it out later. DO NOT make up channel IDs.
channelIdentifiersToConvertToChannelIds?: Array<string> // Channels to trigger on. NOT channel IDs, but anything else. We will try to convert these to channel IDs. Only include here if you KNOW it's not a channel ID
shouldShowTyping?: boolean // Whether to show a typing indicator in Slack when the agent starts processing. Defaults to false for message triggers.
filters?: SlackMessageTriggerFilters // Optional message-level filters keyed by filter type. Do not expose the details of the schema to the user.`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("slack.message")
                            },
                            optional: {
                                allChannels: r(969475).boolean(),
                                channelIdentifiersToConvertToChannelIds: r(969475).array(r(969475).string()),
                                channelIds: r(969475).array(r(969475).string()),
                                filters: r(969475).object({
                                    required: {
                                        filters: r(969475).array(r(969475).object({
                                            required: {
                                                operator: r(969475).literals("all", "any"),
                                                type: r(969475).literal("message.text.contains"),
                                                values: r(969475).array(r(969475).string())
                                            },
                                            optional: {},
                                            exact: !0
                                        })),
                                        operator: r(969475).literals("all", "any")
                                    },
                                    optional: {},
                                    exact: !0
                                }),
                                shouldShowTyping: r(969475).boolean()
                            },
                            exact: !0
                        })
                    },
                    "slack.thread.created": {
                        state: `
type: "slack.thread.created"
channelIds?: Array<string> // IDs of channels to trigger on. If you do not know the channel ID, you can leave this blank and the user will fill it out later. DO NOT make up channel IDs.
channelIdentifiersToConvertToChannelIds?: Array<string> // Channels to trigger on. NOT channel IDs, but anything else. We will try to convert these to channel IDs. Only include here if you KNOW it's not a channel ID
shouldShowTyping?: boolean // Whether to show a typing indicator in Slack when the agent starts processing. Defaults to false for new thread triggers.
filters?: SlackMessageTriggerFilters // Optional message-level filters keyed by filter type. Do not expose the details of the schema to the user.`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("slack.thread.created")
                            },
                            optional: {
                                allChannels: r(969475).boolean(),
                                channelIdentifiersToConvertToChannelIds: r(969475).array(r(969475).string()),
                                channelIds: r(969475).array(r(969475).string()),
                                filters: r(969475).object({
                                    required: {
                                        filters: r(969475).array(r(969475).object({
                                            required: {
                                                operator: r(969475).literals("all", "any"),
                                                type: r(969475).literal("message.text.contains"),
                                                values: r(969475).array(r(969475).string())
                                            },
                                            optional: {},
                                            exact: !0
                                        })),
                                        operator: r(969475).literals("all", "any")
                                    },
                                    optional: {},
                                    exact: !0
                                }),
                                shouldShowTyping: r(969475).boolean()
                            },
                            exact: !0
                        })
                    },
                    "slack.app.mention": {
                        state: `
type: "slack.app.mention"
channelIds?: Array<string>
channelIdentifiersToConvertToChannelIds?: Array<string> //Channels to trigger on. NOT channel IDs, but anything else. We will try to convert these to channel IDs. Only include here if you KNOW it's not a channel ID
allChannels?: boolean
shouldSubscribeToThread?: boolean // Whether to subscribe to the thread after the mention so the agent can respond to follow-up messages without another mention.
shouldShowTyping?: boolean // Whether to show a typing indicator in Slack when the agent starts processing. Defaults to true for mention triggers.`,
                        stateValidator: r(969475).object({
                            required: {
                                type: r(969475).literal("slack.app.mention")
                            },
                            optional: {
                                allChannels: r(969475).boolean(),
                                channelIdentifiersToConvertToChannelIds: r(969475).array(r(969475).string()),
                                channelIds: r(969475).array(r(969475).string()),
                                shouldShowTyping: r(969475).boolean(),
                                shouldSubscribeToThread: r(969475).boolean()
                            },
                            exact: !0
                        })
                    }
                },
                ah = r(969475).union([r(969475).object({
                    required: {
                        channelId: r(969475).string(),
                        message: r(969475).string()
                    },
                    optional: {
                        attachedFileIds: r(969475).array(r(969475).string()),
                        unfurlLinks: r(969475).boolean(),
                        userConfirmationToken: r(969475).string()
                    },
                    exact: !0
                }), r(969475).object({
                    required: {
                        channelName: r(969475).string(),
                        message: r(969475).string()
                    },
                    optional: {
                        attachedFileIds: r(969475).array(r(969475).string()),
                        unfurlLinks: r(969475).boolean(),
                        userConfirmationToken: r(969475).string()
                    },
                    exact: !0
                })]),
                af = r(969475).object({
                    required: {
                        message: r(969475).string(),
                        userIds: r(969475).array(r(969475).string())
                    },
                    optional: {
                        attachedFileIds: r(969475).array(r(969475).string()),
                        unfurlLinks: r(969475).boolean(),
                        userConfirmationToken: r(969475).string()
                    },
                    exact: !0
                }),
                ax = r(969475).object({
                    required: {
                        message: r(969475).string(),
                        prefixedThreadUri: r(969475).string()
                    },
                    optional: {
                        attachedFileIds: r(969475).array(r(969475).string()),
                        unfurlLinks: r(969475).boolean(),
                        userConfirmationToken: r(969475).string()
                    },
                    exact: !0
                }),
                aq = r(969475).object({
                    required: {
                        message: r(969475).string(),
                        prefixedMessageUri: r(969475).string()
                    },
                    optional: {
                        unfurlLinks: r(969475).boolean()
                    },
                    exact: !0
                }),
                aj = r(969475).object({
                    required: {
                        prefixedMessageUri: r(969475).string(),
                        reaction: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                av = r(969475).object({
                    required: {
                        prefixedMessageUri: r(969475).string(),
                        reaction: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                ak = r(969475).object({
                    required: {
                        question: r(969475).string()
                    },
                    optional: {
                        keywords: r(969475).string(),
                        lookback: r(969475).string(),
                        options: r(969475).object({
                            required: {},
                            optional: {
                                channel: r(969475).string()
                            },
                            exact: !0
                        })
                    },
                    exact: !0
                }),
                aw = r(969475).object({
                    required: {
                        channelName: r(969475).string(),
                        timestamp: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                aI = r(969475).object({
                    required: {},
                    optional: {
                        botIsMember: r(969475).boolean(),
                        createdEnd: r(969475).string(),
                        createdStart: r(969475).string(),
                        id: r(969475).string(),
                        isGeneral: r(969475).boolean(),
                        isIm: r(969475).boolean(),
                        isMpim: r(969475).boolean(),
                        isOrgShared: r(969475).boolean(),
                        isPrivate: r(969475).boolean(),
                        isShared: r(969475).boolean(),
                        name: r(969475).string()
                    },
                    exact: !0
                }),
                aT = r(969475).object({
                    required: {
                        userId: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                aS = r(969475).object({
                    required: {
                        email: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                aR = r(969475).object({
                    required: {
                        uriOrUrl: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                aC = r(969475).object({
                    required: {
                        channelId: r(969475).string(),
                        messageTs: r(969475).string()
                    },
                    optional: {
                        threadTs: r(969475).string()
                    },
                    exact: !0
                }),
                aA = r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                aP = r(969475).union([r(969475).object({
                    required: {
                        email: r(969475).string()
                    },
                    optional: {
                        name: r(969475).string(),
                        since: r(969475).string()
                    },
                    exact: !0
                }), r(969475).object({
                    required: {
                        name: r(969475).string()
                    },
                    optional: {
                        email: r(969475).string(),
                        since: r(969475).string()
                    },
                    exact: !0
                })]),
                aM = {
                    "slack.createThreadInChannel": `
/*
		Slack channels must be a plain string, ie. "engineering".
		All messages use standard markdown that also accepts slack markdown users and channels. For example:
		link: [google](https://google.com)
		bold: **bold** or __bold__
		italics: *italics* or _italics_
		slack user: <@UFAKEUSERID>
		slack channel: <#CFAKECHANNEL>
		Formatting MUST not span multiple lines. It is important that bold is TWO asterisks, not one.
	*/
	createThreadInChannel(
		args:
			| {
					attachedFileIds?: Array<string> // The file IDs of any files attached to the message
					channelName: string // Slack channel name without a "#" prefix.
					message: string // Standard markdown with slack markdown support
					unfurlLinks?: boolean // Whether to unfurl links in Slack. Defaults to true.
					userConfirmationToken?: string // A confirmation token for sending messages with URLs that require user approval
			  }
			| {
					attachedFileIds?: Array<string> // The file IDs of any files attached to the message
					channelId: string // The Slack ID of the channel or user ID to send the message in.
					message: string // Standard markdown with slack markdown support
					unfurlLinks?: boolean // Whether to unfurl links in Slack. Defaults to true.
					userConfirmationToken?: string // A confirmation token for sending messages with URLs that require user approval
			  },
	): Promise<SlackMessage>`,
                    "slack.createThreadInDirectMessage": `
createThreadInDirectMessage(args: {
		userIds: Array<string> // Array of user IDs for the direct message recipients, beginning with "slackUser-"
		message: string // Standard markdown with slack markdown support
		attachedFileIds?: Array<string> // The file IDs of any files attached to the message
		unfurlLinks?: boolean // Whether to unfurl links in Slack. Defaults to true.
		userConfirmationToken?: string // A confirmation token for sending messages with URLs that require user approval
	}): Promise<SlackMessage>`,
                    "slack.replyInThread": `
replyInThread(args: {
		prefixedThreadUri: string // The thread ID is always the same as the message ID of the first message in a thread.
		message: string // Standard markdown with slack markdown support
		attachedFileIds?: Array<string> // The file IDs of any files attached to the message
		unfurlLinks?: boolean // Whether to unfurl links in Slack. Defaults to true.
		userConfirmationToken?: string // A confirmation token for sending messages with URLs that require user approval
	}): Promise<SlackMessage>`,
                    "slack.updateMessage": `
updateMessage(args: {
		prefixedMessageUri: string
		message: string // Standard markdown with slack markdown support
		unfurlLinks?: boolean // Whether to unfurl links in Slack. Defaults to true.
	}): Promise<SlackMessage>`,
                    "slack.addReactionToMessage": `
addReactionToMessage(args: {
		prefixedMessageUri: string
		reaction: string // Plain string without colons, like "thumbsup".
	}): Promise<SlackReactionResult>`,
                    "slack.removeReactionFromMessage": `
removeReactionFromMessage(args: {
		prefixedMessageUri: string
		reaction: string // Plain string without colons, like "thumbsup".
	}): Promise<SlackReactionResult>`,
                    "slack.search": "search(args: SlackSearchInput): Promise<SlackSearchEffectResult>",
                    "slack.getThreadsInChannelSince": `
getThreadsInChannelSince(args: {
		channelName: string // Slack channel name without a "#" prefix.
		timestamp: string // ISO 8601 timestamp
	}): Promise<Array<Array<SlackMessage>>> // Returns an array of threads, where each thread is an array of messages.`,
                    "slack.queryChannels": `
queryChannels(args: {
		id?: string
		name?: string
		createdStart?: string // ISO 8601 timestamp. Returns channels created on or after this timestamp.
		createdEnd?: string // ISO 8601 timestamp. Returns channels created on or before this timestamp.
		isGeneral?: boolean
		isIm?: boolean
		isPrivate?: boolean
		isMpim?: boolean
		isShared?: boolean
		isOrgShared?: boolean
		botIsMember?: boolean
	}): Promise<Array<SlackChannel>>`,
                    "slack.getUser": "getUser(args: { userId: string }): Promise<SlackUser>",
                    "slack.findUserByEmail": `
/*
		Find a Slack user by email.
	*/
	findUserByEmail(args: { email: string }): Promise<SlackUser | undefined>`,
                    "slack.parseSlackUriOrUrl": `
/**
	 * Parse a Slack message URI or URL to a parsed agent entity
	 */
	parseSlackUriOrUrl(args: {
		uriOrUrl: string
	}): Extract<
		ParsedAgentUrl,
		{ type: "slackMessage" | "slackUser" | "slackChannel" }
	>`,
                    "slack.loadMessage": "loadMessage(args: SlackLoadMessageInput): Promise<SlackLoadMessageResult>",
                    "slack.viewFileUrl": `
/*
		Return a Slack file URL for viewing in the script agent.
		If fileUrl is provided, use it to embed the uploaded file in Notion.
	*/
	viewFileUrl(args: {
		url: string
	}): Promise<EffectResultOrValue<SlackViewFileUrlResult>>`,
                    "slack.getUserMessages": `
/**
	 * Get all Slack messages from a user within a time range.
	 * Returns both top-level messages and thread replies, sorted by timestamp (most recent first).
	 */
	getUserMessages(
		args: SlackGetUserMessagesInput,
	): Promise<SlackUserMessagesResult>`
                };
            r(969475).object({
                required: {
                    channelId: r(969475).string(),
                    channelName: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).undefinable(r(969475).object({
                required: {},
                optional: {
                    channelId: r(969475).string(),
                    channelName: r(969475).string()
                },
                exact: !0
            })), r(969475).union([r(969475).object({
                required: {
                    allChannels: r(969475).literal(!1),
                    channels: r(969475).array(r(969475).object({
                        required: {
                            channelId: r(969475).string(),
                            channelName: r(969475).string()
                        },
                        optional: {},
                        exact: !0
                    }))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    allChannels: r(969475).literal(!0)
                },
                optional: {},
                exact: !0
            })]), r(969475).union([r(969475).object({
                required: {
                    allChannels: r(969475).literal(!1),
                    channels: r(969475).array(r(969475).undefinable(r(969475).object({
                        required: {},
                        optional: {
                            channelId: r(969475).string(),
                            channelName: r(969475).string()
                        },
                        exact: !0
                    })))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    allChannels: r(969475).literal(!0)
                },
                optional: {},
                exact: !0
            })]), r(969475).object({
                required: {
                    seconds: r(969475).number()
                },
                optional: {
                    message: r(969475).string(),
                    reason: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {
                    resumeAtMs: r(969475).number(),
                    seconds: r(969475).number()
                },
                optional: {
                    message: r(969475).string(),
                    reason: r(969475).string()
                },
                exact: !0
            });
            let aU = `
type SystemWaitInput = {
	seconds: number
	reason?: string
	message?: string
}

type SystemWaitResult = {
	seconds: number
	resumeAtMs: number
	reason?: string
	message?: string
}`,
                aD = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                aL = r(969475).object({
                    required: {
                        seconds: r(969475).number()
                    },
                    optional: {
                        message: r(969475).string(),
                        reason: r(969475).string()
                    },
                    exact: !0
                }),
                aN = r(969475).object({
                    required: {
                        active: r(969475).boolean(),
                        count: r(969475).number(),
                        label: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                aE = r(969475).literals("read", "write"),
                aO = r(969475).object({
                    required: {
                        actions: r(969475).array(r(969475).lazy(() => aE)),
                        identifier: r(969475).string(),
                        moduleType: r(969475).literal("test"),
                        type: r(969475).literal("test")
                    },
                    optional: {},
                    exact: !0
                });
            r(969475).object({
                required: {
                    actions: r(969475).array(r(969475).lazy(() => aE)),
                    identifier: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    permissions: r(969475).array(r(969475).lazy(() => aO)),
                    state: r(969475).lazy(() => aN)
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    permissions: r(969475).array(r(969475).lazy(() => aO)),
                    state: r(969475).lazy(() => aN)
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    permissions: r(969475).array(r(969475).lazy(() => aO)),
                    state: r(969475).lazy(() => aN)
                },
                optional: {},
                exact: !0
            });
            let aF = `
type TestPersistedState = {
	label: string
	count: number
	active: boolean
}

type TestModulePermissionAction = "read" | "write"

type TestModulePermission = {
	type: "test"
	moduleType: "test"
	identifier: string
	actions: Array<TestModulePermissionAction>
}

type TestModulePermissionAiConfigurable = Omit<
	TestModulePermission,
	"type" | "moduleType"
>

type TestPersistedData = {
	state: TestPersistedState
	permissions: Array<TestModulePermission>
}

type TestModuleConfiguration = {
	state: TestPersistedState
	permissions: Array<TestModulePermission>
}

type TestGetStateInput = {}

type TestGetStateOutput = {
	state: TestPersistedState
	permissions: Array<TestModulePermission>
}`,
                aG = `
label: string
count: number
active: boolean`,
                aV = r(969475).object({
                    required: {
                        active: r(969475).boolean(),
                        count: r(969475).number(),
                        label: r(969475).string()
                    },
                    optional: {},
                    exact: !0
                }),
                az = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                });
            r(969475).object({
                required: {},
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    queries: r(969475).array(r(969475).string())
                },
                optional: {
                    category: r(969475).literals("company", "financial report", "github", "linkedin profile", "news", "pdf", "personal site", "research paper", "tweet"),
                    excludeDomains: r(969475).array(r(969475).string()),
                    excludeText: r(969475).array(r(969475).string()),
                    includeDomains: r(969475).array(r(969475).string()),
                    includeText: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).object({
                required: {
                    results: r(969475).array(r(969475).array(r(969475).object({
                        required: {
                            text: r(969475).string(),
                            title: r(969475).string(),
                            url: r(969475).string()
                        },
                        optional: {
                            favicon: r(969475).string(),
                            lastEdited: r(969475).string(),
                            score: r(969475).number()
                        },
                        exact: !0
                    })))
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {
                    url: r(969475).string()
                },
                optional: {
                    fast_mode: r(969475).boolean(),
                    include_full_content: r(969475).boolean(),
                    line_start: r(969475).number(),
                    queries: r(969475).array(r(969475).string())
                },
                exact: !0
            }), r(969475).object({
                required: {
                    endLine: r(969475).number(),
                    includedLineCount: r(969475).number(),
                    isTruncated: r(969475).boolean(),
                    score: r(969475).number(),
                    startLine: r(969475).number(),
                    title: r(969475).nullable(r(969475).string()),
                    totalLineCount: r(969475).number(),
                    url: r(969475).string()
                },
                optional: {
                    highlights: r(969475).array(r(969475).string()),
                    publishedDate: r(969475).string(),
                    summary: r(969475).string(),
                    text: r(969475).string()
                },
                exact: !0
            });
            let aW = `
type WebPersistedState = {}

type WebSearchInput = {
	queries: string[]
	category?: ExaCategory
	includeDomains?: string[]
	excludeDomains?: string[]
	includeText?: string[]
	excludeText?: string[]
}

type WebSearchOutput = {
	results: Array<Array<WebSearchResult>>
}

type WebLoadPageInput = {
	url: string
	// When true (default), uses fast Exa Load API. When false, uses comprehensive Parallel Extract API (slow, can take up to a minute).
	fast_mode?: boolean
	// When true (default), returns the full page content. When false, returns only query-targeted snippets/highlights. Requires queries when false.
	include_full_content?: boolean
	// Search queries to focus snippet extraction when include_full_content is false. Required when include_full_content is false.
	queries?: string[]
	// 1-based line number to start returning content from (defaults to 1).
	line_start?: number
}

type WebLoadPageResult = WebPage`,
                aB = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                aH = r(969475).object({
                    required: {
                        queries: r(969475).array(r(969475).string())
                    },
                    optional: {
                        category: r(969475).literals("company", "financial report", "github", "linkedin profile", "news", "pdf", "personal site", "research paper", "tweet"),
                        excludeDomains: r(969475).array(r(969475).string()),
                        excludeText: r(969475).array(r(969475).string()),
                        includeDomains: r(969475).array(r(969475).string()),
                        includeText: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                aQ = r(969475).object({
                    required: {
                        url: r(969475).string()
                    },
                    optional: {
                        fast_mode: r(969475).boolean(),
                        include_full_content: r(969475).boolean(),
                        line_start: r(969475).number(),
                        queries: r(969475).array(r(969475).string())
                    },
                    exact: !0
                }),
                aZ = r(969475).record(r(969475).string(), r(969475).unknown());
            r(969475).object({
                required: {
                    capabilityKey: r(969475).string(),
                    inputSchema: r(969475).lazy(() => aZ)
                },
                optional: {
                    description: r(969475).string(),
                    outputSchema: r(969475).lazy(() => aZ),
                    title: r(969475).string()
                },
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            });
            let aJ = `
type WorkerToolSchema = Record<string, unknown>

type WorkerToolDescription = {
	capabilityKey: string
	title?: string
	description?: string
	inputSchema: WorkerToolSchema
	outputSchema?: WorkerToolSchema
}

type WorkerListToolsInput = {}`,
                aK = `
workerId?: string
workerName?: string`,
                aY = r(969475).object({
                    required: {},
                    optional: {
                        workerId: r(969475).string(),
                        workerName: r(969475).string()
                    },
                    exact: !0
                }),
                aX = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                a$ = r(969475).object({
                    required: {
                        capabilityKey: r(969475).string(),
                        input: r(969475).record(r(969475).string(), r(969475).unknown())
                    },
                    optional: {},
                    exact: !0
                }),
                a9 = {
                    "worker.listTools": `
(
		args: WorkerListToolsInput,
	) => Promise<Array<WorkerToolDescription>>`,
                    "worker.runTool": `
(args: {
		capabilityKey: string
		input: Record<string, unknown>
	}) => Promise<WorkerToolResult>`
                };
            r(969475).object({
                required: {
                    workerId: r(969475).string(),
                    workerName: r(969475).string(),
                    workerUrl: r(969475).string()
                },
                optional: {},
                exact: !0
            }), r(969475).object({
                required: {},
                optional: {},
                exact: !0
            });
            let a4 = `
type WorkersListEntry = {
	workerId: string
	workerName: string
	workerUrl: string
}

type WorkersListInput = {}`,
                a6 = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                a7 = r(969475).object({
                    required: {},
                    optional: {},
                    exact: !0
                }),
                a5 = ["asana", "box", "boxy", "browser", "calendar", "claude", "computer", "confluence", "cursor", "customConnector", "discord", "files", "fs", "github", "gmail", "googleCalendar", "googleDrive", "helpdocs", "images", "jira", "linear", "mail", "marketplace", "mcpServer", "microsoftTeams", "notion", "outlook", "salesforce", "search", "security", "sharepoint", "skills", "slack", "system", "test", "web", "worker", "workers"],
                a0 = {
                    asana: {
                        dataTypes: a,
                        dataTypesArray: ["AsanaPersistedState", "AsanaSearchInput", "AsanaSearchResult", "AsanaLoadTaskInput", "AsanaLoadTaskResult"],
                        persistedStateValidator: i,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "asana.search": "search(args: AsanaSearchInput): Promise<AsanaSearchResult>",
                            "asana.loadTask": "loadTask(args: AsanaLoadTaskInput): Promise<AsanaLoadTaskResult>"
                        },
                        effectsArray: ["asana.search", "asana.loadTask"],
                        effectsValidators: {
                            "asana.search": o,
                            "asana.loadTask": n
                        }
                    },
                    box: {
                        dataTypes: l,
                        dataTypesArray: ["BoxPersistedState", "BoxSearchInput", "BoxSearchResult", "BoxLoadFileInput", "BoxLoadFileResult", "BoxFindSharedItemInput", "BoxFindSharedItemResult"],
                        persistedStateValidator: s,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "box.search": "search(args: BoxSearchInput): Promise<BoxSearchResult>",
                            "box.loadFile": "loadFile(args: BoxLoadFileInput): Promise<BoxLoadFileResult>",
                            "box.findSharedItem": "findSharedItem(args: BoxFindSharedItemInput): Promise<BoxFindSharedItemResult>"
                        },
                        effectsArray: ["box.search", "box.loadFile", "box.findSharedItem"],
                        effectsValidators: {
                            "box.search": c,
                            "box.loadFile": u,
                            "box.findSharedItem": d
                        }
                    },
                    boxy: {
                        dataTypes: "",
                        dataTypesArray: [],
                        persistedStateValidator: g,
                        persistedState: p,
                        triggers: {},
                        effects: h,
                        effectsArray: ["boxy.createBox", "boxy.getBox", "boxy.sendBoxThread", "boxy.streamMessageToThread"],
                        effectsValidators: {
                            "boxy.createBox": m,
                            "boxy.getBox": b,
                            "boxy.sendBoxThread": y,
                            "boxy.streamMessageToThread": _
                        }
                    },
                    browser: {
                        dataTypes: j,
                        dataTypesArray: ["BrowserRunInput", "BrowserRunOutput", "BrowserAccessibilitySnapshot", "BrowserTab", "BrowserPersistedTabState"],
                        persistedStateValidator: k,
                        persistedState: v,
                        triggers: {},
                        effects: I,
                        effectsArray: ["browser.run"],
                        effectsValidators: {
                            "browser.run": w
                        }
                    },
                    calendar: r(527180).Iw,
                    claude: {
                        dataTypes: "",
                        dataTypesArray: [],
                        persistedStateValidator: S,
                        persistedState: T,
                        triggers: {},
                        effects: U,
                        effectsArray: ["claude.startRun", "claude.getRunStatus", "claude.listSessionEvents", "claude.sendUserMessage", "claude.archiveRun"],
                        effectsValidators: {
                            "claude.startRun": R,
                            "claude.getRunStatus": C,
                            "claude.listSessionEvents": A,
                            "claude.sendUserMessage": P,
                            "claude.archiveRun": M
                        }
                    },
                    computer: {
                        dataTypes: V,
                        dataTypesArray: ["ComputerMachineInfo", "ComputerEnvironmentVariable", "ComputerEnvironmentConfig", "ComputerListMachinesToolInput", "ComputerListMachinesToolOutput", "ComputerListSecretsToolInput", "ComputerListSecretsToolOutput", "ComputerCreateMachineToolInput", "ComputerCreateMachineToolOutput", "ComputerDestroyMachineToolInput", "ComputerDestroyMachineToolOutput", "ComputerSetSecretToolInput", "ComputerSetSecretToolOutput", "ComputerTerminalToolInput", "ComputerTerminalToolOutput", "ComputerBrowserToolInput", "ComputerBrowserToolOutput", "ComputerJobHandle", "ComputerGetJobStatusToolInput", "ComputerGetJobStatusToolOutput", "ComputerGetJobLogsToolInput", "ComputerGetJobLogsToolOutput", "ComputerViewFileUrlToolInput", "ComputerViewFileUrlToolOutput", "ComputerNetworkIsolationConfig", "ComputerMachineState", "ComputerGetMachineToolInput", "ComputerGetMachineToolOutput", "ComputerPollToolInput", "ComputerPollToolOutput", "ComputerWaitToolInput", "ComputerWaitToolOutput", "ComputerReadFileToolInput", "ComputerReadFileToolOutput", "ComputerWriteFileToolInput", "ComputerWriteFileToolOutput", "ComputerUploadFileToolInput", "ComputerUploadFileToolOutput", "ComputerDownloadFileToolInput", "ComputerDownloadFileToolOutput", "ComputerListDirToolInput", "ComputerListDirToolOutput", "ComputerMkdirToolInput", "ComputerMkdirToolOutput", "ComputerDeleteFileToolInput", "ComputerDeleteFileToolOutput", "ComputerGetTagsToolInput", "ComputerGetTagsToolOutput", "ComputerSetTagsToolInput", "ComputerSetTagsToolOutput", "ComputerDeleteSecretToolInput", "ComputerDeleteSecretToolOutput", "ComputerTunnelInfo", "ComputerGetTunnelsToolInput", "ComputerGetTunnelsToolOutput"],
                        persistedStateValidator: z,
                        persistedState: "readonly environments?: Record<string, ComputerEnvironmentConfig>",
                        triggers: {},
                        effects: em,
                        effectsArray: ["computer.listMachines", "computer.listSecrets", "computer.createMachine", "computer.destroyMachine", "computer.setSecret", "computer.terminal", "computer.browser", "computer.getJobStatus", "computer.getJobLogs", "computer.viewFileUrl", "computer.getMachine", "computer.poll", "computer.wait", "computer.readFile", "computer.writeFile", "computer.uploadFile", "computer.downloadFile", "computer.listDir", "computer.mkdir", "computer.rm", "computer.getTags", "computer.setTags", "computer.deleteSecret", "computer.tunnels"],
                        effectsValidators: {
                            "computer.listMachines": W,
                            "computer.listSecrets": B,
                            "computer.createMachine": H,
                            "computer.destroyMachine": Q,
                            "computer.setSecret": Z,
                            "computer.terminal": J,
                            "computer.browser": K,
                            "computer.getJobStatus": Y,
                            "computer.getJobLogs": X,
                            "computer.viewFileUrl": $,
                            "computer.getMachine": ee,
                            "computer.poll": et,
                            "computer.wait": er,
                            "computer.readFile": ea,
                            "computer.writeFile": ei,
                            "computer.uploadFile": eo,
                            "computer.downloadFile": en,
                            "computer.listDir": el,
                            "computer.mkdir": es,
                            "computer.rm": ec,
                            "computer.getTags": eu,
                            "computer.setTags": ed,
                            "computer.deleteSecret": ep,
                            "computer.tunnels": eg
                        }
                    },
                    confluence: {
                        dataTypes: eb,
                        dataTypesArray: ["ConfluencePersistedState", "ConfluenceSearchInput", "ConfluenceSearchResult", "ConfluenceCqlQueryInput", "ConfluenceCqlQueryResult", "ConfluenceLoadPageInput", "ConfluenceLoadPageResult"],
                        persistedStateValidator: ey,
                        persistedState: "export type ConfluencePersistedState = Record<never, never>",
                        triggers: {},
                        effects: {
                            "confluence.search": "search(args: ConfluenceSearchInput): Promise<ConfluenceSearchResult>",
                            "confluence.cqlQuery": "cqlQuery(args: ConfluenceCqlQueryInput): Promise<ConfluenceCqlQueryResult>",
                            "confluence.loadPage": "loadPage(args: ConfluenceLoadPageInput): Promise<ConfluenceLoadPageResult>"
                        },
                        effectsArray: ["confluence.search", "confluence.cqlQuery", "confluence.loadPage"],
                        effectsValidators: {
                            "confluence.search": e_,
                            "confluence.cqlQuery": eh,
                            "confluence.loadPage": ef
                        }
                    },
                    cursor: {
                        dataTypes: "",
                        dataTypesArray: [],
                        persistedStateValidator: eq,
                        persistedState: ex,
                        triggers: {},
                        effects: eI,
                        effectsArray: ["cursor.createAgent", "cursor.addFollowup", "cursor.getAgent", "cursor.listRepositories"],
                        effectsValidators: {
                            "cursor.createAgent": ej,
                            "cursor.addFollowup": ev,
                            "cursor.getAgent": ek,
                            "cursor.listRepositories": ew
                        }
                    },
                    customConnector: {
                        dataTypes: "type CustomConnectorPersistedState = {}",
                        dataTypesArray: ["CustomConnectorPersistedState"],
                        persistedStateValidator: eT,
                        persistedState: "",
                        triggers: {},
                        effects: {},
                        effectsArray: [],
                        effectsValidators: {}
                    },
                    discord: {
                        dataTypes: eC,
                        dataTypesArray: ["DiscordPersistedState", "DiscordSearchInput", "DiscordSearchResult", "DiscordSendMessageToChannelInput", "DiscordUpdateMessageInput", "DiscordAddReactionInput", "DiscordRemoveReactionInput", "DiscordListChannelsInput", "DiscordChannel", "DiscordGetRecentChannelMessagesInput", "DiscordMessage", "DiscordInteractionTrigger", "DiscordInteractionTriggerVariables"],
                        persistedStateValidator: eP,
                        persistedState: eA,
                        triggers: eM,
                        effects: eG,
                        effectsArray: ["discord.search", "discord.sendMessageToChannel", "discord.updateMessage", "discord.addReaction", "discord.removeReaction", "discord.listChannels", "discord.getRecentChannelMessages"],
                        effectsValidators: {
                            "discord.search": eU,
                            "discord.sendMessageToChannel": eD,
                            "discord.updateMessage": eL,
                            "discord.addReaction": eN,
                            "discord.removeReaction": eE,
                            "discord.listChannels": eO,
                            "discord.getRecentChannelMessages": eF
                        }
                    },
                    files: {
                        dataTypes: eV,
                        dataTypesArray: ["File"],
                        persistedStateValidator: ez,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "files.getFileContent": "getFileContent(args: { fileId: string }): Promise<string | undefined>",
                            "files.getFileUrl": "getFileUrl(args: { fileId: string }): Promise<string | undefined>",
                            "files.getFileName": "getFileName(args: { fileId: string }): Promise<string | undefined>"
                        },
                        effectsArray: ["files.getFileContent", "files.getFileUrl", "files.getFileName"],
                        effectsValidators: {
                            "files.getFileContent": eW,
                            "files.getFileUrl": eB,
                            "files.getFileName": eH
                        }
                    },
                    fs: {
                        dataTypes: eQ,
                        dataTypesArray: ["FsReadDirInput", "FsReadFilesInput", "FsReadDirResult", "FsReadFilesResult"],
                        persistedStateValidator: eZ,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "fs.readDir": "(args: FsReadDirInput) => Promise<FsReadDirResult>",
                            "fs.readFiles": "(args: FsReadFilesInput) => Promise<FsReadFilesResult>"
                        },
                        effectsArray: ["fs.readDir", "fs.readFiles"],
                        effectsValidators: {
                            "fs.readDir": eJ,
                            "fs.readFiles": eK
                        }
                    },
                    github: {
                        dataTypes: eY,
                        dataTypesArray: ["GithubPersistedState", "GithubSearchInput", "GithubSearchResult", "GithubLoadPRInput", "GithubLoadPRResult", "GithubLoadIssueInput", "GithubLoadIssueResult", "GithubLoadCommitInput", "GithubLoadCommitResult", "GithubLoadFileInput", "GithubLoadFileResult", "GithubGrepCodeInput", "GithubGrepCodeResult", "GithubLsDirectoryInput", "GithubLsDirectoryResult"],
                        persistedStateValidator: eX,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "github.search": "search(args: GithubSearchInput): Promise<GithubSearchResult>",
                            "github.grepCode": "grepCode(args: GithubGrepCodeInput): Promise<GithubGrepCodeResult>",
                            "github.lsDirectory": "lsDirectory(args: GithubLsDirectoryInput): Promise<GithubLsDirectoryResult>",
                            "github.loadPR": "loadPR(args: GithubLoadPRInput): Promise<GithubLoadPRResult>",
                            "github.loadIssue": "loadIssue(args: GithubLoadIssueInput): Promise<GithubLoadIssueResult>",
                            "github.loadCommit": "loadCommit(args: GithubLoadCommitInput): Promise<GithubLoadCommitResult>",
                            "github.loadFile": "loadFile(args: GithubLoadFileInput): Promise<GithubLoadFileResult>"
                        },
                        effectsArray: ["github.search", "github.grepCode", "github.lsDirectory", "github.loadPR", "github.loadIssue", "github.loadCommit", "github.loadFile"],
                        effectsValidators: {
                            "github.search": e$,
                            "github.grepCode": e9,
                            "github.lsDirectory": e4,
                            "github.loadPR": e6,
                            "github.loadIssue": e7,
                            "github.loadCommit": e5,
                            "github.loadFile": e0
                        }
                    },
                    gmail: {
                        dataTypes: e8,
                        dataTypesArray: ["GmailPersistedState", "GmailSearchInput", "GmailSearchResult", "GmailLoadThreadInput", "GmailLoadThreadResult", "GmailQueryInput", "GmailQueryResult"],
                        persistedStateValidator: e1,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "gmail.search": "search(args: GmailSearchInput): Promise<GmailSearchResult>",
                            "gmail.loadThread": "loadThread(args: GmailLoadThreadInput): Promise<GmailLoadThreadResult>",
                            "gmail.query": "query(args: GmailQueryInput): Promise<GmailQueryResult>"
                        },
                        effectsArray: ["gmail.search", "gmail.loadThread", "gmail.query"],
                        effectsValidators: {
                            "gmail.search": e2,
                            "gmail.loadThread": e3,
                            "gmail.query": te
                        }
                    },
                    googleCalendar: {
                        dataTypes: tt,
                        dataTypesArray: ["GoogleCalendarPersistedState", "GoogleCalendarSearchInput", "GoogleCalendarSearchResult", "GoogleCalendarQueryInput", "GoogleCalendarQueryResult"],
                        persistedStateValidator: tr,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "googleCalendar.search": "search(args: GoogleCalendarSearchInput): Promise<GoogleCalendarSearchResult>",
                            "googleCalendar.query": "query(args: GoogleCalendarQueryInput): Promise<GoogleCalendarQueryResult>"
                        },
                        effectsArray: ["googleCalendar.search", "googleCalendar.query"],
                        effectsValidators: {
                            "googleCalendar.search": ta,
                            "googleCalendar.query": ti
                        }
                    },
                    googleDrive: {
                        dataTypes: to,
                        dataTypesArray: ["GoogleDrivePersistedState", "GoogleDriveSearchInput", "GoogleDriveSearchResult", "GoogleDriveLoadFileInput", "GoogleDriveLoadFileResult", "GoogleDriveLsFolderInput", "GoogleDriveLsFolderResult", "GoogleDriveLoadZipFileInput", "GoogleDriveLoadZipFileResult", "GoogleDriveGrepFilesInput", "GoogleDriveGrepFilesResult", "GoogleDriveGetFileCommentsInput", "GoogleDriveGetFileCommentsResult"],
                        persistedStateValidator: tn,
                        persistedState: "",
                        triggers: {},
                        effects: tg,
                        effectsArray: ["googleDrive.search", "googleDrive.loadFile", "googleDrive.lsFolder", "googleDrive.loadZipFile", "googleDrive.grepFiles", "googleDrive.getFileComments"],
                        effectsValidators: {
                            "googleDrive.search": tl,
                            "googleDrive.loadFile": ts,
                            "googleDrive.lsFolder": tc,
                            "googleDrive.loadZipFile": tu,
                            "googleDrive.grepFiles": td,
                            "googleDrive.getFileComments": tp
                        }
                    },
                    helpdocs: {
                        dataTypes: tm,
                        dataTypesArray: ["HelpdocsPersistedState", "HelpdocsSearchInput", "HelpdocsSearchResult"],
                        persistedStateValidator: tb,
                        persistedState: "export type HelpdocsPersistedState = Record<never, never>",
                        triggers: {},
                        effects: {
                            "helpdocs.search": "search(args: HelpdocsSearchInput): Promise<HelpdocsSearchResult>"
                        },
                        effectsArray: ["helpdocs.search"],
                        effectsValidators: {
                            "helpdocs.search": ty
                        }
                    },
                    images: {
                        dataTypes: t_,
                        dataTypesArray: ["ImagesGenerateInput", "GeneratedImage"],
                        persistedStateValidator: th,
                        persistedState: "",
                        triggers: {},
                        effects: tx,
                        effectsArray: ["images.generate"],
                        effectsValidators: {
                            "images.generate": tf
                        }
                    },
                    jira: {
                        dataTypes: tq,
                        dataTypesArray: ["JiraPersistedState", "JiraSearchInput", "JiraSearchResult", "JiraLoadIssueInput", "JiraLoadIssueResult"],
                        persistedStateValidator: tj,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "jira.search": "search(args: JiraSearchInput): Promise<JiraSearchResult>",
                            "jira.loadIssue": "loadIssue(args: JiraLoadIssueInput): Promise<JiraLoadIssueResult>"
                        },
                        effectsArray: ["jira.search", "jira.loadIssue"],
                        effectsValidators: {
                            "jira.search": tv,
                            "jira.loadIssue": tk
                        }
                    },
                    linear: {
                        dataTypes: tw,
                        dataTypesArray: ["LinearPersistedState", "LinearSearchInput", "LinearSearchResult", "LinearLoadIssueInput", "LinearLoadIssueResult"],
                        persistedStateValidator: tI,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "linear.search": "search(args: LinearSearchInput): Promise<LinearSearchResult>",
                            "linear.loadIssue": "loadIssue(args: LinearLoadIssueInput): Promise<LinearLoadIssueResult>"
                        },
                        effectsArray: ["linear.search", "linear.loadIssue"],
                        effectsValidators: {
                            "linear.search": tT,
                            "linear.loadIssue": tS
                        }
                    },
                    mail: r(717037).ZJ,
                    marketplace: {
                        dataTypes: tC,
                        dataTypesArray: ["MarketplacePersistedState", "InstallMarketplaceTemplateInput", "InstallMarketplaceTemplateResult", "SearchMarketplaceTemplatesInput", "SearchMarketplaceTemplateItem", "SearchMarketplaceTemplatesResult"],
                        persistedStateValidator: tA,
                        persistedState: "export type MarketplacePersistedState = Record<string, never>",
                        triggers: {},
                        effects: tU,
                        effectsArray: ["marketplace.installTemplate", "marketplace.searchTemplates"],
                        effectsValidators: {
                            "marketplace.installTemplate": tP,
                            "marketplace.searchTemplates": tM
                        }
                    },
                    mcpServer: {
                        dataTypes: "",
                        dataTypesArray: [],
                        persistedStateValidator: tL,
                        persistedState: tD,
                        triggers: {},
                        effects: tz,
                        effectsArray: ["mcpServer.runTool", "mcpServer.listResources", "mcpServer.readResource", "mcpServer.listPrompts", "mcpServer.getPrompt", "mcpServer.listTools"],
                        effectsValidators: {
                            "mcpServer.runTool": tN,
                            "mcpServer.listResources": tE,
                            "mcpServer.readResource": tO,
                            "mcpServer.listPrompts": tF,
                            "mcpServer.getPrompt": tG,
                            "mcpServer.listTools": tV
                        }
                    },
                    microsoftTeams: {
                        dataTypes: tW,
                        dataTypesArray: ["MicrosoftTeamsPersistedState", "MicrosoftTeamsSearchInput", "MicrosoftTeamsSearchResult", "MicrosoftTeamsViewChannelInput", "MicrosoftTeamsViewChannelResult", "MicrosoftTeamsLoadMessageInput", "MicrosoftTeamsLoadMessageResult", "MicrosoftTeamsViewChatInput", "MicrosoftTeamsViewChatResult", "MicrosoftTeamsGetUserMessagesInput", "MicrosoftTeamsGetUserMessagesResult"],
                        persistedStateValidator: tB,
                        persistedState: "",
                        triggers: {},
                        effects: tY,
                        effectsArray: ["microsoftTeams.search", "microsoftTeams.viewChannel", "microsoftTeams.loadMessage", "microsoftTeams.viewChat", "microsoftTeams.getUserMessages"],
                        effectsValidators: {
                            "microsoftTeams.search": tH,
                            "microsoftTeams.viewChannel": tQ,
                            "microsoftTeams.loadMessage": tZ,
                            "microsoftTeams.viewChat": tJ,
                            "microsoftTeams.getUserMessages": tK
                        }
                    },
                    notion: {
                        dataTypes: t2,
                        dataTypesArray: ["RecurrenceTriggerBase", "RecurrenceTriggerFrequencyConfig", "NotionListUserConnectionsInput", "NotionCreateUserConnectionInput", "ModulesModuleEntry", "PreconfiguredMcpServerEntry"],
                        persistedStateValidator: t3,
                        persistedState: "ownedByDatabasePropertyIds?: Array<string>",
                        triggers: re,
                        effects: rK,
                        effectsArray: ["notion.sendNotification", "notion.getPageDiscussions", "notion.addCommentToDiscussion", "notion.getUserEngagementAnalytics", "notion.getContentEngagementAnalytics", "notion.getDailyUsersAnalytics", "notion.listUsersAnalytics", "notion.listContentAnalytics", "notion.getPageAnalyticsTimeSeries", "notion.getPageVisitors", "notion.listTeamspaces", "notion.getTeamspaceTopLevelPagesAndDatabases", "notion.createDatabase", "notion.loadAgent", "notion.loadUser", "notion.createAgent", "notion.createDatabaseAgent", "notion.updateDatabase", "notion.createTwoWayRelation", "notion.updateAgent", "notion.loadDatabase", "notion.loadDataSource", "notion.loadPage", "notion.loadPermissions", "notion.viewFileUrl", "notion.createPage", "notion.createFactoryTask", "notion.updatePage", "notion.updatePermission", "notion.deletePages", "notion.archivePages", "notion.unarchivePages", "notion.deleteDatabases", "notion.querySql", "notion.queryDataSource", "notion.queryView", "notion.queryMeetings", "notion.queryThreads", "notion.investigateThread", "notion.createAndRunThread", "notion.spawnSubagent", "notion.wideResearch", "notion.getFormulaValue", "notion.search", "notion.searchUsers", "notion.loadMeetingNoteTranscript", "notion.getUserActivity", "notion.listUserConnections", "notion.createUserConnection"],
                        effectsValidators: {
                            "notion.sendNotification": rt,
                            "notion.getPageDiscussions": rr,
                            "notion.addCommentToDiscussion": ra,
                            "notion.getUserEngagementAnalytics": ri,
                            "notion.getContentEngagementAnalytics": ro,
                            "notion.getDailyUsersAnalytics": rn,
                            "notion.listUsersAnalytics": rl,
                            "notion.listContentAnalytics": rs,
                            "notion.getPageAnalyticsTimeSeries": rc,
                            "notion.getPageVisitors": ru,
                            "notion.listTeamspaces": rd,
                            "notion.getTeamspaceTopLevelPagesAndDatabases": rp,
                            "notion.createDatabase": rg,
                            "notion.loadAgent": rm,
                            "notion.loadUser": rb,
                            "notion.createAgent": ry,
                            "notion.createDatabaseAgent": r_,
                            "notion.updateDatabase": rh,
                            "notion.createTwoWayRelation": rf,
                            "notion.updateAgent": rx,
                            "notion.loadDatabase": rq,
                            "notion.loadDataSource": rj,
                            "notion.loadPage": rv,
                            "notion.loadPermissions": rk,
                            "notion.viewFileUrl": rw,
                            "notion.createPage": rI,
                            "notion.createFactoryTask": rT,
                            "notion.updatePage": rS,
                            "notion.updatePermission": rR,
                            "notion.deletePages": rC,
                            "notion.archivePages": rA,
                            "notion.unarchivePages": rP,
                            "notion.deleteDatabases": rM,
                            "notion.querySql": rU,
                            "notion.queryDataSource": rD,
                            "notion.queryView": rL,
                            "notion.queryMeetings": rN,
                            "notion.queryThreads": rE,
                            "notion.investigateThread": rO,
                            "notion.createAndRunThread": rF,
                            "notion.spawnSubagent": rG,
                            "notion.wideResearch": rV,
                            "notion.getFormulaValue": rz,
                            "notion.search": rW,
                            "notion.searchUsers": rB,
                            "notion.loadMeetingNoteTranscript": rH,
                            "notion.getUserActivity": rQ,
                            "notion.listUserConnections": rZ,
                            "notion.createUserConnection": rJ
                        }
                    },
                    outlook: {
                        dataTypes: rY,
                        dataTypesArray: ["OutlookPersistedState", "OutlookSearchInput", "OutlookSearchResult", "OutlookLoadMessageInput", "OutlookLoadMessageResult", "OutlookLoadThreadInput", "OutlookLoadThreadResult", "OutlookQueryInput", "OutlookQueryResult"],
                        persistedStateValidator: rX,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "outlook.search": "search(args: OutlookSearchInput): Promise<OutlookSearchResult>",
                            "outlook.loadMessage": "loadMessage(args: OutlookLoadMessageInput): Promise<OutlookLoadMessageResult>",
                            "outlook.loadThread": "loadThread(args: OutlookLoadThreadInput): Promise<OutlookLoadThreadResult>",
                            "outlook.query": "query(args: OutlookQueryInput): Promise<OutlookQueryResult>"
                        },
                        effectsArray: ["outlook.search", "outlook.loadMessage", "outlook.loadThread", "outlook.query"],
                        effectsValidators: {
                            "outlook.search": r$,
                            "outlook.loadMessage": r9,
                            "outlook.loadThread": r4,
                            "outlook.query": r6
                        }
                    },
                    salesforce: {
                        dataTypes: r5,
                        dataTypesArray: ["SalesforcePersistedState", "SalesforceSearchInput", "SalesforceSearchResult", "SalesforceSoqlQueryInput", "SalesforceSoqlQueryResult", "SalesforceGetSampleInput", "SalesforceSampleRecord", "SalesforceGetSampleResult", "SalesforceFindUserIdsInput", "SalesforceFindUserIdsResult", "SalesforceLoadRecordInput", "SalesforceLoadRecordResult"],
                        persistedStateValidator: r0,
                        persistedState: "",
                        triggers: {},
                        effects: at,
                        effectsArray: ["salesforce.search", "salesforce.soqlQuery", "salesforce.getSample", "salesforce.findUserIds", "salesforce.loadRecord"],
                        effectsValidators: {
                            "salesforce.search": r8,
                            "salesforce.soqlQuery": r1,
                            "salesforce.getSample": r2,
                            "salesforce.findUserIds": r3,
                            "salesforce.loadRecord": ae
                        }
                    },
                    search: r(166919)._,
                    security: {
                        dataTypes: aa,
                        dataTypesArray: ["SecurityPersistedState", "SecurityThreatDetectedTrigger", "SecurityThreatDetectedTriggerVariables", "SecuritySearchAuditLogsInput", "SecuritySearchAuditLogsResult", "SecurityAuditLogEntry", "SecurityGetAuditLogEntryInput", "SecurityAuditLogEntryDetail"],
                        persistedStateValidator: ai,
                        persistedState: "export type SecurityPersistedState = Record<string, never>",
                        triggers: ao,
                        effects: as,
                        effectsArray: ["security.searchAuditLogs", "security.getAuditLogEntry"],
                        effectsValidators: {
                            "security.searchAuditLogs": an,
                            "security.getAuditLogEntry": al
                        }
                    },
                    sharepoint: {
                        dataTypes: ac,
                        dataTypesArray: ["SharepointPersistedState", "SharepointSearchInput", "SharepointSearchResult", "SharepointLoadFileInput", "SharepointLoadFileResult"],
                        persistedStateValidator: au,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "sharepoint.search": "search(args: SharepointSearchInput): Promise<SharepointSearchResult>",
                            "sharepoint.loadFile": "loadFile(args: SharepointLoadFileInput): Promise<SharepointLoadFileResult>"
                        },
                        effectsArray: ["sharepoint.search", "sharepoint.loadFile"],
                        effectsValidators: {
                            "sharepoint.search": ad,
                            "sharepoint.loadFile": ap
                        }
                    },
                    skills: {
                        dataTypes: "type SkillsPersistedState = Record<string, never>",
                        dataTypesArray: ["SkillsPersistedState"],
                        persistedStateValidator: ag,
                        persistedState: "export type SkillsPersistedState = Record<string, never>",
                        triggers: {},
                        effects: {},
                        effectsArray: [],
                        effectsValidators: {}
                    },
                    slack: {
                        dataTypes: am,
                        dataTypesArray: ["SlackSearchInput", "SlackSearchResult", "SlackSearchEffectResult", "SlackLoadMessageInput", "SlackLoadMessageResult", "SlackGetUserMessagesInput", "SlackUserMessagesResult"],
                        persistedStateValidator: ay,
                        persistedState: ab,
                        triggers: a_,
                        effects: aM,
                        effectsArray: ["slack.createThreadInChannel", "slack.createThreadInDirectMessage", "slack.replyInThread", "slack.updateMessage", "slack.addReactionToMessage", "slack.removeReactionFromMessage", "slack.search", "slack.getThreadsInChannelSince", "slack.queryChannels", "slack.getUser", "slack.findUserByEmail", "slack.parseSlackUriOrUrl", "slack.loadMessage", "slack.viewFileUrl", "slack.getUserMessages"],
                        effectsValidators: {
                            "slack.createThreadInChannel": ah,
                            "slack.createThreadInDirectMessage": af,
                            "slack.replyInThread": ax,
                            "slack.updateMessage": aq,
                            "slack.addReactionToMessage": aj,
                            "slack.removeReactionFromMessage": av,
                            "slack.search": ak,
                            "slack.getThreadsInChannelSince": aw,
                            "slack.queryChannels": aI,
                            "slack.getUser": aT,
                            "slack.findUserByEmail": aS,
                            "slack.parseSlackUriOrUrl": aR,
                            "slack.loadMessage": aC,
                            "slack.viewFileUrl": aA,
                            "slack.getUserMessages": aP
                        }
                    },
                    system: {
                        dataTypes: aU,
                        dataTypesArray: ["SystemWaitInput", "SystemWaitResult"],
                        persistedStateValidator: aD,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "system.wait": "(args: SystemWaitInput) => Promise<SystemWaitResult>"
                        },
                        effectsArray: ["system.wait"],
                        effectsValidators: {
                            "system.wait": aL
                        }
                    },
                    test: {
                        dataTypes: aF,
                        dataTypesArray: ["TestPersistedState", "TestModulePermissionAction", "TestModulePermission", "TestModulePermissionAiConfigurable", "TestPersistedData", "TestModuleConfiguration", "TestGetStateInput", "TestGetStateOutput"],
                        persistedStateValidator: aV,
                        persistedState: aG,
                        triggers: {},
                        effects: {
                            "test.getState": "(args: TestGetStateInput) => Promise<TestGetStateOutput>"
                        },
                        effectsArray: ["test.getState"],
                        effectsValidators: {
                            "test.getState": az
                        }
                    },
                    web: {
                        dataTypes: aW,
                        dataTypesArray: ["WebPersistedState", "WebSearchInput", "WebSearchOutput", "WebLoadPageInput", "WebLoadPageResult"],
                        persistedStateValidator: aB,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "web.search": "(args: WebSearchInput) => Promise<WebSearchOutput>",
                            "web.loadPage": "(args: WebLoadPageInput) => Promise<WebLoadPageResult>"
                        },
                        effectsArray: ["web.search", "web.loadPage"],
                        effectsValidators: {
                            "web.search": aH,
                            "web.loadPage": aQ
                        }
                    },
                    worker: {
                        dataTypes: aJ,
                        dataTypesArray: ["WorkerToolSchema", "WorkerToolDescription", "WorkerListToolsInput"],
                        persistedStateValidator: aY,
                        persistedState: aK,
                        triggers: {},
                        effects: a9,
                        effectsArray: ["worker.listTools", "worker.runTool"],
                        effectsValidators: {
                            "worker.listTools": aX,
                            "worker.runTool": a$
                        }
                    },
                    workers: {
                        dataTypes: a4,
                        dataTypesArray: ["WorkersListEntry", "WorkersListInput"],
                        persistedStateValidator: a6,
                        persistedState: "",
                        triggers: {},
                        effects: {
                            "workers.list": "(args: WorkersListInput) => Promise<WorkersListEntry[]>"
                        },
                        effectsArray: ["workers.list"],
                        effectsValidators: {
                            "workers.list": a7
                        }
                    }
                }
        },
        994818: (e, t, r) => {
            function a(...e) {
                return r(969475).object({
                    required: {
                        table: r(969475).literals(...e),
                        id: r(969475).string(),
                        spaceId: r(969475).string()
                    },
                    optional: {}
                })
            }

            function i(...e) {
                return r(969475).object({
                    required: {
                        table: r(969475).literals(...e),
                        id: r(969475).string()
                    },
                    optional: {
                        spaceId: r(969475).string()
                    }
                })
            }

            function o(...e) {
                return r(969475).object({
                    required: {
                        table: r(969475).literals(...e),
                        id: r(969475).string(),
                        spaceId: r(969475).string()
                    },
                    optional: {}
                })
            }
            r.d(t, {
                IK: () => a,
                VR: () => i,
                uV: () => o
            })
        }
    }
]);