"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [10513, 29486, 30673, 40600], {
        3553: (e, t, r) => {
            function o(e) {
                var t;
                let {
                    environment: o,
                    store: n
                } = e, i = null == (t = n.getFormat()) ? void 0 : t.transcription_calendar_event;
                if (!i) return;
                let a = n.pointer.spaceId;
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCalendarActions.dismissCalendarSharingSuggestion",
                    environment: o,
                    canUndo: !0,
                    cellTarget: a ? {
                        spaceWithId: a
                    } : void 0,
                    perform: e => {
                        (0, r(715144).z)({
                            stores: [n],
                            update: {
                                transcription_calendar_event: { ...i,
                                    has_dismissed_sharing: !0
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }

            function n(e) {
                return {
                    startTime: e.isAllDay ? r(906745).DateTime.fromISO(e.start.date) : r(906745).DateTime.fromISO(e.start.dateTime, {
                        zone: e.start.timeZone
                    }),
                    endTime: e.isAllDay ? r(906745).DateTime.fromISO(e.end.date) : r(906745).DateTime.fromISO(e.end.dateTime, {
                        zone: e.end.timeZone
                    })
                }
            }

            function i(e) {
                let {
                    blockStore: t,
                    event: o,
                    transaction: n,
                    environment: i
                } = e, a = t.getTitleStore();
                a && (r(41403).jQ({
                    environment: i,
                    store: a,
                    transaction: n,
                    selection: {
                        startIndex: 0,
                        endIndex: 1 / 0
                    },
                    updateSelection: !1
                }), o.summary && r(41403).yr({
                    environment: i,
                    store: a,
                    index: 0,
                    tokens: [
                        [o.summary]
                    ],
                    transaction: n
                }))
            }

            function a(e) {
                var t;
                let {
                    blockStore: o,
                    event: i,
                    attendeeIds: a,
                    transaction: l,
                    environment: s
                } = e, {
                    startTime: d,
                    endTime: u
                } = n(i), p = a ? ? (null == (t = i.attendees) ? void 0 : t.map(e => e.notionUserId).filter(r(722371).O9)) ? ? [], m = s.currentUser.id;
                m && !p.includes(m) && p.push(m);
                let f = c({
                    event: i
                });
                (0, r(715144).z)({
                    stores: [o],
                    update: {
                        transcription_calendar_event: {
                            uid: i.uid,
                            startTime: d.toISO(),
                            endTime: u.toISO(),
                            attendeeIds: p,
                            externalAttendees: f
                        }
                    },
                    transaction: l
                })
            }
            async function l(e) {
                let t, {
                        environment: o,
                        blockStore: n,
                        event: l,
                        source: s,
                        shareWithParticipants: c
                    } = e,
                    u = l.isAllDay ? r(906745).DateTime.fromISO(l.start.date) : r(906745).DateTime.fromISO(l.start.dateTime, {
                        zone: l.start.timeZone
                    }),
                    p = l.isAllDay ? r(906745).DateTime.fromISO(l.end.date) : r(906745).DateTime.fromISO(l.end.dateTime, {
                        zone: l.end.timeZone
                    }),
                    m = d({
                        environment: o,
                        event: l
                    }),
                    f = n.pointer.spaceId;
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCalendarActions.addCalendarEventToTranscriptionBlock",
                    environment: o,
                    canUndo: !0,
                    cellTarget: f ? {
                        spaceWithId: f
                    } : void 0,
                    perform: e => {
                        (0, r(715144).z)({
                            stores: [n],
                            update: {
                                transcription_calendar_event: {
                                    uid: l.uid,
                                    startTime: u.toISO(),
                                    endTime: p.toISO(),
                                    attendeeIds: [],
                                    externalAttendees: [],
                                    has_dismissed_sharing: !c
                                }
                            },
                            transaction: e
                        }), i({
                            blockStore: n,
                            event: l,
                            transaction: e,
                            environment: o
                        })
                    }
                }), (0, r(525779).clear)({
                    environment: o
                });
                let g = await m;
                if ((0, r(377796).createAndCommit)({
                        userAction: "transcriptionCalendarActions.addCalendarAttendeesToTranscriptionBlock",
                        environment: o,
                        canUndo: !0,
                        cellTarget: f ? {
                            spaceWithId: f
                        } : void 0,
                        perform: e => {
                            a({
                                blockStore: n,
                                event: l,
                                attendeeIds: g.map(e => e.id),
                                transaction: e,
                                environment: o
                            })
                        }
                    }), c) {
                    let e = n.getNavigableBlockStore();
                    if (e && e.canAdmin()) {
                        let t = (0, r(328765).S)();
                        if (t) {
                            let i = g.filter(e => e.id !== o.currentUser.id),
                                a = i.map(e => r(229903).V.createChildStore(t, (0, r(729052).i1)({
                                    userId: e.id,
                                    spaceId: t.id
                                })));
                            await (0, r(975162).lX)(a, 10, e => e.load());
                            let l = i.filter((e, t) => a[t].isMember()).map(e => ({
                                type: "existingUser",
                                value: e
                            }));
                            l.length > 0 && ((0, r(179349).e)({
                                environment: o,
                                store: e,
                                inviteTargets: l,
                                inviteRole: "editor",
                                isOnboarding: !1,
                                invite: {
                                    inviteOrigin: "transcription_block"
                                }
                            }), (0, r(861842)._)({
                                environment: o,
                                transcriptionBlockStore: n
                            }))
                        }
                    }
                }(0, r(414824).R)({
                    environment: o,
                    data: {
                        type: "track",
                        payload: {
                            event: "transcriptionBlockCalendarEventAdded",
                            eventId: l.uid,
                            source: "headerDropdown" === s ? "headerSuggestion" : s,
                            notionBlockId: n.id
                        }
                    }
                }), (0, r(104310).u)({
                    event: {
                        eventName: "transcription_block_calendar_event_linked",
                        eventProperties: {
                            block_id: n.id,
                            calendar_event_id: l.uid,
                            from: s,
                            total_attendees: g.length,
                            attendees_in_workspace: (t = (0, r(328765).S)()) ? g.filter(e => r(229903).V.createChildStore(t, (0, r(729052).i1)({
                                userId: e.id,
                                spaceId: t.id
                            })).isMember()).length : 0,
                            has_conferencing: !!l.conferencing
                        }
                    }
                }), (0, r(440143).Y)().update(e => {
                    if (!e) return e;
                    let t = e.events.find(e => e.accountId === l.accountId && e.calendarId === l.calendarId && e.id === l.id);
                    return t && (t.blockAttachments = [n.pointer, ...t.blockAttachments ? ? []]), e
                })
            }

            function s(e) {
                let {
                    environment: t,
                    blockStore: o
                } = e, n = o.pointer.spaceId;
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCalendarActions.removeCalendarEventFromTranscriptionBlock",
                    environment: t,
                    canUndo: !0,
                    cellTarget: n ? {
                        spaceWithId: n
                    } : void 0,
                    perform: e => {
                        let n = o.getTitleStore();
                        n && r(41403).jQ({
                            environment: t,
                            store: n,
                            transaction: e,
                            selection: {
                                startIndex: 0,
                                endIndex: 1 / 0
                            }
                        }), (0, r(715144).z)({
                            stores: [o],
                            update: {
                                transcription_calendar_event: void 0
                            },
                            transaction: e
                        })
                    }
                }), (0, r(525779).clear)({
                    environment: t
                })
            }
            async function d(e) {
                var t;
                let {
                    environment: o,
                    event: n
                } = e, i = (null == (t = n.attendees) ? void 0 : t.map(e => e.email).filter(r(722371).O9)) ? ? [];
                if (0 === i.length) return [];
                let a = await o.api.callMainCellApi({
                    eventName: "findUsers",
                    environment: o,
                    data: {
                        emails: i
                    }
                });
                return "success" !== a.type ? [] : a.data.values.map(e => {
                    var t;
                    return null == (t = e.user) ? void 0 : t.value
                }).filter(r(722371).O9)
            }

            function c(e) {
                var t;
                let {
                    event: o
                } = e;
                return (null == (t = o.attendees) ? void 0 : t.flatMap(e => e.notionUserId || !(0, r(722371).O9)(e.email) || e.resource ? [] : [{
                    email: e.email,
                    displayName: e.displayName ? ? ""
                }])) ? ? []
            }

            function u(e) {
                var t;
                let {
                    environment: o,
                    store: n,
                    emailToUserId: i
                } = e;
                if (0 === i.size) return;
                let a = null == (t = n.getFormat()) ? void 0 : t.transcription_calendar_event;
                if (!a) return;
                let l = a.externalAttendees.map(e => {
                        let t = i.get(e.email);
                        return void 0 !== t ? { ...e,
                            userId: t
                        } : e
                    }),
                    s = n.pointer.spaceId;
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCalendarActions.populateExternalAttendeeUserIds",
                    environment: o,
                    canUndo: !1,
                    cellTarget: s ? {
                        spaceWithId: s
                    } : void 0,
                    perform: e => {
                        (0, r(715144).z)({
                            stores: [n],
                            update: {
                                transcription_calendar_event: { ...a,
                                    externalAttendees: l
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }
            r.d(t, {
                FP: () => o,
                Mh: () => s,
                Ud: () => a,
                Wm: () => n,
                _p: () => d,
                b1: () => u,
                bk: () => i,
                uJ: () => l,
                yY: () => c
            }), r(944114), r(898992), r(354520), r(672577), r(430670), r(581454)
        },
        5556: (e, t, r) => {
            r.d(t, {
                u: () => o
            });

            function o(e) {
                let {
                    blocks: t,
                    transaction: o
                } = e;
                if (1 === t.length) {
                    let e = t[0];
                    e && r(966980).wm(e) && (0, r(210191).T)({
                        store: e,
                        transaction: o
                    })
                }
            }
        },
        10123: (e, t, r) => {
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e) {
                (0, r(570551).A)(1, arguments);
                var t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" === o(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : (("string" == typeof e || "[object String]" === t) && "u" > typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN))
            }
            r.d(t, {
                A: () => n
            })
        },
        13717: (e, t, r) => {
            function o(e) {
                let {
                    spaceStore: t,
                    groupId: o
                } = e;
                return r(398652).C.createChildStore(t, (0, r(659341).S4)({
                    spacePermissionGroupId: o,
                    spaceId: t.id
                }))
            }

            function n(e) {
                let {
                    spaceStore: t,
                    groupId: o,
                    userId: n
                } = e;
                return r(291886).m.createChildStore(t, (0, r(867863).BZ)({
                    spacePermissionGroupId: o,
                    spaceId: t.id,
                    userId: n
                }))
            }
            r.d(t, {
                A: () => n,
                E: () => o
            })
        },
        85071: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => o,
                integrationIcon: () => n
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                n = (0, r(104509).wt)("integration", o, "default")
        },
        95783: (e, t, r) => {
            r.d(t, {
                w: () => o
            }), r(16280), r(18107), r(967357), r(898992), r(737550);

            function o(e) {
                var t, o, n, i, a, l;
                let {
                    environment: s,
                    createBlockItem: d,
                    from: c,
                    inMemoryRecordCache: u,
                    transaction: p,
                    selection: m
                } = e;
                if (!d.templateRootBlockId || !d.createTemplate) throw Error("Invalid createBlock item.");
                let f = (m.length > 0 ? m[0].getSpaceId() : void 0) ? ? e.spaceId ? ? (null == (t = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceId()),
                    g = f ? s.idCreator.getSpaceIdCreatorSync(f) : void 0,
                    v = m.some(e => (0, r(398346).l)(e)),
                    h = d.createTemplate(s),
                    {
                        targetBlockStore: I
                    } = (0, r(963771).initializeTemplate)({
                        environment: s,
                        sourceBlockId: d.templateRootBlockId,
                        targetBlockPointer: (0, r(295447).zP)({
                            environment: s,
                            table: r(832375).evP,
                            spaceId: f
                        }),
                        sourceBlockSubtree: (0, r(412951).partialRecordMapToRecordMap)(h),
                        targetRecordCache: u,
                        transaction: p,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !v,
                        spaceIdCreator: g
                    });
                null == (o = d.postCreateCallback) || o.call(d, I, s, p);
                let [y] = m;
                if (r(205103).eY({
                        environment: s,
                        store: I,
                        transaction: p,
                        previousStore: y
                    }), c && d.blockType) {
                    let e, t, o, u, p = d.collectionViewType,
                        f = 0 !== m.length ? null == (n = m[0]) ? void 0 : n.getParentCollectionIdUpToTwoLevels() : void 0;
                    if ("chart" === p) {
                        let r = null == (i = I.getCollectionViewStores()) ? void 0 : i.at(0);
                        e = null == r || null == (a = r.getChartConfig()) ? void 0 : a.type, t = null == r ? void 0 : r.getChartPlaceholderType()
                    }
                    if ("form_editor" === p) {
                        let e = null == (l = I.getCollectionViewStores()) ? void 0 : l.at(0),
                            t = null == e ? void 0 : e.getFormBlockStore();
                        o = null == t ? void 0 : t.id, u = null == e ? void 0 : e.id
                    }
                    let {
                        collectionId: g,
                        ownedCollectionCount: v,
                        linkedCollectionCount: h
                    } = (0, r(633171).P)(I, {
                        skipPages: !1
                    }), y = {
                        from: c,
                        collection_id: g,
                        owned_collection_count: v,
                        linked_collection_count: h,
                        view_type: "inline" === p || "full_page" === p ? "table" : p,
                        is_toggleable: d.isToggleable,
                        automation_id: I.getAutomationId(),
                        new_page_id: "page" === d.blockType ? I.id : void 0,
                        creating_block_id: I.id,
                        parent_collection_id: f,
                        is_full_screen: "full_page" === p,
                        chart_type: "placeholder" === e ? t : e,
                        is_chart_placeholder: "placeholder" === e,
                        form_id: o,
                        view_id: u
                    }, S = d.blockType;
                    r(549960).tP(S) ? r(549960).vH(s, { ...y,
                        type: S,
                        collection_id: g || ""
                    }) : r(549960).vH(s, { ...y,
                        type: S
                    })
                }
                return I
            }
        },
        150945: (e, t, r) => {
            function o(e) {
                let t, {
                        environment: o,
                        createBlockItem: n,
                        selection: i,
                        transaction: a,
                        analyticsFrom: l,
                        preventSetSelection: s
                    } = e,
                    d = r(584265).default.getCurrentRecordCache(),
                    c = new(r(303541)).UF({
                        environment: o,
                        userFlow: (null == n ? void 0 : n.blockType) === "page" ? "user_flow_create_page" : "user_flow_create_block",
                        from: l,
                        succeedOnEnqueue: !0
                    });
                if ((0, r(194020).E)(o, (0, r(974410).f)(i[0])) && n && d) {
                    let e = r(95783).w({
                        environment: o,
                        createBlockItem: n,
                        transaction: a,
                        inMemoryRecordCache: d,
                        from: l,
                        selection: i
                    });
                    c.track(e.pointer, a), t = (0, r(210318).L)({
                        environment: o,
                        blocksToInsert: [e],
                        target: i,
                        transaction: a,
                        replaceEmptyTextBlock: !1,
                        preventSetSelection: s
                    })[0]
                } else c.fail("invalid_state");
                return t
            }

            function n(e) {
                let t, {
                        environment: o,
                        createBlockItem: n,
                        selection: i,
                        transaction: a,
                        analyticsFrom: l,
                        preventSetSelection: s
                    } = e,
                    d = r(584265).default.getCurrentRecordCache();
                if ((0, r(194020).E)(o, (0, r(974410).f)(i[0])) && n && d) {
                    let e = r(95783).w({
                        environment: o,
                        createBlockItem: n,
                        transaction: a,
                        inMemoryRecordCache: d,
                        from: l,
                        selection: i
                    });
                    t = (0, r(199894).t)({
                        environment: o,
                        blocks: [e],
                        selection: i,
                        transaction: a,
                        preventSetSelection: s
                    })[0]
                }
                return t
            }

            function i(e) {
                let {
                    environment: t,
                    selection: n,
                    transaction: i
                } = e, a = o({ ...e,
                    preventSetSelection: !0
                });
                if (a) {
                    var l;
                    (0, r(270819).x)({
                        environment: t,
                        insertedStores: [a],
                        isCreated: !0
                    });
                    let e = r(708929).Uv.getMode(a);
                    if ("suggest" === e) {
                        let e = (0, r(714577).R)(t, i, a);
                        (0, r(132993).t)(i, a, {
                            id: r(92513).JW(),
                            type: "insert",
                            discussionId: e.id
                        }), (0, r(941538).c)({
                            environment: t,
                            transaction: i,
                            discussionStore: e,
                            addModifiedBlockIdsAfter: [a.id]
                        })
                    }
                    "suggest" === e && null != (l = a.getNavigableBlockStore({
                        skipCurrent: !0
                    })) && l.isCommentOnly() || (0, r(5556).u)({
                        transaction: i,
                        blocks: n
                    })
                }
                return a
            }

            function a(e) {
                let {
                    blocks: t,
                    transaction: n,
                    environment: i,
                    skipAnalytics: a
                } = e, l = o({
                    environment: i,
                    selection: t,
                    createBlockItem: r(992140).ry.text,
                    analyticsFrom: a ? void 0 : "text_insert_below",
                    transaction: n
                });
                return l && r(374176).default.afterNextFlush(() => {
                    (0, r(464515).z)({
                        environment: i,
                        blockStore: l,
                        insertedTextBlockLocation: "below",
                        editSelection: r(182553).h,
                        getRectFromStore: r(240414).T.getRectFromStore.bind(r(240414).T)
                    })
                }), l
            }

            function l(e) {
                let {
                    blocks: t,
                    transaction: o,
                    environment: i,
                    skipAnalytics: a
                } = e, l = n({
                    environment: i,
                    selection: t,
                    createBlockItem: r(992140).ry.text,
                    analyticsFrom: a ? void 0 : "text_insert_below",
                    transaction: o
                });
                return l && r(374176).default.afterNextFlush(() => {
                    (0, r(464515).z)({
                        environment: i,
                        blockStore: l,
                        insertedTextBlockLocation: "above",
                        editSelection: r(182553).h,
                        getRectFromStore: r(240414).T.getRectFromStore.bind(r(240414).T)
                    })
                }), l
            }
            r.r(t), r.d(t, {
                insertBlockAbove: () => n,
                insertBlockAndEdit: () => i,
                insertBlockBelow: () => o,
                insertTextAbove: () => l,
                insertTextBelow: () => a
            })
        },
        199894: (e, t, r) => {
            r.d(t, {
                t: () => o
            }), r(16280), r(898992), r(672577), r(581454);

            function o(e) {
                let {
                    environment: t,
                    selection: o,
                    transaction: n,
                    preventSetSelection: i
                } = e, {
                    blocks: a
                } = e, l = (0, r(385941).Z)();
                if (!l) throw Error("No root store.");
                if (o.length > 0) {
                    let e = o[0],
                        l = r(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!l || !l.props.onInsertAbove) throw Error("No Selectable found.");
                    let s = l.props.onInsertAbove({
                        insertStores: a,
                        transaction: n
                    });
                    return i || (0, r(854924).t)({
                        environment: t,
                        stores: s
                    }), s
                } {
                    let e = l.getContentStore(),
                        o = a.map(t => (0, r(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: n
                        }).childStore);
                    return i || (0, r(854924).t)({
                        environment: t,
                        stores: o
                    }), o
                }
            }
        },
        207725: (e, t, r) => {
            r.r(t), r.d(t, {
                appendTranscriptionBlockToPage: () => n,
                createAndNavigateToTranscriptionBlock: () => a,
                createMeetingNoteAndGetUrl: () => d,
                createMeetingNoteAndGetUrlWhenReady: () => c,
                createTranscriptionBlock: () => l,
                navigateToTranscriptionBlock: () => i
            }), r(944114), r(898992), r(354520), r(672577);
            let o = (0, r(109939).YK)({
                newPage: {
                    id: "transcriptionCreateActions.newPage.title",
                    defaultMessage: "Try AI Meeting Notes "
                },
                defaultLocationToastTitle: {
                    id: "transcriptionCreateActions.defaultLocationToast.title",
                    defaultMessage: "Keep your meeting notes organized"
                },
                defaultLocationToastMessage: {
                    id: "transcriptionCreateActions.defaultLocationToast.message",
                    defaultMessage: "Choose a default database so new notes are saved there automatically."
                },
                defaultLocationToastCta: {
                    id: "transcriptionCreateActions.defaultLocationToast.cta",
                    defaultMessage: "Set default database"
                }
            });

            function n(e) {
                let {
                    environment: t,
                    from: o
                } = e, n = (0, r(328765).S)();
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCreateActions.appendTranscriptionBlock",
                    environment: t,
                    canUndo: !0,
                    cellTarget: n ? {
                        spaceWithId: n.id
                    } : void 0,
                    perform: e => {
                        (0, r(150945).insertBlockAndEdit)({
                            environment: t,
                            createBlockItem: r(992140).ry[r(955630).xd.transcription],
                            analyticsFrom: o ? ? "quick_templates",
                            selection: [],
                            transaction: e
                        })
                    }
                })
            }

            function i(e) {
                let {
                    environment: t,
                    origin: o,
                    peekMode: n,
                    blockStore: i,
                    pageVisitSource: a,
                    callback: l
                } = e, s = i.getNavigableBlockStore() ? ? i, d = s.id === i.id ? void 0 : i.id;
                n ? (0, r(908919).V)({
                    environment: t,
                    openInNew: void 0,
                    store: s,
                    scrollToBlockId: d,
                    peekMode: n,
                    pageVisitSource: a,
                    resultsStore: void 0,
                    collectionContextStore: void 0
                }) : (0, r(545586).navigateToBlock)({
                    environment: t,
                    store: s,
                    scrollToBlockId: d,
                    visitType: r(981324).ig.Link,
                    pageVisitSource: a,
                    origin: o,
                    callback: l
                })
            }

            function a(e) {
                let t, {
                    environment: o,
                    from: n,
                    title: a,
                    origin: s,
                    parent: d,
                    calendarEvent: c,
                    peekMode: u,
                    sharedNote: p,
                    pageVisitSource: m = r(254656).y8.Create,
                    callback: f,
                    navigateOnCreate: g = !0
                } = e;
                if (t = p ? l({
                        environment: o,
                        from: n,
                        title: a,
                        parent: d,
                        calendarEvent: c,
                        sharedNote: p
                    }) : l({
                        environment: o,
                        from: n,
                        title: a,
                        parent: d,
                        calendarEvent: c
                    })) return g && i({
                    environment: o,
                    blockStore: t.pageStore,
                    pageVisitSource: m,
                    origin: s,
                    peekMode: u,
                    callback: f
                }), t.transcriptionBlockStore
            }

            function l(e) {
                var t, n, i;
                let {
                    environment: a,
                    from: l,
                    title: s,
                    parent: d,
                    calendarEvent: c,
                    sharedNote: u
                } = e, p = (0, r(328765).S)(), m = r(728372).AppStoreSidebarSpaceViewStore.state;
                if (!p || !m) return;
                let {
                    performResult: f
                } = (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCreateActions.createTranscriptionBlock",
                    environment: a,
                    canUndo: !1,
                    cellTarget: {
                        spaceWithId: p.id
                    },
                    perform: e => {
                        var t;
                        let n = function(e) {
                                let {
                                    spaceStore: t,
                                    collection: o
                                } = e;
                                if (!o) return;
                                let n = r(356912).m.createChildStore(t, o);
                                return n.isDefined() ? !n.getAlive() || n.pathIsDead() || !n.canEdit() ? {
                                    valid: !1,
                                    reason: "invalid"
                                } : {
                                    valid: !0,
                                    collection: o
                                } : {
                                    valid: !1,
                                    reason: "not_loaded"
                                }
                            }({
                                spaceStore: p,
                                collection: null == (t = r(728372).AppStoreSidebarSpaceViewStore.state) || null == (t = t.getSettings()) || null == (t = t.default_meeting_notes_location) ? void 0 : t.collection
                            }),
                            i = (null == n ? void 0 : n.valid) === !0 ? n.collection : void 0,
                            f = "private" === d || "none" === d || (null == d ? void 0 : d.table) === "collection" || !d,
                            g = f ? r(964232).IT({
                                environment: a,
                                spaceStore: p,
                                spaceViewStore: m,
                                parent: d ? ? i ? ? "private",
                                transaction: e,
                                from: l
                            }) : r(970831).B.createChildStore(m, d);
                        if (!g.isType(r(955630).xd.page)) return;
                        if (u) {
                            let t = [];
                            for (let e of c.attendees ? ? []) e.notionUserId && t.push({
                                type: "user_permission",
                                role: "editor",
                                user_id: e.notionUserId
                            });
                            t.length && (0, r(176609).z)({
                                environment: a,
                                store: g,
                                permissionItems: t,
                                transaction: e
                            })
                        }
                        if (f) {
                            let t = function(e, t) {
                                    var n, i, a;
                                    let l, s, d;
                                    switch (e) {
                                        case "title_with_event":
                                            if (t) {
                                                let {
                                                    startTime: e
                                                } = r(3553).Wm(t);
                                                d = {
                                                    summary: t.summary,
                                                    startDateTime: e
                                                }
                                            } else d = function() {
                                                let e = (0, r(440143).Y)().getEvents(),
                                                    t = (0, r(440143).Y)().getCurrentAccounts();
                                                if (!e || 0 === e.length) return;
                                                let o = e.filter(e => !e.isAllDay && r(906745).DateTime.fromISO(e.start.dateTime, {
                                                        zone: e.start.timeZone
                                                    }).toISODate() === r(906745).DateTime.now().toISODate()),
                                                    n = (0, r(964282).y6)({
                                                        events: o,
                                                        accounts: t,
                                                        thresholds: void 0,
                                                        filters: void 0
                                                    }).find(e => {
                                                        let t = e.attendees ? ? [];
                                                        return !e.isAllDay && "accepted" === e.responseStatus && !!e.summary && !(t.length < 1)
                                                    });
                                                if (null != n && n.summary && !n.isAllDay) {
                                                    let e = r(906745).DateTime.fromISO(n.start.dateTime, {
                                                        zone: n.start.timeZone
                                                    });
                                                    return {
                                                        summary: n.summary,
                                                        startDateTime: e
                                                    }
                                                }
                                            }();
                                            l = null != (n = d) && n.summary ? [`${d.summary} `] : void 0, s = null == (i = d) ? void 0 : i.startDateTime;
                                            break;
                                        case "new_page":
                                            l = [r(962299).A.getIntl().formatMessage(o.newPage)];
                                            break;
                                        default:
                                            l = void 0, s = void 0
                                    }
                                    let c = (0, r(714350).P)();
                                    return s = (null == (a = s) ? void 0 : a.setZone(c)) ? ? r(906745).DateTime.now(), [l, r(247438).wmz(r(247438).Ww9({
                                        type: "datetime",
                                        start_date: s.toFormat(r(25825).tr),
                                        start_time: s.toFormat(r(943003).GE),
                                        time_zone: c,
                                        date_format: "relative"
                                    }), [
                                        [r(247438).BQP.Bold]
                                    ])].filter(r(722371).O9)
                                }(s, c),
                                n = g.getBlockTitleStore();
                            r(41403).yr({
                                environment: a,
                                store: n,
                                tokens: t,
                                transaction: e,
                                index: 0
                            })
                        } else if (i) {
                            let t = r(356912).m.createChildStore(p, i);
                            if (t) {
                                let o = t.getDefaultTemplatePageStore();
                                o && r(845422).TB({
                                    title: "template",
                                    environment: a,
                                    store: g,
                                    templateStore: o,
                                    isKeyboard: !1,
                                    isCreateIn: !1,
                                    transaction: e,
                                    from: l
                                })
                            }
                        }
                        let v = r(992140).ry.transcription,
                            h = r(95783).w({
                                environment: a,
                                transaction: e,
                                inMemoryRecordCache: p.inMemoryRecordCache,
                                from: l,
                                selection: [],
                                spaceId: p.id,
                                createBlockItem: v
                            });
                        return c && (r(3553).Ud({
                            blockStore: h,
                            event: c,
                            transaction: e,
                            environment: a
                        }), r(3553).bk({
                            blockStore: h,
                            event: c,
                            transaction: e,
                            environment: a
                        })), r(579695).Ti({
                            childStore: h,
                            parentStore: g,
                            transaction: e
                        }), {
                            createdTranscriptionBlock: h,
                            createdPage: g,
                            shouldResetDefaultMeetingNotesLocation: (null == n ? void 0 : n.valid) === !1 && "invalid" === n.reason
                        }
                    }
                });
                if (!f) return;
                f.shouldResetDefaultMeetingNotesLocation && function(e) {
                    let {
                        environment: t,
                        spaceViewStore: o
                    } = e, n = o.getSpaceId();
                    (0, r(377796).createAndCommit)({
                        userAction: "transcriptionCreateActions.resetDefaultMeetingNotesLocation",
                        environment: t,
                        canUndo: !1,
                        cellTarget: n ? {
                            spaceWithId: n
                        } : void 0,
                        perform: e => {
                            (0, r(421439).y4)({
                                store: o,
                                operation: {
                                    pointer: o.pointer,
                                    path: ["settings", "default_meeting_notes_location"],
                                    command: "set",
                                    args: void 0
                                },
                                transaction: e
                            })
                        }
                    })
                }({
                    environment: a,
                    spaceViewStore: m
                });
                let g = r(728372).AppStoreCurrentUserSettingsStore.state,
                    v = null == g || null == (t = g.getSettings()) ? void 0 : t.seen_default_meeting_notes_location_toast,
                    h = null == (n = m.getSettings()) ? void 0 : n.default_meeting_notes_location,
                    I = r(185995).default.getData(a, {
                        spaceId: m.getSpaceId()
                    }),
                    y = (0, r(278662).Jd)(I ? ? []),
                    S = (null == y ? void 0 : y.offer.type) === "trial" && (0, r(278662).w5)(y.offer.campaign),
                    T = null == g || null == (i = g.getSettings()) ? void 0 : i.signup_time,
                    b = void 0 !== T && Date.now() - T >= 7 * r(627179).nD;
                if (void 0 === v && g)(0, r(377796).createAndCommit)({
                    userAction: "transcriptionCreateActions.markFirstMeetingNotesUse",
                    environment: a,
                    canUndo: !1,
                    cellTarget: "main",
                    perform: e => {
                        (0, r(862759).m)({
                            userSettingsStore: g,
                            transaction: e,
                            data: {
                                seen_default_meeting_notes_location_toast: !1
                            }
                        })
                    }
                });
                else if (!1 === v && !h && !S && b && g) {
                    let e = r(962299).A.getIntl();
                    r(819652).Iz({
                        id: "default-meeting-notes-location-toast",
                        title: e.formatMessage(o.defaultLocationToastTitle),
                        message: e.formatMessage(o.defaultLocationToastMessage),
                        presentationType: "transient",
                        actions: {
                            primary: {
                                title: e.formatMessage(o.defaultLocationToastCta),
                                onAction: () => {
                                    r(819652).UW({
                                        id: "default-meeting-notes-location-toast"
                                    }), r(599754).Ow({
                                        currentPage: "ai",
                                        highlightedSetting: "aiSettingsDefaultMeetingNotesLocation",
                                        openedFrom: "default_meeting_notes_location_toast"
                                    })
                                }
                            }
                        }
                    }), (0, r(377796).createAndCommit)({
                        userAction: "transcriptionCreateActions.markDefaultLocationToastAsSeen",
                        environment: a,
                        canUndo: !1,
                        cellTarget: "main",
                        perform: e => {
                            (0, r(862759).m)({
                                userSettingsStore: g,
                                transaction: e,
                                data: {
                                    seen_default_meeting_notes_location_toast: !0
                                }
                            })
                        }
                    })
                }
                return (0, r(440143).Y)().update(e => {
                    let t = f.createdTranscriptionBlock.pointer;
                    return e && c && e.events.push({ ...c,
                        blockAttachments: [t, ...c.blockAttachments ? ? []]
                    }), e
                }), {
                    transcriptionBlockStore: f.createdTranscriptionBlock,
                    pageStore: f.createdPage
                }
            }
            async function s() {
                await Promise.all([r(728372).default.waitUntil(() => {
                    var e;
                    return !!(null == (e = (0, r(328765).S)()) ? void 0 : e.isReady())
                }), r(728372).default.waitUntil(() => {
                    var e;
                    return !!(null == (e = r(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.isReady())
                })]);
                let e = (0, r(328765).S)(),
                    t = r(728372).AppStoreSidebarSpaceViewStore.state;
                e && t || r(773352).log({
                    level: "error",
                    from: "transcriptionCreateActions",
                    type: "waitForTranscriptionStoresUnexpectedUndefined"
                })
            }

            function d(e) {
                let t = l({
                    environment: e.environment,
                    from: e.from,
                    title: e.title ? ? "new_page",
                    parent: void 0
                });
                if (!t) return;
                let o = t.pageStore.id,
                    n = t.transcriptionBlockStore.id;
                return {
                    pageId: o,
                    blockId: n,
                    spaceId: t.pageStore.getSpaceId(),
                    blockUrl: (0, r(483227).J8)({
                        store: t.transcriptionBlockStore,
                        scrollToBlockId: t.transcriptionBlockStore.id,
                        fullyQualified: !0,
                        pageVisitSource: e.pageVisitSource
                    })
                }
            }
            async function c(e) {
                return await s(), d(e)
            }
        },
        405461: (e, t, r) => {
            function o(e) {
                let {
                    intl: t,
                    groupName: o
                } = e;
                return o || t.formatMessage(r(95384).D.untitledGroupName)
            }

            function n(e) {
                var t;
                return (null == (t = r(801062).h.getGroupData(e.groupId)) ? void 0 : t.memberCount) ? ? 0
            }

            function i(e) {
                let {
                    userIds: t,
                    limit: o,
                    spaceStore: n
                } = e;
                if (!n) return {
                    countRemainingUsers: 0,
                    limitedUserStores: []
                };
                let i = o ? t.slice(0, o) : t;
                return {
                    limitedUserStores: r(381453).oE(i.map(e => r(807825).L.createChildStore(n, {
                        table: r(832375).oo9,
                        id: e
                    }))),
                    countRemainingUsers: t.length - i.length
                }
            }

            function a({
                userStores: e,
                spaceStore: t,
                intl: o
            }) {
                return r(381453).Ul(e, e => e.getSearchName(o)).sort((e, o) => {
                    if (!t) return 0;
                    let n = (0, r(993077).dp)(t, e.id).getMembershipTypeAsRoleOrNone(),
                        i = (0, r(993077).dp)(t, o.id).getMembershipTypeAsRoleOrNone();
                    return n && i ? r(642157).hV.indexOf(i) - r(642157).hV.indexOf(n) : 0
                })
            }

            function l(e) {
                var t;
                let {
                    spaceStore: o,
                    spaceUserStore: n
                } = e;
                if (!o) return !1;
                let i = (null == n ? void 0 : n.getMembershipType()) ? ? "none",
                    a = null == (t = o.getModel()) ? void 0 : t.getGroupCreationPolicy();
                switch (i) {
                    case "none":
                    case "page_guest":
                    case "restricted_member":
                        return !1;
                    case "member":
                        return "all_workspace_members" === a;
                    case "membership_admin":
                    case "owner":
                        return !0;
                    default:
                        return (0, r(722371).HB)(i)
                }
            }

            function s(e) {
                let {
                    groupId: t,
                    delta: o
                } = e, n = r(801062).h.getGroupData(t);
                n && r(801062).h.updateGroup(t, {
                    memberCount: Math.max(0, n.memberCount + o)
                })
            }

            function d(e) {
                let {
                    members: t,
                    query: r
                } = e, o = r.trim().toLowerCase();
                return "" === o ? t : t.filter(e => e.name.toLowerCase().includes(o) || void 0 !== e.email && e.email.toLowerCase().includes(o))
            }

            function c(e) {
                let {
                    memberUserIds: t,
                    spaceStore: o,
                    groupId: n,
                    currentUserId: i
                } = e;
                return t.map(e => {
                    let t = r(807825).L.createChildStore(o, {
                            table: r(832375).oo9,
                            id: e
                        }),
                        a = (0, r(13717).A)({
                            spaceStore: o,
                            groupId: n,
                            userId: e
                        }),
                        l = r(229903).V.createChildStore(o, (0, r(729052).i1)({
                            userId: e,
                            spaceId: o.id
                        }));
                    return {
                        userId: e,
                        name: t.getName() ? ? t.getEmail() ? ? "",
                        email: t.getEmail(),
                        avatarUrl: t.getProfilePhoto(),
                        isCurrentUser: e === i,
                        isOwner: "owner" === a.getMembershipType(),
                        isWorkspaceOwner: o.canAdmin(),
                        isRestrictedMember: l.isRestrictedMember() ? ? !0
                    }
                })
            }

            function u(e) {
                let {
                    users: t,
                    existingMemberIds: r
                } = e, o = new Set(r);
                return t.filter(e => !o.has(e.id)).map(e => ({
                    userId: e.id,
                    name: e.name ? ? e.email ? ? "",
                    email: e.email,
                    avatarUrl: e.profile_photo
                }))
            }

            function p(e) {
                let {
                    groupId: t,
                    groupStore: o
                } = e;
                r(801062).h.updateGroup(t, {
                    group: o.getModel()
                })
            }
            r.d(t, {
                A9: () => u,
                Fz: () => c,
                Ny: () => l,
                Pf: () => o,
                cp: () => a,
                gA: () => i,
                mi: () => d,
                s: () => s,
                sd: () => p,
                xQ: () => n
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454)
        },
        425749: (e, t, r) => {
            r.d(t, {
                I$: () => a,
                R2: () => d,
                WF: () => s,
                bZ: () => l,
                cE: () => n,
                jX: () => i,
                rz: () => c
            });
            var o = () => r(381453);

            function n(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let i = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function a(e) {
                return !!(void 0 !== e && (0, r(722371).Xk)(i, e))
            }

            function l() {
                let e = (0, r(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: r(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, r(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function s(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of d)
                    if (o().n4(e, t)) return !0;
                return !1
            }
        },
        453725: (e, t, r) => {
            r.d(t, {
                evaluateFormulaFromNativeViewer: () => f,
                evaluateRollupFromNativeViewer: () => g
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(430670);
            var o = () => r(218744),
                n = () => r(962299),
                i = () => r(970831),
                a = () => r(561872),
                l = () => r(26837),
                s = () => r(297493),
                d = () => r(714350),
                c = () => r(832375),
                u = () => r(975162),
                p = () => r(457103),
                m = () => r(323082);
            async function f(e, t) {
                try {
                    let a = await r(864850).T.formulas.load(),
                        l = new(r(356912)).m(e, {
                            table: c().VlP,
                            id: t.collectionId
                        });
                    await l.load();
                    let u = l.getSchema(),
                        m = [];
                    for (let l of t.formulaInputs) {
                        let f = new(i()).B(e, {
                            table: c().evP,
                            id: l.blockId
                        });
                        await f.load();
                        let g = f.getModel(),
                            v = u[l.propertyId];
                        if (!g || !v || "formula" !== v.type || !v.formula2) {
                            m.push({
                                value: [],
                                type: "undefined",
                                blockId: l.blockId,
                                propertyId: l.propertyId
                            });
                            continue
                        }
                        let h = (0, d().P)(),
                            I = n().A.getIntl(),
                            y = a.evaluateCollectionFormula2({
                                block: g,
                                property: l.propertyId,
                                formulaCode: v.formula2.code,
                                getRecordModel: f.getRecordModel,
                                intl: I,
                                userTimeZone: h,
                                depth: 0,
                                visitedProperties: new Set,
                                resultCache: new Map,
                                regExpCache: new Map,
                                formatDateCache: new Map,
                                formulaTimeoutTimestampMs: Date.now() + 1e4,
                                experimentService: o().default,
                                collectionFeatureGates: (0, p().i)(),
                                spaceIdCreator: e.idCreator.getSpaceIdCreatorSync(t.spaceId)
                            });
                        if (y) {
                            let e = "array" === y.type ? "array" !== y.type ? (0, s().Ht)(y) : (0, r(247438).__s)((0, r(405843).G)(y.values, () => ({
                                type: "text",
                                value: (0, r(247438).x9d)(", ")
                            })).flatMap(e => (0, s().Ht)(e))) : (0, s().Ht)(y);
                            m.push({
                                value: e,
                                type: y.type,
                                blockId: l.blockId,
                                propertyId: l.propertyId
                            })
                        } else m.push({
                            value: [],
                            type: "undefined",
                            blockId: l.blockId,
                            propertyId: l.propertyId
                        })
                    }
                    return m
                } catch {
                    return []
                }
            }
            async function g(e, t) {
                try {
                    let f = await r(864850).T.formulas.load(),
                        g = new(r(356912)).m(e, {
                            table: c().VlP,
                            id: t.collectionId
                        });
                    await g.load();
                    let v = g.getSchema(),
                        h = (0, d().P)(),
                        I = n().A.getIntl(),
                        y = [];
                    for (let r of t.rollupInputs) {
                        let n = new(i()).B(e, {
                            table: c().evP,
                            id: r.blockId
                        });
                        await n.load();
                        let d = n.getModel(),
                            g = v[r.propertyId];
                        if (!d || !g || "rollup" !== g.type) {
                            y.push({
                                value: [],
                                type: "undefined",
                                blockId: r.blockId,
                                propertyId: r.propertyId
                            });
                            continue
                        }
                        if (g.relation_property) {
                            let t = d.getProperty(g.relation_property, n.getRecordModel),
                                r = (0, a().n)(t);
                            await (0, u().lX)(r, 10, async t => {
                                let r = new(i()).B(e, {
                                    table: c().evP,
                                    id: t.id,
                                    spaceId: t.spaceId
                                });
                                await r.load()
                            })
                        }
                        let S = e.idCreator.getSpaceIdCreatorSync(t.spaceId),
                            T = {
                                userId: void 0,
                                userTimeZone: h,
                                depth: 0,
                                intl: I,
                                visitedProperties: new Set,
                                resultCache: new Map,
                                regExpCache: new Map,
                                formatDateCache: new Map,
                                formulaTimeoutTimestampMs: Date.now() + 1e4,
                                experimentService: o().default,
                                collectionFeatureGates: (0, p().i)(),
                                getRelationEdgeList: (0, m().Y)({
                                    environment: e,
                                    spaceId: t.spaceId
                                })
                            },
                            b = (0, l().eY)({
                                property: r.propertyId,
                                schema: v,
                                getRecordModel: n.getRecordModel,
                                spaceIdCreator: S,
                                block: d
                            });
                        if (g.aggregation && "show_unique" !== g.aggregation) {
                            var s;
                            let e = (0, l().Pm)({
                                block: d,
                                property: r.propertyId,
                                schema: v,
                                getRecordModel: n.getRecordModel,
                                collectionRequestContext: T,
                                formulasModule: f,
                                spaceIdCreator: S
                            });
                            e ? y.push({
                                value: (s = e, "text" === s.type ? s.value ? [
                                    [s.value]
                                ] : [] : "number" === s.type ? void 0 === s.value || null === s.value ? [] : [
                                    [s.value.toString()]
                                ] : "date" === s.type ? (0, a().m5)(s.value) : []),
                                type: e.type,
                                blockId: r.blockId,
                                propertyId: r.propertyId,
                                targetPropertySchema: null == b ? void 0 : b.targetPropertySchema
                            }) : y.push({
                                value: [],
                                type: "undefined",
                                blockId: r.blockId,
                                propertyId: r.propertyId
                            })
                        } else {
                            let e = (0, l().I)({
                                block: d,
                                property: r.propertyId,
                                schema: v,
                                getRecordModel: n.getRecordModel,
                                collectionRequestContext: T,
                                formulasModule: f,
                                spaceIdCreator: S
                            });
                            if (e) {
                                let t = (null == b ? void 0 : b.targetPropertySchema.type) ? ? "undefined";
                                y.push({
                                    value: [
                                        [e]
                                    ],
                                    type: t,
                                    blockId: r.blockId,
                                    propertyId: r.propertyId,
                                    targetPropertySchema: null == b ? void 0 : b.targetPropertySchema
                                })
                            } else y.push({
                                value: [],
                                type: "undefined",
                                blockId: r.blockId,
                                propertyId: r.propertyId
                            })
                        }
                    }
                    return y
                } catch {
                    return []
                }
            }
        },
        464515: (e, t, r) => {
            r.d(t, {
                z: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    blockStore: o,
                    insertedTextBlockLocation: n,
                    editSelection: i,
                    getRectFromStore: a
                } = e, l = r(764615).Ay.state;
                if (i({
                        environment: t,
                        store: o
                    }), (0, r(940763).e)({
                        store: o.getBlockTitleStore()
                    }), !l.open && !t.device.isPhone) {
                    let e = o.getBlockTitleStore(),
                        i = a(o),
                        l = r(92513).JW();
                    i && (r(764615).Ay.setState({
                        id: l,
                        open: !0,
                        isAddMenu: !0,
                        collapsed: !0,
                        textStore: e,
                        oldTextValue: e.getValue(),
                        oldSelection: {
                            startIndex: 0,
                            endIndex: 0
                        },
                        selectionRect: i,
                        lettersAtLastResult: 0,
                        filter: "",
                        temporaryInputDataStore: r(546605).Store.createValue(void 0, {
                            name: "temporaryInputData"
                        }),
                        insertedTextBlockLocation: n
                    }), (0, r(525779).clear)({
                        environment: t
                    }), (0, r(940763).e)({
                        store: e
                    }), (0, r(104310).u)({
                        event: {
                            eventName: "open_slash_menu",
                            eventProperties: {
                                id: l,
                                source: "add_button"
                            }
                        }
                    }))
                }
            }
        },
        570551: (e, t, r) => {
            r.d(t, {
                A: () => o
            });

            function o(e, t) {
                if (t.length < e) throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
            }
        },
        606982: (e, t, r) => {
            r.d(t, {
                A: () => o
            });

            function o(e, t) {
                (0, r(570551).A)(2, arguments);
                var o = (0, r(10123).A)(e),
                    n = (0, r(10123).A)(t),
                    i = o.getTime() - n.getTime();
                return i < 0 ? -1 : i > 0 ? 1 : i
            }
        },
        634663: (e, t, r) => {
            r.r(t), r.d(t, {
                circleIcon: () => n,
                iconDefinition: () => o
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                    })
                },
                n = (0, r(104509).wt)("circle", o, "default")
        },
        890142: (e, t, r) => {
            r.d(t, {
                l: () => n
            });
            let o = (0, r(109939).YK)({
                twoItems: {
                    id: "formatSettings.twoItems",
                    defaultMessage: "{item1} and {item2}"
                },
                threeOrMoreItems: {
                    id: "formatSettings.threeOrMoreItems",
                    defaultMessage: "{item1}, and {numberOfOther} others"
                },
                twoItemsWithAmpersand: {
                    id: "formatSettings.twoItems.withAmpersand",
                    defaultMessage: "{item1} & {item2}"
                },
                threeOrMoreItemsWithAmpersand: {
                    id: "formatSettings.threeOrMoreItems.withAmpersand",
                    defaultMessage: "{item1}, & {numberOfOther} others"
                },
                threeOrMoreItemsWithAmpersandAndRemoveComma: {
                    id: "formatSettings.threeOrMoreItems.withAmpersandAndRemoveComma",
                    defaultMessage: "{item1} & {numberOfOther} others"
                }
            });

            function n(e, t) {
                let {
                    removeComma: n,
                    useAmpersand: i
                } = t || {};
                if (0 === e.length) return "";
                let a = e[0];
                if (1 === e.length) return a;
                let l = e[1];
                if (2 === e.length) return i ? r(962299).A.formatMessage(o.twoItemsWithAmpersand, {
                    item1: a,
                    item2: l
                }) : r(962299).A.formatMessage(o.twoItems, {
                    item1: a,
                    item2: l
                });
                let s = e.length - 1;
                return i ? n ? r(962299).A.formatMessage(o.threeOrMoreItemsWithAmpersandAndRemoveComma, {
                    item1: a,
                    numberOfOther: s
                }) : r(962299).A.formatMessage(o.threeOrMoreItemsWithAmpersand, {
                    item1: a,
                    numberOfOther: s
                }) : r(962299).A.formatMessage(o.threeOrMoreItems, {
                    item1: a,
                    numberOfOther: s
                })
            }
        },
        937776: (e, t, r) => {
            r.d(t, {
                B: () => i
            }), r(296540);
            var o = r(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, o.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                i = (0, r(104509).wt)("archiveBox", n, "default")
        },
        964282: (e, t, r) => {
            function o(e) {
                let t = r(906745).DateTime.fromMillis(e.startUnixTimestampMS),
                    o = e.endUnixTimestampMS ? r(906745).DateTime.fromMillis(e.endUnixTimestampMS) : void 0,
                    n = r(906745).DateTime.fromMillis(e.startOfWeekUnixTimestampMS),
                    i = r(906745).DateTime.fromMillis(e.endOfWeekUnixTimestampMS),
                    a = t.startOf("day"),
                    l = r(906745).DateTime.max(n, a),
                    s = Math.ceil(l.diff(n, "days").get("days")),
                    d = 1;
                if (o) {
                    let e = o.endOf("day");
                    d = Math.ceil(r(906745).DateTime.min(i, e).diff(l, "days").get("days"))
                }
                return {
                    start: t,
                    end: o,
                    startOfWeek: n,
                    endOfWeek: i,
                    startColumn: s,
                    columnCount: d
                }
            }

            function n(e) {
                let t = (e.attendees || []).filter(e => !e.self && !e.resource);
                return e.hasParticipants && t.length > 0 && t.every(e => "declined" === e.responseStatus)
            }
            r.d(t, {
                Gj: () => o,
                RN: () => d,
                sM: () => c,
                sR: () => l,
                vZ: () => n,
                xy: () => u,
                y6: () => s
            }), r(944114), r(898992), r(823215), r(354520), r(672577);
            let i = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 15
                },
                a = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 5
                },
                l = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 15,
                    startedMinsThreshold: 15
                };

            function s(e) {
                let {
                    events: t,
                    accounts: o,
                    thresholds: n = i,
                    filters: a
                } = e, l = t.filter(e => {
                    if (!e.conferencing && !(null != a && a.includeEventsWithoutConferencing)) return !1;
                    let t = o.find(t => t.id === e.accountId);
                    return !(!(null != t && t.email) || !(0, r(120462).Ko)(e, t.email) || "declined" === (e.responseStatus ? ? "declined")) && !e.isAllDay
                });
                if (0 === l.length) return [];
                let {
                    upcomingMinsThreshold: s,
                    startingMinsThreshold: d,
                    startedMinsThreshold: c
                } = n, u = r(906745).DateTime.now(), p = (null == a ? void 0 : a.maxDaysInFuture) !== void 0 ? a.maxDaysInFuture * r(695216).XQ : void 0, m = (null == a ? void 0 : a.maxDaysInPast) !== void 0 ? a.maxDaysInPast * r(695216).XQ : void 0, f = [], g = [], v = [], h = [], I = [], y = [];
                for (let e of l) {
                    if (e.isAllDay) continue;
                    let t = function(e) {
                            let t = r(906745).DateTime.fromISO(e.start.dateTime, {
                                    zone: e.start.timeZone
                                }),
                                o = r(906745).DateTime.fromISO(e.end.dateTime, {
                                    zone: e.end.timeZone
                                });
                            return r(906745).IX.fromDateTimes(t, o)
                        }(e),
                        o = u.diff(t.end, "minutes").minutes;
                    if (void 0 !== m && o > m) continue;
                    if (null != a && a.excludeEventsOnDifferentDays && u.setZone(t.start.zone).toISODate() !== t.start.toISODate()) continue;
                    let n = t.start.diff(u, "minutes").minutes;
                    if (void 0 === p || !(n > p))
                        if (n >= 0 && n <= s) f.push(e);
                        else if (n < 0) {
                        let r = -n,
                            i = o >= 0 ? o : void 0;
                        r > 0 && r <= d ? v.push(e) : r > d && r <= c ? h.push(e) : t.contains(u) ? g.push(e) : void 0 !== m && void 0 !== i && i <= m && I.push(e)
                    } else y.push(e)
                }
                return g.sort((e, t) => {
                    let o = r(906745).DateTime.fromISO(e.start.dateTime, {
                        zone: e.start.timeZone
                    });
                    return r(906745).DateTime.fromISO(t.start.dateTime, {
                        zone: t.start.timeZone
                    }).diff(o).toMillis()
                }), I.length > 1 && I.sort((e, t) => {
                    let o = r(906745).DateTime.fromISO(e.end.dateTime, {
                        zone: e.end.timeZone
                    });
                    return r(906745).DateTime.fromISO(t.end.dateTime, {
                        zone: t.end.timeZone
                    }).diff(o).toMillis()
                }), [...f, ...v, ...h, ...null != a && a.excludeInProgressEvents ? [] : g, ...I, ...null != a && a.excludeUpcomingLaterEvents ? [] : y]
            }

            function d(e, t) {
                return s({
                    events: e,
                    accounts: t,
                    thresholds: i,
                    filters: void 0
                })[0]
            }

            function c(e, t, r) {
                return s({
                    events: e,
                    accounts: t,
                    thresholds: a,
                    filters: {
                        excludeUpcomingLaterEvents: !0,
                        ...r
                    }
                })
            }

            function u(e) {
                let {
                    spaceStore: t
                } = e, o = e.fileUrl;
                if (!t) return;
                let n = (0, r(132702).parseRoute)({
                        url: o,
                        isMobile: r(986939).A.isMobile,
                        baseUrl: r(986939).A.domainBaseUrl,
                        publicDomainName: r(986939).A.publicDomainName,
                        protocol: r(986939).A.protocol,
                        currentUrl: window.location.href,
                        requestedOnAlternateDomain: (0, r(700473).wasRequestedOnAlternateDomain)()
                    }),
                    i = "page" === n.name ? n.blockId : void 0;
                if (!i) return;
                let a = r(970831).B.createChildStore(t, {
                    table: r(832375).evP,
                    id: i
                });
                return a.load(), a
            }
        }
    }
]);