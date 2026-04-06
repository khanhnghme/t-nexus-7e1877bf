"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [47281], {
        9774: (e, t, o) => {
            o.r(t), o.d(t, {
                COMPLETION_THROTTLE: () => a,
                PREVIEW_STEP_DELAY: () => n,
                postProcessAICreatedStores: () => c,
                showCompletionErrorWithCode: () => s,
                wrapTemporaryBlocksInList: () => d
            }), o(18107), o(967357);
            var i = () => o(749560),
                r = () => o(135674),
                l = () => o(173157);
            let a = 300,
                n = 250;

            function s(e) {
                let t = o(962299).A.getIntl();
                return 451 === e ? o(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.moderationError",
                        defaultMessage: "AI does not allow content that is harmful or illegal. Please revise your input and try again. (451)"
                    })
                }) : 413 === e ? o(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.promptOrAttachmentTooLarge",
                        defaultMessage: "Query or attachment is too large. Please revise your input and try again. (413)"
                    })
                }) : 502 === e || 503 === e || 504 === e ? o(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.providerError",
                        defaultMessage: "We’re experiencing issues with our AI provider. Try again in a few minutes. ({errorCode})"
                    }, {
                        errorCode: e
                    })
                }) : void o(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.genericError",
                        defaultMessage: "AI is temporarily unavailable. Try again in a few minutes. ({errorCode})"
                    }, {
                        errorCode: e
                    })
                })
            }

            function c(e, t) {
                for (let o of t) i().In({
                    environment: e,
                    blockStore: o
                })
            }

            function d(e) {
                var t;
                let {
                    environment: i,
                    stores: a,
                    listId: n,
                    inMemoryRecordCache: s,
                    transaction: c
                } = e, d = (null == (t = a.at(0)) ? void 0 : t.getSpaceId()) ? ? c.spaceId, p = new(o(517013)).pm({
                    environment: i,
                    pointer: {
                        table: o(832375).evP,
                        id: n || (0, o(295447).Z1)({
                            environment: i,
                            table: o(832375).evP,
                            spaceId: d
                        }),
                        spaceId: d
                    },
                    recordStoreOptions: {
                        inMemoryRecordCache: s,
                        userId: i.currentUser.id
                    },
                    path: ["content"]
                });
                for (let e of a)(0, r().B)({
                    parentStore: p,
                    appendStore: e,
                    transaction: c
                }), (0, l().z)({
                    store: e,
                    data: {
                        parent_id: p.id,
                        parent_table: p.table,
                        alive: !0
                    },
                    transaction: c
                });
                return p
            }
        },
        447281: (e, t, o) => {
            o.r(t), o.d(t, {
                autofillPropertyForBlocks: () => S,
                autofillPropertyForCollection: () => k,
                fillAllPagesMessages: () => A,
                getDefaultAiInference: () => O,
                saveOrRemovePropertyAiInference: () => M,
                triggerAiAutofillUpsell: () => I
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(672577), o(803949), o(581454);
            var i = o(296540),
                r = () => o(436555),
                l = () => o(517013);
            o(430670);
            var a = () => o(561872),
                n = () => o(300441),
                s = () => o(722371);
            let c = (0, o(477465).Dv)("fillAutofillPropertiesInViewTask");
            var d = () => o(298176),
                p = o(474848);
            let u = function({
                environment: e,
                inferenceIds: t,
                aiInference: l
            }) {
                let a = (0, o(682985).K8)(() => {
                        let {
                            state: e
                        } = d().m;
                        return "uninitialized" === e.type ? null : {
                            numBlocksToAutofill: e.numBlocksToAutofill,
                            numBlocksAutofilled: e.numBlocksAutofilled,
                            propertySchema: e.propertySchema,
                            collectionId: e.collectionId,
                            sessionId: e.sessionId,
                            haveAllBlocksCompletedAutofill: e.haveAllBlocksCompletedAutofill
                        }
                    }, []),
                    n = (0, i.useCallback)(() => {
                        a && (t.forEach(t => {
                            o(942806).trackAiAutofillAction(e, {
                                ai_inference_type: l.type,
                                type: "undo_from_snackbar",
                                inference_id: t,
                                collection_id: a.collectionId,
                                session_id: a.sessionId
                            })
                        }), (0, o(462446).t)({
                            environment: e,
                            preventSelectText: !0
                        }), r().N2(), d().m.setState({
                            type: "filling",
                            ...a,
                            didInterruptStreaming: !0
                        }))
                    }, [a, e, l, t]);
                if (!a) return null;
                let {
                    numBlocksToAutofill: s,
                    numBlocksAutofilled: c,
                    propertySchema: {
                        name: u
                    }
                } = a;
                return c === s ? (0, p.jsxs)(o(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    children: [(0, p.jsx)(o(16275).I, {
                        icon: o(15956).checkmarkIcon
                    }), (0, p.jsx)(o(109939).sA, {
                        defaultMessage: "AI updated “{propertyName}” on {numPages, plural, one {1 page} other {# pages}}",
                        id: "snackbar.aiAutofill.autofillInProgress",
                        values: {
                            propertyName: u,
                            numPages: s
                        }
                    }), (0, p.jsx)(o(531119).Ag, {
                        onClick: n,
                        children: (0, p.jsx)(o(109939).sA, {
                            defaultMessage: "Undo",
                            id: "snackbar.aiAutofill.undo"
                        })
                    }), (0, p.jsx)(o(531119).Ag, {
                        onClick: () => {
                            r().N2()
                        },
                        children: (0, p.jsx)(o(109939).sA, {
                            defaultMessage: "Close",
                            id: "snackbar.aiAutofill.close"
                        })
                    })]
                }) : (0, p.jsxs)(o(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    children: [(0, p.jsx)(o(517334).k, {}), 0 === c ? (0, p.jsx)(o(109939).sA, {
                        defaultMessage: "AI updating “{propertyName}” on {numPages, plural, one {1 page} other {# pages}}",
                        id: "snackbar.aiAutofill.autofillStarting",
                        values: {
                            propertyName: u,
                            numPages: s
                        }
                    }) : (0, p.jsx)(o(109939).sA, {
                        defaultMessage: "AI updated “{propertyName}” on {numFilledPages} of {numTotalPages} pages",
                        id: "snackbar.aiAutofill.completedAutofill",
                        values: {
                            propertyName: u,
                            numFilledPages: c,
                            numTotalPages: s
                        }
                    }), (0, p.jsx)(o(531119).Ag, {
                        onClick: n,
                        children: (0, p.jsx)(o(109939).sA, {
                            defaultMessage: "Stop & undo",
                            id: "snackbar.aiAutofill.undoAndStop"
                        })
                    })]
                })
            };
            var f = () => o(41403),
                m = () => o(421439);
            let A = (0, o(109939).YK)({
                fillAllPagesTooltip: {
                    defaultMessage: "Autofill all pages in this view",
                    id: "aiAutofill.fillAllPages.buttonTooltip"
                },
                fillAllPagesAddOnMessage: {
                    defaultMessage: "Only with Notion AI add-on",
                    id: "aiAutofill.fillAllPages.onlyWithAiAddOnMessageInTooltip"
                },
                fillAllPagesAddAiMessage: {
                    defaultMessage: "Only with upgraded Notion AI",
                    id: "aiAutofill.fillAllPages.onlyWithAiBusinessMessageInTooltip"
                }
            });

            function g(e) {
                var t;
                let {
                    environment: i,
                    propertyId: r,
                    propertySchema: l,
                    storesWithCompletions: a,
                    useTemporaryStore: n,
                    markdownLinkifyIt: s,
                    tinyMceMicrosoftWordPasteFilter: c,
                    clipboardActions: d,
                    doneStreaming: p,
                    aiInferenceOverride: u
                } = e, f = null == (t = a[0]) ? void 0 : t.store.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "BlockPropertyValue.handleActionButtonClick.aiAutofill",
                    environment: i,
                    cellTarget: f ? {
                        spaceWithId: f
                    } : void 0,
                    canUndo: !n,
                    undoCheckpoint: !0,
                    perform: e => {
                        y({
                            environment: i,
                            propertyId: r,
                            propertySchema: l,
                            storesWithCompletions: a,
                            useTemporaryStore: n,
                            markdownLinkifyIt: s,
                            tinyMceMicrosoftWordPasteFilter: c,
                            clipboardActions: d,
                            doneStreaming: p,
                            aiInferenceOverride: u,
                            transaction: e
                        })
                    }
                })
            }

            function y(e) {
                var t;
                let {
                    environment: i,
                    propertyId: r,
                    propertySchema: l,
                    storesWithCompletions: n,
                    useTemporaryStore: c,
                    markdownLinkifyIt: d,
                    tinyMceMicrosoftWordPasteFilter: p,
                    clipboardActions: u,
                    doneStreaming: A,
                    aiInferenceOverride: g,
                    transaction: y
                } = e, _ = o(218744).default.checkGate({
                    gateName: "collection_schema_hlop"
                });
                for (let {
                        store: e,
                        temporaryStore: v,
                        completion: h
                    } of n) {
                    let n, C = c ? v : e;
                    switch (l.type) {
                        case "text":
                            n = u.getInlineTitleValueFromClipboardTextHtml({
                                text: h.trim(),
                                stripText: !1,
                                stripSurroundingWhitespace: !0,
                                markdownLinkifyIt: d,
                                tinyMceMicrosoftWordPasteFilter: p
                            });
                            break;
                        case "multi_select":
                        case "select":
                            let I = c ? null == (t = e.getAssociatedCollectionStore()) ? void 0 : t.clone(v.inMemoryRecordCache) : e.getAssociatedCollectionStore(),
                                S = (null == I ? void 0 : I.getSchema()[r]) || l,
                                k = g ? ? l.select_ai_inference,
                                P = h.trim().split(",").map(e => e.trim());
                            if (A || (P = P.slice(0, -1)), P.length > 0 && "select" === l.type && (P = P.slice(0, 1)), I && null != k && k.add_options) {
                                let e = function(e) {
                                    let {
                                        newTokenValues: t,
                                        property: i,
                                        propertySchema: r,
                                        collectionId: l,
                                        spaceId: a,
                                        collectionSchemaHLOP: n
                                    } = e;
                                    if (!(0, o(532792).l)(r)) return;
                                    let s = r.options || [],
                                        c = t.flatMap(e => e.filter(e => e && !s.find(t => t.value.toLowerCase() === e.toLowerCase())));
                                    if (0 === c.length) return;
                                    let d = [];
                                    return c.forEach(e => {
                                        let t = (0, o(326044).Z)(s),
                                            c = {
                                                id: o(92513).JW(),
                                                value: e,
                                                color: t
                                            };
                                        "alphabetical" === r.auto_sort_options || "reverse_alphabetical" === r.auto_sort_options ? d.push((0, o(570637).o)({
                                            collectionId: l,
                                            spaceId: a,
                                            property: i,
                                            propertySchema: r,
                                            newOption: c,
                                            isAscending: "alphabetical" === r.auto_sort_options,
                                            collectionSchemaHLOP: n
                                        })) : d.push((0, o(232456).T)({
                                            updateCollectionPropertySchemaOperation: {
                                                pointer: {
                                                    id: l,
                                                    spaceId: a,
                                                    table: o(832375).VlP
                                                },
                                                command: "updateCollectionPropertySchema",
                                                path: ["schema", i, "options"],
                                                args: {
                                                    primitiveOp: {
                                                        command: "keyedObjectListAfter",
                                                        args: {
                                                            value: c
                                                        }
                                                    }
                                                }
                                            },
                                            collectionSchemaHLOPEnabled: n
                                        }))
                                    }), d
                                }({
                                    newTokenValues: [P],
                                    property: r,
                                    propertySchema: S,
                                    collectionId: I.id,
                                    spaceId: I.getSpaceShardedPointer().spaceId,
                                    collectionSchemaHLOP: _
                                });
                                if (e)
                                    for (let t of e)(0, m().y4)({
                                        store: I,
                                        operation: t,
                                        transaction: y
                                    })
                            }
                            null != k && k.add_options || (P = P.filter(e => {
                                var t;
                                return null == (t = l.options) ? void 0 : t.find(t => t.value === e)
                            })), n = (0, a().rK)(P);
                            break;
                        default:
                            (0, s().HB)(l)
                    }
                    f().R9({
                        environment: i,
                        store: C.getPropertyStore(r),
                        value: n,
                        transaction: y
                    })
                }
            }
            let _ = (0, o(109939).YK)({
                    FAILED_TO_AUTOFILL: {
                        defaultMessage: "Something went wrong. Please try again later",
                        id: "propertyCompletionActions.propertyCompletionActions.error.unableToAutofill"
                    },
                    INVALID_PROPERTY_FOR_AUTOFILL: {
                        defaultMessage: "Invalid property configuration for AI autofill",
                        id: "propertyCompletionActions.propertyCompletionActions.error.invalidPropertyForAutofill"
                    },
                    NO_BLOCKS_TO_AUTOFILL: {
                        defaultMessage: "Nothing to update with AI",
                        id: "propertyCompletionActions.propertyCompletionActions.error.noBlocksToAutofill"
                    }
                }),
                v = (0, o(109939).YK)({
                    featureUnavailable: {
                        id: "completionActions.featureNotEnabledError",
                        defaultMessage: "This feature is not currently enabled"
                    }
                });

            function h({
                autofillPropertyResult: e
            }) {
                let t = o(962299).A.formatMessage(_[e]);
                r().N2(), o(647095).c1(t)
            }
            let C = {
                ai_limit_property_autofill: (0, p.jsx)(o(109939).sA, {
                    defaultMessage: "This workspace has used all of its free AI responses. Contact your workspace owner to upgrade Notion AI.",
                    id: "aiAutofill.outOfAiBusinessUpsellDialogMessage"
                }),
                ai_autofill_try_on_view: (0, p.jsx)(o(109939).sA, {
                    defaultMessage: "This workspace has used all of its free AI responses. Contact your workspace owner to upgrade Notion AI.",
                    id: "aiAutofill.outOfAiUpgradedUpsellDialogMessage"
                }),
                ai_autofill_on_page_edit: (0, p.jsx)(o(109939).sA, {
                    defaultMessage: "Auto-update requires upgraded Notion AI. Contact your workspace owner to upgrade Notion AI.",
                    id: "aiAutofill.autoUpdateOnPageEditAiUpgradedUpsellDialogMessage"
                }),
                ai_autofill_fill_all_pages: (0, p.jsx)(o(109939).sA, {
                    defaultMessage: "Updating all pages requires upgraded Notion AI. Contact your workspace owner to upgrade Notion AI.",
                    id: "aiAutofill.fillAllPagesAiUpgradedUpsellDialogMessage"
                }),
                ai_autofill_bulk_fill: (0, p.jsx)(o(109939).sA, {
                    defaultMessage: "Filling more pages at once requires upgraded Notion AI. Contact your workspace owner to upgrade Notion AI.",
                    id: "aiAutofill.bulkFillAiUpgradedUpsellDialogMessage"
                })
            };

            function I({
                environment: e,
                from: t,
                upsell: i,
                store: r
            }) {
                let l = (0, o(974410).f)(r);
                null != l && l.canAdmin() || o(647095).c1(C[t]), o(907063).K(e, {
                    from: t,
                    upsell: i,
                    spaceStore: l
                })
            }
            async function S({
                environment: e,
                stores: t,
                property: i,
                propertySchema: l,
                userEventForAnalytics: a,
                sessionIdForAnalytics: n,
                collectionStore: c,
                collectionViewStore: f,
                collectionViewBlockStore: m,
                from: A,
                isBulkAction: _,
                aiInferenceOverride: C,
                transaction: k
            }) {
                var P, T;
                let b = n || o(92513).JW(),
                    w = t.map(e => ({
                        spaceId: e.getSpaceId(),
                        ...e.pointer,
                        propertyId: i,
                        inferenceId: o(92513).JW()
                    })),
                    M = t[0].getAssociatedCollectionId() ? ? (null == c ? void 0 : c.id) ? ? (null == (P = t[0].getCollectionStoreIfSingleSource()) ? void 0 : P.id),
                    O = new(o(870941)).A({
                        name: "propertyCompletionActions.autofillPropertyForBlocks"
                    });
                if (d().m.setIsWriting({
                        stores: t,
                        propertySchema: l,
                        sessionIdForAnalytics: n,
                        collectionId: M
                    }), "uninitialized" !== d().m.state.type && (0, o(9247).$M)(l) && M) {
                    r().D6({
                        label: (0, p.jsx)(u, {
                            environment: e,
                            inferenceIds: w.map(e => e.inferenceId),
                            aiInference: (0, o(9247).om)(l)
                        }),
                        durationMs: o(441742).LX
                    });
                    try {
                        if (e.defaultRecordCache.inMemoryRecordCache.addCacheOverride(O), !(0, s().EI)(w)) return h({
                            autofillPropertyResult: "NO_BLOCKS_TO_AUTOFILL"
                        });
                        let n = C || (0, o(9247).om)(l);
                        if (!n) return h({
                            autofillPropertyResult: "INVALID_PROPERTY_FOR_AUTOFILL"
                        });
                        w.forEach(t => {
                            o(942806).trackAiAutofillAction(e, {
                                type: a,
                                inference_id: t.inferenceId,
                                ai_inference_type: n.type,
                                collection_id: M,
                                session_id: b
                            })
                        });
                        let p = (0, o(974410).f)(c);
                        p && e.api.callApi({
                            eventName: "publishAiSession",
                            environment: e,
                            data: {
                                inference_type: "autofill",
                                id: b,
                                spaceId: p.id,
                                metadata: {
                                    blockPropertyPointers: w,
                                    aiInference: n,
                                    collection_id: M
                                }
                            }
                        });
                        let u = await (0, o(628860).B)(e, {
                                name: "collection_property_autofill",
                                spaceId: null == p ? void 0 : p.id,
                                userId: null == (T = o(728372).AppStoreCurrentUserStore.state) ? void 0 : T.id,
                                amount: "unknown"
                            }),
                            S = await e.api.callStreamApi({
                                eventName: "getCompletionForProperty",
                                environment: e,
                                data: {
                                    blockPropertyPointers: w,
                                    aiInference: n,
                                    aiSessionId: b,
                                    model: "default"
                                }
                            });
                        if ("success" !== S.type) return h({
                            autofillPropertyResult: "FAILED_TO_AUTOFILL"
                        });
                        c && (0, o(85868).E)({
                            block_id: t[0].pointer.id,
                            property: i,
                            property_type: l.type,
                            from: A,
                            environment: e,
                            collection_id: null == c ? void 0 : c.id,
                            collection_view_id: null == f ? void 0 : f.id,
                            collection_view_block_id: null == m ? void 0 : m.id,
                            isFromBulkActionsToolbar: _
                        });
                        let P = Object.fromEntries(t.map(e => [e.pointer.id, {
                                store: e,
                                temporaryStore: e.clone(O),
                                completion: ""
                            }])),
                            U = new Set,
                            [x, N, j] = await Promise.all([o(94386).g.load(), o(393771).S.load(), o(235645).R.clipboardActions.load()]);
                        if (o(331653).hS.is(S.data)) {
                            for await (let t of S.data) {
                                if ("error" === t.type) return d().m.setState({ ...d().m.state,
                                        didInterruptStreaming: !0
                                    }),
                                    function({
                                        errorCode: e,
                                        environment: t,
                                        autofillAvailability: i,
                                        collectionStore: l
                                    }) {
                                        return 405 === e ? r().D6({
                                            label: o(962299).A.formatMessage(v.featureUnavailable)
                                        }) : (402 === e && i.upsell && (r().N2(), I({
                                            environment: t,
                                            from: "ai_limit_property_autofill",
                                            upsell: i.upsell,
                                            store: l
                                        })), o(9774).showCompletionErrorWithCode(e))
                                    }({
                                        errorCode: t.errorCode,
                                        environment: e,
                                        autofillAvailability: u,
                                        collectionStore: c
                                    });
                                if (d().m.state.didInterruptStreaming) return;
                                let a = P[t.blockPropertyPointer.id],
                                    n = a.completion + t.completion;
                                P[t.blockPropertyPointer.id] = { ...a,
                                    completion: n
                                }, U.add(t.blockPropertyPointer.id), k ? y({
                                    environment: e,
                                    propertyId: i,
                                    propertySchema: l,
                                    storesWithCompletions: Object.values(P),
                                    useTemporaryStore: !0,
                                    markdownLinkifyIt: x,
                                    tinyMceMicrosoftWordPasteFilter: N,
                                    clipboardActions: j,
                                    doneStreaming: !0,
                                    aiInferenceOverride: C,
                                    transaction: k
                                }) : g({
                                    environment: e,
                                    propertyId: i,
                                    propertySchema: l,
                                    storesWithCompletions: Object.values(P),
                                    useTemporaryStore: !0,
                                    markdownLinkifyIt: x,
                                    tinyMceMicrosoftWordPasteFilter: N,
                                    clipboardActions: j,
                                    aiInferenceOverride: C
                                }), d().m.setState({ ...d().m.state,
                                    numBlocksAutofilled: U.size
                                })
                            }
                            d().m.setState({ ...d().m.state,
                                haveAllBlocksCompletedAutofill: !0
                            })
                        }
                        e.defaultRecordCache.inMemoryRecordCache.removeCacheOverride(O), k ? y({
                            environment: e,
                            propertyId: i,
                            propertySchema: l,
                            storesWithCompletions: Object.values(P),
                            useTemporaryStore: !1,
                            markdownLinkifyIt: x,
                            tinyMceMicrosoftWordPasteFilter: N,
                            clipboardActions: j,
                            doneStreaming: !0,
                            aiInferenceOverride: C,
                            transaction: k
                        }) : g({
                            environment: e,
                            propertyId: i,
                            propertySchema: l,
                            storesWithCompletions: Object.values(P),
                            useTemporaryStore: !1,
                            markdownLinkifyIt: x,
                            tinyMceMicrosoftWordPasteFilter: N,
                            clipboardActions: j,
                            doneStreaming: !0,
                            aiInferenceOverride: C
                        })
                    } finally {
                        e.defaultRecordCache.inMemoryRecordCache.hasCacheOverride(O) && e.defaultRecordCache.inMemoryRecordCache.removeCacheOverride(O)
                    }
                }
            }
            async function k(e) {
                let t = o(218744).default.checkGate({
                    gateName: "autofill_all_pages_use_new_endpoint"
                });
                return await (t ? b : w)(e)
            }
            let P = (0, o(109939).YK)({
                invalidCollectionSource: {
                    id: "propertyCompletionActions.error.invalidCollectionSource",
                    defaultMessage: "There was a problem with the database."
                },
                noMemcachedRecord: {
                    id: "propertyCompletionActions.error.noMemcachedRecord",
                    defaultMessage: "Something went wrong. Please try again."
                },
                lockAlreadyTaken: {
                    id: "propertyCompletionActions.error.lockAlreadyTaken",
                    defaultMessage: "A fill is already in progress"
                },
                invalidUser: {
                    id: "propertyCompletionActions.error.invalidUser",
                    defaultMessage: "The provided user information is not valid."
                },
                invalidCollectionView: {
                    id: "propertyCompletionActions.error.invalidCollectionView",
                    defaultMessage: "We encountered an issue accessing the collection view."
                },
                invalidCollection: {
                    id: "propertyCompletionActions.error.invalidCollection",
                    defaultMessage: "The collection you are trying to access is not valid."
                },
                noLoadedUser: {
                    id: "propertyCompletionActions.error.noLoadedUser",
                    defaultMessage: "User information is missing."
                },
                noUserTimeZone: {
                    id: "propertyCompletionActions.error.noUserTimeZone",
                    defaultMessage: "User time zone information is not available."
                },
                unauthorizedCollectionAccess: {
                    id: "propertyCompletionActions.error.unauthorizedCollectionAccess",
                    defaultMessage: "Insufficient permissions"
                },
                unableToQueryCollection: {
                    id: "propertyCompletionActions.error.unableToQueryCollection",
                    defaultMessage: "We couldn’t retrieve the collection details at this time."
                },
                invalidPropertyForAutofill: {
                    id: "propertyCompletionActions.error.invalidPropertyForAutofill",
                    defaultMessage: "The property provided for autofill is not valid."
                },
                NoResults: {
                    id: "propertyCompletionActions.error.noResults",
                    defaultMessage: "No results were found. Please try again."
                },
                somethingWentWrong: {
                    id: "propertyCompletionActions.error.somethingWentWrong",
                    defaultMessage: "Something went wrong. Please try again later."
                }
            });

            function T(e) {
                switch (e) {
                    case "invalidCollectionSource":
                        return (0, p.jsx)(o(109939).sA, { ...P.invalidCollectionSource
                        });
                    case "noMemcachedRecord":
                        return (0, p.jsx)(o(109939).sA, { ...P.noMemcachedRecord
                        });
                    case "lockAlreadyTaken":
                        return (0, p.jsx)(o(109939).sA, { ...P.lockAlreadyTaken
                        });
                    case "invalidUser":
                        return (0, p.jsx)(o(109939).sA, { ...P.invalidUser
                        });
                    case "invalidCollectionView":
                        return (0, p.jsx)(o(109939).sA, { ...P.invalidCollectionView
                        });
                    case "invalidCollection":
                        return (0, p.jsx)(o(109939).sA, { ...P.invalidCollection
                        });
                    case "noLoadedUser":
                        return (0, p.jsx)(o(109939).sA, { ...P.noLoadedUser
                        });
                    case "noUserTimeZone":
                        return (0, p.jsx)(o(109939).sA, { ...P.noUserTimeZone
                        });
                    case "unauthorizedCollectionAccess":
                        return (0, p.jsx)(o(109939).sA, { ...P.unauthorizedCollectionAccess
                        });
                    case "unableToQueryCollection":
                        return (0, p.jsx)(o(109939).sA, { ...P.unableToQueryCollection
                        });
                    case "invalidPropertyForAutofill":
                        return (0, p.jsx)(o(109939).sA, { ...P.invalidPropertyForAutofill
                        });
                    case "NoResults":
                        return (0, p.jsx)(o(109939).sA, { ...P.NoResults
                        });
                    case "somethingWentWrong":
                        return (0, p.jsx)(o(109939).sA, { ...P.somethingWentWrong
                        });
                    default:
                        return (0, p.jsx)(o(109939).sA, {
                            defaultMessage: "An unexpected error occurred. Please try again.",
                            id: "propertyCompletionActions.error.unknown"
                        })
                }
            }
            async function b(e) {
                var t, i, l;
                let {
                    environment: a,
                    collectionStore: s,
                    propertySchema: d,
                    property: p,
                    collectionViewStore: u
                } = e;
                if (!(0, o(9247).$M)(d)) return;
                let f = (0, o(9247).om)(d);
                if (!s || !d || !f) return;
                let m = null == (t = (0, o(974410).f)(s)) ? void 0 : t.id;
                if (!m || !(null == (i = o(728372).AppStoreCurrentUserStore.state) ? void 0 : i.id)) return;
                let A = o(962299).A.getIntl(),
                    g = (0, o(112293).tS)({
                        environment: a,
                        intl: A,
                        store: s
                    });
                if (await o(594543).U({
                        sourceAction: "fill_all_pages",
                        propertyName: d.name,
                        collectionName: g
                    }))
                    for await (let e of ((0, o(104310).u)({
                        event: {
                            eventName: "generate_from_fill_all_pages_in_view",
                            eventProperties: {
                                collection_id: s.id,
                                ai_inference_type: f.type
                            }
                        }
                    }), (0, o(259242).UT)({
                        environment: a,
                        eventName: c,
                        request: {
                            spaceId: m,
                            collectionSource: {
                                id: s.id,
                                type: "collection",
                                spaceId: m
                            },
                            collectionViewPointer: u.pointer,
                            propertyId: p
                        },
                        multiCellRouting: {
                            spaceIds: []
                        }
                    }))) {
                        if (n().Q.isFail(e) || "failure" === e.taskStatus) return void r().D6({
                            label: T("somethingWentWrong")
                        });
                        if ((null == (l = e.value) ? void 0 : l.status) === "error") {
                            let t = e.value.errorType;
                            r().D6({
                                label: T(t)
                            });
                            return
                        }
                    }
            }
            async function w({
                environment: e,
                collectionStore: t,
                propertySchema: i,
                property: r,
                sessionIdForAnalytics: a
            }) {
                var n;
                if (!(0, o(9247).$M)(i)) return;
                let s = (0, o(9247).om)(i);
                if (!t || !i || !s) return;
                let c = await (0, o(628860).B)(e, {
                    name: "collection_property_autofill",
                    spaceId: t.getSpaceId(),
                    userId: null == (n = o(728372).AppStoreCurrentUserStore.state) ? void 0 : n.id,
                    amount: "unknown"
                });
                if (!(0, o(94418).e2)(c)) return void I({
                    environment: e,
                    from: "ai_autofill_fill_all_pages",
                    upsell: c.upsell,
                    store: t
                });
                let d = o(962299).A.getIntl(),
                    p = (0, o(112293).tS)({
                        environment: e,
                        intl: d,
                        store: t
                    });
                if (!await o(594543).U({
                        sourceAction: "fill_all_pages",
                        propertyName: i.name,
                        collectionName: p
                    })) return;
                o(942806).trackAiAutofillAction(e, {
                    type: "generate_from_fill_all_pages",
                    inference_id: o(92513).JW(),
                    ai_inference_type: s.type,
                    collection_id: t.id,
                    session_id: a ? ? o(92513).JW()
                });
                let u = [];
                u.push(o(488307).op.update({
                    pointer: t.pointer,
                    path: ["format", "update_ai_inferences_status"],
                    args: {
                        [r]: {
                            type: "requested",
                            created_time: Date.now()
                        }
                    }
                })), (0, o(916311).p)({
                    environment: e,
                    collectionStore: t,
                    performTransaction: e => {
                        for (let o of u)(0, m().y4)({
                            store: (0, l().v3)(t, o.pointer),
                            operation: o,
                            transaction: e
                        })
                    }
                })
            }

            function M(e) {
                let {
                    environment: t,
                    propertySchema: i,
                    collectionStore: r,
                    property: a,
                    draftAiInference: n
                } = e, s = "";
                switch (i.type) {
                    case "text":
                        s = "ai_inference";
                        break;
                    case "select":
                    case "multi_select":
                        s = "select_ai_inference";
                        break;
                    default:
                        return
                }
                let c = [];
                if (c.push({
                        pointer: r.pointer,
                        command: "set",
                        path: ["schema", a, s],
                        args: n
                    }), n) o(942806).trackAiAutofillSettingsAction(t, {
                    type: "set_ai_inference",
                    ai_inference_type: n.type,
                    collection_id: r.id
                });
                else {
                    let e = (0, o(9247).om)(i);
                    o(942806).trackAiAutofillSettingsAction(t, {
                        type: "remove_ai_inference",
                        ai_inference_type: null == e ? void 0 : e.type,
                        collection_id: r.id
                    })
                }(0, o(916311).p)({
                    environment: t,
                    collectionStore: r,
                    performTransaction: e => {
                        for (let t of c)(0, m().y4)({
                            store: (0, l().v3)(r, t.pointer),
                            operation: t,
                            transaction: e
                        })
                    }
                })
            }

            function O(e, t) {
                if (!(0, o(9247).$M)(e)) return;
                let i = (0, o(9247).om)(e);
                return !i && (0, o(532792).l)(e) ? {
                    type: e.type,
                    auto_update_on_edit: t,
                    add_options: !1
                } : i
            }
        },
        570637: (e, t, o) => {
            o.d(t, {
                o: () => i
            });

            function i(e) {
                let {
                    collectionId: t,
                    spaceId: i,
                    property: r,
                    propertySchema: l,
                    newOption: a,
                    isAscending: n
                } = e, {
                    collectionSchemaHLOP: s
                } = e, c = l.options || [], d = {
                    id: t,
                    spaceId: i,
                    table: o(832375).VlP
                }, p = o(381453).SL(c, e => e.value.localeCompare(a.value, void 0, {
                    sensitivity: "base"
                }) * (n ? 1 : -1) >= 0);
                if (-1 !== p) {
                    let e = {
                        command: "keyedObjectListBefore",
                        args: {
                            value: a,
                            before: c[p]
                        }
                    };
                    return (0, o(232456).T)({
                        updateCollectionPropertySchemaOperation: {
                            pointer: d,
                            command: "updateCollectionPropertySchema",
                            path: ["schema", r, "options"],
                            args: {
                                primitiveOp: e
                            }
                        },
                        collectionSchemaHLOPEnabled: s
                    })
                }
                return (0, o(232456).T)({
                    updateCollectionPropertySchemaOperation: {
                        pointer: d,
                        command: "updateCollectionPropertySchema",
                        path: ["schema", r, "options"],
                        args: {
                            primitiveOp: {
                                command: "keyedObjectListAfter",
                                args: {
                                    value: a
                                }
                            }
                        }
                    },
                    collectionSchemaHLOPEnabled: s
                })
            }
        },
        594543: (e, t, o) => {
            o.d(t, {
                U: () => i
            });
            async function i(e) {
                return new Promise(t => {
                    o(691636).A.setState({
                        open: !0,
                        onClose: () => {
                            o(691636).A.setState({
                                open: !1
                            }), t(!1)
                        },
                        onConfirm: () => {
                            o(691636).A.setState({
                                open: !1
                            }), t(!0)
                        },
                        ...e
                    })
                })
            }
        },
        916311: (e, t, o) => {
            o.d(t, {
                p: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    collectionStore: i,
                    performTransaction: r
                } = e, l = i.getSpaceId();
                return (0, o(377796).createAndCommit)({
                    userAction: "collectionViewActions.createSchemaUpdateTransaction",
                    environment: t,
                    cellTarget: l ? {
                        spaceWithId: l
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        let l = i.getSchema(),
                            a = r(e),
                            n = i.getSchema();
                        return (0, o(352169).H)({
                            environment: t,
                            collectionStore: i,
                            oldSchema: l,
                            newSchema: n,
                            transaction: e
                        }), a
                    }
                }).performResult
            }
        },
        942806: (e, t, o) => {
            function i(e, t) {
                let {
                    user_comment: i,
                    ...r
                } = t;
                (0, o(104310).u)({
                    event: {
                        eventName: "ai_action",
                        eventProperties: r
                    }
                })
            }

            function r(e, t, i) {
                let r = {
                    site: "client",
                    ...i
                };
                (0, o(195857).DO_NOT_USE_trackLegacy)(t, r)
            }

            function l(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "ai_favorite_action",
                        eventProperties: t
                    }
                })
            }

            function a(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "ai_autofill_action",
                        eventProperties: t
                    }
                })
            }

            function n(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "ai_autofill_settings_action",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                if (o(886556).z.isXMLAssistantEnabled()) {
                    var i;
                    let r = (null == (i = t.sessionContext) ? void 0 : i.evaluatorFromStoreState.getTranscript()) ? ? [];
                    o(310639).assistantDependency.load().then(({
                        assistantAnalyticsActions: o
                    }) => {
                        o.trackAssistantOpened(e, {
                            from: t.from,
                            sessionId: t.session_id,
                            isReminder: !1,
                            reminderType: void 0,
                            startTimestamp: Date.now(),
                            transcript: r,
                            hasQuery: !1,
                            searchSessionId: void 0
                        })
                    })
                } else(0, o(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_open",
                        eventProperties: {
                            session_id: t.session_id,
                            prompt_key: t.prompt_key,
                            from: t.from
                        }
                    }
                })
            }

            function c(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_close",
                        eventProperties: t
                    }
                })
            }

            function d(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "ai_assistant_error",
                        eventProperties: t
                    }
                })
            }
            o.r(t), o.d(t, {
                trackAIAction: () => i,
                trackAIAssistantEngineError: () => d,
                trackAICompletionPopupClose: () => c,
                trackAICompletionPopupOpen: () => s,
                trackAIFavoriteAction: () => l,
                trackAiAutofillAction: () => a,
                trackAiAutofillSettingsAction: () => n,
                trackUserFlow: () => r
            })
        }
    }
]);