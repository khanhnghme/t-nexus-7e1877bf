"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [24394], {
        41049: (e, t, n) => {
            n.d(t, {
                H: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.37 4.37 17.44 11.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M1.375 6.5c0-1.174.951-2.125 2.125-2.125h9c1.077 0 1.967.802 2.106 1.841v7.568a2.125 2.125 0 0 1-2.106 1.841h-9A2.125 2.125 0 0 1 1.375 13.5zm14.331 6.571 2.158 1.307a.625.625 0 0 0 .948-.534V6.156a.625.625 0 0 0-.948-.534l-2.158 1.307z"
                    })
                },
                o = (0, n(104509).wt)("videoCameraFill", i, "fill")
        },
        96686: (e, t, n) => {
            n.d(t, {
                rX: () => U,
                n$: () => L,
                w3: () => R
            });
            var i = n(296540),
                o = () => n(51831),
                a = () => n(104310),
                r = () => n(16275),
                s = () => n(95582),
                l = () => n(844565),
                d = n(474848);
            let c = {
                    margin: "4px 0",
                    padding: 0
                },
                u = {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                };

            function p({
                event: e,
                buttonStyle: t,
                hoveredButtonStyle: h,
                pressedButtonStyle: y,
                isCompact: v,
                useCompactLayout: f = !1,
                isPrimary: x,
                isPerformingTranscriptionAction: j,
                setIsPerformingTranscriptionAction: _
            }) {
                let M = (0, n(109939).tz)(),
                    b = (0, n(533992).v3)(),
                    S = (0, n(515467).m)(),
                    k = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                    C = (0, i.useRef)(null),
                    w = (0, n(583124).V)(),
                    {
                        defaultMeetingNoteLocationBlockId: T,
                        defaultMeetingNoteLocationCollectionId: I
                    } = (0, n(682985).K8)(() => {
                        var e, t;
                        let n = null == k ? void 0 : k.getSettings(),
                            i = null == n ? void 0 : n.default_meeting_notes_location;
                        return {
                            defaultMeetingNoteLocationBlockId: null == i || null == (e = i.block) ? void 0 : e.id,
                            defaultMeetingNoteLocationCollectionId: null == i || null == (t = i.collection) ? void 0 : t.id
                        }
                    }, [k]),
                    A = (0, n(682985).K8)(() => {
                        if (!T || !k) return null;
                        let e = new(n(970831)).B(b, {
                            table: n(832375).evP,
                            id: T,
                            spaceId: k.id
                        });
                        return e.isDefined() ? {
                            id: T,
                            store: e
                        } : null
                    }, [k, b, T]),
                    P = (0, n(682985).K8)(() => {
                        if (!A) return null;
                        let {
                            store: e
                        } = A;
                        return (0, n(112293).Jq)(e, M, b) ? ? (0, n(112293).gG)(e, M)
                    }, [A, M, b]),
                    D = (0, i.useCallback)(i => {
                        let r = { ...i,
                            onClick: t => {
                                (0, a().u)({
                                    event: {
                                        eventName: "ai_meetings_tab_upcoming_meetings_event_create_meeting_note_clicked",
                                        eventProperties: {
                                            calendar_event_id: e.id
                                        }
                                    }
                                }), i.onClick(t)
                            }
                        };
                        return w && (0, n(861842).bO)(e) ? (0, d.jsx)(o().m, {
                            content: () => (0, d.jsx)(n(109939).sA, { ...g.addMeetingNoteAccessTooltip
                            }),
                            children: e => (0, d.jsx)(m, {
                                buttonStyle: t,
                                hoveredButtonStyle: h,
                                pressedButtonStyle: y,
                                events: r,
                                tooltipEvents: e,
                                isCompact: v,
                                useCompactLayout: f,
                                isPrimary: x,
                                disabled: j
                            })
                        }) : (0, d.jsx)(m, {
                            buttonStyle: t,
                            hoveredButtonStyle: h,
                            pressedButtonStyle: y,
                            events: r,
                            isCompact: v,
                            useCompactLayout: f,
                            isPrimary: x,
                            disabled: j
                        })
                    }, [e, t, h, y, v, f, x, j, w]),
                    E = (0, i.useCallback)(t => {
                        let i = {
                                key: "create",
                                render: e => (0, d.jsx)(l().A, { ...e
                                }),
                                items: [{
                                    key: "create-new-meeting-note",
                                    action: async () => {
                                        var t;
                                        _(!0), null == (t = C.current) || t.setOpen(!1);
                                        try {
                                            (0, a().u)({
                                                event: {
                                                    eventName: "ai_meetings_tab_upcoming_meetings_event_create_meeting_note_location_selected",
                                                    eventProperties: {
                                                        calendar_event_id: e.id,
                                                        location_type: "default",
                                                        block_id: T,
                                                        collection_id: I
                                                    }
                                                }
                                            }), S.botId && (0, n(414824).R)({
                                                environment: b,
                                                data: {
                                                    type: "track",
                                                    payload: {
                                                        event: "meetingNoteCreated",
                                                        eventId: e.id,
                                                        calendarId: e.calendarId,
                                                        from: "upcoming_meeting_create_meeting_note",
                                                        locationType: "default"
                                                    }
                                                },
                                                botId: S.botId
                                            }), await (0, n(861842).Jf)({
                                                environment: b,
                                                from: "upcoming_meeting_create_meeting_note",
                                                event: e,
                                                peekMode: "side_peek"
                                            })
                                        } finally {
                                            _(!1)
                                        }
                                    },
                                    render: e => (0, d.jsx)(s().A, { ...e,
                                        icon: (0, d.jsx)(r().I, {
                                            icon: n(581923).plusIcon,
                                            size: "default"
                                        }),
                                        title: (0, d.jsx)(n(109939).sA, { ...g.createNewMeetingNote
                                        }),
                                        caption: P ? (0, d.jsx)(n(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "tertiary",
                                            style: u,
                                            children: P
                                        }) : void 0
                                    })
                                }]
                            },
                            o = {
                                key: "divider",
                                render: e => (0, d.jsx)(l().A, {
                                    style: c,
                                    topBorder: !0,
                                    ...e
                                }),
                                items: []
                            },
                            p = t.findIndex(e => "search" === e.key);
                        if (0 === p) {
                            let e = [...t];
                            return e.splice(p + 1, 0, i, o), e
                        }
                        return [i, o, ...t]
                    }, [b, S.botId, e, P, T, I, _]),
                    B = (0, i.useCallback)(async ({
                        store: t,
                        collectionId: i
                    }) => {
                        var o;
                        _(!0), null == (o = C.current) || o.setOpen(!1);
                        try {
                            let o = {
                                    table: i ? "collection" : "block",
                                    id: i ? ? t.id,
                                    spaceId: t.getSpaceId()
                                },
                                r = "collection" === o.table ? "collection" : "page";
                            (0, a().u)({
                                event: {
                                    eventName: "ai_meetings_tab_upcoming_meetings_event_create_meeting_note_location_selected",
                                    eventProperties: {
                                        calendar_event_id: e.id,
                                        location_type: r,
                                        block_id: t.id,
                                        collection_id: i
                                    }
                                }
                            }), S.botId && (0, n(414824).R)({
                                environment: b,
                                data: {
                                    type: "track",
                                    payload: {
                                        event: "meetingNoteCreated",
                                        eventId: e.id,
                                        calendarId: e.calendarId,
                                        from: "upcoming_meeting_create_meeting_note",
                                        locationType: r
                                    }
                                },
                                botId: S.botId
                            }), await (0, n(861842).Jf)({
                                environment: b,
                                from: "upcoming_meeting_create_meeting_note",
                                event: e,
                                parent: o,
                                peekMode: "side_peek"
                            })
                        } finally {
                            _(!1)
                        }
                    }, [b, e, S.botId, _]);
                return (0, d.jsx)(n(976318).B, {
                    ref: C,
                    searchOptions: {
                        source: "link_to_page_block",
                        requireEditPermissions: !0
                    },
                    renderSections: E,
                    showCollections: !0,
                    pagesSectionTitle: (0, d.jsx)(n(109939).sA, { ...g.chooseExistingPage
                    }),
                    collectionsSectionTitle: (0, d.jsx)(n(109939).sA, { ...g.chooseExistingDatabase
                    }),
                    excludedBlockIds: T ? [T] : void 0,
                    onChange: B,
                    peopleBlocksToInclude: "none",
                    children: D
                })
            }

            function m({
                buttonStyle: e,
                hoveredButtonStyle: t,
                pressedButtonStyle: i,
                events: o,
                tooltipEvents: a,
                isCompact: r,
                useCompactLayout: s = !1,
                isPrimary: l,
                disabled: c
            }) {
                let u = a ? (0, n(63390).A)(o, a) : o;
                return s && l ? (0, d.jsx)(n(265779).E, { ...u,
                    size: "md",
                    colorPalette: "blue",
                    iconTrailing: {
                        icon: n(595453).arrowChevronSingleDownSmallIcon,
                        size: "sm"
                    },
                    disabled: c,
                    children: (0, d.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        children: (0, d.jsx)(n(109939).sA, { ...r ? g.createMeetingNoteShort : g.createMeetingNote
                        })
                    })
                }) : (0, d.jsx)(n(988022).p, { ...u,
                    size: s ? "md" : "lg",
                    style: e,
                    hoveredStyle: t,
                    pressedStyle: i,
                    iconTrailing: {
                        icon: n(595453).arrowChevronSingleDownSmallIcon,
                        size: "sm"
                    },
                    disabled: c,
                    children: (0, d.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        children: (0, d.jsx)(n(109939).sA, { ...r ? g.createMeetingNoteShort : g.createMeetingNote
                        })
                    })
                })
            }
            let g = (0, n(109939).YK)({
                createMeetingNote: {
                    id: "addMeetingNoteDropdown.createMeetingNote",
                    defaultMessage: "Create meeting note"
                },
                createMeetingNoteShort: {
                    id: "addMeetingNoteDropdown.createMeetingNoteShort",
                    defaultMessage: "Meeting note"
                },
                addMeetingNoteAccessTooltip: {
                    id: "addMeetingNoteDropdown.addMeetingNoteAccessTooltip",
                    defaultMessage: "Will be shared with event participants in this workspace"
                },
                createNewMeetingNote: {
                    id: "addMeetingNoteDropdown.createNewMeetingNote",
                    defaultMessage: "Create new meeting note"
                },
                chooseExistingPage: {
                    id: "addMeetingNoteDropdown.chooseExistingPage",
                    defaultMessage: "Choose existing page"
                },
                chooseExistingDatabase: {
                    id: "addMeetingNoteDropdown.chooseExistingDatabase",
                    defaultMessage: "Choose existing database"
                }
            });
            n(944114), n(898992), n(354520), n(581454), n(737550), n(814603), n(147566), n(198721);
            var h = () => n(624621),
                y = () => n(254656),
                v = () => n(773352);
            let f = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.25",
                    svg: (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)("path", {
                            d: "M12.5 9.45a.55.55 0 1 1 0 1.1H11a.55.55 0 1 1 0-1.1z"
                        }), (0, d.jsx)("path", {
                            d: "M13.25 2.375c1.174 0 2.125.951 2.125 2.125v11.875H17a.625.625 0 1 1 0 1.25H3a.625.625 0 1 1 0-1.25h1.625V4.5c0-1.174.951-2.125 2.125-2.125zm-6.5 1.25a.875.875 0 0 0-.875.875v11.875h8.25V4.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                x = (0, n(104509).wt)("doorClosed", f, "default");
            var j = () => n(372181),
                _ = () => n(588739),
                M = () => n(416607),
                b = () => n(964282),
                S = () => n(103558),
                k = () => n(68067),
                C = () => n(908919);
            let w = {
                minHeight: 40
            };

            function T(e) {
                let {
                    attendee: t,
                    userStore: i,
                    ...o
                } = e, a = (0, n(109939).tz)(), r = (0, n(682985).K8)(() => i ? (0, n(197018).MR)(i.getModel()) : void 0, [i]), l = (0, n(682985).K8)(() => {
                    var e;
                    return null == r || null == (e = r.asActor) ? void 0 : e.getDisplayName(a)
                }, [r, a]), {
                    displayName: c,
                    email: u
                } = t, p = i ? (0, d.jsx)(n(321753).A, {
                    userStore: i,
                    size: 32
                }) : (0, d.jsx)(n(321753).A, {
                    avatar: {
                        email: u,
                        name: l ? ? c
                    },
                    size: 32
                }), m = r && l ? (0, d.jsx)(n(920224).S, {
                    actor: r.asActor
                }) : c ? ? u, g = m === u || l === u ? void 0 : u;
                return (0, d.jsx)(s().A, { ...o,
                    style: w,
                    icon: p,
                    title: m,
                    caption: g
                })
            }
            new(n(815048)).O2("DebugActivityStateMenuItem", async () => await n.e(7670).then(n.bind(n, 591143)));
            let I = (0, n(109939).YK)({
                    idCopied: {
                        id: "calendar.conferenceMenu.idCopied",
                        defaultMessage: "Call ID copied to clipboard"
                    },
                    locationCopied: {
                        id: "calendar.conferenceMenu.locationCopied",
                        defaultMessage: "Location copied to clipboard"
                    },
                    joinMeeting: {
                        id: "calendar.conferenceMenu.join",
                        defaultMessage: "Join {provider}"
                    },
                    eventDetailsMenuTooltip: {
                        id: "upcomingMeetingsList.eventDetailsMenu.tooltip",
                        defaultMessage: "Event details"
                    }
                }),
                A = {
                    conferencingIcon: {
                        color: n(632079).Tj.blue.text.accentPrimary
                    },
                    defaultIcon: {
                        color: n(632079).Tj.icon.primary
                    },
                    placeholderIcon: {
                        color: n(632079).Tj.icon.secondary
                    },
                    placeholderEventIcon: {
                        color: n(632079).Tj.text.tertiary
                    },
                    menu: {
                        minWidth: 200
                    },
                    style0: {
                        width: 210
                    },
                    style1: {
                        width: 240
                    }
                };

            function P({
                event: e,
                liveTranscriptionBlockStores: t,
                useCompactLayout: c = !1,
                size: u,
                alignmentToOrigin: p
            }) {
                let m = (0, n(682985).uB)(void 0, n(510969).A),
                    g = (0, n(109939).tz)(),
                    f = (0, n(533992).v3)(),
                    w = (0, n(723240).r)(),
                    {
                        spaceName: D,
                        userEmail: E
                    } = (0, n(682985).K8)(() => {
                        var e, t;
                        return {
                            spaceName: (null == (e = n(728372).AppStoreSidebarSpaceStore.state) ? void 0 : e.getName()) ? ? "",
                            userEmail: (null == (t = n(728372).AppStoreCurrentUserStore.state) ? void 0 : t.getEmail()) ? ? ""
                        }
                    }, []),
                    [B] = (0, n(97668).Yb)(() => (0, n(874809).lq)({
                        environment: f,
                        baseUrl: e.url,
                        spaceId: w,
                        from: "homeEventClick"
                    }), [w, f, e]),
                    N = t.map(e => ({
                        store: e,
                        id: e.id
                    })),
                    {
                        notionAttachmentStores: O,
                        externalAttachments: L
                    } = (0, n(682985).K8)(() => {
                        let t = n(728372).AppStoreSidebarSpaceStore.state;
                        if (!t) return {
                            notionAttachmentStores: [],
                            externalAttachments: []
                        };
                        let i = [],
                            o = [];
                        for (let n of e.attachments ? ? []) {
                            let e = n.fileUrl,
                                a = (0, b().xy)({
                                    environment: f,
                                    fileUrl: e,
                                    spaceStore: t
                                });
                            a ? i.push({
                                store: a,
                                id: a.id
                            }) : o.push(n)
                        }
                        return {
                            notionAttachmentStores: i,
                            externalAttachments: o
                        }
                    }, [e.attachments, f]),
                    z = (0, n(682985).K8)(() => {
                        let t = n(728372).AppStoreSidebarSpaceStore.state;
                        if (!t || !e.attendees) return {};
                        let i = e.attendees.map(e => e.notionUserId).filter(n(722371).O9).map(e => n(807825).L.createChildStore(t, {
                                table: n(832375).oo9,
                                id: e
                            })),
                            o = {};
                        for (let e of i) o[e.id] = e;
                        return o
                    }, [e]),
                    [W, V] = (0, i.useState)(void 0);
                (0, i.useEffect)(() => {}, []), (0, i.useMemo)(() => {
                    if (W) return W.buildDebugActivityStateMenuItem({
                        event: e,
                        onSelect: () => m.setState({
                            open: !1
                        })
                    })
                }, [W, e, m]);
                let K = u ? ? (c ? "md" : "lg"),
                    R = n(399411).RO[K],
                    F = n(244996).Ev[n(399411).JC[K]],
                    U = (0, n(960253).I)(() => ({
                        iconButton: {
                            width: R,
                            height: R,
                            borderRadius: n(399411).VJ[K],
                            padding: 0,
                            display: "flex",
                            justifyContent: "center"
                        },
                        icon: {
                            width: F,
                            height: F
                        }
                    }), [R, F, K]),
                    Y = function() {
                        let t = e.conferencing;
                        if (!t) return;
                        let i = g.formatMessage(I.joinMeeting, {
                                provider: t.providerDisplayName || t.providerName || "meeting"
                            }),
                            o = {
                                key: "join-meeting",
                                items: []
                            };
                        return o.items.push({
                            key: "join-meeting-button",
                            action: () => {
                                (0, a().u)({
                                    event: {
                                        eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                        eventProperties: {
                                            sub_item: "join-meeting",
                                            event_id: e.id
                                        }
                                    }
                                }), m.setState({
                                    open: !1
                                }), t.url && (0, h().L)({
                                    environment: f,
                                    url: t.url
                                })
                            },
                            render: e => (0, d.jsx)(s().A, { ...e,
                                icon: (0, d.jsx)(r().I, {
                                    icon: n(41049).H,
                                    style: A.conferencingIcon
                                }),
                                title: i
                            })
                        }), o
                    }(),
                    H = function() {
                        var t;
                        let i = e.conferencing;
                        if (!i || !i.id && !e.location) return;
                        let o = {
                            key: "copy-id-and-location",
                            render: e => (0, d.jsx)(l().A, { ...e,
                                topBorder: !!Y
                            }),
                            items: []
                        };
                        if (i.id) {
                            let t = "room" === i.idType ? g.formatMessage({
                                id: "upcomingMeetingsList.eventDetailsMenu.room",
                                defaultMessage: "Room: {id}"
                            }, {
                                id: i.id
                            }) : g.formatMessage({
                                id: "upcomingMeetingsList.eventDetailsMenu.callId",
                                defaultMessage: "Call ID: {id}"
                            }, {
                                id: i.id
                            });
                            o.items.push({
                                key: "copy-id",
                                action: async () => {
                                    (0, a().u)({
                                        event: {
                                            eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                            eventProperties: {
                                                sub_item: "copy-id",
                                                event_id: e.id
                                            }
                                        }
                                    }), m.setState({
                                        open: !1
                                    });
                                    let t = await (0, n(969899).jd)();
                                    await t({
                                        environment: f,
                                        stringValue: i.id,
                                        copiedMessage: I.idCopied
                                    })
                                },
                                render: e => (0, d.jsx)(s().A, { ...e,
                                    icon: (0, d.jsx)(r().I, {
                                        icon: n(109925).phoneIcon,
                                        style: A.defaultIcon
                                    }),
                                    title: t
                                })
                            })
                        }
                        let c = (null == (t = e.attendees) ? void 0 : t.filter(e => e.resource)) || [],
                            u = c.some(t => {
                                var n, i;
                                return t.displayName && (null == (n = e.location) ? void 0 : n.includes(t.displayName)) || t.email && (null == (i = e.location) ? void 0 : i.includes(t.email))
                            });
                        if (e.location && !u) {
                            let t = e.location;
                            o.items.push({
                                key: "location",
                                action: async () => {
                                    (0, a().u)({
                                        event: {
                                            eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                            eventProperties: {
                                                sub_item: "location",
                                                event_id: e.id
                                            }
                                        }
                                    }), m.setState({
                                        open: !1
                                    });
                                    let i = await (0, n(969899).jd)();
                                    await i({
                                        environment: f,
                                        stringValue: t,
                                        copiedMessage: I.locationCopied
                                    })
                                },
                                render: e => (0, d.jsx)(s().A, { ...e,
                                    icon: (0, d.jsx)(r().I, {
                                        icon: n(139038).T,
                                        style: A.defaultIcon
                                    }),
                                    title: t
                                })
                            })
                        }
                        for (let t of c.slice(0, 3)) o.items.push({
                            key: `room-${t.email}`,
                            action: () => {
                                (0, a().u)({
                                    event: {
                                        eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                        eventProperties: {
                                            sub_item: "room",
                                            event_id: e.id
                                        }
                                    }
                                }), m.setState({
                                    open: !1
                                })
                            },
                            render: e => (0, d.jsx)(s().A, { ...e,
                                icon: (0, d.jsx)(r().I, {
                                    icon: x,
                                    style: A.defaultIcon
                                }),
                                title: t.displayName || t.email
                            })
                        });
                        return o
                    }(),
                    $ = function() {
                        let t = function() {
                                let t, i, c, u = [],
                                    p = [],
                                    m = [];
                                for (let t of e.attendees ? ? [])
                                    if (!t.resource && t.email) {
                                        let e = { ...t,
                                                email: t.email
                                            },
                                            n = t.notionUserId && z[t.notionUserId];
                                        t.self ? u.push(e) : n ? p.push(e) : m.push(e)
                                    }
                                for (let e of [...u, ...p])(i ? ? = {
                                    key: "workspace-attendees",
                                    render: e => (0, d.jsx)(l().A, { ...e,
                                        title: g.formatMessage({
                                            id: "upcomingMeetingsList.eventDetailsMenu.workspaceAttendees",
                                            defaultMessage: "Workspace participants"
                                        }),
                                        right: (0, d.jsx)(o().m, {
                                            content: () => g.formatMessage({
                                                id: "upcomingMeetingsList.eventDetailsMenu.workspaceAttendeesTooltip",
                                                defaultMessage: "Participants in your workspace have access to this meeting note"
                                            }),
                                            textWrap: !0,
                                            style: A.style0,
                                            children: e => (0, d.jsx)("div", { ...e,
                                                children: (0, d.jsx)(r().I, {
                                                    icon: j().infoCircleSmallIcon,
                                                    size: "xs",
                                                    style: A.placeholderIcon
                                                })
                                            })
                                        })
                                    }),
                                    items: []
                                }).items.push(G(e));
                                for (let e of m)(c ? ? = {
                                    key: "external-attendees",
                                    render: e => (0, d.jsx)(l().A, { ...e,
                                        topBorder: !!i,
                                        title: g.formatMessage({
                                            id: "upcomingMeetingsList.eventDetailsMenu.externalAttendees",
                                            defaultMessage: "Other participants"
                                        }),
                                        right: (0, d.jsx)(o().m, {
                                            content: () => g.formatMessage({
                                                id: "upcomingMeetingsList.eventDetailsMenu.externalAttendeesTooltip",
                                                defaultMessage: "Participants not in your workspace don’t have access to this meeting note"
                                            }),
                                            textWrap: !0,
                                            style: A.style1,
                                            children: e => (0, d.jsx)("div", { ...e,
                                                children: (0, d.jsx)(r().I, {
                                                    icon: j().infoCircleSmallIcon,
                                                    size: "xs",
                                                    style: A.placeholderIcon
                                                })
                                            })
                                        })
                                    }),
                                    items: []
                                }).items.push(G(e));
                                let h = [i, c].filter(n(722371).O9);
                                return h.length && (t ? ? = {
                                    key: "attendees",
                                    action: () => {},
                                    render: (t, i) => (0, d.jsx)(n(816231).A, { ...t,
                                        icon: (0, d.jsx)(r().I, {
                                            icon: n(825012).peopleIcon,
                                            style: A.defaultIcon
                                        }),
                                        onFocus: i.onFocus,
                                        renderExtension: e => (0, d.jsx)(n(747369).A, {
                                            menuType: n(649476).gu.Popup,
                                            ...e,
                                            maxWidth: 300,
                                            children: (0, d.jsx)(n(558045).A, {
                                                type: n(558045).O.Vertical,
                                                initialFocus: 0,
                                                sections: h
                                            })
                                        }),
                                        children: (t, n) => (0, d.jsx)(s().A, { ...t,
                                            ref: n,
                                            onClick: n => {
                                                var i;
                                                (0, a().u)({
                                                    event: {
                                                        eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                                        eventProperties: {
                                                            sub_item: "attendees",
                                                            event_id: e.id
                                                        }
                                                    }
                                                }), null == (i = t.onClick) || i.call(t, n)
                                            },
                                            title: g.formatMessage({
                                                id: "upcomingMeetingsList.eventDetailsMenu.participants",
                                                defaultMessage: "Participants"
                                            })
                                        })
                                    })
                                }), t
                            }(),
                            i = function() {
                                let t, i, o;
                                for (let {
                                        store: t,
                                        id: n
                                    } of N)(i ? ? = {
                                    key: "transcription-block-attachments",
                                    render: e => (0, d.jsx)(l().A, { ...e,
                                        title: g.formatMessage({
                                            id: "upcomingMeetingsList.eventDetailsMenu.transcriptionBlockAttachments",
                                            defaultMessage: "AI meeting notes"
                                        })
                                    }),
                                    items: []
                                }).items.push({
                                    key: n,
                                    action: () => {
                                        (0, a().u)({
                                            event: {
                                                eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                                eventProperties: {
                                                    sub_item: "attachment",
                                                    attachment_type: "linked_transcription_block",
                                                    event_id: e.id
                                                }
                                            }
                                        }), m.setState({
                                            open: !1
                                        }), (async () => {
                                            try {
                                                (await k().$.load()).navigateToTranscriptionBlock({
                                                    environment: f,
                                                    blockStore: t,
                                                    pageVisitSource: y().y8.UpcomingMeetingCalendarEvent,
                                                    peekMode: "side_peek"
                                                })
                                            } catch (e) {
                                                v().log({
                                                    level: "error",
                                                    from: "CalendarEventDetailsMenu",
                                                    type: "failed_to_lazy_load_transcription_create_actions",
                                                    error: (0, M().convertErrorToLog)(e)
                                                })
                                            }
                                        })()
                                    },
                                    render: e => (0, d.jsx)(S().A, { ...e,
                                        store: t
                                    })
                                });
                                if (O.length || L.length) {
                                    for (let {
                                            store: t,
                                            id: n
                                        } of (o ? ? = {
                                            key: "notion-and-external-attachments",
                                            render: e => (0, d.jsx)(l().A, { ...e,
                                                topBorder: !!i,
                                                title: g.formatMessage({
                                                    id: "upcomingMeetingsList.eventDetailsMenu.notionAndExternalAttachments",
                                                    defaultMessage: "Docs and links"
                                                })
                                            }),
                                            items: []
                                        }, O ? ? [])) o.items.push({
                                        key: n,
                                        action: () => {
                                            (0, a().u)({
                                                event: {
                                                    eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                                    eventProperties: {
                                                        sub_item: "attachment",
                                                        attachment_type: "notion_document",
                                                        event_id: e.id
                                                    }
                                                }
                                            }), m.setState({
                                                open: !1
                                            }), (0, C().V)({
                                                environment: f,
                                                openInNew: void 0,
                                                store: t,
                                                peekMode: "side_peek",
                                                pageVisitSource: y().y8.UpcomingMeetingCalendarEvent,
                                                resultsStore: void 0,
                                                collectionContextStore: void 0
                                            })
                                        },
                                        render: e => (0, d.jsx)(S().A, { ...e,
                                            store: t
                                        })
                                    });
                                    for (let t of L ? ? []) o.items.push({
                                        key: t.fileUrl,
                                        action: () => {
                                            let n = (() => {
                                                try {
                                                    return new URL(t.fileUrl).hostname
                                                } catch {
                                                    return
                                                }
                                            })();
                                            (0, a().u)({
                                                event: {
                                                    eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                                    eventProperties: {
                                                        sub_item: "attachment",
                                                        attachment_type: "external_document",
                                                        domain: n,
                                                        event_id: e.id
                                                    }
                                                }
                                            }), m.setState({
                                                open: !1
                                            }), (0, h().L)({
                                                environment: f,
                                                url: t.fileUrl
                                            })
                                        },
                                        render: e => (0, d.jsx)(s().A, { ...e,
                                            title: t.title ? ? t.fileUrl,
                                            icon: (0, d.jsx)(r().I, {
                                                icon: _().linkIcon,
                                                style: A.placeholderIcon
                                            })
                                        })
                                    })
                                }
                                let c = [i, o].filter(n(722371).O9);
                                return c.length && (t ? ? = {
                                    key: "attachments",
                                    action: () => {},
                                    render: (t, i) => (0, d.jsx)(n(816231).A, { ...t,
                                        icon: (0, d.jsx)(r().I, {
                                            icon: n(490648).d,
                                            style: A.defaultIcon
                                        }),
                                        onFocus: i.onFocus,
                                        renderExtension: (e, t) => (0, d.jsx)(n(747369).A, {
                                            menuType: n(649476).gu.Popup,
                                            ...e,
                                            maxWidth: 300,
                                            children: (0, d.jsx)(n(558045).A, {
                                                type: n(558045).O.Vertical,
                                                initialFocus: 0,
                                                sections: c
                                            })
                                        }),
                                        children: (t, n) => (0, d.jsx)(s().A, { ...t,
                                            ref: n,
                                            onClick: n => {
                                                var i;
                                                (0, a().u)({
                                                    event: {
                                                        eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                                        eventProperties: {
                                                            sub_item: "attachments",
                                                            event_id: e.id
                                                        }
                                                    }
                                                }), null == (i = t.onClick) || i.call(t, n)
                                            },
                                            title: g.formatMessage({
                                                id: "upcomingMeetingsList.eventDetailsMenu.attachments",
                                                defaultMessage: "Docs and links"
                                            })
                                        })
                                    })
                                }), t
                            }(),
                            c = {
                                key: "submenu",
                                render: e => (0, d.jsx)(l().A, { ...e,
                                    topBorder: !!(Y || H)
                                }),
                                items: [t, i].filter(n(722371).O9)
                            };
                        if (c.items.length) return c
                    }(),
                    J = [Y, H, $, {
                        key: "actions",
                        render: e => (0, d.jsx)(l().A, { ...e,
                            topBorder: !!(Y || H || $)
                        }),
                        items: [{
                            key: "open-in-calendar",
                            render: e => (0, d.jsx)(s().A, { ...e,
                                icon: (0, d.jsx)(n(968107).y, {
                                    colorVariant: "primary"
                                }),
                                title: g.formatMessage({
                                    id: "upcomingMeetingsList.eventDetailsMenu.openInCalendar",
                                    defaultMessage: "Open in calendar"
                                })
                            }),
                            action: () => {
                                (0, a().u)({
                                    event: {
                                        eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                        eventProperties: {
                                            sub_item: "open-in-calendar",
                                            event_id: e.id
                                        }
                                    }
                                }), m.setState({
                                    open: !1
                                }), (0, n(874809).J7)({
                                    environment: f,
                                    url: B.value ? ? e.url,
                                    from: "upcomingMeetingsListDetailsMenu"
                                })
                            }
                        }]
                    }, void 0].filter(n(722371).O9);
                if (!J.length) return null;

                function G(t) {
                    return {
                        key: t.email,
                        action: () => {
                            (0, a().u)({
                                event: {
                                    eventName: "upcoming_meetings_details_dropdown_sub_item_clicked",
                                    eventProperties: {
                                        sub_item: "attendee",
                                        event_id: e.id
                                    }
                                }
                            })
                        },
                        render: e => (0, d.jsx)(T, { ...e,
                            attendee: t,
                            userStore: t.notionUserId ? z[t.notionUserId] : void 0
                        })
                    }
                }
                return (0, d.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    buttonPopupStore: m,
                    style: A.menu,
                    alignmentToOrigin: p,
                    originGap: 2,
                    onOpen: () => {
                        (0, a().u)({
                            event: {
                                eventName: "upcoming_meetings_details_dropdown_clicked",
                                eventProperties: {
                                    event_id: e.id
                                }
                            }
                        })
                    },
                    content: () => (0, d.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        maxWidth: 300,
                        children: (0, d.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            sections: J,
                            initialFocus: 0,
                            onAccept: () => {
                                m.setState({
                                    open: !1
                                })
                            }
                        })
                    }),
                    children: t => (0, d.jsx)(o().m, {
                        content: () => g.formatMessage(I.eventDetailsMenuTooltip),
                        children: i => (0, d.jsx)(n(988022).p, {
                            style: U.iconButton,
                            ...(0, n(63390).A)(t, i),
                            children: (0, d.jsx)(r().I, {
                                icon: F <= 14 ? n(361226).ellipsisSmallIcon : n(397900).ellipsisIcon,
                                style: { ...U.icon,
                                    ...e.isPlaceholderEvent ? A.placeholderEventIcon : A.placeholderIcon
                                }
                            })
                        })
                    })
                })
            }
            let D = {
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    padding: 0
                },
                E = {
                    background: "transparent"
                },
                B = {
                    background: "transparent"
                };

            function N({
                event: e,
                primaryTranscriptionBlockStoreState: t,
                disabled: o,
                onClick: a
            }) {
                let r = (0, n(109939).tz)(),
                    [s, l] = (0, i.useState)(!1),
                    c = (0, n(960253).I)(() => ({
                        meetingNoteTitle: { ...n(649316).U.captionRegular,
                            color: s && !o ? n(632079).Tj.text.primary : n(632079).Tj.text.secondary
                        }
                    }), [s, o]);
                if (!(null != t && t.primaryTranscriptionBlockStore)) return null;
                let u = t.primaryTranscriptionBlockStore;
                return (0, d.jsx)(n(988022).p, {
                    size: "xs",
                    style: D,
                    hoveredStyle: E,
                    pressedStyle: B,
                    iconLeading: {
                        icon: n(681875).a,
                        size: 16,
                        colorVariant: s && !o ? "primary" : "secondary"
                    },
                    onMouseEnter: () => l(!0),
                    onMouseLeave: () => l(!1),
                    disabled: o,
                    onClick: t => {
                        t.preventDefault(), t.stopPropagation(), a(e)
                    },
                    children: (0, d.jsx)(n(627918).A, {
                        store: u,
                        placeholder: r.formatMessage(O.meetingNoteTitlePlaceholder),
                        underline: !0,
                        style: c.meetingNoteTitle,
                        shouldWrap: !1,
                        maxLength: 14,
                        maxLines: 1
                    })
                })
            }
            let O = (0, n(109939).YK)({
                    meetingNoteTitlePlaceholder: {
                        id: "calendarEventMeetingNote.meetingNoteTitlePlaceholder",
                        defaultMessage: "Meeting Note"
                    }
                }),
                L = 620,
                z = `linear-gradient(to right,
rgb(0, 0, 0) 0px calc(100% - 50px),
rgba(0, 0, 0, 0) 100%
)`,
                W = `linear-gradient(to right,
rgb(0, 0, 0) 0px calc(100% - 12px),
rgba(0, 0, 0, 0) 100%
)`,
                V = (0, n(64960)._S)({
                    color: n(632079).Tj.blue.background.accentPrimary
                }),
                K = (0, n(64960)._S)({
                    color: n(632079).Tj.background.tertiaryTranslucent
                });

            function R(e = {}) {
                let {
                    useCompactLayout: t = !1,
                    useMinimalLayout: i = !1
                } = e, o = (0, n(960253).e)();
                return (0, n(960253).I)(() => ({
                    eventCell: {
                        flex: 1,
                        position: "relative",
                        display: "grid",
                        gridTemplateColumns: "auto 1fr minmax(auto, max-content)",
                        height: "auto",
                        marginInline: -8,
                        paddingTop: i ? 5 : 8,
                        paddingBottom: i ? 5 : 8,
                        paddingInline: 8,
                        borderRadius: 8
                    },
                    eventCellContent: {
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 0,
                        marginInlineStart: i ? 6 : 12
                    },
                    actionsContainer: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginInlineStart: "-20px",
                        marginTop: "auto",
                        marginBottom: "auto",
                        paddingBottom: 4 * !!i
                    },
                    hoveredPrimaryCTA: {
                        background: V.hovered
                    },
                    pressedPrimaryCTA: {
                        background: V.pressed
                    },
                    hoveredSecondaryCTA: {
                        background: K.hovered
                    },
                    pressedSecondaryCTA: {
                        background: K.pressed
                    },
                    placeholderCTA: {
                        color: n(632079).Tj.text.tertiary,
                        background: "light" === o ? "rgba(0, 0, 0, 0.05)" : n(632079).Tj.state.hover
                    },
                    transcribingState: {
                        display: "flex",
                        alignItems: "center",
                        width: t || i ? 72 : 115,
                        height: t || i ? 28 : 32,
                        padding: t || i ? 0 : "0 6px"
                    }
                }), [t, i, o])
            }
            let F = {
                eventCellCompact: {
                    display: "flex",
                    flexDirection: "row"
                },
                indicatorCompact: {
                    alignSelf: "stretch",
                    flexShrink: 0
                },
                eventCellContentCompact: {
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    overflow: "hidden"
                },
                actionsContainerCompact: {
                    marginInlineStart: 0,
                    marginTop: 6,
                    width: "100%"
                },
                eventCellMinimal: {
                    display: "flex",
                    flexDirection: "row",
                    position: "relative"
                },
                indicatorMinimal: {
                    marginTop: 0,
                    marginInline: 6,
                    flexShrink: 0
                },
                eventCellContentMinimal: {
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                    overflow: "hidden"
                },
                eventTitleMinimal: {
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    overflow: "hidden"
                },
                eventTitleTextMinimal: {
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color: n(632079).Tj.text.accentPrimary
                },
                eventTimeMinimal: {
                    flexShrink: 0
                },
                toolbarJoinButton: {
                    background: "none",
                    border: "none",
                    height: 20,
                    fontSize: 12,
                    color: n(632079).Tj.text.secondary
                },
                toolbarJoinButtonHovered: {
                    color: n(632079).Tj.text.primary
                },
                hoveredEventCell: {
                    background: n(632079).Tj.state.hover
                },
                contentMask: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    minWidth: 0,
                    mask: z,
                    WebkitMask: z
                },
                eventTitle: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                detailsRow: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    height: 22,
                    minWidth: 0,
                    overflow: "hidden",
                    mask: W,
                    WebkitMask: W
                },
                detailItem: {
                    flexShrink: 0
                },
                consentTooltip: {
                    width: 265
                },
                primaryCTA: {
                    color: n(632079).Tj.blue.text.inversePrimary,
                    background: n(632079).Tj.blue.background.accentPrimary
                },
                secondaryCTA: {
                    color: n(632079).Tj.text.primary,
                    background: n(632079).Tj.background.tertiaryTranslucent
                },
                disabledCTA: {
                    opacity: .4
                },
                readOnly: {
                    pointerEvents: "none"
                }
            };

            function U({
                event: e,
                primaryTranscriptionBlockStoreState: t,
                isPrimary: a,
                isActive: r,
                isWithin5Min: s,
                isWithin30Min: l,
                useCompactLayout: c = !1,
                useMinimalLayout: u = !1,
                alwaysShowJoinButton: m = !1,
                showDayPrefix: g = !0,
                peekMode: h
            }) {
                var y, v;
                let f = (0, n(533992).v3)(),
                    x = (0, n(515467).m)(),
                    j = (0, n(774073).f1)(),
                    _ = (0, n(109939).tz)(),
                    {
                        timeZone: M
                    } = (0, n(591742).mn)(),
                    b = (0, i.useRef)(null),
                    S = (0, n(729787).wY)(b),
                    [k, C] = (0, i.useState)(!1),
                    [w, T] = (0, i.useState)(!1),
                    [I, A] = (0, i.useState)(!1),
                    [D, E] = (0, i.useState)(!1),
                    B = s || r,
                    O = (null == t ? void 0 : t.reason) === "LOADING",
                    z = null == t ? void 0 : t.primaryTranscriptionBlockStore,
                    W = !!z,
                    V = z ? t.lastTranscriptionState : void 0,
                    K = (null == V ? void 0 : V.state) === "transcribing",
                    H = V && "initial" !== V.state,
                    $ = null != S && !!S.width && S.width < L,
                    J = a || B,
                    [G, q] = (0, i.useState)(() => n(906745).DateTime.now());
                (0, i.useEffect)(() => {
                    if (!u) return;
                    let e = setInterval(() => {
                        q(n(906745).DateTime.now())
                    }, 5e3);
                    return () => {
                        clearInterval(e)
                    }
                }, [u]);
                let X = (() => {
                        let t = e.start;
                        if (!("dateTime" in t)) return !1;
                        let i = n(906745).DateTime.fromISO(t.dateTime),
                            o = u ? G : n(906745).DateTime.now(),
                            a = i.diff(o, "minutes").minutes;
                        return u ? a <= 2 || r : a > 0 && a <= 10
                    })(),
                    Z = R({
                        useCompactLayout: c,
                        useMinimalLayout: u
                    }),
                    Q = (0, n(960253).I)(() => ({
                        toolbarContainer: {
                            display: k ? "flex" : "none",
                            alignItems: "center",
                            gap: 4,
                            marginInlineStart: 4
                        }
                    }), [k]);

                function ee() {
                    T(!0), (0, n(861842).p5)({
                        event: e,
                        from: "upcoming_meetings",
                        environment: f,
                        calendarBotId: x.botId
                    })
                }
                async function et(e) {
                    A(!0), E(!0);
                    try {
                        await (0, n(861842).D6)({
                            event: e,
                            from: "upcoming_meeting_start_transcribing",
                            environment: f,
                            calendarBotId: x.botId
                        })
                    } finally {
                        E(!1)
                    }
                }
                async function en(e) {
                    let {
                        event: t,
                        from: i
                    } = e;
                    E(!0);
                    try {
                        await (0, n(861842).nT)({
                            event: t,
                            from: i,
                            environment: f,
                            calendarBotId: x.botId,
                            peekMode: h
                        })
                    } finally {
                        E(!1)
                    }
                }

                function ei(n) {
                    return (0, d.jsx)(N, {
                        event: e,
                        primaryTranscriptionBlockStoreState: t,
                        disabled: D,
                        onClick: e => {
                            en({
                                event: e,
                                from: n
                            })
                        }
                    })
                }
                let eo = !e.isPlaceholderEvent && !!(null == (v = e.conferencing) ? void 0 : v.url) && (!!m || !!l && !!k || !!B && (H ? k : !w || k)),
                    ea = B ? !I && !H : !!W && !H && (a || k),
                    er = !e.isPlaceholderEvent && !B && !W && (a || k),
                    es = function() {
                        if (!u) return;
                        let t = e.start;
                        if (!("dateTime" in t)) return;
                        let i = n(906745).DateTime.fromISO(t.dateTime).diff(G, "minutes").minutes;
                        if (i > 0 && i <= 10) {
                            let e = Math.max(1, Math.ceil(i));
                            return `In ${e} min`
                        }
                    }(),
                    el = function() {
                        if (!u || es) return;
                        let t = e.start;
                        if (!("dateTime" in t)) return;
                        let i = n(906745).DateTime.fromISO(t.dateTime),
                            o = i.setZone(M),
                            a = G.setZone(M);
                        if (o.hasSame(a, "day")) return "dateTime" in e.end ? (0, n(523144).Vj)({
                            start: t.dateTime,
                            end: e.end.dateTime,
                            locale: _.locale,
                            timeZone: M
                        }) : (0, n(523144).uJ)({
                            time: i,
                            locale: _.locale,
                            timeZone: M
                        });
                        let r = (0, n(523144).uJ)({
                            time: i,
                            locale: _.locale,
                            timeZone: M
                        });
                        if (!g) return r;
                        if (o.hasSame(a.plus({
                                days: 1
                            }), "day")) return `${_.formatMessage(Y.tomorrowPrefix)} ${r}`;
                        if (o.startOf("day").diff(a.startOf("day"), "days").days <= 6) {
                            let e = o.toLocaleString({
                                weekday: "short"
                            }, {
                                locale: _.locale
                            });
                            return `${e} ${r}`
                        }
                        let s = o.toLocaleString({
                            month: "numeric",
                            day: "numeric"
                        }, {
                            locale: _.locale
                        });
                        return `${s} ${r}`
                    }(),
                    ed = null == (y = e.summary) ? void 0 : y.trim(),
                    ec = ed && ed.length > 0 ? ed : _.formatMessage(Y.noTitlePlaceholder);

                function eu(e) {
                    return { ...e.isPrimary ? F.primaryCTA : F.secondaryCTA,
                        ...e.isPlaceholder ? Z.placeholderCTA : {},
                        ...e.isDisabled ? F.disabledCTA : {}
                    }
                }

                function ep(i) {
                    if (O || c && !X && !r || u && !X) return null;
                    let a = u ? "start" : "end",
                        s = k ? (0, d.jsx)(P, {
                            event: e,
                            liveTranscriptionBlockStores: null != t && t.primaryTranscriptionBlockStore ? t.liveTranscriptionBlockStores : [],
                            useCompactLayout: c || u,
                            alignmentToOrigin: a
                        }) : void 0,
                        l = K ? (0, d.jsx)("div", {
                            style: Z.transcribingState,
                            children: (0, d.jsx)(n(650354).t, {
                                fakeSoundwave: !0,
                                rootBlockId: (null == z ? void 0 : z.id) || "",
                                fillWidth: !0
                            })
                        }) : void 0,
                        m = c || u,
                        g = eo ? (0, d.jsx)(n(988022).p, {
                            size: m ? "md" : "lg",
                            style: eu({
                                isPlaceholder: e.isPlaceholderEvent
                            }),
                            hoveredStyle: Z.hoveredSecondaryCTA,
                            onClick: ee,
                            children: (0, d.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                children: (0, d.jsx)(n(109939).sA, { ...$ ? Y.joinMeetingShort : Y.joinMeeting
                                })
                            })
                        }) : void 0;
                    return (0, d.jsxs)("div", {
                        style: { ...Z.actionsContainer,
                            ...i ? ? {}
                        },
                        children: [m ? void 0 : s, m ? l : g, m ? void 0 : l, ea ? (0, d.jsx)(o().m, {
                            style: F.consentTooltip,
                            textWrap: !0,
                            content: () => (0, d.jsx)(n(799476).s, {}),
                            children: t => m ? (0, d.jsx)(n(265779).E, { ...t,
                                size: "md",
                                colorPalette: "blue",
                                iconLeading: j ? {
                                    icon: n(275124).B,
                                    style: {
                                        overflow: "visible"
                                    }
                                } : void 0,
                                style: { ...e.isPlaceholderEvent ? Z.placeholderCTA : {},
                                    ...D ? F.disabledCTA : {}
                                },
                                disabled: D,
                                onClick: () => et(e),
                                children: (0, d.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    children: (0, d.jsx)(n(109939).sA, { ...$ ? Y.startTranscribingShort : Y.startTranscribing
                                    })
                                })
                            }) : (0, d.jsx)(n(988022).p, { ...t,
                                size: "lg",
                                iconLeading: j ? {
                                    icon: n(275124).B,
                                    style: {
                                        overflow: "visible"
                                    }
                                } : void 0,
                                style: { ...J ? F.primaryCTA : F.secondaryCTA,
                                    ...e.isPlaceholderEvent ? Z.placeholderCTA : {},
                                    ...D ? F.disabledCTA : {}
                                },
                                hoveredStyle: J ? Z.hoveredPrimaryCTA : Z.hoveredSecondaryCTA,
                                disabled: D,
                                onClick: () => et(e),
                                children: (0, d.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    children: (0, d.jsx)(n(109939).sA, { ...$ ? Y.startTranscribingShort : Y.startTranscribing
                                    })
                                })
                            })
                        }) : void 0, er ? (0, d.jsx)(p, {
                            event: e,
                            buttonStyle: eu({
                                isPrimary: J,
                                isPlaceholder: e.isPlaceholderEvent,
                                isDisabled: D
                            }),
                            hoveredButtonStyle: J ? Z.hoveredPrimaryCTA : Z.hoveredSecondaryCTA,
                            pressedButtonStyle: J ? Z.pressedPrimaryCTA : Z.pressedSecondaryCTA,
                            isCompact: $,
                            useCompactLayout: m,
                            isPrimary: J,
                            isPerformingTranscriptionAction: D,
                            setIsPerformingTranscriptionAction: E
                        }) : void 0, m ? g : void 0, m ? s : void 0]
                    })
                }
                return (0, d.jsx)(n(988022).p, {
                    ref: b,
                    style: { ...Z.eventCell,
                        ...c ? F.eventCellCompact : {},
                        ...u ? F.eventCellMinimal : {},
                        ...e.isPlaceholderEvent ? F.readOnly : {}
                    },
                    hoveredStyle: F.hoveredEventCell,
                    disabled: O || D,
                    onClick: () => {
                        en({
                            event: e,
                            from: "upcoming_meeting"
                        })
                    },
                    onMouseEnter: () => C(!0),
                    onMouseLeave: () => C(!1),
                    children: u ? (0, d.jsxs)(n(4458).fI, {
                        flexWrap: "wrap",
                        width: "100%",
                        flex: 1,
                        minWidth: 0,
                        alignItems: "center",
                        children: [(0, d.jsx)("div", {
                            style: F.indicatorMinimal,
                            children: (0, d.jsx)(n(533422).Y, {
                                event: e,
                                isBox: !0
                            })
                        }), (0, d.jsxs)("div", {
                            style: { ...Z.eventCellContent,
                                ...F.eventCellContentMinimal
                            },
                            children: [(0, d.jsx)("div", {
                                style: F.eventTitleMinimal,
                                children: (0, d.jsx)(n(111010).D, {
                                    style: { ...F.eventTitle,
                                        ...F.eventTitleTextMinimal
                                    },
                                    styleKey: "bodyMedium",
                                    colorVariant: e.isPlaceholderEvent ? "tertiary" : void 0,
                                    children: ec
                                })
                            }), (0, d.jsx)("div", {
                                style: { ...F.eventTimeMinimal,
                                    ...k ? {
                                        display: "none"
                                    } : {}
                                },
                                children: es || el ? (0, d.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "tertiary",
                                    children: es || el
                                }) : (0, d.jsx)(n(579961).z, {
                                    event: e
                                })
                            })]
                        }), (0, d.jsxs)("div", {
                            style: Q.toolbarContainer,
                            children: [eo ? (0, d.jsx)(n(988022).p, {
                                size: "sm",
                                style: F.toolbarJoinButton,
                                hoveredStyle: F.toolbarJoinButtonHovered,
                                onClick: e => {
                                    e.stopPropagation(), ee()
                                },
                                children: (0, d.jsx)(n(109939).sA, { ...Y.joinMeetingShort
                                })
                            }) : void 0, ea ? (0, d.jsx)(n(265779).E, {
                                size: "xs",
                                colorPalette: "blue",
                                disabled: D,
                                onClick: t => {
                                    t.stopPropagation(), et(e)
                                },
                                children: (0, d.jsx)(n(109939).sA, { ...Y.takeNotes
                                })
                            }) : void 0, (0, d.jsx)(P, {
                                event: e,
                                liveTranscriptionBlockStores: null != t && t.primaryTranscriptionBlockStore ? t.liveTranscriptionBlockStores : [],
                                size: "xs",
                                alignmentToOrigin: "start"
                            })]
                        })]
                    }) : c ? (0, d.jsxs)(n(4458).fI, {
                        width: "100%",
                        flex: 1,
                        minWidth: 0,
                        children: [(0, d.jsx)("div", {
                            style: F.indicatorCompact,
                            children: (0, d.jsx)(n(533422).Y, {
                                event: e
                            })
                        }), (0, d.jsxs)("div", {
                            style: { ...Z.eventCellContent,
                                ...F.eventCellContentCompact
                            },
                            children: [(0, d.jsx)(n(111010).D, {
                                style: F.eventTitle,
                                styleKey: "bodyMedium",
                                colorVariant: e.isPlaceholderEvent ? "tertiary" : void 0,
                                children: e.summary
                            }), (0, d.jsxs)("div", {
                                style: F.detailsRow,
                                children: [(0, d.jsx)("div", {
                                    style: F.detailItem,
                                    children: (0, d.jsx)(n(579961).z, {
                                        event: e
                                    })
                                }), r ? (0, d.jsx)("div", {
                                    style: F.detailItem,
                                    children: (0, d.jsx)(n(637570).B, {
                                        event: e
                                    })
                                }) : void 0, (0, d.jsx)("div", {
                                    style: F.detailItem,
                                    children: ei("upcoming_meeting_primary_note")
                                })]
                            }), ep(F.actionsContainerCompact)]
                        })]
                    }) : (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(n(533422).Y, {
                            event: e
                        }), (0, d.jsx)("div", {
                            style: Z.eventCellContent,
                            children: (0, d.jsxs)("div", {
                                style: F.contentMask,
                                children: [(0, d.jsx)(n(111010).D, {
                                    style: F.eventTitle,
                                    styleKey: "bodyMedium",
                                    colorVariant: e.isPlaceholderEvent ? "tertiary" : void 0,
                                    children: e.summary
                                }), (0, d.jsxs)("div", {
                                    style: F.detailsRow,
                                    children: [(0, d.jsx)("div", {
                                        style: F.detailItem,
                                        children: (0, d.jsx)(n(579961).z, {
                                            event: e
                                        })
                                    }), (0, d.jsx)("div", {
                                        style: F.detailItem,
                                        children: (0, d.jsx)(n(637570).B, {
                                            event: e
                                        })
                                    }), (0, d.jsx)("div", {
                                        style: F.detailItem,
                                        children: ei("upcoming_meeting_primary_note")
                                    })]
                                })]
                            })
                        }), ep()]
                    })
                })
            }
            let Y = (0, n(109939).YK)({
                joinMeeting: {
                    id: "transcriptionBlockControlButton.joinMeeting",
                    defaultMessage: "Join meeting"
                },
                joinMeetingShort: {
                    id: "transcriptionBlockControlButton.joinMeetingShort",
                    defaultMessage: "Join"
                },
                startTranscribing: {
                    id: "transcriptionBlockControlButton.startTranscribing",
                    defaultMessage: "Start transcribing"
                },
                startTranscribingShort: {
                    id: "transcriptionBlockControlButton.startTranscribingShort",
                    defaultMessage: "Transcribe"
                },
                takeNotes: {
                    id: "calendarEventCell.takeNotes",
                    defaultMessage: "Transcribe"
                },
                noTitlePlaceholder: {
                    id: "calendarEventCell.noTitlePlaceholder",
                    defaultMessage: "No title"
                },
                tomorrowPrefix: {
                    id: "calendarEventCell.tomorrowPrefix",
                    defaultMessage: "Tomorrow"
                }
            })
        },
        210301: (e, t, n) => {
            function i(e) {
                return e < 380
            }
            n.d(t, {
                OS: () => i,
                VW: () => o,
                lB: () => a
            });

            function o(e) {
                let {
                    widthPx: t,
                    forceCompact: n = !1
                } = e;
                return n || t < 490
            }

            function a(e) {
                let {
                    widthPx: t,
                    hasCitations: n,
                    isError: o
                } = e, a = i(t), r = !o && n && a, s = !r && (a || n && t < 490);
                return {
                    hideInstructionsControl: r,
                    hideInstructionsPrefix: s
                }
            }
        },
        360364: (e, t, n) => {
            function i(e) {
                try {
                    let t = JSON.stringify(e),
                        n = new TextEncoder().encode(t),
                        i = "";
                    for (let e of n) i += String.fromCharCode(e);
                    return btoa(i)
                } catch (e) {
                    (0, n(222024).t)().error({
                        from: "deserializeCalendarEventFromDeepLink",
                        type: "serializeFailed",
                        error: (0, n(161179).A)(e)
                    });
                    return
                }
            }
            async function o(e) {
                let t, {
                    environment: i,
                    serialized: o
                } = e;
                try {
                    let e = atob(o),
                        n = Uint8Array.from(e, e => e.charCodeAt(0)),
                        i = new TextDecoder().decode(n);
                    t = JSON.parse(i)
                } catch (e) {
                    (0, n(222024).t)().error({
                        from: "deserializeCalendarEventFromDeepLink",
                        type: "invalidSerializedEvent",
                        error: (0, n(161179).A)(e)
                    });
                    return
                }
                if (!t.id || !t.accountId || !t.calendarId) return;
                let a = [];
                for (let e of t.attendees ? ? []) "string" == typeof e.email && a.push(e.email);
                let r = new Map;
                if (a.length > 0) try {
                    let e = await i.api.callMainCellApi({
                        eventName: "findUsers",
                        environment: i,
                        data: {
                            emails: a
                        }
                    });
                    if ("success" === e.type)
                        for (let t of e.data.values) {
                            var s;
                            let e = null == (s = t.user) ? void 0 : s.value;
                            e && r.set(t.email, e.id)
                        }
                } catch (e) {
                    (0, n(222024).t)().error({
                        from: "deserializeCalendarEventFromDeepLink",
                        type: "findUsersFailed",
                        error: (0, n(161179).A)(e)
                    })
                }
                for (let e of t.attendees ? ? []) e.notionUserId = e.email ? r.get(e.email) : void 0;
                return t
            }
            async function a(e) {
                let t, {
                    environment: i,
                    parsedQueryString: a,
                    fallbackParams: r
                } = e;
                if (r && (t = (0, n(440143).Y)().getEvent({
                        id: r.eventId,
                        accountId: r.accountId,
                        calendarId: r.calendarId
                    })), t) return t;
                let s = "string" == typeof a.calendarEvent ? a.calendarEvent : void 0;
                return s && (t = await o({
                    environment: i,
                    serialized: s
                })), t
            }
            n.d(t, {
                $X: () => i,
                BY: () => a
            }), n(944114), n(816573), n(878100), n(177936), n(748140), n(821903), n(491134), n(128845), n(237467), n(444732), n(979577), n(964979)
        },
        382147: (e, t, n) => {
            n.d(t, {
                A: () => i
            });

            function i() {
                return `test+${(0,n(4962).Ay)().substring(0,8)}@makenotion.com`
            }
        },
        518896: (e, t, n) => {
            n.d(t, {
                e: () => o
            }), n(944114), n(581454);
            var i = () => n(382147);

            function o(e) {
                let {
                    date: t,
                    timeZone: o,
                    eventsData: a
                } = e;
                return a.map((e, a) => {
                    let r = `placeholder-event-${a+1}`,
                        s = `placeholder-event-uid-${a+1}`,
                        l = new Date(t.getFullYear(), t.getMonth(), t.getDate(), e.startHour, e.startMinute),
                        d = new Date(l.getTime() + 36e5),
                        c = e.attendeeCount ? function(e) {
                            let t = [];
                            for (let n = 0; n < e; n++) {
                                let e = (0, i().A)();
                                t.push({
                                    email: e,
                                    responseStatus: "accepted",
                                    resource: !1,
                                    self: 0 === n,
                                    organizer: 0 === n
                                })
                            }
                            return t
                        }(e.attendeeCount) : void 0,
                        u = function(e, {
                            calendarId: t,
                            accountId: n
                        }) {
                            return { ...e,
                                calendarId: t,
                                accountId: n
                            }
                        }(function({
                            id: e,
                            uid: t,
                            type: i,
                            start: o,
                            end: a,
                            overrides: r
                        }) {
                            let s = {
                                id: e,
                                uid: t,
                                summary: e,
                                provider: "google",
                                isOwner: !0,
                                url: "https://example.com",
                                hasParticipants: !1,
                                hasConferencingOrLocation: !1,
                                ...r
                            };
                            switch (i) {
                                case "allDay":
                                    return { ...s,
                                        isAllDay: !0,
                                        start: {
                                            date: o
                                        },
                                        end: {
                                            date: a
                                        }
                                    };
                                case "timed":
                                    return { ...s,
                                        isAllDay: !1,
                                        start: {
                                            dateTime: o
                                        },
                                        end: {
                                            dateTime: a
                                        }
                                    };
                                default:
                                    (0, n(722371).HB)(i)
                            }
                        }({
                            id: r,
                            uid: s,
                            type: "timed",
                            start: l.toISOString(),
                            end: d.toISOString(),
                            overrides: {
                                isPlaceholderEvent: !0,
                                hasParticipants: !!(null == c ? void 0 : c.length),
                                attendees: c,
                                ...e.overrides ? ? {}
                            }
                        }), {
                            calendarId: "placeholder-calendar-id",
                            accountId: "placeholder-account-id"
                        });
                    return { ...u,
                        start: { ...u.start,
                            timeZone: o
                        },
                        end: { ...u.end,
                            timeZone: o
                        }
                    }
                })
            }
        },
        562295: (e, t, n) => {
            n.d(t, {
                H: () => o
            }), n(296540);
            var i = n(474848);

            function o(e) {
                let t = (0, n(533992).Y0)().isPhone ? "captionRegular" : "bodyRegular";
                return (0, i.jsx)(n(111010).D, {
                    styleKey: t,
                    colorVariant: "tertiary",
                    children: e.children
                })
            }
        },
        762762: (e, t, n) => {
            n.d(t, {
                Al: () => c,
                R0: () => l,
                Xr: () => r,
                nE: () => a
            });
            var i = () => n(132458);
            let o = ["target", "accountId", "calendarId", "eventId", "spaceId", "notionAccountId", "notionUserId", "blockId", "eventUid", "calendarEvent", "accountEmail", "workspaceName", "transcribeonly"];

            function a(e) {
                let {
                    transcribeOnly: t,
                    ...n
                } = e;
                return s({
                    target: "transcription_confirmation",
                    ...n,
                    ...t ? {
                        transcribeonly: "true"
                    } : void 0
                })
            }

            function r(e) {
                return s({
                    target: "open_linked_meeting_note",
                    ...e
                })
            }

            function s(e) {
                return (0, n(758654).Gm)({
                    url: n(986939).A.domainBaseUrl,
                    query: e
                })
            }

            function l() {
                for (let e of o)(0, i().C)(e)
            }

            function d(e, t) {
                let n = e[t];
                return "string" == typeof n ? n : void 0
            }

            function c(e) {
                let t = d(e, "accountId"),
                    n = d(e, "calendarId"),
                    i = d(e, "eventId");
                if (t && n && i) return {
                    accountId: t,
                    calendarId: n,
                    eventId: i,
                    spaceId: d(e, "spaceId"),
                    notionAccountId: d(e, "notionAccountId"),
                    accountEmail: d(e, "accountEmail"),
                    workspaceName: d(e, "workspaceName"),
                    transcribeOnly: "true" === e.transcribeonly
                }
            }
        },
        799476: (e, t, n) => {
            n.d(t, {
                s: () => r,
                v: () => g
            });
            var i = n(296540);
            let o = new(n(815048)).O2("TranscriptionBlockConsentActions", async () => (await Promise.all([n.e(75134), n.e(56809), n.e(21753), n.e(30603)]).then(n.bind(n, 45442))).TranscriptionBlockConsentActions);
            var a = n(474848);

            function r() {
                return (0, n(280660).a)() ? (0, a.jsx)(n(109939).sA, {
                    defaultMessage: "By starting, you confirm everyone consents to being recorded and transcribed.",
                    id: "transcription.consentHeader.willSaveLocalRecordings.label"
                }) : (0, a.jsx)(n(109939).sA, {
                    defaultMessage: "By starting, you confirm everyone being transcribed has given consent.",
                    id: "transcription.consentHeader.label"
                })
            }
            let s = {
                    alignItems: "center"
                },
                l = {
                    alignItems: "center",
                    gap: 10
                },
                d = {
                    width: "100%",
                    minWidth: 0
                },
                c = {
                    height: 20
                },
                u = {
                    width: 440
                },
                p = {
                    transform: "translateY(-1px)"
                };

            function m() {
                let e = (0, n(553635).sD)(),
                    {
                        store: t
                    } = (0, n(308240).s)();
                (0, n(553635).VD)({
                    blockId: t.id,
                    shouldLog: !0
                });
                let m = i.useRef(null),
                    g = (0, n(729787).wY)(m),
                    h = (0, n(682985).K8)(() => (0, n(335818).mb)(t), [t]),
                    y = (0, n(210301).OS)((null == g ? void 0 : g.width) ? ? Number.MAX_VALUE),
                    v = (0, a.jsx)(n(815048).u2, {
                        dependency: o,
                        renderLoading: () => (0, a.jsx)(n(280822).k, {}),
                        children: e => (0, a.jsx)(e, {})
                    });
                return e ? (0, a.jsx)(n(673932).Y, {
                    location: "footer",
                    actions: v,
                    persistent: !0,
                    children: (0, a.jsx)("div", {
                        ref: m,
                        style: d,
                        children: (0, a.jsxs)(n(4458).fI, {
                            gap: "inherit",
                            style: { ...s,
                                gap: 14
                            },
                            children: [(0, a.jsxs)(n(4458).fI, {
                                gap: "inherit",
                                style: l,
                                children: [(0, a.jsx)(n(902276).y, {
                                    hidePrefix: y
                                }), (0, a.jsx)("div", {
                                    style: c,
                                    children: (0, a.jsx)(n(346268).c, {
                                        type: "vertical",
                                        size: 1
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                style: u,
                                children: (0, a.jsx)("div", {
                                    style: p,
                                    children: (0, a.jsx)(n(218116)._, {
                                        delayInitialMs: 2e3,
                                        showFadeout: !0,
                                        cycleLimit: 1,
                                        children: (0, a.jsx)(n(562295).H, {
                                            children: (0, a.jsx)(r, {})
                                        })
                                    })
                                })
                            })]
                        })
                    })
                }) : (0, a.jsx)(n(673932).Y, {
                    location: "footer",
                    actions: v,
                    persistent: !0,
                    children: (0, a.jsx)(n(218116)._, {
                        delayInitialMs: 2e3,
                        showFadeout: !0,
                        fadeoutColorVariant: h ? "elevated" : "primary",
                        cycleLimit: 1,
                        children: (0, a.jsx)(n(562295).H, {
                            children: (0, a.jsx)(r, {})
                        })
                    })
                })
            }
            let g = {
                id: "consent",
                location: "footer",
                getPriority: e => {
                    let {
                        environment: t,
                        state: n,
                        canUse: i
                    } = e, {
                        currentUser: o
                    } = t;
                    if (!i || "summarizing" === n.state || "idle" === n.state) return "not_eligible";
                    if ("initial" === n.state || "paused" === n.state);
                    else if ("transcribing" === n.state || "recorded_audio_transcribing" === n.state || "recorded_audio_file_uploading" === n.state) return n.transcriber_id === o.id ? "low" : "not_eligible";
                    return "high"
                },
                render: () => (0, a.jsx)(m, {})
            }
        },
        902276: (e, t, n) => {
            n.d(t, {
                y: () => o
            });
            let i = new(n(815048)).O2("SummaryFormatFooterMenu", async () => Promise.all([n.e(53050), n.e(87353), n.e(53847), n.e(5721), n.e(57688), n.e(79349), n.e(48486), n.e(87539), n.e(71136), n.e(86102), n.e(38883), n.e(36264)]).then(n.bind(n, 830021))),
                o = (0, n(815048)._h)(i, e => e.SummaryFormatFooterMenu)
        },
        924394: (e, t, n) => {
            n.d(t, {
                vT: () => et,
                jO: () => ee,
                tP: () => en
            }), n(944114), n(898992), n(354520), n(672577), n(430670), n(581454);
            var i = () => n(906745),
                o = n(296540),
                a = () => n(111010),
                r = () => n(120462),
                s = () => n(399161),
                l = n(474848);

            function d({
                isDateToday: e
            }) {
                let t = (0, n(960253).e)();
                return (0, n(960253).I)(() => ({
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        width: 46,
                        height: 49,
                        overflow: "hidden",
                        backgroundColor: n(632079).Tj.whiteButtonBackground,
                        boxShadow: `inset 0 0 0 1px ${"light"===t?n(632079).Tj.palette.gray[75]:n(632079).Tj.palette.translucentGray[200]}`,
                        borderRadius: 8
                    },
                    dayOfWeekContainer: {
                        height: 20,
                        display: "grid",
                        placeContent: "center",
                        padding: "0 4px",
                        backgroundColor: e ? "light" === t ? n(632079).Tj.palette.red[500] : "#CD4945" : void 0,
                        backgroundClip: "padding-box",
                        boxSizing: "content-box",
                        boxShadow: `0 1px 0 0 ${"light"===t?n(632079).Tj.palette.gray[75]:n(632079).Tj.palette.translucentGray[200]}`
                    },
                    dayOfWeekLabel: {
                        color: e ? "white" : n(632079).Tj.text.secondary
                    }
                }), [e, t])
            }
            let c = {
                    flex: 1,
                    display: "grid",
                    placeContent: "center",
                    padding: "0 4px"
                },
                u = {
                    width: "100%",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    textAlign: "center",
                    userSelect: "none",
                    WebkitUserSelect: "none"
                };

            function p({
                date: e
            }) {
                let t = (0, n(109939).tz)(),
                    i = (0, n(132315).s5)(),
                    o = (0, n(74423).cK)(e, i),
                    r = new Date(e).toLocaleDateString(t.locale, {
                        weekday: "short",
                        timeZone: "UTC"
                    }),
                    s = new Date(e).toLocaleDateString(t.locale, {
                        day: "2-digit",
                        timeZone: "UTC"
                    }),
                    m = d({
                        isDateToday: o
                    });
                return (0, l.jsxs)("div", {
                    style: m.container,
                    children: [(0, l.jsx)("div", {
                        style: m.dayOfWeekContainer,
                        children: (0, l.jsx)(a().D, {
                            styleKey: "captionMedium",
                            style: { ...u,
                                ...m.dayOfWeekLabel
                            },
                            children: r
                        })
                    }), (0, l.jsx)("div", {
                        style: c,
                        children: (0, l.jsx)(a().D, {
                            styleKey: "titleSemibold",
                            colorVariant: "primary",
                            style: u,
                            children: s
                        })
                    })]
                })
            }

            function m({
                date: e,
                forceGray: t = !1
            }) {
                let i = (0, n(109939).tz)(),
                    o = (0, n(132315).s5)(),
                    a = (0, n(74423).cK)(e, o),
                    r = new Date(e),
                    s = r.toLocaleDateString(i.locale, {
                        weekday: "short",
                        timeZone: "UTC"
                    }),
                    d = r.toLocaleDateString(i.locale, {
                        month: "short",
                        day: "numeric",
                        timeZone: "UTC"
                    }),
                    c = `${s} ${d}`,
                    u = !t && a,
                    p = (0, n(960253).I)(() => ({
                        label: { ...n(649316).U.captionMedium,
                            color: u ? n(632079).Tj.red.text.accentPrimary : n(632079).Tj.text.secondary
                        }
                    }), [u]);
                return (0, l.jsx)("span", {
                    style: p.label,
                    children: c
                })
            }
            let g = {
                marginBottom: 24
            };

            function h(e) {
                let [t, i] = (0, o.useState)(), {
                    displayState: a,
                    hasSignupBeenAttempted: r
                } = e;
                if (t === a || !r) return null;

                function s(e) {
                    return (0, l.jsx)("div", {
                        style: g,
                        children: (0, l.jsx)(n(141342).l, {
                            label: e,
                            display: "inline",
                            tint: "yellow",
                            staticIcon: () => (0, l.jsx)(n(708966).Q, {
                                iconGroup: n(985543).Z,
                                variantName: "default",
                                colorPalette: "yellow",
                                colorVariant: "secondary"
                            }),
                            onDismiss: () => i(a)
                        })
                    })
                }
                switch (a) {
                    case "disconnectedAccount":
                    case "loadError":
                    case "signedOut":
                    case "events":
                    case "noEvents":
                    case "loading":
                        return null;
                    case "missingScopes":
                        return s((0, l.jsx)(n(109939).sA, {
                            id: "meetingsPage.upcomingMeetings.missingScopes",
                            defaultMessage: "Please provide all required scopes to see your upcoming meetings."
                        }));
                    case "accountMismatch":
                        return s((0, l.jsx)(n(109939).sA, {
                            id: "meetingsPage.upcomingMeetings.accountMismatch",
                            defaultMessage: "The provided email doesn’t match your workspace. Connect with your workspace email."
                        }));
                    default:
                        return (0, n(722371).HB)(a), null
                }
            }

            function y(e) {
                let t = (0, n(109939).tz)(),
                    i = (0, o.useRef)(null),
                    a = (0, n(729787).wY)(i),
                    r = null != a && !!a.width && a.width < 620,
                    s = (0, n(132315).s5)(),
                    d = (0, n(682985).K8)(() => {
                        let e = s.toJSDate(),
                            i = s.zoneName,
                            o = [{
                                startHour: 9,
                                startMinute: 0,
                                attendeeCount: 11,
                                overrides: {
                                    summary: t.formatMessage(v.placeholderEventTitle1),
                                    responseStatus: "accepted"
                                }
                            }, {
                                startHour: 10,
                                startMinute: 0,
                                attendeeCount: 18,
                                overrides: {
                                    summary: t.formatMessage(v.placeholderEventTitle2),
                                    responseStatus: "accepted"
                                }
                            }, {
                                startHour: 14,
                                startMinute: 30,
                                attendeeCount: 3,
                                overrides: {
                                    summary: t.formatMessage(v.placeholderEventTitle3),
                                    responseStatus: "needsAction"
                                }
                            }, {
                                startHour: 17,
                                startMinute: 30,
                                attendeeCount: 0,
                                overrides: {
                                    summary: t.formatMessage(v.placeholderEventTitle4),
                                    responseStatus: "accepted"
                                }
                            }];
                        return (0, n(518896).e)({
                            date: e,
                            timeZone: i,
                            eventsData: o
                        })
                    }, [t, s]),
                    c = d.slice(0, r ? 2 : d.length);
                (0, n(383953).w)(() => {
                    (0, n(104310).u)({
                        event: {
                            eventName: "upcoming_meetings_disconnected_state_viewed",
                            eventProperties: {}
                        }
                    })
                });
                let u = (0, o.useCallback)(t => {
                        switch (t) {
                            case "signupInitiated":
                                (0, n(104310).u)({
                                    event: {
                                        eventName: "upcoming_meetings_connect_calendar_clicked",
                                        eventProperties: {}
                                    }
                                });
                                break;
                            case "oAuthWindowClosedByUser":
                                (0, n(104310).u)({
                                    event: {
                                        eventName: "upcoming_meetings_connect_calendar_closed",
                                        eventProperties: {}
                                    }
                                });
                                break;
                            case "signupFailure":
                            case "secondaryDataLoadFailure":
                            case "missingEmailOrSpaceId":
                                (0, n(104310).u)({
                                    event: {
                                        eventName: "upcoming_meetings_connect_calendar_failed",
                                        eventProperties: {}
                                    }
                                });
                                break;
                            case "secondaryDataLoaded":
                                e.setHasSignupBeenAttempted(!0)
                        }
                    }, [e]),
                    p = (0, n(960253).I)(() => ({
                        container: {
                            display: "flex",
                            flexDirection: r ? "column" : "row",
                            alignItems: r ? "flex-start" : "center",
                            gap: 16
                        },
                        contentContainer: {
                            width: r ? "100%" : "50%"
                        },
                        sampleEventsContainer: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            pointerEvents: "none",
                            width: r ? "100%" : "50%"
                        }
                    }), [r]);
                return (0, l.jsxs)("div", {
                    style: p.container,
                    ref: i,
                    children: [(0, l.jsx)("div", {
                        style: p.contentContainer,
                        children: (0, l.jsx)(n(748713).U, {
                            from: "upcomingMeetings",
                            provider: "auto",
                            onGeneratorYield: u,
                            children: ({
                                isLoading: e,
                                onClick: t
                            }) => (0, l.jsx)(n(789597).h, {
                                title: (0, l.jsx)(n(109939).sA, { ...v.title
                                }),
                                buttonProps: {
                                    onClick: t,
                                    isLoading: e,
                                    children: (0, l.jsx)(n(109939).sA, { ...v.button
                                    })
                                }
                            })
                        })
                    }), (0, l.jsx)("div", {
                        style: p.sampleEventsContainer,
                        children: c.map((e, t) => (0, l.jsx)(n(96686).rX, {
                            event: e,
                            isPrimary: !1,
                            isActive: 0 === t,
                            isWithin5Min: !1,
                            isWithin30Min: !1
                        }, e.id))
                    })]
                })
            }
            let v = (0, n(109939).YK)({
                title: {
                    id: "upcomingMeetingsDisconnectedState.title",
                    defaultMessage: "Start AI Meeting Notes automatically for your upcoming events."
                },
                button: {
                    id: "upcomingMeetingsDisconnectedState.button",
                    defaultMessage: "Connect Calendar"
                },
                placeholderEventTitle1: {
                    id: "upcomingMeetingsDisconnectedState.placeholderEventTitle1",
                    defaultMessage: "Teamwide Morning Alignment"
                },
                placeholderEventTitle2: {
                    id: "upcomingMeetingsDisconnectedState.placeholderEventTitle2",
                    defaultMessage: "Project Progress Preview"
                },
                placeholderEventTitle3: {
                    id: "upcomingMeetingsDisconnectedState.placeholderEventTitle3",
                    defaultMessage: "Quarterly Strategy Update"
                },
                placeholderEventTitle4: {
                    id: "upcomingMeetingsDisconnectedState.placeholderEventTitle4",
                    defaultMessage: "Sprint Wrap-Up"
                }
            });
            n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(823215);
            var f = () => n(16275),
                x = () => n(51831),
                j = () => n(844565),
                _ = () => n(697198),
                M = () => n(211052);
            let b = ["accountMismatch", "disconnectedAccount", "missingScopes", "signedOut", "events", "noEvents"],
                S = ["events_without_participants"],
                k = {
                    minWidth: 200
                },
                C = {
                    display: "flex",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    padding: 0
                },
                w = {
                    marginInlineEnd: -6
                },
                T = {
                    padding: 4
                },
                I = {
                    gap: 0,
                    padding: 0
                },
                A = {
                    margin: "6px 0"
                },
                P = {
                    marginInlineStart: 6,
                    marginInlineEnd: 2
                },
                D = {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                E = {
                    width: 230
                };

            function B({
                displayState: e
            }) {
                let t = (0, n(109939).tz)(),
                    i = (0, n(682985).uB)(void 0, n(510969).A),
                    o = (0, n(83208).X)("upcoming_meetings_outlook_account_connect"),
                    {
                        calendarAccounts: s,
                        eligibleAccounts: d
                    } = (0, n(682985).K8)(() => {
                        var e;
                        let t = (0, n(440143).Y)().getCurrentAccountIds().map(e => (0, n(440143).Y)().getAccount(e)).filter(n(722371).O9).filter(e => "notion" !== e.provider),
                            i = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getEmail(),
                            o = n(218744).default.checkGate({
                                gateName: "aimn_multi_calendar_account_visibility"
                            });
                        return {
                            calendarAccounts: t,
                            eligibleAccounts: i ? (0, r().RM)({
                                currentUserEmail: i,
                                calendars: (0, n(440143).Y)().getCurrentCalendars() ? ? [],
                                accounts: (0, n(440143).Y)().getCurrentAccounts(),
                                allowAllCalendarAccounts: o
                            }).eligibleAccounts : []
                        }
                    }, []);
                if (!o && !b.includes(e)) return null;
                let c = [function() {
                    if (!o && !["events", "noEvents"].includes(e)) return;
                    let i = {
                            key: "event-settings",
                            items: []
                        },
                        r = function() {
                            if (!d.length && !o) return;
                            let e = [],
                                i = new Set(d.map(({
                                    account: e
                                }) => e.id)),
                                r = s.every(e => i.has(e.id));
                            for (let {
                                    account: n,
                                    calendars: i
                                } of d) {
                                let o = {
                                    key: `eligible_account_${n.id}`,
                                    render: e => (0, l.jsx)(j().A, { ...e,
                                        style: I,
                                        desktopTitleStyle: A,
                                        title: (0, l.jsx)(a().D, {
                                            styleKey: "captionMedium",
                                            colorVariant: "secondary",
                                            style: D,
                                            children: n.displayName
                                        }),
                                        right: r ? void 0 : (0, l.jsx)(x().m, {
                                            content: () => t.formatMessage(W.calendarsSubmenuTooltip),
                                            textWrap: !0,
                                            style: E,
                                            children: e => (0, l.jsx)("div", { ...e,
                                                style: P,
                                                children: (0, l.jsx)(f().I, {
                                                    icon: M().questionMarkCircleSmallIcon,
                                                    size: "sm",
                                                    colorVariant: "secondary"
                                                })
                                            })
                                        })
                                    }),
                                    items: i.map(e => ({
                                        key: `eligible_calendar_${e.id}`,
                                        render: t => (0, l.jsx)(z, {
                                            calendar: e,
                                            ...t
                                        }),
                                        action: () => {}
                                    }))
                                };
                                e.push(o)
                            }
                            for (let t of s) {
                                if (i.has(t.id)) continue;
                                let n = {
                                    key: `non_eligible_account_${t.id}`,
                                    render: e => (0, l.jsx)(j().A, { ...e,
                                        style: I,
                                        desktopTitleStyle: A,
                                        title: (0, l.jsx)(a().D, {
                                            styleKey: "captionMedium",
                                            colorVariant: "tertiary",
                                            style: D,
                                            children: t.displayName
                                        }),
                                        right: (0, l.jsx)(f().I, {
                                            icon: _().lockSmallIcon,
                                            size: "sm",
                                            colorVariant: "disabled",
                                            style: P
                                        })
                                    }),
                                    items: []
                                };
                                e.push(n)
                            }
                            if (o) {
                                let i = function() {
                                    if (!o) return;
                                    let e = {
                                        key: "add-calendar-account-submenu",
                                        items: [{
                                            key: "connect-google-account",
                                            render: e => (0, l.jsx)(n(748713).U, {
                                                from: "upcomingMeetings",
                                                provider: "google",
                                                children: ({
                                                    isLoading: i,
                                                    onClick: o
                                                }) => (0, l.jsx)(n(95582).A, { ...e,
                                                    icon: (0, l.jsx)(f().I, {
                                                        icon: n(930646).googleIcon
                                                    }),
                                                    title: t.formatMessage(W.connectGoogleAccount),
                                                    disabled: i,
                                                    onClick: e => {
                                                        e.stopPropagation(), o()
                                                    }
                                                })
                                            }),
                                            action: () => {}
                                        }, {
                                            key: "connect-outlook-account",
                                            render: e => (0, l.jsx)(n(748713).U, {
                                                from: "upcomingMeetings",
                                                provider: "outlook",
                                                children: ({
                                                    isLoading: i,
                                                    onClick: o
                                                }) => (0, l.jsx)(n(95582).A, { ...e,
                                                    icon: (0, l.jsx)(f().I, {
                                                        icon: n(40242).microsoftOutlookIcon
                                                    }),
                                                    title: t.formatMessage(W.connectOutlookAccount),
                                                    disabled: i,
                                                    onClick: e => {
                                                        e.stopPropagation(), o()
                                                    }
                                                })
                                            }),
                                            action: () => {}
                                        }, {
                                            key: "connect-icloud-account",
                                            render: e => (0, l.jsx)(n(748713).U, {
                                                from: "upcomingMeetings",
                                                provider: "icloud",
                                                children: ({
                                                    isLoading: i,
                                                    onClick: o
                                                }) => (0, l.jsx)(n(95582).A, { ...e,
                                                    icon: (0, l.jsx)(f().I, {
                                                        icon: n(680983).appleIcon
                                                    }),
                                                    title: t.formatMessage(W.connectICloudAccount),
                                                    disabled: i,
                                                    onClick: e => {
                                                        e.stopPropagation(), o()
                                                    }
                                                })
                                            }),
                                            action: () => {}
                                        }]
                                    };
                                    return {
                                        key: "add-calendar-account",
                                        render: (i, o) => (0, l.jsx)(n(816231).A, { ...i,
                                            icon: (0, l.jsx)(f().I, {
                                                icon: n(581923).plusIcon
                                            }),
                                            onFocus: o.onFocus,
                                            alignmentToOrigin: "start",
                                            renderExtension: t => (0, l.jsx)(n(747369).A, { ...t,
                                                menuType: n(649476).gu.Popup,
                                                minWidth: 180,
                                                maxWidth: 220,
                                                children: (0, l.jsx)(n(558045).A, {
                                                    type: n(558045).O.Vertical,
                                                    initialFocus: 0,
                                                    sections: [e]
                                                })
                                            }),
                                            children: (e, i) => (0, l.jsx)(n(95582).A, { ...e,
                                                ref: i,
                                                title: t.formatMessage(W.addCalendarAccount),
                                                onClick: t => {
                                                    var n;
                                                    null == (n = e.onClick) || n.call(e, t)
                                                }
                                            })
                                        }),
                                        action: () => {}
                                    }
                                }();
                                if (i) {
                                    let t = e.length > 0;
                                    e.push({
                                        key: "accounts",
                                        render: e => (0, l.jsx)(j().A, { ...e,
                                            topBorder: t
                                        }),
                                        items: [i]
                                    })
                                }
                            }
                            return {
                                key: "calendars",
                                render: (i, o) => (0, l.jsx)(n(816231).A, { ...i,
                                    icon: (0, l.jsx)(f().I, {
                                        icon: n(998172).D
                                    }),
                                    onFocus: o.onFocus,
                                    alignmentToOrigin: "start",
                                    renderExtension: t => (0, l.jsx)(n(747369).A, { ...t,
                                        menuType: n(649476).gu.Popup,
                                        minWidth: 250,
                                        maxWidth: 300,
                                        children: (0, l.jsx)(n(558045).A, {
                                            type: n(558045).O.Vertical,
                                            initialFocus: 0,
                                            sections: e,
                                            style: T
                                        })
                                    }),
                                    children: (e, i) => (0, l.jsx)(n(95582).A, { ...e,
                                        ref: i,
                                        title: t.formatMessage(W.calendars),
                                        right: d.length > 0 ? (0, l.jsx)(a().D, {
                                            styleKey: "bodyRegular",
                                            colorVariant: "tertiary",
                                            style: w,
                                            children: d.length
                                        }) : void 0,
                                        onClick: t => {
                                            var n;
                                            null == (n = e.onClick) || n.call(e, t)
                                        }
                                    })
                                }),
                                action: () => {}
                            }
                        }();
                    r && i.items.push(r);
                    let c = S.length ? S.map(e => ({
                        key: `eventFilter_${e}`,
                        render: t => (0, l.jsx)(n(785417).c, { ...t,
                            filter: e,
                            entrypoint: "upcoming_meetings"
                        }),
                        action: () => {}
                    })) : [];
                    return i.items.push(...c), i.items.length > 0 ? i : void 0
                }()].filter(n(722371).O9);
                return c.length ? (0, l.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    buttonPopupStore: i,
                    style: k,
                    alignmentToOrigin: "end",
                    onOpen: () => {
                        (0, n(104310).u)({
                            event: {
                                eventName: "ai_meetings_tab_upcoming_meetings_settings_opened",
                                eventProperties: {
                                    display_state: e
                                }
                            }
                        })
                    },
                    content: () => (0, l.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        maxWidth: 300,
                        children: (0, l.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            sections: c,
                            initialFocus: 0,
                            onAccept: () => {
                                i.setState({
                                    open: !1
                                })
                            }
                        })
                    }),
                    children: e => (0, l.jsx)(x().m, {
                        content: () => t.formatMessage(W.settings),
                        children: t => (0, l.jsx)(n(988022).p, {
                            style: C,
                            ...(0, n(63390).A)(e, t),
                            children: (0, l.jsx)(f().I, {
                                icon: n(213039).M,
                                size: "sm",
                                colorVariant: "secondary"
                            })
                        })
                    })
                }) : null
            }
            let N = {
                    gap: 6
                },
                O = {
                    display: "grid",
                    placeContent: "center",
                    width: 20,
                    height: 20
                },
                L = {
                    marginInlineEnd: 24,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                };

            function z({
                calendar: e,
                ...t
            }) {
                let i = (0, n(960253).e)(),
                    o = (0, n(960253).I)(() => ({
                        calendarColorIcon: {
                            width: 14,
                            height: 14,
                            borderRadius: 4,
                            backgroundColor: (0, n(588727).QL)({
                                theme: n(632079).Tj,
                                calendarColor: null == e ? void 0 : e.color,
                                themeMode: i
                            })
                        }
                    }), [null == e ? void 0 : e.color, i]);
                return (0, l.jsx)(n(95582).A, { ...t,
                    style: N,
                    left: (0, l.jsx)("div", {
                        style: O,
                        children: (0, l.jsx)("div", {
                            style: o.calendarColorIcon
                        })
                    }),
                    title: (0, l.jsx)(a().D, {
                        styleKey: "bodyRegular",
                        colorVariant: "primary",
                        style: L,
                        children: e.name
                    }),
                    disabled: !0
                })
            }
            let W = (0, n(109939).YK)({
                    settings: {
                        id: "meetingsPage.upcomingMeetings.settings",
                        defaultMessage: "Settings"
                    },
                    addCalendarAccount: {
                        id: "meetingsPage.upcomingMeetings.settings.addCalendarAccount",
                        defaultMessage: "Add calendar account"
                    },
                    connectGoogleAccount: {
                        id: "meetingsPage.upcomingMeetings.settings.connectGoogleAccount",
                        defaultMessage: "Google"
                    },
                    connectOutlookAccount: {
                        id: "meetingsPage.upcomingMeetings.settings.connectOutlookAccount",
                        defaultMessage: "Outlook"
                    },
                    connectICloudAccount: {
                        id: "meetingsPage.upcomingMeetings.settings.connectICloudAccount",
                        defaultMessage: "iCloud"
                    },
                    calendars: {
                        id: "meetingsPage.upcomingMeetings.settings.calendars",
                        defaultMessage: "Calendars"
                    },
                    calendarsSubmenuTooltip: {
                        id: "meetingsPage.upcomingMeetings.settings.calendarsSubmenuTooltip",
                        defaultMessage: "Only events from your workspace email are eligible to appear in upcoming meetings"
                    }
                }),
                V = ["loading", "loadError", "accountMismatch", "disconnectedAccount", "missingScopes", "signedOut", "events", "noEvents"],
                K = {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 8,
                    minHeight: 40,
                    paddingInlineStart: 18,
                    paddingInlineEnd: 8
                };

            function R({
                displayState: e
            }) {
                let t = "noEvents" === e;
                return (0, n(83208).X)("upcoming_meetings_outlook_account_connect") || V.includes(e) ? (0, l.jsxs)("div", {
                    style: K,
                    children: [(0, l.jsx)(F, {
                        isEmptyState: t
                    }), (0, l.jsx)(B, {
                        displayState: e
                    })]
                }) : null
            }

            function F({
                isEmptyState: e
            }) {
                let t = (0, n(109939).tz)();
                return (0, l.jsx)(n(302785).S, {
                    title: t.formatMessage(e ? U.emptyStateHeaderTitle : U.headerTitle),
                    icon: (0, l.jsx)(n(968107).y, {
                        size: "sm",
                        colorVariant: "secondary"
                    }),
                    hasRightElement: !1,
                    tooltip: t.formatMessage(U.tooltip)
                })
            }
            let U = (0, n(109939).YK)({
                    headerTitle: {
                        id: "meetingsPage.upcomingMeetings.headerTitle",
                        defaultMessage: "Upcoming meetings"
                    },
                    emptyStateHeaderTitle: {
                        id: "meetingsPage.upcomingMeetings.emptyStateHeaderTitle",
                        defaultMessage: "No upcoming meetings"
                    },
                    tooltip: {
                        id: "meetingsPage.upcomingMeetings.tooltip",
                        defaultMessage: "See your upcoming events and create AI meeting notes for them"
                    }
                }),
                Y = [{
                    titleWidthPercent: "40%",
                    detailsWidthPercent: "30%"
                }, {
                    titleWidthPercent: "50%",
                    detailsWidthPercent: "40%"
                }, {
                    titleWidthPercent: "30%",
                    detailsWidthPercent: "20%"
                }],
                H = [{
                    titleWidthPercent: "60%",
                    detailsWidthPercent: "50%"
                }, {
                    titleWidthPercent: "70%",
                    detailsWidthPercent: "60%"
                }, {
                    titleWidthPercent: "50%",
                    detailsWidthPercent: "40%"
                }],
                $ = {
                    width: 4,
                    height: 48,
                    borderRadius: 2
                };

            function J({
                variation: e
            }) {
                let t = (0, o.useRef)(null),
                    i = (0, n(729787).wY)(t),
                    a = null != i && !!i.width && i.width < n(96686).n$,
                    r = e % (a ? H.length : Y.length),
                    {
                        titleWidthPercent: s,
                        detailsWidthPercent: d
                    } = a ? H[r] : Y[r],
                    c = (0, n(96686).w3)(),
                    u = (0, n(960253).I)(() => ({ ...c,
                        titleShimmer: {
                            width: s,
                            height: 16,
                            margin: "4px 0",
                            borderRadius: 12
                        },
                        detailsShimmer: {
                            width: d,
                            height: 16,
                            margin: "4px 0",
                            borderRadius: 9
                        }
                    }), [c, s, d]);
                return (0, l.jsxs)("div", {
                    ref: t,
                    style: u.eventCell,
                    children: [(0, l.jsx)(n(795830).P, {
                        style: $
                    }), (0, l.jsxs)("div", {
                        style: u.eventCellContent,
                        children: [(0, l.jsx)(n(795830).P, {
                            style: u.titleShimmer
                        }), (0, l.jsx)(n(795830).P, {
                            style: u.detailsShimmer
                        })]
                    })]
                })
            }

            function G() {
                let {
                    width: e,
                    height: t,
                    borderRadius: i
                } = d({
                    isDateToday: !0
                }).container, o = (0, n(960253).I)(() => ({
                    container: {
                        width: e,
                        height: t,
                        borderRadius: i
                    }
                }), [e, t, i]);
                return (0, l.jsx)(n(795830).P, {
                    style: o.container
                })
            }
            let q = {
                width: 100,
                height: 16,
                borderRadius: 8
            };

            function X() {
                return (0, l.jsx)(n(795830).P, {
                    style: q
                })
            }

            function Z({
                numEvents: e,
                isCompact: t
            }) {
                return (0, l.jsxs)("div", {
                    style: { ...ee.dayContainer,
                        ...t ? ee.compactDayContainer : {}
                    },
                    children: [t ? (0, l.jsx)(X, {}) : (0, l.jsx)("div", {
                        style: ee.dayBadgeContainer,
                        children: (0, l.jsx)(G, {})
                    }), (0, l.jsx)("div", {
                        style: ee.dayEventsContainer,
                        children: Array.from({
                            length: e
                        }, (e, t) => t).map(e => (0, l.jsx)(J, {
                            variation: e
                        }, e))
                    })]
                })
            }
            let Q = (0, n(109939).YK)({
                    showMore: {
                        id: "meetingsPage.upcomingMeetings.showMore",
                        defaultMessage: "Show more"
                    },
                    showLess: {
                        id: "meetingsPage.upcomingMeetings.showLess",
                        defaultMessage: "Show less"
                    }
                }),
                ee = {
                    container: {
                        display: "grid"
                    },
                    dayContainer: {
                        display: "flex",
                        gap: 24,
                        marginInlineStart: 4
                    },
                    compactDayContainer: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        marginInlineStart: 10
                    },
                    dayBadgeContainer: {
                        flexShrink: 0,
                        marginTop: 5
                    },
                    dayEventsContainer: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                    },
                    loadEventsButton: {
                        display: "flex",
                        gap: 6,
                        width: "min-content",
                        marginInlineStart: 62,
                        paddingInlineStart: 6
                    },
                    compactLoadEventsButton: {
                        marginInlineStart: -2
                    },
                    emptyStateContainer: {
                        height: 238
                    }
                };

            function et({
                providerType: e
            }) {
                var t;
                let i, r, s, [d, c] = (0, o.useState)(3),
                    {
                        displayState: u,
                        orderedDays: g,
                        eventsByDay: v,
                        totalEvents: f
                    } = en(),
                    [x, j] = (0, o.useState)(!1),
                    _ = (0, o.useRef)(null),
                    M = (0, n(729787).wY)(_),
                    b = (t = u, i = (0, o.useRef)(t), "loading" !== t && (i.current = t), i.current),
                    S = Math.max(0, Math.min(d, 9)),
                    k = null != M && !!M.width && M.width < 520,
                    C = (0, o.useCallback)(() => {
                        let e = [],
                            t = 0;
                        for (let n of g) {
                            let i = S - t;
                            if (i <= 0) break;
                            let o = v.get(n) ? ? [];
                            if (0 === o.length) continue;
                            let a = o.slice(0, i);
                            0 !== a.length && (e.push({
                                dayKey: n,
                                eventsForDay: a
                            }), t += a.length)
                        }
                        return e
                    }, [g, v, S])();
                (0, n(619772).A)(() => {
                    let e = C.flatMap(({
                        eventsForDay: e
                    }) => e.map(({
                        event: e,
                        isActive: t,
                        key: n
                    }) => {
                        var i;
                        return {
                            event_key: n,
                            total_attendees: (null == (i = e.attendees) ? void 0 : i.length) ? ? 0,
                            attendees_in_workspace: (e.attendees ? ? []).filter(e => !!e.notionUserId).length,
                            has_start_transcribing_cta: t
                        }
                    }));
                    (0, n(104310).u)({
                        event: {
                            eventName: "upcoming_meetings_impression_data_packet",
                            eventProperties: {
                                rendered_event_data: e,
                                total_events_loaded: f
                            }
                        }
                    })
                }, "events" === u);
                let w = (r = (0, n(533992).WS)(), s = (0, n(960253).e)(), (0, n(960253).I)(() => ({
                        homePanelWrapStyle: { ...(0, n(681693).V$)({
                                isPhone: r,
                                themeMode: s
                            }),
                            padding: 16
                        }
                    }), [r, s])),
                    T = ["disconnectedAccount", "missingScopes", "signedOut", "accountMismatch"].includes(b);
                return (0, l.jsxs)("div", {
                    style: ee.container,
                    children: [(0, l.jsx)(R, {
                        displayState: u
                    }), (0, l.jsxs)("div", {
                        ref: _,
                        style: w.homePanelWrapStyle,
                        children: [(0, l.jsx)(h, {
                            displayState: b,
                            hasSignupBeenAttempted: x
                        }), T ? (0, l.jsx)(y, {
                            setHasSignupBeenAttempted: j,
                            providerType: e
                        }) : void 0, T || "loading" !== u ? void 0 : (0, l.jsx)(Z, {
                            numEvents: 3,
                            isCompact: k
                        }), "events" === u ? (0, l.jsxs)(l.Fragment, {
                            children: [function() {
                                if (0 === C.length || 0 === C[0].eventsForDay.length) return null;
                                let e = C[0].eventsForDay[0];
                                return (0, l.jsx)(n(4458).VP, {
                                    gap: 12,
                                    children: C.map(({
                                        dayKey: t,
                                        eventsForDay: i
                                    }) => (0, l.jsxs)("div", {
                                        style: { ...ee.dayContainer,
                                            ...k ? ee.compactDayContainer : {}
                                        },
                                        children: [k ? (0, l.jsx)(m, {
                                            date: t
                                        }) : (0, l.jsx)("div", {
                                            style: ee.dayBadgeContainer,
                                            children: (0, l.jsx)(p, {
                                                date: t
                                            })
                                        }), (0, l.jsx)("div", {
                                            style: ee.dayEventsContainer,
                                            children: i.map(({
                                                key: t,
                                                event: i,
                                                primaryTranscriptionBlockStoreState: o,
                                                isActive: a,
                                                isWithin5Min: r,
                                                isWithin30Min: s
                                            }) => (0, l.jsx)(n(96686).rX, {
                                                event: i,
                                                primaryTranscriptionBlockStoreState: o,
                                                isPrimary: e.key === t,
                                                isActive: a,
                                                isWithin5Min: r,
                                                isWithin30Min: s
                                            }, t))
                                        })]
                                    }, t))
                                })
                            }(), "noEvents" === u || f <= 3 ? null : (0, l.jsx)(n(4458).fI, {
                                gap: 8,
                                marginTop: 8,
                                children: S >= 9 ? (0, l.jsx)(n(988022).p, {
                                    size: "lg",
                                    style: { ...ee.loadEventsButton,
                                        ...k ? ee.compactLoadEventsButton : {}
                                    },
                                    iconLeading: {
                                        icon: n(464913).arrowStraightUpSmallIcon,
                                        size: "sm",
                                        colorVariant: "secondary"
                                    },
                                    onClick: () => {
                                        (0, n(104310).u)({
                                            event: {
                                                eventName: "upcoming_meetings_show_less_clicked",
                                                eventProperties: {}
                                            }
                                        }), c(3)
                                    },
                                    children: (0, l.jsx)(a().D, {
                                        styleKey: "bodyMedium",
                                        colorVariant: "secondary",
                                        children: (0, l.jsx)(n(109939).sA, { ...Q.showLess
                                        })
                                    })
                                }) : (0, l.jsx)(n(988022).p, {
                                    size: "lg",
                                    style: { ...ee.loadEventsButton,
                                        ...k ? ee.compactLoadEventsButton : {}
                                    },
                                    iconLeading: {
                                        icon: n(242912).arrowStraightDownSmallIcon,
                                        size: "sm",
                                        colorVariant: "secondary"
                                    },
                                    onClick: () => {
                                        c(Math.min(9, S + 6)), (0, n(104310).u)({
                                            event: {
                                                eventName: "upcoming_meetings_show_more_clicked",
                                                eventProperties: {}
                                            }
                                        })
                                    },
                                    children: (0, l.jsx)(a().D, {
                                        styleKey: "bodyMedium",
                                        colorVariant: "secondary",
                                        children: (0, l.jsx)(n(109939).sA, { ...Q.showMore
                                        })
                                    })
                                })
                            })]
                        }) : void 0, "noEvents" === u ? (0, l.jsx)("div", {
                            style: ee.emptyStateContainer,
                            children: (0, l.jsx)(n(789597).s, {
                                type: "noEvents",
                                entrypoint: "upcoming_meetings"
                            })
                        }) : void 0]
                    })]
                })
            }

            function en() {
                let {
                    days: e,
                    displayState: t,
                    retryEventLoading: o,
                    isRetryEventLoadingEnabled: a
                } = (0, n(24962).O)("upcoming_meetings"), l = (0, n(682985).K8)(() => n(157129).Ku.getLastEvaluatedNow(), []), d = (0, n(682985).K8)(() => (0, n(787971).AD)(), []), c = (0, n(876252).$)(), u = (0, n(682985).K8)(() => null == c ? void 0 : c.getEmail(), [c]), p = (0, n(682985).K8)(() => {
                    if (!u) return [];
                    let e = n(218744).default.checkGate({
                        gateName: "aimn_multi_calendar_account_visibility"
                    });
                    return (0, r().RM)({
                        currentUserEmail: u,
                        calendars: (0, n(440143).Y)().getCurrentCalendars() ? ? [],
                        accounts: (0, n(440143).Y)().getCurrentAccounts(),
                        allowAllCalendarAccounts: e
                    }).allEligibleCalendars
                }, [u]), m = [], g = new Map, h = 0;
                for (let t of e) {
                    if (!u) continue;
                    let e = t.date;
                    m.push(e);
                    let n = [];
                    for (let e of t.timedEvents) {
                        let o = e.allSquashedEvents.find(e => (0, r().xM)({
                            event: e,
                            currentUserEmail: u,
                            eligibleCalendars: p
                        }));
                        if (!o || o.isAllDay || !("dateTime" in o.start) || !("dateTime" in o.end)) continue;
                        let a = i().DateTime.fromISO(o.start.dateTime),
                            c = i().DateTime.fromISO(o.end.dateTime),
                            m = a.minus({
                                seconds: 60
                            }),
                            g = c.plus({
                                seconds: 60
                            });
                        if (g < l) continue;
                        let h = a.diff(l, "minutes").minutes,
                            y = h > 0 && h <= 5,
                            v = h > 0 && h <= 30,
                            f = m <= l && g >= l;
                        n.push({
                            event: o,
                            primaryTranscriptionBlockStoreState: d[o.id],
                            isActive: f,
                            isWithin5Min: y,
                            isWithin30Min: v,
                            key: (0, s().ft)({
                                event: o,
                                date: t.date
                            })
                        })
                    }
                    n.length > 0 && (g.set(e, n), h += n.length)
                }
                let y = t;
                switch (t) {
                    case "signedOut":
                    case "disconnectedAccount":
                    case "missingScopes":
                    case "loading":
                    case "loadError":
                        break;
                    case "events":
                    case "noEvents":
                        if (0 === p.length) {
                            y = "accountMismatch";
                            break
                        }
                        0 === h && (y = "noEvents");
                        break;
                    default:
                        (0, n(722371).HB)(t)
                }
                return {
                    displayState: y,
                    orderedDays: m,
                    eventsByDay: g,
                    totalEvents: h,
                    retryEventLoading: o,
                    isRetryEventLoadingEnabled: a
                }
            }
        },
        976318: (e, t, n) => {
            n.d(t, {
                B: () => r
            }), n(944114), n(898992), n(354520), n(581454);
            var i = n(296540),
                o = n(474848);
            let a = (0, n(109939).YK)({
                    placeholder: {
                        id: "pageSelector.placeholder",
                        defaultMessage: "Search for a page or database…"
                    },
                    placeholderDatabasesOnly: {
                        id: "pageSelector.placeholderDatabasesOnly",
                        defaultMessage: "Search for a database…"
                    },
                    placeholderPagesOnly: {
                        id: "pageSelector.placeholderPagesOnly",
                        defaultMessage: "Search for a page…"
                    },
                    pagesSection: {
                        id: "pageSelector.pagesSection",
                        defaultMessage: "Pages"
                    },
                    collectionsSection: {
                        id: "pageSelector.collectionsSection",
                        defaultMessage: "Databases"
                    }
                }),
                r = i.forwardRef(function({
                    value: e,
                    onChange: t,
                    placeholder: r,
                    width: s = 300,
                    disabled: l = !1,
                    searchOptions: d,
                    hidePages: c = !1,
                    showCollections: u = !1,
                    pagesSectionTitle: p,
                    collectionsSectionTitle: m,
                    excludedBlockIds: g = [],
                    peopleBlocksToInclude: h,
                    children: y,
                    renderSections: v
                }, f) {
                    let x = (0, n(533992).v3)(),
                        j = (0, n(109939).tz)(),
                        [_, M] = (0, i.useState)(""),
                        b = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore),
                        S = (0, n(682985).uB)(void 0, n(419110).$),
                        [k, C] = (0, n(739271).s)(),
                        w = (0, n(960253).I)(() => ({
                            selectorButton: {
                                width: s,
                                justifyContent: "space-between"
                            }
                        }), [s]),
                        T = (0, n(682985).K8)(() => {
                            if (!e || !b) return null;
                            let t = "block" === e.table ? new(n(970831)).B(x, e) : new(n(356912)).m(x, e);
                            return t.getModel() ? {
                                id: e,
                                store: t
                            } : null
                        }, [b, x, e]),
                        I = (0, n(183464).W)({
                            type: n(821603).Vz.BlocksInSpace,
                            query: _,
                            source: d.source,
                            excludedBlockIds: g,
                            limit: 5,
                            filters: {
                                blockTypes: ["page"]
                            },
                            options: {
                                disable: c || !_
                            },
                            peopleBlocksToInclude: h
                        }),
                        A = (0, n(682985).K8)(() => _ && I.results.length > 0 ? I.results.map(e => ({
                            id: e.id,
                            store: e.store
                        })) : (n(601860).wI.state || []).filter(e => {
                            let t = e.store.getModel();
                            return (null == t ? void 0 : t.type) === "page"
                        }).slice(0, 5).map(e => ({
                            id: e.pageId,
                            store: e.store
                        })), [_, I.results]),
                        P = (0, n(183464).W)({
                            type: n(821603).Vz.CollectionsInSpace,
                            query: _,
                            source: d.source,
                            excludedBlockIds: g,
                            limit: 5,
                            options: {
                                disable: !u
                            },
                            peopleBlocksToInclude: h
                        }),
                        D = (0, i.useMemo)(() => P.results.length > 0 ? P.results.map(e => ({
                            id: e.id,
                            store: e.store,
                            collectionId: e.collectionId
                        })) : [], [P.results]),
                        E = (0, i.useMemo)(() => c && u ? j.formatMessage(a.placeholderDatabasesOnly) : c || u ? j.formatMessage(a.placeholder) : j.formatMessage(a.placeholderPagesOnly), [c, u, j]),
                        B = (0, n(682985).K8)(() => T ? (0, n(112293).Jq)(T.store, j, x) ? ? (0, n(112293).gG)(T.store, j) : r || E, [T, r, E, j, x]),
                        N = (0, i.useCallback)(e => {
                            null == t || t(e), M(""), S.unsetFocus()
                        }, [t, S]),
                        O = (0, i.useMemo)(() => {
                            let e = [];
                            e.push({
                                key: "search",
                                render: () => (0, o.jsx)(n(844565).A, {
                                    isInput: !0,
                                    children: (0, o.jsx)(n(310324).Ay, {
                                        placeholder: E,
                                        value: _,
                                        onChange: e => M(e.target.value),
                                        inputElementAttributes: k.inputElementAttributes,
                                        suppressFocusRing: k.suppressFocusRing,
                                        onFocus: k.onFocus,
                                        onBlur: k.onBlur
                                    })
                                }),
                                items: []
                            });
                            let t = A && A.length > 0,
                                i = I.isResultsLoading;
                            if (!c) {
                                let r = [...t ? A.map(e => ({
                                    key: e.id,
                                    action: () => N(e),
                                    render: t => (0, o.jsx)(n(103558).A, { ...t,
                                        store: e.store,
                                        showTooltipOnOverflow: !0
                                    })
                                })) : [], ...i ? [{
                                    key: "loading-pages-item",
                                    action: () => {},
                                    render: () => (0, o.jsx)(n(200261).A, {})
                                }] : []];
                                e.push({
                                    key: "pages",
                                    render: e => (0, o.jsx)(n(844565).A, {
                                        title: p || (0, o.jsx)(n(109939).sA, { ...a.pagesSection
                                        }),
                                        children: e.children
                                    }),
                                    items: r,
                                    showNoResultMessage: !i && !t
                                })
                            }
                            let r = D && D.length > 0,
                                s = P.isResultsLoading;
                            if (u) {
                                let t = [...r ? D.map(e => ({
                                    key: e.id,
                                    action: () => N(e),
                                    render: t => (0, o.jsx)(n(103558).A, { ...t,
                                        store: e.store,
                                        showTooltipOnOverflow: !0
                                    })
                                })) : [], ...s ? [{
                                    key: "loading-collections-item",
                                    action: () => {},
                                    render: () => (0, o.jsx)(n(200261).A, {})
                                }] : []];
                                e.push({
                                    key: "collections",
                                    render: e => (0, o.jsx)(n(844565).A, {
                                        title: m || (0, o.jsx)(n(109939).sA, { ...a.collectionsSection
                                        }),
                                        children: e.children
                                    }),
                                    items: t,
                                    showNoResultMessage: !s && !r
                                })
                            }
                            return v && (e = v(e)), e
                        }, [I.isResultsLoading, A, _, N, k, P.isResultsLoading, D, c, u, p, m, E, v]);
                    return (0, o.jsx)(n(656252).A, {
                        ref: f,
                        popupType: n(656252).z.Popup,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "end",
                        disabled: l,
                        content: () => (0, o.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Popup,
                            width: s,
                            maxHeight: 400,
                            children: (0, o.jsx)(n(558045).A, {
                                type: n(558045).O.Vertical,
                                initialFocus: void 0,
                                store: S,
                                comboboxProps: C,
                                sections: O
                            })
                        }),
                        children: y ? ? (e => (0, o.jsx)(n(548436).A, { ...e,
                            style: w.selectorButton,
                            colorPalette: T ? void 0 : "gray",
                            disabled: l,
                            iconTrailing: {
                                icon: n(595453).arrowChevronSingleDownSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            children: B
                        }))
                    })
                })
        }
    }
]);